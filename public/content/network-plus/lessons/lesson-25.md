# Lesson 25: Network Segmentation and Zero Trust

**Estimated Time:** 25-30 minutes  
**Domain:** Network Security (Domain 4.0)  
**Exam Objectives Covered:** 4.1, 4.3 - Segmentation and security

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Explain** why network segmentation is critical for security
- **Implement** segmentation using VLANs, subnets, and physical separation
- **Design** screened subnets (DMZ) for public-facing services
- **Describe** microsegmentation and east-west traffic filtering
- **Apply** Zero Trust security model principles
- **Configure** Network Access Control (NAC) for endpoint compliance
- **Identify** security zones and appropriate controls for each
- **Understand** how segmentation limits lateral movement

---

## Video Resources

**Watch these videos to reinforce the concepts:**

1. **Professor Messer - Network Segmentation** (10 min)  
   https://www.youtube.com/watch?v=cED01YxyAPs
   
2. **NetworkChuck - Zero Trust Explained** (14 min)  
   https://www.youtube.com/watch?v=dBZHfMAdZvI

3. **PowerCert - VLANs Explained** (9 min)  
   https://www.youtube.com/watch?v=jC6MJTh9fRE

4. **Sunny Classroom - Network Access Control (NAC)** (11 min)  
   https://www.youtube.com/watch?v=8ZChqiT6dpk

5. **Professor Messer - Zero Trust Architecture** (12 min)  
   https://www.youtube.com/watch?v=sP8RaW3aK3E

---

## Introduction

Imagine a medieval castle where everyone - from the king to the stable boy - has keys to every door. The treasury, the armory, the throne room - all accessible to anyone inside the walls. **If one person is compromised, everything is compromised.**

Now imagine the castle redesigned: The treasury is locked and only accessible to the treasurer. The armory requires guard authentication. Each section of the castle has its own gates and guards. **An intruder who breaches the outer wall still can't move freely.**

**This is network segmentation.**

Traditional security focused on the perimeter - keep attackers out with a strong firewall. But once inside, attackers could move laterally through the entire network. **The average breach takes 207 days to detect** - plenty of time for an attacker to explore your entire network.

Segmentation divides your network into isolated zones. Even if attackers breach one zone, they're blocked from reaching others. Combined with Zero Trust (verify everything, trust nothing), segmentation is your defense against modern threats that bypass perimeter security.

**Why this matters for Network+ exam:** Segmentation and Zero Trust are hot topics. Expect questions about VLAN design, DMZ architecture, security zones, and Zero Trust principles. Understanding these concepts is critical for both the exam and real-world network security.

---

## Why Network Segmentation Matters

**Network segmentation:** Dividing a network into smaller, isolated segments to improve security and performance.

**Without segmentation:**
```
Flat Network (No Segmentation):
[Internet] → [Firewall] → [Single Network]
                           ├─ Web Servers
                           ├─ Database Servers
                           ├─ User Workstations
                           ├─ HR Systems
                           ├─ Finance Systems
                           └─ IoT Devices

Problem: Everything can talk to everything
Attacker compromises one device → Access to entire network
```

**With segmentation:**
```
Segmented Network:
[Internet] → [Firewall] → [DMZ: Web/Email/DNS]
                       → [Internal Firewall] → [User VLAN]
                                             → [Server VLAN]
                                             → [Management VLAN]
                                             → [Guest VLAN]
                                             → [IoT VLAN]

Benefit: Limited lateral movement
Attacker compromises guest device → Blocked from accessing servers
```

**Benefits of segmentation:**

**1. Security**
- **Limits lateral movement** - Attacker can't easily spread
- **Reduces blast radius** - Breach contained to one segment
- **Protects critical assets** - Sensitive systems isolated
- **Compliance** - PCI-DSS, HIPAA require segmentation

**2. Performance**
- **Reduces broadcast domains** - Less broadcast traffic
- **Improves bandwidth** - Traffic stays local when possible
- **Better QoS** - Prioritize critical segments

**3. Organization**
- **Logical separation** - Departments, functions, device types
- **Easier management** - Segment-specific policies
- **Clear security boundaries** - Know what's where

**Real-world example:**
Target's 2013 breach started with compromised HVAC vendor credentials. Attackers used that access to move laterally through the flat network, eventually reaching payment systems. Proper segmentation would have prevented HVAC systems from accessing payment data.

---

## Segmentation Methods

### VLAN Segmentation (Logical)

**VLAN (Virtual LAN):** Logical network segmentation at Layer 2.

**How it works:**
- Switch creates separate broadcast domains
- Devices in different VLANs can't communicate directly
- Requires Layer 3 device (router/Layer 3 switch) to route between VLANs

**Example VLAN design:**
```
Corporate Network VLANs:

VLAN 10 - Management (Network devices, servers)
VLAN 20 - Sales Department
VLAN 30 - Engineering Department
VLAN 40 - Finance Department
VLAN 50 - Guest WiFi
VLAN 60 - IoT Devices (printers, cameras, thermostats)
VLAN 99 - Native VLAN (unused for security)
```

**Benefits:**
- **Flexible** - Change VLANs in software, no physical rewiring
- **Cost-effective** - One physical switch, multiple logical networks
- **Easy to implement** - Supported by all managed switches
- **Port-based or tag-based** - Assign by port or 802.1Q tags

**Security consideration:**
- Inter-VLAN traffic must pass through router/firewall
- Apply ACLs to control which VLANs can communicate
- Example: Finance VLAN can access Server VLAN, but Guest VLAN cannot

**VLAN design best practices:**
- **VLAN 1 = Native VLAN issues** - Don't use VLAN 1, change native VLAN
- **Management VLAN** - Separate VLAN for device management
- **Voice VLAN** - Dedicated VLAN for VoIP phones
- **Guest VLAN** - Isolated with internet-only access
- **Trunk security** - Disable unused ports, restrict allowed VLANs

### Subnet Segmentation (Layer 3)

**Subnetting:** Dividing IP address space into smaller networks.

**How it works:**
- Router routes between subnets
- Each subnet is a separate broadcast domain
- Apply ACLs and firewall rules between subnets

**Example subnet design:**
```
10.0.0.0/16 Corporate Network:

10.0.10.0/24 - Servers
10.0.20.0/24 - Sales Department
10.0.30.0/24 - Engineering Department
10.0.40.0/24 - Finance Department
10.0.50.0/24 - Guest Network
10.0.100.0/24 - DMZ
10.0.254.0/24 - Management Network
```

**Benefits:**
- **Layer 3 separation** - Routing required for inter-subnet communication
- **Scalable** - Can grow to thousands of subnets
- **Compatible with all devices** - No special switch features needed
- **Routing control** - Use routing policies to control traffic flow

**Combining VLANs and Subnets:**
Typically, one subnet per VLAN:
- VLAN 10 → 10.0.10.0/24
- VLAN 20 → 10.0.20.0/24
- VLAN 30 → 10.0.30.0/24

**Inter-subnet routing:**
- Layer 3 switch (SVI - Switched Virtual Interface)
- Router (Router on a stick - one interface, multiple VLANs)
- Firewall (most secure - inspect and filter between subnets)

### Physical Segmentation

**Physical separation:** Completely separate networks with no direct connection.

**Methods:**
- **Separate switches** - Different physical switches for different segments
- **Air gap** - No network connection whatsoever
- **Separate internet connections** - Different ISPs for different networks

**Example:**
```
Corporate Network: → Internet via ISP 1
Guest Network:     → Internet via ISP 2 (completely separate)
Critical Systems:  → Air-gapped (no internet)
```

**When to use:**
- **High-security environments** - Nuclear facilities, military
- **Compliance requirements** - Some regulations mandate physical separation
- **Critical infrastructure** - Industrial control systems (ICS/SCADA)
- **Research labs** - Contain experiments

**Advantages:**
- **Maximum security** - No network-based attacks between segments
- **Clear separation** - Impossible to route between segments
- **Compliance** - Meets strictest requirements

**Disadvantages:**
- **Expensive** - Duplicate infrastructure
- **Management overhead** - Separate administration
- **Limited connectivity** - Difficult to share resources

---

## Screened Subnets (DMZ)

**Screened subnet (DMZ):** Network segment isolated between external and internal firewalls.

**Purpose:** Host public-facing services while protecting internal network.

**Classic DMZ architecture:**
```
                  Internet
                     ↓
              [Front Firewall]
                     ↓
                   DMZ
    ┌────────────────┼────────────────┐
Web Server     Mail Server      DNS Server
    └────────────────┼────────────────┘
                     ↓
              [Back Firewall]
                     ↓
              Internal Network
         (Users, File Servers, Databases)
```

**Security zones:**
1. **Untrusted Zone** - Internet (public, hostile)
2. **DMZ / Semi-Trusted Zone** - Public servers (limited trust)
3. **Trusted Zone** - Internal network (corporate resources)

**Traffic flow rules:**

**Internet → DMZ:**
- Allow: HTTP/HTTPS (80, 443) to web server
- Allow: SMTP (25) to mail server
- Allow: DNS (53) to DNS server
- Deny: Everything else

**DMZ → Internal:**
- Allow: Web server → Database (specific port, specific DB server only)
- Allow: Mail server → Mail database (specific port, specific server only)
- Deny: Everything else (default)

**Internal → DMZ:**
- Allow: Admins → DMZ servers (SSH/RDP for management)
- Allow: Users → Internal web apps
- Deny: Regular users → Direct DMZ access

**Internal → Internet:**
- Allow: HTTP/HTTPS (users browse web)
- Allow: DNS, NTP (required services)
- Deny: Unnecessary protocols

**Key principle:** DMZ servers can be accessed from internet, but they have very limited access to internal network. If compromised, damage is contained.

**Modern variations:**
- **Multiple DMZs** - Different DMZs for different service types
- **Cloud DMZ** - Use cloud provider DMZ services (AWS VPC, Azure VNet)
- **Zero Trust approach** - Treat DMZ servers like any untrusted device

🎯 **Exam Tip:** DMZ = screened subnet. Always between two firewalls for maximum security. Limits what compromised public servers can access internally.

---

## Microsegmentation

**Microsegmentation:** Granular segmentation down to individual workloads or applications.

### Understanding the Concept

Imagine an apartment building with 100 apartments. Traditional segmentation is like locking the front door to the building - once you're inside, you can knock on any apartment door. **You've secured the perimeter, but not the apartments themselves.**

Microsegmentation is like giving each apartment its own lock and only certain people can enter each apartment. Even if someone breaks into the building through the front door, they can't access most apartments - each one is individually protected.

**Traditional segmentation (coarse-grained):**

Your company puts all servers in VLAN 20. Inside that VLAN:
- Web server
- Database server  
- File server
- Application server
- Backup server
- Development server

They can all talk to each other freely because they're in the same VLAN. If an attacker compromises the web server, they can immediately attack all other servers in the VLAN. **It's like being in an apartment building where every apartment door is unlocked.**

**Microsegmentation (fine-grained):**

Instead of "all servers can talk to all servers," you define specific rules:
- Web server → Can ONLY talk to database server on port 3306
- Database server → Can ONLY talk to backup server on port 3389  
- File server → Can ONLY be accessed by specific client IPs
- Application server → Can ONLY talk to web server and specific API endpoints

Now if the web server is compromised, the attacker is trapped. They can access the database server (because the web server legitimately needs it), but:
- Can't reach the file server
- Can't reach the backup server
- Can't scan for other servers
- Can't pivot to other systems

**It's like having a stolen key to one apartment - you can't use it to open other apartments.**

### Real-World Example

A hospital has 50 servers:
- **Without microsegmentation:** Ransomware infects one server → Spreads to all 50 servers → Entire hospital operations shut down
- **With microsegmentation:** Ransomware infects one server → Can only spread to the 2-3 servers it's specifically allowed to communicate with → 47 servers unaffected → Hospital continues operating

### How It's Implemented

You can't do microsegmentation with traditional VLANs alone - too rigid. Modern microsegmentation uses:

**Software-Defined Networking (SDN):**
- Policies defined in software, not on each switch
- Can be based on application, user, data sensitivity - not just IP addresses
- Centrally managed, automatically enforced

**Host-Based Firewalls:**
- Firewall on each server with centralized management
- Each server has its own specific rules
- Even servers on same subnet are isolated

**Network Virtualization:**
- VMware NSX, Cisco ACI, Illumio
- Creates virtual networks isolated from each other
- Workload follows the security policy even if it moves

**Why microsegmentation is critical for Zero Trust:**

Remember "Assume Breach"? If you assume attackers are already inside, microsegmentation is your defense against lateral movement. Traditional segmentation creates zones of trust. Microsegmentation eliminates trust entirely - every connection is verified, every system is isolated by default.

🎯 **Exam Tip:** Microsegmentation = fine-grained segmentation down to individual workloads. Prevents lateral movement even within same subnet/VLAN.

---

## Zero Trust Security Model

**Zero Trust:** "Never trust, always verify" - Assume breach, verify every transaction.

### The Problem with Traditional Security

Think about airport security in the 1970s. You showed your ticket at the check-in counter, and that was it. Once you were "inside" the secure area, you could walk anywhere - change flights, board different planes, even walk onto the tarmac. **One checkpoint, full trust afterward.**

Traditional network security works the same way. You authenticate at the firewall (show your ticket), and then you're "inside" the trusted network with access to everything. This is called the **"castle and moat" approach** - strong walls keeping outsiders out, but once you're inside the castle, you can go anywhere.

**Here's why this is a disaster:**

Imagine Sarah works in Sales. She logs into the VPN from a coffee shop. The VPN sees her valid credentials and says "Welcome! You're trusted now." Sarah's laptop now has access to:
- Sales files (makes sense)
- Engineering source code (why would Sales need this?)
- HR payroll data (definitely shouldn't have this)
- Database servers (no reason for direct access)
- Finance systems (huge compliance problem)

**What happens when Sarah's laptop gets infected with malware at that coffee shop?** The malware now has the same "trusted" access Sarah has. It can spread to servers, steal data, and move laterally through the entire network. The average breach takes **207 days to detect** - that's 207 days of free movement through your "trusted" network.

### Zero Trust: A Different Approach

Zero Trust is like modern airport security. When you check in, they verify your identity. At security, they check you again. At the gate, they scan your boarding pass. On the plane, the flight attendant verifies your seat. **Multiple checkpoints, continuous verification, limited access.**

Zero Trust assumes **attackers are already inside your network**. Maybe through a phished employee, maybe through a compromised vendor, maybe through an infected device. Design as if they're already there.

**Three core principles:**

### 1. Verify Explicitly

**Don't just check once - check everything, every time, using all available context.**

Here's a story: John is a finance employee who normally works 9-5 in New York. On a typical Tuesday at 10am, John logs in from his company laptop at the office. Zero Trust checks:
- ✅ Correct username and MFA token (identity verified)
- ✅ Company laptop, up-to-date patches, antivirus running (device compliant)
- ✅ New York IP address (expected location)
- ✅ Tuesday at 10am (normal working hours)
- ✅ Accessing finance systems (appropriate for his role)

**Decision: Grant access to finance systems only.** Not engineering files, not HR data - just what John needs for his job.

Now imagine it's Friday at 3am. Someone logs in with John's credentials from Russia, using a personal laptop. Zero Trust checks:
- ❌ Correct credentials BUT unrecognized device (suspicious)
- ❌ Russia (John has never logged in from Russia)
- ❌ 3am Friday (highly unusual time)
- ❌ Trying to access engineering source code (not John's normal behavior)

**Decision: Block access. Send alert. Require additional verification.** This could be John on vacation trying to work remotely, or it could be an attacker who stole his credentials. Either way, the unusual context triggers re-verification.

**Traditional security would say:** "Valid credentials = trusted. Come on in!"

**Zero Trust says:** "Valid credentials are just the start. Who, what, where, when, why - everything matters."

### 2. Use Least Privilege Access

**Give users only what they need, when they need it, for as long as they need it.**

Think about a hospital. A nurse doesn't get keys to the pharmacy's narcotics cabinet just because they work at the hospital. They don't get the CEO's office key. They get access to patient rooms on their floor, the supply closet for their unit, and the medication systems relevant to their patients. **Minimum necessary access.**

Here's where traditional IT gets it wrong: IT admin Tom needs to restart a stuck service on a web server. Traditional approach: Tom has permanent administrator rights on all servers. He's had these rights for 3 years. He could access payroll databases, delete production data, or install backdoors - not because he needs to, but because nobody bothered to limit his access.

**Zero Trust approach with least privilege:**

Tom requests access to restart the service. The system checks:
- Does Tom need admin rights on ALL servers? No, just this one web server.
- Does Tom need admin rights forever? No, just for the next 2 hours to fix this issue.
- What specific permissions does Tom need? Just the ability to restart services, not full admin.

**Decision:** Grant Tom limited permissions on the specific web server for 2 hours. After 2 hours, access automatically revokes. Tom can't access other servers, can't delete files, can't install software - he can only restart services on that one server.

This is called **Just-In-Time (JIT)** and **Just-Enough-Access (JEA)**. 

**Real-world scenario:**

A developer needs to access production database to debug an issue. Traditional: Developer has permanent read access to production database (dangerous - could leak customer data anytime).

Zero Trust: Developer requests access → Manager approves → Automated system grants read-only access to specific tables → Access expires in 4 hours → All queries logged and monitored → After 4 hours, access automatically revoked.

**Why this matters:** When that developer's laptop gets infected with malware next week, the malware has ZERO access to production database. The access is already revoked. Compare this to traditional security where the malware would have permanent access to production data.

### 3. Assume Breach

**Design your network as if attackers are already inside.**

Think about a submarine. Submarines are divided into watertight compartments. If the hull is breached in one compartment, the crew seals that compartment. The water doesn't flood the entire submarine - it's contained. **The submarine assumes it will be damaged and designs for survival.**

Traditional networks are like ships with no compartments. One breach anywhere floods everything. Zero Trust networks are like submarines - even when breached, the damage is contained.

**Real story - the Target breach:**

In 2013, Target's network was breached through an HVAC vendor. The vendor had legitimate VPN access to monitor heating and cooling systems. An attacker stole the vendor's credentials and logged into Target's network.

**What happened in Target's flat network:**
1. Attacker logged in with HVAC credentials ✅ (valid credentials, trusted)
2. Attacker scanned the network and found unrelated systems
3. Attacker moved from HVAC systems to point-of-sale systems
4. Attacker installed malware on cash registers
5. Attacker stole 40 million credit card numbers

**Why could this happen?** Because Target's network trusted anything "inside." The HVAC vendor credentials gave access to heating systems, but once inside, there was no segmentation. The attacker could explore freely and reach payment systems.

**How "Assume Breach" would have prevented this:**

If Target had designed assuming the HVAC vendor might be compromised:

**Microsegmentation:**
- HVAC systems: Isolated VLAN, can ONLY talk to specific HVAC controllers
- Cannot reach corporate network
- Cannot reach point-of-sale systems
- Cannot scan for other systems

**Encryption everywhere:**
- Even if attacker reached payment systems, data is encrypted
- Can't read credit card numbers without decryption keys
- Keys not accessible from HVAC VLAN

**Continuous monitoring:**
- HVAC vendor connecting from unusual location? Alert
- HVAC credentials trying to access non-HVAC systems? Block and alert
- Unusual scanning activity? Investigate immediately

**Result:** Attacker logs in with HVAC credentials → Trapped in HVAC VLAN → Cannot reach payment systems → Breach contained to HVAC zone → $0 in stolen credit cards instead of 40 million.

**Practical "Assume Breach" design:**

- **Encrypt internal traffic** - Malware on internal network can't read sensitive data
- **Microsegmentation** - Compromised server can't reach other servers
- **Monitor everything** - Detect unusual behavior (lateral movement, data exfiltration)
- **Time-limited access** - Stolen credentials expire quickly
- **No standing privileges** - Admin access is temporary, granted only when needed

**Zero Trust implementation components:**

**Identity and Access Management (IAM)**
- Multi-factor authentication (MFA)
- Single Sign-On (SSO)
- Conditional access policies

**Device Security**
- Device compliance checks (patch level, antivirus, encryption)
- Mobile Device Management (MDM)
- Endpoint Detection and Response (EDR)

**Network Security**
- Microsegmentation
- Software-Defined Perimeter (SDP)
- VPN with strict access controls

**Data Security**
- Encryption (data at rest and in transit)
- Data Loss Prevention (DLP)
- Information Rights Management (IRM)

**Visibility and Analytics**
- SIEM (Security Information and Event Management)
- User and Entity Behavior Analytics (UEBA)
- Continuous monitoring

**Real-world Zero Trust:**
- **Google BeyondCorp** - No VPN, all access through identity-aware proxy
- **Microsoft Zero Trust** - Conditional access based on risk signals
- **AWS Zero Trust** - Identity-based perimeter, not network-based

🎯 **Exam Tip:** Know the three Zero Trust principles: Verify explicitly, Use least privilege, Assume breach. Zero Trust = trust no one, verify everything.

---

## Network Access Control (NAC)

**NAC:** Controls device access to network based on compliance and authentication.

### The College Dorm Analogy

Think about moving into a college dorm. You can't just walk in and claim a room. The process is:

1. **Prove who you are** (show student ID)
2. **Check you're eligible** (enrolled student, paid fees, no conduct violations)
3. **Verify your stuff is acceptable** (no pets, no banned items, have required items)
4. **Assign appropriate housing** (freshman dorm vs. senior apartments vs. graduate housing)

If you're missing required vaccinations, they don't kick you out - they send you to Health Services to get caught up. Once you're compliant, you get your room key.

**NAC works the same way for networks.**

### How NAC Works - The Process

**Scenario: Employee brings their laptop to work**

**Step 1: Connection Attempt**
Sarah plugs her laptop into an Ethernet port in the conference room. The switch port detects the connection.

**Step 2: Port Stays Blocked (802.1X)**
The switch doesn't immediately grant network access. The port stays in "unauthorized" state. Sarah sees a notification: "Network requires authentication."

**Step 3: Authentication**
Sarah enters her username and password. The switch forwards these to the RADIUS server (acting as the NAC policy server).

**Step 4: Identity Verified**
RADIUS confirms Sarah is a valid employee. But that's not enough - NAC now checks the device.

**Step 5: Device Health Check**
NAC agent on Sarah's laptop reports:
- Operating System: Windows 11 ✅
- Patches: All critical patches installed ✅
- Antivirus: Installed and running ✅
- Antivirus definitions: Updated yesterday ✅
- Disk encryption: BitLocker enabled ✅
- Corporate software: VPN client installed ✅

**Step 6: Policy Decision**
Everything checks out. RADIUS tells the switch: "Place this device in Corporate VLAN 20."

**Step 7: Access Granted**
Switch port moves to "authorized" state. Sarah's laptop gets:
- DHCP address: 10.0.20.45
- Access to: Corporate resources, servers, internet
- Subject to: Corporate firewall rules, monitoring

**Sarah's laptop is now fully connected and she can work.**

### When Things Aren't Perfect

**Scenario: Non-Compliant Device**

Mark plugs in his laptop. He's a valid employee, but his antivirus is 2 weeks out of date.

**NAC's response:**
- Mark can authenticate (he's a real employee)
- Device fails compliance check (antivirus out of date)
- Switch places Mark's laptop in **Quarantine VLAN 99**

**What Mark can access from Quarantine VLAN:**
- Company antivirus update server ✅
- Windows Update server ✅
- Help desk notification system ✅
- Internet (limited, for updates) ✅

**What Mark CANNOT access:**
- Corporate file shares ❌
- Internal applications ❌
- Production servers ❌
- Email (except update notification) ❌

**Mark sees:** "Your device doesn't meet security requirements. Please update your antivirus. Click here for instructions."

Mark updates his antivirus (takes 5 minutes). NAC automatically detects the change, re-checks compliance, and moves his laptop to the Corporate VLAN. **Automatic remediation.**

**Scenario: Unknown Device (BYOD)**

A contractor brings their personal tablet.

**NAC's response:**
- Device not domain-joined (not a company device)
- No NAC agent installed (personal device)
- Place in **Guest VLAN 50**

**What contractor can access:**
- Internet ✅ (to do their job)
- Nothing else ❌

**This is perfect:** Contractor can check email and browse web (necessary for work), but has zero access to internal systems.

### The Three VLANs

**Full Access VLAN (Corporate VLAN)**
- For: Compliant company devices
- Access: Full corporate network
- Requirements: Pass all compliance checks

**Quarantine VLAN**
- For: Known devices that are non-compliant
- Access: Remediation servers only (updates, patches)
- Duration: Until device becomes compliant (then auto-moved)

**Guest VLAN**  
- For: Unknown devices, BYOD, visitor devices
- Access: Internet only
- Never moves to other VLANs (stays isolated)

### Why NAC Matters

**Without NAC:**
- Contractor plugs in personal laptop → Full network access → Could browse file shares → Potential data theft
- Employee with infected laptop connects → Malware spreads to servers → Ransomware outbreak
- Old laptop with unpatched Windows 7 connects → Vulnerable to exploits → Becomes botnet zombie

**With NAC:**
- Contractor's laptop isolated → Internet only → Cannot access corporate data
- Infected laptop blocked → Sent to quarantine → IT investigates before it spreads
- Unpatched laptop quarantined → Forced to update → Only connects when secure

**NAC is your bouncer checking IDs at the door, not just waving everyone through.**

🎯 **Exam Tip:** NAC = Network Access Control. Checks device compliance before granting access. Uses 802.1X for authentication, VLANs for enforcement (full access, quarantine, guest).

---

## Security Zones

**Security zone:** Logical grouping of assets with similar security requirements.

**Common security zones:**

### Trusted Zone (Internal Network)

**Contents:** Corporate users, internal servers, trusted devices

**Security level:** High trust

**Controls:**
- Authenticated users only
- Managed devices
- Full access to internal resources
- Subject to internal security policies
- Monitored by security tools

**Example:** Employee workstations, file servers, internal applications

### Untrusted Zone (Internet)

**Contents:** Public internet, external users

**Security level:** No trust

**Controls:**
- Firewall blocks all unsolicited inbound
- Allow outbound with filtering
- IPS/IDS monitoring
- Proxy for web access

**Example:** Any connection from public internet

### DMZ / Semi-Trusted Zone

**Contents:** Public-facing services

**Security level:** Limited trust

**Controls:**
- Accessible from internet (specific ports only)
- Limited access to internal network
- Hardened systems
- Heavily monitored and logged
- Regular vulnerability scanning

**Example:** Web servers, mail servers, DNS servers

### Guest Zone

**Contents:** Visitor devices, BYOD

**Security level:** Low trust

**Controls:**
- Internet access only
- No access to internal resources
- Isolated VLAN
- Bandwidth limits
- Content filtering

**Example:** Conference room WiFi, lobby WiFi

### Management Zone

**Contents:** Network management traffic

**Security level:** High sensitivity

**Controls:**
- Out-of-band network (separate from production)
- Strong authentication (MFA required)
- Limited access (admins only)
- All activity logged and audited

**Example:** Switch/router management interfaces, server IPMI/iLO

### IoT Zone

**Contents:** Internet of Things devices

**Security level:** Limited trust

**Controls:**
- Isolated from corporate network
- Cannot access internal resources
- Internet access restricted (only to vendor clouds if needed)
- No lateral movement allowed

**Example:** IP cameras, smart thermostats, badge readers, printers

**Zone-based firewall rules:**

```
Allowed Traffic:
Internal → Internet (filtered)
Internal → DMZ (specific services)
Internet → DMZ (specific services, specific servers)
Guest → Internet only
IoT → Vendor cloud only

Blocked Traffic:
Internet → Internal (default deny)
Guest → Internal (blocked)
IoT → Internal (blocked)
DMZ → Internal (default deny, very limited exceptions)
```

**East-West vs North-South traffic:**

**North-South traffic:**
- Traffic between zones (internal ↔ internet)
- Traditionally well-protected with perimeter firewalls
- Traffic crosses security boundaries

**East-West traffic:**
- Traffic within same zone (server to server, user to user)
- Traditionally unfiltered (flat networks)
- Most attacks move laterally (east-west)

**Modern security:** Protect both north-south AND east-west with microsegmentation.

---

## Internal Network Segmentation

**Segmentation strategies for internal network:**

### Department Segmentation

**Separate by business function:**
- Sales VLAN/Subnet
- Engineering VLAN/Subnet
- Finance VLAN/Subnet
- HR VLAN/Subnet
- Executive VLAN/Subnet

**Benefits:**
- Logical organization
- Department-specific policies
- Contains breaches to one department
- Compliance (isolate HR data, financial data)

### Function Segmentation

**Separate by system type:**
- User VLAN (workstations)
- Server VLAN (internal servers)
- Database VLAN (databases - most sensitive)
- VoIP VLAN (phones)
- Printer VLAN (printers, copiers)

**Benefits:**
- Apply appropriate security per function
- QoS priorities (VoIP high priority)
- Monitoring tailored to system type

### Management Network

**Out-of-band management:**
- Separate network for device management
- Cannot be accessed from production network
- Jump box/bastion host for admin access
- All management traffic stays on dedicated network

**Benefits:**
- Management accessible even if production network down
- Cannot attack management interfaces from production network
- Admin activity isolated and monitored

**Example:**
```
Production Network: 10.0.0.0/16
Management Network: 192.168.100.0/24

Router management: 192.168.100.1
Switch management: 192.168.100.2-254
Server IPMI/iLO: 192.168.100.x

Admins connect to jump box on management network
Cannot access management from production
```

---

## Segmentation Best Practices

**1. Defense in Depth**
- Multiple layers of segmentation
- VLANs + Firewalls + Microsegmentation
- Don't rely on single control

**2. Least Privilege**
- Default deny between segments
- Explicitly allow only necessary traffic
- Regular review and removal of unnecessary rules

**3. Zero Trust Mindset**
- Don't trust traffic just because it's internal
- Verify and filter even within segments
- Microsegment critical systems

**4. Document Everything**
- Network diagrams showing all segments
- Purpose of each segment
- Rules between segments
- Justification for each allow rule

**5. Monitor Inter-Segment Traffic**
- Log traffic between segments
- Alert on unusual patterns
- Detect lateral movement attempts

**6. Regular Testing**
- Penetration testing
- Verify segments are actually isolated
- Test that quarantine VLANs work
- Validate firewall rules

**7. Guest Network Isolation**
- Completely separate from corporate
- Internet-only access
- Bandwidth limits
- Captive portal for terms acceptance

**8. IoT Device Isolation**
- Separate VLAN/subnet
- Cannot access corporate resources
- Limited internet (vendor services only if needed)
- No lateral movement

---

## Key Exam Tips

**Segmentation methods comparison:**

| Method | Layer | Flexibility | Security | Use Case |
|--------|-------|-------------|----------|----------|
| **VLAN** | Layer 2 | High | Medium | Department separation |
| **Subnet** | Layer 3 | High | Medium-High | Logical separation |
| **Physical** | Layer 1 | Low | Highest | Critical systems |
| **Microsegmentation** | Layer 3-7 | Very High | Very High | Workload isolation |

**Zero Trust principles (memorize these):**
1. **Verify explicitly** - Authenticate and authorize everything
2. **Least privilege access** - Minimum necessary permissions
3. **Assume breach** - Design to limit damage

**Common exam scenarios:**

**Scenario 1:** "Company needs to isolate guest WiFi from corporate network"
- Solution: Separate Guest VLAN, internet-only access, firewall blocks internal access

**Scenario 2:** "Attacker compromises workstation and attempts to access database"
- With segmentation: Firewall between User VLAN and Database VLAN blocks
- Without segmentation: Direct access (flat network problem)

**Scenario 3:** "Compliance requires financial data isolation"
- Solution: Finance VLAN/subnet, restrict access, audit all traffic to Finance zone

**Scenario 4:** "IoT cameras shouldn't access corporate servers"
- Solution: IoT VLAN, firewall rules block IoT → Corporate, allow IoT → Vendor cloud

**NAC components:**
- **Supplicant** - Client device
- **Authenticator** - Switch/AP (802.1X)
- **Policy server** - RADIUS server with NAC policies

**Security zones to remember:**
- Trusted (internal)
- Untrusted (internet)
- DMZ (semi-trusted, public servers)
- Guest (visitors, low trust)
- Management (admin access, high sensitivity)

---

## Key Takeaways

- [ ] **Network segmentation** divides network into isolated zones for security and performance
- [ ] **VLANs** provide logical Layer 2 segmentation (flexible, software-defined)
- [ ] **Subnets** provide Layer 3 segmentation (routing-based control)
- [ ] **Physical segmentation** completely separates networks (air gap, highest security)
- [ ] **DMZ (screened subnet)** isolates public servers between two firewalls
- [ ] **Microsegmentation** provides workload-level isolation (prevents lateral movement)
- [ ] **Zero Trust** = "Never trust, always verify" (assumes breach, continuous verification)
- [ ] **Three Zero Trust principles:** Verify explicitly, least privilege, assume breach
- [ ] **NAC (Network Access Control)** checks device compliance before granting access
- [ ] **NAC uses 802.1X** for authentication, VLANs for enforcement
- [ ] **NAC VLANs:** Full access (compliant), Quarantine (non-compliant), Guest (unknown)
- [ ] **Security zones:** Trusted (internal), Untrusted (internet), DMZ (public servers), Guest, Management, IoT
- [ ] **East-west traffic** = within zone (traditionally unprotected, needs microsegmentation)
- [ ] **North-south traffic** = between zones (traditionally protected by firewalls)
- [ ] **Management network** should be out-of-band (separate from production)
- [ ] **Segmentation limits lateral movement** - attackers can't easily spread
- [ ] **Defense in depth** combines multiple segmentation layers

---

## Check Your Understanding

**1. What is the primary security benefit of network segmentation?**

<details>
<summary>Show Answer</summary>
<strong>Network segmentation limits lateral movement - if an attacker compromises one segment, they're blocked from easily accessing other segments.</strong> Without segmentation, an attacker who breaches the perimeter has access to the entire network (flat network). With segmentation, each zone is isolated by firewalls or routing controls. Even if the attacker compromises a workstation, they can't directly access servers in a different VLAN. This reduces the blast radius of a breach - damage is contained to one segment. The average breach takes over 200 days to detect, so limiting lateral movement is critical. Segmentation also helps with compliance (PCI-DSS requires segmentation) and performance (reduces broadcast domains).
</details>

**2. What are the three core principles of Zero Trust security?**

<details>
<summary>Show Answer</summary>
<strong>The three Zero Trust principles are: (1) Verify explicitly - always authenticate and authorize based on all available data, (2) Use least privilege access - limit access to just what's needed, just-in-time and just-enough, (3) Assume breach - minimize blast radius, segment access, verify end-to-end encryption.</strong> Zero Trust assumes you can't trust anything - not users, not devices, not network location. Every request must be verified, not just at login but continuously throughout the session. Users only get access to specific resources they need, not broad network access. Design as if an attacker is already inside - use microsegmentation, encrypt everything, monitor for anomalies. This is opposite of traditional "castle and moat" security that trusted everything inside the perimeter.
</details>

**3. What is microsegmentation and how does it differ from traditional segmentation?**

<details>
<summary>Show Answer</summary>
<strong>Microsegmentation provides granular, workload-level isolation (down to individual applications), while traditional segmentation creates larger zones (VLANs, subnets with many systems).</strong> Traditional segmentation might put all servers in one VLAN - they can all talk to each other. Microsegmentation isolates each workload with its own security policy - web server can ONLY talk to specific database, database can ONLY talk to backup system. This prevents lateral movement even within the same subnet. If an attacker compromises one server, microsegmentation prevents them from reaching other servers in the same segment. Implementation uses software-defined networking (SDN), host-based firewalls with centralized management, or network virtualization platforms. Critical for Zero Trust and preventing east-west lateral movement.
</details>

**4. How does NAC (Network Access Control) work?**

<details>
<summary>Show Answer</summary>
<strong>NAC intercepts network connection attempts (using 802.1X), authenticates the user, checks device compliance against policies, and grants/denies access based on compliance status - placing compliant devices in full access VLAN, non-compliant in quarantine VLAN, unknown devices in guest VLAN.</strong> The process: Device connects → Switch blocks port (802.1X) → User authenticates (RADIUS) → NAC checks device (antivirus updated? patches current? encrypted?) → Makes decision. Compliant devices get full network access. Non-compliant devices go to quarantine VLAN with access only to remediation servers to fix issues. Unknown devices (BYOD, visitors) go to guest VLAN with internet-only access. NAC continuously monitors during the session - if device becomes non-compliant, it's moved to quarantine automatically.
</details>

**5. What is a DMZ and why use dual firewalls instead of one?**

<details>
<summary>Show Answer</summary>
<strong>A DMZ (screened subnet) isolates public-facing servers between two firewalls - one facing internet (front), one facing internal network (back). Dual firewalls provide defense in depth - if DMZ server is compromised, the back firewall prevents attackers from reaching internal network.</strong> Public servers (web, email, DNS) must be accessible from internet, making them high-risk. Placing them in DMZ means: Front firewall allows limited internet access to these servers, Back firewall blocks DMZ from accessing internal network (with very limited exceptions for specific database queries). If attacker compromises web server in DMZ, they can't easily pivot to internal network. Single firewall DMZ is cheaper but less secure - if firewall is compromised or misconfigured, both zones are at risk. Dual firewall provides independent protection layers.
</details>

**6. What's the difference between east-west and north-south traffic?**

<details>
<summary>Show Answer</summary>
<strong>North-south traffic flows between zones (internal ↔ internet), while east-west traffic flows within the same zone (server to server, user to user).</strong> North-south crosses security boundaries and has been traditionally well-protected with perimeter firewalls. East-west traffic moves laterally within the network and has traditionally been unfiltered in flat networks - major security problem. Most attacks after initial breach move east-west (lateral movement). Modern security requires protecting both - perimeter firewalls for north-south, microsegmentation for east-west. Example: User browsing internet = north-south. Compromised server scanning other servers = east-west. Microsegmentation, host firewalls, and Zero Trust principles address the east-west problem.
</details>

**7. A company wants to separate IoT devices (cameras, thermostats) from the corporate network. What segmentation strategy should they use?**

<details>
<summary>Show Answer</summary>
<strong>Create a dedicated IoT VLAN/subnet with firewall rules that block IoT devices from accessing corporate resources while allowing limited internet access to vendor services if needed.</strong> IoT devices are notoriously insecure - rarely patched, weak security, default credentials. They should never be on the corporate network where they could be used as pivot points. Configuration: IoT VLAN (e.g., VLAN 60), subnet 10.0.60.0/24, Firewall rules: Block IoT → Corporate (deny any to internal VLANs), Allow IoT → Internet (restricted to vendor cloud services if needed, otherwise block), Block Corporate → IoT (except admin management). This isolates IoT devices completely - they can't be used for lateral movement even if compromised. Many breaches have started with compromised IoT devices on the corporate network.
</details>

**8. What VLANs should be in a typical enterprise network segmentation design?**

<details>
<summary>Show Answer</summary>
<strong>Typical enterprise VLANs include: Management VLAN (network device management), Server VLAN (internal servers), User/Workstation VLAN (employee computers), Guest VLAN (visitors, internet-only), IoT VLAN (printers, cameras, isolated), Voice VLAN (VoIP phones), and Native VLAN (unused for security).</strong> Each VLAN serves a specific purpose with appropriate security controls. Management VLAN is out-of-band for accessing switch/router interfaces securely. Server VLAN protected by firewall from user VLANs. Guest VLAN completely isolated from corporate, internet-only. IoT VLAN isolated to prevent compromised devices from attacking corporate network. Voice VLAN gets QoS priority and is separate from data. Native VLAN should be changed from default VLAN 1 and left unused for security. Each VLAN typically maps to a subnet (VLAN 10 → 10.0.10.0/24).
</details>

**9. What does "Verify explicitly" mean in Zero Trust?**

<details>
<summary>Show Answer</summary>
<strong>"Verify explicitly" means always authenticate and authorize based on all available data points - not just username/password, but also device compliance, location, time, application, data sensitivity, and risk score.</strong> Traditional security: User logs in once → Trusted for entire session. Zero Trust: Verify identity (MFA), Check device (managed? patched? compliant?), Check location (expected geography?), Check time (normal hours?), Determine what resources they need (least privilege), Re-verify if risk changes (new location, unusual behavior, access to sensitive data). This is continuous verification, not one-time login. If user travels to new country or device becomes non-compliant, re-authenticate or reduce access. Uses conditional access policies based on real-time risk assessment. Context matters - appropriate access depends on who, what, where, when, and why.
</details>

**10. Why should the management network be out-of-band (separate from production)?**

<details>
<summary>Show Answer</summary>
<strong>Out-of-band management network ensures administrative access to network devices remains available even if production network fails, and prevents attacks from production network from reaching management interfaces.</strong> If management interfaces are on production network, two problems: (1) If production network down, you can't manage devices to fix it, (2) Attackers on production network can attack management interfaces. Out-of-band solution: Separate physical network for management (different switches, different IP range like 192.168.100.0/24), dedicated interfaces on network devices, jump box/bastion host for admin access. Admins connect to jump box on management network, from there manage devices. Production network has no route to management network. Benefits: Management accessible even when production broken, management interfaces not exposed to production attacks, all admin activity isolated and logged.
</details>

**11. What is the purpose of a quarantine VLAN in NAC?**

<details>
<summary>Show Answer</summary>
<strong>Quarantine VLAN isolates non-compliant devices and provides access ONLY to remediation servers (antivirus updates, patch servers) so devices can fix compliance issues before being granted full network access.</strong> When NAC detects non-compliant device (outdated antivirus, missing patches, no encryption), instead of completely blocking access, it places device in quarantine VLAN. This VLAN allows: Access to Windows Update/WSUS, Access to antivirus definition updates, Access to software deployment servers, NO access to production resources. User sees notification: "Your device is non-compliant. Please update antivirus and install patches." Once device compliant, NAC automatically moves it to full access VLAN. This is better than complete blocking - gives users path to compliance. Different from guest VLAN (unknown devices, internet-only).
</details>

**12. How does segmentation help with compliance requirements like PCI-DSS?**

<details>
<summary>Show Answer</summary>
<strong>Segmentation isolates systems that handle sensitive data (payment card data for PCI-DSS), reducing the scope of compliance requirements and making audits easier.</strong> PCI-DSS requires strict controls for any system that processes, stores, or transmits payment card data. Without segmentation, if one system handles payment data, the ENTIRE network falls under PCI scope - every server, every workstation must meet PCI requirements (very expensive and complex). With segmentation: Create Payment Processing VLAN, isolate with firewalls, strictly control access, now ONLY systems in that VLAN are in PCI scope. Rest of network is out of scope. This "scope reduction" through segmentation drastically reduces compliance burden. Similar for HIPAA (healthcare data), financial regulations, etc. Segmentation provides clear security boundaries that auditors can verify.
</details>

---

## Before Moving to Lesson 26

**You should be able to:**
- [ ] Explain benefits of network segmentation (security, performance, compliance)
- [ ] Design VLAN-based segmentation for enterprise network
- [ ] Describe DMZ (screened subnet) architecture
- [ ] Understand microsegmentation and east-west traffic control
- [ ] Explain Zero Trust model and three core principles
- [ ] Configure NAC for device compliance checking
- [ ] Identify appropriate security zones and controls
- [ ] Apply segmentation to limit lateral movement

**Study strategy:**
- **Memorize Zero Trust principles** - Verify explicitly, least privilege, assume breach
- **Understand NAC flow** - 802.1X authentication → compliance check → VLAN assignment
- **Know security zones** - Trusted, untrusted, DMZ, guest, management, IoT
- **Practice VLAN design** - Given requirements, design appropriate VLANs
- **Connect to previous lessons** - Segmentation uses firewalls (Lesson 24), VLANs (Lesson 11)

---

## Coming Up in Lesson 26

**Next: Wireless Security (WPA3, EAP)**

Now that you understand network segmentation and Zero Trust, Lesson 26 covers securing wireless networks:
- Wireless security protocols (WEP, WPA, WPA2, WPA3)
- WPA3 improvements (SAE, forward secrecy)
- EAP methods (EAP-TLS, PEAP, EAP-TTLS, EAP-FAST)
- Wireless authentication (PSK vs Enterprise)
- Wireless security best practices

**Connection:** Wireless networks need segmentation (guest WiFi separate from corporate) and benefit from Zero Trust principles (authenticate users, not just network access). Enterprise wireless uses 802.1X - same technology as NAC.

---

*"Trust no one, segment everything, verify always."*

---

# ✅ LESSON 25 COMPLETE!

**Progress: 25 of 30 lessons (83.3% complete)**

**Domain 4.0 Network Security: 5 of 6 lessons complete**

🎯 You now understand segmentation and Zero Trust - modern security fundamentals!

**Next up:** Lesson 26 - Wireless Security (WPA3, EAP) - The final security lesson!