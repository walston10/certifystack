# Lab 27 Answer Key: Troubleshooting Methodology
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain Coverage:** Network Troubleshooting (5.0)

---

## Section 1: Concept Check Answers

### Question 1: 7 Steps of CompTIA Troubleshooting
**Answer:** (MUST MEMORIZE IN ORDER!)
1. **Identify the problem** (gather info, question users)
2. **Establish a theory of probable cause** (question the obvious)
3. **Test the theory to determine cause** (confirm or develop new theory)
4. **Establish a plan of action** (to resolve problem)
5. **Implement the solution or escalate** (one change at a time)
6. **Verify full system functionality** (test and confirm with user)
7. **Document findings, actions, and outcomes** (update documentation)

💡 **Memory trick:** "I Eat Tacos, Please Include Very Delicious"

### Question 2: Always Check First
**Answer:**
The simple/obvious things first - Physical layer (cables, power, connections), then work up. Check for recent changes.

### Question 3: Top-Down vs Bottom-Up
**Answer:**
- **Top-down:** Start at Application layer (Layer 7) and work down to Physical (Layer 1)
- **Bottom-up:** Start at Physical layer (Layer 1) and work up to Application (Layer 7)

### Question 4: One Change at a Time
**Answer:**
To isolate variables and know exactly what fixed (or broke) the issue. Multiple changes make it impossible to identify the actual solution.

### Question 5: Theory Not Confirmed
**Answer:**
Establish a new theory and test it. Don't get stuck on one idea - be willing to pivot.

---

## Section 2: Hands-On Activities - Answers

### Activity A: Troubleshooting Scenario #1 ✅

| Step | Action Taken | Findings | Next Step |
|------|--------------|----------|-----------|
| 1. Identify | Ask user questions, check scope | Only one user affected | Check local issues |
| 2. Theory | Local config, cable, or NIC issue | Most likely cable/connection | Test physical |
| 3. Test | Check cable, link light | No link light | Replace cable |
| 4. Plan | Replace patch cable | Minimal impact | Get new cable |
| 5. Implement | Swap cable | Link light appears | Test connectivity |
| 6. Verify | Ping gateway, internet | All working | Confirm with user |
| 7. Document | Bad cable, replaced | Update ticket | Close ticket |

**Questions to ask:**
1. When did it stop working?
2. Are others affected?
3. Any recent changes to your computer?

### Activity B: OSI Model Troubleshooting ✅

| Symptom | OSI Layer | Troubleshooting Tool | Solution |
|---------|-----------|---------------------|----------|
| No link light | 1 - Physical | Cable tester | Replace cable |
| Can ping IP but not hostname | 7 - Application | nslookup | Fix DNS |
| Intermittent disconnections | 1 or 2 | Cable tester, logs | Replace cable/port |
| VLAN misconfiguration | 2 - Data Link | Show vlan | Fix VLAN assignment |
| Wrong subnet mask | 3 - Network | ipconfig | Correct mask |
| Application not responding | 7 - Application | Telnet port | Restart service |
| Certificate error | 6 - Presentation | Cert viewer | Update certificate |

### Activity C: Theory Development ✅

**Symptom 1:** Multiple users can't access file server
- Theory A: **Server is down**
- Theory B: **Network path issue (switch/router)**
- Theory C: **Server service crashed**
- Most likely: **Server down (affects all users)**

**Symptom 2:** Slow network in afternoon
- Theory A: **Bandwidth saturation (business hours)**
- Theory B: **Backup or updates running**
- Theory C: **Network congestion**
- Test first: **Check bandwidth utilization**

**Symptom 3:** New computer can't join domain
- Theory A: **DNS can't resolve domain controller**
- Theory B: **Wrong credentials**
- Theory C: **Not on correct VLAN**
- Check first: **DNS settings and ping DC**

### Activity D: Troubleshooting Approaches ✅

| Scenario | Approach | Start Point | Reasoning |
|----------|----------|-------------|-----------|
| Email not working | Top-down | Application | App-specific issue |
| Cable suspected bad | Bottom-up | Physical | Specific component |
| Complex routing issue | Divide and conquer | Network layer | Narrow scope |
| New installation | Bottom-up | Physical | Build from foundation |
| Intermittent problem | Follow the path | End-to-end | Find failure point |

### Activity E: Change Management ✅

**Change plan:**
| Element | Details |
|---------|---------|
| Risk assessment | High - affects all users |
| Business impact | Complete network outage 5-10 min |
| Notification sent to | All staff, management |
| Rollback plan | Redundant switch on standby |
| Testing procedure | Ping sweep, critical service check |
| Documentation | Update network diagram, log change |

**Best time:** After hours or weekend
**Estimated downtime:** 5-10 minutes
**Success criteria:** All VLANs responsive, services up

### Activity F: Problem Escalation Decision Tree ✅

| Situation | Escalate? | To Whom | Why |
|-----------|-----------|---------|-----|
| Password reset | No | N/A | Within scope |
| Core router down | Yes | Senior engineer | Critical infrastructure |
| Strange traffic patterns | Yes | Security team | Potential breach |
| Can't solve in 30 min | Yes | Senior tech | Time sensitive |
| Requires vendor support | Yes | Manager | Vendor contact needed |
| Security breach suspected | Yes | Security/Management | Immediate action required |

All escalation criteria boxes should be understood.

### Activity G: Documentation Templates ✅

**Sample completed ticket:**
```
Ticket #: 2024-001  Date: 11/6/2024
User: John Smith     Priority: High

Problem Description:
Cannot access file server

Symptoms:
- Timeout errors when mapping drive
- Ping to server fails

Changes Made:
1. Replaced patch cable
2. Updated switch port config

Resolution:
Bad patch cable replaced, connectivity restored

Time to Resolve: 45 minutes
```

### Activity H: Troubleshooting Flowchart ✅

```
Can ping localhost?
    ├─ No → [Check TCP/IP stack]
    └─ Yes → Can ping gateway?
              ├─ No → [Check IP config/VLAN]
              └─ Yes → Can ping 8.8.8.8?
                        ├─ No → [Check routing/firewall]
                        └─ Yes → Can resolve DNS?
                                  ├─ No → [Check DNS settings]
                                  └─ Yes → [Application issue]
```

### Activity I: Root Cause Analysis ✅

| Symptom | Immediate Fix | Root Cause | Permanent Solution |
|---------|---------------|------------|-------------------|
| Server crashes weekly | Restart | Memory leak | Patch application |
| Network slow at 9am | Wait it out | Everyone logs in | Increase bandwidth |
| Users locked out often | Reset passwords | Password policy too strict | Adjust policy |
| Printer offline daily | Power cycle | Network sleep settings | Disable sleep |
| WiFi drops randomly | Reconnect | Interference | Change channel |

**5 Whys example:**
1. Why? Switch failed
2. Why? **Power supply died**
3. Why? **Overheating**
4. Why? **Failed cooling fan**
5. Why? **No preventive maintenance**

### Activity J: Preventive Measures ✅

| Problem Type | Preventive Measure | Implementation | Monitoring |
|--------------|-------------------|----------------|------------|
| Hardware failure | Redundancy | Dual PSU, spare parts | SNMP alerts |
| Configuration errors | Change control | Review process | Config backup |
| Security breaches | Patching schedule | Monthly updates | Vulnerability scans |
| Performance issues | Capacity planning | Baseline monitoring | Threshold alerts |
| User errors | Training | Regular sessions | Help desk tickets |

All proactive monitoring items should be checked.

### Activity K: User Communication ✅

**Good responses:**
1. "When did it start?" → Establishes timeline
2. "What changed?" → Identifies potential cause
3. "Can you show me?" → Confirms issue
4. "Who else has this issue?" → Determines scope
5. "How urgent is this?" → Sets priority

**Status update example:**
```
Subject: [Ticket #2024-001] Status Update

Current Status: Investigating network connectivity
Actions Taken: Replaced cable, testing switch
Next Steps: Verify with extended ping test
ETA: 30 minutes
Contact: IT Help Desk x5555
```

### Activity L: Lessons Learned ✅

| Question | Answer | Action Item |
|----------|--------|-------------|
| What went wrong? | Switch failure | Add redundancy |
| Why did it happen? | No redundant path | Implement spanning tree |
| How was it detected? | User complaints | Add monitoring |
| How long to resolve? | 2 hours | Create runbook |
| What worked well? | Team communication | Continue practices |
| What needs improvement? | Detection time | Implement SNMP |

---

## Real-World Context & Best Practices

### Why This Matters
- **Efficiency:** Systematic approach saves time
- **Consistency:** Same method for all problems
- **Knowledge sharing:** Documentation helps team
- **Prevention:** Root cause analysis prevents recurrence

### Common Mistakes to Avoid
❌ Skipping steps in methodology
❌ Making multiple changes at once
❌ Not documenting the solution
❌ Forgetting to verify with user
❌ Not finding root cause

### Industry Best Practices
✅ **Always document** even if it seems trivial
✅ **Test thoroughly** before declaring fixed
✅ **Communicate regularly** with affected users
✅ **Learn from incidents** with reviews
✅ **Build knowledge base** from tickets

---

## Exam Tips 📝

### Must Memorize:
1. **7 Steps IN ORDER:**
   1. Identify the problem
   2. Establish theory
   3. Test theory
   4. Plan of action
   5. Implement/escalate
   6. Verify functionality
   7. Document
2. **If theory fails:** Create new theory
3. **Check obvious first:** Physical layer
4. **One change:** At a time
5. **Always verify:** With user
6. **Always document:** Everything

### Common Exam Questions:
- "What's step 3?" → **Test the theory**
- "Theory not confirmed?" → **Establish new theory**
- "After implementing?" → **Verify functionality**
- "Last step?" → **Document findings**
- "Multiple changes?" → **Never - one at a time**

### Exam Strategy:
- Know all 7 steps in exact order
- Questions often test specific step
- "Establish theory" is step 2, not 1
- "Document" is always last step
- Physical layer often best starting point

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Memorized 7 steps in order
□ Applied methodology to scenarios
□ Used OSI model for troubleshooting
□ Developed logical theories
□ Created documentation templates
□ Identified escalation triggers
□ Performed root cause analysis
□ Planned preventive measures
□ Practiced user communication
□ Understood lessons learned process

### Troubleshooting Common Issues

**Problem:** Jumping to conclusions
**Solution:** Follow methodology, test theories

**Problem:** Fix doesn't last
**Solution:** Find root cause, not just symptom

**Problem:** Users unhappy despite fix
**Solution:** Better communication, verify with user

**Problem:** Same issues recurring
**Solution:** Document better, implement preventive measures

---

## Real-World Scenarios

### Scenario 1: Monday Morning Outage
**Situation:** Entire network down
**Response:**
1. **Identify:** Check scope - all users affected
2. **Theory:** Power, core switch, or ISP
3. **Test:** Check core switch - no power
4. **Plan:** Switch to backup switch
5. **Implement:** Move connections
6. **Verify:** Test all services
7. **Document:** Order replacement switch

### Scenario 2: Intermittent Email Issues
**Situation:** Random email delays
**Response:**
1. **Identify:** Pattern - every 2 hours
2. **Theory:** Scheduled task interfering
3. **Test:** Check scheduled tasks - backup running
4. **Plan:** Reschedule backup
5. **Implement:** Change backup window
6. **Verify:** Monitor for 24 hours
7. **Document:** Update backup procedures

### Scenario 3: New Employee Can't Login
**Situation:** Account seems correct
**Response:**
1. **Identify:** Account created but not working
2. **Theory:** Account not replicated to all DCs
3. **Test:** Check specific DC - not synced
4. **Plan:** Force AD replication
5. **Implement:** Run repadmin /syncall
6. **Verify:** User can login
7. **Document:** Check AD replication health

---

## Lab Summary

### Key Concepts Mastered:
✅ 7-step methodology is universal framework
✅ Always check physical/obvious first
✅ One change at a time is critical
✅ Documentation enables knowledge sharing
✅ Root cause analysis prevents recurrence
✅ User communication is essential
✅ Lessons learned improve processes

### Time-Saving Tips:
- Create troubleshooting templates
- Build common problem checklist
- Maintain known-good baselines
- Use ticketing system properly
- Keep runbooks updated

### Going Further:
- Practice methodology on home lab
- Create personal knowledge base
- Study ITIL problem management
- Learn root cause analysis methods
- Practice soft skills for user interaction

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for troubleshooting methodology exam questions!

**Next Lab:** Lesson 28 - Command-Line Tools

### Final Tip:
"The 7-step methodology isn't just for exams - it's a career skill. Master it, and you'll solve problems others can't!"

---