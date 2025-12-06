export const lesson10Quiz = [
  {
    id: 1,
    question: "A web application accepts user input directly into a database query. An attacker enters ' OR '1'='1 into the login field and gains access without valid credentials. What type of attack is this?",
    options: [
      "Cross-site scripting (XSS)",
      "SQL injection - inserting malicious SQL code through user input",
      "Buffer overflow",
      "Cross-site request forgery"
    ],
    correct: 1,
    explanation: "SQL INJECTION inserts malicious SQL code through user input fields that are improperly handled. How it works: (1) Application builds SQL query with user input, (2) Input isn't sanitized/parameterized, (3) Attacker inputs SQL syntax, (4) Query executes attacker's SQL code. Example: SELECT * FROM users WHERE user='' OR '1'='1' -- always true, returns all users. SQL injection types: (1) In-band - results displayed directly, (2) Blind - infer results from behavior, (3) Out-of-band - results sent elsewhere. Impact: data theft, authentication bypass, data modification, database destruction, command execution. Defense: (1) Parameterized queries/prepared statements (PRIMARY), (2) Input validation, (3) Stored procedures, (4) Least privilege database accounts, (5) WAF. SQL injection has topped OWASP Top 10 for years - still extremely common and dangerous."
  },
  {
    id: 2,
    question: "An attacker injects ' OR '1'='1 into a login form but receives no direct feedback. They determine success by measuring response time differences when the query evaluates true versus false. What type of SQL injection is this?",
    options: [
      "In-band SQL injection",
      "Blind SQL injection - inferring results through indirect indicators",
      "Out-of-band SQL injection",
      "Second-order SQL injection"
    ],
    correct: 1,
    explanation: "BLIND SQL INJECTION doesn't return query results directly - attacker infers success through indirect indicators. Blind SQLi techniques: (1) Boolean-based - different responses for true/false conditions, (2) Time-based - inject delays, measure response time (IF true THEN SLEEP(5)). Example: input: ' OR SUBSTRING(password,1,1)='a' AND '1'='1. If page loads normally: first character IS 'a'. If error/different: first character ISN'T 'a'. Repeat for each character position and value. Why used: when application doesn't display query errors or results. More tedious but automated tools extract data character by character. Defense: same as regular SQLi - parameterized queries are the solution. Blind SQLi is why even 'hidden' injection points are dangerous - lack of visible output doesn't mean it's safe."
  },
  {
    id: 3,
    question: "A vulnerability allows an attacker to insert JavaScript code into a forum post. When other users view the post, the script executes in their browsers and sends their session cookies to the attacker. What attack is this?",
    options: [
      "SQL injection",
      "Stored/Persistent XSS - malicious script saved on server and executed by other users",
      "CSRF",
      "Buffer overflow"
    ],
    correct: 1,
    explanation: "STORED XSS (Persistent XSS) injects malicious scripts that are saved on the server and executed by other users. Stored XSS characteristics: (1) Script stored in database (comment, profile, post), (2) Served to all users who view the content, (3) Executes in victims' browsers, (4) Affects many users. Attack process: (1) Attacker posts malicious script, (2) Server stores it, (3) Other user views page, (4) Script executes in their browser, (5) Steals cookies, redirects, defaces page. XSS types: (1) Stored - persists on server (most dangerous), (2) Reflected - in URL, executes once, (3) DOM-based - client-side script manipulation. Defense: (1) Output encoding (escape HTML entities), (2) Input validation, (3) Content Security Policy (CSP), (4) HttpOnly cookies (can't be stolen by JS). Stored XSS is especially dangerous because it's automatic - just viewing page triggers attack."
  },
  {
    id: 4,
    question: "An attacker sends a victim a link containing malicious JavaScript in the URL. When clicked, the script executes once in the victim's browser. What type of XSS is this?",
    options: [
      "Stored XSS",
      "Reflected XSS - malicious script in URL is reflected back and executed",
      "DOM-based XSS",
      "SQL injection"
    ],
    correct: 1,
    explanation: "REFLECTED XSS includes malicious script in a URL/request that's reflected back in the server response. Reflected XSS flow: (1) Attacker crafts URL with malicious script, (2) Victim clicks link, (3) Server includes script in response (error message, search results), (4) Script executes in victim's browser. Example: site.com/search?q=<script>stealCookies()</script>. Key differences from stored: (1) Not saved on server, (2) Requires victim to click specific link, (3) One-time execution per click. Delivery methods: phishing emails, social media, malicious ads, redirects. Defense: (1) Output encoding, (2) Input validation, (3) CSP headers, (4) URL parameter sanitization. Reflected XSS is very common - any user input echoed to page is potential vector."
  },
  {
    id: 5,
    question: "A malicious website causes a logged-in banking user's browser to submit a hidden transfer request to their bank without their knowledge. The bank accepts it because the user's session cookie is automatically included. What attack is this?",
    options: [
      "XSS",
      "CSRF (Cross-Site Request Forgery) - forcing user's browser to make unwanted requests",
      "SQL injection",
      "Session hijacking"
    ],
    correct: 1,
    explanation: "CSRF (Cross-Site Request Forgery) tricks authenticated users' browsers into making unwanted requests. How CSRF works: (1) User is logged into bank (has session cookie), (2) User visits attacker's site, (3) Attacker's page contains hidden request to bank, (4) Browser automatically includes bank's cookie, (5) Bank sees legitimate request with valid session, (6) Action executes without user intent. CSRF examples: transfer money, change email, change password, purchase items. Requirements: (1) Victim must be authenticated to target, (2) Request must have predictable parameters, (3) No additional verification beyond cookies. Defense: (1) CSRF tokens (unpredictable value required with requests), (2) SameSite cookie attribute, (3) Re-authentication for sensitive actions, (4) Referrer checking (weak). CSRF exploits that browsers automatically send cookies - legitimate session used for illegitimate request."
  },
  {
    id: 6,
    question: "An application copies user input into a fixed-size memory buffer without checking length. An attacker provides input larger than the buffer, overwriting adjacent memory and potentially executing arbitrary code. What vulnerability is this?",
    options: [
      "SQL injection",
      "Buffer overflow - exceeding buffer boundaries to overwrite memory",
      "XSS",
      "CSRF"
    ],
    correct: 1,
    explanation: "BUFFER OVERFLOW occurs when input exceeds allocated memory buffer, overwriting adjacent memory. How buffer overflow works: (1) Application allocates fixed buffer (e.g., 256 bytes), (2) Input isn't length-checked, (3) Attacker provides 500 bytes, (4) Extra bytes overwrite adjacent memory, (5) May overwrite return address or function pointers, (6) Can execute arbitrary code. Overflow types: (1) Stack-based - overflow local variables, (2) Heap-based - overflow dynamically allocated memory. Impact: crashes, arbitrary code execution, privilege escalation. Famous examples: Morris Worm (1988), Code Red, Slammer. Defense: (1) Input validation and length checking, (2) Safe functions (strcpy → strncpy), (3) Stack canaries, (4) ASLR (Address Space Layout Randomization), (5) DEP/NX (Data Execution Prevention), (6) Modern languages with bounds checking. Buffer overflows are classic C/C++ vulnerability - memory-safe languages prevent them."
  },
  {
    id: 7,
    question: "An attacker modifies a file path parameter in a URL from 'file=report.pdf' to 'file=../../../etc/passwd' to access files outside the intended directory. What attack is this?",
    options: [
      "SQL injection",
      "Directory traversal/Path traversal - accessing files outside intended directory",
      "Buffer overflow",
      "XSS"
    ],
    correct: 1,
    explanation: "DIRECTORY TRAVERSAL (Path Traversal) manipulates file paths to access files outside the intended directory. How it works: (1) Application uses user input in file path, (2) '../' sequences move up directory tree, (3) Attacker reaches sensitive files, (4) Example: ../../../etc/passwd accesses Linux password file. Targets: (1) Configuration files, (2) Password/shadow files, (3) Application source code, (4) Database files, (5) Logs with sensitive data. Variations: (1) URL encoding (%2e%2e%2f), (2) Double encoding, (3) Unicode variations, (4) Null bytes to terminate paths. Defense: (1) Never use user input in file paths directly, (2) Whitelist allowed files, (3) Validate and sanitize input, (4) Chroot/jail environments, (5) Least privilege file permissions. Directory traversal is simple but effective - many applications are vulnerable to basic '../' attacks."
  },
  {
    id: 8,
    question: "A web application checks if a file exists (time of check), then reads it (time of use). An attacker changes the file between these two operations. What vulnerability is exploited?",
    options: [
      "Buffer overflow",
      "Race condition (TOCTOU - Time of Check to Time of Use)",
      "SQL injection",
      "XSS"
    ],
    correct: 1,
    explanation: "RACE CONDITION (TOCTOU) exploits timing gaps between checking and using a resource. TOCTOU attack: (1) Application checks file permissions (OK), (2) Brief window before application uses file, (3) Attacker swaps file with malicious version (symlink), (4) Application uses malicious file with checked permissions. Example: system checks temp file is safe, attacker symlinks it to /etc/passwd before write. Race condition types: (1) TOCTOU - gap between check and use, (2) Resource contention - concurrent access issues, (3) Privilege escalation through race. Impact: privilege escalation, unauthorized access, data corruption. Defense: (1) Atomic operations (check and use in one step), (2) File locking, (3) Proper permission handling, (4) Use file descriptors not paths after check, (5) Minimize window between check and use. Race conditions are subtle and hard to find but can be critical."
  },
  {
    id: 9,
    question: "An attacker uses automated tools to try every possible password combination against a login system until finding the correct one. What type of attack is this?",
    options: [
      "Dictionary attack",
      "Brute force attack - systematically trying all possible combinations",
      "Password spraying",
      "Credential stuffing"
    ],
    correct: 1,
    explanation: "BRUTE FORCE systematically tries all possible password combinations until finding the correct one. Brute force characteristics: (1) Tries every combination (aaaaa, aaaab, aaaac...), (2) Guaranteed to find password eventually, (3) Time depends on password length and complexity, (4) Very slow for long/complex passwords. Time examples (assuming 1 billion guesses/second): (1) 6 chars lowercase = 308 million combos = <1 second, (2) 8 chars mixed = 218 trillion combos = 2.5 days, (3) 12 chars mixed + symbols = centuries. Defense: (1) Strong password requirements, (2) Account lockout after failed attempts, (3) Rate limiting, (4) CAPTCHA, (5) MFA, (6) Key stretching (slow hashes). Pure brute force is usually impractical for strong passwords - attackers often use dictionary attacks or credential stuffing instead."
  },
  {
    id: 10,
    question: "An attacker uses a list of common words and phrases (password, 123456, letmein) to attempt login. What type of attack is this?",
    options: [
      "Pure brute force",
      "Dictionary attack - using list of common passwords and words",
      "Credential stuffing",
      "Pass-the-hash"
    ],
    correct: 1,
    explanation: "DICTIONARY ATTACK uses wordlists of common passwords and phrases rather than trying all combinations. Why effective: people choose predictable passwords - common words, names, patterns. Dictionary attack lists include: (1) Common passwords (password, 123456, qwerty), (2) Dictionary words, (3) Names, dates, places, (4) Keyboard patterns (qwerty, 123456), (5) Variations (Password1, p@ssw0rd). Hybrid attacks: dictionary words + variations (capitalize, add numbers, leetspeak). Famous lists: RockYou (14 million passwords leaked), SecLists. Defense: (1) Block known common passwords, (2) Password complexity requirements, (3) Password managers for random passwords, (4) Account lockout, (5) MFA. Dictionary attacks are much faster than brute force because they try likely passwords first. Most users choose passwords that appear in dictionaries."
  },
  {
    id: 11,
    question: "An attacker tries a small set of common passwords (Password1, Summer2024) against many accounts in an organization to avoid triggering account lockouts. What attack is this?",
    options: [
      "Brute force",
      "Password spraying - few passwords against many accounts to avoid lockout",
      "Credential stuffing",
      "Dictionary attack"
    ],
    correct: 1,
    explanation: "PASSWORD SPRAYING tries a few common passwords against many accounts to avoid per-account lockout. Traditional vs Spraying: (1) Traditional - many passwords against one account (triggers lockout), (2) Spraying - few passwords against many accounts (stays under lockout threshold). Attack pattern: (1) Try 'Spring2024!' against all accounts, wait, (2) Try 'Company123!' against all accounts, wait, (3) Repeat with common passwords. Why effective: (1) Many users choose similar weak passwords, (2) Lockout policies focus on single account, (3) Large organizations = many potential victims, (4) One success = network access. Defense: (1) Detect failed logins across many accounts, (2) Block known common passwords, (3) Smart lockout (Azure AD), (4) MFA, (5) Passwordless authentication. Password spraying exploits the gap between per-user lockout policies and organization-wide password hygiene."
  },
  {
    id: 12,
    question: "An attacker obtains a database of username/password pairs from one breached site and tries them on other sites, knowing users reuse passwords. What attack is this?",
    options: [
      "Password spraying",
      "Credential stuffing - using breached credentials across multiple services",
      "Brute force",
      "Dictionary attack"
    ],
    correct: 1,
    explanation: "CREDENTIAL STUFFING uses breached username/password combinations from one service to compromise accounts on other services. Why effective: 65%+ of users reuse passwords across sites. Attack flow: (1) Obtain credentials from breach (dark web, torrents), (2) Automate login attempts on other sites, (3) Match = compromised account on new site, (4) Scale: try millions of credentials against many sites. Famous breaches used: LinkedIn, Adobe, Yahoo, Collection #1 (773 million emails). Success rate: often 0.1-2% (still millions of accounts with large lists). Defense: (1) Users: unique password per site (password manager), (2) Services: detect credential stuffing, rate limiting, (3) Check passwords against breach databases (HaveIBeenPwned API), (4) MFA, (5) Behavioral analysis. Credential stuffing is highly effective because of password reuse - even strong passwords are vulnerable if reused."
  },
  {
    id: 13,
    question: "An attacker uses precomputed tables of password hashes to quickly reverse captured hashes back to passwords. What are these tables called?",
    options: [
      "Hash tables",
      "Rainbow tables - precomputed hash lookup tables for reversing hashes",
      "Database tables",
      "Routing tables"
    ],
    correct: 1,
    explanation: "RAINBOW TABLES are precomputed tables mapping hashes back to original passwords, enabling fast hash cracking. How rainbow tables work: (1) Compute hashes for millions/billions of passwords, (2) Store password→hash mappings, (3) When you have a hash, look it up in table, (4) Get original password instantly. Advantages: (1) One-time computation cost, (2) Fast lookups (seconds vs days/years of cracking), (3) Reusable for same algorithm. Limitations: (1) Storage-intensive (can be terabytes), (2) Must be generated per algorithm, (3) Defeated by SALTING. Why salting defeats rainbow tables: (1) Salt adds random data to each password, (2) Same password + different salts = different hashes, (3) Would need separate table for each possible salt (impractical). Defense: (1) Always salt passwords, (2) Use modern password hashing (bcrypt, Argon2) which includes salting, (3) Strong passwords not in common dictionaries."
  },
  {
    id: 14,
    question: "A web API doesn't properly validate that a user should have access to a specific resource, allowing an attacker to change an ID in the URL to access other users' data. What vulnerability is this?",
    options: [
      "SQL injection",
      "IDOR (Insecure Direct Object Reference) - accessing unauthorized resources by manipulating references",
      "XSS",
      "CSRF"
    ],
    correct: 1,
    explanation: "IDOR (Insecure Direct Object Reference) occurs when applications expose internal object references without proper authorization checks. IDOR example: (1) User views their order: /order/12345, (2) Change to /order/12346, (3) See someone else's order - no authorization check! Common IDOR targets: (1) User accounts/profiles, (2) Documents/files, (3) Orders/transactions, (4) API endpoints, (5) Database record IDs. Impact: (1) Data disclosure, (2) Unauthorized modifications, (3) Account takeover, (4) Privacy violations. Defense: (1) Server-side authorization checks for EVERY request, (2) Indirect references (map to internal IDs server-side), (3) Session-based access control, (4) Verify user owns/can access requested resource. IDOR is OWASP Top 10 - extremely common in APIs and web apps. Simple attack but often overlooked because developers assume users won't modify URLs."
  },
  {
    id: 15,
    question: "An application has a functionality where users can submit URLs that the server will fetch. An attacker provides an internal URL (http://192.168.1.10/admin) to access internal resources through the server. What attack is this?",
    options: [
      "XSS",
      "SSRF (Server-Side Request Forgery) - making server request internal resources",
      "SQL injection",
      "CSRF"
    ],
    correct: 1,
    explanation: "SSRF (Server-Side Request Forgery) tricks a server into making requests to unintended destinations, often internal resources. How SSRF works: (1) Application accepts URL input and fetches it, (2) Attacker provides internal/localhost URL, (3) Server fetches from internal network, (4) Attacker bypasses firewall - request comes from inside. SSRF targets: (1) Internal services (metadata, admin panels), (2) Cloud metadata (169.254.169.254 - AWS credentials), (3) Internal APIs, (4) Port scanning internal network, (5) Reading local files (file://). Famous: Capital One breach (2019) - SSRF to AWS metadata = 100M records stolen. Defense: (1) Whitelist allowed URLs/domains, (2) Block private IP ranges, (3) Block cloud metadata endpoints, (4) Disable unnecessary URL schemes (file://, gopher://), (5) Network segmentation. SSRF is increasingly critical as cloud environments expose sensitive metadata endpoints."
  }
];