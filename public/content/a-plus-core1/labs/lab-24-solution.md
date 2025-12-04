# Lab 24: Display Technologies - Solution Guide

> ⚠️ **Note:** Review this after attempting the lab yourself. The learning happens in the struggle!

---

## Section 1: Concept Check - Answers

### Question 1: LCD vs LED
**What is the difference between LCD and LED displays? Why is "LED TV" technically a misnomer?**

**LCD (Liquid Crystal Display)** is the actual display technology - liquid crystals twist to block or allow light through, creating the image.

**LED** refers only to the **backlight type**. An "LED TV" is actually an LCD TV with LED backlighting (instead of older CCFL/fluorescent backlighting).

The misnomer exists because:
- Both "LCD TVs" and "LED TVs" use liquid crystal panels
- The difference is only the backlight source (CCFL vs LED)
- Marketing chose "LED TV" because it sounds more advanced
- True LED displays where each pixel is an LED are called **OLED** or **Micro-LED**

So "LED TV" = LCD panel + LED backlight, not actual LED pixels.

---

### Question 2: Panel Types for Different Users
**A graphic designer needs accurate colors and wide viewing angles, while a competitive gamer prioritizes speed. Which panel types would you recommend for each, and why?**

**Graphic Designer: IPS Panel**
- Excellent color accuracy (wide gamut coverage)
- Consistent colors at all viewing angles
- Good for color-critical work
- 8-bit or 10-bit color depth
- Factory calibrated options available
- Trade-off: Slightly slower response time (acceptable for non-gaming)

**Competitive Gamer: TN Panel (or Fast IPS)**
- Fastest response times (1ms or less)
- Lowest input lag
- High refresh rates (240Hz+) widely available
- Trade-off: Poor viewing angles, weaker colors (acceptable when speed matters most)
- Alternative: Fast IPS panels now offer 1ms with better colors

---

### Question 3: Bandwidth Requirements
**Explain why a 4K monitor at 144Hz requires DisplayPort 1.4 or HDMI 2.1, but a 1080p monitor at 60Hz works fine with older connections.**

It's about **bandwidth** - how much data per second the cable can carry.

**Bandwidth calculation:** Resolution × Refresh Rate × Color Depth × 3 (RGB channels)

| Setup | Bandwidth Needed |
|-------|-----------------|
| 1080p @ 60Hz (8-bit) | ~3.2 Gbps |
| 4K @ 60Hz (8-bit) | ~12.5 Gbps |
| 4K @ 144Hz (8-bit) | ~30 Gbps |
| 4K @ 144Hz (10-bit HDR) | ~38 Gbps |

**Connection bandwidth:**
- HDMI 1.4: 10.2 Gbps (can't do 4K@60)
- HDMI 2.0: 18 Gbps (4K@60 yes, 4K@144 no)
- HDMI 2.1: 48 Gbps (4K@144 yes)
- DisplayPort 1.4: 32.4 Gbps (4K@144 with DSC)

Higher resolution and refresh rate = exponentially more data = need faster connection.

---

### Question 4: Response Time vs Input Lag
**What's the difference between response time and input lag? Why do gamers care about both?**

**Response Time:**
- How fast a pixel changes from one color to another
- Measured in milliseconds (ms)
- Affects motion clarity (ghosting/blur)
- Spec sheet number (e.g., "1ms GtG")

**Input Lag:**
- Total delay from button press to action appearing on screen
- Includes: controller → PC processing → GPU rendering → display processing → pixel response
- Measured in milliseconds
- Harder to measure, rarely on spec sheets

**Why gamers care about both:**
- **High response time** = motion blur, ghosting trails behind moving objects
- **High input lag** = actions feel delayed, affects reaction time in competitive games
- A monitor can have fast response time but still have high input lag (lots of image processing)
- Competitive gamers want both low: <5ms response time, <10ms input lag

---

### Question 5: VGA Adapter from USB-C
**A customer has a new laptop with only USB-C ports and wants to connect their old VGA projector. What's needed and what limitations might they face?**

**Required:** USB-C to VGA **active adapter** (or dock with VGA output)

**Why active adapter:**
- USB-C carries digital signal (DisplayPort Alt Mode)
- VGA is analog
- Digital-to-analog conversion requires active circuitry

**Limitations:**
- **Resolution capped** - VGA maxes at ~2048×1536 (typically 1080p for projectors)
- **No audio** - VGA is video-only, need separate audio connection
- **Signal quality** - Analog can pick up interference, degrade over long cable runs
- **Adapter quality matters** - Cheap adapters may cause flickering or poor image
- **USB-C must support video** - Not all USB-C ports support DisplayPort Alt Mode (check laptop specs)

---

## Section 2: Activity Solutions

### Activity A: Display Technology Types

**LCD components:**

| Component | Function |
|-----------|----------|
| Backlight | Provides light source (LED or CCFL) |
| Liquid crystals | Twist to control light passage |
| Color filters | RGB subpixels create colors |
| Polarizing layers | Control light direction/blocking |

**How LCD creates an image:**

The backlight shines through the panel. Electrical current causes liquid crystals to twist, controlling how much light passes through each subpixel. Color filters create red, green, and blue subpixels. Combining these at varying intensities creates all colors. Polarizing layers ensure light only passes when crystals are properly aligned.

**LED displays - what "LED" actually means:**

"LED" in consumer TVs/monitors refers to LED backlighting, not LED pixels. The display panel itself is still LCD technology. The LEDs simply replaced older CCFL (fluorescent) tubes as the light source behind the LCD panel.

**LED Backlight types:**

| LED Backlight Type | Description | Pros/Cons |
|--------------------|-------------|-----------|
| Edge-lit | LEDs around edges, light guide spreads it | Thin, cheap / uneven brightness, poor contrast |
| Direct-lit | LEDs behind entire panel, no local dimming | Better uniformity / thicker, no zone control |
| Full-array local dimming (FALD) | LEDs behind panel with zone dimming | Best contrast, HDR / expensive, thicker |

**OLED vs LCD:**

| Aspect | LCD | OLED |
|--------|-----|------|
| Light source | Backlight (always on) | Each pixel emits own light |
| Black levels | Gray (backlight bleeds) | Perfect black (pixels off) |
| Contrast ratio | 1000:1 to 5000:1 | Infinite (true black) |
| Viewing angles | Varies by panel type | Excellent all angles |
| Burn-in risk | None | Yes (static images) |
| Power consumption | Consistent | Varies with content |
| Cost | Lower | Higher |

**Other display technologies:**

| Technology | How It Works | Current Status |
|------------|--------------|----------------|
| Plasma | Gas cells emit UV light → phosphors glow | Discontinued (2014) |
| Mini-LED | Thousands of tiny LEDs for better local dimming | Current high-end LCDs |
| Micro-LED | Microscopic LEDs as actual pixels | Emerging, very expensive |
| QD-OLED | OLED with quantum dot color layer | Premium TVs/monitors |

---

### Activity B: Panel Types (LCD)

**Panel comparison:**

| Characteristic | TN | IPS | VA |
|----------------|----|----|-----|
| Response time | 1ms (fastest) | 4-5ms (improving) | 4-8ms (slowest) |
| Viewing angles | 170°/160° (poor) | 178°/178° (excellent) | 178°/178° (good) |
| Color accuracy | 6-bit + FRC (poor) | 8-bit true (excellent) | 8-bit (good) |
| Contrast ratio | 1000:1 (lowest) | 1000:1 (low) | 3000:1+ (highest) |
| Price | Cheapest | Mid-range | Mid-range |
| Best for | Competitive gaming | Content creation | Movies, dark games |

**Match panel to user:**

| User | Best Panel | Why |
|------|------------|-----|
| Competitive FPS gamer | TN or Fast IPS | Lowest response time, highest refresh rates |
| Photo/video editor | IPS | Color accuracy, wide gamut, consistent angles |
| Movie enthusiast | VA or OLED | Deep blacks, high contrast for cinematic content |
| Office worker (budget) | IPS or VA | Good colors, viewing angles for documents |
| General gaming + content | IPS | Balance of speed, colors, versatility |

---

### Activity C: Display Specifications

**Resolution:**

| Resolution | Name | Pixels | Aspect Ratio |
|------------|------|--------|--------------|
| 1920 × 1080 | Full HD / 1080p | 2.07M | 16:9 |
| 2560 × 1440 | QHD / 1440p / 2K | 3.69M | 16:9 |
| 3840 × 2160 | 4K UHD / 2160p | 8.29M | 16:9 |
| 5120 × 2880 | 5K | 14.75M | 16:9 |
| 2560 × 1080 | UltraWide FHD | 2.76M | 21:9 |
| 3440 × 1440 | UltraWide QHD | 4.95M | 21:9 |
| 5120 × 1440 | Super UltraWide | 7.37M | 32:9 |

**Pixel density calculations:**

| Monitor | Resolution | Size | PPI |
|---------|------------|------|-----|
| Standard office | 1920×1080 | 24" | 92 PPI |
| Gaming | 2560×1440 | 27" | 109 PPI |
| 4K productivity | 3840×2160 | 32" | 138 PPI |
| 4K smaller | 3840×2160 | 27" | 163 PPI |

**When pixels become invisible:** Around 100-110 PPI at typical desk viewing distance (2-3 feet). "Retina" quality is roughly 110+ PPI for desktop use.

**Refresh rate:**

| Refresh Rate | Frame Time | Best For |
|--------------|------------|----------|
| 60 Hz | 16.67ms | Office, general use |
| 75 Hz | 13.33ms | Slight gaming improvement |
| 120 Hz | 8.33ms | Console gaming, smooth desktop |
| 144 Hz | 6.94ms | PC gaming sweet spot |
| 165 Hz | 6.06ms | Common gaming monitor |
| 240 Hz | 4.17ms | Competitive gaming |
| 360 Hz | 2.78ms | Professional esports |

**Refresh rate vs frame rate:**
Refresh rate is how often the monitor updates. Frame rate (FPS) is how many frames the GPU produces. Ideally, FPS should match or exceed refresh rate. If FPS < refresh rate, you're not using the monitor's full capability. If FPS > refresh rate without VSync, screen tearing occurs.

**Adaptive sync technologies:**

| Technology | Manufacturer | Purpose |
|------------|--------------|---------|
| G-Sync | NVIDIA | Syncs monitor refresh to GPU frame output |
| FreeSync | AMD (now open) | Same as G-Sync, royalty-free |
| Adaptive Sync (VESA) | Industry standard | DisplayPort standard, basis for FreeSync |

**What adaptive sync solves:** Screen tearing (when GPU frame doesn't align with monitor refresh) and stuttering (from traditional VSync). The monitor dynamically adjusts its refresh rate to match the GPU's frame output.

---

### Activity D: Response Time and Input Lag

**Response time measures:** How quickly a pixel can change from one color to another.

**Measurement types:**

| Measurement | What It Means |
|-------------|---------------|
| GtG (Gray-to-Gray) | Mid-tone transition (most common spec) |
| MPRT (Moving Picture Response Time) | Perceived motion blur duration |
| BTW (Black-to-White) | Full transition (rarely used now) |

**Why manufacturers prefer GtG:** It gives the lowest number because gray-to-gray transitions are faster than full black-to-white. It's somewhat representative of typical usage but can be misleading.

**Typical response times:**

| Panel Type | Typical GtG | Best Case |
|------------|-------------|-----------|
| TN | 1-2ms | <1ms |
| IPS | 4-5ms | 1ms (Fast IPS) |
| VA | 4-8ms | 1ms (claimed, often higher) |
| OLED | 0.1ms | Nearly instant |

**Input lag measures:** Total time from input action to seeing result on screen. Includes all processing delays, not just pixel response.

**How it differs from response time:**
- Response time: Just the pixel change speed
- Input lag: Everything (signal processing, scaler, frame buffer, response time)
- A monitor can have 1ms response time but 30ms input lag due to processing

| Input Lag | Perception |
|-----------|------------|
| < 10ms | Imperceptible, excellent for gaming |
| 10-20ms | Barely noticeable, good for most gaming |
| 20-40ms | Noticeable to sensitive users |
| > 40ms | Obviously delayed, problematic for gaming |

**Ghosting and overdrive:**

**What causes ghosting:** Pixels not changing fast enough, leaving trails behind moving objects.

**What overdrive does:** Applies extra voltage to force pixels to change faster, reducing ghosting.

**Too much overdrive causes:** Inverse ghosting/corona effect - bright halos or artifacts around moving objects. Worse than the original ghosting.

---

### Activity E: Brightness and Contrast

**Brightness levels:**

| Brightness Level | Use Case |
|------------------|----------|
| 250-300 nits | Standard office, indoor use |
| 400-600 nits | Bright rooms, HDR entry-level |
| 1000+ nits | HDR content, outdoor visibility |

**HDR brightness requirements:**

| HDR Standard | Peak Brightness | Notes |
|--------------|-----------------|-------|
| HDR10 | No minimum (format only) | Just means HDR metadata support |
| DisplayHDR 400 | 400 nits | Entry-level, minimal HDR benefit |
| DisplayHDR 600 | 600 nits | Noticeable HDR improvement |
| DisplayHDR 1000 | 1000 nits | True HDR experience |
| Dolby Vision | Varies | Dynamic metadata, premium content |

**Contrast ratio:**

**What it measures:** Ratio between brightest white and darkest black the display can produce.

| Contrast Ratio | Panel Type | Quality |
|----------------|------------|---------|
| 1000:1 | TN, IPS | Standard, blacks look gray |
| 3000:1 | VA | Good blacks, better movie viewing |
| 100,000:1+ | Mini-LED local dimming | Excellent, near-OLED blacks |
| Infinite | OLED | Perfect black (pixels off) |

**Why dynamic contrast is misleading:** It measures contrast with backlight adjustment between scenes, not within a single frame. A "1,000,000:1 dynamic contrast" display might only have 1000:1 native contrast. It's a marketing number, not real-world performance.

**Color specifications:**

| Specification | What It Measures |
|---------------|------------------|
| sRGB coverage | Coverage of standard color space (100% = standard) |
| Adobe RGB coverage | Wider gamut for print work |
| DCI-P3 coverage | Cinema color space, HDR content |
| Delta E (ΔE) | Color accuracy (lower = better, <2 is excellent) |
| Color depth (8-bit, 10-bit) | Colors per channel (256 vs 1024 shades) |

---

### Activity F: Display Connectors

**Connector comparison:**

| Connector | Max Resolution | Max Refresh | Audio | Notes |
|-----------|----------------|-------------|-------|-------|
| VGA | 2048×1536 | 85Hz | No | Analog, legacy, avoid |
| DVI-D (single-link) | 1920×1200 | 60Hz | No | Digital, legacy |
| DVI-D (dual-link) | 2560×1600 | 60Hz | No | Higher bandwidth |
| HDMI 1.4 | 4K | 30Hz | Yes | Common, limited 4K |
| HDMI 2.0 | 4K | 60Hz | Yes | Current standard |
| HDMI 2.1 | 4K/8K | 120Hz/60Hz | Yes | Latest, gaming features |
| DisplayPort 1.2 | 4K | 60Hz | Yes | PC standard |
| DisplayPort 1.4 | 4K | 120Hz | Yes | HDR, DSC support |
| DisplayPort 2.0 | 8K+ | 60Hz+ | Yes | Future-proof |
| USB-C (DP Alt) | Varies | Varies | Yes | Depends on DP version |
| Thunderbolt 3/4 | 4K×2 | 60Hz | Yes | Daisy-chain, data+video |

**DVI connector types:**

| DVI Type | Pins | Signal | Use Case |
|----------|------|--------|----------|
| DVI-A | 17 | Analog only | VGA adapter compatibility |
| DVI-D Single | 19 | Digital, single-link | Up to 1920×1200@60Hz |
| DVI-D Dual | 25 | Digital, dual-link | Up to 2560×1600@60Hz |
| DVI-I Single | 23 | Analog + digital | Versatile, single-link |
| DVI-I Dual | 29 | Analog + digital | Versatile, dual-link |

**Bandwidth requirements:**

| Resolution + Refresh | Minimum Bandwidth | Minimum Connection |
|---------------------|-------------------|-------------------|
| 1080p @ 60Hz | ~3.2 Gbps | Any digital (DVI, HDMI, DP) |
| 1080p @ 144Hz | ~7.5 Gbps | DVI-D DL, HDMI 1.4, DP 1.2 |
| 1440p @ 60Hz | ~5.6 Gbps | HDMI 1.4, DP 1.2 |
| 1440p @ 144Hz | ~13.5 Gbps | HDMI 2.0, DP 1.2 |
| 4K @ 60Hz | ~12.5 Gbps | HDMI 2.0, DP 1.2 |
| 4K @ 120Hz | ~25 Gbps | HDMI 2.1, DP 1.4 |
| 4K @ 144Hz | ~30 Gbps | HDMI 2.1, DP 1.4 (with DSC) |

**DSC (Display Stream Compression):**
Visually lossless compression that reduces bandwidth requirements by ~3:1. Needed when native bandwidth exceeds cable capability (e.g., 4K@144Hz@10-bit on DP 1.4). Requires both GPU and monitor support.

---

### Activity G: Adapters and Converters

**Passive vs Active adapters:**

| Type | How It Works | When Needed |
|------|--------------|-------------|
| Passive | Direct pin rewiring, no electronics | Same signal type (digital-digital) |
| Active | Contains conversion circuitry | Different signal types (analog-digital) |

**Common adapter scenarios:**

| From | To | Adapter Type | Works? | Notes |
|------|-----|--------------|--------|-------|
| DisplayPort | HDMI | Passive or Active | Yes | DP can output HDMI signal |
| HDMI | DisplayPort | Active | Yes | Requires power/active conversion |
| DVI-D | HDMI | Passive | Yes | Same digital signal |
| HDMI | DVI-D | Passive | Yes | Loses audio |
| VGA | HDMI | Active | Yes | Analog to digital conversion |
| HDMI | VGA | Active | Yes | Digital to analog conversion |
| USB-C | HDMI | Active | Yes* | *If USB-C supports DP Alt Mode |
| USB-C | DisplayPort | Active | Yes* | *If USB-C supports DP Alt Mode |

**Why some conversions need active adapters:**
Digital and analog signals are fundamentally different. Digital is discrete values (0s and 1s), analog is continuous voltage waves. Converting between them requires a DAC (digital-to-analog) or ADC (analog-to-digital) chip, which needs power and processing - thus "active."

**Signal conversion challenges:**

| Conversion | Challenge |
|------------|-----------|
| Digital → Analog | Needs DAC chip, quality depends on converter |
| Analog → Digital | Needs ADC chip, may introduce noise/latency |
| Different digital standards | May need protocol conversion (DP↔HDMI) |

---

### Activity H: Projector Technologies

**Projector types:**

| Technology | How It Works | Pros | Cons |
|------------|--------------|------|------|
| DLP | Micro-mirrors reflect light | Sharp image, no burn-in, portable | Rainbow effect, louder |
| LCD (3LCD) | Light through LCD panels | Bright, good colors, quiet | Dust blobs, less contrast |
| LCoS | Reflective LCD | Best image quality, smooth | Expensive, large, hot |
| Laser | Laser light source | Long life, instant on, bright | Expensive |
| LED | LED light source | Long life, small, quiet | Lower brightness |

**Projector specifications:**

| Specification | What It Means | Typical Values |
|---------------|---------------|----------------|
| Lumens | Brightness output | 1000-5000+ (higher = brighter rooms) |
| Contrast ratio | Black to white ratio | 2000:1 to 100,000:1 |
| Throw ratio | Distance/image width | 0.5 (short) to 2.0 (long) |
| Lamp life | Hours until replacement | 3000-20000+ hours |
| Native resolution | Actual pixel count | 1080p, 4K |
| Keystone correction | Angle compensation | ±30-40 degrees |

**Throw ratio types:**

| Type | Throw Ratio | Distance for 100" | Best For |
|------|-------------|-------------------|----------|
| Ultra short-throw | <0.4 | <2 feet | Small rooms, TV replacement |
| Short-throw | 0.4-1.0 | 4-8 feet | Classrooms, small spaces |
| Standard throw | 1.0-2.0 | 8-16 feet | Home theater, conference |
| Long-throw | >2.0 | 16+ feet | Large venues, auditoriums |

**Projector vs large TV:**

| Factor | Projector | Large TV |
|--------|-----------|----------|
| Screen size | 100"+ easily | Limited by cost (85" expensive) |
| Brightness | 1000-3000 nits typical | 300-2000 nits |
| Ambient light handling | Poor (needs dark room) | Good |
| Installation | Mounting, screen needed | Wall mount or stand |
| Maintenance | Lamp replacement, cleaning | Minimal |
| Cost per inch | Lower for large sizes | Higher |

---

### Activity I: Multi-Monitor Configurations

**Connection methods:**

| Method | How It Works | Monitors Supported |
|--------|--------------|-------------------|
| Multiple outputs | Separate cable per monitor | Limited by GPU outputs |
| Daisy-chaining (DP) | Monitor-to-monitor connection | 2-4 depending on resolution |
| USB docking station | Dock converts USB to video | 2-3 (quality/res limited) |
| Thunderbolt dock | TB dock with multiple outputs | 2-3+ at good quality |

**DisplayPort daisy-chaining requirements:**
- Monitors must have DP output (not just input)
- All monitors except last need DP 1.2+ with MST
- GPU must support MST (Multi-Stream Transport)

**Daisy-chain bandwidth limitations:**

| Monitors | Maximum Resolution Each |
|----------|------------------------|
| 2 monitors | 1440p@60Hz or 1080p@144Hz |
| 3 monitors | 1080p@60Hz |
| 4 monitors | 1080p@60Hz (limited) |

**Windows display modes:**

| Mode | Description | Use Case |
|------|-------------|----------|
| Duplicate | Same image on all displays | Presentations |
| Extend | Desktop spans displays | Productivity |
| Second screen only | Primary display off | Laptop + external |
| PC screen only | External display off | Laptop standalone |

**Multi-monitor considerations:**

| Factor | Consideration |
|--------|---------------|
| Resolution matching | Mixing resolutions = scaling issues |
| Refresh rate | Different rates = potential sync issues |
| Color calibration | Match colors across displays |
| Bezel size | Thin bezels = less gap between screens |
| GPU requirements | More pixels = more GPU power needed |
| Cable management | Plan cable routing before setup |

---

### Activity J: Display Troubleshooting

**Symptom analysis:**

| Symptom | Possible Causes | Solutions |
|---------|-----------------|-----------|
| No display | Cable, power, source selection, GPU | Check connections, try different cable/port |
| Flickering | Cable, refresh rate, driver, failing panel | Secure cable, lower refresh, update driver |
| Wrong resolution | Driver, cable bandwidth, settings | Update driver, check cable supports resolution |
| Color issues | Color profile, cable, settings, panel | Reset color, try different cable, calibrate |
| Dead pixels | Manufacturing defect, damage | Check warranty, pixel exerciser software |
| Image persistence/burn-in | Static content too long | Vary content, use screensaver, lower brightness |
| Overscan/underscan | TV mode, driver setting | Adjust in GPU settings or TV menu |
| Screen tearing | VSync off, no adaptive sync | Enable VSync or FreeSync/G-Sync |
| Backlight bleed | Panel quality, pressure | Normal for IPS, loosen mount if excess |

**Troubleshooting steps:**

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Check cable connections | Loose cables common cause |
| 2 | Try different cable | Rule out cable failure |
| 3 | Test with different source | Determine if display or source issue |
| 4 | Check display settings | Resolution, refresh, input source |
| 5 | Update graphics drivers | Driver bugs cause many issues |
| 6 | Test monitor on another PC | Isolate monitor vs PC problem |

**Dead pixel types:**

| Type | Appearance | Fixable? |
|------|------------|----------|
| Stuck pixel | Permanently one color (often green/red) | Sometimes (pixel exerciser, massage) |
| Dead pixel | Permanently black | Rarely (physical damage) |
| Hot pixel | Permanently white | Rarely |

**Monitor test patterns:**

| Test | What It Reveals |
|------|-----------------|
| Solid colors (RGB, white, black) | Dead/stuck pixels, uniformity |
| Gradient patterns | Color banding, bit depth issues |
| Grid patterns | Geometry, scaling problems |
| Moving objects | Ghosting, response time issues |

---

### Activity K: Display Selection Scenarios

**Scenario 1: Office Productivity**

- **Size:** 24-27"
- **Resolution:** 1920×1080 or 2560×1440
- **Panel type:** IPS
- **Refresh rate:** 60-75Hz
- **Features:** Height adjustment, VESA mount, low blue light mode

**Scenario 2: Competitive Gaming**

- **Size:** 24-27"
- **Resolution:** 1920×1080 or 2560×1440
- **Panel type:** TN or Fast IPS
- **Refresh rate:** 240Hz+
- **Features:** G-Sync/FreeSync, 1ms response, low input lag

**Scenario 3: Content Creation**

- **Size:** 27-32"
- **Resolution:** 2560×1440 or 3840×2160
- **Panel type:** IPS
- **Color coverage:** 100% sRGB, 95%+ DCI-P3, ΔE < 2
- **Features:** Factory calibrated, 10-bit color, hardware calibration support

**Scenario 4: Home Theater**

- **Recommended display type:** OLED TV (65-77")
- **Why:** Perfect blacks for dark room, infinite contrast, excellent for movies, wide viewing angles for seating arrangement, no backlight bleed. Budget alternative: VA panel TV with local dimming.

---

## Section 3: Reflection Scenarios

### Scenario 1: Blurry 4K Monitor
**A customer complains their new 4K monitor looks "blurry" compared to their old 1080p monitor. Both are 27 inches. What's likely happening and how would you help them?**

**Most likely cause:** Windows scaling

At 27", 4K has 163 PPI while 1080p has 82 PPI. Windows defaults to 150% scaling for 4K to make UI elements readable. This scaling can make some applications (especially older ones) look blurry.

**Solutions:**
1. Check scaling in Display Settings (try 100%, 125%, 150%)
2. Enable "Fix scaling for apps" in Display Settings
3. For specific apps: Right-click → Properties → Compatibility → Override high DPI scaling
4. Ensure running at native 4K resolution (not 1080p scaled)
5. Use DP or HDMI 2.0+ cable (older cables may limit to lower resolution)
6. Verify GPU supports 4K output

The 4K monitor should look sharper at 100% scaling - text will just be smaller.

---

### Scenario 2: No Signal on Laptop
**A user's external monitor works fine with their desktop but shows no signal when connected to their new laptop via the same HDMI cable. What could be wrong?**

**Potential causes:**

1. **Laptop HDMI version** - Older laptop may not support monitor's preferred resolution
2. **Laptop not detecting** - Press Win+P to select display mode, or Fn+display key
3. **HDMI port type** - Some laptops have limited HDMI output capability
4. **USB-C preferred** - Many modern laptops output video via USB-C, not HDMI
5. **Driver issue** - Update graphics driver on laptop
6. **Power state** - Some laptops need to be plugged in for external display
7. **BIOS setting** - External display may be disabled in BIOS

**Troubleshooting steps:**
1. Press Win+P → Duplicate or Extend
2. Check laptop display settings
3. Try different resolution on monitor
4. Test laptop with different monitor
5. Update graphics drivers
6. Check if USB-C/Thunderbolt is video-capable

---

### Scenario 3: Color Mismatch
**A photographer is seeing different colors on their laptop vs their desktop monitor when editing the same photo. What should they check?**

**Color management issues:**

1. **Different color profiles** - Each display needs proper ICC profile
2. **Different gamut coverage** - Laptop may be sRGB, monitor may be wider
3. **Calibration needed** - Neither display may be calibrated
4. **Different white points** - Color temperature settings differ
5. **Night mode/blue light filter** - May be enabled on one display

**Solutions:**
1. Calibrate both displays with colorimeter (SpyderX, i1Display)
2. Use same color profile target (sRGB for web, Adobe RGB for print)
3. Check both displays show same color temperature (6500K standard)
4. Disable any color adjustments (night mode, vivid mode, etc.)
5. For critical work, trust the calibrated display only
6. Consider one high-quality monitor for color work rather than matching two

---

### Scenario 4: 240Hz Monitor Feels Choppy
**A customer bought a 240Hz gaming monitor but their games still feel "choppy." They have a GTX 1650. What's the issue?**

**The GPU can't produce 240 FPS:**

A GTX 1650 is an entry-level card that typically produces:
- 60-100 FPS at 1080p in modern games
- Maybe 150+ FPS only in esports titles at low settings

**The monitor displays what the GPU provides.** If GPU outputs 80 FPS, even a 240Hz monitor only shows 80 unique frames per second.

**Solutions:**
1. Lower game settings to increase FPS
2. Enable FreeSync/G-Sync to smooth frame delivery
3. Check if actually running at 240Hz in Windows display settings
4. Use frame rate counter (FPS) to see actual performance
5. Understand the GPU is the limitation
6. Upgrade GPU for true 240Hz gaming (RTX 4060+)

**Reality check:** 240Hz gaming requires powerful GPU. The GTX 1650 was never designed for 240 FPS gaming - it's a budget 1080p/60fps card.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              DISPLAY TECHNOLOGIES QUICK REFERENCE              ║
╠═══════════════════════════════════════════════════════════════╣
║  PANEL TYPES:                                                  ║
║  TN: Fastest response, poor angles/colors - competitive gaming║
║  IPS: Best colors/angles, slower - content creation           ║
║  VA: Best contrast, slowest - movies, dark rooms              ║
║  OLED: Perfect blacks, burn-in risk - premium                 ║
╠═══════════════════════════════════════════════════════════════╣
║  RESOLUTIONS:                                                  ║
║  1080p = 1920×1080 | 1440p = 2560×1440 | 4K = 3840×2160      ║
╠═══════════════════════════════════════════════════════════════╣
║  CONNECTORS (max 4K capability):                              ║
║  VGA: No 4K | DVI-D Dual: 4K@30 | HDMI 2.0: 4K@60            ║
║  HDMI 2.1: 4K@120 | DP 1.4: 4K@120 | DP 2.0: 4K@240          ║
╠═══════════════════════════════════════════════════════════════╣
║  RESPONSE TIME: Pixel color change speed (lower = better)     ║
║  INPUT LAG: Total delay from input to display (lower = better)║
╠═══════════════════════════════════════════════════════════════╣
║  ADAPTERS: Digital↔Digital usually passive                    ║
║           Analog↔Digital ALWAYS needs active adapter          ║
╠═══════════════════════════════════════════════════════════════╣
║  HDR: DisplayHDR 400=entry | 600=decent | 1000=true HDR       ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 24 Solution Guide: Display Technologies*