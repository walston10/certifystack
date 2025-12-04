# Lab 12: TCP/IP Addressing and Subnetting

**Tier:** 1 (Universal)
**Time:** 35-40 minutes
**Exam Objectives:** 2.6 - Compare and contrast common network configuration concepts

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the three private IP address ranges defined in RFC 1918, and why can't they be used on the public internet?**

2. **If a computer has an IP address of 169.254.x.x, what does this indicate and what should you check?**

3. **Explain what a subnet mask does and why 255.255.255.0 is commonly used.**

4. **What is the purpose of a default gateway, and what happens if it's configured incorrectly?**

5. **What is the difference between CIDR notation /24 and /16 in terms of available host addresses?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses your network and calculations** - Master IP addressing through hands-on practice.

---

#### Activity A: Document Your IP Configuration

**Goal:** Understand your current network configuration.

**Get your IP configuration:**

**Windows:**
```
ipconfig /all
```

**Mac:**
```
ifconfig
# or
networksetup -getinfo "Wi-Fi"
```

**Linux:**
```
ip addr
# or
ifconfig
```

**Document your settings:**

| Setting | Your Value |
|---------|------------|
| IPv4 Address | |
| Subnet Mask | |
| Default Gateway | |
| DHCP Enabled | [ ] Yes [ ] No |
| DHCP Server | |
| DNS Server(s) | |
| MAC Address | |

**Additional devices (check phone, tablet, etc.):**

| Device | IP Address | Same Subnet? |
|--------|------------|--------------|
| Computer | | N/A |
| Phone | | [ ] Yes [ ] No |
| Tablet | | [ ] Yes [ ] No |
| Smart TV | | [ ] Yes [ ] No |
| Other: | | [ ] Yes [ ] No |

**Questions:**

1. Do all your devices have similar IP addresses? _______

2. What's the pattern you notice? _______________________

3. What's your network address (the common part)? _______________________

---

#### Activity B: IP Address Classes

**Goal:** Identify IP address classes and their characteristics.

**IP Address Class Reference:**

| Class | First Octet Range | Default Mask | Networks | Hosts per Network |
|-------|-------------------|--------------|----------|-------------------|
| A | 1-126 | /8 | | |
| B | 128-191 | /16 | | |
| C | 192-223 | /24 | | |
| D | 224-239 | N/A | Multicast | |
| E | 240-255 | N/A | Experimental | |

**Classify these IP addresses:**

| IP Address | Class | Default Mask | Public or Private? |
|------------|-------|--------------|-------------------|
| 10.0.0.1 | | | |
| 172.16.50.1 | | | |
| 192.168.1.100 | | | |
| 8.8.8.8 | | | |
| 150.100.50.25 | | | |
| 172.32.1.1 | | | |
| 192.0.2.1 | | | |
| 127.0.0.1 | | | |

**Special IP addresses:**

| Address/Range | Name | Purpose |
|---------------|------|---------|
| 127.0.0.1 | | |
| 0.0.0.0 | | |
| 255.255.255.255 | | |
| 169.254.0.0/16 | | |

---

#### Activity C: Private IP Address Ranges

**Goal:** Memorize the RFC 1918 private address ranges.

**Complete the private IP ranges:**

| Class | Private Range Start | Private Range End | CIDR | Number of Addresses |
|-------|---------------------|-------------------|------|---------------------|
| A | 10.0.0.0 | | /8 | |
| B | 172.16.0.0 | | /12 | |
| C | 192.168.0.0 | | /16 | |

**Practice: Is this IP public or private?**

| IP Address | Public or Private? | Why? |
|------------|-------------------|------|
| 10.255.255.1 | | |
| 172.15.0.1 | | |
| 172.16.0.1 | | |
| 172.31.255.255 | | |
| 172.32.0.1 | | |
| 192.168.0.1 | | |
| 192.169.1.1 | | |
| 8.8.4.4 | | |

**Memory trick for Class B private range:**

172.16.0.0 to 172.31.255.255

The second octet ranges from 16 to 31. Write it out 3 times:

1. 172._____ to 172._____
2. 172._____ to 172._____
3. 172._____ to 172._____

---

#### Activity D: Binary and Decimal Conversion

**Goal:** Convert between binary and decimal for IP addressing.

**Powers of 2 (memorize these!):**

| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Binary to Decimal practice:**

| Binary | Calculation | Decimal |
|--------|-------------|---------|
| 11111111 | 128+64+32+16+8+4+2+1 | 255 |
| 11000000 | | |
| 10101000 | | |
| 00000001 | | |
| 11111110 | | |
| 10000000 | | |
| 11110000 | | |
| 00001111 | | |

**Decimal to Binary practice:**

| Decimal | Binary |
|---------|--------|
| 255 | 11111111 |
| 192 | |
| 168 | |
| 1 | |
| 128 | |
| 224 | |
| 240 | |
| 252 | |

**Convert full IP addresses:**

| Decimal IP | Binary |
|------------|--------|
| 192.168.1.1 | ________.________.________.________ |
| 10.0.0.1 | ________.________.________.________ |
| 172.16.0.1 | ________.________.________.________ |

---

#### Activity E: Subnet Masks and CIDR

**Goal:** Understand subnet masks and CIDR notation.

**Common subnet masks:**

| CIDR | Dotted Decimal | Binary | Usable Hosts |
|------|----------------|--------|--------------|
| /8 | 255.0.0.0 | | |
| /16 | 255.255.0.0 | | |
| /24 | 255.255.255.0 | | |
| /25 | | | |
| /26 | | | |
| /27 | | | |
| /28 | | | |
| /29 | | | |
| /30 | | | |

**Formula for usable hosts:**

```
Usable hosts = 2^(host bits) - 2
```

Why subtract 2? _________________________________________________

**Calculate host bits:**

| CIDR | Network Bits | Host Bits | Usable Hosts |
|------|--------------|-----------|--------------|
| /24 | 24 | 8 | 254 |
| /25 | 25 | | |
| /26 | 26 | | |
| /27 | 27 | | |
| /28 | 28 | | |
| /30 | 30 | | |

**Convert between formats:**

| CIDR | Dotted Decimal |
|------|----------------|
| /24 | |
| /16 | |
| /27 | |
| /29 | |

| Dotted Decimal | CIDR |
|----------------|------|
| 255.255.255.0 | |
| 255.255.0.0 | |
| 255.255.255.192 | |
| 255.255.255.248 | |

---

#### Activity F: Network and Broadcast Addresses

**Goal:** Calculate network and broadcast addresses.

**For IP 192.168.1.50/24:**

| Component | Value | How to Find |
|-----------|-------|-------------|
| IP Address | 192.168.1.50 | Given |
| Subnet Mask | | Convert /24 |
| Network Address | | IP AND mask (all host bits = 0) |
| Broadcast Address | | All host bits = 1 |
| First Usable Host | | Network + 1 |
| Last Usable Host | | Broadcast - 1 |
| Usable Hosts | | 2^host bits - 2 |

**Practice problems:**

**Problem 1: 10.0.0.100/8**

| Component | Value |
|-----------|-------|
| Subnet Mask | |
| Network Address | |
| Broadcast Address | |
| First Usable | |
| Last Usable | |
| Total Usable Hosts | |

**Problem 2: 172.16.50.25/16**

| Component | Value |
|-----------|-------|
| Subnet Mask | |
| Network Address | |
| Broadcast Address | |
| First Usable | |
| Last Usable | |
| Total Usable Hosts | |

**Problem 3: 192.168.10.200/26**

| Component | Value |
|-----------|-------|
| Subnet Mask | |
| Network Address | |
| Broadcast Address | |
| First Usable | |
| Last Usable | |
| Total Usable Hosts | |

---

#### Activity G: Subnetting Practice

**Goal:** Divide networks into subnets.

**Scenario: You have 192.168.1.0/24 and need 4 equal subnets.**

**Step 1:** How many bits to borrow?

To get 4 subnets: 2^n = 4, so n = ___ bits

**Step 2:** New subnet mask?

Original: /24
New: /____
Dotted decimal: _______________

**Step 3:** Subnet increment (block size)?

256 - last octet of mask = _____

**Step 4:** List the subnets:

| Subnet # | Network Address | First Usable | Last Usable | Broadcast | Hosts |
|----------|-----------------|--------------|-------------|-----------|-------|
| 1 | 192.168.1.0 | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |

**Another scenario: 10.0.0.0/8 needs to be divided into 256 subnets.**

How many bits to borrow? _____

New subnet mask: /_____

What is the new mask in dotted decimal? _______________

---

#### Activity H: IPv6 Basics

**Goal:** Understand IPv6 address format and types.

**IPv6 vs IPv4:**

| Feature | IPv4 | IPv6 |
|---------|------|------|
| Address length | 32 bits | bits |
| Notation | Dotted decimal | |
| Example | 192.168.1.1 | |
| Total addresses | ~4.3 billion | |

**IPv6 address format:**

Full form: 2001:0db8:0000:0000:0000:0000:0000:0001

**Shortening rules:**

1. Remove leading zeros in each group
2. Replace consecutive groups of zeros with ::  (only once)

**Shorten these IPv6 addresses:**

| Full Form | Shortened |
|-----------|-----------|
| 2001:0db8:0000:0000:0000:0000:0000:0001 | |
| fe80:0000:0000:0000:0000:0000:0000:0001 | |
| 2001:0db8:0000:0042:0000:0000:0000:0001 | |

**Expand these IPv6 addresses:**

| Shortened | Full Form |
|-----------|-----------|
| ::1 | |
| fe80::1 | |
| 2001:db8::1 | |

**IPv6 address types:**

| Type | Prefix | Purpose |
|------|--------|---------|
| Loopback | ::1 | |
| Link-local | fe80::/10 | |
| Global unicast | 2000::/3 | |
| Multicast | ff00::/8 | |

---

#### Activity I: APIPA and Troubleshooting

**Goal:** Recognize and troubleshoot IP configuration issues.

**APIPA (Automatic Private IP Addressing):**

Range: 169.254.___.___  to 169.254.___.___ 

**When does APIPA occur?**

_________________________________________________________________

**If you see 169.254.x.x, check these things:**

| Check | How to Verify | If Problem Found |
|-------|---------------|------------------|
| 1. DHCP server running? | | |
| 2. Network cable connected? | | |
| 3. Correct network/VLAN? | | |
| 4. Firewall blocking DHCP? | | |

**Troubleshooting scenario:**

A user's computer shows: IP 169.254.100.50, Mask 255.255.0.0

1. What does this indicate? _______________________

2. Can this computer reach the internet? _______

3. Can it communicate with other 169.254.x.x computers? _______

4. First troubleshooting steps:
   - _______________________
   - _______________________
   - _______________________

---

#### Activity J: Static IP Configuration

**Goal:** Understand when and how to configure static IPs.

**When to use static IP vs DHCP:**

| Scenario | Static or DHCP? | Why? |
|----------|-----------------|------|
| Regular workstation | | |
| Network printer | | |
| Server | | |
| Guest laptop | | |
| Router/switch | | |
| IP camera | | |
| Mobile phone | | |

**Configure a static IP (document steps for your OS):**

**Windows:**
1. Open: _______________________
2. Navigate to: _______________________
3. Select adapter: _______________________
4. Properties → _______________________
5. Enter: IP, Subnet, Gateway, DNS

**Information needed for static IP:**

| Setting | Must Know | How to Find |
|---------|-----------|-------------|
| IP Address | Choose unused IP | Check DHCP range, avoid conflicts |
| Subnet Mask | Match network | Copy from working device |
| Default Gateway | Router's IP | Usually .1 or .254 |
| DNS Server | ISP or public | 8.8.8.8, 1.1.1.1, or router |

**What happens if you configure:**

| Misconfiguration | Result |
|------------------|--------|
| Wrong subnet mask | |
| Wrong gateway | |
| Duplicate IP | |
| Gateway outside your subnet | |

---

#### Activity K: IP Configuration Commands

**Goal:** Master IP-related command-line tools.

**Essential commands:**

**View IP configuration:**

| OS | Command | What It Shows |
|----|---------|---------------|
| Windows | ipconfig | Basic IP info |
| Windows | ipconfig /all | Detailed IP info |
| Linux | ip addr | IP addresses |
| Linux | ip route | Routing table |
| Mac | ifconfig | IP addresses |

**DHCP commands:**

| Action | Windows | Linux |
|--------|---------|-------|
| Release IP | | |
| Renew IP | | |
| View DHCP lease | | |

**DNS commands:**

| Action | Windows | Linux/Mac |
|--------|---------|-----------|
| Flush DNS cache | | |
| View DNS cache | | |

**Practice these commands on your system:**

```
ipconfig /all
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

Document any interesting output:

_________________________________________________________________

---

#### Activity L: Network Connectivity Testing

**Goal:** Test connectivity at different layers.

**Connectivity test sequence:**

| Test | Command | What It Tests | Expected Result |
|------|---------|---------------|-----------------|
| 1. Loopback | ping 127.0.0.1 | TCP/IP stack | Reply |
| 2. Local IP | ping [your IP] | NIC config | Reply |
| 3. Gateway | ping [gateway] | Local network | Reply |
| 4. Remote IP | ping 8.8.8.8 | Internet (IP) | Reply |
| 5. Remote name | ping google.com | DNS resolution | Reply |

**Run this sequence and document:**

| Test | Command Used | Result | If Failed, Indicates |
|------|--------------|--------|---------------------|
| 1. Loopback | | [ ] Pass [ ] Fail | |
| 2. Local IP | | [ ] Pass [ ] Fail | |
| 3. Gateway | | [ ] Pass [ ] Fail | |
| 4. Remote IP | | [ ] Pass [ ] Fail | |
| 5. Remote name | | [ ] Pass [ ] Fail | |

**Troubleshooting guide:**

| If This Fails | Problem Is Likely |
|---------------|-------------------|
| Loopback fails | TCP/IP stack broken, reinstall |
| Local IP fails | NIC or driver issue |
| Gateway fails | Cable, switch, or gateway down |
| Remote IP fails | Router or ISP issue |
| Name fails, IP works | DNS configuration |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A user can ping 8.8.8.8 but cannot browse websites. What is the most likely cause, and what command would you use to troubleshoot?**

2. **Two computers on the same switch cannot communicate. Computer A has IP 192.168.1.50/24, Computer B has 192.168.2.50/24. Both have gateway 192.168.1.1. What's wrong?**

3. **A company is setting up a new branch office with 50 computers. They've been assigned the network 192.168.100.0/24. Is this sufficient? What would you recommend for the configuration?**

4. **An employee connects their laptop and gets IP address 169.254.45.100. Other computers on the same network work fine. What are the most likely causes specific to this laptop?**

---

## What You Learned Today

- ✅ Documented your network's IP configuration
- ✅ Classified IP addresses by class
- ✅ Memorized private IP address ranges
- ✅ Converted between binary and decimal
- ✅ Worked with subnet masks and CIDR notation
- ✅ Calculated network and broadcast addresses
- ✅ Practiced basic subnetting
- ✅ Understood IPv6 address format
- ✅ Recognized APIPA and troubleshooting steps
- ✅ Learned static IP configuration
- ✅ Mastered IP-related commands
- ✅ Tested network connectivity systematically

**Next Lab:** Common Network Protocols and Ports - memorizing the essential ports for the A+ exam.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 12: TCP/IP Addressing and Subnetting*