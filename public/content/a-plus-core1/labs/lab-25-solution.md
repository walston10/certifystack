# Lab 25: Peripheral Devices - Solution Guide

> ⚠️ **Note:** Review this after attempting the lab yourself. The learning happens in the struggle!

---

## Section 1: Concept Check - Answers

### Question 1: USB Hubs
**What's the difference between a USB hub and a powered USB hub? When would you need a powered hub?**

**Standard USB Hub:**
- Draws power from the host computer's USB port
- Splits connection but shares power budget (~500mA for USB 2.0, ~900mA for USB 3.0)
- Limited power available per downstream port

**Powered USB Hub:**
- Has its own AC power adapter
- Can supply full power to each port independently
- Doesn't drain host computer's USB power budget

**When you need a powered hub:**
- Connecting power-hungry devices (external HDDs, charging phones)
- Multiple devices that each need significant power
- Devices that fail or disconnect on unpowered hubs
- Charging tablets or phones while using other devices
- More than 2-3 devices on the hub

---

### Question 2: Wireless Mouse Disconnections
**A user's wireless mouse works fine on their desktop but constantly disconnects on their laptop. Both use USB receivers. What could cause this and how would you troubleshoot?**

**Potential causes:**

1. **USB Power Management** - Laptop may be putting USB ports to sleep to save power
2. **USB 3.0 Interference** - USB 3.0 ports generate 2.4GHz interference affecting wireless receivers
3. **Weak receiver position** - Laptop's metal body may block signal
4. **Wi-Fi interference** - Laptop's active Wi-Fi closer to receiver
5. **Power saving mode** - Laptop's aggressive power saving
6. **Driver differences** - Different USB chipset/drivers

**Troubleshooting steps:**
1. Disable USB selective suspend in Power Options
2. Move receiver to USB extension cable away from laptop
3. Try USB 2.0 port instead of USB 3.0
4. Update wireless mouse drivers/firmware
5. Check for 2.4GHz interference (Wi-Fi, other wireless devices)
6. Try receiver in different port
7. Replace batteries (low battery can cause disconnects)

---

### Question 3: Plug-and-Play vs Driver Required
**Explain why some peripherals work immediately when plugged in (plug-and-play) while others require driver installation first.**

**Plug-and-Play devices:**
- Use standard device classes (HID for keyboards/mice, mass storage for drives)
- Windows has built-in generic drivers for these classes
- Device identifies as standard class → Windows loads appropriate driver automatically
- Examples: Basic mice, keyboards, USB drives, webcams

**Driver-required devices:**
- Use proprietary protocols or advanced features
- Standard drivers don't support all functionality
- Manufacturer driver needed for full features
- Examples: Gaming mice (macro support, DPI settings), printers, scanners, specialized hardware

**The middle ground:**
- Some devices work with generic drivers but need manufacturer drivers for full features
- Gaming mouse works as basic mouse immediately, but needs driver for programmable buttons
- Printer may print with generic driver, but needs proper driver for all paper sizes/quality settings

---

### Question 4: PS/2 to USB Adapter
**A customer wants to use their old PS/2 keyboard with a new computer that only has USB ports. What are their options and potential limitations?**

**Options:**

1. **Passive PS/2-to-USB adapter** (cheap, simple)
   - Only works if keyboard has built-in USB compatibility (dual-mode)
   - Most older keyboards won't work with passive adapter
   - Very hit-or-miss

2. **Active PS/2-to-USB adapter** (more expensive, reliable)
   - Contains microcontroller to translate protocols
   - Works with any PS/2 keyboard
   - May add slight latency
   - Recommended solution

**Limitations:**
- **N-key rollover** may be reduced (USB HID protocol limits simultaneous keys)
- **Slight latency** with active adapters
- **No BIOS access** with some adapters (may not initialize fast enough)
- **Cost** - Good active adapter may approach cost of new USB keyboard
- **PS/2 features lost** - Some PS/2-specific features may not translate

**Recommendation:** If keyboard isn't irreplaceable/special, buying a USB keyboard is often simpler and cheaper than a quality adapter.

---

### Question 5: Barcode Scanner Modes
**What's the difference between a barcode scanner configured for "keyboard wedge" mode versus one using a dedicated driver?**

**Keyboard Wedge Mode:**
- Scanner emulates a keyboard
- Scanned data appears as if typed
- Works with ANY application (no integration needed)
- Plug and play - no driver installation
- Data goes wherever cursor is focused
- Limited formatting options
- Can't communicate back to scanner

**Dedicated Driver Mode:**
- Custom software interface
- Full control over scanner settings
- Can trigger actions on scan
- Better error handling
- Two-way communication
- Works with specific software only
- Requires driver installation
- More complex setup

**Use case comparison:**

| Scenario | Best Mode |
|----------|-----------|
| Simple retail POS | Keyboard wedge |
| Inventory management software | Dedicated driver |
| Any application compatibility | Keyboard wedge |
| Advanced scanning features | Dedicated driver |
| Quick deployment | Keyboard wedge |
| Custom workflow integration | Dedicated driver |

---

## Section 2: Activity Solutions

### Activity A: USB Fundamentals

**USB version comparison:**

| USB Version | Speed Name | Max Speed | Power Output | Year |
|-------------|------------|-----------|--------------|------|
| USB 1.1 | Full Speed | 12 Mbps | 500mA | 1998 |
| USB 2.0 | Hi-Speed | 480 Mbps | 500mA | 2000 |
| USB 3.0 | SuperSpeed | 5 Gbps | 900mA | 2008 |
| USB 3.1 Gen 1 | SuperSpeed | 5 Gbps | 900mA | 2013 |
| USB 3.1 Gen 2 | SuperSpeed+ | 10 Gbps | 900mA-3A | 2013 |
| USB 3.2 Gen 1 | SuperSpeed | 5 Gbps | 900mA | 2017 |
| USB 3.2 Gen 2 | SuperSpeed+ | 10 Gbps | Up to 3A | 2017 |
| USB 3.2 Gen 2x2 | SuperSpeed+ | 20 Gbps | Up to 3A | 2017 |
| USB4 | USB4 | 40 Gbps | Up to 100W PD | 2019 |

**USB naming clarified:**

| Marketing Name | Technical Name | Speed |
|----------------|----------------|-------|
| USB 3.0 | USB 3.2 Gen 1 | 5 Gbps |
| USB 3.1 | USB 3.2 Gen 2 | 10 Gbps |
| USB 3.2 | USB 3.2 Gen 2x2 | 20 Gbps |
| SuperSpeed USB | USB 3.2 Gen 1 | 5 Gbps |
| SuperSpeed USB 10Gbps | USB 3.2 Gen 2 | 10 Gbps |
| SuperSpeed USB 20Gbps | USB 3.2 Gen 2x2 | 20 Gbps |

**USB connector types:**

| Connector | Description | Common Use |
|-----------|-------------|------------|
| Type-A | Rectangular, flat | Host devices (PC ports) |
| Type-B | Square-ish with beveled top | Printers, older devices |
| Mini-B | Smaller Type-B | Older cameras, devices |
| Micro-B | Flat, small | Android phones (older), devices |
| Micro-B SuperSpeed | Wider Micro-B | USB 3.0 external drives |
| Type-C | Reversible, oval | Modern phones, laptops, everything |

**USB Type-C capabilities:**

| Feature | Description | Required? |
|---------|-------------|-----------|
| Data transfer | USB 2.0 to USB4 speeds | Yes (minimum 2.0) |
| Power delivery (PD) | Up to 240W charging | No, optional |
| DisplayPort Alt Mode | Video output | No, optional |
| Thunderbolt | 40Gbps, PCIe tunneling | No, requires TB controller |

**Why USB-C capabilities vary:** USB-C is just a connector shape. The capabilities depend on the controller chip, cables, and device implementation. Always check specs - not all USB-C ports support video, fast charging, or Thunderbolt.

**USB color coding:**

| Port Color | Typical Meaning |
|------------|-----------------|
| Black | USB 2.0 |
| White | USB 2.0 |
| Blue | USB 3.0/3.1/3.2 Gen 1 |
| Teal/Aqua | USB 3.1/3.2 Gen 2 (10 Gbps) |
| Red | USB 3.0+ with always-on charging |
| Yellow | Always-on charging (sleep charging) |

*Note: Color coding is a convention, not a standard. Always verify.*

---

### Activity B: Keyboards

**Keyboard connection types:**

| Connection | Connector | Pros | Cons |
|------------|-----------|------|------|
| PS/2 | Mini-DIN 6-pin | True NKRO, no USB overhead | Not hot-plug, legacy |
| USB wired | Type-A | Universal, hot-plug | 6KRO typical, slight latency |
| USB wireless (RF) | Type-A receiver | Low latency, reliable | Uses USB port, receiver can be lost |
| Bluetooth | None | No dongle, multi-device | Higher latency, battery |
| 2.4GHz + Bluetooth | Type-A receiver | Best of both | Complex, more expensive |

**Keyboard switch types:**

| Type | Mechanism | Feel | Use Case |
|------|-----------|------|----------|
| Membrane | Pressure pad under rubber | Mushy, quiet | Budget keyboards |
| Rubber dome | Rubber dome over contacts | Soft, tactile | Office keyboards |
| Scissor | X-shaped mechanism | Low travel, stable | Laptops, slim keyboards |
| Mechanical | Individual spring switches | Precise, durable | Gaming, typing enthusiasts |

**Mechanical switch characteristics:**

| Switch Color | Actuation | Feel | Sound | Best For |
|--------------|-----------|------|-------|----------|
| Cherry MX Red | 45g linear | Smooth, no bump | Quiet | Gaming |
| Cherry MX Blue | 50g tactile | Click, bump | Loud click | Typing |
| Cherry MX Brown | 45g tactile | Bump, no click | Moderate | All-around |

**Keyboard features:**

| Feature | Description | Who Needs It |
|---------|-------------|--------------|
| N-key rollover | All keys register simultaneously | Gamers, fast typists |
| Anti-ghosting | Prevents phantom key presses | Gamers |
| Macro keys | Programmable key sequences | Gamers, power users |
| Media controls | Volume, playback buttons | Everyone |
| Backlighting/RGB | Illuminated keys | Low-light use, aesthetics |
| Hot-swappable switches | Change switches without soldering | Enthusiasts |
| Ergonomic design | Split, curved layouts | RSI prevention |

**Keyboard layouts:**

| Layout | Keys | Difference from Full |
|--------|------|---------------------|
| Full-size | ~104 | None (complete) |
| Tenkeyless (TKL) | ~87 | No numpad |
| 75% | ~84 | Compact, no numpad, condensed nav |
| 65% | ~68 | No function row, no numpad |
| 60% | ~61 | No function row, numpad, or nav cluster |

---

### Activity C: Mice and Pointing Devices

**Mouse sensor types:**

| Type | How It Works | Surface Requirements | Best For |
|------|--------------|---------------------|----------|
| Optical (LED) | LED + camera | Most surfaces, not glass | General use |
| Laser | Laser + camera | Almost any surface | Any surface needs |
| Optical (advanced) | High-powered LED | Any surface inc. glass | Gaming, premium |

**Mouse specifications:**

| Specification | What It Means | Typical Range |
|---------------|---------------|---------------|
| DPI/CPI | Dots/Counts per inch - sensitivity | 800-25,600+ |
| Polling rate | Reports per second to PC | 125-8000 Hz |
| IPS (tracking speed) | Max speed sensor can track | 150-650 IPS |
| Acceleration | Cursor speed varies with hand speed | Off preferred for gaming |
| Lift-off distance | Height sensor stops tracking | 1-3mm |

**Mouse connection types:**

| Connection | Latency | Battery | Best For |
|------------|---------|---------|----------|
| Wired USB | Lowest (~1ms) | N/A | Competitive gaming |
| 2.4GHz wireless | Very low (~1-2ms) | 40-100+ hours | Gaming, desktop |
| Bluetooth | Higher (~8-16ms) | 100+ hours | Laptops, portability |

**Alternative pointing devices:**

| Device | How It Works | Use Case |
|--------|--------------|----------|
| Trackball | Ball rotates in socket | RSI relief, limited space |
| Touchpad | Capacitive touch surface | Laptops |
| Pointing stick (TrackPoint) | Pressure-sensitive nub | ThinkPad users, on-keyboard |
| Graphics tablet | Stylus on surface | Digital art, CAD |
| Trackpad (standalone) | External touchpad | Mac users, gesture support |

**Ergonomic mouse designs:**

| Design | Purpose | Who Benefits |
|--------|---------|--------------|
| Vertical mouse | Natural handshake position | RSI/carpal tunnel sufferers |
| Trackball | No arm movement needed | Limited desk space, RSI |
| Ergonomic contoured | Fits hand naturally | Long-use comfort |
| Ambidextrous | Either hand use | Left-handers, switching |

---

### Activity D: Scanners

**Scanner types:**

| Type | How It Works | Best For |
|------|--------------|----------|
| Flatbed | Glass surface, moving sensor | Photos, books, varied documents |
| Sheet-fed (ADF) | Paper feeds through | High-volume document scanning |
| Handheld | Manual movement over document | Portable, receipts |
| Drum | Document wraps around drum | Professional pre-press |
| Film/slide | Backlit scanning for transparencies | Photo negatives, slides |

**Scanner specifications:**

| Specification | What It Measures | Typical Values |
|---------------|------------------|----------------|
| Optical resolution (DPI) | Actual sensor resolution | 300-4800 DPI |
| Interpolated resolution | Software-enhanced | 9600-19200 DPI |
| Color depth (bits) | Color information per pixel | 24-48 bit |
| Scan speed | Pages per minute | 8-60+ ppm |
| Scan area | Maximum document size | Letter, Legal, A3 |

**Optical vs interpolated resolution:**

**Difference:** Optical is the actual physical sensor resolution. Interpolated uses software to "guess" extra pixels between real ones.

**Which matters more:** Optical resolution - it's the real capability. Interpolated resolution is mostly marketing; it doesn't add real detail.

**Scanner connection types:**

| Connection | Speed | Common Use |
|------------|-------|------------|
| USB 2.0 | 480 Mbps | Basic home scanners |
| USB 3.0 | 5 Gbps | High-volume, high-res |
| Ethernet/Network | Varies | Office multifunction |
| Wi-Fi | Varies | Portable, convenience |

**Common scan settings:**

| Setting | Options | When to Use |
|---------|---------|-------------|
| Resolution | 75-1200+ DPI | 300 documents, 600+ photos |
| Color mode | Color, grayscale, B&W | Match original content |
| File format | PDF, JPEG, TIFF, PNG | PDF for docs, TIFF for archive |
| Duplex | Single/double-sided | Double-sided documents |

---

### Activity E: Barcode and QR Code Readers

**Barcode types:**

| Type | Dimensions | Data Capacity | Common Use |
|------|------------|---------------|------------|
| UPC | 1D | 12-13 digits | Retail products |
| Code 128 | 1D | 128 characters | Shipping, inventory |
| Code 39 | 1D | 43 characters | Industrial |
| QR Code | 2D | 7089 characters | Marketing, URLs, tickets |
| Data Matrix | 2D | 2335 characters | Manufacturing, small parts |

**Scanner types:**

| Type | Technology | Range | Best For |
|------|------------|-------|----------|
| Laser | Reflects laser beam | 6-24" | 1D barcodes, speed |
| Linear imager (CCD) | Takes picture of barcode | 1-12" | 1D, damaged codes |
| 2D area imager | Camera captures image | 1-15" | 1D and 2D codes |
| Camera-based | Smartphone/webcam | Varies | Casual use, mobile |

**Scanner configurations:**

| Mode | How It Works | Pros/Cons |
|------|--------------|-----------|
| Keyboard wedge | Acts as keyboard | Universal but basic |
| Serial (COM port) | RS-232 connection | Legacy systems |
| USB HID | USB keyboard emulation | Like keyboard wedge over USB |
| Dedicated driver | Custom software interface | Full features but specific apps |

**Why keyboard wedge is popular:** No driver needed, works with any application, data goes wherever cursor is, plug-and-play deployment, easy to replace scanners.

---

### Activity F: Biometric Devices

**Biometric types:**

| Type | What It Reads | Accuracy | Common Use |
|------|---------------|----------|------------|
| Fingerprint | Finger ridge patterns | High | Phones, laptops, access |
| Facial recognition | Face geometry | Moderate-High | Phones, laptops |
| Iris scanner | Iris patterns | Very high | High security |
| Retina scanner | Blood vessel pattern | Highest | Military, high security |
| Voice recognition | Voice patterns | Moderate | Phone systems |
| Palm vein | Vein patterns | Very high | Healthcare, banking |

**Fingerprint scanner types:**

| Technology | How It Works | Pros/Cons |
|------------|--------------|-----------|
| Optical | Camera images fingerprint | Cheap but can be fooled by photos |
| Capacitive | Measures electrical patterns | Secure, can't fool with image |
| Ultrasonic | Sound waves map ridges | Most secure, works through screen |

**Biometric considerations:**

| Factor | Consideration |
|--------|---------------|
| False acceptance rate (FAR) | Letting wrong person in - security risk |
| False rejection rate (FRR) | Rejecting valid user - usability issue |
| Enrollment process | Must register biometric initially |
| Environmental factors | Dirty fingers, lighting, etc. |
| Privacy concerns | Biometric data storage security |

**Windows Hello compatible devices:**

| Device Type | Requirements |
|-------------|--------------|
| Fingerprint reader | Windows Biometric Framework compatible |
| IR camera (face) | Infrared camera, specific depth sensing |
| PIN/Password fallback | Always required as backup |

---

### Activity G: Webcams and Microphones

**Webcam specifications:**

| Specification | What It Means | Typical Values |
|---------------|---------------|----------------|
| Resolution | Pixel count | 720p, 1080p, 4K |
| Frame rate | Frames per second | 30fps, 60fps |
| Field of view | Viewing angle | 65-90 degrees |
| Autofocus | Automatic focus adjustment | Fixed or auto |
| Low-light performance | Quality in dim lighting | Varies widely |

**Webcam features:**

| Feature | Purpose |
|---------|---------|
| Built-in microphone | Audio without separate mic |
| Privacy shutter | Physical lens cover |
| Ring light | Built-in illumination |
| Auto-framing | Keeps face centered |
| Background blur | Software bokeh effect |

**Microphone types:**

| Type | Pickup Pattern | Best For |
|------|----------------|----------|
| Cardioid | Front-focused | Voice recording, streaming |
| Omnidirectional | All directions | Conferences, ambient |
| Bidirectional | Front and back | Interviews, two speakers |
| Shotgun | Narrow front focus | Film, distant subjects |

**Microphone connection types:**

| Connection | Quality | Use Case |
|------------|---------|----------|
| 3.5mm analog | Varies | Headsets, basic mics |
| USB | Good | Podcasting, streaming |
| XLR | Professional | Studios, professional audio |
| Bluetooth | Compressed | Wireless headsets |

**Audio specifications:**

| Specification | What It Means |
|---------------|---------------|
| Sample rate | Samples per second (44.1kHz, 48kHz) |
| Bit depth | Resolution of each sample (16-bit, 24-bit) |
| Frequency response | Range of frequencies captured (20Hz-20kHz) |
| Signal-to-noise ratio | Clean signal vs background noise (higher = better) |

---

### Activity H: Game Controllers and Specialty Input

**Game controller types:**

| Type | Description | Platform |
|------|-------------|----------|
| Gamepad | Dual analog sticks, buttons, triggers | Console, PC |
| Joystick | Single stick, buttons, throttle | Flight sims |
| Flight stick/HOTAS | Hands on throttle and stick | Flight sims |
| Racing wheel | Wheel, pedals, shifter | Racing sims |
| Arcade stick | Large buttons, joystick | Fighting games |

**Controller connection methods:**

| Method | Latency | Compatibility |
|--------|---------|---------------|
| USB wired | Lowest (<1ms) | Universal, most reliable |
| Proprietary wireless | Very low (1-4ms) | Xbox/PlayStation specific |
| Bluetooth | Moderate (5-15ms) | Cross-platform |
| 2.4GHz dongle | Low (~2ms) | PC gaming peripherals |

**Specialty input devices:**

| Device | Purpose | Industry |
|--------|---------|----------|
| Signature pad | Capture signatures | Retail, banking, legal |
| Drawing tablet | Pressure-sensitive pen input | Design, digital art |
| 3D mouse (SpaceMouse) | 6 degrees of freedom | CAD, 3D modeling |
| Foot pedals | Hands-free input | Transcription, gaming |
| MIDI controller | Music creation | Audio production |

**Drawing tablet types:**

| Type | Description | Price Range |
|------|-------------|-------------|
| Screenless tablet | Draw on pad, view on monitor | $50-500 |
| Pen display | Draw directly on screen | $200-3000 |
| Tablet computer | iPad/Surface with pen | $500-2000+ |

---

### Activity I: Audio Output Devices

**Speaker configurations:**

| Configuration | Channels | Components |
|---------------|----------|------------|
| 2.0 | Stereo | Left + Right speakers |
| 2.1 | Stereo + sub | L + R + Subwoofer |
| 5.1 | Surround | Front L/R, Center, Rear L/R, Sub |
| 7.1 | Full surround | 5.1 + Side L/R |

**Speaker connection types:**

| Connection | Description | Quality |
|------------|-------------|---------|
| 3.5mm analog | Standard headphone jack | Depends on DAC |
| RCA | Red/white stereo | Analog, good |
| Optical (TOSLINK) | Digital optical | Excellent, no interference |
| HDMI (ARC/eARC) | Audio return channel | Excellent, with video |
| USB | Digital, device processes | Good, driver dependent |
| Bluetooth | Wireless, compressed | Convenient, lossy |

**Headphone types:**

| Type | Description | Isolation |
|------|-------------|-----------|
| Over-ear (circumaural) | Pads surround ears | Good |
| On-ear (supra-aural) | Pads rest on ears | Moderate |
| In-ear (IEM) | Insert into ear canal | Excellent |
| Earbuds | Rest in outer ear | Poor |

**Headphone features:**

| Feature | Description |
|---------|-------------|
| Open-back vs closed-back | Open: Airy, soundstage. Closed: Isolation |
| Active Noise Cancellation (ANC) | Microphones cancel external noise |
| Wireless vs wired | Convenience vs quality/latency |
| Gaming headset (mic included) | Integrated mic for gaming/calls |
| Virtual surround | Software simulates 7.1 on stereo |

---

### Activity J: Legacy and Specialty Connections

**Legacy connection types:**

| Connection | Pins | Speed | Original Use |
|------------|------|-------|--------------|
| PS/2 (keyboard) | 6-pin Mini-DIN | N/A | Keyboards |
| PS/2 (mouse) | 6-pin Mini-DIN | N/A | Mice |
| Serial (RS-232) | 9 or 25 pin | 115 Kbps | Modems, terminals |
| Parallel (IEEE 1284) | 25 pin | 2 MBps | Printers |
| SCSI | 50/68 pin | Up to 320 MBps | Storage, scanners |

**PS/2 characteristics:**

| Feature | Description |
|---------|-------------|
| Hot-pluggable? | No - can damage motherboard |
| Power from port? | Yes, +5V |
| N-key rollover? | Yes, true NKRO |
| Color coding | Purple = Keyboard, Green = Mouse |

**Serial port today:**

| Still Used For | Why |
|----------------|-----|
| Network equipment (routers, switches) | Console management |
| Industrial equipment | Legacy compatibility |
| Embedded systems | Simple, reliable |
| Point of sale | Legacy hardware |

**Adapters for legacy devices:**

| Legacy Port | Modern Solution | Limitations |
|-------------|-----------------|-------------|
| PS/2 → USB | Active adapter | May lose NKRO, slight latency |
| Serial → USB | USB serial adapter | Driver needed, virtual COM port |
| Parallel → USB | USB parallel adapter | Printer may need specific drivers |

---

### Activity K: Wireless Technologies

**Wireless comparison:**

| Technology | Frequency | Range | Latency | Battery Impact |
|------------|-----------|-------|---------|----------------|
| Bluetooth 4.0 | 2.4 GHz | ~10m | 40-100ms | Moderate |
| Bluetooth 5.0 | 2.4 GHz | ~40m | 30-50ms | Low |
| Bluetooth LE | 2.4 GHz | ~10m | Varies | Very low |
| 2.4GHz proprietary | 2.4 GHz | ~10m | 1-4ms | Higher |
| RF (older) | 27/433 MHz | ~3m | Higher | High |

**Bluetooth profiles:**

| Profile | Purpose |
|---------|---------|
| HID | Human Interface Devices (keyboard, mouse) |
| A2DP | Advanced Audio Distribution (stereo audio) |
| HSP/HFP | Headset/Hands-Free (calls) |
| AVRCP | Audio/Video Remote Control (media controls) |

**When to use Bluetooth vs 2.4GHz dongle:**

| Scenario | Best Choice | Why |
|----------|-------------|-----|
| Gaming mouse | 2.4GHz dongle | Lowest latency |
| Office mouse | Bluetooth | No dongle, clean setup |
| Connecting to phone | Bluetooth | Phone has no USB-A port |
| Multiple devices | Bluetooth | Can pair with many devices |
| Minimal lag needed | 2.4GHz dongle | 1-2ms vs 20-40ms |

**Wireless interference sources:**

| Source | Frequency | Effect |
|--------|-----------|--------|
| Wi-Fi | 2.4/5 GHz | Competes with Bluetooth/2.4GHz |
| Microwave oven | 2.4 GHz | Major interference |
| Other Bluetooth | 2.4 GHz | Signal congestion |
| USB 3.0 | 2.4 GHz | Electrical noise |
| Cordless phones | 2.4 GHz | Signal overlap |

---

### Activity L: Peripheral Troubleshooting

**General troubleshooting steps:**

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Try different USB port | Rule out port issue |
| 2 | Test on another computer | Rule out device failure |
| 3 | Check Device Manager | Driver issues |
| 4 | Update/reinstall drivers | Fix software issues |
| 5 | Check for physical damage | Rule out hardware failure |

**Device Manager indicators:**

| Symbol | Meaning | Action |
|--------|---------|--------|
| Yellow exclamation | Driver problem | Update/reinstall driver |
| Red X | Disabled device | Right-click → Enable |
| Down arrow | Disabled by user | Right-click → Enable |
| Question mark | Unknown device | Install proper driver |

**Keyboard issues:**

| Symptom | Possible Cause | Solution |
|---------|----------------|----------|
| Keys not registering | Driver, hardware failure | Reinstall driver, test elsewhere |
| Wrong characters | Language/layout setting | Change keyboard layout in Windows |
| Sticky keys | Physical debris, software | Clean keyboard, check Accessibility |
| Wireless not connecting | Battery, receiver, pairing | Replace battery, re-pair, check receiver |

**Mouse issues:**

| Symptom | Possible Cause | Solution |
|---------|----------------|----------|
| Cursor jumping | Surface, driver, interference | Try mousepad, update driver |
| Double-clicking | Switch wear, driver | Adjust click speed, replace switch/mouse |
| Not tracking | Dirty sensor, surface | Clean sensor, use mousepad |
| Lag/stuttering | Wireless interference, USB power | Check interference, powered hub |

**USB device issues:**

| Symptom | Possible Cause | Solution |
|---------|----------------|----------|
| Not recognized | Driver, cable, port | Try different port/cable, update driver |
| Intermittent disconnect | Power management, bad cable | Disable USB suspend, replace cable |
| "Power surge" warning | Device draws too much power | Use powered hub |
| Slow transfer | Wrong port version, cable | Use USB 3.0 port and cable |

---

### Activity M: Peripheral Selection Scenarios

**Scenario 1: Office Workstation**

- **Keyboard:** Quiet membrane or rubber dome keyboard with low-profile keys
- **Mouse:** Ergonomic wired or Bluetooth mouse with adjustable DPI
- **Why:** Quiet for shared space, comfortable for long use, reliable, within budget

**Scenario 2: Competitive Gamer**

- **Keyboard:** Mechanical keyboard with linear switches (Red/Speed), wired
- **Mouse:** Lightweight wired or 2.4GHz wireless gaming mouse with high polling rate
- **Headset:** Wired gaming headset with clear mic and positional audio
- **Why:** Lowest latency for competitive advantage, precision and reliability

**Scenario 3: Point of Sale System**

- **Scanner type:** 2D area imager (handles all barcode types)
- **Connection mode:** Keyboard wedge (USB HID)
- **Why:** Works with any POS software, no driver hassles, reads QR codes and damaged barcodes, easy replacement

**Scenario 4: Accessibility Setup**

- **Pointing device:** Vertical mouse or trackball
- **Additional accommodations:** Large-print keyboard, adjustable keyboard tray, voice control software
- **Why:** Vertical mouse reduces wrist strain, trackball eliminates arm movement, large print aids visibility

---

## Section 3: Reflection Scenarios

### Scenario 1: Works in BIOS Not Windows
**A user's USB keyboard works in BIOS but not in Windows. What does this tell you about the problem, and how would you fix it?**

**What this tells you:**
- Hardware is fine (works in BIOS)
- USB port is fine (BIOS can see it)
- Problem is Windows-specific (driver or software)

**The issue:** Windows USB driver problem, not hardware.

**Solutions:**
1. Boot to Safe Mode - if works, driver conflict
2. Uninstall USB keyboard driver in Device Manager, reboot to reinstall
3. Uninstall recent software that might conflict
4. Check if USB controller driver needs updating
5. Try System Restore to before issue started
6. Check for Windows Update that caused issue

---

### Scenario 2: Bluetooth Mouse Disconnects
**A customer complains their Bluetooth mouse keeps disconnecting every few seconds, but their Bluetooth headphones work fine on the same computer. What could cause this?**

**Possible causes:**

1. **Mouse-specific issue:**
   - Low battery (affects mouse more than headphones)
   - Mouse Bluetooth chipset lower quality
   - Mouse firmware bug

2. **Bluetooth power management:**
   - Windows puts mouse to sleep but not audio device
   - Different power profiles for different device types

3. **Interference:**
   - Mouse closer to interference source
   - Mouse uses different Bluetooth profile (HID vs A2DP)

4. **Driver issue:**
   - Mouse driver problem
   - HID drivers different from audio drivers

**Solutions:**
1. Replace mouse batteries
2. Disable Bluetooth power management for mouse
3. Update mouse firmware
4. Remove and re-pair mouse
5. Try mouse closer to computer
6. Check for USB 3.0 interference (use USB 2.0 port for Bluetooth adapter)

---

### Scenario 3: Slow Document Scanning
**An employee needs to scan hundreds of documents daily. They currently use a flatbed scanner and it takes forever. What would you recommend and why?**

**Recommendation:** Sheet-fed scanner with ADF (Automatic Document Feeder)

**Why:**
- **Flatbed limitations:** One page at a time, manual placement, slow
- **ADF advantages:**
  - Load 50-100+ pages at once
  - Automatic feeding
  - Duplex (both sides) scanning
  - 30-60+ pages per minute
  - Unattended batch scanning

**Specific features to look for:**
- ADF capacity (50+ sheets minimum)
- Duplex scanning (both sides automatically)
- High ppm rating
- Good paper handling for mixed sizes
- OCR software included

**ROI:** Time saved = massive productivity gain. A good ADF scanner pays for itself quickly.

---

### Scenario 4: Wireless Mouse Gaming Lag
**A gamer is experiencing input lag with their wireless mouse during competitive play. They're using Bluetooth on a laptop with Wi-Fi. What changes would help?**

**The problem:** Bluetooth mouse on 2.4GHz-congested laptop

**Issues:**
1. Bluetooth has inherent latency (20-40ms vs 1-2ms)
2. Laptop Wi-Fi on 2.4GHz causes interference
3. Bluetooth shares 2.4GHz spectrum with Wi-Fi

**Solutions (in order of effectiveness):**
1. **Switch to 2.4GHz gaming mouse with dongle** - Biggest improvement
2. **Use wired mouse** - Zero wireless latency
3. **Switch laptop Wi-Fi to 5GHz only** - Reduces 2.4GHz congestion
4. **Use USB extension for Bluetooth/dongle** - Get adapter away from laptop
5. **Close other Bluetooth devices** - Reduce Bluetooth traffic

**Bottom line:** For competitive gaming, never use Bluetooth. Use wired or 2.4GHz proprietary wireless with dedicated dongle.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              PERIPHERAL DEVICES QUICK REFERENCE                ║
╠═══════════════════════════════════════════════════════════════╣
║  USB SPEEDS:                                                   ║
║  USB 2.0: 480 Mbps | USB 3.0: 5 Gbps | USB 3.1 Gen 2: 10 Gbps║
║  USB 3.2 Gen 2x2: 20 Gbps | USB4: 40 Gbps                     ║
╠═══════════════════════════════════════════════════════════════╣
║  USB COLORS (common): Black=2.0 | Blue=3.0 | Teal=3.1/3.2    ║
║  Red/Yellow=Always-on charging                                 ║
╠═══════════════════════════════════════════════════════════════╣
║  PS/2 PORTS: Purple=Keyboard | Green=Mouse | NOT hot-pluggable║
╠═══════════════════════════════════════════════════════════════╣
║  WIRELESS: 2.4GHz dongle = lowest latency (gaming)            ║
║            Bluetooth = convenience, multi-device               ║
╠═══════════════════════════════════════════════════════════════╣
║  MOUSE: DPI=sensitivity | Polling rate=report speed (Hz)      ║
╠═══════════════════════════════════════════════════════════════╣
║  SCANNER: Optical DPI=real quality | Interpolated=marketing   ║
╠═══════════════════════════════════════════════════════════════╣
║  BARCODE: Keyboard wedge=works anywhere, no driver needed     ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 25 Solution Guide: Peripheral Devices*