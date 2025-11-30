export const lesson26Flashcards = [
  {
    id: 1,
    front: "What are the 7 steps of the laser printing process?",
    back: "1. Processing: Computer sends data to printer. 2. Charging: Corona wire charges drum uniformly (-600V). 3. Exposing: Laser writes image, neutralizes exposed areas. 4. Developing: Toner attracted to exposed areas. 5. Transferring: Image transferred from drum to paper. 6. Fusing: Heat and pressure permanently bond toner. 7. Cleaning: Blade cleans residual toner from drum."
  },
  {
    id: 2,
    front: "What happens during the charging step of laser printing?",
    back: "Primary corona wire (or charging roller) applies uniform negative charge to photosensitive drum (typically -600V). Prepares drum for imaging. If corona wire dirty: faded prints, lines on page. Critical first step after processing."
  },
  {
    id: 3,
    front: "What happens during the exposing step of laser printing?",
    back: "Laser beam writes image onto charged drum. Laser neutralizes charge where light hits. Creates electrostatic latent image. Areas hit by laser attract toner (or vice versa depending on design). Creates pattern that will become printed image."
  },
  {
    id: 4,
    front: "What happens during the developing step of laser printing?",
    back: "Toner particles (negatively charged) attracted to exposed areas on drum (neutral or positively charged). Developer roller presents toner to drum. Toner sticks only to image areas. Creates visible toner image on drum. Toner remains on drum until transfer."
  },
  {
    id: 5,
    front: "What happens during the transferring step of laser printing?",
    back: "Paper receives positive charge from transfer corona wire/roller. Toner (negatively charged) attracted from drum to paper. Static charge holds toner temporarily. Not permanent yet - toner just sitting on paper. Paper then moves to fuser."
  },
  {
    id: 6,
    front: "What happens during the fusing step of laser printing?",
    back: "Heat (around 200°C/400°F) and pressure permanently bond toner to paper. Fuser assembly: heated roller and pressure roller. Melts toner particles into paper fibers. Why paper hot when exiting laser printer. Most energy-intensive step. Failed fuser: toner smears easily."
  },
  {
    id: 7,
    front: "What happens during the cleaning step of laser printing?",
    back: "Cleaning blade removes residual toner from drum. Erase lamp removes any remaining electrical charge. Prepares drum for next image. Waste toner collected in waste toner container. Completes cycle - ready for next page. Poor cleaning: ghost images, background shading."
  },
  {
    id: 8,
    front: "What are the main components of a laser printer?",
    back: "Photosensitive drum: Holds image. Toner cartridge: Powder ink. Fuser assembly: Heat and pressure unit. Transfer belt/roller: Moves toner to paper. Primary corona wire/charging roller: Charges drum. Laser/LED: Writes image. Cleaning blade: Removes residual toner."
  },
  {
    id: 9,
    front: "What maintenance does a laser printer require?",
    back: "Replace toner cartridge when low. Replace drum (separate or integrated with toner). Replace fuser assembly (~100K pages). Clean corona wire if accessible. Calibrate printer. Update firmware. Clean paper path. Use recommended paper. Maintenance kit typically: fuser, rollers, separation pads."
  },
  {
    id: 10,
    front: "What is toner and how does it differ from ink?",
    back: "Toner: Fine plastic/polymer powder (not liquid). Melted onto paper by heat. Doesn't dry out. Long shelf life. Used in laser/LED printers. CMYK colors + black. Messy if spilled. Ink: Liquid dye or pigment. Absorbs into paper or sits on surface. Dries out. Used in inkjet. Better color photos."
  },
  {
    id: 11,
    front: "How do inkjet printers work?",
    back: "Print head sprays tiny droplets of liquid ink onto paper. Thermal inkjet: Heat creates bubble forcing ink out. Piezoelectric: Crystal vibrates to push ink. CMYK ink (Cyan, Magenta, Yellow, Black). Print head moves horizontally while paper feeds vertically. Higher DPI = better quality."
  },
  {
    id: 12,
    front: "What are inkjet printer components?",
    back: "Ink cartridges: CMYK (Cyan, Magenta, Yellow, Black) separate or combined. Print head: Nozzles spray ink (integrated with cartridge or separate). Carriage: Moves print head. Paper feed: Rollers advance paper. Encoder strip: Tracks carriage position. Maintenance station: Cleans print heads."
  },
  {
    id: 13,
    front: "What maintenance does an inkjet printer require?",
    back: "Replace ink cartridges when empty. Clean print heads (automatic cleaning cycle). Align print heads (calibration). Clean paper rollers. Use printer regularly (prevents clogs). Print test page periodically. Use quality paper. Don't let printer sit unused for months."
  },
  {
    id: 14,
    front: "What causes clogged print heads in inkjet printers?",
    back: "Dried ink in nozzles. Not using printer regularly. Low-quality ink. Empty cartridges left in printer. Symptoms: Missing colors, horizontal lines, faded prints. Solutions: Automatic cleaning cycle, manual cleaning with distilled water, replace print head if severe. Prevention: Print weekly."
  },
  {
    id: 15,
    front: "What is the difference between dye-based and pigment-based ink?",
    back: "Dye-based: Liquid dissolved in solution, vibrant colors, better for photos, faster drying, less water-resistant, fades over time. Pigment-based: Particles suspended in liquid, water-resistant, longer-lasting, better text, slower drying, more expensive. Some printers use both."
  },
  {
    id: 16,
    front: "What is a thermal printer and where is it used?",
    back: "Uses heat to create images. No ink or toner needed. Types: Direct thermal (heat-sensitive paper), Thermal transfer (ribbon + heat). Used for: receipts, shipping labels, tickets, barcodes. Quiet operation. Low maintenance. Direct thermal fades over time (heat, sunlight)."
  },
  {
    id: 17,
    front: "What is direct thermal printing?",
    back: "Heat applied directly to heat-sensitive paper. Paper darkens where heated. No ribbon needed. Paper expensive and fades over time. Used for: receipts, temporary labels, tickets. Cannot print in color. Cheap printer, expensive paper. Simple mechanism."
  },
  {
    id: 18,
    front: "What is thermal transfer printing?",
    back: "Heat transfers ink from ribbon to paper. Permanent printing. Regular paper can be used. Ribbon consumed during printing. Used for: durable labels, barcodes, product tags. More expensive than direct thermal. Prints last longer. Can print in color with color ribbons."
  },
  {
    id: 19,
    front: "What is an impact printer (dot matrix)?",
    back: "Strikes inked ribbon against paper with pins. Creates characters from dot patterns. 9-pin or 24-pin print heads (more pins = better quality). Very loud. Uses continuous feed or friction feed paper. Can print multi-part carbon forms. Legacy technology. Still used: invoices, receipts requiring copies."
  },
  {
    id: 20,
    front: "What are the advantages and disadvantages of dot matrix printers?",
    back: "Advantages: Print carbon copies, very low cost per page, works in harsh environments, reliable. Disadvantages: Very loud, poor print quality, slow, limited graphics capability, hard to find ribbons. Mostly obsolete except specialty applications."
  },
  {
    id: 21,
    front: "What is a 3D printer and how does FDM work?",
    back: "Creates physical objects layer by layer. FDM (Fused Deposition Modeling): Most common. Melts plastic filament, extrudes through nozzle, builds object layer by layer. Heated print bed helps adhesion. Materials: PLA (easy), ABS (stronger), PETG, TPU (flexible). Requires: CAD file (STL), slicing software."
  },
  {
    id: 22,
    front: "What are common 3D printing filament types?",
    back: "PLA: Easiest to print, biodegradable, low temperature, brittle. ABS: Stronger, higher temp, fumes (needs ventilation), warps easily. PETG: Strong, flexible, moisture resistant. TPU: Flexible, rubber-like. Nylon: Very strong, absorbs moisture. Each requires different temperatures and settings."
  },
  {
    id: 23,
    front: "What printer connectivity options exist?",
    back: "USB: Direct connection, most common, reliable. Ethernet: Network printer, wired, reliable. Wi-Fi: Wireless network printing, convenient, can be unstable. Bluetooth: Direct wireless, short range, rare for printers. Parallel: Legacy (25-pin), obsolete. Cloud printing: Print via internet. Many support multiple types."
  },
  {
    id: 24,
    front: "What is the difference between local and network printers?",
    back: "Local: Connected directly to one computer via USB. Only that computer can print. Simple setup. Network: Connected to network (Ethernet/Wi-Fi). Multiple computers can print. Requires IP address. Share local printer: Others can print through host computer (must be on)."
  },
  {
    id: 25,
    front: "What print quality issues might you troubleshoot?",
    back: "Laser: Faded (low toner), vertical lines (dirty drum), smearing (failed fuser), ghost images (cleaning blade). Inkjet: Streaks (clogged nozzles), wrong colors (empty cartridge), blurry (misaligned heads). Both: Paper jams, blank pages (no toner/ink), wrinkled paper (damp paper/bad rollers)."
  },
  {
    id: 26,
    front: "What causes vertical lines on laser printer output?",
    back: "Scratched or dirty photosensitive drum. Dirty or damaged corona wire. Toner smeared on fuser. Lines repeat at drum circumference intervals. Solution: Clean drum/corona wire if accessible, replace drum/toner cartridge, replace fuser if damaged. Preventable with regular maintenance."
  },
  {
    id: 27,
    front: "What causes blank pages from a printer?",
    back: "Laser: Empty toner, sealing tape still on new toner, failed transfer corona, broken laser. Inkjet: Empty ink cartridges, clogged print heads, protective tape on cartridges. Both: Wrong driver, print job error. Check: toner/ink levels, remove protective packaging, test page."
  },
  {
    id: 28,
    front: "What is printer calibration and when should you do it?",
    back: "Aligns print head position for accurate printing. Color calibration matches output to standards. Laser: Density and color registration. Inkjet: Print head alignment. When: New cartridges installed, poor quality output, colors misaligned. Automatic process via printer menu or software."
  },
  {
    id: 29,
    front: "What paper types should you know?",
    back: "Plain: 20lb standard, everyday printing. Cardstock: Thick, business cards, invitations. Photo: Glossy/matte, coated for photos, inkjet specific. Transparency: Clear plastic, presentations. Label: Adhesive-backed. Continuous feed: Tractor feed for impact printers. Use correct type for printer and purpose. Weight measured in lb or gsm."
  },
  {
    id: 30,
    front: "What environmental factors affect printers?",
    back: "Temperature: Extreme heat/cold affects toner/ink. Humidity: High moisture causes paper jams, low causes static. Dust: Clogs mechanisms, print quality issues. Ventilation: Laser printer ozone, 3D printer fumes. Paper storage: Keep dry, room temperature. Ideal: 68-72°F, 40-60% humidity."
  }
];