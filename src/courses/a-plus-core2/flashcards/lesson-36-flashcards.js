export const lesson36Flashcards = [
  {
    id: 1,
    front: "What is Network and Sharing Center used for?",
    back: "View network status, connection type, change adapter settings, troubleshoot network issues, set network location (Public/Private). Access: Control Panel → Network and Internet → Network and Sharing Center."
  },
  {
    id: 2,
    front: "How do you configure a static IP address in Windows?",
    back: "Network and Sharing Center → Change adapter settings → right-click adapter → Properties → Internet Protocol Version 4 (TCP/IPv4) → Properties → Use the following IP address → enter IP, subnet mask, gateway, DNS."
  },
  {
    id: 3,
    front: "What is the difference between DHCP and static IP configuration?",
    back: "DHCP: automatic IP assignment from DHCP server, easy setup, IP may change. Static: manually configured IP, never changes, required for servers/printers, more admin work. Most clients use DHCP."
  },
  {
    id: 4,
    front: "What network information do you need to configure a static IP?",
    back: "IP address (unique on network), subnet mask (defines network size), default gateway (router IP), DNS server addresses (primary and secondary for name resolution). Get from network admin or router."
  },
  {
    id: 5,
    front: "What are network location profiles in Windows?",
    back: "Public (untrusted networks - coffee shop, airport), Private (trusted home/work network), Domain (corporate domain network). Different firewall rules per profile - Public most restrictive, Private less, Domain least."
  },
  {
    id: 6,
    front: "When should you use Public vs Private network profile?",
    back: "Public: any untrusted network (coffee shops, hotels, airports) - blocks file sharing, network discovery. Private: home/trusted work network - enables sharing, discovery. Domain: automatically set when joined to domain."
  },
  {
    id: 7,
    front: "What is network discovery?",
    back: "Allows computer to see and be seen by other devices on network. Needed for file/printer sharing. Enabled on Private/Domain networks, disabled on Public. Settings → Network & Internet → Network status → Advanced sharing."
  },
  {
    id: 8,
    front: "What is file and printer sharing?",
    back: "Allows others on network to access shared folders and printers on your computer. Requires network discovery enabled. Configure in Advanced sharing settings. Set per network profile (Public/Private/Domain)."
  },
  {
    id: 9,
    front: "How do you share a folder on the network?",
    back: "Right-click folder → Give access to → Specific people → select users → set permission level (Read or Read/Write) → Share. Or Properties → Sharing tab → Advanced Sharing → set permissions."
  },
  {
    id: 10,
    front: "What is a workgroup?",
    back: "Peer-to-peer network of computers, no central server. Each computer manages own users/resources. Default: WORKGROUP. Good for small networks (home, small office). Maximum 20 computers recommended."
  },
  {
    id: 11,
    front: "What is a domain?",
    back: "Centralized network with domain controller (server) managing authentication, policies, resources. Active Directory stores user accounts centrally. Requires Windows Pro or higher. Used in business environments."
  },
  {
    id: 12,
    front: "What's the difference between workgroup and domain?",
    back: "Workgroup: decentralized, separate accounts per PC, peer-to-peer, small networks. Domain: centralized management, one account for all PCs, server controls policies, scalable, secure, enterprise use. Domain requires AD server."
  },
  {
    id: 13,
    front: "How do you join a Windows computer to a domain?",
    back: "System Properties → Computer Name tab → Change → select Domain → enter domain name → OK → provide domain admin credentials → restart. Requires Windows Pro/Enterprise and network connection to domain controller."
  },
  {
    id: 14,
    front: "What is HomeGroup and is it still used?",
    back: "Legacy Windows 7/10 feature for easy home network sharing. Simplified sharing pictures, music, videos, printers. Removed in Windows 10 version 1803 and later. Use standard file sharing instead."
  },
  {
    id: 15,
    front: "How do you map a network drive?",
    back: "File Explorer → This PC → Map network drive → choose drive letter → enter \\\\server\\share path → check 'Reconnect at sign-in' for persistence → Finish. Or use 'net use' command."
  },
  {
    id: 16,
    front: "What is the UNC path format for accessing network shares?",
    back: "\\\\servername\\sharename or \\\\IPaddress\\sharename. Example: \\\\fileserver\\documents or \\\\192.168.1.10\\shared. Use in File Explorer address bar, Map Network Drive, scripts."
  },
  {
    id: 17,
    front: "How do you configure DNS server addresses?",
    back: "Adapter properties → TCP/IPv4 → Properties → Use the following DNS server addresses → enter Preferred (primary) and Alternate (secondary) DNS servers. Common: Google 8.8.8.8/8.8.4.4, Cloudflare 1.1.1.1/1.0.0.1."
  },
  {
    id: 18,
    front: "What is the default gateway and why is it needed?",
    back: "Router's IP address that forwards traffic to other networks/internet. Without gateway, can only reach local network. Example: home router at 192.168.1.1. Set in TCP/IP properties or obtained via DHCP."
  },
  {
    id: 19,
    front: "How do you configure Windows Firewall to allow a program?",
    back: "Windows Defender Firewall → Allow an app through firewall → Change settings → check app and network types (Private/Public) → OK. Or Advanced settings for custom rules by port/protocol."
  },
  {
    id: 20,
    front: "What firewall rule types can you create?",
    back: "Inbound (incoming connections to your computer), Outbound (your computer connecting out). Filter by program, port, protocol, IP address. Action: Allow, Block, Allow if secure. Apply to specific profiles."
  },
  {
    id: 21,
    front: "How do you troubleshoot network connectivity using Windows?",
    back: "Network and Sharing Center → Troubleshoot problems. Or right-click network icon → Troubleshoot problems. Automatically diagnoses common issues: DHCP, DNS, gateway, driver problems. Applies fixes when possible."
  },
  {
    id: 22,
    front: "What is VPN configuration in Windows?",
    back: "Settings → Network & Internet → VPN → Add VPN connection → enter server name/address, connection name, authentication type, credentials. Supports PPTP, L2TP/IPsec, SSTP, IKEv2. Connect before accessing remote resources."
  },
  {
    id: 23,
    front: "What VPN protocols does Windows support?",
    back: "PPTP (legacy, less secure), L2TP/IPsec (good security), SSTP (uses SSL, port 443), IKEv2 (fast reconnect, mobile). Always-On VPN in Enterprise. Use IKEv2 or L2TP/IPsec for best security."
  },
  {
    id: 24,
    front: "How do you configure proxy settings in Windows?",
    back: "Settings → Network & Internet → Proxy. Manual: enter proxy server address and port, exclusions. Automatic: use setup script URL or automatic detection. Corporate networks often require proxy for internet access."
  },
  {
    id: 25,
    front: "What is Wi-Fi configuration in Windows?",
    back: "Settings → Network & Internet → Wi-Fi → Show available networks → select SSID → Connect → enter password. Manage known networks: forget networks, set metered connection, configure properties (security type)."
  },
  {
    id: 26,
    front: "What is a metered connection and when would you use it?",
    back: "Marks connection as having data limits - prevents large downloads, updates. Settings → Network & Internet → connection properties → Set as metered. Use for cellular hotspots, limited data plans, satellite connections."
  },
  {
    id: 27,
    front: "How do you view network adapter status and statistics?",
    back: "Network and Sharing Center → Change adapter settings → double-click adapter → shows connection status, duration, speed, packets sent/received. Or use ipconfig, netstat commands. Properties for configuration."
  },
  {
    id: 28,
    front: "What does 'Limited connectivity' mean and how do you fix it?",
    back: "Connected to network but no internet access. Usually DHCP failure (APIPA 169.254.x.x) or gateway/DNS issue. Fix: ipconfig /release then /renew, check gateway/DNS settings, restart router, verify cable/Wi-Fi, check firewall."
  },
  {
    id: 29,
    front: "How do you enable/disable a network adapter?",
    back: "Network and Sharing Center → Change adapter settings → right-click adapter → Disable/Enable. Or Device Manager → Network adapters → right-click → Disable/Enable. Useful for troubleshooting or forcing DHCP renewal."
  },
  {
    id: 30,
    front: "What is IPv6 configuration in Windows?",
    back: "Usually auto-configured via SLAAC (Stateless Address Autoconfiguration) or DHCPv6. Manual: adapter properties → TCP/IPv6 → enter IPv6 address, prefix length, gateway, DNS. Most networks use IPv4; IPv6 often auto-configured."
  }
];