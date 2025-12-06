# Lesson 14: Network Security Architecture

**Estimated Time:** 30-35 minutes  
**Domain:** 3.0 Security Architecture (18% of exam)  
**Exam Objectives Covered:** 3.1 - Compare and contrast security implications of different architecture models

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain network architecture security concepts including zones and boundaries
- Describe firewall architectures including screened host and screened subnet designs
- Differentiate between NAT types (static, dynamic, PAT) and their security implications
- Explain Software-Defined Networking (SDN) and its security benefits
- Describe secure architectures for microservices and serverless computing
- Explain Infrastructure as Code (IaC) security benefits and risks
- Apply security zone concepts to network design
- Design network architectures that implement defense in depth

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Network Architecture" (14 min)
- **PowerCert:** "Firewalls and Network Security" (12 min)
- **CBT Nuggets:** "Software-Defined Networking Security" (10 min)

---

## Introduction

In 2020, attackers breached a major financial institution through a misconfigured cloud workload. The architecture relied on a single security boundary—once past the perimeter firewall, attackers had unrestricted access to internal systems. There were no internal segmentation controls, no east-west traffic filtering, and no zero trust principles. The perimeter was the only defense.

This "castle and moat" architecture—strong perimeter, soft interior—was the dominant model for decades. It assumed threats came from outside and that everything inside the perimeter was trusted. Modern attacks have proven this model fatally flawed. Attackers get inside through phishing, compromised credentials, supply chain attacks, and cloud misconfigurations. Once inside, they move freely.

Modern network security architecture assumes breach. It implements multiple security boundaries, segments networks into zones, filters traffic between zones, and applies zero trust principles where nothing is automatically trusted. The perimeter still matters, but it's one of many layers.

This lesson covers the architectural patterns that make networks defensible: security zones, firewall placement, NAT for address hiding, and modern approaches like SDN and Infrastructure as Code. Good architecture doesn't guarantee security, but bad architecture guarantees vulnerability.

---

## Security Zones

Networks divided into zones based on trust level and security requirements.

### Zone Concepts

**Security zone:** A network segment with a defined trust level and security policy.

**Zone boundary:** The point where traffic crosses between zones, where security controls are enforced.

**Trust level:** The degree to which traffic from a zone is trusted.

### Common Security Zones

**Untrusted Zone (External)**

- The internet and external networks
- Zero trust—all traffic considered hostile
- Highest security scrutiny
- No direct access to internal resources

**Trusted Zone (Internal)**

- Internal corporate network
- Higher trust than external
- Still not unlimited trust (insider threats exist)
- Contains sensitive systems and data

**Semi-Trusted Zone (DMZ/Screened Subnet)**

- Buffer between untrusted and trusted
- Public-facing services
- Limited access to internal network
- Compromise contained to this zone

**Restricted Zone**

- Highest security segment
- Critical systems, sensitive data
- Most restrictive access controls
- Often additional authentication required

### Zone Architecture Example

```
┌─────────────────────────────────────────────────────────────┐
│                    UNTRUSTED ZONE                           │
│                      (Internet)                             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                    ┌─────▼─────┐
                    │ Perimeter │
                    │ Firewall  │
                    └─────┬─────┘
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                   SEMI-TRUSTED ZONE                         │
│                        (DMZ)                                │
│    ┌─────────┐    ┌─────────┐    ┌─────────┐               │
│    │   Web   │    │  Email  │    │   DNS   │               │
│    │ Server  │    │ Gateway │    │ Server  │               │
│    └─────────┘    └─────────┘    └─────────┘               │
└─────────────────────────┬───────────────────────────────────┘
                          │
                    ┌─────▼─────┐
                    │ Internal  │
                    │ Firewall  │
                    └─────┬─────┘
                          │
┌─────────────────────────▼───────────────────────────────────┐
│                    TRUSTED ZONE                             │
│               (Internal Network)                            │
│    ┌─────────┐    ┌─────────┐    ┌─────────┐               │
│    │  Users  │    │  Apps   │    │ Servers │               │
│    └─────────┘    └─────────┘    └─────────┘               │
│                          │                                  │
│                    ┌─────▼─────┐                            │
│                    │Restricted │                            │
│                    │ Firewall  │                            │
│                    └─────┬─────┘                            │
│    ┌─────────────────────▼────────────────────────┐        │
│    │           RESTRICTED ZONE                     │        │
│    │    ┌─────────┐    ┌─────────┐                │        │
│    │    │Database │    │ Critical│                │        │
│    │    │ Servers │    │ Systems │                │        │
│    │    └─────────┘    └─────────┘                │        │
│    └──────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

### Zone Design Principles

**Minimize trust transitions:**
- Fewer zone crossings = smaller attack surface
- Each crossing is filtered and logged

**Apply least privilege at boundaries:**
- Only allow required traffic between zones
- Default deny for all zone transitions

**Place resources by security requirement:**
- Sensitive data in restricted zones
- Public services in DMZ
- User workstations separated from servers

---

## Firewall Architectures

How firewalls are deployed to protect networks.

### Single Firewall (Screening Router)

Simplest architecture—one firewall between internal and external.

```
Internet ─── [Firewall] ─── Internal Network
```

**Advantages:**
- Simple, low cost
- Single management point

**Disadvantages:**
- Single point of failure
- No DMZ for public services
- All-or-nothing protection

**Use case:** Small offices, home networks.

### Screened Host

Firewall protects a single bastion host that provides proxy services.

```
Internet ─── [Firewall] ─── [Bastion Host] ─── Internal Network
```

**How it works:**
- Firewall allows traffic only to bastion host
- Bastion host provides proxy/gateway services
- Internal systems communicate through bastion

**Advantages:**
- Single point of external access
- Bastion can be heavily hardened

**Disadvantages:**
- Bastion is single point of failure
- All external services on one host

### Screened Subnet (Dual-Homed/DMZ)

Two firewalls create isolated DMZ between external and internal.

```
Internet ─── [FW1] ─── DMZ ─── [FW2] ─── Internal
```

**How it works:**
- External firewall (FW1) filters internet to DMZ
- Internal firewall (FW2) filters DMZ to internal
- DMZ hosts public services
- Two security boundaries to reach internal

**Advantages:**
- Public services isolated from internal
- Two firewalls = defense in depth
- Compromised DMZ server doesn't access internal directly

**Disadvantages:**
- More complex, higher cost
- Two firewalls to manage

**Best practice:** Use different firewall vendors to avoid single vulnerability affecting both.

### Multi-Homed Firewall

Single firewall with multiple interfaces creating multiple zones.

```
                    ┌───────────┐
Internet ───────────┤           ├─────────── Internal
                    │ Firewall  │
DMZ ────────────────┤           ├─────────── Restricted
                    └───────────┘
```

**Advantages:**
- Single device manages all zones
- Easier management than multiple firewalls

**Disadvantages:**
- Single point of failure
- Compromise of firewall exposes all zones
- Complex ruleset

### Firewall Placement Best Practices

- External perimeter firewall is minimum
- Add internal firewalls for segmentation
- Protect high-value assets with additional boundaries
- Consider host-based firewalls as last defense
- Log all firewall traffic for analysis

---

## Network Address Translation (NAT)

Translating private IP addresses to public addresses.

### Why NAT?

**Original purpose:** Conserve IPv4 addresses.
- Private addresses (10.x, 172.16-31.x, 192.168.x) used internally
- Translated to public address for internet access
- Many internal hosts share fewer public addresses

**Security benefit:** Hides internal network structure.
- External hosts see only public NAT address
- Internal addressing scheme not exposed
- Not a security control alone, but provides obscurity

### NAT Types

**Static NAT**

One-to-one permanent mapping.

```
Internal: 192.168.1.10 ←→ External: 203.0.113.10
Internal: 192.168.1.11 ←→ External: 203.0.113.11
```

**Use case:** Servers that need consistent external address (web server, mail server).

**Security consideration:** External host always maps to same internal host—if external address discovered, internal host targeted.

**Dynamic NAT**

One-to-one mapping from pool, assigned on demand.

```
Pool: 203.0.113.10 - 203.0.113.20

When 192.168.1.50 connects:
  192.168.1.50 → 203.0.113.10 (first available from pool)
  
When connection ends:
  203.0.113.10 returned to pool
```

**Use case:** Many internal hosts needing external access, but not simultaneously.

**Security consideration:** Address changes make targeting harder, but pool is finite.

**PAT (Port Address Translation) / NAT Overload**

Many-to-one mapping using port numbers.

```
192.168.1.10:54321 → 203.0.113.5:54321
192.168.1.11:54322 → 203.0.113.5:54322
192.168.1.12:54323 → 203.0.113.5:54323
(All share same public IP, different ports)
```

**Use case:** Most common for outbound internet access. Entire organization behind single or few public IPs.

**Security consideration:** 
- Best obscurity (all traffic appears from one IP)
- But also means one IP's reputation affects everyone
- Inbound connections complex (need port forwarding)

### NAT Security Implications

**NAT is NOT a firewall:**
- NAT translates addresses
- Doesn't filter based on security policy
- Stateful NAT blocks unsolicited inbound (side effect, not design)

**NAT breaks some protocols:**
- Protocols embedding IP addresses in payload
- FTP active mode, SIP, IPsec
- Application Layer Gateways (ALG) needed

**IPv6 and NAT:**
- IPv6 has enough addresses—NAT not needed for conservation
- Some argue NAT should still be used for security
- Others argue proper firewalling is better than NAT obscurity

---

## Software-Defined Networking (SDN)

Separating network control from data forwarding.

### Traditional vs. SDN

**Traditional networking:**
- Each device (switch, router) has own control logic
- Configuration distributed across all devices
- Changes require touching many devices
- Difficult to maintain consistency

**Software-Defined Networking:**
- Control plane centralized in SDN controller
- Data plane (forwarding) distributed in switches
- Configuration managed centrally
- Programmatic network control

```
Traditional:
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Switch  │  │ Switch  │  │ Switch  │
│Control+ │  │Control+ │  │Control+ │
│ Data    │  │ Data    │  │ Data    │
└─────────┘  └─────────┘  └─────────┘
(Each device independently configured)

SDN:
           ┌─────────────────┐
           │  SDN Controller │ (Centralized Control)
           │   (Control Plane)│
           └────────┬────────┘
                    │
    ┌───────────────┼───────────────┐
    │               │               │
┌───▼───┐       ┌───▼───┐       ┌───▼───┐
│Switch │       │Switch │       │Switch │
│(Data) │       │(Data) │       │(Data) │
└───────┘       └───────┘       └───────┘
(Switches just forward per controller instructions)
```

### SDN Security Benefits

**Centralized policy enforcement:**
- Security policies defined once
- Applied consistently across network
- No device-by-device configuration drift

**Rapid response:**
- Detect threat → push policy change network-wide instantly
- Isolate compromised segment programmatically
- Automated incident response possible

**Visibility:**
- Central controller sees all traffic flows
- Better anomaly detection
- Comprehensive logging

**Microsegmentation:**
- Fine-grained policies per workload
- Easy to implement with SDN
- Dynamic policy based on context

### SDN Security Risks

**Controller is critical:**
- Compromise controller = control entire network
- Must be heavily protected
- High availability essential

**API security:**
- Northbound API (applications to controller)
- Southbound API (controller to devices)
- Both must be secured (authentication, encryption)

**New attack surface:**
- Controller software vulnerabilities
- Protocol vulnerabilities (OpenFlow)
- Misconfiguration at scale

---

## Modern Architecture Patterns

Security considerations for contemporary architectures.

### Microservices Security

Applications built as collection of small, independent services.

**Architecture:**
```
┌─────────────────────────────────────────────────┐
│                  API Gateway                     │
└───────┬───────────────┬───────────────┬─────────┘
        │               │               │
   ┌────▼────┐     ┌────▼────┐     ┌────▼────┐
   │Service A│     │Service B│     │Service C│
   └────┬────┘     └────┬────┘     └────┬────┘
        │               │               │
   ┌────▼────┐     ┌────▼────┐     ┌────▼────┐
   │Database │     │Database │     │ Cache   │
   └─────────┘     └─────────┘     └─────────┘
```

**Security challenges:**
- Many more components to secure
- Service-to-service communication
- Distributed authentication
- Larger attack surface

**Security controls:**
- **API Gateway:** Single entry point, authentication, rate limiting
- **Service mesh:** Mutual TLS between services (Istio, Linkerd)
- **Container security:** Image scanning, runtime protection
- **Secrets management:** Centralized (Vault, cloud KMS)
- **Network policies:** Restrict which services can communicate

### Serverless Security

Code runs in cloud provider's managed compute environment.

**Architecture:**
```
Event → [Function] → Response
        (Managed by cloud provider)
```

**Security considerations:**

**Provider responsibility (more than traditional):**
- Server patching
- Runtime security
- Infrastructure

**Customer responsibility:**
- Function code security
- IAM permissions
- Data protection
- Configuration

**Security challenges:**
- Overprivileged functions
- Third-party dependencies
- Cold start visibility gaps
- Shared responsibility confusion

**Best practices:**
- Least privilege IAM for each function
- Input validation in function code
- Secrets in proper secrets manager (not environment variables)
- Monitor function behavior
- Scan dependencies

### Containerized Environments

Applications packaged with dependencies in containers.

**Security layers:**
```
┌─────────────────────────────────┐
│         Orchestration           │ (Kubernetes, Docker Swarm)
│  ┌─────────────────────────┐   │
│  │      Container Host      │   │
│  │  ┌─────┐ ┌─────┐ ┌─────┐│   │
│  │  │Cont.│ │Cont.│ │Cont.││   │
│  │  │  A  │ │  B  │ │  C  ││   │
│  │  └─────┘ └─────┘ └─────┘│   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

**Security controls:**
- **Image security:** Scan images for vulnerabilities, use trusted registries
- **Runtime security:** Monitor container behavior, detect anomalies
- **Network policies:** Restrict container-to-container communication
- **Pod security:** Prevent privileged containers, restrict capabilities
- **Secrets:** Never in images, use orchestrator secrets management

---

## Infrastructure as Code (IaC)

Managing infrastructure through code rather than manual processes.

### What is IaC?

**Traditional:**
- Manual configuration
- Point-and-click in console
- Undocumented changes
- Configuration drift

**Infrastructure as Code:**
- Infrastructure defined in code files
- Version controlled (Git)
- Automated deployment
- Reproducible environments

**Common tools:**
- Terraform
- CloudFormation (AWS)
- ARM Templates (Azure)
- Ansible, Puppet, Chef

### IaC Security Benefits

**Version control:**
- All changes tracked
- Who changed what, when
- Rollback capability
- Audit trail

**Code review:**
- Security review of infrastructure changes
- Catch misconfigurations before deployment
- Enforce standards through review

**Consistency:**
- Same configuration deployed every time
- No manual errors
- Security baselines enforced

**Scanning:**
- Static analysis of IaC templates
- Detect security issues before deployment
- Policy as code enforcement

### IaC Security Risks

**Secrets in code:**
- Credentials committed to repository
- API keys in templates
- Must use proper secrets management

**Overprivileged templates:**
- Template grants excessive permissions
- Replicated across all deployments
- Must review IAM in templates

**Supply chain:**
- Third-party modules may have vulnerabilities
- Module sources must be trusted
- Version pinning important

**State file security:**
- Terraform state contains sensitive data
- Must be encrypted and access-controlled
- Not committed to public repos

### IaC Security Best Practices

```yaml
# Example security checks for IaC:

Pre-commit:
  - Secrets scanning (detect credentials)
  - Static analysis (misconfigurations)
  
Code review:
  - Security-focused review
  - Verify least privilege
  
Pre-deployment:
  - Policy validation
  - Compliance checking
  
Post-deployment:
  - Drift detection
  - Configuration verification
```

---

## Zero Trust Architecture

"Never trust, always verify" applied to network architecture.

### Zero Trust Principles

**No implicit trust:**
- Location doesn't grant trust
- Being "inside" doesn't mean trusted
- Every access request verified

**Verify explicitly:**
- Authenticate every request
- Authorize every action
- Continuous verification

**Least privilege access:**
- Minimum necessary permissions
- Just-in-time access
- Just-enough access

**Assume breach:**
- Design as if attackers are already inside
- Limit blast radius
- Segment everything

### Zero Trust Components

**Identity verification:**
- Strong authentication (MFA)
- Device health verification
- User and entity behavior analytics

**Microsegmentation:**
- Granular network segments
- Workload-level isolation
- East-west traffic filtering

**Continuous monitoring:**
- All traffic inspected
- Behavior analysis
- Anomaly detection

**Policy enforcement points:**
- Verify at every boundary
- Context-aware decisions
- Dynamic policy adjustment

### Zero Trust vs. Traditional

| Aspect | Traditional | Zero Trust |
|--------|-------------|------------|
| Trust model | Trust internal network | Trust nothing |
| Perimeter | Strong perimeter focus | Many micro-perimeters |
| Verification | Once (at perimeter) | Continuous |
| Lateral movement | Easy once inside | Restricted |
| Access decisions | Network location | Identity + context |

---

## Key Exam Tips

🎯 **Security zones:** Untrusted (internet), Semi-trusted (DMZ), Trusted (internal), Restricted (critical systems).

🎯 **Screened subnet:** Two firewalls creating DMZ. Defense in depth—different vendors recommended.

🎯 **NAT types:** Static (1:1 permanent), Dynamic (1:1 from pool), PAT (many:1 using ports).

🎯 **NAT is not a firewall:** Provides address translation and obscurity, not security filtering.

🎯 **SDN:** Separates control plane (centralized) from data plane (distributed). Benefits: central policy, rapid response. Risk: controller is critical target.

🎯 **Microservices security:** API gateway, service mesh for mTLS, container security, network policies.

🎯 **Serverless:** Provider manages more infrastructure. Customer still owns code security and IAM.

🎯 **IaC benefits:** Version control, consistency, code review, security scanning.

🎯 **IaC risks:** Secrets in code, overprivileged templates, state file exposure.

🎯 **Zero Trust:** Never trust, always verify. No implicit trust from network location. Continuous verification.

---

## Key Takeaways

- [ ] Security zones separate networks by trust level: untrusted, semi-trusted, trusted, restricted
- [ ] Zone boundaries are where security controls (firewalls, filtering) are enforced
- [ ] Screened subnet (DMZ) uses two firewalls to isolate public services from internal network
- [ ] Static NAT provides 1:1 permanent mapping; PAT maps many internal hosts to one external IP
- [ ] NAT provides obscurity but is not a security control—proper firewalling still required
- [ ] SDN centralizes control plane, enabling consistent policy and rapid response
- [ ] SDN controller is a critical asset—must be heavily protected
- [ ] Microservices require API gateway, service mesh, and container security
- [ ] Serverless shifts some security responsibility to provider, but code and IAM remain customer's
- [ ] IaC enables version control, code review, and consistent security configuration
- [ ] IaC risks include secrets in code and overprivileged templates
- [ ] Zero Trust assumes no implicit trust based on network location—verify everything continuously

---

## Check Your Understanding

**1. An organization has web servers that need internet access and database servers with sensitive customer data. The current flat network allows any system to reach any other. Design a zone architecture to improve security.**

<details>
<summary>Show Answer</summary>
<strong>Recommended zone architecture:</strong>

```
UNTRUSTED (Internet)
        │
   ┌────▼────┐
   │  FW 1   │  (Perimeter Firewall)
   └────┬────┘
        │
┌───────▼───────┐
│     DMZ       │  ← Web servers here
│  (Semi-trust) │
└───────┬───────┘
        │
   ┌────▼────┐
   │  FW 2   │  (Internal Firewall)
   └────┬────┘
        │
┌───────▼───────┐
│   Internal    │  ← Application servers, users
│   (Trusted)   │
└───────┬───────┘
        │
   ┌────▼────┐
   │  FW 3   │  (Restricted Firewall)
   └────┬────┘
        │
┌───────▼───────┐
│  Restricted   │  ← Database servers (sensitive data)
└───────────────┘
```

<strong>Firewall rules:</strong>

**FW1 (Perimeter):**
- Internet → DMZ: 80, 443 only
- DMZ → Internet: Allow (updates, etc.)

**FW2 (Internal):**
- DMZ → Internal: Only app servers, specific ports
- Internal → DMZ: Management only
- Users → DMZ: Blocked

**FW3 (Restricted):**
- Internal app servers → Database: Specific DB ports only
- All other → Database: Denied

<strong>Result:</strong>
- Web compromise contained to DMZ
- Database requires traversing two more boundaries
- Sensitive data in most protected zone
</details>

**2. A company uses PAT (NAT overload) to allow 500 internal users to access the internet through a single public IP. The security team claims this provides significant security protection. Is this accurate?**

<details>
<summary>Show Answer</summary>
<strong>Partially accurate, but overstated.</strong>

<strong>What PAT does provide:</strong>
- **Obscurity:** External parties see only one IP
- **Internal structure hidden:** Can't scan internal IPs from outside
- **Unsolicited inbound blocked:** Stateful NAT blocks inbound without established connection

<strong>What PAT does NOT provide:</strong>
- **Filtering:** NAT doesn't make access decisions based on security policy
- **Application inspection:** Doesn't examine packet contents
- **Malware protection:** Malicious outbound traffic passes through
- **Authorized inbound:** Port forwarding still exposes services

<strong>Why NAT is not a firewall:</strong>
- If internal user browses malicious site → NAT doesn't help
- If attacker gets internal access → NAT irrelevant
- If port forwarding configured → those ports exposed

<strong>Correct position:</strong>
- NAT provides some obscurity and blocks unsolicited inbound
- It's a side effect of address translation, not a security design
- Proper firewalling still essential
- Don't rely on NAT for security
</details>

**3. An organization is adopting SDN. The security team needs to understand both the benefits and risks. What should they focus on?**

<details>
<summary>Show Answer</summary>
<strong>SDN Security Benefits:</strong>

**1. Centralized control:**
- Define security policy once
- Apply consistently across all devices
- No device-by-device drift

**2. Rapid response:**
- Threat detected → policy pushed instantly
- Automated quarantine of compromised segments
- Programmatic incident response

**3. Visibility:**
- Controller sees all flows
- Comprehensive traffic analysis
- Better anomaly detection

**4. Microsegmentation:**
- Easy to implement granular policies
- Workload-level isolation
- Dynamic policies

---

<strong>SDN Security Risks:</strong>

**1. Controller is critical target:**
- Compromise controller = control network
- Must be hardened, highly available
- Network segmented from general access

**2. API security:**
- Northbound (apps ↔ controller)
- Southbound (controller ↔ switches)
- Both need authentication, encryption, access control

**3. New attack surface:**
- Controller software vulnerabilities
- OpenFlow protocol vulnerabilities
- Misconfigurations affect entire network

**4. Availability:**
- Controller outage = network policy issues
- High availability architecture required
- Graceful degradation needed

<strong>Recommendations:</strong>
- Protect controller as crown jewel asset
- Secure all APIs
- Redundant controller deployment
- Regular security testing of SDN infrastructure
- Monitor controller access and changes
</details>

**4. A development team is deploying a microservices application with 20 services. Each service communicates with several others. What security architecture should be implemented?**

<details>
<summary>Show Answer</summary>
<strong>Microservices security architecture:</strong>

**1. API Gateway (entry point):**
```
Internet → [API Gateway] → Services
```
- Single entry point
- Authentication (OAuth, JWT)
- Rate limiting
- Input validation
- TLS termination

**2. Service Mesh (service-to-service):**
- Mutual TLS (mTLS) between all services
- Automatic certificate management
- Service identity verification
- Tools: Istio, Linkerd

**3. Network Policies:**
```yaml
# Example: Service A can only talk to Service B
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
spec:
  podSelector:
    matchLabels:
      app: service-b
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: service-a
```
- Default deny all
- Explicitly allow required communication
- Principle of least privilege

**4. Secrets Management:**
- Centralized secrets (HashiCorp Vault, cloud KMS)
- Short-lived credentials
- No secrets in code or environment variables

**5. Container Security:**
- Scan images for vulnerabilities
- Use minimal base images
- No root containers
- Read-only file systems where possible

**6. Observability:**
- Centralized logging
- Distributed tracing
- Security monitoring
- Anomaly detection

<strong>Result:</strong> Even if one service compromised, lateral movement restricted by mTLS, network policies, and least privilege.
</details>

**5. An organization uses Terraform for Infrastructure as Code. A security audit finds AWS access keys committed to the Git repository. What went wrong and how should secrets be handled?**

<details>
<summary>Show Answer</summary>
<strong>What went wrong:</strong>

- Secrets (AWS keys) stored in code files
- Committed to version control
- Potentially in repository history forever
- May be exposed if repo is public or accessed

<strong>Immediate actions:</strong>
1. Rotate the compromised credentials immediately
2. Scan repo history for other secrets
3. Consider history rewriting (git filter-branch) if practical
4. Check CloudTrail for unauthorized use

---

<strong>How secrets should be handled:</strong>

**Option 1: Environment variables (better)**
```hcl
# In Terraform
provider "aws" {
  # Reads from AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY
}
```
- Secrets not in code
- Set in deployment environment
- Still has risks (logged, process listing)

**Option 2: Secrets manager (best)**
```hcl
# Reference secrets from Vault/AWS Secrets Manager
data "vault_generic_secret" "aws_creds" {
  path = "secret/aws/creds"
}

provider "aws" {
  access_key = data.vault_generic_secret.aws_creds.data["access_key"]
  secret_key = data.vault_generic_secret.aws_creds.data["secret_key"]
}
```
- Secrets stored in dedicated secrets manager
- Access controlled, audited
- Rotation managed

**Option 3: IAM roles (best for cloud)**
- Use IAM roles instead of keys
- No long-lived credentials
- Automatic rotation

---

<strong>Prevention:</strong>
- Pre-commit hooks scanning for secrets
- CI/CD pipeline secret detection
- Developer training
- Code review requirements
- Tools: git-secrets, truffleHog, detect-secrets
</details>

**6. Compare traditional perimeter-based security with Zero Trust architecture. Why is Zero Trust increasingly recommended?**

<details>
<summary>Show Answer</summary>
<strong>Traditional Perimeter Security:</strong>

**Model:**
- Strong perimeter (firewall)
- "Castle and moat" approach
- Inside = trusted
- Outside = untrusted

**Assumptions:**
- Threats come from outside
- Internal network is safe
- Once authenticated at perimeter, user is trusted

**Weaknesses:**
- Phishing bypasses perimeter
- Compromised credentials grant inside access
- Lateral movement unrestricted inside
- Cloud/mobile blur perimeter
- Insider threats ignored

---

<strong>Zero Trust Architecture:</strong>

**Model:**
- No implicit trust
- Verify every request
- Assume breach

**Principles:**
- Never trust, always verify
- Least privilege access
- Microsegmentation
- Continuous verification

**Implementation:**
- Strong identity verification (MFA)
- Device health checking
- Microsegmented network
- Encrypt all traffic
- Context-aware access decisions

---

<strong>Why Zero Trust is recommended:</strong>

**1. Modern threats:**
- Attackers get inside (phishing, supply chain)
- Perimeter alone insufficient

**2. Modern work:**
- Remote workers
- Cloud resources
- BYOD
- Perimeter is everywhere

**3. Assume breach:**
- Design for when (not if) breach occurs
- Limit blast radius
- Contain damage

**4. Least privilege:**
- Every request verified
- Only necessary access granted
- Reduces attack surface

<strong>Reality:</strong> Perimeter still matters, but it's one layer. Zero Trust adds internal verification that perimeter model lacks.
</details>

**7. What are the security implications of using serverless computing compared to traditional server deployments?**

<details>
<summary>Show Answer</summary>
<strong>Security responsibility shift:</strong>

| Layer | Traditional | Serverless |
|-------|-------------|------------|
| Physical | Customer (or colo) | Provider |
| Network | Customer | Provider |
| OS | Customer | Provider |
| Runtime | Customer | Provider |
| Function code | Customer | Customer |
| IAM | Customer | Customer |
| Data | Customer | Customer |

---

<strong>Security benefits of serverless:</strong>

**1. Reduced attack surface:**
- No OS to patch
- No servers to harden
- Provider handles infrastructure security

**2. Automatic scaling:**
- Provider handles DDoS absorption
- No manual scaling decisions

**3. Short-lived execution:**
- Functions spin up, execute, terminate
- Harder for attackers to maintain persistence

**4. Isolation:**
- Each function execution isolated
- Provider manages container security

---

<strong>Security risks of serverless:</strong>

**1. Code vulnerabilities still your problem:**
- Injection flaws
- Insecure dependencies
- Logic vulnerabilities

**2. Overprivileged functions:**
- Functions granted excessive IAM permissions
- Each function should have minimum required

**3. Third-party dependencies:**
- Libraries with vulnerabilities
- Supply chain risk remains

**4. Event injection:**
- Malicious input through triggers
- Must validate all event data

**5. Secrets management:**
- Where to store credentials?
- Environment variables visible
- Use proper secrets manager

**6. Visibility gaps:**
- Less control = less visibility
- Traditional security tools may not work
- Need serverless-specific monitoring

---

<strong>Best practices:</strong>
- Least privilege IAM per function
- Validate all input
- Scan dependencies
- Use secrets manager
- Monitor function behavior
- Implement application-level security
</details>

**8. An organization's IaC templates create EC2 instances with security groups allowing SSH from 0.0.0.0/0 (anywhere). This gets deployed to all environments. What's the risk and how should IaC security be implemented?**

<details>
<summary>Show Answer</summary>
<strong>The risk:</strong>

- SSH (port 22) open to entire internet
- Every EC2 instance exposed
- Replicated across all environments
- Brute force attacks likely
- One weak credential = compromise

<strong>Why this happened:</strong>
- Convenience during development
- No security review of templates
- No automated policy checking
- Misconfiguration replicated at scale

---

<strong>IaC security implementation:</strong>

**1. Security scanning in pipeline:**
```yaml
# Example CI/CD pipeline
stages:
  - lint
  - security_scan   # ← Add this
  - plan
  - apply

security_scan:
  script:
    - checkov -d .
    - tfsec .
    - terrascan scan
```

**2. Policy as Code:**
```python
# Example Open Policy Agent (OPA) rule
deny[msg] {
    input.resource.aws_security_group
    rule := input.resource.aws_security_group[_].ingress[_]
    rule.cidr_blocks[_] == "0.0.0.0/0"
    rule.from_port <= 22
    rule.to_port >= 22
    msg := "SSH must not be open to 0.0.0.0/0"
}
```

**3. Secure defaults:**
```hcl
# Better security group
resource "aws_security_group" "ssh" {
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]  # Internal only
  }
}
```

**4. Code review:**
- Security-focused review required
- Checklist for common issues
- Approval before merge

**5. Drift detection:**
- Regular scans for configuration drift
- Alert if resources don't match templates
- Remediate unauthorized changes

---

<strong>Tools:</strong>
- Checkov (policy scanning)
- tfsec (Terraform security)
- Terrascan (multi-cloud)
- OPA/Rego (policy as code)
- Bridgecrew (commercial)
</details>

**9. What is a service mesh and why is it important for microservices security?**

<details>
<summary>Show Answer</summary>
<strong>What is a service mesh?</strong>

Infrastructure layer handling service-to-service communication in microservices.

**Architecture:**
```
┌─────────────────────────────────────────┐
│            Control Plane                │
│  (Policy, certificates, configuration)  │
└─────────────────────┬───────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
┌───▼───┐         ┌───▼───┐         ┌───▼───┐
│Sidecar│         │Sidecar│         │Sidecar│
│ Proxy │         │ Proxy │         │ Proxy │
├───────┤         ├───────┤         ├───────┤
│Service│         │Service│         │Service│
│   A   │         │   B   │         │   C   │
└───────┘         └───────┘         └───────┘

Service A → Sidecar A → Sidecar B → Service B
```

**Common implementations:** Istio, Linkerd, Consul Connect

---

<strong>Security capabilities:</strong>

**1. Mutual TLS (mTLS):**
- All service-to-service traffic encrypted
- Both sides verify certificates
- Automatic certificate management
- No code changes required

**2. Service identity:**
- Each service has cryptographic identity
- Can't impersonate other services
- Policy based on verified identity

**3. Access policies:**
```yaml
# Example: Only Service A can call Service B
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
spec:
  selector:
    matchLabels:
      app: service-b
  rules:
  - from:
    - source:
        principals: ["cluster.local/ns/default/sa/service-a"]
```

**4. Traffic visibility:**
- All traffic through sidecar
- Complete observability
- Security monitoring

**5. Rate limiting:**
- Prevent DoS between services
- Protect against runaway services

---

<strong>Why important for microservices:</strong>

- **Scale:** Hundreds of services communicating
- **Consistency:** Security applied uniformly
- **No code changes:** Handled at infrastructure layer
- **Automatic:** Certificates, encryption, policies managed
- **Zero trust inside:** East-west traffic secured
</details>

**10. Design a network architecture for a company with: public website, internal applications, sensitive HR data, and guest WiFi. Define zones, boundaries, and key security controls.**

<details>
<summary>Show Answer</summary>
<strong>Zone architecture:</strong>

```
                     INTERNET
                         │
                    ┌────▼────┐
                    │   FW1   │ (Perimeter)
                    └────┬────┘
          ┌──────────────┼──────────────┐
          │              │              │
    ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
    │    DMZ    │  │   Guest   │  │    VPN    │
    │   Zone    │  │   Zone    │  │ Endpoint  │
    └─────┬─────┘  └───────────┘  └─────┬─────┘
          │                             │
          │         ┌─────▼─────┐       │
          └────────►│    FW2    │◄──────┘
                    │ (Internal)│
                    └─────┬─────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
  ┌─────▼─────┐     ┌─────▼─────┐     ┌─────▼─────┐
  │  User     │     │  Internal │     │    IT     │
  │ Workstns  │     │   Apps    │     │Management │
  └───────────┘     └─────┬─────┘     └───────────┘
                          │
                    ┌─────▼─────┐
                    │    FW3    │
                    │(Restricted)│
                    └─────┬─────┘
                          │
                    ┌─────▼─────┐
                    │ Sensitive │
                    │  HR Data  │
                    └───────────┘
```

---

<strong>Zone definitions:</strong>

| Zone | Trust Level | Contents |
|------|-------------|----------|
| Internet | Untrusted | External users |
| DMZ | Semi-trusted | Public website |
| Guest | Isolated | Guest WiFi |
| User | Trusted | Employee workstations |
| Internal Apps | Trusted | Business applications |
| IT Management | Restricted | Admin systems |
| HR Data | Highly Restricted | Sensitive employee data |

---

<strong>Key security controls:</strong>

**FW1 (Perimeter):**
- Internet → DMZ: 80, 443 only
- Internet → Guest: Isolated, internet access only
- VPN → Internal: After authentication

**FW2 (Internal):**
- DMZ → Internal Apps: Specific ports only
- Guest → Internal: BLOCKED
- Users → Internal Apps: Allowed
- Users → IT Mgmt: IT staff only

**FW3 (Restricted):**
- Internal Apps → HR Data: Specific app servers only
- Direct user access: BLOCKED
- All access logged and alerted

**Additional controls:**
- Guest WiFi: Captive portal, no internal access
- HR Data: Encrypted at rest, MFA required
- DMZ: WAF protecting website
- All zones: IDS/IPS monitoring
- VPN: MFA, certificate-based
</details>

---

## Next Lesson Preview

In **Lesson 15: Cloud Security**, we'll focus specifically on securing cloud environments. You'll learn about cloud service models (IaaS, PaaS, SaaS), the shared responsibility model, cloud-specific threats, and security controls for AWS, Azure, and GCP environments.

---

✅ **Lesson 14 Complete**

**Progress:** 14 of 30 lessons complete (46.7%)

---

*Next up: Lesson 15 - Cloud Security*