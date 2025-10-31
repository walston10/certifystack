// ============================================
// DOMAIN CONFIGURATION
// ============================================
// Color schemes and icons for each Network+ domain

import {
  Network,
  Router,
  Shield,
  Wrench,
  Server,
  Layers,
  Globe,
  Binary,
  Wifi,
  Cloud,
  Lock,
  Activity,
  Cable,
  HardDrive,
  MonitorCheck
} from 'lucide-react';

// Domain color schemes
export const domainColors = {
  "Networking Concepts": {
    primary: "#00d9ff", // Cyan
    secondary: "#00a3cc",
    glow: "rgba(0, 217, 255, 0.3)",
    gradient: "linear-gradient(135deg, rgba(0, 217, 255, 0.15), rgba(102, 126, 234, 0.15))"
  },
  "Network Infrastructure": {
    primary: "#667eea", // Purple
    secondary: "#764ba2",
    glow: "rgba(102, 126, 234, 0.3)",
    gradient: "linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))"
  },
  "Network Operations": {
    primary: "#f093fb", // Pink
    secondary: "#f5576c",
    glow: "rgba(240, 147, 251, 0.3)",
    gradient: "linear-gradient(135deg, rgba(240, 147, 251, 0.15), rgba(245, 87, 108, 0.15))"
  },
  "Network Security": {
    primary: "#ff6b6b", // Red/Orange
    secondary: "#ee5a52",
    glow: "rgba(255, 107, 107, 0.3)",
    gradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.15), rgba(255, 170, 0, 0.15))"
  },
  "Network Troubleshooting": {
    primary: "#00ff88", // Green
    secondary: "#00cc77",
    glow: "rgba(0, 255, 136, 0.3)",
    gradient: "linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 217, 255, 0.15))"
  }
};

// Lesson-specific icons mapping
export const lessonIcons = {
  // Networking Concepts (Lessons 1-9)
  1: Layers,           // OSI Model
  2: Network,          // Network Topologies
  3: Binary,           // IP Addressing
  4: Binary,           // Subnet Masks
  5: Binary,           // Subnetting
  6: Binary,           // Advanced Subnetting
  7: Globe,            // IPv6
  8: Server,           // Network Protocols
  9: Cable,            // Port Numbers

  // Network Infrastructure (Lessons 10-15)
  10: Router,          // Switches
  11: Wifi,            // VLANs
  12: Router,          // Routers
  13: Cloud,           // WAN Technologies
  14: Wifi,            // Wireless Standards
  15: Network,         // Network Devices

  // Network Operations (Lessons 16-20)
  16: Activity,        // Network Management
  17: MonitorCheck,    // Monitoring Tools
  18: HardDrive,       // Documentation
  19: Cloud,           // Cloud Computing
  20: Server,          // Virtualization

  // Network Security (Lessons 21-25)
  21: Shield,          // Security Concepts
  22: Lock,            // Authentication
  23: Shield,          // Firewalls
  24: Lock,            // VPNs
  25: Shield,          // Wireless Security

  // Network Troubleshooting (Lessons 26-30)
  26: Wrench,          // Troubleshooting Methodology
  27: Activity,        // Network Troubleshooting
  28: Wrench,          // Troubleshooting Tools
  29: MonitorCheck,    // Performance Optimization
  30: Wrench           // Common Issues
};

/**
 * Get domain configuration for a lesson
 */
export function getDomainConfig(domain) {
  return domainColors[domain] || domainColors["Networking Concepts"];
}

/**
 * Get icon component for a lesson
 */
export function getLessonIcon(lessonId) {
  return lessonIcons[lessonId] || Network;
}

// Named default export to satisfy ESLint
const domainConfiguration = {
  domainColors,
  lessonIcons,
  getDomainConfig,
  getLessonIcon
};

export default domainConfiguration;
