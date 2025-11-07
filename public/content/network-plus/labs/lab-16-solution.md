# Lesson 16 Lab - Answer Key

**Network Documentation and Diagrams**

---

## Section 1: Concept Check

1. **a) Physical shows equipment, logical shows IP addresses and VLANs**
   - Physical: Actual cables, switches, locations
   - Logical: IP addressing, subnets, VLANs, routing
   - Both are needed for complete documentation

2. **b) Helps with troubleshooting and reduces downtime**
   - When problems occur, documentation saves hours
   - New staff can understand network quickly
   - Prevents mistakes during changes
   - Required for compliance (often)

3. **b) A snapshot of normal network performance**
   - Records what "normal" looks like
   - Used to detect degradation
   - Includes: bandwidth, latency, CPU usage, etc.
   - Updated periodically

4. **b) Changes, approval, rollback plan, and testing**
   - What changed
   - Who approved it
   - How to undo it
   - How to verify it worked
   - All are critical!

5. **b) IP Address Management**
   - Tracks IP allocations
   - Prevents conflicts
   - Shows what's available
   - Critical for large networks

---

## Section 2: Hands-On Activity

### Activity A: Physical Network Diagram

**Example completed diagram:**

```
     ☁️ Internet (ISP: Comcast)
      |
     📡 Cable Modem (Arris SB6190)
      | (Coax cable)
   📶 WiFi Router (TP-Link Archer AX50)
      | (Cat 6 Ethernet)
   +--+--+--+--+--+
   |  |  |  |  |  |
  🖥️ 📱 📺 🖨️ 💡 🎮
```

**Device labels (example):**
- 🖥️ Desktop: Dell OptiPlex 7080, Wired
- 📱 Phone: iPhone 13, WiFi (2.4 GHz)
- 📺 Smart TV: Samsung 65", WiFi (5 GHz)
- 🖨️ Printer: HP LaserJet, WiFi
- 💡 Smart Bulbs: Phillips Hue (2.4 GHz)
- 🎮 Xbox Series X: Wired Ethernet

---

**Your diagram should include:**
- ✅ All network devices
- ✅ Connection types (wired/wireless)
- ✅ Cable types (if wired)
- ✅ Physical locations (if relevant)
- ✅ Device models/names

**Physical diagram elements:**
- Shows WHAT is connected
- Shows HOW devices are connected (physical cables)
- Shows WHERE devices are located
- Does NOT show IP addresses or subnets

---

**Common home network layout:**

**Simple home:**
```
☁️ Internet
  ↓
📡 Modem
  ↓
📶 Router
  ├─ 🖥️ Computer (wired)
  ├─ 📱 Phones (WiFi)
  └─ 📺 TV (WiFi)
```

**More complex home:**
```
☁️ Internet
  ↓
📡 Modem
  ↓
📶 Main Router
  ├─ 🔌 Switch (4 ports)
  │   ├─ 🖥️ Computer
  │   ├─ 🖨️ Printer
  │   └─ 🎮 Gaming Console
  └─ 📡 WiFi Extender
      ├─ 📱 Phones
      └─ 📺 Smart TVs
```

---

### Activity B: Logical Network Diagram

**Example completed logical diagram:**

```
Internet (Public IP: 73.162.45.123)
    |
    | (WAN Port)
    |
Router (192.168.1.1)
Gateway: 192.168.1.1
DHCP: 192.168.1.10-100
DNS: 8.8.8.8, 8.8.4.4
    |
    +--- VLAN 1 (192.168.1.0/24) - Main Network
    |      |
    |      +--- Desktop (192.168.1.50 / Static)
    |      +--- Printer (192.168.1.100 / Static)
    |      +--- NAS (192.168.1.101 / Static)
    |
    +--- VLAN 50 (192.168.50.0/24) - Guest WiFi
           |
           +--- DHCP Pool: 192.168.50.10-50.100
           +--- Internet Only (No access to VLAN 1)
```

---

**Your diagram should include:**
- ✅ Public IP address (from whatismyip.com)
- ✅ Router's LAN IP (usually 192.168.1.1 or 10.0.0.1)
- ✅ Network subnet (e.g., 192.168.1.0/24)
- ✅ DHCP range
- ✅ Static IP assignments
- ✅ VLANs (if you have them)
- ✅ Gateway and DNS servers

**Logical diagram elements:**
- Shows IP addresses
- Shows subnets
- Shows VLANs
- Shows DHCP ranges
- Does NOT show physical locations

---

**Key differences:**

| Physical Diagram | Logical Diagram |
|------------------|-----------------|
| Shows cables | Shows IP addresses |
| Shows locations | Shows subnets |
| Shows device models | Shows VLANs |
| "What is where" | "What IP is what" |

**You need BOTH for complete documentation!**

---

### Activity C: IPAM Documentation

**Example completed IPAM table:**

| IP Address | Device Name | MAC Address | Type | Notes |
|------------|-------------|-------------|------|-------|
| 192.168.1.1 | Router | A8:5E:45:D2:3B:1C | Static | Gateway, DHCP, DNS |
| 192.168.1.50 | Desktop-Main | 1C:6F:65:3D:7B:9A | Static | Dell OptiPlex |
| 192.168.1.100 | HP-Printer | 44:85:00:EF:12:34 | Static | HP LaserJet Pro |
| 192.168.1.101 | Synology-NAS | DC:A6:32:11:22:33 | Static | 4TB storage |
| 192.168.1.10-100 | DHCP-Pool | Various | Dynamic | Phones, laptops, tablets |
| 192.168.1.105 | iPhone-13 | AA:BB:CC:DD:EE:01 | Dynamic | Personal phone |
| 192.168.1.106 | Samsung-TV | AA:BB:CC:DD:EE:02 | Dynamic | Living room TV |
| 192.168.1.107 | Xbox-SeriesX | AA:BB:CC:DD:EE:03 | Dynamic | Gaming console |

---

**Best practices for IPAM:**

**Static IP assignments (reserved):**
- **192.168.1.1-9:** Network devices (router, switches, APs)
- **192.168.1.10-99:** DHCP pool (dynamic)
- **192.168.1.100-199:** Servers, printers (static)
- **192.168.1.200-254:** Future expansion

**Why document:**
- **Prevent conflicts:** No two devices with same IP
- **Troubleshooting:** "Which device is 192.168.1.105?"
- **Planning:** Know what IPs are available
- **Security:** Unauthorized device shows up = alert!

**Where to document:**
- Excel/Google Sheets
- IPAM software (phpIPAM, NetBox)
- Wiki/documentation portal
- At minimum: Text file on router

---

**MAC address format:**
```
AA:BB:CC:DD:EE:FF
└──┬──┘ └───┬───┘
  OUI    Unique ID
(Vendor)
```

**First 3 bytes (OUI) identify manufacturer:**
- A8:5E:45 = TP-Link
- DC:A6:32 = Synology
- 44:85:00 = HP

---

### Activity D: Cable Documentation

**Example completed cable inventory:**

| Cable # | Type | Length | Location | Connects | Color | Date Installed |
|---------|------|--------|----------|----------|-------|----------------|
| CAT6-001 | Cat 6 | 10 ft | Office | Desktop to Wall Jack | Blue | 2023-05-15 |
| CAT6-002 | Cat 6 | 25 ft | Living Room | Router to Switch | Blue | 2023-05-15 |
| CAT6-003 | Cat 6 | 50 ft | Attic Run | Switch to Bedroom | Yellow | 2023-06-01 |
| CAT6-004 | Cat 6 | 3 ft | Office | Printer to Switch | Blue | 2023-05-15 |
| CAT5E-001 | Cat 5e | 6 ft | TV Cabinet | Router to TV | Gray | 2020-03-10 |

---

**Cable labeling best practices:**

**Label format:**
```
[SOURCE]-to-[DESTINATION]
SW01-P12 to PC-OFFICE-01
```

**Example labels:**
- RTR-P1 to SW01-P48 (Router port 1 to Switch port 48)
- SW01-P12 to PC-SALES-01 (Switch port 12 to Sales PC)
- PATCH-A5 to WALL-OFF-03 (Patch panel to wall jack)

**Labeling tools:**
- Label maker (Brother P-Touch)
- Permanent marker (Sharpie)
- Cable tags (write-on tags)
- Color-coded cables

**Label BOTH ends:**
```
[Cable 001-A] ←→ [Cable 001-B]
Router Port 3     Computer
```

---

**Why cable documentation matters:**

**Scenario 1: Cable fails**
- With labels: "Cable 003 is bad, replace it"
- Without labels: "Which cable? Let me trace it... 30 minutes later..."

**Scenario 2: Adding new device**
- With docs: "Use port 15, it's available"
- Without docs: "Try random ports until it works"

**Scenario 3: Office move**
- With docs: "Disconnect cables 010-015, move to new location"
- Without docs: Chaos

---

**In home networks:**
- Label if you have 5+ cables
- Color code (blue = internet, yellow = camera, white = general)
- Cable ties (not zip ties - they damage cables!)
- Cable management (keep neat, not tangled)

---

### Activity E: Rack Diagram

**Example completed rack diagram:**

```
RACK: DC-01-A1
Location: Data Center Row 1
Power: 2× 20A circuits

Unit  Device Name         Model              Serial#      Power  Notes
----  ------------------  -----------------  -----------  -----  -----
42U   [Blank Panel]       -                  -            -      -
41U   [Blank Panel]       -                  -            -      -
40U   SW-CORE-01          Cisco 9300-48P     FOC12345678  350W   Core switch
39U   [Blank Panel]       -                  -            -      -
38U   FW-PRIMARY          Palo Alto PA-5220  001234567890 400W   Primary firewall
37U   FW-SECONDARY        Palo Alto PA-5220  001234567891 400W   Secondary firewall
36U   [Blank Panel]       -                  -            -      -
35U   [Blank Panel]       -                  -            -      -
34U   PDU (Power)         APC AP7900         ABC123       -      Power distribution
...
20U   SRV-WEB-01          Dell R640          ABCD1234     500W   Web server
19U   SRV-WEB-02          Dell R640          ABCD1235     500W   Web server
18U   SRV-DB-01           Dell R740          ABCD1236     650W   Database server
17U   [Blank Panel]       -                  -            -      -
...
 3U   [Cable Management]  -                  -            -      -
 2U   UPS-01              APC Smart-UPS      XYZ789       -      Battery backup
 1U   PATCH-PANEL-01      48-port            -            -      Patch panel
```

---

**Rack diagram elements:**

**Must include:**
- U position (1-42)
- Device name (following naming convention)
- Model number
- Serial number (for warranty/support)
- Power draw (for capacity planning)

**Optional but useful:**
- Management IP
- MAC address
- Warranty expiration
- Installed date
- Cabling connections
- Weight (for rack capacity)

---

**Why rack diagrams matter:**

**Without diagram:**
- "Which server is the web server?"
- Open rack door
- Read labels on 20 servers
- Find the right one
- 10 minutes wasted

**With diagram:**
- Look at diagram
- "Web server is in U20"
- Go directly to it
- 30 seconds

**Also useful for:**
- Planning new equipment (is there space?)
- Power capacity (can we add another server?)
- Cooling (hot spots from dense equipment)
- Cable planning (where to run cables)

---

### Activity F: Naming Conventions

**Example completed naming convention:**

**Format:** `LOCATION-TYPE-PURPOSE-NUMBER`

**Examples:**

**Network devices:**
- NYC-RTR-CORE-01 (New York, Router, Core, #1)
- NYC-SW-ACC-01 (New York, Switch, Access, #1)
- NYC-FW-EDGE-01 (New York, Firewall, Edge, #1)
- NYC-AP-FLOOR2-01 (New York, Access Point, Floor 2, #1)

**Servers:**
- NYC-SRV-WEB-01 (New York, Server, Web, #1)
- NYC-SRV-DB-01 (New York, Server, Database, #1)
- NYC-SRV-FILE-01 (New York, Server, File, #1)

**Workstations:**
- NYC-PC-SALES-01 (New York, PC, Sales dept, #1)
- NYC-PC-ENG-01 (New York, PC, Engineering dept, #1)
- NYC-LAPTOP-CEO-01 (New York, Laptop, CEO, #1)

---

**Home network naming convention:**

**Simple format:** `HOME-TYPE-NAME`

**Examples:**
- HOME-RTR-MAIN (Router)
- HOME-PC-DESKTOP (Desktop computer)
- HOME-PC-LAPTOP (Laptop)
- HOME-PRINTER-HP (Printer)
- HOME-TV-LIVING (Living room TV)
- HOME-TV-BEDROOM (Bedroom TV)
- HOME-NAS-MAIN (Network storage)

**Or even simpler:**
- ROUTER
- DESKTOP
- LAPTOP-JANE
- LAPTOP-JOHN
- PRINTER
- TV-LIVING
- TV-BEDROOM

---

**Naming convention rules:**

**DO:**
- Be consistent
- Use descriptive names
- Use hyphens or underscores (not spaces)
- Include location (if multiple sites)
- Include device type
- Number sequentially

**DON'T:**
- Use spaces (breaks scripts)
- Use special characters (!, @, #, etc.)
- Use personal names (Bob's Computer) unless home
- Be too long (max 15-20 characters)
- Use confusing abbreviations

---

**Test your convention:**

**Good convention:**
- NYC-SW-01, NYC-SW-02, NYC-SW-03
- LA-SW-01, LA-SW-02
- Clear, consistent, scalable

**Bad convention:**
- Switch1, MySwitch, SWITCH_NEW, Bob's Switch
- Inconsistent, unclear, not scalable

**Your convention is good if:**
- ✅ Someone else can understand it
- ✅ Works for 1 device or 1000 devices
- ✅ Shows location/type/purpose
- ✅ Easy to sort alphabetically

---

### Activity G: Change Management Documentation

**Example completed change request:**

```
CHANGE REQUEST #: CR-2024-011
DATE: November 6, 2024
REQUESTED BY: John Smith, IT Manager

DESCRIPTION OF CHANGE:
Upgrade main office router firmware from version 1.2.3 to 1.3.0

REASON FOR CHANGE:
- Security patches for CVE-2024-12345 and CVE-2024-12346
- Bug fix for intermittent WAN disconnections
- Performance improvements for VPN throughput

AFFECTED SYSTEMS:
- Main office router (NYC-RTR-CORE-01)
- All network users (50 employees)
- VPN connections (15 remote workers)

RISK LEVEL: [X] High  [ ] Medium  [ ] Low
Reason: Network downtime affects all users

IMPLEMENTATION PLAN:
1. Download firmware version 1.3.0 from manufacturer website
2. Verify checksum (SHA256: abc123...)
3. Backup current router configuration
4. Schedule maintenance window: Saturday 2:00 AM - 4:00 AM
5. Notify all users via email (1 week notice, 1 day reminder)
6. Upload firmware to router
7. Apply firmware update
8. Router will reboot (expected downtime: 10 minutes)
9. Verify all services functional
10. Test VPN connections
11. Monitor for 30 minutes

ROLLBACK PLAN (if change fails):
1. If router doesn't come back online:
   - Console cable access
   - Factory reset if needed
   - Restore backup configuration
2. If VPN doesn't work:
   - Downgrade to firmware 1.2.3 (backup saved)
   - Restore previous configuration
3. Maximum rollback time: 30 minutes

TESTING PLAN:
- Ping gateway (should respond < 5ms)
- Access internet (test with speedtest)
- Test VPN connection from remote location
- Check all DHCP clients (verify all devices get IPs)
- Monitor router logs for errors
- Check CPU/memory usage (should be < 50%)

DOWNTIME REQUIRED: [X] Yes  [ ] No
ESTIMATED DOWNTIME: 10 minutes
MAINTENANCE WINDOW: Saturday, Nov 9, 2024, 2:00 AM - 4:00 AM ET

APPROVED BY: Sarah Johnson, IT Director
APPROVAL DATE: November 7, 2024

IMPLEMENTATION DATE: November 9, 2024
IMPLEMENTED BY: John Smith

RESULT: [X] Success  [ ] Failed  [ ] Rolled Back

ACTUAL DOWNTIME: 8 minutes

NOTES:
- Firmware upgrade completed successfully at 2:15 AM
- All services came back online at 2:23 AM
- VPN tested from home - working
- No issues reported by users on Monday
- CPU usage decreased from 65% to 45% (performance improvement)
```

---

**Why each section matters:**

**Description:** What are we changing? (clear and specific)

**Reason:** Why are we changing it? (justification)

**Affected systems:** What could break? (impact analysis)

**Risk level:** How bad if it fails? (prioritization)

**Implementation plan:** Step-by-step HOW (reproducible)

**Rollback plan:** HOW to undo if fails (critical!)

**Testing plan:** HOW to verify success (quality check)

**Approval:** Who authorized it? (accountability)

**Result:** What actually happened? (lessons learned)

---

**Change management prevents:**
- Unauthorized changes
- Unexpected outages
- Blame games ("Who broke it?")
- Repeated mistakes
- Forgotten steps

**Real-world example:**
```
Bad: "I'll just quickly upgrade the router"
     → Router breaks
     → Network down for 4 hours
     → No rollback plan
     → Chaos

Good: Change request filed
     → Approved by manager
     → Scheduled maintenance window
     → Tested in lab first
     → Rollback plan ready
     → Upgrade succeeds
     → 10 minutes downtime
     → Documentation updated
```

---

### Activity H: Standard Operating Procedure

**Example completed SOP:**

```
STANDARD OPERATING PROCEDURE

TITLE: Troubleshooting WiFi Connectivity Issues
SOP #: NET-SOP-008
VERSION: 1.2
EFFECTIVE DATE: November 6, 2024
AUTHOR: IT Department
APPROVED BY: IT Manager

PURPOSE:
Provide step-by-step troubleshooting for users experiencing WiFi connectivity problems

SCOPE:
All company WiFi users (employees and guests)

MATERIALS NEEDED:
- Computer or mobile device
- Access to network settings
- Router admin credentials (IT staff only)

PROCEDURE:

STEP 1: Verify Physical Issues
1.1 Check WiFi is enabled on device (not airplane mode)
1.2 Check distance from access point (should be < 100 feet)
1.3 Check for physical obstructions (walls, metal, etc.)
1.4 Expected result: Device shows WiFi networks

STEP 2: Connection Troubleshooting
2.1 Forget the WiFi network
    - Windows: Network settings → Manage known networks → Forget
    - Mac: Network → Advanced → Remove network
    - Mobile: WiFi → Network → Forget
2.2 Scan for networks
2.3 Reconnect to "CompanyWiFi" (or "CompanyGuest")
2.4 Enter password (if prompted)
2.5 Expected result: Shows "Connected"

STEP 3: IP Address Verification
3.1 Check IP address:
    - Windows: ipconfig
    - Mac: ifconfig en0
    - Mobile: WiFi → Network → Details
3.2 Verify IP is in correct range:
    - Employee network: 192.168.1.x
    - Guest network: 192.168.50.x
3.3 If IP is 169.254.x.x → DHCP issue (see troubleshooting)
3.4 Expected result: Valid IP address

STEP 4: Connectivity Tests
4.1 Ping gateway:
    - Employee: ping 192.168.1.1
    - Guest: ping 192.168.50.1
4.2 Ping internet: ping 8.8.8.8
4.3 Test DNS: ping google.com
4.4 Test web: Open browser → google.com
4.5 Expected result: All tests succeed

STEP 5: Signal Strength Check
5.1 Check signal strength (Windows):
    - netsh wlan show interfaces
    - Look for "Signal" (should be > 60%)
5.2 If signal < 60% → move closer to AP
5.3 Expected result: Good signal strength

TROUBLESHOOTING:

PROBLEM: Can't see WiFi networks
CAUSE: WiFi disabled or hardware issue
SOLUTION:
- Enable WiFi adapter
- Restart device
- Check WiFi hardware (Fn+WiFi key)
- Update WiFi drivers

PROBLEM: Wrong password error
CAUSE: Incorrect password or caps lock
SOLUTION:
- Verify caps lock is OFF
- Verify correct network (2.4 vs 5 GHz)
- Get password from IT
- Try guest network

PROBLEM: Connected but no internet (169.254.x.x)
CAUSE: DHCP server not responding
SOLUTION:
- Release/renew IP: ipconfig /release then ipconfig /renew
- Restart device
- Contact IT if persists (DHCP server may be down)

PROBLEM: Slow speeds
CAUSE: Interference, distance, or congestion
SOLUTION:
- Move closer to access point
- Switch to 5 GHz network (if available)
- Check for interference (microwave, other networks)
- Disconnect/reconnect

PROBLEM: Works on one device, not another
CAUSE: Device-specific issue
SOLUTION:
- Update device WiFi drivers
- Check device WiFi settings
- Try forgetting and rejoining network
- Check if device has MAC filtering block

ESCALATION:
If none of the above resolves the issue:
1. Document all troubleshooting steps taken
2. Note any error messages
3. Contact IT Help Desk: helpdesk@company.com or ext. 5500
4. Provide: Device type, location, symptoms, steps tried

NOTES:
- Peak WiFi usage: 9 AM - 11 AM, may experience slowdowns
- Guest network is internet-only (no file sharing)
- VPN required for remote access to company resources

REVISION HISTORY:
v1.0 (2023-01-15): Initial version
v1.1 (2023-06-20): Added 5 GHz troubleshooting
v1.2 (2024-11-06): Updated IP ranges, added escalation section
```

---

**SOP best practices:**

**Structure:**
- Clear title and version
- Purpose and scope
- Step-by-step procedures
- Expected results for each step
- Troubleshooting section
- Escalation path

**Writing style:**
- Simple language
- Short sentences
- Numbered steps
- Action verbs (Check, Verify, Test)
- Include screenshots (if possible)

**Testing:**
- Have someone else follow your SOP
- Can they complete it without asking questions?
- If not, improve the SOP

**Maintenance:**
- Review quarterly
- Update when processes change
- Version control
- Get feedback from users

---

**Common SOPs in IT:**

- Onboarding new employees
- Setting up new computers
- Password reset procedures
- Backup and restore
- Incident response
- Troubleshooting common issues
- Software installation
- Security patch deployment

---

### Activity I: Baseline Documentation

**Example completed baseline:**

| Metric | Normal Value | Current Value | Status | Notes |
|--------|-------------|---------------|--------|-------|
| **Internet Download** | 500 Mbps | 485 Mbps | ✅ Normal | Test: fast.com |
| **Internet Upload** | 50 Mbps | 48 Mbps | ✅ Normal | Test: fast.com |
| **WiFi Signal (5 GHz)** | -45 dBm | -47 dBm | ✅ Normal | Location: Office |
| **WiFi Signal (2.4 GHz)** | -50 dBm | -52 dBm | ✅ Normal | Better penetration |
| **Ping to Router** | 1 ms | 2 ms | ✅ Normal | ping 192.168.1.1 |
| **Ping to ISP Gateway** | 10 ms | 12 ms | ✅ Normal | First hop outside |
| **Ping to Google DNS** | 18 ms | 21 ms | ✅ Normal | ping 8.8.8.8 |
| **DNS Resolution Time** | 20 ms | 25 ms | ✅ Normal | nslookup google.com |
| **Router CPU Usage** | 35% | 38% | ✅ Normal | Check admin page |
| **Router Memory Usage** | 60% | 62% | ✅ Normal | Check admin page |
| **Active DHCP Leases** | 12 devices | 14 devices | ✅ Normal | Family + guests |
| **Failed Login Attempts** | 0 | 0 | ✅ Normal | Security check |

**Date baseline created:** November 6, 2024
**Next review date:** February 6, 2025 (quarterly)

---

**How to use baselines:**

**Scenario 1: User complains "Internet is slow"**

**Check current vs baseline:**
- Download: 200 Mbps (baseline: 500 Mbps) ⚠️
- Upload: 45 Mbps (baseline: 50 Mbps) ✅
- Ping: 25 ms (baseline: 18 ms) ⚠️

**Diagnosis:** Download speed degraded, latency increased
**Action:** Contact ISP, possible congestion or issue

---

**Scenario 2: Router seems unstable**

**Check current vs baseline:**
- CPU: 85% (baseline: 35%) ⚠️
- Memory: 90% (baseline: 60%) ⚠️
- Active devices: 25 (baseline: 12) ⚠️

**Diagnosis:** Too many devices, router overloaded
**Action:** Upgrade router or add access point

---

**What to baseline:**

**Performance metrics:**
- Bandwidth (download/upload)
- Latency (ping times)
- Packet loss
- Jitter

**Resource utilization:**
- CPU usage
- Memory usage
- Disk space (if applicable)
- Network interface utilization

**Capacity metrics:**
- Number of users/devices
- Concurrent connections
- DHCP pool usage

**Availability:**
- Uptime percentage
- Mean time between failures (MTBF)

---

**When to update baseline:**

**Required:**
- After major upgrades
- After adding significant equipment
- After ISP speed tier change
- Quarterly or annually

**Don't update for:**
- Temporary anomalies
- One-time events
- During known issues

**Baseline drift:**
- Performance degrades slowly over time
- May not notice until compared to baseline
- Example: Router CPU 35% → 40% → 45% → 50% (time to upgrade!)

---

### Activity J: Disaster Recovery Plan

**Example completed DR plan:**

```
DISASTER RECOVERY PLAN - HOME NETWORK
Version 1.0 - November 6, 2024

EXECUTIVE SUMMARY:
This plan outlines procedures to restore home network services in the event of equipment failure, natural disaster, or other catastrophic events.

CRITICAL SYSTEMS (Priority Order):
Priority 1 - Critical (restore within 1 hour):
  - Internet connection
  - Router/WiFi
  - Primary computer

Priority 2 - Important (restore within 4 hours):
  - Network storage (NAS)
  - Printer
  - Smart home devices

Priority 3 - Nice to have (restore within 24 hours):
  - Gaming console
  - Smart TVs
  - Secondary computers

BACKUP STRATEGY:
Router Configuration:
  - Backup frequency: Monthly (1st of month)
  - Backup location: USB drive + cloud (Google Drive)
  - Last backup: November 1, 2024
  - Backup file: Router-Config-2024-11-01.cfg

Computer Files:
  - Method: Synology NAS (RAID 1) + Cloud backup
  - Frequency: Continuous (real-time sync)
  - Critical folders: Documents, Photos, Work
  - Backup verification: Weekly test restore

Photos/Videos:
  - Method: Google Photos (unlimited)
  - Frequency: Automatic upload
  - Local copy: External 4TB drive (updated monthly)

Work Documents:
  - Method: Company OneDrive (synced)
  - Frequency: Continuous
  - Retention: 90 days version history

CONTACT INFORMATION:
ISP (Comcast):
  - Customer service: 1-800-COMCAST
  - Account number: 1234-5678-9012
  - Website: xfinity.com/support

Router Manufacturer (TP-Link):
  - Support: 1-866-225-8139
  - Website: tp-link.com/support
  - Warranty: Valid until March 2026

Computer Support:
  - Dell Support: 1-800-WWW-DELL
  - Service tag: ABCD123
  - Warranty: Valid until June 2025

IT-Savvy Friend:
  - Name: Alex Johnson
  - Phone: (555) 123-4567
  - Email: alex@email.com

RECOVERY PROCEDURES:

SCENARIO 1: Router Failure
Symptoms: No internet, no WiFi, router unresponsive

Recovery Steps:
1. Power cycle router (unplug 30 seconds, plug back in)
2. If still dead:
   a. Check power adapter (swap with spare if available)
   b. Try factory reset (hold reset button 10 seconds)
   c. Restore configuration from backup
3. If router is dead:
   a. Use spare router (kept in closet)
   b. OR use phone as hotspot temporarily
   c. Order replacement router (Amazon Prime - 2 day)
   d. Configure new router from backup config
4. Estimated recovery time: 2 hours (with spare), 2 days (without)

SCENARIO 2: Modem Failure
Symptoms: No internet, modem lights off/red, router has no WAN

Recovery Steps:
1. Power cycle modem (unplug 30 seconds, plug back in)
2. Check coax cable connection (tight and secure)
3. If still dead:
   a. Call Comcast: 1-800-COMCAST
   b. Use phone hotspot temporarily for critical work
4. Wait for technician (usually same day or next day)
5. Estimated recovery time: 4-24 hours

SCENARIO 3: Computer Hard Drive Failure
Symptoms: Computer won't boot, disk errors, clicking sounds

Recovery Steps:
1. Boot from USB recovery drive
2. Attempt to repair Windows
3. If drive is dead:
   a. Replace hard drive (spare 500GB SSD in drawer)
   b. Reinstall Windows (USB installer ready)
   c. Restore files from NAS backup
   d. Reinstall applications
4. Estimated recovery time: 4-6 hours

SCENARIO 4: NAS Failure
Symptoms: Can't access files, NAS offline, RAID degraded

Recovery Steps:
1. Check power and network connections
2. Log into NAS admin (192.168.1.101)
3. Check RAID status
4. If single drive failed:
   a. Replace failed drive (spare 4TB drive in closet)
   b. RAID will rebuild automatically (6-8 hours)
5. If NAS is completely dead:
   a. Remove drives (data still intact)
   b. Purchase new NAS
   c. Install old drives in new NAS
   d. Data should be accessible
6. If all data lost (unlikely with RAID):
   a. Restore from cloud backup
7. Estimated recovery time: 8-24 hours

SCENARIO 5: Total Home Network Loss (fire, flood, theft)
Symptoms: Everything gone

Recovery Steps:
1. Contact insurance company (homeowner's policy)
2. File police report (if theft)
3. Temporary setup:
   a. Purchase basic router ($50-100)
   b. Setup ISP service (may need new modem)
   c. Use laptop or tablet temporarily
4. Access cloud backups:
   a. All documents in OneDrive
   b. All photos in Google Photos
   c. Router config in Google Drive
5. Replace equipment gradually:
   a. Week 1: Router, modem, one computer
   b. Week 2: NAS, printer
   c. Week 3: Accessories, smart home devices
6. Estimated recovery time: 1-4 weeks for full restoration

SPARE EQUIPMENT INVENTORY:
- [X] Spare router: TP-Link AC1750 (in closet)
- [X] Spare Ethernet cables: 5× Cat 6 (various lengths)
- [X] Spare power adapters: 2× 12V, 1× 5V
- [ ] Spare modem: No (ISP-provided)
- [X] Spare hard drive: 500GB SSD (in drawer)
- [X] Spare NAS drive: 4TB HDD (in closet)
- [X] USB recovery drive: Windows 10 installer
- [X] External backup drive: 4TB USB (updated monthly)

TESTING SCHEDULE:
Monthly (1st of month):
  - Backup router configuration
  - Verify all backups working
  - Test restore of one random file
  - Update external backup drive

Quarterly (Jan, Apr, Jul, Oct):
  - Full disaster recovery drill
  - Attempt to restore from backup
  - Verify spare equipment still works
  - Update contact information
  - Review and update this document

Annual (January):
  - Replace backup drives if >3 years old
  - Verify all warranties
  - Renew cloud storage subscriptions
  - Complete inventory of all network equipment

LESSONS LEARNED (from past incidents):
2023-03-15: Router died during thunderstorm
  - Lesson: Surge protector is essential
  - Action: Installed UPS with surge protection
  
2023-08-22: Hard drive failed, no backup
  - Lesson: Lost 2 years of photos (painful!)
  - Action: Implemented automatic cloud backup
  
2024-05-10: Accidentally deleted important folder
  - Lesson: Need version history/recycle bin
  - Action: Enabled OneDrive with 90-day retention

REVIEW HISTORY:
v1.0 (2024-11-06): Initial version
Next review: 2025-02-06
```

---

**Why DR planning matters:**

**Without DR plan:**
```
Hard drive fails
  ↓
Panic: "Where are my files?!"
  ↓
No backups
  ↓
Data lost forever
  ↓
Days of work lost
```

**With DR plan:**
```
Hard drive fails
  ↓
"No problem, I have a plan"
  ↓
Follow documented steps
  ↓
Restore from backup
  ↓
Back online in 4 hours
```

---

**DR planning levels:**

**Minimal (Better than nothing):**
- Cloud backup of critical files
- Spare cables
- ISP phone number saved

**Good (Home user):**
- Regular backups (local + cloud)
- Documented recovery steps
- Spare router
- Contact list

**Enterprise (Business):**
- Redundant everything
- Hot spare equipment
- Offsite backups
- Tested recovery procedures
- RTO/RPO defined
- 24/7 support contracts

---

### Activity K: Documentation Audit

**Example scoring:**

**Home Network Documentation Audit:**

✅ **Network diagram exists:** Yes (created today!)
- Physical diagram: Shows all devices and connections
- Logical diagram: Shows IP addresses and subnets
- **Score: 1/1**

✅ **IP addresses documented:** Yes (IPAM table created)
- All static IPs documented
- DHCP range documented
- MAC addresses recorded
- **Score: 1/1**

✅ **Passwords documented securely:** Yes
- Router admin password: Stored in password manager
- WiFi password: In password manager + written in safe
- **Score: 1/1**

✅ **Router config backed up:** Yes
- Last backup: November 1, 2024
- Stored: USB drive + Google Drive
- **Score: 1/1**

❌ **Cable labels:** Partial
- Some cables labeled, but not all
- Need to label both ends
- **Score: 0.5/1**

✅ **Device names consistent:** Yes
- Naming convention created: HOME-TYPE-NAME
- All devices renamed to follow convention
- **Score: 1/1**

❌ **Change log:** No
- Haven't documented any changes
- Need to start change log
- **Score: 0/1**

✅ **Baseline metrics:** Yes (created today!)
- Speed, latency, CPU documented
- Will review quarterly
- **Score: 1/1**

✅ **Disaster recovery plan:** Yes (created today!)
- Recovery procedures documented
- Spare equipment inventory
- Contact information saved
- **Score: 1/1**

✅ **ISP account information:** Yes
- Account number saved
- Support number in contacts
- Login credentials in password manager
- **Score: 1/1**

**Total Score: 8.5/10** (85%) ✅ Excellent!

---

**Scoring interpretation:**

**9-10:** Excellent! Your network is well-documented
**7-8:** Good. A few gaps to fill
**5-6:** Fair. Need to improve documentation
**3-4:** Poor. Significant documentation gaps
**0-2:** Critical. No documentation, high risk

---

**What to create first (priority order):**

**Priority 1 (Critical):**
1. Password documentation (secure!)
2. Router config backup
3. ISP contact info
4. Simple network diagram

**Priority 2 (Important):**
5. IP address list
6. Device naming convention
7. Basic DR plan
8. Baseline measurements

**Priority 3 (Nice to have):**
9. Detailed diagrams
10. Cable labels
11. Change management process
12. SOPs

---

**Maintenance schedule:**

**Weekly:**
- Check backups still working

**Monthly:**
- Backup router config
- Review change log

**Quarterly:**
- Update baseline metrics
- Review DR plan
- Update documentation

**Annually:**
- Full documentation review
- Test disaster recovery
- Update passwords

---

## Section 3: Reflection

**1. Why networks lack documentation:**

**Common excuses:**
- "Too busy fighting fires" (ironically, docs reduce fires!)
- "It's all in my head" (what if you're sick/on vacation?)
- "I'll do it later" (never happens)
- "Nobody reads it anyway" (because it doesn't exist!)
- "Network is simple, don't need it" (until it's not)

**Reality:**
- Documentation = insurance
- Seems like wasted time... until you need it
- 1 hour documenting saves 10 hours troubleshooting

**Organizational issues:**
- No time allocated for documentation
- Not measured/rewarded
- Seen as "not real work"
- Management doesn't enforce it

**Solution:**
- Make it part of the process (change = update docs)
- Allocate time (10% of IT time = documentation)
- Use tools (auto-generated diagrams)
- Start small, build over time

---

**2. Troubleshooting without documentation:**

**Scenario: Coworker sick, you must fix network outage**

**Without documentation:**
```
Where's the network diagram? 
  → "No idea"
What's the router password?
  → "Bob knew it"
Where's the spare switch?
  → "Check the closet?"
What changed recently?
  → "Not sure"
Result: 6 hours to fix a 30-minute problem
```

**With documentation:**
```
Check network diagram
  → Identify affected devices
Check change log
  → See firmware upgrade yesterday
Check rollback plan
  → Follow documented steps
Result: 30 minutes to fix
```

---

**Bus factor:**
- "How many people can get hit by a bus before project fails?"
- Bus factor of 1 = Very risky (one person knows everything)
- Bus factor of 5+ = Safer (knowledge is shared)

**Documentation increases bus factor!**

---

**3. ROI of documentation:**

**Time investment:**
- Initial: 10-20 hours (comprehensive documentation)
- Maintenance: 1-2 hours/month

**Time saved:**
- Each troubleshooting incident: 1-4 hours saved
- Onboarding new staff: 10-20 hours saved
- Disaster recovery: 50-100 hours saved

**Financial impact:**
- Network downtime = lost revenue
- 1 hour downtime for 50 users = 50 lost hours
- At $50/hour = $2,500 lost
- Good documentation reduces downtime 50%+

**Example:**
```
Company: 100 employees
Average downtime: 8 hours/year
Cost per hour: $100/employee
Annual downtime cost: $80,000

With good documentation:
Reduced downtime: 4 hours/year (50% reduction)
Annual downtime cost: $40,000
SAVINGS: $40,000/year

Documentation effort: 40 hours/year
Cost: $2,000
ROI: 2000% (20:1 return)
```

---

**4. Outdated documentation problem:**

**The danger:**
```
Documentation says: Server is at 192.168.1.50
Reality: Server moved to 192.168.1.100 (no one updated docs)
Troubleshooting: You ping 192.168.1.50 (no response)
Result: Waste time troubleshooting wrong IP
```

**Outdated docs are WORSE than no docs:**
- False confidence ("I checked the docs")
- Wasted time following wrong info
- May cause more problems
- Erodes trust in documentation

---

**How to keep docs current:**

**Process integration:**
- Every change = update docs (mandatory)
- Change request includes: "Documentation updated? Y/N"
- Can't close ticket without updating docs

**Automation:**
- Auto-generated diagrams (tools like NetBox, PRTG)
- IPAM systems (track IPs automatically)
- Scripts to pull configs nightly

**Regular review:**
- Quarterly review (update any outdated info)
- Annual audit (verify everything)
- Each team member reviews their area

**Version control:**
- Track changes (who, what, when)
- Previous versions available
- Can rollback if needed

**Accountability:**
- Documentation is part of job duties
- Measured in performance reviews
- Can't say "too busy" (it's part of the job)

---

**Documentation maturity model:**

**Level 0 - Chaos:**
- No documentation
- Knowledge in heads of 1-2 people
- Disaster if they leave

**Level 1 - Reactive:**
- Some documentation exists
- Created during crises
- Often outdated

**Level 2 - Managed:**
- Standard templates
- Change process includes updates
- Most systems documented

**Level 3 - Proactive:**
- Documentation before implementation
- Automated where possible
- Regular audits

**Level 4 - Optimized:**
- Self-service documentation portal
- Continuously updated
- Metrics tracked
- Cultural norm

**Goal: Reach level 3 or 4**

---

## Key Concepts Summary

**Documentation types:**
- Physical diagrams: Show equipment and cables
- Logical diagrams: Show IPs, subnets, VLANs
- IPAM: Track IP address assignments
- Change management: Document all changes
- SOPs: Step-by-step procedures
- Baselines: Normal performance metrics
- DR plans: Recovery procedures

**Best practices:**
- Start simple, build over time
- Keep it current (update with every change)
- Use consistent naming conventions
- Store securely but accessibly
- Regular review and updates
- Version control

**Tools:**
- Diagrams: Draw.io, Visio, Lucidchart
- IPAM: Excel, NetBox, phpIPAM
- Passwords: 1Password, LastPass, KeePass
- Wiki: Confluence, MediaWiki, Notion

---

## Exam Tips

**Memorize:**
- Physical diagram = equipment and cables
- Logical diagram = IPs and VLANs
- IPAM = IP Address Management
- Baseline = normal performance snapshot
- Change management includes: what, why, how, rollback, test
- SOP = Standard Operating Procedure (step-by-step)

**Common questions:**
- "What's the difference between physical and logical diagrams?"
- "What should be included in change management?"
- "What is a baseline?"
- "Why is documentation important?" (troubleshooting, knowledge transfer)

---

## Did It Work?

If you were able to:
- ✅ Create physical and logical diagrams
- ✅ Document IP addresses (IPAM)
- ✅ Create naming conventions
- ✅ Fill out change request
- ✅ Write an SOP
- ✅ Create baseline metrics
- ✅ Draft DR plan
- ✅ Audit your documentation

**You understand network documentation!**

Documentation is the most undervalued and most important part of network management. It's not glamorous, but it's essential!

**Next:** Monitoring tools and SNMP (Module 3 continues)