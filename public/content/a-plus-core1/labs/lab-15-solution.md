# Lab 15: Network Troubleshooting Tools - Solution Guide

**Note to Students:** Only review this AFTER running the commands yourself! Hands-on practice is essential for troubleshooting skills.

---

## Section 1: Concept Check - Answers

**1. You can ping an IP address (8.8.8.8) but cannot ping a website name (google.com). What does this tell you about the problem?**

**Answer:**

This indicates a **DNS resolution problem**, not a connectivity problem.

**Analysis:**

| Test | Result | What It Proves |
|------|--------|----------------|
| ping 8.8.8.8 | Success | Internet connectivity works |
| ping google.com | Fail | Cannot resolve names to IPs |

**The problem is NOT:**
- Network cable/connection
- Router/gateway
- ISP connectivity
- Firewall blocking outbound

**The problem IS:**
- DNS server unreachable
- Wrong DNS server configured
- DNS server not responding
- Corrupted DNS cache

**Fix commands:**

```
ipconfig /flushdns
ipconfig /all          (check DNS servers)
nslookup google.com    (test DNS resolution)
nslookup google.com 8.8.8.8   (test with different DNS)
```

If alternative DNS works, change DNS settings to 8.8.8.8 or 1.1.1.1.

---

**2. Explain what tracert/traceroute shows you that ping cannot.**

**Answer:**

| Feature | Ping | Tracert |
|---------|------|---------|
| Shows destination reachable | ✓ | ✓ |
| Shows latency to destination | ✓ | ✓ |
| Shows every hop along the path | ✗ | ✓ |
| Shows where packets are dropped | ✗ | ✓ |
| Shows which router is slow | ✗ | ✓ |
| Shows the path taken | ✗ | ✓ |

**Tracert provides:**

1. **Complete path visibility** - Every router between you and destination
2. **Per-hop latency** - Which hop is adding delay
3. **Failure location** - Exactly where the connection breaks
4. **ISP insight** - See when traffic leaves your network
5. **Routing information** - Understand the path taken

**Example use case:**

- Ping fails to a server
- Ping can't tell you WHERE it fails
- Tracert shows: Hops 1-5 respond, Hop 6 times out
- Problem is between Hop 5 and Hop 6

---

**3. A user's computer shows an IP address of 169.254.x.x. What command would you use to try to fix this, and what does it do?**

**Answer:**

**Commands:**

```
ipconfig /release
ipconfig /renew
```

**What they do:**

| Command | Action |
|---------|--------|
| `ipconfig /release` | Releases current DHCP lease, gives up IP address |
| `ipconfig /renew` | Sends new DHCP Discover, requests fresh IP |

**Why 169.254.x.x appears:**

APIPA (Automatic Private IP Addressing) assigns 169.254.x.x when:
- DHCP server is unreachable
- No response to DHCP requests
- Network cable disconnected during DHCP
- DHCP scope exhausted

**Full troubleshooting sequence:**

1. `ipconfig /release` - Clear current (broken) lease
2. Check physical connection (cable, link lights)
3. `ipconfig /renew` - Request new lease
4. If still 169.254.x.x:
   - Check DHCP server status
   - Verify correct VLAN/network
   - Check for IP conflicts
   - Try different network port

---

**4. What is the difference between `netstat -a` and `netstat -b`, and when would you use each?**

**Answer:**

| Option | What It Shows | Use When |
|--------|---------------|----------|
| `netstat -a` | All connections and listening ports | Checking what ports are open |
| `netstat -b` | Executable name for each connection | Finding which program is using a port |

**Detailed comparison:**

**`netstat -a` output:**
```
Proto  Local Address          Foreign Address        State
TCP    0.0.0.0:80            0.0.0.0:0              LISTENING
TCP    192.168.1.50:52341    172.217.14.99:443      ESTABLISHED
```

**`netstat -b` output (requires admin):**
```
Proto  Local Address          Foreign Address        State
TCP    0.0.0.0:80            0.0.0.0:0              LISTENING
 [httpd.exe]
TCP    192.168.1.50:52341    172.217.14.99:443      ESTABLISHED
 [chrome.exe]
```

**Common combinations:**

| Command | Purpose |
|---------|---------|
| `netstat -an` | All connections, numeric (no name resolution) |
| `netstat -ano` | All connections with process IDs |
| `netstat -ab` | All connections with executable names |
| `netstat -r` | Routing table |

---

**5. Why would you use `arp -a` when troubleshooting network connectivity?**

**Answer:**

**ARP (Address Resolution Protocol)** maps IP addresses to MAC addresses.

**Use `arp -a` when:**

| Scenario | Why Check ARP |
|----------|---------------|
| Can ping gateway by IP but not by name | Verify MAC address is correct |
| Intermittent connectivity | Check for duplicate IPs (different MACs) |
| Can't reach local device | Verify device is in ARP cache |
| Suspect ARP poisoning | Look for unexpected MAC addresses |
| Network seems slow | Large ARP table might indicate issues |

**What ARP tells you:**

1. **Device is reachable** - If it's in the ARP cache, Layer 2 works
2. **MAC address mapping** - Verify correct device responding
3. **IP conflicts** - Same IP with different MACs = conflict
4. **Network population** - What devices are on the local network

**Example troubleshooting:**

```
C:\> arp -a

Interface: 192.168.1.50 --- 0x3
  Internet Address      Physical Address      Type
  192.168.1.1          00-1a-2b-3c-4d-5e     dynamic   ← Router
  192.168.1.100        00-11-22-33-44-55     dynamic   ← Server
  192.168.1.100        aa-bb-cc-dd-ee-ff     dynamic   ← CONFLICT!
```

Two different MACs for same IP = **IP address conflict**

---

## Section 2: Activity Solutions

### Activity A: Ping Reference

**Ping results interpretation:**

| Result | Meaning |
|--------|---------|
| Reply from x.x.x.x | Success - host is reachable |
| Request timed out | No response (host down, blocked, or unreachable) |
| Destination host unreachable | Router can't find path |
| TTL expired in transit | Packet lived too long (routing loop?) |
| General failure | Local TCP/IP problem |

**Ping options (Windows):**

| Option | Example | Purpose |
|--------|---------|---------|
| -t | `ping -t 8.8.8.8` | Continuous ping until Ctrl+C |
| -n | `ping -n 100 8.8.8.8` | Send specific number of pings |
| -l | `ping -l 1000 8.8.8.8` | Set packet size in bytes |
| -i | `ping -i 5 8.8.8.8` | Set TTL value |
| -a | `ping -a 8.8.8.8` | Resolve IP to hostname |
| -4 | `ping -4 google.com` | Force IPv4 |
| -6 | `ping -6 google.com` | Force IPv6 |

**Linux/Mac options:**

| Option | Example | Purpose |
|--------|---------|---------|
| -c | `ping -c 10 8.8.8.8` | Count (number of pings) |
| -i | `ping -i 0.5 8.8.8.8` | Interval between pings |
| -s | `ping -s 1000 8.8.8.8` | Packet size |
| -t | `ping -t 5 8.8.8.8` | TTL value |

---

### Activity B: Tracert Reference

**Tracert output explained:**

```
Tracing route to google.com [142.250.80.46]

  1    <1 ms    <1 ms    <1 ms  192.168.1.1         ← Your router
  2    10 ms    11 ms    10 ms  96.120.68.41        ← ISP first hop
  3    15 ms    14 ms    14 ms  68.85.187.121       ← ISP backbone
  4     *        *        *     Request timed out.   ← Doesn't respond to ICMP
  5    20 ms    19 ms    19 ms  72.14.215.85        ← Google edge
  6    18 ms    18 ms    18 ms  142.250.80.46       ← Destination
```

**Interpreting results:**

| Observation | Meaning |
|-------------|---------|
| * * * (all timeouts) | Router doesn't respond to ICMP (not necessarily a problem) |
| High latency at one hop | Congestion or distance at that point |
| Increasing latency | Normal - distance adds delay |
| Huge jump in latency | Possible problem at that hop |
| Path completes | Connectivity works |
| Path stops at hop X | Problem between hop X-1 and X |

**Why some hops show * * * :**

Many routers are configured to:
- Ignore ICMP (tracert packets)
- Rate-limit ICMP responses
- Prioritize real traffic over diagnostic packets

**This is often NOT a problem** if the trace completes successfully.

---

### Activity C: ipconfig Reference

**ipconfig commands:**

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `ipconfig` | Basic IP info | Quick IP check |
| `ipconfig /all` | Detailed configuration | Full troubleshooting |
| `ipconfig /release` | Give up DHCP lease | Before renewing or leaving network |
| `ipconfig /renew` | Get new DHCP lease | After release, or to refresh |
| `ipconfig /flushdns` | Clear DNS cache | DNS resolution problems |
| `ipconfig /displaydns` | Show cached DNS entries | See what's cached |
| `ipconfig /registerdns` | Re-register with DNS | AD/DNS issues |

**Linux equivalents:**

| Windows | Linux |
|---------|-------|
| ipconfig | `ip addr` or `ifconfig` |
| ipconfig /all | `ip addr show` |
| ipconfig /release | `sudo dhclient -r` |
| ipconfig /renew | `sudo dhclient` |
| ipconfig /flushdns | `sudo systemd-resolve --flush-caches` |

---

### Activity D: nslookup Reference

**nslookup syntax:**

| Command | Purpose |
|---------|---------|
| `nslookup domain.com` | Basic lookup using default DNS |
| `nslookup domain.com 8.8.8.8` | Query specific DNS server |
| `nslookup -type=mx domain.com` | Query MX (mail) records |
| `nslookup -type=ns domain.com` | Query NS (nameserver) records |
| `nslookup -type=txt domain.com` | Query TXT records |
| `nslookup -type=aaaa domain.com` | Query IPv6 address |
| `nslookup IP.AD.DR.ESS` | Reverse lookup (IP to name) |

**DNS record types:**

| Type | Purpose | Example Use |
|------|---------|-------------|
| A | IPv4 address | Find website IP |
| AAAA | IPv6 address | Find IPv6 address |
| MX | Mail server | Email troubleshooting |
| NS | Name servers | Find authoritative DNS |
| TXT | Text records | SPF, DKIM, verification |
| CNAME | Alias | Find actual hostname |
| PTR | Reverse lookup | IP to hostname |

**Common DNS servers for testing:**

| Provider | IPv4 | IPv6 |
|----------|------|------|
| Google | 8.8.8.8, 8.8.4.4 | 2001:4860:4860::8888 |
| Cloudflare | 1.1.1.1, 1.0.0.1 | 2606:4700:4700::1111 |
| OpenDNS | 208.67.222.222 | 2620:119:35::35 |

---

### Activity E: netstat Reference

**netstat options:**

| Option | Windows | Linux | Purpose |
|--------|---------|-------|---------|
| All connections | -a | -a | Show all connections and listening ports |
| Numeric | -n | -n | Don't resolve names (faster) |
| Process ID | -o | -p | Show PID for each connection |
| Executable | -b | N/A | Show program name (admin required) |
| Routing table | -r | -r | Display routing table |
| Statistics | -s | -s | Protocol statistics |
| Ethernet stats | -e | N/A | Interface statistics |

**Connection states:**

| State | Meaning |
|-------|---------|
| LISTENING | Port is open, waiting for connections |
| ESTABLISHED | Active connection |
| TIME_WAIT | Connection closed, waiting for cleanup |
| CLOSE_WAIT | Remote side closed, local hasn't |
| SYN_SENT | Attempting to connect |
| SYN_RECEIVED | Connection request received |
| FIN_WAIT_1/2 | Closing connection |

**Common usage:**

```bash
# All connections, numeric, with PIDs
netstat -ano

# Find what's using port 80
netstat -ano | find ":80"

# Listening ports only
netstat -an | find "LISTENING"

# Linux: use ss instead (faster)
ss -tuln
```

---

### Activity F: arp Reference

**arp commands:**

| Command | Purpose |
|---------|---------|
| `arp -a` | Display ARP cache |
| `arp -a [IP]` | Show entry for specific IP |
| `arp -d [IP]` | Delete specific entry (admin) |
| `arp -d *` | Clear entire cache (admin) |
| `arp -s [IP] [MAC]` | Add static entry (admin) |

**ARP entry types:**

| Type | Meaning |
|------|---------|
| Dynamic | Learned automatically, expires |
| Static | Manually configured, permanent |

**When to clear ARP cache:**

1. IP address changed but old MAC cached
2. Device replaced (new NIC, same IP)
3. Troubleshooting connectivity issues
4. After network changes

---

### Activity J: Troubleshooting Sequence Reference

**The layered approach:**

| Step | Command | Pass = | Fail = |
|------|---------|--------|--------|
| 1 | ping 127.0.0.1 | TCP/IP stack OK | Reinstall adapter/TCP |
| 2 | ping [your IP] | NIC bound properly | Adapter not bound |
| 3 | ping [gateway] | Local network OK | Cable/switch/gateway issue |
| 4 | ping 8.8.8.8 | Internet reachable | Router/ISP issue |
| 5 | ping google.com | DNS working | DNS configuration issue |

**Decision tree:**

```
ping 127.0.0.1
    ├── FAIL → TCP/IP stack broken
    └── PASS → ping [your IP]
                ├── FAIL → NIC not configured
                └── PASS → ping [gateway]
                            ├── FAIL → Local network issue
                            └── PASS → ping 8.8.8.8
                                        ├── FAIL → Internet/routing issue
                                        └── PASS → ping google.com
                                                    ├── FAIL → DNS issue
                                                    └── PASS → Network is working!
```

---

### Activity L: Hardware Tools Reference

**Cable testing tools:**

| Tool | Purpose | When to Use |
|------|---------|-------------|
| Cable tester | Tests continuity, wire mapping | Verify cable is good |
| Tone generator & probe | Trace cables through walls | Find where cable goes |
| Loopback plug | Tests NIC transmit/receive | Verify NIC works |
| Multimeter | Measure voltage, continuity | Electrical testing |
| Cable certifier | Certify cable meets standards | New installations |
| TDR | Find cable breaks, measure length | Locate cable faults |
| OTDR | Test fiber optic cables | Fiber troubleshooting |

**Wireless tools:**

| Tool | Purpose |
|------|---------|
| Wi-Fi analyzer | Show networks, channels, signal strength |
| Spectrum analyzer | See all RF interference, not just Wi-Fi |
| Site survey tool | Map coverage for new installations |

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Intermittent Connectivity

**Commands to identify packet loss:**

```bash
# Continuous ping with timestamp
ping -t gateway_IP

# Detailed path analysis (takes time)
pathping destination

# Trace with loss statistics
mtr destination  (Linux)
```

**What to look for:**

| Metric | Good | Problem |
|--------|------|---------|
| Packet loss | 0% | >1% |
| Latency consistency | Low variation | High jitter |
| Specific hop | Same as others | Much higher loss/latency |

**pathping output shows:**

- Packet loss percentage at each hop
- Where packets are being dropped
- Cumulative vs per-hop loss

---

### Scenario 2: New Server Not Accessible

**Troubleshooting sequence:**

| Step | Command | Checking |
|------|---------|----------|
| 1 | `ipconfig /all` | Your IP config, same subnet? |
| 2 | `ping 10.0.0.50` | Basic connectivity |
| 3 | `arp -a` | Is server in ARP cache? |
| 4 | `tracert 10.0.0.50` | Path to server |
| 5 | `nslookup servername` | If using hostname |
| 6 | `Test-NetConnection 10.0.0.50 -Port 3389` | Specific port test |

**If ping fails:**

1. Check if server is on same subnet
2. Verify server is powered on
3. Check server's firewall
4. Verify server has correct IP
5. Check physical connectivity (switch port)

**If ping works but service doesn't:**

1. Service not running on server
2. Firewall blocking specific port
3. Service bound to different IP/port

---

### Scenario 3: 169.254.x.x Address (Others Work)

**This is a DHCP problem specific to this computer.**

**Troubleshooting sequence:**

| Step | Action | Why |
|------|--------|-----|
| 1 | Check cable/connection | Physical first |
| 2 | `ipconfig /release` | Clear bad lease |
| 3 | `ipconfig /renew` | Request new lease |
| 4 | Check adapter status | May be disabled |
| 5 | Check for static IP | May be misconfigured |
| 6 | Restart network adapter | Reset NIC |
| 7 | Check MAC filtering | Router may block this MAC |
| 8 | Try different port | Switch port may be bad |

**Since other computers work:**

- DHCP server is working
- Network infrastructure is fine
- Problem is specific to this machine

**Common causes:**

- NIC driver issue
- Static IP accidentally set
- MAC address conflict or filtering
- Disabled adapter

---

### Scenario 4: "The Internet is Slow"

**Metrics to gather:**

| Command | Metric | What It Tells You |
|---------|--------|-------------------|
| `ping -t gateway` | Latency to router | Local network performance |
| `ping -t 8.8.8.8` | Latency to internet | ISP performance |
| `tracert google.com` | Hop-by-hop latency | Where delay is |
| `pathping google.com` | Packet loss per hop | Where loss occurs |
| `netstat -an` | Active connections | Too many connections? |
| Speed test | Throughput | Actual bandwidth |

**Interpreting results:**

| Finding | Likely Cause |
|---------|--------------|
| High latency to gateway | Local network congestion/Wi-Fi issue |
| High latency after gateway | ISP congestion |
| Packet loss at specific hop | Problem at that router |
| Many connections on netstat | Malware or too many apps |
| Good ping, low speed test | Bandwidth saturated |

**Questions to ask:**

1. Slow to all sites or specific ones?
2. Slow on all devices or just one?
3. Slow on wired and wireless?
4. When did it start?
5. Any recent changes?

---

## Key Takeaways

**For the A+ Exam:**

1. **Troubleshooting sequence:** 
   - Loopback → Local IP → Gateway → Internet → DNS

2. **Key commands:**
   - `ipconfig /all` - Full configuration
   - `ping` - Connectivity test
   - `tracert` - Path tracing
   - `nslookup` - DNS testing
   - `netstat -an` - Connection status

3. **APIPA (169.254.x.x):**
   - Means DHCP failed
   - Fix with release/renew

4. **If ping IP works but ping name fails:**
   - DNS problem
   - Flush DNS, check servers

5. **Hardware tools:**
   - Cable tester: Check cables
   - Tone generator: Trace cables
   - Loopback: Test NIC

**For Real-World Skills:**

- Always start with the simplest test (ping)
- Work from local to remote
- Document what you find
- One change at a time
- Verify fix worked before closing

---

**Congratulations on completing Lab 15!**

Command-line troubleshooting is one of the most practical skills you'll use in IT support. These commands work on almost any network issue you'll encounter.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 15: Network Troubleshooting Tools - Solution Guide*