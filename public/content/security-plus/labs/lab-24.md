# Lab 24: Security Assessments

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 4.1 - Given a scenario, apply common security techniques to computing resources

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between an internal audit and an external audit?**

2. **Explain the purpose of a security framework. Name two common frameworks.**

3. **What is the difference between a policy, standard, procedure, and guideline?**

4. **What is attestation in the context of security assessments?**

5. **What is a gap analysis, and when would you perform one?**

---

## Section 2: Hands-On Activities

### Activity A: Assessment Types

**Goal:** Understand different security assessment types.

**Assessment type comparison:**

| Type | Purpose | Performed By | Frequency |
|------|---------|--------------|-----------|
| Vulnerability assessment | | | |
| Penetration test | | | |
| Security audit | | | |
| Compliance assessment | | | |
| Risk assessment | | | |
| Threat assessment | | | |

**Internal vs External assessments:**

| Aspect | Internal | External |
|--------|----------|----------|
| Performed by | | |
| Independence | | |
| Knowledge of systems | | |
| Cost | | |
| Regulatory acceptance | | |
| Best for | | |

**When to use each:**

| Scenario | Assessment Type | Why |
|----------|-----------------|-----|
| Annual PCI compliance | | |
| New application deployment | | |
| After a security incident | | |
| Quarterly security check | | |
| M&A due diligence | | |
| Insurance requirement | | |

---

### Activity B: Security Frameworks

**Goal:** Understand major security frameworks.

**Framework overview:**

| Framework | Focus | Organization | Use Case |
|-----------|-------|--------------|----------|
| NIST CSF | | | |
| NIST RMF | | | |
| ISO 27001 | | | |
| ISO 27002 | | | |
| CIS Controls | | | |
| COBIT | | | |
| SOC 2 | | | |

**NIST Cybersecurity Framework (CSF) functions:**

| Function | Purpose | Example Activities |
|----------|---------|-------------------|
| Identify | | |
| Protect | | |
| Detect | | |
| Respond | | |
| Recover | | |

**Map security controls to NIST CSF:**

| Control | CSF Function |
|---------|--------------|
| Asset inventory | |
| Firewall rules | |
| SIEM monitoring | |
| Incident response plan | |
| Backup restoration | |
| Security awareness training | |
| Vulnerability scanning | |
| Access control policies | |

**CIS Controls categories:**

| Category | Controls | Focus |
|----------|----------|-------|
| Basic (1-6) | | |
| Foundational (7-16) | | |
| Organizational (17-18) | | |

---

### Activity C: Compliance Requirements

**Goal:** Understand regulatory compliance.

**Major regulations:**

| Regulation | Full Name | Scope | Key Requirements |
|------------|-----------|-------|------------------|
| PCI DSS | | | |
| HIPAA | | | |
| SOX | | | |
| GDPR | | | |
| GLBA | | | |
| FERPA | | | |

**PCI DSS requirements overview:**

| Requirement | Description |
|-------------|-------------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |
| 6 | |
| 7 | |
| 8 | |
| 9 | |
| 10 | |
| 11 | |
| 12 | |

**HIPAA safeguards:**

| Safeguard Type | Examples |
|----------------|----------|
| Administrative | |
| Physical | |
| Technical | |

**Match the requirement:**

| Requirement | Regulation |
|-------------|------------|
| Protect cardholder data | |
| Protect patient health information | |
| Financial reporting controls | |
| EU resident data protection | |
| Student education records | |
| Financial institution customer data | |

---

### Activity D: Audit Process

**Goal:** Understand the audit lifecycle.

**Audit phases:**

| Phase | Activities | Deliverables |
|-------|------------|--------------|
| Planning | | |
| Fieldwork | | |
| Reporting | | |
| Follow-up | | |

**Audit planning elements:**

| Element | Description |
|---------|-------------|
| Scope | |
| Objectives | |
| Timeline | |
| Resources | |
| Methodology | |
| Criteria | |

**Evidence types:**

| Type | Description | Example |
|------|-------------|---------|
| Documentary | | |
| Testimonial | | |
| Observational | | |
| Analytical | | |

**Evidence quality criteria:**

| Criterion | Description |
|-----------|-------------|
| Relevant | |
| Reliable | |
| Sufficient | |
| Appropriate | |

---

### Activity E: Policies, Standards, Procedures, Guidelines

**Goal:** Differentiate governance documents.

**Document hierarchy:**

```
        ┌─────────────┐
        │   Policy    │  ← High-level, mandatory
        └──────┬──────┘
               │
        ┌──────┴──────┐
        │  Standard   │  ← Specific requirements
        └──────┬──────┘
               │
        ┌──────┴──────┐
        │  Procedure  │  ← Step-by-step instructions
        └──────┬──────┘
               │
        ┌──────┴──────┐
        │  Guideline  │  ← Recommendations (optional)
        └─────────────┘
```

**Definitions:**

| Document | Definition | Mandatory? | Example |
|----------|------------|------------|---------|
| Policy | | | |
| Standard | | | |
| Procedure | | | |
| Guideline | | | |
| Baseline | | | |

**Classify these statements:**

| Statement | Type |
|-----------|------|
| "All employees must use strong passwords" | |
| "Passwords must be at least 14 characters" | |
| "To reset password: 1) Go to portal..." | |
| "Consider using a password manager" | |
| "All servers must have antivirus installed" | |
| "We recommend monthly security reviews" | |

**Create a document set for "Data Classification":**

| Document | Content Summary |
|----------|-----------------|
| Policy | |
| Standard | |
| Procedure | |
| Guideline | |

---

### Activity F: Risk Assessment Process

**Goal:** Conduct a basic risk assessment.

**Risk assessment steps:**

| Step | Activities |
|------|------------|
| 1. Asset identification | |
| 2. Threat identification | |
| 3. Vulnerability identification | |
| 4. Impact analysis | |
| 5. Likelihood determination | |
| 6. Risk calculation | |
| 7. Risk prioritization | |

**Risk calculation:**

```
Risk = Threat × Vulnerability × Impact
```

Or simplified:
```
Risk = Likelihood × Impact
```

**Risk matrix:**

|  | Low Impact | Medium Impact | High Impact |
|--|------------|---------------|-------------|
| **High Likelihood** | | | |
| **Medium Likelihood** | | | |
| **Low Likelihood** | | | |

Fill in risk levels (Low, Medium, High, Critical)

**Assess these risks:**

| Scenario | Likelihood | Impact | Risk Level |
|----------|------------|--------|------------|
| Ransomware on file server | High | High | |
| Earthquake at data center | Low | Critical | |
| Employee clicks phishing link | High | Medium | |
| Zero-day exploit on web server | Medium | High | |
| Insider data theft | Low | High | |

---

### Activity G: Gap Analysis

**Goal:** Identify security gaps.

**Gap analysis process:**

| Step | Activity |
|------|----------|
| 1 | Define target state (framework/standard) |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**Gap analysis template:**

| Control | Required By | Current State | Gap | Priority | Remediation |
|---------|-------------|---------------|-----|----------|-------------|
| | | | | | |

**Conduct gap analysis (sample):**

Framework: NIST CSF - Protect function

| Control | Required | Current | Gap? | Action |
|---------|----------|---------|------|--------|
| Access control policy | Yes | No documented policy | | |
| MFA for privileged users | Yes | MFA for admins only | | |
| Security awareness training | Yes | Annual training | | |
| Data encryption at rest | Yes | Partial (databases only) | | |
| Network segmentation | Yes | Flat network | | |

**Gap prioritization factors:**

| Factor | Weight | Description |
|--------|--------|-------------|
| Regulatory requirement | | |
| Risk reduction | | |
| Cost to implement | | |
| Complexity | | |
| Quick win potential | | |

---

### Activity H: Third-Party Risk Assessment

**Goal:** Assess vendor security.

**Vendor assessment considerations:**

| Area | Questions to Ask |
|------|------------------|
| Security certifications | |
| Data handling | |
| Incident response | |
| Access controls | |
| Business continuity | |
| Compliance | |

**Third-party assessment methods:**

| Method | Description | When to Use |
|--------|-------------|-------------|
| Questionnaire | | |
| On-site audit | | |
| Penetration test | | |
| SOC 2 report review | | |
| Certification verification | | |

**SOC report types:**

| Type | Coverage | Use |
|------|----------|-----|
| SOC 1 | | |
| SOC 2 Type I | | |
| SOC 2 Type II | | |
| SOC 3 | | |

**Vendor risk rating:**

| Factor | Low Risk | Medium Risk | High Risk |
|--------|----------|-------------|-----------|
| Data access | | | |
| System access | | | |
| Business criticality | | | |
| Replaceability | | | |

---

### Activity I: Security Metrics and KPIs

**Goal:** Measure security program effectiveness.

**Common security metrics:**

| Metric | What It Measures | Target |
|--------|------------------|--------|
| Patch compliance rate | | |
| Mean time to detect (MTTD) | | |
| Mean time to respond (MTTR) | | |
| Vulnerability remediation time | | |
| Security training completion | | |
| Phishing click rate | | |
| Incidents per month | | |
| False positive rate | | |

**Calculate these metrics:**

| Scenario | Calculation | Result |
|----------|-------------|--------|
| 950 of 1000 systems patched | | |
| 5 phishing clicks from 100 test emails | | |
| Detected attack 2 hours after it started | | |
| 80 of 100 employees completed training | | |

**Reporting to leadership:**

| Audience | Metrics to Present | Format |
|----------|-------------------|--------|
| Board/Executives | | |
| IT Management | | |
| Security Team | | |
| Auditors | | |

---

### Activity J: Attestation and Certification

**Goal:** Understand formal security validation.

**Attestation types:**

| Type | Description | Example |
|------|-------------|---------|
| Self-attestation | | |
| Third-party attestation | | |
| Regulatory attestation | | |

**Common certifications:**

| Certification | What It Validates | Issued By |
|---------------|-------------------|-----------|
| ISO 27001 | | |
| SOC 2 | | |
| PCI DSS | | |
| FedRAMP | | |
| HITRUST | | |

**Certification process:**

| Phase | Activities |
|-------|------------|
| Preparation | |
| Assessment | |
| Remediation | |
| Certification | |
| Maintenance | |

**Certification vs Compliance:**

| Aspect | Certification | Compliance |
|--------|---------------|------------|
| Definition | | |
| Validation | | |
| Duration | | |
| Example | | |

---

### Activity K: Audit Findings and Remediation

**Goal:** Handle audit results effectively.

**Finding severity levels:**

| Level | Description | Response Time |
|-------|-------------|---------------|
| Critical | | |
| High | | |
| Medium | | |
| Low | | |
| Informational | | |

**Finding response process:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**Sample finding response:**

Finding: "Privileged accounts lack MFA"
Severity: High

| Element | Response |
|---------|----------|
| Root cause | |
| Remediation plan | |
| Timeline | |
| Resources needed | |
| Verification method | |

**Management response options:**

| Response | When Appropriate |
|----------|------------------|
| Accept | |
| Remediate | |
| Transfer | |
| Mitigate | |

---

### Activity L: Assessment Scenario Exercise

**Goal:** Apply assessment concepts to real scenarios.

**Scenario 1: Healthcare Organization**

A hospital needs to assess its security posture against HIPAA requirements.

| Question | Answer |
|----------|--------|
| Which framework/regulation applies? | |
| Assessment type needed? | |
| Key areas to assess? | |
| Who should perform it? | |
| Expected deliverables? | |

**Scenario 2: E-commerce Company**

An online retailer processing credit cards needs annual compliance validation.

| Question | Answer |
|----------|--------|
| Which regulation applies? | |
| Assessment type? | |
| Required frequency? | |
| Who can perform it? | |
| What happens if they fail? | |

**Scenario 3: Software Company**

A SaaS provider wants to demonstrate security to enterprise customers.

| Question | Answer |
|----------|--------|
| Which certification is most valuable? | |
| SOC 2 Type I or Type II? | |
| Trust service criteria? | |
| Timeline to achieve? | |
| Ongoing requirements? | |

---

### Activity M: Building an Assessment Program

**Goal:** Design ongoing assessment activities.

**Annual assessment calendar:**

| Month | Assessment Activity | Scope |
|-------|---------------------|-------|
| January | | |
| February | | |
| March | | |
| April | | |
| May | | |
| June | | |
| July | | |
| August | | |
| September | | |
| October | | |
| November | | |
| December | | |

**Continuous assessment elements:**

| Element | Frequency | Tool/Method |
|---------|-----------|-------------|
| Vulnerability scanning | | |
| Configuration compliance | | |
| Access reviews | | |
| Log reviews | | |
| Policy reviews | | |

**Assessment program maturity:**

| Level | Characteristics |
|-------|-----------------|
| Initial | |
| Developing | |
| Defined | |
| Managed | |
| Optimizing | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company failed a PCI DSS audit due to missing controls. Management is upset about the cost of remediation. How do you explain the importance of compliance and present a remediation plan?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A vendor you rely on for customer data processing won't share their SOC 2 report, claiming it's "confidential." How do you assess their security, and what are your options?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** The security team wants to adopt the NIST Cybersecurity Framework, but the company has limited resources. How do you prioritize implementation and demonstrate quick wins to gain support?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Differentiate internal and external assessments
- [ ] Explain major security frameworks (NIST CSF, ISO 27001, CIS)
- [ ] Understand key compliance regulations (PCI DSS, HIPAA, GDPR)
- [ ] Describe the audit process phases
- [ ] Differentiate policies, standards, procedures, guidelines
- [ ] Conduct basic risk assessment
- [ ] Perform gap analysis
- [ ] Assess third-party/vendor risk
- [ ] Define security metrics and KPIs
- [ ] Understand attestation and certification

---

## What You Learned Today

- ✅ Compared assessment types
- ✅ Explored security frameworks
- ✅ Reviewed compliance requirements
- ✅ Understood audit process
- ✅ Differentiated governance documents
- ✅ Conducted risk assessment
- ✅ Performed gap analysis
- ✅ Assessed third-party risk
- ✅ Defined security metrics
- ✅ Understood attestation
- ✅ Handled audit findings
- ✅ Solved assessment scenarios
- ✅ Designed assessment program

**Next Lab:** Incident Response Process - detection, containment, and recovery procedures.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 24: Security Assessments*