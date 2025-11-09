/**
 * Performance-Based Questions (PBQs) for Network+ Practice Exams
 *
 * PBQ Types:
 * - drag-drop: Drag items to correct zones
 * - configuration: Fill in configuration fields
 * - matching: Match items from left to right
 * - ordering: Put items in correct sequence
 */

export const pbqQuestions = [
  // PBQ 1: OSI Model Layer Matching (Drag-Drop)
  {
    id: 'pbq-001',
    type: 'drag-drop',
    domain: '1.0',
    title: 'OSI Model Protocol Placement',
    points: 7,
    scenario: 'You are documenting network protocols and their corresponding OSI model layers for a training presentation.',
    instructions: 'Drag each protocol to its correct OSI model layer.',
    items: [
      { id: 'http', label: 'HTTP' },
      { id: 'tcp', label: 'TCP' },
      { id: 'ip', label: 'IP' },
      { id: 'ethernet', label: 'Ethernet' },
      { id: 'dns', label: 'DNS' },
      { id: 'udp', label: 'UDP' },
      { id: 'arp', label: 'ARP' }
    ],
    dropZones: [
      { id: 'layer7', label: 'Layer 7 - Application' },
      { id: 'layer4', label: 'Layer 4 - Transport' },
      { id: 'layer3', label: 'Layer 3 - Network' },
      { id: 'layer2', label: 'Layer 2 - Data Link' }
    ],
    correctAnswers: {
      'layer7': ['http', 'dns'],
      'layer4': ['tcp', 'udp'],
      'layer3': ['ip', 'arp'],
      'layer2': ['ethernet']
    },
    explanation: 'HTTP and DNS operate at Layer 7 (Application). TCP and UDP are Layer 4 (Transport) protocols. IP and ARP function at Layer 3 (Network). Ethernet is a Layer 2 (Data Link) protocol.'
  },

  // PBQ 2: IP Configuration (Configuration)
  {
    id: 'pbq-002',
    type: 'configuration',
    domain: '1.0',
    title: 'Subnet Configuration',
    points: 5,
    scenario: 'You need to configure a workstation on the 192.168.10.0/24 network. The first 10 IP addresses are reserved for network devices.',
    instructions: 'Fill in the correct IP configuration for this workstation.',
    fields: [
      {
        id: 'ip',
        label: 'IP Address',
        placeholder: '192.168.10.___',
        correctAnswer: '192.168.10.11',
        validation: 'ip',
        partialCredit: ['192.168.10.11', '192.168.10.12', '192.168.10.13', '192.168.10.14', '192.168.10.15']
      },
      {
        id: 'subnet',
        label: 'Subnet Mask',
        placeholder: '255.255.255.___',
        correctAnswer: '255.255.255.0',
        validation: 'ip'
      },
      {
        id: 'gateway',
        label: 'Default Gateway',
        placeholder: '192.168.10.___',
        correctAnswer: '192.168.10.1',
        validation: 'ip'
      },
      {
        id: 'dns',
        label: 'DNS Server',
        placeholder: '8.8.___.___ or 1.1.___',
        correctAnswer: '8.8.8.8',
        validation: 'ip',
        partialCredit: ['8.8.8.8', '8.8.4.4', '1.1.1.1']
      },
      {
        id: 'broadcast',
        label: 'Broadcast Address',
        placeholder: '192.168.10.___',
        correctAnswer: '192.168.10.255',
        validation: 'ip'
      }
    ],
    explanation: 'For a /24 network (255.255.255.0), the broadcast address is always .255, and the default gateway is typically .1. Any IP from .11 onwards is valid since the first 10 are reserved. Common DNS servers include Google (8.8.8.8) and Cloudflare (1.1.1.1).'
  },

  // PBQ 3: Cable Type Matching (Matching)
  {
    id: 'pbq-003',
    type: 'matching',
    domain: '1.0',
    title: 'Cable Standards and Speeds',
    points: 6,
    scenario: 'You are selecting the appropriate Ethernet cable types for various network requirements.',
    instructions: 'Match each cable standard to its maximum speed.',
    leftItems: [
      { id: 'cat5', label: 'Cat 5' },
      { id: 'cat5e', label: 'Cat 5e' },
      { id: 'cat6', label: 'Cat 6' },
      { id: 'cat6a', label: 'Cat 6a' },
      { id: 'cat7', label: 'Cat 7' },
      { id: 'cat8', label: 'Cat 8' }
    ],
    rightItems: [
      { id: 'speed1', label: '100 Mbps' },
      { id: 'speed2', label: '1 Gbps' },
      { id: 'speed3', label: '10 Gbps (up to 55m)' },
      { id: 'speed4', label: '10 Gbps (up to 100m)' },
      { id: 'speed5', label: '10 Gbps (up to 100m, shielded)' },
      { id: 'speed6', label: '25-40 Gbps' }
    ],
    correctMatches: {
      'cat5': 'speed1',
      'cat5e': 'speed2',
      'cat6': 'speed3',
      'cat6a': 'speed4',
      'cat7': 'speed5',
      'cat8': 'speed6'
    },
    explanation: 'Cat 5 supports up to 100Mbps. Cat 5e supports 1Gbps. Cat 6 supports 10Gbps up to 55 meters. Cat 6a extends 10Gbps to 100 meters. Cat 7 provides shielded 10Gbps. Cat 8 supports 25-40Gbps for data centers.'
  },

  // PBQ 4: Port Number Matching (Matching)
  {
    id: 'pbq-004',
    type: 'matching',
    domain: '1.0',
    title: 'Common Port Numbers',
    points: 8,
    scenario: 'A firewall administrator needs to configure rules for common network services.',
    instructions: 'Match each service to its default port number.',
    leftItems: [
      { id: 'http', label: 'HTTP' },
      { id: 'https', label: 'HTTPS' },
      { id: 'ftp', label: 'FTP (Control)' },
      { id: 'ssh', label: 'SSH' },
      { id: 'telnet', label: 'Telnet' },
      { id: 'smtp', label: 'SMTP' },
      { id: 'dns', label: 'DNS' },
      { id: 'rdp', label: 'RDP' }
    ],
    rightItems: [
      { id: 'port21', label: '21' },
      { id: 'port22', label: '22' },
      { id: 'port23', label: '23' },
      { id: 'port25', label: '25' },
      { id: 'port53', label: '53' },
      { id: 'port80', label: '80' },
      { id: 'port443', label: '443' },
      { id: 'port3389', label: '3389' }
    ],
    correctMatches: {
      'http': 'port80',
      'https': 'port443',
      'ftp': 'port21',
      'ssh': 'port22',
      'telnet': 'port23',
      'smtp': 'port25',
      'dns': 'port53',
      'rdp': 'port3389'
    },
    explanation: 'HTTP uses port 80, HTTPS uses 443, FTP control uses 21, SSH uses 22, Telnet uses 23, SMTP uses 25, DNS uses 53, and RDP uses 3389.'
  },

  // PBQ 5: Network Troubleshooting Order (Ordering)
  {
    id: 'pbq-005',
    type: 'ordering',
    domain: '5.0',
    title: 'Network Troubleshooting Steps',
    points: 6,
    scenario: 'A user reports they cannot access the internet. You need to follow proper troubleshooting methodology.',
    instructions: 'Put the troubleshooting steps in the correct order according to CompTIA troubleshooting methodology.',
    items: [
      { id: 'step1', label: 'Identify the problem' },
      { id: 'step2', label: 'Establish a theory of probable cause' },
      { id: 'step3', label: 'Test the theory to determine cause' },
      { id: 'step4', label: 'Establish a plan of action' },
      { id: 'step5', label: 'Implement the solution' },
      { id: 'step6', label: 'Verify full system functionality' },
      { id: 'step7', label: 'Document findings and actions' }
    ],
    correctOrder: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'],
    explanation: 'CompTIA troubleshooting methodology: 1) Identify the problem, 2) Establish theory, 3) Test theory, 4) Plan action, 5) Implement solution, 6) Verify functionality, 7) Document everything.'
  },

  // PBQ 6: VLAN Configuration (Configuration)
  {
    id: 'pbq-006',
    type: 'configuration',
    domain: '2.0',
    title: 'VLAN Switch Configuration',
    points: 4,
    scenario: 'You need to configure a switch port for VLAN 10 in access mode.',
    instructions: 'Enter the correct commands to configure the switch port.',
    fields: [
      {
        id: 'mode',
        label: 'Port Mode',
        placeholder: 'access or trunk',
        correctAnswer: 'access',
        validation: 'text'
      },
      {
        id: 'vlan',
        label: 'VLAN Number',
        placeholder: 'Enter VLAN ID',
        correctAnswer: '10',
        validation: 'number'
      },
      {
        id: 'spanning',
        label: 'PortFast (enable/disable)',
        placeholder: 'For access ports only',
        correctAnswer: 'enable',
        validation: 'text',
        partialCredit: ['enable', 'enabled', 'yes']
      },
      {
        id: 'security',
        label: 'Port Security (enable/disable)',
        placeholder: 'Prevent unauthorized devices',
        correctAnswer: 'enable',
        validation: 'text',
        partialCredit: ['enable', 'enabled', 'yes']
      }
    ],
    explanation: 'Access ports should be configured with mode access, assigned to a specific VLAN, with PortFast enabled to skip STP delays, and port security enabled to prevent unauthorized device connections.'
  },

  // PBQ 7: Wireless Standards (Matching)
  {
    id: 'pbq-007',
    type: 'matching',
    domain: '2.0',
    title: 'Wi-Fi Standards and Speeds',
    points: 6,
    scenario: 'You are planning wireless network upgrades and need to understand different Wi-Fi standards.',
    instructions: 'Match each Wi-Fi standard to its maximum theoretical speed.',
    leftItems: [
      { id: 'wifi4', label: '802.11n (Wi-Fi 4)' },
      { id: 'wifi5', label: '802.11ac (Wi-Fi 5)' },
      { id: 'wifi6', label: '802.11ax (Wi-Fi 6)' },
      { id: 'wifi6e', label: '802.11ax (Wi-Fi 6E)' },
      { id: 'wifi7', label: '802.11be (Wi-Fi 7)' }
    ],
    rightItems: [
      { id: 'speed1', label: '600 Mbps' },
      { id: 'speed2', label: '3.5 Gbps' },
      { id: 'speed3', label: '9.6 Gbps' },
      { id: 'speed4', label: '9.6 Gbps (6 GHz band)' },
      { id: 'speed5', label: '46 Gbps' }
    ],
    correctMatches: {
      'wifi4': 'speed1',
      'wifi5': 'speed2',
      'wifi6': 'speed3',
      'wifi6e': 'speed4',
      'wifi7': 'speed5'
    },
    explanation: 'Wi-Fi 4 (802.11n) maxes at 600Mbps. Wi-Fi 5 (802.11ac) reaches 3.5Gbps. Wi-Fi 6 (802.11ax) supports 9.6Gbps. Wi-Fi 6E adds 6GHz band. Wi-Fi 7 (802.11be) can reach 46Gbps.'
  },

  // PBQ 8: IPv4 Subnetting (Configuration)
  {
    id: 'pbq-008',
    type: 'configuration',
    domain: '1.0',
    title: 'Subnet Calculation',
    points: 6,
    scenario: 'You have been assigned the network 172.16.0.0/22 and need to determine network parameters.',
    instructions: 'Calculate and enter the correct values for this subnet.',
    fields: [
      {
        id: 'subnet',
        label: 'Subnet Mask (decimal)',
        placeholder: '255.255.___.___',
        correctAnswer: '255.255.252.0',
        validation: 'ip'
      },
      {
        id: 'first',
        label: 'First Usable IP',
        placeholder: '172.16.___._',
        correctAnswer: '172.16.0.1',
        validation: 'ip'
      },
      {
        id: 'last',
        label: 'Last Usable IP',
        placeholder: '172.16.___._',
        correctAnswer: '172.16.3.254',
        validation: 'ip'
      },
      {
        id: 'broadcast',
        label: 'Broadcast Address',
        placeholder: '172.16.___._',
        correctAnswer: '172.16.3.255',
        validation: 'ip'
      },
      {
        id: 'hosts',
        label: 'Total Usable Hosts',
        placeholder: 'Number only',
        correctAnswer: '1022',
        validation: 'number'
      },
      {
        id: 'cidr',
        label: 'CIDR Notation',
        placeholder: '/___',
        correctAnswer: '/22',
        validation: 'text',
        partialCredit: ['/22', '22']
      }
    ],
    explanation: 'A /22 network uses 255.255.252.0 as the subnet mask, providing 1022 usable hosts (2^10 - 2). The network spans 172.16.0.0 to 172.16.3.255, with usable IPs from .0.1 to .3.254.'
  }
];

/**
 * Get all PBQ questions
 */
export function getAllPBQQuestions() {
  return pbqQuestions;
}

/**
 * Get PBQ questions by domain
 */
export function getPBQQuestionsByDomain(domain) {
  return pbqQuestions.filter(q => q.domain === domain);
}

/**
 * Get random PBQ questions
 */
export function getRandomPBQs(count = 3) {
  const shuffled = [...pbqQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * Get PBQ question by ID
 */
export function getPBQById(id) {
  return pbqQuestions.find(q => q.id === id);
}
