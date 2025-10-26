# Lab 1 Solution: OSI Model Layer Identification

## Part 1: Protocol Layer Identification - ANSWERS

1. **HTTP** → **Layer 7 (Application Layer)**
   - HTTP is an application-layer protocol for web communication

2. **TCP** → **Layer 4 (Transport Layer)**
   - TCP provides reliable, connection-oriented transport services

3. **IP** → **Layer 3 (Network Layer)**
   - IP handles logical addressing and routing between networks

4. **Ethernet** → **Layer 2 (Data Link Layer)**
   - Ethernet defines how data is formatted for transmission on the local network

5. **DNS** → **Layer 7 (Application Layer)**
   - DNS resolves domain names to IP addresses (application service)

6. **ARP** → **Layer 2 (Data Link Layer)** / **Layer 3 (Network Layer)**
   - ARP maps IP addresses (L3) to MAC addresses (L2) - operates between both

7. **SSL/TLS** → **Layer 6 (Presentation Layer)** / **Layer 7 (Application Layer)**
   - Provides encryption and session management between application and transport

8. **MAC Address** → **Layer 2 (Data Link Layer)**
   - Physical addressing used for local network communication

9. **Router** → **Layer 3 (Network Layer)** primarily
   - Routes packets between networks using IP addresses
   - Some advanced routers can operate at Layer 4-7 (application-aware routing)

10. **Switch** → **Layer 2 (Data Link Layer)** primarily
    - Forwards frames based on MAC addresses
    - Layer 3 switches can also route at the Network layer

---

## Part 2: Data Flow Tracing - SOLUTION

### Sending: Your Computer → Web Server (https://www.example.com)

**Layer 7 (Application):**
- Your browser creates an HTTPS request (HTTP over TLS)
- Protocol: HTTP/HTTPS
- Data added: HTTP method (GET), headers (User-Agent, Accept, etc.), cookies

**Layer 6 (Presentation):**
- TLS encrypts the HTTP data
- Protocol: TLS/SSL
- Data added: Encryption parameters, session keys, certificates

**Layer 5 (Session):**
- TLS establishes and maintains the secure session
- Protocol: TLS session management
- Data added: Session identifiers, session state

**Layer 4 (Transport):**
- TCP segments the encrypted data and adds reliability features
- Protocol: TCP
- Data added: Source port (random high port), destination port (443 for HTTPS), sequence numbers, acknowledgment numbers, TCP flags

**Layer 3 (Network):**
- IP adds routing information
- Protocol: IPv4 or IPv6
- Data added: Source IP address (your computer), destination IP address (example.com's IP from DNS), TTL, protocol field (6 for TCP)

**Layer 2 (Data Link):**
- Ethernet frames the packet
- Protocol: Ethernet
- Data added: Source MAC address (your network card), destination MAC address (your router/gateway), frame type, FCS (Frame Check Sequence)

**Layer 1 (Physical):**
- Network card converts digital data to electrical/optical signals
- Protocol: Physical medium (Ethernet standards like 1000BASE-T)
- Data added: Preamble, sync bits, electrical signals on the wire

---

### Receiving: Web Server → Your Computer

**Layer 1 (Physical):**
- Network card receives electrical/optical signals
- Converts signals to digital bits
- No data removed, but signals are converted to binary

**Layer 2 (Data Link):**
- Ethernet frame is checked and de-encapsulated
- Verifies FCS to ensure no corruption
- Data removed: Source/destination MAC addresses, Ethernet headers
- Frame is discarded if MAC doesn't match

**Layer 3 (Network):**
- IP packet is extracted and examined
- Routing decision: Is this packet for me? (checks destination IP)
- Data removed: IP headers (source/destination IP, TTL, etc.)
- Packet passed to transport layer

**Layer 4 (Transport):**
- TCP segment is processed
- Checks port numbers (should be 443), sequence numbers
- Sends ACK back to server
- Data removed: TCP headers (ports, sequence numbers, flags)
- Reassembles data if needed

**Layer 5 (Session):**
- TLS session is verified and maintained
- Session state is checked
- Manages the ongoing secure connection

**Layer 6 (Presentation):**
- TLS decrypts the data
- Data removed: Encryption wrappers
- Plain HTTP data is now available

**Layer 7 (Application):**
- Browser receives HTTP response
- Parses HTML, CSS, JavaScript
- Renders the webpage for the user
- Data processed: HTTP status codes, headers, content

---

## Part 3: Troubleshooting Scenarios - SOLUTIONS

### Scenario 1: Can't resolve domain name, but can ping IPs
**Answer: Layer 7 (Application Layer) - DNS issue**

**Why:**
- Ping uses IP addresses directly (Layer 3)
- DNS resolution is an application-layer service (Layer 7)
- Since L3 connectivity works (can ping 8.8.8.8), but DNS doesn't work, the issue is at L7
- Possible causes: DNS server unreachable, DNS misconfiguration, firewall blocking DNS (port 53)

**Troubleshooting:**
```bash
# Check DNS configuration
nslookup www.google.com
nslookup www.google.com 8.8.8.8  # Try Google's DNS

# Check if DNS port 53 is accessible
telnet 8.8.8.8 53
```

---

### Scenario 2: Can ping but SSH times out
**Answer: Layer 4 (Transport Layer) - Port/Firewall issue**

**Why:**
- Ping uses ICMP (Layer 3), which works
- SSH uses TCP port 22 (Layer 4)
- Since lower layers work (can ping), but the transport connection fails, it's L4
- Possible causes: Firewall blocking port 22, SSH service not running, TCP connection refused

**Troubleshooting:**
```bash
# Check if port 22 is open
telnet server_ip 22
nmap -p 22 server_ip

# Check SSH service status on server
systemctl status sshd
```

---

### Scenario 3: Packets corrupted during transmission
**Answer: Layer 1 (Physical Layer) - Cable/hardware issue**

**Why:**
- Data corruption during transmission indicates physical medium problems
- Could be damaged cable, EMI interference, faulty NIC
- Happens before any protocol processing

**Troubleshooting:**
- Replace cable
- Check cable tester for shorts/breaks
- Move cable away from electromagnetic interference sources
- Check NIC statistics for CRC errors

---

### Scenario 4: Network card not detected by OS
**Answer: Layer 1 (Physical Layer) - Hardware issue**

**Why:**
- Device isn't even recognized at the hardware level
- OS can't see the physical device
- No software/protocol can function if hardware isn't detected

**Troubleshooting:**
- Check BIOS/UEFI to see if card is detected
- Reseat the network card
- Check if card is enabled in device manager
- Install/update drivers
- Test card in another computer

---

### Scenario 5: Firewall blocking specific website
**Answer: Layer 7 (Application Layer) - Deep packet inspection**

**Why:**
- Modern firewalls can inspect application-layer data (HTTP, HTTPS, etc.)
- Blocking a specific website requires understanding URLs/domains (L7)
- Could also involve DNS blocking (also L7)
- Some firewalls work at L3/L4 too, but website-specific blocking is L7

**Note:** Older firewalls might block at L3 (IP) or L4 (port), but website-specific blocking requires L7 inspection.

---

## Part 4: Real-World Application - SOLUTION

### Troubleshooting Plan: User can't access company intranet

#### Layer 1 (Physical)
**Check:**
- Is the network cable plugged in?
- Are there any damaged cables?
- Is the network port working?

**Tools:**
- Visual inspection
- Cable tester
- Check NIC LED lights (should blink with activity)

**Success criteria:**
- Cable connected properly
- NIC shows link light
- No physical damage

---

#### Layer 2 (Data Link)
**Check:**
- Is the network card enabled?
- Does the NIC have a valid MAC address?
- Is the switch port active?

**Tools:**
```bash
# Windows
ipconfig /all
getmac

# Linux
ip link show
ifconfig
```

**Success criteria:**
- NIC shows "Up" status
- Valid MAC address displayed
- No Layer 2 errors in NIC statistics

---

#### Layer 3 (Network)
**Check:**
- Does the user have an IP address?
- Is it on the correct subnet?
- Can they ping the default gateway?
- Can they ping the intranet server?

**Tools:**
```bash
# Check IP configuration
ipconfig  # Windows
ip addr   # Linux

# Test connectivity
ping 192.168.1.1       # Default gateway
ping 192.168.1.50      # Intranet server IP
tracert 192.168.1.50   # Trace route to server
```

**Success criteria:**
- Valid IP address (not 169.254.x.x - APIPA)
- Correct subnet mask
- Correct default gateway
- Can ping gateway and server

---

#### Layer 4 (Transport)
**Check:**
- Is the intranet service using the correct port (80 for HTTP, 443 for HTTPS)?
- Is a firewall blocking the port?
- Is the port accessible?

**Tools:**
```bash
# Test port connectivity
telnet 192.168.1.50 80
nmap -p 80 192.168.1.50

# Check local firewall
netsh advfirewall show allprofiles  # Windows
iptables -L                          # Linux
```

**Success criteria:**
- Port 80/443 is open
- No firewall blocking rules
- Can establish TCP connection

---

#### Layer 5-6 (Session/Presentation)
**Check:**
- Are there any SSL/TLS certificate issues?
- Is encryption negotiation failing?

**Tools:**
- Browser developer tools (F12 → Console)
- Check for certificate warnings
- OpenSSL to test SSL/TLS

**Success criteria:**
- No certificate errors
- SSL/TLS handshake successful
- No encryption warnings

---

#### Layer 7 (Application)
**Check:**
- Is the web server running?
- Is the correct URL being used?
- Are there any authentication issues?
- Is DNS resolving correctly?
- Does the user have permissions?

**Tools:**
```bash
# DNS check
nslookup intranet.company.local

# HTTP request check
curl -v http://intranet.company.local
```

**Success criteria:**
- DNS resolves correctly
- Server responds with HTTP 200
- No authentication errors
- User has proper permissions

---

### Most Likely Causes (Ordered by Probability)

1. **Layer 7:** Incorrect URL, DNS not resolving intranet hostname, browser cache issue
2. **Layer 3:** Incorrect IP configuration, can't reach server's subnet
3. **Layer 4:** Firewall blocking HTTP/HTTPS ports
4. **Layer 2:** NIC disabled or not connected
5. **Layer 1:** Cable unplugged

---

### Recommended Troubleshooting Order

1. **Quick wins first:**
   - Check cable connection (L1)
   - Verify NIC is enabled (L2)
   - Check IP configuration (L3)

2. **Test connectivity:**
   - Ping gateway (L3)
   - Ping intranet server (L3)

3. **Check application:**
   - Verify correct URL (L7)
   - Test DNS resolution (L7)
   - Try accessing by IP instead of hostname (L7)

4. **Check security:**
   - Firewall rules (L4)
   - Antivirus blocking (L4/L7)
   - Proxy settings (L7)

5. **Ask other users:**
   - If others can access, likely user-specific (L7 - permissions, browser cache)
   - If no one can access, likely server issue

---

## Key Takeaways

1. **Always troubleshoot systematically** - Start at Layer 1 or Layer 7 (depends on symptoms) and work through layers
2. **Each layer has specific protocols** - Knowing which layer a protocol operates at helps isolate issues
3. **Use the right tools for each layer** - Ping (L3), traceroute (L3), telnet/nc (L4), curl (L7)
4. **Encapsulation matters** - Understanding how data is wrapped/unwrapped helps trace problems
5. **Physical issues are often overlooked** - "Is it plugged in?" is a valid first question

---

## Going Further

Try these exercises to master OSI troubleshooting:

1. Create your own scenarios at each layer
2. Set up a home lab and intentionally break things at different layers
3. Practice with Wireshark to see encapsulation in action
4. Learn more about how firewalls operate at different layers

---

**Congratulations!** You've completed Lab 1. You should now be able to:
- ✅ Identify which OSI layer handles specific protocols
- ✅ Trace data flow through the OSI model
- ✅ Apply systematic troubleshooting using the OSI framework
- ✅ Choose appropriate tools for each layer

**XP Earned:** 50 XP 🌟
