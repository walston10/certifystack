# Lab 45: Social Engineering Attacks - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: What is Social Engineering

**Definition:** Manipulating people into divulging confidential information or performing actions that compromise security.

**Why more effective than technical attacks:**
- Exploits human nature (trust, helpfulness, fear)
- Bypasses technical security controls
- Harder to patch than software vulnerabilities
- People are often the weakest link
- One success can unlock entire networks
- No technical skills may be needed
- Success rate can be very high

---

### Question 2: Phishing Types

| Type | Definition | Example |
|------|------------|---------|
| **Phishing** | Mass email attack to many recipients | "Your PayPal account is suspended" sent to millions |
| **Spear phishing** | Targeted attack using personal info | Email to specific employee mentioning their projects |
| **Whaling** | Targeting executives/high-value individuals | Fake legal notice to CEO requiring urgent response |

---

### Question 3: Pretexting vs Impersonation

| Aspect | Pretexting | Impersonation |
|--------|------------|---------------|
| Definition | Creating a fabricated scenario | Claiming to be a specific person |
| Focus | The situation/story | The identity |
| Example | "I'm conducting a survey on..." | "I'm calling from Microsoft support" |

**Pretexting:** Creating entire fake context to manipulate target

**Impersonation:** Specifically claiming to be someone else (IT, vendor, executive)

Both often used together.

---

### Question 4: "IT Support" Password Request

**Proper response:**

1. **Never give password** - Legitimate IT never asks for passwords
2. **Don't confirm/deny anything** - Don't validate their information
3. **Get callback number** - "Let me call you back, what's your extension?"
4. **Verify independently** - Call IT helpdesk on known number
5. **Report the attempt** - Alert security team

**Script:** "I'm sorry, I can't share my password. I'll contact IT directly to resolve any issues."

---

### Question 5: Tailgating vs Shoulder Surfing

| Attack | Description | Target |
|--------|-------------|--------|
| **Tailgating** | Following someone through a secured door without using own credentials | Physical access |
| **Shoulder surfing** | Watching someone enter passwords, PINs, or sensitive info | Credentials/data |

---

## Section 2: Activities - Answers

### Activity A: Attack Types

| Attack Type | Description |
|-------------|-------------|
| Phishing | D - Mass email attempting to steal credentials |
| Spear phishing | G - Targeted email attack using personal information |
| Whaling | B - Targeted phishing against high-level executives |
| Vishing | C - Phone-based phishing attacks |
| Smishing | H - SMS/text message phishing |
| Pretexting | I - Creating a fake scenario to manipulate target |
| Baiting | J - Leaving infected USB drives for victims to find |
| Tailgating | A - Following someone through a secure door without badging |
| Shoulder surfing | E - Watching someone enter password or PIN |
| Dumpster diving | F - Searching trash for sensitive information |
| Watering hole | K - Compromising websites frequently visited by target group |
| Quid pro quo | L - Offering a service in exchange for information |

---

### Activity B: Phishing Email Red Flags

**Sample email analysis:**

| Red Flag | What It Is |
|----------|------------|
| Sender address | amaz0n-support.com (zero instead of 'o', not amazon.com) |
| Subject line | ALL CAPS, excessive punctuation, URGENT threats |
| Greeting | Generic "Dear Valued Customer" not your name |
| Urgency/threats | Account suspended, permanent deletion |
| Link URL | .ru domain, suspicious-site, doesn't match Amazon |
| Grammar/spelling | "unless you verify" - awkward phrasing |
| Request type | Click link to provide information |

**Additional red flags:**

| Category | Red Flags |
|----------|-----------|
| Sender | Wrong domain, misspellings, free email for business |
| Content | Urgency, threats, too good to be true, generic greeting |
| Links | Mismatched URLs, shortened URLs, HTTP not HTTPS |
| Attachments | Unexpected, .exe/.zip, "invoice" you didn't expect |
| Requests | Password, SSN, credit card, wire transfer, gift cards |

---

### Activity C: Legitimate vs Phishing

| Feature | Legitimate | Phishing |
|---------|------------|----------|
| Sender domain | company.com | company-security.com |
| Greeting | Uses your name | Generic |
| Grammar | Professional | Often errors |
| Links | Match company domain | Mismatched or suspicious |
| Urgency | Rare, reasonable deadlines | Extreme urgency |
| Request | Rarely asks for credentials | Asks for sensitive data |
| Signature | Full contact info | Generic or missing |

**Verification methods:**

| If Unsure | What To Do |
|-----------|------------|
| Suspicious email | Don't click - contact company directly via official website |
| Unexpected attachment | Contact sender through known channel to verify |
| Password request | NEVER provide - report to IT |
| Strange link | Hover to preview, go to site directly instead |
| Unusual coworker request | Call them or walk to their desk to verify |

---

### Activity D: Scenarios

**Scenario 1: The Helpful IT Person**

**Attack type:** Vishing / Pretexting / Impersonation

**Red flags:**

| Red Flag | Why Suspicious |
|----------|----------------|
| Unsolicited call | IT typically responds to tickets, not random calls |
| Asking for password | Legitimate IT NEVER asks for passwords |
| "Security audit" excuse | Classic pretext to justify request |
| Urgency/helpfulness | Designed to lower defenses |

**Proper response:** "I can't share my password. Please send a ticket through our official system, or I'll call IT helpdesk to verify."

---

**Scenario 2: The Urgent Executive Request**

**Attack type:** Spear phishing / Business Email Compromise (BEC)

**Red flags:**

| Red Flag | Why Suspicious |
|----------|----------------|
| Sender domain | comp@ny.com - @ instead of 'a' |
| Gift card request | Classic BEC tactic (untraceable) |
| Secrecy ("don't tell anyone") | Prevents verification |
| Unusual channel | CEO wouldn't normally email this request |
| Urgency | Pressure to act without thinking |

**Proper response:** Do not purchase. Verify with CEO through known phone number or in person. Report to IT security.

---

**Scenario 3: The USB Drive**

**Attack type:** Baiting

**Proper response:** 
- Do NOT plug it in
- Give it to IT security
- They may analyze it in isolated environment
- This is exactly what attackers hope for

---

**Scenario 4: The Delivery Person**

**Attack type:** Tailgating / Impersonation

**Proper response:**
- "I'm sorry, I can't hold the door. You'll need to be let in by reception."
- Direct them to main entrance
- If suspicious, notify security
- Don't feel guilty - security matters more than brief inconvenience

---

### Activity E: Email Header Analysis

**Important fields:**

| Field | What to Check |
|-------|---------------|
| From | Display name can be spoofed - check actual address |
| Return-Path | Where replies go - should match From |
| Reply-To | May be different to redirect replies |
| Received | Trace the email's path - suspicious servers? |
| SPF/DKIM/DMARC | Authentication results - fail = suspicious |

**Legitimate vs Spoofed:**

| Indicator | Legitimate | Spoofed |
|-----------|------------|---------|
| From matches Return-Path | Yes | Often different |
| Received chain | Makes sense | Random servers |
| SPF/DKIM | Pass | Fail or missing |

---

### Activity F: Security Awareness Checklist

**Warning signs:**

1. Unexpected urgency or threats
2. Requests for passwords or sensitive data
3. Sender doesn't match claimed organization
4. Pressure to bypass normal procedures
5. Too good to be true offers
6. Strange attachments or links
7. Requests for gift cards or wire transfers
8. Unusual requests from known people

---

## Section 3: Reflection - Answers

### Scenario 1: Reducing Phishing Risk

**Training:**
- Regular phishing simulations
- Interactive security awareness training
- Clear reporting procedures (one-click report button)
- Real examples of attacks targeting your org
- Consequences and rewards program

**Technical controls:**
- Email filtering (Microsoft Defender, Proofpoint, etc.)
- Link protection (URL rewriting, sandboxing)
- Attachment scanning
- SPF/DKIM/DMARC enforcement
- Multi-factor authentication
- Banner for external emails
- Blocking newly registered domains

---

### Scenario 2: Employee Clicked Phishing Link

**Immediate steps:**

1. **Don't panic the employee** - Need their cooperation
2. **Reset password immediately** - On affected account
3. **Reset on any other accounts** - Using same password
4. **Enable/verify MFA** - On all accounts
5. **Check for rules/forwards** - Attacker may have set up persistence
6. **Review recent activity** - Login locations, sent emails
7. **Scan workstation** - For malware
8. **Alert security team** - For monitoring and investigation
9. **Document incident** - For lessons learned
10. **Monitor accounts** - For suspicious activity

---

### Scenario 3: Bank Caller Requesting SSN

**How to handle:**

1. **Do not provide any information** - Even to "verify"
2. **Don't confirm account exists** - Could be reconnaissance
3. **Say you'll call back** - "I'll contact my bank directly"
4. **Hang up** - Don't argue or engage
5. **Call bank** - Using number on card or statement (NOT number they give)
6. **Report attempt** - To bank's fraud department

**Key insight:** Banks have your information already. They shouldn't need you to verify sensitive data by phone.

---

### Scenario 4: CEO Email Compromise Prevention

**Controls that could prevent:**

| Control | How It Helps |
|---------|--------------|
| MFA on email | Prevents account takeover even with password |
| DMARC enforcement | Blocks spoofed emails |
| Wire transfer verification | Out-of-band approval for large transfers |
| Email warning banners | "This sender is external" alerts |
| Dual authorization | Two approvals for financial transactions |
| Callback verification | Verify requests by phone before acting |
| Domain monitoring | Alert on lookalike domains registered |
| User training | Recognize unusual requests |
| Payment limits | Require extra approval for large amounts |

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 SOCIAL ENGINEERING QUICK REFERENCE                         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ATTACK TYPES                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Phishing      → Mass email attack to steal credentials                   ║
║  Spear phishing → Targeted email using personal info                      ║
║  Whaling       → Targeting executives specifically                        ║
║  Vishing       → Voice/phone-based phishing                               ║
║  Smishing      → SMS/text message phishing                                ║
║  Pretexting    → Creating fake scenario to manipulate                     ║
║  Baiting       → Leaving infected USB/media to be found                   ║
║  Tailgating    → Following through secure doors                           ║
║  Shoulder surfing → Watching someone enter credentials                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PHISHING RED FLAGS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  • Sender email doesn't match claimed organization                        ║
║  • Generic greeting ("Dear Customer")                                     ║
║  • Urgency and threats ("Account suspended!")                             ║
║  • Suspicious links (hover to preview!)                                   ║
║  • Requests for credentials or personal info                              ║
║  • Poor grammar and spelling                                              ║
║  • Unexpected attachments                                                 ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PROPER RESPONSES                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Password request → NEVER give passwords, report to IT                    ║
║  Suspicious email → Don't click, report to IT/security                    ║
║  Phone request    → Hang up, call back on official number                 ║
║  Found USB drive  → Don't plug in, give to security                       ║
║  Tailgating       → Politely require badge, don't hold doors              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PREVENTION                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ✓ Security awareness training    ✓ Verify requests through other channel║
║  ✓ Email filtering/scanning       ✓ Never share passwords                 ║
║  ✓ Multi-factor authentication    ✓ When in doubt, report it              ║
║  ✓ Verify sender identity         ✓ Trust but verify                      ║
╚═══════════════════════════════════════════════════════════════════════════╝
```