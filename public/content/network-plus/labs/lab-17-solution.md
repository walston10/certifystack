# Lab 17 Answer Key: Monitoring Tools and SNMP
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain Coverage:** Network Operations (3.0) & Network Troubleshooting (5.0)

---

## Section 1: Concept Check Answers

### Question 1: SNMP Versions
**Answer:**
- **SNMPv1:** Community string authentication only, plaintext, no encryption
- **SNMPv2c:** Community string authentication, better performance, bulk operations, still plaintext
- **SNMPv3:** Username/password authentication, message integrity, encryption (AES/DES), most secure

### Question 2: Syslog Severity Levels
**Answer:** (MEMORIZE THIS!)
- 0: **Emergency** - System unusable
- 1: **Alert** - Immediate action needed
- 2: **Critical** - Critical conditions
- 3: **Error** - Error conditions
- 4: **Warning** - Warning conditions
- 5: **Notice** - Normal but significant
- 6: **Informational** - Informational messages
- 7: **Debug** - Debug-level messages

💡 **Memory Trick:** "Every Alley Cat Eats When Nobody Is Debugging"

### Question 3: SNMP Ports
**Answer:**
- General: **Port 161** (UDP)
- Traps: **Port 162** (UDP)

### Question 4: MIB Definition
**Answer:**
**Management Information Base** - A hierarchical database of network objects that can be managed via SNMP. Contains OIDs (Object Identifiers) that uniquely identify manageable objects.

### Question 5: Key Performance Metrics
**Answer:** (Any three are acceptable)
- Bandwidth utilization
- CPU usage
- Memory usage
- Packet loss
- Latency/jitter
- Error rates
- Interface status

---

## Section 2: Hands-On Activities - Answers

### Activity A: SNMP Version Comparison ✅

| Feature | SNMPv1 | SNMPv2c | SNMPv3 |
|---------|---------|----------|---------|
| Security | Weak | Weak | Strong |
| Authentication | Community string | Community string | Username/Password |
| Encryption | None | None | AES/DES |
| Community String | Yes | Yes | Optional |
| Performance | Basic | Improved (bulk) | Good |
| Use Case | Legacy only | Common/simple | Required for security |

### Activity B: Windows SNMP Configuration ✅

1. Check SNMP installation - output varies

2. Installation command:
```powershell
Install-WindowsFeature SNMP-Service -IncludeManagementTools
# Or via GUI: Server Manager > Add Roles and Features
```

3. Configuration location:
   Path: `Computer Management > Services > SNMP Service > Properties`
   
### Activity C: Syslog Message Analysis ✅

Message 1: 
- Severity: **3 (Error)** 
- Category: Link status change

Message 2:
- Severity: **5 (Notice)**
- Category: Command audit/authorization

Message 3:
- Severity: **3 (Error)**
- Category: System resource

**How to decode:** `<134>` = Facility × 8 + Severity
- 134 = 16×8 + 6 (local0 facility, informational)
- The %LINK-3 shows actual severity = 3

### Activity D: NetFlow Traffic Patterns ✅

1. **DDoS Detection:**
   - Monitor for: Unusual traffic volume from single/multiple sources
   - Alert threshold: >1000 connections/second from single IP

2. **Top Bandwidth Users:**
   - Flow filter: Top talkers by bytes transferred
   - Report frequency: Hourly with daily summaries

3. **Application Usage:**
   - Key ports: 80/443 (web), 3389 (RDP), 22 (SSH), 445 (SMB)
   - Aggregation: By destination port and protocol

### Activity E: Performance Baseline ✅
Answers will vary based on actual network. Example:
- Average latency: 25 ms
- Packet loss: 0%
- Min/Max: 18/45 ms
- Bandwidth: 85 Mbps
- Errors: 0
- Uptime: 45 days

### Activity F: SNMP OID Exploration ✅

| OID | Purpose |
|-----|---------|
| 1.3.6.1.2.1.1.1 | sysDescr |
| 1.3.6.1.2.1.1.3 | sysUpTime |
| 1.3.6.1.2.1.2.2.1.10 | ifInOctets |
| 1.3.6.1.2.1.2.2.1.16 | ifOutOctets |
| 1.3.6.1.2.1.4.3 | ipInReceives |

### Activity G: Alert Threshold Design ✅

| Metric | Warning | Critical | Action |
|--------|---------|----------|--------|
| CPU Usage | 70% | 90% | Email/SMS alert |
| Memory Usage | 80% | 95% | Page on-call |
| Interface Utilization | 75% | 90% | Investigate QoS |
| Packet Loss | 1% | 5% | Check path |
| Latency (LAN) | 10ms | 50ms | Check switching |
| Temperature | 27°C | 32°C | Check HVAC |

### Activity H: Monitoring Tool Selection ✅

1. Enterprise with 5000+ devices: **SolarWinds**
2. Small business (budget): **Nagios** or **Zabbix**
3. Real-time packet analysis: **Wireshark**
4. Windows-heavy environment: **PRTG**
5. Open-source preference: **Nagios** or **Zabbix**

### Activity I: SNMP Trap Configuration ✅

1. **Interface down:**
   - Trap OID: 1.3.6.1.6.3.1.1.5.3 (linkDown)
   - Severity: Critical (2)
   - Notification: Email + SMS to network team

2. **High CPU:**
   - Threshold: 85% for 5 minutes
   - Polling interval: 60 seconds
   - Escalation: Alert → Manager after 15 min

3. **Environmental:**
   - Temperature: >30°C (86°F)
   - Humidity: <20% or >80%
   - Power failure: Immediate page to facilities + IT

### Activity J: Syslog Server Planning ✅

1. **Storage requirements:**
   - 50 devices × 100MB × 30 days = 150GB
   - Add 20% overhead = **180GB minimum**
   - RAID level: **RAID 10** (performance + redundancy)

2. **Log rotation:**
   - Frequency: **Daily**
   - Compression: **gzip after 7 days**
   - Archive: **Network share or cloud storage**

3. **Access control:**
   - View: Network team, security team
   - Modify: Senior admins only
   - Audit: All access logged

### Activity K: Environmental Monitoring ✅

**Required sensors:**
☑️ Temperature (18-27°C / 64-80°F optimal)
☑️ Humidity (40-60% optimal)
☑️ Water detection: Under raised floor, near HVAC
☑️ Smoke detection
☑️ Power monitoring (UPS integration)

**Alert chain:**
1. Primary: On-call engineer
2. Secondary: Network manager
3. Escalation: 15 minutes

### Activity L: Dashboard Design ✅

```
┌─────────────────────────────────────────┐
│         Network Operations Dashboard     │
├─────────────┬──────────┬────────────────┤
│             │          │                 │
│  Widget 1:  │ Widget 2:│   Widget 3:     │
│  WAN Link   │  CPU/    │  Top Talkers    │
│  Status     │  Memory  │  by Bandwidth   │
├─────────────┼──────────┼────────────────┤
│             │          │                 │
│  Widget 4:  │ Widget 5:│   Widget 6:     │
│  Alerts/    │ Interface│  Environmental  │
│  Alarms     │ Errors   │  Status         │
└─────────────┴──────────┴────────────────┘
```

---

## Real-World Context & Best Practices

### Why This Matters
- **Proactive vs Reactive:** Monitoring prevents outages before users complain
- **Capacity Planning:** Baseline data drives upgrade decisions
- **Security:** Unusual patterns often indicate attacks
- **Compliance:** Many regulations require logging

### Common Mistakes to Avoid
❌ Using SNMPv1/v2c in production (security risk)
❌ Not setting up centralized logging
❌ Ignoring environmental monitoring
❌ Alert fatigue from bad thresholds
❌ Not documenting baseline performance

### Industry Best Practices
✅ **Always use SNMPv3** with encryption in production
✅ **Centralize logs** for correlation and compliance
✅ **Monitor from multiple points** for perspective
✅ **Automate responses** where possible
✅ **Review and tune** thresholds regularly

---

## Exam Tips 📝

### Must Memorize:
1. **SNMP Ports:** 161 (general), 162 (traps)
2. **Syslog levels:** 0-7 (Emergency → Debug)
3. **SNMPv3** = Authentication + Encryption
4. **Community strings** = passwords (v1/v2c)
5. **MIB** = Management Information Base
6. **OID** = Object Identifier (unique address)

### Common Exam Questions:
- "Which SNMP version provides encryption?" → **SNMPv3**
- "What syslog level indicates system unusable?" → **0 (Emergency)**
- "What port receives SNMP traps?" → **162**
- "What monitors bandwidth patterns over time?" → **NetFlow/sFlow**

### Exam Strategy:
- If question mentions "secure SNMP" → Think SNMPv3
- Syslog levels: Lower number = More severe
- NetFlow for traffic analysis, SNMP for device stats
- Environmental monitoring prevents hardware failure

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Identified security differences between SNMP versions
□ Memorized all 8 syslog severity levels
□ Understood SNMP ports (161/162)
□ Created realistic alert thresholds
□ Designed a monitoring dashboard
□ Planned centralized logging storage
□ Selected appropriate monitoring tools
□ Configured environmental monitoring parameters

### Troubleshooting Common Issues

**Problem:** SNMP not responding
**Solution:** Check firewall (UDP 161), community string, SNMP service running

**Problem:** Too many alerts
**Solution:** Tune thresholds, implement alert suppression, use dependencies

**Problem:** Syslog storage filling up
**Solution:** Implement rotation, compression, filter unnecessary messages

**Problem:** Can't see all devices in monitoring tool
**Solution:** Check SNMP credentials, network accessibility, discovery settings

---

## Real-World Scenarios

### Scenario 1: Performance Degradation
**Symptoms:** Users complain about "slow network"
**Monitoring approach:**
1. Check bandwidth utilization graphs
2. Review CPU/memory on core devices
3. Look for interface errors/discards
4. Analyze NetFlow for unusual traffic
5. Compare to baseline

### Scenario 2: Compliance Audit
**Requirement:** 90 days of logs
**Implementation:**
- Centralized syslog server
- Daily rotation with compression
- Off-site backup after 30 days
- Access logging enabled
- Regular test restores

### Scenario 3: Predictive Maintenance
**Goal:** Prevent failures
**Monitoring:**
- Temperature trends
- Power supply status
- Fan speeds
- Error rate increases
- Bandwidth growth trends

---

## Lab Summary

### Key Concepts Mastered:
✅ SNMP provides device management and monitoring
✅ Syslog centralizes event logging (know severity levels!)
✅ NetFlow analyzes traffic patterns and bandwidth
✅ Baselines are essential for detecting anomalies
✅ Environmental monitoring prevents hardware failure
✅ SNMPv3 is required for security

### Time-Saving Tips:
- Use SNMP templates for similar devices
- Automate alert acknowledgments
- Create monitoring dashboard templates
- Script baseline data collection
- Use log parsing tools

### Going Further:
- Set up free Nagios/Zabbix at home
- Monitor your home network for practice
- Learn basic SNMP MIB browsing
- Practice reading NetFlow data
- Create custom monitoring scripts

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for certification exam monitoring questions!

**Next Lab:** Lesson 18 - Backup and Disaster Recovery

### Final Tip:
"If you're not monitoring it, you're not managing it!" Make monitoring setup your first task in any network role.

---