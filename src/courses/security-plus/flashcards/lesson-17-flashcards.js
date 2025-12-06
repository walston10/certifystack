// Lesson 17: Firewalls and Intrusion Prevention
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson17Flashcards = [
  {
    id: 1,
    front: "What is a Firewall?",
    back: "Network security device that monitors and filters traffic based on defined rules. Controls traffic between network segments. Fundamental security control."
  },
  {
    id: 2,
    front: "What is a Packet Filtering Firewall?",
    back: "Basic firewall examining packet headers only (Layer 3/4). Filters by IP, port, protocol. Stateless - each packet evaluated independently. Fast but limited."
  },
  {
    id: 3,
    front: "What is a Stateful Firewall?",
    back: "Tracks connection state in state table. Knows if packet is part of established connection. Allows return traffic automatically. More secure than packet filtering."
  },
  {
    id: 4,
    front: "Stateless vs Stateful Firewall?",
    back: "Stateless: examines each packet independently, no connection awareness. Stateful: tracks connections, understands context, allows legitimate return traffic automatically."
  },
  {
    id: 5,
    front: "What is an Application Layer Firewall (Proxy)?",
    back: "Operates at Layer 7. Inspects application content, not just headers. Acts as intermediary - breaks direct connection. Can filter based on application commands."
  },
  {
    id: 6,
    front: "What is a Next-Generation Firewall (NGFW)?",
    back: "Advanced firewall combining traditional firewall with additional features. Includes deep packet inspection, IPS, application awareness, user identity integration, threat intelligence."
  },
  {
    id: 7,
    front: "What features distinguish NGFW from traditional firewalls?",
    back: "Application awareness (identify apps regardless of port), integrated IPS, SSL/TLS inspection, user identity tracking, cloud-delivered threat intelligence."
  },
  {
    id: 8,
    front: "What is Deep Packet Inspection (DPI)?",
    back: "Examining packet contents beyond headers. Inspects actual data payload. Can identify applications, malware, data exfiltration. Used in NGFW and IPS."
  },
  {
    id: 9,
    front: "What is a Web Application Firewall (WAF)?",
    back: "Firewall specifically protecting web applications. Filters HTTP/HTTPS traffic. Protects against OWASP Top 10 - SQL injection, XSS, etc. Layer 7 protection."
  },
  {
    id: 10,
    front: "What is Implicit Deny?",
    back: "Default firewall behavior - if no rule matches, traffic is blocked. Last rule effectively 'deny all.' Fundamental firewall security principle."
  },
  {
    id: 11,
    front: "How are firewall rules processed?",
    back: "Top to bottom, first match wins. Order matters critically. Specific rules before general rules. Once matched, no further rules checked."
  },
  {
    id: 12,
    front: "What components make up a firewall rule?",
    back: "Source IP/network, Destination IP/network, Protocol (TCP/UDP), Port number, Action (permit/deny). May also include time, user, application."
  },
  {
    id: 13,
    front: "What is an Inbound Rule?",
    back: "Firewall rule controlling traffic coming INTO the network/host. Filters external requests. Typically more restrictive than outbound."
  },
  {
    id: 14,
    front: "What is an Outbound Rule?",
    back: "Firewall rule controlling traffic going OUT of network/host. Can prevent data exfiltration, block malware communication, enforce acceptable use."
  },
  {
    id: 15,
    front: "What is an IDS (Intrusion Detection System)?",
    back: "Monitors network/host for malicious activity. Detects and alerts but doesn't block. Passive monitoring. Deployed out-of-band (receives copy of traffic)."
  },
  {
    id: 16,
    front: "What is an IPS (Intrusion Prevention System)?",
    back: "Monitors AND blocks malicious activity. Active protection. Deployed inline - traffic passes through it. Can drop malicious packets in real-time."
  },
  {
    id: 17,
    front: "IDS vs IPS?",
    back: "IDS: detect and alert, passive, out-of-band. IPS: detect and block, active, inline. IPS can stop attacks; IDS only reports them."
  },
  {
    id: 18,
    front: "What is NIDS (Network-based IDS)?",
    back: "IDS monitoring network traffic. Analyzes packets on network segment. Sees traffic between hosts. Deployed at strategic network points."
  },
  {
    id: 19,
    front: "What is HIDS (Host-based IDS)?",
    back: "IDS installed on individual hosts. Monitors system logs, file integrity, process activity. Sees attacks that reach the host. Complements NIDS."
  },
  {
    id: 20,
    front: "What is Signature-based Detection?",
    back: "Comparing traffic against database of known attack patterns. Very accurate for known threats. Cannot detect new/unknown attacks (zero-days). Low false positives."
  },
  {
    id: 21,
    front: "What is Anomaly-based Detection?",
    back: "Comparing traffic against normal baseline. Detects deviations from normal behavior. Can find unknown attacks. Higher false positive rate. Requires baseline establishment."
  },
  {
    id: 22,
    front: "What is Heuristic/Behavioral Detection?",
    back: "Identifies malicious behavior patterns. Looks for suspicious actions, not specific signatures. Can detect variants and new threats. Balance of signature and anomaly."
  },
  {
    id: 23,
    front: "Signature vs Anomaly Detection?",
    back: "Signature: known attacks, low false positives, misses zero-days. Anomaly: unknown attacks, higher false positives, catches new threats. Use both for best coverage."
  },
  {
    id: 24,
    front: "What is a False Positive in IDS/IPS?",
    back: "Alert triggered for legitimate traffic. Benign activity incorrectly flagged as malicious. Wastes analyst time. Too many causes alert fatigue."
  },
  {
    id: 25,
    front: "What is a False Negative in IDS/IPS?",
    back: "Attack not detected. Malicious traffic passes without alert. More dangerous than false positive - security breach goes unnoticed."
  },
  {
    id: 26,
    front: "Where should IDS/IPS be placed?",
    back: "Network perimeter (internet edge), between security zones, in front of critical servers, at DMZ boundaries. Multiple sensors for full visibility."
  },
  {
    id: 27,
    front: "What is UTM (Unified Threat Management)?",
    back: "Single appliance combining multiple security functions. Includes firewall, IDS/IPS, antivirus, content filtering, VPN. Simplified management, potential single point of failure."
  },
  {
    id: 28,
    front: "UTM vs NGFW?",
    back: "Overlapping features, but UTM typically broader (includes AV, content filter, spam filter). NGFW focuses on advanced firewall capabilities. Terms sometimes used interchangeably."
  },
  {
    id: 29,
    front: "What is SSL/TLS Inspection?",
    back: "Decrypting HTTPS traffic to inspect contents, then re-encrypting. Enables detection of threats hidden in encrypted traffic. Requires certificate management. Privacy considerations."
  },
  {
    id: 30,
    front: "What is a Network-based Firewall vs Host-based Firewall?",
    back: "Network-based: protects network segment, centrally managed, hardware/virtual appliance. Host-based: protects single host, runs on endpoint, software-based. Use both for defense in depth."
  }
];