# Lesson 9: Network-Based Attacks

**Estimated Time:** 30-35 minutes  
**Domain:** 2.0 Threats, Vulnerabilities, and Mitigations (22% of exam)  
**Exam Objectives Covered:** 2.2 - Explain common threat vectors and attack surfaces

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Differentiate between DoS and DDoS attacks and explain amplification techniques
- Describe on-path (man-in-the-middle) attacks and how they intercept communications
- Explain ARP poisoning and its role in network attacks
- Identify Layer 2 attacks including MAC flooding, MAC spoofing, and VLAN hopping
- Describe DNS-based attacks (poisoning, hijacking, tunneling)
- Recognize wireless network attacks (evil twin, rogue AP, deauthentication)
- Explain replay attacks and session hijacking
- Apply appropriate mitigations for each attack category

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Network Attacks" (15 min)
- **PowerCert:** "DoS vs DDoS Attacks Explained" (8 min)
- **NetworkChuck:** "Man in the Middle Attack Explained" (12 min)

---

## Introduction

October 21, 2016. Twitter goes down. Then Netflix. Then Reddit, Spotify, and dozens of other major websites. Users across the Eastern United States can't access half the internet.

The attack wasn't targeting these websites directly. It targeted Dyn, a major DNS provider. Without DNS resolution, domain names couldn't translate to IP addresses. The internet still worked—but nobody could find anything.

The weapon? A botnet called Mirai, composed of compromised IoT devices—security cameras, DVRs, routers. Hundreds of thousands of devices, each sending traffic to Dyn's servers. The combined flood overwhelmed their capacity. This was a Distributed Denial of Service (DDoS) attack at massive scale.

Network-based attacks exploit how networks function. They don't need malware on your computer. They don't need you to click anything. They attack the infrastructure that connects systems—the protocols, the devices, the communication channels themselves.

Understanding these attacks reveals why network security controls exist. Firewalls, IDS/IPS, network segmentation, encryption—all respond to specific network attack techniques. You can't defend what you don't understand.

---

## Denial of Service (DoS) Attacks

DoS attacks aim to make systems or services unavailable to legitimate users by overwhelming resources or exploiting vulnerabilities.

### DoS vs. DDoS

| Aspect | DoS | DDoS |
|--------|-----|------|
| Source | Single system | Multiple distributed systems |
| Scale | Limited by one system's bandwidth | Massive combined bandwidth |
| Difficulty | Easier to execute | Requires botnet or coordination |
| Mitigation | Block single source | Much harder to filter |
| Detection | Single source obvious | Traffic from many legitimate-looking sources |

**DoS:** One attacker, one target. Limited by attacker's resources.

**DDoS:** Thousands of systems attack simultaneously. Combined bandwidth overwhelms any single target. Often uses botnets (networks of compromised systems).

### Attack Categories

**Volumetric Attacks**

Flood target with massive traffic volume, consuming bandwidth.

- **UDP flood:** Send massive UDP packets to random ports. Target must process each packet to determine no application is listening.
- **ICMP flood (ping flood):** Overwhelm with ping requests. Target wastes resources responding.
- **Amplification attacks:** Small request generates large response directed at victim.

**Protocol Attacks**

Exploit weaknesses in network protocols to consume server resources.

- **SYN flood:** Send TCP SYN packets but never complete handshake. Server holds half-open connections, exhausting connection table.
- **Smurf attack:** Send ICMP request to broadcast address with spoofed source (victim's IP). All hosts respond to victim simultaneously.
- **Fragmentation attacks:** Send malformed fragmented packets that crash systems trying to reassemble them.

**Application Layer Attacks**

Target specific applications with legitimate-looking requests.

- **HTTP flood:** Send massive HTTP requests to web server. Each request requires server processing.
- **Slowloris:** Open many connections, send partial HTTP requests slowly, never completing. Ties up server connections.
- **DNS query flood:** Overwhelm DNS server with queries.

### Amplification Attacks

Amplification exploits services that respond with much more data than the request.

**How it works:**
1. Attacker sends small request to vulnerable service
2. Request has spoofed source IP (victim's address)
3. Service sends large response to victim
4. Attacker bandwidth is multiplied

**Common amplification vectors:**

| Protocol | Amplification Factor | Port |
|----------|---------------------|------|
| DNS | 28-54x | 53 |
| NTP | 556x | 123 |
| SSDP | 30x | 1900 |
| Memcached | 51,000x | 11211 |

**Example:** 1 Mbps attack bandwidth with 50x amplification = 50 Mbps hitting victim.

**Memcached amplification:** In 2018, GitHub survived a 1.35 Tbps DDoS—largest ever recorded at the time—using memcached amplification.

### DoS Mitigations

- **Rate limiting:** Restrict requests per source
- **SYN cookies:** Avoid storing half-open connections
- **Blackhole routing:** Send attack traffic to null route
- **DDoS mitigation services:** Cloudflare, Akamai, AWS Shield
- **Anycast:** Distribute traffic across multiple data centers
- **Ingress filtering:** Block spoofed source addresses at network edge

---

## On-Path Attacks (Man-in-the-Middle)

On-path attacks position the attacker between two communicating parties, allowing interception, modification, or injection of data.

### How On-Path Attacks Work

```
Normal communication:
[Client] <-----> [Server]

On-path attack:
[Client] <-----> [Attacker] <-----> [Server]
```

The attacker intercepts all traffic, can read it (if unencrypted), modify it, or inject new data. Both parties believe they're communicating directly.

### Attack Techniques

**ARP Poisoning/Spoofing**

Exploit ARP (Address Resolution Protocol) to redirect traffic through attacker.

1. ARP maps IP addresses to MAC addresses on local network
2. ARP has no authentication—any device can claim any IP
3. Attacker sends fake ARP replies: "I'm the gateway" (but with attacker's MAC)
4. Victims update ARP cache, send traffic to attacker
5. Attacker forwards to real gateway (to avoid detection)

**Result:** All victim traffic flows through attacker's machine.

**DNS Spoofing/Poisoning**

Provide false DNS responses to redirect victims to attacker-controlled servers.

- **Local DNS spoofing:** Respond to DNS queries before legitimate server
- **DNS cache poisoning:** Corrupt DNS server's cache with false records
- **DNS hijacking:** Compromise DNS server or modify DNS settings

**Result:** Victim types "bank.com" but reaches attacker's fake bank site.

**SSL Stripping**

Downgrade HTTPS connections to HTTP.

1. Victim requests http://bank.com
2. Bank redirects to https://bank.com
3. Attacker intercepts redirect, connects to bank via HTTPS
4. Attacker serves victim plain HTTP version
5. Victim sees HTTP (no padlock) but may not notice

**Result:** Attacker sees all "encrypted" traffic in plaintext.

**Session Hijacking**

Steal or predict session tokens to take over authenticated sessions.

- Capture session cookies via network sniffing
- Predict weak session IDs
- Cross-site scripting (XSS) to steal cookies
- Session fixation (force victim to use known session ID)

**Result:** Attacker accesses victim's authenticated session without credentials.

### Replay Attacks

Capture valid data transmission and retransmit it later.

**Example:** Attacker captures authentication token. Later replays it to authenticate as victim.

**Why it works:** If system only checks "is this token valid?" without checking "have I seen this before?" or "is this timely?", replay succeeds.

**Defenses:**
- Timestamps in authenticated messages
- Sequence numbers
- One-time tokens/nonces
- Challenge-response protocols

### On-Path Mitigations

- **Encryption:** TLS/HTTPS prevents reading intercepted traffic
- **Certificate validation:** Detect fake certificates
- **HSTS:** Force HTTPS, prevent SSL stripping
- **Static ARP entries:** Prevent ARP poisoning (limited scalability)
- **Dynamic ARP Inspection (DAI):** Validate ARP on switches
- **DNSSEC:** Authenticate DNS responses
- **VPN:** Encrypt all traffic through tunnel

---

## Layer 2 Attacks

Layer 2 (Data Link) attacks target switches and the local network segment.

### MAC Flooding

Overwhelm switch's MAC address table to force it into fail-open mode.

**How switches work:**
- Learn MAC addresses from incoming frames
- Store in MAC address table (CAM table)
- Forward frames only to correct port

**MAC flooding attack:**
1. Attacker sends thousands of frames with random source MACs
2. Switch's MAC table fills up
3. Switch can't learn new addresses
4. Switch floods all traffic to all ports (like a hub)
5. Attacker sees all network traffic

**Mitigation:** Port security (limit MACs per port), MAC address filtering.

### MAC Spoofing

Change attacker's MAC address to impersonate another device.

**Uses:**
- Bypass MAC-based access controls
- Impersonate trusted device
- Avoid detection/attribution
- Circumvent network restrictions

**Mitigation:** 802.1X authentication (authenticate users, not just MACs), NAC.

### VLAN Hopping

Access traffic on VLANs the attacker shouldn't reach.

**Switch Spoofing:**
1. Attacker configures system to act like a switch
2. Negotiates trunk link with actual switch
3. Gains access to all VLANs on trunk

**Mitigation:** Disable DTP (Dynamic Trunking Protocol), explicitly configure access ports.

**Double Tagging:**
1. Attacker on native VLAN sends frame with two 802.1Q tags
2. First switch strips outer tag (native VLAN)
3. Inner tag remains, routing frame to target VLAN
4. Frame reaches device on different VLAN

**Mitigation:** Change native VLAN to unused VLAN, tag native VLAN traffic.

### STP Attacks

Manipulate Spanning Tree Protocol to intercept traffic or cause disruption.

**STP purpose:** Prevent Layer 2 loops by blocking redundant paths.

**Attack:** Send superior BPDU (Bridge Protocol Data Unit) to become root bridge. Traffic now flows through attacker.

**Mitigation:** BPDU Guard (block unexpected BPDUs), Root Guard (prevent unauthorized root bridges).

---

## DNS Attacks

DNS is critical infrastructure—compromise DNS, control where users go.

### DNS Poisoning/Cache Poisoning

Inject false records into DNS cache.

**Attack flow:**
1. Attacker races to respond to DNS query before legitimate server
2. If attacker's response arrives first with correct transaction ID, it's accepted
3. False record cached, served to future queries
4. All users of that DNS server misdirected

**Kaminsky attack (2008):** Technique allowing reliable DNS cache poisoning. Led to emergency patches across the internet.

### DNS Hijacking

Take control of DNS resolution through various means.

**Methods:**
- Compromise DNS server directly
- Change DNS settings on router (via compromise or default credentials)
- Modify local hosts file
- Register expired domain that's still in caches
- BGP hijacking of DNS provider's IP space

### DNS Tunneling

Use DNS queries/responses to exfiltrate data or establish command-and-control.

**How it works:**
1. Attacker controls authoritative DNS server for domain
2. Malware encodes data in DNS queries (e.g., data.evil.com)
3. DNS queries traverse firewalls (port 53 usually allowed)
4. Responses carry commands back to malware

**Why it works:** DNS is allowed through most firewalls. DNS traffic often not inspected deeply.

**Detection:** Unusual DNS query patterns, long domain names, high query volume.

### DNS Attack Mitigations

- **DNSSEC:** Cryptographically sign DNS records
- **DNS over HTTPS (DoH):** Encrypt DNS queries
- **DNS over TLS (DoT):** Encrypt DNS queries
- **DNS filtering:** Block known malicious domains
- **Monitor DNS traffic:** Detect tunneling, unusual patterns
- **Use trusted DNS:** Reputable providers with security focus

---

## Wireless Attacks

Wireless networks present unique attack surfaces—signals travel through air, accessible to anyone in range.

### Evil Twin

Fake access point mimicking legitimate network.

**Attack:**
1. Attacker creates AP with same SSID as target network
2. May use stronger signal to attract victims
3. Victims connect to attacker's AP
4. All traffic flows through attacker
5. Can serve fake login pages, capture credentials

**Hotel/coffee shop scenario:** Attacker creates "Free Hotel WiFi" near hotel. Guests connect to attacker instead of legitimate network.

### Rogue Access Point

Unauthorized AP connected to corporate network.

**Differs from evil twin:** Rogue AP is connected to legitimate network (often by employee for convenience). Evil twin impersonates legitimate network.

**Risk:** Bypasses wireless security controls. Provides network access to anyone in range.

**Detection:** Wireless intrusion detection, regular site surveys, NAC.

### Deauthentication Attack

Force devices to disconnect from access point.

**How it works:**
1. 802.11 management frames are typically unauthenticated
2. Attacker sends forged deauth frames appearing to come from AP
3. Client disconnects
4. Can force reconnection to evil twin
5. Can capture WPA handshake for offline cracking

**Mitigation:** 802.11w (Protected Management Frames), WPA3 requires PMF.

### WPA/WPA2 Cracking

Attempt to recover wireless network password.

**Methods:**
- Capture 4-way handshake, crack offline (dictionary/brute force)
- PMKID attack (capture from AP without client handshake)
- WPS PIN brute force (if WPS enabled)

**WPA3 improvement:** SAE (Simultaneous Authentication of Equals) resists offline dictionary attacks.

### Bluetooth Attacks

**Bluejacking:** Sending unsolicited messages to Bluetooth devices. Nuisance, not serious threat.

**Bluesnarfing:** Unauthorized access to information on Bluetooth device. Steal contacts, messages, files.

**Bluebugging:** Taking control of Bluetooth device. Make calls, send messages, eavesdrop.

**Mitigation:** Disable Bluetooth when not needed, non-discoverable mode, update firmware.

### Wireless Attack Mitigations

- **WPA3/WPA2-Enterprise:** Strong encryption and authentication
- **802.1X:** Require authentication before network access
- **Wireless IDS/IPS (WIDS/WIPS):** Detect rogue APs and attacks
- **Disable WPS:** Vulnerable to brute force
- **Protected Management Frames (802.11w):** Prevent deauth attacks
- **Site surveys:** Detect rogue access points
- **Guest network isolation:** Separate guest traffic from corporate
- **VPN:** Encrypt traffic even on untrusted wireless

---

## Credential Attacks on Networks

Network position enables credential theft.

### Pass-the-Hash

Use captured password hash to authenticate without knowing actual password.

**How it works:**
1. Attacker extracts password hash from compromised system
2. Many protocols authenticate using hash (NTLM)
3. Attacker presents hash directly—no need to crack it
4. Server validates hash, grants access

**Why it works:** The hash IS the credential for NTLM authentication.

**Mitigation:** Credential Guard, limit NTLM usage, privilege separation.

### Credential Relay (NTLM Relay)

Relay authentication from victim to another service.

**Attack flow:**
1. Attacker triggers victim to authenticate to attacker's machine
2. Attacker relays that authentication to real server
3. Server sees valid authentication, grants access
4. Attacker now has session on server as victim

**Mitigation:** SMB signing, EPA (Extended Protection for Authentication), disable NTLM where possible.

### Kerberoasting

Extract service account password hashes for offline cracking.

**How it works:**
1. Any domain user can request service tickets (TGS)
2. Service tickets are encrypted with service account's password hash
3. Attacker requests tickets for accounts with SPNs
4. Cracks tickets offline to recover service account passwords
5. Service accounts often have excessive privileges

**Mitigation:** Strong service account passwords, managed service accounts, monitor for mass TGS requests.

---

## Key Exam Tips

🎯 **DoS vs. DDoS:** DoS = single source; DDoS = distributed (many sources). DDoS much harder to mitigate.

🎯 **Amplification:** Small request → large response to spoofed victim IP. Know DNS, NTP, memcached as common vectors.

🎯 **On-path attack:** New name for man-in-the-middle. Attacker between two communicating parties.

🎯 **ARP poisoning:** Exploits lack of ARP authentication. Attacker claims to be gateway. Mitigation: DAI (Dynamic ARP Inspection).

🎯 **VLAN hopping:** Switch spoofing (negotiate trunk) and double tagging (exploit native VLAN). Mitigation: disable DTP, change native VLAN.

🎯 **MAC flooding:** Overflow CAM table → switch acts like hub. Mitigation: port security.

🎯 **Evil twin vs. rogue AP:** Evil twin impersonates legitimate network. Rogue AP is unauthorized AP on corporate network.

🎯 **Deauth attack:** Forged management frames disconnect clients. Mitigation: 802.11w (PMF), WPA3.

🎯 **DNS tunneling:** Exfiltrate data through DNS queries. Works because DNS usually allowed through firewalls.

🎯 **Replay attack:** Capture and retransmit valid authentication. Mitigation: timestamps, nonces, sequence numbers.

---

## Key Takeaways

- [ ] DoS attacks overwhelm single target; DDoS uses multiple distributed sources
- [ ] Amplification attacks exploit protocols returning large responses to small requests (DNS, NTP, memcached)
- [ ] SYN flood exhausts connection tables with half-open connections
- [ ] On-path (MITM) attacks intercept communications between two parties
- [ ] ARP poisoning exploits lack of authentication in ARP protocol
- [ ] SSL stripping downgrades HTTPS to HTTP for interception
- [ ] Replay attacks retransmit captured valid data; mitigated by timestamps and nonces
- [ ] MAC flooding overflows switch CAM table, forcing hub behavior
- [ ] VLAN hopping (switch spoofing, double tagging) accesses unauthorized VLANs
- [ ] DNS poisoning injects false records; DNSSEC provides authentication
- [ ] DNS tunneling uses DNS queries to exfiltrate data through firewalls
- [ ] Evil twin mimics legitimate wireless network; rogue AP is unauthorized AP on network
- [ ] Deauthentication attacks force wireless disconnection; 802.11w/WPA3 mitigates
- [ ] Pass-the-hash uses captured hashes directly without cracking

---

## Check Your Understanding

**1. An organization experiences intermittent website outages. Analysis shows traffic floods from thousands of IP addresses worldwide, with small DNS requests generating large responses directed at their servers. What type of attack is this?**

<details>
<summary>Show Answer</summary>
<strong>DDoS amplification attack using DNS.</strong>

<strong>Indicators:</strong>
- Thousands of source IPs = Distributed (DDoS)
- Small requests, large responses = Amplification
- DNS specifically mentioned = DNS amplification

<strong>How it works:</strong>
1. Attacker sends DNS queries to open resolvers
2. Queries have spoofed source IP (victim's IP)
3. DNS servers send large responses to victim
4. Attacker's bandwidth multiplied 28-54x

<strong>Mitigations:</strong>
- DDoS mitigation service (Cloudflare, AWS Shield)
- Rate limiting
- Ingress filtering (BCP38) at ISP level blocks spoofed sources
- Close open DNS resolvers

<strong>Note:</strong> Organization can't stop the reflection—mitigation must absorb or filter attack traffic.
</details>

**2. A penetration tester captures network traffic and observes their test workstation receiving traffic destined for other machines on the subnet. What likely happened, and what attack technique achieves this?**

<details>
<summary>Show Answer</summary>
<strong>MAC flooding attack caused switch to fail open.</strong>

<strong>What happened:</strong>
1. Attacker flooded switch with frames having random source MACs
2. Switch's CAM (MAC address) table filled up
3. Switch couldn't learn new legitimate MAC addresses
4. Switch began flooding all traffic to all ports (hub mode)
5. Attacker now sees all traffic on segment

<strong>Why switches normally prevent this:</strong>
- Switches learn which MAC is on which port
- Traffic forwarded only to correct port
- Other ports don't see traffic not destined for them

<strong>Mitigations:</strong>
- Port security: Limit number of MACs per port
- 802.1X: Authenticate before allowing traffic
- Sticky MAC: Learn and lock allowed MACs
- VLAN segmentation: Limit broadcast domain size
</details>

**3. An employee connects to "Corporate_WiFi" at a coffee shop near the office and enters domain credentials on a login page. Later, their account is compromised. What attack occurred?**

<details>
<summary>Show Answer</summary>
<strong>Evil twin attack with credential harvesting.</strong>

<strong>Attack sequence:</strong>
1. Attacker set up AP with SSID "Corporate_WiFi" (same as company network)
2. AP positioned near office, stronger signal than real network
3. Employee's device connected to attacker's AP
4. Attacker presented fake login page
5. Employee entered credentials thinking it was corporate portal
6. Attacker captured credentials

<strong>Why it succeeded:</strong>
- SSID matched expected network name
- Location seemed appropriate (near office)
- Login page looked legitimate
- No certificate validation on fake page

<strong>Mitigations:</strong>
- 802.1X with certificates (validates AP authenticity)
- User training: verify certificates, use VPN
- WIDS to detect evil twins near facilities
- Avoid auto-connect to known SSIDs
</details>

**4. After compromising a workstation, an attacker wants to intercept traffic between other internal machines and the default gateway. They haven't compromised the switch or gateway. What technique would work?**

<details>
<summary>Show Answer</summary>
<strong>ARP poisoning/spoofing.</strong>

<strong>How it works from compromised workstation:</strong>
1. Attacker sends gratuitous ARP to subnet: "192.168.1.1 (gateway) is at [attacker's MAC]"
2. Other machines update ARP cache with false mapping
3. Traffic destined for gateway sent to attacker instead
4. Attacker forwards to real gateway (to avoid detection)
5. Return traffic: poison gateway's ARP cache too

<strong>Result:</strong> All traffic between victims and gateway flows through attacker's machine (on-path position).

<strong>Why it works:</strong>
- ARP has no authentication
- Hosts accept ARP replies even without asking
- No switch or gateway compromise needed—just network access

<strong>Mitigations:</strong>
- Dynamic ARP Inspection (DAI) on switch
- Static ARP entries (doesn't scale)
- Network segmentation
- Encryption (attacker sees traffic but can't read it)
</details>

**5. An attacker on VLAN 10 wants to send traffic to a server on VLAN 20 without going through a router. The native VLAN is VLAN 1. How could they attempt this?**

<details>
<summary>Show Answer</summary>
<strong>VLAN hopping via double tagging attack.</strong>

<strong>Attack requirements:</strong>
- Attacker on same VLAN as native VLAN, OR
- Attacker can get frames to trunk port

<strong>Attack process:</strong>
1. Attacker crafts frame with two 802.1Q tags:
   - Outer tag: Native VLAN (VLAN 1)
   - Inner tag: Target VLAN (VLAN 20)
2. First switch sees outer tag matches native VLAN, strips it
3. Frame forwarded across trunk with inner tag (VLAN 20)
4. Receiving switch sees VLAN 20 tag, delivers to that VLAN
5. Frame reaches VLAN 20 without router

<strong>Limitations:</strong>
- One-way only (responses go through router normally)
- Requires being on native VLAN
- Only works across trunks

<strong>Mitigations:</strong>
- Change native VLAN to unused VLAN
- Explicitly tag native VLAN traffic
- Disable DTP, manually configure trunks
- Use private VLANs
</details>

**6. Security analysis shows large volumes of DNS queries with unusually long subdomain names going to a single external domain. Normal DNS queries don't show this pattern. What might be occurring?**

<details>
<summary>Show Answer</summary>
<strong>DNS tunneling—likely data exfiltration or C2 communication.</strong>

<strong>Indicators:</strong>
- High volume of DNS queries
- Unusually long subdomain names (encoded data)
- Single external domain (attacker's server)
- Pattern differs from normal DNS traffic

<strong>How DNS tunneling works:</strong>
1. Malware encodes data in DNS queries: `[encoded-data].evil.com`
2. Query goes to attacker's authoritative DNS server for evil.com
3. Attacker extracts encoded data from subdomain
4. Response contains encoded commands
5. Firewall allows DNS (port 53)—doesn't inspect content

<strong>Why attackers use it:</strong>
- DNS almost always allowed outbound
- Often not deeply inspected
- Can bypass proxy requirements
- Works even in restricted networks

<strong>Detection/mitigation:</strong>
- DNS query analysis (length, entropy, volume)
- DNS filtering services
- Monitor for queries to unusual domains
- Restrict DNS to internal servers only
- Deep packet inspection of DNS
</details>

**7. An attacker captures a user's Kerberos TGT (Ticket Granting Ticket) hash from memory on a compromised workstation. How might they use this, and what is the attack called?**

<details>
<summary>Show Answer</summary>
<strong>Pass-the-Ticket (or Overpass-the-Hash with TGT).</strong>

<strong>With captured TGT:</strong>
1. TGT allows requesting service tickets without password
2. Attacker injects TGT into their session
3. Requests service tickets for any service user can access
4. Accesses services as that user until TGT expires
5. No password cracking required

<strong>Related attacks:</strong>
- **Pass-the-Hash:** Use NTLM hash directly for NTLM authentication
- **Pass-the-Ticket:** Use captured Kerberos tickets
- **Golden Ticket:** Forge TGT with stolen krbtgt hash (domain-wide access)
- **Silver Ticket:** Forge service ticket with stolen service hash

<strong>Why this works:</strong>
- Kerberos uses tickets as bearer tokens
- Whoever has valid ticket can use it
- No re-authentication required during ticket lifetime

<strong>Mitigations:</strong>
- Credential Guard (protect secrets in memory)
- Privileged access workstations
- Short ticket lifetimes
- Monitor for anomalous ticket usage
</details>

**8. During a security assessment, testers discover they can connect to trunk ports on the switch by configuring their laptop to negotiate DTP. What vulnerability is this, and how should it be fixed?**

<details>
<summary>Show Answer</summary>
<strong>VLAN hopping vulnerability via switch spoofing.</strong>

<strong>The problem:</strong>
- DTP (Dynamic Trunking Protocol) enabled on ports
- Ports will negotiate trunk mode with any device claiming to be a switch
- Attacker's laptop negotiates trunk
- Attacker gains access to all VLANs on trunk

<strong>Fixes:</strong>
```
! On all access ports:
switchport mode access
switchport nonegotiate
switchport access vlan [appropriate VLAN]

! On trunk ports (where needed):
switchport mode trunk
switchport nonegotiate
switchport trunk allowed vlan [specific VLANs]
```

<strong>Additional hardening:</strong>
- Disable unused ports
- Put unused ports in unused VLAN
- Use port security
- Implement 802.1X

<strong>Key principle:</strong> Never rely on dynamic negotiation for security-relevant settings. Explicitly configure everything.
</details>

**9. An attacker sets up a system to respond to authentication requests before the legitimate server. When a user tries to access a file share, the attacker captures the authentication attempt. What happens next in an NTLM relay attack?**

<details>
<summary>Show Answer</summary>
<strong>NTLM relay attack—attacker relays captured authentication to another service.</strong>

<strong>Attack sequence:</strong>
1. Attacker tricks victim into authenticating to attacker's machine (via link, file share UNC path, etc.)
2. Attacker receives victim's NTLM authentication attempt
3. Attacker immediately relays this to real server (different target)
4. Target server sees valid NTLM auth from victim
5. Target grants attacker access as victim
6. Attacker now has session on target with victim's privileges

<strong>Why it works:</strong>
- NTLM authentication doesn't bind to specific service
- Authentication captured for Service A works for Service B
- Attacker acts as proxy between victim and real target

<strong>What attacker gains:</strong>
- Access to other servers victim can access
- Can access file shares, email, other services
- Privilege escalation if victim has admin rights

<strong>Mitigations:</strong>
- SMB signing (prevents relay of SMB auth)
- Extended Protection for Authentication
- Disable NTLM, use Kerberos
- Network segmentation
</details>

**10. A wireless network uses WPA2-Personal. An attacker captures the 4-way handshake when a device connects. What can they do with this, and how does WPA3 improve the situation?**

<details>
<summary>Show Answer</summary>
<strong>WPA2 weakness: Offline dictionary attack possible.</strong>

<strong>With captured handshake:</strong>
1. Handshake contains enough information to verify password guesses
2. Attacker runs dictionary/brute force attack offline
3. Tests passwords against captured handshake data
4. No interaction with network needed (unlimited attempts)
5. If password is weak, it will be cracked

<strong>WPA3 improvement (SAE - Simultaneous Authentication of Equals):</strong>
- Each password guess requires network interaction
- Can't attack offline—must try against live AP
- AP can rate-limit attempts
- Each session has unique encryption keys (forward secrecy)
- Even if password eventually compromised, past sessions protected

<strong>WPA2 mitigations (if WPA3 not available):</strong>
- Very strong, long passwords (15+ characters, random)
- Use WPA2-Enterprise (unique credentials per user)
- Disable WPS
- Regular password rotation

<strong>Key difference:</strong> WPA2-PSK allows offline attack with captured handshake. WPA3-SAE requires online interaction for each guess.
</details>

---

## Next Lesson Preview

In **Lesson 10: Application and Password Attacks**, we'll examine attacks targeting applications and authentication systems. You'll learn about injection attacks (SQL, command, LDAP), cross-site scripting (XSS), cross-site request forgery (CSRF), buffer overflows, and password attack techniques including brute force, dictionary attacks, password spraying, and credential stuffing.

---

✅ **Lesson 9 Complete**

**Progress:** 9 of 30 lessons complete (30%)

---

*Next up: Lesson 10 - Application and Password Attacks*