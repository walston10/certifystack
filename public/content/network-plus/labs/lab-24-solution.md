# Lab 24 Answer Key: Firewalls and Access Control Lists
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain Coverage:** Network Security (4.0)

---

## Section 1: Concept Check Answers

### Question 1: Stateless vs Stateful Firewalls
**Answer:**
- **Stateless:** Examines each packet independently, doesn't track connections, faster but less secure
- **Stateful:** Tracks connection state, automatically allows return traffic for established connections, more secure

### Question 2: Implicit Deny Rule
**Answer:**
The implicit deny is a default rule at the end of every ACL that denies all traffic not explicitly permitted. Even if not written, it's always there - "what's not explicitly allowed is denied."

### Question 3: ACL Processing Order
**Answer:**
ACLs are processed **top to bottom (sequentially)**. First match wins - once a rule matches, processing stops. This means more specific rules must come before general ones.

### Question 4: Standard vs Extended ACLs
**Answer:**
- **Standard:** Filters based on source IP address only (numbered 1-99)
- **Extended:** Filters based on source IP, destination IP, protocol, and port (numbered 100-199)

### Question 5: Three Types of NAT
**Answer:**
- **Static NAT:** One-to-one mapping (single internal to single external)
- **Dynamic NAT:** Many-to-many from a pool of addresses
- **PAT (Port Address Translation):** Many-to-one using different ports

---

## Section 2: Hands-On Activities - Answers

### Activity A: Firewall Type Comparison ✅

| Feature | Stateless | Stateful | NGFW | WAF |
|---------|-----------|----------|------|-----|
| OSI Layer | 3-4 | 3-4 | 3-7 | 7 |
| Speed | Fastest | Fast | Slower | Moderate |
| Security Level | Basic | Good | Excellent | App-specific |
| Return Traffic | Manual rules | Automatic | Automatic | Automatic |
| Application Aware | No | No | Yes | Yes (web) |
| Best Use Case | Simple filtering | Most networks | Enterprise | Web servers |

### Activity B: ACL Rule Writing ✅

1. Allow HTTP to web server:
```
permit tcp any host 192.168.1.100 eq 80
```

2. Allow SSH from admin network:
```
permit tcp 10.0.0.0 0.0.0.255 any eq 22
```

3. Block traffic from 203.0.113.0/24:
```
deny ip 203.0.113.0 0.0.0.255 any
```

4. Allow established connections:
```
permit tcp any any established
```

5. Deny all other traffic:
```
deny ip any any (explicit - optional since implicit exists)
```

### Activity C: ACL Order Analysis ✅

**Correct Order:**
1. `permit tcp any host 192.168.1.10 eq 80`
2. `permit tcp 10.0.0.0 0.0.0.255 any eq 22`
3. `deny tcp any any eq 23`
4. `permit icmp any any echo-reply`
5. `deny ip any any`

**Why original was broken:** The deny all rule was first, blocking everything. No traffic would ever reach the permit rules below it.

### Activity D: DMZ Architecture Design ✅

**DMZ Servers:**
- Web server: **Public-facing HTTP/HTTPS**
- Email server: **SMTP relay**
- DNS server: **External DNS resolution**

**Firewall 1 Rules (Internet → DMZ):**
- Permit TCP any to DMZ-Web port 80/443
- Permit TCP any to DMZ-Mail port 25
- Permit UDP any to DMZ-DNS port 53
- Deny all else

**Firewall 2 Rules (DMZ → Internal):**
- Permit established connections from Internal
- Deny DMZ initiated to Internal
- Permit specific services (SQL) if needed
- Log all attempts

### Activity E: Wildcard Mask Calculation ✅

| Subnet Mask | Wildcard Mask | Matches |
|-------------|---------------|---------|
| 255.255.255.0 | 0.0.0.255 | 256 hosts |
| 255.255.255.128 | 0.0.0.127 | 128 hosts |
| 255.255.255.192 | 0.0.0.63 | 64 hosts |
| 255.255.255.224 | 0.0.0.31 | 32 hosts |
| 255.255.255.240 | 0.0.0.15 | 16 hosts |
| 255.255.255.252 | 0.0.0.3 | 4 hosts |

**Formula:** Wildcard = 255.255.255.255 - Subnet Mask

**Match 192.168.1.0 - 192.168.1.63:**
Wildcard mask: **0.0.0.63**

### Activity F: NAT Configuration ✅

| Scenario | NAT Type | Configuration | Purpose |
|----------|----------|---------------|---------|
| Web server access | Static | 203.0.113.10 → 192.168.1.10 | Public access |
| Internal users to internet | PAT | Many-to-one public IP | Share single IP |
| Branch office connection | Static | Fixed mapping | Predictable |
| Load balancing | Dynamic | Pool rotation | Distribute load |
| Hide internal network | PAT | Overload | Security |

**PAT configuration:**
```
Inside: 192.168.1.0/24
Outside: 203.0.113.1
Translation: Overload (dynamic ports)
```

### Activity G: Port Forwarding Rules ✅

| Service | External Port | Internal IP | Internal Port | Protocol |
|---------|--------------|-------------|---------------|----------|
| Web server | 80/443 | 192.168.1.10 | 80/443 | TCP |
| SSH management | 2222 | 192.168.1.5 | 22 | TCP |
| Game server | 27015 | 192.168.1.50 | 27015 | UDP |
| Security camera | 8080 | 192.168.1.60 | 80 | TCP |
| RDP | 33389 | 192.168.1.20 | 3389 | TCP |

**Security considerations:**
1. Change default ports (SSH, RDP) for security
2. Limit source IPs where possible
3. Use VPN instead of direct exposure when feasible

### Activity H: Stateful Firewall Rules ✅

```
Direction | Action | Protocol | Source | Destination | State
----------|--------|----------|--------|-------------|-------
OUT       | ALLOW  | ANY      | LAN    | ANY        | NEW
IN        | ALLOW  | ANY      | ANY    | LAN        | ESTABLISHED
IN        | DENY   | ANY      | ANY    | LAN        | NEW
```

**Connection tracking table:**
| Source | Destination | Protocol | State | Timeout |
|--------|------------|----------|-------|---------|
| 192.168.1.5:45123 | 8.8.8.8:53 | UDP | ESTABLISHED | 30s |
| 192.168.1.10:50234 | 93.184.216.34:443 | TCP | ESTABLISHED | 3600s |

### Activity I: NGFW Features Configuration ✅

| Feature | Setting | Purpose | Impact |
|---------|---------|---------|--------|
| Application Control | Block P2P | Prevent torrents | Bandwidth save |
| SSL Inspection | Enable | Decrypt HTTPS | See all traffic |
| IPS Integration | Enable | Block exploits | Better security |
| User Identity | AD integration | User-based rules | Granular control |
| Geolocation | Block certain countries | Reduce attacks | May block legitimate |
| URL Filtering | Categories | Block malicious sites | Productivity |

**Application rule:**
```
Rule: Block category=social-media
Time: Mon-Fri 09:00-17:00
Action: Drop and log
```

### Activity J: Firewall Placement Strategy ✅

| Location | Firewall Type | Primary Purpose | Rules Focus |
|----------|--------------|-----------------|-------------|
| Internet edge | NGFW | Perimeter defense | Inbound threats |
| DMZ boundary | Stateful | Segmentation | Both directions |
| Internal segments | Stateful | Lateral movement | East-west traffic |
| Host-based | Software | Last line defense | Application specific |
| Cloud environment | Virtual/WAF | Cloud protection | API and web |

**Defense in depth:**
- Layer 1: **Edge firewall**
- Layer 2: **Internal segmentation firewalls**
- Layer 3: **Host-based firewalls**

### Activity K: Firewall Rule Optimization ✅

**Optimized rules:**
1. `deny ip 10.0.0.5 0.0.0.2 any` (combines 10.0.0.5-7)
2. `permit ip 10.0.0.0 0.0.0.255 any`
3. `permit tcp any host 192.168.1.10 eq 80`
4. `permit tcp any host 192.168.1.10 eq 443`

**Techniques used:**
- Combined similar deny rules using wildcard
- Moved denies before permits for efficiency
- Kept most specific rules first

### Activity L: Firewall Troubleshooting ✅

| Symptom | Possible Cause | Check | Solution |
|---------|---------------|-------|----------|
| Can't access website | Rule blocking | ACL logs | Add permit rule |
| Asymmetric routing | Multiple paths | Routing table | Fix routes |
| FTP not working | Active mode blocked | Port 20/21 | Use passive mode |
| VPN traffic blocked | ESP/AH blocked | Protocol 50/51 | Permit IPSec |
| High CPU | Too many rules | Rule count | Optimize rules |
| Rules not matching | Wrong order | ACL sequence | Reorder rules |

All logging options should be checked for comprehensive monitoring.

---

## Real-World Context & Best Practices

### Why This Matters
- **Defense in depth:** Firewalls are crucial layer
- **Compliance:** PCI DSS, HIPAA require firewalls
- **Attack prevention:** Blocks 99% of automated attacks
- **Network control:** Enforces security policy

### Common Mistakes to Avoid
❌ Putting "permit any any" at the top
❌ Forgetting implicit deny exists
❌ Not considering return traffic
❌ Over-broad rules
❌ No documentation of rules

### Industry Best Practices
✅ **Document every rule** with purpose and owner
✅ **Review quarterly** for outdated rules
✅ **Test changes** in lab first
✅ **Log denies** for threat intelligence
✅ **Backup configs** before changes

---

## Exam Tips 📝

### Must Memorize:
1. **Implicit Deny:** Always at end, denies all
2. **ACL Processing:** Top-to-bottom, first match
3. **Wildcard Mask:** Inverse of subnet mask
4. **Firewall Types:**
   - Stateless: No connection tracking
   - Stateful: Tracks connections
   - NGFW: Application aware
5. **ACL Types:**
   - Standard: Source IP only
   - Extended: Source, dest, protocol, port
6. **NAT Types:**
   - Static: 1-to-1
   - Dynamic: Pool
   - PAT: Many-to-1

### Common Exam Questions:
- "First match or best match?" → **First match**
- "What's at the end of every ACL?" → **Implicit deny**
- "Inverse of subnet mask?" → **Wildcard mask**
- "Tracks connection state?" → **Stateful firewall**
- "Source IP only?" → **Standard ACL**

### Exam Strategy:
- Implicit deny is always there (even if not shown)
- More specific rules must come first
- Stateful is better than stateless
- NGFW includes all previous features plus more
- DMZ uses two firewalls (or interfaces)

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Compared firewall types correctly
□ Wrote functional ACL rules
□ Fixed ACL ordering issues
□ Calculated wildcard masks
□ Designed DMZ architecture
□ Configured NAT types
□ Set up port forwarding
□ Created stateful rules
□ Configured NGFW features
□ Troubleshot firewall issues

### Troubleshooting Common Issues

**Problem:** Traffic blocked unexpectedly
**Solution:** Check ACL order, remember implicit deny, verify both directions

**Problem:** Return traffic not working
**Solution:** Use stateful firewall or add return rules for stateless

**Problem:** NAT not working
**Solution:** Verify inside/outside interfaces, check translation rules

**Problem:** High firewall CPU
**Solution:** Optimize rules, combine similar rules, check for attacks

---

## Real-World Scenarios

### Scenario 1: Web Server Compromise
**Situation:** DMZ web server hacked
**Response:**
1. Isolate server immediately
2. Review firewall logs
3. Check for lateral movement attempts
4. Tighten DMZ rules
5. Implement IPS if not present

### Scenario 2: New Application Deployment
**Situation:** App needs multiple ports open
**Response:**
1. Document all required ports
2. Use most restrictive rules possible
3. Limit source IPs if possible
4. Test in isolated environment
5. Monitor after deployment

### Scenario 3: Firewall Performance Issues
**Situation:** Firewall at 90% CPU
**Response:**
1. Review rule hit counts
2. Optimize most-hit rules
3. Combine similar rules
4. Consider hardware upgrade
5. Implement load balancing

---

## Lab Summary

### Key Concepts Mastered:
✅ Firewalls filter traffic based on rules
✅ ACLs process top-to-bottom, first match wins
✅ Implicit deny blocks all unmatched traffic
✅ Stateful firewalls track connections
✅ DMZ isolates public-facing services
✅ NAT hides internal addresses
✅ NGFW adds application awareness
✅ Proper rule order is critical

### Time-Saving Tips:
- Use object groups for similar rules
- Create rule templates
- Document as you go
- Test with packet tracers
- Monitor rule hit counts

### Going Further:
- Practice with iptables/pfSense
- Learn Cisco ASA syntax
- Study Palo Alto NGFWs
- Practice wildcard masks
- Set up home lab DMZ

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for firewall and ACL exam questions!

**Next Lab:** Lesson 25 - Network Segmentation and Zero Trust

### Final Tip:
"Writing firewall rules is like writing laws - be specific, consider all cases, and always have a catch-all at the end (implicit deny)!"

---