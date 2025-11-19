// Flashcards for Lesson 24: Firewalls and Access Control Lists (SHORTENED)

export const lesson24Flashcards = [
  {
    id: 1,
    front: "What is a firewall's primary purpose?",
    back: "Filters network traffic based on rules. Blocks unauthorized access, allows legitimate traffic, enforces security policy. Modern standard: implicit deny (block all except allowed)."
  },
  {
    id: 2,
    front: "Inbound vs outbound firewall rules?",
    back: "Inbound: traffic entering network (internet → internal), typically strict. Outbound: traffic leaving network (internal → internet), often permissive but should restrict malware C2 and data exfiltration."
  },
  {
    id: 3,
    front: "What is implicit deny?",
    back: "Default rule at end of ACL/firewall blocking all traffic not explicitly allowed. 'Deny any any' rule. Whitelist approach. Security best practice. If no rules match, traffic dropped."
  },
  {
    id: 4,
    front: "What is a stateless firewall?",
    back: "Examines each packet independently without tracking connections. Checks source/destination IP, ports, protocol. Fast but limited. Must create rules for both directions. No awareness of TCP sessions."
  },
  {
    id: 5,
    front: "What is a stateful firewall?",
    back: "Tracks connection state (TCP sessions). Maintains state table. Automatically allows return traffic for established sessions. Smarter filtering, fewer rules needed. Modern standard."
  },
  {
    id: 6,
    front: "Stateless vs stateful firewalls?",
    back: "Stateless: treats each packet independently, requires bidirectional rules, fast, simple. Stateful: tracks connections, auto-allows return traffic, better security. Always choose stateful when possible."
  },
  {
    id: 7,
    front: "What is a Next-Generation Firewall (NGFW)?",
    back: "Traditional firewall + advanced features: application awareness (identifies apps regardless of port), deep packet inspection, integrated IPS, user/identity awareness, SSL/TLS decryption. Layer 7 visibility."
  },
  {
    id: 8,
    front: "What is application awareness in NGFW?",
    back: "Identifies applications regardless of port used. Can allow Salesforce but block BitTorrent over same port 443. Granular control, prevents port hopping. Policy based on business need not just ports."
  },
  {
    id: 9,
    front: "What is Deep Packet Inspection (DPI)?",
    back: "Examines packet payload (content) not just headers. Enables malware detection, DLP, protocol anomalies, application control. Resource-intensive. Used by NGFW, IPS."
  },
  {
    id: 10,
    front: "What is a Web Application Firewall (WAF)?",
    back: "Protects web applications (Layer 7). Blocks SQL injection, XSS, CSRF, DDoS. Sits in front of web servers. Different from network firewall. Examples: Cloudflare, AWS WAF."
  },
  {
    id: 11,
    front: "Common firewall deployment locations?",
    back: "Network perimeter (edge), DMZ (front/back), internal segmentation (between VLANs), data center, host-based, cloud. Multiple layers (defense in depth) better than single perimeter."
  },
  {
    id: 12,
    front: "Network-based vs host-based firewall?",
    back: "Network-based: hardware/VM protecting entire network/segment, centralized. Host-based: software on individual computer (Windows Firewall). Best practice: use BOTH for defense in depth."
  },
  {
    id: 13,
    front: "What is an Access Control List (ACL)?",
    back: "Ordered list of permit/deny rules filtering traffic. Top to bottom processing, first match wins, implicit deny at end. Components: action, protocol, source, destination, port."
  },
  {
    id: 14,
    front: "Standard ACL vs extended ACL?",
    back: "Standard: source IP only, numbered 1-99. Limited. Extended: source, destination, protocol, ports, numbered 100-199. More granular. Always use extended when possible."
  },
  {
    id: 15,
    front: "Where to place ACLs?",
    back: "Standard ACL: close to DESTINATION. Extended ACL: close to SOURCE (block bad traffic early). Rule: 'Standard destination, Extended source.'"
  },
  {
    id: 16,
    front: "What are wildcard masks?",
    back: "Inverse of subnet mask. 0 = must match, 1 = don't care. Examples: 0.0.0.255 = match first 3 octets. Calculate: 255.255.255.255 - subnet mask. Used in Cisco ACLs."
  },
  {
    id: 17,
    front: "How do ACLs process traffic?",
    back: "Top-to-bottom, first match wins, implicit deny at end. Order matters: specific rules before general. Most common first for performance. Test thoroughly before deploying."
  },
  {
    id: 18,
    front: "What is a DMZ (Demilitarized Zone)?",
    back: "Isolated network segment for public-facing servers. Internet → External FW → DMZ → Internal FW → Internal. If DMZ compromised, internal protected. Also called screened subnet."
  },
  {
    id: 19,
    front: "Dual firewall DMZ architecture?",
    back: "Two separate firewalls: External (internet to DMZ), Internal (DMZ to internal). Defense in depth. More secure than single three-legged firewall. Enterprise standard."
  },
  {
    id: 20,
    front: "What is NAT on firewalls?",
    back: "Network Address Translation - translates private IPs to public. Enables sharing public IPs, hides internal topology. Types: Static (1:1), Dynamic (pool), PAT (many to one)."
  },
  {
    id: 21,
    front: "Three types of NAT?",
    back: "Static NAT: 1:1 mapping, for servers. Dynamic NAT: many to pool of public IPs. PAT (NAT Overload): many to one public IP using different ports, most common (home routers)."
  },
  {
    id: 22,
    front: "What is port forwarding?",
    back: "Directs inbound traffic on specific port to internal host. Example: external port 80 → internal 192.168.1.100:80. Use for servers behind NAT. Security risk - opens internal path."
  },
  {
    id: 23,
    front: "Order of firewall rule processing?",
    back: "1) Explicit deny (block known bad), 2) Explicit permit (allow necessary), 3) Implicit deny (catch-all). Within each: most specific to general. Test before deployment."
  },
  {
    id: 24,
    front: "Basic firewall ruleset minimums?",
    back: "Block private IPs from internet (spoofing), block invalid sources, allow established/related, allow required inbound services, allow outbound from internal, deny and log all else."
  },
  {
    id: 25,
    front: "Design firewall rules for web server in DMZ?",
    back: "Internet→DMZ: Allow 80/443 to web server, deny all else. DMZ→Internal: Allow web to database only (specific port). Internal→DMZ: Allow admin SSH/RDP. Log all traffic. Least privilege."
  },
  {
    id: 26,
    front: "What is SSL/TLS inspection?",
    back: "Decrypts HTTPS traffic for analysis, re-encrypts before forwarding. Firewall acts as proxy. Enables malware detection in encrypted traffic. Challenges: performance, privacy, certificate trust."
  },
  {
    id: 27,
    front: "What is geo-blocking?",
    back: "Blocks traffic based on geographic location (country/region). Uses IP geolocation. Reasons: compliance, reduce attack surface, block high-risk regions. Limitations: VPNs bypass."
  },
  {
    id: 28,
    front: "What is firewall high availability?",
    back: "Redundant firewalls for no single point of failure. Active-passive (one standby) or Active-active (load balanced). State synchronization, automatic failover. Enterprise requirement."
  },
  {
    id: 29,
    front: "Common firewall misconfigurations?",
    back: "Rules out of order, allowing 'any any' outbound, not blocking RFC 1918 from internet, forgetting return traffic, no logging, not documenting rules, never reviewing (stale rules)."
  },
  {
    id: 30,
    front: "Match: Stateless / Stateful / NGFW / WAF / Host-based",
    back: "Stateless = packet filtering, no tracking. Stateful = tracks sessions. NGFW = application aware, DPI, IPS. WAF = protects web apps. Host-based = software on endpoint."
  }
];