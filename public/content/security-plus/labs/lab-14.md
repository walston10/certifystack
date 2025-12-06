# Lab 14: Network Security Architecture

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 3.1 - Compare and contrast security implications of different architecture models

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is a DMZ (screened subnet), and why is it used?**

2. **Explain the difference between implicit deny and explicit allow in firewall rules.**

3. **What is NAT (Network Address Translation), and how does it provide security benefits?**

4. **What is Software-Defined Networking (SDN), and how does it change network security?**

5. **Describe the difference between east-west traffic and north-south traffic. Why does this matter for security?**

---

## Section 2: Hands-On Activities

### Activity A: Network Security Zones

**Goal:** Understand network zone concepts.

**Security zone definitions:**

| Zone | Trust Level | What Belongs Here | Access Policy |
|------|-------------|-------------------|---------------|
| Untrusted (Internet) | | | |
| DMZ (Screened Subnet) | | | |
| Internal (Trusted) | | | |
| Management | | | |
| Restricted/Secure | | | |

**Zone traffic rules:**

| Source Zone | Destination Zone | Default Policy | Example Traffic |
|-------------|------------------|----------------|-----------------|
| Internet | DMZ | | |
| Internet | Internal | | |
| DMZ | Internal | | |
| Internal | DMZ | | |
| Internal | Internet | | |
| Management | All zones | | |

**Why is DMZ → Internal traffic restricted?**

_________________________________________________________________

---

### Activity B: DMZ Architecture Design

**Goal:** Design DMZ architectures for different scenarios.

**Single firewall DMZ (three-legged):**

```
                    Internet
                        │
                   ┌────┴────┐
                   │ Firewall │
                   └────┬────┘
           ┌────────────┼────────────┐
           │            │            │
        ┌──┴──┐     ┌───┴───┐    ┌───┴───┐
        │ DMZ │     │Internal│    │  ???  │
        └─────┘     └───────┘    └───────┘
```

**Label the third leg:** _______________________

**Advantages of single firewall:**

| Advantage | Description |
|-----------|-------------|
| | |
| | |

**Disadvantages:**

| Disadvantage | Description |
|--------------|-------------|
| | |
| | |

**Dual firewall DMZ:**

```
    Internet
        │
   ┌────┴────┐
   │ FW-Ext  │  ← External Firewall
   └────┬────┘
        │
    ┌───┴───┐
    │  DMZ  │
    └───┬───┘
        │
   ┌────┴────┐
   │ FW-Int  │  ← Internal Firewall
   └────┬────┘
        │
   ┌────┴────┐
   │Internal │
   └─────────┘
```

**Why use two firewalls?**

| Reason | Explanation |
|--------|-------------|
| | |
| | |
| | |

**What services belong in the DMZ?**

| Service | Why in DMZ |
|---------|------------|
| | |
| | |
| | |
| | |

---

### Activity C: Firewall Rule Design

**Goal:** Create effective firewall rules.

**Firewall rule components:**

| Component | Purpose | Example Values |
|-----------|---------|----------------|
| Source | | |
| Destination | | |
| Port/Protocol | | |
| Action | | |
| Direction | | |
| Logging | | |

**Rule processing order:**

| Concept | Explanation |
|---------|-------------|
| Top-to-bottom | |
| First match wins | |
| Implicit deny | |

**Design firewall rules for a web server in DMZ:**

| # | Source | Destination | Port | Action | Purpose |
|---|--------|-------------|------|--------|---------|
| 1 | | | | | Allow web traffic |
| 2 | | | | | Allow HTTPS |
| 3 | | | | | Admin SSH access |
| 4 | | | | | Web server to DB |
| 5 | | | | | Default rule |

**Common firewall mistakes:**

| Mistake | Risk | Prevention |
|---------|------|------------|
| Any-any rules | | |
| Rules too broad | | |
| No logging | | |
| Outdated rules | | |
| Wrong rule order | | |

---

### Activity D: NAT and PAT Configuration

**Goal:** Understand NAT types and security implications.

**NAT types:**

| Type | Description | Use Case |
|------|-------------|----------|
| Static NAT | | |
| Dynamic NAT | | |
| PAT (NAT Overload) | | |

**NAT security benefits:**

| Benefit | How It Helps |
|---------|--------------|
| Hide internal IPs | |
| Reduce attack surface | |
| IP conservation | |

**NAT security limitations:**

| Limitation | Explanation |
|------------|-------------|
| | |
| | |
| | |

**NAT scenario:**

Internal network: 192.168.1.0/24
Public IP: 203.0.113.50

| Internal IP | Internal Port | External IP | External Port | NAT Type |
|-------------|---------------|-------------|---------------|----------|
| 192.168.1.10 | 52000 | | | PAT |
| 192.168.1.20 | 52001 | | | PAT |
| 192.168.1.100 | 443 | 203.0.113.51 | 443 | |

**Check your NAT (public vs private IP):**

Find your private IP:
```
ipconfig
```

Find your public IP (visit): whatismyip.com

| Address Type | Your IP |
|--------------|---------|
| Private IP | |
| Public IP | |
| Are they different? | [ ] Yes [ ] No |

If yes, you're behind NAT.

---

### Activity E: Network Segmentation Architecture

**Goal:** Design segmented network architecture.

**Segmentation methods:**

| Method | How It Works | Layer |
|--------|--------------|-------|
| VLANs | | |
| Subnets | | |
| Firewalls | | |
| SDN | | |
| Physical separation | | |

**VLAN security considerations:**

| Consideration | Explanation |
|---------------|-------------|
| VLAN hopping | |
| Native VLAN | |
| Inter-VLAN routing | |
| Trunk security | |

**Design a segmented corporate network:**

Departments: HR, Finance, IT, General Staff, Guests

| VLAN ID | Name | Subnet | Can Access |
|---------|------|--------|------------|
| 10 | | | |
| 20 | | | |
| 30 | | | |
| 40 | | | |
| 99 | | | |

**What controls inter-VLAN traffic?**

_________________________________________________________________

---

### Activity F: Software-Defined Networking (SDN)

**Goal:** Understand SDN architecture and security.

**SDN architecture:**

| Layer | Function | Traditional Equivalent |
|-------|----------|----------------------|
| Application | | |
| Control | | |
| Infrastructure/Data | | |

**SDN components:**

| Component | Role |
|-----------|------|
| SDN Controller | |
| Northbound API | |
| Southbound API | |
| Data plane | |
| Control plane | |

**SDN security benefits:**

| Benefit | How It Helps |
|---------|--------------|
| Centralized visibility | |
| Rapid policy deployment | |
| Automated response | |
| Microsegmentation | |
| Consistent policy | |

**SDN security risks:**

| Risk | Mitigation |
|------|------------|
| Controller compromise | |
| API vulnerabilities | |
| Single point of failure | |
| Increased attack surface | |

---

### Activity G: Zero Trust Network Architecture

**Goal:** Apply zero trust principles to network design.

**Zero trust principles:**

| Principle | Implementation |
|-----------|----------------|
| Never trust, always verify | |
| Assume breach | |
| Verify explicitly | |
| Least privilege access | |
| Microsegmentation | |

**Traditional vs Zero Trust:**

| Aspect | Traditional | Zero Trust |
|--------|-------------|------------|
| Trust model | | |
| Network perimeter | | |
| Authentication | | |
| Access decisions | | |
| Internal traffic | | |

**Zero trust components:**

| Component | Purpose |
|-----------|---------|
| Identity provider | |
| Policy engine | |
| Policy enforcement point | |
| Continuous monitoring | |
| Device trust | |

**Zero trust network flow:**

```
User → [Authenticate] → [Device Check] → [Policy Decision] → [Access Resource]
```

What happens at each step?

| Step | What Occurs |
|------|-------------|
| Authenticate | |
| Device Check | |
| Policy Decision | |
| Access Resource | |

---

### Activity H: Secure Network Design Patterns

**Goal:** Apply common secure design patterns.

**Design pattern: Bastion host / Jump server**

```
Internet → [Firewall] → [Bastion Host] → [Internal Servers]
```

| Question | Answer |
|----------|--------|
| What is a bastion host? | |
| Why use one? | |
| How is it hardened? | |
| Authentication method? | |

**Design pattern: Reverse proxy**

```
Internet → [Reverse Proxy] → [Web Servers]
```

| Question | Answer |
|----------|--------|
| What does reverse proxy do? | |
| Security benefits? | |
| Where is it placed? | |

**Design pattern: Air gap**

| Question | Answer |
|----------|--------|
| What is an air gap? | |
| When is it used? | |
| How is data transferred? | |
| Limitations? | |

---

### Activity I: Network Traffic Analysis

**Goal:** Understand traffic flow patterns.

**North-South vs East-West traffic:**

| Direction | Description | Example |
|-----------|-------------|---------|
| North-South | | |
| East-West | | |

**Why east-west security matters:**

_________________________________________________________________

**Traffic flow scenario:**

User on workstation accesses web app, which queries database:

```
[Workstation] → [Web Server] → [Database]
```

| Leg | Traffic Type | Traditional Security | Zero Trust Security |
|-----|--------------|---------------------|---------------------|
| Workstation → Web Server | | | |
| Web Server → Database | | | |

**Where would you place security controls?**

| Location | Control Type | Purpose |
|----------|--------------|---------|
| Network perimeter | | |
| Between segments | | |
| On each host | | |
| At application layer | | |

---

### Activity J: Network Security Device Placement

**Goal:** Properly place security devices in network architecture.

**Device placement matrix:**

| Device | Typical Location | Purpose |
|--------|------------------|---------|
| Perimeter firewall | | |
| Internal firewall | | |
| IDS/IPS | | |
| WAF | | |
| Load balancer | | |
| Reverse proxy | | |
| VPN concentrator | | |
| NAC | | |

**Design a network with all components:**

Place these devices in the architecture:
- External firewall
- Internal firewall  
- IDS
- WAF
- Load balancer
- Web servers (2)
- Database server
- Management network

```
Internet
    │
    ▼
[           ] ← Device: _______________
    │
    ├──► [           ] ← Device: _______________
    │           │
    │           ▼
    │    [           ] ← Device: _______________
    │           │
    │           ▼
    │    [           ] ← Device: _______________
    │           │
    │    ┌──────┴──────┐
    │    ▼             ▼
    │ [Web 1]      [Web 2]
    │
    ▼
[           ] ← Device: _______________
    │
    ▼
[           ] ← Database
    │
[           ] ← Management Network
```

---

### Activity K: Infrastructure as Code (IaC) Security

**Goal:** Understand security in automated infrastructure.

**IaC benefits for security:**

| Benefit | How It Helps |
|---------|--------------|
| Version control | |
| Consistency | |
| Auditability | |
| Rapid deployment | |
| Drift detection | |

**IaC security risks:**

| Risk | Mitigation |
|------|------------|
| Secrets in code | |
| Misconfigurations | |
| Supply chain attacks | |
| Insufficient review | |

**IaC tools:**

| Tool | Primary Use |
|------|-------------|
| Terraform | |
| Ansible | |
| CloudFormation | |
| Puppet/Chef | |

**Secure IaC practices:**

| Practice | Implementation |
|----------|----------------|
| Code review | |
| Secret management | |
| Policy as code | |
| Testing | |
| Least privilege | |

---

### Tier 2 Bonus: Windows Firewall Configuration

> ⚠️ **Requires:** Administrator privileges

---

### Activity L: Windows Firewall Rules

**Goal:** Examine and create firewall rules.

**View current firewall rules:**

PowerShell (Admin):
```powershell
Get-NetFirewallRule | Where-Object {$_.Enabled -eq 'True'} | Select-Object Name, Direction, Action -First 20
```

| Rule Name | Direction | Action |
|-----------|-----------|--------|
| | | |
| | | |
| | | |
| | | |
| | | |

**View rules for a specific port:**

```powershell
Get-NetFirewallPortFilter | Where-Object {$_.LocalPort -eq 3389}
```

Is RDP (3389) allowed? _______

**Check firewall profiles:**

```powershell
Get-NetFirewallProfile | Select-Object Name, Enabled, DefaultInboundAction, DefaultOutboundAction
```

| Profile | Enabled | Inbound Default | Outbound Default |
|---------|---------|-----------------|------------------|
| Domain | | | |
| Private | | | |
| Public | | | |

**Create a test rule (block outbound to specific IP):**

```powershell
# Example - blocks outbound to test IP (don't use on real systems)
# New-NetFirewallRule -DisplayName "Test Block" -Direction Outbound -RemoteAddress 192.0.2.1 -Action Block
```

**What's the default outbound action on your public profile?** _______

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company wants to host a new public-facing web application. The developers want to place it directly on the internal network "for easier database access." How do you explain why this is a bad idea, and what architecture do you propose?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** After implementing network segmentation, users complain that "nothing works anymore." The network team is under pressure to create broad "any-any" rules to fix it quickly. How do you respond?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Management asks why you need a firewall between internal network segments since "we trust our employees." How do you justify internal segmentation?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Define security zones (untrusted, DMZ, trusted, management)
- [ ] Design single and dual firewall DMZ architectures
- [ ] Create effective firewall rules with proper ordering
- [ ] Explain NAT types and security implications
- [ ] Describe VLAN-based segmentation
- [ ] Explain SDN architecture and security benefits/risks
- [ ] Apply zero trust principles to network design
- [ ] Place security devices correctly in network architecture
- [ ] Distinguish north-south from east-west traffic
- [ ] Understand IaC security considerations

---

## What You Learned Today

- ✅ Defined network security zones
- ✅ Designed DMZ architectures
- ✅ Created firewall rules with proper ordering
- ✅ Analyzed NAT types and security implications
- ✅ Designed VLAN-based segmentation
- ✅ Explored SDN architecture
- ✅ Applied zero trust principles
- ✅ Identified secure design patterns
- ✅ Analyzed traffic flow patterns
- ✅ Placed security devices in architecture
- ✅ Reviewed IaC security
- ✅ (Tier 2) Examined Windows Firewall rules

**Next Lab:** Cloud Security - securing cloud infrastructure and services.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 14: Network Security Architecture*