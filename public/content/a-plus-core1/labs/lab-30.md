# Lab 30: Cloud Computing Models

**Tier:** 1 (Conceptual - No special equipment required)
**Time:** 30-35 minutes
**Exam Objectives:** 4.1 - Summarize cloud-computing concepts

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **Explain the difference between IaaS, PaaS, and SaaS. Give a real-world example of each and explain who manages what in each model.**

2. **A company is deciding between a public cloud, private cloud, and hybrid cloud deployment. What factors should influence their decision?**

3. **What does "shared responsibility model" mean in cloud computing? Give an example of what the cloud provider handles vs. what the customer handles.**

4. **Why would a company choose to use cloud computing instead of maintaining their own on-premises data center?**

5. **What is the difference between cloud storage solutions like OneDrive and a full IaaS platform like AWS EC2?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses conceptual understanding and research** - Master cloud concepts without requiring cloud accounts.

---

#### Activity A: Cloud Service Models

**Goal:** Master IaaS, PaaS, and SaaS distinctions.

**The Cloud Service Stack:**

```
┌─────────────────────────────────────────────────────────────┐
│                      APPLICATIONS                            │
├─────────────────────────────────────────────────────────────┤
│                         DATA                                 │
├─────────────────────────────────────────────────────────────┤
│                       RUNTIME                                │
├─────────────────────────────────────────────────────────────┤
│                      MIDDLEWARE                              │
├─────────────────────────────────────────────────────────────┤
│                    OPERATING SYSTEM                          │
├─────────────────────────────────────────────────────────────┤
│                    VIRTUALIZATION                            │
├─────────────────────────────────────────────────────────────┤
│                       SERVERS                                │
├─────────────────────────────────────────────────────────────┤
│                       STORAGE                                │
├─────────────────────────────────────────────────────────────┤
│                      NETWORKING                              │
└─────────────────────────────────────────────────────────────┘
```

**Who manages what?**

Mark each layer with: **P** = Provider manages, **C** = Customer manages

| Layer | On-Premises | IaaS | PaaS | SaaS |
|-------|-------------|------|------|------|
| Applications | | | | |
| Data | | | | |
| Runtime | | | | |
| Middleware | | | | |
| Operating System | | | | |
| Virtualization | | | | |
| Servers | | | | |
| Storage | | | | |
| Networking | | | | |

---

#### Activity B: Infrastructure as a Service (IaaS)

**Goal:** Understand IaaS in depth.

**IaaS definition:**

_________________________________________________________________

**What IaaS provides:**

| Resource | Description |
|----------|-------------|
| Virtual machines | |
| Storage | |
| Networking | |
| Load balancers | |
| Firewalls | |

**Major IaaS providers:**

| Provider | Service Name | Key Features |
|----------|--------------|--------------|
| Amazon Web Services | | |
| Microsoft Azure | | |
| Google Cloud Platform | | |
| DigitalOcean | | |
| Linode | | |

**IaaS use cases:**

| Use Case | Why IaaS? |
|----------|-----------|
| Development/testing | |
| Website hosting | |
| Big data analytics | |
| Backup and recovery | |
| High-performance computing | |

**IaaS advantages:**

| Advantage | Explanation |
|-----------|-------------|
| Scalability | |
| Cost (CapEx vs OpEx) | |
| No hardware maintenance | |
| Global availability | |
| Pay-per-use | |

**IaaS disadvantages:**

| Disadvantage | Explanation |
|--------------|-------------|
| Complexity | |
| Security responsibility | |
| Potential costs | |
| Vendor dependency | |

---

#### Activity C: Platform as a Service (PaaS)

**Goal:** Understand PaaS in depth.

**PaaS definition:**

_________________________________________________________________

**What PaaS provides (beyond IaaS):**

| Component | Description |
|-----------|-------------|
| Development tools | |
| Database management | |
| Runtime environment | |
| Middleware | |
| OS management | |

**Major PaaS providers:**

| Provider | Service Name | Best For |
|----------|--------------|----------|
| Heroku | | |
| Google App Engine | | |
| Microsoft Azure App Service | | |
| AWS Elastic Beanstalk | | |
| Red Hat OpenShift | | |

**PaaS use cases:**

| Use Case | Why PaaS? |
|----------|-----------|
| Web application development | |
| API development | |
| Microservices | |
| IoT applications | |
| Business analytics | |

**PaaS advantages:**

| Advantage | Explanation |
|-----------|-------------|
| Faster development | |
| Reduced complexity | |
| Built-in scalability | |
| Automatic updates | |
| Collaboration features | |

**PaaS disadvantages:**

| Disadvantage | Explanation |
|--------------|-------------|
| Less control | |
| Vendor lock-in | |
| Limited customization | |
| Potential compatibility issues | |

---

#### Activity D: Software as a Service (SaaS)

**Goal:** Understand SaaS in depth.

**SaaS definition:**

_________________________________________________________________

**What SaaS provides:**

| Component | Description |
|-----------|-------------|
| Complete application | |
| User interface | |
| Data storage | |
| Updates and maintenance | |
| Support | |

**Common SaaS categories and examples:**

| Category | Examples |
|----------|----------|
| Email/Communication | |
| Office productivity | |
| CRM (Customer Relationship) | |
| Collaboration | |
| Accounting/Finance | |
| HR/Payroll | |
| Storage | |

**SaaS characteristics:**

| Characteristic | Description |
|----------------|-------------|
| Multi-tenancy | |
| Subscription pricing | |
| Automatic updates | |
| Accessibility | |
| Scalability | |

**SaaS advantages:**

| Advantage | Explanation |
|-----------|-------------|
| No installation | |
| Accessible anywhere | |
| Automatic updates | |
| Lower upfront cost | |
| Reduced IT burden | |

**SaaS disadvantages:**

| Disadvantage | Explanation |
|--------------|-------------|
| Less customization | |
| Data security concerns | |
| Internet dependency | |
| Ongoing costs | |
| Limited integration | |

---

#### Activity E: Cloud Deployment Models

**Goal:** Understand different cloud deployment options.

**Deployment model comparison:**

| Model | Description | Control | Cost | Security |
|-------|-------------|---------|------|----------|
| Public Cloud | | | | |
| Private Cloud | | | | |
| Hybrid Cloud | | | | |
| Community Cloud | | | | |

**Public Cloud:**

| Aspect | Details |
|--------|---------|
| Definition | |
| Examples | |
| Best for | |
| Concerns | |

**Private Cloud:**

| Aspect | Details |
|--------|---------|
| Definition | |
| Deployment options | |
| Best for | |
| Concerns | |

**Hybrid Cloud:**

| Aspect | Details |
|--------|---------|
| Definition | |
| How it works | |
| Best for | |
| Challenges | |

**Community Cloud:**

| Aspect | Details |
|--------|---------|
| Definition | |
| Examples | |
| Best for | |
| Concerns | |

**Choosing a deployment model:**

| Factor | Public | Private | Hybrid |
|--------|--------|---------|--------|
| Regulatory compliance | | | |
| Cost sensitivity | | | |
| Data sensitivity | | | |
| Scalability needs | | | |
| Control requirements | | | |

---

#### Activity F: Cloud Characteristics

**Goal:** Understand essential cloud characteristics.

**NIST Essential Characteristics:**

| Characteristic | Definition | Example |
|----------------|------------|---------|
| On-demand self-service | | |
| Broad network access | | |
| Resource pooling | | |
| Rapid elasticity | | |
| Measured service | | |

**Elasticity vs Scalability:**

| Concept | Definition | Example |
|---------|------------|---------|
| Scalability | | |
| Elasticity | | |

**Types of scaling:**

| Type | Description | When to Use |
|------|-------------|-------------|
| Vertical (Scale Up) | | |
| Horizontal (Scale Out) | | |

**Metered services and billing:**

| Billing Model | Description | Example |
|---------------|-------------|---------|
| Pay-as-you-go | | |
| Reserved instances | | |
| Spot/preemptible | | |
| Subscription | | |

---

#### Activity G: Cloud Storage

**Goal:** Understand cloud storage options.

**Cloud storage types:**

| Type | Description | Use Case |
|------|-------------|----------|
| Object storage | | |
| Block storage | | |
| File storage | | |

**Consumer cloud storage services:**

| Service | Provider | Free Tier | Integration |
|---------|----------|-----------|-------------|
| OneDrive | | | |
| Google Drive | | | |
| iCloud | | | |
| Dropbox | | | |

**Enterprise cloud storage:**

| Service | Provider | Type | Use Case |
|---------|----------|------|----------|
| Amazon S3 | | | |
| Azure Blob Storage | | | |
| Google Cloud Storage | | | |

**Cloud storage features:**

| Feature | Description |
|---------|-------------|
| Synchronization | |
| Sharing | |
| Versioning | |
| Encryption | |
| Access control | |

---

#### Activity H: Cloud Security

**Goal:** Understand cloud security concepts.

**Shared Responsibility Model:**

```
┌─────────────────────────────────────────────────────────────┐
│                    CUSTOMER RESPONSIBILITY                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Customer Data                                        │   │
│  │ Access Management (IAM)                              │   │
│  │ Application Security                                 │   │
│  │ Operating System (IaaS)                              │   │
│  │ Network Configuration                                │   │
│  │ Encryption                                           │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                    PROVIDER RESPONSIBILITY                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Physical Security                                    │   │
│  │ Hardware                                             │   │
│  │ Network Infrastructure                               │   │
│  │ Hypervisor                                           │   │
│  │ Storage Infrastructure                               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Security responsibilities by service model:**

| Security Aspect | IaaS | PaaS | SaaS |
|-----------------|------|------|------|
| Data classification | | | |
| User access | | | |
| Application security | | | |
| OS patching | | | |
| Network security | | | |
| Physical security | | | |

**Cloud security concepts:**

| Concept | Description |
|---------|-------------|
| Identity and Access Management (IAM) | |
| Multi-factor authentication (MFA) | |
| Encryption at rest | |
| Encryption in transit | |
| Security groups/firewalls | |
| Compliance certifications | |

**Common cloud security concerns:**

| Concern | Description | Mitigation |
|---------|-------------|------------|
| Data breaches | | |
| Account hijacking | | |
| Insider threats | | |
| Insecure APIs | | |
| Misconfiguration | | |

---

#### Activity I: Desktop as a Service (DaaS) and VDI

**Goal:** Understand virtual desktop solutions.

**Desktop virtualization options:**

| Solution | Description | Where Desktops Run |
|----------|-------------|-------------------|
| VDI (Virtual Desktop Infrastructure) | | |
| DaaS (Desktop as a Service) | | |
| Local VM | | |

**VDI vs DaaS comparison:**

| Aspect | VDI | DaaS |
|--------|-----|------|
| Infrastructure ownership | | |
| Capital expense | | |
| Management responsibility | | |
| Scalability | | |
| Customization | | |

**DaaS providers:**

| Provider | Service Name |
|----------|--------------|
| Amazon | |
| Microsoft | |
| Citrix | |
| VMware | |

**Desktop virtualization benefits:**

| Benefit | Explanation |
|---------|-------------|
| Centralized management | |
| Security | |
| BYOD support | |
| Disaster recovery | |
| Remote work | |

**Desktop virtualization challenges:**

| Challenge | Description |
|-----------|-------------|
| Network dependency | |
| User experience | |
| GPU-intensive apps | |
| Printing | |
| Cost | |

---

#### Activity J: Cloud Connectivity

**Goal:** Understand how to connect to cloud resources.

**Connection methods:**

| Method | Description | Use Case |
|--------|-------------|----------|
| Public internet | | |
| VPN | | |
| Direct connection | | |
| SD-WAN | | |

**Direct connection services:**

| Provider | Service | Speed |
|----------|---------|-------|
| AWS | | |
| Azure | | |
| Google Cloud | | |

**VPN for cloud:**

| Type | Description | Use Case |
|------|-------------|----------|
| Site-to-site VPN | | |
| Client VPN | | |

**Network considerations:**

| Factor | Description |
|--------|-------------|
| Latency | |
| Bandwidth | |
| Reliability | |
| Cost | |
| Security | |

---

#### Activity K: Cloud Service Scenarios

**Goal:** Practice identifying appropriate cloud solutions.

**Scenario 1: Startup Web Application**

| Requirements | |
|--------------|---|
| Budget | Limited, no upfront capital |
| Team | 3 developers, no sysadmins |
| Application | Python web app |
| Traffic | Unpredictable, may spike |

Recommended solution:
- Service model: _______________________
- Deployment model: _______________________
- Specific service example: _______________________
- Reasoning: _______________________

**Scenario 2: Healthcare Organization**

| Requirements | |
|--------------|---|
| Regulations | HIPAA compliance required |
| Data | Patient records (PHI) |
| Existing | On-premises data center |
| Need | Email, collaboration tools |

Recommended solution:
- Service model: _______________________
- Deployment model: _______________________
- Specific considerations: _______________________
- Reasoning: _______________________

**Scenario 3: E-commerce Peak Season**

| Requirements | |
|--------------|---|
| Normal traffic | 1,000 users/day |
| Holiday traffic | 50,000 users/day |
| Duration | 6 weeks per year |
| Current | Physical servers at capacity |

Recommended solution:
- Service model: _______________________
- Deployment model: _______________________
- Key feature needed: _______________________
- Reasoning: _______________________

**Scenario 4: Small Business Basics**

| Requirements | |
|--------------|---|
| Size | 25 employees |
| Needs | Email, file storage, basic apps |
| IT Staff | 1 part-time person |
| Budget | Minimal |

Recommended solution:
- Service model: _______________________
- Specific services: _______________________
- Reasoning: _______________________

**Scenario 5: Machine Learning Project**

| Requirements | |
|--------------|---|
| Workload | Training ML models |
| Hardware | Needs GPU clusters |
| Duration | Occasional, project-based |
| Data | Large datasets |

Recommended solution:
- Service model: _______________________
- Specific service type: _______________________
- Reasoning: _______________________

---

#### Activity L: Cloud Cost Concepts

**Goal:** Understand cloud pricing and cost management.

**CapEx vs OpEx:**

| Concept | Definition | Cloud Impact |
|---------|------------|--------------|
| CapEx (Capital Expenditure) | | |
| OpEx (Operating Expenditure) | | |

**Cloud pricing factors:**

| Factor | How It Affects Cost |
|--------|---------------------|
| Compute (CPU/RAM) | |
| Storage | |
| Data transfer (egress) | |
| Region | |
| Instance type | |
| Usage hours | |

**Cost optimization strategies:**

| Strategy | Description |
|----------|-------------|
| Right-sizing | |
| Reserved instances | |
| Spot instances | |
| Auto-scaling | |
| Monitoring and alerts | |
| Shutting down unused resources | |

**Hidden cloud costs:**

| Cost | Description |
|------|-------------|
| Data egress | |
| API requests | |
| Premium support | |
| Snapshots/backups | |
| Load balancers | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A company's cloud bill doubled unexpectedly. Their usage seemed the same. What are some possible causes?**

2. **A financial services company is told they can't use public cloud due to regulations. What options do they have for leveraging cloud benefits?**

3. **An organization migrated everything to the cloud but is now experiencing latency issues with their database-heavy application. What might be the problem and what solutions exist?**

4. **A company wants "the cloud" but their CEO is concerned about vendor lock-in. What strategies can minimize this risk?**

---

## What You Learned Today

- ✅ Mastered IaaS, PaaS, and SaaS distinctions
- ✅ Understood cloud deployment models (public, private, hybrid, community)
- ✅ Learned essential cloud characteristics (elasticity, on-demand, metered)
- ✅ Studied cloud storage options
- ✅ Understood shared responsibility model for security
- ✅ Learned about DaaS and VDI
- ✅ Studied cloud connectivity options
- ✅ Applied knowledge to real-world scenarios
- ✅ Understood cloud cost concepts

---

## 🎉 Congratulations! A+ Core 1 Labs Complete! 🎉

You've completed all 30 labs covering:
- **Mobile Devices** (Labs 1-6)
- **Networking** (Labs 7-15)
- **Hardware** (Labs 16-28)
- **Virtualization & Cloud** (Labs 29-30)

**Next Steps:**
- Review weak areas
- Take practice exams
- Start A+ Core 2 content!

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              CLOUD COMPUTING QUICK REFERENCE                   ║
╠═══════════════════════════════════════════════════════════════╣
║  SERVICE MODELS:                                               ║
║  IaaS: VMs, storage, networks (you manage OS+apps)            ║
║     Examples: AWS EC2, Azure VMs, Google Compute              ║
║  PaaS: Platform for development (provider manages OS)         ║
║     Examples: Heroku, Azure App Service, Google App Engine    ║
║  SaaS: Complete applications (provider manages everything)    ║
║     Examples: Microsoft 365, Gmail, Salesforce, Dropbox       ║
╠═══════════════════════════════════════════════════════════════╣
║  DEPLOYMENT MODELS:                                            ║
║  Public: Shared infrastructure, pay-per-use                   ║
║  Private: Dedicated to one organization                       ║
║  Hybrid: Mix of public and private                            ║
║  Community: Shared by organizations with common needs         ║
╠═══════════════════════════════════════════════════════════════╣
║  KEY CHARACTERISTICS:                                          ║
║  On-demand self-service | Broad network access                ║
║  Resource pooling | Rapid elasticity | Measured service       ║
╠═══════════════════════════════════════════════════════════════╣
║  SHARED RESPONSIBILITY:                                        ║
║  Provider: Physical, network, hypervisor, infrastructure      ║
║  Customer: Data, access, config (more with IaaS, less SaaS)  ║
╠═══════════════════════════════════════════════════════════════╣
║  STORAGE: Object (S3) | Block (EBS) | File (EFS/NFS)         ║
║  CapEx = Buy hardware | OpEx = Pay for cloud services        ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 30: Cloud Computing Models*
*🎓 Core 1 Complete!*