// Flashcards for Lesson 28: Command-Line Tools (SHORTENED)

export const lesson28Flashcards = [
  {
    id: 1,
    front: "What is ping and what does it test?",
    back: "Tests IP connectivity using ICMP echo request/reply. Shows if device reachable, packet loss %, and latency (RTT). Usage: 'ping 8.8.8.8' or 'ping google.com'."
  },
  {
    id: 2,
    front: "Common ping options?",
    back: "Windows: -t (continuous), -n <count> (number of packets), -l <size> (packet size). Linux: -c <count>, -s <size>. Ctrl+C stops."
  },
  {
    id: 3,
    front: "What is tracert/traceroute?",
    back: "Shows path packets take through network - lists each router hop, IP, and response times. Identifies where connectivity fails. Usage: 'tracert google.com'."
  },
  {
    id: 4,
    front: "What does * * * mean in traceroute?",
    back: "No response from that hop. Could be firewall blocking ICMP/UDP, router not responding, or packet loss. If all later hops show * * * = problem at that point."
  },
  {
    id: 5,
    front: "What is ipconfig/ifconfig?",
    back: "Displays IP configuration. Shows IP address, subnet mask, default gateway. Windows: ipconfig. Linux: ifconfig (deprecated, use 'ip addr')."
  },
  {
    id: 6,
    front: "Key ipconfig commands?",
    back: "ipconfig /all (detailed info), /release (drop DHCP), /renew (get new IP), /flushdns (clear DNS cache). Common fix: /release then /renew."
  },
  {
    id: 7,
    front: "What is nslookup?",
    back: "Queries DNS to resolve hostnames to IPs. Tests DNS functionality. Usage: 'nslookup google.com' or 'nslookup google.com 8.8.8.8' (specific DNS server)."
  },
  {
    id: 8,
    front: "What is netstat?",
    back: "Shows network statistics and active connections. Displays TCP/UDP connections, listening ports, routing table. Usage: 'netstat -a' (all connections)."
  },
  {
    id: 9,
    front: "Important netstat options?",
    back: "netstat -a (all connections), -n (numerical IPs), -o (process IDs), -r (routing table), -ano (all, numerical, with PIDs - most useful)."
  },
  {
    id: 10,
    front: "What is the arp command?",
    back: "Shows/manages ARP cache (IP to MAC mappings). Usage: 'arp -a' (view table), 'arp -d' (clear cache). Use for Layer 2 troubleshooting."
  },
  {
    id: 11,
    front: "What is the route command?",
    back: "Displays/modifies routing table. Usage: 'route print' (Windows) or 'route -n' (Linux) to view. 'route add' to add static routes."
  },
  {
    id: 12,
    front: "What's in a routing table entry?",
    back: "Network Destination, Netmask, Gateway (next hop), Interface, Metric (cost). Special: 0.0.0.0 = default route, 127.0.0.1 = loopback."
  },
  {
    id: 13,
    front: "What is the hostname command?",
    back: "Displays computer's hostname. Usage: 'hostname'. Simple identity check useful for managing multiple systems."
  },
  {
    id: 14,
    front: "What is pathping (Windows)?",
    back: "Combines ping + tracert - shows path AND packet loss per hop. Takes 5+ minutes (pings each hop 100 times). Best for identifying lossy links."
  },
  {
    id: 15,
    front: "What is mtr (Linux/Mac)?",
    back: "Continuous traceroute with real-time statistics. Like pathping but live updates. Shows packet loss % and latency per hop. Runs until stopped (Ctrl+C)."
  },
  {
    id: 16,
    front: "What is nbtstat (Windows)?",
    back: "Shows NetBIOS over TCP/IP statistics. Legacy but still on exam. Usage: 'nbtstat -a <computer>' (remote names), 'nbtstat -n' (local names)."
  },
  {
    id: 17,
    front: "What is dig?",
    back: "DNS lookup tool (more detailed than nslookup). Linux/Mac. Usage: 'dig google.com'. Shows detailed query/response, TTL, authoritative servers."
  },
  {
    id: 18,
    front: "What is curl used for?",
    back: "Transfers data using URLs (HTTP, HTTPS, FTP). Usage: 'curl http://example.com'. Tests web server connectivity, APIs, downloads files."
  },
  {
    id: 19,
    front: "Modern use of telnet?",
    back: "Test port connectivity (NOT remote access - use SSH). Usage: 'telnet mail.server.com 25'. Success = connection established. Quick port check."
  },
  {
    id: 20,
    front: "What is tcpdump?",
    back: "Captures packets at command line (Wireshark CLI). Usage: 'tcpdump -i eth0', 'tcpdump port 80'. Saves to .pcap files. Requires root."
  },
  {
    id: 21,
    front: "User says 'internet is down'. What commands first?",
    back: "1) ipconfig /all (check IP/gateway/DNS), 2) ping gateway (local OK?), 3) ping 8.8.8.8 (internet OK?), 4) ping google.com (DNS OK?)."
  },
  {
    id: 22,
    front: "How to test if DHCP is working?",
    back: "ipconfig /all (check for APIPA 169.254.x.x), then ipconfig /release and /renew. Success = new IP in correct subnet. Failure = APIPA."
  },
  {
    id: 23,
    front: "How to identify what process uses a port?",
    back: "Windows: 'netstat -ano' then find port, note PID, check Task Manager. Or: 'netstat -ano | findstr :<port>'. Linux: 'netstat -tulnp'."
  },
  {
    id: 24,
    front: "What does TTL tell you in ping output?",
    back: "Hop counter preventing loops. Starting: Windows=128, Linux=64, Cisco=255. Returned TTL shows approximate hops. Low TTL = many hops."
  },
  {
    id: 25,
    front: "How to troubleshoot DNS with command-line?",
    back: "1) ping hostname (resolves?), 2) nslookup hostname (which DNS?), 3) nslookup hostname 8.8.8.8 (test alternate), 4) ipconfig /flushdns (clear cache)."
  },
  {
    id: 26,
    front: "What extra info does 'ipconfig /all' provide?",
    back: "DNS servers, DHCP server, lease times, MAC address, DHCP enabled/disabled, DNS suffix. Basic ipconfig only shows IP/mask/gateway."
  },
  {
    id: 27,
    front: "How to use ping to test different layers?",
    back: "1) ping 127.0.0.1 (TCP/IP stack), 2) ping own IP (NIC), 3) ping gateway (local network), 4) ping remote IP (routing), 5) ping hostname (DNS)."
  },
  {
    id: 28,
    front: "'Destination unreachable' vs 'Request timed out'?",
    back: "Unreachable = router actively rejects (no route exists). Timeout = no response (firewall blocking ICMP or host down). Unreachable more definitive."
  },
  {
    id: 29,
    front: "How to verify if firewall is blocking?",
    back: "1) ping IP (ICMP allowed?), 2) telnet host port (specific port open?), 3) tracert (where stops?). If ping works but app fails = likely firewall."
  },
  {
    id: 30,
    front: "Match: ping / tracert / ipconfig /all / nslookup / netstat -ano / arp -a",
    back: "ping = connectivity test. tracert = show path. ipconfig = IP config. nslookup = DNS query. netstat = connections/PIDs. arp = IP-to-MAC table."
  }
];