# Lab 6: Mobile Device Network Connectivity - Solution Guide

**Note to Students:** Only review this AFTER completing your own exploration! You'll learn more by discovering things yourself first.

---

## Section 1: Concept Check - Answers

**1. What does APN stand for, and what is its purpose?**

**Answer: b) Access Point Name - configures cellular data settings**

APN (Access Point Name) is the gateway between your carrier's cellular network and the internet. It contains settings that tell your phone how to connect to your carrier's data network.

APN settings include:
- Network gateway address
- Authentication credentials (if required)
- MMS settings (multimedia messaging)
- Proxy settings

When you might need to edit APN:
- Using an MVNO (like Mint Mobile on T-Mobile network)
- Inserting a foreign SIM while traveling
- MMS messages not sending/receiving
- Data not working after carrier switch

---

**2. Which email protocol downloads messages and typically removes them from the server?**

**Answer: b) POP3**

| Protocol | Behavior | Best For |
|----------|----------|----------|
| **POP3** | Downloads mail, deletes from server | Single device, limited storage |
| **IMAP** | Syncs mail, keeps on server | Multiple devices |
| **SMTP** | Sends outgoing mail | All email (outbound only) |
| **Exchange** | Microsoft sync protocol | Corporate environments |

POP3 can be configured to leave copies on the server, but the default/traditional behavior is to download and delete.

---

**3. What is the purpose of airplane mode?**

**Answer: b) Disables all wireless radios (cellular, Wi-Fi, Bluetooth)**

Airplane mode disables:
- Cellular (voice and data)
- Wi-Fi
- Bluetooth
- NFC (on some devices)

It does NOT typically disable:
- GPS (receive-only, doesn't transmit)
- Wired connections

After enabling airplane mode, you can manually re-enable Wi-Fi and Bluetooth individually. This is useful for in-flight Wi-Fi or Bluetooth headphones.

---

**4. What unique identifier is permanently assigned to a mobile device and used by carriers?**

**Answer: c) IMEI**

| Identifier | Full Name | Purpose |
|------------|-----------|---------|
| **IMEI** | International Mobile Equipment Identity | Device tracking, carrier blocking |
| **MEID** | Mobile Equipment Identifier | CDMA device identity |
| **ICCID** | Integrated Circuit Card ID | SIM card identity |
| **IMSI** | International Mobile Subscriber Identity | Subscriber identity (on SIM) |

IMEI is permanently burned into the device. Carriers use it to:
- Activate devices
- Block stolen phones (blacklist)
- Track device for warranty/insurance

You can find IMEI by dialing `*#06#` on most phones.

---

**5. Which port is used for secure IMAP (IMAPS)?**

**Answer: c) 993**

Email port numbers (MUST MEMORIZE for A+):

| Protocol | Standard Port | Secure Port |
|----------|---------------|-------------|
| POP3 | 110 | 995 (POP3S) |
| IMAP | 143 | 993 (IMAPS) |
| SMTP | 25 | 587 (STARTTLS) or 465 (SMTPS) |

Memory trick: Secure ports for mail are 993 (IMAP) and 995 (POP3) - both start with 99.

---

## Section 2: Activity Solutions

### Activity A: Wi-Fi Configuration - Reference Guide

**Wi-Fi settings explained:**

| Setting | Purpose | Recommendation |
|---------|---------|----------------|
| Auto-join | Automatically connect to known networks | Keep on for home/work |
| Auto-join open networks | Connect to any open network | OFF (security risk) |
| MAC randomization | Changes MAC for privacy | ON for public networks |
| Metered connection | Treats network as limited data | ON for hotspots |
| Private DNS | Encrypted DNS queries | Consider enabling |

**Wi-Fi security types:**

| Type | Security Level | Notes |
|------|----------------|-------|
| Open | None | Never for sensitive data |
| WEP | Broken | Crackable in minutes, never use |
| WPA | Weak | Better than WEP, still vulnerable |
| WPA2 Personal | Good | Current standard for home |
| WPA2 Enterprise | Better | Uses 802.1X authentication |
| WPA3 Personal | Best | Newest standard, SAE handshake |
| WPA3 Enterprise | Best | Enterprise + 192-bit encryption |

**Static IP configuration:**

When would you configure a static IP on mobile?
- Specific app requirements
- Network troubleshooting
- Connecting to devices that expect fixed IPs
- Enterprise network requirements

| Setting | How to Find Value |
|---------|-------------------|
| IP address | Choose unused IP in subnet |
| Subnet mask | Usually 255.255.255.0 |
| Gateway | Router's IP address |
| DNS | Router's IP or public DNS (8.8.8.8) |

---

### Activity B: Cellular Settings - Complete Reference

**Device identifiers explained:**

| Identifier | Format | Location | Changeable? |
|------------|--------|----------|-------------|
| IMEI | 15 digits | Device (permanent) | No |
| MEID | 14 hex digits | Device (CDMA) | No |
| ICCID | Up to 22 digits | SIM card | Comes with SIM |
| IMSI | Up to 15 digits | SIM card | Comes with SIM |
| Phone number | Varies | Carrier assigned | Yes (porting) |

**Finding IMEI:**
- Dial `*#06#`
- Settings → About phone
- Printed on SIM tray (some phones)
- Printed on box

**Cellular network types:**

| Generation | Technology | Typical Speed |
|------------|------------|---------------|
| 2G | GSM, EDGE | 50-100 Kbps |
| 3G | UMTS, HSPA | 1-5 Mbps |
| 4G/LTE | LTE, LTE-A | 20-100 Mbps |
| 5G | NR (Sub-6, mmWave) | 100-1000+ Mbps |

**APN settings reference:**

| Field | Purpose | Example |
|-------|---------|---------|
| Name | Display name | "T-Mobile US" |
| APN | Access point address | "fast.t-mobile.com" |
| Proxy | HTTP proxy (rare) | Usually blank |
| Port | Proxy port | Usually blank |
| Username | Auth username | Usually blank |
| Password | Auth password | Usually blank |
| MMSC | MMS server | "http://mms.msg.eng.t-mobile.com/mms/wapenc" |
| MMS proxy | MMS proxy server | Usually blank or IP |
| MMS port | MMS port | Usually 80 |
| Authentication | Auth type | None, PAP, or CHAP |
| APN type | Services to use | default,mms,supl |

**Common carrier APNs:**

| Carrier | APN | Notes |
|---------|-----|-------|
| AT&T | nxtgenphone | Or "phone" |
| T-Mobile | fast.t-mobile.com | |
| Verizon | vzwinternet | Usually auto-configured |
| Mint Mobile | wholesale | MVNO on T-Mobile |

---

### Activity C: Airplane Mode - Radio Control Reference

**What airplane mode controls:**

| Radio | Disabled? | Can Re-enable? |
|-------|-----------|----------------|
| Cellular | Yes | No |
| Wi-Fi | Yes | Yes |
| Bluetooth | Yes | Yes |
| NFC | Usually yes | Varies |
| GPS | Usually no | N/A (receive-only) |
| FM Radio | Yes | Varies |

**Why airplane mode exists:**
- FCC/FAA regulations (potential interference)
- Quickly disable all transmitters
- Battery saving (disables radios)
- Reduce distractions

**Uses beyond flying:**
- Quick network reset (toggle on/off)
- Battery saving mode
- Reduce exposure during sleep
- Focus mode (no calls/texts)
- Troubleshooting connectivity issues

---

### Activity D: Email Configuration - Complete Reference

**Email protocols in detail:**

| Protocol | Full Name | Port | Secure Port | Direction |
|----------|-----------|------|-------------|-----------|
| POP3 | Post Office Protocol v3 | 110 | 995 | Incoming |
| IMAP | Internet Message Access Protocol | 143 | 993 | Incoming |
| SMTP | Simple Mail Transfer Protocol | 25 | 587/465 | Outgoing |

**POP3 vs IMAP:**

| Feature | POP3 | IMAP |
|---------|------|------|
| Messages stored | Downloaded to device | On server (synced) |
| Multiple devices | Difficult | Easy |
| Offline access | Full (downloaded) | Limited (headers/cache) |
| Server storage | Low | Higher |
| Folder sync | No | Yes |
| Search | Local only | Server-side possible |

**SMTP port confusion:**

| Port | Name | Usage |
|------|------|-------|
| 25 | SMTP | Server-to-server (blocked by ISPs for clients) |
| 465 | SMTPS | Legacy SSL (deprecated but still used) |
| 587 | Submission | Modern client submission with STARTTLS |

**Recommendation:** Use port 587 with STARTTLS for sending mail.

**Common email server settings:**

| Provider | IMAP Server | SMTP Server | Security |
|----------|-------------|-------------|----------|
| Gmail | imap.gmail.com | smtp.gmail.com | SSL/TLS |
| Outlook | outlook.office365.com | smtp.office365.com | STARTTLS |
| Yahoo | imap.mail.yahoo.com | smtp.mail.yahoo.com | SSL |
| iCloud | imap.mail.me.com | smtp.mail.me.com | SSL |
| AOL | imap.aol.com | smtp.aol.com | SSL |

**Gmail-specific note:**
Gmail requires either:
- App passwords (for legacy apps)
- OAuth2 authentication (modern apps)
- Less secure app access (deprecated)

---

### Activity E: VPN Configuration - Reference

**VPN protocols comparison:**

| Protocol | Security | Speed | Compatibility | Notes |
|----------|----------|-------|---------------|-------|
| IKEv2 | High | Fast | Good | Mobile-friendly, handles roaming |
| IPSec | High | Medium | Excellent | Enterprise standard |
| L2TP/IPSec | Medium | Medium | Excellent | Legacy, wide support |
| PPTP | Low | Fast | Excellent | **INSECURE - don't use** |
| OpenVPN | High | Medium | Requires app | Open source, flexible |
| WireGuard | High | Very fast | Requires app | Modern, efficient |

**VPN configuration requirements:**

| Setting | Description |
|---------|-------------|
| Server address | VPN gateway hostname or IP |
| VPN type | Protocol (IKEv2, IPSec, etc.) |
| Username | Your VPN account username |
| Password | Your VPN account password |
| Certificate | For certificate-based auth |
| Pre-shared key | For PSK authentication |
| Always-on VPN | Force all traffic through VPN |

**Always-on VPN benefits:**
- All traffic encrypted
- No accidental exposure
- Required for high-security environments
- Can block non-VPN traffic

**Split tunneling:**
- Some traffic through VPN, some direct
- Reduces VPN load
- May be disabled by corporate policy
- Less secure than full tunnel

---

### Activity F: Location Services - Reference

**Location sources:**

| Source | Accuracy | Battery | Works Indoors? |
|--------|----------|---------|----------------|
| GPS | 3-5 meters | High | No |
| Wi-Fi | 15-40 meters | Low | Yes |
| Cell tower | 100-300 meters | Low | Yes |
| Bluetooth beacons | 1-3 meters | Low | Yes |

**Location permission levels:**

| Level | When Access Granted |
|-------|---------------------|
| Always | App can access anytime (background) |
| While Using | Only when app is open/active |
| Ask Every Time | Prompts each time |
| Never | Blocked completely |
| Precise | Exact location |
| Approximate | General area only (Android 12+) |

**Location privacy considerations:**
- "Always" drains battery and privacy
- Apps often request more than needed
- Location history can be sensitive
- Consider per-app permissions carefully

---

### Activity G: Network Troubleshooting - Reference

**Signal strength interpretation:**

| dBm | Bars (typical) | Quality |
|-----|----------------|---------|
| -50 to -60 | 4-5 | Excellent |
| -60 to -70 | 3-4 | Good |
| -70 to -80 | 2-3 | Fair |
| -80 to -90 | 1-2 | Poor |
| -90 to -100 | 0-1 | Very poor |
| < -100 | 0 | No service |

**Speed test interpretation:**

| Use Case | Minimum Download | Recommended |
|----------|------------------|-------------|
| Web browsing | 5 Mbps | 10+ Mbps |
| Video streaming (HD) | 5 Mbps | 15+ Mbps |
| Video streaming (4K) | 25 Mbps | 50+ Mbps |
| Video calls | 3 Mbps | 10+ Mbps |
| Online gaming | 3 Mbps | 25+ Mbps |

**DNS troubleshooting:**

If IP address works but domain doesn't:
- DNS is likely the issue
- Try different DNS (8.8.8.8, 1.1.1.1)
- Flush DNS cache if possible
- Check for DNS settings in Wi-Fi config

**Network reset effects:**

| What's Reset | Impact |
|--------------|--------|
| Wi-Fi networks | All saved networks/passwords deleted |
| Bluetooth pairings | All paired devices forgotten |
| VPN profiles | All VPN configurations deleted |
| APN settings | Reset to carrier defaults |
| Network preferences | Mobile data, roaming settings reset |

**When to reset network settings:**
- Persistent connectivity issues
- After troubleshooting individual settings fails
- Strange network behavior after OS update
- As a last resort before factory reset

---

### Activity H: Enterprise Wi-Fi - Complete Reference

**802.1X authentication components:**

| Component | Role |
|-----------|------|
| Supplicant | Client device (your phone) |
| Authenticator | Access point (relays to server) |
| Authentication server | RADIUS server (verifies credentials) |

**EAP types explained:**

| EAP Type | Authentication Method | Security Level |
|----------|----------------------|----------------|
| EAP-TLS | Client + server certificates | Highest |
| EAP-TTLS | Server cert + username/password in tunnel | High |
| PEAP | Server cert + username/password (MS-CHAPv2) | High |
| EAP-FAST | PAC file + credentials | Medium-High |

**Enterprise Wi-Fi configuration:**

| Field | Purpose |
|-------|---------|
| EAP method | How authentication is tunneled |
| Phase 2 authentication | Inner auth (usually MS-CHAPv2) |
| CA certificate | Validates server identity |
| Domain | Server certificate domain to verify |
| Identity | Username |
| Anonymous identity | Outer identity (privacy) |
| Password | User password |

**Why CA certificate matters:**
- Prevents man-in-the-middle attacks
- Verifies you're connecting to legitimate network
- Should be installed by IT department
- "Trust on first use" is risky

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Phone Shows "No Service"

**Troubleshooting steps:**

| Step | Check | Action |
|------|-------|--------|
| 1 | Airplane mode | Ensure it's OFF |
| 2 | Network coverage | Check carrier coverage map |
| 3 | SIM card | Reseat SIM card |
| 4 | Manual network selection | Try selecting carrier manually |
| 5 | Restart phone | Power cycle |
| 6 | Network settings reset | As last resort |
| 7 | SIM card replacement | If damaged/old |

**Airplane mode involvement:**
- Check quick settings for airplane icon
- Even if "off," try toggling on then off
- Some phones have individual radio controls that might be off

**SIM card issues:**
- Improperly seated
- Damaged contacts
- Wrong size SIM in adapter
- SIM card failure
- Account issue (suspended, unpaid)

---

### Scenario 2: Can Receive But Can't Send Email

**The problem is outgoing (SMTP) server configuration.**

**What to check:**

| Setting | Correct Value? |
|---------|----------------|
| SMTP server address | Matches provider |
| SMTP port | 587 (TLS) or 465 (SSL) |
| Security | TLS or SSL enabled |
| Authentication | Required (usually) |
| Username | Correct email address |
| Password | Correct and current |

**Common causes:**
- Port 25 blocked by carrier/ISP
- Wrong SMTP server address
- Authentication disabled when required
- Password changed but not updated
- Security protocol mismatch

**Relevant ports:**
- 25: Often blocked for consumers
- 465: Legacy SSL
- 587: Modern standard with STARTTLS

---

### Scenario 3: Connected to Wi-Fi But No Internet

**Troubleshooting steps:**

| Check | How | Fix |
|-------|-----|-----|
| Other devices working? | Test another device | If no, router issue |
| IP address assigned? | Check Wi-Fi details | If 169.254.x.x, DHCP issue |
| Can ping gateway? | (May need tools) | If no, connection issue |
| Can ping IP address? | Browse to 142.250.80.46 | If yes, DNS issue |
| Proxy configured? | Check Wi-Fi settings | Disable proxy |
| 802.1X timeout? | Check for auth prompts | Re-authenticate |
| Captive portal? | Open browser | Accept terms |

**Proxy issues:**
- Enterprise networks often require proxy
- Proxy settings may not auto-clear
- Check Wi-Fi → Advanced → Proxy settings

**802.1X issues:**
- Authentication may have expired
- Password changed
- Certificate expired
- Need to "forget" and reconnect

**DNS issues:**
- Try Google DNS (8.8.8.8) or Cloudflare (1.1.1.1)
- Configure in Wi-Fi settings
- Some networks block external DNS

---

### Scenario 4: Wi-Fi Works But Mobile Data Doesn't

**First things to check:**

| Check | Location |
|-------|----------|
| Mobile data enabled? | Quick settings or Settings → Cellular |
| Data limit reached? | Settings → Data usage |
| Airplane mode off? | Quick settings |
| Roaming enabled (if needed)? | Cellular settings |
| APN settings correct? | Cellular → APN |

**APN factors:**
- Carrier switch requires new APN
- APN may have been cleared by update
- MVNO customers need specific APN
- Can reset to carrier default

**After carrier switch:**
1. Carrier should push APN automatically
2. If not, get APN settings from carrier website
3. Enter manually in APN settings
4. Restart phone after saving

**Other considerations:**
- Account standing (suspended, unpaid)
- SIM not properly provisioned
- Network outage in area
- Phone not compatible with carrier bands

---

## Key Takeaways

**For the A+ Exam:**

1. **APN = Access Point Name** - Cellular data gateway settings

2. **POP3 downloads and deletes** - IMAP syncs and keeps on server

3. **Email ports to memorize:**
   - POP3: 110, POP3S: 995
   - IMAP: 143, IMAPS: 993
   - SMTP: 25, Submission: 587, SMTPS: 465

4. **IMEI = device identifier** - Permanent, used by carriers

5. **Airplane mode disables all radios** - Can re-enable Wi-Fi/Bluetooth individually

6. **WPA2/WPA3 Enterprise uses 802.1X** - RADIUS, EAP types, certificates

7. **VPN protocols:** IKEv2, IPSec, L2TP - Never PPTP (insecure)

8. **Location modes:** GPS + Wi-Fi + Cell = most accurate

**For Real-World Skills:**

- Always check airplane mode first for "no service"
- SMTP issues are usually port or authentication
- Know your carrier's APN for troubleshooting
- Enterprise Wi-Fi needs proper certificate installation
- Network reset is a useful last resort
- Email server info is usually on provider's support page

---

**Congratulations on completing Lab 6!**

You now understand mobile device network configuration including Wi-Fi, cellular, email, VPN, and location services. These are essential skills for supporting any mobile workforce.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 6: Mobile Device Network Connectivity - Solution Guide*