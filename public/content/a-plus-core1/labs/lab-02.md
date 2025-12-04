# Lab 2: Laptop Displays and Video

**Tier:** 1 (Universal) + 2 (Bonus)
**Time:** 25-30 minutes
**Exam Objectives:** 1.1 - Laptop displays

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand laptop display concepts:

1. **What is the main difference between LCD and LED laptop displays?**
   - a) LED displays use different liquid crystals
   - b) LED refers to the backlight type, not the display technology
   - c) LCD displays are always lower resolution
   - d) LED displays don't require backlighting

2. **What component in older laptops converts DC power to AC for CCFL backlights?**
   - a) Transformer
   - b) Inverter
   - c) Converter
   - d) Rectifier

3. **Where are Wi-Fi antennas typically located in a laptop?**
   - a) Inside the base near the keyboard
   - b) Around the display bezel
   - c) Inside the battery compartment
   - d) Behind the touchpad

4. **What does a digitizer do in a touchscreen laptop?**
   - a) Converts analog video to digital
   - b) Detects touch input and converts it to coordinates
   - c) Improves display resolution
   - d) Controls screen brightness

5. **Which display cable type is most common in modern thin laptops?**
   - a) VGA ribbon cable
   - b) LVDS (Low-Voltage Differential Signaling)
   - c) eDP (Embedded DisplayPort)
   - d) HDMI internal cable

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Safe for your daily laptop** - These activities use Windows settings, built-in tools, and visual inspection only.

---

#### Activity A: Identify Your Display Specifications

**Goal:** Document your laptop's display type and capabilities.

**Method 1: Windows Settings**

1. Right-click desktop → **Display settings**
2. Document:

| Setting | Your Laptop |
|---------|-------------|
| Display resolution | |
| Recommended resolution | |
| Scale (percentage) | |
| Display orientation | |
| Multiple displays detected? | |

3. Click **Advanced display settings** and document:

| Setting | Your Laptop |
|---------|-------------|
| Refresh rate | |
| Bit depth | |
| Color format | |
| Active signal resolution | |
| Desktop resolution | |

---

**Method 2: System Information**

1. Press `Windows + R`, type `msinfo32`, press Enter
2. Navigate to **Components → Display**
3. Document:

| Field | Your Laptop |
|-------|-------------|
| Adapter Description | |
| Resolution | |
| Bits/Pixel | |
| Adapter RAM | |

---

**Method 3: Physical Inspection**

Examine your display and document:

| Feature | Your Laptop |
|---------|-------------|
| Estimated screen size (diagonal) | _____ inches |
| Aspect ratio (16:9, 16:10, 3:2?) | |
| Glossy or matte finish? | |
| Touchscreen? | [ ] Yes [ ] No |
| Visible bezels (thick or thin)? | |
| Webcam location | [ ] Top [ ] Bottom [ ] None |
| Webcam privacy shutter? | [ ] Yes [ ] No |

---

#### Activity B: Display Technology Research

**Goal:** Determine exactly what panel technology your laptop uses.

**Step 1: Find your laptop model** (from Lab 1)
- Manufacturer: _____________
- Model: _____________

**Step 2: Search for display specifications**

Search "[Manufacturer] [Model] display specifications" or check the official specs page.

Document:

| Specification | Your Laptop |
|---------------|-------------|
| Panel type (IPS, TN, VA, OLED?) | |
| Backlight type (LED, OLED, mini-LED?) | |
| Resolution (1920×1080, 2560×1440, etc.) | |
| Refresh rate (60Hz, 120Hz, 144Hz?) | |
| Brightness (nits) | |
| Color gamut (sRGB %, DCI-P3 %) | |
| HDR support? | |
| Touch/digitizer? | |

**Step 3: Understand what you found**

Based on your research, answer:

1. **Is your display IPS, TN, VA, or OLED?**
   - Answer: _____________
   - What does this mean for viewing angles? _____________

2. **What is your display's brightness in nits?**
   - Answer: _____________
   - Is this good for outdoor use? (400+ nits recommended) _____________

3. **Does your laptop have HDR capability?**
   - Answer: _____________
   - If yes, is it HDR400, HDR600, or HDR1000? _____________

---

#### Activity C: Display Settings Exploration

**Goal:** Explore all display-related settings in Windows.

**Windows Display Settings:**

1. Right-click desktop → **Display settings**

2. **Brightness and color** - Document current settings:
   - Brightness level: _____%
   - Night light enabled? [ ] Yes [ ] No
   - Night light strength (if enabled): _____%

3. **Scale and layout:**
   - Current scale: _____%
   - Change scale to 125% → What happens to icons and text?
   - Change scale to 100% → What happens?
   - Return to recommended setting

4. **Multiple displays:**
   - What options appear when no external display is connected?
   - [ ] Duplicate these displays
   - [ ] Extend these displays
   - [ ] Show only on 1
   - [ ] Show only on 2

5. **Graphics settings** (scroll down):
   - Hardware-accelerated GPU scheduling: [ ] On [ ] Off [ ] Not available
   - Variable refresh rate: [ ] On [ ] Off [ ] Not available

---

**Advanced Color Settings:**

1. Search Windows for "Color Management"
2. Select your display and click **Advanced** tab
3. Document:
   - Device profile: _____________
   - Display calibration available? [ ] Yes [ ] No

4. Try running **Calibrate display** (if available)
   - What does it ask you to adjust? _____________

---

#### Activity D: External Display Connection Test

**Goal:** Understand how your laptop handles external displays.

**What ports does your laptop have for video output?** (from Lab 1)
- [ ] HDMI
- [ ] Mini HDMI
- [ ] DisplayPort
- [ ] Mini DisplayPort
- [ ] USB-C (with video support)
- [ ] Thunderbolt
- [ ] VGA (older laptops)
- [ ] None (USB-C adapter required)

**If you have access to an external monitor or TV:**

1. Connect your laptop to the external display
2. Press `Windows + P` to open projection options
3. Test each mode and describe what happens:

| Mode | What Happens |
|------|--------------|
| PC screen only | |
| Duplicate | |
| Extend | |
| Second screen only | |

4. In **Display settings**, can you:
   - [ ] Rearrange display positions (drag and drop)
   - [ ] Set different resolutions per display
   - [ ] Set different refresh rates per display
   - [ ] Choose which display is "main"

**If you don't have an external display:**

1. Press `Windows + P` - what options appear?
2. Research your laptop's maximum external display support:
   - Maximum external resolution supported: _____________
   - Maximum refresh rate supported: _____________
   - How many external displays supported: _____________

---

#### Activity E: Webcam and Microphone Test

**Goal:** Verify integrated camera and microphone functionality.

**Webcam Test:**

1. Open the **Camera** app (search in Start menu)
2. Document:
   - Does the webcam work? [ ] Yes [ ] No
   - Is there a webcam LED indicator? [ ] Yes [ ] No
   - Image quality (subjective): [ ] Poor [ ] Acceptable [ ] Good
   - Does your webcam have a privacy shutter? [ ] Yes [ ] No

3. In Camera app settings (gear icon):
   - Available resolutions: _____________
   - Framing grid available? [ ] Yes [ ] No
   - HDR or low-light mode? [ ] Yes [ ] No

**Webcam in Device Manager:**

1. Open Device Manager → Expand **Cameras** or **Imaging devices**
2. What is listed? _____________
3. Right-click → Properties → Driver tab
   - Driver version: _____________
   - Driver date: _____________

---

**Microphone Test:**

1. Right-click speaker icon in taskbar → **Sound settings**
2. Under **Input**, select your microphone
3. Speak and watch the volume meter - does it respond? [ ] Yes [ ] No
4. Click **Device properties**:
   - Volume level: _____%
   - Additional device properties available? [ ] Yes [ ] No

5. Search Windows for "Voice Recorder" and make a short test recording
   - Playback quality: [ ] Poor [ ] Acceptable [ ] Good

**Privacy Settings:**

1. Go to **Settings → Privacy & Security → Camera**
   - Camera access enabled? [ ] Yes [ ] No
   - Which apps have camera access? List 3: _____________

2. Go to **Settings → Privacy & Security → Microphone**
   - Microphone access enabled? [ ] Yes [ ] No
   - Which apps have microphone access? List 3: _____________

---

#### Activity F: Common Display Issues Simulation

**Goal:** Understand symptoms of display problems.

**Research each issue and document how you would identify it:**

| Issue | Symptoms | Possible Causes |
|-------|----------|-----------------|
| Dead pixels | | |
| Backlight bleed | | |
| Screen flickering | | |
| Dim display | | |
| No display (black screen) | | |
| Cracked screen | | |
| Discoloration/tint | | |
| Image retention/burn-in | | |

**Dead Pixel Test:**

1. Search online for "dead pixel test" (many free websites)
2. Run the test full-screen through solid colors (red, green, blue, white, black)
3. Examine your screen carefully at each color
4. Results:
   - Dead pixels found (always black)? [ ] Yes [ ] No - Location: _____________
   - Stuck pixels found (always one color)? [ ] Yes [ ] No - Location: _____________
   - Hot pixels found (always white)? [ ] Yes [ ] No - Location: _____________

**Backlight Bleed Test:**

1. Display a completely black image in a dark room
2. Look at the edges and corners of the screen
3. Is there light leakage visible? [ ] None [ ] Minor [ ] Significant
4. Where is it most noticeable? _____________

---

### Tier 2 Bonus Activities

> ⚠️ **Requires a dedicated lab laptop.** See "Setting Up Your Hardware Lab" lesson. Never perform these activities on your primary laptop.

---

#### Activity G: Display Bezel Removal

**Goal:** Access the display panel and identify internal components.

**Safety first:**
- [ ] Laptop powered off and unplugged
- [ ] Battery disconnected
- [ ] Anti-static wrist strap on
- [ ] Photographed the display before starting

**Bezel removal process:**

1. **Examine the bezel for screws:**
   - Screws visible? [ ] Yes [ ] No
   - Screws hidden under rubber covers? [ ] Yes [ ] No
   - Screw locations: _____________

2. **Remove any screw covers** (small rubber circles/squares)
   - Use a plastic spudger or small flathead
   - Keep the covers - they're easy to lose!

3. **Remove bezel screws** and place in labeled container

4. **Pry the bezel carefully:**
   - Start at bottom corners
   - Use plastic spudger only - never metal
   - Work around the edges, releasing clips
   - Listen for clips releasing
   - **Never force it** - if stuck, check for hidden screws

5. **Photograph the exposed display assembly**

**Document what you see:**
- Bezel type: [ ] Snap-on clips [ ] Screws only [ ] Adhesive [ ] Combination
- Number of screws removed: _____
- Difficulty: [ ] Easy [ ] Moderate [ ] Difficult

---

#### Activity H: Display Assembly Identification

**Goal:** Identify all components in the display assembly.

**With the bezel removed, locate and document:**

| Component | Found? | Location | Notes |
|-----------|--------|----------|-------|
| LCD/LED panel | [ ] Yes | | Manufacturer/model on back? |
| Display cable (eDP/LVDS) | [ ] Yes | | Where does it connect? |
| Webcam module | [ ] Yes | | Wired or on separate board? |
| Webcam cable | [ ] Yes | | Thin wire alongside display cable? |
| Microphone(s) | [ ] Yes | | How many? Location? |
| Wi-Fi antenna wires | [ ] Yes | | Usually 2 wires - black and white |
| Ambient light sensor | [ ] Yes | | Small component near webcam |
| Inverter board (older laptops) | [ ] Yes | | Only on CCFL backlit displays |
| Backlight connector | [ ] Yes | | Separate from video cable? |

**Display panel information:**

Look at the back of the LCD panel (may require further disassembly):
- Manufacturer: _____________
- Model number: _____________
- Resolution: _____________
- Size: _____________

**Search the panel model number online:**
- Panel type (IPS, TN, etc.): _____________
- Compatible replacements available? [ ] Yes [ ] No
- Approximate replacement cost: $_____

---

#### Activity I: Wi-Fi Antenna Inspection

**Goal:** Understand Wi-Fi antenna routing in the display assembly.

**Locate the antenna wires:**

1. Find where the antenna wires exit the display hinge area
2. Trace them through the display assembly
3. Document:
   - Number of antenna wires: _____
   - Wire colors: _____________
   - Where do they terminate? (around the bezel edges)

**Antenna routing diagram:**

Sketch where the antennas run in your display:

```
+------------------------------------------+
|  [   ]              (webcam)             |
|                                          |
|                                          |
|                                          |
|                                          |
|                                          |
|                                          |
+------------------------------------------+
   (hinge area - cables exit here)
```

**Why are antennas in the display?**
- Answer in your own words: _____________

---

#### Activity J: Display Cable Identification

**Goal:** Identify the display cable type and understand its function.

**Locate the display cable:**

1. Find where the cable connects to the display panel
2. Trace it down through the hinge to the motherboard
3. Document:

| Characteristic | Your Laptop |
|----------------|-------------|
| Cable type (eDP, LVDS, or other) | |
| Connector type on display end | |
| Number of pins (estimate) | |
| Cable secured with tape/adhesive? | |
| Cable routed through hinge? | |

**Cable identification guide:**

| Cable Type | Characteristics | Common In |
|------------|-----------------|-----------|
| LVDS | Wider, older style, multiple data pairs | Pre-2015 laptops |
| eDP | Thinner, modern, single connector | 2015+ laptops |
| Integrated | Part of a flex cable assembly | Ultrabooks |

**What type does your lab laptop have?** _____________

---

#### Activity K: Reassembly and Testing

**Goal:** Safely reassemble the display and verify functionality.

**Reassembly checklist:**

1. [ ] Display cable securely connected
2. [ ] Webcam cable connected (if disconnected)
3. [ ] Antenna wires properly routed (not pinched)
4. [ ] No cables crossing the hinge area improperly
5. [ ] Bezel aligned before snapping in place
6. [ ] All clips engaged
7. [ ] All screws reinstalled
8. [ ] Screw covers replaced

**Post-reassembly testing:**

| Test | Pass? | Notes |
|------|-------|-------|
| Display powers on | [ ] | |
| Full screen visible (no black areas) | [ ] | |
| No flickering | [ ] | |
| Even brightness (no dark spots) | [ ] | |
| Touch works (if touchscreen) | [ ] | |
| Webcam functions | [ ] | |
| Wi-Fi connects | [ ] | |
| No visible damage to bezel | [ ] | |

**If something doesn't work:**

| Symptom | Check This |
|---------|------------|
| No display | Display cable connection |
| Partial display / lines | Display cable seated properly |
| Flickering | Cable pinched or damaged |
| No webcam | Webcam cable connection |
| Weak Wi-Fi | Antenna wires connected/routed properly |
| Backlight but no image | Cable partially connected |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer's laptop screen is very dim even at full brightness.**
   - What could cause this?
   - What would you check first?
   - If it's an older laptop, what component might be failing?

2. **A user complains about eye strain when using their laptop.**
   - What display settings would you adjust?
   - What is "Night light" and when is it helpful?
   - What panel type is easiest on the eyes for long use?

3. **A client needs a laptop for graphic design work.**
   - What display specifications matter most?
   - What panel type would you recommend?
   - What color gamut coverage should they look for?

4. **A laptop's display works, but the image has a pink/green tint.**
   - What might cause this?
   - Is this a hardware or software issue?
   - How would you troubleshoot it?

---

## What You Learned Today

- ✅ Identified your display's resolution, refresh rate, and panel type
- ✅ Explored Windows display settings and calibration options
- ✅ Tested external display connections and projection modes
- ✅ Verified webcam and microphone functionality
- ✅ Checked for dead pixels and backlight bleed
- ✅ Understand common display issues and their symptoms
- ✅ (Tier 2) Safely removed and reinstalled a display bezel
- ✅ (Tier 2) Identified display cable types (eDP vs LVDS)
- ✅ (Tier 2) Located Wi-Fi antennas in the display assembly
- ✅ (Tier 2) Identified webcam module and related components

**Next Lab:** Laptop Disassembly and Component Replacement - full teardown and component identification.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 2: Laptop Displays and Video*