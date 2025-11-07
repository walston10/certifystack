# Lesson 7 Lab: IPv6 Addressing and Configuration

**Estimated Time:** 30-35 minutes  
**Topics:** IPv6 format, Address shortening, IPv6 types, SLAAC, Dual-stack networks

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand IPv6 basics:

1. **How many bits are in an IPv6 address?**
   - a) 32 bits
   - b) 64 bits
   - c) 128 bits
   - d) 256 bits

2. **What is the IPv6 loopback address?**
   - a) 127.0.0.1
   - b) ::1
   - c) fe80::1
   - d) 2001::1

3. **Which IPv6 address type is used for local network communication only?**
   - a) Global unicast
   - b) Unique local
   - c) Link-local
   - d) Multicast

4. **What does SLAAC stand for?**
   - a) Stateful Local Address Autoconfiguration
   - b) Stateless Address Autoconfiguration
   - c) Secure Link Address Assignment Control
   - d) Simple Local Area Access Configuration

5. **An IPv6 address starting with fe80:: is:**
   - a) A global unicast address
   - b) A link-local address
   - c) A multicast address
   - d) A loopback address

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Check Your Computer's IPv6 Address

**Let's see if your computer has IPv6 enabled:**

1. **Open Command Prompt (Windows) or Terminal (Mac)**

2. **Type:** `ipconfig` (Windows) or `ifconfig` (Mac)

3. **Look for IPv6 addresses. What do you see?**

**Most likely result:**
```
IPv6 Address: NOT FOUND
Link-local IPv6 Address: fe80::1234:5678:90ab:cdef%12
```

**What you probably found:**
- ❌ NO Global IPv6 address (2001::... format)
- ✅ Link-local IPv6 only (fe80::... format)

**Why?**
- Your ISP probably doesn't support IPv6 yet
- Only ~40% of US internet users have IPv6 in 2024
- This is NORMAL and expected!

4. **Test if IPv6 stack is installed (even without internet IPv6):**
```
ping ::1
```

**What happened?** _________________________________

**Expected result:** You should get replies! This proves IPv6 is installed on your computer, even though your ISP doesn't provide it yet.

**What ::1 means:** IPv6 loopback (like 127.0.0.1 in IPv4) - always works locally

---

### Activity B: IPv6 Address Shortening Rules

**IPv6 addresses can be LONG. Let's learn to shorten them!**

**Two rules:**
1. **Remove leading zeros** in each hextet (group of 4 hex digits)
2. **Replace consecutive all-zero hextets** with :: (only once per address)

---

**Practice Problem 1:**
```
Full:  2001:0db8:0000:0000:0000:ff00:0042:8329
```

**Step 1: Remove leading zeros**
- 0db8 → db8
- 0000 → 0
- ff00 → ff00 (no leading zeros)
- 0042 → 42

Result: 2001:db8:0:0:0:ff00:42:8329

**Step 2: Replace consecutive zeros with ::**
- Three consecutive 0s → ::

**Shortened: 2001:db8::ff00:42:8329**

---

**Your turn - Shorten these addresses:**

**Problem 1:**
```
Full: 2001:0db8:0000:0042:0000:0000:0000:0001
Step 1 (remove leading 0s): _________________________________
Step 2 (use ::): _________________________________
```

**Problem 2:**
```
Full: fe80:0000:0000:0000:0202:b3ff:fe1e:8329
Step 1 (remove leading 0s): _________________________________
Step 2 (use ::): _________________________________
```

**Problem 3:**
```
Full: 2001:0000:0000:0000:0000:0000:0000:0001
Step 1 (remove leading 0s): _________________________________
Step 2 (use ::): _________________________________
```

**Problem 4:**
```
Full: ff02:0000:0000:0000:0000:0000:0000:0001
Step 1 (remove leading 0s): _________________________________
Step 2 (use ::): _________________________________
```

---

### Activity C: Expand Shortened IPv6 Addresses

**Now let's work backwards - expand shortened addresses to full format:**

**Example:**
```
Shortened: 2001:db8::1
```

**Steps:**
1. :: represents missing hextets
2. IPv6 = 8 hextets total
3. Count existing hextets: 2001, db8, 1 = 3
4. Missing: 8 - 3 = 5 hextets of all zeros
5. Add leading zeros to each hextet

**Full: 2001:0db8:0000:0000:0000:0000:0000:0001**

---

**Your turn:**

**Problem 1:**
```
Shortened: ::1
Hextets present: ___ (how many?)
Missing hextets: ___ 
Full address: _________________________________
```

**Problem 2:**
```
Shortened: fe80::1
Hextets present: ___
Missing hextets: ___
Full address: _________________________________
```

**Problem 3:**
```
Shortened: 2001:db8:85a3::8a2e:370:7334
Hextets present: ___
Missing hextets: ___
Full address: _________________________________
```

---

### Activity D: Identify IPv6 Address Types

**For each IPv6 address, identify its type:**

| Address | Type | Purpose |
|---------|------|---------|
| ::1 | ________ | ________ |
| fe80::1234:5678 | ________ | ________ |
| 2001:db8::1 | ________ | ________ |
| ff02::1 | ________ | ________ |
| fc00::1 | ________ | ________ |
| 2001:4860:4860::8888 | ________ | ________ |

**Reference guide:**
- **::1** - Loopback (like 127.0.0.1 in IPv4)
- **fe80::/10** - Link-local (like 169.254.x.x in IPv4)
- **2001::/16** - Global unicast (public internet addresses)
- **ff00::/8** - Multicast (like 224.x.x.x in IPv4)
- **fc00::/7** - Unique local (like 192.168.x.x/10.x.x.x in IPv4)

---

### Activity E: Test IPv6 Connectivity (Probably Won't Work - And That's OK!)

**Let's test if you can reach IPv6 sites:**

#### Test 1: Try Google's IPv6 DNS
```
ping 2001:4860:4860::8888
```

**Expected result:** Request timed out ❌

**Why?** Your ISP probably doesn't support IPv6. This is normal - most don't!

---

#### Test 2: Try to visit an IPv6 test site

1. **Open your web browser**
2. **Go to:** https://test-ipv6.com
3. **What does it say?**

**Most likely:** "IPv6 connectivity: Not detected" or similar

**Your IPv6 connectivity score:** Probably 0/10 or "IPv4 only"

**This is expected!** Only ~40% of internet users have IPv6 in 2024.

---

#### Test 3: Understanding Why IPv6 Isn't Available

**The chain that needs to work:**
1. ✅ Your computer supports IPv6 (it does - you saw fe80::)
2. ❌ Your router supports IPv6 (maybe not)
3. ❌ Your ISP provides IPv6 (probably not)
4. ❌ The website has IPv6 (some do)

**All 4 must be "yes" for IPv6 to work!**

**Why ISPs don't offer IPv6:**
- Costs money to upgrade equipment
- IPv4 + NAT "works well enough"
- No immediate business pressure to change
- Chicken-and-egg problem (few sites need it)

**The reality:** You're learning IPv6 for the FUTURE, not today!

---

### Activity F: IPv6 Prefix Notation

**IPv6 uses prefixes like IPv4 CIDR notation:**

**Example:** 2001:db8:abcd:0012::/64
- **Prefix:** 2001:db8:abcd:0012 (first 64 bits = network)
- **/64:** Standard subnet size for IPv6
- **Host portion:** Last 64 bits

---

**Practice: Identify the network prefix:**

**Problem 1:**
```
Address: 2001:db8:85a3:1234:5678:90ab:cdef:1234/64
Network prefix: _________________________________
Host portion: _________________________________
```

**Problem 2:**
```
Address: fe80::1234:5678:90ab:cdef/64
Network prefix: _________________________________
Host portion: _________________________________
```

**Problem 3:**
```
Address: 2001:db8::/32
How many /64 subnets can you create? _______________
```

**Hint:** /32 to /64 = 32 bits for subnets = 2^32 subnets!

---

### Activity G: Compare IPv4 vs IPv6

**Fill in the comparison table:**

| Feature | IPv4 | IPv6 |
|---------|------|------|
| Address size | 32 bits | ___ bits |
| Address format | Dotted decimal | ___________ |
| Number of addresses | 4.3 billion | ___________ |
| Address example | 192.168.1.1 | ___________ |
| Loopback | 127.0.0.1 | ___________ |
| Private addresses | 10.x.x.x, 192.168.x.x | ___________ |
| Broadcast | Yes (255.255.255.255) | ___________ |
| Configuration | DHCP or static | SLAAC or ___ |
| Header complexity | Simple | ___________ |

---

### Activity H: Understanding SLAAC (Stateless Address Autoconfiguration)

**SLAAC lets devices auto-configure IPv6 without DHCP!**

**How it works (in theory):**
1. Device gets link-local address (fe80::...)
2. Device asks router: "What's the network prefix?" (Router Solicitation)
3. Router responds: "Use 2001:db8::/64" (Router Advertisement)
4. Device creates its own IPv6: 2001:db8::xxxx:xxxx:xxxx:xxxx
5. No DHCP server needed!

**Try to check if your router advertises IPv6:**

**Windows:**
```
netsh interface ipv6 show route
```

**Mac/Linux:**
```
ip -6 route
```

**What you'll probably see:**
- Link-local routes (fe80::) only
- Maybe "No IPv6 connectivity" or similar
- No default route (::/0)

**This means:** Your router isn't advertising IPv6 (expected!)

**If you DO see a default route:** Congratulations! You're in the lucky 40% with IPv6!

**Why this matters:** When IPv6 becomes common, your devices will auto-configure without any setup. It's "plug and play" networking!

---

### Activity I: Understanding Dual-Stack (Even Without IPv6)

**Most networks are SUPPOSED to run BOTH IPv4 and IPv6 (dual-stack), but most homes are IPv4-only.**

**Check your computer's stack:**

1. **Run ipconfig/ifconfig again**
2. **What do you have?**
   - IPv4 address: Yes ✅ (you definitely have this)
   - IPv6 global address: Probably No ❌
   - IPv6 link-local: Yes ✅ (fe80::)

**This means:** You have a "partial" dual-stack setup. IPv6 is installed but not usable for internet.

3. **Test with ping:**
```
ping google.com
```

**What happened?** Worked fine, used IPv4

**Now try to force IPv6:**
```
ping -6 google.com
```

**Expected result:** "Ping request could not find host" or "Unable to contact"

**Why?** Your computer tries to use IPv6, fails, but can't fall back because you forced it with -6.

**What this teaches:** Modern systems use "dual-stack" and automatically pick whichever works (usually IPv4 for now). By 2030, IPv6 might be the primary!

**Real-world:** When you browse websites, your computer tries IPv6 first (if available), then falls back to IPv4 within milliseconds. You never notice!

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Why haven't we fully switched to IPv6 yet?**
   - It's been available since 1998...
   - What challenges prevent adoption?

2. **Do you think IPv6 will completely replace IPv4?**
   - Or will they coexist forever?
   - What's your prediction?

3. **IPv6 has 340 undecillion addresses** (340,282,366,920,938,463,463,374,607,431,768,211,456)
   - That's 340 trillion trillion trillion
   - That's 79 octillion addresses per person on Earth
   - **Will we ever run out?**

4. **NAT (Network Address Translation) is barely needed with IPv6**
   - Every device can have a public IP
   - Is this good or bad for security?

---

## What You Learned Today

- ✅ You understand why IPv6 exists (IPv4 exhaustion)
- ✅ You can shorten and expand IPv6 addresses
- ✅ You know IPv6 address types (loopback, link-local, global unicast, multicast)
- ✅ You checked your computer's IPv6 connectivity
- ✅ You understand IPv6 prefix notation (/64, /48, /32)
- ✅ You know how SLAAC works (auto-configuration)
- ✅ You understand dual-stack networks
- ✅ You can compare IPv4 vs IPv6 features

**Next Lesson:** Network Protocols and Services - DNS, DHCP, NTP, and more!