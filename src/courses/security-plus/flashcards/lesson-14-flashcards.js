// Lesson 14: Network Security Architecture
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson14Flashcards = [
  {
    id: 1,
    front: "What is Network Security Architecture?",
    back: "The design and structure of network security controls. Defines how components work together to protect the network. Includes segmentation, zones, and device placement."
  },
  {
    id: 2,
    front: "What is Defense in Depth in network architecture?",
    back: "Multiple layers of security controls throughout the network. If one layer fails, others still protect. Includes perimeter, network, host, application, and data layers."
  },
  {
    id: 3,
    front: "What is a DMZ (Demilitarized Zone)?",
    back: "Network segment between internal and external networks. Hosts public-facing services (web, email, DNS). Also called screened subnet. Isolates public services from internal network."
  },
  {
    id: 4,
    front: "What is a Screened Subnet?",
    back: "Another name for DMZ. Network segment protected by firewalls on both sides. External firewall faces internet, internal firewall protects LAN."
  },
  {
    id: 5,
    front: "What is a Security Zone?",
    back: "Network segment with defined trust level and security policies. Traffic between zones controlled by firewalls. Common zones: trusted, untrusted, DMZ."
  },
  {
    id: 6,
    front: "What is a Trusted Zone?",
    back: "Internal network with highest trust level. Contains sensitive resources, users, and data. Protected from untrusted zones by firewalls and access controls."
  },
  {
    id: 7,
    front: "What is an Untrusted Zone?",
    back: "External network with no trust (internet). All traffic from here considered potentially hostile. Must pass through security controls to reach other zones."
  },
  {
    id: 8,
    front: "What is a Semi-trusted Zone?",
    back: "Zone with limited trust, like DMZ. More trusted than internet but less than internal. Contains systems that need external access but shouldn't access internal directly."
  },
  {
    id: 9,
    front: "What is a Screened Host architecture?",
    back: "Single firewall with bastion host in front. Bastion host is hardened server handling external requests. Simple but single point of failure."
  },
  {
    id: 10,
    front: "What is a Dual-homed Firewall?",
    back: "Firewall with two network interfaces - one to external, one to internal. All traffic must pass through firewall. Simple architecture but single point of failure."
  },
  {
    id: 11,
    front: "What is a Multi-homed Firewall?",
    back: "Firewall with three or more interfaces. Typically: external, internal, and DMZ. Single firewall creates multiple zones. More flexible than dual-homed."
  },
  {
    id: 12,
    front: "What is a Two-firewall DMZ architecture?",
    back: "Front firewall faces internet, back firewall protects internal network, DMZ between them. Most secure DMZ design. Different vendors for each firewall adds security."
  },
  {
    id: 13,
    front: "What is NAT (Network Address Translation)?",
    back: "Translates private IP addresses to public addresses. Hides internal network structure. Provides basic security by obscuring internal IPs. Enables IP address conservation."
  },
  {
    id: 14,
    front: "What is Static NAT?",
    back: "One-to-one mapping of private to public IP. Each internal host gets dedicated public IP. Used for servers needing consistent external address."
  },
  {
    id: 15,
    front: "What is Dynamic NAT?",
    back: "Maps private IPs to pool of public IPs. Assignments change as connections open/close. More efficient use of public IPs than static NAT."
  },
  {
    id: 16,
    front: "What is PAT (Port Address Translation)?",
    back: "Many private IPs share one public IP using different ports. Also called NAT overload. Most common NAT type. How home routers typically work."
  },
  {
    id: 17,
    front: "What is SDN (Software-Defined Networking)?",
    back: "Separates network control plane from data plane. Centralized, programmable network management. Enables automated security policy enforcement and rapid changes."
  },
  {
    id: 18,
    front: "What is the Control Plane in SDN?",
    back: "The brain of SDN - makes routing and policy decisions. Centralized controller. Separated from physical devices. Programs the data plane."
  },
  {
    id: 19,
    front: "What is the Data Plane in SDN?",
    back: "Physical network devices that forward traffic. Follows instructions from control plane. Switches, routers handling actual packet movement."
  },
  {
    id: 20,
    front: "What security benefits does SDN provide?",
    back: "Centralized policy management, rapid response to threats, network visibility, automated security enforcement, microsegmentation capabilities, consistent configurations."
  },
  {
    id: 21,
    front: "What is Serverless Architecture?",
    back: "Cloud model where provider manages infrastructure. Developer focuses on code/functions. No server management. Examples: AWS Lambda, Azure Functions."
  },
  {
    id: 22,
    front: "What are Serverless security considerations?",
    back: "Function permissions (least privilege), secure dependencies, input validation, secrets management, monitoring ephemeral functions, shared responsibility model."
  },
  {
    id: 23,
    front: "What is Microservices Architecture?",
    back: "Application built as collection of small, independent services. Each service handles specific function. Communicate via APIs. Enables granular security controls."
  },
  {
    id: 24,
    front: "What are Microservices security considerations?",
    back: "API security, service-to-service authentication, secrets management, container security, network policies between services, monitoring distributed components."
  },
  {
    id: 25,
    front: "What is Infrastructure as Code (IaC)?",
    back: "Managing infrastructure through code/configuration files. Version controlled, repeatable deployments. Examples: Terraform, CloudFormation, Ansible."
  },
  {
    id: 26,
    front: "What security benefits does IaC provide?",
    back: "Consistent configurations, version control for audit trail, automated security checks, repeatable secure deployments, drift detection, rapid disaster recovery."
  },
  {
    id: 27,
    front: "What are IaC security risks?",
    back: "Secrets in code repositories, misconfigurations deployed at scale, vulnerable templates, insufficient access controls to IaC pipelines, drift from defined state."
  },
  {
    id: 28,
    front: "What is a Bastion Host (Jump Server)?",
    back: "Hardened server providing single access point to internal network. Heavily monitored and secured. Reduces attack surface by limiting entry points."
  },
  {
    id: 29,
    front: "Where should IDS/IPS be placed in network architecture?",
    back: "Network IDS: monitor key network segments. IPS: inline at perimeter and between zones. Also at DMZ boundaries and in front of critical assets."
  },
  {
    id: 30,
    front: "What is the principle of Separation of Critical Assets?",
    back: "Isolating sensitive systems on separate network segments. Database servers separate from web servers. Management networks isolated. Limits breach impact."
  }
];