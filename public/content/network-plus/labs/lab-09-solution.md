# Lesson 9 Lab - Answer Key

**Port Numbers and Common Protocols**

---

## Section 1: Concept Check

1. **b) Port 443**
   - HTTPS = HTTP Secure
   - Uses TLS/SSL encryption
   - Most important port to memorize!

2. **a) 0-1023**
   - Well-known ports (system/privileged)
   - Registered: 1024-49151
   - Dynamic/private: 49152-65535

3. **c) SSH**
   - Secure Shell (encrypted)
   - Replacement for Telnet (insecure)
   - Remote command-line access

4. **b) HTTPS**
   - HTTP over TLS/SSL
   - Port 443 vs HTTP's port 80
   - Encrypts all traffic

5. **c) Both TCP and UDP**
   - UDP for queries (fast, port 53)
   - TCP for zone transfers (reliable, port 53)
   - Most common: UDP

---

## Section 2: Hands-On Activity

### Activity A: Active Connections

**Typical output:**
```
Proto  Local Address          Foreign Address        State
TCP    192.168.1.105:53891   142.250.185.46:443    ESTABLISHED
TCP    192.168.1.105:50234   172.217.164.110:80    TIME_WAIT
TCP    192.168.1.105:49234   20.189.173.7:443      ESTABLISHED
TCP    0.0.0.0:135           0.0.0.0:0              LISTENING
TCP    0.0.0.0:445           0.0.0.0:0              LISTENING
UDP    0.0.0.0:53            *:*
UDP    0.0.0.0:5353          *:*
```

**What students should find:**

**Port 443 connections:**
- Google, Microsoft, Apple, Amazon sites
- Most modern websites use HTTPS
- Multiple connections normal (parallel loading)

**Port 80 connections:**
- Rare nowadays (most sites use HTTPS)
- Some insecure sites
- Redirects to HTTPS

**LISTENING ports (common):**
- 135 (RPC)
- 445 (SMB/File Sharing)
- 5357 (WSD)
- 7680 (Windows Update)

**Connection count:**
- ESTABLISHED: 10-50 typical (with browser open)
- LISTENING: 10-30 typical (OS services)

---

**What this teaches:**
- Your computer is constantly using ports
- Browsers open many connections (parallel downloads)
- High ports (50000+) are YOUR computer's source ports
- Low ports (80, 443) are SERVER destination ports

---

### Activity B: Testing Ports with Telnet

**Test 1: google.com port 443**
```
C:\>telnet google.com 443
(blank screen - connected!)
```

**Success!** Port is open and accepting connections.

**To exit:** Ctrl+] then type "quit"

---

**Test 2: example.com port 80**
```
C:\>telnet example.com 80
(connected)
```

**Success!** HTTP port is open.

---

**Test 3: Router SSH (port 22)**
```
C:\>telnet 192.168.1.1 22

Could not open connection to the host, on port 22: Connect failed
```

**Expected:** Most home routers have SSH disabled by default (security).

**If it DOES connect:**
- You'll see "SSH-2.0-OpenSSH..." or similar
- Your router has SSH enabled
- This is advanced configuration

---

**Test 4: Random closed port**
```
C:\>telnet google.com 12345

Could not open connection to the host, on port 12345: Connect failed
```

**This proves:**
- Firewalls block unused ports
- Only standard ports (80, 443, etc.) are open
- Security through port filtering

---

**Telnet as a port tester:**
- NOT using Telnet protocol
- Just testing "is port open?"
- Works for any TCP port
- Doesn't work for UDP ports

---

### Activity C: Real Traffic Analysis

**When visiting http://example.com:**
```
TCP    192.168.1.105:58392    93.184.216.34:80    ESTABLISHED
         ^your computer         ^example.com
         ^random high port      ^HTTP port
```

**When visiting https://google.com:**
```
TCP    192.168.1.105:58401    142.250.185.46:443    ESTABLISHED
                                                ^HTTPS port
```

**Key observations:**
- **Your computer:** Uses random high ports (ephemeral ports)
- **Server:** Uses well-known low ports (80, 443)
- **Port 80:** HTTP (insecure)
- **Port 443:** HTTPS (secure)

**Why random high ports?**
- Client ports don't need to be fixed
- Allows multiple connections to same server
- OS assigns from dynamic range (49152-65535)

---

### Activity D: Port Memorization

| Protocol | Port(s) | What's it for? |
|----------|---------|----------------|
| FTP (data) | **20** | File transfer (data channel) |
| FTP (control) | **21** | File transfer (control channel) |
| SSH | **22** | Secure remote access |
| Telnet | **23** | Insecure remote access |
| SMTP | **25** | Sending email |
| DNS | **53** | Name resolution |
| DHCP (server) | **67** | IP address assignment (server) |
| DHCP (client) | **68** | IP address assignment (client) |
| TFTP | **69** | Trivial file transfer |
| HTTP | **80** | Web browsing (insecure) |
| POP3 | **110** | Receiving email (downloads) |
| NTP | **123** | Time synchronization |
| IMAP | **143** | Receiving email (syncs) |
| SNMP | **161, 162** | Network management |
| HTTPS | **443** | Web browsing (secure) |
| SMB | **445** | File sharing (Windows) |
| LDAP | **389** | Directory services |
| LDAPS | **636** | Secure directory services |
| RDP | **3389** | Remote desktop |
| SIP | **5060, 5061** | VoIP signaling |

**Memorization tips:**
- **20s:** FTP(20/21), SSH(22), Telnet(23), SMTP(25)
- **53:** DNS (think "5-3" fingers counting)
- **67/68:** DHCP (sequential)
- **80:** HTTP (8 letters = port 80... not really, just memorize!)
- **443:** HTTPS (4-4-3 pattern)
- **3389:** RDP (think "Windows Remote = 3389")

---

### Activity E: Secure vs Insecure

**HTTP (port 80) - neverssl.com:**
- No padlock icon
- URL shows "http://"
- Browser may warn "Not Secure"
- Data sent in PLAIN TEXT
- Anyone can read: passwords, credit cards, etc.

**HTTPS (port 443) - google.com:**
- Padlock icon ✅
- URL shows "https://"
- "Connection is secure"
- Data ENCRYPTED with TLS/SSL
- Safe for sensitive information

**In browser dev tools:**
- HTTP shows "http" protocol
- HTTPS shows "https" and certificate info
- Port visible in connection details

---

**Secure vs Insecure Protocols:**

| Insecure | Port | Secure Alternative | Port |
|----------|------|-------------------|------|
| HTTP | 80 | HTTPS | 443 |
| FTP | 21 | SFTP | 22 (over SSH) |
| FTP | 21 | FTPS | 989/990 |
| Telnet | 23 | SSH | 22 |
| SMTP | 25 | SMTP/TLS | 587 |
| LDAP | 389 | LDAPS | 636 |
| IMAP | 143 | IMAPS | 993 |
| POP3 | 110 | POP3S | 995 |

**Rule of thumb:**
- If you can encrypt it, you should!
- Legacy insecure protocols still exist
- Modern networks should use secure versions

---

### Activity F: Services by Port

| Port | Service | Secure or Insecure? |
|------|---------|---------------------|
| 21 | **FTP** | **Insecure** (passwords in clear text) |
| 22 | **SSH** | **Secure** (encrypted) |
| 23 | **Telnet** | **Insecure** (everything clear text) |
| 25 | **SMTP** | **Insecure** (can be secured with TLS) |
| 80 | **HTTP** | **Insecure** (plain text) |
| 110 | **POP3** | **Insecure** (can use SSL/TLS) |
| 143 | **IMAP** | **Insecure** (can use SSL/TLS) |
| 443 | **HTTPS** | **Secure** (TLS/SSL encrypted) |
| 3389 | **RDP** | **Secure** (encrypted by default) |

---

### Activity G: LISTENING Ports

**Common LISTENING ports on Windows:**
```
TCP    0.0.0.0:135      LISTENING    (RPC - Remote Procedure Call)
TCP    0.0.0.0:445      LISTENING    (SMB - File/Printer Sharing)
TCP    0.0.0.0:5040     LISTENING    (Various Windows services)
TCP    0.0.0.0:5357     LISTENING    (WSD - Web Services Discovery)
TCP    0.0.0.0:7680     LISTENING    (Windows Update Delivery Optimization)
```

**Common LISTENING ports on Mac:**
```
TCP    *.22             LISTENING    (SSH server, if enabled)
TCP    *.88             LISTENING    (Kerberos)
TCP    *.548            LISTENING    (AFP - Apple File Protocol)
TCP    *.5900           LISTENING    (VNC - Screen Sharing)
```

**What LISTENING means:**
- Service is waiting for incoming connections
- Like leaving your door unlocked (but usually filtered by firewall)
- Part of normal OS operation
- Each LISTENING port = potential attack surface

**Security considerations:**
- Close unused services
- Firewall should block most from internet
- Internal network may allow some (file sharing)

---

### Activity H: TCP vs UDP Examples

**UDP ports commonly seen:**
```
UDP    0.0.0.0:53       (DNS)
UDP    0.0.0.0:123      (NTP)
UDP    0.0.0.0:137      (NetBIOS Name Service)
UDP    0.0.0.0:138      (NetBIOS Datagram)
UDP    0.0.0.0:5353     (mDNS - Multicast DNS / Bonjour)
```

**Why these use UDP:**

**DNS (53):**
- Fast queries
- Small packets
- If lost, just resend (rare)
- Speed > reliability for lookups

**NTP (123):**
- Time sync packets tiny
- Occasional loss OK
- Retries automatic

**NetBIOS (137-139):**
- Network discovery
- Broadcasts
- Loss acceptable

**mDNS (5353):**
- Local network discovery (printers, etc.)
- Multicast = UDP
- Best effort delivery

---

**TCP vs UDP comparison:**

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Yes (three-way handshake) | No (connectionless) |
| Reliability | Guaranteed delivery | Best effort |
| Ordering | Packets arrive in order | May arrive out of order |
| Error checking | Yes, with retransmission | Minimal |
| Speed | Slower (overhead) | Faster |
| Use cases | Web, email, file transfer | Streaming, gaming, DNS |

---

### Activity I: Port Blocking Test

**Testing blocked ports:**

**Port 25 (SMTP):**
```
C:\>telnet google.com 25
Could not open connection...
```
**Likely blocked by ISP** (prevents spam)

**Port 21 (FTP):**
```
C:\>telnet google.com 21
Connected
220 Google FTP Server
```
**Might work!** Google has FTP services

**Port 23 (Telnet):**
```
C:\>telnet google.com 23
Could not open connection...
```
**Blocked** - Telnet is insecure, rarely used

---

**Why ISPs block ports:**
- **Port 25:** Prevents spam (residential should use 587)
- **Port 80/443 inbound:** Blocks home servers (business service)
- **Port 135-139:** Blocks Windows file sharing (security)

**Why some ports are always open:**
- **80:** HTTP needs to work for web browsing
- **443:** HTTPS essential for modern web
- **53:** DNS must work or nothing works

---

### Activity J: Port Reference Card

**COMPLETE MEMORIZATION LIST FOR EXAM:**

**FTP & Remote Access (20s):**
- 20 - FTP Data
- 21 - FTP Control
- 22 - SSH (secure)
- 23 - Telnet (insecure)

**Email (20s-100s):**
- 25 - SMTP (sending)
- 110 - POP3 (receiving, download)
- 143 - IMAP (receiving, sync)

**Core Services (50s-60s):**
- 53 - DNS
- 67 - DHCP Server
- 68 - DHCP Client
- 69 - TFTP

**Web (80s):**
- 80 - HTTP (insecure)

**Time & Management (100s):**
- 123 - NTP
- 161 - SNMP (get/set)
- 162 - SNMP (traps)

**Directory & Secure Web (300s-400s):**
- 389 - LDAP
- 443 - HTTPS (secure)
- 445 - SMB (Windows file sharing)

**Secure Directory (600s):**
- 636 - LDAPS

**Remote Desktop & VoIP (high numbers):**
- 3389 - RDP (Remote Desktop)
- 5060 - SIP (VoIP signaling)
- 5061 - SIP over TLS

**Memory tricks:**
- Sequential: 20,21 (FTP), 22,23 (SSH/Telnet), 67,68 (DHCP)
- Doubles: 53 (DNS), 80 (HTTP), 110 (POP3)
- "Four-four-three" = 443 (HTTPS)
- "Three-three-eight-nine" = 3389 (RDP)

---

## Section 3: Reflection

**1. Tons of traffic on port 3389:**

**What is it?** RDP (Remote Desktop Protocol)

**Normal or suspicious?**
- **Normal:** In office where IT uses RDP for support
- **Suspicious:** On home computer with no IT support
- **Very suspicious:** External IP addresses connecting

**Investigate:**
- Check who's connecting: `netstat -ano | findstr 3389`
- Is it your corporate VPN? Normal
- Random external IPs? Possible breach!
- Check Windows Event Viewer for RDP logins

---

**2. Port 80 vs 443 - Which should websites use?**

**Answer: Port 443 (HTTPS) ONLY**

**Why HTTPS matters:**
- Encrypts passwords (can't be stolen in transit)
- Protects credit cards and personal data
- Prevents man-in-the-middle attacks
- SEO boost (Google ranks HTTPS higher)
- Required for modern web features (geolocation, camera access)

**What happens with passwords on HTTP:**
- Sent in PLAIN TEXT
- Anyone on your network can read them
- Coffee shop WiFi? Your password is visible!
- Router admin? Sees your password!

**Should HTTP exist anymore?**
- **No!** HTTP should redirect to HTTPS
- Let's Encrypt made SSL certificates FREE
- No excuse for HTTP in 2024
- Browsers now warn "Not Secure" for HTTP

---

**3. Firewall blocks all except 80 and 443:**

**Can you browse the web?** YES ✅
- HTTP (80) and HTTPS (443) are all you need
- 99% of websites work

**Can you SSH to a server?** NO ❌
- SSH uses port 22
- Blocked by firewall

**Can you send email?** MAYBE
- **Webmail (Gmail, Outlook):** YES (uses 443)
- **Email client (Outlook, Thunderbird):** NO (needs 25, 587, 993, 995)

**Is this good security?**
- **Pros:** Reduces attack surface dramatically
- **Pros:** Still allows web browsing (main use)
- **Cons:** Blocks legitimate services (SSH, email clients, VPN)
- **Verdict:** Good for high-security but restrictive

---

**4. Constant connections to port 25:**

**Possible explanations:**

**Option 1: Legitimate email client**
- Outlook, Thunderbird sending emails
- Check: Is email client open?
- Normal pattern: Occasional connections when sending

**Option 2: Malware sending spam**
- Botnet using your computer
- Check: Connections to random IPs?
- Suspicious: Constant connections, hundreds of IPs

**How to tell the difference:**

**Check the executable:**
```
netstat -ano | findstr :25
TCP    192.168.1.105:58123    123.45.67.89:25    ESTABLISHED    4892

tasklist | findstr 4892
Outlook.exe    4892    Console    1    123,456 K
```

**If it's Outlook/Thunderbird:** Legitimate
**If it's "svchost.exe" or unknown:** Investigate further!

**Check destination IPs:**
- Your email provider (Google, Microsoft): Normal
- Random IPs from different countries: Suspicious!

---

## Port Security Best Practices

**For servers (what to open):**
- ONLY open necessary ports
- 80/443 for web server
- 22 for SSH (restrict to specific IPs if possible)
- Everything else CLOSED

**For clients (what to allow):**
- Outbound: 80, 443 (web)
- Outbound: 53 (DNS)
- Outbound: 587, 993, 995 (email)
- Block everything else unless specifically needed

**Red flags:**
- Port 3389 (RDP) open to internet
- Port 23 (Telnet) open anywhere
- Port 21 (FTP) open to internet
- Unused ports LISTENING

---

## Exam Tips

**YOU MUST MEMORIZE:**
- FTP: 20, 21
- SSH: 22
- Telnet: 23
- SMTP: 25
- DNS: 53
- DHCP: 67, 68
- TFTP: 69
- HTTP: 80
- POP3: 110
- NTP: 123
- IMAP: 143
- SNMP: 161, 162
- HTTPS: 443
- SMB: 445
- LDAP: 389
- LDAPS: 636
- RDP: 3389
- SIP: 5060, 5061

**Secure vs Insecure:**
- HTTP → HTTPS
- FTP → SFTP/FTPS
- Telnet → SSH
- SMTP → SMTP/TLS

**TCP vs UDP:**
- TCP: Reliable (web, email, file transfer)
- UDP: Fast (DNS, streaming, gaming)

---

## Did It Work?

If you were able to:
- ✅ View active connections with netstat
- ✅ Test if ports are open with telnet
- ✅ Identify HTTP (80) vs HTTPS (443) in traffic
- ✅ Memorize all essential port numbers
- ✅ Understand secure vs insecure protocols
- ✅ Find LISTENING ports on your computer
- ✅ Identify TCP vs UDP usage
- ✅ Understand port blocking and firewalls

**You're ready for the exam port questions!**

Port numbers are one of the most heavily tested topics on Network+. Know these cold!

**Next:** Ethernet standards and cabling (physical layer)