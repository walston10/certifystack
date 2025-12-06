// Lesson 10: Application and Password Attacks
// Security+ (SY0-701) - Domain 2.0: Threats, Vulnerabilities, and Mitigations

export const lesson10Flashcards = [
  {
    id: 1,
    front: "What is an Injection Attack?",
    back: "Inserting malicious code into an application through user input. Application executes attacker's code. Includes SQL, command, LDAP, and XML injection."
  },
  {
    id: 2,
    front: "What is SQL Injection?",
    back: "Inserting SQL commands into application inputs to manipulate database. Can read, modify, or delete data. One of the most common web vulnerabilities."
  },
  {
    id: 3,
    front: "What is an example of SQL Injection?",
    back: "Input: ' OR '1'='1' -- in login field. This can bypass authentication by making the WHERE clause always true, returning all users."
  },
  {
    id: 4,
    front: "What is In-band SQL Injection?",
    back: "Results returned through same channel as attack. Attacker sees database output directly in application response. Easiest to exploit."
  },
  {
    id: 5,
    front: "What is Blind SQL Injection?",
    back: "No direct output visible to attacker. Infers information through application behavior (true/false responses) or time delays. Slower but still effective."
  },
  {
    id: 6,
    front: "What is Out-of-band SQL Injection?",
    back: "Results sent through different channel (DNS, HTTP to attacker's server). Used when in-band isn't possible. Requires database server to make external connections."
  },
  {
    id: 7,
    front: "What is Command Injection?",
    back: "Inserting OS commands into application inputs. Application executes commands on the server. Can lead to complete system compromise."
  },
  {
    id: 8,
    front: "What is LDAP Injection?",
    back: "Manipulating LDAP queries through malicious input. Can bypass authentication or extract directory information. Similar concept to SQL injection."
  },
  {
    id: 9,
    front: "What is XML Injection?",
    back: "Inserting malicious XML content to manipulate XML processing. Includes XXE (XML External Entity) attacks that can read files or cause DoS."
  },
  {
    id: 10,
    front: "How do you prevent Injection attacks?",
    back: "Input validation, parameterized queries (prepared statements), stored procedures, least privilege database accounts, WAF, escaping special characters."
  },
  {
    id: 11,
    front: "What is XSS (Cross-Site Scripting)?",
    back: "Injecting malicious scripts into web pages viewed by other users. Scripts run in victim's browser. Can steal cookies, credentials, or perform actions as user."
  },
  {
    id: 12,
    front: "What is Reflected XSS?",
    back: "Malicious script in URL or input is immediately reflected back in response. Requires victim to click crafted link. Not stored on server."
  },
  {
    id: 13,
    front: "What is Stored (Persistent) XSS?",
    back: "Malicious script permanently stored on target server (database, comments, forums). Executes for every user who views the page. More dangerous than reflected."
  },
  {
    id: 14,
    front: "What is DOM-based XSS?",
    back: "Script executes due to client-side DOM manipulation. Never sent to server. Vulnerability exists entirely in client-side JavaScript code."
  },
  {
    id: 15,
    front: "What is CSRF (Cross-Site Request Forgery)?",
    back: "Tricking authenticated user's browser into sending requests to vulnerable site. Performs actions as the victim. Also called session riding."
  },
  {
    id: 16,
    front: "How does CSRF work?",
    back: "Victim is logged into Site A. Attacker tricks victim into clicking link that sends request to Site A. Site A trusts request because it includes victim's session cookie."
  },
  {
    id: 17,
    front: "How do you prevent CSRF?",
    back: "Anti-CSRF tokens (unique per session/request), SameSite cookie attribute, checking Referer header, re-authentication for sensitive actions."
  },
  {
    id: 18,
    front: "What is a Buffer Overflow?",
    back: "Writing more data to buffer than it can hold. Excess data overwrites adjacent memory. Can crash application or execute arbitrary code."
  },
  {
    id: 19,
    front: "How can Buffer Overflow lead to code execution?",
    back: "Overflow overwrites return address on stack with attacker's address. When function returns, it jumps to attacker's code. Called stack smashing."
  },
  {
    id: 20,
    front: "What is Directory Traversal (Path Traversal)?",
    back: "Using ../ sequences to access files outside intended directory. Can read sensitive files like /etc/passwd or application config files."
  },
  {
    id: 21,
    front: "What is a Race Condition?",
    back: "Vulnerability when outcome depends on timing of events. Attacker exploits gap between check and use. Also called TOCTOU (Time of Check to Time of Use)."
  },
  {
    id: 22,
    front: "What is TOCTOU?",
    back: "Time of Check to Time of Use. Race condition where attacker changes resource between when it's validated and when it's used."
  },
  {
    id: 23,
    front: "What are API attacks?",
    back: "Exploiting vulnerabilities in APIs. Includes improper authentication, injection, broken access controls, excessive data exposure, lack of rate limiting."
  },
  {
    id: 24,
    front: "What is a Brute Force attack?",
    back: "Trying every possible combination until correct password found. Time-consuming but guaranteed to work eventually. Countered with lockouts and complexity."
  },
  {
    id: 25,
    front: "What is a Dictionary Attack?",
    back: "Trying common passwords from wordlists. Faster than brute force. Effective against weak passwords. Uses lists of common passwords and variations."
  },
  {
    id: 26,
    front: "What is Password Spraying?",
    back: "Trying few common passwords against many accounts. Avoids lockouts by staying under threshold per account. Effective against organizations with weak password policies."
  },
  {
    id: 27,
    front: "What is Credential Stuffing?",
    back: "Using stolen username/password pairs from breaches on other sites. Exploits password reuse. If user reuses password, attacker gains access."
  },
  {
    id: 28,
    front: "What is a Rainbow Table attack?",
    back: "Using precomputed hash tables to crack passwords. Look up hash to find password. Fast but requires storage. Defeated by salting passwords."
  },
  {
    id: 29,
    front: "What is a Hybrid Attack?",
    back: "Combines dictionary attack with variations. Adds numbers, symbols, or common substitutions to dictionary words. password → Password1! → P@ssw0rd!"
  },
  {
    id: 30,
    front: "How do you defend against password attacks?",
    back: "Strong password policies, account lockout, MFA, password managers, salted hashing, rate limiting, monitoring for failed logins, prohibiting breached passwords."
  }
];