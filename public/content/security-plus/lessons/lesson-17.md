# Lesson 17: Firewalls and Intrusion Prevention

**Estimated Time:** 30-35 minutes  
**Domain:** 3.0 Security Architecture (18% of exam)  
**Exam Objectives Covered:** 3.2 - Given a scenario, apply security principles to secure enterprise infrastructure

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Compare and contrast firewall types (packet filtering, stateful, NGFW, WAF)
- Explain firewall deployment architectures and rule management
- Differentiate between IDS and IPS and their detection methods
- Describe signature-based vs. anomaly-based vs. behavioral detection
- Explain the role of Unified Threat Management (UTM) devices
- Identify common false positive and false negative scenarios
- Design appropriate firewall and IDS/IPS placement in network architecture
- Apply defense-in-depth principles using multiple security layers

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Firewalls" (12 min)
- **Professor Messer:** "Security+ SY0-701 - IDS and IPS" (10 min)
- **PowerCert:** "IDS vs IPS - What's the Difference?" (8 min)

---

## Introduction

In 2013, Target suffered a massive data breach affecting 40 million credit cards. Attackers gained access through an HVAC vendor, moved laterally to the payment network, and exfiltrated data for weeks. Here's the critical detail: Target's security team had deployed FireEye, a sophisticated intrusion detection system. It detected the malware. It sent alerts. Nobody acted on them.

The technology worked. The process failed.

This breach illustrates a fundamental truth about firewalls and intrusion prevention: they're only as effective as their implementation and the response to their alerts. A firewall with poor rules provides false security. An IDS generating thousands of ignored alerts is just expensive noise.

This lesson covers the core perimeter and internal security technologies: firewalls that control traffic flow, and intrusion detection/prevention systems that identify malicious activity. You'll learn not just how they work, but how to deploy them effectively and avoid the common failures that lead to breaches despite having security tools in place.

---

## Firewall Fundamentals

Firewalls control traffic between networks based on rules.

### Core Concept

**Firewall:** A security device that monitors and filters network traffic based on predetermined rules.

**Basic function:**
```
Traffic arrives → Check against rules → Allow or Block
```

**Placement:** Between networks of different trust levels
- Internet and internal network
- DMZ and internal network
- Different internal segments

### Firewall Types

**Packet Filtering (Stateless)**

Examines individual packets against ACL rules.

**What it checks:**
- Source IP address
- Destination IP address
- Source port
- Destination port
- Protocol (TCP, UDP, ICMP)

**What it doesn't check:**
- Packet payload (content)
- Connection state
- Application layer data

**Example rule:**
```
permit tcp any host 192.168.1.10 eq 443
deny ip any any
```

**Limitations:**
- No connection tracking
- Must allow return traffic explicitly
- Can't detect application-layer attacks
- Easy to bypass with crafted packets

**Use case:** Simple filtering, router ACLs, first-line defense.

---

**Stateful Inspection Firewall**

Tracks connection state, allows related return traffic.

**How it works:**
1. Outbound connection initiated
2. Firewall creates state table entry
3. Return traffic matched to state
4. Return traffic automatically allowed
5. State removed when connection closes

**State table example:**
```
| Source IP    | Src Port | Dest IP      | Dst Port | Protocol | State       |
|--------------|----------|--------------|----------|----------|-------------|
| 10.1.1.50    | 52431    | 203.0.113.10 | 443      | TCP      | ESTABLISHED |
| 10.1.1.51    | 49822    | 8.8.8.8      | 53       | UDP      | ACTIVE      |
```

**Advantages over packet filtering:**
- Only need outbound rules (return traffic handled)
- Blocks unsolicited inbound
- Harder to bypass with crafted packets

**Limitations:**
- Still doesn't inspect payload deeply
- Can't identify application-layer attacks
- Encrypted traffic opaque

---

**Application Layer Firewall (Proxy)**

Operates at Layer 7, understands application protocols.

**How it works:**
1. Client connects to proxy
2. Proxy terminates connection
3. Proxy inspects request at application layer
4. Proxy creates new connection to destination
5. Response flows back through proxy

**Capabilities:**
- Full protocol inspection
- Content filtering
- URL filtering
- Caching
- User authentication

**Limitations:**
- Higher latency (connection termination)
- May not support all protocols
- More complex configuration
- Performance overhead

---

**Next-Generation Firewall (NGFW)**

Combines traditional firewall with advanced features.

**Core capabilities:**
- Stateful inspection (traditional firewall)
- Deep packet inspection (DPI)
- Application awareness and control
- Integrated IPS
- User identity awareness
- TLS/SSL inspection
- Threat intelligence integration

**Application awareness example:**
```
Traditional: Allow TCP 80 (HTTP)
NGFW: Allow Facebook, Block Facebook Games, Block Facebook Chat
```

Same port, different application control.

**User awareness:**
- Integrates with Active Directory
- Rules based on user/group, not just IP
- "Allow Sales group to access CRM"
- "Block contractors from file shares"

**TLS inspection:**
- Decrypts traffic for inspection
- Re-encrypts before forwarding
- Requires certificate management
- Privacy and compliance considerations

---

**Web Application Firewall (WAF)**

Specifically protects web applications.

**What it protects against:**
- SQL injection
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- OWASP Top 10 vulnerabilities
- Bot attacks
- DDoS (application layer)

**Deployment:**
```
Internet → [WAF] → Web Server
```

**Detection methods:**
- Signature-based (known attack patterns)
- Behavioral (anomaly detection)
- Positive security model (only allow known good)

**Examples:** AWS WAF, Cloudflare, ModSecurity, F5

**WAF vs. NGFW:**
- WAF: Web application focused, HTTP/HTTPS deep inspection
- NGFW: Network-wide, all protocols, broader protection

---

### Firewall Comparison

| Type | Layer | Inspection | State | Best For |
|------|-------|------------|-------|----------|
| Packet Filter | 3-4 | Header only | No | Simple filtering |
| Stateful | 3-4 | Header + state | Yes | Standard perimeter |
| Proxy/App Layer | 7 | Full content | Yes | Content control |
| NGFW | 3-7 | Deep packet | Yes | Enterprise perimeter |
| WAF | 7 | HTTP/HTTPS | Yes | Web applications |

---

## Firewall Deployment

Where and how to place firewalls.

### Perimeter Firewall

Traditional placement at network edge.

```
Internet ─── [Perimeter FW] ─── Internal Network
```

**Purpose:**
- First line of defense
- Block known bad traffic
- Allow authorized services
- NAT/PAT for internal hosts

### Internal Firewalls

Segmentation within the network.

```
                    ┌─── [FW] ─── HR Network
Internal Network ───┼─── [FW] ─── Finance Network
                    └─── [FW] ─── Development Network
```

**Purpose:**
- Limit lateral movement
- Protect sensitive segments
- Contain breaches
- Regulatory compliance

### DMZ Architecture

Isolated zone for public-facing services.

```
                         ┌─────────────────┐
Internet ─── [FW1] ─── │      DMZ        │ ─── [FW2] ─── Internal
                         │ Web, Mail, DNS  │
                         └─────────────────┘
```

**Two-firewall DMZ:**
- FW1: Internet to DMZ (allow public access to services)
- FW2: DMZ to Internal (restrict, only necessary connections)

**Compromise containment:** If DMZ server compromised, FW2 blocks internal access.

### Host-Based Firewalls

Running on individual systems.

**Examples:** Windows Firewall, iptables, pf

**Purpose:**
- Last line of defense
- Protect from internal threats
- Defense in depth
- Laptop protection (especially remote workers)

**Best practice:** Enable even on internal systems.

---

## Firewall Rule Management

Creating and maintaining effective rules.

### Rule Structure

```
[Order] [Action] [Source] [Destination] [Service] [Log]
```

**Example rules:**
```
1. ALLOW   10.1.1.0/24    192.168.1.10    TCP/443    LOG
2. ALLOW   ANY            192.168.1.20    TCP/25     LOG
3. DENY    10.2.0.0/16    ANY             ANY        LOG
4. DENY    ANY            ANY             ANY        LOG
```

### Rule Processing

**Top-down, first match:**
- Rules evaluated in order
- First matching rule applied
- Remaining rules not evaluated

**Why order matters:**
```
# Correct order:
1. DENY  10.1.1.100  ANY   ANY    # Block specific host
2. ALLOW 10.1.1.0/24 ANY   TCP/80 # Allow subnet

# Wrong order:
1. ALLOW 10.1.1.0/24 ANY   TCP/80 # Matches first!
2. DENY  10.1.1.100  ANY   ANY    # Never reached
```

### Implicit Deny

Most firewalls: if no rule matches, traffic denied.

**Best practice:** Make it explicit and log it:
```
999. DENY ANY ANY ANY LOG  # Catch-all with logging
```

Helps identify traffic that should be allowed but isn't.

### Rule Best Practices

**Least privilege:**
- Only allow what's required
- Be as specific as possible
- Avoid "any" when possible

**Documentation:**
- Every rule should have documented purpose
- Include requester, date, justification
- Set review/expiration dates

**Regular review:**
- Remove rules for decommissioned systems
- Check hit counts (unused rules)
- Audit against current requirements

**Change control:**
- All changes through change management
- Test before production
- Have rollback plan

### Common Mistakes

**Overly permissive rules:**
```
# Bad
ALLOW ANY ANY ANY  # Why have a firewall?
```

**Rules for removed systems:**
- System decommissioned, rule remains
- Creates unnecessary exposure

**No logging:**
- Can't troubleshoot
- No forensic evidence
- Missing attack indicators

**Rule sprawl:**
- Hundreds of rules, no organization
- Conflicting rules
- Impossible to audit

---

## Intrusion Detection Systems (IDS)

Monitoring for malicious activity.

### IDS Concept

**Intrusion Detection System:** Monitors network or system for malicious activity and policy violations.

**Key characteristic: PASSIVE**
- Detects and alerts
- Does NOT block traffic
- Requires human response

```
Traffic ──┬── [Switch] ─── Destination
          │
          └── [IDS] ─── Alert!
              (copy of traffic via SPAN/TAP)
```

### IDS Types

**Network-based IDS (NIDS)**

Monitors network traffic for suspicious patterns.

**Deployment:**
- Receives copy of network traffic
- SPAN port (switch port mirroring)
- Network TAP (passive device)

**What it monitors:**
- All network traffic passing sensor
- Protocol anomalies
- Known attack signatures
- Suspicious patterns

**Example products:** Snort, Suricata, Zeek

---

**Host-based IDS (HIDS)**

Monitors individual host for suspicious activity.

**What it monitors:**
- File system changes
- Registry modifications
- Log files
- Running processes
- System calls

**Advantages:**
- Sees what reaches the host
- Works with encrypted traffic (after decryption)
- Monitors local activity

**Example products:** OSSEC, Tripwire, Wazuh

---

### Detection Methods

**Signature-based (Pattern Matching)**

Compares activity against known attack patterns.

**How it works:**
1. Maintain database of attack signatures
2. Compare traffic/activity to signatures
3. Match = alert

**Example signature (Snort):**
```
alert tcp any any -> any 80 (msg:"SQL Injection Attempt"; 
content:"' OR '1'='1"; sid:10001;)
```

**Pros:**
- Low false positives (known patterns)
- Fast detection of known threats
- Clear identification of attack type

**Cons:**
- Can't detect unknown attacks (zero-day)
- Requires constant signature updates
- Evasion through slight modifications

---

**Anomaly-based (Behavioral)**

Establishes baseline of "normal," alerts on deviations.

**How it works:**
1. Learn normal behavior patterns
2. Build baseline profile
3. Alert when activity deviates significantly

**What it baselines:**
- Network traffic patterns
- Protocol usage
- Data volumes
- User behavior
- Time-based patterns

**Pros:**
- Can detect unknown attacks
- Detects zero-day exploits
- Catches insider threats

**Cons:**
- Higher false positives
- Requires training period
- "Normal" changes over time
- Attacks during training become "normal"

---

**Heuristic/Behavioral Analysis**

Uses rules and algorithms to identify suspicious behavior.

**How it works:**
- Analyzes behavior patterns
- Applies rules about suspicious activity
- Considers multiple factors together

**Example:**
- Single failed login = normal
- 100 failed logins from different IPs in 1 minute = attack

**Pros:**
- Balances signature and anomaly approaches
- Can detect variations of known attacks
- More context-aware

---

### Detection Method Comparison

| Method | Known Threats | Unknown Threats | False Positives |
|--------|---------------|-----------------|-----------------|
| Signature | Excellent | Poor | Low |
| Anomaly | Good | Good | High |
| Heuristic | Good | Moderate | Moderate |

**Best practice:** Combine methods for comprehensive detection.

---

## Intrusion Prevention Systems (IPS)

Active blocking of malicious activity.

### IPS Concept

**Intrusion Prevention System:** Monitors AND blocks malicious traffic.

**Key characteristic: ACTIVE/INLINE**
- Sits in traffic path
- Can block traffic in real-time
- Takes automated action

```
Traffic ─── [IPS] ─── Destination
              │
              └── Block/Allow decision
```

### IDS vs. IPS

| Aspect | IDS | IPS |
|--------|-----|-----|
| Deployment | Out of band (passive) | Inline (active) |
| Action | Detect and alert | Detect and block |
| Response | Requires human | Automated |
| Risk | Missed detections | False positives block legitimate traffic |
| Latency | None | Adds latency |
| Failure mode | Fails open (traffic continues) | Must consider (fail open vs. closed) |

### IPS Failure Modes

**Fail open:**
- If IPS fails, traffic passes through
- Availability prioritized
- Security gap during failure

**Fail closed:**
- If IPS fails, traffic blocked
- Security prioritized
- Availability impact during failure

**Choice depends on:**
- Criticality of traffic
- Risk tolerance
- Alternative security controls

### IPS Actions

**Block:** Drop malicious traffic

**Reset:** Send TCP reset to terminate connection

**Alert:** Notify security team (like IDS)

**Log:** Record for analysis

**Shun:** Block source IP for period of time

### IPS Deployment Modes

**Inline:**
```
Traffic ─── [IPS] ─── Destination
```
- All traffic passes through
- Can block immediately
- Single point of failure concern

**Passive with active response:**
```
Traffic ──┬── [Switch] ─── Destination
          │
          └── [IPS] ─── (Send RST to kill connection)
```
- Monitors copy of traffic
- Sends reset packets to terminate
- Can't block first packet

---

## False Positives and False Negatives

The challenge of detection accuracy.

### Definitions

**False Positive:** Alert when there's no actual attack
- Legitimate traffic flagged as malicious
- Creates alert fatigue
- Wastes analyst time
- Can block legitimate business (IPS)

**False Negative:** No alert when there IS an attack
- Attack goes undetected
- Most dangerous outcome
- Often discovered after damage done

### The Accuracy Trade-off

```
                    Sensitivity
                    (Catch attacks)
                         ↑
                         │
    More False Positives │ Ideal (unachievable)
             ●           │          ●
                         │
    ─────────────────────┼─────────────────────→ Specificity
                         │                        (Reduce false alarms)
                         │
    Worst                │ More False Negatives
             ●           │          ●
                         │
```

**Increasing sensitivity:** Catches more attacks, but more false positives
**Increasing specificity:** Fewer false positives, but may miss attacks

### Managing False Positives

**Tuning:**
- Adjust detection thresholds
- Disable noisy signatures
- Add exceptions for known-good traffic

**Context:**
- Correlate with asset inventory
- Is this Windows attack against Linux server?
- Is target even vulnerable?

**Threat intelligence:**
- Known bad IPs/domains
- Prioritize alerts from known threats

**Automation:**
- Auto-close obvious false positives
- Enrich alerts with context
- SOAR playbooks

### Alert Fatigue

When analysts receive too many alerts:
- Start ignoring alerts
- Real attacks missed
- Burnout and turnover

**Target breach:** Alerts generated, not investigated.

**Prevention:**
- Tune aggressively
- Prioritize effectively
- Automate triage
- Appropriate staffing

---

## Unified Threat Management (UTM)

All-in-one security appliance.

### What is UTM?

**Unified Threat Management:** Single device combining multiple security functions.

**Typical components:**
- Firewall (stateful)
- VPN gateway
- Intrusion prevention (IPS)
- Antivirus/anti-malware
- Content filtering
- Spam filtering
- DLP (Data Loss Prevention)

### UTM vs. NGFW

| Aspect | UTM | NGFW |
|--------|-----|------|
| Focus | SMB, all-in-one | Enterprise, advanced threats |
| Features | Broad but less deep | Fewer but more advanced |
| Performance | May struggle under load | Higher throughput |
| Management | Simpler | More complex |
| Cost | Lower | Higher |

**UTM:** Jack of all trades, master of none
**NGFW:** Focused on advanced firewall + IPS

### UTM Pros and Cons

**Advantages:**
- Single device to manage
- Lower cost than separate devices
- Simplified deployment
- Good for small/medium business

**Disadvantages:**
- Single point of failure
- Performance limitations
- May lack advanced features
- All features from one vendor

---

## Deployment Architecture

Putting it all together.

### Defense in Depth Model

```
                                INTERNET
                                    │
                              ┌─────▼─────┐
                              │  Router/  │
                              │   ACLs    │ ← First filter
                              └─────┬─────┘
                                    │
                              ┌─────▼─────┐
                              │Perimeter  │
                              │   NGFW    │ ← Primary firewall + IPS
                              └─────┬─────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
  ┌─────▼─────┐               ┌─────▼─────┐               ┌─────▼─────┐
  │    DMZ    │               │   IDS     │               │  Internal │
  │   (WAF)   │               │  Sensor   │               │  Firewall │
  └─────┬─────┘               └───────────┘               └─────┬─────┘
        │                                                       │
  ┌─────▼─────┐                                          ┌──────▼──────┐
  │   Web     │                                          │   Internal  │
  │  Servers  │                                          │   Network   │
  └───────────┘                                          │  (Segments) │
                                                         └─────┬───────┘
                                                               │
                                                    ┌──────────┼──────────┐
                                                    │          │          │
                                              ┌─────▼─┐  ┌─────▼─┐  ┌─────▼─┐
                                              │Users  │  │Servers│  │ HIDS  │
                                              │ (EPP) │  │(HIDS) │  │Sensors│
                                              └───────┘  └───────┘  └───────┘
```

### Sensor Placement

**IDS/IPS sensor locations:**

**Outside firewall:**
- Sees all attack attempts
- High noise (lots of attacks)
- Good for threat intelligence

**Inside firewall:**
- Sees what got through firewall
- Lower noise
- Detects what matters

**On critical segments:**
- Monitors high-value assets
- Detects lateral movement
- Compliance requirement

**Best practice:** Sensors at multiple points for visibility.

### Visibility Requirements

**You can't detect what you can't see.**

**Network visibility:**
- Strategic TAP/SPAN placement
- East-west traffic (not just perimeter)
- Encrypted traffic handling

**Endpoint visibility:**
- Host-based agents
- EDR on critical systems
- Log collection

**Cloud visibility:**
- Cloud-native security tools
- VPC flow logs
- Cloud trail/audit logs

---

## Key Exam Tips

🎯 **Firewall types:** Packet filter (stateless, headers only), Stateful (connection tracking), NGFW (application awareness, integrated IPS), WAF (web application specific).

🎯 **IDS vs. IPS:** IDS is passive (detect/alert), IPS is inline (detect/block). IDS fails open, IPS must decide (fail open vs. closed).

🎯 **Detection methods:** Signature (known attacks, low false positives), Anomaly (unknown attacks, high false positives), Heuristic (balanced approach).

🎯 **False positive:** Alert when no attack. **False negative:** No alert when attack occurs. False negatives are more dangerous.

🎯 **NIDS:** Network-based, monitors traffic via SPAN/TAP. **HIDS:** Host-based, monitors file changes, logs, processes.

🎯 **UTM:** All-in-one device (firewall + IPS + AV + VPN + filtering). Good for SMB, may lack enterprise features.

🎯 **Implicit deny:** Most firewalls deny traffic if no rule matches. Make explicit for logging.

🎯 **Rule order:** Top-down, first match wins. Specific rules before general rules.

🎯 **Defense in depth:** Multiple security layers. If one fails, others protect.

---

## Key Takeaways

- [ ] Packet filtering firewalls examine headers only and are stateless
- [ ] Stateful firewalls track connections and automatically allow return traffic
- [ ] NGFWs add application awareness, user identity, and integrated IPS to stateful inspection
- [ ] WAFs specifically protect web applications from OWASP Top 10 attacks
- [ ] IDS monitors passively and alerts; IPS sits inline and can block
- [ ] Signature detection catches known attacks with low false positives
- [ ] Anomaly detection can catch unknown attacks but has higher false positives
- [ ] False negatives (missed attacks) are more dangerous than false positives
- [ ] NIDS monitors network traffic; HIDS monitors host activity
- [ ] UTM combines multiple security functions in one device
- [ ] Firewall rules process top-down with first match winning
- [ ] Defense in depth requires multiple layers of security controls
- [ ] Alert fatigue from too many false positives leads to missed real attacks

---

## Check Your Understanding

**1. A company deploys a firewall with the following rules in order:
1. Allow TCP 443 from Any to 192.168.1.10
2. Deny All from 10.0.0.0/8 to Any
3. Allow TCP 80 from 10.0.0.0/8 to 192.168.1.10

What happens when host 10.1.1.5 tries to access 192.168.1.10 on port 80?**

<details>
<summary>Show Answer</summary>
<strong>Traffic is DENIED.</strong>

<strong>Rule processing (top-down, first match):</strong>

1. Rule 1: Allow TCP 443 from Any to 192.168.1.10
   - Source: 10.1.1.5 ✓ (matches Any)
   - Destination: 192.168.1.10 ✓
   - Port: 80 ✗ (rule is for 443)
   - No match, continue

2. Rule 2: Deny All from 10.0.0.0/8 to Any
   - Source: 10.1.1.5 ✓ (in 10.0.0.0/8)
   - Destination: 192.168.1.10 ✓ (matches Any)
   - Protocol: Any ✓
   - **MATCH → DENIED**

3. Rule 3 never evaluated

<strong>Problem:</strong> Deny rule is too broad and placed before specific allow rule.

<strong>Fix:</strong> Reorder rules - put specific allows before general denies:
```
1. Allow TCP 443 from Any to 192.168.1.10
2. Allow TCP 80 from 10.0.0.0/8 to 192.168.1.10
3. Deny All from 10.0.0.0/8 to Any
```
</details>

**2. An organization is deciding between deploying IDS or IPS at their network perimeter. What are the key considerations for each choice?**

<details>
<summary>Show Answer</summary>
<strong>IDS (Intrusion Detection System):</strong>

**Deployment:**
- Passive, out of band
- Receives copy of traffic (SPAN/TAP)
- Not in traffic path

**Pros:**
- No latency added
- No risk of blocking legitimate traffic
- Fails open (traffic continues)
- Good for learning environment behavior

**Cons:**
- Cannot block attacks automatically
- Requires human response
- Attack completes before response
- Response time is key

**Best for:**
- Initial deployment to tune detection
- Environments where false positives unacceptable
- When staff available to respond

---

<strong>IPS (Intrusion Prevention System):</strong>

**Deployment:**
- Active, inline
- Traffic passes through device
- Makes allow/block decisions

**Pros:**
- Blocks attacks in real-time
- Automated response
- No human intervention needed
- Stops attack before damage

**Cons:**
- Adds latency
- False positives block legitimate traffic
- Single point of failure (without HA)
- Must choose fail mode (open vs. closed)

**Best for:**
- Mature security operations
- Well-tuned signatures
- Critical perimeter protection
- When automated response required

---

<strong>Common approach:</strong>
1. Deploy as IDS initially
2. Tune to reduce false positives
3. Convert to IPS mode once confident
4. Continue tuning
</details>

**3. Security analysts are overwhelmed with 5,000 alerts per day and have started ignoring most of them. Explain this problem and how to address it.**

<details>
<summary>Show Answer</summary>
<strong>Problem: Alert Fatigue</strong>

**What's happening:**
- Too many alerts to investigate
- Most are false positives
- Analysts can't keep up
- Start ignoring or closing without review
- Real attacks missed in the noise

**Why it's dangerous:**
- Target breach: alerts generated, not investigated
- Attackers can hide in noise
- Security theater (tools deployed but ineffective)

---

<strong>Solutions:</strong>

**1. Aggressive tuning:**
- Disable noisy signatures with low value
- Tune thresholds based on environment
- Add exceptions for known-good traffic
- Focus on high-fidelity alerts

**2. Contextualization:**
- Correlate with asset inventory
- Is vulnerable system targeted?
- Is attack relevant to environment?
- Suppress impossible attacks (Windows attack on Linux)

**3. Prioritization:**
- Not all alerts equal
- Critical asset targeted > test system
- Known threat actor > generic attack
- Use threat intelligence

**4. Automation:**
- SOAR playbooks for common scenarios
- Auto-close obvious false positives
- Auto-enrich with context
- Escalate only high-priority

**5. Tiered response:**
- Tier 1: Handle routine alerts
- Tier 2: Handle complex/escalated
- Tier 3: Hunt and investigate

**Target:**
- Reduce to actionable alerts
- Every alert gets proper attention
- Quality over quantity
</details>

**4. Explain the differences between signature-based and anomaly-based detection. When would you use each?**

<details>
<summary>Show Answer</summary>
<strong>Signature-Based Detection:</strong>

**How it works:**
- Database of known attack patterns
- Compare traffic/activity to signatures
- Match = alert

**Example:**
```
if payload contains "' OR '1'='1" then alert "SQL Injection"
```

**Strengths:**
- Low false positives (known patterns)
- Fast detection
- Clear attack identification
- Easy to understand alerts

**Weaknesses:**
- Cannot detect unknown attacks
- Zero-days missed
- Requires constant updates
- Easily evaded with slight changes

**Best for:**
- Detecting known threats
- Compliance requirements
- Clear, actionable alerts
- Primary detection method

---

<strong>Anomaly-Based Detection:</strong>

**How it works:**
- Learn normal behavior baseline
- Alert when behavior deviates
- Statistical analysis

**Example:**
```
Normal: 100 DNS queries/minute
Current: 10,000 DNS queries/minute
Alert: DNS anomaly detected
```

**Strengths:**
- Can detect unknown attacks
- Catches zero-days
- Detects insider threats
- No signature updates needed

**Weaknesses:**
- High false positives
- Requires training period
- Baseline can include attacks
- "Normal" changes over time

**Best for:**
- Detecting unknown threats
- Insider threat detection
- Complement to signatures
- Behavioral analytics

---

<strong>Recommendation:</strong>
Use both together:
- Signatures for known threats (primary)
- Anomaly for unknown/insider (secondary)
- Correlate for confidence
</details>

**5. A NGFW is deployed at the perimeter. The security team wants to inspect encrypted HTTPS traffic. What capability enables this, and what are the considerations?**

<details>
<summary>Show Answer</summary>
<strong>Capability: TLS/SSL Inspection (SSL Decryption)</strong>

**How it works:**
```
Client → [NGFW] → Server
         1. NGFW terminates TLS from client
         2. Inspects decrypted traffic
         3. Creates new TLS connection to server
```

**Technical implementation:**
- NGFW acts as proxy
- Presents its own certificate to client
- Organization's CA must be trusted by clients
- Deploy CA certificate to all endpoints

---

<strong>Considerations:</strong>

**Privacy:**
- Employees know traffic inspected?
- Personal banking, healthcare visible
- Legal requirements vary by jurisdiction
- May need policy/consent

**Compliance:**
- Some regulations prohibit interception
- Healthcare (HIPAA) considerations
- Banking/financial regulations
- PCI DSS requirements

**Technical:**
- Certificate deployment to all clients
- Certificate pinning may break apps
- Performance impact
- Exceptions needed for some sites

**What to exclude:**
- Banking sites
- Healthcare portals
- Government sites
- Sites with certificate pinning

---

<strong>Best practices:</strong>
- Clear policy and employee notification
- Legal review
- Exclude sensitive categories
- Log access for audit
- Protect decryption keys
- Performance planning
</details>

**6. Compare UTM and NGFW. When would you choose each?**

<details>
<summary>Show Answer</summary>
<strong>UTM (Unified Threat Management):</strong>

**Features:**
- Firewall
- VPN
- IPS
- Antivirus
- URL filtering
- Spam filtering
- Basic DLP

**Characteristics:**
- All-in-one device
- Broad but shallow features
- Single vendor, single console
- Lower cost

**Best for:**
- Small/medium business
- Limited IT staff
- Budget constraints
- Simpler environments
- Branch offices

---

<strong>NGFW (Next-Generation Firewall):</strong>

**Features:**
- Stateful firewall
- Deep packet inspection
- Application awareness
- User identity integration
- Integrated IPS
- Threat intelligence
- Advanced malware protection

**Characteristics:**
- Focused on advanced firewall + IPS
- Deeper features in focus areas
- Higher performance
- More complex management
- Higher cost

**Best for:**
- Enterprise environments
- High-throughput requirements
- Advanced threat protection
- Complex policies
- Dedicated security team

---

<strong>Decision factors:</strong>

| Factor | UTM | NGFW |
|--------|-----|------|
| Organization size | SMB | Enterprise |
| Budget | Limited | Higher |
| IT staff | Limited | Dedicated security |
| Throughput needs | Moderate | High |
| Threat sophistication | Standard | Advanced |
| Management preference | Simple | Granular control |

**Not mutually exclusive:**
- Enterprise: NGFW at perimeter
- Branch offices: UTM for convenience
</details>

**7. An organization experiences a data breach. Forensic analysis shows the attack was detected by the IDS but alerts were classified as false positives. What went wrong?**

<details>
<summary>Show Answer</summary>
<strong>Analysis of failure:</strong>

**What happened:**
- IDS detected malicious activity
- Analysts classified as false positive
- Attack continued unimpeded
- Breach discovered later through other means

**Possible causes:**

**1. Alert fatigue:**
- Too many alerts daily
- Analysts overwhelmed
- Quick dismissal without investigation
- No capacity for thorough review

**2. Insufficient context:**
- Alert lacked asset criticality info
- No correlation with other indicators
- Missing threat intelligence
- No business context

**3. Inadequate training:**
- Analysts unfamiliar with attack pattern
- Misunderstood alert meaning
- Couldn't recognize significance

**4. Poor processes:**
- No escalation for uncertain alerts
- No second review for certain categories
- No analyst quality checks
- No metrics on false positive accuracy

**5. Over-tuning:**
- Aggressive suppression of "noise"
- Real attacks tuned out
- Threshold too high

---

<strong>Corrective actions:</strong>

**Immediate:**
- Review tuning decisions
- Audit suppressed alert categories
- Check for similar dismissed alerts

**Process improvements:**
- Tiered review (uncertain alerts escalated)
- Context enrichment (asset criticality)
- Threat intelligence integration
- Random quality reviews of classifications

**Technical:**
- SOAR for automated enrichment
- Correlation with multiple data sources
- Reduce alert volume through better tuning
- Prioritization based on asset value

**Training:**
- Regular analyst training
- Lessons learned from incidents
- Attack pattern recognition

**Metrics:**
- Track false positive accuracy
- Review dismissed alerts that were real
- Analyst performance metrics
</details>

**8. Design a firewall architecture for a company with: public web server, internal users, management network, and database server with sensitive data. Show firewall placement and describe key rules.**

<details>
<summary>Show Answer</summary>
<strong>Architecture:</strong>

```
                        INTERNET
                            │
                      ┌─────▼─────┐
                      │   FW1     │ (Perimeter NGFW)
                      │ Perimeter │
                      └─────┬─────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
  ┌─────▼─────┐       ┌─────▼─────┐       ┌─────▼─────┐
  │    DMZ    │       │   User    │       │   Mgmt    │
  │   Zone    │       │   Zone    │       │   Zone    │
  │  ┌─────┐  │       │           │       │           │
  │  │ WAF │  │       │           │       │           │
  │  └──┬──┘  │       │           │       │           │
  │  ┌──▼──┐  │       │           │       │           │
  │  │ Web │  │       │           │       │           │
  │  └─────┘  │       └───────────┘       └───────────┘
  └─────┬─────┘               │                   │
        │                     │                   │
        └─────────────────────┼───────────────────┘
                              │
                        ┌─────▼─────┐
                        │   FW2     │ (Internal Firewall)
                        │  Internal │
                        └─────┬─────┘
                              │
                        ┌─────▼─────┐
                        │ Restricted│
                        │   Zone    │
                        │  ┌─────┐  │
                        │  │ DB  │  │
                        │  └─────┘  │
                        └───────────┘
```

---

<strong>FW1 (Perimeter) Rules:</strong>

```
# Internet → DMZ
1. ALLOW TCP 443 Any → WAF
2. ALLOW TCP 80 Any → WAF (redirect to HTTPS)
3. DENY Any → DMZ LOG

# DMZ → Internal (via FW1 for routing)
4. ALLOW TCP 443 Web → DB (through FW2)

# User → Internet
5. ALLOW TCP 80,443 Users → Any
6. ALLOW UDP 53 Users → DNS_Servers

# Management
7. ALLOW TCP 22 Mgmt → DMZ Servers
8. ALLOW TCP 22 Mgmt → User Zone

# Default
999. DENY Any Any LOG
```

---

<strong>FW2 (Internal) Rules:</strong>

```
# Web server → Database
1. ALLOW TCP 3306 Web_Server → DB_Server

# Management → Database
2. ALLOW TCP 22 Mgmt_Zone → DB_Server
3. ALLOW TCP 3306 Mgmt_Zone → DB_Server

# User zone - NO direct DB access
4. DENY Any User_Zone → DB_Server LOG

# Default
999. DENY Any Any LOG
```

---

<strong>Key design principles:</strong>

1. **DMZ isolation:** Web server in DMZ, not internal
2. **WAF protection:** Application-layer filtering before web server
3. **Database restricted:** Behind second firewall, limited access
4. **Least privilege:** Only required ports allowed
5. **Management separation:** Dedicated zone for admin access
6. **Logging:** All denies logged for visibility
7. **Defense in depth:** Multiple firewall layers
</details>

**9. What's the difference between NIDS and HIDS? When would you deploy each?**

<details>
<summary>Show Answer</summary>
<strong>NIDS (Network-based IDS):</strong>

**What it monitors:**
- Network traffic
- Packet headers and payloads
- Protocol behavior
- Network anomalies

**Deployment:**
- SPAN port on switch
- Network TAP
- Strategic network points

**Pros:**
- Monitors many hosts with one sensor
- Sees lateral movement
- Protocol-level analysis
- Doesn't require endpoint agents

**Cons:**
- Blind to encrypted traffic (without decryption)
- Can't see endpoint activity
- May miss host-specific attacks
- Positioning dependent

**Best for:**
- Perimeter monitoring
- Network segment monitoring
- Lateral movement detection
- Environments where endpoint agents not feasible

---

<strong>HIDS (Host-based IDS):</strong>

**What it monitors:**
- File system changes
- Registry modifications (Windows)
- Log files
- Running processes
- System calls
- User activity

**Deployment:**
- Agent installed on each host
- Reports to central management

**Pros:**
- Sees decrypted traffic
- Monitors local activity
- File integrity monitoring
- Works with encrypted networks

**Cons:**
- Agent on each system
- Performance overhead
- Management overhead
- Can be disabled by attacker with admin access

**Best for:**
- Critical servers
- Compliance requirements (file integrity)
- Encrypted environments
- Insider threat detection

---

<strong>Deployment strategy:</strong>

| Location | Type | Reason |
|----------|------|--------|
| Perimeter | NIDS | See all external attacks |
| Internal segments | NIDS | Detect lateral movement |
| Critical servers | HIDS | Deep visibility, file integrity |
| Databases | HIDS | Sensitive data protection |
| Workstations | EDR/HIDS | Endpoint protection |

**Best practice:** Deploy both for comprehensive coverage.
</details>

**10. Explain implicit deny and why it's important for firewall security.**

<details>
<summary>Show Answer</summary>
<strong>What is implicit deny?</strong>

Default behavior where traffic not explicitly permitted is denied.

**How it works:**
```
Rule 1: Allow HTTP to Web Server
Rule 2: Allow HTTPS to Web Server
Rule 3: Allow SSH from Admin Network
[Implicit Deny] ← All other traffic blocked
```

If traffic doesn't match any rule, it's dropped.

---

<strong>Why it's important:</strong>

**1. Least privilege:**
- Only explicitly allowed traffic passes
- Everything else blocked by default
- Reduces attack surface

**2. Defense against unknown:**
- New attack vectors blocked by default
- Don't need rule for every bad thing
- Fail-secure approach

**3. Prevents mistakes:**
- Forgetting to add deny rule
- Traffic not blocked by oversight
- Safety net for configuration errors

**4. Clean rule sets:**
- Only need allow rules
- Don't need to enumerate what to block
- Simpler management

---

<strong>Best practice - make it explicit:</strong>

```
Rule 1: Allow HTTP to Web Server
Rule 2: Allow HTTPS to Web Server
Rule 3: Allow SSH from Admin Network
Rule 999: DENY Any Any LOG  ← Explicit, with logging
```

**Why explicit?**
- Logging captures what's blocked
- Troubleshooting visibility
- Confirms traffic reaching firewall
- Audit trail

---

<strong>Compare to allow-all default:</strong>

```
# Dangerous implicit allow (some old systems)
Rule 1: Deny Telnet
Rule 2: Deny FTP
[Implicit Allow] ← Everything else passes!
```

Must enumerate every bad thing to block. Miss something = vulnerability.

**Implicit deny** is the secure default. Modern firewalls use it by design.
</details>

---

## Next Lesson Preview

In **Lesson 18: Wireless Security Architecture**, we'll explore securing wireless networks. You'll learn about wireless encryption protocols (WEP, WPA, WPA2, WPA3), enterprise authentication with 802.1X and EAP, wireless attacks and countermeasures, and best practices for secure wireless deployment.

---

✅ **Lesson 17 Complete**

**Progress:** 17 of 30 lessons complete (56.7%)

---

*Next up: Lesson 18 - Wireless Security Architecture*