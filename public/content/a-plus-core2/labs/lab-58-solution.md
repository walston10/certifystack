# Lab 58: Change Management and Documentation - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Change Management

**What it is:** Formal process for requesting, evaluating, approving, implementing, and documenting changes to IT systems

**Why important:**
- Reduces unplanned outages
- Ensures changes are tested
- Creates accountability
- Enables rollback if problems occur
- Maintains system stability
- Provides audit trail

---

### Question 2: Rollback Plan

**What it is:** Documented steps to reverse a change and restore the previous state

**When used:**
- Change causes unexpected problems
- Change doesn't work as expected
- Users experience significant issues
- System stability is compromised
- Testing reveals critical bugs

---

### Question 3: Change Advisory Board (CAB)

**What it is:** Group that reviews, evaluates, and approves changes

**Typically includes:**
- IT management
- Technical leads
- Security representatives
- Business stakeholders
- Operations staff

**Purpose:** Ensure changes are properly assessed for risk and business impact

---

### Question 4: Maintenance Window

**Why important:**
- Minimizes user impact (off-hours)
- Allows time for testing after change
- Enables rollback before business hours
- Provides planned downtime if needed
- Sets clear expectations

---

### Question 5: Emergency vs Standard Change

| Emergency Change | Standard Change |
|-----------------|-----------------|
| Urgent, cannot wait | Pre-approved, routine |
| Abbreviated approval | Follows normal process |
| Documented after | Documented before |
| Higher risk tolerance | Low risk only |
| Example: Security patch for active threat | Example: Password reset |

---

## Section 2: Activities - Answers

### Activity A: Change Request Components

| Field | Description | Example |
|-------|-------------|---------|
| Change ID | Unique identifier | CHG-2024-0156 |
| Requester | Who submitted | John Smith, IT |
| Date submitted | Request date | 2024-03-15 |
| Change description | What will change | Upgrade Windows Server from 2019 to 2022 |
| Reason/justification | Why needed | End of support, security requirements |
| Risk level | Assessed risk | Medium |
| Affected systems | What's impacted | FILE-SRV-01, shares, 50 users |
| Affected users | Who's impacted | All Marketing department |
| Implementation date | When | 2024-03-22 |
| Implementation window | Time frame | Saturday 2:00 AM - 6:00 AM |
| Rollback plan | How to reverse | Restore from Veeam backup |
| Testing completed | Pre-testing | Yes - tested on FILE-SRV-DEV |
| Approvals required | Who must approve | IT Manager, CAB |

---

### Activity B: Risk Assessment

| Change | Risk | Justification |
|--------|------|---------------|
| Antivirus definitions | Low | Routine, automatic, no downtime |
| Server OS upgrade | High | Downtime, potential compatibility issues |
| Replace mouse | Low | Single user, easily reversed |
| Email server migration | Critical | Affects everyone, complex rollback |
| Firewall rules | Medium | Security impact, could block access |
| Printer driver | Low | Single device, easy to rollback |
| Database schema | High | Data integrity, affects applications |
| DNS records | Medium | Propagation time, wide impact |
| Add new VLAN | Medium | Network change, could affect routing |
| Replace failed drive | Low | Restoration from RAID, minimal impact |

**Risk factors:**

| Factor | Low Risk | High Risk |
|--------|----------|-----------|
| Scope | Single user/device | Many users/systems |
| Reversibility | Easy rollback | Difficult/impossible |
| User impact | Minimal disruption | Major workflow impact |
| Downtime | None or minutes | Hours |
| Dependencies | Standalone | Many systems depend on it |

---

### Activity C: Rollback Planning

**Windows update:**

| Step | Action | Verification |
|------|--------|--------------|
| 1 | Access Settings → Update & Security → Recovery | Recovery options visible |
| 2 | Select "Go back to previous version" | Rollback initiates |
| 3 | Wait for rollback to complete | System boots to previous state |

**Network switch firmware:**

| Step | Action | Verification |
|------|--------|--------------|
| 1 | Keep backup of original firmware | File saved to TFTP server |
| 2 | If issues, upload previous firmware | TFTP transfer completes |
| 3 | Reload switch with old firmware | Switch boots, connectivity restored |

**Application upgrade:**

| Step | Action | Verification |
|------|--------|--------------|
| 1 | Restore from application backup | Files restored to previous version |
| 2 | Restore database if schema changed | Database matches old version |
| 3 | Test critical functions | Users can perform key tasks |

---

### Activity D: Documentation Types

| Type | Purpose | Updated |
|------|---------|---------|
| Network diagram | Show topology, connections, addressing | When network changes |
| Asset inventory | Track hardware/software owned | When assets added/removed |
| SOP | Document standard procedures | When process changes |
| Knowledge base | Solutions to known issues | When new solutions found |
| Incident report | Record what happened, response | After each incident |
| Configuration backup | Enable restoration | After config changes |
| Change log | Track all changes | After each change |
| Runbook | Step-by-step complex procedures | When procedures change |

---

### Activity E: Change Process Order

**Correct order:**

| Order | Step |
|-------|------|
| 1 | Submit change request |
| 2 | Risk assessment |
| 3 | Obtain approvals |
| 4 | Test in non-production |
| 5 | Schedule maintenance window |
| 6 | Communicate to stakeholders |
| 7 | Implement change |
| 8 | Verify success |
| 9 | Execute rollback (if needed) |
| 10 | Document results |

**Workflow:**

```
[Submit] → [Assess Risk] → [Approve] → [Test] → [Schedule] → [Communicate]
                                                      ↓
                                              [Implement]
                                                      ↓
                                              [Verify] → [Document]
                                                 ↓
                                          [Rollback if failed]
```

---

### Activity F: Communication Planning

**Server maintenance communication:**

| Audience | Message | Method | Timing |
|----------|---------|--------|--------|
| IT team | Full technical details, tasks, contacts | Team meeting + email | 1 week before |
| Management | Business impact, duration, risks | Email | 5 days before |
| End users | What's affected, when, what to do | Email + intranet | 3 days + 1 day before |
| Help desk | Expected calls, FAQs, escalation | Briefing + document | 2 days before |

**Sample notification:**

```
Subject: Scheduled Server Maintenance - Saturday March 22

Dear Team,

What: File server maintenance and upgrade
When: Saturday, March 22, 2:00 AM - 6:00 AM
Duration: Up to 4 hours
Impact: Marketing shared drives will be unavailable

Action needed: Please save all work to local drive before 
leaving Friday. Avoid scheduling automated jobs during this window.

Questions? Contact: IT Help Desk x1234 or helpdesk@company.com
```

---

### Activity G: Password Reset SOP

| Section | Content |
|---------|---------|
| Title | Password Reset Procedure |
| Purpose | Reset user passwords securely |
| Scope | All Active Directory users |
| Prerequisites | Admin credentials, identity verification |
| Step 1 | Verify user identity (security questions, manager confirmation) |
| Step 2 | Open Active Directory Users and Computers |
| Step 3 | Locate user account, right-click → Reset Password |
| Step 4 | Set temporary password, check "User must change at next logon" |
| Step 5 | Communicate temp password securely (phone, not email) |
| Verification | User successfully logs in and changes password |
| Related documents | Account Lockout SOP, Identity Verification Policy |
| Revision history | v1.0 - Initial, v1.1 - Added verification step |

---

## Section 3: Reflection - Answers

### Scenario 1: Emergency Security Patch

**Appropriate process:**
1. **Declare emergency change** - Document the urgency
2. **Get expedited approval** - Manager/security lead (abbreviated CAB)
3. **Implement immediately** - With rollback plan ready
4. **Document after** - Full change documentation post-implementation
5. **Review in CAB** - After the fact, lessons learned

**Key:** Emergency changes still need approval and documentation, just faster.

---

### Scenario 2: Problems After Change

**Determining if change caused problems:**
1. **Timeline correlation** - Did problems start exactly after change?
2. **Check change log** - What exactly was changed?
3. **Affected systems** - Are problem systems the ones changed?
4. **Error messages** - Do they point to changed components?
5. **Test rollback** - If rollback fixes it, change was cause
6. **Non-affected systems** - Do unchanged systems have same issue?

**If change is cause:** Execute rollback plan, then investigate root cause.

---

### Scenario 3: Documentation Importance

**Explaining to skeptical colleague:**

1. **When you're on vacation** - Others can handle your systems
2. **When you leave** - Knowledge doesn't walk out the door
3. **When things break** - Faster recovery with docs
4. **For audits** - Required for compliance
5. **For consistency** - Same process every time
6. **For training** - New staff get up to speed faster
7. **For legal** - Prove you followed proper procedures

**Real example:** "Remember when the server crashed and nobody knew the admin password? Documentation prevents that."

---

### Scenario 4: Missed Implementation Window

**What should happen:**
1. **Change is NOT automatically approved** for later
2. **Reassess** - Conditions may have changed
3. **Reschedule** - New maintenance window
4. **Update documentation** - New date, any changes
5. **Re-communicate** - Notify stakeholders of new date
6. **May need re-approval** - If significant time passed

**Why:** Conditions change - the approval was for that specific window.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║               CHANGE MANAGEMENT QUICK REFERENCE                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PROCESS: Request → Assess → Approve → Test → Schedule → Implement        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  EVERY CHANGE NEEDS: Description, risk assessment, rollback plan,         ║
║  testing, approval, documentation                                         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  EMERGENCY CHANGE: Still needs approval + documentation (just faster)     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DOCUMENTATION: Network diagrams, asset inventory, SOPs, knowledge base   ║
╚═══════════════════════════════════════════════════════════════════════════╝
```