// Flashcards for Lesson 25: Network Segmentation and Zero Trust (SHORTENED)

export const lesson25Flashcards = [
  {
    id: 1,
    front: "What is network segmentation and why important?",
    back: "Divides network into smaller isolated segments. Benefits: security (contain breaches, limit lateral movement), performance (smaller broadcast domains), compliance (isolate sensitive data). Defense in depth."
  },
  {
    id: 2,
    front: "Three main methods of network segmentation?",
    back: "VLANs (logical, Layer 2, flexible), Subnets (IP-based, Layer 3, requires routing), Physical (separate switches/networks, highest isolation). Often combined: VLANs + subnets."
  },
  {
    id: 3,
    front: "How do VLANs provide segmentation?",
    back: "Logical separation on same switch. Devices in different VLANs can't communicate without routing. Each VLAN = separate broadcast domain. Flexible and cost-effective."
  },
  {
    id: 4,
    front: "How do subnets provide segmentation?",
    back: "Divide IP space into separate Layer 3 networks. Different subnets require routing. Firewall/ACL between subnets controls traffic. Often maps 1:1 with VLANs."
  },
  {
    id: 5,
    front: "What is physical segmentation?",
    back: "Separate hardware (switches, networks, cables) for each segment. Complete isolation. Highest security (air-gap). Use for classified networks, SCADA. Expensive, less flexible."
  },
  {
    id: 6,
    front: "What is a screened subnet (DMZ)?",
    back: "Isolated segment for public-facing servers. Sits between internet and internal network. Two firewalls: external and internal. If DMZ compromised, internal network protected."
  },
  {
    id: 7,
    front: "What services go in a DMZ?",
    back: "Public-facing: web servers, email servers, public DNS, FTP, VPN concentrators. Never: internal databases, file servers, domain controllers. DMZ rule: internet-accessible services only."
  },
  {
    id: 8,
    front: "What is internal network segmentation?",
    back: "Divides internal network into security zones: workstations, servers, management, guest WiFi, IoT, databases. Limits lateral movement. Implementation: VLANs + firewall rules."
  },
  {
    id: 9,
    front: "Why separate guest networks?",
    back: "Guest WiFi risks: untrusted devices, malware. Isolation: separate VLAN, firewall blocks internal access, internet-only. Guests can't see/access corporate resources. Separate SSID required."
  },
  {
    id: 10,
    front: "Why isolate IoT devices?",
    back: "IoT problems: rarely updated, weak security, known vulnerabilities. Isolation protects corporate network. Separate VLAN + strict firewall rules. Treat IoT as untrusted."
  },
  {
    id: 11,
    front: "What is a management network (out-of-band)?",
    back: "Separate network for device administration. Isolated from production. Access admin interfaces, console ports, SSH/RDP. If production down, can still manage. Never expose to internet."
  },
  {
    id: 12,
    front: "What is microsegmentation?",
    back: "Very granular security zones (application-level, per-workload). Example: web tier can ONLY talk to app tier. Implementation: SDN, host firewalls. Limits lateral movement. Application-centric not network-centric."
  },
  {
    id: 13,
    front: "East-west vs north-south traffic?",
    back: "North-south: traffic entering/leaving data center. East-west: traffic between servers within data center (lateral movement). Microsegmentation filters east-west. Most data center traffic is east-west."
  },
  {
    id: 14,
    front: "What is Zero Trust security model?",
    back: "'Never trust, always verify' - verify everything by default. Principles: verify explicitly, least privilege access, assume breach. Identity-based not location-based. Replaces perimeter security."
  },
  {
    id: 15,
    front: "Three core principles of Zero Trust?",
    back: "1) Verify explicitly (continuous authentication), 2) Least privilege access (JIT/JEA, minimal permissions), 3) Assume breach (limit damage, segment access). No implicit trust."
  },
  {
    id: 16,
    front: "Zero Trust vs traditional perimeter security?",
    back: "Traditional: strong perimeter, trust everything inside. Zero Trust: no perimeter, verify every access, strong internal segmentation, identity-based. Micro-perimeters everywhere."
  },
  {
    id: 17,
    front: "What is Network Access Control (NAC)?",
    back: "Enforces security policy before network access. Checks device compliance (AV, patches, authorized). Actions: allow, quarantine, deny. Integration: 802.1X, RADIUS. Ensures only healthy devices connect."
  },
  {
    id: 18,
    front: "What is posture assessment in NAC?",
    back: "Evaluates device security health before access. Checks: OS patches, antivirus, firewall, encryption. Actions: pass (full access), quarantine (remediate), block. Continuous monitoring."
  },
  {
    id: 19,
    front: "What is a quarantine VLAN?",
    back: "Restricted network for non-compliant devices. Limited access: remediation servers only (patches, AV updates). Device fixes issues before full access granted. Part of NAC."
  },
  {
    id: 20,
    front: "What are security zones?",
    back: "Group assets with similar security requirements. Common: Trusted (internal), Untrusted (internet), DMZ (public-facing), Management (admin), Guest, Partner. Firewalls between zones."
  },
  {
    id: 21,
    front: "What is a jump box/bastion host?",
    back: "Hardened server providing secure access point to management network. Admin connects to jump box first, then to managed systems. MFA required, all access logged. Single monitoring point."
  },
  {
    id: 22,
    front: "Network segmentation for PCI DSS compliance?",
    back: "Cardholder Data Environment (CDE) isolated from rest of network. Separate VLAN, firewall controls all CDE access, no direct internet, log all access. Reduces PCI scope and audit costs."
  },
  {
    id: 23,
    front: "How does segmentation limit lateral movement?",
    back: "Attacker compromises one system but can't move to others. Workstation can't reach servers directly. Traffic routes through firewall with explicit allow rules. Containment strategy."
  },
  {
    id: 24,
    front: "What is software-defined segmentation?",
    back: "Uses software policies vs physical/VLAN boundaries. Implementation: SDN controllers, hypervisor policies. Benefits: dynamic (follows workloads), granular (per-app), automated. Cloud-native approach."
  },
  {
    id: 25,
    front: "Design segmentation for healthcare network?",
    back: "Zones: Clinical systems (EMR, medical devices), Administrative, Guest WiFi, Medical IoT (quarantined), DMZ (patient portal), Management (out-of-band). Firewalls between zones. HIPAA compliance: audit clinical access."
  },
  {
    id: 26,
    front: "What is continuous authentication in Zero Trust?",
    back: "Verifies identity throughout session, not just at login. Monitors behavior, device, location. Actions on anomalies: step-up auth, revoke access. Re-verify constantly. Assumes credentials might be stolen."
  },
  {
    id: 27,
    front: "Principle of least privilege in segmentation?",
    back: "Grant minimum access necessary. HR accesses HR systems only. Implementation: segmentation + ACLs + role-based policies. Default: deny everything, allow only what's needed."
  },
  {
    id: 28,
    front: "How to monitor traffic between segments?",
    back: "Firewall logs, NetFlow/sFlow, IDS/IPS, SIEM, network TAPs. Monitor for unexpected traffic, policy violations, lateral movement, data exfiltration. Baseline normal. Alert on anomalies."
  },
  {
    id: 29,
    front: "Common network segmentation mistakes?",
    back: "Too broad segments, allowing 'any any' between segments, not monitoring traffic, inconsistent policies, flat management network, guest not isolated, IoT on corporate network, no documentation."
  },
  {
    id: 30,
    front: "Match: Microsegmentation / Zero Trust / NAC / Quarantine VLAN / Jump box / East-west",
    back: "Microsegmentation = application-level isolation. Zero Trust = never trust, always verify. NAC = enforce policy before access. Quarantine = remediation network. Jump box = secure admin access. East-west = server-to-server traffic."
  }
];