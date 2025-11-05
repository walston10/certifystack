// Quiz for Lesson 28: Command-Line Tools

export const lesson28Quiz = [
  {
    id: 1,
    question: "A user reports they cannot access a website. A technician runs 'ping google.com' and receives 'Request timed out' responses. However, when they run 'ping 8.8.8.8' (Google's DNS server), they receive successful replies. What does this indicate?",
    options: [
      "The user's internet connection is completely down",
      "DNS name resolution is failing—the system can reach IPs directly but cannot resolve domain names to IP addresses",
      "Google.com is offline",
      "The user's computer needs to be restarted"
    ],
    correct: 1,
    explanation: "Ping diagnostics: ping by hostname (ping google.com) tests: DNS resolution (can system resolve name to IP?), network connectivity (can reach destination?), ICMP allowed (firewall permits echo request/reply?). Ping by IP (ping 8.8.8.8) tests: network connectivity only (bypasses DNS). Scenario: IP works, hostname fails → DNS issue. Troubleshooting steps: 1) Check DNS server configuration (ipconfig /all shows DNS servers), 2) Try alternate DNS (8.8.8.8, 1.1.1.1), 3) Flush DNS cache (ipconfig /flushdns), 4) Test DNS directly (nslookup google.com). Common DNS issues: incorrect DNS servers, DNS server down, firewall blocking port 53, DNS cache poisoning, local hosts file override."
  },
  {
    id: 2,
    question: "A network administrator runs 'tracert 10.50.100.5' to troubleshoot connectivity to a remote server. The output shows successful hops through the first three routers, then 'Request timed out' at hop 4, continuing through hop 10 where the destination responds. What does this pattern indicate?",
    options: [
      "The network path is completely broken at hop 4",
      "Router at hop 4 is likely configured to not respond to ICMP TTL exceeded messages, but is still forwarding traffic properly",
      "The destination server is unreachable",
      "All routers after hop 4 are offline"
    ],
    correct: 1,
    explanation: "Traceroute/tracert operation: sends packets with incrementing TTL (Time To Live), each router decrements TTL, when TTL reaches 0, router sends 'ICMP TTL exceeded' message back, reveals each hop in path. Asterisks/timeouts in middle of trace: router not responding to ICMP (security policy, rate limiting), but still forwarding traffic (destination reachable = path works). Key indicators: Timeouts at beginning → problem close to source, Timeouts in middle, destination reached → routers configured to not respond (common), Timeouts at end, destination not reached → problem at/near destination. Traceroute limitations: 1) ICMP often blocked/rate-limited (security), 2) Load balancing (different paths per packet), 3) Doesn't test actual application. Successful destination response proves path exists despite intermediate timeouts."
  },
  {
    id: 3,
    question: "A technician runs 'ipconfig' on a Windows workstation and sees the IP address 169.254.50.100 with subnet mask 255.255.0.0. What does this IP address indicate about the network configuration?",
    options: [
      "The workstation has a valid static IP configuration",
      "The workstation received an APIPA (Automatic Private IP Addressing) address, indicating DHCP failure",
      "This is a normal corporate IP address range",
      "The workstation is configured with a public IP address"
    ],
    correct: 1,
    explanation: "APIPA (169.254.0.0/16): Windows automatic IP assignment when DHCP fails. Process: 1) Workstation boots, sends DHCP Discover, 2) No DHCP response received (timeout), 3) Windows assigns self-configured IP from 169.254.1.0 - 169.254.254.255, 4) Subnet mask 255.255.0.0, 5) No default gateway, no DNS. Limitations: link-local only (can't route beyond local subnet), no internet access (no gateway), limited functionality. Troubleshooting APIPA: 1) Verify DHCP server running, 2) Check network connectivity (cable, switch port), 3) Verify DHCP scope has available addresses, 4) Check DHCP relay (if server on different subnet), 5) Verify no rogue DHCP server blocking legitimate server, 6) Release/renew (ipconfig /release, ipconfig /renew). APIPA indicates: DHCP problem, not total network failure (Layer 1/2 might work). Quick fix: static IP temporarily (if allowed by policy)."
  },
  {
    id: 4,
    question: "A technician uses 'nslookup www.example.com' and receives 'Non-authoritative answer' with the correct IP address. What does 'non-authoritative answer' mean?",
    options: [
      "The DNS lookup failed completely",
      "The DNS response came from a cached result in a recursive DNS server, not directly from the authoritative DNS server for the domain",
      "The domain name doesn't exist",
      "The DNS server is misconfigured"
    ],
    correct: 1,
    explanation: "DNS query types: Authoritative answer: response from authoritative DNS server (the server responsible for that domain's records), definitive answer, directly from source. Non-authoritative answer: response from caching/recursive DNS server, previously queried and cached, faster but might be stale. Nslookup basics: nslookup example.com (uses default DNS server), nslookup example.com 8.8.8.8 (query specific DNS server), set type=MX (query specific record type). Interpreting results: Non-authoritative (normal—most queries use cache), Server failed (DNS server issue), NXDOMAIN (domain doesn't exist), SERVFAIL (DNS server problem), Timeout (network/firewall issue). Advanced nslookup: set debug (detailed output), set type=ANY (all records), server IP (change DNS server mid-session). Alternative: dig (Linux/Mac—more detailed, better for troubleshooting): dig example.com, dig @8.8.8.8 example.com +short."
  },
  {
    id: 5,
    question: "A network administrator needs to identify which process is listening on TCP port 445 on a Windows server. Which command provides this information?",
    options: [
      "ping -p 445",
      "tracert -port 445",
      "netstat -ano | findstr :445 (shows active connections, listening ports, and associated process IDs)",
      "ipconfig /showports"
    ],
    correct: 2,
    explanation: "Netstat options: netstat -a (all connections and listening ports), netstat -n (numerical addresses—no DNS resolution), netstat -o (show process ID - PID), netstat -b (show executable name—requires admin), netstat -r (routing table), netstat -s (protocol statistics). Common combinations: netstat -ano (all, numeric, with PIDs), netstat -an | findstr LISTEN (show only listening ports), netstat -an | findstr :80 (connections on port 80). Finding process from PID: netstat -ano shows PID, Task Manager → Details tab → find PID, or tasklist | findstr PID. Use cases: 1) Identify what's using a port (port conflict troubleshooting), 2) Find malware (unexpected connections, unknown processes), 3) Verify service listening (is service actually bound to port?), 4) Connection troubleshooting (is connection ESTABLISHED, TIME_WAIT, CLOSE_WAIT?). Linux equivalent: netstat, ss (modern replacement), lsof -i :445 (process on port 445)."
  },
  {
    id: 6,
    question: "A technician runs 'ipconfig /all' and notices the 'Default Gateway' field is blank on a workstation that cannot access the internet but can reach local resources. What is the likely cause?",
    options: [
      "The DNS server is misconfigured",
      "No default gateway is configured—the workstation cannot route traffic beyond the local subnet",
      "The subnet mask is incorrect",
      "The workstation has a virus"
    ],
    correct: 1,
    explanation: "Default gateway role: routes traffic destined for other networks, required for internet access, Layer 3 routing decision. Without gateway: workstation can reach local subnet (same broadcast domain), cannot reach other networks (no routing path), internet access impossible. ipconfig /all information: IP Address, Subnet Mask, Default Gateway, DNS Servers, DHCP Server (if DHCP-assigned), Physical Address (MAC), DHCP Lease times (Obtained, Expires). Troubleshooting missing gateway: 1) DHCP issue (should provide gateway), verify DHCP options configured, 2) Static IP misconfigured (forgotten gateway entry), 3) DHCP scope missing option 3 (default router). Testing gateway: ping gateway IP (is it reachable?), ping external IP like 8.8.8.8 (can route beyond local?). Resolution: DHCP (fix scope configuration, release/renew), static (add gateway manually). Common mistake: gateway on different subnet (must be on same subnet as workstation IP)."
  },
  {
    id: 7,
    question: "A technician uses 'arp -a' to view the ARP cache and notices multiple IP addresses mapping to the same MAC address. What could this indicate?",
    options: [
      "Normal operation with no issues",
      "Possible ARP poisoning attack, proxy ARP, or NAT device (multiple IPs sharing one MAC address)",
      "The ARP cache needs to be cleared",
      "All computers have the same MAC address"
    ],
    correct: 1,
    explanation: "ARP (Address Resolution Protocol): maps IP addresses to MAC addresses (Layer 3 to Layer 2), required for local network communication, cached for performance. ARP cache commands: arp -a (view cache), arp -d (delete entry), arp -s (add static entry). Multiple IPs to one MAC—possible causes: 1) Router/gateway (default gateway + other IPs), 2) Proxy ARP (router answering for other hosts), 3) NAT device (multiple public IPs, one MAC), 4) ARP poisoning attack (attacker claims multiple IPs), 5) Virtual IPs (HSRP, VRRP, CARP). Legitimate vs malicious: Router with multiple IPs (normal), Workstation IPs mapping to unexpected MAC (suspicious), Gateway MAC appearing for non-gateway IPs (potential spoofing). ARP poisoning detection: unexpected MAC for gateway, same MAC for multiple unrelated IPs, MAC not matching known device. Prevention: static ARP entries (impractical at scale), Dynamic ARP Inspection (switch feature), ARP monitoring tools, network segmentation."
  },
  {
    id: 8,
    question: "A network engineer needs to add a persistent static route on a Windows computer so packets destined for 10.50.0.0/16 go through gateway 192.168.1.254. Which command accomplishes this?",
    options: [
      "ping 10.50.0.0 -gateway 192.168.1.254",
      "route add 10.50.0.0 mask 255.255.0.0 192.168.1.254 -p (the -p flag makes the route persistent)",
      "ipconfig /setroute 10.50.0.0 192.168.1.254",
      "netstat -route add 10.50.0.0"
    ],
    correct: 1,
    explanation: "Route command: manages routing table, adds/removes/displays routes. Windows syntax: route add [destination] mask [netmask] [gateway] -p (-p = persistent, survives reboot). Examples: route add 10.50.0.0 mask 255.255.0.0 192.168.1.254 -p, route delete 10.50.0.0, route print (display routing table). Linux syntax: ip route add 10.50.0.0/16 via 192.168.1.254, route add -net 10.50.0.0/16 gw 192.168.1.254 (older). Use cases: 1) Multiple subnets via different gateways (split routing), 2) VPN routes (route specific traffic through VPN), 3) Lab/test environments (custom routing), 4) Site-to-site connections. Routing table: route print (Windows), ip route show (Linux), netstat -r (both). Persistent routes: -p flag (Windows), /etc/network/interfaces or systemd-networkd config (Linux). Troubleshooting: routing table order matters (most specific wins), gateway must be reachable (same subnet), metric affects route priority."
  },
  {
    id: 9,
    question: "A technician runs 'pathping' to a remote server and sees high packet loss at hop 5. What advantage does pathping have over tracert?",
    options: [
      "Pathping is faster than tracert",
      "Pathping combines traceroute and ping, providing per-hop packet loss and latency statistics over time",
      "Pathping works on Linux while tracert doesn't",
      "Pathping doesn't require ICMP"
    ],
    correct: 1,
    explanation: "Pathping (Windows): combines traceroute + extended ping, traces route (like tracert), then pings each hop repeatedly (typically 100 queries per hop), calculates packet loss and latency statistics per hop. Advantages over tracert: 1) Identifies problematic hops (which hop causes packet loss?), 2) Statistical analysis (not just single sample), 3) Intermittent problem detection (sampling over time). Output interpretation: Hop number, RTT (round-trip time), Source to Here (cumulative loss), This Node/Link (loss at specific hop), Address. High loss at specific hop: That hop's issue (router problem, congestion), Link between that hop and next (physical issue). Limitations: takes time (several minutes per hop), ICMP dependent (may be rate-limited/blocked), CPU intensive. Use cases: intermittent packet loss troubleshooting, identifying congestion points, validating network performance over time. Linux equivalent: mtr (my traceroute)—similar functionality, real-time updates."
  },
  {
    id: 10,
    question: "A user cannot connect to a web server by name (https://intranet.company.com) but can connect using the IP address (https://10.1.1.50). The technician runs 'nslookup intranet.company.com' and receives 'Server failed' error. What should be the next troubleshooting step?",
    options: [
      "Reinstall the operating system",
      "Check if the DNS server is reachable by pinging it, and verify DNS server address in ipconfig /all",
      "Replace the network cable",
      "Restart the web server"
    ],
    correct: 1,
    explanation: "DNS troubleshooting methodology: 1) Verify DNS server configuration (ipconfig /all shows configured DNS servers), 2) Test DNS server reachability (ping DNS server IP), 3) Test DNS functionality (nslookup domain DNS_IP), 4) Try alternate DNS server (8.8.8.8, 1.1.1.1), 5) Check local hosts file (C:\\Windows\\System32\\drivers\\etc\\hosts might override), 6) Flush DNS cache (ipconfig /flushdns), 7) Verify DNS service running on server. 'Server failed' indicates: DNS server unreachable (network issue, server down), DNS service not running, Firewall blocking port 53, Wrong DNS IP configured. Escalation path: if alternate DNS works (8.8.8.8) → corporate DNS server issue, if no DNS works → local network/firewall issue. Quick test: nslookup google.com 8.8.8.8 (query Google DNS directly—if works, confirms DNS protocol functional, corporate DNS is issue)."
  },
  {
    id: 11,
    question: "A technician runs 'ipconfig /release' followed by 'ipconfig /renew' on a workstation to refresh its DHCP lease. What is happening during the renew process?",
    options: [
      "The workstation deletes all network configuration",
      "The workstation performs DHCP DORA process (Discover, Offer, Request, Acknowledge) to obtain new IP configuration from DHCP server",
      "The workstation assigns itself a random IP address",
      "The workstation permanently loses its IP address"
    ],
    correct: 1,
    explanation: "DHCP release/renew process: ipconfig /release: client sends DHCP Release to server, IP address returned to pool, client has no IP (0.0.0.0), network connectivity lost temporarily. ipconfig /renew: initiates DHCP discovery, DORA process: Discover (broadcast 'I need an IP'), Offer (DHCP server offers IP), Request (client requests offered IP), Acknowledge (server confirms, provides IP + options). Result: new IP address (might be same or different), subnet mask, default gateway, DNS servers, lease duration. Use cases: 1) Troubleshooting DHCP issues (force fresh lease), 2) Obtaining new IP (previous lease had problems), 3) Testing DHCP server (verify functionality), 4) Network moves (different subnet, need new scope). Alternatives: ipconfig /renew (without release—extends existing lease if possible), Disable/enable adapter (forces full reset), Reboot (renews on boot). Caution: release loses connectivity—don't do remotely unless can physically access if renew fails."
  },
  {
    id: 12,
    question: "A technician needs to clear corrupted DNS cache entries on a Windows workstation. Which command should they use?",
    options: [
      "ipconfig /clear",
      "netstat -dns",
      "ipconfig /flushdns (clears the DNS resolver cache)",
      "ping /resetdns"
    ],
    correct: 2,
    explanation: "DNS cache management: ipconfig /displaydns (view cached entries), ipconfig /flushdns (clear cache), ipconfig /registerdns (re-register DNS records—mainly for servers). DNS cache purpose: performance (avoid repeated queries), reduced DNS server load, faster name resolution. Cache problems: 1) Stale entries (DNS changed, cache outdated), 2) Incorrect entries (DNS poisoning, misconfigurations), 3) Negative caching (cached 'not found' when domain now exists). When to flush: 1) DNS changes not taking effect (waiting for cache expiration), 2) Troubleshooting name resolution (eliminate cache as variable), 3) Suspected DNS poisoning, 4) After DNS configuration changes. Cache behavior: TTL (Time To Live) determines cache duration (set by authoritative DNS), Windows caches positive and negative responses, Cache survives network changes but not restart. Browser cache separate: flushdns doesn't clear browser DNS cache, browsers have their own DNS cache, may need browser restart for full DNS refresh."
  },
  {
    id: 13,
    question: "A network administrator uses 'hostname' command and sees 'WKST-HR-101'. They need to find the fully qualified domain name (FQDN). What additional information do they need?",
    options: [
      "The hostname command always shows the FQDN",
      "The DNS suffix/domain name—FQDN = hostname + domain (e.g., WKST-HR-101.company.local)",
      "The MAC address",
      "The default gateway address"
    ],
    correct: 1,
    explanation: "Hostname vs FQDN: Hostname: computer name only (WKST-HR-101), identifies device on local network, NetBIOS name. FQDN (Fully Qualified Domain Name): hostname + domain suffix (WKST-HR-101.company.local), globally unique, used for DNS resolution, hierarchical naming. Finding FQDN: Windows: hostname (shows hostname), ipconfig /all (shows 'Primary DNS Suffix'), systeminfo | findstr Domain (shows full computer name). Linux: hostname (often just hostname), hostname -f (FQDN), cat /etc/hostname, hostnamectl. Domain membership: Workgroup: computers have hostname, no domain, Peer-to-peer networking. Domain: computers joined to Active Directory domain, have FQDN, centralized management, DNS-based naming. DNS registration: domain-joined computers register FQDN in DNS, allows name resolution across enterprise, enables services (Kerberos, Exchange, etc.). Use cases: 1) Identifying computers in enterprise, 2) DNS troubleshooting, 3) Certificate validation (cert must match FQDN), 4) Remote administration."
  },
  {
    id: 14,
    question: "A technician attempts to test connectivity to a web server on port 443 using 'telnet webserver.com 443'. The command connects briefly then closes immediately. What does this indicate?",
    options: [
      "Port 443 is completely blocked and unreachable",
      "Port 443 is open and accepting connections—the immediate close is normal for HTTPS (SSL/TLS) when telnet cannot complete the SSL handshake",
      "The web server is offline",
      "Telnet is the wrong protocol for this test"
    ],
    correct: 1,
    explanation: "Telnet for port testing: telnet [host] [port] tests TCP port connectivity, not actual Telnet protocol, useful for testing any TCP service. Interpretation: Connection established then immediate close: port open, service running, service rejected telnet (SSL/TLS services do this). 'Could not open connection': port closed/filtered, firewall blocking, service not running, network issue. Connection hangs: port open but service not responding, firewall allowing SYN but blocking data. Text response visible: port open, service responding, successful test (HTTP, SMTP, POP3 show text). Limitations: telnet tests TCP only (not UDP), doesn't speak application protocols (HTTP, SSL/TLS), deprecated protocol (disabled by default on modern Windows). Alternatives: netcat (nc webserver.com 443), Test-NetConnection -ComputerName webserver.com -Port 443 (PowerShell), curl (tests actual HTTP/HTTPS), nmap (port scanner—proper tool for port testing). Best practice: use appropriate tool—telnet for quick TCP port tests, curl/browser for HTTPS testing, netcat for custom protocol testing."
  },
  {
    id: 15,
    question: "A technician troubleshooting slow network performance runs 'netstat -s' to view protocol statistics. They notice a high number of 'segments retransmitted' under TCP statistics. What does this indicate?",
    options: [
      "The network is performing optimally",
      "High TCP retransmissions indicate packet loss, network congestion, or unreliable links requiring packets to be resent",
      "The DNS server is misconfigured",
      "DHCP is not functioning properly"
    ],
    correct: 1,
    explanation: "netstat -s (statistics): displays protocol statistics, counters for TCP, UDP, ICMP, IP, shows errors, retransmissions, received/sent packets. Key TCP statistics: Segments Sent/Received (volume), Segments Retransmitted (packets lost, required resend—bad when high %), Failed Connection Attempts (application issues, firewall blocks), Reset Connections (abrupt terminations). High retransmissions causes: 1) Packet loss (congestion, failing hardware, wireless issues), 2) Network congestion (buffers full, drops packets), 3) Duplex mismatch (half/full mismatch causes collisions), 4) Faulty cables/connectors (physical layer errors), 5) Overloaded server/client (can't process fast enough). Baseline context important: 0.1% retransmission rate (excellent), 1-2% (acceptable), 5%+ (problem). Investigation: compare to baseline (is this abnormal?), check physical layer (cables, connectors, switch errors), verify duplex settings (should be auto or both same), monitor utilization (is link saturated?), check wireless conditions (signal strength, interference). Protocol statistics powerful for: identifying patterns (which protocol has issues?), quantifying problems (how bad is packet loss?), trend analysis (getting worse over time?)."
  }
];

// Export for use in quiz component
export default lesson28Quiz;