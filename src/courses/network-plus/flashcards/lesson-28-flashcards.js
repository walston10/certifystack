// Flashcards for Lesson 28: Command-Line Tools

export const lesson28Flashcards = [
  {
    id: 1,
    front: "What is ping and what does it test?",
    back: "Ping tests IP connectivity using ICMP echo request/reply (Layer 3). Verifies: device reachable, network path exists, latency (round-trip time). Usage: 'ping 8.8.8.8' or 'ping google.com'. Shows: packets sent/received, packet loss %, min/avg/max time (ms). Uses: basic connectivity test, measure latency, verify DNS (if using hostname). Default: 4 packets (Windows), continuous (Linux). TTL shows hops remaining. First troubleshooting tool - if ping fails, start at Physical layer."
  },
  {
    id: 2,
    front: "What are common ping options and what do they do?",
    back: "Windows: ping -t (continuous until stopped), ping -n <count> (send specific number), ping -l <size> (packet size in bytes), ping -a (resolve hostname). Linux/Mac: ping -c <count> (count), ping -s <size> (packet size), ping -i <interval> (seconds between). Examples: 'ping -t 8.8.8.8' (continuous), 'ping -n 10 google.com' (10 packets), 'ping -l 1500 router' (test MTU). Ctrl+C stops continuous ping."
  },
  {
    id: 3,
    front: "What is tracert/traceroute and what does it show?",
    back: "Tracert (Windows) / traceroute (Linux/Mac) shows path packets take through network (all hops from source to destination). Lists: each router/hop, IP address, three response times. Identifies: where connectivity fails (first * * * is problem), slow hops (high latency), routing path. Uses: TTL incrementation (1, 2, 3...). Windows: ICMP. Linux: UDP (default) or ICMP. Usage: 'tracert google.com'. Max 30 hops default. Shows network topology."
  },
  {
    id: 4,
    front: "What does * * * mean in traceroute output?",
    back: "* * * means: no response from that hop (request timeout). Causes: firewall blocking ICMP/UDP, router configured not to respond, packet loss, hop down. NOT always a problem: many routers silently forward without responding (security). If all later hops show * * *: problem at that point (connectivity lost). If just one hop: likely configured to not respond (normal). Look for pattern: consistent * * * vs random timeouts."
  },
  {
    id: 5,
    front: "What is ipconfig (Windows) / ifconfig (Linux/Mac) and what does it show?",
    back: "Displays IP configuration of network interfaces. Shows: IP address, subnet mask, default gateway, DHCP enabled, MAC address (with /all). Windows: ipconfig. Linux/Mac: ifconfig (deprecated, use 'ip addr'). Basic 'ipconfig': minimal info. 'ipconfig /all': detailed (DNS servers, DHCP lease, MAC). First command when troubleshooting IP issues. Verify: correct IP/mask/gateway. APIPA (169.254.x.x) = DHCP failure."
  },
  {
    id: 6,
    front: "What are key ipconfig commands?",
    back: "ipconfig: basic IP info. ipconfig /all: detailed info (DNS, DHCP, MAC). ipconfig /release: release DHCP lease (disconnect). ipconfig /renew: request new DHCP lease. ipconfig /flushdns: clear DNS cache. ipconfig /displaydns: show DNS cache. Common troubleshooting: /release then /renew (get new IP). /flushdns (resolve DNS issues). Must know these for exam - very common troubleshooting steps!"
  },
  {
    id: 7,
    front: "What is nslookup and when do you use it?",
    back: "Nslookup queries DNS servers to resolve hostnames to IPs (or reverse). Tests: DNS functionality, which DNS server responding, DNS records. Usage: 'nslookup google.com' (query default DNS), 'nslookup google.com 8.8.8.8' (query specific DNS server). Shows: DNS server used, IP address returned. Interactive mode: type 'nslookup' enter, then queries. Use when: can ping IP but not hostname, verify DNS working, check DNS records. Alternative: 'dig' (Linux, more detailed)."
  },
  {
    id: 8,
    front: "What is netstat and what information does it provide?",
    back: "Netstat shows network statistics and active connections. Displays: active TCP/UDP connections, listening ports, routing table, interface statistics. Usage: 'netstat' (basic), 'netstat -a' (all connections + listening), 'netstat -n' (numerical IPs/ports, no DNS lookup), 'netstat -r' (routing table), 'netstat -ano' (with PIDs - Windows). Uses: identify open connections, find which process uses port, troubleshoot connectivity, detect malware (unexpected connections)."
  },
  {
    id: 9,
    front: "What are important netstat options?",
    back: "Windows: netstat -a (all connections and listening ports), netstat -n (numerical addresses - faster, no DNS), netstat -o (show process IDs - PID), netstat -r (routing table), netstat -s (statistics per protocol), netstat -ano (all, numerical, with PIDs - most useful!). Linux: similar + netstat -tulnp (TCP, UDP, listening, numerical, programs). Use -ano to find: what program has port open, unexpected connections, malware. Check PID in Task Manager."
  },
  {
    id: 10,
    front: "What is the arp command and what does it do?",
    back: "ARP shows/manages ARP cache (IP to MAC address mappings - Layer 2 to Layer 3 mapping). Usage: 'arp -a' (view ARP table), 'arp -d' (delete entry/clear cache), 'arp -s' (add static entry). Shows: IP addresses, MAC addresses, type (dynamic/static). Use when: connectivity issues on local network, suspect ARP poisoning, verify MAC address, troubleshooting Layer 2. ARP cache temporary: entries age out. Cleared on reboot."
  },
  {
    id: 11,
    front: "What is the route command and what does it manage?",
    back: "Route displays and modifies routing table (Layer 3 routing decisions). Usage: 'route print' (Windows) or 'route -n' (Linux) - view routing table, 'route add' (add static route), 'route delete' (remove route). Shows: destination networks, subnet masks, gateways, metrics, interfaces. Use when: testing routing, add static routes, troubleshoot Layer 3, multiple NICs/gateways. Static routes persist on reboot (if configured). Understanding routing table critical for troubleshooting."
  },
  {
    id: 12,
    front: "What does a routing table entry contain?",
    back: "Each route entry shows: Network Destination (target network), Netmask (subnet mask), Gateway (next hop router or 'On-link' for direct), Interface (local NIC IP), Metric (cost - lower preferred). Special routes: 0.0.0.0 (default route - matches anything), 127.0.0.1 (loopback), 255.255.255.255 (broadcast). Router uses longest prefix match. Default route: last resort when no specific route matches. Multiple routes: lowest metric wins."
  },
  {
    id: 13,
    front: "What is the hostname command?",
    back: "Hostname displays computer's hostname (network name). Usage: 'hostname' (show name), 'hostname <newname>' (change name - requires admin). Simple command, verifies: correct computer, DNS name resolution, host identification. Use in: scripts, documentation, verifying remote connections. Hostname vs FQDN: hostname = 'server1', FQDN = 'server1.company.com'. Quick identity check. Useful when: managing multiple systems, remote troubleshooting."
  },
  {
    id: 14,
    front: "What is pathping (Windows) and what does it provide?",
    back: "Pathping combines ping and tracert: shows path PLUS packet loss per hop. Usage: 'pathping <destination>'. Process: traces route (like tracert), then pings each hop 100 times. Shows: latency and packet loss percentage per hop. Takes 5+ minutes (thorough testing). Use when: intermittent connectivity, identifying lossy links, performance issues. Better than tracert: shows WHERE packets lost. More detailed than ping. Best for: WAN troubleshooting, ISP issues."
  },
  {
    id: 15,
    front: "What is mtr (Linux/Mac) and how does it differ from pathping?",
    back: "MTR (My Traceroute) is continuous traceroute with statistics. Like pathping but real-time and continuous. Usage: 'mtr <destination>'. Shows: all hops, live updates, packet loss %, latency (best/avg/worst). Runs continuously until stopped (Ctrl+C). Better visualization than pathping. Linux tool (available for Windows via download). Use for: real-time path monitoring, intermittent issues, performance analysis. Advantage: see problems as they occur."
  },
  {
    id: 16,
    front: "What is nbtstat (Windows) and when do you use it?",
    back: "Nbtstat shows NetBIOS over TCP/IP statistics. Usage: 'nbtstat -a <computer>' (remote machine NetBIOS names), 'nbtstat -n' (local NetBIOS names), 'nbtstat -c' (NetBIOS cache). Legacy protocol but still used: file sharing, older Windows networks. Shows: computer name, domain, MAC address. Use for: Windows networking issues, name resolution (pre-DNS), troubleshooting file shares. Less relevant in modern networks (DNS replaced NetBIOS) but exam topic."
  },
  {
    id: 17,
    front: "What is dig (Linux/Mac) and how does it differ from nslookup?",
    back: "Dig (Domain Information Groper) is powerful DNS lookup tool (more detailed than nslookup). Usage: 'dig google.com', 'dig @8.8.8.8 google.com' (specific DNS server), 'dig google.com MX' (specific record type). Shows: detailed query/response, flags, TTL, authoritative servers, query time. More verbose and informative than nslookup. Network admins prefer dig. Linux/Mac default (Windows: install BIND tools). Better for: troubleshooting DNS, checking records, understanding DNS behavior."
  },
  {
    id: 18,
    front: "What is curl (Linux/Mac/Windows) and how is it used?",
    back: "Curl transfers data using URLs (HTTP, HTTPS, FTP, etc.). Usage: 'curl http://example.com' (fetch webpage), 'curl -I http://example.com' (headers only), 'curl -o file.txt http://example.com/file.txt' (download). Tests: web server connectivity, API endpoints, download files. Shows: response code, headers, content. Use when: troubleshooting web services, testing APIs, verifying HTTP/HTTPS. Alternative: wget (download focus). Command-line HTTP client."
  },
  {
    id: 19,
    front: "What is telnet used for in modern troubleshooting?",
    back: "Telnet (insecure) now mainly used to TEST PORT CONNECTIVITY. Usage: 'telnet <host> <port>' (e.g., 'telnet mail.server.com 25'). Tests: is port open, is service listening, can reach service. Success: connection established (blank screen or service banner). Failure: connection refused or timeout. NOT for: remote shell (use SSH - secure). Use when: testing email (25), web (80, 443), custom ports. Quick port check. Modern troubleshooting only - don't use for actual remote access."
  },
  {
    id: 20,
    front: "What is tcpdump (Linux/Mac) and when do you use it?",
    back: "Tcpdump captures packets at command line (like Wireshark CLI). Usage: 'tcpdump -i eth0' (capture on interface), 'tcpdump port 80' (filter HTTP), 'tcpdump host 192.168.1.1' (specific host), 'tcpdump -w file.pcap' (save to file). Requires: root/admin privileges. Shows: packet headers, sources, destinations. Use when: deep packet analysis needed, GUI not available, server troubleshooting. More powerful: combine with filters. Wireshark can open tcpdump files (.pcap)."
  },
  {
    id: 21,
    front: "Quick scenario: User says 'internet is down'. What commands do you run first?",
    back: "1) ipconfig /all: verify IP address, gateway, DNS (check for APIPA 169.254.x.x). 2) ping <gateway>: test local connectivity (Layer 3 to router). 3) ping 8.8.8.8: test internet connectivity (Layer 3 to internet). 4) ping google.com: test DNS (can resolve names?). 5) tracert google.com: if ping works but slow, trace path. This sequence: isolates problem layer by layer. Tests: IP config → local → internet → DNS → routing."
  },
  {
    id: 22,
    front: "How do you test if DHCP is working?",
    back: "Commands: 1) ipconfig /all: check if DHCP enabled and IP obtained (if 169.254.x.x = DHCP failed - APIPA). 2) ipconfig /release: release current IP. 3) ipconfig /renew: request new IP from DHCP. Success: new IP in correct subnet. Failure: APIPA address or error message. Check: DHCP server reachable, scope not exhausted, DHCP relay configured (if different subnet), no rogue DHCP. Process tests: DORA (Discover, Offer, Request, Acknowledge)."
  },
  {
    id: 23,
    front: "How do you identify what process is using a specific port?",
    back: "Windows: 'netstat -ano' then find port, note PID, open Task Manager → Details, find PID. Or: 'netstat -ano | findstr :<port>' (e.g., 'netstat -ano | findstr :80'). Linux: 'netstat -tulnp' shows program names with ports, or 'lsof -i :<port>'. Use when: port conflict ('port already in use'), identify malware (unexpected connections), troubleshoot services. PID → Task Manager/top → identify application. Kill process if needed."
  },
  {
    id: 24,
    front: "What does TTL (Time To Live) tell you in ping output?",
    back: "TTL is hop counter preventing routing loops (decremented at each router). Starting values: Windows=128, Linux=64, Cisco=255. Returned TTL shows: approximate hops to destination. Example: ping returns TTL=117, likely Windows (128-11=117 → ~11 hops). Low TTL (<10 remaining): many hops, slow route. TTL=0: packet dropped, destination unreachable. Use: estimate distance, identify OS, troubleshooting loops (TTL expires). Not exact science but useful clue."
  },
  {
    id: 25,
    front: "How do you troubleshoot DNS issues with command-line tools?",
    back: "1) ping <hostname>: can name resolve? 2) nslookup <hostname>: which DNS server, what IP returned. 3) nslookup <hostname> 8.8.8.8: test alternate DNS (if works, your DNS broken). 4) ipconfig /all: verify DNS server configured correctly. 5) ipconfig /flushdns: clear DNS cache (stale entries?). 6) ping <IP address>: verify connectivity separate from DNS. Pattern: if IP works but hostname doesn't = DNS problem."
  },
  {
    id: 26,
    front: "What information does 'ipconfig /all' provide that basic 'ipconfig' doesn't?",
    back: "Additional info: DNS servers, DHCP server IP, DHCP lease obtained/expires times, MAC address (Physical Address), DHCP enabled (Yes/No), DNS suffix, NetBIOS over TCP/IP status, description/manufacturer of adapter. Critical for troubleshooting: see ALL network settings, identify misconfigurations, check DHCP vs static, verify DNS servers, note MAC address. Always use /all for thorough troubleshooting. Basic ipconfig: just IP, mask, gateway."
  },
  {
    id: 27,
    front: "How do you use ping to test connectivity at different layers?",
    back: "Layer tests: 1) ping 127.0.0.1 (loopback - tests TCP/IP stack on local machine). 2) ping <own IP> (tests NIC and driver). 3) ping <gateway> (tests local network/Layer 2/3). 4) ping <remote IP> (tests routing/WAN). 5) ping <hostname> (tests DNS/Layer 7). Progressive testing: identifies where failure occurs. Start simple (loopback), work outward. Each successful ping: eliminates that layer as problem."
  },
  {
    id: 28,
    front: "What does 'Destination host unreachable' vs 'Request timed out' mean in ping?",
    back: "'Destination host unreachable': router/gateway knows route doesn't exist, actively rejects (ICMP error returned). Routing problem, interface down, no route to network. 'Request timed out': no response (packet dropped silently). Firewall blocking ICMP, host down, network congestion. Unreachable = definitive 'no', timeout = 'silence'. Timeout could also mean: ICMP blocked by firewall (security). Unreachable is more definitive problem."
  },
  {
    id: 29,
    front: "How do you verify if a firewall is blocking connectivity?",
    back: "Tests: 1) ping specific IP (if ICMP allowed through firewall). 2) telnet <host> <port> (test specific port - 'telnet server 443'). Success = connected, failure = blocked. 3) curl/wget to HTTP/HTTPS (application layer test). 4) tracert: see where packets stop (firewall hop?). 5) Check from both sides: can destination reach source? 6) Temporarily disable firewall (test only!). Pattern: Layer 3 works (ping) but application fails = likely firewall rule blocking port."
  },
  {
    id: 30,
    front: "Speed drill: Match command to purpose - ping, tracert, ipconfig /all, nslookup, netstat -ano, arp -a",
    back: "ping: test connectivity/latency. tracert: show network path. ipconfig /all: display IP configuration. nslookup: query DNS. netstat -ano: show connections/ports/PIDs. arp -a: show IP-to-MAC mappings. Know which tool for which problem - critical for exam!"
  }
];