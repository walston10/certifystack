export const lesson4Quiz = [
  {
    id: 1,
    question: "A customer wants to purchase a device for reading e-books during their daily commute. They want long battery life and a screen that's easy on the eyes in various lighting conditions. What mobile device type would you recommend?",
    options: [
      "Standard tablet with LCD screen",
      "E-reader with e-ink display",
      "Smartphone with OLED display",
      "Laptop with high-resolution screen"
    ],
    correct: 1,
    explanation: "E-readers with e-ink displays are specifically designed for reading. E-ink technology mimics paper, is easy to read in direct sunlight, causes less eye strain than backlit screens, and uses minimal power (battery lasts weeks). E-ink displays only use power when changing pages, not while displaying static content. While tablets and smartphones can run e-reader apps, they have backlit screens that cause more eye fatigue and significantly shorter battery life."
  },
  {
    id: 2,
    question: "A fitness instructor wants a device to track workouts, monitor heart rate continuously throughout the day, and receive text notifications during training sessions. What type of mobile device is most appropriate?",
    options: [
      "Tablet with fitness apps installed",
      "Smartphone in an armband",
      "Smartwatch or fitness tracker wearable",
      "E-reader with extended features"
    ],
    correct: 2,
    explanation: "Smartwatches and fitness trackers are designed for continuous wear and provide 24/7 health monitoring (heart rate, steps, sleep tracking) plus smartphone notifications. They're worn on the wrist, making them convenient during workouts without interfering with activity. Modern smartwatches combine fitness tracking with smart features like notifications, calls, and apps. A smartphone in an armband is bulky and doesn't provide continuous monitoring. Tablets aren't practical for active use."
  },
  {
    id: 3,
    question: "A customer complains that their smartphone screen is cracked but the touch functionality still works perfectly. Which layer of the display is damaged?",
    options: [
      "The digitizer layer only",
      "The LCD panel only",
      "The protective glass layer on top",
      "The backlight component"
    ],
    correct: 2,
    explanation: "If touch still works and the display shows images (even with visible cracks), only the outer protective glass layer is damaged. Modern smartphones have multiple layers: protective glass → digitizer (touch sensing) → LCD/OLED (image display). If the digitizer were damaged, touch wouldn't work. If the LCD/OLED were damaged, you'd see dead pixels, lines, or no image. The protective glass can crack from impact while underlying components remain functional."
  },
  {
    id: 4,
    question: "A business executive needs to give presentations directly from their tablet in conference rooms with various display types. What feature is most important for their tablet?",
    options: [
      "Cellular data connectivity",
      "Video output capability (HDMI, USB-C DisplayPort, or wireless display)",
      "Fingerprint sensor for security",
      "High-capacity storage"
    ],
    correct: 1,
    explanation: "Video output capability is essential for presentations. Tablets can connect to external displays via USB-C with DisplayPort support, HDMI adapters, or wireless standards like Miracast or AirPlay. This allows presenting on projectors and conference room displays. While cellular data, security features, and storage are useful, they don't address the core requirement of displaying content on external screens during presentations."
  },
  {
    id: 5,
    question: "A smartphone user reports that their device screen shows images perfectly but touch input doesn't work anywhere on the screen. What component has most likely failed?",
    options: [
      "The LCD panel",
      "The battery",
      "The digitizer layer",
      "The protective glass only"
    ],
    correct: 2,
    explanation: "The digitizer is the capacitive touch-sensing layer. If the display shows images but doesn't respond to touch, the digitizer has failed while the LCD/OLED remains functional. In many smartphones, the digitizer and display are fused together and must be replaced as a single assembly. This is different from the protective glass - digitizer damage means the touch-sensing circuitry has failed, not just the outer glass."
  },
  {
    id: 6,
    question: "A customer wants to use their smartphone for mobile payments at retail stores. What wireless technology enables tap-to-pay functionality?",
    options: [
      "Bluetooth",
      "Wi-Fi",
      "NFC (Near Field Communication)",
      "Cellular data (4G/5G)"
    ],
    correct: 2,
    explanation: "NFC (Near Field Communication) enables contactless payments like Apple Pay, Google Pay, and Samsung Pay. NFC works at very short range (a few centimeters), making it secure for payment transactions. When you tap your phone on a payment terminal, NFC transmits encrypted payment information. Bluetooth and Wi-Fi have much longer ranges and aren't used for tap-to-pay. Cellular data might be needed to authorize transactions but isn't the payment transmission method."
  },
  {
    id: 7,
    question: "A tablet's battery drains completely overnight even when not in use. The device is 6 months old. What is the most likely cause?",
    options: [
      "The battery has reached end of life",
      "Apps running in the background or poor cellular/Wi-Fi signal causing constant searching",
      "The screen brightness is set too high",
      "The tablet needs a factory reset immediately"
    ],
    correct: 1,
    explanation: "Excessive battery drain when idle is usually caused by apps running background processes (especially location services, email sync, social media) or the device constantly searching for weak cellular/Wi-Fi signals. A 6-month-old battery shouldn't be failing yet (typical lifespan is 2-4 years). Check battery usage statistics in settings to identify problem apps. Screen brightness only affects battery during active use. Try closing background apps and disabling unnecessary location services before assuming hardware failure."
  },
  {
    id: 8,
    question: "A photographer wants a tablet for editing high-resolution photos in the field. What display technology would provide the best color accuracy and viewing angles?",
    options: [
      "TN (Twisted Nematic) panel",
      "E-ink display",
      "IPS (In-Plane Switching) LCD or OLED display",
      "Any display works the same for photos"
    ],
    correct: 2,
    explanation: "IPS LCD and OLED displays offer superior color accuracy, wide viewing angles, and high contrast ratios essential for photo editing. IPS provides consistent colors from different viewing angles. OLED offers deep blacks and vibrant colors. TN panels have poor viewing angles and color reproduction. E-ink displays are black-and-white and meant for reading. Professional photographers need displays with wide color gamuts (like DCI-P3 or Adobe RGB coverage) for accurate color work."
  },
  {
    id: 9,
    question: "A delivery driver needs a mobile device for GPS navigation, route planning, and scanning packages. The device will be used outdoors in bright sunlight all day. What specifications are most important?",
    options: [
      "High screen brightness (500+ nits) and long battery life",
      "The thinnest possible device",
      "Maximum camera megapixels",
      "Fastest processor available"
    ],
    correct: 0,
    explanation: "Outdoor visibility requires high screen brightness (measured in nits - 500+ is good for outdoor use) to overcome sunlight glare. All-day use requires strong battery life. Some devices have 'outdoor modes' that boost brightness temporarily. Anti-glare/matte screens also help. While cameras are useful for scanning, brightness and battery are critical for the described use case. Thin devices often sacrifice battery capacity. Processing power is less critical than visibility and endurance for this application."
  },
  {
    id: 10,
    question: "A student wants to use a stylus for taking handwritten notes on a tablet. What feature must the tablet have for pressure-sensitive stylus input?",
    options: [
      "Any touchscreen will work with any stylus",
      "An active digitizer that supports pen input with pressure sensitivity",
      "Just a capacitive touchscreen",
      "NFC capability"
    ],
    correct: 1,
    explanation: "An active digitizer layer is required for pressure-sensitive stylus input. Active digitizers (like Wacom, Apple Pencil technology, or Microsoft Pen Protocol) detect pen pressure, tilt, and hover. Basic capacitive touchscreens only detect touch presence, not pressure levels. Active styluses communicate with the digitizer for precise input. Passive/capacitive styluses work on regular touchscreens but lack pressure sensitivity and precision needed for serious note-taking or drawing."
  },
  {
    id: 11,
    question: "A smartphone user wants to share photos from their phone to a friend's phone quickly without using cellular data or Wi-Fi. What technology would work best?",
    options: [
      "Email the photos",
      "Bluetooth file transfer or NFC (like Android Beam/AirDrop)",
      "Upload to cloud storage first",
      "Remove the SD card and swap it"
    ],
    correct: 1,
    explanation: "Bluetooth file transfer works device-to-device without internet connectivity. NFC can initiate transfers (like Android Beam used NFC to start Bluetooth transfer, or iOS AirDrop uses a combination of Bluetooth and Wi-Fi Direct). These peer-to-peer technologies don't require cellular data or internet access. Email and cloud storage require internet connectivity. SD card swapping isn't practical and many modern phones lack SD card slots."
  },
  {
    id: 12,
    question: "A tablet suddenly won't charge. The charging cable and adapter work fine with other devices. What should you check first on the tablet?",
    options: [
      "Replace the battery immediately",
      "Check the charging port for debris, lint, or damage",
      "The tablet is permanently broken",
      "Update the operating system"
    ],
    correct: 1,
    explanation: "Charging ports (especially USB-C and Lightning) accumulate lint, dust, and debris from pockets and bags. This prevents the cable from fully inserting and making electrical contact. Carefully inspect and clean the port with a wooden toothpick or compressed air (never metal tools). This is one of the most common causes of charging issues. If the port is clean and undamaged, then investigate cable, adapter, battery, or charging circuitry issues."
  },
  {
    id: 13,
    question: "A GPS-enabled tablet is being used in a vehicle for navigation. The user reports that GPS accuracy is poor inside buildings and parking garages but works fine outdoors. Why?",
    options: [
      "The GPS hardware is defective",
      "GPS requires line-of-sight to satellites, which is blocked by structures",
      "The tablet battery is too low",
      "GPS only works outdoors by design"
    ],
    correct: 1,
    explanation: "GPS (Global Positioning System) relies on receiving signals from multiple satellites orbiting Earth. These signals are relatively weak and require clear line-of-sight to the sky. Buildings, parking structures, and other obstructions block or reflect GPS signals, causing poor accuracy or no signal. This is normal GPS behavior, not a device defect. Some devices use A-GPS (Assisted GPS) which combines GPS with cellular tower triangulation and Wi-Fi positioning for better indoor performance."
  },
  {
    id: 14,
    question: "A smartphone has both a front-facing camera and a rear-facing camera. The rear camera takes clear photos, but the front camera produces blurry images. What is the most likely cause?",
    options: [
      "Both cameras share the same lens, so this is impossible",
      "The front camera lens is dirty or scratched",
      "Front cameras are always lower quality and blurry",
      "The phone needs to be restarted"
    ],
    correct: 1,
    explanation: "Smartphones have separate camera modules for front and rear cameras. If only the front camera is blurry while the rear is clear, the front camera lens likely has fingerprints, smudges, dirt, or scratches. The front camera is more exposed to facial oils and fingerprints during regular use. Carefully clean the lens with a microfiber cloth. While front cameras often have lower resolution than rear cameras, they shouldn't be blurry - just lower quality. If cleaning doesn't help, the camera module may be defective."
  },
  {
    id: 15,
    question: "A user wants to expand their tablet's storage capacity. The tablet doesn't have a microSD card slot. What is the best alternative?",
    options: [
      "Open the tablet and install a larger internal drive",
      "Use cloud storage services or external storage via USB-C/Lightning adapter",
      "Storage cannot be expanded on tablets without SD slots",
      "Delete the operating system to free up space"
    ],
    correct: 1,
    explanation: "Cloud storage (Google Drive, iCloud, OneDrive, Dropbox) is the primary solution for tablets without expandable storage. Additionally, many tablets support external storage via USB-C or Lightning connectors using adapters or external drives. Modern tablets often support USB OTG (On-The-Go) for flash drives. Tablets aren't designed to be opened for internal storage upgrades like laptops - storage is typically soldered. Managing storage by offloading photos/videos to cloud or external drives is standard practice."
  }
];