export const lesson36Quiz = [
  {
    id: 1,
    question: "A user brings their laptop from home and connects to the office network. Windows prompts them to choose a network profile. They select 'Public' by mistake. Now they can't access shared folders on the office network. What should they do?",
    options: [
      "Reinstall the network adapter drivers",
      "Change the network profile from Public to Private in Settings",
      "Disable Windows Defender Firewall completely",
      "Forget the network and reconnect"
    ],
    correct: 1,
    explanation: "Network profiles (Public vs Private) control firewall settings and network discovery. Public networks disable file sharing and network discovery for security. Changing to Private (Settings > Network & Internet > Properties > Network profile type) enables these features for trusted networks. Reinstalling drivers won't help. Disabling the firewall is a security risk. Forgetting and reconnecting will likely result in the same prompt."
  },
  {
    id: 2,
    question: "A small business has five computers in a workgroup. Users complain they can't see other computers in File Explorer's Network section. What setting needs to be enabled?",
    options: [
      "Windows Defender Firewall",
      "Network Discovery in Network and Sharing Center",
      "Remote Desktop",
      "Internet Connection Sharing"
    ],
    correct: 1,
    explanation: "Network Discovery must be enabled for computers to see each other in the Network section of File Explorer. This is configured in Network and Sharing Center > Advanced sharing settings. When disabled, computers won't appear in network browsing even if file sharing is enabled. The firewall should be on, not off. Remote Desktop is for remote access, not network browsing. ICS is for sharing internet connections."
  },
  {
    id: 3,
    question: "An employee working from home needs to access company resources. Their IT department has set up a VPN server. After connecting to the VPN, the employee can access company servers but can no longer access their home printer or browse the internet normally. What VPN setting is likely configured?",
    options: [
      "Split tunneling is disabled (full tunneling is active)",
      "Split tunneling is enabled",
      "The VPN is using IKEv2 protocol",
      "Network Discovery is disabled on the VPN"
    ],
    correct: 0,
    explanation: "When full tunneling is active (split tunneling disabled), ALL traffic goes through the VPN tunnel, including internet browsing and local network access. This provides maximum security but prevents access to local resources. Split tunneling would allow local and internet access while routing only company traffic through VPN. The protocol type doesn't determine this behavior. Network Discovery doesn't affect VPN routing."
  },
  {
    id: 4,
    question: "A computer receives an IP address of 169.254.15.92. The user can't access any network resources. What does this IP address indicate?",
    options: [
      "The computer has a valid static IP address",
      "The computer successfully received a DHCP address",
      "The computer failed to contact a DHCP server and assigned itself an APIPA address",
      "The computer is configured for IPv6 only"
    ],
    correct: 2,
    explanation: "169.254.x.x addresses are APIPA (Automatic Private IP Addressing) addresses that Windows assigns when DHCP is configured but no DHCP server responds. This indicates a DHCP failure - check network cable, DHCP server status, or switch configuration. It's not a valid static IP for production networks. DHCP didn't succeed. IPv6 addresses look completely different (hexadecimal format)."
  },
  {
    id: 5,
    question: "A user needs to connect to their office computer from home using Remote Desktop. Their home computer runs Windows 11 Home, and their office computer runs Windows 11 Pro. They configure everything correctly but still can't connect. What is the MOST likely issue?",
    options: [
      "Windows 11 Home can't be a Remote Desktop client",
      "Windows 11 Pro can't be a Remote Desktop host",
      "They need to upgrade their office computer to Windows 11 Enterprise",
      "Remote Desktop is blocked by a firewall"
    ],
    correct: 3,
    explanation: "If everything is configured correctly (office PC is Pro/Enterprise, Remote Desktop enabled, credentials correct) but connection fails, the firewall is the most likely culprit. Windows Defender Firewall or the network firewall may be blocking port 3389. Windows 11 Home CAN be a client (connecting to other computers). Pro CAN host Remote Desktop. Enterprise isn't required. A firewall issue is most common."
  },
  {
    id: 6,
    question: "A small office wants to share an internet connection from one computer (connected to cable modem) to other computers on the network. Which Windows feature enables this?",
    options: [
      "Network Bridge",
      "Internet Connection Sharing (ICS)",
      "Network Discovery",
      "HomeGroup"
    ],
    correct: 1,
    explanation: "Internet Connection Sharing (ICS) allows one Windows computer with internet access to share that connection with other computers on the network. The ICS computer acts as a DHCP server and gateway. Network Bridge combines network connections but doesn't share internet. Network Discovery allows devices to see each other. HomeGroup was a legacy sharing feature removed from Windows 10."
  },
  {
    id: 7,
    question: "An administrator needs to configure a static IP address on a Windows 11 computer that will function as a file server. Where should they configure this?",
    options: [
      "Settings > Network & Internet > Select adapter > IP assignment > Edit",
      "Control Panel > Network Connections > Adapter Properties > IPv4 Properties",
      "Device Manager > Network Adapters > Properties",
      "Either A or B - both methods work"
    ],
    correct: 3,
    explanation: "Both Settings (Network & Internet > Properties > IP assignment > Edit > Manual) and Control Panel (Network Connections > Properties > Internet Protocol Version 4) can configure static IP addresses. Settings provides a modern interface, Control Panel offers the traditional method. Both accomplish the same task. Device Manager manages drivers, not IP configuration."
  },
  {
    id: 8,
    question: "A user on a domain network reports they can access some network resources but not others. You discover they're in the wrong Active Directory security group. However, even after adding them to the correct group, they still can't access the resources. What should you tell them to do?",
    options: [
      "Wait for the domain controller to replicate (could take hours)",
      "Restart their computer or log off and back on",
      "Clear their DNS cache using ipconfig /flushdns",
      "Renew their IP address using ipconfig /renew"
    ],
    correct: 1,
    explanation: "Group membership changes (and other security token updates) require the user to log off and back on (or restart) to take effect. The security token is created at login and doesn't update automatically. While DC replication can take time, the user's session token is the issue here. DNS cache and IP addresses are unrelated to security group membership."
  },
  {
    id: 9,
    question: "A computer on a workgroup needs to access a shared folder on another workgroup computer named FILESERVER. The share is called Documents. What UNC path should the user enter in File Explorer?",
    options: [
      "\\FILESERVER\\Documents",
      "\\\\FILESERVER\\Documents",
      "//FILESERVER/Documents",
      "FILESERVER\\Documents"
    ],
    correct: 1,
    explanation: "The correct UNC (Universal Naming Convention) path format is \\\\computername\\sharename, so \\\\FILESERVER\\Documents is correct. Single backslash (\\) is incorrect. Forward slashes (//) are used in URLs and some other systems but not Windows UNC paths. Without the leading backslashes, Windows won't recognize it as a network path."
  },
  {
    id: 10,
    question: "A company wants to ensure all employees use a specific proxy server for internet access to filter content and monitor traffic. Where in Windows do you configure proxy server settings?",
    options: [
      "Network and Sharing Center > Adapter settings",
      "Settings > Network & Internet > Proxy",
      "Internet Options > Connections > LAN settings",
      "Either B or C - both work"
    ],
    correct: 3,
    explanation: "Proxy settings can be configured in both Settings > Network & Internet > Proxy (modern interface) and Internet Options > Connections > LAN settings (classic Control Panel). Both methods configure the same system-wide proxy settings. Network and Sharing Center adapter settings don't configure proxies. For enterprise environments, proxy settings are often pushed via Group Policy."
  },
  {
    id: 11,
    question: "A user connects to a Wi-Fi network at a coffee shop. Windows automatically applies the Public network profile. What security features does the Public profile enable?",
    options: [
      "Enables file sharing and network discovery for easy collaboration",
      "Disables the firewall for faster internet access",
      "Blocks incoming connections and disables network discovery for security",
      "Automatically shares the user's Documents folder"
    ],
    correct: 2,
    explanation: "The Public network profile is designed for untrusted networks (coffee shops, airports, hotels). It blocks incoming connections, disables network discovery and file sharing, and applies stricter firewall rules. This prevents other users on the public network from accessing your computer. It does NOT enable sharing, disable the firewall, or share folders."
  },
  {
    id: 12,
    question: "An administrator configures file and printer sharing on a Windows 11 computer but users still can't access the shares. Windows Defender Firewall is enabled. What is the MOST likely issue?",
    options: [
      "File and Printer Sharing needs to be allowed through the firewall",
      "The computer needs to be restarted",
      "File sharing requires Windows 11 Pro or higher",
      "Users need to be added to the Administrators group"
    ],
    correct: 0,
    explanation: "Windows Defender Firewall must have the 'File and Printer Sharing' rule enabled for the appropriate network profile (Private/Public). By default, this is often blocked on Public networks. Check Windows Defender Firewall > Allow an app or feature. Restart isn't typically needed. File sharing works on Home edition. Users don't need admin rights to access shares (just appropriate permissions)."
  },
  {
    id: 13,
    question: "A laptop user needs to connect to different networks throughout the day: home network (192.168.1.x), office network (10.10.10.x requiring static IP), and client sites (DHCP). What's the BEST configuration approach?",
    options: [
      "Configure a static IP and manually change it for each location",
      "Use DHCP everywhere and ask IT to create DHCP reservations",
      "Configure an alternate IP configuration with static IP for the office",
      "Use three different network adapters, one for each network"
    ],
    correct: 2,
    explanation: "Windows allows you to configure an 'Alternate Configuration' in IPv4 properties. Set the adapter to DHCP (for home and client sites) and configure a static Alternate Configuration (for the office). If DHCP fails, Windows uses the alternate static IP. This eliminates manual changes. Option A is tedious. Option B won't work if office doesn't use DHCP. Option D is impractical."
  },
  {
    id: 14,
    question: "A user on a domain-joined computer receives the error 'The trust relationship between this workstation and the primary domain failed.' What does this indicate?",
    options: [
      "The user's password has expired",
      "The computer's secure channel to the domain controller is broken",
      "The network cable is unplugged",
      "The DHCP server is offline"
    ],
    correct: 1,
    explanation: "This error means the computer account's password (separate from user password) with the domain controller is out of sync, breaking the secure channel. This often happens if a computer is offline for extended periods or was restored from an old backup. Solution: remove from domain and rejoin, or use 'netdom reset' command. User password expiration gives a different error. Network/DHCP issues prevent login differently."
  },
  {
    id: 15,
    question: "A small office with 8 computers uses a workgroup for file sharing. The owner asks if they should switch to a domain. All computers run Windows 11 Pro. What is the PRIMARY advantage of implementing a domain?",
    options: [
      "Faster network speeds for file transfers",
      "Centralized user authentication and management via Active Directory",
      "Better internet connectivity",
      "Automatic backup of all files"
    ],
    correct: 1,
    explanation: "The PRIMARY advantage of a domain is centralized authentication and management through Active Directory. Users have one account across all computers, and administrators can manage security, policies, and permissions centrally. Network speed is determined by hardware, not domain vs workgroup. Internet connectivity isn't affected. Backup requires separate configuration. For 8 computers, a domain may be overkill unless centralized management is needed."
  }
];