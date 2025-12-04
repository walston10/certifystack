# Lab 42: Logical Security Concepts - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Principle of Least Privilege

**Definition:** Users should only have the minimum access rights and permissions necessary to perform their job functions.

**Why important:**
- Limits damage from compromised accounts
- Reduces accidental data exposure
- Minimizes insider threat risk
- Makes auditing easier
- Required for compliance (HIPAA, PCI-DSS)

**Example:** An accountant needs access to financial software and accounting folders, but not HR records, source code, or IT systems.

---

### Question 2: Authentication vs Authorization

| Concept | Definition | Example |
|---------|------------|---------|
| **Authentication** | Proving WHO you are | Logging in with username and password |
| **Authorization** | What you're ALLOWED to do | Access to specific folders after logging in |

**Order:** Authentication happens FIRST, then authorization determines access.

**Example flow:**
1. User enters credentials → Authentication (identity verified)
2. System checks permissions → Authorization (access granted/denied)

---

### Question 3: Multi-Factor Authentication

**Definition:** Using TWO OR MORE factors from DIFFERENT categories to verify identity.

| Category | What It Is | Examples |
|----------|------------|----------|
| Something you KNOW | Information only you know | Password, PIN, security question |
| Something you HAVE | Physical item you possess | Phone, token, smart card, security key |
| Something you ARE | Biometric characteristic | Fingerprint, face, retina, voice |

**True MFA requires different categories:**
- Password + SMS code = ✅ MFA (know + have)
- Password + security question = ❌ Not MFA (both "know")

---

### Question 4: Local vs Domain Account

| Feature | Local Account | Domain Account |
|---------|---------------|----------------|
| Stored | On local computer (SAM) | On Domain Controller (AD) |
| Works on | That computer only | Any domain-joined computer |
| Managed by | Local admin | Domain admin |
| Password policy | Local policy | Domain Group Policy |
| Single sign-on | No | Yes |
| Centralized | No | Yes |

---

### Question 5: Access Control List (ACL)

**Definition:** A list of permissions attached to an object (file, folder, registry key) that specifies which users/groups can access it and what operations they can perform.

**Where in Windows:**
- NTFS file/folder permissions (Security tab)
- Registry key permissions
- Printer permissions
- Share permissions
- Firewall rules
- Active Directory object permissions

---

## Section 2: Activities - Answers

### Activity A: Windows User Account Types

**Common built-in accounts:**

| Account | Purpose |
|---------|---------|
| Administrator | Built-in admin (disabled by default) |
| DefaultAccount | System account for UWP apps |
| Guest | Limited guest access (disabled) |
| WDAGUtilityAccount | Windows Defender Application Guard |
| Your username | Your personal account |

**Common groups:**

| Group | Purpose |
|-------|---------|
| Users | Standard user rights |
| Administrators | Full system control |
| INTERACTIVE | Logged on locally |
| Authenticated Users | Any authenticated account |
| Everyone | All users including guests |

---

### Activity B: Password Policy

**Default Windows settings (standalone):**

| Policy | Default | Recommended |
|--------|---------|-------------|
| Enforce password history | 0 | 24 passwords |
| Maximum password age | 42 days | 60-90 days |
| Minimum password age | 0 | 1 day |
| Minimum length | 0 | 12+ characters |
| Complexity | Disabled | Enabled |

**Account lockout defaults:**

| Policy | Default | Recommended |
|--------|---------|-------------|
| Lockout threshold | 0 (never) | 5 attempts |
| Lockout duration | N/A | 30 minutes |
| Reset counter after | N/A | 30 minutes |

**Windows Home:** Use `net accounts` command or Group Policy via registry edits. No secpol.msc available.

---

### Activity C: NTFS Permissions

**Permission definitions:**

| Permission | Allows |
|------------|--------|
| Full Control | Everything + change permissions + take ownership |
| Modify | Read, write, delete files (not change permissions) |
| Read & Execute | Open files, run programs, list folders |
| List folder contents | See folder contents only (folders only) |
| Read | View file contents and attributes |
| Write | Create files, append data, modify attributes |

**Inheritance:** Child objects automatically receive permissions from parent folder.

**Disable inheritance options:**
- Convert inherited to explicit (keeps current permissions)
- Remove all inherited (clears permissions)

---

### Activity D: User Account Control

**UAC Levels:**

| Level | Behavior |
|-------|----------|
| Always notify | Prompts for ALL changes (most secure) |
| Default | Prompts only for app changes (recommended) |
| Don't dim | Same as default but no secure desktop |
| Never notify | No prompts (least secure, not recommended) |

**UAC prompt colors:**

| Color | Meaning |
|-------|---------|
| Blue/Gray | Verified publisher (signed) |
| Yellow/Orange | Unknown/unverified publisher |
| Red | Blocked by administrator |

---

### Activity E: Windows Credential Manager

**What's stored:**

| Type | Contents |
|------|----------|
| Web Credentials | Website passwords from Edge/IE |
| Windows Credentials | Network passwords, RDP connections, mapped drives |

**Entry types:**
- Windows Credentials (network resources)
- Certificate-Based Credentials
- Generic Credentials (applications)

---

### Activity F: Authentication Methods

| Method | How It Works | Security | Use Case |
|--------|--------------|----------|----------|
| Password | User enters secret string | Medium | Universal fallback |
| PIN | Local numeric code | Medium-High | Quick unlock, TPM-backed |
| Windows Hello (face) | Facial recognition via camera | High | Convenient daily use |
| Windows Hello (fingerprint) | Fingerprint scan | High | Quick, reliable |
| Picture password | Gestures on image | Low-Medium | Touch devices |
| Security key (FIDO2) | USB/NFC hardware token | Very High | High-security needs |
| Smart card | Certificate on chip card | Very High | Enterprise/government |

**MFA combinations:**

| Scenario | Factor 1 | Factor 2 | Strong? |
|----------|----------|----------|---------|
| Password + SMS | Know | Have | Medium (SMS vulnerable) |
| Password + app | Know | Have | Strong |
| Badge + fingerprint | Have | Are | Very Strong |
| PIN + security question | Know | Know | ❌ Not MFA |

---

### Activity G: Workgroup vs Domain

| Feature | Workgroup | Domain |
|---------|-----------|--------|
| Account storage | Local SAM database | Active Directory |
| Single sign-on | No | Yes |
| Centralized management | No | Yes |
| Password policies | Local per computer | Domain-wide GPO |
| Maximum computers | ~20 practical | Unlimited |
| Server required | No | Yes (Domain Controller) |
| Group Policy | Local only | Full GPO |
| Best for | Home, tiny office | Business, enterprise |

---

## Section 3: Reflection - Answers

### Scenario 1: Accidental HR Access

**Principle violated:** Least Privilege

**What happened:** Access was granted too broadly, likely by adding user to a group with excessive permissions or misconfiguring folder permissions.

**Correct approach:**
1. Create role-based groups (Marketing, HR, Finance)
2. Assign folder permissions to groups, not individuals
3. Add employees only to their department group
4. Regular access reviews
5. Remove/audit the accidental access immediately

---

### Scenario 2: Compromised Despite Strong Password

**What happened (likely causes):**
- Password reused on another breached site
- Phishing attack captured password
- Keylogger malware
- Credential stuffing attack
- Social engineering

**Recommendations:**
1. Implement MFA immediately
2. Use unique passwords per site
3. Deploy password manager
4. Security awareness training
5. Monitor for suspicious login activity
6. Enable account compromise detection

---

### Scenario 3: Account Lockout

**Possible causes:**
- Caps Lock on
- Cached password on another device
- Mobile phone with old password
- Scheduled task with old credentials
- Mapped drive with saved credentials
- Service running as that user
- Actual attack (brute force)

**Next steps:**
1. Check Event Viewer for lockout source
2. Check all user's devices for cached credentials
3. Look for services/tasks running as user
4. Check Credential Manager on all devices
5. If suspicious, investigate as security incident
6. Reset password after identifying cause

---

### Scenario 4: Disabled Account Re-enabled

**Security risks:**
- Former employee access restored
- No audit trail of who re-enabled
- Potentially malicious access using "legitimate" account
- May bypass terminated employee monitoring
- Access to old permissions/data

**Best practices:**
- Disabled accounts should be deleted after retention period
- Never re-enable terminated employee accounts
- Create new accounts for testing purposes
- Log all account enable/disable actions
- Regular review of disabled accounts
- Move disabled accounts to separate OU with restricted access

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    LOGICAL SECURITY QUICK REFERENCE                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  AUTHENTICATION FACTORS                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Something you KNOW: Password, PIN, security questions                    ║
║  Something you HAVE: Phone, token, smart card, security key               ║
║  Something you ARE:  Fingerprint, face, retina, voice                     ║
║  MFA = 2+ factors from DIFFERENT categories                               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  NTFS PERMISSIONS                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Full Control → Read, write, modify, delete, change permissions           ║
║  Modify       → Read, write, modify, delete (not change permissions)      ║
║  Read & Execute → Open files, run programs                                ║
║  Read         → View contents only                                        ║
║  Write        → Create new files/folders                                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  USER ACCOUNT TYPES                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Administrator → Full system control, UAC prompts                         ║
║  Standard      → Limited rights, needs admin for system changes           ║
║  Guest         → Very limited, disabled by default                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SECURITY PRINCIPLES                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Least Privilege   → Only access needed to do job                         ║
║  Separation of Duties → No one person controls entire process             ║
║  Defense in Depth  → Multiple layers of security                          ║
║  Need to Know      → Access only to required information                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  net user           → List local users                                    ║
║  net localgroup     → List local groups                                   ║
║  whoami /groups     → Show current user's group membership                ║
║  lusrmgr.msc        → Local Users and Groups snap-in                      ║
║  secpol.msc         → Local Security Policy                               ║
╚═══════════════════════════════════════════════════════════════════════════╝
```