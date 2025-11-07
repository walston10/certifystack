# Lesson 1 Lab: OSI Model & TCP/IP

**Estimated Time:** 25-30 minutes  
**Topics:** OSI Model layers, TCP vs UDP, Encapsulation, Troubleshooting

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand the OSI model:

1. **Which OSI layer is responsible for logical addressing (IP addresses)?**
   - a) Layer 2 - Data Link
   - b) Layer 3 - Network
   - c) Layer 4 - Transport
   - d) Layer 7 - Application

2. **What is the PDU (Protocol Data Unit) at Layer 2?**
   - a) Bit
   - b) Segment
   - c) Packet
   - d) Frame 

3. **Which protocol is connection-oriented and guarantees delivery?**
   - a) UDP
   - b) ICMP
   - c) TCP
   - d) IP

4. **At which layer do switches operate?**
   - a) Layer 1 (Physical)
   - b) Layer 2 (Data Link)
   - c) Layer 3 (Network)
   - d) Layer 4 (Transport)

5. **When data is sent from Layer 7 down to Layer 1, what is this process called?**
   - a) Encapsulation
   - b) De-encapsulation 
   - c) Segmentation
   - d) Framing

---

## Section 2: Hands-On Activity (15-20 min)

### Activity A: Trace Data Through the OSI Model

**What you'll do:** Use command-line tools to see the OSI model in action.

**Tools needed:** Command Prompt (Windows) or Terminal (Mac)

#### Step 1: Test TCP Connection (Layer 4)

1. Open Command Prompt or Terminal

2. Type this command:
   ```
   ping www.google.com
   ```

3. **What happened?**
   - Write down the IP address that appears (this is Google's server)
   - Notice the response times
   - This uses **ICMP protocol at Layer 3**, but TCP would work similarly

#### Step 2: See Network Layer Information (Layer 3)

1. Type this command:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`

2. **Find and write down:**
   - Your computer's **IPv4 Address** (Layer 3 - Network)
   - Your **Default Gateway** (Layer 3 - Router's IP)
   - Your **MAC Address** (looks like `00-1A-2B-3C-4D-5E`) (Layer 2 - Data Link)

#### Step 3: View the Physical Connection (Layer 1)

1. Look at your computer - are you connected via:
   - **Ethernet cable** (wired) - Physical Layer using copper cables
   - **WiFi** (wireless) - Physical Layer using radio waves

2. If using WiFi, check your signal strength:
   - Windows: Click WiFi icon in taskbar
   - Mac: Option+Click WiFi icon

#### Step 4: Trace the Route (See Multiple Layers)

1. Type this command:
   - Windows: `tracert www.google.com`
   - Mac/Linux: `traceroute www.google.com`

2. **What you're seeing:**
   - Each line is a "hop" (router) your data passes through
   - Shows **Layer 3 routing** in action
   - Notice how many hops it takes to reach Google

---

### Activity B: Draw the OSI Stack for Your Connection

On paper or using a text editor, draw what just happened when you pinged Google:

**Example format:**
```
YOU → ping www.google.com → GOOGLE

Layer 7 (Application):    [Your browser/ping command]
Layer 6 (Presentation):   [Data formatting]
Layer 5 (Session):        [Connection management]
Layer 4 (Transport):      [TCP/UDP segments]
Layer 3 (Network):        [Your IP] → [Router IPs] → [Google's IP]
Layer 2 (Data Link):      [Your MAC] → [Router MAC] → [Switch MACs]
Layer 1 (Physical):       [WiFi/Ethernet cable]
```

**Fill in what YOU found:**
- Your IP address (Layer 3)
- Your MAC address (Layer 2)
- Connection type: WiFi or Ethernet (Layer 1)
- Number of hops from tracert (Layer 3 routers)

---

### Activity C: Compare TCP vs UDP (Optional - 5 min)

**Understanding the difference:**

1. Open a web browser and go to any HTTPS website (like https://google.com)
   - This uses **TCP** (connection-oriented, reliable)
   - Notice it loads completely - no missing pieces

2. Now think about a Zoom call or online gaming:
   - These use **UDP** (connectionless, faster)
   - Ever had a video freeze but audio continues? That's UDP - if packets drop, it keeps going

**Write down:** One example of when you'd want TCP and one when you'd want UDP.

---

## Section 3: Reflection (5 min)

**Troubleshooting Scenario:**

You're helping a friend whose internet isn't working. Using the OSI model, you'd troubleshoot bottom-up:

Think about these questions:
1. **Layer 1 (Physical):** Is the cable plugged in? Is WiFi turned on?
2. **Layer 2 (Data Link):** Can you see other devices on your network?
3. **Layer 3 (Network):** Do you have an IP address? Can you ping your router?
4. **Layer 4 (Transport):** Are any applications working at all?

**Your task:** Think of a time YOUR internet wasn't working. At which OSI layer was the problem? How did you fix it?

---

## What You Learned Today

- ✅ You traced data through multiple OSI layers using real commands
- ✅ You identified your Layer 2 (MAC) and Layer 3 (IP) addresses
- ✅ You saw Layer 3 routing in action with tracert
- ✅ You understand the difference between TCP (reliable) and UDP (fast)
- ✅ You can use the OSI model for troubleshooting

**Next Lesson:** Network Topologies & Types - How networks are physically and logically arranged