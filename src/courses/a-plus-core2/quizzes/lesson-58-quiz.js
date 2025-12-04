export const lesson58Quiz = [
  {
    id: 1,
    question: "An IT technician wants to upgrade the company's email server to a new version over the weekend. What should they do FIRST before making this change?",
    options: [
      "Just do the upgrade without telling anyone",
      "Submit a change request documenting the change, getting approval, and creating a rollback plan",
      "Upgrade during business hours when everyone is working",
      "Delete all emails first"
    ],
    correct: 1,
    explanation: "Change management requires formal process BEFORE changes: submit change request form (what, why, when, who, impact), document the change thoroughly, get approval from change advisory board/management, create rollback plan (how to undo if it fails), schedule during approved maintenance window, notify affected users. Unplanned changes create chaos and risk. Changes during business hours disrupt productivity. Deleting data is catastrophic. Proper change management: minimizes risk, ensures stakeholder awareness, provides accountability, enables tracking, allows planning around changes. Never make significant infrastructure changes without approval and documentation."
  },
  {
    id: 2,
    question: "During a planned server maintenance window, the upgrade fails and services go down. What should the technician do?",
    options: [
      "Keep trying to fix it indefinitely regardless of time",
      "Execute the rollback plan to restore services, then analyze what went wrong",
      "Go home and hope it fixes itself",
      "Blame someone else"
    ],
    correct: 1,
    explanation: "When changes fail: execute predetermined rollback plan immediately (restore to working state), communicate status to stakeholders, document what happened and why it failed, analyze root cause after services restored, schedule new attempt after addressing issues. Rollback plans exist for this exact scenario. Indefinite troubleshooting extends downtime - restore service first. Going home abandons responsibility. Blaming others is unprofessional. Priority is restoring service using tested rollback procedure. Post-mortem analysis happens AFTER stability restored. This is why change management requires rollback plans - not all changes succeed. Quick rollback minimizes business impact."
  },
  {
    id: 3,
    question: "What is the primary purpose of requiring a maintenance window for major system changes?",
    options: [
      "To inconvenience users",
      "To schedule changes during low-usage times, minimizing business disruption and allowing time for issues",
      "Maintenance windows serve no purpose",
      "To work during the most stressful times"
    ],
    correct: 1,
    explanation: "Maintenance windows: schedule changes during low-impact times (nights, weekends, holidays), minimize user disruption (fewer people affected), allow adequate time for: planned work, testing, troubleshooting if issues arise, rollback if necessary. Notify users in advance. Typical windows: 2 AM - 6 AM weekdays, weekend afternoons. Purpose isn't inconvenience - it's strategic timing. Windows provide: protected time for changes, user expectation management, reduced pressure (services can be down temporarily). Emergency changes may occur outside windows with proper approval. Planned windows are professional best practice - balance business needs with necessary maintenance."
  },
  {
    id: 4,
    question: "A technician completes a major network upgrade successfully. What documentation should they create after the change?",
    options: [
      "No documentation needed - the work is done",
      "Document what was changed, configuration details, issues encountered, how they were resolved, and final testing results",
      "Only write 'upgrade completed'",
      "Documentation is for managers, not technicians"
    ],
    correct: 1,
    explanation: "Post-change documentation includes: detailed description of changes made, before/after configurations, issues encountered and resolutions, testing performed and results, actual vs. planned timeline, lessons learned, updated network diagrams/documentation. This documentation: helps future troubleshooting, provides knowledge transfer, satisfies compliance requirements, completes change record, aids audit trails. Minimal documentation lacks value. 'No documentation' creates knowledge gaps when you're unavailable. ALL technical staff document work. Good documentation is professional obligation. Future you (or colleagues) will thank present you for thorough documentation. Document as if someone unfamiliar must understand it."
  },
  {
    id: 5,
    question: "What information should be included in a change request form?",
    options: [
      "Just the technician's name",
      "Purpose of change, scope, affected systems, risk analysis, implementation plan, rollback plan, and scheduled time",
      "Only what time the change will happen",
      "Change requests don't need information"
    ],
    correct: 1,
    explanation: "Comprehensive change requests include: Purpose/justification (why change needed), Scope (what will be changed), Affected systems and users, Risk assessment and impact analysis, Detailed implementation plan, Rollback/backout plan, Scheduled date and time, Required approvals, Testing plan, Communication plan. Detailed requests enable: informed approval decisions, proper resource allocation, risk assessment, stakeholder notification, accountability. Minimal information prevents proper evaluation. Technician name alone is insufficient. Comprehensive documentation enables successful change management. Templates ensure consistency and completeness. Quality of change request correlates with change success."
  },
  {
    id: 6,
    question: "A company maintains a network topology diagram. After adding new switches and reconfiguring VLANs, what should the technician do?",
    options: [
      "Nothing - diagrams are just decorations",
      "Update the network topology diagram to reflect the new configuration accurately",
      "Throw away the old diagram",
      "Create a new diagram but keep the old one as official"
    ],
    correct: 1,
    explanation: "Update documentation immediately after changes: revise diagrams to reflect new configuration, maintain version control (date diagrams), archive old versions (show evolution), ensure accuracy. Updated documentation: prevents confusion during troubleshooting, aids new team members, satisfies compliance, supports disaster recovery. Outdated documentation is worse than no documentation - creates false assumptions. Don't discard old versions entirely (historical reference valuable). Current diagram should be clearly identified as authoritative. Documentation maintenance is ongoing responsibility, not one-time task. Undocumented changes create knowledge gaps and troubleshooting nightmares."
  },
  {
    id: 7,
    question: "An urgent security patch needs to be applied immediately to prevent active exploitation. How does this affect normal change management procedures?",
    options: [
      "Skip all change management - just apply it",
      "Follow emergency change procedures with expedited approval, abbreviated documentation, and post-implementation review",
      "Wait weeks for normal approval process despite active attacks",
      "Ignore the security patch"
    ],
    correct: 1,
    explanation: "Emergency changes have expedited procedures: immediate verbal approval from designated authority, abbreviated (but not absent) documentation, implementation as quickly as possible, full documentation completed after implementation, post-implementation review of process and outcomes. Security emergencies justify deviation from standard timelines but NOT from accountability. Skipping all process creates chaos. Waiting for normal approval during active exploitation is negligent. Ignoring critical patches is irresponsible. Emergency procedures acknowledge reality - sometimes speed is critical. But maintain: approval trail, documentation, communication, review. Balance urgency with control."
  },
  {
    id: 8,
    question: "Why is it important to notify end users before planned maintenance that will cause service interruptions?",
    options: [
      "It's not important - users don't need to know",
      "To manage expectations, allow users to plan around downtime, and reduce support calls/complaints",
      "To create panic",
      "Only managers need notification"
    ],
    correct: 1,
    explanation: "User notification serves multiple purposes: sets expectations (prevents surprise), allows planning (save work, schedule around downtime), reduces support calls ('Is the system down?'), demonstrates respect for users, provides contact information if issues occur, builds trust through communication. Notification should include: what's changing, when (start/end times), expected impact, workarounds if available, contact for issues. Surprises create frustration and complaints. Purpose isn't panic - it's preparation. ALL affected users need notification, not just managers. Communication is professional courtesy and practical necessity. Well-informed users are patient users."
  },
  {
    id: 9,
    question: "A ticketing system is used to track IT support requests. What is a key benefit of using ticketing systems for documentation?",
    options: [
      "Creates unnecessary paperwork",
      "Provides searchable history of issues and resolutions, tracks response times, and ensures accountability",
      "Wastes technician time",
      "Hides problems from management"
    ],
    correct: 1,
    explanation: "Ticketing systems provide: searchable knowledge base (past issues and solutions), accountability (who handled what), metrics (response times, resolution rates), trend identification (recurring problems), customer history, SLA tracking. Benefits: faster problem solving (reference previous solutions), workload visibility, resource planning, customer satisfaction tracking, audit trails. This isn't paperwork - it's organizational memory. Time investment pays off through efficiency gains. Transparency helps management (not hides problems). Good ticketing systems: improve service quality, reduce resolution times, identify training needs, justify resources. Essential tool for professional IT operations."
  },
  {
    id: 10,
    question: "What is the purpose of maintaining an inventory of all company IT assets (computers, software licenses, network equipment)?",
    options: [
      "Just bureaucracy with no real value",
      "Tracks what the company owns, supports license compliance, aids disaster recovery, and enables lifecycle management",
      "To create work for IT staff",
      "Inventories are optional"
    ],
    correct: 1,
    explanation: "Asset inventory enables: license compliance (know what's installed where), disaster recovery (what needs replacement), lifecycle management (identify old equipment), budget planning, theft detection, warranty tracking, depreciation calculation, insurance claims, security auditing. Components: hardware specs, purchase dates, warranty info, physical locations, assigned users, software licenses. Updated inventory: prevents license violations, identifies security risks (old unpatched systems), optimizes replacement cycles, supports decision-making. This isn't busywork - it's fundamental IT management. Inventories should be: accurate, current, detailed, accessible. Automated tools help maintain accuracy. Professional organizations know what they own."
  },
  {
    id: 11,
    question: "A Standard Operating Procedure (SOP) document describes how to perform routine server backups. Why are SOPs important?",
    options: [
      "SOPs restrict creativity and should be avoided",
      "SOPs ensure consistency, reduce errors, enable training, and maintain quality when different people perform tasks",
      "SOPs are only for large companies",
      "SOPs prevent anyone from doing any work"
    ],
    correct: 1,
    explanation: "SOPs (Standard Operating Procedures) provide: consistent methods (same results regardless of who performs task), reduced errors (follow proven procedures), training documentation (onboard new staff), quality assurance (maintain standards), knowledge retention (don't lose processes when people leave), audit compliance (demonstrate proper procedures followed). SOPs don't restrict necessary creativity - they standardize routine tasks. All organizations benefit from documented procedures. SOPs enable work by providing clear guidance. Examples: backup procedures, user account creation, password resets, equipment deployment, incident response. Well-written SOPs are living documents, updated as processes improve. Professional organizations document critical processes."
  },
  {
    id: 12,
    question: "After a major outage, the IT team conducts a post-mortem analysis. What is the primary purpose of this review?",
    options: [
      "To assign blame and punish someone",
      "To identify root causes, learn from mistakes, and implement improvements to prevent recurrence",
      "To justify firing people",
      "Post-mortems serve no purpose"
    ],
    correct: 1,
    explanation: "Post-mortem/post-incident reviews: identify root causes (what really happened), determine contributing factors, analyze response effectiveness, document lessons learned, create action items to prevent recurrence, improve processes/procedures. These should be blameless - focus on systems/processes, not individuals. Blame culture prevents honest analysis and improvement. Purpose is learning and improvement, not punishment. Effective post-mortems: improve reliability, refine procedures, identify training needs, enhance monitoring, strengthen disaster recovery. Document findings and track improvement implementation. Organizations that learn from failures become more resilient. Continuous improvement mindset is professional maturity."
  },
  {
    id: 13,
    question: "A network diagram includes IP addresses, VLAN assignments, and switch port configurations. Where should this sensitive documentation be stored?",
    options: [
      "Posted on the public company website",
      "Stored securely with access limited to authorized IT personnel only",
      "Shared on social media",
      "Left on desks for anyone to see"
    ],
    correct: 1,
    explanation: "Sensitive technical documentation requires security: store in access-controlled location (secure file shares, password-protected repositories), limit access to authorized personnel only, encrypt sensitive information, regular backups, version control. This documentation in wrong hands enables: network attacks, security breaches, unauthorized access. Public posting is security nightmare. Social media sharing violates security. Leaving unattended allows theft. Balance: accessibility for authorized users vs. security from unauthorized access. Use: role-based access, document classification, audit trails. Some documentation (user guides) can be public; network diagrams, password lists, security configs must be protected. Treat documentation with same security as systems it describes."
  },
  {
    id: 14,
    question: "A company requires all changes to go through a Change Advisory Board (CAB) for approval. What is the CAB's role?",
    options: [
      "To prevent all changes and block IT progress",
      "To review change requests, assess risks/impacts, approve or reject based on business needs and risk tolerance",
      "To rubber-stamp everything without review",
      "CABs serve no purpose"
    ],
    correct: 1,
    explanation: "Change Advisory Board (CAB) responsibilities: review change requests for completeness, assess technical and business risks, evaluate resource requirements, identify conflicts with other changes, determine approval based on: business value, risk level, timing, resources. CAB typically includes: IT management, application owners, business representatives, security team. Purpose: governance, not obstruction. Ensures changes: align with business needs, don't conflict, have adequate planning, acceptable risk. CAB prevents: unauthorized changes, conflicts, inadequate planning. Rubber-stamping defeats purpose. CAB provides oversight and cross-functional perspective. Meetings scheduled regularly (weekly/biweekly). Emergency bypass procedures exist for critical issues."
  },
  {
    id: 15,
    question: "What is the '3-2-1 backup rule' often documented in backup procedures?",
    options: [
      "Backup at 3 AM on 2 days, keep for 1 week",
      "Keep 3 copies of data on 2 different media types with 1 copy offsite",
      "Use 3 different backup software on 2 servers for 1 year",
      "3-2-1 refers to tape drive models"
    ],
    correct: 1,
    explanation: "The 3-2-1 backup rule ensures data protection: 3 copies of data (original + 2 backups), 2 different storage media types (don't rely on single technology - use disk + tape, or disk + cloud), 1 copy stored offsite (protects against site disasters - fire, flood, theft). This redundancy protects against: hardware failure (multiple copies), media failure (different types), site disasters (offsite copy). Example implementation: production data + local backup + cloud backup. Document backup procedures including: schedule, retention, media rotation, testing, offsite transport. Test restores regularly - untested backups are worthless. 3-2-1 rule is industry best practice for data protection."
  }
];