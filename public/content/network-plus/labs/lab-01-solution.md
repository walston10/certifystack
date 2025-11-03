# Lab 1 Solution: OSI Model in Action

## 📊 Sample Command Outputs & Explanations

This solution shows what you should have seen during the lab and explains what it all means.

---

## Part 1: Network Detective - Sample Outputs

### Command 1: ipconfig /all (Windows)

**Sample Output:**
```
Windows IP Configuration

   Host Name . . . . . . . . . . . . : DESKTOP-ABC123
   Primary Dns Suffix  . . . . . . . :
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : home
   Description . . . . . . . . . . . : Intel Ethernet Adapter
   Physical Address. . . . . . . . . : 1C-39-47-5D-8E-2A  ← LAYER 2 (MAC)
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes
   IPv4 Address. . . . . . . . . . . : 192.168.1.105(Preferred)  ← LAYER 3 (IP)
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Lease Obtained. . . . . . . . . . : Sunday, November 2, 2025 10:30:00 AM
   Lease Expires . . . . . . . . . . : Monday, November 3, 2025 10:30:00 AM
   Default Gateway . . . . . . . . . : 192.168.1.1  ← YOUR ROUTER
   DHCP Server . . . . . . . . . . . : 192.168.1.1
   DNS Servers . . . . . . . . . . . : 8.8.8.8  ← GOOGLE DNS (LAYER 7)
                                       8.8.4.4
```

**What This Tells You:**
- **Physical Address (MAC):** `1C-39-47-5D-8E-2A` - Your Layer 2 address
- **IPv4 Address:** `192.168.1.105` - Your Layer 3 address
- **Default Gateway:** `192.168.1.1` - Your router's IP (how you reach the internet)
- **DNS Servers:** `8.8.8.8` - Google's public DNS (Layer 7 service)
- **DHCP Enabled:** Yes - Your router automatically assigned your IP (also Layer 7)

---

### Command 2: nslookup www.google.com

**Sample Output:**
```
Server:  google-public-dns-a.google.com
Address:  8.8.8.8

Non-authoritative answer:
Name:    www.google.com
Addresses:  2607:f8b0:4004:c07::68  ← IPv6 address
           142.250.80.46             ← IPv4 address
```

**What This Tells You:**
- **Server:** The DNS server you're asking (8.8.8.8 - Google Public DNS)
- **Name:** The domain name you looked up
- **Address:** The IP address(es) for that domain
- **Why "Non-authoritative"?** You're getting a cached answer, not directly from Google's DNS

**Key Lesson:** DNS operates at Layer 7 (Application). It translates human-readable names into Layer 3 IP addresses.

**Try This:**
```bash
nslookup www.youtube.com
# Returns: 142.251.33.238

nslookup www.amazon.com
# Returns: 52.94.236.248
```

Notice how different websites have different IPs? That's DNS mapping names to addresses!

---

### Command 3: ping 8.8.8.8

**Sample Output:**
```
Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=15ms TTL=117
Reply from 8.8.8.8: bytes=32 time=14ms TTL=117
Reply from 8.8.8.8: bytes=32 time=16ms TTL=117
Reply from 8.8.8.8: bytes=32 time=13ms TTL=117

Ping statistics for 8.8.8.8:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 13ms, Maximum = 16ms, Average = 14ms
```

**What This Tells You:**
- **Reply from 8.8.8.8:** The server responded (network is working!)
- **bytes=32:** Size of the packet sent
- **time=15ms:** Round-trip time (how long it took to go there and back)
- **TTL=117:** Time To Live - how many router hops the packet can survive (started at 128, went through ~11 routers)
- **0% loss:** Perfect connection, no packets dropped

**Key Lesson:** Ping uses ICMP (Internet Control Message Protocol) at Layer 3. It tests Layer 3 connectivity without involving higher layers.

**What Good vs Bad Looks Like:**

**Good Connection:**
```
Reply from 8.8.8.8: time=15ms TTL=117  ← Fast, consistent
Reply from 8.8.8.8: time=14ms TTL=117
Reply from 8.8.8.8: time=16ms TTL=117
0% loss
```

**Bad Connection:**
```
Reply from 8.8.8.8: time=450ms TTL=117  ← SLOW!
Request timed out.                       ← PACKET LOSS!
Reply from 8.8.8.8: time=520ms TTL=117
50% loss                                 ← BAD SIGN
```

---

### Command 4: tracert www.google.com

**Sample Output:**
```
Tracing route to www.google.com [142.250.80.46]
over a maximum of 30 hops:

  1    <1 ms    <1 ms    <1 ms  192.168.1.1            ← Your home router
  2    10 ms    11 ms     9 ms  10.30.128.1            ← ISP's first router
  3    11 ms    10 ms    11 ms  agg-xge-0-2-0.border1.isp.net  ← ISP aggregation
  4    15 ms    14 ms    15 ms  ae-3.edge2.isp.net     ← ISP edge router
  5    16 ms    15 ms    17 ms  72.14.239.232          ← Entering Google's network
  6    17 ms    16 ms    18 ms  108.170.254.129        ← Google backbone
  7    18 ms    17 ms    19 ms  142.250.232.153        ← Google datacenter
  8    19 ms    18 ms    20 ms  iad30s21-in-f14.1e100.net [142.250.80.46]  ← Google server!

Trace complete.
```

**What This Tells You:**
- Each line is a **hop** - one router along the path
- Hop 1: Your home router (always first)
- Hops 2-4: Your ISP's infrastructure
- Hops 5-8: Google's network
- The IP addresses show you the actual route your data takes

**Key Lesson:** This visualizes Layer 3 routing. Every packet you send takes this same journey through multiple routers!

**Troubleshooting with Tracert:**

If you see this:
```
  1    <1 ms    <1 ms    <1 ms  192.168.1.1
  2     *        *        *     Request timed out.
  3     *        *        *     Request timed out.
```
**Problem is at Hop 2** - Your ISP's first router isn't responding. Call your ISP!

If you see this:
```
  1    <1 ms    <1 ms    <1 ms  192.168.1.1
  2    10 ms    11 ms     9 ms  10.30.128.1
  ...
  7   350 ms   450 ms   380 ms  108.170.254.129  ← SLOWDOWN HERE!
  8   351 ms   451 ms   381 ms  142.250.80.46
```
**Problem is at Hop 7** - That router is congested or having issues.

---

## Part 2: The Magic Trick - Bypass DNS!

### What You Should Have Seen:

**Test 1: Normal Website Visit**
```
Browser: www.google.com
↓
DNS Lookup: "What's google.com's IP?"
↓
DNS Reply: "It's 142.250.80.46"
↓
Browser connects to 142.250.80.46
↓
You see Google's homepage
```

**Test 2: Direct IP Visit**
```
Browser: 142.250.80.46
↓
No DNS needed! (You provided the IP)
↓
Browser connects to 142.250.80.46
↓
You see Google's homepage (same result!)
```

### Why This Is Important:

**Real-World Troubleshooting Scenario:**

User: "I can't get to any websites!"

**Your diagnostic process:**
1. `ping 8.8.8.8` → ✅ Works (Layer 3 is fine)
2. `nslookup www.google.com` → ❌ Fails (DNS problem!)
3. Type `142.250.80.46` in browser → ✅ Works (confirms it's DNS)

**Solution:** Change DNS servers from ISP's DNS to Google's (8.8.8.8)

**This technique is used by network professionals daily!**

---

## Part 3: Network Diagram - Sample Solution

Here's what a complete diagram should look like:

```
[Your Computer]                    [Your Router]                [Internet]                  [Google Server]
IP: 192.168.1.105                  IP: 192.168.1.1             (Multiple ISP              IP: 142.250.80.46
MAC: 1C-39-47-5D-8E-2A            MAC: A0-B1-C2-D3-E4-F5       routers)                   MAC: [Different MAC]

         │                                │                          │                            │
         │ Layer 1: Ethernet Cable        │ Layer 1: Fiber Optic    │                            │
         │ (Physical signals)             │ (Light pulses)          │                            │
         │                                │                          │                            │
         │ Layer 2: MAC to MAC            │                          │                            │
         │ Source: Your MAC               │                          │                            │
         │ Dest: Router MAC               │                          │                            │
         │                                │                          │                            │
         │ Layer 3: IP to IP              │ Layer 3: IP Routing      │                            │
         │ Source: 192.168.1.105          │ Multiple hops            │                            │
         │ Dest: 142.250.80.46            │ (tracert showed path)    │                            │
         │                                │                          │                            │
         │ Layer 4: TCP Port 443 (HTTPS)  │                          │                            │
         │                                │                          │                            │
         │ Layer 7: DNS Query             │                          │                            │
         │ "What's google.com's IP?"      │                          │                            │
         │            ↓                   │                          │                            │
         │ Layer 7: DNS Response          │                          │                            │
         │ "It's 142.250.80.46"           │                          │                            │
         │                                │                          │                            │
         │ Layer 7: HTTP GET Request      │                          │                            │
         │ "Send me your homepage"        │  ─────────────────────────────────────────────────→   │
         │                                │                          │                            │
         │ Layer 7: HTTP Response         │                          │                            │
         │ "Here's the HTML"              │  ←─────────────────────────────────────────────────   │
         └────────────────────────────────┘                          └────────────────────────────┘
```

**Key Points Your Diagram Should Include:**
- Both your computer and Google's IPs
- Your MAC address and router's MAC
- Label which layers operate where
- Show bidirectional communication
- Indicate what each layer does

---

## Part 4: Real-World Troubleshooting - Sample Answers

### Scenario: "I can't get to Facebook!"

**Proper Diagnostic Approach:**

**Step 1: Check Layer 1 (Physical)**
```bash
# Look at network adapter lights
# Check cable is plugged in
# Verify Wi-Fi is enabled
```
✅ Lights are on, cable connected → Layer 1 is fine

**Step 2: Check Layer 2 (Data Link)**
```bash
ipconfig /all
# Look for "Physical Address" (MAC)
```
✅ MAC address present → Layer 2 is fine

**Step 3: Check Layer 3 (Network)**
```bash
ipconfig
# Do you have an IP?
```
**If IP is 169.254.x.x:** DHCP failed! (APIPA address)
**If IP is normal (192.168.x.x or 10.x.x.x):** Layer 3 is fine ✅

```bash
ping 8.8.8.8
```
✅ Replies received → Internet connectivity works (Layer 3 fine)

**Step 4: Check Layer 7 (Application - DNS)**
```bash
nslookup www.facebook.com
```
**If it fails:** DNS problem! ❌
**Solution:** Change DNS to 8.8.8.8

**If it works:** DNS is fine ✅

**Step 5: Test Direct IP Connection**
```bash
# Get Facebook's IP
nslookup www.facebook.com
# Returns: 157.240.22.35

# Type in browser: 157.240.22.35
```

**If this works:** Something else is blocking Facebook specifically
- Could be parental controls
- Could be firewall rule
- Could be hosts file redirect

---

## 🎯 Key Takeaways

### Commands You Mastered:

| Command | Purpose | OSI Layer | When to Use |
|---------|---------|-----------|-------------|
| `ipconfig /all` | View network config | L2 + L3 | Find IP, MAC, gateway |
| `nslookup` | DNS lookups | L7 | Test DNS, find IPs |
| `ping` | Test connectivity | L3 | Check if server reachable |
| `tracert` | Trace route | L3 | Find where connection fails |

### Troubleshooting Decision Tree:

```
Problem: "Can't access website"
    ↓
ping 8.8.8.8 → Works?
    ↓ YES                          ↓ NO
    ↓                              ↓
nslookup site → Works?         Check Layer 1-3:
    ↓ YES       ↓ NO            - Cable plugged in?
    ↓           ↓                - Have IP address?
    ↓      DNS Problem           - Router working?
    ↓      Fix: Change DNS
    ↓
Layer 7 app issue
(Firewall, browser, etc.)
```

---

## 💡 Advanced Insights

### Why Some IPs Don't Work in Browser:

Try this: `nslookup www.cnn.com` returns `151.101.129.67`

But typing `151.101.129.67` in browser might not show CNN!

**Why?** Many websites use **virtual hosting** - one IP serves multiple websites. The server needs the domain name to know which site to serve.

This is a Layer 7 (Application) feature called "Host header" in HTTP.

### Understanding TTL in Ping:

```
Reply from 8.8.8.8: bytes=32 time=15ms TTL=117
```

**TTL started at 128** (Google's servers set this)
**Now it's 117** → Went through **11 routers** (128 - 117 = 11)

Each router decrements TTL by 1. If TTL reaches 0, the packet is dropped (prevents infinite loops).

### ICMP vs TCP/UDP:

**Ping uses ICMP** (Internet Control Message Protocol)
- Operates at Layer 3 (not Layer 4!)
- Used for diagnostics, not data transfer
- Firewalls often block ICMP

**Fun fact:** A server can be reachable but not respond to ping if ICMP is blocked. Use `telnet [ip] [port]` to test Layer 4 connectivity instead.

---

## ✅ Lab Completion Checklist

You successfully completed Lab 1 if you:

- [x] Ran `ipconfig /all` and identified your IP and MAC
- [x] Used `nslookup` to find website IPs
- [x] Used `ping` to test connectivity
- [x] Used `tracert` to see routing path
- [x] Visited a website using only its IP (bypassed DNS)
- [x] Drew a network diagram with OSI layers labeled
- [x] Understand how to troubleshoot using layers
- [x] Can explain what each command tests

---

## 🎓 What You Can Do Now

**Professional Skills Gained:**
1. ✅ Diagnose network connectivity issues
2. ✅ Determine if problems are DNS, routing, or physical
3. ✅ Use command-line tools like a network engineer
4. ✅ Understand how data flows through networks
5. ✅ Explain the OSI model with real examples

**On Your Resume:**
- Network troubleshooting using OSI model
- Command-line tools (ping, tracert, nslookup, ipconfig)
- Layer-based diagnostic methodology

---

## 🚀 Next Steps

**Before moving to Lesson 2:**
- Practice these commands daily
- Try them on different websites
- Run tracert from different locations
- Compare your home network to coffee shop Wi-Fi

**Challenge Yourself:**
- Run these commands on 10 different websites
- Map your entire home network
- Create a troubleshooting flowchart
- Help a friend diagnose their Wi-Fi issues

**Ready for more?**
Continue to **Lesson 2: Network Topologies & Types** →

---

*CertifyStack - Network+ N10-009*  
*Lab 1 Solution*  
*"Now you know what network professionals do every day!"*