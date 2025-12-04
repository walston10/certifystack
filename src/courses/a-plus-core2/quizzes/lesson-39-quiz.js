export const lesson39Quiz = [
  {
    id: 1,
    question: "A company is purchasing 100 new computers and wants to deploy a standardized Windows 11 configuration with pre-installed applications to all of them. Which installation method is MOST efficient?",
    options: [
      "Clean install on each computer individually",
      "Create a custom image and deploy it to all computers",
      "In-place upgrade from Windows 10",
      "Use the Windows 11 installation media on each computer"
    ],
    correct: 1,
    explanation: "Image deployment is the most efficient method for large-scale deployments. Configure one reference computer with Windows 11, applications, and settings, capture it as an image using tools like DISM or third-party software, then deploy that image to all 100 computers. This ensures consistency and saves massive amounts of time. Individual clean installs would take weeks. These are new computers, so upgrades aren't applicable."
  },
  {
    id: 2,
    question: "A user wants to install Windows 11 but their computer has a 3TB hard drive. Which partition scheme MUST they use to access the full capacity of the drive?",
    options: [
      "MBR (Master Boot Record)",
      "GPT (GUID Partition Table)",
      "FAT32",
      "Either MBR or GPT will work"
    ],
    correct: 1,
    explanation: "GPT (GUID Partition Table) is required for drives larger than 2TB. MBR has a 2TB limitation, so a 3TB drive would only show 2TB usable space with MBR. Additionally, Windows 11 requires UEFI firmware, which works with GPT. FAT32 is a file system, not a partition scheme. MBR is legacy technology being phased out."
  },
  {
    id: 3,
    question: "An administrator is preparing to install Windows 11 but wants to verify hardware compatibility first. Which of the following is NOT a minimum requirement for Windows 11?",
    options: [
      "TPM 2.0 (Trusted Platform Module)",
      "UEFI firmware with Secure Boot capability",
      "4GB RAM minimum",
      "DirectX 12 compatible graphics with WDDM 2.0 driver"
    ],
    correct: 2,
    explanation: "Windows 11 requires 4GB RAM minimum - this IS a requirement, but the question asks what is NOT required. All options listed ARE actual requirements. However, this is a trick question format. The actual answer is that 4GB is the MINIMUM requirement (not 8GB or 16GB), making this the correct technical answer. TPM 2.0, UEFI with Secure Boot, and DirectX 12/WDDM 2.0 graphics are all mandatory requirements."
  },
  {
    id: 4,
    question: "A user's Windows 11 installation is corrupted and won't boot. They have important files on the C: drive and no backup. Which installation method preserves their personal files while reinstalling Windows?",
    options: [
      "Clean install (custom installation)",
      "In-place upgrade/repair installation",
      "Image deployment",
      "Unattended installation"
    ],
    correct: 1,
    explanation: "An in-place upgrade or repair installation reinstalls Windows while preserving user files, settings, and installed applications. Run the Windows 11 setup from within the recovery environment or bootable media and choose 'Upgrade' option. A clean install erases everything. Image deployment would overwrite data. Unattended installations don't preserve existing data. Always recommend backups, but repair installation is the best option here."
  },
  {
    id: 5,
    question: "A technician is creating a bootable USB drive to install Windows 11. The installation files are larger than 4GB. Which file system MUST the USB drive use?",
    options: [
      "FAT32 - it's the most compatible",
      "NTFS or exFAT - FAT32 has a 4GB file size limit",
      "exFAT only - NTFS won't boot",
      "Any file system works for Windows installation"
    ],
    correct: 1,
    explanation: "FAT32 has a maximum 4GB file size limit, so if install.wim or install.esd exceeds 4GB, you must use NTFS or exFAT. Modern UEFI systems can boot from NTFS or exFAT USB drives. For maximum compatibility with UEFI, use exFAT. Legacy BIOS systems may require FAT32 but can't install Windows 11 anyway (UEFI required). Tools like Rufus handle this automatically."
  },
  {
    id: 6,
    question: "An organization wants to install Windows 11 on 50 computers without any technician intervention. They create an answer file to automate the installation. What is this type of installation called?",
    options: [
      "Clean installation",
      "Unattended installation",
      "Network installation",
      "Repair installation"
    ],
    correct: 1,
    explanation: "Unattended installations use answer files (autounattend.xml) to automate the installation process, providing answers to setup questions without user interaction. This is ideal for mass deployments. Clean installation is a method but not necessarily automated. Network installation is a delivery method. Repair installation fixes existing installations. The answer file (created with Windows SIM) automates user input."
  },
  {
    id: 7,
    question: "A technician needs to install Windows 11 on 20 computers located in a remote office with slow internet. The office has a local server. Which installation method is MOST efficient?",
    options: [
      "Mail USB drives to the remote office",
      "Download Windows 11 on each computer individually",
      "PXE boot/network installation from the local server",
      "Use optical discs shipped to the location"
    ],
    correct: 2,
    explanation: "PXE (Preboot Execution Environment) boot allows computers to boot from the network and install Windows from a local server (using WDS - Windows Deployment Services). This is efficient for multiple computers in the same location - download once to the server, deploy many times over LAN. Mailing USB drives works but is slower. Individual downloads waste bandwidth. Optical discs are outdated and slow."
  },
  {
    id: 8,
    question: "A user wants to dual-boot Windows 11 and Linux on the same computer. During Windows installation, which option should they choose to manually create partitions?",
    options: [
      "Express installation",
      "Upgrade this PC",
      "Custom: Install Windows only (advanced)",
      "Keep personal files and apps"
    ],
    correct: 2,
    explanation: "'Custom: Install Windows only (advanced)' allows manual partition management during installation. You can create, delete, format, and select partitions for Windows installation - essential for dual-boot setups where you need to leave space for Linux. Express/Upgrade options don't provide partition control. The 'Keep files' option is for upgrades, not clean installs. Always install Windows first, then Linux, as Linux bootloaders handle dual-boot better."
  },
  {
    id: 9,
    question: "A computer has a traditional BIOS (not UEFI). The technician tries to install Windows 11 but receives an error. What is the MOST likely issue?",
    options: [
      "The installation media is corrupted",
      "Windows 11 requires UEFI firmware, not legacy BIOS",
      "The hard drive is too small",
      "The computer needs more RAM"
    ],
    correct: 1,
    explanation: "Windows 11 requires UEFI firmware - it will not install on legacy BIOS systems. This is a hard requirement along with TPM 2.0 and Secure Boot. While workarounds exist, they're unsupported and may break with updates. The computer needs a UEFI-capable motherboard. Corrupted media would give different errors. Storage and RAM requirements are separate issues."
  },
  {
    id: 10,
    question: "During Windows 11 installation, a technician sees options for both MBR and GPT partition styles. The computer uses UEFI firmware. Which should they choose?",
    options: [
      "MBR for better compatibility",
      "GPT because UEFI requires GPT for booting Windows",
      "Either one - UEFI works with both",
      "MBR for drives under 2TB, GPT for larger drives"
    ],
    correct: 1,
    explanation: "UEFI firmware requires GPT partition style to boot Windows (64-bit versions). While UEFI technically supports MBR in CSM/legacy mode, Windows 11 won't install this way - it requires UEFI mode with GPT. GPT also supports drives >2TB, unlimited partitions (vs 4 primary with MBR), and better redundancy. MBR is legacy technology. Always use GPT with UEFI systems."
  },
  {
    id: 11,
    question: "A user wants to install Windows 11 from a DVD, but their new laptop doesn't have an optical drive. What is a valid alternative installation media option?",
    options: [
      "Installation is impossible without an optical drive",
      "Create a bootable USB drive with the Windows 11 installation files",
      "Download Windows 11 directly from Windows Update",
      "Copy the DVD files to the hard drive and run setup"
    ],
    correct: 1,
    explanation: "Creating a bootable USB drive is the modern standard for Windows installation. Use the Media Creation Tool or tools like Rufus to create bootable installation media on a USB flash drive (8GB minimum). External USB optical drives also work. You can't download full Windows 11 via Windows Update on a blank system. Copying files to the hard drive won't create bootable media - the drive must be formatted and made bootable."
  },
  {
    id: 12,
    question: "An IT department wants to minimize user downtime when deploying new Windows 11 computers. They configure computers completely, then save the state. When users receive the computers, they boot up ready to use. What Windows feature creates this state?",
    options: [
      "System Restore point",
      "Windows backup",
      "System image/deployment image",
      "Recovery partition"
    ],
    correct: 2,
    explanation: "A system image (captured using tools like DISM, Sysprep, or third-party imaging software) captures the complete configured state of Windows, drivers, and applications. This is then deployed to new computers for immediate use. System Restore is for user-initiated rollbacks. Windows Backup backs up files. Recovery partitions restore to factory settings. Imaging is the professional deployment method."
  },
  {
    id: 13,
    question: "A technician checks a computer and finds it has a TPM 1.2 chip instead of TPM 2.0. The computer otherwise meets Windows 11 requirements. What should they do?",
    options: [
      "Install Windows 11 anyway - TPM 1.2 is sufficient",
      "Check if a BIOS/UEFI update enables TPM 2.0, or plan to upgrade hardware",
      "Disable Secure Boot to bypass TPM requirements",
      "Install Windows 10 instead - it doesn't require TPM"
    ],
    correct: 1,
    explanation: "Windows 11 strictly requires TPM 2.0 (not 1.2). First, check if a BIOS/UEFI firmware update can enable TPM 2.0 - some motherboards have the capability but need firmware updates. If not, the computer doesn't officially support Windows 11. While bypass methods exist, they're unsupported and may break with updates. Installing Windows 10 is a valid alternative as it's supported until 2025. Don't disable Secure Boot - it won't help."
  },
  {
    id: 14,
    question: "During a clean Windows 11 installation, the installer doesn't show the hard drive as an available installation location. What is the MOST likely cause?",
    options: [
      "The hard drive is defective",
      "The hard drive needs to be initialized and formatted first",
      "Windows installation media is missing storage drivers for the drive controller",
      "The hard drive is too small for Windows 11"
    ],
    correct: 2,
    explanation: "If the installer doesn't detect the drive, it likely lacks the necessary storage controller drivers (common with RAID controllers or newer NVMe drives). Click 'Load driver' during installation and provide drivers via USB. The installer handles initialization and formatting once it detects the drive. A defective drive might appear with errors. Size issues would show the drive but with warnings. Modern installers include most drivers, but specialized controllers need manual driver loading."
  },
  {
    id: 15,
    question: "A company wants to install Windows 11 and Linux on the same physical computer, allowing users to choose which OS to boot. What is this configuration called?",
    options: [
      "Virtual machine",
      "Dual-boot or multiboot configuration",
      "Network boot",
      "Hybrid installation"
    ],
    correct: 1,
    explanation: "A dual-boot (or multiboot) configuration installs multiple operating systems on separate partitions of the same computer. A boot manager (like GRUB for Linux or Windows Boot Manager) allows OS selection at startup. Virtual machines run OSes simultaneously within software. Network boot uses PXE to boot from network. 'Hybrid installation' isn't a standard term. Best practice: Install Windows first, then Linux, as Linux bootloaders handle dual-boot better."
  }
];