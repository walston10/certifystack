# Lab 57: Software Licensing and EULA - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: EULA

**What it is:** End User License Agreement - legal contract between software creator and user

**When agreed to:**
- During installation (click "I Accept")
- When opening shrink-wrapped package
- When first using the software
- When creating an account

---

### Question 2: Perpetual vs Subscription

| Perpetual | Subscription |
|-----------|--------------|
| One-time purchase | Recurring payment |
| Own forever | Access while paying |
| Updates may cost extra | Updates included |
| Higher upfront cost | Lower monthly cost |
| Example: Office 2021 | Example: Microsoft 365 |

---

### Question 3: Open Source Software

**What it is:** Software with source code freely available to view, modify, and distribute

**Examples:**
- Linux (operating system)
- Firefox (browser)
- LibreOffice (office suite)
- VLC (media player)
- Apache (web server)
- MySQL (database)

---

### Question 4: Pirated Software Risks

**Beyond legal issues:**
- **Malware** - Cracked software often contains viruses
- **No updates** - Security vulnerabilities unpatched
- **No support** - Can't get help from vendor
- **Instability** - May not work properly
- **Audit liability** - Huge fines if audited
- **Reputation damage** - Professional credibility
- **Data loss** - Unreliable software

---

### Question 5: Site License

**What it is:** License allowing unlimited installations at a single location/organization

**When used:**
- Large organizations (many users)
- Educational institutions
- When per-seat tracking is impractical
- High-use software needed everywhere

---

## Section 2: Activities - Answers

### Activity A: License Types

| Type | Description | Ownership | Updates | Example |
|------|-------------|-----------|---------|---------|
| Perpetual | One-time purchase | Own forever | May cost extra | Office 2021 |
| Subscription | Recurring payment | Access while paying | Included | Microsoft 365 |
| Per-seat | Per user/device | License per install | Varies | Adobe per-user |
| Site license | Unlimited at location | Organizational | Usually included | University software |
| Open source | Free, source available | Use freely | Community-driven | Linux, Firefox |
| Freeware | Free, closed source | Use freely | Developer choice | CCleaner |
| Shareware | Try before buy | Limited until purchase | With purchase | WinRAR |
| OEM | Tied to hardware | With that device only | Varies | Windows on new PC |

---

### Activity B: Open Source Licenses

| License | Modify? | Share Changes? | Commercial? | Example |
|---------|---------|----------------|-------------|---------|
| GPL | Yes | Yes (copyleft) | Yes | Linux, WordPress |
| MIT | Yes | No | Yes | jQuery, Node.js |
| Apache 2.0 | Yes | No | Yes | Android, Kubernetes |
| BSD | Yes | No | Yes | FreeBSD, Nginx |
| Creative Commons | Varies | Varies | Varies | Wikipedia content |

**"Copyleft":** Requirement that derivative works must be distributed under the same license terms (share-alike). If you modify GPL software, your modifications must also be GPL.

---

### Activity C: Compliance Scenarios

| Scenario | Compliant? | Why |
|----------|------------|-----|
| Office 365 on personal laptop | Maybe | Depends on license terms - many allow limited devices |
| One Windows license on three VMs | No | Each VM needs its own license |
| Photoshop from torrent | No | Piracy - illegal |
| Trial software never buying | Depends | If within trial period yes, after expiration no |
| Open source in commercial product | Depends | Must follow license terms (especially GPL) |
| Sharing Netflix password | No | Violates terms of service |
| Educational license for business | No | License type mismatch |
| OEM Windows on different PC | No | OEM tied to original hardware |
| Server software on desktop license | No | Different license categories |
| Backup copy of purchased software | Usually yes | Most EULAs allow one backup |

---

### Activity D: Software Audit

**Documentation needed:**

| Item | Documentation |
|------|---------------|
| Installed software | Software inventory tool report |
| License keys | Key management system, certificates |
| Purchase records | Invoices, POs, receipts |
| User assignments | Assignment spreadsheet/system |
| Version compliance | Version vs. licensed version |

**Common findings:**

| Finding | Risk | Remediation |
|---------|------|-------------|
| More installs than licenses | High | Purchase additional or uninstall |
| Unlicensed software | Critical | Remove immediately or purchase |
| License type mismatch | Medium | Purchase correct license type |
| Expired subscriptions | Medium | Renew or uninstall |

---

### Activity E: EULA Analysis

| Provision | Meaning | Impact |
|-----------|---------|--------|
| Grant of license | What you're allowed to do | Defines permitted use |
| Restrictions | What you can't do | No copying, reverse engineering |
| Intellectual property | Who owns what | Software remains vendor's property |
| Warranty disclaimer | No guarantees | Limited recourse if problems |
| Limitation of liability | Caps damages | Can't sue for full losses |
| Termination | When license ends | Violation = immediate termination |
| Governing law | Which laws apply | Usually vendor's state/country |

**Acceptance methods:**

| Method | Example |
|--------|---------|
| Click-wrap | "I Accept" button during install |
| Shrink-wrap | Opening the package = acceptance |
| Browse-wrap | Using website = acceptance (link in footer) |

---

### Activity F: Cost Comparison

**Perpetual (25 users):**
- Year 1: 25 × $250 = **$6,250**
- Years 2-5: $0 (unless upgrades)
- 5-year total: **$6,250** (+ possible upgrades)

**Subscription (25 users):**
- Monthly: 25 × $12.50 = $312.50
- Year 1: $312.50 × 12 = **$3,750**
- 5-year total: $3,750 × 5 = **$18,750**

**Analysis:**

| Factor | Perpetual | Subscription |
|--------|-----------|--------------|
| Initial cost | High ($6,250) | Low ($312.50/mo) |
| Long-term cost | Lower (if no upgrades) | Higher |
| Cash flow | Big upfront hit | Spread out |
| Always current | No | Yes |
| Flexibility | Low (stuck with version) | High (cancel anytime) |

**Recommendation:** Depends on business needs:
- Subscription if: Need latest features, cash flow matters, uncertain future
- Perpetual if: Stable needs, long-term use, have capital

---

### Activity G: Activation Methods

| Method | How It Works | Pros | Cons |
|--------|--------------|------|------|
| Product key | Enter alphanumeric code | Simple | Can be shared/pirated |
| Online activation | Contacts server to verify | Automatic, secure | Needs internet |
| Phone activation | Call and read codes | Works offline | Time-consuming |
| Hardware dongle | USB device required | Very secure | Physical item can be lost |
| License server | Network server tracks usage | Centralized management | Infrastructure needed |

**DRM purposes:**

| Purpose | Method |
|---------|--------|
| Prevent copying | Encryption, activation |
| Limit installations | Activation count |
| Verify ownership | Online verification |
| Enable features | License tier checking |

---

## Section 3: Reflection - Answers

### Scenario 1: Home Software at Work

**Issues:**
1. **License violation** - Personal license may not allow commercial use
2. **Support void** - Can't get business support
3. **Security risk** - Unknown software source
4. **Liability** - Company responsible for violations
5. **Audit risk** - Can't document proper licensing

**Response:** Politely decline, explain policy, offer to submit purchase request for licensed version.

---

### Scenario 2: Audit Finding (50 installed, 40 licensed)

**What happens:**
1. **True-up required** - Must purchase 10 licenses
2. **Back-payment** - May owe for period of non-compliance
3. **Penalties** - Possible fines (vendor-dependent)
4. **Future audits** - Likely more scrutiny going forward
5. **Process improvement** - Must implement better tracking

**Prevention:** Regular self-audits, software asset management, purchase approval process

---

### Scenario 3: Open Source in Commercial Product

**Must evaluate:**
1. **License type** - GPL (copyleft) vs MIT/Apache (permissive)
2. **Copyleft requirements** - Must you release your code?
3. **Attribution requirements** - Copyright notices required?
4. **Patent grants** - Does license include patent protection?
5. **Compatibility** - Can different licenses coexist?
6. **Support** - Who maintains it? Is it actively developed?

**Key concern:** GPL requires releasing your modifications - may not work for proprietary product.

---

### Scenario 4: User Requests Cracked Software

**Response:**
1. **Decline firmly** - "I can't install unlicensed software"
2. **Explain risks** - Malware, legal liability, job consequences
3. **Offer alternatives** - Submit purchase request, find free alternative
4. **Document** - Note the request in case of future issues
5. **Don't lecture** - Be professional, not preachy

**Example:** "I understand the software is expensive, but I can't install unlicensed software - it puts both of us at risk. Let me help you submit a purchase request, or we can look for a free alternative that does what you need."

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                SOFTWARE LICENSING QUICK REFERENCE                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  Perpetual = Own forever, one-time cost                                   ║
║  Subscription = Pay monthly/yearly, always current                        ║
║  OEM = Tied to hardware, can't transfer                                   ║
║  GPL = Must share modifications (copyleft)                                ║
║  MIT/Apache = Permissive, commercial-friendly                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMPLIANCE: Match installs to licenses, keep documentation               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PIRACY RISKS: Malware, fines, no support, reputation damage              ║
╚═══════════════════════════════════════════════════════════════════════════╝
```