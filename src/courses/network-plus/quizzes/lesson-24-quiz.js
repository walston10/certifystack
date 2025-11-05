// Quiz for Lesson 24: Firewalls and Access Control Lists

export const lesson24Quiz = [
  {
    id: 1,
    question: "A company's firewall allows outbound HTTP connections from internal users. When users browse websites, the firewall automatically allows the return traffic without explicit rules for inbound HTTP responses. What type of firewall is being used?",
    options: [
      "Stateless firewall that requires explicit rules for both directions",
      "Stateful firewall that tracks connection states and automatically allows return traffic for established connections",
      "Packet filtering firewall without any intelligence",
      "Application-layer firewall inspecting HTTP content"
    ],
    correct: 1,
    explanation: "Stateful vs Stateless firewalls: Stateful maintains connection state table tracking: source/dest IPs, ports, sequence numbers, connection state (NEW, ESTABLISHED, RELATED). When internal user initiates connection, firewall creates state entry and automatically permits return traffic—no explicit inbound rule needed. Stateless examines each packet independently, requires rules for both directions (outbound + inbound), no connection context. Stateful benefits: simpler rule sets, better security (only return traffic for established connections), prevents spoofed responses. Modern firewalls are stateful by default. Stateless still used in high-speed environments where performance is critical over features."
  },
  {
    id: 2,
    question: "A network administrator creates an ACL on a router to block all traffic except HTTP and HTTPS from the internal network to the internet. After applying the ACL, all traffic is blocked, including HTTP and HTTPS. What is the most likely cause?",
    options: [
      "HTTP and HTTPS are inherently blocked and cannot be allowed",
      "The ACL has an implicit 'deny all' at the end, and the permit rules were not configured correctly or are unreachable",
      "ACLs cannot filter HTTP traffic",
      "The router doesn't support ACLs"
    ],
    correct: 1,
    explanation: "ACL fundamentals: 1) Processed top-to-bottom, 2) First match wins (stops processing), 3) Implicit deny all at end (if no match, deny). Common mistakes: wrong order (deny all before permits), missing permit rules, incorrect syntax. Example ACL structure: permit HTTP (80), permit HTTPS (443), implicit deny all. If deny all placed first or permits are wrong, everything blocks. Troubleshooting: 1) Show ACL configuration, 2) Verify rule order, 3) Check hit counters (which rules match), 4) Test incrementally. Best practice: log denied packets, explicit deny all at end (for visibility), document ACLs, test before production deployment. Standard ACLs: source IP only. Extended ACLs: source, dest, protocol, port—more granular."
  },
  {
    id: 3,
    question: "A security policy requires that the DMZ web server (172.16.50.10) must accept HTTPS traffic from the internet but should not initiate outbound connections. What firewall rule set implements this policy?",
    options: [
      "Allow all traffic to and from 172.16.50.10",
      "Allow inbound TCP port 443 to 172.16.50.10 from any; deny all outbound connections initiated by 172.16.50.10",
      "Block all traffic to 172.16.50.10",
      "Allow only HTTP port 80 to 172.16.50.10"
    ],
    correct: 1,
    explanation: "DMZ firewall design principles: 1) Allow only required inbound services (HTTPS = TCP 443), 2) Restrict outbound (prevent compromised server from attacking others or exfiltrating data), 3) Deny between DMZ and internal network (except necessary management). Rules for web server: Inbound: permit TCP 443 from any to 172.16.50.10, permit TCP 80 if HTTP needed. Outbound: deny new connections from 172.16.50.10 (stateful firewall allows return traffic automatically), permit to specific destinations if needed (DNS, NTP, patch servers). This limits blast radius if server compromised—attacker can't easily pivot to internal network or establish C2 channels."
  },
  {
    id: 4,
    question: "A next-generation firewall (NGFW) detects that users are accessing Facebook via HTTPS on port 443. The security policy blocks social media access. How does the NGFW identify and block Facebook despite it using the same port as legitimate business applications?",
    options: [
      "NGFWs cannot distinguish between different HTTPS sites",
      "Deep packet inspection (DPI) and application awareness identify traffic by signatures, behavior, and SSL inspection—not just port numbers",
      "NGFWs only block based on IP addresses",
      "Users must be accessing Facebook on a non-standard port"
    ],
    correct: 1,
    explanation: "Next-Generation Firewall (NGFW) capabilities beyond traditional firewalls: 1) Application awareness (identifies apps regardless of port/protocol), 2) Deep packet inspection (DPI) - examines packet payload, 3) SSL/TLS inspection (decrypts, inspects, re-encrypts HTTPS), 4) User identity awareness (policies per user/group, not just IP), 5) Integrated IPS, 6) Advanced threat protection. Application identification methods: signatures (pattern matching), behavioral analysis (traffic patterns), SSL inspection (examining decrypted content), URL filtering. Example: Facebook detection via SSL inspection + signature detection + URL patterns. Traditional firewall: only sees HTTPS/443 (same for all websites). NGFW: identifies application, applies granular policy. Required for modern security—most traffic is encrypted (HTTPS), port-based filtering insufficient."
  },
  {
    id: 5,
    question: "An organization places public-facing servers (web, email, DNS) in a DMZ between two firewalls: an external firewall facing the internet and an internal firewall protecting the corporate network. What is the primary security benefit of this dual-firewall DMZ design?",
    options: [
      "Doubled processing power for traffic inspection",
      "Defense in depth - if a DMZ server is compromised, the attacker still faces the internal firewall before reaching the corporate network",
      "Reduces costs by using two cheaper firewalls",
      "Allows all traffic between DMZ and internal network"
    ],
    correct: 1,
    explanation: "DMZ (Demilitarized Zone) / Screened Subnet architecture: External firewall: filters internet traffic to DMZ (allows only required services: HTTP, HTTPS, SMTP, DNS), blocks direct internet access to internal network. DMZ: hosts public services, isolated from internal network. Internal firewall: filters DMZ to internal traffic (minimal access), protects internal resources from compromised DMZ servers. Benefits: 1) Defense in depth (multiple barriers), 2) Limits blast radius (compromised DMZ server can't easily reach internal network), 3) Different security zones with different policies. Alternative: single firewall with three interfaces (outside, DMZ, inside)—cheaper but less secure. DMZ essential for organizations with public-facing services."
  },
  {
    id: 6,
    question: "A Cisco router's ACL uses wildcard mask 0.0.0.255. What does this wildcard mask match?",
    options: [
      "Exactly one IP address",
      "All IP addresses (any host)",
      "Any host in a /24 subnet (last octet can be anything, first three octets must match)",
      "Only the network address"
    ],
    correct: 2,
    explanation: "Wildcard masks (inverse masks) in Cisco ACLs: 0 = must match exactly, 1 = don't care (any value). Examples: 0.0.0.0 = exact match (host), 0.0.0.255 = match first three octets, last octet any (subnet /24), 0.0.255.255 = match first two octets (/16), 255.255.255.255 = match any (0.0.0.0/0). Contrast with subnet masks: subnet mask 255.255.255.0 = wildcard 0.0.0.255. Conversion: wildcard = 255.255.255.255 - subnet mask. Common wildcards: 0.0.0.0 (host), 0.0.0.255 (/24), 0.0.15.255 (/20), 0.0.0.3 (4 hosts), 255.255.255.255 (any). Shortcuts: 'host' = 0.0.0.0, 'any' = 0.0.0.0 255.255.255.255."
  },
  {
    id: 7,
    question: "A firewall is configured to perform NAT (Network Address Translation). Internal hosts use private IPs (192.168.1.0/24) but appear to the internet as a single public IP (203.0.113.50). What type of NAT is being used?",
    options: [
      "Static NAT (one-to-one mapping)",
      "Dynamic NAT (pool of public IPs)",
      "PAT/NAT Overload (Port Address Translation) - many private IPs to one public IP using different ports",
      "No NAT is occurring"
    ],
    correct: 2,
    explanation: "NAT types: 1) Static NAT (one-to-one): permanent mapping, 192.168.1.10 always → 203.0.113.10, used for servers needing consistent public IP. 2) Dynamic NAT (many-to-many): pool of public IPs, 192.168.1.x → first available from pool (203.0.113.10-20), mapping temporary. 3) PAT/NAT Overload (many-to-one): many private IPs → single public IP, distinguished by source port, most common (home routers, SMBs). PAT translation table: [192.168.1.10:5000 → 203.0.113.50:12000], [192.168.1.11:5000 → 203.0.113.50:12001]. Supports ~65,000 simultaneous connections per public IP. Benefits: conserves public IPs, adds security layer (hides internal topology). Drawbacks: breaks end-to-end connectivity, complicates some protocols (FTP, SIP)."
  },
  {
    id: 8,
    question: "A web server in the DMZ needs to be accessible from the internet on port 443, but the server's internal IP is 172.16.50.10 (private). The firewall has public IP 203.0.113.50. What NAT configuration is needed?",
    options: [
      "No NAT needed since the server is in DMZ",
      "Static NAT or port forwarding/destination NAT (DNAT) mapping public IP:443 to 172.16.50.10:443",
      "PAT overload from server to internet",
      "Dynamic NAT pool for the server"
    ],
    correct: 1,
    explanation: "Inbound NAT for servers (Static NAT or Port Forwarding/DNAT): maps public IP:port → private IP:port. Configuration: external 203.0.113.50:443 → internal 172.16.50.10:443. Internet clients connect to public IP, firewall translates destination to private IP. Firewall rule also needed: permit TCP 443 to 172.16.50.10 from any. Variations: 1) Static NAT (entire public IP → private IP, all ports), 2) Port forwarding (specific port → private IP:port, more granular), 3) Different external/internal ports (external 8443 → internal 443). Common use: hosting services (web, email, VPN, RDP) behind NAT firewall with private IPs. Multiple servers: different public IPs or same public IP with different ports (203.0.113.50:80 → server1:80, 203.0.113.50:443 → server2:443)."
  },
  {
    id: 9,
    question: "A standard ACL is applied to a router interface close to the destination network. Users report that legitimate traffic is being blocked. What ACL best practice was violated?",
    options: [
      "ACLs should never be applied to interfaces",
      "Standard ACLs should be placed close to the source to avoid blocking traffic unnecessarily across the network",
      "Standard ACLs should only filter by destination, not source",
      "ACL direction was configured incorrectly"
    ],
    correct: 1,
    explanation: "ACL placement best practices: Standard ACLs (source IP only): place close to source—prevents unnecessary traffic traversing network before being blocked. Extended ACLs (source, dest, protocol, port): place close to destination—more granular filtering, can permit/deny specific flows. Example problem: standard ACL blocks 10.1.1.0/24 near destination—blocks all traffic from 10.1.1.0/24 to everything, not just intended target. Solution: place near source or use extended ACL. Placement rules: 1) Standard ACL → close to source, 2) Extended ACL → close to destination, 3) Inbound vs outbound ACL direction considerations, 4) Consider routing (ACL sees traffic before or after routing decision). Test ACLs before production to avoid outages."
  },
  {
    id: 10,
    question: "A firewall inspection reveals that it maintains a table showing source IP, destination IP, source port, destination port, protocol, and connection state for every active connection. What does this describe?",
    options: [
      "Routing table showing next-hop information",
      "State table (connection tracking table) used by stateful firewalls to track active connections",
      "ARP cache mapping IPs to MACs",
      "NAT translation table only"
    ],
    correct: 1,
    explanation: "Stateful firewall state table (connection table): tracks every active connection with: 1) Source IP:port, 2) Destination IP:port, 3) Protocol (TCP, UDP, ICMP), 4) State (NEW, ESTABLISHED, RELATED, INVALID), 5) Timeout values, 6) Sequence numbers (TCP). Uses: 1) Automatically permit return traffic, 2) Prevent spoofed responses (must match existing state), 3) Timeout idle connections, 4) Track related connections (FTP data channel related to control channel). State tracking challenges: 1) Memory consumption (large state tables), 2) DDoS attacks filling state table (SYN flood), 3) NAT interactions, 4) Asymmetric routing (return path different). Connection states: NEW (first packet of new connection), ESTABLISHED (connection already established), RELATED (related to existing connection), INVALID (doesn't fit any state). Modern firewalls use state tables for security and performance."
  },
  {
    id: 11,
    question: "An extended ACL needs to block all Telnet traffic from network 10.1.1.0/24 to server 172.16.50.10, but allow all other traffic from that network. What should the ACL configuration include?",
    options: [
      "deny ip 10.1.1.0 0.0.0.255 host 172.16.50.10",
      "deny tcp 10.1.1.0 0.0.0.255 host 172.16.50.10 eq 23, followed by permit ip 10.1.1.0 0.0.0.255 any",
      "permit tcp any any eq 23",
      "deny tcp any any"
    ],
    correct: 1,
    explanation: "Extended ACL syntax: [permit|deny] [protocol] [source source-wildcard] [destination dest-wildcard] [port]. For this requirement: 1) deny tcp 10.1.1.0 0.0.0.255 host 172.16.50.10 eq 23 (blocks Telnet port 23 from 10.1.1.0/24 to server), 2) permit ip 10.1.1.0 0.0.0.255 any (allows all other traffic from that network), 3) implicit deny all (drops everything else). Order matters: specific deny before general permit. Extended ACL features: filter by protocol (TCP, UDP, ICMP, IP), source/dest addresses, port numbers (eq, gt, lt, range), TCP flags, ICMP types. Common ports: 20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS. Extended ACLs provide granular control vs standard ACLs (source only)."
  },
  {
    id: 12,
    question: "A web application firewall (WAF) is deployed in front of a company's e-commerce website. The WAF blocks a legitimate user's request as malicious. What type of security event is this?",
    options: [
      "True positive - correctly identified attack",
      "True negative - correctly allowed legitimate traffic",
      "False positive - incorrectly identified legitimate traffic as malicious",
      "False negative - missed actual attack"
    ],
    correct: 2,
    explanation: "Security detection classifications: 1) True Positive (TP): correctly detects attack (good), 2) True Negative (TN): correctly allows legitimate traffic (good), 3) False Positive (FP): incorrectly flags legitimate as malicious (user frustration, blocks business), 4) False Negative (FN): misses actual attack (security breach). False positives: WAF blocks legitimate user, IPS blocks valid application, spam filter blocks important email. Impact: user complaints, lost business, security team fatigue. Tuning: balance security vs usability, whitelist known-good, refine rules, baseline normal behavior. False negatives: attacks succeed undetected (worse than FP). WAF protects against: SQL injection, XSS, CSRF, path traversal. Requires tuning: applications vary, customize rules, monitor for FP/FN, continuous improvement."
  },
  {
    id: 13,
    question: "A firewall policy requires that all rules be documented with business justification and review dates. An audit finds many outdated rules allowing access for departed employees and decommissioned servers. What security principle is violated?",
    options: [
      "Defense in depth",
      "Principle of least privilege and regular access reviews - firewall rules should be reviewed and pruned regularly",
      "Separation of duties",
      "Encryption requirements"
    ],
    correct: 1,
    explanation: "Firewall rule management best practices: 1) Document every rule (purpose, requestor, date, review date, business justification), 2) Regular reviews (quarterly/annually—remove obsolete rules), 3) Change management (all rule changes through approval), 4) Least privilege (only required access), 5) Rule order optimization (most-used rules first for performance), 6) Cleanup unused rules (rule sprawl degrades performance, increases attack surface). Problems with outdated rules: 1) Unnecessary access (departed employees, old projects), 2) Security gaps (forgot to block after project ended), 3) Performance degradation (large rule sets), 4) Compliance violations, 5) Audit failures. Firewall rule creep common: rules added but rarely removed. Annual firewall rule audit essential. Tools help: rule usage analytics, automated cleanup recommendations."
  },
  {
    id: 14,
    question: "A company implements an IPS (Intrusion Prevention System) inline with their firewall. Users report slow application performance. Investigation shows the IPS is inspecting and buffering all traffic. What is the trade-off of inline IPS placement?",
    options: [
      "Inline IPS provides no security benefits",
      "Inline IPS can block attacks in real-time but adds latency and becomes a potential bottleneck and single point of failure",
      "Inline IPS is always faster than out-of-band IPS",
      "Inline IPS cannot detect attacks"
    ],
    correct: 1,
    explanation: "IPS deployment modes: 1) Inline (in-band): sits in traffic path, can block attacks immediately, adds latency (inspects all packets), single point of failure (if IPS fails, traffic stops—need bypass). 2) Out-of-band (passive/monitor): receives copy of traffic (SPAN/TAP), detects attacks but cannot block (alerts only), no latency, no disruption. Inline IPS benefits: active protection (blocks attacks automatically), prevents exploitation. Drawbacks: latency (packets buffered for inspection), throughput limitation (becomes bottleneck), availability (must be redundant). Tuning: balance security vs performance, bypass non-critical traffic, hardware acceleration, signature optimization. Critical networks: redundant IPS pairs, fail-open vs fail-closed decision (availability vs security). IDS = passive monitoring; IPS = active blocking."
  },
  {
    id: 15,
    question: "A firewall administrator needs to allow internal DNS servers to query external DNS servers but block all other outbound DNS queries from the network. What is the most secure way to implement this?",
    options: [
      "Allow all UDP port 53 outbound from any internal host",
      "Allow UDP/TCP port 53 outbound only from internal DNS server IPs to any destination; deny all other outbound DNS",
      "Block all DNS traffic entirely",
      "Allow DNS only during business hours"
    ],
    correct: 1,
    explanation: "DNS security and firewall rules: Best practice: only DNS servers query external DNS—prevents: 1) DNS tunneling (data exfiltration via DNS queries), 2) Malware C2 over DNS, 3) DNS hijacking, 4) Visibility (all DNS goes through controlled servers). Firewall rules: 1) Permit UDP/TCP 53 from internal DNS servers (10.1.1.10, 10.1.1.11) to any (internet DNS), 2) Permit UDP/TCP 53 from internal hosts to internal DNS servers, 3) Deny all other port 53 traffic. Why TCP also? DNS uses TCP for: zone transfers (AXFR), large responses (>512 bytes), DNSSEC. DNS security: 1) DNSSEC (validate responses), 2) DNS filtering (block malicious domains), 3) Encrypted DNS (DoH, DoT), 4) Monitor DNS queries (detect exfiltration). Corporate DNS architecture: internal DNS → forwarders → external DNS (controlled egress point)."
  }
];

// Export for use in quiz component
export default lesson24Quiz;