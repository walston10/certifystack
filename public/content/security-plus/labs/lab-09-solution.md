# Lab 9: Network-Based Attacks - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Network attacks are heavily tested on Security+—know these well.

---

## Section 1: Concept Check - Answers

**1. DoS vs DDoS - why is DDoS harder to defend?**

**Answer:**

| Aspect | DoS | DDoS |
|--------|-----|------|
| **Source** | Single system | Many systems (botnet) |
| **Traffic volume** | Limited by one machine | Massive, combined bandwidth |
| **Blocking** | Block one IP | Can't block all IPs |
| **Tracing** | Easier to identify | Sources are victims too |

**Why DDoS is harder:**
- Can't simply block the source (thousands of IPs)
- Traffic appears to come from legitimate users worldwide
- Attackers can shift to new botnet members
- Volume can exceed your total bandwidth capacity
- Requires specialized mitigation services

---

**2. How does an on-path (MITM) attack work?**

**Answer:**

The attacker positions themselves between two communicating parties, intercepting and potentially modifying all traffic.

**Positioning methods:**
- ARP poisoning (local network)
- DNS spoofing (redirect to attacker)
- Rogue Wi-Fi/Evil Twin
- BGP hijacking (internet routing)

**Once positioned, attacker can:**
- Read all unencrypted traffic
- Capture credentials
- Modify data in transit
- Inject malicious content
- Downgrade encryption
- Hijack sessions

---

**3. What is ARP poisoning and why is it effective?**

**Answer:**

**ARP poisoning** sends fake ARP replies to associate the attacker's MAC address with another IP (usually the gateway).

**Why it's effective:**
- ARP has no authentication—devices trust any reply
- Works on the local network segment
- Devices cache ARP responses (so attack persists)
- Redirects traffic through attacker transparently
- Victims don't notice anything wrong

---

**4. DNS poisoning vs DNS spoofing:**

**Answer:**

| Attack | Target | Method | Scope |
|--------|--------|--------|-------|
| **DNS Spoofing** | Individual user/query | Fake response to specific request | One user, one query |
| **DNS Poisoning** | DNS server cache | Insert false records into cache | All users of that server |

**Poisoning is worse:** Affects all clients using that DNS server until TTL expires.

---

**5. What is a replay attack and how is it prevented?**

**Answer:**

**Replay attack:** Attacker captures valid data (authentication, transaction) and retransmits it later to duplicate the action.

**Prevention methods:**
- **Timestamps** - Reject old messages
- **Nonces** - One-time random numbers
- **Sequence numbers** - Track order, reject duplicates
- **Session tokens** - Change after each use
- **Challenge-response** - Fresh challenge each time

---

## Section 2: Activity Solutions

### Activity A: DoS/DDoS Classification - Answers

**Attack categories:**

| Category | How It Works | Examples |
|----------|--------------|----------|
| Volumetric | Overwhelm bandwidth with sheer traffic volume | UDP flood, ICMP flood, amplification |
| Protocol | Exploit protocol weaknesses, exhaust resources | SYN flood, Smurf, Ping of Death |
| Application | Target application layer, expensive requests | HTTP flood, Slowloris |

**Specific attacks:**

| Attack | Category | Layer | How It Works |
|--------|----------|-------|--------------|
| SYN Flood | Protocol | 4 | Exhaust TCP connection table with half-open connections |
| UDP Flood | Volumetric | 4 | Send massive UDP packets to random ports |
| ICMP Flood | Volumetric | 3 | Flood with ping requests |
| Smurf Attack | Volumetric | 3 | Send ping to broadcast, spoof victim's IP |
| HTTP Flood | Application | 7 | Many legitimate-looking HTTP requests |
| Slowloris | Application | 7 | Keep many connections open with partial requests |
| DNS Amplification | Volumetric | 7 | Small query → large response to spoofed victim IP |
| NTP Amplification | Volumetric | 7 | monlist command returns huge response |
| Ping of Death | Protocol | 3 | Oversized/malformed ping crashes system |
| Teardrop | Protocol | 3 | Overlapping IP fragments confuse reassembly |

**Amplification attacks:**

| Attack | Protocol | Amplification | How |
|--------|----------|---------------|-----|
| DNS | UDP/53 | 28-54x | Small query, large response (ANY record) |
| NTP | UDP/123 | 556x | monlist returns recent clients |
| SSDP | UDP/1900 | 30x | UPnP discovery response |
| Memcached | UDP/11211 | 50,000x | stats command returns huge data |

**Why amplification works:**
UDP doesn't verify source IP, so attacker spoofs victim's IP. Vulnerable servers send large responses to victim.

---

### Activity B: TCP Handshake and SYN Flood - Answers

**Normal handshake:**

| Step | Client | Server | State |
|------|--------|--------|-------|
| 1 | SYN → | | SYN_SENT |
| 2 | | ← SYN-ACK | SYN_RECEIVED |
| 3 | ACK → | | ESTABLISHED |

**SYN Flood:**

| Step | Attacker | Server | Problem |
|------|----------|--------|---------|
| 1 | SYN (spoofed IP) | Allocates resources | Uses memory |
| 2 | | SYN-ACK to fake IP | Waits for ACK |
| 3 | Never responds | Keeps waiting | Connection table fills |

**Why it works:** Server allocates resources for each half-open connection; attacker sends millions of SYNs faster than they time out.

**Defenses:**

| Defense | How It Helps |
|---------|--------------|
| SYN cookies | Don't allocate resources until ACK received |
| Increased backlog | Handle more half-open connections |
| Reduced timeout | Close half-open connections faster |
| Firewall/IPS | Detect and block SYN flood patterns |
| Rate limiting | Limit SYNs per source IP |

---

### Activity C: MITM Positioning - Answers

| Method | How | Where |
|--------|-----|-------|
| ARP poisoning | Fake ARP replies | Local LAN |
| DNS spoofing | Fake DNS responses | Local network or compromised DNS |
| Evil Twin | Fake Wi-Fi AP | Public Wi-Fi locations |
| BGP hijacking | Announce false routes | Internet backbone |
| SSL stripping | Downgrade HTTPS to HTTP | Any MITM position |
| Rogue DHCP | Provide fake gateway/DNS | Local LAN |

**Attacker capabilities:**

| Direction | Capability |
|-----------|------------|
| Client → Server | Read, modify, block, inject data |
| Server → Client | Read, modify, block, inject data |

---

### Activity D: ARP Poisoning - Answers

**Normal ARP:**

| Step | Action | Result |
|------|--------|--------|
| 1 | Device broadcasts "Who has 192.168.1.1?" | All devices hear request |
| 2 | Gateway responds with its MAC | Only gateway should respond |
| 3 | Requester updates ARP cache | Traffic can now be sent |

**ARP poisoning:**

| Step | Attacker Action | Effect |
|------|-----------------|--------|
| 1 | Send fake ARP: "192.168.1.1 is at [attacker MAC]" | Victim updates cache |
| 2 | Send fake ARP to gateway for victim's IP | Gateway updates cache |
| 3 | Forward traffic between them | Invisible MITM |

**Defenses:**

| Defense | How It Works |
|---------|--------------|
| Static ARP | Manually configure MAC for critical IPs |
| DAI | Switch validates ARP against DHCP snooping |
| Port security | Limit MACs per port |
| VLANs | Segment network, limit ARP scope |
| Encryption | Attacker sees only encrypted data |
| ARP monitoring | Alert on changes |

---

### Activity E: DNS Attacks - Answers

| Attack | Target | Method | Persistence |
|--------|--------|--------|-------------|
| DNS Spoofing | One query | Race to respond before real DNS | One request |
| DNS Poisoning | DNS cache | Inject false record into cache | Until TTL expires |
| DNS Hijacking | DNS settings | Change DNS server (malware, router hack) | Until fixed |
| DNS Tunneling | DNS protocol | Encode data in DNS queries | N/A (exfiltration) |

**DNS security:**

| Measure | Protection |
|---------|------------|
| DNSSEC | Digitally signs DNS records, prevents spoofing |
| DoH | DNS over HTTPS, encrypted, hides queries |
| DoT | DNS over TLS, encrypted queries |
| DNS filtering | Block known malicious domains |
| Split DNS | Different answers internal vs external |

---

### Activity F: Wireless Attacks - Answers

| Attack | How It Works | Goal |
|--------|--------------|------|
| Evil Twin | Clone legitimate AP's SSID | MITM, credential theft |
| Rogue AP | Unauthorized AP on network | Backdoor access |
| Deauth | Send deauthentication frames | Force reconnection, capture handshake |
| WPA Cracking | Capture handshake, brute force | Get Wi-Fi password |
| KRACK | Reinstall encryption keys | Decrypt WPA2 traffic |
| Bluejacking | Send unsolicited messages | Annoyance, phishing |
| Bluesnarfing | Steal data via Bluetooth | Data theft |
| Jamming | Overwhelm RF frequencies | Deny wireless access |

**Deauth attack purposes:**
1. Force victim to reconnect to evil twin
2. Capture WPA handshake for offline cracking

**Wireless defenses:**

| Defense | Prevents |
|---------|----------|
| WPA3 | Stronger encryption, SAE |
| 802.1X | Individual authentication |
| WIPS | Detect rogue APs, evil twins |
| 802.11w | Protect management frames (prevents deauth) |
| VPN | Encrypt all traffic regardless of Wi-Fi security |

---

### Activity G: Layer 2 Attacks - Answers

| Attack | Target | Method | Impact |
|--------|--------|--------|--------|
| MAC Flooding | Switch CAM table | Send many fake MACs | Switch becomes hub |
| MAC Spoofing | MAC authentication | Change MAC to trusted one | Bypass port security |
| VLAN Hopping | VLAN separation | Trunk spoofing or double tagging | Access other VLANs |
| STP Attack | Spanning Tree | Become root bridge | MITM, traffic redirect |
| DHCP Starvation | DHCP pool | Request all IPs | Deny legitimate users |
| DHCP Spoofing | DHCP clients | Respond as rogue server | Provide fake gateway/DNS |

**MAC Flooding:**

| Step | Result |
|------|--------|
| 1 | Switch CAM table fills with fake MACs |
| 2 | No room for legitimate MAC entries |
| 3 | Switch can't forward properly |
| 4 | Floods all traffic to all ports (like hub) |

**Layer 2 defenses:**

| Defense | Prevents |
|---------|----------|
| Port security | MAC flooding, MAC spoofing |
| DHCP snooping | DHCP starvation, DHCP spoofing |
| DAI | ARP poisoning |
| 802.1X | Unauthorized device connection |
| Disable unused ports | Physical attack vector |
| Native VLAN config | VLAN hopping |
| BPDU guard | STP manipulation |

---

### Activity H: Replay Attacks - Answers

| Scenario | What's Replayed | Impact |
|----------|-----------------|--------|
| Authentication | Login credentials/token | Unauthorized access |
| Financial | Wire transfer request | Duplicate payment |
| Door access | Badge swipe data | Unauthorized entry |
| API request | Signed API call | Duplicate action |

**Countermeasures:**

| Method | How It Works |
|--------|--------------|
| Timestamps | Reject messages older than X seconds |
| Sequence numbers | Reject out-of-order or duplicate |
| Nonces | One-time random value, never reuse |
| Session tokens | Change after each transaction |
| Challenge-response | Server provides fresh challenge |

**Why encryption doesn't prevent replay:**
The encrypted blob is still valid—attacker doesn't need to decrypt it, just resend the exact same bytes. Encryption protects confidentiality, not freshness.

---

### Activity J: Defense Matrix - Answers

| Attack | Primary Defenses | Detection |
|--------|------------------|-----------|
| DDoS | CDN, scrubbing, rate limiting | Traffic analysis, anomaly detection |
| SYN Flood | SYN cookies, IPS, rate limiting | Half-open connection count |
| ARP Poisoning | DAI, static ARP, encryption | ARP table changes, duplicate MAC |
| DNS Poisoning | DNSSEC, DoH/DoT | Unexpected DNS responses |
| Evil Twin | 802.1X, certificate validation | WIPS, duplicate SSIDs |
| MAC Flooding | Port security | CAM table monitoring |
| MITM | TLS, certificate pinning | Certificate warnings |
| Replay | Timestamps, nonces, sequence numbers | Duplicate message detection |
| Deauth | 802.11w, WIPS | Deauth frame count |
| VLAN Hopping | Proper trunk config, native VLAN | Traffic on unexpected VLANs |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Website unreachable, massive traffic from worldwide IPs**

**Attack type:** DDoS (Distributed Denial of Service)

**Immediate steps:**
1. Contact ISP/hosting provider for upstream filtering
2. Enable CDN/DDoS protection service
3. Implement rate limiting
4. Identify attack type (volumetric, protocol, application)
5. Consider blackholing if necessary (last resort)
6. Document for forensics
7. Communicate with stakeholders

---

**Scenario 2: SSL warnings on banking portal, users entered credentials**

**What happened:** Man-in-the-middle attack (likely ARP poisoning or DNS spoofing)

**Response:**
1. Disconnect affected network segment
2. Force password reset for affected users
3. Check ARP tables for poisoning
4. Verify DNS settings
5. Scan for rogue devices
6. Implement DAI, DHCP snooping
7. Enable HSTS on the portal
8. User training: NEVER click through cert warnings

---

**Scenario 3: Workstation sending ARP replies for gateway IP**

**What's happening:** ARP poisoning attack or misconfigured device

**Response:**
1. Isolate the workstation immediately
2. Compare MAC addresses (real gateway vs attacker)
3. Check for malware on workstation
4. Examine network traffic from that device
5. Clear ARP caches on affected systems
6. Implement DAI going forward
7. Investigate how compromise occurred

---

## Key Exam Tips

1. **DoS vs DDoS:** DoS = one source, DDoS = many (botnet)

2. **Amplification factor:** How much larger response is than request

3. **SYN flood:** Exhausts TCP connection table with half-open connections

4. **SYN cookies:** Don't allocate resources until handshake completes

5. **ARP poisoning:** No authentication in ARP protocol → trust any reply

6. **Defense against ARP:** DAI (Dynamic ARP Inspection), DHCP snooping

7. **DNS attacks:**
   - Spoofing = individual response
   - Poisoning = cache contamination

8. **Evil twin:** Fake AP with same SSID

9. **MAC flooding:** Fills CAM table → switch acts like hub

10. **Replay prevention:** Nonces, timestamps, sequence numbers

---

## Common Mistakes to Avoid

❌ Confusing DoS (one source) with DDoS (distributed)

❌ Thinking encryption prevents replay attacks (it doesn't)

❌ Confusing DNS spoofing (one query) with poisoning (cache)

❌ Forgetting that ARP has no authentication

❌ Mixing up tailgating (physical) with similar network terms

❌ Thinking SYN cookies solve all flood attacks (only SYN floods)

---

**Congratulations on completing Lab 9!**

Network attacks are fundamental to security—this knowledge is essential for both the exam and incident response.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 9: Network-Based Attacks - Solution Guide*