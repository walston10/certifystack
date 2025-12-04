export const lesson29Quiz = [
  {
    id: 1,
    question: "What is the primary benefit of using a Type 1 hypervisor over a Type 2 hypervisor?",
    options: [
      "Type 1 is always cheaper",
      "Type 1 (bare metal) runs directly on hardware without host OS, providing better performance, security, and resource management than Type 2 which runs on top of an OS",
      "Type 2 is faster than Type 1",
      "There is no difference between hypervisor types"
    ],
    correct: 1,
    explanation: "Hypervisor types: Type 1 (Bare Metal): (1) Runs directly on hardware (no underlying OS), (2) Examples: VMware ESXi, Microsoft Hyper-V, Citrix XenServer, KVM, (3) Benefits: direct hardware access, better performance (no OS overhead), enhanced security (smaller attack surface), superior resource management, (4) Use: enterprise data centers, production environments, cloud infrastructure, (5) Dedicated hardware (server becomes VM host only). Type 2 (Hosted): (1) Runs as application on host OS, (2) Examples: VMware Workstation, Oracle VirtualBox, Parallels Desktop, (3) Benefits: easier installation, runs alongside host applications, lower cost/free options, good for testing/development, (4) Use: desktop virtualization, development/testing, learning, personal use, (5) Shares resources with host OS (performance impact). Performance comparison: (1) Type 1 - VMs access hardware with minimal overhead, near-native performance, (2) Type 2 - host OS layer adds overhead, 5-20% performance penalty typical. Security: (1) Type 1 - minimal code base, smaller attack surface, isolated management, (2) Type 2 - host OS vulnerabilities affect VMs, larger attack surface. Resource management: (1) Type 1 - hypervisor controls all resources, advanced scheduling, (2) Type 2 - competes with host OS for resources. Selection: production/enterprise = Type 1, development/testing/learning = Type 2."
  },
  {
    id: 2,
    question: "A company wants to run 20 virtual machines on a single physical server. What hardware resources are most critical for VM performance?",
    options: [
      "Only storage speed matters",
      "RAM (memory for all VMs), CPU cores (processing power), fast storage (SSD for VM disk I/O), and network bandwidth - all must be sized for aggregate VM load",
      "Only CPU cores matter",
      "Virtual machines don't require hardware resources"
    ],
    correct: 1,
    explanation: "VM host hardware requirements: RAM (most critical): (1) Each VM needs dedicated RAM, (2) Host OS/hypervisor overhead (~2-4 GB), (3) Example: 20 VMs × 4 GB RAM each = 80 GB minimum + overhead = 84-88 GB total, (4) Insufficient RAM = memory swapping = severe performance degradation, (5) Enterprise servers: 128 GB-1 TB+ RAM common. CPU cores: (1) VMs share physical CPU cores, (2) Oversubscription acceptable (2-4 vCPUs per physical core), (3) CPU-intensive workloads need more cores, (4) Modern servers: 8-64+ cores typical, (5) Example: 20 VMs with 2 vCPUs each = 40 vCPUs, reasonable on 16-core host (2.5:1 ratio). Storage: (1) All VM disks on shared storage, (2) SSD mandatory for good performance (NVMe best), (3) HDD causes I/O bottleneck (VMs wait for disk), (4) RAID configuration for redundancy/speed, (5) Storage requirements: sum of all VM disk sizes + growth. Network: (1) Multiple VMs sharing network interface, (2) 1 Gbps minimum, 10 Gbps recommended for 20 VMs, (3) Multiple NICs for redundancy/load balancing. Hardware virtualization support: (1) Intel VT-x or AMD-V required, (2) Enable in BIOS, (3) Nested virtualization support (VT-x/AMD-V). Sizing methodology: (1) Calculate total VM requirements (sum all VMs), (2) Add hypervisor overhead, (3) Add 20-30% headroom for peaks, (4) RAM cannot be oversubscribed (hard limit), (5) CPU can oversubscribe 2-4:1, (6) Monitor and adjust based on usage."
  },
  {
    id: 3,
    question: "What is a virtual switch, and what is its purpose in virtualization?",
    options: [
      "Virtual switches are physical network switches",
      "Software-based switch inside hypervisor that connects VMs to each other and to physical networks, enabling network communication for VMs",
      "Virtual switches only provide power",
      "VMs don't need network connectivity"
    ],
    correct: 1,
    explanation: "Virtual switch (vSwitch) functions: Purpose: (1) Connects virtual machines to each other (VM-to-VM), (2) Connects VMs to physical network (VM-to-external), (3) Isolates network traffic (VLANs, security), (4) Software implementation of physical switch. How it works: (1) Hypervisor creates virtual switch in software, (2) VMs have virtual network adapters (vNICs), (3) vNICs connect to vSwitch ports, (4) vSwitch connects to physical NICs (uplinks), (5) Traffic forwarding at wire speed (software optimized). Types of virtual switches: (1) Private/Internal - VM-to-VM only, no external access, testing/isolation, (2) Internal - VMs + host, no external, (3) External - VMs + physical network, production use. Configuration: (1) Create vSwitch in hypervisor management, (2) Assign physical NIC(s) as uplinks, (3) Configure VLANs if needed, (4) Connect VM vNICs to appropriate vSwitch, (5) Set bandwidth limits, QoS if needed. Advanced features: (1) Port mirroring (monitoring), (2) VLAN tagging, (3) Traffic shaping (bandwidth limits), (4) NIC teaming (multiple physical NICs for redundancy/bandwidth), (5) Security policies (MAC filtering, promiscuous mode). Multiple vSwitches: (1) Different networks for different purposes (production, backup, management), (2) Security isolation between VM groups, (3) Traffic separation (storage network vs production). Examples: VMware vSwitch, Hyper-V Virtual Switch, Linux Bridge/Open vSwitch. VM sees standard network adapter - no awareness of virtualization. Troubleshooting: (1) Verify VM connected to correct vSwitch, (2) Check physical uplink status, (3) VLAN configuration, (4) Firewall rules."
  },
  {
    id: 4,
    question: "A VM needs to be moved from one physical host to another with minimal downtime. What virtualization feature enables this?",
    options: [
      "VMs cannot be moved between hosts",
      "Live migration (vMotion/Live Migration) - moves running VM between hosts with no perceived downtime by transferring memory state and storage",
      "Must shut down VM and reinstall",
      "Only snapshots can move VMs"
    ],
    correct: 1,
    explanation: "VM migration technologies: Live Migration: (1) Moves running VM between hosts with zero/minimal downtime, (2) VMware: vMotion, Hyper-V: Live Migration, KVM: Live Migration, (3) Transfers memory contents while VM runs, (4) Brief pause (milliseconds) during final memory sync. Requirements: (1) Shared storage (both hosts access same VM disks via SAN/NAS), (2) Compatible CPU architectures (Intel-to-Intel, AMD-to-AMD), (3) Same hypervisor version, (4) High-speed network (1-10 Gbps for memory transfer), (5) Sufficient resources on destination host. Process: (1) Destination host begins receiving memory pages, (2) Source continues running VM, (3) Changed memory pages re-transmitted (iterative), (4) Brief pause, final memory sync, (5) Network reconnection on destination, (6) VM resumes on destination (sub-second interruption). Use cases: (1) Maintenance (move VMs off host for updates), (2) Load balancing (distribute VMs for better performance), (3) Hardware failure prevention (move VMs before failure), (4) Resource optimization. Storage vMotion: (1) Moves VM disk files between storage, (2) VM keeps running during storage migration, (3) No shared storage required (moves VM completely). Cold migration: (1) Shut down VM, copy to new host, power on, (2) Longer downtime but simpler (no special requirements). Benefits: (1) Zero-downtime maintenance, (2) Flexibility in resource management, (3) High availability (quick failover), (4) Hardware lifecycle management. Limitations: (1) Requires enterprise licensing (VMware vSphere), (2) Network intensive (VM memory size transferred), (3) CPU compatibility required."
  },
  {
    id: 5,
    question: "What is the purpose of a VM snapshot, and what should be considered before taking one?",
    options: [
      "Snapshots are the same as backups",
      "Snapshot captures VM state at point in time for quick rollback, but accumulates changes in separate file - not a backup replacement, can impact performance",
      "Snapshots permanently save VMs",
      "Taking snapshots has no considerations"
    ],
    correct: 1,
    explanation: "VM snapshots: Purpose: (1) Captures VM state (memory, disk, configuration) at specific point in time, (2) Quick rollback if changes cause issues, (3) Testing updates/patches (easy rollback), (4) Development checkpoints. How snapshots work: (1) Creates delta/differencing disk, (2) Original disk becomes read-only, (3) New writes go to delta disk, (4) Chain of snapshots possible (snapshot of snapshot), (5) Revert = discard delta, return to parent state. When to use: (1) Before OS/application updates, (2) Before configuration changes, (3) Testing software installation, (4) Development/testing environments, (5) Training scenarios. Considerations before taking snapshot: (1) NOT a backup - snapshot depends on original VM files, if VM storage fails, snapshots lost too, (2) Performance impact - reads may access original + delta disks (slower), writes go to delta (additional overhead), (3) Storage space - delta disk grows as VM changes accumulate, (4) Snapshot chains - multiple snapshots reduce performance further. Best practices: (1) Take snapshot before risky changes, (2) Delete snapshot promptly after no longer needed, (3) Don't use as long-term backup solution, (4) Limit snapshot age (days/weeks, not months), (5) Monitor delta disk size (can grow to original disk size or larger), (6) Avoid snapshots on production VMs (unless necessary). Snapshot limitations: (1) Performance degradation with age, (2) Storage consumption, (3) Complexity (tracking chains), (4) Not application-consistent without proper quiescing. Consolidation: merging snapshot back into base disk (permanent application of changes, removes performance overhead)."
  },
  {
    id: 6,
    question: "What is resource pooling in virtualization, and what problem does it solve?",
    options: [
      "Resource pooling only affects water cooling",
      "Logical grouping of physical resources (CPU, RAM, storage) shared among VMs with defined limits and priorities - enables flexible resource allocation and oversubscription",
      "Resource pools are physical swimming pools",
      "Virtualization doesn't use resource pooling"
    ],
    correct: 1,
    explanation: "Resource pooling concepts: Definition: (1) Aggregating physical resources (CPU, RAM, storage) into logical pools, (2) Distributing pool resources among VMs, (3) Setting limits, reservations, and shares for VMs/groups. Benefits: (1) Resource sharing - multiple VMs share physical hardware efficiently, (2) Oversubscription - allocate more virtual resources than physical (works because not all VMs peak simultaneously), (3) Isolation - prevent one VM from monopolizing resources, (4) Flexibility - adjust allocations without hardware changes, (5) Prioritization - critical VMs get guaranteed resources. Resource controls: Reservations: (1) Guaranteed minimum resources, (2) Example: VM guaranteed 2 GHz CPU even under contention, (3) Ensures critical VM performance. Limits: (1) Maximum resources VM can consume, (2) Example: VM capped at 4 GB RAM even if more available, (3) Prevents resource hogging. Shares: (1) Relative priority during contention, (2) High/Normal/Low or numeric values, (3) Example: VM with 2000 shares gets 2× resources of VM with 1000 shares when competing. Implementation: (1) Create resource pool (group of VMs), (2) Assign pool resources from physical cluster, (3) Set pool reservations/limits/shares, (4) VMs within pool share pool resources, (5) Hierarchical pools possible (nested). Example scenario: (1) Physical host: 32 GB RAM, 16 cores, (2) Production pool: 20 GB reservation, High shares, (3) Development pool: 8 GB reservation, Low shares, (4) Under contention, production VMs prioritized. Oversubscription: (1) Allocate 48 GB RAM to VMs on 32 GB host (1.5:1 ratio), (2) Works if not all VMs use max simultaneously, (3) Memory ballooning/swapping if overcommit too aggressive. Monitoring: track actual resource usage to optimize allocations."
  },
  {
    id: 7,
    question: "A developer wants to test software on Windows, Linux, and macOS simultaneously on a single machine. What virtualization solution is most appropriate?",
    options: [
      "Must buy three separate computers",
      "Type 2 hypervisor (VirtualBox, VMware Workstation, Parallels) - runs multiple guest OS VMs on single desktop for testing/development",
      "Type 1 hypervisor only works for this",
      "Cannot run multiple operating systems on one machine"
    ],
    correct: 1,
    explanation: "Desktop virtualization for development: Type 2 hypervisor solutions: VMware Workstation (Windows/Linux): (1) Mature, feature-rich, paid ($200+), (2) Excellent performance, (3) Snapshot, cloning, networking features, (4) Industry standard. Oracle VirtualBox (All platforms): (1) Free and open source, (2) Cross-platform (Windows, macOS, Linux host), (3) Good performance, active development, (4) Extension pack for USB 3.0, RDP, (5) Wide OS guest support. Parallels Desktop (macOS): (1) Optimized for Mac, (2) Coherence mode (seamless Windows/Mac integration), (3) Excellent performance on Apple Silicon/Intel Macs, (4) Paid subscription. VMware Fusion (macOS): (1) Similar to Parallels, (2) VMware ecosystem integration, (3) Paid. Setup: (1) Install hypervisor on host OS (Windows, macOS, Linux), (2) Create VMs for each guest OS, (3) Allocate resources (2-4 GB RAM per VM, 1-2 cores), (4) Install guest OS (Windows, Linux, macOS), (5) Install guest additions/tools (better performance, clipboard sharing). Advantages for developers: (1) Test software on multiple OS from single machine, (2) Quick switching between environments, (3) Snapshots for clean testing states, (4) Isolated environments (no conflicts), (5) Share files between host and guests. Resource requirements: (1) Host needs ample RAM (16 GB minimum for 2-3 VMs, 32 GB better), (2) Multi-core CPU (4+ cores recommended), (3) SSD strongly recommended (VM disk I/O intensive), (4) Sufficient storage (20-60 GB per VM). Licensing: (1) Need valid OS licenses for Windows/macOS guests, (2) Linux guests free (most distributions), (3) macOS VMs only legal on Apple hardware (per EULA)."
  },
  {
    id: 8,
    question: "What is the difference between full virtualization and paravirtualization?",
    options: [
      "They are identical technologies",
      "Full virtualization runs unmodified guest OS with hypervisor translating instructions; paravirtualization modifies guest OS to communicate directly with hypervisor for better performance",
      "Paravirtualization is always worse",
      "Full virtualization requires modified OS"
    ],
    correct: 1,
    explanation: "Virtualization techniques: Full virtualization: (1) Guest OS runs unmodified (no changes required), (2) Hypervisor emulates complete hardware environment, (3) Binary translation or hardware-assisted (VT-x/AMD-V), (4) Guest OS unaware of virtualization, (5) Examples: VMware Workstation, VirtualBox (HVM mode), (6) Advantage: any OS works without modification, (7) Disadvantage: slight performance overhead (translation). Paravirtualization: (1) Guest OS modified to be aware of virtualization, (2) Hypercalls replace privileged instructions (direct communication with hypervisor), (3) Better performance (no translation overhead), (4) Examples: Xen (paravirtualized mode), early VMware ESX, (5) Advantage: near-native performance, reduced overhead, (6) Disadvantage: requires modified OS (limiting guest OS options). Hardware-assisted virtualization: (1) CPU extensions (Intel VT-x, AMD-V), (2) Hardware handles virtualization (no binary translation), (3) Near-native performance with unmodified OS, (4) Best of both worlds, (5) Modern standard (all enterprise hypervisors). Paravirtualized drivers: (1) Hybrid approach - unmodified OS but paravirtualized drivers, (2) VMware Tools, VirtualBox Guest Additions, Hyper-V Integration Services, (3) Network, disk, graphics drivers optimized for virtualization, (4) Improves performance without full OS modification. Modern practice: (1) Hardware-assisted full virtualization standard, (2) Paravirtualized drivers for I/O performance, (3) Pure paravirtualization rare (legacy), (4) Container technology (Docker) different paradigm - not full OS virtualization."
  },
  {
    id: 9,
    question: "A VM is experiencing poor disk I/O performance. What are potential causes and solutions?",
    options: [
      "VM disk performance cannot be improved",
      "Causes: host storage on HDD, storage oversubscription, snapshot chains; Solutions: migrate to SSD, delete old snapshots, enable caching, consider storage vMotion",
      "Only buying new VMs works",
      "Disk performance is always perfect in VMs"
    ],
    correct: 1,
    explanation: "VM storage performance troubleshooting: Common causes: (1) Host storage on spinning HDD - extremely slow for VMs (multiple VMs competing for disk I/O), (2) Snapshot chains - each snapshot adds disk layer (performance degradation), (3) Storage oversubscription - too many VMs on same datastore/LUN, (4) Thick vs thin provisioning - thin can cause space exhaustion, fragmentation, (5) Insufficient storage queue depth, (6) Network storage latency (NFS, iSCSI). Solutions: Migrate to SSD: (1) Single biggest improvement, (2) SSD provides IOPS needed for multiple VMs, (3) NVMe best performance, (4) Use SSD for VM storage, HDD for archives/backups. Delete/consolidate snapshots: (1) Old snapshots kill performance, (2) Consolidate snapshots (merge delta disks), (3) Avoid keeping snapshots >24-48 hours on production. Storage vMotion: (1) Move VM to less busy datastore, (2) Balance VM storage across available storage. Enable caching: (1) Host-side caching (RAM/SSD), (2) Guest OS disk caching if safe (not always recommended for databases). Thick provisioning: (1) Pre-allocate disk space (eager zeroed thick best performance), (2) Thin provisioning can fragment, cause delays. Storage tiering: (1) Place busy VMs on fast storage (SSD), (2) Less-busy VMs on slower storage (HDD), (3) Storage DRS can automate. Paravirtualized storage drivers: (1) VMware Paravirtual SCSI adapter, (2) Better performance than emulated LSI Logic, (3) Install VMware Tools/integration services. Monitoring: (1) Check storage latency metrics, (2) IOPS utilization, (3) Queue depth, (4) Identify bottlenecks. Physical storage considerations: (1) RAID configuration (RAID 10 best performance), (2) Adequate HBA/controller, (3) Multipathing for redundancy and load balancing."
  },
  {
    id: 10,
    question: "What is the purpose of nested virtualization, and when would it be used?",
    options: [
      "Nested virtualization is installing multiple hypervisors side-by-side",
      "Running a hypervisor inside a VM (VM within VM) - used for testing hypervisors, labs, training environments without additional physical hardware",
      "Nested virtualization only works with Type 2 hypervisors",
      "Nesting VMs provides no benefits"
    ],
    correct: 1,
    explanation: "Nested virtualization concepts: Definition: (1) Running hypervisor inside a VM (L1 VM), (2) L1 VM hosts additional VMs (L2 VMs), (3) VM within VM within physical host, (4) Requires CPU virtualization extensions exposed to guest (Intel VT-x/AMD-V pass-through). Use cases: Testing hypervisors: (1) Test ESXi, Hyper-V without dedicated hardware, (2) Lab environments for learning, (3) Hypervisor development/testing. Training and demonstrations: (1) Create complex virtual environments, (2) Students learn virtualization without physical servers, (3) Instructor demos on single laptop. Development environments: (1) Test software requiring virtualization, (2) Container testing (Docker on VM), (3) Kubernetes development (VMs running containers). Requirements: (1) Physical host with VT-x/AMD-V enabled, (2) L0 hypervisor (physical) supports nested virtualization, (3) Expose hardware virtualization to L1 VM, (4) L1 VM has sufficient resources (RAM, CPU), (5) Nested virtualization enabled in hypervisor settings. Configuration: VMware Workstation/Fusion: (1) VM Settings → Processors → Virtualize Intel VT-x/AMD-V, (2) At least 4 GB RAM for L1 VM (more if running L2 VMs). VirtualBox: (1) Enable Nested VT-x/AMD-V in VM settings, (2) May require additional configuration. Hyper-V: (1) Enable-VmProcessor -VMName <name> -ExposeVirtualizationExtensions $true. Performance: (1) Significant overhead (each virtualization layer adds latency), (2) Not for production workloads, (3) Testing/development only, (4) L2 VMs run 30-50% slower than native. Limitations: (1) Not all features work (some require physical hardware), (2) Maximum 2 levels practical (L0→L1→L2), (3) Complex troubleshooting."
  },
  {
    id: 11,
    question: "What is a virtual desktop infrastructure (VDI), and what are its benefits?",
    options: [
      "VDI is just regular desktop computers",
      "Centralized desktop management where user desktops run as VMs in datacenter, accessed remotely - enables centralized management, security, and flexible access",
      "VDI only works for gaming",
      "Virtual desktops have no advantages"
    ],
    correct: 1,
    explanation: "VDI architecture and benefits: How VDI works: (1) User desktops run as VMs on datacenter servers, (2) Users connect via thin clients, laptops, or mobile devices, (3) Remote display protocol (RDP, PCoIP, HDX) transmits screen/input, (4) Processing happens on server, not endpoint, (5) Centralized management and storage. VDI solutions: (1) VMware Horizon, (2) Citrix Virtual Apps and Desktops, (3) Microsoft Azure Virtual Desktop, (4) Amazon WorkSpaces. Benefits: Centralized management: (1) Patch all desktops from datacenter, (2) Image management (golden image for consistency), (3) No visiting physical desktops for IT. Security: (1) Data stays in datacenter (not on endpoint device), (2) Lost/stolen device = no data loss, (3) Centralized backup/DR, (4) Compliance easier (controlled environment). Flexibility: (1) Access desktop from any device, (2) Work from home seamlessly, (3) BYOD (Bring Your Own Device) support, (4) Consistent experience across devices. Cost considerations: (1) Reduced endpoint costs (thin clients cheaper than PCs), (2) Longer endpoint lifespan (processing on server), (3) However: VDI infrastructure expensive (servers, storage, licensing), (4) Per-user licensing costs. Types: Persistent: (1) Each user gets dedicated VM, (2) Personalization saved, (3) Like traditional PC experience. Non-persistent: (1) Users get random VM from pool, (2) Resets after logout, (3) Lower cost, better for task workers. Use cases: (1) Call centers, (2) Remote workers, (3) Contractors (temporary access), (4) Healthcare (HIPAA compliance), (5) High security environments. Requirements: (1) Adequate datacenter infrastructure (compute, storage, network), (2) High-speed network (low latency critical for user experience), (3) Connection broker (assigns VMs to users), (4) Thin client or endpoint software."
  },
  {
    id: 12,
    question: "A VM's virtual CPU count should be configured based on what factors?",
    options: [
      "Always allocate maximum CPUs available",
      "Based on application requirements, workload type (CPU-intensive vs I/O-bound), and host CPU resources - overallocation can hurt performance through scheduling overhead",
      "All VMs need 16 vCPUs",
      "vCPU configuration doesn't matter"
    ],
    correct: 1,
    explanation: "vCPU allocation best practices: Factors to consider: (1) Application CPU requirements (vendor recommendations), (2) Workload characteristics (CPU-intensive vs I/O-bound), (3) Host physical cores available, (4) Other VMs on same host (sharing), (5) CPU scheduling overhead (more vCPUs = more scheduling complexity). General guidelines: (1) Start with 1-2 vCPUs, monitor utilization, (2) Increase only if CPU consistently high (>80%), (3) Many applications perform well with 2-4 vCPUs, (4) Web servers, file servers - 2-4 vCPUs typical, (5) Database servers - 4-8+ vCPUs depending on size. Overallocation issues: (1) VM with 8 vCPUs must wait for 8 physical cores available simultaneously, (2) Increases scheduling latency, (3) Co-scheduling penalty (scheduler must coordinate multiple vCPUs), (4) Can reduce performance vs fewer vCPUs. CPU ready time: (1) Time VM wants to execute but waits for physical CPU, (2) High CPU ready = performance problem, (3) Reducing vCPU count can improve performance if overallocated. Oversubscription ratio: (1) vCPU:pCore ratio, (2) 2-4:1 typical and safe, (3) Example: 16-core host, 32-64 vCPUs allocated across all VMs, (4) Depends on workload (many idle periods = higher ratio possible). Specific workloads: CPU-intensive (video encoding, rendering): (1) Needs more vCPUs, (2) Monitor and allocate based on sustained high usage. I/O-bound (file servers, light web): (1) Spends time waiting for disk/network, (2) More vCPUs doesn't help, (3) 1-2 vCPUs often sufficient. Right-sizing: (1) Monitor actual CPU usage over weeks, (2) If consistently <20%, reduce vCPUs, (3) Reclaim resources for other VMs, (4) Regular optimization reviews. Hot-add CPU: some hypervisors allow adding vCPUs without shutdown (requires guest OS support)."
  },
  {
    id: 13,
    question: "What is the difference between cloning a VM and creating a template?",
    options: [
      "They are exactly the same",
      "Cloning creates independent copy of existing VM; template is master image converted to read-only, used to deploy multiple VMs consistently",
      "Clones are always slower",
      "Templates cannot be used"
    ],
    correct: 1,
    explanation: "VM cloning vs templates: Cloning: (1) Creates exact copy of existing VM, (2) Independent VM (separate files), (3) Can clone powered-on or powered-off VM, (4) Clone includes all VM settings, data, applications, (5) Quick way to duplicate VMs, (6) Linked clones possible (share parent disk, save space). Process: (1) Right-click VM → Clone, (2) Choose full clone or linked clone, (3) Customize (name, location), (4) Optionally customize guest OS (sysprep/generalize). Use cases: (1) Testing (clone production for safe testing), (2) Development (each developer gets identical environment), (3) Scaling (quickly deploy additional application servers). Templates: (1) Master image converted to read-only, (2) Cannot be powered on (not a VM, just image), (3) Used to deploy new VMs consistently, (4) Standardized build (OS, patches, applications), (5) Deploy multiple VMs from single template. Process: (1) Build VM with desired OS/applications, (2) Generalize OS (sysprep on Windows, cloud-init on Linux - removes unique identifiers), (3) Convert VM to template, (4) Deploy VMs from template (specify name, network, etc.). Benefits of templates: (1) Consistency (all VMs start identical), (2) Faster deployment than installing OS, (3) Best practices baked in (security, configuration), (4) Version control (maintain multiple template versions), (5) Easier maintenance (update template, redeploy VMs). Template management: (1) Regular updates (patch OS, update applications), (2) Version tracking (Template-Windows2022-v1.2), (3) Testing before production use, (4) Document template contents. Linked clones: (1) Child disks reference parent template, (2) Saves storage (shared base disk), (3) Faster provisioning, (4) Dependencies (parent must remain), (5) Good for VDI, labs. Customization: (1) Customization specifications (VMware), (2) Sysprep answer files (Windows), (3) Cloud-init (Linux), (4) Automate post-deployment configuration (hostname, IP, domain join)."
  },
  {
    id: 14,
    question: "What is the purpose of VM guest tools (VMware Tools, Hyper-V Integration Services, VirtualBox Guest Additions)?",
    options: [
      "Guest tools are optional and provide no benefit",
      "Essential software installed in guest OS that provides paravirtualized drivers, time synchronization, improved graphics, clipboard sharing, and enables graceful shutdown",
      "Guest tools only change VM color",
      "Guest tools slow down VMs"
    ],
    correct: 1,
    explanation: "VM guest tools/integration services: Purpose and benefits: Paravirtualized drivers: (1) Optimized network adapter driver (VMXNET3, synthetic network adapter), (2) Optimized storage controller driver (PVSCSI, synthetic SCSI), (3) 10-50% performance improvement vs emulated devices, (4) Reduced CPU overhead. Graphics: (1) Better display resolution support, (2) Smoother mouse movement, (3) Multiple monitor support, (4) Hardware-accelerated graphics (where supported), (5) Dynamic resolution (resize window = resize display). Time synchronization: (1) Keeps guest OS clock synchronized with host, (2) Critical for authentication (Kerberos), logs, (3) Prevents clock drift in VMs. Integration features: (1) Clipboard sharing (copy/paste between host and guest), (2) File drag-and-drop, (3) Shared folders (access host folders from guest), (4) Improved mouse handling (seamless capture/release). Management: (1) Graceful shutdown (shutdown VM from hypervisor, not forced), (2) Quiescing (consistent snapshots with running applications), (3) Heartbeat monitoring (hypervisor knows guest OS responsive), (4) Guest OS information reporting (IP address, installed apps). Installation: VMware Tools: (1) VM menu → Install VMware Tools, (2) Mounts ISO in guest, (3) Run installer, (4) Reboot guest. Hyper-V Integration Services: (1) Built into modern Windows, (2) Linux requires Hyper-V LIS installation, (3) Usually automatic. VirtualBox Guest Additions: (1) Devices menu → Insert Guest Additions CD, (2) Run installer in guest, (3) Reboot. Maintenance: (1) Keep tools updated (security, compatibility, performance), (2) Update with VMware/Hyper-V upgrades, (3) Tools version should match hypervisor version ideally. Without guest tools: (1) Slower performance (emulated devices), (2) Resolution problems, (3) Poor mouse integration, (4) Forced shutdowns only (no graceful). Recommendation: ALWAYS install guest tools/integration services - essential, not optional."
  },
  {
    id: 15,
    question: "What security considerations are important when running multiple VMs on a single host?",
    options: [
      "VMs are automatically secure with no concerns",
      "VM isolation (prevent VM escape), network segmentation (separate VLANs), resource limits (prevent DoS), patch management, and encrypted storage",
      "Security doesn't apply to virtual machines",
      "Only physical security matters"
    ],
    correct: 1,
    explanation: "VM security best practices: VM isolation: (1) Hypervisor enforces isolation between VMs, (2) VM escape attacks (theoretical - VM breaks out to host), (3) Keep hypervisor patched (critical security updates), (4) Minimize hypervisor attack surface, (5) Disable unnecessary services/features on host. Network segmentation: (1) Separate VLANs for different security zones, (2) Production VMs on separate vSwitch from management, (3) DMZ VMs isolated from internal VMs, (4) Firewall between VM segments, (5) Micro-segmentation (VM-to-VM firewall rules). Resource controls: (1) Set resource limits (prevent one VM DoSing others), (2) CPU, memory, storage, network limits, (3) Reservations for critical VMs (guaranteed resources), (4) Prevent noisy neighbor problems. Access control: (1) Least privilege for hypervisor management, (2) Role-based access control (RBAC), (3) Multi-factor authentication for management interfaces, (4) Separate admin accounts, (5) Audit logging. Patch management: (1) Hypervisor patches (monthly at minimum), (2) Guest OS patches (same as physical), (3) VM tools/integration services updates, (4) Firmware updates (host BIOS, hardware), (5) Coordinated patching schedule. Encryption: (1) Encrypt VM disks at rest, (2) Encrypted vMotion/live migration, (3) Encrypted backups, (4) TPM virtual devices for BitLocker/secure boot. Backup and recovery: (1) Regular VM backups (hourly/daily/weekly), (2) Test restoration procedures, (3) Separate backup storage from production, (4) Immutable backups (ransomware protection). Monitoring and logging: (1) Security event monitoring, (2) Performance anomaly detection, (3) VM sprawl control (unauthorized VMs), (4) Configuration compliance checking. Special considerations: (1) License compliance (OS licenses per VM), (2) Data sovereignty (where VMs run geographically), (3) Compliance requirements (PCI-DSS, HIPAA), (4) Insider threats (admins have significant access)."
  }
];