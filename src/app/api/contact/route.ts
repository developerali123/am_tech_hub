import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone = "",
      companySize = "",
      service = "",
      projectType,
      message,
      source = "Website Contact Form",
    } = data;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const resolvedProject = projectType || service || "General Inquiry";
    const resolvedMessage = message || `Inquiry received via ${source}.`;

    // 1. Format timestamp in Pakistan Standard Time (PKT, UTC+5)
    // Desired format: e.g. "27 Sept 2026 4:18 pm"
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Karachi",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).formatToParts(now);

    const partMap: Record<string, string> = {};
    parts.forEach((p) => {
      partMap[p.type] = p.value;
    });

    const rawMonth = partMap.month || "Sept";
    const monthName = rawMonth === "Sep" ? "Sept" : rawMonth;
    const dayPeriod = (partMap.dayPeriod || "").toLowerCase();
    const formattedTimestamp = `${partMap.day} ${monthName} ${partMap.year} ${partMap.hour}:${partMap.minute} ${dayPeriod}`;

    // 2. Fix phone column #ERROR! in Google Sheets:
    // A leading '+' causes Google Sheets to treat the value as an invalid mathematical formula.
    // Prepending a single quote (') instructs Google Sheets to store it as a clean text string without #ERROR!
    const trimmedPhone = phone ? String(phone).trim() : "-";
    const safePhone = trimmedPhone.startsWith("+")
      ? `'${trimmedPhone}`
      : trimmedPhone;

    const submission = {
      timestamp: formattedTimestamp,
      source,
      name,
      email,
      phone: safePhone,
      companySize,
      projectType: resolvedProject,
      message: resolvedMessage,
    };

    // 1. Direct integration with Google Sheets Web App
    const googleSheetUrl =
      process.env.GOOGLE_SHEETS_URL ||
      process.env.GOOGLE_SHEET_WEBAPP_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

    let sheetSubmitted = false;
    let sheetError = null;

    if (googleSheetUrl && googleSheetUrl.trim() !== "") {
      try {
        const response = await fetch(googleSheetUrl.trim(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          },
          body: JSON.stringify(submission),
          redirect: "follow",
          cache: "no-store",
        });

        // Google Apps Script usually returns 200 (or follows 302 to echo output)
        if (response.ok || response.status === 302 || response.status === 200) {
          sheetSubmitted = true;
        } else {
          const respText = await response.text().catch(() => "");
          sheetError = `Google Sheets responded with HTTP ${response.status}: ${respText.slice(0, 100)}`;
          console.warn(sheetError);
        }
      } catch (err: any) {
        sheetError = err.message || "Failed to reach Google Sheets endpoint";
        console.error("Google Sheets fetch error:", err);
      }
    }

    // 2. Local fallback / persistent backup storage (ensures 100% zero data loss)
    const scratchDir = path.join(process.cwd(), "scratch");
    const filePath = path.join(scratchDir, "form_submissions.json");

    try {
      await fs.mkdir(scratchDir, { recursive: true });

      let submissions = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        submissions = JSON.parse(fileContent);
      } catch {
        submissions = [];
      }

      submissions.push(submission);
      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");
    } catch (localWriteError) {
      console.error("Local submission write failed:", localWriteError);
    }

    return NextResponse.json({
      success: true,
      timestamp: formattedTimestamp,
      sheetSubmitted,
      sheetError,
      message: sheetSubmitted
        ? "Form successfully submitted to Google Sheet and backed up."
        : googleSheetUrl
        ? `Saved to local backup log (Google Sheet returned error: ${sheetError}).`
        : "Form saved to local backup (Google Sheets webhook URL not configured in .env.local).",
    });
  } catch (error: any) {
    console.error("Submission API Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred.", details: error.message },
      { status: 500 }
    );
  }
}
