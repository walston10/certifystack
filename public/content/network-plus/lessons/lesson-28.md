# Lesson 28: Command-Line Tools

**Estimated Time:** 30-35 minutes  
**Domain:** Network Troubleshooting (Domain 5.0)  
**Exam Objectives Covered:** 5.3 - Network troubleshooting tools

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Use** ping to test connectivity and measure latency
- **Analyze** traceroute output to identify where connections fail
- **Display** IP configuration with ipconfig/ifconfig/ip commands
- **Troubleshoot** DNS issues with nslookup and dig
- **Monitor** active connections with netstat
- **View** ARP tables and MAC address mappings
- **Check** routing tables with route commands
- **Apply** appropriate tools for different troubleshooting scenarios

---

## Video Resources

**Watch these videos to reinforce the concepts:**

1. **Professor Messer - Network Troubleshooting Tools** (18 min)  
   https://www.youtube.com/watch?v=xZ3RBSsqew4
   
2. **NetworkChuck - Command Line Network Tools** (15 min)  
   https://www.youtube.com/watch?v=tXZXOhYFCYI

3. **PowerCert - Ping and Traceroute Explained** (9 min)  
   https://www.youtube.com/watch?v=vJV-GBZ6PeM

4. **Sunny Classroom - IPConfig and NSLookup** (11 min)  
   https://www.youtube.com/watch?v=PZJQzkETWsE

---

## Introduction

Imagine you're a mechanic diagnosing why a car won't start. You don't just stare at the engine hoping for divine inspiration. **You use tools:** a voltmeter to check the battery, a compression tester for the cylinders, a code reader for the computer system. Each tool gives you specific information to narrow down the problem.

Network troubleshooting is exactly the same. When a user says "I can't access the file server," you need tools to gather specific information:
- Can you reach the server at all? (ping)
- Where does the connection fail along the path? (traceroute)
- What IP address do you have? (ipconfig)
- Is DNS resolving the server name correctly? (nslookup)
- Are there active connections to the server? (netstat)

**Without these tools, you're troubleshooting blind.**

In Lesson 27, you learned the troubleshooting methodology - the *process* of systematic problem-solving. This lesson gives you the *tools* you'll use during that process, especially during **Step 3: Test the theory**.

**Why this matters for Network+ exam:** Command-line tools are heavily tested. You'll see scenarios asking which tool to use, how to interpret output, and what specific commands do. These aren't just exam knowledge - they're tools you'll use daily in IT.

---

## ping - Connectivity Testing

**Purpose:** Test if a remote host is reachable and measure round-trip time.

### How Ping Works

Ping sends **ICMP Echo Request** packets to a target and waits for **ICMP Echo Reply**. It's like shouting "Hello!" and waiting for the echo to come back.

```
Your computer → ICMP Echo Request → Target
Your computer ← ICMP Echo Reply ← Target
```

### Real-World Scenario

User: "I can't access google.com!"

You: Let's ping google.com and see what happens.

```
C:\> ping google.com

Pinging google.com [142.250.185.46] with 32 bytes of data:
Reply from 142.250.185.46: bytes=32 time=14ms TTL=116
Reply from 142.250.185.46: bytes=32 time=15ms TTL=116
Reply from 142.250.185.46: bytes=32 time=13ms TTL=116
Reply from 142.250.185.46: bytes=32 time=14ms TTL=116

Ping statistics for 142.250.185.46:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 13ms, Maximum = 15ms, Average = 14ms
```

**What this tells you:**

✅ **Connection successful** - You can reach google.com  
✅ **DNS working** - google.com resolved to 142.250.185.46  
✅ **Low latency** - 14ms average response time (excellent)  
✅ **No packet loss** - All 4 packets received  
✅ **TTL=116** - Packets passed through routers (started at 128, decreased by 12 hops)

**Your conclusion:** Network connectivity to Google is fine. The problem must be something else (browser issue? proxy? firewall blocking HTTP but allowing ICMP?).

### Understanding Ping Output

**Reply from [IP]: bytes=32 time=14ms TTL=116**

- **Reply from [IP]** - Target is reachable
- **bytes=32** - Packet size (default)
- **time=14ms** - Round-trip time (lower is better)
  - <20ms = Excellent
  - 20-50ms = Good
  - 50-100ms = Acceptable
  - 100-200ms = Noticeable lag (gaming/VoIP affected)
  - 200ms+ = Poor (troubleshoot for issues)
- **TTL=116** - Time To Live (hops remaining before packet expires)

**TTL tells you distance:**
- TTL starts at 128 (Windows) or 64 (Linux)
- Decreases by 1 at each router hop
- TTL=116 means packet went through ~12 routers (128-116=12)
- TTL=1 means packet will expire at next hop

### Ping Failures

**Request timed out:**
```
C:\> ping 192.168.1.50

Pinging 192.168.1.50 with 32 bytes of data:
Request timed out.
Request timed out.
Request timed out.
Request timed out.

Ping statistics for 192.168.1.50:
    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),
```

**What this means:**
- Host might be down
- Host might be blocking ICMP (firewall)
- Network path broken somewhere
- IP address doesn't exist

**Destination host unreachable:**
```
C:\> ping 192.168.99.1

Pinging 192.168.99.1 with 32 bytes of data:
Destination host unreachable.
Destination host unreachable.
```

**What this means:**
- Your computer has no route to that network
- Wrong IP address
- Gateway can't find the destination

### Useful Ping Options

**Continuous ping (Windows: -t, Linux: default):**
```
ping -t google.com

Useful for monitoring connection over time
Press Ctrl+C to stop
```

**Specific number of pings (-n on Windows, -c on Linux):**
```
ping -n 10 google.com          (Windows)
ping -c 10 google.com          (Linux)
```

**Larger packet size (-l on Windows, -s on Linux):**
```
ping -l 1500 google.com        (Windows)
ping -s 1500 google.com        (Linux)

Tests if path supports larger packets (MTU testing)
```

### When Ping Works But Service Doesn't

**Important:** Ping uses ICMP, not TCP/UDP. A successful ping doesn't guarantee application access.

**Scenario:** You can ping web server, but can't browse to it.

```
C:\> ping webserver.company.com
Reply from 192.168.1.10: time=2ms    ← Server is reachable

But browsing to http://webserver.company.com fails
```

**Why?** Server might be:
- Responding to ICMP (ping) but web service is down
- Firewall blocking HTTP (port 80) but allowing ICMP
- Web server software crashed but OS still responds to ping

**Lesson:** Ping tests network connectivity, not application functionality.

🎯 **Exam Tip:** Ping uses ICMP (not TCP/UDP). Successful ping = network path works, but doesn't guarantee application access. TTL tells you how many hops the packet traveled.

---

## tracert / traceroute - Path Analysis

**Purpose:** Show the path packets take to reach a destination and identify where failures occur.

### How Traceroute Works

Traceroute uses TTL (Time To Live) cleverly:

1. Send packet with TTL=1 → First router decrements to 0, sends back "TTL exceeded"
2. Send packet with TTL=2 → Second router decrements to 0, sends back "TTL exceeded"
3. Continue increasing TTL until reaching destination

Each router along the path reveals itself.

### Real-World Scenario

User in your New York office can't access a server in your Los Angeles office. Let's trace the route:

```
C:\> tracert la-server.company.com

Tracing route to la-server.company.com [10.200.50.10]
over a maximum of 30 hops:

  1    <1 ms    <1 ms    <1 ms  192.168.1.1        (Your gateway)
  2     2 ms     2 ms     2 ms  10.10.10.1          (Core router)
  3     5 ms     5 ms     5 ms  172.16.0.1          (Datacenter edge)
  4    15 ms    14 ms    15 ms  203.0.113.1         (ISP router)
  5    25 ms    25 ms    26 ms  198.51.100.5        (ISP backbone)
  6     *        *        *     Request timed out.
  7     *        *        *     Request timed out.
  8     *        *        *     Request timed out.

Trace complete.
```

**What this tells you:**

✅ Hops 1-5 working fine (you can reach your ISP)  
❌ Hop 6+ timing out (problem starts here)

**Your conclusion:** Connection fails at or after hop 5 (198.51.100.5). This is likely an ISP issue or firewall blocking traffic at the remote site. The problem is NOT in your local network (hops 1-3 work).

### Interpreting Traceroute Output

**Each line shows:**
```
Hop#   Time1   Time2   Time3   IP address/hostname
```

**Example:**
```
  3     5 ms     5 ms     5 ms  172.16.0.1
```

- **Hop 3** - Third router in path
- **5ms, 5ms, 5ms** - Three round-trip times (consistency is good)
- **172.16.0.1** - IP of this router

### Common Patterns

**Asterisks (* * *):**
```
  6     *        *        *     Request timed out.
```

**Doesn't always mean failure!** Could mean:
- Router configured not to respond (security policy)
- ICMP rate limiting
- Firewall blocking ICMP

**If subsequent hops work, it's fine:**
```
  6     *        *        *     Request timed out.
  7    45 ms    44 ms    45 ms  10.200.50.1
  8    47 ms    46 ms    47 ms  10.200.50.10        (destination)
```

Hop 6 doesn't respond, but hops 7-8 do. **Destination is reachable** - hop 6 just doesn't reply to traceroute.

**Increasing latency:**
```
  1    <1 ms    <1 ms    <1 ms  192.168.1.1
  2     2 ms     2 ms     2 ms  10.10.10.1
  3    45 ms    45 ms    45 ms  203.0.113.1    ← Big jump
  4   150 ms   151 ms   150 ms  198.51.100.5   ← Another big jump
```

**Normal!** Each hop adds distance. International connections can jump significantly (crossing continents).

**High latency at one hop:**
```
  3     5 ms     5 ms     5 ms  172.16.0.1
  4   450 ms   440 ms   460 ms  10.10.20.1     ← Very high
  5    45 ms    46 ms    45 ms  203.0.113.1     ← Normal again
```

**Problem at hop 4!** This router is overloaded or has issues. Report this to your network team.

### Windows vs Linux

**Windows:** `tracert`  
**Linux/Mac:** `traceroute`

**Difference:** Windows uses ICMP, Linux uses UDP by default. Some firewalls block one but not the other.

### Practical Use Case

**Scenario:** "Our website is slow for international customers but fast for local customers."

Run traceroute from both locations:

**Local customer (Fast):**
```
  1-5   Normal latency to your datacenter (5-15ms each hop)
```

**International customer (Slow):**
```
  1-10  Normal latency in their country
 11-15  Very high latency crossing ocean (200-300ms per hop)
 16-20  Normal latency in your country
```

**Diagnosis:** International connection has high latency due to distance. Not a problem you can fix (physics!) but explains the slowness. Consider CDN or additional datacenter closer to international customers.

🎯 **Exam Tip:** Traceroute shows path and identifies where failures occur. Asterisks don't always mean failure - check if subsequent hops work. Used to diagnose routing issues.

---

## ipconfig / ifconfig / ip - Configuration Display

**Purpose:** Display IP configuration and manage network interfaces.

### The Three Commands

**Windows:** `ipconfig`  
**Linux (old):** `ifconfig` (deprecated but still common)  
**Linux (new):** `ip` (modern replacement)

### Basic ipconfig (Windows)

```
C:\> ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : company.local
   IPv4 Address. . . . . . . . . . . : 192.168.1.50
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
```

**What you see:**
- **Adapter name** - "Ethernet adapter Ethernet"
- **DNS suffix** - company.local (domain)
- **IPv4 address** - Your IP: 192.168.1.50
- **Subnet mask** - 255.255.255.0 (/24 network)
- **Default gateway** - Router: 192.168.1.1

### Detailed ipconfig

```
C:\> ipconfig /all

Windows IP Configuration

   Host Name . . . . . . . . . . . . : DESKTOP-PC01
   Primary Dns Suffix  . . . . . . . : company.local
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : company.local
   Description . . . . . . . . . . . : Intel(R) Ethernet Connection
   Physical Address. . . . . . . . . : 00-1A-2B-3C-4D-5E
   DHCP Enabled. . . . . . . . . . . : Yes
   Autoconfiguration Enabled . . . . : Yes
   IPv4 Address. . . . . . . . . . . : 192.168.1.50(Preferred) 
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Lease Obtained. . . . . . . . . . : Monday, March 18, 2024 8:15:22 AM
   Lease Expires . . . . . . . . . . : Tuesday, March 19, 2024 8:15:22 AM
   Default Gateway . . . . . . . . . : 192.168.1.1
   DHCP Server . . . . . . . . . . . : 192.168.1.5
   DNS Servers . . . . . . . . . . . : 192.168.1.5
                                       8.8.8.8
```

**Additional information:**
- **Physical Address** - MAC address (00-1A-2B-3C-4D-5E)
- **DHCP Enabled** - Getting IP automatically
- **Lease information** - When DHCP lease expires
- **DHCP Server** - Which server gave you the IP
- **DNS Servers** - Where DNS queries go

### Troubleshooting with ipconfig

**Problem: "I can't access anything on the network"**

```
C:\> ipconfig

Ethernet adapter Ethernet:

   IPv4 Address. . . . . . . . . . . : 169.254.100.50
   Subnet Mask . . . . . . . . . . . : 255.255.0.0
   Default Gateway . . . . . . . . . : 
```

**Red flag: 169.254.x.x address!**

This is **APIPA (Automatic Private IP Addressing)** - assigned when DHCP fails.

**What this means:**
- Computer tried to get DHCP address
- DHCP server didn't respond
- Computer assigned itself 169.254.x.x
- **No gateway** - can't access anything beyond local network

**Diagnosis:** DHCP server down, network cable issue, or port not configured for DHCP.

### Useful ipconfig Commands

**Release DHCP address:**
```
ipconfig /release

Removes current IP, gets new one when you renew
```

**Renew DHCP address:**
```
ipconfig /renew

Requests new IP from DHCP server
Good for: fixing IP conflicts, getting updated settings
```

**Flush DNS cache:**
```
ipconfig /flushdns

Clears DNS resolver cache
Good for: DNS not resolving correctly after changes
```

**Display DNS cache:**
```
ipconfig /displaydns

Shows recently resolved DNS queries
```

### Real-World Scenario

User: "I can't access the file server anymore. It worked this morning."

```
C:\> ipconfig

IPv4 Address. . . . . . . . . . . : 192.168.1.50
Subnet Mask . . . . . . . . . . . : 255.255.255.0
Default Gateway . . . . . . . . . : 192.168.1.1
```

Looks normal. Let's check DNS:

```
C:\> ipconfig /all

DNS Servers . . . . . . . . . . . : 8.8.8.8
```

**Aha!** DNS server is Google's public DNS (8.8.8.8), not the company DNS server (192.168.1.5).

Google DNS can't resolve internal hostname "fileserver.company.local" - it doesn't know about it!

**Solution:**
```
ipconfig /release
ipconfig /renew
ipconfig /all

DNS Servers . . . . . . . . . . . : 192.168.1.5  ← Fixed!
```

After DHCP renew, user got correct DNS server and can now access fileserver by name.

🎯 **Exam Tip:** APIPA address (169.254.x.x) = DHCP failure. ipconfig /release and /renew to get new DHCP lease. ipconfig /flushdns clears DNS cache.

---

## nslookup / dig - DNS Troubleshooting

**Purpose:** Query DNS servers and troubleshoot name resolution.

**Windows:** `nslookup`  
**Linux/Mac:** `dig` (more powerful) or `nslookup` (also available)

### Basic nslookup

```
C:\> nslookup google.com

Server:  dns.company.local
Address:  192.168.1.5

Non-authoritative answer:
Name:    google.com
Address:  142.250.185.46
```

**What this shows:**
- **Server** - Which DNS server answered (dns.company.local)
- **Address** - DNS server's IP (192.168.1.5)
- **Name** - What you looked up (google.com)
- **Address** - Answer (142.250.185.46)

### When DNS Fails

**User can ping IP but not hostname:**

```
C:\> ping 192.168.1.10
Reply from 192.168.1.10: time=2ms  ← Works!

C:\> ping fileserver.company.local
Ping request could not find host fileserver.company.local  ← Fails!
```

**This is a DNS problem!** Let's investigate:

```
C:\> nslookup fileserver.company.local

Server:  UnKnown
Address:  192.168.1.5

*** UnKnown can't find fileserver.company.local: Non-existent domain
```

**Diagnosis:** DNS server (192.168.1.5) doesn't have a record for "fileserver.company.local". Either:
- DNS record doesn't exist (need to create it)
- DNS record outdated (need to update it)
- Wrong DNS server being used

### Query Specific DNS Server

**Check what a different DNS server returns:**

```
C:\> nslookup fileserver.company.local 192.168.1.6

Server:  backup-dns.company.local
Address:  192.168.1.6

Name:    fileserver.company.local
Address:  192.168.1.10
```

**Interesting!** The backup DNS server (192.168.1.6) HAS the record, but the primary DNS (192.168.1.5) doesn't.

**Diagnosis:** DNS replication issue between primary and secondary DNS servers.

### Check Different Record Types

**A record (IPv4):**
```
nslookup -type=A google.com
```

**MX record (mail server):**
```
nslookup -type=MX google.com

google.com      mail exchanger = 10 smtp.google.com.
```

**NS record (name servers):**
```
nslookup -type=NS google.com

google.com      nameserver = ns1.google.com.
google.com      nameserver = ns2.google.com.
```

### Real-World Troubleshooting

**Scenario:** After moving file server to new IP, some users can access it, others can't.

**Check DNS:**
```
C:\> nslookup fileserver.company.local

Address:  192.168.1.50  ← Old IP!
```

**Problem:** DNS still has old IP address (192.168.1.50) but server is now at 192.168.1.100.

**Why some users can access:** They're using cached DNS or connecting by IP directly.

**Solution:** Update DNS A record from 192.168.1.50 to 192.168.1.100.

**Force users to refresh:**
```
ipconfig /flushdns   (clears local DNS cache)
```

🎯 **Exam Tip:** nslookup/dig query DNS servers. Use to troubleshoot name resolution issues. Can query specific servers and specific record types (A, MX, NS).

---

## netstat - Connection Monitoring

**Purpose:** Display active network connections, listening ports, and statistics.

### Basic netstat

```
C:\> netstat

Active Connections

  Proto  Local Address          Foreign Address        State
  TCP    192.168.1.50:49234     142.250.185.46:443     ESTABLISHED
  TCP    192.168.1.50:49235     20.189.173.15:443      ESTABLISHED
  TCP    192.168.1.50:49236     192.168.1.10:445       ESTABLISHED
```

**What this shows:**
- **Proto** - Protocol (TCP or UDP)
- **Local Address** - Your IP:port
- **Foreign Address** - Remote IP:port
- **State** - Connection status

**Reading the output:**
- `192.168.1.50:49234` - Your computer, random high port
- `142.250.185.46:443` - Google (probably), HTTPS port
- `ESTABLISHED` - Active connection

### Understanding Connection States

**ESTABLISHED** - Active, working connection  
**LISTENING** - Server waiting for connections on this port  
**TIME_WAIT** - Connection closing (waiting to ensure all packets received)  
**CLOSE_WAIT** - Remote side closed, local application hasn't closed yet  
**SYN_SENT** - Trying to establish connection  
**SYN_RECEIVED** - Received connection request, responding

### Show Listening Ports

```
C:\> netstat -an

Active Connections

  Proto  Local Address          Foreign Address        State
  TCP    0.0.0.0:80             0.0.0.0:0              LISTENING
  TCP    0.0.0.0:443            0.0.0.0:0              LISTENING
  TCP    192.168.1.50:49234     142.250.185.46:443     ESTABLISHED
```

**LISTENING on 0.0.0.0:80 and 0.0.0.0:443:**
- Server listening on ALL interfaces (0.0.0.0)
- Port 80 (HTTP) and port 443 (HTTPS)
- Ready to accept connections

### Show Which Program Is Using Each Port

```
C:\> netstat -ano

  Proto  Local Address          Foreign Address        State           PID
  TCP    0.0.0.0:80             0.0.0.0:0              LISTENING       4512
  TCP    0.0.0.0:3389           0.0.0.0:0              LISTENING       1008
  TCP    192.168.1.50:49234     142.250.185.46:443     ESTABLISHED     5644
```

**PID column** - Process ID using this connection

**Find which program:**
```
tasklist | findstr 4512

httpd.exe         4512 Services   0     45,632 K
```

Port 80 is being used by httpd.exe (Apache web server). Makes sense!

### Real-World Troubleshooting

**Problem:** "Port 80 is already in use, can't start web server"

```
C:\> netstat -ano | findstr :80

TCP    0.0.0.0:80             0.0.0.0:0              LISTENING       2344
```

**Something is already listening on port 80 (PID 2344).**

```
C:\> tasklist | findstr 2344

Skype.exe         2344 Console    1     95,632 K
```

**Aha!** Skype is using port 80. Either:
- Close Skype
- Configure Skype to use different port
- Configure web server to use different port (like 8080)

### Check Routing Table

```
C:\> netstat -r

IPv4 Route Table
===========================================================================
Active Routes:
Network Destination        Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0      192.168.1.1    192.168.1.50     25
        127.0.0.0        255.0.0.0         On-link         127.0.0.1    331
      192.168.1.0    255.255.255.0         On-link     192.168.1.50    281
```

**0.0.0.0/0.0.0.0** - Default route (anything not matching other routes)  
**Gateway 192.168.1.1** - Where to send traffic (your router)  
**On-link** - Directly connected network (no gateway needed)

🎯 **Exam Tip:** netstat shows active connections and listening ports. Use -a for all, -n for numbers (no DNS lookup), -o for process IDs. netstat -r shows routing table.

---

## arp - MAC Address Table

**Purpose:** View and manage ARP cache (IP-to-MAC address mappings).

### Display ARP Table

```
C:\> arp -a

Interface: 192.168.1.50 --- 0x4
  Internet Address      Physical Address      Type
  192.168.1.1           aa-bb-cc-dd-ee-ff     dynamic
  192.168.1.5           11-22-33-44-55-66     dynamic
  192.168.1.10          77-88-99-aa-bb-cc     dynamic
  192.168.1.255         ff-ff-ff-ff-ff-ff     static
```

**What this shows:**
- **Internet Address** - IP address
- **Physical Address** - MAC address
- **Type** - Dynamic (learned) or Static (manually configured)

**Your computer learned:**
- 192.168.1.1 (gateway) is at MAC aa-bb-cc-dd-ee-ff
- 192.168.1.5 (DNS server) is at MAC 11-22-33-44-55-66
- 192.168.1.10 (file server) is at MAC 77-88-99-aa-bb-cc

### Troubleshooting with ARP

**Problem:** "I can ping the gateway by IP but can't access anything beyond it"

```
C:\> arp -a

Interface: 192.168.1.50 --- 0x4
  Internet Address      Physical Address      Type
  192.168.1.1           incomplete            dynamic
```

**ARP entry is incomplete!**

**What this means:**
- Computer sent ARP request for 192.168.1.1
- Never got ARP reply
- Doesn't know gateway's MAC address
- Can't send packets to gateway

**Possible causes:**
- Gateway is down
- Switch port disabled
- VLAN mismatch
- Physical connectivity issue

### Clear ARP Cache

```
arp -d

Deletes all ARP entries
Useful when: Suspect ARP cache corruption, ARP poisoning attack
```

### Real-World Scenario

**After replacing network switch, users report intermittent connectivity.**

**Check ARP:**
```
C:\> arp -a

  192.168.1.1           aa-bb-cc-dd-ee-ff     dynamic  ← Old MAC
  192.168.1.10          77-88-99-aa-bb-cc     dynamic  ← Old MAC
```

**Problem:** Computers cached MAC addresses from old switch. New switch has different MAC addresses (even though IPs are same).

**Solution:**
```
arp -d     (Clear ARP cache)

Computers will re-learn correct MAC addresses
```

🎯 **Exam Tip:** ARP maps IP to MAC addresses. ARP -a displays cache. "Incomplete" entry means ARP request got no reply (device unreachable or down).

---

## route - Routing Table

**Purpose:** Display and modify the routing table.

### Display Routing Table

```
C:\> route print

IPv4 Route Table
===========================================================================
Active Routes:
Network Destination        Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0      192.168.1.1    192.168.1.50     25
        127.0.0.0        255.0.0.0         On-link         127.0.0.1    331
      192.168.1.0    255.255.255.0         On-link     192.168.1.50    281
     192.168.10.0    255.255.255.0     192.168.1.254  192.168.1.50     30
```

**Reading the table:**

**0.0.0.0/0.0.0.0 → Gateway 192.168.1.1**
- Default route (catch-all)
- "If you don't know where to send it, send it here"
- Goes to your router (192.168.1.1)

**192.168.1.0/255.255.255.0 → On-link**
- Local network
- Directly connected (no gateway needed)

**192.168.10.0/255.255.255.0 → Gateway 192.168.1.254**
- Remote network (192.168.10.0/24)
- Must go through gateway 192.168.1.254 to reach it

### Add Static Route

```
route add 10.0.0.0 mask 255.0.0.0 192.168.1.254

Adds route: To reach 10.0.0.0/8 network, use gateway 192.168.1.254
```

**When you need this:**
- Multiple subnets not automatically routed
- VPN connections requiring specific routes
- Manual routing to specific networks

### Delete Route

```
route delete 10.0.0.0
```

### Real-World Scenario

**Users can access some servers but not others.**

```
C:\> route print

  0.0.0.0          0.0.0.0      192.168.1.1
192.168.1.0    255.255.255.0    On-link
192.168.2.0    255.255.255.0    ???  ← Missing!
```

**Missing route!**

Users can access 192.168.1.x devices (local network) but not 192.168.2.x devices (no route configured).

**Solution:**
```
route add 192.168.2.0 mask 255.255.255.0 192.168.1.1 -p

-p makes it persistent (survives reboot)
```

🎯 **Exam Tip:** route print shows routing table. Default route (0.0.0.0/0.0.0.0) is the catch-all. Add static routes for networks not automatically routed.

---

## Other Useful Commands

### hostname

**Shows computer's name:**
```
C:\> hostname
DESKTOP-PC01
```

### pathping (Windows) / mtr (Linux)

**Combines ping + traceroute:**
```
pathping google.com

Shows packet loss at each hop
More detailed than traceroute
```

### telnet

**Test if port is open:**
```
telnet google.com 80

If connects: Port 80 is open
If fails: Port blocked or service not running
```

**Note:** Telnet client might need to be enabled in Windows Features.

### curl / wget

**Test HTTP connections:**
```
curl http://google.com

Returns raw HTTP response
Good for testing web servers
```

---

## Choosing the Right Tool

| Problem | Tool to Use |
|---------|-------------|
| "Can't reach server" | **ping** (test connectivity) |
| "Where is connection failing?" | **tracert** (show path) |
| "What's my IP address?" | **ipconfig** |
| "DHCP not working" | **ipconfig** (check for APIPA 169.254.x.x) |
| "Can ping IP but not hostname" | **nslookup** (DNS issue) |
| "What ports are open?" | **netstat -an** |
| "What program is using port 80?" | **netstat -ano** |
| "Check MAC address" | **ipconfig /all** or **arp -a** |
| "Need routing table" | **route print** or **netstat -r** |
| "DNS not resolving after change" | **ipconfig /flushdns** |

---

## Key Exam Tips

**Know the commands by name and purpose:**
- **ping** - Connectivity test, measures latency, uses ICMP
- **tracert/traceroute** - Shows path, identifies where failures occur
- **ipconfig** - Display/manage IP config (Windows)
- **ifconfig** - Display/manage IP config (Linux, deprecated)
- **ip** - Modern Linux command
- **nslookup/dig** - DNS queries
- **netstat** - Active connections, listening ports, routing table
- **arp** - MAC address table
- **route** - Routing table display/modification

**Common ipconfig options:**
- `/all` - Detailed info including MAC, DHCP, DNS
- `/release` - Release DHCP lease
- `/renew` - Get new DHCP lease
- `/flushdns` - Clear DNS cache
- `/displaydns` - Show DNS cache

**Common netstat options:**
- `-a` - All connections and listening ports
- `-n` - Show numbers (don't resolve names)
- `-o` - Show process IDs
- `-r` - Show routing table

**Diagnostic indicators:**
- **169.254.x.x** - APIPA, DHCP failed
- **0.0.0.0 gateway** - No default route configured
- **Request timed out** (ping) - No response (down or blocked)
- **Destination host unreachable** - No route to destination
- **TTL expired** - Packet traveled too many hops
- **ARP incomplete** - Cannot get MAC address (Layer 2 issue)

---

## Key Takeaways

- [ ] **ping tests connectivity** using ICMP echo request/reply
- [ ] **Successful ping ≠ application working** (ICMP vs TCP/UDP)
- [ ] **TTL in ping** shows how many router hops packet traveled
- [ ] **tracert shows path** to destination and identifies where failures occur
- [ ] **Asterisks in tracert** don't always mean failure (router may not respond)
- [ ] **ipconfig displays IP configuration** on Windows
- [ ] **APIPA address (169.254.x.x)** indicates DHCP failure
- [ ] **ipconfig /release and /renew** refreshes DHCP lease
- [ ] **ipconfig /flushdns** clears DNS resolver cache
- [ ] **nslookup/dig query DNS** servers to troubleshoot name resolution
- [ ] **netstat shows active connections** and listening ports
- [ ] **netstat -ano** includes process IDs
- [ ] **netstat -r** displays routing table
- [ ] **arp -a shows IP-to-MAC** address mappings
- [ ] **route print** displays routing table
- [ ] **0.0.0.0/0.0.0.0** is the default route (catch-all)
- [ ] **Use appropriate tool for each problem** - connectivity, DNS, ports, routing

---

## Check Your Understanding

**1. A user reports they can't access the internet. You ping 8.8.8.8 successfully. What does this tell you?**

<details>
<summary>Show Answer</summary>
<strong>Network connectivity and routing to the internet are working - the problem is likely DNS-related, application-level, or firewall blocking specific protocols/ports.</strong> A successful ping to 8.8.8.8 (Google DNS) proves: (1) Your local network works, (2) Your default gateway works, (3) Routing to the internet works, (4) Remote host is reachable. What it DOESN'T prove: DNS is working correctly, HTTP/HTTPS traffic is allowed, Applications are configured correctly. Next steps: Try ping google.com (if fails, DNS issue), Try opening a web page by IP address, Check if firewall is blocking HTTP/HTTPS, Test with different application. Remember: ping uses ICMP which may be allowed while other protocols (TCP, UDP) are blocked.
</details>

**2. You run ipconfig and see IP address 169.254.100.50. What does this indicate and what should you do?**

<details>
<summary>Show Answer</summary>
<strong>The computer is using APIPA (Automatic Private IP Addressing) because it couldn't get a DHCP address - troubleshoot DHCP server connectivity or check if port is configured for DHCP.</strong> 169.254.x.x addresses are automatically assigned when a computer configured for DHCP can't reach a DHCP server. This means: (1) DHCP server is down or unreachable, (2) Network cable issue, (3) Switch port disabled or misconfigured, (4) VLAN mismatch, (5) DHCP server out of addresses. With APIPA, the computer can only communicate with others in the 169.254.0.0/16 range (link-local) - no internet access, no access to servers. To fix: Check physical connectivity (cables, lights), Verify DHCP server is running, Check switch port configuration, Try ipconfig /release and /renew, Contact network admin if server-side issue.
</details>

**3. What information does tracert provide that ping does not?**

<details>
<summary>Show Answer</summary>
<strong>Tracert shows the complete path (all router hops) packets take to reach the destination and identifies at which hop failures occur, while ping only tests end-to-end connectivity.</strong> Ping answers "Can I reach the destination?" Tracert answers "What path did packets take and where did they fail?" This is critical for troubleshooting because it identifies WHERE the problem is. Example: User can't reach server. Ping times out - you know there's a problem but not where. Tracert shows packets reach your gateway (hop 1), reach your core router (hop 2), reach ISP router (hop 3), then fail at hop 4. Now you know the failure is at or beyond your ISP's first router - you can contact your ISP with specific information. Without tracert, you'd have no idea if the problem was local network, ISP, remote site, or the destination itself.
</details>

**4. A user can ping 192.168.1.10 but gets "could not find host" when pinging fileserver.company.local. What's the problem?**

<details>
<summary>Show Answer</summary>
<strong>DNS resolution is failing - the DNS server doesn't have a record for fileserver.company.local or the computer is using wrong DNS server.</strong> The fact that ping by IP works proves network connectivity is fine. The problem is specifically name resolution. Use nslookup to investigate: nslookup fileserver.company.local will show if DNS query succeeds. Check: (1) Is DNS server reachable? (nslookup should show which server answered), (2) Does DNS record exist? (check DNS server configuration), (3) Is computer using correct DNS server? (ipconfig /all shows DNS servers), (4) Is DNS cache stale? (ipconfig /flushdns to clear). Fix might be: Update DNS server with correct record, Configure computer with correct DNS server address, Wait for DNS replication if record was just added, Use IP address directly if DNS can't be fixed immediately.
</details>

**5. What does netstat -ano show and why is it useful?**

<details>
<summary>Show Answer</summary>
<strong>Shows all (-a) connections with numbers (-n) not hostnames and process IDs (-o), allowing you to identify which specific program is using each network connection or listening port.</strong> Each connection/port is tied to a process ID (PID). This is invaluable for troubleshooting: "Port 80 already in use, can't start web server" - netstat -ano | findstr :80 shows which PID is using port 80. Then tasklist | findstr PID shows which program. Maybe Skype grabbed port 80, maybe another web server is already running, maybe malware opened a listener. Without the -o flag, you'd see port 80 is in use but not know what's using it. With -o, you can identify the program and decide: Kill it if it's wrong, Reconfigure it to use different port, or Realize it's supposed to be there and your new service needs different port. Essential for port conflict troubleshooting.
</details>

**6. You run arp -a and see "incomplete" for your default gateway. What does this mean?**

<details>
<summary>Show Answer</summary>
<strong>Your computer sent an ARP request to learn the gateway's MAC address but never received an ARP reply - indicating a Layer 2 connectivity problem (physical cable, switch port, or VLAN issue).</strong> ARP process: Computer needs to send packet to gateway (192.168.1.1), First needs gateway's MAC address (Layer 2), Sends ARP broadcast "Who has 192.168.1.1?", Gateway should reply "I'm 192.168.1.1, my MAC is aa:bb:cc:dd:ee:ff", Your computer caches this in ARP table. "Incomplete" means the reply never came. This indicates: (1) Gateway is down or unreachable, (2) Network cable unplugged or damaged, (3) Switch port disabled, (4) VLAN mismatch (you're on VLAN 10, gateway on VLAN 20), (5) Switch issue. This is Layer 2 problem. Check: Cable connected? Link lights on? Right VLAN? Try from different device - does IT see the gateway? This isolates whether it's your device or network infrastructure.
</details>

**7. When would you use nslookup to query a specific DNS server (nslookup google.com 8.8.8.8)?**

<details>
<summary>Show Answer</summary>
<strong>When troubleshooting DNS issues to compare results from different DNS servers - determines if the problem is with your configured DNS server or if the DNS record itself is wrong.</strong> Scenario: Users report website www.company.com not resolving. nslookup www.company.com (uses your default DNS) returns wrong IP. But nslookup www.company.com 8.8.8.8 (queries Google's public DNS) returns correct IP. Diagnosis: Your internal DNS server has outdated/incorrect record, but the internet-facing DNS is correct. Fix: Update your internal DNS server. Another scenario: New DNS record added, some users can resolve it, others can't. Query both your primary and secondary DNS servers to check if replication is working. Query external DNS to see if public record published. This technique isolates WHERE the DNS problem is: Your DNS config, Your DNS server's data, DNS replication, External DNS records.
</details>

**8. What's the difference between "Request timed out" and "Destination host unreachable" when pinging?**

<details>
<summary>Show Answer</summary>
<strong>"Request timed out" means packets were sent but no reply received (host down or firewall blocking). "Destination host unreachable" means your router determined there's no route to that network (routing problem or invalid IP).</strong> "Request timed out" - Packets left your computer, traveled through the network, but no ICMP echo reply came back. Causes: Remote host is down, Host firewall blocking ICMP, Network firewall blocking ICMP, Packets lost somewhere, Host doesn't exist. "Destination host unreachable" - Your router/gateway actively told you "I can't reach that network." Causes: No route to that network in routing table, Wrong IP address (doesn't exist), Network interface down, Gateway can't reach next hop. Key difference: Timeout = sent but no response (maybe). Unreachable = router saying "I can't get there" (definitely). Timeout is ambiguous. Unreachable is definitive - there's a routing issue.
</details>

**9. How do you identify which program is using port 80 on a Windows system?**

<details>
<summary>Show Answer</summary>
<strong>Run netstat -ano | findstr :80 to find the PID using port 80, then run tasklist | findstr PID to identify the program name.</strong> Step by step: netstat -ano | findstr :80 shows: TCP 0.0.0.0:80 0.0.0.0:0 LISTENING 2344. The PID is 2344. Then: tasklist | findstr 2344 shows: httpd.exe 2344 Services 0 45,632 K. So httpd.exe (Apache web server) is using port 80. This is essential for troubleshooting port conflicts: "Can't start IIS, port 80 in use" - follow this process to find Apache is running and using port 80. Decision: Stop Apache if you want IIS, Or configure IIS to use port 8080 instead, Or run both if they're serving different content. Without identifying the program, you're stuck - you don't know what's conflicting. This two-step process (netstat for PID, tasklist for program name) solves the mystery.
</details>

**10. You're troubleshooting a routing issue. What command shows the routing table and how do you read it?**

<details>
<summary>Show Answer</summary>
<strong>Use "route print" (Windows) or "netstat -r" to display routing table. Read each route as: "To reach [network/mask], send packets to [gateway] via [interface]."</strong> Example route: Network 192.168.10.0, Mask 255.255.255.0, Gateway 192.168.1.254, Interface 192.168.1.50. Translation: "To reach anything in 192.168.10.0/24, send packets to gateway 192.168.1.254 using interface 192.168.1.50." Special route: 0.0.0.0/0.0.0.0 is the default route (catch-all for anything not matching other routes). Common troubleshooting: User can reach some networks but not others → Check routing table for missing routes. User can't reach internet → Check if default route (0.0.0.0) exists and points to correct gateway. VPN not working → Check if VPN added necessary routes for remote networks. Routing table is the map that determines where packets go - if the map is wrong, packets go wrong places or nowhere.
</details>

**11. What does TTL (Time To Live) tell you in a ping response?**

<details>
<summary>Show Answer</summary>
<strong>TTL shows how many router hops the packet can still travel - it starts at a default value (64 or 128) and decreases by 1 at each router, so you can calculate how many hops the packet traveled.</strong> Windows starts at TTL=128, Linux at TTL=64. Example: Ping shows TTL=116. Calculation: 128 - 116 = 12 hops. The packet traveled through approximately 12 routers to reach the destination. Why this matters: TTL=1 means packet will expire at next router (too many hops, possibly routing loop), Low TTL (like 1-5) suggests you're very close to destination, High TTL (like 120+) suggests packet hasn't traveled far, Decreasing TTL over time with same destination suggests increasing path length (routing change, problem developing). Routing loops: TTL prevents packets from circulating forever. If two routers keep sending packet back and forth, TTL eventually hits 0 and packet dies (TTL exceeded message). Without TTL, routing loops would crash networks.
</details>

**12. You need to renew your DHCP address after network changes. What commands do you run?**

<details>
<summary>Show Answer</summary>
<strong>Run "ipconfig /release" to release current DHCP lease, then "ipconfig /renew" to request new lease from DHCP server.</strong> The process: ipconfig /release tells DHCP server "I'm done with this IP address" and removes your IP configuration. Your network adapter temporarily has no IP. ipconfig /renew sends DHCP Discover broadcast: "Anyone have an IP for me?" DHCP server responds with Offer, you send Request, server sends Ack. You now have fresh IP configuration (might be same IP or different). When to use this: IP address conflict (another device has your IP), DNS/gateway settings changed on DHCP server (get updated settings), Network connectivity issues (fresh start), Moved to different VLAN (need IP from new DHCP scope), After network outage (DHCP server might have cleared your reservation). This is like checking out and back in at a hotel - you might get same room or different room, but either way it's fresh registration.
</details>

---

## Before Moving to Lesson 29

**You should be able to:**
- [ ] Use ping to test connectivity and interpret results
- [ ] Run tracert to identify where connection failures occur
- [ ] Display IP configuration with ipconfig and identify APIPA
- [ ] Troubleshoot DNS with nslookup
- [ ] Monitor connections with netstat
- [ ] View ARP table and understand incomplete entries
- [ ] Read routing table with route print
- [ ] Choose appropriate tool for each troubleshooting scenario
- [ ] Understand common command options (-a, -n, -o, /all, /release, /renew, /flushdns)

**Study strategy:**
- **Memorize command names** - Know which command does what
- **Practice the commands** - Actually run them (if you have a computer)
- **Understand output** - Don't just run commands, interpret results
- **Know when to use each** - Match tools to problems
- **Remember key indicators** - APIPA 169.254.x.x, ARP incomplete, TTL values

---

## Coming Up in Lesson 29

**Next: Cable Testing and Physical Layer Issues**

Now that you know the command-line tools for logical troubleshooting, Lesson 29 covers physical layer tools and issues:
- Cable testers (continuity, wire mapping)
- Tone generator and probe (cable tracing)
- TDR and OTDR (finding breaks)
- Loopback adapters
- Light meters and fiber testing
- Common cable problems (attenuation, crosstalk, EMI)

**Connection:** Commands like ping and tracert test logical connectivity. Physical tools test cables, connectors, and signals. Combined, they cover all layers of troubleshooting.

---

*"The right tool makes all the difference - knowing which tool to use and how to interpret results separates novices from experts."*

---

# ✅ LESSON 28 COMPLETE!

**Progress: 28 of 30 lessons (93.3% complete)**

**Module 5 Network Troubleshooting: 2 of 4 lessons complete**

🎯 You now have the command-line tools - the Swiss Army knife of network troubleshooting!

**Next up:** Lesson 29 - Cable Testing and Physical Layer Issues (testing the physical infrastructure)

**Only 2 lessons remaining!** 🎉 We're in the home stretch!