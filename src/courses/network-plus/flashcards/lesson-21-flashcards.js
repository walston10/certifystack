// Flashcards for Lesson 21: Network Threats and Vulnerabilities (SHORTENED)

export const lesson21Flashcards = [
  {
    id: 1,
    front: "What is a DoS attack?",
    back: "Overwhelms target system making it unavailable. Methods: traffic flooding, exploiting vulnerabilities, resource consumption. Single source attack. Result: service unavailable, network congestion."
  },
  {
    id: 2,
    front: "What is a DDoS attack?",
    back: "Uses multiple compromised systems (botnet) to attack single target. Much more powerful than DoS. Harder to block (distributed sources). Defense: traffic scrubbing, rate limiting, CDN. Biggest attacks exceed 1 Tbps."
  },
  {
    id: 3,
    front: "What is a SYN flood attack?",
    back: "Exploits TCP handshake. Sends SYN requests with spoofed IPs, server waits for ACK that never comes. Connection table fills with half-open connections. Mitigation: SYN cookies, rate limiting. Very common DoS."
  },
  {
    id: 4,
    front: "What is a UDP flood?",
    back: "Sends massive UDP packets to random ports. Target checks for applications, sends ICMP unreachable, exhausts resources. Often uses DNS/NTP amplification. Defense: rate limiting, drop unnecessary UDP."
  },
  {
    id: 5,
    front: "What is a ping flood?",
    back: "Sends continuous ICMP echo requests overwhelming target. Modern variant: smurf attack (amplification via broadcast). Defense: rate limit ICMP, disable ping response. Simple but effective in DDoS."
  },
  {
    id: 6,
    front: "What is a smurf attack?",
    back: "ICMP amplification via broadcast. Sends ICMP to broadcast with spoofed source IP (victim), all hosts reply to victim. Defense: disable directed broadcasts. Modern routers block by default. Historical attack."
  },
  {
    id: 7,
    front: "What are amplification attacks?",
    back: "Small request generates large response. Examples: DNS (1:50), NTP (1:200), memcached (1:50,000). Attacker spoofs victim's IP, sends to amplifiers, victim gets massive response. Defense: disable unnecessary services, rate limiting."
  },
  {
    id: 8,
    front: "What is an on-path attack (MITM)?",
    back: "Intercepts communication between two parties. Attacker can eavesdrop, modify data, inject content. Methods: ARP poisoning, rogue DHCP, DNS spoofing, evil twin. Defense: encryption (TLS), certificate validation, VPN."
  },
  {
    id: 9,
    front: "What is ARP poisoning?",
    back: "Sends fake ARP replies mapping victim's IP to attacker's MAC. Traffic routes through attacker (on-path). Defense: DAI (Dynamic ARP Inspection), port security, encrypted protocols."
  },
  {
    id: 10,
    front: "What is MAC flooding?",
    back: "Overwhelms switch's MAC table with fake source MACs. Table fills, switch fails open (acts like hub), broadcasts all traffic. Defense: port security (limit MACs per port), 802.1X. Switch recovers when attack stops."
  },
  {
    id: 11,
    front: "What is MAC spoofing?",
    back: "Changes device's MAC to impersonate another. Uses: bypass MAC filtering, steal IP, evade access controls. Easy - OSes allow MAC changes. Defense: 802.1X (authenticate user not MAC), don't rely on MAC filtering."
  },
  {
    id: 12,
    front: "What is IP spoofing?",
    back: "Forges source IP address in packets. Uses: hide identity, impersonate trusted host, DDoS amplification, bypass IP-based access. Can't receive replies (one-way). Defense: ingress/egress filtering (BCP 38), strong authentication."
  },
  {
    id: 13,
    front: "What is DNS poisoning?",
    back: "Corrupts DNS cache with fake records redirecting to malicious sites. Methods: compromise DNS server, cache poisoning, DNS hijacking. Defense: DNSSEC (authenticates DNS), secure DNS servers, monitor changes."
  },
  {
    id: 14,
    front: "What is VLAN hopping?",
    back: "Accesses unauthorized VLANs. Methods: switch spoofing (DTP negotiates trunk), double tagging (exploits native VLAN). Defense: disable DTP, change native VLAN from default, manual trunk config."
  },
  {
    id: 15,
    front: "What is a rogue DHCP server?",
    back: "Provides malicious DHCP responses (wrong gateway, DNS). Attacker becomes DHCP server, traffic routes through them. Defense: DHCP snooping (trust only specific ports), port security, 802.1X."
  },
  {
    id: 16,
    front: "What is an evil twin attack?",
    back: "Fake wireless AP mimicking legitimate network (same SSID). Stronger signal, users auto-connect. Captures credentials and traffic. Defense: WPA3 (Protected Management Frames), certificate validation, VPN, user education."
  },
  {
    id: 17,
    front: "What is a deauth attack?",
    back: "Sends spoofed deauthentication frames forcing disconnect. Uses: force to evil twin, DoS, capture WPA handshake. Defense: WPA3 (Protected Management Frames - 802.11w), WIDS/WIPS. Very easy to execute."
  },
  {
    id: 18,
    front: "What is a brute force attack?",
    back: "Tries every possible password combination. Time depends on password length and complexity. Online: slow, easily detected. Offline: fast (captured hash). Defense: strong passwords, account lockout, 2FA."
  },
  {
    id: 19,
    front: "What is a dictionary attack?",
    back: "Tries common passwords from wordlist instead of all combinations. Much faster than brute force. Lists: common passwords, leaked passwords, variations. Defense: avoid common passwords, complexity requirements, 2FA."
  },
  {
    id: 20,
    front: "What is phishing?",
    back: "Fake emails/websites to steal credentials. Email appears from trusted source, urgent message, malicious link/attachment. Most common attack vector. Defense: user training, email filtering, 2FA, verify sender."
  },
  {
    id: 21,
    front: "What is spear phishing?",
    back: "Targeted phishing at specific individual/organization. Highly personalized using names, job titles, company details. Often targets executives (whaling). Defense: training, email authentication (SPF/DKIM/DMARC)."
  },
  {
    id: 22,
    front: "What is vishing?",
    back: "Voice phishing via phone. Impersonates IT, bank, government. Requests credentials, personal info, remote access. Uses caller ID spoofing, urgency. Defense: callback verification, never give passwords by phone."
  },
  {
    id: 23,
    front: "What is smishing?",
    back: "Phishing via SMS text. Message contains malicious link, fake alert. Claims package delivery, bank alert. Harder to filter than email. Defense: don't click text links, verify through official apps."
  },
  {
    id: 24,
    front: "What is tailgating/piggybacking?",
    back: "Unauthorized person follows authorized through secure door. Exploits courtesy (holding door). Physical security breach via social engineering. Defense: mantrap, security awareness, challenge unknowns, no courtesy door-holding."
  },
  {
    id: 25,
    front: "Common malware types?",
    back: "Virus: attaches to files, needs host. Worm: self-replicating, network-based. Trojan: disguised, backdoor. Ransomware: encrypts data, demands payment. Rootkit: hides at system level. Botnet: network of infected devices."
  },
  {
    id: 26,
    front: "What is ransomware?",
    back: "Encrypts victim's data, demands payment for decryption key. Infection: phishing, exploits. Defense: offline backups, patch systems, email filtering, training, segmentation. Paying doesn't guarantee decryption. Fastest-growing threat."
  },
  {
    id: 27,
    front: "What is a botnet?",
    back: "Network of compromised computers (bots) controlled by attacker. Uses: DDoS, spam, crypto mining. Command-and-control (C2): IRC, HTTP, P2P. Size: thousands to millions. Defense: antivirus, patching, monitor C2 traffic."
  },
  {
    id: 28,
    front: "Common network vulnerabilities?",
    back: "Unpatched systems, zero-day vulnerabilities, misconfigurations, default credentials, open ports/services, weak passwords, unsecured protocols (Telnet, HTTP, FTP), missing segmentation."
  },
  {
    id: 29,
    front: "Security principles to prevent attacks?",
    back: "Least privilege (minimum access), defense in depth (multiple layers), zero trust (verify everything), patch management, strong authentication (2FA), network segmentation (isolate systems), security awareness (trained users)."
  },
  {
    id: 30,
    front: "Match attack to defense: ARP poisoning / VLAN hopping / Evil twin / Ransomware / DDoS",
    back: "ARP poisoning = DAI. VLAN hopping = disable DTP, change native VLAN. Evil twin = WPA3, 802.11w. Ransomware = offline backups. DDoS = rate limiting, traffic scrubbing, CDN."
  }
];