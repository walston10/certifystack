// Flashcards for Lesson 11: Switches, VLANs, and Trunking

export const lesson11Flashcards = [
  {
    id: 1,
    front: "How does a switch learn MAC addresses?",
    back: "Examines SOURCE MAC of incoming frames, adds to MAC table with arrival port. Builds table dynamically by observing traffic."
  },
  {
    id: 2,
    front: "Five switch forwarding functions?",
    back: "1) Learning (add source MAC), 2) Flooding (unknown destination), 3) Forwarding (known destination), 4) Filtering (drop same-port traffic), 5) Aging (remove old entries, ~300s)."
  },
  {
    id: 3,
    front: "Collision domain vs broadcast domain?",
    back: "Collision: where collisions occur (switches separate per port). Broadcast: where broadcasts reach (VLANs separate). Routers separate broadcast domains."
  },
  {
    id: 4,
    front: "What is a VLAN and why use it?",
    back: "Logically divides switch into separate networks. Benefits: security (isolate), performance (smaller broadcast), organization (by function), cost savings."
  },
  {
    id: 5,
    front: "Valid VLAN IDs and default?",
    back: "1-4094 valid. VLAN 1 is default, cannot be deleted. Used for control traffic (CDP, VTP, STP)."
  },
  {
    id: 6,
    front: "VLAN types?",
    back: "Data (user traffic), Voice (VoIP, QoS), Native (untagged on trunk), Management (remote access). Best practice: separate management."
  },
  {
    id: 7,
    front: "Access port vs trunk port?",
    back: "Access: ONE VLAN, end devices, untagged. Trunk: MULTIPLE VLANs, between switches, 802.1Q tagged."
  },
  {
    id: 8,
    front: "What is 802.1Q tagging?",
    back: "IEEE standard adding 4-byte tag to frames with VLAN ID (12 bits). Identifies VLAN membership on trunk links."
  },
  {
    id: 9,
    front: "What is the Native VLAN?",
    back: "Carries untagged traffic on trunk (default VLAN 1). Must match both trunk ends to prevent VLAN hopping attacks."
  },
  {
    id: 10,
    front: "Can different VLANs communicate without a router?",
    back: "No! VLANs are separate broadcast domains. Require Layer 3 routing (router or Layer 3 switch) to communicate."
  },
  {
    id: 11,
    front: "What is 'Router on a Stick' (ROAS)?",
    back: "Single physical router interface with subinterfaces (one per VLAN) via trunk. Each subinterface routes for its VLAN."
  },
  {
    id: 12,
    front: "What is an SVI?",
    back: "Switch Virtual Interface - Layer 3 interface on L3 switch representing a VLAN. Has IP, acts as gateway. Hardware routing (faster than ROAS)."
  },
  {
    id: 13,
    front: "What problem does STP solve?",
    back: "Prevents Layer 2 loops (broadcast storms) in redundant topologies. Blocks redundant paths until needed."
  },
  {
    id: 14,
    front: "What is the root bridge?",
    back: "Central reference point for STP. Elected by lowest Bridge ID (priority + MAC). Default priority 32768. Set to 0/4096 to force root."
  },
  {
    id: 15,
    front: "Four STP port states?",
    back: "1) Blocking (prevents loops), 2) Listening (15s), 3) Learning (15s), 4) Forwarding (normal). Total convergence ~30-50s."
  },
  {
    id: 16,
    front: "What is RSTP?",
    back: "Rapid STP (802.1w). Converges in 1-2 seconds vs STP's 30-50s. Uses alternate/backup ports for instant failover. Industry standard."
  },
  {
    id: 17,
    front: "What is port security?",
    back: "Limits which MAC addresses can connect to port. Prevents rogue devices, MAC flooding, unauthorized access. Static, dynamic, or sticky MACs."
  },
  {
    id: 18,
    front: "Three port security violation modes?",
    back: "1) Shutdown (err-disabled, manual fix, default), 2) Restrict (drops packets, logs), 3) Protect (silently drops)."
  },
  {
    id: 19,
    front: "What is port mirroring (SPAN)?",
    back: "Copies traffic from ports to monitoring port for packet analyzer (Wireshark). Used for troubleshooting, IDS, analysis. No production impact."
  },
  {
    id: 20,
    front: "Unknown destination MAC—what happens?",
    back: "Switch floods frame out all ports in that VLAN (except arrival port). Called unknown unicast flooding."
  },
  {
    id: 21,
    front: "What is MAC address aging?",
    back: "Removes MAC addresses after timeout (default 300s = 5 min). Prevents stale entries when devices move/disconnect."
  },
  {
    id: 22,
    front: "How many VLANs per switch?",
    back: "4094 (1-4094). Normal range 1-1005, extended 1006-4094. VLAN 1 cannot be deleted. 1002-1005 reserved for legacy."
  },
  {
    id: 23,
    front: "PC in VLAN 10 can't reach VLAN 20—why?",
    back: "VLANs need Layer 3 routing. Solution: inter-VLAN routing via ROAS or SVI. Each VLAN needs own subnet + gateway."
  },
  {
    id: 24,
    front: "Native VLAN mismatch danger?",
    back: "Different native VLANs on trunk ends causes VLAN hopping attacks and connectivity issues. Always verify both sides match."
  },
  {
    id: 25,
    front: "What is a broadcast storm?",
    back: "Broadcasts loop infinitely with redundant paths, consuming 100% bandwidth. STP prevents by blocking redundant ports."
  },
  {
    id: 26,
    front: "VLAN hopping prevention?",
    back: "Disable DTP (auto trunking), manually configure access ports, change native VLAN from default, don't use VLAN 1 for users."
  },
  {
    id: 27,
    front: "Layer 2 vs Layer 3 switch?",
    back: "L2: MAC forwarding only, within VLANs. L3: has routing (SVIs), routes between VLANs in hardware. Called multilayer switch."
  },
  {
    id: 28,
    front: "All ports in VLAN 1 but no communication—check what?",
    back: "IP addressing correct? Gateway configured? Physical connectivity? Port not shutdown? Duplex mismatch? STP blocking?"
  },
  {
    id: 29,
    front: "What are 'allowed VLANs on trunk'?",
    back: "Restricts which VLANs traverse trunk (default: all). For security/bandwidth management. Pruning reduces unnecessary broadcast traffic."
  },
  {
    id: 30,
    front: "Commands: MAC table, VLANs, interfaces, STP?",
    back: "MAC: 'show mac address-table'. VLAN: 'show vlan brief'. Interfaces: 'show interface status'. STP: 'show spanning-tree'."
  }
];