// Quiz for Lesson 15: Cloud Concepts and Virtualization

export const lesson15Quiz = [
  {
    id: 1,
    question: "A startup wants to deploy a web application but doesn't want to manage underlying servers, operating systems, or runtime environments. They only want to upload their code and have it run. Which cloud service model best fits this requirement?",
    options: [
      "IaaS (Infrastructure as a Service) - provides virtual machines that require OS management",
      "PaaS (Platform as a Service) - provides a platform for deploying applications without managing infrastructure",
      "SaaS (Software as a Service) - provides ready-to-use applications",
      "On-premises hosting with full control"
    ],
    correct: 1,
    explanation: "PaaS (Platform as a Service) provides a development and deployment platform where developers upload code and the provider manages the underlying infrastructure, OS, runtime, and middleware. Examples: Heroku, Google App Engine, Azure App Service. IaaS requires managing VMs and OS. SaaS is ready-to-use applications (no custom code deployment). PaaS sits between IaaS and SaaS in abstraction level."
  },
  {
    id: 2,
    question: "A healthcare organization must comply with HIPAA regulations requiring complete control over where patient data is stored and who has access to the infrastructure. However, they want cloud-like flexibility and automation. What cloud deployment model should they implement?",
    options: [
      "Public cloud with encryption enabled",
      "Private cloud dedicated to the organization, either on-premises or hosted",
      "Community cloud shared with other healthcare providers",
      "Hybrid cloud with patient data in public cloud"
    ],
    correct: 1,
    explanation: "Private cloud provides dedicated infrastructure for a single organization, offering complete control over data location, security, and compliance while maintaining cloud benefits (automation, elasticity, self-service). It can be on-premises or hosted by a third party. For HIPAA compliance, many healthcare organizations use private cloud to ensure data sovereignty and control. Public cloud can be HIPAA-compliant with BAAs, but private cloud offers maximum control."
  },
  {
    id: 3,
    question: "A company uses Office 365 for email, Salesforce for CRM, and Zoom for video conferencing. All are accessed via web browsers with no local installation. What cloud service model is the company consuming?",
    options: [
      "IaaS - they're using cloud infrastructure",
      "PaaS - they're using platforms for business applications",
      "SaaS - they're using complete software applications delivered over the internet",
      "DaaS - Desktop as a Service"
    ],
    correct: 2,
    explanation: "SaaS (Software as a Service) provides complete, ready-to-use applications over the internet. Users access via web browsers or thin clients without installing/managing software. The provider handles everything: infrastructure, platform, application, data, and maintenance. Examples: Office 365, Gmail, Salesforce, Dropbox, Zoom. This is the highest abstraction level—users just consume the application, no management of underlying layers."
  },
  {
    id: 4,
    question: "An enterprise runs critical workloads on-premises for compliance reasons but wants to use AWS for development/testing environments and burst capacity during peak loads. What deployment model describes this architecture?",
    options: [
      "Public cloud - all resources in AWS",
      "Private cloud - dedicated infrastructure",
      "Hybrid cloud - combining on-premises and public cloud resources",
      "Community cloud - shared with similar organizations"
    ],
    correct: 2,
    explanation: "Hybrid cloud integrates on-premises infrastructure with public cloud services, allowing workloads to move between environments. Common use cases: keeping sensitive data on-premises while using public cloud for dev/test, cloud bursting (handling peak loads), disaster recovery, and gradual cloud migration. Requires: connectivity (VPN/Direct Connect), orchestration tools, and consistent security/management across environments."
  },
  {
    id: 5,
    question: "A company wants a dedicated, high-bandwidth connection from their data center to AWS with predictable network performance and reduced bandwidth costs. Standard internet connectivity is too variable. What should they implement?",
    options: [
      "Site-to-site VPN over the internet",
      "Direct connection service like AWS Direct Connect or Azure ExpressRoute",
      "Multiple broadband internet connections with load balancing",
      "Satellite internet for redundancy"
    ],
    correct: 1,
    explanation: "Direct connection services (AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect) provide dedicated, private network connections from on-premises to cloud providers. Benefits: consistent network performance, reduced bandwidth costs (typically cheaper than internet egress), higher bandwidth options (up to 100 Gbps), and enhanced security (traffic doesn't traverse public internet). VPNs use internet (variable performance); direct connections bypass internet entirely."
  },
  {
    id: 6,
    question: "A data center runs multiple physical servers, each hosting 20-30 virtual machines. What software layer is responsible for creating and managing these VMs, allocating hardware resources, and providing isolation between VMs?",
    options: [
      "Virtual switch that connects VMs to the network",
      "Hypervisor that sits between hardware and VMs, managing virtualization",
      "Container runtime that runs application containers",
      "Operating system kernel of each VM"
    ],
    correct: 1,
    explanation: "The hypervisor (Virtual Machine Monitor) creates and manages VMs, abstracting physical hardware and allocating resources (CPU, memory, storage, network) to each VM. Two types: Type 1 (bare-metal) runs directly on hardware (VMware ESXi, Hyper-V, KVM) - used in data centers. Type 2 runs on top of an OS (VMware Workstation, VirtualBox) - used for desktop virtualization. Each VM runs its own OS, isolated from others."
  },
  {
    id: 7,
    question: "A development team wants to package their application with all dependencies (libraries, runtime, configuration) into lightweight, portable units that can run consistently across different environments. What technology should they use?",
    options: [
      "Virtual machines with full OS installation for each application",
      "Containers that share the host OS kernel while isolating application processes",
      "Physical servers dedicated to each application",
      "Hypervisors for application deployment"
    ],
    correct: 1,
    explanation: "Containers (Docker, Podman) package applications with dependencies but share the host OS kernel, making them lighter than VMs (MB vs GB). Benefits: fast startup (seconds vs minutes), portability (run anywhere), efficient resource use, and consistency (dev/test/prod). Kubernetes orchestrates containers at scale. VMs include entire OS; containers share OS kernel. Use VMs for isolation/security, containers for efficiency/scalability."
  },
  {
    id: 8,
    question: "An organization migrated from on-premises to AWS. During a traffic spike, they want their infrastructure to automatically add more web server instances and remove them when traffic decreases. What cloud characteristic enables this capability?",
    options: [
      "Multitenancy - sharing resources among multiple customers",
      "Elasticity and scalability - automatically scaling resources based on demand",
      "Measured service - pay-per-use billing model",
      "High availability - redundant systems"
    ],
    correct: 1,
    explanation: "Elasticity is the ability to automatically scale resources up/down based on demand. Scalability is capacity to handle growth (scale up: bigger resources, scale out: more resources). Auto-scaling groups in AWS/Azure monitor metrics (CPU, connections) and automatically add/remove instances. This optimizes costs (only pay for what you need) and performance (handle spikes). Key cloud advantage over fixed on-premises capacity."
  },
  {
    id: 9,
    question: "A network engineer needs to implement Software-Defined Networking (SDN) in a data center. What is the fundamental architectural change that SDN introduces compared to traditional networking?",
    options: [
      "SDN increases the speed of network devices",
      "SDN separates the control plane (decision-making) from the data plane (packet forwarding), enabling centralized management",
      "SDN eliminates the need for physical switches and routers",
      "SDN only works with wireless networks"
    ],
    correct: 1,
    explanation: "SDN separates control plane (routing decisions, network policy) from data plane (actual packet forwarding). Traditional devices do both locally. With SDN: centralized controller makes all decisions (control plane), network devices become 'dumb' forwarding elements (data plane). Benefits: centralized management, programmability (APIs), automation, faster provisioning. OpenFlow is a common SDN protocol. Examples: VMware NSX, Cisco ACI, OpenDaylight."
  },
  {
    id: 10,
    question: "A multinational company has offices in 30 countries connected via MPLS. They want to simplify WAN management, improve application performance, and enable direct internet breakout from branches. What technology should they deploy?",
    options: [
      "Additional MPLS circuits for redundancy",
      "SD-WAN (Software-Defined WAN) to provide centralized management and intelligent path selection",
      "Site-to-site VPNs replacing all MPLS",
      "Dedicated leased lines to each office"
    ],
    correct: 1,
    explanation: "SD-WAN overlays software-defined networking on WAN connections (MPLS, broadband, LTE, etc.). Benefits: centralized management, application-aware routing (route Office 365 directly to internet, not through HQ), automatic failover, reduced costs (use cheap internet vs expensive MPLS), and zero-touch provisioning. It can replace or augment MPLS. SD-WAN controllers make intelligent path decisions based on application requirements, link quality, and policies."
  },
  {
    id: 11,
    question: "A company uses AWS EC2 instances (IaaS) to host their web application. They want to move to a more managed service where they don't handle OS patching, scaling, or infrastructure management. Which migration path makes sense?",
    options: [
      "Move from EC2 to AWS Lambda or Elastic Beanstalk (PaaS/serverless)",
      "Deploy more EC2 instances for redundancy",
      "Switch to physical servers in their data center",
      "Move to SaaS like Salesforce (completely different)"
    ],
    correct: 0,
    explanation: "Moving up the abstraction ladder: IaaS (EC2) → PaaS/Serverless (Lambda, Elastic Beanstalk, App Service). With PaaS, AWS manages OS, runtime, patching, scaling, and infrastructure. AWS Lambda is serverless (no servers to manage at all). Elastic Beanstalk abstracts EC2 management. This reduces operational burden but gives up some control. Trade-off: less management vs less customization. Not all apps can easily move to PaaS."
  },
  {
    id: 12,
    question: "A data center uses Type 1 hypervisors running on physical servers. What is the key characteristic that distinguishes Type 1 from Type 2 hypervisors?",
    options: [
      "Type 1 runs directly on hardware (bare-metal); Type 2 runs on top of a host operating system",
      "Type 1 supports Windows VMs; Type 2 only supports Linux",
      "Type 1 is free; Type 2 requires licensing",
      "Type 1 provides better graphics; Type 2 is for servers"
    ],
    correct: 0,
    explanation: "Type 1 (bare-metal) hypervisors run directly on hardware with no underlying OS: VMware ESXi, Microsoft Hyper-V Server, KVM, Citrix Hypervisor. Used in production data centers for performance and efficiency. Type 2 (hosted) runs on top of an OS: VMware Workstation, VirtualBox, Parallels. Used for desktop virtualization, development, testing. Type 1 has better performance (no host OS overhead); Type 2 is easier to set up."
  },
  {
    id: 13,
    question: "An organization runs hundreds of microservices as Docker containers across multiple servers. They need automated deployment, scaling, load balancing, self-healing, and rolling updates. What container orchestration platform should they use?",
    options: [
      "Docker alone provides all these features automatically",
      "Kubernetes for enterprise-grade container orchestration and management",
      "Virtual machines for better isolation",
      "Hypervisor for container management"
    ],
    correct: 1,
    explanation: "Kubernetes (K8s) is the leading container orchestration platform, providing: automated deployment, scaling (horizontal pod autoscaling), load balancing, self-healing (restarts failed containers), rolling updates/rollbacks, service discovery, configuration/secret management, and multi-cloud portability. Docker creates/runs containers; Kubernetes orchestrates them at scale. Alternatives: Docker Swarm (simpler), OpenShift (enterprise K8s), Amazon ECS."
  },
  {
    id: 14,
    question: "A cloud provider hosts multiple customers on the same physical infrastructure, with logical isolation between customers. What is this architecture called, and what is a key benefit?",
    options: [
      "Single-tenancy - dedicated hardware for security",
      "Multitenancy - multiple customers share infrastructure, reducing costs through resource pooling",
      "Hybrid cloud - mixing public and private resources",
      "Bare-metal - direct hardware access"
    ],
    correct: 1,
    explanation: "Multitenancy allows multiple customers (tenants) to share physical infrastructure while maintaining logical isolation. Public clouds (AWS, Azure, GCP) use multitenancy extensively. Benefits: reduced costs (resource pooling, economies of scale), efficient utilization, and easier provider management. Security: isolation via virtualization, VLANs, encryption, and access controls. Some customers require single-tenancy for compliance/security (dedicated instances/hosts), which costs more."
  },
  {
    id: 15,
    question: "A development team wants their application to automatically handle increased load during business hours by adding more server instances, then scale down at night to reduce costs. They set a minimum of 2 instances and maximum of 20, with scaling triggered when CPU exceeds 70%. What cloud principle does this configuration utilize?",
    options: [
      "High availability through redundant instances",
      "Elasticity with auto-scaling based on defined metrics and policies",
      "Load balancing to distribute traffic",
      "Disaster recovery for business continuity"
    ],
    correct: 1,
    explanation: "This describes auto-scaling (elasticity in action). Components: scaling policies (when to scale), metrics (CPU, memory, connections, custom), minimum/maximum limits, and cooldown periods. Horizontal scaling (scale out/in) adds/removes instances. Vertical scaling (scale up/down) changes instance size. Auto-scaling optimizes costs (scale down when not needed) and performance (scale up during peaks). This is a key cloud advantage—pay only for resources actually needed."
  }
];

// Export for use in quiz component
export default lesson15Quiz;