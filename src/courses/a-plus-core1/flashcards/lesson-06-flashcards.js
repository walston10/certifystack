export const lesson6Flashcards = [
  {
    id: 1,
    front: "What are the key 802.11 Wi-Fi standards for mobile devices?",
    back: "802.11n (Wi-Fi 4): 2.4/5GHz, up to 600 Mbps - 802.11ac (Wi-Fi 5): 5GHz, multi-gigabit - 802.11ax (Wi-Fi 6/6E): 2.4/5/6GHz, improved efficiency and speed."
  },
  {
    id: 2,
    front: "What is the difference between 2.4 GHz and 5 GHz Wi-Fi?",
    back: "2.4 GHz: Longer range, better wall penetration, more interference, slower speeds. 5 GHz: Shorter range, less interference, faster speeds, more channels. Modern devices support both (dual-band)."
  },
  {
    id: 3,
    front: "What is Wi-Fi 6E and how does it differ from Wi-Fi 6?",
    back: "Wi-Fi 6E adds support for the 6 GHz frequency band in addition to 2.4 and 5 GHz. Benefits: More channels, less congestion, faster speeds, lower latency. Requires Wi-Fi 6E capable router and device."
  },
  {
    id: 4,
    front: "What is an SSID?",
    back: "Service Set Identifier - the network name of a Wi-Fi network. Broadcast by access points so devices can find and connect. Can be hidden for security (though not very effective)."
  },
  {
    id: 5,
    front: "What are the Wi-Fi security protocols mobile devices should use?",
    back: "WPA3: Latest, most secure, SAE encryption. WPA2: Still secure, AES/CCMP encryption, widely compatible. Avoid: WPA (deprecated), WEP (easily cracked). Always use WPA2 minimum, WPA3 preferred."
  },
  {
    id: 6,
    front: "What is airplane mode and what does it disable?",
    back: "Disables all wireless radios: cellular, Wi-Fi, Bluetooth, GPS. Used during flights to comply with regulations. Can manually re-enable Wi-Fi and Bluetooth while keeping cellular off."
  },
  {
    id: 7,
    front: "What is a mobile hotspot (personal hotspot)?",
    back: "Feature that shares cellular data connection by creating a Wi-Fi network. Other devices connect via Wi-Fi, Bluetooth, or USB. Uses cellular data allowance - drains battery - may incur carrier charges."
  },
  {
    id: 8,
    front: "What is 4G LTE?",
    back: "Fourth generation cellular network using Long Term Evolution technology. Download speeds typically 5-50 Mbps. LTE-Advanced (LTE-A) offers higher speeds. Standard for most current smartphones."
  },
  {
    id: 9,
    front: "What are the key improvements of 5G over 4G?",
    back: "Much faster speeds (up to 10+ Gbps peak) - Ultra-low latency (<10ms vs ~50ms) - More device capacity per tower - Better reliability. Requires 5G device and carrier support."
  },
  {
    id: 10,
    front: "What are the three types of 5G networks?",
    back: "Low-band: Wide coverage, modest speed increase over 4G. Mid-band: Balance of coverage and speed (most common). High-band (mmWave): Ultra-fast but very short range, limited availability."
  },
  {
    id: 11,
    front: "What is an APN (Access Point Name)?",
    back: "Settings that define network path for cellular data connection. Includes gateway address, authentication details. Usually configured automatically by carrier, but may need manual setup for MVNOs or international SIM cards."
  },
  {
    id: 12,
    front: "What is PRL and when should it be updated?",
    back: "Preferred Roaming List - list of cell towers and frequencies device should use. Updated to improve signal and roaming. Update when: poor signal, traveling to new area, switching carriers. *228 on older CDMA phones."
  },
  {
    id: 13,
    front: "What is an IMEI number and what is it used for?",
    back: "International Mobile Equipment Identity - unique 15-digit identifier for mobile device hardware. Used to: identify stolen devices, unlock devices, activate service, block stolen phones on networks."
  },
  {
    id: 14,
    front: "What is an IMSI number?",
    back: "International Mobile Subscriber Identity - unique identifier stored on SIM card that identifies subscriber to carrier network. Associated with phone number and account. Different from IMEI (device hardware ID)."
  },
  {
    id: 15,
    front: "What is the difference between GSM and CDMA?",
    back: "GSM: Global System for Mobile, uses SIM cards, more worldwide compatibility. CDMA: Code Division Multiple Access, phones tied to carrier, no SIM (or non-swappable). Most networks now use LTE (GSM-based)."
  },
  {
    id: 16,
    front: "What is POP3 and what port does it use?",
    back: "Post Office Protocol version 3. Downloads emails from server to device and typically deletes from server. Port 110 (unencrypted), Port 995 (POP3S with SSL/TLS). One-way sync, older protocol."
  },
  {
    id: 17,
    front: "What is IMAP and what ports does it use?",
    back: "Internet Message Access Protocol. Keeps emails on server, syncs across devices, allows folder management. Port 143 (unencrypted), Port 993 (IMAPS with SSL/TLS). Modern standard for email."
  },
  {
    id: 18,
    front: "What is the difference between POP3 and IMAP?",
    back: "POP3: Downloads and deletes from server, single device use, no sync. IMAP: Keeps on server, multi-device sync, folder management, read/unread status synced. IMAP preferred for modern use."
  },
  {
    id: 19,
    front: "What is SMTP and what ports does it use?",
    back: "Simple Mail Transfer Protocol - used for sending outgoing email. Port 25 (standard, often blocked), Port 587 (submission with STARTTLS), Port 465 (SMTPS with SSL/TLS - deprecated). Required with POP3/IMAP."
  },
  {
    id: 20,
    front: "What is Exchange ActiveSync?",
    back: "Microsoft protocol for syncing email, calendar, contacts, tasks. Used with Exchange Server and Microsoft 365. Real-time push notifications. Port 443 (HTTPS). Native support on iOS and Android."
  },
  {
    id: 21,
    front: "What are the essential email configuration settings?",
    back: "Incoming server: POP3/IMAP server address and port - Outgoing server: SMTP server and port - Username and password - SSL/TLS encryption enabled - Authentication type (password, OAuth)."
  },
  {
    id: 22,
    front: "What is SSL/TLS in email configuration?",
    back: "Secure Sockets Layer/Transport Layer Security - encrypts email communication between device and server. Should always be enabled. Prevents eavesdropping on credentials and email content."
  },
  {
    id: 23,
    front: "What is two-factor authentication (2FA) for email?",
    back: "Requires second form of verification beyond password. Methods: SMS code, authenticator app, email verification. Some providers require app-specific passwords when 2FA is enabled. Improves account security."
  },
  {
    id: 24,
    front: "What is a VPN on mobile devices?",
    back: "Virtual Private Network - encrypts internet traffic and routes through VPN server. Uses: secure public Wi-Fi, access company resources remotely, bypass geo-restrictions. Can be always-on or on-demand."
  },
  {
    id: 25,
    front: "What VPN protocols are commonly used on mobile devices?",
    back: "IKEv2/IPSec: Fast, secure, good for mobile (handles network changes well) - OpenVPN: Open source, highly secure - WireGuard: Modern, fast, lightweight. L2TP/IPSec also supported but slower."
  },
  {
    id: 26,
    front: "What is always-on VPN on mobile devices?",
    back: "VPN automatically connects on device startup and stays connected. Prevents unencrypted traffic. Common in corporate/MDM managed devices. Ensures all traffic is secured through VPN tunnel."
  },
  {
    id: 27,
    front: "What information is needed to configure a VPN on mobile?",
    back: "VPN server address - VPN type/protocol (IKEv2, OpenVPN, etc.) - Username and password - Optional: Pre-shared key, certificate. May require VPN client app for some providers."
  },
  {
    id: 28,
    front: "What is MDM (Mobile Device Management)?",
    back: "Enterprise software for managing mobile devices remotely. Features: deploy apps, enforce policies, configure Wi-Fi/VPN/email, remote wipe, location tracking. Common solutions: Microsoft Intune, VMware Workspace ONE."
  },
  {
    id: 29,
    front: "What is a captive portal on Wi-Fi networks?",
    back: "Web page requiring authentication before internet access. Common at hotels, airports, coffee shops. Redirects all traffic to login page. May require: agreement to terms, payment, credentials, social login."
  },
  {
    id: 30,
    front: "What should you verify if mobile device can't send but can receive email?",
    back: "SMTP server settings incorrect - SMTP port blocked (try 587 instead of 25) - Authentication required for SMTP - Outgoing server settings different from incoming - ISP blocking SMTP traffic."
  }
];