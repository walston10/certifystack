// Flashcards for Lesson 16: Network Documentation and Diagrams

export const lesson16Flashcards = [
  {
    id: 1,
    front: "Why is network documentation critical?",
    back: "Documentation enables: faster troubleshooting (know what should be), easier onboarding (new staff understand network), change planning (impact analysis), disaster recovery (rebuild from docs), compliance (prove configuration), capacity planning. Outdated/missing docs = downtime, confusion, mistakes. Documentation is insurance."
  },
  {
    id: 2,
    front: "What is a physical topology diagram?",
    back: "Physical diagram shows the actual physical layout: device locations, cable runs, rack positions, building floors, data center rows. Includes: device models, serial numbers, port numbers, cable types, patch panel connections. Used for: physical troubleshooting, cable tracing, hardware planning, site surveys."
  },
  {
    id: 3,
    front: "What is a logical topology diagram?",
    back: "Logical diagram shows how data flows: IP addresses, subnets, VLANs, routing protocols, logical connections. Ignores physical location. Shows: Layer 3 relationships, routing paths, security zones, administrative boundaries. Used for: troubleshooting connectivity, planning changes, understanding traffic flow."
  },
  {
    id: 4,
    front: "What's the difference between physical and logical diagrams?",
    back: "Physical: WHERE devices are (locations, racks, cables). Shows actual hardware placement. Logical: HOW devices communicate (IP addressing, VLANs, routing). Shows data flow. Example: Physical shows switch in Rack 5. Logical shows switch has VLAN 10 (192.168.10.0/24) and VLAN 20 (192.168.20.0/24). Need both!"
  },
  {
    id: 5,
    front: "What is a rack diagram?",
    back: "Rack diagram shows equipment layout within a server rack (front/rear view). Each rack unit (RU/U) is 1.75 inches. Shows: device placement by RU, power requirements, cable management, weight distribution, airflow considerations. Critical for: data center planning, power calculations, cooling design."
  },
  {
    id: 6,
    front: "What is a wiring diagram?",
    back: "Wiring diagram shows detailed cable connections: patch panel to switch port mappings, cable IDs, connection endpoints, cable types/lengths. Documents: which cable goes where, labeling scheme, testing results. Essential for: cable tracing, troubleshooting, moves/adds/changes, avoiding disruption."
  },
  {
    id: 7,
    front: "What should network policy documentation include?",
    back: "Acceptable Use Policy (AUP), password policies, security policies, access control policies, backup policies, disaster recovery procedures, incident response plans, change management procedures. Defines: what's allowed, security requirements, user responsibilities, consequences of violations. Legal protection and standardization."
  },
  {
    id: 8,
    front: "What is configuration documentation?",
    back: "Record of device configurations: IP addressing schemes, VLAN assignments, routing protocol settings, ACLs, firewall rules, QoS policies, SNMP community strings. Include: startup-config, running-config, firmware versions. Store: version control, secure location. Critical for: disaster recovery, consistency, troubleshooting."
  },
  {
    id: 9,
    front: "What is IPAM (IP Address Management) documentation?",
    back: "Centralized tracking of IP address allocation. Documents: which IPs assigned to what devices/users, subnet allocations, DHCP scopes, DNS records, available/used addresses. Prevents: IP conflicts, subnet exhaustion, lost addresses. Tools: Excel (small), IPAM software (large). Essential for growing networks."
  },
  {
    id: 10,
    front: "What is a site survey report?",
    back: "Site survey documents physical site assessment: existing infrastructure, cable paths, equipment locations, wireless coverage/interference, environmental conditions (temp, humidity), power availability, security requirements. Used before: deployments, upgrades, wireless installations. Includes: photos, measurements, recommendations."
  },
  {
    id: 11,
    front: "What is change management and why is it critical?",
    back: "Change management is formal process for making network changes. Steps: request, approval, planning, testing, implementation, documentation, review. Prevents: unplanned outages, configuration errors, security holes. Requires: change windows, rollback plans, stakeholder notification. Most outages = poorly planned changes."
  },
  {
    id: 12,
    front: "What should a change request include?",
    back: "Change description (what/why), risk assessment, impact analysis (affected systems/users), implementation plan (step-by-step), rollback plan (undo if fails), testing plan, maintenance window, required resources, approval signatures. Document BEFORE making change. Protects you and organization."
  },
  {
    id: 13,
    front: "What is a rollback plan?",
    back: "Rollback plan documents how to undo a change if it fails. Includes: step-by-step reversal procedures, config backups, time required, validation steps. Create BEFORE implementation. Test if possible. Good rollback plan: specific (not 'restore backup'), tested, immediately available. Insurance policy for changes."
  },
  {
    id: 14,
    front: "Why document network changes after implementation?",
    back: "Post-change documentation ensures: diagrams updated, config backups current, procedures reflect reality, lessons learned captured, knowledge base updated. Prevents: outdated documentation, repeated mistakes, confusion. Documentation rot = network changes but docs don't = disaster waiting to happen."
  },
  {
    id: 15,
    front: "What are naming conventions and why use them?",
    back: "Naming conventions are standardized rules for naming devices, interfaces, VLANs, files. Example: SW-BLDG1-FL2-IDF03 (Switch, Building 1, Floor 2, IDF 3). Benefits: instantly identify device purpose/location, easier management, consistency, professionalism. Document the convention. Enforce it. Critical for large networks."
  },
  {
    id: 16,
    front: "What is a good device naming convention structure?",
    back: "Include: device type, location, function, number. Example formats: <TYPE>-<LOCATION>-<NUMBER> (RTR-HQ-01), <BUILDING>-<FLOOR>-<TYPE><NUM> (NORTH-03-SW12). Be consistent! Document scheme. Examples: RTR=router, SW=switch, FW=firewall, AP=access point. Location codes: HQ, REMOTE1, BLDGA."
  },
  {
    id: 17,
    front: "What should cable labeling include?",
    back: "Both ends must be labeled with: source location, destination location, cable ID, date installed, installer initials. Example: 'BLDG1-IDF3-P12 to SW-CORE-01-G1/0/1 - CAB-1234'. Use: label maker, durable labels, clear text. Good labeling = faster troubleshooting, no guessing which cable is which."
  },
  {
    id: 18,
    front: "What is asset management documentation?",
    back: "Tracking all network hardware: serial numbers, purchase dates, warranty info, location, assigned user, maintenance history, EOL dates. Includes: switches, routers, APs, servers, UPS. Benefits: warranty tracking, lifecycle planning, inventory control, theft prevention. Tools: spreadsheet, asset management software, barcodes/RFID."
  },
  {
    id: 19,
    front: "What is a Standard Operating Procedure (SOP)?",
    back: "SOP is step-by-step document for common tasks: adding users, configuring VLANs, backup procedures, password resets, switch replacements. Benefits: consistency, training tool, reduce errors, faster execution. Format: numbered steps, screenshots, expected results. Keep updated. Anyone should be able to follow."
  },
  {
    id: 20,
    front: "What should disaster recovery documentation include?",
    back: "Contact lists (staff, vendors), recovery procedures (step-by-step), config backups (stored offsite), network diagrams, hardware inventory, vendor support info, RTO/RPO targets, alternate site info, communication plan. Test regularly. Store: secure, offsite, accessible during disaster. Lives or dies with documentation quality."
  },
  {
    id: 21,
    front: "What is a network baseline and why document it?",
    back: "Baseline documents normal network performance: bandwidth utilization, latency, error rates, CPU/memory usage, connection counts. Captured during normal operations. Use to: identify anomalies, troubleshoot performance, capacity planning, prove 'it's not the network'. Without baseline, you're guessing what's normal vs abnormal."
  },
  {
    id: 22,
    front: "What information should be in a port documentation spreadsheet?",
    back: "For each switch port: port number, VLAN assignment, connected device (name/MAC/IP), cable ID, user/department, PoE status, port speed/duplex, enabled/disabled, last change date. Helps: troubleshooting, planning, auditing, moves/adds/changes. Update after every change. Critical for large switch deployments."
  },
  {
    id: 23,
    front: "What is version control for network configs?",
    back: "Version control tracks configuration changes over time using tools like Git. Each change: timestamped, attributed to person, compared to previous version, can be rolled back. Benefits: audit trail, accountability, easy rollback, compare versions. Never overwrite old configs - save as versions. Professional networks use version control."
  },
  {
    id: 24,
    front: "Quick scenario: New employee asks 'where is the backup server?' How does good documentation help?",
    back: "Check: 1) Physical diagram (shows rack/location), 2) Logical diagram (shows IP address), 3) Asset management (shows serial number, purchase date), 4) Rack diagram (shows exact RU position), 5) IPAM (confirms IP/hostname). Answer question in 30 seconds vs hours searching. This is why we document!"
  },
  {
    id: 25,
    front: "What should a network diagram legend include?",
    back: "Legend defines all symbols/colors used. Include: device icons (router, switch, firewall, server), connection types (fiber, copper, wireless, WAN), colors (production=green, test=yellow, offline=red), special notations. Make diagrams readable by anyone. Standard symbols: Cisco icons, cloud shapes, cylinder for databases."
  },
  {
    id: 26,
    front: "What is the difference between as-built and design documentation?",
    back: "Design documentation: planned network (before implementation) - proposed IPs, theoretical layout, estimated costs. As-built documentation: actual deployed network - real IPs, actual cable runs, real device locations. CRITICAL: update design to match as-built after implementation. Deployed network rarely matches design exactly."
  },
  {
    id: 27,
    front: "How often should network documentation be reviewed/updated?",
    back: "Update immediately after: any network change, device addition/removal, config change, cable runs. Review quarterly: audit for accuracy, check for undocumented changes, validate contacts. Annual: major review, update diagrams, verify all docs current. Stale documentation worse than no documentation - creates false confidence."
  },
  {
    id: 28,
    front: "What are common network documentation mistakes?",
    back: "1) Not updating after changes (stale docs), 2) Too complex/detailed (unusable), 3) Stored in one place (lost if unavailable), 4) No access control (security risk), 5) No standard format (chaos), 6) Only one person knows (single point of failure), 7) Paper only (destroyed in disaster)."
  },
  {
    id: 29,
    front: "Where should network documentation be stored?",
    back: "Multiple locations: 1) Network file share (encrypted, backed up), 2) Physical binder (emergency access), 3) Cloud/offsite (disaster recovery), 4) Version control system (Git for configs). Access control: need-to-know basis. NOT: unlocked filing cabinet, unsecured share, single laptop. Lose docs = disaster."
  },
  {
    id: 30,
    front: "Speed drill: What docs do you need for these tasks? - Troubleshooting outage, planning VLAN, replacing switch, disaster recovery",
    back: "Outage: logical diagram, baseline, configs, contact list. VLAN: logical diagram, IPAM, switch configs. Replace switch: physical diagram, rack diagram, config backup, wiring diagram. Disaster recovery: ALL documentation offsite! Know what docs serve which purpose."
  }
];