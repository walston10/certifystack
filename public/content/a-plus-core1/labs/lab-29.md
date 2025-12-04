# Lab 29: Virtualization Concepts

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 30-35 minutes
**Exam Objectives:** 4.1 - Summarize cloud-computing concepts (Virtualization focus)

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What's the difference between a Type 1 and Type 2 hypervisor? Give examples of each and explain when you'd use one over the other.**

2. **A company wants to run Windows Server, Linux, and a legacy application that only works on Windows XP - all on a single physical server. How does virtualization make this possible?**

3. **Explain the difference between a virtual machine snapshot and a clone. When would you use each?**

4. **Why would a business choose to virtualize their servers instead of running each application on its own physical hardware?**

5. **What is a container, and how does it differ from a traditional virtual machine?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses conceptual understanding and research** - Master virtualization without requiring hypervisor installation.

---

#### Activity A: Virtualization Fundamentals

**Goal:** Understand core virtualization concepts.

**Key terminology:**

| Term | Definition |
|------|------------|
| Virtualization | |
| Hypervisor | |
| Virtual Machine (VM) | |
| Host | |
| Guest | |
| Virtual hardware | |

**What virtualization abstracts:**

| Physical Resource | Virtual Equivalent |
|-------------------|-------------------|
| CPU | |
| RAM | |
| Hard drive | |
| Network adapter | |
| Optical drive | |
| USB ports | |

**Benefits of virtualization:**

| Benefit | Explanation |
|---------|-------------|
| Hardware consolidation | |
| Cost savings | |
| Easy backup/recovery | |
| Testing/development | |
| Legacy support | |
| Rapid deployment | |
| Isolation | |

**Virtualization requirements:**

| Requirement | Purpose |
|-------------|---------|
| CPU virtualization support | |
| Sufficient RAM | |
| Storage space | |
| 64-bit host OS (typically) | |

---

#### Activity B: Hypervisor Types

**Goal:** Understand Type 1 and Type 2 hypervisors.

**Type 1 (Bare-Metal) Hypervisors:**

```
┌─────────────────────────────────────────┐
│              Virtual Machines            │
│  ┌───────┐  ┌───────┐  ┌───────┐       │
│  │ VM 1  │  │ VM 2  │  │ VM 3  │       │
│  │Windows│  │ Linux │  │ Linux │       │
│  └───────┘  └───────┘  └───────┘       │
├─────────────────────────────────────────┤
│         Type 1 Hypervisor               │
│    (runs directly on hardware)          │
├─────────────────────────────────────────┤
│            Physical Hardware            │
└─────────────────────────────────────────┘
```

| Type 1 Hypervisor | Vendor | Use Case |
|-------------------|--------|----------|
| VMware ESXi | | |
| Microsoft Hyper-V | | |
| Citrix Hypervisor (XenServer) | | |
| KVM | | |
| Proxmox VE | | |

**Type 2 (Hosted) Hypervisors:**

```
┌─────────────────────────────────────────┐
│              Virtual Machines            │
│  ┌───────┐  ┌───────┐                   │
│  │ VM 1  │  │ VM 2  │                   │
│  │Windows│  │ Linux │                   │
│  └───────┘  └───────┘                   │
├─────────────────────────────────────────┤
│         Type 2 Hypervisor               │
│      (runs as an application)           │
├─────────────────────────────────────────┤
│            Host Operating System         │
│         (Windows, macOS, Linux)         │
├─────────────────────────────────────────┤
│            Physical Hardware            │
└─────────────────────────────────────────┘
```

| Type 2 Hypervisor | Vendor | Use Case |
|-------------------|--------|----------|
| VMware Workstation | | |
| VMware Fusion | | |
| Oracle VirtualBox | | |
| Parallels Desktop | | |
| QEMU | | |

**Type 1 vs Type 2 comparison:**

| Aspect | Type 1 | Type 2 |
|--------|--------|--------|
| Performance | | |
| Resource overhead | | |
| Complexity | | |
| Cost | | |
| Use case | | |
| Host OS required? | | |

---

#### Activity C: Virtual Machine Components

**Goal:** Understand what makes up a virtual machine.

**VM configuration settings:**

| Setting | Purpose | Typical Values |
|---------|---------|----------------|
| Virtual CPUs (vCPUs) | | |
| Memory (RAM) | | |
| Virtual disk size | | |
| Network adapter type | | |
| Disk controller | | |
| Boot order | | |

**Virtual disk types:**

| Type | Description | Pros/Cons |
|------|-------------|-----------|
| Thick provisioned (eager zero) | | |
| Thick provisioned (lazy zero) | | |
| Thin provisioned | | |

**Virtual disk formats:**

| Format | Hypervisor | Extension |
|--------|------------|-----------|
| VMDK | | |
| VHD/VHDX | | |
| VDI | | |
| QCOW2 | | |
| RAW | | |

**Virtual network adapters:**

| Type | Description | Use Case |
|------|-------------|----------|
| Bridged | | |
| NAT | | |
| Host-only | | |
| Internal | | |

**When to use each network type:**

| Scenario | Network Type | Why |
|----------|--------------|-----|
| VM needs to be on same network as host | | |
| VM needs internet but should be isolated | | |
| Testing isolated network environment | | |
| VM needs to communicate only with other VMs | | |

---

#### Activity D: VM Operations

**Goal:** Understand common VM management tasks.

**VM power states:**

| State | Description | Use Case |
|-------|-------------|----------|
| Powered On | | |
| Powered Off | | |
| Suspended | | |
| Paused | | |

**Snapshots:**

| Aspect | Description |
|--------|-------------|
| What it captures | |
| What it doesn't capture | |
| When to use | |
| Performance impact | |
| Best practices | |

**Snapshot operations:**

| Operation | What It Does |
|-----------|--------------|
| Take snapshot | |
| Revert to snapshot | |
| Delete snapshot | |
| Snapshot tree | |

**Cloning:**

| Clone Type | Description | Use Case |
|------------|-------------|----------|
| Full clone | | |
| Linked clone | | |

**Snapshots vs Clones:**

| Feature | Snapshot | Clone |
|---------|----------|-------|
| Purpose | | |
| Storage usage | | |
| Independence | | |
| Speed to create | | |
| Use case | | |

**VM templates:**

| Aspect | Description |
|--------|-------------|
| What it is | |
| How it's created | |
| Benefits | |
| Common use | |

---

#### Activity E: Resource Allocation

**Goal:** Understand how resources are allocated to VMs.

**CPU allocation:**

| Concept | Description |
|---------|-------------|
| vCPU | |
| CPU overcommitment | |
| CPU affinity | |
| CPU shares | |
| CPU reservation | |

**Memory allocation:**

| Concept | Description |
|---------|-------------|
| Memory allocation | |
| Memory overcommitment | |
| Memory ballooning | |
| Memory reservation | |
| Transparent page sharing | |

**Storage allocation:**

| Concept | Description |
|---------|-------------|
| Datastore | |
| Storage overcommitment | |
| Storage I/O Control | |
| Storage vMotion | |

**Overcommitment risks:**

| Resource | Risk of Overcommitting |
|----------|------------------------|
| CPU | |
| Memory | |
| Storage | |

---

#### Activity F: Virtualization Security

**Goal:** Understand security considerations for virtualization.

**Security benefits:**

| Benefit | Explanation |
|---------|-------------|
| Isolation | |
| Easy recovery | |
| Testing environment | |
| Network segmentation | |

**Security concerns:**

| Concern | Description | Mitigation |
|---------|-------------|------------|
| VM escape | | |
| Hypervisor vulnerabilities | | |
| Resource exhaustion | | |
| Snapshot data exposure | | |
| Inter-VM attacks | | |

**Best practices:**

| Practice | Why |
|----------|-----|
| Keep hypervisor updated | |
| Limit VM permissions | |
| Secure management interface | |
| Monitor resource usage | |
| Secure snapshots/backups | |
| Network segmentation | |

---

#### Activity G: Containers

**Goal:** Understand containerization technology.

**Containers vs Virtual Machines:**

```
Virtual Machines:                    Containers:
┌────────┐ ┌────────┐               ┌────────┐ ┌────────┐
│  App   │ │  App   │               │  App   │ │  App   │
├────────┤ ├────────┤               ├────────┤ ├────────┤
│Guest OS│ │Guest OS│               │  Libs  │ │  Libs  │
└────────┘ └────────┘               └────────┘ └────────┘
┌─────────────────────┐             ┌─────────────────────┐
│     Hypervisor      │             │  Container Runtime  │
├─────────────────────┤             ├─────────────────────┤
│      Host OS        │             │      Host OS        │
├─────────────────────┤             ├─────────────────────┤
│     Hardware        │             │     Hardware        │
└─────────────────────┘             └─────────────────────┘
```

**Container concepts:**

| Concept | Description |
|---------|-------------|
| Container | |
| Container image | |
| Container runtime | |
| Registry | |
| Orchestration | |

**VMs vs Containers comparison:**

| Aspect | Virtual Machine | Container |
|--------|-----------------|-----------|
| Isolation level | | |
| Resource overhead | | |
| Startup time | | |
| Size | | |
| Portability | | |
| OS flexibility | | |
| Use case | | |

**Container technologies:**

| Technology | Description | Use |
|------------|-------------|-----|
| Docker | | |
| Kubernetes | | |
| Podman | | |

**When to use VMs vs Containers:**

| Scenario | VM or Container? | Why |
|----------|------------------|-----|
| Running different OS types | | |
| Microservices architecture | | |
| Legacy application | | |
| Development environment | | |
| Strong isolation needed | | |
| Maximum density | | |

---

#### Activity H: Virtual Networking

**Goal:** Understand virtual network components.

**Virtual network components:**

| Component | Description |
|-----------|-------------|
| Virtual switch (vSwitch) | |
| Virtual NIC (vNIC) | |
| Virtual router | |
| Virtual firewall | |
| Port group | |

**Network virtualization types:**

| Type | Description | Use Case |
|------|-------------|----------|
| Standard vSwitch | | |
| Distributed vSwitch | | |
| Software-defined networking (SDN) | | |

**VLAN in virtualization:**

| Concept | Description |
|---------|-------------|
| VLAN tagging | |
| Trunk port | |
| Access port | |
| Port group VLAN ID | |

---

#### Activity I: Virtualization Use Cases

**Goal:** Understand real-world applications.

**Server consolidation scenario:**

| Before Virtualization | After Virtualization |
|----------------------|---------------------|
| 10 physical servers | |
| 10-20% average utilization | |
| 10 sets of hardware to maintain | |
| 10 power/cooling costs | |

**Development and testing:**

| Use Case | How Virtualization Helps |
|----------|--------------------------|
| Testing software updates | |
| Development environments | |
| Training environments | |
| Demo environments | |

**Disaster recovery:**

| Feature | Benefit for DR |
|---------|----------------|
| VM portability | |
| Snapshots | |
| Replication | |
| Faster recovery | |

**Desktop virtualization (VDI):**

| Concept | Description |
|---------|-------------|
| Virtual Desktop Infrastructure | |
| Benefits | |
| Challenges | |
| Use cases | |

---

#### Activity J: Virtualization Scenarios

**Goal:** Practice applying virtualization concepts.

**Scenario 1: Small Business Server**

| Current State | |
|---------------|---|
| 3 physical servers | |
| File server (Windows) | 15% CPU usage |
| Email server (Windows) | 20% CPU usage |
| Database server (Linux) | 30% CPU usage |

Virtualization plan:
- Host hardware specs needed: _______________________
- Hypervisor recommendation: _______________________
- Benefits: _______________________
- Considerations: _______________________

**Scenario 2: Development Team**

| Requirements | |
|--------------|---|
| 5 developers | |
| Each needs Windows and Linux | |
| Need to test on multiple OS versions | |
| Limited budget | |

Solution:
- Hypervisor type: _______________________
- Why: _______________________
- Alternative approach: _______________________

**Scenario 3: Legacy Application**

| Requirements | |
|--------------|---|
| Critical app only runs on Windows XP | |
| Security concerns with XP on network | |
| Must continue using app | |

Solution:
- Approach: _______________________
- Network configuration: _______________________
- Security measures: _______________________

**Scenario 4: Web Application Deployment**

| Requirements | |
|--------------|---|
| Deploying microservices | |
| Need rapid scaling | |
| Same code on dev/staging/prod | |

Solution:
- Technology: _______________________
- Why not VMs: _______________________
- Platform options: _______________________

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Optional** - Requires hypervisor software installation.

---

#### Activity K: Check Virtualization Support

**Goal:** Verify your system supports virtualization.

**Windows - Check CPU virtualization:**

1. Open Task Manager (Ctrl+Shift+Esc)
2. Go to Performance tab → CPU
3. Look for "Virtualization: Enabled/Disabled"

| Check | Result |
|-------|--------|
| Virtualization status | |
| CPU model | |
| Logical processors | |

**Alternative method (Command Prompt):**

```cmd
systeminfo | find "Hyper-V"
```

Document results: _______________________

**Check BIOS/UEFI settings:**

Virtualization technology names by vendor:
- Intel: VT-x, Intel Virtualization Technology
- AMD: AMD-V, SVM Mode

Is it enabled in BIOS? _______________________

---

#### Activity L: Explore Hyper-V (Windows 10/11 Pro)

**Goal:** Explore built-in Windows virtualization.

**Enable Hyper-V (if not already):**

1. Settings → Apps → Optional features → More Windows features
2. Check "Hyper-V" and click OK
3. Restart

**Or via PowerShell (Admin):**
```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

**Explore Hyper-V Manager:**

| Feature | Location/Description |
|---------|---------------------|
| Virtual Switch Manager | |
| New Virtual Machine wizard | |
| Checkpoint (snapshot) | |
| Settings | |

---

#### Activity M: VirtualBox Exploration (Free)

**Goal:** Explore Type 2 hypervisor interface.

**If VirtualBox is installed, document:**

| Setting | Options Available |
|---------|-------------------|
| New VM wizard steps | |
| CPU allocation options | |
| Memory allocation | |
| Storage options | |
| Network adapter modes | |
| Snapshot options | |

**VM settings to note:**

| Category | Key Settings |
|----------|--------------|
| System | |
| Display | |
| Storage | |
| Network | |
| USB | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A VM is running slowly. The host has 32GB RAM and is running four VMs each allocated 12GB. What's likely happening and how would you fix it?**

2. **An admin takes a snapshot before applying updates, but leaves the snapshot in place for 6 months. Why is this problematic?**

3. **A company wants to run 50 instances of the same web application. Would VMs or containers be more appropriate? Why?**

4. **A VM that was working fine yesterday won't start today, showing an error about the virtual disk. What might have happened and what recovery options exist?**

---

## What You Learned Today

- ✅ Understood virtualization fundamentals and benefits
- ✅ Compared Type 1 and Type 2 hypervisors
- ✅ Learned VM components and configuration
- ✅ Mastered VM operations (snapshots, clones, templates)
- ✅ Understood resource allocation concepts
- ✅ Studied virtualization security
- ✅ Compared VMs and containers
- ✅ Learned virtual networking concepts
- ✅ Applied knowledge to real-world scenarios
- ✅ (Tier 2) Explored hypervisor software

**Next Lab:** Cloud Computing Models - IaaS, PaaS, SaaS, and cloud deployment models.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              VIRTUALIZATION QUICK REFERENCE                    ║
╠═══════════════════════════════════════════════════════════════╣
║  HYPERVISOR TYPES:                                             ║
║  Type 1 (Bare-metal): ESXi, Hyper-V, KVM - Production         ║
║  Type 2 (Hosted): VirtualBox, VMware Workstation - Desktop    ║
╠═══════════════════════════════════════════════════════════════╣
║  VIRTUAL DISK TYPES:                                           ║
║  Thick: Pre-allocated space | Thin: Grows as needed           ║
║  Formats: VMDK (VMware) | VHD/VHDX (Hyper-V) | VDI (VBox)    ║
╠═══════════════════════════════════════════════════════════════╣
║  NETWORK MODES:                                                ║
║  Bridged: Same network as host | NAT: Isolated + internet     ║
║  Host-only: Host↔VM only | Internal: VM↔VM only              ║
╠═══════════════════════════════════════════════════════════════╣
║  SNAPSHOT vs CLONE:                                            ║
║  Snapshot: Point-in-time state, quick, dependent on parent    ║
║  Clone: Full copy, independent, takes more space/time         ║
╠═══════════════════════════════════════════════════════════════╣
║  VM vs CONTAINER:                                              ║
║  VM: Full OS, strong isolation, heavy | Different OS types    ║
║  Container: Shared kernel, lightweight | Same OS, fast deploy ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 29: Virtualization Concepts*