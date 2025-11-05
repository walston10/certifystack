// Quiz for Lesson 21: Network Threats and Vulnerabilities

export const lesson21Quiz = [
  {
    id: 1,
    question: "A company's web server becomes unresponsive during business hours. Network monitoring shows the server is receiving 50,000 SYN packets per second from multiple source IP addresses, but no ACK responses are being sent. What type of attack is occurring?",
    options: [
      "Man-in-the-middle attack intercepting traffic",
      "SYN flood attack (DDoS) exhausting server resources by leaving half-open TCP connections",
      "ARP poisoning redirecting traffic",
      "DNS spoofing attack"
    ],
    correct: 1,
    explanation: "SYN flood exploits TCP three-way handshake: attacker sends massive SYN packets, server allocates resources and sends SYN-ACK, attacker never sends final ACK. Server's connection table fills with half-open connections, exhausting resources and blocking legitimate connections. DDoS when from multiple sources. Mitigation: 1) SYN cookies (stateless SYN-ACK), 2) Rate limiting, 3) Increase connection table size, 4) DDoS protection services (Cloudflare, Akamai), 5) Firewall connection limits. Similar attacks: ACK flood, RST flood, FIN flood."
  },
  {
    id: 2,
    question: "A network administrator notices that Host A's ARP cache shows the MAC address for the default gateway (192.168.1.1) has changed from aa:bb:cc:dd:ee:ff to 11:22:33:44:55:66. Host A experiences intermittent connectivity and some traffic appears to be intercepted. What attack is likely occurring?",
    options: [
      "DNS poisoning changing name resolution",
      "ARP poisoning/spoofing where an attacker sends false ARP responses to redirect traffic",
      "VLAN hopping to access other networks",
      "Port scanning to discover open services"
    ],
    correct: 1,
    explanation: "ARP poisoning (ARP spoofing) sends fake ARP replies associating attacker's MAC with victim's IP (often default gateway). Traffic intended for router goes to attacker (man-in-the-middle). Attacker can: intercept credentials, modify traffic, perform session hijacking, or DoS by dropping traffic. ARP has no authentication—systems trust ARP replies. Prevention: 1) Dynamic ARP Inspection (DAI) on switches, 2) Static ARP entries (impractical at scale), 3) ARP monitoring tools, 4) Port security, 5) Network segmentation, 6) Encryption (HTTPS, VPN) protects data even if intercepted."
  },
  {
    id: 3,
    question: "Users on VLAN 10 suddenly can communicate with restricted servers on VLAN 20, despite ACLs configured to prevent this. Investigation reveals a suspicious device sending double-tagged 802.1Q frames. What attack is being performed?",
    options: [
      "MAC flooding to overwhelm switch tables",
      "VLAN hopping using double-tagging to bypass VLAN segmentation",
      "Evil twin wireless attack",
      "Brute force password attack"
    ],
    correct: 1,
    explanation: "VLAN hopping attacks bypass VLAN segmentation: 1) Double-tagging: attacker on native VLAN sends frame with two 802.1Q tags. First switch strips outer tag (native VLAN), forwards to second switch which uses inner tag, placing traffic in target VLAN. 2) Switch spoofing: attacker negotiates trunk with switch (DTP exploitation). Prevention: 1) Change native VLAN to unused VLAN, 2) Disable DTP (set trunk mode manual), 3) Configure trunk allowed-VLANs explicitly, 4) Enable VLAN ACLs, 5) Port security. VLAN segmentation is security layer, not security solution—must be properly configured."
  },
  {
    id: 4,
    question: "A helpdesk receives calls from users reporting they cannot access network resources and have IP addresses in the 169.254.x.x range. Network investigation reveals an unauthorized DHCP server on the network responding to DHCP requests before the legitimate server. What attack is this?",
    options: [
      "DNS poisoning attack",
      "Rogue DHCP server attack providing false network configuration to redirect or deny service",
      "ARP spoofing attack",
      "MAC address spoofing"
    ],
    correct: 1,
    explanation: "Rogue DHCP server attacks: attacker operates unauthorized DHCP server that responds faster than legitimate server, providing: 1) Wrong gateway (attacker's system for MITM), 2) Wrong DNS server (redirect to phishing sites), 3) No response/wrong subnet (DoS). 169.254.x.x (APIPA) suggests clients getting no DHCP response if rogue server is DoS-focused. Prevention: 1) DHCP snooping (switches only allow DHCP responses from trusted ports), 2) Port security (limit/identify connected devices), 3) 802.1X authentication, 4) Regular network scans for unauthorized DHCP servers, 5) Network access control (NAC)."
  },
  {
    id: 5,
    question: "During a wireless site survey, a security analyst discovers an access point with SSID 'Company_WiFi_Guest' in the conference room. The SSID matches the corporate guest network, but this AP is not in the asset management system. What security threat does this represent?",
    options: [
      "Legitimate AP that wasn't documented properly",
      "Evil twin attack where an attacker creates a fake AP to intercept credentials and traffic",
      "Authorized AP deployed by facilities",
      "Harmless personal hotspot"
    ],
    correct: 1,
    explanation: "Evil twin: attacker creates rogue AP mimicking legitimate network (same/similar SSID). Users connect thinking it's legitimate. Attacker performs: 1) Credential harvesting (capturing login pages), 2) MITM attacks (intercept traffic), 3) Malware injection. Often combined with deauthentication attacks (disconnect users from real AP, forcing connection to evil twin). Detection: 1) Regular wireless surveys, 2) Wireless IPS (detects rogue APs), 3) MAC address verification, 4) Certificate validation (enterprise networks). Prevention: WPA3, certificate-based authentication (802.1X with EAP-TLS), user education about checking connections."
  },
  {
    id: 6,
    question: "A network monitoring system shows multiple hosts performing TCP port scans across the network at unusual hours, attempting connections to ports 22, 23, 3389, 445, and 1433. What is the likely purpose of this reconnaissance activity?",
    options: [
      "Normal network maintenance and inventory",
      "Attackers discovering open services and potential vulnerabilities before launching targeted attacks",
      "Automated backup systems checking connectivity",
      "Users browsing websites"
    ],
    correct: 1,
    explanation: "Port scanning is reconnaissance to discover: open ports, running services, OS fingerprinting, potential vulnerabilities. Ports mentioned: 22 (SSH), 23 (Telnet), 3389 (RDP), 445 (SMB), 1433 (SQL Server)—all valuable attack targets. Scanning tools: Nmap, Masscan. Attack phases: 1) Reconnaissance (scanning), 2) Weaponization, 3) Delivery, 4) Exploitation, 5) Installation, 6) Command & Control, 7) Actions on objectives. Prevention: 1) Firewall rules (block unnecessary ports), 2) IDS/IPS (detect scanning), 3) Rate limiting, 4) Honeypots (detect attackers). Scanning itself isn't harmful but indicates attack preparation."
  },
  {
    id: 7,
    question: "A user receives an email appearing to be from their bank asking them to click a link and verify their account credentials due to 'suspicious activity.' The link goes to a website that looks identical to the bank's site. What type of attack is this?",
    options: [
      "Legitimate security notification from the bank",
      "Phishing attack using social engineering to steal credentials through fake websites",
      "Malware infection requiring antivirus scan",
      "DDoS attack against the bank"
    ],
    correct: 1,
    explanation: "Phishing: social engineering via email/SMS to trick users into: revealing credentials, downloading malware, transferring money. Variants: 1) Spear phishing (targeted at specific individuals/organizations), 2) Whaling (targeting executives), 3) Vishing (voice/phone), 4) Smishing (SMS text). Red flags: urgency/threats, suspicious sender, grammar errors, generic greetings, unexpected requests, URL doesn't match (hover to check). Prevention: 1) User training, 2) Email filtering (SPF, DKIM, DMARC), 3) Link protection (URL rewriting/sandboxing), 4) Multi-factor authentication (even if credentials stolen), 5) Report phishing to security team."
  },
  {
    id: 8,
    question: "A switch's MAC address table becomes full, causing it to behave like a hub and flood all frames out all ports. Network packet capture reveals one host sending frames with thousands of different source MAC addresses. What attack is occurring?",
    options: [
      "ARP poisoning to redirect traffic",
      "MAC flooding attack to overwhelm switch CAM table and enable sniffing by causing switch to flood traffic",
      "VLAN hopping to access restricted networks",
      "DNS amplification attack"
    ],
    correct: 1,
    explanation: "MAC flooding: attacker sends frames with thousands of fake source MACs, filling switch's MAC address table (CAM table). When full, switch enters fail-open mode (behaves like hub), flooding all traffic to all ports—allowing attacker to sniff traffic destined for other hosts. Tools: macof. Mitigation: 1) Port security (limit MAC addresses per port, e.g., 2-3), 2) Enable port security violation actions (shutdown, restrict), 3) MAC address table size (larger tables harder to fill), 4) DHCP snooping, 5) Dynamic ARP Inspection. Modern switches have better protections than older ones."
  },
  {
    id: 9,
    question: "A company discovers their DNS server is responding to queries with incorrect IP addresses, directing users to malicious websites instead of legitimate ones. The DNS server's cache appears to have been modified. What attack has compromised the DNS server?",
    options: [
      "DDoS attack overwhelming the server",
      "DNS poisoning/spoofing where false DNS records are injected to redirect users to malicious sites",
      "Man-in-the-middle intercepting traffic",
      "Port scanning reconnaissance"
    ],
    correct: 1,
    explanation: "DNS poisoning (DNS spoofing): attacker injects false DNS records into DNS cache, redirecting users to malicious sites. Methods: 1) Cache poisoning (exploiting vulnerabilities, weak transaction IDs), 2) Compromising authoritative DNS server, 3) MITM attacks. Consequences: credential theft (fake banking sites), malware distribution, reputation damage. Prevention: 1) DNSSEC (cryptographic signatures verify DNS records), 2) DNS server hardening (latest patches), 3) Restrict DNS recursion, 4) Monitor DNS logs, 5) Use trusted DNS servers, 6) Randomize source ports/transaction IDs. Users can't easily detect—DNS is trusted infrastructure."
  },
  {
    id: 10,
    question: "A network experiences a DoS attack where the attacker sends UDP packets with spoofed source IPs to servers running NTP, DNS, and other services. The servers respond with much larger packets to the spoofed victims. What type of attack is this?",
    options: [
      "SYN flood attack using TCP connections",
      "Amplification/reflection attack where small requests generate large responses directed at victims",
      "ARP poisoning redirecting traffic",
      "Brute force attack against passwords"
    ],
    correct: 1,
    explanation: "Amplification (reflection) attacks: attacker sends small requests with victim's spoofed source IP to public servers. Servers send large responses to victim, overwhelming them. Protocols exploited: 1) DNS (amplification factor ~50x), 2) NTP (monlist command ~500x), 3) Memcached (10,000x+), 4) SNMP, 5) SSDP. Benefits for attacker: hide origin, amplify attack volume. Prevention: 1) BCP 38 (ISPs block spoofed packets), 2) Disable unnecessary services, 3) Rate limiting, 4) Response rate limiting (RRL) on DNS, 5) Disable monlist on NTP, 6) DDoS protection services. Victims: deploy DDoS mitigation, upstream filtering."
  },
  {
    id: 11,
    question: "An employee receives a phone call from someone claiming to be from IT support, requesting the employee's username and password to 'fix a security issue.' The employee provides the credentials. What type of attack is this?",
    options: [
      "Technical exploit using malware",
      "Vishing (voice phishing) - social engineering attack via phone to manipulate victims into revealing sensitive information",
      "Wireless evil twin attack",
      "DDoS attack",
    ],
    correct: 1,
    explanation: "Vishing (voice phishing): social engineering via phone calls. Attackers pretend to be: IT support, bank representatives, government agencies, creating urgency/fear. Tactics: caller ID spoofing, researched information (appears legitimate), authority/urgency. Similar: smishing (SMS), pretexting (fabricated scenario). Prevention: 1) User training (IT never asks for passwords), 2) Verification procedures (call back official numbers), 3) Password policies (no sharing), 4) Multi-factor authentication, 5) Incident reporting. Social engineering exploits human psychology, often easier than technical attacks. Users are often the weakest security link."
  },
  {
    id: 12,
    question: "A penetration tester gains physical access to an office by following an authorized employee through a secure door without badging in. What social engineering technique was used?",
    options: [
      "Phishing attack via email",
      "Tailgating/piggybacking - unauthorized person following authorized person through access control",
      "DNS poisoning attack",
      "MAC spoofing attack"
    ],
    correct: 1,
    explanation: "Tailgating (piggybacking): unauthorized person physically follows authorized person through secure access point. Often successful because: people are polite (hold doors), distraction (carrying boxes/coffee), appearing legitimate (clipboard, uniform), social pressure. Variations: shoulder surfing (observing passwords/PINs). Prevention: 1) User training (security over politeness), 2) Mantraps (prevent following), 3) Turnstiles, 4) Security guards, 5) Badge-out requirements, 6) Visitor policies (escort, temporary badges), 7) Challenge unauthorized persons, 8) Cameras for accountability. Physical security is often overlooked—attackers gaining physical access can bypass technical controls."
  },
  {
    id: 13,
    question: "A company's network experiences degraded performance. Investigation reveals hosts are infected with malware that's participating in a coordinated attack against a third-party website, sending HTTP requests on command. What type of attack infrastructure is this?",
    options: [
      "Man-in-the-middle attack",
      "Botnet - network of compromised computers controlled by an attacker to launch coordinated attacks",
      "ARP poisoning attack",
      "Simple virus infection"
    ],
    correct: 1,
    explanation: "Botnet: network of compromised computers (bots/zombies) controlled by attacker (botmaster) via Command & Control (C2) servers. Uses: 1) DDoS attacks, 2) Spam distribution, 3) Credential theft, 4) Cryptocurrency mining, 5) Click fraud. Infection: malware, exploits, phishing. Communication: IRC, HTTP, P2P, social media, DGA (domain generation algorithms). Detection: 1) Unusual outbound traffic, 2) C2 communication patterns, 3) Performance degradation, 4) IDS/IPS signatures, 5) Network behavior analysis. Mitigation: 1) Endpoint security, 2) Patch management, 3) Egress filtering, 4) DNS filtering, 5) Incident response (isolate, clean, investigate). Large botnets (Mirai, Emotet) contain millions of systems."
  },
  {
    id: 14,
    question: "A security scan reveals that many network devices are still using default usernames and passwords like 'admin/admin' or 'root/password'. What vulnerability class does this represent?",
    options: [
      "Zero-day vulnerability in software",
      "Misconfiguration and weak credential management creating easily exploitable access",
      "Buffer overflow vulnerability",
      "SQL injection vulnerability"
    ],
    correct: 1,
    explanation: "Default credentials are low-hanging fruit for attackers. Devices affected: routers, switches, IoT devices, cameras, printers. Attackers: 1) Try default credentials first, 2) Use credential databases, 3) Automated scanning (Shodan, Censys). Consequences: unauthorized access, device compromise, pivoting to internal network, botnet recruitment. Prevention: 1) Change defaults during deployment, 2) Enforce strong password policies, 3) Disable default accounts, 4) Network scanning for defaults, 5) Configuration management, 6) Credential audits. Mirai botnet (2016) compromised millions of IoT devices using default credentials. Similar issues: hardcoded credentials, weak passwords, unchanged passwords."
  },
  {
    id: 15,
    question: "A company's network is hit by ransomware that encrypts all file servers. A ransom note demands payment in Bitcoin to decrypt files. The attackers gained initial access through an unpatched VPN appliance. What security principle would have best prevented this?",
    options: [
      "Using stronger encryption for stored files",
      "Defense in depth with multiple layers: patch management, endpoint protection, network segmentation, backups, user training",
      "Faster backup systems",
      "More network bandwidth"
    ],
    correct: 1,
    explanation: "Ransomware prevention requires layered defense: 1) Patch management (close vulnerability used for entry), 2) Endpoint protection (detect/block ransomware), 3) Network segmentation (limit spread), 4) Backups (offline/immutable - recovery without paying), 5) Email filtering (common delivery), 6) User training (avoid phishing), 7) Least privilege (limit damage), 8) Application whitelisting, 9) MFA (prevent initial access). Single control fails—need multiple layers. Ransomware phases: initial compromise → lateral movement → encryption → ransom demand. Interrupt any phase. Never pay ransom: no guarantee of decryption, funds future attacks, makes you a target. Restore from backups if prepared."
  }
];

// Export for use in quiz component
export default lesson21Quiz;