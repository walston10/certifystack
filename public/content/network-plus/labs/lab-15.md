# Lesson 15 Lab: Cloud Concepts and Virtualization

**Estimated Time:** 30-35 minutes  
**Topics:** Cloud service models, Deployment models, Virtualization, Containers, SDN

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand cloud and virtualization:

1. **What does IaaS stand for?**
   - a) Internet as a Service
   - b) Infrastructure as a Service
   - c) Integration as a Service
   - d) Information as a Service

2. **Which cloud model gives you virtual machines but you manage the OS?**
   - a) SaaS
   - b) PaaS
   - c) IaaS
   - d) FaaS

3. **What is the main difference between Type 1 and Type 2 hypervisors?**
   - a) Type 1 runs on bare metal, Type 2 runs on an OS
   - b) Type 1 is faster, Type 2 is slower
   - c) Type 1 is for servers, Type 2 is for desktops
   - d) All of the above

4. **What is a container?**
   - a) A full virtual machine
   - b) Lightweight application packaging with shared OS kernel
   - c) A type of hypervisor
   - d) A cloud deployment model

5. **What does SDN stand for?**
   - a) Secure Data Network
   - b) Software-Defined Networking
   - c) Standard Distribution Network
   - d) System Development Network

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Identify Cloud Services You Use

**List cloud services you already use:**

**SaaS (Software as a Service) - you probably use these:**
- [ ] Gmail / Outlook.com (email)
- [ ] Google Drive / OneDrive (storage)
- [ ] Netflix / Spotify (streaming)
- [ ] Zoom / Teams (video conferencing)
- [ ] Salesforce (CRM)
- [ ] Office 365 / Google Workspace (productivity)
- [ ] Dropbox (file sync)
- [ ] Slack (messaging)

**How many SaaS services do you use daily?** _________________________________

**What you DON'T manage:**
- Infrastructure (servers, storage, networking)
- Platform (operating system, databases)
- Application maintenance (updates, patches)

**What you DO manage:**
- Your data
- User accounts
- Some configuration

---

**PaaS (Platform as a Service) - if you're a developer:**
- [ ] Heroku (app hosting)
- [ ] Google App Engine
- [ ] AWS Elastic Beanstalk
- [ ] Azure App Service

**Do you use any PaaS?** _________________________________

---

**IaaS (Infrastructure as a Service) - if you run servers:**
- [ ] AWS EC2 (virtual machines)
- [ ] Azure VMs
- [ ] Google Compute Engine
- [ ] DigitalOcean Droplets

**Do you use any IaaS?** _________________________________

---

### Activity B: Cloud Service Model Classification

**For each scenario, identify the cloud model (IaaS, PaaS, or SaaS):**

**Scenario 1:** You use Microsoft Office online through a web browser
- Model: _________________________________ (SaaS)
- Why: _________________________________

**Scenario 2:** You rent a virtual machine from AWS and install your own web server software
- Model: _________________________________ (IaaS)
- Why: _________________________________

**Scenario 3:** You deploy your Python app to Heroku without managing servers
- Model: _________________________________ (PaaS)
- Why: _________________________________

**Scenario 4:** Your company uses Salesforce for customer management
- Model: _________________________________ (SaaS)
- Why: _________________________________

**Scenario 5:** You create a Docker container and deploy it to Azure Container Instances
- Model: _________________________________ (PaaS or CaaS - Container as a Service)
- Why: _________________________________

---

### Activity C: Responsibility Matrix

**Fill in who manages what for each cloud model:**

| Component | On-Premises | IaaS | PaaS | SaaS |
|-----------|-------------|------|------|------|
| Applications | You | You | You | _______ |
| Data | You | You | You | _______ |
| Runtime | You | You | _______ | _______ |
| Middleware | You | You | _______ | _______ |
| Operating System | You | You | _______ | _______ |
| Virtualization | You | _______ | _______ | _______ |
| Servers | You | _______ | _______ | _______ |
| Storage | You | _______ | _______ | _______ |
| Networking | You | _______ | _______ | _______ |

**Pattern:**
- More you manage → More control, more work
- Less you manage → Less control, easier

---

### Activity D: Cloud Deployment Models

**Match each deployment to its type:**

**Public Cloud:**
- Description: _________________________________
- Examples: AWS, Azure, Google Cloud
- Best for: _________________________________

**Private Cloud:**
- Description: _________________________________
- Example: Your company's internal cloud
- Best for: _________________________________

**Hybrid Cloud:**
- Description: _________________________________
- Example: Some workloads in AWS, some on-premises
- Best for: _________________________________

**Community Cloud:**
- Description: _________________________________
- Example: Healthcare cloud shared by multiple hospitals
- Best for: _________________________________

---

**Your situation:**
- Which model does your company use? _________________________________
- Which model do you personally use? _________________________________ (Public - Gmail, Netflix, etc.)

---

### Activity E: Virtual Machine Exploration (If Available)

**If you have access to a VM (VirtualBox, VMware, Parallels, Hyper-V):**

1. **What virtualization software do you have?**
   - [ ] VirtualBox (free)
   - [ ] VMware Workstation/Fusion
   - [ ] Parallels (Mac)
   - [ ] Hyper-V (Windows Pro)
   - [ ] None (skip this section)

2. **What VMs do you have?**
   - VM 1: _________________________________ (OS, purpose)
   - VM 2: _________________________________ (OS, purpose)

3. **Check VM settings:**
   - RAM allocated: _________________________________ GB
   - CPU cores: _________________________________
   - Disk size: _________________________________ GB
   - Network adapter type: _________________________________ (NAT, Bridged, Host-Only)

4. **Start the VM and check:**
   - Boot time: _________________________________ seconds
   - Can you ping host computer? _________________________________
   - Can you access internet? _________________________________

---

**If you don't have a VM, you can:**
- Download VirtualBox (free): https://www.virtualbox.org/
- Download a Linux ISO: Ubuntu, Linux Mint, etc.
- Create a VM (but this takes time - optional!)

---

### Activity F: Hypervisor Type Classification

**Classify these as Type 1 (bare metal) or Type 2 (hosted):**

| Software | Type | Description |
|----------|------|-------------|
| VMware ESXi | _____ | Enterprise server hypervisor |
| VirtualBox | _____ | Desktop virtualization |
| Hyper-V | _____ | Windows built-in hypervisor |
| VMware Workstation | _____ | Desktop virtualization for Windows/Linux |
| KVM | _____ | Linux kernel-based hypervisor |
| Xen | _____ | Open source bare metal hypervisor |
| Parallels Desktop | _____ | Mac virtualization software |

**Answers:**
- Type 1: ESXi, Hyper-V, KVM, Xen (run directly on hardware)
- Type 2: VirtualBox, VMware Workstation, Parallels (run on host OS)

**Which is better?**
- Type 1: Better performance (no host OS overhead)
- Type 2: Easier to use (runs on your existing OS)

---

### Activity G: Container vs VM

**Compare containers and VMs:**

| Feature | Virtual Machine | Container |
|---------|-----------------|-----------|
| Boot time | _____ seconds | _____ seconds |
| Size | _____ GB | _____ MB |
| Isolation | _____ | _____ |
| OS overhead | Full OS per VM | _____ |
| Resource usage | _____ | _____ |
| Use case | _____ | _____ |

**Fill in:**
- VM boot: 30-60 seconds
- Container boot: 1-2 seconds
- VM size: 2-20 GB
- Container size: 50-500 MB
- Isolation: VM = Strong, Container = Good but shared kernel
- OS overhead: VM = Full OS, Container = Shared kernel
- Resource usage: VM = Heavy, Container = Lightweight
- Use case: VM = Different OSes, Container = Microservices

---

**Example scenario:**

**You need to run 100 web servers:**

**With VMs:**
- 100 VMs × 2 GB each = 200 GB RAM needed
- 100 full OS copies
- High overhead

**With Containers:**
- 100 containers × 50 MB each = 5 GB RAM needed
- 1 shared OS kernel
- Minimal overhead

**Winner:** Containers (for this use case)

---

### Activity H: Docker Basic Commands (If Installed)

**If you have Docker installed, try these commands:**

**⚠️ Skip if you don't have Docker - that's OK!**

1. **Check Docker version:**
```
docker --version
```

2. **Run a test container:**
```
docker run hello-world
```

**What happened?** _________________________________

3. **List running containers:**
```
docker ps
```

4. **List all containers (including stopped):**
```
docker ps -a
```

5. **Run an nginx web server:**
```
docker run -d -p 8080:80 nginx
```

6. **Check if it's running:**
- Open browser: http://localhost:8080
- Do you see nginx welcome page? _________________________________

7. **Stop the container:**
```
docker stop [container-id]
```

---

**If you don't have Docker:**
- Conceptually understand: Containers are lightweight, portable app packages
- Used everywhere in modern cloud deployments

---

### Activity I: SDN Concept

**Traditional network vs SDN:**

**Traditional Network:**
```
[Switch 1] - CLI configuration
    |
[Switch 2] - CLI configuration  
    |
[Switch 3] - CLI configuration
```

**Problem:**
- Configure each device individually
- Time-consuming
- Error-prone
- Hard to manage at scale

---

**SDN (Software-Defined Networking):**
```
        [SDN Controller]
         (Centralized)
              |
    +---------+---------+
    |         |         |
[Switch 1][Switch 2][Switch 3]
(Just forward) (Just forward) (Just forward)
```

**Benefits:**
- Configure everything from one place
- Automated
- Programmable
- Easier to manage

---

**SDN separates:**
- **Control Plane:** Makes decisions (where to send traffic)
- **Data Plane:** Forwards traffic (just does what controller says)

**Traditional:** Control plane in each switch
**SDN:** Control plane centralized in controller

---

**Real-world SDN:**
- Data centers (Google, Facebook)
- Campus networks
- SD-WAN (software-defined WAN)

**Controllers:**
- Cisco ACI
- VMware NSX
- OpenDaylight
- ONOS

---

### Activity J: Elasticity and Scalability

**Understand the difference:**

**Scalability:**
- Ability to handle growth
- Add more resources as needed
- Can be manual or automatic

**Elasticity:**
- Automatic scaling up and down
- Based on demand
- Cloud-native feature

---

**Scenario 1: E-commerce site**

**Black Friday:**
- Traffic: 10× normal
- Need: More servers

**With traditional hosting:**
- Over-provision (pay for 10× capacity all year)
- Or under-provision (site crashes on Black Friday)

**With cloud elasticity:**
- Auto-scale to 10× capacity on Black Friday
- Auto-scale back down after
- Only pay for what you use

---

**How auto-scaling works:**

```
Normal day: 2 servers (50% CPU each)
  |
Traffic increases
  |
CPU hits 80% threshold
  |
Auto-scale: Add 2 more servers (4 total)
  |
CPU back to 50%
  |
Traffic decreases
  |
Auto-scale: Remove 2 servers (back to 2)
```

---

**Have you experienced auto-scaling?**
- Probably! Netflix, Gmail, etc. all use it
- You never notice because it works seamlessly

---

### Activity K: Multitenancy

**What is multitenancy?**

**Single-tenant:**
```
Customer A → [Dedicated Server A]
Customer B → [Dedicated Server B]
Customer C → [Dedicated Server C]
```

**Expensive!** Each customer needs dedicated hardware.

---

**Multi-tenant:**
```
Customer A ─┐
Customer B ─┼─ [Shared Server]
Customer C ─┘
```

**Cheaper!** Multiple customers share resources.

---

**Security concerns:**
- Customer A shouldn't see Customer B's data
- Isolation is critical
- Cloud providers ensure this through:
  - Virtual networks
  - Separate databases
  - Access controls
  - Encryption

---

**Examples of multi-tenant services you use:**
- Gmail (millions share Google's servers)
- Salesforce (all customers on same platform)
- Office 365 (shared infrastructure)
- AWS (EC2 instances share physical servers)

**You probably use multi-tenant services every day and don't know it!**

---

### Activity L: Cloud vs On-Premises Decision

**For each scenario, choose: Cloud or On-Premises?**

**Scenario 1: Startup launching new app**
- Decision: _________________________________ (Cloud)
- Why: _________________________________

**Scenario 2: Bank with strict regulatory requirements**
- Decision: _________________________________ (Could be either)
- Why: _________________________________

**Scenario 3: E-commerce site with variable traffic**
- Decision: _________________________________ (Cloud)
- Why: _________________________________

**Scenario 4: Small office needs file sharing**
- Decision: _________________________________ (Could be either)
- Why: _________________________________

**Scenario 5: Healthcare with patient data (HIPAA)**
- Decision: _________________________________ (Hybrid or private cloud)
- Why: _________________________________

---

**Your company:**
- Current model: _________________________________
- Reasons for choice: _________________________________
- Considering migration? _________________________________

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Your company wants to "move to the cloud":**
   - What does this actually mean?
   - Lift-and-shift (IaaS) or refactor (PaaS)?
   - Which applications should go first?
   - What stays on-premises?

2. **Containers vs VMs - which should you use?**
   - When are VMs better?
   - When are containers better?
   - Can you use both?
   - What's the learning curve?

3. **Is public cloud always cheaper than on-premises?**
   - Upfront costs vs ongoing costs
   - At what scale does it flip?
   - What about data egress charges?
   - Total cost of ownership?

4. **SDN sounds great, but:**
   - Is it worth the complexity?
   - What happens if controller fails?
   - Do you need it?
   - When does it make sense?

---

## What You Learned Today

- ✅ You identified cloud services you already use
- ✅ You classified services as IaaS, PaaS, or SaaS
- ✅ You understand the responsibility matrix
- ✅ You know cloud deployment models (public, private, hybrid)
- ✅ You explored virtual machines (if available)
- ✅ You classified hypervisor types
- ✅ You compared containers vs VMs
- ✅ You tried Docker commands (if installed)
- ✅ You understand SDN concepts
- ✅ You learned elasticity and scalability
- ✅ You understand multitenancy
- ✅ You evaluated cloud vs on-premises decisions

**Next Lesson:** Network Documentation and Diagrams (Module 3 begins!)