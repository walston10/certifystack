// Lesson 11: Vulnerability Types
// Security+ (SY0-701) - Domain 2.0: Threats, Vulnerabilities, and Mitigations

export const lesson11Flashcards = [
  {
    id: 1,
    front: "What is a Vulnerability?",
    back: "A weakness that can be exploited by a threat to gain unauthorized access or cause harm. Can exist in software, hardware, configurations, or processes."
  },
  {
    id: 2,
    front: "What is Memory Injection?",
    back: "Inserting malicious code into a running process's memory space. Allows attacker to execute code in context of trusted application. Includes DLL injection."
  },
  {
    id: 3,
    front: "What is a Buffer Overflow vulnerability?",
    back: "Application doesn't properly validate input length, allowing data to overflow into adjacent memory. Can crash application or enable code execution."
  },
  {
    id: 4,
    front: "What is a Race Condition vulnerability?",
    back: "Flaw where system behavior depends on timing of uncontrollable events. Attacker exploits gap between security check and resource use."
  },
  {
    id: 5,
    front: "What is Improper Error Handling?",
    back: "Application reveals sensitive information in error messages. Stack traces, database errors, or file paths help attackers understand system internals."
  },
  {
    id: 6,
    front: "What is Improper Input Handling?",
    back: "Failing to validate, sanitize, or filter user input. Root cause of injection attacks. Never trust user input - always validate."
  },
  {
    id: 7,
    front: "What are common Operating System vulnerabilities?",
    back: "Unpatched systems, default configurations, open permissions, unnecessary services running, outdated software, missing security updates."
  },
  {
    id: 8,
    front: "Why are unpatched systems vulnerable?",
    back: "Known vulnerabilities have public exploits. Attackers scan for unpatched systems. Patch Tuesday becomes Exploit Wednesday. Critical to patch promptly."
  },
  {
    id: 9,
    front: "What risks do default configurations pose?",
    back: "Default passwords are publicly known. Default settings prioritize ease over security. Unnecessary services enabled. Must harden systems before deployment."
  },
  {
    id: 10,
    front: "What are common Web Application vulnerabilities?",
    back: "Injection flaws, broken authentication, sensitive data exposure, XSS, security misconfigurations, broken access control. See OWASP Top 10."
  },
  {
    id: 11,
    front: "What is Broken Authentication?",
    back: "Weak or improperly implemented authentication. Includes weak passwords, credential exposure, session fixation, missing MFA, improper session management."
  },
  {
    id: 12,
    front: "What is Sensitive Data Exposure?",
    back: "Failing to properly protect sensitive data. Unencrypted transmission, weak encryption, improper key management, exposing data in logs or errors."
  },
  {
    id: 13,
    front: "What is Broken Access Control?",
    back: "Users can access resources beyond their permissions. Includes IDOR (Insecure Direct Object References), privilege escalation, missing function-level access control."
  },
  {
    id: 14,
    front: "What are Hardware vulnerabilities?",
    back: "Firmware vulnerabilities, end-of-life hardware without updates, legacy hardware with known flaws, physical tampering, side-channel attacks."
  },
  {
    id: 15,
    front: "What is a Firmware vulnerability?",
    back: "Security flaw in device firmware (BIOS, UEFI, device firmware). Can persist through OS reinstalls. Often overlooked in patching programs."
  },
  {
    id: 16,
    front: "Why is End-of-Life hardware risky?",
    back: "No longer receives security updates from vendor. Known vulnerabilities will never be patched. Must be replaced or isolated from network."
  },
  {
    id: 17,
    front: "What is VM Escape?",
    back: "Breaking out of virtual machine to access hypervisor or other VMs. Extremely serious - compromises entire virtualized environment."
  },
  {
    id: 18,
    front: "What is Resource Reuse vulnerability in virtualization?",
    back: "Sensitive data from previous VM persists in memory or storage allocated to new VM. Must properly sanitize resources between tenants."
  },
  {
    id: 19,
    front: "What is a Side-channel Attack?",
    back: "Extracting information through indirect means - timing, power consumption, electromagnetic emissions, cache behavior. Examples: Spectre, Meltdown."
  },
  {
    id: 20,
    front: "What are common Cloud vulnerabilities?",
    back: "Misconfigurations (public S3 buckets), improper key management, insecure APIs, shared responsibility confusion, insufficient access controls."
  },
  {
    id: 21,
    front: "What is the most common cloud vulnerability?",
    back: "Misconfiguration. Public storage buckets, overly permissive IAM policies, exposed management interfaces. Often due to shared responsibility confusion."
  },
  {
    id: 22,
    front: "What are Cryptographic vulnerabilities?",
    back: "Weak algorithms (MD5, SHA-1, DES), short key lengths, implementation flaws, poor key management, downgrade attacks, using encryption incorrectly."
  },
  {
    id: 23,
    front: "What is a Downgrade Attack?",
    back: "Forcing system to use weaker, vulnerable protocol version. Attacker manipulates negotiation to downgrade TLS 1.3 to TLS 1.0, for example."
  },
  {
    id: 24,
    front: "What are Supply Chain vulnerabilities?",
    back: "Risks from vendors, suppliers, or third-party code. Compromised software updates, malicious hardware components, vulnerable dependencies."
  },
  {
    id: 25,
    front: "What is a Software Supply Chain attack?",
    back: "Compromising software development or distribution. Injecting malware into legitimate updates (SolarWinds), poisoning code repositories, compromising build systems."
  },
  {
    id: 26,
    front: "What is a Hardware Supply Chain attack?",
    back: "Tampering with hardware during manufacturing or shipping. Implanting backdoors in chips, modifying firmware, intercepting and modifying devices in transit."
  },
  {
    id: 27,
    front: "What is a Zero-day vulnerability?",
    back: "Unknown vulnerability with no available patch. 'Zero days' since vendor learned of it. Extremely valuable to attackers. No defense except detection."
  },
  {
    id: 28,
    front: "Why are Zero-days so dangerous?",
    back: "No patch exists, signature-based detection fails, defender has no advance warning. Only behavioral detection and defense-in-depth help."
  },
  {
    id: 29,
    front: "What is Security Misconfiguration?",
    back: "Improper security settings creating vulnerabilities. Default credentials, unnecessary features enabled, verbose errors, missing patches, improper permissions."
  },
  {
    id: 30,
    front: "What is the OWASP Top 10?",
    back: "List of most critical web application security risks. Updated periodically. Includes injection, broken auth, sensitive data exposure, XSS, misconfigurations. Industry standard reference."
  }
];