# Lesson 16 Lab: Network Documentation and Diagrams

**Estimated Time:** 30-35 minutes  
**Topics:** Creating diagrams, Documentation types, Labeling, Change management

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand network documentation:

1. **What is the difference between physical and logical diagrams?**
   - a) Physical shows equipment, logical shows IP addresses and VLANs
   - b) Physical is better than logical
   - c) They're the same thing
   - d) Logical is outdated

2. **Why is network documentation important?**
   - a) Required by law
   - b) Helps with troubleshooting and reduces downtime
   - c) Makes reports look good
   - d) Not really important

3. **What is a baseline?**
   - a) The lowest acceptable performance
   - b) A snapshot of normal network performance
   - c) The minimum bandwidth
   - d) A type of cable

4. **What should be included in change management documentation?**
   - a) Only the changes made
   - b) Changes, approval, rollback plan, and testing
   - c) Just the date and time
   - d) Only major changes

5. **What is IPAM?**
   - a) Internet Protocol Address Manager
   - b) IP Address Management
   - c) Internal Private Address Mapping
   - d) IP Authentication Method

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Create Your Home Network Diagram

**Draw a physical topology diagram of your home network.**

**Use these symbols:**
- ☁️ = Internet/Cloud
- 📡 = Modem
- 📶 = Router/WiFi
- 🖥️ = Computer
- 📱 = Phone/Tablet
- 📺 = Smart TV
- 🖨️ = Printer

**Example:**
```
     ☁️ Internet
      |
     📡 Modem
      |
   📶 Router/WiFi
      |
   +--+--+--+
   |  |  |  |
  🖥️ 📱 📺 🖨️
```

**Your network diagram:**
```
     ☁️ 
      |
     
      |
     
      |
   +------+
   |      |
  
```

**Label each device:**
- Device name: _________________________________
- Brand/model: _________________________________
- IP address (if you know it): _________________________________

---

### Activity B: Create a Logical Network Diagram

**Now create a logical diagram showing IP addresses and subnets.**

**Example:**
```
Internet (Public IP: 73.162.45.123)
    |
Router (192.168.1.1)
    |
    +--- VLAN 1 (192.168.1.0/24) - Main Network
    |      |
    |      +--- Computer (192.168.1.100)
    |      +--- Printer (192.168.1.101)
    |
    +--- VLAN 50 (192.168.50.0/24) - Guest WiFi
           |
           +--- Guest Devices (DHCP: 192.168.50.10-100)
```

**Your logical diagram:**
```
Internet (Public IP: ________________)
    |
Router (________________)
    |
    +--- Network: ________________
    |      |
    |      +--- Device: ________________
    |      +--- Device: ________________
    |
    +--- Guest Network: ________________
```

**What's different from physical diagram?**
- Physical: Shows physical connections and locations
- Logical: Shows IP addresses, subnets, VLANs

---

### Activity C: IP Address Documentation (IPAM)

**Create an IP address management spreadsheet for your network.**

| IP Address | Device Name | MAC Address | Type | Notes |
|------------|-------------|-------------|------|-------|
| 192.168.1.1 | Router | AA:BB:CC:DD:EE:FF | Static | Gateway |
| 192.168.1.100 | My-Computer | _____________ | ______ | ______ |
| 192.168.1.101 | Printer | _____________ | ______ | ______ |
| 192.168.1.102 | Smart-TV | _____________ | ______ | ______ |
| 192.168.1.10-50 | DHCP Pool | N/A | Dynamic | Laptops/phones |

**Fill in for your network:**

**Why document IP addresses?**
- Prevent conflicts (two devices with same IP)
- Find devices quickly
- Plan for growth (know what's available)
- Troubleshooting (know what should be there)

---

### Activity D: Cable Documentation

**If you have network cables, document them:**

**Cable inventory:**

| Cable # | Type | Length | Location | Connects |
|---------|------|--------|----------|----------|
| 1 | Cat 6 | 10 ft | Office | Computer to Router |
| 2 | ______ | _____ | ______ | __________________ |
| 3 | ______ | _____ | ______ | __________________ |

**Cable labeling best practices:**
- Label BOTH ends of cable
- Use: "CABLE-001-A" and "CABLE-001-B"
- Include: Source → Destination
- Example: "SW01-P12 to PC-SALES-01"

**In your home:**
- Are your cables labeled? _________________________________
- Should they be? _________________________________ (Yes, if you have many!)

---

### Activity E: Rack Diagram (Enterprise Concept)

**In data centers, equipment is mounted in racks (42U tall).**

**Create a sample rack diagram:**

```
Unit   Device
----   ------
42U    [Blank panel]
41U    [Blank panel]
40U    [Switch - 48 port]
39U    [Blank panel]
38U    [Firewall]
37U    [Firewall (redundant)]
36U    [Blank panel]
...
20U    [Server 1]
19U    [Server 2]
18U    [Server 3]
...
 2U    [UPS]
 1U    [Patch Panel]
```

**Key information to document:**
- U position (unit number)
- Device name/model
- Serial number
- Power draw
- Network connections
- Management IP

**Why rack diagrams matter:**
- Know what's where (don't have to look in rack)
- Plan capacity (space, power, cooling)
- Cable management (plan cable runs)

**You probably don't have a rack at home, but this is crucial in enterprise!**

---

### Activity F: Naming Conventions

**Consistent naming is essential for documentation.**

**Bad naming:**
- Switch1, Switch2, MYSWITCH, Bob's Switch
- Inconsistent, unclear, not scalable

**Good naming convention:**

**Format:** `LOCATION-TYPE-NUMBER`

**Examples:**
- NYC-SW-01 (New York City, Switch, #1)
- NYC-SW-02
- NYC-RTR-01 (Router)
- NYC-SRV-WEB-01 (Web Server)
- LA-SW-01 (Los Angeles, Switch)

---

**Create a naming convention for your home:**

**Format:** _________________________________

**Examples:**
- Router: _________________________________
- Computer: _________________________________
- Printer: _________________________________
- Phone: _________________________________

**Test it:**
- Is it consistent? _________________________________
- Easy to understand? _________________________________
- Scalable (works for 100 devices)? _________________________________

---

### Activity G: Change Management Documentation

**Every network change should be documented.**

**Create a change request form:**

```
CHANGE REQUEST #: CR-2024-001
DATE: _______________
REQUESTED BY: _______________

DESCRIPTION OF CHANGE:
_________________________________________________________________
_________________________________________________________________

REASON FOR CHANGE:
_________________________________________________________________

AFFECTED SYSTEMS:
_________________________________________________________________

RISK LEVEL: [ ] Low  [ ] Medium  [ ] High

IMPLEMENTATION PLAN:
1. _________________________________________________________________
2. _________________________________________________________________
3. _________________________________________________________________

ROLLBACK PLAN (if change fails):
1. _________________________________________________________________
2. _________________________________________________________________

TESTING PLAN:
_________________________________________________________________

DOWNTIME REQUIRED: [ ] Yes  [ ] No
MAINTENANCE WINDOW: _______________

APPROVED BY: _______________  DATE: _______________

RESULT: [ ] Success  [ ] Failed  [ ] Rolled Back

NOTES:
_________________________________________________________________
```

---

**Fill out a change request for a real scenario:**

**Scenario:** You want to upgrade your router's firmware.

**Your change request:**
- Description: _________________________________
- Reason: _________________________________
- Risk level: _________________________________
- Rollback plan: _________________________________
- Testing: _________________________________

**Why document changes?**
- Know what was changed (troubleshooting)
- Accountability
- Prevent unauthorized changes
- Learn from failures

---

### Activity H: Standard Operating Procedure (SOP)

**Create an SOP for a common task.**

**Example SOP: Connecting a New Computer to Network**

```
PURPOSE: Ensure new computers are properly configured for network access
SCOPE: All new desktop and laptop computers
RESPONSIBLE: IT Support Team

PROCEDURE:
1. Verify computer meets minimum requirements
   - Windows 10 or later
   - Network adapter present
   
2. Connect to network
   - Wired: Connect Ethernet cable to port
   - Wireless: Connect to "CompanyWiFi" SSID
   
3. Configure IP settings
   - Open Network Adapter settings
   - Set to DHCP (obtain automatically)
   - Verify settings: ipconfig
   
4. Test connectivity
   - Ping 192.168.1.1 (gateway)
   - Ping 8.8.8.8 (internet)
   - Open browser, test web access
   
5. Document in IPAM
   - Add device name
   - Record MAC address
   - Note assigned IP address
   
6. Configure user account
   - Join to domain (if applicable)
   - Install required software
   
TROUBLESHOOTING:
- No IP address → Check cable, check DHCP server
- Can ping gateway but not internet → Check router
- Can't access domain → Check DNS settings
```

---

**Create your own SOP:**

**Task:** Troubleshooting WiFi connectivity issues

**Your SOP:**
```
PURPOSE: _________________________________

PROCEDURE:
1. _________________________________
2. _________________________________
3. _________________________________
4. _________________________________

TROUBLESHOOTING:
- Problem: _________________ → Solution: _________________
- Problem: _________________ → Solution: _________________
```

---

### Activity I: Baseline Documentation

**A baseline is a snapshot of normal network performance.**

**What to baseline:**

| Metric | Normal Value | Current Value | Status |
|--------|-------------|---------------|--------|
| Internet speed (download) | 500 Mbps | _______ Mbps | ______ |
| Internet speed (upload) | 50 Mbps | _______ Mbps | ______ |
| WiFi signal strength | -50 dBm | _______ dBm | ______ |
| Ping to router | 1-2 ms | _______ ms | ______ |
| Ping to 8.8.8.8 | 15-20 ms | _______ ms | ______ |
| Connected devices | 10 | _______ | ______ |

**Run tests and fill in current values:**

1. **Speed test:** https://fast.com or https://speedtest.net
2. **WiFi signal:** Use WiFi analyzer app or `netsh wlan show interfaces`
3. **Ping tests:** `ping 192.168.1.1` and `ping 8.8.8.8`
4. **Device count:** Check router admin page

---

**Why baseline?**
- Know what "normal" looks like
- Detect problems (performance degradation)
- Prove service level agreements (SLAs)
- Plan capacity (when to upgrade)

**Update baseline:**
- After major changes
- After upgrades
- Quarterly or annually

---

### Activity J: Disaster Recovery Documentation

**What if everything fails? You need a recovery plan.**

**Create a basic DR plan for your home network:**

```
DISASTER RECOVERY PLAN - HOME NETWORK

CRITICAL SYSTEMS:
1. Internet connection (priority 1)
2. Router/WiFi (priority 1)
3. Computer (priority 2)
4. NAS/backup storage (priority 3)

BACKUP STRATEGY:
- Router config: _________________________________
- Computer files: _________________________________
- Photos/documents: _________________________________
- Frequency: _________________________________

RECOVERY CONTACTS:
- ISP support: _________________________________
- Router manufacturer: _________________________________
- IT friend: _________________________________

RECOVERY STEPS:
If router fails:
1. _________________________________
2. _________________________________

If modem fails:
1. _________________________________
2. _________________________________

If computer fails:
1. _________________________________
2. _________________________________

SPARE EQUIPMENT:
- Extra router: [ ] Yes [ ] No
- Extra cables: [ ] Yes [ ] No
- Backup internet (hotspot): [ ] Yes [ ] No
```

---

**Test your plan:**
- Do you have router config backed up? _________________________________
- Do you know ISP support number? _________________________________
- Could you recover if everything failed? _________________________________

---

### Activity K: Documentation Audit

**Review your current documentation (or lack thereof):**

**Checklist:**
- [ ] Network diagram exists (physical or logical)
- [ ] IP addresses documented
- [ ] Passwords documented (securely!)
- [ ] Router config backed up
- [ ] Cable labels
- [ ] Device names consistent
- [ ] Change log (what was changed when)
- [ ] Baseline performance metrics
- [ ] Disaster recovery plan
- [ ] ISP account information

**Score:** _____ / 10

**If less than 5/10:** Time to start documenting!

**What should you create first?** _________________________________

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Why do so many networks lack documentation?**
   - "We're too busy"
   - "It's obvious, we don't need it"
   - "I'll do it later"
   - Then someone quits and knowledge is lost...

2. **Your coworker is sick, you need to fix the network:**
   - Can you find the diagrams?
   - Do you know the passwords?
   - Can you understand the config?
   - Or are you stuck?

3. **Documentation takes time. Is it worth it?**
   - Time spent: 1 hour to document
   - Time saved during outage: 4 hours
   - ROI: 4:1
   - Every time you troubleshoot faster: More savings

4. **What happens to outdated documentation?**
   - Worse than no documentation (misleading!)
   - Must update after every change
   - Who maintains it?
   - How to ensure it's current?

---

## What You Learned Today

- ✅ You created a physical network diagram
- ✅ You created a logical network diagram
- ✅ You documented IP addresses (IPAM)
- ✅ You learned cable documentation
- ✅ You understand rack diagrams
- ✅ You created a naming convention
- ✅ You filled out a change request
- ✅ You wrote a Standard Operating Procedure
- ✅ You created a baseline
- ✅ You drafted a disaster recovery plan
- ✅ You audited your documentation

**Next Lesson:** Monitoring Tools and SNMP