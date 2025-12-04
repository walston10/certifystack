export const lesson11Quiz = [
  {
    id: 1,
    question: "A family is moving to a rural area where cable and DSL internet are not available. They need reliable high-speed internet for remote work. What connection type would be most suitable?",
    options: [
      "Dial-up modem",
      "Fiber optic (if available) or fixed wireless/5G home internet",
      "Satellite internet as a last resort if terrestrial options aren't available",
      "No internet is possible in rural areas"
    ],
    correct: 2,
    explanation: "In rural areas, options are limited. Fiber (FTTH/FTTP) offers the best performance but may not be available. Fixed wireless ISPs use radio towers to deliver internet to homes with roof-mounted antennas - good speeds where available. 5G home internet (like T-Mobile or Verizon) uses cellular technology with dedicated home routers. Satellite (Starlink, HughesNet, Viasat) works anywhere but has higher latency and weather sensitivity. Starlink offers better speeds (50-200+ Mbps) than traditional satellite. Check availability and coverage maps for each option in the specific location."
  },
  {
    id: 2,
    question: "A small business has cable internet with advertised speeds of 500 Mbps download. They consistently measure only 100 Mbps on speed tests. The cable modem supports DOCSIS 3.0. What might be limiting their speed?",
    options: [
      "Cable internet never reaches advertised speeds",
      "The modem may not support enough bonded channels for 500 Mbps, network congestion, or the service plan may be throttled",
      "500 Mbps is impossible with cable",
      "They need to delete files from their computer"
    ],
    correct: 1,
    explanation: "DOCSIS 3.0 supports varying speeds depending on channel bonding. A basic 8-channel modem maxes around 300 Mbps, while 16 or 24 channels can handle 500+ Mbps. Upgrading to a DOCSIS 3.1 modem supports gigabit speeds. Other factors: network congestion (cable is shared bandwidth), poor signal quality, old coax cable, ISP throttling, or testing during peak hours. Check modem specifications for supported speeds, verify coax connections are tight, test at different times, and consider upgrading to DOCSIS 3.1 modem for better performance and future-proofing."
  },
  {
    id: 3,
    question: "A home user has DSL internet service. They notice the internet slows down significantly when multiple family members are streaming video. The advertised speed is 25 Mbps download. What is the most likely explanation?",
    options: [
      "DSL cannot support video streaming",
      "25 Mbps total bandwidth is being shared among all users/devices, causing congestion when multiple streams are active",
      "The modem is infected with a virus",
      "DSL only works during certain hours"
    ],
    correct: 1,
    explanation: "DSL provides a dedicated connection to the home (unlike cable which is shared neighborhood bandwidth), but the total bandwidth (25 Mbps) is shared among all devices in the house. HD video streaming requires 5-8 Mbps per stream. Multiple simultaneous streams (3-4 users) easily saturate a 25 Mbps connection. Solutions: upgrade to faster DSL if available (VDSL can reach 100+ Mbps over short distances), implement QoS (Quality of Service) on the router to prioritize traffic, or consider alternative internet technologies like cable or fiber. DSL speed decreases with distance from the CO (Central Office)."
  },
  {
    id: 4,
    question: "A business is getting fiber internet installed. The ISP mentions they're installing FTTP. What does FTTP mean?",
    options: [
      "Fast Temporary Test Protocol",
      "Fiber To The Premises - fiber optic cable runs directly to the building",
      "File Transfer Protocol Plus",
      "A type of wireless technology"
    ],
    correct: 1,
    explanation: "FTTP (Fiber To The Premises) or FTTH (Fiber To The Home) means fiber optic cable runs directly from the ISP to the building, providing the fastest and most reliable connection. The ISP installs an ONT (Optical Network Terminal) that converts fiber signals to Ethernet. This contrasts with FTTN (Fiber To The Node/Neighborhood) where fiber goes to a neighborhood cabinet and copper (usually VDSL) covers the last section. True fiber provides symmetrical gigabit+ speeds, low latency, and no degradation over distance. It's the gold standard for internet connectivity."
  },
  {
    id: 5,
    question: "A user in an apartment building has cable internet that works great at 3 AM but becomes very slow between 6-10 PM. What causes this pattern?",
    options: [
      "The modem has a timer that slows down in the evening",
      "Cable internet uses shared neighborhood bandwidth - congestion during peak usage hours (evenings) reduces speeds for all users",
      "The ISP turns off the internet at night",
      "The computer's clock affects internet speed"
    ],
    correct: 1,
    explanation: "Cable internet uses shared bandwidth in the neighborhood. All homes on the same cable segment share total capacity. During peak hours (evenings when people stream, game, video call), congestion reduces individual speeds. Early morning has minimal usage, so full speeds are available. This is a fundamental limitation of cable's architecture. Solutions are limited for consumers: test speeds and document patterns, contact ISP if speeds fall below guaranteed minimums, consider upgrading to higher tier (may help but doesn't eliminate sharing), or switch to dedicated technologies like fiber or DSL."
  },
  {
    id: 6,
    question: "What is the primary disadvantage of satellite internet compared to cable or fiber?",
    options: [
      "Satellite internet is too fast",
      "High latency (delay) due to the 22,000+ mile round trip to geostationary satellites (500-700ms typical)",
      "Satellite internet only works in cities",
      "Satellite is always cheaper"
    ],
    correct: 1,
    explanation: "Traditional geostationary satellite internet has high latency (500-700ms or more) because signals travel ~22,300 miles to the satellite and back. This makes real-time applications like video calls, gaming, and VoIP challenging. Satellite also suffers from weather interference (rain fade). Newer LEO (Low Earth Orbit) satellites like Starlink orbit much closer (~340 miles) with latency around 20-40ms - much better but still higher than terrestrial options. Satellite is crucial for remote areas where no other options exist, but latency and weather sensitivity are significant trade-offs."
  },
  {
    id: 7,
    question: "A business is comparing DSL and cable internet options. Both advertise 100 Mbps download speeds at the same price. What is a key technical difference they should consider?",
    options: [
      "DSL and cable are identical technologies",
      "DSL provides dedicated bandwidth to each customer, while cable bandwidth is shared among neighborhood users",
      "Cable can't reach 100 Mbps",
      "DSL requires satellite dishes"
    ],
    correct: 1,
    explanation: "DSL provides dedicated bandwidth from the Central Office to each customer - your speed isn't affected by neighbors' usage. However, DSL speed decreases significantly with distance from the CO (longer lines = slower speeds). Cable uses shared bandwidth in the neighborhood - you may experience congestion during peak times, but cable maintains consistent speeds regardless of distance from the provider's node. For this business: if the cable service has low congestion and DSL signal is strong, either works. DSL may be more consistent but potentially slower if far from CO. Get service level agreements (SLAs) documenting guaranteed minimum speeds."
  },
  {
    id: 8,
    question: "A mobile user needs internet access while traveling between cities for work. They don't want to rely on public Wi-Fi. What solution provides internet connectivity anywhere with cellular coverage?",
    options: [
      "DSL modem",
      "Cellular hotspot device or smartphone hotspot with adequate data plan",
      "Fiber optic cable spool",
      "Dial-up modem"
    ],
    correct: 1,
    explanation: "Cellular data (4G LTE, 5G) provides internet anywhere within carrier coverage. Options include: (1) smartphone mobile hotspot/tethering shares the phone's data connection via Wi-Fi, (2) dedicated mobile hotspot device (MiFi) with its own SIM card and data plan, (3) cellular-enabled laptop with built-in modem, or (4) USB cellular modem. Considerations: data plan costs and limits (10-100+ GB/month), coverage in travel areas, speed variability (5G > 4G LTE > 3G), and carrier network congestion. Unlimited plans often throttle after certain usage. This is essential for remote workers and travelers."
  },
  {
    id: 9,
    question: "A home user's fiber internet connection has an ONT (Optical Network Terminal) installed on the outside wall. What is the purpose of the ONT?",
    options: [
      "To slow down the internet",
      "To convert fiber optic signals to Ethernet that standard routers and devices can use",
      "To broadcast Wi-Fi signals",
      "To store files"
    ],
    correct: 1,
    explanation: "The ONT (Optical Network Terminal) converts optical (light) signals from the fiber cable into electrical signals on standard Ethernet (RJ-45). It's essentially a fiber modem. The ONT typically provides one or more Ethernet ports that connect to your router or directly to computers. Some ONTs include built-in routers/Wi-Fi, while others are just converters requiring a separate router. The ISP usually provides and maintains the ONT. It requires power (battery backup recommended for phone service). The ONT is the demarcation point between the ISP's network and your home network."
  },
  {
    id: 10,
    question: "A rural property has no wired internet options. A WISP (Wireless Internet Service Provider) offers service. What equipment will likely be needed at the customer's location?",
    options: [
      "Only a standard Wi-Fi router",
      "A roof-mounted or tower-mounted directional antenna pointing toward the WISP's transmission tower, plus a receiver/modem",
      "Coaxial cable throughout the house",
      "Telephone wiring"
    ],
    correct: 1,
    explanation: "WISPs use point-to-point or point-to-multipoint wireless technology (similar to Wi-Fi but longer range, different frequencies). Installation requires: (1) outdoor antenna (usually roof or tower-mounted) with clear line-of-sight to the WISP's tower, (2) receiver/radio device that connects to the antenna, and (3) connection from receiver to your router (usually Ethernet). A professional installer aims the antenna for optimal signal. Speeds vary (5-100+ Mbps typical) based on distance, obstacles, and weather. WISP service requires line-of-sight - trees, hills, and buildings can block signals. It's a good option where cable/DSL/fiber aren't available."
  },
  {
    id: 11,
    question: "What is the main advantage of fiber optic internet over cable or DSL?",
    options: [
      "Fiber is the cheapest option",
      "Symmetrical gigabit+ speeds (same upload and download), no speed degradation over distance, and extremely low latency",
      "Fiber only works in small towns",
      "Fiber requires no equipment"
    ],
    correct: 1,
    explanation: "Fiber optic internet provides: (1) Symmetrical speeds - 1 Gbps download AND 1 Gbps upload (cable/DSL have much slower uploads), (2) No distance-based degradation - fiber maintains full speed for many kilometers, (3) Future-proof - can support multi-gigabit speeds with equipment upgrades, (4) Lower latency - typically 1-5ms to ISP, (5) No electromagnetic interference, and (6) Higher reliability. Downsides: limited availability (mostly in cities/newer developments) and potentially higher cost. For businesses, content creators, and power users, fiber's symmetrical speeds and reliability are invaluable. It's the best technology available for internet access."
  },
  {
    id: 12,
    question: "A user is comparing internet options and sees '25 Mbps download / 5 Mbps upload' for DSL and '25 Mbps download / 25 Mbps upload' for fiber. Why does upload speed matter?",
    options: [
      "Upload speed doesn't matter - nobody uploads anything",
      "Upload speed affects video calls, cloud backups, sending large files, working from home, and streaming to services like Twitch",
      "Only hackers need upload speed",
      "Upload speed only matters on Tuesdays"
    ],
    correct: 1,
    explanation: "Upload speed is critical for: (1) Video conferencing (Zoom, Teams require 3-5 Mbps upload), (2) Cloud backups (uploading photos/documents to cloud storage), (3) Sending large email attachments, (4) Remote work/VPN connections, (5) Live streaming to Twitch/YouTube, (6) Smart home cameras uploading footage, and (7) Sharing files. Traditional cable/DSL have asymmetric speeds - download is much faster than upload. Fiber typically offers symmetrical speeds. For remote workers and content creators, adequate upload speed is just as important as download speed. 5 Mbps upload is minimal; 25+ Mbps is much better."
  },
  {
    id: 13,
    question: "A business is experiencing frequent internet outages lasting 5-10 minutes several times per week. What solution provides internet redundancy?",
    options: [
      "Buy more computers",
      "Subscribe to a second internet connection from a different ISP (different technology if possible) with automatic failover",
      "Turn off the internet completely",
      "Internet outages cannot be prevented"
    ],
    correct: 1,
    explanation: "Internet redundancy uses two separate connections from different ISPs, ideally using different technologies (e.g., primary fiber + backup cable or cellular). A dual-WAN router monitors both connections and automatically switches to the backup when the primary fails. This provides business continuity. Advanced setups use load balancing (using both simultaneously) and automatic failover. Cost consideration: two connections plus capable router. For businesses where downtime costs money, redundancy is essential. Alternatives include cellular failover (4G/5G backup), bonded connections, or SD-WAN solutions. Critical operations may require 99.9%+ uptime guarantees via SLAs."
  },
  {
    id: 14,
    question: "What does DOCSIS stand for, and what technology uses it?",
    options: [
      "Digital Ordering System - used by online shopping",
      "Data Over Cable Service Interface Specification - the standard for cable internet modems",
      "Direct Optical Signal System - used by fiber",
      "A type of satellite"
    ],
    correct: 1,
    explanation: "DOCSIS (Data Over Cable Service Interface Specification) is the international standard for cable modems. Versions include: DOCSIS 3.0 (common, supports up to ~1 Gbps with channel bonding), DOCSIS 3.1 (multi-gigabit capable, 10+ Gbps), and DOCSIS 4.0 (latest, symmetrical multi-gigabit). Higher DOCSIS versions support faster speeds, more channels, better efficiency, and lower latency. When getting cable internet, ensure your modem supports DOCSIS 3.1 for gigabit speeds. ISPs often rent modems but buying your own DOCSIS 3.1 modem usually pays for itself within a year. Check ISP compatibility lists before purchasing."
  },
  {
    id: 15,
    question: "A household has 100 Mbps internet but multiple users complain about slow speeds when everyone is online. The router is old. What feature in a new router could help distribute bandwidth more fairly?",
    options: [
      "Larger physical size",
      "QoS (Quality of Service) to prioritize traffic types and manage bandwidth allocation",
      "More LED lights",
      "A different color"
    ],
    correct: 1,
    explanation: "QoS (Quality of Service) allows prioritizing network traffic. Configure QoS to: (1) Prioritize video calls/VoIP over file downloads, (2) Ensure work-from-home applications get adequate bandwidth, (3) Limit bandwidth for large downloads/torrents, (4) Allocate minimum bandwidth guarantees per device/user. Modern routers offer app-based QoS (prioritize Zoom, Netflix) or device-based (prioritize work laptops). While QoS doesn't increase total bandwidth, it prevents one user/application from monopolizing the connection. Combined with dual-band or tri-band Wi-Fi, proper QoS significantly improves multi-user experience. Also consider upgrading to faster internet if consistently maxing out capacity."
  }
];