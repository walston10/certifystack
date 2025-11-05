// Quiz for Lesson 20: Physical and Environmental Security

export const lesson20Quiz = [
  {
    id: 1,
    question: "A data center implements biometric authentication at the entrance using fingerprint scanners. During a security audit, the auditor expresses concern about relying solely on biometric access. What vulnerability is the auditor likely concerned about?",
    options: [
      "Biometric systems are too expensive to maintain",
      "Biometric data cannot be changed if compromised, and false acceptance rate (FAR) may allow unauthorized access",
      "Fingerprint scanners work too slowly for high-traffic areas",
      "Biometric systems are easier to defeat than traditional locks"
    ],
    correct: 1,
    explanation: "Biometric concerns: 1) Cannot be changed (compromised fingerprint data is permanent—you can't get new fingerprints), 2) False acceptance rate (FAR) - system incorrectly accepts unauthorized person, 3) False rejection rate (FRR) - system rejects authorized person, 4) Spoofing (fake fingerprints, photos for facial recognition). Best practice: multi-factor authentication—biometric + badge/PIN. Biometrics types: fingerprint, retina/iris scan, facial recognition, palm vein, voice. Balance security (low FAR) vs usability (low FRR)."
  },
  {
    id: 2,
    question: "A server room's environmental monitoring system alerts that temperature has risen from 68°F to 85°F over 30 minutes. The HVAC system is running normally. What is the most likely cause and immediate concern?",
    options: [
      "Normal temperature fluctuation, no action needed",
      "HVAC system failure requiring immediate technician call",
      "Possible cooling airflow blockage or equipment failure generating excessive heat; risk of equipment shutdown or damage",
      "Someone adjusted the thermostat to save energy"
    ],
    correct: 2,
    explanation: "Rapid temperature rise with functioning HVAC indicates: 1) Blocked airflow (cables/boxes blocking vents, failed server fans), 2) Equipment failure generating excessive heat, 3) Hot aisle/cold aisle breach, 4) Insufficient cooling capacity for load. Immediate risks: thermal throttling (reduced performance), emergency shutdown, hardware damage/failure. Actions: 1) Identify heat source (thermal camera, check equipment), 2) Improve airflow, 3) Shut down non-critical equipment if needed, 4) Verify HVAC capacity matches load. Ideal server room: 68-72°F (20-22°C)."
  },
  {
    id: 3,
    question: "An organization implements a mantrap at the data center entrance. An authorized employee badges in, the first door opens, they enter, and the first door closes. Before they badge the second door, an unauthorized person tries to follow them in. What is the mantrap designed to prevent?",
    options: [
      "Dust and debris from entering the facility",
      "Tailgating/piggybacking - unauthorized persons following authorized users through secure access points",
      "Temperature fluctuations from outside air",
      "Radio frequency interference"
    ],
    correct: 1,
    explanation: "Mantrap (access control vestibule) prevents tailgating: two interlocking doors where only one can open at a time. Process: 1) Person 1 badges first door → enters → first door closes, 2) Person 1 badges second door → exits mantrap, 3) Person 2 must badge first door (can't follow). Typically includes: security camera, intercom, weight sensors (detecting multiple people), guard station monitoring. Also prevents: unauthorized exit (data theft). Variations: turnstiles, security revolving doors. Used in: data centers, secure facilities, banks."
  },
  {
    id: 4,
    question: "A network closet on the third floor of an office building houses critical switches and routers. Employees frequently prop open the door with a trash can for convenience. What security risks does this create?",
    options: [
      "Improved ventilation reduces overheating risks",
      "Unauthorized physical access to network equipment allowing theft, tampering, console access, or cable disconnection",
      "No risk since the building is already secured",
      "Better access for maintenance technicians"
    ],
    correct: 1,
    explanation: "Physical security risks from unsecured network closets: 1) Equipment theft (switches, routers valuable), 2) Tampering (rogue device installation, configuration changes via console), 3) Cable disconnection (DoS), 4) Visual reconnaissance (seeing network topology), 5) Keylogger installation, 6) Unauthorized wireless AP installation. Controls: 1) Locked doors (card access/key), 2) Access logging, 3) Security cameras, 4) Disable unused console/USB ports, 5) Cable management preventing easy disconnection, 6) Visitor escort policy. Physical access = root access—security theater is ineffective without physical security."
  },
  {
    id: 5,
    question: "A data center uses hot aisle/cold aisle containment for cooling efficiency. During a walktrough, a technician notices server racks facing multiple directions rather than alternating. What problem does this create?",
    options: [
      "Improves flexibility for cable management",
      "Defeats the purpose of hot/cold aisle design by mixing hot exhaust with cold intake air, reducing cooling efficiency and creating hot spots",
      "Provides better redundancy for cooling systems",
      "Allows for easier equipment access"
    ],
    correct: 1,
    explanation: "Hot aisle/cold aisle design: alternate rack rows so server fronts (cold air intake) face cold aisles, server backs (hot exhaust) face hot aisles. HVAC supplies cold air to cold aisles, returns from hot aisles. Benefits: efficient cooling, prevents hot air recirculation, reduced energy costs. Misaligned racks mix hot/cold air, causing: hot spots, overcooling (wasted energy), reduced equipment life. Containment (physical barriers) improves efficiency further: cold aisle containment or hot aisle containment with ducting. Airflow management also includes: blanking panels, floor tiles, cable management."
  },
  {
    id: 6,
    question: "An office building's badge access system logs show an employee's badge was used to access the data center at 2:00 AM on Saturday. The employee claims they were home and haven't been to the office in weeks. What security concern does this indicate?",
    options: [
      "System clock is misconfigured showing wrong time",
      "Badge cloning, theft, or sharing allowing unauthorized access; or the employee is lying",
      "Badge readers are malfunctioning and creating false entries",
      "No concern since the employee has authorized access"
    ],
    correct: 1,
    explanation: "Badge access anomalies investigate: 1) Badge theft/cloning (RFID badges can be cloned), 2) Badge sharing (employees sharing credentials), 3) Stolen credentials, 4) Insider threat (employee lying), 5) System compromise (log manipulation). Response: 1) Review camera footage, 2) Disable compromised badge, 3) Issue new credentials, 4) Interview employee, 5) Check for data exfiltration, 6) Audit recent access. Prevention: 1) Multi-factor (badge + PIN/biometric), 2) Photo badges, 3) Access monitoring/alerts, 4) Regular audits, 5) Policy against credential sharing with termination consequences."
  },
  {
    id: 7,
    question: "A security assessment recommends implementing bollards around the data center building. What threat are bollards designed to mitigate?",
    options: [
      "Wireless signal interception from outside the building",
      "Vehicle ramming attacks where vehicles are used to breach perimeter security or cause physical damage",
      "Phishing attacks against employees",
      "Power outages from utility failures"
    ],
    correct: 1,
    explanation: "Bollards (sturdy posts/barriers) prevent vehicle attacks: 1) Ramming attacks (vehicle crashing through entrance), 2) Car bombs (preventing vehicle proximity), 3) Accidental collisions. Common in: government buildings, data centers, critical infrastructure, high-value targets. Types: fixed (permanent), removable (authorized vehicle access), retractable (automated), decorative (planters, sculptures doubling as barriers). Placement: building entrances, loading docks, utility access, perimeter. Complement with: fencing, gates, setback distance (distance between public areas and building), CCTV, security guards."
  },
  {
    id: 8,
    question: "A company's asset management system uses RFID tags on all network equipment. During inventory, several expensive switches show as being in the warehouse, but physically they're in different locations. What is the likely cause?",
    options: [
      "RFID technology is unreliable and should not be used",
      "Tags were moved without updating the system, or tags were swapped/removed (asset tracking failure or potential theft)",
      "RFID readers have unlimited range and detected wrong items",
      "Switches teleported to new locations"
    ],
    correct: 1,
    explanation: "RFID asset tracking challenges: 1) Tags can be removed/swapped (deliberate or neglect), 2) Database not updated when equipment moved, 3) Tag failure (damage, battery dead for active tags), 4) Equipment disposed without removing from inventory. Best practices: 1) Combine RFID with visual audits, 2) Tamper-evident tags, 3) Process for moves/changes, 4) Regular inventory reconciliation, 5) Automated alerts (equipment leaving facility without authorization). Benefits: fast inventory, theft detection, location tracking, lifecycle management. Active tags (battery-powered, longer range) vs passive tags (powered by reader, shorter range)."
  },
  {
    id: 9,
    question: "A small office's server room has a standard wet-pipe sprinkler system for fire suppression. The IT manager expresses concern about water damage to equipment. What alternative fire suppression system is more appropriate for electronics?",
    options: [
      "More powerful water sprinklers to extinguish fires faster",
      "Clean agent gas suppression systems (FM-200, Inergen) or pre-action sprinklers that don't damage sensitive electronics",
      "Remove fire suppression entirely to eliminate water damage risk",
      "Handheld fire extinguishers only"
    ],
    correct: 1,
    explanation: "Fire suppression for data centers: 1) Clean agent systems (FM-200, Novec 1230, Inergen)—gas that displaces oxygen, no residue, safe for electronics/people, 2) Pre-action sprinklers—require two triggers (heat + smoke) before water flows, reduces accidental discharge, 3) Dry pipe sprinklers—pipes empty until triggered. Avoid: wet pipe in server rooms (accidental discharge = destroyed equipment). Considerations: clean agents expensive but ideal, require sealed room, EPO (Emergency Power Off) integration. Also need: smoke detection (VESDA - Very Early Smoke Detection), fire-resistant construction, emergency procedures, trained staff."
  },
  {
    id: 10,
    question: "A data center's humidity monitoring shows 20% relative humidity. The operations team considers this acceptable since equipment is staying cool. What risk does low humidity create?",
    options: [
      "No risk - lower humidity is always better for electronics",
      "Increased electrostatic discharge (ESD) risk that can damage sensitive electronic components",
      "Equipment will overheat due to lack of moisture",
      "Improved cooling efficiency"
    ],
    correct: 1,
    explanation: "Humidity requirements for data centers: 40-60% relative humidity (ASHRAE recommendations). Low humidity (<40%) → ESD risk (static electricity damages components—you feel 3,000V shock, components damaged at 10V). High humidity (>60%) → condensation risk (short circuits, corrosion). Monitoring: hygrometers, automated alerts. Controls: humidifiers (add moisture), dehumidifiers (remove moisture), HVAC integration. ESD prevention: anti-static mats, wrist straps, proper grounding, controlled environment. Signs of humidity problems: static shocks, condensation on equipment, corrosion."
  },
  {
    id: 11,
    question: "A network administrator conducts a wireless site survey and discovers three unauthorized wireless access points broadcasting SSIDs that mimic the corporate network. These APs are found hidden in ceiling tiles. What security threat do these represent?",
    options: [
      "Harmless devices installed for better coverage",
      "Rogue access points that could intercept credentials, capture traffic, or provide unauthorized network access",
      "Leftover equipment from previous tenants",
      "Legitimate APs deployed by facilities management"
    ],
    correct: 1,
    explanation: "Rogue APs are unauthorized wireless access points. Threats: 1) Attacker-installed (evil twin attacks capturing credentials), 2) Employee-installed (shadow IT bypassing security), 3) Data exfiltration, 4) Man-in-the-middle attacks, 5) Network access for attackers. Detection: 1) Wireless site surveys (regular scans), 2) Wireless IPS (detects unauthorized APs), 3) Physical inspections, 4) Network access control (NAC) detecting unknown devices, 5) Rogue AP detection features in wireless controllers. Response: locate and remove, investigate data breach, update policies, employee training, technical controls (port security, 802.1X)."
  },
  {
    id: 12,
    question: "A company implements video surveillance (CCTV) in server rooms and network closets. To comply with privacy regulations and optimize storage, how long should surveillance footage typically be retained?",
    options: [
      "Forever - never delete any footage",
      "24 hours only to minimize storage costs",
      "30-90 days balancing investigation needs with storage costs and compliance requirements",
      "Surveillance footage should not be retained at all"
    ],
    correct: 2,
    explanation: "Surveillance retention considerations: 1) Investigation requirements (incidents may not be discovered immediately—30-90 days allows investigation), 2) Compliance mandates (some industries require specific retention), 3) Storage costs (high-resolution cameras = large files), 4) Privacy regulations (minimize retention of personal data). Best practices: 1) 30-90 days typical, 2) Longer for high-security areas, 3) Motion-activated recording (reduces storage), 4) Tiered storage (high-res short-term, compressed long-term), 5) Automatic deletion policies, 6) Secure storage (encrypted), 7) Access controls (who can view). Document retention policy, audit compliance."
  },
  {
    id: 13,
    question: "During a security assessment, the team discovers that facility cable runs through publicly accessible areas including a hallway and a parking garage. What physical security vulnerability does this create?",
    options: [
      "Improved cable accessibility for maintenance",
      "Cables could be tapped, cut, or damaged allowing eavesdropping, service disruption, or data interception",
      "No vulnerability since cables are insulated",
      "Better cooling for cables in open areas"
    ],
    correct: 1,
    explanation: "Cable security risks: 1) Tapping (intercept data - especially unencrypted), 2) Cutting (DoS), 3) Physical damage (accidental/intentional), 4) Visual inspection (reconnaissance—labeled cables reveal infrastructure). Protection: 1) Conduit/raceways (secure metal/PVC), 2) Locked cable trays, 3) Access controls to cable areas, 4) Fiber optic (harder to tap than copper), 5) Encryption (protects data if tapped), 6) Avoid labels revealing sensitive info, 7) Physical security (cameras, alarms). Critical cables (backbone, uplinks) need highest protection. Buried/aerial cables face similar risks—physical security extends beyond building."
  },
  {
    id: 14,
    question: "A data center's UPS (Uninterruptible Power Supply) shows battery runtime of only 5 minutes under full load, which is insufficient to safely shut down systems during power outages. What additional component should be integrated for longer backup power?",
    options: [
      "More UPS units connected in parallel",
      "Generator (diesel/natural gas) to provide long-term power backup with UPS bridging the gap until generator starts",
      "Solar panels for renewable backup power",
      "Larger server power supplies"
    ],
    correct: 1,
    explanation: "Layered power protection: 1) UPS (immediate switchover, 5-30 minute runtime—bridges to generator), 2) Generator (long-term power, starts in 10-60 seconds), 3) Dual utility feeds (different substations). UPS provides: instant power (no switchover delay), power conditioning (surge/sag protection), time for graceful shutdown. Generator provides: extended runtime (hours/days with refueling). Sizing: UPS handles 100% load for startup time, generator sized for sustained load plus cooling/lights. Testing: monthly UPS tests, quarterly generator tests, annual full failover. Also: redundant PDUs, dual power supplies in equipment, EPO (Emergency Power Off)."
  },
  {
    id: 15,
    question: "An organization implements badge readers, biometric scanners, security cameras, and mantraps at their data center entrance, but an audit reveals a loading dock door is often propped open for vendor deliveries. What security principle is being violated?",
    options: [
      "Defense in depth - multiple security layers",
      "Principle of least privilege",
      "Security is only as strong as the weakest link - sophisticated entrance security is bypassed by unsecured alternative access",
      "Separation of duties"
    ],
    correct: 2,
    explanation: "Weakest link principle: attackers exploit the easiest path. Sophisticated front entrance security is useless with unsecured loading dock. Common weak points: 1) Service entrances (loading docks, maintenance), 2) Emergency exits (alarmed but sometimes propped), 3) Roof access, 4) Windows, 5) Social engineering (convincing employees to bypass security). Comprehensive security requires: 1) All entry points secured equally, 2) Visitor management (escort, temporary badges), 3) Receiving area controls (inspect deliveries, don't allow unescorted vendor access), 4) Door alarms, 5) Regular audits finding bypasses, 6) Security awareness training. Defense in depth = multiple layers, but each layer must be complete."
  }
];

// Export for use in quiz component
export default lesson20Quiz;