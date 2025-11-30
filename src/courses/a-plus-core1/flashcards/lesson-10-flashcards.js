export const lesson10Flashcards = [
  {
    id: 1,
    front: "What is DHCP and what does it do?",
    back: "Dynamic Host Configuration Protocol. Automatically assigns IP addresses, subnet masks, default gateway, and DNS servers to network clients. Eliminates manual IP configuration. Uses ports 67 (server) and 68 (client)."
  },
  {
    id: 2,
    front: "What is the DHCP DORA process?",
    back: "Discover: Client broadcasts request for IP. Offer: DHCP server offers IP address. Request: Client requests offered IP. Acknowledge: Server confirms assignment. Full handshake for obtaining IP address."
  },
  {
    id: 3,
    front: "What is a DHCP scope?",
    back: "Range of IP addresses that DHCP server can assign to clients. Example: 192.168.1.100-192.168.1.200. Includes subnet mask, default gateway, DNS servers, lease time. Can exclude specific addresses."
  },
  {
    id: 4,
    front: "What is a DHCP lease?",
    back: "Time period IP address assigned to client. Typical: 8 hours to 7 days. Client must renew at 50% of lease time. If not renewed, IP returns to pool. Prevents IP address exhaustion from offline devices."
  },
  {
    id: 5,
    front: "What is a DHCP reservation?",
    back: "Assigns same IP address to specific device every time based on MAC address. Acts like static IP but centrally managed. Used for: servers, printers, network devices that need consistent addresses."
  },
  {
    id: 6,
    front: "What is APIPA and when does it occur?",
    back: "Automatic Private IP Addressing. Self-assigned IP in 169.254.0.0/16 range when DHCP fails. Allows local communication only, no internet access. Indicates: DHCP server down, cable unplugged, network misconfiguration."
  },
  {
    id: 7,
    front: "What is DNS and what does it do?",
    back: "Domain Name System. Translates human-readable domain names (google.com) to IP addresses (142.250.80.46). Hierarchical distributed database. Essential for internet functionality. Uses port 53 (TCP and UDP)."
  },
  {
    id: 8,
    front: "What is the DNS hierarchy?",
    back: "Root servers (top level, 13 worldwide) - TLD servers (.com, .org, .net) - Authoritative name servers (specific domains) - Client queries up the chain until answer found."
  },
  {
    id: 9,
    front: "What are the common DNS record types?",
    back: "A: Maps hostname to IPv4 address. AAAA: Maps hostname to IPv6 address. CNAME: Alias to another hostname. MX: Mail server. TXT: Text info (SPF, DKIM). PTR: Reverse lookup. NS: Name server. SOA: Start of authority."
  },
  {
    id: 10,
    front: "What is DNS caching?",
    back: "Stores recent DNS lookups locally to speed up future requests. Cached on: local computer, DNS resolver, intermediate DNS servers. Reduces query time and network traffic. Cache has TTL (Time To Live)."
  },
  {
    id: 11,
    front: "What is a recursive DNS query?",
    back: "DNS server performs full lookup on behalf of client. Server contacts other DNS servers until answer found. Returns final answer to client. Most common query type from end users."
  },
  {
    id: 12,
    front: "What is an iterative DNS query?",
    back: "DNS server returns best answer it knows or referral to another server. Client responsible for following referrals. Used between DNS servers. More work for client but reduces server load."
  },
  {
    id: 13,
    front: "What is SMB/CIFS and what is it used for?",
    back: "Server Message Block/Common Internet File System. Protocol for file sharing on Windows networks. Allows network file and printer sharing. Ports 445 (SMB), 137-139 (NetBIOS). Linux can use via Samba."
  },
  {
    id: 14,
    front: "What is FTP and what ports does it use?",
    back: "File Transfer Protocol. Transfers files between systems. Port 21 (control/commands), Port 20 (data transfer). Unencrypted - username/password sent in clear text. Use SFTP (SSH) or FTPS (SSL/TLS) instead."
  },
  {
    id: 15,
    front: "What is the difference between SFTP and FTPS?",
    back: "SFTP (SSH File Transfer Protocol): Uses SSH (port 22), encrypted channel, more secure, simpler firewall config. FTPS (FTP Secure): FTP with SSL/TLS, uses ports 21 and separate data port, legacy FTP with encryption added."
  },
  {
    id: 16,
    front: "What is a print server and what does it do?",
    back: "Centralizes printer management. Accepts print jobs from clients, queues them, sends to printer. Can be: dedicated hardware, software on server, built into network printer. Simplifies driver deployment and management."
  },
  {
    id: 17,
    front: "What is SMTP and what port does it use?",
    back: "Simple Mail Transfer Protocol. Sends outgoing email between mail servers. Port 25 (server-to-server), Port 587 (client submission with STARTTLS), Port 465 (deprecated, SMTPS). Always used for sending email."
  },
  {
    id: 18,
    front: "What is POP3 and what ports does it use?",
    back: "Post Office Protocol version 3. Downloads email from server, typically deletes from server. Port 110 (unencrypted), Port 995 (POP3S with SSL/TLS). No folder sync. Legacy protocol for receiving email."
  },
  {
    id: 19,
    front: "What is IMAP and what ports does it use?",
    back: "Internet Message Access Protocol. Keeps email on server, syncs folders across devices. Port 143 (unencrypted), Port 993 (IMAPS with SSL/TLS). Modern standard for receiving email. Better than POP3 for multiple devices."
  },
  {
    id: 20,
    front: "What is syslog and what is it used for?",
    back: "System logging protocol. Centralizes log collection from network devices, servers, applications. Port 514 (UDP). Severity levels 0-7 (Emergency to Debug). Critical for monitoring, troubleshooting, security analysis."
  },
  {
    id: 21,
    front: "What are the syslog severity levels?",
    back: "0-Emergency: System unusable. 1-Alert: Action needed immediately. 2-Critical: Critical condition. 3-Error: Error condition. 4-Warning: Warning. 5-Notice: Normal but significant. 6-Informational: Info message. 7-Debug: Debug info."
  },
  {
    id: 22,
    front: "What is HTTP and what port does it use?",
    back: "Hypertext Transfer Protocol. Transfers web pages and web content. Port 80. Unencrypted - all data visible. Replaced by HTTPS for security. Foundation of World Wide Web."
  },
  {
    id: 23,
    front: "What is HTTPS and what port does it use?",
    back: "HTTP Secure. HTTP encrypted with SSL/TLS. Port 443. Encrypts all web traffic. Shows padlock in browser. Required for: login pages, payment, sensitive data. Uses certificates for authentication."
  },
  {
    id: 24,
    front: "What does AAA stand for in network security?",
    back: "Authentication: Who are you? (verify identity). Authorization: What can you do? (permissions). Accounting: What did you do? (logging/auditing). Framework for controlling access and tracking usage."
  },
  {
    id: 25,
    front: "What is RADIUS and what does it do?",
    back: "Remote Authentication Dial-In User Service. Centralized AAA server. Ports 1812 (authentication), 1813 (accounting). Used for: VPN access, wireless (802.1X), network devices. Open standard, widely supported."
  },
  {
    id: 26,
    front: "What is TACACS+ and how does it differ from RADIUS?",
    back: "Terminal Access Controller Access-Control System Plus. Cisco proprietary AAA protocol. Port 49 (TCP). Separates AAA functions. Encrypts entire packet (RADIUS only password). Used mainly for network device administration."
  },
  {
    id: 27,
    front: "What is SNMP and what is it used for?",
    back: "Simple Network Management Protocol. Monitors and manages network devices remotely. Collects info: CPU usage, interface status, errors. Ports 161 (agent), 162 (traps/notifications). Versions: v1, v2c (weak security), v3 (encrypted)."
  },
  {
    id: 28,
    front: "What are SNMP components?",
    back: "Manager (NMS): Monitoring server that collects data. Agent: Software on managed device that responds to queries. MIB (Management Information Base): Database of available device info. Traps: Unsolicited alerts from agents to manager."
  },
  {
    id: 29,
    front: "What is an NTP server and why is it important?",
    back: "Network Time Protocol server. Synchronizes clocks across network devices. Port 123 (UDP). Accurate time critical for: logs correlation, authentication (Kerberos), certificates, scheduled tasks. Stratum levels indicate accuracy."
  },
  {
    id: 30,
    front: "What is DHCP relay/IP helper?",
    back: "Forwards DHCP broadcasts across router to DHCP server on different subnet. Normally routers block broadcasts. Allows single DHCP server for multiple subnets. Configured on router interface facing clients."
  }
];