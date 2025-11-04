# Lesson 24: Firewalls and Access Control Lists

**Estimated Time:** 30-35 minutes  
**Domain:** Network Security (Domain 4.0)  
**Exam Objectives Covered:** 4.1, 4.3 - Firewalls and ACLs

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Explain** how firewalls filter traffic based on rules
- **Differentiate** between stateless and stateful firewalls
- **Describe** next-generation firewall (NGFW) capabilities
- **Configure** access control lists (ACLs) with proper syntax
- **Design** DMZ (screened subnet) architectures
- **Understand** NAT, PAT, and port forwarding
- **Apply** implicit deny and least privilege principles
- **Troubleshoot** firewall rules and ACL processing order

---

## Video Resources

**Watch these videos to reinforce the concepts:**

1. **Professor Messer - Firewall Types** (13 min)  
   https://www.youtube.com/watch?v=kDEX1HXybrU
   
2. **NetworkChuck - Firewalls Explained** (15 min)  
   https://www.youtube.com/watch?v=eO6QKDL3p1I

3. **PowerCert - Stateful vs Stateless Firewalls** (7 min)  
   https://www.youtube.com/watch?v=9GZlVOafYTg

4. **Sunny Classroom - Access Control Lists (ACLs)** (12 min)  
   https://www.youtube.com/watch?v=P8I5Kd8k1VU

5. **Professor Messer - Network Address Translation** (11 min)  
   https://www.youtube.com/watch?v=QBqPzHEDzvo

---

## Introduction

Imagine your house has a door. **Anyone can walk in.** Neighbors, salespeople, burglars - everyone has access. That's terrifying.

Now imagine you hire a security guard for that door. The guard checks everyone against a list of rules: "Family members? Come in. Friend bringing pizza? Come in. Stranger with no appointment? Denied. Person on the criminal list? Definitely denied."

**That security guard is a firewall.**

Firewalls are the first line of defense in network security. They sit at network boundaries - between your network and the internet, between departments, between security zones - and make decisions about what traffic is allowed and what's blocked.

Without firewalls, every service on every computer would be directly accessible from the internet. **Every vulnerable web server, every misconfigured database, every backdoor malware creates would be wide open.** Firewalls reduce your attack surface by blocking unwanted traffic before it ever reaches your systems.

**Why this matters for Network+ exam:** Firewall questions appear throughout Domain 4.0. You'll see scenarios about rule configuration, troubleshooting blocked traffic, DMZ design, and NAT configurations. Understanding firewall types and ACL processing is critical for passing.

---

## Firewall Fundamentals

**Firewall:** Network security device that monitors and filters traffic based on rules.

**Core functions:**
- **Filter traffic** - Allow or deny based on rules
- **Control access** - Determine who can access what
- **Create boundaries** - Separate trusted/untrusted networks
- **Log activity** - Track what's allowed/blocked

**Basic operation:**
1. Packet arrives at firewall
2. Firewall examines packet headers (source IP, dest IP, port, protocol)
3. Compares against rules (top to bottom)
4. Takes action: Allow or Deny
5. Logs the decision

**Key principles:**

**Implicit Deny (Default Deny)**
- Last rule in firewall: "Deny everything else"
- If packet doesn't match any allow rule, it's blocked
- Secure by default - you must explicitly allow traffic

```
Firewall Rules:
1. Allow: 10.0.0.0/8 to Any on port 80
2. Allow: 10.0.0.0/8 to Any on port 443
3. Allow: Any to 10.0.0.5 on port 25
...
99. Deny: All (implicit deny)
```

**Inbound vs Outbound Rules**
- **Inbound** - Traffic coming INTO your network from outside
- **Outbound** - Traffic leaving your network going outside
- Different rules for each direction

**Example:**
- Inbound rule: Allow port 443 (HTTPS) to web server
- Outbound rule: Allow users to access internet on ports 80, 443

---

## Firewall Types

### Stateless Firewall (Packet Filtering)

**How it works:** Examines each packet **independently** without tracking connections.

**What it checks:**
- Source IP address
- Destination IP address
- Source port
- Destination port
- Protocol (TCP, UDP, ICMP)

**Decision process:**
```
Packet arrives:
Source: 203.0.113.50
Dest: 192.168.1.10
Port: 80
Protocol: TCP

Firewall checks rules:
Rule 1: Allow Any to 192.168.1.10 port 80? ✅ MATCH - ALLOW
Packet forwarded
```

**Characteristics:**
- **Fast** - Simple processing, low overhead
- **No connection tracking** - Each packet evaluated separately
- **No state memory** - Doesn't remember previous packets
- **Both directions need rules** - Must explicitly allow return traffic

**Example scenario:**
- Allow rule: External to Web Server (192.168.1.10) on port 80
- **Problem:** Return traffic (web server back to user) needs separate rule
- Need rule: 192.168.1.10 port 80 to External (allow response)

**Limitations:**
- Can't detect if response packets are legitimate (no connection tracking)
- Vulnerable to spoofing (can't verify packet is part of valid connection)
- Requires complex rule sets (need rules for both directions)
- No protection against certain attacks (TCP session hijacking)

**Use cases:**
- Simple packet filtering
- High-performance environments where speed is critical
- Legacy systems
- Basic screening routers

### Stateful Firewall

**How it works:** Tracks connection state and only allows packets that are part of **established connections**.

**State table:** Firewall maintains table of active connections.

```
Connection State Table:
Source IP      Dest IP        State        Ports
203.0.113.50 → 192.168.1.10  ESTABLISHED  50234 → 80
198.51.100.5 → 192.168.1.10  ESTABLISHED  51832 → 443
203.0.113.99 → 192.168.1.10  NEW          60123 → 80
```

**Connection states:**
- **NEW** - First packet of new connection (SYN)
- **ESTABLISHED** - Connection is active
- **RELATED** - Related to existing connection (FTP data channel)
- **INVALID** - Doesn't match any known connection

**How it works:**
1. Client sends SYN to web server (NEW connection)
2. Firewall checks rules, allows if permitted, creates entry in state table
3. Web server sends SYN-ACK back
4. **Firewall automatically allows return traffic** (part of ESTABLISHED connection)
5. All subsequent packets for this connection automatically allowed

**Advantages:**
- **Smarter** - Understands connection context
- **More secure** - Only allows responses to legitimate requests
- **Simpler rules** - Don't need explicit rules for return traffic
- **Prevents spoofing** - Won't allow unsolicited response packets
- **Protects against attacks** - Blocks packets that aren't part of valid connections

**Example:**
```
Rule: Allow outbound HTTP (port 80)

User browses to website:
1. User → Internet: SYN to port 80 (NEW) ✅ Allowed by rule
2. Internet → User: SYN-ACK ✅ Auto-allowed (ESTABLISHED)
3. User → Internet: ACK ✅ Auto-allowed (ESTABLISHED)
4. Bidirectional traffic ✅ All auto-allowed (ESTABLISHED)

Random attacker sends packet:
- Attacker → User: SYN-ACK to port 80 ❌ BLOCKED (no matching NEW connection)
```

**Use cases:**
- **Modern standard** - Most firewalls are stateful
- Enterprise perimeter firewalls
- Data center firewalls
- Any security-conscious environment

🎯 **Exam Tip:** Stateful firewalls track connection state. Stateless firewalls examine each packet independently. Stateful is more secure because it understands context.

### Next-Generation Firewall (NGFW)

**Definition:** Firewall with advanced capabilities beyond traditional packet filtering.

**Traditional firewall:** Layer 3/4 filtering (IP addresses, ports)  
**NGFW:** Layer 7 filtering (application awareness, deep inspection)

**NGFW capabilities:**

**1. Application Awareness**
- Identifies applications regardless of port
- Can block Facebook but allow LinkedIn (both HTTPS on port 443)
- Recognizes applications trying to use non-standard ports

**Example:** Traditional firewall sees port 443 = "HTTPS allowed". NGFW sees port 443 = "This is Netflix traffic, block it during work hours."

**2. Deep Packet Inspection (DPI)**
- Examines packet payload (content), not just headers
- Detects threats hidden in allowed traffic
- Can decrypt and inspect SSL/TLS traffic (SSL inspection)

**3. Integrated IPS (Intrusion Prevention System)**
- Detects and blocks attack signatures
- Prevents exploits even if traffic is "allowed"
- Updates signatures automatically (like antivirus)

**4. User/Identity Awareness**
- Ties traffic to specific users (not just IP addresses)
- Integrates with Active Directory
- Different rules for different users/groups

**Example:** CEO can access Dropbox, regular employees cannot - even from same IP address.

**5. Threat Intelligence**
- Connects to cloud threat feeds
- Blocks known malicious IPs/domains automatically
- Updates in real-time as new threats emerge

**6. SSL/TLS Inspection**
- Decrypts HTTPS traffic to inspect contents
- Looks for malware in encrypted connections
- Re-encrypts before forwarding

**Comparison:**

| Capability | Traditional Firewall | NGFW |
|------------|---------------------|------|
| **Layer** | 3-4 (IP, Port) | 3-7 (IP to Application) |
| **Sees** | IPs and ports | Applications and content |
| **Blocks** | Based on port | Based on application behavior |
| **IPS** | Separate device | Integrated |
| **User awareness** | No | Yes |
| **SSL inspection** | No | Yes |
| **Threat intelligence** | No | Yes |

**Use cases:**
- Enterprise perimeter
- Data center security
- Replacing multiple security devices (firewall + IPS + proxy)
- High-security environments

**Vendors:** Palo Alto Networks, Fortinet FortiGate, Cisco Firepower, Check Point

🎯 **Exam Tip:** NGFW = application-aware, deep packet inspection, integrated IPS. Goes beyond traditional IP/port filtering to understand applications and content.

### Web Application Firewall (WAF)

**Purpose:** Protects web applications from Layer 7 attacks.

**Traditional firewall:** Protects network  
**WAF:** Protects web applications specifically

**What WAF protects against:**
- **SQL injection** - Malicious database queries
- **Cross-site scripting (XSS)** - Injecting malicious scripts
- **Cross-site request forgery (CSRF)** - Forcing unauthorized actions
- **File inclusion** - Uploading malicious files
- **DDoS at application layer** - Overwhelming application
- **Bot attacks** - Automated attacks

**How it works:**
1. HTTP request comes in
2. WAF analyzes request (URL, parameters, headers, body)
3. Compares against attack signatures and rules
4. Blocks malicious requests, allows legitimate ones
5. Forwards clean requests to web server

**Example:**
```
Malicious request:
GET /login?username=admin&password=' OR '1'='1

WAF detects SQL injection attempt → BLOCKS

Legitimate request:
GET /login?username=john@company.com&password=SecurePass123

WAF validates → ALLOWS → Forwards to web server
```

**Deployment:**
- **In front of web server** (reverse proxy mode)
- Cloud-based WAF (Cloudflare, AWS WAF)
- Integrated in load balancer

**Use cases:**
- Protecting public-facing websites
- E-commerce sites (payment processing)
- SaaS applications
- Any web application handling sensitive data

**WAF vs NGFW:**
- **WAF:** Layer 7, HTTP/HTTPS specific, protects web apps
- **NGFW:** Layer 3-7, all protocols, protects network

🎯 **Exam Tip:** WAF protects web applications from Layer 7 attacks like SQL injection and XSS. Operates at application layer, not network layer.

---

## Access Control Lists (ACLs)

**ACL:** Ordered list of rules that filter traffic on routers or firewalls.

**Two types:**

### Standard ACLs

**What they filter:** Source IP address only

**Simple filtering:**
- Allow or deny based on where traffic comes from
- Can't filter by destination, port, or protocol
- Less granular control

**Example:**
```
Standard ACL:
10 permit 192.168.1.0 0.0.0.255
20 permit 10.0.0.0 0.255.255.255
30 deny any
```

**Use case:** Simple filtering where you only care about source (e.g., "block this entire subnet")

### Extended ACLs

**What they filter:**
- Source IP
- Destination IP
- Protocol (TCP, UDP, ICMP)
- Source port
- Destination port

**Granular control:**
```
Extended ACL:
10 permit tcp 192.168.1.0 0.0.0.255 any eq 80
   (Allow subnet 192.168.1.0/24 to access any destination on port 80)

20 permit tcp 192.168.1.0 0.0.0.255 any eq 443
   (Allow same subnet to access any destination on port 443)

30 deny tcp 10.0.0.0 0.255.255.255 192.168.10.5 0.0.0.0 eq 23
   (Deny 10.0.0.0/8 from accessing 192.168.10.5 on Telnet port 23)

40 permit ip any any
   (Allow all other IP traffic)
```

**Use case:** Most common - fine-grained control over specific traffic types.

### Wildcard Masks

**Wildcard mask:** Inverted subnet mask used in ACLs.

**Subnet mask:** 1 = match, 0 = don't care  
**Wildcard mask:** 0 = match, 1 = don't care

**Examples:**

```
Match exact host 192.168.1.50:
192.168.1.50 0.0.0.0
(0.0.0.0 = all bits must match exactly)

Match subnet 192.168.1.0/24:
192.168.1.0 0.0.0.255
(0.0.0.255 = first three octets match, last octet can be anything)

Match 10.0.0.0/8:
10.0.0.0 0.255.255.255
(First octet 10, last three can be anything)

Match any:
0.0.0.0 255.255.255.255
(All bits can be anything)
```

**Quick conversion:**
- Subnet mask: 255.255.255.0
- Wildcard: 0.0.0.255 (subtract each octet from 255)

### ACL Processing Rules

**Critical concepts:**

**1. Top-to-bottom processing**
- ACL rules evaluated in order (1, 2, 3...)
- First match wins - processing stops
- Order matters immensely

**Example of order importance:**
```
Wrong order:
10 permit ip any any (allows everything)
20 deny tcp 10.0.0.0 0.255.255.255 any eq 23 (never reached!)

Correct order:
10 deny tcp 10.0.0.0 0.255.255.255 any eq 23 (block Telnet from 10.0.0.0/8)
20 permit ip any any (allow everything else)
```

**2. Implicit deny at end**
- Invisible rule at bottom: "deny any"
- If packet doesn't match any rule, it's denied
- Must explicitly permit traffic you want

**3. Placement guidelines**
- **Standard ACLs** - Place close to **destination** (can't specify destination, so place where you want to filter)
- **Extended ACLs** - Place close to **source** (deny unwanted traffic as soon as possible, save bandwidth)

**Why placement matters:**
```
Bad placement (Extended ACL at destination):
[Source] → [Router 1] → [Router 2] → [Router 3 + ACL] → [Destination]
                        ↑
        Unwanted traffic wastes bandwidth here

Good placement (Extended ACL at source):
[Source] → [Router 1 + ACL] → [Router 2] → [Router 3] → [Destination]
            ↑
        Blocked immediately, doesn't waste bandwidth
```

### ACL Permit and Deny Statements

**Syntax elements:**

**Permit vs Deny:**
- `permit` - Allow traffic
- `deny` - Block traffic

**Protocol:**
- `ip` - All IP traffic
- `tcp` - TCP only
- `udp` - UDP only
- `icmp` - ICMP only

**Port specification:**
- `eq` - Equal to (eq 80 = port 80)
- `gt` - Greater than (gt 1023 = ports > 1023)
- `lt` - Less than (lt 1024 = ports < 1024)
- `range` - Range of ports (range 1024 65535)

**Common ACL examples:**

```
Allow web traffic from any to web server:
permit tcp any host 192.168.1.10 eq 80
permit tcp any host 192.168.1.10 eq 443

Block Telnet from specific subnet:
deny tcp 10.0.0.0 0.255.255.255 any eq 23

Allow ping (ICMP):
permit icmp any any echo
permit icmp any any echo-reply

Block all traffic from specific host:
deny ip host 203.0.113.50 any

Allow SSH from admin subnet only:
permit tcp 192.168.100.0 0.0.0.255 any eq 22
deny tcp any any eq 22
```

🎯 **Exam Tip:** ACL processing is top-to-bottom, first match wins. Extended ACLs placed near source, standard ACLs near destination. Implicit deny at end.

---

## DMZ (Demilitarized Zone)

**DMZ:** Isolated network segment that sits between internal network and internet.

**Also called:** Screened subnet, perimeter network

**Purpose:** Place public-facing servers where they can be accessed from internet but can't compromise internal network if hacked.

**Classic DMZ architecture (Dual Firewall):**

```
                Internet
                    ↓
            [Firewall 1] ← Front firewall (external)
                    ↓
                  DMZ
        ┌───────────┼───────────┐
    Web Server  Mail Server  DNS Server
                    ↓
            [Firewall 2] ← Back firewall (internal)
                    ↓
            Internal Network
        (Users, File Servers, Databases)
```

**Security zones:**
1. **Untrusted** - Internet (anyone)
2. **Semi-trusted** - DMZ (public servers)
3. **Trusted** - Internal network (corporate resources)

**Firewall rules:**

**Front Firewall (Firewall 1):**
- Allow: Internet → DMZ on port 80, 443 (HTTP/HTTPS to web server)
- Allow: Internet → DMZ on port 25 (SMTP to mail server)
- Allow: Internet → DMZ on port 53 (DNS queries)
- **Deny: Internet → Internal Network** (protect internal network)

**Back Firewall (Firewall 2):**
- Allow: DMZ web server → Internal database server on port 3306 (web needs database)
- Allow: Internal users → DMZ on port 80, 443 (access internal web apps)
- Allow: Internal → Internet (users browse web)
- **Deny: DMZ → Internal** for most traffic (compromised DMZ server can't attack internal)

**What happens if DMZ server compromised:**
- Attacker gains access to web server in DMZ
- Front firewall already allows internet access (that's the point)
- **Back firewall blocks attacker from reaching internal network**
- Damage contained to DMZ

**Why DMZ is important:**
- **Defense in depth** - Multiple security layers
- **Reduces attack surface** - Internal network not directly exposed
- **Compliance** - Many regulations require DMZ for public services
- **Containment** - Breached DMZ server can't easily reach internal resources

**Single firewall DMZ (less secure):**
```
                Internet
                    ↓
        ┌───────[Firewall]───────┐
        ↓                         ↓
      DMZ                   Internal Network
```
- Uses one firewall with three interfaces
- Less secure (firewall is single point of failure)
- Cheaper (one device instead of two)

🎯 **Exam Tip:** DMZ = screened subnet between internet and internal network. Public servers (web, email, DNS) go in DMZ. Two firewalls = more secure than one.

---

## Network Address Translation (NAT)

**NAT:** Modifies IP addresses in packet headers as traffic crosses a router/firewall.

**Why NAT exists:**
- **IPv4 address exhaustion** - Not enough public IPs for every device
- **Security** - Hides internal IP addresses from internet
- **Flexibility** - Change internal addressing without affecting external connectivity

### Static NAT (One-to-One)

**Definition:** One private IP permanently mapped to one public IP.

```
Private IP → Public IP (permanent mapping)
192.168.1.10 → 203.0.113.50
192.168.1.11 → 203.0.113.51
192.168.1.12 → 203.0.113.52
```

**Use case:** Servers that need consistent public IP (web server, mail server)

**Example:**
- Internal web server: 192.168.1.10
- Static NAT maps to: 203.0.113.50
- Internet users access 203.0.113.50
- Firewall translates to 192.168.1.10
- Responses translate back to 203.0.113.50

### Dynamic NAT (Pool)

**Definition:** Pool of public IPs assigned dynamically to internal hosts.

```
Public IP Pool: 203.0.113.50-203.0.113.60 (11 addresses)

Internal hosts request internet access:
192.168.1.100 → Gets 203.0.113.50 (temporarily)
192.168.1.101 → Gets 203.0.113.51 (temporarily)
...
When done, IPs return to pool for reuse
```

**Limitation:** Can only support as many simultaneous connections as you have public IPs.

**Use case:** Organization with some public IPs but more internal hosts (less common today).

### PAT (Port Address Translation) / NAT Overload

**Definition:** Many private IPs share one public IP by using different port numbers.

**Also called:** NAT overload, many-to-one NAT

**How it works:**
```
Internal hosts all use same public IP but different source ports:

192.168.1.10:50234 → 203.0.113.50:50234
192.168.1.11:51432 → 203.0.113.50:51432
192.168.1.12:52910 → 203.0.113.50:52910
        ↓                      ↓
   Private IP:Port      Public IP:Port
```

**NAT table tracks connections:**
```
Inside (Private)      Outside (Public)      Destination
192.168.1.10:50234 ↔ 203.0.113.50:50234 → 198.51.100.5:80
192.168.1.11:51432 ↔ 203.0.113.50:51432 → 198.51.100.5:80
192.168.1.12:52910 ↔ 203.0.113.50:52910 → 203.0.113.100:443
```

**Return traffic:**
- Response to 203.0.113.50:50234 → Firewall looks up NAT table → Forwards to 192.168.1.10:50234

**Advantages:**
- **Thousands of internal hosts** can share one public IP
- **Cost effective** - Only need one public IP
- **Most common NAT type** used in homes and businesses

**Limitations:**
- Can cause issues with some protocols (SIP, FTP active mode)
- Can't host servers (incoming connections have nowhere to go)

🎯 **Exam Tip:** PAT = many private IPs share one public IP using port numbers. Most common NAT type. Static NAT = one-to-one mapping (for servers).

### Port Forwarding

**Definition:** Redirect incoming traffic on specific port to internal server.

**Problem PAT creates:** With PAT, all internal devices share one public IP. If someone connects to that public IP, which internal device should receive the connection?

**Solution:** Port forwarding (destination NAT)

**Configuration example:**
```
Public IP 203.0.113.50:

Port 80 → Forward to 192.168.1.10:80 (web server)
Port 443 → Forward to 192.168.1.10:443 (web server)
Port 25 → Forward to 192.168.1.11:25 (mail server)
Port 3389 → Forward to 192.168.1.50:3389 (admin RDP)
```

**How it works:**
```
Internet user connects to: 203.0.113.50:80
                               ↓
                    Firewall port forward rule
                               ↓
            Translates to: 192.168.1.10:80
                               ↓
                        Internal web server
```

**Use case:** Hosting services (web, game servers, remote access) behind NAT.

**Security consideration:** Only forward ports you actually need. Every forwarded port = potential attack surface.

---

## Firewall Best Practices

**1. Default Deny (Implicit Deny)**
- Block everything by default
- Explicitly allow only necessary traffic
- "If not explicitly permitted, it's denied"

**2. Least Privilege**
- Minimum necessary access
- Don't allow more than required
- Example: If web server only needs port 80/443, don't allow port 22

**3. Rule Order Matters**
- Most specific rules first
- More general rules later
- Deny rules before allow rules (for same traffic)

**4. Document Rules**
- Add comments explaining why rule exists
- Track who requested and when
- Helps with future audits and troubleshooting

**5. Regular Review**
- Audit rules quarterly
- Remove unused rules
- Update for business changes

**6. Logging**
- Log denied traffic (security monitoring)
- Log allowed traffic to critical systems
- Review logs regularly

**7. Change Management**
- Test firewall changes in lab
- Schedule changes during maintenance windows
- Have rollback plan
- Document all changes

**8. Redundancy**
- Active/standby or active/active firewalls
- Multiple internet connections
- Test failover regularly

**9. Keep Updated**
- Apply security patches
- Update signatures (IPS, threat intelligence)
- Firmware updates

**10. Defense in Depth**
- Firewalls are one layer
- Combine with IPS, endpoint protection, segmentation
- Multiple overlapping controls

---

## Key Exam Tips

**Firewall type comparison:**

| Type | What It Knows | Example |
|------|---------------|---------|
| **Stateless** | IP, Port, Protocol | Basic ACL |
| **Stateful** | + Connection state | Most firewalls |
| **NGFW** | + Application, User, Content | Palo Alto, Fortinet |
| **WAF** | + HTTP/HTTPS attacks | Cloudflare, F5 |

**Common exam scenarios:**

**Scenario 1:** "Users can't access internal web server from internet"
- Check: Port forwarding configured? DMZ rules allow traffic? Destination NAT correct?

**Scenario 2:** "Firewall allows port 80, but users can't browse websites"
- Check: Stateful firewall? Need return traffic rules? DNS allowed (port 53)?

**Scenario 3:** "Need to block specific country from accessing web server"
- Solution: Geo-blocking rule on firewall (NGFW feature)

**Scenario 4:** "SQL injection attacks reaching web application"
- Solution: WAF, not network firewall (Layer 7 attack)

**Scenario 5:** "ACL not working as expected"
- Check: Rule order (first match wins), implicit deny at end, wildcard masks correct

**ACL placement:**
- Standard ACL → Near destination
- Extended ACL → Near source

**NAT types quick reference:**
- **Static NAT:** Server needs consistent public IP
- **Dynamic NAT:** Pool of public IPs
- **PAT:** Many devices share one public IP (most common)
- **Port forwarding:** Allow incoming connections through PAT

**DMZ requirements:**
- Public-facing servers (web, email, DNS)
- Between internet and internal network
- Two firewalls = more secure

---

## Key Takeaways

- [ ] **Firewalls filter traffic based on rules** (allow/deny decisions)
- [ ] **Implicit deny** means if not explicitly allowed, traffic is blocked (default deny)
- [ ] **Stateless firewalls** examine each packet independently (no connection tracking)
- [ ] **Stateful firewalls** track connection state, automatically allow return traffic
- [ ] **NGFW** adds application awareness, deep inspection, integrated IPS, user awareness
- [ ] **WAF** protects web applications from Layer 7 attacks (SQL injection, XSS)
- [ ] **Standard ACLs** filter only source IP (less granular)
- [ ] **Extended ACLs** filter source, destination, protocol, ports (more control)
- [ ] **ACL processing** is top-to-bottom, first match wins, implicit deny at end
- [ ] **Extended ACLs placed near source**, standard ACLs near destination
- [ ] **Wildcard mask** is inverted subnet mask (0=match, 1=don't care)
- [ ] **DMZ (screened subnet)** isolates public servers between two firewalls
- [ ] **Static NAT** maps one private IP to one public IP (one-to-one)
- [ ] **PAT (NAT overload)** maps many private IPs to one public IP using ports
- [ ] **Port forwarding** redirects incoming traffic to specific internal server
- [ ] **Defense in depth** uses multiple overlapping security layers

---

## Check Your Understanding

**1. What is the difference between stateless and stateful firewalls?**

<details>
<summary>Show Answer</summary>
<strong>Stateless firewalls examine each packet independently without tracking connections, while stateful firewalls track connection state and automatically allow return traffic for established connections.</strong> With stateless firewalls, you need explicit rules for both directions of traffic. If you allow outbound HTTP, you must also allow the inbound response. Stateful firewalls are smarter - they maintain a connection state table that tracks active connections. When you allow outbound HTTP, the firewall automatically allows the response because it knows it's part of an established connection. This makes stateful firewalls more secure (they won't allow unsolicited response packets) and easier to configure (fewer rules needed). Stateful is the modern standard - nearly all current firewalls are stateful.
</details>

**2. A company needs to block Facebook but allow other HTTPS traffic. What type of firewall is required?**

<details>
<summary>Show Answer</summary>
<strong>Next-Generation Firewall (NGFW) with application awareness.</strong> Traditional firewalls can only see IP addresses, ports, and protocols. Facebook uses HTTPS (port 443) just like thousands of other websites. A traditional firewall sees port 443 and can only allow all HTTPS or block all HTTPS - it can't distinguish Facebook from other HTTPS sites. NGFW with application awareness can identify specific applications regardless of port number by inspecting packet contents, analyzing traffic patterns, and using application signatures. This allows granular control - block Facebook, but allow LinkedIn, Google, etc., even though they all use the same port 443. This is deep packet inspection (DPI) capability.
</details>

**3. What does "implicit deny" mean in firewall configuration?**

<details>
<summary>Show Answer</summary>
<strong>Implicit deny means there's an invisible "deny all" rule at the bottom of the firewall ruleset - if traffic doesn't match any explicit allow rule, it's automatically blocked.</strong> This is a security best practice called "default deny" - everything is blocked unless you explicitly allow it. The opposite would be "default allow" where everything is permitted unless explicitly blocked, which is insecure. With implicit deny, you must write rules to allow the traffic you want. If a packet comes in and doesn't match any of your allow rules, it hits the implicit deny at the end and is blocked. This is why new firewall installations block everything until you add allow rules. Some firewalls show the implicit deny rule explicitly, others hide it, but it's always there conceptually.
</details>

**4. An administrator creates an extended ACL with these rules in order: (1) permit ip any any (2) deny tcp 10.0.0.0 0.255.255.255 any eq 23. What's wrong?**

<details>
<summary>Show Answer</summary>
<strong>The rule order is wrong - rule 1 will match all traffic, so rule 2 will never be evaluated.</strong> ACL processing is top-to-bottom, and the first match wins - processing stops. When a packet arrives, the firewall checks rule 1 first. "Permit ip any any" matches EVERY IP packet, so the firewall allows it and stops processing. It never reaches rule 2 that's supposed to block Telnet. The correct order should be: (1) deny tcp 10.0.0.0 0.255.255.255 any eq 23 (specific deny rule first), (2) permit ip any any (general allow rule last). This is a critical concept for the Network+ exam - specific rules must come before general rules, and the order can completely break your security policy.
</details>

**5. What is a DMZ and why would you use one?**

<details>
<summary>Show Answer</summary>
<strong>A DMZ (Demilitarized Zone) is an isolated network segment between the internet and internal network where public-facing servers are placed.</strong> The DMZ sits between two firewalls - one facing the internet (front firewall) and one facing the internal network (back firewall). You place servers that need internet access (web servers, email servers, DNS servers) in the DMZ. If one of these servers is compromised, the back firewall prevents the attacker from easily reaching your internal network. The DMZ is "semi-trusted" - more trusted than the internet, less trusted than your internal network. This provides defense in depth and containment. Many compliance standards (PCI-DSS, HIPAA) require DMZ architecture for public-facing services.
</details>

**6. What's the difference between Static NAT and PAT?**

<details>
<summary>Show Answer</summary>
<strong>Static NAT maps one private IP to one public IP (one-to-one permanent mapping), while PAT maps many private IPs to one public IP using different port numbers (many-to-one).</strong> Static NAT is used for servers that need consistent public IP addresses - for example, your web server at 192.168.1.10 is always translated to 203.0.113.50. PAT (also called NAT overload) is what most homes and businesses use - hundreds or thousands of internal devices share a single public IP address. The firewall tracks connections using port numbers. When 192.168.1.10 connects out, it might use public IP 203.0.113.50:50234. When 192.168.1.11 connects, it uses 203.0.113.50:51432. Same public IP, different ports. PAT is much more common than Static NAT because it's efficient and requires fewer public IPs.
</details>

**7. Where should you place an extended ACL - near the source or destination?**

<details>
<summary>Show Answer</summary>
<strong>Extended ACLs should be placed near the source of the traffic you want to filter.</strong> The reason is efficiency - you want to block unwanted traffic as close to the source as possible to avoid wasting bandwidth. If you place an extended ACL near the destination, the unwanted traffic travels across multiple routers/links before finally being blocked. This wastes bandwidth and router processing. By placing the ACL at the source, you deny the traffic immediately before it uses network resources. Standard ACLs are placed near the destination because they can only filter on source IP and you don't want to accidentally block legitimate traffic to other destinations. This is a common exam question - know the placement rules for both ACL types.
</details>

**8. A web server behind a firewall using PAT needs to be accessible from the internet. What configuration is needed?**

<details>
<summary>Show Answer</summary>
<strong>Port forwarding (destination NAT) must be configured to redirect incoming connections on specific ports to the internal web server.</strong> With PAT, all internal devices share one public IP. When someone connects from the internet to that public IP, the firewall doesn't know which internal device should receive the connection. Port forwarding solves this by mapping specific ports on the public IP to specific internal IP:port combinations. Configuration example: Forward public IP 203.0.113.50:80 to 192.168.1.10:80, and 203.0.113.50:443 to 192.168.1.10:443. Now when internet users connect to 203.0.113.50 on ports 80 or 443, the firewall translates it to the internal web server. This is how you host services behind NAT.
</details>

**9. What is a Next-Generation Firewall's main advantage over traditional firewalls?**

<details>
<summary>Show Answer</summary>
<strong>NGFW's main advantage is application awareness - it can identify and control applications regardless of port, while traditional firewalls can only filter based on IP addresses and port numbers.</strong> Traditional firewalls operate at Layer 3-4 and see "traffic on port 443" but can't tell if it's Facebook, Netflix, or online banking - it's all just HTTPS. NGFWs operate up to Layer 7 with deep packet inspection, analyzing the actual content and behavior of traffic. This allows blocking specific applications (block Facebook, allow LinkedIn), detecting threats hidden in allowed traffic, identifying users (not just IPs), and inspecting encrypted traffic. NGFWs also typically include integrated IPS, threat intelligence feeds, and SSL inspection. This makes them much more effective at modern threats that use legitimate ports and encryption to hide.
</details>

**10. What is a WAF and how is it different from a network firewall?**

<details>
<summary>Show Answer</summary>
<strong>A WAF (Web Application Firewall) specifically protects web applications from Layer 7 attacks like SQL injection and XSS, while network firewalls protect at Layer 3-4 (IP/port level).</strong> Network firewalls can allow or block web traffic based on IP addresses and ports, but they can't understand HTTP-specific attacks embedded in allowed traffic. If your firewall allows port 443 to your web server, it will pass through SQL injection attempts, cross-site scripting, and other application-layer attacks. A WAF sits in front of your web server and analyzes HTTP/HTTPS requests, looking for attack patterns in URLs, parameters, headers, and request bodies. It blocks malicious requests while allowing legitimate ones. WAFs are essential for protecting public-facing web applications, especially those handling sensitive data or payment processing.
</details>

**11. ACL rules are processed in what order, and what happens if no rules match?**

<details>
<summary>Show Answer</summary>
<strong>ACL rules are processed top-to-bottom, first match wins, and if no rules match, the packet is denied by the implicit deny rule at the end.</strong> When a packet arrives, the firewall starts at rule 1, checks if the packet matches. If yes, it takes that action (permit or deny) and stops processing - it doesn't check any more rules. If no match, it moves to rule 2, then 3, and so on. If the packet reaches the end without matching any rule, there's an invisible "deny any" rule (implicit deny) that blocks it. This is why rule order is critical - a general "permit any" rule early in the list will match everything and prevent later rules from ever being checked. Always put specific rules first, general rules last, and remember that implicit deny is always lurking at the bottom.
</details>

**12. Why would you use both network firewalls and host-based firewalls?**

<details>
<summary>Show Answer</summary>
<strong>Defense in depth - multiple overlapping security layers protect better than a single layer.</strong> Network firewalls protect at the perimeter and between network segments, but they can't protect against threats that originate inside the network (malware, insider threats, lateral movement). Host-based firewalls add protection at the endpoint level. If an attacker bypasses the network firewall or is already inside, host firewalls can prevent lateral movement to other systems. They're also critical for laptops that leave the network - when an employee works from a coffee shop, the host firewall is their only protection. Additionally, host firewalls can provide application-level control (block specific programs from network access) that network firewalls can't. Best practice is network firewall at perimeter + host firewalls on all endpoints.
</details>

---

## Before Moving to Lesson 25

**You should be able to:**
- [ ] Explain stateless vs stateful firewall operation
- [ ] Describe NGFW capabilities (application awareness, DPI, IPS)
- [ ] Configure standard and extended ACLs with proper syntax
- [ ] Understand ACL processing (top-to-bottom, first match, implicit deny)
- [ ] Design DMZ architecture with dual firewalls
- [ ] Configure NAT types (static, dynamic, PAT)
- [ ] Set up port forwarding for services behind NAT
- [ ] Apply firewall best practices (default deny, least privilege)

**Study strategy:**
- **Practice ACL syntax** - Write example ACLs for common scenarios
- **Draw DMZ diagrams** - Understand traffic flow through firewalls
- **Memorize NAT types** - Know when to use each
- **Understand implicit deny** - Critical security concept
- **Rule order matters** - Practice ordering ACL rules correctly

---

## Coming Up in Lesson 25

**Next: Network Segmentation and Zero Trust**

Now that you understand how to filter traffic with firewalls and ACLs, Lesson 25 covers dividing networks into security zones:
- Network segmentation strategies (VLANs, subnets)
- Microsegmentation
- Zero Trust security model (never trust, always verify)
- Network Access Control (NAC)
- Security zones (trusted, untrusted, DMZ)
- East-west traffic filtering

**Connection:** Firewalls enable segmentation by controlling traffic between zones. Zero Trust builds on defense in depth by requiring verification everywhere, not just at the perimeter.

---

*"The best firewall rule is the one that blocks an attack you didn't know was coming."*

---

# ✅ LESSON 24 COMPLETE!

**Progress: 24 of 30 lessons (80% complete)**

**Domain 4.0 Network Security: 4 of 6 lessons complete**

🎯 You now understand firewalls and ACLs - the gatekeepers of network security!

**Next up:** Lesson 25 - Network Segmentation and Zero Trust (dividing and conquering security)