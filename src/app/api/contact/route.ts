import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, projectType, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const submission = {
      timestamp,
      name,
      email,
      projectType: projectType || "Not Specified",
      message,
    };

    // 1. Try to send to Google Sheets if environment variable is set
    const googleSheetUrl = process.env.GOOGLE_SHEETS_URL || process.env.GOOGLE_SHEET_WEBAPP_URL;
    let sheetSubmitted = false;
    let sheetError = null;

    if (googleSheetUrl) {
      try {
        const response = await fetch(googleSheetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submission),
        });

        if (response.ok) {
          sheetSubmitted = true;
        } else {
          sheetError = `Google Sheets returned status ${response.status}`;
        }
      } catch (err: any) {
        sheetError = err.message || "Failed to fetch Google Sheets endpoint";
      }
    }

    // 2. Local fallback storage (always save locally to prevent data loss)
    const scratchDir = path.join(process.cwd(), "scratch");
    const filePath = path.join(scratchDir, "form_submissions.json");

    try {
      // Ensure scratch directory exists
      await fs.mkdir(scratchDir, { recursive: true });

      let submissions = [];
      try {
        const fileContent = await fs.readFile(filePath, "utf-8");
        submissions = JSON.parse(fileContent);
      } catch (err) {
        // File does not exist or is invalid, start with empty array
      }

      submissions.push(submission);
      await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");
    } catch (localWriteError) {
      console.error("Local submission write failed:", localWriteError);
    }

    return NextResponse.json({
      success: true,
      timestamp,
      sheetSubmitted,
      sheetError,
      message: sheetSubmitted
        ? "Form successfully saved to Google Sheets and backup log."
        : "Form saved to local backup (Google Sheets webhook not configured or offline).",
    });
  } catch (error: any) {
    console.error("Submission API Error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred.", details: error.message },
      { status: 500 }
    );
  }
}
