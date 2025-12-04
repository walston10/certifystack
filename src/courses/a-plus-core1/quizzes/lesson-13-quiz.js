export const lesson13Quiz = [
  {
    id: 1,
    question: "A network administrator is configuring a web server and needs to ensure it's accessible on the standard HTTP port. Which port number should be open on the firewall?",
    options: [
      "21",
      "25",
      "80",
      "443"
    ],
    correct: 2,
    explanation: "Port 80 is the standard port for HTTP (unencrypted web traffic). Web browsers automatically connect to port 80 when accessing http:// URLs. Port 443 is for HTTPS (encrypted web traffic). Port 21 is FTP, and port 25 is SMTP. While HTTPS on port 443 is preferred for security, HTTP on port 80 is still commonly used for non-sensitive traffic or redirecting to HTTPS. Web servers typically listen on both ports 80 and 443. This is a must-memorize port number for the A+ exam."
  },
  {
    id: 2,
    question: "A company wants to allow employees to securely access their office computers remotely. Which protocol and port should be configured on the firewall for encrypted remote desktop access?",
    options: [
      "Telnet on port 23",
      "SSH on port 22",
      "RDP on port 3389 (preferably through VPN for additional security)",
      "FTP on port 21"
    ],
    correct: 2,
    explanation: "RDP (Remote Desktop Protocol) uses port 3389 for Windows remote desktop connections. While RDP traffic is encrypted, exposing port 3389 directly to the internet is a security risk due to brute-force attacks. Best practice: use RDP through a VPN tunnel, or use RD Gateway on port 443. SSH (port 22) provides secure remote access to Linux/Unix systems. Telnet (port 23) is unencrypted and should never be used. For secure remote access to Windows, implement VPN + RDP or use SSH for Linux systems."
  },
  {
    id: 3,
    question: "A user is trying to access their company email from home but cannot connect to the mail server. The email client is configured for IMAP. IT mentions the firewall blocks most ports. What port should be open for secure IMAP access?",
    options: [
      "110",
      "143",
      "993",
      "995"
    ],
    correct: 2,
    explanation: "Port 993 is used for IMAPS (IMAP over SSL/TLS - secure IMAP). Port 143 is standard IMAP without encryption. Port 110 is POP3, and port 995 is POP3S (secure POP3). Modern email systems should use encrypted protocols: IMAPS (993) for incoming mail and SMTP with TLS (587 or 465) for outgoing. Port 143 sends credentials in plaintext and should be avoided. Configure email clients to use SSL/TLS and the secure ports. This protects login credentials and email content from interception."
  },
  {
    id: 4,
    question: "What is the primary difference between TCP and UDP protocols?",
    options: [
      "TCP is slower, UDP is faster",
      "TCP is connection-oriented with guaranteed delivery, error checking, and sequencing; UDP is connectionless with no delivery guarantees but lower overhead",
      "TCP is only for web browsing, UDP is only for email",
      "There is no difference"
    ],
    correct: 1,
    explanation: "TCP (Transmission Control Protocol) establishes connections (three-way handshake), guarantees delivery, checks for errors, and maintains packet order. It's reliable but has overhead. Used for: HTTP/HTTPS, FTP, SSH, email, file transfers. UDP (User Datagram Protocol) is connectionless, doesn't guarantee delivery or order, but has minimal overhead making it faster. Used for: streaming video/audio, VoIP, DNS queries, online gaming, TFTP. TCP is like certified mail (guaranteed), UDP is like regular mail (best effort). Choose based on application needs: reliability vs. speed."
  },
  {
    id: 5,
    question: "A file server needs to be accessible for network file sharing in a Windows domain environment. What port does SMB (Server Message Block) use?",
    options: [
      "21",
      "80",
      "445",
      "3389"
    ],
    correct: 2,
    explanation: "SMB (Server Message Block) uses port 445 for file and printer sharing in Windows networks. SMB allows accessing shared folders, printers, and other resources. Legacy NetBIOS over TCP/IP also used ports 137-139, but modern Windows primarily uses direct SMB on port 445. For security, port 445 should never be exposed to the internet - it's frequently targeted by ransomware and attacks. Block 445 at the firewall perimeter, but allow it internally for file sharing. Linux Samba servers also use port 445 for Windows compatibility."
  },
  {
    id: 6,
    question: "A network technician is troubleshooting email issues. Users can receive email but cannot send. The email client is configured to use SMTP on port 25. What might be the problem?",
    options: [
      "Port 25 is the wrong port for receiving email",
      "Many ISPs block outbound port 25 to prevent spam; users should use port 587 (SMTP with STARTTLS) instead",
      "Email clients don't use SMTP",
      "There is no port 25"
    ],
    correct: 1,
    explanation: "Many ISPs block outbound port 25 to reduce spam from compromised home computers. Modern email servers use port 587 for SMTP submission with STARTTLS encryption and authentication. Port 465 is also used for SMTP over SSL/TLS. Port 25 is still used for server-to-server email exchange. Email clients should be configured for port 587 (preferred) or 465. If users can't send email but can receive, check: outgoing port (use 587), authentication is enabled, and credentials are correct. Port 25 blocking is very common on residential ISP connections."
  },
  {
    id: 7,
    question: "A company's DNS server isn't responding to queries from workstations. What port should be open on the firewall for DNS traffic?",
    options: [
      "21",
      "53",
      "80",
      "161"
    ],
    correct: 1,
    explanation: "DNS (Domain Name System) uses port 53 for both TCP and UDP. UDP 53 is used for standard queries (most common). TCP 53 is used for zone transfers between DNS servers and for responses larger than 512 bytes. If DNS isn't working, verify port 53 is open to the DNS server. Test with nslookup or dig commands. Common DNS troubleshooting: ping the DNS server IP to verify connectivity, use nslookup to test specific queries, check if correct DNS servers are configured (ipconfig /all), and flush DNS cache (ipconfig /flushdns)."
  },
  {
    id: 8,
    question: "What protocol and port number are used for secure file transfer that encrypts both authentication credentials and data?",
    options: [
      "FTP on port 21",
      "Telnet on port 23",
      "SFTP (SSH File Transfer Protocol) on port 22",
      "TFTP on port 69"
    ],
    correct: 2,
    explanation: "SFTP (SSH File Transfer Protocol) uses port 22 (same as SSH) and provides encrypted file transfer. All data and credentials are encrypted. Don't confuse with FTPS (FTP over SSL/TLS) which uses ports 989-990. FTP on port 21 transmits credentials and data in plaintext - insecure. TFTP (Trivial FTP) on port 69 has no authentication or encryption - used for network device configs and PXE boot. For secure file transfer, use SFTP (preferred) or FTPS. Many FTP clients (FileZilla, WinSCP) support SFTP. Always use encrypted protocols when transferring sensitive data."
  },
  {
    id: 9,
    question: "A network administrator needs to remotely manage network switches and routers securely. What protocol should replace Telnet for secure command-line access?",
    options: [
      "HTTP",
      "FTP",
      "SSH (Secure Shell) on port 22",
      "SMTP"
    ],
    correct: 2,
    explanation: "SSH (Secure Shell) on port 22 provides encrypted remote command-line access, replacing insecure Telnet (port 23). SSH encrypts all traffic including credentials. Used for: managing Linux/Unix servers, network devices (routers, switches), secure file transfer (SFTP/SCP). Telnet sends everything in plaintext and should be disabled on all network devices. Configure network equipment with SSH: generate crypto keys, create user accounts, enable SSH, and disable Telnet. SSH is essential for secure network administration. PuTTY is a popular Windows SSH client."
  },
  {
    id: 10,
    question: "A VoIP phone system is being deployed. The phones use SIP for call setup. What ports does SIP typically use?",
    options: [
      "80 and 443",
      "5060 (unencrypted) and 5061 (encrypted TLS)",
      "3389",
      "110 and 995"
    ],
    correct: 1,
    explanation: "SIP (Session Initiation Protocol) uses port 5060 for unencrypted signaling and port 5061 for SIP over TLS (encrypted). SIP is used for VoIP call setup, teardown, and management. The actual voice traffic (RTP - Real-time Transport Protocol) uses different ports (typically UDP 10000-20000 range). For VoIP deployment: open SIP ports on firewall, configure QoS for voice traffic priority, ensure adequate bandwidth, and use VLANs to separate voice and data traffic. Many VoIP systems use proprietary protocols instead of standard SIP."
  },
  {
    id: 11,
    question: "A network monitoring system uses SNMP to collect statistics from network devices. What ports does SNMP use?",
    options: [
      "161 (agent listens) and 162 (trap notifications)",
      "80 and 443",
      "20 and 21",
      "110 and 143"
    ],
    correct: 0,
    explanation: "SNMP (Simple Network Management Protocol) uses UDP port 161 for queries (manager to agent) and UDP port 162 for traps (unsolicited notifications from agent to manager). SNMP allows monitoring and managing network devices: collecting statistics, receiving alerts, and configuring devices remotely. SNMPv1 and SNMPv2c use community strings (like passwords) - weak security. SNMPv3 adds encryption and authentication. For security: use SNMPv3, change default community strings, restrict SNMP access by IP, and only enable read-only access unless write is needed."
  },
  {
    id: 12,
    question: "What is the purpose of port numbers in the TCP/IP protocol suite?",
    options: [
      "To identify the physical network port on a switch",
      "To identify specific applications or services running on a host, allowing multiple services to operate simultaneously on the same IP address",
      "To encrypt network traffic",
      "To speed up internet connections"
    ],
    correct: 1,
    explanation: "Port numbers (0-65535) identify specific applications or services on a host. Combined with an IP address, they create a socket (IP:port). Well-known ports (0-1023) are standardized for common services. Registered ports (1024-49151) are for applications. Dynamic/private ports (49152-65535) are temporarily assigned for client connections. For example, a server at 192.168.1.10 can simultaneously run: web (port 80), email (port 25), FTP (port 21), and SSH (port 22). The port number ensures traffic reaches the correct service. This is fundamental to how multiple services coexist on one IP."
  },
  {
    id: 13,
    question: "A company wants to allow external access to their internal web server which is at private IP 192.168.1.100. The router has public IP 203.0.113.50. What configuration is needed?",
    options: [
      "Nothing - private IPs are automatically accessible",
      "Port forwarding (PAT) on the router to forward external port 80/443 traffic to 192.168.1.100:80/443",
      "Change the web server to a public IP",
      "Disable the firewall completely"
    ],
    correct: 1,
    explanation: "Port forwarding (also called PAT - Port Address Translation or destination NAT) maps external traffic to internal hosts. Configure the router to forward: external 203.0.113.50:80 → internal 192.168.1.100:80 and external 203.0.113.50:443 → internal 192.168.1.100:443. Users access http://203.0.113.50 and the router forwards to the internal server. Security considerations: only forward necessary ports, use strong authentication, keep software updated, and consider VPN for sensitive services. For multiple internal servers, use different external ports or additional public IPs."
  },
  {
    id: 14,
    question: "Which protocol provides automatic IP address configuration including IP address, subnet mask, default gateway, and DNS servers?",
    options: [
      "HTTP",
      "FTP",
      "DHCP (Dynamic Host Configuration Protocol) on ports 67/68",
      "Telnet"
    ],
    correct: 2,
    explanation: "DHCP (Dynamic Host Configuration Protocol) uses UDP ports 67 (server) and 68 (client). DHCP automates IP configuration, providing: IP address, subnet mask, default gateway, DNS servers, lease time, and optional parameters (NTP, WINS, domain name). The DORA process (Discover, Offer, Request, Acknowledge) assigns addresses. Benefits: centralized management, prevents IP conflicts, easy reconfiguration, efficient address utilization. DHCP server configuration includes: scope (IP range), exclusions, reservations, lease time, and options. Servers and network devices typically use static IPs, while workstations use DHCP."
  },
  {
    id: 15,
    question: "A network administrator needs to allow secure LDAP queries to Active Directory from remote sites. What port should be opened?",
    options: [
      "389 (insecure LDAP)",
      "636 (LDAPS - LDAP over SSL/TLS)",
      "443",
      "3389"
    ],
    correct: 1,
    explanation: "LDAPS (LDAP over SSL/TLS) uses port 636 for secure directory queries. Standard LDAP (port 389) is unencrypted. Active Directory uses LDAP for queries and authentication. Modern environments should use LDAPS (636) or LDAP with STARTTLS (389) to encrypt credentials and data. Port 389 is acceptable for internal networks but port 636 should be used across untrusted networks. Active Directory also uses: Kerberos (port 88), DNS (port 53), SMB (port 445), and various RPC ports. Always encrypt authentication traffic, especially across site-to-site connections."
  }
];