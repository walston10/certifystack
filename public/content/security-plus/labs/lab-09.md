# Lab 9: Network-Based Attacks

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 2.2 - Explain common threat vectors and attack surfaces

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between a DoS attack and a DDoS attack? Why is DDoS harder to defend against?**

2. **Explain how an on-path (man-in-the-middle) attack works. What can an attacker do once in this position?**

3. **What is ARP poisoning, and why is it effective on local networks?**

4. **How does DNS poisoning differ from DNS spoofing?**

5. **What is a replay attack, and how can it be prevented?**

---

## Section 2: Hands-On Activities

### Activity A: DoS/DDoS Attack Classification

**Goal:** Understand different types of denial of service attacks.

**DoS attack categories:**

| Category | How It Works | Example Attacks |
|----------|--------------|-----------------|
| Volumetric | | |
| Protocol | | |
| Application layer | | |

**Specific attack types:**

| Attack | Category | Target Layer | How It Works |
|--------|----------|--------------|--------------|
| SYN Flood | | | |
| UDP Flood | | | |
| ICMP Flood (Ping Flood) | | | |
| Smurf Attack | | | |
| HTTP Flood | | | |
| Slowloris | | | |
| DNS Amplification | | | |
| NTP Amplification | | | |
| Ping of Death | | | |
| Teardrop | | | |

**Amplification attacks explained:**

| Attack | Protocol | Amplification Factor | How It Works |
|--------|----------|---------------------|--------------|
| DNS Amplification | | | |
| NTP Amplification | | | |
| SSDP Amplification | | | |
| Memcached Amplification | | | |

**Why is amplification possible?**

_________________________________________________________________

---

### Activity B: Understanding the TCP Handshake and SYN Flood

**Goal:** Understand how SYN floods exploit the TCP handshake.

**Normal TCP three-way handshake:**

| Step | Client Sends | Server Responds | Connection State |
|------|--------------|-----------------|------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**SYN Flood attack:**

| Step | What Attacker Does | Server Response | Problem |
|------|-------------------|-----------------|---------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**Why SYN floods work:**

_________________________________________________________________

**SYN flood defenses:**

| Defense | How It Helps |
|---------|--------------|
| SYN cookies | |
| Increased backlog queue | |
| Reduced SYN-RECEIVED timeout | |
| Firewalls/IPS | |
| Rate limiting | |

---

### Activity C: On-Path (Man-in-the-Middle) Attacks

**Goal:** Understand MITM attack positioning and capabilities.

**MITM attack positioning methods:**

| Method | How Attacker Gets in Position | Where It Works |
|--------|------------------------------|----------------|
| ARP poisoning | | |
| DNS spoofing | | |
| Rogue Wi-Fi (Evil Twin) | | |
| BGP hijacking | | |
| SSL stripping | | |
| Rogue DHCP server | | |

**Once in position, attacker can:**

| Capability | Description | Example |
|------------|-------------|---------|
| Eavesdrop | | |
| Modify traffic | | |
| Inject content | | |
| Steal credentials | | |
| Session hijack | | |
| Downgrade encryption | | |

**MITM attack flow diagram:**

Normal communication:
```
[Client] <──────────────────────> [Server]
```

With MITM:
```
[Client] <────> [Attacker] <────> [Server]
```

**What the attacker sees/controls:**

| Traffic Direction | What Attacker Can Do |
|-------------------|---------------------|
| Client → Server | |
| Server → Client | |

---

### Activity D: ARP Poisoning Deep Dive

**Goal:** Understand ARP and how it's exploited.

**How ARP works normally:**

| Step | Action | Result |
|------|--------|--------|
| 1 | Device needs MAC for IP 192.168.1.1 | |
| 2 | Device broadcasts ARP request | |
| 3 | Owner of IP responds | |
| 4 | Requesting device | |

**ARP poisoning attack:**

| Step | Attacker Action | Effect |
|------|-----------------|--------|
| 1 | | |
| 2 | | |
| 3 | | |

**View your ARP cache:**

Open Command Prompt and run:
```
arp -a
```

| Interface | IP Address | MAC Address | Type |
|-----------|------------|-------------|------|
| | | | |
| | | | |
| | | | |

**What is the gateway's MAC address?** _______________________

**ARP poisoning defenses:**

| Defense | How It Works |
|---------|--------------|
| Static ARP entries | |
| Dynamic ARP Inspection (DAI) | |
| Port security | |
| VLANs | |
| Encryption (HTTPS, VPN) | |
| ARP monitoring tools | |

---

### Activity E: DNS Attacks

**Goal:** Understand various DNS attack types.

**DNS attack comparison:**

| Attack | Target | Method | Persistence |
|--------|--------|--------|-------------|
| DNS Spoofing | | | |
| DNS Poisoning | | | |
| DNS Hijacking | | | |
| DNS Tunneling | | | |

**DNS spoofing/poisoning flow:**

Normal DNS:
```
User asks: "What's the IP for bank.com?"
DNS returns: 93.184.216.34 (legitimate)
User connects to: 93.184.216.34 ✓
```

With DNS poisoning:
```
User asks: "What's the IP for bank.com?"
DNS returns: _________________ (attacker's IP)
User connects to: _________________ ✗
```

**Check your DNS settings:**

Windows Command Prompt:
```
ipconfig /all
```

| Setting | Your Value |
|---------|------------|
| DNS Servers | |
| Connection-specific DNS Suffix | |

**Flush your DNS cache:**
```
ipconfig /flushdns
```

**View DNS cache:**
```
ipconfig /displaydns
```

List a few cached entries:

| Record Name | Record Type | TTL | Data |
|-------------|-------------|-----|------|
| | | | |
| | | | |

**DNS security measures:**

| Measure | What It Protects Against |
|---------|-------------------------|
| DNSSEC | |
| DNS over HTTPS (DoH) | |
| DNS over TLS (DoT) | |
| DNS filtering | |
| Split DNS | |

---

### Activity F: Wireless Network Attacks

**Goal:** Understand attacks specific to wireless networks.

**Wireless attack types:**

| Attack | How It Works | Goal |
|--------|--------------|------|
| Evil Twin | | |
| Rogue Access Point | | |
| Deauthentication Attack | | |
| WPA/WPA2 Cracking | | |
| KRACK | | |
| Bluejacking | | |
| Bluesnarfing | | |
| Jamming | | |

**Evil Twin attack flow:**

| Step | Attacker Action |
|------|-----------------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

**Deauthentication attack purpose:**

Why would an attacker send deauth packets?

1. _________________________________________________________________

2. _________________________________________________________________

**Wireless attack defenses:**

| Defense | What It Prevents |
|---------|-----------------|
| WPA3 | |
| 802.1X/Enterprise auth | |
| Wireless IPS (WIPS) | |
| Protected Management Frames (802.11w) | |
| VPN on public Wi-Fi | |
| Verifying network authenticity | |

---

### Activity G: Layer 2 Attacks

**Goal:** Understand switch-level network attacks.

**Layer 2 attack types:**

| Attack | Target | Method | Impact |
|--------|--------|--------|--------|
| MAC Flooding | | | |
| MAC Spoofing | | | |
| VLAN Hopping | | | |
| STP Attack | | | |
| DHCP Starvation | | | |
| DHCP Spoofing | | | |

**MAC flooding explained:**

| Step | What Happens |
|------|--------------|
| 1 | Attacker floods switch with fake MAC addresses |
| 2 | |
| 3 | |
| 4 | |

**VLAN hopping methods:**

| Method | How It Works | Prevention |
|--------|--------------|------------|
| Switch spoofing | | |
| Double tagging | | |

**Layer 2 defenses:**

| Defense | What It Prevents |
|---------|-----------------|
| Port security | |
| DHCP snooping | |
| Dynamic ARP Inspection | |
| 802.1X port authentication | |
| Disable unused ports | |
| Native VLAN configuration | |
| BPDU guard | |

---

### Activity H: Replay Attacks

**Goal:** Understand replay attacks and prevention.

**How replay attacks work:**

| Step | Action |
|------|--------|
| 1 | Attacker captures valid authentication/transaction |
| 2 | |
| 3 | |

**Replay attack scenarios:**

| Scenario | What's Replayed | Impact |
|----------|-----------------|--------|
| Network authentication | | |
| Financial transaction | | |
| Door access system | | |
| API request | | |

**Replay attack prevention:**

| Countermeasure | How It Works |
|----------------|--------------|
| Timestamps | |
| Sequence numbers | |
| Nonces (number used once) | |
| Session tokens | |
| Challenge-response | |
| TLS/encryption | |

**Why encryption alone doesn't prevent replay:**

_________________________________________________________________

---

### Activity I: Network Attack Detection

**Goal:** Identify network attacks through indicators.

**Attack indicators:**

| Indicator | Possible Attack |
|-----------|-----------------|
| Extremely high bandwidth usage | |
| Many half-open TCP connections | |
| ARP table constantly changing | |
| Multiple devices with same MAC | |
| DNS queries to unusual domains | |
| Broadcast storms | |
| SSL certificate warnings | |
| Network extremely slow | |
| Gateway unreachable | |

**Using netstat for detection:**

Run in Command Prompt:
```
netstat -an
```

| What to Look For | Meaning |
|------------------|---------|
| Many SYN_SENT | |
| Many SYN_RECEIVED | |
| Many ESTABLISHED to one IP | |
| Many TIME_WAIT | |
| Connections to suspicious ports | |

**Check your current connections:**

```
netstat -an | find "ESTABLISHED"
```

Document a few legitimate connections:

| Local Address | Foreign Address | Likely Application |
|---------------|-----------------|-------------------|
| | | |
| | | |
| | | |

---

### Activity J: Attack Mitigation Mapping

**Goal:** Map attacks to defensive measures.

**Complete the defense matrix:**

| Attack | Primary Defenses | Detection Methods |
|--------|------------------|-------------------|
| DDoS | | |
| SYN Flood | | |
| ARP Poisoning | | |
| DNS Poisoning | | |
| Evil Twin | | |
| MAC Flooding | | |
| MITM | | |
| Replay | | |
| Deauth Attack | | |
| VLAN Hopping | | |

**Defense technologies:**

| Technology | Attacks It Mitigates |
|------------|---------------------|
| IDS/IPS | |
| Rate limiting | |
| Encryption (TLS) | |
| 802.1X | |
| DNSSEC | |
| Port security | |
| VPN | |
| CDN/DDoS protection | |
| Network segmentation | |

---

### Tier 2 Bonus: Network Analysis with Wireshark

> ⚠️ **Requires:** Wireshark (free, download from wireshark.org)
> **Note:** Only capture traffic on networks you own or have permission to monitor.

---

### Activity K: Packet Capture Basics

**Goal:** Use Wireshark to observe network traffic.

**Start a capture:**

1. Open Wireshark
2. Select your active network interface
3. Click Start (shark fin icon)
4. Generate some traffic (browse a website)
5. Stop capture after 30 seconds

**Filter for specific traffic:**

| Filter | What It Shows |
|--------|---------------|
| `http` | |
| `dns` | |
| `tcp.port == 443` | |
| `arp` | |
| `icmp` | |
| `tcp.flags.syn == 1` | |

**Observe a DNS query:**

Filter: `dns`

| Field | Value from Your Capture |
|-------|------------------------|
| Query name | |
| Query type | |
| Response IP | |
| Transaction ID | |

**Observe TCP handshake:**

Filter: `tcp.flags.syn == 1`

| Packet | Source | Destination | Flags |
|--------|--------|-------------|-------|
| 1 | | | SYN |
| 2 | | | SYN, ACK |
| 3 | | | ACK |

---

### Activity L: Identifying Attack Signatures

**Goal:** Recognize attack patterns in packet captures.

**What would each attack look like in Wireshark?**

| Attack | Filter | Characteristics |
|--------|--------|-----------------|
| ARP Spoofing | `arp` | |
| SYN Flood | `tcp.flags.syn == 1 && tcp.flags.ack == 0` | |
| DNS Spoofing | `dns` | |
| Ping Flood | `icmp` | |
| Port Scan | `tcp.flags.syn == 1` | |

**Analyze ARP traffic:**

Filter: `arp`

| Observation | Your Network |
|-------------|--------------|
| ARP requests from your device | |
| ARP replies received | |
| Any gratuitous ARP? | |
| Any duplicate IP warnings? | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company's website becomes unreachable. Initial investigation shows massive traffic from thousands of different IP addresses worldwide. What type of attack is this, and what immediate steps would you take?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Users report that when they visit your company's banking portal, they receive SSL certificate warnings. Some users clicked through and entered credentials anyway. What likely happened, and what's your response?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Your security tools detect that one workstation is sending ARP replies for the gateway IP address, but that workstation is not the gateway. What's happening, and how do you respond?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Differentiate DoS from DDoS and categorize attack types
- [ ] Explain how SYN floods exploit the TCP handshake
- [ ] Describe on-path (MITM) attack positioning and capabilities
- [ ] Explain ARP poisoning and its defenses
- [ ] Compare DNS spoofing, poisoning, and hijacking
- [ ] Identify wireless-specific attacks (evil twin, deauth)
- [ ] Understand Layer 2 attacks (MAC flooding, VLAN hopping)
- [ ] Explain replay attacks and prevention methods
- [ ] Map attacks to appropriate defenses

---

## What You Learned Today

- ✅ Classified DoS/DDoS attack types
- ✅ Analyzed TCP handshake and SYN flood
- ✅ Explored MITM positioning methods
- ✅ Examined ARP and DNS attacks
- ✅ Reviewed wireless attack vectors
- ✅ Studied Layer 2 switch attacks
- ✅ Understood replay attack prevention
- ✅ Mapped attacks to detection methods
- ✅ (Tier 2) Captured and analyzed packets with Wireshark

**Next Lab:** Application and Password Attacks - injection attacks, XSS, CSRF, and password cracking.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 9: Network-Based Attacks*