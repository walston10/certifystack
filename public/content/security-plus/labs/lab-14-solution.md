# Lab 14: Network Security Architecture - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Network architecture is foundational to enterprise security.

---

## Section 1: Concept Check - Answers

**1. What is a DMZ (screened subnet)?**

**Answer:**

A **DMZ (Demilitarized Zone)** or screened subnet is a network segment that sits between the untrusted internet and the trusted internal network, hosting public-facing services.

**Why used:**
- Isolates public services from internal network
- If DMZ server is compromised, attacker doesn't have direct internal access
- Allows controlled access to necessary services
- Provides defense in depth

---

**2. Implicit deny vs Explicit allow:**

**Answer:**

| Concept | Definition |
|---------|------------|
| **Implicit deny** | Default rule at end of ruleset: if no rule matches, deny the traffic |
| **Explicit allow** | Specific rule that permits defined traffic |

**Key principle:** Only explicitly allowed traffic passes; everything else is blocked by default.

---

**3. NAT and security benefits:**

**Answer:**

**NAT (Network Address Translation)** translates private IP addresses to public addresses.

**Security benefits:**
- Hides internal IP addressing scheme
- Internal hosts not directly reachable from internet
- Reduces attack surface
- Provides basic obscurity (not security through obscurity alone)

---

**4. Software-Defined Networking (SDN):**

**Answer:**

**SDN** separates the network control plane (decision-making) from the data plane (forwarding), centralizing network management.

**Security changes:**
- Centralized policy enforcement
- Rapid, automated response to threats
- Better visibility across entire network
- Enables microsegmentation
- But: controller becomes critical target

---

**5. East-west vs North-south traffic:**

**Answer:**

| Direction | Definition | Example |
|-----------|------------|---------|
| **North-South** | Traffic entering/leaving the network (through perimeter) | User accessing internet |
| **East-West** | Traffic between systems within the network | App server to database |

**Why it matters:** Traditional security focused on north-south (perimeter). Modern attacks move laterally (east-west), requiring internal segmentation and monitoring.

---

## Section 2: Activity Solutions

### Activity A: Network Security Zones - Answers

| Zone | Trust Level | What Belongs | Access Policy |
|------|-------------|--------------|---------------|
| Untrusted | None | Internet, external networks | Block all by default |
| DMZ | Low | Public web, email gateway, DNS | Limited access in/out |
| Internal | High | Workstations, internal apps | Protected from external |
| Management | Highest | Admin consoles, security tools | Highly restricted access |
| Restricted | Critical | Financial systems, sensitive data | Need-to-know basis |

**Zone traffic rules:**

| Source | Destination | Policy | Example |
|--------|-------------|--------|---------|
| Internet | DMZ | Allow specific ports | HTTP/HTTPS to web server |
| Internet | Internal | Deny all | Block direct internal access |
| DMZ | Internal | Deny most, allow specific | Web server to database only |
| Internal | DMZ | Allow as needed | Admin access to DMZ servers |
| Internal | Internet | Allow with filtering | Web browsing, email |
| Management | All | Allow | Admin access everywhere |

**Why DMZ → Internal restricted:** If DMZ server is compromised, attacker can't easily pivot to internal network.

---

### Activity B: DMZ Architecture - Answers

**Third leg:** Management network (or could be additional DMZ segment)

**Single firewall advantages:**
- Lower cost (one device)
- Simpler management
- Easier troubleshooting

**Disadvantages:**
- Single point of failure
- Compromise gives access to all zones
- Less defense in depth

**Dual firewall advantages:**
- Two layers of protection
- Different vendors = different vulnerabilities
- Compromise of one doesn't expose internal
- Better compliance posture

**DMZ services:**

| Service | Why in DMZ |
|---------|------------|
| Web servers | Public access needed |
| Email gateway | Receives external email |
| DNS (external) | Responds to public queries |
| Reverse proxy | Frontend for internal apps |
| VPN concentrator | Terminates external VPN |

---

### Activity C: Firewall Rules - Answers

**Rule components:**

| Component | Purpose | Examples |
|-----------|---------|----------|
| Source | Where traffic originates | IP, subnet, zone, any |
| Destination | Where traffic goes | IP, subnet, zone |
| Port/Protocol | Service identifier | TCP/443, UDP/53 |
| Action | What to do | Allow, deny, drop |
| Direction | Inbound or outbound | In, out |
| Logging | Record matches | Log all, log denies |

**Web server firewall rules:**

| # | Source | Destination | Port | Action | Purpose |
|---|--------|-------------|------|--------|---------|
| 1 | Any | Web Server | TCP/80 | Allow | HTTP |
| 2 | Any | Web Server | TCP/443 | Allow | HTTPS |
| 3 | Admin Subnet | Web Server | TCP/22 | Allow | SSH admin |
| 4 | Web Server | DB Server | TCP/3306 | Allow | Database |
| 5 | Any | Any | Any | Deny | Implicit deny |

**Common mistakes:**

| Mistake | Risk | Prevention |
|---------|------|------------|
| Any-any rules | Everything allowed | Define specific rules |
| Too broad | More than needed allowed | Principle of least privilege |
| No logging | Can't investigate incidents | Log all denied, critical allowed |
| Outdated rules | Allow old, unnecessary access | Regular rule reviews |
| Wrong order | Broad rule blocks specific | Most specific rules first |

---

### Activity D: NAT - Answers

| Type | Description | Use Case |
|------|-------------|----------|
| Static | 1:1 mapping, permanent | Servers needing consistent public IP |
| Dynamic | Pool of public IPs | Multiple servers, load distribution |
| PAT | Many-to-one with ports | All internal users share one public IP |

**NAT scenario:**

| Internal IP | Internal Port | External IP | External Port | Type |
|-------------|---------------|-------------|---------------|------|
| 192.168.1.10 | 52000 | 203.0.113.50 | 52000 | PAT |
| 192.168.1.20 | 52001 | 203.0.113.50 | 52001 | PAT |
| 192.168.1.100 | 443 | 203.0.113.51 | 443 | Static |

**NAT limitations:**
- Breaks some protocols (FTP active, SIP)
- Not true security (relies on obscurity)
- Can complicate troubleshooting
- Doesn't protect against application-layer attacks

---

### Activity E: Segmentation - Answers

| Method | How It Works | Layer |
|--------|--------------|-------|
| VLANs | Logical separation at switch level | Layer 2 |
| Subnets | Different IP networks | Layer 3 |
| Firewalls | Filter between segments | Layer 3-7 |
| SDN | Software-defined policies | All layers |
| Physical | Separate physical networks | Layer 1 |

**VLAN considerations:**

| Consideration | Explanation |
|---------------|-------------|
| VLAN hopping | Attacker jumps between VLANs via trunk exploitation |
| Native VLAN | Untagged traffic—configure securely |
| Inter-VLAN routing | Requires Layer 3 device—apply ACLs |
| Trunk security | Limit allowed VLANs, disable unused trunks |

**Corporate network design:**

| VLAN | Name | Subnet | Can Access |
|------|------|--------|------------|
| 10 | HR | 10.1.10.0/24 | HR servers only |
| 20 | Finance | 10.1.20.0/24 | Finance servers, limited internet |
| 30 | IT | 10.1.30.0/24 | All (with logging) |
| 40 | General | 10.1.40.0/24 | General servers, internet |
| 99 | Guest | 10.1.99.0/24 | Internet only, isolated |

**Inter-VLAN control:** Layer 3 switch with ACLs or firewall between VLANs.

---

### Activity F: SDN - Answers

| Layer | Function | Traditional |
|-------|----------|-------------|
| Application | Business apps, security tools | Individual management |
| Control | Centralized decision-making | Distributed in each device |
| Infrastructure | Forwarding traffic | Switch/router hardware |

**Components:**

| Component | Role |
|-----------|------|
| Controller | Central brain, makes forwarding decisions |
| Northbound API | Controller ↔ Applications |
| Southbound API | Controller ↔ Network devices |
| Data plane | Actual packet forwarding |
| Control plane | Decision logic (centralized) |

**SDN security benefits:**

| Benefit | How |
|---------|-----|
| Visibility | See all traffic from one point |
| Rapid deployment | Push policies network-wide instantly |
| Automated response | Automatically isolate threats |
| Microsegmentation | Granular policies per workload |
| Consistency | Same policy everywhere |

**SDN risks and mitigations:**

| Risk | Mitigation |
|------|------------|
| Controller compromise | Harden, redundancy, monitoring |
| API vulnerabilities | Authentication, encryption, auditing |
| Single point of failure | Controller clustering |
| Attack surface | Secure management network |

---

### Activity G: Zero Trust - Answers

| Principle | Implementation |
|-----------|----------------|
| Never trust | Authenticate every access request |
| Assume breach | Segment, monitor, limit blast radius |
| Verify explicitly | MFA, device health, context |
| Least privilege | Minimum necessary access |
| Microsegmentation | Isolate workloads |

**Traditional vs Zero Trust:**

| Aspect | Traditional | Zero Trust |
|--------|-------------|------------|
| Trust model | Trust inside, distrust outside | Trust nothing by default |
| Perimeter | Strong perimeter focus | No perimeter assumption |
| Authentication | At perimeter entry | Every resource access |
| Access decisions | Network location based | Identity + context based |
| Internal traffic | Generally trusted | Verified and encrypted |

**Zero trust flow:**

| Step | What Occurs |
|------|-------------|
| Authenticate | Verify user identity (MFA) |
| Device Check | Verify device health, compliance |
| Policy Decision | Evaluate context, determine access |
| Access Resource | Grant minimum necessary access |

---

### Activity H: Design Patterns - Answers

**Bastion host:**

| Question | Answer |
|----------|--------|
| What is it? | Hardened server for admin access to internal network |
| Why use? | Single controlled entry point, audit all admin access |
| Hardening | Minimal services, strong auth, heavy logging |
| Authentication | MFA, SSH keys, no passwords |

**Reverse proxy:**

| Question | Answer |
|----------|--------|
| Purpose | Receives external requests, forwards to internal servers |
| Benefits | Hide internal IPs, SSL termination, caching, WAF |
| Placement | DMZ, in front of web servers |

**Air gap:**

| Question | Answer |
|----------|--------|
| What? | Complete physical network isolation |
| When? | Highly sensitive systems (military, critical infrastructure) |
| Data transfer | Removable media with strict controls |
| Limitations | Inconvenient, doesn't stop all attacks (USB malware) |

---

### Activity I: Traffic Analysis - Answers

| Direction | Description | Example |
|-----------|-------------|---------|
| North-South | In/out of network | User → Internet |
| East-West | Within network | Server → Server |

**Why east-west matters:** Once attacker is inside, they move laterally. Traditional perimeter security doesn't see or control this traffic.

**Traffic flow security:**

| Leg | Type | Traditional | Zero Trust |
|-----|------|-------------|------------|
| Workstation → Web | N-S or E-W | Perimeter firewall | Identity verification, segmentation |
| Web → Database | E-W | Often uncontrolled | Microsegmentation, encryption, verification |

---

### Activity J: Device Placement - Answers

| Device | Location | Purpose |
|--------|----------|---------|
| Perimeter firewall | Network edge | First line of defense |
| Internal firewall | Between segments | Control internal traffic |
| IDS/IPS | After firewall, inline or tap | Detect/prevent attacks |
| WAF | In front of web servers | Protect web applications |
| Load balancer | After firewall, before servers | Distribute traffic |
| Reverse proxy | DMZ | Frontend for apps |
| VPN concentrator | DMZ or perimeter | Terminate VPN connections |
| NAC | Network access points | Control device access |

**Architecture answer:**

```
Internet
    │
    ▼
[External FW] ← Perimeter firewall
    │
    ├──► [WAF] ← Web Application Firewall
    │       │
    │       ▼
    │    [IDS] ← Intrusion Detection
    │       │
    │       ▼
    │    [Load Balancer]
    │       │
    │    ┌──┴──┐
    │    ▼     ▼
    │ [Web1] [Web2]
    │
    ▼
[Internal FW] ← Internal firewall
    │
    ▼
[Database]
    │
[Management Network]
```

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Web app on internal network**

**Response:**
- Compromised web server gives direct access to all internal resources
- No defense in depth—one breach = full compromise
- Violates security best practices and likely compliance requirements

**Proposed architecture:**
- Web server in DMZ
- Internal firewall between DMZ and database
- Only specific ports (database) allowed from web server to internal
- WAF in front of web server
- Monitoring on all traffic

---

**Scenario 2: Pressure for any-any rules**

**Response:**
- Any-any defeats the purpose of segmentation
- Identify specific traffic that's broken
- Create targeted rules for legitimate traffic
- Document each rule with business justification
- Implement in phases, test thoroughly
- Any-any rule = accepting all the risk you were trying to mitigate

---

**Scenario 3: Why internal segmentation?**

**Justification:**
- Insider threats (malicious or compromised employees)
- Malware spread—without segmentation, one infection spreads everywhere
- Compliance requirements (PCI, HIPAA require segmentation)
- Limit breach scope—attacker in one area can't access everything
- Defense in depth—perimeter isn't the only control
- Trust but verify—even trusted users' machines can be compromised

---

## Key Exam Tips

1. **DMZ placement:** Between internet and internal, hosts public-facing services

2. **Dual firewall DMZ:** More secure than single firewall (defense in depth)

3. **Firewall rule order:** Top-to-bottom, first match wins, implicit deny at end

4. **NAT types:** Static (1:1), Dynamic (pool), PAT (many:1 with ports)

5. **East-west traffic:** Internal traffic between systems—often overlooked

6. **SDN:** Separates control plane from data plane, centralizes management

7. **Zero trust:** Never trust, always verify, assume breach

8. **Bastion host:** Hardened jump server for administrative access

9. **Air gap:** Complete physical isolation for highest security

10. **Microsegmentation:** Per-workload security policies

---

## Common Mistakes to Avoid

❌ Placing public servers directly on internal network

❌ Creating overly broad firewall rules ("any-any")

❌ Thinking NAT is a security control (it provides obscurity, not security)

❌ Ignoring east-west traffic security

❌ Trusting internal network because "it's behind the firewall"

❌ Forgetting implicit deny at end of firewall rules

---

**Congratulations on completing Lab 14!**

Network architecture is foundational—understanding these concepts is essential for designing secure environments.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 14: Network Security Architecture - Solution Guide*