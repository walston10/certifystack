export const lesson53Quiz = [
  {
    id: 1,
    question: "A technician is about to work inside a desktop computer to replace the RAM. What should they do FIRST to prevent electrostatic discharge (ESD) damage to components?",
    options: [
      "Nothing - ESD isn't a real concern",
      "Wear an ESD wrist strap connected to a grounded surface or touch an unpainted metal part of the case",
      "Work on a carpeted floor while wearing wool socks",
      "Rub a balloon on their hair first"
    ],
    correct: 1,
    explanation: "ESD protection is critical - static electricity can destroy sensitive electronic components (especially RAM, CPUs, expansion cards). Prevention: wear an ESD wrist strap attached to grounded surface or the computer's unpainted metal case (with PSU connected to grounded outlet but powered off), use ESD mat, work on hard floors (not carpet), avoid synthetic clothing. ESD is a serious threat - invisible discharges destroy components. Carpet and wool generate static. Balloons generate static. Always ground yourself before handling internal components."
  },
  {
    id: 2,
    question: "A technician notices the power supply in a computer is making a burning smell and feels very hot. What should they do immediately?",
    options: [
      "Continue working - power supplies are supposed to be hot",
      "Immediately power off and unplug the computer, then replace the power supply",
      "Spray water on it to cool it down",
      "Open the power supply case to investigate"
    ],
    correct: 1,
    explanation: "Burning smell and excessive heat indicate power supply failure - potential fire hazard. Action: immediately shut down and unplug computer, do NOT use until power supply is replaced. Never open power supplies - they contain high-voltage capacitors that remain charged even after unplugging (can deliver lethal shock). Never spray electronics with water. Some warmth is normal, but burning smell is danger sign. Power supplies are not field-repairable. Replace faulty PSUs immediately - failure risks data loss, component damage, and fire."
  },
  {
    id: 3,
    question: "A small electrical fire starts in a computer equipment room. Which type of fire extinguisher should be used for electrical fires?",
    options: [
      "Class A (wood, paper)",
      "Class B (flammable liquids)",
      "Class C (electrical) or ABC (multi-purpose)",
      "Water-based extinguisher"
    ],
    correct: 2,
    explanation: "Class C extinguishers are designed for electrical fires - they use non-conductive agents (CO2, dry chemical) that won't conduct electricity or damage equipment. ABC extinguishers work on multiple fire types including electrical. NEVER use water or Class A (wood/paper) extinguishers on electrical fires - water conducts electricity and can cause electrocution. Class B is for flammable liquids only. Know fire extinguisher locations and types in your workplace. In serious fires, evacuate and call emergency services rather than fighting it yourself."
  },
  {
    id: 4,
    question: "A technician is lifting a heavy server to install it in a rack. What is the proper lifting technique to avoid back injury?",
    options: [
      "Bend at the waist, keep legs straight, lift with back muscles",
      "Bend at the knees, keep back straight, lift with leg muscles, hold load close to body",
      "Twist while lifting to reach the rack",
      "Lift as quickly as possible"
    ],
    correct: 1,
    explanation: "Proper lifting prevents back injuries: bend at knees (not waist), keep back straight, lift with powerful leg muscles (not back), hold load close to body (reduces strain), avoid twisting while lifting, ask for help with heavy objects (servers, UPS units, CRT monitors), use mechanical assistance (dollies, carts). Bending at waist stresses back. Straight legs force back to bear weight. Twisting while loaded causes injury. Quick jerky motions risk injury. Back injuries are common in IT - use proper technique. If too heavy, get help."
  },
  {
    id: 5,
    question: "A technician is working in a server room with exposed cables running across the floor. What is the primary safety concern and solution?",
    options: [
      "Cables look messy - purely aesthetic issue",
      "Trip hazard - use cable management, covers, or raceways to secure cables",
      "Cables are fine on the floor",
      "Step on cables to hold them down"
    ],
    correct: 1,
    explanation: "Exposed cables create trip hazards leading to falls and injuries. Solutions: use cable management (cable trays, raceways, conduits), secure cables along walls/ceilings, use cable covers for temporary runs, mark hazards with warning tape. Additional benefits: prevents cable damage from being stepped on, maintains professional appearance, improves airflow. This isn't just aesthetics - trip hazards cause serious workplace injuries. Stepping on cables damages them and doesn't eliminate trip risk. Proper cable management is critical workplace safety - OSHA requirement in many jurisdictions."
  },
  {
    id: 6,
    question: "A technician is about to work inside a laser printer to clear a paper jam. What critical safety step must they take regarding the fuser?",
    options: [
      "Touch the fuser immediately to check temperature",
      "Wait for the fuser to cool (can reach 400°F/200°C) before touching - serious burn hazard",
      "Spray cold water on the fuser to cool it quickly",
      "The fuser is never hot"
    ],
    correct: 1,
    explanation: "Laser printer fusers operate at extremely high temperatures (up to 400°F/200°C) to melt toner onto paper. Touching hot fusers causes severe burns. Safety: power off printer, wait 15-30 minutes for cooling before opening (or check manufacturer guidelines), avoid touching fuser assembly, use proper tools (not hands) to remove jams near fuser. NEVER spray water (electrical hazard, thermal shock damage). Fusers remain hot long after printing stops. Paper jams near fusers require patience - rushing causes injuries. Always respect heat warnings in printer documentation."
  },
  {
    id: 7,
    question: "A technician is disposing of used printer toner cartridges. What is the proper disposal method?",
    options: [
      "Throw in regular trash",
      "Recycle through manufacturer or authorized recycling program - toner is hazardous waste",
      "Burn them in a fire pit",
      "Pour toner down the drain"
    ],
    correct: 1,
    explanation: "Toner cartridges contain toner powder (potential health hazard if inhaled), plastic, and sometimes toxic substances. Proper disposal: use manufacturer recycling programs (often provide prepaid shipping labels), authorized recycling centers, office supply stores (many accept cartridges). NEVER: throw in regular trash (environmental hazard), burn (releases toxins), pour down drains (environmental contamination). Most jurisdictions regulate toner disposal. Recycling conserves resources and prevents environmental damage. Many manufacturers offer refilled cartridges - both economical and environmentally friendly."
  },
  {
    id: 8,
    question: "A technician smells a strong chemical odor coming from a battery. The battery case appears swollen. What should they do?",
    options: [
      "Continue using the battery - swelling is normal",
      "Immediately stop using, remove battery (if possible), dispose properly, and ventilate area - battery is failing and dangerous",
      "Puncture the battery to release pressure",
      "Charge the battery to fix it"
    ],
    correct: 1,
    explanation: "Swollen batteries indicate failure - internal chemical reactions generating gas. Dangers: fire, explosion, toxic fumes, acid leakage. Action: stop using immediately, remove from device (if removable), place in fireproof container in well-ventilated area away from flammable materials, dispose at battery recycling center (never regular trash). NEVER puncture (causes fire/explosion), charge (increases pressure/risk), or continue using. Ventilate area if strong odor. Swelling is serious failure sign. Li-ion battery fires are intense and difficult to extinguish. Handle failed batteries with extreme caution."
  },
  {
    id: 9,
    question: "A technician needs to use a ladder to access network equipment mounted high on a wall. What safety precautions should they take?",
    options: [
      "Use any ladder regardless of condition",
      "Ensure ladder is stable, proper height, rated for weight, have someone hold it, maintain three-point contact",
      "Stand on the very top step for maximum reach",
      "Carry heavy equipment while climbing"
    ],
    correct: 1,
    explanation: "Ladder safety prevents falls: inspect ladder for damage before use, use proper ladder height (don't overreach), verify weight rating exceeds user + equipment weight, place on stable level surface, have someone steady ladder (spotter), maintain three-point contact while climbing (two hands and one foot, or two feet and one hand), never stand on top step or overreach (move ladder instead). Carry tools in tool belt - both hands free for climbing. Falls from ladders cause serious injuries. When in doubt, use mechanical lift or get help. Follow OSHA ladder safety guidelines."
  },
  {
    id: 10,
    question: "A technician is working on equipment that requires safety goggles and air filtration mask according to the Material Safety Data Sheet (MSDS/SDS). What does this indicate?",
    options: [
      "The MSDS is overly cautious - ignore it",
      "The material poses health hazards (eye irritation, respiratory issues) - follow all MSDS safety recommendations",
      "Safety equipment is optional",
      "MSDS recommendations only apply to chemistry labs"
    ],
    correct: 1,
    explanation: "MSDS/SDS (Safety Data Sheets) list chemical hazards and required safety precautions. If PPE (Personal Protective Equipment) is specified, the material is hazardous - potentially causing eye damage, respiratory issues, skin irritation, etc. Always follow MSDS recommendations: wear specified PPE, ensure proper ventilation, follow disposal procedures, know emergency procedures. MSDS is legal requirement for hazardous materials and applies to all industries. Ignoring safety equipment risks health - chemical exposure can cause permanent injury. Employers must provide required PPE. Review MSDS before handling unfamiliar chemicals."
  },
  {
    id: 11,
    question: "A technician is working inside a desktop computer case and feels a tingling sensation when touching components. What should they do?",
    options: [
      "Continue working - tingling is normal",
      "Immediately stop, unplug the computer, and check for grounding issues or electrical faults",
      "Work faster to finish before getting shocked",
      "Ignore it and keep working"
    ],
    correct: 1,
    explanation: "Tingling indicates electrical current passing through body - dangerous situation that can lead to serious shock. Actions: immediately stop work, unplug computer from power, verify power supply is off, check for: improper grounding, damaged power cables, short circuits, moisture. Never continue working when feeling electrical sensations. Tingling is NOT normal - it's warning of electrical hazard. Repeated exposure risks serious injury or death. Verify outlet is properly grounded. If problem persists after unplugging, component may have short circuit. Address electrical issues before resuming work - safety first."
  },
  {
    id: 12,
    question: "A technician is decommissioning old CRT monitors. What specific safety hazard do CRT monitors pose even when unplugged?",
    options: [
      "They're too heavy (true but not the main electrical hazard)",
      "CRT tubes contain high-voltage capacitors that remain charged after unplugging - can deliver lethal shock",
      "They emit radiation when off",
      "No hazards - CRTs are completely safe"
    ],
    correct: 1,
    explanation: "CRTs contain high-voltage components (15,000-30,000 volts) and large capacitors that remain charged for extended periods after unplugging - can deliver lethal shock even months later. Safety: never open CRT case, discharge capacitors using proper procedures (if qualified), use professional disposal services, handle carefully (glass implosion risk). CRTs also contain lead and other hazardous materials - environmental disposal concerns. They are heavy (back injury risk). No radiation when off. Never attempt internal CRT repairs without specialized training. Professional disposal is safest approach."
  },
  {
    id: 13,
    question: "A technician notices the power cable to a computer has damaged insulation exposing copper wires. What should they do?",
    options: [
      "Wrap it with regular tape and continue using it",
      "Replace the cable immediately - exposed wires are shock and fire hazards",
      "Use the cable until it completely fails",
      "Nothing - exposed wires improve conductivity"
    ],
    correct: 1,
    explanation: "Damaged power cables pose serious hazards: electrical shock (exposed conductors), fire risk (short circuits, arcing), equipment damage. Action: immediately replace cable - never use damaged power cables. NEVER repair with regular tape (not rated for electrical insulation, heat). Use only UL-listed, properly rated replacement cables. Inspect all cables regularly for: frayed insulation, exposed wires, burn marks, kinks, damage at connectors. Damaged cables are cheap to replace but can cause expensive damage or injury. Report damaged cables to prevent others from using them."
  },
  {
    id: 14,
    question: "A server room's air conditioning has failed and the temperature is rising above 90°F (32°C). What is the primary concern and action?",
    options: [
      "No concern - servers work fine at any temperature",
      "Equipment overheating causing failures and shortened lifespan - shut down non-critical systems until cooling is restored",
      "Run more servers to generate heat",
      "Open the server room door only"
    ],
    correct: 1,
    explanation: "Server equipment requires controlled temperature (typically 64-80°F / 18-27°C). High temperatures cause: component failure, data loss, reduced lifespan, thermal throttling (reduced performance). Actions: shut down non-critical systems (reduces heat generation), improve ventilation (open doors if safe, add temporary fans - carefully positioned), contact HVAC repair urgently, monitor critical system temperatures. Servers aren't designed for extreme heat. Running more servers worsens problem. Just opening doors provides limited cooling. Proper environmental controls are critical - overheating is serious threat to data center operations. Prevention: redundant cooling, temperature monitoring alerts."
  },
  {
    id: 15,
    question: "A technician is working alone in a data center after hours and feels dizzy with difficulty breathing. What should they do FIRST?",
    options: [
      "Take a nap in the data center",
      "Immediately exit to fresh air and seek medical attention - possible oxygen displacement or toxic fume exposure",
      "Continue working through the symptoms",
      "Close all doors to prevent air circulation"
    ],
    correct: 1,
    explanation: "Dizziness and breathing difficulty indicate serious environmental hazard: oxygen displacement (from fire suppression systems like FM-200, Halon), toxic fumes (battery leak, fire), carbon monoxide, poor ventilation. Immediate action: evacuate to fresh air, call for help (emergency services if severe), don't return until environment is safe and cause identified. Never work through symptoms - can lose consciousness and die. Never work alone in spaces with oxygen-displacement fire suppression. Data centers require environmental monitoring and safety procedures. Your life is more valuable than equipment. Oxygen displacement deaths occur in data centers - take environmental hazards seriously."
  }
];