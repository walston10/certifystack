export const lesson09Quiz = [
  {
    id: 1,
    question: "A company's web server becomes unavailable after receiving millions of requests from thousands of different IP addresses worldwide. Legitimate users cannot access the site. What type of attack is this?",
    options: [
      "SQL injection - database attack",
      "DDoS (Distributed Denial of Service) - overwhelming resources from multiple sources",
      "Phishing - credential theft",
      "Man-in-the-middle - traffic interception"
    ],
    correct: 1,
    explanation: "DDoS (Distributed Denial of Service) attacks overwhelm targets with traffic from many sources to deny service to legitimate users. DDoS characteristics: (1) Traffic from many sources (often botnet), (2) Difficult to block (can't block all IPs), (3) Overwhelms bandwidth, server resources, or applications, (4) Legitimate users denied access. DDoS types: (1) Volumetric - flood with traffic (Gbps/Tbps), (2) Protocol - exploit protocol weaknesses (SYN flood), (3) Application layer - target specific services (HTTP floods). Defense: DDoS mitigation services (Cloudflare, Akamai), rate limiting, traffic analysis, redundant capacity, anycast distribution. DoS vs DDoS: DoS is single source (easier to block), DDoS is distributed (harder to mitigate). Modern DDoS attacks can exceed 1 Tbps - beyond most organizations' ability to absorb."
  },
  {
    id: 2,
    question: "An attacker sends thousands of TCP SYN packets to a server without completing the three-way handshake. The server's connection table fills with half-open connections, preventing legitimate connections. What attack is this?",
    options: [
      "UDP flood",
      "SYN flood - exhausting server resources with incomplete TCP handshakes",
      "Ping flood",
      "DNS amplification"
    ],
    correct: 1,
    explanation: "SYN FLOOD exploits TCP's three-way handshake to exhaust server connection resources. Normal TCP handshake: SYN → SYN-ACK → ACK (connection established). SYN flood attack: (1) Attacker sends many SYN packets, (2) Server allocates resources, sends SYN-ACK, (3) Attacker never completes with ACK, (4) Server's connection table fills with half-open connections, (5) No room for legitimate connections. Why effective: server must allocate resources for each SYN while waiting for ACK that never comes. Defense: (1) SYN cookies - don't allocate until ACK received, (2) Increase backlog queue, (3) Reduce SYN-RECEIVED timeout, (4) Rate limiting, (5) Firewall/IPS detection, (6) DDoS mitigation services. SYN flooding is protocol-based DoS attack - exploits how TCP works rather than just flooding bandwidth."
  },
  {
    id: 3,
    question: "An attacker sends small DNS queries with a spoofed source IP (the victim's IP) to many open DNS resolvers. The resolvers send large responses to the victim, amplifying the attack. What type of attack is this?",
    options: [
      "SYN flood",
      "DNS amplification attack - using DNS to multiply traffic directed at victim",
      "ARP poisoning",
      "VLAN hopping"
    ],
    correct: 1,
    explanation: "DNS AMPLIFICATION is a reflection/amplification DDoS attack using DNS servers to multiply attack traffic. How it works: (1) Attacker spoofs victim's IP as source, (2) Sends small DNS queries to open resolvers, (3) Resolvers send large responses to 'source' (victim), (4) Amplification factor: small query → large response. Amplification math: 60-byte query → 3000-byte response = 50x amplification. Attacker sends 1 Gbps → victim receives 50 Gbps. Other amplification protocols: NTP (monlist - 556x), SSDP (30x), memcached (50,000x!), SNMP. Defense: (1) BCP38 - prevent IP spoofing at network edge, (2) Rate limiting, (3) Disable open resolvers, (4) DDoS mitigation services. Amplification attacks are powerful because attackers multiply their bandwidth using third-party infrastructure."
  },
  {
    id: 4,
    question: "A network administrator notices their gateway's ARP cache shows the wrong MAC address for the default router, and all traffic is being routed through an unknown device. What attack has occurred?",
    options: [
      "DNS poisoning",
      "ARP poisoning/spoofing - manipulating ARP to redirect traffic through attacker",
      "SYN flood",
      "Phishing"
    ],
    correct: 1,
    explanation: "ARP POISONING (ARP Spoofing) manipulates ARP tables to redirect network traffic through the attacker. How ARP poisoning works: (1) Attacker sends gratuitous ARP replies, (2) Claims attacker's MAC is associated with gateway IP, (3) Victim updates ARP cache with false mapping, (4) Traffic destined for gateway goes to attacker, (5) Attacker forwards to real gateway (man-in-the-middle). Enables: (1) Traffic interception, (2) Session hijacking, (3) Credential capture, (4) Traffic modification, (5) Connection disruption. Defense: (1) Static ARP entries (not scalable), (2) Dynamic ARP Inspection (DAI) on switches, (3) DHCP snooping, (4) ARP monitoring tools, (5) Network segmentation, (6) Encrypted protocols (HTTPS, SSH). ARP has no authentication - designed for trusted LANs. Layer 2 attack, so must be on same network segment as victim."
  },
  {
    id: 5,
    question: "An attacker intercepts communication between a user and a website, relaying and potentially altering traffic while both parties believe they're communicating directly. What type of attack is this?",
    options: [
      "DDoS - denial of service",
      "On-path attack (Man-in-the-Middle) - intercepting and potentially modifying communications",
      "SQL injection",
      "Brute force"
    ],
    correct: 1,
    explanation: "ON-PATH ATTACK (formerly Man-in-the-Middle/MITM) places attacker between two communicating parties, intercepting or modifying traffic. On-path attack capabilities: (1) Eavesdrop on communications, (2) Capture credentials, (3) Modify data in transit, (4) Inject malicious content, (5) Hijack sessions. Positioning methods: (1) ARP poisoning (local network), (2) DNS spoofing, (3) Rogue Wi-Fi access point, (4) BGP hijacking, (5) Compromised router. Both parties think they're communicating directly, but all traffic flows through attacker. Defense: (1) Encryption (TLS/HTTPS), (2) Certificate validation, (3) VPN for untrusted networks, (4) HSTS (force HTTPS), (5) Certificate pinning. SSL stripping: attacker downgrades HTTPS to HTTP, intercepting 'secure' traffic. Modern browsers help by warning about invalid certificates."
  },
  {
    id: 6,
    question: "A user types their bank's URL into the browser but is redirected to a fake site because an attacker has modified the DNS server's records. What attack is this?",
    options: [
      "ARP poisoning",
      "DNS poisoning/spoofing - corrupting DNS to redirect users to malicious sites",
      "MAC flooding",
      "SYN flood"
    ],
    correct: 1,
    explanation: "DNS POISONING (DNS Spoofing) corrupts DNS resolution to redirect users to attacker-controlled sites. DNS poisoning methods: (1) Compromise DNS server - modify records directly, (2) Cache poisoning - inject false records into resolver cache, (3) DNS response spoofing - race to respond before legitimate server, (4) BGP hijacking to intercept DNS traffic. Impact: (1) Redirect any domain to attacker's IP, (2) Credential theft via fake sites, (3) Malware distribution, (4) Email interception, (5) Difficult for users to detect. Defense: (1) DNSSEC - cryptographic verification of DNS records, (2) DNS over HTTPS (DoH) / DNS over TLS (DoT), (3) Trusted recursive resolvers, (4) Monitor for DNS anomalies. This attack is powerful because DNS is foundational - all domain-based navigation depends on it. Users trust their browser's address bar."
  },
  {
    id: 7,
    question: "An attacker captures an authentication token from network traffic and later reuses it to gain unauthorized access to the system, even without knowing the password. What attack is this?",
    options: [
      "Brute force attack",
      "Replay attack - reusing captured authentication data",
      "Dictionary attack",
      "SQL injection"
    ],
    correct: 1,
    explanation: "REPLAY ATTACK captures legitimate authentication data and reuses it to gain unauthorized access. Replay attack process: (1) Intercept authentication exchange (token, hash, session), (2) Store captured data, (3) Later, send same data to authenticate, (4) System accepts as valid - it's legitimate data. What can be replayed: (1) Authentication tokens, (2) Password hashes (pass-the-hash), (3) Kerberos tickets (pass-the-ticket), (4) Session cookies, (5) Signed requests. Defense: (1) Timestamps in authentication (reject old requests), (2) Nonces (single-use random values), (3) Sequence numbers, (4) Session binding (tie to IP, device), (5) Short-lived tokens, (6) Encryption (attacker can't read to replay). Replay attacks don't require cracking credentials - just reusing what was already valid. Encryption alone doesn't prevent replay if attacker captures and replays encrypted blob."
  },
  {
    id: 8,
    question: "An attacker floods a switch with thousands of fake MAC addresses, filling its MAC address table. The switch begins forwarding all traffic to all ports like a hub. What attack is this?",
    options: [
      "ARP poisoning",
      "MAC flooding - overwhelming switch CAM table to force broadcast behavior",
      "VLAN hopping",
      "DNS poisoning"
    ],
    correct: 1,
    explanation: "MAC FLOODING overwhelms a switch's MAC address table (CAM table), forcing it to broadcast all traffic. How it works: (1) Switch has limited CAM table space, (2) Attacker generates thousands of frames with random source MACs, (3) CAM table fills with fake entries, (4) No room for legitimate MACs, (5) Switch 'fails open' - forwards unknown traffic to ALL ports (like a hub), (6) Attacker can now sniff all network traffic. Tools: macof, ettercap. Defense: (1) Port security - limit MACs per port, (2) 802.1X - authenticate before network access, (3) MAC address sticky, (4) DHCP snooping, (5) Dynamic ARP inspection, (6) Network segmentation. This converts switch to hub behavior, exposing traffic that should be isolated. Layer 2 attack requiring local network access."
  },
  {
    id: 9,
    question: "An attacker on VLAN 10 crafts specially tagged frames to access VLAN 20 without proper routing, bypassing VLAN isolation. What is this attack called?",
    options: [
      "MAC flooding",
      "VLAN hopping - bypassing VLAN segmentation through double tagging or switch spoofing",
      "ARP poisoning",
      "DNS spoofing"
    ],
    correct: 1,
    explanation: "VLAN HOPPING allows attackers to access VLANs they shouldn't be able to reach, bypassing segmentation. VLAN hopping methods: (1) SWITCH SPOOFING - attacker's device negotiates trunk link with switch, accesses all VLANs, (2) DOUBLE TAGGING - attacker sends frame with two 802.1Q tags, outer tag stripped, inner tag routes to target VLAN. Double tagging requirements: (1) Attacker on native VLAN, (2) Target VLAN different from native, (3) One-way attack (can send but not receive). Defense: (1) Disable DTP (Dynamic Trunking Protocol), (2) Explicitly configure access vs trunk ports, (3) Don't use VLAN 1 as native VLAN, (4) Use dedicated native VLAN, (5) Enable VLAN tagging on native VLAN. VLAN hopping defeats network segmentation - critical for PCI DSS and other compliance that relies on VLAN isolation."
  },
  {
    id: 10,
    question: "An attacker sets up a rogue wireless access point with the same SSID as the legitimate corporate network. Users connect to the rogue AP, allowing traffic interception. What is this attack called?",
    options: [
      "MAC spoofing",
      "Evil twin attack - fake access point impersonating legitimate network",
      "Bluesnarfing",
      "War driving"
    ],
    correct: 1,
    explanation: "EVIL TWIN is a rogue access point impersonating a legitimate wireless network. Evil twin setup: (1) Attacker creates AP with same SSID as target, (2) May boost signal to be stronger than legitimate, (3) Users' devices connect to stronger/closer signal, (4) All traffic flows through attacker. Attacker can: (1) Intercept credentials (especially if users ignore certificate warnings), (2) Inject content, (3) Redirect to phishing pages, (4) Capture unencrypted traffic. Common locations: coffee shops, airports, hotels. Defense: (1) 802.1X/EAP-TLS with certificate validation, (2) Always verify HTTPS certificate, (3) VPN on untrusted networks, (4) Wireless intrusion prevention systems (WIPS), (5) User awareness - don't connect to unknown networks. Related: Karma attack - AP responds to any SSID devices probe for, automatically becoming 'trusted' networks."
  },
  {
    id: 11,
    question: "An attacker sends deauthentication frames to disconnect clients from a legitimate access point, forcing them to reconnect through the attacker's rogue AP. What technique is this?",
    options: [
      "ARP spoofing",
      "Deauthentication attack - forcing wireless clients to disconnect",
      "DNS poisoning",
      "SYN flood"
    ],
    correct: 1,
    explanation: "DEAUTHENTICATION ATTACK sends forged 802.11 deauth frames to disconnect wireless clients from access points. How it works: (1) 802.11 deauth frames are unauthenticated (by design), (2) Attacker spoofs AP's MAC, sends deauth to client, (3) Client disconnects believing AP requested it, (4) Client reconnects - possibly to evil twin, (5) Can be continuous (denial of service). Uses: (1) Force reconnection to evil twin, (2) Capture WPA handshake for offline cracking, (3) Denial of service, (4) Disrupt surveillance cameras, IoT devices. Defense: (1) 802.11w (Protected Management Frames) - authenticates deauth frames, (2) WPA3 (includes PMF), (3) WIPS detection, (4) Wired connections for critical devices. Tools: aireplay-ng, mdk3. This attack is why public WiFi is risky - attacker can force you off legitimate network and onto their evil twin."
  },
  {
    id: 12,
    question: "An attacker intercepts a TLS connection and downgrades it to unencrypted HTTP by modifying the initial handshake, allowing traffic capture. What is this attack called?",
    options: [
      "ARP poisoning",
      "SSL stripping - downgrading encrypted connections to unencrypted",
      "DNS amplification",
      "MAC flooding"
    ],
    correct: 1,
    explanation: "SSL STRIPPING downgrades HTTPS connections to HTTP, allowing traffic interception. How it works: (1) Attacker positions as on-path (MITM), (2) Client requests http://site.com, (3) Attacker receives HTTP request, (4) Attacker makes HTTPS connection to server, (5) Attacker relays content to client over HTTP, (6) Client thinks everything is normal (sees HTTP not HTTPS), (7) Attacker sees all traffic in cleartext. Why it works: (1) Users often don't type https://, (2) Many sites redirect HTTP→HTTPS, (3) Attacker intercepts before redirect. Defense: (1) HSTS (HTTP Strict Transport Security) - browser remembers to use HTTPS, (2) HSTS preload list, (3) User awareness - check for HTTPS/padlock, (4) Type https:// explicitly. Modern browsers show warnings for HTTP login pages. SSL stripping was presented at Black Hat 2009 and remains effective against unaware users."
  },
  {
    id: 13,
    question: "An organization's DNS server is being used to tunnel data out of the network by encoding stolen data in DNS queries to an attacker's domain. What technique is this?",
    options: [
      "DDoS attack",
      "DNS tunneling - using DNS protocol to exfiltrate data or bypass network controls",
      "ARP poisoning",
      "VLAN hopping"
    ],
    correct: 1,
    explanation: "DNS TUNNELING encodes data in DNS queries/responses to exfiltrate data or bypass network restrictions. How it works: (1) Attacker controls authoritative DNS for a domain, (2) Malware encodes data in DNS queries (base64 in subdomain), (3) Query: stolen-data-encoded.attacker.com, (4) Attacker's DNS server receives data in query, (5) Can also receive commands in DNS responses. Why effective: (1) DNS is rarely blocked (needed for internet), (2) Often not inspected deeply, (3) Bypasses many firewalls/proxies, (4) Low and slow exfiltration evades detection. Uses: (1) Data exfiltration, (2) C2 (command and control) communication, (3) Bypassing captive portals, (4) VPN alternative. Detection: (1) Monitor for unusual DNS query volume, (2) Long/unusual subdomain names, (3) Queries to new domains, (4) DNS security solutions. Defense: monitor DNS, restrict to internal resolvers, inspect DNS traffic."
  },
  {
    id: 14,
    question: "An attacker captures a user's session cookie by sniffing network traffic and uses it to access the user's logged-in account without knowing their password. What is this called?",
    options: [
      "Brute force attack",
      "Session hijacking - stealing session identifiers to take over authenticated sessions",
      "SQL injection",
      "Cross-site scripting"
    ],
    correct: 1,
    explanation: "SESSION HIJACKING steals session tokens/cookies to take over authenticated sessions. Session hijacking methods: (1) Network sniffing - capture cookies on unencrypted traffic, (2) XSS - steal cookies via malicious scripts, (3) Session fixation - set session ID before authentication, (4) Prediction - guess weak session IDs. What's stolen: session cookies, tokens, or IDs that prove authentication. Impact: attacker becomes the user, no password needed, full account access. Defense: (1) HTTPS everywhere (encrypt cookies in transit), (2) Secure cookie flags (Secure, HttpOnly, SameSite), (3) Strong random session IDs, (4) Session binding (IP, user agent), (5) Short session timeouts, (6) Re-authenticate for sensitive actions. Cookie flags: Secure=HTTPS only, HttpOnly=no JavaScript access (prevents XSS theft), SameSite=prevents CSRF. This is why HTTPS is critical even for 'non-sensitive' pages."
  },
  {
    id: 15,
    question: "An attacker compromises a router and modifies routing tables to redirect traffic destined for a financial institution through their own system. At what layer does this attack operate?",
    options: [
      "Layer 2 - Data Link",
      "Layer 3 - Network layer routing attack",
      "Layer 7 - Application",
      "Layer 1 - Physical"
    ],
    correct: 1,
    explanation: "Routing attacks operate at LAYER 3 (Network Layer) where routing decisions are made. Layer 3 routing attacks: (1) Route injection - add malicious routes to routing tables, (2) BGP hijacking - announce false routes on internet, (3) Router compromise - directly modify routing, (4) ICMP redirect attacks - redirect traffic paths. BGP hijacking is particularly dangerous: (1) BGP (Border Gateway Protocol) routes internet traffic, (2) Limited authentication - routes often accepted on trust, (3) Attacker announces they're best path to target, (4) Traffic flows through attacker, (5) Can intercept banking, email, any internet service. Famous incidents: YouTube hijacking (2008), cryptocurrency theft via BGP. Defense: (1) RPKI (Resource Public Key Infrastructure), (2) BGP route validation, (3) Monitor for route anomalies, (4) Secure router management. Network layer attacks can redirect entire organizations' or countries' traffic."
  }
];