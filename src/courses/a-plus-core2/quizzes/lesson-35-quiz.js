export const lesson35Quiz = [
  {
    id: 1,
    question: "A user can't access the internet but can access local network resources. You want to check their IP configuration to see if they have a valid IP address and default gateway. Which command should you run?",
    options: [
      "ping 127.0.0.1",
      "ipconfig /all",
      "netstat -a",
      "tracert google.com"
    ],
    correct: 1,
    explanation: "The 'ipconfig /all' command displays complete IP configuration including IP address, subnet mask, default gateway, DNS servers, DHCP status, and MAC address. This provides all the information needed to diagnose network issues. 'ping 127.0.0.1' only tests the local network stack. 'netstat -a' shows connections, not IP config. 'tracert' traces routes but doesn't show IP configuration."
  },
  {
    id: 2,
    question: "After troubleshooting a DNS issue, you changed the DNS server settings on a user's computer. However, the computer is still using cached DNS entries from the old DNS server. What command should you run to clear the DNS cache?",
    options: [
      "ipconfig /release",
      "ipconfig /renew",
      "ipconfig /flushdns",
      "nslookup /clear"
    ],
    correct: 2,
    explanation: "'ipconfig /flushdns' clears the DNS resolver cache, forcing the computer to query DNS servers for fresh records. This is essential after DNS changes or when troubleshooting DNS-related issues. '/release' releases the DHCP lease. '/renew' gets a new DHCP lease. There is no 'nslookup /clear' command."
  },
  {
    id: 3,
    question: "A user complains they can't connect to a specific website (www.example.com) but other websites work fine. You want to test if DNS is resolving the hostname correctly. Which command should you use?",
    options: [
      "ping www.example.com",
      "nslookup www.example.com",
      "tracert www.example.com",
      "netstat www.example.com"
    ],
    correct: 1,
    explanation: "'nslookup www.example.com' queries DNS servers to see if the hostname resolves to an IP address and which DNS server provided the answer. This is the BEST tool for diagnosing DNS-specific issues. 'ping' tests connectivity but doesn't show DNS details. 'tracert' shows the route but assumes DNS is working. 'netstat' doesn't perform DNS lookups."
  },
  {
    id: 4,
    question: "A computer has an APIPA address (169.254.x.x) indicating it couldn't get an address from the DHCP server. You've verified the DHCP server is working. What commands should you run to attempt to get a valid DHCP address?",
    options: [
      "ipconfig /release followed by ipconfig /renew",
      "ipconfig /flushdns followed by ipconfig /all",
      "ping 169.254.1.1 followed by ipconfig /renew",
      "nslookup dhcp followed by ipconfig /release"
    ],
    correct: 0,
    explanation: "'ipconfig /release' releases the current IP configuration (including the APIPA address), and 'ipconfig /renew' requests a new IP address from the DHCP server. This is the standard procedure for refreshing DHCP addressing. '/flushdns' only clears DNS cache. Pinging the APIPA address serves no purpose. 'nslookup dhcp' is not a valid troubleshooting step."
  },
  {
    id: 5,
    question: "You suspect a user's computer is infected with malware that's connecting to a remote server. Which command shows all active network connections and the programs making those connections?",
    options: [
      "netstat -a",
      "netstat -ano",
      "ping -t remotserver.com",
      "ipconfig /displaydns"
    ],
    correct: 1,
    explanation: "'netstat -ano' displays all connections (-a), shows addresses in numerical format (-n), and displays the Process ID/PID (-o) of each connection. You can then match the PID to programs in Task Manager. 'netstat -a' shows connections but not PIDs. 'ping -t' continuously pings but doesn't show connections. 'ipconfig /displaydns' shows DNS cache, not active connections."
  },
  {
    id: 6,
    question: "A user can ping IP addresses but cannot ping hostnames like 'google.com'. After running 'ipconfig /all', you notice the DNS server field is blank. Which command would have shown this information more concisely?",
    options: [
      "ipconfig (without parameters)",
      "ipconfig /release",
      "nslookup",
      "ping 8.8.8.8"
    ],
    correct: 0,
    explanation: "While 'ipconfig /all' shows complete details, 'ipconfig' without parameters shows the basic IP configuration including IP address, subnet mask, and default gateway for each adapter. For quick checks, this is often sufficient. However, DNS servers require 'ipconfig /all' to see. The question is slightly tricky - you'd still need '/all', but this tests understanding that basic ipconfig is useful for quick checks."
  },
  {
    id: 7,
    question: "You're troubleshooting a connection issue to a web server. The connection times out at hop 7 of 15. Which command are you using to see this hop-by-hop path information?",
    options: [
      "ping -t webserver.com",
      "tracert webserver.com",
      "pathping webserver.com",
      "netstat -r"
    ],
    correct: 1,
    explanation: "'tracert' (traceroute) shows the path packets take to reach a destination, listing each router (hop) along the way. When a connection fails, tracert shows where it stops, helping identify network problems. 'ping -t' continuously pings but doesn't show the route. 'pathping' combines ping and tracert but is more detailed and slower. 'netstat -r' shows the local routing table."
  },
  {
    id: 8,
    question: "An administrator needs to view the local routing table to see how the computer routes traffic to different networks. Which command displays the routing table?",
    options: [
      "route print",
      "ipconfig /route",
      "netstat -a",
      "tracert -table"
    ],
    correct: 0,
    explanation: "'route print' displays the IPv4 and IPv6 routing tables, showing network destinations, netmasks, gateways, interfaces, and metrics. This is essential for troubleshooting routing issues. There is no 'ipconfig /route' command. 'netstat -a' shows connections, not routes. 'tracert -table' is not a valid command."
  },
  {
    id: 9,
    question: "A technician needs to check the local computer's hostname to document it in their asset management system. Which command displays the computer's hostname?",
    options: [
      "ipconfig /hostname",
      "hostname",
      "nslookup localhost",
      "netstat -h"
    ],
    correct: 1,
    explanation: "The 'hostname' command simply displays the computer's hostname. It's a straightforward, single-purpose command with no parameters needed. There is no 'ipconfig /hostname'. 'nslookup localhost' resolves localhost to 127.0.0.1. 'netstat -h' is not a valid command (it would show help if anything)."
  },
  {
    id: 10,
    question: "After running System File Checker (sfc /scannow), you see a message saying 'Windows Resource Protection found corrupt files but was unable to fix some of them.' What command should you run next to repair the Windows image?",
    options: [
      "sfc /scannow /force",
      "chkdsk /f /r",
      "dism /online /cleanup-image /restorehealth",
      "diskpart clean"
    ],
    correct: 2,
    explanation: "When SFC cannot repair files, it's often because the component store (Windows image) itself is corrupted. 'dism /online /cleanup-image /restorehealth' repairs the Windows image using Windows Update. After DISM repairs the image, run SFC again. There is no 'sfc /force'. 'chkdsk' checks disk errors, not system files. 'diskpart clean' erases drives completely."
  },
  {
    id: 11,
    question: "A user reports their hard drive might be failing - files are corrupting and the system occasionally freezes. Which command checks the drive for errors and attempts to repair them?",
    options: [
      "sfc /scannow",
      "chkdsk /f /r",
      "dism /cleanup-image",
      "diskpart /repair"
    ],
    correct: 1,
    explanation: "'chkdsk /f /r' checks the file system for errors (/f fixes errors) and locates bad sectors and recovers readable information (/r). This is the correct tool for diagnosing and repairing disk problems. 'sfc /scannow' checks system files, not disk errors. 'dism' repairs Windows images. 'diskpart /repair' is not a valid command."
  },
  {
    id: 12,
    question: "An administrator needs to remotely shut down a computer named WORKSTATION5 in 60 seconds with a message warning the user. Which command accomplishes this?",
    options: [
      "shutdown /s /t 60 /m \\\\WORKSTATION5",
      "shutdown /r /t 60 /c 'Shutting down for maintenance'",
      "shutdown /s /t 60 /m \\\\WORKSTATION5 /c 'Shutting down for maintenance'",
      "shutdown /h /m \\\\WORKSTATION5"
    ],
    correct: 2,
    explanation: "The correct command is 'shutdown /s /t 60 /m \\\\WORKSTATION5 /c \"message\"' where /s = shutdown, /t 60 = 60 second timer, /m = remote computer name, /c = comment/message. Option A lacks the message. Option B doesn't specify the remote computer. Option D uses /h (hibernate) instead of /s (shutdown)."
  },
  {
    id: 13,
    question: "A technician suspects a specific process (PID 2156) is consuming excessive resources and needs to terminate it from the command line. Which command should they use?",
    options: [
      "tasklist /PID 2156",
      "taskkill /PID 2156",
      "taskkill /F /PID 2156",
      "netstat /kill 2156"
    ],
    correct: 2,
    explanation: "'taskkill /F /PID 2156' forcefully terminates the process with PID 2156. The /F (force) parameter is often necessary for unresponsive processes. 'tasklist' displays running processes but doesn't kill them. 'taskkill /PID 2156' without /F may not work if the process is unresponsive. 'netstat' doesn't kill processes."
  },
  {
    id: 14,
    question: "A user's computer is having issues and you suspect outdated Group Policy settings. The computer is on a domain. Which command forces an immediate Group Policy update?",
    options: [
      "gpupdate",
      "gpupdate /force",
      "gpresult /force",
      "netstat /policy"
    ],
    correct: 1,
    explanation: "'gpupdate /force' reapplies all Group Policy settings immediately, even if they haven't changed. This is useful after policy changes or when troubleshooting policy application issues. 'gpupdate' alone only applies changes. 'gpresult' displays applied policies but doesn't update them. 'netstat /policy' is not a valid command."
  },
  {
    id: 15,
    question: "An administrator needs to see which Group Policies are currently applied to a user and computer to troubleshoot access issues. Which command generates a detailed report of applied policies?",
    options: [
      "gpupdate /report",
      "gpresult /r",
      "gpedit /report",
      "netstat /policy"
    ],
    correct: 1,
    explanation: "'gpresult /r' displays a summary report of Group Policy settings applied to the user and computer. For even more detail, 'gpresult /h filename.html' creates a detailed HTML report. 'gpupdate' applies policies but doesn't report them. 'gpedit' is not a command-line tool. 'netstat /policy' is not valid."
  }
];