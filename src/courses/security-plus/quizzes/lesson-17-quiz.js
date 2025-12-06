export const lesson17Quiz = [
  {
    id: 1,
    question: "A firewall allows return traffic for established outbound connections but blocks unsolicited inbound connections. What type of firewall technology is this?",
    options: [
      "Packet filtering (stateless)",
      "Stateful inspection - tracking connection state to allow related traffic",
      "Application proxy",
      "WAF"
    ],
    correct: 1,
    explanation: "STATEFUL INSPECTION firewalls track connection states and allow related return traffic. Stateless vs Stateful: (1) STATELESS - examines each packet independently, no connection awareness, (2) STATEFUL - tracks connections, remembers what went out, allows related inbound. State table tracks: (1) Source/destination IP, (2) Source/destination ports, (3) TCP sequence numbers, (4) Connection state (established, related, new). Benefits: (1) More secure than stateless, (2) Simpler rules (don't need explicit return traffic rules), (3) Blocks unsolicited inbound. Example: user browses website → firewall notes outbound connection → allows return web traffic → blocks other inbound. Stateful is standard for modern firewalls - pure stateless is now rare except specific use cases."
  },
  {
    id: 2,
    question: "A next-generation firewall (NGFW) identifies and controls applications like Facebook, Dropbox, and BitTorrent regardless of port numbers. What capability enables this?",
    options: [
      "Port filtering only",
      "Application awareness/Deep Packet Inspection - identifying applications by behavior",
      "MAC filtering",
      "IP blacklisting only"
    ],
    correct: 1,
    explanation: "APPLICATION AWARENESS uses Deep Packet Inspection to identify applications by their behavior, not just ports. Traditional vs Application-aware: (1) Traditional - control by port (block port 80 blocks all HTTP), (2) NGFW - identify actual application (allow HTTP, block Facebook). How it works: (1) Deep Packet Inspection (DPI), (2) Application signatures, (3) Behavioral analysis, (4) SSL inspection (to see encrypted traffic). Use cases: (1) Allow web browsing but block file sharing, (2) Allow Zoom but block gaming, (3) Identify shadow IT applications. NGFW capabilities: (1) Application control, (2) User identity integration, (3) IPS integration, (4) SSL/TLS inspection, (5) URL filtering. Challenge: encrypted traffic requires SSL inspection (privacy/performance concerns). Application awareness is essential as apps use common ports (80, 443) to evade traditional firewalls."
  },
  {
    id: 3,
    question: "A security appliance sits inline in the network and actively blocks traffic matching known attack signatures. What is the difference between this and an IDS?",
    options: [
      "No difference",
      "IPS actively blocks attacks inline; IDS only detects and alerts",
      "IDS is faster",
      "IPS only logs attacks"
    ],
    correct: 1,
    explanation: "IPS ACTIVELY BLOCKS attacks inline, while IDS only DETECTS and ALERTS. IDS vs IPS: (1) IDS (Intrusion Detection) - passive, monitors, alerts, (2) IPS (Intrusion Prevention) - active, inline, blocks attacks. IDS deployment: (1) Passive tap or SPAN port, (2) Receives copy of traffic, (3) Analyzes and alerts, (4) Doesn't affect traffic flow. IPS deployment: (1) Inline (traffic flows through it), (2) Analyzes in real-time, (3) Can drop/block malicious traffic, (4) Single point of failure concern. Detection methods (both): (1) Signature-based (known attack patterns), (2) Anomaly-based (deviation from baseline), (3) Heuristic (behavior analysis). When to use: (1) IDS - when blocking might disrupt, want visibility first, (2) IPS - when active blocking acceptable, mature signatures. Most organizations use IPS for known attacks, IDS for additional visibility."
  },
  {
    id: 4,
    question: "An IPS generates alerts for normal business traffic that matches overly broad attack signatures. What is this called, and how should it be addressed?",
    options: [
      "True positive - working correctly",
      "False positive - tuning needed to reduce incorrect alerts",
      "True negative",
      "False negative - missing attacks"
    ],
    correct: 1,
    explanation: "FALSE POSITIVES occur when legitimate traffic triggers security alerts - requires tuning to reduce. False positive impacts: (1) Alert fatigue (too many alerts), (2) Analysts waste time investigating, (3) May lead to ignoring alerts, (4) Business disruption if IPS blocks legitimate traffic. Tuning approaches: (1) Adjust signature sensitivity, (2) Create exceptions for known-good traffic, (3) Whitelist trusted sources, (4) Use contextual rules. Balance: (1) Too sensitive = many false positives, (2) Too loose = false negatives (miss real attacks). Tuning process: (1) Start in detection/monitor mode, (2) Analyze alerts, (3) Tune signatures, (4) Enable blocking for tuned rules. False positives are normal - ongoing tuning is required. Better to start strict and tune down than start loose and miss attacks."
  },
  {
    id: 5,
    question: "A company implements a UTM (Unified Threat Management) appliance at their network perimeter. What security functions does a UTM typically combine?",
    options: [
      "Only firewall",
      "Firewall, IPS, antivirus, content filtering, and VPN in one device",
      "Only antivirus",
      "Only VPN"
    ],
    correct: 1,
    explanation: "UTM (Unified Threat Management) combines multiple security functions in a single appliance. UTM typical functions: (1) Stateful firewall, (2) IPS/IDS, (3) Gateway antivirus, (4) Content/URL filtering, (5) VPN, (6) Anti-spam, (7) Application control. UTM benefits: (1) Simplified management (one device, one interface), (2) Cost-effective (vs multiple point products), (3) Easier for smaller organizations, (4) Integrated threat intelligence. UTM challenges: (1) Single point of failure, (2) Performance limitations (many functions on one device), (3) May not be best-of-breed for each function. UTM vs NGFW: significant overlap; NGFW often more sophisticated, UTM more SMB-focused. Use case: small to medium businesses wanting comprehensive security without managing multiple devices. Larger enterprises often prefer separate best-of-breed solutions."
  },
  {
    id: 6,
    question: "A firewall rule set ends with an entry that denies all traffic not explicitly permitted by earlier rules. What is this security principle called?",
    options: [
      "Default allow",
      "Implicit deny - blocking all traffic not explicitly permitted",
      "Open access",
      "Trust all"
    ],
    correct: 1,
    explanation: "IMPLICIT DENY (default deny) blocks all traffic not explicitly permitted - fundamental firewall security principle. How it works: (1) Define rules for permitted traffic, (2) All other traffic blocked by default, (3) May be explicit rule at end or built-in behavior. Example rule set: (1) Allow HTTP/HTTPS outbound, (2) Allow established inbound, (3) Allow specific services, (4) Implicit deny everything else. Why important: (1) Only approved traffic allowed, (2) Mistakes fail-secure (blocked if not explicitly allowed), (3) Limits attack surface, (4) Enforces least privilege for network access. Alternative (implicit allow) is dangerous: permits everything not explicitly blocked - requires knowing every bad thing to block. Best practice: always implicit deny, explicitly permit only what's needed. Review rules regularly - approved traffic may no longer be needed."
  },
  {
    id: 7,
    question: "A WAF (Web Application Firewall) blocks a SQL injection attempt targeting a web application. At which OSI layer does the WAF primarily operate?",
    options: [
      "Layer 3 - Network",
      "Layer 7 - Application (HTTP/HTTPS content)",
      "Layer 2 - Data Link",
      "Layer 4 - Transport"
    ],
    correct: 1,
    explanation: "WAF operates at LAYER 7 (Application Layer), inspecting HTTP/HTTPS content. Layer comparison: (1) LAYER 3/4 FIREWALL - IP addresses, ports, connection state, (2) LAYER 7 WAF - HTTP content, URLs, parameters, cookies. WAF inspects: (1) HTTP methods (GET, POST), (2) URLs and parameters, (3) Request/response bodies, (4) Headers and cookies, (5) JSON/XML content. WAF protects against: (1) SQL injection, (2) XSS (Cross-site scripting), (3) Path traversal, (4) Command injection, (5) OWASP Top 10. WAF positioning: (1) Reverse proxy mode (in front of web servers), (2) Cloud WAF (CDN-based), (3) Module on web server. WAF complements but doesn't replace secure coding. Critical for protecting web applications from application-layer attacks that network firewalls can't detect."
  },
  {
    id: 8,
    question: "An NGFW inspects encrypted HTTPS traffic by acting as a man-in-the-middle, decrypting and re-encrypting traffic. What is this capability called?",
    options: [
      "Port forwarding",
      "SSL/TLS inspection - decrypting encrypted traffic for inspection",
      "Load balancing",
      "Caching"
    ],
    correct: 1,
    explanation: "SSL/TLS INSPECTION allows firewalls to decrypt encrypted traffic, inspect it, then re-encrypt. How it works: (1) Firewall presents its own certificate to client, (2) Client encrypts to firewall, (3) Firewall decrypts, inspects content, (4) Re-encrypts to actual destination, (5) Similar for response traffic. Requirements: (1) Firewall CA certificate trusted by clients, (2) Sufficient processing power, (3) Privacy policy considerations. Why needed: (1) Malware uses HTTPS to evade detection, (2) C2 often encrypted, (3) Data exfiltration over HTTPS. Privacy considerations: (1) All encrypted traffic visible to firewall, (2) Must exclude sensitive sites (banking, healthcare), (3) Legal/privacy implications, (4) User notification recommended. Challenges: (1) Performance impact, (2) Certificate pinning breaks inspection, (3) Some apps don't tolerate MITM. Essential for modern threat detection but requires careful implementation."
  },
  {
    id: 9,
    question: "An organization's firewall logs show thousands of dropped packets from random source IPs to various ports. An IDS alert indicates port scanning activity. What is the attacker likely doing?",
    options: [
      "Legitimate business activity",
      "Reconnaissance - scanning to discover open ports and services",
      "Email sending",
      "Web browsing"
    ],
    correct: 1,
    explanation: "PORT SCANNING is reconnaissance to discover open ports, services, and potential vulnerabilities. Port scanning types: (1) TCP Connect - full connection, easily detected, (2) SYN scan - half-open, stealthier, (3) UDP scan - slower, for UDP services, (4) FIN/NULL/XMAS - may bypass some firewalls. Attacker's goal: (1) Find open ports, (2) Identify running services, (3) Determine versions, (4) Find vulnerabilities to exploit. Detection: (1) Firewall logs (many dropped connections), (2) IDS signatures (scan patterns), (3) Multiple ports from same source. Response: (1) Ensure firewall denies unauthorized ports, (2) Consider blocking scanning IP, (3) Watch for subsequent attacks. Port scanning itself is reconnaissance - attack likely follows. Minimize exposure: close unnecessary ports, hide service banners. Some scanning is normal (researchers, security companies) but should still be monitored."
  },
  {
    id: 10,
    question: "A network-based IDS is deployed using a SPAN/mirror port on the switch, receiving copies of all traffic. What is a limitation of this deployment compared to inline IPS?",
    options: [
      "Can see more traffic",
      "Cannot actively block attacks - only detects and alerts",
      "Faster processing",
      "Better signatures"
    ],
    correct: 1,
    explanation: "Passive IDS deployment via SPAN port CANNOT ACTIVELY BLOCK - only detect and alert. SPAN/Mirror port deployment: (1) Switch copies traffic to IDS, (2) IDS analyzes copies, (3) Generates alerts, (4) Original traffic unaffected. Limitations: (1) Cannot block attacks (traffic already passed), (2) May drop packets if overloaded, (3) Detection only, response is manual. Inline IPS: (1) Traffic flows through IPS, (2) Can drop malicious packets, (3) Single point of failure risk, (4) Latency consideration. When to use each: (1) Passive - initial deployment, visibility-only, can't risk blocking, (2) Inline - mature signatures, want active prevention. Hybrid approach: IDS for additional visibility, IPS for known threats. Even passive IDS is valuable - detection enables response even if not automatic blocking."
  },
  {
    id: 11,
    question: "A firewall administrator creates rules that permit traffic based on user identity from Active Directory rather than just IP addresses. What does this enable?",
    options: [
      "Faster processing",
      "Identity-based access control - policies following users regardless of IP",
      "Better encryption",
      "MAC filtering"
    ],
    correct: 1,
    explanation: "IDENTITY-BASED FIREWALL rules tie policies to user identity rather than IP addresses. Traditional vs Identity-based: (1) Traditional - rules by IP/subnet (marketing subnet can access X), (2) Identity - rules by user/group (marketing group can access X regardless of location). Benefits: (1) Policies follow users (roaming, VPN, different locations), (2) Granular control per user/group, (3) Better visibility (logs show user, not just IP), (4) BYOD support (user not device). Implementation: (1) Integrate with AD/LDAP, (2) Map users to IPs (via login, agent, directory queries), (3) Create user/group-based rules. Use cases: (1) Remote workers with dynamic IPs, (2) Different access for different roles, (3) Guest vs employee access, (4) Contractor restrictions. NGFWs typically support identity integration. More aligned with zero-trust (verify user, not just network location)."
  },
  {
    id: 12,
    question: "An IDS uses baseline normal network behavior and alerts when traffic significantly deviates from that baseline. What detection method is this?",
    options: [
      "Signature-based detection",
      "Anomaly-based/Behavioral detection - alerting on deviation from normal",
      "Heuristic detection",
      "Rule-based only"
    ],
    correct: 1,
    explanation: "ANOMALY-BASED (Behavioral) detection establishes normal baseline and alerts on deviations. Anomaly vs Signature: (1) SIGNATURE - known attack patterns, fast, no zero-day detection, (2) ANOMALY - deviations from normal, can detect unknown attacks, more false positives. Baseline building: (1) Learn normal traffic patterns, (2) Normal protocols and ports, (3) Normal data volumes, (4) Normal connection patterns. Anomaly triggers: (1) Unusual protocols, (2) Traffic volume spikes, (3) Connections to unusual destinations, (4) Off-hours activity. Benefits: (1) Can detect zero-day/unknown attacks, (2) Detects insider threats, (3) Finds APT lateral movement. Challenges: (1) Higher false positive rate, (2) Requires good baseline, (3) Legitimate changes trigger alerts. Best approach: combine signature (known attacks) + anomaly (unknown/behavioral). Machine learning increasingly used for anomaly detection."
  },
  {
    id: 13,
    question: "A security team implements geographic IP blocking on their firewall, blocking all traffic from countries where they have no business operations. What is this technique called?",
    options: [
      "Port filtering",
      "Geoblocking/Geofencing - restricting access based on geographic location",
      "MAC filtering",
      "Protocol filtering"
    ],
    correct: 1,
    explanation: "GEOBLOCKING restricts network access based on geographic IP address location. How it works: (1) IP geolocation databases map IPs to countries, (2) Firewall rules block/allow by country, (3) Reduces attack surface from regions with no business need. Use cases: (1) Block countries with high attack traffic, (2) Comply with sanctions (OFAC), (3) Limit exposure, (4) Reduce noise in logs. Limitations: (1) VPN/proxy bypass, (2) Geolocation not 100% accurate, (3) May block legitimate users traveling, (4) Attackers can use local proxies. Implementation considerations: (1) Allow exceptions for traveling employees, (2) Log before blocking to understand impact, (3) Update geolocation databases regularly. Not a complete solution but useful layer. Especially effective for services that only need local access. Should be part of defense-in-depth, not sole protection."
  },
  {
    id: 14,
    question: "A company's IPS uses threat intelligence feeds to block connections to known malicious IP addresses and domains. What is this capability called?",
    options: [
      "Signature detection only",
      "Threat intelligence integration - using external intel to identify threats",
      "Anomaly detection",
      "Static rules only"
    ],
    correct: 1,
    explanation: "THREAT INTELLIGENCE INTEGRATION uses external feeds of known-bad indicators to improve detection and blocking. Threat intelligence types: (1) IP reputation (malicious IPs), (2) Domain reputation (malicious domains), (3) File hashes (malware), (4) URLs (phishing, malware), (5) Attack patterns (TTPs). Sources: (1) Commercial feeds (Recorded Future, ThreatConnect), (2) Open source (AlienVault OTX, abuse.ch), (3) Industry sharing (ISACs), (4) Vendor-provided. How it helps: (1) Block known C2 infrastructure, (2) Identify connections to malicious sites, (3) Correlate with local events, (4) Faster detection of known threats. Integration: (1) Import feeds to firewall/IPS, (2) Automatic blocking of known-bad, (3) Enrichment of alerts with context. Threat intel improves detection of known threats; still need behavioral detection for unknown threats."
  },
  {
    id: 15,
    question: "After implementing an IPS, a company notices some legitimate SIP (VoIP) traffic is being blocked because it matches attack signatures. What should the security team do?",
    options: [
      "Disable the IPS entirely",
      "Create an exception for legitimate SIP traffic while maintaining protection",
      "Ignore the problem",
      "Remove all VoIP"
    ],
    correct: 1,
    explanation: "Create EXCEPTIONS for legitimate traffic while maintaining protection - balance security with business function. Exception approaches: (1) Whitelist specific source/destination IPs, (2) Create bypass for known-good traffic, (3) Tune signature sensitivity for that traffic, (4) Create custom signatures excluding legitimate patterns. Process: (1) Identify why legitimate traffic matches, (2) Determine narrowest exception that works, (3) Document exception and rationale, (4) Monitor for bypass abuse. Important: (1) Don't create overly broad exceptions, (2) Regularly review exceptions, (3) Maintain logs of excepted traffic, (4) Consider alternative protections for excepted traffic. False positives require tuning, not disabling protection. Well-tuned IPS provides security without disrupting business. Ongoing tuning is normal part of IPS operation."
  }
];