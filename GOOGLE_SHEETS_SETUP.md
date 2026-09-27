# 📊 Linking AM Tech Hub Contact & Demo Forms to Google Sheets

All forms on your website (**Main Contact Form**, **HRMS Landing Form**, **Commercial POS Page Form**, and the **Interactive Demo Booking Modal**) are now connected to the unified backend route at `/api/contact`.

Follow the simple 2-minute setup below to link your forms directly to your personal or company Google Sheet.

---

## ⚡ Step 1: Create Your Google Sheet & Open Apps Script

1. Open [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it whatever you like (e.g., `AM Tech Hub - Leads & Inquiries`).
3. In the top menu bar, click **Extensions** ➔ **Apps Script**.

---

## 📋 Step 2: Paste This Google Apps Script Code

In the Apps Script editor, delete any default code inside `Code.gs` and paste the following:

```javascript
/**
 * AM Tech Hub - Lead Capture & Google Sheets Webhook
 * Automatically formats columns and appends incoming form submissions.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent concurrent write collisions

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rawData = e.postData ? e.postData.contents : null;
    var data = {};

    if (rawData) {
      try {
        data = JSON.parse(rawData);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    // 1. Auto-create styled headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp (UTC)",
        "Lead Source",
        "Full Name",
        "Work Email",
        "Phone",
        "Company Size",
        "Service / Requirement",
        "Message / Details"
      ];
      sheet.appendRow(headers);

      // Apply sleek styling to header row
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0A2540"); // AM Tech Hub Navy
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // 2. Format phone to ensure Google Sheets never interprets '+' as an arithmetic formula
    var rawPhone = data.phone ? String(data.phone).trim() : "-";
    var safePhone = (rawPhone.startsWith("+") || rawPhone.startsWith("=")) ? "'" + rawPhone : rawPhone;

    // 3. Append new row with submission data
    var newRow = [
      data.timestamp || new Date().toISOString(),
      data.source || "Website Contact Form",
      data.name || "N/A",
      data.email || "N/A",
      safePhone,
      data.companySize || "-",
      data.projectType || data.service || "General Inquiry",
      data.message || "-"
    ];

    sheet.appendRow(newRow);

    // Force phone cell to Plain Text format
    sheet.getRange(sheet.getLastRow(), 5).setNumberFormat("@");

    // Return success response to AM Tech Hub server
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Submission appended successfully",
        row: sheet.getLastRow()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Test function you can run inside Apps Script editor to test permissions
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "active", message: "AM Tech Hub Google Sheet Webhook is active!" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

---

## 🚀 Step 3: Deploy as a Web App

1. In the top right corner of the Apps Script window, click the blue **Deploy** button ➔ **New deployment**.
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**.
3. Set the configuration exactly as follows:
   - **Description**: `AM Tech Hub Form Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial: This allows your website's server to send leads to the sheet without needing Google OAuth login)*.
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click *Review permissions*
   - Select your Google account
   - Click *Advanced* (small link at bottom)
   - Click *Go to AM Tech Hub Form Webhook (unsafe)*
   - Click *Allow*
6. Copy the **Web App URL** (it looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 🔑 Step 4: Add the URL to Your AM Tech Hub Project

Open `.env.local` in your project root and paste your URL:

```env
GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/AKfycb.../exec
```

> **Note for Vercel/Production Deployment**:  
> In your Vercel project dashboard, go to **Settings ➔ Environment Variables**, add `GOOGLE_SHEET_WEBAPP_URL` with your URL, and redeploy.

---

## 🛡️ Built-in Zero-Data-Loss Backup

Even if your Google Sheet is temporarily offline or if your internet drops:
- Every lead is **automatically saved locally** into `d:\am_tech_hub\scratch\form_submissions.json`.
- You will never lose a customer lead.
