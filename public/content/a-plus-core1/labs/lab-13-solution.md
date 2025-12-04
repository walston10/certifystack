# Lab 13: Common Network Protocols and Ports - Solution Guide

**Note to Students:** Only review this AFTER attempting the memorization exercises yourself! Port numbers require repetition to stick.

---

## Section 1: Concept Check - Answers

**1. What is the difference between TCP and UDP, and when would you use each?**

**Answer:**

| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Connection-oriented (handshake) | Connectionless |
| Reliability | Guaranteed delivery | Best effort |
| Order | Packets delivered in order | No ordering |
| Error checking | Yes, with retransmission | Basic checksum only |
| Speed | Slower (overhead) | Faster (less overhead) |
| Header size | 20+ bytes | 8 bytes |

**When to use TCP:**
- File transfers (FTP, SFTP)
- Web pages (HTTP/HTTPS)
- Email (SMTP, POP3, IMAP)
- Remote access (SSH, RDP)
- Any time data must be complete and accurate

**When to use UDP:**
- Streaming video/audio
- VoIP phone calls
- Online gaming
- DNS queries (small, quick)
- DHCP
- Any time speed matters more than perfection

**Memory trick:** "TCP = Trust, Complete, Perfect" vs "UDP = Unreliable but Darn fast for Playback"

---

**2. Why are port numbers below 1024 called "well-known ports" and what makes them special?**

**Answer:**

**Well-known ports (0-1023)** are reserved for common, standardized services assigned by IANA (Internet Assigned Numbers Authority).

**What makes them special:**

| Feature | Why It Matters |
|---------|----------------|
| Standardized | Everyone knows port 80 = HTTP |
| Reserved | Can't be used for other purposes |
| Root/Admin required | On Unix/Linux, binding requires elevated privileges |
| Predictable | Makes firewall rules easier |
| Historical | Established early in internet development |

**Port ranges:**
- 0-1023: Well-known (system) ports
- 1024-49151: Registered ports
- 49152-65535: Dynamic/private/ephemeral ports

---

**3. If a firewall is blocking port 443, what type of traffic would be affected?**

**Answer:**

**Port 443 = HTTPS (Secure Web Traffic)**

**Affected:**
- All secure websites (anything with https://)
- Online banking
- Shopping sites
- Email web interfaces (Gmail, Outlook.com)
- Most modern web applications
- Software updates (many use HTTPS)
- API calls from applications

**Not affected:**
- HTTP sites (port 80) - though these are rare now
- Email clients using SMTP/IMAP/POP3
- FTP transfers
- SSH connections
- Non-web applications using other ports

**Modern impact:** Blocking 443 essentially breaks the internet for most users, as 80%+ of web traffic is now HTTPS.

---

**4. Explain why HTTPS (port 443) replaced HTTP (port 80) as the default for web browsing.**

**Answer:**

**HTTPS advantages over HTTP:**

| Feature | HTTP | HTTPS |
|---------|------|-------|
| Encryption | None | TLS/SSL encrypted |
| Data protection | Visible to anyone | Encrypted in transit |
| Authentication | None | Certificate verifies site |
| Integrity | Can be modified | Tampering detected |
| SEO ranking | Penalized | Favored by Google |
| Browser warnings | "Not Secure" label | Padlock icon |

**Why the shift happened:**
1. **Privacy concerns** - ISPs, hackers could see all traffic
2. **Google ranking** - HTTPS sites rank higher
3. **Browser warnings** - Chrome marks HTTP as "Not Secure"
4. **Free certificates** - Let's Encrypt made HTTPS free
5. **Performance** - HTTP/2 requires HTTPS, and it's faster
6. **Data protection laws** - GDPR, etc. require encryption

---

**5. A user can receive emails but cannot send them. Which port(s) should you check, and why?**

**Answer:**

**Check SMTP ports:** 25, 587, or 465

| Port | Protocol | Notes |
|------|----------|-------|
| 25 | SMTP | Often blocked by ISPs for consumers |
| 587 | SMTP with STARTTLS | Recommended for email submission |
| 465 | SMTPS (implicit SSL) | Alternative secure option |

**Receiving works because:**
- IMAP (143/993) or POP3 (110/995) handles receiving
- These are different ports/protocols from sending

**Troubleshooting steps:**
1. Check which SMTP port is configured
2. Verify port is open: `Test-NetConnection smtp.provider.com -Port 587`
3. Confirm correct server address
4. Check authentication credentials
5. Verify ISP isn't blocking port 25 (try 587 instead)

---

## Section 2: Activity Solutions

### Activity A: Essential Ports - Complete Reference

| Protocol | Port(s) | TCP/UDP | Purpose |
|----------|---------|---------|---------|
| FTP | 20, 21 | TCP | File Transfer (20=data, 21=control) |
| SSH | 22 | TCP | Secure Shell (encrypted remote access) |
| Telnet | 23 | TCP | Unencrypted remote access (legacy) |
| SMTP | 25 (587) | TCP | Send email |
| DNS | 53 | Both | Domain name resolution |
| DHCP | 67, 68 | UDP | Automatic IP assignment (67=server, 68=client) |
| TFTP | 69 | UDP | Trivial File Transfer (simple, no auth) |
| HTTP | 80 | TCP | Web pages (unencrypted) |
| POP3 | 110 (995) | TCP | Receive email (download) |
| NTP | 123 | UDP | Network time synchronization |
| IMAP | 143 (993) | TCP | Receive email (sync) |
| SNMP | 161, 162 | UDP | Network management (161=queries, 162=traps) |
| LDAP | 389 (636) | TCP | Directory services |
| HTTPS | 443 | TCP | Secure web pages |
| SMB | 445 | TCP | Windows file sharing |
| Syslog | 514 | UDP | Centralized logging |
| RDP | 3389 | TCP/UDP | Remote Desktop (Windows) |

---

### Activity B: Port Categories - Complete

| Range | Name | Use |
|-------|------|-----|
| 0-1023 | Well-known (System) | Standard services (HTTP, FTP, SSH) |
| 1024-49151 | Registered | Applications (SQL, RDP, custom apps) |
| 49152-65535 | Dynamic/Ephemeral | Client-side temporary connections |

**Port categorization:**

| Port | Range Category | Protocol |
|------|----------------|----------|
| 22 | Well-known | SSH |
| 3389 | Registered | RDP |
| 80 | Well-known | HTTP |
| 8080 | Registered | HTTP Alternate/Proxy |
| 443 | Well-known | HTTPS |
| 50000 | Dynamic | Ephemeral/temporary |

**Answers:**
1. Well-known ports (0-1023) require root/admin
2. Dynamic ports (49152-65535) for client connections
3. Port 8080 is often HTTP proxy, alternate web server, or development server

---

### Activity C: Email Protocols - Complete

| Protocol | Purpose | Standard Port | Secure Port |
|----------|---------|---------------|-------------|
| SMTP | Send outgoing mail | 25 (or 587) | 465/587 |
| POP3 | Receive mail (download, delete from server) | 110 | 995 |
| IMAP | Receive mail (sync, keep on server) | 143 | 993 |

**Scenario answers:**

1. Can receive but not send: **SMTP, port 587** (or 25/465)
2. POP3 not downloading: **Port 110** (or 995 secure)
3. Secure-only corporate: **587 (SMTP), 993 (IMAP), 995 (POP3)**
4. Why ISPs block port 25: **Prevents spam** - compromised computers can't become spam relays

---

### Activity D: Web and File Transfer - Complete

**File transfer protocols:**

| Protocol | Port(s) | Purpose | Secure? |
|----------|---------|---------|---------|
| FTP | 20, 21 | File transfer | No |
| SFTP | 22 | Secure file transfer (over SSH) | Yes |
| FTPS | 989, 990 | FTP over SSL/TLS | Yes |
| TFTP | 69 | Simple file transfer (no auth) | No |
| SMB | 445 | Windows file sharing | Depends |

**FTP ports:**
- Port 21: Control channel (commands, login)
- Port 20: Data channel (actual file transfers)

**SFTP vs FTPS:**
- SFTP: Uses SSH protocol (port 22), completely different from FTP
- FTPS: FTP with SSL/TLS added, uses port 990 (implicit) or 21 (explicit)

**When to use TFTP:**
- Network device firmware updates
- PXE boot
- When simplicity matters more than security
- Embedded systems

---

### Activity E: Remote Access - Complete

| Protocol | Port | TCP/UDP | Use Case |
|----------|------|---------|----------|
| SSH | 22 | TCP | Secure Linux/Unix/network device access |
| Telnet | 23 | TCP | Legacy unencrypted access (avoid!) |
| RDP | 3389 | TCP/UDP | Windows Remote Desktop |
| VNC | 5900 | TCP | Cross-platform remote desktop |

**Answers:**

1. **Why not Telnet:** All traffic including passwords sent in clear text - anyone can sniff it
2. **SSH additional features:** Encrypted tunnel, file transfer (SCP/SFTP), port forwarding
3. **RDP native to:** Windows
4. **Linux server management:** SSH, port 22
5. **Windows desktop remote access:** RDP, port 3389

---

### Activity F: Network Services - Complete

| Protocol | Port(s) | TCP/UDP | Purpose |
|----------|---------|---------|---------|
| DNS | 53 | Both | Name resolution |
| DHCP | 67, 68 | UDP | Automatic IP assignment |
| LDAP | 389 | TCP | Directory services |
| LDAPS | 636 | TCP | Secure directory services |
| SNMP | 161, 162 | UDP | Network management |
| NTP | 123 | UDP | Time synchronization |
| Syslog | 514 | UDP | Centralized logging |

**Answers:**

1. **DNS TCP vs UDP:**
   - UDP: Normal queries (small, fast)
   - TCP: Zone transfers, responses > 512 bytes

2. **DHCP ports:**
   - 67: Server (listens for requests)
   - 68: Client (receives responses)

3. **LDAP vs LDAPS:**
   - LDAP (389): Unencrypted
   - LDAPS (636): Encrypted with SSL/TLS

4. **SNMP ports:**
   - 161: Queries (manager polls agent)
   - 162: Traps (agent sends alerts to manager)

---

### Activity G: TCP vs UDP - Complete

| Protocol | TCP/UDP | Why |
|----------|---------|-----|
| HTTP/HTTPS | TCP | Must deliver complete web pages |
| FTP | TCP | File integrity critical |
| SSH | TCP | Every keystroke must arrive |
| DNS | Both | UDP for queries, TCP for large transfers |
| DHCP | UDP | Simple request/response, broadcast |
| TFTP | UDP | Simple, small transfers |
| SNMP | UDP | Lightweight monitoring |
| RDP | Both | TCP for reliability, UDP for performance |
| NTP | UDP | Small packets, timing sensitive |
| VoIP | UDP | Real-time, latency matters |

**TCP use cases:**
1. File transfers (integrity required)
2. Web pages (complete documents needed)
3. Email (messages must be whole)

**UDP use cases:**
1. Streaming (speed > completeness)
2. Gaming (latency critical)
3. VoIP (real-time audio)

**Quick rules:**
- Reliability needed → TCP
- Speed/low latency → UDP
- Streaming/real-time → UDP
- File transfer/web → TCP

---

### Activity J: Secure Alternatives - Complete

| Insecure | Port | Secure Alternative | Port |
|----------|------|--------------------|------|
| HTTP | 80 | HTTPS | 443 |
| FTP | 21 | SFTP (or FTPS) | 22 (or 990) |
| Telnet | 23 | SSH | 22 |
| LDAP | 389 | LDAPS | 636 |
| IMAP | 143 | IMAPS | 993 |
| POP3 | 110 | POP3S | 995 |
| SMTP | 25 | SMTP with TLS | 587 |
| SNMP v1/v2 | 161 | SNMP v3 | 161 |

**Why secure versions are better:**

| Upgrade | Benefit |
|---------|---------|
| HTTP → HTTPS | Encrypts all web traffic, verifies site identity |
| Telnet → SSH | Encrypts session, prevents password sniffing |
| FTP → SFTP | Encrypts files and credentials in transit |
| LDAP → LDAPS | Protects directory queries and authentication |

---

### Activity K: Firewall Rules - Complete

**Web server scenario:**

**Open to internet:**

| Port | Protocol | Direction | Allow From |
|------|----------|-----------|------------|
| 80 | HTTP | Inbound | Any |
| 443 | HTTPS | Inbound | Any |

**Open internally only:**

| Port | Protocol | Direction | Allow From |
|------|----------|-----------|------------|
| 22 | SSH | Inbound | Internal IPs only |
| 3306 | MySQL | Inbound | Internal IPs only |

**Website troubleshooting:**

1. Port blocked: 443 (HTTPS) or 80 (HTTP)
2. Test with: `Test-NetConnection website.com -Port 443`
3. Firewall check: `netsh advfirewall show rule name=all` (Windows)

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Website Works HTTP Not HTTPS

**Analysis:**
- Port 80 (HTTP) is open
- Port 443 (HTTPS) is blocked
- Internal users work both ways → internal firewall allows it

**Port blocked:** 443

**Where:** External firewall (edge/perimeter firewall between internal network and internet)

**Solution:** Open port 443 on external firewall for inbound traffic to web server

---

### Scenario 2: RDP Works at Home, Not at Hotel

**Most likely cause:** Hotel firewall blocks port 3389

**Hotels commonly block:**
- RDP (3389) - security risk
- SSH (22) - security risk
- VPN ports - force users to their network
- Uncommon ports - reduce attack surface

**Solutions:**
1. Use VPN that tunnels over port 443 (usually allowed)
2. RDP gateway that uses HTTPS
3. Use hotel's business network if available
4. Mobile hotspot instead of hotel Wi-Fi

---

### Scenario 3: All Email Firewall Ports

**Complete list of potential email ports:**

| Direction | Protocol | Ports | Notes |
|-----------|----------|-------|-------|
| Outbound | SMTP | 25, 587, 465 | Sending mail |
| Inbound | SMTP | 25 | Receiving mail (server) |
| Inbound/Outbound | POP3 | 110, 995 | Client receiving |
| Inbound/Outbound | IMAP | 143, 993 | Client receiving |

**Recommended for modern setup:**
- 587 (SMTP submission)
- 993 (IMAPS)
- 995 (POP3S) if needed

---

### Scenario 4: VoIP Quality - TCP vs UDP

**Would TCP help? No - it would make it worse.**

**Why UDP is correct for VoIP:**

| Factor | TCP | UDP |
|--------|-----|-----|
| Latency | Higher (acknowledgments) | Lower |
| Dropped packet | Waits, retransmits | Skips, continues |
| User experience | Delayed audio, catches up | Brief gap, stays real-time |

**VoIP priority:** Real-time > perfect delivery

If a voice packet is late, it's useless - the conversation has moved on. TCP's retransmission would cause audio to buffer and catch up, which is worse than a brief dropout.

**Real solutions for VoIP quality:**
- QoS (prioritize voice traffic)
- Jitter buffers
- Better network connection
- Reduce network congestion

---

## Key Takeaways

**For the A+ Exam - MUST MEMORIZE:**

```
FTP: 20/21          SSH: 22           Telnet: 23
SMTP: 25/587        DNS: 53           DHCP: 67/68
TFTP: 69            HTTP: 80          POP3: 110/995
NTP: 123            IMAP: 143/993     SNMP: 161/162
LDAP: 389/636       HTTPS: 443        SMB: 445
Syslog: 514         RDP: 3389
```

**Port categories:**
- 0-1023: Well-known
- 1024-49151: Registered
- 49152-65535: Dynamic

**TCP vs UDP:**
- TCP: Reliable, ordered, web/email/files
- UDP: Fast, real-time, streaming/DNS/DHCP

**Secure alternatives:**
- HTTP → HTTPS (80 → 443)
- Telnet → SSH (23 → 22)
- FTP → SFTP (21 → 22)
- LDAP → LDAPS (389 → 636)

**For Real-World Skills:**

- Use `netstat -an` to see active connections
- Test port connectivity with `Test-NetConnection`
- Blocked ports = can't connect (timeout)
- Know your email ports when troubleshooting
- Hotels and public Wi-Fi block many ports

---

**Congratulations on completing Lab 13!**

Port numbers are foundational knowledge for IT support. You'll use this information constantly when troubleshooting connectivity issues and configuring firewalls.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 13: Common Network Protocols and Ports - Solution Guide*