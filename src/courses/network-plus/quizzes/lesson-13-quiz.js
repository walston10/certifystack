// Quiz for Lesson 13: Wireless Networking (Wi-Fi 6/6E, 802.11)

export const lesson13Quiz = [
  {
    id: 1,
    question: "A small office has three wireless access points operating on channels 1, 6, and 11 in the 2.4 GHz band. Users near the AP on channel 6 report slow performance and connection drops. A Wi-Fi analyzer shows several neighboring networks also using channel 6 with strong signals. What is the best solution?",
    options: [
      "Change the office AP to channel 3 to avoid the congested channel 6",
      "Increase the transmit power on the channel 6 AP to overpower neighboring networks",
      "Keep the current configuration since 1, 6, and 11 are the only non-overlapping channels",
      "Disable the 2.4 GHz band and use only 5 GHz to avoid interference"
    ],
    correct: 3,
    explanation: "Channels 1, 6, and 11 are the only non-overlapping channels in 2.4 GHz. If channel 6 is heavily congested with neighboring networks, you can't avoid overlap by changing to another 2.4 GHz channel (channel 3 overlaps with 1 and 6). The best solution is migrating to 5 GHz, which has many more non-overlapping channels (up to 25) and less congestion. Increasing power creates more interference for everyone."
  },
  {
    id: 2,
    question: "An enterprise is deploying Wi-Fi 6 (802.11ax) to support a high-density environment with hundreds of simultaneous users. Which Wi-Fi 6 feature specifically improves efficiency when multiple clients transmit to the AP at the same time?",
    options: [
      "OFDMA (Orthogonal Frequency Division Multiple Access) allows multiple users to transmit simultaneously on different subcarriers",
      "MU-MIMO allows the AP to communicate with multiple clients using different spatial streams",
      "Beamforming directs signals toward specific clients for better signal strength",
      "Channel bonding combines multiple channels for higher throughput"
    ],
    correct: 0,
    explanation: "OFDMA is the key Wi-Fi 6 feature for high-density environments. It divides channels into smaller resource units (RUs), allowing multiple clients to transmit simultaneously within the same channel on different subcarriers. MU-MIMO helps but primarily for downlink. OFDMA benefits both uplink and downlink, reducing latency and improving efficiency when many devices are competing for airtime."
  },
  {
    id: 3,
    question: "A warehouse deployment requires wireless coverage across 200,000 square feet with concrete walls and metal shelving. The wireless engineer conducts a site survey and creates a heat map showing coverage gaps. What is the primary purpose of this heat map?",
    options: [
      "To identify the channels being used by neighboring networks",
      "To visualize signal strength throughout the facility and identify optimal AP placement",
      "To measure the bandwidth consumption of wireless clients",
      "To detect rogue access points on the network"
    ],
    correct: 1,
    explanation: "Heat maps display signal strength (RSSI) across a physical space using color gradients. They help identify: dead zones (poor coverage), areas of excessive overlap (causing interference), and optimal AP placement for seamless roaming. In RF-hostile environments like warehouses with metal and concrete, heat maps are essential for proper AP positioning and antenna selection."
  },
  {
    id: 4,
    question: "A company's wireless network uses 802.11ac (Wi-Fi 5) APs operating in the 5 GHz band with 80 MHz channel width. Users complain about inconsistent performance. Analysis shows the environment only has 4 non-overlapping 80 MHz channels available, but 6 APs are deployed. What should be done?",
    options: [
      "Upgrade all APs to Wi-Fi 6 for better performance",
      "Reduce channel width to 40 MHz or 20 MHz to create more non-overlapping channels",
      "Increase transmit power on all APs to improve coverage",
      "Switch to the 2.4 GHz band which has more available channels"
    ],
    correct: 1,
    explanation: "Channel bonding (combining adjacent channels for higher throughput) reduces the number of available non-overlapping channels. In 5 GHz: 20 MHz gives ~25 channels, 40 MHz gives ~12 channels, 80 MHz gives ~6 channels, 160 MHz gives ~2 channels. With 6 APs but only 4 non-overlapping 80 MHz channels, you have co-channel interference. Reducing to 40 MHz or 20 MHz creates more channels at the cost of per-client throughput."
  },
  {
    id: 5,
    question: "An 802.11n wireless network is configured for both 2.4 GHz and 5 GHz bands (dual-band). A user's laptop supports both bands but consistently connects to 2.4 GHz despite being closer to a 5 GHz AP with stronger signal. What is the most likely cause?",
    options: [
      "The laptop's wireless driver is outdated and doesn't support 5 GHz",
      "The 2.4 GHz network has a stronger advertised signal in the beacon frames, so clients prefer it",
      "The 5 GHz network is using a hidden SSID",
      "Band steering is disabled, allowing clients to choose based on their preference rather than optimal band"
    ],
    correct: 3,
    explanation: "Band steering is a feature that encourages or forces dual-band clients to connect to 5 GHz by making 2.4 GHz appear less attractive (delaying probe responses, lowering advertised rates, etc.). Without band steering, clients may prefer 2.4 GHz due to driver behavior or saved network preferences. Modern wireless controllers typically enable band steering to optimize the less-congested 5 GHz band utilization."
  },
  {
    id: 6,
    question: "A university auditorium needs wireless coverage for 500 students during lectures. The wireless engineer deploys multiple 802.11ax APs with MU-MIMO 8x8:8 configuration. What does the '8x8:8' notation specifically indicate?",
    options: [
      "8 GHz frequency band, 8 channels, 8 simultaneous users",
      "8 transmit antennas, 8 receive antennas, 8 spatial streams maximum",
      "8 SSIDs, 8 VLANs, 8 authentication methods",
      "80 MHz channel width, 8 APs, 8 channels"
    ],
    correct: 1,
    explanation: "MU-MIMO notation format is TxR:S where T=transmit antennas, R=receive antennas, S=spatial streams. 8x8:8 means 8 TX antennas, 8 RX antennas, supporting up to 8 spatial streams. With MU-MIMO, these streams can be divided among multiple clients simultaneously (e.g., 4 clients with 2 streams each). This is crucial for high-density environments like auditoriums."
  },
  {
    id: 7,
    question: "A retail store's wireless network experiences intermittent connectivity issues every day between 12:00-12:15 PM. A spectrum analyzer reveals a spike in non-Wi-Fi interference at 2.4 GHz during this time. What is the most likely source?",
    options: [
      "Bluetooth devices from customer smartphones",
      "Microwave ovens in the break room being used during lunch",
      "Neighboring Wi-Fi networks increasing traffic during lunch",
      "Cell phone towers switching to backup frequencies"
    ],
    correct: 1,
    explanation: "Microwave ovens operate at 2.4 GHz (same as Wi-Fi) and cause significant non-Wi-Fi interference. They're broadband noise sources that affect multiple channels. The timing (lunch hour) and duration (15 minutes) strongly suggest microwave usage. Bluetooth uses frequency hopping and appears differently on spectrum analyzers. Neighboring Wi-Fi would show as 802.11 traffic, not non-Wi-Fi interference."
  },
  {
    id: 8,
    question: "An office wants to deploy Wi-Fi 6E to take advantage of the 6 GHz band. Current infrastructure includes 802.11ac APs and client devices ranging from 802.11n to 802.11ac. What must be considered before deployment?",
    options: [
      "All 802.11ac and 802.11n clients will automatically work on 6 GHz after AP upgrade",
      "Only Wi-Fi 6E capable clients can use 6 GHz; older clients must remain on 2.4/5 GHz",
      "Wi-Fi 6E provides backward compatibility by translating 6 GHz to 5 GHz for older clients",
      "802.11ac clients can access 6 GHz with a firmware update"
    ],
    correct: 1,
    explanation: "The 6 GHz band (Wi-Fi 6E) requires new client hardware—older devices physically cannot access 6 GHz frequencies. Unlike 802.11ac being backward compatible on the same bands (2.4/5 GHz), 6 GHz is a completely new spectrum requiring new radios. Deployment means running a tri-band network: 2.4 GHz for legacy/IoT, 5 GHz for 802.11ac/ax, and 6 GHz exclusively for Wi-Fi 6E clients."
  },
  {
    id: 9,
    question: "A wireless controller manages 50 APs across a campus. The network administrator wants clients to roam seamlessly between APs without reauthentication. Which technology enables fast roaming by pre-authenticating clients with nearby APs?",
    options: [
      "SSID broadcasting ensures clients can see all available APs",
      "802.11r (Fast Transition) pre-establishes security associations with neighboring APs",
      "MIMO increases data rates during roaming transitions",
      "WPA3 automatically handles roaming without additional configuration"
    ],
    correct: 1,
    explanation: "802.11r (Fast Transition/FT) allows clients to pre-authenticate with nearby APs while still connected to the current AP. When roaming occurs, the handoff takes milliseconds instead of seconds because security keys are already negotiated. This is critical for voice/video applications. The controller coordinates this by distributing key material. Without 802.11r, each roam requires full 802.1X authentication, causing noticeable interruptions."
  },
  {
    id: 10,
    question: "A hospital is experiencing wireless performance issues in specific areas. Investigation reveals that portable medical equipment operating on 2.4 GHz is interfering with Wi-Fi. The wireless engineer decides to implement 5 GHz-only operation in these areas. What is the main tradeoff of this decision?",
    options: [
      "5 GHz signals have shorter range and penetrate walls/obstacles less effectively than 2.4 GHz",
      "5 GHz has fewer available channels than 2.4 GHz",
      "5 GHz doesn't support modern encryption standards",
      "5 GHz requires more expensive client devices"
    ],
    correct: 0,
    explanation: "Higher frequencies (5 GHz) have shorter wavelengths, which means more attenuation through walls, floors, and obstacles. 2.4 GHz propagates further and penetrates better. The tradeoff: 5 GHz has more channels and less interference, but requires more APs for equivalent coverage. In hospitals with concrete/metal construction, significantly more 5 GHz APs are needed compared to 2.4 GHz to maintain coverage."
  },
  {
    id: 11,
    question: "A conference center uses 802.11ac with beamforming enabled. During a presentation, the presenter walks around the stage with a wireless microphone system. What benefit does beamforming provide in this scenario?",
    options: [
      "Beamforming increases the number of available wireless channels",
      "Beamforming focuses the wireless signal toward the moving client device, improving signal strength and reducing interference to others",
      "Beamforming prevents unauthorized devices from connecting to the network",
      "Beamforming automatically switches between 2.4 GHz and 5 GHz bands"
    ],
    correct: 1,
    explanation: "Beamforming uses multiple antennas to focus RF energy directionally toward specific clients rather than broadcasting omnidirectionally. As the presenter moves, the AP dynamically adjusts antenna phases to maintain a focused beam. Benefits: stronger signal to intended client, reduced interference to other areas, improved SNR, and better range. This is especially valuable in high-density environments like conference centers."
  },
  {
    id: 12,
    question: "An IT manager receives complaints that the corporate wireless network SSID doesn't appear in the available networks list on some employee devices, though others see it fine. The SSID is configured to broadcast. What is the most likely cause?",
    options: [
      "The affected devices only support 2.4 GHz, but the network is 5 GHz only",
      "The SSID name contains special characters that some devices can't display",
      "The affected devices are out of range of all access points",
      "Wireless MAC filtering is blocking the affected devices"
    ],
    correct: 0,
    explanation: "The most common scenario: dual-band APs configured with different SSIDs per band, or single-band devices unable to see the network on a band they don't support. If employees with older 802.11n (2.4 GHz only) laptops can't see an SSID that's only on 5 GHz, this is the issue. Solution: ensure the SSID is broadcast on both bands, or create separate SSIDs per band. MAC filtering would allow seeing the SSID but prevent connection."
  },
  {
    id: 13,
    question: "A wireless site survey report recommends -67 dBm as the minimum acceptable signal strength for VoIP coverage. An area measures -72 dBm. How much signal improvement is needed, and what could achieve it?",
    options: [
      "5 dBm improvement; moving the AP 5 meters closer would be sufficient",
      "5 dB improvement; this represents a ~3x increase in signal power, requiring AP repositioning or additional APs",
      "5 dBm represents a minor difference; no changes needed",
      "72-67=5, so reduce signal by 5 dB to meet requirements"
    ],
    correct: 1,
    explanation: "dBm is logarithmic: every 3 dB change represents doubling/halving of power. -72 dBm to -67 dBm is a 5 dB increase (more positive = stronger signal). This requires roughly 3x more signal power at the client location. Simple distance changes won't achieve this (inverse square law). Solutions: add an AP in that area, reposition existing AP, use higher-gain antennas, or adjust power. Note: -67 dBm is common for VoIP; -72 dBm is too weak for reliable voice."
  },
  {
    id: 14,
    question: "A company deploys a wireless mesh network to extend coverage to an outdoor parking lot without running cables to each AP. How do mesh APs differ from traditional APs in terms of backhaul connectivity?",
    options: [
      "Mesh APs must all connect to wired Ethernet for backhaul",
      "Mesh APs wirelessly relay traffic to each other, with only root APs requiring wired connections",
      "Mesh APs use cellular connections for backhaul",
      "Mesh APs create a completely separate network from the wired network"
    ],
    correct: 1,
    explanation: "Wireless mesh allows APs to relay traffic wirelessly between each other using dedicated backhaul radios. Only mesh 'root' or 'gateway' APs need wired Ethernet. Mesh APs relay through other APs to reach the root. This is ideal for areas where cabling is expensive/impossible (parking lots, historical buildings, outdoor spaces). Tradeoff: each wireless hop reduces available bandwidth. Modern systems use dedicated 5 GHz or 6 GHz radios for backhaul while serving clients on other bands."
  },
  {
    id: 15,
    question: "An 802.11ax network is configured with BSS Coloring enabled. In a dense environment with overlapping APs, what advantage does BSS Coloring provide?",
    options: [
      "It assigns different colors to SSIDs for easier identification by users",
      "It allows devices to distinguish between transmissions from their own AP versus neighboring APs, reducing unnecessary deferral and improving efficiency",
      "It increases the number of spatial streams available for MIMO",
      "It encrypts beacon frames with color-coded security levels"
    ],
    correct: 1,
    explanation: "BSS (Basic Service Set) Coloring is a Wi-Fi 6 feature that tags frames with a 'color' (0-7) identifying the BSS. Devices can detect if a transmission is from their own AP (same color) or a neighbor (different color). If from a neighbor and signal is weak enough, the device can transmit simultaneously rather than deferring, improving spatial reuse in dense deployments. This is especially valuable in MDUs (apartments) and offices with many APs."
  }
];

// Export for use in quiz component
export default lesson13Quiz;