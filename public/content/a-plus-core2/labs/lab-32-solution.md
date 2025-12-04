# Lab 32: Windows File Systems and Management - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Three Main File Systems

| File System | Primary Use Case |
|-------------|------------------|
| **FAT32** | USB flash drives, SD cards, legacy devices. Maximum compatibility across operating systems but 4GB file size limit. |
| **exFAT** | Large USB drives, SD cards for cameras/video (files >4GB). Cross-platform compatible without FAT32 limitations. |
| **NTFS** | Windows system drives, internal drives, external drives used primarily with Windows. Full security and feature set. |

---

### Question 2: FAT32 4GB Limitation

**Problem:** FAT32 has a maximum file size limit of 4GB (4,294,967,295 bytes specifically). Video files, especially high-resolution footage, frequently exceed this limit.

**Solution:** Format the USB drive as **exFAT** instead.

**Why exFAT:**
- No practical file size limit (theoretical max: 16 exabytes)
- Native read/write support on Windows, macOS, and most modern devices
- Designed specifically for flash storage
- No unnecessary overhead of NTFS permissions

**Note:** Avoid NTFS for USB drives used with Macs because macOS can only READ NTFS natively (requires third-party software to write).

---

### Question 3: NTFS Exclusive Features

Features NTFS offers that FAT32 doesn't:

1. **File and folder permissions** - Granular access control (read, write, execute, etc.)
2. **Encryption (EFS)** - Encrypting File System to protect individual files/folders
3. **Compression** - Built-in file compression to save disk space
4. **Disk quotas** - Limit how much space users can consume
5. **Journaling** - Transaction log for filesystem recovery after crashes
6. **Symbolic links and hard links** - Advanced file linking
7. **Alternate Data Streams (ADS)** - Store metadata alongside files
8. **Shadow copies** - Previous versions of files for recovery
9. **Large file support** - No practical file size limit
10. **Sparse files** - Efficient storage for files with empty sections

---

### Question 4: Hidden Files

The file attribute causing "invisible" files is most likely the **Hidden (H)** attribute, possibly combined with the **System (S)** attribute.

**To reveal hidden files:**
1. File Explorer → View tab → Check "Hidden items"

**To reveal system files (Hidden + System):**
1. File Explorer → View → Options → View tab
2. Uncheck "Hide protected operating system files (Recommended)"
3. Click Yes on the warning

**Or via command line:**
```
attrib -H -S filename.ext
```

---

### Question 5: Compression vs Encryption

| Feature | Compression | Encryption (EFS) |
|---------|------------|------------------|
| Purpose | Save disk space | Protect data from unauthorized access |
| CPU impact | Minor (on access) | Moderate (encrypt/decrypt operations) |
| Visual indicator | Blue filename in Explorer | Green filename in Explorer |
| Who can access | Anyone with file access | Only the encrypting user (and recovery agents) |
| Data at rest | Readable by anyone with disk access | Unreadable without encryption key |

**Can you use both on the same file?**

**No.** NTFS compression and encryption are mutually exclusive. When you enable one, the other is automatically disabled.

- If you compress an encrypted file, it becomes unencrypted
- If you encrypt a compressed file, it becomes uncompressed

This is because encryption needs the raw data to encrypt, and compression works on the raw file structure.

---

## Section 2: Activities - Answers

### Activity A: Identify Your File Systems

**Example Disk Management output:**

| Drive Letter | Volume Label | File System | Size | Status |
|--------------|--------------|-------------|------|--------|
| C: | Windows | NTFS | 476 GB | Healthy (Boot, Page File, Crash Dump, Primary) |
| D: | Data | NTFS | 1 TB | Healthy |
| E: | USB Drive | exFAT | 64 GB | Healthy |
| (No letter) | System Reserved | NTFS | 500 MB | Healthy (System, Active) |
| (No letter) | Recovery | NTFS | 650 MB | Healthy (Recovery) |

**Why both NTFS and FAT32 on the same computer:**
- USB flash drives often come pre-formatted as FAT32
- SD cards are typically FAT32 or exFAT
- Some bootable USB drives require FAT32
- Legacy compatibility with older devices
- Dual-boot systems may have FAT32 for UEFI boot

---

### Activity B: File System Comparison

| Feature | FAT32 | exFAT | NTFS |
|---------|-------|-------|------|
| Maximum file size | 4 GB | 16 EB (practical: no limit) | 16 EB (practical: no limit) |
| Maximum volume size | 2 TB (practical) | 128 PB | 256 TB |
| File permissions | ❌ No | ❌ No | ✅ Yes |
| Encryption (EFS) | ❌ No | ❌ No | ✅ Yes |
| Compression | ❌ No | ❌ No | ✅ Yes |
| Disk quotas | ❌ No | ❌ No | ✅ Yes |
| Journaling | ❌ No | ❌ No | ✅ Yes |
| Best use case | Small USB, legacy devices | Large USB, cameras, cross-platform | Windows internal drives |
| macOS compatibility | ✅ Read/Write | ✅ Read/Write | ⚠️ Read only (native) |
| Linux compatibility | ✅ Read/Write | ⚠️ Requires drivers | ⚠️ Requires ntfs-3g |

---

### Activity C: File Attributes

**Step 2 - Initial attributes:** `A` (Archive) - set automatically on new files

**Step 3 - Attribute effects:**

| Attribute | Effect Observed |
|-----------|-----------------|
| Read-only (R) | Cannot modify or delete file; "Access is denied" when trying to delete |
| Hidden (H) | File disappears from normal folder view; visible with "Show hidden items" |
| System (S) | File hidden even with "Show hidden items"; requires "Show protected OS files" |
| Archive (A) | No visible effect; used by backup software to identify changed files |

**Step 4 - Deleting read-only file:**
```
Access is denied.
```
The file cannot be deleted until the read-only attribute is removed.

**Step 5 - Hidden + System combination:**

With both H and S set, the file is NOT visible even with "Show hidden items" enabled.

**Additional setting required:** In Folder Options → View → uncheck "Hide protected operating system files (Recommended)"

This is how Windows protects critical system files from accidental deletion.

---

### Activity D: NTFS Compression

**Step 2 - Before compression:**

| Property | Value |
|----------|-------|
| Size | 10.0 MB (10,485,760 bytes) |
| Size on disk | 10.0 MB (10,485,760 bytes) |

**Step 3 - After compression:**

| Property | Before | After |
|----------|--------|-------|
| Size | 10.0 MB | 10.0 MB |
| Size on disk | 10.0 MB | 8 KB |

**Why the dramatic difference?**

The file was created with `fsutil file createnew`, which fills the file with null bytes (zeros). When compressed:
- NTFS recognizes the repeating pattern
- Compression algorithm stores "10 million zeros" very efficiently
- Actual disk usage drops to just the compression overhead

Real-world files with varied content won't compress as dramatically, but files with repetitive data (logs, some documents) benefit significantly.

**Compressed file color:** **Blue** (with the File Explorer Option enabled)

---

### Activity E: File Explorer Navigation

**Step 1 - Keyboard shortcuts:**

| Shortcut | Action |
|----------|--------|
| `Windows + E` | Open new File Explorer window |
| `Alt + D` | Select address bar |
| `Ctrl + L` | Select address bar (same as Alt+D) |
| `Ctrl + Shift + N` | Create new folder |
| `Alt + Up Arrow` | Go up one folder level |
| `Alt + Left Arrow` | Go back (previous location) |
| `Alt + Right Arrow` | Go forward |
| `Ctrl + F` or `F3` | Open search box |
| `Ctrl + Shift + E` | Expand folder tree in navigation pane |
| `Alt + P` | Toggle preview pane |

**Step 2 - Special folder paths:**

| Location | Path | Typical Contents |
|----------|------|------------------|
| Desktop | shell:desktop | Desktop shortcuts and files |
| Downloads | shell:downloads | Downloaded files |
| Documents | shell:personal | User documents |
| AppData | %appdata% | Application settings (Roaming) |
| Program Files | %programfiles% | 64-bit installed applications |
| System32 | %systemroot%\system32 | Windows system files |
| Temp folder | %temp% | Temporary files |

**Step 3 - Search operators:**

| Operator | What It Finds |
|----------|---------------|
| *.txt | All text files |
| size:>100MB | Files larger than 100MB |
| datemodified:this week | Files modified within the past week |
| kind:document | Word docs, PDFs, text files, etc. |
| *.log size:<1MB | Log files smaller than 1MB |

---

### Activity F: File Permissions

**Step 1 - cmd.exe permissions:**

| User/Group | Permissions |
|------------|-------------|
| SYSTEM | Full control |
| Administrators | Full control |
| Users | Read & execute, Read |
| TrustedInstaller | Full control (Owner) |

**Step 2 - Effective access for typical user:**

| Permission | Standard User | Administrator |
|------------|---------------|---------------|
| Full control | ❌ No | ✅ Yes |
| Modify | ❌ No | ✅ Yes |
| Read & execute | ✅ Yes | ✅ Yes |
| Read | ✅ Yes | ✅ Yes |
| Write | ❌ No | ✅ Yes |

**Step 3 - Permission inheritance:**

- **Inheritance enabled:** Yes (by default)
- **Inherited from:** The parent folder (C:\)

New folders inherit permissions from their parent, creating a cascading permission structure. This is why changing permissions at a high level affects all subfolders.

---

## Section 3: Reflection - Answers

### Scenario 1: 6GB File on FAT32 USB

**Solution:** Reformat the USB drive as **exFAT**.

**Steps:**
1. Back up any data currently on the USB drive
2. Right-click the drive → Format
3. Select exFAT from File System dropdown
4. Click Start

**Why exFAT and not NTFS:**
- exFAT has native read/write support on both Windows and macOS
- NTFS on macOS is read-only without third-party software
- exFAT has no file size limit
- exFAT is designed for flash storage (less write overhead than NTFS)

---

### Scenario 2: NTFS Journaling and File Recovery

**Will the journal help?** **No.**

**Why not:**

NTFS journaling records **filesystem metadata changes** (file creation, deletion, renaming, permission changes) but NOT the actual file contents.

The journal is designed for:
- Recovering the filesystem to a consistent state after a crash
- Quickly replaying incomplete transactions
- Preventing filesystem corruption

It does NOT:
- Store previous file contents
- Enable file undelete
- Act as a backup

**What could help:**
- Shadow copies/Previous Versions (if enabled)
- Third-party data recovery software (before new data overwrites)
- Backup systems

**Key exam concept:** Journaling protects filesystem integrity, not data recovery.

---

### Scenario 3: Stolen Laptop with EFS Encryption

**Is the data safe?** **It depends on one critical factor: The user's Windows password.**

**If the thief doesn't know the Windows password:**
- The EFS-encrypted files are protected
- EFS encryption keys are tied to the Windows user account
- Without logging in as that user, the files are unreadable

**However, vulnerabilities exist:**
- If the thief can reset the Windows password (many tools available), EFS keys may be lost but files remain encrypted
- If they remove the drive and access it from another computer, encrypted files appear as encrypted (unreadable)
- If a recovery agent was configured, that could be compromised

**Key point:** EFS protects data at rest, but it's tied to Windows user authentication. This is why BitLocker is preferred for true full-disk encryption—it protects before Windows even boots.

**Exam tip:** EFS encrypts files/folders, BitLocker encrypts entire drives.

---

### Scenario 4: NTFS Compression for Photography Studio

**Recommendation: Do NOT enable NTFS compression for this use case.**

**Reasons:**

1. **RAW image files are already compressed** - Photography RAW formats (CR2, NEF, ARW) use internal compression. NTFS compression won't save much additional space and adds CPU overhead.

2. **Performance impact** - With 50,000+ files being accessed regularly (previewing, editing), the constant compress/decompress operations will slow down workflow.

3. **CPU overhead** - Every file access requires decompression. Photo editing is already CPU-intensive.

4. **Minimal space savings** - Typical compression ratio for already-compressed files: maybe 5-10% savings.

5. **Better alternatives:**
   - Buy additional storage (inexpensive per-TB now)
   - Archive older projects to slower/cheaper drives
   - Use cloud storage for archival
   - Consider dedicated NAS with hardware RAID

**When NTFS compression IS good:**
- Log files (highly repetitive, rarely accessed)
- Old documents you need to keep but rarely open
- Development files (source code compresses well)
- Situations where storage cost matters more than performance

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