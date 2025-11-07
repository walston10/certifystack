# Lesson 3 Lab: IP Addressing Fundamentals

**Estimated Time:** 25-30 minutes  
**Topics:** Binary conversion, IP address classes, Public vs Private IPs, Special addresses

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand IP addressing basics:

1. **How many bits are in an IPv4 address?**
   - a) 8 bits
   - b) 16 bits
   - c) 32 bits
   - d) 64 bits

2. **Which IP address is a private (RFC 1918) address?**
   - a) 8.8.8.8
   - b) 192.168.1.1
   - c) 74.125.224.72
   - d) 127.0.0.1

3. **What is the loopback address used for testing?**
   - a) 0.0.0.0
   - b) 127.0.0.1
   - c) 255.255.255.255
   - d) 169.254.1.1

4. **An IP address starting with 10.x.x.x is Class:**
   - a) Class A
   - b) Class B
   - c) Class C
   - d) Class D

5. **If your computer shows an IP of 169.254.x.x, what does this mean?**
   - a) You have a valid DHCP address
   - b) Your DNS is not working
   - c) DHCP failed and Windows assigned APIPA
   - d) You're connected to the internet

---

## Section 2: Hands-On Activity (20-25 min)

### Activity A: Binary Conversion Practice

**Master the powers of 2 (you MUST memorize these for subnetting!):**

| Position | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|----------|-----|----|----|-------|---|---|---|---|
| Bit Value | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |

#### Exercise 1: Convert Decimal to Binary

**Method:** Start from left, ask "Is this number >= this position value?"

**Example: Convert 192 to binary**
- 192 >= 128? YES → Put 1, subtract: 192-128 = 64
- 64 >= 64? YES → Put 1, subtract: 64-64 = 0
- 0 >= 32? NO → Put 0
- 0 >= 16? NO → Put 0
- 0 >= 8? NO → Put 0
- 0 >= 4? NO → Put 0
- 0 >= 2? NO → Put 0
- 0 >= 1? NO → Put 0

**Answer: 11000000**

**Your turn - Convert these:**

1. **168** = _______________
2. **255** = _______________
3. **10** = _______________
4. **172** = _______________

#### Exercise 2: Convert Binary to Decimal

**Method:** Add up the positions where there's a 1

**Example: 10101100**
- 128 + 0 + 32 + 0 + 8 + 4 + 0 + 0 = **172**

**Your turn - Convert these:**

1. **11000000** = _______________
2. **10101000** = _______________
3. **11111111** = _______________
4. **00001010** = _______________

---

### Activity B: Identify Your Network Information

**Let's analyze YOUR IP address:**

1. **Open Command Prompt (Windows) or Terminal (Mac)**

2. **Type:** `ipconfig` (Windows) or `ifconfig` (Mac)

3. **Find your IPv4 Address and write it here:**
   - IP Address: _____._____._____._____ 

4. **Answer these questions about YOUR IP:**

**Question 1:** Is your IP address public or private?
- Check if it starts with:
  - 10.x.x.x → Private (Class A)
  - 172.16.x.x through 172.31.x.x → Private (Class B)
  - 192.168.x.x → Private (Class C)
  - Anything else → Probably public

**Your answer:** _____________

**Question 2:** What class is your IP address?
- Class A: 1.x.x.x to 126.x.x.x (first octet)
- Class B: 128.x.x.x to 191.x.x.x
- Class C: 192.x.x.x to 223.x.x.x

**Your answer:** _____________

**Question 3:** Convert the first octet of your IP to binary

Example: If your IP is 192.168.1.105
- First octet = 192
- Binary = 11000000

**Your first octet:** _______________
**In binary:** _______________

---

### Activity C: Test Special IP Addresses

**Let's test different special IP addresses to see what they do:**

#### Test 1: Loopback (127.0.0.1)

1. **Open Command Prompt/Terminal**
2. **Type:** `ping 127.0.0.1`
3. **What happened?** 

**Expected:** You should get replies instantly (less than 1ms)

**What this proves:** 
- This IP ALWAYS points to your own computer
- Used for testing if your network stack is working
- Never leaves your computer

#### Test 2: Try to ping a private IP that doesn't exist

1. **Type:** `ping 10.255.255.254`
2. **What happened?**

**Expected:** Request timed out (unless you're actually on a 10.x.x.x network)

**Why?** Private IPs only work on local networks. This IP isn't on your network.

#### Test 3: Your Default Gateway

1. **From your ipconfig output, find your Default Gateway**
2. **Type:** `ping [your gateway IP]`
3. **Response time:** _____ ms

**What this proves:** You can reach your router (gateway to the internet)

#### Test 4: Public DNS Server

1. **Type:** `ping 8.8.8.8` (Google's public DNS)
2. **Response time:** _____ ms

**Compare:** Gateway ping vs Google ping - which was faster and why?

---

### Activity D: Identify IP Address Types

**For each IP address, identify:**
- Public or Private?
- What Class? (A, B, C, D, or E)
- Special address? (if applicable)

| IP Address | Public/Private | Class | Special? |
|------------|----------------|-------|----------|
| 192.168.1.1 | | | |
| 8.8.8.8 | | | |
| 10.0.0.1 | | | |
| 127.0.0.1 | | | |
| 172.16.0.1 | | | |
| 169.254.10.5 | | | |
| 224.0.0.1 | | | |
| 74.125.224.72 | | | |

---

### Activity E: Binary IP Address Challenge (Optional)

**Convert this full IP address to binary:**

IP: **192.168.1.1**

| Octet | Decimal | Binary |
|-------|---------|--------|
| 1st | 192 | ________ |
| 2nd | 168 | ________ |
| 3rd | 1 | ________ |
| 4th | 1 | ________ |

**Full binary IP:** ________.________.________.________

**Why this matters:** Subnetting requires binary! This is foundation work.

---

## Section 3: Reflection (5 min)

**Real-World Scenario:**

You're setting up a home network for a friend. They ask: "Why does my computer have IP 192.168.1.5, but when I check online it shows a different IP?"

**Explain in your own words:**
- What's happening with private vs public IPs?
- What device is doing the translation?
- Why do we use private IPs at all?

**Think about:** If every device needed its own public IP address, and each home has 20+ devices, what would happen to available IPv4 addresses?

---

## What You Learned Today

- ✅ You can convert decimal to binary and back (critical for subnetting!)
- ✅ You memorized powers of 2 (128, 64, 32, 16, 8, 4, 2, 1)
- ✅ You identified your own IP as private or public
- ✅ You know IP address classes (A, B, C)
- ✅ You tested special addresses (loopback, private ranges)
- ✅ You understand why private IPs exist (IPv4 address conservation)

**Next Lesson:** Subnet Masks and CIDR Notation - How to divide networks