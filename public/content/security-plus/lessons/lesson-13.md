# Lesson 13: Mitigation Techniques

**Estimated Time:** 25-30 minutes  
**Domain:** 2.0 Threats, Vulnerabilities, and Mitigations (22% of exam)  
**Exam Objectives Covered:** 2.5 - Explain the purpose of mitigation techniques used to secure the enterprise

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain network segmentation strategies including VLANs, subnets, and microsegmentation
- Describe access control implementations including least privilege and role-based access
- Apply application security techniques including input validation and secure coding practices
- Implement encryption for data at rest, in transit, and in use
- Configure system hardening through secure baselines and removing unnecessary services
- Explain patching strategies and update management
- Describe decommissioning procedures for secure asset disposal
- Apply defense in depth principles across multiple control layers

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Mitigation Techniques" (12 min)
- **PowerCert:** "Network Segmentation Explained" (10 min)
- **Cybrary:** "Hardening Systems and Applications" (14 min)

---

## Introduction

In 2013, attackers breached Target's network through an HVAC vendor's credentials. Once inside, they moved laterally across the network until they reached point-of-sale systems containing payment card data. 40 million credit card numbers stolen. 70 million customer records exposed.

The attack succeeded not because of one failed control, but because multiple mitigations were absent or ineffective. The HVAC vendor had access to the same network as payment systems. Lateral movement went undetected. Segmentation between vendor access and sensitive systems didn't exist.

Mitigation techniques are the practical controls that reduce risk. They don't eliminate threats—threats will always exist. They reduce the likelihood of successful attacks and limit damage when attacks succeed. No single control is sufficient; effective security requires layers of complementary mitigations.

This lesson covers the defensive toolkit: network segmentation to contain breaches, access controls to limit who can do what, encryption to protect data, hardening to reduce attack surface, and patching to eliminate known vulnerabilities. Each technique addresses specific risks. Together, they create defense in depth.

---

## Network Segmentation

Dividing networks into isolated segments limits attack spread.

### Why Segment?

**Without segmentation:**
- Attacker gains access to one system
- Can reach all other systems on network
- Lateral movement unrestricted
- Single breach = total compromise

**With segmentation:**
- Attacker gains access to one segment
- Cannot reach other segments without additional access
- Lateral movement blocked or detected
- Breach contained to segment

### Segmentation Methods

**VLANs (Virtual LANs)**

Logical separation at Layer 2.

- Single physical network, multiple logical networks
- Devices in different VLANs can't communicate directly
- Requires router/Layer 3 device to cross VLANs
- Traffic between VLANs can be filtered

**Common VLAN strategy:**
| VLAN | Purpose |
|------|---------|
| 10 | Servers |
| 20 | Workstations |
| 30 | Guest network |
| 40 | IoT devices |
| 50 | Management/admin |
| 100 | Voice/VoIP |

**Subnets**

IP-based separation at Layer 3.

- Different IP ranges for different segments
- Routers control traffic between subnets
- Firewall rules filter inter-subnet traffic
- Enables granular access control

**Physical Segmentation**

Completely separate networks.

- Different switches, cables, infrastructure
- Air gap = no electronic connection
- Highest security for critical systems
- Most expensive and least flexible

**Microsegmentation**

Granular segmentation at workload level.

- Policies applied to individual workloads/applications
- East-west traffic (internal) filtered
- Software-defined, highly granular
- Common in cloud and virtualized environments

### Screened Subnet (DMZ)

Isolated network for public-facing services.

```
Internet ─── [Firewall] ─── DMZ ─── [Firewall] ─── Internal Network
                            │
                       Web Server
                       Mail Server
                       DNS Server
```

**Purpose:**
- Public services accessible from internet
- Isolated from internal network
- Compromise of DMZ server doesn't directly expose internal systems
- Two firewall layers for defense in depth

### Segmentation Best Practices

- Segment by security requirements, not just function
- Control and monitor inter-segment traffic
- Apply least privilege to segment access
- Critical assets in most protected segments
- Regular review of segmentation effectiveness

---

## Access Control

Controlling who can access what resources.

### Least Privilege

Grant minimum permissions necessary for function.

**Principle:** Users, applications, and systems should have only the access required to perform their legitimate tasks—no more.

**Examples:**
- User needs read access → don't grant write
- Application needs one database → don't grant access to all
- Service account for specific task → don't make domain admin

**Benefits:**
- Limits damage from compromised accounts
- Reduces insider threat impact
- Simplifies auditing
- Meets compliance requirements

### Access Control Models

**Role-Based Access Control (RBAC)**

Access based on job role.

- Users assigned to roles
- Roles have permissions
- Change role = change access
- Scales well for organizations

**Example:**
| Role | Permissions |
|------|-------------|
| Help Desk | Password reset, view tickets |
| HR | Employee records, payroll view |
| Finance | Financial systems, reporting |
| Admin | Full system access |

**Attribute-Based Access Control (ABAC)**

Access based on attributes and conditions.

- User attributes (department, clearance, location)
- Resource attributes (classification, owner)
- Environmental attributes (time, network)
- Policies evaluate combinations

**Example policy:** "Allow access if user.department = 'Finance' AND resource.classification = 'Financial' AND time = 'business_hours'"

**Rule-Based Access Control**

Access based on predetermined rules.

- Firewall rules
- Time-based restrictions
- Network-based restrictions

### Permission Management

**Explicit deny over implicit allow:**
- Default deny all
- Explicitly grant required access
- Deny overrides allow when conflict

**Separation of duties:**
- Critical actions require multiple people
- Prevents single person from completing sensitive process
- Example: One person requests access, another approves

**Account management:**
- Provision access when needed
- Review access regularly
- Deprovision promptly when no longer needed
- Disable rather than delete (for audit trail)

---

## Application Security

Securing applications through development and configuration.

### Input Validation

Never trust user input.

**Validation strategies:**

**Whitelist (preferred):**
- Define what IS allowed
- Reject everything else
- More secure, may be restrictive

**Blacklist:**
- Define what is NOT allowed
- Allow everything else
- Easier to implement, easier to bypass

**Validation types:**
- Type checking (string, integer, date)
- Length limits
- Format validation (regex patterns)
- Range checking (min/max values)
- Character restrictions

**Example - email validation:**
```
Whitelist approach:
- Must match pattern: [chars]@[chars].[chars]
- Maximum 254 characters
- Only alphanumeric, @, ., -, _ allowed
```

### Parameterized Queries

Prevent injection by separating code from data.

**Vulnerable:**
```python
query = "SELECT * FROM users WHERE name = '" + username + "'"
```

**Safe:**
```python
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (username,))
```

Database treats parameter as data, not code—injection impossible.

### Output Encoding

Prevent XSS by encoding output for context.

**HTML context:**
```
< becomes &lt;
> becomes &gt;
& becomes &amp;
```

Browser displays characters instead of interpreting as HTML.

**Context matters:** Different encoding for HTML, JavaScript, CSS, URLs.

### Secure Coding Practices

- Validate all input
- Encode all output
- Use parameterized queries
- Implement proper error handling
- Don't expose sensitive data in errors
- Use secure libraries and frameworks
- Keep dependencies updated
- Conduct code review
- Use static analysis tools

---

## Encryption

Protecting data through cryptographic transformation.

### Data States

**Data at Rest**

Stored data—files, databases, backups.

**Protection methods:**
- Full disk encryption (BitLocker, LUKS, FileVault)
- File/folder encryption
- Database encryption (TDE)
- Encrypted backups

**Key management critical:** Encryption is only as strong as key protection.

**Data in Transit**

Data moving across networks.

**Protection methods:**
- TLS/SSL for web traffic
- VPN for network traffic
- SSH for remote access
- Encrypted email (S/MIME, PGP)

**Common protocols:**
| Protocol | Purpose |
|----------|---------|
| HTTPS | Web traffic |
| TLS 1.2/1.3 | General encryption |
| IPsec | Network layer VPN |
| SSH | Secure remote access |
| SFTP | Secure file transfer |

**Data in Use**

Data being actively processed.

**Challenge:** Data must be decrypted for processing.

**Emerging solutions:**
- Secure enclaves (Intel SGX, ARM TrustZone)
- Homomorphic encryption (compute on encrypted data)
- Memory encryption

### Encryption Best Practices

- Use strong algorithms (AES-256, RSA-2048+)
- Proper key management
- Rotate keys regularly
- Secure key storage (HSM, key vault)
- Don't roll your own crypto
- Use TLS 1.2 or 1.3 (disable older versions)

---

## System Hardening

Reducing attack surface by securing configurations.

### Secure Baselines

Standardized secure configuration for system types.

**What baselines define:**
- Operating system settings
- Security configurations
- Disabled services
- Required security software
- Password policies
- Audit settings

**Sources for baselines:**
- CIS Benchmarks (Center for Internet Security)
- DISA STIGs (Security Technical Implementation Guides)
- Vendor security guides
- Industry standards

**Implementation:**
1. Select appropriate baseline
2. Customize for environment
3. Document deviations
4. Apply to systems
5. Monitor for drift
6. Update periodically

### Removing Unnecessary Services

Every service is potential attack surface.

**Approach:**
1. Inventory running services
2. Determine business need for each
3. Disable unnecessary services
4. Remove if possible (not just disable)
5. Document required services

**Common unnecessary services:**
- Legacy protocols (Telnet, FTP)
- Unused network services
- Development tools on production
- Sample applications
- Default features not needed

### Changing Defaults

Defaults are known to attackers.

**What to change:**
- Default passwords (ALWAYS)
- Default usernames when possible
- Default ports (security through obscurity—limited value)
- Default configurations
- Default permissions
- Default sample content

**Example:** Default admin/admin credentials on network devices are one of the most common attack vectors.

### Disabling Unnecessary Ports

Close ports not required for function.

**Process:**
1. Identify required ports for legitimate function
2. Document business justification for each
3. Block all others at host firewall
4. Block at network firewall as defense in depth
5. Regular port audits

**Host-based firewall:** Windows Firewall, iptables, firewalld—block unused ports at the endpoint.

---

## Patching and Updates

Applying fixes for known vulnerabilities.

### Patch Management Process

```
┌─────────────┐
│  Identify   │ ← New patches available
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Assess    │ ← Evaluate relevance and risk
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Test     │ ← Verify in non-production
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Deploy    │ ← Apply to production
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Verify    │ ← Confirm successful application
└─────────────┘
```

### Patch Prioritization

Not all patches are equal priority.

**High priority:**
- Critical/high CVSS scores
- Actively exploited (KEV list)
- Internet-facing systems
- Systems with sensitive data

**Standard priority:**
- Medium severity
- Internal systems
- No known exploits

**Lower priority:**
- Low severity
- Isolated systems
- Non-critical functions

### Patch Scheduling

**Emergency patches:** Critical exploited vulnerabilities—hours to days.

**Regular patches:** Monthly patch cycle (Microsoft Patch Tuesday is common baseline).

**Change windows:** Scheduled maintenance periods for production systems.

### Firmware Updates

Don't forget firmware.

**What needs firmware updates:**
- BIOS/UEFI
- Network device firmware
- Storage controller firmware
- IoT devices
- Peripheral firmware

**Challenges:**
- Often manual process
- May require downtime
- Less visibility into vulnerabilities
- Often neglected

---

## Decommissioning

Securely retiring assets.

### Why Decommissioning Matters

- Old assets contain sensitive data
- Credentials may still be valid
- Network access may persist
- Regulatory requirements for data destruction
- Improper disposal = data breach

### Decommissioning Process

**1. Inventory and documentation:**
- What data is on the system?
- What accounts/credentials exist?
- What network access does it have?
- What services depend on it?

**2. Data handling:**
- Migrate required data
- Archive if retention required
- Prepare for destruction

**3. Access removal:**
- Revoke network access
- Disable accounts
- Remove from authentication systems
- Update firewall rules

**4. Data destruction:**
- Wipe storage (cryptographic erase or overwrite)
- Physical destruction if warranted
- Certificate of destruction if required

**5. Asset disposal:**
- Recycle through certified vendor
- Track chain of custody
- Document destruction

### Data Destruction Methods

| Method | Description | When to Use |
|--------|-------------|-------------|
| Cryptographic erase | Delete encryption keys | Encrypted SSDs, quick |
| Overwriting | Write patterns multiple times | HDDs, standard disposal |
| Degaussing | Magnetic field destroys data | Magnetic media, permanent |
| Physical destruction | Shred, crush, incinerate | Highest security, end of life |

---

## Defense in Depth

Layered security controls.

### The Principle

No single control is perfect. Multiple layers mean attacker must defeat all of them.

```
                ┌────────────────────────────────────┐
                │         Physical Security          │
                │  ┌──────────────────────────────┐  │
                │  │      Network Perimeter       │  │
                │  │  ┌────────────────────────┐  │  │
                │  │  │   Network Segmentation │  │  │
                │  │  │  ┌──────────────────┐  │  │  │
                │  │  │  │   Host Security  │  │  │  │
                │  │  │  │  ┌────────────┐  │  │  │  │
                │  │  │  │  │ Application│  │  │  │  │
                │  │  │  │  │ ┌────────┐ │  │  │  │  │
                │  │  │  │  │ │  DATA  │ │  │  │  │  │
                │  │  │  │  │ └────────┘ │  │  │  │  │
                │  │  │  │  └────────────┘  │  │  │  │
                │  │  │  └──────────────────┘  │  │  │
                │  │  └────────────────────────┘  │  │
                │  └──────────────────────────────┘  │
                └────────────────────────────────────┘
```

### Defense in Depth Layers

**Physical:** Locks, cameras, guards, access controls

**Perimeter:** Firewalls, IPS, DMZ, VPN

**Network:** Segmentation, NAC, monitoring

**Host:** Antivirus, host firewall, hardening, patching

**Application:** Secure coding, input validation, WAF

**Data:** Encryption, access controls, DLP, backup

### Implementing Defense in Depth

**Don't rely on any single control:**
- Firewall can be bypassed → need endpoint protection
- Antivirus can be evaded → need behavior monitoring
- Passwords can be stolen → need MFA
- Patches can be missed → need segmentation

**Assume breach mentality:**
- Some controls will fail
- Plan for what happens next
- Limit blast radius
- Detect and respond quickly

---

## Key Exam Tips

🎯 **Network segmentation purpose:** Limit lateral movement, contain breaches. VLANs = Layer 2 logical; subnets = Layer 3 IP-based.

🎯 **Microsegmentation:** Granular, workload-level segmentation. Common in cloud/virtualized environments.

🎯 **Screened subnet (DMZ):** Isolated network for public-facing services. Two firewalls for defense in depth.

🎯 **Least privilege:** Minimum permissions necessary. Limits damage from compromise.

🎯 **RBAC vs ABAC:** RBAC = role-based (simpler). ABAC = attribute-based (more granular, conditional).

🎯 **Input validation:** Whitelist preferred over blacklist. Never trust user input.

🎯 **Parameterized queries:** Prevent SQL injection by separating code from data.

🎯 **Data states:** At rest (stored), in transit (moving), in use (processing). Different protections for each.

🎯 **Hardening:** Secure baselines (CIS, STIG), remove unnecessary services, change defaults, disable unused ports.

🎯 **Defense in depth:** Multiple layers; no single point of failure. Assume any control can fail.

---

## Key Takeaways

- [ ] Network segmentation limits lateral movement through VLANs, subnets, or physical separation
- [ ] Microsegmentation provides granular, workload-level isolation
- [ ] Screened subnet (DMZ) isolates public services from internal networks
- [ ] Least privilege grants minimum necessary permissions
- [ ] RBAC assigns access based on roles; ABAC uses attributes and conditions
- [ ] Input validation should use whitelist approach (define what's allowed)
- [ ] Parameterized queries prevent SQL injection by separating code from data
- [ ] Encrypt data at rest (disk encryption), in transit (TLS), and emerging solutions for data in use
- [ ] System hardening: secure baselines, remove unnecessary services, change defaults
- [ ] Patch management: identify, assess, test, deploy, verify
- [ ] Decommissioning requires data destruction, access revocation, and documented disposal
- [ ] Defense in depth layers multiple controls so failure of one doesn't mean total compromise
- [ ] No single mitigation is sufficient; effective security requires complementary controls

---

## Check Your Understanding

**1. After a breach, investigators find that attackers moved from a compromised workstation in the sales department to servers containing customer data. The entire organization was on a single flat network. What mitigation would have most directly prevented this lateral movement?**

<details>
<summary>Show Answer</summary>
<strong>Network segmentation.</strong>

<strong>The problem:</strong>
- Flat network = all systems can reach all other systems
- No barriers between departments
- No barriers between workstations and servers
- One compromise = access to everything

<strong>How segmentation would help:</strong>
- Sales workstations in separate VLAN/subnet
- Customer data servers in protected segment
- Firewall rules between segments
- Sales VLAN → Server VLAN traffic blocked or restricted
- Attacker on sales workstation can't reach servers

<strong>Implementation:</strong>
```
VLAN 10: Sales workstations
VLAN 20: Other workstations  
VLAN 100: Application servers
VLAN 110: Database servers (customer data)

Rules:
- VLAN 10 → VLAN 110: DENY (or allow only specific needed ports)
- Applications access databases, not users directly
```

<strong>Additional mitigations:</strong>
- Microsegmentation for even finer control
- Network monitoring for lateral movement detection
- But segmentation most directly addresses the described failure
</details>

**2. A developer argues that blacklist input validation is sufficient because they block all known attack patterns. Why is this approach problematic, and what should be used instead?**

<details>
<summary>Show Answer</summary>
<strong>Blacklist problems:</strong>

1. **Incomplete by nature:**
   - Can only block KNOWN attack patterns
   - New attacks bypass the list
   - Attackers constantly find new techniques

2. **Evasion techniques:**
   - Encoding bypasses (URL encoding, Unicode)
   - Case variations
   - Alternative syntax
   - Obfuscation

3. **Maintenance burden:**
   - Constantly updating as new attacks emerge
   - Miss one pattern = vulnerable

<strong>Example:</strong>
```
Blacklist blocks: <script>
Attacker uses: <SCRIPT>, <ScRiPt>, <script/>, %3Cscript%3E
```

<strong>Whitelist approach (preferred):</strong>

1. Define exactly what IS valid
2. Reject everything else
3. New attacks automatically rejected

<strong>Example - username field:</strong>
```
Whitelist:
- Alphanumeric only (a-z, A-Z, 0-9)
- Length: 3-20 characters
- No special characters

Any input not matching = rejected
```

<strong>Result:</strong> Attack payloads rejected because they contain characters not in whitelist—no need to anticipate specific attacks.
</details>

**3. An organization stores sensitive data in a cloud database. They've implemented encryption in transit using TLS. A security assessment notes that data at rest is not encrypted. What's the risk, and how should it be addressed?**

<details>
<summary>Show Answer</summary>
<strong>Risk:</strong>

Encryption in transit only protects data while moving over network. Data at rest is unprotected:

- Database backups stored unencrypted
- Database files on disk unencrypted
- If storage compromised → data exposed
- If backups stolen → data exposed
- Cloud storage breach → data exposed

<strong>Attack scenarios:</strong>
- Attacker gains access to backup storage
- Cloud provider insider threat
- Misconfigured storage permissions
- Stolen/improper disposed storage media

<strong>Solution - encrypt data at rest:</strong>

**Option 1: Database-level encryption (TDE)**
- Transparent Data Encryption
- Database handles encryption/decryption
- Protects data files on disk
- Key management through database

**Option 2: Cloud provider encryption**
- Enable encryption at storage level
- Server-side encryption (SSE)
- Cloud KMS for key management

**Option 3: Application-level encryption**
- Encrypt before storing in database
- Application controls keys
- Strongest protection (cloud provider can't access)
- More complex to implement

<strong>Complete protection:</strong>
- Data at rest: TDE or storage encryption
- Data in transit: TLS (already implemented)
- Key management: HSM or cloud KMS
- Access controls: Limit who can access encrypted data
</details>

**4. A system administrator is hardening a new Linux server. What steps should be taken to reduce attack surface?**

<details>
<summary>Show Answer</summary>
<strong>Linux hardening checklist:</strong>

**1. Start with secure baseline:**
- Apply CIS Benchmark for Linux
- Or organization's approved baseline
- Document any deviations

**2. Remove unnecessary packages:**
```bash
# List installed packages
dpkg -l  # Debian/Ubuntu
rpm -qa  # RHEL/CentOS

# Remove unneeded packages
apt remove <package>
yum remove <package>
```

**3. Disable unnecessary services:**
```bash
# List running services
systemctl list-units --type=service

# Disable unneeded services
systemctl disable <service>
systemctl stop <service>
```

**4. Configure firewall:**
```bash
# Enable firewall, default deny
ufw default deny incoming
ufw allow ssh  # Or specific required ports
ufw enable
```

**5. Change defaults:**
- Change SSH port (optional, limited value)
- Disable root SSH login
- Use SSH keys instead of passwords
- Remove default accounts

**6. User security:**
- Remove/disable unnecessary accounts
- Enforce strong password policy
- Implement sudo instead of root login
- Set account lockout

**7. File system security:**
- Set appropriate permissions
- Remove world-writable files
- Mount options (noexec, nosuid where appropriate)

**8. Updates:**
- Apply all security patches
- Configure automatic security updates

**9. Logging and monitoring:**
- Enable comprehensive logging
- Configure log forwarding
- Install monitoring agent

**10. Additional hardening:**
- SELinux/AppArmor enforcement
- Disable IPv6 if not used
- Remove compiler if not needed
</details>

**5. A critical production system cannot be patched immediately due to application compatibility concerns. What mitigations should be implemented while waiting for a compatible patch?**

<details>
<summary>Show Answer</summary>
<strong>Compensating controls while awaiting patch:</strong>

**1. Network-level protection:**
- Firewall rules limiting access to vulnerable service
- IPS signatures blocking known exploit patterns
- WAF rules if web-facing
- Network segmentation isolating the system

**2. Access restriction:**
- Reduce who can access the system
- Limit source IPs that can connect
- Require VPN for access
- Disable unnecessary access methods

**3. Enhanced monitoring:**
- Increase logging verbosity
- Alert on suspicious activity
- Monitor for known exploit indicators
- Real-time analysis of traffic to system

**4. Configuration hardening:**
- Disable vulnerable feature if possible
- Reduce functionality to minimum needed
- Apply any vendor workarounds
- Change configurations that reduce exposure

**5. Documentation:**
- Document the vulnerability
- Document compensating controls
- Formal risk acceptance with approval
- Set deadline for remediation

**6. Expedite testing:**
- Prioritize compatibility testing
- Test patch in staging environment
- Identify specific compatibility issues
- Work with vendor on solutions

<strong>Key principle:</strong> Compensating controls reduce risk but don't eliminate it. They're temporary measures with documented expiration. The goal is still patching.

<strong>Unacceptable:</strong> Doing nothing because patching is inconvenient.
</details>

**6. Explain why defense in depth is necessary even when each individual security control is working correctly.**

<details>
<summary>Show Answer</summary>
<strong>Why defense in depth is necessary:</strong>

**1. No control is perfect:**
- Firewalls can be bypassed (allowed ports, misconfigurations)
- Antivirus can be evaded (zero-days, novel malware)
- Authentication can be compromised (phishing, credential theft)
- Encryption can have implementation flaws

**2. Controls have blind spots:**
- Firewall doesn't see encrypted traffic content
- Antivirus doesn't catch fileless malware
- Network monitoring misses endpoint activity
- Each control covers specific threats, not all threats

**3. Attackers adapt:**
- Attackers study defenses
- Develop bypass techniques
- Target weakest link
- Combine techniques to circumvent controls

**4. Configuration drift and errors:**
- Controls misconfigured over time
- Changes introduce gaps
- Human error in implementation
- Policies not consistently applied

<strong>How defense in depth helps:</strong>

**Scenario without depth:**
```
Attacker → Firewall (bypassed via phishing) → COMPROMISED
```

**Scenario with depth:**
```
Attacker → Firewall (bypassed via phishing)
        → Email filter (caught some phishing, user clicked one)
        → Endpoint protection (blocked malware execution)
        → STOPPED

Or if that fails:
        → Network segmentation (limited lateral movement)
        → Monitoring (detected anomaly)
        → CONTAINED and DETECTED
```

**Key insight:** Assume every control can fail. Plan for what happens when it does. Each layer reduces probability of successful attack and limits damage.
</details>

**7. A new server is deployed with all default settings and accounts. What specific risks does this create?**

<details>
<summary>Show Answer</summary>
<strong>Risks from default configurations:</strong>

**1. Default credentials:**
- admin/admin, admin/password, root/root
- Well-known, documented, easily guessed
- First thing attackers try
- Immediate full system access

**2. Unnecessary services enabled:**
- Larger attack surface
- Services you don't need but attackers can exploit
- Example: Default installations enable web servers, remote access, etc.

**3. Verbose error messages:**
- Reveal internal information
- Database types, versions
- File paths, configuration details
- Helps attackers craft attacks

**4. Sample/test content:**
- Default pages reveal technology stack
- Sample applications have known vulnerabilities
- Test accounts may have weak credentials

**5. Permissive settings:**
- Open permissions (world-readable/writable)
- Weak authentication settings
- No rate limiting or lockout
- Everything enabled by default

**6. Known configurations:**
- Attackers know exact default setup
- Pre-built exploit tools target defaults
- No effort required to understand target

<strong>Real-world example:</strong>
- MongoDB default: No authentication
- Thousands of databases exposed
- Mass ransom attacks on default MongoDB instances

<strong>Mitigation:</strong>
- Never deploy with defaults
- Use secure baselines (CIS, STIG)
- Change ALL default credentials
- Disable all unnecessary services/features
- Apply principle of least privilege to all settings
</details>

**8. An organization needs to retire old servers containing sensitive customer data. What's the proper decommissioning process?**

<details>
<summary>Show Answer</summary>
<strong>Decommissioning process:</strong>

**Phase 1: Preparation**

1. **Inventory the systems:**
   - What applications run on them?
   - What data is stored?
   - What network access exists?
   - Who has credentials?

2. **Identify dependencies:**
   - What systems connect to these?
   - What breaks when they're gone?
   - Migration plan for dependent services

3. **Data classification:**
   - Customer data = sensitive
   - What retention requirements apply?
   - What must be migrated vs. destroyed?

**Phase 2: Data Handling**

4. **Migrate required data:**
   - Move to replacement systems
   - Verify successful migration
   - Maintain data integrity

5. **Archive if required:**
   - Regulatory retention requirements
   - Encrypted archive
   - Documented retention period

**Phase 3: Access Removal**

6. **Remove network access:**
   - Firewall rules
   - Remove from load balancers
   - DNS entries
   - Disconnect from network

7. **Revoke credentials:**
   - Disable local accounts
   - Remove from AD/LDAP
   - Revoke service account access
   - Reset any shared credentials

**Phase 4: Data Destruction**

8. **Destroy data on storage:**
   - Cryptographic erase (if encrypted)
   - Multi-pass overwrite (HDDs)
   - Physical destruction if high sensitivity
   - Document destruction method

9. **Verify destruction:**
   - Attempt data recovery (should fail)
   - Certificate of destruction

**Phase 5: Disposal**

10. **Asset disposal:**
    - Certified e-waste vendor
    - Chain of custody documentation
    - Proof of destruction

**Documentation throughout:**
- What was on the systems
- What was migrated/archived
- How data was destroyed
- Who approved each step
- Final disposition
</details>

**9. Compare RBAC and ABAC. When would you choose each?**

<details>
<summary>Show Answer</summary>
<strong>RBAC (Role-Based Access Control):</strong>

**How it works:**
- Define roles (Admin, User, Manager)
- Assign permissions to roles
- Assign users to roles
- User gets permissions of their role(s)

**Advantages:**
- Simple to understand and implement
- Easy to audit (who has what role?)
- Scales well for standard access patterns
- Common in most systems

**Limitations:**
- Coarse-grained (role = set of permissions)
- Role explosion (many specific roles needed)
- Doesn't handle dynamic conditions well

**Best for:**
- Clear organizational hierarchies
- Standard access patterns
- Compliance-driven environments
- Most enterprise applications

---

<strong>ABAC (Attribute-Based Access Control):</strong>

**How it works:**
- Evaluate attributes of user, resource, action, environment
- Policies define conditions for access
- Access decisions made at request time

**Example policy:**
```
IF user.department = "HR" 
AND resource.type = "employee_record"
AND resource.department = user.department
AND time.current = "business_hours"
THEN allow.read
```

**Advantages:**
- Fine-grained, dynamic access decisions
- Handles complex scenarios
- Context-aware (time, location, device)
- Flexible without role explosion

**Limitations:**
- More complex to implement
- Harder to audit (what can user X access?)
- Requires attribute infrastructure
- Policy management complexity

**Best for:**
- Complex access requirements
- Dynamic, context-dependent access
- Multi-tenant environments
- When RBAC isn't granular enough

---

<strong>When to choose:</strong>

| Scenario | Choice |
|----------|--------|
| Standard enterprise access | RBAC |
| Clear job-based permissions | RBAC |
| Need time/location-based access | ABAC |
| Complex data-level permissions | ABAC |
| Compliance requiring clear roles | RBAC |
| Dynamic, conditional access | ABAC |
| Simple, maintainable | RBAC |
| Maximum flexibility | ABAC |

**Hybrid approach:** Many organizations use RBAC for broad access with ABAC for fine-grained decisions within that access.
</details>

**10. What is the purpose of a screened subnet (DMZ), and how should it be architected?**

<details>
<summary>Show Answer</summary>
<strong>Purpose:</strong>

The screened subnet (DMZ) isolates public-facing services from internal network, creating a buffer zone.

**Why it's needed:**
- Web servers, mail servers, DNS need internet access
- But shouldn't have direct access to internal network
- If compromised, attacker is contained in DMZ
- Internal network protected by additional firewall

---

<strong>Architecture:</strong>

```
Internet
    │
    ▼
┌────────────┐
│  Firewall  │  (External/Front Firewall)
│     #1     │
└─────┬──────┘
      │
      ▼
┌─────────────────────────────────┐
│           DMZ Segment           │
│  ┌─────┐  ┌─────┐  ┌─────┐     │
│  │ Web │  │Email│  │ DNS │     │
│  └─────┘  └─────┘  └─────┘     │
└─────────────┬───────────────────┘
              │
              ▼
       ┌────────────┐
       │  Firewall  │  (Internal/Back Firewall)
       │     #2     │
       └─────┬──────┘
             │
             ▼
┌─────────────────────────────────┐
│       Internal Network          │
│  ┌─────┐  ┌─────┐  ┌─────┐     │
│  │Users│  │ DB  │  │ App │     │
│  └─────┘  └─────┘  └─────┘     │
└─────────────────────────────────┘
```

---

<strong>Firewall rules:</strong>

**External firewall (#1):**
- Internet → DMZ: Allow specific ports (80, 443, 25, 53)
- Internet → Internal: DENY ALL
- DMZ → Internet: Allow as needed (updates, email relay)

**Internal firewall (#2):**
- DMZ → Internal: Allow only specific needed connections
  - Web server → App server: Specific port
  - App server → Database: Specific port
- Internal → DMZ: Allow necessary management
- Internal → Internet: Through proxy/controlled

---

<strong>Key principles:</strong>

1. **Two firewalls (defense in depth):**
   - Different vendors if possible
   - Single vulnerability doesn't compromise both

2. **Minimize DMZ → Internal access:**
   - Only what's absolutely necessary
   - Specific hosts, specific ports
   - Default deny

3. **DMZ systems hardened:**
   - Minimal software installed
   - Fully patched
   - No sensitive data stored
   - If compromised, limited value

4. **Monitoring:**
   - Heavy logging on DMZ systems
   - IDS/IPS on both firewall segments
   - Alert on unusual patterns
</details>

---

## Next Lesson Preview

In **Lesson 14: Network Security Architecture**, we'll dive deeper into network security design. You'll learn about firewall architectures, intrusion detection/prevention systems, network access control, software-defined networking, and how to design secure network infrastructure from the ground up.

---

✅ **Lesson 13 Complete**

**Progress:** 13 of 30 lessons complete (43.3%)

---

*Next up: Lesson 14 - Network Security Architecture*