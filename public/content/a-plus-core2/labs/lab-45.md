# Lab 45: Social Engineering Attacks

**Tier:** 1  
**Time:** 25-35 minutes  
**Exam Objectives:** 2.5 - Given a scenario, use the appropriate methods for social engineering attack detection and prevention

---

## Section 1: Concept Check (5 min)

1. What is social engineering, and why is it often more effective than technical attacks?

2. What is the difference between phishing, spear phishing, and whaling? Give an example of each.

3. What is pretexting, and how does it differ from impersonation?

4. An employee receives a call from "IT support" asking for their password to fix an issue. How should they respond?

5. What is the difference between tailgating and shoulder surfing?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Conceptual learning** - Analysis and scenario-based exercises.

#### Activity A: Social Engineering Attack Types

**Goal:** Identify different types of social engineering attacks.

**Match the attack to its description:**

| Attack Type | Description |
|-------------|-------------|
| Phishing | |
| Spear phishing | |
| Whaling | |
| Vishing | |
| Smishing | |
| Pretexting | |
| Baiting | |
| Tailgating | |
| Shoulder surfing | |
| Dumpster diving | |
| Watering hole | |
| Quid pro quo | |

**Descriptions to match:**
- A. Following someone through a secure door without badging in
- B. Targeted phishing against high-level executives
- C. Phone-based phishing attacks
- D. Mass email attempting to steal credentials
- E. Watching someone enter password or PIN
- F. Searching trash for sensitive information
- G. Targeted email attack using personal information
- H. SMS/text message phishing
- I. Creating a fake scenario to manipulate target
- J. Leaving infected USB drives for victims to find
- K. Compromising websites frequently visited by target group
- L. Offering a service in exchange for information

---

#### Activity B: Phishing Email Analysis

**Goal:** Identify red flags in phishing emails.

**Analyze this sample email:**

```
From: security@amaz0n-support.com
To: you@email.com
Subject: URGENT: Your account will be suspended!!!

Dear Valued Customer,

We have detected unusual activity on your Amazon account. Your account 
will be suspended within 24 hours unless you verify your information.

Click here immediately to secure your account: 
http://amaz0n-verify.suspicious-site.ru/login

If you do not respond, your account will be permanently deleted and you 
will lose access to all purchases.

Amazon Security Team
```

**Identify the red flags:**

| Red Flag | What It Is |
|----------|------------|
| Sender address | |
| Subject line | |
| Greeting | |
| Urgency/threats | |
| Link URL | |
| Grammar/spelling | |
| Request type | |

**Additional red flags to look for in phishing:**

| Category | Red Flags |
|----------|-----------|
| Sender | |
| Content | |
| Links | |
| Attachments | |
| Requests | |

---

#### Activity C: Legitimate vs Phishing Comparison

**Goal:** Distinguish real communications from fake ones.

**Compare characteristics:**

| Feature | Legitimate Email | Phishing Email |
|---------|------------------|----------------|
| Sender domain | | |
| Greeting | | |
| Grammar | | |
| Links | | |
| Urgency | | |
| Request | | |
| Signature | | |

**Verification methods:**

| If You're Unsure | What To Do |
|------------------|------------|
| Suspicious email from company | |
| Unexpected attachment | |
| Request for password | |
| Strange link | |
| Unusual request from coworker | |

---

#### Activity D: Social Engineering Scenarios

**Goal:** Practice recognizing and responding to social engineering.

**Scenario 1: The Helpful IT Person**
> *Phone rings* "Hi, this is Dave from IT. We're doing a security audit and 
> need to verify your login credentials to ensure your account is protected. 
> Can you confirm your username and password?"

**Attack type:** _______________

**Red flags:**

| Red Flag | Why Suspicious |
|----------|----------------|
| | |
| | |
| | |

**Proper response:** _______________

---

**Scenario 2: The Urgent Executive Request**
> Email from CEO@comp@ny.com: "I'm in a meeting and need you to purchase 
> $500 in gift cards and send me the codes immediately. Don't tell anyone, 
> it's a surprise for the team. Reply to this email only."

**Attack type:** _______________

**Red flags:**

| Red Flag | Why Suspicious |
|----------|----------------|
| | |
| | |
| | |

**Proper response:** _______________

---

**Scenario 3: The USB Drive**
> You find a USB drive labeled "Employee Salaries 2024" in the parking lot.

**Attack type:** _______________

**Proper response:** _______________

---

**Scenario 4: The Delivery Person**
> Someone in a delivery uniform is standing at the secure entrance with a 
> large box: "Can you hold the door? My hands are full and I'm just 
> delivering to the 3rd floor."

**Attack type:** _______________

**Proper response:** _______________

---

#### Activity E: Email Header Analysis

**Goal:** Learn to verify email authenticity.

**Viewing email headers:**

| Email Client | How to View Headers |
|--------------|---------------------|
| Outlook | Open message → File → Properties → Internet Headers |
| Gmail | Open message → Three dots → Show original |
| Apple Mail | View → Message → All Headers |

**Important header fields:**

| Field | What to Check |
|-------|---------------|
| From | |
| Return-Path | |
| Reply-To | |
| Received | |
| SPF/DKIM/DMARC | |

**Spoofed vs legitimate:**

| Indicator | Legitimate | Spoofed |
|-----------|------------|---------|
| From matches Return-Path | | |
| Received chain makes sense | | |
| SPF/DKIM pass | | |

---

#### Activity F: Security Awareness Checklist

**Goal:** Create a personal security awareness checklist.

**Complete the checklist:**

| Before Taking Action | Check |
|---------------------|-------|
| Clicking a link | □ Hover to preview URL, □ Matches expected domain |
| Opening attachment | □ Expected it, □ Verified sender, □ Scanned for malware |
| Providing information | □ Verified identity, □ Called them back on known number |
| Downloading software | □ From official source, □ Verified publisher |
| Responding to urgency | □ Paused to think, □ Verified through other channel |

**Warning signs that should make you stop:**

1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

---

## Section 3: Reflection (5 min)

**Scenario 1:** Your organization has experienced multiple successful phishing attacks. What training and technical controls would you implement to reduce risk?

**Scenario 2:** An employee reports that they clicked on a phishing link and entered their password. What are the immediate steps to take?

**Scenario 3:** A caller claims to be from your bank and asks you to verify your account by providing your SSN. They say they can see your account already and just need to confirm your identity. How do you handle this?

**Scenario 4:** Your CEO's email account was compromised (Business Email Compromise). The attacker sent wire transfer instructions to the finance department. What controls could have prevented this?

---

## What You Learned Today

- ✅ Social engineering attack types (phishing, vishing, pretexting, etc.)
- ✅ Phishing email red flags
- ✅ Verifying email authenticity
- ✅ Recognizing social engineering tactics
- ✅ Proper responses to social engineering attempts
- ✅ Security awareness best practices

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