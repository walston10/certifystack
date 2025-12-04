# Lab 33: Windows Control Panel and Settings - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Settings App vs Control Panel

**Why both exist:**
- **Control Panel** is the legacy interface from Windows XP/7/8 era, with decades of established applets
- **Settings app** is the modern, touch-friendly interface Microsoft introduced in Windows 8 and refined since
- Microsoft is gradually moving functionality from Control Panel to Settings
- Some advanced features still only exist in Control Panel (Internet Options security zones, advanced device properties, etc.)

**Future direction:** Microsoft is moving toward the Settings app. In Windows 11, many Control Panel links redirect to Settings. However, for A+ exam purposes, you need to know BOTH.

---

### Question 2: Proxy Settings Location

**Control Panel applet:** Internet Options (Internet Properties)
**Run command:** `inetcpl.cpl`
**Tab:** Connections
**Specific location:** Connections tab → LAN settings button → Proxy server section

You can also configure proxy via Settings → Network & Internet → Proxy, but the Control Panel location is what the exam typically references.

---

### Question 3: Restricting Microsoft Store

**Options:**

1. **Family Safety (Microsoft account-based)**
   - Settings → Accounts → Family & other users
   - Set up child account with app/game restrictions

2. **Local Group Policy (Pro/Enterprise only)**
   - `gpedit.msc` → Computer Configuration → Administrative Templates → Windows Components → Store
   - "Turn off the Store application"

3. **AppLocker (Enterprise only)**
   - Restrict specific applications from running

4. **Microsoft Store settings**
   - Settings → Apps → Microsoft Store settings
   - Limit app installation sources

---

### Question 4: Device Manager vs Settings

Three things ONLY in Device Manager:

1. **Roll back drivers** - Revert to previous driver version after a problematic update
2. **Update driver from specific location** - Choose exactly which driver file to install
3. **View/configure hardware resources** - IRQ, I/O addresses, memory ranges
4. **Disable/Enable specific hardware** - Temporarily disable without uninstalling
5. **View device events and error codes** - Detailed hardware event history
6. **Configure advanced hardware settings** - Adapter-specific options

---

### Question 5: Uninstall Differences

| Feature | Programs and Features | Settings → Apps |
|---------|----------------------|-----------------|
| Shows | Traditional desktop apps | Both desktop apps AND Windows Store apps |
| Interface | Classic, table view | Modern, card-based |
| Details | Publisher, size, install date | Size, install date |
| Update view | Click to see installed updates | Updates shown elsewhere |
| Store apps | Not shown | Shown |
| Uninstall method | Runs traditional uninstaller | May use modern uninstall or traditional |

**Key difference:** Settings → Apps shows Windows Store (UWP) apps that Programs and Features doesn't display.

---

## Section 2: Activities - Answers

### Activity A: Control Panel Quick Access

| Command | What Opens |
|---------|-----------|
| control | Main Control Panel window |
| control panel | Main Control Panel window |
| appwiz.cpl | Programs and Features |
| ncpa.cpl | Network Connections |
| desk.cpl | Display Settings (redirects to Settings in Win11) |
| sysdm.cpl | System Properties (Computer Name, Hardware, Advanced) |
| inetcpl.cpl | Internet Properties/Options |
| firewall.cpl | Windows Defender Firewall |
| powercfg.cpl | Power Options |
| main.cpl | Mouse Properties |
| mmsys.cpl | Sound |
| timedate.cpl | Date and Time |

**God Mode folder contents examples:**
1. Add a device
2. Change User Account Control settings
3. Create a password reset disk
4. Manage BitLocker
5. View installed updates

God Mode creates a special folder showing ALL Control Panel items in a flat list, organized by category. Very useful for IT support!

---

### Activity B: Control Panel Applet Mapping

| Task | Control Panel Applet | Run Command |
|------|---------------------|-------------|
| Uninstall a desktop application | Programs and Features | appwiz.cpl |
| Configure default gateway | Network Connections (adapter properties) | ncpa.cpl |
| Change time zone | Date and Time | timedate.cpl |
| Adjust screen resolution | Display | desk.cpl |
| Set default printer | Devices and Printers | control printers |
| Configure browser security zones | Internet Options | inetcpl.cpl |
| View device drivers | Device Manager | devmgmt.msc |
| Change power plan | Power Options | powercfg.cpl |
| Configure Windows Firewall rules | Windows Defender Firewall | firewall.cpl |
| Set up file sharing | Network and Sharing Center | control /name Microsoft.NetworkAndSharingCenter |
| Index locations for search | Indexing Options | control /name Microsoft.IndexingOptions |
| Create a system restore point | System Properties (Protection) | sysdm.cpl (Protection tab) |
| Configure accessibility options | Ease of Access Center | control access.cpl |
| Manage local user accounts | User Accounts | control userpasswords2 or netplwiz |
| View and manage certificates | Internet Options | inetcpl.cpl (Content tab) or certmgr.msc |

---

### Activity C: Internet Options

**Tab purposes:**

| Tab | Main Purpose | Two Configurable Items |
|-----|--------------|------------------------|
| General | Browser startup settings | Homepage URL, Startup behavior (tabs), Browsing history deletion |
| Security | Website trust levels | Security zones, Protected Mode, Custom security levels per zone |
| Privacy | Cookie and tracking settings | Pop-up blocker, InPrivate browsing, Location permissions |
| Content | Certificates and autocomplete | Manage certificates, AutoComplete settings, Family safety |
| Connections | Network connectivity | Dial-up/VPN connections, LAN/Proxy settings |
| Programs | Default applications | Default browser, Manage add-ons, File associations |
| Advanced | Fine-grained browser settings | Reset browser settings, SSL/TLS versions, Accessibility options |

**Security Zones:**

| Zone | Icon | Default Security Level | Example Sites |
|------|------|------------------------|---------------|
| Internet | Globe | Medium-high | All websites not in other zones |
| Local intranet | Buildings | Medium-low | Internal company sites, LAN resources |
| Trusted sites | Checkmark | Medium | Sites you explicitly trust (banks, etc.) |
| Restricted sites | Red circle | High | Sites you explicitly distrust |

---

### Activity D: Device Manager

**Device status icons:**

| Icon | Meaning | How to Fix |
|------|---------|------------|
| Yellow triangle with ! | Driver problem | Update driver, roll back driver, or reinstall |
| Red X | Device disabled | Right-click → Enable device |
| Down arrow | Device disabled by user | Right-click → Enable device |
| No icon | Working properly | No action needed |

**Network adapter properties tabs:**

| Tab | Information/Options |
|-----|---------------------|
| General | Device name, type, status, troubleshoot button |
| Advanced | Wake on Magic Packet, Speed/Duplex, VLAN ID, etc. |
| Driver | Driver version, date, provider; Update, Roll Back, Uninstall |
| Details | Hardware IDs, compatible IDs, device instance path |
| Events | Recent device events with timestamps |
| Resources | IRQ, Memory Range, I/O Range settings |

---

### Activity E: Programs and Features vs Settings

**Key differences found:**

| Aspect | Programs and Features | Settings Apps |
|--------|----------------------|---------------|
| Shows Store apps | No | Yes |
| Shows desktop apps | Yes | Yes |
| Publisher info | Always shown | Sometimes hidden |
| Size accuracy | Generally accurate | May show "Unknown" |
| Installed updates | Separate link | Different location |
| Sort options | Column headers | Sort dropdown |

**Common Windows Features enabled:**

1. Microsoft Print to PDF
2. .NET Framework 3.5 (includes 2.0 and 3.0)
3. Windows Media Player
4. Internet Explorer 11 (or IE mode in Edge)
5. Windows PowerShell 2.0

---

### Activity F: Power Options

**Power plan settings example:**

| Setting | Typical Value |
|---------|---------------|
| Active power plan | Balanced |
| Display off (plugged in) | 10 minutes |
| Sleep (plugged in) | 30 minutes |
| Display off (battery) | 5 minutes |
| Sleep (battery) | 15 minutes |

**Advanced settings:**

| Setting | Typical Value |
|---------|---------------|
| Hard disk → Turn off after | 20 minutes |
| USB selective suspend | Enabled |
| Lid close action | Sleep |
| Max processor state | 100% |

**Battery report location:** Saved to the directory where you ran the command, typically `C:\Windows\System32\battery-report.html` or your current directory.

---

### Activity G: Network and Sharing Center

**Typical connection information:**

| Setting | Example Value |
|---------|---------------|
| Network name | Home-WiFi or CORP-LAN |
| Network type | Private |
| IPv4 address | 192.168.1.105 |
| Subnet mask | 255.255.255.0 |
| Default gateway | 192.168.1.1 |
| DNS servers | 192.168.1.1 or 8.8.8.8 |
| MAC address | A4-B1-C2-D3-E4-F5 |

**Protocols bound to adapter:**

1. Client for Microsoft Networks
2. File and Printer Sharing for Microsoft Networks
3. QoS Packet Scheduler
4. Internet Protocol Version 4 (TCP/IPv4)
5. Internet Protocol Version 6 (TCP/IPv6)
6. Link-Layer Topology Discovery Mapper I/O Driver
7. Link-Layer Topology Discovery Responder

---

## Section 3: Reflection - Answers

### Scenario 1: Proxy Settings Issue

**Location to check:**

1. Open Internet Options: `inetcpl.cpl`
2. Go to **Connections** tab
3. Click **LAN settings** button
4. In the Proxy server section:
   - Verify "Use a proxy server" is checked (if required)
   - Verify the Address and Port are correct
   - Check if "Bypass proxy server for local addresses" is appropriate

**Alternative path:**
- Settings → Network & Internet → Proxy

**Troubleshooting steps:**
1. Compare proxy settings to known-working computer
2. Verify proxy server is reachable: `ping proxyserver.company.com`
3. Test with proxy disabled temporarily
4. Check with IT for correct proxy configuration
5. Look for automatic configuration script issues

---

### Scenario 2: Webcam Yellow Triangle

**Troubleshooting steps in Device Manager:**

1. **Right-click the webcam → Properties**
   - Read the error message in Device Status
   - Note the error code (e.g., Code 10, Code 28, Code 43)

2. **Try updating the driver:**
   - Right-click → Update driver
   - "Search automatically for drivers"
   - If that fails, try "Browse my computer for drivers"

3. **Roll back the driver:**
   - If the issue started after an update
   - Properties → Driver tab → Roll Back Driver

4. **Uninstall and reinstall:**
   - Right-click → Uninstall device
   - Check "Delete the driver software for this device" if available
   - Restart computer (Windows will reinstall)

5. **Check Windows Update:**
   - Settings → Windows Update
   - Check for optional driver updates

6. **Manufacturer website:**
   - Download latest driver directly from webcam manufacturer

**Common error codes:**
- Code 10: Device cannot start
- Code 28: Driver not installed
- Code 43: Device reported a problem

---

### Scenario 3: Power Settings Configuration

**Configuration steps:**

1. Open Power Options: `powercfg.cpl`

2. Click "Change plan settings" for the active plan

3. **For "On battery" column:**
   - Turn off display: 5 minutes
   - Put computer to sleep: 5 minutes

4. **For "Plugged in" column:**
   - Turn off display: As desired (10-15 min)
   - Put computer to sleep: **Never**

5. Click "Save changes"

**For deployment at scale:**

Use Group Policy or PowerShell:
```powershell
# Set sleep timeout when plugged in to 0 (never)
powercfg /change standby-timeout-ac 0

# Set sleep timeout on battery to 5 minutes
powercfg /change standby-timeout-dc 5
```

---

### Scenario 4: Printer Sharing Setup

**Step 1: Enable sharing on the host PC (receptionist)**

1. Network and Sharing Center
2. Change advanced sharing settings
3. Enable:
   - Network discovery
   - File and printer sharing
   - Password protected sharing (optional, for security)

**Step 2: Share the printer**

1. Control Panel → Devices and Printers
2. Right-click printer → Printer properties
3. Sharing tab
4. Check "Share this printer"
5. Give it a share name (e.g., "ReceptionPrinter")
6. Optionally: Install additional drivers for other Windows versions

**Step 3: Connect from other PCs**

1. Open File Explorer
2. Type `\\receptionist-pc-name\` in address bar
3. Double-click the shared printer
4. OR: Control Panel → Devices and Printers → Add a printer → Network printer

**Firewall consideration:**
Ensure File and Printer Sharing is allowed through Windows Firewall for the Private network profile.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    CONTROL PANEL QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ESSENTIAL RUN COMMANDS                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  control          → Main Control Panel    appwiz.cpl  → Programs/Features ║
║  ncpa.cpl         → Network Connections   sysdm.cpl   → System Properties ║
║  devmgmt.msc      → Device Manager        inetcpl.cpl → Internet Options  ║
║  firewall.cpl     → Windows Firewall      powercfg.cpl→ Power Options     ║
║  mmsys.cpl        → Sound                 desk.cpl    → Display Settings  ║
║  timedate.cpl     → Date/Time             main.cpl    → Mouse Properties  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DEVICE MANAGER STATUS ICONS                                               ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ⚠️ Yellow triangle  = Driver problem (missing, corrupted, incompatible)   ║
║  ❌ Red X            = Device disabled                                     ║
║  ⬇️ Down arrow       = Device disabled by user                             ║
║  ❓ Question mark    = Unknown device (no driver)                          ║
║  (No icon)          = Device working properly                              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  INTERNET OPTIONS TABS                                                     ║
║  ─────────────────────────────────────────────────────────────────────────║
║  General     → Homepage, browsing history, tabs                            ║
║  Security    → Zones (Internet, Intranet, Trusted, Restricted)            ║
║  Privacy     → Pop-up blocker, InPrivate, location                        ║
║  Content     → Certificates, AutoComplete, family safety                   ║
║  Connections → Dial-up, VPN, LAN/Proxy settings                           ║
║  Programs    → Default browser, add-ons                                    ║
║  Advanced    → Accessibility, security, multimedia settings               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  POWER COMMANDS                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  powercfg /query         → View current power settings                    ║
║  powercfg /batteryreport → Generate battery health report                 ║
║  powercfg /energy        → Energy efficiency diagnostics                  ║
║  powercfg /hibernate on  → Enable hibernation                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  GOD MODE                                                                  ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Create folder: GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}            ║
║  Opens a master list of ALL Control Panel settings in one place            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```