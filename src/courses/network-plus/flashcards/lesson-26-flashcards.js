// Flashcards for Lesson 26: Wireless Security (SHORTENED)

export const lesson26Flashcards = [
  {
    id: 1,
    front: "What is WEP and why never use it?",
    back: "Original WiFi security (1997). Broken - easily cracked in minutes. Weak encryption (RC4), static keys. Status: deprecated, never use. Completely insecure."
  },
  {
    id: 2,
    front: "What is WPA?",
    back: "Interim security replacing WEP (2003). TKIP encryption. Better than WEP but still vulnerable. Status: deprecated, upgrade to WPA2/WPA3 immediately."
  },
  {
    id: 3,
    front: "What is WPA2?",
    back: "Robust WiFi security (2004). AES-CCMP encryption. Two modes: Personal (PSK) and Enterprise (802.1X). Industry standard until WPA3. Still acceptable if updated with strong passwords."
  },
  {
    id: 4,
    front: "What is WPA3 and its improvements?",
    back: "Latest WiFi security (2018). SAE replaces PSK, forward secrecy, 192-bit encryption (Enterprise), Protected Management Frames mandatory. Protection against offline dictionary attacks."
  },
  {
    id: 5,
    front: "What is SAE in WPA3?",
    back: "Simultaneous Authentication of Equals - replaces PSK in WPA3 Personal. Protection against offline dictionary attacks, forward secrecy. Even weak passwords better protected than WPA2."
  },
  {
    id: 6,
    front: "What is forward secrecy in WPA3?",
    back: "Past communications remain secure even if password compromised later. Each session uses unique ephemeral keys. Attacker can't decrypt old captured traffic."
  },
  {
    id: 7,
    front: "What is WPA3 Enhanced Open?",
    back: "Encryption for open/public networks without passwords. Protection against passive eavesdropping on public WiFi. No authentication - anyone can connect. Better than open WPA2."
  },
  {
    id: 8,
    front: "WPA2-Personal vs WPA2-Enterprise?",
    back: "Personal (PSK): single shared password, home/small office, no accountability. Enterprise (802.1X): individual credentials, RADIUS authentication, audit trail. Choose Personal for home, Enterprise for business."
  },
  {
    id: 9,
    front: "What are the 802.1X components?",
    back: "Supplicant (client device), Authenticator (AP), Authentication server (RADIUS). Process: supplicant ↔ AP ↔ RADIUS. After successful auth, AP allows access."
  },
  {
    id: 10,
    front: "What is EAP?",
    back: "Extensible Authentication Protocol - framework for 802.1X, not specific method. Types: EAP-TLS (certificate), PEAP (protected EAP), EAP-TTLS (tunneled), EAP-FAST (Cisco)."
  },
  {
    id: 11,
    front: "What is EAP-TLS?",
    back: "Most secure EAP method using certificates (client + server). Requires PKI infrastructure. No passwords to steal. Complex setup. Best for high-security environments."
  },
  {
    id: 12,
    front: "What is PEAP?",
    back: "Creates TLS tunnel with server cert, then authenticates inside (typically MSCHAPv2 username/password). Easier than EAP-TLS (no client certs). Most common enterprise method."
  },
  {
    id: 13,
    front: "What is EAP-TTLS?",
    back: "Similar to PEAP but more flexible inner authentication. Creates TLS tunnel, authenticates inside. More common in Linux/education. Security similar to PEAP."
  },
  {
    id: 14,
    front: "What is EAP-FAST?",
    back: "Cisco proprietary method avoiding certificates. Uses PAC (Protected Access Credential). Easier deployment than EAP-TLS, more secure than PEAP. Vendor lock-in."
  },
  {
    id: 15,
    front: "Compare EAP-TLS, PEAP, and EAP-TTLS - which to choose?",
    back: "EAP-TLS: most secure (certificates), complex. PEAP: balanced, Windows-friendly, most common. EAP-TTLS: flexible, Linux-friendly. Choose based on security needs and infrastructure."
  },
  {
    id: 16,
    front: "What is MSCHAPv2?",
    back: "Microsoft password-based authentication protocol used inside PEAP/EAP-TTLS tunnel. Challenge-response (password never sent). Works with Active Directory. Has weaknesses but tunnel protects it."
  },
  {
    id: 17,
    front: "What are Protected Management Frames (802.11w)?",
    back: "Encrypts wireless management frames to prevent deauth attacks and evil twins. Optional in WPA2, mandatory in WPA3. Prevents denial of service and client disconnection attacks."
  },
  {
    id: 18,
    front: "What is WPS and why disable it?",
    back: "Wi-Fi Protected Setup - 8-digit PIN easily brute-forced in hours. Major security flaw. ALWAYS disable WPS. No legitimate security reason to enable."
  },
  {
    id: 19,
    front: "Should you hide SSID?",
    back: "Hiding SSID provides minimal security - easily discovered by attackers. Creates problems with client probing. Better: proper encryption (WPA3), not hiding. Security through obscurity."
  },
  {
    id: 20,
    front: "Is MAC filtering effective security?",
    back: "No - MAC addresses easily spoofed. Administrative burden. Weak security, not replacement for WPA2/WPA3. Additional layer only, not primary security."
  },
  {
    id: 21,
    front: "Essential wireless security measures?",
    back: "WPA3 (or WPA2 minimum), 802.1X for enterprise, strong passwords (15+ chars), disable WPS, Protected Management Frames, regular firmware updates, guest network isolation."
  },
  {
    id: 22,
    front: "What is WIDS?",
    back: "Wireless Intrusion Detection System - monitors for rogue APs, attacks, policy violations. Passive monitoring, alerts security team. Provides visibility into wireless threats."
  },
  {
    id: 23,
    front: "What is WIPS?",
    back: "Wireless Intrusion Prevention System - detects AND prevents attacks. Active system that can disconnect rogues, block malicious clients. More aggressive than WIDS."
  },
  {
    id: 24,
    front: "What is a wireless captive portal?",
    back: "Intercepts wireless access, redirects to login page before allowing internet. Common for guest WiFi. Not encryption - just access control. Use with WPA2/WPA3."
  },
  {
    id: 25,
    front: "Design wireless security for 500-employee enterprise?",
    back: "WPA3-Enterprise with 802.1X/RADIUS, Active Directory integration, PEAP or EAP-TLS, separate corporate/guest SSIDs, disable WPS, Protected Management Frames, WIDS/WIPS, guest isolation."
  },
  {
    id: 26,
    front: "WPA2-PSK vs WPA3-Personal?",
    back: "WPA2-PSK: vulnerable to offline dictionary attacks, no forward secrecy. WPA3-Personal: SAE protocol, protected against offline attacks, forward secrecy. WPA3 significantly more secure."
  },
  {
    id: 27,
    front: "What is 192-bit security mode in WPA3-Enterprise?",
    back: "Highest wireless security for sensitive networks. AES-256-GCMP, SHA-384, Suite B algorithms. Use for government/defense/classified. Requires newer hardware. Opt-in mode."
  },
  {
    id: 28,
    front: "How to secure IoT devices on wireless?",
    back: "Separate IoT VLAN/SSID, WPA2/WPA3 minimum, firewall rules (isolate from corporate), monitor traffic, change default passwords, regular updates. Assume IoT is untrusted."
  },
  {
    id: 29,
    front: "Common wireless security mistakes?",
    back: "Using WEP/WPA, weak passwords, WPS enabled, sharing passwords broadly, not updating firmware, no guest isolation, default credentials, no monitoring, MAC filtering as primary."
  },
  {
    id: 30,
    front: "Match: WEP / WPA / WPA2 / WPA3 / PEAP / EAP-TLS",
    back: "WEP: 1997 BROKEN. WPA: 2003 deprecated. WPA2: 2004 acceptable minimum. WPA3: 2018 latest/best. PEAP: common Enterprise (password). EAP-TLS: strongest (certificates)."
  }
];