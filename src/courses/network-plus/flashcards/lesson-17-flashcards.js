// Flashcards for Lesson 17: Monitoring Tools and SNMP

export const lesson17Flashcards = [
  {
    id: 1,
    front: "What is SNMP (Simple Network Management Protocol)?",
    back: "Protocol for monitoring and managing network devices. Uses UDP 161 (queries) and 162 (traps). Components: Manager, Agent, MIB."
  },
  {
    id: 2,
    front: "What are the three components of SNMP?",
    back: "Manager: monitoring software. Agent: software on devices. MIB: database of what can be monitored (OIDs)."
  },
  {
    id: 3,
    front: "What is an SNMP trap?",
    back: "Alert sent from agent to manager when event occurs. Port 162. Push notification vs polling (pull)."
  },
  {
    id: 4,
    front: "SNMP polling vs traps?",
    back: "Polling: Manager queries agents (port 161, scheduled). Traps: Agent sends alerts (port 162, event-driven). Use both."
  },
  {
    id: 5,
    front: "Differences between SNMPv1, v2c, and v3?",
    back: "v1: original, insecure. v2c: bulk transfers, still insecure. v3: authentication + encryption. ALWAYS use v3 in production."
  },
  {
    id: 6,
    front: "What is an SNMP community string?",
    back: "Password for SNMPv1/v2c. Read-only (RO) or read-write (RW). Defaults: 'public'/'private'. Sent unencrypted—change defaults!"
  },
  {
    id: 7,
    front: "What is a MIB (Management Information Base)?",
    back: "Hierarchical database of monitorable objects. Each has OID (Object Identifier). Defines what data is available."
  },
  {
    id: 8,
    front: "What is syslog?",
    back: "Centralized logging protocol. UDP port 514. All devices send logs to syslog server for storage, correlation, alerting."
  },
  {
    id: 9,
    front: "Syslog severity levels (0-7)?",
    back: "0-Emergency, 1-Alert, 2-Critical, 3-Error, 4-Warning, 5-Notice, 6-Informational, 7-Debug. Lower = more severe."
  },
  {
    id: 10,
    front: "What is NetFlow?",
    back: "Cisco protocol collecting IP traffic statistics. Shows who talks to who, bandwidth usage, top talkers. Lightweight sampling available."
  },
  {
    id: 11,
    front: "NetFlow vs sFlow vs IPFIX?",
    back: "NetFlow: Cisco proprietary. sFlow: open standard, random sampling. IPFIX: open standard, NetFlow evolution. All analyze traffic flows."
  },
  {
    id: 12,
    front: "What is a NetFlow collector?",
    back: "Server that receives and analyzes flow data. Provides reports, graphs, alerts, historical analysis."
  },
  {
    id: 13,
    front: "What performance metrics to monitor?",
    back: "Interface stats, CPU/memory, latency (<50ms good), jitter (<30ms), packet loss (near 0%), throughput, errors."
  },
  {
    id: 14,
    front: "What's normal bandwidth utilization?",
    back: "<70% average is normal. >80% sustained is concern. >90% is critical. Plan upgrades before hitting 70%."
  },
  {
    id: 15,
    front: "What causes interface errors?",
    back: "Bad cables, duplex mismatch, interference, faulty hardware. Monitor: CRC errors, input/output errors, collisions, runts/giants."
  },
  {
    id: 16,
    front: "What is availability monitoring?",
    back: "Checks if devices/services are up. Methods: ICMP ping, TCP port checks, SNMP polling, HTTP checks. Measures uptime %."
  },
  {
    id: 17,
    front: "What should environmental monitoring track?",
    back: "Temperature (64-80°F), humidity (40-60%), power/UPS, airflow, water leaks, physical access."
  },
  {
    id: 18,
    front: "What is PRTG?",
    back: "All-in-one network monitoring. Monitors bandwidth, availability, CPU/memory. Web interface, free up to 100 sensors. Popular for SMBs."
  },
  {
    id: 19,
    front: "What is SolarWinds?",
    back: "Enterprise monitoring suite. NPM, NCM, NTA products. Comprehensive features but expensive. Popular in large orgs."
  },
  {
    id: 20,
    front: "What is Nagios?",
    back: "Open-source monitoring platform. Extensible via plugins. Free but complex setup, dated interface."
  },
  {
    id: 21,
    front: "What is Zabbix?",
    back: "Open-source enterprise monitoring. Auto-discovery, customizable dashboards, agents or agentless. Free, powerful, scalable."
  },
  {
    id: 22,
    front: "What should trigger alerts?",
    back: "Device down, high CPU/memory (>80%), high bandwidth, interface errors, config changes, auth failures, environmental issues. Avoid alert fatigue."
  },
  {
    id: 23,
    front: "What is SNMP's GET operation?",
    back: "Requests specific info from agent. GET-NEXT walks MIB tree. GET-BULK retrieves multiple OIDs efficiently."
  },
  {
    id: 24,
    front: "What is SNMP's SET operation?",
    back: "Modifies device config via SNMP. Requires read-write access. Dangerous if misused—many orgs disable it."
  },
  {
    id: 25,
    front: "Slow network—what to check first?",
    back: "1) Bandwidth utilization, 2) Interface errors, 3) CPU/memory, 4) NetFlow top talkers, 5) Latency metrics."
  },
  {
    id: 26,
    front: "Baseline vs threshold monitoring?",
    back: "Baseline: normal behavior over time. Threshold: static alert value. Dynamic thresholds alert on deviation from baseline."
  },
  {
    id: 27,
    front: "What is SNMPv3's authentication and encryption?",
    back: "Authentication: MD5/SHA verifies sender. Encryption: DES/AES protects data. Always use authPriv (both enabled) with SHA+AES."
  },
  {
    id: 28,
    front: "Flow data vs packet capture?",
    back: "Flow: metadata (who/when/how much), small, trends. Packet capture: full contents including payload, huge, deep analysis."
  },
  {
    id: 29,
    front: "Why centralized syslog vs local logs?",
    back: "Centralized: correlation, attacker can't delete, long retention, survives device failure. Local logs have limited storage and are lost on reboot."
  },
  {
    id: 30,
    front: "Match: SNMP, Syslog, NetFlow, ICMP, Wireshark",
    back: "SNMP: device monitoring (161/162). Syslog: centralized logs (514). NetFlow: traffic analysis. ICMP: connectivity. Wireshark: packet capture."
  }
];