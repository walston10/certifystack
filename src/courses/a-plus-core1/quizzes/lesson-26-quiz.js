export const lesson26Quiz = [
  {
    id: 1,
    question: "A laser printer is producing pages with a consistent vertical black line down the center. What component is most likely causing this?",
    options: [
      "The paper tray",
      "A scratched or damaged drum - creates consistent marks at the same position on every page",
      "The network cable",
      "Low toner always causes vertical lines"
    ],
    correct: 1,
    explanation: "Vertical lines indicate drum or fuser issues. Imaging drum: (1) Scratched/damaged drum creates consistent vertical line (same position every rotation), (2) Dirty drum can cause lines, (3) Worn drum causes overall print quality degradation. Diagnosis: (1) Vertical line, same position = drum issue, (2) Horizontal repeating marks = fuser or transfer roller, (3) Random marks = debris/toner spill. The drum rotates and transfers toner to paper - any defect creates marks at regular intervals matching drum circumference. Solutions: (1) Clean drum carefully with approved cleaner, (2) Replace drum cartridge (drums have limited lifespan ~20,000-100,000 pages), (3) Check for debris on drum. Prevention: (1) Use quality paper (prevents scratching), (2) Avoid touching drum surface during cartridge changes, (3) Replace drum at recommended intervals. Other vertical line causes: (1) Fuser damage, (2) Transfer roller issue, (3) Toner cartridge defect. Horizontal repeating defects indicate fuser (larger rotation circumference)."
  },
  {
    id: 2,
    question: "What are the seven steps of the laser printing process in the correct order?",
    options: [
      "Printing, Scanning, Copying, Faxing, Sleeping, Waking, Finishing",
      "Processing, Charging, Exposing, Developing, Transferring, Fusing, Cleaning",
      "Warming, Cooling, Heating, Freezing, Melting, Solidifying, Evaporating",
      "The order doesn't matter in laser printing"
    ],
    correct: 1,
    explanation: "Laser printing process (MUST MEMORIZE FOR EXAM): 1. Processing - RIP (Raster Image Processor) converts data to bitmap image, creates entire page image in memory. 2. Charging - Primary corona wire or charge roller applies uniform negative charge (-600V to -1000V) to drum surface, prepares drum for imaging. 3. Exposing - Laser beam selectively discharges areas where toner should stick (reduces charge to -100V), writes image onto drum, laser scans horizontally while drum rotates. 4. Developing - Toner (negatively charged) attracted to less-negative exposed areas on drum, unexposed areas repel toner, toner sticks to discharged laser-written image. 5. Transferring - Transfer corona wire/roller applies positive charge to paper back, attracts negatively charged toner from drum to paper, image now on paper but not permanent. 6. Fusing - Heat (180-200°C) and pressure melt toner particles, bonds toner permanently to paper fibers, creates final image. 7. Cleaning - Cleaning blade scrapes excess toner from drum, erase lamp removes residual charge, prepares drum for next page. Order matters: must charge before expose, develop before transfer, transfer before fuse. This process repeats for every page."
  },
  {
    id: 3,
    question: "A laser printer displays 'Low Toner' warning but prints appear normal. What should be done?",
    options: [
      "Immediately replace toner cartridge",
      "Continue printing until quality degrades, then replace toner - low toner warnings are often conservative estimates",
      "Stop using the printer permanently",
      "Low toner always means print quality is terrible"
    ],
    correct: 1,
    explanation: "Toner management: Low toner warning: (1) Triggered at ~10-20% remaining (conservative), (2) Printer estimates based on coverage/page count, (3) Can print hundreds more pages often, (4) Quality may gradually fade. When to replace: (1) Visible print quality degradation (faded, spotty), (2) White streaks or missing content, (3) Toner completely empty (unable to print). Maximizing toner: (1) Shake cartridge gently - redistributes toner, (2) Continue printing if quality acceptable, (3) Use 'toner save' or 'draft' mode for internal documents. Toner vs ink: (1) Toner = powder, long shelf life, thousands of pages, (2) Ink = liquid, can dry out, hundreds of pages. Toner cartridge includes: (1) Toner powder reservoir, (2) Often includes drum (all-in-one), (3) Developer roller, (4) Waste toner container (some models). Page yield: (1) Based on 5% coverage standard, (2) Photos/graphics use more toner, (3) Standard cartridge: 1500-3000 pages, (4) High-yield cartridge: 5000-20,000 pages. Cost: high-yield cartridges better cost per page. Disposal: recycle cartridges (manufacturer take-back programs, office supply stores)."
  },
  {
    id: 4,
    question: "An inkjet printer produces streaky prints with missing colors. What maintenance procedure should be performed?",
    options: [
      "Replace all ink cartridges immediately",
      "Run print head cleaning cycle from printer software/menu, followed by nozzle check pattern, perform alignment if needed",
      "Inkjet printers cannot be maintained",
      "Throw away the printer"
    ],
    correct: 1,
    explanation: "Inkjet maintenance procedures: Print head cleaning: (1) Access via printer software (Windows) or control panel menu, (2) Runs cleaning cycle - forces ink through nozzles to clear clogs, (3) Uses significant ink, (4) Repeat 2-3 times if needed, (5) Deep cleaning for stubborn clogs (uses more ink). Nozzle check pattern: (1) Prints test pattern showing each color, (2) Identifies clogged nozzles (gaps in lines), (3) Run before and after cleaning to verify. Print head alignment: (1) Corrects misalignment between cartridges, (2) Fixes blurry or misaligned colors, (3) Printer prints alignment page, scans it or user selects best pattern. Causes of clogs: (1) Infrequent use (ink dries in nozzles), (2) Low-quality ink, (3) Dusty environment, (4) Old cartridges. Prevention: (1) Print at least once weekly (prevents drying), (2) Use quality ink, (3) Don't turn off printer at power strip (prevents park position). Severe clogs: (1) Manual cleaning with distilled water/cleaning solution (advanced), (2) Replace print head (expensive, often 50%+ of printer cost). When to replace printer: if cleaning doesn't work and print head replacement costs more than new printer."
  },
  {
    id: 5,
    question: "What is the main difference between thermal printing and inkjet printing?",
    options: [
      "They are identical technologies",
      "Thermal printing uses heat to create images on special heat-sensitive paper; inkjet sprays liquid ink droplets onto regular paper",
      "Thermal is always color, inkjet is always black and white",
      "Thermal printing requires ink cartridges"
    ],
    correct: 1,
    explanation: "Thermal printing types: Direct thermal: (1) Heat-sensitive paper (receipt paper), (2) Thermal print head heats paper directly, (3) Creates black marks where heated, (4) No ink/toner/ribbon required, (5) Paper degrades over time (fades with heat/light/time), (6) Used for: receipts, shipping labels, tickets, (7) Low operating cost, (8) Monochrome only. Thermal transfer: (1) Heat melts colored wax/resin ribbon onto paper, (2) Ribbon transfers to paper/label when heated, (3) Permanent printing (doesn't fade), (4) Requires ribbon replacement, (5) Used for: product labels, barcode labels, name tags, (6) Can print color (separate ribbons), (7) More expensive per print than direct thermal. Inkjet: (1) Liquid ink sprayed through nozzles, (2) Works on plain paper, (3) Color or monochrome, (4) Ink cartridges need replacement, (5) Can smudge when wet, (6) Photos, documents, color printing. Comparison: (1) Thermal - fast, low maintenance, limited to labels/receipts, (2) Inkjet - versatile, color capable, higher maintenance. Receipt printers (thermal) common in retail/restaurants - fast, reliable, low cost. Label printers use thermal transfer for shipping/inventory."
  },
  {
    id: 6,
    question: "A printer connected via Ethernet can ping successfully but won't print. Print jobs sit in the queue. What should be checked?",
    options: [
      "The printer's physical connection only",
      "Verify correct printer driver installed, check if printer is set to 'Online' mode, ensure correct IP address in printer port settings, restart print spooler service",
      "Network printing is impossible",
      "Replace the network cable only"
    ],
    correct: 1,
    explanation: "Network printer troubleshooting: Driver and port: (1) Devices and Printers → right-click printer → Printer properties → Ports tab, (2) Verify correct IP address (should match printer's actual IP), (3) Check 'Standard TCP/IP Port' is selected, (4) Wrong IP = jobs queue but never print. Print spooler: (1) Windows service managing print jobs, (2) Can crash or stop, (3) Services.msc → Print Spooler → restart, (4) Or command: net stop spooler, net start spooler. Printer status: (1) Right-click printer → See what's printing, (2) Printer menu → Use Printer Online (if 'Use Printer Offline' is checked, nothing prints), (3) Clear stuck jobs if needed. Firewall: (1) Port 9100 (printing), (2) Port 515 (LPD), (3) Port 631 (IPP), (4) Corporate firewalls may block printing. Static IP for printers: (1) Configure static IP on printer or DHCP reservation, (2) Prevents IP change breaking port configuration. Testing: (1) Print directly from printer's web interface (http://printer-ip), (2) If works = driver/computer issue; if fails = printer issue. Common causes: (1) IP address changed (DHCP), (2) Wrong driver, (3) Spooler crashed, (4) Printer offline mode."
  },
  {
    id: 7,
    question: "What wireless printing protocol allows mobile devices to print without installing printer drivers?",
    options: [
      "Wireless printing doesn't exist",
      "AirPrint (Apple), Google Cloud Print (deprecated - replaced by native OS support), or Mopria (Android) - driverless mobile printing standards",
      "Only USB allows printing",
      "Mobile devices cannot print"
    ],
    correct: 1,
    explanation: "Mobile/wireless printing standards: AirPrint (Apple): (1) Built into iOS/iPadOS/macOS, (2) Auto-discovers compatible printers on same network, (3) No driver installation, (4) Print from any app with share button, (5) Requires AirPrint-compatible printer. Mopria (Android): (1) Android 8.0+ built-in (or Mopria app for older), (2) Auto-discovers Mopria-certified printers, (3) Industry standard (HP, Canon, Epson, Brother support). Google Cloud Print: (1) Deprecated 2020, (2) Replaced by native OS printing and manufacturer apps. Wi-Fi Direct: (1) Peer-to-peer Wi-Fi connection, (2) Connect directly to printer without network, (3) Printer creates its own Wi-Fi network, (4) Connect, then print. Manufacturer apps: (1) HP Smart, (2) Epson iPrint, (3) Canon PRINT, (4) Brother iPrint&Scan, (5) Scan, print, manage printer. Requirements: (1) Printer and device on same Wi-Fi network (or Wi-Fi Direct), (2) Printer must support standard (AirPrint/Mopria), (3) Printer firmware up to date. Setup: (1) Most printers auto-discovered, (2) Add manually if needed (Settings → Printing → Add printer). Benefits: seamless printing from phones/tablets without computer."
  },
  {
    id: 8,
    question: "A user wants to print double-sided (on both sides of paper) to save paper. What printer feature enables this?",
    options: [
      "All printers automatically print double-sided",
      "Duplex printing (automatic or manual) - printer either flips paper automatically or prompts user to reinsert paper for second side",
      "Double-sided printing is impossible",
      "Only copy machines can print double-sided"
    ],
    correct: 1,
    explanation: "Duplex printing types: Automatic duplex (built-in): (1) Printer hardware flips paper automatically, (2) Prints one side, pulls paper back, flips, prints reverse, (3) Fully automatic, convenient, (4) Slower than single-sided (mechanical delay), (5) Common on business printers, (6) Long-edge vs short-edge binding (for booklets). Manual duplex: (1) Software-assisted, printer prompts, (2) Printer prints odd pages, (3) User removes stack, flips and re-inserts, (4) Printer prints even pages on reverse, (5) Works on any printer, (6) Requires user intervention. Enabling duplex: (1) Print dialog → Printer Properties → Finishing/Layout, (2) Select 'Print on both sides' or 'Duplex', (3) Choose flip edge (long/short), (4) Set as default if desired. Benefits: (1) Save paper (50% reduction), (2) Professional documents (booklets, reports), (3) Environmental (reduced waste). Considerations: (1) Heavier paper recommended (lightweight paper may jam), (2) Some content (photos) better single-sided, (3) Duplex adds print time. Paper orientation: (1) Long-edge flip - like book pages, (2) Short-edge flip - like calendar pages. Not all printers support automatic duplex - check specifications before purchase if important feature."
  },
  {
    id: 9,
    question: "A laser printer's prints come out with toner smudges that can be wiped off. What component is likely failing?",
    options: [
      "The paper tray",
      "The fuser unit - insufficient heat/pressure failing to permanently bond toner to paper",
      "The network cable",
      "Toner cartridge causes smudging"
    ],
    correct: 1,
    explanation: "Fuser function: (1) Applies heat (180-220°C) and pressure, (2) Melts toner powder particles, (3) Bonds toner permanently to paper fibers, (4) Located at printer exit (hot rollers). Fuser failure symptoms: (1) Toner smudges/rubs off easily, (2) Wrinkled or warped paper (excessive heat), (3) Paper jams at fuser (worn rollers), (4) Fuser error message, (5) Incomplete toner adhesion (faint prints). Causes: (1) Worn fuser (limited lifespan ~100,000-300,000 pages), (2) Incorrect fuser temperature (setting or failure), (3) Pressure roller worn (insufficient pressure), (4) Wrong paper type setting (fuser temp varies by media). Diagnosis: (1) Smudges = fuser not hot enough or insufficient pressure, (2) Burn marks = too hot, (3) Recent replacement? May need break-in period. Solutions: (1) Replace fuser assembly (user-replaceable on some models, service call on others), (2) Verify paper type settings (labels/cardstock need different temps), (3) Clean fuser rollers (carefully - very hot during operation). Fuser is consumable: (1) Replacement interval varies by model, (2) Expensive component ($100-500), (3) Some fusers integrated (requires printer replacement). Safety: fuser remains hot after printing - risk of burns during maintenance."
  },
  {
    id: 10,
    question: "What is the purpose of printer calibration?",
    options: [
      "Calibration is unnecessary",
      "Aligns print heads or adjusts color accuracy to ensure proper registration between colors and consistent output quality",
      "Calibration only changes paper size",
      "Only affects network settings"
    ],
    correct: 1,
    explanation: "Printer calibration types: Inkjet alignment: (1) Corrects print head position, (2) Ensures colors overlay precisely (no halos/shadows), (3) Fixes blurry or doubled images, (4) Run after cartridge replacement or if misalignment visible, (5) Printer prints test pattern, automatically scans or user selects best. Color calibration: (1) Adjusts color output to match standards, (2) Ensures consistent color reproduction, (3) Important for photography/design work, (4) Uses color profiles (ICC profiles), (5) May use hardware colorimeter (professional). Laser printer calibration: (1) Adjusts registration between color drums (CMYK alignment), (2) Color density calibration, (3) Ensures even toner distribution. When to calibrate: (1) After replacing cartridges/drums, (2) If colors misaligned (color fringes), (3) Regular maintenance (monthly for photo work), (4) After moving printer (mechanical shift), (5) If color accuracy seems off. Access: (1) Printer software → Maintenance → Align/Calibrate, (2) Printer control panel menu, (3) Web interface (network printers). Professional calibration: (1) Hardware colorimeter (X-Rite ColorMunki, Spyder), (2) Creates custom color profiles, (3) Essential for photographers/designers, (4) Calibrates monitor + printer together. Calibration doesn't fix mechanical failures - only corrects alignment and color."
  },
  {
    id: 11,
    question: "A printer shows 'Paper Jam' error but no paper is visible in normal locations. Where else should be checked?",
    options: [
      "Paper jams are impossible to clear",
      "Check inside cartridge/drum area, fuser unit, rear access door, duplex unit, and all paper path areas - sensors may detect remnants",
      "Only the input tray has paper",
      "Replace entire printer"
    ],
    correct: 1,
    explanation: "Paper jam locations: Input area: (1) Paper tray/feed area, (2) Pickup rollers may have grabbed multiple sheets. Internal path: (1) Around drum/cartridge (laser), (2) Print head carriage area (inkjet), (3) Behind access panels. Fuser area: (1) Exit rollers (laser), (2) Often hottest area (caution). Duplex unit: (1) Duplexer can jam when flipping paper, (2) May be removable for access. Rear/output area: (1) Rear access door (if present), (2) Output tray area. Clearing procedure: (1) Turn off printer (safety), (2) Remove all paper trays, (3) Open access doors, (4) Remove toner/drum (laser) or cartridges (inkjet) for visibility, (5) Look for torn paper pieces (main cause of persistent jam errors), (6) Gently pull paper in direction of paper path (avoid tearing), (7) Use flashlight to find small fragments, (8) Rotate rollers manually to release paper, (9) Check all sensors clear. Sensors: (1) Paper presence sensors throughout path, (2) Small torn pieces trigger error, (3) Dirty sensors false-trigger (clean with canned air). Prevention: (1) Fan paper before loading (prevents multiple sheets), (2) Don't overload tray, (3) Use quality paper (cheap paper sheds fibers), (4) Store paper properly (humidity causes curling/jams), (5) Remove damaged/bent sheets. Persistent jams: worn pickup rollers (replacement maintenance kit)."
  },
  {
    id: 12,
    question: "What is the difference between printer resolution (DPI) and print quality settings?",
    options: [
      "They are the same thing",
      "DPI (dots per inch) is hardware capability (e.g., 1200×1200); print quality settings (draft/normal/best) adjust actual output detail and ink/toner usage",
      "DPI only affects color, quality affects size",
      "Print quality is always the same"
    ],
    correct: 1,
    explanation: "DPI (Dots Per Inch): (1) Measure of maximum resolution printer can produce, (2) Higher DPI = more dots = finer detail possible, (3) Laser: 600-2400 DPI typical, (4) Inkjet: 1200×4800 DPI (different horizontal/vertical due to technology), (5) True photo printers: 4800-9600 DPI, (6) Hardware specification, fixed. Print quality settings: (1) Software control of actual output, (2) Draft - fastest, lowest ink/toner, 300-600 DPI effective, for proofs/internal docs, (3) Normal/Standard - balanced speed/quality, 600-1200 DPI, everyday printing, (4) Best/High/Photo - slowest, most ink/toner, uses full printer DPI, for photos/final documents. Quality affects: (1) Speed - draft fast, best slow, (2) Ink/toner consumption - significant difference, (3) Detail level - draft may show banding, best smooth, (4) Drying time (inkjet) - more ink needs more drying. Resolution math: (1) 1200 DPI = 1200 dots per linear inch, (2) More DPI = smaller dots = smoother gradients, (3) Diminishing returns beyond 600 DPI for text, (4) Photos benefit from higher DPI. Settings location: (1) Print dialog → Properties/Preferences, (2) Quality or Print Quality dropdown. Use case matching: draft for internal, best for client presentations/photos. Marketing: inkjet DPI inflated (horizontal×vertical where vertical uses micro-stepping)."
  },
  {
    id: 13,
    question: "A color laser printer prints everything with a magenta tint. What is the likely cause?",
    options: [
      "The paper type is wrong",
      "Magenta toner cartridge leaking or drum not discharging properly, or incorrect color calibration",
      "Network settings affect color",
      "All laser printers print magenta"
    ],
    correct: 1,
    explanation: "Color laser printing: (1) Four separate toner cartridges: Cyan, Magenta, Yellow, Black (CMYK), (2) Four separate imaging drums (or transfer belt), (3) Colors layered to create full spectrum. Magenta tint causes: Magenta drum/cartridge: (1) Drum not discharging after charging (stays charged, attracts toner everywhere), (2) Toner cartridge leak (magenta toner contaminating), (3) Magenta cartridge seal not removed, (4) Failing drum (attracts toner to wrong areas). Color calibration: (1) Improper color balance, (2) Magenta density too high, (3) Run printer color calibration utility. Other components: (1) Transfer belt contaminated with magenta toner, (2) Fuser problem (rare for color issues). Diagnosis: (1) Print test page from printer (bypasses driver), if still magenta = printer hardware, if normal = driver/computer, (2) Check cartridge installation (seals removed), (3) Inspect drum for visible damage, (4) Run cleaning cycles, (5) Calibrate color. Solutions: (1) Replace magenta cartridge/drum, (2) Clean transfer belt, (3) Recalibrate, (4) Reset printer to defaults. Color laser troubleshooting: (1) Missing color = empty/failed cartridge, (2) Wrong color tint = contamination/calibration, (3) Consistent colored line = scratched drum. Print test pages built into printer menus (independent of computer) to isolate issues."
  },
  {
    id: 14,
    question: "What is the purpose of a printer's IP address reservation in DHCP settings?",
    options: [
      "Printers don't need IP addresses",
      "Ensures the printer always receives the same IP address from DHCP, preventing printer port configuration from breaking when IP changes",
      "Reservations slow down printing",
      "Only affects color accuracy"
    ],
    correct: 1,
    explanation: "Network printer IP addressing: Static IP (on printer): (1) Manually configure IP on printer, (2) Never changes, (3) Must avoid conflicts (track used IPs), (4) Survives DHCP server changes. DHCP reservation: (1) Router/DHCP server assigns same IP to printer's MAC address, (2) Printer requests DHCP, always gets same IP, (3) Centralized management (router), (4) Prevents conflicts automatically. Why consistent IP matters: (1) Windows stores printer IP in port settings, (2) IP change = print jobs fail (wrong IP), (3) Users must update port settings if IP changes, (4) Network discovery may fail with changing IPs. Setting reservation: (1) Find printer MAC address (print configuration page or network settings), (2) Router DHCP settings → Reservations, (3) Add MAC address + desired IP, (4) Restart printer or renew lease. Alternative solutions: (1) Hostname printing - use printer name instead of IP (requires DNS), (2) Print server - Windows server manages printer, clients connect to server. Best practices: (1) Static IP or reservation for all network printers, (2) Document IP addresses, (3) Use consistent IP scheme (e.g., printers 192.168.1.100-199). Troubleshooting: (1) Printer unreachable = verify IP via printer config page, (2) Update port if IP changed, (3) Ping printer IP to test connectivity. Corporate environments typically use print servers (centralized management, users don't need printer IP)."
  },
  {
    id: 15,
    question: "An impact/dot matrix printer is producing faint prints. What should be checked?",
    options: [
      "Impact printers don't produce faint prints",
      "Replace ribbon, adjust print head distance (platen gap), or check for worn print head pins",
      "Only laser printers can have faint prints",
      "Impact printers never need maintenance"
    ],
    correct: 1,
    explanation: "Impact/dot matrix printer components: Print head: (1) Contains pins (9-pin or 24-pin), (2) Pins strike ribbon against paper, (3) Creates characters from dot patterns, (4) Pins can wear out or break. Ribbon: (1) Ink-soaked fabric ribbon, (2) Wears out with use (becomes faint), (3) Replacement interval varies (3-6 months typical). Platen: (1) Rubber roller behind paper, (2) Print head gap adjustable (distance from platen). Faint print causes: (1) Worn/dried ribbon - most common, replace ribbon, (2) Platen gap too wide - adjust gap control (lever/dial), usually 6 positions for different paper thickness, (3) Worn print head pins - pins broken or bent, replace print head assembly, (4) Low-quality ribbon - use manufacturer recommended. Ribbon replacement: (1) Power off printer, (2) Remove ribbon cartridge, (3) Install new cartridge, (4) Test print. Advantages of impact: (1) Multi-part forms (carbon copies), (2) Continuous/tractor feed paper, (3) Works in extreme environments, (4) Low cost per page. Disadvantages: (1) Loud (dot matrix noise), (2) Low quality (dots visible), (3) Slow speed, (4) Limited graphics. Current uses: (1) Invoices/receipts (multi-part), (2) Shipping manifests, (3) Industrial environments (receipt printing on forms). Most businesses replaced with laser/inkjet (higher quality, quieter)."
  }
];