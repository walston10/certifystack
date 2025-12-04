export const lesson41Quiz = [
  {
    id: 1,
    question: "A company stores servers in a dedicated room. To prevent unauthorized access, they install a small room with two doors where only one door can be open at a time, requiring badge authentication for each door. What is this security control called?",
    options: [
      "Vestibule",
      "Access control vestibule (mantrap)",
      "Airlock",
      "Security checkpoint"
    ],
    correct: 1,
    explanation: "An access control vestibule (formerly called a mantrap) is a small room with two doors where only one can be open at a time. This prevents tailgating - unauthorized persons following authorized persons through secure doors. Both doors require authentication, and the second won't open until the first closes. This is common in data centers and secure facilities. Vestibule is the general architectural term, but 'access control vestibule' is the specific security term."
  },
  {
    id: 2,
    question: "A laptop user is working at a coffee shop and steps away to use the restroom. What physical security device should they use to prevent theft of the laptop while away?",
    options: [
      "Biometric lock",
      "Cable lock (Kensington lock)",
      "Badge reader",
      "Bollard"
    ],
    correct: 1,
    explanation: "A cable lock (commonly called a Kensington lock after the security slot standard) physically secures laptops to immovable objects like tables. The cable loops around a fixed object and connects to the laptop's security slot, preventing quick theft. Biometric locks authenticate users but don't physically secure devices. Badge readers are for facility access. Bollards are large posts that prevent vehicle access to buildings."
  },
  {
    id: 3,
    question: "A company is disposing of old hard drives that contained sensitive customer data. Simply deleting files or formatting won't ensure data is unrecoverable. Which physical destruction method makes data recovery MOST difficult?",
    options: [
      "Degaussing (for magnetic drives)",
      "Standard formatting",
      "Breaking the drive casing",
      "Wiping with overwrite software"
    ],
    correct: 0,
    explanation: "Degaussing uses powerful magnets to disrupt magnetic fields on hard drives, making data unrecoverable. For complete security, combine degaussing with physical destruction (shredding, drilling, pulverizing). Standard formatting doesn't erase data - it's easily recoverable. Breaking the casing doesn't destroy platters. Wiping software is effective but physical destruction is more certain. Note: Degaussing doesn't work on SSDs - they require different methods (encryption before destruction, physical shredding)."
  },
  {
    id: 4,
    question: "A server room experiences a fire. The facility has an automatic fire suppression system that won't damage electronic equipment. Which type of fire suppression system is BEST for protecting servers?",
    options: [
      "Water sprinkler system",
      "Foam-based suppression",
      "Clean agent gas suppression (FM-200, Halon replacement)",
      "Dry chemical extinguisher"
    ],
    correct: 2,
    explanation: "Clean agent gas suppression systems (FM-200, Novec 1230, or older Halon systems) extinguish fires by removing oxygen or heat without leaving residue or damaging electronics. They're ideal for server rooms and data centers. Water sprinklers destroy electronics. Foam and dry chemicals leave residue that damages equipment. These systems automatically activate and are safe for occupied spaces. They're expensive but essential for protecting valuable IT equipment."
  },
  {
    id: 5,
    question: "An office manager notices an unknown person following an employee through a secure door without using their own badge. What security violation is this?",
    options: [
      "Phishing",
      "Shoulder surfing",
      "Tailgating (piggybacking)",
      "Dumpster diving"
    ],
    correct: 2,
    explanation: "Tailgating (or piggybacking) is when an unauthorized person follows an authorized person through a secure entry point without proper authentication. This is a common social engineering tactic. Prevention methods include access control vestibules (mantraps), security guards, employee training, and cameras. Phishing is email-based attacks. Shoulder surfing is observing sensitive information. Dumpster diving is searching trash for data."
  },
  {
    id: 6,
    question: "A company uses RFID badges for building access, but employees report that badges sometimes stop working after being near their smartphones. What is the MOST likely cause?",
    options: [
      "Smartphones emit radiation that permanently damages RFID chips",
      "Magnetic fields from smartphone speakers can interfere with or demagnetize badges",
      "This is impossible - smartphones can't affect RFID badges",
      "The badges are defective and need replacement"
    ],
    correct: 1,
    explanation: "Smartphone speakers contain magnets that can demagnetize the magnetic stripe on hybrid cards (cards with both RFID and magnetic stripes) or interfere with low-frequency RFID. Modern high-frequency RFID (like most access badges) are more resistant but can still be affected by strong magnetic fields. Keep badges away from magnets, magnetic phone cases, and speaker assemblies. Smartphones don't permanently damage RFID chips through radiation, but magnets can affect magnetic components."
  },
  {
    id: 7,
    question: "A financial institution wants to implement the MOST secure biometric authentication for accessing the vault. Which biometric method is generally considered MOST accurate with lowest false acceptance rate?",
    options: [
      "Fingerprint scanning",
      "Facial recognition",
      "Iris/retinal scanning",
      "Voice recognition"
    ],
    correct: 2,
    explanation: "Iris and retinal scanning have the lowest false acceptance rates (FAR) and highest accuracy of common biometric methods. The unique patterns in the iris and retina are extremely difficult to forge. Fingerprints are good but can be spoofed or affected by injuries/wear. Facial recognition can be fooled by photos/masks and affected by aging. Voice recognition is least secure (easily recorded/mimicked). For maximum security, combine biometrics with other factors (badge, PIN)."
  },
  {
    id: 8,
    question: "A data center manager notices the server room temperature is consistently high. Which environmental control system should they check?",
    options: [
      "Fire suppression system",
      "HVAC (Heating, Ventilation, and Air Conditioning)",
      "Uninterruptible Power Supply (UPS)",
      "Access control system"
    ],
    correct: 1,
    explanation: "HVAC systems maintain proper temperature and humidity in server rooms. Servers generate significant heat - without proper cooling, they overheat and fail. Ideal data center temperature is 64-80°F (18-27°C). High temperatures reduce hardware lifespan and cause crashes. The HVAC system should be monitored continuously. Fire suppression doesn't control temperature. UPS provides backup power. Access control manages entry."
  },
  {
    id: 9,
    question: "A company wants to prevent vehicles from ramming through the lobby entrance. Which physical barrier should they install?",
    options: [
      "Security guards",
      "Bollards",
      "Mantraps",
      "Fencing"
    ],
    correct: 1,
    explanation: "Bollards are sturdy vertical posts (often concrete or steel-filled) designed to prevent vehicle access while allowing pedestrian traffic. They're placed in front of building entrances to stop vehicle-ramming attacks. Security guards can't stop vehicles. Mantraps are for controlled pedestrian access. Fencing can be driven through. Bollards are specifically engineered to withstand vehicle impacts and are a critical perimeter security measure for high-risk facilities."
  },
  {
    id: 10,
    question: "During a security audit, a consultant finds company documents in the dumpster behind the building containing employee Social Security numbers. What security practice is the company failing to implement?",
    options: [
      "Encryption",
      "Proper document destruction (shredding)",
      "Firewall configuration",
      "Antivirus software"
    ],
    correct: 1,
    explanation: "Secure document disposal requires shredding sensitive documents (paper and media) before disposal. Cross-cut shredders are better than strip-cut. For highly sensitive data, use micro-cut or pulverizing shredders, or professional destruction services that provide certificates of destruction. Dumpster diving is a real threat - attackers search trash for sensitive information. Encryption protects digital data. Firewalls and antivirus are for digital threats, not physical documents."
  },
  {
    id: 11,
    question: "A server room contains critical infrastructure. The facility manager wants to detect unauthorized entry when the building is closed. Which security control provides the BEST evidence of who entered and when?",
    options: [
      "Door locks only",
      "Video surveillance (CCTV) with badge reader logs",
      "Motion sensors that sound alarms",
      "Security guard patrols"
    ],
    correct: 1,
    explanation: "Combining video surveillance with badge reader access logs provides visual evidence AND digital records of who accessed the room and when. This creates a complete audit trail. Cameras show what happened; badge logs show who. Together they're powerful. Door locks prevent access but don't log entry. Motion sensors detect presence but don't identify individuals. Guard patrols are periodic, not continuous. For critical areas, use layered security with multiple controls."
  },
  {
    id: 12,
    question: "An employee works with confidential information on their computer in an open office area. Coworkers walking by can see their screen. What physical security control helps prevent visual eavesdropping?",
    options: [
      "Cable lock",
      "Privacy screen filter",
      "Biometric authentication",
      "USB port lock"
    ],
    correct: 1,
    explanation: "Privacy screen filters (also called privacy filters) limit viewing angles so only the person directly in front of the screen can see content clearly. Viewers from the side see a dark or obscured screen. These are essential for working with sensitive data in public or open office environments. Cable locks prevent theft. Biometric authentication verifies identity. USB locks prevent unauthorized device connections. Privacy filters specifically address shoulder surfing and visual eavesdropping."
  },
  {
    id: 13,
    question: "A company server room has sensors that detect water leaks from HVAC systems or plumbing. When water is detected, the system alerts facility management. What type of environmental monitoring is this?",
    options: [
      "Temperature monitoring",
      "Humidity monitoring",
      "Flood/water leak detection",
      "Power monitoring"
    ],
    correct: 2,
    explanation: "Flood/water leak detection sensors alert when water is present on the server room floor, typically from HVAC condensation, pipe leaks, or flooding. Water and electronics don't mix - even small leaks can destroy equipment. Sensors should be placed near HVAC units, under raised floors, and near water pipes. They trigger alarms for immediate response. Temperature monitors track heat. Humidity monitors track moisture in air. Power monitors track electrical systems."
  },
  {
    id: 14,
    question: "A receptionist notices a person wearing a vendor uniform claiming to be there for scheduled maintenance, but no maintenance is scheduled. The person is friendly and insistent. What should the receptionist do?",
    options: [
      "Let them in - vendor uniforms indicate they're authorized",
      "Verify the appointment with the appropriate department before granting access",
      "Assume they have the wrong date and reschedule",
      "Give them a visitor badge and let them wander until they find who they need"
    ],
    correct: 1,
    explanation: "Always verify unexpected visitors, even those in uniforms or claiming legitimate purposes. This could be social engineering - attackers often impersonate vendors, delivery people, or contractors. Contact the department that would have scheduled maintenance to confirm. Don't grant access based on uniforms alone. Don't trust the visitor's story without verification. Proper procedure: verify identity, confirm appointment, issue escorted visitor badge, log visit. Security awareness prevents unauthorized access."
  },
  {
    id: 15,
    question: "A company wants to track valuable IT assets (laptops, monitors, servers) throughout their facility. Which technology allows passive tracking without line-of-sight or manual scanning?",
    options: [
      "Barcode labels",
      "Written asset tags",
      "RFID (Radio Frequency Identification) tags",
      "Painted serial numbers"
    ],
    correct: 2,
    explanation: "RFID tags enable automated asset tracking without line-of-sight - readers can detect multiple tagged items as they pass through doorways or move around facilities. Active RFID has longer range; passive RFID is cheaper. This enables inventory counts, theft detection, and location tracking. Barcodes require manual scanning and line-of-sight. Written tags and painted numbers require visual inspection. RFID provides automated, scalable asset management for large inventories."
  }
];