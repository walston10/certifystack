# Lab 8: DNS Scavenger Hunt

**Objective:** Use command-line tools to investigate real DNS records, understand how DNS resolution works, and practice troubleshooting techniques.

**Time Required:** 30-40 minutes  
**Tools Needed:** Command Prompt (Windows) or Terminal (Mac/Linux)  
**Prerequisites:** Access to internet, basic command-line familiarity

---

## Introduction

Most network engineers never actually see DNS working - it's invisible. But when DNS breaks, everything stops working. Understanding how to investigate DNS records is a critical troubleshooting skill.

This lab transforms you into a network detective. Instead of memorizing theory, you'll use `nslookup` and DNS queries to discover real information about actual websites.

**What makes this different:**
- You're investigating REAL domains, not fake examples
- Every answer you find is currently active on the internet
- These are the same commands network engineers use daily
- You'll discover things about familiar websites you never knew

Let's hunt! 🔍

---

## Challenge 1: Find the Mail Servers

Email doesn't go directly from sender to recipient - it routes through mail exchange (MX) servers. Your mission: discover which servers handle email for major companies.

### Your Task:

Use `nslookup` to find MX records for these domains:

1. **google.com**
2. **microsoft.com**
3. **github.com**
4. **netflix.com**
5. **nasa.gov**

### Commands:

```
nslookup -type=MX google.com
nslookup -type=MX microsoft.com
nslookup -type=MX github.com
nslookup -type=MX netflix.com
nslookup -type=MX nasa.gov
```

### Questions to Answer:

1. Which domain has the MOST mail servers (most MX records)?
2. Which has the FEWEST?
3. What do the priority numbers mean? (Hint: lower = higher priority)
4. Why would a company have multiple MX records instead of just one?
5. Do any companies use third-party email services? (Look at the mail server names)

### What You'll Discover:

Most companies don't run their own mail servers anymore - they use Google Workspace (aspmx.l.google.com) or Microsoft 365 (*.mail.protection.outlook.com). The MX records reveal the actual infrastructure behind "professional" email addresses.

---

## Challenge 2: IPv4 vs IPv6 - The Dual Stack

Modern websites support both IPv4 (A records) and IPv6 (AAAA records). Some are IPv4-only. Let's investigate who's keeping up with the times.

### Your Task:

Check if these domains have IPv6 support:

1. **google.com**
2. **facebook.com**
3. **cloudflare.com**
4. **example.com**
5. **whitehouse.gov**

### Commands:

```
nslookup google.com
nslookup -type=AAAA google.com
```

Run both commands for each domain. The first shows IPv4 (A records), the second shows IPv6 (AAAA records).

### Questions to Answer:

1. Which domains support BOTH IPv4 and IPv6?
2. Which are IPv4-only?
3. Compare the number of IPv4 addresses vs IPv6 addresses returned
4. Why would a website have multiple IP addresses?
5. What happens if you try to visit an IPv6 address directly in your browser?

### What You'll Learn:

Major tech companies (Google, Facebook, Cloudflare) are fully IPv6-enabled. Government and older sites often lag behind. Multiple IPs indicate load balancing - traffic is distributed across several servers.

---

## Challenge 3: Reverse Lookup - Unmask the IPs

You know domain names resolve to IPs. But can you go backward? Given an IP, can you find the domain? This is called **reverse DNS lookup** using PTR records.

### Your Task:

Perform reverse lookups on these famous IPs:

1. **8.8.8.8** (Hint: This is Google's public DNS)
2. **1.1.1.1** (Hint: Cloudflare's public DNS)
3. **208.67.222.222** (Hint: OpenDNS)
4. **142.250.185.46** (One of Google's web servers)

### Commands:

```
nslookup 8.8.8.8
nslookup 1.1.1.1
nslookup 208.67.222.222
nslookup 142.250.185.46
```

### Questions to Answer:

1. What hostname does 8.8.8.8 resolve to?
2. What about 1.1.1.1?
3. Did all IPs have PTR records? (Did they all resolve to names?)
4. Why might an IP address NOT have a PTR record?
5. Why do mail servers care about reverse DNS?

### What You'll Learn:

Not all IPs have reverse DNS configured. But responsible servers (especially mail servers) should have PTR records. Many spam filters reject email from servers without valid reverse DNS because it's a sign of a sketchy setup.

---

## Challenge 4: DNS Cache Investigation

Your computer caches DNS responses to speed up browsing. Let's see what's in there.

### Your Task (Windows):

**Step 1: View your DNS cache**
```
ipconfig /displaydns
```

This will dump a LONG list of cached DNS entries. Scroll through it.

**Step 2: Visit some websites**

Open a browser and visit 3-5 websites you've never visited before. Then run `ipconfig /displaydns` again.

**Step 3: Flush the cache**
```
ipconfig /flushdns
```

**Step 4: Check again**
```
ipconfig /displaydns
```

### Your Task (Mac/Linux):

Mac:
```
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

Linux:
```
sudo systemd-resolve --flush-caches
sudo systemd-resolve --statistics
```

### Questions to Answer:

1. How many entries were in your DNS cache before flushing?
2. What was the oldest TTL you saw?
3. What was the shortest TTL?
4. After flushing the cache, did browsing feel slower?
5. When would you need to flush DNS cache in real life?

### What You'll Learn:

DNS caching is everywhere - your OS caches, your browser caches, your router caches. TTL (Time to Live) controls how long entries stay cached. Short TTLs (like 60 seconds) are used for services that change frequently. Long TTLs (like 86400 = 24 hours) are used for stable services.

**Real-world troubleshooting:** If a website recently changed servers but you're still reaching the old one, flushing DNS cache often fixes it.

---

## Challenge 5: TXT Records - The Hidden Messages

TXT records store arbitrary text. They're used for domain verification, email security (SPF, DKIM, DMARC), and even fun easter eggs.

### Your Task:

Look up TXT records for these domains:

1. **google.com**
2. **github.com**
3. **stripe.com**
4. **your-own-domain.com** (if you own one)

### Commands:

```
nslookup -type=TXT google.com
nslookup -type=TXT github.com
nslookup -type=TXT stripe.com
```

### Questions to Answer:

1. What do you see in Google's TXT records?
2. Can you identify SPF records? (They start with "v=spf1")
3. What do SPF records do? (Hint: email security)
4. Why would a company have multiple TXT records?
5. Can you find any easter eggs or interesting messages?

### What You'll Learn:

TXT records are crucial for email security. SPF (Sender Policy Framework) records list which mail servers are allowed to send email for a domain. This helps prevent email spoofing. DKIM and DMARC records (also TXT) provide additional email authentication.

**Fun fact:** Some companies hide jokes, challenges, or recruitment messages in TXT records. Tech companies sometimes use them for easter eggs.

---

## Challenge 6: CNAME Alias Hunt

CNAMEs create aliases - one name that points to another. They're commonly used for www subdomains, CDN services, and service redirection.

### Your Task:

Check if these domains use CNAMEs:

1. **www.github.com**
2. **www.reddit.com**
3. **www.stripe.com**
4. **docs.python.org**

### Commands:

```
nslookup www.github.com
nslookup www.reddit.com
nslookup www.stripe.com
nslookup docs.python.org
```

Look for lines that say "canonical name" or just show another domain name before the final IP.

### Questions to Answer:

1. Which domains use CNAME aliases?
2. What do they point to? (CDN? Different domain?)
3. Why use a CNAME instead of an A record?
4. Can you chain CNAMEs? (CNAME → CNAME → A record)
5. What happens if you query the canonical name directly?

### What You'll Learn:

Many websites use CNAMEs to point to CDN (Content Delivery Network) providers like Cloudflare, Fastly, or AWS CloudFront. This allows them to change hosting providers without updating DNS everywhere. You'll also see patterns like `www.example.com` being a CNAME to `example.com`.

---

## Challenge 7: DHCP Discovery

Now let's investigate your OWN network's DHCP setup.

### Your Task:

**Windows:**
```
ipconfig /all
```

**Mac:**
```
ipconfig getpacket en0
```

**Linux:**
```
ip addr show
nmcli device show
```

### Questions to Answer:

1. **Is DHCP enabled on your network adapter?**
2. **What is your DHCP server's IP address?**
3. **When did you obtain your current lease?**
4. **When does your lease expire?**
5. **What is your default gateway?** (DHCP Option 3)
6. **What are your DNS servers?** (DHCP Option 6)
7. **What is your subnet mask?**

### Bonus Challenge:

**Release and renew your IP:**

Windows:
```
ipconfig /release
ipconfig /renew
```

Mac/Linux:
```
sudo dhclient -r
sudo dhclient
```

What happened? Did you get the same IP or a different one?

### What You'll Learn:

Most home routers are the DHCP server (their IP will be something like 192.168.1.1 or 192.168.0.1). The lease time is often 24 hours. When you release/renew, you're manually triggering the DORA process. If you get the same IP, it's probably because the DHCP server "remembers" you from the previous lease.

---

## Challenge 8: DNS Query Speed Test

Not all DNS servers are created equal. Some are fast, some are slow. Let's compare.

### Your Task:

Query the SAME domain using different DNS servers and compare response times.

**Test these DNS servers:**
- Your ISP's default (just use `nslookup domain.com` with no server specified)
- Google: 8.8.8.8
- Cloudflare: 1.1.1.1
- Quad9: 9.9.9.9

### Commands:

```
nslookup google.com
nslookup google.com 8.8.8.8
nslookup google.com 1.1.1.1
nslookup google.com 9.9.9.9
```

Look at the response time (usually shown in milliseconds).

### Questions to Answer:

1. Which DNS server was fastest?
2. Which was slowest?
3. Did the results differ if you queried multiple times? (Caching!)
4. Why would response time matter?
5. Should you change your DNS servers based on this test?

### What You'll Learn:

DNS speed affects your browsing experience. A slow DNS server adds latency to every website you visit. Public DNS servers (Google, Cloudflare, Quad9) are often faster than ISP defaults. Cloudflare's 1.1.1.1 is specifically optimized for speed and privacy.

**Optimization tip:** Many people switch to 1.1.1.1 or 8.8.8.8 for better performance.

---

## Challenge 9: Find the Name Servers

Every domain is managed by authoritative name servers. These are the servers that have the final say on what records exist for a domain.

### Your Task:

Find the authoritative name servers (NS records) for:

1. **google.com**
2. **amazon.com**
3. **github.com**
4. **cloudflare.com**

### Commands:

```
nslookup -type=NS google.com
nslookup -type=NS amazon.com
nslookup -type=NS github.com
nslookup -type=NS cloudflare.com
```

### Questions to Answer:

1. How many name servers does each domain have?
2. Why would a domain have multiple name servers?
3. Do any domains use third-party DNS providers?
4. What happens if all name servers go down?

### What You'll Learn:

Having multiple name servers provides redundancy. If one fails, the others keep the domain online. Many companies use managed DNS providers (like AWS Route53, Cloudflare DNS, or Dyn) instead of running their own name servers. This is like using Gmail instead of running your own mail server - less work, more reliability.

---

## Challenge 10: Trace the Full DNS Path

Ever wonder what the full DNS resolution process looks like? Let's see it in action.

### Your Task (Mac/Linux only - requires dig):

```
dig google.com +trace
```

This shows the ENTIRE path from root servers → TLD servers → authoritative servers.

### Your Task (Windows alternative):

```
nslookup -debug google.com
```

Not as detailed as `dig +trace`, but shows some of the query process.

### Questions to Answer:

1. What root server did the query start with?
2. Which .com TLD servers were queried?
3. What were Google's authoritative name servers?
4. How many total queries were made?
5. How long did the entire process take?

### What You'll Learn:

This reveals the DNS hierarchy in action. You'll see that even though it seems instant, DNS resolution involves multiple queries across different servers. Fortunately, caching makes this happen only once per TTL period.

---

## Bonus Challenge: Design Your DHCP Reservations

Think about your home or school network.

### Your Task:

**Step 1:** List 5 devices that should have DHCP reservations (always get the same IP).

Examples:
- Network printer
- Gaming console
- Smart TV
- Raspberry Pi running services
- Network storage device

**Step 2:** For each device, explain:
1. Why does this device need a consistent IP?
2. What would break if its IP changed?
3. How would you find its MAC address?
4. What IP would you assign it? (Should be outside the DHCP scope)

**Step 3:** Document your plan

Create a table:

| Device | MAC Address | Assigned IP | Reason for Reservation |
|--------|-------------|-------------|------------------------|
| Printer | XX:XX:XX:XX:XX:XX | 192.168.1.10 | Port forwarding config |
| ... | ... | ... | ... |

### What You'll Learn:

DHCP reservations are the sweet spot between static IPs (manual configuration) and dynamic DHCP (convenience). You get automatic configuration with predictable addresses. This is how most businesses handle servers, printers, and infrastructure.

---

## Lab Submission

To prove you completed this lab, screenshot the following:

**Required Screenshots:**

1. **MX records for google.com** (Challenge 1)
2. **AAAA record for cloudflare.com** (Challenge 2)
3. **Reverse lookup of 8.8.8.8** (Challenge 3)
4. **Your ipconfig /all output** showing DHCP info (Challenge 7)
5. **NS records for github.com** (Challenge 9)

**Written Answers:**

Answer these questions in a document:

1. What's the difference between A and AAAA records?
2. What is the purpose of MX record priority numbers?
3. Why do mail servers need PTR records?
4. Explain the DHCP DORA process in your own words.
5. What would happen if your DNS cache never expired? (TTL = infinite)
6. Why would you use a CNAME instead of multiple A records?
7. What is the difference between recursive and iterative DNS queries?

---

## Real-World Application

These aren't just academic exercises. Here's when you'd use these skills in actual IT work:

**DNS Troubleshooting:**
- User reports "website won't load" → Check if DNS resolves correctly
- Email isn't sending → Verify MX records
- Website moved to new server → Confirm A records updated and flush cache
- Spam filter blocking emails → Check PTR records exist

**DHCP Troubleshooting:**
- Device shows 169.254.x.x → DHCP server not reachable
- "IP address conflict" error → DHCP scope overlaps with static IPs
- Device can't reach internet → Check gateway and DNS options
- Lease expired too quickly → Adjust lease time

**Network Documentation:**
- Map all DHCP scopes → Use ipconfig on devices to identify servers
- Document DNS infrastructure → Query NS records
- Plan IP address changes → Check current DNS/DHCP configuration

---

## What You Learned

✅ **How to query DNS records** using nslookup and dig

✅ **The purpose of each DNS record type** (A, AAAA, CNAME, MX, PTR, TXT, NS)

✅ **How DNS caching works** and when to flush it

✅ **How to investigate DHCP configuration** on your own network

✅ **The difference between recursive and iterative queries**

✅ **Why reverse DNS matters** for mail servers

✅ **How to troubleshoot DNS resolution failures**

✅ **Real-world DNS infrastructure** (CDNs, hosted email, managed DNS)

---

## Going Further

Want to dive deeper? Try these:

**Advanced DNS:**
- Set up your own DNS server using BIND or dnsmasq
- Configure split-horizon DNS (different answers for internal vs external queries)
- Implement DNS-based load balancing

**DHCP Deep Dive:**
- Configure DHCP server on a Raspberry Pi
- Set up DHCP relay across VLANs
- Implement DHCP snooping for security

**Monitoring:**
- Set up DNS monitoring to alert on resolution failures
- Track DHCP lease utilization
- Monitor NTP drift on network devices

**Capture the packets:**
- Use Wireshark to capture the DORA process
- Watch DNS queries in real-time
- See the difference between cached and non-cached responses

---

**Great work, detective!** 🔍

You just investigated real-world DNS infrastructure using the same tools network engineers use daily. These command-line skills will serve you well on the Network+ exam and in actual IT troubleshooting scenarios.

**Add this lab to your portfolio.** Being able to say "I can investigate DNS records, troubleshoot DHCP, and optimize network services using command-line tools" is a valuable skill in job interviews.

**Next up:** Keep these commands handy as we continue through the course. You'll use nslookup, dig, and ipconfig constantly in network troubleshooting!