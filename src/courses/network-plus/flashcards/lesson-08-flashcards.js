export const lesson8Flashcards = [
  {
    id: 1,
    front: "What is DNS?",
    back: "Translates domain names (google.com) into IP addresses computers use."
  },
  {
    id: 2,
    front: "What does an A Record do?",
    back: "Maps hostname to IPv4 address. Most common DNS record. Example: google.com → 142.250.185.46"
  },
  {
    id: 3,
    front: "What does an AAAA Record do?",
    back: "Maps hostname to IPv6 address. 'Quad-A record'. Example: google.com → 2607:f8b0:4004:c07::71"
  },
  {
    id: 4,
    front: "What is a CNAME Record?",
    back: "Canonical Name - alias pointing to another domain. Example: www.example.com → example.com. Avoids duplicate A records."
  },
  {
    id: 5,
    front: "What is an MX Record?",
    back: "Mail Exchange - specifies mail servers for domain. Priority numbers (lower = higher priority) for redundancy."
  },
  {
    id: 6,
    front: "What is a PTR Record?",
    back: "Pointer - reverse DNS lookup (IP to hostname). Example: 8.8.8.8 → dns.google. Essential for mail servers."
  },
  {
    id: 7,
    front: "What is a TXT Record?",
    back: "Stores text data. Used for domain verification, SPF/DKIM/DMARC email security, site verification."
  },
  {
    id: 8,
    front: "What is an NS Record?",
    back: "Name Server - identifies authoritative DNS servers for domain. Multiple NS records provide redundancy."
  },
  {
    id: 9,
    front: "What is an SOA Record?",
    back: "Start of Authority - admin info: primary name server, email, serial, timers. One SOA per zone."
  },
  {
    id: 10,
    front: "DNS hierarchy?",
    back: "Root Servers (.) → Top-Level Domain (.com, .org) → Authoritative Name Servers. Queries flow root to specific domain."
  },
  {
    id: 11,
    front: "Recursive DNS Query?",
    back: "Client asks server for complete answer. Server does all work—contacts root, TLD, authoritative servers. Most common for end users."
  },
  {
    id: 12,
    front: "Iterative DNS Query?",
    back: "Server provides referrals to next servers instead of doing all work. Client follows referrals. How DNS servers communicate."
  },
  {
    id: 13,
    front: "What is DNS Caching?",
    back: "Temporarily storing DNS results based on TTL to speed up future lookups. Both devices and servers cache."
  },
  {
    id: 14,
    front: "What is TTL in DNS?",
    back: "Time To Live - seconds a record can be cached before expiring. Short TTL = frequently changing, long TTL = stable."
  },
  {
    id: 15,
    front: "What does nslookup do?",
    back: "Command-line DNS query tool. Looks up A, AAAA, MX, TXT, NS records. Example: nslookup -type=MX google.com"
  },
  {
    id: 16,
    front: "What is DHCP?",
    back: "Dynamic Host Configuration Protocol - automatically assigns IP addresses and network config. Eliminates manual configuration."
  },
  {
    id: 17,
    front: "What is the DORA Process?",
    back: "Discover, Offer, Request, Acknowledge - 4-step DHCP IP assignment process."
  },
  {
    id: 18,
    front: "DHCP Discover?",
    back: "Device broadcasts 'I need an IP!' to 255.255.255.255. First step of DORA."
  },
  {
    id: 19,
    front: "DHCP Offer?",
    back: "Server responds with IP, mask, gateway, DNS, lease time. Second step of DORA."
  },
  {
    id: 20,
    front: "DHCP Request?",
    back: "Device broadcasts 'I'll take that IP!' (in case multiple servers). Third step of DORA."
  },
  {
    id: 21,
    front: "DHCP Acknowledge?",
    back: "Server confirms 'That IP is yours for X hours.' Device configures itself. Final DORA step."
  },
  {
    id: 22,
    front: "What is a DHCP Scope?",
    back: "Range of IPs server can assign. Example: 192.168.1.100-200. Excludes static assignments."
  },
  {
    id: 23,
    front: "What is a DHCP Lease Time?",
    back: "How long device keeps IP before renewal. Typical: 8 hours to 7 days. Renews at half lease. Prevents IP waste."
  },
  {
    id: 24,
    front: "What is a DHCP Reservation?",
    back: "Same IP to specific device (by MAC) every time. Device uses DHCP but gets consistent IP. For servers/printers."
  },
  {
    id: 25,
    front: "What are DHCP Options?",
    back: "Extra settings: Option 3 (gateway), 6 (DNS), 15 (domain name), 42 (NTP), 51 (lease time)."
  },
  {
    id: 26,
    front: "What is DHCP Relay / IP Helper?",
    back: "Router forwards DHCP broadcasts to server in different subnet. Solves broadcasts not crossing routers. One server for multiple subnets."
  },
  {
    id: 27,
    front: "What does 169.254.x.x IP mean?",
    back: "APIPA - device couldn't reach DHCP server, self-assigned IP. Indicates DHCP failure. Check connectivity/server/scope."
  },
  {
    id: 28,
    front: "What is NTP?",
    back: "Network Time Protocol - synchronizes clocks. Critical for Kerberos, SSL certs, logs, 2FA."
  },
  {
    id: 29,
    front: "Why is accurate time important?",
    back: "Kerberos fails if >5 min difference. SSL certs have time validity. Logs need sync. 2FA codes are time-based."
  },
  {
    id: 30,
    front: "NTP Stratum 0?",
    back: "Ultimate time source: atomic clocks and GPS. Hardware devices, not network accessible."
  },
  {
    id: 31,
    front: "NTP Stratum 1?",
    back: "Primary servers directly connected to Stratum 0. Highest accuracy (microsecond). Example: time.nist.gov"
  },
  {
    id: 32,
    front: "NTP Stratum 2-15?",
    back: "Secondary servers. Each syncs to lower stratum. Most devices use 2-3. Lower stratum = more accurate."
  },
  {
    id: 33,
    front: "NTP Stratum 16?",
    back: "Unsynchronized - too many hops from source. Device not in sync."
  },
  {
    id: 34,
    front: "Common public NTP servers?",
    back: "time.nist.gov, time.windows.com, pool.ntp.org, time.google.com, time.cloudflare.com"
  },
  {
    id: 35,
    front: "What is IPAM?",
    back: "IP Address Management - centralized tracking of IP allocation. Static IPs, DHCP, DNS, subnets, conflicts. Essential for 100+ devices."
  },
  {
    id: 36,
    front: "What does IPAM track?",
    back: "Static IPs, DHCP scopes/leases, DNS records, subnets/VLANs, conflicts, available/used addresses, capacity, audit trails."
  },
  {
    id: 37,
    front: "Why IPAM vs spreadsheets?",
    back: "Centralized, automated conflict detection, DNS/DHCP integration, audit trails, capacity planning. Spreadsheets fail at scale (100+ devices)."
  },
  {
    id: 38,
    front: "Query DNS on Windows?",
    back: "nslookup [domain] or nslookup -type=[record] [domain]. Example: nslookup -type=MX google.com"
  },
  {
    id: 39,
    front: "Flush DNS cache on Windows?",
    back: "ipconfig /flushdns - clears cached DNS. Used when cache is stale/corrupted. Forces fresh lookups."
  },
  {
    id: 40,
    front: "Show DHCP info on Windows?",
    back: "ipconfig /all - shows DHCP server, lease times, DNS, gateway, all DHCP options."
  },
  {
    id: 41,
    front: "Release and renew DHCP on Windows?",
    back: "ipconfig /release (release lease), ipconfig /renew (request new). Manually triggers DORA for troubleshooting."
  },
  {
    id: 42,
    front: "A vs AAAA records?",
    back: "A: hostname to IPv4 (32-bit). AAAA: hostname to IPv6 (128-bit). Same purpose, different IP versions."
  },
  {
    id: 43,
    front: "When use CNAME vs A record?",
    back: "CNAME when multiple hostnames point to same target. Change target once instead of updating multiple A records. Used for CDNs."
  },
  {
    id: 44,
    front: "Why multiple MX records?",
    back: "Redundancy. If primary fails (priority 10), email routes to backups (20, 30). Ensures delivery during failures."
  },
  {
    id: 45,
    front: "DHCP scope exhaustion?",
    back: "New devices can't get IPs, fall back to APIPA (169.254.x.x). Solution: expand scope, reduce lease time, add servers."
  },
  {
    id: 46,
    front: "Multiple DHCP servers on one network?",
    back: "Yes, with non-overlapping scopes. 80/20 rule common: Server 1 (.100-.199), Server 2 (.200-.254). Provides redundancy."
  },
  {
    id: 47,
    front: "DHCP vs Static IP?",
    back: "DHCP: automatic, temporary, scalable. Static: manual, permanent, for servers/infrastructure. DHCP reservations combine both."
  },
  {
    id: 48,
    front: "Why DNS resolution fails?",
    back: "Server unreachable, misconfigured, firewall blocking port 53, stale cache, wrong DNS IP, domain doesn't exist."
  },
  {
    id: 49,
    front: "What is dig command?",
    back: "DNS lookup tool (Mac/Linux) with detailed info: TTL, record types, servers. dig +trace shows full resolution path."
  },
  {
    id: 50,
    front: "Relationship: DNS, DHCP, NTP?",
    back: "DHCP assigns IPs and DNS servers. DNS resolves hostnames including NTP servers. NTP syncs time for all. Work together for auto-config."
  }
];

export default lesson8Flashcards;