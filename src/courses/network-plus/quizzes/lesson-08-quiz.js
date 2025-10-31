export const lesson8Quiz = [
  {
    question: "A junior admin sees a ticket asking, “Why can’t users type names like portal.example.com instead of IPs?” To explain the service that translates names to IP addresses, which term should the admin define?",
    options: [
      "Domain Name System",
      "Digital Network Service",
      "Data Network System",
      "Domain Network Service"
    ],
    answerIndex: 0,
    explanation: "DNS stands for Domain Name System. It resolves human-readable hostnames to IP addresses so clients can reach services without memorizing IPs."
  },
  {
    question: "You’re onboarding a new web server reachable at app.example.com (IPv4). Which record type should you create to map that hostname to 198.51.100.25?",
    options: [
      "AAAA Record",
      "CNAME Record",
      "A Record",
      "MX Record"
    ],
    answerIndex: 2,
    explanation: "An A record maps a hostname to an IPv4 address. AAAA is for IPv6, CNAME is an alias to another name, and MX designates mail exchangers."
  },
  {
    question: "Email from partners is bouncing with “no route to mail server.” A DNS check shows no entries directing mail for example.org. Which record type is missing?",
    options: [
      "Maps hostname to IP address",
      "Creates an alias for a domain",
      "Specifies mail servers for a domain",
      "Performs reverse DNS lookup"
    ],
    answerIndex: 2,
    explanation: "MX (Mail Exchange) records specify which mail servers handle a domain’s email and include priorities for failover."
  },
  {
    question: "A user says, “Which mail servers handle example.com?” On a Windows PC, which command should you run to query that DNS info directly?",
    options: [
      "ping",
      "tracert",
      "nslookup",
      "ipconfig"
    ],
    answerIndex: 2,
    explanation: "nslookup can query specific record types (e.g., MX, A, TXT). Example: nslookup -type=MX example.com."
  },
  {
    question: "Your company is enabling IPv6 for www.example.com. Which record type will map the hostname to its IPv6 address?",
    options: [
      "Advanced Address - provides faster DNS resolution",
      "Alternative Address - provides backup IP addresses",
      "IPv6 Address - maps hostname to IPv6 address",
      "Automated Address - automatically assigns IPs"
    ],
    answerIndex: 2,
    explanation: "AAAA (quad-A) records map hostnames to IPv6 addresses. They’re the IPv6 counterpart to A records."
  },
  {
    question: "A laptop joins a new Wi-Fi network and sends a broadcast to find any server that can offer it an IP. In the DORA sequence, which step describes this initial broadcast?",
    options: [
      "Deliver",
      "Discover",
      "Deploy",
      "Declare"
    ],
    answerIndex: 1,
    explanation: "DORA = Discover, Offer, Request, Acknowledge. The client begins with a DHCP Discover broadcast to locate a DHCP server."
  },
  {
    question: "A networked printer must always get 10.20.5.50 but still use DHCP for other options. What should you configure on the DHCP server?",
    options: [
      "Preventing devices from getting DHCP addresses",
      "Reserving IP addresses for future use",
      "Assigning the same IP to a specific device based on MAC address",
      "Backing up DHCP configuration"
    ],
    answerIndex: 2,
    explanation: "A DHCP reservation binds a device’s MAC address to a fixed IP while still delivering other DHCP options (gateway, DNS, etc.)."
  },
  {
    question: "A tech sees a workstation with IP 169.254.32.10 and reports it “can’t reach anything.” What does this address range indicate?",
    options: [
      "192.168.1.x",
      "10.0.0.x",
      "169.254.x.x",
      "172.16.x.x"
    ],
    answerIndex: 2,
    explanation: "169.254.0.0/16 is APIPA. It appears when a DHCP client can’t contact a server; check DHCP reachability and scope availability."
  },
  {
    question: "After moving a website to a new host, some users still reach the old IP. What DNS behavior is causing this and why is it normally helpful?",
    options: [
      "To backup DNS records",
      "To encrypt DNS queries",
      "To speed up DNS resolution by storing previous results",
      "To load balance DNS servers"
    ],
    answerIndex: 2,
    explanation: "DNS caching stores recent answers until TTL expiry, accelerating lookups. During migrations, cached entries may briefly point to the old IP."
  },
  {
    question: "Marketing wants blog.example.com to follow whatever IP www.example.com resolves to—without duplicating addresses. Which record fits?",
    options: [
      "Creates a canonical name that points to an IP address",
      "Creates an alias that points to another domain name",
      "Creates a copy of all DNS records",
      "Creates a connection to a mail server"
    ],
    answerIndex: 1,
    explanation: "A CNAME makes an alias that targets another hostname (not an IP). Managing the target’s A/AAAA records automatically updates the alias."
  },
  {
    question: "Kerberos logins intermittently fail and log timestamps across servers don’t match. Which service should you verify is working across the environment?",
    options: [
      "Network Transfer Protocol - manages file transfers",
      "Network Time Protocol - synchronizes clocks across devices",
      "Network Tracking Protocol - monitors network traffic",
      "Network Tunnel Protocol - creates VPN connections"
    ],
    answerIndex: 1,
    explanation: "NTP synchronizes time across systems. Accurate time is critical for Kerberos, TLS, log correlation, and MFA."
  },
  {
    question: "Your CIO asks for the most accurate enterprise time source. Which NTP tier directly references atomic clocks or GPS?",
    options: [
      "The least accurate time source",
      "Client devices",
      "Primary time servers directly connected to atomic clocks",
      "Unsynchronized devices"
    ],
    answerIndex: 2,
    explanation: "Stratum 1 servers get time from Stratum 0 (atomic/GPS). Lower stratum numbers indicate higher accuracy; Stratum 16 is unsynchronized."
  },
  {
    question: "A mail gateway vendor refuses connections from your new SMTP server, citing lack of reverse DNS. Which DNS record do you need to publish for 203.0.113.25?",
    options: [
      "Points to the primary DNS server",
      "Performs reverse DNS lookup (IP to hostname)",
      "Provides pointer to mail servers",
      "Points to the root DNS servers"
    ],
    answerIndex: 1,
    explanation: "PTR records support reverse DNS (IP→name). Many mail systems require that an IP’s PTR resolves to the sending host’s FQDN."
  },
  {
    question: "Your DHCP server sits in VLAN 10, but clients in VLAN 20 never get leases. Routers are not forwarding the broadcasts. What feature should you enable on the router interface for VLAN 20?",
    options: [
      "DHCP servers running out of addresses",
      "DHCP broadcasts not crossing routers to reach other subnets",
      "DHCP lease times expiring too quickly",
      "DHCP conflicts between multiple servers"
    ],
    answerIndex: 1,
    explanation: "DHCP relay (IP helper) converts client broadcasts to unicast requests to a remote DHCP server, enabling multi-subnet leasing."
  },
  {
    question: "A desktop can ping IPs but can’t browse websites by name. Which additional settings should the DHCP server be handing out besides an IP?",
    options: [
      "Only the IP address",
      "IP address and MAC address",
      "IP address, subnet mask, default gateway, DNS servers (via DHCP options)",
      "IP address and hostname only"
    ],
    answerIndex: 2,
    explanation: "DHCP options deliver the subnet mask, default gateway (Opt. 3), DNS servers (Opt. 6), domain name (Opt. 15), etc."
  },
  {
    question: "Your org is outgrowing spreadsheets for tracking subnets, static IPs, and DHCP scopes. Management wants role-based visibility and audit trails. What tool category addresses this?",
    options: [
      "Internet Protocol Address Manager - centralized IP tracking system",
      "IP Automatic Mapping - automatic IP assignment",
      "Internal Protocol Access Module - network security tool",
      "IP Address Migration - tool for changing IP schemes"
    ],
    answerIndex: 0,
    explanation: "IPAM centralizes planning and tracking of IP space, DHCP scopes, DNS records, and allocations—vital at scale."
  },
  {
    question: "A help desk ticket asks, “Can the DNS server find the answer for me without me following referrals?” Which query behavior describes that request?",
    options: [
      "Iterative query",
      "Recursive query",
      "Forward query",
      "Reverse query"
    ],
    answerIndex: 1,
    explanation: "Recursive queries have the DNS server perform the full resolution (root→TLD→authoritative) and return a final answer to the client."
  },
  {
    question: "A network engineer is explaining how a DNS resolver finds www.example.com. What is the correct order of the DNS hierarchy consulted?",
    options: [
      "Authoritative → TLD → Root",
      "Root → Authoritative → TLD",
      "TLD → Root → Authoritative",
      "Root → TLD → Authoritative"
    ],
    answerIndex: 3,
    explanation: "Resolvers work top-down: Root (.) → TLD (.com) → Authoritative (example.com) to obtain the final record."
  },
  {
    question: "Before a website cutover, an admin lowers a record’s value so clients refresh more often during the change. Which DNS setting is being adjusted and what does it control?",
    options: [
      "Total Transfer Limit",
      "Time To Live - how long a DNS record can be cached",
      "Target Transfer Location",
      "Top Level Tag"
    ],
    answerIndex: 1,
    explanation: "TTL controls how long resolvers cache a record before re-querying. Short TTLs speed propagation during planned changes."
  },
  {
    question: "A user moved floors and still has the old gateway in its config. From a Windows laptop, which commands will force the client to drop and request a fresh DHCP lease?",
    options: [
      "ipconfig /release and ipconfig /renew",
      "dhcp /release and dhcp /renew",
      "netsh release and netsh renew",
      "nslookup /release and nslookup /renew"
    ],
    answerIndex: 0,
    explanation: "ipconfig /release discards the lease; ipconfig /renew requests a new one, triggering the DORA process."
  },
  {
    question: "A guest Wi-Fi scope is set to 8 hours, but some devices stay connected for days. What does the scope’s 'lease time' actually represent?",
    options: [
      "How long it takes to assign an IP",
      "How long a device can keep its assigned IP before renewal",
      "How long the DHCP server has been running",
      "How long the network has been operational"
    ],
    answerIndex: 1,
    explanation: "Lease time is the period a client can hold an address before renewal. Clients typically attempt renewal at T1 (50% of the lease)."
  },
  {
    question: "You’re validating which servers are officially responsible for holding the DNS zone data for example.com. Which record type lists those authoritative servers?",
    options: [
      "Name Service - provides DNS server names",
      "Network Server - identifies file servers",
      "Name Server - specifies authoritative DNS servers for a domain",
      "Network Security - defines security policies"
    ],
    answerIndex: 2,
    explanation: "NS records specify which name servers are authoritative for the zone. Multiple NS records provide redundancy."
  },
  {
    question: "A resolver asks your DNS server for www.example.net and wants a final IP, not a referral chain. Versus another tool that wants each referral step. What’s the difference between these query types?",
    options: [
      "Recursive queries are faster, iterative are more secure",
      "Recursive: server does all work and returns final answer. Iterative: server provides referrals",
      "Recursive queries use UDP, iterative use TCP",
      "Recursive queries are cached, iterative are not"
    ],
    answerIndex: 1,
    explanation: "Recursive queries have the server chase the full path and reply with a final answer; iterative queries return referrals for the client to follow."
  },
  {
    question: "Your outbound email is rejected by large providers. Their error mentions reverse DNS validation. Why would publishing a PTR record help?",
    options: [
      "To receive email faster",
      "Many spam filters reject email from servers without valid reverse DNS",
      "To encrypt email communications",
      "To store email addresses"
    ],
    answerIndex: 1,
    explanation: "Receiving servers often verify that the sending IP’s PTR resolves to a hostname matching the HELO/From domain to reduce spam."
  },
  {
    question: "A SaaS provider asks you to add several DNS entries to prove domain ownership and improve email deliverability. Which record type typically carries SPF, DKIM, DMARC, and verification values?",
    options: [
      "Store text descriptions of websites",
      "Translate domain names to text format",
      "Store arbitrary text data, often for verification and email security (SPF, DKIM, DMARC)",
      "Create text-based aliases"
    ],
    answerIndex: 2,
    explanation: "TXT records store arbitrary text, including SPF policies, DKIM keys, DMARC policies, and domain-ownership verification tokens."
  }
];

// Default export for compatibility
export default lesson8Quiz;
