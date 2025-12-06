# Lab 28: Data Protection and Privacy

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 4.2 - Explain the security implications of proper hardware, software, and data asset management

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the three states of data, and how should each be protected?**

2. **What is the difference between data classification and data categorization?**

3. **Explain the difference between tokenization and encryption.**

4. **What is PII, and why does it require special protection?**

5. **What is the purpose of a Data Loss Prevention (DLP) system?**

---

## Section 2: Hands-On Activities

### Activity A: Data States

**Goal:** Understand data protection across all states.

**Three states of data:**

| State | Description | Examples | Risks |
|-------|-------------|----------|-------|
| Data at rest | | | |
| Data in transit | | | |
| Data in use | | | |

**Protection methods by state:**

| State | Protection Methods |
|-------|-------------------|
| At rest | |
| In transit | |
| In use | |

**Match protection to state:**

| Protection | Data State |
|------------|------------|
| Full disk encryption | |
| TLS/SSL | |
| Memory encryption | |
| Database encryption | |
| VPN | |
| Secure enclaves | |
| File-level encryption | |
| HTTPS | |

---

### Activity B: Data Classification

**Goal:** Implement data classification schemes.

**Common classification levels:**

| Level | Description | Examples | Handling |
|-------|-------------|----------|----------|
| Public | | | |
| Internal | | | |
| Confidential | | | |
| Restricted | | | |

**Government classification:**

| Level | Description |
|-------|-------------|
| Unclassified | |
| Controlled Unclassified (CUI) | |
| Confidential | |
| Secret | |
| Top Secret | |

**Classify these data types:**

| Data Type | Classification | Reasoning |
|-----------|----------------|-----------|
| Employee salaries | | |
| Company phone directory | | |
| Marketing brochure | | |
| Customer credit cards | | |
| Trade secrets | | |
| Meeting room schedules | | |
| Medical records | | |
| Source code | | |

**Classification criteria:**

| Criterion | Questions to Ask |
|-----------|------------------|
| Sensitivity | |
| Regulatory | |
| Business impact | |
| Competitive value | |

---

### Activity C: Data Types and Privacy

**Goal:** Identify sensitive data types.

**Personally Identifiable Information (PII):**

| Category | Examples |
|----------|----------|
| Direct identifiers | |
| Indirect identifiers | |
| Sensitive PII | |

**Protected Health Information (PHI):**

| Element | Examples |
|---------|----------|
| Health data | |
| Payment data | |
| Identifiers | |

**Financial data:**

| Type | Examples | Regulation |
|------|----------|------------|
| Payment cards | | |
| Bank accounts | | |
| Financial records | | |

**Identify PII in this record:**

```
Name: John Smith
Email: jsmith@email.com
Phone: 555-123-4567
SSN: 123-45-6789
DOB: 01/15/1985
Address: 123 Main St, Anytown, USA 12345
Employee ID: E12345
IP Address: 192.168.1.100
Medical Condition: Diabetes
Credit Card: 4111-1111-1111-1111
```

| Field | PII? | Sensitive PII? | PHI? |
|-------|------|----------------|------|
| Name | | | |
| Email | | | |
| Phone | | | |
| SSN | | | |
| DOB | | | |
| Address | | | |
| Employee ID | | | |
| IP Address | | | |
| Medical Condition | | | |
| Credit Card | | | |

---

### Activity D: Data Protection Methods

**Goal:** Compare data protection techniques.

**Protection method comparison:**

| Method | Description | Reversible? | Use Case |
|--------|-------------|-------------|----------|
| Encryption | | | |
| Tokenization | | | |
| Masking | | | |
| Hashing | | | |
| Anonymization | | | |
| Pseudonymization | | | |

**Encryption types:**

| Type | Description | Example |
|------|-------------|---------|
| Symmetric | | |
| Asymmetric | | |
| Full disk | | |
| File-level | | |
| Database | | |
| Application | | |

**When to use each:**

| Scenario | Best Method | Why |
|----------|-------------|-----|
| Store passwords | | |
| Protect credit cards in database | | |
| Display last 4 digits of SSN | | |
| Share data for research | | |
| Protect laptop hard drive | | |
| Secure email communication | | |

---

### Activity E: Tokenization Deep Dive

**Goal:** Understand tokenization for payment data.

**How tokenization works:**

```
Original Data: 4111-1111-1111-1111
        ↓
   [Tokenization System]
        ↓
Token: TKN-8x7y-9z2w-4k3m
        ↓
   [Token Vault stores mapping]
```

**Tokenization vs Encryption:**

| Aspect | Tokenization | Encryption |
|--------|--------------|------------|
| Reversible | | |
| Format preserving | | |
| Key management | | |
| PCI scope reduction | | |
| Processing overhead | | |

**Tokenization use cases:**

| Use Case | Why Tokenization |
|----------|------------------|
| Payment processing | |
| Healthcare data sharing | |
| Cloud storage | |
| Development/testing | |

**Token types:**

| Type | Description | Example |
|------|-------------|---------|
| Random | | |
| Format-preserving | | |
| Reversible | | |
| Irreversible | | |

---

### Activity F: Data Loss Prevention (DLP)

**Goal:** Implement DLP strategies.

**DLP deployment types:**

| Type | Location | What It Protects |
|------|----------|------------------|
| Network DLP | | |
| Endpoint DLP | | |
| Cloud DLP | | |
| Email DLP | | |

**DLP detection methods:**

| Method | Description | Example |
|--------|-------------|---------|
| Pattern matching | | |
| Keywords | | |
| File fingerprinting | | |
| Statistical analysis | | |
| Machine learning | | |

**DLP actions:**

| Action | Description | When to Use |
|--------|-------------|-------------|
| Alert | | |
| Block | | |
| Quarantine | | |
| Encrypt | | |
| Notify user | | |
| Notify manager | | |

**Create DLP rules:**

| Data Type | Detection Method | Action |
|-----------|------------------|--------|
| Credit card numbers | | |
| Social Security Numbers | | |
| Source code | | |
| Medical records | | |
| Customer lists | | |

---

### Activity G: Data Lifecycle Management

**Goal:** Manage data through its lifecycle.

**Data lifecycle stages:**

| Stage | Activities | Security Considerations |
|-------|------------|------------------------|
| Creation | | |
| Storage | | |
| Use | | |
| Sharing | | |
| Archival | | |
| Destruction | | |

**Retention requirements:**

| Data Type | Retention Period | Regulation |
|-----------|------------------|------------|
| Tax records | | |
| Medical records | | |
| Employee records | | |
| Email | | |
| Financial transactions | | |
| Security logs | | |

**Data destruction methods:**

| Method | Description | Media Type | Verification |
|--------|-------------|------------|--------------|
| Overwriting | | | |
| Degaussing | | | |
| Physical destruction | | | |
| Crypto shredding | | | |
| Secure erase | | | |

**Match destruction method:**

| Scenario | Method | Why |
|----------|--------|-----|
| Decommission HDD | | |
| Destroy backup tapes | | |
| Delete encrypted cloud data | | |
| Retire SSD | | |
| Dispose of paper documents | | |

---

### Activity H: Privacy Regulations

**Goal:** Understand privacy compliance requirements.

**Major privacy regulations:**

| Regulation | Scope | Key Requirements |
|------------|-------|------------------|
| GDPR | | |
| CCPA/CPRA | | |
| HIPAA | | |
| GLBA | | |
| FERPA | | |
| COPPA | | |

**GDPR key principles:**

| Principle | Description |
|-----------|-------------|
| Lawfulness | |
| Purpose limitation | |
| Data minimization | |
| Accuracy | |
| Storage limitation | |
| Integrity/Confidentiality | |
| Accountability | |

**Data subject rights (GDPR):**

| Right | Description |
|-------|-------------|
| Right to access | |
| Right to rectification | |
| Right to erasure | |
| Right to portability | |
| Right to object | |
| Right to restrict processing | |

**Privacy compliance checklist:**

| Requirement | Status | Notes |
|-------------|--------|-------|
| Data inventory | | |
| Legal basis identified | | |
| Privacy notice published | | |
| Consent mechanisms | | |
| Data subject request process | | |
| Breach notification process | | |
| DPA appointed (if required) | | |
| Privacy impact assessments | | |

---

### Activity I: Data Sovereignty

**Goal:** Understand geographic data requirements.

**Data sovereignty concepts:**

| Concept | Definition |
|---------|------------|
| Data sovereignty | |
| Data residency | |
| Data localization | |

**Country requirements:**

| Country/Region | Requirements |
|----------------|--------------|
| European Union (GDPR) | |
| Russia | |
| China | |
| Brazil | |

**Cloud considerations:**

| Consideration | Questions to Ask |
|---------------|------------------|
| Data location | |
| Processing location | |
| Support access | |
| Backup location | |
| Jurisdiction | |

**Scenario: Multi-national company**

You have employees and customers in US, EU, and Asia. How do you handle:

| Challenge | Solution |
|-----------|----------|
| Data storage | |
| Data transfer | |
| Access controls | |
| Compliance | |

---

### Activity J: Privacy by Design

**Goal:** Build privacy into systems.

**Privacy by Design principles:**

| Principle | Description | Example |
|-----------|-------------|---------|
| Proactive not reactive | | |
| Privacy as default | | |
| Privacy embedded | | |
| Full functionality | | |
| End-to-end security | | |
| Visibility/transparency | | |
| User-centric | | |

**Privacy Impact Assessment (PIA):**

| Section | Content |
|---------|---------|
| Project description | |
| Data collected | |
| Purpose | |
| Legal basis | |
| Data flows | |
| Risks identified | |
| Mitigations | |
| Recommendations | |

**Privacy controls by design:**

| Stage | Privacy Control |
|-------|-----------------|
| Collection | |
| Processing | |
| Storage | |
| Sharing | |
| Disposal | |

---

### Activity K: Data Handling Procedures

**Goal:** Create data handling guidelines.

**Handling by classification:**

| Classification | Storage | Transmission | Disposal |
|----------------|---------|--------------|----------|
| Public | | | |
| Internal | | | |
| Confidential | | | |
| Restricted | | | |

**Data handling scenarios:**

| Scenario | Proper Handling |
|----------|-----------------|
| Email confidential document | |
| Store customer data | |
| Share file with vendor | |
| Dispose of old laptop | |
| Print sensitive report | |
| Work from home | |

**Third-party data sharing:**

| Consideration | Requirement |
|---------------|-------------|
| Contract | |
| Security assessment | |
| Data minimization | |
| Purpose limitation | |
| Return/destruction | |
| Breach notification | |

---

### Activity L: Data Protection Scenarios

**Goal:** Apply data protection concepts.

**Scenario 1: Healthcare Organization**

A hospital needs to share patient data with a research institution.

| Question | Answer |
|----------|--------|
| What regulations apply? | |
| What data protection method? | |
| What consent is needed? | |
| How to minimize data? | |
| Documentation required? | |

**Scenario 2: E-commerce Company**

An online retailer processes credit cards and stores customer data.

| Question | Answer |
|----------|--------|
| What data is PCI scope? | |
| How to reduce PCI scope? | |
| Where to use encryption? | |
| DLP rules needed? | |
| Retention requirements? | |

**Scenario 3: Global Corporation**

A company has offices in US, EU, and China with shared HR systems.

| Question | Answer |
|----------|--------|
| What regulations apply? | |
| Data residency requirements? | |
| Cross-border transfers? | |
| Employee privacy rights? | |
| Implementation approach? | |

---

### Activity M: Data Breach Response

**Goal:** Respond to data breaches properly.

**Breach assessment:**

| Question | Purpose |
|----------|---------|
| What data was exposed? | |
| How many records? | |
| How did it happen? | |
| Is it contained? | |
| Who was affected? | |

**Notification requirements:**

| Regulation | Timeline | Who to Notify |
|------------|----------|---------------|
| GDPR | | |
| HIPAA | | |
| State laws | | |
| PCI DSS | | |

**Breach notification content:**

| Element | Description |
|---------|-------------|
| What happened | |
| What data involved | |
| What we're doing | |
| What you can do | |
| Contact information | |

**Post-breach actions:**

| Action | Purpose |
|--------|---------|
| | |
| | |
| | |
| | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** A developer asks for a copy of the production database to test a new feature. The database contains customer PII. How do you balance development needs with data protection?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your company is moving to cloud storage. Legal is concerned about data sovereignty because some customers are in the EU. How do you address these concerns?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** An employee reports that their laptop was stolen from their car. It contained spreadsheets with customer names, addresses, and account numbers. What are your immediate actions and notification obligations?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain three states of data and their protection
- [ ] Implement data classification schemes
- [ ] Identify PII, PHI, and sensitive data
- [ ] Compare encryption, tokenization, and masking
- [ ] Explain DLP types and capabilities
- [ ] Describe data lifecycle stages
- [ ] Understand major privacy regulations
- [ ] Explain data sovereignty concepts
- [ ] Apply Privacy by Design principles
- [ ] Respond to data breaches appropriately

---

## What You Learned Today

- ✅ Protected data in all states
- ✅ Classified data appropriately
- ✅ Identified sensitive data types
- ✅ Compared protection methods
- ✅ Understood tokenization
- ✅ Implemented DLP strategies
- ✅ Managed data lifecycle
- ✅ Reviewed privacy regulations
- ✅ Understood data sovereignty
- ✅ Applied Privacy by Design
- ✅ Created handling procedures
- ✅ Solved protection scenarios
- ✅ Responded to breaches

**Next Lab:** Risk Management - identification, assessment, and response strategies.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 28: Data Protection and Privacy*