export const lesson54Quiz = [
  {
    id: 1,
    question: "A server room's temperature monitor shows 85°F (29°C) and rising. The servers are starting to slow down and some are shutting off. What is happening and what should be done?",
    options: [
      "This is normal - servers prefer hot environments",
      "Servers are overheating and thermal throttling - restore HVAC immediately or shut down non-critical systems",
      "Increase the temperature further to improve performance",
      "Turn off all cooling to save energy"
    ],
    correct: 1,
    explanation: "Server rooms require controlled temperature (64-80°F / 18-27°C). Above this range, servers thermal throttle (reduce performance to prevent damage) or shut down for protection. High temperatures cause: hardware failure, reduced lifespan, data corruption, system instability. Actions: restore HVAC/cooling immediately, shut down non-critical systems (reduces heat generation), improve temporary ventilation, monitor critical system temperatures. Servers don't prefer heat - they're designed for cool, stable environments. Increasing heat causes failures. Cooling is essential, not optional. Environmental controls are critical infrastructure."
  },
  {
    id: 2,
    question: "A data center experiences a complete power outage. The UPS (Uninterruptible Power Supply) activates. What is the PRIMARY purpose of the UPS?",
    options: [
      "To provide unlimited power indefinitely",
      "To provide temporary power (minutes to hours) allowing graceful shutdown or until generator starts",
      "To make power outages last longer",
      "UPS devices serve no purpose"
    ],
    correct: 1,
    explanation: "UPS provides battery backup power for limited time (typically 5-30 minutes for servers, longer for critical systems) to: allow graceful shutdown (prevent data corruption), keep systems running until generator starts, prevent sudden power loss damage, maintain critical systems during brief outages. UPS isn't infinite power - runtime depends on battery capacity and load. UPS prevents outage damage, not extend outages. UPS is essential data center infrastructure. For extended outages, generators provide longer-term power. UPS bridges the gap between power loss and alternative power or safe shutdown."
  },
  {
    id: 3,
    question: "A technician notices excessive humidity (75%) in the server room shown on environmental monitors. What problems can this cause?",
    options: [
      "No problems - humidity is beneficial for electronics",
      "Condensation on components, corrosion, and potential short circuits",
      "Humidity makes servers run faster",
      "High humidity prevents fires"
    ],
    correct: 1,
    explanation: "High humidity (>60%) causes: condensation on cold components (short circuits), corrosion of metal contacts, mold growth, reduced equipment lifespan. Ideal humidity: 40-60%. Low humidity (<40%) increases static electricity/ESD risk. Solutions: dehumidification, proper HVAC control, humidity monitoring. Humidity doesn't benefit electronics - it damages them. Doesn't improve performance. While water suppresses some fires, the electrical/corrosion risks far outweigh any benefit. Environmental monitoring includes both temperature AND humidity - both affect equipment reliability. Maintain proper humidity range for equipment protection."
  },
  {
    id: 4,
    question: "A company is choosing between different UPS types for their server room. Which UPS type provides the BEST power protection by always running equipment from battery power?",
    options: [
      "Standby/Offline UPS (switches to battery when needed)",
      "Line-Interactive UPS (conditions power, switches to battery)",
      "Online/Double-Conversion UPS (always runs from battery, provides cleanest power)",
      "All UPS types provide identical protection"
    ],
    correct: 2,
    explanation: "UPS types in order of protection: (1) Online/Double-Conversion: always converts AC to DC (battery) then back to AC - perfect power, zero switchover time, most expensive, best for sensitive equipment. (2) Line-Interactive: conditions power, switches to battery when needed - good for most servers. (3) Standby/Offline: passes power through until outage detected, then switches to battery - brief switchover delay, cheapest, adequate for workstations. Online UPS provides best protection but costs more and generates heat. Choose based on equipment criticality and budget. Servers typically use line-interactive or online UPS."
  },
  {
    id: 5,
    question: "A server room uses hot aisle/cold aisle containment design. What is the purpose of this configuration?",
    options: [
      "To make the room look organized",
      "To improve cooling efficiency by separating hot exhaust from cold intake air",
      "To confuse technicians",
      "Hot and cold aisles serve no purpose"
    ],
    correct: 1,
    explanation: "Hot aisle/cold aisle prevents mixing of hot exhaust and cold intake air, improving cooling efficiency: Cold aisles face server fronts (intake), hot aisles face server backs (exhaust), HVAC supplies cold air to cold aisles, returns hot air from hot aisles. Benefits: improved efficiency (reduced cooling costs), better cooling performance, prevents hot spots, higher equipment density possible. Without this design, hot and cold air mix, reducing cooling effectiveness. This isn't cosmetic - it's engineering for thermal management. Proper airflow design is critical in modern data centers."
  },
  {
    id: 6,
    question: "During a severe thunderstorm, a facility experiences multiple brief power fluctuations and spikes. What power protection device BEST protects against voltage spikes and surges?",
    options: [
      "Extension cord",
      "Surge protector/suppressor (diverts excess voltage to ground)",
      "Power strip (no protection)",
      "Nothing needed - spikes are harmless"
    ],
    correct: 1,
    explanation: "Surge protectors/suppressors protect against voltage spikes and surges (from lightning, power grid switching) by diverting excess voltage to ground via MOVs (Metal Oxide Varistors). Key specs: clamping voltage (lower is better, e.g., 330V), joule rating (higher = more protection, 1000+ for computers), response time. Extension cords provide no protection. Power strips without surge protection don't protect against spikes. Voltage spikes damage/destroy components. Quality surge protectors are essential - they sacrifice themselves protecting equipment. Replace surge protectors after major surges or per manufacturer recommendations (joule capacity depletes over time)."
  },
  {
    id: 7,
    question: "A server room's HVAC system has failed and won't be repaired for 8 hours. What temporary measures can help manage temperature?",
    options: [
      "Do nothing and hope for the best",
      "Open doors for ventilation, add portable AC units/fans, shut down non-critical systems, monitor temperatures closely",
      "Close all doors and windows to trap cool air",
      "Turn on more servers to generate airflow"
    ],
    correct: 1,
    explanation: "Temporary cooling measures during HVAC failure: open doors (if secure and provides airflow), add portable cooling (spot coolers, industrial fans), shut down non-critical systems (reduces heat generation), stagger system usage, monitor temperatures continuously (use hardware monitoring, thermal sensors), prioritize critical systems. Closing doors traps heat (worsens problem). More servers generate MORE heat (catastrophic). Hoping isn't a strategy. Have HVAC failure contingency plans - identify critical vs. non-critical systems, rental cooling contacts, temperature thresholds for shutdown. Extended outages may require moving operations or accepting downtime."
  },
  {
    id: 8,
    question: "A small office wants basic power protection for their computers and network equipment. What is the minimum recommended protection?",
    options: [
      "Plug directly into wall outlets - no protection needed",
      "Quality surge protectors for all equipment, UPS for critical systems (servers, network equipment)",
      "Use the cheapest power strips available",
      "Extension cords are sufficient"
    ],
    correct: 1,
    explanation: "Minimum protection strategy: surge protectors for all computers and equipment (protect against spikes), UPS for critical infrastructure (servers, network equipment, security systems) to prevent data loss from outages, label protected outlets. Quality matters - cheap power strips often lack real surge protection. Extension cords provide no protection. Direct wall connection leaves equipment vulnerable to power anomalies. Even small offices need protection - power issues are common. Budget: spend more on UPS for servers/network (critical), adequate surge protection for workstations. Power protection is cheap insurance against expensive equipment damage and data loss."
  },
  {
    id: 9,
    question: "A UPS battery backup test reveals the UPS only provides 5 minutes of runtime, but it used to provide 20 minutes. What is the MOST likely cause?",
    options: [
      "The UPS is working perfectly",
      "UPS batteries have degraded and need replacement (typically every 3-5 years)",
      "Someone is stealing power",
      "This is normal battery behavior"
    ],
    correct: 1,
    explanation: "UPS batteries degrade over time (typically 3-5 year lifespan). Reduced runtime indicates: aged batteries with reduced capacity, increased load (more equipment on UPS), failed battery cells. Actions: test UPS regularly (monthly/quarterly), replace batteries per manufacturer schedule (don't wait for failure), monitor runtime, verify load matches UPS capacity. UPS batteries are consumables requiring periodic replacement. Degraded batteries won't provide adequate protection during outages. This isn't normal - it's warning to replace batteries. Some UPS units notify when battery replacement is needed. Plan battery replacement proactively."
  },
  {
    id: 10,
    question: "A technician installs equipment in a poorly ventilated room. Within an hour, the equipment overheats and shuts down. What is the problem and solution?",
    options: [
      "The equipment is defective",
      "Insufficient airflow/ventilation - equipment cannot dissipate heat properly",
      "The room is too cold",
      "Equipment doesn't need ventilation"
    ],
    correct: 1,
    explanation: "Equipment requires proper ventilation to dissipate heat: adequate airflow around equipment (don't block vents), proper room ventilation (HVAC or fans), equipment spacing (allow air circulation), cable management (cables don't block airflow), clean air filters regularly. Poor ventilation causes: overheating, thermal throttling, shutdowns, component failure. Solutions: improve room ventilation, add exhaust fans, relocate equipment to better-ventilated area, clean dust from vents/fans. Equipment isn't defective - environment is inadequate. Rooms can't be too cold for equipment. All electronic equipment generates heat requiring dissipation. Environmental planning prevents overheating issues."
  },
  {
    id: 11,
    question: "A line-interactive UPS provides 'conditioned power' to connected equipment. What does this mean?",
    options: [
      "The power is colder",
      "The UPS regulates voltage (corrects sags/surges) without switching to battery for minor fluctuations",
      "The power smells better",
      "Conditioning means nothing"
    ],
    correct: 1,
    explanation: "Power conditioning corrects voltage irregularities: boosts voltage during sags (brownouts), reduces voltage during surges, filters electrical noise. Line-interactive UPS conditions power using voltage regulation (AVR - Automatic Voltage Regulation) without draining battery for minor issues. Only switches to battery for significant outages. Benefits: extends battery life (not used for minor fluctuations), provides cleaner power, protects equipment from power anomalies. Conditioning isn't about temperature or smell. Unconditioned power has voltage variations harming equipment. Quality power conditioning extends equipment lifespan. For critical systems, conditioned power is essential for reliability."
  },
  {
    id: 12,
    question: "A data center backup generator is tested monthly but hasn't been used during an actual outage. During a power failure, the generator fails to start. What was likely neglected?",
    options: [
      "Testing is sufficient - this shouldn't happen",
      "Regular maintenance (fuel, oil, battery checks) in addition to testing",
      "Generators never fail",
      "Generators don't need fuel"
    ],
    correct: 1,
    explanation: "Generator maintenance requirements beyond testing: fuel freshness (diesel degrades, add stabilizer or rotate stock), oil changes, battery maintenance (starting battery), coolant levels, filter replacements, load bank testing (verify can handle full load), exercise under load (not just no-load testing). Testing without maintenance isn't sufficient - degraded fuel, dead starting battery, or mechanical issues prevent startup. Generators absolutely can fail - maintenance prevents it. Generators require fuel. Monthly no-load tests don't reveal all issues - periodic full-load testing essential. Maintenance contracts with generator specialists ensure reliability. Generator failure during outage is catastrophic - proper maintenance is critical."
  },
  {
    id: 13,
    question: "A server room has a water leak detection system installed on the floor. Where should sensors be placed for maximum effectiveness?",
    options: [
      "Randomly throughout the room",
      "Under raised floors, near HVAC units, under pipes, and near water sources - where leaks are most likely",
      "Only at the room entrance",
      "Water detection isn't necessary"
    ],
    correct: 1,
    explanation: "Water detection sensor placement: under raised floors (catches leaks before visible), below HVAC units (condensation, leaks), under pipes and plumbing, near water-cooled equipment, low points where water accumulates, around perimeter. Water causes: short circuits, corrosion, equipment destruction. Early detection allows: shutting off water source, protecting equipment, preventing spreading. Random placement misses critical areas. Single sensor at entrance inadequate. Water detection IS necessary - water damage destroys expensive equipment quickly. Sensors are cheap insurance. Some systems automatically shut down equipment when water detected. Test sensors regularly to ensure functionality."
  },
  {
    id: 14,
    question: "A building has both a UPS system and a backup generator. How do these work together during extended power outages?",
    options: [
      "They don't work together - choose one or the other",
      "UPS provides immediate power (seconds), generator starts and takes over for extended runtime (hours/days)",
      "Generator runs continuously even with utility power",
      "UPS and generators fight each other"
    ],
    correct: 1,
    explanation: "UPS and generator work in tandem: (1) Power fails, (2) UPS instantly provides battery power (prevents outage), (3) Generator starts (30-60 seconds typically), (4) Generator takes load from UPS (UPS no longer draining battery), (5) Generator runs as long as needed (refuel as necessary), (6) When utility power returns, UPS switches back, generator shuts down. UPS provides instant, seamless transition. Generator provides long-term power but takes time to start. Together they provide complete protection: UPS (instant, short-term) + Generator (delayed, long-term). This is standard design for critical facilities. They complement, not conflict."
  },
  {
    id: 15,
    question: "A technician notices the humidity in a server room is only 25% (very low). What problem does this create?",
    options: [
      "No problem - lower humidity is always better",
      "Increased static electricity and ESD risk - can damage sensitive components",
      "Equipment runs too cold",
      "Low humidity causes flooding"
    ],
    correct: 1,
    explanation: "Low humidity (<40%) increases static electricity: higher ESD risk (can destroy components), more frequent static discharges, difficult to control static even with grounding. Ideal humidity: 40-60% balances concerns - high enough to reduce static, low enough to prevent condensation. Solutions: add humidification to HVAC system, monitor humidity continuously, increase ESD precautions in low humidity. Lower humidity isn't universally better - it increases ESD risk. Humidity doesn't affect equipment temperature. Low humidity doesn't cause flooding (high humidity increases moisture risk). Both high AND low humidity create problems - maintain proper range. Environmental monitoring includes humidity for complete protection."
  }
];