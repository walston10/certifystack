# Lab 41: Physical Security Controls - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Mantrap (Access Control Vestibule)

**What it is:** A small room with two doors where only one door can be open at a time. Person enters first door, it closes and locks, then second door can open.

**Why more secure:**
- Prevents tailgating (one person at a time)
- Allows verification before granting access
- Can trap intruders between doors
- Creates controlled chokepoint
- Can integrate weight sensors, cameras, biometrics

---

### Question 2: Biometric Types

**Three types:**
1. **Fingerprint** - scans unique finger ridge patterns
2. **Facial recognition** - maps facial geometry
3. **Retina/Iris scan** - scans unique eye patterns

**Comparison:**

| Aspect | Biometrics | Key Cards |
|--------|------------|-----------|
| Can be lost/stolen | No | Yes |
| Can be shared | No (harder) | Yes (easily) |
| Cost | Higher | Lower |
| Failure rate | Environmental factors | Card damage |
| Privacy concerns | Yes (data storage) | Minimal |
| Unique to person | Yes | No |

---

### Question 3: Kensington Lock

**Purpose:** Physical cable lock that secures equipment to a desk or immovable object.

**Designed for:** Laptops, monitors, projectors, docking stations - portable equipment with a Kensington security slot (small rectangular hole, usually marked with a "K" icon).

**How it works:** Steel cable loops around desk leg or anchor, lock inserts into security slot.

---

### Question 4: Security Guard vs CCTV

| Aspect | Security Guard | CCTV |
|--------|----------------|------|
| Response | Immediate, can intervene | Recording only, no action |
| Judgment | Can assess situations | Just records |
| Coverage | Limited area | Multiple areas simultaneously |
| Cost | Ongoing (salary, benefits) | Initial + maintenance |
| Deterrence | High (visible presence) | Medium (visible cameras) |
| Hours | Shifts needed for 24/7 | Always recording |
| Evidence | Witness testimony | Video evidence |

**When to use guards:** High-security areas, when immediate response needed, access control checkpoints

**When to use CCTV:** Wide area coverage, evidence collection, after-hours monitoring, budget constraints

**Best practice:** Use both together

---

### Question 5: Tailgating

**Definition:** Following an authorized person through a secured door without using your own credentials. Also called "piggybacking."

**Prevention methods:**
- Mantraps (one person at a time)
- Security guards at entrances
- Turnstiles or barriers
- Anti-passback systems (card must be used both entering AND exiting)
- Employee security training
- Culture of challenging unknown people
- "No tailgating" signs
- Weight sensors in vestibules

---

## Section 2: Activities - Answers

### Activity A: Physical Security Assessment

**Typical home security:**

| Layer | Common Examples |
|-------|-----------------|
| Perimeter | Fence, gate, hedges |
| Building access | Door locks, deadbolt |
| Interior | Bedroom locks (optional) |
| Video | Doorbell camera, indoor cameras |
| Alarm | Monitored or DIY system |
| Personnel | None (residential) |

**Common vulnerabilities:**
- Unlocked windows
- Weak door frames
- No deadbolts
- Visible valuables
- Predictable schedules
- Social media sharing location

---

### Activity B: Access Control Methods

| Method | How It Works | Pros | Cons |
|--------|--------------|------|------|
| Traditional key | Physical key cuts match lock | Simple, cheap, no power needed | Lost/copied easily, no audit |
| PIN/keypad | Enter numeric code | No physical item to carry | Shared codes, shoulder surfing |
| Key card (prox) | Radio signal when near reader | Convenient, audit trail | Can be cloned, lost |
| Key fob (RFID) | Same as prox, different form | Small, keychain mount | Same as cards |
| Smart card | Chip stores encrypted data | More secure, multi-use | Cost, reader required |
| Fingerprint | Scans fingerprint pattern | Can't be shared | Environmental issues, spoofing |
| Facial | Maps face geometry | Contactless, convenient | Lighting, masks, twins |
| Retina/Iris | Scans eye patterns | Very accurate | Expensive, intrusive |
| Mobile | Phone app as credential | Convenient, updatable | Phone battery, lost phone |

**Two-factor example:**
- Factor 1: Badge/card (something you have)
- Factor 2: PIN or fingerprint (something you know/are)

---

### Activity C: Security Zones Design

| Zone | Access Level | Who Can Enter | Security Measures |
|------|--------------|---------------|-------------------|
| Reception | Public | Anyone during hours | Receptionist, sign-in, visitor badges |
| Employee Area | Restricted | Employees + escorted visitors | Badge access, glass walls |
| Server Room | Highly Restricted | IT staff only | Biometric + PIN, logged access |
| Executive Suite | Restricted | Executives + assistants | Badge + intercom |
| Storage | Semi-restricted | Authorized employees | Key or badge |

**Visitor flow:** Enter reception → sign in → receive badge → escorted to meeting room → escorted out → return badge

**Chokepoints:** Reception desk, hallway doors between zones

---

### Activity D: Surveillance Planning

| Location | Camera Type | Coverage | Purpose |
|----------|-------------|----------|---------|
| Main entrance | Fixed wide-angle | Door + sidewalk | Identify everyone entering |
| Back exit | Fixed | Door + loading area | Catch unauthorized entry |
| Cash registers | PTZ or fixed | Transaction area | Monitor transactions, disputes |
| Storage room | Fixed | Whole room | Inventory protection |
| Parking lot | PTZ with zoom | Entire lot | Vehicle ID, safety |

**System decisions:**

| Feature | Recommendation | Reason |
|---------|----------------|--------|
| Local vs Cloud | Hybrid | Local for reliability, cloud for remote access |
| Retention | 30-90 days | Balance storage cost with investigation needs |
| Resolution | 1080p minimum | Clear facial identification |
| Night vision | Yes, infrared | 24-hour coverage |
| Motion detection | Yes | Save storage, alert on activity |
| Remote viewing | Yes | Manager oversight, incident response |

---

### Activity E: Asset Protection

| Asset | Recommended Security |
|-------|---------------------|
| Desktop computer | Cable lock, locked office after hours |
| Laptop in office | Cable lock to desk |
| Laptop traveling | Cable lock, never leave unattended, encrypt drive |
| Server in rack | Locked rack, locked room, biometric access |
| External hard drive | Locked drawer, encryption |
| USB drives | Encrypted drives, physical tracking |
| Mobile phones | Screen lock, MDM, never leave visible in car |
| Network switches | Locked closet/rack, port security |

---

### Activity F: Environmental Controls

| Factor | Recommended | Why |
|--------|-------------|-----|
| Temperature | 64-75°F (18-24°C) | Prevent overheating, extend equipment life |
| Humidity | 40-60% | Too low = static; too high = condensation |
| Fire suppression | Clean agent (FM-200) | Won't damage electronics like water |
| UPS runtime | 15-30 minutes | Graceful shutdown time |
| Generator | Diesel, 24-72 hours | Extended outage coverage |

**Environmental threats:**

| Threat | Detection | Prevention |
|--------|-----------|------------|
| Fire | Smoke detectors, heat sensors | Suppression system, extinguishers |
| Flood | Water sensors | Raised floors, sump pumps, location choice |
| Power loss | UPS monitoring | UPS, generator, PDUs |
| HVAC failure | Temperature alerts | Redundant HVAC, monitoring |
| Unauthorized access | Door sensors, cameras | Access control, alarms |

---

### Activity G: Secure Disposal

| Item | Method | Why |
|------|--------|-----|
| Paper (sensitive) | Cross-cut shredding | Prevents reconstruction |
| HDD | Degaussing + drilling/shredding | Magnetic wipe + physical destruction |
| SSD | Secure erase + shredding | TRIM/encryption + physical |
| USB drive | Physical destruction | Small, hard to verify wipe |
| Old laptop | Remove drive, destroy separately | Drive contains data |
| CD/DVD | Shredding | Prevents reading |
| Old badge | Shredding + deactivate | Prevent reuse |
| Backup tapes | Degaussing + shredding | Magnetic media |

**Verification:**

| Method | Verification |
|--------|--------------|
| Shredding | Certificate of destruction, witness |
| Degaussing | Test with read attempt, certificate |
| Physical destruction | Visual confirmation, photos |
| Secure wipe | Verification software, certificate |

---

## Section 3: Reflection - Answers

### Scenario 1: Tailgating with Boxes

**Policy needed:** No tailgating policy - every person must badge in, no exceptions.

**Employee response:**
1. Politely explain everyone must use their own badge
2. Offer to hold the door AFTER they badge in
3. If they can't badge in, direct them to reception
4. Report to security if suspicious
5. Don't feel embarrassed - it's policy

**Training element:** Regular security awareness training that includes this scenario

---

### Scenario 2: Laptops in Open Office

**Recommended measures:**

1. **Cable locks** - Secure laptops to desks
2. **Encryption** - BitLocker on all laptops
3. **Screen locks** - Auto-lock after 5 minutes
4. **Clean desk policy** - Lock away at end of day
5. **Background checks** - For cleaning staff
6. **Escort policy** - Cleaning supervised or in off-hours with cameras
7. **CCTV** - Cover open office areas
8. **Asset tracking** - Inventory all equipment

---

### Scenario 3: Server Room PIN Code

**Risks:**
- PIN likely shared among many people
- No audit trail of who entered
- Former employees may still know it
- Could be shoulder-surfed
- Single factor only

**Improvements:**
1. Change PIN immediately and regularly (quarterly)
2. Add second factor (badge + PIN or biometric + PIN)
3. Implement individual credentials for audit trail
4. Add camera at entrance
5. Limit access to minimum necessary personnel
6. Log all entries/exits
7. Regular access review

---

### Scenario 4: Unidentifiable Intruder on Video

**What went wrong:**
- Camera resolution too low
- Poor lighting
- Camera angle not capturing face
- Possible lens issues (dirty, fog)

**Improvements:**
1. Upgrade to higher resolution (1080p or 4K)
2. Add lighting at entrance points
3. Adjust camera angles for face capture
4. Add multiple cameras at different angles
5. Regular maintenance (clean lenses)
6. Motion-activated lighting
7. Consider facial recognition system
8. Test cameras regularly with review of footage

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    PHYSICAL SECURITY QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ACCESS CONTROL METHODS                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Something you KNOW: PIN, password, combination                           ║
║  Something you HAVE: Key, badge, smart card, key fob, phone               ║
║  Something you ARE:  Fingerprint, retina, facial, voice                   ║
║  Multi-factor: Combine 2+ categories (card + PIN, badge + fingerprint)    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PHYSICAL BARRIERS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Mantrap/Vestibule  → Two doors, only one opens at a time                 ║
║  Bollards           → Posts preventing vehicle access                     ║
║  Fencing            → Perimeter protection                                ║
║  Cable locks        → Secure laptops/equipment to desk                    ║
║  Locked cabinets    → Secure servers, network equipment                   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BIOMETRIC TYPES                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Fingerprint  → Common, affordable, can be spoofed                        ║
║  Facial       → Contactless, affected by lighting/changes                 ║
║  Retina/Iris  → Very accurate, expensive, intrusive                       ║
║  Voice        → Convenient, affected by illness/noise                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DISPOSAL METHODS                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Shredding    → Paper documents (cross-cut preferred)                     ║
║  Degaussing   → Magnetic media (HDDs, tapes) - destroys magnetically      ║
║  Drilling     → Physical destruction of platters                          ║
║  Secure wipe  → Software overwrite (multiple passes)                      ║
║  Incineration → Complete destruction                                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ENVIRONMENTAL CONTROLS                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Temperature: 64-75°F (18-24°C)    Humidity: 40-60%                       ║
║  Fire suppression: Clean agent (FM-200, Inergen) - not water!             ║
║  UPS: Battery backup for graceful shutdown                                ║
║  Generator: Extended outages                                              ║
╚═══════════════════════════════════════════════════════════════════════════╝
```