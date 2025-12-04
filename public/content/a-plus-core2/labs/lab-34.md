# Lab 34: Windows Administrative Tools

**Tier:** 1  
**Time:** 35-45 minutes  
**Exam Objectives:** 1.3 - Given a scenario, use features and tools of the Microsoft Windows 10 operating system (Administrative Tools)

---

## Section 1: Concept Check (5 min)

Answer these questions based on your current knowledge:

1. What is Microsoft Management Console (MMC) and what is a "snap-in"? Give two examples of snap-ins.

2. A user complains their computer is running slow. Name three tabs in Task Manager you would use to diagnose the issue and what you'd look for in each.

3. What is the difference between Event Viewer's Application log, Security log, and System log?

4. In Disk Management, what's the difference between a Basic disk and a Dynamic disk? Which is more common for home users?

5. A service is set to "Automatic (Delayed Start)" instead of just "Automatic." What's the difference and why might this be configured?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Task Manager Deep Dive

**Goal:** Master all tabs of Task Manager.

Open Task Manager: `Ctrl + Shift + Esc`

Click "More details" if in simple mode.

**Tab 1: Processes**

Document the top 5 resource consumers:

| Process Name | CPU % | Memory | Disk | Network |
|--------------|-------|--------|------|---------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

Right-click a column header. What additional columns can you add?

List 3: _______________

**Tab 2: Performance**

| Resource | Current Usage | Graph Trend |
|----------|---------------|-------------|
| CPU | | |
| Memory | | |
| Disk 0 | | |
| Wi-Fi or Ethernet | | |
| GPU (if present) | | |

Click "Open Resource Monitor" at the bottom. What additional detail does it provide?

**Tab 3: App history**

What's the difference between "CPU time" and "Network" columns?

**Tab 4: Startup**

| Application | Publisher | Status | Startup Impact |
|-------------|-----------|--------|----------------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

Which startup items would you recommend disabling? Why?

**Tab 5: Users**

How many users are currently logged in? _______________

Can you see processes for other users? Why or why not?

**Tab 6: Details**

Find your browser process. Document:

| Property | Value |
|----------|-------|
| PID | |
| Status | |
| Username | |
| CPU | |
| Memory | |

**Tab 7: Services**

How many services are currently Running? _______________

How many are Stopped? _______________

---

#### Activity B: Event Viewer Investigation

**Goal:** Navigate and interpret Windows event logs.

Open Event Viewer: `eventvwr.msc`

**Step 1: Windows Logs overview**

| Log | Number of Events | Most Recent Error/Warning |
|-----|------------------|--------------------------|
| Application | | |
| Security | | |
| System | | |
| Setup | | |

**Step 2: Understand event types**

| Icon/Level | Name | Meaning |
|------------|------|---------|
| Blue i | | |
| Yellow ! | | |
| Red circle | | |
| Key icon | | |

**Step 3: Find a specific event**

Navigate to System log and find any Warning or Error event.

| Property | Value |
|----------|-------|
| Level | |
| Date and Time | |
| Source | |
| Event ID | |
| Description (first line) | |

**Step 4: Create a custom view**

1. Right-click "Custom Views" → "Create Custom View"
2. Configure:
   - Event level: Warning and Error only
   - By log: Windows Logs → System
   - Name it "System Problems"
3. Save it

How many events appear in your filtered view? _______________

**Step 5: Export for analysis**

Right-click on "System" → "Save All Events As..."

What file formats are available? _______________

---

#### Activity C: Disk Management Operations

**Goal:** Understand disk and partition management.

Open Disk Management: `diskmgmt.msc`

**Step 1: Document your disk layout**

| Disk # | Type (Basic/Dynamic) | Style (MBR/GPT) | Total Size | # of Partitions |
|--------|---------------------|-----------------|------------|-----------------|
| | | | | |
| | | | | |

**Step 2: Document each volume**

| Volume | Drive Letter | Label | File System | Size | Status |
|--------|--------------|-------|-------------|------|--------|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

**Step 3: Identify special partitions**

| Partition Type | Size | Purpose |
|----------------|------|---------|
| System Reserved / EFI | | |
| Recovery | | |
| Windows (C:) | | |

**Step 4: Right-click options**

Right-click on your C: drive. Which options are available and which are grayed out?

| Option | Available? | When would you use this? |
|--------|------------|--------------------------|
| Extend Volume | | |
| Shrink Volume | | |
| Change Drive Letter | | |
| Format | | |
| Delete Volume | | |

---

#### Activity D: Services Console Exploration

**Goal:** Understand Windows services management.

Open Services: `services.msc`

**Step 1: Find important services**

Locate each service and document its status:

| Service Name | Status | Startup Type | Description |
|--------------|--------|--------------|-------------|
| Windows Update | | | |
| Print Spooler | | | |
| Windows Defender Firewall | | | |
| DHCP Client | | | |
| DNS Client | | | |
| Remote Desktop Services | | | |
| Windows Search | | | |
| Bluetooth Support Service | | | |

**Step 2: Service startup types**

| Startup Type | Meaning | Example Service |
|--------------|---------|-----------------|
| Automatic | | |
| Automatic (Delayed Start) | | |
| Manual | | |
| Disabled | | |

**Step 3: Service dependencies**

Double-click "Print Spooler" → Dependencies tab

What does Print Spooler depend on? _______________

What depends ON Print Spooler? _______________

**Step 4: Recovery options**

Click the Recovery tab for Print Spooler:

| Failure | Current Action |
|---------|----------------|
| First failure | |
| Second failure | |
| Subsequent failures | |

---

#### Activity E: Computer Management Console

**Goal:** Navigate the unified Computer Management interface.

Open Computer Management: `compmgmt.msc`

**Step 1: System Tools exploration**

Navigate to each item and note what it contains:

| Item | Purpose | Example Information Found |
|------|---------|--------------------------|
| Task Scheduler | | |
| Event Viewer | | |
| Shared Folders → Shares | | |
| Shared Folders → Sessions | | |
| Shared Folders → Open Files | | |
| Local Users and Groups | | |
| Performance → Monitoring Tools | | |
| Device Manager | | |

**Step 2: Task Scheduler**

Navigate to Task Scheduler Library → Microsoft → Windows

List 5 scheduled tasks you find:

1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

**Step 3: Shared Folders**

Under Shared Folders → Shares, document the default shares:

| Share Name | Path | Description |
|------------|------|-------------|
| | | |
| | | |
| | | |
| | | |

What does a $ at the end of a share name indicate? _______________

---

#### Activity F: Performance Monitoring

**Goal:** Use Performance Monitor for system analysis.

Open Performance Monitor: `perfmon.msc`

**Step 1: Add counters**

1. Right-click the graph → Add Counters
2. Add these counters:
   - Processor → % Processor Time → _Total
   - Memory → Available MBytes
   - PhysicalDisk → % Disk Time → _Total
   - Network Interface → Bytes Total/sec → [your adapter]

Document the baseline readings after 30 seconds:

| Counter | Average Value | Peak Value |
|---------|---------------|------------|
| % Processor Time | | |
| Available MBytes | | |
| % Disk Time | | |
| Network Bytes/sec | | |

**Step 2: Data Collector Sets**

Navigate to Data Collector Sets → System

| Collector Set | What It Monitors |
|---------------|------------------|
| System Diagnostics | |
| System Performance | |

**Step 3: Generate a performance report**

Right-click "System Performance" → Start

Wait 60 seconds, then right-click → Stop

Navigate to Reports → System → System Performance

What information does the report contain? _______________

---

## Section 3: Reflection (5 min)

Consider these real-world scenarios:

**Scenario 1:** A user's computer randomly restarts several times a day. They swear they're not doing anything unusual. Which Event Viewer log would you check first, and what would you search for?

**Scenario 2:** The IT manager asks you to find out why a particular server is slow. You notice in Task Manager that RAM is constantly at 95%+ usage. What would be your next steps using administrative tools?

**Scenario 3:** A user complains that their computer takes 5 minutes to become usable after logging in. Which tabs/tools would you use to diagnose startup problems?

**Scenario 4:** The print spooler service keeps crashing and users can't print. The service appears stopped. What would you do to troubleshoot and potentially fix this issue?

---

## What You Learned Today

- ✅ How to use all 7 tabs of Task Manager effectively
- ✅ Navigating Event Viewer and interpreting event types
- ✅ Disk Management operations and partition types
- ✅ Services console: startup types, dependencies, and recovery
- ✅ Computer Management as a unified administrative console
- ✅ Performance Monitor for system diagnostics
- ✅ Creating custom views and filtering events
- ✅ Understanding scheduled tasks and shared folders

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 ADMINISTRATIVE TOOLS QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  RUN COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  compmgmt.msc   → Computer Management     services.msc  → Services        ║
║  eventvwr.msc   → Event Viewer            diskmgmt.msc  → Disk Mgmt       ║
║  devmgmt.msc    → Device Manager          perfmon.msc   → Performance Mon ║
║  taskschd.msc   → Task Scheduler          lusrmgr.msc   → Local Users     ║
║  mmc            → Empty MMC Console       msconfig      → System Config   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  TASK MANAGER TABS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Processes   → Running apps and background processes (resource usage)     ║
║  Performance → CPU, RAM, Disk, Network, GPU graphs and details            ║
║  App history → Resource usage over time (Store apps primarily)            ║
║  Startup     → Programs that run at login (enable/disable here)           ║
║  Users       → Logged-in users and their resource usage                   ║
║  Details     → All processes with PIDs and detailed info                  ║
║  Services    → Quick view of Windows services (start/stop)                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  EVENT VIEWER LOGS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Application  → Software crashes, app errors                              ║
║  Security     → Login attempts, audit events (success/failure)            ║
║  System       → Driver failures, hardware issues, Windows events          ║
║  Setup        → Windows Update and installation events                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Event Levels: Information (blue i) | Warning (yellow !) | Error (red)    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SERVICE STARTUP TYPES                                                     ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Automatic           → Starts with Windows                                ║
║  Automatic (Delayed) → Starts after core services (reduces boot time)    ║
║  Manual              → Starts only when triggered                         ║
║  Disabled            → Cannot start at all                                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DISK TYPES                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Basic Disk → Standard partitions, primary/extended (most common)         ║
║  Dynamic Disk → Spanned, striped, mirrored volumes (server scenarios)    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  MBR → Legacy BIOS, 2TB max, 4 primary partitions                         ║
║  GPT → UEFI, no practical limit, 128 partitions                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```