// Flashcards for Lesson 30: Common Network Issues (SHORTENED)

export const lesson30Flashcards = [
  {
    id: 1,
    front: "What does APIPA address (169.254.x.x) indicate?",
    back: "DHCP failed. Device couldn't reach DHCP server so self-assigned link-local address. Check cable, verify DHCP server running, ipconfig /release /renew."
  },
  {
    id: 2,
    front: "Can ping local devices but not internet. What's wrong?",
    back: "Default gateway problem. Check ipconfig /all for gateway IP, ping gateway, verify router is routing."
  },
  {
    id: 3,
    front: "Can ping IPs but not hostnames. What's the issue?",
    back: "DNS problem. Check DNS server config (ipconfig /all), test with nslookup, flush DNS cache (ipconfig /flushdns)."
  },
  {
    id: 4,
    front: "What causes intermittent connectivity?",
    back: "Loose/damaged cable, failing hardware, interference (EMI/wireless), bandwidth saturation, duplex mismatch, or overheating."
  },
  {
    id: 5,
    front: "What is an IP address conflict?",
    back: "Two devices using same IP. Causes duplicate static IPs or DHCP overlap. Fix: change one device's IP, check DHCP scope exclusions."
  },
  {
    id: 6,
    front: "What indicates incorrect subnet mask?",
    back: "Can reach some devices but not others in what should be same network. Check ipconfig /all and compare masks."
  },
  {
    id: 7,
    front: "User reports slow network. What do you check first?",
    back: "Bandwidth utilization (congestion?), interface errors, duplex mismatch, wireless signal strength, and compare to baseline."
  },
  {
    id: 8,
    front: "What causes high latency?",
    back: "Long distance, congestion, too many hops, slow links, overloaded devices, or ISP issues. Use ping and tracert to identify source."
  },
  {
    id: 9,
    front: "What is jitter and why does it matter?",
    back: "Variation in latency. Packets arrive at irregular intervals. Critical for VoIP/video - causes choppy quality. Good: <30ms."
  },
  {
    id: 10,
    front: "What causes packet loss?",
    back: "Congestion (buffers full), faulty hardware, wireless interference, or errors. Check with ping -n 100. Should be 0-1%."
  },
  {
    id: 11,
    front: "What is a broadcast storm?",
    back: "Layer 2 loop causing broadcasts to loop infinitely, consuming all bandwidth. Fix: disconnect loop, enable STP."
  },
  {
    id: 12,
    front: "What indicates a VLAN mismatch?",
    back: "Device can't reach network while similar devices work. Check port VLAN assignment (show vlan) and compare to working device."
  },
  {
    id: 13,
    front: "What is native VLAN mismatch?",
    back: "Each end of trunk has different native VLAN. Security risk - enables VLAN hopping. Both sides must match."
  },
  {
    id: 14,
    front: "What is DHCP scope exhaustion?",
    back: "All DHCP addresses leased, new devices get APIPA. Fix: increase scope size or reduce lease time."
  },
  {
    id: 15,
    front: "User reports poor wireless signal. What do you check?",
    back: "Signal strength (should be >-67 dBm), distance from AP, obstructions, interference, channel overlap, and frequency band (2.4 vs 5 GHz)."
  },
  {
    id: 16,
    front: "What causes wireless channel overlap on 2.4 GHz?",
    back: "Only 3 non-overlapping channels (1, 6, 11). Too many APs on same/adjacent channels. Use WiFi analyzer and configure manually."
  },
  {
    id: 17,
    front: "What is a rogue access point?",
    back: "Unauthorized AP on network - security threat. Detect with wireless scan, check switch for unknown MACs, use WIDS/WIPS."
  },
  {
    id: 18,
    front: "What is port flapping?",
    back: "Interface repeatedly goes up/down. Usually bad cable, loose connection, or faulty transceiver. Check logs and replace cable."
  },
  {
    id: 19,
    front: "When does spanning tree block a port incorrectly?",
    back: "Wrong root bridge elected or incorrect port costs. Check 'show spanning-tree' and configure proper root bridge priority."
  },
  {
    id: 20,
    front: "What indicates missing routes?",
    back: "Can reach some networks but not others. Check routing table (route print / show ip route). Add static route or fix routing protocol."
  },
  {
    id: 21,
    front: "What is asymmetric routing?",
    back: "Forward path differs from return path. Problem for stateful firewalls (only see one direction). Use traceroute both directions."
  },
  {
    id: 22,
    front: "What causes routing loops?",
    back: "Misconfigured static routes or routing protocol issues. Traceroute shows repeated hops. TTL prevents infinite loops."
  },
  {
    id: 23,
    front: "What indicates duplex mismatch?",
    back: "Works but SLOW with late collisions and errors. One side full-duplex, other half. Set both to auto or both to full-duplex manually."
  },
  {
    id: 24,
    front: "What causes throughput issues?",
    back: "Bandwidth saturation, duplex mismatch, QoS limiting, poor wireless signal, packet loss, or old hardware (10/100 vs gigabit)."
  },
  {
    id: 25,
    front: "What do collisions indicate in modern networks?",
    back: "Should be ZERO in switched full-duplex networks. Collisions = duplex mismatch or hub still in use. Verify full-duplex both sides."
  },
  {
    id: 26,
    front: "All users in building can't access network. Where to start?",
    back: "Infrastructure issue. Check building switch (power, status), uplink to core, DHCP server, and recent changes."
  },
  {
    id: 27,
    front: "One user can't reach specific server but others can. What to check?",
    back: "Targeted issue. Check ping, firewall rules, DNS resolution, user permissions, and compare to working user."
  },
  {
    id: 28,
    front: "What do CRC errors indicate?",
    back: "Damaged frames from bad cable or interference. Should be near zero - investigate immediately if present."
  },
  {
    id: 29,
    front: "Name 3 common troubleshooting mistakes.",
    back: "Not checking obvious (cables), making multiple changes at once, and not documenting steps. Follow systematic methodology."
  },
  {
    id: 30,
    front: "Quick match: APIPA / Can ping IP not name / Intermittent / Building down",
    back: "APIPA = DHCP failure. Ping IP not name = DNS. Intermittent = loose cable. Building down = switch/uplink failure."
  }
];