export const lesson47Flashcards = [
  {
    id: 1,
    front: "What are the main types of screen locks on mobile devices?",
    back: "PIN (4-6 digit code), password (alphanumeric), pattern (swipe gesture), fingerprint (biometric), facial recognition (biometric), iris scan (biometric). Biometrics most secure and convenient. Always enable screen lock - first line of defense."
  },
  {
    id: 2,
    front: "What is remote wipe and when would you use it?",
    back: "Remotely erase all data on lost/stolen device. Prevents data breach if device compromised. Use immediately when device stolen/lost and recovery unlikely. Requires setup beforehand (Find My Device, MDM). Permanent - cannot be undone."
  },
  {
    id: 3,
    front: "What is remote lock for mobile devices?",
    back: "Remotely lock device and display message (contact info, reward offer). Prevents unauthorized access while you locate device. Less drastic than remote wipe - reversible. Use if device misplaced but might be recovered. Can remote wipe later if needed."
  },
  {
    id: 4,
    front: "What locator services should you enable on mobile devices?",
    back: "Find My Device (Android), Find My iPhone (iOS). GPS-based location tracking. Locate lost device on map, play sound, lock remotely, wipe remotely. Enable before device lost. Requires internet/GPS connection. Link to account (Google/Apple)."
  },
  {
    id: 5,
    front: "What is device encryption on mobile devices?",
    back: "Encrypts all data stored on device. Enabled by default on modern iOS (always), Android 10+ (if screen lock set). Protects data if device physically accessed. Requires screen lock PIN/password. Transparent to user - automatic encrypt/decrypt."
  },
  {
    id: 6,
    front: "What is full device encryption and why enable it?",
    back: "Encrypts entire device storage - apps, photos, messages, all data. Protects against physical data extraction if device stolen. Enabled with screen lock on modern devices. Cannot access data without unlock credentials. Essential for business/sensitive data."
  },
  {
    id: 7,
    front: "What are failed login attempt restrictions?",
    back: "Device locks/erases after X failed unlock attempts. iOS: 10 attempts can trigger erase if enabled. Android: varies by manufacturer, temporary lockout. Prevents brute force attacks. Balance security with legitimate mistakes. Can lose data if enabled."
  },
  {
    id: 8,
    front: "What is Multi-Factor Authentication (MFA) on mobile devices?",
    back: "Require two+ factors to access accounts/services. Something you know (password) + something you have (phone code). Authenticator apps (Google, Microsoft, Authy), SMS codes, biometrics. Protects accounts even if password compromised."
  },
  {
    id: 9,
    front: "What are authenticator apps and why use them?",
    back: "Generate time-based one-time passwords (TOTP) for MFA. Examples: Microsoft Authenticator, Google Authenticator, Authy. More secure than SMS (SIM swap resistant), works offline, multiple accounts. Required for many enterprise/cloud services."
  },
  {
    id: 10,
    front: "What is the difference between trusted and untrusted app sources?",
    back: "Trusted: official app stores (Google Play, Apple App Store) - vetted, scanned for malware. Untrusted: third-party sites, APK files - higher malware risk, no vetting. iOS blocks untrusted by default. Android allows but warns - enable 'Unknown sources'."
  },
  {
    id: 11,
    front: "What is sideloading apps and what are the risks?",
    back: "Installing apps outside official app store (APK files on Android). Bypasses security vetting, higher malware risk, no automatic updates, may void warranty. Sometimes necessary for enterprise apps or testing. iOS requires jailbreak (not recommended)."
  },
  {
    id: 12,
    front: "Why should you only install apps from official stores?",
    back: "Apps vetted for malware/security issues, automatic security updates, developer verification, user reviews visible, privacy policy required, app removal if malicious. Third-party sources lack these protections - significantly higher risk."
  },
  {
    id: 13,
    front: "What are OS/security updates on mobile devices?",
    back: "Patches for security vulnerabilities, bug fixes, feature updates. Critical for security - install promptly. Settings → System/General → Software Update. Enable automatic updates when possible. Older devices may not receive updates - security risk."
  },
  {
    id: 14,
    front: "Why are mobile security updates important?",
    back: "Fix security vulnerabilities exploited by malware/hackers, protect personal data, prevent device compromise. Zero-day exploits target unpatched devices. Monthly security patches (Android), regular iOS updates. Install within days of release."
  },
  {
    id: 15,
    front: "What is MDM (Mobile Device Management)?",
    back: "Enterprise solution for managing corporate mobile devices. Remote configuration, app deployment, policy enforcement, security settings, remote wipe, device tracking. Examples: Microsoft Intune, VMware Workspace ONE. BYOD or corporate-owned devices."
  },
  {
    id: 16,
    front: "What is MAM (Mobile Application Management)?",
    back: "Manages and secures corporate apps on devices without full device control. App-level encryption, app whitelisting/blacklisting, container for work apps separate from personal. Less invasive than MDM for BYOD. Intune App Protection."
  },
  {
    id: 17,
    front: "What is the difference between MDM and MAM?",
    back: "MDM: controls entire device, all settings/apps, stricter, corporate-owned devices. MAM: controls only corporate apps, separates work/personal, less intrusive, BYOD-friendly. MAM better for employee-owned devices respecting privacy."
  },
  {
    id: 18,
    front: "What is corporate vs personal data separation?",
    back: "Work profile/container isolates corporate data from personal on same device. Work apps/data encrypted separately, IT can wipe work data only (not personal), different app stores. Android Enterprise Work Profile, iOS Managed Apps. BYOD essential."
  },
  {
    id: 19,
    front: "What is geofencing for mobile devices?",
    back: "Virtual boundary triggering actions when device enters/exits area. GPS/cellular-based. Security uses: restrict app access outside company property, alert if device leaves area, auto-lock when leaving secure zone. MDM feature. Location services required."
  },
  {
    id: 20,
    front: "What is geolocation tracking and its security uses?",
    back: "GPS/network-based device location tracking. Find lost devices, verify user location for access control, audit trails, geofencing triggers. Privacy concern - inform users if tracking enabled. Requires location services on, internet connection."
  },
  {
    id: 21,
    front: "What VPN configuration is needed on mobile devices?",
    back: "Settings → VPN → Add VPN configuration. Enter server address, authentication method, credentials. Corporate VPNs encrypt traffic on untrusted networks (public Wi-Fi), access internal resources remotely. Always-on VPN option for enterprise. Per-app VPN available."
  },
  {
    id: 22,
    front: "Why use VPN on mobile devices?",
    back: "Encrypt traffic on public Wi-Fi, protect against eavesdropping, access corporate resources securely, bypass geographic restrictions. Essential when using untrusted networks. Corporate requirement for accessing company data. Apps: company VPN or commercial (NordVPN, ExpressVPN)."
  },
  {
    id: 23,
    front: "What biometric authentication methods exist on mobile devices?",
    back: "Fingerprint scanner (Touch ID, most common), facial recognition (Face ID - 3D mapping), iris scan (Samsung), voice recognition (less common). Faster than PIN/password, can't be shared/forgotten. Store biometric data in secure enclave."
  },
  {
    id: 24,
    front: "What is a secure enclave/trusted execution environment?",
    back: "Hardware-isolated area storing sensitive data (biometrics, encryption keys). Separate from main processor, even OS can't access directly. iOS Secure Enclave, Android TEE. Protects against malware extracting credentials/biometrics."
  },
  {
    id: 25,
    front: "What app permissions should you review?",
    back: "Location (GPS access), camera, microphone, contacts, photos, storage, phone/SMS. Grant only necessary permissions. Review regularly - Settings → Apps → Permissions. Deny unnecessary permissions. Some apps won't work without specific permissions."
  },
  {
    id: 26,
    front: "Why review and limit app permissions?",
    back: "Privacy protection - prevent unnecessary data collection, security - reduce attack surface if app compromised, battery life - location/camera drain battery. Many apps request excessive permissions. Deny unless app feature requires it."
  },
  {
    id: 27,
    front: "What is two-factor authentication on mobile devices?",
    back: "Password + second factor (SMS code, authenticator app, biometric). Protects accounts even if password stolen. Enable for: email, banking, social media, cloud storage, work accounts. Authenticator apps preferred over SMS (SIM swap attacks)."
  },
  {
    id: 28,
    front: "What are mobile security best practices?",
    back: "Screen lock enabled (biometric + PIN backup), install updates promptly, official app stores only, review app permissions, enable device encryption, setup Find My Device, use VPN on public Wi-Fi, avoid jailbreak/root, regular backups, antivirus (Android)."
  },
  {
    id: 29,
    front: "What happens when you root (Android) or jailbreak (iOS) a device?",
    back: "Gain administrative access, remove manufacturer restrictions. Risks: void warranty, disable security features, easier malware infection, can't receive official updates, banking apps may not work. Some benefits but significant security trade-offs. Not recommended."
  },
  {
    id: 30,
    front: "What is the difference between a passcode and biometrics for mobile security?",
    back: "Passcode: knowledge-based (know), can be shared/forgotten, shoulder surfing risk, slower entry. Biometrics: physical trait (are), can't be shared, faster, may fail (wet fingers), passcode backup required. Use biometrics with strong passcode fallback."
  }
];