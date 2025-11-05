// Flashcards for Lesson 15: Cloud Concepts and Virtualization

export const lesson15Flashcards = [
  {
    id: 1,
    front: "What is IaaS (Infrastructure as a Service)?",
    back: "IaaS provides virtualized computing resources over the internet. You rent: VMs, storage, networks, operating systems. You manage: OS, applications, data. Provider manages: physical hardware, hypervisor, data center. Examples: AWS EC2, Azure VMs, Google Compute Engine. Most flexible but requires most management."
  },
  {
    id: 2,
    front: "What is PaaS (Platform as a Service)?",
    back: "PaaS provides a platform for developing/deploying applications without managing infrastructure. Provider manages: servers, storage, networking, OS, middleware, runtime. You manage: applications and data only. Examples: Heroku, Google App Engine, Azure App Service. For developers who want to focus on code, not infrastructure."
  },
  {
    id: 3,
    front: "What is SaaS (Software as a Service)?",
    back: "SaaS provides complete applications over the internet. Provider manages everything: infrastructure, platform, application. You just use the software via web browser. Examples: Office 365, Gmail, Salesforce, Dropbox, Zoom. No installation, no maintenance. Most convenient, least control."
  },
  {
    id: 4,
    front: "Quick comparison: IaaS vs PaaS vs SaaS - who manages what?",
    back: "IaaS: You manage OS, middleware, runtime, apps, data. Provider manages virtualization, servers, storage, network. PaaS: You manage apps and data only. Provider manages runtime, middleware, OS, infrastructure. SaaS: Provider manages everything. You just use the application. More service = less control."
  },
  {
    id: 5,
    front: "What is a public cloud?",
    back: "Public cloud is owned/operated by third-party provider (AWS, Azure, Google). Resources shared among multiple customers (multi-tenant). Access via internet. Pros: cost-effective, scalable, no maintenance, pay-as-you-go. Cons: less control, security concerns, compliance limitations. Most common deployment model."
  },
  {
    id: 6,
    front: "What is a private cloud?",
    back: "Private cloud is dedicated infrastructure for single organization. Can be on-premises or hosted by third party. Pros: full control, enhanced security, compliance, customization. Cons: expensive, requires IT staff, limited scalability. Use cases: government, healthcare, finance with strict regulations."
  },
  {
    id: 7,
    front: "What is a hybrid cloud?",
    back: "Hybrid cloud combines public and private clouds with orchestration between them. Example: sensitive data in private cloud, public-facing apps in public cloud. Benefits: flexibility, cost optimization, keep legacy systems private while using public for new apps. Challenges: complexity, data synchronization, security."
  },
  {
    id: 8,
    front: "What is a community cloud?",
    back: "Community cloud is shared by several organizations with common concerns (security, compliance, industry). Example: healthcare providers sharing HIPAA-compliant cloud. Cost shared among members. Less common than other models. Sits between private and public in terms of cost/control."
  },
  {
    id: 9,
    front: "What are two ways to connect to cloud services?",
    back: "1) VPN: encrypted tunnel over internet (site-to-site or client-to-site). Pros: easy, cost-effective. Cons: internet dependent, latency, security risks. 2) Direct connection: dedicated private link (AWS Direct Connect, Azure ExpressRoute). Pros: faster, more reliable, more secure, predictable bandwidth. Cons: expensive, longer setup time."
  },
  {
    id: 10,
    front: "What is AWS Direct Connect / Azure ExpressRoute?",
    back: "Private dedicated network connection from your data center to cloud provider, bypassing public internet. Benefits: lower latency, more bandwidth, more reliable, better security, consistent performance. Cost: $$$. Use for: high-bandwidth apps, mission-critical workloads, hybrid cloud. Requires: colocation facility or partner."
  },
  {
    id: 11,
    front: "What is a hypervisor?",
    back: "Hypervisor (Virtual Machine Monitor) is software that creates and manages virtual machines. Allows multiple VMs to run on single physical host by abstracting hardware. Allocates: CPU, RAM, storage, network to each VM. Also called virtualization layer. Foundation of cloud computing and virtualization."
  },
  {
    id: 12,
    front: "What's the difference between Type 1 and Type 2 hypervisors?",
    back: "Type 1 (Bare Metal): runs directly on hardware, no host OS. Examples: VMware ESXi, Microsoft Hyper-V, KVM, Xen. Better performance, enterprise/production use. Type 2 (Hosted): runs on top of host OS. Examples: VMware Workstation, VirtualBox, Parallels. Easier setup, desktop/development use."
  },
  {
    id: 13,
    front: "What is a virtual machine (VM)?",
    back: "VM is software-based computer running on physical hardware through hypervisor. Has its own: OS, applications, virtual CPU, RAM, disk, network interface. Isolated from other VMs. Benefits: consolidation (multiple VMs per server), isolation, snapshots, easy backup/migration. Behaves like physical machine."
  },
  {
    id: 14,
    front: "What is a virtual switch?",
    back: "Virtual switch (vSwitch) connects VMs to each other and to physical network. Operates like physical switch but in software. Handles: traffic between VMs on same host, traffic to/from physical network, VLANs, port groups. Examples: VMware vSwitch, Hyper-V Virtual Switch, Open vSwitch."
  },
  {
    id: 15,
    front: "What is a virtual router?",
    back: "Virtual router is VM performing routing functions (static/dynamic routing, NAT, firewall, VPN). Software-based alternative to physical router. Benefits: flexible, cost-effective, easy to deploy. Use cases: cloud networks, NFV, lab environments. Examples: Cisco CSR 1000v, pfSense, VyOS, virtual firewalls."
  },
  {
    id: 16,
    front: "What is Network Function Virtualization (NFV)?",
    back: "NFV replaces physical network appliances (routers, firewalls, load balancers) with software-based virtual versions running on standard servers. Benefits: lower cost, faster deployment, flexibility, scalability. Service providers use NFV extensively. Decouples network functions from proprietary hardware."
  },
  {
    id: 17,
    front: "What is a container and how does it differ from a VM?",
    back: "Container packages application and dependencies together, sharing host OS kernel. VM has full OS per instance. Containers: lightweight (MB), fast startup (seconds), more instances per host. VMs: heavy (GB), slow startup (minutes), full isolation. Containers for apps, VMs for OS-level isolation."
  },
  {
    id: 18,
    front: "What is Docker?",
    back: "Docker is the leading container platform. Packages applications into containers with everything needed to run (code, runtime, libraries). Benefits: 'build once, run anywhere', fast deployment, efficient resource use, microservices architecture. Docker Hub: public repository of container images. Standard for modern app development."
  },
  {
    id: 19,
    front: "What is Kubernetes?",
    back: "Kubernetes (K8s) is container orchestration platform that automates: deployment, scaling, management of containerized applications. Manages multiple containers across multiple hosts. Features: auto-scaling, self-healing, load balancing, rolling updates. Industry standard for container management. Originally from Google."
  },
  {
    id: 20,
    front: "What is Software-Defined Networking (SDN)?",
    back: "SDN separates control plane (routing decisions) from data plane (packet forwarding). Centralized controller programs network devices via API (OpenFlow). Benefits: centralized management, automation, programmability, flexibility, easier troubleshooting. Traditional: distributed control. SDN: centralized control. Example: Cisco DNA Center."
  },
  {
    id: 21,
    front: "What's the difference between control plane and data plane?",
    back: "Control plane: makes decisions about where traffic should go (routing protocols, routing table). 'Brain' of network. Data plane: actually forwards packets based on control plane decisions. 'Muscles' of network. SDN separates these: control plane in controller, data plane in switches."
  },
  {
    id: 22,
    front: "What is OpenFlow?",
    back: "OpenFlow is the protocol SDN controllers use to communicate with network devices (switches, routers). Allows controller to modify forwarding tables remotely. Part of the SDN architecture. Controller tells switches 'if you see packet X, forward to port Y'. Standardized by Open Networking Foundation (ONF)."
  },
  {
    id: 23,
    front: "What is SD-WAN (Software-Defined WAN)?",
    back: "SD-WAN simplifies WAN management and improves performance by: intelligent path selection (choose best link), application-aware routing, centralized management, uses multiple connection types (MPLS, broadband, LTE). Benefits: lower cost, better performance, easier management. Replaces expensive MPLS with cheaper internet connections."
  },
  {
    id: 24,
    front: "What is elasticity in cloud computing?",
    back: "Elasticity is ability to automatically scale resources up/down based on demand. Scale out: add more instances. Scale up: increase power of instances. Auto-scaling based on: CPU usage, memory, time of day, custom metrics. Pay only for what you use. Key cloud benefit."
  },
  {
    id: 25,
    front: "What is scalability and how does it differ from elasticity?",
    back: "Scalability: ability to handle growth by adding resources (manual or automatic). Elasticity: automatic scaling both up AND down based on demand. Elasticity is dynamic/automated scalability. Cloud provides both: can scale to any size (scalability) automatically (elasticity). Traditional on-prem: scalability limited, no elasticity."
  },
  {
    id: 26,
    front: "What is multitenancy in cloud computing?",
    back: "Multitenancy means multiple customers (tenants) share the same physical infrastructure but data/applications are logically isolated. Each tenant's data is invisible to others. Enables cloud cost efficiency. Security concerns: proper isolation critical. Public cloud is multitenant, private cloud is single-tenant."
  },
  {
    id: 27,
    front: "What are VM snapshots and why use them?",
    back: "Snapshot is point-in-time copy of VM's state (disk, memory, config). Use before: updates, changes, testing. If something breaks, revert to snapshot instantly. Not a backup (stored on same system). Benefits: quick rollback, testing, development. Cons: impact performance if too many, not disaster recovery."
  },
  {
    id: 28,
    front: "Quick scenario: Your company needs to run legacy app requiring old OS but wants cloud benefits. IaaS, PaaS, or SaaS?",
    back: "IaaS! You need full control over OS to run legacy app. With IaaS, you can create VM with any OS (even old/unsupported). PaaS/SaaS won't give you OS-level control. Deploy VM in AWS EC2/Azure with your required OS, run legacy app."
  },
  {
    id: 29,
    front: "What is the shared responsibility model in cloud?",
    back: "Cloud provider and customer share security responsibilities. Provider: physical security, hypervisor, infrastructure. Customer: data, applications, access control, encryption. Varies by model: IaaS (customer responsible for more), PaaS (shared), SaaS (provider responsible for most). Always understand where your responsibility ends."
  },
  {
    id: 30,
    front: "Speed drill: Match to cloud model - Gmail, AWS EC2, Heroku, on-prem VMware, Azure App Service",
    back: "Gmail: SaaS (use application). AWS EC2: IaaS (manage VMs). Heroku: PaaS (deploy apps). On-prem VMware: Private cloud/virtualization. Azure App Service: PaaS (platform for apps). Know service models for exam!"
  }
];