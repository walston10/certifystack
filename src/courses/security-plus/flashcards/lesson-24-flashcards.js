// Lesson 24: Security Assessments
// Security+ (SY0-701) - Domain 4.0: Security Operations

export const lesson24Flashcards = [
  {
    id: 1,
    front: "What is a Security Assessment?",
    back: "Evaluation of an organization's security posture. Identifies weaknesses, compliance gaps, and risks. Includes vulnerability assessments, risk assessments, audits, and penetration tests."
  },
  {
    id: 2,
    front: "What is a Vulnerability Assessment?",
    back: "Identifies and quantifies security vulnerabilities in systems. Uses automated scanning and manual review. Prioritizes based on risk. Doesn't exploit vulnerabilities."
  },
  {
    id: 3,
    front: "What is a Threat Assessment?",
    back: "Identifies potential threats to organization. Evaluates threat actors, their capabilities, and likelihood of attack. Helps prioritize defenses based on realistic threats."
  },
  {
    id: 4,
    front: "What is a Risk Assessment?",
    back: "Identifies assets, threats, and vulnerabilities to evaluate risk. Combines likelihood and impact. Prioritizes risks for treatment. Foundation for security decisions."
  },
  {
    id: 5,
    front: "What is a Security Audit?",
    back: "Systematic evaluation of security controls against defined criteria. Verifies compliance with policies, standards, or regulations. Can be internal or external."
  },
  {
    id: 6,
    front: "What is an Internal Audit?",
    back: "Audit conducted by organization's own staff. Regular self-assessment. Identifies issues before external audits. May lack independence/objectivity."
  },
  {
    id: 7,
    front: "What is an External Audit?",
    back: "Audit conducted by independent third party. More objective and credible. Often required for compliance. Results may be shared with regulators or customers."
  },
  {
    id: 8,
    front: "What is a Third-party Audit?",
    back: "External audit by independent organization. Provides unbiased assessment. Required for many compliance certifications. Results trusted by external parties."
  },
  {
    id: 9,
    front: "Internal vs External Audit?",
    back: "Internal: own staff, ongoing, less formal, may lack objectivity. External: independent, periodic, formal, credible to outsiders. Both have value."
  },
  {
    id: 10,
    front: "What is a Compliance Assessment?",
    back: "Evaluating adherence to regulatory requirements, industry standards, or internal policies. Identifies gaps. May result in fines or penalties if non-compliant."
  },
  {
    id: 11,
    front: "What is Regulatory Compliance?",
    back: "Meeting requirements mandated by law or regulation. Non-negotiable. Examples: HIPAA, GDPR, SOX. Failure can result in fines, legal action."
  },
  {
    id: 12,
    front: "What is the NIST Cybersecurity Framework (CSF)?",
    back: "Voluntary framework for managing cybersecurity risk. Five functions: Identify, Protect, Detect, Respond, Recover. Widely adopted. Flexible for any organization."
  },
  {
    id: 13,
    front: "What are the five NIST CSF functions?",
    back: "Identify (assets, risks), Protect (safeguards), Detect (monitoring), Respond (incident handling), Recover (restoration). Comprehensive security lifecycle."
  },
  {
    id: 14,
    front: "What is NIST RMF (Risk Management Framework)?",
    back: "Framework for integrating security into system development. Steps: Categorize, Select, Implement, Assess, Authorize, Monitor. Required for federal systems."
  },
  {
    id: 15,
    front: "What is ISO 27001?",
    back: "International standard for Information Security Management Systems (ISMS). Certifiable standard. Requires documented policies, risk assessment, continuous improvement."
  },
  {
    id: 16,
    front: "What is ISO 27002?",
    back: "Companion to ISO 27001. Provides detailed security control guidance. Best practices for implementing ISMS controls. Not certifiable itself."
  },
  {
    id: 17,
    front: "ISO 27001 vs ISO 27002?",
    back: "27001: requirements for ISMS, certifiable. 27002: control guidance, best practices, not certifiable. Use 27002 to implement 27001 requirements."
  },
  {
    id: 18,
    front: "What are CIS Controls?",
    back: "Prioritized set of security best practices from Center for Internet Security. Numbered list of controls. Implementation Groups for different maturity levels. Practical and actionable."
  },
  {
    id: 19,
    front: "What is SOC 2?",
    back: "Service Organization Control audit for service providers. Evaluates Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, Privacy. Common for cloud vendors."
  },
  {
    id: 20,
    front: "What are the SOC 2 Trust Service Criteria?",
    back: "Security (required), Availability, Processing Integrity, Confidentiality, Privacy. Organizations choose which apply. Security always included."
  },
  {
    id: 21,
    front: "SOC 2 Type I vs Type II?",
    back: "Type I: controls designed appropriately at point in time. Type II: controls operating effectively over period (6-12 months). Type II more valuable."
  },
  {
    id: 22,
    front: "What is COBIT?",
    back: "Control Objectives for Information and Related Technologies. IT governance framework. Aligns IT with business goals. Used for IT management and governance."
  },
  {
    id: 23,
    front: "What is Attestation?",
    back: "Formal declaration that controls meet requirements. Third-party verification. Written statement of compliance. Provides assurance to external parties."
  },
  {
    id: 24,
    front: "What is a Gap Analysis?",
    back: "Comparing current state to desired state or requirements. Identifies what's missing. Creates remediation roadmap. Used for compliance preparation."
  },
  {
    id: 25,
    front: "How do you conduct a Gap Analysis?",
    back: "Define target state (framework/regulation), assess current controls, identify gaps between current and target, prioritize gaps, create remediation plan."
  },
  {
    id: 26,
    front: "What is a Controls Assessment?",
    back: "Evaluating whether security controls are implemented and effective. Tests technical, administrative, physical controls. Part of audits and compliance."
  },
  {
    id: 27,
    front: "What is Continuous Monitoring?",
    back: "Ongoing assessment of security posture. Real-time or near-real-time evaluation. Detects changes in risk. Beyond periodic assessments."
  },
  {
    id: 28,
    front: "What is a Security Control Baseline?",
    back: "Minimum set of security controls required. Starting point for security implementation. Based on system classification or regulation. Can be tailored."
  },
  {
    id: 29,
    front: "What is a POA&M (Plan of Action and Milestones)?",
    back: "Document tracking identified weaknesses and remediation plans. Lists findings, planned actions, responsible parties, target dates. Shows progress on fixing issues."
  },
  {
    id: 30,
    front: "Why are multiple frameworks often used together?",
    back: "Different purposes - NIST CSF for risk management, ISO 27001 for certification, CIS for practical controls, SOC 2 for customer assurance. Frameworks complement each other."
  }
];