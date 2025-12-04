export const lesson38Quiz = [
  {
    id: 1,
    question: "A Mac user wants to quickly search for a file, application, or perform a web search without opening a browser. Which macOS feature should they use?",
    options: [
      "Finder",
      "Spotlight",
      "Mission Control",
      "Launchpad"
    ],
    correct: 1,
    explanation: "Spotlight (Command+Space) is macOS's universal search feature that quickly finds files, applications, emails, contacts, and even performs calculations and web searches. It's the fastest way to launch apps and find content. Finder is the file manager. Mission Control shows all open windows. Launchpad displays all installed applications in a grid."
  },
  {
    id: 2,
    question: "A user needs to install a Windows application on their Mac for work. The application has no Mac version available. Which built-in macOS utility allows them to install Windows on a separate partition?",
    options: [
      "Time Machine",
      "Boot Camp",
      "Migration Assistant",
      "Disk Utility"
    ],
    correct: 1,
    explanation: "Boot Camp is Apple's built-in utility that allows Intel-based Macs to partition the drive and install Windows natively. Users can choose which OS to boot at startup. Time Machine is for backups. Migration Assistant transfers data between Macs. Disk Utility manages drives and partitions but Boot Camp specifically handles Windows installation. Note: Apple Silicon Macs (M1/M2) don't support Boot Camp."
  },
  {
    id: 3,
    question: "A Mac user accidentally deletes an important document. They have Time Machine backups enabled. How can they recover the file?",
    options: [
      "Open Finder, navigate to the folder, and click the Time Machine icon to browse backups",
      "Restart the Mac and hold Command+R to restore from backup",
      "Files deleted can't be recovered - Time Machine only backs up system files",
      "Open System Preferences and select 'Restore Files'"
    ],
    correct: 0,
    explanation: "Time Machine allows file-level recovery. Open Finder, navigate to where the file was located, click the Time Machine icon in the menu bar, and select 'Enter Time Machine.' You'll see a timeline of backups and can browse to find and restore the deleted file. Command+R boots to recovery mode for full system restoration. Time Machine backs up all files, not just system files."
  },
  {
    id: 4,
    question: "A macOS user wants to encrypt their entire startup disk to protect sensitive data if their MacBook is stolen. Which feature should they enable?",
    options: [
      "Keychain",
      "Gatekeeper",
      "FileVault",
      "System Integrity Protection"
    ],
    correct: 2,
    explanation: "FileVault provides full-disk encryption for macOS, encrypting the entire startup disk with XTS-AES-128 encryption. It requires a password at startup to decrypt. Keychain stores passwords but doesn't encrypt the disk. Gatekeeper controls which apps can be installed. System Integrity Protection (SIP) protects system files from modification but doesn't encrypt data."
  },
  {
    id: 5,
    question: "A Linux user needs to install a new software package on Ubuntu. Which command should they use to install software from the repository?",
    options: [
      "yum install package-name",
      "apt install package-name",
      "install package-name",
      "get package-name"
    ],
    correct: 1,
    explanation: "Ubuntu (and Debian-based distributions) use APT (Advanced Package Tool). The command is 'sudo apt install package-name'. You need sudo for administrative privileges. 'yum' is used by Red Hat/CentOS/Fedora systems. There's no standalone 'install' or 'get' command - they require the package manager prefix (apt, yum, etc.)."
  },
  {
    id: 6,
    question: "A user opens Terminal on their Mac and needs to list all files (including hidden files) in the current directory. Which command should they use?",
    options: [
      "ls",
      "ls -a",
      "dir /a",
      "list -all"
    ],
    correct: 1,
    explanation: "'ls -a' lists all files including hidden files (those starting with a dot). Plain 'ls' hides files starting with a dot. 'dir /a' is a Windows Command Prompt command, not macOS/Linux. There's no 'list' command in Unix-based systems - it's 'ls' (list). The -a flag means 'all' files."
  },
  {
    id: 7,
    question: "A Mac user wants to see all their open windows, full-screen apps, and virtual desktops at once to quickly switch between them. Which feature provides this overview?",
    options: [
      "Dock",
      "Finder",
      "Mission Control",
      "Launchpad"
    ],
    correct: 2,
    explanation: "Mission Control (F3 or swipe up with three/four fingers) shows all open windows, full-screen apps, and Spaces (virtual desktops) in one view. It allows quick switching between apps and desktops. The Dock shows running apps but not all windows. Finder is the file manager. Launchpad shows installed applications, not open windows."
  },
  {
    id: 8,
    question: "A Linux administrator needs to change file permissions so only the owner can read, write, and execute a script. Which chmod command accomplishes this?",
    options: [
      "chmod 777 script.sh",
      "chmod 700 script.sh",
      "chmod 644 script.sh",
      "chmod 755 script.sh"
    ],
    correct: 1,
    explanation: "'chmod 700' gives the owner read (4), write (2), and execute (1) permissions (7=4+2+1), while group and others get no permissions (0). 777 gives everyone full permissions (insecure). 644 gives owner read/write, others read-only (no execute). 755 gives owner full permissions but allows others to read and execute. For scripts, 700 is most secure for single-user access."
  },
  {
    id: 9,
    question: "A new Mac user can't find where downloaded files are saved. Where does macOS save downloads by default?",
    options: [
      "Desktop folder",
      "Documents folder",
      "Downloads folder in the user's home directory",
      "Applications folder"
    ],
    correct: 2,
    explanation: "macOS saves downloads to the Downloads folder (~/Downloads or /Users/username/Downloads) by default. This is accessible from the Dock (if the Downloads stack is enabled) or Finder sidebar. Desktop can be configured but isn't default. Documents is for user-created files. Applications is for installed apps, not downloads."
  },
  {
    id: 10,
    question: "A Linux user needs to execute a command that requires root privileges but they're logged in as a standard user. Which command allows them to run a single command as root?",
    options: [
      "su",
      "sudo command-name",
      "root command-name",
      "admin command-name"
    ],
    correct: 1,
    explanation: "'sudo command-name' executes a single command with root/superuser privileges. The user enters their own password (not root's password). 'su' switches to the root user entirely (requires root password). There's no standalone 'root' or 'admin' command. sudo (superuser do) is the standard way to perform administrative tasks while logged in as a regular user."
  },
  {
    id: 11,
    question: "A Mac user notices their passwords are automatically filled in on websites they've visited before. Where does macOS securely store these passwords?",
    options: [
      "Safari browser cache",
      "iCloud Drive",
      "Keychain",
      "System Preferences"
    ],
    correct: 2,
    explanation: "Keychain is macOS's password management system that securely stores passwords, certificates, keys, and secure notes. It encrypts this data and can sync via iCloud Keychain across Apple devices. The browser cache stores temporary files, not passwords. iCloud Drive stores documents. System Preferences/Settings manages system configuration but doesn't store passwords - Keychain Access is the dedicated app."
  },
  {
    id: 12,
    question: "A Linux technician needs to view the contents of a configuration file located at /etc/network/interfaces. Which command displays the file's contents in the terminal?",
    options: [
      "cat /etc/network/interfaces",
      "open /etc/network/interfaces",
      "view /etc/network/interfaces",
      "show /etc/network/interfaces"
    ],
    correct: 0,
    explanation: "'cat' (concatenate) displays file contents in the terminal. For long files, 'less' or 'more' provide scrolling. 'open' is a macOS command to open files with default applications (not standard Linux). 'view' isn't a standard command (vim can use view mode). There's no 'show' command for files. Other options: 'head' (first lines), 'tail' (last lines)."
  },
  {
    id: 13,
    question: "A Mac user wants to uninstall an application. What's the typical method to uninstall apps on macOS?",
    options: [
      "Use Add/Remove Programs like Windows",
      "Drag the application from Applications folder to Trash",
      "Run an uninstaller program from the application folder",
      "Delete the app's files from Library folder"
    ],
    correct: 1,
    explanation: "Most macOS applications are self-contained bundles - dragging them from the Applications folder to Trash uninstalls them. Empty Trash to complete removal. Some apps (Adobe, Microsoft Office) include dedicated uninstallers. macOS doesn't have Add/Remove Programs. Manually deleting Library files isn't recommended and may leave orphaned files. Third-party uninstallers (AppCleaner) can remove all associated files."
  },
  {
    id: 14,
    question: "A user needs to partition and format a new external hard drive on their Mac. Which built-in utility should they use?",
    options: [
      "Time Machine",
      "Migration Assistant",
      "Disk Utility",
      "System Information"
    ],
    correct: 2,
    explanation: "Disk Utility (/Applications/Utilities/) handles disk management tasks: partitioning, formatting, erasing, repairing, and creating disk images. It can format drives as APFS (macOS), HFS+, exFAT (cross-platform), or FAT32. Time Machine is for backups. Migration Assistant transfers data between Macs. System Information displays hardware info but doesn't manage disks."
  },
  {
    id: 15,
    question: "A Linux administrator needs to create a new directory called 'backup' inside the /home/user/ directory. Which command accomplishes this?",
    options: [
      "mkdir /home/user/backup",
      "create /home/user/backup",
      "md /home/user/backup",
      "makedir /home/user/backup"
    ],
    correct: 0,
    explanation: "'mkdir' (make directory) creates new directories in Linux/Unix systems. The command 'mkdir /home/user/backup' creates the backup directory. 'create' and 'makedir' aren't valid Linux commands. 'md' is the Windows equivalent of mkdir. Linux is case-sensitive, so 'MKDIR' wouldn't work. For nested directories that don't exist, use 'mkdir -p /path/to/nested/dir'."
  }
];