# Lab 54: Environmental Controls

**Tier:** 1  
**Time:** 20-30 minutes  
**Exam Objectives:** 4.1 - Given a scenario, implement best practices associated with documentation and support systems information management

---

## Section 1: Concept Check (5 min)

1. What is the ideal temperature range for a server room or data center?

2. Why is humidity control important in IT environments? What happens if it's too high or too low?

3. What is the difference between a surge protector and an uninterruptible power supply (UPS)?

4. Explain the concept of "hot aisle/cold aisle" in data center design.

5. What is HVAC, and why is it critical for computer equipment?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Conceptual learning** - Environmental control planning exercises.

#### Activity A: Temperature and Humidity

**Goal:** Understand environmental requirements.

**Optimal conditions:**

| Environment | Temperature | Humidity |
|-------------|-------------|----------|
| Server room | | |
| Data center | | |
| Office (computers) | | |
| Storage (components) | | |

**What happens outside optimal range:**

| Condition | Effect on Equipment |
|-----------|-------------------|
| Too hot | |
| Too cold | |
| Too humid | |
| Too dry | |

**Monitoring methods:**

| Method | Purpose |
|--------|---------|
| Temperature sensors | |
| Humidity sensors | |
| Environmental monitoring system | |
| SNMP alerts | |

---

#### Activity B: Power Protection

**Goal:** Compare power protection options.

**Power problems:**

| Problem | Description | Effect |
|---------|-------------|--------|
| Surge | | |
| Spike | | |
| Sag (brownout) | | |
| Blackout | | |
| Noise | | |

**Protection comparison:**

| Device | Protects Against | Provides Backup? | Use Case |
|--------|------------------|------------------|----------|
| Surge protector | | | |
| Line conditioner | | | |
| UPS (Standby) | | | |
| UPS (Line-interactive) | | | |
| UPS (Online/Double-conversion) | | | |
| Generator | | | |

---

#### Activity C: UPS Sizing

**Goal:** Calculate UPS requirements.

**Device power consumption:**

| Device | Typical Watts |
|--------|---------------|
| Desktop PC | 200-400W |
| Monitor | 30-50W |
| Server | 300-800W |
| Network switch | 50-200W |
| Laser printer | 400-600W |

**UPS sizing formula:**

```
Total Watts × 1.25 (safety margin) = Required VA
(Note: VA = Watts ÷ Power Factor, typically 0.6-0.8)
```

**Scenario calculations:**

**Scenario 1: Small office**
- 5 desktop PCs (300W each)
- 5 monitors (40W each)
- 1 network switch (100W)

Total watts: _______________
Required UPS VA: _______________

**Scenario 2: Server closet**
- 2 servers (500W each)
- 1 network switch (150W)
- Runtime needed: 15 minutes

Total watts: _______________
Required UPS VA: _______________
Battery capacity needed: _______________

---

#### Activity D: Ventilation and Airflow

**Goal:** Understand proper airflow design.

**Server room airflow:**

| Concept | Description |
|---------|-------------|
| Hot aisle | |
| Cold aisle | |
| Containment | |
| Raised floor | |
| In-row cooling | |

**Equipment placement rules:**

| Rule | Why Important |
|------|---------------|
| Front faces cold aisle | |
| Rear faces hot aisle | |
| Blanking panels | |
| Cable management | |
| No obstructed vents | |

**Draw a simple hot/cold aisle diagram:**

```
[Draw or describe the layout]




```

---

#### Activity E: Fire Suppression

**Goal:** Understand data center fire suppression.

**Fire suppression systems:**

| System | How It Works | Pros | Cons |
|--------|--------------|------|------|
| Water sprinkler | | | |
| FM-200 (clean agent) | | | |
| Inergen | | | |
| CO2 | | | |
| Pre-action sprinkler | | | |

**For a data center, recommend:** _______________

**Why:** _______________

---

#### Activity F: Environmental Monitoring Plan

**Goal:** Create a monitoring strategy.

**What to monitor:**

| Metric | Warning Threshold | Critical Threshold | Alert Method |
|--------|-------------------|-------------------|--------------|
| Temperature | | | |
| Humidity | | | |
| UPS battery | | | |
| UPS load | | | |
| Power (utility) | | | |
| Water/leak detection | | | |

**Alert escalation:**

| Level | Response Time | Who to Contact |
|-------|---------------|----------------|
| Warning | | |
| Critical | | |
| Emergency | | |

---

#### Activity G: Workspace Assessment

**Goal:** Evaluate your current environment.

**Check your workspace:**

| Item | Current Status | Ideal | Action Needed? |
|------|----------------|-------|----------------|
| Ventilation | | | |
| Temperature | | | |
| Cable management | | | |
| Surge protection | | | |
| Dust level | | | |
| Lighting | | | |
| Ergonomics | | | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A server room's air conditioning fails on Friday evening. The room temperature reaches 95°F before anyone notices Monday morning. What damage might have occurred, and how should this be prevented?

**Scenario 2:** A company has surge protectors on all desktops but no UPS. During a power outage, several employees lose unsaved work. What would you recommend?

**Scenario 3:** You're setting up a new server closet in a small office. The only space available is next to the bathroom. What environmental concerns should you address?

**Scenario 4:** The fire suppression system in a data center accidentally discharges FM-200. What should happen next?

---

## What You Learned Today

- ✅ Temperature and humidity requirements
- ✅ Power protection options (surge, UPS, generator)
- ✅ UPS sizing calculations
- ✅ Hot/cold aisle airflow design
- ✅ Fire suppression systems
- ✅ Environmental monitoring strategies
- ✅ Workspace assessment

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 ENVIRONMENTAL CONTROLS QUICK REFERENCE                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  OPTIMAL CONDITIONS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Temperature: 64-75°F (18-24°C)                                           ║
║  Humidity: 40-60% relative humidity                                        ║
║  Too hot → Overheating, shutdown, component damage                        ║
║  Too dry → ESD risk increases                                              ║
║  Too humid → Condensation, corrosion                                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  POWER PROTECTION                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Surge protector    → Blocks spikes, no backup power                      ║
║  UPS (Standby)      → Switches to battery on outage                       ║
║  UPS (Line-int)     → Better conditioning, faster switch                  ║
║  UPS (Online)       → Continuous battery, cleanest power                  ║
║  Generator          → Long-term backup, needs UPS bridge                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  UPS SIZING                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Add all device watts → Multiply by 1.25 → Required VA                    ║
║  Example: 1000W × 1.25 = 1250VA minimum                                   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  HOT/COLD AISLE                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Cold aisle → Equipment fronts face here (intake)                         ║
║  Hot aisle  → Equipment rears face here (exhaust)                         ║
║  Containment → Separate hot and cold air                                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FIRE SUPPRESSION (Data Centers)                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Preferred: FM-200 or Inergen (clean agents)                              ║
║  Pre-action sprinklers (water, but requires two triggers)                 ║
║  Avoid: Standard water sprinklers (equipment damage)                      ║
╚═══════════════════════════════════════════════════════════════════════════╝
```