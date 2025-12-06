// Lesson 9: Network-Based Attacks
// Security+ (SY0-701) - Domain 2.0: Threats, Vulnerabilities, and Mitigations

export const lesson9Flashcards = [
  {
    id: 1,
    front: "What is a DoS (Denial of Service) attack?",
    back: "Attack that overwhelms a system to make it unavailable to legitimate users. Targets availability in the CIA triad. Can be volumetric, protocol, or application-based."
  },
  {
    id: 2,
    front: "What is a DDoS (Distributed Denial of Service) attack?",
    back: "DoS attack launched from multiple sources simultaneously (botnet). Much harder to block than single-source DoS. Can generate massive traffic volumes."
  },
  {
    id: 3,
    front: "What is a Volumetric DDoS attack?",
    back: "Floods target with massive traffic to consume bandwidth. Measured in Gbps or Tbps. Examples: UDP floods, ICMP floods, amplification attacks."
  },
  {
    id: 4,
    front: "What is a Protocol DDoS attack?",
    back: "Exploits weaknesses in network protocols to exhaust resources. Targets firewalls, load balancers, servers. Examples: SYN flood, Ping of Death."
  },
  {
    id: 5,
    front: "What is an Application Layer DDoS attack?",
    back: "Targets specific services or applications (Layer 7). Looks like legitimate traffic. Examples: HTTP floods, Slowloris. Harder to detect than volumetric."
  },
  {
    id: 6,
    front: "What is a SYN Flood attack?",
    back: "Sends many TCP SYN packets without completing handshake. Exhausts server's connection table waiting for ACKs that never come. Protocol-based DoS."
  },
  {
    id: 7,
    front: "What is an Amplification attack?",
    back: "Uses third-party servers to multiply attack traffic. Spoofs victim's IP, servers respond with larger replies to victim. Examples: DNS amplification, NTP amplification."
  },
  {
    id: 8,
    front: "How does DNS Amplification work?",
    back: "Attacker sends small DNS queries with spoofed source IP (victim's). DNS servers send large responses to victim. Amplification factor up to 70x."
  },
  {
    id: 9,
    front: "What is an On-path attack (Man-in-the-Middle)?",
    back: "Attacker positions between two parties to intercept, read, or modify communications. Victims think they're communicating directly with each other."
  },
  {
    id: 10,
    front: "What is ARP Poisoning/Spoofing?",
    back: "Sending fake ARP messages to link attacker's MAC with legitimate IP. Traffic meant for gateway goes to attacker instead. Enables on-path attacks on LAN."
  },
  {
    id: 11,
    front: "What is DNS Spoofing/Poisoning?",
    back: "Corrupting DNS cache to redirect traffic to malicious sites. Victim types correct URL but resolves to attacker's IP. Can affect individual or DNS server."
  },
  {
    id: 12,
    front: "What is Session Hijacking?",
    back: "Stealing or taking over an active session after authentication. Attacker uses stolen session token to impersonate legitimate user."
  },
  {
    id: 13,
    front: "What is SSL Stripping?",
    back: "Downgrading HTTPS connections to HTTP. Attacker intercepts traffic, connects to server via HTTPS, serves victim HTTP. Victim sees no encryption."
  },
  {
    id: 14,
    front: "What is a Replay Attack?",
    back: "Capturing valid data transmission and retransmitting it later. Even encrypted traffic can be replayed. Countered with timestamps and nonces."
  },
  {
    id: 15,
    front: "What is MAC Flooding?",
    back: "Overwhelming switch's MAC address table with fake addresses. Switch fails open and broadcasts all traffic like a hub. Enables sniffing on switched networks."
  },
  {
    id: 16,
    front: "What is MAC Spoofing?",
    back: "Changing device's MAC address to impersonate another device. Can bypass MAC-based access controls or impersonate trusted devices."
  },
  {
    id: 17,
    front: "What is VLAN Hopping?",
    back: "Gaining access to traffic on other VLANs. Methods: switch spoofing (pretending to be a trunk) or double tagging. Breaks VLAN segmentation."
  },
  {
    id: 18,
    front: "What is a Switch Spoofing attack?",
    back: "Attacker configures system to act as a switch and negotiate trunking. Gains access to all VLANs on the trunk. Mitigate by disabling auto-trunking."
  },
  {
    id: 19,
    front: "What is Double Tagging?",
    back: "VLAN hopping by adding two VLAN tags to frames. Outer tag stripped by first switch, inner tag routes to target VLAN. Only works in specific conditions."
  },
  {
    id: 20,
    front: "What is an STP (Spanning Tree) Attack?",
    back: "Manipulating STP to become root bridge, redirecting traffic through attacker. Enables on-path attacks by controlling network topology."
  },
  {
    id: 21,
    front: "What is an Evil Twin attack?",
    back: "Fake wireless access point mimicking legitimate one. Same SSID, often stronger signal. Victims connect to attacker's AP, enabling traffic interception."
  },
  {
    id: 22,
    front: "What is a Rogue Access Point?",
    back: "Unauthorized AP connected to network. May be malicious or well-intentioned employee. Creates security hole bypassing network controls."
  },
  {
    id: 23,
    front: "What's the difference between Evil Twin and Rogue AP?",
    back: "Evil Twin: impersonates legitimate AP to intercept traffic. Rogue AP: unauthorized AP on network, may or may not impersonate. Both are security risks."
  },
  {
    id: 24,
    front: "What is a Deauthentication (Deauth) attack?",
    back: "Sending forged deauth frames to disconnect clients from AP. Forces reconnection, enabling capture of handshake or redirect to evil twin."
  },
  {
    id: 25,
    front: "What is Bluejacking?",
    back: "Sending unsolicited messages to Bluetooth devices. Annoying but not typically harmful. Exploits device discovery features."
  },
  {
    id: 26,
    front: "What is Bluesnarfing?",
    back: "Unauthorized access to data on Bluetooth devices. Can steal contacts, messages, files. More serious than bluejacking. Exploits Bluetooth vulnerabilities."
  },
  {
    id: 27,
    front: "What is DNS Tunneling?",
    back: "Hiding data or commands within DNS queries/responses. Used for data exfiltration or C2 communication. Bypasses firewalls that allow DNS."
  },
  {
    id: 28,
    front: "What is Domain Hijacking?",
    back: "Taking control of a domain by compromising registrar account or exploiting registration process. Attacker controls DNS records for the domain."
  },
  {
    id: 29,
    front: "How do you mitigate ARP Poisoning?",
    back: "Dynamic ARP Inspection (DAI), static ARP entries for critical systems, network segmentation, encrypted protocols (HTTPS, SSH)."
  },
  {
    id: 30,
    front: "How do you mitigate DDoS attacks?",
    back: "DDoS mitigation services, rate limiting, traffic scrubbing, anycast distribution, over-provisioning bandwidth, blocking known-bad IPs, CDN protection."
  }
];