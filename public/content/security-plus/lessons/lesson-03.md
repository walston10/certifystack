# Lesson 3: Security Concepts and Frameworks

**Estimated Time:** 25-30 minutes  
**Domain:** 1.0 General Security Concepts (12% of exam)  
**Exam Objectives Covered:** 1.2 - Summarize fundamental security concepts

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain Zero Trust architecture and its core principle of "never trust, always verify"
- Differentiate between control plane and data plane in Zero Trust models
- Define Policy Enforcement Points (PEP) and Policy Decision Points (PDP)
- Apply defense in depth through layered security controls
- Implement separation of duties to prevent fraud and errors
- Apply least privilege and need-to-know principles to access decisions
- Distinguish between due diligence and due care
- Identify physical security controls and their purposes
- Describe deception technologies (honeypots, honeytokens, honeyfiles)

---

## Video Resources

- 📹 **Watch:** [Professor Messer - Zero Trust](https://www.youtube.com/watch?v=zC_Pndpg8-c) 
- 📹 **Watch:** [Professor Messer - Defense in Depth](https://www.youtube.com/watch?v=1nUXQHr4l9g) 

---

## Introduction

2013: Target Corporation's network is breached through an HVAC vendor's credentials. Attackers pivot from the vendor's access to payment systems, stealing 40 million credit card numbers. The vendor had network access because they were "trusted"—inside the perimeter.

2020: SolarWinds' Orion software update delivers malware to 18,000 organizations including US government agencies. The software was trusted because it came from an established vendor through normal update channels.

2021: Colonial Pipeline shuts down fuel distribution to the Eastern United States after ransomware encrypts their systems. Attackers entered through a legacy VPN account with a reused password. Once inside, they moved laterally without restriction.

The common thread? Trust. Organizations trusted their network perimeters. Trusted their vendors. Trusted that authenticated users should have broad access. Each breach exploited that trust.

Traditional security operated like a castle: build strong walls, verify people at the gate, then trust everyone inside. This model assumed clear boundaries between "inside" (safe) and "outside" (dangerous). But modern networks have no clear boundaries. Employees work from home. Data lives in multiple clouds. Vendors connect remotely. Mobile devices roam between networks. The perimeter is everywhere and nowhere.

Zero Trust flips the model: trust nothing, verify everything, assume breach. Every access request—whether from the CEO's laptop or the intern's phone, whether from headquarters or a coffee shop—must prove it should be allowed. Every time.

This lesson explores Zero Trust and other foundational security concepts that shape how organizations protect themselves. These aren't just theoretical frameworks—they're practical approaches that would have prevented or limited every breach mentioned above.

---

## Zero Trust Architecture: Never Trust, Always Verify

Zero Trust is a security model that eliminates implicit trust. No user, device, or network location is automatically trusted. Every access request must be explicitly verified before being granted.

### The Core Principle

**Traditional model:** "Trust but verify"
- Verify identity at network perimeter
- Once inside, users are trusted
- Internal network considered safe
- Focus on keeping attackers out

**Zero Trust model:** "Never trust, always verify"
- Verify every access request regardless of location
- No implicit trust based on network position
- Assume attackers may already be inside
- Focus on protecting resources, not perimeters

Picture the difference: Traditional security is like a nightclub with bouncers at the door—once you're in, you can go anywhere. Zero Trust is like a casino where every table, every room, every transaction requires showing your credentials again, and cameras watch everything.

### Why Zero Trust Emerged

Several factors made traditional perimeter security obsolete:

**Cloud adoption** - Data and applications moved outside the traditional perimeter. How do you protect resources that aren't in your data center?

**Remote work** - Employees access resources from home networks, coffee shops, airports. The "inside" network includes untrusted locations.

**Mobile devices** - Phones and tablets move between networks constantly. A device might be "inside" one moment and "outside" the next.

**Sophisticated attacks** - Attackers who breach the perimeter find little resistance inside. Lateral movement is often trivial once initial access is gained.

**Supply chain risks** - Trusted vendors and software become attack vectors. Being "trusted" doesn't mean being safe.

### Zero Trust Components

Zero Trust architecture involves several key components working together.

#### Control Plane vs. Data Plane

**Control plane** - The decision-making layer that determines whether access should be allowed. It evaluates requests against policies and context.

**Data plane** - The layer where actual data transmission occurs. It enforces decisions made by the control plane.

Think of it like air traffic control. The control plane is the tower making decisions about which planes can land and when. The data plane is the actual runways where planes land. The tower decides; the runway executes.

Separating these planes allows centralized, consistent policy decisions while distributing enforcement across the network.

#### Policy Decision Point (PDP)

The PDP is the brain of Zero Trust—it evaluates access requests and decides whether to allow or deny them.

**PDP considers:**
- Who is requesting access (identity verification)
- What device they're using (device health/compliance)
- Where they're connecting from (location/network)
- What they're trying to access (resource sensitivity)
- When they're making the request (time-based policies)
- How they're behaving (anomaly detection)

The PDP doesn't just check credentials—it evaluates the entire context of the request. Same user, same credentials, but connecting from unusual location at unusual time on unknown device? PDP might deny or require additional verification.

#### Policy Enforcement Point (PEP)

The PEP is the gatekeeper—it enforces whatever the PDP decides.

**PEP functions:**
- Intercepts access requests before they reach resources
- Queries PDP for access decisions
- Allows or blocks access based on PDP response
- May provide limited access (not just allow/deny)

PEPs are distributed throughout the environment—at network boundaries, on endpoints, in cloud services, protecting applications. Every path to sensitive resources passes through a PEP.

#### Eliminating Implicit Trust Zones

Traditional networks have implicit trust zones—areas where traffic flows freely without verification. Zero Trust eliminates these.

**Examples of implicit trust to eliminate:**
- "Internal network is trusted" → Verify all internal traffic
- "VPN users are trusted" → Verify each resource request separately
- "Server-to-server traffic is safe" → Authenticate service-to-service communication
- "Authenticated users can access everything" → Verify authorization for each resource

The goal: no traffic gets a free pass based on where it originates. Location within the network grants no privileges.

### Zero Trust Implementation Principles

**Verify explicitly** - Always authenticate and authorize based on all available data points: identity, location, device health, data classification, anomalies.

**Use least privilege access** - Limit access to minimum necessary, with just-in-time and just-enough-access (JIT/JEA). Don't grant standing permissions when temporary access works.

**Assume breach** - Design as if attackers are already inside. Minimize blast radius through segmentation. Verify end-to-end encryption. Use analytics to detect anomalies.

💡 **Exam Tip:** Zero Trust questions often focus on the core principle (never trust, always verify), the components (PDP decides, PEP enforces), and the shift from perimeter-based to resource-based protection.

---

## Defense in Depth: Layered Security

Defense in depth implements multiple layers of security controls so that failure of one layer doesn't mean complete compromise.

### The Concept

No single security control is perfect. Firewalls have vulnerabilities. Users fall for phishing. Encryption can be misconfigured. Defense in depth acknowledges this reality by layering controls—if one fails, others continue protecting.

**Analogy:** A medieval castle didn't rely on one wall. It had a moat, outer wall, inner wall, guards, locked doors, and a keep. An attacker breaching one defense faced another, then another. Each layer slowed the attack and increased chances of detection.

### Security Layers

**Physical layer** - Fences, locks, guards, cameras protecting facilities and hardware

**Network layer** - Firewalls, IDS/IPS, network segmentation controlling traffic flow

**Endpoint layer** - Antivirus, host firewalls, endpoint detection and response (EDR) on devices

**Application layer** - Input validation, authentication, secure coding protecting applications

**Data layer** - Encryption, access controls, data loss prevention protecting information itself

**Administrative layer** - Policies, procedures, training governing human behavior

### Defense in Depth Example

Protecting a database containing customer payment information:

| Layer | Control | What It Stops |
|-------|---------|---------------|
| Physical | Locked server room | Unauthorized physical access |
| Network | Firewall rules | Direct attacks from internet |
| Network | Segmentation | Lateral movement from compromised systems |
| Endpoint | Server hardening | Exploitation of unnecessary services |
| Application | Input validation | SQL injection attacks |
| Application | Authentication | Unauthorized application access |
| Data | Encryption at rest | Data theft if physical security fails |
| Data | Column-level encryption | Exposure even if database is accessed |
| Administrative | Access reviews | Accumulation of unnecessary permissions |
| Administrative | Training | Social engineering attacks |

An attacker must defeat multiple controls across multiple layers. Breaching the network doesn't give database access. Compromising the application doesn't expose encrypted data. Each layer reduces risk independently.

### Benefits of Layered Defense

**Redundancy** - Multiple controls mean single points of failure don't cause complete compromise

**Detection opportunities** - Each layer provides chances to detect attacks in progress

**Slows attackers** - Time spent bypassing each layer allows defenders to respond

**Addresses different threats** - Various layers counter different attack types

**Compensates for weaknesses** - Strong layers offset weaker ones

---

## Separation of Duties: Preventing Dangerous Concentrations

Separation of duties divides critical functions among multiple people so no single individual can complete a sensitive action alone.

### The Principle

When one person controls an entire process, fraud, errors, and abuse become possible without detection. Separation of duties creates checks and balances requiring collusion to circumvent.

**Classic example:** Financial controls
- Person A can authorize payments
- Person B can execute payments
- Neither can do both
- Fraudulent payment requires A and B to collude

### Implementation Examples

**Financial transactions:**
- Requester submits expense
- Manager approves expense
- Accounting processes payment
- Different person reconciles accounts

**System administration:**
- Developer writes code
- Different person reviews code
- Another team deploys to production
- Security team monitors production

**Physical security:**
- Guard monitors access
- Different person manages access lists
- Another reviews access logs

**Certificate management:**
- One team requests certificates
- Different team approves requests
- Another team implements certificates

### Why It Matters for Security

**Reduces insider threat** - Malicious insiders can't act alone

**Catches errors** - Second set of eyes catches mistakes

**Creates accountability** - Clear responsibility for each step

**Audit trail** - Multiple participants create natural documentation

**Regulatory compliance** - Many regulations require separation of duties

**Limitation:** Separation of duties requires adequate staffing. Small teams may struggle to implement fully. In such cases, compensating controls (enhanced logging, regular audits) help offset the risk.

---

## Least Privilege: Minimum Necessary Access

Least privilege grants users, systems, and processes only the minimum permissions needed to perform their functions—nothing more.

### The Principle

Every additional permission is additional risk. Unnecessary access enables:
- Accidental damage (user deletes files they shouldn't access)
- Intentional abuse (insider exploits unnecessary access)
- Lateral movement (attacker uses compromised account's excessive permissions)

Least privilege minimizes these risks by eliminating unnecessary access.

### Implementation Examples

**User accounts:**
- Accountant accesses financial systems, not engineering servers
- Help desk resets passwords, doesn't modify security policies
- Developers access development environment, limited production access

**System accounts:**
- Web server accesses its database, not all databases
- Backup service reads files, doesn't execute them
- Monitoring service queries metrics, doesn't modify configurations

**Temporary elevation:**
- Administrator uses standard account normally
- Elevates to admin only when needed for specific tasks
- Elevation expires after defined period (JIT - Just In Time)

### Need to Know

Need to know is least privilege applied to information access. Even with clearance or role-based access, users only see information required for their specific tasks.

**Example:** Two employees both work in HR with access to employee records.
- Recruiter sees candidate information (need to know for hiring)
- Benefits administrator sees insurance enrollment (need to know for benefits)
- Neither sees the other's information despite similar roles

Need to know prevents broad information exposure even among authorized personnel.

### Least Privilege Benefits

**Limits breach impact** - Compromised accounts have limited access to exploit

**Reduces attack surface** - Fewer permissions mean fewer potential attack paths

**Simplifies auditing** - Smaller permission sets are easier to review

**Supports compliance** - Many regulations require least privilege

**Prevents accidents** - Users can't accidentally damage systems they can't access

---

## Due Diligence and Due Care

These legal/professional concepts establish standards for security responsibility.

### Due Diligence

Due diligence is the process of identifying and understanding risks. It's about **knowing** what you should protect and what threatens it.

**Due diligence activities:**
- Risk assessments identifying vulnerabilities
- Vendor security evaluations before contracts
- Compliance requirement research
- Threat intelligence gathering
- Security audits and reviews
- Background checks on employees

Due diligence answers: "What are our risks and obligations?"

### Due Care

Due care is taking reasonable steps to protect against identified risks. It's about **acting** on what due diligence revealed.

**Due care activities:**
- Implementing security controls
- Maintaining and patching systems
- Training employees
- Responding to incidents
- Documenting security measures
- Following industry best practices

Due care answers: "What are we doing about those risks?"

### The Relationship

Due diligence without due care: "We identified our risks but did nothing about them."

Due care without due diligence: "We implemented controls but don't know if they address actual risks."

Both are required for reasonable security. Organizations that suffer breaches may face legal liability if they failed either standard:
- Failed due diligence: "You should have known this was a risk"
- Failed due care: "You knew the risk but didn't act reasonably"

### Practical Example

**Due diligence:** Company assesses their web application, discovers it's vulnerable to SQL injection, identifies regulatory requirements for protecting customer data.

**Due care:** Company implements input validation, deploys web application firewall, trains developers on secure coding, schedules regular security testing.

---

## Gap Analysis

Gap analysis compares current security state to desired state, identifying what's missing and planning remediation.

### The Process

**1. Define desired state**
- Regulatory requirements (HIPAA, PCI DSS)
- Industry frameworks (NIST, ISO 27001)
- Organizational policies
- Contractual obligations

**2. Assess current state**
- Technical controls in place
- Policies and procedures
- Staff capabilities
- Documentation

**3. Identify gaps**
- Missing controls
- Inadequate implementations
- Policy violations
- Resource shortfalls

**4. Prioritize remediation**
- Risk-based prioritization
- Resource requirements
- Timeline development
- Responsibility assignment

### Gap Analysis Example

| Requirement | Desired State | Current State | Gap | Remediation |
|-------------|---------------|---------------|-----|-------------|
| MFA | All remote access uses MFA | VPN requires MFA; cloud apps don't | Cloud apps | Implement MFA for all cloud applications |
| Encryption | Data encrypted at rest | Databases encrypted; file shares aren't | File shares | Deploy file share encryption |
| Training | Annual security awareness | Training done 3 years ago | Outdated | Implement annual training program |
| Logging | 90-day log retention | 30-day retention | Insufficient | Expand log storage, update retention |

---

## Physical Security Concepts

Physical security protects tangible assets—buildings, equipment, people. Digital security fails if attackers can physically access hardware.

### Barriers and Access Control

**Fencing**
- Defines boundaries and deters casual intruders
- Height matters: 3-4 feet deters casual access; 8 feet with barbed wire deters determined attackers
- Must be monitored—fence alone just slows down, doesn't stop

**Bollards**
- Short vertical posts preventing vehicle access
- Protect buildings from vehicle ramming attacks
- Common around government buildings and crowded areas

**Access Control Vestibules (Mantraps)**
- Small room with two interlocking doors
- Only one door opens at a time
- Prevents tailgating (following authorized person through door)
- May include weight sensors, cameras, biometrics

**Gates and turnstiles**
- Control vehicle and pedestrian entry points
- May be automated with badge readers or guard-controlled
- Turnstiles prevent multiple people using one credential

### Surveillance and Monitoring

**Video surveillance (CCTV)**
- Records activity for review
- Deters crime when visible
- Provides evidence for investigations
- Modern systems include motion detection, analytics

**Security guards**
- Human judgment for unusual situations
- Can respond immediately to incidents
- Verify identity for visitors
- Patrol areas cameras might miss

**Lighting**
- Illuminates areas for cameras and guards
- Deters criminals who prefer darkness
- Critical for parking lots, entrances, perimeters

**Sensors**
- Motion detectors trigger alerts
- Door/window sensors detect unauthorized entry
- Glass break sensors detect forced entry
- Heat sensors detect presence

### Access Badges and Biometrics

**Access badges/cards**
- Proximity cards (tap to access)
- Smart cards (chip-based, more secure)
- Can be lost, stolen, or shared (limitation)
- Logs who accessed where and when

**Biometrics**
- Fingerprint, facial recognition, iris scan
- Can't be lost or shared like badges
- More expensive to implement
- False acceptance/rejection rates must be considered

**Multi-factor physical access**
- Badge + PIN
- Badge + biometric
- Increases security beyond single factor

---

## Deception and Disruption Technologies

Deception technologies turn the tables on attackers by creating fake targets that alert defenders while wasting attacker time.

### Honeypots

Honeypots are decoy systems designed to attract attackers. They appear to be legitimate targets but are closely monitored traps.

**How honeypots work:**
- Deployed alongside real systems
- Made to look attractive (appear vulnerable, contain "valuable" data)
- Have no legitimate business function
- Any interaction is suspicious by definition
- Alert defenders when touched

**Honeypot benefits:**
- Early warning of attacks (attackers find honeypots during reconnaissance)
- Intelligence gathering (observe attacker techniques)
- Waste attacker time (they're attacking fake systems)
- Low false positives (legitimate users have no reason to touch them)

**Types:**
- Low-interaction: Simulate services, limited attacker engagement
- High-interaction: Full systems allowing deeper attacker engagement

### Honeynets

Honeynets are networks of honeypots simulating entire environments. They provide richer deception than individual honeypots.

**Honeynet components:**
- Multiple honeypot systems
- Fake network infrastructure
- Simulated services and data
- Comprehensive monitoring

Honeynets convince attackers they've compromised real networks while defenders watch every move.

### Honeyfiles

Honeyfiles are fake files placed in systems to detect unauthorized access. They appear to contain valuable information but trigger alerts when opened.

**Examples:**
- File named "passwords.xlsx" that alerts when opened
- Document titled "Merger Plans - Confidential.docx"
- Database labeled "Customer_Credit_Cards"

Any access indicates either attacker activity or policy violation (employees shouldn't be opening random "password" files either).

### Honeytokens

Honeytokens are pieces of data that trigger alerts when used. They're embedded in systems and databases as tripwires.

**Examples:**
- Fake credentials that alert when authentication is attempted
- Fake records in databases that alert when queried
- Fake API keys that alert when used
- Fake email addresses that alert when received

When an attacker uses exfiltrated data containing honeytokens, defenders know immediately.

### Fake Telemetry

Fake telemetry feeds attackers false information about the environment, causing them to waste time and reveal their presence.

**Examples:**
- False system information misleading reconnaissance
- Fake network maps directing attackers to honeypots
- Misleading error messages revealing attack attempts
- False data mixed with real data (detected when fake data surfaces)

---

## Key Exam Tips

🎯 **Zero Trust core concept** - "Never trust, always verify." No implicit trust based on network location. Every access request verified.

🎯 **PDP vs. PEP** - PDP makes decisions (the brain). PEP enforces decisions (the gatekeeper). Know the difference.

🎯 **Defense in depth = layers** - Multiple security controls so failure of one doesn't mean total compromise.

🎯 **Separation of duties** - Divide critical functions so no single person can complete sensitive actions alone. Prevents fraud and catches errors.

🎯 **Least privilege** - Minimum necessary access. Need to know applies specifically to information access.

🎯 **Due diligence = knowing risks. Due care = acting on them.** Both required for reasonable security.

🎯 **Physical security** - Mantraps/access control vestibules prevent tailgating. Bollards stop vehicles. Know control purposes.

🎯 **Deception technologies** - Honeypots are fake systems. Honeyfiles are fake files. Honeytokens are fake data. All alert when touched.

---

## Key Takeaways

- [ ] Zero Trust eliminates implicit trust—every access request must be explicitly verified
- [ ] "Never trust, always verify" is Zero Trust's core principle
- [ ] Policy Decision Point (PDP) evaluates requests and decides to allow/deny
- [ ] Policy Enforcement Point (PEP) intercepts requests and enforces PDP decisions
- [ ] Control plane makes decisions; data plane carries traffic
- [ ] Defense in depth layers multiple controls so single failures don't cause compromise
- [ ] Separation of duties prevents single individuals from completing sensitive processes alone
- [ ] Least privilege grants minimum necessary permissions—nothing extra
- [ ] Need to know restricts information access to only what's required for specific tasks
- [ ] Due diligence identifies risks; due care addresses them
- [ ] Gap analysis compares current state to desired state and plans remediation
- [ ] Access control vestibules (mantraps) prevent tailgating through secured doors
- [ ] Bollards prevent vehicle-based attacks on buildings
- [ ] Honeypots are decoy systems that alert when attackers interact with them
- [ ] Honeytokens are fake data elements that alert when used by attackers

---

## Check Your Understanding

**1. A company's security model requires every access request to be authenticated and authorized, regardless of whether the request comes from inside the corporate network or from the internet. What security model is this?**

<details>
<summary>Show Answer</summary>
<strong>Zero Trust.</strong> The defining characteristic of Zero Trust is eliminating implicit trust based on network location. Traditional models trust internal network traffic, but Zero Trust verifies every request regardless of origin. The principle "never trust, always verify" applies to all requests—internal or external, VPN or direct, headquarters or remote.
</details>

**2. In Zero Trust architecture, what is the difference between the Policy Decision Point (PDP) and Policy Enforcement Point (PEP)?**

<details>
<summary>Show Answer</summary>
<strong>PDP decides; PEP enforces.</strong> The Policy Decision Point (PDP) is the brain—it evaluates access requests against policies, considering identity, device, location, time, and behavior to decide whether access should be granted. The Policy Enforcement Point (PEP) is the gatekeeper—it intercepts access requests, queries the PDP for decisions, and enforces those decisions by allowing or blocking access. PDP answers "should this be allowed?" PEP implements that answer.
</details>

**3. An organization implements firewalls, intrusion detection, endpoint protection, application security, data encryption, and security awareness training. What security concept does this represent?**

<details>
<summary>Show Answer</summary>
<strong>Defense in depth (layered security).</strong> Multiple security controls across different layers (network, endpoint, application, data, administrative) ensure that failure of one control doesn't mean complete compromise. Each layer provides independent protection and detection opportunities. An attacker breaching the firewall still faces endpoint protection; bypassing that still faces application security; defeating that still faces encryption. Layered defense slows attacks and multiplies chances for detection.
</details>

**4. A financial system requires one person to create payment requests, a different person to approve them, and a third person to execute the actual transfers. What security principle is being applied?**

<details>
<summary>Show Answer</summary>
<strong>Separation of duties.</strong> Critical financial functions are divided among multiple people so no single individual can complete a fraudulent transaction alone. The requester can't approve their own requests. The approver can't execute transfers. The executor can't create or approve. Fraud requires all three to collude. This principle also catches errors (multiple sets of eyes on each transaction) and creates accountability (clear responsibility for each step).
</details>

**5. A database administrator has full access to all company databases, including HR records, financial data, and customer information, even though their job only requires managing the technical infrastructure. What security principle is being violated?**

<details>
<summary>Show Answer</summary>
<strong>Least privilege.</strong> The DBA has more access than their job requires. Least privilege dictates granting only minimum necessary permissions. While the DBA needs technical access to manage database infrastructure (backups, performance, availability), they don't need to read actual data contents (HR records, financial data, customer information). Proper implementation would grant administrative access to database systems while restricting access to the data within them.
</details>

**6. An organization conducts a risk assessment, identifies that their web applications are vulnerable to common attacks, researches compliance requirements, but takes no action to address the findings. Which standard have they met, and which have they failed?**

<details>
<summary>Show Answer</summary>
<strong>Met due diligence; failed due care.</strong> Due diligence is identifying and understanding risks—conducting assessments, researching requirements, discovering vulnerabilities. The organization did this. Due care is taking reasonable steps to address identified risks—implementing controls, fixing vulnerabilities, acting on findings. The organization failed this by taking no action. Both standards are required. Knowing about risks without addressing them may create greater legal liability than not knowing at all.
</details>

**7. A small room with two interlocking doors is installed at the data center entrance. Only one door can be open at a time, and the inner door only opens after the outer door closes and the person is authenticated. What is this control called, and what does it prevent?**

<details>
<summary>Show Answer</summary>
<strong>Access control vestibule (mantrap), prevents tailgating.</strong> This physical security control creates a buffer zone where only one person can be authenticated at a time. The interlocking doors ensure someone can't hold the door for an unauthorized person to follow through (tailgating/piggybacking). Advanced versions include weight sensors to detect multiple people and cameras for verification. Mantraps are common in high-security facilities like data centers and financial institutions.
</details>

**8. A company places a file named "Employee_Salaries_2024.xlsx" on a file server. The file contains fake data and is configured to send an alert to security whenever anyone opens it. What type of deception technology is this?**

<details>
<summary>Show Answer</summary>
<strong>Honeyfile.</strong> Honeyfiles are fake files designed to attract attackers and detect unauthorized access. They appear to contain valuable information (salary data, passwords, confidential plans) but trigger alerts when accessed. Since legitimate users have no business reason to open random "salary" files they don't own, any access indicates either attacker activity or policy violation. Honeyfiles have minimal false positives because there's no legitimate reason to access them.
</details>

**9. What's the difference between a honeypot and a honeytoken?**

<details>
<summary>Show Answer</summary>
<strong>Honeypot = decoy system; Honeytoken = decoy data.</strong> A honeypot is an entire system (server, application, service) that appears legitimate but exists only to attract and detect attackers. Any interaction with the honeypot is suspicious. A honeytoken is a piece of data (fake credential, fake database record, fake API key, fake email address) embedded in real systems. When attackers exfiltrate data and use the honeytoken, it triggers an alert. Honeypots catch attackers during network reconnaissance; honeytokens catch them when using stolen data.
</details>

**10. A company's security policy requires MFA for all systems, but a legacy manufacturing system cannot support MFA. They implement longer passwords, account lockout, network segmentation isolating the system, and enhanced monitoring. Is this acceptable, and what principle applies?**

<details>
<summary>Show Answer</summary>
<strong>Yes, this is a compensating control.</strong> When primary controls (MFA) cannot be implemented due to technical limitations, compensating controls provide alternative protection achieving similar security goals. The combination of stronger passwords + lockout + segmentation + monitoring doesn't equal MFA but addresses similar risks: stronger authentication (longer passwords, lockout), limited exposure (segmentation), and detection (monitoring). Compensating controls require documentation of why the primary control isn't feasible and how alternatives provide comparable protection. This is acceptable when primary controls are genuinely impossible, not just inconvenient.
</details>

---

## Next Lesson Preview

In **Lesson 4: Cryptography Fundamentals**, we'll dive into the mathematics protecting modern communications. You'll learn how symmetric encryption (same key encrypts and decrypts) differs from asymmetric encryption (public/private key pairs), why we need both, and how they work together. We'll cover the major algorithms you must know for the exam—AES, RSA, Diffie-Hellman—and understand when to use each.

---

✅ **Lesson 3 Complete**

**Progress:** 3 of 30 lessons complete (10%)

---

*Next up: Lesson 4 - Cryptography Fundamentals*