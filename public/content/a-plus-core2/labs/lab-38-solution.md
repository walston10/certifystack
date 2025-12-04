# Lab 38: macOS and Linux Basics - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: macOS Equivalents

| Windows | macOS |
|---------|-------|
| File Explorer | **Finder** |
| Control Panel | **System Preferences** (Ventura and earlier) or **System Settings** (Sonoma+) |

---

### Question 2: sudo

**What sudo does:** Runs a command with superuser (root) privileges. Stands for "superuser do."

**Why it's important:**
- Linux restricts administrative tasks to the root user
- Regular users can't modify system files, install software, or change configurations
- sudo provides temporary root access for specific commands
- Better security than logging in as root (audit trail, limited scope)

---

### Question 3: Linux Distributions

| Distribution | Based On | Known For |
|--------------|----------|-----------|
| **Ubuntu** | Debian | User-friendly, desktop use, large community |
| **Fedora** | Red Hat | Cutting-edge features, developers |
| **CentOS/Rocky/Alma** | Red Hat | Enterprise servers, stability |
| **Debian** | Original | Stability, free software principles |
| **Arch Linux** | Original | Rolling release, customization, advanced users |
| **Linux Mint** | Ubuntu | Windows-like experience, beginners |

**Key differences:** Package managers, release cycles, target audiences, included software, community support.

---

### Question 4: macOS Keychain

**Keychain:** macOS password and credential manager that securely stores:
- Website passwords
- Application passwords
- Wi-Fi passwords
- Certificates
- Encryption keys

**Windows equivalent:** **Credential Manager** (Control Panel → User Accounts → Credential Manager)

---

### Question 5: Permission Format "rwxr-xr--"

| Position | Characters | Who | Can Do |
|----------|------------|-----|--------|
| 1-3 | rwx | Owner | Read, Write, Execute |
| 4-6 | r-x | Group | Read, Execute (no write) |
| 7-9 | r-- | Others | Read only |

**Numeric:** 754

---

## Section 2: Activities - Answers

### Activity A: Windows vs macOS

| Windows | macOS Equivalent | Purpose |
|---------|------------------|---------|
| File Explorer | Finder | File management |
| Control Panel | System Preferences/Settings | System configuration |
| Task Manager | Activity Monitor | Process/resource monitoring |
| Command Prompt | Terminal | Command line |
| Recycle Bin | Trash | Deleted files |
| Taskbar | Dock | Application launcher |
| Start Menu | Launchpad / Apple Menu | Application access |
| .exe files | .app bundles, .dmg installers | Applications |
| C:\Users\username | /Users/username | User home folder |
| Registry | Property lists (.plist) | Configuration storage |
| BitLocker | FileVault | Full disk encryption |
| Windows Defender | XProtect (built-in) | Malware protection |
| Windows Update | Software Update | System updates |
| System Restore | Time Machine | System backup/restore |

---

### Activity B: macOS Features

| Feature | What It Does | How to Access |
|---------|--------------|---------------|
| Finder | File manager, browse files/folders | Click Finder icon in Dock, Cmd+N |
| Dock | Quick launch apps, show running apps | Bottom/side of screen |
| Spotlight | Search files, apps, web, calculations | Cmd + Space |
| Mission Control | View all windows, desktops, full-screen apps | Ctrl + Up, or three-finger swipe up |
| System Preferences | Configure system settings | Apple menu → System Preferences |
| Time Machine | Automatic backup and restore | System Preferences → Time Machine |
| Keychain Access | Password manager | Applications → Utilities → Keychain Access |
| Terminal | Command line interface | Applications → Utilities → Terminal |
| Disk Utility | Disk management, repair, format | Applications → Utilities → Disk Utility |
| FileVault | Full disk encryption | System Preferences → Security & Privacy |
| Boot Camp | Run Windows on Mac | Applications → Utilities → Boot Camp Assistant |
| Apple ID/iCloud | Account and cloud sync | System Preferences → Apple ID |

---

### Activity C: Linux Commands

| Command | Purpose | Example |
|---------|---------|---------|
| pwd | Print working directory | Shows /home/user |
| ls | List directory contents | Lists files |
| ls -la | List all with details | Shows hidden files, permissions |
| cd | Change directory | cd /etc |
| cd ~ | Go to home directory | Goes to /home/username |
| cd .. | Go up one level | Parent directory |
| mkdir | Create directory | mkdir newfolder |
| rmdir | Remove empty directory | rmdir oldfolder |
| rm | Remove file | rm file.txt |
| rm -rf | Remove recursively (force) | rm -rf directory |
| cp | Copy files | cp file1 file2 |
| mv | Move or rename | mv old.txt new.txt |
| cat | Display file contents | cat file.txt |
| touch | Create empty file | touch newfile.txt |

**Windows equivalents:**

| Linux | Windows |
|-------|---------|
| ls | dir |
| pwd | cd (alone) |
| cd | cd |
| mkdir | mkdir / md |
| rm | del |
| cp | copy |
| mv | move / ren |
| cat | type |
| clear | cls |
| man | help or /? |

---

### Activity D: Linux File Permissions

**Permission values:**

| Symbol | Meaning | Numeric |
|--------|---------|---------|
| r | Read | 4 |
| w | Write | 2 |
| x | Execute | 1 |
| - | No permission | 0 |

**Permission groups:**

| Position | Who |
|----------|-----|
| 1-3 | Owner (user) |
| 4-6 | Group |
| 7-9 | Others (everyone else) |

**Permission decoding:**

| Permission | Owner | Group | Others | Numeric |
|------------|-------|-------|--------|---------|
| rwxr-xr-- | Read, Write, Execute | Read, Execute | Read | 754 |
| rw-rw-r-- | Read, Write | Read, Write | Read | 664 |
| rwx------ | Read, Write, Execute | None | None | 700 |
| rwxrwxrwx | Full | Full | Full | 777 |

**chmod commands:**

| Goal | Command |
|------|---------|
| Owner full, others read-only | chmod 744 file |
| Executable for everyone | chmod +x file or chmod 755 file |
| Remove group write | chmod g-w file |
| Set to 755 | chmod 755 file |

---

### Activity E: Linux Package Management

| Distro Family | Package Manager | Install | Update |
|---------------|-----------------|---------|--------|
| Debian/Ubuntu | apt (or apt-get) | apt install pkg | apt update && apt upgrade |
| Red Hat/Fedora | yum or dnf | yum install pkg | yum update |
| Arch | pacman | pacman -S pkg | pacman -Syu |

**Common operations:**

| Action | apt | yum/dnf |
|--------|-----|---------|
| Update package list | apt update | yum check-update |
| Upgrade packages | apt upgrade | yum update |
| Install package | apt install nginx | yum install nginx |
| Remove package | apt remove nginx | yum remove nginx |
| Search | apt search nginx | yum search nginx |

---

### Activity F: Linux Directory Structure

| Directory | Purpose | Windows Equivalent |
|-----------|---------|-------------------|
| / | Root of filesystem | C:\ |
| /home | User home directories | C:\Users |
| /root | Root user's home | C:\Users\Administrator |
| /etc | Configuration files | Registry + C:\Windows |
| /var | Variable data, logs | C:\Windows\Logs, C:\ProgramData |
| /tmp | Temporary files | C:\Windows\Temp |
| /bin | Essential user binaries | C:\Windows\System32 |
| /sbin | System binaries | C:\Windows\System32 |
| /usr | User programs | C:\Program Files |
| /opt | Optional software | C:\Program Files |
| /dev | Device files | Device Manager |
| /mnt | Temporary mount point | Drive letters |
| /media | Removable media | Drive letters (USB, CD) |

---

## Section 3: Reflection - Answers

### Scenario 1: Mac "My Documents"

**Location:** /Users/[username]/Documents

**In Finder:**
- Click Finder in Dock
- In sidebar, click user's home folder or Documents
- Or use Go menu → Documents (Shift + Cmd + O)

**Path:** /Users/username/Documents (or ~/Documents)

---

### Scenario 2: Linux Permission (rwxr-xr-x = 755)

**Goal:** Owner: read, write, execute | Group: read, execute | Others: read, execute

**Command:** `chmod 755 filename`

Or symbolically: `chmod u=rwx,go=rx filename`

**Verification:** `ls -l filename` should show: -rwxr-xr-x

---

### Scenario 3: Install Node.js

**Ubuntu:**
```bash
sudo apt update
sudo apt install nodejs npm
# OR using NodeSource for latest version:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs
```

**Mac:**
```bash
# Using Homebrew (most common)
brew install node

# Or download from nodejs.org
```

---

### Scenario 4: FileVault Password Lost

**Options (none are great):**

1. **Use Recovery Key** - If they saved the 24-character recovery key anywhere, it can unlock the disk

2. **iCloud Recovery** - If they enabled "Allow my iCloud account to unlock my disk" during FileVault setup, they can reset via iCloud

3. **Contact Apple** - If linked to Apple ID, Apple may be able to help through account recovery

4. **If no recovery key and no iCloud:** Data is **unrecoverable**. FileVault encryption is strong; without the password or recovery key, the data is permanently inaccessible.

**Prevention lesson:** Always save recovery key in a secure location!

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