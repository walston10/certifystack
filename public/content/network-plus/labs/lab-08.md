# Lesson 8 Lab: Network Protocols and Services

**Estimated Time:** 30-35 minutes  
**Topics:** DNS, DHCP, NTP, Testing network services

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand network services:

1. **What does DNS do?**
   - a) Assigns IP addresses to devices
   - b) Translates domain names to IP addresses
   - c) Encrypts network traffic
   - d) Routes packets between networks

2. **What are the 4 steps of the DHCP process?**
   - a) Discover, Offer, Request, Acknowledge
   - b) Request, Response, Confirm, Complete
   - c) Hello, Sync, Data, Finish
   - d) Connect, Assign, Validate, Disconnect

3. **Which DNS record type maps a domain name to an IPv4 address?**
   - a) AAAA
   - b) CNAME
   - c) MX
   - d) A

4. **Why is NTP (Network Time Protocol) important?**
   - a) To speed up networks
   - b) To synchronize time across devices for logging and security
   - c) To encrypt timestamps
   - d) To measure network latency

5. **What port does DNS use?**
   - a) Port 22
   - b) Port 53
   - c) Port 80
   - d) Port 443

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Test DNS with nslookup

**DNS translates names (like google.com) to IP addresses. Let's see it in action!**

1. **Open Command Prompt (Windows) or Terminal (Mac)**

2. **Type:** `nslookup google.com`

**What you'll see:**
```
Server:  [Your DNS server name/IP]
Address: [Your DNS server IP]

Non-authoritative answer:
Name:    google.com
Address: 142.250.185.46
```

**Write down:**
- DNS server you're using: _________________________________
- IP address returned for google.com: _________________________________

---

3. **Test a different site:** `nslookup amazon.com`

**IP address for amazon.com:** _________________________________

4. **Look up your own domain (if you have one), or try:**
   - `nslookup facebook.com`
   - `nslookup netflix.com`
   - `nslookup reddit.com`

**Notice:** DNS returns different IPs for different sites!

---

### Activity B: DNS Record Types

**Let's explore different types of DNS records:**

#### Test 1: A Record (IPv4 address)
```
nslookup google.com
```

**Result:** Returns IPv4 address (like 142.250.185.46)

#### Test 2: AAAA Record (IPv6 address)
```
nslookup -type=AAAA google.com
```

**Result:** Returns IPv6 address (like 2607:f8b0:4004:c07::71)

**Your result:** _________________________________

**Did it return an IPv6?** If yes, that means Google supports IPv6!

---

#### Test 3: MX Record (Mail server)
```
nslookup -type=MX google.com
```

**What you'll see:**
```
google.com      MX preference = 10, mail exchanger = smtp.google.com
```

**What this means:** Emails to @google.com go to smtp.google.com

**Your result - what's the mail server?** _________________________________

---

#### Test 4: NS Record (Name servers)
```
nslookup -type=NS google.com
```

**Result:** Shows DNS servers that are authoritative for google.com

**Write down one name server:** _________________________________

---

### Activity C: Test Your DNS Server Speed

**Let's see how fast your DNS resolves names:**

1. **First lookup (not cached):**
```
nslookup wikipedia.org
```

**Notice the response time** (if shown)

2. **Second lookup (should be cached):**
```
nslookup wikipedia.org
```

**Was it faster?** _________________________________

**Why?** DNS servers cache results. Second lookup is instant because it's cached!

---

3. **Flush your DNS cache:**

**Windows:**
```
ipconfig /flushdns
```

**Mac:**
```
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Linux:**
```
sudo systemd-resolve --flush-caches
```

4. **Now lookup again:**
```
nslookup wikipedia.org
```

**Was it slower again?** Cache was cleared, had to query DNS server again!

---

### Activity D: Identify Your DHCP Configuration

**DHCP automatically gives your computer an IP address. Let's see what it gave you:**

1. **Run:** `ipconfig /all` (Windows) or `ifconfig` (Mac)

2. **Find and write down:**
   - Your IP Address: _________________________________
   - Subnet Mask: _________________________________
   - Default Gateway: _________________________________
   - DHCP Server: _________________________________
   - DNS Servers: _________________________________
   - DHCP Lease Obtained: _________________________________
   - DHCP Lease Expires: _________________________________

**How long is your lease?** (Expires - Obtained) = ___________ hours

---

### Activity E: Release and Renew DHCP (The DORA Process)

**Let's trigger the DHCP process manually!**

**⚠️ WARNING: This will briefly disconnect you from the network!**

1. **Release your IP address:**
```
ipconfig /release
```

**What happened?** Your computer gave up its IP address

2. **Check your IP now:**
```
ipconfig
```

**Your IP address:** Should show 0.0.0.0 or disappear! ❌

3. **Renew your IP address:**
```
ipconfig /renew
```

**What you just triggered:** The DORA process!
- **D**iscover: "Any DHCP servers out there?"
- **O**ffer: "Here's an IP address for you"
- **R**equest: "I'd like that IP please"
- **A**cknowledge: "Confirmed, it's yours"

4. **Check your IP again:**
```
ipconfig
```

**New IP address:** _________________________________

**Did you get the same IP or different?** _________________________________

**Why?** DHCP might give you the same IP (if available) or a different one from the pool

---

### Activity F: Test NTP (Network Time Protocol)

**NTP keeps your computer's clock accurate. Let's check it:**

#### Windows:
```
w32tm /query /status
```

**Look for:**
- Stratum: ___ (Lower is better, 0-15 scale)
- Last Successful Sync Time: _________________________________

---

#### Mac/Linux:
```
sntp -s
```

OR check System Preferences > Date & Time > "Set date and time automatically"

---

**What is Stratum?**
- Stratum 0: Atomic clock (GPS, radio clock)
- Stratum 1: Servers directly connected to Stratum 0
- Stratum 2: Syncs from Stratum 1
- And so on... (lower is more accurate)

**Your computer's stratum:** Probably 3 or 4

---

### Activity G: Test DNS with Different DNS Servers

**You can use different DNS servers. Let's try Google's DNS:**

1. **Test with your default DNS:**
```
nslookup example.com
```

**DNS server used:** _________________________________
**Time it took:** (observe if fast or slow)

2. **Test with Google's DNS (8.8.8.8):**
```
nslookup example.com 8.8.8.8
```

**DNS server used:** 8.8.8.8
**Time it took:** (compare to step 1)

3. **Test with Cloudflare's DNS (1.1.1.1):**
```
nslookup example.com 1.1.1.1
```

**Which was fastest?** _________________________________

**Why does it matter?** Faster DNS = faster web browsing!

---

### Activity H: Troubleshooting DNS Issues

**Let's simulate and fix DNS problems:**

#### Scenario 1: Can you ping IP but not domain name?

1. **Try this:**
```
ping 8.8.8.8
```

**Result:** Should work ✅

2. **Now try:**
```
ping google.com
```

**If step 1 works but step 2 fails:** DNS problem!

**Your result - did both work?** _________________________________

**If pinging IP works but domain doesn't:**
- Your network connection is fine (Layer 1-3)
- Your DNS is broken (Layer 7)
- Solution: Check DNS server settings, try 8.8.8.8

---

#### Scenario 2: Check if DNS is responding

```
nslookup test-site-that-doesnt-exist-12345.com
```

**Expected result:** "Can't find... Non-existent domain"

**What this proves:** DNS server is working, just can't find that fake domain

---

### Activity I: Real-World DNS Investigation

**Pick your favorite website and investigate its infrastructure:**

**Website:** _________________________________

1. **Find its IPv4:**
```
nslookup [your-website].com
```

**IPv4:** _________________________________

2. **Find its mail server:**
```
nslookup -type=MX [your-website].com
```

**Mail server:** _________________________________

3. **Find its name servers:**
```
nslookup -type=NS [your-website].com
```

**Name servers:** _________________________________

**What you learned:** Behind every website is a complex DNS infrastructure!

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **What would happen if DNS stopped working worldwide?**
   - Could you still browse the web?
   - What would you have to do instead?
   - Why is DNS called "the phone book of the internet"?

2. **Your DHCP lease expires in X hours/days:**
   - What happens when it expires?
   - Do you have to do anything?
   - What if DHCP server is down when renewal time comes?

3. **Why does accurate time matter?**
   - What breaks if your computer's clock is wrong?
   - Think about: HTTPS certificates, logging, security tokens

4. **You're a network admin. DHCP server crashes:**
   - How quickly do users notice?
   - What happens to existing connections?
   - What happens to new devices?

---

## What You Learned Today

- ✅ You tested DNS with nslookup
- ✅ You explored DNS record types (A, AAAA, MX, NS)
- ✅ You saw DNS caching in action
- ✅ You identified your DHCP configuration
- ✅ You manually triggered the DORA process (release/renew)
- ✅ You checked NTP time synchronization
- ✅ You compared different DNS servers (8.8.8.8, 1.1.1.1)
- ✅ You learned to troubleshoot DNS issues
- ✅ You investigated real-world DNS infrastructure

**Next Lesson:** Port Numbers and Common Protocols - Memorization time!