export const lesson02Quiz = [
  {
    id: 1,
    question: "A government contractor discovers their systems were compromised by attackers who maintained persistent access for 18 months, exfiltrating classified defense documents. The attack showed sophisticated custom malware and zero-day exploits. What type of threat actor is MOST likely responsible?",
    options: [
      "Unskilled attacker (script kiddie) seeking notoriety",
      "Nation-state actor conducting espionage through an Advanced Persistent Threat (APT)",
      "Hacktivist group protesting defense spending",
      "Insider threat from a disgruntled employee"
    ],
    correct: 1,
    explanation: "Nation-state actors are government-sponsored threat actors with characteristics matching this scenario: (1) Advanced Persistent Threat (APT) - long-term, stealthy access (18 months), (2) Sophisticated capabilities - custom malware, zero-day exploits, (3) Espionage motivation - targeting classified defense documents, (4) Significant resources - development of custom tools requires funding and expertise. Nation-state indicators: targeting government/defense/critical infrastructure, extended dwell time, advanced tradecraft, strategic intelligence goals. Examples: APT28 (Russia), APT41 (China), Lazarus Group (North Korea). These actors have essentially unlimited resources, patience, and technical capability. Script kiddies lack sophistication; hacktivists typically want publicity; insiders rarely have this level of technical capability."
  },
  {
    id: 2,
    question: "An attacker defaces a company's website with political messages after the company announces a controversial environmental policy. What type of threat actor and motivation does this indicate?",
    options: [
      "Organized crime - financial gain",
      "Nation-state - espionage",
      "Hacktivist - philosophical/political beliefs",
      "Insider threat - revenge"
    ],
    correct: 2,
    explanation: "Hacktivists are threat actors motivated by political, social, or ideological causes. Key characteristics: (1) Website defacement with political messages (visibility is the goal), (2) Targeting based on company policies/actions they oppose, (3) Goal is public attention and embarrassment, not financial gain. Hacktivist tactics: website defacement, DDoS attacks, data leaks to embarrass targets, social media campaigns. Famous examples: Anonymous, LulzSec. Hacktivists typically: announce attacks publicly, claim credit, justify actions based on beliefs, target organizations whose actions conflict with their ideology. Unlike nation-states (espionage) or organized crime (money), hacktivists want their message heard and opponents publicly shamed."
  },
  {
    id: 3,
    question: "A help desk employee with legitimate system access sells customer database exports to competitors. How should this threat actor be classified?",
    options: [
      "External threat actor - organized crime",
      "Insider threat - intentional/malicious insider with authorized access",
      "Nation-state actor - industrial espionage",
      "Unskilled attacker - opportunistic"
    ],
    correct: 1,
    explanation: "This is a MALICIOUS INSIDER threat - an employee with legitimate access who intentionally misuses it for personal gain. Insider threat categories: (1) Malicious/Intentional - deliberately causes harm (this scenario), (2) Negligent - careless actions cause unintentional harm, (3) Compromised - credentials stolen, account used by external attacker. Insider advantages: already has access, knows systems and processes, trusted by organization, can bypass perimeter security. This employee: had authorized access (help desk), used it for unauthorized purpose (selling data), motivated by financial gain. Insider threat mitigation: least privilege access, monitoring user behavior, separation of duties, background checks, exit interviews. Insiders are particularly dangerous because they don't need to bypass security - they're already inside."
  },
  {
    id: 4,
    question: "A ransomware attack encrypts a hospital's systems and demands $2 million in Bitcoin. The attackers operate a 'ransomware-as-a-service' platform and have attacked hundreds of organizations worldwide. What threat actor type is this?",
    options: [
      "Nation-state actor",
      "Hacktivist group",
      "Organized crime - financially motivated criminal enterprise",
      "Unskilled attacker"
    ],
    correct: 2,
    explanation: "Organized crime groups are financially motivated threat actors operating ransomware-as-a-service (RaaS) platforms. Characteristics: (1) Financial motivation (Bitcoin ransom demand), (2) Professional operation (RaaS platform with affiliates), (3) Large-scale attacks (hundreds of victims), (4) Business-like approach (customer service for victims, negotiation). Modern cybercrime is highly organized: development teams create malware, affiliates deploy it, money launderers process payments. Examples: REvil, Conti, LockBit. They target organizations likely to pay (healthcare, critical infrastructure) and operate like businesses with profit goals. Unlike nation-states (espionage focus) or hacktivists (ideology), organized crime is purely about money. They don't care WHO they attack - only that victims can pay."
  },
  {
    id: 5,
    question: "An employee installs unauthorized cloud storage software to make their work easier, not realizing it bypasses company security controls. What is this an example of?",
    options: [
      "Malicious insider threat",
      "Shadow IT - unauthorized systems/services creating unintentional risk",
      "Organized crime infiltration",
      "Social engineering attack"
    ],
    correct: 1,
    explanation: "Shadow IT refers to unauthorized technology, systems, or services used within an organization without IT department approval or oversight. Characteristics: (1) Good intentions - employee trying to be productive, (2) Bypasses security controls - data leaving through unapproved channels, (3) Creates unknown risks - IT can't secure what they don't know exists, (4) Common examples: personal cloud storage, unauthorized SaaS apps, personal devices. Risks of shadow IT: data leakage, compliance violations, no security oversight, no backup/recovery, license violations. Not malicious - the employee isn't trying to cause harm, they just want convenience. Mitigation: provide approved alternatives, educate users on risks, implement CASB (Cloud Access Security Broker) to detect shadow IT, create clear policies. Shadow IT is a governance and visibility problem, not an attack."
  },
  {
    id: 6,
    question: "A teenager uses freely available hacking tools downloaded from the internet to deface websites for fun, without understanding how the exploits actually work. What type of threat actor is this?",
    options: [
      "Nation-state actor",
      "Organized crime member",
      "Unskilled attacker (script kiddie) - uses tools without understanding them",
      "Advanced persistent threat"
    ],
    correct: 2,
    explanation: "Unskilled attackers (commonly called 'script kiddies') use pre-built tools and scripts without understanding the underlying technology. Characteristics: (1) Uses existing tools/scripts (didn't create their own), (2) Limited technical understanding (can't modify or create exploits), (3) Often motivated by curiosity, bragging rights, or vandalism, (4) Lower sophistication but still dangerous. Why they matter: (1) Automated tools can still cause damage, (2) Many successful attacks don't require skill (tools do the work), (3) Can accidentally cause more damage than intended, (4) Massive numbers increase statistical likelihood of success. Defenses that stop sophisticated attackers also stop script kiddies - basic security hygiene (patching, strong passwords, firewalls) prevents most automated attacks. Despite the dismissive name, don't underestimate the damage they can cause."
  },
  {
    id: 7,
    question: "An organization's competitor hires hackers to steal proprietary product designs before a major product launch. What is the PRIMARY motivation for this attack?",
    options: [
      "Service disruption",
      "Espionage - stealing trade secrets for competitive advantage",
      "Philosophical beliefs",
      "Revenge"
    ],
    correct: 1,
    explanation: "ESPIONAGE (specifically corporate/industrial espionage) involves stealing confidential information for competitive advantage. Types: (1) Corporate espionage - competitors stealing trade secrets, (2) Nation-state espionage - governments stealing technology or intelligence, (3) Economic espionage - state-sponsored theft benefiting domestic companies. Targets: product designs, research data, customer lists, pricing strategies, merger plans, proprietary algorithms. This scenario: competitor-hired hackers stealing product designs = corporate espionage for competitive advantage. Unlike data theft for sale (financial motivation), espionage specifically targets valuable intellectual property to benefit a rival. Protections: DLP, encryption, access controls, employee vetting, secure communication channels, physical security for sensitive areas."
  },
  {
    id: 8,
    question: "A former employee, terminated for performance issues, uses credentials that were never revoked to delete critical company databases. What threat actor attributes describe this situation?",
    options: [
      "External threat, high sophistication, nation-state resources",
      "Internal threat, low sophistication, revenge motivation",
      "External threat, medium sophistication, financial motivation",
      "Internal threat, high sophistication, espionage motivation"
    ],
    correct: 1,
    explanation: "Analysis of threat actor attributes: (1) INTERNAL vs External - former employee with inside knowledge and (improperly) retained credentials = internal threat (or recently internal), (2) Sophistication - used existing credentials, didn't need to hack in = LOW sophistication, (3) Resources - individual acting alone = limited resources, (4) Motivation - terminated employee causing damage = REVENGE. This scenario highlights: importance of prompt access revocation during offboarding, monitoring for credential misuse, regular access reviews. Revenge-motivated insiders are particularly dangerous because they know systems, may have retained access, and are emotionally motivated to cause maximum damage. Prevention: immediate access revocation on termination, escorted exits, monitoring accounts of departing employees, backup and recovery capabilities."
  },
  {
    id: 9,
    question: "Attackers compromise a popular software vendor's update mechanism to distribute malware to thousands of that vendor's customers. What attack vector is this?",
    options: [
      "Phishing campaign",
      "Supply chain attack - compromising trusted third-party to reach targets",
      "Direct network intrusion",
      "Physical access attack"
    ],
    correct: 1,
    explanation: "SUPPLY CHAIN attacks compromise a trusted vendor, supplier, or partner to reach their customers. Famous examples: SolarWinds (malicious update to Orion software), Kaseya (RMM software compromised), CCleaner (legitimate software bundled with malware). Why effective: (1) Trust relationship - customers trust vendor updates, (2) Scale - one compromise affects thousands of organizations, (3) Bypass security - updates come from trusted source, may bypass security controls, (4) Difficult to detect - legitimate software with hidden malicious code. Supply chain targets: software vendors, hardware manufacturers, managed service providers, code repositories. Mitigation: vendor security assessments, software verification (signatures, hashes), network segmentation limiting vendor access, monitoring for anomalous behavior post-update. Supply chain attacks are increasing because they provide massive scale from single compromise."
  },
  {
    id: 10,
    question: "An attacker leaves infected USB drives in a company's parking lot, hoping employees will plug them into corporate computers. What attack vector does this represent?",
    options: [
      "Email phishing",
      "Removable media - physical media used to deliver malware",
      "Social media attack",
      "Cloud service compromise"
    ],
    correct: 1,
    explanation: "REMOVABLE MEDIA attacks use physical storage devices (USB drives, CDs, external drives) to bypass network security and deliver malware directly to internal systems. This specific technique is called 'USB drop' or 'baiting'. Why effective: (1) Bypasses perimeter security (physically carried inside), (2) Exploits human curiosity ('what's on this?'), (3) AutoRun/AutoPlay may execute malware automatically, (4) Often targets air-gapped or high-security networks. Famous example: Stuxnet was delivered via USB to air-gapped Iranian nuclear facilities. Mitigations: disable AutoRun/AutoPlay, USB port restrictions/blocking, employee awareness training, endpoint protection scanning removable media, data loss prevention policies. Social engineering component: attackers may label drives enticingly ('Confidential Salary Info', 'Employee Photos') to increase likelihood of insertion."
  },
  {
    id: 11,
    question: "A threat intelligence report describes an actor with 'limited resources, low sophistication, and opportunistic targeting'. Which threat actor type BEST fits this profile?",
    options: [
      "Nation-state actor",
      "Organized crime syndicate",
      "Unskilled attacker or hacktivist group",
      "Advanced persistent threat"
    ],
    correct: 2,
    explanation: "Threat actor attributes help categorize and prioritize threats: LIMITED RESOURCES + LOW SOPHISTICATION + OPPORTUNISTIC = Unskilled attacker or smaller hacktivist group. Attribute breakdown: (1) Resources - nation-states have extensive resources; unskilled attackers work alone with minimal investment, (2) Sophistication - APTs use custom tools and advanced techniques; unskilled attackers use readily available tools, (3) Targeting - APTs specifically target high-value organizations; opportunistic attackers scan for any vulnerable target. Understanding actor profiles helps: prioritize defenses, allocate security budget, design appropriate detection strategies. An organization facing primarily opportunistic threats needs good basic hygiene; one facing nation-states needs advanced detection and response capabilities. Match your security investment to your realistic threat profile."
  },
  {
    id: 12,
    question: "A disgruntled IT administrator plants a logic bomb that will delete all company data 30 days after their termination. What type of threat and motivation does this represent?",
    options: [
      "External threat motivated by financial gain",
      "Insider threat motivated by revenge - malicious action with delayed trigger",
      "Nation-state threat motivated by espionage",
      "Hacktivist threat motivated by ideology"
    ],
    correct: 1,
    explanation: "This is a MALICIOUS INSIDER threat motivated by REVENGE. Logic bomb characteristics: (1) Malicious code with delayed or conditional trigger, (2) Often planted by insiders with system access, (3) Designed to cause damage after the perpetrator is gone. Insider + Revenge indicators: IT admin (privileged access), disgruntled (motivation), 30-day delay (plausible deniability, already gone when triggered), data deletion (destructive, not theft). This is why privileged user monitoring is critical: (1) Monitor admin activities, (2) Require separation of duties for critical changes, (3) Review changes before termination, (4) Promptly revoke access on termination, (5) Conduct forensic review of admin activities during offboarding. Insiders with admin privileges are among the most dangerous threats due to their access and knowledge."
  },
  {
    id: 13,
    question: "Attackers create fake LinkedIn profiles posing as recruiters, then send connection requests to employees at a target company, eventually sending malware-laden 'job descriptions'. What attack vector is this?",
    options: [
      "Physical security breach",
      "Social media attack vector - using social platforms to target employees",
      "Supply chain compromise",
      "Removable media attack"
    ],
    correct: 1,
    explanation: "SOCIAL MEDIA as an attack vector uses platforms like LinkedIn, Facebook, and Twitter for reconnaissance and social engineering. Technique in scenario: (1) Create convincing fake profile (pretexting), (2) Connect with targets to build trust, (3) Leverage professional context (recruiters are expected to send documents), (4) Deliver malware through trusted relationship. Social media attack methods: reconnaissance (gathering employee info, org charts), spear phishing (personalized attacks using gathered info), watering hole identification (what sites do employees visit), brand impersonation, credential harvesting. LinkedIn is particularly valuable for attackers: job titles reveal access levels, connections reveal organizational structure, professional context makes outreach seem legitimate. Defense: employee awareness training, verification procedures for external contacts, restricting personal info shared publicly."
  },
  {
    id: 14,
    question: "An organization discovers attackers have been using a compromised cloud service account to access corporate data. The initial compromise came from credentials stolen via phishing. What attack vector enabled the breach?",
    options: [
      "Physical access to data center",
      "Cloud services - legitimate cloud platforms abused via stolen credentials",
      "Removable media",
      "Supply chain compromise"
    ],
    correct: 1,
    explanation: "CLOUD SERVICES as an attack vector involves abusing legitimate cloud platforms and services to access or exfiltrate data. Attack chain: phishing → credential theft → cloud service access → data breach. Why cloud is attractive attack vector: (1) Accessible from anywhere (no need to breach network perimeter), (2) May lack same security controls as on-premises, (3) Users often reuse passwords across services, (4) Single credentials may access multiple cloud services. Cloud attack methods: credential stuffing, phishing for cloud credentials, misconfigured cloud storage (public S3 buckets), API abuse, service account compromise. Mitigations: MFA on all cloud services, cloud access security broker (CASB), monitoring for anomalous cloud activity, proper cloud configuration management, separating cloud credentials from on-premises. Modern attacks increasingly target cloud 'front door' rather than network perimeter."
  },
  {
    id: 15,
    question: "A threat actor group consistently targets financial institutions, uses sophisticated custom malware, and their attacks seem coordinated with specific geopolitical events involving their suspected nation of origin. What threat actor profile fits this description?",
    options: [
      "Opportunistic cybercriminal",
      "Nation-state actor or state-sponsored group",
      "Hacktivist collective",
      "Unskilled attacker using commodity tools"
    ],
    correct: 1,
    explanation: "Nation-state actor indicators in this scenario: (1) Sophisticated custom malware - requires significant R&D resources, (2) Consistent sector targeting (financial institutions) - strategic objective, (3) Coordination with geopolitical events - suggests state direction/interest, (4) Long-term, persistent operations - matches APT pattern. Nation-state characteristics: government backing, substantial resources, strategic goals (espionage, disruption, influence), patience (long campaigns), advanced capabilities (zero-days, custom tools), targets aligned with national interests. Examples of nation-state targeting: Russia (elections, critical infrastructure), China (intellectual property, defense), North Korea (financial theft to fund regime), Iran (regional adversaries, critical infrastructure). Attribution is difficult but these patterns strongly suggest state involvement. Defense requires threat intelligence, advanced detection, and potentially government coordination."
  }
];