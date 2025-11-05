// Quiz for Lesson 27: Troubleshooting Methodology

export const lesson27Quiz = [
  {
    id: 1,
    question: "A user reports they cannot access the internet. The help desk technician immediately assumes it's a DNS problem and starts changing DNS server settings without gathering any additional information. What troubleshooting methodology step was skipped?",
    options: [
      "Implement the solution",
      "Identify the problem by gathering information, questioning users, identifying symptoms, and determining if anything changed",
      "Document findings",
      "Verify full system functionality"
    ],
    correct: 1,
    explanation: "CompTIA troubleshooting methodology Step 1: Identify the problem - gather information (what works, what doesn't), question the user (when did it start, what changed, error messages), identify symptoms (specific vs broad), duplicate the problem if possible, determine if anything changed recently. Common mistakes: jumping to conclusions (assuming cause without information), not asking enough questions, making multiple changes simultaneously, ignoring user input. Step 1 is critical—incorrect problem identification leads to wasted time fixing wrong things. Ask: 'When did it start?', 'What changed?', 'Can you show me the error?', 'Does it happen on other devices?', 'What were you doing when the problem occurred?'. Proper information gathering often reveals obvious cause, saving time."
  },
  {
    id: 2,
    question: "After identifying that several users in one department cannot access a specific server, a technician develops two theories: (1) network cable issue affecting the switch, or (2) firewall blocking the traffic. What should the technician do next according to the troubleshooting methodology?",
    options: [
      "Implement both solutions simultaneously",
      "Test each theory systematically starting with the most obvious/probable cause, using a top-to-bottom or bottom-to-top OSI approach",
      "Skip testing and document the problem",
      "Replace all network equipment immediately"
    ],
    correct: 1,
    explanation: "Step 2: Establish a theory of probable cause - question the obvious (check simple things first: cables, power, connectivity), consider multiple approaches (OSI layers, divide and conquer). Step 3: Test the theory to determine cause - test one theory at a time, use systematic approach (OSI model), if theory confirmed → move to step 4, if theory not confirmed → establish new theory. Testing approaches: Bottom-to-top OSI (Physical → Data Link → Network...), Top-to-bottom (Application → Network → Physical), Divide and conquer (test middle layer, narrow down). Example: ping server IP (tests Network layer), if works → higher layers (Transport, Application), if fails → lower layers (Physical, Data Link). One change at a time prevents confusion about what fixed the issue."
  },
  {
    id: 3,
    question: "A technician identifies that a misconfigured default gateway is preventing internet access. Before implementing the fix, they review the change with their supervisor and create a rollback plan. What troubleshooting methodology step is this?",
    options: [
      "Step 1: Identify the problem",
      "Step 2: Establish a theory",
      "Step 4: Establish a plan of action to resolve the problem and identify potential effects",
      "Step 6: Verify full system functionality"
    ],
    correct: 2,
    explanation: "Step 4: Establish a plan of action - determine steps to resolve, consider effects on users/business, identify needed resources/permissions, create rollback plan (how to undo if it fails), schedule change window (avoid peak hours), communicate to stakeholders, get approval if needed. Before implementing: understand impact (will this cause outage?), have backup plan (if this doesn't work or makes it worse), consider timing (3 PM Friday = bad idea). Documentation: what you'll change, why, expected outcome, rollback procedure. Risk assessment: this change might affect X users for Y minutes, mitigation: Z. Skipping planning leads to: extended outages (no rollback plan), unexpected consequences (didn't consider dependencies), access issues (made change without permissions/approval)."
  },
  {
    id: 4,
    question: "A network engineer implements a fix for a routing issue but later discovers the problem is beyond their expertise and requires escalation to a senior engineer. At what step should problems be escalated if they exceed the technician's knowledge or authority?",
    options: [
      "Never escalate—solve everything yourself",
      "Escalate at Step 5 (Implement the solution or escalate as necessary) when the problem exceeds scope, knowledge, or authority",
      "Only escalate after documenting everything",
      "Escalate before identifying the problem"
    ],
    correct: 1,
    explanation: "Step 5: Implement the solution or escalate as necessary - execute the plan, make one change at a time, test after each change, document what you changed, escalate if: problem beyond expertise, requires permissions you don't have, needs specialized tools/knowledge, time-critical and you're stuck, vendor involvement required. Escalation criteria: technical complexity (routing protocols, complex configurations), security incidents (potential breach), vendor support needed (hardware RMA, software bugs), time constraints (SLA approaching), authority (requires manager approval for downtime). Good escalation: provide context (what you've tried, findings, current state), clear handoff (complete documentation), stay involved (support senior engineer if needed). Poor escalation: incomplete troubleshooting (escalate without trying basics), missing documentation, unclear problem description. Knowing when to escalate shows professionalism—not weakness."
  },
  {
    id: 5,
    question: "After implementing a fix that resolves the reported problem, a technician considers the job complete and moves to the next ticket. Later, users report related issues that weren't addressed. What troubleshooting methodology step was skipped?",
    options: [
      "Step 1: Identify the problem",
      "Step 5: Implement the solution",
      "Step 6: Verify full system functionality and implement preventive measures if applicable",
      "Step 2: Establish a theory"
    ],
    correct: 2,
    explanation: "Step 6: Verify full system functionality and implement preventive measures - test the solution (does it actually work?), verify with user (confirm their issue resolved), check for side effects (did the fix break something else?), preventive measures (prevent recurrence: update documentation, improve monitoring, change management process, user training). Verification steps: test primary functionality (original issue fixed), test related functionality (nothing else broken), have user confirm (their perspective matters), check during peak usage if applicable. Preventive measures: root cause analysis (why did this happen?), process improvements (change control, monitoring alerts), proactive maintenance (update firmware, replace aging equipment), documentation updates. Skipping verification leads to: false resolution (problem returns), new problems introduced, user frustration (problem not actually fixed), recurring issues."
  },
  {
    id: 6,
    question: "A technician resolves a complex network issue but doesn't document the problem, steps taken, or solution. Three months later, the same issue occurs and another technician must start troubleshooting from scratch. What is the final step of the troubleshooting methodology?",
    options: [
      "Step 5: Implement the solution",
      "Step 6: Verify functionality",
      "Step 7: Document findings, actions, and outcomes throughout the process",
      "Step 3: Test the theory"
    ],
    correct: 2,
    explanation: "Step 7: Document findings, actions, and outcomes - record throughout process (not just at end), include: problem description (symptoms, affected users), root cause (what was wrong), solution implemented (what you changed, why it worked), unsuccessful attempts (what didn't work—saves time for future), verification results (how you confirmed fix), preventive measures taken, lessons learned. Where to document: ticketing system, knowledge base articles, runbooks, network documentation, change logs. Benefits: knowledge sharing (team learns from experience), faster resolution next time (search for similar issues), trend analysis (recurring problems), audit trail (compliance, security), training resource. Good documentation: clear (non-technical users understand), complete (reproducible steps), concise (no unnecessary details), searchable (proper keywords). Missing documentation = repeated work, lost knowledge when people leave, inability to identify patterns. Professional obligation: document your work."
  },
  {
    id: 7,
    question: "A technician troubleshooting a network issue uses the OSI model as a framework, starting at Layer 1 (Physical) and working up to Layer 7 (Application). What troubleshooting approach is this?",
    options: [
      "Random troubleshooting without structure",
      "Bottom-to-top OSI model approach, starting with physical issues and progressing to application issues",
      "Top-to-bottom approach starting with Application layer",
      "Only checking Layer 3 (Network layer)"
    ],
    correct: 1,
    explanation: "OSI model troubleshooting approaches: Bottom-to-top (Layer 1→7): check Physical (cables, lights, power) → Data Link (switches, MAC addresses) → Network (routing, IP addressing) → Transport (TCP/UDP) → Session/Presentation → Application (software, services). Best for: hardware suspected, new installs, complete outages. Top-to-bottom (Layer 7→1): check Application (can user run app?) → work down to Physical. Best for: application-specific issues, software problems, user errors. Divide and conquer: start middle (Layer 3/4), narrow up or down. Best for: experienced techs, complex scenarios. Bottom-to-top advantages: catches fundamentals first (why troubleshoot routing if cable unplugged?), systematic, beginner-friendly. Most network issues are Layer 1-3 (physical, switching, routing)—bottom-to-top catches these efficiently."
  },
  {
    id: 8,
    question: "During troubleshooting, a technician makes three configuration changes simultaneously: updates the default gateway, changes DNS servers, and modifies the subnet mask. The problem is resolved but no one knows which change fixed it. What troubleshooting best practice was violated?",
    options: [
      "Always make all changes at once for efficiency",
      "Make one change at a time so you know what actually fixed the problem and can document the solution properly",
      "Never make any configuration changes",
      "Make changes only after hours"
    ],
    correct: 1,
    explanation: "One change at a time rule: make single change → test → if fixed, done (you know what worked), if not fixed, undo and try next change. Multiple simultaneous changes problems: 1) Don't know which change fixed it (can't document proper solution), 2) Might have made unnecessary changes (created new issues), 3) Can't learn from experience (what actually works?), 4) If problem returns, unclear what to repeat. Exception: atomic changes (MUST be done together—like IP address AND subnet mask), or emergency situations where speed trumps methodology. Testing between changes: verify fix worked, check for side effects, document result before proceeding. Systematic approach takes slightly longer initially but saves time overall: correct documentation, no unnecessary changes, clear understanding, confidence in solution. Shotgun troubleshooting (change everything) = amateur approach, reveals lack of understanding."
  },
  {
    id: 9,
    question: "A user calls the help desk reporting 'the internet is down.' The technician asks clarifying questions: 'Can you access internal file servers?', 'Does it work on other devices?', 'When did it start?', 'What error message do you see?'. What troubleshooting principle is the technician applying?",
    options: [
      "Immediately implementing solutions without information",
      "Gathering detailed information and questioning the user to accurately identify the problem scope and symptoms",
      "Blaming the user for the problem",
      "Escalating immediately without investigation"
    ],
    correct: 1,
    explanation: "Information gathering critical questions: Scope: single user or multiple? (isolate vs widespread), Timeline: when did it start? what changed? (recent changes often cause issues), Symptoms: exact error messages? what works vs doesn't? (narrow scope), Reproducibility: consistent or intermittent? (helps identify pattern), Recent changes: updates, new software, physical moves? (cause correlation). 'Internet is down' could mean: actually network cable unplugged (Layer 1), DHCP issue (Layer 2/3), DNS failure (can reach by IP, not name), proxy settings (Application layer), user error (wrong URL). Asking questions reveals: 'Oh, I can access internal sites' → not physical/routing, likely DNS/proxy, 'Started after Windows update' → points to driver/settings change. Active listening: hear what user says, ask follow-up questions, don't assume. User input valuable—they know timeline, what changed, what they were doing. Respect user's information, combine with technical knowledge."
  },
  {
    id: 10,
    question: "After resolving a network issue, a technician identifies that inadequate network documentation contributed to the extended troubleshooting time. They update the network diagrams and IP address spreadsheet. What part of the troubleshooting methodology is this?",
    options: [
      "Step 1: Identify the problem",
      "Step 5: Implement the solution",
      "Step 6: Verify functionality and implement preventive measures to avoid recurrence",
      "Step 2: Establish a theory"
    ],
    correct: 2,
    explanation: "Preventive measures (Step 6): identify root cause (why did this happen?), prevent recurrence (what can we do differently?). Categories: 1) Documentation improvements (update diagrams, document configurations, create runbooks), 2) Process improvements (implement change control, improve communication, regular audits), 3) Technical improvements (add monitoring, replace aging equipment, implement redundancy), 4) Training (user education, staff training on new systems). Example preventive measures: Poor documentation caused delay → update documentation, Regular cable failures → implement cable management/replacement schedule, Frequent misconfigurations → implement configuration templates/automation, User errors → provide training or improve UX. Reactive vs proactive: reactive = fix problem when occurs, proactive = prevent problem from occurring. Mature IT organizations: analyze trends, implement preventive measures, reduce recurring issues. Root cause analysis: ask 'why' five times to find true cause, address root cause (not symptoms)."
  },
  {
    id: 11,
    question: "A technician suspects a switch port failure but has no baseline documentation of normal switch behavior. They don't know if current behavior (high error rates, CRC errors) is abnormal. What troubleshooting best practice was neglected?",
    options: [
      "Never establish baselines—they're unnecessary",
      "Establish and maintain baseline documentation of normal network behavior for comparison during troubleshooting",
      "Only document after problems occur",
      "Baselines only matter for servers, not network devices"
    ],
    correct: 1,
    explanation: "Baseline importance: defines 'normal' for comparison during troubleshooting. Without baseline: is 40% CPU normal or high? Are 100 CRC errors acceptable or concerning? With baseline: know normal ranges, detect anomalies, identify trends. What to baseline: 1) Performance (bandwidth utilization, latency, packet loss), 2) Resource usage (CPU, memory, interface statistics), 3) Error rates (CRC, frame errors, collisions), 4) Traffic patterns (protocols, top talkers, peak times), 5) Application response times. When to baseline: after new installations (document initial state), during known-good periods (not during incidents), periodically (quarterly—network changes). Using baselines: compare current to baseline (is this normal?), identify trends (gradual degradation?), capacity planning (approaching limits?). Tools: monitoring systems (store historical data), SNMP polling, NetFlow/sFlow analysis. Troubleshooting without baselines = guessing. 'Is this normal?' becomes answerable with proper baseline documentation."
  },
  {
    id: 12,
    question: "A technician troubleshooting a connectivity issue tests with ping and traceroute but doesn't consider that ICMP might be blocked by firewalls, leading to misleading results. What troubleshooting consideration is important when interpreting diagnostic tool results?",
    options: [
      "All diagnostic tools always provide accurate results",
      "Consider limitations and constraints of tools—security policies, firewalls, and network configurations may affect tool accuracy",
      "Never use ping or traceroute for troubleshooting",
      "Tools are infallible and their results are absolute truth"
    ],
    correct: 1,
    explanation: "Tool limitations awareness: Ping/ICMP: often blocked by firewalls (false negative—'host unreachable' doesn't mean network down), ICMP priority (low priority, may be rate-limited), doesn't test actual application. Traceroute: shows path but: ICMP/UDP blocked (incomplete trace), load balancing (different packets take different paths), doesn't test application ports. Telnet: tests port reachability but: deprecated protocol, limited to TCP, no TLS testing. Port scanners: may be blocked (IPS detection), trigger security alerts, policy violations. Understanding tool behavior: what does tool actually test? (ping = ICMP echo, not service), what can interfere? (firewalls, ACLs, rate limiting), what doesn't it tell you? (ping success ≠ application working). Better approach: test actual service (HTTP request, database connection), use appropriate tools (nmap for ports, curl for web, netcat for custom), consider environment (security controls present?). False positives/negatives: tool says 'failed' but service works (security blocking tool), tool says 'success' but service broken (ping works, application doesn't)."
  },
  {
    id: 13,
    question: "A network problem occurs intermittently—sometimes working, sometimes failing. A technician documents exactly when failures occur and correlates with other events. This reveals failures happen every night at 2 AM during backup jobs. What troubleshooting technique identified the pattern?",
    options: [
      "Random guessing",
      "Pattern recognition through careful observation, documentation, and correlation of symptoms with other events",
      "Ignoring intermittent issues",
      "Only addressing consistent problems"
    ],
    correct: 1,
    explanation: "Intermittent problem troubleshooting challenges: hard to reproduce, inconsistent symptoms, multiple variables. Techniques: 1) Documentation (log every occurrence: date, time, duration, symptoms, what was happening), 2) Pattern recognition (time-based? day of week? specific users? load-related?), 3) Correlation (other events: backups, batch jobs, traffic spikes, maintenance), 4) Environmental factors (temperature, power, interference). Example patterns: Every Monday morning (weekend changes deployed?), During business hours only (load-related?), Random times but same subnet (switch issue?), After Windows updates (driver compatibility?). Tools for intermittent issues: continuous monitoring (catch when it happens), SNMP polling (historical data), event correlation (SIEM), packet capture triggered by events. Patience required: intermittent issues need time to observe pattern, may need to wait for occurrence, premature conclusions waste time. Once pattern identified: root cause often obvious (backups saturate link → increase backup window or bandwidth)."
  },
  {
    id: 14,
    question: "During a critical outage, a technician skips the established troubleshooting methodology and randomly tries various fixes without documentation, causing the outage to extend for hours. What is the consequence of abandoning structured troubleshooting methodology under pressure?",
    options: [
      "Random troubleshooting is faster during emergencies",
      "Lack of methodology leads to longer resolution times, potentially worsening the situation, and inability to prevent recurrence",
      "Methodology should always be skipped during outages",
      "Documentation doesn't matter during emergencies"
    ],
    correct: 1,
    explanation: "Methodology under pressure: temptation to shortcut during critical incidents, panic leads to: shotgun approach (try everything), skipping documentation (can't remember what was tried), multiple simultaneous changes (don't know what worked/failed), lack of verification (assume it's fixed), no preventive measures (incident repeats). Consequences: extended outages (random approach takes longer), configuration drift (forget what was changed), inability to document solution (what actually worked?), repeated incidents (didn't fix root cause), team confusion (uncoordinated efforts), potential escalation (made it worse). Structured approach during incidents: stay calm (methodical approach actually faster), coordinate efforts (assign roles, avoid duplicating work), document in real-time (even brief notes—'tried X, didn't work'), test changes individually (know what worked), communicate status (keep stakeholders informed). Balance: methodology provides structure but allow flexibility (skip steps if clearly unnecessary), emergency procedures pre-defined (don't invent during crisis). Post-incident: review (what went wrong in process?), improve (update procedures), learn (prevent recurrence)."
  },
  {
    id: 15,
    question: "A help desk technician successfully resolves a complex network issue by following the troubleshooting methodology. They document the solution in the knowledge base. Six months later, another technician encounters the same issue and resolves it in minutes by searching the knowledge base. What demonstrates the value of proper documentation?",
    options: [
      "Documentation has no value and wastes time",
      "Proper documentation enables knowledge sharing, reduces resolution time for future occurrences, and builds organizational knowledge",
      "Only the original technician should handle similar issues",
      "Problems never repeat so documentation is pointless"
    ],
    correct: 1,
    explanation: "Documentation value proposition: Knowledge sharing: team learns from each other's experiences, new team members ramp up faster, expertise distributed (not siloed), 24/7 support (solution available when expert unavailable). Efficiency: faster resolution (search first), avoid repeating failed solutions, trend analysis (recurring issues identified), training resource (real-world examples). Compliance: audit trail (who did what when), regulatory requirements (SOX, HIPAA), change management (document all changes), incident response (timeline reconstruction). Business continuity: key person risk mitigation (knowledge survives departures), disaster recovery (how systems configured), vendor management (document vendor solutions). Quality metrics: First-call resolution improves (documented solutions accessible), MTTR decreases (faster troubleshooting), recurring issues identified (preventive measures), customer satisfaction increases (faster resolutions). Documentation as culture: make it easy (integrated in workflow), make it valuable (searchable, well-organized), make it habit (part of process, not optional), reward contributions (recognize those who document well). Investment: time spent documenting returns multiplied value over time. Six-month scenario: 4 hours initial troubleshooting + 15 minutes documentation → 10 minutes resolution for future occurrences → after 3rd occurrence, ROI positive."
  }
];

// Export for use in quiz component
export default lesson27Quiz;