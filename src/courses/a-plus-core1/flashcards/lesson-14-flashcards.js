export const lesson14Flashcards = [
  {
    id: 1,
    front: "How do you access a SOHO router's configuration interface?",
    back: "Connect via Ethernet or Wi-Fi - Open web browser - Enter router's IP (commonly 192.168.1.1 or 192.168.0.1) - Login with credentials (check router label or manual). Access web-based configuration interface."
  },
  {
    id: 2,
    front: "What are common default router IP addresses?",
    back: "192.168.1.1 (most common) - 192.168.0.1 - 10.0.0.1 - 192.168.2.1. Check router label or manual. Can also use ipconfig to find default gateway. Run ipconfig /all to see router IP."
  },
  {
    id: 3,
    front: "Why must you change the default admin password on a router?",
    back: "Default passwords are publicly known (admin/admin, admin/password). Attackers can easily access and reconfigure router. Change on first setup. Security best practice. Prevents unauthorized access and malware infection."
  },
  {
    id: 4,
    front: "What is router firmware and why update it?",
    back: "Operating system software on the router. Updates provide: security patches, bug fixes, new features, performance improvements. Check manufacturer website regularly. Important for security - vulnerabilities exploited if outdated."
  },
  {
    id: 5,
    front: "What precautions should you take when updating router firmware?",
    back: "Backup current configuration - Download correct firmware version - Don't interrupt power during update - Connect via Ethernet (not Wi-Fi) - Read release notes. Failed update can brick router."
  },
  {
    id: 6,
    front: "What DHCP settings can be configured on a router?",
    back: "Enable/disable DHCP server - IP address range (scope) - Starting/ending IP addresses - Lease time - DNS servers - Default gateway - Subnet mask - Static reservations."
  },
  {
    id: 7,
    front: "What is a DHCP reservation and when should you use it?",
    back: "Assigns same IP address to device based on MAC address. Acts like static IP but managed by DHCP. Use for: printers, servers, network cameras, game consoles, anything needing consistent IP."
  },
  {
    id: 8,
    front: "What is port forwarding and why is it needed?",
    back: "Routes external traffic from specific port to internal device. Allows internet access to internal services. Configure: external port, internal IP, internal port, protocol (TCP/UDP). Needed for: web servers, game servers, remote access."
  },
  {
    id: 9,
    front: "What is a DMZ in router configuration?",
    back: "Demilitarized Zone - forwards ALL ports to one internal device. Exposes device fully to internet. Less secure than specific port forwarding. Use for: game consoles with connectivity issues, testing. Not recommended for general use."
  },
  {
    id: 10,
    front: "What is NAT (Network Address Translation)?",
    back: "Translates private IP addresses to public IP address. Allows multiple devices to share single public IP. Three types: Static (one-to-one), Dynamic (pool), PAT/Overload (many-to-one, most common). Essential for internet access."
  },
  {
    id: 11,
    front: "What is PAT (Port Address Translation)?",
    back: "Also called NAT Overload. Maps multiple private IPs to single public IP using different ports. Most common NAT type in home routers. Tracks connections in NAT table. Enables all home devices to access internet simultaneously."
  },
  {
    id: 12,
    front: "What is QoS (Quality of Service) on a router?",
    back: "Prioritizes certain traffic types over others. Ensures critical applications get bandwidth. Can prioritize: VoIP calls, video streaming, gaming, specific devices/ports. Prevents buffering during high usage. Configure by application, device, or port."
  },
  {
    id: 13,
    front: "What is UPnP (Universal Plug and Play)?",
    back: "Automatically opens ports for applications that need them. Simplifies gaming, streaming, VoIP. Security concern - allows apps to modify firewall without user knowledge. Disable for better security. Enable only if needed for specific apps."
  },
  {
    id: 14,
    front: "What is content filtering on a router?",
    back: "Blocks access to specific websites or categories. Methods: URL blocking, keyword filtering, category blocking (adult, gambling, social media). Can schedule times. Useful for parental controls, productivity. Limited effectiveness (VPNs bypass)."
  },
  {
    id: 15,
    front: "What is MAC address filtering?",
    back: "Allows/blocks devices based on MAC address. Create whitelist (only allowed) or blacklist (blocked devices). Weak security - MAC addresses easily spoofed. Better than nothing but shouldn't be sole security. Use with other security measures."
  },
  {
    id: 16,
    front: "Should you disable SSID broadcast for security?",
    back: "Hides network name from casual users. Security through obscurity - not effective security. Doesn't prevent determined attackers - SSID still detectable with tools. Inconvenient for legitimate users. Better: use strong WPA3/WPA2 encryption."
  },
  {
    id: 17,
    front: "What wireless security protocols should SOHO routers use?",
    back: "Best: WPA3 (latest, most secure, SAE encryption). Good: WPA2 (AES/CCMP encryption, widely compatible). Never use: WPA (deprecated), WEP (easily cracked in minutes). Minimum: WPA2. Upgrade to WPA3 when devices support it."
  },
  {
    id: 18,
    front: "What makes a strong Wi-Fi password?",
    back: "Minimum 12-16 characters. Mix of uppercase, lowercase, numbers, symbols. Avoid dictionary words, personal info, common patterns. Use passphrase (multiple words) or random characters. Change default password immediately. Never share publicly."
  },
  {
    id: 19,
    front: "What is WPS (Wi-Fi Protected Setup) and should you use it?",
    back: "Simplified wireless connection via button push or PIN. Major security vulnerability - PIN easily brute-forced. Disable WPS for security. Use manual password entry instead. Many routers ship with WPS enabled - turn it off."
  },
  {
    id: 20,
    front: "What is guest network and when should you enable it?",
    back: "Separate wireless network for visitors. Isolates guests from main network and devices. Prevents access to file shares, printers, internal resources. Can have different password. Good security practice. Most modern routers support this."
  },
  {
    id: 21,
    front: "What is router firewall and what does it do?",
    back: "Blocks unsolicited inbound connections from internet. Typically stateful firewall. Usually enabled by default. Protects against: port scans, certain attacks, unauthorized access. Allows outbound connections. Basic but essential security layer."
  },
  {
    id: 22,
    front: "What is the difference between 2.4 GHz and 5 GHz on dual-band routers?",
    back: "2.4 GHz: Longer range, better wall penetration, more interference, slower (up to 600 Mbps). 5 GHz: Shorter range, less interference, faster (up to multi-gigabit), more channels. Use both - 2.4 for range, 5 for speed."
  },
  {
    id: 23,
    front: "What Wi-Fi channels should you use on 2.4 GHz?",
    back: "Non-overlapping channels: 1, 6, or 11 (US). Avoid channels 2-5, 7-10, 12-14 - they overlap. Use Wi-Fi analyzer to see which has least interference. Most routers auto-select but manual selection can improve performance."
  },
  {
    id: 24,
    front: "What is DHCP lease time and what should you set it to?",
    back: "How long device keeps assigned IP address. Typical: 1-7 days. Short lease (hours): Dynamic environments, many devices. Long lease (days): Stable networks, fewer devices. Very short leases can exhaust DHCP resources. Balance stability and flexibility."
  },
  {
    id: 25,
    front: "What is port triggering and how does it differ from port forwarding?",
    back: "Port triggering: Opens ports dynamically when device makes outbound connection, temporary. Port forwarding: Always forwards specific port to specific device, permanent. Triggering more secure but only works when device initiates connection first."
  },
  {
    id: 26,
    front: "What information should you document about router configuration?",
    back: "Admin password - Wi-Fi SSID and password - Static IP assignments/reservations - Port forwarding rules - Firmware version - ISP settings - MAC filtering list - Custom DNS servers. Essential for troubleshooting and disaster recovery."
  },
  {
    id: 27,
    front: "What is the router's WAN vs LAN interface?",
    back: "WAN (Wide Area Network): External/internet-facing port, connects to modem/ISP, usually one port, has public IP. LAN (Local Area Network): Internal network ports, connects to devices, typically 4 ports, private IPs (192.168.x.x)."
  },
  {
    id: 28,
    front: "How do you factory reset a router?",
    back: "Press and hold reset button (usually recessed) for 10-30 seconds while powered on. Or reset via web interface. Erases all settings - returns to defaults. Requires reconfiguration. Use when: forgot password, severe misconfiguration, before disposal."
  },
  {
    id: 29,
    front: "What is IPv6 configuration on routers?",
    back: "Enable/disable IPv6 - Choose addressing: DHCPv6, SLAAC (Stateless Auto-Config), or static - Configure IPv6 firewall - Set IPv6 prefix delegation. Many ISPs now support IPv6. Enable if ISP supports and devices compatible."
  },
  {
    id: 30,
    front: "What are common router security best practices?",
    back: "Change default admin password - Update firmware regularly - Use WPA3/WPA2 encryption - Disable WPS - Enable firewall - Disable remote management unless needed - Use strong Wi-Fi password - Disable UPnP if not needed - Enable guest network."
  }
];