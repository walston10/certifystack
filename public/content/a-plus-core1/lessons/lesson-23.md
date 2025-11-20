# Lesson 23: Expansion Cards

**Estimated Time:** 25-30 minutes  
**Domain:** Hardware (Domain 3.0 - 25% of exam)  
**Exam Objectives Covered:** 3.4 - Given a scenario, install and configure motherboards, CPUs, and add-on cards

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Identify PCIe slot types (x1, x4, x8, x16) and their bandwidth capabilities
- Compare discrete graphics cards versus integrated graphics and their use cases
- Install graphics cards with proper power connections and mounting
- Explain the purpose of sound cards, network interface cards, and storage controllers
- Understand specialized expansion cards including capture cards and TV tuners
- Configure expansion cards including driver installation and BIOS settings
- Troubleshoot common expansion card issues and conflicts

---

## Video Resources

- **Professor Messer:** "Installing Expansion Cards" - [CompTIA A+ 220-1101](https://www.youtube.com/watch?v=bQnWtE45yX8)
- **Linus Tech Tips:** "How to Install a Graphics Card" - [GPU Installation](https://www.youtube.com/watch?v=nyDxrTHDjXQ)
- **JayzTwoCents:** "PCIe Lanes Explained" - [PCIe Slots](https://www.youtube.com/watch?v=PrXwe21biJo)
- **GamersNexus:** "When You Need a Sound Card" - [Audio Cards](https://www.youtube.com/watch?v=SFBvvlebSmw)

---

## Introduction

Your friend excitedly calls. "I just bought a gaming graphics card! Can you help me install it?" You arrive to find they've purchased a high-end GPU that requires two 8-pin power connectors and occupies three expansion slots. Their computer is a compact office PC with a 300-watt power supply and only one full-size PCIe slot. The card physically won't fit, and even if it did, the power supply couldn't handle it.

This scenario happens constantly. Expansion cards offer incredible versatility—they let you customize computers for specific needs, upgrade capabilities without replacing entire systems, and adapt to changing requirements. But they also introduce compatibility challenges. Not all slots are created equal. Power requirements vary dramatically. Physical space constraints matter. Driver configurations can be tricky.

Modern motherboards integrate many features that once required expansion cards. Ethernet networking is built-in. Audio comes standard. Some CPUs include graphics processors. Yet expansion cards remain relevant. Gamers need dedicated graphics cards. Audio professionals want high-quality sound cards. Network administrators install 10-gigabit NICs. Content creators add video capture cards.

Understanding expansion cards means knowing more than just installation procedures. You need to identify slot types and their capabilities, match cards to power supply capacity, verify physical clearances, navigate driver installations, and troubleshoot conflicts. Whether you're building a gaming rig, upgrading a workstation, or diagnosing why a newly installed card isn't recognized, understanding expansion cards is essential.

In this lesson, we'll explore PCIe architecture and slot types, examine graphics cards in depth, discuss network and sound cards, cover specialized expansion cards, and learn proper installation and configuration procedures.

---

## PCIe Slots: The Foundation

PCI Express (PCIe) dominates modern expansion. Understanding PCIe slots—their types, speeds, and capabilities—is fundamental to working with expansion cards.

### PCIe Architecture

PCIe uses point-to-point serial connections called lanes. Each lane provides dedicated bandwidth in both directions simultaneously (full duplex). Unlike older PCI slots that shared bandwidth across all devices, each PCIe device gets dedicated lanes.

Think of lanes as highway lanes. One lane handles a certain amount of traffic. More lanes mean more traffic capacity. PCIe slots come in different sizes with different lane counts: x1, x4, x8, and x16 (pronounced "by one," "by four," etc.).

### Slot Types and Speeds

**PCIe x1** - The smallest slot, about one inch long. Provides one lane of bandwidth. Commonly used for basic expansion cards like sound cards, low-profile network cards, or USB expansion cards. Current PCIe 3.0 x1 provides roughly 1 GB/s bandwidth, which is plenty for these applications.

**PCIe x4** - Larger slot with four lanes. Less common on consumer motherboards but found on workstation boards. Some M.2 adapters use x4 slots. Provides approximately 4 GB/s with PCIe 3.0.

**PCIe x8** - Eight lanes of bandwidth. Uncommon on consumer boards but standard on servers and high-end workstations. Often used for RAID controllers, high-speed network cards, or additional M.2 adapters. Provides roughly 8 GB/s.

**PCIe x16** - The longest slot, used primarily for graphics cards. Provides 16 lanes and approximately 16 GB/s bandwidth with PCIe 3.0. Most motherboards have one or two x16 slots. The slot closest to the CPU typically gets the full 16 lanes; secondary slots might run at x8 or x4 depending on the motherboard.

### Physical vs Electrical

Here's where it gets interesting: physical slot size doesn't always match electrical connections. A motherboard might have a physically x16 slot that only provides x4 electrical connections. Cards fit in the slot, but bandwidth is limited to x4 speeds.

Most graphics cards require full x16 electrical connections for optimal performance. Installing a high-end GPU in an x16 physical slot with only x4 electrical connections creates a bottleneck—the GPU can't achieve its full potential.

Motherboard specifications indicate electrical connections. A board might list "1x PCIe 3.0 x16, 2x PCIe 3.0 x16 (x4 mode)" indicating the first slot provides full x16, while the other two are physically x16 but electrically x4.

### PCIe Generations

PCIe has evolved through multiple generations, doubling bandwidth with each:

- **PCIe 2.0** - ~500 MB/s per lane (8 GB/s for x16)
- **PCIe 3.0** - ~1 GB/s per lane (16 GB/s for x16) 
- **PCIe 4.0** - ~2 GB/s per lane (32 GB/s for x16)
- **PCIe 5.0** - ~4 GB/s per lane (64 GB/s for x16)

Cards are backward and forward compatible—you can install a PCIe 4.0 card in a PCIe 3.0 slot and vice versa. The connection negotiates to the lower generation, so a PCIe 4.0 card in a 3.0 slot runs at PCIe 3.0 speeds.

For most cards, generation matters less than you'd think. Even high-end graphics cards rarely saturate PCIe 3.0 x16 bandwidth. Where generation matters: NVMe SSDs (PCIe 4.0 drives significantly outperform 3.0), high-end GPUs doing machine learning or 3D rendering, and professional capture cards handling multiple 4K streams.

---

## Graphics Cards: The Performance Kings

Graphics cards (GPUs) are the most common and often most expensive expansion cards. They render graphics for games, accelerate video editing, power machine learning, and drive multiple high-resolution displays.

### Discrete vs Integrated Graphics

Many CPUs include integrated graphics processors—sufficient for office work, web browsing, and video playback. They share system RAM rather than having dedicated video memory (VRAM). They consume less power and generate less heat. For many users, integrated graphics are perfectly adequate.

Discrete graphics cards are separate add-in cards with their own processors, memory, and cooling systems. They provide dramatically higher performance for gaming, video editing, 3D rendering, and other GPU-intensive tasks. They consume significant power and generate substantial heat, requiring robust cooling.

When do you need a discrete GPU? Gaming at anything beyond low settings requires it. Video editing in 4K or higher benefits substantially. 3D modeling and rendering demand it. Machine learning and AI development leverage GPU compute power. Cryptocurrency mining (though less profitable now) used GPUs. Multi-monitor setups with 4+ displays often need discrete graphics.

When is integrated sufficient? Office productivity, web browsing, email, video streaming, casual photo editing, and basic programming all work fine with integrated graphics. Many businesses deliberately choose systems without discrete GPUs to reduce power consumption, heat generation, and cost.

### GPU Specifications

**VRAM** - Video RAM stores textures, frame buffers, and rendering data. More VRAM allows higher resolution textures and supports higher display resolutions. Modern games at 1080p need 4-6GB VRAM. 1440p gaming wants 6-8GB. 4K gaming benefits from 8-12GB or more. Professional 3D work might need 12-24GB for complex scenes.

**Clock Speeds** - GPU core and memory clock speeds affect performance. Higher clocks generally mean better performance, though architectural improvements matter more than raw clock speed when comparing across different GPU families.

**CUDA Cores / Stream Processors** - These are processing units within the GPU. NVIDIA calls them CUDA cores; AMD calls them stream processors. More cores generally mean better performance, though comparing across different architectures isn't straightforward.

**Power Consumption (TDP)** - High-end graphics cards consume 250-450 watts under load. Your power supply must handle this plus all other system components. Insufficient power causes crashes, stuttering, or the system not booting.

### Display Outputs

Modern graphics cards offer multiple display outputs:

**HDMI** - Common on consumer cards. HDMI 2.0 supports 4K at 60Hz. HDMI 2.1 supports 4K at 120Hz and 8K at 60Hz.

**DisplayPort** - Preferred for gaming and high-refresh displays. DisplayPort 1.4 supports 4K at 120Hz or 8K at 60Hz. DisplayPort 2.0 (newer) supports even higher resolutions and refresh rates.

**DVI** - Legacy connector found on older cards and monitors. Digital signal but lower bandwidth than HDMI or DisplayPort. Being phased out on new cards.

**VGA** - Analog connector, essentially dead on modern cards. If you need VGA for an old monitor, use an active HDMI or DisplayPort to VGA adapter.

Most cards support three to four simultaneous displays. Some professional cards support six or more. You can mix output types—HDMI monitor, DisplayPort monitor, and DVI monitor all connected simultaneously.

### Installation Procedures

Installing a graphics card requires attention to several factors. First, verify your power supply has sufficient wattage and the correct power connectors. Entry-level cards draw power entirely from the PCIe slot (75 watts maximum). Mid-range cards need one 6-pin or 8-pin PCIe power connector. High-end cards need two or three 8-pin connectors.

Open the case and locate the primary PCIe x16 slot—typically the first slot near the CPU. Remove the corresponding expansion slot covers on the case rear. Modern GPUs occupy two or three slots even though they only plug into one slot, because the cooler extends beyond the PCIe card dimensions.

Remove the old GPU if replacing one. Unplug power connectors and press the retention clip on the PCIe slot to release the card. Gently pull the card straight out.

Align the new GPU with the slot and press firmly. You should hear and feel the retention clip engage. Secure the card's mounting bracket to the case with screws. Connect required PCIe power cables from the power supply. The connectors are keyed—6-pin and 8-pin connectors won't interchange.

Connect your monitor to the new GPU's outputs, not the motherboard's outputs. Many builders forget this and wonder why their new GPU isn't providing performance improvements—they're still using integrated graphics because the monitor connects to the motherboard.

Boot the system and install drivers. NVIDIA cards use GeForce Experience; AMD cards use Adrenalin software. Download drivers from the manufacturer's website rather than using whatever comes on included discs—disc drivers are outdated before the card ships.

---

## Sound Cards and Audio Interfaces

Motherboards include integrated audio—typically adequate for most users. Sound cards provide higher quality, lower latency, or specialized features for audio professionals and enthusiasts.

### When Sound Cards Matter

For typical users listening to music, watching videos, or gaming casually, integrated audio works fine. Modern motherboard audio uses quality DACs (Digital-to-Analog Converters) and support for surround sound formats.

Sound cards make sense for: audio production where low-latency monitoring matters, high-impedance studio headphones that need more power than motherboard audio provides, surround sound systems where you want optical or coaxial digital outputs, audiophiles with high-end speakers who want premium DACs, and gamers seeking competitive advantages from enhanced positional audio.

### Sound Card Features

**Signal-to-Noise Ratio (SNR)** - Measures audio quality. Higher is better. Integrated audio typically achieves 100-110 dB SNR. Sound cards reach 115-124 dB SNR. The difference is subtle unless you have high-quality speakers or headphones and listen carefully in quiet environments.

**Sample Rate and Bit Depth** - CD quality is 44.1kHz at 16-bit. Sound cards support up to 192kHz at 24-bit or even 32-bit. Higher rates matter for audio production but provide minimal perceptible benefit for playback.

**Surround Sound** - Cards support various surround formats (5.1, 7.1) via analog outputs or digital connections (optical, coaxial) that pass encoded audio to receivers.

**Headphone Amplifiers** - Some sound cards include amplifiers capable of driving high-impedance studio headphones (250-600 ohms) that sound weak or thin on standard outputs.

**Low Latency** - Dedicated sound cards often provide lower latency ASIO drivers important for music production. Hearing yourself while recording with zero noticeable delay requires sub-10ms latency.

### External Audio Interfaces

Many audio professionals skip internal sound cards entirely, using external USB or Thunderbolt audio interfaces instead. These provide similar quality without being inside the electrically noisy computer case, offer convenient front-panel access to inputs and knobs, and work with multiple computers.

External interfaces make sense for podcasters, musicians recording at home, video editors who need multiple audio channels, and anyone who needs professional XLR microphone inputs rather than basic 3.5mm jacks.

---

## Network Interface Cards (NICs)

Most motherboards include Gigabit Ethernet (1 Gbps). Network interface cards add faster speeds, additional ports, wireless connectivity, or specialized protocols.

### When You Need a NIC

**10 Gigabit Ethernet** - Workstations editing video over network storage benefit from 10GbE. It's expensive (cards cost $100-400) and requires 10GbE switches and cabling, but provides ten times Gigabit speeds.

**Wi-Fi** - Desktop motherboards often lack wireless. Adding a PCIe Wi-Fi card provides connectivity without running Ethernet cables. Modern cards support Wi-Fi 6/6E and Bluetooth.

**Additional Ports** - Servers might need multiple Gigabit ports for link aggregation or separating network traffic. Dual or quad-port NICs provide this.

**Specialized Protocols** - Some industrial or scientific applications need fiber optic connections or specialized protocols that require dedicated NICs.

### NIC Installation

Network cards typically use PCIe x1 or x4 slots. Installation follows standard expansion card procedures—align the card with the slot, press firmly until the retention clip engages, secure with screw, and install drivers.

Wi-Fi cards include antennas that screw onto connectors on the card's mounting bracket. Position antennas perpendicular to each other for best reception. Some enthusiasts route antenna cables to the top or rear of the case for improved signal.

After installation, configure network settings in Windows. Wired NICs usually work immediately with DHCP. Wi-Fi requires selecting the network and entering credentials.

---

## Storage Controller Cards

SATA ports on motherboards handle most users' storage needs. Storage controller cards add more ports, enable RAID configurations, or provide faster interfaces.

### RAID Controllers

RAID (Redundant Array of Independent Disks) combines multiple drives for performance, redundancy, or both. Some motherboards support basic RAID via chipset features. Dedicated RAID controller cards provide better performance and more sophisticated RAID levels.

**Hardware RAID** - The controller card handles all RAID processing. It presents the operating system with a single logical drive regardless of how many physical drives comprise the array. This offloads work from the CPU and provides consistent performance.

**RAID Levels** - RAID 0 (striping for performance), RAID 1 (mirroring for redundancy), RAID 5 (distributed parity), RAID 6 (double parity), RAID 10 (striped mirrors). Controller cards support various levels depending on the model.

**Battery Backup** - High-end RAID controllers include battery-backed cache. If power fails during writes, the battery preserves cache contents until power returns, preventing data loss.

### Additional SATA/SAS Ports

Some users need more storage drives than motherboard SATA ports support. Adding a controller card provides 4-8 additional SATA ports. This is common in media servers storing large video libraries or NAS builds requiring many drives.

SAS (Serial Attached SCSI) controllers support enterprise SAS drives in addition to SATA. SAS drives offer higher reliability and performance than consumer SATA drives but cost more.

### M.2 Adapter Cards

Motherboards typically have one to three M.2 slots. If you need more M.2 SSDs, adapter cards convert PCIe slots into M.2 slots. These cards occupy a PCIe x16 or x8 slot but only use x4 lanes per M.2 drive. A dual-M.2 adapter needs x8 lanes; a quad-M.2 adapter needs x16.

---

## Specialized Expansion Cards

Beyond the common categories, numerous specialized cards serve specific purposes.

### Capture Cards

Capture cards record video from external sources—game consoles, cameras, or other computers. Streamers use them to capture gameplay from consoles. Content creators capture camera feeds. Video production uses them for live switching between multiple sources.

**Internal Capture Cards** - Install in PCIe slots and accept HDMI or SDI inputs. High-end cards support 4K at 60fps capture with minimal latency. They often include hardware encoding to reduce CPU load during recording.

**USB Capture Devices** - External alternatives to internal cards. More portable but sometimes introduce more latency or offer lower quality than PCIe cards.

Capture cards have pass-through outputs that send video to displays without lag, letting gamers play normally while the card records.

### TV Tuner Cards

TV tuner cards receive over-the-air television broadcasts or cable signals, turning computers into DVRs. They've declined in popularity as streaming replaced traditional TV, but some users still prefer them for local channels.

Cards include tuners for ATSC (over-the-air digital), QAM (cable), or both. Software records shows, manages schedules, and provides DVR functionality.

### USB Expansion Cards

Some systems need more USB ports than the motherboard provides. USB expansion cards add 4-7 USB ports using a single PCIe slot. They're useful for systems with many peripherals.

High-quality USB cards use dedicated controllers per port for consistent performance. Cheap cards share single controllers across all ports, causing bandwidth contention when multiple devices transfer simultaneously.

---

## Real-World Troubleshooting Scenarios

### Scenario 1: Graphics Card Not Detected

A customer installs a new graphics card, but Windows doesn't recognize it. The system boots to integrated graphics. Device Manager shows no discrete GPU.

You verify the card is fully seated in the PCIe slot—pressing until you hear the retention clip engage. You check that PCIe power cables are connected firmly. You confirm the monitor connects to the GPU's outputs, not the motherboard.

Checking BIOS reveals the problem: the PCIe slot is disabled in BIOS settings. Some motherboards let you disable individual PCIe slots to save power or resolve conflicts. Enabling the slot and saving BIOS settings resolves the issue. The GPU appears in Device Manager and functions normally.

This demonstrates the importance of checking BIOS settings when expansion cards aren't detected. Not all issues are physical—sometimes configuration prevents detection.

### Scenario 2: System Crashes Under GPU Load

A gaming system crashes during intensive games but runs stable during normal use. The crashes show no blue screen—the system simply powers off instantly.

You monitor temperatures and find the GPU stays within safe ranges. Investigating power consumption reveals the issue: the system has a 500-watt power supply, but the graphics card alone consumes 350 watts at full load. Adding the CPU (95W), motherboard, RAM, and storage exceeds 500 watts.

Under light loads, power consumption stays within limits. Gaming pushes the GPU to full power draw, exceeding the PSU's capacity. The system crashes as protection against overloading the power supply.

Upgrading to a 750-watt power supply resolves the crashes. This illustrates why verifying power supply capacity before installing high-end graphics cards is critical.

### Scenario 3: No Audio After Sound Card Installation

A user installs a sound card for better audio quality. After installation, they get no sound from any source. Device Manager shows the card without errors.

You check Windows sound settings and discover the default playback device is still the motherboard audio, which is disabled in BIOS (they disabled it to force use of the sound card). Windows defaults to a disabled device, resulting in no audio.

Setting the sound card as the default playback device in Windows Sound settings immediately restores audio. This scenario shows that detecting a card doesn't mean Windows automatically uses it—default audio devices must be configured manually.

---

## Key Exam Tips

🎯 **PCIe Slot Types:** x1, x4, x8, x16 indicate lane counts. Graphics cards use x16 slots. Smaller cards (sound, NIC) use x1 or x4. Physical size doesn't always match electrical connections.

🎯 **PCIe Compatibility:** Cards are backward/forward compatible across generations. A PCIe 4.0 card works in a 3.0 slot (at 3.0 speeds). A 3.0 card works in a 4.0 slot.

🎯 **GPU Power Requirements:** Entry-level GPUs draw power from PCIe slot only. Mid-range need 6-pin or 8-pin PCIe power. High-end need two or three 8-pin connectors.

🎯 **Integrated vs Discrete Graphics:** Integrated graphics built into CPU, shares RAM, adequate for office work. Discrete cards have dedicated VRAM, much faster, required for gaming/professional work.

🎯 **Display Outputs:** HDMI (consumer standard), DisplayPort (gaming/high-refresh), DVI (legacy), VGA (obsolete). Always connect monitor to GPU outputs, not motherboard.

🎯 **Installation Sequence:** Power off, remove slot covers, seat card firmly until retention clip engages, secure mounting bracket with screw, connect power (if needed), boot and install drivers.

⚠️ **Physical Clearance:** High-end GPUs occupy 2-3 expansion slots. Verify case has clearance before purchasing. Measure card length against case specifications.

🎯 **Driver Installation:** Always install drivers after installing hardware. Download latest drivers from manufacturer website, not included discs.

💡 **BIOS Settings:** Some motherboards require enabling PCIe slots or disabling integrated graphics in BIOS before discrete cards function properly.

🎯 **Sound Card Necessity:** Integrated audio is sufficient for most users. Sound cards benefit audio production, high-impedance headphones, audiophile setups, or competitive gaming.

---

## Key Takeaways

- [ ] PCIe slots come in x1, x4, x8, and x16 sizes indicating lane counts and bandwidth
- [ ] PCIe generations (2.0, 3.0, 4.0, 5.0) double bandwidth with each generation
- [ ] Cards are backward/forward compatible across PCIe generations
- [ ] Graphics cards require PCIe x16 slots and often need 6-pin or 8-pin power connectors
- [ ] Integrated graphics share system RAM; discrete GPUs have dedicated VRAM and higher performance
- [ ] VRAM capacity affects maximum texture resolution and display resolutions—more for higher res gaming
- [ ] Modern GPUs output to HDMI, DisplayPort, and sometimes DVI—always connect monitors to GPU not motherboard
- [ ] Sound cards provide better quality than integrated audio but aren't necessary for typical users
- [ ] Network interface cards add 10GbE speeds, Wi-Fi connectivity, or additional Ethernet ports
- [ ] RAID controllers enable hardware RAID configurations across multiple drives
- [ ] Capture cards record video from external sources for streaming and content creation
- [ ] Installation requires ensuring card is fully seated, retention clip engaged, and mounting bracket secured
- [ ] Power supply must handle total system power consumption including GPU under full load
- [ ] Driver installation is required after hardware installation—download latest from manufacturer
- [ ] BIOS settings sometimes require enabling PCIe slots or disabling integrated graphics

---

## Check Your Understanding

**1. A customer wants to install a graphics card that requires two 8-pin PCIe power connectors. Their power supply only has one 8-pin and one 6-pin connector. What should you advise?**

<details>
<summary>Show Answer</summary>
<strong>Recommend upgrading the power supply to one with sufficient 8-pin PCIe power connectors—do NOT use adapters or splitters as they can cause instability or fire hazards.</strong> High-end graphics cards specify two 8-pin connectors because they draw substantial power under load (often 300-400 watts). Using 6-pin to 8-pin adapters or splitters can overload cables not designed for that current draw, causing voltage drops, system crashes, or in worst cases, overheating cables and potential fire risks. The 6-pin connector is rated for 75 watts; an 8-pin for 150 watts. If the card needs two 8-pin connectors, it potentially draws 300+ watts via those cables alone (plus 75W through the PCIe slot). A power supply lacking the proper connectors likely also lacks sufficient wattage capacity—if it had enough capacity, it would include appropriate connectors. Calculate the total system power requirements: GPU power draw (check specifications) plus CPU TDP plus 100-150W for other components. If this exceeds 80% of PSU capacity, upgrade to a higher-wattage unit (750W or more for high-end GPUs). Quality power supplies from reputable manufacturers include the PCIe connectors that match their wattage rating.
</details>

**2. After installing a new graphics card, the system boots but displays nothing on screen. The GPU fans spin. What are the most likely causes and solutions?**

<details>
<summary>Show Answer</summary>
<strong>Most likely: monitor is connected to motherboard instead of GPU, GPU isn't fully seated, or PCIe power cables aren't connected. Check these in order.</strong> When GPU fans spin but there's no display, the card is receiving power through the PCIe slot but something prevents proper operation. First, verify the monitor connects to the GPU's outputs (HDMI/DisplayPort on the card itself) not the motherboard's outputs. This is the most common mistake—people connect to the familiar motherboard port they used before. Second, reseat the GPU. Power off, remove the card, and reinstall it, pressing firmly until the retention clip audibly clicks. Partial seating causes intermittent or non-functional connections. Third, verify PCIe power cables are fully connected. Mid-range and high-end cards need 6-pin or 8-pin power cables in addition to slot power. Without these, cards may power on (fans spin) but not function. If these don't resolve it, try the GPU in a different PCIe slot if available, test the GPU in another system to rule out defective card, update motherboard BIOS (some boards need BIOS updates for newer GPUs), and check BIOS settings to ensure PCIe slots are enabled and integrated graphics are disabled or set to prioritize discrete GPU.
</details>

**3. A motherboard has three PCIe x16 physical slots. The manual states they operate at "x16, x8/x8, x8/x4/x4" depending on population. What does this mean for installing multiple graphics cards?**

<details>
<summary>Show Answer</summary>
<strong>With one GPU in slot 1, it runs at full x16 speed. With two GPUs (slots 1 and 2), each runs at x8. With three GPUs (all slots), they run at x8/x4/x4.</strong> This notation describes PCIe lane allocation. Modern CPUs provide a limited number of PCIe lanes (often 16-24 direct lanes plus additional chipset lanes). When you install one card, it gets all 16 lanes. Installing a second card splits available lanes—each gets 8 lanes. Installing three cards splits further—the first gets 8, the other two get 4 each. The physical slot size (x16) remains the same, but electrical connections change. For single GPU systems, this doesn't matter—use slot 1 for full x16 bandwidth. For dual GPU configurations, x8 per card rarely bottlenecks performance (most GPUs don't saturate x16 bandwidth anyway). For triple GPU, the x4 cards might show performance limitations in demanding scenarios. When installing multiple GPUs, consult the motherboard manual for optimal slot configuration. Some boards have specific slot combinations that enable different lane configurations. This also applies when mixing GPUs with other high-bandwidth cards like NVMe adapters or 10GbE NICs—all devices share the available PCIe lanes.
</details>

**4. A video editor asks whether they should install a sound card for better audio quality when editing videos. What factors determine whether this is beneficial?**

<details>
<summary>Show Answer</summary>
<strong>For video editing specifically, a sound card provides minimal benefit—focus budget on GPU, RAM, and storage instead. Sound cards matter more for audio production and playback.</strong> Video editing primarily needs accurate preview audio and proper synchronization—any decent audio interface accomplishes this, including motherboard integrated audio. Modern motherboard audio uses quality DACs with 100+ dB SNR, which is sufficient for editing work. Sound cards or external audio interfaces benefit: music production requiring low-latency ASIO drivers for real-time monitoring, high-impedance studio headphones (250-600 ohm) that sound weak on standard outputs, critical listening sessions for audio mixing/mastering where subtle quality differences matter, and surround sound mixing requiring multiple discrete outputs. For video editing, the bottlenecks are GPU acceleration for effects/rendering, RAM for timeline caching, and storage speed for reading/writing footage. A $200 sound card provides less value than investing that money in more RAM, a faster SSD, or a better GPU. If they're unsatisfied with audio quality during playback, a $100-150 external USB audio interface provides excellent quality, convenient front-panel access, and cleaner audio than internal cards (avoiding electrical noise from inside the PC).
</details>

**5. What's the difference between PCIe 3.0 x16 and PCIe 4.0 x8, and which provides better performance for a graphics card?**

<details>
<summary>Show Answer</summary>
<strong>PCIe 4.0 x8 provides the same bandwidth as PCIe 3.0 x16 (~16 GB/s), so performance is theoretically equivalent for graphics cards.</strong> PCIe 4.0 doubles bandwidth per lane compared to 3.0—each 4.0 lane provides ~2 GB/s versus ~1 GB/s for 3.0. Therefore, 8 lanes of PCIe 4.0 equals 16 lanes of PCIe 3.0 in raw bandwidth (8 × 2 = 16 GB/s). For graphics cards, this means a PCIe 4.0 card in an x8 slot shouldn't bottleneck differently than in a 3.0 x16 slot. However, practical considerations matter. Most high-end graphics cards don't fully saturate PCIe 3.0 x16 bandwidth during gaming—the bottleneck is usually GPU processing power, not PCIe bandwidth. Where PCIe generation matters more: extreme professional workloads like machine learning training, 3D rendering with massive texture sets, or GPU compute applications with heavy CPU-GPU data transfer. For gaming and typical consumer use, the difference between 3.0 x16 and 4.0 x8 is negligible. When building systems, use the fastest generation available in x16 configuration, but don't stress if you're limited to older PCIe generations—it rarely becomes the bottleneck for GPUs.
</details>

**6. A compact case can accommodate a graphics card up to 270mm long and 2 slots wide. A customer wants to install a card that's 300mm long and 2.5 slots wide. What are the options?**

<details>
<summary>Show Answer</summary>
<strong>The card won't physically fit—recommend either choosing a different GPU that meets the case specifications or upgrading to a larger case.</strong> Physical clearance is non-negotiable. A 300mm card cannot fit in a case with 270mm clearance no matter how much force you apply. The 2.5-slot width means the card's cooler extends beyond two expansion slots but less than three—it will block the third slot even if it physically clears. Check both dimensions carefully: length (measured from PCIe bracket to end of card) and width (how many expansion slots it occupies). Some cards have right-angle power connectors that add length, or fan shrouds that extend beyond the PCB. Compact cases often list GPU clearance in specifications—270mm means that's the absolute maximum from the back of the case to any obstruction (drive cages, front fans). Options: select a different GPU model that fits within 270mm and 2 slots (many mid-range cards meet these dimensions), consider a compact/mini version of the desired GPU (manufacturers make shorter versions with smaller coolers), or upgrade to a larger case if the performance of that specific GPU is required. Never force oversized cards—you'll damage the card, case, or both. When recommending cases, always verify GPU clearance matches or exceeds the chosen graphics card specifications.
</details>

**7. After installing a Wi-Fi adapter card, Windows shows no available networks, though Wi-Fi networks definitely exist. The card appears in Device Manager without errors. What should you check?**

<details>
<summary>Show Answer</summary>
<strong>Verify the antennas are properly connected to the card's antenna connectors—Wi-Fi cards cannot detect signals without antennas attached.</strong> Wi-Fi PCIe cards have small coaxial antenna connectors (usually two, for MIMO) on the mounting bracket. The antennas screw onto these connectors. If antennas aren't connected or are loose, the card has no way to receive radio signals. This is analogous to having a TV with no antenna—the tuner works, but receives nothing. After confirming physical antenna connections, check that Windows Wi-Fi is enabled (often toggled via a keyboard function key or Windows settings). Verify the Wi-Fi adapter service is running in Windows Services. Check that airplane mode is disabled. Try positioning antennas in different orientations—perpendicular to each other often works best. If still no networks appear, try the card in a different PCIe slot to rule out slot issues. Update Wi-Fi card drivers from the manufacturer's website. Test near a known Wi-Fi router to eliminate distance/signal strength issues. If nothing works, the card may be defective. This scenario is common because antenna installation is easily forgotten during assembly—it's a small step that completely breaks functionality.
</details>

**8. A system has integrated graphics and a discrete GPU. Games run poorly despite having a powerful graphics card. What's likely happening and how do you fix it?**

<details>
<summary>Show Answer</summary>
<strong>The games are likely running on integrated graphics instead of the discrete GPU—configure Windows Graphics Settings or GPU control panel to force games to use the discrete card.</strong> Modern systems with both integrated and discrete graphics let Windows choose which GPU handles each application. Windows sometimes incorrectly assigns games to integrated graphics, especially for games without graphics-intensive profiles or indie titles it doesn't recognize. Check by opening Task Manager while the game runs—GPU 0 (integrated) shows high utilization while GPU 1 (discrete) is idle. Fix this in Windows 10/11: Settings > System > Display > Graphics Settings. Click "Browse" and add the game's .exe file, then click Options and select "High Performance" (the discrete GPU). Alternatively, open NVIDIA Control Panel or AMD Software, navigate to "Manage 3D Settings" or "Graphics Settings," and add the game executable with discrete GPU forced. Verify the monitor connects to the discrete GPU's outputs, not motherboard ports—connecting to motherboard outputs might force use of integrated graphics depending on BIOS settings. Consider disabling integrated graphics in BIOS if you always use the discrete GPU, though this prevents iGPU offloading for less demanding tasks. After configuration, retest the game—GPU 1 should now show high utilization.
</details>

**9. What power supply considerations are necessary when installing a high-end graphics card that requires two 8-pin PCIe power connectors?**

<details>
<summary>Show Answer</summary>
<strong>Verify total PSU wattage exceeds GPU TDP plus CPU TDP plus 150W overhead, ensure PSU has the required 8-pin connectors, and confirm PSU rails can deliver sufficient amperage.</strong> High-end GPUs requiring two 8-pin connectors typically consume 300-400W under full load. First, calculate total system power: GPU TDP (check specifications, not just "recommended PSU" which is often overestimated) + CPU TDP + 100-150W for motherboard, RAM, storage, fans. If this exceeds 80% of PSU capacity, upgrade. A 400W GPU + 125W CPU + 150W other components = 675W minimum, suggesting a 750W+ PSU for headroom. Second, verify the PSU has two separate 8-pin (6+2 pin) PCIe power cables. Some PSUs have daisy-chained connectors (one cable splitting to two 8-pins)—avoid using daisy chains for high-power GPUs. Use two independent cables to distribute current load. Third, check PSU 12V rail amperage. Modern PSUs concentrate power on 12V rails (GPUs draw from 12V). A single-rail 750W PSU provides ~62A on 12V. Multi-rail PSUs split amperage across rails—verify each rail can handle connected components. Quality PSUs from reputable manufacturers (Corsair, EVGA, Seasonic) include appropriate connectors and rail configurations for their wattage ratings. Cheap or old PSUs might lack proper connectors or deliver inconsistent power under load, causing instability.
</details>

**10. A recording artist installs a professional audio interface (external USB) but experiences pops, clicks, and dropouts during recording. What are likely causes and solutions?**

<details>
<summary>Show Answer</summary>
<strong>Audio dropouts typically result from USB power saving, insufficient buffer size, driver latency issues, or CPU overload—adjust these settings to resolve the problems.</strong> USB audio interfaces require consistent, uninterrupted data flow. Interruptions cause audible artifacts. First, disable USB selective suspend: Control Panel > Power Options > Change Plan Settings > Advanced > USB Settings > USB Selective Suspend > Disabled. This prevents Windows from powering down USB ports to save energy. Second, increase buffer size in the audio interface's control panel. Larger buffers (512 or 1024 samples instead of 128) provide more protection against timing inconsistencies but increase latency. Balance between stability (larger buffers) and low latency (smaller buffers). Third, update audio interface drivers to the latest ASIO drivers from the manufacturer. Generic Windows drivers introduce higher latency and less stability. Fourth, close unnecessary background applications competing for CPU resources—antivirus scans, Windows updates, Chrome with 50 tabs, etc. Consider disabling Windows Defender real-time scanning during recording sessions. Fifth, use USB 2.0 ports over USB 3.0 if problems persist—some audio interfaces have compatibility issues with USB 3.0 controllers. Finally, try a different USB port, preferably directly on the motherboard rather than front panel or hub connections. If problems continue, the USB controller might be sharing interrupts with other devices—check Device Manager to see if multiple devices share the same IRQ, and consider a dedicated USB PCIe card for the audio interface.
</details>

---

## Before Moving to Lesson 24

Make sure you're comfortable with:
- [ ] **PCIe Slot Types** - You can identify x1, x4, x8, x16 slots and understand their bandwidth
- [ ] **GPU Requirements** - You know power requirements, output types, and installation procedures
- [ ] **Card Categories** - You understand when to use graphics, sound, network, and storage controller cards
- [ ] **Installation Process** - You can physically install expansion cards with proper seating and power connections
- [ ] **Configuration Steps** - You know that driver installation and settings configuration are necessary after hardware installation

**Study Strategy:** If possible, examine a desktop computer and identify different PCIe slot types by their physical size. Look at existing expansion cards and note their power connections, mounting methods, and what outputs/ports they provide. Watch GPU installation videos to see the process, especially how retention clips work and how to route power cables properly.

---

## Coming Up in Lesson 24: Display Technologies

We've covered components inside the computer case. Now we'll explore display technologies—the screens that present output to users. We'll examine LCD, LED, OLED, and other display types, understand resolution and aspect ratios, learn about refresh rates and response times, compare panel types (TN, IPS, VA), and explore display connections (HDMI, DisplayPort, DVI). You'll learn how to match displays to use cases, troubleshoot common display issues, and configure multiple monitor setups. Understanding displays helps you recommend appropriate screens and resolve video output problems.

---

*"Hardware is easy to protect: lock it in a room, chain it to a desk, or buy a spare. Information poses more of a problem. It can exist in more than one place; be transported halfway across the planet in seconds; and be stolen without your knowledge."* — Bruce Schneier

---

# ✅ LESSON 23 COMPLETE!

**Progress:** 23 of 60 lessons complete (38.3%) 🎯

You now understand expansion cards from high-performance graphics cards to specialized capture cards. Expansion cards provide customization, letting you adapt systems to specific needs without replacing entire computers. Whether building a gaming rig, upgrading a workstation, or adding capability to existing systems, understanding PCIe architecture, power requirements, installation procedures, and driver configuration prepares you to work confidently with expansion cards.
