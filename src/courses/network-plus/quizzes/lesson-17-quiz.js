// Quiz for Lesson 17: Monitoring Tools and SNMP

export const lesson17Quiz = [
  {
    id: 1,
    question: "A network operations center receives hundreds of SNMP traps from various network devices. The team notices that some traps contain sensitive information (device configurations, passwords) in plain text. Which SNMP version should be implemented to address this security concern?",
    options: [
      "SNMPv1 with community strings for authentication",
      "SNMPv2c which improves performance over v1",
      "SNMPv3 with encryption and strong authentication mechanisms",
      "Any SNMP version with stronger community strings"
    ],
    correct: 2,
    explanation: "SNMPv1 and SNMPv2c transmit data in clear text, including community strings (essentially passwords). SNMPv3 adds: encryption (DES, AES) for privacy, authentication (MD5, SHA), and access control. SNMPv3 is the only secure version. For compliance and security, SNMPv3 should always be used in production. Legacy devices may only support v1/v2c, creating security gaps. Community strings in v1/v2c are like passwords sent in plain text over the network."
  },
  {
    id: 2,
    question: "A network administrator configures SNMP monitoring and wants the management station to actively query devices every 5 minutes for interface statistics and CPU utilization. What SNMP operation mode is being used?",
    options: [
      "SNMP traps - devices send alerts when events occur",
      "SNMP polling - management station queries devices at regular intervals",
      "SNMP inform - devices send acknowledged notifications",
      "SNMP gets - one-time manual queries"
    ],
    correct: 1,
    explanation: "SNMP polling: management station (NMS) actively queries devices using GET/GETNEXT/GETBULK requests at scheduled intervals. Traps: devices push notifications to NMS when events occur (reactive). Polling is predictable and ensures regular data collection but creates network overhead. Traps reduce overhead but may be missed if the NMS is down. Best practice: use both—polling for metrics, traps for critical alerts."
  },
  {
    id: 3,
    question: "During troubleshooting, a technician wants to view real-time syslog messages from a problematic router. The router is configured to send logs to a central syslog server. Which syslog severity level should be configured to see detailed debugging information?",
    options: [
      "Level 0 (Emergency) - system is unusable",
      "Level 3 (Error) - error conditions",
      "Level 6 (Informational) - normal operational messages",
      "Level 7 (Debug) - detailed debugging messages"
    ],
    correct: 3,
    explanation: "Syslog severity levels (0-7): 0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Informational, 7=Debug. Debug (7) provides the most verbose output for troubleshooting. Warning: Debug creates significant log volume and CPU load—only enable during troubleshooting, then disable. Production typically uses level 4-6. Configure: which severity to log locally vs send to syslog server (often more verbose locally)."
  },
  {
    id: 4,
    question: "A network engineer needs to analyze traffic patterns to identify which applications consume the most bandwidth and which hosts are communicating. The monitoring system should capture flow records with source/destination IPs, ports, byte counts, and packet counts. What protocol provides this capability?",
    options: [
      "SNMP for device statistics and interface counters",
      "NetFlow/sFlow/IPFIX for traffic flow analysis and monitoring",
      "Syslog for event logging and system messages",
      "NTP for time synchronization"
    ],
    correct: 1,
    explanation: "NetFlow (Cisco)/sFlow (industry standard)/IPFIX (IETF standard) capture flow data: source/destination IPs, ports, protocols, byte/packet counts, ToS, and timestamps. Flows are exported to collectors for analysis. Benefits: traffic visibility, capacity planning, security monitoring (DDoS detection), billing, and forensics. SNMP provides interface counters (total bytes) but not per-flow details. NetFlow = detailed conversation analysis, SNMP = aggregate statistics."
  },
  {
    id: 5,
    question: "An organization's monitoring system shows that a core switch's CPU utilization spiked to 95% at 3 AM for 10 minutes, then returned to normal. Interface counters and bandwidth usage were normal. What SNMP information would help identify the cause?",
    options: [
      "Only bandwidth utilization metrics are needed",
      "SNMP traps/logs generated during that time showing process CPU usage and any protocol events (STP changes, routing updates, etc.)",
      "Physical temperature sensors only",
      "Only interface error counters"
    ],
    correct: 1,
    explanation: "High CPU without high bandwidth suggests control plane activity: STP reconvergence, routing protocol updates, ARP storms, broadcast storms, or management plane activity. SNMP can track: per-process CPU, protocol counters, and event traps. Check device logs and SNMP data for: STP topology changes, routing protocol neighbor flaps, excessive broadcast/multicast, ACL processing. Modern switches often send traps for significant events—correlating trap timing with CPU spikes helps identify root cause."
  },
  {
    id: 6,
    question: "A company uses SNMP to monitor network devices. The network manager wants to retrieve multiple values in a single request to reduce network overhead. Which SNMP operation should be configured?",
    options: [
      "Multiple individual GET requests sent sequentially",
      "GET-NEXT to walk through the MIB tree one object at a time",
      "GET-BULK to retrieve multiple values efficiently in one operation",
      "SET operations to configure multiple values"
    ],
    correct: 2,
    explanation: "SNMP operations: GET (retrieve single value), GET-NEXT (retrieve next object in MIB tree - used for MIB walking), GET-BULK (retrieve multiple values in one request - SNMPv2c/v3 only, more efficient), SET (modify values). GET-BULK significantly reduces overhead when collecting multiple OIDs. Example: collecting all interface stats—GET-BULK retrieves all interfaces in one request vs 24 individual GETs for a 24-port switch."
  },
  {
    id: 7,
    question: "A network operations team notices that critical device failure alerts are sometimes missed. They currently use SNMP traps. Investigation reveals that during network congestion, some traps are lost. What should be implemented to ensure reliable alert delivery?",
    options: [
      "Increase trap frequency to compensate for losses",
      "Switch from SNMP traps to SNMP inform messages which require acknowledgment",
      "Reduce the number of monitoring devices",
      "Only use syslog instead of SNMP"
    ],
    correct: 1,
    explanation: "SNMP traps use UDP (unreliable, no acknowledgment)—they're fire-and-forget. If the NMS is down or the packet is lost, the alert is missed. SNMP informs (SNMPv2c/v3) require acknowledgment from the NMS. The device retransmits if no ACK is received. Tradeoff: informs create more traffic and device overhead, but ensure critical alerts aren't lost. Best practice: use informs for critical alerts (link down, device failure), traps for informational events."
  },
  {
    id: 8,
    question: "A data center's environmental monitoring system needs to track temperature and humidity in server rooms. The sensors support SNMP. What type of SNMP OID (Object Identifier) would be used to query temperature readings from these sensors?",
    options: [
      "Standard MIB-II interface statistics OIDs",
      "Vendor-specific/proprietary OIDs defined in the sensor manufacturer's private MIB",
      "Routing protocol OIDs from standard MIBs",
      "SNMP community string OIDs"
    ],
    correct: 1,
    explanation: "MIB (Management Information Base) defines available SNMP objects. Standard MIBs (MIB-II, RFC 1213) define common objects: interfaces, IP, TCP, UDP. Vendor-specific features use private MIBs under their enterprise OID branch (e.g., Cisco: .1.3.6.1.4.1.9.x). Environmental sensors use vendor MIBs for temperature, humidity, power, etc. To monitor these, import the vendor's MIB file into your NMS so it understands the custom OIDs. OIDs are hierarchical dot notation (e.g., 1.3.6.1.2.1.2.2.1.10 = ifInOctets)."
  },
  {
    id: 9,
    question: "A network administrator configures a centralized syslog server to collect logs from 200 network devices. After deployment, disk space on the syslog server fills up within days. What should be implemented to manage log retention effectively?",
    options: [
      "Disable syslog entirely to save space",
      "Implement log rotation policies with retention periods, compression, and archival to remote storage",
      "Only collect logs from critical devices",
      "Reduce all devices to only send Emergency level logs"
    ],
    correct: 1,
    explanation: "Syslog management requires: 1) Log rotation (daily/weekly files), 2) Retention policies (keep 30/60/90 days based on compliance), 3) Compression of old logs, 4) Archival to cheaper storage, 5) Log level tuning per device (not all devices need Debug), 6) Filtering unnecessary messages. Tools: syslog-ng, rsyslog, Splunk, ELK stack. Monitor disk usage and set alerts. Consider: compliance requirements (PCI-DSS, HIPAA often mandate 1-year retention)."
  },
  {
    id: 10,
    question: "A network monitoring tool displays interface statistics showing 'ifInOctets' and 'ifOutOctets' from MIB-II. These counters show cumulative byte totals since the device booted. How should the monitoring system calculate actual bandwidth utilization rate?",
    options: [
      "Use the counter values directly as bandwidth",
      "Calculate the difference between consecutive polls and divide by the time interval to get bytes per second",
      "Multiply the counter by interface speed",
      "Subtract ifOutOctets from ifInOctets"
    ],
    correct: 1,
    explanation: "SNMP counters (ifInOctets, ifOutOctets) are cumulative totals that continuously increment. To calculate rate: (Current_Value - Previous_Value) / Time_Interval. Example: if ifInOctets increased from 1,000,000 to 1,500,000 in 60 seconds, rate = (500,000 bytes) / (60s) = 8,333 bytes/sec ≈ 66.6 Kbps. Counter wraps: 32-bit counters wrap at 4.3GB, 64-bit at much higher values. Modern systems use 64-bit counters (ifHCInOctets) on high-speed interfaces."
  },
  {
    id: 11,
    question: "A company deploys a monitoring system that tracks interface statistics, CPU, memory, and environmental sensors across their infrastructure. They want to be alerted when any interface exceeds 80% utilization for more than 5 minutes. What monitoring capability is required?",
    options: [
      "Real-time packet capture on all interfaces",
      "Threshold-based alerting with configurable time windows and escalation policies",
      "Manual review of all statistics every hour",
      "Automatic device reboots when thresholds are exceeded"
    ],
    correct: 1,
    explanation: "Modern monitoring systems provide: 1) Threshold configuration (warning at 70%, critical at 80%), 2) Time-based conditions (sustained for X minutes - avoids false alerts from brief spikes), 3) Alerting mechanisms (email, SMS, tickets), 4) Escalation (if not acknowledged in 15 minutes, alert senior staff), 5) Alert suppression (maintenance windows). Key: balance between catching problems and alert fatigue. Too sensitive = ignored alerts; too lenient = missed issues."
  },
  {
    id: 12,
    question: "A network team wants to monitor packet loss, latency, and jitter between their headquarters and three branch offices. Rather than monitoring individual link statistics, they need end-to-end application performance from the user perspective. What should they implement?",
    options: [
      "SNMP polling of interface counters only",
      "Synthetic monitoring with active probes simulating user traffic and measuring response times",
      "Only review user complaints to identify issues",
      "NetFlow collection for bandwidth analysis"
    ],
    correct: 1,
    explanation: "Synthetic monitoring (active monitoring) uses probes/agents to simulate user transactions: ping, HTTP requests, DNS lookups, VoIP calls, etc. Measures: latency, jitter, packet loss, DNS resolution time, HTTP response time. Benefits: proactive problem detection before users complain, baseline establishment, SLA verification. Examples: IP SLA (Cisco), ThousandEyes, Catchpoint. Complementary to passive monitoring (SNMP, NetFlow)—synthetic shows user experience, passive shows infrastructure health."
  },
  {
    id: 13,
    question: "After a network outage, the team correlates SNMP data, syslog messages, and NetFlow records from multiple devices. They notice all timestamps are off by several minutes, making correlation difficult. What should be implemented to ensure accurate time synchronization?",
    options: [
      "Manually set clocks on all devices weekly",
      "Deploy NTP (Network Time Protocol) with a reliable time source to synchronize all network devices",
      "Ignore timestamps and correlate events by description only",
      "Use different time zones on each device"
    ],
    correct: 1,
    explanation: "NTP is critical for: log correlation, security event analysis, troubleshooting (event timeline), scheduled tasks, certificate validation, and authentication protocols (Kerberos). NTP hierarchy: Stratum 0 (atomic/GPS clocks), Stratum 1 (primary servers), Stratum 2+ (downstream). Best practice: dedicated internal NTP servers (Stratum 2) synchronized to public Stratum 1 servers; network devices point to internal NTP. Use NTPv3/v4, consider NTP authentication to prevent time poisoning attacks."
  },
  {
    id: 14,
    question: "A network monitoring dashboard shows interface error rates increasing on a switch port. The administrator wants to determine if errors are input errors (CRC, frame errors on receive) or output errors (collisions, discards on transmit). What SNMP MIB counters should be checked?",
    options: [
      "Only total bandwidth counters (ifInOctets/ifOutOctets)",
      "Interface error counters: ifInErrors, ifInDiscards, ifOutErrors, ifOutDiscards for directional error analysis",
      "CPU and memory utilization only",
      "Environmental temperature sensors"
    ],
    correct: 1,
    explanation: "MIB-II interface counters include: ifInOctets/ifOutOctets (bytes), ifInErrors (input errors: CRC, runts, giants), ifInDiscards (dropped due to buffer), ifOutErrors (output errors: late collisions, excessive deferral), ifOutDiscards (dropped due to congestion/QoS). High ifInErrors suggests: bad cable, duplex mismatch, EMI. High ifOutErrors suggests: collisions (half-duplex), output queue drops (congestion). Directional error analysis helps isolate physical layer problems."
  },
  {
    id: 15,
    question: "A monitoring system collects data from 500 network devices. To reduce storage requirements and improve dashboard performance, the system performs calculations to reduce one hour of 5-minute samples down to a single average value. What data aggregation technique is being used?",
    options: [
      "Data compression using ZIP algorithms",
      "Data aggregation and downsampling to reduce granularity while preserving trends",
      "Data deletion to free space",
      "Real-time streaming without storage"
    ],
    correct: 1,
    explanation: "Time-series data aggregation: reduce high-resolution data to lower resolution over time. Example: keep 5-minute granularity for 7 days, 1-hour averages for 30 days, daily averages for 1 year. Preserves long-term trends while reducing storage. Aggregation functions: average, min, max, percentile. Tools: RRDTool (round-robin database), InfluxDB, Prometheus. Trade-off: lose detail but gain long-term history. Critical: choose appropriate retention/aggregation policies based on troubleshooting needs."
  }
];

// Export for use in quiz component
export default lesson17Quiz;