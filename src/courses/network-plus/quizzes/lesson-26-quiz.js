// Quiz for Lesson 26: Wireless Security (WPA3, EAP)

export const lesson26Quiz = [
  {
    id: 1,
    question: "A small business currently uses WPA2-Personal with a shared password for their wireless network. They want to upgrade security without deploying complex authentication infrastructure. What should they implement?",
    options: [
      "Downgrade to WEP for simplicity",
      "Upgrade to WPA3-Personal which provides stronger encryption, forward secrecy, and protection against offline dictionary attacks",
      "Switch to WPA2-Enterprise requiring RADIUS server",
      "Use WPA with TKIP encryption"
    ],
    correct: 1,
    explanation: "WPA3-Personal improvements over WPA2-Personal: 1) SAE (Simultaneous Authentication of Equals) replaces PSK—protects against offline dictionary attacks (attacker can't capture handshake and crack offline), 2) 192-bit encryption support, 3) Forward secrecy (past sessions secure even if password compromised), 4) Protection against KRACK attacks, 5) Easy transition from WPA2 (Transition Mode supports both). WPA2-Personal vulnerable to: dictionary/brute force on captured handshakes, KRACK attacks. WPA3-Personal requires: no infrastructure changes (no RADIUS needed), compatible client devices (newer phones/laptops support WPA3), same ease of use (still uses password). Best for: homes, small businesses, scenarios where 802.1X is overkill."
  },
  {
    id: 2,
    question: "An enterprise deploys WPA2-Enterprise with 802.1X authentication using EAP-TLS. Users complain about complex setup requiring certificate installation. What makes EAP-TLS the most secure but complex EAP method?",
    options: [
      "EAP-TLS only requires usernames and passwords",
      "EAP-TLS requires digital certificates on both client and server, providing mutual authentication without password transmission",
      "EAP-TLS is the fastest authentication method",
      "EAP-TLS doesn't require any RADIUS server"
    ],
    correct: 1,
    explanation: "EAP methods comparison: 1) EAP-TLS (most secure): requires client certificate + server certificate, mutual authentication (both sides verify each other), no password transmitted, PKI infrastructure required, complex deployment. 2) PEAP-MSCHAPv2 (common): server certificate only, client uses password in encrypted tunnel, easier deployment, Microsoft support. 3) EAP-TTLS: similar to PEAP, supports various inner authentication methods. 4) EAP-FAST: Cisco, uses PACs instead of certificates. EAP-TLS advantages: impossible to phishing (no passwords), strongest authentication, resistant to password attacks. Disadvantages: certificate management (issuance, renewal, revocation), user friction (installation), PKI overhead. Use cases: high-security environments (government, defense), when maximum security justifies complexity."
  },
  {
    id: 3,
    question: "A coffee shop offers free public WiFi using an open network (no encryption). They want to add minimal security without requiring passwords. What WPA3 feature addresses this use case?",
    options: [
      "WPA3-Enterprise with 802.1X",
      "WPA3-Personal with complex password",
      "WPA3 Enhanced Open (OWE) providing encryption without authentication",
      "WEP with shared key"
    ],
    correct: 2,
    explanation: "WPA3 Enhanced Open (OWE - Opportunistic Wireless Encryption): encrypts traffic on open networks without authentication. Solves problem: open WiFi (airports, coffee shops, hotels) transmitted unencrypted—easily sniffed. OWE benefits: 1) Encryption without passwords (seamless user experience), 2) Protection against passive eavesdropping, 3) Backward compatible (devices fall back to open if no OWE support), 4) No user configuration needed. Limitations: 1) No authentication (anyone can connect), 2) No protection against active attacks (evil twin), 3) Client support required. Use cases: public WiFi where access control not needed but privacy desired. Not a replacement for WPA2/3-Enterprise in corporate environments—different threat models. Users should still use VPN over public WiFi for end-to-end encryption."
  },
  {
    id: 4,
    question: "A university deploys WPA2-Enterprise with PEAP-MSCHAPv2 for student WiFi. Security testing reveals that attackers can set up rogue access points and capture MSCHAPv2 hashes from clients that connect. What configuration mistake enables this attack?",
    options: [
      "Using WPA2 instead of WPA3",
      "Not validating the RADIUS server certificate on client devices, allowing evil twin attacks",
      "Using PEAP instead of open authentication",
      "Having too many access points"
    ],
    correct: 1,
    explanation: "PEAP security critical requirement: client must validate server certificate. Attack scenario: 1) Attacker creates evil twin AP mimicking legitimate SSID, 2) Client connects (doesn't validate server certificate), 3) Attacker's fake RADIUS server challenges client, 4) Client sends MSCHAPv2 hash, 5) Attacker cracks hash offline. Prevention: 1) Configure clients to validate certificate (check certificate name, trusted CA), 2) Certificate pinning, 3) Deploy correct server certificate (name matches, valid CA), 4) User training (connect to legitimate network). PEAP protection model: outer TLS tunnel (protected by server certificate) contains inner authentication (MSCHAPv2). If outer tunnel not validated, inner authentication exposed. Similar issue with EAP-TTLS. EAP-TLS immune (mutual authentication). Enterprise wireless: proper certificate validation essential—default client behavior often skips validation (convenience over security)."
  },
  {
    id: 5,
    question: "An organization uses WPA2-Personal on their guest network. A consultant uses a tool to capture the 4-way handshake and later cracks the PSK offline using a dictionary attack. What WPA3 feature would prevent this attack?",
    options: [
      "WPA3 uses the same 4-way handshake as WPA2",
      "WPA3-Personal uses SAE (Dragonfly) which is resistant to offline dictionary attacks because the handshake cannot be captured and cracked offline",
      "WPA3 requires biometric authentication",
      "WPA3 doesn't use passwords"
    ],
    correct: 1,
    explanation: "WPA2-Personal vulnerability: 4-way handshake can be captured passively, PSK cracked offline with dictionary/brute force (tools: aircrack-ng, hashcat). No rate limiting (attacker computes millions of guesses per second). WPA3-Personal SAE (Simultaneous Authentication of Equals / Dragonfly): 1) Resistant to offline dictionary attacks (can't capture and crack), 2) Password remains secure even if handshake captured, 3) Forward secrecy (compromised PSK doesn't decrypt past sessions), 4) Anti-clogging tokens (DoS protection). SAE operation: both parties prove knowledge of password without transmitting it, derives session key, even weak passwords protected better. Migration: WPA3 Transition Mode (allows both WPA2 and WPA3 clients), eventually WPA3-only. Recommendation: strong passwords still important, but WPA3 dramatically increases cracking difficulty."
  },
  {
    id: 6,
    question: "A company's wireless network uses WPA2-Enterprise with EAP-TTLS. The security team wants to transition to WPA3-Enterprise for maximum security. What encryption strength does WPA3-Enterprise provide in its most secure mode?",
    options: [
      "128-bit encryption only",
      "WPA3-Enterprise offers 192-bit security mode with stronger encryption, key derivation, and management frame protection",
      "64-bit encryption for compatibility",
      "No encryption, only authentication"
    ],
    correct: 1,
    explanation: "WPA3-Enterprise features: 1) 192-bit security suite (optional—for high-security networks): GCMP-256 encryption, HMAC-SHA-384 for key derivation, ECDHE-384 for key exchange, ECDSA-384 for authentication. 2) Mandatory management frame protection (MFP/802.11w), 3) Protected Management Frames (prevents deauth attacks), 4) Forward secrecy. Standard WPA3-Enterprise: 128-bit (like WPA2), but with improved protocols. 192-bit mode: government, defense, critical infrastructure. Requirements: supports only EAP-TLS (certificate-based), requires WPA3-capable infrastructure (APs, controllers, clients), no backward compatibility with WPA2 in 192-bit mode. Benefits over WPA2-Enterprise: protection against KRACK, stronger crypto, mandatory MFP. Migration path: WPA3-Enterprise (128-bit) with WPA2 compatibility, then WPA3-only, finally 192-bit mode if needed."
  },
  {
    id: 7,
    question: "A wireless network uses WPA2 with WPS (WiFi Protected Setup) enabled for easy device onboarding. A security audit flags this as high-risk. What vulnerability does WPS introduce?",
    options: [
      "WPS is completely secure with no vulnerabilities",
      "WPS PIN method is vulnerable to brute force attacks allowing recovery of the WPA2 password in hours",
      "WPS only works with WPA3",
      "WPS improves security by adding extra authentication"
    ],
    correct: 1,
    explanation: "WPS (WiFi Protected Setup) vulnerability: PIN method susceptible to brute force. WPS PIN: 8-digit number, but last digit is checksum (7 digits effective). Attack: PIN verified in two halves (first 4 digits, then last 3), reduces complexity to ~11,000 attempts (easily brute-forced in hours with tools like Reaver). Success: attacker recovers WPA2 password even if password is complex. WPS methods: 1) PIN (vulnerable), 2) Push-button (safer but physical access), 3) NFC, 4) USB. Recommendation: disable WPS entirely, especially PIN method, use alternative onboarding (QR codes, provisioning profiles, proper configuration). WPS vulnerability discovered 2011, still present in many devices. Disabling WPS: access AP settings, disable WPS, verify disabled (some devices re-enable on reboot). Security vs convenience trade-off—WPS convenience not worth security risk."
  },
  {
    id: 8,
    question: "An enterprise implements 802.1X with RADIUS for wireless authentication. A user's credentials are compromised. The security team wants to prevent the compromised account from authenticating to the wireless network. What should they do?",
    options: [
      "Change the WiFi password network-wide",
      "Disable or delete the user account in the authentication backend (Active Directory, LDAP) that RADIUS queries",
      "Replace all wireless access points",
      "Change the RADIUS server IP address"
    ],
    correct: 1,
    explanation: "802.1X centralized authentication: RADIUS server queries backend directory (Active Directory, LDAP, local database) for credential verification. Account management: disable/delete compromised account in backend directory, change takes effect immediately (next authentication attempt fails), no network infrastructure changes needed. WPA2-Enterprise benefits over Personal: 1) Individual user credentials (not shared password), 2) Granular control (enable/disable per user), 3) Audit trail (who connected when), 4) Credential rotation (users change password, no network reconfiguration). Incident response: compromised credentials → disable account → investigate → force password change → re-enable with new credentials. Contrast with WPA2-Personal: compromised PSK requires changing shared password on every device (disruptive). Enterprise-grade authentication essential for organizations needing access control, compliance, accountability."
  },
  {
    id: 9,
    question: "A company deploys wireless with MAC address filtering, believing it provides adequate security. An attacker observes allowed MAC addresses and spoofs one to gain access. What security principle does this demonstrate?",
    options: [
      "MAC filtering provides strong security and cannot be bypassed",
      "MAC filtering is security through obscurity and easily bypassed via MAC spoofing—not a substitute for proper encryption and authentication",
      "MAC filtering is better than WPA3",
      "Attackers cannot spoof MAC addresses"
    ],
    correct: 1,
    explanation: "MAC filtering limitations: 1) MAC addresses transmitted in clear (easy to observe with WiFi sniffer), 2) Trivial to spoof MAC (software change), 3) Administrative overhead (add every authorized device), 4) No encryption of data, 5) False sense of security. Bypass: 1) Attacker monitors network (captures allowed MACs), 2) Changes their MAC to allowed address (ifconfig, ip link, Windows registry), 3) Connects successfully. Security through obscurity: relies on attacker not knowing method—fails when method discovered. Proper wireless security: 1) WPA2/WPA3 encryption, 2) Strong authentication (WPA3-Personal or WPA2/3-Enterprise), 3) Certificate validation, 4) Network segmentation, 5) Monitoring. MAC filtering acceptable as additional layer (defense in depth) but never as primary security. Similar issues: SSID hiding (easily discoverable), disabling broadcast (minor inconvenience). Focus on cryptographic security, not obscurity."
  },
  {
    id: 10,
    question: "An attacker performs a deauthentication attack, sending spoofed deauth frames to disconnect clients from an access point, then presenting an evil twin AP. What WPA3 and 802.11w feature protects against deauthentication attacks?",
    options: [
      "Stronger encryption algorithms",
      "Protected Management Frames (PMF/MFP) which encrypts and authenticates management frames preventing spoofing",
      "Faster roaming protocols",
      "Better antenna technology"
    ],
    correct: 1,
    explanation: "Management Frame Protection (802.11w/MFP/PMF): encrypts and authenticates management frames (deauth, disassociate, action frames). Without MFP: management frames unencrypted/unauthenticated, easily spoofed, enables attacks: 1) Deauthentication attack (DoS, force reconnection to evil twin), 2) Disassociation attacks. With MFP: management frames protected, spoofed frames detected and dropped, client ignores unauthorized deauth. WPA3 mandates MFP: all WPA3 networks have MFP enabled (Personal and Enterprise). WPA2 supports MFP: optional, should be enabled (often not by default). Configuration: enable PMF on AP and clients (required, capable, or disabled). Benefits: prevents wireless DoS, protects against evil twin attacks (combined with certificate validation), improves security posture. Limitation: requires client support (modern devices support, legacy may not). MFP essential for secure wireless—prevents common attack vector."
  },
  {
    id: 11,
    question: "A government agency deploys wireless requiring the highest security. They implement WPA3-Enterprise with 192-bit mode and EAP-TLS. What additional RADIUS configuration provides fault tolerance and load balancing?",
    options: [
      "Single RADIUS server is sufficient",
      "Multiple RADIUS servers in primary/secondary configuration, with APs attempting secondary if primary fails",
      "RADIUS servers are not needed for WPA3",
      "Client devices handle all authentication locally"
    ],
    correct: 1,
    explanation: "RADIUS redundancy: high availability essential for enterprise wireless (RADIUS failure = no authentication = network outage). Implementation: 1) Multiple RADIUS servers (primary, secondary, tertiary), 2) APs configured with multiple RADIUS IPs and shared secrets, 3) Failover logic (primary times out → try secondary), 4) Load balancing (round-robin, weighted distribution), 5) RADIUS proxy/clustering (advanced). Configuration on AP: Primary RADIUS: 10.1.1.10 (port 1812), Secondary: 10.1.1.11 (port 1812), timeout 5 seconds, retries 3. Best practices: 1) RADIUS servers on different subnets/locations (avoid single point of failure), 2) Monitor RADIUS server health, 3) Consistent user database (replicated AD, LDAP), 4) Shared secrets managed securely. Testing: simulate primary failure, verify secondary takeover, measure failover time. Enterprise-grade deployment requires redundancy at every layer: RADIUS, controllers, APs, switches, internet."
  },
  {
    id: 12,
    question: "A company has separate wireless networks: corporate (WPA2-Enterprise), guest (WPA2-Personal), and IoT (WPA2-Personal). Each network has different security requirements. What wireless infrastructure feature allows multiple SSIDs with different security policies on the same physical APs?",
    options: [
      "Wireless networks require separate physical APs for each SSID",
      "Multiple SSIDs/VLANs on the same AP, each with independent security settings and network segmentation",
      "Only one SSID is possible per access point",
      "All SSIDs must use identical security settings"
    ],
    correct: 1,
    explanation: "Multiple SSID configuration: single AP broadcasts multiple SSIDs, each with: independent security (WPA2-Personal, WPA2-Enterprise, WPA3, open), separate VLAN assignment, different authentication servers, bandwidth limits per SSID. Example configuration: SSID 'CorpNet' → WPA2-Enterprise (RADIUS 10.1.1.10) → VLAN 10, SSID 'Guest' → WPA2-Personal → VLAN 99, SSID 'IoT' → WPA2-Personal → VLAN 40. Benefits: 1) Cost efficiency (fewer APs), 2) Network segmentation, 3) Appropriate security per use case, 4) Simplified management. Limitations: 1) Performance (management overhead per SSID), 2) Airtime fairness (one SSID can consume excessive airtime), 3) Typically limit to 4-8 SSIDs per radio. Best practices: minimize SSIDs (each adds overhead), name clearly, disable unused SSIDs, monitor per-SSID statistics. Essential for multi-tenant, enterprise environments with diverse device types and security requirements."
  },
  {
    id: 13,
    question: "An organization enables WPA3 Transition Mode on their wireless network. What does Transition Mode allow?",
    options: [
      "Only WPA3 devices can connect",
      "Both WPA2 and WPA3 clients can connect to the same SSID, facilitating gradual migration",
      "WPA3 is disabled entirely",
      "Only WPA1 devices can connect"
    ],
    correct: 1,
    explanation: "WPA3 Transition Mode: SSID accepts both WPA2 and WPA3 clients, facilitating migration without forcing immediate upgrade. Operation: WPA3 clients use SAE, WPA2 clients use PSK/4-way handshake, same SSID, different security protocols per client capability. Benefits: 1) Gradual migration (upgrade clients over time), 2) Compatibility with legacy devices (older phones, IoT), 3) No user disruption, 4) Network remains operational during transition. Security considerations: 1) Mixed security strength (WPA2 clients less secure), 2) Potential downgrade attacks (force client to use WPA2), 3) Monitor client distribution (track WPA3 adoption). Migration path: Start: WPA2-only → Transition Mode (both) → monitor adoption → eventually WPA3-only (when legacy devices gone/replaced). Timeline: months to years depending on device lifecycle. Alternatives: separate SSIDs (WPA2-Old, WPA3-New) but more complex. Transition Mode pragmatic approach balancing security improvement with operational reality of mixed device environments."
  },
  {
    id: 14,
    question: "A penetration tester uses a WiFi Pineapple to create an evil twin access point mimicking the corporate wireless network. Users inadvertently connect and their credentials are captured. What defense best prevents this attack?",
    options: [
      "Stronger WiFi passwords",
      "Certificate validation on WPA2-Enterprise (clients verify server certificate) and user training to recognize suspicious connection prompts",
      "Increasing wireless signal strength",
      "Using WPA2-Personal instead of Enterprise"
    ],
    correct: 1,
    explanation: "Evil twin attack: attacker creates rogue AP with same SSID, stronger signal, or legitimate AP impersonation. Defenses: 1) WPA2-Enterprise with certificate validation (client verifies RADIUS server certificate—evil twin has invalid/self-signed cert), 2) Certificate pinning (accept only specific certificates), 3) User training (warning prompts about certificates, don't click through), 4) MFP/PMF (prevents deauth attacks forcing reconnection), 5) Wireless IPS (detects rogue APs), 6) Regular RF scans. WPA2-Personal vulnerable: no server certificate, clients can't distinguish legitimate from evil twin (both use same PSK if attacker knows it). Enterprise advantage: cryptographic verification of network authenticity, not just shared secret. User behavior critical: users often ignore certificate warnings (click through), training must emphasize: verify certificate name matches, don't accept untrusted certificates, report suspicious prompts. Technical + human defenses required—single control insufficient."
  },
  {
    id: 15,
    question: "A company deploys WPA2-Enterprise wireless but wants to add an additional layer of security by limiting which devices can authenticate even with valid user credentials. What 802.1X feature provides this control?",
    options: [
      "SSID hiding provides sufficient device control",
      "Device authorization via MAC-based authentication or certificate-based device identity in addition to user authentication",
      "WPA2-Personal with strong password",
      "Reducing wireless signal strength"
    ],
    correct: 1,
    explanation: "802.1X device authorization: authenticate both user AND device before granting access. Implementation methods: 1) Certificate-based device identity (EAP-TLS with device certificate + user certificate), 2) MAC Authentication Bypass (MAB)—RADIUS checks device MAC, 3) Machine authentication (AD computer account), 4) NAC posture assessment (device compliance checks). Use cases: 1) BYOD environments (allow only registered devices), 2) Prevent credential sharing (valid user on unauthorized device denied), 3) Compliance (only managed devices access corporate resources), 4) Device lifecycle (automatically remove decommissioned devices). Configuration: RADIUS policy checks device attribute (certificate, MAC) in addition to user credentials, both must pass for access grant. Benefits over MAC filtering alone: centralized control, integrated with user authentication, dynamic (device added/removed via directory), auditable. Device + user authentication = defense in depth—stronger than either alone. Modern enterprise wireless: trend toward device identity as critical security control alongside user identity."
  }
];

// Export for use in quiz component
export default lesson26Quiz;