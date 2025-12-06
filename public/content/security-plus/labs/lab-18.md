# Lab 18: Wireless Security Architecture

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 3.2 - Given a scenario, apply security principles to secure enterprise infrastructure

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **Why is WEP considered completely broken? What vulnerabilities does it have?**

2. **What is the difference between WPA2-Personal (PSK) and WPA2-Enterprise?**

3. **What improvements does WPA3 provide over WPA2?**

4. **Explain what 802.1X authentication does in a wireless network.**

5. **What is an evil twin attack, and how can users protect themselves?**

---

## Section 2: Hands-On Activities

### Activity A: Wireless Security Protocol Evolution

**Goal:** Understand the progression of wireless security.

**Protocol timeline:**

| Protocol | Year | Encryption | Key Size | Status |
|----------|------|------------|----------|--------|
| WEP | 1997 | | | |
| WPA | 2003 | | | |
| WPA2 | 2004 | | | |
| WPA3 | 2018 | | | |

**Protocol vulnerability summary:**

| Protocol | Vulnerabilities | Attack Methods |
|----------|-----------------|----------------|
| WEP | | |
| WPA | | |
| WPA2 | | |
| WPA3 | | |

**Why WEP fails:**

| Weakness | Explanation |
|----------|-------------|
| IV reuse | |
| Short IV (24-bit) | |
| Static keys | |
| RC4 stream cipher weaknesses | |
| No mutual authentication | |

---

### Activity B: WPA2 vs WPA3 Comparison

**Goal:** Understand WPA3 improvements.

**Feature comparison:**

| Feature | WPA2 | WPA3 |
|---------|------|------|
| Key exchange | | |
| Encryption | | |
| Forward secrecy | | |
| Offline dictionary attack protection | | |
| Public network security | | |
| Enterprise security | | |

**WPA3 modes:**

| Mode | Description | Use Case |
|------|-------------|----------|
| WPA3-Personal | | |
| WPA3-Enterprise | | |
| Enhanced Open (OWE) | | |

**SAE (Simultaneous Authentication of Equals):**

What problem does SAE solve?

_________________________________________________________________

How is it different from PSK 4-way handshake?

_________________________________________________________________

**Forward secrecy benefit:**

If an attacker captures encrypted traffic today and obtains the password tomorrow, can they decrypt the old traffic?

| Protocol | Can Decrypt Old Traffic? | Why? |
|----------|-------------------------|------|
| WPA2-PSK | | |
| WPA3-SAE | | |

---

### Activity C: Personal vs Enterprise Mode

**Goal:** Compare authentication methods.

**WPA2/WPA3 modes:**

| Aspect | Personal (PSK) | Enterprise (802.1X) |
|--------|----------------|---------------------|
| Authentication | | |
| Key management | | |
| Scalability | | |
| User accountability | | |
| Complexity | | |
| Best for | | |

**When to use each:**

| Scenario | Mode | Reasoning |
|----------|------|-----------|
| Home network | | |
| Small coffee shop | | |
| Corporate office (500 users) | | |
| Hospital | | |
| Hotel guest network | | |
| University campus | | |

**PSK weakness:**

What happens when an employee leaves a company using WPA2-PSK?

_________________________________________________________________

How does Enterprise mode solve this?

_________________________________________________________________

---

### Activity D: 802.1X and EAP Deep Dive

**Goal:** Understand enterprise wireless authentication.

**802.1X components:**

| Component | Role | Example |
|-----------|------|---------|
| Supplicant | | |
| Authenticator | | |
| Authentication Server | | |

**802.1X process flow:**

| Step | Action |
|------|--------|
| 1 | Client associates with AP |
| 2 | |
| 3 | |
| 4 | |
| 5 | |
| 6 | |

**EAP method comparison:**

| EAP Method | Authentication | Certificates | Security Level |
|------------|----------------|--------------|----------------|
| EAP-TLS | | | |
| EAP-TTLS | | | |
| PEAP | | | |
| EAP-FAST | | | |

**Certificate requirements:**

| EAP Method | Server Cert | Client Cert |
|------------|-------------|-------------|
| EAP-TLS | | |
| EAP-TTLS | | |
| PEAP | | |
| EAP-FAST | | |

**Which EAP method is most secure and why?**

_________________________________________________________________

---

### Activity E: Wireless Attack Analysis

**Goal:** Understand common wireless attacks.

**Attack types:**

| Attack | Description | Target |
|--------|-------------|--------|
| Evil twin | | |
| Rogue AP | | |
| Deauthentication | | |
| KRACK | | |
| Dragonblood | | |
| Wardriving | | |
| WPS attack | | |
| Jamming | | |

**Evil twin attack flow:**

| Step | Attacker Action |
|------|-----------------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

**How to detect evil twin:**

| Detection Method | Implementation |
|------------------|----------------|
| | |
| | |
| | |

**Deauthentication attack:**

What does it do?

_________________________________________________________________

What can it enable?

_________________________________________________________________

How to mitigate (802.11w)?

_________________________________________________________________

---

### Activity F: Wireless Security Best Practices

**Goal:** Implement wireless security controls.

**Configuration checklist:**

| Setting | Recommended | Why |
|---------|-------------|-----|
| Encryption protocol | | |
| WPS | | |
| Default SSID | | |
| Admin password | | |
| Firmware | | |
| SSID broadcast | | |
| MAC filtering | | |
| Guest network | | |
| Management interface | | |

**Password/passphrase requirements:**

| Requirement | WPA2-Personal | WPA3-Personal |
|-------------|---------------|---------------|
| Minimum length | | |
| Recommended length | | |
| Complexity | | |
| Offline attack risk | | |

**Rate the security value:**

| Control | Security Value (High/Medium/Low) | Why |
|---------|----------------------------------|-----|
| WPA3 encryption | | |
| Hidden SSID | | |
| MAC filtering | | |
| Strong passphrase | | |
| Disable WPS | | |
| Guest network isolation | | |
| Regular firmware updates | | |

---

### Activity G: Wireless Network Segmentation

**Goal:** Design secure wireless architecture.

**Network segmentation:**

| Network | Purpose | Isolation Level |
|---------|---------|-----------------|
| Corporate | | |
| Guest | | |
| IoT | | |
| Management | | |

**Guest network security:**

| Control | Implementation |
|---------|----------------|
| Captive portal | |
| Bandwidth limiting | |
| Client isolation | |
| Separate VLAN | |
| Time limits | |
| Acceptable use policy | |

**IoT network considerations:**

Why isolate IoT devices?

_________________________________________________________________

What controls should be applied?

| Control | Purpose |
|---------|---------|
| | |
| | |
| | |

---

### Activity H: Wireless Site Survey Concepts

**Goal:** Understand wireless planning and security.

**Site survey purposes:**

| Purpose | Description |
|---------|-------------|
| Coverage analysis | |
| Interference detection | |
| Capacity planning | |
| Security assessment | |

**Security-related site survey findings:**

| Finding | Security Implication |
|---------|---------------------|
| Signal bleeding outside building | |
| Channel overlap | |
| Rogue APs detected | |
| Weak signal areas | |

**Heat map analysis:**

What does a wireless heat map show?

_________________________________________________________________

Why is signal strength outside your building a security concern?

_________________________________________________________________

**Mitigation for signal leakage:**

| Method | Description |
|--------|-------------|
| | |
| | |
| | |

---

### Activity I: Captive Portal Security

**Goal:** Understand captive portal implementation.

**Captive portal uses:**

| Use Case | Purpose |
|----------|---------|
| Guest access | |
| Terms acceptance | |
| Authentication | |
| Paid access | |

**Captive portal security considerations:**

| Consideration | Best Practice |
|---------------|---------------|
| HTTPS | |
| Credential handling | |
| Session management | |
| Data collection | |
| Bandwidth limits | |

**Captive portal vs WPA2-Enterprise:**

| Aspect | Captive Portal | WPA2-Enterprise |
|--------|----------------|-----------------|
| Authentication timing | | |
| Traffic encryption | | |
| User experience | | |
| Security level | | |

**Security gap with captive portal:**

What traffic is unencrypted before captive portal authentication?

_________________________________________________________________

---

### Activity J: Wireless Intrusion Prevention

**Goal:** Understand WIPS/WIDS.

**WIPS capabilities:**

| Capability | Description |
|------------|-------------|
| Rogue AP detection | |
| Evil twin detection | |
| Deauth attack detection | |
| Unauthorized client detection | |
| Policy enforcement | |

**WIPS vs WIDS:**

| Aspect | WIDS | WIPS |
|--------|------|------|
| Detection | | |
| Prevention | | |
| Response | | |

**Detection methods:**

| Threat | Detection Method |
|--------|------------------|
| Rogue AP | |
| Evil twin | |
| Deauth flood | |
| WEP usage | |

**WIPS deployment:**

| Deployment | Description |
|------------|-------------|
| Overlay | |
| Integrated | |
| Cloud-based | |

---

### Activity K: Wireless Troubleshooting Security Issues

**Goal:** Diagnose wireless security problems.

**Common issues:**

| Symptom | Possible Security Cause | Investigation |
|---------|------------------------|---------------|
| Can't connect after password change | | |
| Intermittent disconnects | | |
| Connection but no internet | | |
| Certificate errors | | |
| Authentication failures | | |

**Scenario analysis:**

**Scenario 1:** Users report their devices keep disconnecting from the corporate WiFi every few minutes.

Possible causes:

| Cause | Likelihood | How to Confirm |
|-------|------------|----------------|
| | | |
| | | |
| | | |

**Scenario 2:** A new employee can't connect to WPA2-Enterprise. Error: "Certificate not trusted."

Troubleshooting steps:

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |

---

### Activity L: Wireless Security Policy

**Goal:** Create wireless security guidelines.

**Policy elements:**

| Element | Policy Statement |
|---------|------------------|
| Approved encryption | |
| Rogue AP prohibition | |
| Personal hotspots | |
| Guest access | |
| BYOD requirements | |
| IoT device approval | |

**Acceptable use for wireless:**

| Allowed | Prohibited |
|---------|------------|
| | |
| | |
| | |

**Enforcement mechanisms:**

| Policy Element | Enforcement Method |
|----------------|-------------------|
| Encryption requirements | |
| Rogue AP | |
| Personal hotspots | |
| Approved devices | |

---

### Tier 2 Bonus: Wireless Analysis

> ⚠️ **Requires:** Command line access

---

### Activity M: View Wireless Networks

**Windows - View available networks:**

```cmd
netsh wlan show networks mode=bssid
```

Document 3 networks:

| SSID | Security | Signal | Channel |
|------|----------|--------|---------|
| | | | |
| | | | |
| | | | |

**View current connection:**

```cmd
netsh wlan show interfaces
```

| Property | Value |
|----------|-------|
| SSID | |
| Authentication | |
| Cipher | |
| Signal | |
| Channel | |

**View saved wireless profiles:**

```cmd
netsh wlan show profiles
```

| Profile Name | Security |
|--------------|----------|
| | |
| | |

**View profile details (including key):**

```cmd
netsh wlan show profile name="ProfileName" key=clear
```

⚠️ This shows the saved password! Why is this a security concern?

_________________________________________________________________

---

### Activity N: Linux Wireless (If Available)

**View wireless interfaces:**

```bash
iwconfig
```

**Scan for networks:**

```bash
sudo iwlist wlan0 scan | grep -E "ESSID|Encryption|Quality"
```

**View connection status:**

```bash
nmcli device wifi list
```

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company currently uses WPA2-Personal with a single password shared among all 200 employees. An employee was recently terminated. What are the immediate risks, and how would you redesign the wireless security?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Users are complaining that when they connect to "CompanyWiFi" at the coffee shop across the street, they can't access company resources, and their passwords aren't working. What's likely happening, and how do you prevent it?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Management wants to disable wireless security on the guest network to make it "easier for visitors." How do you explain the risks, and what alternative do you propose?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain why WEP is broken
- [ ] Compare WPA2 and WPA3 security features
- [ ] Differentiate Personal (PSK) and Enterprise (802.1X) modes
- [ ] Describe 802.1X components and authentication flow
- [ ] Compare EAP methods (EAP-TLS, PEAP, EAP-TTLS)
- [ ] Explain common wireless attacks (evil twin, deauth, rogue AP)
- [ ] List wireless security best practices
- [ ] Design segmented wireless networks (corporate, guest, IoT)
- [ ] Understand WIPS/WIDS functionality
- [ ] Create wireless security policies

---

## What You Learned Today

- ✅ Traced wireless security evolution
- ✅ Compared WPA2 and WPA3
- ✅ Analyzed Personal vs Enterprise modes
- ✅ Deep-dived 802.1X and EAP
- ✅ Studied wireless attacks
- ✅ Reviewed security best practices
- ✅ Designed network segmentation
- ✅ Understood site survey security
- ✅ Analyzed captive portal security
- ✅ Explored WIPS/WIDS
- ✅ Troubleshot security issues
- ✅ Created security policies
- ✅ (Tier 2) Analyzed wireless networks

**Next Lab:** Identity and Access Management - authentication, authorization, and identity concepts.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 18: Wireless Security Architecture*