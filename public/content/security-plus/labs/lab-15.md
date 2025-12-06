# Lab 15: Cloud Security

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 3.1 - Compare and contrast security implications of different architecture models

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **Explain the shared responsibility model. How does responsibility differ between IaaS, PaaS, and SaaS?**

2. **What is a Cloud Access Security Broker (CASB), and what problems does it solve?**

3. **What are the security concerns with multi-tenancy in cloud environments?**

4. **What is the difference between cloud-native security controls and third-party security tools?**

5. **Why is identity and access management (IAM) especially critical in cloud environments?**

---

## Section 2: Hands-On Activities

### Activity A: Cloud Service Models

**Goal:** Understand the three cloud service models.

**Service model definitions:**

| Model | What Provider Manages | What Customer Manages | Example |
|-------|----------------------|----------------------|---------|
| IaaS | | | |
| PaaS | | | |
| SaaS | | | |

**Classify these services:**

| Service | Model | Reasoning |
|---------|-------|-----------|
| AWS EC2 | | |
| Microsoft 365 | | |
| Heroku | | |
| Google Cloud Storage | | |
| Salesforce | | |
| Azure App Service | | |
| Dropbox | | |
| AWS Lambda | | |
| Google Kubernetes Engine | | |
| Zoom | | |

**Customer security responsibilities by model:**

| Responsibility | IaaS | PaaS | SaaS |
|----------------|------|------|------|
| Data classification | | | |
| User access management | | | |
| Operating system patching | | | |
| Network configuration | | | |
| Application code security | | | |
| Encryption configuration | | | |
| Physical security | | | |

(Mark: C = Customer, P = Provider, S = Shared)

---

### Activity B: Shared Responsibility Deep Dive

**Goal:** Apply shared responsibility to real scenarios.

**Shared responsibility matrix:**

| Layer | IaaS | PaaS | SaaS |
|-------|------|------|------|
| Data | | | |
| Applications | | | |
| Runtime | | | |
| Middleware | | | |
| Operating System | | | |
| Virtualization | | | |
| Servers | | | |
| Storage | | | |
| Networking | | | |
| Physical Facility | | | |

(C = Customer, P = Provider)

**Scenario analysis:**

| Scenario | Who Is Responsible? | Why? |
|----------|---------------------|------|
| Data breach due to weak password on SaaS app | | |
| VM compromised due to unpatched OS (IaaS) | | |
| PaaS database misconfigured, data exposed | | |
| Physical server failure in data center | | |
| Customer data not encrypted at rest (IaaS) | | |
| SaaS provider has security incident | | |

---

### Activity C: Cloud Deployment Models

**Goal:** Understand cloud deployment options.

**Deployment model comparison:**

| Model | Definition | Use Case | Security Consideration |
|-------|------------|----------|----------------------|
| Public | | | |
| Private | | | |
| Hybrid | | | |
| Community | | | |

**Deployment decision factors:**

| Factor | Public | Private | Hybrid |
|--------|--------|---------|--------|
| Cost | | | |
| Control | | | |
| Compliance | | | |
| Scalability | | | |
| Security | | | |

**Match scenario to deployment:**

| Scenario | Best Deployment | Reasoning |
|----------|-----------------|-----------|
| Startup with limited budget, web app | | |
| Bank processing financial transactions | | |
| Hospital with HIPAA data + public website | | |
| Government agency with classified data | | |
| Retail company with seasonal traffic spikes | | |

---

### Activity D: Cloud Security Controls

**Goal:** Identify cloud-specific security controls.

**Cloud security control categories:**

| Category | Controls | Purpose |
|----------|----------|---------|
| Identity & Access | | |
| Data Protection | | |
| Network Security | | |
| Logging & Monitoring | | |
| Compliance | | |

**AWS security services (example):**

| Service | Purpose | Category |
|---------|---------|----------|
| IAM | | |
| KMS | | |
| CloudTrail | | |
| Security Groups | | |
| WAF | | |
| GuardDuty | | |
| Config | | |
| Secrets Manager | | |

**Azure security services (example):**

| Service | Purpose | AWS Equivalent |
|---------|---------|----------------|
| Azure AD | | |
| Key Vault | | |
| Azure Monitor | | |
| NSG | | |
| Azure Firewall | | |
| Defender for Cloud | | |

---

### Activity E: Identity and Access Management (IAM)

**Goal:** Understand cloud IAM concepts.

**IAM core concepts:**

| Concept | Definition | Example |
|---------|------------|---------|
| User | | |
| Group | | |
| Role | | |
| Policy | | |
| Permission | | |
| Principal | | |

**IAM best practices:**

| Practice | Why It Matters |
|----------|----------------|
| Least privilege | |
| No root/admin for daily use | |
| MFA everywhere | |
| Regular access reviews | |
| Federate with identity provider | |
| Use roles, not long-term credentials | |
| Rotate credentials | |

**Analyze this IAM policy (conceptual):**

```json
{
  "Effect": "Allow",
  "Action": ["s3:*"],
  "Resource": ["*"]
}
```

| Question | Answer |
|----------|--------|
| What does this allow? | |
| Is this least privilege? | |
| What's the risk? | |
| How would you improve it? | |

**Better policy:**

```json
{
  "Effect": "Allow",
  "Action": ["s3:GetObject", "s3:ListBucket"],
  "Resource": ["arn:aws:s3:::my-specific-bucket/*"]
}
```

| Improvement | How It Helps |
|-------------|--------------|
| Specific actions | |
| Specific resource | |

---

### Activity F: Cloud Storage Security

**Goal:** Secure cloud storage services.

**Storage security concerns:**

| Concern | Risk | Mitigation |
|---------|------|------------|
| Public buckets/blobs | | |
| Unencrypted data | | |
| Excessive permissions | | |
| No versioning | | |
| No logging | | |
| Data residency | | |

**Storage security checklist:**

| Setting | Recommended | Why |
|---------|-------------|-----|
| Public access | | |
| Encryption at rest | | |
| Encryption in transit | | |
| Versioning | | |
| Access logging | | |
| Lifecycle policies | | |
| Cross-region replication | | |

**Famous cloud storage breaches:**

| Incident | Cause | Lesson |
|----------|-------|--------|
| Capital One (2019) | | |
| Twitch (2021) | | |
| Various S3 leaks | | |

**What's the most common cause of cloud data breaches?**

_________________________________________________________________

---

### Activity G: Cloud Network Security

**Goal:** Understand cloud networking security.

**Cloud network security components:**

| Component | Purpose | On-Prem Equivalent |
|-----------|---------|-------------------|
| VPC/VNet | | |
| Security Groups | | |
| NACLs (AWS) / NSG (Azure) | | |
| Internet Gateway | | |
| NAT Gateway | | |
| VPN Gateway | | |
| Transit Gateway | | |
| PrivateLink/Private Endpoint | | |

**Security Groups vs NACLs:**

| Aspect | Security Group | NACL |
|--------|----------------|------|
| Level | | |
| Statefulness | | |
| Rules | | |
| Default | | |
| Association | | |

**Design a secure VPC:**

Requirements:
- Web servers (public-facing)
- Application servers (internal)
- Database servers (isolated)
- Management access

| Subnet | Type | Security Group Rules |
|--------|------|---------------------|
| Public | | |
| Private-App | | |
| Private-DB | | |
| Management | | |

---

### Activity H: Cloud Access Security Broker (CASB)

**Goal:** Understand CASB functionality.

**CASB pillars:**

| Pillar | Function | Example Use Case |
|--------|----------|------------------|
| Visibility | | |
| Compliance | | |
| Data Security | | |
| Threat Protection | | |

**CASB deployment modes:**

| Mode | How It Works | Pros | Cons |
|------|--------------|------|------|
| API-based | | | |
| Proxy (forward) | | | |
| Proxy (reverse) | | | |

**CASB use cases:**

| Scenario | CASB Capability Used |
|----------|---------------------|
| Discover unsanctioned cloud apps | |
| Prevent upload of sensitive data | |
| Detect compromised accounts | |
| Enforce encryption on cloud storage | |
| Monitor user activity in SaaS apps | |

**Shadow IT discovery:**

What is shadow IT? _________________________________________________

Why is it a security concern?

_________________________________________________________________

---

### Activity I: Cloud Security Posture Management

**Goal:** Understand CSPM and configuration security.

**Common cloud misconfigurations:**

| Misconfiguration | Risk | Detection Method |
|------------------|------|------------------|
| Public storage buckets | | |
| Overly permissive IAM | | |
| Unencrypted resources | | |
| Missing logging | | |
| Default credentials | | |
| Exposed management ports | | |
| No MFA on root account | | |

**CSPM capabilities:**

| Capability | Purpose |
|------------|---------|
| Configuration assessment | |
| Compliance monitoring | |
| Drift detection | |
| Remediation guidance | |
| Risk prioritization | |

**Cloud security benchmarks:**

| Benchmark | Provider/Org |
|-----------|--------------|
| CIS Benchmarks | |
| AWS Well-Architected | |
| Azure Security Benchmark | |
| CSA Cloud Controls Matrix | |

**Configuration review checklist:**

| Check | Status |
|-------|--------|
| MFA enabled on all privileged accounts | [ ] |
| No public storage buckets | [ ] |
| Encryption enabled by default | [ ] |
| Logging enabled for all services | [ ] |
| Security groups follow least privilege | [ ] |
| No hardcoded credentials | [ ] |
| Regular access reviews scheduled | [ ] |

---

### Activity J: Serverless and Container Security

**Goal:** Understand security for modern cloud workloads.

**Serverless security considerations:**

| Consideration | Description | Mitigation |
|---------------|-------------|------------|
| Function permissions | | |
| Event injection | | |
| Dependency vulnerabilities | | |
| Cold start secrets | | |
| Logging/monitoring | | |

**Container security layers:**

| Layer | Security Focus |
|-------|----------------|
| Base image | |
| Application code | |
| Container runtime | |
| Orchestration (K8s) | |
| Host OS | |

**Container security best practices:**

| Practice | Purpose |
|----------|---------|
| Use minimal base images | |
| Scan images for vulnerabilities | |
| Don't run as root | |
| Use read-only file systems | |
| Implement network policies | |
| Sign and verify images | |
| Use secrets management | |

**Kubernetes security:**

| Component | Security Concern |
|-----------|------------------|
| API Server | |
| etcd | |
| Kubelet | |
| Network policies | |
| RBAC | |
| Pod security | |

---

### Activity K: Cloud Incident Response

**Goal:** Prepare for cloud security incidents.

**Cloud IR differences from on-prem:**

| Aspect | On-Premises | Cloud |
|--------|-------------|-------|
| Evidence collection | | |
| Containment options | | |
| Forensic imaging | | |
| Provider involvement | | |
| Log availability | | |

**Cloud IR playbook elements:**

| Phase | Cloud-Specific Actions |
|-------|----------------------|
| Preparation | |
| Detection | |
| Containment | |
| Eradication | |
| Recovery | |
| Lessons Learned | |

**Evidence sources in cloud:**

| Source | What It Contains |
|--------|------------------|
| CloudTrail/Activity Log | |
| VPC Flow Logs | |
| Application logs | |
| IAM access reports | |
| Storage access logs | |
| Provider security alerts | |

**Containment strategies:**

| Strategy | When to Use |
|----------|-------------|
| Disable access keys | |
| Isolate network (remove from VPC) | |
| Snapshot and terminate | |
| Revoke IAM permissions | |
| Block at security group | |

---

### Activity L: Cloud Compliance and Governance

**Goal:** Understand cloud compliance requirements.

**Compliance in the cloud:**

| Regulation | Cloud Considerations |
|------------|---------------------|
| GDPR | |
| HIPAA | |
| PCI DSS | |
| SOC 2 | |
| FedRAMP | |

**Data residency:**

| Concept | Definition |
|---------|------------|
| Data residency | |
| Data sovereignty | |
| Data localization | |

**Why does data location matter?**

_________________________________________________________________

**Cloud governance framework:**

| Element | Purpose |
|---------|---------|
| Policies | |
| Standards | |
| Guardrails | |
| Tagging | |
| Cost management | |
| Access governance | |

**Implement governance controls:**

| Control | Implementation |
|---------|----------------|
| Require encryption | |
| Restrict regions | |
| Enforce tagging | |
| Limit instance types | |
| Require MFA | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company's AWS S3 bucket containing customer PII was found to be publicly accessible. The data has been exposed for an unknown period. What immediate actions do you take, and how do you prevent this in the future?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A developer created an IAM user with full administrator access "just to make things work" in production. The access key for this user has been in a GitHub repository for 6 months. What's your response?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Management wants to move all workloads to the cloud and asks "Isn't the cloud provider responsible for security now?" How do you explain shared responsibility in a way they'll understand?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain IaaS, PaaS, and SaaS with examples
- [ ] Apply the shared responsibility model correctly
- [ ] Compare public, private, hybrid, and community clouds
- [ ] Identify key cloud security controls (IAM, encryption, logging)
- [ ] Explain CASB and its four pillars
- [ ] Describe common cloud misconfigurations
- [ ] Understand container and serverless security concerns
- [ ] Explain cloud-specific incident response considerations
- [ ] Describe data residency and sovereignty requirements

---

## What You Learned Today

- ✅ Classified cloud service models
- ✅ Applied shared responsibility model
- ✅ Compared deployment models
- ✅ Identified cloud security controls
- ✅ Analyzed IAM policies
- ✅ Reviewed storage security
- ✅ Designed secure cloud networks
- ✅ Understood CASB functionality
- ✅ Explored cloud security posture management
- ✅ Reviewed container/serverless security
- ✅ Prepared for cloud incident response
- ✅ Understood compliance considerations

**Next Lab:** Secure Network Design - implementing secure protocols and email security.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 15: Cloud Security*