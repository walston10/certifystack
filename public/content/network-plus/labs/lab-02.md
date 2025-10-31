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
