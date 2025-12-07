/**
 * Performance-Based Questions (PBQs) for CompTIA A+ Core 1 (220-1101) Practice Exams
 *
 * PBQ Types:
 * - drag-drop: Drag items to correct zones
 * - configuration: Fill in configuration fields
 * - matching: Match items from left to right
 * - ordering: Put items in correct sequence
 */

export const pbqQuestions = [
  // PBQ 1: Cloud Service Models (Drag-Drop)
  {
    id: 'pbq-001',
    type: 'drag-drop',
    domain: '4.0',
    title: 'Cloud Service Model Classification',
    points: 8,
    scenario: 'You are a help desk technician at a mid-sized company. Your manager has asked you to create documentation explaining the different cloud services the company uses. You need to categorize each service by its cloud model type to help employees understand what level of management the company is responsible for versus what the cloud provider manages.',
    instructions: 'Drag each cloud service to its correct service model category.',
    items: [
      { id: 'item1', label: 'Microsoft 365 (Email & Office apps)' },
      { id: 'item2', label: 'Amazon EC2 Virtual Servers' },
      { id: 'item3', label: 'Salesforce CRM' },
      { id: 'item4', label: 'Google App Engine' },
      { id: 'item5', label: 'Azure Virtual Machines' },
      { id: 'item6', label: 'Dropbox' },
      { id: 'item7', label: 'AWS Elastic Beanstalk' },
      { id: 'item8', label: 'Gmail for Business' }
    ],
    dropZones: [
      { id: 'iaas', label: 'IaaS (Infrastructure as a Service)' },
      { id: 'paas', label: 'PaaS (Platform as a Service)' },
      { id: 'saas', label: 'SaaS (Software as a Service)' }
    ],
    correctAnswers: {
      'iaas': ['item2', 'item5'],
      'paas': ['item4', 'item7'],
      'saas': ['item1', 'item3', 'item6', 'item8']
    },
    explanation: 'IaaS provides virtualized computing resources (servers, storage, networking) where YOU manage the OS and applications - Amazon EC2 and Azure Virtual Machines are examples. PaaS provides a platform for developing and deploying applications without managing infrastructure - Google App Engine and AWS Elastic Beanstalk handle the underlying servers while you focus on code. SaaS delivers complete applications over the internet - Microsoft 365, Salesforce, Dropbox, and Gmail are all ready-to-use software accessed through a browser or app.'
  },

  // PBQ 2: Network Cable Types (Drag-Drop)
  {
    id: 'pbq-002',
    type: 'drag-drop',
    domain: '2.0',
    title: 'Network Cabling Selection',
    points: 7,
    scenario: 'You are setting up network infrastructure for a new office building. The network architect has provided requirements for different areas, and you need to select the appropriate cable type for each location based on distance, speed requirements, and environmental factors.',
    instructions: 'Drag each cable type to the appropriate installation location based on the requirements.',
    items: [
      { id: 'item1', label: 'Cat 5e' },
      { id: 'item2', label: 'Cat 6' },
      { id: 'item3', label: 'Cat 6a' },
      { id: 'item4', label: 'Single-mode Fiber' },
      { id: 'item5', label: 'Multimode Fiber' },
      { id: 'item6', label: 'RG-6 Coaxial' },
      { id: 'item7', label: 'Cat 8' }
    ],
    dropZones: [
      { id: 'zone1', label: 'Standard office workstations (1 Gbps, 50m runs)' },
      { id: 'zone2', label: '10 Gbps server room connections (30m runs)' },
      { id: 'zone3', label: 'Building-to-building connection (500m)' },
      { id: 'zone4', label: 'Data center rack-to-rack (10 Gbps, 100m)' },
      { id: 'zone5', label: 'Cable TV/Internet service entrance' }
    ],
    correctAnswers: {
      'zone1': ['item1', 'item2'],
      'zone2': ['item3', 'item7'],
      'zone3': ['item4'],
      'zone4': ['item3', 'item5'],
      'zone5': ['item6']
    },
    explanation: 'Standard office workstations with 1 Gbps and 50m runs can use Cat 5e or Cat 6 - both support Gigabit at 100m. Server room 10 Gbps connections at 30m need Cat 6a (supports 10G at 100m) or Cat 8 (supports up to 40G at 30m). Building-to-building at 500m requires Single-mode Fiber since copper cables max out at 100m and single-mode supports long distances. Data center 10 Gbps at 100m can use Cat 6a or Multimode Fiber. Cable TV/Internet service entrance uses RG-6 Coaxial for DOCSIS cable modem connections.'
  },

  // PBQ 3: BIOS/UEFI Configuration (Configuration)
  {
    id: 'pbq-003',
    type: 'configuration',
    domain: '3.0',
    title: 'BIOS/UEFI Security Configuration',
    points: 5,
    scenario: 'A company is deploying new workstations that will handle sensitive financial data. The security team requires specific BIOS/UEFI settings to protect against unauthorized boot devices and firmware-level attacks. You need to configure these security settings before deploying the workstations.',
    instructions: 'Configure the BIOS/UEFI settings according to security requirements.',
    fields: [
      {
        id: 'secure-boot',
        label: 'Secure Boot',
        placeholder: 'Enabled or Disabled',
        correctAnswer: 'Enabled',
        validation: 'text',
        partialCredit: ['enabled', 'ENABLED', 'On', 'ON']
      },
      {
        id: 'boot-password',
        label: 'BIOS/UEFI Administrator Password',
        placeholder: 'Set or Not Set',
        correctAnswer: 'Set',
        validation: 'text',
        partialCredit: ['set', 'SET', 'Enabled', 'enabled']
      },
      {
        id: 'boot-order-first',
        label: 'First Boot Device',
        placeholder: 'Device type',
        correctAnswer: 'Internal HDD/SSD',
        validation: 'text',
        partialCredit: ['HDD', 'SSD', 'Hard Drive', 'Internal Drive', 'NVMe']
      },
      {
        id: 'usb-boot',
        label: 'USB Boot',
        placeholder: 'Enabled or Disabled',
        correctAnswer: 'Disabled',
        validation: 'text',
        partialCredit: ['disabled', 'DISABLED', 'Off', 'OFF']
      },
      {
        id: 'tpm',
        label: 'TPM (Trusted Platform Module)',
        placeholder: 'Enabled or Disabled',
        correctAnswer: 'Enabled',
        validation: 'text',
        partialCredit: ['enabled', 'ENABLED', 'On', 'ON']
      }
    ],
    explanation: 'Secure Boot should be ENABLED to prevent unauthorized bootloaders and rootkits from loading. A BIOS Administrator Password must be SET to prevent unauthorized changes to firmware settings. First Boot Device should be Internal HDD/SSD to prevent booting from removable media. USB Boot should be DISABLED to prevent booting from unauthorized USB devices (a common attack vector). TPM should be ENABLED to support BitLocker encryption and secure key storage, which is essential for protecting sensitive financial data.'
  },

  // PBQ 4: IP Address Configuration (Configuration)
  {
    id: 'pbq-004',
    type: 'configuration',
    domain: '2.0',
    title: 'Static IP Address Configuration',
    points: 5,
    scenario: 'You are setting up a network printer that needs a static IP address so employees can consistently connect to it. The network uses the 192.168.10.0/24 subnet. The default gateway is the router at 192.168.10.1, and the company uses internal DNS servers at 192.168.10.5 and 192.168.10.6. The printer should be assigned IP address 192.168.10.50.',
    instructions: 'Configure the static IP settings for the network printer.',
    fields: [
      {
        id: 'ip-address',
        label: 'IP Address',
        placeholder: 'xxx.xxx.xxx.xxx',
        correctAnswer: '192.168.10.50',
        validation: 'ip',
        partialCredit: []
      },
      {
        id: 'subnet-mask',
        label: 'Subnet Mask',
        placeholder: 'xxx.xxx.xxx.xxx',
        correctAnswer: '255.255.255.0',
        validation: 'ip',
        partialCredit: []
      },
      {
        id: 'default-gateway',
        label: 'Default Gateway',
        placeholder: 'xxx.xxx.xxx.xxx',
        correctAnswer: '192.168.10.1',
        validation: 'ip',
        partialCredit: []
      },
      {
        id: 'primary-dns',
        label: 'Primary DNS Server',
        placeholder: 'xxx.xxx.xxx.xxx',
        correctAnswer: '192.168.10.5',
        validation: 'ip',
        partialCredit: ['192.168.10.6']
      },
      {
        id: 'secondary-dns',
        label: 'Secondary DNS Server',
        placeholder: 'xxx.xxx.xxx.xxx',
        correctAnswer: '192.168.10.6',
        validation: 'ip',
        partialCredit: ['192.168.10.5']
      }
    ],
    explanation: 'The IP Address is 192.168.10.50 as specified for the printer. The Subnet Mask is 255.255.255.0 because the network uses /24 CIDR notation (24 network bits = 255.255.255.0). The Default Gateway is 192.168.10.1 (the router address provided). Primary DNS is 192.168.10.5 and Secondary DNS is 192.168.10.6 as provided. Note: The DNS servers could be entered in either order for partial credit since both are valid internal DNS servers.'
  },

  // PBQ 5: RAM Specifications (Matching)
  {
    id: 'pbq-005',
    type: 'matching',
    domain: '3.0',
    title: 'RAM Type Identification',
    points: 6,
    scenario: 'You are upgrading memory in several computers of different ages. You have received various RAM modules and need to match each module to its correct specifications to ensure compatibility before installation.',
    instructions: 'Match each RAM module type to its correct specifications.',
    leftItems: [
      { id: 'left1', label: 'DDR3-1600' },
      { id: 'left2', label: 'DDR4-2400' },
      { id: 'left3', label: 'DDR4-3200' },
      { id: 'left4', label: 'DDR5-4800' },
      { id: 'left5', label: 'DDR5-6400' },
      { id: 'left6', label: 'DDR3-1333' }
    ],
    rightItems: [
      { id: 'right1', label: '1.5V, 240 pins, PC3-10600' },
      { id: 'right2', label: '1.2V, 288 pins, PC4-19200' },
      { id: 'right3', label: '1.5V, 240 pins, PC3-12800' },
      { id: 'right4', label: '1.1V, 288 pins, PC5-38400' },
      { id: 'right5', label: '1.2V, 288 pins, PC4-25600' },
      { id: 'right6', label: '1.1V, 288 pins, PC5-51200' }
    ],
    correctMatches: {
      'left1': 'right3',
      'left2': 'right2',
      'left3': 'right5',
      'left4': 'right4',
      'left5': 'right6',
      'left6': 'right1'
    },
    explanation: 'DDR3-1600 = 1.5V, 240 pins, PC3-12800 (1600 × 8 = 12800). DDR4-2400 = 1.2V, 288 pins, PC4-19200 (2400 × 8 = 19200). DDR4-3200 = 1.2V, 288 pins, PC4-25600 (3200 × 8 = 25600). DDR5-4800 = 1.1V, 288 pins, PC5-38400 (4800 × 8 = 38400). DDR5-6400 = 1.1V, 288 pins, PC5-51200 (6400 × 8 = 51200). DDR3-1333 = 1.5V, 240 pins, PC3-10600 (1333 × 8 = 10664, rounded to 10600). DDR3 uses 1.5V and 240 pins, DDR4 uses 1.2V and 288 pins, DDR5 uses 1.1V and 288 pins.'
  },

  // PBQ 6: Display Connectors (Matching)
  {
    id: 'pbq-006',
    type: 'matching',
    domain: '3.0',
    title: 'Display Connector Identification',
    points: 6,
    scenario: 'A user has multiple monitors and devices that need to be connected. You need to identify the correct cables and adapters by matching each connector type to its characteristics and common use case.',
    instructions: 'Match each display connector to its correct description.',
    leftItems: [
      { id: 'left1', label: 'HDMI 2.1' },
      { id: 'left2', label: 'DisplayPort 1.4' },
      { id: 'left3', label: 'VGA (DE-15)' },
      { id: 'left4', label: 'DVI-D' },
      { id: 'left5', label: 'Thunderbolt 3' },
      { id: 'left6', label: 'USB-C (DP Alt Mode)' }
    ],
    rightItems: [
      { id: 'right1', label: 'Digital only, up to 2560×1600, dual-link, no audio' },
      { id: 'right2', label: '15-pin analog, max 2048×1536, legacy, no audio' },
      { id: 'right3', label: 'Up to 8K@60Hz, 48Gbps, audio, common on TVs' },
      { id: 'right4', label: 'Up to 8K@60Hz, 32.4Gbps, daisy-chain support' },
      { id: 'right5', label: '40Gbps, USB-C connector, can carry video/data/power' },
      { id: 'right6', label: 'Carries DisplayPort signal, reversible connector' }
    ],
    correctMatches: {
      'left1': 'right3',
      'left2': 'right4',
      'left3': 'right2',
      'left4': 'right1',
      'left5': 'right5',
      'left6': 'right6'
    },
    explanation: 'HDMI 2.1 supports 8K@60Hz with 48Gbps bandwidth, includes audio, and is standard on modern TVs. DisplayPort 1.4 also supports 8K@60Hz at 32.4Gbps and uniquely supports daisy-chaining multiple monitors. VGA is a legacy 15-pin analog connector maxing at 2048×1536 with no audio support. DVI-D is digital-only (no analog pins), supports up to 2560×1600 with dual-link, but carries no audio. Thunderbolt 3 uses the USB-C connector form factor and provides 40Gbps for video, data, and power delivery. USB-C with DisplayPort Alternate Mode carries DisplayPort signals through the reversible USB-C connector.'
  },

  // PBQ 7: PC Assembly Order (Ordering)
  {
    id: 'pbq-007',
    type: 'ordering',
    domain: '3.0',
    title: 'Desktop PC Assembly Sequence',
    points: 7,
    scenario: 'You are building a new desktop PC from components. The parts have arrived and you need to assemble them in the correct order to avoid damage and ensure proper installation. Some components must be installed before others due to physical constraints and best practices.',
    instructions: 'Put the PC assembly steps in the correct order.',
    items: [
      { id: 'step1', label: 'Install the power supply (PSU) in the case' },
      { id: 'step2', label: 'Install CPU into the motherboard socket' },
      { id: 'step3', label: 'Install CPU cooler with thermal paste' },
      { id: 'step4', label: 'Install RAM modules into motherboard slots' },
      { id: 'step5', label: 'Mount the motherboard in the case' },
      { id: 'step6', label: 'Install storage drives (SSD/HDD)' },
      { id: 'step7', label: 'Install graphics card into PCIe slot' },
      { id: 'step8', label: 'Connect all power and data cables' }
    ],
    correctOrder: ['step2', 'step3', 'step4', 'step1', 'step5', 'step6', 'step7', 'step8'],
    explanation: 'The correct assembly order starts with installing components on the motherboard BEFORE mounting it in the case (easier access). First, install the CPU into the socket (step 2) - this must be done before the cooler. Then apply thermal paste and install the CPU cooler (step 3). Next, install RAM modules (step 4) - easier with motherboard outside case. Now prepare the case: install the PSU (step 1). Mount the motherboard (step 5) with standoffs to prevent shorts. Install storage drives (step 6). Install the graphics card last among components (step 7) as it can block access to other slots. Finally, connect all power and data cables (step 8) to complete the build.'
  },

  // PBQ 8: Troubleshooting Methodology (Ordering)
  {
    id: 'pbq-008',
    type: 'ordering',
    domain: '5.0',
    title: 'CompTIA Troubleshooting Methodology',
    points: 6,
    scenario: 'A user reports that their computer will not turn on. As a help desk technician, you need to follow the proper troubleshooting methodology to diagnose and resolve the issue systematically. Following the correct order ensures efficient problem resolution and proper documentation.',
    instructions: 'Put the CompTIA troubleshooting steps in the correct order.',
    items: [
      { id: 'step1', label: 'Identify the problem - gather information, question users, identify symptoms' },
      { id: 'step2', label: 'Establish a theory of probable cause - question the obvious, consider multiple causes' },
      { id: 'step3', label: 'Test the theory to determine the cause - confirm or establish new theory' },
      { id: 'step4', label: 'Establish a plan of action and identify potential effects' },
      { id: 'step5', label: 'Implement the solution or escalate as necessary' },
      { id: 'step6', label: 'Verify full system functionality and implement preventive measures' },
      { id: 'step7', label: 'Document findings, actions, and outcomes' }
    ],
    correctOrder: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'],
    explanation: 'The CompTIA troubleshooting methodology has 7 steps that must be followed in order: 1) IDENTIFY THE PROBLEM by gathering information from users, identifying symptoms, and determining if anything changed recently. 2) ESTABLISH A THEORY by questioning the obvious first and considering multiple possible causes. 3) TEST THE THEORY - if confirmed, proceed; if not, establish a new theory. 4) ESTABLISH A PLAN OF ACTION considering potential effects on other systems or users. 5) IMPLEMENT THE SOLUTION or escalate to higher support if beyond your scope. 6) VERIFY FULL FUNCTIONALITY and implement preventive measures to avoid recurrence. 7) DOCUMENT everything including the problem, steps taken, and resolution for future reference.'
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

// Alias for exam generator compatibility
export const getRandomCore1PBQs = getRandomPBQs;

/**
 * Get PBQ question by ID
 */
export function getPBQById(id) {
  return pbqQuestions.find(q => q.id === id);
}

/**
 * Get PBQ questions by type
 */
export function getPBQsByType(type) {
  return pbqQuestions.filter(q => q.type === type);
}

/*
PBQ SUMMARY:
============
ID        | Type          | Domain | Title                              | Points
----------|---------------|--------|------------------------------------|---------
pbq-001   | drag-drop     | 4.0    | Cloud Service Model Classification | 8
pbq-002   | drag-drop     | 2.0    | Network Cabling Selection          | 7
pbq-003   | configuration | 3.0    | BIOS/UEFI Security Configuration   | 5
pbq-004   | configuration | 2.0    | Static IP Address Configuration    | 5
pbq-005   | matching      | 3.0    | RAM Type Identification            | 6
pbq-006   | matching      | 3.0    | Display Connector Identification   | 6
pbq-007   | ordering      | 3.0    | Desktop PC Assembly Sequence       | 7
pbq-008   | ordering      | 5.0    | CompTIA Troubleshooting Methodology| 6

Total Points: 50
Types: 2 drag-drop, 2 configuration, 2 matching, 2 ordering ✓
*/