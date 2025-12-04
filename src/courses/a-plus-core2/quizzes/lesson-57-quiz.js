export const lesson57Quiz = [
  {
    id: 1,
    question: "A company purchases one copy of Microsoft Office and installs it on 50 employee computers. What type of license violation is this?",
    options: [
      "This is acceptable - one license covers unlimited installations",
      "Software piracy through license violation - each installation typically requires a separate license",
      "This is the correct way to save money",
      "Software licenses don't matter"
    ],
    correct: 1,
    explanation: "Most commercial software licenses are per-user or per-device - one license = one installation (unless volume licensing). Installing on multiple computers with single license violates EULA (End User License Agreement) and constitutes software piracy. Consequences: legal action from vendor, fines (can be massive), loss of business reputation, BSA audits. Proper approach: purchase volume licensing (Office 365, Microsoft 365, enterprise agreements) for multiple users. License compliance is serious - vendors actively enforce. Ignorance isn't a defense. Always read licensing terms and purchase appropriate number of licenses."
  },
  {
    id: 2,
    question: "A user downloads open-source software (licensed under GPL). What does this license typically allow?",
    options: [
      "Nothing - open source means 'look but don't touch'",
      "Free use, modification, and distribution; source code must remain available if redistributing modifications",
      "Commercial use only",
      "Military applications only"
    ],
    correct: 1,
    explanation: "Open-source licenses (GPL, MIT, Apache, BSD) generally permit: free use (personal and commercial), viewing and modifying source code, redistribution. GPL specifically requires: derivative works remain open source, source code provided with distributions, same license applied to modifications. This ensures software stays free/open. Open source isn't public domain - licenses have terms. Different open-source licenses have different requirements (MIT more permissive than GPL). Always read license terms. Open source ≠ no license. Respect open-source license terms even though software is free."
  },
  {
    id: 3,
    question: "A small business uses personal/home editions of software for commercial purposes. The license explicitly states 'Personal and non-commercial use only.' Is this permitted?",
    options: [
      "Yes - home editions work the same as business editions",
      "No - using personal licenses for commercial purposes violates the EULA",
      "Only on Tuesdays",
      "License terms don't apply to small businesses"
    ],
    correct: 1,
    explanation: "Personal/home licenses explicitly prohibit commercial use. Violating this: breaches EULA, opens company to legal action, invalidates support/warranties, creates audit risk. Vendors offer different editions because business use requires: support, compliance features, additional liability. Home edition may work technically but violates legal agreement. Business should purchase: commercial licenses, business editions, volume licensing. 'Small business' doesn't exempt from licensing requirements. Proper licensing protects business legally. Audit discoveries can require purchasing retroactive licenses plus penalties. Always use appropriately licensed software for business."
  },
  {
    id: 4,
    question: "What is the purpose of an EULA (End User License Agreement)?",
    options: [
      "To waste users' time with unreadable text",
      "To define legal terms under which software can be used, restrictions, and vendor's liability limits",
      "EULAs have no legal purpose",
      "To prevent anyone from using software"
    ],
    correct: 1,
    explanation: "EULA defines: permitted uses, number of installations allowed, commercial vs personal restrictions, prohibited activities (reverse engineering, redistribution), warranty disclaimers, liability limitations, termination conditions. EULAs are legally binding contracts - clicking 'I Agree' creates legal obligations. They protect vendors from misuse and liability. Users often skip reading (problematic - you're agreeing to terms). EULAs aren't meant to prevent use - they establish legal framework. Key sections: scope of license, restrictions, termination, warranties. While lengthy, EULAs serve important legal purpose. Violating EULA can result in license termination and legal action."
  },
  {
    id: 5,
    question: "A company subscribes to Microsoft 365 for email and productivity apps. What type of licensing model is this?",
    options: [
      "Perpetual license (one-time purchase, use forever)",
      "Subscription license (recurring payment, access as long as subscription active)",
      "Shareware (try before you buy)",
      "Open source"
    ],
    correct: 1,
    explanation: "Subscription licensing: recurring payments (monthly/annual), access while subscribed, includes updates/support, terminates when subscription ends. Examples: Microsoft 365, Adobe Creative Cloud, SaaS applications. Benefits: lower upfront cost, always current versions, predictable budgeting. Drawbacks: perpetual cost, no access if payment stops. Perpetual licenses: one-time purchase, use indefinitely (but often no updates after certain period). Shareware: trial versions. Open source: free with source code. Modern trend favors subscription (vendors prefer predictable revenue; users get continuous updates). Understand model to budget appropriately."
  },
  {
    id: 6,
    question: "An employee leaves a company and takes their laptop containing licensed software. The company wants to transfer those licenses to a replacement employee's computer. What must they verify?",
    options: [
      "Nothing - just install on new computer",
      "Check if license allows transfer and properly deactivate/uninstall from old device before activating on new one",
      "Keep software on both computers",
      "Licenses cannot be transferred ever"
    ],
    correct: 1,
    explanation: "License transfer requirements: verify EULA permits transfer (most do with restrictions), deactivate license on old device (important for activation-limited software), uninstall from old computer, install and activate on new device, document transfer, some licenses require vendor notification. Keeping active on both devices violates single-user licenses. Many licenses ARE transferable but require proper deactivation. Some licenses (OEM Windows) are tied to original hardware and non-transferable. Volume licenses often have reassignment rights. Always check specific license terms. Proper deactivation prevents being locked out when activation limits reached."
  },
  {
    id: 7,
    question: "A technician finds software on a computer without documentation, license keys, or proof of purchase. What should they assume?",
    options: [
      "The software is definitely legitimate",
      "The software may be pirated or improperly licensed - verify legitimacy or replace with properly licensed version",
      "Ignore it completely",
      "Install it on more computers"
    ],
    correct: 1,
    explanation: "Undocumented software is a red flag: may be pirated, improperly licensed, or use cracked activation. Actions: check for valid license/activation, search for proof of purchase, contact vendor to verify license status, consider replacement with properly licensed software, document findings. Don't assume legitimacy without proof. Don't ignore (creates liability). Don't propagate potentially pirated software. Unlicensed software risks: legal liability, malware (cracks often contain malware), no support/updates, audit penalties. Businesses should maintain: license documentation, proof of purchase, activation keys, software inventory. If legitimacy questionable, err on side of purchasing new license."
  },
  {
    id: 8,
    question: "A software vendor's license states 'This license is non-transferable.' What does this mean?",
    options: [
      "The license can be given or sold to another person/organization freely",
      "The license cannot be transferred to another user or organization without vendor permission",
      "The software cannot be moved to a different computer",
      "Non-transferable licenses are illegal"
    ],
    correct: 1,
    explanation: "Non-transferable licenses: cannot be sold, given, or transferred to another person/entity without vendor approval, tied to original purchaser, may terminate if attempted transfer, protects vendor revenue and prevents license resale market. This doesn't prevent moving software between YOUR computers (depends on other license terms). Transferable licenses allow: resale, gifting, business sales including software. Some vendors allow transfer with: fee, approval process, re-registration. Non-transferable is legal and common. OEM software (bundled with hardware) typically non-transferable. Retail licenses often transferable. Check specific license terms when planning transfers."
  },
  {
    id: 9,
    question: "A company purchases software with a 'concurrent user' license for 10 users. They have 30 employees. What does this mean?",
    options: [
      "All 30 employees can use the software simultaneously",
      "Maximum 10 users can access the software at the same time; more than 10 employees can have it installed",
      "Only 10 total people can ever use it",
      "Each employee needs their own license"
    ],
    correct: 1,
    explanation: "Concurrent user licensing: licenses control simultaneous users (not total installations), license server tracks active users, when user logs out, license becomes available, allows more installations than licenses (sharing). Example: 10 concurrent licenses support 30 employees if only 10 use software at once. Cost-effective when: not all users need simultaneous access, usage is staggered, software is occasionally used. Different from per-seat (each installation requires license). License server enforces limits - 11th user gets 'no licenses available' message. Monitor usage to ensure adequate licenses. Concurrent licensing reduces costs for shared-use software."
  },
  {
    id: 10,
    question: "A technician discovers pirated software on a company computer during maintenance. What is their professional responsibility?",
    options: [
      "Ignore it - not their problem",
      "Inform management/compliance department about the unlicensed software",
      "Delete it without telling anyone",
      "Install more pirated software"
    ],
    correct: 1,
    explanation: "Professional responsibility upon discovering pirated software: report to management/compliance/legal department, document findings, recommend proper licensing or removal, don't ignore (creates company liability). Ignoring makes you complicit. Deleting without authorization alters customer property. Installing more pirated software is illegal. Companies face: legal action, fines (can be per-installation), BSA audits, reputation damage. Your report protects company from: unknowing violations, audit penalties, legal liability. Management can: purchase proper licenses, remove software, implement controls. Most piracy is accidental/ignorant rather than intentional. Professional technicians help ensure compliance."
  },
  {
    id: 11,
    question: "What is the difference between freeware and open-source software?",
    options: [
      "They are exactly the same thing",
      "Freeware is free to use but source code is not available; open-source provides source code and allows modification",
      "Freeware costs money; open-source is free",
      "Open-source cannot be used commercially"
    ],
    correct: 1,
    explanation: "Freeware: free to use, source code NOT provided, cannot modify, specific license terms (often non-commercial), examples: Adobe Reader, many utilities. Open-source: free to use, source code PROVIDED, can modify and redistribute (per license terms), various licenses (GPL, MIT, Apache), examples: Linux, LibreOffice, Firefox. Both can be free but different freedoms. Some open-source allows commercial use (depends on license). Shareware (different category): trial versions with limited time/features. Understanding distinctions helps choose appropriate software and comply with terms. Free doesn't always mean unrestricted."
  },
  {
    id: 12,
    question: "A company uses software with DRM (Digital Rights Management). What is the purpose of DRM?",
    options: [
      "To make software run faster",
      "To prevent unauthorized copying, distribution, and use through technical controls",
      "To improve user experience",
      "DRM has no purpose"
    ],
    correct: 1,
    explanation: "DRM controls: copying protection, installation limits, activation requirements, usage restrictions, expiration enforcement. Methods: product keys, online activation, hardware binding, encryption. Purposes: prevent piracy, enforce licensing, protect intellectual property, control distribution. User frustrations: requires internet, activation limits, transfer difficulties, potential access loss. DRM doesn't improve performance or user experience - adds restrictions. Examples: Windows activation, Adobe activation, game DRM (Steam, Denuvo). While controversial, DRM is legal vendor protection mechanism. Circumventing DRM is typically illegal (DMCA). Work within DRM systems - don't attempt to crack or circumvent."
  },
  {
    id: 13,
    question: "A small non-profit organization asks if they can use personal/home licenses of software instead of commercial licenses to save money. What should a technician advise?",
    options: [
      "Yes - non-profits don't need to follow licensing rules",
      "No - even non-profits must comply with licensing terms; suggest looking for non-profit discounts or open-source alternatives",
      "Non-profits can use any software without licenses",
      "Commercial licenses don't apply to non-profits"
    ],
    correct: 1,
    explanation: "Non-profit status doesn't exempt from licensing requirements: must comply with EULA terms, commercial use definitions often include non-profits, violations carry same consequences. Better approaches: check for non-profit discounts (Microsoft, Adobe, others offer), TechSoup (provides discounted software to non-profits), open-source alternatives (LibreOffice, GIMP, etc.), donated licenses. Some personal licenses explicitly prohibit organizational use regardless of non-profit status. Limited budget doesn't justify license violations. Many vendors support non-profits through: discounted pricing, donation programs, special licensing. Explore legal options before considering violations."
  },
  {
    id: 14,
    question: "A company purchases OEM (Original Equipment Manufacturer) Windows licenses with new computers. Can these licenses be transferred to different/newer computers later?",
    options: [
      "Yes - OEM licenses are fully transferable like retail licenses",
      "No - OEM licenses are typically tied to the original hardware and non-transferable",
      "OEM licenses can be installed on unlimited computers",
      "Only if the computer is painted blue"
    ],
    correct: 1,
    explanation: "OEM licenses: tied to original hardware (motherboard typically), non-transferable to different computers, cheaper than retail (because of restriction), terminate when hardware is retired, intended for system builders/manufacturers. Retail licenses: transferable between computers (one at a time), more expensive, more flexible. Volume licenses: organizational agreements with specific terms. OEM restriction means: can't move Windows to new computer when upgrading, replacement motherboards may trigger reactivation issues, license 'dies' with hardware. Retail licenses worth premium for flexibility. Understand license type when purchasing - affects future options. OEM restrictions are contractual and enforced through activation."
  },
  {
    id: 15,
    question: "A software vendor conducts a license compliance audit of a company. What should the company be prepared to provide?",
    options: [
      "Nothing - audits are illegal",
      "Proof of purchase, license documentation, installation inventory, proof that installations match purchased licenses",
      "Only credit card statements",
      "Companies can refuse all audits"
    ],
    correct: 1,
    explanation: "License audit preparation: maintain proof of purchase (invoices, receipts), keep license keys/certificates, inventory all software installations, document license assignments, ensure installations don't exceed licenses. Audits are LEGAL - many EULAs include audit rights. BSA (Business Software Alliance) conducts industry audits. Being prepared: demonstrates compliance, reduces audit stress, identifies gaps before auditors do, protects from penalties. Unprepared companies face: retroactive license purchases, penalties/fines, legal fees, reputation damage. Best practices: regular internal audits, software asset management tools, centralized license management, employee education. Compliance is ongoing responsibility, not one-time event. Maintain documentation always, not just during audits."
  }
];