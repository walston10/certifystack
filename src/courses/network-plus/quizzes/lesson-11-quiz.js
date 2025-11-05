// Quiz for Lesson 11: Switches, VLANs, and Trunking

export const lesson11Quiz = [
  {
    id: 1,
    question: "A network administrator notices that broadcasts from VLAN 10 are being received by devices in VLAN 20. Both VLANs are configured on the same switch. What is the most likely cause of this issue?",
    options: [
      "The switch is operating in hub mode and flooding all traffic",
      "Both VLANs are configured with the same VLAN ID despite different names",
      "Spanning Tree Protocol is disabled on the switch",
      "The trunk port native VLAN is misconfigured"
    ],
    correct: 1,
    explanation: "If broadcasts from one VLAN reach another VLAN, the most likely cause is that both VLANs actually share the same VLAN ID. VLAN names are just labels; the VLAN ID is what logically separates traffic. STP doesn't affect VLAN separation, and hub mode doesn't exist on managed switches."
  },
  {
    id: 2,
    question: "You're configuring a new IP phone deployment where phones need to be on VLAN 100 (voice) and PCs on VLAN 10 (data). The phone has a built-in switch port for the PC. How should you configure the switch port connecting to the phone?",
    options: [
      "Configure it as an access port in VLAN 10 only",
      "Configure it as a trunk port allowing all VLANs",
      "Configure it as an access port with voice VLAN 100 and data VLAN 10",
      "Configure two physical ports, one for voice and one for data"
    ],
    correct: 2,
    explanation: "Cisco switches support configuring a port as an access port with both a data VLAN and a voice VLAN. The phone uses the voice VLAN (tagged) while the PC connected through the phone uses the data VLAN (untagged). This is the standard deployment for VoIP phones with pass-through PC ports."
  },
  {
    id: 3,
    question: "A switch's MAC address table shows the same MAC address appearing on multiple ports simultaneously. Users report intermittent connectivity issues. What is the most likely cause?",
    options: [
      "A Layer 2 loop exists in the network topology",
      "The switch is configured for port mirroring (SPAN)",
      "Multiple devices have duplicate MAC addresses (factory defect)",
      "The switch's MAC learning feature is disabled"
    ],
    correct: 0,
    explanation: "When the same MAC appears on multiple ports (MAC flapping), it typically indicates a Layer 2 loop. Frames loop around the network, arriving at the switch from different paths. This causes the MAC table to constantly update as it sees the same source MAC from different ports. STP should prevent this, so either STP is disabled or misconfigured."
  },
  {
    id: 4,
    question: "Two switches are connected via a trunk link carrying VLANs 10, 20, and 30. Switch A has native VLAN 1, but Switch B has native VLAN 99. What will happen to untagged traffic on this trunk?",
    options: [
      "All traffic will be dropped at the trunk port",
      "Untagged traffic from Switch A will be placed in VLAN 1 on Switch A and VLAN 99 on Switch B, causing a VLAN mismatch",
      "The switches will automatically negotiate to use the same native VLAN",
      "Untagged traffic will be sent to all VLANs (1, 10, 20, 30, 99)"
    ],
    correct: 1,
    explanation: "Native VLAN mismatch is a common configuration error. Untagged frames sent from Switch A will be in VLAN 1 (its native VLAN), but when received by Switch B, they'll be placed in VLAN 99 (its native VLAN). This causes traffic to cross VLANs inappropriately. Cisco switches typically log native VLAN mismatch warnings via CDP."
  },
  {
    id: 5,
    question: "After adding a new switch to the network, all devices lose connectivity for approximately 30-50 seconds before service is restored. What is most likely occurring?",
    options: [
      "The new switch is causing MAC address conflicts",
      "Spanning Tree Protocol is recalculating and transitioning ports through listening/learning states",
      "The DHCP server is refreshing all IP address leases",
      "The switches are negotiating trunk/access port modes"
    ],
    correct: 1,
    explanation: "Classic STP convergence behavior. When topology changes occur (new switch added), STP must recalculate the tree, elect a root bridge if needed, and determine port roles. Ports transition through blocking → listening (15s) → learning (15s) → forwarding states. This 30-50 second delay is normal for traditional 802.1D STP. RSTP (Rapid STP) reduces this significantly."
  },
  {
    id: 6,
    question: "A network has three switches in a triangle topology with all links active. Users can reach some devices but not others, and connectivity seems to flip between working and not working every few minutes. STP is disabled. What is causing this behavior?",
    options: [
      "VLAN configuration errors on trunk ports",
      "Broadcast storm and MAC table corruption due to Layer 2 loop",
      "Insufficient bandwidth causing congestion",
      "Duplicate IP addresses on the network"
    ],
    correct: 1,
    explanation: "Without STP, the triangle topology creates a Layer 2 loop. Broadcast storms occur as broadcasts circulate endlessly. MAC tables become unstable (MAC flapping) as switches see the same source MAC from multiple ports. This causes intermittent connectivity as forwarding decisions become unpredictable. This is exactly why STP exists."
  },
  {
    id: 7,
    question: "You need to implement inter-VLAN routing but only have Layer 2 switches and one router with a single Ethernet interface. What configuration method should you use?",
    options: [
      "Configure the router interface with multiple IP addresses (secondary addressing)",
      "Router-on-a-stick: create subinterfaces on the router, each tagged with a VLAN ID, connected via trunk",
      "Enable IP routing on the Layer 2 switch",
      "Use static routes between VLANs on each switch"
    ],
    correct: 1,
    explanation: "Router-on-a-stick (ROAS) uses a single physical router interface configured with multiple logical subinterfaces, each in a different VLAN. The router's interface connects to a switch trunk port carrying all required VLANs. Each subinterface is the default gateway for its VLAN. This works but creates a potential bottleneck at the single router link."
  },
  {
    id: 8,
    question: "A security policy requires that VLAN 50 (guest network) cannot communicate with VLAN 10 (corporate), but both need internet access. You have a Layer 3 switch. What is the most efficient implementation?",
    options: [
      "Configure router-on-a-stick with ACLs on the router",
      "Create SVIs (Switch Virtual Interfaces) for both VLANs and apply ACLs between them on the Layer 3 switch",
      "Place the VLANs on physically separate switches",
      "Use private VLANs to isolate the guest network"
    ],
    correct: 1,
    explanation: "Layer 3 switches perform inter-VLAN routing using SVIs (VLAN interfaces). You'd create an SVI for VLAN 10 and VLAN 50, enable IP routing, and apply an ACL to the VLAN 50 SVI denying traffic to VLAN 10's subnet while permitting internet-bound traffic. This is more efficient than ROAS because routing happens at wire speed in hardware."
  },
  {
    id: 9,
    question: "You're troubleshooting a trunk link between two switches. 'show interface trunk' shows the link is up, but devices in VLAN 30 on Switch A cannot reach devices in VLAN 30 on Switch B. VLANs 10 and 20 work fine. What should you check first?",
    options: [
      "Whether VLAN 30 exists in both switches' VLAN databases",
      "Whether STP has blocked VLAN 30 specifically",
      "Whether VLAN 30 is allowed on the trunk port configuration",
      "Whether both switches are using the same STP mode"
    ],
    correct: 2,
    explanation: "Trunks can be configured to allow only specific VLANs using the 'switchport trunk allowed vlan' command. If VLAN 30 isn't in the allowed list on either switch's trunk port, that VLAN's traffic won't traverse the trunk, even though other VLANs work. Always verify: 1) VLAN exists, 2) VLAN is allowed on trunk, 3) Native VLAN matches."
  },
  {
    id: 10,
    question: "After enabling port security on an access switch port with a maximum of 2 MAC addresses, the port immediately shuts down (err-disabled state). What is the most likely cause?",
    options: [
      "The port is connected to a hub with more than 2 devices",
      "The switch detected a MAC spoofing attack",
      "Port security violation mode is set to 'shutdown' and the MAC limit was exceeded",
      "STP placed the port in blocking state"
    ],
    correct: 2,
    explanation: "Port security has three violation modes: shutdown (default), restrict, and protect. In shutdown mode, if the configured MAC limit is exceeded or an unauthorized MAC is learned, the port enters err-disabled state. The most common cause is connecting a port configured for a single MAC to a device like an IP phone (which itself has a MAC) with a PC behind it (another MAC)."
  },
  {
    id: 11,
    question: "A network administrator wants to capture all traffic from VLAN 10 for analysis with Wireshark. The analyzer laptop is connected to port Gi0/5 on the same switch. What feature must be configured?",
    options: [
      "Configure port Gi0/5 as a trunk port allowing VLAN 10",
      "Configure port mirroring (SPAN) to copy VLAN 10 traffic to port Gi0/5",
      "Enable promiscuous mode on port Gi0/5",
      "Configure Gi0/5 as an access port in VLAN 10"
    ],
    correct: 1,
    explanation: "Port mirroring (SPAN - Switched Port ANalyzer) copies traffic from source ports/VLANs to a destination monitor port. You'd configure: 'monitor session 1 source vlan 10' and 'monitor session 1 destination interface Gi0/5'. The monitor port receives copies of all traffic from VLAN 10 for analysis. Simply putting the analyzer in VLAN 10 only captures traffic to/from that analyzer."
  },
  {
    id: 12,
    question: "During STP operation, which port state allows a switch to populate its MAC address table by listening to frames but not yet forwarding user traffic?",
    options: [
      "Blocking - the port is disabled to prevent loops",
      "Listening - the port is preparing to forward",
      "Learning - the port is building its MAC table but not forwarding",
      "Forwarding - the port is fully operational"
    ],
    correct: 2,
    explanation: "STP port states: Blocking (receives BPDUs only), Listening (sends/receives BPDUs, prepares for forwarding), Learning (sends/receives BPDUs and learns MAC addresses but doesn't forward frames), Forwarding (fully operational). Learning state is critical because the switch needs to populate its MAC table before forwarding to prevent flooding."
  },
  {
    id: 13,
    question: "Two distribution switches are connected via two links for redundancy. You want to use both links for increased bandwidth while maintaining loop prevention. What should you configure?",
    options: [
      "Leave both links active; STP will automatically load balance",
      "Configure Link Aggregation (LACP/EtherChannel) to bundle both links into one logical link",
      "Disable STP since you want both links active",
      "Configure one link as primary and one as backup using VRRP"
    ],
    correct: 1,
    explanation: "Link aggregation (LACP, or Cisco's proprietary EtherChannel) bundles multiple physical links into one logical link. This provides both redundancy and load balancing. STP sees the bundle as a single link, preventing loops while allowing traffic across all member links. Without aggregation, STP would block one link, wasting bandwidth."
  },
  {
    id: 14,
    question: "A switch is receiving 802.1Q tagged frames on a trunk port, but the VLAN tag shows VLAN 1 (the native VLAN). According to the 802.1Q standard, how should these frames appear on the wire?",
    options: [
      "Frames in the native VLAN should be sent untagged on the trunk",
      "Frames in the native VLAN are always tagged with VLAN ID 1",
      "Native VLAN frames are dropped to prevent security issues",
      "Native VLAN frames are double-tagged for identification"
    ],
    correct: 0,
    explanation: "802.1Q standard specifies that frames belonging to the native VLAN are transmitted untagged on trunk ports. This maintains backward compatibility with untagged traffic. If you see frames tagged with VLAN 1 being received, someone likely manually tagged them (not the default behavior). This is a common security exam topic - native VLAN should match on both trunk ends."
  },
  {
    id: 15,
    question: "A corporation's switch shows the MAC address table aging time set to 300 seconds (5 minutes). During high-traffic periods, the table fills completely, and the switch begins flooding unknown unicast traffic. What is the best solution?",
    options: [
      "Reduce the MAC aging time to 60 seconds to free up entries faster",
      "Increase the MAC aging time to 600 seconds to retain entries longer",
      "Upgrade to a switch with a larger MAC address table capacity",
      "Enable MAC address filtering to block excessive entries"
    ],
    correct: 2,
    explanation: "If the MAC table is filling up during normal operation, the switch doesn't have enough capacity for the environment. Reducing aging time causes more re-learning (more flooding, more CPU). Increasing aging time doesn't help if the table is full. The proper solution is a switch with a larger MAC address table (enterprise switches often support 16K-128K+ entries)."
  }
];

// Export for use in quiz component
export default lesson11Quiz;