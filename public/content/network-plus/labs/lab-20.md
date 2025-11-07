# Lab 20: Physical and Environmental Security
**Time:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain:** Network Security (4.0)

## Lab Objectives
- Design physical security layers for network infrastructure
- Identify environmental threats and controls
- Configure data center security zones
- Plan asset tracking systems
- Implement environmental monitoring
- Detect physical security vulnerabilities

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **List the three authentication factors and give an example of each:**
   Something you ______: _________________________
   Something you ______: _________________________
   Something you ______: _________________________

2. **What's the purpose of a mantrap?**
   _________________________________________________
   _________________________________________________

3. **What temperature and humidity ranges are ideal for a data center?**
   Temperature: ________°F to ________°F
   Humidity: ________% to ________%

4. **Name three types of fire suppression systems:**
   • ________________________________________________
   • ________________________________________________
   • ________________________________________________

5. **What is hot aisle/cold aisle configuration?**
   _________________________________________________
   _________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Physical Security Layers Design 🛡️
**Time:** 3 minutes

Design security layers from perimeter to asset:

| Layer | Distance from Asset | Security Control | Purpose |
|-------|-------------------|------------------|---------|
| 1 - Perimeter | 100+ ft | | Deter |
| 2 - Building | 50 ft | | Delay |
| 3 - Floor | 20 ft | | Detect |
| 4 - Room | 10 ft | | Deny |
| 5 - Rack | 1 ft | | Defend |

---

### Activity B: Access Control Selection 🔐
**Time:** 3 minutes

Match access control to appropriate use case:

| Location | Best Access Control | Backup Method | Reason |
|----------|-------------------|---------------|---------|
| Main entrance | | | |
| Server room | | | |
| Network closet | | | |
| Loading dock | | | |
| Executive floor | | | |

Options: Badge reader, Biometric, PIN pad, Key lock, Smart card, Security guard

---

### Activity C: Environmental Monitoring Plan 🌡️
**Time:** 3 minutes

Design monitoring for a server room:

**Temperature sensors:**
- Placement 1: _______________________________________
- Placement 2: _______________________________________
- Alert threshold: ___________________________________

**Humidity sensors:**
- Acceptable range: __________________________________
- Critical low: ______________________________________
- Critical high: _____________________________________

**Water detection:**
- Location 1: ________________________________________
- Location 2: ________________________________________
- Response plan: _____________________________________

---

### Activity D: Data Center Layout Design 📐
**Time:** 3 minutes

Create a hot aisle/cold aisle configuration:

```
[Draw or describe your layout here]
    CRAC Unit
    ↓  ↓  ↓
□ □ □ □ □ □  ← Rack Front (Cold)
| | | | | |
□ □ □ □ □ □  ← Rack Back (Hot)
    ↑  ↑  ↑
   Hot Return

Cold aisle width: _________ feet
Hot aisle width: __________ feet
Perforated tile placement: ___________________
```

---

### Activity E: Physical Security Audit 🔍
**Time:** 3 minutes

Audit your current location for security:

**Perimeter Security:**
□ Fencing height: ____________
□ Gate control: ______________
□ Lighting adequate? _________
□ Camera coverage? ___________

**Building Security:**
□ Entry points secured? ______
□ Visitor management? _________
□ Badge required? ____________
□ Tailgating prevention? ______

**Network Equipment:**
□ Locked room/cabinet? ________
□ Cable management? ___________
□ Port security? _____________
□ Asset tags present? _________

---

### Activity F: Biometric System Comparison 👁️
**Time:** 3 minutes

Compare biometric authentication methods:

| Type | False Accept Rate | False Reject Rate | Cost | User Acceptance |
|------|------------------|-------------------|------|-----------------|
| Fingerprint | | | | |
| Iris scan | | | | |
| Facial recognition | | | | |
| Voice recognition | | | | |
| Hand geometry | | | | |

Rate as: Low, Medium, High

---

### Activity G: Fire Suppression Selection 🔥
**Time:** 3 minutes

Choose appropriate fire suppression for each area:

| Location | System Type | Agent | Reason |
|----------|------------|-------|---------|
| Server room | | | |
| Office space | | | |
| Electrical room | | | |
| Storage area | | | |
| Network closet | | | |

Options: Water sprinkler, FM-200, CO2, Dry chemical, Inert gas

---

### Activity H: Asset Tracking Implementation 📦
**Time:** 2 minutes

Design an asset tracking system:

**Tracking method:** □ Barcode □ RFID □ GPS □ Manual

**Information to track:**
- Asset ID: __________________________________________
- Serial number: _____________________________________
- Location: __________________________________________
- Owner: _____________________________________________
- Purchase date: _____________________________________
- Warranty expires: __________________________________

**Audit frequency:**
- High-value items: __________________________________
- Standard equipment: ________________________________
- Consumables: _______________________________________

---

### Activity I: Rogue Device Detection 📡
**Time:** 3 minutes

Plan wireless security sweep:

**Detection methods:**
□ Wi-Fi analyzer app
□ Spectrum analyzer
□ Physical inspection
□ Network scanning
□ Port monitoring

**Sweep schedule:**
- Frequency: _________________________________________
- Areas covered: _____________________________________
- Documentation: _____________________________________

**If rogue AP found:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

### Activity J: Physical Barrier Design 🚧
**Time:** 3 minutes

Design barriers for a facility:

| Barrier Type | Specification | Location | Purpose |
|--------------|--------------|----------|---------|
| Fence | Height: ___ ft, Type: ___ | | |
| Bollards | Spacing: ___ ft | | |
| Mantrap | Size: ___ × ___ | | |
| Security glass | Rating: ___ | | |
| Cable lock | Type: ___ | | |

---

### Activity K: Environmental Threat Assessment ⚠️
**Time:** 2 minutes

Assess and mitigate environmental risks:

| Threat | Risk Level | Current Control | Additional Needed |
|--------|------------|-----------------|-------------------|
| Power failure | | | |
| Flooding | | | |
| Temperature spike | | | |
| Humidity damage | | | |
| Fire | | | |
| Theft | | | |
| Earthquake | | | |

Risk Level: Low, Medium, High, Critical

---

### Activity L: Security Camera Planning 📹
**Time:** 3 minutes

Design CCTV coverage:

**Camera placement:**
1. Main entrance: Type: _______ Resolution: _______ Storage: _______
2. Server room: Type: _______ Resolution: _______ Storage: _______
3. Parking lot: Type: _______ Resolution: _______ Storage: _______
4. Loading dock: Type: _______ Resolution: _______ Storage: _______

**Recording specifications:**
- Frame rate: _________ fps
- Retention period: _________ days
- Storage required: _________ TB
- Backup method: _________

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Someone tailgated into your server room. Design prevention:

1. **Immediate response:**
   • _____________________________________________
   • _____________________________________________

2. **Investigation steps:**
   • _____________________________________________
   • _____________________________________________

3. **Prevention measures:**
   • _____________________________________________
   • _____________________________________________

### Best Practices Checklist
Check off physical security practices you'll implement:

□ Layer security controls (defense in depth)
□ Monitor environmental conditions 24/7
□ Test fire suppression annually
□ Audit access logs regularly
□ Update access lists promptly
□ Secure all network equipment
□ Label and track all assets
□ Conduct security walkthroughs
□ Train staff on tailgating
□ Review camera footage periodically

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Design layered physical security
□ Select appropriate access controls
□ Plan environmental monitoring
□ Configure hot/cold aisle layouts
□ Choose fire suppression systems
□ Implement asset tracking
□ Detect rogue wireless devices
□ Design physical barriers
□ Position security cameras
□ Assess environmental threats

### Exam Preparation
⚠️ **Know for the exam:**
- **Mantrap:** Two-door system preventing tailgating
- **Hot aisle/cold aisle:** Server cooling configuration
- **Ideal data center:** 64-80°F, 40-60% humidity
- **Biometrics:** Something you are (fingerprint, iris, face)
- **Fire suppression:** FM-200/clean agent for electronics
- **RFID:** Radio frequency identification for tracking
- **Bollards:** Posts preventing vehicle access

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐☆☆

**Ready for:** Lesson 21 - Network Threats and Vulnerabilities

### Remember
"Physical security is the foundation of all security. The best firewall in the world won't stop someone who can walk into your server room!"

---