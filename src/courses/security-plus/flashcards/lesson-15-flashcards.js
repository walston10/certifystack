// Lesson 15: Cloud Security
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson15Flashcards = [
  {
    id: 1,
    front: "What are the three Cloud Service Models?",
    back: "IaaS (Infrastructure as a Service), PaaS (Platform as a Service), SaaS (Software as a Service). Each has different customer vs provider responsibilities."
  },
  {
    id: 2,
    front: "What is IaaS (Infrastructure as a Service)?",
    back: "Cloud provides virtualized computing resources - VMs, storage, networks. Customer manages OS, applications, data. Examples: AWS EC2, Azure VMs, Google Compute."
  },
  {
    id: 3,
    front: "What is PaaS (Platform as a Service)?",
    back: "Cloud provides platform for developing and running applications. Customer manages applications and data only. Examples: Heroku, Google App Engine, Azure App Service."
  },
  {
    id: 4,
    front: "What is SaaS (Software as a Service)?",
    back: "Cloud provides complete applications. Customer only manages data and user access. Examples: Office 365, Salesforce, Gmail, Dropbox."
  },
  {
    id: 5,
    front: "What is the Shared Responsibility Model?",
    back: "Defines security responsibilities between cloud provider and customer. Provider secures infrastructure, customer secures what they control. Varies by service model."
  },
  {
    id: 6,
    front: "In IaaS, what is the customer responsible for?",
    back: "Operating system, applications, data, identity management, network controls, endpoint security. Provider handles physical infrastructure and virtualization."
  },
  {
    id: 7,
    front: "In SaaS, what is the customer responsible for?",
    back: "Data and user access management only. Provider handles everything else - infrastructure, platform, application, patching. Least customer responsibility."
  },
  {
    id: 8,
    front: "In PaaS, what is the customer responsible for?",
    back: "Applications and data. Provider handles infrastructure, OS, runtime, middleware. Customer focuses on code and data security."
  },
  {
    id: 9,
    front: "What is a Public Cloud?",
    back: "Cloud resources shared among multiple organizations over internet. Provider owns and manages infrastructure. Most cost-effective. Examples: AWS, Azure, GCP."
  },
  {
    id: 10,
    front: "What is a Private Cloud?",
    back: "Cloud infrastructure dedicated to single organization. Can be on-premises or hosted. More control and security but higher cost. Used for sensitive workloads."
  },
  {
    id: 11,
    front: "What is a Hybrid Cloud?",
    back: "Combination of public and private clouds. Data and applications can move between them. Balances security needs with cost efficiency and scalability."
  },
  {
    id: 12,
    front: "What is a Community Cloud?",
    back: "Cloud shared by organizations with common concerns (compliance, security, mission). Shared costs and infrastructure. Example: government community clouds."
  },
  {
    id: 13,
    front: "What is a CASB (Cloud Access Security Broker)?",
    back: "Security policy enforcement point between users and cloud services. Provides visibility, compliance, data security, threat protection for cloud usage."
  },
  {
    id: 14,
    front: "What does a CASB do?",
    back: "Discovers shadow IT, enforces DLP policies, provides SSO, monitors user activity, detects malware, ensures compliance. Gatekeeper for cloud access."
  },
  {
    id: 15,
    front: "What is a Next-Gen Secure Web Gateway (SWG)?",
    back: "Protects users accessing internet/cloud. Combines URL filtering, malware protection, DLP, CASB functions. Secures web traffic regardless of user location."
  },
  {
    id: 16,
    front: "What is Cloud Security Posture Management (CSPM)?",
    back: "Automated tool to identify cloud misconfigurations and compliance risks. Continuously monitors cloud environments. Alerts on security issues."
  },
  {
    id: 17,
    front: "What is the most common cloud security threat?",
    back: "Misconfiguration. Public storage buckets, overly permissive IAM, exposed management interfaces. Often from shared responsibility confusion."
  },
  {
    id: 18,
    front: "What is Account Hijacking in cloud?",
    back: "Attacker gains access to cloud account credentials. Can access all resources in that account. Prevented with MFA, strong passwords, monitoring."
  },
  {
    id: 19,
    front: "What are Insecure APIs?",
    back: "Cloud APIs with weak authentication, missing encryption, improper input validation. APIs are primary cloud interface - must be secured."
  },
  {
    id: 20,
    front: "What is Server-side Encryption in cloud storage?",
    back: "Cloud provider encrypts data after receiving it. Provider manages keys (or customer can). Data encrypted at rest in provider's infrastructure."
  },
  {
    id: 21,
    front: "What is Client-side Encryption in cloud storage?",
    back: "Data encrypted before sending to cloud. Customer controls keys. Provider never sees unencrypted data. Maximum data protection but customer manages keys."
  },
  {
    id: 22,
    front: "What is a Hypervisor?",
    back: "Software that creates and manages virtual machines. Allocates physical resources to VMs. Type 1 (bare metal) or Type 2 (hosted). Critical security component."
  },
  {
    id: 23,
    front: "What is VM Escape?",
    back: "Breaking out of virtual machine to access hypervisor or other VMs. Critical vulnerability - compromises entire virtualized environment. Rare but severe."
  },
  {
    id: 24,
    front: "What is a Container?",
    back: "Lightweight, isolated application package with code and dependencies. Shares host OS kernel. More efficient than VMs but different security model."
  },
  {
    id: 25,
    front: "What is Container Image Security?",
    back: "Ensuring container images are free from vulnerabilities. Scan images before deployment, use trusted base images, keep images updated, minimize image size."
  },
  {
    id: 26,
    front: "What is Container Runtime Security?",
    back: "Protecting containers during execution. Monitor behavior, limit privileges, network policies, resource limits, detect anomalies. Containers can be compromised at runtime."
  },
  {
    id: 27,
    front: "What is Kubernetes?",
    back: "Container orchestration platform. Manages container deployment, scaling, networking. Requires security: RBAC, network policies, secrets management, pod security."
  },
  {
    id: 28,
    front: "What are cloud-specific IAM best practices?",
    back: "Least privilege, no root/admin for daily use, MFA required, regular access reviews, use roles not users for applications, monitor and log all access."
  },
  {
    id: 29,
    front: "What is a Storage Bucket misconfiguration?",
    back: "Cloud storage (S3, Blob) accidentally set to public access. Exposes sensitive data to internet. Common cause of data breaches. Always verify access settings."
  },
  {
    id: 30,
    front: "What questions should you ask about cloud security?",
    back: "Where is data stored? Who has access? How is it encrypted? What's provider's responsibility vs ours? Compliance certifications? Incident response process?"
  }
];