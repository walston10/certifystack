# Lab 6: Mobile Device Network Connectivity

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 1.4 - Configure basic mobile-device network connectivity

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand mobile network connectivity:

1. **What does APN stand for, and what is its purpose?**
   - a) Advanced Phone Network - connects to 5G
   - b) Access Point Name - configures cellular data settings
   - c) Automatic Protocol Negotiation - selects Wi-Fi channels
   - d) Application Push Notification - delivers app alerts

2. **Which email protocol downloads messages and typically removes them from the server?**
   - a) IMAP
   - b) POP3
   - c) SMTP
   - d) Exchange

3. **What is the purpose of airplane mode?**
   - a) Reduces screen brightness for flights
   - b) Disables all wireless radios (cellular, Wi-Fi, Bluetooth)
   - c) Enables in-flight entertainment
   - d) Connects to airplane Wi-Fi automatically

4. **What unique identifier is permanently assigned to a mobile device and used by carriers?**
   - a) SSID
   - b) MAC address
   - c) IMEI
   - d) IP address

5. **Which port is used for secure IMAP (IMAPS)?**
   - a) 110
   - b) 143
   - c) 993
   - d) 995

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses your own mobile device** - These activities explore network settings on your smartphone or tablet.

---

#### Activity A: Wi-Fi Configuration Exploration

**Goal:** Understand all Wi-Fi settings and connection options.

**Navigate to Wi-Fi settings:**

**Android:** Settings → Network & Internet → Wi-Fi (or Internet)
**iOS:** Settings → Wi-Fi

**Document your current Wi-Fi connection:**

| Setting | Your Network |
|---------|--------------|
| Network name (SSID) | |
| Security type | |
| Signal strength | |
| Frequency band (2.4 GHz / 5 GHz) | |
| IP address | |
| Subnet mask | |
| Router/Gateway | |
| DNS servers | |

**Finding advanced Wi-Fi details:**

**Android:** Tap connected network → Details/Advanced
**iOS:** Tap (i) next to connected network

**Additional details:**

| Setting | Your Network |
|---------|--------------|
| Link speed | |
| IPv6 address (if shown) | |
| MAC address | |
| DHCP lease time | |

---

**Wi-Fi settings exploration:**

Find and document these settings:

| Setting | Location | Current Value | Options Available |
|---------|----------|---------------|-------------------|
| Auto-connect to open networks | | [ ] On [ ] Off | |
| Notify for available networks | | [ ] On [ ] Off | |
| MAC address type (Randomized/Device) | | | |
| Metered network setting | | [ ] On [ ] Off | |
| Private DNS | | | |

**Connect to a new network:**

1. Find an available network (home, coffee shop, etc.)
2. Before connecting, note what the phone asks for:
   - [ ] Password only
   - [ ] Username and password (enterprise)
   - [ ] Certificate (enterprise)
   - [ ] Accept terms (captive portal)

3. What security type does your home network use? _____________

---

**Manual Wi-Fi configuration:**

Can you manually add a hidden network?

1. Find "Add network" or "Join other network"
2. What information is required?
   - [ ] Network name (SSID)
   - [ ] Security type
   - [ ] Password
   - [ ] Proxy settings
   - [ ] IP settings (DHCP/Static)
   - [ ] Hidden network toggle

3. Document the security options available:
   - [ ] None/Open
   - [ ] WEP
   - [ ] WPA/WPA2 Personal (PSK)
   - [ ] WPA3 Personal
   - [ ] WPA/WPA2 Enterprise
   - [ ] WPA3 Enterprise

---

#### Activity B: Cellular Network Settings

**Goal:** Explore cellular configuration and identify device identifiers.

**Find cellular settings:**

**Android:** Settings → Network & Internet → Mobile network (or SIMs)
**iOS:** Settings → Cellular (or Mobile Data)

**Document cellular status:**

| Setting | Your Device |
|---------|-------------|
| Carrier name | |
| Network type (5G, LTE, 4G, 3G) | |
| Signal strength (bars or dBm) | |
| Roaming status | [ ] Home [ ] Roaming |
| Mobile data enabled | [ ] Yes [ ] No |
| Data roaming enabled | [ ] Yes [ ] No |

**Find your device identifiers:**

**Android:** Settings → About phone
**iOS:** Settings → General → About

| Identifier | Your Device | Purpose |
|------------|-------------|---------|
| IMEI | | Device identity (carrier tracking) |
| MEID (if shown) | | CDMA device identity |
| ICCID | | SIM card identifier |
| Phone number | | Your line number |

**Note:** IMEI is important for:
- Carrier activation
- Stolen device blocking
- Insurance claims
- Warranty service

---

**APN Settings exploration:**

**Android:** Settings → Network & Internet → Mobile network → Access Point Names
**iOS:** Settings → Cellular → Cellular Data Options → Cellular Data Network

**Document current APN settings (if viewable):**

| Setting | Value |
|---------|-------|
| Name | |
| APN | |
| Proxy | |
| Port | |
| Username | |
| Password | |
| MMSC (MMS) | |
| MMS Proxy | |
| MMS Port | |
| Authentication type | |

**Note:** Many carriers lock APN settings. If you can't see them, document that: "APN settings locked by carrier"

**When would you need to edit APN settings?**
- [ ] Using an MVNO (Mobile Virtual Network Operator)
- [ ] Traveling internationally with local SIM
- [ ] MMS not working
- [ ] Mobile data not connecting
- [ ] After carrier migration

---

**Network mode selection:**

Find network mode settings:

**Android:** Settings → Network & Internet → Mobile network → Preferred network type
**iOS:** Settings → Cellular → Cellular Data Options → Voice & Data

| Mode Option | Available? | What It Means |
|-------------|------------|---------------|
| 5G (Auto/On) | [ ] Yes [ ] No | Connects to 5G when available |
| LTE/4G | [ ] Yes [ ] No | 4G only, saves battery |
| 3G | [ ] Yes [ ] No | Legacy, slow |
| 2G | [ ] Yes [ ] No | Emergency only |

**Why might someone choose LTE over 5G?**
1. _______________________________________
2. _______________________________________

---

#### Activity C: Airplane Mode and Radio Controls

**Goal:** Understand how to control individual wireless radios.

**Enable Airplane Mode:**

1. Enable airplane mode (quick settings or Settings → Network)
2. Document what gets disabled:
   - [ ] Cellular signal
   - [ ] Wi-Fi
   - [ ] Bluetooth
   - [ ] GPS
   - [ ] NFC

3. While in airplane mode, can you:
   - Re-enable Wi-Fi? [ ] Yes [ ] No
   - Re-enable Bluetooth? [ ] Yes [ ] No
   - Make emergency calls? [ ] Yes [ ] No (most phones allow)

4. Disable airplane mode

**Radio control exploration:**

Find individual toggles for each radio:

| Radio | Toggle Location | Currently |
|-------|-----------------|-----------|
| Wi-Fi | | [ ] On [ ] Off |
| Bluetooth | | [ ] On [ ] Off |
| Mobile data | | [ ] On [ ] Off |
| NFC | | [ ] On [ ] Off |
| Location/GPS | | [ ] On [ ] Off |
| Wi-Fi calling | | [ ] On [ ] Off |

**Quick settings inventory:**

What wireless toggles are in your quick settings (swipe down)?

- [ ] Wi-Fi
- [ ] Bluetooth
- [ ] Airplane mode
- [ ] Mobile data
- [ ] Hotspot
- [ ] NFC
- [ ] Location
- [ ] Other: _____________

---

#### Activity D: Email Account Configuration

**Goal:** Understand email protocols and manually configure an account.

**Document existing email accounts:**

**Android:** Settings → Accounts (or in email app)
**iOS:** Settings → Mail → Accounts

| Account | Type | Provider |
|---------|------|----------|
| 1. | [ ] IMAP [ ] POP3 [ ] Exchange [ ] Gmail/Google | |
| 2. | [ ] IMAP [ ] POP3 [ ] Exchange [ ] Gmail/Google | |
| 3. | [ ] IMAP [ ] POP3 [ ] Exchange [ ] Gmail/Google | |

**Email protocol reference:**

Before configuring, understand the protocols:

| Protocol | Port | Secure Port | Direction | Behavior |
|----------|------|-------------|-----------|----------|
| POP3 | 110 | 995 | Incoming | Downloads, removes from server |
| IMAP | 143 | 993 | Incoming | Syncs, keeps on server |
| SMTP | 25 | 587/465 | Outgoing | Sends mail |
| Exchange | 443 | 443 | Both | Microsoft sync protocol |

---

**Manual email configuration exercise:**

Practice setting up an email account manually (use a test account or existing account):

1. Add new account → Choose "Other" or "Manual"

2. Document what information is required:

**Incoming mail settings:**

| Setting | Value |
|---------|-------|
| Email address | |
| Server type (IMAP/POP3) | |
| Server hostname | |
| Port | |
| Security (SSL/TLS/None) | |
| Username | |
| Password | |

**Outgoing mail settings (SMTP):**

| Setting | Value |
|---------|-------|
| SMTP server | |
| Port | |
| Security (SSL/TLS/STARTTLS) | |
| Authentication required? | [ ] Yes [ ] No |
| Username | |
| Password | |

**Common email server patterns:**

| Provider | IMAP Server | SMTP Server |
|----------|-------------|-------------|
| Gmail | imap.gmail.com:993 | smtp.gmail.com:587 |
| Outlook/Hotmail | outlook.office365.com:993 | smtp.office365.com:587 |
| Yahoo | imap.mail.yahoo.com:993 | smtp.mail.yahoo.com:587 |
| iCloud | imap.mail.me.com:993 | smtp.mail.me.com:587 |

---

**Sync settings exploration:**

For one of your email accounts, find these settings:

| Setting | Location | Current Value |
|---------|----------|---------------|
| Sync frequency | | [ ] Push [ ] 15 min [ ] 30 min [ ] Manual |
| Days to sync | | |
| Download attachments on Wi-Fi only | | [ ] Yes [ ] No |
| Sync contacts | | [ ] Yes [ ] No |
| Sync calendar | | [ ] Yes [ ] No |
| Signature | | |

---

#### Activity E: VPN Configuration

**Goal:** Understand VPN settings and connection options.

**Find VPN settings:**

**Android:** Settings → Network & Internet → VPN
**iOS:** Settings → General → VPN & Device Management → VPN

**Current VPN status:**

- VPN profiles configured: _____
- Currently connected to VPN: [ ] Yes [ ] No

**VPN protocols available:**

Check what VPN types your phone supports:

| Protocol | Supported? | Notes |
|----------|------------|-------|
| IKEv2 | [ ] Yes [ ] No | Modern, fast |
| IPSec | [ ] Yes [ ] No | Common enterprise |
| L2TP/IPSec | [ ] Yes [ ] No | Legacy but compatible |
| PPTP | [ ] Yes [ ] No | Insecure, deprecated |
| OpenVPN | [ ] Yes [ ] No | Requires app |
| WireGuard | [ ] Yes [ ] No | Requires app |

---

**VPN configuration exercise:**

If you have a VPN service, configure it manually:

| Setting | Value |
|---------|-------|
| VPN name (description) | |
| VPN type | |
| Server address | |
| Username | |
| Password | |
| Certificate (if required) | |
| Always-on VPN | [ ] On [ ] Off |

**If you don't have a VPN service:**

Research and document what information you'd need to set up a corporate VPN:

1. ______________________________
2. ______________________________
3. ______________________________
4. ______________________________

**VPN connection indicators:**

When connected to a VPN, what indicates the connection?
- [ ] Key icon in status bar
- [ ] VPN notification
- [ ] VPN label in quick settings
- [ ] Other: _____________

---

#### Activity F: Location Services Configuration

**Goal:** Understand location settings and accuracy modes.

**Find location settings:**

**Android:** Settings → Location
**iOS:** Settings → Privacy & Security → Location Services

**Location mode settings:**

| Setting | Your Device |
|---------|-------------|
| Location services enabled | [ ] Yes [ ] No |
| Mode/Accuracy | |
| History/Timeline enabled | [ ] Yes [ ] No |
| Location sharing enabled | [ ] Yes [ ] No |

**Location accuracy modes (Android):**

| Mode | Uses | Battery | Accuracy |
|------|------|---------|----------|
| High accuracy | GPS + Wi-Fi + Cell | High | Best |
| Battery saving | Wi-Fi + Cell only | Low | Moderate |
| Device only | GPS only | Medium | Good (outdoors) |

**App location permissions:**

List 5 apps and their location permission:

| App | Permission Level |
|-----|------------------|
| 1. | [ ] Always [ ] While using [ ] Never [ ] Ask |
| 2. | [ ] Always [ ] While using [ ] Never [ ] Ask |
| 3. | [ ] Always [ ] While using [ ] Never [ ] Ask |
| 4. | [ ] Always [ ] While using [ ] Never [ ] Ask |
| 5. | [ ] Always [ ] While using [ ] Never [ ] Ask |

**Precise vs approximate location (newer Android):**

Can apps choose between precise and approximate location?
- [ ] Yes - setting available
- [ ] No - not available on my device

---

#### Activity G: Network Troubleshooting Tools

**Goal:** Use built-in tools to diagnose network issues.

**Test 1: Wi-Fi signal strength**

1. Find signal strength indicator (Settings → Wi-Fi → Connected network)
2. Document current strength: _____ (bars or dBm)
3. Walk to the farthest point from your router
4. Document strength there: _____
5. At what point did you lose connection (if any)? _____________

**Test 2: Speed test**

1. Install or use a speed test app/website (Speedtest by Ookla, Fast.com)
2. Test on Wi-Fi:
   - Download: _____ Mbps
   - Upload: _____ Mbps
   - Ping: _____ ms

3. Test on cellular (careful of data usage):
   - Download: _____ Mbps
   - Upload: _____ Mbps
   - Ping: _____ ms
   - Network type during test: _____

**Test 3: DNS resolution**

1. Open browser
2. Try accessing a website by IP: http://142.250.80.46 (Google)
   - Works? [ ] Yes [ ] No

3. Try accessing by domain: http://google.com
   - Works? [ ] Yes [ ] No

4. If IP works but domain doesn't, what's the likely issue? _____________

---

**Network reset options:**

Find where these reset options are located:

| Reset Option | Location | What It Resets |
|--------------|----------|----------------|
| Reset Wi-Fi settings | | |
| Reset Bluetooth settings | | |
| Reset mobile network settings | | |
| Reset all network settings | | |

**What does "Reset network settings" typically clear?**
- [ ] Saved Wi-Fi networks and passwords
- [ ] Bluetooth pairings
- [ ] VPN configurations
- [ ] APN settings
- [ ] Mobile data settings
- [ ] Other: _____________

---

#### Activity H: Enterprise Network Concepts

**Goal:** Understand enterprise wireless configuration requirements.

**Research: What's required to connect to an enterprise Wi-Fi (WPA2/WPA3 Enterprise)?**

| Requirement | Purpose |
|-------------|---------|
| Username | |
| Password | |
| Certificate | |
| Authentication method (EAP type) | |
| Domain | |

**EAP (Extensible Authentication Protocol) types:**

| EAP Type | What It Uses | Common In |
|----------|--------------|-----------|
| EAP-TLS | Client certificate | High-security corporate |
| EAP-TTLS | Username/password in tunnel | Universities, corporate |
| PEAP | Username/password, server cert | Most common enterprise |
| EAP-FAST | PAC (Protected Access Credential) | Cisco environments |

**If you have access to an enterprise network (work, school):**

Document the configuration (without sensitive details):

| Setting | Value (general) |
|---------|-----------------|
| Security type | WPA2/WPA3 Enterprise |
| EAP method | |
| Phase 2 authentication | |
| Certificate required? | [ ] Yes [ ] No |
| Domain | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A user's phone shows "No Service" even though they're in a coverage area.**
   - What would you check first?
   - Could airplane mode be involved?
   - What about SIM card issues?

2. **An employee can't send emails from their phone, but can receive them.**
   - Which server is misconfigured (incoming or outgoing)?
   - What settings would you verify?
   - What port numbers are relevant?

3. **A user connected to corporate Wi-Fi but can't reach the internet.**
   - Could it be a proxy configuration issue?
   - What about 802.1X authentication?
   - How would you test if it's a DNS issue?

4. **A phone works fine on Wi-Fi but mobile data won't connect.**
   - What's the first thing to check?
   - How do APN settings factor in?
   - What if they recently switched carriers?

---

## What You Learned Today

- ✅ Explored Wi-Fi configuration and security settings
- ✅ Located device identifiers (IMEI, ICCID)
- ✅ Understood APN settings and cellular configuration
- ✅ Practiced controlling individual wireless radios
- ✅ Learned email protocols and port numbers (POP3, IMAP, SMTP)
- ✅ Explored VPN configuration options
- ✅ Configured location services and permissions
- ✅ Used network troubleshooting tools
- ✅ Understood enterprise Wi-Fi requirements

**Next Lab:** Network Cable Types - exploring copper and fiber cabling in the Networking module.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 6: Mobile Device Network Connectivity*