# Lesson 38: macOS and Linux Basics

**Estimated Time:** 25-30 minutes  
**Domain:** Operating Systems (Domain 1.0 - 31% of exam)  
**Exam Objectives Covered:** 1.8 - Explain common OS types and their purposes; 1.9 - Given a scenario, perform OS installations and upgrades in a diverse OS environment

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Navigate macOS Finder and understand its file system structure
- Configure system settings using System Preferences/System Settings
- Use Time Machine for automated backups
- Manage passwords and certificates with Keychain
- Execute basic commands in macOS Terminal
- Identify major Linux distributions and their use cases
- Navigate the Linux file system hierarchy
- Execute essential Linux shell commands
- Understand and modify Linux file permissions
- Use package managers (apt, yum) to install and update software
- Recognize key differences between Windows, macOS, and Linux operating systems

---

## Video Resources

Before diving in, check out these excellent video tutorials:

1. **Professor Messer - "macOS Features"** (CompTIA A+ 220-1102)  
   [https://www.professormesser.com](https://www.professormesser.com) - macOS essentials for IT professionals

2. **Professor Messer - "Linux Features"** (CompTIA A+ 220-1102)  
   [https://www.professormesser.com](https://www.professormesser.com) - Linux fundamentals

3. **NetworkChuck - "you need to learn Linux RIGHT NOW!!"**  
   [https://www.youtube.com/c/NetworkChuck](https://www.youtube.com/c/NetworkChuck) - Engaging introduction to Linux

4. **Snazzy Labs - "Mac Tips for Windows Users"**  
   [https://www.youtube.com/c/snazzy](https://www.youtube.com/c/snazzy) - Transitioning from Windows to Mac

---

## Introduction

Jessica walks into her new job as IT support specialist. Day one, minute one, a designer approaches her desk. "My Mac won't connect to the printer," she says, gesturing to a sleek MacBook Pro. Jessica's heart sinks. She's spent five years mastering Windows—Group Policy, Active Directory, PowerShell, registry editing. She knows Windows inside and out.

But this? This isn't Windows.

No Start menu. No C: drive. No Control Panel. The keyboard doesn't even have a Windows key—it says "Command" instead. She clicks around cautiously, afraid to break something, feeling like a beginner again.

By week two, she's supporting 50 Mac users confidently. By month three, the IT manager asks her to set up a Linux server for development team testing. "Linux?" she thinks. "I just learned Mac!" But she dives in, discovers it's not as scary as it seems, and realizes something important: **operating systems are more similar than different.**

They all have file systems. They all have terminals. They all need user accounts, permissions, backups, and updates. Once you understand the concepts, learning new systems is just translating vocabulary—"Finder" instead of "File Explorer," `ls` instead of `dir`, "Keychain" instead of "Credential Manager."

In this lesson, you'll gain the cross-platform knowledge that makes you valuable in mixed-OS environments. You won't become a Mac or Linux expert in 30 minutes, but you'll understand enough to navigate confidently, support basic user issues, and know where to find help when you need it. Whether you're helping designers with Macs, developers with Linux workstations, or managing servers running Ubuntu, you'll speak the language.

Let's expand your world beyond Windows.

---

## macOS: The Apple Experience

macOS (formerly Mac OS X) is Apple's operating system for Mac computers—iMacs, MacBooks, Mac minis, and Mac Pro workstations. It's built on Unix foundations, giving it stability and security while maintaining Apple's signature user-friendly interface.

### macOS Versions and Naming

Apple names macOS versions after California landmarks (until running out, then switching to general locations):

- **macOS 10.14** - Mojave (2018)
- **macOS 10.15** - Catalina (2019)
- **macOS 11** - Big Sur (2020) - Major version jump
- **macOS 12** - Monterey (2021)
- **macOS 13** - Ventura (2022)
- **macOS 14** - Sonoma (2023)
- **macOS 15** - Sequoia (2024)

**Why this matters:** Features and interfaces change between versions. Always check which macOS version a user is running: **Apple menu () → About This Mac**

### The Desktop: Dock, Menu Bar, and Finder

**The Dock** (bottom of screen by default):
- Quick access to frequently used applications
- Shows running applications (dot indicator beneath icon)
- Trash/Recycle Bin equivalent is on the right end
- Drag files to Dock icons to open them with that app
- Customize: Right-click Dock divider → Dock Preferences

**The Menu Bar** (top of screen):
- Apple menu () - System-level options (About, Sleep, Restart, Shutdown)
- Application menus - Change based on active application
- Status icons (Wi-Fi, battery, time, etc.) on right side
- Always visible, always accessible

**Key difference from Windows:** The menu bar is at the TOP of the screen, separate from application windows. In Windows, each window has its own menu bar.

### Finder: macOS File Manager

Finder is macOS's equivalent to Windows File Explorer. It's your gateway to files, folders, and storage.

**Opening Finder:**
- Click the smiling face icon in Dock (leftmost icon)
- Or press Command + Spacebar → type "Finder" → Enter

**Finder window sections:**

**Sidebar (left):**
- **Favorites** - Quick access locations (Documents, Downloads, Applications)
- **iCloud** - Cloud storage files
- **Locations** - Connected drives and network shares
- **Tags** - Color-coded file organization system

**Main area (center):**
- Files and folders in selected location
- View options: Icon, List, Column, Gallery view

**No concept of drive letters** (no C:, D:, E:). Storage appears as:
- **Macintosh HD** - Main system drive (equivalent to C:)
- **External drives** - Show as separate icons (named by volume label)
- **Network shares** - Appear under "Locations" when connected

### macOS File System Structure

Unlike Windows's drive letters, macOS uses a Unix-style hierarchy starting from root (`/`):

**Key directories:**
- `/` - Root (top level)
- `/Applications` - Installed applications (like C:\Program Files)
- `/Users` - User home folders (like C:\Users)
  - `/Users/username/Desktop` - User's desktop files
  - `/Users/username/Documents` - User's documents
  - `/Users/username/Downloads` - Downloaded files
- `/Library` - System-wide settings and support files
- `/System` - macOS system files (don't modify!)
- `/Volumes` - Mounted drives and network shares

**Shortcut symbols:**
- `~` (tilde) - Current user's home folder (`/Users/username`)
- `/` (forward slash) - Root directory

**Example paths:**
- `~/Documents/report.docx` = `/Users/jessica/Documents/report.docx`
- `~/Desktop` = `/Users/jessica/Desktop`

🎯 **Exam Tip:** Know that macOS doesn't use drive letters—it uses Unix-style paths starting from root (`/`). This is fundamental to supporting Mac users.

### Spotlight Search: Universal Finder

**Spotlight** is macOS's powerful system-wide search—like Windows Search but faster and more comprehensive.

**Opening Spotlight:**
- Press **Command + Spacebar** (most common method)
- Or click magnifying glass in menu bar (top right)

**What Spotlight searches:**
- Files and folders
- Applications (type app name to launch)
- System preferences
- Emails
- Calendar events
- Contacts
- Math calculations (type "45*23" → instant result)
- Unit conversions (type "50 USD to EUR")
- Dictionary definitions
- Web searches

**Using Spotlight:**
1. Press Command + Spacebar
2. Start typing what you're looking for
3. Results appear instantly as you type
4. Arrow keys to navigate results
5. Enter to open selected item

**Example uses:**
- Launch applications: Command + Space → type "Safari" → Enter
- Find files: Command + Space → type "budget 2024" → Enter
- Quick calculations: Command + Space → type "1024/8" → shows "128"

Think of Spotlight as the Swiss Army knife of Mac navigation—IT professionals use it constantly instead of clicking through menus.

---

## System Preferences / System Settings

**System Preferences** (macOS Monterey and earlier) or **System Settings** (macOS Ventura and later) is the macOS equivalent of Windows Control Panel and Settings.

**Opening System Preferences/Settings:**
- Apple menu () → System Preferences/System Settings
- Or Spotlight: Command + Space → type "System" → Enter
- Or click gear icon in Dock (if pinned)

### Key Configuration Areas

**General:**
- Appearance (Light, Dark, Auto)
- Accent colors
- Sidebar icon size
- Scroll bar appearance

**Desktop & Screen Saver:**
- Wallpaper selection
- Screen saver settings
- Hot corners (screen corner actions)

**Dock & Menu Bar:**
- Dock size, position, magnification
- Auto-hide Dock
- Menu bar icon visibility

**Displays:**
- Resolution and scaling
- Multiple display arrangement
- Night Shift (blue light reduction)

**Network:**
- Wi-Fi configuration
- Ethernet settings
- VPN setup
- Proxy configuration

**Users & Groups:**
- User account management
- Login items (startup programs)
- Guest user settings

**Security & Privacy:**
- FileVault (disk encryption)
- Firewall settings
- Privacy permissions (which apps can access location, camera, microphone, etc.)

**Sharing:**
- File Sharing (equivalent to Windows file sharing)
- Screen Sharing (VNC-based remote desktop)
- Printer Sharing
- Remote Login (SSH access)

**Time Machine:**
- Backup configuration
- Backup disk selection
- Schedule settings

### FileVault: Full Disk Encryption

FileVault is macOS's built-in disk encryption—equivalent to Windows BitLocker.

**Enabling FileVault:**
1. System Preferences → Security & Privacy
2. FileVault tab
3. Click lock icon → enter admin password
4. "Turn On FileVault"
5. Choose recovery method:
   - iCloud account recovery (recommended)
   - Create recovery key (save it securely!)
6. Restart computer
7. Encryption happens in background (can take hours)

**When FileVault is enabled:**
- Entire disk encrypted with XTS-AES-128 encryption
- Must enter password before macOS boots
- If laptop is stolen, data is unreadable without password
- Minimal performance impact on modern Macs

**Recovery scenarios:**
- Forgot password → Use iCloud recovery or recovery key
- No recovery key → Data is permanently lost (by design—security trade-off)

🎯 **Exam Tip:** FileVault = macOS disk encryption, BitLocker = Windows disk encryption. Both provide full-disk encryption to protect data if device is stolen.

---

## Time Machine: Automated Backups

Time Machine is macOS's built-in backup system—automatic, versioned, and incredibly easy to use. It's significantly simpler than Windows backup solutions.

### How Time Machine Works

Time Machine automatically backs up:
- Entire system
- Applications
- User files and folders
- System files and settings

**Backup schedule:**
- Hourly backups for past 24 hours
- Daily backups for past month
- Weekly backups until backup disk is full
- Automatically deletes oldest backups when space is needed

**Versioned backups:** Time Machine keeps multiple versions of files, so you can restore "yesterday's version" or "last week's version" of a document.

### Setting Up Time Machine

**Requirements:**
- External hard drive (or network drive)
- Drive should be 2-3x the size of Mac's internal drive
- Drive will be reformatted (erases all existing data)

**Setup process:**
1. Connect external drive
2. macOS prompts: "Do you want to use this drive for Time Machine?"
3. Click "Use as Backup Disk"
4. Or manually: System Preferences → Time Machine → Select Backup Disk
5. Choose drive → "Use Disk"
6. Encryption optional (recommended): Check "Encrypt backups"
7. First backup begins automatically (can take hours)
8. Subsequent backups are incremental (only changed files—much faster)

### Restoring from Time Machine

**Restoring individual files:**
1. Open folder where file existed
2. Click Time Machine icon in menu bar → "Enter Time Machine"
3. Interface shows folder at different points in time (stacked windows receding into space)
4. Navigate through timeline (arrows or timeline on right edge)
5. Select file or folder
6. Click "Restore"
7. File restored to original location

**Restoring entire system:**
- Boot into Recovery Mode (Command + R at startup)
- Select "Restore from Time Machine Backup"
- Choose backup disk
- Select backup date
- macOS restores entire system to that state

**Real-world scenario:** User accidentally deletes important presentation 3 days ago and emptied Trash. No problem—enter Time Machine, go back 4 days, find presentation, restore. Takes 30 seconds.

💡 **Pro Tip:** Time Machine is so reliable that many Mac users don't realize they can restore files until they desperately need to. Teach users how to use it BEFORE disaster strikes.

---

## Keychain: Password and Certificate Management

Keychain is macOS's secure storage system for passwords, certificates, encryption keys, and secure notes—equivalent to Windows Credential Manager but more comprehensive.

### What Keychain Stores

- **Website passwords** - Safari autofill passwords
- **Wi-Fi passwords** - Automatically reconnect to networks
- **Application passwords** - Email accounts, FTP credentials
- **Certificates** - Digital certificates for encryption and authentication
- **Secure notes** - Encrypted text storage
- **Encryption keys** - FileVault recovery keys, certificate private keys

### Accessing Keychain

**Keychain Access app:**
- Applications → Utilities → Keychain Access
- Or Spotlight: Command + Space → "Keychain Access"

**Viewing stored passwords:**
1. Open Keychain Access
2. Select "login" keychain in left sidebar
3. Select "Passwords" category
4. Double-click any entry
5. Check "Show password"
6. Enter Mac password to reveal

**iCloud Keychain:**
- Syncs passwords across all Apple devices (Mac, iPhone, iPad)
- Enable: System Preferences → Apple ID → iCloud → Keychain
- Uses end-to-end encryption

**Common Keychain tasks:**

**Forgot Wi-Fi password:**
1. Keychain Access → System → Passwords
2. Find Wi-Fi network name
3. Double-click → Show password
4. Enter Mac password → reveals Wi-Fi password

**Export certificates:**
1. Keychain Access → My Certificates
2. Right-click certificate → Export
3. Save as .p12 file (for importing on other devices)

**Troubleshooting login loops:**
- Sometimes Keychain becomes corrupt or password mismatched
- Symptom: Constant password prompts
- Solution: Keychain Access → Keychain First Aid → Repair

🎯 **Exam Tip:** Keychain stores passwords and certificates. If user forgot Wi-Fi password or needs to access saved credentials, Keychain Access is where you find them.

---

## Terminal: macOS Command Line

Terminal is macOS's command-line interface—equivalent to Windows Command Prompt, but using Unix/Linux commands instead.

**Opening Terminal:**
- Applications → Utilities → Terminal
- Or Spotlight: Command + Space → "Terminal" → Enter

### Basic Terminal Commands

macOS Terminal uses **Unix commands** (not Windows cmd.exe commands). Here are essentials:

**Navigation:**
```bash
pwd                 # Print Working Directory (shows current location)
ls                  # List files and folders (like dir in Windows)
ls -la              # List all files including hidden, with details
cd Documents        # Change to Documents folder
cd ..               # Go up one level (parent folder)
cd ~                # Go to home directory (/Users/username)
cd /                # Go to root directory
```

**File operations:**
```bash
cp file.txt backup.txt        # Copy file
mv oldname.txt newname.txt    # Rename/move file
rm file.txt                   # Delete file (permanent!)
mkdir newfolder               # Create directory
rmdir emptyfolder             # Remove empty directory
rm -rf folder                 # Remove folder and contents (DANGEROUS!)
```

**Viewing files:**
```bash
cat file.txt        # Display entire file contents
less file.txt       # View file page by page (q to quit)
head file.txt       # Show first 10 lines
tail file.txt       # Show last 10 lines
tail -f log.txt     # Continuously show new lines (great for log monitoring)
```

**System information:**
```bash
whoami              # Current username
hostname            # Computer name
top                 # Task manager (q to quit)
df -h               # Disk space usage
du -sh *            # Folder sizes in current directory
```

**Network commands:**
```bash
ifconfig            # Network adapter information (like ipconfig in Windows)
ping google.com     # Test connectivity
traceroute google.com   # Trace route (like tracert in Windows)
curl https://example.com   # Fetch web page content
```

**File permissions:**
```bash
ls -l               # Show file permissions
chmod 755 script.sh # Change permissions (covered in Linux section)
chown user file.txt # Change file owner
```

### Useful Terminal Shortcuts

- **Tab** - Auto-complete file/folder names (saves typing)
- **Up Arrow** - Recall previous command
- **Control + C** - Cancel running command
- **Control + A** - Jump to beginning of line
- **Control + E** - Jump to end of line
- **Control + L** - Clear screen (or type `clear`)

**Real-world scenario:** User's Mac has slow performance. You open Terminal, type `top`, and immediately see which process is consuming 99% CPU. Identify the culprit (maybe runaway browser process), close it from Dock, problem solved.

💡 **Pro Tip:** Many Mac power users prefer Terminal over GUI for speed. Learning basic Terminal commands makes you much more efficient at Mac support.

---

## Linux: The Open Source Powerhouse

Linux is an open-source operating system kernel created by Linus Torvalds in 1991. It powers everything from smartphones (Android) to supercomputers, web servers to smart TVs.

### Linux Distributions (Distros)

Unlike Windows or macOS (single company, single version), Linux comes in hundreds of **distributions**—different packages of the Linux kernel with various software, desktop environments, and philosophies.

**Major distributions you'll encounter:**

**Ubuntu:**
- Most popular desktop Linux
- User-friendly, great for beginners
- Based on Debian
- LTS (Long Term Support) releases every 2 years (supported for 5 years)
- Use case: Desktop computers, servers, development

**Debian:**
- Rock-solid stability
- Basis for Ubuntu and many others
- Conservative update cycle (stability over latest features)
- Use case: Servers requiring maximum uptime

**Fedora:**
- Cutting-edge features
- Sponsored by Red Hat
- Latest software versions
- Use case: Developers, tech enthusiasts

**Red Hat Enterprise Linux (RHEL):**
- Enterprise-focused
- Commercial (paid support)
- Extremely stable and well-supported
- Use case: Corporate servers, mission-critical systems

**CentOS / Rocky Linux / AlmaLinux:**
- Free RHEL derivatives
- Enterprise features without the cost
- Use case: Budget-conscious businesses, labs

**Arch Linux:**
- Minimalist, build-your-own approach
- Rolling release (constantly updated)
- Steep learning curve
- Use case: Advanced users who want complete control

**Mint:**
- Based on Ubuntu
- Very user-friendly
- Great Windows alternative
- Use case: Desktop users migrating from Windows

🎯 **Exam Tip:** Ubuntu is most common for desktops and general servers. Red Hat/CentOS are common in enterprises. Know that distributions share Linux kernel but differ in packages, management tools, and support.

---

## Linux File System Hierarchy

Linux organizes files in a single hierarchy starting from root (`/`)—no drive letters like Windows.

**Key directories:**

**`/` (root)** - Top of file system (equivalent to C:\ in Windows)

**`/home`** - User home directories (equivalent to C:\Users)
- `/home/jessica` - Jessica's personal files
- `/home/john` - John's personal files

**`/root`** - Root user's (administrator's) home directory
- Different from `/` (root directory)
- Only accessible by root user

**`/bin`** - Essential user binaries (basic commands like ls, cat, cp)

**`/sbin`** - System binaries (administrative commands)

**`/etc`** - Configuration files
- `/etc/passwd` - User account information
- `/etc/network/` - Network configuration
- `/etc/ssh/sshd_config` - SSH server settings

**`/var`** - Variable data (logs, databases, web content)
- `/var/log` - Log files
- `/var/www` - Web server content

**`/tmp`** - Temporary files (cleared on reboot)

**`/usr`** - User programs and data
- `/usr/bin` - Most user commands
- `/usr/local` - Locally installed software

**`/opt`** - Optional/add-on software

**`/dev`** - Device files (hardware represented as files)
- `/dev/sda` - First hard drive
- `/dev/sda1` - First partition on first drive

**`/mnt` or `/media`** - Mount points for external drives

**Shortcut symbols:**
- `~` - Current user's home directory
- `/` - Root directory
- `.` - Current directory
- `..` - Parent directory

**Example paths:**
- `~/Documents/report.txt` = `/home/jessica/Documents/report.txt`
- `/var/log/syslog` - System log file

---

## Essential Linux Commands

The Linux shell (command-line interface) is your primary tool for system administration. These commands are fundamental.

### Navigation and File Management

```bash
# Where am I?
pwd                          # Print working directory

# What's here?
ls                           # List files
ls -l                        # List with details (permissions, size, date)
ls -la                       # List all (including hidden files starting with .)
ls -lh                       # List with human-readable sizes (KB, MB, GB)

# Moving around
cd /var/log                  # Change to /var/log
cd ..                        # Go up one level
cd ~                         # Go to home directory
cd                           # Same as cd ~ (go home)
cd -                         # Go back to previous directory

# Creating and removing
mkdir projects               # Create directory
mkdir -p documents/work/2024 # Create nested directories
touch newfile.txt            # Create empty file
rm file.txt                  # Remove file
rm -r folder                 # Remove folder and contents (recursive)
rm -rf folder                # Force remove (no prompts—DANGEROUS!)

# Copying and moving
cp source.txt dest.txt       # Copy file
cp -r folder1 folder2        # Copy folder recursively
mv oldname.txt newname.txt   # Rename file
mv file.txt /home/jessica/   # Move file to different location
```

### Viewing and Editing Files

```bash
# Display file contents
cat file.txt                 # Show entire file
less file.txt                # View file page-by-page (Space=next page, q=quit)
head file.txt                # First 10 lines
tail file.txt                # Last 10 lines
tail -n 20 file.txt          # Last 20 lines
tail -f /var/log/syslog      # Follow log file (shows new lines as they're added)

# Text editors
nano file.txt                # Simple editor (beginner-friendly)
vim file.txt                 # Advanced editor (steep learning curve)
# nano: Ctrl+O to save, Ctrl+X to exit
# vim: i to insert, Esc to command mode, :wq to save and quit
```

### File Permissions and Ownership

Linux has a sophisticated permission system controlling who can read, write, or execute files.

**Understanding permissions:**

When you run `ls -l`, you see output like:
```
-rw-r--r-- 1 jessica users 1024 Nov 21 10:30 document.txt
drwxr-xr-x 2 jessica users 4096 Nov 21 10:31 folder
```

**Breaking down the first line:**

`-rw-r--r--` = Permissions (10 characters)
- Character 1: File type (`-` = file, `d` = directory, `l` = link)
- Characters 2-4: Owner permissions (`rw-` = read, write)
- Characters 5-7: Group permissions (`r--` = read only)
- Characters 8-10: Others permissions (`r--` = read only)

**Permission types:**
- **r** (read) = 4 = Can view file contents or list directory
- **w** (write) = 2 = Can modify file or add/remove files in directory
- **x** (execute) = 1 = Can run file as program or enter directory

**Common permission patterns:**
- `644` (`rw-r--r--`) - Standard file: owner can edit, everyone can read
- `755` (`rwxr-xr-x`) - Executable/folder: owner full access, everyone can read/execute
- `700` (`rwx------`) - Private folder: only owner has any access
- `666` (`rw-rw-rw-`) - Everyone can read/write (dangerous, rarely used)
- `777` (`rwxrwxrwx`) - Everyone full access (VERY dangerous, avoid)

**Changing permissions:**
```bash
chmod 755 script.sh          # Set specific permissions (numeric)
chmod +x script.sh           # Add execute permission
chmod -w file.txt            # Remove write permission
chmod u+x,g-w file.txt       # User adds execute, group removes write
```

**Changing ownership:**
```bash
chown jessica file.txt       # Change owner to jessica
chown jessica:users file.txt # Change owner to jessica, group to users
chown -R jessica folder      # Recursively change ownership of folder
```

**The root user:**
- Root = administrator/superuser (like Administrator in Windows)
- Has permission to do ANYTHING (no restrictions)
- Dangerous to use routinely (one mistake can destroy system)

**sudo (Super User DO):**
- Run single command as root
- Safer than logging in as root
```bash
sudo apt update              # Run apt update as root
sudo rm /etc/important       # Delete system file (requires root)
sudo -i                      # Become root (use sparingly)
```

🎯 **Exam Tip:** Know permission types (r, w, x) and numeric notation (755, 644). Understand that `sudo` gives temporary root privileges for single commands.

---

## Package Management: Installing Software

Linux distributions use **package managers** to install, update, and remove software—like Microsoft Store but command-line based.

### APT (Advanced Package Tool) - Debian/Ubuntu

```bash
# Update package lists (like refreshing store catalog)
sudo apt update

# Upgrade all installed packages
sudo apt upgrade             # Interactive (asks permission)
sudo apt upgrade -y          # Automatic (yes to all)

# Install software
sudo apt install firefox
sudo apt install nginx mysql-server php

# Remove software
sudo apt remove firefox      # Remove program, keep config files
sudo apt purge firefox       # Remove program AND config files

# Search for packages
apt search "web server"
apt search nginx

# Show package information
apt show nginx

# Clean up unused packages
sudo apt autoremove          # Remove orphaned dependencies
sudo apt clean               # Clear package cache
```

### YUM/DNF - Red Hat/CentOS/Fedora

```bash
# Update package lists
sudo yum update              # (RHEL 7, CentOS 7)
sudo dnf update              # (RHEL 8+, Fedora)

# Install software
sudo yum install httpd       # Apache web server
sudo dnf install nginx

# Remove software
sudo yum remove httpd
sudo dnf remove nginx

# Search packages
yum search webserver
dnf search webserver

# Show package info
yum info httpd
dnf info nginx

# Clean cache
sudo yum clean all
sudo dnf clean all
```

**Real-world scenario:** You need to set up a web server on Ubuntu. Instead of downloading installers:

```bash
sudo apt update              # Refresh package list
sudo apt install nginx       # Install Nginx web server
sudo systemctl start nginx   # Start the service
sudo systemctl enable nginx  # Auto-start on boot
```

Done. Web server installed, configured, and running in 30 seconds.

**Advantages of package managers:**
- No hunting for download links
- Automatic dependency resolution (installs required libraries)
- Centralized updates (one command updates everything)
- Verified software (packages signed by distribution maintainers)
- Easy removal (no leftover files)

💡 **Pro Tip:** Package managers are one of Linux's biggest strengths. Windows is catching up with winget and Microsoft Store, but Linux has had this for 25+ years.

---

## System Administration Basics

### User Management

```bash
# Add user
sudo adduser john            # Interactive (prompts for password, info)
sudo useradd john            # Non-interactive (manual configuration)

# Delete user
sudo deluser john            # Remove user, keep home directory
sudo deluser --remove-home john  # Remove user and home directory

# Change password
passwd                       # Change your own password
sudo passwd john             # Change john's password (as root)

# Add user to group
sudo usermod -aG sudo john   # Add john to sudo group (admin rights)
sudo usermod -aG docker john # Add john to docker group

# View users
cat /etc/passwd              # List all users
whoami                       # Current user
id                           # Current user's ID and groups
```

### Process Management

```bash
# View processes
ps                           # Your processes
ps aux                       # All processes (detailed)
top                          # Real-time process monitor (q to quit)
htop                         # Better version of top (if installed)

# Kill processes
kill 1234                    # Terminate process ID 1234 (graceful)
kill -9 1234                 # Force kill (immediate, no cleanup)
killall firefox              # Kill all processes named firefox
pkill -f "python script.py"  # Kill by matching command line
```

### Service Management (systemd)

Modern Linux uses **systemd** to manage services (background programs).

```bash
# Service status
sudo systemctl status nginx  # Check if service is running

# Start/stop services
sudo systemctl start nginx   # Start service now
sudo systemctl stop nginx    # Stop service now
sudo systemctl restart nginx # Restart service

# Enable/disable auto-start
sudo systemctl enable nginx  # Start automatically at boot
sudo systemctl disable nginx # Don't start at boot

# View all services
systemctl list-units --type=service

# View service logs
sudo journalctl -u nginx     # Show nginx logs
sudo journalctl -f           # Follow system log (like tail -f)
```

### Network Configuration

```bash
# View network info
ip addr                      # IP addresses (modern command)
ifconfig                     # IP addresses (legacy, still common)
ip route                     # Routing table
ping google.com              # Test connectivity
traceroute google.com        # Trace route (may need: sudo apt install traceroute)
netstat -tuln                # Listening ports
ss -tuln                     # Listening ports (modern replacement for netstat)

# DNS
cat /etc/resolv.conf         # DNS servers
nslookup google.com          # DNS lookup
dig google.com               # Detailed DNS lookup
```

### System Information

```bash
# System info
uname -a                     # Kernel version and system info
lsb_release -a               # Distribution info (Ubuntu, Debian, etc.)
hostname                     # Computer name
uptime                       # How long system has been running

# Hardware info
lscpu                        # CPU information
free -h                      # RAM usage (human-readable)
df -h                        # Disk space (human-readable)
lsblk                        # Block devices (drives, partitions)
lsusb                        # USB devices
lspci                        # PCI devices

# Disk usage
du -sh /home/jessica         # Size of jessica's home folder
du -h --max-depth=1 /var     # Size of folders in /var (one level deep)
```

---

## Key Differences: Windows vs. macOS vs. Linux

Understanding cross-platform differences helps you support diverse environments.

| Feature | Windows | macOS | Linux |
|---------|---------|-------|-------|
| **File System** | Drive letters (C:, D:) | Single hierarchy from / | Single hierarchy from / |
| **Path Separator** | Backslash `\` | Forward slash `/` | Forward slash `/` |
| **Home Folder** | C:\Users\username | /Users/username | /home/username |
| **Case Sensitive** | No | Yes (can be configured) | Yes |
| **File Manager** | File Explorer | Finder | Varies (Nautilus, Dolphin, Thunar) |
| **Command Line** | cmd.exe, PowerShell | Terminal (bash/zsh) | Terminal (bash/zsh) |
| **Package Manager** | Microsoft Store, winget | App Store | apt, yum, dnf, pacman |
| **Updates** | Windows Update | Software Update | apt update/upgrade, yum update |
| **Disk Encryption** | BitLocker | FileVault | LUKS, dm-crypt |
| **Default Shell** | cmd.exe | zsh (bash on older) | bash |
| **Permissions** | ACLs (complex) | Unix permissions + ACLs | Unix permissions (rwx) |
| **Root/Admin** | Administrator account | Root (sudo) | Root (sudo) |
| **GUI Required** | Yes (mostly) | Yes | No (can run headless) |

---

## Troubleshooting Scenarios

### macOS: User Can't Empty Trash

**Symptom:** Files stuck in Trash, "Preparing to empty Trash" runs forever

**Solutions:**
1. **Force Empty Trash:** Option + right-click Trash → "Empty Trash" (bypasses locked files)
2. **Terminal method:** 
   ```bash
   sudo rm -rf ~/.Trash/*
   ```
   Requires password, forcibly deletes everything
3. **Check locked files:** Get Info on stuck files, uncheck "Locked"
4. **Restart Finder:** Option + right-click Finder in Dock → "Relaunch"

### macOS: Application Won't Open ("Application is Damaged")

**Symptom:** Downloaded app shows error "can't be opened because it is from an unidentified developer" or "is damaged"

**Cause:** macOS Gatekeeper security blocking unsigned applications

**Solutions:**
1. **Control + click method:** Control + click app → Open → "Open anyway" (bypasses once)
2. **System Preferences method:**
   - System Preferences → Security & Privacy → General
   - Look for message about blocked app
   - Click "Open Anyway"
3. **Remove quarantine attribute (Terminal):**
   ```bash
   xattr -cr /Applications/AppName.app
   ```
   Removes quarantine flag from downloaded app

⚠️ **Warning:** Only bypass Gatekeeper for apps from trusted sources. It exists to protect you from malware.

### Linux: "Permission Denied" When Running Script

**Symptom:** `./script.sh` returns "Permission denied"

**Cause:** Script doesn't have execute permission

**Solution:**
```bash
chmod +x script.sh   # Add execute permission
./script.sh          # Now it runs
```

Or run directly with interpreter:
```bash
bash script.sh       # Run with bash, doesn't need execute permission
```

### Linux: Package Installation Fails ("Could not get lock")

**Symptom:** `sudo apt install package` returns error about lock file

**Cause:** Another package manager operation is running (often automatic updates)

**Solutions:**
1. Wait for automatic updates to finish (check top-right for update icon)
2. Check what's using package manager:
   ```bash
   ps aux | grep apt
   ```
3. If nothing running but lock persists:
   ```bash
   sudo rm /var/lib/dpkg/lock-frontend
   sudo rm /var/lib/dpkg/lock
   sudo apt update
   ```

---

## Key Exam Tips

🎯 **macOS:** Know Finder, System Preferences, Time Machine (backup), Keychain (passwords), FileVault (encryption), Spotlight search.

🎯 **macOS File System:** No drive letters, uses Unix paths starting from `/`, user home is `/Users/username`.

🎯 **Time Machine:** Automatic hourly/daily/weekly backups, can restore individual files or entire system.

🎯 **FileVault:** macOS disk encryption, equivalent to BitLocker on Windows.

🎯 **Keychain:** Stores passwords, certificates, encryption keys. Use Keychain Access app to view saved passwords.

🎯 **Linux Distributions:** Ubuntu (most popular desktop), Red Hat/CentOS (enterprise), Debian (stable), Fedora (cutting edge).

🎯 **Linux File System:** Hierarchical from `/`, key directories: /home (users), /etc (config), /var (logs), /bin (commands).

🎯 **Linux Permissions:** Read (r/4), Write (w/2), Execute (x/1). Numeric: 755, 644, 700. Owner-Group-Others.

🎯 **sudo:** Execute commands as root (administrator). Required for system changes, software installation.

🎯 **Package Managers:** apt (Debian/Ubuntu), yum/dnf (Red Hat/Fedora). Install, update, remove software.

🎯 **Common Commands:** ls (list), cd (change directory), pwd (current location), cp (copy), mv (move), rm (remove).

🎯 **systemctl:** Manage services on modern Linux (start, stop, enable, disable).

---

## Key Takeaways

✅ macOS uses Unix-based file system starting from `/` with no drive letters

✅ Finder is macOS file manager, Spotlight is universal search tool (Command + Space)

✅ System Preferences/Settings is macOS equivalent to Windows Control Panel

✅ Time Machine provides automatic versioned backups to external or network drives

✅ Keychain stores passwords, certificates, and encryption keys with iCloud sync option

✅ FileVault encrypts entire disk, equivalent to Windows BitLocker

✅ Terminal in macOS uses Unix commands (ls, cd, rm) not Windows commands (dir, cd, del)

✅ Linux distributions share the same kernel but differ in packages, desktop environments, and management tools

✅ Ubuntu is most common for desktops and general servers; RHEL/CentOS for enterprise

✅ Linux file permissions use rwx (read, write, execute) for owner, group, and others

✅ sudo allows running commands with administrator privileges without logging in as root

✅ Package managers (apt, yum, dnf) handle software installation, updates, and removal

✅ systemctl manages services on modern Linux systems (start, stop, enable, disable)

✅ Linux is case-sensitive for files and commands; Windows and macOS (by default) are not

✅ Understanding basic cross-platform differences allows you to support mixed-OS environments effectively

---

## Check Your Understanding

Test your knowledge with these scenario-based questions:

**1. A Mac user accidentally deleted a file yesterday and emptied the Trash. How can they recover it?**

<details>
<summary>Show Answer</summary>
<strong>Use Time Machine to restore the file from yesterday's backup.</strong> Steps: 1) Open the folder where file originally existed, 2) Click Time Machine icon in menu bar → "Enter Time Machine" (or open Time Machine app), 3) Navigate timeline to yesterday (use arrows or timeline on right edge), 4) Select the deleted file, 5) Click "Restore" button. The file reappears in its original location. This assumes Time Machine backups were enabled and an external backup drive was connected. If Time Machine wasn't set up, file recovery becomes much harder—would need third-party data recovery tools with no guarantee of success. This scenario demonstrates why Time Machine should be configured immediately on all Macs. Prevention is better than recovery.
</details>

**2. A macOS user needs to find their Wi-Fi password to give to a guest but can't remember it. Where can they find it?**

<details>
<summary>Show Answer</summary>
<strong>Open Keychain Access and search for the Wi-Fi network name.</strong> Steps: 1) Open Keychain Access (Applications → Utilities → Keychain Access, or Spotlight search), 2) Select "System" keychain in left sidebar, 3) Select "Passwords" category, 4) Search for Wi-Fi network name in upper-right search box, 5) Double-click the network entry, 6) Check "Show password" checkbox, 7) Enter Mac administrator password when prompted, 8) Wi-Fi password displays in the password field. Alternative: System Preferences → Network → Wi-Fi → Advanced → Select network → Share password with nearby devices (iOS 11+). Keychain stores all passwords for networks the Mac has connected to, making it the central repository for credential recovery. This is a common help desk request and knowing Keychain Access saves time hunting for written-down passwords.
</details>

**3. You need to give a file execute permissions on Linux so it can run as a script. What command do you use?**

<details>
<summary>Show Answer</summary>
<strong>chmod +x filename.sh</strong> This adds execute (x) permission to the file for all users (owner, group, others). Alternative syntax: `chmod 755 filename.sh` which sets read, write, execute for owner (7), and read, execute for group and others (5, 5). When you download or create a script file, Linux doesn't automatically make it executable for security reasons—you must explicitly grant execute permission. Without it, running `./filename.sh` returns "Permission denied." After adding execute permission, the file can run as a program. To verify permissions changed: `ls -l filename.sh` shows `-rwxr-xr-x` (executable x bits set). This is fundamental Linux system administration—knowing how to modify file permissions is essential for managing scripts, applications, and system files.
</details>

**4. On Ubuntu Linux, you need to install Apache web server. What's the correct command?**

<details>
<summary>Show Answer</summary>
<strong>sudo apt install apache2</strong> Breaking this down: `sudo` runs the command with administrator privileges (required for installing system software), `apt` is Ubuntu's package manager (APT = Advanced Package Tool), `install` is the action, and `apache2` is the package name. Before installing, best practice is to update package lists first: `sudo apt update` then `sudo apt install apache2`. APT automatically handles dependencies (downloads and installs all required libraries), configures the web server, and makes it ready to use. After installation, start the service: `sudo systemctl start apache2` and enable auto-start at boot: `sudo systemctl enable apache2`. On Red Hat/CentOS, equivalent command is `sudo yum install httpd` (different package name for same software). This demonstrates package managers' power—installing complex software with one command versus downloading, extracting, configuring manually.
</details>

**5. A Linux user tries to delete a file with `rm important.txt` but gets "Permission denied." Why, and how do they fix it?**

<details>
<summary>Show Answer</summary>
<strong>They don't have write permission on the file or the directory containing it.</strong> Check permissions: `ls -l important.txt` might show `-r--r--r--` (read-only for everyone) or the file might be owned by another user. Solutions depend on situation: 1) If they own the file but it's read-only: `chmod +w important.txt` then `rm important.txt`, 2) If root owns the file: `sudo rm important.txt` (requires admin privileges), 3) If file is in a protected directory: `sudo rm /path/to/important.txt`. Verify ownership: `ls -l important.txt` shows owner and group. If wrong user owns it: `sudo chown username important.txt` transfers ownership, then delete normally. This scenario teaches: Linux permissions protect files rigorously—you can't accidentally delete system files or other users' files without appropriate permissions or sudo. Windows is more permissive; Linux requires explicit permission or administrative escalation.
</details>

**6. A developer mentions they're running "Fedora with KDE Plasma." What are they talking about?**

<details>
<summary>Show Answer</summary>
<strong>Fedora is a Linux distribution, and KDE Plasma is the desktop environment (graphical interface) they're using.</strong> Linux separates the operating system from the desktop environment. Fedora is the underlying OS (includes kernel, system tools, package manager), while KDE Plasma is the graphical interface on top (windows, menus, taskbar). Other desktop environments include: GNOME (default for Ubuntu/Fedora), Xfce (lightweight), Cinnamon (Windows-like), MATE (traditional). Users can install multiple desktop environments and choose at login. This flexibility doesn't exist in Windows or macOS—you get one interface. When supporting Linux users, always ask which distribution AND desktop environment because troubleshooting steps vary. For example, network settings location differs between GNOME and KDE. Understanding that Linux = kernel + distribution + desktop environment helps navigate this modular ecosystem.
</details>

**7. You run `sudo apt update` on Ubuntu and see "403 Forbidden" errors for several repositories. What's wrong?**

<details>
<summary>Show Answer</summary>
<strong>Repository URLs are incorrect, outdated, or the repositories have been taken down.</strong> Common causes: 1) Outdated Ubuntu version trying to access repositories that no longer exist (e.g., Ubuntu 16.04 reached end-of-life), 2) Third-party repositories that were removed or changed URLs, 3) Incorrect sources.list configuration, 4) Network/proxy blocking access. Solutions: 1) Check Ubuntu version: `lsb_release -a`, if old, consider upgrading, 2) Edit repository list: `sudo nano /etc/apt/sources.list` and remove/fix broken entries (lines causing 403 errors), 3) Remove problematic third-party repos: Check `/etc/apt/sources.list.d/` for files containing broken URLs, 4) Verify internet connectivity: `ping google.com`. After fixing, run `sudo apt update` again to verify. This is common on older Ubuntu installations with added third-party repositories (like PPAs) that later disappear.
</details>

**8. On macOS, a user sees constant prompts saying "MacOS wants to use the login keychain." What's happening and how do you fix it?**

<details>
<summary>Show Answer</summary>
<strong>The login keychain password doesn't match the user's current account password—usually after a password reset.</strong> When you change your Mac account password, the keychain password doesn't automatically update, causing this loop of password prompts. Fix: 1) Open Keychain Access (Applications → Utilities), 2) Keychain Access menu → Preferences → Reset My Default Keychain, 3) Enter current Mac password, 4) Keychain recreates with correct password. Warning: This creates a new empty keychain—you lose stored passwords. Better method preserving passwords: 1) Keychain Access → Edit menu → "Change Password for Keychain 'login'", 2) Enter OLD password (before reset) as current password, 3) Enter NEW password (current Mac password) as new password, 4) Keychain syncs with account password, prompts stop. If you can't remember old password, reset is only option but users should re-enter saved passwords afterward.
</details>

**9. You need to restart the Nginx web server on a Linux system running systemd. What command do you use?**

<details>
<summary>Show Answer</summary>
<strong>sudo systemctl restart nginx</strong> This stops and starts the Nginx service, applying any configuration changes. Systemd is the modern init system managing services (background processes/daemons) on most Linux distributions. Related commands: `sudo systemctl status nginx` (check if running), `sudo systemctl start nginx` (start if stopped), `sudo systemctl stop nginx` (stop service), `sudo systemctl enable nginx` (auto-start at boot), `sudo systemctl disable nginx` (don't auto-start at boot), `sudo systemctl reload nginx` (reload configuration without stopping—gentler than restart). Use `reload` when possible (for config changes) as it doesn't interrupt active connections. Use `restart` when reload isn't sufficient or software was updated. Legacy systems use `service` command: `sudo service nginx restart`. Systemd unified service management across distributions, making Linux administration more consistent.
</details>

**10. A Linux server keeps running out of disk space. What commands help you identify which directories are consuming the most space?**

<details>
<summary>Show Answer</summary>
<strong>Use df -h to see overall disk usage, then du -sh /* to see sizes of top-level directories.</strong> Workflow: 1) `df -h` shows available space per partition/filesystem. If `/` is 95% full, investigate: 2) `du -sh /*` shows size of each directory under root (requires sudo to access all directories). Look for unexpectedly large directories, 3) Navigate into large directory: `cd /var` then `du -sh *` to see subfolder sizes, 4) Continue drilling down: `cd log` → `du -sh *` until you find the culprit (often huge log files). Common space hogs: `/var/log` (log files, especially if rotation disabled), `/home` (user files), `/tmp` (temporary files), `~/.cache` (application cache). Solutions: Delete old logs (`sudo rm /var/log/*.log.1`), empty trash/temp folders, uninstall unused software (`sudo apt remove package`), clear package cache (`sudo apt clean`). For graphical analysis, install `ncdu` (NCurses Disk Usage): `sudo apt install ncdu` → `sudo ncdu /` for interactive directory size browser. This is essential Linux system administration—space issues are common on servers.
</details>

---

## Before Moving to Lesson 39

Make sure you can confidently:

✅ Navigate macOS Finder and understand the Unix-style file system hierarchy  
✅ Configure settings in System Preferences/System Settings  
✅ Set up and restore from Time Machine backups  
✅ Access saved passwords and certificates in Keychain  
✅ Execute basic commands in macOS Terminal  
✅ Identify major Linux distributions and their target use cases  
✅ Navigate Linux file system (/, /home, /etc, /var)  
✅ Use essential Linux commands (ls, cd, pwd, cp, mv, rm, mkdir)  
✅ Understand and modify Linux file permissions (rwx, chmod)  
✅ Use sudo for administrative tasks  
✅ Install and update software using package managers (apt, yum)  
✅ Manage Linux services with systemctl  

**Study Strategy:**

1. **Hands-on practice (highly recommended):** 
   - If you have a Mac, explore Finder, Time Machine, Keychain, and Terminal
   - Install VirtualBox and create an Ubuntu VM to practice Linux commands
   - Free online Linux terminals: webminal.org, copy.sh/v86/
2. **Command practice:** Write common commands on flashcards (front: task, back: command)
3. **Professor Messer videos:** Watch macOS and Linux sections, take notes on exam-specific tips
4. **Command cheat sheets:** Create quick reference cards for macOS Terminal and Linux commands
5. **Virtual machine experimentation:** Break things intentionally in a VM to learn recovery

Cross-platform knowledge makes you incredibly valuable. Most organizations run mixed environments—Windows desktops, Mac design workstations, Linux servers. Understanding all three operating systems exponentially increases your career opportunities and problem-solving capabilities.

---

## Coming Up in Lesson 39

**Lesson 39: Windows Installation Methods**

Time to dive deep into Windows deployment. In the next lesson, we'll cover different installation types (clean install, in-place upgrade, image deployment), installation media (USB, DVD, network PXE boot), unattended installations with answer files, system requirements verification, partition schemes (MBR vs. GPT), boot methods (BIOS vs. UEFI), Secure Boot, and troubleshooting installation failures. You'll learn how IT professionals deploy Windows efficiently across hundreds of computers and how to handle every installation scenario—from single home computers to enterprise mass deployments. Get ready to master Windows installation from start to finish!

---

*"The operating system doesn't matter as much as the problems you solve. Learn the concepts, not just the commands, and every OS becomes approachable."*

---

# ✅ LESSON 38 COMPLETE!

**Progress:** 38 of 60 lessons complete (63.3%) 🎯

Outstanding work! You've expanded beyond Windows to understand macOS and Linux fundamentals. These cross-platform skills are invaluable in today's diverse IT environments. Whether supporting creative professionals on Macs, developers on Linux, or managing mixed-OS networks, you now have the foundation to work confidently across all major operating systems. The concepts you've learned—file systems, permissions, package management, backups, security—translate universally. Next up: diving deep into Windows installation and deployment methods!