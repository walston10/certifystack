// Flashcards for Lesson 23: VPNs and Remote Access (SHORTENED)

export const lesson23Flashcards = [
  {
    id: 1,
    front: "What is a VPN?",
    back: "Creates secure encrypted tunnel over public network. Enables remote access to private network. Uses encryption, authentication, tunneling. Two types: site-to-site (networks), remote access (individual users)."
  },
  {
    id: 2,
    front: "What is a site-to-site VPN?",
    back: "Connects entire networks (office-to-office). Always-on, router-to-router, transparent to users. Use for branch offices, data center interconnect. More permanent than remote access."
  },
  {
    id: 3,
    front: "What is remote access VPN?",
    back: "Connects individual users to corporate network. On-demand, requires VPN client, per-user authentication. Use for work from home, traveling employees. User-initiated."
  },
  {
    id: 4,
    front: "Site-to-site vs remote access VPN?",
    back: "Site-to-site: connects networks, always-on, router-based, transparent. Remote access: connects users, on-demand, client software, user auth. Different use cases, often deployed together."
  },
  {
    id: 5,
    front: "What is IPSec?",
    back: "Suite of protocols securing IP at network layer. Components: AH (integrity), ESP (encryption), IKE (key management). Modes: transport (payload only), tunnel (entire packet). Industry standard."
  },
  {
    id: 6,
    front: "What is AH in IPSec?",
    back: "Authentication Header - provides integrity and authentication, NO encryption. Doesn't work through NAT. IP protocol 51. Rarely used alone - ESP preferred."
  },
  {
    id: 7,
    front: "What is ESP in IPSec?",
    back: "Encapsulating Security Payload - provides encryption, integrity, authentication. Most used IPSec protocol. Works through NAT. IP protocol 50. Use ESP for complete protection."
  },
  {
    id: 8,
    front: "What is IKE in IPSec?",
    back: "Internet Key Exchange - establishes secure connection and manages keys. UDP ports 500, 4500 (NAT-T). Phase 1: establish secure channel. Phase 2: negotiate IPSec parameters. IKEv2 current version."
  },
  {
    id: 9,
    front: "IPSec transport mode vs tunnel mode?",
    back: "Transport: encrypts payload only, original IP visible. Tunnel: encrypts entire packet (new IP header), standard for VPNs. Tunnel provides complete confidentiality."
  },
  {
    id: 10,
    front: "What is SSL/TLS VPN?",
    back: "Uses HTTPS (port 443) for secure tunnel. Advantages: no special client (browser-based option), works through firewalls, easy deployment. Types: clientless (web portal) or full client."
  },
  {
    id: 11,
    front: "IPSec VPN vs SSL/TLS VPN?",
    back: "IPSec: network layer, full access, more complex, requires client. SSL/TLS: application layer, port 443, easier, clientless option. Choose IPSec for site-to-site, SSL/TLS for easy remote access."
  },
  {
    id: 12,
    front: "What is PPTP?",
    back: "Legacy VPN protocol (Microsoft). Port TCP 1723. WEAK SECURITY - easily cracked. Status: deprecated, should NOT be used. Replace with IPSec, SSL/TLS, OpenVPN. Historical only."
  },
  {
    id: 13,
    front: "What is L2TP?",
    back: "Layer 2 Tunneling Protocol - creates tunnel but NO encryption by itself. Always combined with IPSec (L2TP/IPSec). Port UDP 1701. Good security when combined with IPSec."
  },
  {
    id: 14,
    front: "What is OpenVPN?",
    back: "Open-source VPN using SSL/TLS. Port: configurable (commonly 1194 UDP or 443 TCP). Advantages: open source, highly configurable, cross-platform, strong security. Very popular."
  },
  {
    id: 15,
    front: "What is WireGuard?",
    back: "Modern VPN protocol (2020). Extremely simple code, very fast, modern crypto. Port UDP 51820. Built into Linux kernel. Lightweight, better battery life. Future of VPN."
  },
  {
    id: 16,
    front: "What is a VPN concentrator?",
    back: "Dedicated hardware handling large numbers of VPN connections (hundreds to thousands). Hardware acceleration, high throughput, centralized management. Enterprise feature for scale."
  },
  {
    id: 17,
    front: "Split tunneling vs full tunneling?",
    back: "Split: only corporate traffic through VPN, internet direct. Pros: faster. Cons: security risk. Full: ALL traffic through VPN. Pros: complete security. Cons: slower. Enterprise often requires full."
  },
  {
    id: 18,
    front: "Security implications of split tunneling?",
    back: "Bypasses corporate firewall/IPS, infected home network can attack corporate, DLP bypass, compliance violations. Benefits: performance. High-security environments: force full tunneling."
  },
  {
    id: 19,
    front: "What is RDP?",
    back: "Remote Desktop Protocol - Microsoft GUI remote access. Port TCP 3389. Security concerns: ransomware target if exposed. Best practices: VPN required, MFA, NLA, monitor logs."
  },
  {
    id: 20,
    front: "What is VNC?",
    back: "Cross-platform remote desktop. Port TCP 5900+. Open source, platform-agnostic. Drawbacks: weak/no encryption. Always use with VPN or SSH tunnel. Many implementations."
  },
  {
    id: 21,
    front: "What is SSH?",
    back: "Secure Shell - encrypted remote command-line access. Port TCP 22. Uses: server admin, file transfer (SCP/SFTP), tunneling. Authentication: password or public key. Replaces Telnet."
  },
  {
    id: 22,
    front: "What is SSH tunneling?",
    back: "Encrypts traffic through SSH connection. Types: local forward (access remote), remote forward (expose local), dynamic (SOCKS proxy). Use to encrypt unencrypted protocols, access internal resources."
  },
  {
    id: 23,
    front: "VPN authentication methods?",
    back: "Pre-shared key (PSK), certificates (PKI - most secure), username/password, token-based, smart card, biometrics. Best: certificates for site-to-site, username/password + MFA for remote access."
  },
  {
    id: 24,
    front: "VPN encryption algorithms?",
    back: "Symmetric: AES-256 (best), AES-128 (good), avoid 3DES. Asymmetric: RSA-2048+, ECDHE (PFS). Hashing: SHA-256/512. Choose AES-256 + SHA-256 minimum. Avoid DES, MD5, SHA-1."
  },
  {
    id: 25,
    front: "What is perfect forward secrecy (PFS)?",
    back: "Session keys not compromised if long-term key stolen later. Each session uses unique ephemeral keys. Past sessions remain secure. Algorithms: DHE, ECDHE. Modern requirement."
  },
  {
    id: 26,
    front: "500 remote workers need VPN. What to deploy?",
    back: "VPN concentrator (scale), SSL/TLS or IPSec, integrate with AD, MFA required, full tunneling (security), high availability, monitor connections. Balance security, performance, user experience."
  },
  {
    id: 27,
    front: "What is NAT traversal (NAT-T)?",
    back: "Allows IPSec through NAT devices. Encapsulates ESP in UDP port 4500. NAT can translate UDP without breaking encryption. Essential for remote workers behind home routers."
  },
  {
    id: 28,
    front: "What is always-on VPN?",
    back: "Automatically connects before user login, maintains connection continuously. Benefits: security from boot, transparent to users, enforces VPN. Use for managed laptops, high-security requirements."
  },
  {
    id: 29,
    front: "Common VPN problems?",
    back: "Can't connect: check internet, firewall, credentials. Slow: bandwidth, encryption overhead. Connects but no access: routing, firewall rules, DNS. Disconnects: unstable internet, timeouts, NAT."
  },
  {
    id: 30,
    front: "Match: IPSec / SSL/TLS / PPTP / L2TP / OpenVPN / WireGuard",
    back: "IPSec = network layer, site-to-site. SSL/TLS = port 443, clientless. PPTP = insecure (never use). L2TP = no encryption alone. OpenVPN = open source. WireGuard = modern, fast."
  }
];