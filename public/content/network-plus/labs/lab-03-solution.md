# Lesson 3 Lab - Answer Key

**IP Addressing Fundamentals**

---

## Section 1: Concept Check

1. **c) 32 bits**
   - IPv4 = 32 bits total (4 octets × 8 bits each)
   - Written in dotted decimal: 192.168.1.1
   - Each octet is 8 bits (0-255 in decimal)

2. **b) 192.168.1.1**
   - This is a private IP address (RFC 1918)
   - 8.8.8.8 is Google's public DNS
   - 74.125.224.72 is a Google public IP
   - 127.0.0.1 is loopback (special, not private/public)

3. **b) 127.0.0.1**
   - Loopback address - always points to your own computer
   - Used for testing your network stack
   - Actually, entire 127.0.0.0/8 range is loopback

4. **a) Class A**
   - First octet 10 = Class A (1-126)
   - Also happens to be private (RFC 1918)

5. **c) DHCP failed and Windows assigned APIPA**
   - 169.254.x.x = APIPA (Automatic Private IP Addressing)
   - Windows/Mac assign this when they can't reach DHCP server
   - Link-local only - can't reach internet
   - Solution: Restart router, check network cable

---

## Section 2: Hands-On Activity

### Activity A: Binary Conversion Answers

#### Exercise 1: Decimal to Binary

**1. 168 to binary:**
```
128  64  32  16   8   4   2   1
 1    0   1   0   1   0   0   0

168 >= 128? YES (1) → 168-128 = 40
40 >= 64? NO (0)
40 >= 32? YES (1) → 40-32 = 8
8 >= 16? NO (0)
8 >= 8? YES (1) → 8-8 = 0
0 >= 4? NO (0)
0 >= 2? NO (0)
0 >= 1? NO (0)

Answer: 10101000
```

**2. 255 to binary:**
```
128  64  32  16   8   4   2   1
 1    1   1   1   1   1   1   1

Answer: 11111111
(All bits on = maximum value)
```

**3. 10 to binary:**
```
128  64  32  16   8   4   2   1
 0    0   0   0   1   0   1   0

10 >= 128? NO (0)
10 >= 64? NO (0)
10 >= 32? NO (0)
10 >= 16? NO (0)
10 >= 8? YES (1) → 10-8 = 2
2 >= 4? NO (0)
2 >= 2? YES (1) → 2-2 = 0
0 >= 1? NO (0)

Answer: 00001010
```

**4. 172 to binary:**
```
128  64  32  16   8   4   2   1
 1    0   1   0   1   1   0   0

172 >= 128? YES (1) → 172-128 = 44
44 >= 64? NO (0)
44 >= 32? YES (1) → 44-32 = 12
12 >= 16? NO (0)
12 >= 8? YES (1) → 12-8 = 4
4 >= 4? YES (1) → 4-4 = 0
0 >= 2? NO (0)
0 >= 1? NO (0)

Answer: 10101100
```

---

#### Exercise 2: Binary to Decimal

**1. 11000000 to decimal:**
```
128 + 64 + 0 + 0 + 0 + 0 + 0 + 0 = 192
```

**2. 10101000 to decimal:**
```
128 + 0 + 32 + 0 + 8 + 0 + 0 + 0 = 168
```

**3. 11111111 to decimal:**
```
128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
```

**4. 00001010 to decimal:**
```
0 + 0 + 0 + 0 + 8 + 0 + 2 + 0 = 10
```

---

### Activity B: Network Information Analysis

**Expected student results will vary, but here are common examples:**

#### Example 1: Typical Home Network (WiFi)
```
IP Address: 192.168.1.105
```

**Question 1:** Private (starts with 192.168)
**Question 2:** Class C (192 is in the 192-223 range)
**Question 3:** First octet 192 = 11000000 in binary

---

#### Example 2: Some Home Networks
```
IP Address: 10.0.0.15
```

**Question 1:** Private (starts with 10)
**Question 2:** Class A (10 is in the 1-126 range)
**Question 3:** First octet 10 = 00001010 in binary

---

#### Example 3: Corporate/School Network
```
IP Address: 172.16.50.200
```

**Question 1:** Private (172.16-172.31 range)
**Question 2:** Class B (172 is in the 128-191 range)
**Question 3:** First octet 172 = 10101100 in binary

---

**What students should understand:**
- If their IP starts with 192.168, 10, or 172.16-31 → Private IP
- Most home networks use 192.168.x.x
- Some routers use 10.x.x.x (especially Apple devices)
- Private IPs can't be used on the internet directly

---

### Activity C: Special IP Address Tests

#### Test 1: Loopback (127.0.0.1)

**Expected result:**
```
C:\>ping 127.0.0.1

Pinging 127.0.0.1 with 32 bytes of data:
Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
```

**Key observations:**
- Response time is EXTREMELY fast (<1ms)
- This never leaves your computer
- Tests if TCP/IP stack is installed and working
- Always works if networking software is installed
- Useful for testing: "Is my NIC driver working?"

---

#### Test 2: Non-existent Private IP

**Expected result:**
```
C:\>ping 10.255.255.254

Pinging 10.255.255.254 with 32 bytes of data:
Request timed out.
Request timed out.
Request timed out.
Request timed out.
```

**Why it fails:**
- This IP is private (10.x.x.x range)
- Your computer checks: "Is this on MY network?"
- If yes: tries to find it locally (fails)
- If no: sends to default gateway
- Either way, no device at that address responds

**Exception:** If you're actually on a 10.x.x.x network, your router might respond or another device might exist there

---

#### Test 3: Default Gateway

**Expected result:**
```
C:\>ping 192.168.1.1

Pinging 192.168.1.1 with 32 bytes of data:
Reply from 192.168.1.1: bytes=32 time=2ms TTL=64
Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
Reply from 192.168.1.1: bytes=32 time=2ms TTL=64
Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
```

**Typical response times:**
- Wired (Ethernet): <1-2ms
- WiFi: 1-5ms
- Slow WiFi/far from router: 5-20ms

**What this proves:**
- Your computer can reach your router
- Layer 1, 2, and 3 are all working
- If this works but internet doesn't: problem is outside your home

---

#### Test 4: Public DNS (8.8.8.8)

**Expected result:**
```
C:\>ping 8.8.8.8

Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=15ms TTL=116
Reply from 8.8.8.8: bytes=32 time=14ms TTL=116
Reply from 8.8.8.8: bytes=32 time=16ms TTL=116
Reply from 8.8.8.8: bytes=32 time=13ms TTL=116
```

**Comparison:**
- **Gateway (router):** 1-5ms
- **Google DNS:** 10-50ms
- **Why slower?** Data travels much further (through ISP, internet backbone)

**Distance breakdown:**
- Your computer → Router = A few feet (1-2ms)
- Router → ISP → Google datacenter = Hundreds or thousands of miles (10-50ms)

---

### Activity D: IP Address Classification

| IP Address | Public/Private | Class | Special? |
|------------|----------------|-------|----------|
| 192.168.1.1 | Private | C | Common home router IP |
| 8.8.8.8 | Public | A | Google DNS |
| 10.0.0.1 | Private | A | Common router IP |
| 127.0.0.1 | Special | A | Loopback |
| 172.16.0.1 | Private | B | Common in enterprises |
| 169.254.10.5 | Special | B | APIPA (link-local) |
| 224.0.0.1 | Special | D | Multicast (all hosts) |
| 74.125.224.72 | Public | A | Google server |

**Detailed explanations:**

**192.168.1.1** - Private, Class C
- Most common home router default IP
- Can't route on internet
- RFC 1918 private range

**8.8.8.8** - Public, Class A
- Google's public DNS server
- Actually owned by Google (not private)
- Can be reached from anywhere on internet

**10.0.0.1** - Private, Class A
- Apple and some other routers use this
- Entire 10.0.0.0/8 is private (16 million addresses!)

**127.0.0.1** - Special (Loopback)
- Technically Class A, but special-use
- Always points to your own computer
- Entire 127.0.0.0/8 range is loopback

**172.16.0.1** - Private, Class B
- Used in medium/large businesses
- Range: 172.16.0.0 - 172.31.255.255
- Less common in homes

**169.254.10.5** - Special (APIPA)
- Link-local address
- Windows/Mac assign this when DHCP fails
- Can only communicate with devices on same physical network
- Can't reach internet

**224.0.0.1** - Special (Multicast), Class D
- Class D = Multicast (224-239)
- Used to send data to multiple hosts simultaneously
- 224.0.0.1 = "all hosts on this subnet"

**74.125.224.72** - Public, Class A
- Google-owned public IP
- Could be a web server, email server, etc.

---

### Activity E: Full IP Binary Conversion

**IP: 192.168.1.1**

| Octet | Decimal | Binary |
|-------|---------|--------|
| 1st | 192 | 11000000 |
| 2nd | 168 | 10101000 |
| 3rd | 1 | 00000001 |
| 4th | 1 | 00000001 |

**Full binary IP:** 11000000.10101000.00000001.00000001

**Why this matters:**
- Subnetting requires understanding binary
- Subnet masks work by masking bits
- AND operations between IP and subnet mask use binary
- Coming up in next lesson!

**Quick reference for common octets:**
```
255 = 11111111
192 = 11000000
168 = 10101000
128 = 10000000
  1 = 00000001
  0 = 00000000
```

---

## Section 3: Reflection

**The NAT (Network Address Translation) explanation:**

Your friend's computer has **192.168.1.5** (private IP) internally, but the rest of the internet sees your router's **public IP** (like 73.162.45.123).

**What's happening:**
1. Your router has TWO IP addresses:
   - **Inside (LAN):** 192.168.1.1 (private)
   - **Outside (WAN):** 73.162.45.123 (public - example)

2. When your computer accesses the internet:
   - Computer → Router: Uses 192.168.1.5
   - Router → Internet: Changes source to its public IP
   - Response comes back to public IP
   - Router forwards to correct internal device (192.168.1.5)

3. This is called **NAT (Network Address Translation)**

**Why we use private IPs:**
- **IPv4 exhaustion:** Only ~4 billion IPv4 addresses exist
- With NAT: Millions of homes can share same private IPs (192.168.1.1)
- Each home needs only ONE public IP
- Without NAT: Each device would need its own public IP (impossible!)

**Analogy:**
- **Private IP** = Your apartment number (Apt 5)
- **Public IP** = Your building's street address
- **Router/NAT** = Your building's mail room (forwards mail to right apartment)

**The math:**
- Without NAT: 20 devices/home × 1 billion homes = 20 billion IPs needed
- IPv4 only has: 4.3 billion total addresses
- **Problem!** NAT solves this.

---

## Common Issues

**Problem:** "My IP is 169.254.x.x"
- **Diagnosis:** DHCP failed, you got APIPA
- **Solution:** Restart router, check cables, `ipconfig /release` then `/renew`

**Problem:** "I can ping 127.0.0.1 but not my gateway"
- **Diagnosis:** Layer 1 or 2 problem
- **Solution:** Check cable, WiFi connection, router power

**Problem:** "I can ping my gateway but not 8.8.8.8"
- **Diagnosis:** Your LAN works, but WAN (internet) is down
- **Solution:** Restart router/modem, call ISP

---

## Key Memorization for Exam

**Private IP Ranges (MUST MEMORIZE):**
- **10.0.0.0 to 10.255.255.255** (10.0.0.0/8) - Class A
- **172.16.0.0 to 172.31.255.255** (172.16.0.0/12) - Class B
- **192.168.0.0 to 192.168.255.255** (192.168.0.0/16) - Class C

**Special Addresses:**
- **127.0.0.1** - Loopback
- **169.254.x.x** - APIPA (link-local)
- **0.0.0.0** - Default route, "any address"
- **255.255.255.255** - Broadcast

**Class Ranges (First Octet):**
- **Class A:** 1-126
- **Class B:** 128-191
- **Class C:** 192-223
- **Class D:** 224-239 (Multicast)
- **Class E:** 240-255 (Experimental)

**Powers of 2:**
- 128, 64, 32, 16, 8, 4, 2, 1

---

## Did It Work?

If you were able to:
- ✅ Convert between decimal and binary
- ✅ Identify your IP as private or public
- ✅ Determine IP address class
- ✅ Test special addresses (loopback, gateway, public DNS)
- ✅ Understand why private IPs exist (NAT, IPv4 conservation)

**You're ready for Lesson 4: Subnet Masks and CIDR!**

Binary conversion is now your superpower. You'll need it for every subnetting problem on the exam!