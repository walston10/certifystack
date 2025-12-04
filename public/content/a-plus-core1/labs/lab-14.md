# Lab 14: SOHO Router Configuration

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 2.5 - Given a scenario, install and configure basic wired/wireless SOHO networks

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is NAT (Network Address Translation), and why is it essential for home networks?**

2. **Explain the difference between port forwarding and DMZ, and when you would use each.**

3. **Why should you always change the default administrator password on a router?**

4. **What is the purpose of DHCP reservation, and when would you use it instead of a static IP on the device?**

5. **A user enables UPnP on their router for gaming convenience. What security risk does this create?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses your own router** - Explore real router configuration interfaces.

---

#### Activity A: Access Your Router's Admin Interface

**Goal:** Log into your router and explore its settings.

**Find your router's IP address:**

**Windows:**
```
ipconfig
```
Look for "Default Gateway"

**Mac:**
```
netstat -nr | grep default
```

**Linux:**
```
ip route | grep default
```

**Your default gateway:** _______________

**Access the admin interface:**

1. Open a web browser
2. Type your gateway IP in the address bar
3. You should see a login page

**Document your router:**

| Detail | Your Router |
|--------|-------------|
| Manufacturer | |
| Model | |
| Gateway IP | |
| Default username (from manual/sticker) | |
| Admin interface URL | |

**⚠️ Important:** If you don't know the password and can't log in, you can still complete most activities by researching your router model's interface online.

---

#### Activity B: Basic Router Settings

**Goal:** Understand core router configuration options.

**Find and document these settings:**

| Setting | Location in Menu | Current Value |
|---------|------------------|---------------|
| Router name/hostname | | |
| Admin password changed? | | [ ] Yes [ ] No |
| Firmware version | | |
| WAN IP address | | |
| WAN connection type | | |
| LAN IP address | | |
| Subnet mask | | |
| Time zone | | |
| Automatic firmware update | | [ ] On [ ] Off |

**WAN Connection Types:**

Check which type your router uses:

- [ ] DHCP (automatic from ISP)
- [ ] Static IP (manually configured)
- [ ] PPPoE (requires username/password)
- [ ] Other: _______________

**Security check:**

| Item | Status | Action Needed |
|------|--------|---------------|
| Default password changed | [ ] Yes [ ] No | |
| Firmware up to date | [ ] Yes [ ] No | |
| Remote management disabled | [ ] Yes [ ] No | |
| WPS disabled | [ ] Yes [ ] No | |

---

#### Activity C: DHCP Configuration

**Goal:** Understand and configure DHCP settings.

**Find your DHCP settings:**

| Setting | Current Value | Purpose |
|---------|---------------|---------|
| DHCP enabled | [ ] Yes [ ] No | |
| Start IP address | | |
| End IP address | | |
| Subnet mask | | |
| Lease time | | |
| DNS servers | | |

**Calculate your DHCP pool:**

| Question | Answer |
|----------|--------|
| Start IP | |
| End IP | |
| How many addresses in pool? | |
| IPs reserved for static (before pool) | |
| IPs reserved for static (after pool) | |

**Example analysis:**

If DHCP range is 192.168.1.100 to 192.168.1.200:
- Pool size: 101 addresses
- Reserved before: .1 to .99 (99 addresses for static)
- Reserved after: .201 to .254 (54 addresses)

**Your DHCP pool analysis:**

_________________________________________________________________

---

#### Activity D: DHCP Reservations

**Goal:** Create address reservations for specific devices.

**Find connected devices:**

Most routers show a list of connected clients. Document yours:

| Device Name | IP Address | MAC Address | Connection Type |
|-------------|------------|-------------|-----------------|
| | | | [ ] Wired [ ] Wireless |
| | | | [ ] Wired [ ] Wireless |
| | | | [ ] Wired [ ] Wireless |
| | | | [ ] Wired [ ] Wireless |
| | | | [ ] Wired [ ] Wireless |

**Devices that should have reservations:**

| Device Type | Why Reservation? | Suggested IP |
|-------------|------------------|--------------|
| Network printer | | |
| Smart home hub | | |
| NAS (network storage) | | |
| Gaming console | | |
| Security cameras | | |

**Create a reservation (if you have access):**

Pick a device and create a reservation:

| Setting | Value |
|---------|-------|
| Device name | |
| MAC address | |
| Reserved IP | |

**Reservation vs Static IP - when to use each:**

| Method | Configure Where | Best For |
|--------|-----------------|----------|
| DHCP Reservation | Router | |
| Static IP | Device itself | |

---

#### Activity E: Wireless Configuration

**Goal:** Review and optimize wireless settings.

**Document your wireless settings:**

**2.4 GHz Network:**

| Setting | Current Value |
|---------|---------------|
| SSID (network name) | |
| SSID broadcast | [ ] On [ ] Hidden |
| Channel | |
| Channel width | |
| Security mode | |
| Password strength | [ ] Weak [ ] Medium [ ] Strong |

**5 GHz Network (if available):**

| Setting | Current Value |
|---------|---------------|
| SSID (network name) | |
| Same as 2.4 GHz? | [ ] Yes [ ] No |
| Channel | |
| Channel width | |
| Security mode | |

**Security assessment:**

| Check | Status | Recommendation |
|-------|--------|----------------|
| Using WPA2 or WPA3 | [ ] Yes [ ] No | Always use WPA2/WPA3 |
| WEP disabled | [ ] Yes [ ] No | WEP is broken, never use |
| WPS disabled | [ ] Yes [ ] No | WPS has vulnerabilities |
| Strong password (12+ chars) | [ ] Yes [ ] No | Use long, complex password |
| Default SSID changed | [ ] Yes [ ] No | Avoids revealing router brand |

**Channel optimization:**

For 2.4 GHz, use only channels 1, 6, or 11 (non-overlapping).

Your current channel: _______

Recommended channel (least congested): _______

How to check: Use a Wi-Fi analyzer app on your phone.

---

#### Activity F: Guest Network Configuration

**Goal:** Understand guest network isolation.

**Does your router support guest networks?** [ ] Yes [ ] No

**If yes, document the settings:**

| Setting | Value |
|---------|-------|
| Guest SSID | |
| Guest password | |
| Client isolation enabled | [ ] Yes [ ] No |
| Access to local network | [ ] Yes [ ] No |
| Bandwidth limit | |
| Time limit | |

**Why use a guest network?**

List 3 benefits:

1. _______________________
2. _______________________
3. _______________________

**Guest network security best practices:**

| Practice | Why |
|----------|-----|
| Different password than main | |
| Client isolation on | |
| No access to local network | |
| Consider bandwidth limits | |

---

#### Activity G: Port Forwarding

**Goal:** Understand port forwarding configuration.

**Find port forwarding settings:**

Location in router: _______________________

**Current port forwarding rules (if any):**

| Rule Name | External Port | Internal IP | Internal Port | Protocol |
|-----------|---------------|-------------|---------------|----------|
| | | | | |
| | | | | |
| | | | | |

**Common port forwarding scenarios:**

| Service | External Port | Internal Port | Protocol |
|---------|---------------|---------------|----------|
| Web server | 80, 443 | 80, 443 | TCP |
| Minecraft server | 25565 | 25565 | TCP |
| Remote Desktop | 3389 | 3389 | TCP |
| Security camera | 8080 | 80 | TCP |
| Plex media server | 32400 | 32400 | TCP |

**Port forwarding exercise (plan only - don't implement unless needed):**

Scenario: You want to access your home computer via RDP from outside.

| Setting | Value |
|---------|-------|
| Service name | Remote Desktop |
| External port | |
| Internal IP | (your computer's IP) |
| Internal port | |
| Protocol | |

**Security considerations:**

Why is port forwarding risky?

_________________________________________________________________

What safer alternatives exist?

1. _______________________
2. _______________________

---

#### Activity H: DMZ Configuration

**Goal:** Understand the DMZ feature.

**Find DMZ settings:**

Location in router: _______________________

| Setting | Value |
|---------|-------|
| DMZ enabled | [ ] Yes [ ] No |
| DMZ host IP | |

**DMZ vs Port Forwarding:**

| Feature | Port Forwarding | DMZ |
|---------|-----------------|-----|
| Ports exposed | | |
| Security level | | |
| Use case | | |
| Configuration complexity | | |

**When to use DMZ:**

| Scenario | DMZ Appropriate? | Why |
|----------|------------------|-----|
| Gaming console with many games | | |
| Home web server | | |
| Regular computer | | |
| IoT device that needs many ports | | |

**⚠️ DMZ Warning:**

Why should you never put a Windows PC in the DMZ?

_________________________________________________________________

---

#### Activity I: NAT and UPnP

**Goal:** Understand NAT and UPnP settings.

**NAT Type (check on a gaming console or in router):**

Your NAT type: [ ] Open [ ] Moderate [ ] Strict

**UPnP Settings:**

| Setting | Value |
|---------|-------|
| UPnP enabled | [ ] Yes [ ] No |
| Location in router | |

**Current UPnP mappings (if visible):**

| Application | Internal IP | Port | Protocol |
|-------------|-------------|------|----------|
| | | | |
| | | | |
| | | | |

**UPnP Security Discussion:**

| Benefit | Risk |
|---------|------|
| | |
| | |

**Should UPnP be enabled?**

| User Type | Recommendation | Why |
|-----------|----------------|-----|
| Gamer | | |
| Business | | |
| High security needs | | |
| Non-technical user | | |

---

#### Activity J: Quality of Service (QoS)

**Goal:** Understand bandwidth prioritization.

**Find QoS settings:**

Location in router: _______________________

**QoS enabled:** [ ] Yes [ ] No

**QoS Methods (check which your router supports):**

- [ ] Application-based (prioritize by app type)
- [ ] Device-based (prioritize specific devices)
- [ ] Port-based (prioritize specific ports)
- [ ] Bandwidth allocation (set limits per device)

**Common QoS priorities:**

| Traffic Type | Priority Level | Why |
|--------------|----------------|-----|
| VoIP/Video calls | Highest | Real-time, latency sensitive |
| Gaming | High | Latency sensitive |
| Streaming video | Medium | Buffered, some tolerance |
| File downloads | Low | Not time-sensitive |
| Software updates | Lowest | Can happen anytime |

**Create a QoS plan for a household:**

| Device/Service | Priority | Bandwidth Limit |
|----------------|----------|-----------------|
| Work laptop (video calls) | | |
| Gaming console | | |
| Smart TV (streaming) | | |
| Guest devices | | |
| IoT devices | | |

---

#### Activity K: Content Filtering and Parental Controls

**Goal:** Explore filtering options.

**Find content filtering settings:**

Location in router: _______________________

**Available features:**

| Feature | Available? | Enabled? |
|---------|------------|----------|
| Website blocking | [ ] Yes [ ] No | [ ] Yes [ ] No |
| Keyword filtering | [ ] Yes [ ] No | [ ] Yes [ ] No |
| Category blocking | [ ] Yes [ ] No | [ ] Yes [ ] No |
| Time-based access | [ ] Yes [ ] No | [ ] Yes [ ] No |
| Per-device controls | [ ] Yes [ ] No | [ ] Yes [ ] No |
| Safe search enforcement | [ ] Yes [ ] No | [ ] Yes [ ] No |

**DNS-based filtering:**

Many routers allow custom DNS for filtering:

| DNS Service | IP Addresses | Features |
|-------------|--------------|----------|
| OpenDNS Family Shield | 208.67.222.123, 208.67.220.123 | |
| CleanBrowsing | 185.228.168.168, 185.228.169.168 | |
| Cloudflare for Families | 1.1.1.3, 1.0.0.3 | |

**Current DNS setting:** _______________________

---

#### Activity L: Firmware and Security Maintenance

**Goal:** Understand router maintenance tasks.

**Firmware check:**

| Item | Value |
|------|-------|
| Current firmware version | |
| Latest available version | |
| Update method | [ ] Auto [ ] Manual |
| Last updated | |

**Where to find firmware updates:**

Manufacturer website: _______________________

**Security maintenance checklist:**

| Task | Frequency | Last Done | Status |
|------|-----------|-----------|--------|
| Check for firmware updates | Monthly | | [ ] Done |
| Review connected devices | Monthly | | [ ] Done |
| Change admin password | Yearly | | [ ] Done |
| Change Wi-Fi password | Yearly | | [ ] Done |
| Review port forwarding rules | Quarterly | | [ ] Done |
| Check for unknown devices | Weekly | | [ ] Done |
| Backup router configuration | After changes | | [ ] Done |

**Router backup:**

Does your router support configuration backup? [ ] Yes [ ] No

Location of backup feature: _______________________

**Why backup router config?**

_________________________________________________________________

---

#### Activity M: Troubleshooting Scenarios

**Goal:** Practice router troubleshooting.

**Scenario 1: No Internet Connection**

The WAN light is off. List your troubleshooting steps:

1. _______________________
2. _______________________
3. _______________________
4. _______________________

**Scenario 2: Slow Wi-Fi**

Devices connect but speeds are very slow. What do you check?

| Check | How to Verify | Possible Fix |
|-------|---------------|--------------|
| Too many devices | | |
| Channel congestion | | |
| Distance from router | | |
| Interference | | |
| Old firmware | | |

**Scenario 3: Device Can't Get IP Address**

A laptop shows 169.254.x.x address. Router troubleshooting steps:

1. _______________________
2. _______________________
3. _______________________

**Scenario 4: Port Forwarding Not Working**

You set up port forwarding but external access fails. Check:

| Item | How to Verify |
|------|---------------|
| Rule is correct | |
| Internal IP still valid | |
| Device firewall allows it | |
| ISP blocking port | |
| Double NAT situation | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A small business owner wants employees to use a guest Wi-Fi separate from business systems. What specific settings would you configure, and why is this important for security?**

2. **A user complains that their security cameras work locally but not remotely after switching routers. What likely needs to be reconfigured?**

3. **A home user has a "double NAT" problem with their ISP-provided router and their own router. What causes this, and what are two ways to fix it?**

4. **A parent wants to limit their teenager's Xbox to 2 hours of internet per day and block gaming after 10 PM. Can a typical home router do this? What features would be needed?**

---

## What You Learned Today

- ✅ Accessed your router's admin interface
- ✅ Documented basic router settings
- ✅ Understood DHCP configuration and reservations
- ✅ Reviewed wireless security settings
- ✅ Explored guest network options
- ✅ Learned port forwarding configuration
- ✅ Understood DMZ risks and uses
- ✅ Explored NAT and UPnP settings
- ✅ Reviewed QoS for bandwidth prioritization
- ✅ Examined content filtering options
- ✅ Understood firmware and security maintenance
- ✅ Practiced troubleshooting scenarios

**Next Lab:** Network Troubleshooting Tools - command-line utilities for diagnosing network problems.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════╗
║           SOHO ROUTER SECURITY CHECKLIST              ║
╠═══════════════════════════════════════════════════════╣
║  [ ] Change default admin password                    ║
║  [ ] Update firmware to latest version                ║
║  [ ] Use WPA2 or WPA3 (never WEP)                    ║
║  [ ] Disable WPS                                      ║
║  [ ] Use strong Wi-Fi password (12+ characters)       ║
║  [ ] Disable remote management                        ║
║  [ ] Change default SSID                              ║
║  [ ] Set up guest network for visitors                ║
║  [ ] Disable UPnP if not needed                       ║
║  [ ] Review connected devices regularly               ║
║  [ ] Backup configuration after changes               ║
╚═══════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 14: SOHO Router Configuration*