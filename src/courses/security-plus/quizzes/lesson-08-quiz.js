export const lesson08Quiz = [
  {
    id: 1,
    question: "An employee receives an email appearing to be from their bank, requesting they click a link to verify their account due to 'suspicious activity.' The link leads to a fake website that captures their credentials. What type of attack is this?",
    options: [
      "Vishing - phone-based attack",
      "Phishing - fraudulent email attempting to steal credentials through deceptive links",
      "Tailgating - physical access attack",
      "Shoulder surfing - visual observation"
    ],
    correct: 1,
    explanation: "PHISHING uses fraudulent emails impersonating trusted entities to steal credentials or deliver malware. Phishing characteristics: (1) Spoofed sender address appearing legitimate, (2) Urgent or threatening language ('verify now or account locked'), (3) Links to fake websites mimicking real ones, (4) Requests for sensitive information. Red flags: generic greetings, spelling errors, suspicious URLs (hover to check), threats of account closure, requests for passwords/SSN. This scenario: classic credential phishing - fake bank email → fake bank site → captured credentials. Defense: email filtering, user awareness training, MFA (even captured password won't work alone), URL inspection, SPF/DKIM/DMARC. Phishing remains #1 attack vector because it works - even one successful click can compromise an organization."
  },
  {
    id: 2,
    question: "A company's CFO receives a carefully crafted email addressing them by name, referencing recent company events, and appearing to come from the CEO requesting an urgent wire transfer. What type of phishing is this?",
    options: [
      "Generic phishing - mass email campaign",
      "Spear phishing - targeted attack using personalized information about specific individuals",
      "Smishing - SMS-based phishing",
      "Vishing - voice phishing"
    ],
    correct: 1,
    explanation: "SPEAR PHISHING is highly targeted phishing using personalized information about specific victims. Spear phishing characteristics: (1) Targets specific individuals, (2) Uses personal details (name, job, company events), (3) Appears from known/trusted sender, (4) References real projects, colleagues, or situations, (5) Often targets high-value individuals (executives, finance). Attack preparation: (1) OSINT reconnaissance (LinkedIn, company website, news), (2) Identify targets and relationships, (3) Craft convincing pretext. This scenario: BEC (Business Email Compromise) variant - impersonating CEO to CFO for wire fraud. Extremely effective because personalization bypasses suspicion. Defense: verification procedures for financial requests (callback to known number), awareness training specific to role, email authentication, careful social media sharing. Spear phishing success rate is significantly higher than mass phishing."
  },
  {
    id: 3,
    question: "A board member receives a phishing email specifically crafted to target them as a senior executive, using detailed knowledge of board activities and appearing to come from the company's legal counsel. What is this attack called?",
    options: [
      "Regular phishing",
      "Whaling - phishing specifically targeting high-level executives",
      "Smishing",
      "Vishing"
    ],
    correct: 1,
    explanation: "WHALING targets high-level executives ('big fish' or 'whales') with sophisticated, highly personalized attacks. Whaling characteristics: (1) Targets C-suite, board members, senior executives, (2) Extremely well-researched and personalized, (3) References board matters, M&A, legal issues, (4) Higher stakes - executives have more access and authority, (5) Often requests large wire transfers or sensitive data. Why executives are targeted: (1) Authority to approve large transactions, (2) Access to most sensitive information, (3) Often less security training than regular employees, (4) May use personal devices with less protection. Defense: executive-specific security awareness, strict verification for financial/sensitive requests, dedicated phishing simulations for leadership, enhanced email protection for executive accounts. Whaling attacks can cause massive damage - single successful attack can mean millions in losses or major data breach."
  },
  {
    id: 4,
    question: "An attacker calls an employee, claims to be from IT support, and convinces them to provide their password to 'fix a system issue.' What type of attack is this?",
    options: [
      "Phishing - email-based attack",
      "Vishing - voice/phone-based social engineering attack",
      "Smishing - SMS-based attack",
      "Shoulder surfing - visual observation"
    ],
    correct: 1,
    explanation: "VISHING (Voice Phishing) uses phone calls to socially engineer victims into revealing information or taking actions. Vishing techniques: (1) Impersonate IT support, help desk, (2) Impersonate banks, government agencies, (3) Create urgency ('your account is compromised'), (4) Use caller ID spoofing to appear legitimate, (5) May have some real information (adds credibility). This scenario: classic IT support impersonation - attackers know most users will comply with 'IT' requests. Vishing advantages for attackers: (1) Real-time manipulation, (2) Can adapt to victim responses, (3) Voice creates trust/urgency, (4) Harder to verify than email. Defense: never give passwords over phone (IT will never ask), callback verification to known numbers, awareness training, established procedures for support requests. Similar attacks: tech support scams ('Microsoft' calling about viruses), IRS scams, bank fraud calls."
  },
  {
    id: 5,
    question: "An employee receives a text message claiming their package delivery failed and providing a link to 'reschedule.' The link leads to a credential harvesting site. What type of attack is this?",
    options: [
      "Vishing - phone call attack",
      "Smishing - SMS/text message phishing attack",
      "Tailgating - physical access",
      "Dumpster diving - searching trash"
    ],
    correct: 1,
    explanation: "SMISHING (SMS Phishing) uses text messages to deliver phishing attacks. Smishing characteristics: (1) Short, urgent text messages, (2) Links to malicious sites, (3) Often impersonates: delivery services, banks, government, (4) Exploits immediacy of SMS, (5) Harder to verify sender than email. Common smishing pretexts: (1) Package delivery issues (UPS, FedEx, USPS), (2) Bank alerts ('suspicious activity'), (3) Account verification needed, (4) Prize/reward claims, (5) Government messages (IRS, SSA). Why effective: (1) People trust SMS more than email, (2) Small screens make URL inspection difficult, (3) Mobile users act quickly, (4) SMS filtering less mature than email. Defense: don't click links in unexpected texts, go directly to official websites/apps, verify through official channels, use SMS filtering apps. Package delivery smishing increased dramatically during pandemic online shopping surge."
  },
  {
    id: 6,
    question: "An attacker follows closely behind an employee through a secure door, appearing to struggle with carrying boxes, and gains access to a restricted area without using credentials. What is this called?",
    options: [
      "Phishing - email attack",
      "Tailgating/Piggybacking - following authorized person through secure entrance",
      "Vishing - phone attack",
      "Shoulder surfing - watching screens"
    ],
    correct: 1,
    explanation: "TAILGATING (also called Piggybacking) is physically following an authorized person through a secure entrance. Tailgating techniques: (1) Walk closely behind badged employee, (2) Appear to belong (dress appropriately, carry items), (3) Create sympathy (hands full, struggling with items), (4) Act confident and purposeful, (5) Exploit politeness (people hold doors). Variations: (1) Tailgating - following without interaction, (2) Piggybacking - convincing someone to let you in ('forgot my badge'). Defense: (1) Security awareness training, (2) Access control vestibules (mantraps), (3) Security guards, (4) Turnstiles/barriers, (5) Culture of badge checking, (6) 'No tailgating' policies. Challenge: conflicts with politeness norms - people feel rude challenging others. Organizations must create culture where challenging unknown persons is expected and rewarded."
  },
  {
    id: 7,
    question: "An attacker positions themselves in a coffee shop near a target's office and watches employees enter passwords on their laptops through the window. What technique is this?",
    options: [
      "Vishing",
      "Shoulder surfing - visually observing sensitive information being entered",
      "Smishing",
      "Dumpster diving"
    ],
    correct: 1,
    explanation: "SHOULDER SURFING is observing someone entering sensitive information (passwords, PINs, confidential data). Shoulder surfing methods: (1) Direct observation in public spaces, (2) Using binoculars/cameras from distance, (3) Recording video for later review, (4) Watching ATM PIN entry, (5) Observing screen content in airports, coffee shops. What attackers capture: passwords, PINs, credit card numbers, confidential documents, personal information. High-risk locations: coffee shops, airports, trains, public computers, ATMs, open offices. Defense: (1) Privacy screens on laptops, (2) Position screen away from observers, (3) Use password managers (avoid typing), (4) Be aware of surroundings, (5) Cover PIN entry at ATMs. This scenario: reconnaissance from nearby coffee shop - common for targeted attacks on specific companies. Remote workers in public spaces are particularly vulnerable."
  },
  {
    id: 8,
    question: "An attacker searches through a company's trash bins outside the building and finds documents with employee names, internal procedures, and organizational charts. What technique is this?",
    options: [
      "Phishing",
      "Dumpster diving - searching discarded materials for useful information",
      "Tailgating",
      "Vishing"
    ],
    correct: 1,
    explanation: "DUMPSTER DIVING is searching through trash to find valuable information. Information found in trash: (1) Organization charts - identify targets, (2) Phone directories - direct numbers, (3) Internal memos - procedures, jargon, (4) Printed emails - communication patterns, (5) Financial documents, (6) Old hardware (drives may contain data), (7) Sticky notes with passwords. How attackers use this: (1) Reconnaissance for social engineering, (2) Learn internal terminology to sound legitimate, (3) Identify valuable targets, (4) Find passwords/credentials directly. Defense: (1) Shred sensitive documents (cross-cut shredders), (2) Secure document destruction policies, (3) Locked disposal bins, (4) Employee training on document handling, (5) Wipe/destroy old storage media. Legal status: generally legal if trash is on public property - organizations must protect their own discards. Low-tech but highly effective reconnaissance technique."
  },
  {
    id: 9,
    question: "An attacker calls the help desk pretending to be a new employee who forgot their password, using details gathered from LinkedIn about the company and real employee names. What social engineering principle is being exploited?",
    options: [
      "Scarcity - limited time/availability",
      "Authority and impersonation - pretending to be someone with legitimate access",
      "Consensus - following the crowd",
      "Fear - threatening consequences"
    ],
    correct: 1,
    explanation: "IMPERSONATION exploits trust by pretending to be someone with legitimate reason for access/information. Impersonation targets: (1) Employees - 'new employee' needing help, (2) IT support - 'calling to fix your issue', (3) Executives - urgent requests bypass procedures, (4) Vendors - 'here to service equipment', (5) Contractors - 'working on the project'. Why it works: help desks are trained to help, and helping someone who sounds legitimate feels right. OSINT preparation: LinkedIn provides names, titles, departments, making impersonation convincing. Defense: (1) Verification procedures (callback, manager confirmation), (2) Challenge questions based on private info, (3) Never reset passwords without verification, (4) Awareness training for help desk, (5) Documented procedures for common requests. The help desk is often targeted because they're authorized to grant access and trained to be helpful."
  },
  {
    id: 10,
    question: "A phishing email warns 'Your account will be suspended in 24 hours unless you verify your information immediately!' What social engineering principle does this exploit?",
    options: [
      "Authority - impersonating leadership",
      "Urgency - pressuring quick action before victim can think critically",
      "Likability - building rapport",
      "Consensus - everyone is doing it"
    ],
    correct: 1,
    explanation: "URGENCY pressures victims to act quickly, bypassing critical thinking and verification procedures. Urgency tactics: (1) Countdown timers - '24 hours until suspension', (2) Limited availability - 'only 3 left!', (3) Immediate consequences - 'act now or lose access', (4) Time pressure - 'respond within 1 hour'. Why urgency works: (1) Triggers emotional response over rational thought, (2) Prevents victim from consulting others, (3) Short-circuits normal verification, (4) Fear of consequences drives action. Defense: (1) Recognize urgency as red flag, (2) Slow down - legitimate organizations give reasonable time, (3) Verify through separate channel (not links in message), (4) Consult security team for suspicious requests, (5) Training to recognize manipulation tactics. Rule of thumb: more urgent the message, more carefully it should be verified. Legitimate services rarely demand immediate action under threat."
  },
  {
    id: 11,
    question: "An attacker compromises a website frequently visited by employees of a target company, then waits for employees to visit and get infected. What is this attack called?",
    options: [
      "Spear phishing",
      "Watering hole attack - compromising websites the target population visits",
      "Tailgating",
      "Vishing"
    ],
    correct: 1,
    explanation: "WATERING HOLE attacks compromise websites that target victims are likely to visit, then wait for them to be infected. Attack process: (1) Research target organization, (2) Identify websites employees frequently visit (industry forums, news, professional associations), (3) Compromise one of those sites (inject malicious code), (4) Wait for target employees to visit, (5) Deliver malware through compromised site. Why effective: (1) Victims come to attacker (not suspicious email), (2) Exploits trusted sites, (3) Can target entire organizations, (4) Bypasses email security. Name origin: predators waiting at watering holes for prey. Defense: web filtering, browser isolation, endpoint protection, network segmentation, keeping browsers/plugins patched. Often used by APT groups targeting specific industries - compromise one industry forum to attack multiple companies in that sector."
  },
  {
    id: 12,
    question: "An attacker registers the domain 'arnazon.com' (with 'rn' looking like 'm') to mimic amazon.com for phishing campaigns. What technique is this?",
    options: [
      "DNS hijacking",
      "Typosquatting - registering domains similar to legitimate ones to trick users",
      "Shoulder surfing",
      "Dumpster diving"
    ],
    correct: 1,
    explanation: "TYPOSQUATTING registers domains that look similar to legitimate domains to deceive users. Typosquatting techniques: (1) Character substitution - 'rn' for 'm', '1' for 'l', '0' for 'o', (2) Common typos - 'gogle.com', 'amzon.com', (3) Wrong TLD - 'company.co' vs 'company.com', (4) Homograph attacks - use Unicode characters that look identical, (5) Added/missing characters. Uses: (1) Credential phishing, (2) Malware distribution, (3) Ad revenue from misdirected traffic, (4) Brand damage, (5) Traffic interception. Defense: (1) Register common typos of your domain, (2) User awareness training, (3) Email filtering checking URLs, (4) Browser security features, (5) URL inspection before clicking. This example: 'arnazon' uses 'rn' which looks like 'm' in many fonts - at quick glance appears as 'amazon'. Also called URL hijacking or domain mimicry."
  },
  {
    id: 13,
    question: "An employee receives an email from what appears to be a colleague asking them to review an invoice attachment. The email address shows the colleague's name but close inspection reveals it's from an external domain. What attack is this?",
    options: [
      "Watering hole",
      "Brand/email impersonation - using similar names or spoofed addresses to appear as trusted contact",
      "Tailgating",
      "Dumpster diving"
    ],
    correct: 1,
    explanation: "EMAIL/BRAND IMPERSONATION makes messages appear to come from trusted contacts or organizations. Impersonation techniques: (1) Display name spoofing - shows 'John Smith' but address is attacker@evil.com, (2) Domain spoofing - fake 'From' header, (3) Look-alike domains - company-support.com vs company.com, (4) Compromised accounts - actually from victim's contacts (most dangerous). This scenario: display name shows colleague, but domain is external - easy to miss if only looking at name. Why effective: people trust messages from 'known' senders, may not check actual email address. Defense: (1) Check actual email address not just display name, (2) External email warnings/banners, (3) SPF/DKIM/DMARC (prevents domain spoofing), (4) Awareness training, (5) Verify unexpected attachments through other channels. Invoice-themed phishing is extremely common and effective - people expect to receive invoices and often click without suspicion."
  },
  {
    id: 14,
    question: "An attacker calls the finance department claiming to be the CEO traveling overseas, demanding an immediate wire transfer and saying 'Don't bother verifying, I'm in meetings all day.' What TWO social engineering principles are being exploited?",
    options: [
      "Consensus and likability",
      "Authority and urgency - impersonating leadership while pressuring immediate action",
      "Scarcity and reciprocity",
      "Fear and consensus"
    ],
    correct: 1,
    explanation: "This attack combines AUTHORITY (CEO impersonation) and URGENCY (immediate action, don't verify). Authority principle: (1) CEO has power to demand action, (2) Employees hesitate to question executives, (3) Fear of displeasing leadership, (4) 'Just do what the boss says' mentality. Urgency principle: (1) 'Immediate' transfer needed, (2) 'Don't verify' removes safety checks, (3) Pressure prevents critical thinking. Combined effect: powerful psychological manipulation. This is classic BEC (Business Email Compromise) / CEO fraud - billions lost annually. Defense: (1) Verification procedures REGARDLESS of who's asking, (2) Out-of-band verification (call known number), (3) Training that executives support verification, (4) Dual authorization for large transfers, (5) Culture where questioning unusual requests is acceptable. The 'don't verify' is a huge red flag - legitimate executives would support security procedures."
  },
  {
    id: 15,
    question: "A penetration tester successfully obtained building access by wearing a delivery uniform and carrying packages. This demonstrates which security weakness?",
    options: [
      "Technical vulnerability in systems",
      "Physical security susceptibility to social engineering and pretexting",
      "Network misconfiguration",
      "Software bug"
    ],
    correct: 1,
    explanation: "PRETEXTING creates a fabricated scenario (pretext) to manipulate targets. This demonstrates physical security's human element vulnerability. Pretext elements: (1) Believable story - delivery person, technician, new employee, (2) Appropriate appearance - uniform, tools, badge, (3) Confident behavior - act like you belong, (4) Props - packages, clipboard, equipment. Common pretexts: (1) Delivery person, (2) IT technician, (3) Fire inspector, (4) Maintenance worker, (5) Vendor representative. Why it works: (1) Delivery people are expected, (2) Nobody questions routine activities, (3) Politeness - don't want to challenge legitimate worker, (4) Visual cues (uniform) override verification. Defense: (1) Verify all visitors, (2) Escort requirements, (3) Badge all personnel (including vendors), (4) Reception/security checkpoint, (5) Awareness training, (6) Question anyone without badge. Physical penetration testing reveals these human vulnerabilities that technical testing misses."
  }
];