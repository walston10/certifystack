# Lab 21: Network Threats and Vulnerabilities
**Time:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain:** Network Security (4.0)

## Lab Objectives
- Identify common network attack types and methods
- Recognize social engineering tactics
- Understand malware categories and behaviors
- Detect system vulnerabilities
- Apply security principles to prevent attacks
- Analyze attack indicators and patterns

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What's the difference between DoS and DDoS?**
   DoS: _______________________________________________
   DDoS: ______________________________________________

2. **Define these social engineering attacks:**
   Phishing: __________________________________________
   Vishing: ___________________________________________
   Smishing: __________________________________________

3. **What makes a zero-day vulnerability especially dangerous?**
   _________________________________________________
   _________________________________________________

4. **List the three core security principles:**
   • ________________________________________________
   • ________________________________________________
   • ________________________________________________

5. **What's the difference between a virus and a worm?**
   Virus: _____________________________________________
   Worm: ______________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Attack Type Identification 🎯
**Time:** 3 minutes

Match attack descriptions to attack types:

| Description | Attack Type | Impact |
|------------|-------------|---------|
| Flooding MAC address table | | |
| Fake Wi-Fi hotspot at coffee shop | | |
| Sending packets with false source IP | | |
| Overwhelming server with SYN packets | | |
| Redirecting traffic via false ARP replies | | |
| Jumping between VLANs unauthorized | | |

Attack types: MAC flooding, Evil twin, IP spoofing, SYN flood, ARP poisoning, VLAN hopping

---

### Activity B: DoS/DDoS Attack Analysis 💥
**Time:** 3 minutes

Analyze these attack patterns:

| Attack Type | Protocol Used | Amplification? | Mitigation |
|------------|---------------|----------------|------------|
| SYN flood | | | |
| UDP flood | | | |
| Ping of death | | | |
| Smurf attack | | | |
| DNS amplification | | | |
| NTP amplification | | | |

---

### Activity C: Social Engineering Scenario Response 🎭
**Time:** 3 minutes

How would you respond to these scenarios?

1. **Email from "IT Support" asking for password:**
   Red flags: __________________________________________
   Response: ___________________________________________

2. **Phone call from "Microsoft" about virus on computer:**
   Red flags: __________________________________________
   Response: ___________________________________________

3. **Text about package delivery with link:**
   Red flags: __________________________________________
   Response: ___________________________________________

4. **Person at door claiming to be internet technician:**
   Red flags: __________________________________________
   Response: ___________________________________________

---

### Activity D: Malware Classification 🦠
**Time:** 3 minutes

Classify malware based on behavior:

| Behavior | Malware Type | Spreads How? | Prevention |
|----------|--------------|--------------|------------|
| Encrypts files for ransom | | | |
| Self-replicates over network | | | |
| Hides in legitimate program | | | |
| Creates zombie computers | | | |
| Hides presence from OS | | | |
| Needs user action to spread | | | |

---

### Activity E: Vulnerability Assessment 🔍
**Time:** 3 minutes

Check your home network for vulnerabilities:

**Router Check:**
□ Default password changed? _________________________
□ WPA3/WPA2 enabled? _______________________________
□ WPS disabled? _____________________________________
□ Firmware updated? _________________________________
□ Remote management off? ____________________________

**Computer Check:**
□ OS updates current? _______________________________
□ Antivirus running? ________________________________
□ Firewall enabled? _________________________________
□ Unnecessary services disabled? ____________________
□ Strong passwords used? ____________________________

**Risk level:** □ Low □ Medium □ High □ Critical

---

### Activity F: On-Path Attack Detection 🕵️
**Time:** 3 minutes

Identify indicators of man-in-the-middle attacks:

| Indicator | Normal | Suspicious | Action |
|-----------|---------|------------|--------|
| Certificate warnings | | | |
| Sudden HTTP instead of HTTPS | | | |
| Different MAC for gateway | | | |
| Slow connection speed | | | |
| Password prompt on trusted site | | | |

Check your current connection:
```cmd
# Windows - Check ARP cache
arp -a

# Check gateway MAC
ipconfig /all
```
Gateway MAC: ________________________________________

---

### Activity G: Password Attack Prevention 🔐
**Time:** 3 minutes

Design password policies to prevent attacks:

| Attack Type | Prevention Method | Policy Setting |
|------------|------------------|----------------|
| Brute force | | |
| Dictionary | | |
| Rainbow table | | |
| Credential stuffing | | |
| Password spray | | |

**Strong password requirements:**
- Minimum length: ____________________________________
- Complexity: ________________________________________
- Expiration: ________________________________________
- History: ___________________________________________
- Lockout: ___________________________________________

---

### Activity H: Network Attack Timeline 📊
**Time:** 3 minutes

Arrange attack stages in order:

___ Maintain access (backdoor)
___ Reconnaissance (information gathering)
___ Cover tracks (log deletion)
___ Exploitation (run attack)
___ Weaponization (prepare tools)
___ Scanning (find vulnerabilities)
___ Delivery (send payload)

For each stage, name one tool/technique:
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________
4. ________________________________________________
5. ________________________________________________
6. ________________________________________________
7. ________________________________________________

---

### Activity I: Wireless Attack Identification 📡
**Time:** 2 minutes

Match wireless attacks to their descriptions:

| Attack | Description | Defense |
|--------|------------|---------|
| Evil twin | | |
| Deauth attack | | |
| WPS brute force | | |
| Packet sniffing | | |
| Rogue AP | | |
| Jamming | | |

---

### Activity J: Security Principle Application 🛡️
**Time:** 3 minutes

Apply security principles to scenarios:

| Scenario | Principle Applied | Implementation |
|----------|------------------|----------------|
| User needs file access | Least privilege | |
| Protecting network | Defense in depth | |
| Remote access policy | Zero trust | |
| Admin account usage | | |
| Internet DMZ design | | |

---

### Activity K: Attack Vector Analysis 🎯
**Time:** 2 minutes

Identify attack vectors for your organization:

| Vector | Risk Level | Current Protection | Improvement Needed |
|--------|------------|-------------------|-------------------|
| Email | | | |
| Web browsing | | | |
| USB devices | | | |
| Remote access | | | |
| Physical access | | | |
| Supply chain | | | |
| Insider threat | | | |

Risk: Low, Medium, High, Critical

---

### Activity L: Incident Response Planning 🚨
**Time:** 3 minutes

Create basic incident response for detected attack:

**DDoS Attack Detected:**
1. Initial response: __________________________________
2. Containment: ______________________________________
3. Investigation: ____________________________________
4. Mitigation: _______________________________________
5. Recovery: _________________________________________
6. Lessons learned: __________________________________

**Contact list:**
- ISP: ______________________________________________
- Security team: _____________________________________
- Management: ________________________________________
- Legal: _____________________________________________

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your company is experiencing slow network performance and users report strange pop-ups:

1. **Initial assessment:** (What type of attack?)
   • _____________________________________________
   • _____________________________________________

2. **Immediate actions:**
   • _____________________________________________
   • _____________________________________________

3. **Investigation steps:**
   • _____________________________________________
   • _____________________________________________

### Best Practices Checklist
Check off security practices you'll implement:

□ Regular security awareness training
□ Patch management program
□ Network segmentation
□ Multi-factor authentication
□ Regular vulnerability scans
□ Incident response plan
□ Security monitoring/SIEM
□ Penetration testing
□ Change default credentials
□ Principle of least privilege

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Identify DoS/DDoS attack types
□ Recognize social engineering attempts
□ Classify malware by behavior
□ Detect on-path attacks
□ Assess network vulnerabilities
□ Apply security principles
□ Analyze wireless attacks
□ Create incident response plans
□ Identify attack vectors
□ Implement defense strategies

### Exam Preparation
⚠️ **Know for the exam:**
- **DDoS:** Distributed Denial of Service (multiple sources)
- **On-path attack:** New term for man-in-the-middle
- **Phishing:** Email-based social engineering
- **Zero-day:** Unpatched vulnerability unknown to vendor
- **Least privilege:** Minimum access needed
- **Defense in depth:** Multiple security layers
- **ARP poisoning:** Redirects traffic via false ARP

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐⭐☆

**Ready for:** Lesson 22 - Authentication Methods

### Remember
"The best defense is knowing your enemy. Understanding attack methods helps you build better defenses. Stay paranoid, stay safe!"

---