// Flashcards for Lesson 20: Physical and Environmental Security (SHORTENED)

export const lesson20Flashcards = [
  {
    id: 1,
    front: "Why is physical security critical?",
    back: "Physical access defeats all network security. Attacker can steal drives, install backdoors, reset passwords, tap cables. Physical security is the foundation. Defense starts at perimeter."
  },
  {
    id: 2,
    front: "What are badge readers and access cards?",
    back: "Control facility access with electronic cards. Types: magnetic stripe (old, cloneable), proximity (RFID), smart cards (chip). Benefits: audit trail, instant revocation, time restrictions. Combine with PIN/biometrics for better security."
  },
  {
    id: 3,
    front: "What biometric methods exist?",
    back: "Fingerprint (most common, fast), retina scan (very secure), iris scan (secure, fast), facial recognition (convenient), voice (phone-friendly), palm vein (very secure). Something you ARE. Hard to fake, can't share/forget."
  },
  {
    id: 4,
    front: "Pros and cons of biometrics?",
    back: "Pros: can't lose/forget, hard to fake, can't share, unique. Cons: expensive, false positives/negatives, privacy concerns, permanent (can't change), injuries affect access. Best: combine with card/PIN (multi-factor)."
  },
  {
    id: 5,
    front: "What are key fobs and smart cards?",
    back: "Key fobs: device generating OTP or RF signal. Smart cards: card with chip storing credentials. Both provide two-factor auth (something you have). Examples: CAC (military), PIV (government). Combine with PIN."
  },
  {
    id: 6,
    front: "Role of security guards?",
    back: "Provide human judgment, deterrence (visible presence), incident response, visitor screening, monitoring. Can challenge suspicious behavior, adapt to situations. 24/7 coverage expensive but effective. Supplement with technology."
  },
  {
    id: 7,
    front: "What is CCTV and best practices?",
    back: "Closed Circuit Television records/monitors areas. Best practices: cover all entry/exit, proper lighting, adequate resolution, 30-90 days storage, tamper-proof mounting, active monitoring. IP cameras: network-based, higher resolution."
  },
  {
    id: 8,
    front: "What is motion detection?",
    back: "Triggers alerts/recording when movement detected. Types: PIR (heat), microwave (radio), dual-tech (fewer false alarms). Uses: after-hours, restricted areas. Integrates with cameras, alarms, lighting. Set sensitivity to avoid false alarms."
  },
  {
    id: 9,
    front: "Types of physical locks?",
    back: "Traditional: key locks (bump-resistant). Electronic: keypad (PIN), card readers, biometric. Smart locks: network-connected, remote access, logs. Server racks: keyed differently. Change locks/codes when staff leave."
  },
  {
    id: 10,
    front: "What is a mantrap?",
    back: "Small room with two doors requiring authentication at each. First closes before second opens. Prevents tailgating/piggybacking. Common in data centers. Often includes weight sensors, cameras, intercom. Highly effective anti-tailgating."
  },
  {
    id: 11,
    front: "What are bollards?",
    back: "Sturdy short posts preventing vehicle access. Protects buildings from vehicle attacks. Types: fixed, removable, retractable. Materials: steel, concrete. Stops ram raids, vehicle-borne explosives. Place around critical infrastructure."
  },
  {
    id: 12,
    front: "Perimeter fencing best practices?",
    back: "Creates physical boundary. Types: chain-link, solid, anti-climb. Height: 6-8 feet minimum. Add barbed wire, sensors, lighting, cameras, clear zones. Gates: controlled access, weak point. Inspect regularly. First layer of security."
  },
  {
    id: 13,
    front: "Security concerns with gates?",
    back: "Weakest point in perimeter. Must be secured, monitored, access-controlled. Types: manual, automatic, crash-rated. Issues: tailgating, propping open. Best practices: no gaps, cameras, log access, automatic closing."
  },
  {
    id: 14,
    front: "What is asset tracking?",
    back: "Monitors location/status of equipment. Methods: barcode, RFID tags, GPS, asset management software. Benefits: prevent theft, track inventory, audit compliance. Tags on servers, laptops, network equipment. Regular audits."
  },
  {
    id: 15,
    front: "What are RFID tags?",
    back: "Radio Frequency Identification for wireless tracking. Passive: no battery, short range, cheap. Active: battery-powered, long range, expensive. Uses: inventory, access control, theft prevention. No line-of-sight needed vs barcode."
  },
  {
    id: 16,
    front: "What is tamper detection?",
    back: "Alerts when equipment opened/moved. Methods: tamper-evident seals, electronic sensors (case opening), motion sensors, cable locks. Uses: server rooms, network closets. Response: alert security, log event. Important for unsupervised locations."
  },
  {
    id: 17,
    front: "Why is HVAC critical for data centers?",
    back: "Maintains optimal environment. Requirements: temp 64-80°F, humidity 40-60%, proper airflow. Critical: equipment overheats without cooling. Design: redundant units (N+1), hot/cold aisle, continuous monitoring. HVAC failure = emergency shutdown."
  },
  {
    id: 18,
    front: "Ideal data center temperature and humidity?",
    back: "Temperature: 64-80°F (18-27°C). Humidity: 40-60%. Too low = static electricity. Too high = condensation. Monitor continuously, alert on deviations. Many outages from HVAC failures. Test backup systems."
  },
  {
    id: 19,
    front: "Fire suppression systems for data centers?",
    back: "Clean agent (FM-200, Novec) - safe for equipment, displaces oxygen. Pre-action sprinkler - two triggers, delays water. NOT standard sprinklers (water damage). Detection: smoke, heat, flame. Regular testing required."
  },
  {
    id: 20,
    front: "What is flood/water detection?",
    back: "Alerts to leaks before damage. Sensors under raised floors, near HVAC, around pipes. Types: spot sensors, rope sensors. Alert immediately. Sources: roof leaks, HVAC, pipes. Water + electricity = disaster."
  },
  {
    id: 21,
    front: "What is hot aisle/cold aisle design?",
    back: "Data center layout optimizing cooling. Cold aisle: faces intakes (cool air). Hot aisle: faces exhausts (hot air). Alternating rows. Benefits: efficient cooling, lower costs. Enhancements: containment (seal aisles). Industry standard."
  },
  {
    id: 22,
    front: "What is rack security?",
    back: "Controls access to equipment in racks. Methods: locking doors (keyed, combo), side panels locked, cable locks, intrusion detection. Best: different keys per rack, log access, cameras. Lock front and rear doors."
  },
  {
    id: 23,
    front: "Cable management for security?",
    back: "Organized cables harder to tamper with, easier to notice changes. Use cable trays, velcro straps, proper labeling, color coding. Avoid loose/unlabeled cables. Vertical/horizontal management in racks."
  },
  {
    id: 24,
    front: "Wireless physical security concerns?",
    back: "War driving: detecting wireless networks. Rogue APs: unauthorized APs bypass security. Evil twin: fake AP. Defense: place APs high/secured, disable unused ports, monitor for rogues, minimize signal bleed outside."
  },
  {
    id: 25,
    front: "What is war driving?",
    back: "Driving/walking with WiFi device mapping wireless networks. Discovers SSIDs, security, signal strength, locations. Defense: strong encryption (WPA3), monitor for scanning, WIDS/WIPS. Your wireless is visible outside building."
  },
  {
    id: 26,
    front: "What are rogue APs and how to detect?",
    back: "Unauthorized AP connected to network (insider threat). Bypasses firewall, security policies. Detection: wireless IDS/IPS, regular scans, monitor switch MACs, physical inspections. Prevention: port security, NAC. Serious threat."
  },
  {
    id: 27,
    front: "What is wireless site survey for security?",
    back: "Maps RF coverage, signal strength, interference, security posture. Security focus: signal bleed outside (eavesdropping risk), optimal placement, identify rogues. Tools: WiFi/spectrum analyzer, heat mapping. Minimize signal outside."
  },
  {
    id: 28,
    front: "Securing a server room - what measures?",
    back: "Access: badge + biometric, mantrap. Monitoring: cameras, motion sensors. Environment: HVAC (redundant), temp/humidity monitors, fire suppression. Equipment: locked racks, cable management, tamper detection. Power: UPS, generator."
  },
  {
    id: 29,
    front: "Defense in depth for physical security?",
    back: "Multiple overlapping layers. If one fails, others protect. Layers: perimeter (fence), building (locks), room (access control), rack (locks), device (passwords). Each layer delays attacker, increases detection. Layered approach standard."
  },
  {
    id: 30,
    front: "Match: Mantrap / Bollards / RFID / Hot aisle / CCTV / Biometrics",
    back: "Mantrap = prevent tailgating. Bollards = prevent vehicle attacks. RFID = asset tracking. Hot aisle = cooling efficiency. CCTV = monitoring/recording. Biometrics = unique authentication."
  }
];