export const lesson8Flashcards = [
  {
    id: 1,
    front: "What is DNS?",
    back: "Domain Name System - translates human-readable domain names (like google.com) into IP addresses that computers use to communicate."
  },
  {
    id: 2,
    front: "What does an A Record do?",
    back: "Maps a hostname to an IPv4 address. Most common DNS record type. Example: google.com → 142.250.185.46"
  },
  {
    id: 3,
    front: "What does an AAAA Record do?",
    back: "Maps a hostname to an IPv6 address. IPv6 equivalent of A record. Pronounced 'quad-A record'. Example: google.com → 2607:f8b0:4004:c07::71"
  },
  {
    id: 4,
    front: "What is a CNAME Record?",
    back: "Canonical Name - creates an alias that points to another domain name. Example: www.example.com → example.com. Allows redirection without duplicate A records."
  },
  {
    id: 5,
    front: "What is an MX Record?",
    back: "Mail Exchange record - specifies which mail servers handle email for a domain. Includes priority numbers (lower = higher priority) for redundancy."
  },
  {
    id: 6,
    front: "What is a PTR Record?",
    back: "Pointer record - performs reverse DNS lookup (IP address to hostname). Example: 8.8.8.8 → dns.google. Essential for mail servers to avoid spam filters."
  },
  {
    id: 7,
    front: "What is a TXT Record?",
    back: "Stores arbitrary text data. Used for domain verification, SPF/DKIM/DMARC email security records, and site verification. Example: 'v=spf1 include:_spf.google.com ~all'"
  },
  {
    id: 8,
    front: "What is an NS Record?",
    back: "Name Server record - identifies which DNS servers are authoritative for a domain. Points to servers that have the actual DNS records. Multiple NS records provide redundancy."
  },
  {
    id: 9,
    front: "What is an SOA Record?",
    back: "Start of Authority - contains administrative info about a DNS zone: primary name server, admin email, serial number, refresh timers. Only one SOA per zone."
  },
  {
    id: 10,
    front: "What is the DNS hierarchy?",
    back: "Root Servers (.) → Top-Level Domain servers (.com, .org) → Authoritative Name Servers (specific domains). Queries flow from root down to find answers."
  },
  {
    id: 11,
    front: "What is a Recursive DNS Query?",
    back: "Client asks DNS server to return the complete answer. Server does all the work - contacts root, TLD, and authoritative servers. Most common for end users."
  },
  {
    id: 12,
    front: "What is an Iterative DNS Query?",
    back: "DNS server provides referrals to next servers in chain instead of doing all the work. Client follows referrals. How DNS servers communicate with each other."
  },
  {
    id: 13,
    front: "What is DNS Caching?",
    back: "Storing DNS query results temporarily based on TTL (Time to Live) to speed up future lookups. Devices and DNS servers both cache results."
  },
  {
    id: 14,
    front: "What is TTL in DNS?",
    back: "Time To Live - number of seconds a DNS record can be cached before it expires and requires a fresh lookup. Short TTL = frequently changing, Long TTL = stable records."
  },
  {
    id: 15,
    front: "What does nslookup do?",
    back: "Command-line tool for querying DNS records. Can look up A, AAAA, MX, TXT, NS, and other record types. Works on Windows, Mac, and Linux. Example: nslookup -type=MX google.com"
  },
  {
    id: 16,
    front: "What is DHCP?",
    back: "Dynamic Host Configuration Protocol - automatically assigns IP addresses and network configuration to devices. Eliminates manual configuration."
  },
  {
    id: 17,
    front: "What is the DORA Process?",
    back: "Discover, Offer, Request, Acknowledge - the 4-step process DHCP uses to assign IP addresses. Client discovers server, server offers IP, client requests it, server acknowledges."
  },
  {
    id: 18,
    front: "What happens in DHCP Discover?",
    back: "New device broadcasts 'Is there a DHCP server? I need an IP address!' to 255.255.255.255. First step of DORA process."
  },
  {
    id: 19,
    front: "What happens in DHCP Offer?",
    back: "DHCP server responds 'Here's an IP I can offer you' with IP address, subnet mask, gateway, DNS servers, and lease time. Second step of DORA."
  },
  {
    id: 20,
    front: "What happens in DHCP Request?",
    back: "Device broadcasts acceptance 'I'll take that IP!' in case multiple DHCP servers responded. Third step of DORA process."
  },
  {
    id: 21,
    front: "What happens in DHCP Acknowledge?",
    back: "DHCP server confirms 'Confirmed! That IP is yours for X hours.' Device configures itself. Final step of DORA process."
  },
  {
    id: 22,
    front: "What is a DHCP Scope?",
    back: "The range of IP addresses a DHCP server can assign. Example: 192.168.1.100-200 (101 addresses). Excludes IPs reserved for static assignments."
  },
  {
    id: 23,
    front: "What is a DHCP Lease Time?",
    back: "How long a device can keep its assigned IP before renewal. Typical: 8 hours to 7 days. After half the lease, device tries to renew. Prevents IP waste from transient devices."
  },
  {
    id: 24,
    front: "What is a DHCP Reservation?",
    back: "Assigns the same IP to a specific device every time based on MAC address. Device uses DHCP but always gets same IP. Used for servers, printers, network devices."
  },
  {
    id: 25,
    front: "What are DHCP Options?",
    back: "Additional configuration settings sent with IP address: Option 3 (default gateway), Option 6 (DNS servers), Option 15 (domain name), Option 42 (NTP servers), Option 51 (lease time)."
  },
  {
    id: 26,
    front: "What is DHCP Relay / IP Helper?",
    back: "Router feature that forwards DHCP broadcasts to DHCP server in different subnet. Solves problem of DHCP broadcasts not crossing routers. Allows one DHCP server for multiple subnets."
  },
  {
    id: 27,
    front: "What does 169.254.x.x IP mean?",
    back: "APIPA (Automatic Private IP Addressing) - device couldn't reach DHCP server so assigned itself an IP. Indicates DHCP failure. Check network connectivity, DHCP server status, scope exhaustion."
  },
  {
    id: 28,
    front: "What is NTP?",
    back: "Network Time Protocol - synchronizes clocks across network devices. Critical for Kerberos authentication, SSL certificates, log correlation, and two-factor authentication."
  },
  {
    id: 29,
    front: "Why is accurate time important in networking?",
    back: "Kerberos auth fails if time difference >5 minutes. SSL/TLS certificates have time-based validity. Security logs need synchronized timestamps. Two-factor auth codes are time-based."
  },
  {
    id: 30,
    front: "What is NTP Stratum 0?",
    back: "The ultimate time source: atomic clocks and GPS satellites. Not directly accessible via network - hardware devices that provide perfect time."
  },
  {
    id: 31,
    front: "What is NTP Stratum 1?",
    back: "Primary time servers directly connected to Stratum 0 devices. Highest accuracy (microsecond precision). Example: time.nist.gov"
  },
  {
    id: 32,
    front: "What is NTP Stratum 2-15?",
    back: "Secondary time servers. Stratum 2 syncs to Stratum 1, Stratum 3 syncs to Stratum 2, etc. Most devices sync to Stratum 2-3. Lower stratum = more accurate."
  },
  {
    id: 33,
    front: "What is NTP Stratum 16?",
    back: "Considered unsynchronized - too many hops from time source. Device is not in sync with accurate time."
  },
  {
    id: 34,
    front: "What are common public NTP servers?",
    back: "time.nist.gov (US govt), time.windows.com (Microsoft), pool.ntp.org (global), time.google.com (Google), time.cloudflare.com (Cloudflare)"
  },
  {
    id: 35,
    front: "What is IPAM?",
    back: "IP Address Management - centralized system for planning, tracking, and managing IP address allocation. Tracks static IPs, DHCP scopes, DNS records, subnets, conflicts. Essential for 100+ device networks."
  },
  {
    id: 36,
    front: "What does IPAM track?",
    back: "Static IP assignments, DHCP scopes and leases, DNS records, subnet/VLAN assignments, IP conflicts, available vs used addresses, capacity planning, audit trails."
  },
  {
    id: 37,
    front: "Why use IPAM instead of spreadsheets?",
    back: "Centralized database prevents errors. Automated conflict detection. Integration with DNS/DHCP. Audit trails. Capacity planning. Real-time accuracy. Spreadsheets fail at scale (100+ devices)."
  },
  {
    id: 38,
    front: "What command queries DNS on Windows?",
    back: "nslookup [domain] or nslookup -type=[record type] [domain]. Example: nslookup -type=MX google.com to see mail servers."
  },
  {
    id: 39,
    front: "What command flushes DNS cache on Windows?",
    back: "ipconfig /flushdns - clears all cached DNS entries. Used when cached data is stale or corrupted. Forces fresh DNS lookups."
  },
  {
    id: 40,
    front: "What command shows DHCP info on Windows?",
    back: "ipconfig /all - shows DHCP server IP, lease obtained/expires times, DNS servers, default gateway, and all DHCP options received."
  },
  {
    id: 41,
    front: "What commands release and renew DHCP on Windows?",
    back: "ipconfig /release (releases current lease) and ipconfig /renew (requests new lease). Manually triggers DORA process for troubleshooting."
  },
  {
    id: 42,
    front: "What is the difference between A and AAAA records?",
    back: "A Record: Maps hostname to IPv4 address (32-bit). AAAA Record: Maps hostname to IPv6 address (128-bit). Same purpose, different IP versions."
  },
  {
    id: 43,
    front: "When would you use a CNAME instead of an A record?",
    back: "When you want multiple hostnames to point to the same target, allowing you to change the target once instead of updating multiple A records. Also used for CDN services."
  },
  {
    id: 44,
    front: "Why do domains have multiple MX records?",
    back: "Redundancy - if primary mail server (priority 10) fails, email routes to backup servers (priority 20, 30). Ensures email delivery even during failures."
  },
  {
    id: 45,
    front: "What happens if a DHCP scope runs out of addresses?",
    back: "New devices can't get IPs - they fall back to APIPA (169.254.x.x) or show network errors. Solution: expand scope, reduce lease time, or add more DHCP servers."
  },
  {
    id: 46,
    front: "Can you have multiple DHCP servers on one network?",
    back: "Yes, but they must have non-overlapping scopes (80/20 rule common: Server 1 assigns .100-.199, Server 2 assigns .200-.254). Provides redundancy and load balancing."
  },
  {
    id: 47,
    front: "What is the difference between DHCP and Static IP?",
    back: "DHCP: Automatic, temporary (leased), easy to manage at scale. Static: Manual configuration, permanent, used for servers/printers/infrastructure. DHCP reservations combine both benefits."
  },
  {
    id: 48,
    front: "Why would DNS resolution fail?",
    back: "DNS server unreachable, DNS server misconfigured, firewall blocking DNS (port 53), stale DNS cache, incorrect DNS server IP in DHCP options, domain doesn't exist."
  },
  {
    id: 49,
    front: "What is dig command used for?",
    back: "DNS lookup tool (Mac/Linux) that provides detailed query information including TTL, record types, authoritative servers. dig +trace shows full DNS resolution path from root to authoritative servers."
  },
  {
    id: 50,
    front: "What is the relationship between DNS, DHCP, and NTP?",
    back: "All three are essential network services. DHCP assigns IPs and tells devices which DNS servers to use. DNS resolves hostnames including NTP servers. NTP syncs time for all services. They work together for automatic network configuration."
  }
];

export default lesson8Flashcards;