# Lab 24: Security Assessments - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Security assessments are essential for compliance and risk management.

---

## Section 1: Concept Check - Answers

**1. Internal vs External audit:**

**Answer:**

| Aspect | Internal Audit | External Audit |
|--------|----------------|----------------|
| **Performed by** | Company employees | Third-party firm |
| **Independence** | Limited | High |
| **Purpose** | Self-assessment | Certification/compliance |
| **Regulatory acceptance** | Usually not accepted | Accepted for compliance |

---

**2. Security framework purpose:**

**Answer:**

**Purpose:** Provides structured approach to implementing security controls, ensures consistency, and enables benchmarking.

**Common frameworks:**
- NIST Cybersecurity Framework (CSF)
- ISO 27001/27002
- CIS Controls
- COBIT
- SOC 2

---

**3. Policy, standard, procedure, guideline:**

**Answer:**

| Document | Definition | Mandatory |
|----------|------------|-----------|
| **Policy** | High-level statement of intent | Yes |
| **Standard** | Specific requirements to meet policy | Yes |
| **Procedure** | Step-by-step instructions | Yes |
| **Guideline** | Recommendations and best practices | No |

---

**4. Attestation:**

**Answer:**

**Attestation** is formal verification that an organization meets specific security requirements.

**Types:**
- Self-attestation (organization claims compliance)
- Third-party attestation (auditor verifies)
- Regulatory attestation (regulator validates)

---

**5. Gap analysis:**

**Answer:**

**Gap analysis** compares current security state to desired state (framework/standard) to identify missing controls.

**When performed:**
- Before compliance audit
- Framework adoption
- Security program improvement
- M&A due diligence
- After incidents

---

## Section 2: Activity Solutions

### Activity A: Assessment Types - Answers

| Type | Purpose | Performed By | Frequency |
|------|---------|--------------|-----------|
| Vulnerability assessment | Find vulnerabilities | Internal/External | Weekly-Monthly |
| Penetration test | Prove exploitability | External | Annually |
| Security audit | Verify controls | Internal/External | Annually |
| Compliance assessment | Regulatory adherence | External | Per regulation |
| Risk assessment | Identify/prioritize risks | Internal | Annually+ |
| Threat assessment | Identify threat actors | Internal/Intel | Ongoing |

**Internal vs External:**

| Aspect | Internal | External |
|--------|----------|----------|
| Performed by | Employees | Third party |
| Independence | Low | High |
| System knowledge | High | Lower |
| Cost | Lower | Higher |
| Regulatory acceptance | Limited | High |
| Best for | Ongoing monitoring | Certification |

---

### Activity B: Frameworks - Answers

| Framework | Focus | Organization | Use Case |
|-----------|-------|--------------|----------|
| NIST CSF | Risk-based security | US Gov (NIST) | General security |
| NIST RMF | Risk management | US Gov (NIST) | Federal agencies |
| ISO 27001 | ISMS certification | ISO | International |
| ISO 27002 | Control guidance | ISO | Implementation guide |
| CIS Controls | Prioritized controls | CIS | Practical security |
| COBIT | IT governance | ISACA | Enterprise IT |
| SOC 2 | Service organization | AICPA | Vendor assurance |

**NIST CSF functions:**

| Function | Purpose | Examples |
|----------|---------|----------|
| Identify | Know assets/risks | Asset inventory, risk assessment |
| Protect | Safeguard assets | Access control, encryption |
| Detect | Find incidents | Monitoring, SIEM |
| Respond | Handle incidents | IR plan, containment |
| Recover | Restore operations | Backup, DR |

**Control mapping:**

| Control | Function |
|---------|----------|
| Asset inventory | Identify |
| Firewall rules | Protect |
| SIEM monitoring | Detect |
| IR plan | Respond |
| Backup restoration | Recover |
| Security training | Protect |
| Vuln scanning | Detect |
| Access policies | Protect |

---

### Activity C: Compliance - Answers

| Regulation | Full Name | Scope | Requirements |
|------------|-----------|-------|--------------|
| PCI DSS | Payment Card Industry Data Security Standard | Card data | 12 requirements |
| HIPAA | Health Insurance Portability and Accountability Act | Health data | Safeguards |
| SOX | Sarbanes-Oxley | Financial reporting | Internal controls |
| GDPR | General Data Protection Regulation | EU personal data | Privacy rights |
| GLBA | Gramm-Leach-Bliley Act | Financial data | Privacy, security |
| FERPA | Family Educational Rights and Privacy Act | Student records | Access controls |

**PCI DSS requirements:**

| Req | Description |
|-----|-------------|
| 1 | Install/maintain firewall |
| 2 | Don't use vendor defaults |
| 3 | Protect stored cardholder data |
| 4 | Encrypt transmission |
| 5 | Use antivirus |
| 6 | Develop secure systems |
| 7 | Restrict access (need to know) |
| 8 | Unique ID for access |
| 9 | Restrict physical access |
| 10 | Track and monitor access |
| 11 | Test security regularly |
| 12 | Maintain security policy |

**HIPAA safeguards:**

| Type | Examples |
|------|----------|
| Administrative | Policies, training, risk analysis |
| Physical | Facility access, device controls |
| Technical | Access control, encryption, audit |

---

### Activity D: Audit Process - Answers

| Phase | Activities | Deliverables |
|-------|------------|--------------|
| Planning | Scope, objectives, schedule | Audit plan |
| Fieldwork | Testing, evidence gathering | Working papers |
| Reporting | Analyze findings, write report | Audit report |
| Follow-up | Verify remediation | Closure report |

**Evidence types:**

| Type | Description | Example |
|------|-------------|---------|
| Documentary | Written records | Policies, logs |
| Testimonial | Interviews | Staff statements |
| Observational | Direct observation | Watching processes |
| Analytical | Data analysis | Trend analysis |

---

### Activity E: Governance Documents - Answers

| Document | Definition | Mandatory | Example |
|----------|------------|-----------|---------|
| Policy | High-level intent | Yes | "Protect company data" |
| Standard | Specific requirements | Yes | "Use AES-256 encryption" |
| Procedure | Step-by-step | Yes | "How to encrypt files" |
| Guideline | Recommendations | No | "Consider using VPN" |
| Baseline | Minimum config | Yes | "Server hardening config" |

**Classification:**

| Statement | Type |
|-----------|------|
| "Must use strong passwords" | Policy |
| "14+ characters" | Standard |
| "Go to portal to reset..." | Procedure |
| "Consider password manager" | Guideline |
| "Antivirus required" | Standard |
| "Recommend monthly reviews" | Guideline |

---

### Activity F: Risk Assessment - Answers

**Risk matrix:**

|  | Low Impact | Medium | High |
|--|------------|--------|------|
| **High Likelihood** | Medium | High | Critical |
| **Medium Likelihood** | Low | Medium | High |
| **Low Likelihood** | Low | Low | Medium |

**Risk assessment:**

| Scenario | Likelihood | Impact | Risk |
|----------|------------|--------|------|
| Ransomware on file server | High | High | Critical |
| Earthquake | Low | Critical | Medium |
| Phishing click | High | Medium | High |
| Zero-day on web | Medium | High | High |
| Insider theft | Low | High | Medium |

---

### Activity G: Gap Analysis - Answers

| Control | Required | Current | Gap? | Action |
|---------|----------|---------|------|--------|
| Access policy | Yes | None | Yes | Create policy |
| MFA privileged | Yes | Partial | Yes | Extend to all |
| Training | Yes | Annual | No | Maintain |
| Encryption at rest | Yes | Partial | Yes | Expand scope |
| Segmentation | Yes | Flat | Yes | Implement VLANs |

---

### Activity H: Third-Party Risk - Answers

**SOC reports:**

| Type | Coverage | Use |
|------|----------|-----|
| SOC 1 | Financial controls | Financial audits |
| SOC 2 Type I | Point-in-time design | Initial assessment |
| SOC 2 Type II | Operating effectiveness (period) | Ongoing assurance |
| SOC 3 | Public summary | Marketing |

---

### Activity I: Metrics - Answers

**Calculations:**

| Scenario | Calculation | Result |
|----------|-------------|--------|
| 950/1000 patched | 950/1000 × 100 | 95% compliance |
| 5/100 clicked | 5/100 × 100 | 5% click rate |
| 2 hours to detect | Direct | 2 hour MTTD |
| 80/100 trained | 80/100 × 100 | 80% completion |

---

### Activity J: Attestation - Answers

| Type | Description | Example |
|------|-------------|---------|
| Self-attestation | Company claims compliance | Vendor questionnaire |
| Third-party | Auditor verifies | SOC 2 report |
| Regulatory | Regulator validates | FedRAMP |

**Certification vs Compliance:**

| Aspect | Certification | Compliance |
|--------|---------------|------------|
| Definition | Formal recognition | Meeting requirements |
| Validation | Third-party audit | Various methods |
| Duration | Time-limited | Ongoing |
| Example | ISO 27001 cert | HIPAA compliance |

---

### Activity K: Findings - Answers

| Level | Description | Response |
|-------|-------------|----------|
| Critical | Immediate risk | 24-48 hours |
| High | Significant risk | 7 days |
| Medium | Moderate risk | 30 days |
| Low | Minor issue | 90 days |
| Informational | Observation | As resources allow |

---

### Activity L: Scenarios - Answers

**Scenario 1 (Healthcare):**

| Question | Answer |
|----------|--------|
| Framework | HIPAA |
| Assessment | Compliance audit + risk assessment |
| Key areas | PHI protection, access controls, training |
| Who | External auditor |
| Deliverables | Compliance report, risk assessment |

**Scenario 2 (E-commerce):**

| Question | Answer |
|----------|--------|
| Regulation | PCI DSS |
| Assessment | QSA audit or SAQ |
| Frequency | Annual |
| Who | QSA (Qualified Security Assessor) |
| If fail | Can't process cards, fines |

**Scenario 3 (SaaS):**

| Question | Answer |
|----------|--------|
| Certification | SOC 2 |
| Type | Type II (over time) |
| Criteria | Security, availability, confidentiality |
| Timeline | 6-12 months |
| Ongoing | Annual audit |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Failed PCI audit**

**Explanation:**
- Non-compliance = fines, card processing loss
- Breach liability increases without compliance
- Customer trust at stake
- Remediation cost < breach cost

**Plan:**
1. Prioritize critical findings
2. Quick wins first
3. Timeline with milestones
4. Regular status updates
5. Re-audit scheduling

---

**Scenario 2: Vendor won't share SOC 2**

**Options:**
1. Request under NDA
2. Accept SOC 3 (public summary)
3. Send security questionnaire
4. Right-to-audit clause in contract
5. On-site assessment
6. Consider alternative vendor
7. Accept risk with documentation

---

**Scenario 3: NIST CSF with limited resources**

**Prioritization:**
1. Start with Identify function (know what you have)
2. Focus on highest-risk areas
3. Leverage existing controls
4. Quick wins: policies, training
5. Phase larger investments

**Demonstrate value:**
- Show risk reduction
- Track metrics improvement
- Document incidents prevented
- Compare to industry benchmarks

---

## Key Exam Tips

1. **NIST CSF functions:** Identify, Protect, Detect, Respond, Recover

2. **Policy:** What to do (mandatory)
   **Standard:** Specific requirements
   **Procedure:** How to do it
   **Guideline:** Recommendations (optional)

3. **SOC 2 Type I:** Point-in-time design
   **SOC 2 Type II:** Operating effectiveness over time

4. **Gap analysis:** Current state vs desired state

5. **Risk = Likelihood × Impact**

6. **Internal audit:** Employees, less independence
   **External audit:** Third party, more independence

7. **PCI DSS:** 12 requirements for cardholder data

8. **HIPAA:** Administrative, physical, technical safeguards

9. **Attestation:** Formal verification of compliance

10. **CIS Controls:** Prioritized, practical security controls

---

## Common Mistakes to Avoid

❌ Confusing policy (what) with procedure (how)

❌ Thinking internal audit satisfies external requirements

❌ Confusing SOC 1 (financial) with SOC 2 (security)

❌ Forgetting that guidelines are optional

❌ Treating all findings with same priority

❌ Confusing certification (formal recognition) with compliance (meeting requirements)

---

**Congratulations on completing Lab 24!**

Security assessments are fundamental for maintaining security posture and demonstrating compliance.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 24: Security Assessments - Solution Guide*