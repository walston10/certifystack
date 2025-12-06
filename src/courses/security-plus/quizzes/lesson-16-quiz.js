export const lesson16Quiz = [
  {
    id: 1,
    question: "A network administrator replaces Telnet with SSH for remote device management. What security improvement does this provide?",
    options: [
      "Faster connections",
      "Encrypted communication replacing cleartext transmission",
      "Better graphics",
      "Reduced bandwidth"
    ],
    correct: 1,
    explanation: "SSH (Secure Shell) provides ENCRYPTED remote access, replacing Telnet's cleartext transmission. Telnet vs SSH: (1) Telnet - all traffic in cleartext (passwords visible), (2) SSH - encrypted tunnel, credentials protected. Secure protocol replacements: (1) Telnet → SSH (port 22), (2) FTP → SFTP/FTPS, (3) HTTP → HTTPS, (4) SNMP v1/v2 → SNMPv3, (5) LDAP → LDAPS. SSH features: (1) Encrypted communication, (2) Key-based authentication, (3) Port forwarding, (4) Secure file transfer (SCP, SFTP). Why still matters: many devices default to insecure protocols. Hardening should disable insecure protocols and enable secure alternatives. Any credentials or data sent over cleartext can be captured by network sniffing."
  },
  {
    id: 2,
    question: "An organization implements 802.1X on their network switches. Before devices can access the network, they must authenticate. What security control is this?",
    options: [
      "Firewall",
      "NAC (Network Access Control) - authenticating devices before network access",
      "IDS",
      "VPN"
    ],
    correct: 1,
    explanation: "802.1X is a NAC (Network Access Control) standard that authenticates devices before granting network access. 802.1X components: (1) SUPPLICANT - device requesting access, (2) AUTHENTICATOR - switch/AP enforcing access, (3) AUTHENTICATION SERVER - RADIUS server verifying credentials. Process: (1) Device connects, port is unauthorized, (2) Device provides credentials, (3) Authenticator sends to RADIUS, (4) If approved, port authorized, (5) If denied, port remains blocked or VLAN-quarantined. Benefits: (1) No network access without authentication, (2) Can assign VLAN based on identity, (3) Posture assessment possible, (4) Guest/quarantine VLANs for non-compliant. NAC expands 802.1X: may include device health checks, compliance verification. 802.1X is foundational for zero-trust network access - verify before granting access."
  },
  {
    id: 3,
    question: "Email from the company's domain is being spoofed in phishing attacks. The security team implements DNS records that specify which servers can send email for their domain. What technology is this?",
    options: [
      "DNSSEC",
      "SPF (Sender Policy Framework) - DNS record listing authorized email senders",
      "SSL/TLS",
      "VPN"
    ],
    correct: 1,
    explanation: "SPF (Sender Policy Framework) is a DNS record specifying which servers are authorized to send email for a domain. Email authentication trio: (1) SPF - lists authorized sending IPs, (2) DKIM - cryptographic signature on emails, (3) DMARC - policy for handling failures, reporting. SPF record example: 'v=spf1 include:_spf.google.com -all' (only Google can send). How SPF works: (1) Receiver gets email claiming from @company.com, (2) Receiver checks SPF record for company.com, (3) If sending IP not in SPF, likely spoofed. Limitations: (1) Only checks envelope sender, (2) Forwarding breaks SPF, (3) Need DKIM and DMARC too. DMARC adds: (1) Policy (reject, quarantine, none), (2) Reporting, (3) Aligns SPF/DKIM with visible sender. Implement all three for effective email authentication."
  },
  {
    id: 4,
    question: "A company implements DNS over HTTPS (DoH) for all endpoints. What security benefit does this provide?",
    options: [
      "Faster DNS resolution",
      "Encrypted DNS queries preventing eavesdropping and manipulation",
      "Better caching",
      "Reduced DNS traffic"
    ],
    correct: 1,
    explanation: "DNS over HTTPS (DoH) encrypts DNS queries, preventing eavesdropping and manipulation. Traditional DNS problems: (1) Queries in cleartext, (2) Visible to network observers, (3) Subject to manipulation (DNS poisoning), (4) Privacy concerns. Secure DNS options: (1) DoH - DNS over HTTPS (port 443), (2) DoT - DNS over TLS (port 853). Benefits: (1) Privacy - ISP can't see DNS queries, (2) Integrity - prevents tampering, (3) Bypass censorship. Challenges for security teams: (1) Bypasses corporate DNS filtering, (2) C2 can hide in DoH traffic, (3) Less visibility. Enterprise approach: (1) Configure corporate DoH resolver, (2) Block external DoH, (3) Inspect DoH traffic, (4) Policy-based controls. DoH is security improvement for privacy but changes how organizations monitor DNS."
  },
  {
    id: 5,
    question: "A security engineer implements an email gateway that scans attachments in a sandbox, rewrites URLs for click-time analysis, and blocks known malicious senders. What type of security control is this?",
    options: [
      "Firewall",
      "Secure Email Gateway (SEG) - filtering and protecting email traffic",
      "IDS",
      "VPN"
    ],
    correct: 1,
    explanation: "SECURE EMAIL GATEWAY (SEG) provides comprehensive email security including filtering, scanning, and protection. SEG capabilities: (1) Spam filtering, (2) Malware scanning (including sandbox), (3) URL rewriting and click-time analysis, (4) Attachment filtering, (5) Phishing detection, (6) BEC protection, (7) DLP for outbound email. Sandbox analysis: (1) Execute attachments in isolated environment, (2) Observe behavior, (3) Block if malicious. URL rewriting: (1) Replace links with gateway URLs, (2) Analyze at click time (catches delayed threats), (3) Block if malicious when clicked. Why email security matters: email is #1 attack vector. Defense layers: (1) SEG at perimeter, (2) Endpoint protection, (3) User awareness training. Modern threats: advanced phishing, BEC, macro malware - SEG provides critical protection layer."
  },
  {
    id: 6,
    question: "An organization deploys endpoint detection and response (EDR) on all workstations and servers. What does EDR provide beyond traditional antivirus?",
    options: [
      "Basic signature scanning only",
      "Continuous monitoring, behavioral analysis, and incident response capabilities",
      "Firewall functions only",
      "Encryption only"
    ],
    correct: 1,
    explanation: "EDR (Endpoint Detection and Response) provides advanced threat detection and response beyond traditional AV. EDR vs Traditional AV: (1) AV - signature-based, blocks known malware, (2) EDR - behavioral analysis, detects unknown threats, investigation tools. EDR capabilities: (1) Continuous monitoring of endpoint activity, (2) Behavioral analysis (detect suspicious patterns), (3) Threat hunting tools, (4) Incident investigation and forensics, (5) Automated response (isolate, kill process), (6) Telemetry for SOC analysis. What EDR detects: fileless malware, living-off-the-land attacks, lateral movement, persistence mechanisms. XDR (Extended): EDR + network + cloud + email correlation. EDR requires: skilled analysts to use effectively, integration with SOC. EDR is essential for modern threat detection - signature-based AV alone is insufficient."
  },
  {
    id: 7,
    question: "A DLP (Data Loss Prevention) system detects an employee emailing a spreadsheet containing Social Security numbers and blocks the transmission. What type of DLP action is this?",
    options: [
      "Detection only",
      "Prevention/Blocking - actively stopping data exfiltration",
      "Logging only",
      "Encryption"
    ],
    correct: 1,
    explanation: "DLP PREVENTION actively blocks unauthorized data transmission, not just detecting and alerting. DLP actions: (1) MONITOR - log and alert, allow transmission, (2) BLOCK - prevent transmission entirely, (3) QUARANTINE - hold for review, (4) ENCRYPT - allow but encrypt. DLP deployment points: (1) NETWORK - monitor traffic at egress, (2) ENDPOINT - monitor local actions (USB, print, copy), (3) CLOUD - monitor cloud application data. Content detection methods: (1) Keywords/patterns (SSN, credit cards), (2) Document fingerprinting, (3) Machine learning, (4) Exact data matching. DLP policies define: what data, what actions, what response. Implementation: start with monitor mode, understand data flows, then enable blocking. DLP requires accurate classification - too many false positives make it unusable."
  },
  {
    id: 8,
    question: "A network uses SNMPv3 with authentication and encryption for device monitoring, replacing the older SNMPv2c deployment. What security improvement does SNMPv3 provide?",
    options: [
      "Faster monitoring",
      "Authentication and encryption replacing cleartext community strings",
      "More devices supported",
      "Better graphs"
    ],
    correct: 1,
    explanation: "SNMPv3 provides AUTHENTICATION and ENCRYPTION, replacing v1/v2c's insecure community strings. SNMP version security: (1) SNMPv1 - cleartext community string (password), (2) SNMPv2c - still cleartext community string, (3) SNMPv3 - authentication (MD5/SHA) + encryption (DES/AES). SNMPv3 security features: (1) USM - User-based Security Model, (2) Authentication - verify identity, (3) Encryption - protect data, (4) VACM - View-based Access Control. Why v1/v2c are dangerous: (1) Community string sent in cleartext, (2) Can be sniffed easily, (3) Often 'public' for read, 'private' for write, (4) Write access = device compromise. SNMP hardening: (1) Use SNMPv3 with auth+encryption, (2) If v2c required, restrict by IP, (3) Never use default community strings, (4) Limit SNMP access to management network."
  },
  {
    id: 9,
    question: "A web application firewall (WAF) blocks requests containing SQL injection patterns before they reach the web server. Where is the WAF positioned in the network architecture?",
    options: [
      "Behind the web server",
      "In front of web servers, inspecting requests before they reach the application",
      "On client devices",
      "In the database"
    ],
    correct: 1,
    explanation: "WAF (Web Application Firewall) sits IN FRONT of web servers, inspecting and filtering HTTP/HTTPS traffic. WAF position: Internet → Firewall → WAF → Web Server → Database. WAF functions: (1) Inspect HTTP requests/responses, (2) Block attack patterns (SQLi, XSS, etc.), (3) Virtual patching, (4) Rate limiting, (5) Bot protection. WAF vs Network Firewall: (1) Network firewall - Layer 3/4 (IP, ports), (2) WAF - Layer 7 (application content). WAF detection methods: (1) Signature-based (known attack patterns), (2) Anomaly-based (deviation from normal), (3) Positive security model (only allow expected input). Deployment: on-premises appliance, cloud service (Cloudflare, AWS WAF), reverse proxy mode. WAF doesn't replace secure coding but provides defense layer against common attacks."
  },
  {
    id: 10,
    question: "A company configures their switches to allow only one MAC address per port and shuts down the port if a second device is connected. What security feature is this?",
    options: [
      "VLAN tagging",
      "Port security - limiting devices per switch port",
      "Spanning tree",
      "Link aggregation"
    ],
    correct: 1,
    explanation: "PORT SECURITY limits which/how many devices can connect to a switch port. Port security features: (1) Limit MAC addresses per port, (2) Sticky MAC learning (remember authorized MACs), (3) Violation actions (shutdown, restrict, protect). Violation actions: (1) SHUTDOWN - disable port (most secure), (2) RESTRICT - drop unauthorized, log, continue, (3) PROTECT - drop unauthorized, no log. Use cases: (1) Prevent unauthorized device connection, (2) Stop MAC flooding attacks, (3) Limit hub/switch behind port. Configuration example: (1) Maximum 1 MAC address, (2) Sticky learning (learn first device), (3) Shutdown on violation. Port security challenges: (1) IP phones with PC behind (need 2 MACs), (2) VoIP VLAN considerations, (3) Recovery from false positives. Port security is Layer 2 NAC - simple but effective control."
  },
  {
    id: 11,
    question: "A security team implements DNSSEC to protect their domain's DNS records. What does DNSSEC provide?",
    options: [
      "Encryption of DNS queries",
      "Authentication and integrity of DNS responses through digital signatures",
      "Faster DNS resolution",
      "Private DNS names"
    ],
    correct: 1,
    explanation: "DNSSEC provides AUTHENTICATION and INTEGRITY for DNS responses through cryptographic signatures. What DNSSEC does: (1) Signs DNS records with cryptographic keys, (2) Recipients can verify signatures, (3) Detects tampering or spoofed responses. What DNSSEC doesn't do: (1) Encrypt queries (still visible), (2) Hide what you're looking up, (3) Prevent DDoS. DNSSEC vs DoH/DoT: (1) DNSSEC - authenticates responses, (2) DoH/DoT - encrypts queries. DNSSEC chain of trust: (1) Root zone signed, (2) TLD zones signed, (3) Domain zones signed, (4) Validation up the chain. DNSSEC adoption: protects against DNS cache poisoning, zone manipulation. Challenges: (1) Increased DNS response size, (2) Key management, (3) Not all resolvers validate. For complete DNS security: DNSSEC (integrity) + DoH/DoT (privacy)."
  },
  {
    id: 12,
    question: "A reverse proxy is placed in front of internal web applications, terminating SSL connections and performing authentication before forwarding requests. What security benefits does this provide?",
    options: [
      "Faster internal networks",
      "Centralized security, SSL offloading, and protection of internal servers",
      "Database optimization",
      "File storage"
    ],
    correct: 1,
    explanation: "REVERSE PROXY provides centralized security controls and protects internal servers from direct exposure. Reverse proxy benefits: (1) SSL TERMINATION - handles encryption, offloads from servers, (2) CENTRALIZED AUTH - authenticate before reaching app, (3) HIDING INTERNAL - servers not directly exposed, (4) LOAD BALANCING, (5) CACHING, (6) WAF INTEGRATION. Security functions: (1) Pre-authentication (enforce MFA), (2) Request filtering, (3) Rate limiting, (4) IP whitelisting/blacklisting, (5) Header manipulation. Architecture: Internet → Reverse Proxy → Internal Servers. Servers only accept connections from proxy. vs Forward Proxy: (1) Forward - client uses proxy to reach internet, (2) Reverse - proxy receives requests for servers. Common implementations: Nginx, HAProxy, F5, cloud load balancers. Reverse proxy is key component of secure application architecture."
  },
  {
    id: 13,
    question: "An organization's routers are configured to only accept routing updates from authenticated neighbors using MD5 hashes. What is this security control protecting against?",
    options: [
      "DDoS attacks",
      "Routing protocol attacks - preventing unauthorized route injection",
      "Phishing",
      "Malware"
    ],
    correct: 1,
    explanation: "ROUTING PROTOCOL AUTHENTICATION prevents attackers from injecting malicious routes. Routing attacks: (1) Rogue router advertising false routes, (2) Route hijacking (traffic redirect), (3) Black hole routing (traffic dropped), (4) Man-in-the-middle via route manipulation. Authentication methods: (1) MD5 hash (common but aging), (2) SHA-based (stronger), (3) Keychain rotation. Protocols supporting authentication: OSPF, EIGRP, BGP, RIPv2. What authentication prevents: (1) Unauthorized routers joining, (2) False route advertisements, (3) Routing table manipulation. BGP security additional: (1) RPKI (Resource Public Key Infrastructure), (2) BGP route filtering, (3) Prefix validation. Infrastructure attacks are high-impact - routing manipulation can redirect entire networks. Authentication is baseline; additional validation needed for BGP."
  },
  {
    id: 14,
    question: "A honeypot is deployed that appears to be a vulnerable web server. It has no legitimate business purpose but logs all connection attempts. What is the primary purpose of this honeypot?",
    options: [
      "Load balancing",
      "Threat detection and intelligence - any connection is suspicious by definition",
      "User authentication",
      "Data storage"
    ],
    correct: 1,
    explanation: "HONEYPOT is a decoy system designed to detect, deflect, and study attacks - any interaction is inherently suspicious. Honeypot characteristics: (1) No legitimate purpose (should have no real traffic), (2) Appears valuable to attackers, (3) Monitors all interactions, (4) Any access = suspicious activity. Honeypot types: (1) LOW INTERACTION - simulates services, limited attacker engagement, (2) HIGH INTERACTION - real systems, full attacker engagement, more risk, (3) HONEYNETS - network of honeypots. Value: (1) Early warning (detect attackers in network), (2) Threat intelligence (learn attacker TTPs), (3) Diversion (waste attacker time), (4) Research (study new attacks). Deployment: (1) Place in network segments, (2) Make discoverable to attackers, (3) Ensure monitoring, (4) Isolate to prevent pivot. High-interaction honeypots are powerful but require careful isolation and expertise."
  },
  {
    id: 15,
    question: "Network traffic analysis shows periodic beacon-like traffic from an internal workstation to an external IP every 60 seconds. The destination is not a known legitimate service. What might this indicate?",
    options: [
      "Normal web browsing",
      "Command and control (C2) beaconing - potential malware communication",
      "Email traffic",
      "Software updates"
    ],
    correct: 1,
    explanation: "BEACONING is a C2 (Command and Control) indicator - malware regularly checking in with attacker infrastructure. Beaconing characteristics: (1) Regular intervals (60 seconds, 5 minutes, etc.), (2) To unknown/suspicious destinations, (3) Small data amounts, (4) May use common ports (80, 443). C2 techniques: (1) HTTP/HTTPS beacons, (2) DNS beaconing, (3) Social media C2, (4) Cloud service abuse. Detection: (1) Network flow analysis, (2) Beacon detection algorithms, (3) DNS analytics, (4) Threat intelligence (known bad IPs). What beaconing indicates: (1) Malware awaiting commands, (2) Data exfiltration possible, (3) Compromised system, (4) APT presence. Response: (1) Isolate system, (2) Block destination, (3) Forensic analysis, (4) Hunt for related infections. Beaconing detection is key capability for finding hidden compromises."
  }
];