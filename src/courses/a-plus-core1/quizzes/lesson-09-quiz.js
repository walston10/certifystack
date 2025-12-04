export const lesson9Quiz = [
  {
    id: 1,
    question: "A user reports their laptop can connect to their home Wi-Fi but their neighbor's Wi-Fi network (which they have permission to use) doesn't appear in the available networks list. Both networks use 2.4 GHz. What is the most likely cause?",
    options: [
      "The laptop's Wi-Fi card is broken",
      "The neighbor's router has SSID broadcast disabled (hidden network)",
      "2.4 GHz networks can't be detected by laptops",
      "The laptop is in Airplane Mode"
    ],
    correct: 1,
    explanation: "When SSID broadcast is disabled, the network doesn't appear in the list of available networks - it's 'hidden'. Users must manually add the network by entering the exact SSID name, security type, and password. While this provides minor security through obscurity, it's not true security - the SSID is still transmitted in probe requests and can be discovered with network monitoring tools. If the laptop was in Airplane Mode or had broken Wi-Fi, it wouldn't detect the home network either."
  },
  {
    id: 2,
    question: "An office has severe Wi-Fi performance issues. A technician uses a Wi-Fi analyzer and discovers three nearby networks all using channel 6 on the 2.4 GHz band. What should they do to improve performance?",
    options: [
      "Switch to non-overlapping channel 1 or 11 on 2.4 GHz, or switch to 5 GHz if devices support it",
      "Use channel 7 instead",
      "Turn off Wi-Fi completely",
      "All channels are the same - nothing can be done"
    ],
    correct: 0,
    explanation: "The 2.4 GHz band has only three non-overlapping channels: 1, 6, and 11. Using any other channel (2-5, 7-10, 12-13) causes interference with adjacent channels. If channel 6 is crowded, switch to channel 1 or 11. Better solution: use the 5 GHz band which has many more non-overlapping channels and less interference (though shorter range). Wi-Fi analyzers show channel utilization - choose the least congested non-overlapping channel. Channel overlap is a major cause of Wi-Fi performance problems."
  },
  {
    id: 3,
    question: "A company is upgrading their wireless infrastructure and wants the fastest speeds for their new Wi-Fi 6 laptops. What 802.11 standard should their new access points support?",
    options: [
      "802.11n (Wi-Fi 4)",
      "802.11ac (Wi-Fi 5)",
      "802.11ax (Wi-Fi 6/6E)",
      "802.11b"
    ],
    correct: 2,
    explanation: "802.11ax (branded as Wi-Fi 6 and Wi-Fi 6E) is the latest standard offering the highest speeds, better efficiency in crowded environments, and improved battery life for client devices. Wi-Fi 6 operates on 2.4 GHz and 5 GHz, while Wi-Fi 6E adds the new 6 GHz band with more channels and less interference. Wi-Fi 6 supports multi-gigabit speeds, OFDMA for better multi-device performance, and improved security with WPA3. Even though it's backward compatible with older devices, Wi-Fi 6 clients get the best performance with Wi-Fi 6 access points."
  },
  {
    id: 4,
    question: "A home has a large two-story house where the Wi-Fi signal from the main router doesn't reach the upstairs bedrooms. What's the best solution to extend coverage?",
    options: [
      "Buy a more expensive router - that always fixes everything",
      "Add a wireless access point or mesh Wi-Fi system node in the weak coverage area",
      "Move everyone downstairs",
      "Wi-Fi can't work in two-story houses"
    ],
    correct: 1,
    explanation: "Add additional access points connected via Ethernet, or use a mesh Wi-Fi system where nodes communicate wirelessly to extend coverage. Mesh systems (like Google Nest WiFi, Eero, Orvis) use multiple nodes that automatically hand off clients between nodes for seamless coverage. Traditional approach: run Ethernet upstairs and install a second access point with the same SSID. Wi-Fi extenders/repeaters work but reduce speeds by 50% since they must receive and retransmit. Proper solution depends on whether you can run Ethernet cables."
  },
  {
    id: 5,
    question: "A laptop connects to Wi-Fi but shows 'Limited connectivity' or 'No internet access'. Other devices work fine on the same network. What should be checked first?",
    options: [
      "The router's internet connection",
      "Whether the laptop received a valid IP address from DHCP (not 169.254.x.x)",
      "The laptop's hard drive",
      "Whether the monitor is plugged in"
    ],
    correct: 1,
    explanation: "If the laptop connects to Wi-Fi but can't access the internet while other devices work, check the IP configuration. Run ipconfig (Windows) or ifconfig (Mac/Linux) to verify the laptop has a valid IP address from the network's DHCP server. An APIPA address (169.254.x.x) indicates DHCP failure. Also verify the default gateway and DNS servers are set correctly. Try releasing and renewing the DHCP lease, forgetting and reconnecting to the network, or restarting the laptop. Since other devices work, the router and internet connection are fine."
  },
  {
    id: 6,
    question: "What is the primary advantage of the 5 GHz Wi-Fi band compared to 2.4 GHz?",
    options: [
      "5 GHz has longer range and better wall penetration",
      "5 GHz has more available channels and less interference, providing faster speeds",
      "5 GHz is cheaper to implement",
      "5 GHz doesn't require passwords"
    ],
    correct: 1,
    explanation: "The 5 GHz band offers more non-overlapping channels (up to 24 versus only 3 in 2.4 GHz) and suffers less interference from Bluetooth, microwaves, cordless phones, and neighboring networks. This enables faster speeds and more reliable connections. However, 5 GHz has shorter range and poorer wall penetration than 2.4 GHz due to physics - higher frequencies are absorbed more by obstacles. Dual-band routers use both: 2.4 GHz for range/compatibility and 5 GHz for speed. Modern devices support both bands."
  },
  {
    id: 7,
    question: "A conference room needs Wi-Fi for up to 50 attendees simultaneously streaming video. What Wi-Fi feature is most important for handling many clients efficiently?",
    options: [
      "WEP encryption",
      "MU-MIMO (Multi-User MIMO) and Wi-Fi 6 with OFDMA for efficient multi-device handling",
      "Hiding the SSID",
      "Using only 2.4 GHz"
    ],
    correct: 1,
    explanation: "MU-MIMO (Multi-User Multiple Input Multiple Output) allows access points to communicate with multiple devices simultaneously rather than sequentially. Wi-Fi 6 (802.11ax) adds OFDMA (Orthogonal Frequency Division Multiple Access) which divides channels into smaller sub-channels, allowing efficient data transmission to multiple devices at once. This dramatically improves performance in high-density environments. Wi-Fi 5 (802.11ac) introduced MU-MIMO, but Wi-Fi 6 enhances it and adds OFDMA. For conference rooms, large offices, and stadiums, these features are essential."
  },
  {
    id: 8,
    question: "A wireless network is set up with the SSID 'CompanyWiFi'. What is an SSID?",
    options: [
      "The Wi-Fi password",
      "Service Set Identifier - the network name that identifies the wireless network",
      "The router's serial number",
      "A type of encryption"
    ],
    correct: 1,
    explanation: "SSID (Service Set Identifier) is the network name that identifies a wireless network. It can be up to 32 characters and appears in the list of available networks. Devices use the SSID to distinguish between different wireless networks in range. The SSID is separate from the network password/passphrase. Multiple access points can share the same SSID (like in enterprise networks or mesh systems) to create a single logical network. Hiding the SSID (disabling broadcast) provides minimal security and makes the network harder to use legitimately."
  },
  {
    id: 9,
    question: "A technician is installing a wireless access point in a large warehouse with metal shelving and equipment. They perform a site survey. What is the purpose of a wireless site survey?",
    options: [
      "To count how many computers are in the building",
      "To measure signal strength, identify interference sources, and determine optimal access point placement for coverage",
      "To check internet speed",
      "To install antivirus software"
    ],
    correct: 1,
    explanation: "A wireless site survey maps Wi-Fi coverage, identifies dead zones, detects interference sources (other networks, microwave ovens, metal obstacles), measures signal strength at various locations, and determines optimal AP placement and power levels. Surveyors use specialized software and walk the area with Wi-Fi analyzers. Results show heat maps of signal coverage. This prevents over/under-deployment of APs and ensures adequate coverage without excessive overlap. Essential for professional installations in offices, warehouses, hospitals, and large buildings. Surveys should be done before and after installation."
  },
  {
    id: 10,
    question: "What is the maximum theoretical speed of 802.11ac (Wi-Fi 5) in ideal conditions?",
    options: [
      "11 Mbps",
      "54 Mbps",
      "600 Mbps",
      "Multi-gigabit speeds (up to 6.9 Gbps with 8 spatial streams, though 1-3 Gbps is typical)"
    ],
    correct: 3,
    explanation: "802.11ac (Wi-Fi 5) can theoretically reach 6.9 Gbps with 8 spatial streams and 160 MHz channels, though real-world devices typically support 1-3 Gbps. It uses 5 GHz band exclusively, wider channels (80/160 MHz), and multi-user MIMO. 802.11n maxes at 600 Mbps, 802.11g at 54 Mbps, and 802.11b at 11 Mbps. Real-world speeds are always lower than theoretical due to overhead, distance, interference, and client device limitations. Wi-Fi 6 (802.11ax) exceeds these speeds with better efficiency."
  },
  {
    id: 11,
    question: "A small office has a wireless router in the back corner of the building. Employees at the opposite corner experience weak signals and slow speeds. What inexpensive solution could improve coverage?",
    options: [
      "Delete all files from computers",
      "Relocate the router to a more central location if possible, or add a wireless access point/extender",
      "Buy new computers for those employees",
      "Turn off Wi-Fi completely"
    ],
    correct: 1,
    explanation: "Wi-Fi signal strength decreases with distance and obstacles (walls, furniture, metal). Ideally, place the router in a central, elevated location for even coverage. If moving the router isn't possible, add a wireless access point (connected via Ethernet for best performance) or a Wi-Fi extender/repeater (easier but reduces speed). Mesh Wi-Fi systems are user-friendly alternatives. Avoid placing routers in corners, closets, or behind metal filing cabinets. Simple repositioning often solves coverage problems without additional hardware."
  },
  {
    id: 12,
    question: "A business wants to provide Wi-Fi to customers in their café. They want guest traffic completely separated from their business network. What feature do they need?",
    options: [
      "Faster internet service",
      "Guest network or VLAN isolation that separates guest traffic from the business network",
      "More expensive computers",
      "Wired connections only"
    ],
    correct: 1,
    explanation: "A guest network creates a separate SSID with isolated network access - guests get internet but can't access business devices, servers, or printers. Most modern routers support guest networks. Enterprise solutions use VLANs to segment traffic at the switch level. Configure guest networks with separate subnets, firewall rules blocking local network access, and optionally bandwidth limits. This is critical for security - you don't want customers accessing your POS system, employee computers, or sensitive business data. Guest networks should also have different (or no) passwords than business Wi-Fi."
  },
  {
    id: 13,
    question: "A wireless network shows available but users can't connect, getting 'Cannot connect to this network' errors. The password is correct. What might be the issue?",
    options: [
      "Users are typing the password correctly - there's no problem",
      "The access point may have reached its maximum client limit, or MAC filtering is enabled blocking those devices",
      "Wi-Fi stopped working globally",
      "The computers need new keyboards"
    ],
    correct: 1,
    explanation: "Access points have maximum client limits (varies by model, typically 20-50 for consumer APs, more for enterprise). When the limit is reached, new clients can't connect. Also, MAC address filtering (if enabled) blocks devices not on the whitelist. Other causes: wrong security type selected (WPA2 vs WPA3), outdated router firmware, IP address exhaustion (DHCP pool full), or corrupted network profile on client. Try forgetting the network and reconnecting, checking router client list, disabling MAC filtering temporarily, or expanding the DHCP scope."
  },
  {
    id: 14,
    question: "What is beamforming in modern Wi-Fi technology?",
    options: [
      "A type of wireless encryption",
      "Technology that focuses the Wi-Fi signal toward specific client devices rather than broadcasting equally in all directions",
      "A way to hide the network name",
      "A type of cable"
    ],
    correct: 1,
    explanation: "Beamforming (introduced in 802.11ac, improved in 802.11ax) uses multiple antennas to focus Wi-Fi signals toward specific client devices rather than broadcasting omnidirectionally. The access point adjusts signal phase and amplitude per antenna to create constructive interference in the client's direction. This improves signal strength, speed, and range for individual devices. It's especially beneficial for devices at the edge of coverage. Beamforming requires both the AP and client to support it. It's part of why modern Wi-Fi performs better than older standards at the same distances."
  },
  {
    id: 15,
    question: "A company is deploying 50 wireless access points across a large building. They want all APs to appear as one seamless network and to be managed centrally. What solution do they need?",
    options: [
      "50 separate consumer wireless routers",
      "A wireless LAN controller (WLC) with enterprise access points that share SSIDs and support roaming",
      "No wireless access points - only wired connections",
      "Bluetooth devices instead"
    ],
    correct: 1,
    explanation: "Enterprise deployments use a wireless LAN controller (WLC) to centrally manage multiple access points. All APs share the same SSIDs and security settings, and clients seamlessly roam between APs as they move through the building. The controller handles authentication, configuration, firmware updates, and monitoring from a single interface. APs use protocols like CAPWAP to communicate with the controller. This provides consistent experience, easier management, and features like load balancing and automatic channel/power optimization. Consumer routers don't support this coordination - enterprise APs from vendors like Cisco, Aruba, or Ubiquiti are required."
  }
];