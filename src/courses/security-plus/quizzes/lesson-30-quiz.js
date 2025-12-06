export const lesson30Quiz = [
  {
    id: 1,
    question: "An organization creates a document stating that all employees must use strong passwords of at least 12 characters with complexity requirements. What type of governance document is this?",
    options: [
      "Guideline - optional recommendations",
      "Policy - high-level mandatory requirement",
      "Procedure - step-by-step instructions",
      "Standard - specific technical requirement"
    ],
    correct: 3,
    explanation: "STANDARD specifies mandatory technical requirements that support policies. Governance document hierarchy: (1) POLICY - high-level statement of intent ('passwords must be strong'), (2) STANDARD - specific requirements ('12 characters, complexity required'), (3) PROCEDURE - step-by-step how-to ('how to change password'), (4) GUIDELINE - optional recommendations ('consider using passphrase'). Standards are: (1) Mandatory, (2) Specific and measurable, (3) Support policy objectives, (4) Auditable. This example specifies exact requirements (12 characters, complexity) making it a standard. Policy would say 'strong passwords required' without specifics. Understanding document types: policies provide direction, standards specify requirements, procedures explain implementation."
  },
  {
    id: 2,
    question: "A company requires all employees to complete annual security awareness training covering phishing, password security, and data handling. What is the primary purpose of this program?",
    options: [
      "Compliance checkbox only",
      "Reducing human risk - employees as security control through awareness",
      "Technical training",
      "Performance evaluation"
    ],
    correct: 1,
    explanation: "SECURITY AWARENESS TRAINING reduces human risk by making employees an active security control. Training purposes: (1) Recognize threats (phishing, social engineering), (2) Understand policies and requirements, (3) Know how to report incidents, (4) Build security culture. Effective training: (1) Regular (annual + ongoing), (2) Relevant to job roles, (3) Engaging (not just slides), (4) Measured for effectiveness. Training topics: (1) Phishing recognition, (2) Password security, (3) Data handling, (4) Physical security, (5) Incident reporting. Measuring effectiveness: (1) Phishing simulation results, (2) Quiz scores, (3) Incident reports, (4) Behavior observation. Why critical: humans are often weakest link - training addresses this. Compliance requires training, but goal is actual behavior change."
  },
  {
    id: 3,
    question: "Before making changes to production systems, an organization requires documented requests, impact assessment, approval, and rollback plans. What governance process is this?",
    options: [
      "Incident response",
      "Change management - controlled process for system modifications",
      "Risk assessment",
      "Vulnerability management"
    ],
    correct: 1,
    explanation: "CHANGE MANAGEMENT provides controlled process for making system modifications. Change management elements: (1) REQUEST - documented change proposal, (2) ASSESSMENT - impact and risk analysis, (3) APPROVAL - appropriate authorization, (4) IMPLEMENTATION - scheduled execution, (5) VERIFICATION - confirm success, (6) DOCUMENTATION - record what was done. Why change management: (1) Prevent unauthorized changes, (2) Reduce outages from poor changes, (3) Maintain security posture, (4) Enable rollback if needed, (5) Audit trail. Change types: (1) Standard - pre-approved, low risk, (2) Normal - requires approval process, (3) Emergency - expedited for urgent issues. CAB (Change Advisory Board): reviews and approves significant changes. Many security incidents caused by changes - change management prevents this."
  },
  {
    id: 4,
    question: "An organization maintains documented Acceptable Use, Information Security, Incident Response, and Data Classification policies. What do these collectively form?",
    options: [
      "Technical configuration",
      "Security policy framework - comprehensive governance documentation",
      "Single policy",
      "Procedure manual"
    ],
    correct: 1,
    explanation: "SECURITY POLICY FRAMEWORK is the comprehensive set of governance documents guiding security. Common security policies: (1) ACCEPTABLE USE - what users can/cannot do, (2) INFORMATION SECURITY - overall security approach, (3) INCIDENT RESPONSE - how to handle incidents, (4) DATA CLASSIFICATION - how to categorize data, (5) ACCESS CONTROL - who gets access to what, (6) REMOTE ACCESS - working remotely, (7) BYOD - personal devices. Policy characteristics: (1) Approved by leadership, (2) Communicated to all, (3) Regularly reviewed, (4) Enforceable. Policy framework provides: (1) Clear expectations, (2) Consistent standards, (3) Basis for enforcement, (4) Compliance evidence. Policies without enforcement are ineffective - must have consequences for violations."
  },
  {
    id: 5,
    question: "A healthcare organization must comply with HIPAA requirements for protecting patient data, including implementing specific security controls and breach notification. What type of requirement is HIPAA?",
    options: [
      "Voluntary standard",
      "Regulatory compliance - legally mandated requirements",
      "Industry best practice",
      "Internal policy"
    ],
    correct: 1,
    explanation: "REGULATORY COMPLIANCE involves legally mandated requirements with penalties for non-compliance. HIPAA requirements: (1) Security Rule - technical, administrative, physical safeguards, (2) Privacy Rule - data use and disclosure, (3) Breach Notification - reporting requirements. Regulatory vs Voluntary: (1) REGULATORY - legal requirement, penalties (HIPAA, GDPR, SOX), (2) VOLUNTARY - optional standards (ISO 27001, NIST CSF). Regulatory examples by sector: (1) Healthcare - HIPAA, (2) Financial - GLBA, SOX, PCI DSS, (3) Education - FERPA, (4) General - GDPR (EU), state privacy laws. Compliance requirements: (1) Implement required controls, (2) Document compliance, (3) Regular assessments, (4) Report as required. Non-compliance consequences: fines, legal action, loss of ability to operate."
  },
  {
    id: 6,
    question: "An organization hires an external auditor to evaluate their security controls and provide a SOC 2 Type II attestation report. What is the purpose of this third-party assessment?",
    options: [
      "Internal use only",
      "Independent verification - objective third-party validation of security controls",
      "Technical testing",
      "Policy development"
    ],
    correct: 1,
    explanation: "INDEPENDENT VERIFICATION provides objective third-party validation that security controls are effective. Third-party audit benefits: (1) Objectivity - no internal bias, (2) Credibility - trusted by customers/partners, (3) Expertise - specialized knowledge, (4) Fresh perspective - finds issues internal teams miss. SOC 2 Type II: (1) Independent auditor, (2) Tests control effectiveness over time, (3) Provides attestation report, (4) Customers rely on for assurance. When external audit needed: (1) Customer/partner requirements, (2) Regulatory requirements, (3) Compliance certification, (4) M&A due diligence. Internal vs External: (1) Internal - ongoing monitoring, more frequent, (2) External - periodic validation, higher credibility. External audits demonstrate security to stakeholders who can't assess themselves."
  },
  {
    id: 7,
    question: "A vendor contract includes requirements for security controls, breach notification obligations, data handling restrictions, and audit rights. What contract element addresses third-party security?",
    options: [
      "Payment terms",
      "Security and privacy requirements - contractual obligations for vendor security",
      "Delivery schedule",
      "Warranty terms"
    ],
    correct: 1,
    explanation: "SECURITY AND PRIVACY REQUIREMENTS in contracts establish vendor obligations for protecting data. Contract security elements: (1) Security control requirements, (2) Compliance obligations (PCI, HIPAA), (3) Breach notification terms, (4) Data handling restrictions, (5) Audit/assessment rights, (6) Subcontractor requirements, (7) Termination and data return. Why contractual requirements: (1) Extend security to third parties, (2) Define expectations clearly, (3) Enable enforcement, (4) Regulatory compliance (GDPR requires). Common contract terms: (1) NDA - confidentiality, (2) DPA - data processing agreement (GDPR), (3) BAA - business associate agreement (HIPAA), (4) SLA - service levels. Contract alone insufficient: must verify vendor actually complies through assessments."
  },
  {
    id: 8,
    question: "An organization's board of directors reviews cybersecurity reports quarterly, approves the security budget, and sets risk appetite. What governance role does the board play?",
    options: [
      "Technical implementation",
      "Oversight and accountability - governance responsibility for security program",
      "Day-to-day operations",
      "Incident response"
    ],
    correct: 1,
    explanation: "BOARD OVERSIGHT provides governance accountability for the organization's security program. Board responsibilities: (1) Set risk appetite, (2) Approve security strategy, (3) Ensure adequate resources, (4) Monitor program effectiveness, (5) Hold management accountable. Board receives: (1) Risk reports, (2) Incident summaries, (3) Compliance status, (4) Key metrics. Board does NOT: (1) Implement controls, (2) Manage day-to-day operations, (3) Respond to incidents, (4) Configure systems. Why board involvement matters: (1) Sets tone from top, (2) Ensures resources, (3) Demonstrates importance, (4) Regulatory expectations. Effective reporting to board: business terms, key metrics, trends, resource needs. Board oversight increasingly expected by regulators and stakeholders."
  },
  {
    id: 9,
    question: "An organization implements the NIST Cybersecurity Framework (CSF) to organize their security program around Identify, Protect, Detect, Respond, and Recover functions. What does this framework provide?",
    options: [
      "Legal requirements",
      "Structured approach - organizing security activities comprehensively",
      "Technical specifications",
      "Compliance certification"
    ],
    correct: 1,
    explanation: "NIST CSF provides structured approach for organizing comprehensive security programs. Five functions: (1) IDENTIFY - asset management, risk assessment, (2) PROTECT - access control, training, data security, (3) DETECT - monitoring, detection processes, (4) RESPOND - response planning, communications, (5) RECOVER - recovery planning, improvements. CSF benefits: (1) Common language, (2) Flexible - adaptable to any organization, (3) Risk-based approach, (4) Aligns with other standards. CSF is NOT: (1) Legal requirement (voluntary), (2) Certification (no NIST CSF certification), (3) Prescriptive checklist. Implementation tiers: (1) Partial, (2) Risk Informed, (3) Repeatable, (4) Adaptive. CSF widely adopted: government, critical infrastructure, private sector. Framework enables: gap analysis, program organization, communication with stakeholders."
  },
  {
    id: 10,
    question: "Before granting a vendor access to sensitive data, an organization reviews their security questionnaire, SOC 2 report, and conducts a risk assessment. What process is this?",
    options: [
      "Technical configuration",
      "Vendor risk management - assessing and managing third-party security risks",
      "Incident response",
      "Change management"
    ],
    correct: 1,
    explanation: "VENDOR RISK MANAGEMENT assesses and manages security risks from third-party relationships. Assessment methods: (1) Security questionnaires (SIG, CAIQ), (2) SOC 2/audit reports, (3) Penetration test results, (4) On-site assessments, (5) Continuous monitoring. Risk factors: (1) Data access level, (2) System connectivity, (3) Criticality to operations, (4) Regulatory implications. Vendor management lifecycle: (1) Due diligence before engagement, (2) Contractual requirements, (3) Ongoing monitoring, (4) Periodic reassessment, (5) Termination procedures. Why critical: (1) Vendors access your data, (2) Supply chain attacks increasing, (3) Regulatory requirements (GDPR), (4) Your risk, your responsibility. Assessment depth by risk: high-risk vendors get thorough assessment; low-risk get basic due diligence."
  },
  {
    id: 11,
    question: "An organization must notify affected individuals within 72 hours of discovering a breach involving personal data. Which regulation likely imposes this requirement?",
    options: [
      "Internal policy",
      "GDPR - EU data protection regulation with 72-hour notification requirement",
      "Voluntary standard",
      "Industry guideline"
    ],
    correct: 1,
    explanation: "GDPR requires breach notification to supervisory authority within 72 hours when personal data is affected. GDPR breach notification: (1) To authority - 72 hours if risk to individuals, (2) To individuals - without undue delay if high risk. Notification content: (1) Nature of breach, (2) Categories and number affected, (3) Likely consequences, (4) Measures taken. Other notification requirements: (1) US state laws - varying timeframes, (2) HIPAA - 60 days, (3) PCI DSS - immediately to payment brands. Why 72 hours challenging: (1) Must investigate quickly, (2) May not have full picture, (3) Pressure to notify before complete understanding. Best practice: (1) Incident response plan ready, (2) Notification templates prepared, (3) Legal counsel involved, (4) Don't wait for perfection."
  },
  {
    id: 12,
    question: "A financial services company must comply with SOX (Sarbanes-Oxley) requirements for internal controls over financial reporting, including IT controls that affect financial data. What does this represent?",
    options: [
      "Voluntary adoption",
      "Regulatory compliance - legal requirements for public companies",
      "Industry best practice",
      "Internal standard"
    ],
    correct: 1,
    explanation: "SOX (Sarbanes-Oxley) imposes legal requirements for internal controls on publicly traded US companies. SOX IT implications: (1) Controls over financial reporting systems, (2) Access controls to financial data, (3) Change management for financial systems, (4) Audit trails and logging, (5) Segregation of duties. SOX requirements: (1) Section 302 - management certification, (2) Section 404 - internal control assessment, (3) External audit of controls. IT controls for SOX: (1) Logical access controls, (2) Change management, (3) Computer operations, (4) Program development. Non-compliance consequences: (1) Criminal penalties for executives, (2) Fines, (3) Stock exchange delisting. SOX drove significant IT control improvements at public companies since 2002."
  },
  {
    id: 13,
    question: "An organization separates duties so that the person who requests user access is different from the person who approves it, and different from the person who provisions it. What principle is being applied?",
    options: [
      "Least privilege",
      "Separation of duties - dividing tasks to prevent fraud and errors",
      "Need to know",
      "Defense in depth"
    ],
    correct: 1,
    explanation: "SEPARATION OF DUTIES divides critical tasks among multiple people to prevent fraud and errors. SoD principle: no single person should control all aspects of a critical process. SoD examples: (1) Access request → approval → provisioning (different people), (2) Code development → testing → deployment, (3) Financial transaction → approval → recording. Why SoD important: (1) Prevents single person fraud, (2) Catches errors through review, (3) Creates accountability, (4) Compliance requirement (SOX, PCI). SoD in IT: (1) Developers can't deploy to production, (2) Admins can't approve their own access, (3) Different teams for security and operations. Challenges: (1) Small organizations have limited staff, (2) Emergency procedures may require override, (3) Must balance with efficiency. Compensating controls when full SoD not possible: enhanced logging, management review."
  },
  {
    id: 14,
    question: "An organization conducts annual reviews where managers verify that their employees still need their current access levels, removing unnecessary permissions. What process is this?",
    options: [
      "Incident response",
      "Access review/User access recertification - periodic verification of access rights",
      "Vulnerability assessment",
      "Penetration testing"
    ],
    correct: 1,
    explanation: "ACCESS REVIEW (Recertification) periodically verifies that users still need their current access. Review process: (1) Generate access reports, (2) Managers review their employees' access, (3) Confirm or revoke access, (4) Remove unnecessary permissions, (5) Document decisions. Why reviews needed: (1) Access accumulates over time, (2) Job roles change, (3) Least privilege enforcement, (4) Compliance requirements. Review frequency: (1) Privileged access - quarterly, (2) Sensitive systems - semi-annually, (3) General access - annually. Review challenges: (1) Manager rubber-stamping, (2) Volume of access to review, (3) Understanding what access means. Best practices: (1) Clear ownership, (2) Easy-to-understand reports, (3) Consequences for non-compliance, (4) Automation where possible. Access reviews are control against privilege creep."
  },
  {
    id: 15,
    question: "An organization documents all security policies, procedures, risk assessments, and audit findings to demonstrate their security program to regulators and auditors. What does this documentation support?",
    options: [
      "Technical implementation only",
      "Due diligence and compliance evidence - demonstrating security program exists and operates",
      "Marketing materials",
      "Internal use only"
    ],
    correct: 1,
    explanation: "DOCUMENTATION demonstrates due diligence and provides evidence of security program operation. Documentation purposes: (1) Prove controls exist, (2) Show controls operate, (3) Demonstrate due diligence, (4) Support audit/compliance, (5) Enable improvement. Key documentation: (1) Policies and procedures, (2) Risk assessments, (3) Audit reports, (4) Incident records, (5) Training records, (6) Access reviews, (7) Change records. Due diligence importance: (1) Legal defense if breach occurs, (2) Regulatory compliance, (3) Customer assurance, (4) Insurance claims. Documentation best practices: (1) Version control, (2) Regular updates, (3) Accessible to those who need it, (4) Protected from unauthorized changes. Undocumented security: (1) Hard to prove, (2) Hard to audit, (3) Hard to maintain consistency. If it's not documented, it didn't happen (from audit perspective)."
  }
];