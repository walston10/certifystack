export const lesson47Quiz = [
  {
    id: 1,
    question: "An employee loses their company smartphone containing sensitive customer data. The IT administrator remotely erases all data from the device. What mobile security feature enables this?",
    options: [
      "Screen lock",
      "Remote wipe",
      "Biometric authentication",
      "App permissions"
    ],
    correct: 1,
    explanation: "Remote wipe allows administrators or users to remotely erase all data from a lost or stolen device via the cloud (Find My iPhone, Find My Device, MDM solutions). This protects sensitive data from unauthorized access. The device must be connected to the internet for the wipe command to execute. Always enable this feature on company devices. Screen locks prevent casual access but don't erase data. Biometrics authenticate users. App permissions control app access. Remote wipe is the last line of defense for lost devices."
  },
  {
    id: 2,
    question: "A user wants the most secure screen lock method for their smartphone containing banking apps. Which authentication method provides the BEST security?",
    options: [
      "4-digit PIN",
      "Swipe pattern",
      "Biometric (fingerprint or facial recognition) combined with PIN/password",
      "No lock screen for convenience"
    ],
    correct: 2,
    explanation: "Combining biometric authentication (fingerprint, face recognition) with a strong PIN or password provides multi-factor authentication and the best security. Biometrics are convenient and hard to replicate, but have fallback PIN/password for when biometrics fail. 4-digit PINs are weak (10,000 combinations). Swipe patterns leave oil traces on screens. No lock screen is extremely insecure. For maximum security, use biometrics + strong alphanumeric password. This balances security (two factors) with usability (quick biometric unlock)."
  },
  {
    id: 3,
    question: "A company implements MDM (Mobile Device Management) on employee smartphones. What capability does MDM primarily provide?",
    options: [
      "Faster internet speeds",
      "Centralized management, security policies, and remote control of mobile devices",
      "Free unlimited data plans",
      "Longer battery life"
    ],
    correct: 1,
    explanation: "MDM (Mobile Device Management) allows IT to centrally manage mobile devices: enforce security policies (password requirements, encryption), deploy/remove apps, configure settings, locate devices, remote wipe, monitor compliance. Essential for BYOD (Bring Your Own Device) and corporate-owned devices. MDM doesn't affect internet speed, data plans, or battery life - those are carrier/hardware factors. MDM provides security, compliance, and management capabilities. Popular solutions: Microsoft Intune, VMware Workspace ONE, Jamf (iOS)."
  },
  {
    id: 4,
    question: "An Android user wants to install an app from a website rather than the Google Play Store. A security warning appears about installing from 'unknown sources.' What security risk does this pose?",
    options: [
      "No risk - all app sources are equally safe",
      "Installing from unknown sources bypasses Google Play Protect scanning and may install malware",
      "The app will run faster from unknown sources",
      "Unknown sources provide better security than official stores"
    ],
    correct: 1,
    explanation: "Installing apps from unknown sources (sideloading) bypasses security protections: Google Play Protect scanning, developer verification, malware detection. This significantly increases malware risk. Only install from untrusted sources if absolutely necessary and from verified developers. Official app stores (Google Play, Apple App Store) vet apps for malware. Third-party stores and direct downloads are high-risk. Performance isn't affected by source. Official stores provide much better security. Enable 'unknown sources' only temporarily if needed, then disable."
  },
  {
    id: 5,
    question: "A user's smartphone displays a message: 'Failed login attempt limit reached. Please try again in 15 minutes.' What security feature has been triggered?",
    options: [
      "Remote wipe",
      "Failed login restrictions (attempt lockout)",
      "Full device encryption",
      "Location services"
    ],
    correct: 1,
    explanation: "Failed login restrictions limit the number of incorrect unlock attempts before temporarily or permanently locking the device. Typical settings: 5-10 failed attempts trigger delays or permanent lockout (requiring factory reset or administrative unlock). This prevents brute-force attacks on PINs/passwords. Some devices wipe data after excessive failures. Remote wipe is administrator-initiated. Encryption protects stored data. Location services track device position. Failed login restrictions prevent unlimited password guessing attempts."
  },
  {
    id: 6,
    question: "A company wants to ensure all data on employee smartphones is encrypted to protect against theft. When is full device encryption MOST effective?",
    options: [
      "Only when the device is turned on",
      "When the device is locked or powered off - encrypted data is unreadable without unlock credentials",
      "Only during phone calls",
      "Encryption doesn't protect mobile devices"
    ],
    correct: 1,
    explanation: "Full device encryption encrypts all data at rest on the device. When locked or powered off, data is encrypted and unreadable without proper authentication (PIN, password, biometric). Once unlocked, data is decrypted for use. Modern smartphones (iOS, Android) enable encryption by default. Encryption protects against: theft, lost devices, forensic data recovery. It doesn't protect while device is unlocked and in use. Always use strong unlock credentials with encryption. Encryption is a fundamental mobile security feature."
  },
  {
    id: 7,
    question: "An employee uses their personal smartphone for work (BYOD). The IT department implements a solution that separates and encrypts work data from personal data on the same device. What is this called?",
    options: [
      "Remote wipe",
      "Containerization or MAM (Mobile Application Management)",
      "Screen lock",
      "Biometric authentication"
    ],
    correct: 1,
    explanation: "Containerization or MAM (Mobile Application Management) creates a secure, encrypted container on the device that separates work apps and data from personal content. IT can manage, secure, and wipe the work container without affecting personal data. This solves the BYOD challenge: employee privacy + corporate security. The container enforces policies (encryption, authentication) on work data only. Remote wipe can target just the container. This is different from full MDM which controls the entire device."
  },
  {
    id: 8,
    question: "A user installs a flashlight app that requests permissions for: camera, microphone, contacts, and location. What should the user be concerned about?",
    options: [
      "Nothing - all apps need these permissions",
      "The app is requesting excessive permissions beyond what's needed for its function (potential privacy/security risk)",
      "These permissions will improve the flashlight's brightness",
      "Permission requests are just formalities and don't matter"
    ],
    correct: 1,
    explanation: "Apps requesting permissions unrelated to their function are red flags for malware or privacy invasion. A flashlight only needs camera permission (for the flash LED), not microphone, contacts, or location. Excessive permissions enable: data theft, surveillance, selling personal information. Best practice: review app permissions carefully, deny unnecessary permissions, uninstall apps with suspicious permission requests. Modern OSes show permission requests - read them. Legitimate apps request only necessary permissions. Malware requests everything."
  },
  {
    id: 9,
    question: "A company allows employees to use personal devices for work but wants to prevent copy-paste of company data to personal apps. Which mobile security technology enables this?",
    options: [
      "Screen lock with longer timeout",
      "MAM (Mobile Application Management) with data loss prevention policies",
      "Stronger WiFi password",
      "Biometric authentication"
    ],
    correct: 1,
    explanation: "MAM (Mobile Application Management) with DLP (Data Loss Prevention) policies can prevent data leakage: block copy-paste between managed and unmanaged apps, prevent screenshots of sensitive data, restrict 'Open in' to approved apps, disable cloud backup of work data. This protects corporate data while allowing personal device use. Screen locks prevent device access. WiFi passwords secure network connections. Biometrics authenticate users. MAM/DLP specifically controls data flow between applications and prevents unauthorized data exfiltration."
  },
  {
    id: 10,
    question: "A smartphone user receives a text message from their 'bank' asking them to click a link to verify account information. What should they do?",
    options: [
      "Click the link immediately - it's from their bank",
      "Delete the message and contact their bank through official channels to verify",
      "Reply with their account number to verify it's legitimate",
      "Forward the message to all their contacts"
    ],
    correct: 1,
    explanation: "This is smishing (SMS phishing). Never click links in unexpected texts claiming to be from banks, services, or government agencies. Legitimate organizations don't request sensitive information via text. Response: delete the message, contact the institution through official channels (call the number on your card, visit their official website manually). Don't reply - confirms your number is active. Don't click links - may install malware or steal credentials. Train users to verify suspicious messages independently."
  },
  {
    id: 11,
    question: "An organization wants to prevent employees from accessing company email from specific locations (like outside the country) for security. Which MDM feature enables this?",
    options: [
      "Screen lock timeout",
      "Geofencing or location-based policies",
      "Biometric authentication",
      "App permissions"
    ],
    correct: 1,
    explanation: "Geofencing uses GPS to enforce location-based policies: allow/deny access based on device location, trigger alerts when devices enter/leave areas, enforce security policies by location (different policies for office vs home). Use cases: prevent access from foreign countries, require additional authentication outside corporate locations, disable features in restricted areas. Screen locks control access timing. Biometrics verify identity. App permissions control app capabilities. Geofencing adds location-based security controls through MDM."
  },
  {
    id: 12,
    question: "A user wants to install an iOS app that requires 'jailbreaking' the iPhone. What security risk does jailbreaking create?",
    options: [
      "No risk - jailbreaking improves security",
      "Jailbreaking removes iOS security protections, enabling malware and voiding warranties",
      "Jailbreaking only affects battery life",
      "Apple recommends jailbreaking for better performance"
    ],
    correct: 1,
    explanation: "Jailbreaking (iOS) or rooting (Android) removes built-in security restrictions, allowing: installation of unauthorized apps, system modifications, but also: malware installation, security vulnerability exploitation, disabling of security features. It voids warranties, prevents OS updates, and violates corporate policies. MDM can detect jailbroken/rooted devices and block access. Never jailbreak corporate devices. Apple explicitly prohibits it. Security risks far outweigh customization benefits. Legitimate apps don't require jailbreaking."
  },
  {
    id: 13,
    question: "A company implements a policy requiring all mobile devices to use VPN when accessing company resources over public WiFi. Why is this important?",
    options: [
      "VPNs make the internet faster",
      "VPNs encrypt all traffic, protecting data from eavesdropping on untrusted networks",
      "VPNs are only needed for desktop computers",
      "Public WiFi is always secure without VPN"
    ],
    correct: 1,
    explanation: "VPNs (Virtual Private Networks) create encrypted tunnels between devices and corporate networks, protecting data on untrusted networks (public WiFi, home networks, cellular). This prevents: eavesdropping, man-in-the-middle attacks, data interception on public WiFi. Essential for mobile workers accessing company resources remotely. VPNs don't increase speed (often slower due to encryption). Mobile devices are primary targets on public networks. Public WiFi is inherently insecure. Always use VPN on untrusted networks."
  },
  {
    id: 14,
    question: "A user loses their smartphone but remembers enabling 'Find My Device' (Android) or 'Find My iPhone' (iOS). What capabilities do these services provide?",
    options: [
      "Only shows battery percentage",
      "Locate device on map, play sound, lock device, and remotely wipe data",
      "Automatically orders a replacement phone",
      "Calls the police automatically"
    ],
    correct: 1,
    explanation: "Find My Device (Android) and Find My iPhone (iOS) enable: real-time location tracking, remote sound playing (find nearby devices), remote locking with message display, remote data wiping. These services use GPS/WiFi/cellular for location. Lost Mode (iOS) locks device and displays contact info. Activation Lock prevents reactivation without credentials. Enable these features immediately on new devices - they're useless if enabled after loss. They don't automatically call police or order replacements, but provide tools to locate and protect devices."
  },
  {
    id: 15,
    question: "An IT administrator configures mobile devices to automatically wipe all data after 10 failed unlock attempts. What is the primary purpose of this policy?",
    options: [
      "To annoy legitimate users who forget passwords",
      "To prevent brute-force attacks by erasing data after excessive failed attempts",
      "To save battery life",
      "To force users to buy new phones"
    ],
    correct: 1,
    explanation: "Automatic data wipe after failed attempts prevents brute-force attacks where attackers try unlimited password combinations. 10 attempts is a balance: prevents attacks while allowing legitimate users who forget credentials to try reasonable variations. Warning: this is destructive - ensure backups exist. Some implementations escalate: longer delays after failures, then wipe. Configure based on data sensitivity and user needs. This isn't meant to annoy users - it's a last-resort security measure protecting against persistent unlock attempts by unauthorized parties."
  }
];