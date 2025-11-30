export const lesson58Flashcards = [
  {
    id: 1,
    front: "What is change management and why is it important?",
    back: "Formal process for making changes to IT systems safely. Prevents: unplanned outages, conflicts between changes, security vulnerabilities, undocumented modifications. Ensures: proper testing, approvals, documentation, rollback plans. Critical in production environments."
  },
  {
    id: 2,
    front: "What are the key steps in the change management process?",
    back: "1) Submit change request, 2) Review and approve, 3) Plan change (schedule, testing, rollback), 4) Communicate to stakeholders, 5) Implement change, 6) Verify success, 7) Document outcomes. Formal process prevents rushed changes causing problems."
  },
  {
    id: 3,
    front: "What information should a change request form include?",
    back: "Purpose/reason for change, detailed description of change, affected systems/users, implementation date/time, risk assessment, rollback plan, required resources, expected downtime, approval signatures. Complete documentation before implementing."
  },
  {
    id: 4,
    front: "What is a rollback plan and why is it critical?",
    back: "Documented procedure to undo change if it fails. Includes: steps to revert, time required, who performs rollback, success criteria. Critical because: changes can fail, minimizes downtime, reduces risk. Always have rollback plan before implementing changes."
  },
  {
    id: 5,
    front: "What is a maintenance window?",
    back: "Scheduled time when changes/maintenance can occur. Typically off-hours (nights/weekends) to minimize user impact. Communicated in advance, approved by management, documented. Users expect potential downtime during window. Changes outside window require emergency approval."
  },
  {
    id: 6,
    front: "Why should you notify affected users before making changes?",
    back: "Allows users to plan/save work, reduces support calls, professional courtesy, compliance requirement often, users can avoid affected systems, sets expectations. Notify: what's changing, when, expected duration, potential impact. Advance notice (24-48 hours typical)."
  },
  {
    id: 7,
    front: "What is a Change Advisory Board (CAB)?",
    back: "Group reviewing and approving change requests. Members: IT management, security, operations, business representatives. Evaluates: risk, impact, timing, resources. Meets regularly (weekly/monthly). Approves/denies/postpones changes. Ensures changes align with business needs."
  },
  {
    id: 8,
    front: "What documentation should be updated after changes?",
    back: "Network diagrams, configuration files, asset inventory, knowledge base articles, runbooks, IP address assignments, system documentation, change log. Outdated documentation causes future problems. Update immediately after successful change."
  },
  {
    id: 9,
    front: "What are standard operating procedures (SOPs)?",
    back: "Step-by-step instructions for common tasks. Examples: user account creation, backup procedures, software installation, server maintenance. Benefits: consistency, training tool, compliance, quality control. Should be: clear, tested, updated regularly, accessible."
  },
  {
    id: 10,
    front: "What is a network topology diagram and why maintain it?",
    back: "Visual representation of network devices and connections. Shows: routers, switches, firewalls, servers, connections, IP addresses, VLANs. Uses: troubleshooting, planning, documentation, compliance. Update when: adding equipment, changing configurations, moving devices."
  },
  {
    id: 11,
    front: "What is asset management documentation?",
    back: "Tracking IT assets: hardware inventory (computers, servers, network devices), software licenses, serial numbers, purchase dates, warranty info, assigned users, locations. Tools: asset management software, spreadsheets, CMDB. Helps: budgeting, compliance, support."
  },
  {
    id: 12,
    front: "What is a ticketing system and what should tickets include?",
    back: "System tracking support requests/incidents. Includes: issue description, affected user/system, priority, assigned technician, status, resolution steps, time spent. Benefits: accountability, metrics, knowledge base, workload tracking. Examples: ServiceNow, Jira Service Desk, Zendesk."
  },
  {
    id: 13,
    front: "What is a knowledge base and why create one?",
    back: "Repository of solutions to common problems. Searchable articles on: troubleshooting, how-to guides, FAQs, error messages. Benefits: faster resolution, consistency, self-service, training, reduce repeat questions. Create from: resolved tickets, common issues, best practices."
  },
  {
    id: 14,
    front: "What change management documentation should you maintain?",
    back: "Change request forms, approval records, implementation plans, rollback procedures, test results, communication logs, post-implementation reviews, lessons learned. Audit trail for: compliance, review, future reference. Proves due diligence."
  },
  {
    id: 15,
    front: "What is the purpose of approval processes in change management?",
    back: "Ensures changes reviewed by appropriate authority, prevents unauthorized changes, assesses risk and impact, allocates resources, coordinates timing, provides accountability. Levels vary: routine (supervisor), major (CAB), emergency (CIO)."
  },
  {
    id: 16,
    front: "What is a risk assessment for changes?",
    back: "Evaluation of potential problems from change. Consider: likelihood of failure, impact if fails, affected users/systems, business criticality, timing, dependencies. Classify: low/medium/high risk. High-risk changes need: extensive testing, rollback plan, CAB approval, off-hours implementation."
  },
  {
    id: 17,
    front: "What testing should occur before implementing changes?",
    back: "Test in non-production environment first (lab, dev, staging), verify functionality, check for conflicts, test rollback procedure, document results. Production changes only after successful testing. Emergency changes may skip testing (document why)."
  },
  {
    id: 18,
    front: "What is a post-implementation review?",
    back: "Meeting after change to evaluate success. Discuss: what went well, problems encountered, unexpected issues, was change successful, lessons learned, documentation accurate. Improves future changes. Schedule within days of implementation. Document findings."
  },
  {
    id: 19,
    front: "What should be included in end-user notification?",
    back: "What is changing, why (benefits), when (date/time), how long, what impact (downtime, slower performance), who to contact with questions, what users should do (save work, log off). Clear, non-technical language. Multiple reminders (week before, day before, hour before)."
  },
  {
    id: 20,
    front: "What is inventory management for IT assets?",
    back: "Tracking what equipment organization owns. Record: make/model, serial number, purchase date, cost, location, assigned user, warranty expiration, software installed. Use: barcode/RFID tags, asset management software. Benefits: prevent theft, plan replacements, budgeting, compliance."
  },
  {
    id: 21,
    front: "What is a CMDB (Configuration Management Database)?",
    back: "Database of IT assets and their relationships. Stores: hardware, software, network devices, dependencies, configurations. Shows: what's connected to what, impact of changes. Part of ITIL framework. Larger organizations use. Helps: change management, incident response."
  },
  {
    id: 22,
    front: "What labeling and naming conventions should you follow?",
    back: "Consistent naming for: computers (location-type-number), network devices, printers, servers. Physical labels on: equipment (asset tags), cables (both ends), ports, racks. Benefits: easier troubleshooting, professional appearance, clear documentation. Document naming scheme."
  },
  {
    id: 23,
    front: "What is the difference between emergency and standard changes?",
    back: "Standard: follows full change process, scheduled, tested, approved in advance. Emergency: critical issue needing immediate fix, abbreviated approval, implement then document, still need rollback plan. Example emergency: security breach, major outage, data loss risk."
  },
  {
    id: 24,
    front: "What procurement documentation should you maintain?",
    back: "Purchase orders, vendor quotes, receipts, warranties, support contracts, licensing agreements, asset tags assigned. Track: what bought, when, from whom, cost, warranty expiration. Needed for: returns, warranty claims, budgets, audits, asset management."
  },
  {
    id: 25,
    front: "What is the purpose of a disaster recovery plan document?",
    back: "Procedures for recovering IT systems after disaster. Includes: contact information, recovery priorities, step-by-step procedures, backup locations, RTO/RPO, vendor contacts. Test regularly, update when infrastructure changes. Part of business continuity."
  },
  {
    id: 26,
    front: "What regulated change management documentation exists?",
    back: "SOX (financial systems changes), HIPAA (healthcare system changes), PCI DSS (payment systems), ISO 27001 (security changes). Requirements: documented process, approvals, testing, separation of duties. Auditors verify compliance. Fines for non-compliance."
  },
  {
    id: 27,
    front: "What is scope of change in change management?",
    back: "Defines boundaries of what will be changed. Includes: specific systems affected, number of users, network segments, time window, departments involved. Prevents: scope creep, unintended impact, unclear expectations. Clearly defined scope in change request."
  },
  {
    id: 28,
    front: "Why document lessons learned after changes?",
    back: "Improves future changes, identifies process improvements, shares knowledge with team, prevents repeating mistakes, recognizes successes, updates procedures. Capture: what worked, what didn't, unexpected issues, time estimates accuracy. Add to knowledge base."
  },
  {
    id: 29,
    front: "What is the purpose of a change schedule/calendar?",
    back: "Coordinates timing of all changes. Prevents: conflicting changes, change overload, changes during critical times. Shows: what's changing when, who's implementing, maintenance windows. Shared calendar, regularly reviewed. Helps: capacity planning, resource allocation."
  },
  {
    id: 30,
    front: "What backup documentation is critical before changes?",
    back: "Configuration files (before changes), system state, database backups, documentation of current state, screenshots of working system. Needed for rollback if change fails. Verify backups successful before proceeding. Part of change plan."
  }
];