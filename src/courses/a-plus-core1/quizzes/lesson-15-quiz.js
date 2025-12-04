export const lesson15Quiz = [
  {
    id: 1,
    question: "A technician is troubleshooting a computer that cannot access the internet. They run 'ping 8.8.8.8' and receive replies, but 'ping google.com' fails with 'could not find host'. What is the most likely issue?",
    options: [
      "The network cable is unplugged",
      "DNS resolution is failing - the computer cannot resolve domain names to IP addresses",
      "The router is completely offline",
      "The computer's hard drive is full"
    ],
    correct: 1,
    explanation: "Successfully pinging 8.8.8.8 (Google's public DNS server) proves IP connectivity and routing work. Failing to ping by name indicates DNS failure. The computer cannot translate 'google.com' into an IP address. Troubleshooting steps: (1) Check DNS server configuration (ipconfig /all - should show valid DNS servers, not 0.0.0.0), (2) Try manually setting DNS to 8.8.8.8 and 8.8.4.4 (Google DNS) or 1.1.1.1 (Cloudflare DNS), (3) Flush DNS cache (ipconfig /flushdns), (4) Test DNS with nslookup google.com, (5) Restart network adapter or reboot. DNS is one of the most common networking issues."
  },
  {
    id: 2,
    question: "A user runs 'ipconfig' on their Windows computer and sees IP address 169.254.45.120 with subnet mask 255.255.0.0. What does this indicate?",
    options: [
      "The computer has a valid static IP configuration",
      "The computer failed to obtain a DHCP address and assigned itself an APIPA (link-local) address - network connectivity to DHCP server is broken",
      "The computer has the fastest possible internet connection",
      "This is a normal public IP address"
    ],
    correct: 1,
    explanation: "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. When a Windows computer configured for DHCP cannot contact a DHCP server, it self-assigns an APIPA address. With APIPA, the computer can only communicate with other APIPA devices on the same physical network segment - no gateway, no DNS, no internet, no other subnets. Troubleshooting: (1) Verify network cable is connected (check link lights), (2) Confirm DHCP server is running and has available addresses, (3) Check if on correct VLAN/network, (4) Try ipconfig /release then ipconfig /renew, (5) Restart computer. APIPA is a symptom, not the problem."
  },
  {
    id: 3,
    question: "A technician needs to test network connectivity to a remote web server and also see all the routers the packets pass through. What command-line tool should they use?",
    options: [
      "ipconfig",
      "ping",
      "tracert (Windows) or traceroute (Mac/Linux)",
      "netstat"
    ],
    correct: 2,
    explanation: "tracert (Windows) or traceroute (Mac/Linux) shows the path packets take to reach a destination, listing each router (hop) along the way with response times. This identifies where packets are being delayed or dropped. Usage: 'tracert google.com' or 'traceroute google.com'. Each line shows a hop with three round-trip times. If a hop shows '* * *' (request timed out), that router doesn't respond to ICMP (common for security), but packets may still pass through. Traceroute helps diagnose: slow connections (identify which hop has high latency), routing problems, and ISP/network issues. Maximum 30 hops by default."
  },
  {
    id: 4,
    question: "A network administrator wants to view all active network connections on a Windows computer, including which programs are using which ports. What command should they use?",
    options: [
      "ping",
      "tracert",
      "netstat -ano (shows connections with process IDs)",
      "ipconfig"
    ],
    correct: 2,
    explanation: "netstat displays active network connections, listening ports, and network statistics. Key options: 'netstat -a' (all connections and listening ports), 'netstat -n' (numeric addresses, no DNS lookup), 'netstat -o' (show owning process ID), 'netstat -ano' (combines all three - most useful). Use Task Manager or 'tasklist' to identify which program corresponds to a PID. Common uses: (1) Identify programs making network connections, (2) Find which process is using a port, (3) Detect suspicious connections, (4) View listening services. Example: netstat -ano | findstr :80 shows what's using port 80."
  },
  {
    id: 5,
    question: "A user reports intermittent network connectivity. A technician runs 'ping 192.168.1.1 -t' (continuous ping to the gateway) and notices some replies say 'Request timed out' while others succeed. What does this indicate?",
    options: [
      "Everything is working perfectly",
      "Intermittent connectivity issue - packet loss between the computer and gateway, possibly due to cable problems, switch issues, or interference",
      "The gateway IP is wrong",
      "DNS is failing"
    ],
    correct: 1,
    explanation: "Intermittent ping responses indicate packet loss. The '-t' parameter makes ping continuous until stopped (Ctrl+C to stop and see statistics). Packet loss to the gateway (local network) suggests: (1) Bad/loose network cable, (2) Failing network adapter, (3) Switch port issues, (4) Electromagnetic interference (if wireless), (5) Duplex mismatch. Troubleshooting: (1) Try different cable, (2) Check cable terminations, (3) Test different switch port, (4) Check for CRC errors (network adapter properties), (5) Verify duplex settings match. Consistent packet loss patterns (e.g., every 10th packet) may indicate specific issues. Zero packet loss is expected on local networks."
  },
  {
    id: 6,
    question: "A technician needs to release and renew the DHCP lease on a Windows computer. What commands should they run?",
    options: [
      "ping /release and ping /renew",
      "ipconfig /release followed by ipconfig /renew",
      "netstat /release and netstat /renew",
      "tracert /release and tracert /renew"
    ],
    correct: 1,
    explanation: "ipconfig /release releases the current DHCP lease (computer loses its IP address). ipconfig /renew requests a new lease from the DHCP server. Run these commands when: (1) Computer has APIPA address (169.254.x.x), (2) Cannot access network after IP changes, (3) Troubleshooting connectivity issues, (4) After network configuration changes. The computer will briefly lose connectivity between release and renew. For all adapters at once, use ipconfig /release and ipconfig /renew. For specific adapter: ipconfig /release 'Ethernet 2' and ipconfig /renew 'Ethernet 2'. Also useful: ipconfig /flushdns (clears DNS cache)."
  },
  {
    id: 7,
    question: "A user cannot access a specific website. The technician wants to verify if DNS is resolving the domain name correctly. What command-line tool should they use?",
    options: [
      "ping",
      "nslookup or dig",
      "ipconfig",
      "netstat"
    ],
    correct: 1,
    explanation: "nslookup (Windows/Mac/Linux) or dig (Mac/Linux, more detailed) query DNS servers to resolve domain names. Usage: 'nslookup google.com' shows the DNS server used and the IP address(es) returned. Query specific DNS server: 'nslookup google.com 8.8.8.8'. Query specific record types: 'nslookup -type=MX google.com' (mail servers). dig provides more detailed output: 'dig google.com'. These tools help diagnose: (1) DNS server issues, (2) Incorrect DNS records, (3) DNS propagation delays, (4) DNS hijacking. If nslookup fails but ping to IP works, DNS is the problem. Check configured DNS servers with ipconfig /all."
  },
  {
    id: 8,
    question: "A technician runs 'ipconfig' and sees Default Gateway listed as 0.0.0.0. What does this indicate?",
    options: [
      "The computer has the fastest gateway available",
      "No default gateway is configured - the computer cannot access networks outside its local subnet or reach the internet",
      "This is the correct gateway for all networks",
      "The gateway is working perfectly"
    ],
    correct: 1,
    explanation: "0.0.0.0 means no gateway is configured. The computer can communicate with devices on its local subnet but cannot reach other networks or the internet (no router to forward traffic). Causes: (1) Static IP misconfiguration (forgot to set gateway), (2) DHCP not providing gateway information, (3) Network adapter driver issues. Troubleshooting: (1) If static IP: manually configure correct gateway (usually .1 or .254 of the subnet), (2) If DHCP: verify DHCP server is properly configured to provide gateway, try ipconfig /release and /renew, (3) Check physical connectivity to router. The gateway should match your network's router IP address."
  },
  {
    id: 9,
    question: "A technician wants to view detailed IP configuration including MAC address, DHCP server, and DNS servers. What command provides this information?",
    options: [
      "ipconfig",
      "ipconfig /all",
      "ping /details",
      "netstat /verbose"
    ],
    correct: 1,
    explanation: "ipconfig /all displays complete network adapter information: IP address, subnet mask, default gateway, DHCP enabled/disabled, DHCP server address, DNS servers, MAC address (Physical Address), lease obtained/expires times, and more. Plain 'ipconfig' shows only basic info (IP, subnet, gateway). Use ipconfig /all for thorough troubleshooting to verify: (1) Correct IP configuration, (2) DHCP vs static IP, (3) Which DNS servers are configured, (4) DHCP lease status, (5) Adapter-specific settings. On Mac/Linux, use 'ifconfig' or 'ip addr show' for similar information. Document output for support calls or network documentation."
  },
  {
    id: 10,
    question: "A user can access websites by IP address (like 142.250.80.46) but not by domain name (like google.com). What command should the technician run first to resolve this issue?",
    options: [
      "ipconfig /renew",
      "ipconfig /flushdns to clear the DNS cache",
      "netstat /reset",
      "tracert /fix"
    ],
    correct: 1,
    explanation: "ipconfig /flushdns clears the local DNS resolver cache. Corrupted or outdated DNS cache entries can cause domain name resolution failures even when DNS servers are working correctly. The cache stores recent DNS lookups for faster access. After flushing: (1) Try accessing the website again, (2) If still failing, verify DNS servers with ipconfig /all, (3) Test DNS with nslookup google.com, (4) Try manually setting DNS to 8.8.8.8 and 8.8.4.4, (5) Check if DNS is blocked by firewall. Additional DNS commands: ipconfig /displaydns (view cache contents), ipconfig /registerdns (re-registers DNS records). Flush DNS after changing DNS servers or troubleshooting website access issues."
  },
  {
    id: 11,
    question: "A network cable tester shows 'Open on wire 3' when testing an Ethernet cable. What does this indicate?",
    options: [
      "The cable is perfect",
      "Wire 3 is broken or not properly terminated at one or both ends",
      "The cable is too long",
      "The tester is broken"
    ],
    correct: 1,
    explanation: "An 'open' result means the wire has no continuity - it's broken somewhere along the cable or not properly seated in the connector. For Gigabit Ethernet (1000BASE-T), all 8 wires must work. For 100BASE-TX, only wires 1, 2, 3, and 6 are critical. A cable with open wires may: (1) Not work at all, (2) Work at reduced speed (100 Mbps instead of 1000 Mbps), (3) Work intermittently. Cable tester results: OK/Pass (all wires have continuity), Open (broken wire), Short (wires touching), Miswired (wrong pin mapping), and Split Pair (wires from different pairs crossed). Solutions: re-terminate the cable, replace bad connector, or replace cable entirely."
  },
  {
    id: 12,
    question: "A technician needs to identify which cable in a bundle of 20 cables connects to a specific wall jack. What tool is designed for this task?",
    options: [
      "Multimeter",
      "Cable tester",
      "Tone generator and probe (toner)",
      "Wire stripper"
    ],
    correct: 2,
    explanation: "A tone generator (toner) and probe is specifically designed for cable tracing. Connect the tone generator to one end of the cable (at the wall jack). Use the probe (inductive amplifier) to trace the cable - it emits an audible tone when near the cable carrying the signal. This works through walls, in cable bundles, and in conduit. Essential for: (1) Identifying cables in patch panels, (2) Tracing cables through walls/ceilings, (3) Finding cable runs in bundles, (4) Locating cable breaks. Cable testers verify connectivity but don't identify specific cables. Multimeters test electrical properties but aren't designed for cable tracing. Professional cable installers rely heavily on tone generators."
  },
  {
    id: 13,
    question: "A technician tests a cable and the cable tester shows wires are connected in the order 1-2-3-6-4-5-7-8 instead of 1-2-3-4-5-6-7-8. What is this problem called?",
    options: [
      "The cable is perfectly fine",
      "Split pair - wires from different pairs are incorrectly matched, causing crosstalk and performance issues",
      "Short circuit",
      "Open circuit"
    ],
    correct: 1,
    explanation: "A split pair error occurs when wires from different twisted pairs are terminated on the same pair positions (e.g., wire from pair 1 with wire from pair 2). The cable may show continuity (all wires connected) but will have severe crosstalk and performance problems because the twist pattern is broken. Standard order: Pin 1-2 (orange pair), 3-6 (green pair), 4-5 (blue pair), 7-8 (brown pair). Split pairs cause: failed certification tests, poor Gigabit performance, and increased interference susceptibility. Prevention: carefully maintain pair integrity during termination, use proper color order (T568A or T568B), and test all cables after termination. A standard continuity tester may not detect split pairs - need a cable certifier."
  },
  {
    id: 14,
    question: "A wireless network is experiencing poor performance. A technician uses a Wi-Fi analyzer app. What information can this tool provide?",
    options: [
      "Only the network's password",
      "Nearby networks, their signal strengths, channels used, security types, and interference levels - helping optimize channel selection",
      "Internet speed test results only",
      "Computer's IP address only"
    ],
    correct: 1,
    explanation: "Wi-Fi analyzers (apps like WiFi Analyzer, NetSpot, inSSIDer) show: (1) All nearby networks (SSIDs), (2) Signal strength (RSSI in dBm), (3) Channels each network uses, (4) Channel overlap and congestion, (5) Security types (WPA2, WPA3, etc.), (6) Frequency bands (2.4 GHz vs 5 GHz). Use to: (1) Find least congested channel for your network, (2) Identify sources of interference, (3) Determine optimal access point placement, (4) Troubleshoot weak signal areas, (5) Discover rogue access points. Recommended channels: 2.4 GHz use 1, 6, or 11 (non-overlapping); 5 GHz has many more options. Essential tool for wireless troubleshooting and optimization."
  },
  {
    id: 15,
    question: "A technician needs to test if a network port on a switch is functioning. They don't have a computer available. What tool can they use?",
    options: [
      "Tone generator only",
      "Cable tester only",
      "Loopback plug/adapter - sends signals that loop back for testing",
      "Wire stripper"
    ],
    correct: 2,
    explanation: "A loopback plug (also called loopback adapter) connects specific pins together so transmitted signals are immediately received back. For Ethernet: connects TX pins to RX pins (1→3, 2→6 for standard loopback). When plugged into a port, network adapter diagnostics can send test patterns and verify they're received correctly. Tests: (1) Network port functionality, (2) Network adapter operation, (3) Cable integrity (with inline loopback), (4) Serial/parallel ports (different loopback configurations). Physical loopbacks are external plugs. Virtual/software loopbacks test internal adapter functions. Essential for isolating hardware problems - if loopback fails, the port/adapter is bad; if loopback passes but network doesn't work, the problem is external."
  }
];