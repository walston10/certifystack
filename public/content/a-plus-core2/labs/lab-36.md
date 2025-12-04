# Lab 36: Windows Networking

**Tier:** 1  
**Time:** 35-45 minutes  
**Exam Objectives:** 1.6 - Given a scenario, configure Microsoft Windows networking features on a client/desktop

---

## Section 1: Concept Check (5 min)

1. What's the difference between a Public, Private, and Domain network profile in Windows? Which is most restrictive?

2. A computer has IP 169.254.x.x. What does this indicate and what's it called?

3. Explain the difference between a Workgroup and a Domain. Which requires a server?

4. What must be enabled for two Windows computers to share files with each other on a home network?

5. A user can access the internet but can't reach \\fileserver. What are three things you'd check?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Network Profile Configuration

**Goal:** Understand and configure network profiles.

**Step 1:** Identify current profile

Open Settings → Network & Internet

| Your Network | Current Profile |
|--------------|-----------------|
| Network Name | |
| Profile Type (Public/Private) | |

**Step 2:** Explore profile differences

| Setting | Private Network | Public Network |
|---------|-----------------|----------------|
| Network discovery | | |
| File sharing | | |
| Firewall strictness | | |
| Recommended for | | |

**Step 3:** View profile in Control Panel

Open: Network and Sharing Center

| Information | Value |
|-------------|-------|
| Active network name | |
| Access type | |
| Connections | |

---

#### Activity B: IP Configuration

**Goal:** Configure and verify IP settings.

**Step 1:** View current configuration

Open Command Prompt: `ipconfig /all`

| Setting | Your Value |
|---------|------------|
| Adapter Description | |
| Physical Address (MAC) | |
| DHCP Enabled | |
| IPv4 Address | |
| Subnet Mask | |
| Default Gateway | |
| DHCP Server | |
| DNS Servers | |
| Lease Obtained | |
| Lease Expires | |

**Step 2:** Access adapter properties

Open: `ncpa.cpl` → Right-click adapter → Properties → IPv4 → Properties

| Current Setting | Value |
|-----------------|-------|
| Obtain IP automatically? | Yes / No |
| Obtain DNS automatically? | Yes / No |
| If static, IP address | |
| If static, DNS servers | |

**Step 3:** Test alternate DNS

Without changing your settings permanently, document what you would enter to use:

| DNS Provider | Primary | Secondary |
|--------------|---------|-----------|
| Google | | |
| Cloudflare | | |
| OpenDNS | | |

---

#### Activity C: Network Discovery and Sharing

**Goal:** Configure sharing settings.

**Step 1:** Access advanced sharing settings

Control Panel → Network and Sharing Center → Change advanced sharing settings

Document current settings for your CURRENT profile:

| Setting | Current State |
|---------|---------------|
| Network discovery | On / Off |
| File and printer sharing | On / Off |
| Public folder sharing | On / Off |
| Media streaming | On / Off |
| File sharing connections | 40-bit / 128-bit |
| Password protected sharing | On / Off |

**Step 2:** Understand sharing implications

| Scenario | Required Settings |
|----------|-------------------|
| Share printer with family | |
| Allow access to Public folder | |
| Require password to access shares | |
| See other computers on network | |

---

#### Activity D: Workgroup Configuration

**Goal:** View and understand workgroup settings.

**Step 1:** Check current workgroup

Open: `sysdm.cpl`

| Setting | Your Value |
|---------|------------|
| Computer name | |
| Full computer name | |
| Computer description | |
| Workgroup or Domain | |
| Workgroup/Domain name | |

**Step 2:** Via command line

```cmd
systeminfo | findstr /B /C:"Domain"
hostname
```

What is your domain/workgroup? _______________

**Step 3:** Workgroup vs Domain comparison

| Feature | Workgroup | Domain |
|---------|-----------|--------|
| Central management | | |
| Requires server | | |
| Maximum computers | | |
| Single sign-on | | |
| Group Policy | | |
| Typical use | | |

---

#### Activity E: Windows Firewall Configuration

**Goal:** Configure firewall rules.

**Step 1:** Access Windows Firewall

Open: `firewall.cpl`

| Profile | State (On/Off) |
|---------|----------------|
| Domain networks | |
| Private networks | |
| Public networks | |

**Step 2:** View allowed apps

Click "Allow an app or feature through Windows Defender Firewall"

List 5 allowed apps and their network permissions:

| App | Private | Public |
|-----|---------|--------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Step 3:** Advanced Firewall (wf.msc)

Open: `wf.msc`

| Category | Number of Rules |
|----------|-----------------|
| Inbound Rules | |
| Outbound Rules | |

Find and document a rule for Remote Desktop:

| Property | Value |
|----------|-------|
| Rule Name | |
| Enabled | |
| Action | Allow / Block |
| Protocol | |
| Local Port | |
| Profile | |

---

#### Activity F: Network Troubleshooting Commands

**Goal:** Practice systematic network troubleshooting.

**Complete this troubleshooting sequence:**

| Step | Command | Your Result | What It Tests |
|------|---------|-------------|---------------|
| 1 | `ping 127.0.0.1` | | |
| 2 | `ping [your IP]` | | |
| 3 | `ping [gateway]` | | |
| 4 | `ping 8.8.8.8` | | |
| 5 | `ping google.com` | | |
| 6 | `nslookup google.com` | | |

**If step 4 works but step 5 fails, the problem is:** _______________

**If step 3 fails but step 2 works, the problem is:** _______________

---

#### Activity G: Mapped Network Drives

**Goal:** Understand network drive mapping.

**Step 1:** View current mappings

```cmd
net use
```

List any mapped drives:

| Drive Letter | Network Path | Status |
|--------------|--------------|--------|
| | | |

**Step 2:** Map a drive (example syntax)

To map a drive, you would use:
```cmd
net use Z: \\computername\sharename
```

To disconnect:
```cmd
net use Z: /delete
```

**Step 3:** Persistent mappings

What does the `/persistent:yes` switch do? _______________

---

## Section 3: Reflection (5 min)

**Scenario 1:** A user on a laptop connects to coffee shop Wi-Fi and suddenly can't see their home computer for file sharing. When they get home, the home computer is still invisible. What happened and how do you fix it?

**Scenario 2:** An employee reports they can access Google but can't access \\server1\files. Ping to server1 works. What are your troubleshooting steps?

**Scenario 3:** A small business with 8 computers wants centralized login and the ability to enforce password policies. They're currently using a Workgroup. What would you recommend?

**Scenario 4:** After a Windows update, Remote Desktop stopped working. The service is running. What firewall-related steps would you check?

---

## What You Learned Today

- ✅ Network profiles (Public, Private, Domain) and their implications
- ✅ IP configuration (DHCP vs static, viewing with ipconfig)
- ✅ Network discovery and sharing settings
- ✅ Workgroup vs Domain concepts
- ✅ Windows Firewall configuration and rules
- ✅ Network troubleshooting methodology
- ✅ Mapping network drives

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