export const lesson29Flashcards = [
  {
    id: 1,
    front: "What is virtualization?",
    back: "Technology that allows multiple virtual machines (VMs) to run on a single physical computer. Each VM acts as independent computer with own OS, apps, and resources - isolated from others."
  },
  {
    id: 2,
    front: "What are the main benefits of virtualization?",
    back: "Hardware consolidation (fewer physical servers), cost savings (power, cooling, space), rapid deployment, easy testing/development, legacy system support, disaster recovery simplification."
  },
  {
    id: 3,
    front: "What is a hypervisor?",
    back: "Software layer that creates and manages virtual machines. Sits between hardware and VMs, allocating resources (CPU, RAM, storage) to each VM. Also called Virtual Machine Monitor (VMM)."
  },
  {
    id: 4,
    front: "What is a Type 1 (bare metal) hypervisor?",
    back: "Runs directly on physical hardware without host OS. Examples: VMware ESXi, Microsoft Hyper-V Server, Citrix XenServer, KVM. Used in enterprise/data centers - better performance and security."
  },
  {
    id: 5,
    front: "What is a Type 2 (hosted) hypervisor?",
    back: "Runs on top of existing operating system. Examples: VMware Workstation, Oracle VirtualBox, Parallels Desktop. Used for desktop virtualization, testing, development - easier to set up."
  },
  {
    id: 6,
    front: "What are common Type 1 hypervisor examples?",
    back: "VMware ESXi (most popular enterprise), Microsoft Hyper-V Server, Citrix XenServer, KVM (Linux Kernel-based Virtual Machine). Used in production data centers."
  },
  {
    id: 7,
    front: "What are common Type 2 hypervisor examples?",
    back: "Oracle VirtualBox (free, cross-platform), VMware Workstation (Windows/Linux), VMware Fusion (Mac), Parallels Desktop (Mac). Used on desktops for testing and development."
  },
  {
    id: 8,
    front: "What is a virtual machine (VM)?",
    back: "Software-based computer running inside hypervisor. Has virtual CPU, RAM, storage, network adapter. Runs complete OS and applications independently. Isolated from host and other VMs."
  },
  {
    id: 9,
    front: "How do you allocate resources to a VM?",
    back: "Configure in hypervisor: set number of virtual CPUs, amount of RAM, storage size, network adapters. Resources allocated from physical host - total VM resources can't exceed host capacity."
  },
  {
    id: 10,
    front: "What is a VM snapshot?",
    back: "Point-in-time copy of VM's state (disk, memory, settings). Allows rollback to previous state if updates fail or problems occur. Take before major changes - updates, software installation, configuration."
  },
  {
    id: 11,
    front: "What is VM cloning?",
    back: "Creating exact duplicate of existing VM. Faster than installing new VM from scratch. Useful for deploying multiple identical systems - web servers, development environments, test labs."
  },
  {
    id: 12,
    front: "What is live migration (vMotion)?",
    back: "Moving running VM from one physical host to another without downtime. VM continues running during transfer. Enables hardware maintenance, load balancing. VMware calls it vMotion, others use different names."
  },
  {
    id: 13,
    front: "What is a virtual switch?",
    back: "Software-based network switch inside hypervisor. Connects VMs to each other and to physical network. Can create isolated networks, VLANs, configure port groups - works like physical switch."
  },
  {
    id: 14,
    front: "What is a virtual NIC (network interface card)?",
    back: "Software-based network adapter assigned to VM. Appears as real NIC to guest OS. Can have own MAC address, connect to different virtual switches, multiple NICs per VM supported."
  },
  {
    id: 15,
    front: "What is resource pooling in virtualization?",
    back: "Combining physical resources (CPU, RAM, storage) from multiple hosts into shared pool. VMs draw from pool as needed. Enables better utilization and flexibility in resource allocation."
  },
  {
    id: 16,
    front: "What is application virtualization?",
    back: "Running applications in isolated environment without installing them on OS. App thinks it's installed but actually runs in container/sandbox. Examples: Microsoft App-V, VMware ThinApp. Reduces conflicts."
  },
  {
    id: 17,
    front: "What are containers and how do they differ from VMs?",
    back: "Lightweight virtualization packaging app with dependencies. Share host OS kernel (no separate OS per container). Faster startup, less overhead than VMs. Docker is most common container platform."
  },
  {
    id: 18,
    front: "What is Docker?",
    back: "Popular container platform for packaging and running applications. Containers include app code, libraries, dependencies - run consistently across environments. Lighter weight than full VMs."
  },
  {
    id: 19,
    front: "What is Kubernetes?",
    back: "Container orchestration platform for managing many containers across multiple hosts. Automates deployment, scaling, load balancing, self-healing. Essential for large-scale container deployments."
  },
  {
    id: 20,
    front: "What CPU features are required for virtualization?",
    back: "Intel VT-x or AMD-V (hardware virtualization extensions). Enables hypervisor to run VMs efficiently. Must be enabled in BIOS/UEFI - often disabled by default on consumer systems."
  },
  {
    id: 21,
    front: "How much RAM does a host need for virtualization?",
    back: "Enough for host OS plus all running VMs combined. Example: host needs 4GB, three VMs need 4GB each = minimum 16GB total. More RAM = more/better performing VMs."
  },
  {
    id: 22,
    front: "What is the purpose of VM snapshots before updates?",
    back: "Create restore point before risky changes. If update breaks VM, revert to snapshot - back to working state in minutes. Best practice before OS updates, software installs, configuration changes."
  },
  {
    id: 23,
    front: "What is nested virtualization?",
    back: "Running hypervisor inside a VM to create VMs within VMs. Used for testing hypervisors, training, lab environments. Requires host CPU support and significant resources - very resource intensive."
  },
  {
    id: 24,
    front: "What happens if you over-commit resources in virtualization?",
    back: "Allocating more virtual resources than physically available. Can cause performance degradation when VMs compete for resources. Some over-commitment acceptable if VMs don't peak simultaneously."
  },
  {
    id: 25,
    front: "What is the difference between thick and thin provisioning?",
    back: "Thick: VM allocated all disk space immediately (slower creation, guaranteed space). Thin: VM gets space as needed (faster creation, risk of running out). Thin allows over-subscription of storage."
  },
  {
    id: 26,
    front: "What are VM tools/guest additions?",
    back: "Special drivers and utilities installed inside guest OS. Enable better performance, mouse/clipboard integration, shared folders, time synchronization. VMware Tools, VirtualBox Guest Additions, Hyper-V Integration Services."
  },
  {
    id: 27,
    front: "What is high availability in virtualization?",
    back: "Automatically restarting VMs on different host if physical host fails. Requires clustered hosts with shared storage. Minimizes downtime - VM restarts in minutes rather than waiting for hardware repair."
  },
  {
    id: 28,
    front: "What network modes are available for VMs?",
    back: "Bridged (VM on physical network, own IP), NAT (VM shares host IP, can access internet), Host-only (VM only talks to host/other VMs, isolated), Internal (VMs talk to each other only)."
  },
  {
    id: 29,
    front: "What is P2V (Physical to Virtual) migration?",
    back: "Converting physical computer into virtual machine. Captures entire system (OS, apps, data) and creates VM. Useful for legacy systems, disaster recovery, hardware consolidation. Tools: VMware Converter, Disk2vhd."
  },
  {
    id: 30,
    front: "What security benefits does virtualization provide?",
    back: "Isolation (compromised VM doesn't affect others), easy snapshots for recovery, sandbox testing of suspicious files, rapid deployment of patched systems, network segmentation between VMs."
  }
];