export const lesson24Quiz = [
  {
    id: 1,
    question: "An organization hires an external auditor to evaluate their security controls against PCI DSS requirements and provide an attestation report. What type of assessment is this?",
    options: [
      "Penetration test",
      "Compliance audit - evaluating controls against regulatory/standard requirements",
      "Vulnerability scan",
      "Risk assessment"
    ],
    correct: 1,
    explanation: "COMPLIANCE AUDIT evaluates an organization's controls against specific regulatory or standard requirements. Compliance audit characteristics: (1) Evaluates against defined standard (PCI DSS, HIPAA, SOX), (2) Often requires external/independent auditor, (3) Results in attestation or certification, (4) Identifies gaps from requirements, (5) May be mandatory. Common compliance frameworks: (1) PCI DSS - payment card data, (2) HIPAA - healthcare, (3) SOX - financial reporting, (4) GDPR - EU data privacy, (5) SOC 2 - service organizations. Audit process: (1) Scope definition, (2) Evidence collection, (3) Control testing, (4) Gap identification, (5) Report issuance. Audit vs assessment: audits typically against formal standards with attestation; assessments may be broader evaluation of security posture."
  },
  {
    id: 2,
    question: "A security team evaluates their current security controls against the NIST Cybersecurity Framework to identify where they fall short of best practices. What type of assessment is this?",
    options: [
      "Penetration test",
      "Gap analysis - comparing current state to desired state/framework",
      "Vulnerability scan",
      "Red team"
    ],
    correct: 1,
    explanation: "GAP ANALYSIS compares current security posture against a desired state, framework, or standard. Gap analysis process: (1) Define target state (framework, standard, best practices), (2) Assess current state, (3) Identify gaps between current and target, (4) Prioritize gaps by risk, (5) Create remediation roadmap. Common frameworks for comparison: (1) NIST CSF - Identify, Protect, Detect, Respond, Recover, (2) CIS Controls - prioritized security controls, (3) ISO 27001 - information security management, (4) Industry-specific (HIPAA, PCI). Gap analysis output: (1) Current maturity level, (2) Specific control gaps, (3) Prioritized remediation plan, (4) Resource requirements, (5) Timeline. Useful for: security program planning, compliance preparation, M&A due diligence. Gap analysis is strategic - identifies what to fix rather than specific vulnerabilities."
  },
  {
    id: 3,
    question: "A SOC 2 Type II report is provided to customers to demonstrate the organization's security controls have been operating effectively over a 12-month period. What does this report provide?",
    options: [
      "One-time scan results",
      "Third-party attestation of control effectiveness over time",
      "Penetration test findings",
      "Vulnerability list"
    ],
    correct: 1,
    explanation: "SOC 2 TYPE II provides third-party attestation that security controls operated effectively over a period of time. SOC reports: (1) SOC 1 - financial reporting controls, (2) SOC 2 - security, availability, processing integrity, confidentiality, privacy, (3) SOC 3 - public version of SOC 2 (less detail). Type I vs Type II: (1) TYPE I - controls designed appropriately at a point in time, (2) TYPE II - controls operated effectively over period (usually 6-12 months). SOC 2 Type II value: (1) Independent verification of security claims, (2) Customer assurance, (3) Reduces need for customer audits, (4) Demonstrates ongoing commitment. Trust Services Criteria: Security (required), plus optional: Availability, Processing Integrity, Confidentiality, Privacy. SOC 2 Type II is gold standard for demonstrating security to customers, especially for SaaS/cloud providers."
  },
  {
    id: 4,
    question: "Before implementing a new customer database system, a privacy team evaluates how personal data will be collected, used, stored, and protected. What assessment is this?",
    options: [
      "Vulnerability assessment",
      "Privacy Impact Assessment (PIA) - evaluating privacy implications of systems",
      "Penetration test",
      "Financial audit"
    ],
    correct: 1,
    explanation: "PRIVACY IMPACT ASSESSMENT (PIA) evaluates how personal information is handled and identifies privacy risks. PIA evaluates: (1) What personal data is collected, (2) Purpose of collection, (3) How data is used, (4) Who has access, (5) How long data is retained, (6) How data is protected, (7) Data sharing with third parties. When to conduct PIA: (1) New systems handling personal data, (2) Significant changes to data handling, (3) New data sharing arrangements, (4) Before launching services, (5) Required by regulations (GDPR). PIA output: (1) Data flow documentation, (2) Privacy risks identified, (3) Mitigation measures, (4) Compliance status, (5) Recommendations. GDPR requires Data Protection Impact Assessments (DPIA) for high-risk processing. PIAs demonstrate privacy by design and accountability."
  },
  {
    id: 5,
    question: "An organization identifies that a data center flood could cause $1 million in losses with a 10% annual probability. They calculate Annualized Loss Expectancy (ALE) to prioritize risk treatment. What type of analysis is this?",
    options: [
      "Qualitative risk assessment",
      "Quantitative risk assessment - using numerical/financial values for risk",
      "Vulnerability scan",
      "Compliance audit"
    ],
    correct: 1,
    explanation: "QUANTITATIVE RISK ASSESSMENT uses numerical values and financial figures to measure risk. Quantitative formulas: (1) SLE (Single Loss Expectancy) = Asset Value × Exposure Factor, (2) ALE (Annualized Loss Expectancy) = SLE × ARO, (3) ARO = Annualized Rate of Occurrence. This scenario: SLE = $1M, ARO = 10% (0.1), ALE = $1M × 0.1 = $100K/year. Quantitative advantages: (1) Concrete financial figures, (2) Easier to justify security spending (if control costs <$100K, it's worth it), (3) Comparable across risks, (4) Business language. Challenges: (1) Difficult to get accurate probabilities, (2) Some impacts hard to quantify (reputation), (3) False precision. Quantitative vs Qualitative: (1) Quantitative - numbers, financial, (2) Qualitative - categories (High/Medium/Low). Many organizations use hybrid approach."
  },
  {
    id: 6,
    question: "A security assessment categorizes risks as High, Medium, or Low based on likelihood and impact matrices rather than exact dollar figures. What type of assessment is this?",
    options: [
      "Quantitative risk assessment",
      "Qualitative risk assessment - using categorical ratings rather than numbers",
      "Penetration test",
      "Vulnerability scan"
    ],
    correct: 1,
    explanation: "QUALITATIVE RISK ASSESSMENT uses categorical ratings (High/Medium/Low) rather than precise numerical values. Qualitative approach: (1) Likelihood categories: Rare, Unlikely, Possible, Likely, Almost Certain, (2) Impact categories: Negligible, Minor, Moderate, Major, Catastrophic, (3) Risk matrix combining likelihood × impact. Advantages: (1) Faster than quantitative, (2) Easier when data is limited, (3) Works when impacts are hard to quantify, (4) Useful for prioritization. Disadvantages: (1) Subjective, (2) Hard to justify exact spending, (3) May be inconsistent across assessors. Risk matrix: likelihood on one axis, impact on other, intersection gives risk level. Example: High likelihood + High impact = Critical risk. Most organizations use qualitative for initial assessment, quantitative for major decisions requiring financial justification."
  },
  {
    id: 7,
    question: "An organization conducts monthly automated vulnerability scans, quarterly penetration tests, and annual comprehensive security assessments. What does this represent?",
    options: [
      "Wasteful redundancy",
      "Continuous security assessment program - ongoing evaluation at various depths",
      "One-time assessment",
      "Compliance-only approach"
    ],
    correct: 1,
    explanation: "CONTINUOUS SECURITY ASSESSMENT maintains ongoing evaluation at various depths and frequencies. Assessment layers: (1) CONTINUOUS - automated scanning, monitoring (daily/weekly), (2) PERIODIC - penetration tests, audits (quarterly), (3) COMPREHENSIVE - full assessments, red teams (annual). Why layered approach: (1) Different assessments find different issues, (2) Frequency matches risk and change rate, (3) Automated catches known issues, (4) Human testing finds complex issues. Triggers for additional assessment: (1) Major system changes, (2) After incidents, (3) New threat information, (4) M&A activity, (5) Regulatory changes. Continuous assessment elements: (1) Vulnerability scanning, (2) Configuration monitoring, (3) Log analysis, (4) Threat intelligence, (5) Compliance monitoring. Point-in-time assessments become stale quickly - continuous approach maintains current visibility."
  },
  {
    id: 8,
    question: "During a third-party vendor assessment, an organization reviews the vendor's SOC 2 report, evaluates their security questionnaire responses, and may conduct an on-site audit. What is this process called?",
    options: [
      "Internal audit",
      "Vendor/Third-party risk assessment - evaluating security of business partners",
      "Penetration test",
      "Vulnerability scan"
    ],
    correct: 1,
    explanation: "VENDOR/THIRD-PARTY RISK ASSESSMENT evaluates the security posture of external organizations with access to your data or systems. Assessment methods: (1) Security questionnaires (SIG, CAIQ), (2) SOC 2 reports review, (3) Penetration test results, (4) On-site audits, (5) Continuous monitoring. Risk factors evaluated: (1) Data access level, (2) System connectivity, (3) Security controls, (4) Compliance certifications, (5) Financial stability, (6) Incident history. Why critical: (1) Vendor compromise affects you (supply chain attacks), (2) Regulatory requirements (GDPR, PCI), (3) Contractual obligations, (4) Data protection responsibility doesn't transfer. Assessment depth by risk: (1) High risk (data access) - detailed assessment, (2) Medium risk - questionnaire + SOC 2, (3) Low risk - basic due diligence. Ongoing monitoring: vendors should be reassessed periodically, not just at onboarding."
  },
  {
    id: 9,
    question: "A framework provides five functions: Identify, Protect, Detect, Respond, and Recover for organizing cybersecurity activities. What framework is this?",
    options: [
      "PCI DSS",
      "NIST Cybersecurity Framework (CSF) - risk-based approach with five core functions",
      "HIPAA",
      "SOX"
    ],
    correct: 1,
    explanation: "NIST CYBERSECURITY FRAMEWORK (CSF) organizes cybersecurity activities into five core functions. Five functions: (1) IDENTIFY - asset management, risk assessment, governance, (2) PROTECT - access control, training, data security, (3) DETECT - monitoring, detection processes, (4) RESPOND - response planning, communications, analysis, (5) RECOVER - recovery planning, improvements. CSF characteristics: (1) Risk-based approach, (2) Flexible - adaptable to any organization, (3) Not prescriptive - outcome focused, (4) Implementation tiers (Partial, Risk Informed, Repeatable, Adaptive). CSF benefits: (1) Common language for security, (2) Framework for gap analysis, (3) Board-level communication, (4) Aligns with other standards. Widely adopted: US government, critical infrastructure, many private organizations. CSF 2.0 released 2024 with updates including supply chain focus."
  },
  {
    id: 10,
    question: "An assessment finds that an organization has documented security policies but employees don't follow them and controls aren't consistently implemented. What does this indicate?",
    options: [
      "Strong security program",
      "Gap between policy and practice - documented controls not effectively implemented",
      "Adequate compliance",
      "No issues"
    ],
    correct: 1,
    explanation: "GAP BETWEEN POLICY AND PRACTICE indicates controls exist on paper but aren't effectively implemented. This gap creates: (1) FALSE SENSE OF SECURITY - leadership thinks controls exist, (2) AUDIT FINDINGS - auditors test effectiveness not just existence, (3) REAL RISK - attackers exploit implementation gaps. Common causes: (1) Policies written but not communicated, (2) No enforcement mechanism, (3) Policies impractical to follow, (4) Insufficient training, (5) No accountability. Assessment types that reveal this: (1) Control testing (does control work?), (2) Interviews (do staff know policy?), (3) Observations (is practice consistent?), (4) Technical testing (are settings configured?). Remediation: (1) Update impractical policies, (2) Training and awareness, (3) Technical enforcement where possible, (4) Monitoring and accountability, (5) Regular effectiveness testing. SOC 2 Type II specifically tests that controls OPERATE effectively, not just exist."
  },
  {
    id: 11,
    question: "A company's internal audit team conducts security assessments independently of the IT team and reports findings directly to the board. What governance principle does this represent?",
    options: [
      "Conflict of interest",
      "Independence - auditors separate from those being audited for objectivity",
      "Inefficiency",
      "Duplication"
    ],
    correct: 1,
    explanation: "INDEPENDENCE ensures auditors can objectively evaluate controls without pressure from those being audited. Independence principles: (1) Auditors don't report to those they audit, (2) No conflicts of interest, (3) Freedom to report findings, (4) Board/audit committee reporting. Why independence matters: (1) Objective findings without pressure to minimize issues, (2) Trust in audit results, (3) Regulatory requirement for many audits, (4) Effective oversight. Types of independence: (1) Organizational - separate reporting structure, (2) Functional - authority to audit anything, (3) Mental - objectivity and skepticism. Internal vs External audit: (1) Internal - employed by organization, ongoing monitoring, (2) External - independent third party, specific engagements. External audits for compliance (SOC 2, PCI) require independence. Internal audit independence maintained through reporting to audit committee/board."
  },
  {
    id: 12,
    question: "Before conducting a security assessment, the team defines what systems are included, what testing methods will be used, and what areas are explicitly excluded. What is this called?",
    options: [
      "Final report",
      "Scope definition - clearly defining assessment boundaries and limitations",
      "Vulnerability scan",
      "Risk acceptance"
    ],
    correct: 1,
    explanation: "SCOPE DEFINITION establishes clear boundaries for what an assessment will and won't cover. Scope elements: (1) INCLUDED SYSTEMS - what will be tested/evaluated, (2) EXCLUDED SYSTEMS - explicitly out of scope, (3) TESTING METHODS - approaches that will/won't be used, (4) TIMEFRAME - when assessment occurs, (5) LIMITATIONS - constraints on assessment. Why scope matters: (1) Sets expectations, (2) Prevents scope creep, (3) Ensures coverage of critical areas, (4) Documents what wasn't assessed (for risk), (5) Resource planning. Scope statement should include: (1) Business objectives, (2) Systems/applications/data, (3) Physical locations, (4) Network segments, (5) Third parties included. Clear scope prevents: (1) Missing critical systems, (2) Exceeding time/budget, (3) Misunderstandings about coverage, (4) False assurance from limited assessment."
  },
  {
    id: 13,
    question: "A security assessment report provides an executive summary for leadership and detailed technical findings for the IT team. What does this dual approach ensure?",
    options: [
      "Confusion",
      "Appropriate communication - different detail levels for different audiences",
      "Redundancy",
      "Longer report"
    ],
    correct: 1,
    explanation: "APPROPRIATE COMMUNICATION tailors assessment results to different audience needs. Report sections: (1) EXECUTIVE SUMMARY - high-level findings, business risk, key recommendations (for leadership), (2) TECHNICAL DETAILS - specific vulnerabilities, evidence, remediation steps (for IT). Executive summary should include: (1) Overall risk posture, (2) Critical findings count and nature, (3) Business impact, (4) Resource requirements for remediation, (5) Recommendations. Technical section should include: (1) Detailed findings with evidence, (2) Severity ratings, (3) Step-by-step remediation, (4) References and resources. Why this matters: (1) Executives need business context, not technical details, (2) IT needs actionable technical guidance, (3) Each audience takes different actions. Effective reporting drives remediation - findings that sit unread don't improve security."
  },
  {
    id: 14,
    question: "An organization tracks security assessment findings in a register, assigns owners, sets remediation deadlines, and monitors progress until closure. What process is this?",
    options: [
      "Ignoring findings",
      "Finding/Issue tracking - managing assessment results through remediation",
      "Annual report",
      "One-time documentation"
    ],
    correct: 1,
    explanation: "FINDING/ISSUE TRACKING manages assessment results through remediation to closure. Tracking elements: (1) Finding description, (2) Severity/priority, (3) Owner responsible, (4) Remediation deadline, (5) Status (open, in progress, remediated, verified), (6) Verification date. Tracking process: (1) Log finding from assessment, (2) Assign owner, (3) Set deadline based on severity, (4) Monitor progress, (5) Verify remediation, (6) Close finding. Why tracking matters: (1) Ensures findings don't get lost, (2) Accountability, (3) Progress visibility, (4) Demonstrates due diligence, (5) Compliance evidence. Metrics from tracking: (1) Findings by severity, (2) Time to remediate, (3) Aging findings, (4) Trends over time. Without tracking, assessments become checkbox exercises without security improvement."
  },
  {
    id: 15,
    question: "An organization determines that a vulnerability exists but the cost of remediation significantly exceeds the potential impact. With management approval, they document the risk and choose not to fix it. What is this?",
    options: [
      "Negligence",
      "Risk acceptance - informed decision to accept risk with documentation",
      "Risk avoidance",
      "Risk transfer"
    ],
    correct: 1,
    explanation: "RISK ACCEPTANCE is an informed decision to accept identified risk when treatment cost exceeds benefit. Risk acceptance requirements: (1) Identified and analyzed risk, (2) Cost-benefit evaluation, (3) Management approval at appropriate level, (4) Documentation, (5) Periodic review. When acceptance is appropriate: (1) Low impact, low likelihood, (2) Remediation cost prohibitive, (3) Compensating controls reduce risk, (4) Limited exposure window. When acceptance is NOT appropriate: (1) Regulatory requirements mandate treatment, (2) Risk is to others (customers, public), (3) High severity not properly analyzed, (4) Avoiding difficult remediation. Documentation should include: (1) Risk description, (2) Analysis performed, (3) Reason for acceptance, (4) Approver, (5) Review date, (6) Conditions that would change decision. Risk acceptance is legitimate option but must be informed, documented, and approved."
  }
];