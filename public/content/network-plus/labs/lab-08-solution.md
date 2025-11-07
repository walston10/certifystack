# Lesson 8 Lab - Answer Key

**Network Protocols and Services**

---

## Section 1: Concept Check

1. **b) Translates domain names to IP addresses**
   - DNS = Domain Name System
   - google.com → 142.250.185.46
   - Like a phone book for the internet

2. **a) Discover, Offer, Request, Acknowledge**
   - **D**iscover: Client broadcasts "Need an IP!"
   - **O**ffer: Server responds "Here's an available IP"
   - **R**equest: Client says "I'll take it"
   - **A**cknowledge: Server confirms "It's yours"

3. **d) A**
   - A record = IPv4 address
   - AAAA record = IPv6 address
   - CNAME = alias
   - MX = mail server

4. **b) To synchronize time across devices for logging and security**
   - Accurate logs need accurate timestamps
   - HTTPS certificates check time
   - Kerberos authentication requires synced clocks
   - Security tokens expire based on time

5. **b) Port 53**
   - DNS uses port 53 (TCP and UDP)
   - One of the most important ports to memorize!

---

## Section 2: Hands-On Activity

### Activity A: DNS nslookup Results

**Expected output:**
```
C:\>nslookup google.com

Server:  dns.google
Address: 8.8.8.8

Non-authoritative answer:
Name:    google.com
Addresses:  142.250.185.46
```

**What students should find:**

**DNS server:**
- Might be your router (192.168.1.1)
- Might be ISP's DNS (varies by provider)
- Might be public DNS (8.8.8.8, 1.1.1.1)

**Google's IP:**
- Changes based on location (CDN)
- Multiple IPs possible (load balancing)
- Common ranges: 142.250.x.x, 172.217.x.x

**Amazon's IP:**
- Also varies by location
- Common: 176.32.x.x, 205.251.x.x

**Key teaching points:**
- Same domain, different IPs for different users
- Load balancing and CDN in action
- "Non-authoritative answer" means cached result

---

### Activity B: DNS Record Types

**Test 1: A Record**
```
C:\>nslookup google.com

Name:    google.com
Address: 142.250.185.46
```

**Returns:** IPv4 address (A record)

---

**Test 2: AAAA Record**
```
C:\>nslookup -type=AAAA google.com

google.com
    AAAA IPv6 address = 2607:f8b0:4004:c07::71
```

**Returns:** IPv6 address (AAAA record)

**If student gets "can't find":**
- Their DNS server might not support AAAA lookups
- Or company/school blocks IPv6 queries
- This is rare but possible

---

**Test 3: MX Record**
```
C:\>nslookup -type=MX google.com

google.com      MX preference = 10, mail exchanger = smtp.google.com
google.com      MX preference = 20, mail exchanger = alt1.gmail-smtp-in.l.google.com
```

**What this means:**
- Emails to @google.com go to these servers
- Lower preference number = higher priority
- Multiple MX records = redundancy

**Students might see different servers** - that's normal!

---

**Test 4: NS Record**
```
C:\>nslookup -type=NS google.com

google.com      nameserver = ns1.google.com
google.com      nameserver = ns2.google.com
google.com      nameserver = ns3.google.com
google.com      nameserver = ns4.google.com
```

**What this means:**
- These DNS servers are authoritative for google.com
- Multiple NS records = redundancy
- If one fails, others still work

---

**DNS Record Type Summary:**

| Record | Purpose | Example |
|--------|---------|---------|
| A | IPv4 address | google.com → 142.250.185.46 |
| AAAA | IPv6 address | google.com → 2607:f8b0::71 |
| CNAME | Alias (canonical name) | www.example.com → example.com |
| MX | Mail server | google.com → smtp.google.com |
| NS | Name server | google.com → ns1.google.com |
| PTR | Reverse lookup | 142.250.185.46 → google.com |
| TXT | Text info | SPF, DKIM for email validation |
| SOA | Start of Authority | Zone info, serial number |

---

### Activity C: DNS Caching

**First lookup (not cached):**
- Takes ~10-50ms
- Has to query DNS server
- May query multiple servers (recursive)

**Second lookup (cached):**
- Takes <1ms
- Instant response from cache
- No network query needed

**After flushing cache:**
- Back to ~10-50ms
- Cache was cleared
- Has to query again

**Why caching matters:**
- Faster browsing (instant lookups)
- Reduces DNS server load
- Reduces network traffic
- But can cause issues if cache is stale

**TTL (Time To Live):**
- DNS records have TTL (seconds until expired)
- Typical: 300 seconds (5 minutes) to 86400 (1 day)
- After TTL expires, must re-query

---

### Activity D: DHCP Configuration

**Expected output (Windows):**
```
Wireless LAN adapter Wi-Fi:
   DHCP Enabled. . . . . . . . . . . : Yes
   IPv4 Address. . . . . . . . . . . : 192.168.1.105
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : 192.168.1.1
   DHCP Server . . . . . . . . . . . : 192.168.1.1
   DNS Servers . . . . . . . . . . . : 192.168.1.1
                                       8.8.8.8
   Lease Obtained. . . . . . . . . . : Monday, November 4, 2024 10:15:32 AM
   Lease Expires . . . . . . . . . . : Tuesday, November 5, 2024 10:15:32 AM
```

**Typical lease times:**
- Home routers: 24 hours (1 day)
- Corporate networks: 8 hours
- Guest networks: 1-4 hours

**Why different lease times?**
- Short leases: Mobile devices, limited IPs
- Long leases: Stable devices, plenty of IPs

**DHCP server is usually:**
- Your home router (192.168.1.1)
- OR a dedicated DHCP server in businesses

**DNS servers might be:**
- Router itself (192.168.1.1) - acts as proxy
- ISP's DNS (varies)
- Public DNS (8.8.8.8, 1.1.1.1) - if manually configured

---

### Activity E: DHCP DORA Process

**Step 1: Release**
```
C:\>ipconfig /release

Windows IP Configuration
   (Connection shows no IP)
```

**Step 2: Check IP**
```
C:\>ipconfig

IPv4 Address. . . . . . . . . . . : 0.0.0.0
```

**What just happened:**
- Your computer broadcasted DHCPRELEASE
- Told server "I'm giving this IP back"
- Now has NO IP address
- Can't access network!

---

**Step 3: Renew**
```
C:\>ipconfig /renew

Windows IP Configuration

Wireless LAN adapter Wi-Fi:
   IPv4 Address. . . . . . . . . . . : 192.168.1.105
```

**The DORA process (under the hood):**

1. **DISCOVER (broadcast):**
   ```
   Client → Broadcast (255.255.255.255)
   "I need an IP! My MAC is AA:BB:CC:DD:EE:FF"
   ```

2. **OFFER (unicast):**
   ```
   Server → Client
   "Here's 192.168.1.105 for you. Valid for 24 hours."
   ```

3. **REQUEST (broadcast):**
   ```
   Client → Broadcast
   "I accept 192.168.1.105 from server 192.168.1.1"
   ```
   (Broadcast so other DHCP servers know)

4. **ACKNOWLEDGE (unicast):**
   ```
   Server → Client
   "Confirmed! 192.168.1.105 is yours.
   Gateway: 192.168.1.1
   DNS: 8.8.8.8
   Lease: 24 hours"
   ```

**Result:**
- Might get same IP (if available)
- Might get different IP (if old one taken)
- Entire process takes <1 second

---

**Lease renewal (automatic):**
- At 50% of lease: Try to renew with same server
- At 87.5% of lease: Broadcast to any DHCP server
- At 100%: Must release IP and start over

**Example with 24-hour lease:**
- Hour 0: Get IP (192.168.1.105)
- Hour 12: Automatically request renewal (usually succeeds)
- Hour 21: If renewal failed, broadcast request
- Hour 24: If still no response, release IP

---

### Activity F: NTP Status

**Windows (w32tm):**
```
C:\>w32tm /query /status

Leap Indicator: 0(no warning)
Stratum: 3 (secondary reference - syncd by NTP)
Precision: -23 (119.209ns per tick)
Root Delay: 0.0156250s
Poll Interval: 10 (1024s)
Source: time.windows.com
Last Successful Sync Time: 11/4/2024 2:15:32 PM
```

**What this shows:**
- **Stratum 3:** Your computer syncs from a Stratum 2 server
- **Source:** time.windows.com (Microsoft's NTP server)
- **Last sync:** Recent = good!

**Stratum levels:**
- **0:** Atomic clocks, GPS satellites (ultimate source)
- **1:** Servers directly connected to Stratum 0 (primary time servers)
- **2:** Servers syncing from Stratum 1 (secondary time servers)
- **3:** Your computer/router (typical)
- **4+:** Further away from source (less accurate)

**Accuracy:**
- Stratum 1: ~1 microsecond
- Stratum 2: ~1 millisecond
- Stratum 3: ~10 milliseconds (still very good!)

---

**Mac/Linux:**
- Built-in time sync usually runs automatically
- Check System Preferences/Settings for NTP source
- Common sources: time.apple.com, pool.ntp.org

**Why it matters:**
1. **Logging:** Need accurate timestamps
2. **HTTPS:** Certificates have validity dates
3. **Kerberos:** Authentication requires time sync within 5 minutes
4. **Security tokens:** 2FA codes expire based on time
5. **Database transactions:** Ordering events correctly

---

### Activity G: DNS Server Comparison

**Your default DNS:**
- Usually router or ISP
- Varies in speed
- May filter content (parental controls, etc.)

**Google DNS (8.8.8.8):**
- Fast, reliable
- No filtering (except malware)
- Collects usage data

**Cloudflare DNS (1.1.1.1):**
- Often fastest
- Privacy-focused (claims no logging)
- No filtering

**Typical results:**
- Cloudflare: 10-20ms
- Google: 15-25ms
- ISP DNS: 20-50ms (varies widely)

**Why Cloudflare is often fastest:**
- Massive global network (anycast)
- Aggressive caching
- Optimized infrastructure

**When to use which:**
- **Fast browsing:** Cloudflare (1.1.1.1)
- **Reliability:** Google (8.8.8.8)
- **Parental controls:** OpenDNS (208.67.222.222)
- **Privacy:** Cloudflare or Quad9 (9.9.9.9)

---

### Activity H: DNS Troubleshooting

**Scenario 1: Ping IP works, ping domain fails**

```
C:\>ping 8.8.8.8
Reply from 8.8.8.8: time=15ms ✅

C:\>ping google.com
Ping request could not find host google.com ❌
```

**Diagnosis:** DNS problem (not network problem)

**Why?**
- Layer 1-3 working (can reach IPs)
- Layer 7 broken (DNS resolution fails)

**Solutions:**
1. Check DNS settings: `ipconfig /all`
2. Try different DNS: `nslookup google.com 8.8.8.8`
3. Flush DNS cache: `ipconfig /flushdns`
4. Restart router (if it's your DNS server)
5. Manually set DNS to 8.8.8.8

---

**Scenario 2: Test DNS is responding**

```
C:\>nslookup test-site-that-doesnt-exist-12345.com

Server:  google-public-dns-a.google.com
Address: 8.8.8.8

*** google-public-dns-a.google.com can't find test-site-that-doesnt-exist-12345.com: Non-existent domain
```

**This is GOOD!**
- DNS server responded (not timeout)
- Told you domain doesn't exist
- Proves DNS is working

**If you got timeout:**
- DNS server isn't responding
- Network problem or DNS server down

---

**Common DNS issues:**

| Symptom | Cause | Solution |
|---------|-------|----------|
| Can't resolve any names | DNS server down | Change to 8.8.8.8 |
| Some sites work, others don't | DNS filtering/blocking | Try different DNS |
| Slow DNS lookups | Far away DNS server | Use closer DNS (1.1.1.1) |
| Gets wrong IP | DNS poisoning/cache | Flush cache, check hosts file |
| Works on one device, not another | Device-specific DNS config | Check device DNS settings |

---

### Activity I: Real-World Investigation

**Example: reddit.com**

**IPv4 (A record):**
```
C:\>nslookup reddit.com

Name:    reddit.com
Addresses:  151.101.1.140
            151.101.65.140
            151.101.129.140
            151.101.193.140
```

**Multiple IPs!** Load balancing across servers.

---

**Mail server (MX record):**
```
C:\>nslookup -type=MX reddit.com

reddit.com      MX preference = 10, mail exchanger = aspmx.l.google.com
reddit.com      MX preference = 20, mail exchanger = alt1.aspmx.l.google.com
```

**Reddit uses Google's mail servers!** (Gmail for business)

---

**Name servers (NS record):**
```
C:\>nslookup -type=NS reddit.com

reddit.com      nameserver = ns-1029.awsdns-00.org
reddit.com      nameserver = ns-1887.awsdns-43.co.uk
reddit.com      nameserver = ns-378.awsdns-47.com
reddit.com      nameserver = ns-556.awsdns-05.net
```

**Reddit uses AWS (Amazon) DNS!** Four name servers for redundancy.

---

**What this teaches:**
- Big sites use multiple IPs (load balancing)
- Many sites outsource email (Google, Microsoft)
- DNS infrastructure is distributed (AWS, Cloudflare, etc.)
- Redundancy is key (multiple NS, MX records)

---

## Section 3: Reflection

**1. What if DNS stopped working worldwide?**

**Immediate impact:**
- No browsing by domain name (google.com won't work)
- Could still access IPs directly (142.250.185.46)
- Most users couldn't use internet at all

**What would break:**
- Web browsing (unless you know IPs)
- Email (unless you know mail server IPs)
- Apps (most rely on domain names)
- HTTPS certificates (domain validation)

**What would still work:**
- Direct IP access
- Local network (if using IPs)
- Pre-resolved connections

**Why "phone book of internet":**
- Phone book: Name → Phone number
- DNS: Domain → IP address
- Without it, you'd need to memorize IPs!

---

**2. DHCP lease expiration:**

**Normal process:**
- Lease expires
- Computer automatically requests renewal
- Gets same or new IP
- User never notices!

**If DHCP server is down at renewal:**
- Computer keeps using old IP (grace period)
- Broadcasts for any DHCP server
- If no response, keeps old IP until reboot
- Eventually gives up → APIPA (169.254.x.x)

**DHCP server crash impact:**
- **Existing devices:** Keep working (have IPs)
- **New devices:** Can't get IPs (can't join network)
- **Users notice:** After hours/days when leases expire

---

**3. Why accurate time matters:**

**HTTPS certificates:**
- Valid from date X to date Y
- If your clock says it's 2020, certificate looks expired
- Browser blocks "insecure" sites

**Logging:**
- Can't correlate events across systems
- "User logged in at 3pm" vs "file deleted at 2pm" - which happened first?
- Security investigations become impossible

**Kerberos authentication:**
- Requires clocks within 5 minutes
- Off by 6 minutes? Can't log in to domain

**2FA/Security tokens:**
- Time-based codes (valid for 30 seconds)
- Wrong time = wrong code = can't log in

**Database transactions:**
- Ordering matters
- Transaction A at 10:00:01, Transaction B at 10:00:00
- Wrong order = data corruption

---

**4. DHCP server crashes:**

**How quickly users notice:**
- **Existing users:** Don't notice immediately (have IPs)
- **New devices:** Notice right away (can't connect)
- **As leases expire:** More users affected over time

**Timeline (with 8-hour leases):**
- Hour 0: DHCP crashes - nobody notices yet
- Hour 1: New devices can't connect - IT gets calls
- Hour 4: 50% of leases try to renew - fail, but keep working
- Hour 6: Users start getting APIPA (169.254.x.x) - complaints increase
- Hour 8: Most users offline - emergency!

**What happens to existing connections:**
- Keep working! (already have IP)
- But can't renew
- Eventually timeout and get APIPA

**What happens to new devices:**
- Discover → no response
- Get APIPA address
- Link-local only (can't reach internet)

**Solution:**
- Restore DHCP server ASAP
- Users run `ipconfig /release` then `/renew`
- Or wait for automatic retry

---

## Key Concepts Summary

**DNS:**
- Translates names to IPs
- Port 53
- Record types: A, AAAA, CNAME, MX, NS, PTR, TXT
- Cached for performance
- Hierarchical (root → TLD → authoritative)

**DHCP:**
- Automatic IP addressing
- DORA process (Discover, Offer, Request, Acknowledge)
- Lease time determines IP duration
- Ports 67 (server), 68 (client)

**NTP:**
- Time synchronization
- Port 123
- Stratum levels (0-15)
- Critical for security and logging

---

## Exam Tips

**Memorize:**
- DNS = Port 53
- DHCP = Ports 67/68
- NTP = Port 123
- DORA process order
- Common DNS records (A, AAAA, MX, CNAME)

**Troubleshooting:**
- Can ping IP but not domain? → DNS problem
- Getting 169.254.x.x? → DHCP problem
- Clock wrong? → NTP problem

**Common questions:**
- "What does DNS do?" → Name resolution
- "What is the DHCP process?" → DORA
- "Why is time sync important?" → Logging, security, certificates

---

## Did It Work?

If you were able to:
- ✅ Use nslookup to query DNS
- ✅ Look up different DNS record types
- ✅ See DNS caching in action
- ✅ Find your DHCP configuration
- ✅ Manually trigger DHCP DORA process
- ✅ Check NTP synchronization
- ✅ Compare different DNS servers
- ✅ Troubleshoot DNS issues
- ✅ Investigate real DNS infrastructure

**You understand network services!**

These protocols (DNS, DHCP, NTP) are the foundation of modern networks. Every time you browse the web, your computer is using all three!

**Next:** Port numbers - time to memorize!