export const lesson14Quiz = [
  {
    id: 1,
    question: "A small office needs to configure their new wireless router for basic internet access. What is the minimum configuration required to get workstations online?",
    options: [
      "Only plug in the power cable",
      "Connect the ISP's modem to the WAN port, configure wireless SSID and security (WPA2/WPA3), and enable DHCP for automatic IP assignment",
      "Just set a Wi-Fi password",
      "Nothing - routers work automatically without any configuration"
    ],
    correct: 1,
    explanation: "Basic SOHO router setup requires: (1) Connect ISP modem to WAN/Internet port via Ethernet, (2) Access router admin interface (usually 192.168.1.1 or 192.168.0.1), (3) Change default admin password, (4) Configure wireless SSID name and security (WPA2-PSK or WPA3), (5) Verify DHCP is enabled for automatic IP assignment, (6) Configure wireless password (minimum 12+ characters). Optional but recommended: change default IP range, disable WPS, update firmware. The WAN port connects to external internet, LAN ports connect to internal devices. Most routers include setup wizards that guide through basic configuration."
  },
  {
    id: 2,
    question: "A home user changed their Wi-Fi password on the router but now cannot remember the router's admin password to make further changes. What should they do?",
    options: [
      "Buy a new router",
      "Call the manufacturer and they'll tell you the password",
      "Perform a factory reset using the reset button (hold 10-30 seconds), which restores default credentials but erases all custom settings",
      "The router is permanently locked"
    ],
    correct: 2,
    explanation: "Factory reset using the physical reset button (small recessed button on the router) restores all default settings including admin credentials. Procedure: Press and hold reset button for 10-30 seconds (while powered on) until lights flash. After reset, use default credentials (found on router label or manual, often admin/admin or admin/password). You'll need to reconfigure everything: SSID, Wi-Fi password, security settings, port forwarding, etc. Document settings before reset if possible. This is why changing default admin password should be done immediately and stored securely. Factory reset is the only recovery method when admin password is lost."
  },
  {
    id: 3,
    question: "A SOHO router's DHCP server is configured with IP range 192.168.1.100 to 192.168.1.200. A network printer needs a consistent IP address. What's the best configuration approach?",
    options: [
      "Manually assign the printer 192.168.1.150 (within DHCP range - will cause conflicts)",
      "Create a DHCP reservation binding the printer's MAC address to a specific IP (like 192.168.1.50 outside the dynamic range)",
      "Turn off DHCP completely",
      "Replace the printer"
    ],
    correct: 1,
    explanation: "DHCP reservation (static DHCP lease) maps a device's MAC address to a specific IP address. The device still uses DHCP but always receives the same IP. Best practice: use an IP outside the dynamic DHCP pool (e.g., 192.168.1.50 if pool is .100-.200). This prevents conflicts. Never manually assign static IPs within the DHCP range - will cause IP conflicts. To configure: find printer's MAC address (print network config page), access router DHCP settings, add reservation with MAC and desired IP. This is ideal for printers, servers, cameras, and other devices needing consistent addresses while maintaining centralized management."
  },
  {
    id: 4,
    question: "A user wants to host a web server on their home network at internal IP 192.168.1.50. External users need to access it via the router's public IP. What router feature is required?",
    options: [
      "DHCP",
      "Port forwarding (or virtual server) to forward incoming port 80/443 traffic to 192.168.1.50",
      "WPS",
      "MAC filtering"
    ],
    correct: 1,
    explanation: "Port forwarding (also called virtual server, port mapping, or PAT) redirects incoming traffic on specific ports to internal hosts. Configure router to forward: External Port 80 → 192.168.1.50:80 (HTTP) and External Port 443 → 192.168.1.50:443 (HTTPS). Users access the public IP and traffic is forwarded to the internal server. Security considerations: only forward necessary ports, keep server software updated, use strong authentication, consider using non-standard ports (e.g., external 8080 → internal 80), and implement proper firewall rules. Common uses: web servers, game servers, security cameras, remote desktop."
  },
  {
    id: 5,
    question: "What is the purpose of the DMZ setting on a SOHO router?",
    options: [
      "To speed up Wi-Fi",
      "To place one internal host outside the firewall, forwarding ALL incoming traffic to it (high security risk - use cautiously)",
      "To block all internet access",
      "To improve video quality"
    ],
    correct: 1,
    explanation: "DMZ (Demilitarized Zone) on SOHO routers forwards ALL incoming traffic (all ports) to one designated internal IP address. The host is essentially exposed directly to the internet with minimal firewall protection. Use cases: game consoles with strict NAT requirements, testing, or legacy applications with unknown port requirements. Security risk: the DMZ host is fully exposed. Better approach: use specific port forwarding for known ports instead of DMZ. If DMZ is necessary, harden the DMZ host (firewall, updates, minimal services). Enterprise DMZs are different - they're separate network segments with firewalls on both sides for public-facing servers."
  },
  {
    id: 6,
    question: "A small business wants to prioritize VoIP phone traffic over regular internet browsing to prevent call quality issues. What router feature should they configure?",
    options: [
      "Port forwarding",
      "MAC filtering",
      "QoS (Quality of Service) to prioritize VoIP traffic and allocate guaranteed bandwidth",
      "SSID broadcast"
    ],
    correct: 2,
    explanation: "QoS (Quality of Service) prioritizes network traffic based on rules. Configure QoS to: (1) Give VoIP highest priority, (2) Allocate minimum guaranteed bandwidth to VoIP, (3) Limit bandwidth for large downloads/torrents, (4) Prioritize video conferencing. Methods: prioritize by device (MAC address), application (port numbers), or traffic type. Most routers offer high/medium/low priority levels. VoIP requires low latency and jitter - QoS ensures call quality even when bandwidth is saturated. Without QoS, large downloads can cause choppy VoIP calls. Also consider: adequate total bandwidth, separate voice VLAN in enterprise, and proper router capacity to handle QoS processing."
  },
  {
    id: 7,
    question: "A router's admin interface shows the default login as admin/admin. What is the FIRST thing that should be changed after initial setup?",
    options: [
      "The Wi-Fi SSID",
      "The default administrator username and password to prevent unauthorized access",
      "Nothing - defaults are secure",
      "The router's color"
    ],
    correct: 1,
    explanation: "Changing default admin credentials is the most critical security step. Default credentials are publicly known and easily found online. Attackers scan for routers with default passwords to compromise networks. After changing admin password: (1) Use strong password (12+ characters, complex), (2) Change default admin username if possible, (3) Disable remote administration unless needed, (4) Enable HTTPS admin access if available, (5) Consider disabling admin access from wireless (wired only). Document new credentials securely. Many router compromises result from unchanged default passwords. Some routers force password change on first login - this is good security design."
  },
  {
    id: 8,
    question: "What is UPnP (Universal Plug and Play) on a router, and what is the security concern?",
    options: [
      "A printer protocol with no security issues",
      "A feature that allows devices to automatically configure port forwarding, but can be exploited by malware to open ports without user knowledge",
      "A wireless encryption standard",
      "A type of cable"
    ],
    correct: 1,
    explanation: "UPnP allows devices and applications to automatically discover services and configure network settings (like port forwarding) without manual configuration. Legitimate uses: game consoles, smart home devices, media streaming. Security risk: malware can exploit UPnP to open ports through the firewall without authorization, potentially allowing external access to infected machines. Best practices: (1) Disable UPnP if not needed, (2) If required, enable only on trusted internal networks, (3) Keep router firmware updated with UPnP security patches, (4) Manually configure port forwarding instead when possible. Many security experts recommend disabling UPnP entirely due to exploitation risks."
  },
  {
    id: 9,
    question: "A home user wants to prevent their young children from accessing inappropriate websites. What router feature can help control internet access?",
    options: [
      "Port forwarding",
      "Content filtering (parental controls) to block websites by category, schedule, or URL",
      "DHCP",
      "NAT"
    ],
    correct: 1,
    explanation: "Content filtering (parental controls) blocks access to websites based on: categories (adult content, gambling, social media), specific URLs/domains, keywords, or time schedules. Router-level filtering affects all devices (unlike software on individual computers). Features vary by router: basic filtering, scheduling (no internet after 9 PM), device-specific rules, activity logging. Limitations: encrypted HTTPS traffic is harder to filter, determined users can bypass with VPNs, and filters aren't perfect. For comprehensive protection: combine router filtering + device-level controls + supervision. Many routers use cloud-based filtering databases (OpenDNS, others). Consider dedicated DNS filtering services for better control."
  },
  {
    id: 10,
    question: "A SOHO router shows options for 'Static IP', 'DHCP', and 'PPPoE' for the WAN connection type. When should PPPoE be selected?",
    options: [
      "Always - it's the fastest option",
      "When the ISP requires authentication with a username and password (common with DSL providers)",
      "Never - it's obsolete",
      "Only for wireless connections"
    ],
    correct: 1,
    explanation: "PPPoE (Point-to-Point Protocol over Ethernet) is used when ISPs require username/password authentication for the internet connection - common with DSL and some fiber providers. Configuration: select PPPoE as WAN type, enter ISP-provided credentials. The router establishes a PPPoE session before internet access works. Other WAN types: DHCP (router gets public IP automatically from ISP - common for cable), Static IP (manually configure public IP - business connections), and PPPoA (legacy DSL). Check ISP documentation for correct WAN configuration type. Incorrect WAN settings prevent internet connectivity even when physically connected."
  },
  {
    id: 11,
    question: "What is MAC address filtering on a wireless router, and what are its limitations?",
    options: [
      "A highly secure encryption method",
      "Allows only devices with specified MAC addresses to connect, but MAC addresses can be spoofed, providing limited actual security",
      "A way to filter email spam",
      "A type of port forwarding"
    ],
    correct: 1,
    explanation: "MAC filtering creates a whitelist (or blacklist) of allowed device MAC addresses. Only listed devices can connect to the network. Setup: find device MAC addresses, add to router's allow list. Limitations: (1) MAC addresses are easily spoofed - attackers can observe allowed MACs and clone them, (2) Management overhead - must update list for every new device, (3) Doesn't encrypt traffic. MAC filtering provides minimal security - it's security through obscurity. Real security comes from: WPA2/WPA3 encryption, strong passwords, network segmentation, and regular updates. MAC filtering may be useful for guest networks or as an additional layer, but never rely on it as primary security."
  },
  {
    id: 12,
    question: "A user reports slow Wi-Fi speeds even though they're close to the router. What router configuration could improve performance?",
    options: [
      "Disable all security",
      "Change Wi-Fi channel to avoid interference from neighboring networks, switch to 5 GHz band, or adjust channel width",
      "Disable DHCP",
      "Remove the antennas"
    ],
    correct: 1,
    explanation: "Wi-Fi performance factors: (1) Channel congestion - use Wi-Fi analyzer to find least crowded channel (2.4 GHz: use 1, 6, or 11; 5 GHz: more options), (2) Band selection - 5 GHz is faster but shorter range; 2.4 GHz has better range but more interference, (3) Channel width - 20 MHz for stability, 40/80 MHz for speed if interference is low, (4) Physical placement - central, elevated, away from metal/microwaves. Additional optimizations: update router firmware, enable WPA2/WPA3 (WEP slows everything), reduce concurrent devices, QoS for priority traffic, and consider upgrading to Wi-Fi 6 for better multi-device performance."
  },
  {
    id: 13,
    question: "What is the purpose of the 'Guest Network' feature on modern wireless routers?",
    options: [
      "To provide faster speeds for visitors",
      "To create an isolated wireless network that provides internet access but blocks access to the main network's devices and resources",
      "To disable the main network",
      "To save electricity"
    ],
    correct: 1,
    explanation: "Guest networks create separate SSIDs isolated from the primary network. Guests get internet access but cannot: access shared folders, printers, network devices, or other computers on the main network. This protects your devices from potentially compromised guest devices. Configuration: enable guest network, set separate SSID/password (or open for public spaces), optional bandwidth limits, optional time limits. Best practices: (1) Use different password than main network, (2) Disable guest-to-guest communication if available, (3) Consider scheduling (disable when not needed), (4) Apply content filtering if needed. Essential for businesses (coffee shops, hotels) and homes when visitors need Wi-Fi access."
  },
  {
    id: 14,
    question: "A router's DHCP lease time is set to 24 hours. A user asks what this means. What is the correct explanation?",
    options: [
      "The router will stop working after 24 hours",
      "IP addresses assigned by DHCP are valid for 24 hours before devices must renew the lease",
      "The internet is only available for 24 hours per day",
      "Devices can only use 24 hours of internet per month"
    ],
    correct: 1,
    explanation: "DHCP lease time determines how long a device can keep its assigned IP address. After 24 hours (in this example), the device must renew the lease. The renewal happens automatically in the background - at 50% of lease time (12 hours), the device requests renewal from the DHCP server. If successful, it keeps the same IP for another 24 hours. Short leases (1-4 hours): high-turnover environments like coffee shops - addresses are reclaimed quickly. Long leases (days/weeks): stable networks - reduces DHCP traffic. For most home/office networks, 24 hours is reasonable. Devices maintain connectivity during renewal process."
  },
  {
    id: 15,
    question: "What should be done immediately after unboxing and powering on a new SOHO router?",
    options: [
      "Nothing - use default settings",
      "Access the admin interface, change default password, update firmware, configure wireless security (WPA2/WPA3), and disable unnecessary services",
      "Just connect it and ignore configuration",
      "Return it to the store"
    ],
    correct: 1,
    explanation: "Essential initial router setup steps: (1) Access admin interface (usually 192.168.1.1 or .0.1 via browser), (2) Login with default credentials (check label/manual), (3) Immediately change admin password, (4) Check for and install firmware updates, (5) Configure wireless: change SSID from default, set WPA2-PSK or WPA3 security, create strong Wi-Fi password (12+ characters), (6) Disable WPS if not needed, (7) Verify/configure DHCP settings, (8) Change router's IP range if desired (less common: 10.x.x.x or 172.16.x.x), (9) Configure guest network if desired, (10) Document all settings. Many compromises result from skipping these basic security steps. Modern routers often have setup wizards guiding through critical configurations."
  }
];