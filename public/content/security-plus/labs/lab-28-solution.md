# Lab 28: Data Protection and Privacy - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Data protection and privacy are critical for compliance and customer trust.

---

## Section 1: Concept Check - Answers

**1. Three states of data:**

**Answer:**

| State | Protection |
|-------|------------|
| **At rest** | Encryption (FDE, file-level, database) |
| **In transit** | TLS/SSL, VPN, HTTPS |
| **In use** | Memory encryption, secure enclaves, access controls |

---

**2. Classification vs Categorization:**

**Answer:**

| Concept | Definition |
|---------|------------|
| **Classification** | Sensitivity level (Public, Confidential, Secret) |
| **Categorization** | Type of data (Financial, Medical, Personal) |

Classification = how sensitive; Categorization = what type.

---

**3. Tokenization vs Encryption:**

**Answer:**

| Aspect | Tokenization | Encryption |
|--------|--------------|------------|
| **Method** | Replace with random token | Mathematical transformation |
| **Original stored** | In separate token vault | Within ciphertext |
| **Key management** | No keys to manage | Requires key management |
| **PCI scope** | Reduces scope | Data still in scope |

---

**4. PII:**

**Answer:**

**PII (Personally Identifiable Information)** is any data that can identify an individual, either directly or in combination with other data.

**Requires protection because:**
- Regulatory requirements (GDPR, CCPA)
- Identity theft risk
- Privacy rights
- Business liability
- Customer trust

---

**5. DLP purpose:**

**Answer:**

**DLP (Data Loss Prevention)** monitors and prevents unauthorized transmission or exposure of sensitive data.

**Functions:**
- Detect sensitive data leaving organization
- Block unauthorized transfers
- Alert on policy violations
- Enforce data handling policies
- Provide visibility into data flows

---

## Section 2: Activity Solutions

### Activity A: Data States - Answers

| State | Description | Examples | Risks |
|-------|-------------|----------|-------|
| At rest | Stored data | HDD, SSD, database | Theft, unauthorized access |
| In transit | Moving data | Network, email, API | Interception, MITM |
| In use | Being processed | RAM, CPU | Memory scraping, side-channel |

**Protection by state:**

| State | Methods |
|-------|---------|
| At rest | FDE, file encryption, database encryption |
| In transit | TLS, VPN, HTTPS, S/MIME |
| In use | Memory encryption, secure enclaves, access control |

**Match protection:**

| Protection | State |
|------------|-------|
| Full disk encryption | At rest |
| TLS/SSL | In transit |
| Memory encryption | In use |
| Database encryption | At rest |
| VPN | In transit |
| Secure enclaves | In use |
| File-level encryption | At rest |
| HTTPS | In transit |

---

### Activity B: Classification - Answers

| Level | Description | Examples | Handling |
|-------|-------------|----------|----------|
| Public | No restrictions | Marketing, website | Open distribution |
| Internal | Internal use only | Policies, procedures | No external sharing |
| Confidential | Limited access | Financials, HR data | Encryption, need-to-know |
| Restricted | Highest protection | Trade secrets, PII | Strict access, encryption |

**Classify data:**

| Data | Classification | Reason |
|------|----------------|--------|
| Salaries | Confidential | Sensitive HR |
| Phone directory | Internal | Not public |
| Marketing brochure | Public | Intended for public |
| Credit cards | Restricted | PCI regulated |
| Trade secrets | Restricted | Competitive value |
| Room schedules | Internal | Low sensitivity |
| Medical records | Restricted | PHI, HIPAA |
| Source code | Confidential/Restricted | IP protection |

---

### Activity C: Data Types - Answers

**PII categories:**

| Category | Examples |
|----------|----------|
| Direct identifiers | Name, SSN, passport |
| Indirect identifiers | DOB, zip code, job title |
| Sensitive PII | SSN, financial, medical |

**Identify PII in record:**

| Field | PII? | Sensitive? | PHI? |
|-------|------|------------|------|
| Name | Yes | No | - |
| Email | Yes | No | - |
| Phone | Yes | No | - |
| SSN | Yes | Yes | - |
| DOB | Yes | No | - |
| Address | Yes | No | - |
| Employee ID | Yes | No | - |
| IP Address | Maybe | No | - |
| Medical Condition | Yes | Yes | Yes |
| Credit Card | Yes | Yes | - |

---

### Activity D: Protection Methods - Answers

| Method | Description | Reversible? | Use |
|--------|-------------|-------------|-----|
| Encryption | Mathematical transform | Yes (with key) | Data protection |
| Tokenization | Replace with token | Yes (with vault) | Payment data |
| Masking | Hide portion | No | Display (XXX-XX-1234) |
| Hashing | One-way function | No | Passwords |
| Anonymization | Remove identifiers | No | Research data |
| Pseudonymization | Replace identifiers | Yes (with mapping) | GDPR compliance |

**When to use:**

| Scenario | Method | Why |
|----------|--------|-----|
| Passwords | Hashing | One-way, no need to reverse |
| Credit cards | Tokenization | Reduces PCI scope |
| Display SSN | Masking | Show only last 4 |
| Research data | Anonymization | Privacy protection |
| Laptop drive | Full disk encryption | At-rest protection |
| Secure email | Encryption | In-transit protection |

---

### Activity E: Tokenization - Answers

**Tokenization vs Encryption:**

| Aspect | Tokenization | Encryption |
|--------|--------------|------------|
| Reversible | Only with vault | With key |
| Format preserving | Often yes | Usually no |
| Key management | No keys | Complex key mgmt |
| PCI scope | Reduces | Still in scope |
| Processing overhead | Lower | Higher |

**Use cases:**

| Use | Why Tokenization |
|-----|------------------|
| Payment processing | PCI scope reduction |
| Healthcare sharing | Protect PHI, enable research |
| Cloud storage | Don't trust cloud with real data |
| Dev/testing | Use tokens instead of real data |

---

### Activity F: DLP - Answers

**DLP types:**

| Type | Location | Protects |
|------|----------|----------|
| Network DLP | Gateway/proxy | Email, web uploads |
| Endpoint DLP | Workstation | USB, local actions |
| Cloud DLP | Cloud services | SaaS, IaaS data |
| Email DLP | Email gateway | Attachments, content |

**Detection methods:**

| Method | Description | Example |
|--------|-------------|---------|
| Pattern matching | Regex patterns | Credit card format |
| Keywords | Specific words | "Confidential" |
| Fingerprinting | Document hashes | Specific files |
| Statistical | Frequency analysis | Data anomalies |
| ML | Learn patterns | Unusual behavior |

**DLP rules:**

| Data | Detection | Action |
|------|-----------|--------|
| Credit cards | Pattern (16 digits, Luhn) | Block + alert |
| SSN | Pattern (XXX-XX-XXXX) | Block + alert |
| Source code | File fingerprint | Alert |
| Medical | Keywords + patterns | Encrypt |
| Customer lists | File fingerprint | Alert manager |

---

### Activity G: Lifecycle - Answers

| Stage | Activities | Security |
|-------|------------|----------|
| Creation | Generate/collect | Classify, minimize |
| Storage | Save data | Encrypt, access control |
| Use | Process data | Least privilege |
| Sharing | Transfer data | Encrypt, DLP |
| Archival | Long-term storage | Encryption, retention |
| Destruction | Delete data | Secure destruction |

**Destruction methods:**

| Method | Description | Media | Verification |
|--------|-------------|-------|--------------|
| Overwriting | Write patterns | HDD | Read verify |
| Degaussing | Magnetic field | Tape, HDD | Test |
| Physical | Shred, crush | All | Witness, certificate |
| Crypto shredding | Delete keys | Encrypted | Key destruction |
| Secure erase | Built-in command | SSD | Verify |

---

### Activity H: Privacy Regulations - Answers

| Regulation | Scope | Requirements |
|------------|-------|--------------|
| GDPR | EU residents | Consent, rights, 72hr breach |
| CCPA/CPRA | California | Access, delete, opt-out |
| HIPAA | US healthcare | PHI protection, BAAs |
| GLBA | US financial | Privacy notices, safeguards |
| FERPA | US education | Student record protection |
| COPPA | US children | Parental consent |

**GDPR principles:**

| Principle | Description |
|-----------|-------------|
| Lawfulness | Legal basis for processing |
| Purpose limitation | Collect for specific purpose |
| Data minimization | Only what's needed |
| Accuracy | Keep data correct |
| Storage limitation | Don't keep forever |
| Integrity/Confidentiality | Secure processing |
| Accountability | Demonstrate compliance |

---

### Activity I: Data Sovereignty - Answers

| Concept | Definition |
|---------|------------|
| Sovereignty | Data subject to laws where located |
| Residency | Where data must be stored |
| Localization | Data must stay in country |

**Multi-national solution:**

| Challenge | Solution |
|-----------|----------|
| Storage | Regional data centers |
| Transfer | Standard contractual clauses |
| Access | Role-based by region |
| Compliance | Local compliance team |

---

### Activity J: Privacy by Design - Answers

| Principle | Description | Example |
|-----------|-------------|---------|
| Proactive | Prevent, don't react | Build privacy in from start |
| Default | Private by default | Opt-in, not opt-out |
| Embedded | Built into design | Not bolted on after |
| Full functionality | Security AND usability | No trade-offs |
| End-to-end | Entire lifecycle | Create to destroy |
| Visibility | Transparent | Clear privacy notices |
| User-centric | Respect user rights | Easy access requests |

---

### Activity K: Handling Procedures - Answers

| Classification | Storage | Transmission | Disposal |
|----------------|---------|--------------|----------|
| Public | Any | Any | Normal delete |
| Internal | Internal systems | Internal only | Normal delete |
| Confidential | Encrypted | Encrypted | Secure wipe |
| Restricted | Encrypted + access control | Encrypted | Physical destruction |

---

### Activity L: Scenarios - Answers

**Healthcare:**

| Question | Answer |
|----------|--------|
| Regulations | HIPAA |
| Protection | De-identification or anonymization |
| Consent | Patient authorization or waiver |
| Minimize | Remove unnecessary identifiers |
| Documentation | Data use agreement |

**E-commerce:**

| Question | Answer |
|----------|--------|
| PCI scope | Cardholder data (PAN, CVV, expiry) |
| Reduce scope | Tokenization |
| Encryption | TLS in transit, encrypt at rest |
| DLP | Credit card pattern detection |
| Retention | Per PCI (don't store CVV) |

**Global corporation:**

| Question | Answer |
|----------|--------|
| Regulations | GDPR, local laws |
| Residency | EU data in EU |
| Transfers | SCCs or adequacy |
| Employee rights | Access, correction, deletion |
| Approach | Regional instances or consent |

---

### Activity M: Breach Response - Answers

**Notification requirements:**

| Regulation | Timeline | Notify |
|------------|----------|--------|
| GDPR | 72 hours | DPA, affected individuals |
| HIPAA | 60 days | HHS, affected, media if >500 |
| State laws | 30-90 days | AG, affected individuals |
| PCI DSS | Immediately | Card brands, acquirer |

**Post-breach actions:**

| Action | Purpose |
|--------|---------|
| Forensic investigation | Determine scope |
| Remediate vulnerability | Prevent recurrence |
| Monitor for misuse | Detect fraud |
| Offer protection | Credit monitoring |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Developer needs production data**

**Solutions:**
1. Provide anonymized/tokenized copy
2. Use synthetic data that mirrors production
3. Create subset with masked PII
4. Use production-like test data
5. Implement data masking solution

**Never:** Give full production data for testing.

---

**Scenario 2: Cloud and EU data sovereignty**

**Address concerns:**
1. Use EU-based cloud regions
2. Implement data residency controls
3. Standard Contractual Clauses for transfers
4. Encryption with customer-managed keys
5. Document data flows
6. Conduct privacy impact assessment
7. Consider EU-specific cloud instances

---

**Scenario 3: Stolen laptop with customer data**

**Immediate actions:**
1. Determine if encrypted (FDE?)
2. Remote wipe if possible
3. Assess data on device
4. Determine notification requirements
5. Document incident

**Notification:**
- If encrypted: May not require notification
- If unencrypted: Notify affected customers, potentially regulators
- Timeline: Per applicable laws (varies by state/country)

---

## Key Exam Tips

1. **Data states:** At rest, in transit, in use

2. **At rest protection:** Encryption (FDE, file-level, database)
   **In transit:** TLS, VPN, HTTPS
   **In use:** Memory encryption, secure enclaves

3. **PII:** Personally Identifiable Information
   **PHI:** Protected Health Information (HIPAA)

4. **Tokenization:** Replaces data with token, reduces PCI scope
   **Encryption:** Transforms data, requires key management

5. **DLP types:** Network, endpoint, cloud, email

6. **GDPR breach notification:** 72 hours

7. **Data minimization:** Collect only what you need

8. **Anonymization:** Irreversible
   **Pseudonymization:** Reversible with mapping

9. **Crypto shredding:** Delete encryption keys = data unrecoverable

10. **Classification levels:** Public < Internal < Confidential < Restricted

---

## Common Mistakes to Avoid

❌ Confusing tokenization with encryption

❌ Thinking hashing is reversible

❌ Forgetting data sovereignty requirements

❌ Not considering all three data states

❌ Confusing anonymization with pseudonymization

❌ Ignoring retention requirements

---

**Congratulations on completing Lab 28!**

Data protection and privacy are increasingly important as regulations expand globally.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 28: Data Protection and Privacy - Solution Guide*