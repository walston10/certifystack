# Lab 53: Safety Procedures - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: ESD

**What it is:** Electrostatic discharge - sudden flow of electricity between two objects with different electrical potentials.

**Why dangerous:**
- Can damage sensitive electronic components instantly
- As little as 30 volts can damage components
- Humans don't feel discharge under 3,000 volts
- Damage may be immediate failure or latent (shortened lifespan)

**Most sensitive components:** RAM, CPU, expansion cards, motherboard chipsets

---

### Question 2: Before Opening Computer

1. **Power off** the computer (proper shutdown)
2. **Unplug** from wall outlet
3. **Press power button** for 5-10 seconds (drains residual power)
4. **Attach ESD protection** (wrist strap or self-ground)
5. **Remove jewelry** (rings, watches, bracelets)
6. **Document** current configuration if needed

---

### Question 3: Never Open PSU

**Reasons:**
- Contains capacitors that store lethal voltage
- Can retain charge for hours or days after unplugging
- Voltages up to 400V DC inside
- No user-serviceable parts
- Warranty void, creates liability
- Replace entire unit instead of repair

---

### Question 4: Electrical Fire Extinguisher

**Use Class C** extinguisher (or ABC-rated)

**Options:**
- CO2 extinguisher (doesn't leave residue)
- Dry chemical (Class C or ABC)
- **Never use water** on electrical fire

**First:** If safe, disconnect power to remove the electrical component

---

### Question 5: Proper Lifting

1. **Plan the lift** - clear path, know destination
2. **Stand close** to object, feet shoulder-width apart
3. **Bend knees**, keep back straight
4. **Grip firmly** with both hands
5. **Lift with legs**, not back
6. **Keep load close** to body
7. **Don't twist** - turn with feet
8. **Set down** same way (knees bent)

---

## Section 2: Activities - Answers

### Activity A: ESD Prevention

**Component sensitivity:**

| Component | Sensitivity | Why |
|-----------|-------------|-----|
| RAM | Very High | Exposed circuits, sensitive DRAM cells |
| CPU | Very High | Microscopic transistors |
| Hard drive | Medium | Electronics on PCB |
| Motherboard | High | Multiple sensitive chips |
| Power supply | Low | Robust construction |
| Expansion cards | High | Exposed circuits |
| Cables | Very Low | No sensitive electronics |

**Prevention methods:**

| Method | How It Works | When to Use |
|--------|--------------|-------------|
| ESD wrist strap | Grounds you through resistor | Always when working inside |
| ESD mat | Provides grounded work surface | Workbench repairs |
| Self-grounding | Touch case/ground frequently | When strap unavailable |
| Anti-static bags | Faraday cage blocks discharge | Component storage/transport |
| Humidity control | Moisture reduces static | Data centers (40-60% RH) |

**Strap connections:**
- ✅ Unpainted metal case
- ✅ Grounding point on ESD mat
- ❌ Never connect to: Power cord ground while plugged in (shock hazard)

---

### Activity B: Electrical Safety

**Voltage awareness:**

| Component | Voltage | Hazard |
|-----------|---------|--------|
| Motherboard rails | 3.3V, 5V, 12V | Low (safe) |
| Power supply internal | 120V AC, 400V DC | LETHAL |
| Wall outlet | 120V AC (US) | Dangerous |
| CRT monitor internal | 25,000V+ | LETHAL |
| Laser printer fuser | High voltage + heat | Dangerous |
| PoE switch | 48V DC | Low-Medium |

**Before working steps:**

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Power off device | Stop operation |
| 2 | Unplug from outlet | Remove power source |
| 3 | Press power button | Drain capacitors |
| 4 | Wait 30 seconds | Allow discharge |

**High-voltage warnings:**

| Component | Why Dangerous |
|-----------|---------------|
| Power supply | Capacitors hold charge, lethal voltage |
| CRT monitor | Extremely high voltage, stored for weeks |
| Laser printer fuser | High voltage, 400°F operating temp |
| UPS internal | Batteries, high voltage circuits |

---

### Activity C: Fire Safety

**Classifications:**

| Class | Fuel Type | Examples | Extinguisher |
|-------|-----------|----------|--------------|
| A | Ordinary combustibles | Paper, wood, cloth | Water, ABC |
| B | Flammable liquids | Gas, oil, grease | CO2, ABC |
| C | Electrical | Computers, wiring | CO2, ABC |
| D | Combustible metals | Magnesium, lithium | Special powder |
| K | Kitchen/cooking oils | Deep fryers | Wet chemical |

**IT environment responses:**

| Fire Type | Response |
|-----------|----------|
| Electrical (live) | Cut power if safe, Class C extinguisher |
| Paper in office | Class A or ABC |
| Overheating battery | Don't use water, evacuate, call fire dept |
| Burning computer | Unplug, Class C, ventilate |

**Fire priority:**
1. **Alert others** / Pull fire alarm
2. **Evacuate** if fire is spreading
3. **Fight fire only if** small, contained, have clear exit

---

### Activity D: Lifting

**Proper technique:**

| Step | Action |
|------|--------|
| 1 | Assess weight, plan route |
| 2 | Stand close, feet shoulder-width |
| 3 | Bend knees, keep back straight |
| 4 | Get firm grip |
| 5 | Lift with legs, keep load close |

**Equipment weights:**

| Equipment | Weight | One Person? |
|-----------|--------|-------------|
| Desktop PC | 15-30 lbs | Yes |
| Tower server | 30-60 lbs | Maybe |
| Rack server | 40-80 lbs | No |
| Large UPS | 50-150 lbs | No |
| Laser printer | 40-80 lbs | Maybe |
| 42U rack (empty) | 150-300 lbs | Definitely not |

**When to get help:**

| Situation | Action |
|-----------|--------|
| Over 50 lbs | Get help or use equipment |
| Awkward shape | Two people minimum |
| Overhead placement | Use lift or two people |
| Stairs | Two people, communicate |

---

### Activity E: Hazardous Materials

| Item | Hazard | Disposal |
|------|--------|----------|
| Toner cartridges | Fine particles (lung irritation) | Recycling program |
| Laptop batteries | Lithium (fire risk) | Electronics recycler, not trash |
| CMOS batteries | Heavy metals | Battery recycler |
| CRT monitors | Lead, phosphors | E-waste recycler |
| Fluorescent tubes | Mercury | Hazardous waste |
| Chemical solvents | Toxic, flammable | Hazardous waste |
| Hard drives | Data privacy | Destroy/shred, certified disposal |

**SDS contains:**

| Section | Purpose |
|---------|---------|
| Hazard identification | What dangers exist |
| Composition | What's in the material |
| First aid measures | Emergency response |
| Handling/storage | Safe use procedures |
| Disposal considerations | Proper disposal methods |

**Where to find SDS:** Manufacturer website, container label, employer safety files, online databases

---

### Activity F: PPE

| PPE | When Required |
|-----|---------------|
| Safety glasses | Cutting cables, drilling, dusty work |
| ESD strap | Working on internal components |
| Rubber gloves | Electrical work, battery handling |
| Anti-static gloves | Handling sensitive components |
| Air filtration mask | Dusty computers, toner cleanup |
| Hearing protection | Data centers, loud equipment |

**Scenario matching:**

| Scenario | PPE |
|----------|-----|
| Dusty PC interior | Air mask, safety glasses |
| Replacing toner | Gloves, mask |
| Working inside computer | ESD strap |
| Data center work | Hearing protection, ESD |
| Handling broken CRT | Heavy gloves, safety glasses, don't touch CRT |

---

### Activity G: Safety Checklists

**PC work checklist:**

| ☐ | Item | Verification |
|---|------|--------------|
| ☐ | Power disconnected | Unplugged, power button pressed |
| ☐ | ESD protection | Strap attached to case |
| ☐ | Work area clear | No liquids, clutter removed |
| ☐ | Proper lighting | Can see clearly |
| ☐ | Tools ready | Screwdrivers, flashlight |
| ☐ | Components organized | Screws separated |
| ☐ | Documentation available | Service manual ready |

**Data center server checklist:**

| ☐ | Item | Verification |
|---|------|--------------|
| ☐ | Change approved | Ticket/authorization confirmed |
| ☐ | Proper access | Badge, logged entry |
| ☐ | Server identified | Correct rack/unit |
| ☐ | Backups verified | Recent backup confirmed |
| ☐ | Team notified | Users aware of maintenance |
| ☐ | ESD protection | Strap connected |
| ☐ | Hearing protection | If needed |

---

## Section 3: Reflection - Answers

### Scenario 1: Spark and Burning Smell

1. **Stop immediately** - Don't continue working
2. **Unplug power** if not already (should have been unplugged!)
3. **Assess for fire** - Any visible flame?
4. **Ventilate** - Open windows/doors
5. **Don't power on** - Damage likely occurred
6. **Identify what was shorted** - What did screwdriver touch?
7. **Document incident** - For service/warranty
8. **Test components individually** - May have damaged motherboard, PSU, etc.

---

### Scenario 2: 80-Pound UPS

**Safe approach:**
1. **Get help** - Two people minimum for 80 lbs
2. **Use equipment** if available (hand truck, lift)
3. **Plan the route** - Clear path, know destination
4. **Communicate** - "Lift on three," "Stop," "Lower"
5. **Lift together** - Coordinated movement
6. **Don't rush** - Take breaks if needed

---

### Scenario 3: Toner Spill

**Proper cleanup:**
1. **Don't use vacuum** unless toner-rated (fine particles can pass through)
2. **Don't use hot water** (sets toner permanently)
3. **Use cold water** on clothes
4. **Wipe up** with damp cloth
5. **Wash hands** thoroughly
6. **Ventilate area** - Toner is respiratory irritant
7. **Wear mask** if significant amount
8. **Dispose properly** - Not down drain

---

### Scenario 4: Exposed Wires

1. **Do not work near it** - Serious electrical hazard
2. **Do not touch** the outlet or wires
3. **Report to client/building manager** immediately
4. **Request electrician** before any work
5. **Work elsewhere** if possible
6. **Document** the hazard
7. **Don't "just be careful"** - This is a safety issue, not an inconvenience

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    SAFETY PROCEDURES QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ESD: Use wrist strap, touch case, anti-static bags                       ║
║  ELECTRICAL: Unplug, press power button, wait 30 sec                      ║
║  NEVER OPEN: PSU, CRT monitor, UPS internals                              ║
║  FIRE: Class C or ABC for electrical, evacuate if spreading               ║
║  LIFTING: Bend knees, lift with legs, get help for 50+ lbs               ║
║  DISPOSAL: Batteries/CRTs = e-waste, toner = recycling                    ║
╚═══════════════════════════════════════════════════════════════════════════╝
```