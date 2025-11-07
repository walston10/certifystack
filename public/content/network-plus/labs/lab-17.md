# Lab 17: Monitoring Tools and SNMP
**Time:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain:** Network Operations (3.0) & Network Troubleshooting (5.0)

## Lab Objectives
- Configure SNMP on network devices
- Understand syslog severity levels
- Analyze NetFlow data patterns
- Use monitoring tools to track performance
- Create monitoring dashboards and alerts

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What are the three SNMP versions and their key security differences?**
   (Write your answer)
   _________________________________________________
   _________________________________________________

2. **List the 8 syslog severity levels from most to least critical:**
   0: ________________
   1: ________________
   2: ________________
   3: ________________
   4: ________________
   5: ________________
   6: ________________
   7: ________________

3. **What port does SNMP use for general messages and traps?**
   General: ___________
   Traps: _____________

4. **What does MIB stand for and what is its purpose?**
   _________________________________________________
   _________________________________________________

5. **Name three key performance metrics you should monitor on a network:**
   • ________________
   • ________________
   • ________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: SNMP Version Comparison ⚙️
**Time:** 3 minutes

Create a comparison table of SNMP versions:

| Feature | SNMPv1 | SNMPv2c | SNMPv3 |
|---------|---------|----------|---------|
| Security | | | |
| Authentication | | | |
| Encryption | | | |
| Community String | | | |
| Performance | | | |
| Use Case | | | |

---

### Activity B: Windows SNMP Configuration 💻
**Time:** 3 minutes

1. Check if SNMP is installed on Windows:
```powershell
# Run in PowerShell as Administrator
Get-WindowsFeature -Name SNMP*
```

2. If not installed, document the installation command:
```powershell
# Write the command here:
_________________________________________________
```

3. List the SNMP service configuration location:
   Path: _____________________________________________

---

### Activity C: Syslog Message Analysis 📝
**Time:** 3 minutes

Analyze these syslog messages and identify severity:

```
<134>Oct 12 15:23:45 SW-CORE-01 %LINK-3-UPDOWN: Interface GigabitEthernet0/1, changed state to down
<189>Oct 12 15:24:12 FW-01 %ASA-5-111008: User 'admin' executed the 'show running-config' command
<11>Oct 12 15:25:33 ROUTER-01 %SYS-3-CPUHOG: Task is running for (2003) msecs
```

Message 1 - Severity: _______ Category: _____________
Message 2 - Severity: _______ Category: _____________
Message 3 - Severity: _______ Category: _____________

---

### Activity D: NetFlow Traffic Patterns 📊
**Time:** 3 minutes

Design a NetFlow monitoring strategy for these scenarios:

1. **Detecting DDoS attacks:**
   Monitor for: _____________________________________
   Alert threshold: _________________________________

2. **Identifying top bandwidth users:**
   Flow filter: ____________________________________
   Report frequency: _______________________________

3. **Tracking application usage:**
   Key ports to monitor: ___________________________
   Aggregation method: _____________________________

---

### Activity E: Performance Baseline Creation 📈
**Time:** 3 minutes

Create a baseline for your home network:

1. Run continuous ping to Google DNS:
```bash
# Windows
ping -t 8.8.8.8

# Linux/Mac  
ping 8.8.8.8
```

Record 1 minute of data:
- Average latency: _________ ms
- Packet loss: _________ %
- Min/Max: _______ / _______ ms

2. Check your router's interface statistics:
- Current bandwidth usage: _________ Mbps
- Error count: _________
- Uptime: _________

---

### Activity F: SNMP OID Exploration 🔍
**Time:** 3 minutes

Match these common OIDs to their purposes:

| OID | Purpose |
|-----|---------|
| 1.3.6.1.2.1.1.1 | |
| 1.3.6.1.2.1.1.3 | |
| 1.3.6.1.2.1.2.2.1.10 | |
| 1.3.6.1.2.1.2.2.1.16 | |
| 1.3.6.1.2.1.4.3 | |

Options: sysDescr, sysUpTime, ifInOctets, ifOutOctets, ipInReceives

---

### Activity G: Alert Threshold Design ⚠️
**Time:** 3 minutes

Set appropriate thresholds for these metrics:

| Metric | Warning | Critical | Action |
|--------|---------|----------|--------|
| CPU Usage | ___% | ___% | |
| Memory Usage | ___% | ___% | |
| Interface Utilization | ___% | ___% | |
| Packet Loss | ___% | ___% | |
| Latency (LAN) | ___ms | ___ms | |
| Temperature | ___°C | ___°C | |

---

### Activity H: Monitoring Tool Selection 🛠️
**Time:** 2 minutes

Match monitoring tools to best use cases:

**Tools:** PRTG, SolarWinds, Nagios, Zabbix, Wireshark

1. Enterprise with 5000+ devices: ________________
2. Small business (budget-conscious): _____________
3. Real-time packet analysis: ___________________
4. Windows-heavy environment: ____________________
5. Open-source preference: ______________________

---

### Activity I: SNMP Trap Configuration 🎯
**Time:** 3 minutes

Design SNMP trap notifications for:

1. **Interface down event:**
   - Trap OID: _________________________________
   - Severity: _________________________________
   - Notification method: ______________________

2. **High CPU usage:**
   - Threshold: ________________________________
   - Polling interval: _________________________
   - Escalation: _______________________________

3. **Environmental alert:**
   - Temperature threshold: ____________________
   - Humidity threshold: _______________________
   - Power failure action: _____________________

---

### Activity J: Syslog Server Planning 📁
**Time:** 3 minutes

Plan a centralized syslog implementation:

1. **Storage requirements** (50 devices, 30 days retention):
   - Average log size per device/day: 100MB
   - Total storage needed: _________________ GB
   - RAID level recommendation: _____________

2. **Log rotation policy:**
   - Rotation frequency: ___________________
   - Compression: __________________________
   - Archive location: _____________________

3. **Access control:**
   - Who can view: _________________________
   - Who can modify: _______________________
   - Audit trail: __________________________

---

### Activity K: Environmental Monitoring Setup 🌡️
**Time:** 2 minutes

Create monitoring for a server room:

**Required sensors:**
□ Temperature (range: _______ to _______ °C)
□ Humidity (range: _______ to _______ %)
□ Water/flood detection locations: _______________
□ Smoke detection
□ Power monitoring (UPS integration)

**Alert chain:**
1. Primary contact: ____________________________
2. Secondary contact: __________________________
3. Escalation time: ____________________________

---

### Activity L: Dashboard Design 📊
**Time:** 3 minutes

Design a monitoring dashboard layout:

```
┌─────────────────────────────────────────┐
│         Network Operations Dashboard     │
├─────────────┬──────────┬────────────────┤
│             │          │                 │
│  Widget 1:  │ Widget 2:│   Widget 3:     │
│ __________  │ ________ │ _____________   │
│             │          │                 │
├─────────────┼──────────┼────────────────┤
│             │          │                 │
│  Widget 4:  │ Widget 5:│   Widget 6:     │
│ __________  │ ________ │ _____________   │
│             │          │                 │
└─────────────┴──────────┴────────────────┘
```

Fill in appropriate metrics for each widget position.

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your company is experiencing intermittent slowdowns. Design a monitoring strategy:

1. **Immediate checks:** (3 things to monitor now)
   • _____________________________________________
   • _____________________________________________
   • _____________________________________________

2. **Long-term monitoring:** (baseline period)
   Duration: _____________________________________
   Key metrics: __________________________________

3. **Root cause analysis tools:**
   Primary tool: _________________________________
   Secondary tool: _______________________________

### Best Practices Checklist
Check off monitoring practices you'll implement:

□ Enable SNMPv3 (disable v1/v2c if possible)
□ Configure syslog centralization
□ Set up baseline monitoring
□ Create alert thresholds
□ Document normal behavior
□ Test alert notifications
□ Review logs regularly
□ Monitor environmental factors
□ Track bandwidth trends
□ Implement NetFlow/sFlow

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Configure SNMP versions and understand security implications
□ Interpret syslog severity levels (0-7)
□ Design NetFlow monitoring strategies
□ Set appropriate alert thresholds
□ Select monitoring tools for different scenarios
□ Plan centralized logging infrastructure
□ Create monitoring dashboards
□ Implement environmental monitoring
□ Analyze performance baselines
□ Configure SNMP traps and polling

### Exam Preparation
⚠️ **Know for the exam:**
- SNMP ports: 161 (general) and 162 (traps)
- Syslog severity levels 0-7 (memorize!)
- SNMPv3 provides authentication AND encryption
- MIB = Management Information Base
- OID = Object Identifier
- NetFlow vs sFlow differences
- Common monitoring tool capabilities

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐☆☆

**Ready for:** Lesson 18 - Backup and Disaster Recovery

### Remember
"You can't manage what you don't measure!" Good monitoring is the foundation of network operations. Keep practicing with different monitoring tools to build expertise.

---