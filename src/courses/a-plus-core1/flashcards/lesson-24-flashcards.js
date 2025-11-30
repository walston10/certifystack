export const lesson24Flashcards = [
  {
    id: 1,
    front: "What is the difference between LCD and LED displays?",
    back: "LCD (Liquid Crystal Display): Uses liquid crystals but requires backlight. LED: LCD panel with LED backlighting (not CCFL). All 'LED monitors' are actually LED-backlit LCDs. LED thinner, more energy-efficient, brighter, better contrast than CCFL. Marketing term can be confusing."
  },
  {
    id: 2,
    front: "What is OLED and what are its advantages?",
    back: "Organic Light Emitting Diode. Each pixel emits own light, no backlight needed. Advantages: Perfect blacks (pixels turn completely off), infinite contrast ratio, vibrant colors, faster response time, thinner displays. Disadvantages: Expensive, potential burn-in, lower peak brightness than LED."
  },
  {
    id: 3,
    front: "What are plasma displays and why are they obsolete?",
    back: "Gas-filled cells emit light when electrically charged. Advantages: Great colors, deep blacks, wide viewing angles. Disadvantages: Heavy, bulky, power hungry, burn-in risk, heat generation. Discontinued ~2014. Replaced by LED/OLED. Only in older installations now."
  },
  {
    id: 4,
    front: "What are the common display resolutions?",
    back: "HD (1280x720): 720p. Full HD (1920x1080): 1080p, most common. QHD/2K (2560x1440): 1440p, sweet spot for gaming. 4K UHD (3840x2160): 2160p, high-end. 8K (7680x4320): Extreme, rare. Higher resolution = sharper but requires more GPU power."
  },
  {
    id: 5,
    front: "What do aspect ratios mean?",
    back: "Ratio of width to height. 16:9: Widescreen standard (most monitors/TVs). 21:9: Ultrawide (productivity, immersive gaming). 32:9: Super ultrawide. 16:10: Slightly taller (some productivity monitors). 4:3: Legacy square monitors (old CRTs). 1:1: Square (specialized use)."
  },
  {
    id: 6,
    front: "What is display refresh rate and what are common values?",
    back: "How many times per second display updates image, measured in Hz. 60Hz: Standard, smooth for general use. 75-90Hz: Slight improvement. 120-144Hz: Gaming sweet spot, very smooth. 165-240Hz: Competitive gaming. 360Hz: Extreme esports. Higher = smoother motion, less blur."
  },
  {
    id: 7,
    front: "What is response time and why does it matter?",
    back: "Time for pixel to change color, measured in milliseconds (ms). Lower = better. 1ms (GtG): Gaming monitors, minimal ghosting. 4-5ms: Good for gaming. 8ms+: Office monitors, ghosting in fast motion. Matters for: gaming, fast video. GtG (Gray-to-Gray) most common measurement."
  },
  {
    id: 8,
    front: "What is brightness measured in and what are typical values?",
    back: "Measured in nits (cd/m²). 250-300 nits: Basic office monitors. 400-500 nits: Good general use, HDR minimum. 600-1000+ nits: Bright rooms, HDR content. Peak brightness for HDR important. Too bright in dark room causes eye strain. Adjustable brightness essential."
  },
  {
    id: 9,
    front: "What is contrast ratio?",
    back: "Ratio between brightest white and darkest black. Static: 1000:1 typical LCD, 3000:1 good VA panel. Dynamic: Marketing number (ignore). Infinite:1: OLED (true black). Higher = better image depth. IPS: ~1000:1. VA: ~3000:1. TN: ~1000:1. OLED best contrast."
  },
  {
    id: 10,
    front: "What is a TN (Twisted Nematic) panel?",
    back: "Oldest LCD technology. Advantages: Fast response time (1ms), cheap, high refresh rates (360Hz). Disadvantages: Poor viewing angles, weak color accuracy, worst color reproduction. Use for: competitive gaming (speed over quality), budget monitors. Being phased out."
  },
  {
    id: 11,
    front: "What is an IPS (In-Plane Switching) panel?",
    back: "Premium LCD technology. Advantages: Excellent color accuracy, wide viewing angles (178°), good colors. Disadvantages: Slower response (4-5ms typical), more expensive, lower contrast than VA, IPS glow. Use for: color work, productivity, general gaming. Most popular panel type."
  },
  {
    id: 12,
    front: "What is a VA (Vertical Alignment) panel?",
    back: "Middle-ground LCD technology. Advantages: Best contrast (~3000:1), deep blacks, good colors, affordable. Disadvantages: Slower response time, black smearing in motion, narrower viewing angles than IPS. Use for: movies, dark room gaming, budget HDR. Good compromise."
  },
  {
    id: 13,
    front: "What are the differences between HDMI versions?",
    back: "HDMI 1.4: 4K@30Hz, 1080p@120Hz. HDMI 2.0: 4K@60Hz, 1080p@240Hz, HDR. HDMI 2.1: 4K@120Hz, 8K@60Hz, VRR, eARC, 48 Gbps. Cables matter for 2.1. All backward compatible. Gaming at 4K 120Hz requires 2.1. Audio + video in one cable."
  },
  {
    id: 14,
    front: "What are the differences between DisplayPort versions?",
    back: "DP 1.2: 4K@60Hz, 1080p@240Hz. DP 1.4: 4K@120Hz, 8K@60Hz (DSC), HDR. DP 2.0: 4K@240Hz, 8K@120Hz, 16K support, 80 Gbps. Best for high refresh gaming. Supports daisy-chaining monitors. Better than HDMI for PC use. Mini DisplayPort on some laptops."
  },
  {
    id: 15,
    front: "What is DVI and what types exist?",
    back: "Digital Visual Interface. Legacy digital connection. DVI-D: Digital only (single/dual link). DVI-I: Digital + analog. DVI-A: Analog only (rare). Single-link: 1920x1200@60Hz. Dual-link: 2560x1600@60Hz. No audio. Being phased out. Adapters to HDMI/VGA available."
  },
  {
    id: 16,
    front: "What is VGA and is it still used?",
    back: "Video Graphics Array. Analog connection (blue 15-pin D-sub). Maximum practical: 1920x1080@60Hz (quality degrades). Obsolete technology. Removed from modern GPUs. Still on some projectors/legacy equipment. Prone to interference, image degradation. Use digital (HDMI/DP) whenever possible."
  },
  {
    id: 17,
    front: "What display adapters and converters are common?",
    back: "HDMI to DisplayPort: Requires active adapter. DisplayPort to HDMI: Passive adapter works. DVI to HDMI: Passive (no audio). VGA to HDMI: Active converter needed (analog to digital). USB-C to HDMI/DP: DisplayPort Alt Mode. Thunderbolt to anything: Versatile."
  },
  {
    id: 18,
    front: "What is the difference between active and passive display adapters?",
    back: "Passive: Simple pin rewiring, no power needed, both signals must be compatible (DP to HDMI, DVI to HDMI). Active: Converts signal (chip inside), may need power, required for incompatible signals (HDMI to DP, VGA to HDMI). Check compatibility before buying."
  },
  {
    id: 19,
    front: "What is HDR (High Dynamic Range)?",
    back: "Wider range of brightness and colors. Standards: HDR10 (open), Dolby Vision (proprietary). Requires: HDR monitor (400+ nits), HDR content, compatible GPU. Looks washed out if displayed on SDR monitor. Gaming and movies benefit most. True HDR needs 600+ nits."
  },
  {
    id: 20,
    front: "What is adaptive sync (VRR)?",
    back: "Variable Refresh Rate - syncs monitor refresh to GPU frame rate. FreeSync: AMD standard, open, works on HDMI/DP, most monitors. G-Sync: NVIDIA proprietary, requires module (expensive) or Compatible (free). Eliminates screen tearing without V-Sync lag. Essential for smooth gaming."
  },
  {
    id: 21,
    front: "What are projector types?",
    back: "DLP (Digital Light Processing): Uses mirrors, sharp image, rainbow effect possible, better contrast. LCD: Three LCD panels (RGB), good color, less contrast. LCoS: High-end, expensive, best image quality. LED vs Lamp: LED longer life/instant on, lamp brighter. Lumens rating important."
  },
  {
    id: 22,
    front: "What is screen tearing and how is it prevented?",
    back: "Visual artifact when GPU renders faster than monitor refresh. Looks like horizontal line across screen. Solutions: V-Sync (locks FPS to refresh, input lag), Adaptive Sync (FreeSync/G-Sync - variable refresh), Cap frame rate. Adaptive sync best solution."
  },
  {
    id: 23,
    front: "What is monitor ghosting?",
    back: "Trail of previous image following moving objects. Caused by slow pixel response time. Common on: VA panels, cheap monitors. Worse in dark scenes (black smearing). Solutions: Faster response time monitor (1-4ms), overdrive setting (can introduce inverse ghosting). Gaming monitors minimize ghosting."
  },
  {
    id: 24,
    front: "What is pixel density (PPI)?",
    back: "Pixels Per Inch. Sharpness of display. Calculation: resolution ÷ diagonal size. 24\" 1080p: ~92 PPI. 27\" 1440p: ~109 PPI. 27\" 4K: ~163 PPI. Higher = sharper text/images. 90-110 PPI comfortable for most. 4K at 27\" very sharp. Scaling needed at high PPI."
  },
  {
    id: 25,
    front: "What is backlight bleeding?",
    back: "Light leaking from edges/corners of LCD display. Visible as bright spots on dark backgrounds. Common in LED-backlit LCDs. IPS glow: Similar, from IPS panels at angles. VA/TN less affected. Manufacturing variance - some units worse. Can't fix, only replace. OLED doesn't have this issue."
  },
  {
    id: 26,
    front: "What is a curved monitor and what are the benefits?",
    back: "Display curved toward viewer. Curvature rating: 1800R (most curved) to 3800R (subtle). Benefits: Immersive experience, uniform viewing distance, reduced distortion on ultrawide. Best for: 27\"+ ultrawides, single user directly in front. Drawbacks: Worse viewing angles for multiple viewers."
  },
  {
    id: 27,
    front: "What monitor settings should be calibrated?",
    back: "Brightness: Comfortable for environment, not max. Contrast: Maximum without washing out. Color temperature: 6500K (D65) for accurate colors. Gamma: 2.2 standard. RGB levels: Equal unless calibrating. Sharpness: 0 or minimal (oversharpening bad). Use calibration tool for accuracy (ColorMunki, SpyderX)."
  },
  {
    id: 28,
    front: "What is a dead pixel vs stuck pixel?",
    back: "Dead pixel: Completely black, no light, transistor failed. Stuck pixel: Shows wrong color (red/green/blue), transistor stuck on. Stuck pixels sometimes fixable (pixel-unsticking software, gentle massage). Dead pixels permanent. Manufacturers have policies (5-10 acceptable). Check warranty for pixel policy."
  },
  {
    id: 29,
    front: "What causes monitor flickering?",
    back: "Loose cable connection. Faulty cable. Wrong refresh rate. Incompatible resolution. GPU driver issue. Adaptive sync compatibility. Cheap PSU voltage fluctuation. Solutions: Reseat cables, try different cable/port, update drivers, disable adaptive sync, test different refresh rate/resolution."
  },
  {
    id: 30,
    front: "What is monitor ergonomics and why does it matter?",
    back: "Proper monitor positioning for comfort and health. Height: Top of screen at eye level. Distance: Arm's length (20-40 inches). Angle: Slight tilt (10-20° back). Reduce glare: Position away from windows. Monitor stands: Height/tilt/swivel/pivot adjustments. VESA mount for flexibility. Prevents neck/eye strain."
  }
];