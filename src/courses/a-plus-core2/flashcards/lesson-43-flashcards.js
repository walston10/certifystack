export const lesson43Flashcards = [
  {
    id: 1,
    front: "What is WEP and why should it never be used?",
    back: "Wired Equivalent Privacy - first Wi-Fi encryption standard. 64-bit or 128-bit keys. Broken/crackable in minutes using free tools. Major security flaws, deprecated since 2004. Never use - completely insecure."
  },
  {
    id: 2,
    front: "What is WPA and how does it improve on WEP?",
    back: "Wi-Fi Protected Access - replacement for WEP. Uses TKIP (Temporal Key Integrity Protocol) encryption, rotating keys. Better than WEP but still vulnerable. Deprecated - replaced by WPA2. Don't use if WPA2/3 available."
  },
  {
    id: 3,
    front: "What is WPA2 and what encryption does it use?",
    back: "Wi-Fi Protected Access 2 (802.11i standard) - current wireless security. Uses AES encryption with CCMP protocol. Two modes: Personal (PSK), Enterprise (802.1X/RADIUS). Industry standard since 2004. Strong security when configured properly."
  },
  {
    id: 4,
    front: "What is WPA3 and what improvements does it offer?",
    back: "Latest Wi-Fi security (2018). SAE (Simultaneous Authentication of Equals) replaces PSK, forward secrecy (past traffic safe if password compromised), protection against offline dictionary attacks, 192-bit encryption in Enterprise mode, Enhanced Open for public networks."
  },
  {
    id: 5,
    front: "What are the two modes of WPA2/WPA3?",
    back: "Personal (PSK - Pre-Shared Key): single password for all users, home/small office. Enterprise (802.1X): individual user credentials, RADIUS authentication, certificate-based or username/password, business environments."
  },
  {
    id: 6,
    front: "What is WPA2-Personal (PSK)?",
    back: "Pre-Shared Key mode - single Wi-Fi password shared by all users. AES encryption, easier setup than Enterprise. Suitable for home, small office. Password should be 12+ characters, complex. If password compromised, everyone affected."
  },
  {
    id: 7,
    front: "What is WPA2-Enterprise?",
    back: "Individual user authentication via 802.1X and RADIUS server. Each user has unique credentials, certificate-based or username/password. More secure than PSK, centralized management, can revoke individual access. Requires RADIUS server setup."
  },
  {
    id: 8,
    front: "What is SAE in WPA3?",
    back: "Simultaneous Authentication of Equals - replacement for PSK handshake. More secure key exchange, resistant to offline dictionary attacks, forward secrecy. Protects against KRACK attacks. Doesn't send password hash over network."
  },
  {
    id: 9,
    front: "What is forward secrecy in WPA3?",
    back: "Even if Wi-Fi password compromised, previously captured encrypted traffic remains secure. Each session uses unique encryption keys. Attacker can't decrypt old traffic even with current password. Major security improvement over WPA2."
  },
  {
    id: 10,
    front: "What is WPA3 Enhanced Open?",
    back: "Encryption for public Wi-Fi networks without password. Uses OWE (Opportunistic Wireless Encryption). Protects against eavesdropping on open networks (airports, coffee shops). Transparent to users - no password needed but traffic encrypted."
  },
  {
    id: 11,
    front: "What EAP methods are used with WPA2/3 Enterprise?",
    back: "EAP-TLS (certificate-based, most secure), EAP-TTLS (server certificate, tunneled client auth), PEAP (Protected EAP, MSCHAPv2 common), EAP-FAST (Cisco, uses PAC). All require RADIUS server."
  },
  {
    id: 12,
    front: "What is EAP-TLS?",
    back: "EAP - Transport Layer Security. Certificate-based authentication - both client and server have certificates. Most secure but requires PKI (Public Key Infrastructure). Mutual authentication. No password transmitted. Best for high-security environments."
  },
  {
    id: 13,
    front: "What is EAP-TTLS?",
    back: "EAP - Tunneled TLS. Server certificate only, client uses username/password inside encrypted tunnel. Easier than EAP-TLS (no client certificates needed). Tunnel protects credentials. Good balance of security and ease of deployment."
  },
  {
    id: 14,
    front: "What is PEAP?",
    back: "Protected EAP - similar to EAP-TTLS. Server certificate creates encrypted tunnel. Client authenticates inside tunnel (commonly MSCHAPv2). Developed by Microsoft, Cisco, RSA. Widely supported. Username/password protected by tunnel."
  },
  {
    id: 15,
    front: "What is EAP-FAST?",
    back: "EAP - Flexible Authentication via Secure Tunneling. Cisco proprietary. Uses PAC (Protected Access Credential) instead of certificates. Easier deployment than certificate-based. Three phases: PAC provisioning, tunnel establishment, authentication."
  },
  {
    id: 16,
    front: "What is MAC address filtering?",
    back: "Allow/deny devices by MAC address. Configure allowed MAC addresses on router/AP, only those devices can connect. Weak security - MAC addresses easily spoofed. Use as additional layer, not primary security. Time-consuming to manage."
  },
  {
    id: 17,
    front: "What is SSID broadcast and should you disable it?",
    back: "Broadcasting network name so devices can see it. Disabling hides network from casual view but not real attackers. Security through obscurity - minimal protection. Causes connectivity issues. Keep enabled, rely on WPA2/3 encryption instead."
  },
  {
    id: 18,
    front: "What is a captive portal?",
    back: "Web page requiring interaction before network access - login, accept terms, enter voucher code. Common in hotels, airports, coffee shops. Redirects all traffic to login page until authenticated. Can integrate with payment systems."
  },
  {
    id: 19,
    front: "What wireless security best practices should you know?",
    back: "Use WPA2/WPA3 (not WEP/WPA), strong password 12+ characters, disable WPS, change default SSID, update firmware regularly, use Enterprise mode if possible, disable remote management, guest network isolation, disable unnecessary features."
  },
  {
    id: 20,
    front: "What is WPS and why should it be disabled?",
    back: "Wi-Fi Protected Setup - simplified connection using PIN or push-button. PIN mode vulnerable to brute force attacks (crackable in hours). Push-button safer but still potential risk. Disable WPS for security - manual password entry more secure."
  },
  {
    id: 21,
    front: "Why should you change the default SSID?",
    back: "Default SSID reveals router manufacturer/model, helps attackers find vulnerabilities. Generic SSIDs like 'NETGEAR' or 'Linksys' indicate defaults may be unchanged. Use unique SSID (not personally identifiable). Change but don't hide broadcast."
  },
  {
    id: 22,
    front: "What makes a strong Wi-Fi password?",
    back: "Minimum 12+ characters (longer better), mix upper/lowercase, numbers, special characters, avoid dictionary words, not personal info, unique (not reused). Passphrase method: random words = length + memorability. WPA3 resists weak passwords better."
  },
  {
    id: 23,
    front: "What is a guest network and why use it?",
    back: "Separate Wi-Fi network for visitors. Isolated from main network - can't access internal resources, printers, file shares. Protects main network from guest devices. Easy to provide internet access without compromising security."
  },
  {
    id: 24,
    front: "How do you isolate guest network traffic?",
    back: "Configure guest network with client isolation/AP isolation enabled. Guests can access internet but not each other or main network. Separate VLAN if supported. Different SSID, security settings. Limit bandwidth if needed."
  },
  {
    id: 25,
    front: "What is geofencing for wireless security?",
    back: "Restrict access based on physical location. GPS or network-based location verification. Prevent access outside defined area. Mobile device management (MDM) feature. Example: corporate Wi-Fi only accessible on company property."
  },
  {
    id: 26,
    front: "What wireless authentication methods should you know?",
    back: "Open (no authentication - insecure), PSK/Pre-Shared Key (password), 802.1X/Enterprise (RADIUS), captive portal (web-based login). Open with WPA3 Enhanced Open for public networks. Enterprise most secure for organizations."
  },
  {
    id: 27,
    front: "What is the difference between TKIP and AES encryption?",
    back: "TKIP (Temporal Key Integrity Protocol): WPA, rotating keys, legacy, vulnerable, deprecated. AES (Advanced Encryption Standard): WPA2/3, strong encryption (CCMP protocol), industry standard, secure. Always use AES if available."
  },
  {
    id: 28,
    front: "What is CCMP in WPA2?",
    back: "Counter Mode with Cipher Block Chaining Message Authentication Code Protocol - encryption protocol using AES. Provides confidentiality, integrity, authentication. Replaces TKIP from WPA. Part of 802.11i standard. Secure when properly implemented."
  },
  {
    id: 29,
    front: "Why should firmware be regularly updated on wireless devices?",
    back: "Security patches for vulnerabilities (WPA2 KRACK attack, etc.), bug fixes, performance improvements, new features. Attackers exploit known vulnerabilities. Check monthly, enable auto-update if available. Download only from manufacturer."
  },
  {
    id: 30,
    front: "What is the recommended order of wireless security standards from strongest to weakest?",
    back: "WPA3 (strongest - SAE, forward secrecy), WPA2 (strong - AES/CCMP), WPA (weak - TKIP, deprecated), WEP (broken - never use). Always use highest supported by all devices. Upgrade devices if stuck on WPA/WEP."
  }
];