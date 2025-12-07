/**
 * Performance-Based Questions (PBQs) for CompTIA A+ Core 2 (220-1102) Practice Exams
 *
 * PBQ Types:
 * - drag-drop: Drag items to correct zones
 * - configuration: Fill in configuration fields
 * - matching: Match items from left to right
 * - ordering: Put items in correct sequence
 */

export const pbqQuestions = [
  // PBQ 1: Windows Edition Features (Drag-Drop)
  {
    id: 'pbq-001',
    type: 'drag-drop',
    domain: '1.0',
    title: 'Windows Edition Feature Comparison',
    points: 8,
    scenario: 'Your company is planning to upgrade workstations from Windows 10 Home to a more appropriate edition. Management needs to understand which features are available in which Windows editions to make an informed purchasing decision. You need to categorize features by the minimum Windows edition required.',
    instructions: 'Drag each Windows feature to the minimum edition that supports it.',
    items: [
      { id: 'item1', label: 'BitLocker Drive Encryption' },
      { id: 'item2', label: 'Join Active Directory Domain' },
      { id: 'item3', label: 'Windows Defender Antivirus' },
      { id: 'item4', label: 'Remote Desktop (as host/server)' },
      { id: 'item5', label: 'Group Policy Editor (gpedit.msc)' },
      { id: 'item6', label: 'Hyper-V Virtualization' },
      { id: 'item7', label: 'Microsoft Store Apps' },
      { id: 'item8', label: 'Windows Update for Business' }
    ],
    dropZones: [
      { id: 'home', label: 'Windows 10/11 Home' },
      { id: 'pro', label: 'Windows 10/11 Pro' },
      { id: 'enterprise', label: 'Windows 10/11 Enterprise' }
    ],
    correctAnswers: {
      'home': ['item3', 'item7'],
      'pro': ['item1', 'item2', 'item4', 'item5', 'item6'],
      'enterprise': ['item8']
    },
    explanation: 'Windows HOME includes basic features like Windows Defender Antivirus and Microsoft Store Apps. Windows PRO adds business features: BitLocker encryption, Active Directory domain join, Remote Desktop hosting, Group Policy Editor (gpedit.msc), and Hyper-V virtualization. Windows ENTERPRISE adds advanced management features like Windows Update for Business (WUFB) for controlled update deployment. Note: While some Pro features exist in Enterprise, we categorize by MINIMUM required edition.'
  },

  // PBQ 2: Malware Types and Behaviors (Drag-Drop)
  {
    id: 'pbq-002',
    type: 'drag-drop',
    domain: '2.0',
    title: 'Malware Classification',
    points: 8,
    scenario: 'As a security analyst, you are training new help desk staff on different types of malware. You need to categorize various malware characteristics and behaviors to help them identify threats when users report suspicious activity.',
    instructions: 'Drag each malware behavior or characteristic to the correct malware type.',
    items: [
      { id: 'item1', label: 'Encrypts files and demands cryptocurrency payment' },
      { id: 'item2', label: 'Self-replicates across networks without user action' },
      { id: 'item3', label: 'Hides deep in OS, modifies kernel to avoid detection' },
      { id: 'item4', label: 'Records keystrokes and sends to attacker' },
      { id: 'item5', label: 'Appears as legitimate software but contains malicious code' },
      { id: 'item6', label: 'Requires host file to spread, activates when file is opened' },
      { id: 'item7', label: 'Displays unwanted advertisements and pop-ups' },
      { id: 'item8', label: 'Allows remote control of infected computer (part of botnet)' }
    ],
    dropZones: [
      { id: 'ransomware', label: 'Ransomware' },
      { id: 'worm', label: 'Worm' },
      { id: 'rootkit', label: 'Rootkit' },
      { id: 'spyware', label: 'Spyware/Keylogger' },
      { id: 'trojan', label: 'Trojan' },
      { id: 'virus', label: 'Virus' }
    ],
    correctAnswers: {
      'ransomware': ['item1'],
      'worm': ['item2'],
      'rootkit': ['item3'],
      'spyware': ['item4'],
      'trojan': ['item5', 'item8'],
      'virus': ['item6', 'item7']
    },
    explanation: 'RANSOMWARE encrypts files and demands payment for decryption keys. WORMS self-replicate across networks without requiring user interaction or host files. ROOTKITS hide in the operating system kernel, modifying core functions to avoid detection. SPYWARE/KEYLOGGERS monitor user activity and capture sensitive information like passwords. TROJANS appear legitimate but contain hidden malicious functions - this includes RATs (Remote Access Trojans) that create botnets. VIRUSES require a host file to spread and activate when the infected file is opened. Note: Adware is often bundled with or delivered by viruses.'
  },

  // PBQ 3: Windows Firewall Configuration (Configuration)
  {
    id: 'pbq-003',
    type: 'configuration',
    domain: '2.0',
    title: 'Windows Firewall Rule Configuration',
    points: 5,
    scenario: 'A department needs to run a custom inventory application that uses port 8443 for secure communication with a central server at 10.10.5.100. You need to create a Windows Firewall rule to allow this traffic while following security best practices of allowing only what is necessary.',
    instructions: 'Configure the Windows Firewall inbound rule settings.',
    fields: [
      {
        id: 'rule-name',
        label: 'Rule Name',
        placeholder: 'Descriptive name for the rule',
        correctAnswer: 'Inventory App',
        validation: 'text',
        partialCredit: ['Inventory Application', 'Custom Inventory App', 'Inventory']
      },
      {
        id: 'action',
        label: 'Action',
        placeholder: 'Allow or Block',
        correctAnswer: 'Allow',
        validation: 'text',
        partialCredit: ['allow', 'ALLOW', 'Permit']
      },
      {
        id: 'protocol',
        label: 'Protocol',
        placeholder: 'TCP or UDP',
        correctAnswer: 'TCP',
        validation: 'text',
        partialCredit: ['tcp']
      },
      {
        id: 'port',
        label: 'Local Port',
        placeholder: 'Port number',
        correctAnswer: '8443',
        validation: 'number',
        partialCredit: []
      },
      {
        id: 'remote-ip',
        label: 'Remote IP Address (Scope)',
        placeholder: 'IP address or range',
        correctAnswer: '10.10.5.100',
        validation: 'ip',
        partialCredit: ['10.10.5.100/32']
      }
    ],
    explanation: 'The Rule Name should be descriptive like "Inventory App" for easy identification. Action is "Allow" since we need to permit this traffic. Protocol is "TCP" because port 8443 is typically used for secure HTTPS-like connections which use TCP. Local Port is "8443" as specified in the requirements. Remote IP should be scoped to only "10.10.5.100" (the server) following the principle of least privilege - rather than allowing any IP address to connect on this port, we restrict it to only the authorized server.'
  },

  // PBQ 4: User Account Configuration (Configuration)
  {
    id: 'pbq-004',
    type: 'configuration',
    domain: '1.0',
    title: 'Local User Account Security Settings',
    points: 6,
    scenario: 'You are configuring a new Windows workstation for a contractor who needs limited access. Company policy requires specific password and account settings for all contractor accounts. Configure the local user account according to security requirements.',
    instructions: 'Configure the user account security settings according to company policy.',
    fields: [
      {
        id: 'account-type',
        label: 'Account Type',
        placeholder: 'Administrator or Standard User',
        correctAnswer: 'Standard User',
        validation: 'text',
        partialCredit: ['Standard', 'standard user', 'User', 'Limited']
      },
      {
        id: 'password-expires',
        label: 'Password Expires',
        placeholder: 'Yes or No',
        correctAnswer: 'Yes',
        validation: 'text',
        partialCredit: ['yes', 'YES', 'True', 'Enabled']
      },
      {
        id: 'user-must-change',
        label: 'User Must Change Password at Next Logon',
        placeholder: 'Yes or No',
        correctAnswer: 'Yes',
        validation: 'text',
        partialCredit: ['yes', 'YES', 'True', 'Enabled']
      },
      {
        id: 'account-disabled',
        label: 'Account is Disabled',
        placeholder: 'Yes or No',
        correctAnswer: 'No',
        validation: 'text',
        partialCredit: ['no', 'NO', 'False', 'Disabled']
      },
      {
        id: 'group-membership',
        label: 'Primary Group Membership',
        placeholder: 'Group name',
        correctAnswer: 'Users',
        validation: 'text',
        partialCredit: ['users', 'Standard Users']
      },
      {
        id: 'logon-hours',
        label: 'Restrict Logon Hours',
        placeholder: 'Yes or No',
        correctAnswer: 'Yes',
        validation: 'text',
        partialCredit: ['yes', 'YES', 'True', 'Enabled']
      }
    ],
    explanation: 'Account Type should be "Standard User" - contractors should never have Administrator privileges (principle of least privilege). Password Expires should be "Yes" so passwords must be changed periodically. User Must Change Password at Next Logon should be "Yes" so the contractor sets their own password (admin shouldn\'t know it). Account is Disabled should be "No" so they can actually use the account. Primary Group Membership should be "Users" (the standard user group). Restrict Logon Hours should be "Yes" for contractors to limit when they can access the system.'
  },

  // PBQ 5: Command Line Tools (Matching)
  {
    id: 'pbq-005',
    type: 'matching',
    domain: '1.0',
    title: 'Windows Command Line Tools',
    points: 7,
    scenario: 'A junior technician needs to learn Windows command-line troubleshooting tools. You are creating a reference guide that matches each command to its primary function to help them quickly identify which tool to use for different problems.',
    instructions: 'Match each Windows command to its correct function.',
    leftItems: [
      { id: 'left1', label: 'sfc /scannow' },
      { id: 'left2', label: 'chkdsk /r' },
      { id: 'left3', label: 'ipconfig /flushdns' },
      { id: 'left4', label: 'gpupdate /force' },
      { id: 'left5', label: 'netstat -an' },
      { id: 'left6', label: 'taskkill /PID 1234 /F' },
      { id: 'left7', label: 'robocopy' }
    ],
    rightItems: [
      { id: 'right1', label: 'Display all active network connections and listening ports' },
      { id: 'right2', label: 'Scan and repair Windows system files using cached copies' },
      { id: 'right3', label: 'Check disk for errors and recover readable information from bad sectors' },
      { id: 'right4', label: 'Clear the local DNS resolver cache' },
      { id: 'right5', label: 'Forcefully terminate a process by its Process ID' },
      { id: 'right6', label: 'Immediately refresh Group Policy settings from domain controller' },
      { id: 'right7', label: 'Robust file copy utility with resume and mirroring capabilities' }
    ],
    correctMatches: {
      'left1': 'right2',
      'left2': 'right3',
      'left3': 'right4',
      'left4': 'right6',
      'left5': 'right1',
      'left6': 'right5',
      'left7': 'right7'
    },
    explanation: 'sfc /scannow = System File Checker scans and repairs corrupted Windows system files. chkdsk /r = Check Disk with /r repairs file system errors AND recovers data from bad sectors. ipconfig /flushdns = Clears the DNS resolver cache (useful when DNS changes aren\'t being recognized). gpupdate /force = Forces immediate Group Policy refresh from the domain controller. netstat -an = Shows all (-a) network connections and listening ports in numerical (-n) format. taskkill /PID 1234 /F = Forcefully (/F) terminates the process with the specified Process ID. robocopy = Robust Copy is an advanced file copy utility that can resume interrupted transfers and mirror directories.'
  },

  // PBQ 6: File System Permissions (Matching)
  {
    id: 'pbq-006',
    type: 'matching',
    domain: '1.0',
    title: 'NTFS Permission Levels',
    points: 6,
    scenario: 'You need to configure folder permissions for a shared project directory. Different user groups need different access levels. Match each NTFS permission level to what it allows users to do.',
    instructions: 'Match each NTFS permission to its correct description of allowed actions.',
    leftItems: [
      { id: 'left1', label: 'Read' },
      { id: 'left2', label: 'Read & Execute' },
      { id: 'left3', label: 'Write' },
      { id: 'left4', label: 'Modify' },
      { id: 'left5', label: 'Full Control' },
      { id: 'left6', label: 'List Folder Contents' }
    ],
    rightItems: [
      { id: 'right1', label: 'View files, attributes, and permissions only' },
      { id: 'right2', label: 'Read permissions plus run executable files' },
      { id: 'right3', label: 'Create files/folders and modify attributes (cannot delete)' },
      { id: 'right4', label: 'Read, write, execute, and delete files (not change permissions)' },
      { id: 'right5', label: 'All permissions including change ownership and permissions' },
      { id: 'right6', label: 'View folder contents only (applies to folders, not files)' }
    ],
    correctMatches: {
      'left1': 'right1',
      'left2': 'right2',
      'left3': 'right3',
      'left4': 'right4',
      'left5': 'right5',
      'left6': 'right6'
    },
    explanation: 'READ allows viewing files, attributes, and permissions but no modifications. READ & EXECUTE includes Read plus the ability to run programs/scripts. WRITE allows creating new files and modifying attributes but cannot delete existing files. MODIFY includes Read, Write, Execute, and Delete - essentially everything except changing permissions and ownership. FULL CONTROL grants all permissions including the ability to change permissions and take ownership. LIST FOLDER CONTENTS is similar to Read & Execute but only applies to folders - useful for allowing navigation without accessing file contents.'
  },

  // PBQ 7: Malware Removal Process (Ordering)
  {
    id: 'pbq-007',
    type: 'ordering',
    domain: '3.0',
    title: 'Malware Removal Procedure',
    points: 7,
    scenario: 'A user reports their computer is running slowly and displaying unexpected pop-ups. You suspect malware infection. Following the proper malware removal procedure is essential to ensure complete removal and prevent reinfection.',
    instructions: 'Put the malware removal steps in the correct order.',
    items: [
      { id: 'step1', label: 'Identify and research malware symptoms' },
      { id: 'step2', label: 'Quarantine the infected system (disconnect from network)' },
      { id: 'step3', label: 'Disable System Restore to prevent reinfection from restore points' },
      { id: 'step4', label: 'Boot into Safe Mode or use recovery environment' },
      { id: 'step5', label: 'Run anti-malware scans and remove infections' },
      { id: 'step6', label: 'Schedule follow-up scans and verify removal' },
      { id: 'step7', label: 'Re-enable System Restore and create new restore point' },
      { id: 'step8', label: 'Educate end user on malware prevention' }
    ],
    correctOrder: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8'],
    explanation: 'The CompTIA-recommended malware removal process: 1) IDENTIFY symptoms and research the specific malware if possible. 2) QUARANTINE by disconnecting from the network to prevent spread and stop data exfiltration. 3) DISABLE SYSTEM RESTORE because malware can hide in restore points and reinfect after cleaning. 4) BOOT INTO SAFE MODE to prevent malware from loading and blocking removal tools. 5) RUN ANTI-MALWARE SCANS using updated definitions, preferably multiple tools. 6) SCHEDULE FOLLOW-UP SCANS to verify complete removal. 7) RE-ENABLE SYSTEM RESTORE and create a clean restore point. 8) EDUCATE THE USER on how the infection occurred and prevention practices.'
  },

  // PBQ 8: Change Management Process (Ordering)
  {
    id: 'pbq-008',
    type: 'ordering',
    domain: '4.0',
    title: 'Change Management Process',
    points: 6,
    scenario: 'Your company is implementing a new software deployment that will affect 200 workstations. Following proper change management procedures is required before any changes can be made to production systems.',
    instructions: 'Put the change management steps in the correct order.',
    items: [
      { id: 'step1', label: 'Document the proposed change and submit change request' },
      { id: 'step2', label: 'Analyze risk and identify potential impact' },
      { id: 'step3', label: 'Obtain approval from Change Advisory Board (CAB)' },
      { id: 'step4', label: 'Test the change in a non-production environment' },
      { id: 'step5', label: 'Implement the change during approved maintenance window' },
      { id: 'step6', label: 'Document results and update knowledge base' },
      { id: 'step7', label: 'Develop rollback plan in case of failure' }
    ],
    correctOrder: ['step1', 'step2', 'step7', 'step4', 'step3', 'step5', 'step6'],
    explanation: 'Proper change management follows this order: 1) DOCUMENT AND SUBMIT the change request with clear description of what will change. 2) ANALYZE RISK and identify systems/users that could be affected. 3) DEVELOP ROLLBACK PLAN before testing - you need to know how to undo changes if something goes wrong. 4) TEST IN NON-PRODUCTION to verify the change works as expected. 5) OBTAIN CAB APPROVAL with test results and rollback plan ready. 6) IMPLEMENT DURING MAINTENANCE WINDOW to minimize user impact. 7) DOCUMENT RESULTS including any issues encountered, for future reference and knowledge sharing.'
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
export const getRandomCore2PBQs = getRandomPBQs;

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
pbq-001   | drag-drop     | 1.0    | Windows Edition Feature Comparison | 8
pbq-002   | drag-drop     | 2.0    | Malware Classification             | 8
pbq-003   | configuration | 2.0    | Windows Firewall Rule Configuration| 5
pbq-004   | configuration | 1.0    | Local User Account Security Settings| 6
pbq-005   | matching      | 1.0    | Windows Command Line Tools         | 7
pbq-006   | matching      | 1.0    | NTFS Permission Levels             | 6
pbq-007   | ordering      | 3.0    | Malware Removal Procedure          | 7
pbq-008   | ordering      | 4.0    | Change Management Process          | 6

Total Points: 53
Types: 2 drag-drop, 2 configuration, 2 matching, 2 ordering ✓
*/