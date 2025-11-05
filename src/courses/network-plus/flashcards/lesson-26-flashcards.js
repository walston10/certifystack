// Flashcards for Lesson 26: Wireless Security (WPA3, EAP)

export const lesson26Flashcards = [
  {
    id: 1,
    front: "What is WEP (Wired Equivalent Privacy) and why should it never be used?",
    back: "WEP is original WiFi security protocol (1997). Keys: 64-bit or 128-bit. Major flaws: weak encryption (RC4), static keys, small initialization vector (IV) reuse, easily cracked in minutes with tools (Aircrack-ng). Status: deprecated, broken, NEVER use. Cracking: capture enough packets (5000-10000), crack key in minutes. Mentioned on exam but historical only. Any network still using WEP is completely insecure."
  },
  {
    id: 2,
    front: "What is WPA (Wi-Fi Protected Access)?",
    back: "WPA is interim security protocol replacing WEP (2003). Encryption: TKIP (Temporal Key Integrity Protocol) - improved over WEP. Features: per-packet key mixing, message integrity check, 48-bit IV. Better than WEP but still vulnerable. Status: deprecated (replaced by WPA2). Vulnerabilities: TKIP attacks possible. Created as: quick fix while WPA2 developed. Historical - upgrade to WPA2/WPA3 immediately."
  },
  {
    id: 3,
    front: "What is WPA2 (802.11i)?",
    back: "WPA2 is robust WiFi security standard (2004). Encryption: AES-CCMP (Counter Mode with CBC-MAC Protocol) - very strong. Two modes: Personal (PSK - Pre-Shared Key), Enterprise (802.1X authentication). Industry standard until WPA3. Vulnerabilities: KRACK attack (2017 - fixed with patches), weak PSK passwords (dictionary attacks). Still widely used and acceptable if: updated firmware, strong passwords (15+ characters), WPA3 not available."
  },
  {
    id: 4,
    front: "What is WPA3 and its improvements over WPA2?",
    back: "WPA3 is latest WiFi security standard (2018). Major improvements: 1) SAE (Simultaneous Authentication of Equals) replaces PSK - protection against offline dictionary attacks, 2) Forward secrecy - past sessions remain secure if password later compromised, 3) 192-bit encryption (Enterprise mode), 4) Protected Management Frames (mandatory - prevents deauth attacks), 5) Enhanced Open (encryption for public networks). Backward compatible with WPA2. Future-proof security. Deploy wherever possible."
  },
  {
    id: 5,
    front: "What is SAE (Simultaneous Authentication of Equals) in WPA3?",
    back: "SAE is WPA3 Personal authentication replacing PSK. Benefits: protection against offline dictionary attacks (attacker can't capture handshake and crack offline), forward secrecy (compromising password doesn't decrypt past sessions), stronger password-based authentication. How it works: Dragonfly handshake protocol. Even weak passwords better protected than WPA2-PSK. Major security improvement. Makes password guessing much harder for attackers."
  },
  {
    id: 6,
    front: "What is forward secrecy in WPA3?",
    back: "Forward secrecy ensures past communications remain secure even if long-term key (password) compromised later. Mechanism: each session uses unique ephemeral keys not derived from password. Example: attacker captures encrypted traffic today, steals password tomorrow → can't decrypt captured traffic. WPA2: compromised password decrypts all past captured traffic. WPA3: each session independently secure. Critical protection for: sensitive environments, long-lived networks."
  },
  {
    id: 7,
    front: "What is WPA3 Enhanced Open?",
    back: "WPA3 Enhanced Open (OWE - Opportunistic Wireless Encryption) provides encryption for open/public networks without passwords. Uses: individualized data encryption per client (not shared key). Benefits: protection against passive eavesdropping on public WiFi (coffee shops, airports). Limitations: no authentication (anyone can connect), doesn't prevent active attacks. Better than: open WPA2 (no encryption). Not replacement for: WPA3-Personal/Enterprise (no password = limited security). Improves public WiFi security."
  },
  {
    id: 8,
    front: "What's the difference between WPA2-Personal and WPA2-Enterprise?",
    back: "WPA2-Personal (PSK): single shared password for all users, simple setup, home/small office, easier but less secure, no individual accountability, password shared = compromised. WPA2-Enterprise (802.1X): individual credentials per user, RADIUS authentication, certificate or username/password, complex but much more secure, full audit trail, enterprise requirement. Choose: Personal for home, Enterprise for business. Enterprise provides: accountability, granular control, stronger security."
  },
  {
    id: 9,
    front: "What are the components of WPA2/WPA3 Enterprise (802.1X)?",
    back: "Three components: 1) Supplicant - client device with 802.1X software (laptop, phone), 2) Authenticator - wireless AP enforcing access control (blocks until authenticated), 3) Authentication server - RADIUS server verifying credentials (checks username/password/certificate). Process: supplicant ↔ AP ↔ RADIUS. After successful auth, AP allows network access. Requires: RADIUS infrastructure, user database (Active Directory), certificates (for EAP-TLS)."
  },
  {
    id: 10,
    front: "What is EAP (Extensible Authentication Protocol)?",
    back: "EAP is authentication framework for 802.1X, not specific method. Provides: flexible authentication mechanism. EAP types (methods): EAP-TLS (certificate-based), PEAP (protected EAP), EAP-TTLS (tunneled TLS), EAP-FAST (flexible authentication). Each type: different security, complexity, requirements. EAP messages: encapsulated in EAPOL (over LAN to AP), then RADIUS (AP to server). Choose EAP type based on: security needs, infrastructure, user experience. All better than PSK."
  },
  {
    id: 11,
    front: "What is EAP-TLS (EAP-Transport Layer Security)?",
    back: "EAP-TLS uses certificates for authentication (client + server). Most secure EAP method. Requirements: PKI infrastructure, certificates on clients and server, certificate distribution/management. Process: mutual authentication with certificates. Benefits: strongest security, no passwords to steal, mutual authentication. Drawbacks: complex setup, PKI required, certificate management overhead. Best for: high-security environments, government, defense. Gold standard but operationally challenging. No password = no password attacks."
  },
  {
    id: 12,
    front: "What is PEAP (Protected EAP)?",
    back: "PEAP creates encrypted TLS tunnel using server certificate only, then authenticates inside tunnel. Phase 1: establish TLS tunnel (server cert validates server). Phase 2: client authentication inside tunnel (typically MSCHAPv2 - username/password). Benefits: easier than EAP-TLS (no client certs), protects credentials in tunnel, server authentication prevents rogue APs. Drawbacks: password-based (vulnerable if weak), MSCHAPv2 weaknesses. Most common enterprise method. Good balance: security vs ease."
  },
  {
    id: 13,
    front: "What is EAP-TTLS (EAP-Tunneled TLS)?",
    back: "EAP-TTLS similar to PEAP: creates TLS tunnel with server cert, authenticates inside. Difference: more flexible inner authentication (supports PAP, CHAP, MSCHAP, MSCHAPv2, even EAP methods). Benefits: flexibility, server authentication, encrypted tunnel, works with legacy auth systems. Less common than PEAP in Windows environments. More common in: Linux, education, mixed environments. Security similar to PEAP. Choice between PEAP/EAP-TTLS often based on: platform, existing infrastructure."
  },
  {
    id: 14,
    front: "What is EAP-FAST (EAP-Flexible Authentication via Secure Tunneling)?",
    back: "EAP-FAST is Cisco proprietary method avoiding certificates (easier deployment). Uses: PAC (Protected Access Credential) instead of certificates. PAC distribution: automatic provisioning or manual. Three phases: PAC provisioning, tunnel establishment, authentication. Benefits: no certificates needed, easier than EAP-TLS, more secure than PEAP (no MSCHAPv2). Drawback: Cisco proprietary (vendor lock-in). Developed because: certificate deployment is hard. Alternative to PEAP without MSCHAPv2 vulnerabilities."
  },
  {
    id: 15,
    front: "Compare EAP-TLS, PEAP, and EAP-TTLS - which to choose?",
    back: "EAP-TLS: most secure (certificates), no passwords, complex, expensive (PKI), government/high-security. PEAP: balanced approach, server cert only, username/password, MSCHAPv2 inside tunnel, Windows-friendly, most common. EAP-TTLS: like PEAP but more flexible inner auth, Linux-friendly, education/mixed. Choose: EAP-TLS if security paramount and have PKI, PEAP for Windows enterprise, EAP-TTLS for flexibility/mixed environments. All require RADIUS + server certificate minimum."
  },
  {
    id: 16,
    front: "What is MSCHAPv2 and why is it used in PEAP?",
    back: "MSCHAPv2 (Microsoft Challenge Handshake Authentication Protocol v2) is password-based authentication protocol. Used inside PEAP/EAP-TTLS tunnel. Process: challenge-response (password never sent). Weaknesses: vulnerable to offline attacks if tunnel broken, DES-based (weak crypto). Why still used: works with Active Directory passwords, no additional credentials needed, enterprise adoption. Mitigation: PEAP tunnel protects it, use strong passwords, consider EAP-TLS for highest security. Acceptable when: properly tunneled, organizational passwords already strong."
  },
  {
    id: 17,
    front: "What are Protected Management Frames (802.11w)?",
    back: "Protected Management Frames encrypt wireless management frames (deauth, disassociation, action frames). Purpose: prevent deauth attacks, evil twin, rogue AP attacks. Management frames historically: unencrypted, easily spoofed. Enables: WPA2/WPA3 to detect/reject forged management frames. Status: optional in WPA2, mandatory in WPA3. Benefits: prevents denial of service, prevents client disconnection attacks, hardens wireless security. Configure: enable in AP settings. Client support required. Significant security improvement."
  },
  {
    id: 18,
    front: "What is WPS (Wi-Fi Protected Setup) and why disable it?",
    back: "WPS simplifies WiFi setup: push button or 8-digit PIN. Major security flaw: 8-digit PIN easily brute-forced (only 11,000 combinations due to checksum). Attack: brute force PIN in hours, recover WPA/WPA2 password. Even with WPA3, WPS creates vulnerability. Recommendation: ALWAYS disable WPS. No legitimate security reason to enable. Convenience feature that destroys security. Exam question: disable WPS = security best practice. Found in AP settings."
  },
  {
    id: 19,
    front: "Should you hide SSID (disable SSID broadcast)?",
    back: "Hiding SSID (disabling broadcast) provides minimal security - security through obscurity. Determined attackers: easily discover hidden SSIDs (passive monitoring, deauth attack forces beacon). Problems with hidden SSID: clients constantly probe for network (security risk), manual config needed (user friction), doesn't prevent discovery. Minimal benefit. Better security: WPA3, strong passwords, 802.1X. Hidden SSID = false sense of security. Not recommended by security experts. Use: proper encryption, not hiding."
  },
  {
    id: 20,
    front: "What is MAC filtering and is it effective security?",
    back: "MAC filtering allows only specified MAC addresses to connect. Appears secure but: MAC addresses easily spoofed (change in software), attacker observes allowed MACs and clones, administrative burden (add every device). Security value: minimal - determined attacker bypasses easily. Use cases: additional layer (not primary), guest network management, small networks. Better: 802.1X (authenticates user not MAC). Conclusion: weak security, not replacement for WPA2/WPA3. Security through obscurity again."
  },
  {
    id: 21,
    front: "What wireless security measures should be implemented?",
    back: "Essential measures: 1) WPA3 (or WPA2 minimum, never WEP/WPA), 2) WPA3-Enterprise with 802.1X (or WPA2-Enterprise), 3) Strong passwords (15+ chars, complex - if using Personal), 4) Disable WPS, 5) Protected Management Frames (802.11w), 6) Disable unnecessary SSIDs, 7) Regular firmware updates, 8) Guest network isolation, 9) WIDS/WIPS monitoring, 10) Physical AP security (prevent tampering). Layered approach. Strong encryption is foundation."
  },
  {
    id: 22,
    front: "What is a WIDS (Wireless Intrusion Detection System)?",
    back: "WIDS monitors wireless networks for: rogue APs, evil twins, unauthorized clients, attacks (deauth, jamming), policy violations, misconfigured devices. Passive monitoring: analyzes wireless traffic, doesn't prevent. Alerts: security team to investigate. Deployment: dedicated sensors or AP-based. Detects: security threats, compliance violations. Essential for: enterprise wireless security, understanding wireless environment. Complement to WIPS (which prevents). Provides: visibility into wireless threat landscape."
  },
  {
    id: 23,
    front: "What is a WIPS (Wireless Intrusion Prevention System)?",
    back: "WIPS is active system that detects AND prevents wireless attacks. Actions: disconnect rogue devices (deauth), contain rogue APs, block malicious clients, prevent attacks. More than detection: automatic remediation. Capabilities: identify threats (like WIDS), take action (prevent/contain). Implementation: requires proper authorization, can impact legitimate devices if misconfigured. Use carefully: false positives disrupt network. Enterprise feature. More aggressive than WIDS. Combines: detection + automated response."
  },
  {
    id: 24,
    front: "What is a wireless captive portal?",
    back: "Captive portal intercepts wireless access, redirects to login/acceptance page before allowing internet. Common in: guest WiFi, hotels, airports, coffee shops. Authentication methods: username/password, accept terms, voucher code, SMS verification, social login (Facebook/Google), sponsored access. Implementation: wireless controller, gateway appliance, cloud service. Not encryption: traffic may be unencrypted (use HTTPS/VPN). Use case: guest access control, acceptable use policy, monetization. Supplements: WPA2/WPA3 encryption."
  },
  {
    id: 25,
    front: "Quick scenario: Design wireless security for enterprise with 500 employees",
    back: "Deploy: 1) WPA3-Enterprise (or WPA2-Enterprise minimum), 2) 802.1X authentication with RADIUS, 3) Integrate with Active Directory, 4) PEAP-MSCHAPv2 or EAP-TLS (if PKI available), 5) Separate SSIDs: Corporate (802.1X), Guest (captive portal, isolated), 6) Disable WPS on all APs, 7) Enable Protected Management Frames, 8) WIDS/WIPS monitoring, 9) Regular firmware updates, 10) Guest network: separate VLAN, firewall rules block internal access."
  },
  {
    id: 26,
    front: "What is the difference between WPA2-PSK and WPA3-Personal?",
    back: "WPA2-PSK: shared password, 4-way handshake capturable and crackable offline, no forward secrecy, vulnerable to dictionary attacks. WPA3-Personal (SAE): shared password but SAE protocol, protected against offline dictionary attacks, forward secrecy (past sessions secure), stronger even with weak passwords. Both: single password shared by users. WPA3 significantly more secure. Upgrade path: WPA2-PSK → WPA3-Personal for small networks. Enterprise: use 802.1X instead."
  },
  {
    id: 27,
    front: "What is 192-bit security mode in WPA3-Enterprise?",
    back: "WPA3-Enterprise 192-bit mode provides highest wireless security for sensitive networks. Requirements: 192-bit minimum encryption (AES-256-GCMP), SHA-384 or higher for authentication, 384-bit ECDH/ECDSA, Suite B cryptographic algorithms. Use cases: government, defense, classified data, high-value targets. Trade-offs: requires newer hardware, performance impact, limited client support. Not default: opt-in mode for highest security. Most enterprises: standard WPA3-Enterprise sufficient. Reserve 192-bit for: truly sensitive environments."
  },
  {
    id: 28,
    front: "How do you secure IoT devices on wireless networks?",
    back: "IoT wireless security challenges: weak/no updates, hardcoded passwords, limited security features. Solutions: 1) Separate IoT VLAN/SSID (isolated from corporate), 2) WPA2/WPA3 minimum, 3) Firewall rules: IoT can't initiate to corporate, internet only if needed, 4) Monitor IoT traffic (detect compromises), 5) Change default passwords, 6) Regular firmware updates, 7) NAC posture assessment, 8) Consider: dedicated IoT network, disable if not needed. Assume IoT is untrusted."
  },
  {
    id: 29,
    front: "What are common wireless security mistakes?",
    back: "Mistakes: 1) Using WEP/WPA (broken, upgrade immediately), 2) WPA2-PSK with weak password (<15 chars), 3) WPS enabled (easily cracked), 4) Sharing passwords broadly (Personal mode in enterprise), 5) Not updating firmware (unpatched vulnerabilities), 6) No guest network isolation (guests access internal), 7) Default SSID/password (known to attackers), 8) No monitoring (undetected rogue APs), 9) Management frames unprotected (deauth attacks), 10) MAC filtering as primary security (weak)."
  },
  {
    id: 30,
    front: "Speed drill: Match wireless security to year/status - WEP, WPA, WPA2, WPA3, PEAP, EAP-TLS",
    back: "WEP: 1997, BROKEN never use. WPA: 2003, deprecated use WPA2+. WPA2: 2004, current acceptable minimum. WPA3: 2018, latest/best deploy now. PEAP: common Enterprise method, username/password. EAP-TLS: strongest Enterprise, certificates. Know timeline and security levels!"
  }
];