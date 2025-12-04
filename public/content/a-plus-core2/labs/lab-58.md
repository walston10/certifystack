# Lab 58: Change Management and Documentation

**Tier:** 1  
**Time:** 25-35 minutes  
**Exam Objectives:** 4.2 - Explain basic change-management best practices

---

## Section 1: Concept Check (5 min)

1. What is change management, and why is it important in IT?

2. What is a rollback plan, and when would you use it?

3. What is a change advisory board (CAB)?

4. Why should changes be made during a maintenance window?

5. What is the difference between an emergency change and a standard change?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Conceptual learning** - Change management and documentation exercises.

#### Activity A: Change Request Components

**Goal:** Understand change request documentation.

**Complete a change request form:**

| Field | Description | Example Entry |
|-------|-------------|---------------|
| Change ID | | |
| Requester | | |
| Date submitted | | |
| Change description | | |
| Reason/justification | | |
| Risk level | | |
| Affected systems | | |
| Affected users | | |
| Implementation date | | |
| Implementation window | | |
| Rollback plan | | |
| Testing completed | | |
| Approvals required | | |

---

#### Activity B: Risk Assessment

**Goal:** Evaluate change risk levels.

**Rate each change (Low/Medium/High/Critical):**

| Change | Risk Level | Justification |
|--------|------------|---------------|
| Update antivirus definitions | | |
| Upgrade server operating system | | |
| Replace user's mouse | | |
| Migrate email server | | |
| Change firewall rules | | |
| Install new printer driver | | |
| Update production database schema | | |
| Change DNS records | | |
| Add new VLAN | | |
| Replace failed hard drive | | |

**Risk factors to consider:**

| Factor | Low Risk | High Risk |
|--------|----------|-----------|
| Scope | | |
| Reversibility | | |
| User impact | | |
| Downtime | | |
| Dependencies | | |

---

#### Activity C: Rollback Planning

**Goal:** Create effective rollback plans.

**For each scenario, write a rollback plan:**

**Scenario 1:** Windows update on workstations

| Step | Action | Verification |
|------|--------|--------------|
| 1 | | |
| 2 | | |
| 3 | | |

**Scenario 2:** Network switch firmware update

| Step | Action | Verification |
|------|--------|--------------|
| 1 | | |
| 2 | | |
| 3 | | |

**Scenario 3:** Software application upgrade

| Step | Action | Verification |
|------|--------|--------------|
| 1 | | |
| 2 | | |
| 3 | | |

---

#### Activity D: Documentation Types

**Goal:** Understand IT documentation categories.

**Match documentation types to purposes:**

| Documentation Type | Purpose | When Updated |
|--------------------|---------|--------------|
| Network diagram | | |
| Asset inventory | | |
| Standard operating procedure (SOP) | | |
| Knowledge base article | | |
| Incident report | | |
| Configuration backup | | |
| Change log | | |
| Runbook | | |

---

#### Activity E: Change Management Process

**Goal:** Map the change management workflow.

**Put these steps in order (1-10):**

| Order | Step |
|-------|------|
| | Implement change |
| | Submit change request |
| | Document results |
| | Test in non-production |
| | Risk assessment |
| | Schedule maintenance window |
| | Verify success |
| | Obtain approvals |
| | Communicate to stakeholders |
| | Execute rollback (if needed) |

**Draw the workflow:**

```
[Submit] → [____] → [____] → [____] → [Implement] → [____] → [Document]
                         ↓
                   [Rollback if failed]
```

---

#### Activity F: Communication Planning

**Goal:** Plan change communications.

**Scenario:** Server maintenance requiring 2-hour downtime on Saturday morning.

**Communication plan:**

| Audience | Message | Method | Timing |
|----------|---------|--------|--------|
| IT team | | | |
| Management | | | |
| End users | | | |
| Help desk | | | |

**Sample notification template:**

```
Subject: ________________________________

Dear [audience],

What: ________________________________
When: ________________________________
Duration: ________________________________
Impact: ________________________________
Action needed: ________________________________

Questions? Contact: ________________________________
```

---

#### Activity G: Documentation Exercise

**Goal:** Practice creating IT documentation.

**Create a simple SOP for: Password Reset Procedure**

| Section | Content |
|---------|---------|
| Title | |
| Purpose | |
| Scope | |
| Prerequisites | |
| Step 1 | |
| Step 2 | |
| Step 3 | |
| Step 4 | |
| Verification | |
| Related documents | |
| Revision history | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A critical security patch needs to be applied immediately, but no change request has been submitted. What's the appropriate process?

**Scenario 2:** A change was implemented last night, and this morning users are reporting problems. How do you determine if the change is the cause?

**Scenario 3:** Your colleague says documentation is "a waste of time" and just slows things down. How would you explain its importance?

**Scenario 4:** A change was approved but the implementation window has passed without completing it. What should happen?

---

## What You Learned Today

- ✅ Change request documentation
- ✅ Risk assessment for changes
- ✅ Rollback plan creation
- ✅ IT documentation types
- ✅ Change management workflow
- ✅ Communication planning
- ✅ SOP documentation

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║               CHANGE MANAGEMENT QUICK REFERENCE                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  CHANGE MANAGEMENT PROCESS                                                 ║
║  ─────────────────────────────────────────────────────────────────────────║
║  1. Request    → Submit formal change request                             ║
║  2. Assess     → Evaluate risk and impact                                 ║
║  3. Approve    → CAB or appropriate authority                             ║
║  4. Plan       → Schedule, rollback, communication                        ║
║  5. Test       → Non-production first                                     ║
║  6. Implement  → During maintenance window                                ║
║  7. Verify     → Confirm success                                          ║
║  8. Document   → Record results                                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  CHANGE TYPES                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Standard   → Pre-approved, low risk (e.g., password reset)               ║
║  Normal     → Requires approval, follows full process                     ║
║  Emergency  → Urgent, abbreviated approval, document after                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  EVERY CHANGE NEEDS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  • Description of what and why                                            ║
║  • Risk assessment                                                        ║
║  • Rollback plan                                                          ║
║  • Testing evidence                                                       ║
║  • Approval documentation                                                 ║
║  • Implementation record                                                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DOCUMENTATION TYPES                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Network diagram  → Physical and logical topology                         ║
║  Asset inventory  → What we have, where it is                             ║
║  SOP              → How to do standard tasks                              ║
║  Knowledge base   → Solutions to common problems                          ║
║  Runbook          → Step-by-step for complex procedures                   ║
╚═══════════════════════════════════════════════════════════════════════════╝
```