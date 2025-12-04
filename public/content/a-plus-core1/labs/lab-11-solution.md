# Lab 11: Internet Connection Types - Solution Guide

**Note to Students:** Only review this AFTER completing your own research! Understanding these concepts requires active learning.

---

## Section 1: Concept Check - Answers

**1. What is DOCSIS, and why does the version matter for cable internet speeds?**

**Answer:**

**DOCSIS (Data Over Cable Service Interface Specification)** is the standard that defines how data is transmitted over cable TV infrastructure for internet service.

**Why version matters:**

| Version | Max Download | Max Upload | Key Feature |
|---------|--------------|------------|-------------|
| DOCSIS 2.0 | 42 Mbps | 30 Mbps | Legacy, obsolete |
| DOCSIS 3.0 | 1 Gbps | 200 Mbps | Channel bonding (up to 32 channels) |
| DOCSIS 3.1 | 10 Gbps | 1-2 Gbps | OFDM modulation, more efficient |
| DOCSIS 4.0 | 10 Gbps | 6 Gbps | Full duplex, symmetrical possible |

Your modem's DOCSIS version determines your maximum possible speed. A DOCSIS 3.0 modem on a network offering 1.2 Gbps will bottleneck at ~1 Gbps. You need a DOCSIS 3.1 modem for higher speeds.

**Exam tip:** Know that DOCSIS 3.1 is current standard, offers multi-gigabit speeds.

---

**2. Explain the difference between symmetrical and asymmetrical internet connections, and give an example of each.**

**Answer:**

| Type | Definition | Example |
|------|------------|---------|
| **Symmetrical** | Same upload and download speed | Fiber (1 Gbps down / 1 Gbps up) |
| **Asymmetrical** | Different upload and download (usually download faster) | Cable (300 Mbps down / 20 Mbps up) |

**Why most connections are asymmetrical:**

Historically, users downloaded much more than they uploaded (web browsing, streaming). ISPs allocated more bandwidth for downloads.

**Why symmetrical matters now:**
- Video conferencing (upload matters)
- Cloud backup
- Work from home
- Content creation/streaming
- Running servers

**Connections by type:**

| Connection | Typically |
|------------|-----------|
| Fiber | Symmetrical |
| Cable | Asymmetrical (10:1 to 35:1 ratio) |
| DSL | Asymmetrical (ADSL) or Symmetrical (SDSL) |
| Satellite | Asymmetrical |
| 5G | Asymmetrical but better than cable |

---

**3. Why does satellite internet have high latency regardless of download speed?**

**Answer:**

**Physics:** The signal must travel to space and back - twice.

**Traditional satellite (Geostationary/GEO):**
- Satellite orbit: 35,786 km above Earth
- Signal path: You → Satellite → Ground station → Internet → Ground station → Satellite → You
- Total distance: ~143,000 km
- At speed of light: ~480 ms minimum latency

**Calculation:**
```
143,000 km ÷ 300,000 km/s = 0.48 seconds = 480 ms
```

Plus processing time = 500-700 ms typical

**LEO satellites (Starlink):**
- Orbit: ~550 km
- Much shorter distance = 20-50 ms latency
- Competitive with terrestrial connections

**Why this matters:**
- Video calls feel laggy
- Online gaming is difficult/impossible
- VPN connections may timeout
- Real-time applications suffer

**Speed ≠ Latency:** You can have 100 Mbps satellite with 600 ms latency. Downloads are fast once started, but every request has a half-second delay.

---

**4. What is the advantage of fiber optic internet over cable or DSL?**

**Answer:**

| Advantage | Explanation |
|-----------|-------------|
| **Speed** | Multi-gigabit speeds (10 Gbps possible) |
| **Symmetrical** | Same upload and download speeds |
| **Latency** | Lowest latency (1-10 ms) |
| **Consistency** | No speed degradation during peak hours |
| **Distance** | No signal loss over long distances |
| **Reliability** | Immune to electrical interference |
| **Future-proof** | Capacity far exceeds current needs |
| **Weather** | Not affected by lightning, water damage |
| **No sharing** | Dedicated connection (not shared neighborhood node) |

**Why it's better technically:**

| Factor | Fiber | Cable | DSL |
|--------|-------|-------|-----|
| Medium | Light pulses | Electrical signals | Electrical signals |
| Interference | None | EMI possible | EMI, crosstalk |
| Distance degradation | Minimal | Moderate | Severe |
| Shared bandwidth | No | Yes (neighborhood) | No |
| Max theoretical | Terabits/s | ~10 Gbps | ~100 Mbps |

---

**5. When would fixed wireless internet be a better choice than traditional wired options?**

**Answer:**

**Fixed wireless is better when:**

1. **No wired infrastructure** - Rural areas without cable/fiber
2. **Cost of running cable is prohibitive** - Long driveways, difficult terrain
3. **Faster deployment** - Need internet quickly without waiting for construction
4. **Temporary location** - Construction sites, events
5. **Building restrictions** - Historic buildings, HOA limitations
6. **DSL too slow** - Far from central office, fixed wireless offers better speed

**Fixed wireless characteristics:**
- Uses radio signals from tower to receiver on building
- Typically 25-1000 Mbps depending on technology
- Requires line-of-sight (or near line-of-sight)
- Lower latency than satellite (~20-50 ms)
- Weather can affect performance

**Not ideal when:**
- Fiber or cable available (usually faster/cheaper)
- Dense urban areas with obstacles
- Heavy tree coverage blocking line-of-sight
- Extreme weather conditions common

---

## Section 2: Activity Solutions

### Activity A-B: Connection Identification Reference

**Connection identification clues:**

| If You See... | Connection Type |
|---------------|-----------------|
| Coaxial cable (round, screw-on) | Cable |
| Phone jack used for internet | DSL |
| Small box on wall with fiber input | Fiber (ONT) |
| Dish on roof | Satellite |
| Antenna/receiver pointing at tower | Fixed Wireless |
| Device with SIM card | Cellular |

**Equipment chain examples:**

**Cable:**
```
Street pole → Coax drop → Ground block → Splitter → Cable modem → Router → Devices
```

**Fiber:**
```
Street/underground → Fiber drop → ONT (Optical Network Terminal) → Ethernet → Router → Devices
```

**DSL:**
```
Phone pole → Drop wire → NID → Inside wiring → DSL modem → Router → Devices
```

---

### Activity C: Speed Test Reference

**Why speeds vary by time:**

| Time | Typical Speed | Why |
|------|---------------|-----|
| Early morning (5-8 AM) | Fastest | Low usage |
| Workday (9 AM-5 PM) | Good | Business use, residential low |
| Evening (6-10 PM) | Slowest | Peak residential usage |
| Late night (11 PM-5 AM) | Fast | Low usage |

**Cable's "shared bandwidth" issue:**

Cable networks use a shared node for neighborhoods. During peak hours, everyone streaming/gaming shares that capacity. Fiber typically doesn't have this issue.

**Expected vs actual speeds:**

| Advertised | Acceptable Actual |
|------------|-------------------|
| 100 Mbps | 80-100 Mbps |
| 300 Mbps | 250-300 Mbps |
| 1 Gbps | 800-950 Mbps |

Wireless connections will always be slower than wired due to overhead.

---

### Activity D: Connection Types Complete

| Connection Type | Max Download | Max Upload | Typical Latency | Availability |
|-----------------|--------------|------------|-----------------|--------------|
| Dial-up | 56 Kbps | 33.6 Kbps | 100-200 ms | Universal (phone line) |
| DSL (ADSL) | 24 Mbps | 3 Mbps | 20-50 ms | Within 18,000 ft of CO |
| DSL (VDSL) | 100 Mbps | 40 Mbps | 10-30 ms | Within 4,000 ft of node |
| Cable (DOCSIS 3.0) | 1 Gbps | 200 Mbps | 10-30 ms | Urban/suburban |
| Cable (DOCSIS 3.1) | 10 Gbps | 1-2 Gbps | 10-30 ms | Growing availability |
| Fiber (FTTH) | 10+ Gbps | 10+ Gbps | 1-10 ms | Urban, expanding |
| Fixed Wireless | 1 Gbps | 500 Mbps | 20-50 ms | Varies by provider |
| Satellite (GEO) | 100 Mbps | 20 Mbps | 500-700 ms | Global |
| Satellite (LEO) | 250 Mbps | 40 Mbps | 20-50 ms | Growing coverage |
| 4G LTE Home | 50 Mbps | 10 Mbps | 30-50 ms | Cellular coverage |
| 5G Home | 1 Gbps | 100 Mbps | 10-30 ms | Urban, expanding |

**FTTx variations:**

| Acronym | Full Name | Fiber Reaches | Last Mile |
|---------|-----------|---------------|-----------|
| FTTP | Fiber to the Premises | Your building | Fiber |
| FTTH | Fiber to the Home | Your home | Fiber |
| FTTC | Fiber to the Curb | Street curb | Copper (short) |
| FTTN | Fiber to the Node | Neighborhood node | Copper (longer) |
| FTTB | Fiber to the Building | Building basement | Ethernet/copper |

**The "last mile" problem:**

The final connection from ISP infrastructure to customer premises is the most expensive and difficult part. Running new cable/fiber to each home is costly, which is why many areas still lack fiber.

---

### Activity E: Cable Internet Reference

**DOCSIS Versions:**

| Version | Max Download | Max Upload | Year | Channels |
|---------|--------------|------------|------|----------|
| DOCSIS 2.0 | 42 Mbps | 30 Mbps | 2001 | 1 |
| DOCSIS 3.0 | 1 Gbps | 200 Mbps | 2006 | Up to 32 |
| DOCSIS 3.1 | 10 Gbps | 1-2 Gbps | 2013 | OFDM |
| DOCSIS 4.0 | 10 Gbps | 6 Gbps | 2020 | Full duplex |

**Channel bonding:**

Combining multiple 6 MHz channels to increase bandwidth. A 16-channel modem bonds 16 channels for higher throughput than a single channel.

**Cable speed ratio:**

Typically 10:1 to 35:1 (download to upload). Example: 300/10, 500/20, 1000/35.

**Why evening slowdowns:**

Cable nodes are shared. When neighbors stream Netflix, game online, and video chat simultaneously (6-10 PM), everyone shares the node's capacity.

---

### Activity F: DSL Reference

**DSL Types:**

| Type | Full Name | Speed | Max Distance |
|------|-----------|-------|--------------|
| ADSL | Asymmetric DSL | 24 Mbps down / 3 Mbps up | 18,000 ft |
| ADSL2+ | Enhanced ADSL | 24 Mbps down / 3.5 Mbps up | 18,000 ft |
| VDSL | Very High Bitrate DSL | 52 Mbps down / 16 Mbps up | 4,000 ft |
| VDSL2 | Enhanced VDSL | 100 Mbps down / 40 Mbps up | 3,000 ft |

**Why distance matters:**

DSL uses electrical signals over copper phone lines. Higher frequencies (faster speeds) attenuate more over distance. The farther you are from the DSLAM, the slower your maximum speed.

**DSLAM (DSL Access Multiplexer):**

Located at central office or remote terminal. Aggregates DSL connections from customers and connects to ISP network.

**DSL filter:**

Separates voice frequencies from data frequencies so phone calls don't interfere with internet. Required on every phone jack in the house when using DSL.

**Phone + DSL simultaneously:**

Yes! DSL uses different frequencies than voice calls. Filters ensure they don't interfere.

---

### Activity G: Fiber Reference

**Fiber advantages:**

1. Fastest speeds (multi-gigabit)
2. Symmetrical upload/download
3. Lowest latency
4. No signal degradation over distance
5. Immune to electromagnetic interference
6. Consistent speeds during peak hours
7. Most future-proof technology
8. No weather-related interference
9. More reliable (fewer outages)
10. Lower power consumption for equipment

**Fiber terminology:**

| Term | Definition |
|------|------------|
| ONT | Optical Network Terminal - converts fiber light to Ethernet |
| OLT | Optical Line Terminal - ISP's equipment at central office |
| GPON | Gigabit Passive Optical Network - common fiber technology |
| Symmetrical | Same speed up and down |

---

### Activity H: Satellite Reference

**GEO vs LEO Satellite:**

| Feature | GEO (HughesNet, Viasat) | LEO (Starlink) |
|---------|-------------------------|----------------|
| Orbit altitude | 35,786 km | 550 km |
| Latency | 500-700 ms | 20-50 ms |
| Coverage | Fixed coverage areas | Global (with enough satellites) |
| Equipment | Large dish, fixed pointing | Smaller dish, self-orienting |
| Weather sensitivity | High | Moderate |
| Typical speeds | 25-100 Mbps | 50-250 Mbps |
| Satellites needed | 3 for global | 4,000+ for global |

**GEO Latency calculation:**

- Distance: 35,786 km × 4 trips = 143,144 km
- Speed of light: 299,792 km/s
- Minimum latency: 143,144 ÷ 299,792 = 0.477 seconds = **477 ms**
- With processing: 500-700 ms typical

**When satellite is best:**
- Rural areas with no other options
- Marine/aviation
- Remote locations
- Disaster recovery/backup

**When satellite is poor:**
- Gaming (latency too high for GEO)
- Real-time trading
- VoIP (noticeable delay)
- When alternatives exist

---

### Activity I: Cellular Home Internet Reference

**Provider comparison:**

| Provider | Technology | Typical Speeds | Data Limits |
|----------|------------|----------------|-------------|
| T-Mobile Home Internet | 4G/5G | 50-200 Mbps | None (deprioritized after heavy use) |
| Verizon 5G Home | 5G UWB/C-band | 100-1000 Mbps | None |
| AT&T Fixed Wireless | 4G/5G | 25-100 Mbps | Varies |
| Starry Internet | Fixed Wireless | 200-1000 Mbps | None |

**4G vs 5G:**

| Feature | 4G LTE | 5G Sub-6 | 5G mmWave |
|---------|--------|----------|-----------|
| Typical speed | 25-50 Mbps | 100-300 Mbps | 500-2000 Mbps |
| Latency | 30-50 ms | 15-30 ms | 10-20 ms |
| Range | Miles | Miles | Feet (needs line of sight) |
| Building penetration | Good | Good | Poor |

**When cellular home internet works well:**
- Underserved areas where it's faster than DSL
- T-Mobile/Verizon has strong signal at location
- Don't want contract or installation
- Backup internet option

**Drawbacks:**
- Speed varies by cell tower congestion
- May be deprioritized behind phone users
- Signal strength dependent
- Weather can affect performance

---

### Activity K: Latency Reference

**Latency by connection type:**

| Connection | Typical Latency | Why |
|------------|-----------------|-----|
| Fiber | 1-10 ms | Light travels fastest, direct connection |
| Cable | 10-30 ms | Shared infrastructure, some processing |
| DSL | 20-50 ms | Copper, distance dependent |
| 5G | 10-30 ms | New technology, optimized |
| 4G LTE | 30-50 ms | Wireless overhead |
| Satellite (LEO) | 20-50 ms | Short distance to satellites |
| Satellite (GEO) | 500-700 ms | 35,000+ km to satellite |

**Why latency matters by use case:**

| Activity | Why Latency Matters |
|----------|---------------------|
| Gaming | Actions need instant response |
| Video calls | Conversations feel natural |
| VoIP | No awkward pauses |
| Stock trading | Milliseconds matter for trades |
| Streaming | Doesn't matter (buffered) |
| Downloads | Doesn't matter (sustained transfer) |

---

### Activity L: Business vs Residential Reference

| Feature | Residential | Business |
|---------|-------------|----------|
| SLA uptime guarantee | No | Yes (99.9%+) |
| Static IP | No (or extra cost) | Usually included |
| Support | Business hours | 24/7 |
| Repair priority | Standard | Expedited |
| Symmetrical speeds | Rare | More common |
| Data caps | May have | Usually none |
| Price | Lower | Higher |
| Contract | Monthly or annual | Annual or multi-year |

**When business class is worth it:**
- Running servers (need static IP)
- Uptime is critical (SLA)
- Upload speed matters (cloud, video)
- Need 24/7 support

**SLA (Service Level Agreement):**

Contract guaranteeing uptime percentage. If ISP fails to meet SLA, customer gets credits. Example: 99.9% SLA allows only 8.76 hours downtime per year.

**Static IP uses:**
- Running mail server
- VPN server
- Remote access to systems
- Security cameras accessible remotely
- Hosting any server

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Rural Work From Home - Satellite vs Weak Cellular

**Recommendation: Cellular (4G)**

| Factor | Satellite (HughesNet) | Cellular (1 bar 4G) |
|--------|----------------------|---------------------|
| Latency | 500-700 ms | 50-100 ms |
| Video calls | Very difficult (lag) | Workable |
| Speed | 25-50 Mbps | 5-15 Mbps |

**Why cellular wins:**

Even with weak signal and slower speeds, the lower latency makes video conferencing functional. Satellite's 600+ ms latency causes 1+ second delays in conversation - essentially unusable for real-time communication.

**Additional suggestions:**
- External cellular antenna to improve signal
- Cellular signal booster
- Try multiple carriers (coverage varies)
- Consider Starlink if available (LEO = low latency)

---

### Scenario 2: Cable Speed Drops Every Evening

**What's happening:**

Cable internet uses shared neighborhood nodes. During peak hours (7-10 PM), everyone streaming, gaming, and video calling shares the same capacity. This is called **network congestion** or **over-subscription**.

**Solutions:**

| Solution | Effectiveness | Cost |
|----------|---------------|------|
| Upgrade to faster tier | May help | Higher monthly |
| Switch to fiber (if available) | Fixes issue | Varies |
| Complain to ISP | May improve | Free |
| Change usage patterns | Avoids problem | Free |
| File FCC complaint | May force upgrade | Free |

**ISP's responsibility:**

If you're consistently getting 25% of advertised speed, ISP is likely over-subscribed. Document speeds with screenshots and timestamps, then contact ISP. If no resolution, file FCC complaint.

---

### Scenario 3: 100 Mbps Cable vs 100 Mbps Fiber for Business

**Factors beyond download speed:**

| Factor | Cable | Fiber | Winner |
|--------|-------|-------|--------|
| Upload speed | ~10 Mbps | 100 Mbps | Fiber |
| Latency | 10-30 ms | 1-10 ms | Fiber |
| Reliability | Good | Excellent | Fiber |
| Consistent speed | Peak hour drops | No degradation | Fiber |
| SLA available | Rare | Common | Fiber |
| Future upgrades | Limited | Easy | Fiber |

**Recommendation:** The $30/month difference is worth it for:
- Symmetrical speeds (cloud backup, video calls)
- Better reliability
- Lower latency
- No peak-hour slowdowns

For a business where downtime costs money, fiber's reliability alone justifies the premium.

---

### Scenario 4: Buy or Rent Modem

**Factors to consider:**

| Factor | Buy | Rent |
|--------|-----|------|
| Monthly cost | $0 (after purchase) | $10-15/month |
| Upfront cost | $80-200 | $0 |
| Break-even | 6-18 months | N/A |
| Maintenance | Your responsibility | ISP handles |
| Upgrades | Your cost | ISP upgrades |
| Tech support | Limited | Full support |
| Compatibility | Must verify | Guaranteed |

**Buy your own when:**
- Staying at address 2+ years
- Comfortable with basic troubleshooting
- Want to avoid long-term rental fees
- ISP-provided equipment is low quality

**Rent when:**
- Short-term residence
- Want no-hassle support
- ISP has fiber (often requires their ONT)
- Not comfortable with equipment issues

**Math example:**
- Rental: $12/month = $144/year, $720 over 5 years
- Purchase: $150 one-time

Buying saves $570 over 5 years in this example.

---

## Key Takeaways

**For the A+ Exam:**

1. **Cable uses DOCSIS** - 3.0 for gigabit, 3.1 for multi-gigabit

2. **DSL speed decreases with distance** from central office

3. **Fiber = fastest, symmetrical, lowest latency** - best overall

4. **Satellite latency:**
   - GEO = 500-700 ms (HughesNet, Viasat)
   - LEO = 20-50 ms (Starlink)

5. **Symmetrical = same up/down** (fiber, SDSL)
   **Asymmetrical = different** (cable, ADSL, most connections)

6. **FTTx:**
   - FTTH/FTTP = fiber to your home
   - FTTC = fiber to curb, copper last bit
   - FTTN = fiber to neighborhood node

7. **Fixed wireless** = alternative for rural, needs line-of-sight

8. **Business service** = SLA, static IP, priority support

**For Real-World Skills:**

- Check modem's DOCSIS version when troubleshooting speed issues
- Consider upload speed for work-from-home setups
- Satellite latency makes real-time applications difficult
- Evening slowdowns on cable = congested node
- Buying your own modem saves money long-term

---

**Congratulations on completing Lab 11!**

You now understand the various ways people connect to the internet, each with unique advantages and limitations. This knowledge helps you recommend appropriate solutions and troubleshoot connectivity issues.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 11: Internet Connection Types - Solution Guide*