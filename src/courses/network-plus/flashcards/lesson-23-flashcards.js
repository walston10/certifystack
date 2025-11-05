// Flashcards for Lesson 23: VPNs and Remote Access

export const lesson23Flashcards = [
  {
    id: 1,
    front: "What is a VPN (Virtual Private Network)?",
    back: "VPN creates secure encrypted tunnel over public network (usually internet). Enables: remote access to private network, secure communication over untrusted networks. Uses: encryption (confidentiality), authentication (verify identity), tunneling (encapsulation). Two main types: site-to-site (connects networks), remote access (connects individual users). Critical for: remote workers, secure branch connections, privacy."
  },
  {
    id: 2,
    front: "What is a site-to-site VPN?",
    back: "Site-to-site VPN connects entire networks (office-to-office, branch-to-headquarters). Characteristics: always-on connection, router-to-router/firewall-to-firewall, transparent to users (automatic), entire network traffic encrypted. Use cases: branch offices, data center interconnect, cloud connectivity. Types: intranet (within organization), extranet (to partners). More permanent than remote access VPN."
  },
  {
    id: 3,
    front: "What is a remote access VPN (client-to-site)?",
    back: "Remote access VPN connects individual users to corporate network from remote locations. Characteristics: on-demand connection (user initiates), requires VPN client software, per-user authentication, mobile workers. Use cases: work from home, traveling employees, contractors. Users appear as if on local network (access internal resources). More dynamic than site-to-site."
  },
  {
    id: 4,
    front: "Compare site-to-site vs remote access VPN",
    back: "Site-to-site: connects networks, always-on, router-based, transparent to users, fewer connections. Remote access: connects individual users, on-demand, client software required, user authentication, many concurrent connections. Choose: site-to-site for offices, remote access for mobile workers. Different use cases, often deployed together. Both use encryption/tunneling but different connection models."
  },
  {
    id: 5,
    front: "What is IPSec (Internet Protocol Security)?",
    back: "IPSec is suite of protocols securing IP communications at network layer. Components: AH (Authentication Header - integrity), ESP (Encapsulating Security Payload - encryption), IKE (Internet Key Exchange - key management). Modes: transport (only payload encrypted), tunnel (entire packet encrypted). Features: strong security, widely supported, complex configuration. Common for: site-to-site VPNs, remote access. Industry standard."
  },
  {
    id: 6,
    front: "What is AH (Authentication Header) in IPSec?",
    back: "AH provides: data integrity (hash), authentication (verify sender), anti-replay protection. Does NOT provide encryption (confidentiality). Rarely used alone (ESP preferred). Why exists: some environments need integrity without encryption (performance, legal). Problem: doesn't work through NAT (modifies headers). IP protocol 51. Modern deployments use ESP which provides everything AH does plus encryption."
  },
  {
    id: 7,
    front: "What is ESP (Encapsulating Security Payload) in IPSec?",
    back: "ESP provides: encryption (confidentiality), integrity, authentication, anti-replay. Most commonly used IPSec protocol. Encrypts: payload (transport mode) or entire packet (tunnel mode). Works through NAT (NAT-T). IP protocol 50. Encryption algorithms: AES (modern), 3DES (legacy). ESP is why IPSec is secure. Use ESP instead of AH for complete protection."
  },
  {
    id: 8,
    front: "What is IKE (Internet Key Exchange) in IPSec?",
    back: "IKE establishes secure connection and manages encryption keys. UDP ports: 500 (IKE), 4500 (NAT-T). Phases: Phase 1 (establish secure channel - IKE SA), Phase 2 (negotiate IPSec parameters - IPSec SA). Handles: authentication, key exchange, SA negotiation. Security Associations (SA): parameters for secure connection. IKEv2 (current) improves on IKEv1: fewer messages, more reliable."
  },
  {
    id: 9,
    front: "What's the difference between IPSec transport mode and tunnel mode?",
    back: "Transport mode: encrypts only payload, original IP header visible. Use: end-to-end between hosts, less overhead. Tunnel mode: encrypts entire packet (new IP header added), original packet hidden. Use: gateway-to-gateway, more secure, standard for VPNs. Example: site-to-site always tunnel mode (routers create tunnel). Remote access typically tunnel mode. Tunnel provides complete confidentiality."
  },
  {
    id: 10,
    front: "What is SSL/TLS VPN?",
    back: "SSL/TLS VPN uses HTTPS (port 443) to create secure tunnel. Advantages: no special client needed (browser-based option), works through restrictive firewalls (looks like HTTPS), easy deployment, clientless access possible. Types: clientless (web portal), thin client (Java/ActiveX), full client (installed app). Trade-offs: less features than IPSec, but easier for users. Popular for: remote access, BYOD, contractor access."
  },
  {
    id: 11,
    front: "Compare IPSec VPN vs SSL/TLS VPN",
    back: "IPSec: network layer, full network access, more complex, better performance, requires client. SSL/TLS: application layer, port 443, easier deployment, works through firewalls, clientless option. Choose: IPSec for site-to-site and power users, SSL/TLS for remote access and simple deployment. Modern VPN solutions support both. Convergence: many products now called 'SSL VPN' but use TLS + full tunneling (similar to IPSec)."
  },
  {
    id: 12,
    front: "What is PPTP (Point-to-Point Tunneling Protocol)?",
    back: "PPTP is legacy VPN protocol (Microsoft). Port: TCP 1723 + GRE (protocol 47). Easy setup, built into Windows. Major problem: WEAK SECURITY (easily cracked in minutes). Uses: outdated MS-CHAP authentication, weak encryption. Status: deprecated, should NOT be used. Mentioned for: legacy systems, exam questions. Replace with: IPSec, SSL/TLS, OpenVPN. Historical protocol - no excuse to use in production."
  },
  {
    id: 13,
    front: "What is L2TP (Layer 2 Tunneling Protocol)?",
    back: "L2TP creates tunnel but provides NO encryption/security by itself. Port: UDP 1701. Always combined with IPSec (L2TP/IPSec) for security. Why exist: separates tunneling from encryption, flexibility. L2TP creates tunnel, IPSec encrypts traffic. Common combination for: remote access VPN, better than PPTP, more compatible than pure IPSec. Built into most operating systems. Good security when combined with IPSec."
  },
  {
    id: 14,
    front: "What is OpenVPN?",
    back: "OpenVPN is open-source VPN solution using SSL/TLS. Port: configurable (commonly 1194 UDP or 443 TCP). Advantages: open source (auditable), highly configurable, cross-platform, strong security, can use any port (bypass restrictions). Authentication: certificates preferred, username/password supported. Use cases: remote access, site-to-site, pfSense, OPNsense. Very popular in: non-commercial, privacy-focused, custom deployments."
  },
  {
    id: 15,
    front: "What is WireGuard?",
    back: "WireGuard is modern VPN protocol (2020). Characteristics: extremely simple code (4000 lines vs 100,000+ for IPSec), very fast (performance), modern cryptography (ChaCha20, Curve25519), easy configuration. Port: UDP 51820 (configurable). Built into: Linux kernel, mobile apps. Advantages: lightweight, better battery life, faster handoffs. Gaining adoption. Considered: future of VPN. Some enterprise features still maturing."
  },
  {
    id: 16,
    front: "What is a VPN concentrator?",
    back: "VPN concentrator is dedicated hardware device handling large numbers of VPN connections (hundreds to thousands). Features: hardware acceleration (crypto), high throughput, load balancing, redundancy, centralized management. Better than: router-based VPN (limited connections). Use cases: enterprise remote access, large branch networks. Examples: Cisco ASA, Palo Alto GlobalProtect gateway. Enterprise feature. Routers/firewalls handle smaller VPN deployments."
  },
  {
    id: 17,
    front: "What is split tunneling vs full tunneling?",
    back: "Split tunneling: only traffic destined for corporate network goes through VPN, internet traffic goes direct. Pros: better performance, less VPN bandwidth. Cons: security risk (bypasses corporate security controls). Full tunneling: ALL traffic goes through VPN. Pros: complete security control, consistent policies. Cons: slower performance, more VPN bandwidth. Enterprise often requires: full tunneling for security. Home users prefer: split tunneling for speed."
  },
  {
    id: 18,
    front: "What are the security implications of split tunneling?",
    back: "Split tunneling creates security risks: 1) Bypasses corporate firewall/IPS/content filtering, 2) Infected home network can attack corporate network, 3) Malicious traffic avoids detection, 4) Data exfiltration path (DLP bypass), 5) Compliance violations (unprotected sensitive data). Benefits: performance, user experience. Decision: security requirements vs user experience. High-security environments: force full tunneling. Balance depends on: risk tolerance, data sensitivity, user needs."
  },
  {
    id: 19,
    front: "What is RDP (Remote Desktop Protocol)?",
    back: "RDP is Microsoft's protocol for remote GUI access to Windows systems. Port: TCP 3389. Features: full desktop experience, clipboard sharing, drive redirection, audio. Use cases: remote administration, virtual desktops (VDI), remote work. Security concerns: directly exposed RDP = ransomware target, brute force attacks. Best practices: VPN required, strong passwords, MFA, NLA (Network Level Authentication), restrict access, non-standard port, monitor logs."
  },
  {
    id: 20,
    front: "What is VNC (Virtual Network Computing)?",
    back: "VNC is cross-platform remote desktop protocol. Port: typically TCP 5900+. Open source, platform-agnostic (Windows, Mac, Linux). Implementations: RealVNC, TightVNC, UltraVNC, TigerVNC. Features: simple, lightweight. Drawbacks: weak encryption (often none), slower than RDP. Use: tech support, cross-platform remote access, server management. Always use: VPN or SSH tunnel with VNC (secure the connection). Many flavors with different capabilities."
  },
  {
    id: 21,
    front: "What is SSH (Secure Shell)?",
    back: "SSH provides secure encrypted remote command-line access. Port: TCP 22. Uses: server administration (Linux/Unix), file transfer (SCP/SFTP), tunneling (port forwarding, VPN). Authentication: password or (better) public key. Strong encryption, trusted protocol. Replaces: Telnet (insecure). Additional features: X11 forwarding (GUI apps), tunneling (encrypt other protocols), jump hosts (bastion). Industry standard for remote Linux/Unix management."
  },
  {
    id: 22,
    front: "What is SSH tunneling (port forwarding)?",
    back: "SSH tunneling encrypts traffic through SSH connection. Types: Local forward (access remote service securely), Remote forward (expose local service), Dynamic (SOCKS proxy). Use cases: encrypt unencrypted protocols, bypass firewall restrictions, secure database connections, access internal resources. Example: ssh -L 8080:webserver:80 user@gateway (access internal web server securely). Poor man's VPN. Very useful administrative tool."
  },
  {
    id: 23,
    front: "What VPN authentication methods exist?",
    back: "Pre-shared key (PSK): shared secret, simple but key distribution problem. Certificates (PKI): most secure, scalable, mutual authentication. Username/password: user-friendly, combine with MFA. Token-based: OTP, hardware token. Smart card: certificate on card + PIN. Biometrics: fingerprint, face (usually with other factor). Best practice: certificates for site-to-site, username/password + MFA for remote access. Multi-factor wherever possible."
  },
  {
    id: 24,
    front: "What encryption algorithms are used in VPNs?",
    back: "Symmetric encryption (bulk data): AES-256 (best), AES-128 (good), 3DES (legacy, avoid), ChaCha20 (modern, WireGuard). Asymmetric (key exchange): RSA-2048+, ECDHE (preferred - perfect forward secrecy). Hashing (integrity): SHA-256 (good), SHA-512 (better), MD5 (broken, never use). Choose: AES-256 + SHA-256 minimum. Avoid: DES, 3DES, MD5, SHA-1. Performance vs security: modern CPUs handle AES efficiently (hardware acceleration)."
  },
  {
    id: 25,
    front: "What is perfect forward secrecy (PFS) in VPNs?",
    back: "PFS ensures session keys not compromised if long-term key (private key) compromised later. Each session generates unique ephemeral keys (not derived from master key). Benefit: past sessions remain secure even if server compromised. Algorithms supporting PFS: DHE (Diffie-Hellman Ephemeral), ECDHE (Elliptic Curve DHE). Modern requirement. Without PFS: capture encrypted traffic, steal key later, decrypt all traffic. With PFS: can only decrypt current session."
  },
  {
    id: 26,
    front: "Quick scenario: 500 remote workers need VPN access. What do you recommend?",
    back: "Deploy: 1) VPN concentrator (handle scale, not router VPN), 2) SSL/TLS VPN (easy deployment, clientless option) OR IPSec (better performance), 3) Integrate with AD (centralized auth), 4) MFA required (strong security), 5) Full tunneling (security control), 6) Split-tunnel for exceptions if needed, 7) High availability (redundant concentrators), 8) Monitor connections/logs, 9) Client software management. Balance: security, performance, user experience."
  },
  {
    id: 27,
    front: "What is NAT traversal (NAT-T) in VPNs?",
    back: "NAT-T allows IPSec through NAT devices (which normally break IPSec). Problem: NAT modifies IP headers, breaks AH and ESP. Solution: encapsulate ESP in UDP port 4500, NAT can translate UDP without breaking encryption. Automatic detection: peers negotiate NAT-T if NAT detected. Essential for: remote workers behind home routers, site-to-site with NAT. Enabled by default in modern VPN implementations."
  },
  {
    id: 28,
    front: "What is always-on VPN?",
    back: "Always-on VPN automatically connects before user login, maintains connection continuously. Benefits: security from boot (no unprotected window), transparent to users, enforces VPN use, always protected. Use cases: managed laptops, high-security requirements, policy enforcement. Implementations: Windows (DirectAccess, always-on VPN), macOS, mobile MDM. Considerations: battery impact (mobile), internet dependency, fallback for VPN failure. Corporate-managed devices feature."
  },
  {
    id: 29,
    front: "What are common VPN problems and troubleshooting steps?",
    back: "Can't connect: check internet, firewall blocking ports, credentials, VPN server status. Connects but slow: bandwidth saturation, encryption overhead, routing issues. Connects but no access: routing problem, firewall rules, DNS resolution. Frequent disconnects: unstable internet, timeout settings, NAT issues. Troubleshoot: test connectivity, check logs, verify config, try different protocol, split tunnel test, compare working vs broken systems."
  },
  {
    id: 30,
    front: "Speed drill: Match VPN protocol to characteristic - IPSec, SSL/TLS, PPTP, L2TP, OpenVPN, WireGuard",
    back: "IPSec: network layer, site-to-site standard. SSL/TLS: port 443, clientless option. PPTP: legacy, insecure (never use). L2TP: no encryption (needs IPSec). OpenVPN: open source, SSL/TLS based. WireGuard: modern, simple, fast. Know protocol strengths/weaknesses for exam!"
  }
];