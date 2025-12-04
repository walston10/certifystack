# Lab 2: Laptop Displays and Video - Solution Guide

**Note to Students:** Only review this AFTER completing your own exploration! You'll learn more by discovering things yourself first.

---

## Section 1: Concept Check - Answers

**1. What is the main difference between LCD and LED laptop displays?**

**Answer: b) LED refers to the backlight type, not the display technology**

This is a common point of confusion. Both "LCD" and "LED" displays use liquid crystal technology. The difference is the backlight:
- **LCD (CCFL):** Uses cold cathode fluorescent lamps for backlighting (older technology)
- **LED:** Uses light-emitting diodes for backlighting (current standard)

So "LED display" is really "LED-backlit LCD display." OLED is the only common technology that doesn't use liquid crystals—each pixel produces its own light.

---

**2. What component in older laptops converts DC power to AC for CCFL backlights?**

**Answer: b) Inverter**

CCFL (Cold Cathode Fluorescent Lamp) backlights require high-voltage AC power to operate. Since laptops run on DC power, an inverter board converts DC to AC. Inverters were common failure points in older laptops—symptoms included dim displays or backlights that flickered before dying completely.

Modern LED backlights run on DC power, so they don't need inverters—one reason LED-backlit displays are more reliable.

---

**3. Where are Wi-Fi antennas typically located in a laptop?**

**Answer: b) Around the display bezel**

Wi-Fi antennas are routed around the display bezel (the frame around the screen) because:
- The display lid is typically raised higher than the base, improving signal reception
- The bezel area keeps antennas away from metal components that cause interference
- The plastic bezel doesn't block radio signals like metal would

You'll see thin wires (usually black and white) running through the hinge from the motherboard to the display assembly. This is why opening a display bezel reveals antenna wires.

---

**4. What does a digitizer do in a touchscreen laptop?**

**Answer: b) Detects touch input and converts it to coordinates**

The digitizer is a transparent layer over or integrated with the display that detects touch input. It converts the physical location of your finger (or stylus) into X/Y coordinates the operating system can use.

Types of digitizers:
- **Capacitive:** Detects electrical conductivity of your finger (most common)
- **Active pen:** Requires powered stylus for precise input (Wacom, Surface Pen)
- **Resistive:** Pressure-based, older technology (rare in laptops)

The digitizer is separate from the LCD panel—this is why touchscreen replacements are often more expensive (you're replacing both components).

---

**5. Which display cable type is most common in modern thin laptops?**

**Answer: c) eDP (Embedded DisplayPort)**

eDP (Embedded DisplayPort) is the current standard for internal laptop display connections because:
- Thinner cable than LVDS
- Higher bandwidth (supports higher resolutions and refresh rates)
- Lower power consumption
- Single connector design

LVDS was the previous standard and is still found in laptops from before ~2015. If you're working on a modern thin laptop, it's almost certainly using eDP.

---

## Section 2: Activity Solutions

### Activity A: Display Specifications - Interpretation Guide

**Common resolutions and what they mean:**

| Resolution | Marketing Name | Aspect Ratio | Notes |
|------------|----------------|--------------|-------|
| 1366×768 | HD | 16:9 | Budget laptops, being phased out |
| 1920×1080 | Full HD / FHD | 16:9 | Most common, good balance |
| 2560×1440 | QHD / 2K | 16:9 | High-end, sharper text |
| 3840×2160 | 4K / UHD | 16:9 | Highest detail, heavy on battery |
| 1920×1200 | WUXGA | 16:10 | Extra vertical space |
| 2560×1600 | WQXGA | 16:10 | MacBook Pro, Dell XPS |
| 2880×1800 | Retina | 16:10 | MacBook Pro |
| 3000×2000 | PixelSense | 3:2 | Surface devices |

**Scaling explained:**

| Scale | Best For | Trade-off |
|-------|----------|-----------|
| 100% | Maximum screen real estate | Text/icons may be small on high-res displays |
| 125% | Balanced | Most common for 1080p at 14-15" |
| 150% | Comfortable reading | Less screen real estate |
| 200% | High-DPI displays (4K) | Required for 4K on smaller screens |

**Why scaling matters:** A 4K display at 100% scale on a 15" laptop would have tiny, unreadable text. Windows automatically recommends a scale based on display size and resolution.

---

### Activity B: Display Technology - Reference Guide

**Panel types comparison:**

| Panel Type | Viewing Angles | Color Accuracy | Response Time | Best For |
|------------|----------------|----------------|---------------|----------|
| **TN** | Poor (shift off-angle) | Fair | Fast (1-5ms) | Gaming, budget |
| **IPS** | Excellent (178°) | Excellent | Moderate (4-8ms) | Professionals, general use |
| **VA** | Good | Good (high contrast) | Slow (8-20ms) | Movies, dark room |
| **OLED** | Perfect | Excellent | Instant | Premium, content creation |

**Backlight types:**

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| **CCFL** | Fluorescent tubes | N/A (obsolete) | Thick, power hungry, inverter fails |
| **LED** | Edge-lit LEDs | Thin, efficient | Backlight bleed on edges |
| **Direct LED** | LEDs behind panel | More even lighting | Thicker than edge-lit |
| **Mini-LED** | Thousands of small LEDs | Local dimming, better HDR | Expensive |
| **OLED** | Self-emitting pixels | Perfect blacks, thin | Burn-in risk, expensive |

**Brightness guide:**

| Nits | Use Case |
|------|----------|
| 200-250 | Indoor only, dim environments |
| 300-350 | Standard indoor use |
| 400-500 | Some outdoor visibility |
| 500+ | Good outdoor visibility |
| 1000+ | HDR content, direct sunlight |

---

### Activity C: Display Settings - Key Features

**Night light explained:**
- Reduces blue light emission in the evening
- Helps maintain natural sleep cycles
- Recommended: Schedule to turn on at sunset
- Strength: Start at 50% and adjust to preference

**HDR (High Dynamic Range):**
- Requires HDR-capable display AND content
- Windows HDR settings must be enabled
- Not all "HDR400" displays show significant improvement
- True HDR requires HDR600 or HDR1000 certification

**Hardware-accelerated GPU scheduling:**
- Lets the GPU manage its own memory
- Can improve performance in games/video
- May cause issues with older applications
- Safe to enable on modern systems (Windows 10 2004+)

**Variable refresh rate (VRR):**
- Syncs display refresh with GPU output
- Reduces screen tearing in games
- Requires compatible display and GPU
- Technologies: G-Sync (Nvidia), FreeSync (AMD), Adaptive Sync (general)

---

### Activity D: External Display - Reference

**Windows + P options:**

| Mode | Use Case | What Happens |
|------|----------|--------------|
| PC screen only | Privacy, presentations | External display off |
| Duplicate | Presentations, mirroring | Same image on both |
| Extend | Productivity, multitasking | Desktop spans both displays |
| Second screen only | Using laptop as desktop | Laptop display off |

**Maximum external display support factors:**
- GPU capability (integrated vs dedicated)
- Port bandwidth (HDMI version, DisplayPort version)
- Thunderbolt can daisy-chain multiple displays
- USB-C DisplayPort Alt Mode depends on USB version

**Common external display issues:**

| Problem | Solution |
|---------|----------|
| No signal detected | Check cable, try different port, Windows + P |
| Wrong resolution | Display settings → select correct resolution |
| Display not detected | Update GPU drivers, check cable |
| Flickering | Try different refresh rate, check cable quality |
| Color mismatch | Calibrate both displays, check color profiles |

---

### Activity E: Webcam and Microphone - Reference

**Webcam specifications explained:**

| Resolution | Quality | Notes |
|------------|---------|-------|
| 720p (HD) | Basic | Still common in budget laptops |
| 1080p (FHD) | Good | Standard for video calls |
| 1440p+ | Excellent | High-end, content creation |

**Webcam quality factors beyond resolution:**
- Sensor size (larger = better low light)
- Lens quality
- Auto-focus capability
- HDR / low-light processing
- Frame rate (30fps vs 60fps)

**Windows privacy settings:**

Camera and microphone access are controlled per-app because:
- Security: Prevents unauthorized recording
- Privacy: User controls what apps can see/hear
- Malware prevention: Blocks malicious access

If webcam/mic doesn't work in an app, check:
1. Privacy settings (is app allowed?)
2. Device settings (is device enabled?)
3. App settings (correct device selected?)
4. Drivers (up to date?)

---

### Activity F: Display Issues - Complete Reference

| Issue | Symptoms | Possible Causes | Solution |
|-------|----------|-----------------|----------|
| **Dead pixels** | Permanently black dots | Manufacturing defect, physical damage | Panel replacement |
| **Stuck pixels** | Permanently lit one color | Manufacturing defect | Pixel-fixing software, panel replacement |
| **Hot pixels** | Permanently white | Transistor stuck on | Panel replacement |
| **Backlight bleed** | Light visible on black screen, especially edges/corners | LED placement, panel pressure | Loosen screws slightly, or accept/replace |
| **Screen flickering** | Display flashes on/off | Failing backlight, loose cable, driver issue | Check cable, update drivers, replace backlight |
| **Dim display** | Barely visible image | Backlight failure, inverter (CCFL), brightness setting | Check settings, replace backlight/inverter |
| **No display** | Completely black | Cable disconnected, panel failure, GPU failure | Shine flashlight to check for faint image |
| **Cracked screen** | Visible cracks, bleeding colors | Physical damage | Panel replacement only option |
| **Discoloration** | Tint across screen | Cable issue, panel failure, color profile | Check cable, reset color profile |
| **Image retention** | Ghost image remains | OLED/plasma burn-in, or temporary IPS glow | Varies by panel type |
| **Lines on screen** | Horizontal or vertical lines | Failing panel, loose cable | Check cable first, then replace panel |

**Flashlight test for backlight failure:**

If a laptop appears to have no display:
1. Shine a bright flashlight at the screen
2. Look closely for a faint image
3. If you see an image: Backlight has failed, panel is working
4. If no image at all: Panel failure or GPU/cable issue

---

## Tier 2 Solutions

### Activity G: Display Bezel Removal - Guidance

**Common bezel types by manufacturer:**

| Manufacturer | Typical Design |
|--------------|----------------|
| Dell | Screws under rubber covers + clips |
| HP | Often clipless (pry only) or adhesive |
| Lenovo | Screws + clips, well documented |
| ASUS | Varies widely, often clips only |
| Apple | Adhesive (not recommended to open) |

**Screw location patterns:**

Most bezels have screws in these locations:
- Bottom corners (2 screws)
- Bottom center (1-2 screws, less common)
- Hidden under manufacturer logo or rubber bumpers

**Bezel removal tips:**

1. **Start at the bottom** - Easiest place to insert spudger
2. **Work in one direction** - Don't jump around
3. **Listen for clicks** - Clips releasing
4. **Gentle, consistent pressure** - Never force
5. **Watch for cables** - Webcam and mic cables may be attached to bezel

**If the bezel won't budge:**
- There's almost certainly a hidden screw
- Check under any stickers or rubber pieces
- Some models have screws under the hinge covers
- Consult the service manual for your specific model

---

### Activity H: Display Assembly Components - Reference

**What you should find:**

| Component | Description | Exam Importance |
|-----------|-------------|-----------------|
| **LCD panel** | The actual display, held by brackets | Know panel types (IPS, TN, OLED) |
| **Display cable** | Carries video signal from motherboard | Know eDP vs LVDS |
| **Webcam** | Small module at top center | Know location and cable |
| **Microphone** | Tiny hole(s) near webcam | Often dual mics for noise cancellation |
| **Antennas** | Wires routed around bezel | Know why they're in display (signal) |
| **Inverter** | Small board at bottom (CCFL only) | Know it converts DC to AC |
| **Hinges** | Metal brackets connecting lid to base | Know they contain cable routing |

**Display cable connectors:**

| Type | Characteristics |
|------|-----------------|
| **eDP** | Small, single connector, 30-40 pins, locks with tape or clip |
| **LVDS** | Wider connector, may have separate backlight connector |
| **Integrated** | Part of larger flex cable assembly |

**Finding panel information:**

The back of the LCD panel typically has a label with:
- Manufacturer (LG, Samsung, AU Optronics, BOE, Innolux)
- Model number (e.g., LP156WF6-SPB1)
- Resolution
- Size

Search this model number to find:
- Compatible replacements
- Exact specifications
- Approximate pricing

---

### Activity I: Wi-Fi Antenna - Reference

**Why antennas are in the display:**

1. **Height:** When the lid is open, antennas are elevated above the desk/table, improving line-of-sight to router

2. **Material:** The bezel is plastic (RF-transparent), while the laptop base often has metal components that would block signals

3. **Distance from interference:** CPU, GPU, and other electronics in the base generate electromagnetic noise that could interfere with Wi-Fi reception

4. **Space:** The bezel area provides room to route antennas without affecting other components

**Antenna configurations:**

| Configuration | Purpose |
|---------------|---------|
| 2 antennas (2x2 MIMO) | Standard, main + auxiliary |
| 3 antennas | Enhanced performance or separate Bluetooth |
| Diversity antennas | Multiple positions for better signal |

**Antenna wire colors (common convention):**
- **Black:** Main antenna
- **White/Gray:** Auxiliary antenna
- **May vary by manufacturer**

**Antenna routing:**

Antennas typically:
1. Connect to Wi-Fi card in laptop base
2. Route through the hinge (protected by plastic cover)
3. Run along the sides or top of the display bezel
4. Terminate in the upper corners or top edge (optimal position)

---

### Activity J: Display Cable Types - Complete Reference

**eDP (Embedded DisplayPort):**

| Characteristic | Detail |
|----------------|--------|
| Introduction | ~2008, common since ~2012 |
| Bandwidth | Up to 32.4 Gbps (eDP 1.4) |
| Max resolution | 8K @ 60Hz capable |
| Connector | Small, typically 30-40 pins |
| Cable width | Thin (few millimeters) |
| Power delivery | Can carry backlight power |

**LVDS (Low-Voltage Differential Signaling):**

| Characteristic | Detail |
|----------------|--------|
| Introduction | ~1990s, laptop use ~2000s |
| Bandwidth | Limited (older displays only) |
| Max resolution | ~1920x1200 practical limit |
| Connector | Wider, often 20-40 pins |
| Cable width | Wider than eDP |
| Backlight | Often separate backlight cable |

**How to identify:**

| Feature | eDP | LVDS |
|---------|-----|------|
| Laptop age | 2012+ | Pre-2015 |
| Cable thickness | Thin | Thicker |
| Separate backlight cable | Usually no | Often yes |
| Connector size | Small | Larger |

---

### Activity K: Reassembly Verification - Troubleshooting

**Post-reassembly issues and solutions:**

| Symptom | Most Likely Cause | Solution |
|---------|-------------------|----------|
| No display at all | Display cable disconnected | Reopen, reseat cable at both ends |
| Display works but dim | Backlight cable loose (LVDS) or damaged | Check backlight connection |
| Vertical/horizontal lines | Cable not fully seated, or damaged | Reseat cable carefully |
| Flickering | Cable pinched in hinge | Reroute cable, check for damage |
| Only half screen works | Cable connector partially inserted | Fully seat connector |
| Image but wrong colors | Cable damaged or wrong type | Inspect cable for damage |
| No webcam | Webcam cable disconnected | Reconnect webcam ribbon |
| Webcam but no mic | Mic is separate cable in some models | Check mic connection |
| Weak Wi-Fi signal | Antenna wires not connected | Reconnect at Wi-Fi card |
| Wi-Fi doesn't work at all | Antennas pinched or cut | Inspect antenna wires |
| Bezel doesn't sit flush | Clip not engaged or cable in way | Reroute cables, press firmly on clips |

**The flashlight test:**

If display appears dead after reassembly:
1. Power on the laptop
2. Shine flashlight directly at screen
3. Look for faint image of Windows login or BIOS

**If you see a faint image:**
- Backlight circuit issue
- Check backlight cable connection
- For eDP: single cable carries everything, reseat it
- For LVDS: check separate backlight cable

**If you see nothing:**
- Video signal not reaching panel
- Check display cable at motherboard end
- Check display cable at panel end
- Verify cable isn't damaged

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Dim Display at Full Brightness

**Possible causes:**
- **Backlight failure** (LED dying, inverter failing for CCFL)
- **Brightness setting** in BIOS or power management
- **Ambient light sensor** adjusting incorrectly
- **Power plan** limiting brightness on battery
- **Failing display cable** (partial connection)
- **GPU power management** reducing brightness

**Troubleshooting order:**
1. Check brightness hotkey (Fn + brightness key)
2. Check Windows brightness slider (100%?)
3. Check power plan settings (plugged in vs battery)
4. Disable adaptive brightness (ambient light sensor)
5. Check BIOS for brightness setting
6. Connect external display (if external works, internal display issue)
7. Flashlight test (backlight vs panel failure)

**Older laptop consideration:**
If it's a laptop from before ~2010 with CCFL backlight, the inverter is a common failure point. Symptoms: gradual dimming over weeks/months, then sudden failure. Replacement inverters are cheap (~$10-20) but require opening the display assembly.

---

### Scenario 2: Eye Strain

**Display settings to adjust:**
- **Night light:** Enable and schedule for evening hours
- **Brightness:** Match ambient room lighting (too bright causes strain)
- **Blue light:** Reduce via Night light or third-party apps
- **Contrast:** Ensure text/background contrast is sufficient
- **Refresh rate:** Higher refresh rate (if available) reduces flickering
- **Resolution/scaling:** Ensure text is large enough to read comfortably

**Night light (blue light filter):**
- Blue light suppresses melatonin production
- Reducing blue light in evening helps sleep
- Doesn't eliminate eye strain from screen use
- The 20-20-20 rule helps more: Every 20 minutes, look at something 20 feet away for 20 seconds

**Best panel type for long use:**
- **IPS:** Most color-accurate, widest viewing angles, less strain from off-angle viewing
- **OLED:** Perfect blacks reduce overall light emission, but potential for burn-in
- **Avoid TN:** Color shift when not viewing straight-on causes eye fatigue

**Other factors:**
- Matte finish reduces reflections (less strain than glossy)
- Higher resolution = sharper text = less squinting
- Larger screen or lower scaling = larger text

---

### Scenario 3: Graphic Design Laptop

**Critical display specifications:**

| Specification | Minimum | Ideal |
|---------------|---------|-------|
| Panel type | IPS | IPS or OLED |
| Resolution | 1920x1080 | 2560x1440 or higher |
| Color gamut (sRGB) | 95%+ | 100% |
| Color gamut (DCI-P3) | N/A | 90%+ |
| Color accuracy (Delta E) | <3 | <2 |
| Brightness | 300 nits | 400+ nits |
| Bit depth | 8-bit | 10-bit |

**Recommended panel type: IPS**
- Best color accuracy out of the box
- Wide viewing angles (colors don't shift)
- Good for client presentations (off-angle viewing)

**OLED considerations:**
- Perfect blacks, infinite contrast
- Excellent for video/photo work
- Risk of burn-in with static elements (Photoshop toolbars)
- More expensive

**Color gamut explained:**
- **sRGB:** Web standard, most photos/content
- **Adobe RGB:** Print workflow
- **DCI-P3:** Video/cinema standard, increasingly used
- **Display P3:** Apple's version of DCI-P3

For graphic design: Minimum 100% sRGB. If doing video work or high-end print: Look for wide gamut (DCI-P3, Adobe RGB).

---

### Scenario 4: Display with Color Tint

**Possible causes:**

| Cause | Type | Symptoms |
|-------|------|----------|
| Cable issue | Hardware | Develops over time, may flicker |
| Color profile | Software | Constant, affects all content |
| Panel failure | Hardware | May worsen over time |
| GPU issue | Hardware | May affect external display too |
| Night light | Software | Orange/yellow tint, evening only |

**Troubleshooting:**

1. **Check Night light** - Is it enabled? Turn it off.

2. **Reset color profile:**
   - Display settings → Advanced display → Display adapter properties
   - Color Management → Reset to default

3. **Test with external display:**
   - Same tint? GPU or software issue
   - No tint? Internal display or cable issue

4. **Check display cable:**
   - Partially disconnected cables can cause color issues
   - Damaged cables may affect certain color channels

5. **Update GPU drivers:**
   - Outdated drivers can cause color issues

6. **BIOS reset:**
   - Some BIOS have color/gamma settings

**If hardware:**
- Cable replacement (easiest fix to try)
- Panel replacement (if cable doesn't fix it)
- GPU issue (rare, would affect external too)

---

## Self-Assessment Questions

1. **Can I explain the difference between LCD, LED, and OLED displays?**

2. **Do I know where Wi-Fi antennas are located and why?**

3. **Can I identify eDP vs LVDS display cables?**

4. **Do I know what an inverter does and which displays need one?**

5. **Can I troubleshoot common display issues (dim, flickering, no display)?**

6. **Do I understand the function of a digitizer in a touchscreen?**

7. **(Tier 2) Can I safely remove a display bezel without damage?**

8. **(Tier 2) Can I identify all components in a display assembly?**

9. **(Tier 2) Do I understand how to troubleshoot post-reassembly display issues?**

---

## Key Takeaways

**For the A+ Exam:**

1. **LCD vs LED:** LED refers to backlight type, not display technology. Both use liquid crystals.

2. **CCFL vs LED backlight:** CCFL requires inverter (DC→AC), LED doesn't. CCFL is older, LED is current standard.

3. **Inverter location:** Bottom of display assembly in older laptops. Converts DC to AC for CCFL.

4. **Wi-Fi antennas:** Located in display bezel for better reception (height + plastic doesn't block signal).

5. **Digitizer:** Detects touch and converts to coordinates. Separate from LCD panel.

6. **eDP vs LVDS:** eDP is modern (thin cable, high bandwidth), LVDS is legacy (wider cable).

7. **Display cable routing:** Through hinge area, vulnerable to wear from opening/closing.

8. **Webcam location:** Typically top center of display bezel, may have privacy shutter.

**For Real-World Skills:**

- Always check simple things first (brightness settings, Night light)
- The flashlight test distinguishes backlight failure from panel failure
- Service manuals show exact bezel removal procedures
- Replacement panels are available by searching the panel model number
- Wi-Fi issues after display work = check antenna connections

---

**Congratulations on completing Lab 2!**

You now understand laptop display technology, can troubleshoot common display issues, and (if Tier 2) have hands-on experience with display assembly components.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 2: Laptop Displays and Video - Solution Guide*