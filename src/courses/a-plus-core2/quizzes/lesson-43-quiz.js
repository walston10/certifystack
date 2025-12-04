export const lesson43Quiz = [
  {
    id: 1,
    question: "A home user sets up a new wireless router and sees security options: WEP, WPA, WPA2, and WPA3. Which should they choose for the BEST security?",
    options: [
      "WEP - it's been around the longest so it's most reliable",
      "WPA - it's compatible with all devices",
      "WPA2 - it's the current standard for most devices",
      "WPA3 - it's the newest and most secure, if all devices support it"
    ],
    correct: 3,
    explanation: "WPA3 is the newest and most secure wireless encryption standard, offering protection against offline dictionary attacks and forward secrecy. If all devices support it, use WPA3. If some devices don't support WPA3, use WPA2 (not WPA or WEP). WEP is completely broken and can be cracked in minutes - never use it. WPA (with TKIP) is deprecated. WPA2 is still acceptable but WPA3 is preferred when available. Always use the strongest security your devices support."
  },
  {
    id: 2,
    question: "A coffee shop offers free Wi-Fi but wants customers to agree to terms of service before accessing the internet. After connecting to the wireless network, customers are redirected to a web page for acceptance. What is this called?",
    options: [
      "WPA2-Enterprise authentication",
      "MAC filtering",
      "Captive portal",
      "SSID cloaking"
    ],
    correct: 2,
    explanation: "A captive portal redirects users to a web page (usually for authentication, payment, or terms acceptance) before allowing internet access. Common in hotels, airports, and coffee shops. The wireless connection succeeds, but a firewall blocks internet access until portal requirements are met. WPA2-Enterprise uses RADIUS authentication. MAC filtering controls access by hardware address. SSID cloaking hides the network name. Captive portals often use open networks with web-based controls."
  },
  {
    id: 3,
    question: "A small business implements WPA2-Enterprise on their wireless network instead of WPA2-Personal. What is the primary difference?",
    options: [
      "WPA2-Enterprise uses a pre-shared key (PSK) that everyone shares",
      "WPA2-Enterprise requires a RADIUS server and provides individual user authentication",
      "WPA2-Enterprise is less secure than WPA2-Personal",
      "WPA2-Enterprise only works on 5GHz networks"
    ],
    correct: 1,
    explanation: "WPA2-Personal (PSK) uses a single shared password for everyone - if one person leaves, you must change the password for everyone. WPA2-Enterprise uses 802.1X authentication with a RADIUS server, providing individual user credentials and certificates. This allows per-user access control, better auditing, and easier credential management. Enterprise is MORE secure. Both work on 2.4GHz and 5GHz. Enterprise is recommended for businesses; Personal is for homes/small offices."
  },
  {
    id: 4,
    question: "An IT administrator configures WPA2-Enterprise wireless security. Users authenticate with their Active Directory credentials. Which EAP method requires both the server AND client to have certificates for maximum security?",
    options: [
      "PEAP (Protected EAP)",
      "EAP-TLS (Extensible Authentication Protocol - Transport Layer Security)",
      "EAP-TTLS (EAP Tunneled TLS)",
      "EAP-FAST"
    ],
    correct: 1,
    explanation: "EAP-TLS requires certificates on both server and client, providing mutual authentication and the highest security. The client certificate proves the user's identity; the server certificate proves the network's legitimacy. This prevents man-in-the-middle attacks. PEAP requires only server-side certificates (clients use passwords). EAP-TTLS is similar to PEAP. EAP-FAST uses PACs instead of certificates. EAP-TLS is most secure but requires PKI infrastructure for certificate management."
  },
  {
    id: 5,
    question: "A home user enables MAC address filtering on their wireless router, only allowing known device MAC addresses to connect. How effective is this as a security measure?",
    options: [
      "Extremely effective - MAC addresses cannot be changed or spoofed",
      "Minimally effective - MAC addresses can be spoofed; use strong encryption instead",
      "Completely ineffective - it provides no security at all",
      "Only effective when combined with WEP encryption"
    ],
    correct: 1,
    explanation: "MAC filtering provides minimal security because MAC addresses can be easily spoofed - attackers can observe authorized MACs with wireless sniffers and clone them. It's security through obscurity, adding management overhead without real protection. Use strong encryption (WPA2/WPA3) as the primary defense. MAC filtering might deter casual users but won't stop determined attackers. WEP is broken regardless of MAC filtering. Don't rely on MAC filtering alone."
  },
  {
    id: 6,
    question: "A network administrator disables SSID broadcast on the company wireless network, thinking this will hide it from unauthorized users. How effective is this security measure?",
    options: [
      "Very effective - the network becomes completely invisible",
      "Minimally effective - wireless analysis tools can still detect hidden networks",
      "Only effective against hackers, not regular users",
      "Completely effective when combined with WEP"
    ],
    correct: 1,
    explanation: "Disabling SSID broadcast (hiding the network name) provides minimal security. Wireless analysis tools (like Wireshark, Kismet, or WiFi Pineapple) can detect hidden networks by monitoring probe requests and other management frames. It's security through obscurity that causes more problems (devices have trouble connecting) than benefits. Use strong encryption (WPA2/WPA3) instead. Hidden SSIDs inconvenience legitimate users while barely slowing attackers. WEP is always insecure regardless of SSID visibility."
  },
  {
    id: 7,
    question: "A user sets up their wireless router using WPA2 and notices two encryption options: AES and TKIP. Which should they choose?",
    options: [
      "TKIP - it's the standard for WPA2",
      "AES - it's more secure and the proper standard for WPA2",
      "Either one - they're equally secure",
      "Use both together for maximum security"
    ],
    correct: 1,
    explanation: "AES (Advanced Encryption Standard) using CCMP is the required encryption standard for WPA2 and provides strong security. TKIP (Temporal Key Integrity Protocol) was designed for WPA (not WPA2) and has known vulnerabilities. WPA2 should always use AES/CCMP. Some routers offer TKIP for backward compatibility with old devices, but this weakens security. Mixed mode (TKIP+AES) downgrades to TKIP security. Always use AES-only for WPA2. Replace devices that don't support AES."
  },
  {
    id: 8,
    question: "A company implements WPA3 on their wireless network. What security improvement does WPA3 provide over WPA2?",
    options: [
      "WPA3 uses WEP encryption which is faster",
      "WPA3 uses SAE (Simultaneous Authentication of Equals) to protect against offline dictionary attacks",
      "WPA3 eliminates the need for passwords completely",
      "WPA3 only works on 2.4GHz networks for better security"
    ],
    correct: 1,
    explanation: "WPA3 replaces WPA2's PSK with SAE (Simultaneous Authentication of Equals), which protects against offline dictionary attacks even if attackers capture the handshake. WPA3 also provides forward secrecy (past traffic can't be decrypted if password is compromised) and better security for open networks (WPA3 Enhanced Open). WPA3 still requires passwords. It works on both 2.4GHz and 5GHz. It doesn't use WEP (which is obsolete). WPA3 is a significant security upgrade."
  },
  {
    id: 9,
    question: "An attacker sets up a fake wireless access point with the same SSID as a legitimate coffee shop network to intercept user traffic. What type of attack is this?",
    options: [
      "Deauthentication attack",
      "Evil twin attack",
      "WPS attack",
      "MAC spoofing"
    ],
    correct: 1,
    explanation: "An evil twin is a rogue access point that mimics a legitimate network's SSID to trick users into connecting. Once connected, the attacker can intercept traffic, steal credentials, and perform man-in-the-middle attacks. Prevention: Use VPNs on public networks, verify network authenticity, use HTTPS. Deauth attacks disconnect users. WPS attacks exploit router setup features. MAC spoofing changes device addresses. Evil twins are dangerous because they appear legitimate - users connect unknowingly."
  },
  {
    id: 10,
    question: "A home user notices WPS (Wi-Fi Protected Setup) is enabled on their router with a PIN method. What security risk does this create?",
    options: [
      "WPS PIN is vulnerable to brute-force attacks and should be disabled",
      "WPS makes the network completely secure",
      "WPS only works with WPA3 networks",
      "WPS has no security implications"
    ],
    correct: 0,
    explanation: "WPS PIN method has a serious vulnerability - the 8-digit PIN can be brute-forced in hours due to poor design (it's validated in two 4-digit halves). This bypasses WPA2 password security entirely. Disable WPS, especially PIN mode, for security. Push-button WPS is safer but still not recommended. WPS was designed for convenience, not security. Even with strong WPA2/WPA3 passwords, enabled WPS PIN creates a backdoor. Always disable WPS on security-conscious networks."
  },
  {
    id: 11,
    question: "A corporate wireless network uses PEAP-MSCHAPv2 for authentication. Users enter their Active Directory username and password to connect. What does the server-side certificate in PEAP protect against?",
    options: [
      "Prevents users from accessing the internet",
      "Protects against evil twin/rogue access point attacks by verifying server authenticity",
      "Encrypts the wireless signal",
      "Replaces the need for WPA2 encryption"
    ],
    correct: 1,
    explanation: "PEAP's server-side certificate allows clients to verify they're connecting to the legitimate authentication server, not a rogue/evil twin access point. Without verifying the certificate, users might send credentials to an attacker's fake AP. Always configure clients to validate server certificates and specify the expected certificate authority. The certificate provides server authentication. WPA2/WPA3 still handles wireless encryption. PEAP creates a secure tunnel for credential exchange."
  },
  {
    id: 12,
    question: "An attacker continuously sends deauthentication frames to disconnect users from a wireless network. What type of attack is this, and what does it typically enable?",
    options: [
      "Evil twin attack - to steal passwords directly",
      "Deauthentication attack - often used to capture handshakes for password cracking or force users to rogue APs",
      "WPS attack - to bypass wireless security",
      "MAC filtering bypass"
    ],
    correct: 1,
    explanation: "Deauthentication (deauth) attacks send spoofed management frames to disconnect clients from legitimate APs. Attackers use this to: (1) capture the WPA2 4-way handshake for offline password cracking when users reconnect, or (2) force users to connect to evil twin APs. 802.11w (Management Frame Protection) in WPA3 helps prevent this. Deauth attacks are common precursors to other attacks. They exploit the unprotected management frames in older WiFi standards."
  },
  {
    id: 13,
    question: "A company wants to provide guest wireless access that's isolated from the corporate network. What should they implement?",
    options: [
      "Use the same SSID and password as the corporate network",
      "Create a separate guest SSID with VLAN isolation from the corporate network",
      "Disable all wireless security for guests",
      "Give guests access to WPA2-Enterprise"
    ],
    correct: 1,
    explanation: "Create a separate guest SSID on a different VLAN, isolated from corporate resources via firewall rules or router ACLs. This provides internet access while protecting internal resources. Best practices: WPA2/WPA3 password or captive portal, bandwidth limits, automatic logout. Never share corporate credentials. Don't run open networks (security risk for guests too). VLAN segmentation is critical for guest network security - guests shouldn't reach corporate servers/workstations."
  },
  {
    id: 14,
    question: "A wireless network administrator wants to ensure that even if an attacker captures encrypted wireless traffic and later obtains the password, they cannot decrypt the previously captured traffic. Which WPA3 feature provides this protection?",
    options: [
      "MAC filtering",
      "SSID broadcast",
      "Forward secrecy",
      "TKIP encryption"
    ],
    correct: 2,
    explanation: "Forward secrecy (also called perfect forward secrecy) ensures that session keys aren't compromised even if the long-term password is later discovered. Each session uses unique encryption keys that aren't derived from the password. WPA3 provides this; WPA2 does not. If someone records WPA2 traffic and later cracks the password, all traffic can be decrypted. With WPA3 forward secrecy, past sessions remain protected. This is a major WPA3 security improvement."
  },
  {
    id: 15,
    question: "A user connects to a public Wi-Fi network at an airport. What security practice should they implement to protect their data?",
    options: [
      "Disable their firewall for better connectivity",
      "Use a VPN to encrypt all traffic between their device and the VPN server",
      "Use WEP encryption",
      "Enable file sharing for convenience"
    ],
    correct: 1,
    explanation: "Always use a VPN on public Wi-Fi networks. VPNs encrypt all traffic from your device to the VPN server, protecting against eavesdropping, evil twins, and man-in-the-middle attacks on untrusted networks. Never disable firewalls. Don't enable file sharing on public networks. Users don't control network encryption (the AP does) - WEP is obsolete anyway. Public networks are inherently untrusted; VPNs create a secure tunnel through hostile networks. Also use HTTPS websites."
  }
];