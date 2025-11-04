# Lesson 20: Physical and Environmental Security

**Estimated Time:** 20-25 minutes  
**Domain:** Network Security  
**Exam Objectives Covered:** 4.1 - Physical Security

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand physical security controls (badges, biometrics, guards, CCTV)
- Explain biometric authentication types
- Identify physical barriers (locks, mantraps, bollards, fencing)
- Understand asset tracking methods (RFID, tamper detection)
- Explain environmental controls (HVAC, temperature, humidity)
- Describe fire suppression systems
- Understand datacenter security design
- Explain hot aisle/cold aisle containment
- Identify wireless physical security threats (war driving, rogue APs)

---

## Video Resources

🔹 **Physical Security:** [Physical Security Controls - Professor Messer](https://www.youtube.com/watch?v=XZN6tm5N_0Q)  
🔹 **Datacenter Security:** [Data Center Design - PowerCert](https://www.youtube.com/watch?v=VmEfXkjJxvI)  
🔹 **Biometrics:** [Biometric Authentication - NetworkChuck](https://www.youtube.com/watch?v=Gh1kWwl2gu8)  
🔹 **Environmental Controls:** [HVAC and Cooling - Sunny Classroom](https://www.youtube.com/watch?v=TqHjobhbqKM)

---

## Introduction

Your network has world-class firewalls, encrypted VPNs, multi-factor authentication, and intrusion detection systems. You're 100% secure, right?

**Then someone walks into your unlocked server room and walks out with hard drives full of data.**

**Physical security is the foundation of all other security.**

The strongest password in the world doesn't matter if someone can physically access the server console. Encryption is useless if they steal the drives. Firewalls are irrelevant if they cut network cables. All your logical security crumbles without physical protection.

**Why does this matter for Network+?**

The exam tests physical security controls (badges, biometrics, barriers), environmental monitoring (temperature, humidity, fire suppression), datacenter design (hot/cold aisles), and physical threats (theft, unauthorized access, environmental damage).

**Today's mission:** Master physical security - from access controls and barriers to environmental monitoring and datacenter design. Learn how to protect the physical infrastructure that networks depend on.

Let's lock down the physical layer.

---

## Physical Security Controls

### Badge Readers and Access Cards

**Access cards control who can enter secure areas.**

**Types:**

**Magnetic stripe cards:**
- Credit card-style stripe
- Data stored on magnetic stripe
- Swipe through reader
- Inexpensive but easily copied
- Being phased out (less secure)

**Proximity cards (RFID):**
- Hold near reader (no contact)
- RFID chip broadcasts ID
- Range: few inches
- More secure than magnetic stripe
- Still vulnerable to cloning

**Smart cards:**
- Embedded microprocessor chip
- Contact or contactless
- Store encryption keys, certificates
- Two-factor authentication (something you have + PIN)
- Most secure card type
- Example: CAC (Common Access Card), PIV (Personal Identity Verification)

**Implementation:**
- Card readers at all entry points
- Different access levels (executive area, server room, general office)
- Logging (track who enters where and when)
- Time restrictions (card works only during business hours)

**Best practices:**
- Require badge visible at all times
- Deactivate lost/stolen cards immediately
- Audit access logs regularly
- Expire cards (periodic renewal)

**Memory trick - Card types (MPS):**
- **M**agnetic stripe (least secure)
- **P**roximity/RFID (medium security)
- **S**mart card (most secure)

---

### Biometrics

**Biometric authentication uses physical characteristics to verify identity.**

**Common types:**

**Fingerprint:**
- Most common biometric
- Scans fingerprint pattern
- Fast and convenient
- Can be defeated (lifted fingerprints, fake fingers)
- Works for most people (some have damaged fingerprints)

**Retina scan:**
- Scans blood vessel pattern in back of eye
- Very accurate
- Invasive (requires looking into device)
- Expensive
- Rarely used

**Iris scan:**
- Scans colored part of eye
- Very accurate
- Less invasive than retina
- Works through glasses
- More common than retina scan

**Facial recognition:**
- Analyzes facial features
- Convenient (no contact)
- Cameras can scan from distance
- Accuracy varies (lighting, angle, aging)
- Privacy concerns

**Voice recognition:**
- Analyzes voice patterns
- Convenient (phone-based authentication)
- Can be defeated (recordings)
- Background noise affects accuracy

**Palm vein:**
- Scans vein pattern in palm
- Very secure (internal, can't be copied)
- Contactless
- Expensive

---

### Biometric Concepts

**False Acceptance Rate (FAR):**
- System incorrectly accepts unauthorized person
- Security risk (attacker gains access)
- Lower is better

**False Rejection Rate (FRR):**
- System incorrectly rejects authorized person
- Usability problem (legitimate user denied)
- Lower is better

**Crossover Error Rate (CER):**
- Point where FAR = FRR
- Lower CER = more accurate system
- Used to compare biometric systems

**Trade-off:**
- Increase security (lower FAR) → More false rejections (higher FRR)
- Increase convenience (lower FRR) → More false acceptances (higher FAR)

**Enrollment:**
- Initial biometric capture
- Creates template stored in system
- Multiple samples for better accuracy

**Memory trick - Biometric errors (FAR CER):**
- **F**alse **A**cceptance - attacker gets in
- **F**alse **R**ejection - real user denied
- **C**rossover **E**rror **R**ate - where they meet

---

### Key Fobs and Tokens

**Physical devices that generate one-time passwords.**

**Types:**

**Hardware token:**
- Small device with display
- Generates code every 30-60 seconds
- User enters code with password
- Two-factor authentication (something you have + something you know)
- Example: RSA SecurID

**Key fob:**
- RFID device for physical access
- May also generate OTP
- Attached to keychain

**USB security key:**
- Plugs into computer
- FIDO2/U2F authentication
- Example: YubiKey

**Benefits:**
- Two-factor authentication
- Time-based (codes expire)
- Can't be guessed or bruted

**Risks:**
- Lost/stolen token
- Battery dies (device useless)
- Must carry physical device

---

### Security Guards

**Human security personnel provide:**

**Active monitoring:**
- Watch cameras in real-time
- Respond to alerts
- Patrol facilities

**Access control:**
- Verify identification
- Check visitor badges
- Escort visitors

**Deterrence:**
- Visible presence discourages crime

**Response:**
- Investigate incidents
- Detain intruders
- Coordinate with law enforcement

**Advantages:**
- Can make judgment calls
- Handle unexpected situations
- Physical intervention

**Limitations:**
- Expensive (24/7 coverage)
- Human error
- Can be social engineered

**Best practice:** Combine guards with technology (cameras, sensors, access controls)

---

### Video Surveillance (CCTV)

**Closed-Circuit Television provides visual monitoring and recording.**

**Components:**

**Cameras:**
- Fixed position or PTZ (Pan-Tilt-Zoom)
- Indoor or outdoor rated
- Night vision (infrared)
- Resolution (1080p, 4K)

**DVR/NVR:**
- Digital Video Recorder (analog cameras)
- Network Video Recorder (IP cameras)
- Stores footage
- Retention period (30-90 days typical)

**Monitoring:**
- Live viewing
- Motion detection alerts
- Video analytics (facial recognition, object detection)

**Placement:**
- All entrances/exits
- Parking lots
- Server rooms
- High-value areas
- Overlapping coverage (no blind spots)

**Best practices:**
- Secure camera feeds (encryption)
- Protect NVR (locked room, access controls)
- Regular backup of footage
- Proper lighting (cameras need light)
- Signage (notify people of surveillance)

**Legal considerations:**
- Privacy laws (can't record bathrooms, changing rooms)
- Audio recording may require consent
- Retention policies

---

### Motion Detection

**Sensors detect movement in protected areas.**

**Types:**

**Passive Infrared (PIR):**
- Detects body heat
- Common in security systems
- Indoor use
- False positives (pets, HVAC)

**Microwave:**
- Emits microwave signals
- Detects movement based on reflection
- Can penetrate walls (wider coverage)
- More false positives

**Dual technology:**
- Combines PIR + microwave
- Both must trigger (fewer false alarms)
- More expensive

**Use cases:**
- After-hours security
- Restricted areas
- Trigger lights/cameras
- Alert security

---

## Physical Barriers

### Locks

**Primary physical security control.**

**Types:**

**Traditional key locks:**
- Mechanical pin tumbler
- Simple, inexpensive
- Keys can be copied
- Lockpicking possible
- No audit trail

**Electronic locks:**
- Keypad entry (PIN code)
- Card reader
- Biometric
- Audit trail (logs access)
- Remote management
- Can integrate with access control system

**Cipher locks:**
- Mechanical keypad
- No power required
- No card or key to lose
- Code can be shared (less secure)

**Deadbolts:**
- More secure than standard locks
- Require key on both sides (prevent breaking window to unlock)

**Best practices:**
- Server rooms: Electronic locks + logging
- Critical systems: Two-factor (card + PIN or biometric)
- Emergency exits: Allow exit without key (fire code)
- Change codes/rekey regularly

**Memory trick - Lock security (TEC):**
- **T**raditional (least secure, no logging)
- **E**lectronic (medium, has logging)
- **C**ipher (mechanical keypad, no power)

---

### Mantraps

**Mantrap is a small room with two doors that never open simultaneously.**

**How it works:**

```
Outside → [Door 1] → [Mantrap Space] → [Door 2] → Secure Area
```

1. Person approaches Door 1
2. Door 1 opens (after authentication)
3. Person enters mantrap
4. Door 1 closes and locks
5. Person authenticates at Door 2
6. Door 2 opens
7. Person enters secure area
8. Door 2 closes

**Prevents:**
- Tailgating (following authorized person)
- Piggybacking (with permission)
- Forced entry (can't rush both doors)

**Authentication levels:**
- Door 1: Basic (badge)
- Door 2: Enhanced (badge + PIN + biometric)

**Use cases:**
- Datacenters
- Server rooms
- Research facilities
- High-security areas

**Best practices:**
- Video surveillance inside mantrap
- Weight sensors (detect multiple people)
- Guard monitoring
- Emergency release (fire safety)

---

### Bollards

**Bollards are short, sturdy posts that prevent vehicle access.**

**Types:**

**Fixed bollards:**
- Permanently installed
- Concrete or steel
- Cannot be moved

**Removable bollards:**
- Can be removed when needed (deliveries)
- Locked in place normally

**Retractable bollards:**
- Lower into ground (remote control)
- Allow authorized vehicles
- Expensive

**Use cases:**
- Protect building entrances from vehicle attacks
- Prevent vehicle access to pedestrian areas
- Protect critical infrastructure

**Placement:**
- Front of building entrances
- Around outdoor equipment
- Perimeter security

---

### Fencing and Gates

**Perimeter security to define boundaries and control access.**

**Fence types:**

**Chain-link:**
- 6-8 feet typical
- Can add barbed wire on top
- Inexpensive
- See-through (good for visibility)

**Privacy fence:**
- Solid panels
- Blocks visibility
- More expensive

**Anti-climb fence:**
- Small mesh (no footholds)
- Difficult to climb
- High-security facilities

**Security ratings:**
- Standard: 6-foot chain-link
- High security: 8-foot with barbed wire
- Critical: 8-foot anti-climb with razor wire + intrusion detection

**Gates:**
- Access control (card reader, keypad)
- Vehicle gates (with bollards/barriers)
- Pedestrian gates (turnstiles)
- Emergency egress (exits that don't allow entry)

**Perimeter lighting:**
- Illuminate entire perimeter
- No dark areas for hiding
- Motion-activated lights

**Memory trick - Fence heights (SHA):**
- **S**tandard security: 6 feet
- **H**igh security: 8 feet
- **A**dd barbed wire on top

---

## Asset Tracking

### RFID Tags

**Radio Frequency Identification tracks physical assets.**

**How it works:**
- RFID tag attached to asset (laptop, server, etc.)
- Tag contains unique ID
- RFID reader scans tags
- System logs asset location and movement

**Types:**

**Active RFID:**
- Battery-powered
- Broadcasts signal
- Long range (100+ feet)
- More expensive
- Track vehicles, large equipment

**Passive RFID:**
- No battery
- Powered by reader signal
- Short range (few feet)
- Inexpensive
- Track smaller assets

**Benefits:**
- Inventory management
- Theft prevention
- Compliance (track equipment location)
- Automated checkout (know what leaves building)

**Limitations:**
- Tags can be removed
- Requires readers at all exits
- Metal/liquid can interfere

---

### Asset Management Systems

**Software tracks hardware and software assets.**

**What to track:**
- Hardware (servers, switches, laptops, phones)
- Software licenses
- Warranties and support contracts
- Location and assigned user
- Purchase date and cost

**Barcode/QR code:**
- Physical label on asset
- Scan for inventory
- Cheaper than RFID
- Requires line-of-sight scanning

**Benefits:**
- Know what you have
- Track warranty expirations
- Plan replacements
- Prevent theft
- License compliance

---

### Tamper Detection

**Detect unauthorized physical access to devices.**

**Methods:**

**Tamper seals:**
- Stickers that show if removed
- Leave "VOID" pattern when peeled
- Indicate case opened

**Tamper-evident cases:**
- Screws hidden or special
- Breakable tabs
- Obvious when opened

**Tamper sensors:**
- Electronic detection
- Trigger alert if case opened
- Common in ATMs, kiosks

**Cable locks:**
- Physical lock securing device
- Prevents theft
- Example: Kensington lock

**Use cases:**
- Protect servers from unauthorized access
- Secure networking equipment
- Prevent hardware tampering
- Detect physical intrusion

---

## Environmental Controls

### HVAC Systems

**Heating, Ventilation, and Air Conditioning keeps datacenters operational.**

**Why it matters:**
- Servers generate massive heat
- Overheating causes hardware failure
- Downtime costs money
- Equipment damage expensive

**Cooling requirements:**
- Typical datacenter: 64-75°F (18-24°C)
- Hot aisle/cold aisle design (explained below)
- Redundant HVAC (one unit fails, others continue)

**Monitoring:**
- Temperature sensors throughout datacenter
- Alert when temperature rises
- Automatic failover to backup HVAC

**Humidity control:**
- Optimal: 40-60% relative humidity
- Too low → Static electricity (damages electronics)
- Too high → Condensation (shorts circuits)

---

### Temperature Monitoring

**Continuous monitoring prevents overheating disasters.**

**What to monitor:**
- Ambient temperature (room)
- Device internal temperature (CPU, drives)
- Inlet temperature (air entering device)
- Outlet temperature (air exiting device)

**Alert thresholds:**
- Normal: 64-75°F (18-24°C)
- Warning: 75-80°F (24-27°C)
- Critical: >80°F (>27°C)

**Don't wait for failure** - alert on rising temperature trends.

**Temperature sensors:**
- Standalone sensors (networked)
- SNMP-enabled (integrated monitoring)
- Multiple sensors (hot spots, cold spots)

---

### Fire Suppression Systems

**Protect against fire damage without destroying equipment.**

**Water sprinklers:**
- Effective for fire
- Destroys electronics
- NOT for datacenters (use only as last resort)

**Gas suppression systems:**

**FM-200 (HFC-227ea):**
- Clean agent (no residue)
- Safe for occupied spaces
- Displaces oxygen, suppresses fire
- Most common datacenter system

**Inergen:**
- Nitrogen + argon + CO2 mix
- Reduces oxygen (fire needs oxygen)
- Safe for humans
- Environmentally friendly

**CO2:**
- Effective but dangerous to humans
- Must evacuate before discharge
- Less common (safety concerns)

**Pre-action systems:**
- Two-stage activation
- Alarm first (time to respond)
- Suppression second (if not cancelled)
- Prevents accidental discharge

**Best practices:**
- Regular inspection/testing
- Manual discharge capability
- Alarm before discharge (evacuate)
- Emergency shut-off (if accidental)

**Memory trick - Fire suppression (WGP):**
- **W**ater (avoid in datacenters)
- **G**as (FM-200, Inergen - safe for equipment)
- **P**re-action (alarm before discharge)

---

### Flood Detection

**Water leaks can destroy datacenters.**

**Sources:**
- Roof leaks
- Plumbing failures
- HVAC condensation
- Fire suppression discharge
- Natural flooding

**Detection:**
- Water sensors under raised floors
- Near HVAC units
- Below water pipes
- Low-lying areas

**Response:**
- Automatic alert
- Shutdown affected systems
- Drain water
- Assess damage

**Prevention:**
- No water pipes above equipment
- Raised floors (water drains below)
- Regular inspections
- Backup sump pumps

---

## Datacenter Security

### Hot Aisle/Cold Aisle

**Efficient cooling design separates hot and cold air.**

**How it works:**

```
[Cold Aisle] - Front of racks - cool air intake
      ↓
 [Rack] [Rack] [Rack]
      ↓
[Hot Aisle] - Back of racks - hot air exhaust
      ↓
[HVAC Return] - pulls hot air back to cooling
```

**Cold aisle:**
- Racks face each other
- Front (intake) of servers facing cold aisle
- Cold air supplied to aisle
- Servers pull in cold air

**Hot aisle:**
- Backs of racks face each other
- Hot air exhausted into hot aisle
- Hot air returned to HVAC for cooling

**Benefits:**
- Efficient cooling (don't mix hot and cold)
- Lower energy costs
- Prevents hot spots
- More predictable temperatures

**Containment:**
- Cold aisle containment: Enclose cold aisles
- Hot aisle containment: Enclose hot aisles
- Prevents air mixing (more efficient)

---

### Rack Security

**Physical security for server racks.**

**Measures:**

**Locked rack doors:**
- Keyed or electronic locks
- Control access to equipment
- Prevent unauthorized tampering

**Clear or mesh doors:**
- Visibility into rack
- Airflow maintained
- Security maintained

**Cable management:**
- Organize cables
- Prevent accidental disconnection
- Easier troubleshooting
- Professional appearance

**Rack placement:**
- Secure room (locked)
- Video surveillance
- Access logging

**Labeling:**
- Clear labels on all equipment
- Cable labels on both ends
- Port labels
- Power circuit labels

---

## Wireless Security (Physical Aspects)

### War Driving

**War driving is driving around with laptop/phone looking for wireless networks.**

**Purpose (attacker):**
- Map wireless networks
- Find unsecured networks
- Identify vulnerable APs
- Gather information for attack

**Tools:**
- Wi-Fi scanning apps
- GPS (map AP locations)
- Directional antennas (extend range)

**Defense:**
- Strong encryption (WPA2/WPA3)
- Disable SSID broadcast (security through obscurity - limited)
- Position APs to minimize signal outside building
- Monitor for rogue APs

---

### Rogue Access Points

**Unauthorized access points connected to network.**

**Types:**

**Malicious rogue AP:**
- Attacker installs AP
- Bypasses security controls
- Direct network access

**Employee-installed AP:**
- Well-intentioned but creates risk
- Not secured properly
- Shadow IT

**Evil twin:**
- Fake AP mimicking legitimate network
- Users connect to attacker's AP
- Man-in-the-middle attack

**Detection:**
- Wireless site surveys
- Rogue AP detection tools
- Network monitoring (unexpected MAC addresses)
- Physical inspection

**Prevention:**
- Policy prohibiting unauthorized APs
- Port security (MAC filtering)
- 802.1X authentication
- Regular wireless audits

---

### Site Surveys

**Wireless site surveys map coverage, signal strength, and interference.**

**Types:**

**Passive survey:**
- Listen only (don't transmit)
- Measure existing signals
- Identify interference

**Active survey:**
- Connect to APs
- Measure throughput
- Test actual performance

**Predictive survey:**
- Software simulation
- Plan before deployment
- Less accurate but faster

**What surveys identify:**
- Coverage areas
- Dead zones
- Interference sources
- Optimal AP placement
- Rogue APs

**Output:**
- Heat maps (signal strength)
- Channel recommendations
- AP placement recommendations

---

## Key Exam Tips

**Physical security controls:**
- **Badges:** Magnetic stripe (least secure), proximity/RFID (medium), smart card (most secure)
- **Biometrics:** FAR (false accept), FRR (false reject), CER (crossover point)
- **Guards:** Human judgment, expensive 24/7

**Physical barriers:**
- **Mantraps:** Two doors, never open simultaneously (prevent tailgating)
- **Bollards:** Protect against vehicle attacks
- **Fencing:** 6' standard, 8' high security

**Environmental:**
- **Temperature:** 64-75°F optimal for datacenters
- **Humidity:** 40-60% relative humidity
- **Fire suppression:** FM-200 or Inergen (gas, safe for equipment)

**Datacenter:**
- **Hot/cold aisle:** Separate hot exhaust from cold intake for efficiency
- **Raised floors:** Cable management and airflow

**Wireless physical:**
- **War driving:** Scanning for wireless networks while mobile
- **Rogue AP:** Unauthorized access point on network

**Common exam questions:**
- "What prevents tailgating?" → Mantrap
- "What's optimal datacenter humidity?" → 40-60%
- "What fire suppression for datacenters?" → Gas (FM-200, Inergen)
- "What's war driving?" → Scanning for wireless networks while driving

---

## Key Takeaways

- [ ] **Physical security is the foundation** - logical security fails without it
- [ ] **Badge types:** Magnetic stripe (least secure), proximity (medium), smart card (most secure)
- [ ] **Biometrics:** FAR (false accept), FRR (false reject), CER (crossover)
- [ ] **Security guards provide judgment** and physical response
- [ ] **CCTV provides monitoring** and recording (30-90 day retention typical)
- [ ] **Locks:** Traditional (no logging), electronic (with logging)
- [ ] **Mantraps prevent tailgating** - two doors never open together
- [ ] **Bollards protect against vehicles**
- [ ] **Fencing:** 6' standard, 8' high security
- [ ] **RFID tracks assets** - active (long range), passive (short range)
- [ ] **Temperature:** 64-75°F optimal for datacenters
- [ ] **Humidity:** 40-60% (too low = static, too high = condensation)
- [ ] **Fire suppression:** Gas systems (FM-200, Inergen) for datacenters, not water
- [ ] **Hot/cold aisle separates air flows** for efficient cooling
- [ ] **War driving scans for wireless** while mobile
- [ ] **Rogue APs are unauthorized** access points on network

---

## Check Your Understanding

**1. Compare the three types of access cards in terms of security.**

<details>
<summary>Show Answer</summary>
<strong>Magnetic stripe (least secure, easily copied), proximity/RFID (medium, can be cloned), smart card (most secure, embedded processor).</strong> Magnetic stripe like credit cards - data on stripe, swipe through reader, inexpensive but easily copied/skimmed. Proximity cards use RFID - hold near reader, no contact, more secure than magnetic but still vulnerable to cloning. Smart cards have embedded microprocessor - can store encryption keys/certificates, require contact or very close proximity, most secure, support two-factor (card + PIN). Trend is toward smart cards for high-security environments.
</details>

**2. What are FAR, FRR, and CER in biometric systems?**

<details>
<summary>Show Answer</summary>
<strong>FAR (False Acceptance Rate) = incorrectly accepts unauthorized person. FRR (False Rejection Rate) = incorrectly rejects authorized person. CER (Crossover Error Rate) = point where FAR = FRR.</strong> FAR is security risk (attacker gets in). FRR is usability problem (legitimate user denied). Trade-off: increase security (lower FAR) → more false rejections (higher FRR). CER is used to compare biometric systems - lower CER = more accurate system. You can't have both FAR and FRR at zero - must balance security vs usability.
</details>

**3. How does a mantrap work and what does it prevent?**

<details>
<summary>Show Answer</summary>
<strong>Mantrap is small room with two doors that never open simultaneously. Prevents tailgating and piggybacking.</strong> Person authenticates at Door 1, enters mantrap, Door 1 closes, person authenticates at Door 2 (often stronger authentication), Door 2 opens, person enters secure area. Can't rush both doors - if Door 1 open, Door 2 locked. Prevents tailgating (following authorized person through door) and piggybacking (entering with permission but not authorized). Used in datacenters, server rooms, high-security areas. Best practice: video surveillance inside mantrap, weight sensors detect multiple people.
</details>

**4. What are bollards and what do they protect against?**

<details>
<summary>Show Answer</summary>
<strong>Bollards are short, sturdy posts (concrete or steel) that prevent vehicle access. Protect against vehicle attacks on buildings.</strong> Types: fixed (permanent), removable (can remove for deliveries), retractable (lower into ground remotely). Placed in front of building entrances, around outdoor equipment, perimeter security. Protect critical infrastructure from vehicle ramming attacks. Also prevent accidental vehicle damage and control vehicle access to pedestrian areas.
</details>

**5. What's the optimal temperature and humidity range for datacenters?**

<details>
<summary>Show Answer</summary>
<strong>Temperature: 64-75°F (18-24°C). Humidity: 40-60% relative humidity.</strong> Servers generate massive heat - cooling critical to prevent hardware failure. Temperature >80°F causes equipment damage/failure. Humidity too low (<40%) causes static electricity which damages electronics. Humidity too high (>60%) causes condensation which shorts circuits. Monitor continuously with sensors throughout datacenter. Alert on rising trends before reaching critical levels. Redundant HVAC systems - one fails, others continue. Hot/cold aisle design for efficient cooling.
</details>

**6. Why are water sprinklers not used in datacenters?**

<details>
<summary>Show Answer</summary>
<strong>Water destroys electronics - use gas suppression systems instead (FM-200, Inergen).</strong> Water is effective for fires but ruins servers, switches, storage. Gas systems (clean agents) suppress fire by displacing oxygen without leaving residue and without damaging equipment. FM-200 and Inergen are safe for occupied spaces (people can remain during discharge). Pre-action systems alarm first (time to respond) before discharge (prevents accidental damage). Water sprinklers only as absolute last resort in datacenters.
</details>

**7. Explain hot aisle/cold aisle design in datacenters.**

<details>
<summary>Show Answer</summary>
<strong>Efficient cooling design that separates hot exhaust air from cold intake air.</strong> Cold aisle: racks face each other, server fronts (intake) facing cold aisle, cold air supplied. Hot aisle: backs of racks face each other, hot air exhausted into hot aisle, returned to HVAC for cooling. Benefits: prevents mixing hot/cold air (more efficient), lower energy costs, prevents hot spots, more predictable temperatures. Containment (enclosing aisles) further improves efficiency. Standard datacenter design for proper thermal management.
</details>

**8. What is war driving?**

<details>
<summary>Show Answer</summary>
<strong>War driving is driving around with laptop/phone scanning for wireless networks to map them and identify vulnerabilities.</strong> Attackers use Wi-Fi scanning apps, GPS (map AP locations), directional antennas (extend range). Purpose: map wireless networks, find unsecured networks, identify vulnerable APs, gather info for attacks. Defense: strong encryption (WPA2/WPA3), position APs to minimize signal outside building, monitor for rogue APs. Also "war walking" (on foot), "war flying" (drone), "war chalking" (marking locations with symbols).
</details>

**9. What's a rogue access point and why is it dangerous?**

<details>
<summary>Show Answer</summary>
<strong>Rogue AP is unauthorized access point connected to network - bypasses security controls.</strong> Types: malicious (attacker installed for network access), employee-installed (well-intentioned but creates risk), evil twin (fake AP mimicking legitimate network for man-in-the-middle). Dangerous because: bypasses firewall and security controls, provides unauthorized network access, may be poorly secured. Detection: wireless site surveys, rogue AP detection tools, network monitoring (unexpected MAC addresses), physical inspection. Prevention: policy prohibiting unauthorized APs, port security, 802.1X authentication, regular audits.
</details>

**10. Why is RFID useful for asset tracking?**

<details>
<summary>Show Answer</summary>
<strong>RFID tags track physical asset location and movement automatically.</strong> Tag with unique ID attached to asset (laptop, server), RFID readers scan tags, system logs location/movement. Types: Active (battery-powered, long range 100+ feet, expensive - track vehicles/large equipment), Passive (no battery, powered by reader, short range, inexpensive - track smaller assets). Benefits: inventory management, theft prevention (know what leaves building), compliance (track equipment location), automated checkout. Limitations: tags can be removed, requires readers at exits, metal/liquid interfere.
</details>

**11. A server room is overheating. What should you check?**

<details>
<summary>Show Answer</summary>
<strong>Check: HVAC functioning, temperature sensors working, hot/cold aisle airflow, blocked vents, server density (too many in space), ambient temperature.</strong> Common causes: HVAC failure (check if running, filters clogged), blocked airflow (cables blocking vents, equipment placement), broken hot/cold aisle containment (hot/cold mixing), too many servers in space (exceeded cooling capacity), failed fans in equipment, temperature sensors malfunction (monitoring wrong location). Don't wait for failure - set up alerts for rising temperature trends. Redundant HVAC critical so one failure doesn't cause outage.
</details>

**12. What are best practices for datacenter physical security?**

<details>
<summary>Show Answer</summary>
<strong>Layered approach: perimeter (fencing, bollards), building (locked doors, guards, CCTV), room (badge + PIN/biometric, mantraps), rack (locked racks).</strong> Defense in depth: multiple security layers, each layer makes intrusion harder. Perimeter: fencing (6-8'), lighting, bollards. Building entrance: guards, badge readers, CCTV, visitor logging. Server room: mantrap (prevent tailgating), strong authentication (card + PIN or biometric), video surveillance, environmental monitoring (temperature, humidity, water). Racks: locked doors, cable management, clear labeling. Plus: audit logs (who accessed when), regular security audits, policy enforcement.
</details>

---

## Before Moving to Lesson 21

Make sure you can confidently:

- [ ] **Compare access card types** (magnetic stripe, proximity, smart)
- [ ] **Understand biometric concepts** (FAR, FRR, CER)
- [ ] **Explain mantrap operation**
- [ ] **Describe physical barriers** (locks, bollards, fencing)
- [ ] **Know datacenter environmental requirements** (64-75°F, 40-60% humidity)
- [ ] **Understand fire suppression** (gas systems for datacenters)
- [ ] **Explain hot/cold aisle design**
- [ ] **Identify wireless physical threats** (war driving, rogue APs)

**Study Strategy:**

**Today:**
- Draw hot/cold aisle diagram
- Create comparison chart for access card types
- Practice biometric concepts (FAR/FRR/CER)
- Make flashcards for environmental ranges

**Tomorrow (Day 21):**
- Review physical security controls
- Practice temperature/humidity ranges
- Review mantrap operation
- Compare fire suppression types

**Day 22:**
- Continue to Lesson 21 (Network Threats)
- Physical security protects against physical threats
- Network security protects against logical threats
- Both essential for complete security

Physical security is the foundation - without it, all other security is meaningless!

---

## Coming Up in Lesson 21: Network Threats and Vulnerabilities

You've learned about physical security protecting infrastructure.

**Next, you'll explore network threats:**

- DoS/DDoS attacks (SYN flood, UDP flood, amplification)
- On-path attacks (man-in-the-middle)
- ARP poisoning and MAC attacks
- DNS and VLAN attacks
- Social engineering (phishing, vishing, smishing)
- Malware types (virus, worm, trojan, ransomware)
- Vulnerabilities and security principles

**The connection:**

Lesson 20 covered physical security (protecting hardware and infrastructure). Lesson 21 covers network attacks (logical threats over the network). Physical security protects the "where" (facilities, equipment), network security protects the "what" (data, services). Both are essential - complete security requires protecting both physical and logical layers.

**See you in Lesson 21!**

---

*"A locked door is worth a thousand firewalls. Physical security is the foundation - without it, all your encryption, authentication, and monitoring are meaningless. Protect the physical layer first."*

---

# ✅ LESSON 20 COMPLETE!

**What You Just Learned:**
- ✅ Physical security is the foundation of all security
- ✅ Access cards: magnetic stripe (least secure), proximity (medium), smart card (most secure)
- ✅ Biometrics: FAR (false accept), FRR (false reject), CER (crossover)
- ✅ Mantraps prevent tailgating with two-door system
- ✅ Bollards protect against vehicle attacks
- ✅ Temperature: 64-75°F, Humidity: 40-60%
- ✅ Fire suppression: gas systems (FM-200, Inergen) for datacenters
- ✅ Hot/cold aisle separates intake and exhaust air
- ✅ War driving scans for wireless networks while mobile
- ✅ Rogue APs are unauthorized access points

**Next up: Network threats and attack types!**