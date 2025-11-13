# Lesson 9: Port Numbers and Common Protocols

**Estimated Time:** 20-25 minutes  
**Domain:** Networking Concepts  
**Exam Objectives Covered:** 1.1, 1.5 - Ports and Protocols

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain what port numbers are and why they're essential
- Identify the three port number ranges (well-known, registered, dynamic)
- Memorize critical port numbers for the Network+ exam
- Distinguish between TCP and UDP port usage
- Recognize protocols in network traffic based on port numbers
- Understand the relationship between insecure and secure protocol versions
- Identify ports in different formats (packet captures, IP:Port notation, netstat output)
- Use port knowledge for basic network troubleshooting

---

## Video Resources

🔹 **Port Numbers Overview:** [Understanding Port Numbers - Professor Messer](https://www.youtube.com/watch?v=jX1pobYmZdE)  
🔹 **Common Ports Explained:** [Port Numbers to Know - Cyber James](https://www.youtube.com/watch?v=xBKctNm2fE0)  
🔹 **TCP vs UDP:** [TCP vs UDP Comparison - PowerCert](https://www.youtube.com/watch?v=uwoD5YsGACg)  
🔹 **Wireshark Basics:** [Wireshark Tutorial for Beginners - Anson Alexander](https://www.youtube.com/watch?v=qTaOZrDnMzQ)

---

## Introduction

Imagine you live in a massive apartment building with 65,535 apartments. Your friend wants to visit you, so you give them your building's address. But that's not enough - they also need your specific apartment number to find you.

**Port numbers work exactly like apartment numbers for network traffic.**

Your computer's IP address is like the building address - it identifies your device on the network. But your computer runs multiple services and applications simultaneously:
- Web browsing
- Email
- Video calls
- File transfers
- Music streaming

**Port numbers tell the computer which "apartment" (which application) should receive incoming data.**

**Why this matters:**
- Without ports, your computer couldn't run multiple network applications simultaneously
- Firewalls use port numbers to allow or block specific traffic
- Network troubleshooting requires identifying which ports are open or blocked
- The Network+ exam heavily tests port number knowledge

**Today's challenge:** You need to memorize about 20 essential port numbers. This is probably the most memorization-intensive lesson in the entire course. But don't worry - we'll use memory tricks, grouping strategies, and hands-on practice to make these numbers stick.

Let's unlock the apartment building of network communications! 🏢

---

## What Are Port Numbers?

A **port number** is a 16-bit integer (0-65535) that identifies a specific process or service on a device.

**Key concepts:**

**Multiplexing:** Port numbers allow multiple network conversations to happen simultaneously on the same IP address. Your computer can browse the web, check email, and stream music all at once because each uses different ports.

**Socket:** The combination of IP address + port number. Example: `192.168.1.100:80` means "device 192.168.1.100, port 80"

**Source Port vs Destination Port:**
- **Destination port:** The service you're trying to reach (usually well-known, like 80 for HTTP)
- **Source port:** Your computer's randomly assigned port for the conversation (usually in the 49152-65535 range)

**Example conversation:**
- You browse to google.com
- Your computer: `192.168.1.100:54321` (your IP + random source port)
- Google's server: `142.250.185.46:443` (Google's IP + HTTPS port)

The source port (54321) allows Google's response to find its way back to your web browser specifically, not your email client.

---

## Port Number Ranges

Port numbers are divided into three ranges:

### **Well-Known Ports (0-1023)**
- Reserved for common services and protocols
- Require administrative/root privileges to use
- Standardized by IANA (Internet Assigned Numbers Authority)
- **These are what you need to memorize for the exam**

Examples: HTTP (80), HTTPS (443), SSH (22), DNS (53)

### **Registered Ports (1024-49151)**
- Used by vendors for specific applications
- Don't require special privileges
- Can be registered with IANA but less standardized

Examples: Microsoft SQL Server (1433), MySQL (3306), Minecraft (25565)

### **Dynamic/Private Ports (49152-65535)**
- Used as temporary source ports by client applications
- Randomly assigned by your operating system
- Also called "ephemeral ports"

**Check Your Understanding:**

Look at this network traffic:

```
Source IP: 192.168.1.50
Source Port: 51234
Destination IP: 8.8.8.8
Destination Port: 53
Protocol: UDP
```

**Which port is well-known, and what does this traffic represent?**

<details>
<summary>Show Answer</summary>
Port 53 is the well-known port for DNS. This is a DNS query from a client (192.168.1.50) to Google's public DNS server (8.8.8.8). The source port 51234 is a dynamic/ephemeral port randomly assigned by the client's operating system for this specific DNS query.
</details>

---

## Essential Port Numbers - Memorize These!

Here's the truth: **you MUST memorize these ports for the Network+ exam.** Questions will ask "What port does HTTPS use?" or show you packet captures where you need to identify the protocol.

Let's break them into categories to make memorization easier.

---

## Remote Access Protocols

These protocols let you control computers remotely.

### **SSH (Secure Shell) - Port 22**
- **Purpose:** Secure remote command-line access to devices
- **Transport:** TCP
- **Security:** Encrypted (secure)
- **Common uses:** Managing servers, network devices, secure file transfer (SFTP uses SSH)

**Memory trick:** "SSH is 22 - Two shoes for Secure Shell"

### **Telnet - Port 23**
- **Purpose:** Remote command-line access (OBSOLETE)
- **Transport:** TCP
- **Security:** Unencrypted (insecure - sends passwords in plain text!)
- **Status:** Replaced by SSH in modern networks

**Memory trick:** "Telnet is 23 - Two-three, please flee (it's insecure!)"

**Secure upgrade:** Telnet (23) → SSH (22)

### **RDP (Remote Desktop Protocol) - Port 3389**
- **Purpose:** Remote graphical desktop access (Windows)
- **Transport:** TCP
- **Security:** Can be encrypted with TLS
- **Common uses:** Remote desktop connections, IT support, accessing work computers

**Memory trick:** "RDP 3389 - Three-three-eight-nine, remote desktop fine"

**Check Your Understanding:**

```
192.168.1.100:49234 → 10.0.0.50:3389
Protocol: TCP
```

**What is this connection, and is it secure?**

<details>
<summary>Show Answer</summary>
This is an RDP (Remote Desktop Protocol) connection from 192.168.1.100 to 10.0.0.50. Someone is remotely accessing the graphical desktop of the server at 10.0.0.50. RDP can be secured with TLS encryption, but the port alone doesn't tell us if encryption is enabled - you'd need to check the RDP configuration.
</details>

---

## Web Traffic Protocols

These are the foundation of internet browsing.

### **HTTP (Hypertext Transfer Protocol) - Port 80**
- **Purpose:** Web browsing (unencrypted)
- **Transport:** TCP
- **Security:** Unencrypted (insecure - data sent in plain text)
- **Status:** Being phased out in favor of HTTPS

**Memory trick:** "HTTP is 80 - Ate-zero security (none!)"

### **HTTPS (HTTP Secure) - Port 443**
- **Purpose:** Secure web browsing
- **Transport:** TCP
- **Security:** Encrypted with TLS/SSL
- **Common uses:** Banking, shopping, any website with sensitive data

**Memory trick:** "HTTPS is 443 - Four-four-three, secure for me"

**Secure upgrade:** HTTP (80) → HTTPS (443)

**Real-world note:** Modern browsers show "Not Secure" warnings for HTTP sites. Most websites have migrated to HTTPS.

**Check Your Understanding:**

You're troubleshooting why a user can't access https://example.com. In Wireshark, you see this:

```
Source: 192.168.1.25:52341
Destination: 93.184.216.34:443
TCP [SYN]
```

**Is the problem with DNS, the web server, or the network connection?**

<details>
<summary>Show Answer</summary>
The DNS resolution already worked (the client knows the IP 93.184.216.34), and the client is attempting to establish a TCP connection to port 443 (HTTPS). The [SYN] flag indicates the beginning of a TCP handshake. You'd need to see if there's a [SYN, ACK] response to determine if the web server is responding. If the SYN hangs without a response, the problem is likely a network connection issue (firewall blocking port 443, routing problem, or web server is down).
</details>

---

## Email Protocols

Email uses multiple protocols for sending and receiving.

### **SMTP (Simple Mail Transfer Protocol) - Port 25**
- **Purpose:** Sending email between mail servers
- **Transport:** TCP
- **Security:** Can use TLS (SMTP with STARTTLS uses port 587)
- **Use case:** Your email client sends to your mail server, mail servers relay to each other

**Memory trick:** "SMTP is 25 - Send Mail To Port 25"

### **POP3 (Post Office Protocol v3) - Port 110**
- **Purpose:** Downloading email from server (removes from server)
- **Transport:** TCP
- **Security:** Can use TLS (POP3S uses port 995)
- **Behavior:** Downloads messages and typically deletes them from server

**Memory trick:** "POP3 is 110 - Pop one-ten messages to my PC"

### **IMAP (Internet Message Access Protocol) - Port 143**
- **Purpose:** Accessing email on server (stays on server)
- **Transport:** TCP
- **Security:** Can use TLS (IMAPS uses port 993)
- **Behavior:** Syncs across devices - email stays on server

**Memory trick:** "IMAP is 143 - One-four-three, messages stay with me (on the server)"

**POP3 vs IMAP:**
- POP3: Download and delete (like picking up mail from post office)
- IMAP: Access remotely (like reading mail through a window - it stays there)

**Secure upgrades:**
- SMTP (25) → SMTP with TLS (587)
- POP3 (110) → POP3S (995)
- IMAP (143) → IMAPS (993)

**Check Your Understanding:**

```
10.0.0.25:143 → 192.168.1.100:54892
Protocol: TCP
```

**Is this email being sent or received, and which protocol is being used?**

<details>
<summary>Show Answer</summary>
Port 143 is IMAP, so this is email being received (or accessed). The email server (10.0.0.25) is responding to an IMAP request from a client (192.168.1.100). The client is likely checking for new messages or reading existing messages. With IMAP, the messages remain on the server at 10.0.0.25 and can be accessed from multiple devices.
</details>

---

## File Transfer Protocols

These protocols move files between devices.

### **FTP (File Transfer Protocol) - Ports 20 and 21**
- **Port 21:** Control connection (commands)
- **Port 20:** Data connection (actual file transfer)
- **Transport:** TCP
- **Security:** Unencrypted (insecure - sends credentials in plain text)
- **Status:** Being replaced by secure alternatives

**Memory trick:** "FTP is 20/21 - Legal drinking age for file transfers"

### **FTPS (FTP Secure) - Ports 989 and 990**
- **Purpose:** FTP with TLS/SSL encryption
- **Transport:** TCP
- **Security:** Encrypted
- **Note:** Different from SFTP!

### **SFTP (SSH File Transfer Protocol) - Port 22**
- **Purpose:** Secure file transfer over SSH
- **Transport:** TCP (uses SSH port 22)
- **Security:** Encrypted
- **Note:** Not related to FTPS - completely different protocol

**Secure upgrades:** FTP (20/21) → SFTP (22) or FTPS (989/990)

### **TFTP (Trivial File Transfer Protocol) - Port 69**
- **Purpose:** Simple file transfer (no authentication)
- **Transport:** UDP (not TCP!)
- **Security:** None
- **Common uses:** Network device firmware updates, PXE boot

**Memory trick:** "TFTP is 69 - Nice and simple, UDP is fine"

### **SMB (Server Message Block) - Port 445**
- **Purpose:** Windows file and printer sharing
- **Transport:** TCP
- **Common uses:** Accessing network drives, shared printers
- **Also called:** CIFS (Common Internet File System)

**Memory trick:** "SMB is 445 - Four-four-five, shared files come alive"

---

## Network Services

These protocols keep networks running smoothly.

### **DNS (Domain Name System) - Port 53**
- **Purpose:** Translating domain names to IP addresses
- **Transport:** UDP (for queries), TCP (for zone transfers)
- **Common uses:** Every time you type a website name

**Memory trick:** "DNS is 53 - I'll give you tree-fiddy for a name"

### **DHCP (Dynamic Host Configuration Protocol) - Ports 67 and 68**
- **Port 67:** DHCP server
- **Port 68:** DHCP client
- **Transport:** UDP
- **Purpose:** Automatic IP address assignment

**Memory trick:** "DHCP is 67/68 - Six-seven-eight, IP addresses auto-create"

### **NTP (Network Time Protocol) - Port 123**
- **Purpose:** Time synchronization
- **Transport:** UDP
- **Common uses:** Keeping all devices showing the same time

**Memory trick:** "NTP is 123 - One-two-three, sync time with me"

### **SNMP (Simple Network Management Protocol) - Ports 161 and 162**
- **Port 161:** SNMP queries and commands
- **Port 162:** SNMP traps (alerts)
- **Transport:** UDP
- **Purpose:** Network device monitoring and management

**Memory trick:** "SNMP is 161/162 - One-six-one-two, monitors me and you"

**Check Your Understanding:**

```
Source: 192.168.1.1:67
Destination: 255.255.255.255:68
Protocol: UDP
```

**What's happening here?**

<details>
<summary>Show Answer</summary>
This is DHCP traffic - specifically a DHCP Offer from the server (port 67) to a client (port 68). The destination is the broadcast address (255.255.255.255), which is typical for DHCP communication. The server is responding to a DHCP Discover message, offering an IP address to a client on the network.
</details>

---

## Directory Services

These protocols manage user accounts and network resources.

### **LDAP (Lightweight Directory Access Protocol) - Port 389**
- **Purpose:** Accessing directory services (user accounts, permissions)
- **Transport:** TCP
- **Security:** Unencrypted
- **Common uses:** Active Directory, corporate login systems

**Memory trick:** "LDAP is 389 - Three-eight-nine, directory's fine"

### **LDAPS (LDAP Secure) - Port 636**
- **Purpose:** LDAP with TLS/SSL encryption
- **Transport:** TCP
- **Security:** Encrypted

**Memory trick:** "LDAPS is 636 - Six-three-six, secure directory tricks"

**Secure upgrade:** LDAP (389) → LDAPS (636)

### **NetBIOS - Ports 137, 138, 139**
- **Port 137:** NetBIOS Name Service (UDP)
- **Port 138:** NetBIOS Datagram Service (UDP)
- **Port 139:** NetBIOS Session Service (TCP)
- **Purpose:** Windows networking (legacy)
- **Status:** Mostly replaced by SMB direct over TCP (port 445)

**Memory trick:** "NetBIOS 137-139 - One-three-seven through nine, Windows networking from another time"

---

## VoIP (Voice over IP)

### **SIP (Session Initiation Protocol) - Ports 5060 and 5061**
- **Port 5060:** SIP (unencrypted)
- **Port 5061:** SIP with TLS (encrypted)
- **Transport:** Both TCP and UDP
- **Purpose:** Setting up voice and video calls over IP

**Memory trick:** "SIP is 5060/5061 - Five-oh-six-oh/one, VoIP calls begun"

---

## TCP vs UDP: Which Protocols Use Which?

Understanding whether a protocol uses TCP or UDP helps with troubleshooting.

### **TCP Protocols (Reliable, Connection-Oriented)**
- Establishes connection before sending data
- Guarantees delivery and order
- Used when reliability matters

**TCP ports you must know:**
- HTTP (80), HTTPS (443)
- SSH (22), Telnet (23), RDP (3389)
- SMTP (25), POP3 (110), IMAP (143)
- FTP (20/21), SFTP (22), SMB (445)
- LDAP (389), LDAPS (636)

**Why TCP:** Email, web pages, and file transfers must arrive completely and in order.

### **UDP Protocols (Fast, Connectionless)**
- No connection setup
- No delivery guarantee
- Used when speed matters more than reliability

**UDP ports you must know:**
- DNS (53) - usually UDP, TCP for zone transfers
- DHCP (67/68)
- TFTP (69)
- NTP (123)
- SNMP (161/162)

**Why UDP:** DNS queries need to be fast (retransmit if no answer). DHCP happens at network startup before TCP can work. TFTP is simple by design. Time sync and monitoring need speed over perfection.

**Mixed (Both TCP and UDP):**
- **DNS (53):** UDP for queries (fast), TCP for zone transfers (reliable)
- **SIP (5060/5061):** Both supported depending on implementation

**Check Your Understanding:**

You're troubleshooting a file transfer that keeps failing partway through. The protocol being used is UDP-based. Why might this be a problem?

<details>
<summary>Show Answer</summary>
UDP doesn't guarantee delivery or order of packets. For a file transfer, if some packets are lost in transit, the file will be corrupted or incomplete. UDP doesn't have built-in retransmission like TCP does. This is why file transfer protocols typically use TCP (FTP, SFTP, SMB) rather than UDP. The exception is TFTP (UDP port 69), which is deliberately simple and used only for small, non-critical transfers where corruption can be easily detected and the whole file re-downloaded.
</details>

---

## Security Upgrades: Insecure → Secure

Many older protocols were designed without encryption. Modern networks replace them with secure versions.

### **Remote Access**
| Insecure | Port | Secure | Port |
|----------|------|--------|------|
| Telnet | 23 | SSH | 22 |

**Why:** Telnet sends passwords in plain text. Anyone with a packet sniffer can steal credentials.

### **Web Traffic**
| Insecure | Port | Secure | Port |
|----------|------|--------|------|
| HTTP | 80 | HTTPS | 443 |

**Why:** HTTP sends all data unencrypted. HTTPS encrypts everything with TLS/SSL.

### **File Transfer**
| Insecure | Port | Secure | Port |
|----------|------|--------|------|
| FTP | 20/21 | SFTP | 22 |
| FTP | 20/21 | FTPS | 989/990 |

**Why:** FTP credentials and data are unencrypted.

### **Email**
| Insecure | Port | Secure | Port |
|----------|------|--------|------|
| SMTP | 25 | SMTP+TLS | 587 |
| POP3 | 110 | POP3S | 995 |
| IMAP | 143 | IMAPS | 993 |

**Why:** Email often contains sensitive information and credentials.

### **Directory Services**
| Insecure | Port | Secure | Port |
|----------|------|--------|------|
| LDAP | 389 | LDAPS | 636 |

**Why:** LDAP contains user authentication information.

**Modern security principle:** Default to encrypted protocols. Only use unencrypted versions when absolutely necessary (and never for internet-facing services).

---

## Port Number Quick Reference Table

Here's the complete list formatted for easy studying:

| Protocol | Port(s) | TCP/UDP | Purpose | Secure? |
|----------|---------|---------|---------|---------|
| **FTP** | 20/21 | TCP | File transfer | ❌ |
| **SSH/SFTP** | 22 | TCP | Secure remote access & file transfer | ✅ |
| **Telnet** | 23 | TCP | Remote access | ❌ |
| **SMTP** | 25 | TCP | Send email | ⚠️ |
| **DNS** | 53 | UDP/TCP | Domain name resolution | ⚠️ |
| **DHCP** | 67/68 | UDP | IP address assignment | ⚠️ |
| **TFTP** | 69 | UDP | Simple file transfer | ❌ |
| **HTTP** | 80 | TCP | Web browsing | ❌ |
| **POP3** | 110 | TCP | Receive email | ❌ |
| **NTP** | 123 | UDP | Time synchronization | ⚠️ |
| **NetBIOS** | 137-139 | UDP/TCP | Windows networking | ❌ |
| **IMAP** | 143 | TCP | Access email | ❌ |
| **SNMP** | 161/162 | UDP | Network monitoring | ⚠️ |
| **LDAP** | 389 | TCP | Directory services | ❌ |
| **HTTPS** | 443 | TCP | Secure web browsing | ✅ |
| **SMB** | 445 | TCP | File/printer sharing | ⚠️ |
| **LDAPS** | 636 | TCP | Secure directory services | ✅ |
| **FTPS** | 989/990 | TCP | Secure file transfer | ✅ |
| **IMAPS** | 993 | TCP | Secure email access | ✅ |
| **POP3S** | 995 | TCP | Secure email download | ✅ |
| **RDP** | 3389 | TCP | Remote desktop | ⚠️ |
| **SIP** | 5060/5061 | TCP/UDP | VoIP signaling | ⚠️ |

**Legend:**
- ✅ Encrypted by default
- ❌ No encryption
- ⚠️ Can be encrypted or has secure version

---

## Memory Strategies

### **Group by Function**
Don't memorize randomly - think in categories:
- Remote access: 22, 23, 3389
- Web: 80, 443
- Email: 25, 110, 143
- File transfer: 20/21, 22, 69, 445
- Network services: 53, 67/68, 123, 161/162
- Directory: 389, 636, 137-139
- VoIP: 5060/5061

### **Remember Patterns**
- Secure versions often use different port ranges (HTTPS 443 vs HTTP 80)
- Email ports are in the 100s: 110 (POP3), 143 (IMAP)
- Service pairs use consecutive or nearby ports: FTP 20/21, DHCP 67/68, SNMP 161/162

### **Create Associations**
- **22 = SSH** = Two shoes (secure shell protection)
- **25 = SMTP** = Send Mail To Port 25
- **53 = DNS** = Tree-fiddy for a name
- **80 = HTTP** = Ate-nothing (no security)
- **443 = HTTPS** = Four-four-three, secure for me
- **3389 = RDP** = Remote desktop, three-three-eight-nine fine

### **Use Flashcards**
The Memory Match game and flashcards for this lesson are specifically designed for port memorization. Use them daily!

---

## Key Takeaways

✅ **Port numbers identify specific services** on a device (like apartment numbers)

✅ **Three ranges:** Well-known (0-1023), Registered (1024-49151), Dynamic (49152-65535)

✅ **Critical ports to memorize:**
- SSH (22), Telnet (23), RDP (3389)
- HTTP (80), HTTPS (443)
- SMTP (25), POP3 (110), IMAP (143)
- FTP (20/21), TFTP (69), SMB (445)
- DNS (53), DHCP (67/68), NTP (123), SNMP (161/162)
- LDAP (389), LDAPS (636)
- SIP (5060/5061)

✅ **TCP = reliable** (web, email, file transfer, remote access)

✅ **UDP = fast** (DNS queries, DHCP, TFTP, time sync, monitoring)

✅ **Security upgrades:**
- Telnet → SSH
- HTTP → HTTPS
- FTP → SFTP/FTPS
- Insecure email → Secure versions with TLS

✅ **Ports appear in multiple formats:** Standard notation (Port: 80), IP:Port (192.168.1.1:443), Wireshark displays, netstat output

---

## Before Moving to Lesson 10

Make sure you can confidently:

- [ ] **Identify port numbers** for all protocols in the table above
- [ ] **Distinguish between TCP and UDP** protocols
- [ ] **Recognize secure vs insecure** protocol versions
- [ ] **Interpret port information** in packet captures and network tools
- [ ] **Explain what each protocol does** in one sentence
- [ ] **Group protocols by function** (remote access, email, file transfer, etc.)
- [ ] **Use memory tricks** to recall hard-to-remember ports

**Study Strategy:**

**Today:**
- Play the Port Memory Match game (multiple rounds until you get perfect)
- Create your own mnemonics for ports you struggle with
- Write out the port table from memory - check what you missed
- Complete the Wireshark lab to see ports in real traffic

**Tomorrow (Day 10):**
- Review flashcards (5-10 minutes)
- Test yourself: Look at the protocol name, recall the port
- Test yourself: Look at the port number, recall the protocol
- Practice identifying protocols in sample packet captures

**Day 11:**
- Continue to Lesson 10 (Network Devices)
- Keep the port flashcards active - review 5 minutes daily
- Real-world context will reinforce port usage

💡 **Pro Tip:** The Wireshark lab is where this really clicks. Seeing actual HTTP traffic on port 80, DNS queries on port 53, and HTTPS connections on port 443 makes abstract port numbers concrete and memorable!

**Don't stress about perfect memorization today.** These ports will appear throughout the rest of the course. Each time you see "port 443" in a firewall configuration or "port 22" in an SSH command, it reinforces your memory. Repetition over time beats cramming!

---

## Coming Up in Lesson 10: Network Devices

You've learned about protocols and the ports they use.

**Next, you'll explore the physical and virtual devices** that run these protocols:

- Switches, routers, and their roles
- Firewalls and how they filter ports
- Load balancers distributing traffic
- Wireless access points and controllers
- How devices work together in network architecture
- Where protocols fit in the OSI model

**The connection:**

Lesson 9 taught you the language of network services (protocols and ports). Lesson 10 will show you the hardware that speaks this language. You'll see how routers make decisions based on ports, how firewalls block or allow specific port numbers, and how switches forward traffic for different protocols.

**See you in Lesson 10!** 🚀

---

*"Port numbers are the apartment numbers of network traffic. Master them, and you can troubleshoot network problems like a detective following clues."*

---

# ✅ LESSON 9 COMPLETE!

**What You Just Learned:**
- ✅ Port numbers and their ranges (well-known, registered, dynamic)
- ✅ Essential port numbers for 20+ protocols
- ✅ TCP vs UDP usage patterns
- ✅ Security upgrades (insecure → secure protocol transitions)
- ✅ How to identify protocols from port numbers in packet captures
- ✅ Memory tricks and grouping strategies for memorization
- ✅ Real-world protocol purposes and use cases

**You're now 30% of the way to Network+ certification!** (9 of 30 lessons complete)

**Next up: The hardware that makes these protocols work!**