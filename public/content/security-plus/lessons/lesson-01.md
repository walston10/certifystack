Lesson 1: Security Fundamentals and the CIA Triad
Estimated Time: 25-30 minutes
Domain: 1.0 General Security Concepts (12% of exam)
Exam Objectives Covered: 1.1 - Compare and contrast various types of security controls

Learning Objectives
By the end of this lesson, you will be able to:

Define the CIA Triad and explain why it's the foundation of all security decisions
Differentiate between confidentiality, integrity, and availability with real-world examples
Explain non-repudiation and its role in security
Distinguish between authentication, authorization, and accounting (AAA)
Categorize security controls by type (technical, managerial, operational, physical)
Classify controls by function (preventive, detective, corrective, deterrent, compensating, directive)
Apply the CIA Triad to evaluate security decisions and tradeoffs


Video Resources

Professor Messer: "Security+ SY0-701 - 1.1 Security Controls" (14 min)
PowerCert: "CIA Triad Explained" (8 min)
Sunny Classroom: "Security Controls Overview" (12 min)


Introduction
It's 2:47 AM when Maria's phone explodes with alerts. As the security analyst on call at Regional Medical Center, she's used to occasional noise—but this is different. Fourteen alerts in thirty seconds, all from the electronic health records system.
She logs in remotely and her stomach drops. Someone is systematically downloading patient records. Thousands of them. Names, diagnoses, Social Security numbers, insurance information—everything needed to destroy someone's financial life or blackmail them with embarrassing medical conditions.
Maria kills the connection immediately, but not before 47,000 records are exfiltrated. Over the next weeks, the fallout is catastrophic. HIPAA fines exceed $2 million. Class action lawsuits follow. The hospital's reputation—built over 60 years—crumbles. Patients transfer to competitors. Three executives resign.
The root cause? A single contractor account with excessive permissions that was never disabled after the project ended. No technical failure. No sophisticated hack. Just a forgotten account with too much access.
This story plays out constantly across industries. In 2023, the average data breach cost organizations $4.45 million. Healthcare breaches averaged $10.93 million. These aren't theoretical risks—they're business-ending events that happen because organizations fail to apply fundamental security principles.
Every security decision you'll ever make connects back to three simple questions: Is this information staying private? Has anyone tampered with it? Can authorized people access it when needed? These three questions form the CIA Triad—the conceptual foundation underlying every firewall rule, every password policy, every encryption standard, and every security decision in the industry.
Master these fundamentals, and complex security topics become logical extensions of simple principles. Miss them, and you'll be forever confused about why certain controls exist and when to apply them.
Let's build your security foundation.

The CIA Triad: Security's Core Framework
The CIA Triad isn't a government agency—it's three fundamental goals that every security measure exists to protect. Every security technology, policy, and procedure you'll encounter on the Security+ exam ultimately serves one or more of these principles.
Confidentiality: Keeping Secrets Secret
Confidentiality ensures information is accessible only to those authorized to see it. If you shouldn't see it, you can't see it.
Real-world confidentiality:

Medical records visible only to treating physicians
Salary information accessible only to HR and management
Trade secrets protected from competitors
Personal photos shared only with family
Credit card numbers masked except for last four digits

Threats to confidentiality:

Data breaches exposing customer information
Unauthorized employees accessing files outside their role
Shoulder surfing (someone watching you type passwords)
Eavesdropping on network traffic
Lost laptops containing unencrypted data

Controls protecting confidentiality:

Encryption (scrambles data so only key holders can read it)
Access controls (permissions limiting who sees what)
Classification labels (marking sensitivity levels)
Physical security (locked server rooms)
Data masking (hiding portions of sensitive data)

Picture a hospital. Confidentiality means the receptionist can see your name and appointment time but not your HIV test results. The billing department sees your insurance information but not your psychiatric evaluations. Your doctor sees everything relevant to your care. Each person sees exactly what their role requires—nothing more.
Integrity: Trusting That Data Is Accurate
Integrity ensures information hasn't been modified by unauthorized parties. What you're looking at is exactly what was created or sent—nobody tampered with it.
Real-world integrity:

Bank balance showing actual transactions (not modified by attackers)
Contracts matching what both parties signed
Software downloads matching publisher's original files
Medical prescriptions unchanged since doctor wrote them
Financial reports reflecting actual company performance

Threats to integrity:

Malware modifying files
Man-in-the-middle attacks altering communications
Database record tampering
Unauthorized configuration changes
Forged documents

Controls protecting integrity:

Hashing (creating fingerprints to detect changes)
Digital signatures (proving who created/approved something)
Version control (tracking all changes)
Access controls (limiting who can modify)
Audit logs (recording what changed, when, and by whom)

Picture wire transfer instructions. You email your bank requesting $50,000 sent to account 12345. If an attacker intercepts that email and changes the account number to 67890 (their account), the bank sends your money to criminals. Integrity controls (like digital signatures or callback verification) ensure the instructions received match the instructions sent.
Availability: Access When Needed
Availability ensures authorized users can access information and systems when they need them. The most secure system in the world is useless if legitimate users can't get in.
Real-world availability:

911 systems answering emergency calls
E-commerce sites processing orders during holiday sales
ATMs dispensing cash when customers need it
Email servers delivering messages without delay
Hospital systems accessible during patient emergencies

Threats to availability:

DDoS attacks overwhelming servers with traffic
Ransomware encrypting files until payment
Hardware failures crashing systems
Natural disasters destroying data centers
Power outages
Accidental deletion

Controls protecting availability:

Redundancy (backup systems ready to take over)
Load balancing (distributing traffic across multiple servers)
Backups (copies to restore from)
Disaster recovery plans (procedures when things fail)
DDoS mitigation services
Uninterruptible power supplies (UPS)

Picture an e-commerce site on Black Friday. Millions of shoppers flood the site. Without availability controls (load balancers, scalable servers, DDoS protection), the site crashes—losing millions in sales and damaging customer trust. Availability ensures systems handle demand and recover quickly from failures.
The Triad in Balance
Here's what makes security challenging: these three goals often conflict.
Confidentiality vs. Availability: Extreme confidentiality (requiring 5-factor authentication through three separate systems) makes data highly protected but nearly impossible to access quickly. Emergency room doctors need patient records NOW, not after 10 minutes of authentication.
Integrity vs. Availability: Extensive integrity checking (verifying every packet, validating every transaction, requiring multiple approvals) slows systems dramatically. Real-time trading systems can't wait for committee approval on each trade.
Confidentiality vs. Integrity: Some audit logging needed for integrity (tracking who accessed what) can itself become a confidentiality risk (the logs reveal sensitive access patterns).
Security professionals constantly balance these tensions based on organizational needs. A nuclear facility prioritizes confidentiality and integrity over availability—better for systems to be inaccessible than for weapons data to leak. A hospital emergency system prioritizes availability—doctors must access records immediately even if it means slightly relaxed confidentiality controls in emergencies.
💡 Memory Trick: Remember CIA like a protective triangle. Remove any side and the shape collapses. Security requires all three—missing any one creates fundamental weakness.

Beyond the Triad: Non-Repudiation and AAA
Two additional concepts complete the security fundamentals picture.
Non-Repudiation: No Denying Actions
Non-repudiation ensures someone cannot deny having performed an action. Once you did it, you can't credibly claim you didn't.
Why it matters:
Picture an employee initiating a $500,000 wire transfer, then claiming "I never authorized that—someone else must have used my credentials." Without non-repudiation, the organization can't prove who actually made the request.
Real-world non-repudiation:

Digital signatures proving who signed a contract
Audit logs with tamper-evident timestamps
Biometric authentication (you can't claim someone else used your fingerprint)
Video surveillance of physical access
Email receipts proving delivery

Non-repudiation enables:

Legal proceedings (admissible evidence)
Regulatory compliance (audit trails)
Accountability (identifying who did what)
Dispute resolution (settling disagreements about what happened)

Digital signatures are the primary non-repudiation mechanism. When you digitally sign a document, your private key (which only you possess) creates a mathematical proof that you specifically approved that exact content. You cannot later claim someone else signed it because nobody else has your private key.
AAA: Authentication, Authorization, Accounting
AAA is a framework for controlling access to resources. It answers three sequential questions every time someone requests access.
Authentication: Who are you?
Authentication verifies identity—confirming you are who you claim to be.
Methods include:

Passwords (something you know)
Smart cards or tokens (something you have)
Fingerprints or facial recognition (something you are)
Location verification (somewhere you are)

Authentication happens first. Until the system confirms your identity, nothing else proceeds.
Authorization: What can you do?
Authorization determines permissions—what actions you're allowed to perform after identity is confirmed.
Even authenticated users have limits:

Regular employee can read documents but not delete them
Manager can approve expenses up to $5,000
Admin can modify configurations but not access financial data
Guest can view public areas only

Authentication without authorization is incomplete. Knowing WHO you are doesn't mean you can do EVERYTHING.
Accounting: What did you do?
Accounting (also called auditing) tracks activities—logging actions for review, compliance, and forensics.
Accounting answers:

Who accessed what resources?
When did access occur?
What actions were performed?
From which location/device?

Even when people pass authentication and have authorization, their actions are recorded. If something goes wrong, accounting provides the trail to investigate.
AAA in action:
You badge into the office building (authentication—proving you're an employee). Your badge only opens doors to your department floor (authorization—limiting your access). The badge system logs every door you open with timestamps (accounting—recording your movements).
Later, valuable equipment disappears from the lab. Security reviews badge logs to see who entered the lab that day. Because of AAA, they quickly identify three people who accessed the area during the window—dramatically narrowing the investigation.
🎯 Exam Tip: Questions often test whether you understand the sequence and purpose of each AAA component. Authentication ALWAYS comes before authorization (you can't determine permissions until you know who's asking).

Security Control Categories: WHO Implements Them
Security controls are the measures we implement to protect the CIA Triad. Controls are categorized by WHO implements them or WHAT they do.
First, let's examine categories based on who implements or maintains the control.
Technical Controls (Logical Controls)
Technical controls use technology to protect systems. They're implemented through hardware, software, or firmware.
ExampleWhat It DoesFirewallBlocks unauthorized network trafficEncryptionScrambles data so only key holders read itAntivirusDetects and removes malwareIDS/IPSMonitors for and blocks attacksAccess Control ListsDefines who can access what resourcesMulti-factor authenticationRequires multiple proofs of identityBiometric scannersVerifies identity through physical characteristics
Technical controls are automated—they work 24/7 without human intervention. A firewall doesn't take coffee breaks. Encryption doesn't forget to protect files on Fridays.
Managerial Controls (Administrative Controls)
Managerial controls are policies, procedures, and guidelines—the rules governing how security operates.
ExampleWhat It DoesSecurity policiesDefines acceptable behavior and requirementsRisk assessmentsIdentifies and evaluates threatsSecurity awareness trainingEducates employees about threatsBackground checksScreens employees before hiringChange management proceduresControls how modifications are madeIncident response plansDocuments how to handle breachesVendor management policiesGoverns third-party security requirements
Managerial controls don't directly stop attacks—they guide humans on how to prevent, detect, and respond to security issues. A security policy stating "all laptops must use full-disk encryption" doesn't encrypt anything itself, but it creates the requirement that leads to implementing technical encryption controls.
Operational Controls
Operational controls are day-to-day procedures performed by people—the human processes that maintain security.
ExampleWhat It DoesSecurity guardsMonitor physical premisesLog reviewsHumans analyzing system logs for anomaliesBackup proceduresStaff performing and verifying backupsPatch managementTeams testing and deploying updatesVisitor escort proceduresStaff accompanying non-employeesSecurity assessmentsTeams conducting penetration tests
Operational controls bridge managerial direction and technical implementation. The policy says "review logs daily" (managerial). The SIEM collects logs (technical). A human analyst actually reviews them (operational).
Physical Controls
Physical controls protect the tangible environment—the buildings, rooms, and hardware.
ExampleWhat It DoesLocksPrevents unauthorized physical accessSecurity camerasMonitors and records activityFencingCreates physical perimeter barriersMantraps (access control vestibules)Prevents tailgatingBadge readersControls building/room accessEnvironmental controlsMaintains safe temperature/humidityFire suppressionProtects equipment from fire damage
Physical controls matter because all the digital security in the world fails if attackers can physically access hardware. Stealing a server bypasses every software protection on it.
Category overlap: Controls often span categories. A badge reader is physical (the device) and technical (the electronic access system). Security training is managerial (the policy requiring it) and operational (the act of conducting training). Don't worry about perfect categorization—understand the concepts.

Security Control Types: WHAT They Do
Beyond who implements controls, we categorize them by their functional purpose—what they're designed to accomplish.
Preventive Controls
Preventive controls stop security incidents BEFORE they happen. They're proactive barriers against threats.
ExampleHow It PreventsFirewallBlocks malicious traffic before it enters networkEncryptionMakes stolen data unreadableSecurity trainingReduces employee susceptibility to phishingAccess controlsPrevents unauthorized access to resourcesLocksStops unauthorized physical entryAntivirusBlocks known malware from executing
Think of preventive controls as walls. They exist to keep bad things out before damage occurs.
Detective Controls
Detective controls identify security incidents DURING or AFTER they occur. They don't prevent attacks but ensure you know about them.
ExampleWhat It DetectsIDS (Intrusion Detection System)Suspicious network activitySecurity camerasUnauthorized physical presenceLog monitoringAnomalous system behaviorAudit trailsUnauthorized access or changesMotion sensorsMovement in restricted areasHoneypotsAttackers probing fake systems
Detective controls are your alarm system. The burglar might get in, but you know immediately—enabling response before maximum damage.
Corrective Controls
Corrective controls fix problems AFTER incidents occur. They restore normal operations and repair damage.
ExampleWhat It CorrectsBackups/restoreRecovers data after lossPatch managementFixes vulnerabilities after discoveryIncident responseContains and remediates breachesAntivirus quarantineIsolates and removes detected malwareSystem rebuildRestores compromised systemsDisaster recoveryRestores operations after major incidents
Corrective controls are your recovery mechanism. When prevention fails and detection alerts you, correction gets you back to normal.
Deterrent Controls
Deterrent controls discourage attacks by making them seem risky or not worthwhile. They work psychologically—convincing potential attackers to look elsewhere.
ExampleHow It DetersWarning signs"Premises under video surveillance"Visible security camerasAttackers know they'll be recordedLogin banners"Unauthorized access is prosecuted"Security guardsPhysical presence discourages crimeLightingWell-lit areas feel riskier for criminalsFencingSignals protected property
Deterrent controls don't physically stop anything—they influence decisions. A warning sign doesn't stop a determined attacker, but it might convince an opportunistic one to target someone else.
Compensating Controls
Compensating controls provide alternative protection when primary controls aren't feasible. They're substitutes that achieve similar security goals through different means.
Scenario: Policy requires smart card authentication for all systems. Legacy application can't support smart cards (technical limitation).
Compensating control: Implement extra-strong password requirements plus mandatory VPN access plus enhanced logging for that specific application. Not identical to smart cards, but provides comparable security through combined alternative measures.
SituationPrimary ControlCompensating ControlCan't patch legacy systemPatchesNetwork segmentation + enhanced monitoringCan't implement MFAMulti-factor authenticationLonger passwords + account lockout + behavior monitoringNo budget for IDSIntrusion DetectionEnhanced logging + manual log review
Compensating controls acknowledge reality: perfect security isn't always possible. When primary controls are infeasible, compensating controls provide acceptable alternatives.
Directive Controls
Directive controls specify required actions—they tell people what they must or must not do.
ExampleWhat It DirectsAcceptable Use PolicyDefines proper system usageSecurity proceduresSpecifies how tasks must be performedWarning bannersStates prohibited activities and consequencesCompliance requirementsMandates specific security measuresJob descriptionsDefines security responsibilities
Directive controls are instructions. They don't prevent, detect, or correct anything directly—they establish expectations that guide behavior and enable other controls.
Control Types Working Together
Effective security layers multiple control types:
Physical building security example:

Directive: Policy stating "all visitors must be escorted"
Deterrent: Signs warning of prosecution for trespassing
Preventive: Locked doors requiring badge access
Detective: Security cameras recording entrances
Corrective: Procedure to revoke compromised badges
Compensating: Security guard at entrance if badge system fails

No single control type is sufficient. Defense in depth combines multiple types so failure of one doesn't mean complete compromise.
💡 Memory Trick: For control types, remember "P-D-C-D-C-D": Preventive (stop before), Detective (find during/after), Corrective (fix after), Deterrent (discourage), Compensating (alternative), Directive (instruct).

Key Exam Tips
🎯 CIA Triad is foundational - Nearly every security concept connects back to protecting confidentiality, integrity, or availability. When confused about why a control exists, ask which CIA element it protects.
🎯 Know the differences between control categories - Technical (technology), Managerial (policies), Operational (people/procedures), Physical (tangible barriers). Exam questions present scenarios and ask which category applies.
🎯 Control types vs. categories are different - Categories describe WHO/WHAT implements controls. Types describe WHAT PURPOSE they serve. A firewall is technical (category) and preventive (type). Security cameras are physical (category) and detective (type).
🎯 Compensating controls require justification - They're not first choice—they're alternatives when primary controls can't be implemented. Expect scenario questions where you identify appropriate compensating controls.
🎯 AAA sequence matters - Authentication (who are you) THEN authorization (what can you do) THEN accounting (what did you do). Questions test whether you understand this order.
🎯 Non-repudiation requires proof - Digital signatures and comprehensive audit logs are primary mechanisms. Someone "saying they didn't do it" isn't a non-repudiation failure if you have digital proof they did.

Key Takeaways

 The CIA Triad (Confidentiality, Integrity, Availability) is the foundation of all security decisions
 Confidentiality ensures information is accessible only to authorized parties
 Integrity ensures information hasn't been modified by unauthorized parties
 Availability ensures authorized users can access information when needed
 CIA elements often conflict, requiring balanced tradeoffs based on organizational priorities
 Non-repudiation prevents denying actions (primarily through digital signatures and audit logs)
 AAA framework: Authentication (verify identity) → Authorization (determine permissions) → Accounting (log actions)
 Control categories: Technical (technology), Managerial (policies), Operational (procedures), Physical (tangible)
 Control types: Preventive (stop before), Detective (find during/after), Corrective (fix after)
 Deterrent controls discourage attacks psychologically without physically preventing them
 Compensating controls are alternatives when primary controls aren't feasible
 Directive controls specify required actions and expectations
 Effective security layers multiple control categories and types (defense in depth)


Check Your Understanding
1. A hospital implements encryption for patient records stored in databases. Which CIA Triad element does this primarily protect?
<details>
<summary>Show Answer</summary>
<strong>Confidentiality.</strong> Encryption protects confidentiality by ensuring data is unreadable to unauthorized parties. Even if attackers access the database, encrypted records appear as meaningless scrambled data without the decryption key. While encryption can support integrity (encrypted data can't be meaningfully modified without detection), the primary purpose of encrypting stored data is keeping it confidential from unauthorized viewers.
</details>
2. A financial institution requires digital signatures on all wire transfer authorizations. Which security concept does this primarily support?
<details>
<summary>Show Answer</summary>
<strong>Non-repudiation.</strong> Digital signatures prove who authorized the transfer using their unique private key. The authorizer cannot later claim "I didn't approve that transfer" because only they possess the private key that created the signature. Digital signatures also support integrity (proving the request wasn't modified), but the primary purpose in wire transfer authorization is ensuring the authorizer cannot deny their action.
</details>
3. An organization's security policy requires employees to complete annual security awareness training. What category and type of control is this?
<details>
<summary>Show Answer</summary>
<strong>Managerial (category) and Preventive (type).</strong> The policy is managerial because it's an administrative directive—a rule governing organizational behavior rather than a technical implementation. It's preventive because training aims to stop security incidents before they occur by reducing employee susceptibility to social engineering, phishing, and other attacks. Trained employees are less likely to click malicious links or reveal sensitive information.
</details>
4. A company installs security cameras throughout their data center. What category and type of control are the cameras?
<details>
<summary>Show Answer</summary>
<strong>Physical (category) and primarily Detective (type), with Deterrent as secondary.</strong> Cameras are physical controls—they protect the tangible environment through hardware installation. They're detective because their primary function is recording activity for review (detecting who entered, when, and what they did). They're also deterrent because visible cameras discourage would-be attackers who know they'll be recorded. Note: cameras don't prevent entry (preventive) or fix problems (corrective)—they record evidence and discourage attempts.
</details>
5. A legacy system cannot support multi-factor authentication due to technical limitations. The organization implements extra-long passwords, automatic account lockout after three failed attempts, and enhanced monitoring for that system. What type of control is this combination?
<details>
<summary>Show Answer</summary>
<strong>Compensating control.</strong> These measures compensate for the inability to implement the primary control (MFA). The organization acknowledges MFA isn't feasible for this system, so they implement alternative measures providing comparable security through different means. Compensating controls are substitutes when primary controls aren't possible due to technical, budget, or operational constraints. The combined alternative measures (stronger passwords + lockout + monitoring) achieve similar security goals to MFA.
</details>
6. A user enters their username and password, then receives an access denied message when trying to open a confidential financial report. Which AAA component denied access?
<details>
<summary>Show Answer</summary>
<strong>Authorization.</strong> The user successfully authenticated (the system accepted their username and password, confirming identity). However, authorization determined they lack permission to access that specific resource. Authentication answers "who are you?" (confirmed). Authorization answers "what can you do?" (denied for this resource). If authentication had failed, the user would have been rejected at login, not after trying to access a specific file.
</details>
7. An organization implements a policy stating "All USB storage devices are prohibited on company computers." What type of control is this policy?
<details>
<summary>Show Answer</summary>
<strong>Directive control.</strong> The policy specifies required behavior—telling employees what they must not do. Directive controls establish expectations and rules. This policy alone doesn't prevent USB usage (technical controls like USB port blocking would be preventive), doesn't detect USB usage (monitoring software would be detective), and doesn't discourage USB usage through warnings (that would be deterrent). It simply states the requirement. Effective implementation would combine this directive with technical controls to enforce it.
</details>
8. During a ransomware attack, an organization restores encrypted files from yesterday's backup. What type of control is the backup/restore process?
<details>
<summary>Show Answer</summary>
<strong>Corrective control.</strong> Backups and restoration processes fix problems after incidents occur. They don't prevent ransomware (preventive), don't detect the attack (detective), or discourage attackers (deterrent). They correct the damage by restoring systems to pre-incident state. Corrective controls are reactive—they restore normal operations after security incidents have already caused damage. Backups are essential corrective controls because they enable recovery from many incident types (ransomware, hardware failure, accidental deletion, etc.).
</details>

Next Lesson Preview
In Lesson 2: Threat Actors and Motivations, we'll explore WHO attacks organizations and WHY. You'll learn to distinguish between nation-state actors launching sophisticated cyber espionage, financially-motivated organized crime syndicates, hacktivists pushing political agendas, and the often-overlooked insider threat sitting three desks away. Understanding attacker motivations helps predict their methods and prioritize defenses accordingly. We'll also examine attack vectors—the paths attackers use to reach their targets—from phishing emails to compromised supply chains.