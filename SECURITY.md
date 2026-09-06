# Security Policy

AM Tech Hub is dedicated to ensuring the security, privacy, and integrity of our enterprise applications, SaaS platforms, and client data. We welcome responsible security research and vulnerability disclosures.

---

## Supported Versions

We provide security updates and patches for actively maintained versions of our products and services:

| Platform / Product | Supported Versions | Status |
| :--- | :--- | :--- |
| **Commercial POS Platform** | 2.x, 1.x | :white_check_mark: Actively Supported |
| **Enterprise HRMS & Payroll SaaS** | 3.x, 2.x | :white_check_mark: Actively Supported |
| **Fiscal Invoicing & FBR Integration Engine** | 1.x | :white_check_mark: Actively Supported |
| **AM Tech Hub Core Web Portal** | Latest (`main` branch) | :white_check_mark: Actively Supported |
| **Legacy Custom Builds (< 2024)** | Deprecated | :x: End of Life |

---

## Reporting a Vulnerability

If you identify a potential security vulnerability or compliance issue within any AM Tech Hub system, please notify us immediately through our designated security channel:

- **Primary Contact**: [muhammadalimirza90@gmail.com](mailto:muhammadalimirza90@gmail.com)
- **Alternative / Escalation**: [contact@amtechhub.com](mailto:contact@amtechhub.com)
- **Subject Line**: `[SECURITY VULNERABILITY] <Component/Domain> - <Brief Summary>`

Please include the following details in your submission to help our engineering team triage the issue efficiently:
1. **Description**: Clear description of the vulnerability and potential impact.
2. **Steps to Reproduce**: Detailed reproduction steps, including URLs, payloads, HTTP requests, or proof of concept (PoC) scripts.
3. **Affected Components**: Specific endpoints, repositories, APIs, or architectural layers affected.
4. **Environment**: Browser version, operating system, or testing environment used.

> [!CAUTION]
> Please do **not** disclose the issue publicly or to third parties until our team has verified, patched, and deployed a fix.

---

## Vulnerability Handling & Response SLA

We take every security disclosure seriously and adhere to the following timelines:

- **Initial Acknowledgement**: Within **48 hours** of report receipt.
- **Triage & Severity Assessment**: Within **72 hours** of acknowledgement.
- **Status Updates**: Ongoing updates provided at least every **3 business days** until resolution.
- **Resolution & Patch Deployment**: Critical vulnerabilities are treated with top priority and patched via expedited hotfix cycles.

---

## Safe Harbor & Responsible Disclosure

AM Tech Hub will not initiate legal action against security researchers who:
- Perform testing exclusively against non-destructive endpoints and their own test accounts.
- Make a good-faith effort to avoid privacy violations, data loss, service degradation, or business interruption.
- Do not access, modify, or exfiltrate client or proprietary organizational data.
- Allow us a reasonable timeframe to remediate reported issues before public disclosure.

---

## Security Architecture Overview

Our engineering practices follow enterprise defense-in-depth principles:
- **Data Encryption**: AES-256 encryption at rest for databases and TLS 1.3 encryption in transit for all network traffic.
- **Logical Multi-Tenant Isolation**: Schema-level separation ensuring strict boundary enforcement across corporate entities in HRMS and POS platforms.
- **Access Control & RBAC**: Principle of least privilege with cryptographically signed tokens and granular role-based access control.
- **Audit Trails**: Immutable event tracking and tamper-evident audit logs across sensitive financial, payroll, and fiscal transactions.
- **Automated CI/CD Scans**: Daily dependency auditing and continuous static application security testing (SAST).

Thank you for helping us keep AM Tech Hub and our clients secure.
