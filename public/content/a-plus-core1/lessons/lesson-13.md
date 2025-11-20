# Lesson 13: Common Network Protocols and Ports

**Estimated Time:** 25-30 minutes  
**Domain:** 2.0 Networking (20% of exam)  
**Exam Objectives Covered:** 2.1 - Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) ports, protocols, and their purposes

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain the purpose of port numbers in network communication
- Identify common protocol port numbers required for the A+ exam
- Distinguish between TCP and UDP protocols
- Recognize secure and insecure protocol variants
- Understand how ports and protocols work together in real-world scenarios
- Apply port number knowledge to troubleshooting network services

---

## Video Resources

- [Professor Messer - TCP and UDP Ports](https://www.youtube.com/watch?v=OU-A2EmVrKQ) (10 min)
- [PowerCert - Ports Explained](https://www.youtube.com/watch?v=g2fT-g9PX9o) (7 min)
- [NetworkChuck - Ports and Protocols You NEED to Know](https://www.youtube.com/watch?v=TGp9gxGf5vY) (15 min)
- [Sunny Classroom - TCP vs UDP](https://www.youtube.com/watch?v=uwoD5YsGACg) (8 min)

---

## Introduction

You're standing in the lobby of a massive office building with 500 companies inside. You have a package to deliver to "Sarah Martinez at TechCorp." The security guard at the front desk looks at you and asks, "Which Sarah Martinez? We have three people with that name in this building."

You check the label again. All it says is "Sarah Martinez, 123 Main Street." That's the building address—but it doesn't tell you which floor, which suite, or which company. Without more specific information, your package is stuck.

**This is what happens in networking without port numbers.** An IP address gets data to the right building (the right computer), but it doesn't specify which service should handle it. Should it go to the web server? The email server? The file transfer service? The remote desktop application?

Port numbers solve this problem. They're like suite numbers in an office building—they tell the computer exactly which application or service should receive the incoming data. When you visit a website, your browser connects to port 80 (HTTP) or port 443 (HTTPS). When you check email, your mail client connects to port 110 (POP3) or port 143 (IMAP). When you connect to a remote server via SSH, you're using port 22.

In this lesson, we're diving into the world of ports and protocols. You'll learn which port numbers are critical for the A+ exam (yes, you need to memorize some), understand the difference between TCP and UDP, and discover why some protocols are secure while others are dangerously outdated. By the end, you'll understand how data finds the right service on the right machine—and how to troubleshoot when it doesn't.

---

## What Are Port Numbers?

A **port number** is a 16-bit identifier that specifies which application or service should handle network traffic. Port numbers range from **0 to 65,535**, giving us 65,536 possible ports per device.

When data arrives at a computer, the IP address says, "This packet is for you." But which application gets it? The port number answers that question.

Think of it like this: Your home address (IP) gets mail delivered to your house, but the person's name on the envelope (port) determines who opens it. If it says "John Smith," John opens it. If it says "Jane Smith," Jane opens it. Same address, different recipient.

Here's how a connection looks in the real world:

```
Source: 192.168.1.100:52341 → Destination: 172.217.14.206:443
             ↑                                    ↑
         Your computer's                      Google's web server
         random high port                     (HTTPS port)
```

Your computer uses a random **ephemeral port** (usually above 49152) as the source, and the destination is port 443 (HTTPS). When Google's server responds, it reverses the ports—sending from 443 back to your port 52341.

### Port Number Ranges

Ports are divided into three categories:

| Range | Category | Purpose |
|-------|----------|---------|
| 0-1023 | Well-known ports | Reserved for common services (HTTP, FTP, SSH) |
| 1024-49151 | Registered ports | Assigned to specific applications by IANA |
| 49152-65535 | Dynamic/Private ports | Used by client applications as temporary source ports |

For the A+ exam, you need to memorize the **well-known ports**—the ones below 1024 that correspond to standard services. Let's cover the critical ones.

---

## Essential Port Numbers (MUST MEMORIZE)

Here are the port numbers you absolutely must know for the A+ exam. I've grouped them by function to make memorization easier.

### File Transfer

**FTP (File Transfer Protocol) - Ports 20 and 21**

FTP uses two ports. Port 21 handles the **control connection** (commands like "login," "list files," "delete"). Port 20 handles the **data connection** (the actual file being transferred).

Imagine calling a moving company. You talk to the dispatcher (port 21) to arrange the move, but the truck (port 20) shows up separately to transport your stuff. Two different channels, two different ports.

⚠️ **Security warning:** FTP sends usernames and passwords in plain text. Don't use it over the internet without encryption.

**SFTP (SSH File Transfer Protocol) - Port 22**

SFTP runs over SSH (Secure Shell) and encrypts everything—commands, data, credentials. It's the secure replacement for FTP. When you need to transfer files securely, use SFTP.

**TFTP (Trivial File Transfer Protocol) - Port 69**

TFTP is a simplified, lightweight version of FTP. It's commonly used for transferring configuration files to routers and switches, or for network booting (PXE). It uses **UDP** (not TCP), so there's no guarantee of delivery—but it's fast.

### Remote Access

**SSH (Secure Shell) - Port 22**

SSH provides secure command-line access to remote systems. When you need to manage a Linux server or configure a network device, SSH is the standard. It encrypts all traffic, including passwords.

**Telnet - Port 23**

Telnet does the same thing as SSH—gives you command-line access to remote systems. But here's the problem: **Telnet sends everything in plain text**, including passwords. It's like shouting your password across a crowded room. Never use Telnet in production environments.

🎯 **Exam Tip:** If a question asks about secure remote access, the answer is SSH (port 22). If it mentions insecure legacy remote access, it's Telnet (port 23).

**RDP (Remote Desktop Protocol) - Port 3389**

RDP is Microsoft's protocol for remote desktop access. When you use "Remote Desktop Connection" on Windows to control another computer, you're using RDP on port 3389. This gives you full graphical access—you can see the desktop, click around, run programs as if you were sitting at the machine.

### Email Protocols

**SMTP (Simple Mail Transfer Protocol) - Port 25**

SMTP is used for **sending** email. When you click "send" in your email client, SMTP delivers your message to the mail server. Mail servers also use SMTP to forward messages to each other.

Think of SMTP as the postal service—it handles outgoing mail and delivery between post offices.

Modern email typically uses **port 587** for SMTP with TLS encryption, but port 25 is still tested on the A+ exam.

**POP3 (Post Office Protocol v3) - Port 110**

POP3 is used for **receiving** email. When you check your inbox, POP3 downloads messages from the server to your device and typically deletes them from the server. It's a "retrieve and remove" model.

Imagine going to your PO Box, grabbing all your mail, and taking it home. The mailbox is now empty.

**IMAP (Internet Message Access Protocol) - Port 143**

IMAP is also for **receiving** email, but unlike POP3, it keeps messages on the server. You can access your email from multiple devices (phone, laptop, tablet), and they all stay synchronized. This is what most people use today (Gmail, Outlook, etc.).

Think of IMAP like accessing your mail online—it stays on the server, and you view it from anywhere.

🎯 **Exam Tip:** Know the difference. POP3 downloads and deletes. IMAP keeps messages on the server and syncs across devices.

### Web and Directory Services

**HTTP (Hypertext Transfer Protocol) - Port 80**

HTTP is the protocol your browser uses to retrieve web pages. When you type `http://example.com` in your browser, you're connecting to port 80. Every web page you've ever visited used HTTP (or its secure cousin, HTTPS).

**HTTPS (HTTP Secure) - Port 443**

HTTPS is HTTP with encryption via TLS/SSL. When you see the padlock icon in your browser, you're using HTTPS on port 443. All sensitive data—passwords, credit card numbers, personal information—should be transmitted over HTTPS, never plain HTTP.

Banks, shopping sites, email providers—anything that requires a login uses HTTPS. Port 443 is one of the most important ports on the internet.

**LDAP (Lightweight Directory Access Protocol) - Port 389**

LDAP is used to access directory services like Active Directory. When your computer authenticates against a domain controller, it's often using LDAP to query user information, group memberships, and organizational structure.

**LDAPS (LDAP Secure) - Port 636**

LDAPS is LDAP with SSL/TLS encryption. Just like HTTP → HTTPS, LDAP → LDAPS adds security.

### Network Services

**DNS (Domain Name System) - Port 53**

DNS translates human-readable domain names (google.com) into IP addresses (172.217.14.206). Without DNS, you'd have to memorize IP addresses for every website you visit.

DNS uses both TCP and UDP on port 53. UDP is used for standard queries (faster). TCP is used for zone transfers (larger data transfers between DNS servers).

**DHCP (Dynamic Host Configuration Protocol) - Ports 67 and 68**

DHCP automatically assigns IP addresses to devices. Port 67 is used by the **DHCP server**, and port 68 is used by the **DHCP client**. When your laptop joins a network and gets an IP, DHCP handled that on ports 67/68.

**NTP (Network Time Protocol) - Port 123**

NTP synchronizes clocks across network devices. Accurate time is critical for logging, security certificates, and troubleshooting. Devices query NTP servers to keep their clocks synchronized.

### Network Management and File Sharing

**SNMP (Simple Network Management Protocol) - Ports 161 and 162**

SNMP is used to monitor and manage network devices (routers, switches, servers). Port 161 is for **SNMP queries** (requesting information), and port 162 is for **SNMP traps** (unsolicited alerts sent by devices).

When a switch detects a problem, it sends an SNMP trap to port 162 on the monitoring server: "Hey, port 24 just went down!"

**SMB (Server Message Block) - Port 445**

SMB is Microsoft's file and printer sharing protocol. When you access a shared folder on Windows (`\\server\files`), you're using SMB on port 445. It's also used for network printer access.

**NetBIOS - Ports 137, 138, 139**

NetBIOS is a legacy protocol used for name resolution and file sharing on older Windows networks. Modern networks use SMB directly (port 445), but NetBIOS is still tested on the A+ exam:
- **Port 137**: Name resolution
- **Port 138**: Datagram service
- **Port 139**: Session service

---

## Port Number Quick Reference Table

Here's a consolidated reference for all the ports you need to memorize:

| Protocol | Port(s) | Purpose | TCP/UDP | Secure? |
|----------|---------|---------|---------|---------|
| **FTP** | 20, 21 | File transfer | TCP | ❌ No |
| **SSH/SFTP** | 22 | Secure remote access, secure file transfer | TCP | ✅ Yes |
| **Telnet** | 23 | Insecure remote access | TCP | ❌ No |
| **SMTP** | 25 | Send email | TCP | ❌ No (587 with TLS is better) |
| **DNS** | 53 | Name resolution | TCP/UDP | ❌ No (DNSSEC adds security) |
| **DHCP** | 67, 68 | Automatic IP addressing | UDP | ❌ No |
| **TFTP** | 69 | Simple file transfer | UDP | ❌ No |
| **HTTP** | 80 | Web browsing | TCP | ❌ No |
| **POP3** | 110 | Receive email (download & delete) | TCP | ❌ No |
| **NTP** | 123 | Time synchronization | UDP | ❌ No |
| **NetBIOS** | 137-139 | Legacy Windows networking | TCP/UDP | ❌ No |
| **IMAP** | 143 | Receive email (sync) | TCP | ❌ No |
| **SNMP** | 161, 162 | Network monitoring | UDP | ❌ No (v3 is better) |
| **LDAP** | 389 | Directory services | TCP | ❌ No |
| **HTTPS** | 443 | Secure web browsing | TCP | ✅ Yes |
| **SMB** | 445 | File/printer sharing | TCP | ⚠️ Can be |
| **LDAPS** | 636 | Secure directory services | TCP | ✅ Yes |
| **RDP** | 3389 | Remote desktop | TCP | ⚠️ Can be |

---

## TCP vs UDP: Two Ways to Send Data

When data travels across a network, it uses either **TCP (Transmission Control Protocol)** or **UDP (User Datagram Protocol)**. They're two fundamentally different approaches to communication.

### TCP (Transmission Control Protocol)

TCP is like sending a certified letter through the postal service. You get:
- **Guaranteed delivery** (if it fails, it's resent)
- **Order preservation** (packets arrive in the correct sequence)
- **Error checking** (corrupted data is detected and retransmitted)
- **Connection establishment** (three-way handshake before data flows)

TCP is **reliable but slower** because of all the overhead. It's used when accuracy matters more than speed.

**TCP is used for:**
- Web browsing (HTTP/HTTPS)
- Email (SMTP, POP3, IMAP)
- File transfer (FTP, SFTP)
- Remote access (SSH, Telnet, RDP)

### UDP (User Datagram Protocol)

UDP is like shouting across the room. You say something, and hopefully the other person hears it—but you don't wait for confirmation. UDP is:
- **Fast** (no handshake, no acknowledgments)
- **Connectionless** (just send and move on)
- **Unreliable** (packets can be lost, duplicated, or arrive out of order)
- **Low overhead** (minimal headers)

UDP is used when **speed matters more than perfect accuracy**.

**UDP is used for:**
- Live video/audio streaming (a few dropped frames don't matter)
- Online gaming (fast response is critical)
- DNS queries (small requests, quick responses)
- DHCP (broadcast-based, simple requests)
- TFTP (simple file transfers where reliability isn't critical)

🎯 **Exam Tip:** If a question mentions "reliable delivery" or "guaranteed delivery," the answer is TCP. If it mentions "fast, connectionless, low overhead," the answer is UDP.

---

## Secure vs Insecure Protocols

Many older protocols were designed when security wasn't a priority. Data was transmitted in **plain text**, meaning anyone with a packet sniffer could read usernames, passwords, emails, and files.

Modern networks require encryption. Here's how insecure protocols have been replaced:

| Insecure Protocol | Port | Secure Replacement | Port |
|-------------------|------|-------------------|------|
| **HTTP** | 80 | **HTTPS** | 443 |
| **FTP** | 20/21 | **SFTP** (over SSH) | 22 |
| **Telnet** | 23 | **SSH** | 22 |
| **SMTP** | 25 | **SMTP with TLS** | 587 |
| **POP3** | 110 | **POP3S** (with SSL) | 995 |
| **IMAP** | 143 | **IMAPS** (with SSL) | 993 |
| **LDAP** | 389 | **LDAPS** | 636 |

**The pattern:** Add encryption (SSL/TLS), and you get a secure version. In modern networks, you should always use the secure variant when handling sensitive data.

🎯 **Exam Tip:** Know which protocols are insecure. If a scenario mentions sending passwords over FTP, Telnet, or HTTP, recognize that as a security risk and recommend the encrypted alternative.

---

## Real-World Scenario: Troubleshooting a Blocked Service

Let's put port knowledge to work in a troubleshooting scenario.

**The Problem:**

A user calls you: "I can browse websites fine, but I can't connect to the company file server. I keep getting 'connection timed out' errors."

**Your Investigation:**

You ask the user for the error details. They're trying to access `\\fileserver\documents`, which uses SMB (port 445).

You run a quick test from your own machine. You can access `\\fileserver\documents` without issues. So the file server is up, and the network path exists.

**What's different?** The user is working from home today, connected via VPN.

You check the VPN configuration. Aha! The VPN firewall is blocking **port 445** for security reasons (SMB is often blocked on VPNs to prevent ransomware spread).

**The Solution:**

You explain to the user that SMB is blocked on the VPN for security. Instead, you set up access via a secure web portal (HTTPS on port 443) where they can access files through a browser. Problem solved.

**What you used in this scenario:**
- Knowledge that file sharing uses port 445 (SMB)
- Understanding that HTTPS (port 443) is almost always allowed
- Recognition that VPNs often block certain ports for security

Port knowledge turned a vague "it doesn't work" complaint into a quick diagnosis and solution.

---

## Key Exam Tips

🎯 **Memorize the critical ports:** The table above covers everything you need for the A+ exam. Focus on FTP (20/21), SSH (22), Telnet (23), SMTP (25), DNS (53), DHCP (67/68), HTTP (80), HTTPS (443), RDP (3389), and SMB (445).

🎯 **Know secure vs insecure:** HTTP → HTTPS. FTP → SFTP. Telnet → SSH. Always recommend the encrypted version.

🎯 **TCP vs UDP:** TCP = reliable, connection-oriented (web, email, file transfer). UDP = fast, connectionless (streaming, gaming, DNS).

🎯 **POP3 vs IMAP:** POP3 downloads and deletes. IMAP keeps mail on the server and syncs.

🎯 **Port 22 does double duty:** SSH (remote access) and SFTP (secure file transfer) both use port 22.

🎯 **Port blocking for troubleshooting:** If a service isn't working, check if its port is blocked by a firewall. Use `telnet <server> <port>` or `Test-NetConnection -ComputerName <server> -Port <port>` (PowerShell) to test connectivity.

---

## Key Takeaways

- [ ] Port numbers identify which application or service should handle network traffic
- [ ] Port numbers range from 0 to 65,535 (well-known: 0-1023, registered: 1024-49151, dynamic: 49152-65535)
- [ ] FTP uses two ports: 21 (control) and 20 (data)
- [ ] SSH (port 22) is the secure replacement for Telnet (port 23)
- [ ] SMTP (port 25) sends email; POP3 (port 110) and IMAP (port 143) receive email
- [ ] POP3 downloads and deletes; IMAP keeps messages on the server
- [ ] HTTP (port 80) is insecure; HTTPS (port 443) is encrypted and secure
- [ ] RDP (port 3389) provides remote desktop access on Windows
- [ ] DNS (port 53) translates domain names to IP addresses
- [ ] DHCP uses ports 67 (server) and 68 (client) for automatic IP addressing
- [ ] SMB (port 445) handles Windows file and printer sharing
- [ ] TCP is reliable and connection-oriented; UDP is fast and connectionless
- [ ] Secure protocols use encryption (SSH, HTTPS, SFTP, LDAPS, IMAPS, POP3S)
- [ ] Port blocking by firewalls is a common cause of service connectivity issues

---

## Check Your Understanding

**1. A user can't access a website, but other websites work fine. You run `telnet webserver.company.com 80` and get "connection refused." What does this tell you?**

<details>
<summary>Show Answer</summary>
<strong>Port 80 (HTTP) is blocked or the web server isn't running on that server.</strong> The telnet command tests connectivity to a specific port. "Connection refused" means the server received the request but rejected it—either the service isn't running or a firewall on the server is blocking port 80. If it were a network-level firewall, you'd likely see "connection timed out" instead. Check if the web server service is running and if a local firewall is blocking HTTP traffic. Also consider whether the site uses HTTPS (port 443) instead.
</details>

**2. Which protocol should be used for secure remote command-line access to a Linux server?**
A) Telnet (port 23)  
B) RDP (port 3389)  
C) SSH (port 22)  
D) FTP (port 21)

<details>
<summary>Show Answer</summary>
<strong>C) SSH (port 22)</strong> is the correct answer. SSH provides encrypted command-line access to remote systems and is the standard for secure administration of Linux servers. Telnet (Option A) provides command-line access but sends everything in plain text, including passwords—never use it for remote administration. RDP (Option B) is Microsoft's remote desktop protocol and provides graphical access to Windows systems, not command-line access to Linux. FTP (Option D) is for file transfer, not remote access. SSH is the only secure option for this scenario.
</details>

**3. What is the difference between POP3 and IMAP?**

<details>
<summary>Show Answer</summary>
<strong>POP3 downloads email from the server and typically deletes it; IMAP keeps messages on the server and synchronizes across devices.</strong> With POP3 (port 110), when you check email on your laptop, messages are downloaded locally and removed from the server. If you then check email on your phone, those messages won't be there. IMAP (port 143) leaves messages on the server, so you can access your full inbox from any device—laptop, phone, tablet—and they stay synchronized. Changes on one device (read, deleted, moved to folder) appear on all devices. IMAP is the modern standard for email access.
</details>

**4. A firewall administrator wants to block unencrypted web traffic but allow encrypted web traffic. Which ports should be blocked and allowed?**

<details>
<summary>Show Answer</summary>
<strong>Block port 80 (HTTP) and allow port 443 (HTTPS).</strong> HTTP uses port 80 and sends data in plain text, which is a security risk. HTTPS uses port 443 and encrypts all traffic using TLS/SSL. By blocking 80 and allowing 443, users can still access websites, but they're forced to use the secure version. Many modern websites automatically redirect HTTP to HTTPS anyway, but blocking port 80 ensures that unencrypted web traffic cannot be transmitted. This is common in corporate environments where data security is critical.
</details>

**5. You're troubleshooting DHCP issues. Which ports does DHCP use?**

<details>
<summary>Show Answer</summary>
<strong>DHCP uses port 67 (server) and port 68 (client).</strong> When a client needs an IP address, it sends a broadcast on port 67 to reach any DHCP servers on the network. The DHCP server responds to the client on port 68. Both ports use UDP (not TCP) because DHCP uses broadcast communication and doesn't require the reliability overhead of TCP. If you're troubleshooting DHCP problems and suspect firewall issues, make sure UDP ports 67 and 68 aren't blocked between the client and server.
</details>

**6. An administrator wants to transfer files securely between two servers. Which protocol should they use?**
A) FTP (ports 20/21)  
B) TFTP (port 69)  
C) SFTP (port 22)  
D) Telnet (port 23)

<details>
<summary>Show Answer</summary>
<strong>C) SFTP (port 22)</strong> is the secure choice. SFTP runs over SSH and encrypts all data—filenames, file contents, and credentials. FTP (Option A) sends everything in plain text, including usernames and passwords, making it vulnerable to packet sniffing. TFTP (Option B) is a simplified protocol that's even less secure than FTP and typically used for transferring configuration files to network devices in trusted environments. Telnet (Option D) is for remote command-line access, not file transfer. Always use SFTP when security matters.
</details>

**7. What is the primary difference between TCP and UDP?**

<details>
<summary>Show Answer</summary>
<strong>TCP is reliable and connection-oriented; UDP is fast and connectionless.</strong> TCP establishes a connection before transmitting data, guarantees delivery through acknowledgments, ensures packets arrive in order, and retransmits lost data. This reliability comes with overhead (slower). UDP just sends data without establishing a connection, doesn't wait for acknowledgments, and doesn't guarantee delivery or order. UDP is faster but unreliable. Use TCP when accuracy is critical (file transfers, email, web pages). Use UDP when speed matters and occasional packet loss is acceptable (video streaming, gaming, DNS queries).
</details>

**8. A user reports they can access the internet but cannot access a network shared drive at `\\fileserver\data`. Which port might be blocked?**

<details>
<summary>Show Answer</summary>
<strong>Port 445 (SMB) is likely blocked.</strong> Windows file sharing uses SMB (Server Message Block) on port 445. If the user can access the internet (which uses various ports like 80 and 443), network connectivity is working—but something is preventing SMB traffic specifically. This could be a firewall rule blocking port 445, the SMB service not running on the file server, or antivirus software interfering. Check Windows Firewall settings, verify the Server service is running on the file server, and test connectivity with `Test-NetConnection -ComputerName fileserver -Port 445` in PowerShell.
</details>

**9. Which protocol uses both TCP and UDP on the same port number?**

<details>
<summary>Show Answer</summary>
<strong>DNS uses both TCP and UDP on port 53.</strong> DNS primarily uses UDP for standard queries because they're small (one question, one answer) and speed matters. UDP's low overhead makes DNS fast. However, DNS also uses TCP for zone transfers between DNS servers—these involve large amounts of data that need reliability. TCP's guaranteed delivery ensures all DNS records transfer correctly. So DNS servers listen on both UDP/53 (queries) and TCP/53 (zone transfers). This is unique—most protocols stick to either TCP or UDP, but DNS uses both.
</details>

**10. An email administrator wants to secure email transmission. Which ports should be used instead of the standard insecure ports?**

<details>
<summary>Show Answer</summary>
<strong>Use port 587 (SMTP with TLS), port 993 (IMAPS), and port 995 (POP3S).</strong> Standard SMTP (port 25), IMAP (port 143), and POP3 (port 110) transmit data in plain text. Secure alternatives add SSL/TLS encryption: SMTP with STARTTLS typically uses port 587 (though some use 465), IMAP with SSL (IMAPS) uses port 993, and POP3 with SSL (POP3S) uses port 995. Modern mail clients default to these secure ports. Email contains sensitive information—configure servers and clients to use encrypted connections. Never send authentication credentials over unencrypted protocols.
</details>

---

## Before Moving to Lesson 14

Make sure you can:

- [ ] Recall port numbers for FTP, SSH, Telnet, SMTP, DNS, DHCP, HTTP, HTTPS, RDP, and SMB without looking them up
- [ ] Identify secure and insecure protocol variants (HTTP vs HTTPS, FTP vs SFTP, Telnet vs SSH)
- [ ] Explain the difference between TCP and UDP
- [ ] Distinguish between POP3 and IMAP email protocols
- [ ] Recognize when port blocking might be causing connectivity issues

**Study strategy:** Create flashcards for each port number. Quiz yourself daily. When you see "HTTP," immediately think "port 80." When you see "SSH," think "port 22." This must become automatic. Practice with real tools—run `netstat -an` on your computer to see active connections and their port numbers. Open Command Prompt and test port connectivity with `telnet <server> <port>` or PowerShell's `Test-NetConnection`.

---

## Coming Up in Lesson 14

Next, we're diving into **SOHO Router Configuration**. You've learned how networks communicate—now you'll learn how to actually set up and configure a small office/home office router. You'll explore DHCP settings, port forwarding, wireless security, NAT, QoS, and more.

This is where theory meets practice. You'll learn the exact steps to configure a router from scratch, secure a wireless network, and troubleshoot common router issues. This is hands-on, practical knowledge you'll use immediately.

See you in Lesson 14!

---

*"There are two ways to write error-free programs; only the third one works."* — Alan Perlis

---

# ✅ LESSON 13 COMPLETE!

**Progress:** 13 of 60 lessons complete (21.7%) 🎯

You've now mastered port numbers and protocols—critical knowledge for network troubleshooting and the A+ exam. You can identify which services use which ports, distinguish between secure and insecure protocols, and understand TCP vs UDP. When something doesn't connect, you'll know exactly which port to investigate. Great work!
