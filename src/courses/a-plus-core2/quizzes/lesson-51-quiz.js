export const lesson51Quiz = [
  {
    id: 1,
    question: "A user can ping their default gateway (192.168.1.1) successfully but cannot ping external websites like google.com by name. However, pinging Google's IP address (8.8.8.8) works. What is the MOST likely problem?",
    options: [
      "The network cable is unplugged",
      "DNS resolution is not working properly",
      "The default gateway is down",
      "The computer has no IP address"
    ],
    correct: 1,
    explanation: "Can ping gateway = local network works. Can ping external IP (8.8.8.8) = internet connectivity works. Cannot ping by hostname = DNS failure. DNS translates hostnames to IP addresses. Troubleshooting: check DNS server configuration (ipconfig /all), try flushing DNS cache (ipconfig /flushdns), verify DNS servers are reachable, try alternative DNS (8.8.8.8, 1.1.1.1). Network cable is connected (gateway ping works). Gateway is functional (internet reachable by IP). Computer has IP (local network works). DNS is the isolated problem."
  },
  {
    id: 2,
    question: "A user's computer has an IP address of 169.254.45.123 with subnet mask 255.255.0.0. They cannot access any network resources. What does this IP address indicate?",
    options: [
      "Valid static IP configuration",
      "APIPA (Automatic Private IP Addressing) - DHCP server is unreachable",
      "Valid DHCP-assigned address",
      "IPv6 address"
    ],
    correct: 1,
    explanation: "169.254.x.x addresses are APIPA (Automatic Private IP Addressing) - Windows self-assigns when DHCP is configured but no DHCP server responds. This indicates network configuration failure. APIPA allows limited local link communication but no internet/server access. Troubleshooting: check network cable, verify DHCP server is running, check switch port, run ipconfig /release then /renew. This isn't a valid static IP for production. It's not from DHCP. IPv6 uses different format. APIPA = 'I tried to get DHCP but failed.'"
  },
  {
    id: 3,
    question: "A user reports they can access local network resources (file servers, printers) but cannot access the internet or external websites. What is the MOST likely misconfiguration?",
    options: [
      "Incorrect subnet mask",
      "Incorrect or missing default gateway",
      "Wrong computer name",
      "Disabled Bluetooth"
    ],
    correct: 1,
    explanation: "Can access local network = IP, subnet mask work. Cannot access internet = routing problem. The default gateway routes traffic to external networks (internet). Missing or incorrect gateway prevents internet access while local access remains functional. Check: ipconfig (verify gateway is configured and correct), ping the gateway (verify it's reachable), tracert external site (see where routing fails). Subnet mask errors affect local communication. Computer name doesn't affect connectivity. Bluetooth is unrelated to network access."
  },
  {
    id: 4,
    question: "A user complains their computer runs very slowly. The technician opens Task Manager and sees Disk usage at 100% constantly, while CPU and Memory are below 20%. What is the MOST likely cause?",
    options: [
      "Insufficient RAM",
      "Slow or failing hard drive, or disk-intensive process running",
      "CPU overheating",
      "Too many browser tabs"
    ],
    correct: 1,
    explanation: "100% disk usage indicates disk bottleneck: failing hard drive (mechanical issues, bad sectors), Windows Update or antivirus scanning, superfetch/search indexing, disk fragmentation (HDD), malware. Troubleshooting: check Task Manager > Processes sorted by Disk to identify culprit, run chkdsk /f /r, check Event Viewer for disk errors, consider SSD upgrade. RAM is adequate (20% usage). CPU is fine. Browser tabs cause memory usage not disk. Sustained 100% disk usage dramatically slows system - address disk issues first."
  },
  {
    id: 5,
    question: "After installing new software, a DLL error appears: 'The program can't start because MSVCP140.dll is missing from your computer.' What does this indicate and how should it be fixed?",
    options: [
      "The computer is infected with a virus",
      "The program requires Microsoft Visual C++ Redistributable which is missing",
      "Windows needs to be reinstalled immediately",
      "The hard drive is failing"
    ],
    correct: 1,
    explanation: "Missing .dll errors indicate missing dependencies. MSVCP140.dll (and similar MSVCR*.dll, VCRUNTIME*.dll) are part of Microsoft Visual C++ Redistributable packages that many programs require. Solution: download and install the appropriate Visual C++ Redistributable from Microsoft (the version depends on the dll - 140 = 2015-2022). This isn't a virus. Windows reinstallation is overkill. Hard drive health is unrelated. Applications depend on various runtime libraries - install missing dependencies when errors occur."
  },
  {
    id: 6,
    question: "A networked printer worked yesterday but today all print jobs are stuck in the queue and won't print. Other users can print to the same printer. What should the affected user check FIRST?",
    options: [
      "Replace the printer immediately",
      "Restart the Print Spooler service on the affected computer",
      "Reinstall Windows",
      "Buy a new network cable"
    ],
    correct: 1,
    explanation: "Print jobs stuck in queue on one computer (while others can print) indicates local Print Spooler service issue. Solution: Services console > Print Spooler > Restart, or net stop spooler then net start spooler in Command Prompt. Also clear stuck jobs: delete files from C:\\Windows\\System32\\spool\\PRINTERS. Printer hardware is fine (others print successfully). Windows reinstallation is extreme. Network connectivity works (other network functions OK). Print Spooler service crashes are common - restart it first."
  },
  {
    id: 7,
    question: "A user's computer clock is always wrong, even after manual correction. Each restart shows incorrect date/time. What is the MOST likely hardware cause?",
    options: [
      "Faulty monitor",
      "Dead or dying CMOS battery",
      "Bad RAM",
      "Failing CPU"
    ],
    correct: 1,
    explanation: "The CMOS battery (coin cell battery on motherboard) maintains BIOS settings and system clock when computer is powered off. Symptoms of dying CMOS battery: incorrect time/date after each boot, BIOS settings reset to defaults, 'CMOS checksum error' messages. Solution: replace CR2032 (or similar) battery on motherboard. Monitor doesn't affect timekeeping. RAM and CPU failures have different symptoms. Time/date resetting consistently points to CMOS battery. Also check: time zone settings, time synchronization with internet time servers (may mask battery issue)."
  },
  {
    id: 8,
    question: "A Windows computer displays 'Checking file system on C:' during every boot and takes 10+ minutes to start. What does this indicate?",
    options: [
      "Normal Windows operation",
      "The hard drive has errors or is failing - needs diagnostics",
      "The computer is too fast",
      "Too much RAM installed"
    ],
    correct: 1,
    explanation: "Automatic chkdsk on every boot indicates: disk errors, bad sectors, file system corruption, failing hard drive. Windows schedules chkdsk when it detects problems. This is NOT normal. Troubleshooting: let chkdsk complete, check Event Viewer for disk errors, run chkdsk /f /r manually, run manufacturer's diagnostic tools, check S.M.A.R.T. status, back up data immediately (drive may be failing). Consider SSD replacement. Excessive RAM doesn't cause this. Address hard drive health urgently - this indicates impending failure."
  },
  {
    id: 9,
    question: "A user reports random application crashes and Windows instability. Windows Update shows a failed update that repeatedly tries to install but fails. What should be done?",
    options: [
      "Ignore the failed update - it's not important",
      "Uninstall the problematic update or use Windows Update Troubleshooter",
      "Disable Windows Update permanently",
      "Format the hard drive immediately"
    ],
    correct: 1,
    explanation: "Failed updates can cause instability and repeated installation attempts consume resources. Solutions: Settings > Windows Update > Update history > Uninstall updates (remove problematic update), run Windows Update Troubleshooter (Settings > Troubleshoot), manually download and install update, check disk space (insufficient space causes update failures). Don't ignore - may be security update. Never permanently disable Windows Update. Formatting is extreme. Failed updates are common - troubleshoot systematically before drastic measures."
  },
  {
    id: 10,
    question: "A computer powers on but displays no video. The monitor works (tested with another computer). Fans spin and drives sound normal. What should be checked FIRST?",
    options: [
      "Replace the motherboard immediately",
      "Check video cable connections and try a different video port/cable",
      "Reinstall Windows",
      "Replace the power supply"
    ],
    correct: 1,
    explanation: "No video with system power indicates display/connection issue. Check: video cable seated properly (both ends), try different cable, try different port (HDMI vs DisplayPort), try different monitor to isolate issue, check if computer uses integrated graphics (cable in motherboard port) vs discrete GPU (cable in GPU port). Listen for beep codes. Motherboard replacement is premature. Windows can't be reinstalled without video. PSU powers on (fans/drives work). Video connection issues are most common - verify all physical connections first."
  },
  {
    id: 11,
    question: "A user reports extremely slow internet browsing but local network file transfers are fast. They can access websites but pages load very slowly. What is a likely cause?",
    options: [
      "The local network switch is broken",
      "DNS server response is slow, browser has excessive extensions, or ISP throttling",
      "The computer needs more RAM",
      "The monitor resolution is too high"
    ],
    correct: 1,
    explanation: "Slow internet with fast local network indicates: slow DNS resolution (try alternate DNS 8.8.8.8), browser issues (too many extensions, cache needs clearing, malware), ISP throttling/congestion, bandwidth-consuming applications (updates, cloud sync). Fast local transfers = internal network is healthy. Switch works (local transfers fast). RAM affects overall performance, not specifically internet. Monitor resolution doesn't affect browsing speed. Test: try different browser, clear cache/cookies, check Task Manager for bandwidth-hogging processes, test connection speed at speedtest.net."
  },
  {
    id: 12,
    question: "A user's profile is corrupted - they receive a 'temporary profile' message at login and their desktop/files are missing. Their data still exists on the drive. What has happened?",
    options: [
      "All files are permanently deleted",
      "Windows loaded a temporary profile because the user profile is corrupted",
      "The hard drive has failed completely",
      "This is normal Windows behavior"
    ],
    correct: 1,
    explanation: "Temporary profile indicates Windows couldn't load the user's actual profile (corruption, permission issues, registry problems). Data still exists in C:\\Users\\[username] but isn't accessible through the temporary profile. Solutions: restart (sometimes resolves), repair profile via Registry Editor (delete corrupted profile registry keys), create new profile and copy data from old profile folder. This isn't normal. Files aren't deleted. Hard drive isn't failed. Temporary profiles have no personalization or files - strong indicator to troubleshoot profile corruption."
  },
  {
    id: 13,
    question: "A computer blue screens (BSOD) with different error messages each time. The system is unstable and crashes randomly. What hardware component should be tested FIRST?",
    options: [
      "Monitor",
      "RAM (memory) - random crashes suggest memory errors",
      "Keyboard",
      "Mouse"
    ],
    correct: 1,
    explanation: "Random BSODs with varying error messages strongly suggest RAM issues. Bad memory causes unpredictable crashes because errors occur when corrupted memory addresses are accessed. Test RAM: Windows Memory Diagnostic (mdsched.exe), MemTest86 (boot from USB, more thorough). Remove RAM sticks individually to isolate faulty module. Monitor/keyboard/mouse don't cause BSODs. Also consider: overheating, driver conflicts, power supply issues. But random crashes with different errors = test RAM first. Consistent error codes suggest specific driver/software issues."
  },
  {
    id: 14,
    question: "After a power outage, a computer won't boot and displays 'NTLDR is missing' or 'BOOTMGR is missing.' What is the issue?",
    options: [
      "The monitor is broken",
      "The boot loader is corrupted or missing - needs repair",
      "The RAM is faulty",
      "The CPU has failed"
    ],
    correct: 1,
    explanation: "NTLDR (Windows XP) or BOOTMGR (Windows 7+) missing indicates boot loader corruption - often from improper shutdowns (power outages), disk errors, or virus damage. The boot loader loads the operating system. Solutions: boot from Windows installation media, use Startup Repair, or manually rebuild boot configuration (bootrec /fixmbr, /fixboot, /rebuildbcd). Monitor works (error message visible). RAM/CPU failures show different symptoms. Boot loader files are small but critical - corruption prevents Windows from starting even though Windows files are intact."
  },
  {
    id: 15,
    question: "A user complains their USB flash drive worked yesterday but isn't recognized today on any USB port. The drive's LED doesn't light up when connected. What should be checked FIRST?",
    options: [
      "Update Windows immediately",
      "Try the flash drive on another computer to determine if the drive or computer USB ports are faulty",
      "Reinstall the operating system",
      "Replace the motherboard"
    ],
    correct: 1,
    explanation: "No LED indicates no power - either the flash drive failed or USB ports aren't providing power. Isolation testing determines fault location: try drive in another computer (if works = original computer's USB issue; if doesn't work = drive is dead). Try different USB port on original computer (front vs back, different USB controllers). Check Device Manager for USB controller issues. Windows updates won't help hardware detection. OS reinstall is premature. Motherboard replacement is extreme. Always isolate the problem component before replacement."
  }
];