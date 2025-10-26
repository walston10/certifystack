# Lesson 2: Network Topologies & Types

**Estimated Time:** 20-25 minutes  
**Domain:** Networking Concepts  
**Exam Objectives Covered:** 1.2

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Identify and explain the five main physical network topologies
- Understand the difference between physical and logical topologies
- Recognize advantages and disadvantages of each topology
- Identify which topologies are used in real-world scenarios
- Choose appropriate topologies for different network situations

---

## Video Resources

**Watch:** [Network Topologies Explained - PowerCert](https://www.youtube.com/watch?v=zbqrNg4C98U)  
**Visual Guide:** [Topology Overview - Professor Messer](https://www.youtube.com/watch?v=H7W-zP94HtM)  
**Real World:** [Network Topologies in Practice - Sunny Classroom](https://www.youtube.com/watch?v=6T8mFeIEIYM)

---

## Introduction

In Lesson 1, you learned how data flows through networks using the OSI model. Now we're going to talk about how networks are actually laid out physically—the blueprint, if you will.

Think of it this way: the OSI model is like understanding how cars work (engine, transmission, wheels). Network topology is like understanding different road systems (highways, city grids, cul-de-sacs). Both are important, but they answer different questions.

Here's why topology matters in the real world:

**Scenario 1:** Your boss asks you to set up a new office. Do you run one cable and tap everything into it? Or do you run individual cables to a central switch? Your answer affects cost, reliability, and how easy it'll be to fix problems.

**Scenario 2:** A company has four regional offices. They need them all connected, but full redundancy would cost $200,000. Partial redundancy costs $120,000. Can you design something that's reliable but won't bankrupt them?

**Scenario 3:** Someone unplugs a cable in the server room, and the entire building loses network access. What topology are they using, and how would you fix this single point of failure?

Let's learn how to answer these questions.

---

## Physical vs Logical Topology

Before we dive in, you need to know these two terms:

**Physical Topology** = What you can see. The actual wires, where they go, what they plug into.

**Logical Topology** = How data actually flows, which might be different from the physical layout.

Here's an example: You might have 50 computers all plugged into a switch (physical star), but the switch is broadcasting traffic to all devices like they're on one shared cable (logical bus). 

For the Network+ exam, focus on **physical topologies**. They show up way more often.

---

## The Five Main Topologies

### 1. Star Topology (Most Common)

This is what you see in basically every modern office. All devices connect to a central switch or hub. If you've ever plugged a computer into a wall jack that goes back to a server closet, you've used star topology.

**Visual:**
```
    Computer
       |
Computer-[Switch]-Computer
       |
    Computer
```

**How it works:**
- Each device gets its own dedicated cable to the switch
- The switch forwards traffic between devices
- If Computer A wants to talk to Computer B, it goes through the switch

**The good:**
- Easy to set up—just plug things in
- Easy to troubleshoot—if there's a problem, check the switch first
- One dead computer doesn't kill the whole network
- Adding new devices doesn't disrupt anything
- This is what 99% of office networks use

**The bad:**
- If the switch dies, everything dies (single point of failure)
- You need more cable than some other topologies
- The switch becomes a bottleneck if you're cheap and buy a slow one

**Real-world use:**
- Every office you've ever worked in
- Your home network (your router is the center)
- Schools, libraries, coffee shops

**Exam tip:** When CompTIA gives you a scenario about a LAN, assume it's star unless they tell you otherwise.

---

### 2. Mesh Topology (The Redundancy King)

In a mesh network, devices have multiple connections to other devices. Think of it like a spider web—lots of interconnected paths.

There are two flavors:

**Full Mesh** = Every device connects to every other device. Extremely reliable, extremely expensive, totally impractical for most situations.

**Partial Mesh** = Only critical devices have redundant connections. This is what you'll actually see in the real world.

**Visual (4 devices in full mesh):**
```
Device A --- Device B
  |    \  /  |
  |     \/   |
  |     /\   |
  |    /  \  |
Device C --- Device D
```

**The formula you MUST memorize:**

Full mesh connections = **n(n-1)/2** where n = number of devices

Examples:
- 4 devices = 4(3)/2 = 6 connections
- 5 devices = 5(4)/2 = 10 connections  
- 10 devices = 10(9)/2 = 45 connections

See how it explodes? This is why full mesh is rare.

**The good:**
- No single point of failure
- If one link dies, traffic just takes another path
- Great for critical connections that absolutely cannot go down

**The bad:**
- Expensive (so many cables and network interfaces)
- Complex to configure and maintain
- Doesn't scale well (look at that formula again)

**Real-world use:**
- WAN connections between company offices (partial mesh)
- Critical infrastructure (power grid control systems, financial trading networks)
- Anywhere downtime costs serious money

**Exam tip:** CompTIA loves asking you to calculate mesh connections. Practice that formula.

---

### 3. Bus Topology (Obsolete But Still Tested)

Imagine one long cable running down a hallway. Every computer taps into this one cable. There's a terminator at each end to prevent signal bounce.

**Visual:**
```
[Terminator]-Computer-Computer-Computer-Computer-[Terminator]
                    Single Cable
```

**Why you need to know this:**
You won't see it in the real world (it died in the 1990s), but CompTIA still tests it. They want you to know why it's obsolete and what replaced it.

**How it worked:**
- All devices share one cable
- Data goes everywhere (broadcast)
- Terminators at both ends prevent signal reflection
- Used coaxial cable (like old cable TV)

**The good:**
- Cheap (one cable for everything)
- Simple concept

**The bad:**
- One break ANYWHERE kills the ENTIRE network
- Incredibly hard to find where the break is
- Adding or removing a device disrupts the whole network
- Performance degrades as you add devices
- Did I mention if the cable breaks anywhere, everything dies?

**Real-world use:**
- Literally nothing. It's dead. Replaced by star topology in the late 90s.

**Exam tip:** Know that bus is obsolete and *why*. CompTIA loves "why is this bad" questions.

**Technologies that used bus:**
- 10BASE2 (ThinNet)
- 10BASE5 (ThickNet)
- Stuff your dad might have used in 1985

---

### 4. Ring Topology (Also Obsolete, But Not Quite As Dead)

Devices connect in a closed loop. Each device has exactly two neighbors. Data travels around the ring in one direction (or both, in dual-ring setups).

**Visual:**
```
    Device A
   /        \
Device D    Device B
   \        /
    Device C
```

**How it worked:**
- Data goes around the circle
- Each device repeats the signal to the next device
- Token passing controlled who could send data
- If you had the token, you could transmit

**The good:**
- No collisions (token controls access)
- Decent performance under heavy load
- Fair access for all devices

**The bad:**
- Break anywhere = dead network
- Adding or removing devices requires shutting down the network
- One malfunctioning device can kill everything
- Obsolete for LANs (replaced by switched Ethernet)

**Real-world use:**
- **Single ring:** Basically extinct (Token Ring networks from the 80s/90s)
- **Dual ring:** Still used in telecom (SONET/SDH) where one ring is backup

**Exam tip:** CompTIA might give you a scenario with "token passing" or "devices in a circle"—that's ring topology. Single ring is dead; dual ring exists in telecommunications.

---

### 5. Hybrid Topology (Real World Reality)

This is what actual networks look like. You combine different topologies because different parts of your network have different needs.

**Most common example:**
- Computers on each floor connect to a floor switch (star)
- Floor switches connect to core switches (another star, or partial mesh for redundancy)
- Core switches connect to your internet router and data center

**Why this makes sense:**
- Use star where it's cheap and easy (endpoints)
- Use mesh where you need redundancy (core infrastructure)
- Use point-to-point for dedicated WAN links

**The good:**
- Flexible—use the right tool for each job
- Scalable—easy to expand
- Realistic—this is how real networks work

**The bad:**
- More complex to design and document
- Requires more planning than a simple topology

**Real-world use:**
- Literally every enterprise network
- Your office, your school, your company's headquarters

**Exam tip:** When CompTIA describes a large network, it's almost certainly hybrid. Look for key phrases like "access layer" and "core layer."

---

## Special Case: Point-to-Point

This isn't really a topology—it's just two devices connected directly. But you need to know the term.

**Visual:**
```
[Office A] ============ [Office B]
```

**Where you see this:**
- Leased lines between two locations
- Fiber connection between two buildings
- VPN tunnel between two sites
- Wireless bridge between two buildings

**Key characteristic:** Direct, dedicated connection. No sharing.

---

## Topology Comparison

Here's the cheat sheet for the exam:

| Topology | Single Point of Failure? | Easy to Troubleshoot? | Still Used? | Best For |
|----------|-------------------------|---------------------|-------------|----------|
| Star | Yes (the switch) | Very easy | Yes | LANs |
| Mesh | No | Complex | Yes (partial) | WANs, critical links |
| Bus | Yes (entire cable) | Nightmarishly hard | No | Nothing |
| Ring | Yes (any break) | Moderate | Barely (dual-ring telecom only) | Legacy systems |
| Hybrid | Depends | Moderate | Yes | Real networks |

---

## Key Takeaways

Here's what you absolutely need to remember:

- **Star is the standard** for modern LANs. When in doubt, assume star.
- **Mesh provides redundancy** but doesn't scale (that n(n-1)/2 formula).
- **Bus and ring are obsolete** for LANs. Know why they failed.
- **Hybrid is reality.** Real networks combine topologies.
- **Memorize the mesh formula.** CompTIA will make you calculate connections.
- **Understand the trade-offs.** Cost vs. redundancy vs. complexity.

---

## Check Your Understanding

**Question 1:** Your company has a network where all 30 computers connect to a single switch. Yesterday the switch died, and the entire office lost network access. What topology is this, and what's the problem?

<details>
<summary>Show Answer</summary>
Star topology. The problem is a single point of failure at the central switch. When it failed, everything went down. Solution: Add a second redundant switch and configure them for failover, or at minimum, keep a spare switch on-site for quick replacement.
</details>

**Question 2:** A company wants to connect 5 regional offices with full mesh. How many WAN connections will they need, and how much will it cost if each connection costs $3,000/month?

<details>
<summary>Show Answer</summary>
Using the formula n(n-1)/2: 5(4)/2 = 10 connections. Cost: 10 × $3,000 = $30,000 per month, or $360,000 per year. This is why companies use partial mesh instead.
</details>

**Question 3:** You're troubleshooting an old network where someone cut a cable during construction, and now 50 computers can't access the network. The cable runs through multiple rooms, and you can't tell where it was cut. What topology is this, and why is it terrible?

<details>
<summary>Show Answer</summary>
Bus topology. It's terrible because any break anywhere kills the entire network, and finding the break requires physically tracing the cable (which might run through walls and ceilings). This is why bus was replaced by star—if a cable breaks in star topology, only one device loses connectivity, and you know exactly which device by looking at the switch ports.
</details>

**Question 4:** Which topology would you recommend for a small startup with 15 employees, limited IT knowledge, and a tight budget?

<details>
<summary>Show Answer</summary>
Star topology with a single switch. It's cheap, simple to set up, easy to troubleshoot, and industry-standard. They can buy a 24-port switch for under $200, run Cat6 cables to each desk, and they're done. As they grow, they can add more switches. No need to overcomplicate things.
</details>

---

## Hands-On Lab: Network Design Challenge

**Time:** 30-45 minutes  
**Tools needed:** Paper and pencil, OR [draw.io](https://draw.io) (free online tool)

### Lab Overview

You're going to design actual networks for real scenarios. This isn't busywork—this is what network engineers do every day. You'll make decisions about cost vs. reliability, justify your choices, and create network diagrams that you could actually show to a client or boss.

---

### Lab 1: Small Business Office Network

**Scenario:**
You've been hired to design a network for a new dental office. Here's what they need:

- **25 computers** (front desk, billing, treatment rooms, break room)
- **4 network printers**
- **1 server** (patient records—must be secure and always accessible)
- **2 VoIP phones** for the front desk
- **WiFi** for patients in the waiting room (separate from business network)
- **Budget:** $5,000 for networking equipment
- **Constraint:** They don't have an IT person on staff

**Your Task:**

1. **Draw the network topology** (use draw.io or sketch it on paper)
2. **List the equipment** you'll need (be specific: "1x 48-port gigabit switch")
3. **Justify your topology choice** (Why this design?)
4. **Identify the single point of failure** (What happens if X fails?)
5. **Propose one improvement** if budget allowed another $2,000

**Hints to get you started:**
- What topology makes sense for 25 computers in one building?
- How will you separate guest WiFi from the business network?
- Where should the server physically live?
- How many network drops (wall jacks) do they need?

<details>
<summary>Show Example Solution</summary>

**Topology Choice:** Star topology with one central switch

**Network Diagram:**
```
                    [Internet]
                        |
                   [Firewall]
                        |
                   [Core Switch]
              /    /    |    \    \
          [AP] [AP] [Server] [VoIP] [Treatment PC 1-20]
                              |
                         [IP Phones]
```

**Equipment List:**
- 1x 48-port gigabit managed switch ($300-500)
- 1x Firewall/Router with VLANs ($200-400)
- 2x WiFi Access Points ($100 each)
- 1x Small rack or wall-mount bracket ($100)
- Cat6 cable, wall jacks, patch cables ($500-1000)
- 1x Patch panel ($50)
- **Total: ~$2,000-3,000** (under budget!)

**Why This Design:**
- **Star topology** because it's simple, scalable, and easy to troubleshoot (no IT staff)
- **Single switch** handles all devices (25 PCs + 4 printers + 2 phones + 2 APs + server = 34 devices, well under 48 ports)
- **Separate VLAN for guest WiFi** to isolate patient devices from business network
- **Server in locked closet** for physical security
- **Managed switch** allows VLANs and future growth

**Single Point of Failure:**
The core switch. If it dies, the entire office goes down.

**$2,000 Improvement:**
Add a second switch configured for redundancy. Connect both switches to each other and to critical devices (server, APs, VoIP). If one fails, the other takes over. More realistic option: Keep a cold spare switch on-site for quick replacement (costs $500 instead of $2,000).

</details>

---

### Lab 2: Multi-Site Company WAN

**Scenario:**
You're designing a WAN for a regional food distributor with four locations:

- **Headquarters** (Houston) - 100 employees, all servers and applications here
- **Warehouse A** (Dallas) - 30 employees, heavy data transfer to HQ (inventory updates)
- **Warehouse B** (San Antonio) - 20 employees, moderate data transfer
- **Warehouse C** (Austin) - 15 employees, light data transfer

**Requirements:**
- All locations must communicate with HQ constantly
- Dallas and HQ transfer large files (inventory databases) multiple times per day
- System cannot go completely down if one WAN link fails
- Monthly WAN costs: Each connection costs $3,000/month

**Budget constraints:**
- **Full mesh** (6 connections) = $18,000/month = $216,000/year (too expensive!)
- **Simple star** (3 connections) = $9,000/month (cheap but no redundancy)
- **Your budget:** $12,000-15,000/month

**Your Task:**

1. **Calculate connections for full mesh** (use the formula)
2. **Design a partial mesh** that provides redundancy but saves money
3. **Draw your design**
4. **Explain what happens if each link fails**
5. **Calculate your monthly and annual costs**

**Questions to consider:**
- Which sites absolutely need redundant connections?
- Can some sites survive with just one path to HQ?
- Where should you spend money for maximum reliability?

<details>
<summary>Show Example Solution</summary>

**Full Mesh Calculation:**
4 sites: n(n-1)/2 = 4(3)/2 = 6 connections = $18,000/month

**My Partial Mesh Design: 5 connections**

**Diagram:**
```
   Dallas ============= Houston (HQ)
      |                   ||
      |                   ||  (redundant link)
      |                   ||
   Austin ----------- San Antonio
```

**Connections:**
1. HQ ←→ Dallas (primary critical link)
2. HQ ←→ Dallas (secondary redundant link for high-volume transfers)
3. HQ ←→ San Antonio
4. HQ ←→ Austin  
5. Dallas ←→ Austin (backup path)

**Cost: 5 × $3,000 = $15,000/month = $180,000/year**
**Savings vs. full mesh: $36,000/year**

**Failure Analysis:**

- **If HQ-Dallas primary fails:** Traffic automatically fails over to HQ-Dallas secondary link
- **If HQ-Dallas secondary fails:** Primary link handles all traffic (slower but functional)
- **If HQ-San Antonio fails:** San Antonio can route through Dallas or Austin to reach HQ
- **If HQ-Austin fails:** Austin can route through Dallas to HQ
- **If Dallas-Austin fails:** Both can still reach HQ directly

**Why This Design:**
- Dallas gets TWO links to HQ because they move the most data
- All sites have at least one backup path to HQ
- Within budget
- No single link failure completely isolates any site

</details>

---

### Lab 3: Fixing a Failed Network

**Scenario:**
You're consulting for a company with serious network problems. Here's their current setup:

- **Installed 20 years ago** using coaxial cable
- **Bus topology** running through the entire building
- **80 devices** tapped into the main cable
- **Frequent outages** (2-3 times per month)
- **Last outage took 6 hours to fix** because they couldn't find the cable break
- **Employees are furious** and threatening to quit
- **Your budget:** $15,000

**Your Task:**

1. **Diagnose the problems** with their current topology
2. **Design a replacement network** using modern technology
3. **Create a migration plan** (you can't shut down the entire company for a week)
4. **Estimate costs**

**Deliverables:**
- New network diagram
- Equipment list with prices
- Week-by-week migration timeline
- Explanation you can give to the CEO (who isn't technical)

<details>
<summary>Show Example Solution</summary>

**Problems with Current Setup:**
1. **Bus topology is obsolete** (hasn't been used since the 1990s)
2. **Single point of failure:** Any break anywhere kills 80 devices
3. **Impossible to troubleshoot:** Cable runs through walls/ceilings
4. **No vendor support:** Can't buy replacement parts
5. **Performance degrades** as devices are added
6. **Security nightmare:** All traffic is broadcast to all devices

**New Design: Star Topology**

**Diagram:**
```
                  [ISP/Internet]
                        |
                  [Firewall/Router]
                        |
                  [Core Switch 48-port]
                 /      |      \
     [Floor 1 Switch] [Floor 2 Switch] [Floor 3 Switch]
         24-port          24-port          24-port
       /  |  |  \       /  |  |  \       /  |  |  \
      PC PC PC PC      PC PC PC PC      PC PC PC PC
```

**Equipment List:**
- 1x Core switch, 48-port gigabit managed: $600
- 3x Access switches, 24-port gigabit: $300 each = $900
- Cat6 cable (bulk, 1000ft): $150 per box × 3 = $450
- 80x wall jacks and patch panels: $2,000
- 80x patch cables: $400
- Cable installation labor: $8,000
- Network rack and accessories: $500
- Firewall upgrade: $800
- **Total: $13,650** (under budget!)

**Migration Timeline:**

**Week 1: Planning**
- Survey building, map cable runs
- Order all equipment
- Schedule work during evenings/weekends

**Week 2-3: Infrastructure Installation**
- Install switches in server room/MDF
- Run Cat6 cables from MDF to each desk (do this after hours)
- Install wall jacks
- Label everything clearly
- Test all runs with cable tester

**Week 4: Parallel Operation**
- Keep old bus network running
- Connect new star network
- Test thoroughly
- Move non-critical devices first (break room PCs, printers)

**Week 5: Full Cutover**
- Friday evening: Migrate all remaining devices
- Saturday: Remove old coax cabling
- Sunday: Final testing
- Monday: Everyone on new network

**Week 6: Cleanup**
- Monitor for issues
- Train staff
- Create network documentation
- Celebrate!

**CEO Explanation:**

"Your current network is 20 years old and using technology from the 1990s. Every time there's an outage, we lose thousands of dollars in productivity trying to find the problem. 

I'm recommending we replace it with modern switched Ethernet—the same technology every Fortune 500 company uses. Here's what changes:

- **Reliability:** If one cable breaks, only one computer goes down, not 80
- **Troubleshooting:** We can identify problems in seconds, not hours
- **Performance:** Everyone gets dedicated gigabit speeds
- **Security:** We can isolate devices and implement proper security
- **Future-proof:** This will last another 10-15 years

**Cost:** $13,650 one time  
**Downtime:** One weekend  
**ROI:** Eliminates 2-3 outages per month (saving ~$10,000/month in lost productivity)

We can't afford NOT to do this."

</details>

---

### Lab 4: Design Your Own Network

**Your Turn:**

Take a real location you know well (your school, your workplace, your home, a family business) and:

1. **Document what they have now**
   - How many devices?
   - What topology?
   - What problems exist?

2. **Design improvements**
   - Draw the ideal network
   - List equipment needed
   - Estimate costs (research real prices)

3. **Justify your choices**
   - Why this topology?
   - What problems does it solve?
   - What could still go wrong?

**Submission:** Save your diagram and write-up. If you're serious about Network+, add this to a portfolio. Real IT experience matters in interviews.

---

## Lab Completion Checklist

If you completed these labs, you should now be able to:

- Design appropriate networks for different scenarios
- Justify topology choices based on requirements
- Create professional network diagrams
- Calculate costs and explain ROI to non-technical people
- Identify single points of failure
- Plan network migrations
- Troubleshoot topology-related problems

These aren't just academic exercises—this is what network engineers do every day.

---

## Coming Up in Lesson 3: IP Addressing Fundamentals

You now understand:
- **Lesson 1:** How data flows (OSI Model)
- **Lesson 2:** How networks are laid out (Topologies)

**Next up:** How devices are addressed so they can actually communicate.

**Lesson 3 will cover:**
- IPv4 address structure
- Binary fundamentals (yes, you need to know binary)
- IP address classes
- Public vs Private IP ranges
- Special IP addresses
- Network vs host portions

Think of it this way: topology is the road system, IP addressing is the house numbers. You need both.

---

## Lesson 2 Complete

**What you learned:**
- The 5 main network topologies and when to use each
- Why bus and ring are obsolete
- How to calculate mesh connections
- Real-world network design
- How to identify and fix topology problems

**Progress:** 2 of 30 lessons complete (6.7%)

You're building a solid foundation. Keep going.