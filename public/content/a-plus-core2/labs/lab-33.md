# Lab 33: Windows Control Panel and Settings

**Tier:** 1  
**Time:** 35-45 minutes  
**Exam Objectives:** 1.3 - Given a scenario, use features and tools of the Microsoft Windows 10 operating system (Control Panel utilities)

---

## Section 1: Concept Check (5 min)

Answer these questions based on your current knowledge:

1. Windows has both a Settings app and Control Panel. Why do both exist, and which is Microsoft moving toward for the future?

2. You need to configure proxy settings for a corporate network. Which Control Panel applet would you use, and what specific tab contains proxy configuration?

3. A user wants to prevent their teenager from installing games from the Microsoft Store. What Control Panel or Settings area would help accomplish this?

4. Name three things you can configure in Device Manager that you cannot configure in the Settings app.

5. What is the difference between "Uninstall" in Programs and Features versus the "Uninstall" option in Settings → Apps?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Control Panel Quick Access Methods

**Goal:** Master multiple ways to access Control Panel and its applets.

**Method 1:** Run Commands

Test each command (Windows + R, then type the command):

| Command | What Opens | Successfully Opened? |
|---------|-----------|---------------------|
| control | | |
| control panel | | |
| appwiz.cpl | | |
| ncpa.cpl | | |
| desk.cpl | | |
| sysdm.cpl | | |
| inetcpl.cpl | | |
| firewall.cpl | | |
| powercfg.cpl | | |
| main.cpl | | |
| mmsys.cpl | | |
| timedate.cpl | | |

**Method 2:** God Mode

Create a folder on your desktop with this exact name:
```
GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}
```

What happens when you open this folder? Document 5 interesting items you find:

1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

---

#### Activity B: Control Panel Applet Mapping

**Goal:** Know which applet handles which tasks.

For each task, identify the correct Control Panel applet:

| Task | Control Panel Applet | Run Command |
|------|---------------------|-------------|
| Uninstall a desktop application | | |
| Configure default gateway | | |
| Change time zone | | |
| Adjust screen resolution | | |
| Set default printer | | |
| Configure browser security zones | | |
| View device drivers | | |
| Change power plan (laptop sleep) | | |
| Configure Windows Firewall rules | | |
| Set up file sharing | | |
| Index locations for search | | |
| Create a system restore point | | |
| Configure accessibility options | | |
| Manage local user accounts | | |
| View and manage certificates | | |

---

#### Activity C: Internet Options Deep Dive

**Goal:** Understand Internet Properties configuration.

Open Internet Options: `inetcpl.cpl`

Document the purpose of each tab:

| Tab | Main Purpose | Two Things You Can Configure Here |
|-----|--------------|-----------------------------------|
| General | | |
| Security | | |
| Privacy | | |
| Content | | |
| Connections | | |
| Programs | | |
| Advanced | | |

**Security Zone Exercise:**

Click the Security tab. Document the default security level for each zone:

| Zone | Icon | Security Level | Example Sites |
|------|------|----------------|---------------|
| Internet | | | |
| Local intranet | | | |
| Trusted sites | | | |
| Restricted sites | | | |

**Proxy Configuration:**

Navigate to Connections → LAN settings

| Setting | Current Value |
|---------|---------------|
| Automatically detect settings | Enabled / Disabled |
| Use automatic configuration script | Enabled / Disabled |
| Use a proxy server | Enabled / Disabled |

---

#### Activity D: Device Manager Exploration

**Goal:** Navigate Device Manager and understand device states.

Open Device Manager: `devmgmt.msc`

**Step 1:** Document your hardware

| Category | Number of Devices | Example Device |
|----------|-------------------|----------------|
| Audio inputs and outputs | | |
| Disk drives | | |
| Display adapters | | |
| Keyboards | | |
| Mice and other pointing devices | | |
| Network adapters | | |
| Processors | | |

**Step 2:** View hidden devices

Click View → Show hidden devices

What new devices appear? List 3:

1. _______________
2. _______________
3. _______________

**Step 3:** Explore device properties

Right-click on your primary network adapter → Properties

Document each tab:

| Tab | Information/Options Available |
|-----|------------------------------|
| General | |
| Advanced | |
| Driver | |
| Details | |
| Events | |
| Resources | |

**Step 4:** Device status icons

| Icon | Meaning | How to Fix |
|------|---------|------------|
| Yellow triangle with ! | | |
| Red X | | |
| Down arrow | | |
| No icon (normal) | | |

---

#### Activity E: Programs and Features vs Settings Apps

**Goal:** Understand both methods for managing applications.

**Method 1: Control Panel**

Open Programs and Features: `appwiz.cpl`

List 5 applications installed on your system:

| Application Name | Publisher | Size | Install Date |
|------------------|-----------|------|--------------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

Click "View installed updates" on the left.

How many Windows updates are listed? _______________

**Method 2: Settings App**

Open Settings → Apps → Installed apps (Win 11) or Apps & features (Win 10)

Compare the same 5 applications:

| Application | Shown in Both? | Different Information? |
|-------------|----------------|----------------------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Windows Features:**

Click "Turn Windows features on or off" in Programs and Features (or "Optional features" in Settings)

Document 5 optional features that are currently ENABLED:

1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

---

#### Activity F: Power Options Configuration

**Goal:** Understand power management settings.

Open Power Options: `powercfg.cpl`

**Step 1:** Document current power plan

| Setting | Current Value |
|---------|---------------|
| Active power plan name | |
| Turn off display (plugged in) | |
| Put computer to sleep (plugged in) | |
| Turn off display (on battery) | |
| Put computer to sleep (on battery) | |

**Step 2:** Advanced power settings

Click "Change plan settings" → "Change advanced power settings"

Navigate to and document these settings:

| Category > Setting | Current Value |
|--------------------|---------------|
| Hard disk > Turn off after | |
| Sleep > Sleep after | |
| USB settings > USB selective suspend | |
| Power buttons and lid > Lid close action | |
| Processor power management > Max processor state | |

**Step 3:** Command line power info

Open Command Prompt as Administrator and run:
```
powercfg /query
powercfg /batteryreport
```

Where does the battery report get saved? _______________

---

#### Activity G: Network and Sharing Center

**Goal:** Configure network settings and sharing.

Open Network and Sharing Center: `ncpa.cpl` then click the network icon

**Step 1:** Document your connection

| Setting | Your Value |
|---------|------------|
| Network name | |
| Network type (Public/Private) | |
| IPv4 address | |
| IPv4 subnet mask | |
| IPv4 default gateway | |
| IPv4 DNS servers | |
| Physical address (MAC) | |

**Step 2:** Advanced sharing settings

Click "Change advanced sharing settings"

| Setting Category | Current Configuration |
|------------------|----------------------|
| Network discovery | |
| File and printer sharing | |
| Public folder sharing | |
| Password protected sharing | |

**Step 3:** Change adapter settings

Click "Change adapter settings" (or `ncpa.cpl` directly)

Right-click your primary adapter → Properties

List the protocols/services bound to this adapter:

1. _______________
2. _______________
3. _______________
4. _______________

---

## Section 3: Reflection (5 min)

Consider these real-world scenarios:

**Scenario 1:** A user reports that their company's internal website works fine, but they can't access any external websites. You check their browser and see that a proxy server is configured, but the address appears incorrect. Where exactly would you go to view and modify proxy settings?

**Scenario 2:** After a Windows Update, a user's USB webcam stopped working. In Device Manager, you see a yellow triangle on the webcam. Walk through the troubleshooting steps you would take using Device Manager.

**Scenario 3:** Your company is deploying new laptops and needs to configure power settings so that laptops never sleep when plugged in (for overnight updates), but sleep after 5 minutes on battery to preserve power. Explain how you would configure this.

**Scenario 4:** A small office wants to share a printer connected to the receptionist's Windows PC with 5 other computers on the network. What Control Panel utilities and settings would you need to configure?

---

## What You Learned Today

- ✅ Multiple methods to access Control Panel (run commands, search, God Mode)
- ✅ The purpose of major Control Panel applets (.cpl files)
- ✅ How to navigate Internet Options (security zones, proxy settings)
- ✅ Device Manager navigation and understanding device status icons
- ✅ Difference between Programs and Features and Settings Apps
- ✅ Power management configuration and reporting
- ✅ Network and Sharing Center configuration
- ✅ The relationship between Control Panel and modern Settings app

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