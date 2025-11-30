export const lesson13Flashcards = [
  {
    id: 1,
    front: "What are port numbers and what is their range?",
    back: "16-bit numbers (0-65535) that identify specific services/applications. Well-known: 0-1023 (standard services). Registered: 1024-49151 (vendor applications). Dynamic/Private: 49152-65535 (temporary/client)."
  },
  {
    id: 2,
    front: "What is FTP and what ports does it use?",
    back: "File Transfer Protocol. Port 20 (data transfer), Port 21 (control/commands). TCP protocol. Unencrypted - credentials sent in clear text. Use SFTP (port 22) or FTPS instead for security."
  },
  {
    id: 3,
    front: "What is SSH and what port does it use?",
    back: "Secure Shell. Port 22. TCP protocol. Encrypted remote access to command line. Replaces Telnet. Also used for SFTP (secure file transfer) and tunneling. Industry standard for secure remote admin."
  },
  {
    id: 4,
    front: "What is Telnet and what port does it use?",
    back: "Port 23. TCP protocol. Unencrypted remote access to command line. All data including passwords sent in clear text. Replaced by SSH. Still used to test port connectivity."
  },
  {
    id: 5,
    front: "What is SMTP and what port does it use?",
    back: "Simple Mail Transfer Protocol. Port 25 (server-to-server). Port 587 (client submission with STARTTLS). Port 465 (SMTPS, deprecated). TCP protocol. Sends outgoing email. Always used for sending."
  },
  {
    id: 6,
    front: "What is DNS and what port does it use?",
    back: "Domain Name System. Port 53. Both TCP and UDP (UDP for queries, TCP for zone transfers). Translates domain names to IP addresses. Critical for internet functionality."
  },
  {
    id: 7,
    front: "What is DHCP and what ports does it use?",
    back: "Dynamic Host Configuration Protocol. Port 67 (server), Port 68 (client). UDP protocol. Automatically assigns IP addresses and network configuration. Eliminates manual IP setup."
  },
  {
    id: 8,
    front: "What is TFTP and what port does it use?",
    back: "Trivial File Transfer Protocol. Port 69. UDP protocol. Simplified file transfer, no authentication. Used for: network device firmware, PXE boot, lightweight transfers. Less features than FTP."
  },
  {
    id: 9,
    front: "What is HTTP and what port does it use?",
    back: "Hypertext Transfer Protocol. Port 80. TCP protocol. Transfers web pages and web content. Unencrypted - all data visible. Replaced by HTTPS (port 443) for security."
  },
  {
    id: 10,
    front: "What is POP3 and what ports does it use?",
    back: "Post Office Protocol version 3. Port 110 (unencrypted), Port 995 (POP3S with SSL/TLS). TCP protocol. Downloads email and typically deletes from server. No folder sync. Legacy protocol."
  },
  {
    id: 11,
    front: "What is NTP and what port does it use?",
    back: "Network Time Protocol. Port 123. UDP protocol. Synchronizes clocks across network devices. Critical for logs, authentication (Kerberos), certificates. Uses stratum levels for accuracy."
  },
  {
    id: 12,
    front: "What is NetBIOS and what ports does it use?",
    back: "Network Basic Input/Output System. Ports 137 (name service), 138 (datagram), 139 (session). UDP and TCP. Legacy Windows networking. Largely replaced by SMB direct on port 445."
  },
  {
    id: 13,
    front: "What is IMAP and what ports does it use?",
    back: "Internet Message Access Protocol. Port 143 (unencrypted), Port 993 (IMAPS with SSL/TLS). TCP protocol. Keeps email on server, syncs folders across devices. Modern email standard."
  },
  {
    id: 14,
    front: "What is SNMP and what ports does it use?",
    back: "Simple Network Management Protocol. Port 161 (agent/queries), Port 162 (traps/notifications). UDP protocol. Monitors and manages network devices. SNMPv3 adds encryption (v1/v2c insecure)."
  },
  {
    id: 15,
    front: "What is HTTPS and what port does it use?",
    back: "HTTP Secure. Port 443. TCP protocol. HTTP encrypted with SSL/TLS. Encrypts all web traffic. Shows padlock in browser. Required for login, payments, sensitive data. Industry standard."
  },
  {
    id: 16,
    front: "What is SMB and what port does it use?",
    back: "Server Message Block. Port 445. TCP protocol. Windows file and printer sharing. Also called CIFS. Direct SMB (doesn't need NetBIOS). Linux can use via Samba."
  },
  {
    id: 17,
    front: "What is LDAP and what ports does it use?",
    back: "Lightweight Directory Access Protocol. Port 389 (unencrypted), Port 636 (LDAPS with SSL/TLS). TCP protocol. Accesses directory services like Active Directory. Used for authentication and user lookups."
  },
  {
    id: 18,
    front: "What is RDP and what port does it use?",
    back: "Remote Desktop Protocol. Port 3389. TCP protocol. Microsoft's remote desktop access. Full graphical remote control of Windows systems. Encrypted. Very common for Windows administration."
  },
  {
    id: 19,
    front: "What is SIP and what ports does it use?",
    back: "Session Initiation Protocol. Port 5060 (unencrypted), Port 5061 (encrypted with TLS). UDP and TCP. Establishes VoIP calls and video conferences. Used with RTP for actual media streams."
  },
  {
    id: 20,
    front: "What is the difference between TCP and UDP?",
    back: "TCP: Connection-oriented, reliable, guarantees delivery, error checking, slower, ordered packets. UDP: Connectionless, unreliable, no guarantees, faster, no error recovery. Use TCP for accuracy, UDP for speed."
  },
  {
    id: 21,
    front: "What protocols use TCP?",
    back: "HTTP (80), HTTPS (443), FTP (20/21), SSH (22), Telnet (23), SMTP (25), POP3 (110/995), IMAP (143/993), SMB (445), RDP (3389), LDAP (389/636). Most application protocols requiring reliability."
  },
  {
    id: 22,
    front: "What protocols use UDP?",
    back: "DNS (53, also TCP), DHCP (67/68), TFTP (69), SNMP (161/162), NTP (123), SIP (5060/5061, also TCP). Protocols where speed more important than reliability. Real-time applications."
  },
  {
    id: 23,
    front: "What are secure alternatives to insecure protocols?",
    back: "Telnet → SSH (22). FTP → SFTP (22) or FTPS. HTTP → HTTPS (443). SMTP → SMTP with TLS (587). POP3 → POP3S (995). IMAP → IMAPS (993). LDAP → LDAPS (636). Always use encrypted versions."
  },
  {
    id: 24,
    front: "What is SFTP and how does it differ from FTPS?",
    back: "SFTP: SSH File Transfer Protocol, uses SSH (port 22), encrypted channel, simpler. FTPS: FTP Secure, FTP with SSL/TLS, uses port 21 + data port, more complex. Both secure - SFTP preferred."
  },
  {
    id: 25,
    front: "What ports does RADIUS use?",
    back: "Port 1812 (authentication), Port 1813 (accounting). UDP protocol. Centralized AAA for VPNs, wireless (802.1X), network access. Legacy ports: 1645/1646 (older implementations)."
  },
  {
    id: 26,
    front: "What port does TACACS+ use?",
    back: "Port 49. TCP protocol. Cisco proprietary AAA. Encrypts entire packet (RADIUS only password). Separates authentication, authorization, accounting. Used for network device administration."
  },
  {
    id: 27,
    front: "What port does Kerberos use?",
    back: "Port 88. TCP and UDP. Ticket-based authentication protocol. Used by Active Directory. Mutual authentication. Requires synchronized time (NTP critical). More secure than password-based."
  },
  {
    id: 28,
    front: "What is the purpose of well-known ports (0-1023)?",
    back: "Reserved for standard services and protocols. Assigned by IANA. Require administrator/root privileges to bind. Examples: HTTP (80), HTTPS (443), SSH (22), DNS (53). Universally recognized."
  },
  {
    id: 29,
    front: "How do you remember the common port numbers for the A+ exam?",
    back: "Group by function: Email (25/110/143/587/993/995), Web (80/443), File transfer (20/21/22), Remote access (22/23/3389), Directory (389/636), Network services (53/67/68/123/161/162/445). Practice frequently."
  },
  {
    id: 30,
    front: "What is port forwarding and why is it used?",
    back: "Routes external traffic to specific internal IP and port. Configured on router/firewall. Allows external access to internal services (web server, game server, cameras). Maps public IP:port to private IP:port."
  }
];