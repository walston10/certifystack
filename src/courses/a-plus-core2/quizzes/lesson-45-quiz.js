export const lesson45Quiz = [
  {
    id: 1,
    question: "An employee receives an email appearing to be from their CEO requesting immediate wire transfer of funds to a new vendor. The email emphasizes urgency and confidentiality. What type of social engineering attack is this?",
    options: [
      "Phishing",
      "Whaling (CEO fraud/Business Email Compromise)",
      "Vishing",
      "Shoulder surfing"
    ],
    correct: 1,
    explanation: "Whaling (or CEO fraud/BEC - Business Email Compromise) targets high-value individuals or impersonates executives to authorize fraudulent transactions. Attackers research victims via social media and craft convincing emails. The urgency and authority prevent verification. Prevention: verify requests through separate communication channels, implement financial controls requiring multiple approvals. Regular phishing targets anyone. Vishing uses phone calls. Shoulder surfing observes screens. Whaling specifically targets or impersonates executives."
  },
  {
    id: 2,
    question: "A user receives a phone call from someone claiming to be from their bank's fraud department, warning of suspicious activity and requesting their account password to 'secure the account.' What type of attack is this?",
    options: [
      "Phishing (email-based)",
      "Vishing (voice phishing)",
      "Smishing (SMS phishing)",
      "Pharming"
    ],
    correct: 1,
    explanation: "Vishing (voice phishing) uses phone calls to trick victims into revealing sensitive information. Attackers use caller ID spoofing to appear legitimate, create urgency, and exploit trust in phone communication. Banks NEVER request passwords by phone. Prevention: hang up and call the official number, never give credentials over phone, verify caller identity independently. Phishing uses email. Smishing uses text messages. Pharming redirects websites. Vishing's medium is voice calls."
  },
  {
    id: 3,
    question: "An attacker follows an employee through a secure door by pretending to have forgotten their badge and asking the employee to hold the door. What social engineering technique is this?",
    options: [
      "Phishing",
      "Shoulder surfing",
      "Tailgating (piggybacking)",
      "Dumpster diving"
    ],
    correct: 2,
    explanation: "Tailgating (or piggybacking) is when unauthorized individuals follow authorized persons through secure entry points, exploiting politeness and social norms. Prevention: employee training (politely require everyone to badge), access control vestibules (mantraps), security guards, cameras, signage. Never hold doors for unknown persons in secure areas. Phishing is email-based. Shoulder surfing observes information. Dumpster diving searches trash. Tailgating exploits physical security through social manipulation."
  },
  {
    id: 4,
    question: "A user receives a text message claiming to be from their package delivery service with a link to 'track your package.' Clicking the link leads to a fake website requesting login credentials. What type of attack is this?",
    options: [
      "Vishing",
      "Phishing",
      "Smishing (SMS phishing)",
      "Impersonation"
    ],
    correct: 2,
    explanation: "Smishing (SMS/text message phishing) uses text messages to deliver malicious links or request sensitive information. Growing threat as people trust texts more than emails. Attackers spoof sender IDs to appear legitimate. Prevention: don't click links in unexpected texts, manually navigate to sites, verify sender, delete suspicious messages. Vishing uses voice calls. Phishing traditionally uses email (though terms overlap). Smishing specifically uses SMS/text as the delivery method."
  },
  {
    id: 5,
    question: "An attacker calls the IT help desk pretending to be an executive traveling abroad who forgot their password and needs immediate access. They pressure the technician by mentioning an important meeting. What social engineering principle is being exploited?",
    options: [
      "Technical complexity",
      "Authority and urgency",
      "Encryption weakness",
      "Software vulnerability"
    ],
    correct: 1,
    explanation: "Attackers exploit authority (claiming to be an executive) and urgency (important meeting, time pressure) to bypass normal security procedures. These psychological tactics make people comply without verification. Prevention: verify identity through established procedures regardless of claimed authority, never skip security protocols due to pressure, implement callback verification. Train help desk to resist urgency tactics. Authority and urgency are powerful social engineering tools that override rational decision-making."
  },
  {
    id: 6,
    question: "An attacker searches through a company's trash bins outside the building, finding discarded documents containing employee names, phone numbers, and internal project information. What attack is this?",
    options: [
      "Shoulder surfing",
      "Dumpster diving",
      "Tailgating",
      "Phishing"
    ],
    correct: 1,
    explanation: "Dumpster diving involves searching trash for sensitive information: documents, post-it notes with passwords, discarded hard drives, organization charts. Surprisingly effective as people don't consider trash a security risk. Prevention: shred all documents, wipe/destroy storage media, secure trash areas, employee awareness. Information from dumpsters enables further attacks (spear phishing with internal knowledge). Shoulder surfing observes screens. Tailgating follows through doors. Phishing uses email. Dumpster diving literally searches garbage."
  },
  {
    id: 7,
    question: "An employee receives an email that appears to be from HR, specifically addressing them by name and referencing their department. The email requests updating personal information through an attached form. What makes this attack more dangerous than regular phishing?",
    options: [
      "It uses the employee's actual information (spear phishing)",
      "It comes from outside the company",
      "It has spelling errors",
      "It includes a link"
    ],
    correct: 0,
    explanation: "Spear phishing is targeted phishing using specific information about the victim (name, department, projects) gathered through research (social media, company websites, data breaches). Personalization makes it more convincing than generic phishing. Prevention: verify requests through independent channels, security awareness training with examples, email authentication (SPF, DKIM, DMARC). Spear phishing has higher success rates because it appears legitimate and relevant. Generic phishing casts wide nets; spear phishing targets individuals."
  },
  {
    id: 8,
    question: "A person wearing a plumbing company uniform and carrying tools approaches a locked office door, telling the receptionist they're there to fix a reported leak. The receptionist, not wanting to delay urgent repairs, lets them in without verifying the appointment. What attack technique is this?",
    options: [
      "Vishing",
      "Impersonation/pretexting",
      "Pharming",
      "Shoulder surfing"
    ],
    correct: 1,
    explanation: "Impersonation/pretexting involves creating a believable scenario (pretext) to gain access or information. Attackers use uniforms, fake IDs, and plausible stories. Common pretexts: delivery person, maintenance worker, fire inspector, IT support. Prevention: verify all service appointments, require check-in procedures, escort visitors, employee training. The uniform and tools create believability. Vishing uses phone calls. Pharming redirects websites. Shoulder surfing observes information. Impersonation exploits trust in familiar roles."
  },
  {
    id: 9,
    question: "A user at a coffee shop works on their laptop. An attacker sitting nearby watches over their shoulder as they enter their email password. What social engineering attack is this?",
    options: [
      "Tailgating",
      "Dumpster diving",
      "Shoulder surfing",
      "Phishing"
    ],
    correct: 2,
    explanation: "Shoulder surfing is directly observing someone entering sensitive information (passwords, PINs, data) by looking over their shoulder or using cameras/binoculars. Common in public spaces: airports, coffee shops, ATMs. Prevention: privacy screens, be aware of surroundings, shield keyboard/screen when entering credentials, use biometrics. Tailgating follows through doors. Dumpster diving searches trash. Phishing uses email. Shoulder surfing is simple but effective visual espionage."
  },
  {
    id: 10,
    question: "A company receives multiple calls to their help desk from the same person trying different employee names and departments, claiming to need password resets. The caller hangs up when asked for verification. What reconnaissance technique is this attacker likely using?",
    options: [
      "Scanning employee badges visually",
      "Elicitation - gathering information through seemingly innocent questions",
      "Encrypting communications",
      "Installing keyloggers"
    ],
    correct: 1,
    explanation: "Elicitation is extracting information through casual conversation or innocent-seeming questions without raising suspicion. The attacker is reconnaissance - testing names/departments to build an organizational map for future targeted attacks. Prevention: train employees to recognize information gathering, limit publicly available organizational details, establish information classification. Elicitation differs from direct requests - victims don't realize they're giving valuable intelligence. This information enables more convincing spear phishing or impersonation."
  },
  {
    id: 11,
    question: "An attacker sends thousands of generic emails claiming 'Your account will be suspended' with a link to 'verify your information.' Only a small percentage need to respond for the attack to succeed. What type of attack is this?",
    options: [
      "Spear phishing - highly targeted",
      "Whaling - targeting executives",
      "Phishing - broad, untargeted attack",
      "Vishing - phone-based"
    ],
    correct: 2,
    explanation: "This is classic phishing - broad, untargeted attacks sent to many recipients hoping some will click. Uses generic messages, creates urgency, impersonates trusted entities (banks, services). Low success rate but volume compensates. Prevention: security awareness training, email filtering, multi-factor authentication (limits damage from stolen credentials). Spear phishing targets specific individuals. Whaling targets executives. Vishing uses phone calls. Regular phishing is a numbers game - cast wide nets."
  },
  {
    id: 12,
    question: "An employee finds a USB drive in the parking lot labeled 'Executive Salaries - Confidential.' Curious, they plug it into their work computer to see what's on it. What has the employee fallen victim to?",
    options: [
      "A legitimate lost item",
      "A baiting attack using curiosity and found media",
      "Shoulder surfing",
      "Vishing"
    ],
    correct: 1,
    explanation: "Baiting exploits curiosity by leaving infected USB drives or other media in locations where targets will find them (parking lots, lobbies, elevators). Labels create urgency or curiosity ('Executive Salaries,' 'Layoff List'). Once connected, malware installs. Famous example: Stuxnet spread partly through USB. Prevention: never connect unknown media, disable AutoRun, employee awareness training, USB device policies. Shoulder surfing observes information. Vishing uses phone calls. This is baiting through physical media."
  },
  {
    id: 13,
    question: "What is the MOST effective defense against social engineering attacks?",
    options: [
      "Expensive security software",
      "Firewalls and antivirus",
      "Security awareness training and establishing verification procedures",
      "Stronger passwords"
    ],
    correct: 2,
    explanation: "Social engineering exploits human psychology, not technical vulnerabilities. The best defense is comprehensive security awareness training: recognize tactics, verify requests independently, follow procedures, report suspicious activity. Establish verification protocols (callback verification for sensitive requests, badge requirements for visitors). Technology helps but can't prevent humans from being manipulated. Firewalls don't stop phone calls. Antivirus doesn't prevent tailgating. Passwords don't matter if someone convinces you to share them. Train the humans."
  },
  {
    id: 14,
    question: "An attacker sends an email with a malicious attachment disguised as an invoice from a known vendor. The email address is slightly misspelled (arnaz0n.com instead of amazon.com). What red flag should alert the user?",
    options: [
      "The email arrived during business hours",
      "The sender's email domain is suspicious/spoofed",
      "The email contains an attachment",
      "The email mentions money"
    ],
    correct: 1,
    explanation: "Domain spoofing uses similar-looking email addresses (typosquatting): replace 'o' with '0', add/remove letters, use different TLDs. Users should examine sender addresses carefully before clicking links or opening attachments. Other red flags: urgency, spelling/grammar errors, unexpected attachments, requests for credentials. Prevention: hover over links before clicking, verify sender through independent means, email authentication technologies. Arrival time isn't suspicious. Legitimate invoices have attachments. Mentions of money are common in business."
  },
  {
    id: 15,
    question: "A company wants to test employee susceptibility to social engineering. What should they do?",
    options: [
      "Fire employees who fail tests",
      "Conduct simulated phishing campaigns and provide training to those who click",
      "Never test employees - it's unethical",
      "Only test IT staff, not regular employees"
    ],
    correct: 1,
    explanation: "Regular simulated phishing/social engineering tests identify vulnerable employees and provide targeted training. This is standard security practice. Approach: send fake phishing emails, track who clicks, provide immediate education (not punishment), adjust training based on results, gradually increase difficulty. Don't punish - educate. Testing all employees is essential (attackers don't just target IT). Ethical when done transparently as part of security program. Regular testing + training significantly reduces successful attacks. Make it a learning opportunity."
  }
];