export const lesson29Quiz = [
  {
    id: 1,
    question: "An organization identifies that a server failure would cost $100,000 to replace and result in $400,000 in lost business. If such failures historically occur once every 5 years, what is the Annualized Loss Expectancy (ALE)?",
    options: [
      "$500,000",
      "$100,000 per year (SLE of $500,000 × ARO of 0.2)",
      "$400,000",
      "$50,000"
    ],
    correct: 1,
    explanation: "ALE (Annualized Loss Expectancy) = SLE × ARO, representing expected annual loss from a risk. Calculation breakdown: (1) ASSET VALUE impact = $100,000 (replacement) + $400,000 (lost business) = $500,000 total, (2) SLE (Single Loss Expectancy) = $500,000 (total impact of one occurrence), (3) ARO (Annualized Rate of Occurrence) = 1/5 years = 0.2, (4) ALE = $500,000 × 0.2 = $100,000/year. ALE use cases: (1) Justify security spending (if control costs <$100K/year, worth it), (2) Compare risks (higher ALE = higher priority), (3) Insurance decisions. Formulas to memorize: (1) SLE = Asset Value × Exposure Factor, (2) ALE = SLE × ARO. Quantitative risk analysis provides financial figures for business decisions."
  },
  {
    id: 2,
    question: "A company determines they cannot eliminate the risk of ransomware attacks, so they purchase cyber insurance to transfer the financial impact. What risk response strategy is this?",
    options: [
      "Risk avoidance",
      "Risk transference - shifting risk impact to third party",
      "Risk mitigation",
      "Risk acceptance"
    ],
    correct: 1,
    explanation: "RISK TRANSFERENCE shifts financial impact of risk to a third party, typically through insurance or contracts. Transference methods: (1) INSURANCE - cyber insurance, business interruption, (2) CONTRACTS - indemnification clauses, SLAs with penalties, (3) OUTSOURCING - vendor assumes some risk. Insurance considerations: (1) Coverage scope, (2) Exclusions (acts of war, unpatched systems), (3) Limits and deductibles, (4) Requirements (security controls). What transfers: financial impact. What doesn't transfer: reputation damage, operational responsibility. Risk response strategies: (1) AVOID - eliminate risk by not doing activity, (2) TRANSFER - shift to third party, (3) MITIGATE - reduce likelihood or impact, (4) ACCEPT - acknowledge and document. Transference doesn't eliminate risk - transfers financial consequences while organization still must respond operationally."
  },
  {
    id: 3,
    question: "After evaluating options, an organization decides not to enter a new market because the cyber risks are too high relative to potential benefits. What risk response is this?",
    options: [
      "Risk acceptance",
      "Risk avoidance - eliminating risk by not engaging in activity",
      "Risk mitigation",
      "Risk transfer"
    ],
    correct: 1,
    explanation: "RISK AVOIDANCE eliminates risk entirely by not engaging in the risky activity. Avoidance examples: (1) Not entering high-risk market (this scenario), (2) Not collecting certain data, (3) Not implementing risky technology, (4) Discontinuing risky business line. When avoidance appropriate: (1) Risk exceeds potential benefit, (2) No acceptable mitigation available, (3) Risk appetite is zero for this area. Avoidance limitations: (1) May lose business opportunities, (2) Not always possible (some risks unavoidable), (3) May not be cost-effective. Avoidance vs Acceptance: (1) Avoidance - don't do it, (2) Acceptance - do it, acknowledge risk. Risk response selection: consider cost of each option, effectiveness, business impact. Avoidance is valid but sometimes overused when mitigation would be more appropriate."
  },
  {
    id: 4,
    question: "An organization implements firewalls, encryption, and access controls to reduce the likelihood and impact of data breaches. What risk response strategy is this?",
    options: [
      "Risk avoidance",
      "Risk mitigation - implementing controls to reduce risk",
      "Risk transfer",
      "Risk acceptance"
    ],
    correct: 1,
    explanation: "RISK MITIGATION implements controls to reduce risk likelihood, impact, or both. Mitigation approaches: (1) Reduce LIKELIHOOD - patching, access controls, training, (2) Reduce IMPACT - encryption, backups, segmentation, (3) Both - defense in depth. Mitigation examples: (1) Firewall - reduces likelihood of network attacks, (2) Encryption - reduces impact if data stolen, (3) Backups - reduces impact of ransomware. Mitigation cost-benefit: control cost should be less than risk reduction benefit. Residual risk: risk remaining after mitigation. Mitigation is most common response - rarely eliminate risk completely, but reduce to acceptable level. Security programs are primarily about risk mitigation - identifying risks and implementing controls to reduce them. After mitigation, residual risk may be accepted, transferred, or further mitigated."
  },
  {
    id: 5,
    question: "A risk assessment uses categories of High, Medium, and Low for likelihood and impact, creating a matrix to determine overall risk ratings. What type of analysis is this?",
    options: [
      "Quantitative analysis",
      "Qualitative analysis - using categorical ratings rather than numerical values",
      "Financial analysis",
      "Statistical analysis"
    ],
    correct: 1,
    explanation: "QUALITATIVE ANALYSIS uses categorical ratings (High/Medium/Low) rather than precise numerical values. Qualitative approach: (1) Likelihood categories - Rare, Unlikely, Possible, Likely, Almost Certain, (2) Impact categories - Negligible, Minor, Moderate, Major, Catastrophic, (3) Risk matrix - likelihood × impact = risk level. Advantages: (1) Faster than quantitative, (2) Works when data is limited, (3) Easier to understand, (4) Good for prioritization. Disadvantages: (1) Subjective, (2) Hard to justify specific spending, (3) Inconsistent across assessors. Qualitative vs Quantitative: (1) Qualitative - categories, (2) Quantitative - numbers and dollars. Risk matrix output: Critical/High/Medium/Low risk ratings. Most organizations use qualitative for initial assessment, quantitative for major decisions requiring financial justification."
  },
  {
    id: 6,
    question: "An organization documents all identified risks, their ratings, owners, status, and treatment plans in a central repository that's regularly reviewed. What is this document?",
    options: [
      "Incident report",
      "Risk register - central repository tracking identified risks",
      "Audit log",
      "Policy document"
    ],
    correct: 1,
    explanation: "RISK REGISTER is the central repository for tracking all identified risks throughout their lifecycle. Register contents: (1) Risk ID/name, (2) Description, (3) Category, (4) Likelihood and impact ratings, (5) Risk score, (6) Owner, (7) Treatment/response, (8) Status, (9) Review dates. Register purposes: (1) Track all risks centrally, (2) Assign accountability, (3) Monitor treatment progress, (4) Report to management, (5) Compliance evidence. Register maintenance: (1) Add new risks, (2) Update existing risks, (3) Close treated risks, (4) Regular review cadence. Risk register is living document: updated as new risks identified, existing risks change, treatments implemented. Board/management should receive regular risk register summaries. Risk register demonstrates organized risk management process."
  },
  {
    id: 7,
    question: "The board of directors defines how much risk the organization is willing to accept in pursuit of business objectives. What is this called?",
    options: [
      "Risk response",
      "Risk appetite - level of risk organization is willing to accept",
      "Risk mitigation",
      "Risk assessment"
    ],
    correct: 1,
    explanation: "RISK APPETITE is the level of risk an organization is willing to accept in pursuit of objectives. Risk appetite sets boundaries: (1) How much risk is acceptable, (2) What types of risk are acceptable, (3) Strategic guidance for decisions. Risk appetite vs Risk tolerance: (1) APPETITE - broad willingness (strategic), (2) TOLERANCE - acceptable variation around objectives (tactical). Appetite statements: (1) 'We accept moderate risk in pursuit of growth,' (2) 'We have zero appetite for compliance violations,' (3) 'We accept calculated technology risks.' How appetite used: (1) Guide risk decisions, (2) Determine acceptable residual risk, (3) Investment prioritization. Appetite set by: board of directors with executive input. Risk appetite should be: (1) Documented, (2) Communicated, (3) Reviewed periodically, (4) Aligned with strategy. Without defined appetite: inconsistent risk decisions across organization."
  },
  {
    id: 8,
    question: "A Business Impact Analysis determines that the organization can tolerate maximum 4 hours of downtime for their e-commerce platform before suffering unacceptable financial losses. What metric is this?",
    options: [
      "RPO - Recovery Point Objective",
      "RTO (Recovery Time Objective) - maximum acceptable downtime",
      "MTTR",
      "MTBF"
    ],
    correct: 1,
    explanation: "RTO (Recovery Time Objective) is the maximum acceptable time to restore a system after disruption. RTO represents: (1) How long until system must be back, (2) Drives recovery planning, (3) Determines DR solution requirements. RTO vs RPO: (1) RTO - how long down (time to recover), (2) RPO - how much data loss acceptable (recovery point). Example: (1) RTO = 4 hours means system must be restored within 4 hours, (2) RPO = 1 hour means can lose maximum 1 hour of data. RTO implications: (1) 4-hour RTO needs hot/warm site, (2) 24-hour RTO may allow cold site, (3) Minutes RTO requires active-active. BIA determines RTO by analyzing: (1) Financial impact of downtime, (2) Customer impact, (3) Regulatory requirements, (4) Operational dependencies. RTO should drive: DR planning, backup frequency, technology investments."
  },
  {
    id: 9,
    question: "A Business Impact Analysis identifies which business processes are critical, their dependencies, and the financial impact of disruption. What is the primary purpose of this analysis?",
    options: [
      "Technical security",
      "Understanding business priorities for continuity and recovery planning",
      "Compliance only",
      "Vulnerability identification"
    ],
    correct: 1,
    explanation: "BUSINESS IMPACT ANALYSIS (BIA) identifies critical processes and impacts of disruption to guide continuity planning. BIA identifies: (1) Critical business processes, (2) Dependencies (systems, people, vendors), (3) Impact of disruption (financial, operational, reputational), (4) RTO and RPO requirements, (5) Recovery priorities. BIA process: (1) Identify processes, (2) Determine criticality, (3) Analyze dependencies, (4) Assess impact over time, (5) Define recovery objectives. Impact categories: (1) Financial - lost revenue, penalties, (2) Operational - inability to function, (3) Reputational - customer trust, (4) Regulatory - compliance violations. BIA output guides: (1) DR strategy, (2) Resource allocation, (3) Recovery sequence, (4) Investment decisions. BIA should be refreshed: annually or after significant changes. Without BIA: recovery priorities unclear, wrong systems recovered first."
  },
  {
    id: 10,
    question: "After implementing a security control, the organization determines there is still $50,000/year of expected loss from the risk. What is this remaining risk called?",
    options: [
      "Total risk",
      "Residual risk - risk remaining after controls are implemented",
      "Inherent risk",
      "Transferred risk"
    ],
    correct: 1,
    explanation: "RESIDUAL RISK is the risk that remains after security controls are implemented. Risk progression: (1) INHERENT RISK - risk before any controls, (2) Controls implemented, (3) RESIDUAL RISK - risk after controls. Example: (1) Inherent risk: $500K ALE, (2) Implement controls ($100K/year), (3) Residual risk: $50K ALE. Residual risk decisions: (1) Accept - document and acknowledge, (2) Further mitigate - additional controls, (3) Transfer - insurance, (4) Avoid - stop activity. Residual risk should be: (1) Within risk appetite, (2) Documented, (3) Approved by appropriate level, (4) Reviewed periodically. Control effectiveness: measured by reduction from inherent to residual. Zero residual risk is rarely achievable or cost-effective - goal is acceptable residual risk."
  },
  {
    id: 11,
    question: "An organization tracks metrics that might indicate increasing risk levels, such as rising failed login attempts or increasing vulnerability counts. What are these called?",
    options: [
      "Lagging indicators",
      "Key Risk Indicators (KRIs) - metrics signaling potential risk changes",
      "Performance metrics",
      "Compliance metrics"
    ],
    correct: 1,
    explanation: "KEY RISK INDICATORS (KRIs) are metrics that signal potential changes in risk levels before issues occur. KRI examples: (1) Failed login attempts - potential attack, (2) Vulnerability counts - attack surface, (3) Patch compliance rate - exposure, (4) Security training completion - human risk, (5) Third-party security scores - supply chain risk. Leading vs Lagging: (1) LEADING (KRIs) - predict future issues, (2) LAGGING - measure after the fact. KRI characteristics: (1) Measurable, (2) Predictive, (3) Comparable over time, (4) Tied to specific risks. KRI thresholds: (1) Green - acceptable, (2) Yellow - warning, (3) Red - action required. KRI reporting: dashboard for management visibility into risk trends. Effective KRIs enable proactive risk management - address issues before they become incidents."
  },
  {
    id: 12,
    question: "A company's disaster recovery plan includes a hot site that mirrors production, enabling near-immediate failover. What drives the decision for this expensive solution?",
    options: [
      "Random choice",
      "Very low RTO requirement - business cannot tolerate extended downtime",
      "Compliance only",
      "Industry standard"
    ],
    correct: 1,
    explanation: "HOT SITE selection is driven by very low RTO requirements where business cannot tolerate extended downtime. DR site types: (1) HOT SITE - fully equipped, data synced, immediate failover (RTO: minutes), (2) WARM SITE - partially equipped, needs some setup (RTO: hours to day), (3) COLD SITE - space/power only, needs equipment (RTO: days to weeks). Hot site characteristics: (1) Mirrored infrastructure, (2) Real-time data replication, (3) Automatic or rapid failover, (4) Highest cost. When hot site justified: (1) RTO measured in minutes, (2) High cost of downtime, (3) Critical business operations, (4) Regulatory requirements. Cost considerations: (1) Hot site: $$$$ (duplicate everything), (2) Warm site: $$, (3) Cold site: $. BIA determines RTO, RTO determines appropriate DR solution. Hot site for critical systems; cold site for less critical may be acceptable."
  },
  {
    id: 13,
    question: "During risk assessment, the team considers factors like threat capability, vulnerability severity, and asset criticality. What comprehensive approach considers all these factors?",
    options: [
      "Simple checklist",
      "Risk analysis considering threat, vulnerability, and impact factors",
      "Single factor analysis",
      "Random assessment"
    ],
    correct: 1,
    explanation: "COMPREHENSIVE RISK ANALYSIS considers threat, vulnerability, and impact/asset factors together. Risk components: (1) THREAT - who/what could cause harm, capability, motivation, (2) VULNERABILITY - weakness that could be exploited, (3) IMPACT/ASSET - what's at stake, criticality. Risk formula concept: Risk = Threat × Vulnerability × Impact. Analysis factors: (1) Threat capability and motivation, (2) Vulnerability severity and exploitability, (3) Asset value and criticality, (4) Existing controls. Without complete picture: (1) High threat but low vulnerability = lower risk, (2) High vulnerability but low impact = lower risk, (3) All three high = critical risk. This approach prevents: overreacting to vulnerabilities without threats, ignoring threats without known vulnerabilities, treating all risks equally. Comprehensive analysis enables informed prioritization."
  },
  {
    id: 14,
    question: "An organization defines acceptable risk levels differently for different areas: zero tolerance for safety risks, low tolerance for compliance risks, and moderate tolerance for operational risks. What does this represent?",
    options: [
      "Single risk standard",
      "Differentiated risk appetite - varying risk tolerance by category",
      "No risk management",
      "Random standards"
    ],
    correct: 1,
    explanation: "DIFFERENTIATED RISK APPETITE varies acceptable risk levels by category or domain. Why differentiation: (1) Not all risks equal, (2) Different consequences, (3) Different regulatory requirements, (4) Strategic priorities. Common differentiation: (1) SAFETY - zero/minimal tolerance (life safety), (2) COMPLIANCE - low tolerance (regulatory), (3) FINANCIAL - moderate tolerance (business decisions), (4) STRATEGIC - higher tolerance (growth initiatives). Appetite statements by category: (1) 'Zero tolerance for safety violations,' (2) 'Low appetite for compliance risk,' (3) 'Moderate appetite for calculated business risk.' Communication: ensure organization understands different standards apply to different areas. Consistent application: similar risks in same category treated similarly. Differentiated appetite enables appropriate risk-taking in some areas while maintaining strict standards in others."
  },
  {
    id: 15,
    question: "A security manager presents risk information to the board using business impact terms (revenue loss, customer impact, regulatory fines) rather than technical details. Why is this approach important?",
    options: [
      "Technical details preferred by boards",
      "Business context enables informed risk decisions by non-technical leadership",
      "Hiding information",
      "Compliance requirement"
    ],
    correct: 1,
    explanation: "BUSINESS CONTEXT enables non-technical leadership to make informed risk decisions. Why business terms: (1) Board members often not technical, (2) Risk decisions are business decisions, (3) Resource allocation requires business justification, (4) Comparability across different risks. Technical vs Business framing: (1) Technical: 'CVE-2024-1234 with CVSS 9.8 affects servers,' (2) Business: 'Vulnerability could cause 48-hour outage with $2M revenue impact.' Effective risk communication: (1) Impact in dollars/customers/reputation, (2) Likelihood in understandable terms, (3) Options with cost-benefit, (4) Recommendations with rationale. Board responsibilities: (1) Set risk appetite, (2) Approve major risk decisions, (3) Ensure adequate resources, (4) Oversee risk management. Risk reporting should: answer 'so what?' for business. If leadership doesn't understand risks, they can't make good decisions."
  }
];