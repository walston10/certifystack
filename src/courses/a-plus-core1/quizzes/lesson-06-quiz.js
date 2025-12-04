export const lesson6Quiz = [
  {
    id: 1,
    question: "A user's smartphone cannot connect to their home Wi-Fi network. Other devices connect successfully to the same network. The phone shows the network name but says 'Authentication error' when trying to connect. What is the most likely cause?",
    options: [
      "The router is broken",
      "The Wi-Fi password entered on the phone is incorrect",
      "The phone's Wi-Fi hardware has failed",
      "The cellular service is disconnected"
    ],
    correct: 1,
    explanation: "An 'Authentication error' or 'Incorrect password' message indicates that the security credentials don't match. Since other devices connect successfully, the router and network are working fine. The user likely entered the wrong Wi-Fi password or the password was recently changed. Wi-Fi passwords are case-sensitive. Re-enter the password carefully, or use the 'Forget network' option and reconnect from scratch. Hardware failure would prevent seeing the network entirely."
  },
  {
    id: 2,
    question: "A corporate employee needs to configure their work email on their smartphone. The IT department provides these settings: mail.company.com, port 993, SSL required. What email protocol is being used?",
    options: [
      "POP3",
      "SMTP",
      "IMAP with SSL/TLS",
      "HTTP"
    ],
    correct: 2,
    explanation: "Port 993 is the standard port for IMAP over SSL/TLS (IMAPS - secure IMAP). IMAP (Internet Message Access Protocol) allows email to sync across multiple devices and keeps messages on the server. POP3 uses port 110 (or 995 for SSL). SMTP uses port 25, 587, or 465. The SSL requirement and port 993 definitively indicate IMAP with encryption. This is the preferred protocol for modern email access, especially for users who check email on multiple devices."
  },
  {
    id: 3,
    question: "A user enabled Airplane Mode on their tablet before a flight. After landing, they turned off Airplane Mode but still can't access the internet or make calls. What should they check?",
    options: [
      "Whether Wi-Fi and cellular data were re-enabled after turning off Airplane Mode",
      "If the tablet needs to be replaced",
      "Whether the screen brightness is too low",
      "If the battery needs charging"
    ],
    correct: 0,
    explanation: "Airplane Mode disables all wireless radios (Wi-Fi, cellular, Bluetooth). On some devices, when you disable Airplane Mode, you must manually re-enable Wi-Fi and cellular data - they don't always automatically turn back on. Check the quick settings or settings menu to verify Wi-Fi and cellular are enabled. Some devices allow enabling Wi-Fi while still in Airplane Mode. This is a common issue and simple to fix once you understand the behavior."
  },
  {
    id: 4,
    question: "A smartphone user traveling internationally cannot send or receive cellular data even though they have an international roaming plan. Voice calls work fine. What setting should they verify?",
    options: [
      "Screen rotation lock",
      "Data roaming must be enabled in cellular/mobile settings",
      "Bluetooth status",
      "Wi-Fi calling"
    ],
    correct: 1,
    explanation: "Data roaming is often disabled by default to prevent unexpected charges. Even with an international plan, the device setting must allow data roaming. This is separate from voice roaming. Go to Settings → Cellular/Mobile → Data Roaming and enable it. Voice calls working proves the cellular connection is established. Be aware that data roaming can be expensive without a specific plan. Always verify your carrier's international data rates before enabling roaming."
  },
  {
    id: 5,
    question: "A user needs to configure a personal hotspot on their smartphone to share the cellular connection with their laptop. What information will the laptop need to connect?",
    options: [
      "Only the phone's IMEI number",
      "The hotspot network name (SSID) and password",
      "The phone's MAC address",
      "The cellular provider's website login"
    ],
    correct: 1,
    explanation: "Personal hotspot creates a Wi-Fi network using the phone's cellular data. The laptop connects like any Wi-Fi network - you need the network name (SSID) and password. These are typically shown in the hotspot settings on the phone. Some phones allow USB tethering or Bluetooth tethering as alternatives. Note that hotspot usage consumes cellular data and may have different rate limits than regular phone data usage depending on your carrier plan."
  },
  {
    id: 6,
    question: "A smartphone user reports extremely slow data speeds despite having full bars of 4G LTE signal. What is a common cause of this issue?",
    options: [
      "The phone's storage is full",
      "Network congestion - many users sharing the same cell tower bandwidth",
      "The screen protector is blocking the signal",
      "Bluetooth is enabled"
    ],
    correct: 1,
    explanation: "Signal strength (bars) indicates the quality of connection to the tower, but doesn't reflect available bandwidth. During peak usage times or in crowded areas (stadiums, concerts, downtown), many users share the same cell tower's capacity, resulting in slow data speeds despite strong signal. Carriers may also throttle data speeds after reaching certain usage limits. Full storage affects app performance but not cellular data speed. Screen protectors don't affect cellular signals."
  },
  {
    id: 7,
    question: "A user wants to set up email on their smartphone to access their Gmail account. What is the IMAP server address and port they should use for incoming mail?",
    options: [
      "imap.gmail.com, port 993",
      "pop.gmail.com, port 110",
      "smtp.gmail.com, port 587",
      "mail.gmail.com, port 80"
    ],
    correct: 0,
    explanation: "Gmail's IMAP server is imap.gmail.com on port 993 (SSL/TLS). IMAP is recommended over POP3 for Gmail as it syncs across devices and keeps email on the server. For outgoing mail (SMTP), Gmail uses smtp.gmail.com on port 587 (STARTTLS) or 465 (SSL). Port 110 is POP3 without encryption. Port 80 is HTTP. Most modern email apps can auto-configure Gmail accounts, but knowing these settings is important for manual setup or troubleshooting."
  },
  {
    id: 8,
    question: "A smartphone shows '1X' or 'EDGE' instead of '4G' or 'LTE' in the status bar. What does this indicate?",
    options: [
      "The phone is getting the fastest possible data speed",
      "The phone has fallen back to slower 2G/2.5G cellular technology due to weak signal or network limitations",
      "The phone is in Airplane Mode",
      "Wi-Fi is disabled"
    ],
    correct: 1,
    explanation: "1X (1xRTT) and EDGE are older, slower cellular technologies (2G/2.5G) with data speeds under 1 Mbps. Modern networks prioritize 4G LTE and 5G, but phones fall back to older technologies in areas with weak coverage or when newer networks are congested. This results in very slow data speeds. The progression is typically: 5G > 4G LTE > 3G (HSPA) > EDGE (2.5G) > 1X/GPRS (2G). If you consistently see 1X/EDGE, you may be in a poor coverage area or need a newer phone."
  },
  {
    id: 9,
    question: "A user cannot send email from their smartphone but can receive messages fine. They're using their ISP's email account. What outgoing mail port should they try if the current one doesn't work?",
    options: [
      "Port 443 (HTTPS)",
      "Port 587 (SMTP with STARTTLS) or port 465 (SMTP with SSL)",
      "Port 993 (IMAP)",
      "Port 3389 (RDP)"
    ],
    correct: 1,
    explanation: "SMTP (Simple Mail Transfer Protocol) handles outgoing email. Port 587 with STARTTLS is the modern standard for secure SMTP. Port 465 uses SSL/TLS encryption. Many ISPs and mobile networks block port 25 (the original SMTP port) to prevent spam. If email receiving works (IMAP/POP3) but sending fails, the issue is typically SMTP configuration. Verify the outgoing server address, port, and that authentication is enabled. Port 993 is for incoming IMAP, not outgoing mail."
  },
  {
    id: 10,
    question: "A tablet user wants to connect to a public Wi-Fi network at a coffee shop. After selecting the network, a webpage opens asking for agreement to terms of service. What is this called?",
    options: [
      "A virus infection",
      "Captive portal - a common authentication method for public Wi-Fi",
      "A network malfunction",
      "DNS poisoning attack"
    ],
    correct: 1,
    explanation: "A captive portal is a web page displayed before granting access to public Wi-Fi. It typically requires accepting terms, entering a code, or providing credentials. When you connect, the network intercepts web traffic and redirects to this portal. After completing the requirements, normal internet access is granted. This is standard for hotels, airports, coffee shops, and other public Wi-Fi. If the portal doesn't appear automatically, try navigating to any non-HTTPS website, which will trigger the redirect."
  },
  {
    id: 11,
    question: "A corporate smartphone has a VPN app configured by IT. When should the user enable the VPN connection?",
    options: [
      "Only when making phone calls",
      "When accessing company resources remotely, especially on untrusted networks like public Wi-Fi",
      "VPNs should never be used on smartphones",
      "Only when the battery is fully charged"
    ],
    correct: 1,
    explanation: "VPNs (Virtual Private Networks) create encrypted tunnels for secure communication. Corporate VPNs are essential when accessing company resources (email, files, internal websites) from outside the office, especially on untrusted networks like public Wi-Fi. The VPN encrypts all traffic between the device and the company network, protecting sensitive data from interception. Some companies require always-on VPN, while others only need it for specific tasks. VPN does consume more battery due to encryption overhead."
  },
  {
    id: 12,
    question: "A smartphone user notices their device is connected to Wi-Fi but web pages won't load. Other devices on the same Wi-Fi network work fine. What should they try first?",
    options: [
      "Forget the Wi-Fi network and reconnect, or toggle Wi-Fi off and on",
      "Factory reset the phone immediately",
      "Replace the phone's battery",
      "Disable cellular data"
    ],
    correct: 0,
    explanation: "Wi-Fi connection issues on a single device while others work suggest a problem with that device's Wi-Fi configuration or state. Try toggling Wi-Fi off and on, or use 'Forget Network' then reconnect. This clears any corrupted connection settings or stale DHCP leases. Also verify the phone obtained a valid IP address (check in Wi-Fi settings - should not be 169.254.x.x which is APIPA). Restart the phone if toggling doesn't help. Factory reset is excessive and should be a last resort."
  },
  {
    id: 13,
    question: "A user's phone shows 'No SIM' or 'Invalid SIM' error. They have verified the SIM card is properly inserted. What else could cause this?",
    options: [
      "The SIM card is damaged, not activated, or the phone is carrier-locked to a different network",
      "Wi-Fi is disabled",
      "Screen brightness is too low",
      "Bluetooth is enabled"
    ],
    correct: 0,
    explanation: "Several issues can cause SIM errors: physically damaged SIM card, SIM not activated by carrier, carrier lock preventing use of other carriers' SIMs, or SIM contacts being dirty. Try cleaning the SIM card's gold contacts with a soft cloth, reinserting it, or testing the SIM in another unlocked phone. If the SIM works in another phone, your phone may be carrier-locked. Contact your carrier about activation status or unlock requirements. Damaged SIMs need replacement from the carrier."
  },
  {
    id: 14,
    question: "A smartphone is configured to prefer Wi-Fi over cellular data, but the user notices it's using cellular data despite being connected to Wi-Fi. What could cause this behavior?",
    options: [
      "The Wi-Fi connection has internet connectivity issues, so the phone automatically switches to cellular data",
      "This is impossible - phones can't use both simultaneously",
      "The phone is broken",
      "Airplane Mode is enabled"
    ],
    correct: 0,
    explanation: "Modern smartphones use 'Wi-Fi Assist' (iOS) or similar features that automatically switch to cellular data when Wi-Fi connectivity is poor or has no internet access. The phone may stay connected to Wi-Fi for local network access while routing internet traffic through cellular. This prevents bad user experience on weak Wi-Fi but can consume unexpected cellular data. You can disable these features in settings if you prefer manual control. Check Wi-Fi signal strength and router internet connection if this happens frequently."
  },
  {
    id: 15,
    question: "A company issues smartphones to employees with MDM (Mobile Device Management) software. What can this software typically control?",
    options: [
      "Only the phone's wallpaper",
      "Security policies, app restrictions, remote wipe capability, and configuration enforcement",
      "Nothing - MDM is decorative only",
      "Only the phone's ringtone"
    ],
    correct: 1,
    explanation: "MDM (Mobile Device Management) allows IT departments to enforce security policies on corporate devices: require screen locks/passwords, encrypt data, restrict app installations, configure email/VPN/Wi-Fi automatically, remotely wipe devices if lost/stolen, prevent jailbreaking/rooting, and ensure compliance with corporate policies. MDM is essential for BYOD (Bring Your Own Device) and corporate-owned devices to protect company data. Users may have limited ability to change certain settings on MDM-managed devices."
  }
];