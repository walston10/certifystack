# Lesson 21: Network Threats and Vulnerabilities

**Estimated Time:** 30-35 minutes  
**Domain:** Network Security (Domain 4.0)  
**Exam Objectives Covered:** 4.1, 4.4 - Security concepts and common attacks

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Identify** common network attacks and their characteristics (DoS/DDoS, MITM, spoofing)
- **Explain** social engineering techniques and how they exploit human psychology
- **Differentiate** between malware types and their propagation methods
- **Recognize** common network vulnerabilities and security weaknesses
- **Apply** fundamental security principles to network defense strategies
- **Describe** attack indicators and how to detect malicious activity
- **Understand** why security is a layered approach, not a single solution

---

## Video Resources

**Watch these videos to reinforce the concepts:**

1. **Professor Messer - Network Attacks** (15 min)  
   https://www.youtube.com/watch?v=Dk5WJ2Y-grQ
   
2. **NetworkChuck - DoS vs DDoS Explained** (10 min)  
   https://www.youtube.com/watch?v=ilhGh9CEIwM

3. **PowerCert - Social Engineering Attacks** (8 min)  
   https://www.youtube.com/watch?v=pL9q2lOZ1Fw

4. **Sunny Classroom - Network Security Threats** (12 min)  
   https://www.youtube.com/watch?v=bBC-nXj3Ng4

5. **Professor Messer - Malware Types** (10 min)  
   https://www.youtube.com/watch?v=n8mbzU0X2nQ

---

## Introduction

Imagine you're a medieval castle defender. You've built strong walls, a deep moat, and armed guards at the gate. But threats come in many forms: battering rams (brute force), spies pretending to be merchants (social engineering), catapults hurling fireballs (DDoS attacks), and traitors already inside your walls (malware).

**Network security is exactly like defending a castle - you face multiple attack types simultaneously.**

Every day, networks face thousands of attacks. Some are automated scripts scanning for vulnerabilities. Others are targeted attacks by skilled adversaries. The average company faces **over 10,000 attacks per day**, and a successful breach costs an average of **$4.35 million**.

**Understanding threats is the first step to defending against them.** You can't protect what you don't understand. This lesson covers the attacks you'll see on the Network+ exam and in real-world networks - from simple spoofing to sophisticated multi-stage attacks.

**Why this matters:** Security questions make up **27% of the Network+ exam** - the largest domain. Understanding attack types, indicators, and defenses is critical for both passing the exam and protecting real networks.

---

## Common Network Attacks

### Denial of Service (DoS) and Distributed Denial of Service (DDoS)

**Goal:** Make a service unavailable by overwhelming it with traffic or consuming resources.

**DoS Attack** - Single source attacking a target  
**DDoS Attack** - Multiple sources (botnet) attacking a target

**Common DoS/DDoS attack types:**

**1. SYN Flood**
- Exploits TCP three-way handshake
- Attacker sends thousands of SYN packets but never completes handshake
- Server reserves resources waiting for ACK that never comes
- Resources exhausted, legitimate users can't connect

```
Normal TCP Handshake:
Client → Server: SYN
Server → Client: SYN-ACK
Client → Server: ACK ✅

SYN Flood Attack:
Attacker → Server: SYN
Server → Attacker: SYN-ACK
[Attacker never responds - server waits...]
Repeat thousands of times = server overwhelmed
```

**2. UDP Flood**
- Floods target with UDP packets (connectionless)
- Target spends resources processing packets
- No handshake required, easy to spoof source IP
- Common target: DNS servers, game servers

**3. Ping Flood (ICMP Flood)**
- Overwhelms target with ICMP echo requests
- Target uses CPU/bandwidth responding to pings
- Classic but easily filtered by firewalls

**4. Smurf Attack**
- Attacker sends ICMP packets with **spoofed source IP** (victim's IP)
- Sends to network **broadcast address**
- All hosts on network respond to victim
- Amplification attack: one packet → hundreds of responses

```
Smurf Attack Flow:
1. Attacker → Broadcast (192.168.1.255): ICMP echo with source IP = victim
2. All 254 hosts → Victim: ICMP echo reply
3. Victim overwhelmed by responses from entire network
```

**5. Amplification Attacks**
- Uses public servers to amplify attack traffic
- **DNS amplification:** Small query → large response (amplification factor 28x-54x)
- **NTP amplification:** Uses NTP monlist command (amplification factor 200x+)
- Attacker spoofs victim's IP, servers send huge responses to victim

**Key DDoS attack types to know:**
- SYN flood (exploits TCP handshake)
- UDP flood (connectionless flooding)
- Ping flood (ICMP flooding)
- Amplification attacks (DNS, NTP - small request, huge response)

**Defense against DoS/DDoS:**
- Rate limiting
- SYN cookies (doesn't allocate resources until handshake complete)
- Cloud-based DDoS protection (Cloudflare, Akamai)
- Blackhole/sinkhole routing
- Disable IP-directed broadcasts (prevents Smurf)

🎯 **Exam Tip:** Know the difference between DoS (single source) and DDoS (multiple sources/botnet). Understand SYN flood mechanics - very common exam question.

---

### On-Path Attacks (Man-in-the-Middle / MITM)

**Goal:** Intercept and potentially modify communication between two parties.

The attacker positions themselves **between** the client and server, intercepting all traffic. Both parties think they're communicating directly, but the attacker sees everything.

```
Normal Communication:
Client ←→ Server

On-Path Attack:
Client ←→ Attacker ←→ Server
        (sees/modifies everything)
```

**Common on-path attack scenarios:**
- **Unsecured Wi-Fi:** Attacker on same network intercepts traffic
- **ARP poisoning:** Redirect traffic through attacker's machine
- **DNS spoofing:** Redirect victim to attacker's server
- **SSL stripping:** Downgrade HTTPS to HTTP to read traffic

**Real-world example:** You connect to "Starbucks WiFi" at a coffee shop. Attacker set up fake AP with same name. All your traffic flows through attacker's laptop before reaching internet.

**Defense:**
- Use encrypted protocols (HTTPS, VPN)
- Certificate validation (don't ignore cert warnings!)
- Secure wireless (WPA3, 802.1X)
- ARP inspection (Dynamic ARP Inspection on switches)

⚠️ **Common Mistake:** Students confuse on-path with eavesdropping. On-path = **active** interception (attacker in the middle). Eavesdropping = **passive** monitoring.

---

### ARP Poisoning / ARP Spoofing

**Goal:** Associate attacker's MAC address with another device's IP (usually gateway), redirecting traffic.

**How ARP works normally:**
- Device needs to send data to IP address
- Broadcasts "Who has 192.168.1.1? Tell 192.168.1.50"
- Router responds "192.168.1.1 is at MAC aa:bb:cc:dd:ee:ff"
- Device caches this mapping in ARP table

**ARP poisoning attack:**
- Attacker sends **unsolicited ARP replies** (gratuitous ARP)
- "192.168.1.1 is at MAC [attacker's MAC]"
- Victim's ARP table updated with false information
- All traffic meant for router goes to attacker first

```
ARP Poisoning Attack:
1. Victim's ARP table:
   192.168.1.1 → aa:bb:cc:dd:ee:ff (legitimate router)

2. Attacker sends fake ARP reply:
   "192.168.1.1 is at 11:22:33:44:55:66" (attacker)

3. Victim's ARP table now:
   192.168.1.1 → 11:22:33:44:55:66 (attacker!)

4. Victim sends all traffic to attacker
5. Attacker forwards to real router (on-path attack)
```

**Defense:**
- **Dynamic ARP Inspection (DAI)** on switches
- Static ARP entries (not scalable)
- Port security
- Network segmentation

🎯 **Exam Tip:** ARP poisoning is a Layer 2 attack. It only works on the **local network** (same subnet). Know this for exam scenarios.

---

### MAC Attacks

**1. MAC Flooding**
- Goal: Overflow switch's MAC address table
- Attacker sends frames with thousands of fake source MACs
- Switch's CAM table fills up, enters "fail-open" mode
- Switch becomes a hub - broadcasts all traffic
- Attacker can now sniff all network traffic

**2. MAC Spoofing**
- Attacker changes their MAC address to impersonate another device
- Can bypass MAC-based access control
- Can steal another device's network access
- Common in guest network attacks

**Defense:**
- **Port security** (limit MACs per port)
- **MAC address limits** on switches
- **802.1X authentication** (don't trust MAC alone)

---

### IP Spoofing

**Goal:** Send packets with fake source IP address.

**Why attackers spoof IPs:**
- Hide their identity
- Impersonate trusted source
- Enable amplification attacks (victim's IP as source)
- Bypass IP-based access controls

**Types:**
- **Blind spoofing:** Attacker doesn't see responses (used in DoS)
- **Non-blind spoofing:** Attacker on same network, can see responses

**Example:** Attacker sends packet claiming to be from 8.8.8.8 (Google DNS). Firewall trusts traffic from Google and allows it.

**Defense:**
- **Ingress filtering** (RFC 2827) - ISPs drop packets with invalid source IPs
- **Egress filtering** - Block outgoing packets with spoofed source
- **uRPF (Unicast Reverse Path Forwarding)** - Verify source IP matches routing table
- Don't rely solely on IP address for authentication

---

### DNS Attacks

**1. DNS Poisoning / DNS Spoofing**
- Attacker injects false DNS records into DNS server cache
- Victims query DNS, get attacker's IP instead of legitimate IP
- Traffic redirected to attacker's malicious server

**Example:**
- User types "bankofamerica.com"
- Poisoned DNS returns attacker's IP: 203.0.113.50
- User connects to fake banking site, enters credentials
- Attacker steals credentials

**2. DNS Hijacking**
- Attacker changes DNS server settings on victim's device
- All DNS queries go to attacker's malicious DNS server
- Can redirect any domain to attacker's servers

**Defense:**
- **DNSSEC** (DNS Security Extensions) - cryptographically signs DNS records
- **DNS filtering/monitoring**
- Secure recursive resolvers
- HTTPS prevents some attacks (certificate validation)

---

### VLAN Hopping

**Goal:** Send traffic to VLANs the attacker shouldn't access.

**Two methods:**

**1. Switch Spoofing**
- Attacker negotiates trunk link with switch
- Switch thinks attacker is another switch
- Attacker now receives traffic from all VLANs

**2. Double Tagging**
- Attacker sends frame with two VLAN tags
- First tag matches attacker's VLAN
- Switch strips first tag, forwards based on second tag
- Frame lands in target VLAN

**Defense:**
- Disable unused ports
- Set ports to access mode explicitly
- Change native VLAN from VLAN 1
- Use VLAN access control

🎯 **Exam Tip:** VLAN hopping only works if attacker can connect to a trunk port or if native VLAN is misconfigured.

---

### Rogue DHCP Server

**Goal:** Provide malicious DHCP configuration to clients.

**Attack flow:**
1. Attacker sets up unauthorized DHCP server on network
2. Client broadcasts DHCP Discover
3. Both legitimate and rogue servers respond
4. If rogue responds first, client accepts its configuration
5. Rogue server provides:
   - Gateway = attacker's IP (on-path attack)
   - DNS server = attacker's server (control name resolution)
   - Subnet mask that expands network (force routing through attacker)

**Result:** All client traffic flows through attacker.

**Defense:**
- **DHCP snooping** on switches (only allow DHCP on trusted ports)
- Port security
- Network access control (802.1X)

---

### Wireless Attacks

**1. Evil Twin**
- Attacker creates fake access point with same SSID as legitimate AP
- Stronger signal or better positioning tricks users to connect
- All traffic flows through attacker's AP
- Combined with SSL stripping = steal credentials

**2. Deauthentication (Deauth) Attack**
- Attacker sends spoofed deauth frames to wireless clients
- Clients disconnect from legitimate AP
- Reconnect to attacker's evil twin
- Or prevent access entirely (wireless DoS)

**Common wireless attacks:**
- **Evil twin** - fake AP mimicking legitimate one
- **Deauth attack** - forces clients to disconnect

**Defense:**
- WPA3 (protects against deauth attacks)
- Wireless intrusion detection
- 802.11w (Management Frame Protection)
- Monitor for rogue APs

---

### Brute Force and Dictionary Attacks

**Brute Force:**
- Try every possible password combination
- Time-consuming but guaranteed to work eventually
- Example: 4-digit PIN = 10,000 combinations (0000-9999)

**Dictionary Attack:**
- Try common passwords from a list
- Much faster than brute force
- Uses leaked password databases, common patterns
- Example: "password123", "qwerty", "letmein"

**Defense:**
- **Account lockout policies** (lock after N failed attempts)
- **Multi-factor authentication (MFA)**
- **Strong password requirements**
- **Rate limiting**
- **CAPTCHA** after failed attempts

---

## Social Engineering

**Definition:** Manipulating people into divulging confidential information or performing actions.

**Why it works:** Humans are the weakest link. Easier to trick a person than break encryption.

**Types fall into two categories:**
- **Digital** - Phishing (email), Vishing (voice/phone), Smishing (SMS/text)
- **Physical** - Tailgating and Piggybacking (unauthorized building access)

### Phishing

**Standard phishing:**
- Mass emails pretending to be from legitimate organization
- "Your account will be closed - click here to verify"
- Links to fake websites that steal credentials

**Spear Phishing:**
- **Targeted** attack against specific individual
- Personalized using research about victim
- "Hi John, your manager Sarah asked me to send this report..."
- Much higher success rate than mass phishing

**Whaling:**
- Spear phishing targeting **executives** (big fish)
- "CEO needs you to wire $50,000 immediately"

**Defense:**
- Security awareness training
- Email filtering and anti-phishing tools
- Verify requests through separate channel
- Look for red flags (urgency, threats, poor grammar)

### Vishing (Voice Phishing)

- Phone-based social engineering
- "This is your bank's fraud department..."
- Creates urgency and pressure
- Caller ID spoofing makes it look legitimate

**Example:** "We've detected fraudulent charges. I need to verify your account number and PIN."

### Smishing (SMS Phishing)

- Text message phishing
- "Your package couldn't be delivered. Click here: bit.ly/package123"
- Links to malware or credential harvesting sites

### Tailgating / Piggybacking

**Tailgating:**
- Following authorized person through secure door
- Person doesn't know you're not supposed to be there
- "Sorry, forgot my badge!"

**Piggybacking:**
- Authorized person knowingly lets you in
- "Can you hold the door? My hands are full."

**Defense:**
- Security awareness
- Mantraps (only one person at a time)
- Badge readers that close immediately
- Security guards
- Challenge unknown people

---

## Malware Types

**Malware = Malicious Software**

**Key distinction to remember:** 
- **Virus** - needs human action to spread (you open the infected file)
- **Worm** - spreads automatically without human action (exploits vulnerabilities)

### Virus

- Requires **human action** to execute and spread
- Attaches to files or programs
- Spreads when infected file is shared/opened
- Can corrupt files, steal data, or destroy systems

**Example:** Email attachment "invoice.pdf.exe" - user opens it, virus activates.

### Worm

- **Self-replicating**, doesn't need human action
- Exploits vulnerabilities to spread automatically
- Can spread across networks rapidly
- Consumes bandwidth and system resources

**Famous example:** WannaCry ransomware (technically ransomware + worm)

**Key difference:** Virus needs human action, worm spreads automatically.

### Trojan (Trojan Horse)

- Appears legitimate but contains malicious code
- "Download this free game!" (actually installs backdoor)
- Requires user to install/run it
- Doesn't self-replicate

**Example:** Fake antivirus software that actually installs malware.

### Ransomware

- Encrypts victim's files
- Demands payment (usually Bitcoin) for decryption key
- Growing threat - attacks increased 150% in 2020-2021
- Targets businesses, hospitals, government

**Attack flow:**
1. Victim opens malicious attachment
2. Ransomware encrypts all files
3. Ransom note appears: "Pay $50,000 in Bitcoin within 72 hours or files deleted"

**Defense:**
- **Backups** (offline backups that can't be encrypted)
- Email filtering
- User training
- Keep systems patched
- Network segmentation

### Rootkit

- Hides at **operating system level** or below (firmware)
- Designed to remain undetected
- Provides persistent backdoor access
- Very difficult to detect and remove

**Types:**
- **User-mode:** Runs with user privileges
- **Kernel-mode:** Runs with OS kernel privileges (more dangerous)
- **Firmware/hardware:** Infects BIOS/UEFI (most dangerous)

### Botnet

- Network of compromised computers (bots/zombies)
- Controlled by attacker (botmaster) through command and control (C2) server
- Used for DDoS attacks, spam, crypto mining, etc.
- Victims often don't know they're part of botnet

```
Botnet Structure:
Botmaster → C2 Server → Bot 1 (compromised PC)
                      → Bot 2 (compromised PC)
                      → Bot 3 (compromised PC)
                      → Bot 4... (thousands of bots)
```

**Famous botnets:** Mirai (IoT devices), Zeus (banking trojans)

---

## Common Vulnerabilities

**Vulnerability = Weakness that can be exploited.**

### Unpatched Systems

- Software has vulnerabilities (bugs, security flaws)
- Vendors release patches to fix them
- Unpatched systems remain vulnerable
- Attackers scan for known vulnerabilities

**Example:** WannaCry ransomware exploited Windows SMB vulnerability. Patch was available **2 months before** attack. Organizations that didn't patch were infected.

**Defense:** Regular patch management, automated updates

### Zero-Day Vulnerabilities

- **Unknown** vulnerability (vendor doesn't know it exists)
- No patch available (zero days since disclosure)
- Extremely valuable to attackers
- Often used in targeted attacks

**Defense:** Defense in depth (multiple layers), behavior-based detection

### Misconfigurations

- Default passwords unchanged
- Unnecessary services enabled
- Excessive permissions granted
- Unencrypted protocols allowed

**Examples:**
- Router still using "admin/admin"
- Telnet enabled (should use SSH)
- Everyone has admin rights
- Database exposed to internet

**Defense:** Configuration management, security baselines, regular audits

### Default Credentials

- Devices ship with default username/password
- Many users never change them
- Attackers have lists of default credentials
- Try "admin/admin" on thousands of devices

**Famous example:** Mirai botnet infected IoT devices using just 60 common default credentials.

### Open Ports and Services

- Every open port = potential attack surface
- Unnecessary services = unnecessary risk
- Attackers scan for open ports

**Defense:**
- Close unused ports
- Disable unnecessary services
- Use firewalls
- "If you don't need it, turn it off"

### Weak Passwords

- Short passwords (< 8 characters)
- Common words ("password", "123456")
- No complexity (no numbers/symbols)
- Same password reused

**Statistics:**
- "123456" is still the #1 most common password
- 80% of breaches involve weak/stolen passwords

**Defense:**
- Password policies (length, complexity, expiration)
- Multi-factor authentication (MFA)
- Password managers
- Passphrases ("correct-horse-battery-staple" = strong, memorable)

---

## Security Principles

### Least Privilege

**Definition:** Users/systems should have **only** the minimum permissions needed to perform their job.

**Examples:**
- Regular user accounts (not admin) for daily work
- Service accounts with limited permissions
- Database user can only read, not delete

**Benefits:**
- Limits damage from compromised accounts
- Reduces insider threat risk
- Easier to audit

⚠️ **Violation:** "Everyone is admin because it's easier" = security nightmare

### Defense in Depth (Layered Security)

**Definition:** Multiple overlapping security controls. If one fails, others still protect.

**Think of it like a castle:**
- Moat (network perimeter firewall)
- Outer wall (edge security)
- Inner wall (internal segmentation)
- Guards (intrusion detection)
- Locked rooms (access control)
- Treasure in vault (data encryption)

**Network example:**
1. Firewall at perimeter
2. IDS/IPS monitoring traffic
3. Network segmentation (VLANs)
4. Host-based firewalls
5. Antivirus on endpoints
6. Encryption for sensitive data
7. Multi-factor authentication
8. Security awareness training

**No single layer is perfect, but together they're strong.**

### Zero Trust Model

**Traditional model:** "Trust but verify" - trust users inside network perimeter

**Zero Trust model:** "**Never trust, always verify**" - trust nothing, verify everything

**Core principles:**
1. **Verify explicitly** - Always authenticate and authorize
2. **Least privilege access** - Minimum necessary permissions
3. **Assume breach** - Act like attackers are already inside

**Implementation:**
- Continuous authentication (not just at login)
- Microsegmentation (restrict lateral movement)
- Encrypt all traffic (even internal)
- Monitor everything
- Device compliance checks

**Analogy:** Traditional security = gated community (once you're in, you're trusted). Zero Trust = airport security (everyone is checked, every time, everywhere).

🎯 **Exam Tip:** Zero Trust is a hot topic on the Network+ exam. Know the three principles: verify explicitly, least privilege, assume breach.

---

## Key Exam Tips

**Memorize these attack indicators:**

- **APIPA address (169.254.x.x):** DHCP issue (possibly rogue DHCP)
- **Sudden traffic spike:** DDoS attack
- **Frequent ARP broadcasts:** ARP poisoning
- **Users redirected to wrong sites:** DNS poisoning
- **MAC address table full:** MAC flooding
- **Unauthorized access point detected:** Evil twin / rogue AP

**Common exam scenarios:**

1. "Users can't access website but can ping IP" → **DNS issue** (could be DNS poisoning)
2. "Network performance degraded, high bandwidth usage" → **DoS/DDoS or malware**
3. "User credentials stolen despite VPN" → **On-path attack** (possibly evil twin on unsecured WiFi)
4. "Multiple failed login attempts from different IPs" → **Distributed brute force**
5. "Switch forwarding traffic to all ports" → **MAC flooding attack**

**Attack comparison:**

| Attack | Layer | Goal |
|--------|-------|------|
| DoS/DDoS | 3/4/7 | Unavailability |
| ARP poisoning | 2 | Traffic interception |
| MAC flooding | 2 | Sniff traffic |
| VLAN hopping | 2 | Access other VLANs |
| DNS poisoning | 7 | Redirect traffic |
| MITM | 2-7 | Intercept/modify traffic |

**Defense priorities:**
1. **Patch management** (fixes known vulnerabilities)
2. **User training** (defeats social engineering)
3. **MFA** (protects against credential theft)
4. **Network segmentation** (limits attack spread)
5. **Monitoring** (detects attacks early)

---

## Key Takeaways

- [ ] **DoS attacks** overwhelm resources, **DDoS** uses multiple sources (botnet)
- [ ] **SYN flood** exploits TCP handshake by never sending final ACK
- [ ] **On-path attacks (MITM)** intercept communication between two parties
- [ ] **ARP poisoning** redirects Layer 2 traffic by associating attacker's MAC with victim's IP
- [ ] **MAC flooding** overwhelms switch CAM table, making it broadcast like a hub
- [ ] **VLAN hopping** allows access to unauthorized VLANs through switch spoofing or double tagging
- [ ] **Rogue DHCP** servers provide malicious network configuration (gateway = attacker)
- [ ] **Evil twin** is fake access point mimicking legitimate AP
- [ ] **Social engineering** attacks exploit human psychology (phishing, vishing, smishing, tailgating)
- [ ] **Malware types:** Virus (needs human action), Worm (self-replicates), Trojan (fake legitimate), Ransomware (encrypts files), Rootkit (hides), Botnet (network of compromised devices)
- [ ] **Common vulnerabilities:** Unpatched systems, zero-days, misconfigurations, default credentials, weak passwords
- [ ] **Least privilege** = minimum permissions needed for job function
- [ ] **Defense in depth** = multiple overlapping security layers
- [ ] **Zero Trust** = "Never trust, always verify" - continuous verification, assume breach
- [ ] **Best defense against social engineering** = user awareness training

---

## Check Your Understanding

**1. What is the primary difference between a DoS attack and a DDoS attack?**

<details>
<summary>Show Answer</summary>
<strong>DoS uses a single attack source, while DDoS uses multiple sources (typically a botnet).</strong> A DoS (Denial of Service) attack comes from one attacker or one machine trying to overwhelm a target. A DDoS (Distributed Denial of Service) uses many compromised machines (sometimes thousands or millions) coordinated to attack simultaneously, making it much harder to defend against and block. The distributed nature also makes it difficult to trace back to the original attacker.
</details>

**2. In a SYN flood attack, why does the server run out of resources?**

<details>
<summary>Show Answer</summary>
<strong>The server reserves resources for half-open connections that never complete because the attacker never sends the final ACK.</strong> During the TCP three-way handshake, when the server receives a SYN packet, it allocates memory and resources for the connection and sends back a SYN-ACK. It then waits for the final ACK to complete the handshake. In a SYN flood, the attacker sends thousands of SYN packets but never sends the ACK, leaving the server waiting with thousands of half-open connections consuming resources. Eventually, the server's connection table fills up and it can't accept legitimate connections.
</details>

**3. A user reports that when they type "bankofamerica.com" they are redirected to a different website asking for login credentials. What type of attack is this most likely?**

<details>
<summary>Show Answer</summary>
<strong>DNS poisoning (DNS spoofing).</strong> When a DNS server's cache is poisoned with false records, it returns the attacker's IP address instead of the legitimate website's IP. This redirects users to a fake website designed to steal credentials (phishing). The user types the correct domain name, but the compromised DNS resolution sends them to the attacker's server. This is different from a simple phishing email because the user actually typed the correct address - the DNS resolution was compromised. Defense includes DNSSEC and using trusted DNS servers.
</details>

**4. What Layer 2 attack causes a switch to act like a hub, broadcasting all traffic to all ports?**

<details>
<summary>Show Answer</summary>
<strong>MAC flooding.</strong> When an attacker floods a switch with frames containing thousands of different source MAC addresses, the switch's MAC address table (CAM table) fills up. Once full, the switch enters fail-open mode and starts broadcasting all frames to all ports like a hub, allowing the attacker to sniff traffic destined for other devices. This attack works because switches have limited memory for their MAC address tables (typically 8,000-16,000 entries). Defense includes port security with MAC address limits.
</details>

**5. An attacker creates a wireless access point with the SSID "Starbucks WiFi" outside a coffee shop. What is this attack called?**

<details>
<summary>Show Answer</summary>
<strong>Evil twin attack.</strong> The attacker creates a fake access point that mimics a legitimate one (same SSID, sometimes stronger signal). When users connect thinking it's the real Starbucks WiFi, all their traffic flows through the attacker's AP. The attacker can intercept credentials, perform on-path attacks, or redirect users to malicious websites. This is especially dangerous on unsecured or lightly secured networks. The evil twin might use SSL stripping to downgrade HTTPS to HTTP, making credential theft easier. Defense includes using VPNs on public WiFi and certificate validation.
</details>

**6. What is the key difference between a virus and a worm?**

<details>
<summary>Show Answer</summary>
<strong>A virus requires human action to execute and spread, while a worm self-replicates automatically without human interaction.</strong> Viruses attach to files or programs and spread when users share infected files or run infected programs. Worms exploit vulnerabilities in systems or networks to spread automatically from machine to machine. For example, a virus in an email attachment needs the user to open it, but a worm like WannaCry automatically scans for vulnerable systems and infects them without any user action. This makes worms much more dangerous as they can spread exponentially across networks in minutes.
</details>

**7. Which social engineering attack targets high-level executives specifically?**

<details>
<summary>Show Answer</summary>
<strong>Whaling.</strong> Whaling is a type of spear phishing that specifically targets high-value individuals like CEOs, CFOs, or other executives (the "big fish"). These attacks are highly personalized and sophisticated because of the potential payoff - executives often have access to financial systems, confidential information, and authority to approve large transactions. A common whaling attack is the CEO fraud where an attacker impersonates the CEO and emails the CFO requesting an urgent wire transfer. The targeted nature and authority of the apparent sender makes these attacks highly effective.
</details>

**8. What type of malware encrypts victim's files and demands payment for the decryption key?**

<details>
<summary>Show Answer</summary>
<strong>Ransomware.</strong> Ransomware is malicious software that encrypts files on the victim's system using strong encryption, making them inaccessible. The attacker then demands payment (typically in cryptocurrency like Bitcoin) in exchange for the decryption key. Even if paid, there's no guarantee the attacker will provide the key. The best defense is offline backups that can't be encrypted by the ransomware - allowing you to restore without paying. Ransomware often spreads through phishing emails, exploits, or by downloading from compromised websites. Modern ransomware variants also threaten to leak stolen data if payment isn't made (double extortion).
</details>

**9. In ARP poisoning, what information does the attacker falsify?**

<details>
<summary>Show Answer</summary>
<strong>The attacker associates their MAC address with another device's IP address (usually the gateway).</strong> ARP (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network. In ARP poisoning, the attacker sends fake ARP replies claiming that their MAC address corresponds to the IP of the default gateway or another target device. This updates the victim's ARP cache with incorrect information. Now when the victim sends traffic to that IP address, it goes to the attacker's MAC address instead of the legitimate destination. The attacker can then forward traffic to the real destination (on-path attack) or simply intercept it. This only works on the local network (Layer 2).
</details>

**10. What security principle states that users should have only the minimum permissions necessary to perform their job?**

<details>
<summary>Show Answer</summary>
<strong>Least privilege.</strong> The principle of least privilege means giving users, applications, and systems only the minimum level of access and permissions required to accomplish their tasks - no more, no less. For example, a regular user doing office work doesn't need administrator rights. A database application might only need read access to certain tables, not full database admin rights. This limits the damage if an account is compromised - an attacker with regular user access can do much less harm than one with administrator privileges. It also reduces insider threat risk and makes security auditing easier.
</details>

**11. Which security model operates on the principle "never trust, always verify"?**

<details>
<summary>Show Answer</summary>
<strong>Zero Trust.</strong> The Zero Trust security model assumes that threats exist both inside and outside the network perimeter, so nothing should be automatically trusted. Every access request must be verified regardless of where it comes from. The three core principles are: (1) Verify explicitly - always authenticate and authorize based on all available data, (2) Use least privilege access - limit user access with just-in-time and just-enough-access, (3) Assume breach - minimize blast radius and segment access. This is different from traditional "castle and moat" security that trusted everything inside the perimeter. Zero Trust treats every transaction as if it's coming from an untrusted network.
</details>

**12. An organization experiences a vulnerability exploit even though a patch was released months ago. What vulnerability type is this?**

<details>
<summary>Show Answer</summary>
<strong>This is exploitation of an unpatched system, NOT a zero-day vulnerability.</strong> A zero-day vulnerability is one that is unknown to the vendor - meaning zero days have passed since its discovery and no patch exists. In this scenario, a patch was available for months, meaning the vulnerability was known and fixable. The organization simply failed to apply the patch, leaving their systems vulnerable to exploitation. This is why patch management is critical - many major attacks (like WannaCry) exploited vulnerabilities that had patches available before the attack. The gap between patch release and patch deployment is a major security risk. This emphasizes the importance of regular patching schedules and automated update systems.
</details>

---

## Before Moving to Lesson 22

**You should be able to:**
- [ ] Explain how DoS and DDoS attacks work and name specific types (SYN flood, amplification)
- [ ] Describe on-path attacks and why encryption is critical defense
- [ ] Understand ARP poisoning mechanics and why it's Layer 2 only
- [ ] Identify wireless attacks (evil twin, deauth)
- [ ] Recognize social engineering techniques and human-focused defenses
- [ ] Differentiate malware types (virus vs worm, what makes ransomware unique)
- [ ] List common vulnerabilities (unpatched, defaults, weak passwords)
- [ ] Explain the three core security principles (least privilege, defense in depth, zero trust)

**Study strategy:**
- **Focus on key distinctions** - virus vs worm, DoS vs DDoS, phishing types
- **Practice scenario identification** - given symptoms, identify attack type
- **Think defensively** - for each attack, know at least two defenses
- **Review real incidents** - WannaCry, Mirai botnet help cement concepts
- **Connect to previous lessons** - ARP from Lesson 1, VLANs from Lesson 11, wireless from Lesson 13

---

## Coming Up in Lesson 22

**Next: Authentication Methods**

Now that you understand the threats, Lesson 22 covers how we verify identity and control access:
- Authentication factors (something you know/have/are)
- Multi-factor authentication (MFA/2FA)
- Authentication protocols (RADIUS, TACACS+, Kerberos, LDAP)
- Single Sign-On (SSO)
- 802.1X port-based network access control

**Connection:** Knowing attack methods helps you understand why authentication must be strong. Passwords alone fail against brute force and social engineering - that's why MFA exists.

---

*"In security, the cost of prevention is always less than the cost of recovery."*

---

# ✅ LESSON 21 COMPLETE!


**Domain 4.0 Network Security: 1 of 6 lessons complete**

🎯 You now understand network threats - the foundation of security thinking!

**Next up:** Lesson 22 - Authentication Methods (the first line of defense against these attacks)