// Flashcards for Lesson 20: Physical and Environmental Security

export const lesson20Flashcards = [
  {
    id: 1,
    front: "Why is physical security critical for network security?",
    back: "Physical access defeats all network security. If attacker physically accesses: servers (steal drives, install backdoors), network devices (reset passwords, capture traffic), cables (tap/cut). Physical security is the foundation. Best firewall useless if attacker can touch equipment. Often overlooked but critically important. Defense starts at perimeter."
  },
  {
    id: 2,
    front: "What are badge readers and access cards?",
    back: "Badge readers control facility access using electronic cards. Types: magnetic stripe (old, easy to clone), proximity cards (RFID, contactless), smart cards (chip, encrypted). Benefits: audit trail (who/when), revoke access instantly, time-based restrictions. Weaknesses: tailgating, lost/stolen cards, card sharing. Combine with: PIN, biometrics for better security."
  },
  {
    id: 3,
    front: "What biometric authentication methods exist?",
    back: "Fingerprint: most common, fast, moderate security. Retina scan: very secure, slower, invasive. Iris scan: very secure, fast, non-invasive. Facial recognition: convenient, improving accuracy, lighting-dependent. Voice recognition: phone-friendly, affected by illness. Palm vein: very secure, expensive. Biometrics: something you ARE. Hard to fake, can't be shared/forgotten."
  },
  {
    id: 4,
    front: "What are the pros and cons of biometric security?",
    back: "Pros: can't lose/forget, hard to fake, can't share, unique per person, no password resets. Cons: expensive initial setup, false positives/negatives (acceptance errors), privacy concerns, permanent (can't change fingerprints), injuries affect access. Accuracy measured by: FAR (False Accept Rate), FRR (False Reject Rate). Best: combine with card/PIN (multi-factor)."
  },
  {
    id: 5,
    front: "What are key fobs and smart cards?",
    back: "Key fobs: small device generating one-time passwords (OTP) or sending RF signal for access. Smart cards: credit-card sized with embedded chip storing credentials/certificates. Both provide: two-factor authentication (something you have). Smart cards: CAC (military), PIV (government), corporate access. More secure than static passwords. Can combine with PIN (something you know)."
  },
  {
    id: 6,
    front: "What is the role of security guards?",
    back: "Security guards provide: human judgment (not just automated), deterrence (visible presence), response to incidents, visitor screening/escort, monitoring multiple systems, emergency response. Can: challenge suspicious behavior, adapt to situations, verify identities. 24/7 coverage expensive but effective. Often first and last line of defense. Supplement with technology, not replace."
  },
  {
    id: 7,
    front: "What is video surveillance (CCTV) and best practices?",
    back: "CCTV (Closed Circuit Television) records/monitors areas. Best practices: cover all entry/exit points, proper lighting, adequate resolution (read badges), sufficient storage (30-90 days), tamper-proof mounting, redundant recording, monitor actively (not just recording). IP cameras: network-based, higher resolution, remote access. Deterrent + evidence. Position to avoid blind spots."
  },
  {
    id: 8,
    front: "What is motion detection?",
    back: "Motion detection triggers alerts/recording when movement detected. Types: passive infrared (PIR - heat), microwave (radio waves), dual-technology (both for fewer false alarms). Uses: after-hours monitoring, restricted areas, outdoor perimeter. Integrates with: cameras (start recording), alarms, lighting. Reduces: storage needs, alert fatigue. Set sensitivity appropriately to avoid false alarms from HVAC, pets."
  },
  {
    id: 9,
    front: "What types of physical locks are used?",
    back: "Traditional: key locks (master key systems, bump-resistant). Electronic: keypad (PIN code), card readers, biometric. Combination locks: code-based, no keys. Smart locks: network-connected, remote access, audit logs. Backup power critical for electronic locks. Use: deadbolts, grade 1 locks. Server racks: keyed differently, control key distribution. Change locks/codes when staff leave."
  },
  {
    id: 10,
    front: "What is a mantrap?",
    back: "Mantrap is small room with two doors requiring authentication at each. First door closes before second opens (one person at a time). Prevents: tailgating/piggybacking, forced entry. Delays: intrusion. Common in: data centers, secure facilities, banks. Often includes: weight sensors, cameras, intercom. If alarm triggers, both doors lock. Highly effective anti-tailgating measure."
  },
  {
    id: 11,
    front: "What are bollards?",
    back: "Bollards are sturdy short posts preventing vehicle access. Protects: buildings from vehicle attacks, perimeter security, pedestrian areas. Types: fixed (permanent), removable (access when needed), retractable/automatic. Materials: steel, concrete. Placement: around critical infrastructure, entrances, loading docks. Stops: ram raids, vehicle-borne explosives. Security vs fire/emergency access trade-off."
  },
  {
    id: 12,
    front: "What is perimeter fencing and best practices?",
    back: "Fencing creates physical boundary. Types: chain-link (see-through, common), solid (privacy), anti-climb (razor wire, height). Height: 6-8 feet minimum for security. Add: barbed wire, sensors, lighting, cameras, clear zones (no hiding spots). Gates: controlled access points, weak point if unsecured. Inspect regularly for: damage, breaches. First layer of physical security."
  },
  {
    id: 13,
    front: "What security concerns exist with gates?",
    back: "Gates are weakest point in perimeter. Must be: properly secured when closed, monitored, access-controlled. Types: manual (guard-operated), automatic (card/remote), crash-rated (stop vehicles). Issues: tailgating, propping open, forced entry. Best practices: no gaps under/around, cameras at all gates, log all access, automatic closing, intrusion detection. Emergency egress required by fire code."
  },
  {
    id: 14,
    front: "What is asset tracking and why use it?",
    back: "Asset tracking monitors location/status of equipment. Methods: barcode scanning, RFID tags (passive/active), GPS (outdoor), asset management software. Benefits: prevent theft, track inventory, audit compliance, lifecycle management, rapid location. Tags attached to: servers, laptops, network equipment. Regular audits verify presence. Especially important for: mobile assets, high-value equipment."
  },
  {
    id: 15,
    front: "What are RFID tags for asset tracking?",
    back: "RFID (Radio Frequency Identification) tags enable wireless tracking. Passive: no battery, powered by reader, short range (few feet), cheap. Active: battery-powered, long range (100+ feet), expensive, real-time location. Uses: inventory, access control, theft prevention. Read at: doorways, checkpoints. Benefits: no line-of-sight needed (vs barcode), bulk reading, automation. Data centers use for equipment tracking."
  },
  {
    id: 16,
    front: "What is tamper detection?",
    back: "Tamper detection alerts when equipment is opened/moved. Methods: tamper-evident seals (break if opened), electronic sensors (detect case opening), motion sensors, cable locks. Uses: server rooms, network closets, kiosks. Benefits: detect insider threats, unauthorized access, theft attempts. Response: alert security, lock account, log event. Especially important for: unsupervised locations, after-hours."
  },
  {
    id: 17,
    front: "What is HVAC and why is it critical for data centers?",
    back: "HVAC (Heating, Ventilation, Air Conditioning) maintains optimal environment. Requirements: temperature 64-80°F (18-27°C), humidity 40-60%, proper airflow, filtration (dust). Why critical: equipment overheats without cooling, condensation from humidity, dust causes failures. Design: redundant units (N+1 or 2N), hot aisle/cold aisle, monitor continuously. HVAC failure = rapid temperature rise = emergency shutdown."
  },
  {
    id: 18,
    front: "What temperature and humidity ranges are ideal for data centers?",
    back: "Temperature: 64-80°F (18-27°C) per ASHRAE guidelines. Lower = energy waste, higher = overheating. Humidity: 40-60% relative humidity. Too low (<40%) = static electricity (ESD damage). Too high (>60%) = condensation (corrosion, shorts). Monitor continuously. Alert on: deviations, rate of change. Many outages caused by HVAC failures. Test backup systems regularly."
  },
  {
    id: 19,
    front: "What fire suppression systems are used in data centers?",
    back: "Types: Clean agent (FM-200, Novec, Inergen) - safe for equipment, displace oxygen. Pre-action sprinkler - requires two triggers, delays water release. Dry pipe - air-filled, water enters only when triggered. NOT standard sprinklers (water damage). Detection: smoke, heat, flame. Zones: isolate affected areas. Manual activation stations. Regular testing required. VESDA (very early smoke detection)."
  },
  {
    id: 20,
    front: "What is flood/water detection?",
    back: "Water detection alerts to leaks before major damage. Sensors placed: under raised floors, near HVAC, around pipes, entry points. Types: spot sensors (specific location), rope sensors (along entire path). Alert: immediately upon detection. Response: locate source, shut off water, assess damage. Sources: roof leaks, HVAC condensation, pipes, flooding. Water + electricity = disaster. Critical in data centers."
  },
  {
    id: 21,
    front: "What is hot aisle/cold aisle design?",
    back: "Data center layout optimizing cooling efficiency. Cold aisle: faces equipment intakes, supplied cool air. Hot aisle: faces equipment exhausts, returns hot air. Alternating rows: rack-cold-rack-hot-rack. Benefits: efficient cooling, lower costs, consistent temperatures. Enhancements: containment (plastic curtains/doors seal aisles), prevents mixing hot/cold air. Industry standard design. Improves: PUE, capacity, equipment lifespan."
  },
  {
    id: 22,
    front: "What is rack security?",
    back: "Rack security controls access to equipment within racks. Methods: locking doors (keyed, combination), side panels locked, cable locks, intrusion detection. Best practices: different keys per rack, log access, restrict key distribution, camera coverage, cable management prevents tampering. Open racks: easier access but no security. Enclosed racks: physical protection, airflow management. Lock both front and rear doors."
  },
  {
    id: 23,
    front: "What is proper cable management for security?",
    back: "Cable management impacts security and operations. Security benefits: organized cables harder to tamper with, easier to notice unauthorized changes, prevents accidental disconnection. Use: cable trays, velcro straps (not zip ties), proper labeling, color coding, documentation. Avoid: loose cables, unlabeled cables, rats nests. Vertical/horizontal management in racks. Professional appearance indicates good security practices."
  },
  {
    id: 24,
    front: "What wireless physical security concerns exist?",
    back: "War driving: driving around detecting wireless networks (map vulnerabilities). War chalking: marking locations of open WiFi (less common now). Rogue access points: unauthorized APs bypass security. Evil twin: fake AP mimicking legitimate one. Physical security: place APs high/secured, disable unused ports, MAC filtering (limited), monitor for rogues, proper antenna placement (minimize signal bleed outside building)."
  },
  {
    id: 25,
    front: "What is war driving?",
    back: "War driving: driving/walking with WiFi device mapping wireless networks. Tools: laptop, WiFi adapter, GPS, software (Kismet, NetStumbler). Discovers: SSIDs, security (open/encrypted), signal strength, locations. Legal gray area (passive scanning generally legal). Defense: strong encryption (WPA3), don't broadcast SSID (minor help), monitor for scanning activity, WIDS/WIPS. Awareness: your wireless is visible outside building."
  },
  {
    id: 26,
    front: "What are rogue access points and how to detect them?",
    back: "Rogue AP: unauthorized AP connected to network (insider threat or attack). Bypasses: firewall, security policies. Risks: unauthorized access, data exfiltration, backdoor. Detection: wireless IDS/IPS, regular scans, monitor switch MAC tables, physical inspections, wired-side detection (DHCP, MAC addresses). Prevention: port security, NAC, network monitoring, policy enforcement. Serious security threat - employees plug in home routers."
  },
  {
    id: 27,
    front: "What is a wireless site survey for security?",
    back: "Site survey maps: RF coverage, signal strength, interference, security posture. Security focus: signal bleed outside facility (eavesdropping risk), optimal AP placement, identify rogue APs/evil twins, channel optimization. Tools: WiFi analyzer, spectrum analyzer, heat mapping. Perform: before deployment, after changes, periodically (detect rogues). Minimize signal outside building, maximize inside. Balance coverage vs security."
  },
  {
    id: 28,
    front: "Quick scenario: Securing a server room. What physical security measures?",
    back: "Access control: badge reader + biometric, mantrap entry. Monitoring: cameras (24/7 recording), motion sensors. Environment: HVAC (redundant), temperature/humidity monitors, fire suppression (clean agent). Equipment: locked racks, cable management, tamper detection. Perimeter: solid walls (not drywall), locked door, no windows. Power: UPS, generator. Access log, visitor escort policy, regular audits."
  },
  {
    id: 29,
    front: "What is the principle of defense in depth for physical security?",
    back: "Defense in depth uses multiple overlapping security layers. If one fails, others still protect. Layers: perimeter (fence), building (locks), room (access control), rack (locks), device (passwords). Each layer: delays attacker, increases detection chance. No single perfect security measure. Examples: fence + cameras + guards + badge reader + biometrics. Layered approach is industry standard."
  },
  {
    id: 30,
    front: "Speed drill: Match control to purpose - Mantrap, Bollards, RFID, Hot aisle, CCTV, Biometrics",
    back: "Mantrap: prevent tailgating. Bollards: prevent vehicle attacks. RFID: asset tracking. Hot aisle: cooling efficiency. CCTV: monitoring/recording. Biometrics: unique authentication. Know physical security controls for exam!"
  }
];