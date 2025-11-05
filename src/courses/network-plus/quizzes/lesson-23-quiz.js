// Quiz for Lesson 23: VPNs and Remote Access

export const lesson23Quiz = [
  {
    id: 1,
    question: "A company needs to securely connect their headquarters to three branch offices over the internet. The connections should be always-on and transparent to users. What type of VPN should be implemented?",
    options: [
      "Remote access VPN where individual users connect as needed",
      "Site-to-site VPN connecting entire networks with always-on encrypted tunnels",
      "SSL VPN for browser-based access",
      "Clientless VPN for temporary access"
    ],
    correct: 1,
    explanation: "VPN types: 1) Site-to-site (network-to-network): connects entire networks, router-to-router/firewall-to-firewall, always-on, transparent to users, used for branch offices/data centers. 2) Remote access (client-to-site): individual users connecting remotely, on-demand or always-on, VPN client software required, used for teleworkers/mobile users. Site-to-site is ideal for permanent connections between fixed locations. All traffic between sites automatically encrypted. Users don't need VPN clients—connectivity is at network layer, transparent to applications and users."
  },
  {
    id: 2,
    question: "A remote access VPN is configured with split tunneling enabled. A user connects from home and accesses both company resources and personal websites. What happens to the traffic destined for personal websites?",
    options: [
      "All traffic is encrypted and routed through the corporate VPN tunnel",
      "Traffic to personal websites goes directly to the internet without passing through the VPN tunnel (split tunneling)",
      "Personal website traffic is blocked entirely",
      "Traffic alternates between VPN and direct internet connection"
    ],
    correct: 1,
    explanation: "Split tunneling: only traffic destined for corporate networks goes through VPN; other traffic (internet, personal sites) goes directly from client's location. Full tunneling: all traffic routes through VPN regardless of destination. Split tunneling pros: 1) Reduced VPN bandwidth load, 2) Better performance for internet traffic, 3) Reduced latency for non-corporate resources. Cons: 1) Security risk (malware could enter client from direct internet, then access corporate via VPN), 2) Less visibility (corporate can't monitor/filter internet traffic), 3) Data exfiltration path. Many organizations disable split tunneling for security, requiring full tunnel despite performance impact."
  },
  {
    id: 3,
    question: "A company evaluates VPN protocols for remote access. They need strong encryption and want to use the standard HTTPS port (443) to avoid firewall issues. Which VPN solution best meets these requirements?",
    options: [
      "PPTP which uses port 1723 and weak encryption",
      "IPSec which requires multiple ports (UDP 500, 4500, IP protocols 50/51)",
      "SSL/TLS VPN operating on port 443 with strong encryption and firewall-friendly operation",
      "L2TP alone without IPSec"
    ],
    correct: 2,
    explanation: "VPN protocols comparison: 1) SSL/TLS VPN: uses port 443 (HTTPS), firewall-friendly, browser-based or client, strong encryption (AES), easy deployment. 2) IPSec: strong encryption, requires UDP 500/4500, IP protocols 50/51 (ESP) and 51 (AH), more complex firewall rules, excellent for site-to-site. 3) PPTP: port 1723, weak encryption (obsolete), easy setup but insecure. 4) L2TP/IPSec: combines L2TP tunneling + IPSec encryption, UDP 500/1701/4500. SSL VPN advantages: works through most firewalls (port 443 rarely blocked), no special firewall rules, clientless options available. Modern implementations: OpenVPN (SSL/TLS-based), Cisco AnyConnect (SSL), WireGuard (modern, lightweight)."
  },
  {
    id: 4,
    question: "An IPSec VPN is configured between two sites. The VPN uses AH (Authentication Header) for packet authentication. Users complain they cannot access certain applications that require payload modification (like NAT). What is causing this issue?",
    options: [
      "AH is providing too much security",
      "AH authenticates entire packet including IP header, preventing NAT (which modifies IP addresses) from working properly",
      "The VPN bandwidth is insufficient",
      "AH requires additional ports to be opened"
    ],
    correct: 1,
    explanation: "IPSec protocols: 1) AH (Authentication Header, IP protocol 51): authenticates entire packet including IP header, provides integrity/authentication but no encryption, prevents NAT (modifies IP header, breaks authentication). 2) ESP (Encapsulating Security Payload, IP protocol 50): encrypts payload, authenticates encrypted data, NAT-compatible (with NAT-T), provides confidentiality + integrity. Modern IPSec uses ESP primarily. AH rarely used because: no encryption, NAT incompatibility common in internet VPNs. NAT-T (NAT Traversal, UDP 4500): encapsulates ESP in UDP to traverse NAT devices. Solution: use ESP instead of AH for NAT compatibility and encryption."
  },
  {
    id: 5,
    question: "A company deploys IPSec VPN with two modes available: transport mode and tunnel mode. For a site-to-site VPN between two offices, which mode should be used and why?",
    options: [
      "Transport mode because it has less overhead",
      "Tunnel mode because it encrypts the entire original IP packet and adds a new IP header, providing complete confidentiality",
      "Either mode works equally well for site-to-site VPNs",
      "Transport mode because it's faster"
    ],
    correct: 1,
    explanation: "IPSec modes: 1) Transport mode: encrypts only payload, original IP header intact, less overhead, used for host-to-host (end-to-end), not suitable for network-to-network. 2) Tunnel mode: encrypts entire original packet (including IP header), adds new IP header with VPN gateway addresses, provides complete confidentiality of internal addressing, used for site-to-site VPNs. Site-to-site requires tunnel mode: hides internal network topology, allows routing between private IP ranges, encrypts everything including original headers. Transport mode would expose internal IP addresses (security concern) and create routing challenges. Remote access VPNs also use tunnel mode typically."
  },
  {
    id: 6,
    question: "A remote worker uses RDP (Remote Desktop Protocol) to access their office workstation from home. However, RDP transmits over clear text by default. What is the best way to secure this remote access?",
    options: [
      "Use RDP without any changes since it's secure enough",
      "Establish a VPN tunnel first, then use RDP through the encrypted VPN connection",
      "Only use RDP during off-peak hours",
      "Change RDP to use HTTP instead of its default port"
    ],
    correct: 1,
    explanation: "Remote desktop security: RDP (port 3389) vulnerabilities: 1) Protocol vulnerabilities (ransomware attacks via RDP), 2) Brute force attacks common, 3) Should never be directly exposed to internet. Best practices: 1) VPN first (establish VPN, then RDP through tunnel—adds encryption layer), 2) RDP Gateway (application-layer RDP access over HTTPS), 3) Network Level Authentication (NLA), 4) Strong passwords + MFA, 5) Limit RDP access (firewall rules, specific IPs), 6) Disable if not needed. Alternatives: VNC (Virtual Network Computing), SSH for Linux/Unix, cloud-based solutions (Azure Virtual Desktop). Always layer security: VPN + strong auth + monitoring."
  },
  {
    id: 7,
    question: "An organization's VPN concentrator handles 500 simultaneous remote access connections. Each connection requires encryption/decryption of data. What hardware feature should the VPN concentrator have to handle this load efficiently?",
    options: [
      "More RAM to store connection information",
      "Hardware encryption acceleration (dedicated crypto processors/ASICs) to offload CPU-intensive encryption operations",
      "Faster network interfaces only",
      "Larger hard drives for logging"
    ],
    correct: 1,
    explanation: "VPN concentrator: purpose-built device for handling many VPN connections. Key features: 1) Hardware encryption acceleration (crypto processors, ASICs)—offloads CPU, handles encryption/decryption at wire speed, 2) High connection capacity (hundreds to thousands of simultaneous tunnels), 3) Multiple VPN protocol support (IPSec, SSL), 4) Load balancing capabilities, 5) Integrated authentication (RADIUS, LDAP, AD), 6) High availability/clustering. Without hardware acceleration: CPU becomes bottleneck, throughput drops, latency increases. Encryption/decryption is computationally expensive—AES, SHA operations. Concentrators handle scale better than general-purpose routers for VPN. Used in: large enterprises, service providers, data centers with many remote users."
  },
  {
    id: 8,
    question: "A small business wants to provide VPN access but doesn't want to deploy VPN client software on employee devices. They need web-based access to specific applications. What VPN solution should they implement?",
    options: [
      "IPSec VPN requiring client software installation",
      "Clientless SSL VPN providing browser-based access without client software",
      "PPTP VPN with built-in OS clients",
      "L2TP/IPSec requiring configuration profiles"
    ],
    correct: 1,
    explanation: "SSL VPN deployment models: 1) Clientless (portal-based): access via web browser only, no software installation, limited to web-based applications, reverse proxy for internal resources, easy deployment, BYOD-friendly. 2) Client-based (full tunnel): VPN client software required, access to all network resources, similar to IPSec experience, more functionality. Clientless SSL VPN: user authenticates to web portal → accesses published applications (web apps, RDP, SSH) through browser. Limitations: can't access all applications (only web-enabled or published), less secure than full client (browser-based). Use cases: contractors, partners, BYOD, minimal access requirements. Popular products: Citrix Gateway, Cisco AnyConnect (portal mode), F5 APM."
  },
  {
    id: 9,
    question: "Two companies merge and need to connect their networks securely over the internet. Each company uses the same private IP range (10.0.0.0/8). What VPN challenge does this create?",
    options: [
      "VPNs cannot connect networks with overlapping IP addresses without NAT or IP renumbering",
      "Overlapping IPs have no impact on VPN functionality",
      "VPNs automatically resolve IP conflicts",
      "This only affects wireless networks, not VPNs"
    ],
    correct: 0,
    explanation: "Overlapping IP addresses in VPN: major challenge when connecting networks using same private ranges. Problems: 1) Routing ambiguity (which 10.0.0.5 to route to?), 2) Cannot create routes for same subnet, 3) Applications fail (duplicate IPs). Solutions: 1) IP renumbering (change one or both networks—ideal but disruptive), 2) NAT on VPN (translate overlapping ranges—complex, breaks some apps), 3) VRF (Virtual Routing and Forwarding) separation, 4) Proxy/gateway translation. Prevention: plan IP addressing strategy during mergers/acquisitions, use different private ranges in different locations (10.x, 172.16.x, 192.168.x), document IP usage, avoid default ranges (192.168.1.0/24 common, likely to conflict)."
  },
  {
    id: 10,
    question: "A company implements Always-On VPN for corporate laptops. When users boot their laptops outside the office, the VPN connects before user login. What security benefit does this provide?",
    options: [
      "Faster boot times for users",
      "Group Policy and security updates can be applied before user login, ensuring corporate security policies are enforced even on remote devices",
      "Users don't need to remember to connect VPN",
      "Reduced VPN licensing costs"
    ],
    correct: 1,
    explanation: "Always-On VPN (Device Tunnel): VPN establishes before user login (machine-level authentication). Benefits: 1) Pre-login security policies applied (group policy, patches, configuration), 2) Computer-level authentication enforced, 3) Security updates downloaded before user session, 4) Compliance enforcement (device must be secured before user access), 5) Seamless user experience (network available at login). Implementation: Windows DirectAccess, Windows 10/11 Always-On VPN, certificate-based machine auth. Use cases: managed corporate devices, bring-your-own-device with MDM, security-conscious organizations. Challenges: certificate management, device trust, bandwidth for background updates. Ensures device compliance before allowing user interaction."
  },
  {
    id: 11,
    question: "An IPSec VPN uses IKE (Internet Key Exchange) during tunnel establishment. What is IKE's primary purpose in the VPN setup?",
    options: [
      "IKE encrypts all user data in the tunnel",
      "IKE negotiates security parameters, exchanges keys, and establishes the secure tunnel (Phase 1 and Phase 2)",
      "IKE provides the user interface for VPN clients",
      "IKE monitors tunnel performance"
    ],
    correct: 1,
    explanation: "IKE (Internet Key Exchange): establishes IPSec tunnels through two phases: Phase 1 (IKE SA - Security Association): authenticates peers, negotiates encryption/hash algorithms, establishes secure channel for Phase 2, uses UDP 500. Phase 2 (IPSec SA): negotiates IPSec parameters (ESP/AH, encryption, lifetime), creates actual IPSec tunnel for user data, uses established secure channel from Phase 1. IKE versions: IKEv1 (older, two separate negotiations), IKEv2 (modern, simplified, fewer packets, better for mobile, built-in NAT-T, MOBIKE for roaming). IKE doesn't encrypt user data—it negotiates parameters and keys. ESP/AH encrypt actual data using keys exchanged via IKE."
  },
  {
    id: 12,
    question: "A remote access VPN requires strong authentication. The security team wants to ensure that even if a user's password is stolen, the attacker cannot access the VPN without physical possession of a second factor. What should be implemented?",
    options: [
      "Longer passwords with more complexity",
      "Multi-factor authentication requiring password (something you know) plus token/smartphone (something you have)",
      "Certificate-based authentication only",
      "Biometric authentication only"
    ],
    correct: 1,
    explanation: "VPN authentication best practices: 1) Multi-factor authentication (MFA) essential for remote access—password + token (RSA, smartphone app, SMS), 2) Certificate-based auth (strong but manage certificates), 3) Integration with corporate authentication (RADIUS, LDAP, AD). MFA for VPN: prevents credential theft attacks, requires attacker to compromise multiple factors, significantly increases security. Methods: 1) Hardware tokens (RSA SecurID), 2) Software tokens (Google Authenticator, Microsoft Authenticator), 3) SMS codes (less secure—SIM swapping), 4) Push notifications (Duo, Okta). VPN MFA more critical than internal MFA—external exposure, compromise of VPN = access to entire network. Some organizations require different MFA for VPN vs internal access."
  },
  {
    id: 13,
    question: "A company uses WireGuard for their VPN infrastructure. What advantages does WireGuard provide compared to traditional IPSec or OpenVPN?",
    options: [
      "WireGuard is older and more proven than other VPN protocols",
      "WireGuard is modern, lightweight, uses state-of-the-art cryptography, and provides better performance with simpler configuration",
      "WireGuard only works on Windows",
      "WireGuard provides no encryption"
    ],
    correct: 1,
    explanation: "WireGuard: modern VPN protocol (2020s). Advantages vs IPSec/OpenVPN: 1) Simplicity (4,000 lines of code vs 100,000+—easier to audit/secure), 2) Performance (faster, lower latency, better battery on mobile), 3) Modern cryptography (ChaCha20, Curve25519—no weak algorithms), 4) Roaming support (seamless transition between networks), 5) Simple configuration (public key infrastructure similar to SSH). Disadvantages: 1) Less mature (fewer years in production), 2) Dynamic IP handling (requires additional tools for some use cases), 3) No client-to-site by default (requires additional setup). Use cases: site-to-site VPNs, point-to-point tunnels, mobile VPN. Adoption growing: Linux kernel (5.6+), cross-platform support. IPSec/OpenVPN still common in enterprise due to maturity/features."
  },
  {
    id: 14,
    question: "A VPN connection between two sites is established successfully, but users cannot access resources on the remote network. The VPN tunnel shows as active, and both sides can ping the VPN gateway addresses. What is the most likely cause?",
    options: [
      "The VPN encryption is too strong",
      "Routing configuration is missing—local networks don't have routes back to remote networks through the VPN tunnel",
      "VPN bandwidth is insufficient",
      "The VPN protocol is incompatible"
    ],
    correct: 1,
    explanation: "VPN connectivity troubleshooting layers: 1) Tunnel establishment (is tunnel up? - IKE Phase 1/2 complete), 2) Routing (can each side route to remote networks through tunnel?), 3) Firewall rules (are packets permitted through tunnel?), 4) Application issues. Common issue: tunnel up but no routes. Each side needs: 1) Route to remote network via tunnel interface, 2) Return routes (remote side must route back), 3) NAT exemption (don't NAT VPN traffic). Verification: 1) Check routing tables, 2) Ping VPN gateway (works), 3) Ping remote host (fails—routing issue), 4) Traceroute to identify where packets stop. Solution: add static routes or configure VPN to push routes to clients/peers."
  },
  {
    id: 15,
    question: "A company's remote access VPN solution uses SSL VPN with web portal access. The security team wants to ensure that VPN traffic is not intercepted and decrypted even if the certificate is compromised. What feature should be enabled?",
    options: [
      "Stronger passwords for VPN access",
      "Perfect Forward Secrecy (PFS) which generates unique session keys that cannot be decrypted even if long-term keys are compromised",
      "Longer certificate validity periods",
      "Disabling all encryption"
    ],
    correct: 1,
    explanation: "Perfect Forward Secrecy (PFS): cryptographic property ensuring that session keys are not derived from long-term keys. Each session uses unique, ephemeral keys. Benefits: 1) Compromise of long-term keys (certificates, private keys) doesn't allow decryption of past sessions, 2) Each session independently secure, 3) Limits damage from key compromise. Without PFS: attacker records encrypted traffic, compromises private key later, decrypts all recorded traffic. With PFS: past sessions remain secure even after key compromise. Implementation: Diffie-Hellman Ephemeral (DHE) or Elliptic Curve DHE (ECDHE) key exchange. Modern VPNs/TLS should enable PFS. Check cipher suites: TLS_ECDHE_* or TLS_DHE_* include PFS. Critical for long-term confidentiality especially in VPNs (targeted for interception)."
  }
];

// Export for use in quiz component
export default lesson23Quiz;