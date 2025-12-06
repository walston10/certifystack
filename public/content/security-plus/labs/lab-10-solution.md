# Lab 10: Application and Password Attacks - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Application attacks are among the most common real-world vulnerabilities.

---

## Section 1: Concept Check - Answers

**1. What is SQL injection, and why is it so dangerous?**

**Answer:**

**SQL injection** is inserting malicious SQL code into application queries through user input.

**Why it's dangerous:**
- Direct database access (read/modify/delete all data)
- Authentication bypass
- Data exfiltration
- Potential command execution on database server
- Often leads to complete system compromise
- Very common vulnerability (#3 on OWASP Top 10)

---

**2. Reflected XSS vs Stored XSS:**

**Answer:**

| Type | Payload Location | Scope | Persistence |
|------|------------------|-------|-------------|
| **Reflected** | In URL/request, echoed back | Requires victim to click malicious link | None—single request |
| **Stored** | Saved in database/server | All users who view the page | Persists until removed |

**Stored is more dangerous because:**
- Attacks all users automatically
- No social engineering needed after initial injection
- Can compromise high-value targets (admins)
- Harder to detect (payload isn't in URL)

---

**3. CSRF vs XSS:**

**Answer:**

| Aspect | XSS | CSRF |
|--------|-----|------|
| **Exploits** | User's trust in website | Website's trust in user |
| **Code execution** | In victim's browser | None—uses victim's session |
| **Data theft** | Yes, directly | No—performs actions |
| **Requires** | Vulnerable site rendering attacker code | Victim logged into target site |

**CSRF:** Tricks authenticated user into performing unwanted action
**XSS:** Executes attacker's code in user's browser context

---

**4. Brute force vs dictionary vs password spraying:**

**Answer:**

| Attack | Method | When to Use |
|--------|--------|-------------|
| **Brute force** | Try every possible combination | Short passwords, no lockout |
| **Dictionary** | Try common words/passwords | When users pick weak passwords |
| **Password spraying** | Few passwords across many accounts | Avoid lockouts, target organizations |

---

**5. What is a buffer overflow?**

**Answer:**

A **buffer overflow** occurs when data exceeds allocated memory, overwriting adjacent memory.

**Attacker can achieve:**
- Crash the application (denial of service)
- Overwrite return address → redirect execution
- Execute arbitrary code (shellcode)
- Gain elevated privileges

---

## Section 2: Activity Solutions

### Activity A: Injection Types - Answers

| Type | What's Injected | Target | Impact |
|------|-----------------|--------|--------|
| SQL | SQL commands | Database queries | Data theft/modification |
| Command | OS commands | System shell | Command execution |
| LDAP | LDAP filters | Directory queries | Auth bypass, data access |
| XML | XML data | XML parsers | Data theft, DoS |
| XPath | XPath queries | XML navigation | Data extraction |
| Header | HTTP headers | Web server | Response manipulation |

**SQL Injection categories:**

| Type | How It Works | Results Visible? |
|------|--------------|------------------|
| In-band | Results returned in same channel | Yes—directly in response |
| Blind (Boolean) | True/false responses | Infer data from different responses |
| Blind (Time) | Database delays | Infer data from response time |
| Out-of-band | Data sent to attacker's server | Via DNS/HTTP to attacker |

**Why injection works:** Application concatenates untrusted input directly into commands instead of treating it as data.

---

### Activity B: SQL Injection - Answers

**Normal login query:**
```sql
SELECT * FROM users WHERE username='john' AND password='secret123'
```

**SQL injection attack:**
```sql
SELECT * FROM users WHERE username='admin'--' AND password='anything'
```

**What `--` does:** Comments out the rest of the query (password check is ignored)

**Why it bypasses auth:** The query becomes:
- `WHERE username='admin'` — finds admin user
- `--` — ignores password check
- Returns admin row without valid password

**Payload effects:**

| Payload | Purpose | Effect |
|---------|---------|--------|
| `' OR '1'='1` | Always true condition | Returns all rows |
| `'; DROP TABLE users;--` | Destructive query | Deletes entire table |
| `' UNION SELECT...` | Extract other data | Combine results with other tables |
| `admin'/*` | Comment (alternative) | Same as `--` in some databases |

**Defenses:**

| Defense | How It Works |
|---------|--------------|
| Parameterized queries | Separates code from data—#1 defense |
| Input validation | Reject/sanitize unexpected characters |
| Stored procedures | Pre-compiled, harder to inject |
| Least privilege | DB account can't DROP tables |
| WAF | Detect and block injection patterns |
| Escape characters | Make special chars literal |

---

### Activity C: XSS - Answers

**XSS types:**

| Type | Payload Stored | Who's Attacked | Persistence |
|------|----------------|----------------|-------------|
| Reflected | URL/request | Whoever clicks link | None |
| Stored | Database | All viewers | Until removed |
| DOM-based | Client-side (never to server) | Client | None |

**Reflected XSS:** Script executes in victim's browser when they click the malicious link.

**Stored XSS impact:** Cookie theft script runs for every user who views the comment—all sessions compromised.

**Why stored is more dangerous:**
- No user interaction needed after injection
- Attacks all users automatically
- Persists indefinitely
- Can target administrators

**XSS capabilities:**

| Capability | Example |
|------------|---------|
| Steal cookies | `document.cookie` sent to attacker |
| Session hijacking | Use stolen session token |
| Keylogging | Capture keystrokes on page |
| Phishing | Overlay fake login form |
| Malware | Redirect to exploit kit |
| Deface | Modify page content |

**Defenses:**

| Defense | How It Works |
|---------|--------------|
| Output encoding | Convert `<` to `&lt;` etc. |
| Input validation | Reject script tags |
| CSP | Restrict script sources |
| HTTPOnly cookies | JavaScript can't read cookies |
| X-XSS-Protection | Browser-level filtering |

---

### Activity D: CSRF - Answers

**How CSRF works:**

| Step | Description |
|------|-------------|
| 1 | User logs into bank.com (has session cookie) |
| 2 | User visits attacker's page while still logged in |
| 3 | Attacker's page triggers request to bank.com |
| 4 | Browser includes session cookie—bank thinks it's legitimate |

**CSRF attack example:**

| Question | Answer |
|----------|--------|
| What happens? | Browser makes transfer request to bank |
| Why does bank process it? | Valid session cookie is attached |
| Did attacker need password? | No—exploits existing session |

**CSRF vs XSS:**

| Aspect | XSS | CSRF |
|--------|-----|------|
| Exploits trust | User trusts site | Site trusts user's browser |
| Code execution | Yes (in browser) | No (just request) |
| User action | View page | Visit attacker site while logged in |
| Steals data | Yes | No—performs actions |

**CSRF defenses:**

| Defense | How It Works |
|---------|--------------|
| Anti-CSRF tokens | Unique token per request, attacker can't guess |
| SameSite cookies | Cookies not sent on cross-site requests |
| Referer checking | Verify request came from same site |
| Re-authentication | Require password for sensitive actions |

---

### Activity E: Other Attacks - Answers

| Attack | How It Works | Example |
|--------|--------------|---------|
| Directory Traversal | Navigate outside webroot using ../ | Access /etc/passwd |
| File Inclusion | Include remote/local files in code | Execute remote PHP |
| IDOR | Access objects by changing ID | View other users' data |
| SSRF | Server makes requests for attacker | Access internal resources |
| XXE | XML parser processes external entities | Read server files |
| Insecure Deserial | Malicious serialized objects | Remote code execution |

**Directory traversal target:** The `/etc/passwd` file (or other system files)

**IDOR vulnerability:** Application doesn't verify user owns account 12346—just trusts the ID parameter

---

### Activity F: Buffer Overflow - Answers

| Step | What Happens |
|------|--------------|
| 1 | Program allocates 64-byte buffer |
| 2 | Attacker provides 100+ bytes of input |
| 3 | Extra bytes overwrite adjacent memory |
| 4 | Return address points to attacker's code |

**Attack goals:**

| Goal | How |
|------|-----|
| Crash | Overwrite with garbage → segfault |
| Execute code | Overwrite return address → shellcode |
| Privilege escalation | Exploit privileged program |

**Defenses:**

| Defense | How It Works |
|---------|--------------|
| ASLR | Randomize memory layout—can't predict addresses |
| DEP/NX | Mark memory non-executable |
| Stack canaries | Detect overwrites before return |
| Safe functions | Use strncpy (bounded) instead of strcpy |
| Bounds checking | Verify input length |

---

### Activity G: Password Attacks - Answers

| Attack | Method | Speed | When to Use |
|--------|--------|-------|-------------|
| Brute Force | Every combination | Slow | No lockouts, short passwords |
| Dictionary | Common words | Fast | Weak password policies |
| Hybrid | Dictionary + variations | Medium | "password1" type passwords |
| Rainbow Table | Pre-computed hash lookup | Very fast | Unsalted hashes |
| Spraying | Few passwords, many accounts | Slow but stealthy | Avoid lockouts |
| Stuffing | Breached credentials | Fast | Password reuse |

**Brute force calculations (8 chars):**

| Character Set | Combinations | Time @ 1B/sec |
|---------------|--------------|---------------|
| Lowercase (26) | 208 billion | ~3.5 minutes |
| + Uppercase (52) | 53 trillion | ~15 hours |
| + Numbers + Symbols (95) | 6.6 quadrillion | ~77 days |

**Length vs complexity:** Length is more important. Each additional character multiplies the keyspace exponentially.

---

### Activity H: Spraying vs Stuffing - Answers

**Password spraying:**

| Aspect | Details |
|--------|---------|
| Targets | Many accounts at one organization |
| Passwords tried | Few common ones (Summer2024!, Company123) |
| Why it works | Some users always use weak passwords |
| Avoids | Account lockouts (few attempts per account) |

**Credential stuffing:**

| Aspect | Details |
|--------|---------|
| Targets | Same email/username across many sites |
| Credentials from | Previous data breaches |
| Why it works | People reuse passwords |
| Scale | Millions of credentials tested |

**Scenario identification:**

| Scenario | Attack Type |
|----------|-------------|
| "Summer2024!" against all employees | Password spraying |
| LinkedIn passwords on Netflix | Credential stuffing |
| Every combination against one account | Brute force |
| rockyou.txt against hash file | Dictionary attack |
| 3 passwords, wait, 3 more | Password spraying (slow) |

---

### Activity I: Rainbow Tables - Answers

| Step | Description |
|------|-------------|
| 1 | Pre-compute hashes for common passwords |
| 2 | Store in optimized lookup table |
| 3 | Compare stolen hash → instant result |

**Why salting works:**

| Without Salt | With Salt |
|--------------|-----------|
| hash("password") always same | hash("password" + unique_salt) is different |
| One rainbow table works | Need unique table per salt |
| Impractical to pre-compute all salt combinations |

**Alice and Bob same hash?** No—different salts produce different hashes even for identical passwords.

---

### Activity J: Password Policy - Answers

**Policy A analysis:**

| Strength | Weakness |
|----------|----------|
| Requires multiple character types | Forces predictable patterns (P@ssw0rd!) |
| History prevents immediate reuse | 90-day changes lead to Password1, Password2... |
| 8 chars minimum | 8 chars is too short today |

**Policy B analysis:**

| Strength | Weakness |
|----------|----------|
| 16+ chars = exponentially harder to crack | Some users may choose 16 repeated chars |
| No complexity = more memorable passwords | Doesn't prevent "passwordpassword" |
| Blocklist prevents common passwords | |
| No expiration = users don't increment | |

**Better policy:** Policy B aligns with NIST 800-63B guidelines

**Modern NIST recommendations:**

| Old | New |
|----|-----|
| Complex requirements | Drop complexity, focus on length |
| 90-day expiration | Only change if compromised |
| Security questions | Eliminate—easily researched |
| 8-character minimum | 8+ minimum, encourage 15+ |

---

### Activity K: OWASP Top 10 - Answers

| Category | Examples |
|----------|----------|
| A01: Broken Access Control | IDOR, privilege escalation, CORS misconfiguration |
| A02: Cryptographic Failures | Weak encryption, plaintext storage |
| A03: Injection | SQL, command, LDAP injection |
| A04: Insecure Design | Flawed architecture, missing threat modeling |
| A05: Security Misconfiguration | Default creds, unnecessary features, verbose errors |
| A06: Vulnerable Components | Outdated libraries, unpatched dependencies |
| A07: Auth & Session Failures | Weak passwords, broken session management |
| A08: Software & Data Integrity | Insecure deserialization, unverified updates |
| A09: Logging Failures | Insufficient logging, no alerting |
| A10: SSRF | Server makes requests to arbitrary URLs |

**Attack mapping:**

| Attack | Category |
|--------|----------|
| SQL Injection | A03: Injection |
| XSS | A03: Injection |
| CSRF | A01: Broken Access Control |
| IDOR | A01: Broken Access Control |
| Default credentials | A05: Security Misconfiguration |
| Outdated library | A06: Vulnerable Components |
| Missing authentication | A07: Auth & Session Failures |

---

### Activity L: Hash Analysis - Answers

| Hash | Type | Length |
|------|------|--------|
| `5f4dcc3b...` (32 hex) | MD5 | 128-bit |
| `5baa61e4...` (40 hex) | SHA-1 | 160-bit |
| `$2a$10$...` | bcrypt | Variable |
| `$6$rounds=...` | SHA-512 crypt | Variable |
| `aad3b435...:31d6...` | NTLM | 128-bit |

**Hash characteristics:**

| Type | Length | Salted? | Iterations | Security |
|------|--------|---------|------------|----------|
| MD5 | 128-bit | No | 1 | Broken |
| SHA-1 | 160-bit | No | 1 | Deprecated |
| SHA-256 | 256-bit | No | 1 | OK for integrity |
| bcrypt | Variable | Yes | Configurable | Recommended |
| NTLM | 128-bit | No | 1 | Weak |

**CyberChef:**
- MD5 of "password123": `482c811da5d5b4bc6d497ffa98491e38`
- Base64 decode: `admin:password`

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: SQL injection, fix in 3 months**

**Temporary mitigations:**
- WAF rules to block SQL injection patterns
- Input validation at application layer
- Restrict database account permissions
- Increase monitoring/alerting
- Consider taking feature offline if highly sensitive

**Why waiting is problematic:**
- SQLi is easily automated
- Entire database can be stolen
- Likely already indexed by attackers' scanners
- 3 months = certain exploitation

---

**Scenario 2: 40% credential reuse from breach**

**Immediate actions:**
1. Force password reset for ALL users (or at least identified 40%)
2. Check for successful logins from unusual locations/times
3. Disable any compromised accounts showing suspicious activity
4. Notify affected users

**Long-term changes:**
- Mandatory MFA
- Password manager recommendation
- Credential monitoring service
- Security awareness training on reuse risks
- Block passwords known to be in breaches

---

**Scenario 3: Stored XSS in legacy app**

**Approach:**
1. WAF rules to block XSS patterns (temporary)
2. Output encoding at the database retrieval layer
3. Content Security Policy headers
4. Sanitize existing stored content
5. Consider iframe isolation
6. Long-term: Refactor or replace application

---

## Key Exam Tips

1. **SQL Injection defense:** Parameterized queries (prepared statements) = #1 solution

2. **XSS types:**
   - Reflected = URL parameter echoed
   - Stored = in database
   - DOM = client-side only

3. **CSRF:** Exploits site's trust in user's browser (opposite of XSS)

4. **Buffer overflow defenses:** ASLR, DEP/NX, stack canaries

5. **Password attacks:**
   - Spraying = few passwords, many accounts
   - Stuffing = breached creds on other sites

6. **Rainbow tables:** Defeated by salting

7. **NIST guidance:** Length > complexity, no forced rotation

8. **OWASP #1:** Broken Access Control (2021)

---

## Common Mistakes to Avoid

❌ Confusing XSS (runs code) with CSRF (forces action)

❌ Thinking input validation alone prevents SQLi (use parameterized queries)

❌ Forgetting that stored XSS persists and affects all users

❌ Confusing password spraying (few passwords, many accounts) with stuffing (breached creds)

❌ Thinking encryption prevents replay attacks

❌ Believing complex passwords are better than long passwords

---

**Congratulations on completing Lab 10!**

Application and password attacks are among the most common real-world threats—this knowledge is essential for both the exam and practical security work.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 10: Application and Password Attacks - Solution Guide*