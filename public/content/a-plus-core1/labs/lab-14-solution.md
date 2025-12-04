# Lab 14: SOHO Router Configuration - Solution Guide

**Note to Students:** Only review this AFTER exploring your own router settings! Hands-on experience is essential.

---

## Section 1: Concept Check - Answers

**1. What is NAT (Network Address Translation), and why is it essential for home networks?**

**Answer:**

**NAT** translates private IP addresses to a single public IP address (and vice versa), allowing multiple devices to share one internet connection.

**How it works:**

```
Internal Network                    Router (NAT)                 Internet
192.168.1.10  ─┐                                              
192.168.1.11  ─┼─►  [NAT Translation]  ─►  203.0.113.50  ─►  Websites
192.168.1.12  ─┘    (tracks which device                     
                     requested what)
```

**Why essential:**

| Reason | Explanation |
|--------|-------------|
| IPv4 shortage | Only ~4.3 billion public IPs, not enough for every device |
| Cost savings | One public IP serves entire household |
| Security | Internal IPs hidden from internet |
| Simplicity | Devices don't need public IP configuration |

**NAT types for A+ exam:**
- **Static NAT:** One-to-one mapping (one public IP per device)
- **Dynamic NAT:** Pool of public IPs shared
- **PAT (Port Address Translation):** Many devices share one IP (most common for home)

---

**2. Explain the difference between port forwarding and DMZ, and when you would use each.**

**Answer:**

| Feature | Port Forwarding | DMZ |
|---------|-----------------|-----|
| Ports exposed | Specific ports only | ALL ports |
| Configuration | Precise, per-port rules | One IP, everything open |
| Security | Higher (limited exposure) | Lower (full exposure) |
| Complexity | More work to set up | Easy, one setting |
| Use case | Specific services (web server, game) | Testing, or devices needing many ports |

**When to use port forwarding:**
- Running a specific server (Minecraft, web, Plex)
- Remote desktop access
- Security cameras
- Any time you know exactly which ports are needed

**When to use DMZ:**
- Troubleshooting port issues (temporary)
- Devices that need many unpredictable ports
- Gaming consoles (though port forwarding is safer)
- **Never for regular computers**

**Example:**

Web server needs only ports 80 and 443 → **Port forwarding**

Gaming console with 50 different games using random ports → **Consider DMZ** (or UPnP)

---

**3. Why should you always change the default administrator password on a router?**

**Answer:**

**Risks of default password:**

| Risk | Consequence |
|------|-------------|
| Known credentials | Default passwords are publicly listed online |
| Easy target | Attackers try admin/admin, admin/password first |
| Network takeover | Attacker can change all settings |
| DNS hijacking | Redirect your traffic to malicious sites |
| Botnet recruitment | Router becomes part of attack network |
| Backdoor access | Attacker maintains persistent access |

**Default passwords are public:**

| Router Brand | Common Default |
|--------------|----------------|
| Linksys | admin / admin |
| Netgear | admin / password |
| D-Link | admin / (blank) |
| TP-Link | admin / admin |

**What attackers can do:**
1. Change DNS to phishing servers
2. Enable remote management
3. Monitor all traffic
4. Create port forwards to internal devices
5. Disable security features
6. Lock you out of your own router

---

**4. What is the purpose of DHCP reservation, and when would you use it instead of a static IP on the device?**

**Answer:**

**DHCP reservation** assigns a specific IP address to a device based on its MAC address, while still using DHCP.

**Reservation vs Static IP:**

| Aspect | DHCP Reservation | Static IP on Device |
|--------|------------------|---------------------|
| Configured where | Router | Individual device |
| Centralized management | Yes | No |
| Device knows its IP how | DHCP request | Manual configuration |
| DNS/Gateway auto-updated | Yes | No (manual update needed) |
| Works if device moves | IP changes at new location | Must reconfigure |

**When to use reservation:**

| Scenario | Reservation | Static | Why |
|----------|-------------|--------|-----|
| Network printer | ✓ | | Central management |
| Server that rarely moves | | ✓ | Doesn't depend on router |
| Smart home devices | ✓ | | Easy management |
| Laptop that travels | Neither | | Different networks |
| Security cameras | ✓ | | Central management |
| Router itself | N/A | ✓ | Gateway can't use DHCP |

**Best practice:** Use reservations when you want consistent IPs but still want central management from the router.

---

**5. A user enables UPnP on their router for gaming convenience. What security risk does this create?**

**Answer:**

**UPnP (Universal Plug and Play)** allows devices to automatically open ports on the router without user intervention.

**Security risks:**

| Risk | Explanation |
|------|-------------|
| Malware can open ports | Infected device requests port forward for attacker |
| No authentication | Any device can request ports, no password needed |
| No user notification | Ports open silently in background |
| Botnet access | Malware creates external access to your network |
| Lateral movement | Attackers use opened ports to access other devices |

**Real-world attacks:**

1. **Mirai botnet** - Exploited UPnP to compromise routers
2. **Flash UPnP attack** - Malicious website triggers UPnP from browser
3. **CallStranger** - UPnP vulnerability for data exfiltration

**Recommendations:**

| User Type | Recommendation |
|-----------|----------------|
| Gamers | Enable, but keep devices patched |
| Business | Disable, use manual port forwarding |
| High security | Disable completely |
| Smart home heavy | Enable with monitoring |

**Safer alternatives:**
- Manual port forwarding for known services
- VPN for remote access
- Game console's specific port forwarding guides

---

## Section 2: Activity Solutions

### Activity A-B: Router Access and Settings

**Common default gateway addresses:**

| Router Brand | Common Gateway |
|--------------|----------------|
| Linksys | 192.168.1.1 |
| Netgear | 192.168.1.1 or 192.168.0.1 |
| D-Link | 192.168.0.1 |
| ASUS | 192.168.1.1 |
| TP-Link | 192.168.0.1 or 192.168.1.1 |
| ISP routers | Varies (check sticker) |

**WAN Connection Types:**

| Type | How It Works | When Used |
|------|--------------|-----------|
| DHCP | Router gets IP from ISP automatically | Most cable/fiber |
| Static | Manually configure ISP-provided IP | Business connections |
| PPPoE | Username/password to ISP | DSL, some fiber |

---

### Activity C: DHCP Configuration Reference

**Typical home DHCP settings:**

| Setting | Common Default | Purpose |
|---------|----------------|---------|
| DHCP enabled | Yes | Auto IP assignment |
| Start IP | x.x.x.100 | First DHCP address |
| End IP | x.x.x.200 | Last DHCP address |
| Subnet mask | 255.255.255.0 | /24 network |
| Lease time | 24 hours | How long IP is valid |
| DNS servers | Router IP or ISP | Name resolution |

**DHCP pool planning:**

```
Network: 192.168.1.0/24

Reserved for infrastructure: .1 - .19
  - .1 = Router
  - .2 = Switch (if managed)
  - .3 = Access point
  - .10-.19 = Future infrastructure

Reserved for static/reservations: .20 - .99
  - .20-.29 = Servers
  - .30-.49 = Printers
  - .50-.79 = Cameras/IoT
  - .80-.99 = Reserved

DHCP Pool: .100 - .250
  - Regular client devices

Reserved: .251 - .254
  - Management/emergency
```

---

### Activity D: DHCP Reservations Reference

**Devices that benefit from reservations:**

| Device | Why Consistent IP Matters |
|--------|--------------------------|
| Network printer | Users print to IP address |
| NAS | Backups and access need stable address |
| Smart home hub | Integrations often use IP |
| Gaming console | Port forwarding needs known IP |
| Security cameras | NVR connects to specific IPs |
| Media server (Plex) | Remote access configuration |

**Reservation vs Static IP:**

| Use Reservation When | Use Static When |
|---------------------|-----------------|
| Managing many devices | Server that can't depend on DHCP |
| Want central control | Device needs IP before network is up |
| Devices that might move | Infrastructure (router, switch) |
| DHCP provides other info (DNS, gateway) | Isolated network segment |

---

### Activity E: Wireless Configuration Reference

**Optimal wireless settings:**

| Setting | Recommended Value | Why |
|---------|-------------------|-----|
| Security mode | WPA3 or WPA2-AES | Strongest encryption |
| 2.4 GHz channel | 1, 6, or 11 | Non-overlapping |
| 5 GHz channel | Any (more options) | Less interference |
| Channel width (2.4) | 20 MHz | Stability over speed |
| Channel width (5) | 40 or 80 MHz | Speed (less congestion) |
| SSID broadcast | On | Hidden provides no security |
| WPS | Disabled | Known vulnerabilities |

**Why channels 1, 6, 11 only for 2.4 GHz:**

2.4 GHz channels overlap. Only 1, 6, and 11 don't interfere with each other. Using channel 3, 4, or 9 causes interference with neighbors.

```
Channel:  1   2   3   4   5   6   7   8   9  10  11
          [=======]           [=======]      [=======]
              1                   6             11
```

---

### Activity F: Guest Network Reference

**Benefits of guest networks:**

1. **Isolation** - Guests can't access your devices (NAS, printers, cameras)
2. **Security** - Compromised guest device can't attack main network
3. **Bandwidth control** - Can limit guest speeds
4. **Easy password sharing** - Give out guest password without compromising main network
5. **Accountability** - Know which network an issue came from

**Guest network best practices:**

| Setting | Recommended | Why |
|---------|-------------|-----|
| Different password | Yes | Main password stays private |
| Client isolation | On | Guests can't see each other |
| Local network access | Off | Can't reach your devices |
| Bandwidth limit | Optional | Prevent guest hogging bandwidth |
| Time limits | Optional | Auto-disable at night |

---

### Activity G: Port Forwarding Reference

**Common port forwarding examples:**

| Service | External Port | Internal Port | Protocol | Notes |
|---------|---------------|---------------|----------|-------|
| Web server (HTTP) | 80 | 80 | TCP | Consider HTTPS instead |
| Web server (HTTPS) | 443 | 443 | TCP | Secure web traffic |
| Remote Desktop | 3389 | 3389 | TCP | Security risk - use VPN instead |
| SSH | 22 | 22 | TCP | Change to non-standard port |
| Minecraft | 25565 | 25565 | TCP | Default Minecraft port |
| Plex | 32400 | 32400 | TCP | Media streaming |
| Security camera | 8080 | 80 | TCP | Remap to hide default port |

**Port forwarding security risks:**

1. **Exposed service** - Anyone can try to connect
2. **Brute force** - Password attacks on exposed services
3. **Vulnerabilities** - Unpatched services can be exploited
4. **Reconnaissance** - Attackers can scan for open ports

**Safer alternatives:**

1. **VPN** - Connect to network first, then access services
2. **Cloud solutions** - Plex.tv, manufacturer's remote apps
3. **Reverse proxy** - Nginx/Cloudflare Tunnel for web services
4. **SSH tunneling** - Encrypted tunnel for specific services

---

### Activity H: DMZ Reference

**DMZ vs Port Forwarding:**

| Feature | Port Forwarding | DMZ |
|---------|-----------------|-----|
| Ports exposed | Only specified | All 65,535 |
| Security | Minimized attack surface | Maximum attack surface |
| Use case | Specific known services | Testing or many random ports |
| Recommended | Yes, when possible | Only as last resort |

**When DMZ might be acceptable:**

| Device | DMZ Acceptable? | Why |
|--------|-----------------|-----|
| Gaming console | Maybe | Many games, changing ports |
| Windows PC | Never | Too many vulnerabilities |
| IoT device | Maybe | If isolated and necessary |
| Server | No | Use specific port forwarding |
| Test device | Yes | Temporary for troubleshooting |

**Why never put a Windows PC in DMZ:**

Windows has thousands of services and potential vulnerabilities. Exposing all ports means:
- Remote Desktop exposed
- SMB/file sharing exposed
- Windows services with vulnerabilities exposed
- Massive attack surface

---

### Activity I: NAT and UPnP Reference

**NAT Types:**

| Type | Description | Gaming Impact |
|------|-------------|---------------|
| Open (Type 1) | Direct connection, all ports open | Best - no restrictions |
| Moderate (Type 2) | NAT with some ports open | Good - most games work |
| Strict (Type 3) | Restrictive NAT, limited ports | Poor - connection issues |

**UPnP considerations:**

| Benefit | Risk |
|---------|------|
| Automatic port management | Malware can open ports |
| No manual configuration | No user approval needed |
| Games work automatically | Silent, no notifications |
| Reduces support calls | Potential botnet recruitment |

**Recommendation by user type:**

| User | UPnP Setting | Alternative |
|------|--------------|-------------|
| Heavy gamer | Enable | Or manual port forwarding |
| Business | Disable | Manual forwarding only |
| Security-conscious | Disable | VPN + manual forwarding |
| Smart home user | Enable | Monitor connected devices |

---

### Activity J: QoS Reference

**QoS priority recommendations:**

| Traffic Type | Priority | Bandwidth | Reason |
|--------------|----------|-----------|--------|
| VoIP/Video calls | Highest | Guaranteed minimum | Real-time, no buffering |
| Gaming | High | Low latency priority | Interactive |
| Video streaming | Medium-High | Consistent bandwidth | Buffered, but needs throughput |
| Web browsing | Medium | Best effort | Tolerant of small delays |
| Large downloads | Low | Limited or throttled | Not time-sensitive |
| Software updates | Lowest | Scheduled/throttled | Background task |

**Household QoS example:**

| Device | Priority | Max Bandwidth |
|--------|----------|---------------|
| Work laptop | Highest | 50% guaranteed |
| Gaming console | High | 25% |
| Streaming TV | Medium | 25% |
| All other devices | Normal | Shared remainder |
| Guest network | Low | 10 Mbps max |

---

### Activity L: Firmware and Security Reference

**Firmware update importance:**

| Issue Fixed | Risk of Not Updating |
|-------------|---------------------|
| Security vulnerabilities | Router compromise |
| Bug fixes | Crashes, instability |
| Performance improvements | Slow speeds |
| New features | Missing functionality |
| Compatibility | Devices may not work |

**Router security maintenance schedule:**

| Task | Frequency | Time Required |
|------|-----------|---------------|
| Check firmware | Monthly | 5 minutes |
| Review devices | Weekly | 2 minutes |
| Change Wi-Fi password | Yearly | 10 minutes |
| Change admin password | Yearly | 2 minutes |
| Backup configuration | After changes | 2 minutes |
| Review port forwards | Quarterly | 5 minutes |

---

### Activity M: Troubleshooting Reference

**No Internet (WAN light off):**

1. Check modem - is it online?
2. Verify cable from modem to router WAN port
3. Try different cable
4. Restart modem, wait 2 minutes, then restart router
5. Check ISP status (use phone data)
6. Verify WAN settings (DHCP/PPPoE credentials)

**Slow Wi-Fi troubleshooting:**

| Check | How | Fix |
|-------|-----|-----|
| Too many devices | Router client list | Remove unused devices |
| Channel congestion | Wi-Fi analyzer app | Switch channel |
| Distance | Signal strength test | Move closer or add AP |
| Interference | Check nearby devices | Move router |
| Old firmware | Router admin page | Update firmware |
| 2.4 vs 5 GHz | Test both | Use 5 GHz when possible |

**Device gets 169.254.x.x:**

1. Check if DHCP is enabled on router
2. Verify DHCP pool isn't exhausted
3. Check if device is on correct network/VLAN
4. Try: `ipconfig /release` then `ipconfig /renew`
5. Check for IP conflicts
6. Restart DHCP service on router

**Port forwarding not working:**

| Check | How to Verify | Fix |
|-------|---------------|-----|
| Rule configured correctly | Router port forward list | Verify ports and IP |
| Internal IP still valid | Check device IP | Update or use reservation |
| Device firewall | Disable temporarily | Allow incoming on port |
| ISP blocking port | Test from outside network | Try different port |
| Double NAT | Check for two routers | Bridge mode or remove one |

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Business Guest Wi-Fi Setup

**Required settings:**

| Setting | Configuration | Why |
|---------|---------------|-----|
| Separate SSID | "CompanyName-Guest" | Clear identification |
| Different password | Unique, shared with guests | Protect main network |
| Client isolation | Enabled | Guests can't see each other |
| Local network access | Disabled | Can't reach business systems |
| Bandwidth limit | 10-25 Mbps per user | Prevent impact on business |
| VLAN (if supported) | Separate VLAN | Network-level isolation |

**Security importance:**
- Guest devices are unknown security risk
- Prevents access to servers, printers, file shares
- Limits damage if guest device is compromised
- Compliance requirement for some industries

---

### Scenario 2: Security Cameras After Router Change

**Needs reconfiguration:**

1. **Port forwarding rules** - Old router had them, new router doesn't
2. **DHCP reservations** - Cameras may have different IPs now
3. **DDNS settings** - If using dynamic DNS

**Steps to fix:**

1. Find cameras' new IP addresses
2. Create DHCP reservations for cameras
3. Recreate port forwarding rules (camera's port → camera's IP)
4. Update DDNS if used
5. Update remote viewing app with new settings

---

### Scenario 3: Double NAT Problem

**What causes it:**

ISP router (with NAT) → Your router (with NAT) → Devices

Both routers are doing NAT, causing issues with:
- Port forwarding (which router receives the traffic?)
- Gaming (strict NAT type)
- VPN connections
- Some applications

**Two solutions:**

| Solution | How | Pros/Cons |
|----------|-----|-----------|
| Bridge mode | Set ISP router to bridge/passthrough | Your router handles everything; may lose some ISP features |
| Remove your router | Use ISP router only | Simple; but ISP router may lack features |
| DMZ to your router | Put your router's WAN IP in ISP router's DMZ | Both routers stay; full access to your router |

---

### Scenario 4: Parental Controls for Gaming

**Can typical routers do this?**

| Feature | Basic Router | Advanced Router | Third-Party Service |
|---------|--------------|-----------------|---------------------|
| Time limits | Sometimes | Usually | Yes |
| Per-device controls | Sometimes | Usually | Yes |
| Schedule-based blocking | Rarely | Often | Yes |
| Website filtering | Basic | Moderate | Extensive |

**Options:**

1. **Router's built-in controls** - Check parental settings
2. **DNS filtering** (OpenDNS, CleanBrowsing) - Category blocking
3. **Third-party firmware** (DD-WRT, OpenWRT) - More control
4. **Xbox Family Settings** - Device-level control
5. **Network management apps** (Firewalla, Circle) - Hardware add-on

**Best approach for this scenario:**
- Use Xbox Family Settings for Xbox-specific controls
- Router QoS to limit bandwidth during certain hours
- Combination of device + network controls

---

## Key Takeaways

**For the A+ Exam:**

1. **NAT** = Many private IPs share one public IP
2. **Port forwarding** = Specific ports to specific internal IPs
3. **DMZ** = All ports to one IP (security risk)
4. **DHCP reservation** = Consistent IP via MAC address
5. **UPnP** = Automatic port management (convenience vs security)
6. **QoS** = Bandwidth prioritization
7. **WPA2/WPA3** = Secure Wi-Fi (never WEP)
8. **Guest network** = Isolated network for visitors

**Security essentials:**
- Change default password
- Update firmware
- Disable WPS
- Use WPA2/WPA3
- Disable remote management

**For Real-World Skills:**

- Always document router configuration
- Use DHCP reservations for devices needing consistent IPs
- Port forward only what's necessary
- Test from outside the network after changes
- Backup router config before firmware updates
- Check connected devices regularly

---

**Congratulations on completing Lab 14!**

SOHO router configuration is a core skill for A+ certification and real-world IT support. You'll configure routers frequently in both home and small business environments.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 14: SOHO Router Configuration - Solution Guide*