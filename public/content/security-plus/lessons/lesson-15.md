# Lesson 15: Cloud Security

**Estimated Time:** 30-35 minutes  
**Domain:** 3.0 Security Architecture (18% of exam)  
**Exam Objectives Covered:** 3.1 - Compare and contrast security implications of different architecture models

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Differentiate cloud service models (IaaS, PaaS, SaaS) and their security implications
- Explain the shared responsibility model and identify customer vs. provider responsibilities
- Describe cloud deployment models (public, private, hybrid, community)
- Identify cloud-specific threats and vulnerabilities
- Explain cloud security controls including CASB, CSPM, and CWPP
- Describe cloud identity and access management best practices
- Apply encryption and key management strategies for cloud environments
- Recognize cloud compliance and regulatory considerations

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Cloud Security" (15 min)
- **PowerCert:** "Cloud Computing Explained" (12 min)
- **AWS:** "Shared Responsibility Model" (8 min)

---

## Introduction

In 2019, Capital One disclosed that an attacker had accessed personal information of over 100 million customers. The data was stored in AWS S3 buckets. But AWS wasn't breached—Capital One was. A misconfigured web application firewall allowed the attacker to exploit a server-side request forgery (SSRF) vulnerability, accessing AWS metadata and obtaining credentials that provided access to S3 storage.

This breach perfectly illustrates cloud security reality: the cloud provider secures the cloud infrastructure, but customers must secure what they put in it. AWS's infrastructure was never compromised. Capital One's configuration was.

Cloud computing has fundamentally changed how organizations deploy and manage technology. It offers tremendous benefits—scalability, flexibility, cost efficiency—but also creates new security challenges. Traditional security models assumed you controlled the physical infrastructure. In the cloud, you don't. You share infrastructure with unknown tenants, access resources over the internet, and rely on provider security you can't directly verify.

Understanding cloud security requires understanding the shared responsibility model, cloud-specific threats, and the controls designed to address them. Whether you're securing IaaS virtual machines, PaaS applications, or SaaS data, the principles remain consistent: know what you're responsible for, implement appropriate controls, and continuously monitor.

---

## Cloud Service Models

Cloud services are categorized by what the provider manages versus what the customer manages.

### Infrastructure as a Service (IaaS)

Provider manages hardware, virtualization, storage, and networking. Customer manages everything else.

**What you get:** Virtual machines, storage, networks

**Customer responsibility:**
- Operating system
- Middleware and runtime
- Applications
- Data

**Examples:** AWS EC2, Azure Virtual Machines, Google Compute Engine

**Security implications:**
- Most customer responsibility
- Must patch OS, harden configurations
- Full control but full responsibility
- Most similar to on-premises

### Platform as a Service (PaaS)

Provider manages infrastructure plus runtime environment. Customer manages applications and data.

**What you get:** Development platform, runtime, managed services

**Customer responsibility:**
- Application code
- Data
- User access management

**Examples:** AWS Elastic Beanstalk, Azure App Service, Google App Engine, Heroku

**Security implications:**
- Less responsibility than IaaS
- Provider patches runtime
- Focus on application security
- Still responsible for code vulnerabilities

### Software as a Service (SaaS)

Provider manages everything except user access and data.

**What you get:** Complete application

**Customer responsibility:**
- User access management
- Data classification and protection
- Configuration within application

**Examples:** Microsoft 365, Salesforce, Google Workspace, Dropbox

**Security implications:**
- Least customer responsibility
- But still responsible for access and data
- Configuration security critical
- Shadow IT risk

### Comparison Table

| Responsibility | IaaS | PaaS | SaaS |
|---------------|------|------|------|
| Applications | Customer | Customer | Provider |
| Data | Customer | Customer | Customer |
| Runtime | Customer | Provider | Provider |
| Middleware | Customer | Provider | Provider |
| Operating System | Customer | Provider | Provider |
| Virtualization | Provider | Provider | Provider |
| Servers | Provider | Provider | Provider |
| Storage | Provider | Provider | Provider |
| Networking | Provider | Provider | Provider |
| Physical | Provider | Provider | Provider |

---

## Shared Responsibility Model

The fundamental principle of cloud security: responsibilities are divided between provider and customer.

### The Core Concept

**Cloud provider secures:** The cloud itself
- Physical data centers
- Network infrastructure
- Hypervisors
- Provider-managed services

**Customer secures:** What's in the cloud
- Data
- Access management
- Application configuration
- Customer-managed components

### AWS Shared Responsibility Example

```
┌─────────────────────────────────────────────────────────┐
│                  CUSTOMER RESPONSIBILITY                 │
│         "Security IN the Cloud"                         │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Customer Data                                       │ │
│  ├────────────────────────────────────────────────────┤ │
│  │ Platform, Applications, Identity & Access Mgmt     │ │
│  ├────────────────────────────────────────────────────┤ │
│  │ Operating System, Network & Firewall Config        │ │
│  ├────────────────────────────────────────────────────┤ │
│  │ Client-side Encryption    Server-side Encryption   │ │
│  │ Network Traffic Protection                          │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                   AWS RESPONSIBILITY                     │
│         "Security OF the Cloud"                         │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Software: Compute, Storage, Database, Networking   │ │
│  ├────────────────────────────────────────────────────┤ │
│  │ Hardware/AWS Global Infrastructure                  │ │
│  │ Regions, Availability Zones, Edge Locations        │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### Responsibility Varies by Service

**IaaS (EC2):**
- Customer: Guest OS, applications, security groups, data
- Provider: Physical host, hypervisor, network infrastructure

**PaaS (RDS - managed database):**
- Customer: Data, access control, encryption settings
- Provider: Database patching, OS, infrastructure

**SaaS (provider's application):**
- Customer: User access, data, configuration
- Provider: Application, runtime, everything below

### Common Mistakes

**"The cloud provider handles security"**
- Provider handles THEIR responsibilities
- Your data, access, configuration = YOUR responsibility

**"It's in the cloud so it's automatically secure"**
- Cloud doesn't fix bad configurations
- Misconfigurations are leading cause of cloud breaches

**"We don't need security team for cloud"**
- Security responsibilities remain
- Just different responsibilities

---

## Cloud Deployment Models

How cloud resources are deployed and accessed.

### Public Cloud

Resources shared across multiple customers (tenants) on provider's infrastructure.

**Characteristics:**
- Multi-tenant environment
- Pay-as-you-go pricing
- Managed by third-party provider
- Accessed over internet

**Security considerations:**
- Data co-located with other tenants
- Rely on provider's isolation
- Less control over physical security
- Internet-facing by default

**Examples:** AWS, Azure, GCP

### Private Cloud

Dedicated cloud infrastructure for single organization.

**Characteristics:**
- Single-tenant environment
- On-premises or hosted
- More control over security
- Higher cost

**Security considerations:**
- No multi-tenancy concerns
- Full control over infrastructure
- Must manage all security
- Compliance may be easier

**Types:**
- On-premises private cloud (own data center)
- Hosted private cloud (provider-managed but dedicated)

### Hybrid Cloud

Combination of public and private cloud.

**Characteristics:**
- Workloads distributed based on requirements
- Data can move between environments
- Requires integration and connectivity

**Security considerations:**
- Must secure both environments
- Secure connectivity between them
- Consistent policies across both
- Data residency complexity

**Use case:** Sensitive data in private cloud, scalable workloads in public cloud.

### Community Cloud

Shared among organizations with common concerns.

**Characteristics:**
- Shared by specific community
- Common security requirements
- Shared compliance needs
- Cost shared among members

**Examples:** Government community clouds, healthcare clouds

**Security considerations:**
- Shared with known entities
- Common security standards
- Still multi-tenant (within community)

---

## Cloud-Specific Threats

Threats unique to or amplified in cloud environments.

### Misconfiguration

**#1 cause of cloud breaches.**

**Common misconfigurations:**
- Public S3 buckets (exposed data)
- Open security groups (0.0.0.0/0)
- Excessive IAM permissions
- Unencrypted storage
- Disabled logging
- Default credentials

**Why it happens:**
- Complex configurations
- Defaults not always secure
- Easy to make changes
- Lack of visibility

**Example:** Thousands of S3 buckets exposed because "Block Public Access" not enabled.

### Insecure APIs

Cloud services accessed via APIs—API security is cloud security.

**Risks:**
- Weak authentication
- Excessive permissions
- No rate limiting
- Injection vulnerabilities
- Broken authorization

**Cloud-specific:** Everything is an API call. Compromise API credentials = compromise cloud resources.

### Account Hijacking

Attacker gains access to cloud account credentials.

**Methods:**
- Phishing for cloud credentials
- Credential stuffing
- Exposed access keys
- Session hijacking

**Impact:**
- Full access to all resources
- Data theft
- Resource abuse (cryptomining)
- Service disruption

### Insufficient Identity Management

Poor access control in cloud environments.

**Issues:**
- Overprivileged users and services
- Shared credentials
- No MFA
- Stale permissions
- Root/admin account misuse

### Data Breaches

Unauthorized access to cloud-stored data.

**Cloud factors:**
- Data co-located with others
- Internet accessibility
- Complex access controls
- Misconfiguration exposure

### Insecure Interfaces

Management interfaces and APIs that are vulnerable.

**Risks:**
- Web console vulnerabilities
- API vulnerabilities
- Mobile app vulnerabilities
- SDK vulnerabilities

### Denial of Service

Attacks targeting cloud resource availability.

**Cloud aspects:**
- Shared resources affected
- Auto-scaling may help (but costs money)
- Provider protections vary

### Supply Chain

Compromise through cloud service dependencies.

**Examples:**
- Compromised marketplace images
- Malicious third-party integrations
- Vulnerable libraries in cloud functions

---

## Cloud Security Controls

Specific tools and technologies for cloud security.

### Cloud Access Security Broker (CASB)

Security policy enforcement between users and cloud services.

**Deployment modes:**
- **Forward proxy:** Intercepts traffic to cloud
- **Reverse proxy:** Sits in front of cloud app
- **API-based:** Connects directly to cloud service APIs

**Capabilities:**
- Visibility (what cloud services are used)
- Compliance (enforce policies)
- Data security (DLP, encryption)
- Threat protection (malware detection)

**Use cases:**
- Shadow IT discovery
- Enforce data loss prevention
- Detect risky behavior
- Compliance monitoring

```
User → [CASB] → Cloud Services
         │
    Policies, DLP,
    Visibility, Threat Protection
```

### Cloud Security Posture Management (CSPM)

Continuous monitoring for cloud misconfigurations.

**Capabilities:**
- Configuration assessment
- Compliance checking
- Risk visualization
- Remediation guidance
- Drift detection

**What it finds:**
- Public storage buckets
- Open security groups
- Missing encryption
- Excessive permissions
- Logging disabled

**Examples:** AWS Security Hub, Azure Security Center, Prisma Cloud, Wiz

### Cloud Workload Protection Platform (CWPP)

Security for cloud workloads (VMs, containers, serverless).

**Capabilities:**
- Vulnerability scanning
- Runtime protection
- File integrity monitoring
- Network segmentation
- Behavioral analysis

**Scope:** Protects the workloads themselves, not just configuration.

### Comparison

| Tool | Focus | What It Does |
|------|-------|--------------|
| CASB | User access to cloud | Policy enforcement, visibility, DLP |
| CSPM | Cloud configuration | Misconfiguration detection, compliance |
| CWPP | Cloud workloads | Workload protection, vulnerability scanning |

---

## Cloud Identity and Access Management

Managing who can access cloud resources.

### IAM Fundamentals

**Identity:** Who is requesting access (user, service, application)

**Authentication:** Prove identity (passwords, MFA, certificates)

**Authorization:** What can identity access (permissions, policies)

### Cloud IAM Concepts

**Users:** Individual identities (humans)

**Groups:** Collections of users with shared permissions

**Roles:** 
- Permissions that can be assumed
- Not tied to specific user
- Temporary credentials
- Cross-account access

**Policies:** Define permissions
```json
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::my-bucket/*"
}
```

**Service accounts:** Identities for applications/services

### IAM Best Practices

**Least privilege:**
- Grant minimum necessary permissions
- Start with no permissions, add as needed
- Regular permission reviews

**No root account usage:**
- Root has unlimited access
- Use only for initial setup and emergencies
- MFA on root account always

**MFA everywhere:**
- All human users
- Especially privileged accounts
- Consider hardware tokens for high-value

**Credential rotation:**
- Rotate access keys regularly
- Automate rotation where possible
- Short-lived credentials preferred

**Service account security:**
- Dedicated accounts per service
- Minimum permissions
- No long-lived credentials if possible
- Use roles instead of access keys

### Federation and SSO

**Identity federation:** Use external identity provider

**Benefits:**
- Single identity across cloud and on-premises
- Centralized credential management
- SSO convenience
- Offboard once, revoke everywhere

**Technologies:**
- SAML 2.0
- OpenID Connect (OIDC)
- AWS IAM Identity Center
- Azure AD

---

## Cloud Data Protection

Protecting data stored in cloud environments.

### Encryption at Rest

Data encrypted when stored.

**Options:**

**Server-side encryption (SSE):**
- Cloud provider encrypts data at storage
- Transparent to applications
- Key managed by provider or customer

**Client-side encryption:**
- Customer encrypts before uploading
- Cloud provider never sees plaintext
- Customer manages keys

**Types (AWS example):**
- SSE-S3: AWS manages keys
- SSE-KMS: Customer manages keys in AWS KMS
- SSE-C: Customer provides keys

### Encryption in Transit

Data encrypted when moving.

**Controls:**
- TLS for all connections
- Require HTTPS for API calls
- VPN for private connectivity
- Private endpoints where possible

### Key Management

Critical for encryption effectiveness.

**Cloud Key Management Services:**
- AWS KMS
- Azure Key Vault
- Google Cloud KMS

**Best practices:**
- Never store keys in code
- Use cloud KMS services
- Separate key management from data
- Implement key rotation
- Audit key usage

**Hardware Security Modules (HSMs):**
- Dedicated hardware for key storage
- FIPS 140-2 validated
- Cloud HSM options (AWS CloudHSM, Azure Dedicated HSM)

### Data Classification

Know what data you're protecting.

**Classification levels:**
- Public
- Internal
- Confidential
- Restricted

**Apply appropriate controls based on classification:**
- Encryption requirements
- Access restrictions
- Retention policies
- Geographic restrictions

---

## Cloud Network Security

Securing cloud network infrastructure.

### Virtual Private Cloud (VPC)

Isolated network within cloud provider.

**Components:**
- Subnets (public, private)
- Route tables
- Internet gateways
- NAT gateways
- Network ACLs

**Design principles:**
- Isolate workloads in separate VPCs
- Use private subnets for sensitive resources
- Minimize internet exposure
- Segment by security requirements

### Security Groups

Virtual firewalls for cloud resources.

**Characteristics:**
- Stateful (return traffic automatically allowed)
- Apply to instances
- Allow rules only (implicit deny)

**Best practices:**
- Least privilege (minimum ports open)
- No 0.0.0.0/0 except where required
- Separate groups by function
- Regular review of rules

### Network Access Control Lists (NACLs)

Subnet-level filtering.

**Characteristics:**
- Stateless (must allow both directions)
- Apply to subnets
- Allow and deny rules
- Processed in order

**Use case:** Additional layer of defense beyond security groups.

### Private Connectivity

Connections that don't traverse public internet.

**Options:**
- **VPN:** Encrypted tunnel over internet
- **Direct Connect (AWS) / ExpressRoute (Azure):** Dedicated connection
- **Private endpoints:** Access cloud services privately

**Security benefits:**
- Traffic not exposed to internet
- Lower latency
- More predictable security

---

## Cloud Compliance and Governance

Meeting regulatory and organizational requirements.

### Compliance Frameworks

Cloud providers offer compliance certifications:

| Certification | Focus |
|--------------|-------|
| SOC 2 | Security, availability, confidentiality |
| ISO 27001 | Information security management |
| PCI DSS | Payment card data |
| HIPAA | Healthcare data (US) |
| FedRAMP | US government cloud |
| GDPR | EU data protection |

**Important:** Provider certification doesn't mean YOU are compliant. Your usage must also comply.

### Compliance in Shared Responsibility

**Provider certified:** Infrastructure meets requirements

**Customer must ensure:**
- Proper configuration
- Access controls
- Data handling
- Logging and monitoring
- Documentation

**Example:** AWS is PCI certified, but your application still needs PCI controls for cardholder data.

### Cloud Governance

**Policies:**
- Approved cloud services
- Configuration requirements
- Data residency requirements
- Tagging standards

**Guardrails:**
- Preventive (SCPs, Azure Policy)
- Detective (monitoring, alerting)

**Organization:**
- Multi-account strategy
- Separate production from development
- Centralized security services

---

## Key Exam Tips

🎯 **Service models:** IaaS = most customer responsibility. SaaS = least customer responsibility. Customer ALWAYS responsible for data.

🎯 **Shared responsibility:** Provider secures OF the cloud. Customer secures IN the cloud.

🎯 **CASB:** Policy enforcement between users and cloud services. Visibility, DLP, compliance.

🎯 **CSPM:** Finds misconfigurations. Public buckets, open security groups, missing encryption.

🎯 **CWPP:** Protects workloads (VMs, containers, serverless). Vulnerability scanning, runtime protection.

🎯 **#1 cloud threat:** Misconfiguration. Public S3 buckets, open security groups, excessive permissions.

🎯 **IAM best practices:** Least privilege, MFA everywhere, no root account usage, use roles over access keys.

🎯 **Encryption:** At rest (storage), in transit (TLS), key management through cloud KMS.

🎯 **Security groups:** Stateful, instance-level, allow rules only.

🎯 **VPC:** Isolated network. Private subnets for sensitive resources.

---

## Key Takeaways

- [ ] IaaS: Customer manages OS up; PaaS: Customer manages application and data; SaaS: Customer manages access and data
- [ ] Shared responsibility: Provider secures the cloud infrastructure; customer secures what's in the cloud
- [ ] Customer is ALWAYS responsible for data regardless of service model
- [ ] Cloud deployment models: Public (shared), Private (dedicated), Hybrid (combination), Community (shared purpose)
- [ ] Misconfiguration is the #1 cause of cloud breaches (public buckets, open security groups, excessive permissions)
- [ ] CASB provides visibility and policy enforcement for cloud service access
- [ ] CSPM continuously monitors for misconfigurations and compliance violations
- [ ] CWPP protects cloud workloads including VMs, containers, and serverless
- [ ] IAM best practices: least privilege, MFA, avoid root account, use roles, short-lived credentials
- [ ] Encrypt data at rest and in transit; use cloud KMS for key management
- [ ] VPC provides network isolation; security groups provide instance-level filtering
- [ ] Provider compliance doesn't automatically make customer compliant

---

## Check Your Understanding

**1. An organization migrates their application to AWS EC2 instances with RDS databases. They assume AWS handles all security. What's wrong with this assumption, and what are the organization's actual responsibilities?**

<details>
<summary>Show Answer</summary>
<strong>The assumption is fundamentally wrong.</strong>

<strong>Shared responsibility model:</strong>
- AWS: Secures the cloud (physical infrastructure, hypervisors, managed service internals)
- Customer: Secures what's in the cloud

<strong>For EC2 (IaaS), customer is responsible for:</strong>
- Guest operating system (patching, hardening)
- Application security
- Security group configuration
- Network configuration
- Data encryption
- IAM permissions
- Access management
- Monitoring and logging

<strong>For RDS (PaaS), customer is responsible for:</strong>
- Database access control
- Data encryption configuration
- Security group rules
- Network configuration (VPC)
- Backup configuration
- User management within database

<strong>AWS responsibility:</strong>
- Physical data center security
- Hardware maintenance
- Hypervisor security
- For RDS: Database patching, underlying OS

<strong>Result:</strong> Customer has significant security responsibilities that AWS will not perform.
</details>

**2. A security team discovers that 50 S3 buckets are publicly accessible, exposing sensitive data. What security tool would have detected this before exposure, and what controls should prevent it?**

<details>
<summary>Show Answer</summary>
<strong>Detection tool: Cloud Security Posture Management (CSPM)</strong>

<strong>CSPM capabilities:</strong>
- Continuous configuration scanning
- Detects public S3 buckets
- Alerts on misconfigurations
- Compliance checking
- Provides remediation guidance

<strong>Preventive controls:</strong>

**1. S3 Block Public Access (account level):**
```
BlockPublicAcls: true
IgnorePublicAcls: true
BlockPublicPolicy: true
RestrictPublicBuckets: true
```
Prevents any bucket from being made public.

**2. Service Control Policy (SCP):**
Organizational policy preventing public buckets across all accounts.

**3. IAM policies:**
Restrict who can modify bucket policies.

**4. AWS Config rules:**
Automatic detection and optional remediation.

**5. Bucket policies:**
Default deny public access.

<strong>Best practice:</strong>
- Enable Block Public Access at organization/account level
- CSPM for continuous monitoring
- Alerting on any public bucket creation attempt
- Regular access reviews
</details>

**3. A company uses multiple SaaS applications (Salesforce, Dropbox, Slack). Employees are also using unauthorized cloud apps. What security solution addresses this, and what capabilities does it provide?**

<details>
<summary>Show Answer</summary>
<strong>Solution: Cloud Access Security Broker (CASB)</strong>

<strong>Shadow IT discovery:</strong>
- Identifies all cloud apps in use
- Categorizes by risk level
- Finds unauthorized/unsanctioned apps
- Provides visibility into cloud usage

<strong>Policy enforcement:</strong>
- Block access to risky apps
- Enforce DLP policies
- Require specific authentication methods
- Control data sharing

<strong>Data protection:</strong>
- Data Loss Prevention (DLP)
- Encryption of sensitive data
- Access control enforcement
- Content inspection

<strong>Threat protection:</strong>
- Malware detection
- Anomalous behavior detection
- Compromised account detection

<strong>Compliance:</strong>
- Audit logging
- Compliance reporting
- Policy verification

<strong>Deployment options:</strong>
- Forward proxy (inline, sees all traffic)
- Reverse proxy (in front of apps)
- API mode (connects to SaaS APIs)

<strong>Use case example:</strong>
- CASB discovers employees using personal Dropbox
- Policy blocks upload of files containing SSN/credit cards
- DLP alerts on sensitive data leaving organization
- Employees redirected to approved enterprise storage
</details>

**4. An AWS IAM user has been created with AdministratorAccess policy for "convenience." What's the security issue, and what should be done instead?**

<details>
<summary>Show Answer</summary>
<strong>Security issues:</strong>

**1. Violates least privilege:**
- AdministratorAccess grants full access to everything
- User likely needs only fraction of permissions
- Every additional permission = additional risk

**2. Blast radius:**
- If credentials compromised, attacker has full access
- Can delete resources, exfiltrate data, create backdoors
- No limit to damage

**3. Long-lived credentials:**
- IAM users have permanent access keys
- Keys can be leaked, stolen
- No automatic expiration

---

<strong>What should be done:</strong>

**1. Define actual required permissions:**
```json
{
  "Effect": "Allow",
  "Action": [
    "s3:GetObject",
    "s3:PutObject"
  ],
  "Resource": "arn:aws:s3:::specific-bucket/*"
}
```
Only what user actually needs.

**2. Use roles instead of users for applications:**
- Roles provide temporary credentials
- Automatic rotation
- No permanent access keys

**3. Use groups for permission management:**
- Create groups with appropriate policies
- Assign users to groups
- Easier to manage and audit

**4. Enable MFA:**
- Required for all users
- Especially for any elevated permissions

**5. Regular permission reviews:**
- Remove unused permissions
- Detect privilege creep
- Audit access patterns

**6. For human access:**
- Consider AWS IAM Identity Center (SSO)
- Federated identity
- Short-lived session credentials
</details>

**5. Compare security group and NACL in AWS. When would you use each?**

<details>
<summary>Show Answer</summary>
<strong>Security Groups:</strong>

| Characteristic | Detail |
|----------------|--------|
| Level | Instance (ENI) level |
| State | Stateful (return traffic auto-allowed) |
| Rules | Allow only (implicit deny all) |
| Order | All rules evaluated |
| Default | Deny all inbound, allow all outbound |

**Example:**
```
Inbound:
- Allow TCP 443 from 0.0.0.0/0
- Allow TCP 22 from 10.0.0.0/8

(Return traffic automatically allowed)
```

---

<strong>Network ACLs:</strong>

| Characteristic | Detail |
|----------------|--------|
| Level | Subnet level |
| State | Stateless (must allow both directions) |
| Rules | Allow and Deny |
| Order | Processed in order (lowest number first) |
| Default | Allow all (default NACL) |

**Example:**
```
Inbound:
100 - Allow TCP 443 from 0.0.0.0/0
200 - Deny TCP 22 from 0.0.0.0/0
* - Deny all

Outbound:
100 - Allow TCP 1024-65535 to 0.0.0.0/0 (return traffic)
* - Deny all
```

---

<strong>When to use each:</strong>

**Security Groups (primary control):**
- Most common use case
- Instance-level protection
- Easier to manage (stateful)
- Granular per-instance control

**NACLs (additional layer):**
- Subnet-level blocklist
- Block specific IPs/ranges
- Defense in depth
- Explicit deny rules needed

**Best practice:**
- Security groups for primary access control
- NACLs for subnet-level deny rules (blocklist known bad IPs)
- Both for defense in depth
</details>

**6. An organization is evaluating cloud encryption options for sensitive data in S3. Explain the differences between SSE-S3, SSE-KMS, and client-side encryption.**

<details>
<summary>Show Answer</summary>
<strong>SSE-S3 (Server-Side Encryption with S3 Managed Keys):</strong>

**How it works:**
- AWS manages encryption keys
- Automatic key rotation
- Encryption/decryption transparent

**Pros:**
- Simplest to implement
- No key management overhead
- No additional cost

**Cons:**
- No customer key control
- Can't audit individual key usage
- AWS has access to keys

**Use case:** Basic encryption requirement without compliance needs.

---

<strong>SSE-KMS (Server-Side Encryption with KMS Keys):</strong>

**How it works:**
- Keys managed in AWS KMS
- Customer controls key policies
- Automatic or manual rotation

**Pros:**
- Customer controls key permissions
- Detailed audit trail (CloudTrail)
- Separation of duties (key access ≠ data access)
- Can use customer-managed keys

**Cons:**
- KMS API charges
- Slightly more complex
- KMS rate limits

**Use case:** Compliance requirements, audit needs, key control.

---

<strong>Client-Side Encryption:</strong>

**How it works:**
- Customer encrypts data before upload
- AWS never sees plaintext
- Customer manages keys entirely

**Pros:**
- Maximum control
- AWS can't access data
- Protects from AWS compromise
- Data encrypted in transit inherently

**Cons:**
- Customer manages all key lifecycle
- Application changes required
- Key loss = data loss
- Most complex

**Use case:** Highest security requirements, zero-trust of provider.

---

<strong>Comparison:</strong>

| Aspect | SSE-S3 | SSE-KMS | Client-Side |
|--------|--------|---------|-------------|
| Key management | AWS | Customer via KMS | Customer entirely |
| Complexity | Low | Medium | High |
| Control | Low | Medium | High |
| AWS access to data | Yes | Yes | No |
| Audit trail | Limited | Full | Customer managed |
| Cost | None | KMS charges | None (compute) |
</details>

**7. A multinational company needs to ensure data stored in the cloud remains in specific geographic regions for compliance. What cloud concepts and controls address this?**

<details>
<summary>Show Answer</summary>
<strong>Concept: Data Sovereignty / Data Residency</strong>

**Regulatory drivers:**
- GDPR (EU data staying in EU)
- Data localization laws
- Industry regulations
- Customer contracts

---

<strong>Cloud controls for data residency:</strong>

**1. Region selection:**
- Choose cloud regions in required geography
- EU data in EU regions (eu-west-1, eu-central-1)
- Avoid using global services that replicate

**2. Service Control Policies (SCPs):**
```json
{
  "Effect": "Deny",
  "Action": "*",
  "Resource": "*",
  "Condition": {
    "StringNotEquals": {
      "aws:RequestedRegion": ["eu-west-1", "eu-central-1"]
    }
  }
}
```
Prevents resource creation outside allowed regions.

**3. Resource policies:**
- Bucket policies restricting replication
- Prevent cross-region copying

**4. Network controls:**
- VPC endpoints to keep traffic in region
- Private connectivity

**5. Data replication controls:**
- Disable cross-region replication
- Or replicate only to compliant regions

---

<strong>Monitoring:</strong>
- CSPM checking for resources in wrong regions
- CloudTrail for API calls in wrong regions
- Alerting on violations

**Contracts:**
- Cloud provider data processing agreements
- Define where data can be processed
- Sub-processor requirements

**Challenges:**
- Global services (IAM, Route 53) may have global aspects
- CDN caching in multiple locations
- Backup and DR requirements
</details>

**8. Explain the difference between CASB, CSPM, and CWPP. When would each be used?**

<details>
<summary>Show Answer</summary>
<strong>CASB (Cloud Access Security Broker):</strong>

**Focus:** User access to cloud services

**Capabilities:**
- Shadow IT discovery
- SaaS visibility
- Data loss prevention
- Access control enforcement
- Threat protection

**When to use:**
- Controlling access to SaaS applications
- Discovering unauthorized cloud usage
- Enforcing DLP for cloud data
- Ensuring compliance for cloud access

**Example:** Prevent users from uploading sensitive files to personal Dropbox.

---

<strong>CSPM (Cloud Security Posture Management):</strong>

**Focus:** Cloud configuration

**Capabilities:**
- Misconfiguration detection
- Compliance monitoring
- Risk assessment
- Remediation guidance
- Drift detection

**When to use:**
- IaaS/PaaS security monitoring
- Compliance with frameworks (CIS, SOC 2)
- Identifying risky configurations
- Multi-cloud visibility

**Example:** Detect S3 bucket made public or security group opened to 0.0.0.0/0.

---

<strong>CWPP (Cloud Workload Protection Platform):</strong>

**Focus:** Workload security

**Capabilities:**
- Vulnerability scanning
- Runtime protection
- Container security
- Serverless security
- File integrity monitoring
- Behavioral analysis

**When to use:**
- Protecting VMs, containers, serverless
- Vulnerability management in cloud
- Runtime threat detection
- Workload-level visibility

**Example:** Detect cryptominer running in container or vulnerability in EC2 instance.

---

<strong>Summary:</strong>

| Tool | What | Where | Example |
|------|------|-------|---------|
| CASB | User access | SaaS/Shadow IT | Block risky app usage |
| CSPM | Configuration | IaaS/PaaS | Find public bucket |
| CWPP | Workloads | VM/Container/Serverless | Scan for vulnerabilities |

**Often used together** for comprehensive cloud security.
</details>

**9. An organization wants to connect their on-premises data center to AWS securely. Compare VPN vs. Direct Connect for this use case.**

<details>
<summary>Show Answer</summary>
<strong>VPN (Virtual Private Network):</strong>

**How it works:**
- Encrypted tunnel over public internet
- IPsec VPN to AWS VPN Gateway
- Terminates in VPC

**Pros:**
- Quick to set up (hours)
- Low cost
- Good for getting started
- Redundancy through multiple tunnels

**Cons:**
- Uses public internet (variable performance)
- Higher latency
- Bandwidth limited by internet connection
- Less predictable

**Best for:**
- Small/medium workloads
- Initial cloud connectivity
- Backup connectivity
- Lower budget

---

<strong>Direct Connect:</strong>

**How it works:**
- Dedicated private connection
- Physical connection to AWS location
- Doesn't traverse public internet

**Pros:**
- Consistent network performance
- Lower latency
- Higher bandwidth (up to 100 Gbps)
- Predictable performance
- Private connectivity

**Cons:**
- Takes weeks/months to provision
- Higher cost
- Requires physical presence at Direct Connect location
- Single point of failure (unless redundant)

**Best for:**
- Large data transfers
- Latency-sensitive applications
- Compliance requirements
- Consistent hybrid workloads

---

<strong>Security comparison:</strong>

| Aspect | VPN | Direct Connect |
|--------|-----|----------------|
| Encryption | IPsec encrypted | Not encrypted by default* |
| Internet exposure | Over internet (encrypted) | Private, no internet |
| Interception risk | Encrypted data on public path | Private path, but unencrypted |
| Complexity | Lower | Higher |

*Direct Connect can add VPN for encryption.

<strong>Recommendation:</strong>
- Start with VPN
- Add Direct Connect for production workloads
- Use VPN as backup for Direct Connect
- Consider Direct Connect + VPN for encryption
</details>

**10. A security assessment finds that developers have been using IAM user access keys in application code deployed to GitHub. What are the risks, and how should applications authenticate to AWS services instead?**

<details>
<summary>Show Answer</summary>
<strong>Risks of access keys in code:</strong>

**1. Credential exposure:**
- Keys visible in repository (especially if public)
- Keys in commit history even if later removed
- Bots scan GitHub for AWS keys continuously

**2. Long-lived credentials:**
- Access keys don't expire
- Remain valid until manually rotated
- Long window for abuse

**3. Overprivileged:**
- Often given broad permissions "to work"
- Compromise = full access to those permissions

**Real-world impact:**
- Thousands of keys exposed on GitHub daily
- Attackers use within minutes of exposure
- Cryptomining, data theft, resource abuse

---

<strong>How applications should authenticate:</strong>

**For EC2 instances - IAM Roles:**
```
EC2 Instance → Instance Profile → IAM Role → Temporary Credentials
```
- No access keys needed
- Credentials automatically rotated
- Scoped to specific role permissions

**For Lambda functions - Execution Role:**
- Assign IAM role to function
- Automatic credential management
- No keys in code

**For ECS/EKS - Task Roles:**
- IAM roles for containers
- Role per task/pod

**For external applications - IAM Identity Center/OIDC:**
- Federated authentication
- Short-lived tokens
- No long-term credentials

---

<strong>If access keys absolutely required:</strong>

**1. Use secrets management:**
- AWS Secrets Manager
- Never in code or environment variables

**2. Minimum permissions:**
- Only what application needs
- Nothing more

**3. Rotate regularly:**
- Automated rotation
- Short lifetime

**4. Monitor usage:**
- CloudTrail logging
- Alert on unusual usage

---

<strong>Remediation for current situation:</strong>
1. Rotate all exposed keys immediately
2. Scan repository history for other secrets
3. Check CloudTrail for unauthorized usage
4. Implement roles for applications
5. Implement pre-commit hooks for secret detection
6. Developer training
</details>

---

## Next Lesson Preview

In **Lesson 16: Secure Network Design**, we'll explore network security devices and configurations in depth. You'll learn about firewall types and rules, intrusion detection and prevention systems, network access control, load balancers, and proxy servers.

---

✅ **Lesson 15 Complete**

**Progress:** 15 of 30 lessons complete (50%)

---

*Next up: Lesson 16 - Secure Network Design*