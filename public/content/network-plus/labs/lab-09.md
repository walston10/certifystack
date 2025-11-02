# Lab 9: Wireshark Network Detective

**Objective:** Use Wireshark and command-line tools to identify protocols based on port numbers in real network traffic.

**Time Required:** 40-50 minutes  
**Tools Needed:** Wireshark (or netstat as alternative), web browser, command prompt/terminal  
**Prerequisites:** Basic understanding of port numbers from Lesson 9

---

## Introduction

Port numbers are abstract until you see them in action. In this lab, you'll become a network detective - capturing real traffic, analyzing port numbers, and identifying exactly what's happening on your network.

**What makes this different:**
- You're analyzing YOUR actual network traffic, not fake examples
- Every packet you capture is real communication happening right now
- These are the exact same tools network engineers use for troubleshooting
- You'll see the ports from Lesson 9 appear in living, breathing network conversations

**By the end of this lab, you'll be able to:**
- Capture network traffic using Wireshark
- Identify protocols by their port numbers
- Distinguish between source and destination ports
- Understand the difference between client and server ports
- Troubleshoot basic network connectivity issues using port analysis

Let's start investigating! 🔍

---

## Part 1: Installing and Setting Up Wireshark

### **What is Wireshark?**

Wireshark is a free, open-source packet analyzer - it captures and displays network traffic in real-time. Think of it as a "network microscope" that lets you see exactly what data is flowing through your network connection.

**It's completely safe and legal to use on your own computer and network.** However, capturing traffic on networks you don't own (like your workplace or school without permission) can violate policies or laws.

### **Installation**

**Download Wireshark:**
- Official website: [https://www.wireshark.org/download.html](https://www.wireshark.org/download.html)
- **Windows:** Download the Windows Installer (64-bit)
- **Mac:** Download the macOS Disk Image (.dmg)
- **Linux:** Use your package manager: `sudo apt install wireshark` (Ubuntu/Debian) or `sudo dnf install wireshark` (Fedora)

**Installation notes:**
- **Windows:** During installation, install WinPcap or Npcap when prompted (required for packet capture)
- **Mac:** You may need to allow Wireshark in System Preferences → Security & Privacy
- **Linux:** You may need to add your user to the `wireshark` group to capture without sudo

### **First Launch**

1. Open Wireshark
2. You'll see a list of network interfaces (Wi-Fi, Ethernet, etc.)
3. **Don't start capturing yet!** Let's understand what we're looking at first.

### **Wireshark Interface Overview**

**Main sections:**

**1. Interface List (opening screen)**
- Shows all network adapters on your computer
- You'll capture on your active connection (usually Wi-Fi or Ethernet)
- Each interface shows a mini real-time activity graph

**2. Packet List (top section after starting capture)**
- Each row = one packet
- Columns show: Number, Time, Source, Destination, Protocol, Length, Info

**3. Packet Details (middle section)**
- Expandable tree showing packet layers
- Click any packet to see its details broken down by layer

**4. Packet Bytes (bottom section)**
- Raw hexadecimal and ASCII data
- Usually not needed for our purposes

**5. Filter Bar (top)**
- The most powerful feature!
- Type filters like `tcp.port == 443` to show only HTTPS traffic

---

## Part 2: Your First Packet Capture

### **Challenge 1: Capture General Traffic**

**Step 1: Start capturing**
1. Select your active network interface (Wi-Fi or Ethernet - whichever you're connected with)
2. Click the blue shark fin icon (or double-click the interface)
3. Packets will start scrolling by rapidly

**Step 2: Generate some traffic**
- Open a web browser
- Visit http://example.com (not HTTPS - we want to see unencrypted HTTP)
- Let it load completely

**Step 3: Stop capturing**
- Click the red square icon to stop
- You should have 50-200 packets captured

**Step 4: Filter for HTTP**
- In the filter bar, type: `http`
- Press Enter
- You should see HTTP packets with port 80

**Questions to answer:**

1. How many HTTP packets did you capture?
2. What is the source IP and destination IP?
3. What ports are being used? (Look at TCP source port and destination port in packet details)
4. Which port is 80 - source or destination? Why?

**What you should observe:**
- Destination port: 80 (HTTP web server)
- Source port: Something in the 49152-65535 range (your computer's ephemeral port)

<details>
<summary>Show Expected Results</summary>

**Typical capture will show:**
```
Source IP: 192.168.1.X (your computer)
Source Port: 52341 (random high port)
Destination IP: 93.184.216.34 (example.com)
Destination Port: 80 (HTTP)
Protocol: TCP
```

The destination port is 80 because that's where the HTTP web server listens. Your computer uses a random high-numbered source port so multiple connections can happen simultaneously without conflict.
</details>

---

### **Challenge 2: Capture HTTPS Traffic**

**Step 1: Clear your previous capture**
- File → Close (or start a new capture)

**Step 2: Start new capture**
- Start capturing on your active interface

**Step 3: Generate HTTPS traffic**
- Visit https://www.google.com
- Search for something
- Browse to another HTTPS site

**Step 4: Stop and filter**
- Stop capturing
- Filter: `tcp.port == 443`

**Questions to answer:**

1. Can you read the content of HTTPS packets? Why or why not?
2. What port is used for HTTPS?
3. Look at multiple HTTPS connections - do they all use the same destination port?
4. What are the source ports? Are they the same or different?

**What you should observe:**
- All HTTPS traffic uses destination port 443
- Content is encrypted (you can't read website content)
- Each connection uses a different source port
- You can still see IP addresses and port numbers (encryption doesn't hide those)

<details>
<summary>Show Expected Results</summary>

**HTTPS capture shows:**
- Destination port: 443 (consistent for all HTTPS traffic)
- Source ports: Different for each connection (52341, 52342, 52343...)
- Protocol: TLS/SSL over TCP
- Info: You'll see "Client Hello" and "Server Hello" (TLS handshake), but encrypted application data

**Why can't you read the content?**
HTTPS encrypts the payload (the actual web page content), but the IP addresses and port numbers must remain visible so routers know where to send packets.
</details>

---

### **Challenge 3: Identify DNS Traffic**

DNS queries happen constantly in the background. Let's catch them!

**Step 1: New capture**
- Start fresh capture

**Step 2: Generate DNS queries**
- Open command prompt/terminal
- Run: `nslookup github.com`
- Run: `nslookup netflix.com`
- Run: `nslookup reddit.com`

**Step 3: Stop and filter**
- Stop capture
- Filter: `dns`

**Questions to answer:**

1. What port does DNS use?
2. Is DNS using TCP or UDP?
3. What is the destination IP for your DNS queries? (Hint: This is your DNS server)
4. Can you find the query and response pairs? (Query for github.com → Response with IP)

**Advanced:** Look at the packet details and expand the DNS section. Can you see the actual domain name you queried?

<details>
<summary>Show Expected Results</summary>

**DNS capture shows:**
```
Source IP: 192.168.1.X (your computer)
Source Port: Random high port
Destination IP: 192.168.1.1 or 8.8.8.8 (your DNS server)
Destination Port: 53
Protocol: UDP (usually)
```

**Query packet info:**
- Standard query: github.com A (requesting IPv4 address)

**Response packet info:**
- Standard query response: 140.82.121.4 (GitHub's IP)

You can see the entire DNS conversation in plain text because DNS isn't encrypted (though DNS over HTTPS on port 443 is becoming common).
</details>

---

### **Challenge 4: Find Email Traffic**

If you use a desktop email client (Outlook, Thunderbird, Apple Mail), let's see those ports!

**If you DON'T have a desktop email client, skip to Challenge 5.**

**Step 1: Start capture**

**Step 2: Check email**
- Open your email client
- Click "Send/Receive" or wait for automatic check

**Step 3: Stop and filter**
- Try these filters one at a time:
  - `tcp.port == 25` (SMTP - sending)
  - `tcp.port == 110` (POP3 - receiving)
  - `tcp.port == 143` (IMAP - receiving)
  - `tcp.port == 993` (IMAPS - secure receiving)

**Questions to answer:**

1. Which email protocol(s) is your email client using?
2. Is it using secure versions (IMAPS, SMTPS)?
3. What is the destination IP? (Your mail server)

**Note:** Many modern email clients use HTTPS web interfaces instead of traditional email protocols. If you don't see SMTP/IMAP/POP3 traffic, that's normal!

---

### **Challenge 5: Catch DHCP in Action**

DHCP is tricky to capture because it happens at network connection time. Let's trigger it!

**Step 1: Start capture**

**Step 2: Renew your IP**
- **Windows:** Open command prompt as administrator, run:
  ```
  ipconfig /release
  ipconfig /renew
  ```
- **Mac:** System Preferences → Network → Advanced → TCP/IP → Renew DHCP Lease
- **Linux:** 
  ```
  sudo dhclient -r
  sudo dhclient
  ```

**Step 3: Stop and filter**
- Filter: `dhcp` or `udp.port == 67 or udp.port == 68`

**Questions to answer:**

1. Can you see the DORA process? (Discover, Offer, Request, Acknowledge)
2. Which port is the client (your computer)? Which is the server?
3. What IP address did the server offer you?
4. Is DHCP using TCP or UDP?

<details>
<summary>Show Expected Results</summary>

**DHCP capture shows the DORA process:**

**Discover:**
```
Source: 0.0.0.0:68 (client has no IP yet)
Destination: 255.255.255.255:67 (broadcast to find DHCP server)
Message: DHCP Discover
```

**Offer:**
```
Source: 192.168.1.1:67 (DHCP server)
Destination: 255.255.255.255:68 (broadcast back)
Message: DHCP Offer
Your IP: 192.168.1.100 (offered IP)
```

**Request:**
```
Source: 0.0.0.0:68 (still no IP)
Destination: 255.255.255.255:67 (broadcast)
Message: DHCP Request (accepting offered IP)
```

**Acknowledge:**
```
Source: 192.168.1.1:67 (server)
Destination: 255.255.255.255:68 (broadcast)
Message: DHCP ACK (confirmed!)
```

**Port 68 = client, Port 67 = server. UDP is used because DHCP needs to work before TCP connections can be established.**
</details>

---

## Part 3: Alternative Method (Without Wireshark)

If you can't install Wireshark, you can still investigate ports using built-in command-line tools!

### **Using netstat (Windows, Mac, Linux)**

**netstat** shows active network connections and the ports they're using.

### **Challenge 6: View Active Connections**

**Windows:**
```
netstat -an
```

**Mac/Linux:**
```
netstat -an
```
or
```
ss -tuln
```

**What you'll see:**

```
Proto  Local Address          Foreign Address        State
TCP    192.168.1.100:52341    142.250.185.46:443     ESTABLISHED
TCP    192.168.1.100:52342    140.82.121.4:22        ESTABLISHED
TCP    0.0.0.0:445            0.0.0.0:0              LISTENING
UDP    0.0.0.0:53             *:*
```

**How to read this:**

**Line 1:** Your computer (192.168.1.100:52341) is connected to 142.250.185.46 on port 443 (HTTPS)
- This is active web browsing

**Line 2:** Your computer (192.168.1.100:52342) is connected to 140.82.121.4 on port 22 (SSH)
- This might be an SSH connection to GitHub or a server

**Line 3:** Your computer is LISTENING on port 445 (SMB)
- It's ready to accept file sharing connections

**Line 4:** Your computer is listening on port 53 (DNS)
- Maybe you're running a local DNS service

### **Challenge 7: Identify Your Running Services**

**Task:** Run netstat and identify:

1. Any web browsers you have open (look for ports 80 or 443)
2. Any file sharing connections (port 445)
3. Any SSH connections (port 22)
4. Any Remote Desktop connections (port 3389)

**Questions to answer:**

1. What is your most common destination port?
2. How many connections use port 443?
3. Are there any unexpected ports open on your computer?
4. Which services are LISTENING vs ESTABLISHED?

**States explained:**
- **LISTENING:** Your computer is waiting for connections on this port
- **ESTABLISHED:** Active connection
- **TIME_WAIT:** Connection recently closed, cleaning up
- **CLOSE_WAIT:** Connection is closing

---

### **Challenge 8: Monitor Connections in Real-Time**

**Windows:**
```
netstat -an 5
```
This refreshes every 5 seconds.

**Mac/Linux:**
```
watch -n 5 'netstat -an'
```

**Or use ss on Linux:**
```
watch -n 5 'ss -tuln'
```

**Task:**
1. Start the real-time monitoring
2. Open a web browser and visit a few websites
3. Watch new connections appear
4. Close the browser
5. Watch connections disappear (they'll go to TIME_WAIT, then vanish)

**What you're observing:**
- Each new webpage creates new connections
- Most connections use high-numbered source ports (ephemeral range)
- Destination ports are predictable (80, 443)
- Connections don't disappear instantly - they clean up gracefully

---

## Part 4: Protocol Detective Challenges

Now that you know how to capture traffic, let's solve some mysteries!

### **Mystery 1: What's Using Port 3389?**

You notice your computer has a connection to port 3389.

**Questions:**
1. What protocol uses port 3389?
2. Is your computer the client or the server?
3. What does this connection mean?
4. Is this secure?

<details>
<summary>Show Answer</summary>

**Port 3389 = RDP (Remote Desktop Protocol)**

If you see:
```
Local: 192.168.1.100:52341 → Remote: 10.0.0.50:3389
```
Your computer is the **client** connecting to a remote desktop server at 10.0.0.50. Someone (you) is remotely controlling another computer.

If you see:
```
Local: 192.168.1.100:3389 → Remote: 10.0.0.25:52341
```
Your computer is the **server** - someone is remotely controlling YOUR computer.

**Security:** RDP can be encrypted with TLS, but the port itself doesn't tell you if encryption is enabled. Default RDP without additional security is vulnerable.
</details>

---

### **Mystery 2: Sudden Spike in Port 53 Traffic**

Your network monitoring shows a massive spike in DNS queries (port 53 UDP).

**Questions:**
1. What could cause excessive DNS traffic?
2. Is this normal or suspicious?
3. How would you investigate further?

<details>
<summary>Show Answer</summary>

**Possible causes:**

**Normal:**
- Large web page with many external resources loading
- Application doing bulk domain lookups
- DNS cache flushed, causing many new queries

**Suspicious:**
- DNS tunneling (using DNS to exfiltrate data)
- Malware communicating via DNS
- DNS amplification DDoS attack

**How to investigate:**
- Look at query frequency (thousands per second = suspicious)
- Examine queried domains (random strings = suspicious)
- Check if queries get responses
- Monitor data volume (DNS queries should be small)
</details>

---

### **Mystery 3: Blocked Connection**

A user reports they can't access a website. You capture traffic and see:

```
Source: 192.168.1.100:52341
Destination: 93.184.216.34:443
TCP [SYN]
TCP [SYN]
TCP [SYN]
(No response)
```

**Questions:**
1. What is the client trying to do?
2. What does [SYN] mean?
3. Why is there no response?
4. What are possible causes?

<details>
<summary>Show Answer</summary>

**Analysis:**
- Client is trying to connect to HTTPS (port 443)
- [SYN] is the first step of TCP handshake
- Multiple [SYN] packets with no response = connection failing
- Normal response would be [SYN, ACK] from server

**Possible causes:**
1. **Firewall blocking port 443** (most likely if this only affects certain users/networks)
2. **Web server is down** (but usually responds with RST - reset)
3. **Routing problem** - packets aren't reaching destination
4. **IP address wrong** - DNS gave wrong IP
5. **ISP blocking** - some networks block certain sites

**How to troubleshoot further:**
- Try from different network (mobile hotspot)
- Check if DNS resolved correctly (`nslookup website.com`)
- Try pinging the IP address
- Check firewall logs
</details>

---

### **Mystery 4: Unauthorized Port Open**

Security scan shows port 23 (Telnet) is open and listening on a server.

**Questions:**
1. Why is this a security concern?
2. What should you do immediately?
3. What secure alternative should be used?

<details>
<summary>Show Answer</summary>

**Why this is dangerous:**
- Telnet (port 23) sends everything in plain text
- Passwords, commands, data - all visible to packet sniffers
- No authentication security
- Vulnerable to man-in-the-middle attacks

**Immediate actions:**
1. Close port 23 immediately
2. Audit who has access
3. Check logs for unauthorized access
4. Scan for other insecure services

**Secure alternative:**
- Replace with SSH (port 22)
- Encrypted traffic
- Better authentication (key-based)
- Audit logging built-in

**Modern principle:** Telnet should NEVER be open on production systems.
</details>

---

## Part 5: Port Scanning Ethics and Tools

**Important:** Port scanning your own devices = legal and educational. Port scanning others' devices without permission = illegal and unethical.

### **Challenge 9: Scan Your Own Computer**

**Using nmap (if installed):**

```
nmap localhost
```

or

```
nmap 127.0.0.1
```

**What you'll see:**
```
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
3306/tcp open  mysql
```

**Questions:**
1. Which ports are open on your computer?
2. What services are running?
3. Should all of these be open?
4. Are there any unexpected services?

**Note:** If you don't have nmap installed and want to try it:
- **Windows:** Download from [https://nmap.org/download.html](https://nmap.org/download.html)
- **Mac:** `brew install nmap`
- **Linux:** `sudo apt install nmap` or `sudo dnf install nmap`

---

## Lab Submission

To prove you completed this lab, provide:

### **Required Screenshots:**

1. **Wireshark HTTP capture** showing port 80 traffic with packet details expanded
2. **Wireshark HTTPS capture** showing port 443 with TLS encryption visible
3. **DNS capture** showing port 53 query and response
4. **DHCP capture** showing the DORA process (if you completed Challenge 5)
5. **netstat output** showing at least 5 active connections with identifiable ports

### **Written Analysis:**

Answer these questions in a document:

1. **What port numbers did you observe most frequently in your captures?**
2. **Explain the difference between source and destination ports using an example from your capture.**
3. **Why are client source ports in the high range (49152-65535) while server destination ports are low (0-1023)?**
4. **Describe one connection you captured. Include: protocol name, port number, what the application was doing.**
5. **Did you see any unexpected or suspicious traffic? What made it stand out?**
6. **How could port analysis help with network troubleshooting? Give a specific example.**
7. **Why is it important that HTTPS encrypts content but not port numbers?**

---

## Real-World Application

These aren't just academic exercises. Here's when network engineers use port analysis:

**Troubleshooting Scenarios:**

**"Users can't access the intranet website"**
→ Capture traffic, verify port 80/443 packets are reaching web server
→ If [SYN] packets have no response, firewall or server issue
→ If packets aren't leaving client, DNS or routing issue

**"Email not sending"**
→ Look for port 25 (SMTP) traffic
→ If no port 25 traffic, mail client misconfigured
→ If port 25 blocked, ISP might be blocking to prevent spam

**"Zoom calls keep dropping"**
→ Identify Zoom's ports in traffic
→ Check for packet loss on those ports
→ May reveal firewall interference or bandwidth issues

**"Suspicious network activity"**
→ Unknown connections on unusual ports
→ Excessive traffic on ports that should be quiet
→ Outbound connections to foreign IPs on random ports (possible malware)

**Security Auditing:**
→ Scan network for open ports
→ Identify unauthorized services (Telnet on port 23 = security risk)
→ Verify only necessary ports are exposed
→ Check for unencrypted protocols (HTTP instead of HTTPS)

---

## Going Further

Want to dive deeper?

**Advanced Wireshark Skills:**
- Follow TCP streams (right-click packet → Follow → TCP Stream)
- Export HTTP objects (File → Export Objects → HTTP)
- Create custom display filters (`tcp.flags.syn==1 and tcp.flags.ack==0`)
- Analyze packet timing and latency
- Decode encrypted traffic (if you have the keys)

**Port Scanning:**
- Learn nmap advanced options (`nmap -sV` for version detection)
- Understand stealth scanning techniques
- Practice on intentionally vulnerable VMs (never on live systems without permission)

**Network Monitoring:**
- Set up continuous packet capture for security monitoring
- Use tcpdump on Linux servers for remote capture
- Automate alerting on suspicious port activity

**Capture Challenges:**
- Capture VoIP traffic (SIP port 5060/5061)
- Find NetBIOS traffic (ports 137-139)
- Identify database connections (MySQL 3306, PostgreSQL 5432, MSSQL 1433)
- Catch FTP traffic and see credentials in plain text (demonstrates why FTP is insecure)

---

## What You Learned

✅ **How to install and use Wireshark** for packet analysis

✅ **Capturing and filtering network traffic** by protocol and port

✅ **Identifying protocols from port numbers** in real traffic

✅ **Understanding source vs destination ports** and ephemeral port ranges

✅ **Using netstat/ss** as command-line alternatives to Wireshark

✅ **Analyzing common protocols:** HTTP, HTTPS, DNS, DHCP in live captures

✅ **Troubleshooting network issues** using port analysis

✅ **Recognizing security risks** (Telnet, unencrypted protocols)

✅ **Real-world application** of port knowledge

---

**Excellent work, detective!** 🔍

You just analyzed real network traffic using professional tools. The ability to capture packets, identify protocols by their ports, and troubleshoot connectivity issues is a core skill for network engineers and security analysts.

**Add this to your portfolio.** Being able to say "I can use Wireshark to capture and analyze network traffic, identify protocols by port numbers, and troubleshoot connectivity issues" is valuable in job interviews.

**Keep Wireshark handy!** As you continue through the course, you'll use it to see routing, VLANs, security protocols, and more in action.

**Next up:** Now that you can see ports in action, the Memory Match game will make a lot more sense. Those abstract port numbers are now connected to real traffic you've captured and analyzed!