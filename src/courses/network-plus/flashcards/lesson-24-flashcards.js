// Flashcards for Lesson 24: Firewalls and Access Control Lists

export const lesson24Flashcards = [
  {
    id: 1,
    front: "What is a firewall and its primary purpose?",
    back: "Firewall filters network traffic based on defined rules, controlling what enters/exits network. Purpose: block unauthorized access, allow legitimate traffic, enforce security policy. Operates at: network perimeter, between network segments. Examines: IP addresses, ports, protocols, application data (advanced). Two default philosophies: implicit deny (block all except allowed) OR allow all except blocked. Modern standard: implicit deny (whitelist approach)."
  },
  {
    id: 2,
    front: "What are inbound vs outbound firewall rules?",
    back: "Inbound rules: control traffic entering network from outside (internet → internal). Typically strict: block most, allow specific services (HTTPS, email). Outbound rules: control traffic leaving network to outside (internal → internet). Often more permissive but should restrict: malware C2, data exfiltration, unnecessary protocols. Best practice: control both directions. Many orgs mistakenly ignore outbound (allows data theft, compromised machines calling home)."
  },
  {
    id: 3,
    front: "What is implicit deny?",
    back: "Implicit deny: default rule at end of ACL/firewall that blocks all traffic not explicitly allowed. 'Deny any any' rule (hidden or explicit). Whitelist approach: specify what's allowed, everything else blocked. Security best practice. Alternative: implicit allow (blacklist - allow all except specified) is dangerous. Always ends with implicit deny. Forces explicit permit rules. If no rules match, traffic dropped."
  },
  {
    id: 4,
    front: "What is a stateless firewall (packet filtering)?",
    back: "Stateless firewall examines each packet independently without tracking connections. Checks: source/destination IP, ports, protocol. No memory of previous packets. Fast but limited. Can't: track connection state, prevent spoofing, understand sessions. Must create: rules for both directions (allow request AND response). Example: basic ACL. Legacy approach. Simple but effective for basic filtering. No awareness of TCP handshake."
  },
  {
    id: 5,
    front: "What is a stateful firewall?",
    back: "Stateful firewall tracks connection state (TCP sessions, UDP 'connections'). Maintains state table of established connections. Automatically allows return traffic for established sessions. Benefits: smarter filtering, better security, fewer rules needed (no bidirectional rules). Understands: TCP handshake, connection establishment/teardown. Modern standard. Prevents: unsolicited inbound, certain spoofing attacks. More resource-intensive than stateless but worth it."
  },
  {
    id: 6,
    front: "What is the difference between stateless and stateful firewalls?",
    back: "Stateless: treats each packet independently, no connection memory, requires bidirectional rules, fast, simple, limited security. Stateful: tracks connections, remembers sessions, auto-allows return traffic, understands protocols, better security, more resource-intensive. Example: Stateless needs 'allow 80 inbound AND allow source port 80 outbound'. Stateful: 'allow 80 inbound' automatically permits return traffic. Always choose stateful when possible."
  },
  {
    id: 7,
    front: "What is a Next-Generation Firewall (NGFW)?",
    back: "NGFW combines traditional firewall with advanced features: 1) Application awareness (identifies apps regardless of port), 2) Deep packet inspection (DPI - examines payload), 3) Integrated IPS (blocks attacks), 4) User/identity awareness (not just IP), 5) SSL/TLS decryption (inspect encrypted traffic), 6) Threat intelligence integration. Examples: Palo Alto, Cisco Firepower, Fortinet. Modern enterprise standard. Layer 7 visibility. More than just ports/IPs."
  },
  {
    id: 8,
    front: "What is application awareness in NGFW?",
    back: "Application awareness identifies applications regardless of port/protocol used. Traditional firewall: allows port 443 (any HTTPS). NGFW: distinguishes Facebook vs banking vs VPN over same port 443. Can: allow Salesforce, block BitTorrent, restrict YouTube to 720p. Benefits: granular control, prevents port hopping (apps using non-standard ports), policy based on business need not just ports. Signatures updated regularly. Game-changer for security."
  },
  {
    id: 9,
    front: "What is Deep Packet Inspection (DPI)?",
    back: "DPI examines packet payload (content) not just headers. Analyzes: application data, file types, patterns, signatures. Enables: malware detection, data loss prevention, protocol anomalies, application control. Resource-intensive (CPU). Privacy concerns (reading traffic). Requires: SSL decryption for HTTPS. Used by: NGFW, IPS, DLP. Goes beyond 'allow port 80' to 'what's actually in the traffic'. Critical for modern threats."
  },
  {
    id: 10,
    front: "What is a Web Application Firewall (WAF)?",
    back: "WAF protects web applications (Layer 7) from attacks. Sits in front of web servers. Blocks: SQL injection, XSS (cross-site scripting), CSRF, file inclusion, DDoS. Understands: HTTP/HTTPS, application logic, web vulnerabilities. Deployment: reverse proxy (inline), monitor mode. Examples: Cloudflare, AWS WAF, F5. Different from network firewall (which protects network). Complementary: NGFW + WAF for complete protection."
  },
  {
    id: 11,
    front: "What are common firewall deployment locations?",
    back: "Network perimeter: between internet and internal network (edge firewall). DMZ: front and back of screened subnet. Internal segmentation: between network zones/VLANs. Data center: protecting critical servers. Host-based: software on individual systems. Cloud: virtual firewalls in cloud infrastructure. Multiple layers (defense in depth) better than single perimeter. Right placement depends on: architecture, threats, compliance."
  },
  {
    id: 12,
    front: "What is a network-based firewall vs host-based firewall?",
    back: "Network-based: hardware appliance or VM protecting entire network/segment. Centralized management, high throughput, protects multiple systems. Examples: Palo Alto, Cisco ASA, pfSense. Host-based: software on individual computer (Windows Firewall, iptables). Protects single host, defense in depth, mobile protection, granular per-app control. Best practice: use BOTH. Network firewall protects perimeter, host firewall protects individual systems."
  },
  {
    id: 13,
    front: "What is an Access Control List (ACL)?",
    back: "ACL is ordered list of permit/deny rules filtering traffic. Applied to: router/switch interfaces, firewalls. Processes: top to bottom, first match wins, stops processing (implicit deny at end). Components: sequence number, action (permit/deny), protocol, source, destination, port. Direction: inbound (entering interface) or outbound (leaving interface). Powerful tool but: careful ordering critical, one mistake breaks connectivity. Test before deploying."
  },
  {
    id: 14,
    front: "What is a standard ACL vs extended ACL?",
    back: "Standard ACL: filters based on source IP address only. Numbered 1-99, 1300-1999. Simple but limited. Placement: close to destination. Extended ACL: filters based on source IP, destination IP, protocol, ports. Numbered 100-199, 2000-2699. Much more granular control. Placement: close to source. Always use extended when possible (more control). Standard ACL rarely used (too limiting). Extended is industry standard."
  },
  {
    id: 15,
    front: "Where should you place ACLs (close to source or destination)?",
    back: "Standard ACL (source IP only): place close to DESTINATION (so you can filter specific sources per destination). Extended ACL (full control): place close to SOURCE (block bad traffic early, save bandwidth). Rationale: extended ACL has enough granularity to avoid blocking good traffic, standard ACL too broad if near source. Rule of thumb: 'Standard destination, Extended source.' Proper placement critical for effective filtering without blocking legitimate traffic."
  },
  {
    id: 16,
    front: "What are wildcard masks in ACLs?",
    back: "Wildcard mask is inverse of subnet mask. 0 = must match exactly, 1 = don't care (any value). Examples: 0.0.0.0 = match entire IP exactly. 0.0.0.255 = match first 3 octets, last octet any. 255.255.255.255 = match any IP (any). Calculate: subtract subnet mask from 255.255.255.255. Example: /24 (255.255.255.0) → wildcard 0.0.0.255. Used in: Cisco ACLs, OSPF, EIGRP. Opposite logic from subnet masks!"
  },
  {
    id: 17,
    front: "How do ACLs process traffic?",
    back: "Top-to-bottom evaluation: starts at line 1, checks each rule in order. First match wins: when packet matches rule, action taken immediately, stops processing. Implicit deny: if no rules match, packet dropped (deny any any at end). Order matters: specific rules before general rules. Can't reach: rules below first match never evaluated. Best practice: most specific first, most common first (performance), document well, test thoroughly."
  },
  {
    id: 18,
    front: "What is a DMZ (Demilitarized Zone)?",
    back: "DMZ is isolated network segment for public-facing servers (web, email, DNS, FTP). Also called screened subnet. Typical design: Internet → External Firewall → DMZ → Internal Firewall → Internal Network. If DMZ server compromised, attacker can't easily reach internal network. Rules: internet can access DMZ (restricted), DMZ cannot initiate to internal, internal can access DMZ. Three-legged firewall. Critical security architecture. Never put internal servers in DMZ!"
  },
  {
    id: 19,
    front: "What is dual firewall DMZ architecture?",
    back: "Dual firewall DMZ uses two separate firewalls: External firewall: between internet and DMZ (filters inbound public access). Internal firewall: between DMZ and internal network (protects internal from DMZ). Benefits: defense in depth, compromise of one doesn't expose internal, different security zones. More secure than single firewall with three interfaces. More expensive and complex. Enterprise standard for high-security requirements."
  },
  {
    id: 20,
    front: "What is NAT (Network Address Translation) on firewalls?",
    back: "NAT translates private IPs to public IPs (and vice versa). Enables: private networks to share public IPs, hides internal topology, additional security layer (obscurity). Types: Static NAT (1:1 mapping), Dynamic NAT (pool of public IPs), PAT/NAT Overload (many to one - most common). Direction: inside to outside (typical), outside to inside (for servers). Configured on: firewall or router. IPv4 address conservation technique."
  },
  {
    id: 21,
    front: "What are the three types of NAT?",
    back: "Static NAT: 1:1 mapping (one private to one public IP), permanent, for servers. Dynamic NAT: many private to pool of public IPs, first-come-first-served from pool, temporary mappings. PAT (Port Address Translation/NAT Overload): many private to one public IP using different source ports, most common, home routers. Choose: static for servers needing consistent external IP, PAT for clients (conserves addresses). PAT is why your home works with one IP."
  },
  {
    id: 22,
    front: "What is port forwarding?",
    back: "Port forwarding directs inbound traffic on specific port to internal host. Configuration: external IP:port → internal IP:port. Example: external 203.0.113.5:80 → internal 192.168.1.100:80 (web server). Use cases: host servers behind NAT, remote access, gaming, P2P. Security risk: opens path to internal network. Alternative: VPN (more secure), reverse proxy. Also called: destination NAT, port mapping. Configure on firewall/router. Requires static NAT for server."
  },
  {
    id: 23,
    front: "What is the order of firewall rule processing?",
    back: "1) Explicit deny rules first (block known bad). 2) Explicit permit rules (allow necessary traffic). 3) Implicit deny (catch-all at end). Within each section: most specific to most general. Example order: deny bad IPs → allow web servers → allow database from app servers → allow users to internet → deny all. More specific rules higher. Test impact before deployment. One wrong rule breaks network or creates security hole."
  },
  {
    id: 24,
    front: "What should a basic firewall ruleset include?",
    back: "Minimum rules: 1) Block private IPs from internet (spoofing), 2) Block invalid source IPs (0.0.0.0, 255.x, multicast), 3) Allow established/related (return traffic), 4) Allow required inbound services (web, email servers), 5) Allow outbound from internal, 6) Deny and log everything else. Also consider: block ICMP (or rate limit), allow DNS/NTP, geo-blocking if needed. Start restrictive, open as needed. Document every rule."
  },
  {
    id: 25,
    front: "Quick scenario: Design firewall rules for web server in DMZ",
    back: "Internet → DMZ (external FW): Allow TCP 80, 443 to web server, allow return traffic, deny all else. DMZ → Internal (internal FW): Allow web server to database on specific port only, deny web server to other internal. Internal → DMZ: Allow admins SSH/RDP to web server (specific IPs), allow monitoring. Log all traffic. Monitor logs for: attacks, unusual patterns. Principle: least privilege, specific rules, defense in depth."
  },
  {
    id: 26,
    front: "What is SSL/TLS inspection on firewalls?",
    back: "SSL/TLS inspection decrypts HTTPS traffic for analysis, then re-encrypts before forwarding. Process: firewall acts as proxy, intercepts SSL connection, inspects decrypted traffic, re-encrypts to destination. Enables: malware detection in HTTPS, DLP, policy enforcement. Challenges: performance impact, certificate trust (install FW cert on clients), privacy concerns, breaks certificate pinning. Critical because: 80%+ traffic is encrypted. Configure exceptions: banking, healthcare (privacy)."
  },
  {
    id: 27,
    front: "What is geo-blocking/geo-filtering?",
    back: "Geo-blocking blocks traffic based on geographic location (country, region). Uses: IP geolocation databases. Reasons: compliance (regulations), reduce attack surface (no business in certain countries), block malicious regions. Implementation: firewall rule, CDN, cloud service. Limitations: VPNs bypass, geolocation imperfect. Use cases: block countries you don't serve, block high-risk regions, compliance requirements (OFAC sanctions). Balancing act: security vs false positives."
  },
  {
    id: 28,
    front: "What is firewall high availability?",
    back: "HA firewalls provide redundancy for no single point of failure. Methods: Active-passive (one active, one standby - VRRP for failover), Active-active (both processing, load balanced). State synchronization: connection tables replicated between firewalls (stateful failover). Shared config. Heartbeat monitoring. Automatic failover (seconds). Enterprise requirement. Cost: double hardware, complexity. Alternatives: cloud-based firewalls (built-in HA). Never single firewall for critical networks."
  },
  {
    id: 29,
    front: "What common firewall misconfigurations cause problems?",
    back: "Rules out of order (broad rule before specific), allowing 'any any' outbound (no security), not blocking RFC 1918 from internet (spoofing), forgetting return traffic (stateless), overlapping rules (confusion), no logging (blind), default deny without needed permits (breaks network), permitting unnecessary services (attack surface), not documenting rules (nobody knows why), never reviewing (stale rules accumulate)."
  },
  {
    id: 30,
    front: "Speed drill: Match firewall type to characteristic - Stateless, Stateful, NGFW, WAF, Host-based",
    back: "Stateless: packet filtering, no connection tracking. Stateful: tracks sessions, return traffic. NGFW: application aware, DPI, IPS. WAF: protects web apps, Layer 7. Host-based: software on endpoint. Know firewall types for exam scenarios!"
  }
];