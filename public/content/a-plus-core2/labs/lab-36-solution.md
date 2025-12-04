# Lab 36: Windows Networking - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Network Profiles

| Profile | Characteristics | Use Case |
|---------|-----------------|----------|
| **Public** | Most restrictive. Network discovery OFF, file sharing OFF, firewall strictest | Coffee shops, airports, hotels |
| **Private** | Less restrictive. Discovery ON, sharing available | Home, trusted work networks |
| **Domain** | Controlled by domain admin. Uses domain firewall policies | Corporate networks with AD |

**Most restrictive:** Public

---

### Question 2: 169.254.x.x Address

**What it indicates:** The computer couldn't obtain an IP address from DHCP.

**Name:** APIPA (Automatic Private IP Addressing) or Link-Local address

**Causes:**
- DHCP server down or unreachable
- Network cable disconnected
- Wrong VLAN
- DHCP scope exhausted

---

### Question 3: Workgroup vs Domain

| Feature | Workgroup | Domain |
|---------|-----------|--------|
| Server required | No | Yes (Domain Controller) |
| Account management | Local on each PC | Centralized in Active Directory |
| Maximum size | ~20 computers practical | Thousands |
| Single sign-on | No | Yes |
| Group Policy | No (local policy only) | Yes |
| Best for | Home, tiny offices | Businesses |

---

### Question 4: File Sharing Requirements

For two Windows computers to share files:
1. **Network discovery** must be ON
2. **File and printer sharing** must be ON
3. Both on same network/subnet
4. Same **Workgroup** (or Domain)
5. Firewall allowing File and Printer Sharing
6. Proper **share permissions** set
7. If password protected sharing ON, need valid credentials

---

### Question 5: Can Access Internet but Not \\fileserver

Three things to check:

1. **Name resolution:** Can you ping by IP? `ping 192.168.1.10` - If yes, DNS issue
2. **Firewall:** Is File and Printer Sharing allowed? Check firewall on BOTH computers
3. **Share permissions:** Does the share exist? `net view \\fileserver` - Does user have access?

Additional checks:
- Is SMB/CIFS enabled?
- Network profile (Public blocks sharing)
- Service running (Server service, Workstation service)

---

## Section 2: Activities - Answers

### Activity A: Network Profile Configuration

**Profile differences:**

| Setting | Private | Public |
|---------|---------|--------|
| Network discovery | ON by default | OFF by default |
| File sharing | Available | Blocked |
| Firewall strictness | Relaxed | Strict |
| Recommended for | Home/Office trusted | Public Wi-Fi |

---

### Activity B: IP Configuration

**Common DNS Servers:**

| Provider | Primary | Secondary |
|----------|---------|-----------|
| Google | 8.8.8.8 | 8.8.4.4 |
| Cloudflare | 1.1.1.1 | 1.0.0.1 |
| OpenDNS | 208.67.222.222 | 208.67.220.220 |
| Quad9 | 9.9.9.9 | 149.112.112.112 |

---

### Activity C: Network Discovery and Sharing

**Sharing implications:**

| Scenario | Required Settings |
|----------|-------------------|
| Share printer with family | File and printer sharing ON, Network discovery ON |
| Allow Public folder access | Public folder sharing ON |
| Require password for shares | Password protected sharing ON |
| See other computers | Network discovery ON |

---

### Activity D: Workgroup Configuration

**Workgroup vs Domain comparison:**

| Feature | Workgroup | Domain |
|---------|-----------|--------|
| Central management | No | Yes |
| Requires server | No | Yes (DC with AD) |
| Maximum computers | ~20 practical | Unlimited |
| Single sign-on | No | Yes |
| Group Policy | Local only | Full GPO |
| Typical use | Home, small office | Business, enterprise |

---

### Activity E: Windows Firewall

**Common allowed apps:**

| App | Purpose |
|-----|---------|
| Core Networking | Basic network stack |
| File and Printer Sharing | SMB access |
| Network Discovery | See other devices |
| Remote Desktop | RDP connections |
| Windows Remote Management | PowerShell remoting |

**Remote Desktop rule properties:**

| Property | Typical Value |
|----------|---------------|
| Rule Name | Remote Desktop - User Mode (TCP-In) |
| Enabled | No (by default) |
| Action | Allow |
| Protocol | TCP |
| Local Port | 3389 |
| Profile | Domain, Private |

---

### Activity F: Network Troubleshooting

**Troubleshooting sequence meaning:**

| Step | Command | What It Tests |
|------|---------|---------------|
| 1 | ping 127.0.0.1 | TCP/IP stack installed and working |
| 2 | ping [your IP] | Network adapter functioning |
| 3 | ping [gateway] | Local network connectivity |
| 4 | ping 8.8.8.8 | Internet connectivity (routing) |
| 5 | ping google.com | DNS resolution |
| 6 | nslookup google.com | DNS server specifically |

**If step 4 works but step 5 fails:** DNS problem (DNS server unreachable or misconfigured)

**If step 3 fails but step 2 works:** Gateway problem (wrong gateway, gateway down, switch/router issue)

---

### Activity G: Mapped Network Drives

**net use syntax:**

```cmd
net use Z: \\server\share              # Map drive
net use Z: \\server\share /user:domain\user  # With credentials
net use Z: /delete                      # Disconnect
net use * /delete                       # Disconnect all
```

**/persistent:yes** makes the mapping survive reboots. The drive will automatically reconnect at login.

---

## Section 3: Reflection - Answers

### Scenario 1: Laptop Can't See Home Computer

**What happened:** When connecting to coffee shop Wi-Fi, Windows (correctly) set it to Public profile. When returning home, Windows may have kept the home network as Public, or the profile didn't switch properly.

**Fix:**
1. Go to Settings → Network & Internet → Wi-Fi (or Ethernet)
2. Click on your home network
3. Change from Public to Private
4. Verify Network discovery is ON in advanced sharing settings

---

### Scenario 2: Google Works, \\server1\files Doesn't

**Troubleshooting steps:**

1. **Verify name resolution:**
   ```cmd
   ping server1
   nslookup server1
   ```
   If ping works, name resolution is fine.

2. **Check if share exists:**
   ```cmd
   net view \\server1
   ```

3. **Verify SMB access:**
   - Is Server service running? (`services.msc`)
   - Is SMB allowed through firewall?

4. **Check share permissions:**
   - Does user have access to that share?
   - Try: `net use * \\server1\files`

5. **Check network profile:**
   - Is client on Public profile? (blocks SMB)

6. **Test with IP:**
   ```cmd
   \\192.168.1.10\files
   ```

---

### Scenario 3: Small Business Needs Central Management

**Recommendation:** Migrate from Workgroup to Domain

**Required:**
- Windows Server with Active Directory Domain Services
- Promote to Domain Controller
- Join 8 computers to domain
- Create domain user accounts

**Benefits gained:**
- Single sign-on (one username/password for all PCs)
- Group Policy for password policies
- Centralized user management
- Easier security and compliance

**Alternatives if server not feasible:**
- Microsoft 365 with Azure AD Join
- Third-party solutions like JumpCloud

---

### Scenario 4: Remote Desktop Stopped After Update

**Firewall-related checks:**

1. **Verify RDP firewall rule is enabled:**
   - Open `wf.msc`
   - Inbound Rules → Remote Desktop - User Mode (TCP-In)
   - Ensure Enabled = Yes

2. **Check rule applies to correct profile:**
   - Properties → Advanced tab
   - Verify Domain and Private are checked
   - If on Private network, Private must be checked

3. **Re-enable through Settings:**
   - Settings → System → Remote Desktop → Enable

4. **Verify no blocking rules:**
   - Check for any rules blocking port 3389
   - Check third-party firewall/antivirus

5. **Command line verification:**
   ```cmd
   netsh advfirewall firewall show rule name="Remote Desktop*"
   ```

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    WINDOWS NETWORKING QUICK REFERENCE                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  NETWORK PROFILES                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Public   → Most restrictive, discovery OFF, for untrusted networks       ║
║  Private  → Less restrictive, discovery ON, for home/work                 ║
║  Domain   → Managed by domain controller, uses domain firewall rules      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMMON DNS SERVERS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Google:     8.8.8.8 / 8.8.4.4                                            ║
║  Cloudflare: 1.1.1.1 / 1.0.0.1                                            ║
║  OpenDNS:    208.67.222.222 / 208.67.220.220                              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  TROUBLESHOOTING ORDER                                                     ║
║  ─────────────────────────────────────────────────────────────────────────║
║  1. ping 127.0.0.1      → Test TCP/IP stack                               ║
║  2. ping [own IP]       → Test local NIC                                  ║
║  3. ping [gateway]      → Test local network                              ║
║  4. ping 8.8.8.8        → Test internet (by IP)                           ║
║  5. ping google.com     → Test DNS resolution                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WORKGROUP vs DOMAIN                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Workgroup: Peer-to-peer, no server needed, each PC has own accounts      ║
║  Domain:    Centralized, requires AD server, single sign-on, Group Policy ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ncpa.cpl      → Network Connections                                       ║
║  firewall.cpl  → Windows Firewall       wf.msc     → Advanced Firewall    ║
║  net use       → Map/view network drives                                   ║
║  net view      → View network computers                                    ║
╚═══════════════════════════════════════════════════════════════════════════╝
```