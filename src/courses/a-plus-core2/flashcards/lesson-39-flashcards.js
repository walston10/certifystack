export const lesson39Flashcards = [
  {
    id: 1,
    front: "What are the main Windows installation types?",
    back: "Clean install (fresh OS, erases all data), in-place upgrade (keeps files/apps), image deployment (clone pre-configured system), repair installation (fixes corrupted OS), recovery partition (factory reset), multiboot (multiple OS)."
  },
  {
    id: 2,
    front: "What is a clean install and when would you use it?",
    back: "Fresh Windows installation on formatted drive, erases all existing data. Use when: new computer, malware removal, major corruption, starting over, performance issues, changing OS. Requires backup first, reinstall all applications."
  },
  {
    id: 3,
    front: "What is an in-place upgrade?",
    back: "Upgrade Windows version while keeping files, settings, applications. Example: Windows 10 to Windows 11. Faster than clean install, preserves data. Risk: potential compatibility issues, doesn't fix existing problems."
  },
  {
    id: 4,
    front: "What is image deployment?",
    back: "Installing pre-configured system image with OS, drivers, applications. Created with tools like Windows Deployment Services (WDS), SCCM. Used for mass deployment in enterprises. Identical configuration across multiple computers."
  },
  {
    id: 5,
    front: "What is a repair installation?",
    back: "Reinstalls Windows over existing installation to fix corruption while keeping files/apps. Uses installation media, chooses 'Upgrade' option on current Windows. Fixes system file corruption without data loss."
  },
  {
    id: 6,
    front: "What is a multiboot configuration?",
    back: "Multiple operating systems on one computer - choose at startup. Separate partitions for each OS. Boot manager displays menu. Example: Windows and Linux dual-boot. Useful for testing, compatibility, different purposes."
  },
  {
    id: 7,
    front: "What installation media types can be used for Windows?",
    back: "USB flash drive (most common, fast), DVD/optical disc (older method), network installation via PXE boot, external hard drive, ISO file (virtual machines). USB recommended - fastest, reusable, 8GB+ required."
  },
  {
    id: 8,
    front: "How do you create Windows installation USB?",
    back: "Download Media Creation Tool from Microsoft, run tool, select 'Create installation media', choose USB drive (8GB+), tool downloads and creates bootable USB. Or use Rufus with Windows ISO file."
  },
  {
    id: 9,
    front: "What is PXE boot for network installation?",
    back: "Preboot Execution Environment - boot from network server instead of local drive. Requires PXE-capable network card, DHCP server, WDS/deployment server. Used in enterprise for mass deployments. No physical media needed."
  },
  {
    id: 10,
    front: "What are unattended installations?",
    back: "Automated installation using answer file (unattend.xml). Pre-configured responses for all setup questions. No user interaction during install. Created with Windows System Image Manager. Used for standardized enterprise deployments."
  },
  {
    id: 11,
    front: "What minimum system requirements for Windows 10?",
    back: "1 GHz CPU, 1GB RAM (32-bit) or 2GB (64-bit), 16GB storage (32-bit) or 32GB (64-bit), DirectX 9 graphics, 800×600 display. Practical: 4GB+ RAM recommended for good performance."
  },
  {
    id: 12,
    front: "What minimum system requirements for Windows 11?",
    back: "1 GHz 64-bit dual-core CPU, 4GB RAM, 64GB storage, UEFI firmware, TPM 2.0, Secure Boot capable, DirectX 12 graphics, 720p display. More stringent than Windows 10 - many older PCs incompatible."
  },
  {
    id: 13,
    front: "What is TPM and why does Windows 11 require it?",
    back: "Trusted Platform Module - hardware security chip storing encryption keys. TPM 2.0 required for Windows 11. Provides hardware-based security for BitLocker, Windows Hello, secure boot. Prevents unauthorized OS modifications."
  },
  {
    id: 14,
    front: "What partition schemes exist for Windows installation?",
    back: "MBR (Master Boot Record) - legacy, BIOS systems, max 2TB disks, 4 primary partitions. GPT (GUID Partition Table) - modern, UEFI systems, larger disks, 128 partitions, required for Windows 11."
  },
  {
    id: 15,
    front: "What's the difference between MBR and GPT?",
    back: "MBR: max 2TB disk, 4 primary partitions, BIOS boot, older standard. GPT: unlimited disk size, 128 partitions, UEFI boot, more reliable (backup partition table), required for modern Windows. GPT preferred for new installations."
  },
  {
    id: 16,
    front: "What's the difference between BIOS and UEFI?",
    back: "BIOS: legacy firmware, text interface, slower boot, MBR disks, 16-bit. UEFI: modern firmware, graphical interface, faster boot (Secure Boot), GPT disks, 32/64-bit, better security. UEFI required for Windows 11."
  },
  {
    id: 17,
    front: "What is Secure Boot?",
    back: "UEFI feature preventing unauthorized OS loading. Verifies digital signature of boot files. Blocks malware/rootkits from loading before OS. Required for Windows 11. Enable in UEFI/BIOS settings. Works with TPM for security."
  },
  {
    id: 18,
    front: "What is a recovery partition?",
    back: "Hidden partition containing factory restore image and recovery tools. Created by manufacturer or Windows. Use to restore PC to factory state or repair Windows. Access during boot (F11, F12, varies by manufacturer)."
  },
  {
    id: 19,
    front: "What boot options can you access during startup?",
    back: "Boot menu (F12, F2, Del - varies), UEFI/BIOS settings, boot from USB/DVD, network boot (PXE), recovery environment. Interrupt normal boot by pressing key during POST. Select boot device or enter setup."
  },
  {
    id: 20,
    front: "How do you boot from USB or DVD?",
    back: "Insert media, restart, press boot menu key (F12, F2, Del, Esc - varies by manufacturer), select USB/DVD from list. Or enter BIOS/UEFI, change boot order, save and exit. Secure Boot may need disabling."
  },
  {
    id: 21,
    front: "What are Windows editions and upgrade paths?",
    back: "Can upgrade within same version - Home to Pro, Pro to Enterprise. Cannot downgrade without clean install. Windows 10 to 11 requires compatible hardware. In-place upgrade preserves files/apps."
  },
  {
    id: 22,
    front: "What partitions are created during Windows installation?",
    back: "System partition (boot files, EFI), Recovery partition (troubleshooting tools), MSR (Microsoft Reserved - GPT only), Windows partition (C: drive). Automatic creation during setup. Can manually partition before installing."
  },
  {
    id: 23,
    front: "What happens during Windows Out-of-Box Experience (OOBE)?",
    back: "Initial setup after installation - select region/language, connect to network, create/sign in user account, privacy settings, Microsoft account connection, Cortana setup. Customize before first use."
  },
  {
    id: 24,
    front: "What is Windows Activation?",
    back: "Verifying genuine Windows license. Digital license (tied to hardware) or product key. Activation within 30 days required for full functionality. Watermark appears if not activated. Reactivation needed after major hardware changes."
  },
  {
    id: 25,
    front: "What installation troubleshooting steps should you know?",
    back: "Verify system requirements, check boot order, test installation media on another PC, disconnect unnecessary peripherals, disable Secure Boot temporarily, update BIOS/UEFI, check drive connections, verify RAM seating, try different USB port."
  },
  {
    id: 26,
    front: "What should you do before upgrading Windows?",
    back: "Backup all important data, check hardware compatibility, verify disk space, check application compatibility, ensure stable power supply, disable antivirus temporarily, disconnect unnecessary peripherals, update drivers. Cannot easily rollback after 10 days."
  },
  {
    id: 27,
    front: "What is a Windows feature update vs quality update?",
    back: "Feature update: major Windows version (twice yearly), new features, version number change (21H2, 22H2). Quality update: monthly security/bug fixes, no new features. Feature updates larger, take longer, more disruptive."
  },
  {
    id: 28,
    front: "How long does Windows keep old files after upgrade?",
    back: "10 days via Windows.old folder. Can rollback to previous version within this period. After 10 days, automatic cleanup removes old files (or manual cleanup via Settings). Use if upgrade causes problems."
  },
  {
    id: 29,
    front: "What is Windows To Go?",
    back: "Enterprise feature - Windows on USB drive, boot any compatible PC. Discontinued after Windows 10 version 2004. Portable workspace with full Windows. Required certified USB drive, Enterprise edition."
  },
  {
    id: 30,
    front: "What causes 'This PC can't run Windows 11' message?",
    back: "Missing requirements: no TPM 2.0, incompatible CPU, no UEFI (using BIOS/MBR), Secure Boot not supported, insufficient RAM/storage. Check PC Health Check app for specific issue. May need BIOS update or hardware upgrade."
  }
];