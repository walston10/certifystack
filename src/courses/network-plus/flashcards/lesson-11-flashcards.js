// Flashcards for Lesson 11: Switches, VLANs, and Trunking

export const lesson11Flashcards = [
  {
    id: 1,
    front: "How does a switch learn MAC addresses?",
    back: "A switch examines the SOURCE MAC address of incoming frames and adds it to the MAC address table along with the port it arrived on. This process is called learning. The switch builds its table dynamically by observing traffic."
  },
  {
    id: 2,
    front: "What are the five switch forwarding functions?",
    back: "1) Learning (add source MAC to table), 2) Flooding (send to all ports when destination unknown), 3) Forwarding (send out specific port when destination known), 4) Filtering (drop frames destined for same port), 5) Aging (remove old entries after timeout, typically 300 seconds)."
  },
  {
    id: 3,
    front: "What's the difference between a collision domain and a broadcast domain?",
    back: "Collision domain: segment where collisions can occur (switches separate each port into its own). Broadcast domain: segment where broadcasts reach (all ports on a switch share one broadcast domain unless VLANs are used). Routers separate broadcast domains."
  },
  {
    id: 4,
    front: "What is a VLAN and why use it?",
    back: "VLAN (Virtual LAN) logically divides a switch into separate networks. Benefits: 1) Security (isolate sensitive traffic), 2) Performance (smaller broadcast domains), 3) Organization (group by department, not location), 4) Cost savings (one physical switch, multiple logical networks)."
  },
  {
    id: 5,
    front: "What VLAN ID range is valid, and which VLAN is the default?",
    back: "Valid VLAN IDs: 1-4094. VLAN 1 is the default VLAN on Cisco switches. All ports are in VLAN 1 by default. VLAN 1 cannot be deleted and is used for control traffic like CDP, VTP, STP."
  },
  {
    id: 6,
    front: "What are the different VLAN types?",
    back: "Data VLAN (user traffic), Voice VLAN (VoIP phones, QoS priority), Native VLAN (untagged traffic on trunk), Management VLAN (remote switch access). Best practice: separate management from data/voice for security."
  },
  {
    id: 7,
    front: "What's the difference between an access port and a trunk port?",
    back: "Access port: assigned to ONE VLAN, connects end devices (PCs, printers). Sends untagged frames. Trunk port: carries MULTIPLE VLANs between switches/routers using 802.1Q tagging. Tags frames to identify which VLAN they belong to."
  },
  {
    id: 8,
    front: "What is 802.1Q VLAN tagging?",
    back: "802.1Q is the IEEE standard for VLAN tagging on trunk links. It inserts a 4-byte tag into the Ethernet frame containing the VLAN ID (12 bits). This allows switches to identify which VLAN a frame belongs to when traversing trunk links."
  },
  {
    id: 9,
    front: "What is the Native VLAN and why is it important?",
    back: "Native VLAN carries untagged traffic on a trunk port (default VLAN 1). If a frame arrives without an 802.1Q tag, it's placed in the native VLAN. Security: Native VLAN should match on both ends of trunk to prevent VLAN hopping attacks."
  },
  {
    id: 10,
    front: "Can devices in different VLANs communicate without a router?",
    back: "No! VLANs are separate broadcast domains and require Layer 3 routing to communicate. Even on the same physical switch, VLAN 10 cannot talk to VLAN 20 without inter-VLAN routing (router or Layer 3 switch)."
  },
  {
    id: 11,
    front: "What is 'Router on a Stick' (ROAS)?",
    back: "ROAS uses a single physical router interface with multiple subinterfaces (one per VLAN) connected via a trunk. Each subinterface has an IP in a different VLAN/subnet and performs inter-VLAN routing. Example: Gi0/0.10 for VLAN 10, Gi0/0.20 for VLAN 20."
  },
  {
    id: 12,
    front: "What is an SVI (Switch Virtual Interface)?",
    back: "SVI is a virtual Layer 3 interface on a Layer 3 switch representing a VLAN. It has an IP address in that VLAN's subnet and acts as the default gateway for devices. Faster than ROAS since routing happens in hardware (ASIC)."
  },
  {
    id: 13,
    front: "What problem does Spanning Tree Protocol (STP) solve?",
    back: "STP prevents Layer 2 loops (broadcast storms) in redundant switch topologies. Without STP, broadcasts would loop infinitely, consuming all bandwidth and crashing the network. STP blocks redundant paths, activating them only if the primary fails."
  },
  {
    id: 14,
    front: "What is the root bridge in STP?",
    back: "The root bridge is the central reference point in STP topology. All path calculations are relative to the root. Election: lowest Bridge ID (priority + MAC address). Default priority: 32768. To force a switch as root, set priority to 0 or 4096."
  },
  {
    id: 15,
    front: "What are the four STP port states?",
    back: "1) Blocking: not forwarding, receiving BPDUs only (prevents loops). 2) Listening: preparing to forward, listening for BPDUs (15 sec). 3) Learning: building MAC table, not forwarding (15 sec). 4) Forwarding: normal operation, sending/receiving data. Total convergence: ~30-50 seconds."
  },
  {
    id: 16,
    front: "What is RSTP and how is it better than STP?",
    back: "RSTP (Rapid Spanning Tree Protocol, 802.1w) converges much faster than classic STP. STP takes 30-50 seconds, RSTP takes 1-2 seconds. It uses alternate and backup ports for instant failover. Industry standard today instead of original STP."
  },
  {
    id: 17,
    front: "What is port security and why use it?",
    back: "Port security limits which MAC addresses can connect to a switch port. Prevents: rogue devices, MAC flooding attacks, unauthorized access. Can be configured with: maximum MACs allowed, specific allowed MACs (static), or dynamically learned MACs (sticky)."
  },
  {
    id: 18,
    front: "What are the three port security violation modes?",
    back: "1) Shutdown: port goes to err-disabled, must manually re-enable (most secure, default). 2) Restrict: drops violating packets, logs events, port stays up. 3) Protect: silently drops violating packets, no logging. Use shutdown for critical ports."
  },
  {
    id: 19,
    front: "What is port mirroring (SPAN)?",
    back: "SPAN (Switched Port Analyzer) copies traffic from one or more ports to a monitoring port where you connect a packet analyzer (Wireshark). Used for: troubleshooting, security monitoring (IDS), traffic analysis. Does NOT affect production traffic."
  },
  {
    id: 20,
    front: "What happens when a switch receives a frame to an unknown destination MAC?",
    back: "The switch FLOODS the frame out all ports in that VLAN (except the port it arrived on). This is called unknown unicast flooding. When the destination replies, the switch learns its MAC and can forward directly next time."
  },
  {
    id: 21,
    front: "What is MAC address aging and why does it exist?",
    back: "Switches automatically remove MAC addresses from the table after a timeout period (default 300 seconds = 5 minutes). This prevents stale entries when devices move, disconnect, or change ports. Aging keeps the MAC table accurate and prevents memory issues."
  },
  {
    id: 22,
    front: "How many VLANs can you create on a typical switch?",
    back: "4094 VLANs (1-4094). VLANs 1-1005 are normal range (stored in vlan.dat), 1006-4094 are extended range (stored in running-config, requires VTP transparent mode). VLAN 1 is default and cannot be deleted. Reserved: 1002-1005 for legacy Token Ring/FDDI."
  },
  {
    id: 23,
    front: "Quick scenario: PC in VLAN 10 can't reach PC in VLAN 20 on the same switch. Why?",
    back: "VLANs are separate broadcast domains requiring Layer 3 routing. Solution: configure inter-VLAN routing using ROAS (router with subinterfaces) or SVI (Layer 3 switch). Each VLAN needs its own IP subnet with a gateway IP for routing."
  },
  {
    id: 24,
    front: "What is a native VLAN mismatch and why is it dangerous?",
    back: "Native VLAN mismatch occurs when trunk ports on each end have different native VLANs (e.g., one side VLAN 1, other side VLAN 99). This causes: VLAN hopping attacks, connectivity issues, untagged traffic going to wrong VLAN. Always verify both sides match!"
  },
  {
    id: 25,
    front: "What is a broadcast storm and how does STP prevent it?",
    back: "Broadcast storm: broadcasts loop infinitely in a switched network with redundant paths, consuming 100% bandwidth and crashing the network. STP detects loops and places redundant ports in BLOCKING state, creating a loop-free topology while maintaining redundancy."
  },
  {
    id: 26,
    front: "What is VLAN hopping and how do you prevent it?",
    back: "VLAN hopping: attacker sends tagged frames to access unauthorized VLANs. Two methods: 1) Switch spoofing (fake trunk), 2) Double tagging. Prevention: disable DTP (no auto trunking), manually configure access ports, change native VLAN from default, don't use VLAN 1 for user data."
  },
  {
    id: 27,
    front: "What's the difference between a Layer 2 switch and a Layer 3 switch?",
    back: "Layer 2 switch: forwards based on MAC addresses only, operates within VLANs, cannot route between VLANs. Layer 3 switch: has routing capability (SVIs), can route between VLANs in hardware (fast), supports routing protocols. Also called multilayer switch."
  },
  {
    id: 28,
    front: "Exam scenario: All switch ports are in VLAN 1 but devices can't communicate. What could be wrong?",
    back: "Check: 1) IP addressing (wrong subnet/mask?), 2) Default gateway configured?, 3) Physical connectivity (cables, link lights), 4) Port not in shutdown state?, 5) Duplex mismatch?, 6) STP blocking the port? Use 'show interface status' and 'show vlan' commands."
  },
  {
    id: 29,
    front: "What does 'allowed VLANs on trunk' mean?",
    back: "By default, trunks carry ALL VLANs (1-4094). You can restrict which VLANs traverse a trunk for security or bandwidth management. Example: Only allow VLANs 10, 20, 30 on the trunk to Building B. Pruning reduces unnecessary broadcast traffic."
  },
  {
    id: 30,
    front: "Speed drill: What commands show switch info? MAC table, VLANs, interfaces, STP status",
    back: "Show MAC table: 'show mac address-table'. Show VLANs: 'show vlan brief'. Show interfaces: 'show interface status' or 'show ip interface brief'. Show STP: 'show spanning-tree'. These are CRITICAL for troubleshooting on the exam!"
  }
];