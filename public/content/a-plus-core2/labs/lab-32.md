# Lab 32: Windows File Systems and Management

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 1.2 - Given a scenario, use the appropriate Microsoft command-line tool / 1.3 - Given a scenario, use features and tools of the Microsoft Windows 10 operating system (file systems)

---

## Section 1: Concept Check (5 min)

Answer these questions based on your current knowledge:

1. What are the three main file systems used in Windows, and what is the primary use case for each?

2. You're formatting a 256GB USB drive that will hold video files larger than 4GB. A coworker suggests FAT32 for compatibility. Why is this problematic, and what file system should you use instead?

3. What does NTFS offer that FAT32 doesn't? List at least four features exclusive to NTFS.

4. A user's drive shows files taking up space, but when they open the folder, some files are "invisible." What file attribute might be causing this, and how would you reveal them?

5. Explain the difference between file compression and file encryption in NTFS. Can you use both on the same file?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Identify Your File Systems

**Goal:** Discover which file systems are in use on your computer.

**Step 1:** Open Disk Management

Press `Windows + R`, type `diskmgmt.msc`, and press Enter.

Document each partition/volume:

| Drive Letter | Volume Label | File System | Size | Status |
|--------------|--------------|-------------|------|--------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

**Step 2:** Verify via Command Prompt

Open Command Prompt and run:
```
wmic logicaldisk get caption,filesystem,size,freespace
```

Does the output match your Disk Management findings?

**Question:** Why might you see both NTFS and FAT32 on the same computer?

---

#### Activity B: File System Comparison Table

**Goal:** Understand the key differences between Windows file systems.

Complete this comparison table:

| Feature | FAT32 | exFAT | NTFS |
|---------|-------|-------|------|
| Maximum file size | | | |
| Maximum volume size (practical) | | | |
| File permissions (security) | | | |
| Encryption (EFS) | | | |
| Compression | | | |
| Disk quotas | | | |
| Journaling (recovery) | | | |
| Best use case | | | |
| macOS compatibility (read/write) | | | |
| Linux compatibility (native) | | | |

---

#### Activity C: File Attributes Deep Dive

**Goal:** Understand and manipulate file attributes.

**Step 1:** Create a test folder

Open Command Prompt and run:
```
mkdir C:\TestAttributes
cd C:\TestAttributes
echo "Test content" > testfile.txt
```

**Step 2:** View current attributes

Run: `attrib testfile.txt`

What attributes are shown? _______________

**Step 3:** Explore each attribute

Use the `attrib` command to set each attribute, then observe the effect:

| Attribute | Command to Set | Command to Remove | Effect Observed |
|-----------|---------------|-------------------|-----------------|
| Read-only (R) | `attrib +R testfile.txt` | `attrib -R testfile.txt` | |
| Hidden (H) | `attrib +H testfile.txt` | `attrib -H testfile.txt` | |
| System (S) | `attrib +S testfile.txt` | `attrib -S testfile.txt` | |
| Archive (A) | `attrib +A testfile.txt` | `attrib -A testfile.txt` | |

**Step 4:** Try to delete a read-only file

Set the file as read-only, then try:
```
del testfile.txt
```

What happens? _______________

**Step 5:** Combine attributes

Set the file as both Hidden AND System:
```
attrib +H +S testfile.txt
```

Can you see the file in File Explorer now, even with "Show hidden files" enabled?

What additional setting must you change? _______________

**Cleanup:** 
```
attrib -H -S -R testfile.txt
del testfile.txt
rmdir C:\TestAttributes
```

---

#### Activity D: NTFS Compression

**Goal:** Experience NTFS compression firsthand.

**Step 1:** Create a test folder with files

```
mkdir C:\CompressionTest
cd C:\CompressionTest
fsutil file createnew largefile.txt 10485760
```

This creates a 10MB file. Note: It will be filled with zeros.

**Step 2:** Check the file size

Right-click the file → Properties

| Property | Value |
|----------|-------|
| Size | |
| Size on disk | |

**Step 3:** Enable NTFS compression

Right-click the file → Properties → Advanced → Check "Compress contents to save disk space" → OK → OK

Check properties again:

| Property | Before Compression | After Compression |
|----------|-------------------|-------------------|
| Size | | |
| Size on disk | | |

**Question:** Why is the "Size on disk" much smaller for a file full of zeros?

**Step 4:** View compressed files visually

Open File Explorer Options:
- View tab → Check "Show encrypted or compressed NTFS files in color"

What color does the compressed file appear? _______________

**Cleanup:**
```
del C:\CompressionTest\largefile.txt
rmdir C:\CompressionTest
```

---

#### Activity E: File Explorer Navigation Mastery

**Goal:** Become efficient with File Explorer navigation.

**Step 1:** Navigation shortcuts

Practice these keyboard shortcuts and document what each does:

| Shortcut | Action |
|----------|--------|
| `Windows + E` | |
| `Alt + D` | |
| `Ctrl + L` | |
| `Ctrl + Shift + N` | |
| `Alt + Up Arrow` | |
| `Alt + Left Arrow` | |
| `Alt + Right Arrow` | |
| `Ctrl + F` or `F3` | |
| `Ctrl + Shift + E` | |
| `Alt + P` | |

**Step 2:** Quick Access locations

Navigate to each special folder by typing in the address bar:

| Location | What You Type | Contents Found |
|----------|---------------|----------------|
| Desktop | shell:desktop | |
| Downloads | shell:downloads | |
| Documents | shell:personal | |
| AppData (hidden) | %appdata% | |
| Program Files | %programfiles% | |
| System32 | %systemroot%\system32 | |
| Temp folder | %temp% | |

**Step 3:** Search operators

In any folder, use the search box with these operators:

| Operator | Example | What It Finds |
|----------|---------|---------------|
| Extension | *.txt | |
| Size | size:>100MB | |
| Date modified | datemodified:this week | |
| Kind | kind:document | |
| Combine | *.log size:<1MB | |

---

#### Activity F: Understanding File Permissions (NTFS)

**Goal:** See NTFS permissions in action.

**Step 1:** View permissions on a system file

Navigate to `C:\Windows\System32`

Right-click on `cmd.exe` → Properties → Security tab

Document the permissions:

| User/Group | Permissions Listed |
|------------|-------------------|
| SYSTEM | |
| Administrators | |
| Users | |
| TrustedInstaller | |

**Step 2:** View effective access

On the Security tab, click "Advanced" → "Effective Access" tab

Check your username. What effective permissions do you have?

| Permission | Allowed? |
|------------|----------|
| Full control | |
| Modify | |
| Read & execute | |
| Read | |
| Write | |

**Step 3:** Understand permission inheritance

Create a new folder: `C:\PermTest`

Right-click → Properties → Security → Advanced

Is "Inheritance" enabled? _______________

Where are the permissions inherited from? _______________

**Cleanup:** Delete C:\PermTest

---

## Section 3: Reflection (5 min)

Consider these real-world scenarios:

**Scenario 1:** An employee complains that they can't copy a 6GB video file to their USB flash drive. The drive has 32GB free space and is formatted FAT32. They need the drive to work on both Windows and Mac computers. What's the best solution?

**Scenario 2:** A user accidentally deleted important files from their NTFS drive and immediately called you. The Recycle Bin was already emptied. You remember that NTFS has journaling. Will the journal help recover the deleted files? Why or why not?

**Scenario 3:** A laptop was stolen from your company. It contained sensitive customer data. The drive was NTFS but BitLocker wasn't enabled. The data WAS stored in folders with NTFS encryption (EFS) enabled. Is the data safe? What's the critical factor?

**Scenario 4:** You're setting up a photography studio's file server. They have 50,000+ RAW image files averaging 50MB each. They want compression to save space but worry about performance. What would you recommend regarding NTFS compression for this use case?

---

## What You Learned Today

- ✅ How to identify file systems on your drives
- ✅ The differences between FAT32, exFAT, and NTFS
- ✅ File size and feature limitations of each file system
- ✅ How to view and modify file attributes (RHSA)
- ✅ How NTFS compression works
- ✅ File Explorer navigation shortcuts and search operators
- ✅ NTFS file permissions and inheritance
- ✅ Real-world scenarios for choosing file systems

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    FILE SYSTEMS QUICK REFERENCE                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FILE SYSTEM COMPARISON                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  FAT32:   4 GB max file │ 2 TB max volume │ No security │ Universal       ║
║  exFAT:   16 EB max file │ 128 PB max volume │ No security │ Flash drives ║
║  NTFS:    16 EB max file │ 256 TB max volume │ Full security │ Windows    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  NTFS EXCLUSIVE FEATURES                                                   ║
║  ─────────────────────────────────────────────────────────────────────────║
║  • File/folder permissions    • Encryption (EFS)    • Compression         ║
║  • Disk quotas               • Journaling          • Shadow copies        ║
║  • Symbolic links            • Hard links          • Alternate data streams║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FILE ATTRIBUTES (RHSA)                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  R = Read-only    │ Prevents modification and deletion                    ║
║  H = Hidden       │ Doesn't appear in normal folder listings              ║
║  S = System       │ Critical OS file, extra hidden protection             ║
║  A = Archive      │ File changed since last backup                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Commands: attrib +R file.txt (set) │ attrib -R file.txt (remove)         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SPECIAL SHELL PATHS                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  shell:desktop     │  shell:downloads   │  shell:personal (Documents)     ║
║  %appdata%         │  %temp%            │  %systemroot% (C:\Windows)      ║
║  %programfiles%    │  %userprofile%     │  %systemdrive% (C:)             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMPRESSION vs ENCRYPTION (NTFS)                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Compression: Saves space, slight CPU overhead, folder shows BLUE         ║
║  Encryption:  Protects data, tied to user account, folder shows GREEN     ║
║  Cannot use BOTH on the same file (mutually exclusive in NTFS)            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```