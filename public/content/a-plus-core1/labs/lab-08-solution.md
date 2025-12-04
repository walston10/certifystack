# Lab 8: Network Devices and Infrastructure - Solution Guide

**Note to Students:** Only review this AFTER completing your own work! You'll learn more by discovering things yourself first.

---

## Section 1: Concept Check - Answers

**1. What is the fundamental difference between a hub and a switch, and why are hubs considered obsolete?**

**Answer:**

A **hub** operates at Layer 1 (Physical) and broadcasts every frame to all ports. When one device sends data, every other device receives it, creating a single collision domain. Only one device can transmit at a time.

A **switch** operates at Layer 2 (Data Link) and uses MAC addresses to forward frames only to the specific port where the destination device is connected. Each port is its own collision domain, allowing simultaneous communications.

**Why hubs are obsolete:**
- Hubs share bandwidth (100 Mbps hub = 100 Mbps total for all devices)
- Switches provide dedicated bandwidth per port
- Hubs create more collisions and network congestion
- Security concerns (all devices see all traffic)
- Switches are now similarly priced

**Exam tip:** Hubs are "dumb repeaters" while switches are "intelligent forwarders."

---

**2. Explain what PoE (Power over Ethernet) is and give two examples of devices that commonly use it.**

**Answer:**

**PoE (Power over Ethernet)** delivers electrical power along with data over standard Ethernet cables. This eliminates the need for separate power cables and outlets at device locations.

**Common PoE devices:**
1. **IP security cameras** - Installed on ceilings/walls where outlets may not exist
2. **VoIP phones** - Desk phones powered through the network cable
3. **Wireless access points** - Often mounted on ceilings for optimal coverage
4. **Video doorbells** - Ring, Nest doorbell cameras
5. **Point-of-sale terminals**
6. **Digital signage displays**

**How it works:** The PoE switch (or injector) sends DC voltage over the unused pairs (or all pairs in newer standards) of the Ethernet cable. The powered device (PD) extracts the power it needs.

---

**3. What is the difference between a managed and an unmanaged switch?**

**Answer:**

| Feature | Unmanaged Switch | Managed Switch |
|---------|------------------|----------------|
| Configuration | None - plug and play | Full configuration interface |
| VLANs | No | Yes |
| QoS (Quality of Service) | No | Yes |
| Port mirroring | No | Yes |
| SNMP monitoring | No | Yes |
| Spanning Tree | Basic or none | Full control |
| Port security | No | Yes |
| Access control | No | SSH, HTTPS, console |
| Link aggregation | No | Yes |
| Price | Lower ($20-100) | Higher ($100-1000+) |

**When to use each:**
- **Unmanaged:** Home networks, small offices, simple expansion
- **Managed:** Business networks, VLANs needed, security requirements, troubleshooting capabilities

---

**4. Why would a network need both a modem AND a router? What does each device do?**

**Answer:**

**Modem (Modulator/Demodulator):**
- Converts ISP's signal to Ethernet (and vice versa)
- Translates between different physical media
- Cable modem: Coax → Ethernet
- DSL modem: Phone line → Ethernet
- Fiber ONT: Fiber optic → Ethernet
- Provides one public IP address from ISP

**Router:**
- Routes traffic between networks (your LAN and the internet)
- Provides NAT (Network Address Translation)
- Creates a private IP network for your devices
- Includes DHCP server for automatic IP assignment
- Contains firewall functionality
- Often includes Wi-Fi (wireless router)

**Why both are needed:**
The modem speaks your ISP's "language" while the router manages your internal network. Many ISPs provide combined devices (gateways), but these are two distinct functions.

**Analogy:** The modem is like a translator at the border, while the router is like a post office sorting mail to correct addresses inside your building.

---

**5. What is the purpose of a patch panel in a network infrastructure?**

**Answer:**

A **patch panel** is a passive device that terminates permanent cable runs from wall jacks, providing a central connection point in a network closet or server room.

**Purpose and benefits:**

1. **Organization** - All cable runs terminate in one location
2. **Flexibility** - Change connections without re-running cables
3. **Protection** - Permanent cables aren't repeatedly plugged/unplugged
4. **Labeling** - Easy identification of which cable goes where
5. **Troubleshooting** - Test and trace cables from central location
6. **Professionalism** - Clean, organized infrastructure

**How it works:**
```
Wall Jack ← Horizontal Cable → Patch Panel ← Patch Cable → Switch
```

The permanent (horizontal) cables are punched down to the patch panel. Short patch cables connect the panel to the switch. This means the delicate permanent cabling is never touched after installation.

---

## Section 2: Activity Solutions

### Activity A-B: Network Device Reference

**Common home network setups:**

| Setup Type | Components | Typical Use |
|------------|------------|-------------|
| ISP Gateway | Combined modem/router/Wi-Fi | Most residential |
| Separate devices | Modem + router | Power users |
| Extended | Gateway + mesh nodes | Large homes |
| Business | Modem + router + switch + APs | Small business |

**Router LED meanings (typical):**

| LED | Solid Green | Blinking | Off/Red |
|-----|-------------|----------|---------|
| Power | On | N/A | No power |
| Internet | Connected | Traffic | No WAN connection |
| LAN ports | Device connected | Traffic | No connection |
| Wi-Fi | Enabled | Traffic | Disabled |
| WPS | Ready | Pairing | Disabled |

**Port identification:**

- LAN ports (yellow/labeled 1-4): Internal network
- WAN port (blue/labeled Internet): To modem
- Gigabit ports often have different color or marking
- Check model specifications for actual speeds

---

### Activity C: Modem Reference

**Modem types by connection:**

| Connection | Input | Technology | Typical Speeds |
|------------|-------|------------|----------------|
| Cable | Coaxial (F-type) | DOCSIS 3.0/3.1 | 100-1000+ Mbps |
| DSL | RJ-11 (phone) | ADSL/VDSL | 1-100 Mbps |
| Fiber | SC/LC fiber or Ethernet | GPON/EPON | 100-2000+ Mbps |
| Cellular | SIM card | 4G LTE/5G | 25-1000+ Mbps |
| Satellite | Coaxial | DVB-S | 25-100 Mbps |

**DOCSIS versions (cable):**

| Version | Max Download | Notes |
|---------|--------------|-------|
| DOCSIS 3.0 | ~1 Gbps | 32 channels |
| DOCSIS 3.1 | ~10 Gbps | OFDM modulation |
| DOCSIS 4.0 | ~10 Gbps up/down | Symmetrical speeds |

**Public vs Private IP:**

If your WAN IP starts with 10, 172.16-31, or 192.168, you're behind carrier-grade NAT (CGNAT). This is common with cellular home internet and some cable providers.

---

### Activity D: Switch Comparison - Complete

| Switch Type | Example | Ports | Price | Use Case |
|-------------|---------|-------|-------|----------|
| Unmanaged | NETGEAR GS108 | 8 | $30 | Home, desk expansion |
| Smart/Web-managed | TP-Link TL-SG108E | 8 | $40 | Small business, VLANs |
| Fully managed | Cisco SG350-10 | 10 | $250 | Enterprise, full control |
| PoE | Ubiquiti US-8-60W | 8 | $100 | Cameras, VoIP, APs |

**Managed switch features:**

1. **VLANs** - Segment network logically
2. **QoS** - Prioritize voice/video traffic
3. **Port mirroring/SPAN** - Copy traffic for monitoring
4. **SNMP** - Remote monitoring and alerts
5. **Spanning Tree control** - Prevent loops
6. **Port security** - Limit MAC addresses per port
7. **Link aggregation** - Combine ports for bandwidth
8. **Access control lists** - Filter traffic
9. **IGMP snooping** - Optimize multicast
10. **Remote management** - SSH, web interface

---

### Activity E: Access Point vs Router

**Access Point:**
- Layer 2 device
- Bridges wireless to wired network
- No routing, NAT, or DHCP
- Needs existing network infrastructure
- Extends Wi-Fi coverage

**Wireless Router:**
- Layer 3 device (router + AP combined)
- Routes between networks
- Provides NAT, DHCP, firewall
- Connects directly to modem
- All-in-one solution

**When to use standalone APs:**

1. Extending coverage in large areas
2. Enterprise networks with centralized management
3. When router is in poor location for Wi-Fi
4. Mesh-like deployments with wired backhaul
5. When you need multiple APs with same SSID

---

### Activity F: PoE Standards - Complete

| Standard | Also Known As | Max Power | Typical Devices |
|----------|---------------|-----------|-----------------|
| 802.3af | PoE | 15.4W (12.95W usable) | Basic IP phones, simple cameras |
| 802.3at | PoE+ | 30W (25.5W usable) | PTZ cameras, dual-radio APs |
| 802.3bt Type 3 | PoE++ / 4PPoE | 60W | Video conferencing, thin clients |
| 802.3bt Type 4 | PoE++ / 4PPoE | 100W | Laptops, TVs, high-power devices |

**PoE power sourcing methods:**

1. **PoE Switch (Endspan)** - Switch provides power on all/some ports
2. **PoE Injector (Midspan)** - Adds power to existing cable between switch and device

**When to use injector:**
- Adding one or two PoE devices
- Existing non-PoE switch
- Temporary installations
- Budget constraints

---

### Activity G: Patch Panel Reference

**Cable path with patch panel:**

```
Wall jack ← Horizontal run (solid cable) → Patch panel ← Patch cable (stranded) → Switch
```

**Why this design:**

| Benefit | Explanation |
|---------|-------------|
| Cable protection | Permanent cables not handled after install |
| Easy changes | Move device to different switch port with patch cable |
| Troubleshooting | Test each segment independently |
| Labeling | Document every drop at patch panel |
| Upgrades | Change switch without touching permanent cables |

**Cable types:**

| Type | Construction | Use |
|------|--------------|-----|
| Patch cable | Stranded copper | Short runs, frequent handling |
| Horizontal/structured | Solid copper | Permanent runs in walls/ceilings |

Stranded is more flexible but slightly higher resistance. Solid is better for long runs and punch-down terminations.

---

### Activity H: Security Device Reference

**Firewall types:**

| Type | Layer | How It Works |
|------|-------|--------------|
| Packet filtering | 3-4 | Examines IP/port, no context |
| Stateful inspection | 3-4 | Tracks connection state |
| Application layer | 7 | Deep packet inspection, understands protocols |
| Next-gen (NGFW) | 3-7 | Application awareness, IPS, threat intelligence |

**Security device comparison:**

| Device | Function | Action |
|--------|----------|--------|
| Firewall | Filter traffic by rules | Allow/deny connections |
| IDS | Detect suspicious activity | Alert only (passive) |
| IPS | Detect and prevent attacks | Block attacks (inline) |
| UTM | All-in-one security | Firewall + IPS + AV + content filter |

**Consumer router firewall:**

Most home routers provide:
- NAT (hides internal IPs)
- SPI (Stateful Packet Inspection)
- Basic DoS protection

They do NOT typically provide:
- Deep packet inspection
- Application awareness
- Intrusion prevention
- Content filtering (or basic only)

---

### Activity I: NAS vs SAN - Complete

| Feature | NAS | SAN |
|---------|-----|-----|
| Full name | Network Attached Storage | Storage Area Network |
| Protocol | SMB, NFS, AFP (file-level) | iSCSI, FC (block-level) |
| Connection | Ethernet | Fiber Channel or Ethernet (iSCSI) |
| Appears as | Network share/folder | Local disk drive |
| Typical use | File sharing, backup, media | Databases, virtualization |
| Cost | Lower ($200-2000) | Higher ($10,000+) |
| Complexity | Simple setup | Requires expertise |
| Performance | Good | Excellent |

**When to use each:**

- **NAS:** Shared folders, media streaming, small business file storage
- **SAN:** Database servers, VMware datastores, high-performance computing

---

## Section 3: Reflection - Discussion Points

### Scenario 1: 20 Computers, 4 Router Ports

**Solution:** Add a switch with at least 24 ports (20 computers + room for growth).

**Specifications to consider:**

| Factor | Recommendation |
|--------|----------------|
| Port count | 24 minimum (room to grow) |
| Speed | Gigabit (1000 Mbps) |
| Type | Unmanaged OK for basic needs |
| PoE | Only if needed for phones/cameras |
| Form factor | Desktop or rack-mount |

**Connection:** Router LAN port → Switch uplink. All computers connect to switch.

---

### Scenario 2: Security Cameras Without Power Cables

**Solution:** PoE cameras + PoE switch (or PoE injectors)

**Implementation:**

1. Install PoE-capable IP cameras
2. Run single Ethernet cable to each camera location
3. Connect cables to PoE switch OR use PoE injectors
4. Network Video Recorder (NVR) connects to same network

**PoE standard selection:**

| Camera Type | Power Needed | PoE Standard |
|-------------|--------------|--------------|
| Basic fixed | 5-8W | 802.3af |
| IR night vision | 10-15W | 802.3af |
| PTZ | 20-30W | 802.3at |
| Heated housing | 40-60W | 802.3bt |

**Budget option:** PoE injectors for small installations (1-4 cameras)

---

### Scenario 3: 100 Mbps Instead of Gigabit

**Possible causes:**

| Cause | How to Verify | Fix |
|-------|---------------|-----|
| Bad cable | Test with known good cable | Replace cable |
| Only 2 pairs wired | Cable tester shows pins 4,5,7,8 open | Re-terminate or replace |
| Cat 3/Cat 5 cable | Check cable jacket printing | Replace with Cat 5e+ |
| Port setting | Check switch port config | Set to auto-negotiate |
| NIC driver | Check Device Manager | Update driver |
| NIC settings | Adapter properties | Set to auto or 1 Gbps |
| Damaged port | Try different port | Use different port |
| Duplex mismatch | Check both ends | Both should be auto |

**Troubleshooting steps:**

1. Try different cable
2. Try different switch port
3. Test cable with cable tester
4. Check NIC settings
5. Update NIC drivers
6. Check switch port configuration (if managed)

---

### Scenario 4: Growing Network Needs Managed Switch

**Benefits for 50-device network:**

| Benefit | Why It Matters |
|---------|----------------|
| VLANs | Separate departments, guest network, IoT devices |
| QoS | Prioritize VoIP phones, video calls |
| Port monitoring | Troubleshoot performance issues |
| Security | Limit MAC addresses, detect rogue devices |
| SNMP | Get alerts when problems occur |
| Documentation | See port usage, traffic stats |
| Link aggregation | Bundle ports for servers |
| Spanning Tree | Prevent loops as network grows |

**Transition approach:**

1. Deploy managed switch alongside existing
2. Configure VLANs, QoS, security features
3. Migrate devices in phases
4. Monitor and adjust settings
5. Remove old switch

---

## Key Takeaways

**For the A+ Exam:**

1. **Hub = Layer 1, broadcasts to all** | **Switch = Layer 2, forwards by MAC**

2. **Modem converts signals** | **Router routes between networks**

3. **PoE standards:** 802.3af (15W), 802.3at (30W), 802.3bt (60-100W)

4. **Managed switch features:** VLANs, QoS, SNMP, port mirroring, security

5. **Patch panel:** Central termination point for structured cabling

6. **NAS = file-level (SMB)** | **SAN = block-level (iSCSI, FC)**

7. **AP = bridges wireless to wired** | **Router = routes + NAT + DHCP**

8. **IDS = detects and alerts** | **IPS = detects and blocks**

**For Real-World Skills:**

- Always document your network infrastructure
- Use managed switches when you need visibility and control
- PoE simplifies installations but check power budgets
- Cable management at patch panels saves troubleshooting time
- Label everything - future you will thank present you

---

**Congratulations on completing Lab 8!**

You now understand the core network devices that make up any infrastructure. This foundation is critical for both the A+ exam and real-world IT support.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 8: Network Devices and Infrastructure - Solution Guide*