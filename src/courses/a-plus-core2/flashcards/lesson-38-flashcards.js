export const lesson38Flashcards = [
  {
    id: 1,
    front: "What macOS versions should you know for A+?",
    back: "Recent versions named after California locations: Monterey, Ventura, Sonoma. Previously: Big Sur, Catalina, Mojave. Annual updates typically in fall. Version numbering: macOS 13 (Ventura), macOS 14 (Sonoma)."
  },
  {
    id: 2,
    front: "What is an Apple ID and why is it important?",
    back: "User account for all Apple services - iCloud, App Store, iMessage, FaceTime. Single sign-on across devices. Required for purchasing apps, cloud storage, device backup, Find My. Free to create, tied to email address."
  },
  {
    id: 3,
    front: "What is iCloud and what does it provide?",
    back: "Apple's cloud storage and sync service. Syncs photos, documents, contacts, calendars, notes, passwords across devices. 5GB free, paid tiers for more. Includes Find My, iCloud Drive, iCloud Photos, backup."
  },
  {
    id: 4,
    front: "What is Finder in macOS?",
    back: "macOS file manager (equivalent to Windows File Explorer). Browse files/folders, search, preview files with Quick Look (spacebar), manage applications, connect to servers, customize sidebar. Blue face icon in Dock."
  },
  {
    id: 5,
    front: "What is the Dock in macOS?",
    back: "Bar at bottom (or side) of screen showing favorite apps, running applications, minimized windows, Trash. Add/remove apps by drag and drop. Right-click for options. Divider separates apps from files/folders."
  },
  {
    id: 6,
    front: "What is Spotlight and how do you access it?",
    back: "macOS search feature - finds files, apps, emails, contacts, calculations, definitions. Access: Cmd+Space or click magnifying glass in menu bar. Type to search instantly. Fastest way to launch apps."
  },
  {
    id: 7,
    front: "What is Mission Control?",
    back: "View all open windows, desktops (Spaces), full-screen apps at once. Access: F3, three-finger swipe up on trackpad, Control+Up arrow. Create new desktops, drag windows between spaces, organize workflow."
  },
  {
    id: 8,
    front: "What are Spaces in macOS?",
    back: "Multiple virtual desktops for organizing work. Create in Mission Control - hover top, click '+'. Swipe left/right (three fingers) to switch. Separate spaces for different projects/tasks. Full-screen apps get own space."
  },
  {
    id: 9,
    front: "What is System Preferences/System Settings?",
    back: "macOS configuration hub (renamed to System Settings in Ventura+). Configure displays, network, users, security, time, accessibility. Apple menu → System Settings. Organized by categories, search bar for quick access."
  },
  {
    id: 10,
    front: "What is Time Machine?",
    back: "Built-in macOS backup system. Hourly incremental backups to external drive. Easy restore of files, entire system, or migrate to new Mac. Set up: System Settings → General → Time Machine → select backup disk."
  },
  {
    id: 11,
    front: "How does Time Machine backup work?",
    back: "Hourly backups for past 24 hours, daily backups for past month, weekly backups until drive full. Oldest backups deleted when space needed. First backup is full, subsequent are incremental (only changes)."
  },
  {
    id: 12,
    front: "What is Keychain in macOS?",
    back: "Password management system storing passwords, certificates, encryption keys. Automatically fills passwords in Safari and apps. Syncs via iCloud. Access: Spotlight → Keychain Access. Secured with user password."
  },
  {
    id: 13,
    front: "What is Terminal in macOS?",
    back: "Command-line interface for advanced tasks. Unix-based (bash or zsh shell). Located in Applications → Utilities. Run commands, scripts, system administration. More powerful than GUI for some tasks."
  },
  {
    id: 14,
    front: "What basic Terminal commands should you know for macOS?",
    back: "ls (list files), cd (change directory), pwd (current directory), mkdir (make directory), rm (remove), cp (copy), mv (move), sudo (run as admin), man (manual/help). Case-sensitive file system option."
  },
  {
    id: 15,
    front: "What is Disk Utility in macOS?",
    back: "Manage disks and volumes - format drives, partition, repair permissions, verify/repair disks, erase, create disk images. Applications → Utilities → Disk Utility. Essential for disk maintenance, troubleshooting."
  },
  {
    id: 16,
    front: "What file systems does macOS use?",
    back: "APFS (Apple File System) - default since High Sierra, optimized for SSDs, encryption, snapshots. HFS+ (Mac OS Extended) - legacy, still readable. ExFAT for cross-platform drives. Can read/write FAT32, read-only NTFS."
  },
  {
    id: 17,
    front: "What is FileVault encryption?",
    back: "Full disk encryption for Mac. Encrypts entire startup disk with XTS-AES-128. Requires password to boot. Enable: System Settings → Privacy & Security → FileVault. Recovery key provided for password reset."
  },
  {
    id: 18,
    front: "What is Boot Camp?",
    back: "Utility for installing Windows on Mac alongside macOS. Dual-boot setup - choose OS at startup. Partitions drive, installs Windows drivers for Mac hardware. Intel Macs only - Apple Silicon (M1/M2) not supported."
  },
  {
    id: 19,
    front: "What is Gatekeeper in macOS?",
    back: "Security feature controlling app installation sources. Three levels: App Store only, App Store and identified developers (default), anywhere (not recommended). Protects against malware. Override: right-click → Open."
  },
  {
    id: 20,
    front: "What Linux distributions should you know for A+?",
    back: "Ubuntu (most popular, beginner-friendly), Fedora (Red Hat based, cutting-edge), Red Hat Enterprise Linux (RHEL - commercial), CentOS/Rocky Linux (RHEL clones), Debian (stable, Ubuntu's base). Many others exist."
  },
  {
    id: 21,
    front: "What is the Linux shell/terminal?",
    back: "Command-line interface for Linux. Bash (Bourne Again Shell) most common. Text-based control, powerful scripting. Essential for administration. More relied upon than macOS/Windows terminals. Access via Terminal application."
  },
  {
    id: 22,
    front: "What basic Linux commands should you know?",
    back: "ls (list), cd (change dir), pwd (print working dir), mkdir (make dir), rm (remove), cp (copy), mv (move), chmod (change permissions), sudo (superuser do), apt/yum (package managers)."
  },
  {
    id: 23,
    front: "What is the Linux file system hierarchy?",
    back: "/ (root - top level), /home (user directories), /etc (configuration files), /var (variable data, logs), /bin (binaries), /usr (user programs), /tmp (temporary), /dev (devices). Everything is a file."
  },
  {
    id: 24,
    front: "What are Linux package managers?",
    back: "APT (Debian/Ubuntu) - apt install/update/remove. YUM/DNF (Red Hat/Fedora) - yum/dnf install. Install, update, remove software and dependencies automatically. Central repositories for software distribution."
  },
  {
    id: 25,
    front: "What is sudo in Linux?",
    back: "Superuser do - run commands with root (administrator) privileges. Example: sudo apt update. Prompts for user password. Safer than logging in as root. Needed for system changes, installing software, editing system files."
  },
  {
    id: 26,
    front: "What are Linux file permissions?",
    back: "Read (r), Write (w), Execute (x) for Owner, Group, Others. Example: rwxr-xr-- = owner full access, group read/execute, others read only. View with 'ls -l'. Change with chmod. Octal: 755, 644, 777."
  },
  {
    id: 27,
    front: "What does chmod command do?",
    back: "Change file permissions. chmod 755 file (rwxr-xr-x), chmod +x file (add execute), chmod -w file (remove write). Numeric: 4=read, 2=write, 1=execute. Add for combination: 7=all, 6=read+write, 5=read+execute."
  },
  {
    id: 28,
    front: "What is the root user in Linux?",
    back: "Superuser with unlimited system access. UID 0. Can modify anything, dangerous to use directly. Use sudo instead for specific privileged commands. Some systems disable root login for security."
  },
  {
    id: 29,
    front: "How do you update software in Ubuntu vs Fedora?",
    back: "Ubuntu: sudo apt update (refresh), sudo apt upgrade (install updates). Fedora: sudo dnf update (refresh and upgrade). Or use GUI software updater. Regular updates important for security."
  },
  {
    id: 30,
    front: "What are key differences between Windows, macOS, and Linux?",
    back: "Windows: proprietary, widest software support, business standard. macOS: proprietary, Unix-based, Apple hardware only, creative professionals. Linux: open source, free, highly customizable, server/development focus, many distros."
  }
];