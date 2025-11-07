# Lab 27: Troubleshooting Methodology
**Time:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain:** Network Troubleshooting (5.0)

## Lab Objectives
- Master the CompTIA 7-step troubleshooting methodology
- Apply systematic troubleshooting approaches
- Use OSI model for problem isolation
- Document troubleshooting processes
- Practice real-world scenarios
- Develop troubleshooting best practices

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **List the 7 steps of CompTIA troubleshooting methodology in order:**
   1. ________________________________________________
   2. ________________________________________________
   3. ________________________________________________
   4. ________________________________________________
   5. ________________________________________________
   6. ________________________________________________
   7. ________________________________________________

2. **What should you always check first when troubleshooting?**
   _________________________________________________

3. **What's the difference between top-down and bottom-up troubleshooting?**
   Top-down: __________________________________________
   Bottom-up: __________________________________________

4. **Why is it important to make only one change at a time?**
   _________________________________________________
   _________________________________________________

5. **What should you do if your theory is not confirmed?**
   _________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Troubleshooting Scenario #1 - No Internet 🌐
**Time:** 3 minutes

**Scenario:** User reports "The internet is down!"

Apply the 7-step methodology:

| Step | Action Taken | Findings | Next Step |
|------|--------------|----------|-----------|
| 1. Identify | | | |
| 2. Theory | | | |
| 3. Test | | | |
| 4. Plan | | | |
| 5. Implement | | | |
| 6. Verify | | | |
| 7. Document | | | |

**Questions to ask user:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

### Activity B: OSI Model Troubleshooting 📊
**Time:** 3 minutes

Match symptoms to OSI layers:

| Symptom | OSI Layer | Troubleshooting Tool | Solution |
|---------|-----------|---------------------|----------|
| No link light | | | |
| Can ping IP but not hostname | | | |
| Intermittent disconnections | | | |
| VLAN misconfiguration | | | |
| Wrong subnet mask | | | |
| Application not responding | | | |
| Certificate error | | | |

---

### Activity C: Theory Development 💭
**Time:** 3 minutes

Develop theories for these symptoms:

**Symptom 1:** Multiple users can't access file server
- Theory A: _________________________________________
- Theory B: _________________________________________
- Theory C: _________________________________________
- Most likely: ______________________________________

**Symptom 2:** Slow network performance in afternoon
- Theory A: _________________________________________
- Theory B: _________________________________________
- Theory C: _________________________________________
- Test first: _______________________________________

**Symptom 3:** New computer can't join domain
- Theory A: _________________________________________
- Theory B: _________________________________________
- Theory C: _________________________________________
- Check first: ______________________________________

---

### Activity D: Troubleshooting Approaches 🔄
**Time:** 3 minutes

Choose the best approach for each scenario:

| Scenario | Approach | Start Point | Reasoning |
|----------|----------|-------------|-----------|
| Email not working | | | |
| Cable suspected bad | | | |
| Complex routing issue | | | |
| New installation | | | |
| Intermittent problem | | | |

**Approaches:**
- Top-down (Application → Physical)
- Bottom-up (Physical → Application)
- Divide and conquer (Start in middle)
- Follow the path (Trace the flow)
- Swap components (Replace suspects)

---

### Activity E: Change Management During Troubleshooting 📝
**Time:** 3 minutes

Plan changes with minimal impact:

**Scenario:** Need to restart core switch during business hours

**Change plan:**
| Element | Details |
|---------|---------|
| Risk assessment | |
| Business impact | |
| Notification sent to | |
| Rollback plan | |
| Testing procedure | |
| Documentation | |

**Best time for change:** _____________________________
**Estimated downtime:** _______________________________
**Success criteria:** _________________________________

---

### Activity F: Problem Escalation Decision Tree 🎯
**Time:** 3 minutes

Determine when to escalate:

| Situation | Escalate? | To Whom | Why |
|-----------|-----------|---------|-----|
| Password reset | | | |
| Core router down | | | |
| Strange traffic patterns | | | |
| Can't solve in 30 min | | | |
| Requires vendor support | | | |
| Security breach suspected | | | |

**Escalation criteria:**
□ Beyond technical ability
□ Insufficient permissions
□ Time constraints
□ Business critical
□ Security incident
□ Vendor support needed

---

### Activity G: Documentation Templates 📋
**Time:** 3 minutes

Create troubleshooting documentation:

**Ticket Template:**
```
Ticket #: ___________  Date: ___________
User: _______________  Priority: _______

Problem Description:
_______________________________________

Symptoms:
- ____________________________________
- ____________________________________

Changes Made:
1. ___________________________________
2. ___________________________________

Resolution:
_______________________________________

Time to Resolve: _____________________
```

**Knowledge Base Article:**
- Problem: __________________________________________
- Symptoms: _________________________________________
- Cause: ____________________________________________
- Solution: _________________________________________
- Prevention: _______________________________________

---

### Activity H: Troubleshooting Flowchart 🗺️
**Time:** 2 minutes

Complete the network connectivity troubleshooting flow:

```
Can ping localhost?
    ├─ No → [___________]
    └─ Yes → Can ping gateway?
              ├─ No → [___________]
              └─ Yes → Can ping 8.8.8.8?
                        ├─ No → [___________]
                        └─ Yes → Can resolve DNS?
                                  ├─ No → [___________]
                                  └─ Yes → [___________]
```

---

### Activity I: Root Cause Analysis 🔍
**Time:** 3 minutes

Find root causes, not just symptoms:

| Symptom | Immediate Fix | Root Cause | Permanent Solution |
|---------|---------------|------------|-------------------|
| Server crashes weekly | Restart server | | |
| Network slow at 9am | | | |
| Users locked out often | Reset passwords | | |
| Printer offline daily | | | |
| WiFi drops randomly | | | |

**5 Whys technique example:**
Problem: Network outage
1. Why? Switch failed
2. Why? ___________________________________________
3. Why? ___________________________________________
4. Why? ___________________________________________
5. Why? ___________________________________________

---

### Activity J: Preventive Measures Planning 🛡️
**Time:** 3 minutes

Implement preventive measures:

| Problem Type | Preventive Measure | Implementation | Monitoring |
|--------------|-------------------|----------------|------------|
| Hardware failure | | | |
| Configuration errors | | | |
| Security breaches | | | |
| Performance issues | | | |
| User errors | | | |

**Proactive monitoring checklist:**
□ Baseline establishment
□ Threshold alerts
□ Trend analysis
□ Capacity planning
□ Regular testing

---

### Activity K: User Communication 💬
**Time:** 2 minutes

Practice user interaction:

**Initial contact questions:**
1. When did the problem start? _______________________
2. What changed recently? ____________________________
3. Can you reproduce it? _____________________________
4. Who else is affected? _____________________________
5. What is the business impact? ______________________

**Status updates template:**
```
Subject: [Ticket #] Status Update

Current Status: _____________________
Actions Taken: ______________________
Next Steps: _________________________
ETA: ________________________________
Contact: ____________________________
```

---

### Activity L: Lessons Learned Session 📚
**Time:** 3 minutes

Post-incident review:

**Major Outage Review:**
| Question | Answer | Action Item |
|----------|--------|-------------|
| What went wrong? | | |
| Why did it happen? | | |
| How was it detected? | | |
| How long to resolve? | | |
| What worked well? | | |
| What needs improvement? | | |

**Improvement plan:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
The entire office network is down Monday morning:

1. **Initial response:**
   • First check: _____________________________________
   • Gather info: _____________________________________

2. **Theory development:**
   • Most likely cause: _______________________________
   • Quick tests: _____________________________________

3. **Resolution approach:**
   • Priority order: __________________________________
   • Communication plan: _______________________________

### Best Practices Checklist
Check off troubleshooting practices you'll implement:

□ Always follow the 7-step methodology
□ Check physical first (Layer 1)
□ Document everything as you go
□ One change at a time
□ Have a rollback plan
□ Communicate with affected users
□ Test after implementation
□ Update documentation
□ Share knowledge with team
□ Review and improve process

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Apply the 7-step troubleshooting methodology
□ Use OSI model for problem isolation
□ Develop logical theories
□ Choose appropriate troubleshooting approaches
□ Document problems and solutions
□ Know when to escalate
□ Perform root cause analysis
□ Implement preventive measures
□ Communicate effectively with users
□ Conduct lessons learned sessions

### Exam Preparation
⚠️ **Know for the exam:**
- **7 Steps in order:** Identify, Theory, Test, Plan, Implement, Verify, Document
- **Always test theory** before implementing
- **One change at a time** to isolate variables
- **Document everything** for future reference
- **Check obvious first:** Physical, power, cables
- **Top-down:** Start at Application layer
- **Bottom-up:** Start at Physical layer
- **If theory fails:** Develop new theory

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐☆☆

**Ready for:** Lesson 28 - Command-Line Tools

### Remember
"Good troubleshooting is like being a detective - gather evidence, form theories, test them systematically, and document everything. The solution is always logical once you find it!"

---