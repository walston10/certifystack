# Lab 28 Answer Key: Command-Line Tools
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain Coverage:** Network Troubleshooting (5.0)

---

## Section 1: Concept Check Answers

### Question 1: Ping vs Tracert
**Answer:**
- **Ping:** Tests connectivity to a single destination, shows if reachable and round-trip time
- **Tracert/Traceroute:** Shows every hop (router) in the path to destination, identifies where failures occur

### Question 2: IP Configuration Commands
**Answer:**
- **Windows:** `ipconfig` or `ipconfig /all` for details
- **Linux/Mac (modern):** `ip addr` or `ip a` (ifconfig is deprecated)

### Question 3: Telnet Default Port
**Answer:**
Port **23** (but can specify other ports for testing, e.g., `telnet server 80`)

### Question 4: Netstat -a vs -n
**Answer:**
- **-a:** Shows all connections and listening ports with hostname resolution
- **-n:** Shows connections with numerical addresses (no DNS resolution, faster)

### Question 5: Clear DNS Cache Windows
**Answer:**
`ipconfig /flushdns`

---

## Section 2: Hands-On Activities - Answers

### Activity A: Ping Command Mastery ✅

| Command | Purpose | Expected Result |
|---------|---------|-----------------|
| `ping 127.0.0.1` | Test TCP/IP stack | Always succeeds if TCP/IP working |
| `ping -n 5 8.8.8.8` | Send 5 packets | 5 replies from Google DNS |
| `ping -l 1500 google.com` | Large packet size | Tests MTU, possible fragmentation |
| `ping -t gateway_ip` | Continuous ping | Runs until Ctrl+C |
| `ping -a ip_address` | Resolve hostname | Shows hostname of IP |

**Ping result interpretation:**
- Responding device: **192.168.1.1** (gateway)
- Packet size: **32 bytes**
- Latency: **1ms** (very fast, local network)
- TTL meaning: **64** (Linux/Unix device, started at 64)

### Activity B: Traceroute Path Analysis ✅

**Sample traceroute analysis:**
| Hop # | IP Address | Response Time | Location/Owner |
|-------|------------|---------------|----------------|
| 1 | 192.168.1.1 | 1ms | Local gateway |
| 2 | 10.0.0.1 | 10ms | ISP router |
| 3 | 203.0.113.1 | 15ms | ISP backbone |

**Tracert timeout issue:**
- Issue: **Hop 2 shows asterisks/timeout**
- Likely cause: **Firewall blocking ICMP, or router configured not to respond**

### Activity C: IP Configuration Commands ✅

**DHCP operations:**
| Command | When to Use | Expected Result |
|---------|-------------|-----------------|
| `ipconfig /release` | Give up current IP | IP becomes 0.0.0.0 |
| `ipconfig /renew` | Get new IP from DHCP | New IP assigned |
| `ipconfig /flushdns` | DNS issues | "Successfully flushed" |
| `ipconfig /displaydns` | View DNS cache | Shows cached entries |

### Activity D: DNS Troubleshooting Tools ✅

**nslookup results interpretation:**
| Query | DNS Server Used | Result | Record Type |
|-------|----------------|--------|-------------|
| google.com | Default (192.168.1.1) | IP addresses | A record |
| MX gmail.com | Specified | Mail servers | MX record |
| NS example.com | Specified | Name servers | NS record |

All DNS troubleshooting checkboxes should be verified when DNS fails.

### Activity E: Netstat Network Analysis ✅

| Command | Purpose | Key Finding |
|---------|---------|-------------|
| `netstat -a` | All connections | Shows listening ports |
| `netstat -n` | Numerical output | Faster, no DNS lookup |
| `netstat -r` | Routing table | Same as route print |
| `netstat -ano` | With process IDs | Identify process using port |
| `netstat -s` | Protocol statistics | Packet counts, errors |

**Netstat output interpretation:**
- Line 1: **SMB service listening on port 445**
- Line 2: **HTTPS connection established to Microsoft (52.97.x.x)**
- Line 3: **NTP service listening on UDP 123**

### Activity F: ARP Table Management ✅

**ARP troubleshooting:**
- Duplicate IP: **Two different MACs for same IP**
- Wrong MAC: **Gateway MAC doesn't match expected**
- Clear cache: `arp -d` or `arp -d *`

**ARP poisoning detection:**
Compare gateway MAC in ARP table to known good MAC. If different, possible ARP poisoning attack.

### Activity G: Routing Table Analysis ✅

**Key routes:**
| Destination | Gateway | Interface | Purpose |
|-------------|---------|-----------|---------|
| 0.0.0.0/0 | 192.168.1.1 | eth0 | Default route |
| 127.0.0.0/8 | 127.0.0.1 | lo | Loopback |
| 192.168.1.0/24 | 0.0.0.0 | eth0 | Local network |

**Static route use case:** When you need to reach a network through a specific gateway that's not the default.

### Activity H: Advanced Diagnostic Tools ✅

**pathping advantage:** Shows packet loss percentage at each hop over time

**nbtstat shows:** NetBIOS names, cache, and registrations

**hostname returns:** Computer's network name

**Telnet port test:**
- If connects: **Port is open, service listening**
- If fails: **Port closed or firewall blocking**

### Activity I: Command Tool Selection Guide ✅

| Scenario | Best Tool | Command | Why |
|----------|-----------|---------|-----|
| Check if server is up | ping | `ping server_ip` | Quick connectivity test |
| Find where packets drop | tracert | `tracert destination` | Shows each hop |
| Verify DNS resolution | nslookup | `nslookup domain` | Tests DNS |
| See active connections | netstat | `netstat -an` | Shows all connections |
| Check IP configuration | ipconfig | `ipconfig /all` | Full IP details |
| Test specific port | telnet | `telnet ip port` | Port connectivity |
| View MAC addresses | arp | `arp -a` | Shows ARP cache |
| Check routing path | route | `route print` | Routing table |

### Activity J: Command Output Interpretation ✅

**Scenario 1: Ping timeout**
- Problem: **No connectivity to 8.8.8.8**
- Check: **Gateway connectivity, firewall, routing**

**Scenario 2: DNS failure**
- Problem: **DNS server can't resolve**
- Fix: **Check DNS server settings, try different DNS**

**Scenario 3: APIPA address**
- Issue: **169.254.x.x route present**
- Indicates: **DHCP failure, using automatic private IP**

### Activity K: Cross-Platform Commands ✅

| Function | Windows | Linux | macOS |
|----------|---------|--------|--------|
| Show IP | ipconfig | ip addr | ifconfig |
| Trace route | tracert | traceroute | traceroute |
| DNS lookup | nslookup | nslookup/dig | nslookup/dig |
| Show routes | route print | ip route | netstat -r |
| ARP table | arp -a | arp -a | arp -a |
| Network stats | netstat | netstat/ss | netstat |

**Modern Linux commands:**
- `ifconfig` → **ip addr**
- `route` → **ip route**
- `netstat` → **ss** (socket statistics)

### Activity L: Troubleshooting Command Sequence ✅

**"Cannot reach website" workflow:**
1. `ping 127.0.0.1` - Test local TCP/IP
2. `ping gateway` - Test local network
3. `ping 8.8.8.8` - Test internet connectivity
4. `nslookup website.com` - Test DNS resolution

**"Network is slow" workflow:**
1. `ping -t gateway` - Check for packet loss
2. `tracert destination` - Find slow hops
3. `netstat -s` - Check for errors/retransmissions

**"Cannot connect to server" workflow:**
1. `ping server_ip` - Test basic connectivity
2. `telnet server_ip port` - Test specific service
3. `tracert server_ip` - Check routing path

---

## Real-World Context & Best Practices

### Why This Matters
- **Speed:** Command-line is faster than GUI
- **Remote access:** SSH only gives command line
- **Scripting:** Can automate with commands
- **Universal:** Works on all systems

### Common Mistakes to Avoid
❌ Not using -n with netstat (slow DNS lookups)
❌ Forgetting ping uses ICMP (may be blocked)
❌ Not checking DNS when name resolution fails
❌ Ignoring TTL values in ping
❌ Not documenting baseline values

### Industry Best Practices
✅ **Create command cheat sheets** for quick reference
✅ **Use scripts** for common troubleshooting
✅ **Document baselines** when network is healthy
✅ **Learn OS-specific variations**
✅ **Practice regularly** to maintain skills

---

## Exam Tips 📝

### Must Memorize:
1. **Common Commands:**
   - ping: Connectivity test (ICMP)
   - tracert: Path tracing
   - ipconfig: IP configuration
   - nslookup: DNS queries
   - netstat: Network statistics
   - arp: Address resolution
2. **Key Options:**
   - ping -t: Continuous
   - ping -n: Count
   - ping -l: Size
   - netstat -a: All
   - netstat -n: Numerical
   - netstat -o: PID
3. **Important Paths:**
   - ipconfig /release: Release IP
   - ipconfig /renew: Renew IP
   - ipconfig /flushdns: Clear DNS

### Common Exam Questions:
- "Test connectivity?" → **ping**
- "Show packet path?" → **tracert/traceroute**
- "Clear DNS cache?" → **ipconfig /flushdns**
- "Show connections with PID?" → **netstat -ano**
- "Test specific port?" → **telnet**

### Exam Strategy:
- Know Windows and Linux equivalents
- Remember ping uses ICMP
- tracert uses ICMP (Windows) or UDP (Linux)
- DNS uses port 53
- Always consider command options

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Executed all basic commands correctly
□ Interpreted ping and tracert output
□ Used ipconfig for DHCP operations
□ Performed DNS lookups
□ Analyzed netstat output
□ Managed ARP cache
□ Read routing tables
□ Selected appropriate tools
□ Built troubleshooting workflows
□ Understood cross-platform differences

### Troubleshooting Common Issues

**Problem:** Commands not recognized
**Solution:** Check PATH, use full path, or run as administrator

**Problem:** ping works but application doesn't
**Solution:** Check specific ports with telnet, firewall rules

**Problem:** DNS lookups fail
**Solution:** Verify DNS server settings, try public DNS (8.8.8.8)

**Problem:** Slow command response
**Solution:** Use -n flag to skip DNS resolution

---

## Real-World Scenarios

### Scenario 1: Website Unreachable
**Commands used:**
1. `ping website.com` - Request timed out
2. `nslookup website.com` - Resolves correctly
3. `tracert website.com` - Dies at hop 10
4. **Conclusion:** Routing issue at ISP level

### Scenario 2: DHCP Not Working
**Commands used:**
1. `ipconfig /all` - Shows 169.254.x.x
2. `ipconfig /release` - Released
3. `ipconfig /renew` - Timeout
4. `ping dhcp_server` - No response
5. **Conclusion:** DHCP server down or unreachable

### Scenario 3: Slow Network Performance
**Commands used:**
1. `ping -t gateway` - 20% packet loss
2. `netstat -s` - High retransmission rate
3. `arp -a` - Duplicate entries
4. **Conclusion:** Network congestion or bad cable

---

## Lab Summary

### Key Concepts Mastered:
✅ Command-line tools are essential for network troubleshooting
✅ Each tool has specific purpose and use case
✅ Options modify command behavior significantly
✅ Output interpretation is crucial skill
✅ Platform differences exist but concepts same
✅ Systematic approach using multiple tools
✅ Documentation of baselines important

### Time-Saving Tips:
- Create batch files for common tasks
- Use up arrow for command history
- Learn tab completion
- Pipe output to files for analysis
- Use findstr/grep to filter output

### Going Further:
- Learn PowerShell for Windows
- Master bash scripting for Linux
- Try packet capture with tcpdump
- Explore netsh for Windows networking
- Practice with network simulators

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for command-line tool exam questions!

**Next Lab:** Lesson 29 - Cable Testing and Physical Layer Issues

### Final Tip:
"GUI makes easy things easier, but command-line makes hard things possible. Master both, but never forget the power of the command prompt!"

---