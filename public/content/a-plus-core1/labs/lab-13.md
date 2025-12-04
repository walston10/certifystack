# Lab 13: Common Network Protocols and Ports

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 2.1 - Compare and contrast TCP and UDP ports, protocols, and their purposes

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between TCP and UDP, and when would you use each?**

2. **Why are port numbers below 1024 called "well-known ports" and what makes them special?**

3. **If a firewall is blocking port 443, what type of traffic would be affected?**

4. **Explain why HTTPS (port 443) replaced HTTP (port 80) as the default for web browsing.**

5. **A user can receive emails but cannot send them. Which port(s) should you check, and why?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses memorization techniques and your network** - Master the essential ports for the A+ exam.

---

#### Activity A: The Essential Ports (Must Memorize!)

**Goal:** Memorize the ports that appear most frequently on the A+ exam.

**Complete this table from memory, then check your answers:**

| Protocol | Port(s) | TCP/UDP | Purpose |
|----------|---------|---------|---------|
| FTP | | | |
| SSH | | | |
| Telnet | | | |
| SMTP | | | |
| DNS | | | |
| DHCP | | | |
| TFTP | | | |
| HTTP | | | |
| POP3 | | | |
| IMAP | | | |
| HTTPS | | | |
| SMB | | | |
| RDP | | | |
| LDAP | | | |
| LDAPS | | | |
| SNMP | | | |

**Self-check:** Cover the table above and write the ports again:

```
FTP: _____, _____     SSH: _____      Telnet: _____
SMTP: _____           DNS: _____      DHCP: _____, _____
HTTP: _____           HTTPS: _____    
POP3: _____           IMAP: _____
RDP: _____            SMB: _____
LDAP: _____           LDAPS: _____
SNMP: _____, _____
```

---

#### Activity B: Port Categories

**Goal:** Understand the three port ranges.

**Port ranges:**

| Range | Name | Use |
|-------|------|-----|
| 0-1023 | | |
| 1024-49151 | | |
| 49152-65535 | | |

**Categorize these ports:**

| Port | Range Category | Protocol |
|------|----------------|----------|
| 22 | | |
| 3389 | | |
| 80 | | |
| 8080 | | |
| 443 | | |
| 50000 | | |

**Why does this matter?**

1. Which range requires root/admin privileges to bind to? _______

2. Which range is used for client-side connections? _______

3. If you see traffic on port 8080, what might it be? _______

---

#### Activity C: Protocol Deep Dive - Email

**Goal:** Master email-related ports.

**Email protocol summary:**

| Protocol | Purpose | Standard Port | Secure Port |
|----------|---------|---------------|-------------|
| SMTP | | | |
| POP3 | | | |
| IMAP | | | |

**Scenario questions:**

1. **User's phone can receive email but not send.** Which protocol/port to check?

   Protocol: _______ Port: _______

2. **Email syncs on phone but not downloading to desktop Outlook (configured for POP3).** Which port?

   Port: _______ (or secure: _______)

3. **Corporate email requires secure connections only.** Which three ports should be open?

   Sending: _______ Receiving (IMAP): _______ Receiving (POP3): _______

4. **Why is port 25 often blocked by ISPs?**

   _________________________________________________________________

---

#### Activity D: Protocol Deep Dive - Web and File Transfer

**Goal:** Master web and file transfer ports.

**Web protocols:**

| Protocol | Port | Purpose | Secure? |
|----------|------|---------|---------|
| HTTP | | | |
| HTTPS | | | |

**File transfer protocols:**

| Protocol | Port(s) | Purpose | Secure? |
|----------|---------|---------|---------|
| FTP | | | |
| SFTP | | | |
| FTPS | | | |
| TFTP | | | |
| SMB | | | |

**Questions:**

1. **FTP uses two ports. What are they and why?**

   Ports: _______ and _______
   
   Port 21: _______________________
   Port 20: _______________________

2. **What's the difference between SFTP and FTPS?**

   SFTP: _________________________________________________________________
   
   FTPS: _________________________________________________________________

3. **When would you use TFTP instead of FTP?**

   _________________________________________________________________

4. **What port does Windows file sharing (SMB) use?**

   Port: _______

---

#### Activity E: Protocol Deep Dive - Remote Access

**Goal:** Master remote access protocols.

**Remote access protocols:**

| Protocol | Port | TCP/UDP | Use Case |
|----------|------|---------|----------|
| SSH | | | |
| Telnet | | | |
| RDP | | | |
| VNC | | | |

**Questions:**

1. **Why should Telnet never be used over the internet?**

   _________________________________________________________________

2. **SSH replaced Telnet. What additional capability does SSH provide?**

   _________________________________________________________________

3. **What operating system uses RDP natively?**

   _________________________________________________________________

4. **If you need to remotely manage a Linux server, which protocol would you use?**

   Protocol: _______ Port: _______

5. **If you need to remotely access a Windows desktop, which protocol would you use?**

   Protocol: _______ Port: _______

---

#### Activity F: Protocol Deep Dive - Network Services

**Goal:** Master network service ports.

**DNS and DHCP:**

| Protocol | Port(s) | TCP/UDP | Purpose |
|----------|---------|---------|---------|
| DNS | | | |
| DHCP | | | |

**Directory and Management:**

| Protocol | Port | Purpose |
|----------|------|---------|
| LDAP | | |
| LDAPS | | |
| SNMP | | |
| NTP | | |
| Syslog | | |

**Questions:**

1. **DNS uses both TCP and UDP. When is each used?**

   UDP: _________________________________________________________________
   
   TCP: _________________________________________________________________

2. **DHCP uses two ports. Which is for the server and which for the client?**

   Server: _______ Client: _______

3. **What's the difference between LDAP and LDAPS?**

   _________________________________________________________________

4. **What are the two SNMP ports, and what's each used for?**

   Port 161: _______________________
   Port 162: _______________________

---

#### Activity G: TCP vs UDP Analysis

**Goal:** Understand when each transport protocol is used.

**Classify each protocol as TCP, UDP, or Both:**

| Protocol | TCP, UDP, or Both? | Why? |
|----------|-------------------|------|
| HTTP/HTTPS | | |
| FTP | | |
| SSH | | |
| DNS | | |
| DHCP | | |
| TFTP | | |
| SNMP | | |
| RDP | | |
| NTP | | |
| VoIP (SIP) | | |

**TCP characteristics:**

List 3 reasons to use TCP:
1. _______________________
2. _______________________
3. _______________________

**UDP characteristics:**

List 3 reasons to use UDP:
1. _______________________
2. _______________________
3. _______________________

**Quick rule:** 

- Need reliability/guaranteed delivery? → _______
- Need speed/low latency? → _______
- Streaming/real-time? → _______
- File transfer/web pages? → _______

---

#### Activity H: View Active Connections

**Goal:** See protocols and ports in action on your system.

**Windows:**
```
netstat -an
netstat -ano
```

**Mac/Linux:**
```
netstat -an
# or
ss -tuln
```

**Document active connections:**

| Local Address:Port | Foreign Address:Port | State | What Is It? |
|-------------------|---------------------|-------|-------------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

**Find these specific connections (if present):**

| Looking For | Found? | Local Port | Remote Port |
|-------------|--------|------------|-------------|
| HTTPS (443) | [ ] Yes [ ] No | | |
| DNS (53) | [ ] Yes [ ] No | | |
| DHCP (67/68) | [ ] Yes [ ] No | | |
| SSH (22) | [ ] Yes [ ] No | | |
| RDP (3389) | [ ] Yes [ ] No | | |

**Listening ports:**

Run: `netstat -an | find "LISTENING"` (Windows) or `netstat -an | grep LISTEN` (Mac/Linux)

What ports is your computer listening on?

| Port | Probable Service |
|------|------------------|
| | |
| | |
| | |
| | |

---

#### Activity I: Port Testing with Telnet/PowerShell

**Goal:** Test if specific ports are open on remote systems.

**Windows PowerShell:**
```powershell
Test-NetConnection google.com -Port 443
Test-NetConnection google.com -Port 80
Test-NetConnection smtp.gmail.com -Port 587
```

**Mac/Linux:**
```bash
nc -zv google.com 443
nc -zv google.com 80
nc -zv smtp.gmail.com 587
```

**Test these connections:**

| Host | Port | Expected Service | Open? |
|------|------|------------------|-------|
| google.com | 443 | HTTPS | [ ] Yes [ ] No |
| google.com | 80 | HTTP | [ ] Yes [ ] No |
| google.com | 22 | SSH | [ ] Yes [ ] No |
| smtp.gmail.com | 587 | SMTP | [ ] Yes [ ] No |
| imap.gmail.com | 993 | IMAPS | [ ] Yes [ ] No |

**What happened when you tested port 22 on google.com?**

_________________________________________________________________

**Why would a company close port 22 to the public?**

_________________________________________________________________

---

#### Activity J: Secure vs Insecure Protocols

**Goal:** Know the secure alternatives for legacy protocols.

**Match insecure to secure:**

| Insecure | Port | Secure Alternative | Port |
|----------|------|--------------------|------|
| HTTP | 80 | | |
| FTP | 21 | | |
| Telnet | 23 | | |
| LDAP | 389 | | |
| IMAP | 143 | | |
| POP3 | 110 | | |
| SMTP | 25 | | |
| SNMP v1/v2 | 161 | | |

**Security upgrade checklist:**

For each protocol, explain why the secure version is better:

| Protocol Pair | Why Secure Version Is Better |
|---------------|------------------------------|
| HTTP → HTTPS | |
| Telnet → SSH | |
| FTP → SFTP | |
| LDAP → LDAPS | |

---

#### Activity K: Firewall Rule Analysis

**Goal:** Understand how ports relate to firewall rules.

**Scenario: A web server needs these services accessible:**
- Public website (HTTP/HTTPS)
- Admin SSH access (internal only)
- Database (internal only, port 3306)

**What ports should be open to the internet?**

| Port | Protocol | Direction | Allow From |
|------|----------|-----------|------------|
| | | | |
| | | | |

**What ports should only be open internally?**

| Port | Protocol | Direction | Allow From |
|------|----------|-----------|------------|
| | | | |
| | | | |

**Scenario: A user complains they can't access a website.**

Troubleshooting questions:
1. What port is likely blocked? _______
2. How would you test this? _______________________
3. What command shows if your firewall is blocking it? _______________________

---

#### Activity L: Port Memorization Techniques

**Goal:** Use memory tricks to retain ports permanently.

**Group by number patterns:**

**20s:**
- 20/21: _______
- 22: _______
- 23: _______
- 25: _______

**50s and 60s:**
- 53: _______
- 67/68: _______
- 69: _______

**100s:**
- 80: _______
- 110: _______
- 143: _______

**400s:**
- 443: _______
- 445: _______

**3000s:**
- 3389: _______

**Create your own memory tricks:**

| Port | Your Memory Trick |
|------|-------------------|
| 22 (SSH) | Example: "22 is secure shell - 2 S's in SSH" |
| 23 (Telnet) | |
| 25 (SMTP) | |
| 53 (DNS) | |
| 80 (HTTP) | |
| 443 (HTTPS) | |
| 3389 (RDP) | |

**Speed drill - write as fast as you can:**

Set a timer for 60 seconds. Write as many port numbers as you can with their protocols:

```
_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________
```

How many did you get? _______

---

#### Activity M: Protocol Identification Challenge

**Goal:** Identify protocols from real-world scenarios.

**What protocol/port is being used?**

| Scenario | Protocol | Port |
|----------|----------|------|
| Loading a website with a padlock icon | | |
| Sending an email from your phone | | |
| Connecting to office Windows desktop from home | | |
| Downloading a file from an FTP server | | |
| Your computer getting an IP address automatically | | |
| Typing a website name and having it resolve to an IP | | |
| Accessing shared folders on a Windows server | | |
| Managing a Cisco router via command line securely | | |
| Checking if a server is synced to the correct time | | |
| Receiving email on your phone (messages stay on server) | | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A company's website works on HTTP but not HTTPS. Internal users can access it either way. What firewall port is likely blocked, and where?**

2. **An employee at home can use Remote Desktop to connect to their office PC. At a hotel, it doesn't work. What's the most likely cause?**

3. **A network admin needs to allow email traffic through the firewall. List all the ports they might need to open, depending on the email configuration.**

4. **A VoIP phone system has poor call quality with choppy audio. Would switching from UDP to TCP help? Why or why not?**

---

## What You Learned Today

- ✅ Memorized essential ports for the A+ exam
- ✅ Understood port ranges (well-known, registered, dynamic)
- ✅ Mastered email protocol ports
- ✅ Learned web and file transfer ports
- ✅ Understood remote access protocol ports
- ✅ Explored network service ports
- ✅ Differentiated TCP vs UDP usage
- ✅ Viewed active connections on your system
- ✅ Tested port connectivity
- ✅ Matched secure and insecure protocols
- ✅ Analyzed firewall rules
- ✅ Created memory tricks for port retention

**Next Lab:** SOHO Router Configuration - setting up a small office/home office network.

---

## Quick Reference Card (Print This!)

```
╔═══════════════════════════════════════════════════════╗
║           ESSENTIAL PORTS FOR A+ EXAM                 ║
╠═══════════════════════════════════════════════════════╣
║  FTP        20/21 (data/control)    TCP               ║
║  SSH        22                       TCP               ║
║  Telnet     23                       TCP               ║
║  SMTP       25 (or 587)              TCP               ║
║  DNS        53                       TCP/UDP           ║
║  DHCP       67/68 (server/client)    UDP               ║
║  TFTP       69                       UDP               ║
║  HTTP       80                       TCP               ║
║  POP3       110 (995 secure)         TCP               ║
║  NTP        123                      UDP               ║
║  IMAP       143 (993 secure)         TCP               ║
║  SNMP       161/162 (queries/traps)  UDP               ║
║  LDAP       389 (636 secure)         TCP               ║
║  HTTPS      443                      TCP               ║
║  SMB        445                      TCP               ║
║  Syslog     514                      UDP               ║
║  RDP        3389                     TCP/UDP           ║
╚═══════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 13: Common Network Protocols and Ports*