# Lesson 14 Lab: Network Devices (Routers, Firewalls, Load Balancers)

**Estimated Time:** 30-35 minutes  
**Topics:** Device identification, OSI layers, Device placement, Network design

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand network devices:

1. **What OSI layer does a router operate at?**
   - a) Layer 1 (Physical)
   - b) Layer 2 (Data Link)
   - c) Layer 3 (Network)
   - d) Layer 7 (Application)

2. **What is the primary difference between an IDS and an IPS?**
   - a) IDS detects, IPS prevents
   - b) IDS is faster
   - c) IPS is cheaper
   - d) No difference

3. **What does a load balancer do?**
   - a) Encrypts traffic
   - b) Distributes traffic across multiple servers
   - c) Blocks malicious traffic
   - d) Converts protocols

4. **Which device operates at Layer 1?**
   - a) Switch
   - b) Router
   - c) Hub
   - d) Firewall

5. **What is a Layer 3 switch?**
   - a) A switch that can route between VLANs
   - b) A three-port switch
   - c) A switch with three speeds
   - d) An old legacy switch

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Identify Devices in Your Home Network

**Draw your home network and identify each device:**

**Example:**
```
[Internet]
    |
[Modem] ← What you have: _________________
    |
[Router/WiFi] ← Brand/Model: _________________
    |
    +---[Computer] ← Device type: _________________
    +---[Phone] ← Device type: _________________
    +---[Smart TV] ← Device type: _________________
    +---[Gaming Console] ← Device type: _________________
```

**Your network:**
```
[Internet]
    |
[________] ← Device 1
    |
[________] ← Device 2
    |
    +---[________] ← Your devices
    +---[________]
    +---[________]
```

**Identify each device's OSI layer:**
- Modem: Layer _____
- Router: Layer _____
- Switch (if you have one): Layer _____
- WiFi Access Point: Layer _____

---

### Activity B: Router Exploration

**Let's explore your home router's settings!**

**⚠️ WARNING: Only VIEW settings, don't change anything unless you know what you're doing!**

1. **Find your router's IP address:**

**Windows:**
```
ipconfig
```
Look for "Default Gateway"

**Mac/Linux:**
```
netstat -rn | grep default
```

**Your router's IP:** _________________________________

---

2. **Access router admin page:**
- Open web browser
- Go to: http://[your-router-IP]
- Login (usually admin/admin or on router label)

**⚠️ If you can't login, skip this section - it's OK!**

---

3. **Explore (READ ONLY - don't change!):**

**What features does your router have?**
- [ ] DHCP server
- [ ] NAT (Network Address Translation)
- [ ] Port forwarding
- [ ] Firewall
- [ ] WiFi settings
- [ ] Guest network
- [ ] Parental controls
- [ ] VPN server
- [ ] QoS (Quality of Service)

**Your router is actually MULTIPLE devices in one:**
- Router (Layer 3)
- Switch (Layer 2) - usually 4 ports
- Wireless Access Point (Layer 2)
- Firewall (security)
- DHCP server (automatic IP)
- NAT device (shares one public IP)

**Consumer routers = all-in-one device!**

---

### Activity C: Device Layer Classification

**For each device, identify its OSI layer(s):**

| Device | Layer | What it looks at |
|--------|-------|------------------|
| Hub | _____ | _____________________ |
| Switch | _____ | _____________________ |
| Router | _____ | _____________________ |
| Firewall | _____ | _____________________ |
| Load Balancer (L4) | _____ | _____________________ |
| Load Balancer (L7) | _____ | _____________________ |
| Modem | _____ | _____________________ |
| Access Point | _____ | _____________________ |
| Layer 3 Switch | _____ | _____________________ |

**Answers:**
- Hub: Layer 1 (Physical) - Electrical signals
- Switch: Layer 2 (Data Link) - MAC addresses
- Router: Layer 3 (Network) - IP addresses
- Firewall: Layer 3-7 (depends on type) - IPs, ports, content
- Load Balancer L4: Layer 4 (Transport) - IP and port
- Load Balancer L7: Layer 7 (Application) - HTTP headers, URLs
- Modem: Layer 1 (Physical) - Digital to analog conversion
- Access Point: Layer 2 (Data Link) - MAC addresses
- Layer 3 Switch: Layer 2 and 3 - MAC and IP

---

### Activity D: Firewall Types

**Match the firewall type to its description:**

**Types:**
1. Stateless Firewall
2. Stateful Firewall
3. Next-Generation Firewall (NGFW)

**Descriptions:**

**Firewall A:**
- Examines each packet independently
- Uses ACL rules (permit/deny)
- Fast but limited
- No connection tracking

**This is:** _________________________________ (Stateless)

---

**Firewall B:**
- Tracks connection state
- Allows return traffic automatically
- Remembers TCP handshakes
- More secure than Firewall A

**This is:** _________________________________ (Stateful)

---

**Firewall C:**
- All features of Firewall B, PLUS:
- Application awareness (knows difference between HTTP and HTTPS content)
- Deep packet inspection (DPI)
- Intrusion prevention (IPS)
- URL filtering
- Malware detection
- User/identity awareness

**This is:** _________________________________ (NGFW)

---

**Which firewall does your home router have?**
- Probably: Stateful firewall (basic)
- Enterprise: NGFW

---

### Activity E: IDS vs IPS

**Understand the difference:**

**Scenario:** Malicious traffic is detected on your network.

**IDS (Intrusion Detection System):**
- What it does: _________________________________ (Alerts you)
- Placement: _________________________________ (Out of path, monitoring)
- Action: _________________________________ (Logs, sends alert)
- Problem: _________________________________ (Doesn't stop attack)

**IPS (Intrusion Prevention System):**
- What it does: _________________________________ (Blocks attack)
- Placement: _________________________________ (In-line, all traffic flows through)
- Action: _________________________________ (Drops malicious packets)
- Risk: _________________________________ (False positives block legitimate traffic)

---

**Analogy:**
- **IDS** = Security camera (watches and records, but doesn't stop)
- **IPS** = Security guard (watches and physically stops intruders)

**Which is better?**
- IDS: Less risk, but only detects
- IPS: More protection, but can cause issues
- Best: Use both (IDS for monitoring, IPS for critical systems)

---

### Activity F: Load Balancer Scenario

**You run a popular website with 3 web servers.**

**Without load balancer:**
```
[User 1] ───→ [Server 1] (overloaded!)
[User 2] ───→ [Server 1] (overloaded!)
[User 3] ───→ [Server 1] (overloaded!)

[Server 2] (idle)
[Server 3] (idle)
```

**Problem:** All users hit Server 1, it crashes, Servers 2 and 3 sit idle.

---

**With load balancer:**
```
              [Load Balancer]
                    |
        +-----------+-----------+
        |           |           |
[User 1] → [Server 1] (balanced)
[User 2] → [Server 2] (balanced)
[User 3] → [Server 3] (balanced)
```

**Benefits:**
- Traffic distributed evenly
- No single point of overload
- If one server fails, LB redirects to others
- Users experience fast response

---

**Load balancing algorithms:**

**Round-robin:**
- Request 1 → Server 1
- Request 2 → Server 2
- Request 3 → Server 3
- Request 4 → Server 1 (repeat)

**Least connections:**
- Send to server with fewest active connections
- Better for variable request times

**IP hash:**
- Same client always goes to same server
- Good for session persistence

**Which algorithm for your website?** _________________________________

---

### Activity G: Proxy Server Types

**Understand forward vs reverse proxy:**

**Forward Proxy (outbound):**
```
[Employee Computer] → [Forward Proxy] → [Internet]
                         |
                    (filters, caches,
                     monitors, blocks)
```

**Use cases:**
- Content filtering (block social media at work)
- Caching (speed up repeated requests)
- Anonymity (hide source IP)
- Monitoring (track employee browsing)

**Example:** School/company web filter

---

**Reverse Proxy (inbound):**
```
[Internet User] → [Reverse Proxy] → [Web Servers]
                      |
                (load balancing,
                 SSL termination,
                 caching, security)
```

**Use cases:**
- Load balancing
- SSL/TLS termination (decrypt once, not on each server)
- Caching static content
- Web application firewall (WAF)
- Hide server IPs

**Example:** Cloudflare, nginx

---

**Your network probably has:**
- Forward proxy: Maybe (if company/school network)
- Reverse proxy: No (unless you run servers)

---

### Activity H: VPN Concentrator

**What it does:** Terminates many VPN connections

**Scenario:** 100 remote workers need VPN access

**Without VPN concentrator:**
- Each worker VPNs to a regular router
- Router overwhelmed
- Slow, unreliable

**With VPN concentrator:**
- Dedicated device for VPN
- Hardware acceleration
- Handles 100+ simultaneous connections
- Fast, reliable

---

**Check if you use VPN:**
- Do you connect to work/school VPN? _________________________________
- What VPN client? _________________________________ (Cisco AnyConnect? OpenVPN?)
- On the other end: VPN concentrator handles your connection

**Home VPN:**
- Your router might have VPN server
- Lets you access home network remotely
- Check router settings: VPN Server section

---

### Activity I: Network Device Placement

**Design a network with proper device placement:**

**Scenario:** Small office with 50 employees

**Your design:**
```
        [Internet]
            |
        [_______] ← What device? (Modem)
            |
        [_______] ← What device? (Firewall)
            |
        [_______] ← What device? (Router)
            |
    +---[_______] ← What device? (Core Switch)
    |       |
[Switch]  [Switch] ← Edge switches
    |       |
[Computers] [Computers]
```

**Fill in the blanks with:**
- Modem
- Firewall
- Router
- Core Switch
- Edge Switches

**Why this order?**
1. Modem: Converts ISP signal
2. Firewall: First line of defense (before anything internal)
3. Router: Routes between networks
4. Core Switch: Connects everything internally
5. Edge Switches: Connect end devices

---

### Activity J: Specialized Devices

**Match the device to its use case:**

**Devices:**
- A. VoIP Gateway
- B. Wireless Controller
- C. Content Filter
- D. Media Converter
- E. NAS (Network Attached Storage)

**Scenarios:**

**1. You have 20 wireless APs and need centralized management:**
   Device: _________________________________ (B - Wireless Controller)

**2. Your office uses traditional phones but wants to move to IP phones:**
   Device: _________________________________ (A - VoIP Gateway)

**3. You need to block inappropriate websites for employees:**
   Device: _________________________________ (C - Content Filter)

**4. You need to connect fiber to copper network:**
   Device: _________________________________ (D - Media Converter)

**5. Employees need shared file storage accessible from network:**
   Device: _________________________________ (E - NAS)

---

### Activity K: Home vs Enterprise Devices

**Compare what you'd find in each environment:**

| Feature/Device | Home | Small Office | Enterprise |
|----------------|------|--------------|------------|
| Router | All-in-one combo | Separate router | Enterprise router |
| Firewall | Built into router | Standalone | NGFW (Palo Alto, Fortinet) |
| Switch | Maybe 4-port | 24-48 port | Multiple 48-port, stackable |
| WiFi | Single AP (in router) | 2-5 APs | 10-100+ APs, controller |
| Load Balancer | No | No | Yes (for servers) |
| IPS/IDS | No | Maybe | Yes (dedicated) |
| Backup | External HDD | NAS | Enterprise backup solution |
| Management | Web interface | Basic management | Centralized (SDN, controller) |

**What's in YOUR network?** _________________________________

---

### Activity L: Troubleshooting with Device Knowledge

**For each problem, which device is the likely culprit?**

**Problem 1:** Can't access any websites, but local network works fine
- Likely device: _________________________________ (Router or Modem)
- Why: _________________________________

**Problem 2:** Can access some computers on network but not others
- Likely device: _________________________________ (Switch or VLAN configuration)
- Why: _________________________________

**Problem 3:** WiFi connects but no internet, Ethernet works fine
- Likely device: _________________________________ (Wireless Access Point)
- Why: _________________________________

**Problem 4:** Slow performance on one server, others fine
- Likely device: _________________________________ (Load balancer misconfigured, or server issue)
- Why: _________________________________

**Problem 5:** Website accessible from outside but not from inside office
- Likely device: _________________________________ (Firewall or NAT hairpinning issue)
- Why: _________________________________

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Your company wants to add 100 remote workers:**
   - What devices do you need?
   - VPN concentrator capacity?
   - Firewall rules?
   - How do you secure it?

2. **Your website keeps going down under heavy traffic:**
   - Is it a load balancer issue?
   - How many servers do you need?
   - What algorithm to use?
   - How do you test it?

3. **Home network vs enterprise network:**
   - What's the biggest difference?
   - Why are enterprise devices more expensive?
   - Can you use home equipment for business?
   - What breaks first when you scale?

4. **All-in-one device vs separate devices:**
   - Router/switch/AP/firewall combo (home)
   - Separate devices (enterprise)
   - What are the trade-offs?
   - When does it make sense to separate?

---

## What You Learned Today

- ✅ You identified devices in your home network
- ✅ You explored your router's features
- ✅ You classified devices by OSI layer
- ✅ You understand firewall types (stateless, stateful, NGFW)
- ✅ You know the difference between IDS and IPS
- ✅ You understand load balancer purpose and algorithms
- ✅ You learned forward vs reverse proxy
- ✅ You understand VPN concentrator function
- ✅ You designed proper device placement
- ✅ You matched specialized devices to use cases
- ✅ You compared home vs enterprise devices
- ✅ You troubleshot problems using device knowledge

**Next Lesson:** Cloud Concepts and Virtualization