export const lesson9Flashcards = [
  {
    id: 1,
    front: "What are port numbers?",
    back: "16-bit numbers (0-65535) identifying specific processes/services. Allow multiple apps on same IP."
  },
  {
    id: 2,
    front: "Well-known port range?",
    back: "0-1023. Reserved for standard services. Require admin/root privileges."
  },
  {
    id: 3,
    front: "Registered port range?",
    back: "1024-49151. Vendor-specific applications. No special privileges required."
  },
  {
    id: 4,
    front: "Dynamic/ephemeral port range?",
    back: "49152-65535. Temporary client source ports, randomly assigned by OS."
  },
  {
    id: 5,
    front: "FTP ports?",
    back: "20 (data), 21 (control). TCP. Unencrypted. Use SFTP (22) or FTPS (989/990)."
  },
  {
    id: 6,
    front: "SSH port?",
    back: "22. TCP. Secure remote access with encryption. Also SFTP. Replaced Telnet."
  },
  {
    id: 7,
    front: "Telnet port?",
    back: "23. TCP. Unencrypted remote access (OBSOLETE). Plain text passwords. Use SSH."
  },
  {
    id: 8,
    front: "SMTP port?",
    back: "25. TCP. Sending email between servers. TLS: port 587."
  },
  {
    id: 9,
    front: "DNS port?",
    back: "53. UDP (queries) and TCP (zone transfers). Domain name to IP translation."
  },
  {
    id: 10,
    front: "DHCP ports?",
    back: "67 (server), 68 (client). UDP. Automatic IP assignment. DORA process."
  },
  {
    id: 11,
    front: "TFTP port?",
    back: "69. UDP (not TCP!). Simple file transfer, no auth. Firmware updates, PXE boot."
  },
  {
    id: 12,
    front: "HTTP port?",
    back: "80. TCP. Unencrypted web. Being replaced by HTTPS. Browsers show 'Not Secure'."
  },
  {
    id: 13,
    front: "POP3 port?",
    back: "110. TCP. Downloads email, removes from server. Secure: POP3S (995)."
  },
  {
    id: 14,
    front: "NTP port?",
    back: "123. UDP. Time sync. Critical for Kerberos, SSL certs, logging, 2FA."
  },
  {
    id: 15,
    front: "NetBIOS ports?",
    back: "137 (Name-UDP), 138 (Datagram-UDP), 139 (Session-TCP). Windows networking. Replaced by SMB (445)."
  },
  {
    id: 16,
    front: "IMAP port?",
    back: "143. TCP. Email stays on server, syncs devices. Secure: IMAPS (993)."
  },
  {
    id: 17,
    front: "SNMP ports?",
    back: "161 (queries), 162 (traps). UDP. Network monitoring. Routers, switches, servers."
  },
  {
    id: 18,
    front: "LDAP port?",
    back: "389. TCP. Directory services (Active Directory). Secure: LDAPS (636)."
  },
  {
    id: 19,
    front: "HTTPS port?",
    back: "443. TCP. Secure web with TLS/SSL. Replaced HTTP. Padlock icon."
  },
  {
    id: 20,
    front: "SMB port?",
    back: "445. TCP. Windows file/printer sharing (CIFS). Network drives. Block at firewalls."
  },
  {
    id: 21,
    front: "LDAPS port?",
    back: "636. TCP. LDAP with TLS/SSL. Secure directory services."
  },
  {
    id: 22,
    front: "FTPS ports?",
    back: "989 (data), 990 (control). TCP. FTP with TLS/SSL. Different from SFTP (uses SSH port 22)."
  },
  {
    id: 23,
    front: "IMAPS port?",
    back: "993. TCP. IMAP with TLS/SSL. Secure email, stays on server."
  },
  {
    id: 24,
    front: "POP3S port?",
    back: "995. TCP. POP3 with TLS/SSL. Secure email download, removes from server."
  },
  {
    id: 25,
    front: "RDP port?",
    back: "3389. TCP. Windows Remote Desktop. Use VPN when internet-facing."
  },
  {
    id: 26,
    front: "SIP ports?",
    back: "5060 (unencrypted), 5061 (TLS). TCP/UDP. VoIP call signaling."
  },
  {
    id: 27,
    front: "What is a socket?",
    back: "IP address + port number. Example: 192.168.1.100:443. Uniquely identifies connection endpoint."
  },
  {
    id: 28,
    front: "Source vs destination ports?",
    back: "Destination: service you're connecting to (well-known). Source: your randomly assigned port (ephemeral 49152-65535)."
  },
  {
    id: 29,
    front: "TCP vs UDP usage?",
    back: "TCP: reliable, guaranteed delivery (web, email, files). UDP: fast, no guarantee (DNS, DHCP, streaming). Reliability vs speed."
  },
  {
    id: 30,
    front: "Which protocols use TCP?",
    back: "HTTP (80), HTTPS (443), SSH (22), Telnet (23), FTP (20/21), SMTP (25), POP3 (110), IMAP (143), SMB (445), RDP (3389), LDAP (389)."
  },
  {
    id: 31,
    front: "Which protocols use UDP?",
    back: "DNS (53), DHCP (67/68), TFTP (69), NTP (123), SNMP (161/162), NetBIOS (137/138)."
  },
  {
    id: 32,
    front: "HTTP → HTTPS?",
    back: "80 → 443. Adds TLS/SSL encryption. Protects data, prevents eavesdropping."
  },
  {
    id: 33,
    front: "Telnet → SSH?",
    back: "23 → 22. Adds encryption. Telnet sends plain text passwords. Never use Telnet in production."
  },
  {
    id: 34,
    front: "FTP → SFTP/FTPS?",
    back: "20/21 → 22 (SFTP via SSH) or 989/990 (FTPS via TLS). Adds encryption."
  },
  {
    id: 35,
    front: "SMTP → SMTP with TLS?",
    back: "25 → 587 (with STARTTLS). Adds encryption for email/credentials."
  },
  {
    id: 36,
    front: "POP3 → POP3S?",
    back: "110 → 995. Adds TLS/SSL for email download."
  },
  {
    id: 37,
    front: "IMAP → IMAPS?",
    back: "143 → 993. Adds TLS/SSL for email access."
  },
  {
    id: 38,
    front: "LDAP → LDAPS?",
    back: "389 → 636. Adds TLS/SSL for directory queries."
  },
  {
    id: 39,
    front: "What is multiplexing?",
    back: "Multiple network conversations on same IP using different ports. Example: web, email, music streaming simultaneously."
  },
  {
    id: 40,
    front: "Why high client source ports?",
    back: "Ephemeral ports (49152-65535) randomly assigned. Allows multiple connections to same destination (different source ports)."
  },
  {
    id: 41,
    front: "What does 192.168.1.100:443 mean?",
    back: "IP 192.168.1.100 on port 443 (HTTPS). Socket notation showing device + service."
  },
  {
    id: 42,
    front: "Why DNS use UDP and TCP?",
    back: "UDP (53): fast queries. TCP (53): zone transfers and large queries (>512 bytes). Most queries use UDP."
  },
  {
    id: 43,
    front: "What is SFTP?",
    back: "SSH File Transfer Protocol, port 22 (via SSH). NOT FTPS (FTP over TLS on 989/990)."
  },
  {
    id: 44,
    front: "POP3 vs IMAP?",
    back: "POP3 (110): downloads, deletes from server. IMAP (143): keeps on server, syncs devices. IMAP better for multiple devices."
  },
  {
    id: 45,
    front: "Memory: SSH port 22",
    back: "Two shoes for secure shell - SSH needs 2 'shoes' (encryption) to walk securely."
  },
  {
    id: 46,
    front: "Memory: SMTP port 25",
    back: "Send Mail To Port 25 - words spell out port."
  },
  {
    id: 47,
    front: "Memory: DNS port 53",
    back: "Tree-fiddy ($3.50) for a name - DNS gives names for IPs."
  },
  {
    id: 48,
    front: "Memory: HTTP port 80",
    back: "Ate-zero security - HTTP has 8-0 (ate nothing) = no encryption."
  },
  {
    id: 49,
    front: "Memory: HTTPS port 443",
    back: "Four-four-three, secure for me - rhyme."
  },
  {
    id: 50,
    front: "Memory: RDP port 3389",
    back: "Three-three-eight-nine, remote desktop fine - rhyme."
  }
];

export default lesson9Flashcards;