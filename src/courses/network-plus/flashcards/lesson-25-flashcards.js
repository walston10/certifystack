// Flashcards for Lesson 25: Network Segmentation and Zero Trust

export const lesson25Flashcards = [
  {
    id: 1,
    front: "What is network segmentation and why is it important?",
    back: "Network segmentation divides network into smaller isolated segments. Benefits: 1) Security (contain breaches, limit lateral movement), 2) Performance (smaller broadcast domains, less congestion), 3) Compliance (isolate sensitive data - PCI, HIPAA), 4) Management (organize by function/department). Attack containment: if one segment compromised, others protected. Flatter network = easier for attackers. Segmentation is fundamental security control. Defense in depth principle."
  },
  {
    id: 2,
    front: "What are the three main methods of network segmentation?",
    back: "VLANs (Virtual LANs): logical segmentation on switches, Layer 2, flexible, cost-effective. Subnets: IP-based segmentation, Layer 3, requires routing between segments. Physical segmentation: separate switches/networks, highest isolation, most expensive, less flexible. Often combined: VLANs + subnets together (each VLAN = subnet). Choose based on: security requirements, budget, existing infrastructure. Most enterprises use VLANs + subnets."
  },
  {
    id: 3,
    front: "How do VLANs provide network segmentation?",
    back: "VLANs create logical separation on same physical switch. Devices in different VLANs can't communicate without routing through Layer 3 device (router/L3 switch). Benefits: flexible (software-based), cost-effective (one switch, multiple segments), centrally managed. Each VLAN = separate broadcast domain. Example: VLAN 10 (Sales), VLAN 20 (HR), VLAN 30 (IT). Inter-VLAN traffic controlled by firewall/ACLs. Isolates sensitive departments."
  },
  {
    id: 4,
    front: "How do subnets provide network segmentation?",
    back: "Subnets divide IP address space into separate Layer 3 networks. Different subnets require routing to communicate (control point for filtering). Example: 10.1.10.0/24 (Sales), 10.1.20.0/24 (HR), 10.1.30.0/24 (Servers). Each subnet: different IP range, separate broadcast domain. Firewall/ACL between subnets controls traffic. Often maps 1:1 with VLANs. Layer 3 segmentation complements Layer 2 (VLANs). Enables routing policies."
  },
  {
    id: 5,
    front: "What is physical segmentation?",
    back: "Physical segmentation uses separate hardware (switches, networks, cables) for each segment. Complete isolation: no shared infrastructure. Highest security: air-gap between segments. Use cases: classified networks, SCADA/ICS, extremely sensitive data, compliance requirements. Drawbacks: expensive (multiple devices), less flexible (hardware changes needed), complex management. Modern alternative: virtualization + microsegmentation. Still used for: highest security environments, air-gapped networks."
  },
  {
    id: 6,
    front: "What is a screened subnet (DMZ)?",
    back: "Screened subnet (DMZ) is isolated segment for public-facing servers. Sits between: external network (internet) and internal network. Contains: web servers, email servers, DNS, FTP. Two firewalls: external (internet → DMZ), internal (DMZ → internal). Purpose: if DMZ server compromised, internal network still protected. Internet can access DMZ services, DMZ cannot initiate to internal. Also called: perimeter network. Critical security architecture."
  },
  {
    id: 7,
    front: "What services typically go in a DMZ?",
    back: "Public-facing services: Web servers (HTTP/HTTPS), email servers (SMTP), public DNS servers, FTP/SFTP servers, VPN concentrators (termination point), proxy servers (reverse), API gateways. Never in DMZ: internal databases, file servers, domain controllers, internal applications. DMZ rule: services accessible from internet only. Internal resources stay internal. Compromise of DMZ server shouldn't expose internal data."
  },
  {
    id: 8,
    front: "What is internal network segmentation?",
    back: "Internal segmentation divides internal network into security zones. Common segments: user workstations, servers, management network, guest WiFi, IoT devices, databases, development/test. Benefits: limit lateral movement (compromised workstation can't reach servers), enforce least privilege, contain malware spread, compliance boundaries. Implementation: VLANs + firewall rules between segments. Modern approach: microsegmentation (even more granular). Flat networks are dangerous."
  },
  {
    id: 9,
    front: "Why separate guest networks from internal networks?",
    back: "Guest WiFi security risks: untrusted devices, malware, eavesdropping, bandwidth abuse, legal liability. Isolation required: separate VLAN/subnet, firewall rules block internal access, captive portal for auth/terms, bandwidth limits, internet-only access. Guest users get WiFi but can't: see internal resources, connect to corporate devices, access file shares, attack internal network. Must have: separate SSID, isolated network. Never let guests on corporate network."
  },
  {
    id: 10,
    front: "Why isolate IoT devices on separate network?",
    back: "IoT security problems: rarely updated, weak security, known vulnerabilities, large attack surface, compromised devices common. Isolation protects: IoT can't attack corporate network, corporate network isolated if IoT hacked, monitor/control IoT traffic separately. Examples: smart TVs, cameras, thermostats, printers, voice assistants. Many IoT devices phone home to vendors (privacy/security risk). Separate VLAN + strict firewall rules required. Treat IoT as untrusted."
  },
  {
    id: 11,
    front: "What is a management network (out-of-band management)?",
    back: "Management network is separate network for device administration. Physically/logically isolated from production. Access: administrative interfaces, console ports, IPMI/iLO, SSH/RDP for management. Benefits: if production network down, can still manage, attackers on production can't reach management, audit management access separately. Implementation: dedicated NICs, separate VLANs, jump hosts/bastion hosts. High-security requirement. Never expose management to production or internet."
  },
  {
    id: 12,
    front: "What is microsegmentation?",
    back: "Microsegmentation creates very granular security zones (application-level, even per-workload). Traditional: network/subnet-level segmentation. Micro: segment individual workloads, applications, or services. Implementation: software-defined networking, host-based firewalls, virtualization policies. Example: web tier can ONLY talk to app tier, app tier ONLY to database. Benefits: limits lateral movement, zero-trust architecture, works with dynamic environments (cloud). Next evolution beyond VLANs. Application-centric not network-centric."
  },
  {
    id: 13,
    front: "What is east-west traffic vs north-south traffic?",
    back: "North-south: traffic entering/leaving data center (client ↔ servers, internet ↔ network). Traditional focus of firewalls. East-west: traffic between servers/services within data center (server ↔ server, app ↔ database). Modern attack vector: lateral movement after initial breach. Problem: historically less filtered. Solution: microsegmentation filters east-west traffic. Most data center traffic is east-west. Need to secure both directions."
  },
  {
    id: 14,
    front: "What is Zero Trust security model?",
    back: "Zero Trust: 'never trust, always verify' - trust nothing by default, verify everything. Assumptions: breach is inevitable, internal network is not safe, identity is new perimeter. Principles: 1) Verify explicitly (continuous authentication), 2) Least privilege access (minimal permissions), 3) Assume breach (limit damage). Replaces: perimeter security (castle-and-moat). Implementation: microsegmentation, MFA everywhere, continuous monitoring. Modern security paradigm. Google BeyondCorp pioneered."
  },
  {
    id: 15,
    front: "What are the three core principles of Zero Trust?",
    back: "1) Verify explicitly: authenticate/authorize based on all available data (identity, location, device health, service, data classification). Continuous verification not once at login. 2) Least privilege access: just-in-time and just-enough access (JIT/JEA), limit user/app access, time-bound. 3) Assume breach: minimize blast radius, segment access, verify end-to-end encryption, analytics for visibility. Every access decision evaluated. No implicit trust based on network location."
  },
  {
    id: 16,
    front: "How does Zero Trust differ from traditional perimeter security?",
    back: "Traditional (castle-and-moat): strong perimeter, trust everything inside, weak internal controls, network location = trust. Zero Trust: no perimeter (or assume it's breached), verify every access, strong internal segmentation, identity-based not location-based. Traditional: firewall at edge, free movement inside. Zero Trust: micro-perimeters everywhere, segment everything, continuous authentication. Shift from: network-centric to identity/data-centric. Addresses: cloud, mobile, insider threats, breaches."
  },
  {
    id: 17,
    front: "What is Network Access Control (NAC)?",
    back: "NAC enforces security policy before granting network access. Checks: device compliance (antivirus updated, patched, authorized), user authentication, certificate validity, device type. Actions: allow (full access), quarantine (limited access for remediation), deny (block). Integration: 802.1X authentication, RADIUS, endpoint agents. Use cases: BYOD, contractor access, compliance, posture assessment. Ensures: only healthy, authorized devices connect. Pre-admission vs post-admission controls."
  },
  {
    id: 18,
    front: "What is posture assessment in NAC?",
    back: "Posture assessment evaluates device security health before network access. Checks: OS patches current, antivirus installed/updated, firewall enabled, disk encryption, unauthorized software, device configuration. Assessment methods: agent-based (installed software), agentless (network scan, limited). Actions based on results: pass (full access), quarantine VLAN (remediate first), block (too risky). Continuous monitoring: reassess periodically. Enforcement of: corporate security standards, compliance requirements. Prevents: compromised devices from connecting."
  },
  {
    id: 19,
    front: "What is a quarantine VLAN?",
    back: "Quarantine VLAN is restricted network segment for non-compliant devices. Limited access: remediation servers only (patch servers, antivirus updates, instructions), no production resources, no internet (or limited). Purpose: allow device to fix issues before full access granted. Example: outdated patches → quarantine VLAN → apply updates → reassess → grant access. Alternative to: denying access completely. Part of NAC implementation. Guest network is type of quarantine (permanent)."
  },
  {
    id: 20,
    front: "What are security zones in network design?",
    back: "Security zones group assets with similar security requirements. Common zones: Trusted (internal corporate network), Untrusted (internet), DMZ (public-facing servers), Management (admin access), Guest (visitors), Partner (B2B connections). Each zone: different access controls, monitoring levels, data sensitivity. Firewalls between zones control traffic. Zero Trust extends: microsegments within zones. Design principle: group similar trust levels, control boundaries. Clear policy per zone."
  },
  {
    id: 21,
    front: "What is a jump box/bastion host?",
    back: "Jump box is hardened server providing secure access point to management network or other security zone. Access model: admin connects to jump box first, then to managed systems from jump box. Security: MFA required, all access logged, no direct access to management zone from workstations, limited tools on jump box. Benefits: single point of monitoring, reduces attack surface, compliance logging. Placed between: trusted and less-trusted zones. Also called: jump server, bastion host."
  },
  {
    id: 22,
    front: "What is network segmentation for PCI DSS compliance?",
    back: "PCI DSS (Payment Card Industry Data Security Standard) requires: cardholder data environment (CDE) isolated from rest of network. CDE segmentation: separate VLAN/subnet, firewall controls all access to/from CDE, no direct internet access from CDE, logging all access, regular penetration testing. Reduces: PCI scope (fewer systems to audit), audit costs, risk. Components in CDE: payment systems, databases storing card data, point-of-sale. Proper segmentation = smaller compliance footprint."
  },
  {
    id: 23,
    front: "How does segmentation limit lateral movement?",
    back: "Lateral movement: attacker compromises one system, then moves to others (spreading infection, seeking valuable data). Segmentation limits: workstation can't reach servers directly, web tier can't access database directly (must go through app tier), compromised VLAN can't access others. Requires: routing through firewall, explicit allow rules. Without segmentation: flat network, attacker moves freely. Example: ransomware on one workstation spreads to file servers (flat network) vs blocked by segmentation. Containment strategy."
  },
  {
    id: 24,
    front: "What is software-defined segmentation?",
    back: "Software-defined segmentation uses software policies instead of physical/VLAN boundaries. Implementation: SDN controllers, hypervisor policies, host firewalls, container network policies. Benefits: dynamic (follows workloads in cloud/VMs), granular (per-application), automated, API-driven. Examples: VMware NSX, Cisco ACI, cloud security groups. Better for: cloud, containers, dynamic environments. Challenge: complexity, visibility. Evolution from: static VLANs to dynamic microsegmentation. Cloud-native approach."
  },
  {
    id: 25,
    front: "Quick scenario: Design segmentation for healthcare network. What zones are needed?",
    back: "Required zones: 1) Clinical systems (EMR, medical devices - VLAN), 2) Administrative (billing, HR - separate VLAN), 3) Guest WiFi (patients/visitors - isolated), 4) Medical IoT (infusion pumps, monitors - quarantined VLAN), 5) DMZ (patient portal, public website), 6) Management network (IT admin - out-of-band). Firewalls: between each zone. HIPAA compliance: audit all access to clinical zone, encrypt PHI, strong access controls. Prevent: guest access to EMR, IoT devices attacking clinical systems."
  },
  {
    id: 26,
    front: "What is continuous authentication in Zero Trust?",
    back: "Continuous authentication verifies identity throughout session, not just at login. Monitors: behavior patterns, device changes, location shifts, unusual access patterns. Actions on anomalies: step-up auth (require additional factor), revoke access, alert security. Traditional: authenticate once, trust until logout. Zero Trust: re-verify constantly. Example: login from US, suddenly request from China → re-authenticate. Enabled by: analytics, machine learning, context awareness. Assumes: credentials might be stolen."
  },
  {
    id: 27,
    front: "What is the principle of least privilege in network segmentation?",
    back: "Least privilege: grant minimum access necessary to perform job function, nothing more. Applied to: network access (segments allowed), application access, administrative rights, data access. Examples: HR can access HR systems only, developers can access dev environment only, users can't access server VLANs. Implementation: segmentation + ACLs + role-based policies. Limits: damage from compromise, insider threats, accidental errors. Default: deny everything, allow only what's needed. Requires: understanding workflows, documentation."
  },
  {
    id: 28,
    front: "How do you monitor traffic between network segments?",
    back: "Monitoring methods: 1) Firewall logs (what's allowed/denied between zones), 2) NetFlow/sFlow (traffic patterns, top talkers), 3) IDS/IPS (detect attacks crossing segments), 4) SIEM (correlate events across zones), 5) Network TAPs/SPAN (deep packet inspection). Monitor for: unexpected traffic between zones, policy violations, lateral movement attempts, data exfiltration. Baseline normal inter-segment traffic. Alert on anomalies. Visibility critical for Zero Trust."
  },
  {
    id: 29,
    front: "What are common network segmentation mistakes?",
    back: "Mistakes: 1) Too broad segments (large blast radius), 2) Allowing 'any any' between segments (defeats purpose), 3) Not monitoring traffic (can't detect breaches), 4) Inconsistent policies (gaps in coverage), 5) Flat management network (easy lateral movement), 6) Guest network not isolated (attacks internal), 7) IoT on corporate network (vulnerable devices), 8) No documentation (nobody understands design). Review and test segmentation regularly."
  },
  {
    id: 30,
    front: "Speed drill: Match concept to definition - Microsegmentation, Zero Trust, NAC, Quarantine VLAN, Jump box, East-west",
    back: "Microsegmentation: application-level isolation. Zero Trust: never trust, always verify. NAC: enforce policy before access. Quarantine VLAN: remediation network. Jump box: secure admin access point. East-west: server-to-server traffic. Know segmentation concepts for exam!"
  }
];