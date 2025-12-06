// Lesson 13: Mitigation Techniques
// Security+ (SY0-701) - Domain 2.0: Threats, Vulnerabilities, and Mitigations

export const lesson13Flashcards = [
  {
    id: 1,
    front: "What is Network Segmentation?",
    back: "Dividing a network into smaller, isolated segments. Limits lateral movement, contains breaches, improves performance. Implemented with VLANs, subnets, or firewalls."
  },
  {
    id: 2,
    front: "What is a VLAN?",
    back: "Virtual Local Area Network. Logically segments network at Layer 2. Devices in different VLANs can't communicate without routing. Common segmentation method."
  },
  {
    id: 3,
    front: "What is an Air Gap?",
    back: "Complete physical isolation from other networks. No network connection whatsoever. Used for highly sensitive systems. Most secure but least convenient."
  },
  {
    id: 4,
    front: "What is Microsegmentation?",
    back: "Granular segmentation down to individual workloads or applications. Software-defined, often in virtualized environments. Controls east-west traffic within data centers."
  },
  {
    id: 5,
    front: "What is East-West traffic?",
    back: "Traffic moving laterally within a network (server to server). Microsegmentation controls this. Traditional firewalls focus on North-South (in/out of network)."
  },
  {
    id: 6,
    front: "What is the Principle of Least Privilege?",
    back: "Users get minimum permissions needed for their job. Reduces damage from compromised accounts. Apply to users, applications, and services."
  },
  {
    id: 7,
    front: "What is RBAC (Role-Based Access Control)?",
    back: "Access based on job role/function. Users assigned to roles, roles have permissions. Easier to manage than individual permissions. Most common in enterprises."
  },
  {
    id: 8,
    front: "What is ABAC (Attribute-Based Access Control)?",
    back: "Access decisions based on attributes - user, resource, environment, action. More granular than RBAC. Example: 'HR staff can access HR files during business hours from office.'"
  },
  {
    id: 9,
    front: "What is Rule-based Access Control?",
    back: "Access based on predefined rules/conditions. If-then logic. Example: firewall rules allowing/blocking traffic based on IP, port, time. Not user-specific."
  },
  {
    id: 10,
    front: "RBAC vs ABAC?",
    back: "RBAC: simpler, role-based, good for stable organizations. ABAC: more granular, context-aware, flexible but complex. ABAC can incorporate RBAC as one attribute."
  },
  {
    id: 11,
    front: "What is Input Validation?",
    back: "Checking user input before processing. Verify type, length, format, range. First line of defense against injection attacks. Never trust user input."
  },
  {
    id: 12,
    front: "What are Parameterized Queries (Prepared Statements)?",
    back: "SQL queries with placeholders for user input. Database treats input as data, not code. Primary defense against SQL injection. Separates code from data."
  },
  {
    id: 13,
    front: "What is Output Encoding?",
    back: "Converting special characters before displaying to users. Prevents XSS by ensuring scripts display as text, not execute. Encode based on output context."
  },
  {
    id: 14,
    front: "What are Secure Coding Practices?",
    back: "Development guidelines to prevent vulnerabilities. Input validation, output encoding, proper error handling, least privilege, secure defaults, defense in depth."
  },
  {
    id: 15,
    front: "Why is Patching critical?",
    back: "Patches fix known vulnerabilities. Unpatched systems are easy targets. Attackers reverse-engineer patches to create exploits. Timely patching is essential."
  },
  {
    id: 16,
    front: "What should a Patch Management process include?",
    back: "Inventory systems, monitor for patches, test before deployment, schedule maintenance windows, deploy systematically, verify success, document changes."
  },
  {
    id: 17,
    front: "What is Firmware Updating?",
    back: "Updating low-level software in hardware devices. Often overlooked but critical. Includes BIOS/UEFI, network devices, IoT. Can fix security vulnerabilities."
  },
  {
    id: 18,
    front: "What is Data at Rest encryption?",
    back: "Encrypting stored data - hard drives, databases, backups. Protects against physical theft. Examples: BitLocker, FileVault, database encryption."
  },
  {
    id: 19,
    front: "What is Data in Transit encryption?",
    back: "Encrypting data moving across networks. Protects against eavesdropping and MITM. Examples: TLS/HTTPS, VPN, SSH, encrypted email."
  },
  {
    id: 20,
    front: "What is Data in Use encryption?",
    back: "Protecting data while being processed in memory. Most challenging state to protect. Technologies: secure enclaves, homomorphic encryption (emerging)."
  },
  {
    id: 21,
    front: "What is Configuration Hardening?",
    back: "Securing systems by reducing attack surface. Disable unnecessary services, change defaults, remove unused software, apply security settings, close unused ports."
  },
  {
    id: 22,
    front: "What is a Security Baseline?",
    back: "Standard secure configuration template. Applied consistently across similar systems. Based on industry standards (CIS Benchmarks, DISA STIGs). Starting point for hardening."
  },
  {
    id: 23,
    front: "What are CIS Benchmarks?",
    back: "Configuration guidelines from Center for Internet Security. Consensus-based best practices for hardening. Available for OS, applications, cloud platforms. Industry standard."
  },
  {
    id: 24,
    front: "What should be disabled during hardening?",
    back: "Unnecessary services, unused ports, default accounts, guest access, unnecessary protocols, remote management (if not needed), autorun features."
  },
  {
    id: 25,
    front: "What is Decommissioning?",
    back: "Securely retiring systems or assets. Includes data sanitization, removing from network, revoking access, documenting disposal. Prevents data leakage from old systems."
  },
  {
    id: 26,
    front: "What is Data Sanitization?",
    back: "Removing data from media before disposal or reuse. Methods: clearing (overwriting), purging (degaussing), destroying (physical destruction). Method depends on sensitivity."
  },
  {
    id: 27,
    front: "What is Degaussing?",
    back: "Using strong magnetic field to erase magnetic media. Destroys data on HDDs and tapes. Doesn't work on SSDs or flash storage. Renders media unusable."
  },
  {
    id: 28,
    front: "How do you securely dispose of SSDs?",
    back: "Secure erase command (built-in), encryption then destroy key, or physical destruction. Degaussing doesn't work on flash storage. Overwriting may not reach all cells."
  },
  {
    id: 29,
    front: "What is Change Management in mitigation?",
    back: "Formal process for making system changes. Prevents security issues from unauthorized changes. Includes approval, testing, documentation, rollback plans."
  },
  {
    id: 30,
    front: "How do mitigation techniques work together?",
    back: "Defense in depth - multiple layers. Segmentation contains breaches, access control limits damage, encryption protects data, patching closes vulnerabilities, hardening reduces attack surface."
  }
];