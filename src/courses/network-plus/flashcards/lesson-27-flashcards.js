// Flashcards for Lesson 27: Troubleshooting Methodology (SHORTENED)

export const lesson27Flashcards = [
  {
    id: 1,
    front: "What are CompTIA's 7 troubleshooting steps?",
    back: "1) Identify problem, 2) Establish theory of probable cause, 3) Test theory, 4) Establish plan of action, 5) Implement solution or escalate, 6) Verify full system functionality, 7) Document findings. MUST know for exam!"
  },
  {
    id: 2,
    front: "What to do in Step 1: Identify the Problem?",
    back: "Gather info: what happened, when started, who affected. Question users: what changed, exact symptoms. Determine recent changes. Duplicate if possible. Don't assume - gather facts first."
  },
  {
    id: 3,
    front: "What does 'question the obvious' mean?",
    back: "Check simple things first. Is it plugged in? Powered on? Cable connected? Service enabled? Correct SSID? Simple fixes solve surprising number of issues."
  },
  {
    id: 4,
    front: "Step 2: Establish Theory of Probable Cause?",
    back: "Develop hypothesis about what's wrong. Consider top-to-bottom, bottom-to-top, or divide-and-conquer. Question the obvious. Pick most likely theory based on symptoms."
  },
  {
    id: 5,
    front: "What troubleshooting approaches use the OSI model?",
    back: "Top-to-bottom (Layer 7→1), bottom-to-top (Layer 1→7), divide-and-conquer (start middle). Bottom-up most common since most issues are physical layer."
  },
  {
    id: 6,
    front: "Step 3: Test Theory to Determine Cause?",
    back: "Test your theory. If confirmed, move to Step 4. If not confirmed, return to Step 2 with new theory. Don't skip - confirm before acting."
  },
  {
    id: 7,
    front: "Step 4: Establish Plan of Action?",
    back: "Determine steps to resolve: specific actions, sequence, rollback plan, impact assessment. Get approval if needed. Document plan before implementing."
  },
  {
    id: 8,
    front: "Step 5: Implement Solution or Escalate?",
    back: "Execute your plan. Make ONE change at a time. Document each change. If beyond scope/authority, escalate. No shame in escalating."
  },
  {
    id: 9,
    front: "When should you escalate a problem?",
    back: "When beyond technical skills, lack access/permissions, risk of more damage, time-critical and stuck, requires vendor support, or affects critical systems."
  },
  {
    id: 10,
    front: "Step 6: Verify Full System Functionality?",
    back: "Don't just fix immediate problem - verify entire system works. Test original problem resolved, no new problems created. Implement preventive measures."
  },
  {
    id: 11,
    front: "What preventive measures after fixing an issue?",
    back: "Fix root cause, apply to similar systems, update monitoring, adjust configs, update documentation, train users. Reactive fix + proactive prevention."
  },
  {
    id: 12,
    front: "Step 7: Document Findings, Actions, and Outcomes?",
    back: "Document everything: problem, cause, solution, tests, outcome. Critical for future reference, knowledge base, trend analysis. Documentation = institutional knowledge."
  },
  {
    id: 13,
    front: "What info should troubleshooting documentation include?",
    back: "Date/time, affected systems, symptoms, error messages, troubleshooting steps, root cause, solution, tests, outcome, preventive measures, technician name."
  },
  {
    id: 14,
    front: "Why is questioning users important?",
    back: "Users provide: when started, what changed, exact errors, steps to reproduce. Ask open questions. Listen carefully. Avoid jargon. Users are your eyes/ears."
  },
  {
    id: 15,
    front: "What is a network baseline and why important?",
    back: "Snapshot of normal network performance (utilization, latency, errors). Used to distinguish normal from abnormal behavior. Without baseline, can't identify what's wrong."
  },
  {
    id: 16,
    front: "How to use OSI model for troubleshooting?",
    back: "Layer-by-layer approach. L1=cables/power, L2=switches/VLANs, L3=IP/routing, L4=ports/protocols, L7=apps. Most problems in Layers 1-3. Systematic approach avoids missing steps."
  },
  {
    id: 17,
    front: "Common Layer 1 (Physical) problems?",
    back: "Cable unplugged/damaged/wrong type/too long, power issues, hardware failures, no link lights. Check first - Layer 1 causes majority of problems."
  },
  {
    id: 18,
    front: "Common Layer 2 (Data Link) problems?",
    back: "Port disabled, wrong VLAN, spanning tree blocking, duplex mismatch, CRC errors, ARP issues. Check interface status and VLAN config."
  },
  {
    id: 19,
    front: "Common Layer 3 (Network) problems?",
    back: "Wrong IP/subnet/gateway, IP conflict, APIPA, missing routes, DNS failure. Check ipconfig, ping gateway, ping remote, traceroute."
  },
  {
    id: 20,
    front: "Why 'one change at a time'?",
    back: "Know exactly what fixed problem (or made it worse). Easier to rollback. Scientific method. Make one change, test, document result."
  },
  {
    id: 21,
    front: "Why check recent changes?",
    back: "Most problems caused by recent changes. Check: updates, config changes, new equipment. Timeline matters - what changed before problem started?"
  },
  {
    id: 22,
    front: "How to determine if problem affects one user or many?",
    back: "Scope determines approach. One user = their device/account. Many users = network/server/service. Test if others can reproduce. Small scope = device issue, large scope = infrastructure."
  },
  {
    id: 23,
    front: "What is divide-and-conquer approach?",
    back: "Start middle OSI model (Layer 3/4), determine if problem above or below. Efficient - eliminates half possibilities quickly. Requires experience."
  },
  {
    id: 24,
    front: "Common troubleshooting mistakes?",
    back: "Making assumptions, multiple changes at once, not documenting, ignoring obvious, not testing after fix, no rollback plan, blaming users."
  },
  {
    id: 25,
    front: "User can't access internet. Walk through Steps 1-3.",
    back: "Step 1: Ask when started, what changed, check WiFi connected. Step 2: Theory - wrong network, IP issue, gateway, DNS. Step 3: Test - ipconfig, ping gateway, ping 8.8.8.8, ping google.com."
  },
  {
    id: 26,
    front: "What role does experience play?",
    back: "Provides pattern recognition and faster diagnosis. But can mislead - don't assume current problem like past ones. Balance experience with methodology."
  },
  {
    id: 27,
    front: "How to handle intermittent problems?",
    back: "Document patterns (time, users, activities), monitor continuously, check logs, stress test, replace suspects even if tests pass. Patience required - may take days/weeks."
  },
  {
    id: 28,
    front: "What is a rollback plan?",
    back: "How to undo changes if solution fails. Includes exact reversal steps, config backups, validation. Create BEFORE implementing. Good rollback = confidence to try fix."
  },
  {
    id: 29,
    front: "Why is user communication important?",
    back: "Keeps users informed, manages expectations, reduces frustration. Update regularly even if just 'still working on it'. No jargon. Verify satisfaction after fix."
  },
  {
    id: 30,
    front: "Can ping 8.8.8.8 but not google.com - which layer problem?",
    back: "DNS problem (Layer 7). Can reach by IP (Layer 3 works) but not by name. Check DNS server config, flush DNS cache, try different DNS. Common exam pattern!"
  }
];