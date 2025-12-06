# Lab 29: Risk Management - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Risk management is foundational to all security decisions.

---

## Section 1: Concept Check - Answers

**1. Threat, vulnerability, and risk relationship:**

**Answer:**

| Term | Definition |
|------|------------|
| **Threat** | Potential danger that could exploit a vulnerability |
| **Vulnerability** | Weakness that could be exploited |
| **Risk** | Probability of threat exploiting vulnerability × impact |

**Relationship:** Threats exploit vulnerabilities to cause impact, resulting in risk.

```
Risk = Threat × Vulnerability × Impact
```

---

**2. Qualitative vs Quantitative:**

**Answer:**

| Type | Approach | Output |
|------|----------|--------|
| **Qualitative** | Subjective ratings (High/Med/Low) | Risk matrix, categories |
| **Quantitative** | Numerical calculations ($) | SLE, ALE, dollar values |

Qualitative is faster; Quantitative is more precise but requires data.

---

**3. Four risk response strategies:**

**Answer:**

| Strategy | Description |
|----------|-------------|
| **Avoid** | Eliminate the risk by not doing the activity |
| **Transfer** | Shift risk to third party (insurance, outsourcing) |
| **Mitigate** | Reduce likelihood or impact with controls |
| **Accept** | Acknowledge and document the risk |

---

**4. Inherent vs Residual risk:**

**Answer:**

| Type | Definition |
|------|------------|
| **Inherent risk** | Risk level BEFORE controls are applied |
| **Residual risk** | Risk level AFTER controls are applied |

Residual risk = Inherent risk - Control effectiveness

---

**5. BIA purpose:**

**Answer:**

**Business Impact Analysis (BIA)** identifies critical business functions and the impact of their disruption.

**Purpose:**
- Prioritize recovery efforts
- Define RTO/RPO requirements
- Justify security investments
- Support disaster recovery planning
- Identify dependencies

---

## Section 2: Activity Solutions

### Activity A: Risk Fundamentals - Answers

| Term | Definition | Example |
|------|------------|---------|
| Asset | Something of value | Server, data, reputation |
| Threat | Potential danger | Hacker, earthquake, malware |
| Vulnerability | Weakness | Unpatched system, weak password |
| Risk | Probability × impact | Data breach possibility |
| Impact | Consequence of event | Financial loss, downtime |
| Likelihood | Probability of occurrence | 30% chance per year |
| Control | Safeguard/countermeasure | Firewall, encryption |

**Risk formula:**

```
Risk = Threat × Vulnerability × Impact
```
Or:
```
Risk = Likelihood × Impact
```

**Identify components:**

| Scenario | Threat | Vulnerability | Asset | Impact |
|----------|--------|---------------|-------|--------|
| Ransomware | Attacker | Unpatched system | File server | Data loss, downtime |
| Lost laptop | Theft | No encryption | Laptop/data | Data breach |
| SQL injection | Attacker | Code flaw | Web app/database | Data breach |
| Power outage | Natural | No UPS/generator | Data center | Downtime |

---

### Activity B: Risk Identification - Answers

**Methods:**

| Method | Description | When |
|--------|-------------|------|
| Brainstorming | Team ideation | Initial identification |
| Interviews | SME discussions | Deep knowledge |
| Checklists | Standard risk lists | Compliance, baseline |
| Historical | Past incidents | Learn from history |
| Threat modeling | Systematic analysis | Application security |
| Vuln scans | Automated detection | Technical risks |
| Audit findings | Control gaps | Compliance |

**E-commerce risks:**

| Risk | Category | Description |
|------|----------|-------------|
| 1 | Technical | Website breach exposes customer data |
| 2 | Financial | Payment fraud losses |
| 3 | Operational | Site outage during peak sales |
| 4 | Compliance | PCI DSS violation |
| 5 | Reputational | Negative reviews damage brand |

---

### Activity C: Qualitative Assessment - Answers

**Likelihood scale:**

| Level | Description | Criteria |
|-------|-------------|----------|
| 5 | Almost Certain | >90% probability |
| 4 | Likely | 60-90% probability |
| 3 | Possible | 30-60% probability |
| 2 | Unlikely | 10-30% probability |
| 1 | Rare | <10% probability |

**Impact scale:**

| Level | Description | Criteria |
|-------|-------------|----------|
| 5 | Catastrophic | >$1M loss, business failure |
| 4 | Major | $500K-$1M, significant damage |
| 3 | Moderate | $100K-$500K, noticeable impact |
| 2 | Minor | $10K-$100K, limited impact |
| 1 | Insignificant | <$10K, negligible |

**Risk matrix:**

| Impact / Likelihood | 1 | 2 | 3 | 4 | 5 |
|---------------------|---|---|---|---|---|
| 5 Catastrophic | Med | High | High | Crit | Crit |
| 4 Major | Med | Med | High | High | Crit |
| 3 Moderate | Low | Med | Med | High | High |
| 2 Minor | Low | Low | Med | Med | High |
| 1 Insignificant | Low | Low | Low | Med | Med |

**Assess risks:**

| Risk | L | I | Score | Level |
|------|---|---|-------|-------|
| Ransomware | 4 | 5 | 20 | Critical |
| Employee theft | 2 | 4 | 8 | Medium |
| DDoS | 3 | 3 | 9 | Medium |
| Regulatory fine | 2 | 4 | 8 | Medium |
| Hardware failure | 3 | 2 | 6 | Medium |

---

### Activity D: Quantitative Assessment - Answers

**Formulas:**

| Formula | Calculation |
|---------|-------------|
| SLE | Asset Value × Exposure Factor |
| ALE | SLE × ARO |
| ARO | Incidents per year |
| EF | Percentage of asset lost |

**SLE calculations:**

| Scenario | AV | EF | SLE |
|----------|-----|-----|-----|
| Server fire | $50,000 | 100% | $50,000 |
| Data breach | $1,000,000 | 20% | $200,000 |
| Laptop theft | $2,000 | 100% | $2,000 |
| DB corruption | $500,000 | 50% | $250,000 |

**ALE calculations:**

| Risk | SLE | ARO | ALE |
|------|-----|-----|-----|
| Ransomware | $100,000 | 0.5 | $50,000 |
| Laptop theft | $2,000 | 2.0 | $4,000 |
| DC outage | $500,000 | 0.1 | $50,000 |
| Phishing | $10,000 | 4.0 | $40,000 |

**Cost-benefit:**

| Metric | Value |
|--------|-------|
| ALE before | $100,000 |
| ALE after | $20,000 |
| Risk reduction | $80,000 |
| Control cost | $25,000 |
| Net benefit | $55,000 |

**Worth it?** Yes—saves $55,000/year.

---

### Activity E: Risk Response - Answers

| Strategy | Description | When | Example |
|----------|-------------|------|---------|
| Avoid | Don't do activity | Risk too high | Don't store certain data |
| Transfer | Shift to third party | Can't mitigate | Buy insurance |
| Mitigate | Reduce risk | Most common | Implement controls |
| Accept | Document and proceed | Low risk, high cost to fix | Minor policy gaps |

**Match scenarios:**

| Scenario | Response | Reason |
|----------|----------|--------|
| Earthquake | Transfer | Insurance |
| Card breach | Mitigate | Implement PCI controls |
| Policy violation | Accept | Low impact |
| New market | Avoid | Too uncertain |
| Web attack | Mitigate | WAF, patching |
| Fleet accidents | Transfer | Insurance |

**Inherent vs Residual:**

| Term | Definition |
|------|------------|
| Inherent | Risk before controls |
| Residual | Risk after controls |
| Control effectiveness | % risk reduced |

**Calculate residual:**

| Inherent | Control % | Residual |
|----------|-----------|----------|
| 25 | 60% | 10 |
| 50 | 80% | 10 |
| 15 | 40% | 9 |

---

### Activity F: Risk Appetite - Answers

| Term | Definition | Example |
|------|------------|---------|
| Appetite | Amount of risk willing to take | "Moderate risk acceptable" |
| Tolerance | Acceptable deviation | "±10% of target" |
| Capacity | Maximum risk sustainable | "Can survive $1M loss" |
| Threshold | Trigger for escalation | "Alert if risk > High" |

**By organization:**

| Org | Appetite | Reason |
|-----|----------|--------|
| Startup | High | Growth focus |
| Bank | Low | Regulated, trust |
| Hospital | Low | Patient safety |
| Tech company | Moderate-High | Innovation |
| Government | Low | Public trust |

---

### Activity G: BIA - Answers

| Component | Purpose |
|-----------|---------|
| Critical functions | What must operate |
| Dependencies | What they need |
| Impact | What happens if down |
| Recovery priorities | What first |
| Resources | What's needed to recover |

**Critical functions:**

| Function | RTO | RPO | Impact | Priority |
|----------|-----|-----|--------|----------|
| Email | 4 hrs | 1 hr | Moderate | High |
| Customer DB | 1 hr | 15 min | Critical | Critical |
| E-commerce | 15 min | 0 | Critical | Critical |
| Payroll | 24 hrs | 4 hrs | Moderate | Medium |
| Manufacturing | 2 hrs | 1 hr | High | High |

---

### Activity H: Assessment Process - Answers

| Phase | Activities | Outputs |
|-------|------------|---------|
| Prepare | Scope, team, methodology | Assessment plan |
| Identify | Find risks | Risk list |
| Analyze | Assess likelihood/impact | Risk ratings |
| Evaluate | Prioritize, compare to criteria | Ranked risks |
| Treat | Select responses | Treatment plan |
| Monitor | Track, update | Risk reports |

---

### Activity I: Risk Indicators - Answers

| KRI | Measures | Threshold |
|-----|----------|-----------|
| Failed logins | Brute force attempts | >100/hour |
| Unpatched | Vulnerability exposure | <95% patched |
| Open vulns | Attack surface | >10 critical |
| Incidents | Security events | >5/month |
| Violations | Policy compliance | >3/quarter |
| Audit findings | Control gaps | >5 open |

**Leading vs Lagging:**

| Type | Description | Examples |
|------|-------------|----------|
| Leading | Predict future risk | Unpatched systems, training completion |
| Lagging | Show past performance | Incidents, breaches |

---

### Activity J: Third-Party Risk - Answers

| Category | Description | Examples |
|----------|-------------|----------|
| Strategic | Business alignment | Vendor stability |
| Operational | Service delivery | Performance, availability |
| Compliance | Regulatory | Certifications |
| Reputational | Brand impact | Vendor incidents |
| Financial | Money risk | Vendor bankruptcy |
| Cybersecurity | Security posture | Breaches, controls |

---

### Activity K: Documentation - Answers

**Sample risk entry:**

| Field | Entry |
|-------|-------|
| Risk ID | R-001 |
| Description | Ransomware encrypts critical systems causing data loss and downtime |
| Category | Technical/Cybersecurity |
| Owner | CISO |
| Likelihood | 4 (Likely) |
| Impact | 5 (Catastrophic) |
| Risk score | 20 (Critical) |
| Response | Mitigate |
| Controls | Backups, EDR, training, patching |
| Residual risk | Medium (after controls) |
| Status | Active |

---

### Activity L: Scenarios - Answers

**Cloud Migration:**

| Risk | L | I | Response | Controls |
|------|---|---|----------|----------|
| Data breach | 3 | 5 | Mitigate | Encryption, access control |
| Provider failure | 2 | 4 | Transfer | SLA, multi-cloud |
| Compliance | 3 | 4 | Mitigate | Certifications, audits |
| Loss of control | 3 | 3 | Mitigate | Governance, monitoring |

**M&A:**

| Risk | L | I | Response | Controls |
|------|---|---|----------|----------|
| Security debt | 4 | 4 | Mitigate | Due diligence, assessment |
| Integration | 3 | 3 | Mitigate | Planning, testing |
| Privacy | 3 | 4 | Mitigate | Data inventory, legal |
| Culture | 3 | 2 | Accept | Integration planning |

---

### Activity M: Frameworks - Answers

| Framework | Focus | Elements |
|-----------|-------|----------|
| NIST RMF | Federal systems | 7-step process |
| ISO 31000 | Enterprise risk | Principles, framework, process |
| FAIR | Quantitative cyber | Factor analysis |
| COSO ERM | Enterprise-wide | Components, principles |
| OCTAVE | Operational | Self-directed |

**NIST RMF:**

| Step | Activities |
|------|------------|
| Prepare | Establish context |
| Categorize | Classify system |
| Select | Choose controls |
| Implement | Deploy controls |
| Assess | Evaluate effectiveness |
| Authorize | Accept risk |
| Monitor | Ongoing assessment |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Accept high risk**

**Documentation required:**
1. Risk description and severity
2. Business justification for acceptance
3. Cost of remediation vs acceptance
4. Potential impact if exploited
5. Compensating controls (if any)
6. Management signature/approval
7. Review date
8. Conditions for revisiting

**Key:** Management must formally accept in writing with full understanding of consequences.

---

**Scenario 2: 200 risks, can only address 20**

**Prioritization:**
1. Risk score (Critical/High first)
2. Regulatory requirements
3. Quick wins (low effort, high impact)
4. Asset criticality
5. Threat likelihood

**Communication:**
- Report top 20 being addressed
- Document remaining 180 in risk register
- Show risk acceptance for deferred items
- Propose timeline for future quarters
- Request additional resources if needed

---

**Scenario 3: Vendor breach**

**Actions:**
1. Assess what data they had access to
2. Determine if your data was affected
3. Review contract for notification requirements
4. Update risk assessment for vendor
5. Notify affected parties if required
6. Consider additional monitoring
7. Review vendor controls
8. Evaluate alternative vendors
9. Update third-party risk program

**Risk posture:** Elevated—inherited risk from vendor materialized.

---

## Key Exam Tips

1. **Risk formula:** Risk = Threat × Vulnerability × Impact

2. **SLE = Asset Value × Exposure Factor**
   **ALE = SLE × ARO**

3. **Four responses:** Avoid, Transfer, Mitigate, Accept

4. **Inherent risk:** Before controls
   **Residual risk:** After controls

5. **Qualitative:** High/Medium/Low (subjective)
   **Quantitative:** Dollar values (objective)

6. **BIA identifies:** Critical functions, RTO, RPO

7. **Risk appetite:** How much risk willing to take
   **Risk tolerance:** Acceptable deviation

8. **Leading indicators:** Predict future
   **Lagging indicators:** Show past

9. **ARO:** Annualized Rate of Occurrence (times per year)

10. **Accept risk:** Must be documented with management approval

---

## Common Mistakes to Avoid

❌ Confusing SLE (single event) with ALE (annual)

❌ Forgetting to document risk acceptance

❌ Treating all risks the same (no prioritization)

❌ Ignoring residual risk after controls

❌ Confusing risk appetite with risk tolerance

❌ Not updating risk assessments regularly

---

**Congratulations on completing Lab 29!**

Risk management is the foundation of security decision-making—every control decision should be risk-based.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 29: Risk Management - Solution Guide*