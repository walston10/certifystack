# Lab 29: Risk Management

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 5.2 - Explain elements of the risk management process

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the relationship between threat, vulnerability, and risk?**

2. **What is the difference between qualitative and quantitative risk assessment?**

3. **Explain the four risk response strategies.**

4. **What is the difference between inherent risk and residual risk?**

5. **What is the purpose of a Business Impact Analysis (BIA)?**

---

## Section 2: Hands-On Activities

### Activity A: Risk Fundamentals

**Goal:** Understand core risk concepts.

**Key definitions:**

| Term | Definition | Example |
|------|------------|---------|
| Asset | | |
| Threat | | |
| Vulnerability | | |
| Risk | | |
| Impact | | |
| Likelihood | | |
| Control | | |

**Risk formula:**

```
Risk = __________ × __________ × __________
```

Or simplified:
```
Risk = __________ × __________
```

**Risk relationship diagram:**

```
    [Threat Actor]
          │
          ↓ exploits
    [Vulnerability]
          │
          ↓ compromises
       [Asset]
          │
          ↓ causes
       [Impact]
          │
          ↓ results in
        [Risk]
```

**Identify components:**

| Scenario | Threat | Vulnerability | Asset | Impact |
|----------|--------|---------------|-------|--------|
| Ransomware encrypts file server | | | | |
| Employee loses laptop | | | | |
| SQL injection on web app | | | | |
| Power outage affects data center | | | | |

---

### Activity B: Risk Identification

**Goal:** Identify risks systematically.

**Risk identification methods:**

| Method | Description | When to Use |
|--------|-------------|-------------|
| Brainstorming | | |
| Interviews | | |
| Checklists | | |
| Historical data | | |
| Threat modeling | | |
| Vulnerability scans | | |
| Audit findings | | |

**Risk categories:**

| Category | Examples |
|----------|----------|
| Strategic | |
| Operational | |
| Financial | |
| Compliance | |
| Reputational | |
| Technical | |

**Risk register template:**

| Risk ID | Description | Category | Likelihood | Impact | Risk Level | Owner | Status |
|---------|-------------|----------|------------|--------|------------|-------|--------|
| R-001 | | | | | | | |
| R-002 | | | | | | | |
| R-003 | | | | | | | |

**Identify 5 risks for an e-commerce company:**

| Risk | Category | Brief Description |
|------|----------|-------------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

---

### Activity C: Qualitative Risk Assessment

**Goal:** Assess risk using qualitative methods.

**Likelihood scale:**

| Level | Description | Criteria |
|-------|-------------|----------|
| 5 - Almost Certain | | |
| 4 - Likely | | |
| 3 - Possible | | |
| 2 - Unlikely | | |
| 1 - Rare | | |

**Impact scale:**

| Level | Description | Criteria |
|-------|-------------|----------|
| 5 - Catastrophic | | |
| 4 - Major | | |
| 3 - Moderate | | |
| 2 - Minor | | |
| 1 - Insignificant | | |

**Risk matrix:**

Complete the risk levels (Low, Medium, High, Critical):

| Impact ↓ / Likelihood → | 1 Rare | 2 Unlikely | 3 Possible | 4 Likely | 5 Almost Certain |
|-------------------------|--------|------------|------------|----------|------------------|
| 5 Catastrophic | | | | | |
| 4 Major | | | | | |
| 3 Moderate | | | | | |
| 2 Minor | | | | | |
| 1 Insignificant | | | | | |

**Assess these risks:**

| Risk | Likelihood (1-5) | Impact (1-5) | Risk Score | Risk Level |
|------|------------------|--------------|------------|------------|
| Ransomware attack | | | | |
| Employee data theft | | | | |
| DDoS attack | | | | |
| Regulatory fine | | | | |
| Hardware failure | | | | |

---

### Activity D: Quantitative Risk Assessment

**Goal:** Calculate risk using formulas.

**Key formulas:**

| Formula | Calculation |
|---------|-------------|
| SLE (Single Loss Expectancy) | |
| ALE (Annualized Loss Expectancy) | |
| ARO (Annualized Rate of Occurrence) | |
| EF (Exposure Factor) | |

**SLE calculation:**

```
SLE = Asset Value × Exposure Factor
```

| Scenario | Asset Value | EF | SLE |
|----------|-------------|-----|-----|
| Server destroyed by fire | $50,000 | 100% | |
| Data breach (partial) | $1,000,000 | 20% | |
| Laptop theft | $2,000 | 100% | |
| Database corruption | $500,000 | 50% | |

**ALE calculation:**

```
ALE = SLE × ARO
```

| Risk | SLE | ARO | ALE |
|------|-----|-----|-----|
| Ransomware ($100,000 loss) | $100,000 | 0.5 (once every 2 years) | |
| Laptop theft ($2,000) | $2,000 | 2.0 (twice per year) | |
| Data center outage ($500,000) | $500,000 | 0.1 (once every 10 years) | |
| Phishing success ($10,000) | $10,000 | 4.0 (4 times per year) | |

**Cost-benefit analysis:**

If a control costs $25,000/year and reduces ALE from $100,000 to $20,000:

| Metric | Calculation | Value |
|--------|-------------|-------|
| ALE before control | | |
| ALE after control | | |
| Risk reduction | | |
| Control cost | | |
| Net benefit | | |

Is the control worth implementing? _______________

---

### Activity E: Risk Response Strategies

**Goal:** Select appropriate risk responses.

**Four risk response strategies:**

| Strategy | Description | When to Use | Example |
|----------|-------------|-------------|---------|
| Avoid | | | |
| Transfer | | | |
| Mitigate | | | |
| Accept | | | |

**Match response to scenario:**

| Scenario | Response | Reasoning |
|----------|----------|-----------|
| Earthquake risk at data center | | |
| Potential credit card breach | | |
| Minor policy violation risk | | |
| New market with unknown risks | | |
| Cyber attack on web server | | |
| Vehicle fleet accidents | | |

**Risk response planning:**

| Risk | Current Level | Response | Planned Actions | Residual Risk |
|------|---------------|----------|-----------------|---------------|
| | | | | |
| | | | | |
| | | | | |

**Inherent vs Residual risk:**

| Term | Definition |
|------|------------|
| Inherent risk | |
| Residual risk | |
| Control effectiveness | |

**Calculate residual risk:**

| Risk | Inherent Risk | Control Effectiveness | Residual Risk |
|------|---------------|----------------------|---------------|
| High (25) | 25 | 60% | |
| Critical (50) | 50 | 80% | |
| Medium (15) | 15 | 40% | |

---

### Activity F: Risk Appetite and Tolerance

**Goal:** Understand organizational risk boundaries.

**Definitions:**

| Term | Definition | Example |
|------|------------|---------|
| Risk appetite | | |
| Risk tolerance | | |
| Risk capacity | | |
| Risk threshold | | |

**Risk appetite by organization type:**

| Organization | Risk Appetite | Reasoning |
|--------------|---------------|-----------|
| Startup | | |
| Bank | | |
| Hospital | | |
| Tech company | | |
| Government agency | | |

**Risk tolerance levels:**

| Risk Category | Low Tolerance | Medium Tolerance | High Tolerance |
|---------------|---------------|------------------|----------------|
| Financial loss | | | |
| Reputation damage | | | |
| Compliance violation | | | |
| Service outage | | | |

**Scenario: Define risk appetite**

Your company is a healthcare provider. Define:

| Element | Definition |
|---------|------------|
| Risk appetite statement | |
| Acceptable risk level | |
| Unacceptable risks | |
| Risk escalation threshold | |

---

### Activity G: Business Impact Analysis (BIA)

**Goal:** Identify critical business functions.

**BIA components:**

| Component | Purpose |
|-----------|---------|
| Critical functions | |
| Dependencies | |
| Impact assessment | |
| Recovery priorities | |
| Resource requirements | |

**Impact categories:**

| Category | Description | Measurement |
|----------|-------------|-------------|
| Financial | | |
| Operational | | |
| Reputational | | |
| Legal/Compliance | | |
| Safety | | |

**Critical function analysis:**

| Function | RTO | RPO | Impact if Down | Priority |
|----------|-----|-----|----------------|----------|
| Email | | | | |
| Customer database | | | | |
| E-commerce site | | | | |
| Payroll system | | | | |
| Manufacturing | | | | |

**Impact over time:**

| Function | 1 Hour | 4 Hours | 24 Hours | 1 Week |
|----------|--------|---------|----------|--------|
| Online ordering | | | | |
| Customer support | | | | |
| Financial systems | | | | |

**Recovery priority:**

| Priority | Functions | RTO Target |
|----------|-----------|------------|
| Critical | | |
| High | | |
| Medium | | |
| Low | | |

---

### Activity H: Risk Assessment Process

**Goal:** Follow structured risk assessment.

**Risk assessment phases:**

| Phase | Activities | Outputs |
|-------|------------|---------|
| 1. Prepare | | |
| 2. Identify | | |
| 3. Analyze | | |
| 4. Evaluate | | |
| 5. Treat | | |
| 6. Monitor | | |

**Risk assessment scope:**

| Element | Definition |
|---------|------------|
| Boundaries | |
| Assets included | |
| Threats considered | |
| Time period | |
| Methodology | |

**Stakeholder involvement:**

| Stakeholder | Role in Assessment |
|-------------|-------------------|
| Executive sponsor | |
| IT security | |
| Business units | |
| Legal/Compliance | |
| Finance | |
| Operations | |

---

### Activity I: Risk Indicators

**Goal:** Monitor risk levels.

**Key Risk Indicators (KRIs):**

| KRI | What It Measures | Threshold |
|-----|------------------|-----------|
| Failed login attempts | | |
| Unpatched systems | | |
| Open vulnerabilities | | |
| Security incidents | | |
| Policy violations | | |
| Audit findings | | |

**Leading vs Lagging indicators:**

| Type | Description | Examples |
|------|-------------|----------|
| Leading | | |
| Lagging | | |

**Risk dashboard elements:**

| Element | Purpose |
|---------|---------|
| Risk heat map | |
| Trend charts | |
| Top risks | |
| KRI status | |
| Action items | |

**Create KRIs for:**

| Risk | KRI | Warning Level | Critical Level |
|------|-----|---------------|----------------|
| Ransomware | | | |
| Data breach | | | |
| Insider threat | | | |
| Service outage | | | |

---

### Activity J: Third-Party Risk

**Goal:** Assess vendor and supply chain risk.

**Third-party risk categories:**

| Category | Description | Examples |
|----------|-------------|----------|
| Strategic | | |
| Operational | | |
| Compliance | | |
| Reputational | | |
| Financial | | |
| Cybersecurity | | |

**Vendor assessment criteria:**

| Criterion | Questions to Ask |
|-----------|------------------|
| Security controls | |
| Compliance certifications | |
| Financial stability | |
| Business continuity | |
| Data handling | |
| Incident response | |

**Vendor risk rating:**

| Factor | Weight | Low (1) | Medium (2) | High (3) |
|--------|--------|---------|------------|----------|
| Data access | 30% | | | |
| System access | 25% | | | |
| Criticality | 25% | | | |
| Replaceability | 20% | | | |

**Supply chain risk:**

| Risk | Impact | Mitigation |
|------|--------|------------|
| Single source supplier | | |
| Geographic concentration | | |
| Counterfeit components | | |
| Software supply chain | | |

---

### Activity K: Risk Documentation

**Goal:** Document risks properly.

**Risk register fields:**

| Field | Purpose |
|-------|---------|
| Risk ID | |
| Description | |
| Category | |
| Owner | |
| Likelihood | |
| Impact | |
| Risk score | |
| Response strategy | |
| Controls | |
| Residual risk | |
| Status | |
| Last review | |

**Complete a risk entry:**

Risk: Ransomware attack encrypts critical systems

| Field | Entry |
|-------|-------|
| Risk ID | |
| Description | |
| Category | |
| Owner | |
| Likelihood | |
| Impact | |
| Risk score | |
| Response | |
| Controls | |
| Residual risk | |
| Status | |

**Risk report to management:**

| Section | Content |
|---------|---------|
| Executive summary | |
| Top risks | |
| Risk trends | |
| New risks | |
| Closed risks | |
| Recommendations | |
| Action items | |

---

### Activity L: Risk Scenarios

**Goal:** Apply risk management to real situations.

**Scenario 1: Cloud Migration**

Your company is moving critical applications to the cloud.

| Risk | Likelihood | Impact | Response | Controls |
|------|------------|--------|----------|----------|
| Data breach during migration | | | | |
| Service provider failure | | | | |
| Compliance violation | | | | |
| Loss of control | | | | |

**Scenario 2: Merger & Acquisition**

Your company is acquiring a smaller tech company.

| Risk | Likelihood | Impact | Response | Controls |
|------|------------|--------|----------|----------|
| Unknown security debt | | | | |
| Integration failures | | | | |
| Data privacy issues | | | | |
| Cultural conflicts | | | | |

**Scenario 3: New Product Launch**

Launching a mobile app that processes payments.

| Risk | Likelihood | Impact | Response | Controls |
|------|------------|--------|----------|----------|
| PCI compliance failure | | | | |
| App vulnerabilities | | | | |
| Fraud attempts | | | | |
| Reputational damage | | | | |

---

### Activity M: Risk Frameworks

**Goal:** Understand risk management frameworks.

**Common frameworks:**

| Framework | Focus | Key Elements |
|-----------|-------|--------------|
| NIST RMF | | |
| ISO 31000 | | |
| FAIR | | |
| COSO ERM | | |
| OCTAVE | | |

**NIST RMF steps:**

| Step | Activities |
|------|------------|
| Prepare | |
| Categorize | |
| Select | |
| Implement | |
| Assess | |
| Authorize | |
| Monitor | |

**ISO 31000 principles:**

| Principle | Description |
|-----------|-------------|
| Integrated | |
| Structured | |
| Customized | |
| Inclusive | |
| Dynamic | |
| Best available info | |
| Human/cultural factors | |
| Continual improvement | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Management wants to accept a high-risk vulnerability because remediation is too expensive. How do you document this decision and what should be included?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your risk assessment identified 200 risks. You can only address 20 this quarter. How do you prioritize, and how do you communicate the remaining risks to stakeholders?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A third-party vendor you depend on had a major data breach. How does this affect your risk posture, and what actions should you take?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Define threat, vulnerability, risk, and impact
- [ ] Perform qualitative risk assessment using risk matrix
- [ ] Calculate SLE, ALE, and ARO
- [ ] Explain the four risk response strategies
- [ ] Differentiate inherent and residual risk
- [ ] Explain risk appetite and tolerance
- [ ] Conduct Business Impact Analysis
- [ ] Define Key Risk Indicators
- [ ] Assess third-party risk
- [ ] Document risks in a risk register

---

## What You Learned Today

- ✅ Understood risk fundamentals
- ✅ Identified risks systematically
- ✅ Performed qualitative assessment
- ✅ Calculated quantitative risk
- ✅ Selected risk responses
- ✅ Defined risk appetite/tolerance
- ✅ Conducted BIA
- ✅ Followed assessment process
- ✅ Created risk indicators
- ✅ Assessed third-party risk
- ✅ Documented risks properly
- ✅ Solved risk scenarios
- ✅ Reviewed risk frameworks

**Next Lab:** Governance and Compliance - policies, standards, and regulatory requirements.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 29: Risk Management*