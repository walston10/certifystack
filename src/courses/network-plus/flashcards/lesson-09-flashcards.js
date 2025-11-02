export const lesson9Flashcards = [
  {
    id: 1,
    front: "What are port numbers?",
    back: "16-bit numbers (0-65535) that identify specific processes or services on a device. They allow multiple network applications to run simultaneously on the same IP address."
  },
  {
    id: 2,
    front: "What is the well-known port range?",
    back: "Ports 0-1023. Reserved for standard services (HTTP, HTTPS, SSH, etc.). Require administrative/root privileges to use."
  },
  {
    id: 3,
    front: "What is the registered port range?",
    back: "Ports 1024-49151. Used by vendors for specific applications. Don't require special privileges. Less standardized than well-known ports."
  },
  {
    id: 4,
    front: "What is the dynamic/ephemeral port range?",
    back: "Ports 49152-65535. Used as temporary source ports by client applications. Randomly assigned by the operating system."
  },
  {
    id: 5,
    front: "FTP - Ports?",
    back: "Port 20 (data transfer) and Port 21 (control commands). TCP protocol. Unencrypted (insecure). Replaced by SFTP (port 22) or FTPS (989/990)."
  },
  {
    id: 6,
    front: "SSH - Port?",
    back: "Port 22. TCP. Secure remote access with encryption. Also used for SFTP (secure file transfer). Replaced Telnet (port 23)."
  },
  {
    id: 7,
    front: "Telnet - Port?",
    back: "Port 23. TCP. Unencrypted remote access (OBSOLETE). Sends passwords in plain text. Replaced by SSH (port 22) in modern networks."
  },
  {
    id: 8,
    front: "SMTP - Port?",
    back: "Port 25. TCP. Sending email between mail servers. Can use TLS (port 587 for submission). Used with POP3/IMAP for receiving."
  },
  {
    id: 9,
    front: "DNS - Port?",
    back: "Port 53. UDP (for queries) and TCP (for zone transfers). Translates domain names to IP addresses. Essential for internet browsing."
  },
  {
    id: 10,
    front: "DHCP - Ports?",
    back: "Port 67 (server) and Port 68 (client). UDP. Automatic IP address assignment. DORA process: Discover, Offer, Request, Acknowledge."
  },
  {
    id: 11,
    front: "TFTP - Port?",
    back: "Port 69. UDP (not TCP!). Simple file transfer with no authentication. Used for firmware updates, PXE boot. Less reliable than FTP."
  },
  {
    id: 12,
    front: "HTTP - Port?",
    back: "Port 80. TCP. Web browsing (unencrypted). Being phased out for HTTPS. Browsers show 'Not Secure' warnings."
  },
  {
    id: 13,
    front: "POP3 - Port?",
    back: "Port 110. TCP. Downloading email (removes from server). Secure version: POP3S (port 995). Different from IMAP which keeps messages on server."
  },
  {
    id: 14,
    front: "NTP - Port?",
    back: "Port 123. UDP. Time synchronization. Critical for Kerberos auth, SSL certificates, logging, 2FA. Syncs to stratum servers."
  },
  {
    id: 15,
    front: "NetBIOS - Ports?",
    back: "Ports 137 (Name Service - UDP), 138 (Datagram - UDP), 139 (Session - TCP). Windows networking (legacy). Mostly replaced by SMB on port 445."
  },
  {
    id: 16,
    front: "IMAP - Port?",
    back: "Port 143. TCP. Accessing email on server (stays on server). Syncs across devices. Secure version: IMAPS (port 993)."
  },
  {
    id: 17,
    front: "SNMP - Ports?",
    back: "Port 161 (queries/commands) and Port 162 (traps/alerts). UDP. Network device monitoring and management. Used on routers, switches, servers."
  },
  {
    id: 18,
    front: "LDAP - Port?",
    back: "Port 389. TCP. Directory services (Active Directory, user authentication). Secure version: LDAPS (port 636) with TLS/SSL."
  },
  {
    id: 19,
    front: "HTTPS - Port?",
    back: "Port 443. TCP. Secure web browsing with TLS/SSL encryption. Replaced HTTP (port 80) for sensitive sites. Padlock icon in browsers."
  },
  {
    id: 20,
    front: "SMB - Port?",
    back: "Port 445. TCP. Windows file and printer sharing. Also called CIFS. Accessing network drives and shared folders. Should be blocked at firewalls."
  },
  {
    id: 21,
    front: "LDAPS - Port?",
    back: "Port 636. TCP. LDAP with TLS/SSL encryption. Secure directory services. Protects authentication credentials and user data."
  },
  {
    id: 22,
    front: "FTPS - Ports?",
    back: "Port 989 (data) and Port 990 (control). TCP. FTP with TLS/SSL encryption. Different from SFTP which uses SSH (port 22)."
  },
  {
    id: 23,
    front: "IMAPS - Port?",
    back: "Port 993. TCP. IMAP with TLS/SSL encryption. Secure email access with messages staying on server."
  },
  {
    id: 24,
    front: "POP3S - Port?",
    back: "Port 995. TCP. POP3 with TLS/SSL encryption. Secure email download with messages removed from server."
  },
  {
    id: 25,
    front: "RDP - Port?",
    back: "Port 3389. TCP. Remote Desktop Protocol (Windows graphical remote access). Can be encrypted with TLS. Should use VPN when internet-facing."
  },
  {
    id: 26,
    front: "SIP - Ports?",
    back: "Port 5060 (unencrypted) and Port 5061 (with TLS). TCP and UDP. VoIP call signaling. Sets up, modifies, terminates voice/video calls."
  },
  {
    id: 27,
    front: "What is a socket?",
    back: "The combination of IP address + port number. Example: 192.168.1.100:443 (IP address 192.168.1.100 on port 443). Uniquely identifies a network connection endpoint."
  },
  {
    id: 28,
    front: "What is the difference between source and destination ports?",
    back: "Destination port: The service you're connecting to (usually well-known, like 80 for HTTP). Source port: Your computer's randomly assigned port (usually ephemeral range 49152-65535) for that specific connection."
  },
  {
    id: 29,
    front: "Why use TCP for some protocols and UDP for others?",
    back: "TCP: Reliable, connection-oriented, guarantees delivery (web, email, file transfer). UDP: Fast, connectionless, no delivery guarantee (DNS queries, DHCP, streaming, time sync). Choice depends on whether reliability or speed matters more."
  },
  {
    id: 30,
    front: "Which protocols use TCP?",
    back: "HTTP (80), HTTPS (443), SSH (22), Telnet (23), FTP (20/21), SMTP (25), POP3 (110), IMAP (143), SMB (445), RDP (3389), LDAP (389). Protocols needing reliability."
  },
  {
    id: 31,
    front: "Which protocols use UDP?",
    back: "DNS (53), DHCP (67/68), TFTP (69), NTP (123), SNMP (161/162), NetBIOS (137/138). Protocols prioritizing speed over guaranteed delivery."
  },
  {
    id: 32,
    front: "HTTP → HTTPS upgrade",
    back: "Port 80 → Port 443. Adds TLS/SSL encryption. Protects data in transit, prevents eavesdropping. Modern websites default to HTTPS."
  },
  {
    id: 33,
    front: "Telnet → SSH upgrade",
    back: "Port 23 → Port 22. Adds encryption. Telnet sends passwords in plain text. SSH encrypts all communication. Never use Telnet in production."
  },
  {
    id: 34,
    front: "FTP → SFTP/FTPS upgrade",
    back: "Ports 20/21 → Port 22 (SFTP via SSH) or Ports 989/990 (FTPS via TLS). Adds encryption. FTP credentials visible to packet sniffers."
  },
  {
    id: 35,
    front: "SMTP → SMTP with TLS upgrade",
    back: "Port 25 → Port 587 (with STARTTLS). Adds encryption. Protects email content and credentials during transmission."
  },
  {
    id: 36,
    front: "POP3 → POP3S upgrade",
    back: "Port 110 → Port 995. Adds TLS/SSL encryption. Protects email download and authentication."
  },
  {
    id: 37,
    front: "IMAP → IMAPS upgrade",
    back: "Port 143 → Port 993. Adds TLS/SSL encryption. Protects email access and credentials."
  },
  {
    id: 38,
    front: "LDAP → LDAPS upgrade",
    back: "Port 389 → Port 636. Adds TLS/SSL encryption. Protects directory queries and authentication credentials."
  },
  {
    id: 39,
    front: "What is multiplexing?",
    back: "Using port numbers to allow multiple network conversations simultaneously on the same IP address. Example: browsing web (port 443), checking email (port 993), streaming music (various ports) all at once."
  },
  {
    id: 40,
    front: "Why do client source ports use high numbers?",
    back: "Clients use ephemeral ports (49152-65535) randomly assigned by OS. This allows multiple simultaneous connections to the same destination (e.g., multiple browser tabs to google.com:443 use different source ports: 52341, 52342, etc.)."
  },
  {
    id: 41,
    front: "What does 192.168.1.100:443 mean?",
    back: "IP address 192.168.1.100 on port 443 (HTTPS). This socket notation shows the exact endpoint: which device (IP) and which service (port) on that device."
  },
  {
    id: 42,
    front: "Why does DNS use both UDP and TCP?",
    back: "UDP (port 53): Fast queries for normal DNS lookups. TCP (port 53): Reliable zone transfers and queries >512 bytes. Most DNS queries are UDP for speed."
  },
  {
    id: 43,
    front: "What is SFTP and what port does it use?",
    back: "SSH File Transfer Protocol - uses port 22 (same as SSH). Secure file transfer over SSH tunnel. NOT the same as FTPS (FTP over TLS on ports 989/990)."
  },
  {
    id: 44,
    front: "What is the difference between POP3 and IMAP?",
    back: "POP3 (110): Downloads messages and typically deletes from server. IMAP (143): Keeps messages on server, syncs across devices. IMAP better for multiple devices."
  },
  {
    id: 45,
    front: "Memory trick: SSH port 22",
    back: "Two shoes for secure shell - SSH needs 2 'shoes' (encryption) to walk securely."
  },
  {
    id: 46,
    front: "Memory trick: SMTP port 25",
    back: "Send Mail To Port 25 - The words spell out the port number."
  },
  {
    id: 47,
    front: "Memory trick: DNS port 53",
    back: "Tree-fiddy (3.50 = $3.50) for a name - DNS gives you names for IP addresses."
  },
  {
    id: 48,
    front: "Memory trick: HTTP port 80",
    back: "Ate-zero security - HTTP has 8-0 (ate nothing) = no security/encryption."
  },
  {
    id: 49,
    front: "Memory trick: HTTPS port 443",
    back: "Four-four-three, secure for me - The rhyme makes it memorable."
  },
  {
    id: 50,
    front: "Memory trick: RDP port 3389",
    back: "Three-three-eight-nine, remote desktop fine - Rhyme to remember RDP port."
  }
];

export default lesson9Flashcards;