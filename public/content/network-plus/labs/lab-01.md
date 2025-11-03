# Lab 1: OSI Model in Action

## 🎯 What You'll Do
Explore your own network using command-line tools and see the OSI model working in real life. You'll discover how different layers communicate and experience an "aha!" moment that makes the theory click.

**Time:** 20 minutes  
**Difficulty:** Beginner  
**Tools Needed:** Command line (built-in), web browser, paper/pencil  
**XP Reward:** 50 XP

---

## 🔧 Tools Needed
- ✅ Command Prompt (Windows) or Terminal (Mac/Linux) - already on your computer
- ✅ Web browser (any)
- ✅ Paper and pencil (or any drawing tool)
- ✅ Phone camera (to photograph your diagram)

**No downloads required!** Everything you need is already installed.

---

## Part 1: Network Detective 🔍

Let's find out what's happening on your network right now.

### Step 1: Open Your Command Line

**Windows:**
- Press `Windows Key + R`
- Type `cmd` and press Enter

**Mac:**
- Press `Command + Space`
- Type `terminal` and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

---

### Step 2: Discover Your Network Identity

**Type this command and press Enter:**

```bash
# Windows users:
ipconfig /all

# Mac/Linux users:
ifconfig
```

**📸 Take a screenshot of the results!**

**Find and write down:**
1. **Your IP Address** - Looks like `192.168.1.100` or `10.0.0.5`
   - This is your **Layer 3 (Network Layer)** address
   - Every device needs one to communicate

2. **Your MAC Address** - Looks like `AA-BB-CC-DD-EE-FF` or `aa:bb:cc:dd:ee:ff`
   - This is your **Layer 2 (Data Link Layer)** address
   - It's burned into your network card

3. **Your Default Gateway** - Usually looks like `192.168.1.1` or `10.0.0.1`
   - This is your router's IP address
   - Your gateway to the internet!

💡 **What you just learned:** Your computer operates at multiple OSI layers simultaneously!

---

### Step 3: See DNS (Layer 7) in Action

DNS (Domain Name System) converts website names into IP addresses. Let's watch it work!

**Type this command:**

```bash
nslookup www.google.com
```

**📸 Take a screenshot!**

**You should see something like:**
```
Server:  [your DNS server]
Address:  [DNS server IP]

Name:    www.google.com
Address:  142.250.80.46
```

**What just happened?**
- You asked "What's Google's IP address?" (Layer 7 - Application)
- DNS server responded with the answer
- This happens EVERY time you visit a website!

**Try these too:**
```bash
nslookup www.youtube.com
nslookup www.facebook.com
nslookup www.amazon.com
```

Notice how each domain name has a different IP address? That's DNS doing its job at Layer 7!

---

### Step 4: Test Connectivity (Layer 3)

Now let's test if you can actually reach Google's servers.

**Type this command:**

```bash
ping 8.8.8.8
```

(That's Google's public DNS server)

**📸 Take a screenshot!**

**You should see:**
```
Reply from 8.8.8.8: bytes=32 time=15ms TTL=117
Reply from 8.8.8.8: bytes=32 time=14ms TTL=117
Reply from 8.8.8.8: bytes=32 time=16ms TTL=117
```

**What this means:**
- Your computer sent a message (ICMP echo request)
- Google's server received it
- Google's server replied back
- This all happened at **Layer 3 (Network Layer)**
- The "time" shows how long the round trip took in milliseconds

**Press `Ctrl + C` to stop the ping.**

---

### Step 5: Trace the Path (Layer 3)

Let's see the actual route your data takes to reach Google!

**Type this command:**

```bash
# Windows:
tracert www.google.com

# Mac/Linux:
traceroute www.google.com
```

**📸 Take a screenshot after it finishes!**

**You'll see something like:**
```
1    <1 ms    <1 ms    <1 ms    192.168.1.1          [Your router]
2    10 ms    11 ms     9 ms    10.0.0.1             [ISP router]
3    15 ms    14 ms    16 ms    72.14.239.232        [ISP backbone]
...
10   20 ms    19 ms    21 ms    142.250.80.46        [Google!]
```

**What you're seeing:**
- Each line is a "hop" - a router your data passes through
- Your data might travel through 10-15 routers to reach Google!
- This visualization shows Layer 3 routing in action

💡 **Fun fact:** Your data took the same journey just now when you ran nslookup!

---

## Part 2: The Magic Trick - Bypass DNS! 🎩✨

This is where theory becomes **real**. Ready for your "aha!" moment?

### Step 1: Use Google Normally

Open your web browser and visit:
```
www.google.com
```

Works perfectly, right? That's because:
1. **Layer 7:** Browser asks DNS "What's google.com's IP?"
2. **Layer 7:** DNS responds "It's 142.250.80.46"
3. **Layer 3-7:** Browser connects using that IP

---

### Step 2: Skip Layer 7 (DNS)!

Now type this **IP address** directly into your browser's address bar:

```
142.250.80.46
```

Press Enter.

**🤯 MIND BLOWN:** You still see Google's homepage!

**Why does this work?**
- You **bypassed Layer 7 (DNS)** completely
- You went straight to **Layer 3 (IP addressing)**
- Browsers don't actually need domain names - they need IP addresses!
- DNS just makes it easier for humans to remember names

---

### Step 3: Prove It

Try these experiments:

**Experiment 1:**
- Disconnect your Wi-Fi
- Try visiting `www.google.com` → Won't work (no DNS)
- Reconnect and type `142.250.80.46` → Still works!

**Experiment 2:**
- Get YouTube's IP: `nslookup www.youtube.com`
- Copy the IP address
- Type that IP in your browser → You see YouTube!

**🎯 This proves that:**
- Layer 3 (IP) and Layer 7 (DNS) are separate and independent
- DNS is a convenience, not a requirement
- Understanding layers helps you troubleshoot real problems

---

## Part 3: Draw Your Network 🎨

Now that you've seen the OSI model in action, let's visualize it.

### Your Task:

On paper (or digitally), draw a simple diagram showing:

1. **Your Computer** (left side)
2. **Your Router/Gateway** (middle)
3. **The Internet** (cloud shape)
4. **Google's Server** (right side)

### Label Each Connection With OSI Layers:

**Between your computer and router:**
- Layer 1: Physical cable or Wi-Fi radio waves
- Layer 2: MAC addresses (your MAC ↔ router's MAC)
- Layer 3: IP addresses (your IP → router's IP)

**Between router and Google:**
- Layer 3: IP routing through multiple hops
- Layer 4: TCP connection (port 443 for HTTPS)
- Layer 7: HTTP request for webpage

### Example (simple version):

```
[Your Computer]  →→→  [Your Router]  →→→  [Internet Cloud]  →→→  [Google Server]
  Layer 1: Ethernet/Wi-Fi
  Layer 2: MAC addresses
  Layer 3: IP: 192.168.1.100 → 192.168.1.1 → 8.8.8.8
  Layer 7: DNS lookup for www.google.com
  Layer 7: HTTP/HTTPS request
```

**📸 Take a photo of your diagram!**

**Bonus:** Add what you learned from your commands:
- Your actual IP address
- Your actual MAC address
- Your gateway IP
- Google's IP from nslookup

---

## Part 4: Real-World Troubleshooting 🔧

Now use your new knowledge to troubleshoot a common problem.

### Scenario:

Your friend says "I can't get to Facebook!"

**Your diagnostic plan using OSI layers:**

**Layer 1 (Physical):**
- Check: Is the ethernet cable plugged in? Is Wi-Fi turned on?
- Command: Look at network icon in taskbar

**Layer 2 (Data Link):**
- Check: Is the network adapter working?
- Command: `ipconfig /all` - Do you have a MAC address?

**Layer 3 (Network):**
- Check: Do you have an IP address?
- Command: `ipconfig` - Is it 169.254.x.x? (That means DHCP failed!)
- Command: `ping 8.8.8.8` - Can you reach the internet?

**Layer 7 (Application):**
- Check: Is DNS working?
- Command: `nslookup www.facebook.com` - Does it return an IP?
- Test: Type Facebook's IP directly in browser

**Write down:** Which layer would you check first? Which commands would you run?

---

## Verification Checklist ✅

Before finishing this lab, make sure you've completed:

- [ ] Ran `ipconfig /all` (or `ifconfig`) and found your IP and MAC address
- [ ] Ran `nslookup www.google.com` and saw DNS in action
- [ ] Ran `ping 8.8.8.8` and got successful replies
- [ ] Ran `tracert www.google.com` and saw the routing path
- [ ] Visited a website using its IP address directly (bypassed DNS)
- [ ] Drew a network diagram labeling OSI layers
- [ ] Took screenshots of your command outputs
- [ ] Can explain how data flows through OSI layers

---

## What You Learned 🎓

By completing this lab, you now understand:

✅ **Layer 1 (Physical):** Your cable/Wi-Fi carries the actual signals  
✅ **Layer 2 (Data Link):** MAC addresses identify your network card  
✅ **Layer 3 (Network):** IP addresses route data across networks  
✅ **Layer 4 (Transport):** TCP/UDP manage connections (you used ICMP for ping)  
✅ **Layer 7 (Application):** DNS translates names to IPs, HTTP delivers webpages  

**Most importantly:** You learned that the OSI model isn't just theory - it's how your network actually works RIGHT NOW!

---

## 🎯 Challenge Yourself (Optional)

Want to go deeper? Try these:

1. **Find more IPs:**
   - Run `nslookup` on 10 different websites
   - Visit each one using just the IP
   - Notice some don't work? That's because of virtual hosting (multiple sites, one IP)

2. **Map your home network:**
   - Run `arp -a` to see all devices on your network
   - Each entry shows an IP and MAC address
   - Can you identify which devices these are? (Phone, TV, laptop?)

3. **Test DNS failure:**
   - Change your DNS settings to a fake server (like 1.2.3.4)
   - Try visiting websites by name → Fails!
   - Try visiting by IP → Still works!
   - This proves DNS is Layer 7, separate from Layer 3

4. **Analyze traffic:**
   - Run `netstat -an` to see all active connections
   - See all those Layer 4 port numbers?
   - Each connection shows IP:port (Layer 3 + Layer 4 working together)

---

## 💡 Real-World Application

**This lab taught you real troubleshooting skills:**

**Scenario 1:** "I can't access any websites"
- Try `ping 8.8.8.8` → If fails, it's Layer 3 (IP) or below
- Try `nslookup google.com` → If fails, it's Layer 7 (DNS)
- Try visiting by IP → If works, DNS is the problem!

**Scenario 2:** "Internet is really slow"
- Run `ping` and check the time → High latency = Layer 3 issue
- Run `tracert` → Find where the slowdown occurs

**Scenario 3:** "Can't connect to work VPN"
- Check IP: `ipconfig` → Layer 3
- Check connectivity: `ping [vpn server]` → Layer 3
- Check port: `telnet [vpn server] [port]` → Layer 4

**You now have diagnostic tools for real network problems!**

---

## 📊 Lab Summary

**Time Spent:** ~20 minutes  
**Commands Used:** 5 (ipconfig, nslookup, ping, tracert, arp)  
**XP Earned:** 50 XP  
**Skills Gained:**
- Command-line networking tools
- OSI layer identification
- DNS troubleshooting
- Network path tracing
- Real-world diagnostics

---

## 🎉 Congratulations!

You've completed Lab 1! You didn't just read about the OSI model - you **saw it in action** on your own computer.

**What's Next?**
- Review Lesson 1 with your new understanding
- Take the Lesson 1 quiz (should be much easier now!)
- Practice these commands daily
- Move on to Lesson 2: Network Topologies & Types

**Pro Tip:** Bookmark this lab and repeat it occasionally. The commands you learned here (`ping`, `nslookup`, `tracert`, `ipconfig`) are used by network professionals EVERY SINGLE DAY.

---

**Ready to continue your Network+ journey? Let's go! 🚀**

---

*CertifyStack - Network+ N10-009*  
*Lab 1 of 30*  
*Created for hands-on learners who want real skills*