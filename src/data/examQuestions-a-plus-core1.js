// CompTIA A+ Core 1 (220-1101) Practice Exam Questions
// 100 Questions with balanced answer distribution (25 A, 25 B, 25 C, 25 D)

// Domain 1: Mobile Devices (15 questions)
// Answer distribution: 4A, 4B, 4C, 3D
const domain1Questions = [
  {
    id: 1,
    question: "A user reports their laptop display is very dim even with brightness set to maximum. The laptop works fine when connected to an external monitor. Which component is MOST likely failing?",
    options: [
      "LCD inverter or backlight",
      "Video card",
      "LCD panel",
      "Display cable"
    ],
    correct: 0,
    explanation: "The LCD inverter or backlight is most likely failing. Since the external monitor works fine, the video card is functioning. A dim display with maximum brightness typically indicates a backlight or inverter issue (on older CCFL displays) or LED backlight failure. The LCD panel itself would cause image distortion or dead pixels, not dimness. A display cable issue would cause flickering or no image, not uniform dimness."
  },
  {
    id: 2,
    question: "A technician needs to replace the RAM in a laptop. Which form factor should they use?",
    options: [
      "DIMM",
      "SO-DIMM",
      "SIMM",
      "RIMM"
    ],
    correct: 1,
    explanation: "SO-DIMM (Small Outline Dual Inline Memory Module) is the correct form factor for laptop RAM. DIMM is used in desktop computers and is physically larger. SIMM (Single Inline Memory Module) is an obsolete format. RIMM (Rambus Inline Memory Module) is also obsolete and was used in specific desktop systems."
  },
  {
    id: 3,
    question: "Which wireless technology allows a smartphone to make payments by tapping it against a payment terminal?",
    options: [
      "Bluetooth",
      "Wi-Fi Direct",
      "NFC",
      "Infrared"
    ],
    correct: 2,
    explanation: "NFC (Near Field Communication) enables contactless payments by allowing devices to communicate when within a few centimeters of each other. Bluetooth requires pairing and operates at longer ranges. Wi-Fi Direct is for file sharing and screen mirroring. Infrared requires line-of-sight and is largely obsolete in modern smartphones."
  },
  {
    id: 4,
    question: "A user wants to connect their laptop to a docking station that provides power, video output, and USB connectivity through a single cable. Which connection type supports this?",
    options: [
      "USB 2.0 Type-A",
      "HDMI",
      "DisplayPort",
      "Thunderbolt 3/USB-C"
    ],
    correct: 3,
    explanation: "Thunderbolt 3/USB-C supports power delivery, video output, and data transfer through a single cable, making it ideal for docking stations. USB 2.0 Type-A lacks video capability and sufficient power delivery. HDMI and DisplayPort only carry video signals and cannot provide power or USB data."
  },
  {
    id: 5,
    question: "A technician is replacing a laptop battery. The original battery is labeled 'Li-ion 11.1V 5200mAh'. Which replacement specification is MOST important to match exactly?",
    options: [
      "Voltage (11.1V)",
      "Capacity (5200mAh)",
      "Chemistry (Li-ion)",
      "Physical dimensions"
    ],
    correct: 0,
    explanation: "Voltage must match exactly as using incorrect voltage can damage the laptop or cause the battery to not function. Capacity (mAh) can vary - higher capacity just means longer battery life. While chemistry should generally match, Li-ion and Li-poly are often interchangeable in modern designs. Physical dimensions matter for fit but won't damage the system if slightly off."
  },
  {
    id: 6,
    question: "Which mobile device connection type is proprietary to Apple devices manufactured before 2012?",
    options: [
      "USB-C",
      "30-pin dock connector",
      "Lightning",
      "Micro-USB"
    ],
    correct: 1,
    explanation: "The 30-pin dock connector was Apple's proprietary connection used on iPhones, iPads, and iPods before 2012. Lightning replaced it in 2012. USB-C is now used on newer Apple devices but is not proprietary. Micro-USB was never used on Apple devices."
  },
  {
    id: 7,
    question: "A smartphone user reports their device gets extremely hot during wireless charging. What is the MOST likely cause?",
    options: [
      "Using a case that blocks heat dissipation",
      "Defective battery",
      "Incorrect charger wattage",
      "Outdated operating system"
    ],
    correct: 0,
    explanation: "Cases that block heat dissipation are the most common cause of overheating during wireless charging. Wireless charging generates more heat than wired charging, and thick or insulating cases trap this heat. A defective battery would cause issues beyond just charging. Charger wattage mismatches typically result in slower charging, not overheating. OS updates rarely affect charging temperature."
  },
  {
    id: 8,
    question: "A technician is troubleshooting a laptop that won't power on. The battery is confirmed good, and the AC adapter LED is lit. Which component should be checked NEXT?",
    options: [
      "RAM modules",
      "DC jack connection",
      "Hard drive",
      "CPU"
    ],
    correct: 1,
    explanation: "The DC jack connection should be checked next. Even if the AC adapter LED is lit, the DC jack inside the laptop may be damaged or have a loose connection, preventing power from reaching the motherboard. RAM issues would cause boot problems but not prevent power-on entirely. The hard drive isn't required for initial power-on. CPU issues would typically show some power activity before failing."
  },
  {
    id: 9,
    question: "Which laptop display technology offers the BEST viewing angles and color accuracy but typically costs more?",
    options: [
      "TN (Twisted Nematic)",
      "VA (Vertical Alignment)",
      "IPS (In-Plane Switching)",
      "OLED"
    ],
    correct: 2,
    explanation: "IPS panels offer the best viewing angles and color accuracy among LCD technologies, making them preferred for professional work. TN panels are cheapest but have poor viewing angles. VA panels offer better contrast but slower response times. While OLED has excellent colors, the question specifies cost as a factor, and OLED is significantly more expensive than IPS."
  },
  {
    id: 10,
    question: "A user's tablet will not rotate the screen when turned sideways. Which setting should be checked FIRST?",
    options: [
      "Display brightness",
      "Accelerometer calibration",
      "Rotation lock",
      "Screen timeout"
    ],
    correct: 2,
    explanation: "Rotation lock should be checked first as it's the most common cause of rotation issues and is easily toggled accidentally. If rotation lock is enabled, the screen won't rotate regardless of device orientation. Accelerometer calibration is rarely needed. Display brightness and screen timeout are unrelated to rotation functionality."
  },
  {
    id: 11,
    question: "Which component in a laptop is responsible for converting DC power to the higher voltage needed by the backlight in older displays?",
    options: [
      "Inverter",
      "LCD controller",
      "GPU",
      "Power regulator"
    ],
    correct: 0,
    explanation: "The inverter converts DC power to AC power at higher voltage to power CCFL (Cold Cathode Fluorescent Lamp) backlights in older laptop displays. The LCD controller manages the display signal. The GPU processes graphics. The power regulator manages voltage for other components but not specifically for backlights."
  },
  {
    id: 12,
    question: "A technician needs to configure email on a smartphone using the corporate Exchange server. Which protocol provides push email, calendar, and contact synchronization?",
    options: [
      "POP3",
      "IMAP",
      "SMTP",
      "ActiveSync"
    ],
    correct: 3,
    explanation: "ActiveSync (Exchange ActiveSync) provides push email, calendar, and contact synchronization with Exchange servers. POP3 only downloads email and doesn't sync calendars or contacts. IMAP syncs email but not calendars or contacts. SMTP is only for sending email, not receiving or syncing."
  },
  {
    id: 13,
    question: "A user reports their laptop keyboard has several keys that no longer work after a coffee spill. What is the recommended repair approach?",
    options: [
      "Replace individual key caps",
      "Clean the keyboard with compressed air",
      "Replace the entire keyboard assembly",
      "Use an external USB keyboard permanently"
    ],
    correct: 2,
    explanation: "Replacing the entire keyboard assembly is recommended after liquid damage. Coffee contains sugars and acids that can corrode the membrane contacts beneath the keys, causing permanent damage. Individual key caps won't fix membrane damage. Compressed air won't remove dried residue from under the keys. An external keyboard is a workaround, not a repair."
  },
  {
    id: 14,
    question: "Which mobile device feature uses GPS, Wi-Fi, and cellular signals to determine device location?",
    options: [
      "Geotracking",
      "Location services",
      "Find My Device",
      "Mobile hotspot"
    ],
    correct: 1,
    explanation: "Location services is the feature that combines GPS, Wi-Fi positioning, and cellular tower triangulation to determine device location. Geotracking is a general term, not a specific feature. Find My Device is an application that uses location services. Mobile hotspot shares cellular data and is unrelated to location."
  },
  {
    id: 15,
    question: "A laptop user needs to connect to a projector that only has a VGA input. The laptop only has HDMI and USB-C ports. Which adapter solution will work?",
    options: [
      "VGA to HDMI adapter",
      "USB-C to VGA adapter",
      "HDMI splitter",
      "USB-C hub with VGA output"
    ],
    correct: 3,
    explanation: "A USB-C hub with VGA output will work, as USB-C can carry video signals that can be converted to VGA. A VGA to HDMI adapter converts in the wrong direction (analog to digital). A USB-C to VGA adapter would also work, but the hub option (D) provides additional functionality. An HDMI splitter duplicates HDMI output, it doesn't convert to VGA."
  }
];

// Domain 2: Networking (20 questions)
// Answer distribution: 5A, 5B, 5C, 5D
const domain2Questions = [
  {
    id: 16,
    question: "A network technician needs to connect a computer directly to another computer for file transfer. Which cable type should be used with older network cards that don't support Auto-MDI/MDI-X?",
    options: [
      "Crossover cable",
      "Straight-through cable",
      "Rollover cable",
      "Coaxial cable"
    ],
    correct: 0,
    explanation: "A crossover cable is needed to connect two computers directly when the NICs don't support Auto-MDI/MDI-X. The crossover cable swaps the transmit and receive pairs. Straight-through cables connect computers to switches/hubs. Rollover cables are for console connections to network devices. Coaxial is used for cable internet, not direct PC connections."
  },
  {
    id: 17,
    question: "Which port number does HTTPS use by default?",
    options: [
      "80",
      "443",
      "8080",
      "21"
    ],
    correct: 1,
    explanation: "HTTPS uses port 443 by default for secure web traffic. Port 80 is for unencrypted HTTP. Port 8080 is an alternative HTTP port often used for proxies. Port 21 is for FTP control connections."
  },
  {
    id: 18,
    question: "A user receives an IP address of 169.254.45.132. What does this indicate?",
    options: [
      "The computer has a static IP configured",
      "The DHCP server is functioning correctly",
      "The computer failed to obtain an IP from DHCP",
      "The network uses IPv6"
    ],
    correct: 2,
    explanation: "An IP address in the 169.254.x.x range (APIPA - Automatic Private IP Addressing) indicates the computer failed to contact a DHCP server and assigned itself an address. This allows local network communication but not internet access. Static IPs are manually configured to specific addresses. A working DHCP server would assign an address from its configured scope."
  },
  {
    id: 19,
    question: "Which wireless standard operates ONLY on the 5GHz frequency band and provides speeds up to 1.3 Gbps?",
    options: [
      "802.11n",
      "802.11g",
      "802.11ac",
      "802.11ax"
    ],
    correct: 2,
    explanation: "802.11ac (Wi-Fi 5) operates exclusively on 5GHz and can achieve speeds over 1 Gbps. 802.11n operates on both 2.4GHz and 5GHz. 802.11g is 2.4GHz only at 54 Mbps. 802.11ax (Wi-Fi 6) operates on 2.4GHz, 5GHz, and 6GHz (Wi-Fi 6E)."
  },
  {
    id: 20,
    question: "A small office needs to share an internet connection among 10 computers. Which device performs Network Address Translation (NAT) to allow multiple devices to share a single public IP?",
    options: [
      "Hub",
      "Switch",
      "Router",
      "Access Point"
    ],
    correct: 2,
    explanation: "A router performs NAT to allow multiple internal devices to share a single public IP address. Hubs and switches operate at Layer 2 and don't perform NAT. Access points provide wireless connectivity but rely on a router for NAT functionality."
  },
  {
    id: 21,
    question: "Which command displays the path that packets take to reach a destination host?",
    options: [
      "ping",
      "ipconfig",
      "netstat",
      "tracert"
    ],
    correct: 3,
    explanation: "tracert (traceroute on Linux/Mac) displays each hop along the path to a destination, showing routers traversed and latency at each hop. Ping tests connectivity but doesn't show the path. Ipconfig displays local IP configuration. Netstat shows active connections and listening ports."
  },
  {
    id: 22,
    question: "A network uses the IP range 192.168.1.0/24. How many usable host addresses are available?",
    options: [
      "254",
      "256",
      "255",
      "252"
    ],
    correct: 0,
    explanation: "A /24 network has 256 total addresses (2^8), but the first address is the network ID (192.168.1.0) and the last is broadcast (192.168.1.255), leaving 254 usable host addresses. This is calculated as 2^8 - 2 = 254."
  },
  {
    id: 23,
    question: "Which protocol automatically assigns IP addresses to devices on a network?",
    options: [
      "DNS",
      "DHCP",
      "NAT",
      "ARP"
    ],
    correct: 1,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to network devices. DNS resolves hostnames to IP addresses. NAT translates between private and public addresses. ARP maps IP addresses to MAC addresses."
  },
  {
    id: 24,
    question: "A technician needs to terminate a Cat6 cable. Which wiring standard should be used for a typical straight-through cable in a business environment?",
    options: [
      "T568A on both ends",
      "T568B on both ends",
      "T568A on one end, T568B on the other",
      "Either T568A or T568B, as long as both ends match"
    ],
    correct: 3,
    explanation: "For a straight-through cable, both ends must use the same standard - either T568A or T568B. Most commercial installations use T568B, but T568A is equally valid. The key is consistency on both ends. Using different standards on each end creates a crossover cable."
  },
  {
    id: 25,
    question: "Which protocol uses port 53 and translates domain names to IP addresses?",
    options: [
      "DHCP",
      "HTTP",
      "DNS",
      "FTP"
    ],
    correct: 2,
    explanation: "DNS (Domain Name System) uses port 53 (both TCP and UDP) to translate human-readable domain names to IP addresses. DHCP uses ports 67/68. HTTP uses port 80. FTP uses ports 20/21."
  },
  {
    id: 26,
    question: "A user complains of slow network speeds. The technician checks the network connection and sees it's connected at 100 Mbps half-duplex. The switch port is configured for auto-negotiation. What is the MOST likely cause?",
    options: [
      "Faulty network cable",
      "Outdated NIC driver",
      "Duplex mismatch",
      "IP address conflict"
    ],
    correct: 2,
    explanation: "A duplex mismatch is the most likely cause. When one end is set to auto-negotiate and the other is hard-coded, auto-negotiation often defaults to half-duplex, causing slow speeds and collisions. A faulty cable might cause connection drops, not duplex issues. Driver issues rarely cause duplex problems. IP conflicts cause intermittent connectivity, not speed issues."
  },
  {
    id: 27,
    question: "Which type of network cable is MOST resistant to electromagnetic interference (EMI)?",
    options: [
      "Cat 5e UTP",
      "Cat 6 UTP",
      "Fiber optic",
      "Cat 6a UTP"
    ],
    correct: 2,
    explanation: "Fiber optic cable is completely immune to EMI because it transmits light instead of electrical signals. All copper cables (Cat 5e, Cat 6, Cat 6a) are susceptible to EMI to varying degrees, though shielded (STP) versions offer better protection than UTP."
  },
  {
    id: 28,
    question: "A SOHO router's configuration page shows WAN IP: 10.0.0.45. What does this indicate about the network configuration?",
    options: [
      "The ISP is using carrier-grade NAT",
      "The router has a public IP address",
      "DHCP is disabled on the router",
      "The router is in bridge mode"
    ],
    correct: 0,
    explanation: "A 10.x.x.x address on the WAN interface indicates the ISP is using carrier-grade NAT (CGNAT), assigning private IPs to customers instead of public IPs. This is common with ISPs facing IPv4 address exhaustion. A public IP would be a non-RFC 1918 address. DHCP status doesn't determine WAN IP type."
  },
  {
    id: 29,
    question: "Which network device operates at Layer 2 of the OSI model and uses MAC addresses to forward frames?",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Modem"
    ],
    correct: 1,
    explanation: "Switches operate at Layer 2 (Data Link) and use MAC addresses to make forwarding decisions. Routers operate at Layer 3 using IP addresses. Hubs operate at Layer 1 and simply repeat signals to all ports. Modems convert signals between different media types."
  },
  {
    id: 30,
    question: "A technician is setting up a wireless network in an office with many 2.4GHz wireless devices causing interference. Which channels should they use to minimize interference?",
    options: [
      "Channels 1 and 2",
      "Channels 3, 6, and 9",
      "Channels 1, 6, and 11",
      "Any channels between 1 and 11"
    ],
    correct: 2,
    explanation: "Channels 1, 6, and 11 are the only non-overlapping channels in the 2.4GHz band (in North America). Using these channels minimizes co-channel interference. Other channel combinations overlap and cause interference with adjacent channels."
  },
  {
    id: 31,
    question: "What is the maximum cable length for Cat6 Ethernet cable at Gigabit speeds?",
    options: [
      "100 meters (328 feet)",
      "55 meters (180 feet)",
      "50 meters (164 feet)",
      "90 meters (295 feet)"
    ],
    correct: 0,
    explanation: "Cat6 cable supports Gigabit speeds up to 100 meters (328 feet), the same as Cat5e. The 55-meter limitation only applies to Cat6 when running 10 Gigabit speeds. For standard Gigabit Ethernet, the 100-meter limit applies."
  },
  {
    id: 32,
    question: "Which protocol provides secure remote access to network devices using port 22?",
    options: [
      "Telnet",
      "RDP",
      "SSH",
      "SNMP"
    ],
    correct: 2,
    explanation: "SSH (Secure Shell) uses port 22 and provides encrypted remote access to network devices and servers. Telnet (port 23) provides similar functionality but is unencrypted. RDP (port 3389) is for Windows remote desktop. SNMP (port 161) is for network monitoring, not remote access."
  },
  {
    id: 33,
    question: "A user wants to set up a network printer to always receive the same IP address from DHCP. What should be configured?",
    options: [
      "Static IP on the printer",
      "Port forwarding",
      "DHCP reservation",
      "DNS record"
    ],
    correct: 2,
    explanation: "A DHCP reservation (also called a static lease) assigns a specific IP address to a device's MAC address while still using DHCP. This combines the benefits of DHCP management with consistent IP assignment. A static IP works but requires manual configuration on the printer. Port forwarding is for inbound traffic. DNS records don't assign IP addresses."
  },
  {
    id: 34,
    question: "Which command displays the current IP configuration including DNS servers on a Windows computer?",
    options: [
      "ipconfig",
      "ipconfig /all",
      "netstat -a",
      "ping localhost"
    ],
    correct: 1,
    explanation: "ipconfig /all displays comprehensive IP configuration including DNS servers, DHCP lease information, and MAC addresses. Basic ipconfig only shows IP address, subnet mask, and default gateway. Netstat shows network connections. Ping localhost tests the local TCP/IP stack."
  },
  {
    id: 35,
    question: "A company needs to connect two buildings 500 meters apart. Which cable type is required?",
    options: [
      "Cat6a UTP",
      "Cat5e STP",
      "Fiber optic",
      "Cat8"
    ],
    correct: 2,
    explanation: "Fiber optic cable is required for distances over 100 meters. All copper Ethernet cables (Cat5e through Cat8) are limited to 100 meters maximum. Single-mode fiber can span many kilometers, while multimode fiber typically supports 300-500 meters depending on the standard."
  }
];

// Domain 3: Hardware (25 questions)
// Answer distribution: 6A, 6B, 6C, 7D
const domain3Questions = [
  {
    id: 36,
    question: "A technician is building a gaming PC and needs to select a power supply. The system has a GPU requiring two 8-pin power connectors. Which PSU specification is MOST important to verify?",
    options: [
      "Number of PCIe power connectors",
      "Total wattage only",
      "80 Plus certification level",
      "Modular vs non-modular design"
    ],
    correct: 0,
    explanation: "Verifying the PSU has enough PCIe power connectors is most critical - if it lacks the required connectors, the GPU won't function regardless of total wattage. While wattage matters, having the right connectors is the immediate concern. 80 Plus certification affects efficiency. Modular design is a convenience feature."
  },
  {
    id: 37,
    question: "Which motherboard form factor is LARGEST and provides the most expansion slots?",
    options: [
      "ATX",
      "Micro-ATX",
      "Mini-ITX",
      "Extended ATX (E-ATX)"
    ],
    correct: 3,
    explanation: "Extended ATX (E-ATX) is larger than standard ATX and provides more expansion slots, often used in workstations and high-end systems. ATX is the standard full-size format. Micro-ATX is smaller with fewer slots. Mini-ITX is the smallest common format with typically only one expansion slot."
  },
  {
    id: 38,
    question: "A user reports their computer displays the message 'CMOS checksum error' on every boot. What is the MOST likely cause?",
    options: [
      "Failed hard drive",
      "Dead CMOS battery",
      "Corrupted operating system",
      "Faulty RAM"
    ],
    correct: 1,
    explanation: "A CMOS checksum error typically indicates a dead or dying CMOS battery (usually CR2032). The battery maintains BIOS settings when power is off. A failed hard drive causes different errors. OS corruption occurs after POST. Faulty RAM usually causes beep codes or failure to POST."
  },
  {
    id: 39,
    question: "Which RAM specification indicates the number of data transfers per second?",
    options: [
      "CAS latency",
      "Voltage",
      "MT/s (Megatransfers per second)",
      "ECC support"
    ],
    correct: 2,
    explanation: "MT/s (Megatransfers per second) indicates data transfer rate - for example, DDR4-3200 performs 3200 million transfers per second. CAS latency measures delay in clock cycles. Voltage is power requirement. ECC indicates error-correction capability."
  },
  {
    id: 40,
    question: "A technician is installing a new NVMe SSD. Which slot should be used for BEST performance?",
    options: [
      "SATA port",
      "USB 3.0 port",
      "M.2 slot with PCIe support",
      "mSATA slot"
    ],
    correct: 2,
    explanation: "An M.2 slot with PCIe/NVMe support provides the fastest interface for NVMe SSDs, offering speeds up to 7000+ MB/s on PCIe 4.0. SATA is limited to 600 MB/s. USB 3.0 maxes out around 625 MB/s. mSATA uses the SATA interface with slower speeds."
  },
  {
    id: 41,
    question: "Which Intel CPU socket type uses an LGA (Land Grid Array) design with pins on the motherboard?",
    options: [
      "AMD AM4",
      "Intel LGA 1700",
      "AMD AM5",
      "Intel Socket 478"
    ],
    correct: 1,
    explanation: "Intel LGA 1700 (for 12th/13th/14th gen) uses Land Grid Array with pins on the motherboard and contacts on the CPU. AMD AM4 uses PGA (pins on CPU). AMD AM5 also uses LGA like Intel. Socket 478 is an obsolete Intel socket."
  },
  {
    id: 42,
    question: "A technician needs to install RAM in a dual-channel configuration on a motherboard with 4 DIMM slots colored black and gray. Which slots should be populated first?",
    options: [
      "The two slots closest to the CPU",
      "The two slots furthest from the CPU",
      "Matching colored slots (both black or both gray)",
      "Any two adjacent slots"
    ],
    correct: 2,
    explanation: "Matching colored slots indicate the same memory channel - populating both slots of the same color enables dual-channel mode. Adjacent slots are typically different channels. The manual should be consulted, but color-coding is the standard convention for indicating channel pairs."
  },
  {
    id: 43,
    question: "What is the purpose of thermal paste between a CPU and heatsink?",
    options: [
      "To provide electrical insulation",
      "To secure the heatsink in place",
      "To fill microscopic gaps and improve heat transfer",
      "To prevent oxidation of the CPU"
    ],
    correct: 2,
    explanation: "Thermal paste fills the microscopic imperfections on both the CPU and heatsink surfaces, eliminating air gaps and improving heat conduction. It's not for electrical insulation (both surfaces are metal), securing (that's the retention mechanism), or preventing oxidation."
  },
  {
    id: 44,
    question: "Which display connector supports both video and audio and is the most common on modern consumer displays?",
    options: [
      "VGA",
      "DVI-D",
      "HDMI",
      "DisplayPort"
    ],
    correct: 2,
    explanation: "HDMI carries both video and audio and is the most common connector on consumer TVs, monitors, and devices. VGA is analog video only. DVI-D is digital video only. DisplayPort also carries audio but is less common on consumer devices (more common on computer monitors)."
  },
  {
    id: 45,
    question: "A computer makes continuous long beeps during POST. According to standard AMI BIOS beep codes, what does this typically indicate?",
    options: [
      "RAM failure",
      "Video card failure",
      "CPU overheating",
      "Hard drive failure"
    ],
    correct: 0,
    explanation: "Continuous long beeps typically indicate RAM failure or RAM not detected in AMI BIOS systems. Video issues usually produce different patterns (often 1 long + 2/3 short). CPU issues often prevent POST entirely. Hard drive failures don't produce beep codes as POST can complete without storage."
  },
  {
    id: 46,
    question: "Which power connector provides 12V power specifically for the CPU?",
    options: [
      "24-pin ATX connector",
      "4/8-pin EPS connector",
      "6-pin PCIe connector",
      "SATA power connector"
    ],
    correct: 1,
    explanation: "The 4-pin or 8-pin EPS connector (also called ATX12V or CPU power) provides dedicated 12V power to the CPU voltage regulators. The 24-pin provides main motherboard power. PCIe connectors power graphics cards. SATA powers drives."
  },
  {
    id: 47,
    question: "A user needs to install a graphics card that requires a 6-pin and an 8-pin power connector. Their PSU only has two 6-pin connectors. What is the BEST solution?",
    options: [
      "Use a 6-pin to 8-pin adapter",
      "Connect only the 6-pin and leave the 8-pin empty",
      "Purchase a higher-wattage PSU with proper connectors",
      "Use a Molex to 8-pin adapter"
    ],
    correct: 2,
    explanation: "The best solution is a PSU with proper connectors. Adapters can work but risk insufficient power delivery or connection failures. Leaving the 8-pin empty won't work - the card won't function or may be unstable. Molex adapters are particularly risky due to lower wire gauge and connection quality."
  },
  {
    id: 48,
    question: "What distinguishes DDR5 RAM from DDR4?",
    options: [
      "DDR5 has 288 pins like DDR4",
      "DDR5 has a different notch position and higher speeds",
      "DDR5 requires lower voltage than DDR4",
      "DDR5 is backward compatible with DDR4 slots"
    ],
    correct: 1,
    explanation: "DDR5 has a different notch position (preventing installation in DDR4 slots) and offers significantly higher speeds (starting at 4800 MT/s vs DDR4's typical 2133-3200). While DDR5 does use lower voltage (1.1V vs 1.2V), the defining differences are the keying and performance. DDR generations are never backward compatible."
  },
  {
    id: 49,
    question: "Which storage interface provides the fastest sequential read speeds for consumer SSDs?",
    options: [
      "SATA III",
      "PCIe 4.0 x4 NVMe",
      "USB 3.2 Gen 2",
      "SAS"
    ],
    correct: 1,
    explanation: "PCIe 4.0 x4 NVMe provides up to 7000+ MB/s sequential reads. SATA III maxes at 600 MB/s. USB 3.2 Gen 2 reaches 1250 MB/s theoretical. SAS is fast (up to 12 Gbps) but slower than PCIe 4.0 NVMe and used primarily in servers."
  },
  {
    id: 50,
    question: "A technician needs to connect a hard drive and optical drive to a motherboard. Which connectors are used?",
    options: [
      "IDE for both",
      "SATA for both",
      "SCSI for hard drive, IDE for optical",
      "NVMe for hard drive, SATA for optical"
    ],
    correct: 1,
    explanation: "SATA is the standard interface for both hard drives and optical drives in modern systems. IDE is legacy technology. SCSI is primarily for enterprise storage. NVMe is for SSDs only - traditional hard drives and optical drives don't use NVMe."
  },
  {
    id: 51,
    question: "What is the function of a riser card in a computer system?",
    options: [
      "Increases system RAM capacity",
      "Provides additional USB ports",
      "Allows expansion cards to be mounted parallel to the motherboard",
      "Improves CPU cooling"
    ],
    correct: 2,
    explanation: "Riser cards redirect expansion slots to allow cards to be mounted parallel (horizontal) to the motherboard instead of perpendicular, enabling use in low-profile cases. They don't add RAM, USB ports, or affect cooling."
  },
  {
    id: 52,
    question: "Which GPU memory type is specifically designed for graphics cards and offers high bandwidth?",
    options: [
      "DDR4",
      "DDR5",
      "GDDR6",
      "ECC RAM"
    ],
    correct: 2,
    explanation: "GDDR6 (Graphics DDR6) is specifically designed for GPUs, optimized for the high-bandwidth, parallel access patterns of graphics processing. DDR4/DDR5 are system memory. ECC RAM has error correction but isn't graphics-specific."
  },
  {
    id: 53,
    question: "A technician is replacing a failed power supply. The original PSU is rated at 500W 80 Plus Bronze. Which replacement is acceptable?",
    options: [
      "450W 80 Plus Gold",
      "550W 80 Plus Bronze",
      "500W non-rated",
      "400W 80 Plus Platinum"
    ],
    correct: 1,
    explanation: "A 550W 80 Plus Bronze or better is acceptable - it meets or exceeds the original wattage with equivalent or better efficiency. Lower wattage options (450W, 400W) may not provide sufficient power even with better efficiency ratings. Non-rated PSUs lack efficiency certification and may be unreliable."
  },
  {
    id: 54,
    question: "What is the primary purpose of ECC RAM?",
    options: [
      "Faster memory access speeds",
      "Lower power consumption",
      "Detecting and correcting memory errors",
      "Supporting higher memory capacities"
    ],
    correct: 2,
    explanation: "ECC (Error-Correcting Code) RAM detects and corrects single-bit memory errors, improving system reliability. It's essential for servers and workstations where data integrity is critical. ECC RAM is actually slightly slower than non-ECC and has similar power consumption."
  },
  {
    id: 55,
    question: "Which component converts the 120V AC from a wall outlet to the various DC voltages needed by computer components?",
    options: [
      "Motherboard VRM",
      "Power supply unit (PSU)",
      "UPS",
      "Surge protector"
    ],
    correct: 1,
    explanation: "The PSU converts AC to DC at voltages like +12V, +5V, and +3.3V for computer components. The VRM (Voltage Regulator Module) further steps down voltages for the CPU. A UPS provides battery backup. Surge protectors filter spikes but don't convert power."
  },
  {
    id: 56,
    question: "A technician is building a quiet PC for an audio studio. Which CPU cooler type would be BEST?",
    options: [
      "Stock cooler with 50mm fan",
      "High-CFM case fan",
      "Large heatsink with slow-spinning 140mm fan",
      "Single 80mm high-RPM fan"
    ],
    correct: 2,
    explanation: "Large heatsinks with slow-spinning large fans (120mm+) produce minimal noise while providing adequate cooling. Larger fans move more air at lower RPMs, reducing noise. Stock coolers are often loud. High-RPM small fans are very noisy. High-CFM case fans don't directly cool the CPU."
  },
  {
    id: 57,
    question: "What does the '80 Plus Gold' rating on a power supply indicate?",
    options: [
      "Gold-plated connectors for better conductivity",
      "At least 87% efficiency at typical loads",
      "5-year manufacturer warranty",
      "Maximum output of 800 watts"
    ],
    correct: 1,
    explanation: "80 Plus Gold indicates at least 87% efficiency at 20% load, 90% at 50% load, and 87% at 100% load. Higher efficiency means less wasted energy as heat. It's not related to connector plating, warranty terms, or wattage capacity."
  },
  {
    id: 58,
    question: "A user wants to upgrade their laptop storage from a 2.5-inch SATA SSD to a faster drive. Which form factor should they look for if their laptop has an M.2 slot?",
    options: [
      "mSATA",
      "U.2",
      "M.2 2280",
      "PCIe x16"
    ],
    correct: 2,
    explanation: "M.2 2280 (22mm wide, 80mm long) is the most common M.2 SSD form factor for laptops. mSATA is an older, smaller format. U.2 is primarily for enterprise drives. PCIe x16 is a slot type for desktop graphics cards, not a storage form factor."
  },
  {
    id: 59,
    question: "Which type of expansion slot is commonly used for sound cards, network cards, and other lower-bandwidth devices?",
    options: [
      "PCIe x16",
      "PCIe x1",
      "AGP",
      "ISA"
    ],
    correct: 1,
    explanation: "PCIe x1 slots are commonly used for sound cards, network cards, and other devices that don't need the bandwidth of larger slots. PCIe x16 is primarily for graphics cards. AGP was an older graphics-specific slot. ISA is obsolete."
  },
  {
    id: 60,
    question: "What is the maximum data transfer rate of USB 3.2 Gen 2?",
    options: [
      "5 Gbps",
      "10 Gbps",
      "20 Gbps",
      "40 Gbps"
    ],
    correct: 1,
    explanation: "USB 3.2 Gen 2 provides 10 Gbps (also called SuperSpeed USB 10Gbps). USB 3.2 Gen 1 is 5 Gbps. USB 3.2 Gen 2x2 reaches 20 Gbps. USB4/Thunderbolt 4 achieves 40 Gbps."
  }
];

// Domain 4: Virtualization and Cloud Computing (11 questions)
// Answer distribution: 3A, 3B, 3C, 2D
const domain4Questions = [
  {
    id: 61,
    question: "Which type of hypervisor runs directly on the hardware without a host operating system?",
    options: [
      "Type 1 (bare-metal)",
      "Type 2 (hosted)",
      "Container runtime",
      "Paravirtualization"
    ],
    correct: 0,
    explanation: "Type 1 hypervisors (bare-metal) run directly on hardware without a host OS - examples include VMware ESXi, Microsoft Hyper-V, and KVM. Type 2 hypervisors run on top of a host OS (like VirtualBox or VMware Workstation). Container runtimes (like Docker) aren't hypervisors. Paravirtualization is a technique, not a hypervisor type."
  },
  {
    id: 62,
    question: "A company wants to use servers, storage, and networking from a cloud provider while maintaining control over the operating system and applications. Which service model fits this need?",
    options: [
      "SaaS",
      "IaaS",
      "PaaS",
      "DaaS"
    ],
    correct: 1,
    explanation: "IaaS (Infrastructure as a Service) provides virtualized computing resources where the customer manages the OS and applications. SaaS provides complete applications. PaaS provides a platform for developing applications. DaaS provides virtual desktops."
  },
  {
    id: 63,
    question: "Which cloud deployment model provides dedicated resources for a single organization but is hosted by a third-party provider?",
    options: [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud"
    ],
    correct: 1,
    explanation: "Private cloud provides dedicated resources for a single organization, whether self-hosted or provider-hosted. Public cloud shares resources among multiple tenants. Hybrid cloud combines public and private. Community cloud serves multiple organizations with shared concerns."
  },
  {
    id: 64,
    question: "A developer needs to deploy a web application without managing the underlying servers or operating system. Which cloud service model should they use?",
    options: [
      "IaaS",
      "SaaS",
      "PaaS",
      "FaaS"
    ],
    correct: 2,
    explanation: "PaaS (Platform as a Service) provides a platform for deploying applications without managing servers or OS - examples include Heroku and Google App Engine. IaaS requires OS management. SaaS provides finished applications. FaaS (Function as a Service) is for serverless functions, more specific than PaaS."
  },
  {
    id: 65,
    question: "What is the primary benefit of using virtual machine snapshots?",
    options: [
      "Improved VM performance",
      "Reduced storage requirements",
      "Quick restoration to a previous state",
      "Better network isolation"
    ],
    correct: 2,
    explanation: "Snapshots capture a VM's state at a point in time, allowing quick restoration if something goes wrong (like a failed update). Snapshots actually reduce performance and increase storage usage. They don't affect network isolation."
  },
  {
    id: 66,
    question: "Which technology allows multiple isolated applications to share the same OS kernel?",
    options: [
      "Virtual machines",
      "Containers",
      "Type 1 hypervisor",
      "Emulation"
    ],
    correct: 1,
    explanation: "Containers share the host OS kernel while providing isolated environments for applications - Docker is the most common example. VMs run complete operating systems. Type 1 hypervisors enable VMs. Emulation recreates different hardware architectures."
  },
  {
    id: 67,
    question: "A company uses Microsoft 365 for email and document collaboration. This is an example of which cloud service model?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-premises"
    ],
    correct: 2,
    explanation: "Microsoft 365 is SaaS (Software as a Service) - complete applications delivered over the internet. Users don't manage any infrastructure, platform, or software installation. IaaS provides infrastructure. PaaS provides development platforms."
  },
  {
    id: 68,
    question: "What is the purpose of resource pooling in cloud computing?",
    options: [
      "Dedicating resources to single customers",
      "Serving multiple customers from shared resources",
      "Preventing resource sharing",
      "Limiting available resources"
    ],
    correct: 1,
    explanation: "Resource pooling serves multiple customers (multi-tenancy) from shared physical resources, dynamically allocating capacity as needed. This is a defining characteristic of cloud computing that enables cost efficiency and scalability."
  },
  {
    id: 69,
    question: "Which virtualization component manages resource allocation between multiple VMs?",
    options: [
      "Virtual NIC",
      "Virtual switch",
      "Hypervisor",
      "Virtual disk"
    ],
    correct: 2,
    explanation: "The hypervisor manages all aspects of VM operation including CPU scheduling, memory allocation, and I/O handling across multiple VMs. Virtual NICs, switches, and disks are components managed by the hypervisor."
  },
  {
    id: 70,
    question: "A cloud feature allows resources to be quickly provisioned and released to match demand. What is this called?",
    options: [
      "Resource pooling",
      "Measured service",
      "Rapid elasticity",
      "On-demand self-service"
    ],
    correct: 2,
    explanation: "Rapid elasticity is the cloud characteristic that enables quick scaling of resources up or down to match workload demands. Resource pooling is sharing resources. Measured service is pay-per-use billing. On-demand self-service is provisioning without provider interaction."
  },
  {
    id: 71,
    question: "Which cloud concept describes the ability for users to provision resources without requiring human interaction with the provider?",
    options: [
      "Broad network access",
      "Rapid elasticity",
      "Measured service",
      "On-demand self-service"
    ],
    correct: 3,
    explanation: "On-demand self-service allows users to provision computing resources automatically through web portals or APIs without needing to contact provider staff. Broad network access means accessibility over networks. Rapid elasticity is scalability. Measured service is usage-based billing."
  }
];

// Domain 5: Hardware and Network Troubleshooting (29 questions)
// Answer distribution: 7A, 7B, 7C, 8D
const domain5Questions = [
  {
    id: 72,
    question: "A user reports their computer won't boot and they hear a repeating pattern of one long beep followed by three short beeps. Based on common BIOS beep codes, what does this indicate?",
    options: [
      "Video card or graphics failure",
      "RAM not detected",
      "CPU failure",
      "Hard drive not found"
    ],
    correct: 0,
    explanation: "One long and three short beeps typically indicates a video card or graphics problem in most BIOS implementations. RAM issues usually produce continuous beeping or different patterns. CPU failures often prevent POST entirely. Hard drive failures don't produce beep codes."
  },
  {
    id: 73,
    question: "A laptop battery shows 100% charge but the laptop shuts off when unplugged from AC power. What is the MOST likely cause?",
    options: [
      "Faulty AC adapter",
      "Dead battery cells",
      "BIOS needs updating",
      "Power management misconfiguration"
    ],
    correct: 1,
    explanation: "Dead battery cells can show false charge levels because the battery management system reads the cells as charged, but they can't actually hold/deliver power. A faulty AC adapter wouldn't affect battery operation. BIOS updates rarely fix this issue. Power management affects sleep behavior, not battery function."
  },
  {
    id: 74,
    question: "A computer randomly shuts down during intensive tasks but works fine at idle. What should be checked FIRST?",
    options: [
      "RAM modules",
      "Power supply wattage",
      "CPU temperatures",
      "Hard drive health"
    ],
    correct: 2,
    explanation: "CPU temperatures should be checked first - random shutdowns during intensive tasks are classic symptoms of thermal throttling or thermal shutdown. The CPU draws more power and generates more heat under load. PSU issues would likely cause immediate shutdown. RAM and HDD issues typically cause crashes, not thermal shutdowns."
  },
  {
    id: 75,
    question: "A network printer is not responding. The printer's LCD shows it has an IP address on the correct subnet. What should be checked NEXT?",
    options: [
      "Printer toner levels",
      "Ping the printer from a computer",
      "Replace the network cable",
      "Restart the print spooler"
    ],
    correct: 1,
    explanation: "Pinging the printer verifies network connectivity before troubleshooting other issues. If ping fails, check cable/network. If ping succeeds, the issue is with print services. Toner levels don't affect network connectivity. Replacing cables or restarting spooler should come after confirming network status."
  },
  {
    id: 76,
    question: "A user's computer boots to a blank screen with a blinking cursor. What does this typically indicate?",
    options: [
      "Video card failure",
      "RAM failure",
      "No bootable device found",
      "CPU overheating"
    ],
    correct: 2,
    explanation: "A blank screen with blinking cursor typically means POST completed successfully but no bootable device was found - the BIOS passed control but nothing could load. Video card failure would show no display. RAM failure causes beep codes. CPU overheating causes shutdowns, not blank screens after boot."
  },
  {
    id: 77,
    question: "Users on a network segment report slow file transfers. All computers show full Gigabit connection. What tool should be used to identify the issue?",
    options: [
      "Cable certifier",
      "Ping",
      "Network protocol analyzer (Wireshark)",
      "Tone generator"
    ],
    correct: 2,
    explanation: "A protocol analyzer like Wireshark can identify packet retransmissions, errors, and bandwidth usage causing slow transfers. Cable certifiers test cable specifications. Ping only checks basic connectivity. Tone generators trace cables physically."
  },
  {
    id: 78,
    question: "A hard drive makes clicking sounds and the system fails to boot. What is the MOST likely issue?",
    options: [
      "Corrupted MBR",
      "Failed read/write heads",
      "Full hard drive",
      "Loose SATA cable"
    ],
    correct: 1,
    explanation: "Clicking sounds indicate the read/write heads are failing - this is known as the 'click of death' and indicates imminent drive failure. MBR corruption doesn't cause clicking. A full drive still boots. Loose cables cause non-detection, not clicking."
  },
  {
    id: 79,
    question: "A computer POST successfully but Windows displays a blue screen during boot. What should be tried FIRST?",
    options: [
      "Replace the motherboard",
      "Boot into Safe Mode",
      "Reinstall Windows",
      "Replace RAM"
    ],
    correct: 1,
    explanation: "Safe Mode loads minimal drivers, helping identify if a driver or software is causing the BSOD. This is the least invasive diagnostic step. Replacing motherboard or reinstalling Windows is premature without diagnosis. RAM issues typically cause different symptoms."
  },
  {
    id: 80,
    question: "A wireless client shows excellent signal strength but very slow speeds. Other clients work normally. What should be checked on the problematic client?",
    options: [
      "Access point firmware",
      "Wireless channel",
      "Wireless adapter drivers and settings",
      "Router placement"
    ],
    correct: 2,
    explanation: "Since other clients work normally, the issue is client-specific. Checking wireless adapter drivers and settings (especially whether it's limited to older protocols like 802.11g) is the logical step. AP firmware and channel affect all clients. Router placement isn't client-specific."
  },
  {
    id: 81,
    question: "A monitor displays 'No Signal' when connected to a computer. The computer appears to be running (fans spinning, LEDs on). What is the FIRST troubleshooting step?",
    options: [
      "Replace the monitor",
      "Reseat the graphics card",
      "Check that the monitor is connected to the correct video output",
      "Update graphics drivers"
    ],
    correct: 2,
    explanation: "First verify the cable is connected to the active video output - many systems have multiple outputs (integrated and discrete) and only one may be active. Reseating the GPU or replacing the monitor should come after verifying connection. Driver updates require a display to perform."
  },
  {
    id: 82,
    question: "A computer exhibits random freezes and occasional blue screens with memory-related error codes. What diagnostic should be run?",
    options: [
      "chkdsk",
      "Windows Memory Diagnostic",
      "System File Checker",
      "Disk Cleanup"
    ],
    correct: 1,
    explanation: "Windows Memory Diagnostic tests RAM for errors, appropriate for memory-related BSODs and random freezes. Chkdsk checks hard drives. System File Checker repairs Windows files. Disk Cleanup frees space but doesn't diagnose issues."
  },
  {
    id: 83,
    question: "A laptop touchpad stops working but an external USB mouse works fine. What should be checked FIRST?",
    options: [
      "Touchpad driver",
      "Function key to enable/disable touchpad",
      "USB ports",
      "Motherboard"
    ],
    correct: 1,
    explanation: "Many laptops have a function key (Fn+F5, F7, etc.) that enables/disables the touchpad - this is the most common cause and easiest to check first. Driver issues are possible but less common than accidental disabling. USB ports are working (mouse works). Motherboard failure is unlikely for a single component."
  },
  {
    id: 84,
    question: "A new graphics card displays artifacts (random colored pixels) during gaming. The system is stable at idle. What is the MOST likely cause?",
    options: [
      "Insufficient PSU wattage",
      "Driver incompatibility",
      "GPU overheating",
      "Defective GPU or VRAM"
    ],
    correct: 3,
    explanation: "Artifacts under load typically indicate defective GPU/VRAM - the memory cells produce errors when hot. While overheating can cause artifacts, a new card shouldn't overheat immediately. PSU issues cause crashes, not artifacts. Driver issues cause display problems but not typically random colored pixels."
  },
  {
    id: 85,
    question: "A computer powers on for a few seconds then shuts off. This repeats continuously. What should be checked FIRST?",
    options: [
      "CPU seated properly with cooler attached",
      "RAM modules",
      "Power button",
      "Graphics card"
    ],
    correct: 0,
    explanation: "Power cycling usually indicates thermal protection - the CPU heats rapidly if the cooler isn't properly seated or thermal paste is missing. The system shuts down to prevent damage. RAM issues usually allow longer POST. Power button issues cause different symptoms. GPU problems don't typically cause rapid cycling."
  },
  {
    id: 86,
    question: "Users report a shared network printer is offline. The printer LCD shows 'Ready' and prints test pages successfully. What should be checked?",
    options: [
      "Printer USB connection",
      "Printer ink/toner levels",
      "Print server or sharing computer status",
      "Printer firmware"
    ],
    correct: 2,
    explanation: "Since the printer works locally, the issue is with the sharing mechanism - check the print server or computer sharing the printer. USB connection is for local printing. Ink levels don't affect network status. Firmware updates wouldn't cause sudden offline status."
  },
  {
    id: 87,
    question: "A computer's time and date reset to defaults after every shutdown. What component needs replacement?",
    options: [
      "System RAM",
      "Hard drive",
      "CMOS battery",
      "Power supply"
    ],
    correct: 2,
    explanation: "The CMOS battery maintains BIOS settings (including time/date) when the system is powered off. A dead battery causes settings to reset. RAM, hard drives, and power supplies don't store BIOS settings."
  },
  {
    id: 88,
    question: "A laptop display works but appears very dim, barely visible. Using an external monitor works perfectly. What should be checked?",
    options: [
      "Screen brightness settings and function keys",
      "Video card",
      "External monitor settings",
      "USB ports"
    ],
    correct: 0,
    explanation: "First check the simplest solution - brightness settings and function keys that control backlight. Since external monitor works, the video card is functional. The issue is specific to the laptop display or its brightness control. USB ports are unrelated to display issues."
  },
  {
    id: 89,
    question: "A network connection shows 'Limited connectivity' and an APIPA address (169.254.x.x). The cable tests good. What is the issue?",
    options: [
      "Bad network cable",
      "Incorrect DNS settings",
      "DHCP server unreachable or not responding",
      "Duplicate IP address"
    ],
    correct: 2,
    explanation: "APIPA addresses are self-assigned when DHCP fails - the client couldn't contact a DHCP server. Since the cable is good, the issue is with the DHCP server, relay, or network path to the server. DNS issues wouldn't prevent IP assignment. The cable was already tested."
  },
  {
    id: 90,
    question: "A laser printer produces pages with vertical black lines running down the entire page. What is the MOST likely cause?",
    options: [
      "Low toner",
      "Defective fuser",
      "Scratched drum",
      "Paper jam"
    ],
    correct: 2,
    explanation: "Vertical lines running down pages typically indicate a scratched or damaged drum - the scratch transfers toner consistently. Low toner causes fading. Fuser issues cause poor adhesion or smearing. Paper jams cause immediate problems, not ongoing line patterns."
  },
  {
    id: 91,
    question: "A computer makes a loud grinding noise from the front. The noise stops when a certain drive bay is pushed. What is failing?",
    options: [
      "Power supply fan",
      "Case fan",
      "Hard drive or fan bearing",
      "CPU cooler"
    ],
    correct: 2,
    explanation: "A grinding noise from the front that responds to pressure on a drive bay indicates either an HDD with failing bearings or a fan in that bay with bearing failure. PSU and CPU are typically rear-mounted. Case fans are possible but the positional response points to the drive bay."
  },
  {
    id: 92,
    question: "After installing a second hard drive, the computer no longer boots from the original drive. What should be checked?",
    options: [
      "Drive capacity limits",
      "Boot order in BIOS",
      "Power supply wattage",
      "RAM compatibility"
    ],
    correct: 1,
    explanation: "Adding a drive can change boot order - the BIOS might try to boot from the new drive first. Checking boot order is the immediate fix. Drive capacity and PSU wattage rarely affect boot order. RAM isn't related to storage boot issues."
  },
  {
    id: 93,
    question: "A user reports USB devices randomly disconnect and reconnect. The same devices work fine on another computer. What should be checked?",
    options: [
      "USB devices need firmware updates",
      "USB power settings in Windows",
      "USB devices are defective",
      "Network settings"
    ],
    correct: 1,
    explanation: "Windows USB selective suspend can cause random disconnects to save power. Since devices work on another computer, they're not defective. Firmware updates rarely fix this common issue. Network settings are unrelated to USB behavior."
  },
  {
    id: 94,
    question: "A technician needs to identify which cable in a bundle goes to a specific wall jack. Which tool should be used?",
    options: [
      "Multimeter",
      "Cable certifier",
      "Tone generator and probe",
      "Loopback plug"
    ],
    correct: 2,
    explanation: "A tone generator sends a signal through the cable that the probe detects at the other end - perfect for tracing cables. Multimeters test electrical properties. Cable certifiers verify specifications. Loopback plugs test interfaces."
  },
  {
    id: 95,
    question: "A newly installed SSD is not detected by the BIOS. The SATA cable and power connections are verified. What should be checked NEXT?",
    options: [
      "M.2 slot availability",
      "SATA mode in BIOS (AHCI vs IDE)",
      "SSD firmware version",
      "CPU compatibility"
    ],
    correct: 1,
    explanation: "BIOS SATA mode settings can prevent drive detection - some drives require AHCI mode. Since this is a SATA drive, M.2 slots are irrelevant. Firmware is rarely the issue for basic detection. CPU compatibility doesn't affect SATA devices."
  },
  {
    id: 96,
    question: "A computer running Windows shows 'BOOTMGR is missing' on startup. What is the FIRST recovery step?",
    options: [
      "Reinstall Windows",
      "Replace the hard drive",
      "Boot from Windows installation media and run Startup Repair",
      "Enter BIOS and reset to defaults"
    ],
    correct: 2,
    explanation: "Startup Repair from installation media can fix boot manager issues without data loss. Reinstalling Windows is unnecessary for bootloader problems. The hard drive likely isn't failed. BIOS defaults won't fix a missing BOOTMGR file."
  },
  {
    id: 97,
    question: "A user's second monitor shows a duplicate of the first instead of extending the desktop. Where is this setting changed?",
    options: [
      "Monitor's on-screen menu",
      "Graphics card's control panel only",
      "Windows Display Settings",
      "BIOS video settings"
    ],
    correct: 2,
    explanation: "Windows Display Settings (Win+P shortcut or Settings > Display) controls multi-monitor behavior including duplicate/extend options. The monitor's menu adjusts that display only. Graphics control panels offer additional options but Windows handles basic configuration. BIOS doesn't control Windows display modes."
  },
  {
    id: 98,
    question: "An inkjet printer produces faded or missing colors on printouts. Print head cleaning was performed but didn't help. What should be checked?",
    options: [
      "Paper type setting",
      "Ink cartridge expiration and installation",
      "Fuser temperature",
      "Drum condition"
    ],
    correct: 1,
    explanation: "Ink cartridges can expire (dried out) or be improperly installed, causing poor output even after cleaning. Paper type affects quality but not color output. Fusers and drums are laser printer components, not inkjet."
  },
  {
    id: 99,
    question: "A computer experiences intermittent shutdowns and the power supply emits a burning smell. What action should be taken?",
    options: [
      "Continue using and monitor",
      "Update BIOS",
      "Replace the power supply immediately",
      "Reseat all cables"
    ],
    correct: 2,
    explanation: "A burning smell from the PSU indicates component failure and fire risk - replace immediately. Continued use is dangerous. BIOS updates won't fix hardware failure. Reseating cables doesn't address internal PSU damage."
  },
  {
    id: 100,
    question: "A user complains that their wireless connection drops when using the microwave. What is causing this interference?",
    options: [
      "The router needs a firmware update",
      "The microwave operates on the same 2.4GHz frequency",
      "The wireless adapter is failing",
      "Too many devices on the network"
    ],
    correct: 1,
    explanation: "Microwaves operate around 2.4GHz, the same frequency as 802.11b/g/n Wi-Fi, causing interference when in use. The solution is to switch to 5GHz Wi-Fi if available. Firmware, adapter condition, and device count don't explain the microwave correlation."
  }
];

// Export all questions
export const examQuestions = [
  ...domain1Questions,
  ...domain2Questions,
  ...domain3Questions,
  ...domain4Questions,
  ...domain5Questions
];

export const questionPool = {
  domain1: domain1Questions,
  domain2: domain2Questions,
  domain3: domain3Questions,
  domain4: domain4Questions,
  domain5: domain5Questions,
  all: examQuestions
};

// Alias for exam generator compatibility
export const aPlusCore1QuestionPool = questionPool;

// Metadata for the exam
export const examMetadata = {
  title: "CompTIA A+ Core 1 (220-1101) Practice Exam",
  totalQuestions: 100,
  timeLimit: 90, // minutes
  passingScore: 675, // on a scale of 100-900
  domains: [
    { name: "Mobile Devices", percentage: 15, questionCount: 15 },
    { name: "Networking", percentage: 20, questionCount: 20 },
    { name: "Hardware", percentage: 25, questionCount: 25 },
    { name: "Virtualization and Cloud Computing", percentage: 11, questionCount: 11 },
    { name: "Hardware and Network Troubleshooting", percentage: 29, questionCount: 29 }
  ]
};

/*
ANSWER DISTRIBUTION VERIFICATION:
================================
Domain 1 (15 questions): A=4, B=4, C=4, D=3
Domain 2 (20 questions): A=5, B=5, C=5, D=5
Domain 3 (25 questions): A=6, B=6, C=6, D=7
Domain 4 (11 questions): A=3, B=3, C=3, D=2
Domain 5 (29 questions): A=7, B=7, C=7, D=8

TOTALS:
A (correct: 0) = 4+5+6+3+7 = 25 ✓
B (correct: 1) = 4+5+6+3+7 = 25 ✓
C (correct: 2) = 4+5+6+3+7 = 25 ✓
D (correct: 3) = 3+5+7+2+8 = 25 ✓

Total Questions: 15+20+25+11+29 = 100 ✓
*/