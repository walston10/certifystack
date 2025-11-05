// Flashcards for Lesson 13: Wireless Networking (Wi-Fi 6/6E, 802.11)

export const lesson13Flashcards = [
  {
    id: 1,
    front: "What are the key specs for 802.11a?",
    back: "Frequency: 5 GHz only. Speed: 54 Mbps max. Range: shorter than 2.4 GHz due to higher frequency. Not compatible with 802.11b/g (different frequency). Introduced in 1999, largely obsolete. Better for less interference but shorter range."
  },
  {
    id: 2,
    front: "What are the key specs for 802.11b?",
    back: "Frequency: 2.4 GHz only. Speed: 11 Mbps max. Range: better than 5 GHz. First widely adopted standard (1999). Compatible with 802.11g. Major limitation: slow speed. Now obsolete, but legacy devices may still use it."
  },
  {
    id: 3,
    front: "What are the key specs for 802.11g?",
    back: "Frequency: 2.4 GHz only. Speed: 54 Mbps max. Backward compatible with 802.11b (but drops to 11 Mbps). Popular in early 2000s. Suffers from 2.4 GHz interference (microwaves, Bluetooth, baby monitors). Largely replaced by 802.11n."
  },
  {
    id: 4,
    front: "What are the key specs for 802.11n (Wi-Fi 4)?",
    back: "Frequency: Dual-band (2.4 GHz AND 5 GHz). Speed: up to 600 Mbps (theoretical). Key feature: MIMO (Multiple Input Multiple Output - multiple antennas). Channel bonding (40 MHz wide). Introduced 2009. Still common in homes/small offices today."
  },
  {
    id: 5,
    front: "What are the key specs for 802.11ac (Wi-Fi 5)?",
    back: "Frequency: 5 GHz ONLY (no 2.4 GHz). Speed: multi-gigabit (up to 6.9 Gbps theoretical). Features: MU-MIMO, beamforming, wider channels (80/160 MHz). Introduced 2014. Current mainstream standard for enterprise. Less congestion than 2.4 GHz."
  },
  {
    id: 6,
    front: "What are the key specs for 802.11ax (Wi-Fi 6/6E)?",
    back: "Frequency: Wi-Fi 6 uses 2.4/5 GHz, Wi-Fi 6E adds 6 GHz band. Speed: up to 9.6 Gbps theoretical. Features: OFDMA (better efficiency), MU-MIMO (8 streams), Target Wake Time (IoT battery saving), better dense environment performance. Latest standard (2019/2021)."
  },
  {
    id: 7,
    front: "What's the difference between Wi-Fi 6 and Wi-Fi 6E?",
    back: "Wi-Fi 6 (802.11ax): 2.4 GHz and 5 GHz bands. Wi-Fi 6E: adds the new 6 GHz band (5.925-7.125 GHz) with 1200 MHz of spectrum and NO legacy device interference. 6E provides: more channels, less congestion, faster speeds, lower latency. Requires new hardware."
  },
  {
    id: 8,
    front: "Why is 2.4 GHz better for range but worse for speed?",
    back: "Lower frequencies (2.4 GHz) have longer wavelengths that penetrate walls/obstacles better = better range but slower speeds. Higher frequencies (5/6 GHz) have shorter wavelengths that don't penetrate as well = shorter range but much faster speeds. Physics trade-off."
  },
  {
    id: 9,
    front: "How many non-overlapping channels exist in 2.4 GHz, and which are they?",
    back: "Only 3 non-overlapping channels: 1, 6, and 11 (in North America). Each channel is 20 MHz wide but only 5 MHz apart, causing overlap. With multiple APs, use only channels 1, 6, 11 to avoid interference. This is a major limitation of 2.4 GHz."
  },
  {
    id: 10,
    front: "How many channels are available in 5 GHz?",
    back: "24+ non-overlapping channels (varies by country due to regulations). Examples: channels 36, 40, 44, 48, 149, 153, 157, 161. Much less congestion than 2.4 GHz. DFS (Dynamic Frequency Selection) channels require radar detection. More channels = less interference."
  },
  {
    id: 11,
    front: "What is channel bonding and why use it?",
    back: "Channel bonding combines multiple channels to increase bandwidth. Examples: 20 MHz (1 channel), 40 MHz (2 channels), 80 MHz (4 channels), 160 MHz (8 channels). Wider = faster speeds BUT more interference and fewer available channels. Use 20/40 MHz for 2.4 GHz, 80/160 MHz for 5/6 GHz."
  },
  {
    id: 12,
    front: "What is MIMO (Multiple Input Multiple Output)?",
    back: "MIMO uses multiple antennas on both transmitter and receiver to send/receive multiple data streams simultaneously. Example: 4x4 MIMO = 4 transmit, 4 receive antennas. Increases throughput and reliability. Introduced in 802.11n, enhanced in 802.11ac/ax."
  },
  {
    id: 13,
    front: "What is MU-MIMO and how does it differ from regular MIMO?",
    back: "MU-MIMO (Multi-User MIMO) allows an AP to communicate with multiple clients simultaneously. Regular MIMO: one client at a time (fast switching). MU-MIMO: multiple clients in parallel = better efficiency in dense environments. 802.11ac: 4 clients. 802.11ax: 8 clients. Game changer for crowded networks."
  },
  {
    id: 14,
    front: "What is beamforming?",
    back: "Beamforming focuses the wireless signal directly toward specific clients instead of broadcasting equally in all directions. Benefits: stronger signal, longer range, less interference, better throughput. Like using a spotlight vs a lightbulb. Supported in 802.11ac/ax."
  },
  {
    id: 15,
    front: "What is an SSID and what's the difference between broadcasting and hiding it?",
    back: "SSID (Service Set Identifier) is the wireless network name (e.g., 'HomeWiFi'). Broadcasting: SSID visible in available networks list (default, user-friendly). Hidden: SSID not broadcast (users must manually enter name). Hiding provides minimal security - determined attackers can still discover it."
  },
  {
    id: 16,
    front: "What are the two main wireless modes?",
    back: "1) Infrastructure mode: devices connect through an Access Point (AP). Most common - home/enterprise networks. AP provides centralized management, internet access, roaming between APs. 2) Ad-hoc mode: peer-to-peer, devices connect directly without AP. Limited use - file sharing, temporary connections."
  },
  {
    id: 17,
    front: "What is a wireless site survey and why perform one?",
    back: "Site survey maps RF coverage, identifies dead zones, sources of interference, optimal AP placement, and channel selection. Tools: WiFi analyzer, spectrum analyzer, heat mapping software. Perform: before deployment, after changes, when troubleshooting. Critical for enterprise deployments."
  },
  {
    id: 18,
    front: "What is a heat map in wireless networking?",
    back: "Heat map is a color-coded visualization showing wireless signal strength throughout a physical area. Red/warm = strong signal. Blue/cold = weak signal. Created during site surveys. Used to: optimize AP placement, identify coverage gaps, plan capacity. Visual tool for wireless design."
  },
  {
    id: 19,
    front: "What is roaming in wireless networks?",
    back: "Roaming allows clients to move between APs while maintaining connectivity (handoff/handover). Requirements: same SSID across APs, overlapping coverage (10-15% overlap), fast authentication (802.11r). Seamless roaming critical for: VoIP calls, video streaming, mobile devices. Poor roaming = dropped connections."
  },
  {
    id: 20,
    front: "What is a wireless controller and why use one?",
    back: "Wireless controller is centralized management for multiple APs. Benefits: configure all APs from one interface, consistent policies, automatic channel/power adjustment, client roaming optimization, guest access management. Enterprise feature. APs become 'lightweight' (controller-dependent) vs 'autonomous' (independent)."
  },
  {
    id: 21,
    front: "What is a wireless mesh network?",
    back: "Mesh network: APs connect wirelessly to each other (not just to wired switch). Each AP can relay traffic for others. Benefits: easy to extend coverage without running cables, self-healing (finds alternate paths if AP fails). Drawbacks: half bandwidth used for backhaul. Common in large homes, outdoor deployments."
  },
  {
    id: 22,
    front: "What sources of interference affect 2.4 GHz WiFi?",
    back: "Microwave ovens (huge problem), Bluetooth devices, cordless phones, baby monitors, wireless cameras, neighboring WiFi networks, wireless keyboards/mice, some LED lights. 2.4 GHz is crowded because it's unlicensed ISM band. Solution: use 5 GHz when possible."
  },
  {
    id: 23,
    front: "What is OFDMA and why is it important in Wi-Fi 6?",
    back: "OFDMA (Orthogonal Frequency Division Multiple Access) divides channels into smaller sub-channels (Resource Units) allowing multiple clients to transmit simultaneously. Old way: one client uses full channel at a time. OFDMA: multiple clients share channel efficiently. Huge improvement for IoT/small packet traffic."
  },
  {
    id: 24,
    front: "What is BSS vs ESS vs IBSS?",
    back: "BSS (Basic Service Set): single AP and its clients. ESS (Extended Service Set): multiple APs with same SSID creating one logical network (roaming enabled). IBSS (Independent BSS): ad-hoc network, no AP. BSSID = AP's MAC address. ESSID = network name shared by all APs."
  },
  {
    id: 25,
    front: "Quick scenario: Users complain about slow WiFi in conference room. What do you check?",
    back: "Check: 1) Channel overlap (are nearby APs on same channel?), 2) Client count (too many users on one AP?), 3) Interference sources (microwave, Bluetooth?), 4) Signal strength (dead zone?), 5) AP capacity (old 802.11g?), 6) Frequency band (everyone on 2.4 GHz?). Use WiFi analyzer."
  },
  {
    id: 26,
    front: "What is the hidden node problem?",
    back: "Two clients can hear the AP but can't hear each other, causing collisions when both transmit simultaneously. Example: Client A and Client C are far apart but both connect to AP in middle. Solution: RTS/CTS (Request to Send/Clear to Send) protocol reserves channel before transmission."
  },
  {
    id: 27,
    front: "What is channel width and how does it affect performance?",
    back: "Channel width is the MHz of spectrum used. 20 MHz = slower but stable, less interference. 40 MHz = 2x faster, more interference. 80 MHz = 4x faster, very prone to interference. 160 MHz = fastest but difficult in crowded areas. 2.4 GHz: use 20 MHz. 5/6 GHz: 80 MHz typical."
  },
  {
    id: 28,
    front: "What are DFS channels in 5 GHz?",
    back: "DFS (Dynamic Frequency Selection) channels (52-144) share spectrum with weather radar and military systems. APs must: 1) scan for radar before using channel (1 minute), 2) immediately vacate if radar detected. Pro: less congested. Con: potential disruption. Channels 36-48, 149-165 are non-DFS (safer for critical apps)."
  },
  {
    id: 29,
    front: "Why might you disable lower data rates on an AP?",
    back: "Disabling low rates (1, 2, 5.5, 11 Mbps) forces distant/weak clients to disconnect and find a closer AP or forces them to higher rates. Benefits: better roaming behavior, improved overall network performance, reduced airtime used by slow clients. Common in dense deployments. BE CAREFUL - can create coverage gaps."
  },
  {
    id: 30,
    front: "Speed drill: Match WiFi generation to frequency and key feature - Wi-Fi 4, 5, 6, 6E",
    back: "Wi-Fi 4 (11n): Dual-band 2.4/5, MIMO. Wi-Fi 5 (11ac): 5 GHz only, MU-MIMO, gigabit+. Wi-Fi 6 (11ax): 2.4/5 GHz, OFDMA, efficient. Wi-Fi 6E: adds 6 GHz band, no legacy interference. Know these for the exam!"
  }
];