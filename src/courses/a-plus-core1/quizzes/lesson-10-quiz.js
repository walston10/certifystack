export const lesson10Quiz = [
  {
    id: 1,
    question: "A small business network has run out of available IP addresses from their DHCP server. The DHCP scope is configured as 192.168.1.10 to 192.168.1.50. What should the administrator do to provide more addresses?",
    options: [
      "Buy a new router",
      "Expand the DHCP scope range (e.g., 192.168.1.10 to 192.168.1.200) to include more addresses",
      "Disable DHCP completely",
      "Nothing can be done"
    ],
    correct: 1,
    explanation: "The DHCP scope defines the range of IP addresses the server can assign. Expanding the scope to include more addresses (while staying within the subnet) provides more available IPs. For example, changing from .10-.50 (41 addresses) to .10-.200 (191 addresses). Ensure the expanded range doesn't conflict with any statically assigned devices. Also verify the subnet mask allows the larger range. Alternatively, reduce DHCP lease times so addresses are reclaimed faster, or remove unused DHCP reservations. For a /24 network (255.255.255.0), you can use addresses .1-.254 (.255 is broadcast, .0 is network)."
  },
  {
    id: 2,
    question: "A user reports they can access websites by IP address (like 8.8.8.8) but not by domain name (like google.com). What service is most likely failing?",
    options: [
      "DHCP",
      "DNS (Domain Name System)",
      "The router's firewall",
      "The computer's hard drive"
    ],
    correct: 1,
    explanation: "DNS translates domain names (google.com) into IP addresses (142.250.80.46). If DNS fails, you can access sites by IP but not by name. Check DNS server configuration in network settings - many networks use ISP DNS, Google DNS (8.8.8.8, 8.8.4.4), or Cloudflare DNS (1.1.1.1). Try flushing the DNS cache (ipconfig /flushdns on Windows) or manually configuring reliable DNS servers. Use nslookup command to test DNS resolution. Since accessing by IP works, routing and internet connectivity are fine - it's specifically a name resolution issue."
  },
  {
    id: 3,
    question: "An office printer needs to always be accessible at the same IP address (192.168.1.100) so users' printer drivers don't need reconfiguration. What DHCP feature should be configured?",
    options: [
      "DHCP scope expansion",
      "DHCP reservation (binding the printer's MAC address to a specific IP)",
      "DNS forwarding",
      "Port forwarding"
    ],
    correct: 1,
    explanation: "A DHCP reservation (also called static DHCP or address reservation) binds a specific MAC address to a specific IP address. The device still uses DHCP, but always receives the same IP. This is ideal for printers, servers, and network devices that need consistent addresses. It's better than manual static IP configuration because it's managed centrally in the DHCP server. To configure: find the device's MAC address, create a reservation in the DHCP server mapping that MAC to the desired IP, then renew the device's DHCP lease."
  },
  {
    id: 4,
    question: "A network administrator is troubleshooting connectivity issues. They run 'ipconfig /all' on a Windows computer and see the DNS server is listed as 192.168.1.1. What does this tell them?",
    options: [
      "The computer has no internet access",
      "The router at 192.168.1.1 is providing DNS services, or forwarding DNS requests to upstream DNS servers",
      "DNS is disabled on this computer",
      "The computer is infected with malware"
    ],
    correct: 1,
    explanation: "When the DNS server is the same as the default gateway (typically the router), the router is handling DNS. Most SOHO routers don't run full DNS servers - they forward DNS queries to upstream servers (ISP DNS, Google DNS, etc.) configured in the router's WAN settings. This is normal behavior. The router acts as a DNS proxy/forwarder. If DNS isn't working, check the router's DNS configuration and internet connectivity. Enterprise networks often have dedicated DNS servers with different IP addresses than the gateway."
  },
  {
    id: 5,
    question: "A company's DHCP server goes offline. What will happen to computers that already have DHCP-assigned IP addresses?",
    options: [
      "They immediately lose network connectivity",
      "They continue working until their DHCP lease expires, then cannot renew and may get APIPA addresses (169.254.x.x)",
      "Nothing - DHCP is only needed once during computer setup",
      "They automatically switch to static IP addresses"
    ],
    correct: 1,
    explanation: "DHCP leases have expiration times (typically hours or days). Computers keep their IP addresses until the lease expires and they attempt to renew. If the DHCP server is offline during renewal, the client cannot renew and eventually loses its IP address. Windows will assign an APIPA address (169.254.x.x) which only allows local subnet communication, not internet. At 50% of lease time, clients attempt renewal. At 87.5% they try rebinding to any DHCP server. When leases expire, new clients can't get addresses at all. This is why DHCP server uptime is critical."
  },
  {
    id: 6,
    question: "A user needs to find the IP address of the server 'mail.company.com'. What command-line tool can query DNS to find this information?",
    options: [
      "ping",
      "ipconfig",
      "nslookup or dig",
      "tracert"
    ],
    correct: 2,
    explanation: "nslookup (Windows/Mac/Linux) and dig (Mac/Linux, more detailed) are DNS lookup tools. Run 'nslookup mail.company.com' to query DNS and see the IP address. You can also specify which DNS server to query: 'nslookup mail.company.com 8.8.8.8'. These tools show DNS records (A, AAAA, MX, etc.) and help troubleshoot DNS issues. ping also resolves names but its primary purpose is testing connectivity. ipconfig shows network configuration. tracert shows the route to a destination. nslookup is specifically designed for DNS troubleshooting."
  },
  {
    id: 7,
    question: "What are the four steps of the DHCP process in the correct order?",
    options: [
      "Discover, Offer, Request, Acknowledge (DORA)",
      "Request, Offer, Discover, Acknowledge",
      "Acknowledge, Discover, Offer, Request",
      "Offer, Request, Discover, Acknowledge"
    ],
    correct: 0,
    explanation: "The DHCP process follows DORA: (1) Discover - client broadcasts looking for DHCP servers, (2) Offer - DHCP server(s) offer an IP address, (3) Request - client requests the offered IP, (4) Acknowledge - server confirms and assigns the IP with lease time and configuration (subnet mask, gateway, DNS). This happens when devices boot up or when manually renewing leases. Understanding DORA helps troubleshoot DHCP failures - if a client can't get an IP, determine which step is failing using packet captures or DHCP server logs."
  },
  {
    id: 8,
    question: "A multi-site company has a main office with a DHCP server. A branch office on a different subnet needs DHCP service but the broadcast traffic from DHCP Discover packets can't cross the router. What solution allows the branch office to use the central DHCP server?",
    options: [
      "DHCP won't work across subnets - each site needs its own server",
      "Configure DHCP relay (IP helper) on the branch office router to forward DHCP broadcasts to the main office DHCP server",
      "Disable all routers",
      "Only use static IP addresses"
    ],
    correct: 1,
    explanation: "DHCP relay (also called IP helper or DHCP forwarding) allows routers to forward DHCP broadcast packets to a DHCP server on a different subnet. The router receives broadcasts on the local subnet and forwards them as unicast to the configured DHCP server address. The server responds to the router, which forwards responses back to the client. This allows centralized DHCP management across multiple subnets. Configure 'ip helper-address <DHCP-server-IP>' on the router interface facing the client subnet. This is standard in enterprise networks with multiple VLANs or sites."
  },
  {
    id: 9,
    question: "A network has a file server at 'fileserver.company.local' but users can only access it by IP address (192.168.1.50), not by name. DNS is working for internet sites. What is likely missing?",
    options: [
      "Internet service",
      "A DNS record (A record) for 'fileserver.company.local' in the internal DNS server",
      "The file server's power cable",
      "Wireless connectivity"
    ],
    correct: 1,
    explanation: "Internal DNS servers (like Windows Server DNS or Active Directory DNS) host records for local resources. An A record maps 'fileserver.company.local' to 192.168.1.50. If this record is missing or incorrect, clients can't resolve the name. Internet DNS works because external DNS servers handle those queries. Check the internal DNS server for the correct A record. Also verify clients are configured to use the internal DNS server (not just Google DNS, which won't know about internal hosts). Use nslookup against the internal DNS server to verify the record exists."
  },
  {
    id: 10,
    question: "A home network router's DHCP settings show 'Lease Time: 24 hours'. What does this mean?",
    options: [
      "The internet connection costs $24 per hour",
      "IP addresses assigned by DHCP are valid for 24 hours before the client must renew or release the lease",
      "The router works for 24 hours then stops",
      "Clients can only use the network for 24 hours"
    ],
    correct: 1,
    explanation: "DHCP lease time determines how long an IP address is assigned to a client. After 24 hours, the client must renew the lease (happens automatically in the background). Shorter leases (1-4 hours) are used in high-turnover environments like coffee shops to reclaim addresses quickly. Longer leases (days or weeks) reduce DHCP traffic on stable networks. At 50% of lease time, clients attempt renewal. If renewal fails, they try again at 87.5%. When the lease expires without renewal, the IP is released and the client loses connectivity until obtaining a new address."
  },
  {
    id: 11,
    question: "A company email server needs both a name (mail.company.com) and an MX record for receiving email. What is an MX record?",
    options: [
      "A security protocol",
      "Mail Exchange record - specifies which server handles email for a domain",
      "A type of hard drive",
      "A wireless encryption standard"
    ],
    correct: 1,
    explanation: "MX (Mail Exchange) records tell other email servers where to deliver email for a domain. They include a priority number (lower is higher priority) and point to a mail server hostname. For example: 'company.com MX 10 mail.company.com' means email for @company.com should be delivered to mail.company.com. Multiple MX records provide redundancy. The mail server's hostname must also have an A record pointing to its IP address. Misconfigured MX records are a common cause of email delivery failures. Check MX records with 'nslookup -type=MX company.com'."
  },
  {
    id: 12,
    question: "A network administrator notices many devices on the network have IP addresses in the 169.254.x.x range. What does this indicate?",
    options: [
      "Everything is working perfectly",
      "Devices couldn't contact a DHCP server and assigned themselves APIPA (Automatic Private IP Addressing) addresses",
      "The network has been upgraded to IPv6",
      "Someone manually configured all devices with these addresses"
    ],
    correct: 1,
    explanation: "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. When Windows (and some other OSes) can't obtain a DHCP address, they self-assign an address in this range. APIPA only allows communication with other APIPA devices on the same subnet - no internet or cross-subnet access. This indicates DHCP server failure, network cable unplugged, wrong VLAN, or DHCP exhaustion. Troubleshoot by verifying DHCP server is running, client has network connectivity, and DHCP scope has available addresses. APIPA is a fallback mechanism, not a solution."
  },
  {
    id: 13,
    question: "A DNS server has an A record and an AAAA record for the same hostname 'webserver.company.com'. What is the difference?",
    options: [
      "AAAA records are more important than A records",
      "A record maps to IPv4 address (192.168.1.10), AAAA record maps to IPv6 address (2001:db8::1)",
      "They are identical",
      "AAAA records are only for email"
    ],
    correct: 1,
    explanation: "A records map hostnames to IPv4 addresses (32-bit, like 192.168.1.10). AAAA records (quad-A) map hostnames to IPv6 addresses (128-bit, like 2001:db8::1). A host can have both records for dual-stack networking - IPv4 and IPv6 clients can both access it. Modern operating systems prefer IPv6 when available. DNS supports many record types: A (IPv4), AAAA (IPv6), MX (mail), CNAME (alias), PTR (reverse lookup), TXT (text information), NS (name server), and SOA (start of authority)."
  },
  {
    id: 14,
    question: "A user's computer shows it has IP address 192.168.1.145, subnet mask 255.255.255.0, and default gateway 192.168.1.1. It can access other computers on the 192.168.1.x network but cannot access the internet. What is the most likely issue?",
    options: [
      "The computer's IP configuration is completely wrong",
      "The default gateway (router) at 192.168.1.1 has lost internet connectivity or is misconfigured",
      "The subnet mask should be 255.255.0.0",
      "The computer needs a new monitor"
    ],
    correct: 1,
    explanation: "Since the computer can communicate with local devices (192.168.1.x), its IP configuration and local network connectivity are fine. The inability to access the internet indicates a problem with the default gateway (router). The router might have lost WAN connectivity, has incorrect WAN configuration, or its upstream connection failed. Verify by pinging the gateway (192.168.1.1) - if successful, the router is reachable but may not have internet. Check the router's WAN status and ISP connection. Other computers likely have the same issue if the router failed."
  },
  {
    id: 15,
    question: "A network administrator wants to ensure critical servers get DNS responses faster by storing frequently-accessed DNS records locally on the DNS server. What DNS feature accomplishes this?",
    options: [
      "DNS forwarding",
      "DNS caching - storing previously resolved queries in memory for faster future lookups",
      "DHCP relay",
      "Port forwarding"
    ],
    correct: 1,
    explanation: "DNS caching stores query results in memory for a specified time (TTL - Time To Live). When a client queries a cached record, the DNS server responds immediately without querying authoritative servers. This reduces lookup time, decreases external query traffic, and improves performance. DNS servers cache records from authoritative servers. Client operating systems also cache DNS locally. You can view/clear client DNS cache: 'ipconfig /displaydns' and 'ipconfig /flushdns' on Windows. Cached records expire based on TTL values set by the authoritative DNS server (often 300-86400 seconds)."
  }
];