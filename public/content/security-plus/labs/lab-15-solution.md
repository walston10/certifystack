# Lab 15: Cloud Security - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Cloud security is critical in modern IT environments and heavily tested on Security+.

---

## Section 1: Concept Check - Answers

**1. Shared responsibility model:**

**Answer:**

The **shared responsibility model** divides security duties between cloud provider and customer.

| Model | Provider Manages | Customer Manages |
|-------|------------------|------------------|
| **IaaS** | Physical, virtualization, network | OS, apps, data, access |
| **PaaS** | Above + OS, runtime | Apps, data, access |
| **SaaS** | Everything except data/access | Data classification, user access |

**Key insight:** Customer is ALWAYS responsible for data and access management.

---

**2. Cloud Access Security Broker (CASB):**

**Answer:**

A **CASB** is a security policy enforcement point between cloud consumers and providers.

**Problems it solves:**
- Visibility into cloud usage (shadow IT)
- Data loss prevention for cloud
- Compliance monitoring
- Threat protection for cloud apps
- Access control across cloud services

---

**3. Multi-tenancy security concerns:**

**Answer:**

**Multi-tenancy** means multiple customers share the same physical infrastructure.

**Concerns:**
- Data leakage between tenants
- Side-channel attacks
- Resource exhaustion by other tenants
- Shared vulnerability exploitation
- Compliance/audit complications
- Noisy neighbor performance issues

---

**4. Cloud-native vs third-party security:**

**Answer:**

| Type | Definition | Examples |
|------|------------|----------|
| **Cloud-native** | Built into cloud platform | AWS GuardDuty, Azure Defender |
| **Third-party** | External tools deployed in cloud | Palo Alto, CrowdStrike, Splunk |

**Cloud-native:** Better integration, easier deployment, may lack features
**Third-party:** More features, multi-cloud support, additional cost/complexity

---

**5. Why IAM is critical in cloud:**

**Answer:**

- **No physical perimeter:** Identity IS the perimeter
- **API-driven:** Everything accessed via authenticated API calls
- **Scale:** Thousands of resources, users, applications
- **Automation:** Service accounts and roles proliferate
- **One compromised key:** Can access everything in account
- **Misconfiguration risk:** Complex policies easy to get wrong

---

## Section 2: Activity Solutions

### Activity A: Cloud Service Models - Answers

| Model | Provider Manages | Customer Manages | Example |
|-------|------------------|------------------|---------|
| IaaS | Physical, network, virtualization | OS, middleware, apps, data | EC2, Azure VMs |
| PaaS | Above + OS, runtime | Apps, data | Heroku, App Service |
| SaaS | Everything | Data, user access | Microsoft 365, Salesforce |

**Service classification:**

| Service | Model | Reasoning |
|---------|-------|-----------|
| AWS EC2 | IaaS | Virtual machines, you manage OS |
| Microsoft 365 | SaaS | Complete application |
| Heroku | PaaS | Platform for deploying apps |
| Google Cloud Storage | IaaS | Raw storage service |
| Salesforce | SaaS | Complete CRM application |
| Azure App Service | PaaS | Managed app hosting |
| Dropbox | SaaS | Complete file sync app |
| AWS Lambda | PaaS (FaaS) | Managed code execution |
| Google Kubernetes Engine | PaaS | Managed container orchestration |
| Zoom | SaaS | Complete video app |

**Customer responsibilities:**

| Responsibility | IaaS | PaaS | SaaS |
|----------------|------|------|------|
| Data classification | C | C | C |
| User access management | C | C | C |
| OS patching | C | P | P |
| Network configuration | C | S | P |
| Application code | C | C | P |
| Encryption configuration | C | S | P |
| Physical security | P | P | P |

---

### Activity B: Shared Responsibility - Answers

| Layer | IaaS | PaaS | SaaS |
|-------|------|------|------|
| Data | C | C | C |
| Applications | C | C | P |
| Runtime | C | P | P |
| Middleware | C | P | P |
| OS | C | P | P |
| Virtualization | P | P | P |
| Servers | P | P | P |
| Storage | P | P | P |
| Networking | P | P | P |
| Physical | P | P | P |

**Scenario analysis:**

| Scenario | Responsible | Why |
|----------|-------------|-----|
| Weak password on SaaS | Customer | Customer manages user access |
| Unpatched VM OS | Customer | IaaS = customer manages OS |
| PaaS DB misconfigured | Customer | Customer configures app/data |
| Physical server failure | Provider | Provider manages hardware |
| Unencrypted data (IaaS) | Customer | Customer manages data |
| SaaS provider breach | Provider (primarily) | But customer chose provider |

---

### Activity C: Deployment Models - Answers

| Model | Definition | Use Case | Security Consideration |
|-------|------------|----------|----------------------|
| Public | Shared infrastructure, multi-tenant | General workloads, cost savings | Less control, shared risk |
| Private | Dedicated infrastructure | Sensitive data, compliance | Higher cost, more control |
| Hybrid | Mix of public and private | Flexible requirements | Complex management |
| Community | Shared by similar organizations | Industry-specific (healthcare, gov) | Shared compliance |

**Match to deployment:**

| Scenario | Deployment | Reasoning |
|----------|------------|-----------|
| Startup, web app | Public | Cost, scalability |
| Bank transactions | Private/Hybrid | Compliance, control |
| Hospital + public site | Hybrid | HIPAA data private, public site can be public cloud |
| Government classified | Private (on-prem or gov cloud) | Data sovereignty |
| Retail with spikes | Hybrid | Burst to public during peaks |

---

### Activity D: Cloud Security Controls - Answers

**AWS services:**

| Service | Purpose | Category |
|---------|---------|----------|
| IAM | Identity and access management | Identity |
| KMS | Key management, encryption | Data Protection |
| CloudTrail | API audit logging | Logging |
| Security Groups | Instance-level firewall | Network |
| WAF | Web application firewall | Network/App |
| GuardDuty | Threat detection | Monitoring |
| Config | Configuration compliance | Compliance |
| Secrets Manager | Secret storage and rotation | Data Protection |

**Azure equivalents:**

| Azure Service | Purpose | AWS Equivalent |
|---------------|---------|----------------|
| Azure AD | Identity management | IAM + Cognito |
| Key Vault | Key/secret management | KMS + Secrets Manager |
| Azure Monitor | Logging and metrics | CloudWatch |
| NSG | Network security groups | Security Groups |
| Azure Firewall | Network firewall | AWS Network Firewall |
| Defender for Cloud | Security posture | GuardDuty + Security Hub |

---

### Activity E: IAM - Answers

| Concept | Definition | Example |
|---------|------------|---------|
| User | Individual identity | john.doe@company.com |
| Group | Collection of users | Developers, Admins |
| Role | Assumable identity for services | EC2 instance role |
| Policy | Permissions document | Allow S3 read |
| Permission | Specific allowed/denied action | s3:GetObject |
| Principal | Entity that can make requests | User, role, service |

**Policy analysis (`s3:*` on `*`):**

| Question | Answer |
|----------|--------|
| What allowed? | ALL S3 actions on ALL buckets |
| Least privilege? | No—extremely overpermissive |
| Risk | Delete all data, exfiltrate, modify |
| Improvement | Specific actions, specific bucket |

---

### Activity F: Storage Security - Answers

| Concern | Risk | Mitigation |
|---------|------|------------|
| Public buckets | Data exposure to internet | Block public access by default |
| Unencrypted | Data readable if accessed | Enable encryption at rest |
| Excessive permissions | Unauthorized access | Least privilege policies |
| No versioning | Can't recover from deletion/ransomware | Enable versioning |
| No logging | Can't detect unauthorized access | Enable access logging |
| Data residency | Compliance violations | Specify region, block replication |

**Storage security checklist:**

| Setting | Recommended | Why |
|---------|-------------|-----|
| Public access | Blocked | Prevent accidental exposure |
| Encryption at rest | Enabled | Protect stored data |
| Encryption in transit | Enforced (HTTPS) | Protect data in motion |
| Versioning | Enabled | Recovery from deletion/ransomware |
| Access logging | Enabled | Audit trail |
| Lifecycle | Configured | Manage costs, retention |

**Most common cause of breaches:** Misconfiguration (public buckets, overpermissive IAM)

---

### Activity G: Cloud Network Security - Answers

| Component | Purpose | On-Prem Equivalent |
|-----------|---------|-------------------|
| VPC/VNet | Isolated virtual network | Physical network |
| Security Groups | Instance firewall (stateful) | Host firewall |
| NACLs/NSG | Subnet firewall (stateless) | Network ACLs |
| Internet Gateway | Internet connectivity | Internet router |
| NAT Gateway | Outbound-only internet | NAT device |
| VPN Gateway | Site-to-site VPN | VPN concentrator |
| PrivateLink | Private service access | Direct connection |

**Security Groups vs NACLs:**

| Aspect | Security Group | NACL |
|--------|----------------|------|
| Level | Instance | Subnet |
| Statefulness | Stateful | Stateless |
| Rules | Allow only | Allow and deny |
| Default | Deny all in, allow all out | Allow all |
| Association | To instances | To subnets |

---

### Activity H: CASB - Answers

**CASB pillars:**

| Pillar | Function | Example |
|--------|----------|---------|
| Visibility | Discover cloud usage | Find all SaaS apps in use |
| Compliance | Enforce regulatory requirements | DLP for HIPAA data |
| Data Security | Protect data in cloud | Encryption, DLP |
| Threat Protection | Detect malicious activity | Compromised account detection |

**Deployment modes:**

| Mode | How | Pros | Cons |
|------|-----|------|------|
| API | Connect to cloud APIs | No traffic redirect, full visibility | Post-facto, limited real-time |
| Forward proxy | Route traffic through CASB | Real-time control | Requires traffic redirect |
| Reverse proxy | CASB in front of app | No client config | Only for managed apps |

**Shadow IT:** Unapproved cloud services used without IT knowledge.

**Security concern:** No visibility, no security controls, data leakage, compliance violations.

---

### Activity I: CSPM - Answers

**Common misconfigurations:**

| Misconfiguration | Risk | Detection |
|------------------|------|-----------|
| Public buckets | Data breach | CSPM scan, AWS Config |
| Overpermissive IAM | Unauthorized access | IAM analyzer |
| Unencrypted | Data exposure | CSPM, Config rules |
| Missing logging | No audit trail | CSPM compliance check |
| Default credentials | Account compromise | CSPM, vulnerability scan |
| Open management ports | Unauthorized access | Security group analysis |
| No MFA on root | Account takeover | IAM credential report |

---

### Activity J: Container/Serverless - Answers

**Serverless considerations:**

| Consideration | Description | Mitigation |
|---------------|-------------|------------|
| Function permissions | Overpermissive IAM roles | Least privilege per function |
| Event injection | Malicious input in triggers | Input validation |
| Dependencies | Vulnerable libraries | Dependency scanning |
| Cold start secrets | Secrets exposed during init | Use secrets manager |
| Logging | Limited visibility | Enable X-Ray, CloudWatch |

**Container security layers:**

| Layer | Focus |
|-------|-------|
| Base image | Use minimal, trusted images |
| App code | Secure coding, SAST |
| Runtime | Read-only, non-root |
| Orchestration | RBAC, network policies |
| Host OS | Hardened, patched |

---

### Activity K: Cloud IR - Answers

**Cloud vs On-prem IR:**

| Aspect | On-Prem | Cloud |
|--------|---------|-------|
| Evidence | Physical access | API/logs only |
| Containment | Network isolation | Security groups, IAM |
| Forensics | Image drives | Snapshot, limited access |
| Provider | N/A | May need to involve |
| Logs | You control | Provider controls retention |

**Evidence sources:**

| Source | Contains |
|--------|----------|
| CloudTrail | All API calls |
| VPC Flow Logs | Network traffic metadata |
| App logs | Application events |
| IAM reports | Credential usage |
| S3 access logs | Object access |
| Security alerts | Detected threats |

---

### Activity L: Compliance - Answers

| Regulation | Cloud Considerations |
|------------|---------------------|
| GDPR | Data residency in EU, deletion rights |
| HIPAA | BAA required, encryption, access controls |
| PCI DSS | Segmentation, encryption, logging |
| SOC 2 | Provider certification, customer controls |
| FedRAMP | Use authorized providers, controls |

**Data concepts:**

| Concept | Definition |
|---------|------------|
| Data residency | Where data is stored (geographic) |
| Data sovereignty | Laws that apply based on location |
| Data localization | Requirement to keep data in country |

**Why location matters:** Different laws apply, government access rights, compliance requirements.

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Public S3 bucket with PII**

**Immediate actions:**
1. Block public access immediately
2. Revoke any presigned URLs
3. Review access logs for who accessed data
4. Determine scope of exposure (what data, how long)
5. Begin breach notification process if required
6. Preserve logs for investigation

**Prevention:**
- Enable S3 Block Public Access at account level
- CSPM scanning for public resources
- AWS Config rules to detect/remediate
- Require encryption for sensitive buckets
- Regular access reviews

---

**Scenario 2: Admin IAM key in GitHub**

**Response:**
1. Immediately disable/delete the access key
2. Review CloudTrail for all actions by that key
3. Assume everything in account is compromised
4. Check for persistence (new users, roles, keys)
5. Rotate all credentials
6. Scan for unauthorized resources
7. Enable GuardDuty if not already
8. Implement SCPs to prevent new admin users

**Long-term:**
- Secret scanning in CI/CD pipeline
- Use roles instead of access keys
- Require MFA for all IAM operations
- Implement least privilege

---

**Scenario 3: Explaining shared responsibility**

**Explanation:**
"Think of it like renting an apartment:
- The landlord (cloud provider) maintains the building, plumbing, and electricity
- You're responsible for locking your door, not leaving windows open, and what you put inside

In cloud terms:
- Provider secures the physical data center and infrastructure
- We're responsible for what we put there, who can access it, and how we configure it

If someone breaks in because we left the door unlocked (public bucket, weak password), that's on us. If the building catches fire due to faulty wiring, that's on the provider."

---

## Key Exam Tips

1. **Shared responsibility:** Customer ALWAYS owns data and access

2. **IaaS:** Customer manages most (OS, apps, data)
   **SaaS:** Provider manages most (customer only manages data/access)

3. **CASB pillars:** Visibility, Compliance, Data Security, Threat Protection

4. **Multi-tenancy risk:** Data isolation between customers

5. **Most common cloud breach cause:** Misconfiguration

6. **Security groups:** Stateful, allow only, instance-level
   **NACLs:** Stateless, allow/deny, subnet-level

7. **Data residency:** Physical location of data
   **Data sovereignty:** Laws that apply to data

8. **Container security:** Image scanning, non-root, minimal base image

9. **Cloud IAM:** Identity is the new perimeter

10. **CSPM:** Continuous monitoring for misconfigurations

---

## Common Mistakes to Avoid

❌ Thinking the cloud provider handles all security

❌ Confusing IaaS, PaaS, and SaaS responsibilities

❌ Leaving storage publicly accessible

❌ Using root/admin accounts for daily work

❌ Hardcoding credentials in code

❌ Assuming multi-tenancy provides isolation automatically

---

**Congratulations on completing Lab 15!**

Cloud security is essential in modern environments—this knowledge applies directly to real-world cloud deployments.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 15: Cloud Security - Solution Guide*