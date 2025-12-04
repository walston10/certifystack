# Lab 11: Internet Connection Types

**Tier:** 1 (Universal)
**Time:** 25-30 minutes
**Exam Objectives:** 2.5 - Given a scenario, install and configure basic wired/wireless SOHO networks

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is DOCSIS, and why does the version matter for cable internet speeds?**

2. **Explain the difference between symmetrical and asymmetrical internet connections, and give an example of each.**

3. **Why does satellite internet have high latency regardless of download speed?**

4. **What is the advantage of fiber optic internet over cable or DSL?**

5. **When would fixed wireless internet be a better choice than traditional wired options?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses your own connection and research** - Explore your internet service and compare options.

---

#### Activity A: Identify Your Internet Connection Type

**Goal:** Document your current internet service details.

**What type of internet connection do you have?**

- [ ] Cable (coaxial)
- [ ] DSL (phone line)
- [ ] Fiber (FTTP/FTTH)
- [ ] Fixed Wireless (WISP)
- [ ] Satellite (Starlink, HughesNet, Viasat)
- [ ] Cellular/5G Home Internet
- [ ] Dial-up (legacy)
- [ ] Don't know

**How to identify your connection type:**

| Clue | Connection Type |
|------|-----------------|
| Coaxial cable to modem | Cable |
| Phone line to modem | DSL |
| Fiber optic cable to ONT box | Fiber |
| Dish on roof/exterior | Satellite |
| Antenna on roof | Fixed Wireless |
| SIM card in router | Cellular |

**Document your connection:**

| Detail | Your Service |
|--------|--------------|
| ISP (Internet Service Provider) | |
| Connection type | |
| Advertised download speed | |
| Advertised upload speed | |
| Monthly cost | |
| Data cap (if any) | |
| Contract term | |
| Equipment (owned or rented) | |

---

#### Activity B: Physical Connection Inspection

**Goal:** Trace your internet connection from entry point to devices.

**Find where internet enters your home/building:**

| Question | Your Answer |
|----------|-------------|
| Where does the cable/line enter? | |
| What type of cable/line is it? | |
| Is there an exterior box (NID, ONT, etc.)? | |

**Document the equipment chain:**

Draw or list the path from street to your device:

```
[Street/Pole] → [Entry Point] → [___________] → [___________] → [___________] → [Your Device]
```

**Example paths:**

**Cable:**
```
Street → Coax drop → Splitter (optional) → Cable modem → Router → Devices
```

**Fiber:**
```
Street → Fiber drop → ONT box → Router → Devices
```

**DSL:**
```
Phone line → NID → DSL filter → DSL modem → Router → Devices
```

**Your equipment:**

| Device | Make/Model | Location | Owned or Rented? |
|--------|------------|----------|------------------|
| Modem/ONT | | | |
| Router | | | |
| Switch (if any) | | | |
| Access Point (if any) | | | |

---

#### Activity C: Speed Test Analysis

**Goal:** Compare advertised speeds to actual performance.

**Run speed tests at different times:**

Use speedtest.net, fast.com, or your ISP's speed test.

| Time of Day | Download (Mbps) | Upload (Mbps) | Ping (ms) | Jitter (ms) |
|-------------|-----------------|---------------|-----------|-------------|
| Morning (6-9 AM) | | | | |
| Midday (12-2 PM) | | | | |
| Evening (6-9 PM) | | | | |
| Late night (10 PM+) | | | | |

**Compare to advertised speeds:**

| Metric | Advertised | Best Actual | Worst Actual | % of Advertised |
|--------|------------|-------------|--------------|-----------------|
| Download | | | | |
| Upload | | | | |

**Speed analysis questions:**

1. When are your speeds fastest? _______________________

2. When are your speeds slowest? _______________________

3. Why might evening speeds be slower than morning?

_________________________________________________________________

4. Is your upload speed the same as download, or much slower?

_________________________________________________________________

5. What type of connection typically has symmetrical speeds?

_________________________________________________________________

---

#### Activity D: Connection Type Research

**Goal:** Understand all major internet connection types.

**Complete this comparison table:**

| Connection Type | Max Download | Max Upload | Typical Latency | Availability |
|-----------------|--------------|------------|-----------------|--------------|
| Dial-up | | | | |
| DSL (ADSL) | | | | |
| DSL (VDSL) | | | | |
| Cable (DOCSIS 3.0) | | | | |
| Cable (DOCSIS 3.1) | | | | |
| Fiber (FTTH) | | | | |
| Fixed Wireless | | | | |
| Satellite (Traditional) | | | | |
| Satellite (LEO - Starlink) | | | | |
| 4G LTE Home | | | | |
| 5G Home | | | | |

**Research questions:**

**1. What does FTTH stand for?**

_________________________________________________________________

**2. What's the difference between FTTP, FTTH, FTTC, and FTTN?**

| Acronym | Full Name | Fiber Reaches | Last Mile |
|---------|-----------|---------------|-----------|
| FTTP | | | |
| FTTH | | | |
| FTTC | | | |
| FTTN | | | |

**3. What is the "last mile" problem?**

_________________________________________________________________

---

#### Activity E: Cable Internet Deep Dive

**Goal:** Understand cable internet technology.

**If you have cable internet, document:**

| Setting | Value |
|---------|-------|
| Modem make/model | |
| DOCSIS version | |
| Downstream channels | |
| Upstream channels | |
| Signal level (dBmV) | |

**Finding this info:**

Access your modem's status page (often 192.168.100.1 for cable modems).

**DOCSIS versions:**

| Version | Max Download | Max Upload | Year |
|---------|--------------|------------|------|
| DOCSIS 2.0 | | | |
| DOCSIS 3.0 | | | |
| DOCSIS 3.1 | | | |
| DOCSIS 4.0 | | | |

**Cable internet concepts:**

1. **What does "channel bonding" mean for cable internet?**

_________________________________________________________________

2. **Why might cable speeds slow down in the evening?**

_________________________________________________________________

3. **What is the typical upload vs download speed ratio for cable?**

_________________________________________________________________

---

#### Activity F: DSL Technology

**Goal:** Understand DSL internet technology.

**DSL types comparison:**

| Type | Full Name | Speed | Distance Limitation |
|------|-----------|-------|---------------------|
| ADSL | | | |
| ADSL2+ | | | |
| VDSL | | | |
| VDSL2 | | | |

**DSL characteristics:**

1. **Why does DSL speed decrease with distance from the central office?**

_________________________________________________________________

2. **What is a DSLAM?**

_________________________________________________________________

3. **What is a DSL filter, and why is it needed?**

_________________________________________________________________

4. **Can you use your phone while connected to DSL?**

_________________________________________________________________

---

#### Activity G: Fiber Optic Internet

**Goal:** Understand fiber internet technology.

**Fiber advantages:**

List 5 advantages of fiber over cable/DSL:

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

**Fiber terminology:**

| Term | Definition |
|------|------------|
| ONT | |
| OLT | |
| GPON | |
| Symmetrical | |

**If you have fiber, document:**

| Setting | Value |
|---------|-------|
| ONT location | |
| ONT make/model | |
| Connection type to router | |
| Advertised speed | |

**Fiber availability check:**

Go to your address on fiber availability checkers:

| Provider | Available at Your Address? | Max Speed Offered |
|----------|---------------------------|-------------------|
| AT&T Fiber | | |
| Verizon Fios | | |
| Google Fiber | | |
| Local provider: | | |

---

#### Activity H: Satellite Internet

**Goal:** Understand satellite internet options.

**Traditional satellite (GEO) vs LEO satellite:**

| Feature | Traditional (HughesNet, Viasat) | LEO (Starlink) |
|---------|--------------------------------|----------------|
| Orbit altitude | | |
| Latency | | |
| Coverage | | |
| Equipment | | |
| Weather sensitivity | | |
| Typical speeds | | |

**Latency calculation:**

**Traditional satellite (GEO):**
- Satellite altitude: ~35,786 km
- Signal travels: Earth → Satellite → Earth → Satellite → Earth
- Total distance: ~143,000 km
- Speed of light: ~300,000 km/s

Calculate approximate minimum latency: _____________ ms

**LEO satellite (Starlink):**
- Satellite altitude: ~550 km
- Much shorter distance = much lower latency

**When is satellite the best choice?**

_________________________________________________________________

**When is satellite a poor choice?**

_________________________________________________________________

---

#### Activity I: Cellular/5G Home Internet

**Goal:** Understand cellular-based home internet.

**Cellular home internet options:**

| Provider | Technology | Typical Speeds | Data Limits |
|----------|------------|----------------|-------------|
| T-Mobile Home Internet | | | |
| Verizon 5G Home | | | |
| AT&T Fixed Wireless | | | |
| Starry Internet | | | |

**4G LTE vs 5G:**

| Feature | 4G LTE | 5G Sub-6 | 5G mmWave |
|---------|--------|----------|-----------|
| Typical speed | | | |
| Latency | | | |
| Range | | | |
| Building penetration | | | |

**When is cellular home internet a good choice?**

1. _______________________
2. _______________________
3. _______________________

**Potential drawbacks:**

1. _______________________
2. _______________________
3. _______________________

---

#### Activity J: ISP Comparison in Your Area

**Goal:** Compare available ISPs at your location.

**Research ISPs available at your address:**

| ISP | Connection Type | Speed Options | Price Range | Data Cap |
|-----|-----------------|---------------|-------------|----------|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |
| 4. | | | | |
| 5. | | | | |

**Best value analysis:**

Calculate cost per Mbps for each option:

| ISP | Speed | Monthly Cost | Cost per Mbps |
|-----|-------|--------------|---------------|
| 1. | | | |
| 2. | | | |
| 3. | | | |

**Which would you recommend for:**

| Use Case | Best ISP Choice | Why |
|----------|-----------------|-----|
| Remote worker (video calls) | | |
| Casual browsing only | | |
| Gamer (low latency needed) | | |
| Large family, heavy streaming | | |
| Budget-conscious | | |

---

#### Activity K: Latency and Its Impact

**Goal:** Understand why latency matters.

**Test latency to different destinations:**

**Windows/Mac/Linux:**
```
ping google.com
ping amazon.com
ping your-isp-website.com
```

**Document results:**

| Destination | Average Ping (ms) | Min | Max | Packet Loss |
|-------------|-------------------|-----|-----|-------------|
| Google | | | | |
| Your ISP | | | | |
| Gaming server (if applicable) | | | | |
| International site | | | | |

**Latency impact by activity:**

| Activity | Acceptable Latency | Your Latency | Impact |
|----------|-------------------|--------------|--------|
| Web browsing | <100ms | | |
| Video streaming | <100ms | | |
| Video calls | <150ms | | |
| Online gaming | <50ms | | |
| VoIP calls | <150ms | | |
| Stock trading | <10ms | | |

**Why connection type affects latency:**

| Connection | Typical Latency | Why |
|------------|-----------------|-----|
| Fiber | 1-10ms | |
| Cable | 10-30ms | |
| DSL | 20-50ms | |
| 5G | 10-30ms | |
| 4G LTE | 30-50ms | |
| Satellite (LEO) | 20-50ms | |
| Satellite (GEO) | 500-700ms | |

---

#### Activity L: Business vs Residential Service

**Goal:** Understand the differences in service tiers.

**Research your ISP's business offerings:**

| Feature | Residential | Business |
|---------|-------------|----------|
| Download speed | | |
| Upload speed | | |
| Price | | |
| SLA (uptime guarantee) | | |
| Static IP included | | |
| Support hours | | |
| Installation priority | | |
| Data caps | | |

**When does business service make sense?**

1. _______________________
2. _______________________
3. _______________________

**What is an SLA (Service Level Agreement)?**

_________________________________________________________________

**Why might a home business need a static IP?**

_________________________________________________________________

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A rural customer wants to work from home with video conferencing. Their only options are satellite (HughesNet) or cellular (1 bar of 4G). Which would you recommend and why?**

2. **A customer has cable internet and complains speeds drop significantly every evening from 7-10 PM. They're paying for 200 Mbps but only getting 50 Mbps during those hours. Explain what's likely happening and what solutions exist.**

3. **A small business is choosing between 100 Mbps cable ($50/month) and 100 Mbps fiber ($80/month). Both have adequate download speed. What factors beyond download speed should influence their decision?**

4. **A customer is moving to a new home and wants to know if they should buy their own modem or rent from the ISP. What factors should they consider?**

---

## What You Learned Today

- ✅ Identified your internet connection type
- ✅ Traced physical connection path
- ✅ Compared actual speeds to advertised speeds
- ✅ Researched all major connection types
- ✅ Understood DOCSIS versions for cable
- ✅ Learned DSL distance limitations
- ✅ Explored fiber optic advantages
- ✅ Compared satellite options (GEO vs LEO)
- ✅ Evaluated cellular home internet
- ✅ Compared ISPs in your area
- ✅ Understood latency and its impact
- ✅ Compared business vs residential service

**Next Lab:** TCP/IP Addressing and Subnetting - diving into IP addresses, subnet masks, and network configuration.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 11: Internet Connection Types*