export const lesson32Quiz = [
  {
    id: 1,
    question: "A user is trying to copy a 6GB video file to a USB flash drive formatted as FAT32 but receives an error message saying 'The file is too large for the destination file system.' What is the BEST solution?",
    options: [
      "Split the video file into smaller parts under 4GB each",
      "Reformat the USB drive to NTFS or exFAT",
      "Compress the video file to reduce its size",
      "Use a different USB drive with more storage space"
    ],
    correct: 1,
    explanation: "FAT32 has a maximum file size limit of 4GB, regardless of the drive's capacity. The BEST solution is to reformat the USB drive to NTFS or exFAT, both of which support files larger than 4GB. exFAT is typically preferred for removable media as it provides better compatibility with non-Windows systems while supporting large files. Splitting files or compression are workarounds but not ideal solutions."
  },
  {
    id: 2,
    question: "A law office needs to encrypt individual files containing sensitive client information on their Windows 11 Pro computers. The files must remain encrypted even if copied to another location on the same drive. Which feature should you configure?",
    options: [
      "BitLocker Drive Encryption",
      "Encrypting File System (EFS)",
      "File compression with password protection",
      "NTFS permissions to restrict access"
    ],
    correct: 1,
    explanation: "EFS (Encrypting File System) encrypts individual files and folders on NTFS volumes. Files remain encrypted when moved or copied to other NTFS locations on the same computer. BitLocker encrypts entire drives, not individual files. File compression doesn't provide encryption, and NTFS permissions control access but don't encrypt the data. EFS is the correct solution for file-level encryption."
  },
  {
    id: 3,
    question: "An administrator wants to limit how much disk space each user can consume on a shared Windows Server file server. The server uses NTFS. What feature should they configure?",
    options: [
      "File compression to save space automatically",
      "Disk quotas to set per-user storage limits",
      "Storage Spaces to pool available storage",
      "ReFS for better space management"
    ],
    correct: 1,
    explanation: "Disk quotas are an NTFS feature that allows administrators to set limits on how much disk space individual users can consume on a volume. This prevents any single user from filling up the entire drive. File compression saves space but doesn't limit users. Storage Spaces is for pooling physical drives. ReFS is a file system but doesn't inherently limit user storage."
  },
  {
    id: 4,
    question: "A photography studio needs to format a 2TB external hard drive that will be shared between Windows PCs and Mac computers. The drive will store RAW photo files, many exceeding 5GB. Which file system should you use?",
    options: [
      "NTFS - it's the most reliable",
      "FAT32 - it works on all systems",
      "exFAT - it supports large files and cross-platform compatibility",
      "ReFS - it's designed for large files"
    ],
    correct: 2,
    explanation: "exFAT is the BEST choice for this scenario because it supports files larger than 4GB (unlike FAT32) and is natively supported by both Windows and macOS without additional drivers (unlike NTFS, which macOS can only read but not write to by default). ReFS is Windows-only and not suitable for cross-platform use. exFAT is specifically designed for flash storage and external drives used across different operating systems."
  },
  {
    id: 5,
    question: "A user notices that a folder icon has a small padlock symbol on it. When they try to open files in the folder on a different computer, they get an 'Access Denied' error. What is the MOST likely cause?",
    options: [
      "The folder has NTFS permissions restricting access",
      "The folder is compressed",
      "The folder is encrypted with EFS",
      "The folder has the Read-only attribute set"
    ],
    correct: 2,
    explanation: "A padlock icon on a folder indicates EFS (Encrypting File System) encryption. EFS-encrypted files are tied to the user account and computer that encrypted them. When accessed on a different computer or by a different user, access is denied because the encryption keys are not available. NTFS permissions don't show a padlock icon, compressed folders show blue arrows, and read-only wouldn't prevent access entirely."
  },
  {
    id: 6,
    question: "An IT technician needs to view hidden system files to troubleshoot a Windows startup issue. What should they do in File Explorer?",
    options: [
      "Right-click the drive and select 'Show hidden files'",
      "Go to View tab > Options > View > Show hidden files, folders, and drives",
      "Open Command Prompt and use the 'attrib -h' command",
      "Enable Developer Mode in Windows Settings"
    ],
    correct: 1,
    explanation: "To show hidden files in File Explorer, go to the View tab > Options (or Folder Options) > View tab, then select 'Show hidden files, folders, and drives.' For system files specifically, you also need to uncheck 'Hide protected operating system files.' This is the standard GUI method. The 'attrib' command can change file attributes but doesn't affect File Explorer's view settings. There's no right-click option for this, and Developer Mode is unrelated."
  },
  {
    id: 7,
    question: "A user wants to save disk space on their NTFS drive by compressing a folder containing old project documents. They right-click the folder and see 'Compress contents to save disk space' is grayed out. What is the MOST likely reason?",
    options: [
      "The folder is already compressed",
      "The folder is encrypted with EFS",
      "NTFS compression requires administrator rights",
      "The drive is formatted as FAT32, not NTFS"
    ],
    correct: 1,
    explanation: "NTFS does not allow both compression and encryption on the same file or folder - you must choose one or the other. If a folder is encrypted with EFS, the compression option will be unavailable (grayed out). If the folder were already compressed, the option would show 'Uncompress contents.' Most users can compress files without admin rights on their own files. If the drive were FAT32, the option wouldn't appear at all since FAT32 doesn't support compression."
  },
  {
    id: 8,
    question: "A small business is setting up a new file server that will store critical business data requiring maximum reliability and automatic error correction. The server has Windows Server 2022. Which file system should they use?",
    options: [
      "NTFS for maximum compatibility",
      "exFAT for better performance",
      "FAT32 for simplicity",
      "ReFS for resilience and data integrity"
    ],
    correct: 3,
    explanation: "ReFS (Resilient File System) is designed specifically for server environments requiring maximum data integrity and automatic error correction. It provides built-in resilience against data corruption, automatic integrity checking, and better handling of large volumes. While NTFS is reliable, ReFS offers superior data protection features ideal for critical business data on servers. exFAT and FAT32 are not appropriate for server environments requiring maximum reliability."
  },
  {
    id: 9,
    question: "A user double-clicks a .PDF file but it opens in Microsoft Edge instead of Adobe Acrobat Reader as they prefer. What is the BEST way to fix this?",
    options: [
      "Uninstall Microsoft Edge from the computer",
      "Right-click the PDF, choose 'Open with,' select Adobe Reader, and check 'Always use this app'",
      "Reinstall Adobe Acrobat Reader",
      "Change the file extension from .PDF to .ADOBEPDF"
    ],
    correct: 1,
    explanation: "The BEST solution is to change the file association by right-clicking the PDF file, selecting 'Open with,' choosing Adobe Acrobat Reader, and checking the box 'Always use this app to open .pdf files.' This sets Adobe Reader as the default application for all PDF files. Uninstalling Edge is not recommended and won't solve the problem. Reinstalling Adobe Reader won't change the file association. Changing file extensions is incorrect and would break the file."
  },
  {
    id: 10,
    question: "An administrator needs to identify which files were recently modified for backup purposes. Which file attribute tracks when a file has been changed?",
    options: [
      "Read-only attribute",
      "Hidden attribute",
      "Archive attribute",
      "System attribute"
    ],
    correct: 2,
    explanation: "The Archive attribute is automatically set by Windows whenever a file is created or modified. Backup software uses this attribute to identify which files need to be backed up since the last backup. After backing up, the software typically clears the archive bit. Read-only prevents modifications, Hidden makes files invisible in normal views, and System marks files as operating system files. Only Archive tracks changes for backup purposes."
  },
  {
    id: 11,
    question: "A user calls saying they can't delete a file. The error message states 'You need permission from SYSTEM to delete this file.' The file is on an NTFS volume. What is the MOST likely cause?",
    options: [
      "The file is encrypted with EFS",
      "The file is compressed",
      "The file has NTFS permissions restricting deletion",
      "The file has the Read-only attribute set"
    ],
    correct: 2,
    explanation: "When a user receives a message about needing permission from 'SYSTEM' or another user to delete a file, this indicates NTFS permissions are preventing the action. The file's security settings don't grant the current user the necessary Delete permission. EFS encryption would give an 'Access Denied' message but not specifically about permissions. Compression doesn't affect deletion. Read-only would give a different error and can be easily overridden."
  },
  {
    id: 12,
    question: "A user wants to free up space on their Windows laptop by compressing their Documents folder. The drive is formatted as NTFS. After enabling compression, they notice the folder name is now displayed in blue. What does this indicate?",
    options: [
      "An error occurred during compression",
      "The folder is now encrypted",
      "The folder is successfully compressed",
      "The folder is now read-only"
    ],
    correct: 2,
    explanation: "In Windows File Explorer, compressed files and folders on NTFS volumes are displayed in blue text by default to visually indicate they are compressed. This is normal behavior and confirms the compression was successful. Encrypted folders show a padlock icon. Read-only and errors don't change the text color. This color coding helps users quickly identify compressed items."
  },
  {
    id: 13,
    question: "A company has an old application that only works with FAT32. They need to install it on a modern Windows 11 computer with a 500GB NTFS system drive. What is the BEST approach?",
    options: [
      "Reformat the entire system drive to FAT32",
      "Create a separate FAT32 partition for the application",
      "Use a virtual machine with FAT32 formatting",
      "Convert the NTFS drive to FAT32 using Windows tools"
    ],
    correct: 2,
    explanation: "The BEST approach is to use a virtual machine with a FAT32-formatted virtual drive. This isolates the legacy application without compromising the main system. Reformatting the system drive to FAT32 would require reinstalling Windows and would lose NTFS features like file permissions and large file support. Creating a FAT32 partition is possible but doesn't address application compatibility. Windows cannot convert NTFS to FAT32 without data loss."
  },
  {
    id: 14,
    question: "A user working on confidential financial reports wants to ensure nobody can see the file names when looking at their File Explorer. Which file attribute should they set?",
    options: [
      "Read-only",
      "Hidden",
      "Archive",
      "System"
    ],
    correct: 1,
    explanation: "Setting the Hidden attribute will prevent files from displaying in File Explorer by default. Users can still access them by typing the full path or enabling 'Show hidden files' in Folder Options, but casual observers won't see them. Read-only prevents modification but doesn't hide files. Archive is for backup tracking. System is for operating system files. For true security, the user should use EFS encryption or NTFS permissions, not just the Hidden attribute."
  },
  {
    id: 15,
    question: "An organization is replacing their old file server that uses NTFS with a new server. The IT manager asks whether they should upgrade to ReFS. The server stores general office documents and has no special requirements. What is the BEST recommendation?",
    options: [
      "Upgrade to ReFS for better performance",
      "Upgrade to ReFS since it's newer technology",
      "Keep NTFS unless specific ReFS features are needed",
      "Use exFAT for better cross-platform support"
    ],
    correct: 2,
    explanation: "For general office document storage without specific requirements for maximum data integrity or very large volumes, NTFS remains the BEST choice. ReFS is designed for specific scenarios like large-scale storage systems, high-resilience environments, and Storage Spaces Direct. It lacks some NTFS features like EFS encryption, disk quotas, and compression. Unless the organization has specific needs that ReFS addresses, NTFS is more appropriate. exFAT is for removable media, not file servers."
  }
];