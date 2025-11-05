// Quiz for Lesson 30: Common Network Issues and Solutions

export const lesson30Quiz = [
  {
    id: 1,
    question: "A user reports they cannot access any network resources. The technician checks and sees the workstation has IP address 169.254.45.100. The user can ping other devices with 169.254.x.x addresses but nothing else. What is the root cause and solution?",
    options: [
      "The user's NIC is faulty and needs replacement",
      "DHCP server is unreachable or has no available addresses—fix DHCP or configure static IP as temporary solution",
      "DNS server is down",
      "The default gateway is misconfigured"
    ],
    correct: 1,
    explanation: "APIPA (169.254.0.0/16) troubleshooting: workstation attempted DHCP but failed, automatically assigned APIPA address, can communicate with other APIPA devices (link-local only), no gateway or DNS (can't reach beyond local subnet). Root causes: 1) DHCP server down/unreachable (network issue, server offline), 2) DHCP scope exhausted (no available addresses), 3) Cable/switch issue (physical connectivity problem), 4) DHCP relay not configured (server on different subnet), 5) Rogue DHCP server conflict. Troubleshooting steps: 1) Check physical connectivity (link lights, cable), 2) Verify DHCP server operational, 3) Check DHCP scope (available addresses?), 4) Test DHCP on different device (isolated issue?), 5) Release/renew (ipconfig /release, /renew), 6) Check for rogue DHCP. Solutions: immediate: static IP configuration (temporary workaround), permanent: fix DHCP server, add addresses to scope, repair network connectivity, configure DHCP relay. Key indicator: APIPA = DHCP problem, not DNS or routing issue."
  },
  {
    id: 2,
    question: "Users report intermittent network connectivity—sometimes working, sometimes not. A technician discovers a switch port configured for 100 Mbps full-duplex while the connected device is set to auto-negotiate. What issue is causing the intermittent problems?",
    options: [
      "DNS resolution failures",
      "Duplex mismatch—auto-negotiate detects speed but defaults to half-duplex when other side is hard-coded, causing collisions and performance issues",
      "Insufficient bandwidth",
      "VLAN misconfiguration"
    ],
    correct: 1,
    explanation: "Duplex mismatch characteristics: one side hard-coded, other auto-negotiate, auto-negotiate side: detects speed correctly (100 Mbps), defaults to half-duplex (can't negotiate duplex), mismatch results: collisions, CRC errors, late collisions, slow performance (50-90% loss), intermittent connectivity. Why auto-negotiate fails: IEEE 802.3 standard: if one side doesn't negotiate, other defaults to half-duplex for safety, assumption: half-duplex compatible with both full and half. Symptoms: works initially then slows, file transfers stall, timeouts, switch shows collision counters increasing, CRC errors on interface. Troubleshooting: 1) Check duplex settings (show interface, device manager), 2) Look for collisions in switch statistics (should be zero on switched networks), 3) Verify speed/duplex match. Solutions: best practice: both sides auto-negotiate (modern devices handle correctly), if manual required: match both sides exactly (100 full/full or 1000 full/full), document manual settings. Prevention: avoid hard-coding unless necessary, verify settings after changes, monitor interface statistics, user training (don't manually configure without knowledge)."
  },
  {
    id: 3,
    question: "A user can successfully ping internal servers by IP address (10.1.1.50) but cannot access them by hostname (fileserver). When they try to browse websites, they get 'server not found' errors. What is the most likely cause?",
    options: [
      "The internal servers are offline",
      "DNS resolution failure—the system cannot resolve hostnames to IP addresses",
      "The user's IP address is incorrect",
      "Physical layer cable issue"
    ],
    correct: 1,
    explanation: "DNS troubleshooting indicators: can reach by IP, not by name → DNS issue, can't reach anything → not DNS, wrong IPs resolved → DNS poisoning/misconfiguration. Diagnostic approach: 1) Ping by IP (ping 8.8.8.8) - works? Network layer functional, 2) Ping by name (ping google.com) - fails? DNS problem, 3) Check DNS configuration (ipconfig /all - DNS servers listed?), 4) Test DNS directly (nslookup google.com - resolves?). Common DNS problems: 1) No DNS server configured (DHCP issue, static IP without DNS), 2) DNS server unreachable (firewall, routing, server down), 3) Wrong DNS server IP (typo, old configuration), 4) DNS server not responding (service stopped, overloaded), 5) Firewall blocking port 53. Solutions: temporary: use public DNS (8.8.8.8, 1.1.1.1), verify reachability (ping DNS server IP), flush DNS cache (ipconfig /flushdns), permanent: fix DHCP DNS options, correct DNS server IPs, repair/restart DNS service, configure backup DNS servers. Prevention: configure multiple DNS servers (primary and secondary), monitor DNS server health, document DNS infrastructure, test DNS resolution regularly."
  },
  {
    id: 4,
    question: "A workstation can access local network resources but cannot reach the internet. The technician runs 'ipconfig' and sees: IP: 192.168.1.100, Mask: 255.255.255.0, Gateway: (blank). What is preventing internet access?",
    options: [
      "The DNS server is misconfigured",
      "No default gateway configured—the workstation has no route to reach networks beyond the local subnet",
      "The IP address is in the wrong subnet",
      "The cable is faulty"
    ],
    correct: 1,
    explanation: "Default gateway function: routes traffic to other networks, required for any destination not on local subnet, gateway must be: on same subnet as host, reachable (respond to ping), properly configured routing. Missing gateway symptoms: local subnet accessible (same broadcast domain), other subnets unreachable (no routing), internet inaccessible (requires routing), traceroute shows no hops beyond local network. Causes: 1) DHCP not providing gateway (option 3 missing), 2) Static IP misconfigured (forgot gateway), 3) Gateway removed/changed, 4) Corrupted network configuration. Troubleshooting: 1) Verify gateway configured (ipconfig /all), 2) Test gateway reachability (ping gateway IP), 3) Check routing table (route print), 4) Verify gateway on same subnet. Gateway validation: correct subnet: 192.168.1.100/24, gateway must be 192.168.1.x (typically .1 or .254), wrong: gateway 192.168.2.1 (different subnet—won't work). Solutions: DHCP: fix DHCP scope (configure option 3), release/renew, static: add gateway manually, verify gateway IP from network admin, check for typos. Testing: after adding gateway, ping external IP (8.8.8.8), traceroute shows hops (route exists)."
  },
  {
    id: 5,
    question: "A network experiences slow performance during business hours but runs fine at night and on weekends. Network monitoring shows bandwidth utilization at 95%+ during business hours. What is the issue and appropriate solution?",
    options: [
      "DNS server needs restart",
      "Bandwidth saturation—network links are at capacity during peak usage, requiring bandwidth increase or traffic management",
      "All cables need replacement",
      "DHCP scope is exhausted"
    ],
    correct: 1,
    explanation: "Bandwidth saturation characteristics: high utilization (>80% sustained), symptoms only during peak times, slow application performance, timeouts, packet loss (when buffers full). Diagnosis: 1) Monitor utilization over time (SNMP, NetFlow), 2) Identify peak usage periods (correlate with complaints), 3) Identify top bandwidth consumers (NetFlow analysis), 4) Baseline comparison (is this normal?). Common causes: 1) Business growth (more users, more data), 2) Bandwidth-intensive applications (video conferencing, backups, cloud sync), 3) Unauthorized usage (streaming, torrents), 4) Malware (botnets, crypto mining), 5) Misconfigurations (broadcast storms). Solutions: short-term: 1) QoS (Quality of Service)—prioritize critical traffic, 2) Traffic shaping (limit non-critical applications), 3) Schedule bandwidth-intensive tasks (backups during off-hours), 4) Block unnecessary traffic (streaming sites, P2P). Long-term: 1) Upgrade bandwidth (higher-speed links, additional circuits), 2) Load balancing (distribute across multiple links), 3) WAN optimization (compression, caching), 4) Architecture changes (local caching, distributed services). Investigation: NetFlow/sFlow analysis (who/what consuming bandwidth), identify unexpected traffic (malware, unauthorized), trend analysis (gradual increase vs sudden spike). Prevention: capacity planning (monitor trends, project growth), usage policies (acceptable use), regular audits."
  },
  {
    id: 6,
    question: "Users report that VoIP calls have poor quality with choppy audio and dropped words. Data applications work normally. Network monitoring shows occasional packet loss and variable latency. What network condition is affecting VoIP quality?",
    options: [
      "Bandwidth is completely saturated",
      "Jitter (variable latency) and packet loss are degrading real-time voice quality",
      "DNS is misconfigured",
      "Duplex mismatch"
    ],
    correct: 1,
    explanation: "Real-time application requirements (VoIP, video): low latency (<150ms preferred), low jitter (<30ms), minimal packet loss (<1%), consistent bandwidth, prioritization over data. Jitter: variable packet delay, packets arrive at inconsistent intervals, causes: network congestion, routing changes, competing traffic, insufficient buffer. Effects on VoIP: choppy audio (jitter buffer overflow/underflow), dropped words (packets arrive too late), poor quality (codec can't compensate). Packet loss effects: gaps in audio, dropped syllables, clicks/pops, automatic retransmission not possible (real-time, no time to retransmit). Diagnosis: 1) Ping with statistics (ping -n 100, check for loss/variable latency), 2) VoIP call quality metrics (MOS score), 3) Monitor during calls (SNMP, NetFlow), 4) Test baseline (compare peak vs off-peak). Solutions: 1) QoS implementation (prioritize voice traffic, DSCP marking, guaranteed bandwidth), 2) Separate voice VLAN (isolate from data, dedicated bandwidth), 3) Traffic shaping (limit non-critical during calls), 4) Increase bandwidth (if saturated), 5) Jitter buffers (tune appropriately). QoS configuration: mark voice traffic (DSCP EF—Expedited Forwarding), create priority queues, allocate bandwidth, police/shape traffic. Why data works but VoIP doesn't: data tolerant of delay/loss (TCP retransmits), VoIP intolerant (UDP, real-time, no retransmission). Prevention: proper capacity planning, QoS from day one, separate voice/data, monitor continuously."
  },
  {
    id: 7,
    question: "A switch port constantly transitions between up and down states (port flapping). Users connected to this port experience frequent disconnections. What are the most likely physical layer causes?",
    options: [
      "DNS server issues",
      "Bad cable, loose connection, failing transceiver, or auto-negotiation problems causing the port to repeatedly connect and disconnect",
      "Incorrect IP address",
      "VLAN misconfiguration"
    ],
    correct: 1,
    explanation: "Port flapping: interface repeatedly transitions up/down, logs show continuous state changes, users experience disconnections, causes network instability. Physical causes: 1) Bad cable (damaged, kinked, failing), 2) Loose connections (connector not seated, physical stress), 3) Failing SFP/transceiver (optics dying), 4) Dirty fiber connectors (intermittent contact), 5) Power issues (PoE instability), 6) Failing switch port hardware. Configuration causes: 1) Auto-negotiation issues (incompatible settings), 2) Speed/duplex mismatch (constant renegotiation), 3) Spanning tree misconfiguration (port blocking/forwarding loop), 4) Port security (MAC limit exceeded), 5) ErrDisable recovery (automatic recovery cycles). Diagnosis: 1) Check logs (frequency of flaps, error messages), 2) Interface statistics (input errors, CRC errors), 3) Swap cable (known-good test cable), 4) Different port (isolates port vs cable/device), 5) Check environmental (temperature, power). Solutions: immediate: 1) Replace cable (most common fix), 2) Reseat connections, 3) Clean fiber connectors, 4) Disable auto-negotiation (hard-code if necessary). Permanent: 1) Cable management (avoid stress, proper routing), 2) Quality cables (certified, proper category), 3) Replace failing hardware (transceivers, NICs, switch ports), 4) Environmental controls (cooling, power). Prevention: proper installation, quality components, regular maintenance, monitor interface statistics. Impact: beyond single user (STP topology changes affect entire network), network-wide instability possible."
  },
  {
    id: 8,
    question: "A network administrator receives alerts about high numbers of broadcast packets flooding the network, causing severe performance degradation. All switches in a ring topology show the same MAC address on multiple ports. What is causing this broadcast storm?",
    options: [
      "DNS server overload",
      "Layer 2 switching loop—STP is disabled or misconfigured, causing broadcasts to circulate endlessly",
      "Bandwidth is insufficient",
      "DHCP scope exhausted"
    ],
    correct: 1,
    explanation: "Broadcast storm: broadcasts loop endlessly through network, each switch floods broadcast out all ports, broadcast returns from different path, process repeats exponentially, network becomes unusable (100% utilization). Causes: 1) STP disabled (intentional or misconfigured), 2) STP not converged (topology change, root bridge election), 3) STP bypass (intentional redundant links without STP), 4) Unmanaged switch in managed network (no STP support), 5) Misconfigured redundant links. Symptoms: network completely unusable, switch CPU maxed (processing broadcasts), same MAC on multiple ports (MAC flapping), exponentially increasing traffic, users completely disconnected. Indicators: multiple ports forwarding (should have blocked ports), MAC table instability (same MAC appearing/disappearing on different ports), broadcast counters increasing rapidly, spanning tree errors in logs. Emergency response: 1) Disconnect redundant links (break loop physically), 2) Identify loop path (which cable creates loop), 3) Fix STP configuration, 4) Restore redundant links with STP operational. Prevention: 1) Enable STP on all switches (802.1D, 802.1w RSTP), 2) Verify STP configuration (root bridge, port priorities), 3) Monitor STP state (blocked ports functioning), 4) Use BPDU guard (prevent loops from access ports), 5) Document topology (identify redundant paths). STP purpose: prevents loops by: electing root bridge, calculating best path, blocking redundant paths, monitoring for topology changes. Network design: intentional redundancy (good), but requires loop prevention (STP essential)."
  },
  {
    id: 9,
    question: "A user's computer shows 'IP address conflict' error and loses network connectivity. Another device on the network has the same IP address. What are the possible causes and solutions?",
    options: [
      "This is normal network behavior",
      "Duplicate static IP assignment, DHCP scope includes static IPs, or device with static IP in DHCP range—reserve IPs in DHCP or reconfigure static addresses",
      "The switch is misconfigured",
      "DNS server has duplicate entries"
    ],
    correct: 1,
    explanation: "IP address conflict causes: 1) Duplicate static IPs (two devices manually configured same IP), 2) Static IP in DHCP range (DHCP assigns already-used IP), 3) DHCP server issues (doesn't track all assignments), 4) Rogue DHCP server (multiple DHCP servers assigning overlapping addresses), 5) Device moved between networks (keeps old static IP). How conflicts detected: device sends ARP request for its own IP (checking if in use), if another device responds (same IP exists), conflict detected, both devices may lose connectivity. Operating system behavior: Windows: detects conflict, alerts user, disables network adapter, Linux: may or may not detect, continues using IP (unreliable connectivity), switches/routers: often don't detect (multiple devices claim same IP—routing confused). Troubleshooting: 1) Identify conflicting devices (check MAC addresses in ARP cache), 2) Determine which device should have IP, 3) Reconfigure other device. Solutions: 1) DHCP exclusions (exclude static IP range from DHCP scope), 2) DHCP reservations (tie IP to MAC address), 3) IP address management (IPAM tools track assignments), 4) Change static IPs (use addresses outside DHCP range). Best practices: 1) Document static IPs (maintain spreadsheet/IPAM), 2) Separate ranges (DHCP: .100-.254, static: .1-.99), 3) Use DHCP reservations instead of static (centralized management), 4) Regular audits (scan network for conflicts). Prevention: proper IP management, clear policies, documentation, DHCP preferred over static."
  },
  {
    id: 10,
    question: "Network performance degradation occurs daily at 2:00 AM. Investigation reveals automated backup jobs run at this time, saturating the network link. What is the best solution to maintain backup operations without impacting daytime performance?",
    options: [
      "Cancel all backups",
      "Implement QoS to deprioritize backup traffic, schedule backups during lower-usage periods, or increase bandwidth",
      "Disable the network during backups",
      "Move all servers to a different subnet"
    ],
    correct: 1,
    explanation: "Scheduled network load management: many organizations have predictable traffic patterns, backups often cause congestion, need to balance operational requirements. Solutions: 1) Time-based scheduling: move backups to lowest-usage periods (typically 11 PM - 5 AM), stagger backup windows (not all at once), spread across week (different systems different nights), verify window sufficient (backups complete before business hours). 2) QoS implementation: deprioritize backup traffic (lower queue), ensure business-critical traffic prioritized, backup traffic can use available bandwidth without impacting production, DSCP marking for backup traffic. 3) Bandwidth increase: dedicated backup network (separate NICs, switches, links), higher-speed links (1G → 10G), backup-specific VLAN. 4) Backup optimization: compression (reduce data volume), deduplication (only backup changes), incremental/differential (smaller than full), WAN optimization (for offsite backups). 5) Architecture changes: local backup servers (avoid WAN transit), distributed backup infrastructure, cloud backup with scheduling. Monitoring: 1) Track backup completion times (ensure finish before business hours), 2) Monitor bandwidth during backups (verify not impacting other traffic), 3) Establish baseline (normal backup traffic patterns), 4) Alert on backup failures (incomplete within window). Best practices: separate backup network (if possible), appropriate backup windows, QoS always (even if dedicated network—defense in depth), monitor and adjust (business changes, backup grows). Why 2 AM typically chosen: lowest user activity, sufficient time before business hours, IT staff availability (in case of issues). Problem: backups growing (data volume increases), window insufficient (doesn't complete), solution: optimize or increase resources."
  },
  {
    id: 11,
    question: "A wireless user reports intermittent connectivity and slow speeds despite being close to an access point. A WiFi analyzer shows their device is connected to channel 6 with signal strength -75 dBm, and there are five other networks on channel 6 with similar signal strengths. What is causing the performance issue?",
    options: [
      "The AP needs to be replaced",
      "Channel congestion/overlap—multiple networks competing for the same wireless channel are causing interference and reduced performance",
      "The user's device is faulty",
      "DNS resolution issues"
    ],
    correct: 1,
    explanation: "Wireless channel congestion: 2.4 GHz has only 3 non-overlapping channels (1, 6, 11), multiple APs on same channel compete for airtime, co-channel interference reduces throughput, signal strength adequate (-75 dBm acceptable) but too many networks sharing channel. Channel overlap: 2.4 GHz channels overlap (each channel is 22 MHz wide, channels 5 MHz apart), channel 6 overlaps with 4, 5, 7, 8, partial interference from nearby channels, only 1, 6, 11 don't overlap. Diagnosis: 1) WiFi analyzer/scanner (see all networks, channels, signal strength), 2) Check current channel (what's device using?), 3) Survey channel usage (how many networks per channel?), 4) Signal strength check (adequate signal but poor performance = interference). Solutions: 1) Change AP channel (move to less congested—if channel 6 crowded, try 1 or 11), 2) Use 5 GHz band (24+ non-overlapping channels, less congested, shorter range), 3) Adjust AP power (reduce coverage overlap, minimize co-channel interference), 4) Upgrade to 802.11ax (WiFi 6—better congestion handling, OFDMA, BSS coloring). 5 GHz advantages: more channels available (36, 40, 44, 48, etc.), wider channels possible (40/80/160 MHz), less interference (fewer devices), better for high-density. Planning: site survey before deployment, channel plan (1-6-11 pattern for 2.4 GHz), power level adjustment (avoid over-coverage), consider 5 GHz first, 2.4 GHz for coverage only. Signal strength reference: -30 dBm (excellent), -50 dBm (very good), -60 dBm (good), -70 dBm (fair), -80 dBm (weak). -75 dBm adequate but with congestion = poor performance."
  },
  {
    id: 12,
    question: "Users report they can browse most websites but cannot access the company's internal SharePoint site. The technician can ping the SharePoint server by IP but not by name. DNS nslookup returns the correct IP for the SharePoint FQDN. What is the likely issue?",
    options: [
      "SharePoint server is completely offline",
      "Browser/application issue—possibly cached incorrect data, hosts file override, or application-specific DNS problem",
      "All DNS is broken",
      "The network cable is faulty"
    ],
    correct: 1,
    explanation: "Application-layer troubleshooting: lower layers work (can ping by IP), DNS resolves correctly (nslookup works), but application fails—indicates application-specific issue. Possible causes: 1) Browser cache (outdated page, incorrect redirect), 2) Hosts file override (C:\\Windows\\System32\\drivers\\etc\\hosts—entry pointing to wrong IP), 3) Browser DNS cache (separate from system DNS cache), 4) Proxy settings (browser using proxy, proxy misconfigured), 5) Application-specific DNS (some apps use their own resolver), 6) Browser extensions (blocking, redirecting). Hosts file issues: manual entries override DNS, malware often modifies hosts (redirect to malicious sites), check for: suspicious entries, entries for affected site, remove/comment out (#) problematic entries. Browser troubleshooting: 1) Clear browser cache (Ctrl+Shift+Del), 2) Try different browser (isolates browser-specific), 3) Incognito/private mode (fresh session, no extensions), 4) Check proxy settings (should match corporate policy), 5) Disable extensions temporarily. Advanced: 1) Check system hosts file (notepad C:\\Windows\\System32\\drivers\\etc\\hosts), 2) Flush DNS (browser and system: ipconfig /flushdns), 3) Verify proxy (bypass proxy for test), 4) Check certificate (HTTPS certificate error blocking?). Diagnosis indicators: ping works, nslookup works → not network/DNS, one application affected → application issue, all browsers affected → system-level (hosts file, proxy), one browser → browser-specific. Solution approach: test systematically (different browser, incognito, different device), eliminate variables (bypass proxy, clear caches), check local overrides (hosts file)."
  },
  {
    id: 13,
    question: "A newly configured VLAN cannot communicate with other VLANs despite correct switch port assignments. The Layer 3 switch has no inter-VLAN routing configured. What is missing?",
    options: [
      "VLANs automatically route to each other",
      "Inter-VLAN routing must be configured—either router-on-a-stick, Layer 3 switch SVI, or external router",
      "More VLANs need to be created",
      "Physical cables need replacement"
    ],
    correct: 1,
    explanation: "VLAN isolation: VLANs create separate broadcast domains, VLANs cannot communicate without routing, Layer 2 switches alone insufficient for inter-VLAN communication. Inter-VLAN routing methods: 1) Router-on-a-stick: external router with subinterfaces, each subinterface tagged with VLAN ID, trunk port between switch and router, router routes between VLANs. 2) Layer 3 switch (best): SVI (Switch Virtual Interface) per VLAN, routing in hardware (wire-speed), 'ip routing' enabled globally, each SVI has IP (default gateway for VLAN). 3) Separate router interfaces: one physical interface per VLAN (wasteful), requires many ports. Configuration example (Layer 3 switch): interface vlan 10, ip address 192.168.10.1 255.255.255.0, interface vlan 20, ip address 192.168.20.1 255.255.255.0, ip routing (enables routing). Access control: inter-VLAN routing enables communication, ACLs control what's permitted (allow some, block others), security policies enforced at routing layer. Common mistakes: 1) VLANs created but no routing configured, 2) SVIs created but 'ip routing' not enabled, 3) SVIs have no IP addresses, 4) Trunk port not allowing required VLANs, 5) No default gateway configured on clients. Verification: 1) Can clients ping their gateway? (VLAN connectivity), 2) Can clients ping other VLAN gateways? (routing functional), 3) Can clients reach hosts in other VLANs? (end-to-end works). Troubleshooting: verify VLAN exists on both switches, confirm trunk carries required VLANs, check routing configuration, verify SVIs up/up state, test routing table (show ip route)."
  },
  {
    id: 14,
    question: "A technician replaces a failed switch and restores the configuration from backup. Users immediately report connectivity issues. Investigation shows the MAC address table on the new switch is empty and slowly populating. What is causing the temporary connectivity problems?",
    options: [
      "The switch is permanently broken",
      "The switch is learning MAC addresses—temporary flooding occurs until the MAC table repopulates through normal network traffic",
      "All cables need to be replaced",
      "DNS server is down"
    ],
    correct: 1,
    explanation: "Switch MAC learning process: new/rebooted switch has empty MAC table, must learn MAC addresses from traffic, learning occurs passively (observes source MAC addresses), process called 'MAC learning' or 'MAC address table population'. How switches forward without full MAC table: unknown destination MAC → flood frame out all ports except source port (broadcast), device responds → switch learns responder's MAC and port, over time table fills (eventually flooding stops). Temporary effects: broadcast-like behavior (flooding during learning), reduced performance initially (unnecessary flooding), gradual improvement (as table fills), full performance when learned (typically seconds to minutes). Normal learning: learning from normal traffic (ARP, general communication), switches share no information (each switch learns independently), aging (entries expire if unused—typically 5 minutes), dynamic process (always learning, always aging). Accelerating recovery: 1) Generate traffic (ping devices, ARP for all hosts), 2) Wait (passive learning, natural traffic), 3) User activity (users generate learning traffic). Configuration restoration: saved config includes: VLANs, trunks, port assignments, STP settings, IP addressing. Saved config does NOT include: MAC address table (dynamic, not saved), ARP cache (dynamic), interface statistics (counters reset). Related scenarios: switch reboot (MAC table cleared), power outage affecting multiple switches (all relearn simultaneously—brief network disruption), new switch deployment (initial learning period expected). Planning: schedule switch changes during maintenance windows, pre-populate by generating traffic (scripted ping sweep), monitor convergence (verify full operation before closing window). This is normal switch behavior—not a fault, temporary and self-resolving."
  },
  {
    id: 15,
    question: "An IT manager wants to prevent similar network issues from recurring. They've just resolved a major outage caused by an unauthorized configuration change. What best practice should be implemented?",
    options: [
      "Disable all network management access",
      "Implement change management process with approval, documentation, testing, and rollback procedures",
      "Allow anyone to make changes without oversight",
      "Stop making any network changes forever"
    ],
    correct: 1,
    explanation: "Change management purpose: prevent unauthorized changes, reduce change-related outages, provide accountability and documentation, enable rollback if needed, coordinate changes (avoid conflicts). Change management process: 1) Change request: what's changing, why (business justification), who requests, who implements, when (schedule maintenance window), impact assessment (affected systems, users). 2) Review and approval: technical review (will it work? risks?), management approval (business alignment), CAB (Change Advisory Board) for major changes, emergency procedures (critical issues). 3) Planning: detailed implementation steps, testing procedures, rollback plan (how to undo), communication plan (notify stakeholders), resource allocation. 4) Implementation: during approved window, one change at a time, test after each step, document actual steps taken, escalate if issues. 5) Verification: test functionality (works as expected?), verify no side effects (nothing broken?), user acceptance (users confirm fix), performance monitoring. 6) Documentation: update network documentation, close change ticket, lessons learned (what went well, what didn't), knowledge base article. Benefits: fewer outages (changes properly planned/tested), faster troubleshooting (complete documentation), accountability (who changed what when), compliance (audit trail). Prevention of unauthorized changes: 1) Authentication/authorization (who can access?), 2) Change management enforcement (all changes through process), 3) Configuration backups (detect unauthorized changes), 4) Audit logging (track all changes), 5) Regular audits (verify compliance). Related processes: incident management (respond to outages), problem management (prevent recurrence), release management (software/firmware updates), configuration management (maintain accurate documentation). Cultural aspect: change management seems bureaucratic but: reduces risk, saves time long-term (fewer emergency fixes), professional operations, required for compliance (SOX, HIPAA, PCI). Balance: process not too heavy (prevents work), process not too light (doesn't prevent issues), adjust based on environment and risk. This scenario: unauthorized change caused outage → implement change management → prevent future unauthorized changes → faster incident resolution (documented procedures)."
  }
];

// Export for use in quiz component
export default lesson30Quiz;