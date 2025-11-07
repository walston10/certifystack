# Lab 28: Command-Line Tools
**Time:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain:** Network Troubleshooting (5.0)

## Lab Objectives
- Master essential network command-line tools
- Use proper syntax and options for each tool
- Apply tools to troubleshooting scenarios
- Interpret command output correctly
- Select appropriate tools for specific problems
- Build command-line troubleshooting skills

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What's the difference between ping and tracert/traceroute?**
   Ping: _______________________________________________
   Tracert: ____________________________________________

2. **Which command shows your IP configuration?**
   Windows: ____________________________________________
   Linux/Mac (modern): _________________________________

3. **What port does telnet use by default?**
   _________________________________________________

4. **What's the difference between netstat -a and netstat -n?**
   -a: ________________________________________________
   -n: ________________________________________________

5. **Which command clears the DNS cache on Windows?**
   _________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Ping Command Mastery 🏓
**Time:** 3 minutes

Run these ping commands and record results:

| Command | Purpose | Your Result |
|---------|---------|-------------|
| `ping 127.0.0.1` | | |
| `ping -n 5 8.8.8.8` | | |
| `ping -l 1500 google.com` | | |
| `ping -t gateway_ip` | | |
| `ping -a ip_address` | | |

**Interpret these ping results:**
```
Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
```
- Responding device: _________________________________
- Packet size: ______________________________________
- Latency: __________________________________________
- TTL meaning: _______________________________________

---

### Activity B: Traceroute Path Analysis 🗺️
**Time:** 3 minutes

**Run traceroute to 8.8.8.8:**
```bash
# Windows
tracert 8.8.8.8

# Linux/Mac
traceroute 8.8.8.8
```

**Analyze output:**
| Hop # | IP Address | Response Time | Location/Owner |
|-------|------------|---------------|----------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

**Identify issues in this tracert output:**
```
1    1 ms    <1 ms    1 ms    192.168.1.1
2    *        *        *       Request timed out
3    15 ms   14 ms    16 ms   10.0.0.1
```
Issue: ______________________________________________
Likely cause: _______________________________________

---

### Activity C: IP Configuration Commands 💻
**Time:** 3 minutes

Run and document these commands:

**Windows ipconfig:**
```cmd
ipconfig /all
```
Record:
- IPv4 Address: _____________________________________
- Subnet Mask: ______________________________________
- Default Gateway: __________________________________
- DNS Servers: ______________________________________
- DHCP Server: ______________________________________
- MAC Address: ______________________________________

**DHCP operations:**
| Command | When to Use | Expected Result |
|---------|-------------|-----------------|
| `ipconfig /release` | | |
| `ipconfig /renew` | | |
| `ipconfig /flushdns` | | |
| `ipconfig /displaydns` | | |

---

### Activity D: DNS Troubleshooting Tools 🌐
**Time:** 3 minutes

Test DNS resolution:

**nslookup commands:**
```cmd
nslookup google.com
nslookup google.com 8.8.8.8
nslookup -type=MX gmail.com
nslookup -type=NS example.com
```

**Record results:**
| Query | DNS Server Used | Result | Record Type |
|-------|----------------|--------|-------------|
| google.com | | | |
| MX gmail.com | | | |
| NS example.com | | | |

**When DNS fails, check:**
□ Can ping DNS server IP?
□ Correct DNS servers configured?
□ DNS cache needs flushing?
□ Firewall blocking port 53?

---

### Activity E: Netstat Network Analysis 📊
**Time:** 3 minutes

Run these netstat commands:

| Command | Purpose | Key Finding |
|---------|---------|-------------|
| `netstat -a` | | |
| `netstat -n` | | |
| `netstat -r` | | |
| `netstat -ano` | | |
| `netstat -s` | | |

**Interpret this netstat output:**
```
Proto  Local Address     Foreign Address    State        PID
TCP    0.0.0.0:445      0.0.0.0:0         LISTENING    4
TCP    192.168.1.5:50234  52.97.146.66:443  ESTABLISHED  2468
UDP    0.0.0.0:123      *:*                             1056
```

Line 1: ____________________________________________
Line 2: ____________________________________________
Line 3: ____________________________________________

---

### Activity F: ARP Table Management 🔄
**Time:** 3 minutes

Work with ARP cache:

**View ARP table:**
```cmd
arp -a
```

**Document entries:**
| IP Address | MAC Address | Type | Interface |
|------------|-------------|------|-----------|
| | | | |
| | | | |

**ARP troubleshooting:**
- Duplicate IP detection: ____________________________
- Wrong MAC for gateway: _____________________________
- Clear ARP cache: ___________________________________

**Identify ARP poisoning:**
Gateway should be: __________________________________
Current MAC is: _____________________________________
Match? ______________________________________________

---

### Activity G: Routing Table Analysis 🛤️
**Time:** 3 minutes

Examine routing table:

**Windows:**
```cmd
route print
```

**Linux:**
```bash
ip route show
# or
route -n
```

**Key routes to identify:**
| Destination | Gateway | Interface | Purpose |
|-------------|---------|-----------|---------|
| 0.0.0.0/0 | | | |
| 127.0.0.0/8 | | | |
| 192.168.1.0/24 | | | |

**Add static route (example):**
```cmd
route add 10.0.0.0 mask 255.0.0.0 192.168.1.1
```
When would you need this? ___________________________

---

### Activity H: Advanced Diagnostic Tools 🔧
**Time:** 2 minutes

Use specialized tools:

**pathping (Windows):**
```cmd
pathping google.com
```
Advantage over tracert: _____________________________

**nbtstat (Windows):**
```cmd
nbtstat -n
nbtstat -c
```
Shows: ______________________________________________

**hostname command:**
```cmd
hostname
```
Returns: ____________________________________________

**Test port connectivity:**
```cmd
telnet smtp.gmail.com 25
```
If connects: _______________________________________
If fails: __________________________________________

---

### Activity I: Command Tool Selection Guide 🎯
**Time:** 3 minutes

Match tool to scenario:

| Scenario | Best Tool | Command | Why |
|----------|-----------|---------|-----|
| Check if server is up | | | |
| Find where packets drop | | | |
| Verify DNS resolution | | | |
| See active connections | | | |
| Check IP configuration | | | |
| Test specific port | | | |
| View MAC addresses | | | |
| Check routing path | | | |

---

### Activity J: Command Output Interpretation 📖
**Time:** 3 minutes

Diagnose from output:

**Scenario 1:**
```
Pinging 8.8.8.8 with 32 bytes of data:
Request timed out.
Request timed out.
```
Problem: ____________________________________________
Check: ______________________________________________

**Scenario 2:**
```
C:\> nslookup google.com
Server:  UnKnown
Address:  192.168.1.1

*** UnKnown can't find google.com: Non-existent domain
```
Problem: ____________________________________________
Fix: ________________________________________________

**Scenario 3:**
```
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG    100    0        0 eth0
169.254.0.0     0.0.0.0         255.255.0.0     U     1000   0        0 eth0
```
Issue: ______________________________________________
Indicates: __________________________________________

---

### Activity K: Cross-Platform Commands 🖥️
**Time:** 2 minutes

Platform differences:

| Function | Windows | Linux | macOS |
|----------|---------|--------|--------|
| Show IP | | | |
| Trace route | | | |
| DNS lookup | | | |
| Show routes | | | |
| ARP table | | | |
| Network stats | | | |

**Modern Linux commands:**
Old vs New:
- `ifconfig` → ______________________________________
- `route` → _________________________________________
- `netstat` → _______________________________________

---

### Activity L: Troubleshooting Command Sequence 🔍
**Time:** 3 minutes

Build troubleshooting workflows:

**"Cannot reach website" workflow:**
1. Command: _________________________________________
   Purpose: _________________________________________
2. Command: _________________________________________
   Purpose: _________________________________________
3. Command: _________________________________________
   Purpose: _________________________________________
4. Command: _________________________________________
   Purpose: _________________________________________

**"Network is slow" workflow:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

**"Cannot connect to server" workflow:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
User reports "Email isn't working":

1. **Initial commands to run:**
   • _________________________________________________
   • _________________________________________________

2. **If DNS is working but still can't connect:**
   • _________________________________________________
   • _________________________________________________

3. **Document findings:**
   • _________________________________________________

### Best Practices Checklist
Check off command-line practices you'll implement:

□ Always ping loopback first (127.0.0.1)
□ Use -n with netstat for faster results
□ Document normal baselines
□ Save common commands in scripts
□ Use appropriate tool for the task
□ Understand output before moving on
□ Keep command reference handy
□ Practice regularly
□ Learn keyboard shortcuts
□ Use command history effectively

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Use ping with various options
□ Trace packet paths with tracert/traceroute
□ Display and modify IP configuration
□ Troubleshoot DNS with nslookup
□ Analyze connections with netstat
□ Manage ARP cache
□ Read and modify routing tables
□ Test port connectivity
□ Select appropriate diagnostic tool
□ Interpret command output correctly

### Exam Preparation
⚠️ **Know for the exam:**
- **ping:** Tests connectivity using ICMP
- **tracert/traceroute:** Shows path and hop count
- **ipconfig /all:** Shows detailed IP configuration
- **nslookup:** Tests DNS resolution
- **netstat -ano:** Shows connections with PIDs
- **arp -a:** Displays ARP cache
- **telnet:** Tests specific port connectivity
- **ipconfig /flushdns:** Clears DNS cache

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐☆☆

**Ready for:** Lesson 29 - Cable Testing and Physical Layer Issues

### Remember
"Command-line tools are a network engineer's Swiss Army knife. Master these commands, and you'll troubleshoot faster than those clicking through GUIs!"

---