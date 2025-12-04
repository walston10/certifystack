# Lab 51: Troubleshooting Common PC Issues - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Ping IP Works, Name Fails

**Most likely problem:** DNS issue

**Troubleshooting:**
1. Check DNS server configuration (`ipconfig /all`)
2. Try `nslookup google.com` - does it resolve?
3. Flush DNS cache: `ipconfig /flushdns`
4. Try different DNS server (8.8.8.8, 1.1.1.1)
5. Check DNS Client service is running

---

### Question 2: 169.254.x.x Address

**Indicates:** APIPA (Automatic Private IP Addressing) - computer couldn't get a DHCP response

**Causes:**
- DHCP server down or unreachable
- Network cable disconnected
- Switch/router issue
- NIC problem
- DHCP scope exhausted

**Fix:** Check physical connection, verify DHCP server, try `ipconfig /release` then `/renew`

---

### Question 3: Limited Connectivity

**Three possible causes:**
1. **No default gateway** - Can reach local network but not internet
2. **DNS issues** - Can reach IPs but not names
3. **IP conflict** - Another device has same IP
4. **DHCP partial failure** - Got IP but not gateway/DNS
5. **Firewall blocking** - Local or network firewall issue

---

### Question 4: Missing DLL Error

**What likely happened:**
- Another program was uninstalled that shared the DLL
- Windows Update removed/changed the DLL
- Antivirus quarantined the DLL
- User deleted it accidentally
- Disk corruption

**Fixes:**
1. Reinstall the application
2. Install Visual C++ Redistributables (common DLL source)
3. Run `sfc /scannow`
4. Download DLL from legitimate source (careful - malware risk)

---

### Question 5: 15-Minute Boot

**Start troubleshooting:**
1. **Task Manager → Startup tab** - Disable high-impact items
2. **msconfig → Services** - Check for slow third-party services
3. **Event Viewer** - Errors during boot time
4. **Disk health** - Failing drive causes slow reads
5. **Check for malware** - Full scan
6. **Defragment** (if HDD) - Fragmentation slows boot

---

## Section 2: Activities - Answers

### Activity A: Network Troubleshooting

**Test interpretation:**

| Test Result | What It Means | Likely Problem |
|-------------|---------------|----------------|
| 127.0.0.1 fails | TCP/IP stack broken | Reinstall network adapter, check TCP/IP |
| Gateway fails | Can't reach local network | Cable, NIC, switch, wrong IP config |
| 8.8.8.8 fails | Can't reach internet | Router, ISP, firewall |
| google.com fails (IP works) | DNS not working | DNS server config, DNS service |
| All succeed | Network working | Problem is elsewhere |

---

### Activity B: Symptom-to-Cause Matching

| Symptom | Cause |
|---------|-------|
| BSOD with IRQL_NOT_LESS_OR_EQUAL | B - Driver issue |
| Computer freezes, then works after 30 sec | F - Disk I/O bottleneck |
| "No boot device found" | H - Boot order or drive disconnected |
| Extremely slow boot, fast once loaded | C - Too many startup programs |
| "Side-by-side configuration" error | G - Missing Visual C++ runtime |
| USB device not recognized | I - Bad USB port or driver |
| Grinding noise from computer | A - Failing hard drive |
| Computer turns off randomly during heavy use | D - Overheating |
| Clock resets to wrong date | E - CMOS battery dead |
| Programs run slowly, disk light on | J - Insufficient RAM, paging |

---

### Activity C: Startup Programs

**Impact levels:**

| Impact | Meaning |
|--------|---------|
| High | Significantly slows boot (>1 second) |
| Medium | Moderate impact (0.3-1 second) |
| Low | Minimal impact (<0.3 second) |
| Not measured | Too quick to measure or new |

**Safe to disable:**

| Category | Examples |
|----------|----------|
| Usually safe | Game launchers, updaters, cloud sync (OneDrive optional), chat apps |
| Usually keep | Antivirus, audio drivers, display drivers |
| Research first | Manufacturer utilities, unknown items |

---

### Activity D: Service Troubleshooting

**Service startup types:**

| Type | Meaning |
|------|---------|
| Automatic | Starts with Windows |
| Automatic (Delayed) | Starts shortly after boot (reduces boot time) |
| Manual | Starts when needed by another service/app |
| Disabled | Won't start unless manually changed |

**Service-to-problem mapping:**

| Problem | Service to Check |
|---------|------------------|
| Can't print | Print Spooler |
| No sound | Windows Audio, Windows Audio Endpoint Builder |
| Can't get IP | DHCP Client |
| Windows Update fails | Windows Update, BITS |
| Can't resolve DNS | DNS Client |

---

### Activity E: Disk Health

**SMART status meanings:**
- "OK" or "Pred Fail" - Predictive failure analysis
- Any "Pred Fail" = replace drive immediately

**Warning signs in chkdsk:**
- Bad sectors (non-zero)
- File system errors
- Index problems

---

### Activity F: Application Crashes

**Common fixes:**

| Issue | Fix |
|-------|-----|
| Missing DLL | Reinstall app, install VC++ redistributables |
| Side-by-side configuration | Install correct VC++ version, repair app |
| App won't start | Run as admin, compatibility mode, reinstall |
| Crashes on specific action | Update app, check for conflicts, repair |
| "Can't run on this PC" | Wrong architecture (32 vs 64-bit), wrong OS version |

---

### Activity G: Performance Baseline

**Normal vs concerning:**

| Metric | Normal | Concerning |
|--------|--------|------------|
| CPU idle | < 5% | > 20% idle |
| Memory usage | 40-70% | > 90% constantly |
| Disk activity | Occasional spikes | 100% constant |

---

## Section 3: Reflection - Answers

### Scenario 1: "Computer Running Slow"

**Diagnostic approach:**

1. **Task Manager first:**
   - What's using CPU/Memory/Disk?
   - Any process at 100%?
   
2. **Check Startup programs:**
   - Disable unnecessary high-impact items
   
3. **Check disk health:**
   - Is disk constantly at 100%?
   - Run CrystalDiskInfo for SMART status
   
4. **Check for malware:**
   - Full antivirus scan
   
5. **Check disk space:**
   - Need 10-15% free for performance
   
6. **Check RAM:**
   - Is memory constantly >90%?
   - Memory Diagnostic if suspected

7. **Check for updates:**
   - Pending updates can cause slowness

---

### Scenario 2: KERNEL_DATA_INPAGE_ERROR

**Likely cause:** Disk or memory problem - Windows couldn't read data from disk into memory

**Investigation:**
1. **Check disk health immediately** - This error often indicates failing drive
2. Run `chkdsk /f /r` (requires reboot)
3. Check SMART status with CrystalDiskInfo
4. Run Memory Diagnostic (`mdsched.exe`)
5. Check Event Viewer for disk errors (Event ID 7, 51, 52)

**Action:** If disk shows bad sectors or SMART warnings, backup immediately and replace drive.

---

### Scenario 3: Internet Works, Internal Resources Don't

**Diagnosis:** DNS works for internet (google.com) but not for internal names

**Most likely issues:**
1. **Internal DNS not configured** - Check if DNS server includes internal DNS
2. **DNS suffix not set** - Can't resolve short names (server1 vs server1.company.local)
3. **Firewall blocking internal** - Different rules for internal vs external
4. **Wrong VLAN** - On guest network instead of corporate

**Quick tests:**
- `ping servername` - Fails
- `ping servername.domain.local` - May work (DNS suffix issue)
- `ping 192.168.1.10` (server IP) - Works = DNS issue
- Check `ipconfig /all` for DNS suffix

---

### Scenario 4: Won't Boot After Power Outage

**BIOS accessible means:**
- Motherboard works
- CPU likely okay
- Some RAM works
- Power supply partially working

**Check in order:**

1. **Boot device order** - Power outage may have reset BIOS settings
2. **Drive detected?** - Check if BIOS sees the boot drive
3. **Drive cables** - Outage can coincide with loose connection
4. **Boot mode** - UEFI vs Legacy may have changed
5. **Secure Boot** - May have been reset
6. **Windows Boot Manager** - May need repair via recovery USB

**If drive not detected:**
- Check SATA/power cables
- Try different SATA port
- Test drive in another computer
- Drive may have failed during outage (power surge)

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                  COMMON PC ISSUES QUICK REFERENCE                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  NETWORK SEQUENCE: loopback → gateway → internet → DNS                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SLOW COMPUTER CHECKLIST                                                   ║
║  ─────────────────────────────────────────────────────────────────────────║
║  1. Task Manager - what's using resources?                                ║
║  2. Startup programs - disable unnecessary                                ║
║  3. Disk health - failing drive?                                          ║
║  4. Malware scan                                                          ║
║  5. Disk space - need 10-15% free                                         ║
║  6. RAM - enough for workload?                                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  169.254.x.x = No DHCP (check cable, server, NIC)                         ║
║  Grinding noise = Failing HDD (backup NOW)                                ║
║  Clock resets = CMOS battery                                              ║
║  Random shutdown = Overheating or PSU                                     ║
╚═══════════════════════════════════════════════════════════════════════════╝
```