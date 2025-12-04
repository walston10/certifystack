# Lab 42: Logical Security Concepts

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 2.2 - Compare and contrast common prevention methods

---

## Section 1: Concept Check (5 min)

1. What is the principle of least privilege, and why is it important for security?

2. Explain the difference between authentication and authorization. Give an example of each.

3. What is multi-factor authentication (MFA)? List the three factor categories and give an example of each.

4. What is the difference between a local user account and a domain user account?

5. What is an Access Control List (ACL), and where would you encounter one in Windows?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Windows User Account Types

**Goal:** Understand user account types and privileges.

**Step 1:** View local users

Open `lusrmgr.msc` (Windows Pro/Enterprise only) or Settings → Accounts

If using Settings:

| Your Account | Value |
|--------------|-------|
| Account name | |
| Account type | Administrator / Standard |
| Sign-in method | Password / PIN / Windows Hello |
| Microsoft account linked? | |

**Step 2:** Via command line

Open Command Prompt:
```cmd
net user
```

List all users on your system:

| Username | Status |
|----------|--------|
| | |
| | |
| | |

**Step 3:** Check your account's groups

```cmd
whoami /groups
```

List 5 groups your account belongs to:

1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

---

#### Activity B: Password Policy Exploration

**Goal:** Understand Windows password policies.

**Step 1:** Access Local Security Policy (Pro/Enterprise)

Open `secpol.msc` → Account Policies → Password Policy

| Policy | Setting |
|--------|---------|
| Enforce password history | |
| Maximum password age | |
| Minimum password age | |
| Minimum password length | |
| Password complexity | |

**Step 2:** Account Lockout Policy

Navigate to: Account Policies → Account Lockout Policy

| Policy | Setting |
|--------|---------|
| Account lockout threshold | |
| Account lockout duration | |
| Reset account lockout counter after | |

**Step 3:** If you can't access secpol.msc (Home edition)

What tool would administrators use to set password policies on Windows Home? _______________

---

#### Activity C: NTFS Permissions

**Goal:** Understand file and folder permissions.

**Step 1:** Create a test folder

Create folder: `C:\SecurityLab`

Right-click → Properties → Security tab

**Document current permissions:**

| User/Group | Permissions |
|------------|-------------|
| | |
| | |
| | |
| | |

**Step 2:** Permission types

Define each permission level:

| Permission | What It Allows |
|------------|----------------|
| Full Control | |
| Modify | |
| Read & Execute | |
| List folder contents | |
| Read | |
| Write | |

**Step 3:** Inheritance

Click Advanced on Security tab

| Property | Value |
|----------|-------|
| Inheritance enabled? | |
| Inherited from | |

What does "Disable inheritance" do? _______________

---

#### Activity D: User Account Control (UAC)

**Goal:** Understand UAC protection levels.

**Step 1:** Check UAC settings

Open Control Panel → User Accounts → Change User Account Control settings

| Level | Description |
|-------|-------------|
| Your current setting | |

**Document the 4 UAC levels:**

| Level | When It Notifies |
|-------|------------------|
| Always notify | |
| Notify only when apps try to make changes (default) | |
| Notify only when apps try (don't dim desktop) | |
| Never notify | |

**Step 2:** UAC prompts

What color is a UAC prompt from a verified publisher? _______________

What color indicates an unverified/unknown publisher? _______________

---

#### Activity E: Windows Credential Manager

**Goal:** Explore Windows credential storage.

**Step 1:** Access Credential Manager

Control Panel → User Accounts → Credential Manager

(Or search "Credential Manager")

| Credential Type | Count |
|-----------------|-------|
| Web Credentials | |
| Windows Credentials | |

**Step 2:** Windows Credentials

List the types of entries you see:

| Entry Type | Example |
|------------|---------|
| | |
| | |
| | |

**What is stored here?**
- _______________
- _______________
- _______________

---

#### Activity F: Authentication Methods Comparison

**Goal:** Understand different authentication approaches.

**Complete the comparison:**

| Method | How It Works | Security Level | Use Case |
|--------|--------------|----------------|----------|
| Password only | | | |
| PIN | | | |
| Windows Hello (face) | | | |
| Windows Hello (fingerprint) | | | |
| Picture password | | | |
| Security key (FIDO2) | | | |
| Smart card | | | |

**MFA combinations:**

| Scenario | Factor 1 | Factor 2 | Strong? |
|----------|----------|----------|---------|
| Password + SMS code | | | |
| Password + authenticator app | | | |
| Badge + fingerprint | | | |
| PIN + security question | | | |

---

#### Activity G: Workgroup vs Domain Authentication

**Goal:** Understand centralized vs local authentication.

**Complete the comparison:**

| Feature | Workgroup | Domain |
|---------|-----------|--------|
| Account storage | | |
| Single sign-on | | |
| Centralized management | | |
| Password policies | | |
| Maximum computers | | |
| Server required | | |
| Group Policy | | |
| Best for | | |

**Your system:**

Check: `sysdm.cpl`

| Property | Your Value |
|----------|------------|
| Member of | Workgroup / Domain |
| Name | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A new employee needs access to their department's shared folder but accidentally gets access to the HR folder with salary information. What principle was violated, and how should access be structured?

**Scenario 2:** A company uses only passwords for authentication. An executive's email account is compromised despite having a "strong" password. What happened, and what would you recommend?

**Scenario 3:** A user is locked out of their account after too many failed password attempts. They insist they typed the password correctly. What could have happened, and what are the next steps?

**Scenario 4:** An employee leaves the company, but their Active Directory account is only disabled, not deleted. Three months later, the account is re-enabled by someone in IT "for testing." Why is this a security risk?

---

## What You Learned Today

- ✅ User account types (Standard, Administrator)
- ✅ Password policies and account lockout
- ✅ NTFS permissions and inheritance
- ✅ User Account Control (UAC) levels
- ✅ Windows Credential Manager
- ✅ Authentication methods (password, PIN, biometric, MFA)
- ✅ Workgroup vs Domain authentication
- ✅ Principle of least privilege

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