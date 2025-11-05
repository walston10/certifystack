// Quiz for Lesson 16: Network Documentation and Diagrams

export const lesson16Quiz = [
  {
    id: 1,
    question: "A network technician is troubleshooting connectivity issues and needs to quickly identify which switch port connects to a specific office. The cable runs through walls and a drop ceiling. What documentation would be most helpful in this situation?",
    options: [
      "Logical network diagram showing IP addressing schemes",
      "Wiring diagram with labeled cable runs showing physical endpoints and patch panel mappings",
      "Network policy document outlining acceptable use",
      "Change management log from the past month"
    ],
    correct: 1,
    explanation: "Wiring diagrams document physical cable infrastructure, showing: cable runs, patch panel port mappings, wall jack labels, and endpoint connections. This is essential for troubleshooting physical layer issues. Without wiring diagrams, technicians waste hours tracing cables. Best practice: label cables on both ends with unique identifiers (e.g., 'A-101' for Building A, Room 101) and document in a spreadsheet or drawing."
  },
  {
    id: 2,
    question: "During a security audit, the auditor asks for documentation showing IP address assignments, VLAN memberships, and which devices are authorized on the network. What type of documentation should the network team provide?",
    options: [
      "Physical topology diagram showing device locations",
      "IPAM (IP Address Management) documentation with IP allocations, MAC addresses, hostnames, and VLAN assignments",
      "Rack elevation diagram showing equipment mounting",
      "Standard operating procedures for user onboarding"
    ],
    correct: 1,
    explanation: "IPAM documentation is the authoritative source for: IP address assignments (which IPs are allocated/available), subnet information, MAC-to-IP mappings, hostname associations, VLAN assignments, and DHCP scopes. This is critical for security (identifying unauthorized devices), troubleshooting (IP conflicts), and capacity planning (subnet exhaustion). Can be maintained in spreadsheets, databases, or dedicated IPAM tools (SolarWinds, Infoblox, phpIPAM)."
  },
  {
    id: 3,
    question: "A company's change management process requires that all network changes be documented before implementation. A network engineer wants to add a new VLAN to all distribution switches. What should be documented in the change request?",
    options: [
      "Only the date and time of the change",
      "Detailed description of change, affected systems, implementation steps, rollback plan, and testing procedures",
      "Just the engineer's name and manager approval",
      "Network diagram updates only"
    ],
    correct: 1,
    explanation: "Comprehensive change documentation includes: 1) What's changing (specific configuration, systems affected), 2) Why (business justification), 3) When (scheduled maintenance window), 4) How (detailed implementation steps), 5) Rollback plan (how to undo if it fails), 6) Testing/verification procedures, 7) Approval chain, 8) Communication plan. This reduces outages caused by poorly planned changes and ensures accountability."
  },
  {
    id: 4,
    question: "A network administrator creates a diagram showing all devices (routers, switches, firewalls), their interconnections, IP addresses, and routing protocols, but doesn't show the physical location of devices or cable types. What type of diagram is this?",
    options: [
      "Physical topology diagram showing device placement and cabling",
      "Logical topology diagram showing network architecture and data flow",
      "Wiring diagram showing cable infrastructure",
      "Rack diagram showing equipment mounting positions"
    ],
    correct: 1,
    explanation: "Logical diagrams show the network's logical structure: devices, connections, IP addresses, VLANs, routing protocols, and data flow—without physical details. Physical diagrams show actual device locations, cable runs, rack positions, and physical connections. Both are needed: logical diagrams for understanding network architecture and troubleshooting routing; physical diagrams for cable management and hardware maintenance. Common mistake: only maintaining one type."
  },
  {
    id: 5,
    question: "A data center manager needs to plan the installation of new servers and network equipment in a 42U rack that's currently 60% full. What documentation provides a visual representation of equipment placement, mounting positions, and available space?",
    options: [
      "Logical network diagram showing device connections",
      "Rack elevation diagram showing front and rear views with U positions labeled",
      "Wiring diagram showing cable connections",
      "Network policy documenting equipment standards"
    ],
    correct: 1,
    explanation: "Rack elevation diagrams (rack diagrams) show front/rear views of equipment racks with: each device's position (1U, 2U, etc.), U-numbering (1-42 for standard rack), power requirements, weight distribution, and available space. Essential for: capacity planning, airflow management (hot aisle/cold aisle), power circuit planning, and cable management. Tools: Microsoft Visio, Lucidchart, RackTables, or specialized data center management software."
  },
  {
    id: 6,
    question: "After implementing a network change that caused a partial outage, the team successfully restored service using the documented rollback procedures. What should be done after the incident is resolved?",
    options: [
      "Nothing - the problem is fixed, move on to the next task",
      "Document lessons learned, update procedures, and conduct a post-incident review to prevent recurrence",
      "Delete the change documentation to avoid embarrassment",
      "Only update the documentation if management asks"
    ],
    correct: 1,
    explanation: "Post-incident documentation and review are critical for organizational learning. Include: 1) What happened (timeline, root cause), 2) Impact (systems affected, duration), 3) Resolution steps taken, 4) What worked well, 5) What didn't work, 6) Lessons learned, 7) Action items to prevent recurrence. This creates institutional knowledge and improves future response. Update runbooks, procedures, and training based on findings."
  },
  {
    id: 7,
    question: "A network team maintains comprehensive documentation of all configurations, but when a critical router fails at 2 AM, they discover the documentation hasn't been updated in 6 months and doesn't reflect recent changes. What best practice was violated?",
    options: [
      "Documentation should be printed and stored off-site",
      "Documentation must be updated whenever changes are made, not as a periodic afterthought",
      "All documentation should be password protected",
      "Only senior engineers should maintain documentation"
    ],
    correct: 1,
    explanation: "Documentation must be a living process, not a one-time event. Best practices: 1) Update documentation as part of change process (not optional), 2) Include documentation updates in change approval criteria, 3) Version control for tracking changes, 4) Regular audits to verify accuracy, 5) Make it easy to update (accessible tools). Outdated documentation is worse than no documentation—it leads to incorrect assumptions during troubleshooting."
  },
  {
    id: 8,
    question: "A company is preparing for a compliance audit and needs to demonstrate their network baseline. What should be included in comprehensive network baseline documentation?",
    options: [
      "Only current device configurations",
      "Normal network performance metrics, bandwidth utilization, error rates, and typical traffic patterns to compare against current state",
      "Just IP address assignments",
      "Physical device locations only"
    ],
    correct: 1,
    explanation: "Network baselines document 'normal' operating conditions: bandwidth utilization (average/peak), latency, packet loss, error rates, CPU/memory usage, application performance, traffic patterns (by time/protocol), and connection counts. Baselines enable: anomaly detection (spotting problems), capacity planning (when to upgrade), performance trending, and troubleshooting (is this normal or a problem?). Establish baselines during stable periods, update quarterly."
  },
  {
    id: 9,
    question: "A network engineer conducts a wireless site survey for a new office building and creates a document showing signal strength measurements, AP placement recommendations, and coverage predictions. What type of documentation is this?",
    options: [
      "Logical network diagram",
      "Site survey report with heat maps and RF analysis",
      "Standard operating procedure",
      "Change management request"
    ],
    correct: 1,
    explanation: "Site survey reports document: 1) Current RF environment (interference, existing networks), 2) Coverage requirements (signal strength targets, capacity needs), 3) Predictive or actual heat maps (signal strength visualization), 4) AP placement recommendations with mounting details, 5) Channel plan, 6) Expected performance. Two types: predictive (pre-deployment simulation) and post-deployment validation. Essential for proper wireless design—guessing AP placement leads to poor coverage and performance."
  },
  {
    id: 10,
    question: "A disaster recovery plan states that network configurations should be backed up and stored off-site. A fire destroys the main data center. What should be included in the configuration backups to enable network restoration?",
    options: [
      "Only firewall rule sets",
      "Running configurations from all network devices (routers, switches, firewalls), including startup configs, ACLs, routing tables, and VLAN databases",
      "Just device hostnames and IP addresses",
      "Network diagrams only (no actual configurations)"
    ],
    correct: 1,
    explanation: "Configuration backups must include: 1) Running-config and startup-config from all devices, 2) ACLs and firewall rules, 3) VLAN databases, 4) Routing protocol configurations, 5) QoS policies, 6) Authentication configs (RADIUS/TACACS+), 7) Device management credentials (encrypted), 8) License files. Automate backups (daily/after changes) using tools (Rancid, Oxidized, SolarWinds), store in geographically separate location, test restoration procedures."
  },
  {
    id: 11,
    question: "An organization uses a consistent naming convention where devices are named 'SITE-TYPE-FLOOR-NUMBER' (e.g., 'NYC-SW-03-01' for New York City Switch, Floor 3, Device 1). What is the primary benefit of this standardized approach?",
    options: [
      "Makes device names longer and more complex",
      "Enables quick identification of device location, type, and purpose without consulting documentation",
      "Prevents unauthorized users from guessing device names",
      "Reduces the need for IP addresses"
    ],
    correct: 1,
    explanation: "Standardized naming conventions provide immediate context: device location, type, function, and sometimes management details. Good conventions are: descriptive but concise, consistent across organization, incorporate geography/building/floor, indicate device type, and avoid cryptic abbreviations. Benefits: faster troubleshooting (know what/where), easier inventory management, better communication (everyone understands names), and simplified automation (scripting based on predictable names)."
  },
  {
    id: 12,
    question: "A network team maintains separate documents for: network diagrams (Visio), IP addresses (Excel), device configurations (text files on network share), and policies (Word docs). During an incident, time is wasted searching multiple locations. What improvement should be made?",
    options: [
      "Keep everything in separate locations but make them easier to find",
      "Implement a centralized documentation system or wiki where all network documentation is linked and searchable",
      "Only maintain network diagrams since they contain most information",
      "Email all documentation to the team weekly"
    ],
    correct: 1,
    explanation: "Centralized documentation systems (wikis, portals, specialized tools) provide: single source of truth, searchability, version control, access control, linking between documents, and collaboration features. Options: Confluence, SharePoint, NetBox, Device42, or open-source wikis. Key features: easy to update, accessible during incidents (not on same network), backed up, role-based access, and integration with monitoring/CMDB."
  },
  {
    id: 13,
    question: "A junior technician asks what the difference is between 'network policies' and 'standard operating procedures (SOPs)'. What is the correct explanation?",
    options: [
      "They are the same thing with different names",
      "Policies define rules and requirements (the 'what' and 'why'); SOPs provide step-by-step instructions for executing tasks (the 'how')",
      "Policies are for management only; SOPs are for technicians only",
      "SOPs are optional; policies are mandatory"
    ],
    correct: 1,
    explanation: "Policies are high-level guidelines defining: what is required/prohibited, why (business/security reasons), who is responsible, and consequences of non-compliance. Examples: acceptable use policy, password policy, change management policy. SOPs are detailed procedures: step-by-step instructions for specific tasks, screenshots/examples, troubleshooting steps, and verification checks. Example SOP: 'How to provision a new VLAN' or 'How to add users to Active Directory.' Both are mandatory and complementary."
  },
  {
    id: 14,
    question: "During a network expansion project, multiple teams make changes simultaneously. Two engineers unknowingly configure overlapping IP subnets in different buildings, causing routing conflicts. What documentation practice would have prevented this?",
    options: [
      "Better physical security on network equipment",
      "Centralized IPAM documentation with real-time updates and coordination before subnet allocation",
      "More frequent backups of device configurations",
      "Stronger passwords on network devices"
    ],
    correct: 1,
    explanation: "Centralized IPAM prevents subnet conflicts through: 1) Single authoritative source for IP allocations, 2) Real-time visibility (who's using what), 3) Allocation requests/approval workflow, 4) Automated conflict detection, 5) Historical tracking (who allocated when). Without IPAM, duplicate subnets, IP conflicts, and 'shadow IT' subnets are common. IPAM is essential for organizations with multiple network administrators or sites."
  },
  {
    id: 15,
    question: "A company's disaster recovery documentation specifies RTO (Recovery Time Objective) of 4 hours and RPO (Recovery Point Objective) of 1 hour for their network services. What do these metrics mean?",
    options: [
      "RTO: maximum acceptable downtime; RPO: maximum acceptable data loss timeframe",
      "RTO: time to detect failures; RPO: time to report problems",
      "RTO: routine maintenance window; RPO: planned outage duration",
      "RTO: reboot time objective; RPO: repair priority order"
    ],
    correct: 0,
    explanation: "RTO = Recovery Time Objective: maximum acceptable downtime before service must be restored (4 hours means service must be back within 4 hours of failure). RPO = Recovery Point Objective: maximum acceptable data loss (1 hour means you can lose up to 1 hour of data). These drive backup frequency and DR architecture: 1-hour RPO requires hourly backups/replication; 4-hour RTO requires warm/hot site and tested procedures. Lower RTO/RPO = higher cost."
  }
];

// Export for use in quiz component
export default lesson16Quiz;