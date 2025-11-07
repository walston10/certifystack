# Lesson 9 Lab: Port Numbers and Common Protocols

**Estimated Time:** 25-30 minutes  
**Topics:** Port numbers, TCP vs UDP, Testing active ports, Protocol security

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand ports and protocols:

1. **What port does HTTPS use?**
   - a) Port 80
   - b) Port 443
   - c) Port 22
   - d) Port 3389

2. **Which port range is reserved for well-known ports?**
   - a) 0-1023
   - b) 1024-49151
   - c) 49152-65535
   - d) 0-65535

3. **What protocol uses port 22?**
   - a) Telnet
   - b) FTP
   - c) SSH
   - d) HTTP

4. **Which is the secure version of HTTP?**
   - a) SMTP
   - b) HTTPS
   - c) FTP
   - d) SSH

5. **What transport protocol does DNS primarily use?**
   - a) Only TCP
   - b) Only UDP
   - c) Both TCP and UDP
   - d) ICMP

---

## Section 2: Hands-On Activity (20-25 min)

### Activity A: View Your Computer's Active Connections

**Let's see what ports your computer is currently using!**

1. **Open Command Prompt (Windows) or Terminal (Mac)**

2. **Windows:**
```
netstat -ano
```

**Mac/Linux:**
```
netstat -an
```

**What you'll see:**
```
Proto  Local Address          Foreign Address        State
TCP    192.168.1.105:53891    142.250.185.46:443    ESTABLISHED
TCP    192.168.1.105:50234    172.217.164.110:80    TIME_WAIT
TCP    0.0.0.0:445            0.0.0.0:0              LISTENING
```

**Columns explained:**
- **Proto:** TCP or UDP
- **Local Address:** Your computer's IP:port
- **Foreign Address:** Remote server's IP:port
- **State:** Connection status (ESTABLISHED, LISTENING, etc.)

---

3. **Find these in your output:**

**Write down:**
- A connection to port 443: _________________________________ (HTTPS)
- A connection to port 80: _________________________________ (HTTP - if any)
- Any LISTENING ports: _________________________________ (services waiting for connections)

4. **Count how many connections you have:**
   - Total ESTABLISHED connections: _________
   - Total LISTENING ports: _________

**What this shows:** Your computer is constantly communicating on various ports!

---

### Activity B: Test Common Ports with Telnet

**We can test if a port is open using telnet (even though we're not actually using Telnet protocol).**

**⚠️ Note: If telnet isn't installed, skip to Activity C**

**Windows - Enable telnet first (if needed):**
- Control Panel → Programs → Turn Windows features on/off
- Check "Telnet Client"

---

#### Test 1: HTTPS (Port 443)
```
telnet google.com 443
```

**Expected result:** Connection succeeds! (blank screen or cursor)

**What this proves:** Port 443 is open on Google's server

**Press Ctrl+] then type "quit" to exit**

---

#### Test 2: HTTP (Port 80)
```
telnet example.com 80
```

**Expected result:** Connection succeeds!

**To exit:** Ctrl+] then "quit"

---

#### Test 3: SSH (Port 22) - Test your own router
```
telnet 192.168.1.1 22
```

**Might work:** If your router has SSH enabled
**Might fail:** "Could not open connection" - SSH is disabled (common)

---

#### Test 4: Closed Port (should fail)
```
telnet google.com 12345
```

**Expected result:** "Could not open connection to the host"

**What this proves:** Random ports are closed (firewall blocks them)

---

### Activity C: Identify Ports in Real Traffic

**Let's browse a website and see the ports in use:**

1. **Open a new Command Prompt/Terminal window**

2. **Start monitoring connections:**
```
netstat -ano 1
```
**(Refreshes every 1 second)**

3. **Open web browser, go to http://example.com**

4. **Watch the netstat output - you should see:**
```
TCP    192.168.1.105:xxxxx    93.184.216.34:80    ESTABLISHED
```

**What you found:**
- Your computer (192.168.1.105) on random high port (xxxxx)
- Example.com server (93.184.216.34) on port 80 (HTTP)

5. **Now visit https://google.com**

**What you should see:**
```
TCP    192.168.1.105:xxxxx    142.250.185.46:443    ESTABLISHED
```

**Port changed to 443!** (HTTPS)

**Press Ctrl+C to stop netstat**

---

### Activity D: Port Number Memorization Game

**Time to memorize the essential ports! Fill in the blanks:**

| Protocol | Port(s) | What's it for? |
|----------|---------|----------------|
| FTP (data) | ____ | File transfer (data channel) |
| FTP (control) | ____ | File transfer (control channel) |
| SSH | ____ | Secure remote access |
| Telnet | ____ | Insecure remote access |
| SMTP | ____ | Sending email |
| DNS | ____ | Name resolution |
| DHCP (server) | ____ | IP address assignment (server) |
| DHCP (client) | ____ | IP address assignment (client) |
| TFTP | ____ | Trivial file transfer |
| HTTP | ____ | Web browsing (insecure) |
| POP3 | ____ | Receiving email (downloads) |
| NTP | ____ | Time synchronization |
| IMAP | ____ | Receiving email (syncs) |
| SNMP | ____ | Network management |
| HTTPS | ____ | Web browsing (secure) |
| SMB | ____ | File sharing (Windows) |
| LDAP | ____ | Directory services |
| LDAPS | ____ | Secure directory services |
| RDP | ____ | Remote desktop |
| SIP | ____ | VoIP signaling |

---

### Activity E: Test Secure vs Insecure Protocols

**Let's see the difference between HTTP and HTTPS:**

1. **Visit:** http://neverssl.com

**What you see:**
- Simple website
- URL shows "http://" (not secure)
- No padlock icon

2. **Open browser's developer tools:**
   - Press F12 (Windows) or Cmd+Option+I (Mac)
   - Go to Network tab
   - Refresh the page

3. **Look at the request - find the port:**
   - Should show connection to port 80

---

4. **Now visit:** https://google.com

**What you see:**
- URL shows "https://" (secure)
- Padlock icon ✅
- "Connection is secure"

5. **In developer tools Network tab:**
   - Find the connection
   - Shows port 443
   - Everything is encrypted!

**The difference:**
- **HTTP (80):** Unencrypted - anyone can read your data
- **HTTPS (443):** Encrypted with TLS/SSL - private and secure

---

### Activity F: Identify Services by Port

**For each port number, write what service uses it:**

| Port | Service | Secure or Insecure? |
|------|---------|---------------------|
| 21 | ________ | ________ |
| 22 | ________ | ________ |
| 23 | ________ | ________ |
| 25 | ________ | ________ |
| 80 | ________ | ________ |
| 110 | ________ | ________ |
| 143 | ________ | ________ |
| 443 | ________ | ________ |
| 3389 | ________ | ________ |

---

### Activity G: Check Which Ports Are Listening on Your Computer

**Let's see what services are waiting for connections:**

**Windows:**
```
netstat -ano | findstr LISTENING
```

**Mac/Linux:**
```
netstat -an | grep LISTEN
```

**Example output:**
```
TCP    0.0.0.0:135      0.0.0.0:0      LISTENING
TCP    0.0.0.0:445      0.0.0.0:0      LISTENING
TCP    0.0.0.0:5040     0.0.0.0:0      LISTENING
```

**What you found - write down 3 LISTENING ports:**
1. Port _____: _________________ (guess what service)
2. Port _____: _________________ (guess what service)
3. Port _____: _________________ (guess what service)

**Common ports you might see:**
- 135: Windows RPC
- 445: SMB (File Sharing)
- 5357: Web Services Discovery
- 7680: Windows Update Delivery

**Why LISTENING?**
- These services are waiting for incoming connections
- Part of your operating system
- Enable features like file sharing, remote assistance

---

### Activity H: TCP vs UDP - Find Examples

**Look at your netstat output again. Do you see any UDP connections?**

**Windows:**
```
netstat -ano | findstr UDP
```

**Mac/Linux:**
```
netstat -an | grep UDP
```

**Example output:**
```
UDP    0.0.0.0:53       *:*
UDP    0.0.0.0:123      *:*
UDP    0.0.0.0:5353     *:*
```

**UDP ports you might see:**
- Port 53: DNS
- Port 123: NTP
- Port 137-139: NetBIOS
- Port 5353: mDNS (Bonjour)

**Write down your UDP ports:** _________________________________

**Why UDP?**
- DNS: Fast queries, retries if needed
- NTP: Time sync, small packets
- NetBIOS: Network discovery
- These don't need guaranteed delivery (TCP)

---

### Activity I: Test Port Blocking (Firewall in Action)

**Let's see if your firewall blocks certain ports:**

**Try connecting to an unusual port:**
```
telnet google.com 25
```

**Expected results:**
- **Might work:** Some networks allow SMTP
- **Might fail:** "Connection failed" - your firewall or ISP blocks it

**Try a few more:**
```
telnet google.com 21    (FTP)
telnet google.com 23    (Telnet)
```

**What this teaches:**
- Firewalls block most incoming ports
- Only common ports (80, 443) are usually allowed
- Security through port filtering!

---

### Activity J: Create Your Own Port Reference Card

**On paper or digitally, create a quick reference card with these ports:**

**MEMORIZE THESE FOR THE EXAM:**

**"20s"**
- 20/21 - FTP
- 22 - SSH
- 23 - Telnet
- 25 - SMTP

**"50s-60s"**
- 53 - DNS
- 67/68 - DHCP
- 69 - TFTP

**"80s and 100s"**
- 80 - HTTP
- 110 - POP3
- 123 - NTP

**"100s"**
- 143 - IMAP
- 161/162 - SNMP

**"400s"**
- 389 - LDAP
- 443 - HTTPS
- 445 - SMB

**"600s+"**
- 636 - LDAPS
- 3389 - RDP
- 5060/5061 - SIP

**Test yourself:** Cover the ports and try to remember them!

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **You're a network admin. You see tons of traffic on port 3389:**
   - What protocol is this?
   - Is this normal or suspicious?
   - What would you investigate?

2. **Port 80 vs Port 443 - which should websites use?**
   - Why is HTTPS important?
   - What happens if you type passwords on HTTP site?
   - Should HTTP even exist anymore?

3. **Your firewall blocks all ports except 80 and 443:**
   - Can you browse the web? (Yes/No)
   - Can you SSH to a server? (Yes/No)
   - Can you send email? (Depends - explain)
   - Is this good or bad security practice?

4. **You see your computer connecting to port 25 (SMTP) constantly:**
   - What's probably happening?
   - Is this malware sending spam?
   - OR legitimate email client?
   - How would you tell the difference?

---

## What You Learned Today

- ✅ You viewed active connections on your computer
- ✅ You tested if ports are open using telnet
- ✅ You identified HTTP (80) vs HTTPS (443) in real traffic
- ✅ You memorized essential port numbers
- ✅ You compared secure vs insecure protocols
- ✅ You found LISTENING ports (services waiting for connections)
- ✅ You identified TCP vs UDP in your traffic
- ✅ You saw firewall port blocking in action
- ✅ You created a port reference card for the exam

**Next Lesson:** Ethernet Standards and Cabling - Physical layer time!