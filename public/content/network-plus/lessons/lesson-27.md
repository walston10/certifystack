# Lesson 27: Troubleshooting Methodology

**Estimated Time:** 20-25 minutes  
**Domain:** Network Troubleshooting (Domain 5.0)  
**Exam Objectives Covered:** 5.1 - Network troubleshooting methodology

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Apply** CompTIA's 7-step troubleshooting methodology systematically
- **Identify** problems through effective information gathering
- **Establish** theories of probable cause using logical reasoning
- **Test** theories systematically without making assumptions
- **Implement** solutions while documenting changes
- **Verify** full system functionality after fixes
- **Document** findings for knowledge sharing and future reference

---

## Video Resources

**Watch these videos to reinforce the concepts:**

1. **Professor Messer - Troubleshooting Methodology** (10 min)  
   https://www.youtube.com/watch?v=15OIIxM0fRY
   
2. **NetworkChuck - How to Troubleshoot Like a Pro** (12 min)  
   https://www.youtube.com/watch?v=OkCcKq2xmMk

3. **PowerCert - Network Troubleshooting Steps** (8 min)  
   https://www.youtube.com/watch?v=xZ3RBSsqew4

4. **Sunny Classroom - CompTIA Troubleshooting Process** (9 min)  
   https://www.youtube.com/watch?v=2aXBB9JgpOM

---

## Introduction

Picture this: You're a doctor in the emergency room. A patient comes in saying "I don't feel well." You have two options:

**Option 1 - The Shotgun Approach:**
- Immediately prescribe 5 different medications
- Order random tests
- Try different treatments simultaneously
- Hope something works

**Option 2 - The Systematic Approach:**
- Ask questions: "What symptoms? When did they start? What changed?"
- Form hypothesis: "Based on symptoms, this looks like X"
- Test hypothesis: Run specific diagnostic test
- If confirmed, treat accordingly
- If not, form new hypothesis

**Which doctor would you trust with your life?**

Network troubleshooting is exactly the same. When a user says "the network is down," you need a systematic approach, not a shotgun approach. Random changes might accidentally fix the problem, but they also might make things worse, waste time, or leave you with no idea what actually worked.

**The problem with the shotgun approach:**

Jake is a new IT tech. A user reports they can't access the file server. Jake immediately:
- Reboots the server
- Restarts the network switch
- Changes the user's IP address
- Reinstalls the network driver
- Reboots the user's computer

The user can now access the file server! Success? **Not really.**

- Which change actually fixed it? Jake has no idea.
- What was the root cause? Unknown.
- Will it happen again? Probably.
- Can Jake help the next person with the same issue? Not confidently.
- Did he create any new problems? Possibly - he made 5 changes.

**The systematic approach would have:**
- Identified the actual problem
- Found the root cause
- Fixed only what needed fixing
- Documented for next time

**Why this matters for Network+ exam:** The troubleshooting methodology is specifically tested. You'll get scenarios where you need to apply the steps in order. You'll also use this methodology for your entire IT career - it's a fundamental skill.

---

## CompTIA's 7-Step Troubleshooting Methodology

CompTIA has a standardized troubleshooting process. **This is required knowledge for the exam.** Memorize the steps in order.

```
1. Identify the problem
2. Establish a theory of probable cause
3. Test the theory to determine the cause
4. Establish a plan of action
5. Implement the solution or escalate
6. Verify full system functionality
7. Document findings, actions, and outcomes
```

Let's walk through each step with a real-world scenario.

---

## Step 1: Identify the Problem

**Goal:** Understand what's actually wrong before jumping to solutions.

### The Scenario

Monday morning, 8:05 AM. Your phone rings. It's Sarah from Accounting.

**Sarah:** "The network is down! I can't work! Fix it now!"

**Bad response:** "Okay, I'll reboot the switch." (Jumping to solutions without understanding the problem)

**Good response:** "I'll help you right away. Let me ask a few questions to understand what's happening."

### Information Gathering

**Question 1: "What exactly isn't working?"**

Sarah: "I can't access anything!"

This is too vague. Dig deeper.

**You:** "Can you be more specific? Can you browse websites? Can you check email? Can you access the file server?"

Sarah: "Oh, I can browse websites fine. But I can't open any files on the S: drive."

**Better!** Now you know:
- ✅ Internet connection works (can browse websites)
- ✅ Network connectivity exists (websites work)
- ❌ File server access is the problem
- The problem is specific, not "network is down"

**Question 2: "When did this start?"**

Sarah: "This morning when I got in. It worked fine Friday afternoon."

**You:** "Did anything change over the weekend? Did you get a new laptop? Change your password? Work from a different location?"

Sarah: "No, nothing changed on my end."

**Question 3: "Is anyone else affected?"**

Sarah: "I don't know, let me ask... Hey everyone, can you access the S drive? ...They're saying no, nobody can."

**Critical information!** This isn't isolated to Sarah. Multiple users have the same problem.

**Question 4: "What error messages do you see?"**

Sarah: "It says 'Network path not found' when I click on the S: drive."

### What You've Learned

Through systematic questioning, you now know:
- **What:** S: drive (file server) inaccessible
- **When:** Started this morning, worked Friday afternoon
- **Who:** All users in Accounting (multiple people affected)
- **Symptoms:** "Network path not found" error
- **What works:** Internet access, basic network connectivity
- **What doesn't work:** Specific file server

### Additional Data Gathering Techniques

**Duplicate the problem:**
Try to reproduce it yourself. Can YOU access the S: drive? If you can't either, it confirms the issue is real and not user error.

**Check for recent changes:**
- "Was there any maintenance over the weekend?"
- "Did we push any updates?"
- "Any new patches or configuration changes?"

(You check with your team - "Oh yes, we moved the file server to a new IP address Saturday night.")

**Bingo. You've identified the root cause before even touching anything.**

### The OSI Model as a Tool

When gathering information, think about OSI layers:

**Layer 1 (Physical):** Are cables plugged in? Link lights on?  
**Layer 2 (Data Link):** Can devices see each other on the local network?  
**Layer 3 (Network):** Can devices ping each other? Is routing working?  
**Layer 4 (Transport):** Are the right ports open?  
**Layer 5-7 (Upper layers):** Is the application configured correctly?

Use this model to ask targeted questions.

🎯 **Exam Tip:** Step 1 is all about gathering information through questioning, observation, and checking recent changes. Don't jump to solutions yet.

---

## Step 2: Establish a Theory of Probable Cause

**Goal:** Form a hypothesis about what's causing the problem based on the information you gathered.

### The Thinking Process

Based on what you learned in Step 1:
- File server inaccessible to all users
- "Network path not found" error
- Started this morning after working Friday
- File server was moved to new IP over the weekend

**Theory 1 (Most Probable):** The server has a new IP address, but DNS or drive mappings haven't been updated. Users are trying to connect to the old IP address.

**Theory 2 (Possible):** Firewall rules weren't updated when server moved, blocking the new IP.

**Theory 3 (Less Likely):** Network cable unplugged during the move.

**Theory 4 (Least Likely):** Cosmic rays corrupted the server's memory. (This is silly, but illustrates ranging from probable to improbable)

### Question the Obvious

**CompTIA calls this "question the obvious" - start with simple, common causes before complex ones.**

Medical analogy: If patient has headache, start with "Did you drink water today?" before ordering an MRI for brain tumor.

Network analogy: If user can't connect to network, start with "Is the cable plugged in?" before investigating routing protocols.

**The obvious things to check:**
- Is it plugged in?
- Is it turned on?
- Are cables connected?
- Has this ever worked before?
- What changed?

**Story time:** Senior network engineer spends 2 hours troubleshooting why a switch isn't responding. Routing tables checked, VLANs verified, firmware updated. Junior tech walks by: "Did you plug in the power cable?" Sure enough, power cable fell out. **Always question the obvious.**

### Top-to-Bottom vs Bottom-to-Top

You can approach troubleshooting from different directions using the OSI model:

**Bottom-to-Top (Physical to Application):**
1. Check cables (Layer 1)
2. Check connectivity (Layer 2)
3. Check IP addressing (Layer 3)
4. Check ports (Layer 4)
5. Check application (Layer 7)

**Good for:** Physical issues, new installations

**Top-to-Bottom (Application to Physical):**
1. Check application first (Layer 7)
2. Work down if needed

**Good for:** When physical layer is likely fine (application errors, configuration issues)

In our file server scenario, you'd probably go **top-to-bottom** since you know the network itself works (internet browsing works), so the issue is likely configuration/application level.

🎯 **Exam Tip:** Establish theory means forming a hypothesis. Question the obvious means check simple things first. You're not testing yet - just thinking about what MIGHT be wrong.

---

## Step 3: Test the Theory to Determine the Cause

**Goal:** Prove or disprove your theory through testing.

### Testing Your Theory

Your theory: Drive mappings point to old IP address after server move.

**Test 1:** Check what IP address the S: drive is mapped to.
- Open command prompt on user's computer
- Type: `net use`
- Result: S: drive mapped to `\\192.168.1.50\shared`

**Test 2:** Check current server IP address.
- Log into file server
- Run: `ipconfig`
- Result: Server is now `192.168.1.100` (changed Saturday night)

**Theory confirmed!** The drive mappings still point to the old IP (192.168.1.50), but the server is now at the new IP (192.168.1.100).

### If Theory Is Confirmed

If your theory is correct (like in our case), proceed to Step 4 (plan of action).

### If Theory Is Not Confirmed

If your theory is wrong, go back to Step 2 and establish a **new** theory.

**Example:**

Your theory: Server unplugged during move.

**Test:** Ping the server at its new IP address.
- Run: `ping 192.168.1.100`
- Result: Server responds! It's definitely online and connected.

**Theory disproved.** The server isn't unplugged. Back to Step 2 to form a new theory.

### Testing Best Practices

**One test at a time:** Don't change multiple things while testing. If you do three things and the problem is fixed, you won't know which one worked.

**Use proper tools:**
- `ping` - Test connectivity
- `tracert` - Test routing path
- `nslookup` - Test DNS
- `ipconfig` - Check local configuration

**Don't make changes yet:** Step 3 is about gathering evidence, not fixing. You're a detective collecting clues, not a construction worker swinging a hammer.

🎯 **Exam Tip:** If theory is confirmed → move to Step 4. If theory is not confirmed → go back to Step 2 and establish new theory. Don't skip steps.

---

## Step 4: Establish a Plan of Action

**Goal:** Decide what steps you'll take to fix the problem, considering impact.

### Planning the Fix

You've confirmed the problem: Drive mappings point to old IP address.

**Possible solutions:**

**Option 1:** Update all user drive mappings to point to new IP
- Pro: Direct fix
- Con: Manual work on every computer
- Con: Time-consuming
- Impact: Touch every user's computer

**Option 2:** Change server back to old IP address
- Pro: Users don't need any changes
- Con: Undoes the planned migration
- Con: Doesn't address why it was moved
- Impact: Changes to server only

**Option 3:** Update DNS entry to point to new IP
- Pro: No user changes needed
- Pro: Centralized fix
- Con: Requires DNS refresh (may take time)
- Impact: One change, affects everyone

**Option 4:** Use group policy to update drive mappings automatically
- Pro: Centralized, automatic
- Pro: Future-proof (use DNS names, not IPs)
- Impact: Configure once, applies to all

**Best solution:** Option 4 (use group policy and DNS names)

### Consider Impact on Users

**Questions to ask:**
- Will this cause downtime?
- How many users are affected?
- Is this business-critical?
- What's the best time to implement?

**Our scenario:** Accounting needs access NOW (month-end closing). 

**Immediate action:** Temporarily map S: drive to new IP manually for Accounting team (15 minutes).

**Long-term fix:** Implement group policy with DNS-based mapping for everyone (schedule during lunch break when fewer users online).

### Have a Rollback Plan

**Always know how to undo your changes.**

"If this doesn't work, I'll..."
- Restore the old IP address
- Remove the new drive mapping
- Revert the configuration

**Story:** Tech implements new VLAN configuration at 4:45 PM Friday. Breaks network connectivity. Has no rollback plan. Spends weekend fixing it.

**Better approach:** Test during maintenance window. Have previous configuration saved. Know exactly how to revert if things go wrong.

🎯 **Exam Tip:** Plan must consider potential impact on users and business. Have a rollback plan. Schedule changes appropriately (not 4:45 PM Friday!).

---

## Step 5: Implement the Solution or Escalate

**Goal:** Execute your plan, or escalate if it's beyond your scope/skill.

### Implementing the Solution

**For immediate fix (Accounting team):**

1. Remote into first user's computer
2. Delete old S: drive mapping: `net use S: /delete`
3. Create new mapping: `net use S: \\192.168.1.100\shared /persistent:yes`
4. Test: Can user access S: drive? Yes!
5. Repeat for all Accounting users

**For long-term fix (group policy):**

1. Create new group policy
2. Configure drive mapping using DNS name: `\\fileserver.company.local\shared`
3. Remove old mapping
4. Apply policy to all users
5. Policy applies at next login

### Make One Change at a Time

**Bad approach:**
- Update drive mapping
- Reboot computer
- Clear DNS cache
- Restart network service
- Rebuild user profile

If it works, you have no idea which change fixed it.

**Good approach:**
- Update drive mapping
- Test
- Does it work? Done!
- Doesn't work? Try next thing

### When to Escalate

**Escalate if:**
- **Beyond your skill level:** "I don't know how to configure this firewall."
- **Beyond your authority:** "I'm not authorized to reboot the production server."
- **Requires specialized knowledge:** "This needs a Cisco routing specialist."
- **Time-sensitive and you're stuck:** "I've tried everything I know. Need senior help."

**Don't escalate if:**
- You haven't tried the basics (question the obvious)
- You didn't follow the methodology
- You're just scared to touch something (but it's within your role)

**How to escalate properly:**

**Bad escalation:**
"Hey boss, network's broken. Need help."

**Good escalation:**
"I'm escalating this issue because it requires firewall changes I'm not authorized to make. Here's what I've found:
- Problem: Users can't access file server
- Cause: Server moved to new IP, firewall rules need updating
- Tested: Confirmed server is reachable from my admin workstation but not from user VLAN
- Solution needed: Update firewall rule to allow user VLAN to reach new server IP
- Impact: 50 users affected, business critical
- Documentation attached"

Good escalation includes everything you've learned and done. The senior person can pick up where you left off.

🎯 **Exam Tip:** Implement solution methodically. Make one change at a time. Escalate when beyond scope or authority, but provide full details of what you've done.

---

## Step 6: Verify Full System Functionality

**Goal:** Ensure the problem is actually fixed and nothing else broke.

### Test the Fix

**Don't just trust that it worked. Verify.**

In our scenario:
- Can users access the S: drive? ✅
- Can they read files? ✅
- Can they write files? ✅
- Can they delete files? ✅

**Test with the actual user who reported the problem:**

You: "Sarah, can you try accessing the S: drive now?"

Sarah: "Yes! It works! Thanks!"

**But you're not done yet...**

### Test Related Systems

**The fix might have unintended consequences.**

You changed the file server IP. What else might be affected?
- Can users still access other servers? ✅
- Do printers still work? ✅
- Does the backup system still find the server? ⚠️

**Uh oh.** Backup system was configured to backup `192.168.1.50`, not the new IP. You just broke backups!

**This is why you verify FULL system functionality, not just the immediate problem.**

### Implement Preventive Measures (If Possible)

**Can you prevent this from happening again?**

In our scenario:
- Use DNS names instead of IP addresses for all mappings (future IP changes won't break things)
- Document all systems that reference the server
- Create checklist for server moves

**Other examples:**
- User keeps unplugging network cable → Cable lock
- Patch panel poorly labeled → Proper labeling system
- Users installing malware → Better web filtering

Sometimes prevention isn't possible, but when it is, implement it now while the problem is fresh.

🎯 **Exam Tip:** Verify the immediate fix AND check that nothing else broke. Test with the original user. Implement preventive measures when possible.

---

## Step 7: Document Findings, Actions, and Outcomes

**Goal:** Create a record for future reference and knowledge sharing.

### Why Documentation Matters

**Scenario 1:** Six months later, different users report the same symptoms. New tech on shift.

**Without documentation:** Start from scratch. Spend 2 hours troubleshooting again.

**With documentation:** "Oh, we've seen this before! Here's what worked." Fixed in 15 minutes.

**Scenario 2:** You're on vacation. Emergency happens.

**Without documentation:** Colleague scrambling, can't find information, bothering you on vacation.

**With documentation:** Colleague reads documentation, follows your steps, resolves issue.

### What to Document

**Minimum requirements:**

1. **Problem description:** What was reported? What were the symptoms?
2. **Root cause:** What actually caused it?
3. **Solution:** What did you do to fix it?
4. **Date/time:** When did this happen?
5. **Your name:** Who fixed it?

**Better documentation includes:**

6. **Systems affected:** Which servers, switches, VLANs, users?
7. **Troubleshooting steps taken:** What did you try? What worked? What didn't?
8. **Lessons learned:** What would you do differently next time?
9. **Related issues:** Are there other tickets or known issues?

### Documentation Example

**Ticket #2847 - File Server Access Issue**

**Date:** March 18, 2024, 8:05 AM - 9:30 AM  
**Reported by:** Sarah Johnson, Accounting  
**Resolved by:** Your Name, Network Team

**Problem:**
All Accounting department users unable to access S: drive (file server). Error message: "Network path not found." Internet access working normally.

**Root Cause:**
File server IP address changed from 192.168.1.50 to 192.168.1.100 during Saturday night maintenance. User drive mappings still pointed to old IP address. DNS records not updated.

**Troubleshooting Steps:**
1. Verified multiple users affected (department-wide, not isolated)
2. Confirmed network connectivity working (ping successful to server)
3. Checked drive mappings - found they pointed to old IP
4. Verified server now at new IP (192.168.1.100)
5. Theory confirmed: Stale drive mappings

**Solution Implemented:**
- **Immediate:** Manually updated drive mappings for Accounting team to new IP
- **Long-term:** Created group policy to map drives using DNS name (\\fileserver.company.local) instead of IP address
- Updated DNS A record to point to new IP
- Updated backup system configuration with new IP

**Verification:**
- Tested with original reporter - confirmed working
- Verified other users can access
- Checked backup system - found it needed updating (updated and tested)

**Preventive Measures:**
- All drive mappings now use DNS names, not IPs
- Created checklist for server IP changes including: drive mappings, DNS, backup systems, monitoring tools
- Updated server move documentation

**Lessons Learned:**
When moving server IPs, check all dependent systems: drive mappings, DNS, backups, monitoring, firewall rules.

**Status:** Resolved

---

### Where to Document

**Options:**
- **Ticketing system** (ServiceNow, Jira, etc.) - Most common
- **Knowledge base** (Confluence, SharePoint, internal wiki)
- **Runbook** (step-by-step guides)
- **Change log** (for tracking all changes to systems)

**Best practice:** Document in multiple places. Ticket for the specific incident, knowledge base for the general solution, change log for the configuration change.

🎯 **Exam Tip:** Documentation is required, not optional. Include problem, cause, solution, and lessons learned. Document for future you and future colleagues.

---

## Real-World Application: Complete Scenario

Let's walk through the entire 7-step process with a different scenario.

### The Problem

Tuesday, 2 PM. Multiple users in the Marketing department report slow internet speed. Some can't load websites at all.

### Step 1: Identify the Problem

**Questions:**
- "What websites are slow?"
- "When did this start?"
- "Is it just Marketing or other departments too?"

**Findings:**
- All websites slow, some timeout completely
- Started about 1 hour ago
- Only Marketing department affected (20 users)
- Engineering department on same floor reporting normal speeds
- Users on same VLAN (VLAN 30)

**Gathered:**
- Can ping internal servers (low latency)
- Can ping gateway (1ms response)
- Can ping 8.8.8.8 (200ms response - should be <20ms)
- Internet speed test: 0.5 Mbps download (should be 100 Mbps)

### Step 2: Establish Theory

**Theories:**
1. **Most probable:** Something consuming bandwidth on Marketing VLAN (malware, large download, backup)
2. **Possible:** ISP issue (but other departments fine)
3. **Possible:** QoS misconfiguration giving Marketing low priority
4. **Less likely:** Switch port failure

**Questioning the obvious:**
- Is the switch even working? (Yes, they can access internal resources)
- Any recent changes? (No scheduled changes)

### Step 3: Test Theory

**Test bandwidth usage:**
- Check firewall logs for top bandwidth consumers
- Finding: One IP (10.0.30.45) using 95 Mbps constant upload
- That's Sarah's computer (again)

**Investigate Sarah's computer:**
- Remote into computer
- Check Task Manager - Network usage at 95% by "backup.exe"
- Check backup.exe process - it's uploading 500GB of files to cloud storage

**Theory confirmed:** Unauthorized cloud backup consuming all available bandwidth for Marketing VLAN.

### Step 4: Plan of Action

**Options:**
1. Kill backup.exe process immediately (fast but might corrupt files)
2. Contact Sarah to ask her to stop backup (proper but she's in a meeting)
3. Throttle bandwidth for that IP temporarily (allows completion but slower)

**Chosen plan:** Kill process immediately (business need for internet outweighs Sarah's backup), then discuss proper backup procedures with Sarah later.

**Impact:** Stopping backup might interrupt Sarah's file upload but restores internet for 19 other users.

**Rollback plan:** If stopping process doesn't help, will investigate further (rule out other causes).

### Step 5: Implement

1. Remote into Sarah's computer
2. End backup.exe process
3. Check firewall again - bandwidth usage drops immediately
4. Monitor for few minutes - stays normal

### Step 6: Verify

**Immediate verification:**
- Speed test: 95 Mbps (normal!)
- Users report websites loading fast again
- Ping times to 8.8.8.8 back to 15ms (normal)

**Related systems:**
- Check other users on Marketing VLAN - all report normal speeds
- Check Engineering department - still normal (wasn't affected)
- Check if backup process is actually needed (turns out Sarah was manually backing up files, not part of official backup)

**Preventive measure:**
- Install proper backup software that throttles bandwidth
- Configure QoS to limit individual users to max 20 Mbps
- User training on proper backup procedures

### Step 7: Document

**Ticket #2851 - Marketing Slow Internet**

**Problem:** Marketing department (VLAN 30, 20 users) experiencing severely slow internet speeds starting 2 PM. Websites timing out.

**Root Cause:** User on 10.0.30.45 (Sarah Johnson) running unauthorized cloud backup software consuming 95 Mbps upload bandwidth (95% of available internet capacity).

**Solution:** Terminated backup.exe process, immediately restored normal speeds.

**Preventive Measures:**
- Implemented QoS policy limiting individual users to 20 Mbps
- Scheduled training on approved backup procedures
- Monitoring alerts set for bandwidth anomalies

**Verification:** Internet speeds returned to normal (95 Mbps down). All users confirmed working.

**Time:** 2:00 PM - 2:45 PM (45 minutes total)

---

## Troubleshooting Best Practices

### Don't Skip Steps

**Temptation:** "I know what the problem is, I'll skip to the fix."

**Risk:** You might be wrong. Wasted time, possible damage.

**Example:** User can't access file server. You "know" it's the server so you reboot it. Actual problem: User's network cable unplugged. Server reboot was unnecessary, caused brief outage for others.

### One Change at a Time

**Why:** If you make 5 changes and it works, you don't know which one fixed it.

**Exception:** Sometimes you must change multiple things (like updating both IP and DNS). Document that you're doing this.

### Divide and Conquer

**Big complex network with many parts?** Test to narrow down where the problem is.

**Can't access server:**
- Can ping it? (Tests Layer 3)
  - Yes → Not a network/routing issue
  - No → IS a network/routing issue
- Can telnet to port? (Tests Layer 4)
  - Yes → Network stack fine, application issue
  - No → Firewall or service issue

Each test eliminates half the possibilities.

### Keep Users Informed

**Bad:** Disappear for 2 hours fixing problem silently.

**Good:** "I'm working on this. I've identified the cause and expect to have it resolved in 30 minutes. I'll update you."

Even if you don't have solution yet: "Still investigating. I've ruled out X and Y, now checking Z. Will update in 15 minutes."

Users are much more patient when they know someone is actively working on it.

### Don't Assume

**Assumptions kill troubleshooting.**

"Nobody would be dumb enough to unplug the server."  
→ Someone unplugged the server.

"That switch is brand new, it can't be failing."  
→ DOA (dead on arrival) switch.

"This worked yesterday, so it must work today."  
→ Configuration changed overnight.

**Verify everything. Trust nothing. Test, don't assume.**

---

## Key Exam Tips

**The 7 steps in order (MEMORIZE):**
1. Identify the problem
2. Establish a theory of probable cause
3. Test the theory to determine the cause
4. Establish a plan of action
5. Implement the solution or escalate
6. Verify full system functionality
7. Document findings, actions, and outcomes

**Common exam question types:**

**Scenario 1:** "Users report slow network. What should you do FIRST?"
- Answer: Identify the problem (gather information, ask questions)
- NOT: Reboot the switch (that's implementation)

**Scenario 2:** "You've tested your theory and it's incorrect. What's the NEXT step?"
- Answer: Go back to Step 2, establish new theory
- NOT: Move to Step 4 and make changes anyway

**Scenario 3:** "You've implemented a solution and verified it works. What should you do?"
- Answer: Document findings (Step 7)
- NOT: Move on to next ticket without documenting

**Step 1 keywords:** Question, gather information, identify symptoms, determine changes

**Step 2 keywords:** Theory, hypothesis, probable cause, question the obvious

**Step 3 keywords:** Test, verify, confirm or disprove

**Step 4 keywords:** Plan, consider impact, rollback plan

**Step 5 keywords:** Implement, one change at a time, escalate if beyond scope

**Step 6 keywords:** Verify, test, check related systems, preventive measures

**Step 7 keywords:** Document, record, knowledge base

---

## Key Takeaways

- [ ] **CompTIA's 7-step methodology is required knowledge** - memorize the steps in order
- [ ] **Step 1: Identify the problem** through questioning and information gathering
- [ ] **Question the obvious** - check simple things before complex ones
- [ ] **Establish theory means forming hypothesis** - what MIGHT be causing this?
- [ ] **Test theory without making changes yet** - gathering evidence
- [ ] **If theory disproved, go back to Step 2** - don't skip ahead
- [ ] **Plan must consider impact** on users and business
- [ ] **Always have a rollback plan** - know how to undo changes
- [ ] **Make one change at a time** - otherwise you won't know what worked
- [ ] **Escalate when beyond scope or authority** - provide full context
- [ ] **Verify full system functionality** - not just the immediate problem
- [ ] **Test with original reporter** - confirm they're satisfied
- [ ] **Implement preventive measures** when possible
- [ ] **Documentation is required, not optional** - for future reference
- [ ] **Use OSI model as troubleshooting framework** - top-down or bottom-up
- [ ] **Don't assume - verify everything** - assumptions waste time

---

## Check Your Understanding

**1. Users report they cannot access email. What is the FIRST step you should take according to CompTIA's methodology?**

<details>
<summary>Show Answer</summary>
<strong>Identify the problem through information gathering - ask questions about symptoms, when it started, who is affected, what error messages appear, and what recent changes occurred.</strong> The first step is always to understand what's actually wrong before jumping to solutions. You need to ask: Can they access other things like web browsing? Is it all users or just some? When did this start? What error messages do they see? Did anything change? Is it all email or just certain emails? This information gathering helps you understand if it's truly an email server issue, a network connectivity issue, a DNS problem, or something else. Many techs make the mistake of immediately rebooting the email server or checking server logs before understanding the scope and nature of the problem. Following the methodology systematically saves time in the long run.
</details>

**2. You've formed a theory that a user's network cable is damaged. What should you do next?**

<details>
<summary>Show Answer</summary>
<strong>Test the theory to determine the cause (Step 3) - physically inspect the cable, try a different cable, or use a cable tester to confirm or disprove your theory before making any changes.</strong> You're still in the investigation phase. You have a hypothesis (damaged cable) but you haven't proven it yet. Testing might involve: visually inspecting the cable for damage, swapping to a known-good cable to see if problem persists, using a cable tester to check for continuity, or checking link lights. If swapping to new cable fixes the issue, theory confirmed - proceed to Step 4 (plan of action). If problem persists with new cable, theory is wrong - go back to Step 2 and form a new theory. Don't skip ahead to Step 4 or 5 without confirming your theory, or you might waste time fixing something that isn't broken.
</details>

**3. After testing, you determine your original theory was incorrect. What is the NEXT step?**

<details>
<summary>Show Answer</summary>
<strong>Go back to Step 2 (Establish a theory of probable cause) and form a new theory based on what you've learned from testing.</strong> This is a critical branch point in the methodology. If your theory is confirmed, you move forward to Step 4. If your theory is disproved, you loop back to Step 2. You don't skip ahead and start making random changes. The testing phase likely gave you new information - use that to form a better theory. For example, you thought it was a bad cable, but testing proved the cable is fine. Now you might theorize it's a bad switch port or a configuration issue. Form the new theory, then test that theory. The methodology is iterative - you might go through Steps 2-3 multiple times before finding the root cause. That's normal and expected.
</details>

**4. You've identified the problem and confirmed your theory. Users need access restored immediately. What should you do before implementing a fix?**

<details>
<summary>Show Answer</summary>
<strong>Establish a plan of action (Step 4) - consider the impact on users and business, determine the best approach, and create a rollback plan before implementing.</strong> Even in emergencies, take a moment to think through your approach. Consider: What are my options? Which is best? What's the impact of this change? Could this affect other systems? Do I have a way to undo this if it doesn't work? Can I do this now or should I wait for a maintenance window? Do I need approval? If you rush into implementation without planning, you might make things worse. For example, rebooting a server might fix one user's problem but cause an outage for 100 others. Taking 2 minutes to plan saves hours of recovering from mistakes. The exception: life-threatening emergency, but even then, think for 30 seconds before acting.
</details>

**5. When implementing a solution, why is it important to make only one change at a time?**

<details>
<summary>Show Answer</summary>
<strong>If you make multiple changes and the problem is fixed, you won't know which change actually resolved the issue, making it impossible to document the true solution or prevent the problem in the future.</strong> Imagine you're troubleshooting a connectivity issue and simultaneously: reboot the switch, restart the router, replace a cable, and change the user's IP address. The problem goes away. Great! But which change fixed it? Was it the switch reboot? The new cable? You have no idea. Next time the same issue occurs, you'll have to try all four things again (wasting time), or you might only do one and it doesn't work because you picked the wrong one. Making one change at a time means you know exactly what worked. Document that specific solution. Next time, you fix it in 30 seconds instead of repeating all four steps. The only exception is when changes are inherently linked (like updating both IP address and subnet mask must happen together).
</details>

**6. You've implemented a fix and the user confirms their issue is resolved. What should you do next?**

<details>
<summary>Show Answer</summary>
<strong>Verify full system functionality (Step 6) - test that the fix didn't break anything else and check related systems before considering the problem completely resolved.</strong> Just because the immediate problem is fixed doesn't mean you're done. Your change might have unintended consequences. For example, you fixed a user's email access by changing their network settings, but did you just break their access to file shares? Or you rebooted a switch to fix one user's connection, but did that cause brief disruption for other users on that switch? Test related systems: can they still access file servers? Can they print? Does their phone work? Is anyone else affected? Sometimes fixes create new problems. This step catches those before users discover them and call back angry. Only after verifying everything works should you move to Step 7 (documentation).
</details>

**7. What does "question the obvious" mean in troubleshooting?**

<details>
<summary>Show Answer</summary>
<strong>"Question the obvious" means starting with simple, common causes before investigating complex issues - checking if cables are plugged in, devices are powered on, and basic settings are correct before assuming complicated root causes.</strong> It's embarrassing to spend 2 hours troubleshooting complex routing protocols only to discover the network cable was unplugged. But it happens to everyone. "Question the obvious" is a reminder to check the simple stuff first: Is it plugged in? Is it turned on? Is the cable good? Has this ever worked before? Are other people affected? What changed recently? These basic checks take 2 minutes and solve probably 50% of problems. Only after ruling out obvious causes should you investigate complex issues like corrupted firmware or routing protocol failures. Think of it like a doctor checking your temperature before ordering a full-body MRI. Don't let ego prevent you from checking obvious things - even senior engineers check if the cable is plugged in first.
</details>

**8. When should you escalate an issue instead of continuing to troubleshoot?**

<details>
<summary>Show Answer</summary>
<strong>Escalate when the issue is beyond your technical knowledge, requires permissions you don't have, is time-critical and you're stuck, or requires specialized expertise.</strong> Knowing when to escalate is a skill. Don't escalate too early (before trying the basics), but don't escalate too late (after breaking things trying fixes you don't understand). Escalate if: you don't understand the technology (Cisco routing protocols and you've never configured them), you lack authority (rebooting production server requires approval), you're genuinely stuck after following methodology (tried everything you know, problem persists), or it's critical and time-sensitive (CEO can't present in 10 minutes, you need immediate senior help). When escalating, provide complete information: what's the problem, what you've found, what you've tested, what you've ruled out. Don't just say "it's broken, help!" Good escalation includes everything you've learned so the next person can pick up where you left off.
</details>

**9. Why is documentation considered a required step and not optional?**

<details>
<summary>Show Answer</summary>
<strong>Documentation creates institutional knowledge - when the same or similar problem occurs in the future (or you're not available), others can reference your solution instead of starting from scratch, saving significant time and effort.</strong> You'll see the same problems repeatedly in IT. User can't access file server, email slow, printer won't print - these aren't one-time issues. Without documentation, every tech troubleshoots from zero every time. With documentation, the second occurrence takes 5 minutes instead of 2 hours. Documentation benefits: future you (can't remember details from 6 months ago), your colleagues (they face similar issues), your replacement (when you leave or get promoted), management (tracks patterns and justifies resource needs). Good documentation includes: problem description, root cause, solution, date/time, systems affected. Great documentation adds: what you tested, lessons learned, preventive measures. The time spent documenting (5-10 minutes) saves hours for future incidents. It's an investment, not overhead.
</details>

**10. How can you use the OSI model as a troubleshooting tool?**

<details>
<summary>Show Answer</summary>
<strong>The OSI model provides a structured framework for troubleshooting - you can work bottom-up (Layer 1 to 7) checking physical, then data link, then network, etc., or top-down (Layer 7 to 1) checking application first, then working down to physical as needed.</strong> The OSI model organizes troubleshooting logically. Bottom-up approach: Start at Layer 1 (physical - cables plugged in? link lights on?), move to Layer 2 (can devices communicate on local network? ARP working?), then Layer 3 (can ping? IP addressing correct?), then Layer 4 (ports open? firewall allowing?), finally Layers 5-7 (application configured correctly?). This is thorough and catches everything but can be slow. Top-down approach: Start at Layer 7 (is the application working? what's the error?), work down only if needed. This is faster when you suspect application/configuration issues. Use bottom-up for physical problems or new installations. Use top-down for configuration or application errors. Either way, the OSI model prevents random troubleshooting - you systematically check each layer.
</details>

**11. What should a complete troubleshooting documentation entry include?**

<details>
<summary>Show Answer</summary>
<strong>Complete documentation includes: problem description and symptoms, root cause, solution implemented, date/time, who resolved it, systems affected, verification steps taken, and lessons learned or preventive measures.</strong> Minimum documentation (bare minimum for ticket): what was wrong, what caused it, what you did to fix it, when, and who. Better documentation adds: symptoms users reported, troubleshooting steps taken (what worked, what didn't), how you verified the fix, related systems checked, impact on users. Best documentation includes: lessons learned (what would you do differently?), preventive measures implemented, related tickets or known issues, configuration changes made. Think about writing for someone who will read this in 6 months with zero context. They should be able to understand: what happened, why it happened, exactly how to fix it if it happens again, and how to prevent it. Good documentation turns individual knowledge into team knowledge. It's the difference between institutional memory and starting fresh every time.
</details>

**12. A server is experiencing intermittent connection issues. Users sometimes can access it, sometimes cannot. What's the best troubleshooting approach?**

<details>
<summary>Show Answer</summary>
<strong>Gather detailed information about when the problem occurs (time of day? specific users? specific actions?), try to duplicate the problem consistently, monitor during both working and failing states, and look for patterns before forming theories.</strong> Intermittent problems are the hardest to troubleshoot because they're inconsistent. You need pattern recognition. Ask: When does it fail? (Specific times? Random?) Who experiences it? (Everyone? Specific users? Specific locations?) What are they doing when it fails? (Accessing specific files? Certain times of day?) Can you make it fail on purpose? Monitor continuously during both working and failing periods - capture logs, network traffic, resource usage. Look for patterns: "It fails every day at 2pm" (scheduled task?) or "It fails when >50 users connected" (resource limit?) or "It fails only for remote users" (VPN issue?). Intermittent problems often reveal themselves through pattern analysis. Once you identify the pattern, you can form more accurate theories. Don't just randomly try fixes - you need data first.
</details>

---

## Before Moving to Lesson 28

**You should be able to:**
- [ ] Recite CompTIA's 7-step troubleshooting methodology in order
- [ ] Explain what happens at each step
- [ ] Know when to loop back to Step 2 (theory disproved)
- [ ] Understand "question the obvious"
- [ ] Describe proper escalation procedures
- [ ] Explain why one change at a time matters
- [ ] Know what complete documentation includes
- [ ] Apply OSI model to troubleshooting
- [ ] Recognize when to escalate vs continue troubleshooting

**Study strategy:**
- **Memorize the 7 steps** - Write them out from memory multiple times
- **Practice with scenarios** - For any problem, walk through all 7 steps
- **Understand the flow** - Know the decision points (theory confirmed vs disproved)
- **Connect to real experience** - Think about problems you've solved and how the methodology applies
- **Focus on exam keywords** - Each step has specific terms that appear in questions

---

## Coming Up in Lesson 28

**Next: Command-Line Tools**

Now that you understand the systematic troubleshooting approach, Lesson 28 covers the specific tools you'll use during troubleshooting:
- ping (connectivity testing)
- tracert/traceroute (path analysis)
- ipconfig/ifconfig (configuration viewing)
- nslookup/dig (DNS troubleshooting)
- netstat (connection monitoring)
- arp (MAC address tables)
- And many more command-line utilities

**Connection:** The methodology tells you HOW to troubleshoot systematically. The tools tell you WHAT to use during each step. Step 3 (test theory) heavily relies on these commands.

---

*"Troubleshooting is not about memorizing fixes - it's about having a systematic process to find root causes."*

---

# ✅ LESSON 27 COMPLETE!

**Progress: 27 of 30 lessons (90% complete)**

**Module 5 Network Troubleshooting: 1 of 4 lessons complete**

🎯 You now have the systematic methodology - the foundation for all troubleshooting!

**Next up:** Lesson 28 - Command-Line Tools (the practical tools you'll use every day)

**Only 3 lessons remaining!** 🚀