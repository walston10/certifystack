export const lesson15Flashcards = [
  {
    id: 1,
    front: "What does the ping command do and how is it used?",
    back: "Tests connectivity using ICMP echo request/reply. Shows if host is reachable and latency. Usage: ping google.com or ping 8.8.8.8. Displays: reply time, TTL, packet loss. Tests: network connectivity, DNS resolution (if using name)."
  },
  {
    id: 2,
    front: "What are common ping command options?",
    back: "Windows: ping -t (continuous), -n # (count), -l # (packet size). Linux/Mac: ping -c # (count), -s # (packet size). Continuous ping useful for monitoring connection stability. Ctrl+C to stop continuous ping."
  },
  {
    id: 3,
    front: "What does 'Request timed out' mean in ping?",
    back: "No response received within timeout period. Possible causes: destination unreachable, firewall blocking ICMP, device offline, wrong IP address, routing issue. Check connectivity step by step (gateway, then internet)."
  },
  {
    id: 4,
    front: "What does 'Destination host unreachable' mean in ping?",
    back: "Router can't find route to destination. Different from timeout - router actively says it can't reach destination. Indicates routing problem or destination network doesn't exist. Check default gateway and routing."
  },
  {
    id: 5,
    front: "What does ipconfig do and what are its common options?",
    back: "Windows command showing IP configuration. ipconfig: Basic info (IP, mask, gateway). /all: Detailed info (MAC, DNS, DHCP). /release: Release DHCP IP. /renew: Request new DHCP IP. /flushdns: Clear DNS cache."
  },
  {
    id: 6,
    front: "What is the Linux/Mac equivalent of ipconfig?",
    back: "ifconfig (deprecated) or ip addr (modern Linux). Shows network interface configuration. Example: ifconfig eth0 shows Ethernet 0 details. ip addr show lists all interfaces. Both show IP, MAC, status."
  },
  {
    id: 7,
    front: "When should you use ipconfig /release and /renew?",
    back: "Troubleshooting DHCP issues. Release: Returns current IP to DHCP server. Renew: Requests new IP. Use when: IP conflict, wrong IP assigned, network settings changed, APIPA address (169.254.x.x). Run release then renew."
  },
  {
    id: 8,
    front: "What does ipconfig /flushdns do?",
    back: "Clears local DNS cache. Use when: can't access website after DNS changes, getting old/incorrect IP for domain, DNS poisoning suspected, testing DNS changes. Forces fresh DNS lookup from server."
  },
  {
    id: 9,
    front: "What does tracert/traceroute do?",
    back: "Shows path packets take to destination (all hops). Lists each router along the way with latency. Windows: tracert. Linux/Mac: traceroute. Identifies where connection fails or slows down. Uses ICMP (Windows) or UDP (Linux)."
  },
  {
    id: 10,
    front: "What does an asterisk (*) mean in tracert output?",
    back: "No response from that hop within timeout. Common causes: router configured not to respond, firewall blocking, router too busy. Not necessarily a problem if later hops respond. Indicates router doesn't respond to probe."
  },
  {
    id: 11,
    front: "What does nslookup do?",
    back: "Queries DNS servers to resolve domain names to IP addresses. Tests DNS functionality. Usage: nslookup google.com. Can specify DNS server: nslookup google.com 8.8.8.8. Shows which DNS server responded. Troubleshoots DNS issues."
  },
  {
    id: 12,
    front: "What does netstat command do?",
    back: "Network statistics - shows active connections and listening ports. netstat -a: All connections and listening ports. -n: Numerical addresses (no DNS lookup). -b: Shows executable (Windows). -r: Routing table. Useful for security, troubleshooting."
  },
  {
    id: 13,
    front: "What does arp command do?",
    back: "Shows/modifies ARP cache (IP to MAC address mappings). arp -a: View ARP table. arp -d: Delete entry. Maps IP addresses to MAC addresses on local network. Useful for troubleshooting local network connectivity, finding devices."
  },
  {
    id: 14,
    front: "What does hostname command do?",
    back: "Displays computer's hostname. Simple command with no options. Windows: hostname. Linux/Mac: hostname. Shows network name of computer. Useful for identifying computer in scripts or troubleshooting."
  },
  {
    id: 15,
    front: "What does a cable tester check?",
    back: "Tests twisted pair cables for: continuity (complete circuit), wire mapping (correct pin-out), opens (broken wires), shorts (wires touching), crossed pairs, split pairs. Essential after making custom cables. Shows which pins have issues."
  },
  {
    id: 16,
    front: "What is a cable certifier and how does it differ from a cable tester?",
    back: "Certifier: Tests if cable meets spec (Cat5e, Cat6, etc.), measures performance at rated speeds, provides certification report, expensive. Tester: Only checks basic connectivity, wire mapping, opens/shorts, cheaper. Certifier for professional installations."
  },
  {
    id: 17,
    front: "What is a crimping tool (crimper) used for?",
    back: "Attaches RJ-45 connectors to twisted pair cable. Presses metal pins into cable wires to make electrical connection. Different crimpers for different connector types (RJ-45, RJ-11, coax). Essential for making custom patch cables."
  },
  {
    id: 18,
    front: "What is a punch-down tool used for?",
    back: "Inserts wires into IDC blocks (patch panels, keystones, 110 blocks). Cuts excess wire and seats wire in one motion. Different blades: 110 style (modern), 66 style (legacy). Essential for structured cabling installations."
  },
  {
    id: 19,
    front: "What is a tone generator and probe (toner) used for?",
    back: "Traces and identifies cables in bundles. Tone generator: Attached to one end, sends audio signal through cable. Probe (wand): Detects tone at other end or along cable run. Essential in structured cabling for cable identification."
  },
  {
    id: 20,
    front: "What is a loopback plug/adapter used for?",
    back: "Tests network port by connecting transmit pins to receive pins. Computer sends data that loops back to itself. Tests NIC, switch port, cable port functionality. Available for: RJ-45 (Ethernet), fiber, serial. Isolates hardware issues."
  },
  {
    id: 21,
    front: "What is a Wi-Fi analyzer used for?",
    back: "Shows nearby wireless networks and their properties. Displays: SSIDs, signal strength, channels used, security types, MAC addresses. Helps: choose best channel, identify interference, find optimal AP placement, detect rogue APs. Phone apps available."
  },
  {
    id: 22,
    front: "What is a cable stripper used for?",
    back: "Removes outer jacket from cable without damaging inner wires. Adjustable depth guards prevent cutting too deep. Different types for twisted pair and coaxial cable. Essential for preparing cable for termination. Better than using knife."
  },
  {
    id: 23,
    front: "What is a multimeter used for in networking?",
    back: "Tests electrical properties: voltage, continuity, resistance. Network uses: test cable continuity, verify PoE voltage (48V), check power at outlets, test power adapters. Not specific to networking but useful. Digital multimeters most common."
  },
  {
    id: 24,
    front: "What does pathping do (Windows)?",
    back: "Combines ping and tracert. Shows route to destination AND packet loss statistics per hop. Runs longer than tracert (sends many packets). More detailed than tracert. Identifies which hop causing packet loss. Windows only."
  },
  {
    id: 25,
    front: "What is the purpose of testing with ping 127.0.0.1?",
    back: "Tests local TCP/IP stack (loopback address). Should always work if TCP/IP installed correctly. Doesn't test NIC or network - purely software test. If fails, TCP/IP installation problem. First step in network troubleshooting methodology."
  },
  {
    id: 26,
    front: "What is a TDR (Time Domain Reflectometer)?",
    back: "Tests copper cable length and locates breaks/faults. Sends signal and measures reflection time. Calculates distance to break/short. More advanced than basic cable tester. Useful for long cable runs in walls. Professional tool."
  },
  {
    id: 27,
    front: "What is an OTDR (Optical Time Domain Reflectometer)?",
    back: "TDR for fiber optic cables. Measures length, attenuation, locates breaks, identifies connection quality. Uses light pulses and reflections. Essential for fiber installations. Very expensive. Professional fiber testing tool."
  },
  {
    id: 28,
    front: "What is a light meter (optical power meter)?",
    back: "Measures signal strength in fiber optic cables. Verifies signal strong enough for transmission. Tests fiber link loss. Used with light source at other end. Measures in dBm. Essential for fiber installations and troubleshooting."
  },
  {
    id: 29,
    front: "What information does ipconfig /all provide that basic ipconfig doesn't?",
    back: "MAC address (physical address) - DHCP enabled status - DHCP server address - DNS servers - Lease obtained/expires times - Description of adapters - IPv6 information - Full detailed configuration. Essential for thorough troubleshooting."
  },
  {
    id: 30,
    front: "What is the systematic approach to using ping for troubleshooting?",
    back: "1. ping 127.0.0.1 (test TCP/IP). 2. ping own IP (test NIC). 3. ping default gateway (test local network). 4. ping external IP like 8.8.8.8 (test internet). 5. ping domain name (test DNS). Isolates problem location step by step."
  }
];