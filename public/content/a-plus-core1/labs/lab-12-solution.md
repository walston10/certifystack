# Lab 12: TCP/IP Addressing and Subnetting - Solution Guide

**Note to Students:** Only review this AFTER attempting the exercises yourself! IP addressing requires practice, not just reading.

---

## Section 1: Concept Check - Answers

**1. What are the three private IP address ranges defined in RFC 1918, and why can't they be used on the public internet?**

**Answer:**

| Class | Private Range | CIDR |
|-------|---------------|------|
| A | 10.0.0.0 - 10.255.255.255 | 10.0.0.0/8 |
| B | 172.16.0.0 - 172.31.255.255 | 172.16.0.0/12 |
| C | 192.168.0.0 - 192.168.255.255 | 192.168.0.0/16 |

**Why they can't be used on public internet:**

1. **Not globally unique** - Millions of networks use 192.168.1.0; routers wouldn't know which one to send traffic to
2. **Internet routers drop them** - Core routers are configured to discard packets with private source/destination addresses
3. **Designed for internal use** - RFC 1918 specifically designated these for private networks behind NAT

**NAT (Network Address Translation)** allows private addresses to access the internet by translating them to public addresses at the router.

---

**2. If a computer has an IP address of 169.254.x.x, what does this indicate and what should you check?**

**Answer:**

**169.254.x.x = APIPA (Automatic Private IP Addressing)**

This indicates the computer **could not reach a DHCP server** and assigned itself an address.

**What to check:**

| Check | Why |
|-------|-----|
| Network cable/connection | Physical layer issue |
| DHCP server status | Server may be down |
| Network switch/port | Port may be disabled |
| VLAN configuration | May be on wrong VLAN |
| DHCP scope exhaustion | No addresses left to assign |
| Firewall | May be blocking DHCP (ports 67/68) |
| NIC driver | Driver may have failed |

**APIPA range:** 169.254.1.0 - 169.254.254.255 (169.254.0.x and 169.254.255.x reserved)

**Can APIPA computers communicate?** Only with other APIPA computers on the same physical network. No internet access (no gateway).

---

**3. Explain what a subnet mask does and why 255.255.255.0 is commonly used.**

**Answer:**

**What a subnet mask does:**

A subnet mask separates the **network portion** from the **host portion** of an IP address.

- **1s (255)** = Network portion (identifies the network)
- **0s (0)** = Host portion (identifies individual device)

**Example with 192.168.1.50 / 255.255.255.0:**

```
IP:   192.168.1.50    = 11000000.10101000.00000001.00110010
Mask: 255.255.255.0   = 11111111.11111111.11111111.00000000
                        |----Network----|  |--Host--|
```

The mask tells the computer: "192.168.1 is our network, .50 is my host address."

**Why 255.255.255.0 (/24) is common:**

1. Provides 254 usable addresses (good for most offices)
2. Easy to understand and configure
3. Class C default mask
4. Clean boundary on third octet
5. Simple to troubleshoot

---

**4. What is the purpose of a default gateway, and what happens if it's configured incorrectly?**

**Answer:**

**Default gateway purpose:**

The default gateway is the **router** that forwards traffic destined for **other networks**. When a computer needs to reach an IP address outside its own subnet, it sends the packet to the default gateway.

**Traffic flow:**
- Same subnet: Send directly to destination MAC
- Different subnet: Send to gateway, gateway routes it

**If gateway is incorrect:**

| Problem | Result |
|---------|--------|
| Wrong IP | Can't reach anything outside local subnet |
| Gateway on different subnet | Won't be reachable |
| Gateway down | Same as wrong IP |
| No gateway configured | Local network only |

**Symptoms of wrong gateway:**
- Can ping local devices ✓
- Can't ping internet (8.8.8.8) ✗
- Can't browse websites ✗
- Error: "Network unreachable" or "Destination host unreachable"

---

**5. What is the difference between CIDR notation /24 and /16 in terms of available host addresses?**

**Answer:**

| CIDR | Subnet Mask | Network Bits | Host Bits | Usable Hosts |
|------|-------------|--------------|-----------|--------------|
| /24 | 255.255.255.0 | 24 | 8 | 254 |
| /16 | 255.255.0.0 | 16 | 16 | 65,534 |

**Calculation:**

- **/24:** 2^8 - 2 = 256 - 2 = **254 hosts**
- **/16:** 2^16 - 2 = 65,536 - 2 = **65,534 hosts**

**Why subtract 2:**
- Network address (all host bits = 0)
- Broadcast address (all host bits = 1)

**/16 has 258 times more hosts than /24** (65,534 ÷ 254 ≈ 258)

---

## Section 2: Activity Solutions

### Activity B: IP Address Classification - Complete

| IP Address | Class | Default Mask | Public or Private? |
|------------|-------|--------------|-------------------|
| 10.0.0.1 | A | /8 | Private |
| 172.16.50.1 | B | /16 | Private |
| 192.168.1.100 | C | /24 | Private |
| 8.8.8.8 | A | /8 | Public (Google DNS) |
| 150.100.50.25 | B | /16 | Public |
| 172.32.1.1 | B | /16 | Public (outside 172.16-31 range) |
| 192.0.2.1 | C | /24 | Public (documentation range) |
| 127.0.0.1 | A | /8 | Special (loopback) |

**Special IP addresses:**

| Address/Range | Name | Purpose |
|---------------|------|---------|
| 127.0.0.1 | Loopback | Test local TCP/IP stack |
| 0.0.0.0 | Default route / Any | Represents all networks or "no address" |
| 255.255.255.255 | Broadcast | Send to all hosts on local network |
| 169.254.0.0/16 | APIPA / Link-local | Self-assigned when DHCP fails |

---

### Activity C: Private IP Ranges - Complete

| Class | Start | End | CIDR | Addresses |
|-------|-------|-----|------|-----------|
| A | 10.0.0.0 | 10.255.255.255 | /8 | 16,777,216 |
| B | 172.16.0.0 | 172.31.255.255 | /12 | 1,048,576 |
| C | 192.168.0.0 | 192.168.255.255 | /16 | 65,536 |

**Public vs Private practice:**

| IP Address | Public or Private? | Why? |
|------------|-------------------|------|
| 10.255.255.1 | Private | Within 10.0.0.0/8 |
| 172.15.0.1 | Public | Below 172.16 (private starts at .16) |
| 172.16.0.1 | Private | Within 172.16.0.0/12 |
| 172.31.255.255 | Private | Within 172.16.0.0/12 |
| 172.32.0.1 | Public | Above 172.31 (private ends at .31) |
| 192.168.0.1 | Private | Within 192.168.0.0/16 |
| 192.169.1.1 | Public | Outside 192.168.x.x range |
| 8.8.4.4 | Public | Class A, not in 10.x.x.x |

---

### Activity D: Binary Conversion - Complete

**Binary to Decimal:**

| Binary | Calculation | Decimal |
|--------|-------------|---------|
| 11000000 | 128+64 | 192 |
| 10101000 | 128+32+8 | 168 |
| 00000001 | 1 | 1 |
| 11111110 | 128+64+32+16+8+4+2 | 254 |
| 10000000 | 128 | 128 |
| 11110000 | 128+64+32+16 | 240 |
| 00001111 | 8+4+2+1 | 15 |

**Decimal to Binary:**

| Decimal | Binary |
|---------|--------|
| 192 | 11000000 |
| 168 | 10101000 |
| 1 | 00000001 |
| 128 | 10000000 |
| 224 | 11100000 |
| 240 | 11110000 |
| 252 | 11111100 |

**Full IP conversion:**

| Decimal | Binary |
|---------|--------|
| 192.168.1.1 | 11000000.10101000.00000001.00000001 |
| 10.0.0.1 | 00001010.00000000.00000000.00000001 |
| 172.16.0.1 | 10101100.00010000.00000000.00000001 |

---

### Activity E: Subnet Masks - Complete

| CIDR | Dotted Decimal | Binary (last octet focus) | Usable Hosts |
|------|----------------|---------------------------|--------------|
| /8 | 255.0.0.0 | 11111111.00000000.00000000.00000000 | 16,777,214 |
| /16 | 255.255.0.0 | 11111111.11111111.00000000.00000000 | 65,534 |
| /24 | 255.255.255.0 | 11111111.11111111.11111111.00000000 | 254 |
| /25 | 255.255.255.128 | .10000000 | 126 |
| /26 | 255.255.255.192 | .11000000 | 62 |
| /27 | 255.255.255.224 | .11100000 | 30 |
| /28 | 255.255.255.240 | .11110000 | 14 |
| /29 | 255.255.255.248 | .11111000 | 6 |
| /30 | 255.255.255.252 | .11111100 | 2 |

**Why subtract 2:** Network address (first) and broadcast address (last) cannot be assigned to hosts.

**Host bits calculation:**

| CIDR | Network Bits | Host Bits | Formula | Usable Hosts |
|------|--------------|-----------|---------|--------------|
| /24 | 24 | 8 | 2^8 - 2 | 254 |
| /25 | 25 | 7 | 2^7 - 2 | 126 |
| /26 | 26 | 6 | 2^6 - 2 | 62 |
| /27 | 27 | 5 | 2^5 - 2 | 30 |
| /28 | 28 | 4 | 2^4 - 2 | 14 |
| /30 | 30 | 2 | 2^2 - 2 | 2 |

---

### Activity F: Network Calculations - Complete

**192.168.1.50/24:**

| Component | Value | Explanation |
|-----------|-------|-------------|
| IP Address | 192.168.1.50 | Given |
| Subnet Mask | 255.255.255.0 | /24 |
| Network Address | 192.168.1.0 | All host bits = 0 |
| Broadcast Address | 192.168.1.255 | All host bits = 1 |
| First Usable Host | 192.168.1.1 | Network + 1 |
| Last Usable Host | 192.168.1.254 | Broadcast - 1 |
| Usable Hosts | 254 | 2^8 - 2 |

**10.0.0.100/8:**

| Component | Value |
|-----------|-------|
| Subnet Mask | 255.0.0.0 |
| Network Address | 10.0.0.0 |
| Broadcast Address | 10.255.255.255 |
| First Usable | 10.0.0.1 |
| Last Usable | 10.255.255.254 |
| Total Usable Hosts | 16,777,214 |

**172.16.50.25/16:**

| Component | Value |
|-----------|-------|
| Subnet Mask | 255.255.0.0 |
| Network Address | 172.16.0.0 |
| Broadcast Address | 172.16.255.255 |
| First Usable | 172.16.0.1 |
| Last Usable | 172.16.255.254 |
| Total Usable Hosts | 65,534 |

**192.168.10.200/26:**

| Component | Value |
|-----------|-------|
| Subnet Mask | 255.255.255.192 |
| Network Address | 192.168.10.192 |
| Broadcast Address | 192.168.10.255 |
| First Usable | 192.168.10.193 |
| Last Usable | 192.168.10.254 |
| Total Usable Hosts | 62 |

**/26 calculation:** Block size = 256 - 192 = 64. Subnets: .0, .64, .128, .192. Since .200 falls in the .192 block, network is .192.

---

### Activity G: Subnetting Practice - Complete

**192.168.1.0/24 divided into 4 subnets:**

**Step 1:** 2^n = 4, so n = 2 bits borrowed

**Step 2:** New mask = /24 + 2 = /26 = 255.255.255.192

**Step 3:** Block size = 256 - 192 = 64

**Step 4:** Subnets:

| Subnet # | Network | First Usable | Last Usable | Broadcast | Hosts |
|----------|---------|--------------|-------------|-----------|-------|
| 1 | 192.168.1.0 | 192.168.1.1 | 192.168.1.62 | 192.168.1.63 | 62 |
| 2 | 192.168.1.64 | 192.168.1.65 | 192.168.1.126 | 192.168.1.127 | 62 |
| 3 | 192.168.1.128 | 192.168.1.129 | 192.168.1.190 | 192.168.1.191 | 62 |
| 4 | 192.168.1.192 | 192.168.1.193 | 192.168.1.254 | 192.168.1.255 | 62 |

**10.0.0.0/8 into 256 subnets:**

- Bits to borrow: 2^8 = 256, so 8 bits
- New mask: /8 + 8 = /16
- Dotted decimal: 255.255.0.0

---

### Activity H: IPv6 - Complete

**IPv6 vs IPv4:**

| Feature | IPv4 | IPv6 |
|---------|------|------|
| Address length | 32 bits | 128 bits |
| Notation | Dotted decimal | Colon hexadecimal |
| Example | 192.168.1.1 | 2001:db8::1 |
| Total addresses | ~4.3 billion | 340 undecillion |

**IPv6 shortening:**

| Full Form | Shortened |
|-----------|-----------|
| 2001:0db8:0000:0000:0000:0000:0000:0001 | 2001:db8::1 |
| fe80:0000:0000:0000:0000:0000:0000:0001 | fe80::1 |
| 2001:0db8:0000:0042:0000:0000:0000:0001 | 2001:db8:0:42::1 |

**IPv6 expanding:**

| Shortened | Full Form |
|-----------|-----------|
| ::1 | 0000:0000:0000:0000:0000:0000:0000:0001 |
| fe80::1 | fe80:0000:0000:0000:0000:0000:0000:0001 |
| 2001:db8::1 | 2001:0db8:0000:0000:0000:0000:0000:0001 |

**IPv6 address types:**

| Type | Prefix | Purpose |
|------|--------|---------|
| Loopback | ::1 | Test local TCP/IP (like 127.0.0.1) |
| Link-local | fe80::/10 | Auto-configured, local network only |
| Global unicast | 2000::/3 | Public routable addresses |
| Multicast | ff00::/8 | One-to-many communication |

---

### Activity I: APIPA Reference

**APIPA Range:** 169.254.1.0 - 169.254.254.255

**When APIPA occurs:**
- DHCP server unreachable
- Network disconnected during DHCP request
- DHCP scope exhausted
- DHCP server configuration error

**Troubleshooting checklist:**

| Check | How to Verify | Fix |
|-------|---------------|-----|
| Network cable | Check lights, try different cable | Replace cable |
| DHCP server | Check server status, logs | Restart DHCP service |
| Switch port | Check port lights, try different port | Enable port |
| VLAN | Verify VLAN assignment | Correct VLAN |
| NIC | Device Manager, try different NIC | Update driver |

---

### Activity J: Static IP Configuration

**When to use each:**

| Scenario | Static or DHCP? | Why? |
|----------|-----------------|------|
| Regular workstation | DHCP | Easier management |
| Network printer | Static/Reservation | Needs consistent IP |
| Server | Static | Critical services need stable IP |
| Guest laptop | DHCP | Temporary, unknown device |
| Router/switch | Static | Infrastructure must be predictable |
| IP camera | Static/Reservation | NVR needs to find it |
| Mobile phone | DHCP | Moves between networks |

**Misconfiguration results:**

| Problem | Result |
|---------|--------|
| Wrong subnet mask | Can't reach some hosts, incorrect network calculation |
| Wrong gateway | No internet/cross-subnet access |
| Duplicate IP | Intermittent connectivity, IP conflict messages |
| Gateway outside subnet | Gateway unreachable, no external access |

---

### Activity L: Connectivity Testing Reference

**Test sequence and meaning:**

| Test | If Fails | Problem Location |
|------|----------|------------------|
| 1. Loopback (127.0.0.1) | TCP/IP stack corrupted | OS/driver level |
| 2. Local IP | NIC not working | Hardware/driver |
| 3. Gateway | Local network issue | Cable/switch/gateway |
| 4. Remote IP (8.8.8.8) | Routing/ISP issue | Gateway/ISP |
| 5. Remote name (google.com) | DNS issue | DNS server/config |

**Key insight:** Test from local to remote. Where it first fails indicates the problem area.

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Can Ping 8.8.8.8, Can't Browse

**Most likely cause:** DNS not working

**Troubleshooting:**

```
nslookup google.com
```

If this fails, DNS is the issue.

**Solutions:**
1. Check DNS server configuration (`ipconfig /all`)
2. Try different DNS (8.8.8.8 or 1.1.1.1)
3. Flush DNS cache (`ipconfig /flushdns`)
4. Verify DNS server is reachable (`ping 8.8.8.8`)

---

### Scenario 2: Two Computers Can't Communicate

**Computer A:** 192.168.1.50/24 → Network: 192.168.1.0
**Computer B:** 192.168.2.50/24 → Network: 192.168.2.0

**Problem:** They're on different subnets!

Even though they're on the same switch, their subnet masks make them think they're on different networks. Traffic goes to the gateway (192.168.1.1), but Computer B isn't reachable from that gateway's perspective.

**Solution:** Change Computer B to 192.168.1.x/24 (same subnet as A)

---

### Scenario 3: 50 Computers on 192.168.100.0/24

**Is /24 sufficient?**

Yes! /24 provides 254 usable addresses. 50 computers fit easily.

**Recommendations:**

| Recommendation | Why |
|----------------|-----|
| Use DHCP | Easier management for 50 devices |
| Reserve .1-.20 | For infrastructure (router, printers, servers) |
| DHCP pool .21-.200 | For workstations |
| Reserve .201-.254 | Future static assignments |
| Document everything | Essential for troubleshooting |

---

### Scenario 4: One Laptop Gets APIPA, Others Work

**Laptop-specific causes:**

| Cause | How to Check |
|-------|--------------|
| NIC disabled | Device Manager |
| Wrong NIC selected | Network connections |
| Static IP configured | ipconfig, check for manual setting |
| NIC driver issue | Device Manager, update driver |
| MAC filtered | Check if MAC is allowed on network |
| Cable/port | Try different cable/port |

Since other computers work, it's not the DHCP server. Problem is specific to this laptop.

**Quick fix:** `ipconfig /release` then `ipconfig /renew`

---

## Key Takeaways

**For the A+ Exam:**

1. **Private IP ranges:**
   - 10.0.0.0/8 (Class A)
   - 172.16.0.0/12 (Class B: 172.16-31.x.x)
   - 192.168.0.0/16 (Class C)

2. **APIPA = 169.254.x.x** = DHCP failure

3. **Subnet mask separates network from host**

4. **Common masks:**
   - /24 = 255.255.255.0 = 254 hosts
   - /16 = 255.255.0.0 = 65,534 hosts
   - /8 = 255.0.0.0 = 16,777,214 hosts

5. **Usable hosts = 2^(host bits) - 2**

6. **Troubleshooting order:** Loopback → Local → Gateway → Internet → DNS

7. **Default gateway = router for other networks**

8. **IPv6 = 128 bits, hexadecimal, :: compresses zeros**

**For Real-World Skills:**

- Always document IP schemes
- DHCP with reservations is usually best
- When troubleshooting, test systematically (local to remote)
- Know your network's addressing before making changes
- Binary conversion becomes intuitive with practice

---

**Congratulations on completing Lab 12!**

IP addressing is fundamental to everything in networking. The concepts you practiced here will be used constantly throughout your IT career.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 12: TCP/IP Addressing and Subnetting - Solution Guide*