// Flashcards for Lesson 21: Network Threats and Vulnerabilities

export const lesson21Flashcards = [
  {
    id: 1,
    front: "What is a DoS (Denial of Service) attack?",
    back: "DoS attack overwhelms a target system/network making it unavailable to legitimate users. Methods: flooding with traffic, exploiting vulnerabilities, consuming resources (CPU, memory, bandwidth). Single source attack. Result: service unavailable, network congestion, system crash. Common targets: web servers, DNS, routers. Motive: disruption, extortion, distraction for other attacks."
  },
  {
    id: 2,
    front: "What is a DDoS (Distributed Denial of Service) attack?",
    back: "DDoS uses multiple compromised systems (botnet) to attack single target. Much more powerful than DoS (distributed sources, harder to block, massive bandwidth). Botnet: thousands to millions of infected devices. Mitigation difficult: can't block all sources, legitimate traffic mixed with attack. Defense: traffic scrubbing, rate limiting, CDN, ISP assistance. Biggest attacks exceed 1 Tbps."
  },
  {
    id: 3,
    front: "What is a SYN flood attack?",
    back: "SYN flood exploits TCP three-way handshake. Attacker sends many SYN requests with spoofed source IPs, server responds with SYN-ACK, waits for final ACK that never comes. Result: server's connection table fills (half-open connections), legitimate connections refused. Mitigation: SYN cookies, timeout reduction, firewalls/IPS, rate limiting. Very common DoS method."
  },
  {
    id: 4,
    front: "What is a UDP flood attack?",
    back: "UDP flood sends massive UDP packets to random ports on target. Target checks for listening application, sends ICMP 'destination unreachable' for each, exhausts resources. UDP connectionless = no handshake required = easier to spoof. Often uses DNS/NTP amplification. Defense: rate limiting, ingress filtering, drop unnecessary UDP traffic. Volumetric attack (consumes bandwidth)."
  },
  {
    id: 5,
    front: "What is a ping flood attack?",
    back: "Ping flood sends continuous ICMP echo requests overwhelming target. Historical attack (ping of death), now less effective due to defenses. Modern variant: smurf attack (amplification via broadcast). Result: network congestion, server CPU exhaustion. Defense: rate limit ICMP, disable ping response, ingress filtering. Simple but can be effective in DDoS. Often just reconnaissance now."
  },
  {
    id: 6,
    front: "What is a smurf attack?",
    back: "Smurf attack uses ICMP amplification via broadcast addresses. Attacker sends ICMP request to broadcast address with spoofed source IP (victim's IP). All hosts on network reply to victim simultaneously. Amplification: one packet generates hundreds of responses. Defense: disable directed broadcasts (no ip directed-broadcast), modern routers block by default. Historical but important to understand."
  },
  {
    id: 7,
    front: "What are amplification attacks?",
    back: "Amplification attacks leverage protocols where small request generates large response. Examples: DNS (1:50 ratio), NTP (1:200), memcached (1:50,000!). Attacker spoofs victim's IP, sends small requests to amplifiers (open resolvers, NTP servers), victim receives massive response traffic. Defense: disable unnecessary services, rate limiting, ingress filtering (BCP 38). Used in largest DDoS attacks."
  },
  {
    id: 8,
    front: "What is an on-path attack (man-in-the-middle)?",
    back: "On-path attack intercepts communication between two parties without their knowledge. Attacker can: eavesdrop (read data), modify data, inject malicious content. Position: between client and server. Methods: ARP poisoning, rogue DHCP, DNS spoofing, evil twin. Defense: encryption (TLS/SSL), certificate validation, VPN, secure protocols. Formerly called man-in-the-middle (MITM)."
  },
  {
    id: 9,
    front: "What is ARP poisoning/spoofing?",
    back: "ARP poisoning sends fake ARP replies mapping victim's IP to attacker's MAC address. Result: traffic intended for victim routed through attacker (on-path attack). Attacker can: intercept traffic, modify packets, launch DoS. Works because: ARP has no authentication, unsolicited replies accepted. Defense: static ARP entries (impractical), DAI (Dynamic ARP Inspection), port security, encrypted protocols (traffic still stolen but unreadable)."
  },
  {
    id: 10,
    front: "What is MAC flooding?",
    back: "MAC flooding overwhelms switch's MAC address table by sending frames with thousands of fake source MACs. Table fills, switch can't learn new addresses, fails open (acts like hub - broadcasts all traffic). Result: attacker sees all network traffic (sniffing). Defense: port security (limit MACs per port), 802.1X authentication. Attack CAM table, not physical memory. Switch recovers when attack stops (aging)."
  },
  {
    id: 11,
    front: "What is MAC spoofing?",
    back: "MAC spoofing changes device's MAC address to impersonate another device. Uses: bypass MAC filtering, steal IP address, evade network access controls, impersonate authorized device. Easy: most OSes allow MAC changes. Defense: 802.1X (authenticate user not MAC), port security, DHCP snooping, don't rely on MAC filtering alone (weak security). MACs not designed for security."
  },
  {
    id: 12,
    front: "What is IP spoofing?",
    back: "IP spoofing forges source IP address in packets. Uses: hide identity, impersonate trusted host, DDoS reflection/amplification, bypass IP-based access control. Limitation: can't receive replies (one-way attack) unless on-path. Defense: ingress/egress filtering (BCP 38), uRPF (unicast Reverse Path Forwarding), don't trust source IPs, use strong authentication. Common in DoS/DDoS attacks."
  },
  {
    id: 13,
    front: "What is DNS poisoning/spoofing?",
    back: "DNS poisoning corrupts DNS cache with fake records redirecting users to malicious sites. Methods: compromise DNS server, cache poisoning (inject false records), DNS hijacking (change DNS settings). Results: phishing sites, malware download, credential theft. Victim thinks accessing legitimate site. Defense: DNSSEC (authenticates DNS), secure DNS servers, monitor DNS changes. Also called DNS cache poisoning."
  },
  {
    id: 14,
    front: "What is VLAN hopping?",
    back: "VLAN hopping accesses unauthorized VLANs. Two methods: 1) Switch spoofing - attacker negotiates trunk (DTP), sends tagged frames to access other VLANs. 2) Double tagging - exploits native VLAN, outer tag stripped, inner tag forwards to target VLAN. Defense: disable DTP (switchport nonegotiate), change native VLAN from default, use dedicated VLAN for trunks, manual trunk config. Serious switching vulnerability."
  },
  {
    id: 15,
    front: "What is a rogue DHCP server attack?",
    back: "Rogue DHCP server provides malicious DHCP responses (wrong gateway, DNS, routes). Attacker becomes DHCP server, clients accept malicious config. Results: on-path attack (traffic routed through attacker), DNS redirection, no network access (wrong settings). Defense: DHCP snooping (trusts only specific ports), port security, 802.1X authentication, monitor for unexpected DHCP servers. Common insider threat."
  },
  {
    id: 16,
    front: "What is an evil twin attack?",
    back: "Evil twin is fake wireless AP mimicking legitimate network (same SSID). Stronger signal than real AP, users auto-connect. Attacker captures: credentials, traffic, personal data. Often combined with: deauth attack (kick users off real AP), captive portal (fake login page). Defense: WPA3 (protected management frames), certificate validation, VPN, user education. Common in public WiFi areas."
  },
  {
    id: 17,
    front: "What is a deauth attack?",
    back: "Deauth attack sends spoofed deauthentication frames forcing clients to disconnect from AP. Wireless management frames unencrypted (in WPA2 and earlier). Uses: force clients to evil twin, disrupt network (DoS), capture WPA handshake (for cracking). Tools: aircrack-ng suite. Defense: WPA3 (Protected Management Frames - 802.11w), detect with WIDS/WIPS, physical security. Very easy to execute."
  },
  {
    id: 18,
    front: "What is a brute force attack?",
    back: "Brute force tries every possible password combination until finding correct one. Time depends on: password length, complexity, computing power. Online: slow, easily detected, locked out. Offline: fast (captured hash), hard to detect. Defense: strong passwords (long + complex), account lockout, rate limiting, 2FA, password policies. Guaranteed to work given enough time but impractical for strong passwords."
  },
  {
    id: 19,
    front: "What is a dictionary attack?",
    back: "Dictionary attack tries common passwords/phrases from wordlist instead of all combinations. Much faster than brute force. Lists include: common passwords (password123), leaked passwords, dictionary words, variations (p@ssw0rd). Online or offline. Defense: avoid common passwords, password blacklists, complexity requirements, 2FA, account lockout. Very effective because users choose predictable passwords. Most password cracks use dictionaries."
  },
  {
    id: 20,
    front: "What is phishing?",
    back: "Phishing uses fake emails/websites to steal credentials/information. Email appears from trusted source (bank, IT, colleague), urgent message, malicious link/attachment. Clicks lead to: fake login page, malware download. Most common attack vector. Defense: user training, email filtering, 2FA (reduces impact), verify sender, hover over links, report suspicious emails. Social engineering, not technical attack."
  },
  {
    id: 21,
    front: "What is spear phishing?",
    back: "Spear phishing is targeted phishing at specific individual/organization. Highly personalized using: names, job titles, company details, recent activities. Much more convincing than generic phishing. Often targets: executives (whaling), IT staff, finance. Research from: social media, LinkedIn, company website. Defense: training (especially executives), email authentication (SPF/DKIM/DMARC), incident response plan. More successful than regular phishing."
  },
  {
    id: 22,
    front: "What is vishing?",
    back: "Vishing is voice phishing via phone calls. Attacker impersonates: IT support, bank, government, vendor. Requests: credentials, personal info, remote access, wire transfer. Often uses: caller ID spoofing, urgency, authority. Example: 'This is IT, we need your password to fix your account.' Defense: callback verification, never give passwords by phone, employee training, verify requests through official channels."
  },
  {
    id: 23,
    front: "What is smishing?",
    back: "Smishing is phishing via SMS text messages. Message contains: malicious link, fake alert, urgent request. Often claims: package delivery, bank alert, prize, account problem. Clicks lead to: fake sites, malware (mobile), premium SMS charges. Harder to filter than email. Defense: don't click text links, verify through official apps/websites, employee awareness, mobile security software."
  },
  {
    id: 24,
    front: "What is tailgating/piggybacking?",
    back: "Tailgating: unauthorized person follows authorized person through secure door. Exploits: courtesy (holding door), distraction, appearing legitimate. Often uses: fake badge, hands full, smoking break, delivery person disguise. Physical security breach but social engineering. Defense: mantrap, security awareness, challenge unknown persons, no courtesy door-holding in secure areas, visitor policy. Extremely common attack."
  },
  {
    id: 25,
    front: "What are the common malware types?",
    back: "Virus: attaches to files, spreads when executed, requires host. Worm: self-replicating, spreads automatically, network-based. Trojan: disguised as legitimate, doesn't replicate, backdoor access. Ransomware: encrypts data, demands payment. Rootkit: hides at system level, very hard to detect/remove. Botnet: network of infected devices controlled remotely. Each has different behavior, defense, impact."
  },
  {
    id: 26,
    front: "What is ransomware and how does it work?",
    back: "Ransomware encrypts victim's data and demands payment for decryption key. Infection: phishing, exploit, malicious download. Process: scan for files, encrypt with strong crypto, display ransom note, demand Bitcoin payment. Result: data inaccessible, business disruption. Defense: backups (offline!), patch systems, email filtering, user training, network segmentation, incident response plan. Paying doesn't guarantee decryption. Fastest-growing malware threat."
  },
  {
    id: 27,
    front: "What is a botnet?",
    back: "Botnet is network of compromised computers (bots/zombies) controlled by attacker (botmaster). Infection: malware, worms, exploits. Uses: DDoS attacks, spam, crypto mining, credential stuffing, click fraud. Command-and-control (C2): IRC, HTTP, P2P, DNS. Size: thousands to millions of bots. Defense: antivirus, patching, network monitoring (detect C2 traffic), botnet blacklists. Major threat for DDoS."
  },
  {
    id: 28,
    front: "What common vulnerabilities exist in networks?",
    back: "Unpatched systems: missing security updates, known exploits. Zero-day: unknown vulnerability, no patch available. Misconfigurations: default passwords, unnecessary services, weak security settings. Default credentials: vendor defaults unchanged. Open ports/services: unnecessary services running. Weak passwords: easy to crack. Unsecured protocols: Telnet, HTTP, FTP (cleartext). Missing segmentation: flat networks, no isolation."
  },
  {
    id: 29,
    front: "What security principles help prevent attacks?",
    back: "Least privilege: minimum access necessary, reduces damage from compromise. Defense in depth: multiple layers, no single point of failure. Zero trust: verify everything, trust nothing, continuous authentication. Patch management: update regularly, reduce vulnerabilities. Strong authentication: complex passwords, 2FA, certificates. Network segmentation: isolate systems, contain breaches. Security awareness: trained users, first line of defense."
  },
  {
    id: 30,
    front: "Speed drill: Match attack to defense - ARP poisoning, VLAN hopping, Evil twin, Ransomware, DDoS",
    back: "ARP poisoning: DAI (Dynamic ARP Inspection). VLAN hopping: disable DTP, change native VLAN. Evil twin: WPA3, 802.11w. Ransomware: offline backups, training. DDoS: rate limiting, traffic scrubbing, CDN. Know attack-defense pairs for exam!"
  }
];