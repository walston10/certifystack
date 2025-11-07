# Lesson 1 Lab - Answer Key

**OSI Model & TCP/IP**

---

## Section 1: Concept Check

1. **b) Layer 3 - Network**
   - Layer 3 handles IP addresses (logical addressing)

2. **d) Frame**
   - Layer 2 (Data Link) uses frames. Remember: Bits → Frames → Packets → Segments → Data

3. **c) TCP**
   - TCP is connection-oriented (three-way handshake) and guarantees delivery
   - UDP is connectionless and faster but doesn't guarantee delivery

4. **b) Layer 2 (Data Link)**
   - Switches use MAC addresses (Layer 2) to forward frames

5. **a) Encapsulation**
   - Encapsulation = wrapping data as it goes DOWN the stack (Layer 7→1)
   - De-encapsulation = unwrapping data as it goes UP the stack (Layer 1→7)

---

## Section 2: Hands-On Activity

### Activity A: Expected Results

#### Step 1: Ping Results

```
C:\>ping www.google.com

Pinging google.com [142.250.185.46] with 32 bytes of data:
Reply from 142.250.185.46: bytes=32 time=14ms TTL=116
Reply from 142.250.185.46: bytes=32 time=13ms TTL=116
Reply from 142.250.185.46: bytes=32 time=15ms TTL=116
Reply from 142.250.185.46: bytes=32 time=12ms TTL=116
```

**What this shows:**
- Google's IP address (142.250.185.46 - yours may differ)
- Response time (10-50ms is normal)
- TTL (Time To Live) = 116 means packet can make 116 more hops

**OSI Layers in action:**
- Layer 7: Your ping command (Application)
- Layer 3: IP addresses shown (Network)
- Layer 1: Physical connection sending the data

---

#### Step 2: Network Information

**Windows (ipconfig):**
```
Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix  . : 
   IPv4 Address. . . . . . . . . . . : 192.168.1.105
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
   Physical Address. . . . . . . . . : 00-1A-2B-3C-4D-5E
```

**What you found:**
- **IPv4 Address (192.168.1.105)** = Layer 3 (Network) - Logical address
- **Physical Address (00-1A-2B-3C-4D-5E)** = Layer 2 (Data Link) - MAC address
- **Default Gateway (192.168.1.1)** = Layer 3 - Your router's IP

**Common variations:**
- IP might be `10.0.0.X` or `192.168.0.X` (different router default)
- MAC address format varies: `00:1A:2B:3C:4D:5E` or `001A.2B3C.4D5E`

---

#### Step 3: Physical Connection

**If using WiFi:**
- Layer 1 = Radio waves (2.4 GHz or 5 GHz)
- Signal strength affects Layer 1 performance
- Weak signal = slower speeds (Physical layer issue)

**If using Ethernet:**
- Layer 1 = Copper cable (Cat5e, Cat6, etc.)
- Cable length and quality matter
- Max distance typically 100 meters

---

#### Step 4: Traceroute Results

```
C:\>tracert www.google.com

Tracing route to google.com [142.250.185.46]
over a maximum of 30 hops:

  1    <1 ms    <1 ms    <1 ms  192.168.1.1         [Your router]
  2    12 ms    11 ms    13 ms  10.245.32.1         [ISP router]
  3    15 ms    14 ms    15 ms  72.14.214.125       [ISP backbone]
  4    18 ms    17 ms    19 ms  108.170.242.193     [Google network]
  5    16 ms    15 ms    17 ms  142.250.185.46      [Google server]

Trace complete.
```

**What each hop shows (Layer 3 routing):**
- **Hop 1:** Your home router (very fast, <1ms)
- **Hop 2-3:** Your ISP's routers
- **Hop 4-5:** Google's network
- Each router makes a Layer 3 decision: "Where should I send this packet next?"

**Your results will vary based on:**
- Your location
- Your ISP
- Which Google datacenter is closest to you
- Typical hop count: 5-15 hops

---

### Activity B: Your OSI Stack Example

**Here's what your diagram should look like:**

```
ME (192.168.1.105) → PING → GOOGLE (142.250.185.46)

Layer 7 (Application):    Ping command / ICMP protocol
Layer 6 (Presentation):   No encryption (ping is simple)
Layer 5 (Session):        No session needed (ping is stateless)
Layer 4 (Transport):      N/A (ICMP is Layer 3, but TCP would be here)
Layer 3 (Network):        192.168.1.105 → [5 router hops] → 142.250.185.46
Layer 2 (Data Link):      My MAC: 00-1A-2B-3C-4D-5E → Router MAC
Layer 1 (Physical):       WiFi (2.4 GHz radio waves)
```

**Key takeaways:**
- **Layer 3 (Network):** Routers use IP addresses to move packets between networks
- **Layer 2 (Data Link):** Switches use MAC addresses within the same network
- **Layer 1 (Physical):** The actual physical medium (WiFi, cable) carrying bits

---

### Activity C: TCP vs UDP Examples

**When to use TCP (reliable, slower):**
- ✅ Web browsing (HTTP/HTTPS) - need all data
- ✅ Email (SMTP) - can't lose parts of a message
- ✅ File downloads (FTP) - need complete files
- ✅ SSH/Remote desktop - need accurate commands

**When to use UDP (fast, may lose packets):**
- ✅ Video streaming (Netflix, YouTube) - if a frame drops, keep going
- ✅ Voice calls (VoIP, Discord) - better to have a quick glitch than delay
- ✅ Online gaming - need speed, can interpolate missing packets
- ✅ DNS queries - simple request/response, can retry if needed

**Real-world analogy:**
- **TCP = Certified mail** - Signature required, guaranteed delivery
- **UDP = Regular mail** - Fast, but occasional lost letters are acceptable

---

## Section 3: Reflection - Troubleshooting Scenarios

**Example troubleshooting with OSI model:**

**Scenario 1: "No internet"**
- **Check Layer 1:** Is WiFi on? Cable plugged in? → See link lights
- **Check Layer 2:** Can you see other devices? → Check switch/AP
- **Check Layer 3:** Do you have an IP? → `ipconfig` - If 169.254.X.X, DHCP failed
- **Check Layer 4:** Can you ping 8.8.8.8? → If yes, might be DNS (Layer 7)

**Scenario 2: "Slow internet"**
- **Layer 1:** Weak WiFi signal? Try moving closer to router
- **Layer 2:** Network congestion? Too many devices on switch
- **Layer 3:** Bad routing? Try `tracert` to find slow hops

**Your own experience might include:**
- Unplugging router (Layer 1/2/3 reset)
- Getting a new IP with `ipconfig /release` and `/renew` (Layer 3)
- Changing DNS servers (Layer 7)
- Restarting your computer (resets all layers)

---

## Common Troubleshooting Tips

**Problem:** Can't ping anything
- **Solution:** Check Layer 1 (cable/WiFi) and Layer 3 (do you have an IP?)

**Problem:** Can ping router but not internet
- **Solution:** Layer 3 issue - router's connection to ISP is down

**Problem:** Slow performance
- **Solution:** Could be any layer! Check WiFi signal (L1), network congestion (L2), routing (L3)

**Problem:** Some apps work, others don't
- **Solution:** Likely Layer 4+ (firewall blocking certain ports)

---

## OSI Model Troubleshooting Cheat Sheet

**Bottom-Up Approach (Most Common):**
1. **Layer 1:** Check physical connection (cables, power, link lights)
2. **Layer 2:** Check local network (can you see other devices?)
3. **Layer 3:** Check IP configuration (do you have a valid IP?)
4. **Layers 4-7:** Check applications and services

**Remember:** Most problems are at Layer 1 or Layer 3!

---

## Did It Work?

If you were able to:
- ✅ Use ping to see Layer 3 addressing
- ✅ Find your MAC address (Layer 2) and IP address (Layer 3)
- ✅ Use tracert to see routing in action
- ✅ Map your connection through the OSI layers
- ✅ Understand TCP vs UDP use cases

**You're ready for Lesson 2!** 

You now have practical experience with the OSI model - not just theory. Every time you troubleshoot network issues, you'll be thinking "What layer is the problem at?"