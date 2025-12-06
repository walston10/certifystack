# Lab 17: Firewalls and Intrusion Prevention

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 3.2 - Given a scenario, apply security principles to secure enterprise infrastructure

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between a stateless (packet filtering) firewall and a stateful firewall?**

2. **Explain the difference between an IDS and an IPS. When would you use each?**

3. **What is a Next-Generation Firewall (NGFW), and what capabilities does it add beyond traditional firewalls?**

4. **What is the difference between signature-based and anomaly-based detection?**

5. **What is a Web Application Firewall (WAF), and what layer of the OSI model does it operate at?**

---

## Section 2: Hands-On Activities

### Activity A: Firewall Types Comparison

**Goal:** Understand different firewall technologies.

**Firewall type comparison:**

| Type | OSI Layer | How It Works | Pros | Cons |
|------|-----------|--------------|------|------|
| Packet Filtering (Stateless) | | | | |
| Stateful Inspection | | | | |
| Application Layer (Proxy) | | | | |
| Next-Generation (NGFW) | | | | |
| Web Application (WAF) | | | | |

**Match the firewall to its capability:**

| Capability | Firewall Type |
|------------|---------------|
| Examines each packet independently | |
| Tracks TCP connection states | |
| Performs deep packet inspection | |
| Understands HTTP requests | |
| Can identify applications regardless of port | |
| Blocks SQL injection attacks | |
| Uses ACLs based on IP/port | |
| Integrates IPS functionality | |

---

### Activity B: Firewall Rule Fundamentals

**Goal:** Create and analyze firewall rules.

**Rule components:**

| Component | Description | Example Values |
|-----------|-------------|----------------|
| Rule number/priority | | |
| Source IP/network | | |
| Destination IP/network | | |
| Source port | | |
| Destination port | | |
| Protocol | | |
| Action | | |
| Direction | | |
| Logging | | |
| Comment/description | | |

**Rule processing principles:**

| Principle | Explanation |
|-----------|-------------|
| Top-to-bottom processing | |
| First match wins | |
| Implicit deny | |
| Most specific first | |

**Analyze these rules:**

```
Rule 1: ALLOW TCP any -> 10.0.0.5:443
Rule 2: DENY TCP any -> 10.0.0.0/24:any
Rule 3: ALLOW TCP 192.168.1.0/24 -> 10.0.0.5:22
Rule 4: DENY any any -> any
```

| Traffic | Matching Rule | Result |
|---------|---------------|--------|
| 8.8.8.8 → 10.0.0.5:443 (TCP) | | |
| 192.168.1.50 → 10.0.0.5:22 (TCP) | | |
| 192.168.1.50 → 10.0.0.10:80 (TCP) | | |
| 172.16.0.1 → 10.0.0.5:22 (TCP) | | |
| 8.8.8.8 → 10.0.0.5:80 (UDP) | | |

**What's wrong with these rules?**

| Rule Set | Problem |
|----------|---------|
| Rule 1: ALLOW any any → any any | |
| Rule 1: DENY all, Rule 2: ALLOW specific | |
| Missing implicit deny at end | |

---

### Activity C: Designing Firewall Rules

**Goal:** Create firewall rulesets for real scenarios.

**Scenario 1: Web Server in DMZ**

Requirements:
- Allow HTTP/HTTPS from internet
- Allow SSH from admin network (10.1.1.0/24) only
- Allow web server to query internal DNS (10.2.2.10)
- Deny all other traffic

| # | Source | Dest | Port | Proto | Action | Description |
|---|--------|------|------|-------|--------|-------------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

**Scenario 2: Database Server (Internal)**

Requirements:
- Allow connections from app servers (10.3.3.0/24) on port 3306
- Allow SSH from jump server (10.1.1.5) only
- Allow server to reach internal NTP (10.2.2.11)
- Deny all internet access
- Deny all other traffic

| # | Source | Dest | Port | Proto | Action | Description |
|---|--------|------|------|-------|--------|-------------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

---

### Activity D: Stateful vs Stateless Analysis

**Goal:** Understand the difference in traffic handling.

**Stateless firewall behavior:**

| Packet | Direction | Evaluation |
|--------|-----------|------------|
| SYN to port 80 | Inbound | Check against inbound rules |
| SYN-ACK response | Outbound | |
| ACK | Inbound | |
| HTTP request | Inbound | |
| HTTP response | Outbound | |

**Problem with stateless for return traffic:**

_________________________________________________________________

**Stateful firewall behavior:**

| Packet | Direction | State Table Action |
|--------|-----------|-------------------|
| SYN to port 80 | Inbound | |
| SYN-ACK response | Outbound | |
| ACK | Inbound | |
| HTTP response | Outbound | |
| Connection close | - | |

**Why stateful is more secure:**

| Advantage | Explanation |
|-----------|-------------|
| Tracks connections | |
| Allows return traffic automatically | |
| Detects out-of-state packets | |
| Reduces rule complexity | |

---

### Activity E: IDS vs IPS Comparison

**Goal:** Understand intrusion detection and prevention.

**IDS vs IPS:**

| Aspect | IDS | IPS |
|--------|-----|-----|
| Position in network | | |
| Traffic flow | | |
| Response to threats | | |
| Latency impact | | |
| Failure mode | | |
| False positive impact | | |

**Deployment modes:**

| Mode | Description | IDS or IPS |
|------|-------------|------------|
| Inline | | |
| Tap/Span | | |
| Passive | | |

**IDS/IPS types:**

| Type | What It Monitors | Example |
|------|------------------|---------|
| NIDS/NIPS | | |
| HIDS/HIPS | | |

**Detection methods:**

| Method | How It Works | Pros | Cons |
|--------|--------------|------|------|
| Signature-based | | | |
| Anomaly-based | | | |
| Heuristic/Behavioral | | | |

---

### Activity F: IDS/IPS Rule Analysis

**Goal:** Understand detection rules.

**Snort rule example:**

```
alert tcp any any -> 192.168.1.0/24 80 (msg:"SQL Injection Attempt"; 
content:"' OR '1'='1"; nocase; sid:1000001; rev:1;)
```

| Component | Value | Meaning |
|-----------|-------|---------|
| Action | alert | |
| Protocol | tcp | |
| Source | any any | |
| Direction | -> | |
| Destination | 192.168.1.0/24 80 | |
| msg | | |
| content | | |
| nocase | | |
| sid | | |

**What traffic would this rule match?**

_________________________________________________________________

**Write a conceptual rule for:**

Detect potential SSH brute force (many connections to port 22):

| Component | Your Value |
|-----------|------------|
| Action | |
| Protocol | |
| Destination port | |
| Detection criteria | |

---

### Activity G: Next-Generation Firewall Features

**Goal:** Understand NGFW capabilities.

**NGFW features beyond traditional firewalls:**

| Feature | Description | Security Benefit |
|---------|-------------|------------------|
| Application awareness | | |
| User identity integration | | |
| Deep packet inspection | | |
| Integrated IPS | | |
| SSL/TLS inspection | | |
| Threat intelligence | | |
| Sandboxing | | |
| URL filtering | | |

**Application awareness example:**

Traditional firewall rule: Allow TCP 443

| Traffic | Traditional Result | NGFW Result |
|---------|-------------------|-------------|
| HTTPS to banking site | | |
| HTTPS to social media | | |
| BitTorrent over 443 | | |
| VPN tunnel over 443 | | |

**How can NGFW differentiate these?**

_________________________________________________________________

**User identity integration:**

| Traditional Rule | Identity-Based Rule |
|------------------|---------------------|
| Allow 10.1.1.0/24 to internet | |
| Block 10.1.2.0/24 from social media | |

Why is identity-based better?

_________________________________________________________________

---

### Activity H: Web Application Firewall (WAF)

**Goal:** Understand WAF functionality.

**WAF vs Network Firewall:**

| Aspect | Network Firewall | WAF |
|--------|------------------|-----|
| OSI Layer | | |
| Primary focus | | |
| Understands | | |
| Protects against | | |
| Deployment | | |

**WAF protection capabilities:**

| Attack | How WAF Protects |
|--------|------------------|
| SQL injection | |
| Cross-site scripting (XSS) | |
| CSRF | |
| File inclusion | |
| DDoS (application layer) | |

**WAF deployment modes:**

| Mode | Description | Pros | Cons |
|------|-------------|------|------|
| Inline/Reverse proxy | | | |
| Out-of-band | | | |
| Cloud-based | | | |

**WAF rule example (OWASP ModSecurity):**

```
SecRule ARGS "@contains <script>" "id:1,deny,status:403,msg:'XSS Attempt'"
```

What does this rule do?

_________________________________________________________________

---

### Activity I: Firewall Placement and Architecture

**Goal:** Properly position firewalls in network architecture.

**Firewall placement scenarios:**

| Location | Purpose | Traffic Controlled |
|----------|---------|-------------------|
| Internet edge | | |
| DMZ boundary | | |
| Between internal segments | | |
| Data center boundary | | |
| Cloud VPC | | |

**Design exercise:**

Place firewalls in this architecture:

```
Internet
    │
    ▼
[    ?    ]
    │
    ├───────────────┐
    │               │
[   DMZ   ]    [    ?    ]
    │               │
    │         [Internal Network]
    │               │
[    ?    ]    [    ?    ]
    │               │
[Database]    [Workstations]
```

What firewalls go where?

| Position | Firewall Type | Purpose |
|----------|---------------|---------|
| Internet edge | | |
| Before internal | | |
| Before database | | |
| Between segments | | |

---

### Activity J: False Positives and Tuning

**Goal:** Manage IDS/IPS alerts effectively.

**False positive vs False negative:**

| Type | Definition | Impact |
|------|------------|--------|
| False positive | | |
| False negative | | |

**Which is worse and why?**

_________________________________________________________________

**Causes of false positives:**

| Cause | Example | Solution |
|-------|---------|----------|
| Overly broad signatures | | |
| Legitimate traffic patterns | | |
| Misconfiguration | | |
| Outdated rules | | |

**Tuning strategies:**

| Strategy | Implementation |
|----------|----------------|
| Whitelist known good | |
| Adjust thresholds | |
| Custom signatures | |
| Suppress specific alerts | |
| Correlate with other data | |

**Alert prioritization:**

| Alert Type | Priority | Response |
|------------|----------|----------|
| Known exploit against vulnerable system | | |
| Generic scan against patched system | | |
| Malware callback attempt | | |
| Policy violation (non-security) | | |

---

### Activity K: Unified Threat Management (UTM)

**Goal:** Understand consolidated security devices.

**UTM components:**

| Component | Function |
|-----------|----------|
| Firewall | |
| IDS/IPS | |
| Antivirus | |
| Content filtering | |
| VPN | |
| Anti-spam | |
| DLP | |

**UTM vs NGFW vs Separate Devices:**

| Approach | Pros | Cons |
|----------|------|------|
| UTM | | |
| NGFW | | |
| Separate devices | | |

**When to use each:**

| Scenario | Recommended Approach |
|----------|---------------------|
| Small business, limited budget | |
| Enterprise, high performance needs | |
| Compliance requiring specific vendors | |
| Branch office | |

---

### Activity L: Firewall and IPS Logging

**Goal:** Understand security device logging.

**What to log:**

| Event Type | Why Important |
|------------|---------------|
| Allowed connections | |
| Denied connections | |
| IPS alerts | |
| Configuration changes | |
| Admin access | |
| Policy updates | |

**Log analysis priorities:**

| Log Entry | Priority | Action |
|-----------|----------|--------|
| Blocked attack from internet | | |
| Allowed connection to C2 server | | |
| Multiple failed admin logins | | |
| Outbound blocked to known malware domain | | |
| Normal denied traffic (port scan) | | |

**Log retention considerations:**

| Factor | Consideration |
|--------|---------------|
| Compliance requirements | |
| Storage capacity | |
| Investigation needs | |
| Performance impact | |

---

### Tier 2 Bonus: Windows Firewall Deep Dive

> ⚠️ **Requires:** Administrator privileges

---

### Activity M: Windows Firewall Analysis

**Goal:** Examine Windows Firewall configuration.

**View all firewall rules:**

PowerShell (Admin):
```powershell
Get-NetFirewallRule | Select-Object Name, DisplayName, Direction, Action, Enabled | Format-Table -AutoSize
```

**Count rules by direction:**

```powershell
Get-NetFirewallRule | Group-Object Direction | Select-Object Name, Count
```

| Direction | Count |
|-----------|-------|
| Inbound | |
| Outbound | |

**Find rules allowing inbound traffic:**

```powershell
Get-NetFirewallRule -Direction Inbound -Action Allow -Enabled True | 
Select-Object DisplayName, Profile | Format-Table
```

List 5 allowed inbound rules:

| Rule Name | Profile |
|-----------|---------|
| | |
| | |
| | |
| | |
| | |

**Check for any "Allow All" rules:**

```powershell
Get-NetFirewallRule -Action Allow | Where-Object {
    $portFilter = $_ | Get-NetFirewallPortFilter
    $portFilter.LocalPort -eq "Any" -and $portFilter.RemotePort -eq "Any"
}
```

Any overly permissive rules found? _______________

**View firewall log settings:**

```powershell
Get-NetFirewallProfile | Select-Object Name, LogFileName, LogMaxSizeKilobytes, LogAllowed, LogBlocked
```

| Profile | Log Location | Log Blocked? | Log Allowed? |
|---------|--------------|--------------|--------------|
| Domain | | | |
| Private | | | |
| Public | | | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your IPS is generating 10,000 alerts per day. The security team can only investigate 100. How do you prioritize and reduce alert fatigue without missing real threats?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A developer asks you to create a firewall rule that allows "any to any" because their application "needs flexibility." How do you respond, and what's your approach to finding the actual requirements?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** After implementing an IPS in inline mode, users complain about application slowdowns and some legitimate traffic being blocked. Management wants to disable the IPS. What alternatives do you propose?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Differentiate packet filtering, stateful, proxy, and NGFW firewalls
- [ ] Explain stateless vs stateful traffic handling
- [ ] Create firewall rules with proper ordering
- [ ] Compare IDS vs IPS (detection vs prevention)
- [ ] Explain signature-based vs anomaly-based detection
- [ ] Describe NGFW capabilities (app awareness, user identity)
- [ ] Understand WAF functionality and deployment
- [ ] Properly place firewalls in network architecture
- [ ] Manage false positives and tune IDS/IPS
- [ ] Understand UTM devices

---

## What You Learned Today

- ✅ Compared firewall types
- ✅ Created and analyzed firewall rules
- ✅ Understood stateful vs stateless operation
- ✅ Compared IDS and IPS
- ✅ Analyzed detection methods
- ✅ Explored NGFW capabilities
- ✅ Reviewed WAF functionality
- ✅ Designed firewall placement
- ✅ Addressed false positive management
- ✅ Understood UTM devices
- ✅ Reviewed logging requirements
- ✅ (Tier 2) Analyzed Windows Firewall

**Next Lab:** Wireless Security - securing wireless networks and authentication.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 17: Firewalls and Intrusion Prevention*