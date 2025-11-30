export const lesson11Flashcards = [
  {
    id: 1,
    front: "What is cable internet and how does it work?",
    back: "Internet over cable TV infrastructure (coaxial cable). Uses DOCSIS standard. Shared bandwidth with neighbors on same node. Download faster than upload (asymmetric). Speeds: 100 Mbps to 1+ Gbps download."
  },
  {
    id: 2,
    front: "What does DOCSIS stand for and what is it?",
    back: "Data Over Cable Service Interface Specification. Standard for cable internet transmission. DOCSIS 3.0: Up to 1 Gbps. DOCSIS 3.1: Up to 10 Gbps. DOCSIS 4.0: Up to 10 Gbps down/6 Gbps up (symmetrical)."
  },
  {
    id: 3,
    front: "What equipment is needed for cable internet?",
    back: "Cable modem (converts coax to Ethernet) - Coaxial cable (RG-6) - Splitter (if sharing with TV) - Router (often built into modem). ISP typically provides modem or you can buy your own."
  },
  {
    id: 4,
    front: "What are the advantages and disadvantages of cable internet?",
    back: "Advantages: Fast speeds, widely available, good for streaming/gaming. Disadvantages: Shared bandwidth (slower during peak times), asymmetric speeds, requires cable infrastructure, monthly cost."
  },
  {
    id: 5,
    front: "What is DSL and how does it work?",
    back: "Digital Subscriber Line. Internet over existing phone lines. Dedicated connection (not shared). Uses frequencies above voice calls. Can use phone and internet simultaneously. Shorter distance = faster speeds."
  },
  {
    id: 6,
    front: "What is ADSL?",
    back: "Asymmetric Digital Subscriber Line. Download faster than upload (asymmetric). Most common DSL type for home users. Speeds: 1-100 Mbps download, 256 Kbps-10 Mbps upload. Distance limit ~18,000 feet from DSLAM."
  },
  {
    id: 7,
    front: "What is VDSL?",
    back: "Very-high-bit-rate DSL. Faster than ADSL but shorter distance. Speeds: Up to 100 Mbps (close to CO). Requires fiber to neighborhood, then copper last mile. Better upload speeds than ADSL."
  },
  {
    id: 8,
    front: "What is SDSL?",
    back: "Symmetric DSL. Equal upload and download speeds. Business-focused service. More expensive than ADSL. Better for hosting servers, video conferencing, cloud backups. Not commonly offered to residential customers."
  },
  {
    id: 9,
    front: "What equipment is needed for DSL internet?",
    back: "DSL modem (often combined with router) - Phone line (RJ-11) - DSL filters/splitters (separate voice from data) - Router (if not built into modem). Must be within distance limit of central office."
  },
  {
    id: 10,
    front: "What are the advantages and disadvantages of DSL?",
    back: "Advantages: Dedicated bandwidth (not shared), always-on, uses existing phone lines, affordable. Disadvantages: Speed degrades with distance, slower than cable/fiber, requires phone line infrastructure."
  },
  {
    id: 11,
    front: "What is fiber optic internet?",
    back: "Internet delivered via fiber optic cables using light signals. Extremely fast and reliable. Symmetrical speeds (equal upload/download). FTTP (Fiber to the Premises) or FTTH (Fiber to the Home). Speeds: 100 Mbps to 10+ Gbps."
  },
  {
    id: 12,
    front: "What is the difference between FTTP, FTTH, FTTC, and FTTN?",
    back: "FTTP/FTTH: Fiber all the way to building/home. FTTC (Curb): Fiber to street, then copper. FTTN (Node/Neighborhood): Fiber to neighborhood box, then copper last mile. Full fiber (FTTP) fastest and most reliable."
  },
  {
    id: 13,
    front: "What equipment is needed for fiber internet?",
    back: "ONT (Optical Network Terminal) - converts fiber to Ethernet - Fiber optic cable - Router - Battery backup (optional, for phone service). ISP installs ONT, usually outside or inside home."
  },
  {
    id: 14,
    front: "What are the advantages and disadvantages of fiber internet?",
    back: "Advantages: Fastest speeds, symmetrical, reliable, no signal degradation, future-proof. Disadvantages: Limited availability (mostly urban/suburban), expensive installation, not all areas have infrastructure."
  },
  {
    id: 15,
    front: "What is satellite internet and how does it work?",
    back: "Internet via satellites in orbit. Requires dish pointing at satellite. Available anywhere with clear sky view. High latency due to distance to space (~22,000+ miles). Speeds: 12-100+ Mbps (Starlink higher)."
  },
  {
    id: 16,
    front: "What equipment is needed for satellite internet?",
    back: "Satellite dish (must face correct direction) - Modem - Router - Clear line of sight to sky - Professional installation usually required. Newer systems (Starlink) use phased array antennas."
  },
  {
    id: 17,
    front: "What are the advantages and disadvantages of satellite internet?",
    back: "Advantages: Available in rural/remote areas, no ground infrastructure needed. Disadvantages: High latency (500-700ms traditional, 20-40ms Starlink), weather interference, data caps, expensive equipment."
  },
  {
    id: 18,
    front: "What is the difference between traditional satellite and LEO satellite internet?",
    back: "Traditional (GEO): 22,000+ miles up, high latency (500-700ms), fewer satellites. LEO (Starlink): 340 miles up, low latency (20-40ms), thousands of satellites, faster speeds, better gaming/video calls."
  },
  {
    id: 19,
    front: "What is cellular internet (mobile broadband)?",
    back: "Internet via cellular network (4G LTE, 5G). Uses same towers as mobile phones. Can be: smartphone hotspot, USB modem, dedicated router. Portable internet access. Speed and coverage vary by carrier and location."
  },
  {
    id: 20,
    front: "What equipment is needed for cellular internet?",
    back: "Cellular modem/router with SIM card - Antenna (internal or external) - Data plan from carrier - Power source. Or use smartphone hotspot. Some fixed wireless home internet uses cellular."
  },
  {
    id: 21,
    front: "What are the advantages and disadvantages of cellular internet?",
    back: "Advantages: Portable, available in most areas, quick setup, no installation. Disadvantages: Data caps, variable speeds, tower congestion, expensive data plans, signal depends on location."
  },
  {
    id: 22,
    front: "What is 4G LTE internet?",
    back: "Fourth generation cellular data. Long Term Evolution technology. Download: 5-50 Mbps typical, up to 100 Mbps. Upload: 2-10 Mbps. Lower latency than 3G (~50ms). Sufficient for streaming, browsing."
  },
  {
    id: 23,
    front: "What is 5G internet?",
    back: "Fifth generation cellular. Much faster than 4G. Low-band: 50-250 Mbps. Mid-band: 100-900 Mbps. High-band (mmWave): 1-10 Gbps. Ultra-low latency (<10ms). Limited coverage, especially high-band."
  },
  {
    id: 24,
    front: "What is WISP (Wireless ISP)?",
    back: "Wireless Internet Service Provider. Fixed wireless broadband using radio signals. Tower broadcasts to subscriber antennas on buildings. Line of sight required. Common in rural areas. Speeds: 5-100+ Mbps."
  },
  {
    id: 25,
    front: "What equipment is needed for WISP internet?",
    back: "Outdoor antenna/radio (mounted on roof/tower) - Power over Ethernet (PoE) injector - Indoor router - Clear line of sight to tower - Professional installation typically required."
  },
  {
    id: 26,
    front: "What are the advantages and disadvantages of WISP?",
    back: "Advantages: Available in rural areas, faster than satellite/DSL, lower latency than satellite, no cables needed. Disadvantages: Requires line of sight, weather interference, shared bandwidth, installation complexity."
  },
  {
    id: 27,
    front: "What factors affect internet connection speed?",
    back: "Distance from source (DSL, WISP) - Shared bandwidth (cable, WISP) - Network congestion - Equipment quality - Weather (satellite, WISP) - Interference - ISP throttling - Plan/subscription tier."
  },
  {
    id: 28,
    front: "What is latency and why does it matter?",
    back: "Time for data to travel from source to destination (ping time). Measured in milliseconds (ms). Low latency critical for: gaming, video calls, VoIP. Fiber/cable: <20ms. DSL: 20-40ms. Satellite: 500-700ms (traditional)."
  },
  {
    id: 29,
    front: "What is bandwidth vs throughput?",
    back: "Bandwidth: Maximum data transfer capacity (advertised speed, e.g., 100 Mbps). Throughput: Actual data transfer rate achieved (real-world speed, often lower). Affected by: congestion, overhead, equipment limitations."
  },
  {
    id: 30,
    front: "How do you compare internet connection types by speed?",
    back: "Fastest: Fiber (symmetrical, 100 Mbps-10 Gbps). Fast: Cable (100 Mbps-1 Gbps down, 5G (1-10 Gbps in ideal conditions). Medium: VDSL (up to 100 Mbps), 4G LTE (5-100 Mbps). Slower: ADSL (1-100 Mbps), Satellite (12-100 Mbps), WISP (varies)."
  }
];