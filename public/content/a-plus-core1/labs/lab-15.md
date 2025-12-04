# Lab 15: Network Troubleshooting Tools

**Tier:** 1 (Universal)
**Time:** 35-40 minutes
**Exam Objectives:** 2.8 - Given a scenario, use networking tools

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **You can ping an IP address (8.8.8.8) but cannot ping a website name (google.com). What does this tell you about the problem?**

2. **Explain what tracert/traceroute shows you that ping cannot.**

3. **A user's computer shows an IP address of 169.254.x.x. What command would you use to try to fix this, and what does it do?**

4. **What is the difference between `netstat -a` and `netstat -b`, and when would you use each?**

5. **Why would you use `arp -a` when troubleshooting network connectivity?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses command-line tools on your system** - Master essential network troubleshooting commands.

---

#### Activity A: The Ping Command

**Goal:** Master connectivity testing with ping.

**Basic ping tests:**

Run each command and document the results:

**Windows/Mac/Linux:**
```
ping 127.0.0.1
ping localhost
```

| Test | Result | What It Tests |
|------|--------|---------------|
| ping 127.0.0.1 | [ ] Success [ ] Fail | |
| ping localhost | [ ] Success [ ] Fail | |

**Ping your default gateway:**

First, find your gateway: `ipconfig` (Windows) or `ip route` (Linux/Mac)

Your gateway IP: _______________

```
ping [your gateway IP]
```

| Metric | Value |
|--------|-------|
| Packets sent | |
| Packets received | |
| Packets lost | |
| Average latency (ms) | |

**Ping external hosts:**

```
ping 8.8.8.8
ping google.com
```

| Target | Success? | Avg Latency | What It Tests |
|--------|----------|-------------|---------------|
| 8.8.8.8 | [ ] Yes [ ] No | | |
| google.com | [ ] Yes [ ] No | | |

**Ping options (Windows):**

| Option | Command | Purpose |
|--------|---------|---------|
| Continuous | `ping -t 8.8.8.8` | |
| Count | `ping -n 10 8.8.8.8` | |
| Size | `ping -l 1000 8.8.8.8` | |
| TTL | `ping -i 5 8.8.8.8` | |

**Try the continuous ping:**
```
ping -t 8.8.8.8
```
(Press Ctrl+C to stop)

Document what you observed:

_________________________________________________________________

---

#### Activity B: The Tracert/Traceroute Command

**Goal:** Trace the path packets take to a destination.

**Windows:**
```
tracert google.com
```

**Mac/Linux:**
```
traceroute google.com
```

**Document the hops:**

| Hop # | IP Address | Hostname (if shown) | Latency (ms) |
|-------|------------|---------------------|--------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| ... | | | |
| Final | | | |

**Analysis questions:**

1. How many hops to reach google.com? _______

2. Which hop is your router (first hop)? _______________

3. Did any hops show * * * (timeout)? [ ] Yes [ ] No

4. If yes, what does this usually mean?

_________________________________________________________________

5. Which hop had the highest latency?

   Hop #: _______ Latency: _______ ms

**Compare two destinations:**

```
tracert microsoft.com
tracert amazon.com
```

| Destination | Total Hops | Total Time |
|-------------|------------|------------|
| microsoft.com | | |
| amazon.com | | |

Do they share any early hops? _______

Why would they share hops?

_________________________________________________________________

---

#### Activity C: ipconfig / ifconfig / ip Commands

**Goal:** Master IP configuration viewing and management.

**View your configuration:**

**Windows:**
```
ipconfig
ipconfig /all
```

**Mac:**
```
ifconfig
networksetup -getinfo "Wi-Fi"
```

**Linux:**
```
ip addr
ip route
```

**Document your configuration:**

| Setting | Value |
|---------|-------|
| Adapter name | |
| IPv4 address | |
| Subnet mask | |
| Default gateway | |
| DHCP enabled | [ ] Yes [ ] No |
| DHCP server | |
| DNS servers | |
| MAC address | |
| Lease obtained | |
| Lease expires | |

**DHCP commands (Windows):**

| Command | Purpose | When to Use |
|---------|---------|-------------|
| `ipconfig /release` | | |
| `ipconfig /renew` | | |
| `ipconfig /flushdns` | | |
| `ipconfig /displaydns` | | |
| `ipconfig /registerdns` | | |

**Practice the DHCP cycle:**

```
ipconfig /release
ipconfig
ipconfig /renew
ipconfig
```

Document what happened:

Before release - IP: _______________

After release - IP: _______________

After renew - IP: _______________

**DNS cache operations:**

```
ipconfig /displaydns
```

List 3 entries you see in your DNS cache:

1. _______________
2. _______________
3. _______________

```
ipconfig /flushdns
ipconfig /displaydns
```

What happened after flushing?

_________________________________________________________________

---

#### Activity D: nslookup Command

**Goal:** Master DNS troubleshooting.

**Basic lookups:**

```
nslookup google.com
nslookup microsoft.com
nslookup amazon.com
```

| Domain | IP Address(es) | DNS Server Used |
|--------|----------------|-----------------|
| google.com | | |
| microsoft.com | | |
| amazon.com | | |

**Query specific DNS servers:**

```
nslookup google.com 8.8.8.8
nslookup google.com 1.1.1.1
```

| DNS Server | IP Returned for google.com |
|------------|---------------------------|
| Your default | |
| 8.8.8.8 (Google) | |
| 1.1.1.1 (Cloudflare) | |

Are the IPs the same? _______ Why might they differ?

_________________________________________________________________

**Reverse lookup:**

```
nslookup 8.8.8.8
```

What hostname does 8.8.8.8 resolve to?

_________________________________________________________________

**Query different record types:**

```
nslookup -type=mx google.com
nslookup -type=ns google.com
nslookup -type=txt google.com
```

| Record Type | Purpose | Results for google.com |
|-------------|---------|------------------------|
| MX | | |
| NS | | |
| TXT | | |

**Interactive mode:**

```
nslookup
> server 8.8.8.8
> google.com
> set type=mx
> google.com
> exit
```

What advantage does interactive mode offer?

_________________________________________________________________

---

#### Activity E: netstat Command

**Goal:** View network connections and listening ports.

**View all connections:**

**Windows:**
```
netstat -a
netstat -an
```

**Mac/Linux:**
```
netstat -an
# or
ss -tuln
```

**Document active connections:**

| Local Address | Foreign Address | State | Protocol |
|---------------|-----------------|-------|----------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

**Connection states:**

| State | Meaning |
|-------|---------|
| LISTENING | |
| ESTABLISHED | |
| TIME_WAIT | |
| CLOSE_WAIT | |
| SYN_SENT | |

**Find listening ports:**

**Windows:**
```
netstat -an | find "LISTENING"
```

**Mac/Linux:**
```
netstat -an | grep LISTEN
```

List 5 ports your computer is listening on:

| Port | Probable Service |
|------|------------------|
| | |
| | |
| | |
| | |
| | |

**Show process IDs (Windows):**

```
netstat -ano
```

| Port | State | PID |
|------|-------|-----|
| | | |
| | | |
| | | |

**Find what's using a specific port:**

```
netstat -ano | find ":443"
```

What processes are using port 443?

_________________________________________________________________

**Show process names (Windows - run as Administrator):**

```
netstat -ab
```

**View routing table:**

```
netstat -r
```

or (Windows):
```
route print
```

Document your default route:

| Destination | Gateway | Interface |
|-------------|---------|-----------|
| 0.0.0.0 (default) | | |

---

#### Activity F: arp Command

**Goal:** View and manage the ARP cache.

**View ARP table:**

```
arp -a
```

**Document your ARP cache:**

| IP Address | MAC Address | Type |
|------------|-------------|------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Identify your router's MAC address:**

Your gateway IP: _______________

Your gateway's MAC: _______________

**ARP cache analysis:**

1. How many entries are in your ARP cache? _______

2. What does "dynamic" type mean?

_________________________________________________________________

3. What does "static" type mean?

_________________________________________________________________

**Clear ARP cache (requires admin):**

**Windows (Admin):**
```
arp -d *
```

**Linux (root):**
```
ip neigh flush all
```

Why would you clear the ARP cache?

_________________________________________________________________

---

#### Activity G: hostname Command

**Goal:** View and understand system hostname.

```
hostname
```

Your computer's hostname: _______________

**Windows - view FQDN:**
```
hostname
echo %COMPUTERNAME%
```

**Why hostnames matter:**

| Scenario | Why Hostname Important |
|----------|----------------------|
| Network file sharing | |
| Remote desktop | |
| Active Directory | |
| Troubleshooting logs | |

---

#### Activity H: pathping Command (Windows)

**Goal:** Combine ping and tracert for detailed analysis.

```
pathping google.com
```

**Note:** This command takes several minutes to complete.

**Sample output analysis:**

| Hop | RTT | Lost/Sent = Pct | Address |
|-----|-----|-----------------|---------|
| 0 | | | Your computer |
| 1 | | | |
| 2 | | | |
| ... | | | |

**What pathping shows that tracert doesn't:**

_________________________________________________________________

**When to use pathping vs tracert:**

| Scenario | Better Tool | Why |
|----------|-------------|-----|
| Quick path check | | |
| Detailed loss analysis | | |
| Finding congested hop | | |
| Time-sensitive troubleshooting | | |

---

#### Activity I: nbtstat Command (Windows)

**Goal:** View NetBIOS information.

```
nbtstat -n
nbtstat -c
nbtstat -a [computer name]
```

**Your local NetBIOS names:**

```
nbtstat -n
```

| Name | Type | Status |
|------|------|--------|
| | | |
| | | |
| | | |

**NetBIOS cache:**

```
nbtstat -c
```

Any cached entries? _______

**When is NetBIOS used?**

_________________________________________________________________

---

#### Activity J: Systematic Troubleshooting Sequence

**Goal:** Practice the layered troubleshooting approach.

**The connectivity test sequence:**

| Step | Command | Tests | If Fails |
|------|---------|-------|----------|
| 1 | `ping 127.0.0.1` | TCP/IP stack | Reinstall network adapter |
| 2 | `ping [your IP]` | NIC binding | Check adapter settings |
| 3 | `ping [gateway]` | Local network | Cable, switch, or gateway |
| 4 | `ping 8.8.8.8` | Internet (IP) | Router or ISP issue |
| 5 | `ping google.com` | DNS resolution | DNS configuration |

**Run the full sequence and document:**

| Step | Command Used | Result | Conclusion |
|------|--------------|--------|------------|
| 1 - Loopback | | [ ] Pass [ ] Fail | |
| 2 - Local IP | | [ ] Pass [ ] Fail | |
| 3 - Gateway | | [ ] Pass [ ] Fail | |
| 4 - External IP | | [ ] Pass [ ] Fail | |
| 5 - DNS name | | [ ] Pass [ ] Fail | |

**Practice scenario:**

If Step 4 passes but Step 5 fails, what's the problem?

_________________________________________________________________

What commands would you use to fix it?

_________________________________________________________________

---

#### Activity K: Combined Troubleshooting Scenarios

**Goal:** Apply multiple tools to diagnose problems.

**Scenario 1: User can't access websites**

What commands would you run, in order?

| Order | Command | What You're Checking |
|-------|---------|---------------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

**Scenario 2: Slow network performance**

| Command | What to Look For |
|---------|------------------|
| ping -t [gateway] | |
| tracert [destination] | |
| netstat -an | |
| pathping [destination] | |

**Scenario 3: Can't connect to specific server**

Server IP: 192.168.1.100, Port: 3389 (RDP)

| Step | Command | Purpose |
|------|---------|---------|
| 1 | | Verify your IP config |
| 2 | | Test basic connectivity |
| 3 | | Check if port is open |
| 4 | | Verify name resolution |

---

#### Activity L: Hardware Troubleshooting Tools Reference

**Goal:** Understand physical network tools (for exam knowledge).

**Cable testing tools:**

| Tool | Purpose | When to Use |
|------|---------|-------------|
| Cable tester | | |
| Tone generator & probe | | |
| Loopback plug | | |
| Multimeter | | |
| Cable certifier | | |
| TDR (Time Domain Reflectometer) | | |
| OTDR (Optical TDR) | | |

**Wireless tools:**

| Tool | Purpose |
|------|---------|
| Wi-Fi analyzer | |
| Spectrum analyzer | |
| Site survey tool | |

**For each tool, when would you use it?**

1. **Cable tester:** 

_________________________________________________________________

2. **Tone generator:** 

_________________________________________________________________

3. **Loopback plug:** 

_________________________________________________________________

4. **Wi-Fi analyzer:** 

_________________________________________________________________

---

#### Activity M: Command Quick Reference Creation

**Goal:** Create your own command cheat sheet.

**Fill in the syntax and purpose:**

| Task | Windows Command | Linux/Mac Command |
|------|-----------------|-------------------|
| View IP configuration | | |
| Release DHCP lease | | |
| Renew DHCP lease | | |
| Flush DNS cache | | |
| Test connectivity | | |
| Trace route | | |
| View connections | | |
| View ARP table | | |
| DNS lookup | | |
| View hostname | | |
| View routing table | | |

**Most common options:**

| Base Command | Option | Purpose |
|--------------|--------|---------|
| ping | -t | |
| ping | -n [count] | |
| ipconfig | /all | |
| ipconfig | /flushdns | |
| netstat | -a | |
| netstat | -n | |
| netstat | -o | |
| nslookup | -type=[type] | |
| tracert | -d | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A user reports intermittent connectivity. Websites sometimes load, sometimes don't. What commands would help you identify if the problem is packet loss, and at which hop?**

2. **You're told a new server at 10.0.0.50 isn't accessible from the network. Walk through your troubleshooting steps, including what commands you'd run from a client computer.**

3. **A computer was working fine yesterday but today shows a 169.254.x.x address. Other computers on the same switch work fine. What's your troubleshooting sequence?**

4. **A user says "the internet is slow." What specific metrics would you gather using command-line tools, and what would each tell you?**

---

## What You Learned Today

- ✅ Mastered the ping command and its options
- ✅ Traced routes with tracert/traceroute
- ✅ Managed IP configuration with ipconfig
- ✅ Performed DNS lookups with nslookup
- ✅ Analyzed connections with netstat
- ✅ Viewed ARP cache with arp command
- ✅ Used pathping for detailed analysis
- ✅ Learned systematic troubleshooting sequence
- ✅ Combined tools for complex scenarios
- ✅ Understood hardware troubleshooting tools
- ✅ Created personal command reference

**Next Lab:** PC Form Factors and Cases - beginning the Hardware module.

---

## Quick Reference Card (Print This!)

```
╔═══════════════════════════════════════════════════════════════════╗
║              NETWORK TROUBLESHOOTING COMMANDS                      ║
╠═══════════════════════════════════════════════════════════════════╣
║  CONNECTIVITY SEQUENCE:                                            ║
║  1. ping 127.0.0.1      → TCP/IP stack                            ║
║  2. ping [your IP]      → NIC configuration                       ║
║  3. ping [gateway]      → Local network                           ║
║  4. ping 8.8.8.8        → Internet connectivity                   ║
║  5. ping google.com     → DNS resolution                          ║
╠═══════════════════════════════════════════════════════════════════╣
║  COMMON COMMANDS:                                                  ║
║  ipconfig /all          → View full IP configuration              ║
║  ipconfig /release      → Release DHCP lease                      ║
║  ipconfig /renew        → Get new DHCP lease                      ║
║  ipconfig /flushdns     → Clear DNS cache                         ║
║  nslookup [domain]      → DNS lookup                              ║
║  tracert [destination]  → Trace packet path                       ║
║  netstat -an            → View all connections (numeric)          ║
║  netstat -ano           → Connections with process IDs            ║
║  arp -a                 → View ARP cache                          ║
║  pathping [destination] → Detailed path analysis                  ║
╠═══════════════════════════════════════════════════════════════════╣
║  QUICK FIXES:                                                      ║
║  169.254.x.x address → ipconfig /release, then /renew             ║
║  Can't resolve names → ipconfig /flushdns, check DNS              ║
║  Slow connection     → ping -t, look for packet loss/latency      ║
╚═══════════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 15: Network Troubleshooting Tools*