# Lab 1: OSI Model Layer Identification

## Overview
In this hands-on lab, you'll practice identifying which OSI layer handles specific networking protocols and services. This is a critical skill for troubleshooting network issues and understanding how data flows through a network.

## Prerequisites
- Completed Lesson 1: OSI Model & TCP/IP
- Basic understanding of network protocols

## Lab Objectives
By the end of this lab, you will be able to:
1. Identify which OSI layer each protocol operates at
2. Trace data flow through all 7 layers
3. Apply layer-specific troubleshooting techniques

---

## Part 1: Protocol Layer Identification

### Instructions
For each protocol below, identify which OSI layer(s) it operates at. Write your answers in a notebook or text file.

1. **HTTP** - Which layer?
2. **TCP** - Which layer?
3. **IP** - Which layer?
4. **Ethernet** - Which layer?
5. **DNS** - Which layer?
6. **ARP** - Which layer?
7. **SSL/TLS** - Which layer?
8. **MAC Address** - Which layer?
9. **Router** - Which layer(s)?
10. **Switch** - Which layer?

---

## Part 2: Data Flow Tracing

### Scenario
You visit `https://www.example.com` in your web browser. Trace what happens at each OSI layer as your request travels from your computer to the web server.

### Instructions
For each layer (7 down to 1 on sending, 1 up to 7 on receiving), describe:
- What happens at that layer
- What protocols are involved
- What information is added (encapsulation) or removed (de-encapsulation)

**Example format:**
```
Layer 7 (Application):
- Action: Browser creates HTTP GET request
- Protocol: HTTPS
- Data: HTTP headers, request method
```

Fill in for all 7 layers for both:
1. **Sending** (your computer → web server)
2. **Receiving** (web server → your computer)

---

## Part 3: Troubleshooting Scenarios

### Instructions
For each scenario, identify which OSI layer the problem likely occurs at and explain why.

**Scenario 1:**
Your computer can't resolve `www.google.com` to an IP address, but you can ping `8.8.8.8` successfully.
- Which layer has the issue?
- Why?

**Scenario 2:**
You can ping a server, but when you try to connect via SSH, the connection times out.
- Which layer has the issue?
- Why?

**Scenario 3:**
Packets are being corrupted during transmission over a cable.
- Which layer has the issue?
- Why?

**Scenario 4:**
Your network card isn't being detected by the operating system.
- Which layer has the issue?
- Why?

**Scenario 5:**
A firewall is blocking your web traffic to a specific website.
- Which layer is the firewall operating at?
- Why?

---

## Part 4: Real-World Application

### Case Study
You're a network administrator. A user reports they can't access the company intranet website, but other users can access it fine.

### Your Task
Create a troubleshooting plan using the OSI model:

1. List what you would check at each layer (start from Layer 1, work up)
2. For each layer, identify:
   - What tools you would use (ping, traceroute, etc.)
   - What you're testing
   - What a successful result looks like

---

## Self-Assessment Checklist

Before viewing the solution, verify you've completed:

- [ ] Identified the OSI layer for all 10 protocols in Part 1
- [ ] Traced data flow through all 7 layers for both sending and receiving in Part 2
- [ ] Analyzed all 5 troubleshooting scenarios in Part 3
- [ ] Created a complete troubleshooting plan for the case study in Part 4
- [ ] Reviewed your answers and made sure they make sense

---

## Tips for Success

- **Think in layers:** Always approach problems systematically from bottom to top
- **Remember encapsulation:** Each layer adds its own header/trailer
- **Use the right tools:** Different tools work at different layers (ping = Layer 3, traceroute = Layer 3, etc.)
- **Protocol stacks:** Most protocols operate at multiple layers

---

## Next Steps

After completing this lab:
1. Compare your answers with the solution
2. Understand any mistakes you made
3. Try creating your own scenarios to practice
4. Move on to Lesson 2: Network Topologies & Types

---

**Estimated Time:** 20-30 minutes
**Difficulty:** Beginner
**XP Reward:** 50 XP
