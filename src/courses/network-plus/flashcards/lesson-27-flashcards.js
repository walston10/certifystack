// Flashcards for Lesson 27: Troubleshooting Methodology

export const lesson27Flashcards = [
  {
    id: 1,
    front: "What are CompTIA's 7 steps of network troubleshooting methodology?",
    back: "1) Identify the problem - gather info, question users, identify symptoms. 2) Establish theory of probable cause - question the obvious, consider multiple approaches. 3) Test theory to determine cause - confirm or establish new theory. 4) Establish plan of action - determine steps, consider impact. 5) Implement solution or escalate - make changes, document. 6) Verify full system functionality - test, implement preventive measures. 7) Document findings, actions, outcomes - update records, lessons learned. MUST know this for exam!"
  },
  {
    id: 2,
    front: "What should you do in Step 1: Identify the Problem?",
    back: "Gather information: what happened, when started, who affected, error messages. Question users: what changed, when last worked, exact symptoms, can they reproduce. Identify symptoms: connectivity lost, slow performance, errors, intermittent issues. Determine recent changes: updates, config changes, new equipment. Duplicate problem if possible: reproduce to verify. Scope: one user or multiple, one location or many. Don't assume - gather facts first!"
  },
  {
    id: 3,
    front: "What does 'question the obvious' mean in troubleshooting?",
    back: "Check simple things FIRST before complex theories. Examples: Is it plugged in? Is it powered on? Is cable connected? Is service enabled? Is correct SSID selected? Did password change? Is there a scheduled outage? Simple fixes solve surprising number of issues. Don't overlook basics in rush to complex solutions. Start with physical layer. KISS principle: Keep It Simple. Obvious solution often correct solution."
  },
  {
    id: 4,
    front: "What is Step 2: Establish Theory of Probable Cause?",
    back: "Develop hypothesis about what's wrong. Consider multiple approaches: top-to-bottom (Application→Physical), bottom-to-top (Physical→Application), divide-and-conquer (start middle). Use: OSI model, experience, symptoms, recent changes. Question the obvious: cable unplugged, service down, wrong config. Multiple theories acceptable. Pick most likely based on: symptoms, probability, ease of testing. Don't commit to theory yet - just develop hypothesis."
  },
  {
    id: 5,
    front: "What troubleshooting approaches can you use (OSI model)?",
    back: "Top-to-bottom: start Layer 7 (Application) down to Layer 1 (Physical). Good for: application-specific issues. Bottom-to-top: start Layer 1 (Physical) up to Layer 7 (Application). Good for: connectivity issues, most common. Divide-and-conquer: start middle layer (Network/Transport), determine direction. Good for: experienced techs, narrow scope quickly. Choose based on: symptoms, experience. Most issues: physical layer, so bottom-up often fastest."
  },
  {
    id: 6,
    front: "What is Step 3: Test Theory to Determine Cause?",
    back: "Test your theory from Step 2. If theory confirmed: move to Step 4 (establish plan). If theory NOT confirmed: return to Step 2 (establish new theory). Testing methods: check configs, review logs, test connectivity, monitor traffic, use tools. Don't skip this: implementing wrong solution wastes time, may cause more problems. One test at a time. Document results. If stuck: escalate or research. Confirm before acting."
  },
  {
    id: 7,
    front: "What is Step 4: Establish Plan of Action?",
    back: "Determine steps to resolve problem. Plan includes: specific actions (commands, changes), sequence of steps, required resources (parts, access, downtime), rollback plan (undo if fails), impact assessment (who/what affected). Consider: business impact, change windows, user notification, backup/rollback. Get approval if needed. Document plan before implementing. Good plan: specific, documented, has rollback, minimizes impact. Don't rush - planning prevents problems."
  },
  {
    id: 8,
    front: "What is Step 5: Implement Solution or Escalate?",
    back: "Execute your plan from Step 4. Make one change at a time: easier to identify what worked/failed. Document each change: commands run, settings changed, time. If solution works: proceed to Step 6. If beyond your scope/authority: ESCALATE (get help, don't break things further). Escalate when: lack skills/knowledge, lack authority/access, lack tools, problem too complex, time-critical. No shame in escalating - better than causing more damage."
  },
  {
    id: 9,
    front: "When should you escalate a problem?",
    back: "Escalate when: 1) Beyond technical skills/knowledge, 2) Lack necessary access/permissions, 3) Risk of causing more damage, 4) Time-critical and stuck, 5) Requires vendor support, 6) Multiple failed solutions, 7) Affects critical systems, 8) Policy requires escalation. To whom: senior techs, manager, vendor support, specialized team. Provide: all troubleshooting done, symptoms, theories tested, documentation. Escalating intelligently shows professionalism, not weakness."
  },
  {
    id: 10,
    front: "What is Step 6: Verify Full System Functionality?",
    back: "Don't just fix immediate problem - verify entire system works. Test: original problem resolved, no new problems created, related systems working, user can perform tasks. Check: connectivity, performance, applications, access. Test with user if possible: they know their workflow. Implement preventive measures: apply to other systems if applicable, update monitoring, adjust thresholds. Don't declare success until comprehensive verification. One fix shouldn't break something else."
  },
  {
    id: 11,
    front: "What preventive measures should you implement after fixing an issue?",
    back: "Identify root cause: fix symptoms AND underlying problem. Apply to similar systems: if one switch failed, check others. Update monitoring: add alerts to detect future occurrences. Adjust configurations: prevent recurrence. Update documentation: reflect current state. Train users: prevent user-caused issues. Schedule maintenance: proactive fixes. Report patterns: multiple similar issues may indicate systemic problem. Reactive fix + proactive prevention = better IT."
  },
  {
    id: 12,
    front: "What is Step 7: Document Findings, Actions, and Outcomes?",
    back: "Document everything: problem description, symptoms, cause found, solution implemented, tests performed, outcome. Why critical: future reference (similar issues), knowledge base, trend analysis, audit trail, training material, change management. Include: date/time, affected systems, downtime, user impact. Update: network diagrams, configs, inventory. Lessons learned: what worked, what didn't, how to improve. Document even if problem not solved (helps next person). Documentation = institutional knowledge."
  },
  {
    id: 13,
    front: "What information should be included in troubleshooting documentation?",
    back: "Include: date/time of issue and resolution, affected users/systems, symptoms observed, error messages (exact text), troubleshooting steps taken, root cause identified, solution implemented, configuration changes made, tests performed, final outcome, time to resolution, preventive measures, lessons learned, technician name. Attach: screenshots, logs, configs. Format: clear, searchable, consistent. Store: ticketing system, knowledge base. Good documentation = solves problem faster next time."
  },
  {
    id: 14,
    front: "Why is questioning users important in troubleshooting?",
    back: "Users provide: when problem started, what changed recently, exact error messages, steps to reproduce, workarounds tried, scope (just them or others). Be empathetic: frustrated users. Ask open questions: 'What happens when...?' not 'Did you...?'. Listen carefully: clues in description. Verify: don't assume user description accurate. Avoid jargon: speak their language. Users are your eyes/ears at the problem. Their info often points to cause. Good questioning = faster resolution."
  },
  {
    id: 15,
    front: "What is a network baseline and why is it important?",
    back: "Baseline: snapshot of normal network performance (bandwidth utilization, latency, error rates, CPU/memory, connection counts). Captured during: normal business hours, stable operations. Used for: comparison when troubleshooting (is current behavior abnormal?), capacity planning, identifying trends, proving 'it's not the network'. Without baseline: can't distinguish normal from abnormal. Update regularly: networks change. Tools: PRTG, SolarWinds, NetFlow. Baseline = knowing your network's 'healthy' state."
  },
  {
    id: 16,
    front: "How do you use the OSI model for troubleshooting?",
    back: "OSI model provides systematic approach. Each layer: specific protocols, devices, problems. Troubleshoot layer by layer: verify each layer working before moving up/down. Layer 1 (Physical): cables, power, lights. Layer 2 (Data Link): switch ports, VLANs, MAC addresses. Layer 3 (Network): IP addressing, routing. Layer 4 (Transport): ports, protocols. Layer 7 (Application): apps, services. Most problems: Layers 1-3. Use model to: organize thinking, communicate with others, avoid missing steps."
  },
  {
    id: 17,
    front: "What are common Layer 1 (Physical) problems?",
    back: "Cable issues: unplugged, damaged, wrong type, too long. Power: device off, power supply failed, no power to outlet. Hardware failures: NIC, switch port, transceiver. Physical damage: bent pins, broken connector, water damage. Lights: no link light, amber light (error). Environmental: overheating, interference. Check first: Layer 1 causes majority of problems. Quick checks: reseat cables, check lights, verify power, try different port/cable. Physical layer = foundation."
  },
  {
    id: 18,
    front: "What are common Layer 2 (Data Link) problems?",
    back: "Switch problems: port disabled, wrong VLAN, spanning tree blocking, port security violation. MAC issues: MAC filtering, duplicate MAC, MAC table full. Duplex mismatch: one side full, other half. Frame errors: CRC errors, runts, giants. Trunking: wrong native VLAN, allowed VLANs. ARP issues: ARP cache corruption. Check: show interface status, MAC address table, VLAN config, port errors. Layer 2 = switching and local delivery."
  },
  {
    id: 19,
    front: "What are common Layer 3 (Network) problems?",
    back: "IP addressing: wrong IP/subnet mask/gateway, IP conflict, APIPA (169.254.x.x). Routing: missing routes, wrong routes, routing loops, default route missing. ACLs: blocking traffic. NAT: incorrect translation. DNS: wrong DNS server, DNS resolution failing. Check: ipconfig/ifconfig, ping gateway, ping remote host, traceroute, check routing table. Layer 3 = routing between networks. Can ping local but not remote? Layer 3 issue."
  },
  {
    id: 20,
    front: "What is the importance of 'one change at a time' in troubleshooting?",
    back: "Make only ONE change at a time. Reasons: know exactly what fixed problem (or made it worse), easier to rollback, scientific method, avoidable mistakes. Bad example: change IP, gateway, DNS, reboot simultaneously - which fixed it? Good example: change IP, test, if fails try next. Exception: obviously bundled changes (IP address + matching subnet mask). Impatient techs make multiple changes = confusion. Disciplined approach = faster resolution. Document each change."
  },
  {
    id: 21,
    front: "Why check recent changes when troubleshooting?",
    back: "Most problems: caused by recent changes. Check: last night's updates, config changes, new equipment, staff changes, power outages. Timeline matters: problem started Tuesday 3pm, what changed Tuesday at 2pm? Changes include: software updates, patches, config modifications, new devices, cable moves, policy changes. If nothing changed and suddenly broken: hardware failure, external factor. Change management systems help: track what changed when. 'What changed?' often reveals cause quickly."
  },
  {
    id: 22,
    front: "How do you determine if problem affects one user or many?",
    back: "Scope determines troubleshooting approach. One user: likely their device, account, location. Many users: likely network, server, service. Questions: Same department/location? Same application? Same device type? Same time? Test: can you reproduce on your device? Can other users reproduce? Narrow scope: specific building = investigate that site. Entire network = check core/WAN. Scope determines: urgency, troubleshooting path, resources needed. Small scope = device issue. Large scope = infrastructure issue."
  },
  {
    id: 23,
    front: "What is divide-and-conquer troubleshooting approach?",
    back: "Start middle of OSI model (Layer 3/4), determine if problem above or below. Example: can ping by IP but not by name? Problem above Layer 3 (DNS = Layer 7). Can't ping anything? Problem below Layer 3 (check Physical/Data Link). Efficient: eliminates half the possibilities quickly. Requires: experience, understanding of layers. Faster than bottom-up for experienced techs. Risk: might miss obvious Layer 1 issue. Works well when: familiar with system, problem description clear."
  },
  {
    id: 24,
    front: "What are common troubleshooting mistakes?",
    back: "Mistakes: 1) Not gathering information (assumptions), 2) Multiple changes at once (confusion), 3) Not documenting (lost knowledge), 4) Ignoring obvious (cable unplugged), 5) Not testing after fix (assumed success), 6) No rollback plan (stuck if fails), 7) Not verifying user satisfaction, 8) Blaming users (relationship damage), 9) Working outside expertise (escalate!), 10) Not learning from issues (repeat problems). Methodical approach prevents these."
  },
  {
    id: 25,
    front: "Quick scenario: User can't access internet. Walk through Steps 1-3 of troubleshooting.",
    back: "Step 1 (Identify): Ask when started, what changed, just them or others, error message. Check: other sites, other apps, WiFi/Ethernet connected. Step 2 (Theory): Question obvious: WiFi connected? Correct network? Theories: wrong network, IP address issue, gateway problem, DNS failure, firewall blocking. Step 3 (Test): ipconfig (check IP, gateway, DNS), ping gateway (Layer 3), ping 8.8.8.8 (internet), ping google.com (DNS). Tests narrow cause."
  },
  {
    id: 26,
    front: "What role does experience play in troubleshooting?",
    back: "Experience provides: pattern recognition (seen this before), faster diagnosis, better questions, intuition about probable causes, knowledge of common issues. But experience can mislead: assuming current problem like past one, missing new issues. Balance: experience guides theories, but still follow methodology, verify assumptions, don't skip steps. New techs: follow methodology rigidly (builds foundation). Experienced techs: methodology + intuition. Document lessons learned: builds organizational experience."
  },
  {
    id: 27,
    front: "How do you handle intermittent problems?",
    back: "Intermittent issues hardest to troubleshoot. Strategies: 1) Document patterns: time of day, specific users, activities, duration. 2) Monitor continuously: capture during failure. 3) Check logs: correlate events. 4) Environmental: temperature, humidity, interference. 5) Stress test: force failure. 6) Replace suspects: cables, hardware (even if testing passes). 7) Baseline comparison: what's different during failure. Patience required: may take days/weeks. Logging is critical: can't fix what you can't observe."
  },
  {
    id: 28,
    front: "What is a rollback plan and why is it essential?",
    back: "Rollback plan: how to undo changes if solution fails. Essential because: solution might make things worse, change window limited, need to restore service quickly. Includes: exact steps to reverse changes, config backups, time required, validation steps. Create BEFORE implementing. Test if possible. Example: config change = backup current config first. Update = snapshot VM first. Good rollback plan = confidence to try fix. Bad/no rollback plan = hesitation, delayed resolution, fear of making worse."
  },
  {
    id: 29,
    front: "Why is user communication important during troubleshooting?",
    back: "Communication: keeps users informed, manages expectations, reduces frustration, builds trust. What to communicate: working on problem, estimated time, workaround if available, when fixed. How: empathy, no jargon, regular updates, verify satisfaction after fix. Don't: blame user, overpromise, ignore updates. Radio silence = angry users. Even 'still working on it' better than silence. Document communication: tickets, emails. Remember: users' work depends on systems. Treat with respect and urgency."
  },
  {
    id: 30,
    front: "Speed drill: If 'can ping 8.8.8.8 but not google.com' - which OSI layer has the problem?",
    back: "DNS problem (Layer 7 - Application). Can reach by IP (Layer 3 works) but not by name (name resolution failing). Check: DNS server configured correctly (ipconfig /all), DNS server reachable (ping DNS), flush DNS cache (ipconfig /flushdns), try different DNS (8.8.8.8). Know this pattern for exam - very common question!"
  }
];