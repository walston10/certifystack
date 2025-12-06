// Lesson 16: Secure Network Design
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson16Flashcards = [
  {
    id: 1,
    front: "What is Network Device Hardening?",
    back: "Securing routers, switches, firewalls by changing defaults, disabling unused services, applying patches, configuring secure protocols, and implementing access controls."
  },
  {
    id: 2,
    front: "What are essential router hardening steps?",
    back: "Change default credentials, disable unused ports/services, enable encrypted management (SSH), configure ACLs, enable logging, update firmware, disable source routing."
  },
  {
    id: 3,
    front: "What is Switch Port Security?",
    back: "Limiting which devices can connect to switch ports. Based on MAC addresses. Can limit number of MACs, specify allowed MACs, or sticky learning. Prevents unauthorized access."
  },
  {
    id: 4,
    front: "What is 802.1X?",
    back: "Port-based network access control standard. Authenticates devices before granting network access. Uses EAP for authentication. Common for wired and wireless networks."
  },
  {
    id: 5,
    front: "What are the three 802.1X components?",
    back: "Supplicant (client requesting access), Authenticator (switch/AP controlling access), Authentication Server (RADIUS server verifying credentials)."
  },
  {
    id: 6,
    front: "What is a Supplicant in 802.1X?",
    back: "The client device requesting network access. Runs 802.1X client software. Provides credentials to authenticator. Must be authenticated before network access."
  },
  {
    id: 7,
    front: "What is the Authenticator in 802.1X?",
    back: "The switch or access point controlling network access. Acts as gatekeeper. Forwards authentication requests to RADIUS server. Blocks access until authenticated."
  },
  {
    id: 8,
    front: "What is NAC (Network Access Control)?",
    back: "Enforces security policies before granting network access. Checks device compliance (patches, antivirus, configuration). Can quarantine non-compliant devices."
  },
  {
    id: 9,
    front: "What is Posture Assessment in NAC?",
    back: "Evaluating device health before allowing network access. Checks antivirus status, patch level, firewall status, required software. Non-compliant devices remediated or quarantined."
  },
  {
    id: 10,
    front: "What is a Quarantine VLAN?",
    back: "Isolated network segment for non-compliant devices. Limited access for remediation only. Can access patch/update servers but not production network."
  },
  {
    id: 11,
    front: "Why use SSH instead of Telnet?",
    back: "SSH encrypts all traffic including credentials. Telnet sends everything in plaintext. SSH port 22, Telnet port 23. Never use Telnet for network management."
  },
  {
    id: 12,
    front: "Why use HTTPS instead of HTTP?",
    back: "HTTPS encrypts web traffic with TLS. HTTP is plaintext. Protects data in transit, verifies server identity. HTTPS port 443, HTTP port 80."
  },
  {
    id: 13,
    front: "Why use SFTP/FTPS instead of FTP?",
    back: "SFTP/FTPS encrypt file transfers. FTP sends credentials and data in plaintext. SFTP uses SSH (port 22), FTPS uses TLS (port 990 implicit, 21 explicit)."
  },
  {
    id: 14,
    front: "Why use SNMPv3 instead of v1/v2?",
    back: "SNMPv3 provides authentication, encryption, and message integrity. v1/v2 use community strings in plaintext. SNMPv3 is secure for network management."
  },
  {
    id: 15,
    front: "Why use LDAPS instead of LDAP?",
    back: "LDAPS encrypts directory service traffic with TLS. LDAP is plaintext including credentials. LDAPS port 636, LDAP port 389."
  },
  {
    id: 16,
    front: "What is SPF (Sender Policy Framework)?",
    back: "DNS record specifying which servers can send email for a domain. Receiving server checks if sender IP is authorized. Helps prevent email spoofing."
  },
  {
    id: 17,
    front: "What is DKIM (DomainKeys Identified Mail)?",
    back: "Email authentication using digital signatures. Sending server signs messages, receiving server verifies with public key in DNS. Proves email wasn't modified."
  },
  {
    id: 18,
    front: "What is DMARC (Domain-based Message Authentication)?",
    back: "Policy telling receivers what to do when SPF/DKIM fail. Options: none, quarantine, reject. Also provides reporting. Builds on SPF and DKIM."
  },
  {
    id: 19,
    front: "How do SPF, DKIM, and DMARC work together?",
    back: "SPF verifies sender server is authorized. DKIM verifies message integrity with signature. DMARC sets policy for failures and enables reporting. All three recommended."
  },
  {
    id: 20,
    front: "What is S/MIME?",
    back: "Standard for email encryption and digital signatures. Uses certificates for encryption and signing. Provides confidentiality, integrity, authentication for email."
  },
  {
    id: 21,
    front: "What is DNSSEC?",
    back: "DNS Security Extensions. Digitally signs DNS records to prevent tampering. Verifies DNS responses are authentic. Protects against DNS spoofing/poisoning."
  },
  {
    id: 22,
    front: "What is DNS Filtering?",
    back: "Blocking access to malicious or inappropriate domains at DNS level. If domain blocked, DNS doesn't resolve. Simple way to enforce web policies."
  },
  {
    id: 23,
    front: "What is DoH (DNS over HTTPS)?",
    back: "DNS queries encrypted over HTTPS (port 443). Prevents eavesdropping on DNS lookups. Looks like normal HTTPS traffic. Enhances privacy."
  },
  {
    id: 24,
    front: "What is DoT (DNS over TLS)?",
    back: "DNS queries encrypted with TLS on port 853. Prevents DNS eavesdropping. Easier for organizations to identify and manage than DoH."
  },
  {
    id: 25,
    front: "What is EDR (Endpoint Detection and Response)?",
    back: "Advanced endpoint security monitoring behavior, detecting threats, and enabling response. Goes beyond antivirus. Records activity for investigation. Enables rapid response."
  },
  {
    id: 26,
    front: "What is XDR (Extended Detection and Response)?",
    back: "Integrates security across endpoints, network, cloud, and email. Correlates data from multiple sources. Broader visibility than EDR alone."
  },
  {
    id: 27,
    front: "EDR vs XDR?",
    back: "EDR: endpoint-focused detection and response. XDR: extends across multiple security layers (network, cloud, email). XDR provides broader correlation and visibility."
  },
  {
    id: 28,
    front: "What is a Host-based Firewall?",
    back: "Firewall running on individual endpoint. Filters traffic to/from that specific host. Works with network firewalls for defense in depth. Examples: Windows Firewall, iptables."
  },
  {
    id: 29,
    front: "What is DLP (Data Loss Prevention)?",
    back: "Technology preventing unauthorized data transfer. Monitors and blocks sensitive data leaving organization. Can inspect email, web, USB, cloud uploads."
  },
  {
    id: 30,
    front: "What is HIDS (Host-based Intrusion Detection)?",
    back: "IDS running on individual hosts. Monitors system logs, file integrity, processes. Detects attacks on specific system. Complements network IDS."
  }
];