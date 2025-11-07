# Lab 20 Answer Key: Physical and Environmental Security
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain Coverage:** Network Security (4.0)

---

## Section 1: Concept Check Answers

### Question 1: Three Authentication Factors
**Answer:**
- Something you **know**: Password, PIN, security question
- Something you **have**: Smart card, token, key fob
- Something you **are**: Fingerprint, iris scan, facial recognition

💡 **Bonus factor:** Something you do (behavioral biometrics) or Somewhere you are (location)

### Question 2: Mantrap Purpose
**Answer:**
A mantrap is a small room with two doors that cannot be opened simultaneously, preventing tailgating/piggybacking. One door must close before the other opens, ensuring only authorized individuals enter secure areas.

### Question 3: Data Center Environmental Ranges
**Answer:**
- Temperature: **64°F to 80°F** (18°C to 27°C)
- Humidity: **40% to 60%** relative humidity

### Question 4: Fire Suppression Systems
**Answer:**
- Water sprinkler (wet/dry pipe)
- FM-200 or other clean agents
- CO2 (carbon dioxide)
- Inert gas (Argon, Nitrogen)
- Dry chemical powder

### Question 5: Hot Aisle/Cold Aisle
**Answer:**
A data center layout where server racks face each other to create alternating hot and cold aisles. Cold air enters the front of servers, hot air exhausts to the back, improving cooling efficiency.

---

## Section 2: Hands-On Activities - Answers

### Activity A: Physical Security Layers ✅

| Layer | Distance | Security Control | Purpose |
|-------|----------|------------------|---------|
| 1 - Perimeter | 100+ ft | Fence, lighting, signs | Deter |
| 2 - Building | 50 ft | Guards, CCTV, barriers | Delay |
| 3 - Floor | 20 ft | Badge readers, cameras | Detect |
| 4 - Room | 10 ft | Biometric, mantrap | Deny |
| 5 - Rack | 1 ft | Locks, asset tags | Defend |

### Activity B: Access Control Selection ✅

| Location | Best Access Control | Backup Method | Reason |
|----------|-------------------|---------------|---------|
| Main entrance | Badge reader | Security guard | High traffic, need audit trail |
| Server room | Biometric | Badge + PIN | Highest security needed |
| Network closet | Badge reader | Key lock | Moderate security, IT only |
| Loading dock | Security guard | CCTV | Variable traffic, deliveries |
| Executive floor | Smart card | Biometric | VIP access, appearance matters |

### Activity C: Environmental Monitoring Plan ✅

**Temperature sensors:**
- Placement 1: **Front of rack (cold aisle)** - intake temp
- Placement 2: **Back of rack (hot aisle)** - exhaust temp
- Alert threshold: **Above 80°F or below 64°F**

**Humidity sensors:**
- Acceptable range: **40-60% RH**
- Critical low: **Below 20%** (static electricity risk)
- Critical high: **Above 80%** (condensation risk)

**Water detection:**
- Location 1: **Under raised floor**
- Location 2: **Near HVAC units**
- Response plan: **Alert facilities, shut off water, activate pumps**

### Activity D: Data Center Layout ✅

```
      CRAC Unit (Cold Air Supply)
         ↓  ↓  ↓  ↓  ↓
    ==================
    □ □ □ □ □ □ □ □ □  ← Rack Front (COLD AISLE)
    ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓  
    ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓  ← Rack Back (HOT AISLE)
    □ □ □ □ □ □ □ □ □
    ==================
         ↑  ↑  ↑  ↑  ↑
      Return Air (Hot)
```

- Cold aisle width: **4-6 feet** (equipment access)
- Hot aisle width: **3-4 feet** (exhaust space)
- Perforated tiles: **In cold aisles only**

### Activity E: Physical Security Audit ✅

Answers vary based on location. Good audit includes:
- Fence: **8+ feet with anti-climb**
- Gates: **Automated with guard**
- Lighting: **No dark areas**
- Cameras: **100% perimeter coverage**
- Entry: **Single controlled point**
- Visitor: **Sign-in, escort required**
- Badge: **Always visible**
- Network equipment: **Locked room**

### Activity F: Biometric Comparison ✅

| Type | False Accept | False Reject | Cost | User Accept |
|------|--------------|--------------|------|-------------|
| Fingerprint | Low | Medium | Low | High |
| Iris scan | Very Low | Low | High | Medium |
| Facial recognition | Medium | Medium | Medium | High |
| Voice recognition | Medium | High | Low | Medium |
| Hand geometry | Low | Low | Medium | High |

### Activity G: Fire Suppression Selection ✅

| Location | System Type | Agent | Reason |
|----------|------------|-------|---------|
| Server room | Clean agent | FM-200 | No equipment damage |
| Office space | Wet sprinkler | Water | People safety, cost |
| Electrical room | Dry system | CO2 | No water near electricity |
| Storage area | Wet sprinkler | Water | Cost effective |
| Network closet | Clean agent | FM-200 | Protects equipment |

### Activity H: Asset Tracking ✅

**Best practice:**
- Method: **RFID** (automatic scanning)
- Track: Serial, location, owner, purchase date, warranty
- Audit frequency:
  - High-value: **Monthly**
  - Standard: **Quarterly**
  - Consumables: **Annually**

### Activity I: Rogue Device Detection ✅

**All detection methods should be checked.**

**Sweep schedule:**
- Frequency: **Weekly for sensitive areas, monthly general**
- Areas: **All floors, focus on conference rooms**
- Documentation: **Log all findings, maintain history**

**If rogue AP found:**
1. **Locate physically and disconnect**
2. **Investigate source and intent**
3. **Update security policies**

### Activity J: Physical Barrier Design ✅

| Barrier Type | Specification | Location | Purpose |
|--------------|--------------|----------|---------|
| Fence | 8-10 ft, chain link | Perimeter | Define boundary |
| Bollards | 3-4 ft spacing | Building entrance | Stop vehicles |
| Mantrap | 6×8 ft | Server room entry | Prevent tailgating |
| Security glass | Bullet resistant | Reception | Protect staff |
| Cable lock | Kensington | Workstations | Secure devices |

### Activity K: Environmental Threat Assessment ✅

| Threat | Risk Level | Current Control | Additional Needed |
|--------|------------|-----------------|-------------------|
| Power failure | High | UPS | Generator |
| Flooding | Medium | Raised floor | Water sensors |
| Temperature | High | HVAC | Redundant cooling |
| Humidity | Medium | HVAC | Dehumidifier |
| Fire | High | Suppression | Regular testing |
| Theft | Medium | Locks | RFID tracking |
| Earthquake | Low | Rack anchoring | Seismic bracing |

### Activity L: Security Camera Planning ✅

**Camera specifications:**
- Main entrance: **Dome, 4K, 30 days**
- Server room: **PTZ, 1080p, 90 days**
- Parking lot: **Bullet, 4K IR, 14 days**
- Loading dock: **Dome, 1080p, 30 days**

**Recording specs:**
- Frame rate: **15-30 fps**
- Retention: **30-90 days** depending on area
- Storage: **50-100 TB** for medium facility
- Backup: **Cloud or off-site NAS**

---

## Real-World Context & Best Practices

### Why This Matters
- **Compliance:** Many regulations require physical security
- **Insider threats:** Most breaches involve physical access
- **Data protection:** Stolen hardware = data breach
- **Business continuity:** Environmental failures cause downtime

### Common Mistakes to Avoid
❌ Propping doors open for convenience
❌ Sharing access cards/codes
❌ Ignoring environmental alarms
❌ Not testing fire suppression
❌ Forgetting about cable security

### Industry Best Practices
✅ **Defense in depth:** Multiple security layers
✅ **Least privilege:** Minimum access required
✅ **Regular audits:** Test controls monthly
✅ **Environmental monitoring:** 24/7 automated alerts
✅ **Asset tracking:** Know what you have and where

---

## Exam Tips 📝

### Must Memorize:
1. **Data center environment:** 64-80°F, 40-60% humidity
2. **Authentication factors:** Know, Have, Are
3. **Mantrap:** Two interlocking doors
4. **Hot/cold aisle:** Face-to-face rack arrangement
5. **Clean agents:** FM-200, Inergen for electronics
6. **Biometric types:** Fingerprint, iris, facial
7. **RFID:** Radio frequency ID for tracking

### Common Exam Questions:
- "What prevents tailgating?" → **Mantrap**
- "Best fire suppression for servers?" → **FM-200/clean agent**
- "Something you are?" → **Biometrics**
- "Ideal data center temperature?" → **64-80°F**
- "Physical network security?" → **Locked cabinets**

### Exam Strategy:
- Physical security = first line of defense
- Environmental controls prevent equipment failure
- Layered approach always better
- Biometrics = strongest authentication

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Designed 5 layers of physical security
□ Selected appropriate access controls
□ Planned environmental monitoring
□ Created hot/cold aisle layout
□ Chose correct fire suppression
□ Implemented asset tracking
□ Planned rogue AP detection
□ Designed appropriate barriers
□ Calculated camera storage needs
□ Assessed environmental threats

### Troubleshooting Common Issues

**Problem:** Tailgating into secure areas
**Solution:** Mantrap, security guards, training, cameras

**Problem:** Temperature alarms frequent
**Solution:** Check HVAC, verify sensor placement, review setpoints

**Problem:** Lost/stolen equipment
**Solution:** RFID tags, asset database, regular audits

**Problem:** Unauthorized wireless devices
**Solution:** Regular scans, NAC, physical inspections

---

## Real-World Scenarios

### Scenario 1: Server Room Overheating
**Situation:** AC fails, temperature rising
**Response:**
1. Portable cooling units deployed
2. Non-critical servers shut down
3. Door propped open (security guard posted)
4. HVAC repair called immediately
5. Monitor temperature closely

### Scenario 2: Tailgating Incident
**Situation:** Unauthorized person in server room
**Response:**
1. Security escort person out
2. Review badge logs
3. Check camera footage
4. Audit for tampering
5. Implement mantrap

### Scenario 3: Water Leak Detected
**Situation:** Water sensor alerts under raised floor
**Response:**
1. Locate and stop source
2. Power down affected equipment
3. Deploy water extraction
4. Document damage
5. Insurance claim if needed

---

## Lab Summary

### Key Concepts Mastered:
✅ Physical security uses layered defense
✅ Environmental controls prevent equipment failure
✅ Access control matches security requirements
✅ Hot/cold aisle improves cooling efficiency
✅ Clean agents protect electronic equipment
✅ Asset tracking prevents loss/theft
✅ Regular audits find vulnerabilities

### Time-Saving Tips:
- Use access control templates
- Automate environmental monitoring
- Schedule regular security walks
- Maintain asset database
- Test fire suppression annually

### Going Further:
- Tour a local data center
- Test biometric systems
- Use Wi-Fi analyzer apps
- Practice lockpicking (legally!)
- Study fire suppression types

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for physical security exam questions!

**Next Lab:** Lesson 21 - Network Threats and Vulnerabilities

### Final Tip:
"You can have the best cybersecurity in the world, but if someone can walk in and take your server, none of it matters!"

---