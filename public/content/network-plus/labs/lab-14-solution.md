# Lesson 14 Lab - Answer Key

**Network Devices (Routers, Firewalls, Load Balancers)**

---

## Section 1: Concept Check

1. **c) Layer 3 (Network)**
   - Routers make forwarding decisions based on IP addresses
   - Layer 3 = Network layer
   - Routing between different networks

2. **a) IDS detects, IPS prevents**
   - IDS: Intrusion Detection System (alerts only)
   - IPS: Intrusion Prevention System (blocks attacks)
   - IPS is in-line, IDS is out-of-band

3. **b) Distributes traffic across multiple servers**
   - Prevents server overload
   - Improves performance and reliability
   - Provides redundancy

4. **c) Hub**
   - Layer 1 = Physical layer
   - Hubs only repeat electrical signals
   - No intelligence, all traffic to all ports
   - Obsolete (replaced by switches)

5. **a) A switch that can route between VLANs**
   - Layer 2 switching + Layer 3 routing
   - Also called multilayer switch
   - More efficient than external router
   - Common in enterprise networks

---

## Section 2: Hands-On Activity

### Activity A: Home Network Identification

**Typical home network:**
```
[Internet]
    |
[Cable Modem] (Layer 1 - converts signal)
    |
[WiFi Router] (Multi-function device)
    |  - Router (Layer 3)
    |  - Switch (Layer 2)
    |  - WAP (Layer 2)
    |  - Firewall
    |  - DHCP server
    |
    +---[Computer] (Wired Ethernet)
    +---[Smartphone] (WiFi)
    +---[Smart TV] (WiFi)
    +---[Gaming Console] (Wired or WiFi)
    +---[Smart Home Devices] (WiFi)
```

**Device layer identification:**
- **Modem:** Layer 1 (Physical)
  - Converts digital ↔ analog signals
  - Cable, DSL, or fiber modem
  
- **Router:** Layer 3 (Network)
  - Routes between home network and internet
  - NAT (shares one public IP)
  
- **Switch:** Layer 2 (Data Link)
  - Built into router (usually 4 ports)
  - Forwards based on MAC addresses
  
- **WiFi Access Point:** Layer 2 (Data Link)
  - Built into router
  - Wireless bridging to Ethernet

**Home routers are actually 6+ devices in one:**
1. Router (Layer 3 routing)
2. Switch (Layer 2 switching, 4-8 ports)
3. Wireless Access Point (WiFi)
4. Firewall (security)
5. DHCP server (IP addressing)
6. DNS proxy (caching)
7. NAT device (address translation)

---

### Activity B: Router Features

**Common home router features:**

✅ **DHCP Server:**
- Automatically assigns IP addresses
- Usually 192.168.1.x or 10.0.0.x range
- Lease time: 24 hours typical

✅ **NAT (Network Address Translation):**
- Shares one public IP among all devices
- PAT (Port Address Translation) specifically
- Hides internal IPs from internet

✅ **Port Forwarding:**
- Maps external port to internal device
- Example: Port 80 → 192.168.1.100:80 (web server)
- Used for gaming, servers, remote access

✅ **Firewall:**
- Stateful packet inspection
- Blocks unsolicited inbound connections
- SPI (Stateful Packet Inspection)

✅ **WiFi Settings:**
- SSID, password, encryption (WPA2/WPA3)
- Channel selection (2.4 GHz: 1/6/11)
- Guest network

✅ **Guest Network:**
- Separate WiFi for visitors
- Isolated from main network
- Different password

❓ **Parental Controls:**
- Some routers have this
- Website filtering
- Time restrictions

❓ **QoS (Quality of Service):**
- Prioritize traffic (gaming, video)
- Bandwidth allocation
- Not all routers have it

❓ **VPN Server:**
- Some routers can act as VPN server
- Access home network remotely
- Less common feature

---

**Why consumer routers combine everything:**
- **Cost:** One device cheaper than five
- **Simplicity:** Easier to set up
- **Space:** Takes less room
- **Power:** One power adapter

**Why enterprise separates devices:**
- **Performance:** Dedicated hardware faster
- **Reliability:** One failure doesn't kill everything
- **Scalability:** Upgrade components independently
- **Features:** Enterprise features not in consumer routers

---

### Activity C: Device Layer Classification

**Complete table:**

| Device | Layer | What it looks at |
|--------|-------|------------------|
| Hub | **1** | **Electrical signals (bits)** |
| Switch | **2** | **MAC addresses** |
| Router | **3** | **IP addresses** |
| Firewall | **3-7** | **IPs, ports, content (depends on type)** |
| Load Balancer (L4) | **4** | **IP addresses and port numbers** |
| Load Balancer (L7) | **7** | **HTTP headers, URLs, cookies** |
| Modem | **1** | **Analog/digital conversion** |
| Access Point | **2** | **MAC addresses (wireless bridge)** |
| Layer 3 Switch | **2 & 3** | **MAC addresses AND IP addresses** |

---

**Detailed explanations:**

**Hub (Layer 1):**
- Repeats electrical signals
- No intelligence
- Half-duplex (collisions)
- All ports receive all traffic
- **Obsolete** (haven't been used since ~2000)

**Switch (Layer 2):**
- Forwards frames based on MAC address
- Maintains MAC address table
- Full-duplex
- Each port = separate collision domain
- **Standard today**

**Router (Layer 3):**
- Routes packets based on IP address
- Maintains routing table
- Connects different networks
- Each interface = separate broadcast domain
- **Essential device**

**Firewall (Layer 3-7):**
- **Stateless (Layer 3-4):** IP/port filtering only
- **Stateful (Layer 3-4):** Tracks connection state
- **NGFW (Layer 3-7):** Application awareness, DPI

**Load Balancer L4 (Layer 4):**
- Based on IP + port
- Fast (doesn't inspect content)
- Can't do advanced routing
- Example: Round-robin by IP:port

**Load Balancer L7 (Layer 7):**
- Based on HTTP headers, URLs, cookies
- Slow (must inspect content)
- Advanced routing (URL-based)
- Example: /api/* → Server A, /images/* → Server B

**Modem (Layer 1):**
- Modulator-Demodulator
- Converts digital (Ethernet) ↔ analog (cable/phone)
- Or fiber ↔ Ethernet
- No routing/switching intelligence

**Access Point (Layer 2):**
- Wireless bridge to Ethernet
- Forwards based on MAC addresses
- No routing capability
- Just extends Layer 2 network

**Layer 3 Switch (Layer 2 & 3):**
- Switch + router in one
- Can route between VLANs
- Uses SVI (Switch Virtual Interface)
- Faster than external router

---

### Activity D: Firewall Types

**Stateless Firewall:**
- Examines each packet independently
- No connection tracking
- Uses ACL (Access Control List) rules
- Fast but limited

**Example rule:**
```
permit tcp any any eq 80 (allow HTTP)
deny ip any any (deny everything else)
```

**Problems:**
- Must explicitly allow return traffic
- No context (doesn't know if packet is part of existing connection)
- Easy to misconfigure
- Can't defend against many attacks

---

**Stateful Firewall:**
- Tracks connection state
- Remembers TCP handshakes
- Automatically allows return traffic
- More secure

**How it works:**
```
1. Client sends SYN to server (port 80)
2. Firewall: "New connection, allow and track"
3. Server replies SYN-ACK
4. Firewall: "This is return traffic for existing connection, allow"
5. Connection continues...
```

**State table:**
```
Source IP:Port → Dest IP:Port | State
192.168.1.5:52341 → 8.8.8.8:53 | ESTABLISHED
```

**Benefits:**
- Return traffic automatic
- Prevents spoofing
- Defends against many attacks
- Easier to manage

---

**Next-Generation Firewall (NGFW):**
- Everything stateful firewall does, PLUS:
- **Application awareness:** Knows HTTP from HTTPS content
- **Deep packet inspection (DPI):** Looks inside packets
- **Intrusion prevention (IPS):** Blocks known attacks
- **URL filtering:** Blocks bad websites
- **Malware detection:** Scans files
- **User/identity awareness:** Rules by user, not just IP
- **SSL inspection:** Decrypts and inspects HTTPS

**Example advanced rule:**
```
Allow Facebook, but block Facebook Games
Block file downloads over 100MB
Block torrents (even if on port 80)
Allow Salesforce for sales team only
```

**Modern standard:** Enterprise uses NGFW

---

**Home routers:**
- Usually stateful firewall (basic)
- No DPI, no IPS, no application awareness
- Good enough for home use
- Enterprise needs NGFW

---

### Activity E: IDS vs IPS

**Complete comparison:**

**IDS (Intrusion Detection System):**
- **What it does:** Monitors traffic, alerts on suspicious activity
- **Placement:** Out-of-band (span port, tap)
- **Action:** Logs, sends alerts to admin
- **Problem:** Doesn't stop attacks (only watches)
- **Analogy:** Security camera

**IPS (Intrusion Prevention System):**
- **What it does:** Monitors AND blocks malicious traffic
- **Placement:** In-line (all traffic flows through)
- **Action:** Drops/rejects malicious packets
- **Risk:** False positives can block legitimate traffic
- **Analogy:** Security guard

---

**IDS example:**
```
[Internet] → [Router] → [Switch] → [Servers]
                          ↓ (mirror)
                        [IDS]
                          ↓
                    [SIEM/Alerts]
```

**Attack happens:**
1. Attacker sends exploit to server
2. IDS sees copy of traffic (span port)
3. IDS: "This looks like SQL injection!"
4. IDS sends alert to admin
5. **Attack reaches server** (IDS can't stop it)
6. Admin investigates and responds

---

**IPS example:**
```
[Internet] → [Router] → [IPS] → [Switch] → [Servers]
                         ↓
                   [SIEM/Alerts]
```

**Attack happens:**
1. Attacker sends exploit
2. **IPS sees traffic BEFORE it reaches server**
3. IPS: "This looks like SQL injection!"
4. **IPS drops packet** (blocks attack)
5. IPS sends alert to admin
6. Attack never reaches server ✅

---

**Trade-offs:**

**IDS pros:**
- Can't cause outages (just watching)
- No performance impact on network
- Good for monitoring only

**IDS cons:**
- Doesn't stop attacks
- Reactive (after the fact)
- Requires manual response

**IPS pros:**
- Actively prevents attacks
- Immediate response
- No manual intervention needed

**IPS cons:**
- Can cause outages (false positives)
- Performance impact (in-line)
- Must be very accurate

**Best practice:** Use both
- IDS for comprehensive monitoring
- IPS for critical systems

---

### Activity F: Load Balancer Scenario

**Algorithms explained:**

**Round-Robin:**
```
Request 1 → Server 1
Request 2 → Server 2
Request 3 → Server 3
Request 4 → Server 1 (repeat)
```

**Pros:**
- Simple
- Even distribution (over time)
- Fair

**Cons:**
- Doesn't account for server load
- Session persistence issues

**Best for:** Stateless applications, all servers same capacity

---

**Least Connections:**
```
Server 1: 10 connections
Server 2: 5 connections  ← Send here
Server 3: 8 connections
```

**Pros:**
- Adapts to server load
- Better for variable request times

**Cons:**
- More complex
- Needs connection tracking

**Best for:** Variable request times, different server capacities

---

**IP Hash:**
```
hash(client_IP) % 3 = server_number
123.45.67.89 → always Server 2
```

**Pros:**
- Same client always goes to same server
- Session persistence without cookies

**Cons:**
- Uneven distribution if few clients
- Server failure requires rehashing

**Best for:** Stateful applications, session-based

---

**Weighted Round-Robin:**
```
Server 1: Weight 3 (gets 3× traffic)
Server 2: Weight 2 (gets 2× traffic)
Server 3: Weight 1 (gets 1× traffic)
```

**Best for:** Different server capacities

---

**Real-world:**
- Simple website → Round-robin
- Shopping cart → IP hash or session cookies
- Different server specs → Weighted
- Long-running requests → Least connections

---

### Activity G: Proxy Server Types

**Forward Proxy (client-side):**

**Topology:**
```
[Employee] → [Forward Proxy] → [Internet]
             - Caches content
             - Filters URLs
             - Logs requests
             - Hides client IP
```

**Use cases:**

**Content Filtering:**
- Block social media at work
- Block malicious sites
- Enforce acceptable use policy

**Caching:**
- Cache frequently accessed sites
- Reduce bandwidth usage
- Faster load times

**Anonymity:**
- Hide employee IPs from internet
- All requests appear from proxy IP

**Monitoring:**
- Track employee browsing
- Generate usage reports
- Security monitoring

**Examples:**
- Squid proxy
- Blue Coat ProxySG
- Zscaler
- School/corporate web filters

---

**Reverse Proxy (server-side):**

**Topology:**
```
[Internet] → [Reverse Proxy] → [Web Servers]
             - Load balancing
             - SSL termination
             - Caching
             - Security (WAF)
```

**Use cases:**

**Load Balancing:**
- Distribute requests across multiple servers
- Same function as load balancer

**SSL Termination:**
- Decrypt HTTPS once (at proxy)
- Servers don't need SSL certificates
- Reduces server CPU load

**Caching:**
- Cache static content (images, CSS, JS)
- Serve from cache (faster)
- Reduce backend server load

**Web Application Firewall (WAF):**
- Inspect HTTP requests
- Block SQL injection, XSS, etc.
- Protect backend servers

**Hide Backend:**
- Internet only sees proxy IP
- Backend server IPs hidden
- Security benefit

**Examples:**
- nginx
- HAProxy
- Cloudflare
- AWS CloudFront
- Akamai

---

**Key difference:**
- **Forward:** Proxies FOR clients (internal to internet)
- **Reverse:** Proxies FOR servers (internet to internal)

---

### Activity H: VPN Concentrator

**Why dedicated VPN device?**

**Without VPN concentrator (using router):**
- Router CPU handles VPN encryption
- Limited concurrent connections (maybe 5-10)
- Slow performance
- Router resources exhausted

**With VPN concentrator:**
- Dedicated CPU for VPN
- Hardware acceleration for encryption
- Hundreds/thousands of concurrent connections
- Fast performance
- Router freed up for routing

---

**Features:**
- **IPsec VPN support**
- **SSL VPN support**
- **Multiple VPN tunnels**
- **User authentication** (RADIUS, LDAP, Active Directory)
- **Split tunneling configuration**
- **High availability** (redundant units)

**Examples:**
- Cisco ASA
- Cisco ISR (with VPN module)
- Palo Alto (with VPN license)
- Fortinet FortiGate
- OpenVPN Access Server

---

**Home VPN server:**
- Some routers have VPN server
- Good for 1-5 users
- Access home network remotely
- Not suitable for company use

**Enterprise VPN:**
- Dedicated VPN concentrator
- 100-10,000+ concurrent users
- High availability
- Centralized management

---

### Activity I: Network Device Placement

**Correct order:**
```
        [Internet]
            |
        [Modem] ← Converts ISP signal to Ethernet
            |
        [Firewall] ← First line of defense
            |
        [Router] ← Routes between networks
            |
        [Core Switch] ← Central aggregation point
            |
    +-------+-------+
    |               |
[Edge Switch]  [Edge Switch] ← Connect end devices
    |               |
[Computers]    [Computers]
```

---

**Why this specific order?**

**1. Modem first:**
- Provides internet connectivity
- Converts signal (cable/DSL/fiber → Ethernet)
- No security, just connectivity

**2. Firewall second:**
- **BEFORE router (important!)**
- Protects entire network
- First line of defense
- Blocks attacks before they reach internal devices

**3. Router third:**
- Routes between internet and internal network
- NAT (if needed)
- Can have multiple internal networks

**4. Core Switch:**
- Aggregates all internal traffic
- Layer 2 or Layer 3 switch
- Central distribution point
- Usually fiber connections to edge switches

**5. Edge Switches:**
- Connect end devices (computers, phones, printers)
- Usually one per floor/department
- 24-48 port switches
- Copper connections to devices

---

**Alternative placement (also valid):**
```
[Internet] → [Router with Firewall] → [Core Switch] → [Edge Switches]
```

Many enterprise routers have integrated firewalls.

---

**Additional devices in enterprise:**
```
[Internet]
    |
[Firewall]
    |
[Router]
    |
[Core Switch]
    |
+---[IPS] ← Between core and edge for security
|   |
|   +---[Edge Switch] → [Computers]
|   +---[Edge Switch] → [Servers]
|
+---[Load Balancer] → [Web Servers]
+---[VPN Concentrator] → [Remote Users]
```

---

### Activity J: Specialized Devices

**Answers:**

**1. 20 wireless APs need centralized management:**
**Device: B - Wireless Controller**

**Why:**
- Manages all APs from single interface
- Unified configuration
- Seamless roaming
- Centralized security policies
- Load balancing
- RF optimization

**Examples:**
- Cisco WLC (Wireless LAN Controller)
- Aruba Mobility Controller
- Ubiquiti UniFi Controller

---

**2. Traditional phones to IP phones:**
**Device: A - VoIP Gateway**

**Why:**
- Converts analog phone signals to VoIP (digital)
- Bridges traditional phone system (PBX) to IP network
- Allows gradual migration
- Connects PSTN (public phone network) to VoIP system

**Examples:**
- Cisco VG series
- AudioCodes MediaPack
- Grandstream GXW series

---

**3. Block inappropriate websites:**
**Device: C - Content Filter**

**Why:**
- Inspects HTTP/HTTPS traffic
- Blocks based on URL categories
- Can block malware sites
- Enforces acceptable use policy

**Examples:**
- Cisco Umbrella
- Forcepoint Web Security
- Zscaler
- OpenDNS

---

**4. Connect fiber to copper:**
**Device: D - Media Converter**

**Why:**
- Physical layer conversion
- Single-mode fiber ↔ copper Ethernet
- No routing/switching, just conversion
- Used when fiber run meets copper equipment

**Examples:**
- TP-Link MC200CM
- Transition Networks
- Any generic fiber-to-copper converter

---

**5. Shared file storage on network:**
**Device: E - NAS (Network Attached Storage)**

**Why:**
- File-level storage (SMB, NFS)
- Easy to set up and use
- Accessible from any computer on network
- Built-in RAID for redundancy

**Difference from SAN:**
- **NAS:** File-level (like a file server)
- **SAN:** Block-level (like a local disk)

**Examples:**
- Synology
- QNAP
- Western Digital MyCloud
- FreeNAS/TrueNAS

---

### Activity K: Home vs Enterprise

**Detailed comparison:**

**Router:**
- **Home:** TP-Link, Netgear, Asus ($50-200)
  - All-in-one device
  - Web interface management
  - Consumer features
- **Small Office:** Business-class router ($300-800)
  - Separate router/switch/AP
  - Basic management
  - VPN support
- **Enterprise:** Cisco, Juniper ($2,000-50,000+)
  - Dedicated routing only
  - CLI + GUI management
  - BGP, OSPF, MPLS support
  - Redundant power supplies
  - High availability

**Firewall:**
- **Home:** Built into router
  - Stateful only
  - Basic rules
- **Small Office:** Dedicated firewall ($500-2,000)
  - Stateful + some application awareness
  - VPN built-in
- **Enterprise:** NGFW ($5,000-100,000+)
  - Full NGFW features
  - IPS, DPI, application control
  - Dedicated hardware
  - High throughput (multi-Gbps)

**Switch:**
- **Home:** 5-8 port ($20-50)
  - Unmanaged
  - Gigabit
  - Plastic case
- **Small Office:** 24-48 port managed ($300-1,000)
  - VLAN support
  - Web management
  - Metal case
- **Enterprise:** Stackable, modular ($3,000-30,000+)
  - Layer 3 switching
  - PoE+, PoE++
  - 10G uplinks
  - Redundant power
  - Lifetime warranty

**WiFi:**
- **Home:** Single AP ($50-300)
  - Built into router
  - 1-3 antennas
  - Simple setup
- **Small Office:** 2-5 APs ($150-400 each)
  - Standalone APs
  - Unified management
  - Better coverage
- **Enterprise:** 10-100+ APs ($300-1,000+ each)
  - Controller-based
  - Centralized management
  - Advanced features (roaming, RF optimization)
  - Enterprise authentication (802.1X)

---

**Why enterprise costs more:**
1. **Performance:** Higher throughput
2. **Reliability:** Better components, redundancy
3. **Features:** Advanced capabilities
4. **Support:** Enterprise support contracts
5. **Scalability:** Designed for growth
6. **Management:** Centralized, automation
7. **Security:** Advanced threat prevention

---

### Activity L: Troubleshooting

**Problem 1: Can't access websites, local works**
- **Device:** Router or Modem
- **Why:** 
  - No internet gateway
  - Modem offline (check lights)
  - Router not routing to internet
  - ISP outage
- **Test:** ping 8.8.8.8 (Google DNS)
  - Works → DNS issue
  - Fails → router/modem/ISP issue

---

**Problem 2: Can't access some computers**
- **Device:** Switch or VLAN configuration
- **Why:**
  - Bad switch port
  - VLAN mismatch (different VLANs can't communicate)
  - Spanning tree blocking port
  - Access control list blocking
- **Test:** Ping specific IPs, check switch port status

---

**Problem 3: WiFi connects, no internet; Ethernet works**
- **Device:** Wireless Access Point or WiFi configuration
- **Why:**
  - AP not connected to network properly
  - AP in wrong VLAN
  - DHCP not reaching WiFi clients
  - Captive portal blocking
- **Test:** Check if getting IP address (ipconfig)

---

**Problem 4: One server slow, others fine**
- **Device:** Load balancer misconfigured, OR server itself
- **Why:**
  - Load balancer sending too much traffic to one server
  - Server overloaded (CPU, memory, disk)
  - Network congestion to that server
  - Algorithm not distributing evenly
- **Test:** Check server resources, check load balancer distribution

---

**Problem 5: Website accessible outside but not inside**
- **Device:** Firewall or NAT hairpinning
- **Why:**
  - **NAT hairpinning issue** (most common)
    - Internal client → public IP → router tries to NAT back to internal
    - Most routers don't support this
  - Firewall blocking internal-to-public-IP traffic
- **Solution:** 
  - Use internal IP/hostname when inside
  - Enable NAT hairpinning (if router supports)
  - Split-horizon DNS (internal DNS returns internal IP)

---

## Section 3: Reflection

**1. Adding 100 remote workers:**

**Devices needed:**
- **VPN concentrator** (can handle 100+ connections)
- **Firewall upgrade** (if current can't handle VPN traffic)
- **Authentication server** (RADIUS, Active Directory)
- **Maybe:** Load balancer (if VPN users access internal servers heavily)

**VPN concentrator capacity:**
- Current capacity: Check concurrent connection limit
- Need: 100 concurrent (plan for 150-200 for growth)
- Throughput: 100 users × 5 Mbps each = 500 Mbps minimum

**Firewall rules:**
- Allow VPN traffic inbound (usually UDP 500, 4500 for IPsec)
- Rules for VPN users accessing internal resources
- Split tunneling decision:
  - Full tunnel: All traffic through VPN (more secure)
  - Split tunnel: Only internal traffic through VPN (less secure, faster)

**Security:**
- Two-factor authentication (2FA)
- Certificate-based authentication
- Monitor VPN logs
- Endpoint security on remote computers
- Regular security awareness training

---

**2. Website keeps crashing under load:**

**Is it load balancer?**
- Check if load balancer is distributing evenly
- Check if algorithm is appropriate
- Check if health checks working
- Maybe need more powerful load balancer

**How many servers needed?**
- Calculate: Peak traffic ÷ Single server capacity
- Example: 10,000 requests/sec peak, each server handles 2,000
- Need: 5 servers minimum (6-7 for redundancy)

**Algorithm:**
- **Stateless site:** Round-robin or least connections
- **Shopping cart/login:** IP hash or sticky sessions
- **Variable request times:** Least connections

**Testing:**
- Load testing tools (Apache JMeter, Gatling)
- Gradually increase load
- Monitor server CPU, memory, response times
- Find breaking point
- Add capacity before reaching 80% utilization

---

**3. Home vs enterprise networks:**

**Biggest difference:**
- **Scale:** Home = 5-10 devices, Enterprise = 1000s
- **Reliability:** Home = best effort, Enterprise = 99.99% uptime
- **Management:** Home = one person, Enterprise = dedicated IT team
- **Security:** Home = basic, Enterprise = comprehensive

**Why enterprise costs more:**
- Performance (10G vs 1G)
- Reliability (redundancy, failover)
- Support (24/7 vendor support)
- Features (advanced routing, security)
- Management (centralized, automated)

**Can you use home equipment for business?**
- **Very small business (1-5 people):** Maybe
- **10+ people:** No, you'll have problems
  - Performance issues
  - Reliability problems
  - No support when things break
  - Security vulnerabilities
  - Won't scale

**What breaks first:**
- **1-5 devices:** Home equipment fine
- **10-20 devices:** WiFi gets congested
- **20-50 devices:** Router/firewall overwhelmed
- **50+ devices:** Need enterprise equipment
- **100+ devices:** Need proper network design

---

**4. All-in-one vs separate:**

**All-in-one (home):**
- **Pros:**
  - Cheap ($100-200)
  - Easy to set up
  - One device to manage
  - Small physical footprint
- **Cons:**
  - Can't upgrade components
  - Performance limited
  - Single point of failure
  - Consumer-grade reliability

**Separate (enterprise):**
- **Pros:**
  - Better performance (dedicated hardware)
  - Upgrade components independently
  - If one fails, others continue
  - Enterprise features
  - Scalable
- **Cons:**
  - More expensive ($$$)
  - More complex to set up
  - Multiple devices to manage
  - Larger physical footprint
  - Requires expertise

**When to separate:**
- **< 10 devices:** All-in-one fine
- **10-25 devices:** Consider separate router + AP
- **25-50 devices:** Separate router, switch, APs
- **50+ devices:** Fully separate (router, firewall, core switch, edge switches, controller-based WiFi)
- **Or:** When need advanced features (VLANs, BGP, etc.)

---

## Key Concepts Summary

**Device layers:**
- Layer 1: Hub, repeater, modem, media converter
- Layer 2: Switch, bridge, AP
- Layer 3: Router, Layer 3 switch
- Layer 4: Load balancer (L4)
- Layer 7: Load balancer (L7), proxy, firewall (NGFW)

**Security devices:**
- Firewall: Filters traffic (stateless, stateful, NGFW)
- IDS: Detects attacks (alerts only)
- IPS: Prevents attacks (blocks)
- UTM: All-in-one security

**Optimization:**
- Load balancer: Distributes traffic
- Proxy: Forward (client-side) or Reverse (server-side)
- Content filter: Blocks inappropriate content
- VPN concentrator: Terminates many VPNs

**Specialized:**
- VoIP gateway: Analog ↔ IP phone conversion
- Wireless controller: Manages many APs
- Media converter: Fiber ↔ copper conversion
- NAS: Network file storage
- SAN: Block-level storage

---

## Exam Tips

**Memorize:**
- OSI layers for each device type
- IDS detects, IPS prevents
- Stateful > stateless firewall
- Layer 3 switch = switch + router
- Load balancer distributes traffic
- Forward proxy = client-side
- Reverse proxy = server-side

**Common questions:**
- "What layer does a router operate at?" → Layer 3
- "Difference between IDS and IPS?" → IDS detects, IPS prevents
- "What is a Layer 3 switch?" → Switch that can route
- "What does a load balancer do?" → Distributes traffic across servers

---

## Did It Work?

If you were able to:
- ✅ Identify devices in your home network
- ✅ Explore router features
- ✅ Classify devices by OSI layer
- ✅ Understand firewall types
- ✅ Distinguish IDS from IPS
- ✅ Understand load balancing
- ✅ Know proxy types
- ✅ Design device placement
- ✅ Match specialized devices to uses
- ✅ Compare home vs enterprise
- ✅ Troubleshoot using device knowledge

**You understand network devices!**

Devices are the building blocks of networks. Knowing what each does and where it goes is fundamental!

**Next:** Cloud concepts and virtualization