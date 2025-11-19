// Flashcards for Lesson 16: Network Documentation and Diagrams

export const lesson16Flashcards = [
  {
    id: 1,
    front: "Why is network documentation critical?",
    back: "Faster troubleshooting, easier onboarding, change planning, disaster recovery, compliance. Outdated/missing docs = downtime and mistakes."
  },
  {
    id: 2,
    front: "What is a physical topology diagram?",
    back: "Shows actual physical layout: device locations, cable runs, rack positions, building floors. Includes models, ports, cable types."
  },
  {
    id: 3,
    front: "What is a logical topology diagram?",
    back: "Shows how data flows: IP addresses, subnets, VLANs, routing protocols. Ignores physical location."
  },
  {
    id: 4,
    front: "Physical vs logical diagrams?",
    back: "Physical: WHERE devices are (locations, racks, cables). Logical: HOW they communicate (IPs, VLANs, routing). Need both."
  },
  {
    id: 5,
    front: "What is a rack diagram?",
    back: "Shows equipment layout in server rack. Each rack unit (RU) = 1.75 inches. Includes placement, power, airflow."
  },
  {
    id: 6,
    front: "What is a wiring diagram?",
    back: "Detailed cable connections: patch panel mappings, cable IDs, endpoints, types/lengths. Essential for cable tracing."
  },
  {
    id: 7,
    front: "What's in network policy documentation?",
    back: "AUP, password policies, security policies, access control, backup/DR procedures, incident response, change management."
  },
  {
    id: 8,
    front: "What is configuration documentation?",
    back: "Device configs: IP schemes, VLANs, routing, ACLs, firewall rules. Include startup/running configs and firmware versions."
  },
  {
    id: 9,
    front: "What is IPAM documentation?",
    back: "Centralized IP address tracking. Shows assignments, subnet allocations, DHCP scopes, DNS records. Prevents IP conflicts."
  },
  {
    id: 10,
    front: "What is a site survey report?",
    back: "Physical site assessment: infrastructure, cable paths, wireless coverage, environmental conditions, power, security. Includes photos/measurements."
  },
  {
    id: 11,
    front: "What is change management?",
    back: "Formal process for network changes. Steps: request, approval, planning, testing, implementation, documentation, review. Prevents outages."
  },
  {
    id: 12,
    front: "What's in a change request?",
    back: "Description, risk assessment, impact analysis, implementation plan, rollback plan, testing, maintenance window, approvals."
  },
  {
    id: 13,
    front: "What is a rollback plan?",
    back: "Step-by-step procedures to undo a change if it fails. Include config backups, time required, validation. Create BEFORE implementation."
  },
  {
    id: 14,
    front: "Why document changes after implementation?",
    back: "Updates diagrams, keeps configs current, captures lessons learned. Prevents outdated docs. Documentation rot = disaster."
  },
  {
    id: 15,
    front: "What are naming conventions?",
    back: "Standardized rules for naming devices/interfaces/VLANs. Example: SW-BLDG1-FL2-IDF03. Provides consistency and instant identification."
  },
  {
    id: 16,
    front: "Good device naming convention structure?",
    back: "Include: type, location, function, number. Example: RTR-HQ-01 or NORTH-03-SW12. Be consistent and document it."
  },
  {
    id: 17,
    front: "What should cable labels include?",
    back: "Both ends: source, destination, cable ID, date, installer. Example: 'BLDG1-IDF3-P12 to SW-CORE-01-G1/0/1 - CAB-1234'."
  },
  {
    id: 18,
    front: "What is asset management documentation?",
    back: "Tracks hardware: serial numbers, purchase dates, warranty, location, maintenance history, EOL dates. For inventory and lifecycle planning."
  },
  {
    id: 19,
    front: "What is a Standard Operating Procedure (SOP)?",
    back: "Step-by-step document for common tasks. Provides consistency, training, reduces errors. Anyone should be able to follow."
  },
  {
    id: 20,
    front: "What's in disaster recovery documentation?",
    back: "Contact lists, recovery procedures, config backups (offsite), diagrams, inventory, vendor info, RTO/RPO, alternate sites."
  },
  {
    id: 21,
    front: "What is a network baseline?",
    back: "Documents normal performance: bandwidth, latency, errors, CPU/memory. Used to identify anomalies and troubleshoot."
  },
  {
    id: 22,
    front: "What's in port documentation?",
    back: "Per port: number, VLAN, connected device (name/MAC/IP), cable ID, user/dept, PoE status, speed/duplex, last change."
  },
  {
    id: 23,
    front: "What is version control for configs?",
    back: "Tracks config changes over time (Git). Each change: timestamped, attributed, comparable, rollback-able. Provides audit trail."
  },
  {
    id: 24,
    front: "Scenario: Where's the backup server? How do docs help?",
    back: "Check: physical diagram (location), logical diagram (IP), asset management (serial), rack diagram (RU), IPAM (hostname). Answer in 30 seconds."
  },
  {
    id: 25,
    front: "What's in a diagram legend?",
    back: "Defines all symbols/colors: device icons, connection types, color codes. Makes diagrams readable by anyone."
  },
  {
    id: 26,
    front: "As-built vs design documentation?",
    back: "Design: planned network (before). As-built: actual deployed network (after). MUST update design to match as-built."
  },
  {
    id: 27,
    front: "How often to update documentation?",
    back: "Immediately after changes. Quarterly audit. Annual major review. Stale docs worse than no docs."
  },
  {
    id: 28,
    front: "Common documentation mistakes?",
    back: "Not updating, too complex, single storage location, no access control, no standard format, single person knows, paper only."
  },
  {
    id: 29,
    front: "Where to store documentation?",
    back: "Multiple locations: encrypted network share, physical binder, cloud/offsite, version control. Need-to-know access only."
  },
  {
    id: 30,
    front: "What docs for: outage, VLAN planning, switch replacement, DR?",
    back: "Outage: logical diagram, baseline, configs. VLAN: logical, IPAM, configs. Replace: physical, rack, config backup, wiring. DR: ALL docs offsite."
  }
];