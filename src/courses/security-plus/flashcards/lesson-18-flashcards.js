// Lesson 18: Wireless Security Architecture
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson18Flashcards = [
  {
    id: 1,
    front: "What is WEP (Wired Equivalent Privacy)?",
    back: "Original wireless encryption standard. Uses RC4 encryption with static keys. Completely broken - can be cracked in minutes. Never use WEP."
  },
  {
    id: 2,
    front: "Why is WEP insecure?",
    back: "Weak IV (Initialization Vector) - only 24 bits, repeats frequently. Static keys. Flawed key scheduling. Tools like Aircrack-ng crack it in minutes."
  },
  {
    id: 3,
    front: "What is WPA (Wi-Fi Protected Access)?",
    back: "Interim replacement for WEP. Uses TKIP encryption. Better than WEP but still has vulnerabilities. Deprecated - don't use for new deployments."
  },
  {
    id: 4,
    front: "What is TKIP (Temporal Key Integrity Protocol)?",
    back: "Encryption protocol used in WPA. Dynamic keys (per-packet). Designed to work on WEP hardware. Has known vulnerabilities - deprecated."
  },
  {
    id: 5,
    front: "What is WPA2?",
    back: "Current standard wireless security (802.11i). Uses AES encryption with CCMP. Much stronger than WPA/WEP. Required for Wi-Fi certification since 2006."
  },
  {
    id: 6,
    front: "What is CCMP?",
    back: "Counter Mode with CBC-MAC Protocol. Encryption protocol used in WPA2. Based on AES. Provides confidentiality, authentication, and integrity."
  },
  {
    id: 7,
    front: "What is WPA3?",
    back: "Latest wireless security standard (2018). Uses SAE for key exchange. Provides forward secrecy. Protects against offline dictionary attacks. Enhanced encryption."
  },
  {
    id: 8,
    front: "What is SAE (Simultaneous Authentication of Equals)?",
    back: "WPA3 key exchange protocol replacing PSK handshake. Based on Dragonfly key exchange. Resistant to offline dictionary attacks. Provides forward secrecy."
  },
  {
    id: 9,
    front: "What is Forward Secrecy in WPA3?",
    back: "Even if password is later compromised, previously captured traffic cannot be decrypted. Each session uses unique keys. Major security improvement over WPA2."
  },
  {
    id: 10,
    front: "What is WPA2-Personal (PSK)?",
    back: "WPA2 using Pre-Shared Key. Single password for all users. Suitable for home/small office. All users share same key - less secure for enterprises."
  },
  {
    id: 11,
    front: "What is WPA2-Enterprise?",
    back: "WPA2 using 802.1X/RADIUS authentication. Individual credentials per user. Better accountability and security. Required for corporate environments."
  },
  {
    id: 12,
    front: "WPA2-Personal vs WPA2-Enterprise?",
    back: "Personal: shared password, simpler, home use. Enterprise: individual credentials, RADIUS authentication, user accountability, better for organizations."
  },
  {
    id: 13,
    front: "What is EAP (Extensible Authentication Protocol)?",
    back: "Framework for wireless authentication. Multiple EAP types exist. Used with 802.1X and RADIUS. Defines how authentication messages are exchanged."
  },
  {
    id: 14,
    front: "What is EAP-TLS?",
    back: "EAP using TLS with certificates on both client and server. Most secure EAP method. Requires PKI infrastructure. Mutual authentication."
  },
  {
    id: 15,
    front: "What is EAP-TTLS?",
    back: "EAP-Tunneled TLS. Server certificate only, client uses password inside encrypted tunnel. Easier deployment than EAP-TLS - no client certificates needed."
  },
  {
    id: 16,
    front: "What is PEAP (Protected EAP)?",
    back: "Similar to EAP-TTLS. Creates TLS tunnel with server certificate. Client authenticates inside tunnel (typically MSCHAPv2). Common in Windows environments."
  },
  {
    id: 17,
    front: "What is EAP-FAST?",
    back: "EAP-Flexible Authentication via Secure Tunneling. Cisco proprietary. Uses PAC (Protected Access Credential) instead of certificates. Faster reauthentication."
  },
  {
    id: 18,
    front: "Which EAP method is most secure?",
    back: "EAP-TLS. Uses certificates on both sides (mutual authentication). No passwords to compromise. Requires PKI but provides strongest security."
  },
  {
    id: 19,
    front: "What is WPS (Wi-Fi Protected Setup)?",
    back: "Feature to simplify wireless setup with PIN or button. Major security flaw - PIN can be brute-forced. Always disable WPS."
  },
  {
    id: 20,
    front: "Why should WPS be disabled?",
    back: "8-digit PIN can be brute-forced in hours. Design flaw allows checking PIN in two halves. Tools like Reaver exploit this. No fix except disabling."
  },
  {
    id: 21,
    front: "What is SSID hiding?",
    back: "Not broadcasting network name. Provides minimal security - SSID still in probe requests. Security through obscurity. Not a real security control."
  },
  {
    id: 22,
    front: "What is MAC Filtering?",
    back: "Only allowing specific MAC addresses to connect. Easily bypassed - attackers can spoof observed MACs. Administrative burden. Not a strong security control."
  },
  {
    id: 23,
    front: "What are wireless security best practices?",
    back: "Use WPA3/WPA2-Enterprise, disable WPS, strong passwords (12+ chars), guest network isolation, firmware updates, change default credentials, proper AP placement."
  },
  {
    id: 24,
    front: "What is a Captive Portal?",
    back: "Web page requiring authentication or acceptance of terms before network access. Common for guest networks, hotels, airports. Redirects HTTP traffic to portal page."
  },
  {
    id: 25,
    front: "How does an Evil Twin attack work?",
    back: "Attacker creates AP with same SSID as legitimate network. Often with stronger signal. Victims connect to fake AP. Attacker intercepts all traffic."
  },
  {
    id: 26,
    front: "How do you mitigate Evil Twin attacks?",
    back: "Use WPA2/WPA3-Enterprise (certificate validation), security awareness training, WIPS to detect rogue APs, verify network before connecting."
  },
  {
    id: 27,
    front: "What is a Deauthentication attack?",
    back: "Sending forged deauth frames to disconnect clients. Forces reconnection - can capture handshake or redirect to evil twin. 802.11w provides protection."
  },
  {
    id: 28,
    front: "What is 802.11w?",
    back: "Protected Management Frames (PMF). Encrypts management frames including deauth. Prevents deauthentication attacks. Required in WPA3, optional in WPA2."
  },
  {
    id: 29,
    front: "What is WIPS (Wireless Intrusion Prevention System)?",
    back: "Monitors wireless spectrum for threats. Detects rogue APs, evil twins, deauth attacks. Can automatically contain threats. Essential for enterprise wireless."
  },
  {
    id: 30,
    front: "What is Geofencing in wireless security?",
    back: "Restricting wireless access based on physical location. Uses GPS or beacon proximity. Can limit where devices can connect. Adds location-based access control."
  }
];