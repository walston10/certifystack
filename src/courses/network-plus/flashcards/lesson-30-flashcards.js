// Flashcards for Lesson 30: Common Network Issues and Solutions

export const lesson30Flashcards = [
  {
    id: 1,
    front: "What does APIPA address (169.254.x.x) indicate and how do you fix it?",
    back: "APIPA (Automatic Private IP Addressing) 169.254.0.0/16 means DHCP failed. Device couldn't reach DHCP server so assigned self. Causes: DHCP server down, network cable unplugged, wrong VLAN, DHCP scope exhausted, firewall blocking DHCP. Symptoms: can't reach network (wrong subnet). Fix: 1) Check cable/connectivity, 2) Verify DHCP server running, 3) Check DHCP scope (addresses available?), 4) ipconfig /release then /renew, 5) Check VLAN assignment. APIPA = Layer 3 problem preventing DHCP."
  },
  {
    id: 2,
    front: "User can ping local devices but not internet. What's wrong?",
    back: "Problem: Layer 3 local works, remote fails. Likely: default gateway issue, routing problem, or ISP outage. Check: 1) ipconfig /all - verify default gateway configured, 2) ping gateway (can reach router?), 3) Check gateway config (is router routing?), 4) Check ISP connection, 5) Verify routing table (route print), 6) Check firewall rules. Gateway is 'exit door' to other networks. No/wrong gateway = local only. Most common: gateway not configured or wrong IP."
  },
  {
    id: 3,
    front: "User can ping IP addresses but not hostnames. What's the problem?",
    back: "DNS problem (name resolution failing). Can reach by IP (Layer 3 works) but not by name (Layer 7 DNS issue). Fix: 1) ipconfig /all - check DNS server configured, 2) ping DNS server (is it reachable?), 3) nslookup google.com (test DNS query), 4) ipconfig /flushdns (clear DNS cache), 5) Try alternate DNS (8.8.8.8, 1.1.1.1), 6) Check hosts file (C:\\Windows\\System32\\drivers\\etc\\hosts). DNS = Layer 7. Very common issue."
  },
  {
    id: 4,
    front: "What causes intermittent network connectivity?",
    back: "Causes: Loose cable (bad termination, not fully plugged), damaged cable (works sometimes), failing hardware (NIC, switch port), interference (EMI/RFI), wireless signal issues (weak, interference), bandwidth saturation (high utilization), spanning tree reconvergence, duplex mismatch, overheating. Hardest to troubleshoot (not consistent). Solutions: Replace cable (even if sometimes works), check connections (reseat), monitor utilization, check hardware (heat, errors), wireless: check signal strength/interference. Pattern recognition: time-of-day? Specific activities?"
  },
  {
    id: 5,
    front: "What does IP address conflict mean and how do you resolve it?",
    back: "IP conflict: two devices using same IP address. Causes: duplicate static IPs, device with static IP takes DHCP address, short DHCP lease times, rogue DHCP server. Symptoms: intermittent connectivity, error message 'IP conflict detected', network drops. Fix: 1) Identify conflicting device (check ARP, DHCP logs, MAC address), 2) Change one to different IP, 3) Review IP assignments (static IP spreadsheet), 4) Check DHCP scope (excludes static range?), 5) ipconfig /release /renew. Prevention: proper IP management, DHCP exclusions."
  },
  {
    id: 6,
    front: "What indicates incorrect subnet mask configuration?",
    back: "Symptoms: Can reach some devices, not others. Can reach local network but specific subnets unreachable. Devices think they're on different networks when they're not (or vice versa). Example: device 192.168.1.10/24 can't reach 192.168.1.200 (should be same network). Causes: manually configured wrong mask, DHCP gave wrong mask. Check: ipconfig /all - compare subnet masks. Fix: correct subnet mask. Test: ping devices that should be reachable. Incorrect mask = routing when should be switching."
  },
  {
    id: 7,
    front: "User reports slow network performance. What do you check?",
    back: "Check: 1) Bandwidth utilization (congestion?), 2) Interface errors (CRC, collisions), 3) Duplex mismatch, 4) Wireless signal strength/interference, 5) QoS settings (traffic prioritization), 6) Switch CPU/memory, 7) Broadcast storms, 8) Large file transfers (one user saturating?), 9) Malware (bandwidth usage), 10) Application issues. Tools: NetFlow (top talkers), interface statistics, speed test. Compare to baseline. Define 'slow' (specific metrics). Isolate: one user or everyone?"
  },
  {
    id: 8,
    front: "What causes high latency and how do you identify the source?",
    back: "Latency: delay in packet delivery. Causes: long distance (geographical), congestion (bandwidth saturation), routing inefficiency (too many hops), slow links (still using 10Mbps?), overloaded devices (high CPU), wireless interference, ISP issues, satellite links. Identify: 1) ping (measure RTT), 2) tracert (which hop has high latency?), 3) pathping (packet loss per hop?), 4) Check utilization (congestion?). Good: <50ms. Concern: >100ms. Critical for: VoIP, gaming. Fix depends on source."
  },
  {
    id: 9,
    front: "What is jitter and why does it affect VoIP?",
    back: "Jitter: variation in latency (inconsistent delay). Packets arrive at irregular intervals. Measured: standard deviation of latency. Causes: congestion, queuing delays, routing changes, wireless interference. Affects: real-time applications (VoIP, video) - causes choppy audio/video, gaps, quality issues. Good jitter: <30ms. Bad: >50ms. Fix: QoS (prioritize voice), reduce congestion, stable routing, wired connections (not wireless for VoIP phones). Jitter worse than consistent high latency for voice. Buffer can't compensate."
  },
  {
    id: 10,
    front: "What causes packet loss and how do you troubleshoot it?",
    back: "Packet loss: packets dropped/don't reach destination. Causes: congestion (buffers full), faulty hardware (cable, NIC, port), wireless interference, routing loops, misconfigured QoS, errors (CRC). Symptoms: slow performance, timeouts, poor VoIP/video quality. Identify: 1) ping -n 100 (check % loss), 2) pathping/mtr (which hop losing?), 3) Check interface errors, 4) Monitor utilization. Acceptable: 0-1%. Problem: >2%. Fix: replace hardware, reduce congestion, fix errors. Zero loss ideal."
  },
  {
    id: 11,
    front: "What is a broadcast storm and how do you stop it?",
    back: "Broadcast storm: broadcasts loop infinitely consuming all bandwidth. Causes: Layer 2 loop (STP disabled/failed), broadcast amplification, network loop. Symptoms: network completely down, 100% utilization, devices can't communicate, switch CPUs maxed. See: broadcast packets dominating, spanning tree TCN (topology change notifications). Fix: 1) Disconnect suspected loop (unplug redundant cable), 2) Enable STP, 3) Check STP status (show spanning-tree), 4) Identify loop source. Prevention: always enable STP. Very severe - minutes to fix or network stays down."
  },
  {
    id: 12,
    front: "What indicates a VLAN mismatch?",
    back: "VLAN mismatch: device assigned to wrong VLAN or trunk configuration error. Symptoms: device can't reach network, local communication works but not to servers, similar devices work but this one doesn't. Causes: switch port on wrong VLAN, native VLAN mismatch on trunk, access port connected to trunk. Check: 1) show vlan (which VLAN is port in?), 2) Compare to working device, 3) Check trunk allowed VLANs, 4) Verify native VLAN matches. Fix: change port VLAN assignment (switchport access vlan X)."
  },
  {
    id: 13,
    front: "What causes native VLAN mismatch on trunk and why is it dangerous?",
    back: "Native VLAN: untagged traffic on trunk port. Mismatch: each trunk end has different native VLAN (one says VLAN 1, other says VLAN 99). Causes: misconfiguration, default not changed. Dangers: VLAN hopping attacks, traffic goes to wrong VLAN, connectivity issues, security breach. Symptoms: CDP/LLDP warnings, spanning tree issues, intermittent connectivity. Fix: 1) show interface trunk (verify native VLAN), 2) Match both sides (switchport trunk native vlan X), 3) Best practice: change native VLAN from default VLAN 1. Security vulnerability."
  },
  {
    id: 14,
    front: "What is DHCP scope exhaustion and how do you resolve it?",
    back: "DHCP scope exhaustion: all available IP addresses leased, new devices can't get IP (receive APIPA instead). Causes: too many devices, lease time too long, devices holding unused IPs, IP address space too small. Check: DHCP server logs (no addresses available), ipconfig shows APIPA. Fix: 1) Increase scope size (add more IPs), 2) Reduce lease time (reclaim faster), 3) Find/remove stale leases, 4) Check for DHCP starvation attack, 5) Subnet into smaller networks (VLSM). Prevention: plan IP space for growth."
  },
  {
    id: 15,
    front: "User reports poor wireless signal. What do you troubleshoot?",
    back: "Check: 1) Signal strength (RSSI in dBm - should be >-67dBm), 2) Distance from AP (too far?), 3) Physical obstructions (walls, metal), 4) Interference (2.4GHz: microwave, Bluetooth; channel overlap), 5) AP capacity (too many clients?), 6) Frequency band (2.4GHz vs 5GHz), 7) AP placement/orientation. Tools: WiFi analyzer (signal strength, channels). Fix: Move closer, add AP, change channels, switch to 5GHz, reduce interference sources. Coverage vs capacity issue."
  },
  {
    id: 16,
    front: "What causes wireless channel overlap and how do you fix it?",
    back: "2.4GHz channel overlap: only 3 non-overlapping channels (1, 6, 11). Overlap causes interference, poor performance. Causes: too many APs on same/adjacent channels, auto-channel selection picks poorly, neighboring networks on same channels. Symptoms: slow WiFi, high retry rates, interference. Fix: 1) WiFi analyzer (see channel usage), 2) Configure APs manually (1, 6, or 11 only), 3) Switch to 5GHz (24 non-overlapping channels), 4) Adjust AP power (reduce overlap). 5GHz advantage: more channels available."
  },
  {
    id: 17,
    front: "What indicates a rogue access point?",
    back: "Rogue AP: unauthorized AP on network. Security threat - bypasses security controls. Detection: 1) Wireless scan shows unexpected SSID, 2) Unknown MAC address on switch, 3) DHCP conflicts, 4) WIDS/WIPS alerts, 5) Physical inspection. Two types: malicious (attacker) or accidental (employee plugged in home router). Signs: unfamiliar SSID, open network suddenly appearing, suspicious device in switch port. Find: MAC address → switch port → physical location. Remove immediately. Implement: NAC, port security, 802.1X."
  },
  {
    id: 18,
    front: "What is port flapping and what causes it?",
    back: "Port flapping: interface repeatedly goes up/down (link state changes rapidly). Symptoms: connection unstable, logs show interface up/down messages, users experience drops. Causes: bad cable, loose connection, faulty transceiver (SFP), bad port, NIC driver issues, duplex mismatch, spanning tree loop, power issues (PoE). Check: interface logs (show logging), error counters, try different cable/port. Fix: replace cable (most common), change port, update NIC driver, check power. Flapping = physical layer problem usually."
  },
  {
    id: 19,
    front: "What causes spanning tree to block a port when it shouldn't?",
    back: "STP blocking prevents loops but can block desired paths. Causes: suboptimal root bridge election (wrong switch is root), incorrect port costs, topology change, configuration errors, STP misconfiguration. Symptoms: can't reach certain devices, alternative path exists but not used. Check: 1) show spanning-tree (identify root bridge, port states), 2) Verify root bridge is correct, 3) Check port costs/priorities. Fix: Configure root bridge priority (make desired switch root), adjust port costs, verify STP mode (RSTP faster). Understand: STP is feature not bug."
  },
  {
    id: 20,
    front: "What indicates missing routes in routing table?",
    back: "Symptoms: can reach some networks but not others, 'destination unreachable', partial connectivity. Specific subnets unreachable. Causes: static route not configured, routing protocol not advertising route, interface down, route removed (admin distance). Check: 1) route print / show ip route (is route present?), 2) Can router reach that network directly?, 3) Check routing protocol status, 4) Verify interfaces up. Fix: add static route, configure/troubleshoot routing protocol, enable interface. Default route catches 'everything else'."
  },
  {
    id: 21,
    front: "What is asymmetric routing and when is it a problem?",
    back: "Asymmetric routing: forward path different from return path (packets go out one route, return via different route). Causes: multiple paths available, load balancing, different metrics, policy routing. Problem when: stateful firewalls (sees one direction only, drops return traffic), NAT, troubleshooting (confusing). Not always bad: can be intentional. Symptoms: connections fail, firewall blocks traffic, one-way communication. Identify: traceroute both directions. Fix: adjust routing metrics, static routes, policy routing, configure firewall for asymmetric."
  },
  {
    id: 22,
    front: "What causes routing loops?",
    back: "Routing loop: packets circle between routers indefinitely (never reach destination). Causes: static route misconfiguration (A → B, B → A), routing protocol convergence issues, incorrect route redistribution, split horizon disabled. Symptoms: high latency, destination unreachable, TTL exceeded, router CPU high. Detection: traceroute shows repeated hops (A→B→C→A→B→C). Prevention: split horizon, route poisoning, administrative distance, proper metrics. Fix: correct routing configuration, wait for convergence (dynamic routing). TTL prevents infinite loops."
  },
  {
    id: 23,
    front: "What indicates duplex mismatch and how do you fix it?",
    back: "Duplex mismatch: one side full-duplex, other half-duplex. Symptoms: works but SLOW, late collisions, FCS errors, high input errors, retransmissions. Shouldn't see collisions in switched full-duplex network. Causes: one side auto-negotiate, other manually set, auto-negotiation failure. Check: show interface (speed/duplex), netstat -e (errors/collisions). Fix: Set both to auto OR both manually to full-duplex (match!). Modern: almost always full-duplex. Half-duplex = legacy (hubs). Match both ends always."
  },
  {
    id: 24,
    front: "What causes throughput issues (slow speed)?",
    back: "Throughput: actual data transfer rate. Causes: bandwidth saturation (link full), duplex mismatch, QoS limiting traffic, poor wireless signal, long distance (latency-limited), TCP window size, packet loss (retransmissions), old hardware (10/100 instead of gigabit), misconfigured MTU. Check: 1) Utilization (bandwidth used?), 2) Interface errors, 3) Duplex settings, 4) Speed test, 5) Compare to baseline. Fix: upgrade link, fix errors, configure QoS, optimize TCP, replace old hardware. Measure: Mbps actual vs expected."
  },
  {
    id: 25,
    front: "What is collisions in modern networks and what do they indicate?",
    back: "Collisions should be ZERO in switched networks (full-duplex). Seeing collisions indicates: duplex mismatch (one side half), hub still in use (upgrade!), shared media. Half-duplex: normal to have some collisions (CSMA/CD). High collision rate: performance problem. Check: show interface (collisions counter), netstat -e. Fix: verify full-duplex both sides, replace hubs with switches, check auto-negotiation. Modern switched networks: full-duplex, no collisions. Collisions = configuration or legacy hardware."
  },
  {
    id: 26,
    front: "Quick scenario: All users in building can't access network. Where do you start?",
    back: "Scope: entire building = infrastructure issue not individual devices. Check: 1) Building's switch (power, errors, CPU), 2) Uplink to core (cable, port status, errors), 3) DHCP server (if APIPA), 4) Default gateway (if local works), 5) Spanning tree (blocking?), 6) Recent changes (what changed?). Likely: switch failure, uplink cable issue, power outage, configuration change. Test: can you reach switch? Lights on? Console access? Large scope = infrastructure troubleshooting. Work from building back to core."
  },
  {
    id: 27,
    front: "User can't connect to specific server but others can. What do you check?",
    back: "Scope: one user, one server = targeted issue. Check: 1) Ping server (can reach?), 2) Telnet server port (service listening?), 3) Firewall rules (is user blocked?), 4) DNS (resolving correct IP?), 5) User permissions (authorized?), 6) Server status (service running?), 7) Network path (routing?). Compare: user who CAN access - what's different? Likely: permissions, firewall rule, user-specific config. Small scope = specific configuration issue not infrastructure."
  },
  {
    id: 28,
    front: "What indicates interface errors and what do different types mean?",
    back: "Interface errors indicate problems. Input errors: frames received with errors (CRC, runts, giants). Output errors: problems transmitting. CRC errors: damaged frames (cable/interference). Runts (<64 bytes): collisions, bad NIC. Giants (>1518 bytes): bad NIC, driver. Collisions: duplex mismatch, half-duplex. Late collisions: duplex mismatch, cable too long. Any errors: investigate. Should be near zero. Check: show interface (Cisco), netstat -e (Windows). Fix depends on error type. Non-zero errors = troubleshoot immediately."
  },
  {
    id: 29,
    front: "What common mistakes do technicians make when troubleshooting?",
    back: "Mistakes: 1) Not checking obvious (cable unplugged), 2) Multiple changes at once (don't know what fixed), 3) Assuming without testing ('must be the firewall'), 4) Not documenting steps (can't backtrack), 5) Ignoring recent changes (what changed?), 6) Not verifying after fix (assumed it worked), 7) Working beyond skill level (escalate!), 8) Blaming users (damages relationship), 9) No baseline (don't know normal), 10) Skipping methodology (random approach). Follow methodology, document, test, verify. Systematic approach wins."
  },
  {
    id: 30,
    front: "FINAL Speed drill: Match symptom to likely cause - APIPA, slow network, can ping IP not name, intermittent connectivity, entire building down",
    back: "APIPA (169.254.x.x): DHCP failure. Slow network: bandwidth saturation, duplex mismatch. Can ping IP not name: DNS problem. Intermittent: loose cable, interference. Entire building down: switch failure, uplink issue. Know symptom-to-cause patterns for exam success! 🎉 CONGRATULATIONS - YOU'VE COMPLETED ALL 30 LESSONS!"
  }
];