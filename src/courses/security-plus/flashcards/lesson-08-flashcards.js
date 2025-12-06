// Lesson 8: Social Engineering Attacks
// Security+ (SY0-701) - Domain 2.0: Threats, Vulnerabilities, and Mitigations

export const lesson8Flashcards = [
  {
    id: 1,
    front: "What is Social Engineering?",
    back: "Manipulating people into revealing information or performing actions that compromise security. Exploits human psychology rather than technical vulnerabilities."
  },
  {
    id: 2,
    front: "What is the Authority principle in social engineering?",
    back: "People comply with requests from authority figures. Attackers impersonate executives, IT staff, law enforcement, or other authority to gain compliance."
  },
  {
    id: 3,
    front: "What is the Intimidation principle?",
    back: "Using fear or threats to pressure victims into compliance. 'Your account will be closed' or 'You'll be fired if you don't help me.'"
  },
  {
    id: 4,
    front: "What is the Consensus/Social Proof principle?",
    back: "People follow what others do. 'Everyone in your department has already updated their password' makes victim more likely to comply."
  },
  {
    id: 5,
    front: "What is the Scarcity principle?",
    back: "Limited availability creates urgency. 'Only 2 spots left' or 'Offer expires in 1 hour' pushes victims to act without thinking."
  },
  {
    id: 6,
    front: "What is the Familiarity/Liking principle?",
    back: "People help those they like or feel connected to. Attackers build rapport, find common interests, or impersonate friends/colleagues."
  },
  {
    id: 7,
    front: "What is the Trust principle?",
    back: "Exploiting established relationships or creating false trust. Attackers may research targets to appear trustworthy or claim mutual connections."
  },
  {
    id: 8,
    front: "What is the Urgency principle?",
    back: "Forcing quick decisions without time to think. 'Act now or lose access' prevents victims from verifying requests or consulting others."
  },
  {
    id: 9,
    front: "What is Phishing?",
    back: "Fraudulent emails or messages designed to steal credentials or deliver malware. Appears to come from trusted sources. Most common attack vector."
  },
  {
    id: 10,
    front: "What is Spear Phishing?",
    back: "Targeted phishing aimed at specific individuals or organizations. Uses personalized information to appear legitimate. More convincing than generic phishing."
  },
  {
    id: 11,
    front: "What is Whaling?",
    back: "Spear phishing targeting high-level executives (the 'big fish'). Often involves CEO fraud, wire transfer requests, or sensitive data access."
  },
  {
    id: 12,
    front: "What is Vishing?",
    back: "Voice phishing using phone calls. Attacker calls victim pretending to be bank, IT support, IRS, etc. May spoof caller ID to appear legitimate."
  },
  {
    id: 13,
    front: "What is Smishing?",
    back: "SMS/text message phishing. Malicious links or requests sent via text. Often claims to be from banks, delivery services, or tech companies."
  },
  {
    id: 14,
    front: "What is BEC (Business Email Compromise)?",
    back: "Attacker impersonates or compromises executive email to request wire transfers or sensitive data. Often targets finance department. Very costly attack."
  },
  {
    id: 15,
    front: "What is Tailgating (Piggybacking)?",
    back: "Following an authorized person through a secure door without authenticating. Physical social engineering exploiting politeness. 'Can you hold the door?'"
  },
  {
    id: 16,
    front: "What is Shoulder Surfing?",
    back: "Observing someone's screen, keyboard, or documents to steal information. Can happen in offices, public spaces, or ATMs. Low-tech but effective."
  },
  {
    id: 17,
    front: "What is Dumpster Diving?",
    back: "Searching through trash for sensitive information. Finding discarded documents, old hardware, or notes with passwords. Why shredding matters."
  },
  {
    id: 18,
    front: "What is Impersonation?",
    back: "Pretending to be someone else to gain access or information. May impersonate IT support, vendors, delivery personnel, or new employees."
  },
  {
    id: 19,
    front: "What is Pretexting?",
    back: "Creating a fabricated scenario (pretext) to engage victim. 'I'm from IT doing a security audit' or 'I'm a new employee who lost my badge.'"
  },
  {
    id: 20,
    front: "What is Brand Impersonation?",
    back: "Creating fake websites, emails, or communications that mimic legitimate brands. Uses similar logos, colors, and language to deceive victims."
  },
  {
    id: 21,
    front: "What is Typosquatting?",
    back: "Registering domains similar to legitimate ones with typos (gooogle.com, amazom.com). Catches users who mistype URLs. Also called URL hijacking."
  },
  {
    id: 22,
    front: "What is a Watering Hole Attack?",
    back: "Compromising websites frequently visited by target group. Instead of attacking victims directly, infect sites they trust and visit regularly."
  },
  {
    id: 23,
    front: "What is Pharming?",
    back: "Redirecting users to fake websites by corrupting DNS or hosts file. Victim types correct URL but ends up at malicious site. Harder to detect than phishing."
  },
  {
    id: 24,
    front: "What are red flags in phishing emails?",
    back: "Generic greetings, urgency, spelling errors, mismatched URLs, suspicious attachments, requests for credentials, unexpected sender, too good to be true."
  },
  {
    id: 25,
    front: "How can you verify a suspicious email request?",
    back: "Contact sender through known-good channel (not reply), verify via phone using number from official source, check with supervisor, report to security team."
  },
  {
    id: 26,
    front: "What is the best defense against social engineering?",
    back: "Security awareness training. Technical controls help but humans are the target. Regular training, phishing simulations, and clear reporting procedures."
  },
  {
    id: 27,
    front: "How do you prevent tailgating?",
    back: "Security awareness, access control vestibules (mantraps), badge-only access, security guards, culture of challenging unknown individuals."
  },
  {
    id: 28,
    front: "Why does Spear Phishing have higher success rates?",
    back: "Personalized with target's name, job, colleagues, recent activities. Appears more legitimate. Takes more effort but more effective than mass phishing."
  },
  {
    id: 29,
    front: "An email from your 'CEO' urgently requesting wire transfer - what type of attack?",
    back: "BEC (Business Email Compromise) or Whaling. Uses authority, urgency principles. Always verify through separate channel before transferring funds."
  },
  {
    id: 30,
    front: "What should employees do when they suspect social engineering?",
    back: "Stop and think, don't comply with urgent requests, verify through official channels, report to security team, document the attempt. When in doubt, check it out."
  }
];