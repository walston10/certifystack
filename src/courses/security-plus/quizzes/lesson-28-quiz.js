export const lesson28Quiz = [
  {
    id: 1,
    question: "An organization classifies data into categories: Public, Internal, Confidential, and Restricted. Each category has different handling requirements. What is this practice called?",
    options: [
      "Random labeling",
      "Data classification - categorizing data by sensitivity for appropriate protection",
      "Data deletion",
      "Encryption only"
    ],
    correct: 1,
    explanation: "DATA CLASSIFICATION categorizes data by sensitivity level to apply appropriate protection controls. Common classification levels: (1) PUBLIC - freely shareable, (2) INTERNAL - not for public, limited harm if disclosed, (3) CONFIDENTIAL - business sensitive, competitive harm, (4) RESTRICTED/SECRET - highest sensitivity, severe harm. Classification determines: (1) Encryption requirements, (2) Access controls, (3) Storage locations, (4) Transmission methods, (5) Retention periods, (6) Disposal methods. Classification process: (1) Define categories, (2) Establish criteria, (3) Assign data owners, (4) Label data, (5) Apply controls. Why classification matters: (1) Can't protect everything equally, (2) Focus resources on sensitive data, (3) Compliance requirements, (4) User awareness of handling. Without classification: either over-protect everything (expensive) or under-protect sensitive data (risky)."
  },
  {
    id: 2,
    question: "Credit card numbers in a database are replaced with random tokens that have no mathematical relationship to the original numbers. The real numbers are stored separately in a secure vault. What technique is this?",
    options: [
      "Encryption",
      "Tokenization - replacing sensitive data with non-sensitive placeholders",
      "Hashing",
      "Masking"
    ],
    correct: 1,
    explanation: "TOKENIZATION replaces sensitive data with non-sensitive tokens, storing the mapping separately. Tokenization vs Encryption: (1) TOKENIZATION - no mathematical relationship, token has no value if stolen, (2) ENCRYPTION - mathematically reversible with key, ciphertext has value if key compromised. Tokenization benefits: (1) Reduces scope (systems with tokens don't have sensitive data), (2) PCI DSS scope reduction (tokens aren't cardholder data), (3) Even if stolen, tokens useless, (4) Original data in one secure location. Use cases: (1) Payment card numbers, (2) Social Security numbers, (3) Account numbers. How it works: (1) Send sensitive data to token vault, (2) Vault generates random token, (3) Token used in applications, (4) Original retrieved from vault when needed. Tokenization is especially valuable for PCI compliance - systems that only see tokens are out of scope."
  },
  {
    id: 3,
    question: "A customer service system shows only the last 4 digits of credit card numbers (****-****-****-1234) to representatives. What technique is protecting the full number?",
    options: [
      "Encryption",
      "Data masking - hiding portions of sensitive data while preserving format",
      "Tokenization",
      "Deletion"
    ],
    correct: 1,
    explanation: "DATA MASKING hides portions of sensitive data while preserving format and partial utility. Masking techniques: (1) Partial masking - show some characters (***-**-1234), (2) Full masking - all hidden (****************), (3) Character substitution, (4) Data shuffling. Masking vs Encryption: (1) MASKING - irreversible, original data not recoverable from mask, (2) ENCRYPTION - reversible with key. Use cases: (1) Customer service displays, (2) Test/development environments, (3) Reports and exports, (4) Receipts. This example: last 4 digits allow identification/verification without full number exposure. Static vs Dynamic masking: (1) Static - permanently mask data (for test environments), (2) Dynamic - mask at query time (production). Masking enables: using data without exposing sensitive portions."
  },
  {
    id: 4,
    question: "A research dataset has all directly identifying information removed (names, SSN) but retains indirect identifiers (age, zip code, diagnosis) that could potentially be combined to identify individuals. What privacy risk remains?",
    options: [
      "No risk",
      "Re-identification risk - combining quasi-identifiers to identify individuals",
      "Encryption failure",
      "Data loss"
    ],
    correct: 1,
    explanation: "RE-IDENTIFICATION RISK exists when quasi-identifiers can be combined to identify individuals in 'anonymous' data. Identifier types: (1) DIRECT - uniquely identifies (name, SSN), (2) QUASI-IDENTIFIERS - not unique alone but combinable (age, zip, gender), (3) SENSITIVE - what we're protecting (diagnosis, salary). Famous example: Netflix prize dataset - 'anonymous' movie ratings combined with public IMDB reviews identified individuals. Re-identification techniques: (1) Linking datasets, (2) Combining quasi-identifiers, (3) Statistical inference. Protection methods: (1) K-anonymity - at least k people share each combination, (2) L-diversity - diversity in sensitive values, (3) Differential privacy - mathematical guarantees, (4) Generalization - less specific values (age range vs exact). Simply removing names isn't enough - proper anonymization requires statistical protection against re-identification."
  },
  {
    id: 5,
    question: "An organization monitors all data leaving their network and blocks emails containing credit card numbers or Social Security numbers. What technology provides this capability?",
    options: [
      "Firewall",
      "DLP (Data Loss Prevention) - monitoring and blocking sensitive data exfiltration",
      "Antivirus",
      "IDS"
    ],
    correct: 1,
    explanation: "DLP (Data Loss Prevention) monitors, detects, and blocks sensitive data from leaving the organization. DLP deployment points: (1) NETWORK - monitor email, web uploads, (2) ENDPOINT - monitor USB, printing, file transfers, (3) CLOUD - monitor cloud storage and applications. DLP detection methods: (1) Pattern matching (regex for SSN, CC#), (2) Keyword matching, (3) Document fingerprinting, (4) Machine learning classification. DLP actions: (1) Monitor and log, (2) Alert/notify, (3) Quarantine for review, (4) Block transmission. Use cases: (1) Prevent data exfiltration, (2) Compliance (PCI, HIPAA, GDPR), (3) IP protection, (4) Insider threat. DLP challenges: (1) False positives disrupting business, (2) Encrypted data bypass, (3) Image-based data harder to detect, (4) Tuning required. DLP is last line of defense against data leaving organization."
  },
  {
    id: 6,
    question: "GDPR requires that organizations processing EU residents' personal data must be able to demonstrate compliance and maintain records of processing activities. What principle is this?",
    options: [
      "Data minimization",
      "Accountability - organizations must demonstrate compliance with privacy requirements",
      "Purpose limitation",
      "Storage limitation"
    ],
    correct: 1,
    explanation: "ACCOUNTABILITY requires organizations to demonstrate compliance with privacy principles, not just comply. GDPR accountability requirements: (1) Maintain records of processing activities, (2) Implement appropriate technical measures, (3) Conduct Data Protection Impact Assessments, (4) Appoint DPO if required, (5) Cooperate with supervisory authorities. Accountability evidence: (1) Documented policies and procedures, (2) Training records, (3) Processing records, (4) Consent records, (5) DPIA documentation, (6) Security measures documentation. Other GDPR principles: (1) Lawfulness, fairness, transparency, (2) Purpose limitation, (3) Data minimization, (4) Accuracy, (5) Storage limitation, (6) Integrity and confidentiality. Accountability shifts burden: organization must prove compliance, not just claim it. This differs from US approach where regulators often must prove violations."
  },
  {
    id: 7,
    question: "A company collects only the minimum customer information necessary to complete a transaction, avoiding collecting 'nice to have' data. What privacy principle is being followed?",
    options: [
      "Data maximization",
      "Data minimization - collecting only necessary data",
      "Purpose limitation",
      "Storage limitation"
    ],
    correct: 1,
    explanation: "DATA MINIMIZATION limits collection to only what's necessary for the specified purpose. Data minimization principle: (1) Collect only needed data, (2) Don't collect 'just in case,' (3) Adequate, relevant, limited to necessary, (4) Less data = less risk. Benefits: (1) Reduced breach impact - can't lose what you don't have, (2) Lower compliance burden, (3) Reduced storage costs, (4) Better privacy posture. Implementation: (1) Review what's actually needed, (2) Question 'required' fields, (3) Remove unnecessary collection, (4) Regular data inventory audits. Example: online store needs shipping address but not birth date for delivering products. GDPR requires minimization; other regulations encourage it. Privacy by Design: build minimization into system design, not as afterthought."
  },
  {
    id: 8,
    question: "After a customer requests deletion of their personal data, the organization must remove it from all systems including backups within a reasonable timeframe. What GDPR right is this?",
    options: [
      "Right to access",
      "Right to erasure/Right to be forgotten - request deletion of personal data",
      "Right to portability",
      "Right to rectification"
    ],
    correct: 1,
    explanation: "RIGHT TO ERASURE (Right to be Forgotten) allows individuals to request deletion of their personal data. When erasure applies: (1) Data no longer necessary for original purpose, (2) Consent withdrawn, (3) Individual objects to processing, (4) Data unlawfully processed, (5) Legal obligation to erase. Exceptions: (1) Legal obligation to retain, (2) Public health purposes, (3) Archiving in public interest, (4) Legal claims. Implementation challenges: (1) Finding all instances of data, (2) Backup systems, (3) Third parties who received data, (4) Technical feasibility. Other GDPR rights: (1) Access - see what data is held, (2) Rectification - correct inaccuracies, (3) Portability - receive data in portable format, (4) Objection - object to processing. Organizations must have processes to handle these requests within required timeframes (typically 30 days)."
  },
  {
    id: 9,
    question: "An organization establishes that marketing data is retained for 2 years, transaction records for 7 years (legal requirement), and support tickets for 1 year after resolution. What is this?",
    options: [
      "Random deletion",
      "Data retention policy - defining how long different data types are kept",
      "Unlimited storage",
      "Encryption policy"
    ],
    correct: 1,
    explanation: "DATA RETENTION POLICY defines how long different data types are kept before deletion. Retention considerations: (1) LEGAL REQUIREMENTS - tax records, financial regulations, (2) BUSINESS NEEDS - operational necessity, (3) PRIVACY REGULATIONS - don't keep longer than necessary, (4) LITIGATION - legal hold requirements. Policy elements: (1) Data categories, (2) Retention periods, (3) Triggers (from creation, from last activity), (4) Deletion procedures, (5) Exception process. Conflicting requirements: (1) Legal requires 7 years retention, (2) Privacy says minimize - keep legal minimum. Retention schedule examples: (1) Financial records - 7 years, (2) Employee records - duration + 7 years, (3) Marketing data - 2 years, (4) System logs - 90 days. Enforcement: automated deletion, regular audits, storage limitations. Without retention policy: data kept forever, increasing breach risk and storage costs."
  },
  {
    id: 10,
    question: "Before deploying a new facial recognition system in stores, a company evaluates privacy risks, potential impact on individuals, and necessary safeguards. What assessment is this?",
    options: [
      "Vulnerability assessment",
      "Privacy Impact Assessment (PIA)/Data Protection Impact Assessment (DPIA)",
      "Penetration test",
      "Compliance audit"
    ],
    correct: 1,
    explanation: "PRIVACY IMPACT ASSESSMENT (PIA) / DPIA evaluates privacy risks of new systems or processing activities. Assessment covers: (1) What personal data is processed, (2) Purpose and necessity, (3) Risks to individuals, (4) Safeguards to mitigate risks, (5) Compliance with principles. DPIA required by GDPR when: (1) High risk processing, (2) Systematic monitoring, (3) Large-scale processing of sensitive data, (4) New technologies. PIA process: (1) Describe processing, (2) Assess necessity and proportionality, (3) Identify risks, (4) Identify mitigations, (5) Document and review. Facial recognition example risks: (1) Surveillance concerns, (2) Accuracy issues, (3) Consent challenges, (4) Data security, (5) Secondary uses. PIA/DPIA demonstrates privacy by design - considering privacy before implementation, not after problems arise."
  },
  {
    id: 11,
    question: "A healthcare organization must protect patient data under HIPAA, which specifies technical safeguards, administrative safeguards, and physical safeguards. What type of regulation is HIPAA?",
    options: [
      "General privacy law",
      "Sector-specific regulation - applies to specific industry (healthcare)",
      "International law",
      "Voluntary standard"
    ],
    correct: 1,
    explanation: "HIPAA is SECTOR-SPECIFIC regulation applying specifically to healthcare and entities handling protected health information (PHI). HIPAA applies to: (1) Covered entities - healthcare providers, health plans, clearinghouses, (2) Business associates - vendors handling PHI. HIPAA Security Rule requires: (1) ADMINISTRATIVE - policies, training, risk assessment, (2) PHYSICAL - facility access, workstation security, (3) TECHNICAL - access controls, encryption, audit logs. Other sector-specific regulations: (1) GLBA - financial services, (2) FERPA - education records, (3) COPPA - children's online privacy. Sector vs General regulation: (1) Sector - specific requirements for industry, (2) General (like GDPR) - applies across industries. Healthcare organizations may need to comply with multiple regulations (HIPAA + state laws + GDPR for EU patients)."
  },
  {
    id: 12,
    question: "When transferring personal data from the EU to a country without adequate privacy protections, an organization uses Standard Contractual Clauses approved by the EU Commission. What does this address?",
    options: [
      "Encryption requirement",
      "Cross-border data transfer - legal mechanism for international data flows",
      "Backup requirement",
      "Access control"
    ],
    correct: 1,
    explanation: "CROSS-BORDER DATA TRANSFER mechanisms provide legal basis for moving personal data internationally. Transfer mechanisms under GDPR: (1) ADEQUACY DECISIONS - EU deems country's protections adequate, (2) STANDARD CONTRACTUAL CLAUSES (SCCs) - approved contract terms, (3) BINDING CORPORATE RULES - for multinational companies, (4) Specific derogations - consent, contract necessity. Why needed: GDPR restricts transfers to countries without adequate protection. Schrems II implications: (1) Invalidated Privacy Shield, (2) SCCs remain valid but require assessment, (3) Must evaluate destination country laws. Transfer risk assessment: (1) Destination country's surveillance laws, (2) Government access to data, (3) Supplementary measures needed. Organizations must: (1) Document transfers, (2) Use valid mechanism, (3) Assess adequacy, (4) Implement supplementary measures if needed."
  },
  {
    id: 13,
    question: "A company appoints an individual to oversee privacy compliance, serve as contact point for data subjects, and advise on data protection matters. What role is this?",
    options: [
      "CEO",
      "Data Protection Officer (DPO) - privacy oversight role",
      "CISO",
      "CFO"
    ],
    correct: 1,
    explanation: "DATA PROTECTION OFFICER (DPO) is responsible for overseeing privacy compliance within an organization. DPO responsibilities: (1) Inform and advise on obligations, (2) Monitor compliance, (3) Advise on DPIAs, (4) Cooperate with supervisory authority, (5) Contact point for data subjects. When DPO required (GDPR): (1) Public authority, (2) Large-scale systematic monitoring, (3) Large-scale processing of sensitive data. DPO requirements: (1) Expert knowledge of privacy law, (2) Independence - no instructions on tasks, (3) No conflict of interest, (4) Resources to perform duties, (5) Reports to highest management. DPO vs CISO: (1) DPO - privacy compliance focus, (2) CISO - security focus (may overlap). Some organizations combine roles, but must manage potential conflicts."
  },
  {
    id: 14,
    question: "A company experiences a data breach affecting personal data. Under GDPR, they must notify the supervisory authority within 72 hours if the breach is likely to result in risk to individuals. What requirement is this?",
    options: [
      "Optional notification",
      "Breach notification requirement - mandatory reporting of personal data breaches",
      "Annual reporting",
      "Voluntary disclosure"
    ],
    correct: 1,
    explanation: "BREACH NOTIFICATION requires reporting personal data breaches to authorities and affected individuals within specified timeframes. GDPR notification requirements: (1) AUTHORITY - within 72 hours if risk to individuals, (2) INDIVIDUALS - without undue delay if high risk. Notification content: (1) Nature of breach, (2) Data and individuals affected, (3) Likely consequences, (4) Measures taken/proposed. When notification NOT required: (1) Unlikely to result in risk (encrypted data with key secure), (2) Subsequent measures eliminated risk. Other notification laws: (1) US state laws (varying requirements), (2) HIPAA (60 days for healthcare), (3) Industry regulations. Breach response process: (1) Detect and contain, (2) Assess risk, (3) Determine notification requirements, (4) Notify within timeframe, (5) Document. Failure to notify can result in significant fines."
  },
  {
    id: 15,
    question: "An organization builds privacy protections into systems from the beginning rather than adding them later. Features include privacy defaults, data minimization by design, and built-in security. What approach is this?",
    options: [
      "Privacy as afterthought",
      "Privacy by Design - embedding privacy into system design from inception",
      "Compliance checkbox",
      "Reactive privacy"
    ],
    correct: 1,
    explanation: "PRIVACY BY DESIGN embeds privacy protections into systems from the beginning of development. Privacy by Design principles: (1) Proactive not reactive, (2) Privacy as default, (3) Embedded into design, (4) Full functionality (privacy and function), (5) End-to-end security, (6) Visibility and transparency, (7) User-centric. Implementation examples: (1) Data minimization in requirements, (2) Privacy defaults (opt-in vs opt-out), (3) Encryption by design, (4) Access controls from start, (5) Retention built into architecture. GDPR requires Privacy by Design ('data protection by design and by default'). Benefits: (1) Easier compliance, (2) Lower retrofit costs, (3) Better user trust, (4) Reduced breach risk. Anti-pattern: building system, then trying to add privacy - expensive, often ineffective. Privacy by Design is shift from compliance focus to engineering principle."
  }
];