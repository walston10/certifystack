// Quiz for Lesson 25: Network Segmentation and Zero Trust

export const lesson25Quiz = [
  {
    id: 1,
    question: "A hospital network has patient medical devices, staff workstations, guest WiFi, and administrative servers all on the same flat network (single VLAN). What security risk does this flat network architecture create?",
    options: [
      "Better performance through simplified routing",
      "Lateral movement - if one device is compromised, the attacker can easily access all other systems without barriers",
      "Reduced administrative overhead and easier management",
      "Improved compatibility between different device types"
    ],
    correct: 1,
    explanation: "Flat network risks: 1) Lateral movement (attacker compromises one device, easily pivots to entire network), 2) Broadcast storms affect everything, 3) No isolation (guest WiFi on same network as patient data), 4) Compliance violations (HIPAA requires segmentation), 5) Single security perimeter (once inside, everything accessible). Segmentation benefits: 1) Limits blast radius, 2) Contains breaches, 3) Enforces least privilege, 4) Compliance (PCI-DSS, HIPAA require segmentation), 5) Performance (smaller broadcast domains). Solution: segment by function/security level—medical devices VLAN, staff VLAN, guest VLAN, admin VLAN, with firewalls/ACLs controlling inter-VLAN traffic."
  },
  {
    id: 2,
    question: "An organization implements VLANs to segment their network: VLAN 10 (HR), VLAN 20 (Finance), VLAN 30 (IT). However, security testing reveals that devices in HR can still access Finance servers despite being in different VLANs. What additional security control is needed?",
    options: [
      "VLANs alone provide complete isolation with no additional controls needed",
      "Inter-VLAN firewall rules or ACLs on the Layer 3 device to control traffic between VLANs",
      "More VLANs need to be created",
      "Physical separation of switches"
    ],
    correct: 1,
    explanation: "VLAN segmentation requires enforcement: VLANs provide logical separation but Layer 3 routing connects them. Without controls, any VLAN can reach any other VLAN. Enforcement methods: 1) Router ACLs (on inter-VLAN routing), 2) Firewall between VLANs, 3) Layer 3 switch with VLAN ACLs/security policies, 4) Private VLANs (further isolation). Example policy: HR VLAN can access: internet, email server, file server. HR VLAN cannot access: Finance VLAN, IT admin VLAN. Implementation: ACL on router/L3 switch denying HR-to-Finance, permitting specific required services. VLANs = isolation capability; ACLs/firewalls = enforcement. Segmentation without enforcement = false security."
  },
  {
    id: 3,
    question: "A company implements a DMZ (screened subnet) with public web servers. The security policy states that DMZ servers should never initiate connections to the internal network. What is the primary security benefit of this rule?",
    options: [
      "Improves web server performance",
      "If a DMZ server is compromised, the attacker cannot easily pivot to internal network resources since outbound connections are blocked",
      "Reduces network bandwidth usage",
      "Simplifies firewall configuration"
    ],
    correct: 1,
    explanation: "DMZ security principles: 1) Inbound from internet: only required services (HTTP/HTTPS to web server), 2) Outbound from DMZ to internet: minimal (updates, time sync—specific destinations), 3) DMZ to internal network: deny by default (prevents compromised DMZ server from attacking internal), 4) Internal to DMZ: limited management access. Compromise scenario without controls: attacker compromises web server → attacks internal database → steals data. With controls: compromised web server cannot initiate connections inbound—limits attacker's ability to pivot, exfiltrate data, or spread. Exception rules (carefully managed): web server to specific internal DB server on specific port, logging to SIEM. DMZ is sacrificial zone—assume compromise, limit damage."
  },
  {
    id: 4,
    question: "An organization adopts Zero Trust security architecture. A user successfully authenticates with username/password and is granted access to all network resources. What Zero Trust principle is being violated?",
    options: [
      "Zero Trust requires continuous verification and least privilege access—authentication is just the first step, not a permanent pass",
      "Zero Trust doesn't require authentication at all",
      "Single authentication is sufficient in Zero Trust",
      "Zero Trust only applies to external users"
    ],
    correct: 0,
    explanation: "Zero Trust principles: 1) 'Never trust, always verify' (continuous authentication/authorization), 2) Verify explicitly (use all data: identity, device, location, behavior), 3) Least privilege access (minimum required permissions per resource), 4) Assume breach (segment, limit blast radius), 5) Inspect and log everything. Traditional security: authenticate once at perimeter, trusted inside. Zero Trust: authenticate and authorize for every resource, every time. Continuous verification: check device posture, behavior anomalies, risk score, context (location, time). Session monitoring: unusual activity triggers re-authentication or block. No blanket trust: accessing email ≠ automatic access to file server. Each resource has own authentication/authorization check."
  },
  {
    id: 5,
    question: "A company wants to further segment their production VLAN to prevent lateral movement between application servers in the same VLAN. What advanced segmentation technique should they implement?",
    options: [
      "Create more VLANs for each individual server",
      "Microsegmentation using host-based firewalls, network policies, or software-defined networking to control traffic between individual workloads",
      "Use physical cables between servers",
      "Disable all communication between servers"
    ],
    correct: 1,
    explanation: "Microsegmentation: granular security policies down to workload/application level. Traditional segmentation: VLANs/subnets (coarse-grained—east-west traffic within VLAN unfiltered). Microsegmentation: control traffic between individual VMs/containers/hosts even in same VLAN. Implementation methods: 1) Host-based firewalls (rules on each host), 2) VMware NSX/Cisco ACI (SDN-based policies), 3) Kubernetes network policies, 4) Identity-based segmentation (not IP-based). Benefits: 1) Limits lateral movement (workload-to-workload filtering), 2) Zero Trust enabler, 3) Application-aware policies, 4) Cloud-native security. Use cases: multi-tier applications (web → app → DB, each tier isolated), container environments, preventing server-to-server attacks. Complexity: requires inventory, understanding dependencies, automation."
  },
  {
    id: 6,
    question: "An office network has a dedicated VLAN for IoT devices (cameras, door locks, thermostats). These devices need internet access but should not communicate with corporate workstations. What firewall rule set enforces this segmentation?",
    options: [
      "Allow all traffic from IoT VLAN to all networks",
      "IoT VLAN → Internet: permit; IoT VLAN → corporate VLANs: deny; Corporate → IoT VLAN: permit for management only",
      "Block all traffic from IoT VLAN completely",
      "No rules needed since they're in different VLANs"
    ],
    correct: 1,
    explanation: "IoT segmentation requirements: 1) IoT devices often have poor security (default passwords, unpatched firmware), 2) Don't need access to corporate data, 3) Require internet (cloud services, updates), 4) Need management access from IT. Segmentation strategy: Outbound from IoT VLAN: permit specific internet destinations (vendor clouds, NTP, DNS), deny all else. IoT to corporate: deny all (prevent lateral movement). Corporate to IoT: permit from IT management subnet to specific IoT devices/ports only. Implementation: dedicated VLAN (VLAN 40), firewall between VLANs, network access control (NAC) placing devices in correct VLAN. Additional controls: change default passwords, disable unused services, monitor anomalies, network IDS, firmware updates."
  },
  {
    id: 7,
    question: "A Zero Trust implementation requires devices to meet security standards before accessing network resources. A laptop with outdated antivirus attempts to connect. What Zero Trust component should prevent access?",
    options: [
      "The firewall automatically allows all authenticated devices",
      "Network Access Control (NAC) performing posture assessment to verify device compliance before granting network access",
      "DNS server blocks the device",
      "VPN concentrator handles all security checks"
    ],
    correct: 1,
    explanation: "NAC (Network Access Control) in Zero Trust: pre-admission control verifying device compliance. Posture assessment checks: 1) Antivirus installed and updated, 2) OS patches current, 3) Disk encryption enabled, 4) Firewall enabled, 5) Authorized software only, 6) No jailbreak/root. Non-compliant outcomes: 1) Deny access (strictest), 2) Quarantine VLAN (limited access to remediation), 3) Alert only (monitoring mode). NAC integration: 802.1X (port-based), agent-based (software on endpoint), agentless (network-based inspection), MDM/UEM (mobile devices). Zero Trust continuous assessment: post-admission monitoring, periodic re-checks, dynamic policy adjustment. BYOD challenge: personal devices must meet minimum standards. NAC vendors: Cisco ISE, Aruba ClearPass, ForeScout."
  },
  {
    id: 8,
    question: "A company segments their network by department but wants to allow guest WiFi users to access the internet while blocking access to all internal resources. What guest network isolation technique should be implemented?",
    options: [
      "Put guests on the corporate VLAN with all employees",
      "Dedicated guest VLAN with firewall rules blocking all RFC 1918 private address ranges and allowing only internet access",
      "Disable internet access for guests entirely",
      "Share corporate WiFi password with guests"
    ],
    correct: 1,
    explanation: "Guest network isolation: 1) Separate SSID/VLAN (VLAN 99), 2) Firewall rules: permit guest to internet (80, 443, DNS, DHCP), deny to private ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), 3) Captive portal (authentication, acceptable use), 4) Bandwidth limits, 5) Client isolation (guests can't see each other), 6) Separate internet uplink (optional). Additional security: content filtering, logging, time limits, daily password rotation, WPA3 encryption. Common mistakes: guests on corporate VLAN (security risk), overly permissive rules (access to internal), weak/no authentication (open network—security and compliance issues). Guest WiFi essential for: customer-facing businesses, conferences, visitors. Balance: usability vs security. Compliance: PCI-DSS requires guest network segmentation if handling cardholder data."
  },
  {
    id: 9,
    question: "A financial institution implements network segmentation to comply with PCI-DSS. The cardholder data environment (CDE) must be isolated from other networks. What is the primary compliance requirement for CDE segmentation?",
    options: [
      "CDE can be on the same network as general corporate systems",
      "CDE must be logically or physically segmented with controls limiting access only to systems that need it for business purposes",
      "Only encryption is required, not segmentation",
      "Segmentation is optional for PCI compliance"
    ],
    correct: 1,
    explanation: "PCI-DSS segmentation requirements: CDE (Cardholder Data Environment) must be isolated from out-of-scope systems. Reduces scope of compliance audit. Segmentation methods: 1) Network segmentation (VLANs, firewalls, routers with ACLs), 2) Physical segmentation (separate infrastructure), 3) Internal network firewalls, 4) Documented network diagrams, 5) Penetration testing validation. Controls: 1) Deny by default, 2) Explicit allow for required connections, 3) Log all access, 4) Regular review. CDE includes: systems that store/process/transmit cardholder data, databases, payment applications, point-of-sale. Flat network = entire environment in scope (expensive, complex). Proper segmentation = smaller scope, easier compliance. Validation: annual penetration testing proving segmentation effectiveness."
  },
  {
    id: 10,
    question: "An organization implements microsegmentation using identity-based policies rather than IP-based policies. A user moves to a different office with a different IP address. What happens to their access policies?",
    options: [
      "All access is lost and must be reconfigured for the new IP",
      "Access policies follow the user's identity regardless of IP address changes, maintaining consistent access",
      "The user must wait 24 hours for policies to update",
      "IP-based policies are the only option for microsegmentation"
    ],
    correct: 1,
    explanation: "Identity-based vs IP-based segmentation: IP-based: policies tied to IP addresses/subnets, breaks when: DHCP assigns new IP, user moves locations, cloud/mobile environments. Identity-based: policies tied to user/device identity (Active Directory, certificates, device IDs), portable across network changes. Benefits: 1) Works with mobile users, 2) Cloud-friendly (dynamic IPs), 3) Simpler policy management (define once per identity), 4) Context-aware (user + device + location). Implementation: 1) Identity-aware firewalls/proxies, 2) Software-defined perimeter (SDP), 3) ZTNA (Zero Trust Network Access), 4) Integration with identity providers (AD, Okta, Azure AD). Example: 'Finance group can access Financial DB' vs 'subnet 10.1.1.0/24 can access 10.2.2.5'. Identity-based policies critical for Zero Trust and modern hybrid environments."
  },
  {
    id: 11,
    question: "A company's Zero Trust implementation requires verification of device health, user identity, and location context before granting access to resources. A legitimate user on a compliant device attempts access from an unusual country. What should the Zero Trust system do?",
    options: [
      "Automatically grant access since the user is authenticated",
      "Apply additional verification (step-up authentication, geo-fencing policies) or deny access based on risk score and policy",
      "Block the user permanently",
      "Ignore location since only authentication matters"
    ],
    correct: 1,
    explanation: "Zero Trust risk-based access: continuous assessment of trust level based on multiple signals. Risk factors: 1) User identity (who), 2) Device posture (compliant, managed, trusted), 3) Location (geo-IP, impossible travel), 4) Time of access (unusual hours), 5) Behavior (anomaly detection), 6) Resource sensitivity. Risk scoring: low risk → grant, medium risk → step-up auth (additional MFA, security questions), high risk → deny/alert. Context-aware policies: Finance data access from overseas → require additional verification. Email access from known location → standard auth sufficient. Adaptive access control: adjust requirements dynamically. Example: user normally in USA suddenly accessing from Russia → likely compromise or shared credentials. Zero Trust doesn't block unconditionally—assesses risk, applies proportional controls. Balance: security vs user experience, false positives vs false negatives."
  },
  {
    id: 12,
    question: "An administrator creates separate management VLANs for network device administration (switches, routers, firewalls). What security benefit does out-of-band management provide?",
    options: [
      "Faster device configuration",
      "Management traffic is isolated from production traffic, preventing attacks from compromising management interfaces and maintaining access during production network issues",
      "Reduced hardware costs",
      "Automatic backups"
    ],
    correct: 1,
    explanation: "Out-of-band management: separate network for device administration. In-band: management over production network (same NICs, VLANs). Out-of-band: dedicated management network/interfaces. Benefits: 1) Security isolation (production breach doesn't expose management), 2) Availability (manage devices during production outages), 3) Reduced attack surface (management not accessible from production), 4) Performance (management traffic doesn't affect production). Implementation: 1) Dedicated management VLAN (VLAN 999), 2) Console servers (serial connections), 3) Management interfaces on devices (dedicated NIC), 4) Jump boxes (bastion hosts for admin access), 5) Strong authentication (different from production credentials). Access controls: management VLAN accessible only from IT admin subnet, VPN required for remote, MFA for management access. Critical infrastructure should have out-of-band management—lights-out management, IPMI/iLO, console servers."
  },
  {
    id: 13,
    question: "A Zero Trust architecture uses a policy decision point (PDP) and policy enforcement point (PEP) to control access to resources. What is the relationship between these components?",
    options: [
      "PDP and PEP are the same component",
      "PDP evaluates policies and makes access decisions; PEP enforces those decisions by allowing or blocking traffic",
      "Only PDP is needed for Zero Trust",
      "PEP makes all decisions independently"
    ],
    correct: 1,
    explanation: "Zero Trust architecture components: 1) Policy Engine (PE) / Policy Decision Point (PDP): evaluates policies, context, trust level, makes allow/deny decision. Inputs: identity, device posture, resource sensitivity, behavioral analytics, threat intelligence. 2) Policy Enforcement Point (PEP): enforces decisions from PDP, acts as gateway (proxy, firewall, ZTNA), allows or blocks access. Flow: user requests resource → PEP intercepts → queries PDP → PDP evaluates policy → PDP returns decision → PEP enforces (allow/deny/step-up auth). PEP examples: reverse proxy, API gateway, identity-aware proxy, cloud access security broker (CASB). Separation benefits: centralized policy (PDP), distributed enforcement (multiple PEPs), dynamic decisions (PDP queries multiple data sources), scalability. NIST SP 800-207 defines Zero Trust architecture—study for understanding components."
  },
  {
    id: 14,
    question: "An organization implements network segmentation but discovers that malware spread from the finance VLAN to the HR VLAN despite firewall rules blocking direct communication. Investigation reveals the malware spread through a shared file server accessible to both VLANs. What security concept does this illustrate?",
    options: [
      "Segmentation completely prevents all malware spread",
      "Shared services can create unintended paths between segments, requiring application-layer controls and least privilege access",
      "VLANs don't provide any security",
      "Firewalls cannot stop malware"
    ],
    correct: 1,
    explanation: "Segmentation challenges and bypasses: 1) Shared services (file servers, email, databases accessible to multiple segments), 2) Management networks (connecting multiple segments), 3) Backup systems, 4) User mobility (VPN, wireless), 5) Cloud services. Malware spread via shared service: Finance user infected → uploads to shared file server → HR user downloads → HR infected. Network segmentation alone insufficient. Additional controls needed: 1) Application-layer security (malware scanning on file server), 2) Least privilege (users only access needed files, not entire share), 3) Endpoint protection (detect malware before spreading), 4) Network IDS/IPS (detect lateral movement patterns), 5) Behavioral analytics, 6) Honeytokens/decoys. Defense in depth: multiple layers (network segmentation + endpoint + application + monitoring). Segmentation reduces attack surface but doesn't eliminate all paths—requires holistic security strategy."
  },
  {
    id: 15,
    question: "A company implements Zero Trust but IT administrators complain about repeatedly authenticating to every system they manage. What Zero Trust implementation maintains security while improving administrator experience?",
    options: [
      "Disable Zero Trust for administrators since they're trusted",
      "Use privileged access management (PAM) with just-in-time access, session recording, and credential vaulting to provide secure, streamlined admin access",
      "Give administrators permanent access to all systems",
      "Remove all authentication for IT staff"
    ],
    correct: 1,
    explanation: "Privileged access management (PAM) in Zero Trust: balances security and usability for administrators. PAM features: 1) Just-in-time (JIT) access: temporary elevation for specific tasks, automatic revocation, approval workflows. 2) Credential vaulting: admins never know passwords, PAM injects credentials, automatic rotation. 3) Session recording: audit trail of admin actions, compliance, forensics. 4) Step-up authentication: additional verification for sensitive operations. 5) Least privilege enforcement: only required access, time-limited. Benefits: 1) Reduces standing privileges (attack surface), 2) Credentials not exposed, 3) Accountability (who did what when), 4) Usability (SSO to PAM, then PAM handles individual system access). PAM solutions: CyberArk, BeyondTrust, Thycotic. Zero Trust doesn't mean constant interruption—means appropriate verification at appropriate times with automation reducing friction. Privileged accounts are highest-value targets—require strongest controls."
  }
];

// Export for use in quiz component
export default lesson25Quiz;