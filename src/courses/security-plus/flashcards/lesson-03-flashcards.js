// Lesson 3: Security Concepts and Frameworks
// Security+ (SY0-701) - Domain 1.0: General Security Concepts

export const lesson3Flashcards = [
  {
    id: 1,
    front: "What is Zero Trust architecture?",
    back: "A security model based on 'never trust, always verify.' No user or device is trusted by default, even inside the network. Every access request must be authenticated and authorized."
  },
  {
    id: 2,
    front: "What is the core principle of Zero Trust?",
    back: "Never trust, always verify. Assumes breach has already occurred and treats all traffic as potentially hostile, regardless of source."
  },
  {
    id: 3,
    front: "What is the Control Plane in Zero Trust?",
    back: "The decision-making component that determines access policies. Contains the Policy Decision Point (PDP) which evaluates access requests against policies."
  },
  {
    id: 4,
    front: "What is the Data Plane in Zero Trust?",
    back: "The component that enforces access decisions. Contains the Policy Enforcement Point (PEP) which allows or blocks access based on PDP decisions."
  },
  {
    id: 5,
    front: "What is a Policy Enforcement Point (PEP)?",
    back: "The Zero Trust component that enforces access decisions at the point of access. Acts as a gatekeeper, allowing or denying requests based on policy."
  },
  {
    id: 6,
    front: "What is a Policy Decision Point (PDP)?",
    back: "The Zero Trust component that evaluates access requests and makes allow/deny decisions based on identity, device health, context, and policies."
  },
  {
    id: 7,
    front: "What are Implicit Trust Zones?",
    back: "Traditional network areas where trust is assumed (like internal networks). Zero Trust aims to eliminate these by requiring verification everywhere."
  },
  {
    id: 8,
    front: "What is Defense in Depth?",
    back: "A layered security strategy using multiple controls at different levels. If one layer fails, others still provide protection. Also called layered security."
  },
  {
    id: 9,
    front: "What is Separation of Duties?",
    back: "Dividing critical tasks among multiple people so no single person can complete a sensitive action alone. Prevents fraud and reduces insider threat risk."
  },
  {
    id: 10,
    front: "What is the Principle of Least Privilege?",
    back: "Users should only have the minimum permissions needed to perform their job. Limits damage from compromised accounts or insider threats."
  },
  {
    id: 11,
    front: "What is Need to Know?",
    back: "Access to information is restricted to those who require it for their job duties. Even with clearance, you only access what's necessary for your role."
  },
  {
    id: 12,
    front: "What is Due Diligence?",
    back: "Researching and understanding risks before making decisions. The investigation phase - gathering information to make informed choices."
  },
  {
    id: 13,
    front: "What is Due Care?",
    back: "Taking reasonable steps to protect assets based on what you learned from due diligence. The action phase - implementing appropriate safeguards."
  },
  {
    id: 14,
    front: "What's the difference between Due Diligence and Due Care?",
    back: "Due diligence = research and understand risks (investigation). Due care = act on that knowledge with reasonable protection (implementation)."
  },
  {
    id: 15,
    front: "What is a Gap Analysis?",
    back: "Comparing current security state to desired state or requirements. Identifies what's missing and helps prioritize remediation efforts."
  },
  {
    id: 16,
    front: "What are Bollards?",
    back: "Short, sturdy posts installed to prevent vehicle access. Protect buildings from ram attacks while allowing pedestrian access."
  },
  {
    id: 17,
    front: "What is an Access Control Vestibule (Mantrap)?",
    back: "A small room with two doors where only one can open at a time. Prevents tailgating by trapping unauthorized people between doors."
  },
  {
    id: 18,
    front: "What is Tailgating/Piggybacking?",
    back: "Following an authorized person through a secure door without authentication. Access control vestibules and security awareness training help prevent this."
  },
  {
    id: 19,
    front: "What physical security controls protect building perimeters?",
    back: "Fencing, gates, bollards, lighting, video surveillance, and security guards. Create layers of physical defense in depth."
  },
  {
    id: 20,
    front: "What is a Honeypot?",
    back: "A decoy system designed to attract attackers. Appears vulnerable to lure attackers away from real systems and gather intelligence on attack methods."
  },
  {
    id: 21,
    front: "What is a Honeynet?",
    back: "A network of honeypots simulating an entire network environment. Provides more realistic deception and better intelligence gathering than a single honeypot."
  },
  {
    id: 22,
    front: "What is a Honeyfile?",
    back: "A decoy file that appears valuable (like 'passwords.xlsx'). Alerts trigger when accessed, indicating unauthorized access or insider threat."
  },
  {
    id: 23,
    front: "What is a Honeytoken?",
    back: "Fake credentials or data planted in systems. When used, alerts security that a breach has occurred. Examples: fake API keys, dummy accounts."
  },
  {
    id: 24,
    front: "What is Fake Telemetry?",
    back: "False data fed to attackers to mislead them. Part of deception technology that wastes attacker time and provides early warning of breaches."
  },
  {
    id: 25,
    front: "What is the purpose of deception technologies?",
    back: "Detect attackers, waste their time, gather intelligence on TTPs, and provide early warning. Includes honeypots, honeynets, honeyfiles, and honeytokens."
  },
  {
    id: 26,
    front: "How does Defense in Depth apply to network security?",
    back: "Multiple layers: firewall at perimeter, IDS/IPS, network segmentation, host firewalls, endpoint protection, and application security. Each layer adds protection."
  },
  {
    id: 27,
    front: "Why does Zero Trust eliminate implicit trust zones?",
    back: "Traditional networks trust internal traffic, but attackers who breach the perimeter move freely. Zero Trust verifies every request regardless of network location."
  },
  {
    id: 28,
    front: "A CFO needing two signatures for large transfers demonstrates what principle?",
    back: "Separation of Duties. No single person can complete the critical financial transaction alone, reducing fraud risk."
  },
  {
    id: 29,
    front: "An admin account that can only access production servers they manage demonstrates what?",
    back: "Least Privilege. The admin has only the permissions needed for their specific responsibilities, nothing more."
  },
  {
    id: 30,
    front: "What factors does Zero Trust consider when making access decisions?",
    back: "User identity, device health/compliance, location, time, resource sensitivity, and behavioral patterns. Context-aware decisions beyond just username/password."
  }
];