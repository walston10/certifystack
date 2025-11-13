# Lesson 7: IPv6 Addressing and Configuration

**Estimated Time:** 25-30 minutes  
**Domain:** 1.0 Networking Concepts (23% of exam)  
**Exam Objectives:** 1.4 - Given a scenario, configure a subnet and use appropriate IP addressing schemes (Part 5)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain why IPv6 was created and why we need it
- Read and write IPv6 addresses in proper hexadecimal notation
- Apply both IPv6 shortening rules (remove leading zeros, compress consecutive zeros)
- Identify IPv6 address types (unicast, multicast, anycast) by their prefixes
- Configure IPv6 addresses using SLAAC and DHCPv6
- Understand EUI-64 address generation from MAC addresses
- Explain IPv6 transition mechanisms (dual-stack, tunneling, translation)
- Troubleshoot basic IPv6 connectivity issues

---

## Video Resources

**Watch these videos to reinforce the concepts:**

- **OneMarcFifty - IPv6 Addressing:** [IPv6 Overview](https://www.youtube.com/watch?v=oItwDXraK1M)
- **PowerCert - IPv6 Basics:** [IPv6 Addresses Explained](https://www.youtube.com/watch?v=ThdO9beHhpA)
- **Sunny Classroom - IPv6 Deep Dive:** [IPv6 Tutorial](https://www.youtube.com/watch?v=6g_DEcwNgp0&list=PLSNNzog5eydtb5wyH2UtK09L9MsW9Hufq)

---

## Introduction: We've Run Out of Phone Numbers

Imagine if phone numbers were only 7 digits long. That's 10 million possible numbers. Sounds like a lot, right?

Now imagine trying to give a phone number to every person on Earth (8 billion people), plus every computer, smartphone, tablet, smart TV, doorbell camera, refrigerator, car, and watch. You'd run out of numbers *fast*.

That's exactly what happened with IPv4. When the internet was designed in the 1980s, 4.3 billion addresses seemed infinite. Fast forward to today: we have over 30 billion internet-connected devices, and that number is growing exponentially with IoT (Internet of Things).

**IPv4 = We ran out of phone numbers.**  
**IPv6 = Everyone gets their own area code (actually, their own country code).**

IPv6 provides **340 undecillion addresses**. That's 340 with 36 zeros after it:

```
340,282,366,920,938,463,463,374,607,431,768,211,456
```

To put this in perspective: you could assign an IPv6 address to every atom on the surface of Earth, and still have enough addresses to do it 100 more times. We're not running out anytime soon.

**Why This Matters for the Exam:**  
IPv6 is heavily tested on the Network+ exam. You'll need to recognize IPv6 address types, shorten/expand addresses, understand autoconfiguration, and know transition mechanisms. This lesson covers everything you need.

---

## Why IPv6 Was Created

### The IPv4 Exhaustion Problem

**IPv4 has 32 bits = 2^32 = 4,294,967,296 addresses**

Sounds like a lot, but:
- **Reserved ranges:** Private addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), multicast, experimental = billions wasted
- **Inefficient allocation:** Early organizations got huge blocks (MIT got 18.0.0.0/8 = 16.7 million addresses)
- **NAT is a band-aid:** Network Address Translation lets multiple devices share one public IP, but it breaks end-to-end connectivity
- **IoT explosion:** Every device needs an IP (cars, fridges, light bulbs, thermostats)

**IANA (Internet Assigned Numbers Authority) exhausted IPv4 in 2011.** Regional registries ran out shortly after. Today, organizations buy/trade IPv4 addresses on the secondary market for $25-50 per address.

### IPv6 Solves Multiple Problems

Beyond just more addresses, IPv6 fixes:

1. **Simpler header** - No more checksums, options moved to extension headers (faster routing)
2. **No NAT required** - Every device gets a globally routable address
3. **Built-in security** - IPsec is mandatory (though rarely enforced in practice)
4. **Better mobile support** - Designed for devices that move between networks
5. **Autoconfiguration** - Devices can configure themselves without DHCP
6. **Multicast improvements** - No more broadcast storms

---

## IPv6 Address Format

### The Basics

**IPv6 addresses are 128 bits long** (vs. IPv4's 32 bits).

They're written in **hexadecimal** (base 16) instead of decimal, divided into **eight groups of four hex digits** separated by colons.

**Full IPv6 Address:**
```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

**Breaking it down:**
- **Eight groups:** 2001 : 0db8 : 85a3 : 0000 : 0000 : 8a2e : 0370 : 7334
- **Each group is 16 bits** (4 hex digits × 4 bits per hex digit = 16 bits)
- **Total:** 8 groups × 16 bits = 128 bits

**Hexadecimal reminder:**
- Digits: 0-9 (same as decimal)
- Letters: a-f (represent 10-15)
- Example: `0db8` = 0×4096 + 13×256 + 11×16 + 8×1 = 3512 (decimal)

### IPv6 vs IPv4 Comparison

| Feature | IPv4 | IPv6 |
|---------|------|------|
| Address Length | 32 bits | 128 bits |
| Notation | Decimal (192.168.1.1) | Hexadecimal (2001:db8::1) |
| Address Count | 4.3 billion | 340 undecillion |
| Header Size | 20-60 bytes (variable) | 40 bytes (fixed) |
| Fragmentation | Router can fragment | Only source can fragment |
| Broadcast | Yes | No (uses multicast) |
| Checksum | Yes | No (handled by upper layers) |
| Configuration | Manual, DHCP | SLAAC, DHCPv6, manual |
| Security | Optional (IPsec) | Mandatory (rarely enforced) |

---

## IPv6 Shortening Rules

Full IPv6 addresses are long and tedious to type. Thankfully, there are two rules to shorten them.

### Rule 1: Remove Leading Zeros

You can remove leading zeros from any group (but not trailing zeros).

**Example 1:**
```
Full:    2001:0db8:0000:0042:0000:8a2e:0370:7334
Short:   2001:db8:0:42:0:8a2e:370:7334
         └─┬─┘ └┬┘ └─┬─┘ └┬┘
           Removed leading zeros
```

**Important:** You must keep at least one digit per group.
- `0000` becomes `0` (not empty)
- `0042` becomes `42`
- `0370` becomes `370`

### Rule 2: Compress Consecutive Zeros (Double Colon)

You can replace **one** continuous string of zeros with `::` (double colon).

**Example 2:**
```
After Rule 1:  2001:db8:0:0:0:0:0:1
After Rule 2:  2001:db8::1
               └────┬────┘
                 Four groups of zeros compressed
```

**Critical Rule:** You can only use `::` **ONCE** per address. Why? Because you need to know how many zero groups were compressed.

**Example of why:**
```
If you had:  2001::db8::1
How do you expand it?
  2001:0:0:0:0:0:db8:0:0:0:1  ❌ (Too many groups)
  2001:0:0:0:db8:0:0:1        ❌ (Not enough groups)
  Ambiguous!
```

### Shortening Practice

Let's practice with some examples:

**Example A:**
```
Full:   2001:0db8:0000:0000:0000:ff00:0042:8329
Step 1: 2001:db8:0:0:0:ff00:42:8329  (Remove leading zeros)
Step 2: 2001:db8::ff00:42:8329       (Compress zeros)
```

**Example B:**
```
Full:   fe80:0000:0000:0000:0204:61ff:fe9d:f156
Step 1: fe80:0:0:0:204:61ff:fe9d:f156
Step 2: fe80::204:61ff:fe9d:f156
```

**Example C:**
```
Full:   0000:0000:0000:0000:0000:0000:0000:0001
Step 1: 0:0:0:0:0:0:0:1
Step 2: ::1                           (Loopback address!)
```

**Example D (tricky!):**
```
Full:   2001:0db8:0000:0042:0000:0000:0000:0001
Step 1: 2001:db8:0:42:0:0:0:1

Where do you put the ::?
Option A: 2001:db8::42:0:0:0:1       (Compress 1 zero group)
Option B: 2001:db8:0:42::1           (Compress 3 zero groups) ✓ Better!

Always compress the LONGEST run of zeros. If there's a tie, compress the leftmost run.
```

**Exam Tip:** The Network+ exam will give you full addresses and ask you to identify the correct shortened version. Practice this daily!

---

## IPv6 Address Types

Unlike IPv4, IPv6 doesn't have "classes" (A, B, C). Instead, addresses are identified by their **prefix** (the first bits).

### Unicast Addresses (One-to-One)

**1. Global Unicast Addresses** (like IPv4 public addresses)
- **Prefix:** `2000::/3` (starts with 2 or 3)
- **Purpose:** Routable on the internet
- **Example:** `2001:db8:85a3::8a2e:370:7334`
- **Range:** `2000::` through `3fff:ffff:ffff:ffff:ffff:ffff:ffff:ffff`

**Structure:**
```
2001:0db8:1234:5678:1234:5678:1234:5678
└────┬────┘└────┬───┘└──────┬──────────┘
  Global     Subnet    Interface ID
  Routing    ID        (64 bits)
  Prefix
  (48 bits)  (16 bits)
```

**2. Link-Local Addresses** (like APIPA in IPv4)
- **Prefix:** `fe80::/10` (starts with fe8, fe9, fea, or feb)
- **Purpose:** Communication on local link only (not routable)
- **Example:** `fe80::204:61ff:fe9d:f156`
- **Auto-assigned:** Every IPv6 interface gets one automatically

**Key Point:** Link-local addresses are used for neighbor discovery, router advertisements, and local communication. Routers don't forward them.

**3. Unique Local Addresses (ULA)** (like IPv4 private addresses)
- **Prefix:** `fc00::/7` (starts with fc or fd)
- **Purpose:** Private networks (like 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)
- **Example:** `fd12:3456:789a:1::1`
- **Not routable on internet**

**Difference between fc and fd:**
- `fc00::/8` - Centrally assigned (not used in practice)
- `fd00::/8` - Locally assigned (what you'll use)

**4. Loopback Address**
- **Address:** `::1` (or `0000:0000:0000:0000:0000:0000:0000:0001`)
- **Purpose:** Testing (like 127.0.0.1 in IPv4)
- **Use:** `ping ::1` to test your own IPv6 stack

### Multicast Addresses (One-to-Many)

- **Prefix:** `ff00::/8` (starts with ff)
- **Purpose:** Send to multiple recipients
- **Example:** `ff02::1` (all nodes on local link)

**Common multicast addresses:**
- `ff02::1` - All nodes (like broadcast)
- `ff02::2` - All routers
- `ff02::1:ff00:0/104` - Solicited-node multicast (for Neighbor Discovery)

**Important:** IPv6 has **no broadcast**. Everything that used broadcast in IPv4 uses multicast in IPv6.

### Anycast Addresses (One-to-Nearest)

- **No special prefix** (looks like unicast)
- **Purpose:** Send to the nearest instance of a service
- **Example:** DNS root servers use anycast
- **How it works:** Multiple servers have the same IPv6 address; routers send traffic to the closest one

**Use case:** You have DNS servers in New York, London, and Tokyo, all with address `2001:db8::53`. Users automatically connect to the geographically closest server.

### Special Addresses

| Address | Notation | Purpose |
|---------|----------|---------|
| Unspecified | `::` or `::/128` | Equivalent to 0.0.0.0 (no address) |
| Loopback | `::1` or `::1/128` | Equivalent to 127.0.0.1 |
| IPv4-mapped | `::ffff:192.0.2.1` | Represents IPv4 address in IPv6 |
| Documentation | `2001:db8::/32` | Reserved for examples (like 192.0.2.0/24) |

**Exam Tip:** Memorize these address types and their prefixes. You'll see questions like "Which address is a link-local address?" with options including `fe80::`, `2001::`, `ff02::`, and `::1`.

---

## IPv6 Prefix Notation

Like IPv4 CIDR, IPv6 uses slash notation to indicate network prefix length.

**Format:** `address/prefix-length`

**Examples:**
- `2001:db8::/32` - First 32 bits are network, last 96 bits are host
- `2001:db8:1234::/48` - First 48 bits are network (typical enterprise allocation)
- `2001:db8:1234:5::/64` - First 64 bits are network (typical subnet)
- `fe80::/10` - Link-local prefix (first 10 bits)

**Standard IPv6 Subnetting:**

Most organizations get a `/48` from their ISP:
```
2001:0db8:1234::/48
└────┬────┘└─┬─┘└┘
   ISP    Org  Subnet bits
   prefix assigned (16 bits = 65,536 subnets)
```

Each `/48` is divided into `/64` subnets:
```
2001:0db8:1234:0000::/64  (Subnet 0)
2001:0db8:1234:0001::/64  (Subnet 1)
2001:0db8:1234:0002::/64  (Subnet 2)
...
2001:0db8:1234:ffff::/64  (Subnet 65,535)
```

**Why /64?** The last 64 bits are reserved for the interface ID (host portion). This allows for SLAAC and EUI-64.

**Exam Tip:** `/64` is the standard subnet size in IPv6. Any smaller and you break SLAAC. Any larger and you're wasting address space (though with IPv6, waste isn't a concern).

---

## IPv6 Address Configuration

Unlike IPv4, where you manually configure or use DHCP, IPv6 has multiple configuration methods.

### SLAAC (Stateless Address Autoconfiguration)

**SLAAC** lets devices configure their own IPv6 addresses without a DHCP server.

**How it works:**

1. **Device boots up** and assigns itself a link-local address (`fe80::`)
2. **Router Advertisement (RA):** Router sends periodic RAs containing the network prefix (e.g., `2001:db8:1::/64`)
3. **Device creates global address:** Combines router's prefix + its own interface ID
4. **Duplicate Address Detection (DAD):** Device checks if address is already in use

**Example:**
```
Router advertises: 2001:db8:1::/64
Device MAC:        00:0c:29:ab:cd:ef
Device generates:  2001:db8:1::20c:29ff:feab:cdef/64
                   └───┬──┘ └────────┬────────────┘
                   Prefix  Interface ID (from MAC)
```

**Advantages:**
- No DHCP server needed
- Devices can come and go without management
- Perfect for IoT devices

**Disadvantages:**
- No centralized control (can't track which device has which IP)
- Can't provide DNS servers or other options (solved by DHCPv6)

### EUI-64 (Extended Unique Identifier)

**EUI-64** creates a 64-bit interface ID from a 48-bit MAC address.

**Process:**

1. Take MAC address: `00:0c:29:ab:cd:ef`
2. Split in half: `00:0c:29` and `ab:cd:ef`
3. Insert `ff:fe` in the middle: `00:0c:29:ff:fe:ab:cd:ef`
4. Flip the 7th bit (Universal/Local bit): `02:0c:29:ff:fe:ab:cd:ef`
5. Convert to IPv6 notation: `020c:29ff:feab:cdef`

**Full address:**
```
Prefix:           2001:db8:1::
Interface ID:     020c:29ff:feab:cdef
Complete address: 2001:db8:1:0:020c:29ff:feab:cdef/64
Shortened:        2001:db8:1::20c:29ff:feab:cdef/64
```

**Why flip the 7th bit?** It distinguishes between universally administered (manufacturer-assigned) and locally administered MAC addresses.

**Privacy Concern:** EUI-64 exposes your MAC address, allowing tracking. Modern systems use **Privacy Extensions** (RFC 4941) to generate random interface IDs instead.

### DHCPv6 (Dynamic Host Configuration Protocol for IPv6)

Like DHCPv4, but with two modes:

**1. Stateful DHCPv6**
- Server assigns the complete IPv6 address
- Server tracks all assignments (like DHCPv4)
- Provides DNS servers, domain name, NTP servers, etc.

**2. Stateless DHCPv6**
- Device uses SLAAC for address (router provides prefix)
- DHCPv6 only provides DNS servers and other options
- Server doesn't track addresses

**Router Advertisement flags:**
- **M flag (Managed):** Use stateful DHCPv6 for address
- **O flag (Other):** Use DHCPv6 for other options (DNS, etc.)

| M flag | O flag | Result |
|--------|--------|--------|
| 0 | 0 | SLAAC only (no DHCPv6) |
| 0 | 1 | SLAAC for address, DHCPv6 for DNS |
| 1 | 0 | Stateful DHCPv6 for everything |
| 1 | 1 | Stateful DHCPv6 for everything |

**Exam Tip:** Know the difference between stateful and stateless DHCPv6. Questions often ask "which configuration method provides DNS servers but lets devices choose their own address?" Answer: Stateless DHCPv6.

---

## Neighbor Discovery Protocol (NDP)

**NDP** replaces ARP in IPv6. It handles address resolution, router discovery, and duplicate address detection.

**Key NDP Functions:**

1. **Router Discovery:** Routers send Router Advertisements (RA), hosts listen
2. **Prefix Discovery:** Routers advertise network prefixes for SLAAC
3. **Address Resolution:** Neighbor Solicitation (NS) and Neighbor Advertisement (NA) replace ARP
4. **Duplicate Address Detection (DAD):** Verify address isn't already in use
5. **Redirect:** Inform hosts of better routes

**NDP Messages (all use ICMPv6):**
- **Router Solicitation (RS):** Host asks "any routers here?"
- **Router Advertisement (RA):** Router says "I'm here! Here's your prefix"
- **Neighbor Solicitation (NS):** "Who has this IPv6 address?" (like ARP request)
- **Neighbor Advertisement (NA):** "I do!" (like ARP reply)
- **Redirect:** "Use this router instead"

**Example NS/NA exchange:**
```
Host A wants to talk to Host B (2001:db8:1::2)

Host A → All nodes multicast (ff02::1:ff00:2):
  "Neighbor Solicitation: Who has 2001:db8:1::2?"

Host B → Host A:
  "Neighbor Advertisement: I do! My MAC is 00:11:22:33:44:55"

Host A now knows B's MAC and can send traffic
```

**Key Difference from ARP:** NDP uses ICMPv6 and multicast, not broadcast. More efficient!

---

## IPv4 and IPv6 Coexistence

We're not switching from IPv4 to IPv6 overnight. Both will coexist for years (decades?). Here's how:

### Dual Stack (Running Both)

**Most common method.** Devices run both IPv4 and IPv6 simultaneously.

**How it works:**
- Every interface has both an IPv4 address AND an IPv6 address
- Applications can use either protocol
- Modern OSes prefer IPv6 when available (Happy Eyeballs algorithm)

**Example:**
```
Interface: eth0
  IPv4: 192.168.1.100/24
  IPv6: 2001:db8:1::100/64
  Link-local: fe80::a00:27ff:fe4e:66a1/64
```

**Advantages:**
- Simple to implement
- No translation needed
- Works with all applications

**Disadvantages:**
- Requires IPv4 and IPv6 connectivity everywhere
- Doubles routing table size
- Security policies needed for both

### Tunneling (Encapsulation)

**Tunneling** encapsulates IPv6 packets inside IPv4 packets (or vice versa) to traverse networks that only support one protocol.

**Common Tunneling Methods:**

**1. 6to4**
- Automatically creates IPv6 tunnel over IPv4
- Uses IPv4 address to generate IPv6 prefix: `2002::/16`
- Example: IPv4 192.0.2.1 → IPv6 2002:c000:0201::/48
- **Deprecated** (security issues, poor performance)

**2. Teredo**
- Tunnels IPv6 through IPv4 NAT
- Uses prefix `2001:0000::/32`
- Works even behind NAT (unlike 6to4)
- **Deprecated** (security issues, Microsoft-specific)

**3. ISATAP (Intra-Site Automatic Tunnel Addressing Protocol)**
- For IPv6 within IPv4-only sites
- Uses prefix `fe80::` or organization's IPv6 prefix
- **Legacy technology**

**4. Manual Tunnels (IPv6-in-IPv4)**
- Explicitly configured tunnel endpoints
- Commonly used by ISPs and enterprises
- Requires manual setup (not automatic)

**Modern Approach:** Use native dual-stack when possible. Tunneling is a temporary measure.

### Translation (NAT64 / DNS64)

**Translation** converts between IPv6 and IPv4 at the network boundary.

**How NAT64 works:**
1. IPv6-only client wants to reach IPv4 server (192.0.2.1)
2. DNS64 server returns synthesized IPv6 address: `64:ff9b::192.0.2.1`
3. Client sends to IPv6 address
4. NAT64 gateway translates to IPv4 and sends to server
5. Response comes back and is translated to IPv6

**Use case:** Mobile networks (LTE, 5G) are IPv6-only to save addresses. NAT64 lets phones reach IPv4 internet.

**Exam Tip:** Know the three transition mechanisms: dual-stack (run both), tunneling (encapsulate), and translation (NAT64). Questions often ask "which method lets IPv6-only clients reach IPv4 servers?"

---

## IPv6 Troubleshooting

### Common IPv6 Issues

**Problem 1: No IPv6 Connectivity**

**Symptoms:**
- Can ping IPv4 addresses but not IPv6
- `ping ::1` works (loopback), but can't reach other hosts
- Only link-local address (`fe80::`) assigned

**Diagnosis:**
```bash
# Windows
ipconfig /all

# Linux/Mac
ip -6 addr show
ifconfig

# Check for global unicast address (2xxx::/3)
```

**Common Causes:**
- Router not sending RAs (SLAAC broken)
- DHCPv6 server down (if using stateful)
- IPv6 disabled on interface
- Firewall blocking ICMPv6 (breaks NDP)

**Fix:**
- Verify router has IPv6 enabled and is sending RAs
- Check DHCPv6 configuration if using stateful
- Enable IPv6 on interface: `netsh interface ipv6 set interface "Ethernet" forwarding=enabled` (Windows)
- Allow ICMPv6 through firewall (critical for NDP!)

**Problem 2: Duplicate Address Detected**

**Symptoms:**
- Device can't communicate
- Event log shows "Duplicate IPv6 address detected"

**Cause:**
- Two devices configured with same static IPv6 address
- DAD (Duplicate Address Detection) found conflict

**Fix:**
- Change one device to different address
- If using SLAAC, investigate why MAC addresses collide (VM cloning?)

**Problem 3: Wrong Address Type**

**Symptoms:**
- Have link-local address but no global unicast
- Can ping neighbors but not internet

**Diagnosis:**
```bash
ping6 fe80::1%eth0        # Works (link-local)
ping6 2001:4860:4860::8888 # Fails (Google DNS)
```

**Cause:**
- Router not advertising prefix
- SLAAC not working
- DHCPv6 not configured

**Fix:**
- Check router advertisement: `radvdump` (Linux) or Wireshark
- Verify router's IPv6 routing
- Confirm DHCPv6 server is reachable

**Problem 4: Can't Reach IPv4 Sites**

**Symptoms:**
- IPv6 works fine
- IPv4 sites unreachable
- Only have IPv6 address (no IPv4)

**Cause:**
- IPv6-only network without NAT64/DNS64
- Dual-stack network with broken IPv4

**Fix:**
- Configure NAT64/DNS64 if IPv6-only network
- Fix IPv4 connectivity (check DHCP, routing)
- Verify DNS returns IPv4 addresses (A records)

---

## Key Exam Tips

**For the Network+ N10-009 exam, remember:**

✅ **IPv6 = 128 bits, 8 groups of 4 hex digits**  
✅ **Two shortening rules:** Remove leading zeros, compress consecutive zeros with `::`  
✅ **Can only use `::` once per address**  
✅ **Global unicast:** 2000::/3 (starts with 2 or 3)  
✅ **Link-local:** fe80::/10 (auto-assigned, not routable)  
✅ **Unique local:** fc00::/7 (private, like 10.0.0.0/8)  
✅ **Multicast:** ff00::/8 (no broadcast in IPv6!)  
✅ **Loopback:** ::1  
✅ **Standard subnet size:** /64 (allows SLAAC)  
✅ **SLAAC:** Stateless autoconfiguration (no DHCP needed)  
✅ **EUI-64:** Creates interface ID from MAC address  
✅ **Stateful DHCPv6:** Server assigns address and tracks it  
✅ **Stateless DHCPv6:** SLAAC for address, DHCPv6 for DNS/options  
✅ **NDP replaces ARP** (uses ICMPv6, multicast)  
✅ **Transition mechanisms:** Dual-stack, tunneling, translation (NAT64)  
✅ **Ping IPv6:** `ping6` or `ping -6` (not just `ping`)

**Common Exam Mistakes:**
- Using `::` more than once in an address
- Not recognizing address types by prefix (fe80, 2001, ff02)
- Confusing stateful vs stateless DHCPv6
- Thinking IPv6 has broadcast (it doesn't - uses multicast)
- Forgetting that /64 is the standard subnet size

---

## Key Takeaways

- [ ] IPv6 was created because IPv4 ran out of addresses (4.3B not enough)
- [ ] IPv6 has 340 undecillion addresses (we won't run out)
- [ ] IPv6 addresses are 128 bits, written in hexadecimal notation
- [ ] Eight groups of four hex digits, separated by colons
- [ ] Shortening: Remove leading zeros, compress one run of zeros with `::`
- [ ] Global unicast (2000::/3) is routable on internet
- [ ] Link-local (fe80::/10) is auto-assigned, not routable
- [ ] Unique local (fc00::/7) is for private networks
- [ ] Multicast (ff00::/8) replaces broadcast in IPv6
- [ ] Standard subnet size is /64 (48-bit prefix + 16-bit subnet + 64-bit interface)
- [ ] SLAAC lets devices auto-configure without DHCP
- [ ] EUI-64 generates interface ID from MAC address
- [ ] Stateful DHCPv6 assigns addresses; stateless only provides DNS/options
- [ ] NDP replaces ARP (uses ICMPv6 multicast instead of broadcast)
- [ ] Transition mechanisms: dual-stack (both protocols), tunneling (encapsulation), NAT64 (translation)

---

## Check Your Understanding

Test your knowledge with these questions:

<details>
<summary><strong>1. Which of the following is a correctly shortened version of 2001:0db8:0000:0000:0000:ff00:0042:8329?</strong></summary>

**Answer: 2001:db8::ff00:42:8329**

Step-by-step shortening:
1. Remove leading zeros: `2001:db8:0:0:0:ff00:42:8329`
2. Compress consecutive zeros: `2001:db8::ff00:42:8329`

Common mistakes:
- `2001:db8:0:0:0:ff00:42:8329` - Didn't compress zeros
- `2001:0db8::ff00:0042:8329` - Didn't remove all leading zeros
- `2001:db8::ff00::42:8329` - Used `::` twice (invalid!)

Remember: Remove ALL leading zeros first, then compress the longest run of zeros with `::`.
</details>

<details>
<summary><strong>2. What type of IPv6 address is fe80::1?</strong></summary>

**Answer: Link-local address**

The prefix `fe80::/10` identifies link-local addresses. These addresses:
- Are automatically assigned to every IPv6 interface
- Are only valid on the local link (not routable)
- Are used for NDP, router discovery, and local communication
- Will always start with fe8, fe9, fea, or feb

Don't confuse with:
- `ff00::/8` - Multicast
- `2000::/3` - Global unicast
- `fc00::/7` - Unique local (private)
</details>

<details>
<summary><strong>3. An organization receives the IPv6 prefix 2001:db8:abcd::/48. How many /64 subnets can they create?</strong></summary>

**Answer: 65,536 subnets**

Math:
- They have a /48 prefix (48 bits are network)
- Standard subnets are /64 (64 bits are network)
- Subnet bits available: 64 - 48 = 16 bits
- Number of subnets: 2^16 = 65,536

Example subnets:
```
2001:db8:abcd:0::/64    (Subnet 0)
2001:db8:abcd:1::/64    (Subnet 1)
2001:db8:abcd:2::/64    (Subnet 2)
...
2001:db8:abcd:ffff::/64 (Subnet 65,535)
```

This is why IPv6 address space is so abundant - even a "small" /48 allocation gives you 65,536 subnets!
</details>

<details>
<summary><strong>4. What is the purpose of SLAAC (Stateless Address Autoconfiguration)?</strong></summary>

**Answer: Allow devices to automatically configure their own IPv6 addresses without a DHCP server**

SLAAC process:
1. Device assigns itself a link-local address (fe80::)
2. Device sends Router Solicitation (RS)
3. Router responds with Router Advertisement (RA) containing network prefix
4. Device combines router's prefix with its own interface ID
5. Device performs Duplicate Address Detection (DAD)
6. Device now has a working global unicast address

Benefits:
- No DHCP server needed (reduces infrastructure)
- Devices can come and go freely
- Perfect for IoT devices
- Simpler network management

Limitations:
- Can't provide DNS servers (need stateless DHCPv6 for this)
- No centralized tracking of address assignments
- May expose MAC address (privacy concern with EUI-64)
</details>

<details>
<summary><strong>5. A device has MAC address 00:50:56:ab:cd:ef. What is the EUI-64 interface ID?</strong></summary>

**Answer: 0250:56ff:feab:cdef**

EUI-64 generation:
1. Start with MAC: `00:50:56:ab:cd:ef`
2. Split in half: `00:50:56` and `ab:cd:ef`
3. Insert ff:fe: `00:50:56:ff:fe:ab:cd:ef`
4. Flip 7th bit: `02:50:56:ff:fe:ab:cd:ef` (00 → 02)
5. Format as IPv6: `0250:56ff:feab:cdef`

If the prefix is 2001:db8:1::/64, the full address would be:
`2001:db8:1::250:56ff:feab:cdef/64`

The 7th bit flip (Universal/Local bit):
- 0 = Globally unique (manufacturer-assigned)
- 1 = Locally administered
- We flip it to indicate this is a modified MAC address
</details>

<details>
<summary><strong>6. What is the difference between stateful and stateless DHCPv6?</strong></summary>

**Answer:**

**Stateful DHCPv6:**
- Server assigns the complete IPv6 address
- Server maintains state (tracks all assignments)
- Provides address AND options (DNS, domain, NTP)
- Like traditional DHCPv4
- Used when centralized control is needed

**Stateless DHCPv6:**
- Device uses SLAAC for address (router provides prefix)
- Server only provides options (DNS servers, domain name, etc.)
- Server doesn't track addresses (no state)
- Combines benefits of SLAAC (auto-addressing) and DHCP (centralized options)
- Most common configuration

**Router Advertisement flags:**
- M=1: Use stateful DHCPv6 for address
- O=1: Use DHCPv6 for options only

Example: M=0, O=1 = "Use SLAAC for your address, but ask DHCPv6 for DNS servers"
</details>

<details>
<summary><strong>7. Which IPv6 address type has replaced IPv4 broadcast?</strong></summary>

**Answer: Multicast (ff00::/8)**

IPv6 has NO broadcast. Everything that used broadcast in IPv4 now uses multicast in IPv6.

Common multicast addresses:
- `ff02::1` - All nodes (like IPv4 broadcast to all hosts)
- `ff02::2` - All routers
- `ff02::1:ff00:0/104` - Solicited-node multicast (used by NDP)

Why multicast is better than broadcast:
- Hosts can choose which multicast groups to join
- Doesn't interrupt devices that don't need the message
- More efficient use of bandwidth
- Routers can intelligently forward multicast

Example: ARP in IPv4 used broadcast (everyone hears it). NDP in IPv6 uses multicast (only interested parties hear it).
</details>

<details>
<summary><strong>8. A company wants to run both IPv4 and IPv6 on their network. What is the most common transition mechanism?</strong></summary>

**Answer: Dual-stack**

**Dual-stack** means running both IPv4 and IPv6 simultaneously on all devices and network infrastructure.

How it works:
- Every interface has both an IPv4 address AND an IPv6 address
- Routing tables contain both IPv4 and IPv6 routes
- Applications can use either protocol
- OS prefers IPv6 when both are available (Happy Eyeballs algorithm)

Example interface:
```
eth0:
  IPv4: 192.168.1.100/24, Gateway: 192.168.1.1
  IPv6: 2001:db8:1::100/64, Gateway: fe80::1
  Link-local: fe80::a00:27ff:fe4e:66a1/64
```

Advantages:
- Simple to implement
- No translation or tunneling needed
- Maximum compatibility
- Can gradually transition to IPv6-only

Disadvantages:
- Requires IPv4 and IPv6 connectivity everywhere
- Doubles routing table size
- More complex security policies
- More expensive (two sets of public addresses)

Alternative mechanisms (less common):
- Tunneling (6to4, Teredo) - Encapsulate IPv6 in IPv4
- Translation (NAT64) - Convert between protocols
</details>

---

## Before Moving to Next Lesson

Before moving to Lesson 8 (Network Protocols), make sure you can:

- [ ] Read and write IPv6 addresses in hexadecimal notation
- [ ] Apply both shortening rules (remove leading zeros, compress with ::)
- [ ] Identify IPv6 address types by their prefix (fe80, 2001, ff00, etc.)
- [ ] Explain why IPv6 was created (IPv4 exhaustion)
- [ ] Calculate how many /64 subnets fit in a larger prefix
- [ ] Describe how SLAAC works (RA → prefix → interface ID)
- [ ] Generate EUI-64 interface ID from MAC address
- [ ] Differentiate between stateful and stateless DHCPv6
- [ ] Explain the role of NDP (replaces ARP in IPv6)
- [ ] Understand dual-stack, tunneling, and NAT64 transition mechanisms

**Study Strategy:**
- **Practice IPv6 shortening DAILY** - This is the #1 exam skill
- Use the interactive activity to build muscle memory
- Create flashcards for common prefixes (fe80, 2001, ff02, fc00)
- Draw the SLAAC process from memory
- Practice EUI-64 with different MAC addresses
- Compare IPv4 and IPv6 side-by-side

**Hands-On Practice:**
- Enable IPv6 on your home router (most already have it)
- Use `ipconfig /all` (Windows) or `ip -6 addr` (Linux) to see your IPv6 addresses
- Ping IPv6 addresses: `ping6 2001:4860:4860::8888` (Google DNS)
- Use `ping6 ::1` to test loopback
- Visit https://test-ipv6.com to check your connectivity
- Capture IPv6 traffic in Wireshark (look for ICMPv6 RAs and NDP)

IPv6 is the future of networking. The sooner you master it, the more valuable you'll be!

---

## Coming Up Next

**Lesson 8: Network Protocols and Services**

In the next lesson, we'll explore essential network services that make the internet work:

- DNS (Domain Name System) - How names become IPs
- DHCP (Dynamic Host Configuration Protocol) - Automatic IP addressing
- NTP (Network Time Protocol) - Time synchronization
- IPAM (IP Address Management) - Tracking your address space

These protocols are the foundation of every network. You'll learn how they work, how to configure them, and how to troubleshoot when they break.

---

## Lesson Complete! 🎉

**Congratulations!** You've completed Lesson 7: IPv6 Addressing and Configuration!

You've mastered:
✅ IPv6 address format and notation  
✅ IPv6 shortening rules  
✅ IPv6 address types and their uses  
✅ SLAAC and DHCPv6 configuration  
✅ EUI-64 address generation  
✅ NDP (Neighbor Discovery Protocol)  
✅ IPv4/IPv6 transition mechanisms  

**Progress:** You've completed 7 of 30 lessons (23%)

You now understand the next generation of IP addressing! IPv6 may seem complex at first, but with practice, it becomes second nature. Keep practicing address shortening, and you'll be ready for the exam.

**Next up:** Lesson 8 - Network Protocols and Services

---

*Ready to continue? Head back to the dashboard and start Lesson 8!*