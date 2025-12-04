# Lab 8: Network Devices and Infrastructure

**Tier:** 1 (Universal) + 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 2.2 - Compare and contrast common networking hardware

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the fundamental difference between a hub and a switch, and why are hubs considered obsolete?**

2. **Explain what PoE (Power over Ethernet) is and give two examples of devices that commonly use it.**

3. **What is the difference between a managed and an unmanaged switch?**

4. **Why would a network need both a modem AND a router? What does each device do?**

5. **What is the purpose of a patch panel in a network infrastructure?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses your home network and research** - Explore the network devices you interact with daily.

---

#### Activity A: Home Network Device Inventory

**Goal:** Identify and document all network devices in your home or workspace.

**Find and document each device:**

| Device | Make/Model | Location | Function | Connected To |
|--------|------------|----------|----------|--------------|
| Modem | | | | |
| Router | | | | |
| Switch (if any) | | | | |
| Access Point (if separate) | | | | |
| Other: | | | | |

**Common scenarios:**

What type of setup do you have?

- [ ] ISP modem + separate router
- [ ] Combined modem/router (gateway)
- [ ] Combined modem/router + additional switch
- [ ] Combined modem/router + mesh Wi-Fi system
- [ ] Other: _______________________

**Device details for your router (or gateway):**

Access your router's admin interface (usually 192.168.1.1 or 192.168.0.1):

| Setting | Value |
|---------|-------|
| Router IP address | |
| Admin interface URL | |
| Router manufacturer | |
| Model number | |
| Firmware version | |
| Number of LAN ports | |
| Number of devices connected | |
| Wi-Fi networks broadcasting | |

---

#### Activity B: Network Device Physical Inspection

**Goal:** Examine the physical characteristics of network devices.

**Router/Gateway inspection:**

| Feature | Present? | Details |
|---------|----------|---------|
| WAN/Internet port | [ ] Yes [ ] No | Color: _____ |
| LAN ports | [ ] Yes [ ] No | Count: _____ |
| USB port(s) | [ ] Yes [ ] No | Count: _____ |
| Reset button | [ ] Yes [ ] No | Location: _____ |
| WPS button | [ ] Yes [ ] No | |
| Power button | [ ] Yes [ ] No | |
| External antennas | [ ] Yes [ ] No | Count: _____ |
| Internal antennas | [ ] Yes [ ] No | |
| LED indicators | [ ] Yes [ ] No | Count: _____ |
| Ventilation holes | [ ] Yes [ ] No | |
| Wall-mount holes | [ ] Yes [ ] No | |

**LED indicator meanings:**

Document what each LED indicates on your router:

| LED Label | Color When On | Blinking Meaning | Off Meaning |
|-----------|---------------|------------------|-------------|
| Power | | | |
| Internet/WAN | | | |
| LAN 1-4 | | | |
| Wi-Fi 2.4G | | | |
| Wi-Fi 5G | | | |
| WPS | | | |
| USB | | | |

**Port speed identification:**

Look at the LAN ports. Any indication of speed?

- [ ] 10/100 Mbps (Fast Ethernet)
- [ ] 10/100/1000 Mbps (Gigabit)
- [ ] 2.5 Gbps
- [ ] Not labeled

How can you tell the port speed from the device specs? _______________________

---

#### Activity C: Modem Investigation

**Goal:** Understand your internet connection type and modem function.

**What type of internet connection do you have?**

- [ ] Cable (coaxial input)
- [ ] DSL (phone line input)
- [ ] Fiber (fiber optic input)
- [ ] Fixed wireless
- [ ] Satellite
- [ ] Cellular/5G home internet
- [ ] Unknown

**Modem details (if separate from router):**

| Feature | Your Modem |
|---------|------------|
| Manufacturer | |
| Model | |
| Connection type input | |
| Ethernet output ports | |
| DOCSIS version (cable) | |
| LED indicators | |

**If you have a combined modem/router (gateway):**

Who provided this device?
- [ ] ISP-provided (rented)
- [ ] ISP-provided (purchased)
- [ ] I purchased my own
- [ ] Don't know

**What's your WAN IP address?**

1. Find it in router admin OR search "what is my IP" in browser
2. WAN IP: _______________________
3. Is this a public or private IP? _______________________

**How to tell:** Private IPs start with 10.x.x.x, 172.16-31.x.x, or 192.168.x.x

---

#### Activity D: Switch Identification and Research

**Goal:** Understand switch types and features.

**Do you have a standalone switch?**

- [ ] Yes → Continue below
- [ ] No → Research a switch online for this activity

**If you have a switch, document it:**

| Feature | Your Switch |
|---------|-------------|
| Manufacturer | |
| Model | |
| Number of ports | |
| Port speed | |
| Managed or unmanaged? | |
| PoE capable? | |
| Rack-mountable? | |
| LED per port? | |

**Switch comparison research:**

Find one example of each switch type online:

| Switch Type | Example Model | Port Count | Approx. Price | Use Case |
|-------------|---------------|------------|---------------|----------|
| Unmanaged (basic) | | | | |
| Smart/Web-managed | | | | |
| Fully managed | | | | |
| PoE switch | | | | |

**Managed switch features:**

Research what features a managed switch provides that an unmanaged switch doesn't:

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

---

#### Activity E: Wireless Access Point Exploration

**Goal:** Understand access points vs routers.

**Your current Wi-Fi setup:**

| Question | Answer |
|----------|--------|
| Is Wi-Fi built into your router? | [ ] Yes [ ] No |
| Do you have separate access points? | [ ] Yes [ ] No |
| Do you have a mesh Wi-Fi system? | [ ] Yes [ ] No |
| How many Wi-Fi networks (SSIDs) do you broadcast? | |
| Do you have separate 2.4 GHz and 5 GHz networks? | [ ] Yes [ ] No [ ] Combined |

**If you have separate access points or mesh nodes:**

| Device | Location | Connected Via |
|--------|----------|---------------|
| 1. | | [ ] Ethernet [ ] Wireless backhaul |
| 2. | | [ ] Ethernet [ ] Wireless backhaul |
| 3. | | [ ] Ethernet [ ] Wireless backhaul |

**Access point vs router:**

Explain in your own words: What's the difference between a wireless access point and a wireless router?

_________________________________________________________________

_________________________________________________________________

**When would you use a standalone access point instead of a router?**

_________________________________________________________________

---

#### Activity F: PoE Device Identification

**Goal:** Identify PoE devices and understand PoE standards.

**PoE devices in your environment:**

| Device | Uses PoE? | PoE Standard | Power (watts) |
|--------|-----------|--------------|---------------|
| Security cameras | [ ] Yes [ ] No [ ] N/A | | |
| VoIP phones | [ ] Yes [ ] No [ ] N/A | | |
| Access points | [ ] Yes [ ] No [ ] N/A | | |
| Doorbells (Ring, etc.) | [ ] Yes [ ] No [ ] N/A | | |
| Other: | [ ] Yes [ ] No [ ] N/A | | |

**PoE standards research:**

| Standard | Also Known As | Max Power | Typical Devices |
|----------|---------------|-----------|-----------------|
| 802.3af | | | |
| 802.3at | | | |
| 802.3bt Type 3 | | | |
| 802.3bt Type 4 | | | |

**PoE power sourcing:**

What are the two ways to add PoE power to a network?

1. _______________________
2. _______________________

**What is a PoE injector, and when would you use one?**

_________________________________________________________________

---

#### Activity G: Patch Panel Concepts

**Goal:** Understand structured cabling and patch panels.

**Research exercise:**

Look up images and documentation for patch panels, then answer:

**1. What is the purpose of a patch panel?**

_________________________________________________________________

**2. Where are patch panels typically located?**

- [ ] Server room / network closet
- [ ] At each desk
- [ ] Behind wall plates
- [ ] All of the above

**3. Sketch or describe how cable runs work with a patch panel:**

```
Wall jack → _____________ → _____________ → _____________ → Device
```

**4. Why use a patch panel instead of running cables directly to the switch?**

Benefit 1: _______________________

Benefit 2: _______________________

Benefit 3: _______________________

**5. What is the difference between:**

- Patch cable: _______________________
- Structured cable (horizontal run): _______________________

---

#### Activity H: Firewall and Security Devices

**Goal:** Understand network security devices.

**Your router's firewall settings:**

Access your router's security/firewall section:

| Feature | Enabled? | Notes |
|---------|----------|-------|
| Firewall (SPI/NAT) | [ ] Yes [ ] No | |
| DoS protection | [ ] Yes [ ] No | |
| Port filtering | [ ] Yes [ ] No | |
| Content filtering | [ ] Yes [ ] No | |
| Parental controls | [ ] Yes [ ] No | |
| VPN passthrough | [ ] Yes [ ] No | |
| DMZ | [ ] Yes [ ] No | |
| UPnP | [ ] Yes [ ] No | |

**Firewall types research:**

| Firewall Type | How It Works | Where Used |
|---------------|--------------|------------|
| Packet filtering | | |
| Stateful inspection | | |
| Application layer (Layer 7) | | |
| Next-gen (NGFW) | | |

**What's the difference between a firewall and these devices?**

- IDS (Intrusion Detection System): _______________________
- IPS (Intrusion Prevention System): _______________________
- UTM (Unified Threat Management): _______________________

---

#### Activity I: Network Storage Devices

**Goal:** Understand NAS and storage networking basics.

**Do you have network storage?**

- [ ] NAS (Network Attached Storage) device
- [ ] USB drive shared via router
- [ ] Cloud storage only
- [ ] Server with shared folders
- [ ] None

**If you have a NAS or shared storage:**

| Feature | Your Setup |
|---------|------------|
| Device/brand | |
| Total capacity | |
| RAID configuration | |
| Access method (SMB, NFS, web) | |
| Remote access enabled? | |

**NAS vs SAN research:**

| Feature | NAS | SAN |
|---------|-----|-----|
| Full name | | |
| Protocol | | |
| Connection type | | |
| Appears to computer as | | |
| Typical use | | |
| Cost | | |

---

### Tier 2 Bonus Activities

> ⚠️ **Requires access to business/enterprise network equipment** or a lab environment with managed switches, access points, or other infrastructure gear.

---

#### Activity J: Managed Switch Exploration

**Goal:** Explore a managed switch interface.

**If you have access to a managed switch:**

**Access the management interface:**

| Setting | Value |
|---------|-------|
| Switch IP address | |
| Access method (web, SSH, console) | |
| Username | |

**Document switch configuration:**

| Feature | Current Setting |
|---------|-----------------|
| Hostname | |
| Number of VLANs configured | |
| Spanning Tree enabled? | |
| Port mirroring configured? | |
| PoE budget (if PoE switch) | |
| SNMP enabled? | |
| Firmware version | |

**Port status check:**

| Port | Status | Speed | VLAN | PoE Status |
|------|--------|-------|------|------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |

**VLAN configuration (if applicable):**

| VLAN ID | Name | Purpose | Ports Assigned |
|---------|------|---------|----------------|
| 1 | | | |
| | | | |
| | | | |

---

#### Activity K: Access Point Configuration

**Goal:** Configure an access point.

**If you have access to a standalone access point:**

**Document current configuration:**

| Setting | Value |
|---------|-------|
| AP IP address | |
| Management method | |
| SSID(s) configured | |
| Security mode | |
| Channel (2.4 GHz) | |
| Channel (5 GHz) | |
| Transmit power | |
| Client isolation enabled? | |
| Band steering enabled? | |

**Connected clients:**

| Client | MAC Address | IP Address | Band | Signal Strength |
|--------|-------------|------------|------|-----------------|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |

---

#### Activity L: Network Diagram Creation

**Goal:** Document your network infrastructure visually.

**Create a network diagram showing:**

- [ ] Internet connection (ISP)
- [ ] Modem
- [ ] Router
- [ ] Switches (if any)
- [ ] Access points (if any)
- [ ] Major devices (computers, servers, NAS)
- [ ] IP addresses
- [ ] Connection types (wired/wireless)

**Use paper, drawing software, or a tool like draw.io**

Your diagram should show:
1. Physical connections between devices
2. IP addressing scheme
3. Wi-Fi coverage areas
4. Any VLANs or network segmentation

**Attach or describe your diagram:**

_________________________________________________________________

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A small office has 20 computers but their router only has 4 LAN ports. What device do they need, and what specifications matter?**

2. **A business wants to add security cameras throughout their building without running power cables to each camera location. What solution would you recommend?**

3. **An employee complains their computer negotiates at 100 Mbps when connected to the network. Others on the same switch get gigabit speeds. What are possible causes?**

4. **A company's network has grown from 10 to 50 devices. The IT admin says they need a "managed switch" instead of the consumer switch they've been using. What benefits does this provide?**

---

## What You Learned Today

- ✅ Inventoried network devices in your environment
- ✅ Examined physical ports and LED indicators
- ✅ Understood modem vs router functions
- ✅ Compared managed vs unmanaged switches
- ✅ Explored wireless access point concepts
- ✅ Learned PoE standards and applications
- ✅ Understood patch panel purpose in structured cabling
- ✅ Explored firewall and security device types
- ✅ Compared NAS vs SAN storage
- ✅ (Tier 2) Explored managed switch interfaces
- ✅ (Tier 2) Documented access point configuration
- ✅ (Tier 2) Created a network diagram

**Next Lab:** Wireless Networking Standards - diving deep into 802.11 protocols and Wi-Fi configuration.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 8: Network Devices and Infrastructure*