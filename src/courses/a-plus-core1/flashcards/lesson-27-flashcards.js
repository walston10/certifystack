export const lesson27Flashcards = [
  {
    id: 1,
    front: "What are the steps to install a printer in Windows?",
    back: "1. Connect printer (USB/network). 2. Windows may auto-install generic driver. 3. Download manufacturer driver from website (don't use CD - outdated). 4. Run installer or add via Settings > Devices > Printers. 5. Set as default if desired. 6. Print test page to verify. Network: Add by IP address or browse network."
  },
  {
    id: 2,
    front: "What is a print queue and how do you manage it?",
    back: "List of pending print jobs waiting to print. View: Devices and Printers > Double-click printer. Actions: Pause/resume individual jobs, cancel jobs, pause entire queue, restart print spooler. Jobs print in order (FIFO). Stuck jobs can block queue - cancel and restart spooler."
  },
  {
    id: 3,
    front: "How do you share a printer on a Windows network?",
    back: "Method 1: Share from computer (host must be on). Printer properties > Sharing tab > Share this printer > Name it. Method 2: Network printer with built-in network card (better - no host needed). Add on clients: Settings > Printers > Add network printer > Browse or enter path (\\\\ComputerName\\PrinterName)."
  },
  {
    id: 4,
    front: "What is a print server and what are its benefits?",
    back: "Dedicated computer or network device managing printers. Benefits: Central management, always available (host doesn't need to be on), queue management, driver distribution, user permissions, logging, multiple printers. Windows Server: Print and Document Services role. Better than PC sharing for businesses."
  },
  {
    id: 5,
    front: "What is duplex printing?",
    back: "Automatic double-sided printing. Saves paper (50% reduction). Types: Long-edge (flip like book), short-edge (flip like notepad). Automatic duplex: Built-in hardware feature. Manual duplex: Printer prompts to flip paper manually. Not all printers support automatic duplex. Configure in print settings."
  },
  {
    id: 6,
    front: "What print orientation options exist?",
    back: "Portrait: Tall (8.5x11 standard letter). Landscape: Wide (11x8.5 rotated 90°). Configure per document or printer default. Set in: Print dialog, document settings, printer preferences. Landscape used for: spreadsheets, wide tables, presentations. Portrait standard for: letters, documents."
  },
  {
    id: 7,
    front: "What paper sizes should you know?",
    back: "Letter: 8.5x11 inches (US standard). Legal: 8.5x14 inches. A4: 210x297mm (international standard). A3: 297x420mm (double A4). Tabloid/Ledger: 11x17 inches. Envelope sizes (#10, DL). Configure in: Print settings, printer properties. Wrong size: Cut-off text, paper jams."
  },
  {
    id: 8,
    front: "What print quality settings can you configure?",
    back: "Draft: Fastest, least ink/toner, lower quality, proofing. Normal: Standard quality, everyday printing. Best/High: Slowest, most ink/toner, photos/presentations. DPI/resolution: Higher = better quality. Color vs grayscale/black and white. Economy mode: Saves toner. Quality affects: Speed, consumable usage, appearance."
  },
  {
    id: 9,
    front: "How do you clean a laser printer?",
    back: "Power off, unplug. Remove toner cartridge. Use toner vacuum (NOT regular vacuum - explosion risk). Wipe inside with dry lint-free cloth. Clean corona wire gently with included tool. Wipe feed rollers with damp cloth. Don't touch drum surface. Reassemble, run cleaning page via printer menu."
  },
  {
    id: 10,
    front: "How do you clean an inkjet printer?",
    back: "Run automatic cleaning cycle from printer menu/software (cleans print heads). Manual: Remove cartridges, clean print head contacts with lint-free cloth and distilled water. Clean paper rollers with damp cloth. Use printer's maintenance functions. Don't touch nozzles directly. Run test page after cleaning."
  },
  {
    id: 11,
    front: "When should you replace printer consumables?",
    back: "Toner/ink: When low warning appears or print quality degrades. Drum: ~12K-50K pages (check manual), faded prints, spots. Fuser: ~100K-300K pages, smearing, loose toner. Transfer belt: ~120K pages, poor transfer. Maintenance kit: Scheduled intervals. Pickup rollers: Paper jams, won't grab paper. Track page counts."
  },
  {
    id: 12,
    front: "What causes paper jams and how do you prevent them?",
    back: "Causes: Wrong paper type, damaged/wrinkled paper, overfilled tray, worn pickup rollers, dirty rollers, humidity, foreign objects. Prevention: Use correct paper, don't overfill (fill to line only), fan paper before loading, keep paper dry, clean rollers regularly, replace worn parts. Remove jams carefully (don't tear paper)."
  },
  {
    id: 13,
    front: "How do you properly clear a paper jam?",
    back: "Power off printer. Open all access panels. Gently pull paper in direction of paper path (don't tear). Remove all pieces including small bits. Check all rollers for torn paper. Close panels. Power on. Print test page. Clear any error messages. Check for remaining pieces - partial removal causes repeat jams."
  },
  {
    id: 14,
    front: "What causes faded prints on a laser printer?",
    back: "Low toner. Toner cartridge not shaken (new cartridge). Old toner cartridge (expired). Dirty corona wire. Failing drum. Eco/draft mode enabled. High humidity. Solution: Replace/shake toner, clean corona wire, replace drum, check print quality settings, adjust density settings."
  },
  {
    id: 15,
    front: "What causes faded prints on an inkjet printer?",
    back: "Low ink levels. Clogged print heads. Dried ink. Draft mode enabled. Wrong paper type. Old ink cartridges. Air in cartridge. Solution: Replace ink, run cleaning cycle, print regularly, check quality settings, use correct paper, replace old cartridges."
  },
  {
    id: 16,
    front: "What causes streaks on printed pages?",
    back: "Laser: Dirty drum, scratched drum, dirty corona wire, foreign material on fuser, worn cleaning blade. Inkjet: Clogged nozzles, dirty print heads, dried ink, misaligned heads. Both: Dirty paper path, debris in printer. Solution: Clean components, run cleaning cycle, replace worn parts, calibrate."
  },
  {
    id: 17,
    front: "What causes smudging on laser printer output?",
    back: "Fuser not heating properly (fuser failure). Incorrect paper type (too thick/thin). Humidity issues. Dirty fuser. Wrong paper setting in driver. Toner smears when touched: Definitely fuser problem. Solution: Replace fuser, use correct paper, check environmental conditions, verify paper settings."
  },
  {
    id: 18,
    front: "What causes incorrect colors in inkjet printing?",
    back: "Empty or low ink cartridge. Wrong cartridge installed. Clogged nozzles for specific color. Incorrect color profile. Old/expired ink. Print head misalignment. Solution: Replace empty cartridge, run nozzle check, clean heads, calibrate, check color settings, align print heads."
  },
  {
    id: 19,
    front: "What is the print spooler and what does it do?",
    back: "Windows service managing print queue. Receives print jobs from applications, queues them, sends to printer. Allows application to continue while printing. Service name: Print Spooler. Spooler files: C:\\Windows\\System32\\spool\\PRINTERS. If stuck: Restart Print Spooler service."
  },
  {
    id: 20,
    front: "How do you restart the print spooler in Windows?",
    back: "Method 1: Services (services.msc) > Print Spooler > Restart. Method 2: Command line: net stop spooler, net start spooler. Method 3: Task Manager > Services tab > Spooler > Restart. Clears stuck jobs. Manually delete spool files if necessary. May need admin rights."
  },
  {
    id: 21,
    front: "What causes 'printer offline' status?",
    back: "Printer powered off. Cable unplugged (USB/network). Network connectivity issue. Printer set to 'Use Printer Offline' mode. Wrong IP address (network printer). Driver issue. Firewall blocking. Solution: Check power/cables, ping printer IP, disable 'Use Printer Offline', reinstall driver, check firewall."
  },
  {
    id: 22,
    front: "What causes slow printing?",
    back: "High quality settings (best/photo mode). Large file size (graphics, photos). Network congestion. Low memory in printer. Old/slow printer. Duplex printing (slower than simplex). Printing over Wi-Fi (slower than Ethernet). Solution: Lower quality, Ethernet instead of Wi-Fi, upgrade printer, add printer memory."
  },
  {
    id: 23,
    front: "What is printer calibration and how do you perform it?",
    back: "Process aligning print heads and adjusting color output. Laser: Color registration, density adjustment. Inkjet: Print head alignment, color calibration. Access via: Printer menu (built-in panel), printer software, driver settings. Prints test patterns automatically. When: New cartridges, poor alignment, color issues."
  },
  {
    id: 24,
    front: "What causes garbled or incorrect characters printing?",
    back: "Wrong or corrupt printer driver. Communication error (USB/network). Incorrect printer language (PCL vs PostScript). Cable issue. Printer memory issue. Print job corruption. Solution: Update/reinstall driver, try different cable, check printer language settings, restart printer, send simpler test document."
  },
  {
    id: 25,
    front: "What is printer memory and when do you need more?",
    back: "RAM in printer for processing print jobs. Stores: Page images, fonts, complex graphics. Standard: 64-256 MB. May need more for: Large documents, high resolution, complex graphics, PCL/PostScript documents, network printing. Symptoms of low memory: Error messages, slow printing, incomplete pages, simpler prints."
  },
  {
    id: 26,
    front: "What causes vertical white lines on laser prints?",
    back: "Toner distribution issue in cartridge - shake cartridge. Clogged or damaged toner cartridge. Dirty or scratched drum. Corona wire blockage. Empty toner in specific area. Solution: Remove cartridge and shake gently side-to-side, clean corona wire, replace cartridge/drum if damaged."
  },
  {
    id: 27,
    front: "What causes repetitive marks at regular intervals?",
    back: "Defect on drum (marks repeat at drum circumference). Dirty fuser roller. Debris stuck to transfer roller. Damaged cleaning blade. Measure distance between marks to identify component (drum ~94mm, fuser varies). Solution: Clean components, replace damaged drum/fuser."
  },
  {
    id: 28,
    front: "What security features should you configure on network printers?",
    back: "Change default admin password. Disable unused protocols. Enable encryption (HTTPS for management). Restrict IP addresses. Require PIN for printing (follow-me printing). Disable USB ports if not needed. Secure print release. Audit logging. Update firmware regularly. Disable telnet, enable SNMPv3."
  },
  {
    id: 29,
    front: "What is secure print/pull printing?",
    back: "Job held in queue until user authenticates at printer. User enters PIN or swipes badge. Prevents sensitive documents sitting in output tray. Reduces waste (unclaimed jobs). Requires printer support. Common in corporate environments. Also called: Follow-me printing, secure release."
  },
  {
    id: 30,
    front: "What general printer troubleshooting methodology should you follow?",
    back: "1. Identify problem (error messages, test page). 2. Check obvious (power, cables, toner/ink, paper). 3. Check queue (stuck jobs, paused). 4. Print test page from printer menu (bypasses driver). 5. Update/reinstall driver. 6. Check manufacturer support site. 7. Clean printer. 8. Replace consumables. 9. Hardware diagnostics."
  }
];