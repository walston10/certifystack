export const lesson30Flashcards = [
  {
    id: 1,
    front: "What is SaaS (Software as a Service)?",
    back: "Cloud-delivered applications accessed via web browser. Provider manages everything - infrastructure, platform, application. Examples: Office 365, Gmail, Salesforce, Dropbox. User just uses the software."
  },
  {
    id: 2,
    front: "What is IaaS (Infrastructure as a Service)?",
    back: "Cloud-provided virtual servers, storage, networking. Customer manages OS, applications, data. Provider manages physical hardware, virtualization, networking. Examples: AWS EC2, Azure VMs, Google Compute Engine."
  },
  {
    id: 3,
    front: "What is PaaS (Platform as a Service)?",
    back: "Cloud development platform - providers manage infrastructure and OS, customer deploys applications. Developers focus on code, not infrastructure. Examples: Heroku, Google App Engine, Azure App Service."
  },
  {
    id: 4,
    front: "How do you remember the difference between IaaS, PaaS, and SaaS?",
    back: "IaaS = rent computers (you manage OS/apps). PaaS = rent development platform (you write code). SaaS = rent software (you just use it). Increasing abstraction: IaaS < PaaS < SaaS."
  },
  {
    id: 5,
    front: "What is a public cloud?",
    back: "Cloud services available to general public over internet. Resources shared among multiple customers (multi-tenant). Examples: AWS, Microsoft Azure, Google Cloud. Cost-effective, scalable, no hardware management."
  },
  {
    id: 6,
    front: "What is a private cloud?",
    back: "Cloud infrastructure dedicated to single organization. Can be on-premises or hosted. More control, better security, compliance-friendly. More expensive than public cloud. Used for sensitive data/applications."
  },
  {
    id: 7,
    front: "What is a hybrid cloud?",
    back: "Combination of public and private clouds working together. Sensitive data in private, less critical in public. Provides flexibility - burst to public cloud when private reaches capacity."
  },
  {
    id: 8,
    front: "What is a community cloud?",
    back: "Cloud shared by several organizations with common concerns (security, compliance, jurisdiction). Costs shared among community members. Example: government agencies sharing infrastructure, healthcare organizations."
  },
  {
    id: 9,
    front: "What is on-demand self-service in cloud computing?",
    back: "Users provision resources (servers, storage) automatically without human interaction with provider. Use web portal/API to create resources instantly. No waiting for approval or manual setup."
  },
  {
    id: 10,
    front: "What is rapid elasticity in cloud computing?",
    back: "Ability to quickly scale resources up or down based on demand. Add servers during peak times, remove when not needed. Appears unlimited to users. Pay only for what you use."
  },
  {
    id: 11,
    front: "What is resource pooling in cloud computing?",
    back: "Provider's resources (storage, CPU, memory, bandwidth) shared among multiple customers. Multi-tenant model - customers don't know exact physical location. Dynamic assignment based on demand."
  },
  {
    id: 12,
    front: "What is measured service in cloud computing?",
    back: "Cloud usage monitored, measured, reported - pay per use. Metered like utilities (electricity, water). Charges based on resources consumed: storage GB, compute hours, bandwidth, transactions."
  },
  {
    id: 13,
    front: "What is broad network access in cloud computing?",
    back: "Services available over network from any device - laptops, phones, tablets. Access via standard protocols (HTTP/HTTPS). Available from anywhere with internet connection."
  },
  {
    id: 14,
    front: "What cloud storage solutions should you know?",
    back: "Microsoft OneDrive, Google Drive, Dropbox, Apple iCloud, Box. Provide file storage, sync across devices, sharing, backup. Integrate with productivity apps."
  },
  {
    id: 15,
    front: "What is Desktop as a Service (DaaS)?",
    back: "Cloud-hosted virtual desktop - entire desktop environment delivered over network. User accesses from any device, looks like local desktop. Provider manages infrastructure, updates, backups. Example: Amazon WorkSpaces."
  },
  {
    id: 16,
    front: "What is VDI (Virtual Desktop Infrastructure)?",
    back: "Virtual desktops hosted on servers - users connect remotely. Centralized management, better security, access from thin clients. Like DaaS but typically on-premises or private cloud."
  },
  {
    id: 17,
    front: "What are the benefits of cloud computing?",
    back: "No upfront hardware costs, pay-as-you-go pricing, rapid scaling, global accessibility, automatic updates, disaster recovery built-in, reduced IT management burden."
  },
  {
    id: 18,
    front: "What are the disadvantages/concerns of cloud computing?",
    back: "Requires internet connectivity, ongoing subscription costs, less control, potential security/privacy concerns, vendor lock-in, compliance challenges for regulated industries."
  },
  {
    id: 19,
    front: "What is cloud bursting?",
    back: "Using public cloud resources when private cloud reaches capacity. Application runs in private cloud normally, 'bursts' to public during peak demand. Returns to private when load decreases."
  },
  {
    id: 20,
    front: "What is multi-tenancy in cloud computing?",
    back: "Multiple customers sharing same physical infrastructure/applications, but data remains isolated. Like apartment building - shared structure, separate apartments. Enables cost efficiency through sharing."
  },
  {
    id: 21,
    front: "What is cloud scalability vs elasticity?",
    back: "Scalability: ability to handle growth (scale up/out) - long-term capacity. Elasticity: automatic rapid scaling up/down based on current demand - short-term flexibility. Elasticity implies scalability."
  },
  {
    id: 22,
    front: "What is vertical vs horizontal scaling in cloud?",
    back: "Vertical (scale up): add more power to existing server (more CPU, RAM). Horizontal (scale out): add more servers. Cloud excels at horizontal - add instances automatically."
  },
  {
    id: 23,
    front: "What SaaS examples should you know for A+?",
    back: "Microsoft Office 365 (productivity), Gmail/Google Workspace (email/collaboration), Salesforce (CRM), Slack (messaging), Zoom (video conferencing), Adobe Creative Cloud (design tools)."
  },
  {
    id: 24,
    front: "What IaaS examples should you know for A+?",
    back: "Amazon EC2 (virtual servers), Azure Virtual Machines, Google Compute Engine, AWS S3 (storage), Azure Storage, DigitalOcean Droplets."
  },
  {
    id: 25,
    front: "What PaaS examples should you know for A+?",
    back: "Heroku (app hosting), Google App Engine, Azure App Service, AWS Elastic Beanstalk. Developers deploy code, platform handles infrastructure."
  },
  {
    id: 26,
    front: "What connectivity is needed to access cloud services?",
    back: "Internet connection required (broadband recommended). Some services work offline with sync when connected. Critical applications may need redundant internet connections for reliability."
  },
  {
    id: 27,
    front: "What is cloud file synchronization?",
    back: "Automatically keeping files updated across multiple devices and cloud storage. Change file on one device, syncs to all others. Examples: OneDrive, Google Drive, Dropbox sync."
  },
  {
    id: 28,
    front: "What security considerations exist for cloud storage?",
    back: "Data encryption (in transit and at rest), strong passwords/MFA, understand provider's security practices, compliance requirements, data location/sovereignty, sharing permissions management."
  },
  {
    id: 29,
    front: "What is the shared responsibility model in cloud?",
    back: "Security split between provider and customer. Provider secures infrastructure (physical, network, hypervisor). Customer secures data, applications, access controls, user management. Division varies by service type."
  },
  {
    id: 30,
    front: "How does cloud computing enable remote work?",
    back: "Access applications/data from anywhere with internet. Virtual desktops (VDI/DaaS), cloud storage sync, SaaS applications accessible via browser. No VPN needed for cloud-native apps."
  }
];