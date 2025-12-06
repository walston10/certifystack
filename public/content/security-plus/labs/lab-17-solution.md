# Lab 17: Firewalls and Intrusion Prevention - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Firewalls and IPS are core security infrastructure components.

---

## Section 1: Concept Check - Answers

**1. Stateless vs Stateful firewall:**

**Answer:**

| Aspect | Stateless | Stateful |
|--------|-----------|----------|
| **Packet handling** | Each packet evaluated independently | Tracks connection state |
| **Context** | None—checks ACL only | Knows if packet is part of established connection |
| **Return traffic** | Must explicitly allow | Automatically allowed for established connections |
| **Performance** | Faster (less processing) | Slightly slower |
| **Security** | Lower (can't detect out-of-state packets) | Higher (validates packet state) |

---

**2. IDS vs IPS:**

**Answer:**

| Aspect | IDS | IPS |
|--------|-----|-----|
| **Action** | Detects and alerts | Detects, alerts, AND blocks |
| **Position** | Passive (copy of traffic) | Inline (traffic passes through) |
| **Latency** | None | Some |
| **False positive impact** | Alert fatigue | Blocks legitimate traffic |

**Use IDS when:** You need visibility without risk of blocking legitimate traffic
**Use IPS when:** You need active prevention and can tune to minimize false positives

---

**3. Next-Generation Firewall (NGFW):**

**Answer:**

**NGFW** combines traditional firewall with advanced features.

**Additional capabilities:**
- Application awareness (identify apps regardless of port)
- User identity integration (rules by user, not just IP)
- Deep packet inspection
- Integrated IPS
- SSL/TLS inspection
- Threat intelligence feeds
- URL filtering
- Sandboxing

---

**4. Signature-based vs Anomaly-based detection:**

**Answer:**

| Aspect | Signature-Based | Anomaly-Based |
|--------|-----------------|---------------|
| **How it works** | Matches known attack patterns | Learns baseline, detects deviations |
| **Detects** | Known threats | Unknown threats (zero-day potential) |
| **False positives** | Lower | Higher |
| **Requires** | Updated signatures | Training period |
| **Weakness** | Can't detect new attacks | Normal variations trigger alerts |

---

**5. Web Application Firewall (WAF):**

**Answer:**

A **WAF** protects web applications by filtering HTTP/HTTPS traffic at **Layer 7** (Application layer).

**Protects against:** SQL injection, XSS, CSRF, file inclusion, OWASP Top 10 vulnerabilities.

---

## Section 2: Activity Solutions

### Activity A: Firewall Types - Answers

| Type | Layer | How It Works | Pros | Cons |
|------|-------|--------------|------|------|
| Packet Filtering | 3-4 | Checks IP/port against ACL | Fast, simple | No state, easily bypassed |
| Stateful | 3-4 | Tracks connection state | Secure, handles return traffic | More processing |
| Application/Proxy | 7 | Terminates connections, inspects content | Deep inspection | Slow, complex |
| NGFW | 3-7 | All above + app awareness, IPS | Comprehensive | Expensive, complex |
| WAF | 7 | HTTP-specific inspection | Web attack protection | Web only |

**Capability matching:**

| Capability | Type |
|------------|------|
| Examines packets independently | Packet Filtering |
| Tracks TCP states | Stateful |
| Deep packet inspection | NGFW/Proxy |
| Understands HTTP | WAF/NGFW |
| Identifies apps by behavior | NGFW |
| Blocks SQL injection | WAF |
| Uses IP/port ACLs | Packet Filtering |
| Integrates IPS | NGFW |

---

### Activity B: Firewall Rules - Answers

**Rule analysis:**

| Traffic | Rule | Result |
|---------|------|--------|
| 8.8.8.8 → 10.0.0.5:443 | Rule 1 | ALLOW |
| 192.168.1.50 → 10.0.0.5:22 | Rule 3 | ALLOW |
| 192.168.1.50 → 10.0.0.10:80 | Rule 2 | DENY |
| 172.16.0.1 → 10.0.0.5:22 | Rule 2 | DENY |
| 8.8.8.8 → 10.0.0.5:80 UDP | Rule 4 | DENY |

**Rule problems:**

| Rule Set | Problem |
|----------|---------|
| ALLOW any any | No security—allows everything |
| DENY first, ALLOW second | Specific rules never reached |
| No implicit deny | May allow unintended traffic |

---

### Activity C: Firewall Rule Design - Answers

**Web Server in DMZ:**

| # | Source | Dest | Port | Proto | Action | Description |
|---|--------|------|------|-------|--------|-------------|
| 1 | Any | WebServer | 80 | TCP | ALLOW | HTTP |
| 2 | Any | WebServer | 443 | TCP | ALLOW | HTTPS |
| 3 | 10.1.1.0/24 | WebServer | 22 | TCP | ALLOW | Admin SSH |
| 4 | WebServer | 10.2.2.10 | 53 | UDP | ALLOW | DNS query |
| 5 | Any | Any | Any | Any | DENY | Default deny |

**Database Server:**

| # | Source | Dest | Port | Proto | Action | Description |
|---|--------|------|------|-------|--------|-------------|
| 1 | 10.3.3.0/24 | DBServer | 3306 | TCP | ALLOW | App servers |
| 2 | 10.1.1.5 | DBServer | 22 | TCP | ALLOW | Jump server SSH |
| 3 | DBServer | 10.2.2.11 | 123 | UDP | ALLOW | NTP |
| 4 | DBServer | 0.0.0.0/0 | Any | Any | DENY | Block internet |
| 5 | Any | Any | Any | Any | DENY | Default deny |

---

### Activity D: Stateful vs Stateless - Answers

**Stateless problem:** Must explicitly allow return traffic (outbound SYN-ACK, HTTP responses), creating complex rules and security gaps.

**Stateful behavior:**

| Packet | Action |
|--------|--------|
| SYN inbound | Allowed, creates state entry |
| SYN-ACK outbound | Allowed (matches state) |
| ACK inbound | Allowed (established) |
| HTTP response | Allowed (established) |
| Close | State entry removed |

**Stateful advantages:**

| Advantage | Explanation |
|-----------|-------------|
| Tracks connections | Knows what's legitimate return traffic |
| Auto-allows returns | Don't need explicit outbound rules |
| Detects anomalies | Out-of-state packets blocked |
| Simpler rules | Only need to allow initial connection |

---

### Activity E: IDS vs IPS - Answers

| Aspect | IDS | IPS |
|--------|-----|-----|
| Position | Out-of-band (tap/span) | Inline |
| Traffic flow | Copy of traffic | All traffic through it |
| Response | Alert only | Block + alert |
| Latency | None | Some |
| Failure mode | Fails open (alerts stop) | Fails open or closed |
| False positive impact | Wasted investigation | Blocks legitimate traffic |

**Deployment modes:**

| Mode | Description | Use |
|------|-------------|-----|
| Inline | Traffic passes through | IPS |
| Tap/Span | Mirror of traffic | IDS |
| Passive | Listen only | IDS |

**Detection methods:**

| Method | How | Pros | Cons |
|--------|-----|------|------|
| Signature | Match known patterns | Accurate for known threats | Misses zero-day |
| Anomaly | Detect deviation from baseline | Can find new threats | High false positives |
| Heuristic | Behavior analysis | Catches variants | False positives |

---

### Activity F: IDS Rule Analysis - Answers

**Snort rule breakdown:**

| Component | Value | Meaning |
|-----------|-------|---------|
| Action | alert | Generate alert (don't block) |
| Protocol | tcp | TCP traffic only |
| Source | any any | Any IP, any port |
| Direction | -> | One direction |
| Destination | 192.168.1.0/24 80 | Internal network, port 80 |
| msg | | Alert message text |
| content | | Pattern to match |
| nocase | | Case insensitive |
| sid | | Signature ID (unique) |

**Traffic matched:** Any TCP traffic to internal network port 80 containing "' OR '1'='1" (SQL injection attempt).

**SSH brute force rule (conceptual):**

| Component | Value |
|-----------|-------|
| Action | alert |
| Protocol | tcp |
| Dest port | 22 |
| Detection | threshold:count 5, seconds 60 |

---

### Activity G: NGFW Features - Answers

| Feature | Description | Benefit |
|---------|-------------|---------|
| Application awareness | Identify apps by behavior/signature | Control apps regardless of port |
| User identity | Integrate with AD/LDAP | Rules by user, not just IP |
| Deep packet inspection | Examine full packet content | Detect threats in payloads |
| Integrated IPS | Built-in intrusion prevention | Single device, better correlation |
| SSL inspection | Decrypt and inspect HTTPS | Visibility into encrypted traffic |
| Threat intelligence | Real-time threat feeds | Block known bad actors |
| Sandboxing | Execute suspicious files safely | Detect zero-day malware |
| URL filtering | Categorize and filter websites | Block malicious/inappropriate sites |

**Application awareness:**

| Traffic | Traditional | NGFW |
|---------|-------------|------|
| HTTPS banking | Allow (443) | Allow |
| HTTPS social media | Allow (443) | Block (if policy) |
| BitTorrent over 443 | Allow (443) | Block (identified as BitTorrent) |
| VPN over 443 | Allow (443) | Block (if unauthorized) |

**How NGFW differentiates:** Deep packet inspection, application signatures, behavior analysis—not just port numbers.

**Why identity-based is better:** Users move between IPs (DHCP, mobile). Identity follows the user regardless of location.

---

### Activity H: WAF - Answers

| Aspect | Network Firewall | WAF |
|--------|------------------|-----|
| Layer | 3-4 | 7 |
| Focus | Network traffic | Web applications |
| Understands | IP, ports, protocols | HTTP, HTML, JavaScript |
| Protects against | Network attacks | OWASP Top 10 |
| Deployment | Network perimeter | In front of web servers |

**WAF protection:**

| Attack | How WAF Protects |
|--------|------------------|
| SQL injection | Pattern matching, input validation |
| XSS | Block script tags, encode output |
| CSRF | Token validation |
| File inclusion | Block path traversal patterns |
| App DDoS | Rate limiting, bot detection |

**WAF rule meaning:** Block any request where arguments contain `<script>` (XSS attempt).

---

### Activity I: Firewall Placement - Answers

| Position | Firewall Type | Purpose |
|----------|---------------|---------|
| Internet edge | NGFW/Perimeter | First line of defense |
| Before internal | Internal FW | Protect internal from DMZ |
| Before database | Host or micro FW | Protect sensitive data |
| Between segments | Internal FW | Segment isolation |

---

### Activity J: False Positives - Answers

| Type | Definition | Impact |
|------|------------|--------|
| False positive | Alert on legitimate traffic | Wasted resources, alert fatigue |
| False negative | Missed actual threat | Security breach |

**False negatives are worse:** You don't know about the threat until it's too late.

**Tuning strategies:**

| Strategy | Implementation |
|----------|----------------|
| Whitelist | Exclude known good sources/signatures |
| Thresholds | Require multiple occurrences |
| Custom signatures | Write specific rules for environment |
| Suppress | Stop alerting on known issues |
| Correlate | Combine with other data sources |

---

### Activity K: UTM - Answers

**UTM vs NGFW vs Separate:**

| Approach | Pros | Cons |
|----------|------|------|
| UTM | All-in-one, simple, cost-effective | Performance limits, single vendor |
| NGFW | High performance, advanced features | Still single device |
| Separate | Best-of-breed, no single point | Complex, expensive, harder to manage |

**When to use:**

| Scenario | Recommendation |
|----------|----------------|
| Small business | UTM |
| Enterprise | NGFW or separate |
| Compliance specific | Separate (may require specific vendors) |
| Branch office | UTM |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: 10,000 alerts, can only investigate 100**

**Approach:**
1. Prioritize by asset criticality (attacks on critical systems first)
2. Filter out known false positives
3. Correlate with vulnerability data (alert on vulnerable system = high priority)
4. Use threat intelligence (known malicious IPs = high priority)
5. Aggregate similar alerts
6. Automate low-priority responses
7. Tune signatures causing most noise
8. Implement SOAR for automation

---

**Scenario 2: Developer wants "any to any" rule**

**Response:**
- Never implement any-any rules
- Work with developer to identify actual requirements:
  - What IPs/networks need access?
  - What ports/protocols?
  - What direction?
- Implement specific rules
- Use application testing to verify functionality
- Document business justification for each rule
- Review and remove unused rules regularly

---

**Scenario 3: IPS causing slowdowns and blocking**

**Alternatives to disabling:**
1. Switch to IDS mode temporarily (alert only)
2. Tune false positives causing blocks
3. Whitelist known good traffic
4. Reduce signature set to critical only
5. Add hardware resources if performance issue
6. Implement bypass for specific trusted flows
7. Use IPS in tap mode initially to tune before going inline

---

## Key Exam Tips

1. **Stateless:** No connection tracking, each packet independent
   **Stateful:** Tracks connections, auto-allows return traffic

2. **IDS:** Detects, alerts (passive)
   **IPS:** Detects, alerts, blocks (inline)

3. **NGFW features:** Application awareness, user identity, integrated IPS, SSL inspection

4. **WAF:** Layer 7, protects web applications, OWASP Top 10

5. **Signature-based:** Known threats, low false positives
   **Anomaly-based:** Unknown threats, high false positives

6. **Rule order:** Most specific first, top-to-bottom, first match wins

7. **Implicit deny:** Always at end of ruleset

8. **False positive:** Alert on legitimate traffic
   **False negative:** Missed threat (worse!)

9. **UTM:** All-in-one device for small/medium networks

10. **802.1X:** Port-based NAC, uses RADIUS

---

## Common Mistakes to Avoid

❌ Confusing IDS (passive/alert) with IPS (inline/block)

❌ Putting broad rules before specific rules

❌ Forgetting implicit deny at end of ruleset

❌ Thinking stateless firewalls track connections

❌ Assuming WAF replaces network firewall (they complement)

❌ Ignoring false positive tuning (leads to alert fatigue)

---

**Congratulations on completing Lab 17!**

Firewalls and IPS are core security infrastructure—this knowledge is essential for any security role.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 17: Firewalls and Intrusion Prevention - Solution Guide*