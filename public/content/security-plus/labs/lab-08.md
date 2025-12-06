# Lab 8: Social Engineering Attacks

**Tier:** 1 (Universal)
**Time:** 25-30 minutes
**Exam Objectives:** 2.2 - Explain common threat vectors and attack surfaces

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is social engineering, and why is it often more effective than technical attacks?**

2. **Explain the difference between phishing, spear phishing, and whaling.**

3. **What psychological principles do social engineers exploit? Name at least four.**

4. **What is pretexting, and how does it differ from a simple lie?**

5. **Why are social engineering attacks difficult to defend against with technology alone?**

---

## Section 2: Hands-On Activities

### Activity A: Social Engineering Principles

**Goal:** Understand the psychological tactics that make social engineering effective.

**Map each principle to its exploitation:**

| Principle | How Attackers Exploit It | Example Attack |
|-----------|-------------------------|----------------|
| Authority | | |
| Intimidation | | |
| Consensus/Social proof | | |
| Scarcity | | |
| Urgency | | |
| Familiarity/Liking | | |
| Trust | | |

**Real-world example analysis:**

For each scenario, identify which principle(s) are being exploited:

| Scenario | Principle(s) Used |
|----------|-------------------|
| "This is IT support. We need your password immediately to fix a critical security issue." | |
| "Everyone in your department has already completed this security verification." | |
| "Only 2 spots left! Click now to claim your prize!" | |
| "Hi [Name], I noticed we have 15 mutual connections on LinkedIn..." | |
| "Your account will be suspended in 24 hours unless you verify your information." | |
| "I'm calling from the CEO's office. He needs this wire transfer done NOW." | |

---

### Activity B: Phishing Email Analysis

**Goal:** Learn to identify phishing indicators.

**Phishing red flags checklist:**

| Red Flag | What to Look For |
|----------|------------------|
| Sender address | |
| Generic greeting | |
| Spelling/grammar errors | |
| Urgency/threats | |
| Suspicious links | |
| Unexpected attachments | |
| Request for sensitive info | |
| Mismatched URLs | |
| Too good to be true | |
| Impersonation attempts | |

**Analyze these email elements:**

**Email 1:**
```
From: security@amaz0n-support.com
Subject: URGENT: Your account has been compromised!!!

Dear Valued Customer,

We have detected unusual activity on your account. Your account will 
be suspended in 24 hours unless you verify your information.

Click here to verify: http://amaz0n-secure.totallylegit.com/verify

Thanks you for your cooperation.
Amazon Security Team
```

| Element | Red Flag? | Why |
|---------|-----------|-----|
| Sender address | | |
| Subject line | | |
| Greeting | | |
| Grammar/spelling | | |
| Urgency tactics | | |
| Link URL | | |
| Overall assessment | | |

**Email 2:**
```
From: jsmith@company.com
Subject: Quick favor

Hey,

Are you in the office? I need you to purchase some gift cards for 
client appreciation. I'm stuck in a meeting and can't do it myself. 
Get 5x $100 Amazon cards and send me the codes ASAP.

I'll reimburse you.

Thanks,
John Smith
CEO
Sent from my iPhone
```

| Element | Red Flag? | Why |
|---------|-----------|-----|
| Sender address | | |
| Request type | | |
| Urgency | | |
| Payment method | | |
| Authority claim | | |
| Overall assessment | | |

---

### Activity C: URL Analysis

**Goal:** Learn to identify malicious URLs before clicking.

**URL analysis techniques:**

**Hover (don't click!) to reveal the actual URL:**

| Displayed Text | Actual URL (example) | Malicious? |
|----------------|---------------------|------------|
| Click here to login | http://evil.com/login | Yes |
| www.microsoft.com | http://micros0ft.com | Yes |
| Secure Link | https://legitimate.com/page | No |

**Domain analysis practice:**

Identify the real domain in each URL:

| URL | Actual Domain | Legitimate? |
|-----|---------------|-------------|
| https://login.microsoft.com/auth | | |
| https://microsoft.com.login-secure.net/auth | | |
| https://microsoft-support.com/help | | |
| https://support.microsoft.com/help | | |
| http://www.paypa1.com/login | | |
| https://accounts.google.com/signin | | |
| https://google.com.account-verify.info | | |

**Key rule:** The real domain is immediately BEFORE the first single forward slash.

**Subdomain vs lookalike:**

| URL Type | Example | How to Identify |
|----------|---------|-----------------|
| Legitimate subdomain | login.microsoft.com | Subdomain.realdomain.tld |
| Lookalike domain | microsoft-login.com | Different domain entirely |
| Subdomain spoofing | microsoft.com.evil.com | Real domain is evil.com |

---

### Activity D: Social Engineering Attack Types

**Goal:** Build a comprehensive reference for attack types.

**Complete the attack type reference:**

| Attack Type | Medium | Target | Goal | Example |
|-------------|--------|--------|------|---------|
| Phishing | | | | |
| Spear phishing | | | | |
| Whaling | | | | |
| Vishing | | | | |
| Smishing | | | | |
| Business Email Compromise | | | | |
| Pretexting | | | | |
| Baiting | | | | |
| Quid pro quo | | | | |
| Tailgating | | | | |
| Piggybacking | | | | |
| Shoulder surfing | | | | |
| Dumpster diving | | | | |
| Watering hole | | | | |
| Typosquatting | | | | |

**Physical vs digital attacks:**

Categorize each attack:

| Attack | Physical | Digital | Both |
|--------|----------|---------|------|
| Phishing | | | |
| Tailgating | | | |
| Vishing | | | |
| Dumpster diving | | | |
| Shoulder surfing | | | |
| Smishing | | | |
| Baiting (USB drop) | | | |
| Pretexting | | | |

---

### Activity E: Vishing (Voice Phishing) Scenarios

**Goal:** Recognize phone-based social engineering.

**Common vishing scenarios:**

| Caller Claims To Be | Typical Request | Red Flags |
|---------------------|-----------------|-----------|
| Tech support (Microsoft, Apple) | | |
| Bank fraud department | | |
| IRS/Tax authority | | |
| Utility company | | |
| Police/Law enforcement | | |
| IT helpdesk (internal) | | |

**Vishing defense strategies:**

| Strategy | How to Apply |
|----------|--------------|
| Verify caller identity | |
| Call back on known number | |
| Never give passwords over phone | |
| Be suspicious of urgency | |
| Ask for reference/ticket number | |

**Scenario analysis:**

You receive a call: "This is Microsoft Tech Support. We've detected a virus on your computer. I need you to download our remote support tool so I can fix it."

| Question | Your Analysis |
|----------|---------------|
| Is this legitimate? Why/why not? | |
| What red flags are present? | |
| What should you do? | |

---

### Activity F: Physical Social Engineering

**Goal:** Understand physical attack vectors.

**Tailgating vs Piggybacking:**

| Aspect | Tailgating | Piggybacking |
|--------|------------|--------------|
| Definition | | |
| Victim awareness | | |
| Example | | |
| Prevention | | |

**Physical security scenarios:**

| Scenario | Attack Type | How to Respond |
|----------|-------------|----------------|
| Someone you don't recognize asks you to hold the door | | |
| Person claims to be vendor but has no badge | | |
| Someone looking over your shoulder at ATM | | |
| Finding a USB drive in the parking lot | | |
| Person asks to use your computer "for a minute" | | |
| Someone taking photos in server room | | |

**Physical security controls that prevent social engineering:**

| Control | What It Prevents |
|---------|------------------|
| Badge access | |
| Visitor sign-in | |
| Escort policy | |
| Mantraps/vestibules | |
| Security guards | |
| Clean desk policy | |
| Screen locks | |
| Paper shredding | |

---

### Activity G: Business Email Compromise (BEC)

**Goal:** Understand BEC attacks and their financial impact.

**BEC attack types:**

| Type | Description | Example |
|------|-------------|---------|
| CEO Fraud | | |
| Account Compromise | | |
| Vendor Impersonation | | |
| Attorney Impersonation | | |
| Data Theft | | |

**BEC attack chain:**

Put these steps in typical order:

| Step | Order |
|------|-------|
| Request wire transfer or sensitive data | |
| Research target organization | |
| Money transferred to attacker's account | |
| Compromise or spoof executive email | |
| Identify employees who handle money | |
| Build trust through email conversation | |

**BEC defenses:**

| Defense | How It Helps |
|---------|--------------|
| Verification for wire transfers | |
| Multi-person approval | |
| Out-of-band confirmation | |
| Email authentication (SPF, DKIM, DMARC) | |
| Employee training | |
| "Known contacts only" for financial requests | |

**Financial impact:**

Research current BEC statistics:
- Average loss per BEC incident: $_____________
- Total BEC losses (annual): $_____________
- Source: _____________

---

### Activity H: Recognizing Pretexting

**Goal:** Understand how attackers build false scenarios.

**Pretexting elements:**

| Element | Purpose | Example |
|---------|---------|---------|
| Backstory | | |
| Character/Role | | |
| Reason for contact | | |
| Justification for request | | |
| Urgency element | | |

**Pretext scenarios:**

Identify the pretext elements:

**Scenario 1:** "Hi, I'm from the IT department. We're upgrading the email system this weekend, and I need to verify your current password works before the migration."

| Element | In This Scenario |
|---------|------------------|
| Character/Role | |
| Backstory | |
| Request | |
| Justification | |
| Red flags | |

**Scenario 2:** "This is Officer Johnson from the local police. Your Social Security number has been linked to a drug trafficking case. You need to verify your identity by providing your SSN and date of birth to clear your name."

| Element | In This Scenario |
|---------|------------------|
| Character/Role | |
| Backstory | |
| Request | |
| Fear tactic | |
| Red flags | |

---

### Activity I: Security Awareness Training Effectiveness

**Goal:** Understand how to defend against social engineering.

**Training components:**

| Component | What It Teaches |
|-----------|-----------------|
| Phishing simulations | |
| Recognizing red flags | |
| Reporting procedures | |
| Password security | |
| Physical security | |
| Incident examples | |

**Metrics for training effectiveness:**

| Metric | What It Measures |
|--------|------------------|
| Phishing simulation click rate | |
| Reporting rate | |
| Time to report | |
| Repeat offender rate | |
| Knowledge assessment scores | |

**Your organization's training:**

| Question | Your Answer |
|----------|-------------|
| Do you receive security awareness training? | [ ] Yes [ ] No |
| How often? | |
| Does it include phishing simulations? | [ ] Yes [ ] No |
| Do you know how to report suspicious emails? | [ ] Yes [ ] No |
| Reporting method: | |

---

### Activity J: Building a Social Engineering Response Plan

**Goal:** Create a personal defense strategy.

**Your response checklist:**

**For suspicious emails:**
- [ ] Check sender address carefully
- [ ] Hover over links (don't click)
- [ ] Look for urgency/pressure tactics
- [ ] Verify unexpected requests through other channels
- [ ] Report to IT/security
- [ ] Don't open unexpected attachments
- [ ] When in doubt, delete/report

**For suspicious phone calls:**
- [ ] Don't give passwords or sensitive info
- [ ] Ask for callback number and verify
- [ ] Call the organization directly using known number
- [ ] Be suspicious of urgency
- [ ] Don't allow remote access to your computer
- [ ] Report suspicious calls

**For physical situations:**
- [ ] Don't hold doors for unknown people
- [ ] Challenge unfamiliar faces politely
- [ ] Report suspicious behavior
- [ ] Don't plug in found USB devices
- [ ] Secure your workstation when leaving
- [ ] Be aware of shoulder surfers

**Personal commitment:**

Write three specific actions you'll take to protect yourself:

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

---

### Activity K: Social Engineering Scenario Challenge

**Goal:** Apply your knowledge to realistic scenarios.

**Determine if each scenario is an attack, and identify the type:**

**Scenario 1:**
You receive a text: "Your Netflix account is on hold. Verify your payment at: http://netflix-billing.verify-account.com"

| Question | Your Answer |
|----------|-------------|
| Is this an attack? | |
| Attack type | |
| Red flags | |
| Correct response | |

**Scenario 2:**
A coworker you've never met walks up while you're at the coffee machine: "Hey, I'm new in accounting. I forgot my badge at home. Could you let me into the office? I have a big deadline."

| Question | Your Answer |
|----------|-------------|
| Is this an attack? | |
| Attack type (if yes) | |
| Could be legitimate? | |
| Correct response | |

**Scenario 3:**
You receive a call from someone claiming to be your bank: "We've detected fraud on your account. To verify your identity, please confirm your account number and the last 4 digits of your SSN."

| Question | Your Answer |
|----------|-------------|
| Is this an attack? | |
| Attack type | |
| Red flags | |
| Correct response | |

**Scenario 4:**
Your CEO emails the finance department: "I need a wire transfer of $45,000 sent to this account today. This is confidential - don't discuss with anyone. Let me know when it's done."

| Question | Your Answer |
|----------|-------------|
| Is this an attack? | |
| Attack type | |
| Red flags | |
| Correct response | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company conducts a phishing simulation, and 30% of employees clicked the link. Some employees are upset about being "tricked." How would you explain the value of this exercise, and what should happen next?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A colleague mentions they received a call from "IT" asking for their password to fix an issue. They provided it because it seemed urgent. What advice would you give them, and what actions should be taken?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** You're designing a security awareness program for a small company with no current training. What would be your top 3 priorities for content, and how would you measure success?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Define social engineering and explain why it's effective
- [ ] Identify the psychological principles attackers exploit
- [ ] Differentiate between phishing, spear phishing, whaling, vishing, smishing
- [ ] Analyze emails and URLs for phishing indicators
- [ ] Explain Business Email Compromise and its impact
- [ ] Recognize physical social engineering (tailgating, shoulder surfing, etc.)
- [ ] Understand pretexting and how attackers build false scenarios
- [ ] Describe effective security awareness training components
- [ ] Respond appropriately to social engineering attempts

---

## What You Learned Today

- ✅ Mapped psychological principles to attack techniques
- ✅ Analyzed phishing emails for red flags
- ✅ Practiced URL analysis to identify malicious links
- ✅ Built a comprehensive attack type reference
- ✅ Explored vishing and physical attacks
- ✅ Understood Business Email Compromise
- ✅ Dissected pretexting scenarios
- ✅ Evaluated security awareness training
- ✅ Created a personal defense strategy
- ✅ Applied knowledge to realistic scenarios

**Next Lab:** Network-Based Attacks - DoS/DDoS, man-in-the-middle, and network exploitation.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 8: Social Engineering Attacks*