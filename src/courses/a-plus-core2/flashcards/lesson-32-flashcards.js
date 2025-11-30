export const lesson32Flashcards = [
  {
    id: 1,
    front: "What is NTFS and what are its key features?",
    back: "New Technology File System - default for Windows. Supports file permissions, encryption (EFS), compression, disk quotas, large files (16 EB max), journaling for recovery. Required for Windows system drives."
  },
  {
    id: 2,
    front: "What is FAT32 and what are its limitations?",
    back: "File Allocation Table 32-bit. Maximum 4GB file size, 32GB partition size (Windows format limit). No security permissions, no encryption. Used for flash drives, compatibility with old systems/devices."
  },
  {
    id: 3,
    front: "What is exFAT and when would you use it?",
    back: "Extended File Allocation Table - designed for flash drives. No 4GB file size limit (supports large files), good for external drives. Better than FAT32 for modern removable storage, cross-platform compatible."
  },
  {
    id: 4,
    front: "What is ReFS and where is it used?",
    back: "Resilient File System - enterprise file system for Windows Server and Pro for Workstations. Enhanced data integrity, automatic error correction, optimized for large volumes. Not for system drives or removable media."
  },
  {
    id: 5,
    front: "What NTFS permissions control file/folder access?",
    back: "Read, Write, Modify, Read & Execute, Full Control, List Folder Contents. Set per-user or per-group. Permissions inherited from parent folder unless explicitly changed. Most restrictive permission applies."
  },
  {
    id: 6,
    front: "What is file encryption (EFS) in NTFS?",
    back: "Encrypting File System - encrypts individual files/folders on NTFS volumes. Transparent to user (automatic encrypt/decrypt). Green filename in Explorer. Available in Pro/Enterprise, NOT Home edition."
  },
  {
    id: 7,
    front: "What is NTFS compression and how does it work?",
    back: "Built-in file/folder compression to save disk space. Blue filename in Explorer. Transparent to users - automatic compress/decompress. Slight performance impact. Cannot use compression AND encryption together."
  },
  {
    id: 8,
    front: "What are disk quotas in NTFS?",
    back: "Limit amount of disk space users can consume on volume. Set per-user, prevents one user filling entire drive. Configure warnings at threshold, hard limits to prevent writing. Requires NTFS, not FAT32."
  },
  {
    id: 9,
    front: "What is File Explorer and its basic functions?",
    back: "Windows file management interface (Windows+E to open). Navigate folders, copy/move/delete files, search, view properties, change view modes. Quick Access shows frequent/recent folders."
  },
  {
    id: 10,
    front: "What are Libraries in Windows?",
    back: "Virtual folders aggregating content from multiple locations. Default libraries: Documents, Music, Pictures, Videos. Can add folders from different drives/locations. Simplified organization without moving files."
  },
  {
    id: 11,
    front: "What is Quick Access in File Explorer?",
    back: "Landing page in File Explorer showing frequently used folders and recent files. Pin important folders for quick access. Customize to remove recent files if privacy concern. Replaces old Favorites."
  },
  {
    id: 12,
    front: "What are file and folder attributes in Windows?",
    back: "Read-only (can't modify), Hidden (not visible in normal view), System (OS file), Archive (backup flag). Set in Properties → General → Attributes. Use attrib command to modify from command line."
  },
  {
    id: 13,
    front: "What does the Read-only attribute do?",
    back: "Prevents file modification (can read but not edit/delete). For folders, doesn't prevent changes to contents - use permissions instead. Mainly informational for folders, enforced for files."
  },
  {
    id: 14,
    front: "What does the Hidden attribute do?",
    back: "Hides files/folders from normal view in File Explorer. Still accessible if you know path or enable 'Show hidden files' in Folder Options. Common for system files, cache files."
  },
  {
    id: 15,
    front: "What does the Archive attribute indicate?",
    back: "Marks file as modified since last backup. Backup software uses this to identify changed files for incremental/differential backups. Automatically set when file created/modified."
  },
  {
    id: 16,
    front: "How do you show hidden files and file extensions?",
    back: "File Explorer → View → Options → Change folder and search options → View tab. Check 'Show hidden files, folders, drives', uncheck 'Hide extensions for known file types'. Helps identify file types, see system files."
  },
  {
    id: 17,
    front: "What are file extensions and why are they important?",
    back: "Suffix after filename indicating file type (.txt, .exe, .jpg, .docx). Windows uses extension to determine which program opens file. Hidden by default - showing them helps identify file types, spot malware."
  },
  {
    id: 18,
    front: "What is file association?",
    back: "Linking file extension to default program. Double-click .pdf opens in PDF reader, .docx opens in Word. Change in Settings → Apps → Default apps or right-click file → Open with → Choose another app."
  },
  {
    id: 19,
    front: "How do you change default program for file type?",
    back: "Right-click file → Open with → Choose another app → check 'Always use this app' → select program. Or Settings → Apps → Default apps → Choose default apps by file type."
  },
  {
    id: 20,
    front: "What's the maximum file size for FAT32 vs NTFS?",
    back: "FAT32: 4GB maximum file size (major limitation). NTFS: 16 EB (exabytes) theoretical max, practically unlimited for normal use. Use NTFS for large video files, disk images, databases."
  },
  {
    id: 21,
    front: "Can you install Windows on a FAT32 partition?",
    back: "No - Windows requires NTFS for system drive. Needs NTFS features like permissions, journaling, large file support. FAT32 only suitable for data drives, removable media, compatibility scenarios."
  },
  {
    id: 22,
    front: "What is file compression vs folder compression in NTFS?",
    back: "Both save disk space. File compression: compress individual files. Folder compression: compress all contents, new files auto-compress. Inherit to subfolders. Both show blue names in Explorer."
  },
  {
    id: 23,
    front: "What happens when you copy vs move an encrypted file?",
    back: "Copy within same NTFS volume: stays encrypted. Copy to different volume or non-NTFS: may decrypt (depends on settings). Move within same volume: stays encrypted. Moving/copying loses encryption to FAT32."
  },
  {
    id: 24,
    front: "What is the difference between share permissions and NTFS permissions?",
    back: "Share permissions: control network access to shared folder (Read, Change, Full Control). NTFS permissions: control local and network access (more granular). Both apply to network access - most restrictive wins."
  },
  {
    id: 25,
    front: "How do you check what file system a drive uses?",
    back: "Right-click drive in File Explorer → Properties → General tab shows 'File system'. Or use Disk Management, or command line: fsutil fsinfo volumeinfo [drive letter]."
  },
  {
    id: 26,
    front: "Can you convert FAT32 to NTFS without data loss?",
    back: "Yes - use convert command: convert [drive]: /fs:ntfs (e.g., convert D: /fs:ntfs). Non-destructive conversion, preserves data. Cannot convert back to FAT32 without formatting. Backup first as precaution."
  },
  {
    id: 27,
    front: "What view modes are available in File Explorer?",
    back: "Extra large/Large/Medium/Small icons, List, Details (columns with info), Tiles, Content. View → choose mode. Details view shows size, date modified, type - most informative for file management."
  },
  {
    id: 28,
    front: "What is the This PC view in File Explorer?",
    back: "Shows all drives, device storage capacity, user folders (Desktop, Documents, Downloads, Pictures, Videos, Music). Quick access to main storage locations. Was 'My Computer' in older Windows versions."
  }
];