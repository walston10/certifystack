# Lab 25 Answer Key: Network Segmentation and Zero Trust
**Lab Duration:** 30-35 minutes  
**Difficulty:** Advanced  
**Domain Coverage:** Network Security (4.0)

---

## Section 1: Concept Check Answers

### Question 1: Three Benefits of Network Segmentation
**Answer:**
- **Security:** Contains breaches, limits lateral movement
- **Performance:** Reduces broadcast domains, improves speed
- **Compliance:** Meets regulatory requirements (PCI, HIPAA)

### Question 2: Three Zero Trust Principles
**Answer:**
1. **Verify explicitly:** Always authenticate and authorize
2. **Least privilege access:** Minimum rights needed
3. **Assume breach:** Design as if already compromised

### Question 3: North-South vs East-West Traffic
**Answer:**
- **North-South:** Traffic entering/leaving the network (vertical)
- **East-West:** Traffic between internal systems (lateral/horizontal)

### Question 4: Three Main Security Zones
**Answer:**
- **Trusted zone:** Internal network (high trust)
- **Untrusted zone:** Internet (no trust)
- **DMZ:** Semi-trusted (medium trust)

### Question 5: NAC Definition
**Answer:**
**Network Access Control** - Controls device access to network based on identity, compliance, and security posture. Enforces policies before granting network access.

---

## Section 2: Hands-On Activities - Answers

### Activity A: Segmentation Strategy Design ✅

| Department | VLAN ID | Subnet | Security Level | Access Needs |
|------------|---------|--------|----------------|--------------|
| Management | 10 | 10.0.1.0/24 | Critical | All systems |
| Finance | 20 | 10.0.2.0/24 | High | Financial apps |
| HR | 30 | 10.0.3.0/24 | High | HR systems |
| Engineering | 40 | 10.0.4.0/24 | Medium | Dev servers |
| Guest WiFi | 99 | 10.0.99.0/24 | Untrusted | Internet only |
| IoT devices | 50 | 10.0.50.0/24 | Low | Limited |
| Servers | 100 | 10.0.100.0/24 | Critical | Controlled |

### Activity B: VLAN Security Configuration ✅

**VLAN Access Matrix:**
| Source → Destination | Allowed? | Protocols/Ports |
|---------------------|----------|-----------------|
| Guest → Servers | ❌ No | None |
| IoT → Finance | ❌ No | None |
| Engineering → Servers | ✅ Yes | TCP 443, 22 |
| Finance → HR | ✅ Limited | TCP 443 |
| Management → All | ✅ Yes | All (monitored) |

**Router ACL:**
```
1. deny ip 10.0.99.0 0.0.0.255 10.0.0.0 0.0.255.255
2. permit tcp 10.0.4.0 0.0.0.255 10.0.100.0 0.0.0.255 eq 443
3. permit tcp 10.0.1.0 0.0.0.255 any
4. deny ip any any (implicit)
```

### Activity C: Zero Trust Implementation ✅

| Component | Traditional | Zero Trust | Implementation |
|-----------|-------------|------------|----------------|
| Network access | VPN perimeter | Verify every connection | ZTNA/SDP |
| User verification | Password once | Continuous auth | MFA + behavior |
| Device trust | Domain joined | Compliance checked | MDM + NAC |
| Application access | Network = access | Per-app verification | SAML/OAuth |
| Data protection | Perimeter | Encrypted everywhere | E2E encryption |
| Monitoring | Edge focused | Everything logged | SIEM + UEBA |

All maturity levels should be checked for complete Zero Trust.

### Activity D: Microsegmentation Design ✅

**Segment rules:**
| From | To | Port | Protocol | Action |
|------|-----|------|----------|--------|
| Internet | Web | 443 | TCP | Allow |
| Web | App | 8080 | TCP | Allow |
| App | Database | 3306 | TCP | Allow |
| Database | Web | Any | Any | Deny |
| Admin | All | 22,3389 | TCP | Allow |

**East-West control:**
- Between web servers: **Allow 443 for load balancing**
- Between app servers: **Allow cluster communication**
- Between databases: **Allow replication only**

### Activity E: NAC Policy Configuration ✅

| Device Type | Auth Method | Posture Check | Success VLAN | Fail Action |
|------------|-------------|---------------|--------------|-------------|
| Corporate laptop | 802.1X + cert | AV, patches | Employee | Quarantine |
| BYOD phone | 802.1X + MAB | MDM enrolled | BYOD | Guest only |
| Guest device | Captive portal | Terms accept | Guest | Internet only |
| IoT sensor | MAB | Vendor verify | IoT | Isolate |
| Unknown device | Fail | N/A | None | Block |

**Quarantine VLAN:**
- VLAN ID: **666**
- Access: **Remediation servers only**
- Remediation: **Patch, AV update servers**
- Time limit: **2 hours to comply**

### Activity F: Security Zone Architecture ✅

| Zone | Trust Level | Assets | Inbound Rules | Outbound Rules |
|------|-------------|--------|---------------|----------------|
| Internet | 0% | Public | None | All blocked |
| DMZ | 25% | Web, mail | Specific ports | Limited |
| Internal | 75% | Workstations | From DMZ limited | Most allowed |
| Restricted | 100% | Sensitive data | Heavily filtered | Logged |
| Management | 100% | Admin tools | Admin only | All (logged) |

### Activity G: Guest Network Isolation ✅

**Guest Network:**
- VLAN: **99**
- Subnet: **10.0.99.0/24**
- DHCP: **10.0.99.100-200**
- DNS: **8.8.8.8, 8.8.4.4**
- Internet only: **Yes, no internal access**

All isolation techniques should be checked for maximum security.

### Activity H: IoT Network Segmentation ✅

| IoT Category | VLAN | Risk Level | Access Required | Isolation Method |
|--------------|------|------------|-----------------|------------------|
| Security cameras | 51 | High | NVR only | No internet |
| Smart HVAC | 52 | Medium | Management server | Restricted |
| Printers | 53 | Medium | Print server | VLAN + ACL |
| Smart TVs | 54 | Low | Internet streaming | Guest-like |
| Medical devices | 55 | Critical | Specific servers | Air gapped |

All IoT security controls should be checked.

### Activity I: Compliance-Based Segmentation ✅

| Compliance | Data Type | Segmentation Required | Controls |
|------------|-----------|----------------------|----------|
| PCI DSS | Credit cards | CDE isolation | Firewall, monitoring |
| HIPAA | Medical records | PHI network | Encryption, audit |
| GDPR | EU personal data | Data residency | Access control |
| SOX | Financial records | Financial systems | Audit trails |

**PCI DSS segmentation:**
- CDE: **Completely isolated VLAN with firewall**
- Testing frequency: **Every 6 months**
- Compensating controls: **If not isolated, continuous monitoring**

### Activity J: Zero Trust Technologies ✅

| Function | Technology Options | Selected | Reasoning |
|----------|-------------------|----------|-----------|
| Identity | SAML, OAuth, OIDC | SAML | Enterprise SSO |
| Device trust | MDM, NAC, Certs | NAC + MDM | Complete control |
| Microsegmentation | NSX, Guardicore | NSX | VMware integration |
| Encryption | TLS, IPSec, MACsec | All three | Layer appropriate |
| Analytics | SIEM, UEBA | Both | Full visibility |
| Policy engine | Palo Alto, Zscaler | Zscaler | Cloud-native |

### Activity K: Lateral Movement Prevention ✅

All techniques should be checked for defense in depth.

**Detection methods:**
| Indicator | Detection Method | Response |
|-----------|-----------------|----------|
| Unusual internal scanning | IDS alerts | Block source |
| Cross-VLAN attempts | Firewall logs | Investigate |
| Service account movement | SIEM correlation | Disable account |
| Admin credential use | PAM monitoring | Alert + verify |

### Activity L: Segmentation Testing ✅

| Test | Method | Expected Result | Actual | Pass/Fail |
|------|--------|----------------|---------|-----------|
| VLAN isolation | Ping sweep | No response | No response | Pass |
| ACL enforcement | Port scan | Blocked | Blocked | Pass |
| NAC quarantine | Non-compliant device | Quarantined | Quarantined | Pass |
| Zero Trust deny | No auth attempt | Denied | Denied | Pass |
| DMZ isolation | Internal access try | Blocked | Blocked | Pass |

---

## Real-World Context & Best Practices

### Why This Matters
- **Ransomware:** Segmentation stops spread
- **Compliance:** Required for PCI, HIPAA
- **Breach containment:** Limits damage
- **Performance:** Reduces broadcast domains

### Common Mistakes to Avoid
❌ Flat networks with no segmentation
❌ VLANs without ACLs between them
❌ Trusting the internal network
❌ Not testing segmentation
❌ Forgetting about east-west traffic

### Industry Best Practices
✅ **Segment by risk level** and data sensitivity
✅ **Implement Zero Trust** progressively
✅ **Test segmentation** quarterly
✅ **Monitor all traffic** including east-west
✅ **Document everything** for compliance

---

## Exam Tips 📝

### Must Memorize:
1. **Zero Trust Principles:**
   - Verify explicitly
   - Least privilege
   - Assume breach
2. **Traffic Direction:**
   - North-South: In/out of network
   - East-West: Between internal systems
3. **Security Zones:**
   - Trusted (internal)
   - Untrusted (internet)
   - DMZ (semi-trusted)
4. **Segmentation Methods:**
   - VLANs (Layer 2)
   - Subnets (Layer 3)
   - Physical
   - Microsegmentation
5. **NAC Components:**
   - 802.1X
   - Posture assessment
   - Quarantine VLAN

### Common Exam Questions:
- "Never trust, always verify?" → **Zero Trust**
- "Layer 2 segmentation?" → **VLANs**
- "Traffic between servers?" → **East-West**
- "Assume breach principle?" → **Zero Trust**
- "Guest isolation method?" → **Separate VLAN**

### Exam Strategy:
- Zero Trust is trending topic
- Microsegmentation = application level
- NAC uses 802.1X
- DMZ = screened subnet
- Always think "least privilege"

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Designed comprehensive segmentation strategy
□ Created VLAN isolation plans
□ Applied Zero Trust principles
□ Configured microsegmentation
□ Implemented NAC policies
□ Designed security zones
□ Isolated guest and IoT networks
□ Addressed compliance requirements
□ Prevented lateral movement
□ Validated segmentation

### Troubleshooting Common Issues

**Problem:** VLANs can still communicate
**Solution:** Check router ACLs, ensure no "permit ip any any"

**Problem:** Zero Trust blocking legitimate traffic
**Solution:** Review policies, add specific allows, check logs

**Problem:** NAC not quarantining
**Solution:** Verify 802.1X config, check RADIUS, posture settings

**Problem:** Microsegmentation too complex
**Solution:** Start with critical apps, expand gradually

---

## Real-World Scenarios

### Scenario 1: Ransomware Outbreak
**Situation:** Ransomware spreading rapidly
**Response:**
1. Identify infected segment
2. Isolate VLAN immediately
3. Block all lateral movement
4. Activate incident response
5. Review segmentation gaps

### Scenario 2: Compliance Audit
**Situation:** PCI DSS audit finding flat network
**Response:**
1. Identify CDE systems
2. Create isolated VLAN
3. Implement firewall rules
4. Document segmentation
5. Schedule penetration test

### Scenario 3: IoT Device Compromise
**Situation:** Smart thermostat hacked
**Response:**
1. Isolate IoT VLAN
2. Block internet access
3. Review all IoT devices
4. Implement stricter controls
5. Consider air-gapping critical IoT

---

## Lab Summary

### Key Concepts Mastered:
✅ Segmentation limits breach impact
✅ Zero Trust assumes no implicit trust
✅ VLANs provide Layer 2 isolation
✅ Microsegmentation protects applications
✅ NAC enforces device compliance
✅ East-west traffic needs monitoring
✅ Multiple zones create defense in depth

### Time-Saving Tips:
- Use segmentation templates
- Automate VLAN provisioning
- Deploy NAC gradually
- Start Zero Trust with identity
- Monitor with SIEM

### Going Further:
- Implement microsegmentation in lab
- Test Zero Trust tools
- Practice VLAN configuration
- Study software-defined perimeter
- Learn about SASE

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for segmentation and Zero Trust exam questions!

**Next Lab:** Lesson 26 - Wireless Security (WPA3, EAP)

### Final Tip:
"Think of network segmentation like compartments in a ship - if one floods, the others stay dry. Zero Trust is like checking everyone's ID, even the captain!"

---