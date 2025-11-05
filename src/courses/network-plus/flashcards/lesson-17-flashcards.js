// Flashcards for Lesson 17: Monitoring Tools and SNMP

export const lesson17Flashcards = [
  {
    id: 1,
    front: "What is SNMP (Simple Network Management Protocol)?",
    back: "SNMP is protocol for monitoring and managing network devices. Uses: UDP port 161 (queries), UDP port 162 (traps). Components: Manager (monitoring system), Agent (on devices), MIB (database of what can be monitored). Can: read stats, receive alerts, change configs. Industry standard for network monitoring."
  },
  {
    id: 2,
    front: "What are the three components of SNMP?",
    back: "1) SNMP Manager (NMS - Network Management System): monitoring software that polls devices. 2) SNMP Agent: software on devices that responds to queries and sends traps. 3) MIB (Management Information Base): database defining what can be monitored (OIDs). Manager asks agent about MIB values."
  },
  {
    id: 3,
    front: "What is an SNMP trap?",
    back: "SNMP trap is alert sent from agent to manager when event occurs (unsolicited message). Examples: interface down, high CPU, authentication failure, power supply failure. Port 162. Push notification vs polling (manager pulls data). Critical events trigger immediate traps vs waiting for next poll."
  },
  {
    id: 4,
    front: "What's the difference between SNMP polling and traps?",
    back: "Polling: Manager regularly queries agents for data (pull model). Scheduled intervals. Manager initiates. Uses port 161. Traps: Agent sends alerts to manager when events occur (push model). Event-driven. Agent initiates. Uses port 162. Use both: polling for stats, traps for urgent alerts."
  },
  {
    id: 5,
    front: "What are the differences between SNMPv1, v2c, and v3?",
    back: "SNMPv1: original, community string (password), no encryption, insecure. SNMPv2c: added bulk transfers, 64-bit counters, still uses community strings. SNMPv3: adds AUTHENTICATION (username/password), ENCRYPTION (AES/DES), most secure. ALWAYS use SNMPv3 in production. v1/v2c send passwords in clear text!"
  },
  {
    id: 6,
    front: "What is an SNMP community string?",
    back: "Community string is password for SNMP access in v1/v2c. Two types: Read-only (RO): view-only access. Read-write (RW): can modify configs. Default: 'public' (RO), 'private' (RW). ALWAYS change defaults! Sent unencrypted. Like a password everyone can see. This is why SNMPv3 is required."
  },
  {
    id: 7,
    front: "What is a MIB (Management Information Base)?",
    back: "MIB is hierarchical database of objects that can be monitored via SNMP. Each object has OID (Object Identifier) like 1.3.6.1.2.1.1.1 (system description). Defines: what data available, data types, how to access. Standard MIBs (RFC) + vendor-specific MIBs. MIB browser tools navigate the tree structure."
  },
  {
    id: 8,
    front: "What is syslog?",
    back: "Syslog is protocol for centralized logging. Devices send log messages to syslog server. Uses UDP port 514 (TCP 6514 for secure). Benefits: centralized storage, correlation across devices, long-term retention, alerting, compliance. Critical for: troubleshooting, security investigations, auditing. All devices should log to syslog server."
  },
  {
    id: 9,
    front: "What are the syslog severity levels (0-7)?",
    back: "0-Emergency: system unusable. 1-Alert: immediate action needed. 2-Critical: critical conditions. 3-Error: error conditions. 4-Warning: warning conditions. 5-Notice: normal but significant. 6-Informational: informational messages. 7-Debug: debug messages. Lower number = more severe. Configure appropriate logging levels to avoid overwhelming server."
  },
  {
    id: 10,
    front: "What is NetFlow?",
    back: "NetFlow (Cisco) collects IP traffic statistics showing who is talking to who. Records: source/dest IP, ports, protocol, bytes/packets, timestamps. Benefits: bandwidth analysis, traffic patterns, identify top talkers, security monitoring, capacity planning. Lightweight vs full packet capture. Sampling available to reduce overhead."
  },
  {
    id: 11,
    front: "What's the difference between NetFlow, sFlow, and IPFIX?",
    back: "NetFlow: Cisco proprietary, analyzes every packet or sampling. sFlow: open standard, random sampling (less CPU intensive). IPFIX: open standard evolution of NetFlow, vendor-neutral. All provide: traffic flow data, bandwidth analysis. Choose based on: vendor support, features needed, performance requirements."
  },
  {
    id: 12,
    front: "What is a NetFlow collector?",
    back: "NetFlow collector is server that receives, stores, and analyzes flow data from routers/switches. Provides: reports, graphs, alerts, historical analysis, top talkers, traffic trends. Examples: SolarWinds, PRTG, ntopng, Plixer Scrutinizer. Requires: adequate storage (flows accumulate), processing power for analysis."
  },
  {
    id: 13,
    front: "What network performance metrics should you monitor?",
    back: "Interface statistics: utilization (bandwidth %), errors, discards, collisions. CPU utilization: high CPU = performance issues. Memory utilization: memory leaks, insufficient RAM. Latency: round-trip time (<50ms good). Jitter: latency variation (<30ms for VoIP). Packet loss: should be near 0%. Throughput: actual vs expected speeds."
  },
  {
    id: 14,
    front: "What is bandwidth utilization and what's considered normal?",
    back: "Bandwidth utilization = percentage of link capacity in use. Calculate: (current traffic / link capacity) × 100. Normal: <70% average. Concern: >80% sustained. Critical: >90%. High utilization = congestion, packet loss, latency. Monitor: inbound and outbound separately. Plan upgrades before hitting 70%."
  },
  {
    id: 15,
    front: "What is interface error monitoring and what causes errors?",
    back: "Monitor: CRC errors (bad frames), input errors (corrupted data), output errors (transmission failures), collisions (shouldn't exist in switched networks), runts/giants (wrong frame sizes). Causes: bad cables, duplex mismatch, interference, faulty hardware. Even small error rates indicate problems. Investigate any non-zero errors."
  },
  {
    id: 16,
    front: "What is availability monitoring?",
    back: "Availability monitoring checks if devices/services are up and responding. Methods: ICMP ping (layer 3 reachability), TCP port checks (service availability), SNMP polling (device responsive), HTTP/HTTPS checks (web services). Measure: uptime percentage (99.9%, 99.99%, 99.999%). Alert when down. Track: MTBF, MTTR."
  },
  {
    id: 17,
    front: "What should environmental monitoring track?",
    back: "Temperature: data centers should be 64-80°F, alert if too hot/cold. Humidity: 40-60% ideal, low = static, high = condensation. Power: UPS battery status, power consumption, redundant supplies. Airflow: proper cooling, no blockages. Water: leak detection in data centers. Physical access: door sensors, cameras."
  },
  {
    id: 18,
    front: "What is PRTG?",
    back: "PRTG (Paessler Router Traffic Grapher) is all-in-one network monitoring tool. Monitors: bandwidth, availability, uptime, CPU/memory, sensors for everything. Features: web interface, auto-discovery, alerting, reporting, maps. Free: up to 100 sensors. Popular for: SMBs, easy setup. Agentless (uses SNMP, WMI, NetFlow)."
  },
  {
    id: 19,
    front: "What is SolarWinds?",
    back: "SolarWinds is enterprise network monitoring suite. Products: NPM (Network Performance Monitor), NCM (Network Configuration Manager), NTA (NetFlow Traffic Analyzer). Features: comprehensive monitoring, network mapping, alerting, config management. Enterprise-grade, powerful, but expensive. Popular in large organizations."
  },
  {
    id: 20,
    front: "What is Nagios?",
    back: "Nagios is open-source monitoring platform. Monitors: servers, networks, applications, services. Extensible via plugins. Features: alerting, reporting, web interface. Pros: free, flexible, large community. Cons: complex setup, dated interface. Fork: Icinga (modern interface). Popular choice for budget-conscious organizations."
  },
  {
    id: 21,
    front: "What is Zabbix?",
    back: "Zabbix is open-source enterprise monitoring. Features: auto-discovery, web interface, customizable dashboards, templates, distributed monitoring, API. Monitors: networks, servers, apps, VMs, cloud. Pros: free, powerful, scalable. Uses: agents or agentless (SNMP, IPMI). Good alternative to commercial tools."
  },
  {
    id: 22,
    front: "What should trigger an alert in network monitoring?",
    back: "Device down (critical), high CPU/memory (>80% for 5+ min), high bandwidth (>80%), interface errors (any non-zero), configuration changes, authentication failures, environmental issues (temperature), backup failures. Set: appropriate thresholds, escalation procedures. Too many alerts = ignored (alert fatigue). Tune carefully."
  },
  {
    id: 23,
    front: "What is SNMP's GET operation?",
    back: "GET requests specific information from agent (one OID at a time). Example: 'What is CPU utilization?' GET-NEXT: retrieves next OID in MIB tree (walk the tree). GET-BULK (v2c/v3): efficiently retrieves multiple OIDs. Manager sends GET, agent responds with value. Used for polling and on-demand queries."
  },
  {
    id: 24,
    front: "What is SNMP's SET operation?",
    back: "SET modifies configuration on device via SNMP. Example: change interface description, enable/disable port, modify VLAN. Requires: read-write community string (v1/v2c) or appropriate credentials (v3). Dangerous: can break network if misused. Many organizations disable SET or restrict to specific IPs. Read-only safer."
  },
  {
    id: 25,
    front: "Quick scenario: Users report slow network. What do you check first with monitoring tools?",
    back: "Check: 1) Bandwidth utilization (link saturated?), 2) Interface errors (cable/hardware issue?), 3) CPU/memory on switches/routers (overloaded?), 4) NetFlow/top talkers (who's using bandwidth?), 5) Latency metrics (increased delay?). Monitoring tools provide data for diagnosis. Without monitoring, you're guessing."
  },
  {
    id: 26,
    front: "What is baseline vs threshold monitoring?",
    back: "Baseline: normal network behavior (traffic patterns, utilization, response times). Established over time. Threshold: static value that triggers alert when exceeded. Example: Baseline shows CPU normally 20-30%. Set threshold at 80%. Dynamic thresholds: alert when deviation from baseline (not static value). Both approaches valuable."
  },
  {
    id: 27,
    front: "What is SNMPv3's authentication and encryption?",
    back: "Authentication (integrity): MD5 or SHA ensures message not tampered with, verifies sender. Encryption (privacy): DES, 3DES, or AES encrypts data so eavesdroppers can't read. Three security levels: noAuthNoPriv (like v1/v2c), authNoPriv (auth only), authPriv (auth + encryption - MOST SECURE). Always use authPriv with SHA and AES."
  },
  {
    id: 28,
    front: "What is the difference between flow data and packet capture?",
    back: "Flow data: metadata about conversations (who, when, how much). Small data size, historical analysis, trends. NO payload. NetFlow/sFlow. Packet capture: full packet contents including payload. Huge data size, detailed troubleshooting, security forensics. Wireshark/tcpdump. Use flows for trends, packet capture for deep investigation."
  },
  {
    id: 29,
    front: "Why send logs to a centralized syslog server instead of storing locally?",
    back: "Centralized benefits: 1) Devices have limited storage (logs overwrite), 2) Correlate events across devices, 3) Attacker can't delete logs (they're offsite), 4) Long-term retention, 5) Powerful search/analysis, 6) Compliance requirements, 7) Survives device failure. Local logs lost on reboot/failure. Syslog is critical."
  },
  {
    id: 30,
    front: "Speed drill: Match protocol/tool to purpose - SNMP, Syslog, NetFlow, ICMP ping, Wireshark",
    back: "SNMP: device monitoring and management (port 161/162). Syslog: centralized logging (port 514). NetFlow: traffic flow analysis (bandwidth, top talkers). ICMP ping: basic connectivity/availability. Wireshark: deep packet capture/analysis. Know which tool for which job!"
  }
];