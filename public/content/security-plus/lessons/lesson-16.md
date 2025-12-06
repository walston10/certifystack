# Lesson 16: Secure Network Design

**Estimated Time:** 30-35 minutes  
**Domain:** 3.0 Security Architecture (18% of exam)  
**Exam Objectives Covered:** 3.2 - Given a scenario, apply security principles to secure enterprise infrastructure

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain network device hardening principles (routers, switches, firewalls)
- Describe Network Access Control (NAC) and 802.1X authentication
- Compare secure and insecure protocols and when to use each
- Identify email security mechanisms (SPF, DKIM, DMARC)
- Explain DNS security concepts (DNSSEC, DNS filtering, DoH/DoT)
- Describe endpoint security technologies (EDR, XDR, DLP)
- Apply security principles to infrastructure design decisions
- Recognize common network security misconfigurations

---

## Video Resources

- **Professor Messer:** "CompTIA Security+ SY0-701 - Secure Network Design" (14 min)
- **NetworkChuck:** "Network Security Fundamentals" (12 min)
- **Cybrary:** "802.1X and Network Access Control" (10 min)

---

## Introduction

The penetration tester's report made uncomfortable reading.

Titan Manufacturing had hired an external firm to test their network security. They expected a few findings—every company has some issues. They didn't expect what came back.

The tester had connected a laptop to an open Ethernet port in the lobby. No authentication required—the port was live and provided full network access. From there, they discovered the network was completely flat. No segmentation. The lobby port could reach the manufacturing control systems, the financial servers, the HR database—everything.

Network switches were using default credentials. The tester logged into switch management interfaces using "admin/admin" and could have reconfigured the entire network. Router configurations allowed Telnet access—passwords transmitted in cleartext across the network.

The firewall had rules that made sense five years ago but were never cleaned up. Ports opened for a vendor project in 2019 were still open. "Temporary" exceptions had become permanent.

DNS queries went to the ISP's servers—no filtering, no logging. Employees could resolve any domain, including known malware command-and-control servers. Email had no SPF, DKIM, or DMARC records. Anyone could send email appearing to come from titan-manufacturing.com.

Endpoints had antivirus from three different vendors—remnants of various initiatives—with no central management. Some machines hadn't received updates in months. No EDR capability existed to detect sophisticated attacks.

The tester's summary was blunt: "An attacker with physical access to any network port would have complete access to all systems within hours. Remote compromise via phishing would achieve the same result within days."

Titan spent the next year rebuilding their network with security in mind. 802.1X authentication on every port. Network segmentation isolating critical systems. Hardened device configurations with no default credentials. Secure protocols replacing insecure ones. Email authentication preventing spoofing. Centralized endpoint protection with EDR capabilities.

The follow-up penetration test found issues too—that's normal. But the tester couldn't walk through the front door anymore.

This lesson covers secure network design—how to build networks that resist attack rather than invite it. You'll learn the principles and technologies that transform a network from vulnerable to defensible.

---

## Network Device Hardening

Network devices (routers, switches, firewalls) are infrastructure. If attackers control infrastructure, they control everything.

### General Hardening Principles

**Change default credentials**
- Factory passwords are published and known to attackers
- First step for any network device
- Use strong, unique passwords for each device
- Consider certificate-based authentication for management

**Disable unnecessary services**
- Every running service is an attack surface
- Disable HTTP management if using HTTPS
- Disable Telnet if using SSH
- Turn off unused protocols (CDP, LLDP if not needed)
- Remove demo or test features

**Keep firmware updated**
- Vulnerabilities discovered regularly in network devices
- Establish patching schedule for infrastructure
- Test updates before production deployment
- Subscribe to vendor security advisories

**Secure management access**
- Use out-of-band management network if possible
- Restrict management access to specific IPs/subnets
- Use encrypted protocols (SSH, HTTPS)
- Implement multi-factor authentication
- Log all administrative access

**Configure logging**
- Send logs to central syslog/SIEM
- Log configuration changes
- Log authentication attempts (success and failure)
- Log administrative commands
- Set appropriate log levels

### Router Hardening

**Specific router controls:**
- Disable IP source routing (prevents spoofing attacks)
- Enable reverse path filtering (uRPF) - drops packets with spoofed source IPs
- Disable ICMP redirects
- Implement access control lists (ACLs)
- Disable unused interfaces
- Configure routing protocol authentication (OSPF, BGP)
- Enable control plane policing (rate limit management traffic)

**Routing protocol security:**
- Authenticate routing updates (MD5 or SHA)
- Use route filtering to prevent route injection
- Implement maximum prefix limits for BGP
- Monitor for route hijacking

### Switch Hardening

**Specific switch controls:**
- Enable port security (limit MACs per port)
- Disable unused ports
- Implement DHCP snooping (prevents rogue DHCP servers)
- Enable Dynamic ARP Inspection (DAI)
- Configure storm control (prevents broadcast storms)
- Use private VLANs where appropriate
- Disable DTP (Dynamic Trunking Protocol)—configure trunk ports explicitly

**VLAN security:**
- Change native VLAN from default (VLAN 1)
- Don't use VLAN 1 for user traffic
- Explicitly configure access vs trunk ports
- Prune unnecessary VLANs from trunks

### Firewall Hardening

**Rule management:**
- Implement implicit deny (block by default)
- Order rules correctly (most specific first)
- Document purpose of every rule
- Review and clean up rules regularly
- Remove temporary rules after projects complete
- Use rule comments and naming conventions

**Firewall administration:**
- Restrict management access strictly
- Use separate management interface
- Require MFA for admin access
- Log all rule changes
- Implement change management for firewall rules

💡 **Memory Trick:** Device hardening: **"CDKSL"** - **C**hange defaults, **D**isable unnecessary, **K**eep updated, **S**ecure management, **L**og everything.

---

## Network Access Control (NAC)

NAC ensures only authorized, compliant devices connect to the network.

### NAC Concepts

**Purpose:**
- Authenticate users/devices before granting network access
- Verify device compliance (patches, antivirus, configuration)
- Assign appropriate network access based on identity
- Quarantine non-compliant devices

**Components:**
- **Supplicant:** Client software on connecting device
- **Authenticator:** Network device (switch, wireless AP) controlling access
- **Authentication server:** RADIUS server validating credentials

### 802.1X Authentication

Industry standard for port-based network access control.

**How it works:**
1. Device connects to network port
2. Port starts in unauthorized state (limited or no access)
3. Switch (authenticator) prompts for credentials
4. Device (supplicant) provides credentials
5. Switch forwards to RADIUS server
6. RADIUS validates and returns result
7. If approved: port moves to authorized state with appropriate VLAN
8. If denied: port remains unauthorized

**EAP Methods (how credentials are exchanged):**

| Method | Description | Security |
|--------|-------------|----------|
| **EAP-TLS** | Certificate on both client and server | Highest (mutual auth) |
| **PEAP** | Server cert, client password in tunnel | High |
| **EAP-TTLS** | Similar to PEAP, more flexible | High |
| **EAP-FAST** | Cisco, uses PAC instead of cert | Medium-High |

**EAP-TLS** is most secure (mutual certificate authentication) but requires PKI infrastructure. **PEAP** is most common (server certificate, client uses password).

### Posture Assessment

NAC can check device "health" before granting access:

**Checks may include:**
- Operating system version
- Antivirus installed and updated
- Firewall enabled
- Required patches installed
- Disk encryption enabled
- No prohibited software

**Responses to non-compliance:**
- Deny access completely
- Place in quarantine VLAN (limited access to remediation resources)
- Allow with warning (grace period)
- Allow but log for follow-up

### Agent vs Agentless NAC

**Agent-based:**
- Software installed on endpoint
- Deep visibility into device state
- Can enforce and remediate
- Requires deployment and management
- Works best for managed devices

**Agentless:**
- No software installation required
- Uses network scanning and profiling
- Less visibility into device internals
- Works for any device (BYOD, IoT, guests)
- Easier to deploy

**Hybrid approach:** Use agents for corporate devices, agentless for guests and IoT.

🎯 **Exam Tip:** Know 802.1X components: supplicant (client), authenticator (switch/AP), authentication server (RADIUS). EAP-TLS uses certificates (most secure); PEAP uses certificates + passwords.

---

## Secure vs Insecure Protocols

Many common protocols transmit data in cleartext. Replace with secure alternatives.

### Protocol Comparison

| Insecure | Port | Secure Alternative | Port | Difference |
|----------|------|-------------------|------|------------|
| Telnet | 23 | SSH | 22 | Encrypted terminal |
| FTP | 20, 21 | SFTP or FTPS | 22 or 990 | Encrypted file transfer |
| HTTP | 80 | HTTPS | 443 | Encrypted web traffic |
| SMTP | 25 | SMTPS/STARTTLS | 465/587 | Encrypted email |
| POP3 | 110 | POP3S | 995 | Encrypted email retrieval |
| IMAP | 143 | IMAPS | 993 | Encrypted email access |
| LDAP | 389 | LDAPS | 636 | Encrypted directory |
| SNMPv1/v2 | 161 | SNMPv3 | 161 | Encrypted, authenticated |
| DNS | 53 | DoT/DoH | 853/443 | Encrypted DNS |

### Why Insecure Protocols Are Dangerous

**Telnet example:**
- Username and password transmitted in cleartext
- Anyone on network path can capture credentials
- Session can be hijacked
- Commands visible to eavesdroppers

**Replace with SSH:**
- All traffic encrypted
- Strong authentication (password or key-based)
- Cannot be eavesdropped or hijacked
- Same functionality, just secure

### Protocol Selection Guidelines

**Always use:**
- SSH instead of Telnet
- HTTPS instead of HTTP (especially for authentication)
- SFTP/SCP instead of FTP
- SNMPv3 instead of v1/v2c
- TLS-encrypted email protocols

**When to accept insecure protocols:**
- Isolated management networks with no exposure
- Legacy systems with compensating controls
- Never on production networks accessible to users

**Common mistake:** Using HTTPS for login page but HTTP for rest of site. Session cookies can be stolen. Use HTTPS everywhere.

---

## Email Security

Email is a primary attack vector. Multiple technologies work together to secure it.

### SPF (Sender Policy Framework)

**Purpose:** Specifies which servers can send email for your domain.

**How it works:**
1. Domain owner publishes SPF record in DNS
2. Record lists authorized sending IP addresses
3. Receiving server checks if sender's IP is authorized
4. If not authorized, email may be rejected or marked as spam

**Example SPF record:**
```
v=spf1 ip4:192.0.2.0/24 include:_spf.google.com -all
```

This says: Accept email from 192.0.2.0/24, accept from Google's servers (for Google Workspace), reject all others.

**SPF alone isn't enough:** Only checks envelope sender (MAIL FROM), not the From header users see.

### DKIM (DomainKeys Identified Mail)

**Purpose:** Cryptographically signs emails to prove authenticity and integrity.

**How it works:**
1. Sending server signs email with private key
2. Signature added as DKIM-Signature header
3. Public key published in DNS
4. Receiving server retrieves public key
5. Verifies signature matches email content
6. Confirms email hasn't been modified and came from legitimate source

**What DKIM proves:**
- Email came from claimed domain (authenticated)
- Email hasn't been modified in transit (integrity)

### DMARC (Domain-based Message Authentication, Reporting, and Conformance)

**Purpose:** Tells receiving servers what to do when SPF/DKIM fail, and provides reporting.

**How it works:**
1. Domain owner publishes DMARC policy in DNS
2. Policy specifies: none (monitor), quarantine, or reject
3. Receiving servers apply policy to failed emails
4. Reports sent back to domain owner showing authentication results

**Example DMARC record:**
```
v=DMARC1; p=reject; rua=mailto:dmarc-reports@example.com
```

This says: Reject emails failing authentication, send reports to specified address.

**DMARC policies:**
- **p=none** - Monitor only, don't take action (start here)
- **p=quarantine** - Send to spam if authentication fails
- **p=reject** - Block emails failing authentication

### Email Security Together

| Technology | What It Does | Protects Against |
|------------|--------------|------------------|
| SPF | Authorizes sending servers | Unauthorized servers sending as you |
| DKIM | Signs email content | Tampering, proves authenticity |
| DMARC | Policy + reporting | Coordinates SPF/DKIM, visibility |

**Implementation order:**
1. Implement SPF (identify all legitimate senders)
2. Implement DKIM (sign outbound email)
3. Implement DMARC with p=none (monitor)
4. Review reports, fix issues
5. Move to p=quarantine, then p=reject

### Email Gateway Security

Beyond authentication, email gateways provide:
- **Spam filtering** - Block unwanted email
- **Malware scanning** - Detect malicious attachments
- **URL filtering** - Check links against threat intelligence
- **Sandboxing** - Detonate attachments in isolated environment
- **DLP** - Prevent sensitive data leaving via email
- **Encryption** - Automatic encryption for sensitive content

💡 **Memory Trick:** Email authentication order: **"SDM"** - **S**PF (who can send), **D**KIM (is it authentic), **D**MARC (what to do about failures).

---

## DNS Security

DNS is critical infrastructure. Compromised DNS = compromised everything.

### DNS Threats

**DNS spoofing/poisoning:**
- Attacker provides false DNS responses
- Redirects users to malicious sites
- Can intercept traffic or steal credentials

**DNS tunneling:**
- Encode data in DNS queries/responses
- Bypass firewalls that allow DNS
- Exfiltrate data or establish C2 channels

**DNS hijacking:**
- Attacker modifies DNS records at registrar or server
- Redirects all traffic for a domain
- Used for phishing, data theft

### DNSSEC (DNS Security Extensions)

**Purpose:** Cryptographically validates DNS responses.

**How it works:**
1. Zone owner signs DNS records with private key
2. Signatures published alongside records
3. Chain of trust from root zone to domain
4. Resolvers verify signatures
5. Invalid signatures = reject response

**What DNSSEC provides:**
- **Authentication** - Response came from authoritative source
- **Integrity** - Response hasn't been modified
- **Does NOT provide:** Confidentiality (queries still visible)

**Limitations:**
- Complex to implement
- Increases DNS response size
- Doesn't encrypt queries (privacy concern)

### DNS Filtering

**Purpose:** Block DNS resolution for malicious or unwanted domains.

**How it works:**
1. Organization uses controlled DNS servers
2. Servers check requests against blocklists
3. Known malicious domains return no result or block page
4. Legitimate domains resolve normally

**What can be blocked:**
- Malware command-and-control servers
- Phishing domains
- Categories (gambling, adult content)
- Newly registered domains (often malicious)

**Benefits:**
- Blocks threats before connection
- Works for all devices using that DNS
- Provides visibility into DNS queries
- Relatively easy to implement

### Encrypted DNS

**Problem:** Traditional DNS is plaintext. ISPs, attackers, anyone on path can see queries.

**Solutions:**

**DoT (DNS over TLS):**
- Encrypts DNS queries with TLS
- Port 853
- Easy to block (dedicated port)
- Provides privacy from eavesdroppers

**DoH (DNS over HTTPS):**
- Encrypts DNS queries over HTTPS
- Port 443 (same as web traffic)
- Harder to block or filter
- Privacy from eavesdroppers
- Can bypass organizational DNS controls (concern for enterprises)

**Organizational considerations:**
- DoH can bypass enterprise DNS filtering
- Users could configure browsers to use external DoH
- May need to block external DoH or deploy enterprise DoH
- Balance privacy benefits vs security control needs

---

## Endpoint Security

Endpoints (workstations, laptops, servers) are where users work and data lives.

### Antivirus/Anti-malware

**Traditional AV:**
- Signature-based detection
- Compares files against known malware signatures
- Effective for known threats
- Limited against new/unknown malware

**Limitations:**
- Signatures lag behind new malware
- Can't detect fileless malware well
- Easy to evade with minor modifications
- Necessary but not sufficient

### EDR (Endpoint Detection and Response)

**Purpose:** Detect and respond to sophisticated threats that evade traditional AV.

**Capabilities:**
- **Behavioral analysis** - Detect suspicious behavior, not just known signatures
- **Continuous monitoring** - Record endpoint activity
- **Threat hunting** - Search across endpoints for indicators
- **Investigation** - Forensic data for incident response
- **Response** - Isolate endpoints, kill processes, remediate

**How EDR works:**
1. Agent installed on endpoints
2. Agent monitors processes, network, files, registry
3. Data sent to central console
4. Behavioral analytics detect anomalies
5. Alerts generated for investigation
6. Responders can take action remotely

**EDR vs AV:**
- AV: "Is this file malware?" (signature match)
- EDR: "Is this behavior malicious?" (behavioral analysis)

### XDR (Extended Detection and Response)

**Purpose:** Integrate detection and response across multiple security layers.

**What XDR adds:**
- Correlates data from endpoints, network, cloud, email
- Single console for all detection
- Cross-domain threat detection
- Automated response across domains

**Example:** XDR detects phishing email (email telemetry), correlates with endpoint process spawned from attachment (endpoint telemetry), identifies network connection to C2 (network telemetry), and automatically blocks at all three layers.

### Host-Based Firewall

**Purpose:** Filter traffic at the endpoint level.

**Benefits:**
- Defense in depth (works even if network firewall bypassed)
- Protects against lateral movement
- Can be policy-controlled centrally
- Works when device is off-network

**Best practices:**
- Enable on all endpoints
- Centrally manage rules
- Block inbound by default
- Allow only required outbound
- Log blocked connections

### DLP (Data Loss Prevention) - Endpoint

**Purpose:** Prevent sensitive data from leaving endpoints through unauthorized channels.

**What endpoint DLP monitors:**
- File copies to USB drives
- Uploads to cloud storage
- Email attachments
- Print jobs
- Clipboard operations
- Screenshots

**Actions:**
- Block the action
- Warn user and allow
- Encrypt automatically
- Log and alert

🎯 **Exam Tip:** Know the progression: AV (signature-based) → EDR (behavioral, response capability) → XDR (cross-domain correlation). Each builds on the previous.

---

## Putting It Together: Secure Network Design

Secure networks layer multiple controls together.

### Design Principles

**Defense in depth:**
- Multiple layers of controls
- Failure of one doesn't mean total compromise
- Attacker must bypass multiple barriers

**Least privilege:**
- Devices and users get minimum necessary access
- Segment networks to limit lateral movement
- Default deny with explicit allows

**Fail secure:**
- If control fails, fail to a secure state
- Firewall failure = deny traffic (not allow)
- NAC failure = quarantine (not allow access)

### Example Secure Architecture

```
Internet
    |
[Firewall] ← External firewall, IPS
    |
[DMZ] ← Web servers, email gateway
    |
[Internal Firewall] ← Separates DMZ from internal
    |
[Core Network]
    |
├── [User VLAN] ← 802.1X, NAC, endpoint security
├── [Server VLAN] ← Segmented by function
├── [Database VLAN] ← Most restricted
├── [Management VLAN] ← Out-of-band
└── [Guest VLAN] ← Isolated, internet only
```

**Each layer:**
- Separate VLANs with firewall rules between
- 802.1X authentication for wired/wireless
- EDR on all endpoints
- Encrypted protocols for management
- Centralized logging to SIEM

### Common Mistakes to Avoid

**Flat networks:**
- No segmentation = attacker moves freely
- One compromise = total compromise

**Default credentials:**
- Every network device should have unique, strong credentials
- Document securely (password manager, not spreadsheet)

**Insecure protocols:**
- Telnet, FTP, HTTP for management = credentials exposed
- SNMPv1/v2c = community strings in cleartext

**Unmanaged devices:**
- IoT, printers, conference room systems
- Often overlooked, frequently vulnerable
- Segment onto isolated VLANs

**No egress filtering:**
- Focus on blocking inbound, forget outbound
- Attackers establish outbound connections
- Filter outbound to known-good destinations

---

## Key Exam Tips

🎯 **Device hardening** - Change defaults, disable unnecessary services, update firmware, secure management access, configure logging.

🎯 **802.1X components** - Supplicant (client), Authenticator (switch/AP), Authentication Server (RADIUS). EAP-TLS is most secure.

🎯 **Secure protocols** - SSH (not Telnet), HTTPS (not HTTP), SFTP (not FTP), SNMPv3 (not v1/v2c), LDAPS (not LDAP).

🎯 **Email security** - SPF (authorized senders), DKIM (signature verification), DMARC (policy and reporting). Implement in that order.

🎯 **DNS security** - DNSSEC (validates responses), DNS filtering (blocks malicious), DoT/DoH (encrypts queries).

🎯 **Endpoint security progression** - AV (signatures) → EDR (behavior + response) → XDR (cross-domain).

🎯 **NAC posture** - Checks device compliance before granting access. Non-compliant devices quarantined.

💡 **Scenario recognition** - Questions may describe network setup and ask what's wrong or what should be implemented.

---

## Key Takeaways

- [ ] Network device hardening includes changing defaults, disabling unused services, and updating firmware
- [ ] Management access should use encrypted protocols (SSH, HTTPS) and be restricted to specific sources
- [ ] 802.1X provides port-based authentication using supplicant, authenticator, and RADIUS server
- [ ] EAP-TLS (mutual certificates) is most secure; PEAP (server cert + password) is most common
- [ ] NAC posture assessment checks device compliance before granting network access
- [ ] Replace insecure protocols: Telnet→SSH, FTP→SFTP, HTTP→HTTPS, SNMPv1/v2→v3
- [ ] SPF specifies authorized email senders; DKIM signs email for authenticity
- [ ] DMARC tells receivers what to do when authentication fails and provides reporting
- [ ] DNSSEC validates DNS responses cryptographically but doesn't encrypt
- [ ] DoT (port 853) and DoH (port 443) encrypt DNS queries for privacy
- [ ] EDR provides behavioral detection and response capabilities beyond signature-based AV
- [ ] XDR correlates detection across endpoints, network, cloud, and email
- [ ] Host-based firewalls provide defense in depth at the endpoint level
- [ ] Endpoint DLP prevents data exfiltration via USB, email, cloud uploads, print, clipboard
- [ ] Secure design uses defense in depth, least privilege, and network segmentation

---

## Check Your Understanding

**1. A company's network devices still use factory default passwords. An IT technician says "it's fine, they're on an internal network." Why is this dangerous?**

<details>
<summary>Show Answer</summary>
<strong>Internal network access doesn't prevent exploitation—insiders, compromised endpoints, and lateral movement all pose threats.</strong>

**Why default credentials are dangerous regardless of location:**

**Insider threat:** Any employee could access network devices with published default credentials.

**Lateral movement:** If one endpoint is compromised (phishing, malware), attacker pivots to network devices using defaults.

**Physical access:** Visitors, contractors, anyone with network access could compromise infrastructure.

**Default credentials are published:** Vendors publish them in manuals. Attackers maintain databases. No skill required.

**Impact of network device compromise:**
- Reconfigure routing to redirect traffic
- Disable security features
- Create backdoor access
- Monitor all network traffic
- Cause complete outage

**Remediation:**
- Change all default credentials immediately
- Use unique, strong passwords for each device
- Store credentials in password manager
- Audit regularly for default credentials
- Include in security standards

"It's internal" is never an excuse for basic security failures.
</details>

**2. An organization deploys 802.1X but some legacy printers can't support it. What options exist?**

<details>
<summary>Show Answer</summary>
<strong>Several options: MAC Authentication Bypass, dedicated VLAN, or network isolation.</strong>

**Options for non-802.1X devices:**

**MAC Authentication Bypass (MAB):**
- If 802.1X fails, authenticate based on MAC address
- Switch sends MAC to RADIUS as username
- RADIUS has list of approved MACs
- Less secure (MACs can be spoofed) but functional
- Use only for devices that can't do 802.1X

**Dedicated/isolated VLAN:**
- Place printers on separate VLAN
- Apply strict firewall rules
- Allow only print traffic to/from authorized hosts
- No access to sensitive networks

**Static port assignment:**
- Assign printer ports statically to printer VLAN
- Don't require authentication on those specific ports
- Physically secure the port location
- Monitor for unexpected MAC addresses

**Print server:**
- Put printer behind print server
- Print server authenticates via 802.1X
- Printer connects to isolated switch/VLAN behind server
- Users print to server, server sends to printer

**Best practice:**
- Inventory all devices that can't support 802.1X
- Use MAB with MAC whitelist for trusted devices
- Segment on dedicated VLAN with restricted access
- Monitor for MAC spoofing attempts
- Plan device replacement with 802.1X-capable models
</details>

**3. A security audit finds the organization has SPF but no DKIM or DMARC. What risks remain?**

<details>
<summary>Show Answer</summary>
<strong>SPF alone doesn't prevent all spoofing, provides no integrity verification, and gives no visibility into failures.</strong>

**What SPF provides:**
- Specifies authorized sending IPs for domain
- Receiving servers can check sender IP against SPF

**What SPF lacks (addressed by DKIM/DMARC):**

**Header vs envelope:**
- SPF checks envelope sender (MAIL FROM)
- Users see the From header, which can be different
- Attacker can pass SPF but spoof visible From header

**No integrity:**
- SPF doesn't verify email content
- Email could be modified in transit
- DKIM provides content integrity via signature

**No policy enforcement:**
- SPF says who *can* send, not what to do when it fails
- Receiving servers may ignore SPF failures
- DMARC provides policy (none/quarantine/reject)

**No visibility:**
- SPF provides no reporting
- Organization doesn't know if spoofing attempts occurring
- DMARC provides aggregate and forensic reports

**Remaining risks without DKIM/DMARC:**
- Sophisticated spoofing still possible
- No proof email wasn't modified
- Inconsistent enforcement by receiving servers
- No visibility into abuse attempts

**Recommendation:**
1. Keep SPF
2. Implement DKIM (sign outbound email)
3. Implement DMARC with p=none initially
4. Review DMARC reports
5. Move to p=quarantine then p=reject
</details>

**4. Explain the difference between DoT and DoH, and why an enterprise might prefer one over the other.**

<details>
<summary>Show Answer</summary>
<strong>DoT uses dedicated port 853 (easier to manage); DoH uses port 443 (harder to block/detect).</strong>

**DNS over TLS (DoT):**
- Port 853 (dedicated)
- Encrypts DNS with TLS
- Easy to identify (distinct port)
- Easy to block if desired
- Easy to allow through firewall explicitly
- Corporate-friendly (controllable)

**DNS over HTTPS (DoH):**
- Port 443 (same as HTTPS)
- Encrypts DNS over HTTPS
- Blends with regular web traffic
- Difficult to block without blocking HTTPS
- Difficult to detect/monitor
- Privacy-focused (hard to inspect)

**Enterprise preference: Often DoT**

Why enterprises might prefer DoT:
1. **Visibility:** Can identify DNS traffic by port
2. **Control:** Can block external DoT, force internal
3. **Security tools:** Can monitor DNS patterns for threats
4. **Compliance:** Can log DNS queries for audit
5. **DNS filtering:** Enterprise DNS filtering still works

DoH concerns for enterprises:
1. Browsers can configure external DoH, bypassing corporate DNS
2. Malware can use DoH to hide C2 communication
3. DLP and security tools lose DNS visibility
4. Harder to enforce acceptable use policies

**Enterprise approach:**
- Deploy internal DoT or DoH resolver
- Block external DoT/DoH at firewall
- Configure endpoints to use enterprise resolver
- Maintain DNS-based security controls

**For privacy-focused individuals:** DoH provides better privacy from ISP monitoring, but enterprises need visibility.
</details>

**5. An organization has antivirus on all endpoints but still suffered a ransomware attack that AV didn't detect. What additional technology would help?**

<details>
<summary>Show Answer</summary>
<strong>EDR (Endpoint Detection and Response) provides behavioral detection that catches threats AV misses.</strong>

**Why AV alone isn't enough:**

**Signature limitations:**
- AV detects known malware via signatures
- New/modified malware has no signature yet
- Attackers easily modify malware to evade signatures
- "Polymorphic" malware changes each time

**Behavioral blindness:**
- AV scans files for known patterns
- Doesn't understand what programs *do*
- "Living off the land" attacks use legitimate tools
- Fileless malware lives in memory, not files

**What EDR adds:**

**Behavioral detection:**
- Monitors what processes actually do
- Detects suspicious behaviors (encrypting many files, disabling backups)
- Catches threats by behavior, not signature
- "This looks like ransomware" even if never seen before

**Continuous monitoring:**
- Records endpoint activity
- Provides timeline for investigation
- "What did the malware do before we caught it?"

**Response capabilities:**
- Isolate endpoint from network
- Kill malicious processes
- Collect forensic data
- Remediate across multiple endpoints

**Example ransomware detection:**
EDR sees: Process spawned from email attachment → Disabled Volume Shadow Copy → Started encrypting files in Documents folder → Attempting to spread to network shares

AV: "File doesn't match known signatures" (no detection)
EDR: "Behavior pattern indicates ransomware" (detection + response)

**Recommendation:** EDR should be standard for enterprise endpoints, complementing (not replacing) AV.
</details>

**6. A switch port is configured with 802.1X but an unauthorized laptop connects and gains network access. What might have gone wrong?**

<details>
<summary>Show Answer</summary>
<strong>Several possible failures: MAB fallback, configuration errors, compromised credentials, or guest VLAN access.</strong>

**Possible causes:**

**MAC Authentication Bypass (MAB):**
- Port may be configured with MAB fallback
- If 802.1X times out, switches to MAC authentication
- Attacker's MAC might be in approved list (spoofed or stolen)
- Or MAB is configured too permissively

**Guest VLAN/Auth-fail VLAN:**
- Port may be configured to grant limited access on failure
- "Failed auth = guest network" instead of "failed auth = no access"
- Attacker accepts guest access and pivots from there

**Configuration errors:**
- Port might not actually have 802.1X enabled
- 802.1X might be in "monitor mode" (logs but doesn't block)
- VLAN assignment might give too much access

**Credential compromise:**
- Attacker has valid credentials (stolen, phished)
- Attacker has valid certificate (compromised CA)
- Legitimate authentication, unauthorized person

**RADIUS server issues:**
- RADIUS unreachable, switch fails open
- RADIUS misconfigured, approves all requests

**Investigation steps:**
1. Check switch port configuration (is 802.1X actually enabled?)
2. Review RADIUS logs (was authentication attempted? Result?)
3. Check for MAB fallback configuration
4. Verify fail-closed configuration (no auth = no access)
5. Check for auth-fail or guest VLAN settings
6. Audit approved MAC addresses if using MAB
7. Review for credential compromise if valid auth occurred

**Hardening:**
- Fail closed, not open
- Minimal or no guest VLAN
- Strict MAB whitelisting
- Monitor for authentication anomalies
</details>

**7. Compare host-based firewall and network-based firewall. Why use both?**

<details>
<summary>Show Answer</summary>
<strong>Defense in depth—network firewall protects perimeter; host-based firewall protects individual endpoints from lateral movement.</strong>

**Network-based firewall:**
- Positioned at network perimeter or segment boundaries
- Filters traffic between networks
- Centrally managed
- High performance
- Protects everything behind it
- Can't see traffic that doesn't cross it

**Host-based firewall:**
- Runs on individual endpoint
- Filters traffic to/from that host
- Distributed (each host has one)
- Lower performance impact per host
- Protects that specific host
- Works even off-network

**Why both?**

**Defense in depth:**
- If network firewall bypassed (insider, compromised internal host), host firewall still protects
- Multiple layers = attacker must bypass multiple controls

**Lateral movement protection:**
- Network firewall sees north-south traffic (in/out of network)
- Host firewall sees east-west traffic (between internal hosts)
- Ransomware spreading internally is stopped by host firewalls

**Off-network protection:**
- Laptop connected to coffee shop WiFi
- Network firewall isn't there
- Host firewall still protects

**Microsegmentation:**
- Host firewalls can enforce very granular policies
- "This web server only accepts connections from the load balancer"
- Network firewall can't be that specific without complexity

**Different traffic visibility:**
- Network firewall: "Server received connection on port 443"
- Host firewall: "Process nginx.exe received connection from load balancer on port 443"
- More context = better decisions

**Best practice:**
- Network firewall at perimeter and between segments
- Host firewall on all endpoints
- Centrally manage host firewall policies
- Both enabled, not either/or
</details>

**8. An organization allows any device to connect to their network. Why is this a problem, and what should they implement?**

<details>
<summary>Show Answer</summary>
<strong>Allows unauthorized and non-compliant devices access; implement NAC with 802.1X and posture assessment.</strong>

**Problems with allowing any device:**

**Unauthorized devices:**
- Personal devices with unknown security posture
- Attacker devices (just plug in and go)
- Rogue access points or network taps
- No visibility into what's on the network

**Non-compliant devices:**
- Unpatched systems with vulnerabilities
- No antivirus or disabled security
- Malware-infected devices connecting
- Misconfigured devices

**No access control:**
- All devices get same access
- Can't segment based on device type or trust
- Guest devices can reach sensitive resources

**Security gaps:**
- Lateral movement is trivial
- Single compromised device threatens everything
- No ability to quarantine or block

**What to implement:**

**802.1X authentication:**
- Requires authentication before network access
- Validates identity of user and/or device
- Unauthorized devices can't connect

**NAC posture assessment:**
- Check device compliance before access
- Verify patches, AV, configuration
- Quarantine non-compliant devices

**Network segmentation:**
- Assign VLANs based on authentication result
- Corporate devices → corporate VLAN
- Guest devices → guest VLAN (internet only)
- Non-compliant → remediation VLAN

**Device profiling:**
- Identify device types (printer, phone, laptop)
- Apply appropriate policies per device type
- Monitor for profile changes (indicators of spoofing)

**Implementation approach:**
1. Inventory current devices
2. Deploy 802.1X on one segment (pilot)
3. Define posture requirements
4. Configure VLANs for different access levels
5. Roll out to remaining network
6. Enable enforcement (start with monitor mode)
</details>

---

## Next Lesson Preview

**Lesson 17: Firewalls and Intrusion Prevention** dives deep into firewall technologies—packet filtering, stateful inspection, next-generation firewalls, and web application firewalls. You'll learn about IDS/IPS systems, how they detect threats, and where to deploy them in your network architecture.

---

✅ **LESSON 16 COMPLETE!**

You now understand how to build secure network infrastructure from the ground up. Network security isn't a single device or technology—it's the combination of hardened devices, access control, secure protocols, email/DNS security, and endpoint protection working together.

**Key concepts mastered:**
- Network device hardening principles
- 802.1X and NAC for access control
- Secure vs insecure protocols
- Email security (SPF, DKIM, DMARC)
- DNS security (DNSSEC, filtering, DoT/DoH)
- Endpoint security progression (AV → EDR → XDR)

---