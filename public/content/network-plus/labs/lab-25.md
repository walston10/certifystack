# Lab 25: Network Segmentation and Zero Trust
**Time:** 30-35 minutes  
**Difficulty:** Advanced  
**Domain:** Network Security (4.0)

## Lab Objectives
- Design network segmentation strategies
- Implement VLANs and subnets for isolation
- Configure microsegmentation
- Apply Zero Trust principles
- Deploy Network Access Control (NAC)
- Create security zones and trust boundaries

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What are the three main benefits of network segmentation?**
   • _________________________________________________
   • _________________________________________________
   • _________________________________________________

2. **Define the three Zero Trust principles:**
   1. _________________________________________________
   2. _________________________________________________
   3. _________________________________________________

3. **What's the difference between north-south and east-west traffic?**
   North-South: ________________________________________
   East-West: __________________________________________

4. **What are the three main security zones?**
   • _________________________________________________
   • _________________________________________________
   • _________________________________________________

5. **What does NAC stand for and what's its purpose?**
   _________________________________________________
   _________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Segmentation Strategy Design 🗺️
**Time:** 3 minutes

Design segmentation for a corporate network:

| Department | VLAN ID | Subnet | Security Level | Access Needs |
|------------|---------|--------|----------------|--------------|
| Management | | 10.0.1.0/24 | | |
| Finance | | 10.0.2.0/24 | | |
| HR | | | | |
| Engineering | | | | |
| Guest WiFi | | | | |
| IoT devices | | | | |
| Servers | | | | |

---

### Activity B: VLAN Security Configuration 🔐
**Time:** 3 minutes

Configure inter-VLAN security:

**VLAN Access Matrix:**
| Source VLAN | Destination VLAN | Allowed? | Protocols/Ports |
|-------------|------------------|----------|-----------------|
| Guest → Servers | | | |
| IoT → Finance | | | |
| Engineering → Servers | | | |
| Finance → HR | | | |
| Management → All | | | |

**Router ACL for inter-VLAN routing:**
```
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________
4. _________________________________________________
```

---

### Activity C: Zero Trust Implementation Plan 🎯
**Time:** 3 minutes

Apply Zero Trust principles:

| Component | Traditional | Zero Trust | Implementation |
|-----------|-------------|------------|----------------|
| Network access | | | |
| User verification | | | |
| Device trust | | | |
| Application access | | | |
| Data protection | | | |
| Monitoring | | | |

**Zero Trust maturity levels:**
□ Level 1: Identity verification
□ Level 2: Device compliance
□ Level 3: Microsegmentation
□ Level 4: Continuous verification
□ Level 5: Full automation

---

### Activity D: Microsegmentation Design 🔬
**Time:** 3 minutes

Create microsegmentation for applications:

```
Web Tier → App Tier → Database Tier
   ↓          ↓            ↓
[Rules]    [Rules]      [Rules]
```

**Segment rules:**
| From | To | Port | Protocol | Action |
|------|-----|------|----------|--------|
| Internet | Web | | | |
| Web | App | | | |
| App | Database | | | |
| Database | Web | | | |
| Admin | All | | | |

**East-West traffic control:**
- Between web servers: _______________________________
- Between app servers: _______________________________
- Between databases: _________________________________

---

### Activity E: NAC Policy Configuration 🚪
**Time:** 3 minutes

Design NAC policies:

| Device Type | Auth Method | Posture Check | Success VLAN | Fail Action |
|------------|-------------|---------------|--------------|-------------|
| Corporate laptop | | | | |
| BYOD phone | | | | |
| Guest device | | | | |
| IoT sensor | | | | |
| Unknown device | | | | |

**Quarantine VLAN settings:**
- VLAN ID: __________________________________________
- Access allowed: ____________________________________
- Remediation server: ________________________________
- Time limit: ________________________________________

---

### Activity F: Security Zone Architecture 🏰
**Time:** 3 minutes

Design security zones with trust levels:

| Zone | Trust Level | Assets | Inbound Rules | Outbound Rules |
|------|-------------|--------|---------------|----------------|
| Internet | | | | |
| DMZ | | | | |
| Internal | | | | |
| Restricted | | | | |
| Management | | | | |

**Traffic flow between zones:**
```
Internet (0) → DMZ (25) → Internal (75) → Restricted (100)
                              ↓
                        Management (100)
```

---

### Activity G: Guest Network Isolation 👥
**Time:** 3 minutes

Design secure guest access:

**Guest Network Requirements:**
- VLAN: _____________________________________________
- Subnet: ___________________________________________
- DHCP scope: _______________________________________
- DNS servers: ______________________________________
- Internet only: ____________________________________

**Isolation techniques:**
□ Separate VLAN
□ Client isolation
□ Captive portal
□ Time-based access
□ Bandwidth limiting
□ Content filtering

**Guest ACL:**
```
permit udp any any eq 53  (DNS)
permit tcp any any eq 80  (HTTP)
permit tcp any any eq 443 (HTTPS)
deny ip any 10.0.0.0 0.255.255.255  (Block internal)
permit ip any any  (Internet)
```

---

### Activity H: IoT Network Segmentation 📱
**Time:** 2 minutes

Isolate IoT devices:

| IoT Category | VLAN | Risk Level | Access Required | Isolation Method |
|--------------|------|------------|-----------------|------------------|
| Security cameras | | | | |
| Smart HVAC | | | | |
| Printers | | | | |
| Smart TVs | | | | |
| Medical devices | | | | |

**IoT security controls:**
□ Dedicated VLAN
□ No internet access (air gap)
□ MAC filtering
□ Disable management interfaces
□ Regular firmware updates

---

### Activity I: Compliance-Based Segmentation 📋
**Time:** 3 minutes

Design for compliance requirements:

| Compliance | Data Type | Segmentation Required | Controls |
|------------|-----------|----------------------|----------|
| PCI DSS | Credit cards | | |
| HIPAA | Medical records | | |
| GDPR | EU personal data | | |
| SOX | Financial records | | |

**PCI DSS network segmentation:**
- CDE (Cardholder Data Environment): _________________
- Segmentation testing frequency: ____________________
- Compensating controls: _____________________________

---

### Activity J: Zero Trust Technologies 🛠️
**Time:** 3 minutes

Select Zero Trust implementation tools:

| Function | Technology Options | Selected | Reasoning |
|----------|-------------------|----------|-----------|
| Identity | SAML, OAuth, OIDC | | |
| Device trust | MDM, NAC, Certificates | | |
| Microsegmentation | NSX, Guardicore | | |
| Encryption | TLS, IPSec, MACsec | | |
| Analytics | SIEM, UEBA | | |
| Policy engine | | | |

---

### Activity K: Lateral Movement Prevention 🚫
**Time:** 2 minutes

Stop lateral movement attacks:

**Techniques to implement:**
□ VLAN segmentation
□ Private VLANs
□ Windows firewall rules
□ Jump servers/bastion hosts
□ Privileged access workstations
□ Application whitelisting

**Detection methods:**
| Indicator | Detection Method | Response |
|-----------|-----------------|----------|
| Unusual internal scanning | | |
| Cross-VLAN attempts | | |
| Service account movement | | |
| Admin credential use | | |

---

### Activity L: Segmentation Testing 🧪
**Time:** 3 minutes

Validate segmentation effectiveness:

**Test scenarios:**
| Test | Method | Expected Result | Actual | Pass/Fail |
|------|--------|----------------|---------|-----------|
| VLAN isolation | | | | |
| ACL enforcement | | | | |
| NAC quarantine | | | | |
| Zero Trust deny | | | | |
| DMZ isolation | | | | |

**Penetration test scope:**
- Internal to DMZ: __________________________________
- VLAN hopping: ______________________________________
- Lateral movement: __________________________________
- Privilege escalation: ______________________________

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your flat network was compromised by ransomware. Redesign with segmentation:

1. **Immediate isolation:**
   • _____________________________________________
   • _____________________________________________

2. **New architecture:**
   • _____________________________________________
   • _____________________________________________

3. **Zero Trust implementation:**
   • _____________________________________________
   • _____________________________________________

### Best Practices Checklist
Check off segmentation practices you'll implement:

□ Segment by department and function
□ Isolate high-value assets
□ Implement Zero Trust principles
□ Use microsegmentation for critical apps
□ Deploy NAC for device control
□ Create detailed security zones
□ Regular segmentation testing
□ Monitor east-west traffic
□ Document all segments
□ Maintain segment inventory

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Design network segmentation strategies
□ Configure VLANs for isolation
□ Implement Zero Trust architecture
□ Create microsegmentation policies
□ Deploy NAC solutions
□ Design security zones
□ Isolate guest and IoT networks
□ Meet compliance requirements
□ Prevent lateral movement
□ Test segmentation effectiveness

### Exam Preparation
⚠️ **Know for the exam:**
- **Zero Trust:** Never trust, always verify
- **Three principles:** Verify explicitly, least privilege, assume breach
- **Microsegmentation:** Application-level isolation
- **NAC:** Network Access Control with 802.1X
- **Security zones:** Trusted, untrusted, DMZ
- **East-West:** Traffic between internal systems
- **North-South:** Traffic in/out of network
- **VLAN:** Layer 2 segmentation

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐⭐⭐

**Ready for:** Lesson 26 - Wireless Security (WPA3, EAP)

### Remember
"Flat networks are like open floor plans - everything spreads quickly. Segmentation creates walls and doors to contain problems and control access!"

---