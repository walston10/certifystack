export const lesson15Quiz = [
  {
    id: 1,
    question: "A company uses AWS EC2 for virtual servers. According to the shared responsibility model, who is responsible for patching the guest operating system?",
    options: [
      "AWS (cloud provider)",
      "The customer - guest OS patching is customer responsibility in IaaS",
      "Shared equally",
      "Neither - it's automatic"
    ],
    correct: 1,
    explanation: "In the SHARED RESPONSIBILITY MODEL, the customer is responsible for guest OS patching in IaaS. Responsibility division in IaaS: (1) PROVIDER (AWS) - physical security, hypervisor, network infrastructure, (2) CUSTOMER - guest OS, applications, data, access management, encryption. Model varies by service type: (1) IaaS - customer manages OS up (most responsibility), (2) PaaS - provider manages through OS, customer manages app/data, (3) SaaS - provider manages almost everything, customer manages access/data. Common customer responsibilities across all: (1) Identity and access management, (2) Data classification and protection, (3) Client-side encryption, (4) Network traffic protection. Understanding shared responsibility is critical - many cloud breaches result from customers assuming provider handles something they don't."
  },
  {
    id: 2,
    question: "An organization uses Office 365 for email and collaboration. In this SaaS model, which security responsibility still falls primarily on the customer?",
    options: [
      "Physical data center security",
      "User access management and data classification",
      "Application patching",
      "Network infrastructure"
    ],
    correct: 1,
    explanation: "In SaaS, customers remain responsible for USER ACCESS MANAGEMENT and DATA CLASSIFICATION. SaaS customer responsibilities: (1) User provisioning/deprovisioning, (2) Access policies and MFA, (3) Data classification, (4) Data sharing settings, (5) Configuration settings, (6) Monitoring user activity. SaaS provider responsibilities: (1) Application security, (2) Infrastructure, (3) Patching, (4) Availability. Common SaaS security mistakes: (1) Overly permissive sharing, (2) No MFA enabled, (3) Orphaned accounts (former employees), (4) Not configuring available security features. Even in SaaS, security incidents often result from customer configuration/access issues, not provider failures. Review SaaS security settings - many have security features disabled by default."
  },
  {
    id: 3,
    question: "A security team discovers that an S3 bucket containing customer data was publicly accessible due to misconfigured permissions. What type of cloud vulnerability is this?",
    options: [
      "Zero-day vulnerability",
      "Cloud misconfiguration - incorrect settings exposing resources",
      "Provider security failure",
      "Encryption weakness"
    ],
    correct: 1,
    explanation: "CLOUD MISCONFIGURATION is the leading cause of cloud data breaches - incorrect settings expose resources. Common cloud misconfigurations: (1) Public storage buckets (S3, Azure Blob), (2) Overly permissive security groups, (3) Exposed databases, (4) Unrestricted outbound traffic, (5) Missing encryption, (6) Excessive IAM permissions. Why misconfigurations happen: (1) Complex permission models, (2) Rapid deployment without security review, (3) Default settings may be insecure, (4) Shadow IT bypassing security. Prevention: (1) Cloud Security Posture Management (CSPM), (2) Infrastructure as Code with security scanning, (3) Default-deny policies, (4) Regular configuration audits, (5) Block public access by default. Major breaches (Capital One, Twitch) resulted from misconfigurations. Customer responsibility under shared model."
  },
  {
    id: 4,
    question: "A company deploys a Cloud Access Security Broker (CASB) that sits between users and cloud services. What security functions does a CASB provide?",
    options: [
      "Physical security only",
      "Visibility, compliance, data security, and threat protection for cloud services",
      "Network routing",
      "Cloud storage only"
    ],
    correct: 1,
    explanation: "CASB (Cloud Access Security Broker) provides security visibility and control between users and cloud services. CASB functions - four pillars: (1) VISIBILITY - discover cloud apps in use, monitor activity, (2) COMPLIANCE - enforce policies, regulatory requirements, (3) DATA SECURITY - DLP, encryption, access control, (4) THREAT PROTECTION - detect anomalies, malware, compromised accounts. CASB deployment modes: (1) Forward proxy - inline for managed devices, (2) Reverse proxy - for any device accessing cloud, (3) API - direct integration with cloud services. Use cases: (1) Discover shadow IT (unknown cloud apps), (2) Enforce DLP on cloud data, (3) Detect risky user behavior, (4) Apply consistent policies across cloud services, (5) Meet compliance requirements. CASBs address visibility gap - organizations often don't know what cloud services are being used or what data is there."
  },
  {
    id: 5,
    question: "An organization requires that all cloud resources be created only in specific geographic regions to comply with data residency requirements. What cloud governance control addresses this?",
    options: [
      "Encryption",
      "Cloud policies/guardrails restricting resource locations",
      "Access logging",
      "Load balancing"
    ],
    correct: 1,
    explanation: "CLOUD POLICIES (Guardrails) enforce governance controls like restricting resource creation to specific regions. Data residency requirements: (1) GDPR - EU data may need to stay in EU, (2) Industry regulations - financial, healthcare, (3) Government requirements - national security, (4) Contractual obligations. Cloud policy implementations: (1) AWS Service Control Policies, (2) Azure Policy, (3) GCP Organization Policies. What policies can enforce: (1) Allowed regions, (2) Required encryption, (3) Required tagging, (4) Prohibited services, (5) Network restrictions. Benefits: (1) Prevent violations before they occur, (2) Automated compliance, (3) Consistent enforcement, (4) Audit trail. Data sovereignty is increasingly important - policies should be defined before cloud deployment. Policies are preventive controls - stop non-compliant resources from being created."
  },
  {
    id: 6,
    question: "A containerized application running in Kubernetes is found to be using a base image with known critical vulnerabilities. At what stage should this have been caught?",
    options: [
      "After production deployment",
      "During container image scanning in the CI/CD pipeline",
      "During user testing",
      "Never - containers don't have vulnerabilities"
    ],
    correct: 1,
    explanation: "CONTAINER IMAGE SCANNING should occur in CI/CD pipeline before deployment, catching vulnerabilities early. Container security layers: (1) BASE IMAGE - use minimal, trusted images, scan for vulnerabilities, (2) BUILD - scan during build, sign images, (3) REGISTRY - scan stored images, enforce policies, (4) RUNTIME - monitor running containers. Shift-left security: find issues early in development, not production. Image scanning checks: (1) Known CVEs in packages, (2) Misconfigurations, (3) Malware, (4) Secrets in images, (5) Compliance violations. Container-specific risks: (1) Vulnerable base images, (2) Excessive privileges, (3) Secrets exposure, (4) Container escape. Pipeline integration: (1) Scan on commit, (2) Block deployment of vulnerable images, (3) Continuous scanning of running containers. Registry should reject images that don't meet security standards."
  },
  {
    id: 7,
    question: "An attacker compromises a container and attempts to access the host operating system or other containers on the same host. What type of attack is this?",
    options: [
      "SQL injection",
      "Container escape/breakout - attempting to break container isolation",
      "Phishing",
      "DDoS"
    ],
    correct: 1,
    explanation: "CONTAINER ESCAPE occurs when attackers break out of container isolation to access host or other containers. Container isolation: containers share host kernel but should be isolated via namespaces, cgroups. Escape methods: (1) Kernel vulnerabilities (shared kernel is risk), (2) Misconfigured containers (privileged mode), (3) Mounted sensitive host paths, (4) Container runtime vulnerabilities. Impact: (1) Access to host system, (2) Access to other containers, (3) Pivot to broader network, (4) Data theft from other workloads. Prevention: (1) Don't run privileged containers, (2) Use read-only root filesystem, (3) Drop unnecessary capabilities, (4) Apply seccomp profiles, (5) Keep runtime patched, (6) Use container-optimized OS. Containers are less isolated than VMs - shared kernel is fundamental difference. Security contexts and policies limit what containers can do."
  },
  {
    id: 8,
    question: "A cloud administrator creates an IAM role with full administrative access 'to make things easier' for the development team. What security principle does this violate?",
    options: [
      "Separation of duties",
      "Least privilege - granting only necessary permissions",
      "Defense in depth",
      "Non-repudiation"
    ],
    correct: 1,
    explanation: "LEAST PRIVILEGE requires granting only the minimum permissions needed to perform required functions. Least privilege in cloud IAM: (1) Identify actual required permissions, (2) Grant only those specific permissions, (3) Use roles for specific functions, (4) Review and remove unused permissions. Why 'full admin for convenience' is dangerous: (1) Compromised credentials = full access, (2) Accidental destructive actions possible, (3) No accountability (everyone can do everything), (4) Compliance violations. IAM best practices: (1) Start with no permissions, add as needed, (2) Use predefined limited roles when possible, (3) Regular access reviews, (4) Separate roles for different functions, (5) Avoid long-term admin credentials. Cloud IAM misconfigurations (over-permissioning) is major attack vector. Attackers specifically look for overly permissive roles to exploit."
  },
  {
    id: 9,
    question: "A security team implements encryption for all data stored in cloud storage, with the customer managing the encryption keys rather than the cloud provider. What is this called?",
    options: [
      "Provider-managed encryption",
      "Customer-managed keys (CMK/BYOK) - customer controls encryption keys",
      "No encryption",
      "Transport encryption"
    ],
    correct: 1,
    explanation: "CUSTOMER-MANAGED KEYS (CMK/BYOK) means the customer controls encryption keys rather than the cloud provider. Encryption key options: (1) PROVIDER-MANAGED - provider generates and manages keys (easiest), (2) CUSTOMER-MANAGED (CMK) - customer manages keys in provider's KMS, (3) BYOK (Bring Your Own Key) - customer provides keys from external HSM, (4) HYOK (Hold Your Own Key) - keys never leave customer premises. CMK benefits: (1) Customer controls key access, (2) Can revoke access by disabling key, (3) Audit key usage, (4) Meet regulatory requirements. Considerations: (1) More complex management, (2) Key loss = data loss, (3) Backup and recovery critical. Use cases: regulated industries, sensitive data, compliance requirements (GDPR, HIPAA). CMK provides more control but more responsibility - balance based on requirements."
  },
  {
    id: 10,
    question: "A company uses multiple cloud providers (AWS, Azure, GCP) and needs consistent security policies across all of them. What approach helps manage multi-cloud security?",
    options: [
      "Separate tools for each cloud",
      "Cloud-agnostic security platform/CSPM for unified visibility and policy",
      "No security needed for multi-cloud",
      "Manual checks only"
    ],
    correct: 1,
    explanation: "CLOUD-AGNOSTIC SECURITY/CSPM platforms provide unified visibility and policy management across multiple clouds. Multi-cloud security challenges: (1) Different APIs and interfaces, (2) Different security configurations, (3) Inconsistent policies, (4) Visibility gaps, (5) Skill requirements for each platform. Cloud Security Posture Management (CSPM): (1) Unified dashboard across clouds, (2) Consistent policy enforcement, (3) Automated compliance checking, (4) Misconfiguration detection, (5) Remediation guidance. Multi-cloud security best practices: (1) Standardize policies across clouds, (2) Centralized identity management, (3) Unified monitoring and logging, (4) Cloud-agnostic security tools, (5) Consistent encryption standards. CSPM tools: Prisma Cloud, Wiz, Orca, native tools (AWS Security Hub, Azure Security Center) for single-cloud. Multi-cloud is reality for most enterprises - security approach must span all environments."
  },
  {
    id: 11,
    question: "An attacker uses stolen API keys found in a public GitHub repository to access a company's cloud resources. What security failure allowed this?",
    options: [
      "Network vulnerability",
      "Secrets exposure - API keys/credentials committed to code repository",
      "SQL injection",
      "Physical security failure"
    ],
    correct: 1,
    explanation: "SECRETS EXPOSURE in code repositories is a major cloud security risk - credentials accidentally committed to public repos. Common exposed secrets: (1) API keys, (2) Access tokens, (3) Database credentials, (4) Private keys, (5) Service account keys. How it happens: (1) Hardcoded credentials in code, (2) Configuration files committed, (3) Accidental commit of .env files, (4) Copy/paste errors. Prevention: (1) Secrets scanning in CI/CD (pre-commit hooks), (2) Secrets management systems (Vault, AWS Secrets Manager), (3) Environment variables (not in code), (4) GitGuardian, GitHub secret scanning, (5) Never hardcode credentials. Response if exposed: (1) Immediately rotate credentials, (2) Review logs for unauthorized access, (3) Remove from repository history (not just delete file), (4) Implement prevention measures. Attackers actively scan GitHub for exposed credentials - they will be found and exploited."
  },
  {
    id: 12,
    question: "A VM running in a cloud environment attempts to access the cloud metadata service at 169.254.169.254 to steal credentials. What attack technique is this?",
    options: [
      "Phishing",
      "Cloud metadata service attack - accessing instance metadata for credentials",
      "Buffer overflow",
      "ARP poisoning"
    ],
    correct: 1,
    explanation: "CLOUD METADATA SERVICE attacks target the instance metadata endpoint (169.254.169.254) to steal credentials. Metadata service contains: (1) Instance information, (2) IAM role credentials, (3) User data/scripts, (4) Network configuration. Attack scenarios: (1) SSRF vulnerability allows metadata access, (2) Compromised application queries metadata, (3) Container escape to host metadata. Famous: Capital One breach (2019) - SSRF to metadata = 100M records stolen. Protection: (1) IMDSv2 (requires session token), (2) Block metadata access where not needed, (3) Limit IAM role permissions, (4) Network segmentation, (5) Monitor metadata access. Cloud-specific attack vector - doesn't exist in traditional data centers. When deploying to cloud, metadata service security should be explicitly addressed."
  },
  {
    id: 13,
    question: "A company's cloud workloads are automatically scaled up during a suspected DDoS attack, resulting in massive unexpected bills. What cloud-specific risk does this represent?",
    options: [
      "Data breach",
      "Resource exhaustion/financial DoS - auto-scaling driving up costs",
      "Compliance violation",
      "Configuration error"
    ],
    correct: 1,
    explanation: "FINANCIAL DoS/Resource Exhaustion occurs when attacks trigger auto-scaling, creating massive bills. Cloud-specific risk: (1) Pay-per-use model means unlimited potential cost, (2) Auto-scaling responds to any load (including attacks), (3) Bills can spike dramatically, (4) May not have budget controls. Mitigation: (1) Set billing alerts/budgets, (2) Configure scaling limits (caps), (3) Implement rate limiting before scaling, (4) DDoS protection services (CloudFlare, AWS Shield), (5) Analyze traffic before scaling (legitimate vs attack). Other cloud financial risks: (1) Forgotten running resources, (2) Oversized instances, (3) Data egress costs, (4) Cryptomining on compromised resources. Cloud governance should include: cost monitoring, alerts, caps, regular review. Auto-scaling is useful but must be bounded to prevent runaway costs."
  },
  {
    id: 14,
    question: "A security architect implements a service mesh (like Istio) for microservices. What security benefit does a service mesh provide?",
    options: [
      "Physical security",
      "Mutual TLS, traffic policies, and observability for service-to-service communication",
      "Endpoint antivirus",
      "Email filtering"
    ],
    correct: 1,
    explanation: "SERVICE MESH provides security, observability, and traffic management for microservices communication. Service mesh security features: (1) MUTUAL TLS (mTLS) - encrypted, authenticated service-to-service traffic, (2) TRAFFIC POLICIES - control what services can communicate, (3) RATE LIMITING - prevent abuse, (4) OBSERVABILITY - see all traffic for security analysis. How service mesh works: sidecar proxy (like Envoy) deployed with each service, all traffic flows through proxy. Security benefits: (1) Zero-trust between services, (2) Automatic encryption (no code changes), (3) Policy enforcement, (4) Audit trail of all communication. Popular service meshes: Istio, Linkerd, Consul Connect. Use cases: microservices, Kubernetes environments, zero-trust implementation. Service mesh adds complexity but provides security controls that are otherwise difficult to implement consistently across many services."
  },
  {
    id: 15,
    question: "An organization wants to ensure that cloud resources can only be deployed if they meet security baselines (encryption enabled, public access blocked, etc.). What should they implement?",
    options: [
      "Manual review only",
      "Preventive cloud policies/guardrails that block non-compliant deployments",
      "Post-deployment scanning only",
      "No controls"
    ],
    correct: 1,
    explanation: "PREVENTIVE CLOUD POLICIES (Guardrails) block non-compliant resources from being created, enforcing security by default. Preventive vs Detective: (1) PREVENTIVE - stops non-compliant deployment (better), (2) DETECTIVE - finds issues after deployment (reactive). Policy examples: (1) Require encryption on all storage, (2) Block public IP assignment, (3) Require specific tags, (4) Allow only approved regions, (5) Require private endpoints. Implementation: (1) AWS Service Control Policies + Config Rules, (2) Azure Policy, (3) GCP Organization Policies, (4) Terraform Sentinel. Benefits: (1) Compliance by default, (2) Reduces remediation effort, (3) Consistent enforcement, (4) Developers can't bypass. Shift-left for cloud: enforce policies at deployment time, not after. Combine preventive policies with detective controls for comprehensive coverage."
  }
];