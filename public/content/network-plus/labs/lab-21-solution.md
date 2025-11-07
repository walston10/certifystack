# Lab 21 Answer Key: Network Threats and Vulnerabilities
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain Coverage:** Network Security (4.0)

---

## Section 1: Concept Check Answers

### Question 1: DoS vs DDoS
**Answer:**
- **DoS (Denial of Service):** Attack from a single source to make a service unavailable
- **DDoS (Distributed DoS):** Attack from multiple sources (botnet) simultaneously, much harder to stop

### Question 2: Social Engineering Definitions
**Answer:**
- **Phishing:** Fraudulent emails pretending to be legitimate to steal information
- **Vishing:** Voice phishing using phone calls
- **Smishing:** SMS/text message phishing

💡 **Memory trick:** PHishing = email, Vishing = Voice, SMiShing = SMS

### Question 3: Zero-Day Vulnerability
**Answer:**
Zero-day vulnerabilities are dangerous because:
- No patch exists yet (vendor unaware)
- No signatures for detection
- Actively exploited before defenses available
- High value on black market

### Question 4: Three Security Principles
**Answer:**
- **Least privilege:** Give minimum access required
- **Defense in depth:** Multiple layers of security
- **Zero trust:** Never trust, always verify

### Question 5: Virus vs Worm
**Answer:**
- **Virus:** Requires human action to spread, attaches to files
- **Worm:** Self-replicates automatically across networks, standalone

---

## Section 2: Hands-On Activities - Answers

### Activity A: Attack Type Identification ✅

| Description | Attack Type | Impact |
|------------|-------------|---------|
| Flooding MAC address table | MAC flooding | Switch acts like hub |
| Fake Wi-Fi hotspot at coffee shop | Evil twin | Credential theft |
| Sending packets with false source IP | IP spoofing | Hide identity |
| Overwhelming server with SYN packets | SYN flood | Service unavailable |
| Redirecting traffic via false ARP replies | ARP poisoning | Traffic interception |
| Jumping between VLANs unauthorized | VLAN hopping | Access violation |

### Activity B: DoS/DDoS Attack Analysis ✅

| Attack Type | Protocol Used | Amplification? | Mitigation |
|------------|---------------|----------------|------------|
| SYN flood | TCP | No | SYN cookies |
| UDP flood | UDP | Possible | Rate limiting |
| Ping of death | ICMP | No | Patch, filter |
| Smurf attack | ICMP | Yes | No directed broadcast |
| DNS amplification | UDP/DNS | Yes (50x) | BCP38, rate limit |
| NTP amplification | UDP/NTP | Yes (200x) | Disable monlist |

### Activity C: Social Engineering Response ✅

1. **Email from "IT Support":**
   - Red flags: IT never asks for passwords via email, generic greeting
   - Response: Delete, report to IT, verify through official channels

2. **Phone call from "Microsoft":**
   - Red flags: Microsoft doesn't cold call, creates urgency
   - Response: Hang up, never give remote access

3. **Text about package:**
   - Red flags: Not expecting package, suspicious link, urgency
   - Response: Delete, check directly with carrier website

4. **Person at door:**
   - Red flags: No appointment, no ID, asking for access
   - Response: Don't let in, verify with ISP, ask for ID

### Activity D: Malware Classification ✅

| Behavior | Malware Type | Spreads How? | Prevention |
|----------|--------------|--------------|------------|
| Encrypts files for ransom | Ransomware | Email, exploits | Backups, training |
| Self-replicates over network | Worm | Automatically | Patching, firewall |
| Hides in legitimate program | Trojan | User download | AV, verify sources |
| Creates zombie computers | Botnet | Various malware | AV, monitoring |
| Hides presence from OS | Rootkit | Trojan, exploit | HIPS, integrity check |
| Needs user action to spread | Virus | Email, USB | AV, user training |

### Activity E: Vulnerability Assessment ✅

All boxes should be checked for good security. If any unchecked:
- **Risk Level:** 
  - 0-2 unchecked: Low
  - 3-4 unchecked: Medium  
  - 5-7 unchecked: High
  - 8+ unchecked: Critical

### Activity F: On-Path Attack Detection ✅

| Indicator | Normal | Suspicious | Action |
|-----------|---------|------------|--------|
| Certificate warnings | Rare | Frequent | Don't proceed |
| HTTP on banking site | Never | Always | Leave site |
| Different gateway MAC | Consistent | Changed | Verify with IT |
| Slow connection | Variable | Sudden drop | Check for MitM |
| Password re-prompt | After timeout | Unexpected | Verify URL |

### Activity G: Password Attack Prevention ✅

| Attack Type | Prevention Method | Policy Setting |
|------------|------------------|----------------|
| Brute force | Account lockout | 5 attempts, 30 min lock |
| Dictionary | Complexity rules | No dictionary words |
| Rainbow table | Salt passwords | Unique salt per password |
| Credential stuffing | Unique passwords | No reuse across sites |
| Password spray | Monitor patterns | Detect distributed attempts |

**Password requirements:**
- Minimum length: **12-14 characters**
- Complexity: **Upper, lower, number, symbol**
- Expiration: **90 days (if required)**
- History: **Remember last 12**
- Lockout: **5 attempts, 30 minutes**

### Activity H: Network Attack Timeline ✅

**Correct order:**
1. Reconnaissance (information gathering)
2. Scanning (find vulnerabilities)
3. Weaponization (prepare tools)
4. Delivery (send payload)
5. Exploitation (run attack)
6. Maintain access (backdoor)
7. Cover tracks (log deletion)

**Tools/Techniques:**
1. Google dorking, social media
2. Nmap, vulnerability scanners
3. Metasploit, custom exploits
4. Email, USB, watering hole
5. Buffer overflow, SQL injection
6. RAT, rootkit, backdoor
7. Log cleaning, timestamp modification

### Activity I: Wireless Attack Identification ✅

| Attack | Description | Defense |
|--------|------------|---------|
| Evil twin | Fake AP mimicking legitimate | Verify SSID, use VPN |
| Deauth attack | Forces disconnect from AP | 802.11w, detection |
| WPS brute force | Cracks WPS PIN | Disable WPS |
| Packet sniffing | Captures wireless traffic | WPA3 encryption |
| Rogue AP | Unauthorized access point | Regular scanning |
| Jamming | RF interference | Detect, locate source |

### Activity J: Security Principle Application ✅

| Scenario | Principle Applied | Implementation |
|----------|------------------|----------------|
| User needs file access | Least privilege | Read-only if just viewing |
| Protecting network | Defense in depth | Firewall + IPS + AV |
| Remote access policy | Zero trust | Verify every connection |
| Admin account usage | Least privilege | Separate admin/user accounts |
| Internet DMZ design | Defense in depth | Multiple firewall layers |

### Activity K: Attack Vector Analysis ✅

| Vector | Risk Level | Current Protection | Improvement Needed |
|--------|------------|-------------------|-------------------|
| Email | High | Spam filter | User training, sandbox |
| Web browsing | High | Web filter | Proxy, SSL inspection |
| USB devices | Medium | Some blocking | Complete disable/control |
| Remote access | High | VPN | MFA, monitoring |
| Physical access | Medium | Badge system | Mantrap, guards |
| Supply chain | Medium | Vendor review | Security requirements |
| Insider threat | High | Basic monitoring | DLP, UEBA |

### Activity L: Incident Response Planning ✅

**DDoS Response:**
1. **Initial:** Verify attack, activate incident response team
2. **Containment:** Enable DDoS protection, contact ISP
3. **Investigation:** Identify attack type, source, target
4. **Mitigation:** Rate limiting, blackhole routing, CDN
5. **Recovery:** Restore normal operations, monitor
6. **Lessons:** Update response plan, improve defenses

---

## Real-World Context & Best Practices

### Why This Matters
- **Constant threats:** Networks face attacks 24/7
- **Financial impact:** Average breach costs $4.35 million
- **Reputation damage:** Customer trust lost
- **Compliance:** Regulations require security measures

### Common Mistakes to Avoid
❌ Ignoring security patches
❌ Using default credentials
❌ No network segmentation
❌ Weak password policies
❌ No incident response plan

### Industry Best Practices
✅ **Patch within 30 days** (critical within 72 hours)
✅ **Security awareness training** quarterly
✅ **Vulnerability scans** monthly
✅ **Penetration testing** annually
✅ **Incident response drills** bi-annually

---

## Exam Tips 📝

### Must Memorize:
1. **Attack Types:**
   - DoS = Single source
   - DDoS = Multiple sources
   - On-path = Man-in-the-middle
2. **Social Engineering:**
   - Phishing = Email
   - Vishing = Voice
   - Smishing = SMS
   - Whaling = Target executives
3. **Malware Types:**
   - Virus = Needs human action
   - Worm = Self-replicates
   - Trojan = Hidden in legitimate
   - Ransomware = Encrypts files
4. **Security Principles:**
   - Least privilege
   - Defense in depth
   - Zero trust

### Common Exam Questions:
- "Which attack floods the MAC table?" → **MAC flooding**
- "Self-replicating malware?" → **Worm**
- "Attack using multiple zombies?" → **DDoS/Botnet**
- "Fake wireless access point?" → **Evil twin**
- "Redirects using false ARP?" → **ARP poisoning**

### Exam Strategy:
- Social engineering targets humans, not tech
- DDoS harder to stop than DoS
- Zero-day means no patch available
- On-path is new term for MITM

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Identified all major attack types
□ Recognized social engineering tactics
□ Classified malware correctly
□ Applied security principles
□ Created incident response steps
□ Assessed vulnerability levels
□ Understood attack timelines
□ Planned defense strategies

### Troubleshooting Common Issues

**Problem:** Repeated malware infections
**Solution:** Patch OS, update AV, user training, rebuild if necessary

**Problem:** DDoS attacks successful
**Solution:** DDoS protection service, increase bandwidth, CDN

**Problem:** Users falling for phishing
**Solution:** Security awareness training, email filters, reporting button

**Problem:** Unauthorized network access
**Solution:** NAC, 802.1X, network segmentation, monitoring

---

## Real-World Scenarios

### Scenario 1: Ransomware Attack
**Situation:** Files encrypted, ransom demanded
**Response:**
1. Isolate infected systems
2. Identify ransomware variant
3. Check for decryptor availability
4. Restore from backups
5. Never pay ransom
6. Report to authorities

### Scenario 2: ARP Poisoning Detected
**Situation:** Gateway MAC address changed
**Response:**
1. Static ARP entries for critical systems
2. Enable Dynamic ARP Inspection
3. Implement port security
4. Monitor for suspicious traffic
5. Locate attacker

### Scenario 3: Phishing Campaign
**Situation:** Multiple users received fake CEO email
**Response:**
1. Alert all users immediately
2. Block sender domain
3. Reset passwords for affected users
4. Check for data exfiltration
5. Conduct training refresher

---

## Lab Summary

### Key Concepts Mastered:
✅ Network attacks exploit vulnerabilities
✅ Social engineering targets humans
✅ Malware has distinct categories and behaviors
✅ Defense requires multiple layers
✅ Zero-day vulnerabilities are critical threats
✅ Incident response must be planned
✅ Security principles guide defense strategies

### Time-Saving Tips:
- Automate vulnerability scanning
- Use threat intelligence feeds
- Deploy SIEM for correlation
- Script incident response steps
- Maintain attack response playbooks

### Going Further:
- Set up honeypot at home
- Try Metasploit in lab environment
- Take social engineering course
- Practice with HackTheBox
- Get familiar with Wireshark

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for network threats and vulnerabilities exam questions!

**Next Lab:** Lesson 22 - Authentication Methods

### Final Tip:
"Think like an attacker to defend like a pro. The best security professionals understand both offense and defense!"

---