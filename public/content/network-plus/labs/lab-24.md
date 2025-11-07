# Lab 24: Firewalls and Access Control Lists
**Time:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain:** Network Security (4.0)

## Lab Objectives
- Configure stateless and stateful firewall rules
- Write and analyze Access Control Lists (ACLs)
- Design DMZ architectures
- Implement NAT and port forwarding
- Apply firewall best practices
- Troubleshoot firewall configurations

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What's the difference between stateless and stateful firewalls?**
   Stateless: __________________________________________
   Stateful: ___________________________________________

2. **What is the implicit deny rule?**
   _________________________________________________
   _________________________________________________

3. **In what order are ACL rules processed?**
   _________________________________________________
   How does this affect rule placement? _________________

4. **What's the difference between standard and extended ACLs?**
   Standard: ___________________________________________
   Extended: ___________________________________________

5. **List three types of NAT:**
   • _________________________________________________
   • _________________________________________________
   • _________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Firewall Type Comparison 🔥
**Time:** 3 minutes

Complete the firewall comparison:

| Feature | Stateless | Stateful | NGFW | WAF |
|---------|-----------|----------|------|-----|
| OSI Layer | | | | |
| Speed | | | | |
| Security Level | | | | |
| Return Traffic | | | | |
| Application Aware | | | | |
| Best Use Case | | | | |

---

### Activity B: ACL Rule Writing ✍️
**Time:** 3 minutes

Write ACL rules for these requirements:

**Scenario:** Protect internal network 192.168.1.0/24

1. Allow HTTP from anywhere to web server 192.168.1.100:
```
_________________________________________________
```

2. Allow SSH only from admin network 10.0.0.0/24:
```
_________________________________________________
```

3. Block all traffic from 203.0.113.0/24:
```
_________________________________________________
```

4. Allow established connections back:
```
_________________________________________________
```

5. Deny all other traffic (implicit or explicit?):
```
_________________________________________________
```

---

### Activity C: ACL Order Analysis 📋
**Time:** 3 minutes

Fix the ACL order (currently broken):

**Current Order:**
```
1. deny ip any any
2. permit tcp any host 192.168.1.10 eq 80
3. permit tcp 10.0.0.0 0.0.0.255 any eq 22
4. deny tcp any any eq 23
5. permit icmp any any echo-reply
```

**Correct Order:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________
4. _________________________________________________
5. _________________________________________________

**Why was original broken?** _________________________

---

### Activity D: DMZ Architecture Design 🏰
**Time:** 3 minutes

Design a dual-firewall DMZ:

```
Internet ← → [Firewall 1] ← → [DMZ] ← → [Firewall 2] ← → Internal
                                |
                          [Servers Here]
```

**DMZ Servers:**
- Web server: _______________________________________
- Email server: _____________________________________
- DNS server: _______________________________________

**Firewall 1 Rules (Internet to DMZ):**
- _________________________________________________
- _________________________________________________
- _________________________________________________

**Firewall 2 Rules (DMZ to Internal):**
- _________________________________________________
- _________________________________________________
- _________________________________________________

---

### Activity E: Wildcard Mask Calculation 🎭
**Time:** 3 minutes

Calculate wildcard masks:

| Subnet Mask | Wildcard Mask | Matches |
|-------------|---------------|---------|
| 255.255.255.0 | | |
| 255.255.255.128 | | |
| 255.255.255.192 | | |
| 255.255.255.224 | | |
| 255.255.255.240 | | |
| 255.255.255.252 | | |

**Formula:** ________________________________________

**Match a range 192.168.1.0 - 192.168.1.63:**
Wildcard mask needed: _______________________________

---

### Activity F: NAT Configuration 🔄
**Time:** 3 minutes

Configure NAT for these scenarios:

| Scenario | NAT Type | Configuration | Purpose |
|----------|----------|---------------|---------|
| Web server access | | | |
| Internal users to internet | | | |
| Branch office connection | | | |
| Load balancing | | | |
| Hide internal network | | | |

**PAT configuration for 192.168.1.0/24:**
```
Inside: ____________________________________________
Outside: ___________________________________________
Translation: _______________________________________
```

---

### Activity G: Port Forwarding Rules 🚪
**Time:** 3 minutes

Create port forwarding rules:

| Service | External Port | Internal IP | Internal Port | Protocol |
|---------|--------------|-------------|---------------|----------|
| Web server | | 192.168.1.10 | | |
| SSH management | | 192.168.1.5 | | |
| Game server | | 192.168.1.50 | | |
| Security camera | | 192.168.1.60 | | |
| RDP | | 192.168.1.20 | | |

**Security consideration for each:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

### Activity H: Stateful Firewall Rules 🔍
**Time:** 2 minutes

Design stateful firewall rules:

**Allow outbound, block inbound (except established):**
```
Direction | Action | Protocol | Source | Destination | State
----------|--------|----------|--------|-------------|-------
OUT       | ALLOW  | ANY      | LAN    | ANY        | NEW
IN        |        |          |        |            | ESTABLISHED
IN        |        |          |        |            | NEW
```

**Connection tracking table example:**
| Source | Destination | Protocol | State | Timeout |
|--------|------------|----------|-------|---------|
| 192.168.1.5:45123 | 8.8.8.8:53 | UDP | | |
| 192.168.1.10:50234 | 93.184.216.34:443 | TCP | | |

---

### Activity I: NGFW Features Configuration 🛡️
**Time:** 3 minutes

Configure Next-Generation Firewall features:

| Feature | Setting | Purpose | Impact |
|---------|---------|---------|--------|
| Application Control | | | |
| SSL Inspection | | | |
| IPS Integration | | | |
| User Identity | | | |
| Geolocation | | | |
| URL Filtering | | | |

**Application-based rule example:**
"Block social media during work hours"
```
Rule: ______________________________________________
Time: ______________________________________________
Action: ____________________________________________
```

---

### Activity J: Firewall Placement Strategy 📍
**Time:** 3 minutes

Determine firewall placement:

| Location | Firewall Type | Primary Purpose | Rules Focus |
|----------|--------------|-----------------|-------------|
| Internet edge | | | |
| DMZ boundary | | | |
| Internal segments | | | |
| Host-based | | | |
| Cloud environment | | | |

**Defense in depth implementation:**
Layer 1: ___________________________________________
Layer 2: ___________________________________________
Layer 3: ___________________________________________

---

### Activity K: Firewall Rule Optimization ⚡
**Time:** 2 minutes

Optimize these firewall rules:

**Current rules (inefficient):**
```
1. permit tcp any host 192.168.1.10 eq 80
2. permit tcp any host 192.168.1.10 eq 443
3. deny ip 10.0.0.5 any
4. deny ip 10.0.0.6 any
5. deny ip 10.0.0.7 any
6. permit ip 10.0.0.0 0.0.0.255 any
```

**Optimized rules:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________
4. _________________________________________________

**Optimization techniques used:**
_____________________________________________________

---

### Activity L: Firewall Troubleshooting 🔧
**Time:** 3 minutes

Diagnose firewall issues:

| Symptom | Possible Cause | Check | Solution |
|---------|---------------|-------|----------|
| Can't access website | | | |
| Asymmetric routing | | | |
| FTP not working | | | |
| VPN traffic blocked | | | |
| High CPU on firewall | | | |
| Rules not matching | | | |

**Common logging to enable:**
□ Denied connections
□ Permitted connections
□ NAT translations
□ Rule matches
□ Session creation/teardown

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your company was breached through an open port. Redesign security:

1. **Immediate actions:**
   • _____________________________________________
   • _____________________________________________

2. **Firewall audit:**
   • _____________________________________________
   • _____________________________________________

3. **New architecture:**
   • _____________________________________________
   • _____________________________________________

### Best Practices Checklist
Check off firewall practices you'll implement:

□ Default deny all (implicit deny)
□ Document all rules with comments
□ Regular rule review and cleanup
□ Enable logging for denied traffic
□ Implement defense in depth
□ Test rules before production
□ Use specific rules over broad ones
□ Place most-matched rules first
□ Backup firewall configurations
□ Monitor firewall performance

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Differentiate firewall types
□ Write effective ACL rules
□ Order ACL rules correctly
□ Calculate wildcard masks
□ Design DMZ architectures
□ Configure NAT types
□ Implement port forwarding
□ Design stateful firewall rules
□ Configure NGFW features
□ Troubleshoot firewall issues

### Exam Preparation
⚠️ **Know for the exam:**
- **Implicit deny:** Default rule denying all unmatched traffic
- **ACL processing:** Top to bottom, first match wins
- **Stateful:** Tracks connections, allows return traffic
- **DMZ:** Screened subnet between internal and external
- **Standard ACL:** Source IP only
- **Extended ACL:** Source, destination, protocol, port
- **NAT types:** Static, Dynamic, PAT (overload)
- **Wildcard mask:** Inverse of subnet mask

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐⭐☆

**Ready for:** Lesson 25 - Network Segmentation and Zero Trust

### Remember
"A firewall is like a bouncer at a club - it needs clear rules about who gets in, and should always err on the side of caution. When in doubt, keep them out!"

---