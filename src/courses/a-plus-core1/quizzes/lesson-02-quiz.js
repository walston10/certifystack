export const lesson2Quiz = [
  {
    id: 1,
    question: "A customer complains that their 5-year-old laptop screen appears dim even at maximum brightness. You notice the screen gradually gets brighter over 2-3 minutes after powering on. What component is most likely failing?",
    options: [
      "The LCD panel itself needs replacement",
      "The CCFL backlight inverter is failing",
      "The LED backlight is defective",
      "The graphics card is overheating"
    ],
    correct: 1,
    explanation: "A CCFL (Cold Cathode Fluorescent Lamp) backlight inverter that's failing will cause gradual warm-up time and dimming. The inverter converts DC power to high-voltage AC needed for CCFL tubes. As inverters age, they take longer to reach full brightness. This is a classic symptom of inverter failure in older laptops (5+ years). Modern laptops use LED backlights which don't require inverters and don't exhibit this warm-up behavior."
  },
  {
    id: 2,
    question: "A graphic designer needs a laptop for color-critical work with wide viewing angles. They currently have a laptop with a TN panel. Which display technology should you recommend for their next laptop?",
    options: [
      "Another TN panel with higher resolution",
      "IPS (In-Plane Switching) panel for accurate colors and wide viewing angles",
      "OLED display only - nothing else will work",
      "CCFL-backlit LCD for the best color accuracy"
    ],
    correct: 1,
    explanation: "IPS (In-Plane Switching) panels offer superior color accuracy and wide viewing angles compared to TN (Twisted Nematic) panels, making them ideal for color-critical work like graphic design. While OLED displays also offer excellent color reproduction, they're more expensive and not always necessary. TN panels have poor viewing angles and color accuracy. CCFL refers to backlight technology (now obsolete), not panel type."
  },
  {
    id: 3,
    question: "A user reports that their laptop's touchscreen is unresponsive, but the display shows images normally. What component has likely failed?",
    options: [
      "The LCD panel",
      "The backlight",
      "The digitizer layer",
      "The video cable (LVDS or eDP)"
    ],
    correct: 2,
    explanation: "The digitizer is a separate layer on top of the LCD that detects touch input. If the display shows images but touch doesn't work, the digitizer has failed while the LCD remains functional. The LCD panel displays the image, the backlight provides illumination, and the video cable transmits the signal - none of these affect touch functionality. The digitizer and LCD are often replaced as a single assembly."
  },
  {
    id: 4,
    question: "You're troubleshooting a laptop where the built-in webcam works but has no audio during video calls. The laptop's speakers work fine for music. What should you check first?",
    options: [
      "Replace the entire display assembly",
      "Check if the application has permission to access the microphone and that the correct input device is selected",
      "The speakers need to be replaced",
      "Reinstall the operating system"
    ],
    correct: 1,
    explanation: "Webcams have integrated microphones, but they require application permissions and proper input device selection. Modern operating systems require apps to request microphone access. Additionally, the wrong input device (like an external mic instead of the internal one) might be selected in the application settings. Always check software settings before assuming hardware failure. The speakers working proves the audio system functions."
  },
  {
    id: 5,
    question: "A laptop user reports that their external monitor works fine, but the laptop's built-in screen shows vertical colored lines and flickering. What is the most likely cause?",
    options: [
      "The graphics card has completely failed",
      "The display cable (LVDS or eDP) is damaged or loose",
      "The external monitor is interfering with the laptop display",
      "The laptop needs a BIOS update"
    ],
    correct: 1,
    explanation: "Vertical lines and flickering on the internal display while the external monitor works fine indicates a problem between the system board and the LCD panel - typically the display cable (LVDS on older laptops, eDP on newer ones). If the graphics card failed, both displays would have issues. The display cable is a common failure point due to the constant flexing from opening and closing the laptop lid."
  },
  {
    id: 6,
    question: "You need to replace a laptop screen. The customer wants the highest resolution possible. The current display is 1920x1080 (16:9 aspect ratio). Which resolution represents an upgrade while maintaining the same aspect ratio?",
    options: [
      "1366x768",
      "2560x1440 (2K/QHD)",
      "1920x1200",
      "1024x768"
    ],
    correct: 1,
    explanation: "2560x1440 (also called 2K or QHD - Quad HD) is a higher resolution than 1920x1080 (Full HD) while maintaining the 16:9 aspect ratio. 1366x768 is a downgrade. 1920x1200 is a different aspect ratio (16:10). 1024x768 is much lower resolution with a 4:3 aspect ratio. When upgrading displays, you must ensure the replacement panel matches the laptop's supported resolution and connector type."
  },
  {
    id: 7,
    question: "A laptop powers on and you can hear the fan and hard drive, but the screen remains completely black. You shine a flashlight on the screen and can faintly see the Windows desktop. What component has failed?",
    options: [
      "The LCD panel is dead",
      "The backlight has failed (or inverter on CCFL models)",
      "The graphics processor has failed",
      "The motherboard is defective"
    ],
    correct: 1,
    explanation: "If you can see a faint image with a flashlight, the LCD panel is working and displaying an image - it just lacks illumination. This is a classic backlight failure. On older laptops with CCFL backlights, it's often the inverter. On newer laptops with LED backlights, the LED array or backlight circuit has failed. If the LCD or graphics were dead, you wouldn't see any image even with a flashlight."
  },
  {
    id: 8,
    question: "A user's laptop screen appears 'washed out' with poor contrast, and colors appear faded. The backlight is working. What display technology issue is most likely?",
    options: [
      "The backlight is too bright and needs adjustment",
      "The LCD panel itself is failing or has deteriorated",
      "The inverter needs replacement",
      "The Wi-Fi antenna is interfering with the display"
    ],
    correct: 1,
    explanation: "LCD panels can deteriorate over time, causing washed out images, poor contrast, and faded colors. The liquid crystal material degrades, affecting its ability to properly block or transmit light. Since the backlight is working (screen is lit), the issue is with the panel itself. The inverter only affects brightness with CCFL backlights. Wi-Fi antennas don't interfere with display quality."
  },
  {
    id: 9,
    question: "You're replacing a laptop's broken LCD panel. During disassembly, you notice the Wi-Fi antennas are routed where?",
    options: [
      "Behind the keyboard only",
      "Inside the bottom case of the laptop",
      "Along the sides of the display/screen assembly",
      "Directly attached to the Wi-Fi card only"
    ],
    correct: 2,
    explanation: "Wi-Fi antennas are typically routed through the display hinge and positioned along the sides of the screen assembly (usually left and right edges or across the top). This placement provides optimal signal reception since the display is elevated when the laptop is open. When replacing a display, you must carefully disconnect and reconnect these antenna cables. Damaging them results in poor Wi-Fi performance."
  },
  {
    id: 10,
    question: "A laptop needs to connect to a projector that only supports VGA input, but the laptop only has HDMI output. The presentation includes high-definition video. What limitation will the user experience?",
    options: [
      "Audio won't be transmitted - VGA doesn't carry audio signals",
      "The video won't display at all without a special driver",
      "VGA provides better quality than HDMI for presentations",
      "The laptop battery will drain faster"
    ],
    correct: 0,
    explanation: "VGA is an analog video-only standard and does not carry audio signals. When converting from HDMI (which carries both video and audio) to VGA, the audio signal is lost. The user will need separate audio connection (like a 3.5mm audio cable) to the projector or external speakers. An HDMI to VGA adapter will convert the video signal successfully, but audio requires a separate solution."
  },
  {
    id: 11,
    question: "A modern laptop has both an OLED display option and a traditional LED-backlit LCD option. Which statement about OLED displays is most accurate?",
    options: [
      "OLED displays require a separate backlight like LCDs",
      "OLED displays have self-illuminating pixels that produce true blacks and better contrast ratios",
      "OLED displays are significantly cheaper than LED-backlit LCDs",
      "OLED displays last longer and never experience burn-in"
    ],
    correct: 1,
    explanation: "OLED (Organic Light Emitting Diode) displays have pixels that produce their own light - they don't need a backlight. This allows for true blacks (pixels can completely turn off) and superior contrast ratios. However, OLED displays are typically more expensive than LED-backlit LCDs and can experience burn-in with static images. They offer excellent image quality but come with trade-offs in cost and longevity."
  },
  {
    id: 12,
    question: "You're working on a laptop where the display cable needs replacement. Which cable type would you most likely encounter in a modern laptop manufactured in the last 5 years?",
    options: [
      "VGA cable",
      "LVDS (Low-Voltage Differential Signaling)",
      "eDP (Embedded DisplayPort)",
      "DVI cable"
    ],
    correct: 2,
    explanation: "eDP (Embedded DisplayPort) is the modern standard for internal laptop display connections, replacing the older LVDS standard. eDP supports higher resolutions, faster refresh rates, and better power efficiency. LVDS was common in older laptops. VGA and DVI are external connector standards, not internal display cables. When ordering replacement display cables, you must know whether the laptop uses LVDS or eDP."
  },
  {
    id: 13,
    question: "A user wants to extend their laptop display to two external monitors. The laptop has one HDMI port and two USB-C ports with DisplayPort support. What's the best solution?",
    options: [
      "It's impossible - you can only use one external monitor",
      "Use the HDMI port for one monitor and a USB-C to DisplayPort cable for the second monitor",
      "You must buy a new laptop with two HDMI ports",
      "Use a VGA splitter to clone the same image on both monitors"
    ],
    correct: 1,
    explanation: "Modern laptops can support multiple external displays using different output ports. Connect one monitor via HDMI and another via USB-C to DisplayPort (or HDMI). This allows for extended desktop mode across three displays (laptop screen plus two externals). A VGA splitter would only clone/duplicate the image, not extend it. Always verify the laptop's graphics capabilities support multiple displays."
  },
  {
    id: 14,
    question: "During a laptop screen replacement, you must disconnect a very small, fragile connector. What should you use to disconnect it safely?",
    options: [
      "Metal tweezers to pry it loose quickly",
      "A plastic spudger or non-conductive pry tool",
      "Your fingers with force - it will eventually come loose",
      "A flathead screwdriver"
    ],
    correct: 1,
    explanation: "Plastic spudgers or non-conductive pry tools are designed specifically for disconnecting delicate connectors without causing damage or creating electrical shorts. Metal tools can short circuits and damage components. These connectors (like display cables, touchpad cables, keyboard ribbons) are ZIF (Zero Insertion Force) connectors that typically flip up or slide before the cable can be removed. Using metal tools or excessive force can permanently damage the connector."
  },
  {
    id: 15,
    question: "A laptop user complains that in bright sunlight, they can barely see their screen even at maximum brightness. What display feature would help with this issue in their next laptop purchase?",
    options: [
      "Higher resolution (more pixels)",
      "Glossy finish for better colors",
      "Higher nit rating (brightness measurement) and matte/anti-glare finish",
      "OLED display technology exclusively"
    ],
    correct: 2,
    explanation: "Display brightness is measured in nits (candelas per square meter). Higher nit ratings (400+ nits) provide better visibility in bright environments like outdoor sunlight. Additionally, a matte/anti-glare finish reduces reflections that make screens hard to see in bright light. Glossy screens have better color reproduction but create more reflections. Resolution and OLED technology don't directly address brightness/glare issues, though OLED can achieve higher nit ratings."
  }
];