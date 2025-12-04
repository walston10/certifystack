# Lab 38: macOS and Linux Basics

**Tier:** 1 & 2  
**Time:** 35-45 minutes  
**Exam Objectives:** 1.8 - Given a scenario, use macOS features and tools / 1.9 - Given a scenario, use Linux features and tools

---

## Section 1: Concept Check (5 min)

1. What is the macOS equivalent of Windows File Explorer? What about the Windows Control Panel?

2. In Linux, what does the `sudo` command do, and why is it important?

3. What are three common Linux distributions, and what makes them different from each other?

4. What is the macOS Keychain, and what Windows feature serves a similar purpose?

5. Explain the Linux file permission format "rwxr-xr--" - what do these letters mean and who do they apply to?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Conceptual learning** - Uses comparison tables and research. Works on any computer.

#### Activity A: Windows vs macOS Comparison

**Goal:** Map Windows concepts to macOS equivalents.

Complete this comparison table:

| Windows | macOS Equivalent | Purpose |
|---------|------------------|---------|
| File Explorer | | |
| Control Panel | | |
| Task Manager | | |
| Command Prompt | | |
| Recycle Bin | | |
| Taskbar | | |
| Start Menu | | |
| .exe files | | |
| C:\Users\username | | |
| Registry | | |
| BitLocker | | |
| Windows Defender | | |
| Windows Update | | |
| System Restore | | |

---

#### Activity B: macOS Feature Knowledge

**Goal:** Understand key macOS features for the A+ exam.

**Research and document each feature:**

| Feature | What It Does | How to Access |
|---------|--------------|---------------|
| Finder | | |
| Dock | | |
| Spotlight | | |
| Mission Control | | |
| System Preferences/Settings | | |
| Time Machine | | |
| Keychain Access | | |
| Terminal | | |
| Disk Utility | | |
| FileVault | | |
| Boot Camp | | |
| Apple ID/iCloud | | |

---

#### Activity C: Linux Command Fundamentals

**Goal:** Understand essential Linux commands.

**Navigation and file commands:**

| Command | Purpose | Example |
|---------|---------|---------|
| pwd | | |
| ls | | |
| ls -la | | |
| cd | | |
| cd ~ | | |
| cd .. | | |
| mkdir | | |
| rmdir | | |
| rm | | |
| rm -rf | | |
| cp | | |
| mv | | |
| cat | | |
| touch | | |

**Compare to Windows equivalents:**

| Linux Command | Windows Command |
|---------------|-----------------|
| ls | |
| pwd | |
| cd | |
| mkdir | |
| rm | |
| cp | |
| mv | |
| cat | |
| clear | |
| man | |

---

#### Activity D: Linux File Permissions

**Goal:** Understand the Linux permission system.

**Permission breakdown:**

| Symbol | Meaning | Numeric Value |
|--------|---------|---------------|
| r | | |
| w | | |
| x | | |
| - | | |

**Permission groups (in order):**

| Position | Who It Applies To |
|----------|-------------------|
| 1-3 | |
| 4-6 | |
| 7-9 | |

**Decode these permissions:**

| Permission String | Owner Can | Group Can | Others Can | Numeric |
|-------------------|-----------|-----------|------------|---------|
| rwxr-xr-- | | | | |
| rw-rw-r-- | | | | |
| rwx------ | | | | |
| rwxrwxrwx | | | | |

**chmod practice (conceptual):**

| Goal | chmod Command |
|------|---------------|
| Give owner full access, others read-only | |
| Make file executable for everyone | |
| Remove write permission for group | |
| Set permissions to 755 | |

---

#### Activity E: Linux Package Management

**Goal:** Understand different package managers.

**Package manager comparison:**

| Distro Family | Package Manager | Install Command | Update Command |
|---------------|-----------------|-----------------|----------------|
| Debian/Ubuntu | | | |
| Red Hat/Fedora/CentOS | | | |
| Arch | | | |

**Common package operations:**

| Action | apt (Debian/Ubuntu) | yum/dnf (Red Hat) |
|--------|---------------------|-------------------|
| Update package list | | |
| Upgrade all packages | | |
| Install package | | |
| Remove package | | |
| Search for package | | |

---

#### Activity F: Linux Directory Structure

**Goal:** Understand the Linux filesystem hierarchy.

**Document the purpose of each directory:**

| Directory | Purpose | Windows Equivalent |
|-----------|---------|-------------------|
| / | | |
| /home | | |
| /root | | |
| /etc | | |
| /var | | |
| /tmp | | |
| /bin | | |
| /sbin | | |
| /usr | | |
| /opt | | |
| /dev | | |
| /mnt | | |
| /media | | |

---

### Tier 2 Activities (Optional)
> ⚠️ **Requires macOS or Linux system** - Use a VM, dual-boot, or WSL

#### Activity G: Hands-On Linux Commands (WSL or VM)

**If you have Windows with WSL installed:**

Open WSL (Ubuntu or other distro)

**Execute these commands and document results:**

| Command | Your Output |
|---------|-------------|
| `pwd` | |
| `whoami` | |
| `ls -la /home` | |
| `cat /etc/os-release` | |
| `uname -a` | |
| `df -h` | |
| `free -h` | |

**Create a test file:**

```bash
touch testfile.txt
echo "Hello Linux" > testfile.txt
cat testfile.txt
ls -l testfile.txt
chmod 755 testfile.txt
ls -l testfile.txt
rm testfile.txt
```

Document permission change: From ___________ to ___________

---

#### Activity H: macOS Exploration (Mac required)

**If you have access to a Mac:**

| Task | Key Combination or Location |
|------|----------------------------|
| Open Spotlight | |
| Open Finder | |
| Force Quit Applications | |
| Take screenshot | |
| Access Mission Control | |
| Open Terminal | |
| Access System Preferences | |

**Terminal commands to try:**

| Command | Output |
|---------|--------|
| `sw_vers` | |
| `whoami` | |
| `pwd` | |
| `ls -la ~` | |
| `system_profiler SPHardwareDataType` | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A user with a Mac needs help finding their equivalent of "My Documents." Where would you direct them, and what is the path?

**Scenario 2:** A Linux server admin needs to give a file read and execute permissions to everyone, but write permission only to the owner. What chmod command would accomplish this?

**Scenario 3:** A developer needs to install Node.js on their Ubuntu system. What commands would they use? What about on a Mac?

**Scenario 4:** A user encrypted their Mac with FileVault but forgot their password. They don't have their recovery key. What options do they have to recover their data?

---

## What You Learned Today

- ✅ Windows to macOS feature mapping
- ✅ Key macOS features (Finder, Spotlight, Time Machine, FileVault, Keychain)
- ✅ Essential Linux commands (navigation, file operations)
- ✅ Linux file permissions (rwx, chmod, numeric permissions)
- ✅ Linux package managers (apt, yum/dnf)
- ✅ Linux filesystem hierarchy
- ✅ Terminal/command line basics for both platforms

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    macOS & LINUX QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  MACOS FEATURES                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Finder        → File manager (like File Explorer)                        ║
║  Spotlight     → Search (Cmd + Space)                                     ║
║  Dock          → Application launcher (like Taskbar)                      ║
║  Mission Control → Window/desktop overview                                ║
║  Time Machine  → Backup solution (like System Restore + File History)     ║
║  FileVault     → Full disk encryption (like BitLocker)                    ║
║  Keychain      → Password manager (like Credential Manager)               ║
║  Terminal      → Command line (like Command Prompt)                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  LINUX ESSENTIAL COMMANDS                                                  ║
║  ─────────────────────────────────────────────────────────────────────────║
║  pwd    → Print working directory      cd     → Change directory          ║
║  ls     → List files                   ls -la → List all with details     ║
║  mkdir  → Make directory               rmdir  → Remove empty directory    ║
║  rm     → Remove file                  rm -rf → Remove recursively        ║
║  cp     → Copy                         mv     → Move/rename               ║
║  cat    → Display file contents        sudo   → Run as superuser          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  LINUX PERMISSIONS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  r = read (4)  │  w = write (2)  │  x = execute (1)                       ║
║  Owner │ Group │ Others  →  rwxr-xr-- = 754                               ║
║  chmod 755 file → rwxr-xr-x    chmod 644 file → rw-r--r--                 ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  LINUX PACKAGE MANAGERS                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Debian/Ubuntu: apt update, apt install <pkg>, apt remove <pkg>           ║
║  Red Hat/Fedora: yum/dnf update, yum install <pkg>, yum remove <pkg>      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY DIRECTORIES                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  /          → Root (like C:\)          /home      → User folders          ║
║  /etc       → Config files             /var       → Variable data/logs    ║
║  /bin,/sbin → System programs          /tmp       → Temporary files       ║
╚═══════════════════════════════════════════════════════════════════════════╝
```