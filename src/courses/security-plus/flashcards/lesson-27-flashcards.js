// Lesson 27: Security Automation and Scripting
// Security+ (SY0-701) - Domain 4.0: Security Operations

export const lesson27Flashcards = [
  {
    id: 1,
    front: "Why is Security Automation important?",
    back: "Handles repetitive tasks faster and consistently. Reduces human error. Scales with threat volume. Frees analysts for complex work. Speeds incident response."
  },
  {
    id: 2,
    front: "What are the benefits of automation in security?",
    back: "Consistency (same every time), Speed (faster than manual), Scalability (handles volume), Reduced errors, Cost savings, 24/7 operation, Audit trail."
  },
  {
    id: 3,
    front: "What is User Provisioning automation?",
    back: "Automatically creating accounts and granting access when employees join. Ensures consistent permissions. Integrates with HR systems. Reduces manual errors."
  },
  {
    id: 4,
    front: "What is User Deprovisioning automation?",
    back: "Automatically removing access when employees leave. Triggered by HR termination. Prevents orphaned accounts. Critical security control. Timely access removal."
  },
  {
    id: 5,
    front: "What are Guard Rails in automation?",
    back: "Automated policy enforcement preventing misconfigurations. Blocks non-compliant deployments. Example: preventing public S3 buckets. Proactive security control."
  },
  {
    id: 6,
    front: "How can firewall rules be automated?",
    back: "Automatically block IPs from threat feeds. Update rules based on SIEM alerts. Integrate with SOAR playbooks. Consistent rule deployment across devices."
  },
  {
    id: 7,
    front: "What is automated ticket creation?",
    back: "Automatically generating incident tickets from alerts. Includes relevant details, severity, affected systems. Ensures nothing missed. Integrates SIEM with ticketing."
  },
  {
    id: 8,
    front: "What is automated escalation?",
    back: "Automatically routing incidents to appropriate team based on type/severity. Notifies management for critical incidents. Ensures timely response. Follows defined policies."
  },
  {
    id: 9,
    front: "What is CI/CD in security context?",
    back: "Continuous Integration/Continuous Deployment. Automated build, test, deploy pipeline. Security integrated throughout. Automated security testing before deployment."
  },
  {
    id: 10,
    front: "How does automation support CI/CD security?",
    back: "Automated vulnerability scanning, code analysis, compliance checks, security testing before deployment. Blocks insecure code from production. Shift-left security."
  },
  {
    id: 11,
    front: "What scripting languages are used for security automation?",
    back: "Python (most common), PowerShell (Windows), Bash (Linux), JavaScript. Choice depends on environment and use case."
  },
  {
    id: 12,
    front: "Why is Python popular for security?",
    back: "Easy to learn, extensive libraries, cross-platform, large security community, tools like Scapy, Requests, BeautifulSoup. Good for automation and tool development."
  },
  {
    id: 13,
    front: "When would you use PowerShell for security?",
    back: "Windows environment automation. Active Directory management, Windows event log analysis, endpoint configuration, Office 365 administration. Native to Windows."
  },
  {
    id: 14,
    front: "When would you use Bash scripting?",
    back: "Linux/Unix automation. Log analysis, system administration, network tools, cron jobs. Native to Linux. Quick scripts for command-line tasks."
  },
  {
    id: 15,
    front: "What is Infrastructure as Code (IaC)?",
    back: "Managing infrastructure through code files rather than manual configuration. Version controlled, repeatable, auditable. Examples: Terraform, CloudFormation, Ansible."
  },
  {
    id: 16,
    front: "How does IaC improve security?",
    back: "Consistent configurations, version control for audit trail, automated security checks, drift detection, rapid disaster recovery, documented infrastructure."
  },
  {
    id: 17,
    front: "What is Configuration Management?",
    back: "Automated enforcement of system configurations. Ensures systems match desired state. Detects and corrects drift. Tools: Ansible, Puppet, Chef, Salt."
  },
  {
    id: 18,
    front: "What is Configuration Drift?",
    back: "When system configurations deviate from defined baseline over time. Manual changes, patches, troubleshooting cause drift. Creates security inconsistencies."
  },
  {
    id: 19,
    front: "What is Automated Patching?",
    back: "Automatically deploying security patches to systems. Reduces time to patch. Ensures consistent coverage. Must include testing and rollback capabilities."
  },
  {
    id: 20,
    front: "What is SOAR?",
    back: "Security Orchestration, Automation, and Response. Platform integrating security tools, automating workflows, enabling rapid response. Extends SIEM capabilities."
  },
  {
    id: 21,
    front: "What are SOAR Playbooks?",
    back: "Predefined automated response workflows. Triggered by specific alerts. Series of automated actions. Example: phishing response playbook automatically analyzes, blocks, notifies."
  },
  {
    id: 22,
    front: "What is Orchestration in SOAR?",
    back: "Coordinating multiple security tools to work together. SOAR connects SIEM, firewall, EDR, threat intel. Unified response across tools."
  },
  {
    id: 23,
    front: "What can SOAR automate?",
    back: "Alert enrichment, threat intel lookups, IOC blocking, user notification, ticket creation, containment actions, evidence collection. Repetitive analyst tasks."
  },
  {
    id: 24,
    front: "What is an API (Application Programming Interface)?",
    back: "Interface allowing software to communicate. Security tools expose APIs for automation. Enables integration and scripting. Foundation for automation."
  },
  {
    id: 25,
    front: "What is API Security?",
    back: "Protecting APIs from abuse. Authentication, authorization, input validation, rate limiting, encryption. APIs are attack targets - must be secured."
  },
  {
    id: 26,
    front: "How should APIs be authenticated?",
    back: "API keys, OAuth tokens, certificates. Never hardcode credentials in scripts. Use secrets management. Rotate keys regularly. Least privilege for API access."
  },
  {
    id: 27,
    front: "What is Rate Limiting for APIs?",
    back: "Restricting number of API requests in time period. Prevents abuse, DoS, brute force. Example: 100 requests per minute. Returns error when exceeded."
  },
  {
    id: 28,
    front: "What is Input Validation for APIs?",
    back: "Verifying API input before processing. Check data type, length, format, range. Prevents injection attacks. Never trust client input."
  },
  {
    id: 29,
    front: "What risks come with security automation?",
    back: "Automated mistakes at scale, secrets exposure in code, over-reliance on automation, lack of human judgment, false positive actions. Need proper testing and oversight."
  },
  {
    id: 30,
    front: "What is a Runbook vs Playbook?",
    back: "Often used interchangeably. Runbook: typically step-by-step procedures (may be manual). Playbook: usually automated response workflows. Both document response procedures."
  }
];