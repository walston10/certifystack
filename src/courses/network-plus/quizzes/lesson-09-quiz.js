export const lesson9Quiz = [
  {
    question: "A security analyst is troubleshooting why users are receiving browser warnings when visiting the company’s intranet site. The URL starts with https:// but uses port 80 in the firewall configuration. Which port should be opened instead to ensure proper encrypted communication?",
    options: [
      "80",
      "443",
      "8080",
      "8443"
    ],
    correct: 1,
    explanation: "HTTPS uses port 443 for encrypted web traffic via TLS/SSL. Port 80 is used for unencrypted HTTP, so using it would cause certificate and encryption errors."
  },
  {
    question: "An administrator needs to securely log into a Linux server from a remote workstation over the internet. Which protocol and port combination should be used to protect credentials and session data during transmission?",
    options: [
      "Telnet on port 23",
      "FTP on port 21",
      "SSH on port 22",
      "SMTP on port 25"
    ],
    correct: 2,
    explanation: "SSH (Secure Shell) uses port 22 and provides encrypted command-line and file-transfer sessions, replacing Telnet’s insecure plaintext communication."
  },
  {
    question: "A technician is configuring a legacy FTP server. They notice two ports are in use: one for sending commands like USER and LIST, and another for actual file transfers. Which correctly identifies the purpose of each?",
    options: [
      "Port 20 is secure, port 21 is not",
      "Port 20 is for data transfer, port 21 is for control commands",
      "Port 20 handles uploads, port 21 handles downloads",
      "They're interchangeable"
    ],
    correct: 1,
    explanation: "FTP uses port 21 for control commands (login, directory navigation) and port 20 for the data connection (file transfer). This dual-port design separates command and data channels."
  },
  {
    question: "During a network audit, a technician needs to identify which port ranges are reserved for system-level or well-known services like HTTP and DNS. Which range is correct?",
    options: [
      "0-1023",
      "1024-49151",
      "49152-65535",
      "1-65535"
    ],
    correct: 0,
    explanation: "Well-known ports (0–1023) are assigned to standardized services like HTTP (80) and DNS (53). Registered ports (1024–49151) and dynamic ports (49152–65535) are used for other applications and client sessions."
  },
  {
    question: "A user reports that typing a web address like 'www.example.com' doesn’t work, but entering the IP address directly does. The technician suspects a DNS issue. Which port should be checked for proper operation on the DNS server?",
    options: [
      "25",
      "53",
      "80",
      "143"
    ],
    correct: 1,
    explanation: "DNS uses port 53 for both UDP (queries) and TCP (zone transfers). If blocked, domain names can’t resolve to IP addresses."
  },
  {
    question: "When a laptop connects to a new wireless network, it automatically receives an IP address and default gateway. Which protocol and ports make this possible?",
    options: [
      "DNS using port 53",
      "DHCP using ports 67 and 68",
      "SNMP using ports 161 and 162",
      "FTP using ports 20 and 21"
    ],
    correct: 1,
    explanation: "DHCP uses port 67 (server) and port 68 (client) over UDP to assign IP addresses dynamically through the DORA process (Discover, Offer, Request, Acknowledge)."
  },
  {
    question: "A network engineer notices that Telnet sessions to a router expose credentials in clear text during packet capture. Which protocol and port should be used instead to secure remote management?",
    options: [
      "RDP (3389)",
      "SSH (22)",
      "HTTPS (443)",
      "SFTP (22)"
    ],
    correct: 1,
    explanation: "SSH on port 22 provides encrypted command-line access and is the secure replacement for Telnet (port 23)."
  },
  {
    question: "A user configures their email client to download messages for offline viewing, but notices that messages disappear from the server afterward. Which email protocol and port are being used?",
    options: [
      "SMTP on port 25",
      "IMAP on port 143",
      "POP3 on port 110",
      "IMAPS on port 993"
    ],
    correct: 2,
    explanation: "POP3 on port 110 downloads and typically removes emails from the server. IMAP keeps emails stored on the server for access from multiple devices."
  },
  {
    question: "A company’s mail relay is failing to send messages to external domains. The firewall administrator confirms that the necessary outbound mail port is blocked. Which port should be opened to restore normal delivery?",
    options: [
      "25",
      "110",
      "143",
      "465"
    ],
    correct: 0,
    explanation: "SMTP uses port 25 for sending mail between servers. Modern clients use port 587 (STARTTLS) or 465 (implicit TLS) for secure outbound mail submission."
  },
  {
    question: "A cybersecurity consultant notices that an employee portal displays a padlock in the browser address bar. Which protocol and port combination ensures this secure web browsing session?",
    options: [
      "HTTP on port 80",
      "HTTPS on port 443",
      "SSH on port 22",
      "FTPS on port 990"
    ],
    correct: 1,
    explanation: "HTTPS uses port 443 to encrypt web traffic with TLS/SSL, ensuring data confidentiality and integrity between client and server."
  },
  {
    question: "A network admin captures DNS traffic and observes both UDP and TCP packets destined for port 53. Why would DNS use both transport protocols?",
    options: [
      "TCP only",
      "UDP only",
      "Both TCP and UDP",
      "ICMP"
    ],
    correct: 2,
    explanation: "DNS uses UDP for quick queries and TCP for larger data transfers (e.g., zone transfers). Both operate on port 53."
  },
  {
    question: "A help desk technician is setting up remote desktop access for users working from home. Which port must be open on the company’s firewall to allow Remote Desktop Protocol connections?",
    options: [
      "22",
      "23",
      "3389",
      "5900"
    ],
    correct: 2,
    explanation: "RDP uses port 3389 for graphical remote desktop sessions, primarily on Windows systems."
  },
  {
    question: "During network setup, a DHCP broadcast is observed being sent from 0.0.0.0 to 255.255.255.255. Which ports are being used in this transaction?",
    options: [
      "20 and 21",
      "67 and 68",
      "161 and 162",
      "137 and 138"
    ],
    correct: 1,
    explanation: "The DHCP client broadcasts from port 68 to the server at port 67. The server replies from 67 to 68, completing the IP assignment."
  },
  {
    question: "An employee uses multiple devices to check email, keeping all messages synced between laptop and phone. Which port allows this functionality?",
    options: [
      "Sending email (SMTP)",
      "Downloading email (POP3)",
      "Accessing email on server (IMAP)",
      "Secure email (IMAPS)"
    ],
    correct: 2,
    explanation: "IMAP uses port 143 to allow real-time access and synchronization of emails on the server across multiple devices."
  },
  {
    question: "A monitoring system receives traps from switches and routers whenever a link goes down. Which protocol and ports handle these notifications?",
    options: [
      "DHCP",
      "SNMP",
      "LDAP",
      "NetBIOS"
    ],
    correct: 1,
    explanation: "SNMP uses port 161 for queries and 162 for traps/alerts, allowing centralized device monitoring and status reporting."
  },
  {
    question: "A user tries to reach a non-secure web server. Which port does the HTTP service listen on by default?",
    options: [
      "8080",
      "80",
      "443",
      "8008"
    ],
    correct: 1,
    explanation: "HTTP uses port 80 for unencrypted web traffic. HTTPS uses port 443 for encrypted sessions."
  },
  {
    question: "A packet capture shows a client connecting to a web server on port 443 with a random high-numbered source port such as 51482. Which range do these temporary client ports fall into?",
    options: [
      "0-1023",
      "1024-49151",
      "49152-65535",
      "1024-65535"
    ],
    correct: 2,
    explanation: "Ephemeral (dynamic) ports 49152–65535 are randomly assigned for temporary client sessions to well-known server ports."
  },
  {
    question: "An e-commerce site requires encrypted connections to protect customer payment data. Which protocol and port combination ensures this secure communication?",
    options: [
      "HTTPS on port 443",
      "SHTTP on port 8443",
      "HTTP/S on port 80",
      "Secure HTTP on port 8080"
    ],
    correct: 0,
    explanation: "HTTPS (port 443) encrypts HTTP traffic using TLS/SSL, securing online transactions and sensitive user data."
  },
  {
    question: "A Windows file share is unavailable to users on a remote network. The administrator confirms SMB is running but blocked by the firewall. Which port must be opened for SMB traffic?",
    options: [
      "HTTPS",
      "LDAP",
      "SMB",
      "RDP"
    ],
    correct: 2,
    explanation: "SMB uses port 445 for file and printer sharing. Blocking this port prevents network share access."
  },
  {
    question: "A legacy server transfers files using FTP. Which two ports must be open for the service to function properly?",
    options: [
      "20 and 21",
      "22 and 23",
      "80 and 443",
      "110 and 143"
    ],
    correct: 0,
    explanation: "FTP uses port 21 for control commands and port 20 for the data connection. For security, modern networks prefer SFTP or FTPS."
  },
  {
    question: "A network technician is setting up PXE boot so that new workstations can download boot files directly from a server without credentials. Which port and transport protocol does this rely on?",
    options: [
      "Port 69, TCP",
      "Port 69, UDP",
      "Port 21, TCP",
      "Port 20, UDP"
    ],
    correct: 1,
    explanation: "TFTP uses UDP port 69 for lightweight file transfers during PXE boot and firmware updates. It has no authentication and minimal overhead."
  },
  {
    question: "A company’s Active Directory authentication requests are failing. The firewall logs show blocked traffic on port 389. Which service is being affected?",
    options: [
      "389",
      "443",
      "636",
      "3389"
    ],
    correct: 0,
    explanation: "LDAP uses port 389 for unencrypted directory lookups and authentication in Active Directory environments."
  },
  {
    question: "A systems administrator needs to secure directory queries in Active Directory to prevent credentials from being sent in clear text. Which port should be used instead of 389?",
    options: [
      "SLDAP on port 389",
      "LDAPS on port 636",
      "Secure LDAP on port 3389",
      "LDAP/TLS on port 443"
    ],
    correct: 1,
    explanation: "LDAPS uses port 636 and wraps LDAP traffic in TLS/SSL encryption to secure directory communication."
  },
  {
    question: "A VoIP engineer configures call setup for internal phones. Calls connect on port 5060 but are unencrypted. Which port should be used for TLS-encrypted SIP sessions?",
    options: [
      "5060 and 5061",
      "5000 and 5001",
      "5900 and 5901",
      "50 and 51"
    ],
    correct: 0,
    explanation: "SIP uses port 5060 for unencrypted signaling and 5061 for TLS-encrypted VoIP signaling. Audio data uses separate RTP ports."
  },
  {
    question: "A sysadmin notices timestamps in log files across multiple servers are inconsistent, breaking Kerberos authentication. Which protocol and port should be verified?",
    options: [
      "23",
      "123",
      "223",
      "323"
    ],
    correct: 1,
    explanation: "NTP uses UDP port 123 to synchronize clocks across network devices. Accurate timekeeping is crucial for authentication and log correlation."
  }
];

export default lesson9Quiz;
