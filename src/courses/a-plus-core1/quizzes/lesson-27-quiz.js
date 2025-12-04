export const lesson27Quiz = [
  {
    id: 1,
    question: "A printer is producing pages with random specks and smudges. What maintenance procedure should be performed first?",
    options: [
      "Replace the entire printer immediately",
      "Clean the printer rollers, interior, and perform a cleaning cycle - debris and toner/ink buildup cause print quality issues",
      "Print quality issues cannot be fixed",
      "Only replace toner or ink cartridges"
    ],
    correct: 1,
    explanation: "Printer cleaning procedures: Interior cleaning: (1) Power off and unplug printer, (2) Remove toner/ink cartridges for access, (3) Use lint-free cloth slightly dampened with water (or isopropyl alcohol for stubborn residue), (4) Wipe accessible interior surfaces, (5) Use compressed air to blow out dust/debris (outdoors recommended - messy), (6) Clean corona wires carefully (laser printers) with special brush or swab. Roller cleaning: (1) Feed rollers accumulate paper dust/oils, (2) Clean with dampened cloth, (3) Rotate rollers manually to access all surfaces, (4) Some printers have cleaning sheets (special paper that collects debris). Cleaning cycles: (1) Laser - cleaning page (removes excess toner), (2) Inkjet - print head cleaning (clears nozzles). Prevention: (1) Keep printer covered when not in use, (2) Use quality paper (less dust), (3) Keep area around printer clean, (4) Regular maintenance schedule (monthly cleaning for busy printers). Common contaminants: (1) Paper dust (main cause of specks), (2) Toner spills (laser), (3) Dried ink residue (inkjet), (4) Environmental dust. Safety: never touch fuser (extremely hot), avoid touching drum surface (oils from hands damage it), ground yourself before touching internal components."
  },
  {
    id: 2,
    question: "A laser printer is consistently jamming at the fuser. What component should be inspected or replaced?",
    options: [
      "The paper tray only",
      "Fuser rollers, pickup rollers, or separation pad - worn components cause jamming as paper fails to feed properly through fuser area",
      "The network cable",
      "Paper jams are random and cannot be prevented"
    ],
    correct: 1,
    explanation: "Fuser area jamming causes: Fuser rollers: (1) Rubber coating degrades over time (100,000+ pages), (2) Smooth/glazed surface fails to grip paper, (3) Paper wraps around fuser roller instead of exiting, (4) Replacement: fuser assembly (entire unit) or maintenance kit. Pickup rollers: (1) Wear causes multiple sheet feeding or no feeding, (2) Multiple sheets jam at fuser, (3) Rubber becomes hard/smooth with age. Separation pad: (1) Cork-like pad prevents multiple sheets, (2) Wears smooth, allows multi-feeding, (3) Inexpensive, easy replacement. Paper path sensors: (1) Dirty sensors false-trigger jams, (2) Clean with compressed air or lint-free cloth. Diagnosis: (1) Consistent location (fuser) = that area's components, (2) Random locations = paper quality/loading, (3) Multiple sheets = pickup/separation issue. Maintenance kit: (1) Includes fuser, pickup rollers, separation pads, (2) Replace at manufacturer interval (~100,000-200,000 pages), (3) Extends printer life significantly. Prevention: (1) Quality paper (correct weight), (2) Proper paper storage (humidity control), (3) Don't overload tray, (4) Fan paper before loading, (5) Scheduled maintenance. Worn rollers most common jam cause in aging printers."
  },
  {
    id: 3,
    question: "An inkjet printer's colors don't match what's shown on screen. What should be done to improve color accuracy?",
    options: [
      "Colors never match between screen and printer",
      "Calibrate monitor, use correct color profile for printer and paper type, ensure using appropriate paper for color printing",
      "Only replace all cartridges",
      "Color accuracy cannot be improved"
    ],
    correct: 1,
    explanation: "Color matching workflow: Monitor calibration: (1) Hardware calibrator (X-Rite, Datacolor Spyder) creates accurate profile, (2) Set monitor to sRGB or Adobe RGB color space, (3) Proper brightness/contrast (120 cd/m² typical), (4) Calibrate monthly for accuracy. Printer profiles: (1) ICC profiles define color characteristics, (2) Use manufacturer profiles for their papers, (3) Download profiles from paper manufacturer websites, (4) Custom profiles with spectrophotometer (professional). Paper type matters: (1) Plain paper - limited gamut, colors dull, (2) Photo paper (glossy/matte) - wider gamut, vibrant colors, (3) Fine art paper - specific profiles needed, (4) Select correct paper type in print dialog (affects ink density). Print settings: (1) Color management - let printer manage color OR application manage (not both), (2) Color matching method (perceptual, relative colorimetric), (3) High quality/photo mode. Limitations: (1) Monitors use RGB (light), printers use CMYK (pigment) - not all colors reproducible, (2) Monitor displays wider gamut than print can reproduce, (3) Soft proofing shows print preview in editing software. Professional workflow: (1) Edit in color-managed application (Photoshop, Lightroom), (2) Soft proof before printing, (3) Print with color management, (4) View prints in proper lighting (5000K daylight)."
  },
  {
    id: 4,
    question: "A shared network printer keeps going offline randomly throughout the day. What are potential causes and solutions?",
    options: [
      "Network printers are inherently unreliable",
      "Check network cable connections, verify printer has static IP or DHCP reservation, update printer firmware, check for network congestion or switch issues",
      "Replace all computers accessing the printer",
      "Offline status cannot be fixed"
    ],
    correct: 1,
    explanation: "Network printer offline troubleshooting: Physical connectivity: (1) Loose network cable at printer or switch, (2) Damaged cable, (3) Bad switch port, (4) Test: swap cable, try different port. IP addressing: (1) DHCP lease expires, printer gets new IP, (2) Port settings still point to old IP, (3) Solution: static IP or DHCP reservation, (4) Verify printer IP matches port configuration. Firmware/software: (1) Outdated firmware causes instability, (2) Update from manufacturer website, (3) Reset printer to factory defaults if corrupted. Power management: (1) Sleep mode may disconnect from network, (2) Disable energy saver modes or set longer timeout, (3) Some printers drop network when sleeping. Network issues: (1) Switch port flapping (going up/down), (2) Network congestion (heavy traffic), (3) VLAN misconfiguration (printer on wrong VLAN), (4) IP conflict (duplicate IP on network). Print server: (1) If using Windows print server, server may crash/disconnect, (2) Restart print spooler service, (3) Check server uptime/reliability. Diagnosis: (1) Ping printer IP continuously (ping -t), watch for drops, (2) Check printer event logs, (3) Monitor switch port status, (4) Test direct connection (laptop ethernet to printer). Prevention: (1) Quality network infrastructure, (2) Static/reserved IP, (3) Regular firmware updates, (4) Monitored network environment."
  },
  {
    id: 5,
    question: "What information should be documented when installing a new printer for future troubleshooting?",
    options: [
      "Nothing needs to be documented",
      "IP address (if network), location, model/serial number, driver version, configuration settings, paper types supported, and maintenance schedule",
      "Only the color of the printer",
      "Documentation is unnecessary"
    ],
    correct: 1,
    explanation: "Printer documentation essentials: Identification: (1) Manufacturer, model, serial number, (2) Purchase date, warranty period, (3) Asset tag (if corporate), (4) Physical location (building/floor/room). Network configuration: (1) IP address (static or reserved), (2) Hostname, (3) MAC address, (4) Network (VLAN, subnet), (5) Share name (if shared). Software: (1) Driver version and source, (2) Firmware version, (3) Management software installed, (4) Print server (if applicable). Capabilities: (1) Features (duplex, color, stapling), (2) Maximum paper sizes, (3) Supported paper types, (4) Duty cycle (pages per month rating), (5) Speed (pages per minute). Consumables: (1) Toner/ink cartridge part numbers, (2) Drum part number (laser), (3) Fuser/maintenance kit info, (4) Where to order supplies. Maintenance: (1) Page counter reading, (2) Maintenance kit replacement interval, (3) Last maintenance date, (4) Service contact information, (5) Cleaning schedule. Users: (1) Who has access, (2) Permissions/restrictions, (3) Department/cost center. Benefits: (1) Faster troubleshooting, (2) Ordering correct supplies, (3) Planning maintenance, (4) Asset tracking, (5) Support calls easier. Use asset management software or spreadsheet. Update when changes occur."
  },
  {
    id: 6,
    question: "A laser printer displays 'Replace Fuser' message. What does this indicate?",
    options: [
      "The paper tray is empty",
      "The fuser unit has reached its rated lifespan (page count) and needs replacement to maintain print quality and prevent jamming",
      "Only a software error requiring restart",
      "Fuser replacement is optional"
    ],
    correct: 1,
    explanation: "Fuser replacement: Fuser function: (1) Heats and presses toner to paper, (2) Operating temperature 180-220°C, (3) Contains heating element and pressure roller, (4) Critical for permanent toner adhesion. Lifespan: (1) Rated for specific page count (typically 100,000-300,000 pages), (2) Printer tracks pages, triggers message at threshold, (3) Wear from heat cycling and mechanical use. Failure symptoms: (1) Toner smudges/rubs off, (2) Wrinkled paper, (3) Paper jams at fuser, (4) Replace fuser message, (5) Loose toner not bonded. Replacement options: (1) OEM fuser (manufacturer) - expensive ($150-500), guaranteed compatibility, full warranty, (2) Third-party fuser - cheaper (50-70% of OEM), may void warranty, quality varies, (3) Refurbished fuser - cost effective, shorter warranty. Installation: (1) Power off, unplug, wait for cooling (fuser stays hot), (2) Access fuser (usually rear panel), (3) Release tabs/screws, remove old fuser, (4) Install new fuser (align guides), (5) Reset fuser page counter (varies by model - button combination or software), (6) Print test page. Safety: fuser extremely hot during/after printing - severe burn risk. Some printers automatically lock out when fuser due (forcing replacement). Part of planned maintenance - budget for fusers on older printers."
  },
  {
    id: 7,
    question: "An inkjet printer's estimated ink levels show full, but prints are faded. What could be wrong?",
    options: [
      "Ink level sensors are always 100% accurate",
      "Clogged print head nozzles preventing ink flow, or ink level sensor malfunction - run cleaning cycles and nozzle checks",
      "Faded prints are normal with full ink",
      "Paper type causes faded prints exclusively"
    ],
    correct: 1,
    explanation: "Inkjet ink level discrepancies: Ink level monitoring: (1) Chip on cartridge tracks estimated usage, (2) Based on coverage calculations, not physical measurement, (3) Can be inaccurate (refilled cartridges, power outages), (4) Some printers use optical sensors (better accuracy). Clogged nozzles: (1) Ink in cartridge but can't reach paper, (2) Dried ink blocks microscopic nozzles, (3) Appears as faded/missing colors despite full cartridge, (4) Solution: cleaning cycles, nozzle checks. Troubleshooting: (1) Print nozzle check pattern (shows which colors/nozzles clogged), (2) Run 2-3 cleaning cycles, (3) Deep cleaning if standard doesn't work, (4) Manual cleaning (advanced - distilled water on print head), (5) If still faded, cartridge may be defective or empty despite sensor. Cartridge issues: (1) Air bubble in cartridge, (2) Protective seal not removed, (3) Expired ink (dried inside cartridge), (4) Counterfeit/refilled cartridge with chip showing full, (5) Incompatible cartridge. Testing: (1) Replace suspect cartridge with known-good one, (2) Swap cartridge to different slot (if possible) to isolate print head vs cartridge. Prevention: (1) Print weekly (prevents drying), (2) Use before expiration date, (3) Store cartridges properly (sealed, room temp), (4) Quality cartridges (OEM or reputable third-party). Sensor reset: some printers need cartridge reset after refilling (chip resetters available but may damage printer)."
  },
  {
    id: 8,
    question: "What is the purpose of the 'Print Test Page' function in Windows printer properties?",
    options: [
      "Test pages waste paper with no benefit",
      "Verifies printer hardware, driver, and connection working correctly - tests end-to-end printing without applications",
      "Only checks if printer is plugged in",
      "Test pages only show printer model"
    ],
    correct: 1,
    explanation: "Print test page purpose: What it tests: (1) Printer hardware functioning (all components working), (2) Driver correctly installed and communicating, (3) Connection working (USB, network, etc.), (4) Basic print quality, (5) Color capability (if color printer). Test page contents: (1) Windows logo/graphics, (2) Printer information (model, driver, port), (3) Color bars (verifies all colors), (4) Text (verifies clarity), (5) Patterns (checks alignment). When to use: (1) After initial printer installation (verify setup), (2) After driver update, (3) Troubleshooting (isolate application vs printer issues), (4) After replacing consumables, (5) Periodic verification. Location: (1) Devices and Printers → right-click printer → Printer Properties, (2) General tab → Print Test Page button. Interpretation: (1) Success = printer configured correctly, (2) Fails = check connection, driver, or hardware, (3) Poor quality = maintenance needed (cleaning, alignment), (4) Wrong colors = cartridge issue. Printer's built-in test page: (1) Print from printer control panel (bypasses computer), (2) Tests printer hardware only (not driver/connection), (3) Useful to isolate printer vs computer issues, (4) Successful printer test + failed Windows test = computer/driver problem. Alternative: print from Notepad (simple application test)."
  },
  {
    id: 9,
    question: "A printer is shared from a Windows computer. Users report they can see the printer but can't print to it. What should be verified?",
    options: [
      "Printer sharing is impossible",
      "Verify printer sharing permissions, ensure Print Spooler service running on host PC, check that host computer is powered on and connected to network",
      "Users need to buy their own printers",
      "Shared printers never work"
    ],
    correct: 1,
    explanation: "Windows printer sharing troubleshooting: Host computer requirements: (1) Must be powered on and logged in, (2) Network connection working, (3) Print Spooler service running (services.msc), (4) File and Printer Sharing enabled (Network settings), (5) Not sleeping/hibernating. Sharing configuration: (1) Printer Properties → Sharing tab → Share this printer checked, (2) Share name configured, (3) Render print jobs on client computers (usually checked). Permissions: (1) Sharing tab → Additional Drivers (for different Windows versions if needed), (2) Security tab → verify users/groups have Print permissions, (3) Everyone group = all users can print (common setting), (4) Specific users/groups for restrictions. Firewall: (1) Windows Firewall allow 'File and Printer Sharing', (2) Incoming connections permitted on required ports, (3) Network profile (Private vs Public - Private allows sharing). Client connection: (1) Add printer → Network printer, (2) Browse to \\HOSTNAME\PRINTERNAME, (3) Or search by printer name, (4) Driver installs from host or Windows Update. Troubleshooting: (1) Ping host computer from client, (2) Access \\HOSTNAME from client (tests file sharing), (3) Restart Print Spooler on host, (4) Check Event Viewer for errors. Limitations: (1) Host must stay on for printing, (2) Host performance affected, (3) Better solution: network printer (not shared from PC) or print server."
  },
  {
    id: 10,
    question: "What maintenance should be performed regularly to extend printer life and maintain quality?",
    options: [
      "Printers never need maintenance",
      "Clean printer interior/rollers monthly, run cleaning cycles, update firmware, replace consumables at recommended intervals, use quality paper",
      "Only replace paper when empty",
      "Maintenance shortens printer life"
    ],
    correct: 1,
    explanation: "Printer maintenance schedule: Monthly (light use) or Weekly (heavy use): (1) Clean exterior with damp cloth, (2) Remove dust from vents/fans, (3) Clean rollers and feed path, (4) Check for loose/torn paper pieces, (5) Verify paper loaded correctly. Inkjet specific: (1) Print test page weekly (prevents nozzle drying), (2) Run nozzle check and cleaning if needed, (3) Align print heads if colors misaligned. Laser specific: (1) Vacuum or blow out toner dust (outdoors), (2) Clean corona wires gently, (3) Wipe drum access area, (4) Check for toner spills. Quarterly: (1) Check firmware updates (manufacturer website), (2) Verify driver updates, (3) Clean paper path more thoroughly, (4) Test all features (duplex, color, etc.). Annually or per page count: (1) Replace maintenance kit (laser) - fuser, rollers, pads, (2) Replace drum if separate from toner, (3) Professional service if available. Continuous: (1) Use quality paper (reduces wear), (2) Keep paper in sealed package (moisture control), (3) Don't overload tray, (4) Remove jams carefully (direction of paper path), (5) Turn off properly (not at power strip - prevents park). Documentation: (1) Track page counts, (2) Record maintenance dates, (3) Note when consumables replaced. Benefits: (1) Extends printer life 2-3×, (2) Maintains print quality, (3) Reduces jams, (4) Prevents costly repairs."
  },
  {
    id: 11,
    question: "A printer's prints are skewed or crooked on the page. What adjustment can fix this?",
    options: [
      "Skewed prints cannot be corrected",
      "Check paper guides in tray are properly adjusted to paper size, ensure paper loaded straight, clean rollers that may be gripping unevenly",
      "Replace entire printer",
      "Paper orientation doesn't affect skewing"
    ],
    correct: 1,
    explanation: "Skewed/crooked print causes: Paper loading: (1) Paper guides too loose (paper shifts during feeding), (2) Paper guides too tight (binds paper, causes skewing), (3) Mixed paper sizes in tray, (4) Paper not aligned against guides, (5) Bent/curled paper. Adjusting paper guides: (1) Adjust width guides to paper width (snug but not tight), (2) Adjust length guide to paper length, (3) No gaps but paper moves freely, (4) Both sides adjusted equally. Feed rollers: (1) Worn/dirty rollers grip unevenly, (2) Clean with lint-free cloth (slightly damp), (3) Multiple sheets feeding causes skewing, (4) Replace worn rollers (maintenance kit). Paper quality: (1) Curled paper feeds crooked, (2) Damp paper (improper storage) causes issues, (3) Damaged paper (torn corners), (4) Wrong weight paper for printer. Mechanical issues: (1) Rollers misaligned (impact, wear), (2) Paper sensor misaligned, (3) Internal guides bent/broken, (4) May require service. Testing: (1) Try different paper (isolate paper vs printer), (2) Single sheet manual feed (bypasses tray mechanism), (3) Different tray (if multiple trays), (4) Print alignment page from printer. Prevention: (1) Store paper flat in sealed package, (2) Fan paper before loading, (3) Adjust guides properly every time, (4) Don't overload tray (weight causes sagging), (5) Regular cleaning. Minor skewing (<5mm): acceptable in some environments. Severe skewing: affects professional appearance, causes jams."
  },
  {
    id: 12,
    question: "What does 'stapler unit' or 'finisher' mean in printer specifications?",
    options: [
      "All printers have staplers built in",
      "Optional accessory that automatically staples printed documents - common in office copiers/MFPs for professional document finishing",
      "Staplers are unrelated to printers",
      "Finishers only fold paper"
    ],
    correct: 1,
    explanation: "Printer finishing options: Stapler/finisher: (1) Automatically staples multi-page documents, (2) Corner staple, edge staple, or saddle-stitch (booklet), (3) Capacity varies (typically 20-50 sheets), (4) Staple cartridges need replacement (10,000+ staples). Hole punch unit: (1) Punches holes for binder filing, (2) 2-hole or 3-hole configurations, (3) Adjustable for different paper sizes. Folder: (1) Automated paper folding, (2) Letter fold (tri-fold), half-fold, z-fold, (3) For brochures, letters, mailings. Booklet maker: (1) Creates saddle-stitched booklets, (2) Folds and staples center, (3) Makes professional booklets automatically. Mailbox/offset bins: (1) Multiple output bins, (2) Offset stacking (alternates for job separation), (3) Sorts jobs for multiple users. Implementation: (1) Usually high-end copiers/MFPs, (2) Attached modules (expand printer physically), (3) Configuration in print driver, (4) Expensive upgrades ($1000-$5000+). Use cases: (1) Reports (auto-stapled), (2) Presentations (professional finish), (3) High-volume offices (saves manual labor), (4) Print shops (booklet production). Driver settings: (1) Enable in print properties, (2) Specify staple position, (3) Select fold type, (4) Configure punch options. Maintenance: (1) Refill staples regularly, (2) Clear staple jams, (3) Empty punch waste, (4) Service moving parts. Consumer printers: no finishers (manual finishing required)."
  },
  {
    id: 13,
    question: "A printer shows 'Low Memory' or 'Memory Overflow' error when printing complex documents. What can resolve this?",
    options: [
      "Printer memory cannot be upgraded",
      "Add more RAM to printer (if supported), reduce document complexity, lower print resolution, or enable printer spooling on computer",
      "Documents cannot be simplified",
      "Memory errors mean printer is broken"
    ],
    correct: 1,
    explanation: "Printer memory issues: Causes: (1) Complex graphics (high-res photos, vectors), (2) Large page size (11×17, tabloid), (3) Multiple fonts/embedded fonts, (4) High resolution (1200+ DPI), (5) Insufficient printer RAM. Symptoms: (1) 'Memory Overflow' error, (2) Partial page printing (cuts off mid-page), (3) Garbled output, (4) Slow processing/timeout. Solutions: Document optimization: (1) Reduce image resolution (300 DPI sufficient for print), (2) Simplify graphics (fewer objects), (3) Use standard fonts (not embedded), (4) Split large documents (print in sections). Print settings: (1) Lower print resolution (600 DPI instead of 1200), (2) Print as image (rasterizes on computer, not printer), (3) Reduce color depth if applicable. Computer-side processing: (1) Enable 'Render print jobs on computer' (Windows), (2) Computer processes, sends bitmap to printer, (3) Uses computer RAM instead of printer RAM. Add printer RAM: (1) Check printer specs for maximum RAM, (2) Purchase compatible memory module, (3) Install in printer (varies by model - access panel), (4) Expensive ($50-$200+ for printer RAM). Driver updates: (1) Updated drivers may optimize memory usage, (2) PostScript vs PCL drivers handle differently. Workarounds: (1) Print draft mode, (2) Print fewer pages at time, (3) Use different printer with more memory, (4) PDF to image conversion (rasterizes). Prevention: optimize documents before printing. Enterprise printers have more RAM (512 MB-2 GB), consumer printers minimal (16-64 MB)."
  },
  {
    id: 14,
    question: "What should be done with used toner cartridges and ink cartridges?",
    options: [
      "Throw them in regular trash",
      "Recycle through manufacturer take-back programs, office supply stores, or cartridge recycling services - many components are reusable",
      "Cartridges cannot be recycled",
      "Bury them in the backyard"
    ],
    correct: 1,
    explanation: "Printer consumable recycling: Environmental impact: (1) Cartridges contain plastic, metal, electronics, (2) Landfill = 450-1000 years to decompose, (3) Toner powder messy if leaked, (4) Ink can contaminate if not disposed properly, (5) Manufacturing new cartridges energy-intensive. Recycling options: Manufacturer programs: (1) HP, Canon, Epson, Brother have free return programs, (2) Prepaid shipping labels, (3) Drop boxes at retailers, (4) Cartridges refurbished and resold. Office supply stores: (1) Staples, Office Depot accept cartridges, (2) Often give store credit ($2-$10 per cartridge), (3) Collection bins in stores. Third-party recyclers: (1) Cartridge World, specialty services, (2) Some refill cartridges (remanufactured), (3) May pay for empty cartridges. Nonprofit/charity: (1) Schools, organizations collect as fundraisers, (2) Earn money from recycling programs. Preparation: (1) Leave cartridge in sealed bag if provided, (2) Tape over any openings (prevent leaks), (3) Don't throw away boxes/packaging (reuse for return shipping). Refilling: (1) Third-party refilling services, (2) DIY kits available (messy, may void warranty), (3) Remanufactured cartridges (professionally refilled), (4) Quality varies (may damage printer). What not to do: (1) Regular trash (environmental harm), (2) Drain ink/dump toner (hazardous waste), (3) Burn (toxic fumes). Benefits: (1) Environmental (reduced waste), (2) Economic (refurbished cheaper), (3) Reduces manufacturing demand. Some workplaces have recycling contracts (scheduled pickup)."
  },
  {
    id: 15,
    question: "A printer consistently prints blank pages despite having plenty of ink/toner. What could be wrong?",
    options: [
      "Blank pages are normal",
      "Protective seal/tape still on cartridge, clogged print head (inkjet), or faulty transfer corona/drum (laser) - verify cartridge installation",
      "Paper type causes blank pages",
      "Blank pages cannot be troubleshooted"
    ],
    correct: 1,
    explanation: "Blank page troubleshooting: Inkjet causes: (1) Protective tape still on cartridge vents/nozzles (check new cartridges), (2) Completely clogged print head (severe - multiple deep cleanings or manual cleaning), (3) Cartridge not seated properly (remove, reseat firmly until clicks), (4) Empty cartridge (despite sensor showing full), (5) Print head failure (expensive repair, often replace printer). Laser causes: (1) Sealing tape on toner cartridge (remove before installing), (2) Toner empty or not shaking before installation, (3) Transfer corona wire broken/disconnected (toner not transferring to paper), (4) Drum not charging properly, (5) High-voltage power supply failure, (6) Toner cartridge defective (rare). Testing: (1) Print printer's built-in test page (from control panel, not computer), if blank = printer hardware issue, if prints = driver/computer issue, (2) Try different document/application, (3) Replace cartridge with known-good one, (4) Check if pages pass through printer (timing, temperature OK) just no image. Diagnosis steps: (1) Verify cartridge installed correctly, (2) Check for protective materials, (3) Run cleaning cycles (inkjet), (4) Print test page from printer (bypasses computer), (5) Inspect toner distribution (laser - should see toner on test area), (6) Check corona wire (laser - careful, fragile). Prevention: (1) Follow installation instructions carefully, (2) Remove all packing materials, (3) Shake toner cartridges before installing. If all else fails: printer hardware failure (costly repair, often exceeds printer value for consumer models)."
  }
];