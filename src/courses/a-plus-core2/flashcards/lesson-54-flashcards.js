export const lesson54Flashcards = [
  {
    id: 1,
    front: "What temperature range is ideal for computer equipment?",
    back: "68-72°F (20-22°C) for optimal performance and longevity. Too hot causes overheating, crashes, component damage. Too cold causes condensation. Data centers maintain strict temperature control. Consumer equipment tolerates wider range but performance suffers."
  },
  {
    id: 2,
    front: "What humidity level is recommended for computer equipment?",
    back: "40-60% relative humidity. Too low (below 40%) increases static electricity/ESD risk. Too high (above 60%) causes condensation, corrosion, short circuits. Data centers monitor and control humidity closely. Home/office less critical but avoid extremes."
  },
  {
    id: 3,
    front: "Why is humidity control important for electronics?",
    back: "Low humidity: increased ESD risk, static damage to components. High humidity: condensation on components, corrosion, electrical shorts, mold growth. Proper humidity (40-60%) prevents both issues. Critical in server rooms, moderate in offices."
  },
  {
    id: 4,
    front: "What is HVAC and why is it critical in data centers?",
    back: "Heating, Ventilation, Air Conditioning - climate control system. Critical because: servers generate massive heat, temperature affects performance/reliability, humidity must be controlled, prevents equipment failure. HVAC failure can shut down entire data center quickly."
  },
  {
    id: 5,
    front: "What is hot aisle/cold aisle configuration?",
    back: "Data center layout optimizing cooling efficiency. Cold aisles: server fronts face each other, receive cool air. Hot aisles: server backs face each other, exhaust hot air. Prevents mixing hot/cold air, improves cooling efficiency, reduces energy costs."
  },
  {
    id: 6,
    front: "What power protection devices should you know?",
    back: "Surge protector (voltage spike protection), UPS - Uninterruptible Power Supply (battery backup), line conditioner (voltage regulation), PDU - Power Distribution Unit (rack power), generator (long-term backup). Layer protection for critical systems."
  },
  {
    id: 7,
    front: "What is a surge protector and what does it protect against?",
    back: "Device protecting against voltage spikes/surges from lightning, power grid fluctuations. Diverts excess voltage to ground. Rated in joules (higher = more protection). Has limited lifespan - replace after major surge. Minimum protection for all electronics."
  },
  {
    id: 8,
    front: "What is a UPS (Uninterruptible Power Supply)?",
    back: "Battery backup providing power during outages. Allows graceful shutdown, protects against data loss, maintains uptime for critical systems. Types: standby, line-interactive, online. Run time: minutes to hours depending on battery size and load."
  },
  {
    id: 9,
    front: "What are the three types of UPS systems?",
    back: "Standby (offline): switches to battery when needed, brief delay, cheapest. Line-interactive: voltage regulation, faster switch, mid-range. Online (double-conversion): always on battery, zero delay, best protection, most expensive. Choose based on criticality."
  },
  {
    id: 10,
    front: "What is a line conditioner?",
    back: "Regulates voltage to consistent level, filters electrical noise. Protects against brownouts (low voltage) and overvoltage. More than surge protector, less than UPS. Good for areas with unstable power. Protects sensitive equipment from voltage fluctuations."
  },
  {
    id: 11,
    front: "What is a backup generator and when is it used?",
    back: "Long-term power backup for extended outages. Diesel or natural gas powered. Starts automatically when power fails (with UPS bridging gap). Used in: data centers, hospitals, critical facilities. Requires regular testing and maintenance."
  },
  {
    id: 12,
    front: "Why should equipment have proper ventilation?",
    back: "Prevents overheating, maintains optimal operating temperature, extends component lifespan, prevents thermal throttling (reduced performance), avoids heat-related failures. Don't block vents, ensure airflow around equipment, clean dust regularly."
  },
  {
    id: 13,
    front: "What causes equipment overheating and how do you prevent it?",
    back: "Causes: blocked vents, dust buildup, inadequate cooling, cramped space, high ambient temperature. Prevention: regular cleaning, proper airflow, adequate spacing, functioning fans, room temperature control, thermal paste replacement (CPUs)."
  },
  {
    id: 14,
    front: "What is proper equipment spacing for ventilation?",
    back: "Leave space around equipment for airflow - minimum 2-3 inches all sides. Don't stack equipment tightly. Rack-mounted: use blanking panels for unused spaces. Desktop: don't block vents with papers/objects. Ensure intake/exhaust not blocked."
  },
  {
    id: 15,
    front: "What dust and debris prevention methods exist?",
    back: "Air filtration systems, positive pressure in server rooms, regular cleaning schedule, dust covers when not in use, keep equipment off floor, sealed server room, minimize opening doors. Dust causes overheating, short circuits, fan failures."
  },
  {
    id: 16,
    front: "How should you clean dust from computer equipment?",
    back: "Power off and unplug, use compressed air (short bursts, upright can), hold fans still when cleaning, vacuum exterior only (not inside - ESD risk), microfiber cloth for surfaces, brush for stubborn dust. Work in ventilated area, wear safety glasses."
  },
  {
    id: 17,
    front: "What air quality concerns exist for equipment rooms?",
    back: "Dust particles (cause overheating), humidity (too high or low), chemical fumes (corrosion), smoke/fire, lack of fresh air circulation. Solutions: air filtration, HVAC with proper filters, maintain positive pressure, regular filter changes."
  },
  {
    id: 18,
    front: "What is the purpose of monitoring environmental conditions?",
    back: "Early warning of problems (temperature rising, humidity changes), prevent equipment damage, maintain optimal conditions, compliance documentation, trend analysis. Use: temperature sensors, humidity sensors, alerting systems. Critical in data centers."
  },
  {
    id: 19,
    front: "What environmental sensors should data centers have?",
    back: "Temperature sensors (monitor heat), humidity sensors (monitor moisture), water/leak detection (under raised floors, near AC), smoke detectors (fire prevention), door sensors (security). Alert if conditions exceed thresholds."
  },
  {
    id: 20,
    front: "What is the ideal power outlet configuration for equipment?",
    back: "Three-prong grounded outlets, sufficient quantity for equipment, dedicated circuits for high-draw devices, labeled circuits, no daisy-chaining power strips, verify ground with tester, separate outlets for redundant power supplies."
  },
  {
    id: 21,
    front: "Why should you avoid daisy-chaining power strips?",
    back: "Overloads circuits causing fire hazard, violates electrical codes, exceeds power strip rating, creates trip hazard with multiple cables, reduces surge protection effectiveness. Use single surge protector per outlet or PDU for racks."
  },
  {
    id: 22,
    front: "What is a PDU (Power Distribution Unit)?",
    back: "Rack-mounted power strip with multiple outlets for servers/equipment. Features: circuit breakers, surge protection, remote monitoring/switching, metered power usage, redundant inputs. Essential for server racks. More sophisticated than power strips."
  },
  {
    id: 23,
    front: "What causes electromagnetic interference (EMI) and how do you prevent it?",
    back: "Causes: motors, fluorescent lights, other electronics, power lines, radio transmitters. Effects: data corruption, signal degradation, screen flicker. Prevention: shielded cables, distance from sources, proper grounding, EMI filters, cable management."
  },
  {
    id: 24,
    front: "What is radio frequency interference (RFI)?",
    back: "Similar to EMI but specifically from radio frequencies. Sources: cell phones, wireless devices, radio transmitters, microwave ovens. Can disrupt wireless networks, cause connection drops. Prevention: distance from sources, shielded cables, proper channel selection (Wi-Fi)."
  },
  {
    id: 25,
    front: "Why keep liquids away from equipment?",
    back: "Water/liquids cause short circuits, component damage, corrosion, data loss. Even small amounts dangerous. Rules: no drinks near equipment, leak detection under raised floors (AC condensation), address spills immediately, power off affected equipment."
  },
  {
    id: 26,
    front: "What are server room access controls?",
    back: "Physical security restricting entry: badge readers, biometrics, mantrap, security cameras, visitor logs, escort requirements, separate zones for different security levels. Prevents unauthorized access, theft, sabotage. IT staff only in most cases."
  },
  {
    id: 27,
    front: "What fire suppression systems are used in data centers?",
    back: "Clean agent systems (FM-200, Inergen, Novec 1230) - gas-based, safe for electronics, don't leave residue. NOT water sprinklers (destroy equipment). Pre-action systems require two triggers. VESDA (Very Early Smoke Detection) for early warning."
  },
  {
    id: 28,
    front: "Why are clean agent fire suppression systems used instead of water?",
    back: "Water destroys electronics, causes corrosion, damages data. Clean agents: suppress fire without residue, safe to breathe (in concentrations used), equipment-safe, fast suppression. Critical for data centers where water would cause millions in damage."
  },
  {
    id: 29,
    front: "What power redundancy measures exist for critical systems?",
    back: "Dual power supplies (server PSUs from separate circuits), redundant UPS units, backup generators, dual utility feeds, batteries, automatic transfer switches. Layer redundancy - if one fails, others maintain power. Critical for 24/7 uptime requirements."
  },
  {
    id: 30,
    front: "What is the purpose of raised floors in data centers?",
    back: "Allow cold air distribution from below, hide cabling (power, network), facilitate cooling (cold aisle/hot aisle), easy reconfiguration, protect cables from damage. Include leak detection underneath (AC condensation). Common in professional data centers."
  }
];