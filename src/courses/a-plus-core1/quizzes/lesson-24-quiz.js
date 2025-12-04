export const lesson24Quiz = [
  {
    id: 1,
    question: "A user wants to connect their laptop to a 4K monitor. The laptop only has HDMI 1.4 and the monitor supports HDMI 2.0. What is the maximum resolution/refresh rate they can achieve?",
    options: [
      "4K at 60Hz (full capability)",
      "4K at 30Hz - limited by HDMI 1.4 bandwidth (HDMI 2.0 required for 4K 60Hz)",
      "8K at 120Hz",
      "Resolution is not affected by HDMI version"
    ],
    correct: 1,
    explanation: "HDMI version capabilities: (1) HDMI 1.4 - 4K at 30Hz max, 1080p at 120Hz, (2) HDMI 2.0 - 4K at 60Hz, (3) HDMI 2.1 - 4K at 120Hz, 8K at 60Hz, VRR support. The connection is limited by the lowest version in the chain (source, cable, display). HDMI 1.4 laptop → HDMI 2.0 monitor = limited to HDMI 1.4 capabilities (4K 30Hz). The monitor can display 4K 60Hz, but the laptop cannot output it via HDMI 1.4. Solutions: (1) Accept 4K 30Hz limitation, (2) Use DisplayPort if available (DP 1.2+ supports 4K 60Hz), (3) USB-C with DisplayPort Alt Mode if available, (4) Lower resolution to 1080p for 60Hz. HDMI cables: (1) High Speed - HDMI 1.4/2.0, (2) Ultra High Speed - HDMI 2.1. Bandwidth is key: higher refresh rates and resolutions require more bandwidth."
  },
  {
    id: 2,
    question: "What is the key advantage of DisplayPort over HDMI for multi-monitor setups?",
    options: [
      "DisplayPort is always cheaper",
      "DisplayPort supports daisy-chaining (MST - Multi-Stream Transport) allowing multiple monitors from a single port",
      "HDMI is completely obsolete",
      "DisplayPort only works with gaming monitors"
    ],
    correct: 1,
    explanation: "DisplayPort advantages: (1) Daisy-chaining (MST) - connect multiple monitors in series from single DP port (up to 4 monitors depending on resolution), (2) Higher bandwidth - DP 1.4: 32.4 Gbps, DP 2.0: 77.4 Gbps vs HDMI 2.1: 48 Gbps, (3) Locking connector - prevents accidental disconnection, (4) Royalty-free - no licensing fees, (5) Adaptive sync - FreeSync/G-Sync compatibility. Daisy-chaining requirements: (1) GPU with DP 1.2+ MST support, (2) Monitors with DP in AND DP out (not all monitors), (3) Last monitor in chain only needs DP in. HDMI advantages: (1) More common on TVs, (2) ARC/eARC for audio return, (3) CEC device control, (4) Ubiquitous on consumer devices. For productivity multi-monitor: DisplayPort preferred. For single display/TV: HDMI works fine. Gaming monitors: often prefer DisplayPort for high refresh rates (144Hz+, adaptive sync)."
  },
  {
    id: 3,
    question: "A monitor displays a 'No Signal' message after connecting via HDMI. The computer is powered on. What should be checked first?",
    options: [
      "Replace the monitor immediately",
      "Verify monitor is set to correct input source (HDMI 1, HDMI 2, etc.), check cable connections at both ends, and ensure computer is outputting to correct display",
      "The HDMI standard is incompatible with all monitors",
      "Monitors never work with computers"
    ],
    correct: 1,
    explanation: "No signal troubleshooting: (1) Input source - press Input/Source button on monitor, select correct HDMI port (monitors have multiple HDMI inputs labeled HDMI 1, HDMI 2, etc.), (2) Cable connections - verify secure at both GPU and monitor, try reseating, (3) Try different cable - cable may be faulty, (4) Test different port - try another HDMI/DisplayPort on GPU, (5) Test different monitor/TV - isolate if issue is monitor or computer, (6) Boot to BIOS - if BIOS displays, OS/driver issue; if no BIOS, hardware issue. Multi-GPU systems: ensure monitor connected to discrete GPU (card), not motherboard (if both present). Laptop troubleshooting: (1) Press Windows + P to check projection mode, (2) Try Fn + Display toggle key (varies by laptop). Common causes: wrong input selected, loose cable, defective cable, GPU not seated properly, monitor defective."
  },
  {
    id: 4,
    question: "What is the difference between DVI-D, DVI-I, and DVI-A?",
    options: [
      "They are identical - just different names",
      "DVI-D is digital only, DVI-I carries both digital and analog signals, DVI-A is analog only (rare)",
      "DVI-A is the newest and fastest",
      "DVI-I is for industrial use only"
    ],
    correct: 1,
    explanation: "DVI (Digital Visual Interface) types: (1) DVI-D (Digital) - digital signal only, most common, cannot convert to VGA (analog), (2) DVI-I (Integrated) - digital + analog pins, can convert to VGA with passive adapter, (3) DVI-A (Analog) - analog only, very rare, essentially VGA in DVI connector. DVI connector types: (1) Single-link - 1920×1200 at 60Hz max, (2) Dual-link - 2560×1600 at 60Hz max, higher bandwidth. Physical identification: (1) DVI-D - flat pin blade only, (2) DVI-I - flat blade + 4 additional pins around blade. Modern status: DVI being phased out, replaced by HDMI/DisplayPort. DVI limitations: (1) No audio transmission (unlike HDMI/DP), (2) Limited to ~2K resolution, (3) Bulky connectors. Adapters: (1) DVI-I to VGA - passive (uses analog pins), (2) DVI-D to VGA - active adapter required (digital to analog conversion), (3) DVI to HDMI - passive (digital signals compatible). Legacy equipment still uses DVI."
  },
  {
    id: 5,
    question: "A user wants to connect a modern laptop (USB-C/Thunderbolt 3) to an older VGA projector. What type of adapter is needed?",
    options: [
      "Simple passive USB-C to VGA cable works",
      "Active adapter/converter - USB-C/Thunderbolt to VGA (converts digital to analog signal)",
      "No adapter exists for this connection",
      "VGA to VGA cable only"
    ],
    correct: 1,
    explanation: "USB-C display connectivity: USB-C with DisplayPort Alt Mode can output video. For VGA (analog): (1) Requires active adapter - converts digital (DP) to analog (VGA), (2) USB-C to VGA adapter - includes conversion chip, powered by USB-C, (3) Multi-port adapter - USB-C to HDMI/VGA/DVI common. Adapter types: (1) Passive - simple pin remapping (HDMI to DVI, DP to HDMI), cheap, (2) Active - signal conversion required (USB-C to VGA, DP to VGA, HDMI to VGA), contains electronics, more expensive ($15-50). USB-C capabilities: (1) DisplayPort Alt Mode - video output, (2) Thunderbolt 3/4 - includes DP Alt Mode, (3) Power Delivery - charging, (4) Data - USB speeds. Not all USB-C ports support video - verify laptop specs (must explicitly state DisplayPort Alt Mode or Thunderbolt). Testing: connect adapter, may need to press Windows + P or Fn + Display key to detect projector."
  },
  {
    id: 6,
    question: "What refresh rate should be selected for a gaming monitor to reduce motion blur and provide smoother gameplay?",
    options: [
      "30Hz is ideal for gaming",
      "60Hz minimum, but 120Hz, 144Hz, or 240Hz preferred for competitive gaming and reduced motion blur",
      "Refresh rate doesn't matter for gaming",
      "500Hz is standard"
    ],
    correct: 1,
    explanation: "Monitor refresh rates: (1) 60Hz - standard, 60 frames per second max, adequate for casual use, (2) 75Hz - slight improvement, budget gaming, (3) 120/144Hz - popular for gaming, significant smoothness improvement, (4) 165/180Hz - enthusiast gaming, (5) 240Hz/360Hz - competitive esports, diminishing returns. Higher refresh rate benefits: (1) Smoother motion - less blur, (2) Reduced input lag - more responsive, (3) Competitive advantage - spot enemies faster. Requirements: (1) GPU must output sufficient FPS (frames per second) to match refresh rate, (2) Cable must support bandwidth (DP 1.2+ for 144Hz 1080p, DP 1.4 for 144Hz 1440p, HDMI 2.0 limited to 144Hz 1080p), (3) Enable high refresh rate in Windows Display Settings and monitor OSD. Matching FPS to refresh rate: 144Hz monitor needs GPU outputting 144 FPS for full benefit. Lower FPS still works but wastes potential. Adaptive sync (FreeSync, G-Sync) matches refresh rate to FPS dynamically, eliminating tearing."
  },
  {
    id: 7,
    question: "A monitor shows the correct resolution but colors look washed out or incorrect. What display setting should be checked?",
    options: [
      "Monitor is always defective if colors are wrong",
      "Check color depth/bit depth settings (should be 32-bit True Color), monitor color profile, and calibration settings",
      "Resolution is the only factor affecting color",
      "Refresh rate determines color accuracy"
    ],
    correct: 1,
    explanation: "Color display settings: (1) Color depth (bit depth) - 8-bit (256 colors, obsolete), 16-bit (65,536 colors, High Color), 24-bit (16.7 million colors, True Color), 32-bit (24-bit + alpha channel, standard), (2) Color profile - ICC profiles for accurate color reproduction, (3) Monitor settings - brightness, contrast, color temperature (6500K standard), gamma. Troubleshooting incorrect colors: (1) Windows Display Settings → Advanced → Color Management → ensure 32-bit color, (2) Update GPU drivers - may fix color issues, (3) Check cable - poor cable can cause color degradation, try different cable, (4) Monitor OSD - reset to factory defaults, (5) Cable type - VGA degrades colors over distance, use digital (HDMI/DP/DVI). Professional color work: (1) Hardware calibration (colorimeter - X-Rite, Spyder), (2) Wide gamut monitors (99% sRGB, Adobe RGB), (3) Factory calibration reports. Common issues: (1) 16-bit color (old setting/bad drivers), (2) Limited RGB range (should be Full for monitors), (3) Wrong color profile."
  },
  {
    id: 8,
    question: "What is the purpose of response time (measured in milliseconds) on a monitor specification?",
    options: [
      "How long the warranty lasts",
      "How quickly pixels can change from one color to another - lower is better (1ms ideal for gaming to reduce ghosting)",
      "The time to turn the monitor on",
      "Response time only affects brightness"
    ],
    correct: 1,
    explanation: "Response time measures pixel transition speed (gray-to-gray or black-to-white-to-black). Lower = faster transitions = less ghosting/blur. Response times: (1) 1ms (G2G) - gaming monitors, TN/IPS panels, minimal ghosting, (2) 4-5ms - standard IPS, good for most uses, (3) 8-10ms - older displays, noticeable ghosting in fast motion. Panel types and response: (1) TN (Twisted Nematic) - fastest (1ms typical), poor colors/viewing angles, competitive gaming, (2) IPS (In-Plane Switching) - 1-5ms modern, excellent colors/angles, popular all-around, (3) VA (Vertical Alignment) - 4-8ms, high contrast, some ghosting, (4) OLED - <0.1ms, perfect blacks, expensive. Response time vs refresh rate: (1) Response time - pixel transition speed, (2) Refresh rate - how often screen updates, (3) Both matter - 144Hz monitor with 10ms response wastes high refresh (ghosting). Overdrive: monitor setting to reduce response time, can cause inverse ghosting if too aggressive. For competitive gaming: 1ms response + 144Hz+ refresh rate ideal."
  },
  {
    id: 9,
    question: "A laptop is connected to an external monitor via HDMI. The laptop screen and external monitor show the same image (mirrored). How can they be set to show different content (extended desktop)?",
    options: [
      "It's impossible to extend displays",
      "Press Windows + P and select 'Extend' mode (or use Display Settings → Multiple displays → Extend these displays)",
      "Buy a new laptop",
      "Mirroring cannot be changed"
    ],
    correct: 1,
    explanation: "Multi-display modes: (1) Duplicate/Mirror - same content on all displays, presentations, (2) Extend - single desktop across multiple displays, productivity, (3) Second screen only - external display only (laptop screen off), (4) PC screen only - laptop screen only (external off). Setting display mode: Method 1 (Quick): (1) Windows + P keyboard shortcut, (2) Select desired mode from sidebar. Method 2 (Settings): (1) Settings → System → Display, (2) Multiple displays dropdown → Extend, (3) Arrange displays by dragging numbered rectangles to match physical layout, (4) Set primary display (which has taskbar/Start). Display arrangement: (1) Drag between displays at proper edges, (2) Align top edges if monitors different heights, (3) Test by moving mouse cursor between displays. Per-display settings: resolution, orientation, scaling can differ. Common issues: (1) Display not detected - check cables, update drivers, detect in Display Settings, (2) Wrong primary display - change in Settings, (3) Cursor stuck - verify displays arranged correctly."
  },
  {
    id: 10,
    question: "What is the purpose of adaptive sync technologies like FreeSync (AMD) and G-Sync (NVIDIA)?",
    options: [
      "To make monitors more expensive",
      "To synchronize the monitor's refresh rate with the GPU's frame rate, eliminating screen tearing and stuttering",
      "To increase resolution",
      "Adaptive sync only changes colors"
    ],
    correct: 1,
    explanation: "Adaptive sync eliminates screen tearing by matching monitor refresh rate to GPU frame rate dynamically. Traditional problem: (1) Monitor refreshes at fixed rate (60Hz), (2) GPU renders at variable rate (45-90 FPS), (3) Mismatch causes tearing (partial frames visible) or stuttering (with V-Sync). Adaptive sync solution: monitor adjusts refresh rate to match GPU output in real-time (e.g., 45-144Hz range). Technologies: (1) G-Sync (NVIDIA) - proprietary, hardware module in monitor, premium, wider VRR range, (2) G-Sync Compatible - VESA Adaptive Sync certified by NVIDIA, (3) FreeSync (AMD) - open standard, VESA Adaptive Sync, no licensing fee, (4) FreeSync Premium - wider range, low framerate compensation. Requirements: (1) Compatible GPU (NVIDIA 10-series+ for G-Sync/FreeSync, AMD for FreeSync), (2) Compatible monitor with technology, (3) Compatible connection (DisplayPort primarily, HDMI 2.1 for newer), (4) Enable in GPU control panel and monitor OSD. Benefits: smooth gameplay, no tearing, no input lag from V-Sync. Works best with FPS within monitor's adaptive range (typically 48-144Hz)."
  },
  {
    id: 11,
    question: "A 4K monitor is connected but text appears very small and difficult to read. What Windows setting should be adjusted?",
    options: [
      "Lower the resolution (defeats purpose of 4K)",
      "Adjust Display Scaling (125%, 150%, or 200%) in Display Settings to make text and UI elements larger while maintaining 4K resolution",
      "Monitors cannot display readable text at 4K",
      "Change the refresh rate"
    ],
    correct: 1,
    explanation: "Display scaling makes UI elements larger without reducing resolution. High resolution (4K) on small screens = tiny text without scaling. Windows scaling: (1) Settings → System → Display → Scale and layout, (2) Recommended scaling (usually 150% or 200% for 4K), (3) Custom scaling - precise percentage (100-500%). Scaling recommendations: (1) 1080p (24\") - 100%, (2) 1440p (27\") - 100-125%, (3) 4K (27\") - 150%, (4) 4K (32\") - 125-150%. Scaling issues: (1) Blurry apps - old apps don't support scaling properly, (2) Mixed DPI - laptop (high DPI) + external monitor (standard DPI), (3) Per-display scaling - Windows allows different scaling per monitor. Solutions for blurry apps: (1) Right-click app → Properties → Compatibility → Change high DPI settings → Override high DPI scaling, (2) Update app to version supporting high DPI. Benefits of proper scaling: readable text + sharp 4K image quality. Don't reduce resolution - defeats purpose of high-resolution display."
  },
  {
    id: 12,
    question: "What is the difference between IPS, TN, and VA panel types in monitors?",
    options: [
      "They are identical technologies with different marketing names",
      "IPS offers best colors/viewing angles, TN offers fastest response times, VA offers highest contrast - each has trade-offs",
      "TN is always superior in every way",
      "Panel type only affects price, not performance"
    ],
    correct: 1,
    explanation: "LCD panel technologies: TN (Twisted Nematic): (1) Fastest response (1ms), (2) Cheapest, (3) Poor viewing angles (colors shift when off-center), (4) Weak colors, (5) Best for: competitive gaming (esports). IPS (In-Plane Switching): (1) Excellent colors (99% sRGB typical), (2) Wide viewing angles (178°), (3) 1-5ms response (modern), (4) More expensive, (5) Best for: content creation, general use, gaming. VA (Vertical Alignment): (1) Highest contrast (3000:1+, deep blacks), (2) Good colors, (3) Slower response (4-8ms, ghosting in fast motion), (4) Narrow vertical viewing angles, (5) Best for: media consumption, curved displays. OLED (Organic LED): (1) Perfect blacks (per-pixel lighting), (2) Infinite contrast, (3) <0.1ms response, (4) Expensive, (5) Burn-in risk, (6) Best for: premium displays, HDR content. Choosing panel: (1) Competitive gaming - TN or fast IPS, (2) Productivity/design - IPS, (3) Movies/single player - VA or OLED, (4) All-around - IPS. Modern IPS panels offer good gaming performance (1ms, 144Hz+)."
  },
  {
    id: 13,
    question: "A monitor displays correctly at 1080p but shows 'Out of Range' or blank screen when set to 4K. What is the likely issue?",
    options: [
      "The monitor is defective",
      "Cable bandwidth limitation - HDMI 1.4 or older cable cannot support 4K at desired refresh rate; needs HDMI 2.0+ or DisplayPort cable",
      "4K doesn't exist",
      "Windows doesn't support 4K"
    ],
    correct: 1,
    explanation: "Out of range indicates signal exceeds monitor/cable capabilities. Cable bandwidth requirements: (1) 1080p 60Hz - any HDMI/DP, (2) 1440p 144Hz - DP 1.2+, HDMI 2.0, (3) 4K 60Hz - HDMI 2.0+, DP 1.2+, (4) 4K 120Hz - HDMI 2.1, DP 1.4+. Cable types: (1) HDMI Standard - 1080p max (old), (2) HDMI High Speed - 4K 30Hz (HDMI 1.4/2.0), (3) HDMI Ultra High Speed - 4K 120Hz, 8K 60Hz (HDMI 2.1), (4) DisplayPort - versions support different max resolutions/rates. Troubleshooting: (1) Check cable rating - verify certified for needed bandwidth, (2) Try different cable - HDMI 2.0/2.1 or DP 1.4, (3) Reduce refresh rate - try 4K at 30Hz if cable limited, (4) Update GPU drivers, (5) Verify GPU supports 4K output. Out of range also occurs: (1) Custom resolution exceeding monitor capability, (2) Refresh rate too high for cable, (3) Monitor limits exceeded. Always use quality certified cables for high resolutions/refresh rates. Cheap cables often mislabeled."
  },
  {
    id: 14,
    question: "What is HDR (High Dynamic Range) on monitors, and what is required to use it?",
    options: [
      "HDR is just marketing with no real benefits",
      "HDR provides wider color range and brightness levels for better image quality; requires HDR-capable monitor, GPU, content, and proper cable (HDMI 2.0+/DP 1.4+)",
      "HDR only works on TVs, never monitors",
      "HDR reduces image quality"
    ],
    correct: 1,
    explanation: "HDR (High Dynamic Range) expands brightness and color range beyond SDR (Standard Dynamic Range). HDR features: (1) Higher peak brightness (400-1000+ nits vs SDR's 200-300), (2) Deeper blacks (better contrast), (3) Wider color gamut (DCI-P3 vs sRGB), (4) 10-bit color (1.07 billion colors vs 8-bit's 16.7 million). HDR standards: (1) HDR10 - open standard, static metadata, (2) Dolby Vision - dynamic metadata, premium, (3) DisplayHDR - VESA certification (DisplayHDR 400/600/1000 based on brightness). Requirements: (1) HDR monitor - DisplayHDR certified preferred, (2) GPU supporting HDR output, (3) Cable - HDMI 2.0+, DisplayPort 1.4+, (4) HDR content - games, movies (Netflix, YouTube), (5) Windows HDR enabled (Settings → Display → HDR). Limitations: (1) Windows HDR implementation imperfect (desktop looks washed), (2) Enable for gaming/video, disable for desktop work, (3) True HDR needs 600+ nits peak brightness. Fake HDR: some monitors claim HDR with <400 nits (minimal benefit). Look for DisplayHDR 600+ certification."
  },
  {
    id: 15,
    question: "A monitor has both HDMI and DisplayPort inputs. Both are connected to the computer. Which cable provides signal to the monitor?",
    options: [
      "Both simultaneously (dual input mode)",
      "The monitor displays whichever input is currently selected in the monitor's OSD menu (Input/Source selection)",
      "Always HDMI takes priority",
      "Always DisplayPort takes priority"
    ],
    correct: 1,
    explanation: "Monitor input selection: Most monitors require manual input selection from multiple connected sources. Input selection methods: (1) Physical button on monitor (Input/Source), (2) OSD menu navigation, (3) Auto-detect (some monitors switch to active input automatically). Multiple inputs use cases: (1) Two computers sharing one monitor (home + work laptop), (2) Console + PC, (3) Multiple PCs in workstation. Input types typical: (1) HDMI 1, HDMI 2 (sometimes 3+), (2) DisplayPort 1, DisplayPort 2, (3) DVI (legacy), (4) VGA (legacy), (5) USB-C (newer monitors). Auto-switching: (1) Some monitors detect active input and switch automatically, (2) Can be disabled in OSD if unwanted, (3) May switch unexpectedly if multiple devices connected. Picture-by-Picture (PBP): premium feature allowing two inputs displayed simultaneously (split screen). Picture-in-Picture (PIP): main input with smaller second input in corner. For most users: manually select input as needed, disconnect unused inputs to prevent accidental switching."
  }
];