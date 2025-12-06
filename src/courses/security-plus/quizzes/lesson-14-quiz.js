export const lesson14Quiz = [
  {
    id: 1,
    question: "A company places their web servers in a network segment between two firewalls - one facing the internet and one facing the internal network. What is this network architecture called?",
    options: [
      "Internal network",
      "DMZ (Demilitarized Zone)/Screened subnet - isolated segment for public-facing services",
      "Guest network",
      "Management network"
    ],
    correct: 1,
    explanation: "DMZ (Screened Subnet) is an isolated network segment for public-facing services, protected by firewalls on both sides. DMZ architecture: (1) External firewall - filters internet traffic to DMZ, (2) DMZ segment - contains public services (web, email, DNS), (3) Internal firewall - filters traffic from DMZ to internal network. Purpose: (1) Expose necessary services to internet, (2) Protect internal network if DMZ compromised, (3) Limit attacker lateral movement, (4) Comply with security requirements. What goes in DMZ: web servers, mail servers, reverse proxies, VPN concentrators, public DNS. What stays internal: databases, domain controllers, internal applications, management systems. Two-firewall design is more secure than single firewall with three interfaces - compromise of one firewall doesn't expose internal network."
  },
  {
    id: 2,
    question: "A network uses private IP addresses internally (192.168.x.x) and translates them to a single public IP address when traffic goes to the internet. Multiple internal hosts share the same public IP using different port numbers. What technology is this?",
    options: [
      "Static NAT",
      "PAT (Port Address Translation)/NAT Overload - many-to-one translation using ports",
      "Dynamic NAT",
      "Port forwarding"
    ],
    correct: 1,
    explanation: "PAT (Port Address Translation), also called NAT Overload, allows multiple internal hosts to share one public IP using different port numbers. NAT types: (1) STATIC NAT - one-to-one permanent mapping (internal IP always maps to same public IP), (2) DYNAMIC NAT - one-to-one from pool (internal gets available public IP), (3) PAT/OVERLOAD - many-to-one using ports (most common). PAT operation: (1) Internal host (192.168.1.10:5000) connects to internet, (2) Router translates to public IP with unique port (203.0.113.1:40001), (3) Return traffic sent to 203.0.113.1:40001, (4) Router translates back to 192.168.1.10:5000. Security benefits: (1) Hides internal IP addresses, (2) Internal hosts not directly reachable from internet, (3) Conserves public IP addresses. PAT is default for most home/office networks."
  },
  {
    id: 3,
    question: "An organization implements a network architecture where the control plane (decision-making) is separated from the data plane (packet forwarding) and managed centrally through software. What is this architecture called?",
    options: [
      "Traditional networking",
      "SDN (Software-Defined Networking) - separating control plane for centralized management",
      "VLAN architecture",
      "Mesh networking"
    ],
    correct: 1,
    explanation: "SDN (Software-Defined Networking) separates the control plane from the data plane, enabling centralized, programmable network management. SDN components: (1) DATA PLANE - switches/routers that forward packets, (2) CONTROL PLANE - centralized controller making decisions, (3) APPLICATION PLANE - software defining network behavior. Traditional vs SDN: (1) Traditional - each device has own control plane, configured individually, (2) SDN - central controller, devices just forward as instructed. SDN security benefits: (1) Centralized policy enforcement, (2) Rapid, consistent security changes, (3) Granular microsegmentation, (4) Automated response to threats, (5) Better visibility. SDN security risks: (1) Controller is high-value target, (2) Misconfiguration affects entire network, (3) API security critical. OpenFlow is common SDN protocol. SDN enables security automation and dynamic response."
  },
  {
    id: 4,
    question: "A cloud-based application is designed so that each function runs independently, scales automatically, and executes only when triggered by events. What architecture pattern is this?",
    options: [
      "Monolithic architecture",
      "Serverless/Function-as-a-Service architecture",
      "Client-server",
      "Three-tier architecture"
    ],
    correct: 1,
    explanation: "SERVERLESS (Function-as-a-Service/FaaS) runs code in response to events without managing servers. Serverless characteristics: (1) Event-driven execution, (2) Automatic scaling, (3) Pay per execution (not per server), (4) Provider manages infrastructure, (5) Stateless functions. Security considerations: (1) Reduced attack surface (no OS to patch), (2) Ephemeral - functions exist briefly, (3) Provider security responsibility, (4) Function permissions critical (least privilege), (5) Secrets management challenges. Security challenges: (1) Limited visibility into execution environment, (2) Cold start security implications, (3) Third-party dependency risks, (4) Event injection attacks. Examples: AWS Lambda, Azure Functions, Google Cloud Functions. Serverless shifts security responsibility - provider handles infrastructure, you handle code and configuration. Requires different security approach than traditional servers."
  },
  {
    id: 5,
    question: "An application is split into small, independently deployable services, each running in its own container and communicating via APIs. What architecture is this?",
    options: [
      "Monolithic",
      "Microservices architecture - small, independent services communicating via APIs",
      "Mainframe",
      "Two-tier"
    ],
    correct: 1,
    explanation: "MICROSERVICES architecture builds applications as collection of small, independent services. Microservices characteristics: (1) Single-purpose services, (2) Independent deployment, (3) Technology-agnostic (each can use different stack), (4) API communication, (5) Containerized typically. Security considerations: (1) Larger attack surface (more services, more APIs), (2) Service-to-service authentication critical, (3) Each service needs security controls, (4) Network policies between services, (5) Secrets distribution. Security benefits: (1) Compromised service doesn't mean total compromise, (2) Independent patching, (3) Granular access control. Security approaches: (1) Service mesh for traffic control (Istio, Linkerd), (2) API gateway for external access, (3) Mutual TLS between services, (4) Container security, (5) Microsegmentation. Microservices require security-by-design - can't bolt on security later."
  },
  {
    id: 6,
    question: "Network infrastructure configurations are defined in code files, version-controlled in Git, and automatically deployed. Changes are reviewed, tested, and deployed through a pipeline. What is this approach called?",
    options: [
      "Manual configuration",
      "Infrastructure as Code (IaC) - managing infrastructure through code and automation",
      "SNMP management",
      "Command-line configuration"
    ],
    correct: 1,
    explanation: "INFRASTRUCTURE AS CODE (IaC) manages infrastructure through machine-readable definition files rather than manual processes. IaC benefits: (1) Consistency - same code produces same config, (2) Version control - track changes, rollback, (3) Automation - deploy consistently, (4) Review process - security review before deployment, (5) Self-documenting - code shows intended state. Security benefits: (1) Security policies in code (reviewable), (2) Drift detection - identify unauthorized changes, (3) Rapid remediation (redeploy known-good), (4) Compliance as code, (5) Reduced human error. IaC tools: Terraform, CloudFormation, Ansible, Puppet, Chef. Security practices: (1) Scan IaC for misconfigurations before deployment, (2) Secrets management (not hardcoded), (3) Least privilege for deployment, (4) Immutable infrastructure when possible. IaC enables DevSecOps - security integrated into development/deployment."
  },
  {
    id: 7,
    question: "An organization connects multiple branch offices to the main data center using encrypted tunnels over the public internet, with intelligent path selection based on application needs. What technology is this?",
    options: [
      "MPLS only",
      "SD-WAN (Software-Defined Wide Area Network)",
      "Traditional VPN only",
      "Leased lines"
    ],
    correct: 1,
    explanation: "SD-WAN (Software-Defined WAN) uses software to manage WAN connections, providing intelligent routing over multiple link types. SD-WAN features: (1) Multiple transport types (MPLS, broadband, LTE), (2) Intelligent path selection per application, (3) Centralized management, (4) Encrypted tunnels, (5) Cost optimization. Security features: (1) Built-in encryption (no separate VPN needed), (2) Segmentation, (3) Centralized security policy, (4) Integration with cloud security (SASE). SD-WAN vs Traditional WAN: (1) Traditional - expensive MPLS, static routing, (2) SD-WAN - hybrid links, dynamic routing, application-aware. SD-WAN security considerations: (1) Ensure encryption standards, (2) Centralized vs distributed security, (3) Integration with existing security stack, (4) Zero-trust integration. Often combined with SASE (Secure Access Service Edge) for cloud-delivered security."
  },
  {
    id: 8,
    question: "A firewall placed between the internet and internal network has rules that first block known-bad IPs, then allow specific ports for web traffic, with an implicit deny at the end. How are these rules processed?",
    options: [
      "In random order",
      "Top-to-bottom until first match, with implicit deny for non-matching traffic",
      "All rules apply simultaneously",
      "Bottom-to-top"
    ],
    correct: 1,
    explanation: "Firewall rules process TOP-TO-BOTTOM, stopping at first matching rule, with implicit deny for unmatched traffic. Rule processing: (1) Packet arrives at firewall, (2) Compared against first rule - if match, action taken, stop, (3) If no match, check next rule, (4) Continue until match or end, (5) If no match, implicit deny blocks packet. Rule order matters: (1) Most specific rules first, (2) Block rules often before allow, (3) Allow rules for permitted traffic, (4) Implicit deny at end (often not visible). Example order: (1) Block known-bad IPs, (2) Allow established connections, (3) Allow HTTP/HTTPS, (4) Allow specific services, (5) [Implicit deny all else]. Common mistakes: (1) Overly permissive rules early, (2) Too broad rules masking specific ones, (3) Forgetting implicit deny behavior. Regular rule review important - rules accumulate and may conflict."
  },
  {
    id: 9,
    question: "A network architecture places all sensitive databases on a dedicated segment that can only communicate with application servers, never directly with users or the internet. What security principle does this implement?",
    options: [
      "Defense in depth only",
      "Network segmentation with tiered security zones",
      "Encryption",
      "Single sign-on"
    ],
    correct: 1,
    explanation: "TIERED SECURITY ZONES place resources in segments based on sensitivity, with controlled communication between tiers. Common tier model: (1) EXTERNAL - internet, untrusted, (2) DMZ - public-facing services, (3) APPLICATION TIER - internal applications, (4) DATA TIER - databases, sensitive storage (most protected). Traffic flow: (1) Users → DMZ (web servers), (2) DMZ → Application tier (app servers), (3) Application tier → Data tier (databases), (4) Users never directly to data tier. Security controls between tiers: firewalls, ACLs, network segmentation. Benefits: (1) Compromise of one tier doesn't mean access to all, (2) Lateral movement requires passing controls, (3) Most sensitive assets have most protection, (4) Meets compliance requirements. Design principle: external traffic never touches data tier directly - must pass through multiple security boundaries."
  },
  {
    id: 10,
    question: "A security architect designs the network so web servers, database servers, and management systems each reside on separate VLANs with firewall rules controlling inter-VLAN traffic. What concept does this represent?",
    options: [
      "Flat network",
      "Logical segmentation - using VLANs and access controls to separate network functions",
      "Physical air gap",
      "Single network"
    ],
    correct: 1,
    explanation: "LOGICAL SEGMENTATION uses VLANs and access controls to create separate network segments without physical separation. Logical vs Physical segmentation: (1) Physical - separate hardware, cabling, (2) Logical - same hardware, separated by configuration (VLANs, ACLs). VLAN segmentation: (1) Create VLANs for different functions (web, database, management), (2) Configure firewall/ACL rules for inter-VLAN traffic, (3) Only allow necessary communication. Common segments: (1) Production servers, (2) Development/test, (3) Management/administrative, (4) User workstations, (5) IoT/OT devices, (6) Guest network. Layer 3 required: VLANs are Layer 2 - need router/firewall to communicate between VLANs (where controls applied). Benefits: (1) Cost-effective (no extra hardware), (2) Flexible, (3) Contains breaches, (4) Enables microsegmentation. VLANs alone aren't security - must combine with access controls."
  },
  {
    id: 11,
    question: "A high-security government network is completely disconnected from all other networks including the internet, with data transferred only via approved physical media. What is this called?",
    options: [
      "DMZ",
      "Air gap - complete physical isolation from other networks",
      "VLAN",
      "VPN"
    ],
    correct: 1,
    explanation: "AIR GAP provides complete physical isolation from other networks, with no electronic connection. Air gap characteristics: (1) No network connection to external systems, (2) No internet connectivity, (3) Data transfer via physical media only (USB, optical media), (4) Highest security isolation. Use cases: (1) Classified government systems, (2) Critical infrastructure SCADA, (3) Sensitive research, (4) Nuclear facilities. Air gap challenges: (1) Data transfer is slow/manual, (2) Updates difficult, (3) Can be bypassed (Stuxnet used USB), (4) Covert channels possible. Air gap bypass methods: (1) Malicious USB drives, (2) Supply chain attacks, (3) Acoustic/electromagnetic emanations, (4) Insider threats. Even air-gapped systems need security: (1) Control physical media, (2) Monitor for anomalies, (3) Malware scanning of transferred data, (4) Strong physical security. Air gap is strongest isolation but not invulnerable."
  },
  {
    id: 12,
    question: "An organization's network allows all traffic between devices by default unless specifically blocked, with most systems able to communicate freely with each other. What network model is this, and why is it problematic?",
    options: [
      "Zero trust model",
      "Flat network/implicit trust model - allows lateral movement if one system compromised",
      "Segmented network",
      "Defense in depth"
    ],
    correct: 1,
    explanation: "FLAT NETWORK design allows free communication between systems - dangerous because it enables easy lateral movement. Flat network problems: (1) Compromise one system → access to all, (2) Lateral movement trivial for attackers, (3) No containment of breaches, (4) Ransomware spreads easily, (5) Insider threats unrestricted. Implicit trust: traditional model where 'inside' the network meant trusted. Why this fails: (1) Attackers get inside via phishing, VPN, etc., (2) Insiders can be malicious, (3) IoT devices often compromised, (4) No defense once perimeter breached. Modern approach: (1) Segmentation - limit communication, (2) Zero trust - verify everything, (3) Microsegmentation - granular control, (4) Default deny between segments. Migration: identify critical assets, create segments, implement controls gradually. Flat networks are legacy design - modern security requires segmentation."
  },
  {
    id: 13,
    question: "A cloud architecture team implements individual firewall rules for each workload, controlling traffic at the VM or container level rather than just network perimeter. What is this approach called?",
    options: [
      "Perimeter security",
      "Microsegmentation - granular, workload-level security policies",
      "VLAN only",
      "Traditional firewall"
    ],
    correct: 1,
    explanation: "MICROSEGMENTATION applies security policies at individual workload level (VMs, containers) rather than network perimeters. Microsegmentation characteristics: (1) Per-workload policies, (2) East-west traffic control (server to server), (3) Application-aware rules, (4) Software-defined implementation. Traditional vs Micro: (1) Traditional - firewall at network perimeter, inside is open, (2) Micro - each workload has its own policies, no implicit trust. Benefits: (1) Contains breaches to single workload, (2) Prevents lateral movement, (3) Zero-trust enablement, (4) Compliance (PCI segment isolation), (5) Cloud-native security. Implementation: (1) Host-based firewalls, (2) NSX, ACI, cloud security groups, (3) Service mesh (Istio), (4) Container network policies. Example: web server can ONLY talk to its database on specific port - even if compromised, can't reach other databases. Critical for cloud and containerized environments."
  },
  {
    id: 14,
    question: "A retail company needs to ensure their payment processing systems are completely isolated from general business systems to meet PCI DSS requirements. What architecture approach is required?",
    options: [
      "Single shared network",
      "Cardholder data environment (CDE) segmentation - isolating payment systems",
      "Flat network design",
      "Open access"
    ],
    correct: 1,
    explanation: "PCI DSS requires SEGMENTATION of Cardholder Data Environment (CDE) from other network segments. CDE segmentation requirements: (1) CDE isolated from non-payment systems, (2) Strict access controls to/from CDE, (3) Only necessary traffic permitted, (4) Monitoring and logging at boundaries. Benefits: (1) Reduces scope of PCI audit (only CDE assessed), (2) Contains potential breaches, (3) Limits systems needing PCI controls. Segmentation methods: (1) Physical separation, (2) VLANs with firewall controls, (3) Logical segmentation with strict ACLs. What's in CDE: (1) Systems storing/processing/transmitting cardholder data, (2) Systems connected to those systems, (3) Security systems (firewalls, IDS). Proper segmentation can reduce PCI scope significantly - from entire network to just CDE. Requires verification: pen testing must confirm segmentation effectiveness."
  },
  {
    id: 15,
    question: "A jump server architecture requires administrators to connect to a central hardened system first, then connect from there to manage internal servers. What security benefit does this provide?",
    options: [
      "No security benefit",
      "Centralized access control and logging for administrative access to sensitive systems",
      "Faster connections",
      "Reduced server count"
    ],
    correct: 1,
    explanation: "JUMP SERVER (Jump Box/Bastion Host) provides a single, hardened access point for administrative connections to sensitive systems. Jump server benefits: (1) SINGLE ACCESS POINT - all admin access through one controlled path, (2) CENTRALIZED LOGGING - all admin sessions recorded, (3) REDUCED ATTACK SURFACE - internal servers don't accept direct connections, (4) HARDENED SYSTEM - jump server security-focused, (5) SESSION RECORDING - audit trail of admin actions. Architecture: Admin → VPN → Jump server → Internal servers. Internal servers accept management connections ONLY from jump server. Security controls: (1) MFA to access jump server, (2) Session recording, (3) Privileged access management, (4) Time-limited access, (5) Detailed logging. Alternative: PAM (Privileged Access Management) solutions provide similar controls with more features. Jump servers are especially important for cloud and hybrid environments where administrative access crosses network boundaries."
  }
];