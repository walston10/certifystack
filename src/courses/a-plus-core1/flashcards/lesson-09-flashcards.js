export const lesson9Flashcards = [
  {
    id: 1,
    front: "What are the specs for 802.11a?",
    back: "5 GHz frequency only - 54 Mbps max speed - Shorter range than 2.4 GHz - Less interference - Incompatible with 802.11b/g. Released 1999, largely obsolete."
  },
  {
    id: 2,
    front: "What are the specs for 802.11b?",
    back: "2.4 GHz frequency - 11 Mbps max speed - Longer range - More interference - Compatible with 802.11g. Released 1999, obsolete but established Wi-Fi standard."
  },
  {
    id: 3,
    front: "What are the specs for 802.11g?",
    back: "2.4 GHz frequency - 54 Mbps max speed - Backward compatible with 802.11b - Longer range than 5 GHz - More interference. Released 2003, widely used for many years."
  },
  {
    id: 4,
    front: "What are the specs for 802.11n (Wi-Fi 4)?",
    back: "Dual-band (2.4 GHz and 5 GHz) - Up to 600 Mbps with MIMO - Channel bonding (40 MHz channels) - Backward compatible with a/b/g. Released 2009, still common."
  },
  {
    id: 5,
    front: "What are the specs for 802.11ac (Wi-Fi 5)?",
    back: "5 GHz only - Multi-gigabit speeds (up to 6.9 Gbps theoretical) - MU-MIMO - Wider channels (80/160 MHz) - Beamforming. Released 2014, current mainstream standard."
  },
  {
    id: 6,
    front: "What are the specs for 802.11ax (Wi-Fi 6/6E)?",
    back: "Wi-Fi 6: 2.4 GHz and 5 GHz. Wi-Fi 6E: Adds 6 GHz band - Up to 9.6 Gbps - OFDMA for efficiency - Better in crowded areas - Target Wake Time (battery savings). Released 2019/2020."
  },
  {
    id: 7,
    front: "What is the difference between Wi-Fi 6 and Wi-Fi 6E?",
    back: "Wi-Fi 6 (802.11ax): Uses 2.4 GHz and 5 GHz bands. Wi-Fi 6E: Adds 6 GHz band support - More channels, less congestion, faster speeds - Requires Wi-Fi 6E router and client device."
  },
  {
    id: 8,
    front: "What are the non-overlapping channels in the 2.4 GHz band?",
    back: "Channels 1, 6, and 11 (in North America). Each channel is 20 MHz wide but only 5 MHz apart, causing overlap. Using 1, 6, 11 prevents interference between access points."
  },
  {
    id: 9,
    front: "Why is the 5 GHz band better for wireless networks?",
    back: "More available channels (23+ non-overlapping in US) - Less congested/interference - Faster speeds - Shorter range - Doesn't penetrate walls as well. Better for high-density deployments."
  },
  {
    id: 10,
    front: "What is the 6 GHz band and what uses it?",
    back: "New frequency band for Wi-Fi 6E only. Provides 1200 MHz of spectrum - Up to 59 additional channels - No legacy device interference - Less crowded. Requires compatible router and devices."
  },
  {
    id: 11,
    front: "What is MIMO?",
    back: "Multiple Input Multiple Output. Uses multiple antennas on transmitter and receiver to send/receive multiple data streams simultaneously. Increases throughput without requiring more bandwidth. Introduced in 802.11n."
  },
  {
    id: 12,
    front: "What is MU-MIMO?",
    back: "Multi-User MIMO. Allows access point to communicate with multiple devices simultaneously instead of one at a time. Improves efficiency in multi-device environments. Introduced in 802.11ac (Wave 2)."
  },
  {
    id: 13,
    front: "What is channel bonding?",
    back: "Combining multiple adjacent channels to create wider channel for higher speeds. 802.11n: 20 or 40 MHz. 802.11ac: 20, 40, 80, or 160 MHz. Wider = faster but more interference potential."
  },
  {
    id: 14,
    front: "What is beamforming?",
    back: "Technology that focuses Wi-Fi signal toward specific client devices rather than broadcasting equally in all directions. Improves range, speed, and reliability. Requires support from both AP and client."
  },
  {
    id: 15,
    front: "What is OFDMA?",
    back: "Orthogonal Frequency Division Multiple Access. Wi-Fi 6 feature that divides channels into smaller sub-channels (Resource Units). Multiple devices share channel simultaneously. More efficient than taking turns, reduces latency."
  },
  {
    id: 16,
    front: "What is BSS (Basic Service Set)?",
    back: "Single access point and all connected clients. Identified by BSSID (MAC address of AP). The basic building block of Wi-Fi networks. Also called a cell."
  },
  {
    id: 17,
    front: "What is ESS (Extended Service Set)?",
    back: "Multiple access points with same SSID working together to provide seamless coverage. Clients can roam between APs. Each AP has unique BSSID but shares ESSID (network name)."
  },
  {
    id: 18,
    front: "What is an SSID?",
    back: "Service Set Identifier - the Wi-Fi network name. Up to 32 characters. Broadcast by access point so devices can find network. Can be hidden but offers minimal security. Case-sensitive."
  },
  {
    id: 19,
    front: "What Bluetooth versions should you know for A+?",
    back: "Bluetooth 4.0/4.2: Introduced BLE (Low Energy). 5.0: Doubled range and speed, mesh networking. 5.1/5.2: Direction finding, LE Audio. Each version backward compatible. Range typically ~30 feet (10m)."
  },
  {
    id: 20,
    front: "What is Bluetooth Low Energy (BLE)?",
    back: "Power-efficient version of Bluetooth for IoT devices. Uses much less power than classic Bluetooth. Ideal for: fitness trackers, sensors, beacons, smartwatches. Sacrifices bandwidth for battery life."
  },
  {
    id: 21,
    front: "What is Bluetooth mesh networking?",
    back: "Allows Bluetooth devices to form mesh network where devices relay messages. Extends range beyond single hop. Introduced in Bluetooth 5.0. Used for smart home, industrial IoT, building automation."
  },
  {
    id: 22,
    front: "What is NFC (Near Field Communication)?",
    back: "Very short range wireless (<4 inches / 10cm) - 13.56 MHz frequency - Used for: mobile payments, tap-to-pair, access badges, transit cards. Fast, secure due to proximity requirement."
  },
  {
    id: 23,
    front: "What are the three NFC modes?",
    back: "Reader/Writer: NFC device reads/writes to NFC tags. Peer-to-Peer: Two NFC devices exchange data. Card Emulation: Device acts as contactless smart card (mobile payments)."
  },
  {
    id: 24,
    front: "What is RFID (Radio Frequency Identification)?",
    back: "Uses radio waves to identify and track tags attached to objects. Passive RFID: No battery, powered by reader. Active RFID: Has battery, longer range. Used for: inventory, access control, toll collection, pet chips."
  },
  {
    id: 25,
    front: "What is the difference between NFC and RFID?",
    back: "NFC: Very short range (<4 inches), two-way communication, 13.56 MHz, peer-to-peer capable. RFID: Longer range (inches to feet), typically one-way, various frequencies, simpler tags. NFC is subset of RFID."
  },
  {
    id: 26,
    front: "What frequency does 2.4 GHz Wi-Fi actually use?",
    back: "2.400-2.4835 GHz band. Divided into 11 channels (US) or 13 channels (most of world). Channels are 20 MHz wide but only 5 MHz apart, causing overlap. ISM band (shared with Bluetooth, microwaves, cordless phones)."
  },
  {
    id: 27,
    front: "What causes interference in 2.4 GHz Wi-Fi?",
    back: "Microwave ovens - Cordless phones - Bluetooth devices - Baby monitors - Neighboring Wi-Fi networks - Zigbee devices. All share same 2.4 GHz ISM band. Solution: Use 5 GHz or 6 GHz bands."
  },
  {
    id: 28,
    front: "What is a site survey for wireless networks?",
    back: "Process of planning wireless network deployment. Measures: signal strength, coverage areas, interference sources, optimal AP placement. Uses Wi-Fi analyzer tools. Creates heat map showing signal coverage."
  },
  {
    id: 29,
    front: "What is wireless roaming?",
    back: "Client device moving between access points in ESS while maintaining connection. Seamless handoff between APs with same SSID. 802.11k/r/v standards improve roaming speed and efficiency."
  },
  {
    id: 30,
    front: "What power levels can Wi-Fi transmit at?",
    back: "Regulated by country. US (FCC): Up to 1 watt (30 dBm) for 2.4 GHz - 200mW-1W for 5/6 GHz depending on band. Higher power = longer range but more interference. Most APs adjustable."
  }
];