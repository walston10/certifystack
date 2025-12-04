# Lab 10: Network Services and Configuration

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 2.4 - Summarize services provided by networked hosts

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **Describe the DHCP DORA process and explain what happens at each step.**

2. **What is the difference between a DNS A record and a DNS MX record?**

3. **Why would a network administrator configure a DHCP reservation instead of a static IP address on the device itself?**

4. **Explain the difference between POP3 and IMAP for email retrieval.**

5. **What is the purpose of a syslog server in network management?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses your network and command-line tools** - Explore real network services.

---

#### Activity A: DHCP Exploration

**Goal:** Understand how your devices get IP addresses.

**Check your current DHCP lease:**

**Windows:**
```
ipconfig /all
```

**Mac/Linux:**
```
ifconfig    (or ip addr)
cat /var/lib/dhcp/dhclient.leases    (Linux, location varies)
```

**Document your DHCP information:**

| Setting | Your Value |
|---------|------------|
| DHCP Enabled | [ ] Yes [ ] No |
| IPv4 Address | |
| Subnet Mask | |
| Default Gateway | |
| DHCP Server | |
| Lease Obtained | |
| Lease Expires | |
| DNS Servers | |

**Access your router's DHCP settings:**

| Setting | Current Value |
|---------|---------------|
| DHCP Server Enabled | [ ] Yes [ ] No |
| Starting IP Address | |
| Ending IP Address | |
| Subnet Mask | |
| Lease Time | |
| DNS Server(s) assigned | |
| Default Gateway assigned | |

**Calculate your DHCP pool:**

Starting IP: _______________ Ending IP: _______________

Total addresses in pool: _______________

**DHCP client list:**

How many devices currently have DHCP leases?  _______________

List 5 devices from your DHCP client list:

| Hostname | IP Address | MAC Address | Lease Remaining |
|----------|------------|-------------|-----------------|
| 1. | | | |
| 2. | | | |
| 3. | | | |
| 4. | | | |
| 5. | | | |

---

#### Activity B: DHCP Release and Renew

**Goal:** Observe DHCP in action.

**Windows - Release and Renew:**

```
ipconfig /release
ipconfig /renew
```

**Mac:**
```
sudo ipconfig set en0 DHCP
```

**Linux:**
```
sudo dhclient -r
sudo dhclient
```

**Document the process:**

**Before release:**
- IP Address: _______________
- Can you ping google.com? [ ] Yes [ ] No

**After release (before renew):**
- IP Address: _______________
- Can you ping google.com? [ ] Yes [ ] No

**After renew:**
- IP Address: _______________
- Same IP as before? [ ] Yes [ ] No
- Can you ping google.com? [ ] Yes [ ] No

**Why might you get the same IP after renewing?**

_________________________________________________________________

---

#### Activity C: DHCP Reservation Setup

**Goal:** Configure a DHCP reservation for a device.

**In your router's DHCP settings, find the reservation/static lease section.**

**Choose a device to reserve an IP for:**

| Setting | Value |
|---------|-------|
| Device name | |
| Current IP address | |
| MAC address | |
| Reserved IP address (choose one) | |

**Before configuring:**

1. Is the reserved IP inside or outside the DHCP pool? _______________

2. Why does it matter? 

_________________________________________________________________

**After configuring the reservation:**

1. Release and renew DHCP on that device
2. Did it get the reserved IP? [ ] Yes [ ] No

**When would you use DHCP reservations?**

List 3 devices that benefit from reserved IPs:

1. _______________________
2. _______________________
3. _______________________

---

#### Activity D: DNS Resolution Testing

**Goal:** Understand how DNS works and test resolution.

**Basic DNS lookup:**

**Windows:**
```
nslookup google.com
nslookup microsoft.com
nslookup amazon.com
```

**Mac/Linux:**
```
nslookup google.com
# or
dig google.com
```

**Document results:**

| Domain | IP Address(es) Returned | Response Time |
|--------|------------------------|---------------|
| google.com | | |
| microsoft.com | | |
| amazon.com | | |
| Your ISP's website | | |

**Query specific DNS servers:**

```
nslookup google.com 8.8.8.8
nslookup google.com 1.1.1.1
nslookup google.com 9.9.9.9
```

| DNS Server | IP | Provider | Response for google.com |
|------------|-----|----------|------------------------|
| 8.8.8.8 | | Google | |
| 1.1.1.1 | | Cloudflare | |
| 9.9.9.9 | | Quad9 | |
| Your router | | Local | |

**Did all DNS servers return the same IP for google.com?** [ ] Yes [ ] No

**Why might they be different?**

_________________________________________________________________

---

#### Activity E: DNS Record Types

**Goal:** Query different DNS record types.

**Query specific record types:**

**Windows:**
```
nslookup -type=A google.com
nslookup -type=MX google.com
nslookup -type=NS google.com
nslookup -type=TXT google.com
```

**Mac/Linux (dig):**
```
dig google.com A
dig google.com MX
dig google.com NS
dig google.com TXT
```

**Document the records:**

**A Records (IPv4 addresses):**

| Domain | A Record IP |
|--------|-------------|
| google.com | |
| microsoft.com | |
| github.com | |

**MX Records (mail servers):**

| Domain | MX Record | Priority |
|--------|-----------|----------|
| google.com | | |
| microsoft.com | | |
| Your email domain | | |

**NS Records (name servers):**

| Domain | Name Servers |
|--------|--------------|
| google.com | |
| amazon.com | |

**TXT Records:**

```
nslookup -type=TXT google.com
```

What information is in google.com's TXT records?

_________________________________________________________________

**What are TXT records commonly used for?**

1. _______________________
2. _______________________
3. _______________________

---

#### Activity F: DNS Cache Exploration

**Goal:** Understand DNS caching.

**View your local DNS cache:**

**Windows:**
```
ipconfig /displaydns
```

**Document 5 cached entries:**

| Domain | Record Type | TTL | IP/Data |
|--------|-------------|-----|---------|
| 1. | | | |
| 2. | | | |
| 3. | | | |
| 4. | | | |
| 5. | | | |

**Clear the DNS cache:**

**Windows:**
```
ipconfig /flushdns
```

**Mac:**
```
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Linux:**
```
sudo systemd-resolve --flush-caches
```

**Verify cache is cleared:**

```
ipconfig /displaydns
```

Is the cache empty now? [ ] Yes [ ] No

**When would you need to flush DNS cache?**

_________________________________________________________________

---

#### Activity G: File Sharing Services

**Goal:** Explore file sharing on your network.

**Check for network shares:**

**Windows:**
```
net view
net share
```

**Document available shares:**

| Share Name | Path/Location | Type |
|------------|---------------|------|
| | | |
| | | |
| | | |

**Access a network share:**

**Windows:**
```
\\computername\sharename
# or
\\192.168.1.x\sharename
```

**Mac:**
Finder → Go → Connect to Server → smb://192.168.1.x/sharename

**File sharing protocols:**

| Protocol | Full Name | Port | Use Case |
|----------|-----------|------|----------|
| SMB | | | |
| NFS | | | |
| FTP | | | |
| SFTP | | | |
| AFP | | | |

**If you have a NAS or shared folder:**

| Setting | Your Share |
|---------|------------|
| Share path | |
| Protocol used | |
| Authentication required? | |
| Permissions | |

---

#### Activity H: Print Server Concepts

**Goal:** Understand network printing.

**Check installed printers:**

**Windows:**
```
wmic printer list brief
```
Or: Settings → Printers & Scanners

**Mac:**
System Preferences → Printers & Scanners

**Document your printers:**

| Printer Name | Connection Type | Port/IP | Shared? |
|--------------|-----------------|---------|---------|
| | | | |
| | | | |

**For a network printer (if available):**

| Setting | Value |
|---------|-------|
| Printer IP address | |
| Protocol (LPD, IPP, RAW) | |
| Port number | |
| Web management interface? | |

**Print server vs direct IP printing:**

What's the difference between:

1. Connecting to a printer via print server: 

_________________________________________________________________

2. Connecting directly to a printer's IP address:

_________________________________________________________________

**Common printing ports:**

| Port | Protocol | Description |
|------|----------|-------------|
| 515 | | |
| 631 | | |
| 9100 | | |

---

#### Activity I: Web Server Testing

**Goal:** Understand web servers and HTTP/HTTPS.

**Test web server connectivity:**

**Windows:**
```
curl -I https://www.google.com
```
(If curl not available, use PowerShell: `Invoke-WebRequest -Uri https://www.google.com -Method Head`)

**Mac/Linux:**
```
curl -I https://www.google.com
```

**Document the response headers:**

| Header | Value |
|--------|-------|
| HTTP Status | |
| Server | |
| Content-Type | |
| Date | |

**Test different websites:**

| Website | HTTP Status | Server Type | HTTPS? |
|---------|-------------|-------------|--------|
| google.com | | | |
| microsoft.com | | | |
| github.com | | | |
| Your company/school site | | | |

**HTTP vs HTTPS:**

```
curl -I http://google.com
curl -I https://google.com
```

What happens when you try HTTP on google.com?

_________________________________________________________________

**Common web server software:**

| Server | Commonly Used By |
|--------|------------------|
| Apache | |
| Nginx | |
| IIS | |
| LiteSpeed | |

---

#### Activity J: Email Server Ports

**Goal:** Understand email protocols and ports.

**Email protocol reference:**

Complete this table:

| Protocol | Purpose | Standard Port | Secure Port |
|----------|---------|---------------|-------------|
| SMTP | | | |
| POP3 | | | |
| IMAP | | | |

**Test email server connectivity:**

**Windows (telnet or PowerShell):**
```
Test-NetConnection smtp.gmail.com -Port 587
Test-NetConnection imap.gmail.com -Port 993
```

**Mac/Linux:**
```
nc -zv smtp.gmail.com 587
nc -zv imap.gmail.com 993
```

**Document results:**

| Server | Port | Connection Successful? |
|--------|------|----------------------|
| smtp.gmail.com | 587 | |
| imap.gmail.com | 993 | |
| pop.gmail.com | 995 | |
| Your email provider SMTP | | |
| Your email provider IMAP | | |

**Email flow diagram:**

Describe the path of an email from sender to recipient:

```
Your email client → _______ server → _______ → _______ server → Recipient's client
                    (protocol: ___)           (protocol: ___)
```

---

#### Activity K: Network Management Protocols

**Goal:** Understand SNMP and Syslog basics.

**SNMP (Simple Network Management Protocol):**

| Concept | Description |
|---------|-------------|
| What SNMP does | |
| SNMP Manager | |
| SNMP Agent | |
| MIB | |
| SNMP Trap | |
| SNMP Ports | |

**SNMP versions:**

| Version | Security | Use Case |
|---------|----------|----------|
| SNMPv1 | | |
| SNMPv2c | | |
| SNMPv3 | | |

**Check if your router supports SNMP:**

Does your router have SNMP settings? [ ] Yes [ ] No [ ] Don't know

If yes, is it enabled? [ ] Yes [ ] No

**Syslog:**

| Concept | Description |
|---------|-------------|
| What Syslog does | |
| Syslog port | |
| Syslog severity levels (0-7) | |

**Syslog severity levels:**

| Level | Name | Description |
|-------|------|-------------|
| 0 | | |
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |

---

#### Activity L: AAA Concepts

**Goal:** Understand Authentication, Authorization, and Accounting.

**AAA Framework:**

| Component | What It Does | Example |
|-----------|--------------|---------|
| Authentication | | |
| Authorization | | |
| Accounting | | |

**RADIUS vs TACACS+:**

| Feature | RADIUS | TACACS+ |
|---------|--------|---------|
| Full name | | |
| Protocol | | |
| Port | | |
| Encryption | | |
| AAA handling | | |
| Common use | | |

**Where is AAA used?**

1. _______________________
2. _______________________
3. _______________________

**Have you encountered AAA in real life?**

Think about times you've connected to:
- Corporate Wi-Fi with username/password
- VPN with credentials
- Network equipment requiring login

Describe one example:

_________________________________________________________________

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A user reports they can browse websites but can't access them by name - only by IP address. Pinging 8.8.8.8 works, but pinging google.com fails. What service is likely having issues, and how would you troubleshoot?**

2. **A company's DHCP server fails overnight. In the morning, some computers work fine while others show 169.254.x.x addresses. Why do some work and others don't? What determines this?**

3. **An employee can receive emails but can't send them from their phone after the company changed email servers. What settings need to be updated, and which ports should you verify?**

4. **A network administrator needs to be alerted whenever a critical router goes offline. What network management protocol would accomplish this, and how does it work?**

---

## What You Learned Today

- ✅ Explored DHCP settings and lease information
- ✅ Performed DHCP release and renew operations
- ✅ Configured a DHCP reservation
- ✅ Tested DNS resolution with nslookup
- ✅ Queried different DNS record types
- ✅ Explored and flushed DNS cache
- ✅ Investigated file sharing services (SMB)
- ✅ Understood network printing concepts
- ✅ Tested web server connectivity
- ✅ Learned email protocols and ports
- ✅ Studied SNMP and Syslog for network management
- ✅ Understood AAA framework (RADIUS, TACACS+)

**Next Lab:** Internet Connection Types - exploring cable, DSL, fiber, and other WAN technologies.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 10: Network Services and Configuration*