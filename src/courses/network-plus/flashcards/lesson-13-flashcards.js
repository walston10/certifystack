// Flashcards for Lesson 13: Wireless Networking (Wi-Fi 6/6E, 802.11)

export const lesson13Flashcards = [
  {
    id: 1,
    front: "802.11a specs?",
    back: "5 GHz only, 54 Mbps max. Shorter range, not compatible with b/g. Largely obsolete."
  },
  {
    id: 2,
    front: "802.11b specs?",
    back: "2.4 GHz only, 11 Mbps max. First widely adopted (1999). Compatible with g. Obsolete but legacy devices remain."
  },
  {
    id: 3,
    front: "802.11g specs?",
    back: "2.4 GHz only, 54 Mbps max. Backward compatible with b. Popular early 2000s, replaced by n."
  },
  {
    id: 4,
    front: "802.11n (Wi-Fi 4) specs?",
    back: "Dual-band (2.4/5 GHz), up to 600 Mbps. Key: MIMO, channel bonding (40 MHz). Still common today."
  },
  {
    id: 5,
    front: "802.11ac (Wi-Fi 5) specs?",
    back: "5 GHz only, multi-gigabit speeds. Features: MU-MIMO, beamforming, 80/160 MHz channels. Current mainstream."
  },
  {
    id: 6,
    front: "802.11ax (Wi-Fi 6/6E) specs?",
    back: "2.4/5 GHz (6 adds 6 GHz), up to 9.6 Gbps. Features: OFDMA, 8-stream MU-MIMO, better density performance. Latest standard."
  },
  {
    id: 7,
    front: "Wi-Fi 6 vs Wi-Fi 6E?",
    back: "Wi-Fi 6: 2.4/5 GHz. Wi-Fi 6E: adds 6 GHz band (1200 MHz new spectrum, no legacy interference). Requires new hardware."
  },
  {
    id: 8,
    front: "Why is 2.4 GHz better range but slower?",
    back: "Lower frequency = longer wavelengths = better wall penetration = better range but slower. Higher frequency = opposite."
  },
  {
    id: 9,
    front: "2.4 GHz non-overlapping channels?",
    back: "Only 3: channels 1, 6, and 11. Use only these to avoid interference. Major 2.4 GHz limitation."
  },
  {
    id: 10,
    front: "How many 5 GHz channels?",
    back: "24+ non-overlapping channels (36, 40, 44, 48, 149, 153, 157, 161, etc.). Much less congestion than 2.4 GHz."
  },
  {
    id: 11,
    front: "What is channel bonding?",
    back: "Combines channels for more bandwidth. 20 MHz (1 channel), 40 MHz (2), 80 MHz (4), 160 MHz (8). Wider = faster but more interference."
  },
  {
    id: 12,
    front: "What is MIMO?",
    back: "Multiple antennas send/receive multiple data streams simultaneously. Example: 4x4 MIMO = 4 transmit, 4 receive. Increases throughput."
  },
  {
    id: 13,
    front: "What is MU-MIMO?",
    back: "Multi-User MIMO allows AP to communicate with multiple clients simultaneously (not one at a time). 802.11ac: 4 clients, ax: 8 clients."
  },
  {
    id: 14,
    front: "What is beamforming?",
    back: "Focuses wireless signal toward specific clients instead of broadcasting equally. Stronger signal, longer range, less interference."
  },
  {
    id: 15,
    front: "What is an SSID?",
    back: "Network name. Broadcasting: visible in network list. Hidden: not broadcast (users type manually). Hiding provides minimal security."
  },
  {
    id: 16,
    front: "Infrastructure vs ad-hoc mode?",
    back: "Infrastructure: devices connect through AP (most common). Ad-hoc: peer-to-peer direct connection without AP (limited use)."
  },
  {
    id: 17,
    front: "What is a wireless site survey?",
    back: "Maps RF coverage, identifies dead zones, interference, optimal AP placement. Critical for enterprise deployments."
  },
  {
    id: 18,
    front: "What is a heat map?",
    back: "Color-coded visualization of signal strength. Red/warm = strong, blue/cold = weak. Used to optimize AP placement."
  },
  {
    id: 19,
    front: "What is roaming?",
    back: "Clients move between APs while maintaining connectivity. Requires same SSID, overlapping coverage, fast authentication. Critical for VoIP."
  },
  {
    id: 20,
    front: "What is a wireless controller?",
    back: "Centralized management for multiple APs. Configure all from one interface, consistent policies, automatic optimization. Enterprise feature."
  },
  {
    id: 21,
    front: "What is a wireless mesh network?",
    back: "APs connect wirelessly to each other. Easy coverage extension without cables, self-healing. Half bandwidth used for backhaul."
  },
  {
    id: 22,
    front: "2.4 GHz interference sources?",
    back: "Microwaves, Bluetooth, cordless phones, baby monitors, wireless cameras, neighboring WiFi, LED lights. Use 5 GHz when possible."
  },
  {
    id: 23,
    front: "What is OFDMA in Wi-Fi 6?",
    back: "Divides channels into sub-channels allowing multiple clients to transmit simultaneously. Huge improvement for IoT/small packets."
  },
  {
    id: 24,
    front: "BSS vs ESS vs IBSS?",
    back: "BSS: single AP + clients. ESS: multiple APs with same SSID (roaming network). IBSS: ad-hoc, no AP."
  },
  {
    id: 25,
    front: "Slow WiFi in conference room—what to check?",
    back: "1) Channel overlap, 2) Client count per AP, 3) Interference, 4) Signal strength, 5) AP capacity, 6) Frequency band. Use WiFi analyzer."
  },
  {
    id: 26,
    front: "What is the hidden node problem?",
    back: "Two clients hear AP but not each other, causing collisions. Solution: RTS/CTS reserves channel before transmission."
  },
  {
    id: 27,
    front: "Channel width trade-offs?",
    back: "20 MHz: slower, stable. 40 MHz: 2x faster, more interference. 80 MHz: 4x faster, prone to interference. 160 MHz: fastest but difficult."
  },
  {
    id: 28,
    front: "What are DFS channels?",
    back: "5 GHz channels (52-144) shared with radar. Must scan before use, vacate if radar detected. Less congested but potential disruption."
  },
  {
    id: 29,
    front: "Why disable lower data rates?",
    back: "Forces weak clients to disconnect and find closer AP. Improves roaming, overall performance. Careful—can create coverage gaps."
  },
  {
    id: 30,
    front: "Match: Wi-Fi 4, 5, 6, 6E to frequency and feature",
    back: "Wi-Fi 4 (11n): 2.4/5 GHz, MIMO. Wi-Fi 5 (11ac): 5 GHz, MU-MIMO. Wi-Fi 6 (11ax): 2.4/5, OFDMA. Wi-Fi 6E: adds 6 GHz."
  }
];