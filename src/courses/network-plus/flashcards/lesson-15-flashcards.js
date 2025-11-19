// Flashcards for Lesson 15: Cloud Concepts and Virtualization

export const lesson15Flashcards = [
  {
    id: 1,
    front: "What is IaaS (Infrastructure as a Service)?",
    back: "Rent VMs, storage, networks. You manage: OS, apps, data. Provider manages: hardware, hypervisor. Examples: AWS EC2, Azure VMs."
  },
  {
    id: 2,
    front: "What is PaaS (Platform as a Service)?",
    back: "Platform for developing apps. You manage: apps and data only. Provider manages: servers, OS, runtime. Examples: Heroku, Google App Engine."
  },
  {
    id: 3,
    front: "What is SaaS (Software as a Service)?",
    back: "Complete applications via browser. Provider manages everything. You just use it. Examples: Office 365, Gmail, Salesforce."
  },
  {
    id: 4,
    front: "IaaS vs PaaS vs SaaS - who manages what?",
    back: "IaaS: you manage OS/apps/data. PaaS: you manage apps/data only. SaaS: provider manages everything. More service = less control."
  },
  {
    id: 5,
    front: "What is a public cloud?",
    back: "Owned by third-party (AWS, Azure, Google). Multi-tenant, shared resources. Cost-effective, scalable, pay-as-you-go."
  },
  {
    id: 6,
    front: "What is a private cloud?",
    back: "Dedicated infrastructure for single organization. Full control, better security, but expensive. Used for strict compliance."
  },
  {
    id: 7,
    front: "What is a hybrid cloud?",
    back: "Combines public and private clouds. Sensitive data private, public-facing apps public. Flexible but complex."
  },
  {
    id: 8,
    front: "What is a community cloud?",
    back: "Shared by organizations with common concerns (security, compliance). Cost shared among members. Between private and public."
  },
  {
    id: 9,
    front: "Two ways to connect to cloud?",
    back: "1) VPN: encrypted tunnel over internet (easy, cheap). 2) Direct connection: dedicated private link (faster, reliable, expensive)."
  },
  {
    id: 10,
    front: "What is AWS Direct Connect / Azure ExpressRoute?",
    back: "Private dedicated connection bypassing internet. Lower latency, more reliable, better security. Expensive, for mission-critical workloads."
  },
  {
    id: 11,
    front: "What is a hypervisor?",
    back: "Software that creates and manages VMs. Abstracts hardware and allocates resources (CPU, RAM, storage) to each VM."
  },
  {
    id: 12,
    front: "Type 1 vs Type 2 hypervisors?",
    back: "Type 1 (bare metal): runs on hardware directly. ESXi, Hyper-V, KVM. Production use. Type 2 (hosted): runs on OS. VirtualBox, VMware Workstation. Desktop use."
  },
  {
    id: 13,
    front: "What is a virtual machine (VM)?",
    back: "Software-based computer with own OS, apps, resources. Isolated from other VMs. Benefits: consolidation, easy backup/migration."
  },
  {
    id: 14,
    front: "What is a virtual switch?",
    back: "Connects VMs to each other and physical network. Software-based. Handles VLANs, traffic between VMs, connection to physical network."
  },
  {
    id: 15,
    front: "What is a virtual router?",
    back: "VM performing routing functions (routing, NAT, firewall, VPN). Software alternative to physical router."
  },
  {
    id: 16,
    front: "What is Network Function Virtualization (NFV)?",
    back: "Replaces physical appliances (routers, firewalls, load balancers) with software versions on standard servers. Lower cost, faster deployment."
  },
  {
    id: 17,
    front: "Container vs VM?",
    back: "Container: shares host OS, lightweight (MB), fast startup (seconds). VM: full OS each, heavy (GB), slow startup (minutes). Containers for apps, VMs for isolation."
  },
  {
    id: 18,
    front: "What is Docker?",
    back: "Leading container platform. Packages apps with everything needed. 'Build once, run anywhere.' Fast deployment, efficient resources."
  },
  {
    id: 19,
    front: "What is Kubernetes?",
    back: "Container orchestration platform. Automates deployment, scaling, management. Features: auto-scaling, self-healing, load balancing. Industry standard."
  },
  {
    id: 20,
    front: "What is Software-Defined Networking (SDN)?",
    back: "Separates control plane (decisions) from data plane (forwarding). Centralized controller programs devices. Easier automation and management."
  },
  {
    id: 21,
    front: "Control plane vs data plane?",
    back: "Control plane: makes routing decisions (brain). Data plane: forwards packets (muscles). SDN separates these for centralized control."
  },
  {
    id: 22,
    front: "What is OpenFlow?",
    back: "Protocol SDN controllers use to communicate with switches/routers. Allows remote modification of forwarding tables."
  },
  {
    id: 23,
    front: "What is SD-WAN?",
    back: "Simplifies WAN management. Intelligent path selection, application-aware routing, centralized management. Replaces expensive MPLS with cheaper internet."
  },
  {
    id: 24,
    front: "What is elasticity in cloud?",
    back: "Automatically scale resources up/down based on demand. Auto-scaling based on CPU, memory, time. Pay only for what you use."
  },
  {
    id: 25,
    front: "Scalability vs elasticity?",
    back: "Scalability: ability to handle growth (manual or auto). Elasticity: automatic scaling both up AND down. Elasticity is dynamic scalability."
  },
  {
    id: 26,
    front: "What is multitenancy?",
    back: "Multiple customers share same infrastructure but data/apps are logically isolated. Enables cloud cost efficiency. Public cloud is multitenant."
  },
  {
    id: 27,
    front: "What are VM snapshots?",
    back: "Point-in-time copy of VM state. Use before updates/changes. Quick rollback if something breaks. Not a backup (same system)."
  },
  {
    id: 28,
    front: "Legacy app needs old OS but want cloud. IaaS, PaaS, or SaaS?",
    back: "IaaS! Need full OS control for legacy app. Create VM with required old OS in AWS EC2/Azure."
  },
  {
    id: 29,
    front: "What is shared responsibility model?",
    back: "Provider: physical security, hypervisor, infrastructure. Customer: data, apps, access control, encryption. Varies by service model (IaaS/PaaS/SaaS)."
  },
  {
    id: 30,
    front: "Match: Gmail, AWS EC2, Heroku, Azure App Service",
    back: "Gmail: SaaS. AWS EC2: IaaS. Heroku: PaaS. Azure App Service: PaaS. Know service models!"
  }
];