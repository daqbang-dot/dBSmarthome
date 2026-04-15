// Fail: assets/js/db-risingnet.js
// Pangkalan Data Berpusat: Harga Kos Pembekal (RisingNet)

const dbItems = [
    // --- HDCVI CAMERA > COOPER SERIES ---
    { id: "DH-HAC-B1A21-U", brand: "DAHUA", category: "cctv", name: "2MP IR HDCVI Fixed-focal Bullet Camera (3.6mm)", cost: 47.00 },
    { id: "DH-HAC-B1A51-U", brand: "DAHUA", category: "cctv", name: "5MP IR HDCVI Fixed-focal Bullet Camera (3.6mm)", cost: 80.00 },
    { id: "DH-HAC-B2A21-U", brand: "DAHUA", category: "cctv", name: "2MP IR HDCVI Fixed-focal Bullet Camera (3.6mm)", cost: 61.00 },
    { id: "DH-HAC-B2A21P-U-IL-A", brand: "DAHUA", category: "cctv", name: "2MP Smart Dual Light HDCVI Fixed-focal Bullet (3.6mm)", cost: 75.00 },
    { id: "DH-HAC-B2A51-U", brand: "DAHUA", category: "cctv", name: "5MP IR HDCVI Fixed-focal Bullet Camera (3.6mm)", cost: 96.00 },
    { id: "DH-HAC-B2A51-U-IL-A", brand: "DAHUA", category: "cctv", name: "5MP Smart Dual Light HDCVI Fixed-focal Bullet (3.6mm)", cost: 102.00 },
    { id: "DH-HAC-T1A21", brand: "DAHUA", category: "cctv", name: "2MP HDCVI IR Eyeball Camera (2.8mm)", cost: 46.50 },
    { id: "DH-HAC-T1A21-U", brand: "DAHUA", category: "cctv", name: "2MP IR HDCVI Fixed-focal Eyeball Camera (2.8mm)", cost: 46.50 },
    { id: "DH-HAC-T1A21-U-IL-A", brand: "DAHUA", category: "cctv", name: "2MP Smart Dual Light HDCVI Fixed-focal Eyeball (2.8mm)", cost: 54.00 },
    { id: "DH-HAC-T1A51-U", brand: "DAHUA", category: "cctv", name: "5MP IR HDCVI Fixed-focal Eyeball Camera (2.8mm)", cost: 76.00 },
    { id: "DH-HAC-T1A51P-U-IL-A", brand: "DAHUA", category: "cctv", name: "5MP Smart Dual Light HDCVI Fixed-focal Eyeball (2.8mm)", cost: 85.00 },
    { id: "DH-HAC-T2A21", brand: "DAHUA", category: "cctv", name: "2MP HDCVI IR Eyeball Camera (3.6mm)", cost: 61.00 },
    { id: "DH-HAC-T2A21-U", brand: "DAHUA", category: "cctv", name: "2MP IR HDCVI Fixed-focal Eyeball Camera (3.6mm)", cost: 61.00 },
    { id: "DH-HAC-T2A51", brand: "DAHUA", category: "cctv", name: "5MP HDCVI Fixed IR Eyeball Camera (2.8mm)", cost: 96.00 },

    // --- HDCVI CAMERA > 1 SERIES ---
    { id: "DH-HAC-HDBW1500E", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Dome Camera (2.8mm)", cost: 150.00 },
    { id: "DH-HAC-HDW1500T-Z", brand: "DAHUA", category: "cctv", name: "5MP HDCVI IR Eyeball Camera (2.7-12mm Motorized)", cost: 220.00 },
    { id: "DH-HAC-HDW1500TLMQ", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI Quick-install IR Eyeball (3.6mm)", cost: 118.00 },
    { id: "DH-HAC-HDW1500TRQ", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI Quick-install IR Eyeball (3.6mm)", cost: 98.00 },
    { id: "DH-HAC-HDW1800R", brand: "DAHUA", category: "cctv", name: "4K Real-time HDCVI IR Eyeball Camera (3.6mm)", cost: 136.00 },
    { id: "DH-HAC-HFW1500T", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Bullet Camera (3.6mm)", cost: 131.00 },
    { id: "DH-HAC-HFW1800R", brand: "DAHUA", category: "cctv", name: "4K HDCVI IR Bullet Camera (3.6mm)", cost: 143.00 },

    // --- HDCVI CAMERA > 1 SERIES AUDIO ---
    { id: "DH-HAC-HDBW1231EA-A", brand: "DAHUA", category: "cctv", name: "2MP Starlight HDCVI IR Dome Camera w/ Mic (2.8mm)", cost: 130.00 },
    { id: "DH-HAC-HDBW1231RA-Z-A", brand: "DAHUA", category: "cctv", name: "2MP Starlight HDCVI IR Dome w/ Mic (2.7-12mm Motorized)", cost: 243.00 },
    { id: "DH-HAC-HDW1500T-Z-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Eyeball w/ Mic (2.7-12mm Motorized)", cost: 235.00 },
    { id: "DH-HAC-HDW1500TLMQ-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI Quick-install Eyeball w/ Mic (3.6mm)", cost: 124.00 },
    { id: "DH-HAC-HDW1500TRQ-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI Quick-install Eyeball w/ Mic (2.8mm)", cost: 106.00 },
    { id: "DH-HAC-HDW1801T-Z-A", brand: "DAHUA", category: "cctv", name: "4K HDCVI IR Eyeball Camera w/ Mic (2.7-13.5mm Motorized)", cost: 375.00 },
    { id: "DH-HAC-HDW1801TLQ-A", brand: "DAHUA", category: "cctv", name: "4K Starlight HDCVI Fixed IR Quick-install Eyeball (2.8mm)", cost: 196.00 },
    { id: "DH-HAC-HFW1801TLM-IL-A", brand: "DAHUA", category: "cctv", name: "4K Smart Dual Light HDCVI Fixed Bullet w/ Mic (3.6mm)", cost: 275.00 },
    { id: "DH-HAC-HFW1231R-Z-A", brand: "DAHUA", category: "cctv", name: "2MP Starlight HDCVI IR Bullet w/ Mic (2.7-12mm Motorized)", cost: 210.00 },
    { id: "DH-HAC-HFW1231CP-A-0360B", brand: "DAHUA", category: "cctv", name: "2MP Starlight HDCVI IR Bullet w/ Mic (3.6mm)", cost: 98.00 },
    { id: "DH-HAC-HFW1500T-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Bullet Camera w/ Mic (3.6mm)", cost: 132.00 },
    { id: "DH-HAC-HFW1800T-A", brand: "DAHUA", category: "cctv", name: "4K Real-time HDCVI IR Bullet Camera w/ Mic (3.6mm)", cost: 175.00 },

    // --- HDCVI CAMERA > FULL COLOR SERIES ---
    { id: "DH-HAC-HDW1239T-A-LED", brand: "DAHUA", category: "cctv", name: "2MP Full-color HDCVI Eyeball Camera w/ Mic (2.8mm)", cost: 135.00 },
    { id: "DH-HAC-HDW1239T-Z-A-LED", brand: "DAHUA", category: "cctv", name: "2MP Full-color HDCVI Eyeball w/ Mic (2.7-13.5mm Motorized)", cost: 316.00 },
    { id: "DH-HAC-HDW1239TLQ-A-LED", brand: "DAHUA", category: "cctv", name: "2MP Full-color HDCVI Quick-install Eyeball w/ Mic (2.8mm)", cost: 106.00 },
    { id: "DH-HAC-HDW1509TLQ-A-LED", brand: "DAHUA", category: "cctv", name: "5MP Full-color HDCVI Quick-install Eyeball w/ Mic (3.6mm)", cost: 180.00 },
    { id: "DH-HAC-HDW1809TLM-A-LED", brand: "DAHUA", category: "cctv", name: "4K Full-Color HDCVI Eyeball Camera w/ Mic (3.6mm)", cost: 270.00 },
    { id: "DH-HAC-HFW1239TLM-A-LED", brand: "DAHUA", category: "cctv", name: "2MP Full-color HDCVI Bullet Camera w/ Mic (3.6mm)", cost: 123.00 },
    { id: "DH-HAC-HFW1239TU-Z-A-LED", brand: "DAHUA", category: "cctv", name: "2MP Full-color HDCVI Bullet w/ Mic (2.7-13.5mm Motorized)", cost: 316.00 },
    { id: "DH-HAC-HFW1509T-A-LED", brand: "DAHUA", category: "cctv", name: "5MP Full-color HDCVI Bullet Camera w/ Mic (3.6mm)", cost: 173.00 },

    // --- HDCVI CAMERA > DUAL ILLUMINATOR SERIES ---
    { id: "DH-HAC-HDW1239T-IL-A", brand: "DAHUA", category: "cctv", name: "2MP Smart Dual Illuminators Eyeball w/ Mic (2.8mm)", cost: 165.00 },
    { id: "DH-HAC-HFW1239TLM-IL-A", brand: "DAHUA", category: "cctv", name: "2MP Smart Dual Illuminators Bullet w/ Mic (3.6mm)", cost: 158.00 },
    { id: "DH-HAC-HFW1509TLM-IL-A", brand: "DAHUA", category: "cctv", name: "5MP Smart Dual Illuminators Bullet w/ Mic (3.6mm)", cost: 209.00 },

    // --- HDCVI CAMERA > TiOC SERIES ---
    { id: "DH-HAC-ME1239TH-A-PV", brand: "DAHUA", category: "cctv", name: "2MP Smart Dual Light Active Deterrence Bullet TiOC (2.8mm)", cost: 214.00 },
    { id: "DH-HAC-ME1509TQ-A-PV", brand: "DAHUA", category: "cctv", name: "5MP Smart Dual Light Active Deterrence Eyeball TiOC (2.8mm)", cost: 280.00 },
    { id: "DH-HAC-ME1809TH-A-PV", brand: "DAHUA", category: "cctv", name: "4K Smart Dual Light TiOC HDCVI Bullet Camera (3.6mm)", cost: 350.00 },
    { id: "DH-HAC-ME1809TQ-A-PV", brand: "DAHUA", category: "cctv", name: "4K Smart Dual Light TiOC HDCVI Eyeball Camera (2.8mm)", cost: 342.00 },

    // --- HDCVI CAMERA > PRO STARLIGHT SERIES ---
    { id: "DH-HAC-HDW2501T-Z-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Eyeball (2.7-13.5mm Motorized)", cost: 0.00 },
    { id: "DH-HAC-HDW2501TQ-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI Quick-install IR Eyeball (3.6mm)", cost: 0.00 },
    { id: "DH-HAC-HFW2501E-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Bullet Camera (3.6mm)", cost: 0.00 },
    { id: "DH-HAC-HFW2501TU-Z-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Bullet (2.7-13.5mm Motorized)", cost: 0.00 },

    // --- HDCVI CAMERA > PANORAMIC SERIES ---
    { id: "DH-HAC-EBW3802", brand: "DAHUA", category: "cctv", name: "8MP HDCVI IR-Fisheye Camera (2.5mm)", cost: 0.00 },
    { id: "DH-HAC-EW2501", brand: "DAHUA", category: "cctv", name: "5MP HDCVI IR-Fisheye Camera (1.4mm)", cost: 330.00 },

    // --- HDCVI CAMERA > MICRO-SIZE SERIES ---
    { id: "DH-HAC-HDW3200G", brand: "DAHUA", category: "cctv", name: "2MP HDCVI IR Miniature Eyeball Camera (3.6mm)", cost: 0.00 },
    { id: "DH-HAC-HUM3201B-P", brand: "DAHUA", category: "cctv", name: "2MP Starlight HDCVI Pinhole Camera (2.8mm)", cost: 0.00 },

    // --- HDCVI CAMERA > PTZ SERIES ---
    { id: "DH-SD22204DB-GC", brand: "DAHUA", category: "cctv", name: "2MP 4x Starlight HDCVI PTZ Camera (2.7-11mm Motorized)", cost: 555.00 },
    { id: "DH-SD42215-HC-LA", brand: "DAHUA", category: "cctv", name: "2MP 15x Starlight HDCVI PTZ Camera (5-75mm Motorized)", cost: 1050.00 },
    { id: "DH-SD49225DB-HC", brand: "DAHUA", category: "cctv", name: "2MP 25x Starlight IR HDCVI PTZ Camera (4.8-120mm Motorized)", cost: 1189.00 },

    // --- HDCVI CAMERA > WIZCOLOR ---
    { id: "DH-HAC-HDW1249X-A-PRO", brand: "DAHUA", category: "cctv", name: "2MP WizColor HDCVI Fixed-focal Eyeball (2.8mm)", cost: 140.00 },
    { id: "DH-HAC-HFW1249X-A-PRO", brand: "DAHUA", category: "cctv", name: "2MP WizColor HDCVI Fixed-focal Bullet (3.6mm)", cost: 140.00 },
    { id: "DH-HAC-HFW1549X-A-PRO", brand: "DAHUA", category: "cctv", name: "5MP WizColor HDCVI Fixed-focal Bullet (2.8mm)", cost: 170.00 },
    { id: "DH-HAC-HDW1549XP-A-PRO", brand: "DAHUA", category: "cctv", name: "5MP WizColor HDCVI Fixed-focal Eyeball (3.6mm)", cost: 170.00 },

    // --- HDCVI CAMERA > TWO WAY TALK ---
    { id: "DH-HAC-HFW1200TLM-IL-T", brand: "DAHUA", category: "cctv", name: "2MP Smart Dual Light HDCVI Two-way Talk Bullet (3.6mm)", cost: 99.00 },
    { id: "DH-HAC-HDW1200TQP-IL-T", brand: "DAHUA", category: "cctv", name: "2MP Smart Dual Light HDCVI Two-way Talk Eyeball (2.8mm)", cost: 96.00 },
    { id: "DH-HAC-HFW1500TLM-IL-T", brand: "DAHUA", category: "cctv", name: "5MP Smart Dual Light HDCVI Two-way Talk Bullet (3.6mm)", cost: 130.00 },
    { id: "DH-HAC-HDW1500TQ-IL-T", brand: "DAHUA", category: "cctv", name: "5MP Smart Dual Light HDCVI Two-way Talk Eyeball (3.6mm)", cost: 130.00 },

    // --- HDCVI RECORDERS > COOPER SERIES ---
    { id: "DH-XVR1B04H-I/T", brand: "DAHUA", category: "cctv", name: "4CH 5MP Cooper 1U 1HDD WizSense XVR (Max 16TB)", cost: 244.00 },
    { id: "DH-XVR1B08H-I/T", brand: "DAHUA", category: "cctv", name: "8CH 5MP Cooper 1U 1HDD WizSense XVR (Max 16TB)", cost: 355.00 },
    { id: "DH-XVR1B16H-I/T", brand: "DAHUA", category: "cctv", name: "16CH 5MP Cooper 1U 1HDD WizSense XVR (Max 16TB)", cost: 615.00 },

    // --- HDCVI RECORDERS > 5 SERIES ---
    { id: "DH-XVR5416L-I3", brand: "DAHUA", category: "cctv", name: "16CH 5M-N/1080P 1.5U 4HDDs WizSense XVR", cost: 1400.00 },
    { id: "DH-XVR5816S-I3", brand: "DAHUA", category: "cctv", name: "16CH 4K/5MP 2U 8HDDs WizSense XVR", cost: 1869.00 },
    { id: "DH-XVR5832S-I3", brand: "DAHUA", category: "cctv", name: "32CH 5MP/1080P 2U 8HDDs WizSense XVR", cost: 2853.00 },

    // --- HDCVI RECORDERS > 4K-5 SERIES ---
    { id: "DH-XVR5104HS-4KL-I3", brand: "DAHUA", category: "cctv", name: "4CH 4K-N/5MP Compact 1U 1HDD WizSense XVR", cost: 395.00 },
    { id: "DH-XVR5108HS-4KL-I3", brand: "DAHUA", category: "cctv", name: "8CH 4K-N/5MP Compact 1U 1HDD WizSense XVR", cost: 674.00 },
    { id: "DH-XVR5108HS-4KL-I3/T", brand: "DAHUA", category: "cctv", name: "8CH 4K/5MP Compact 1U 1HDD WizSense XVR (2-Way Talk)", cost: 819.00 },
    { id: "DH-XVR5116H-4KL-I3", brand: "DAHUA", category: "cctv", name: "16CH 4K-N/5MP Mini 1U 1HDD WizSense XVR", cost: 1115.00 },
    { id: "DH-XVR5116H-4KL-I3/T", brand: "DAHUA", category: "cctv", name: "16CH 4K/5MP Mini 1U 1HDD WizSense XVR (2-Way Talk)", cost: 1359.00 },
    { id: "DH-XVR5208AN-4KL-I3", brand: "DAHUA", category: "cctv", name: "8CH 4K-N/5MP 1U 2HDDs WizSense XVR", cost: 871.00 },
    { id: "DH-XVR5216AN-4KL-I3", brand: "DAHUA", category: "cctv", name: "16CH 4K-N/5MP 1U 2HDDs WizSense XVR", cost: 1254.00 },
    { id: "DH-XVR5216AN-4KL-I3/T", brand: "DAHUA", category: "cctv", name: "16CH 4K/5MP 1U 2HDDs WizSense XVR (2-Way Talk)", cost: 1499.00 },
    { id: "DH-XVR5232AN-4KL-I3", brand: "DAHUA", category: "cctv", name: "32CH 4K-N/5MP 1U 2HDDs WizSense XVR", cost: 2463.00 },
    { id: "DH-XVR5416L-4KL-I3", brand: "DAHUA", category: "cctv", name: "16CH 4K-N/5MP 1.5U 4HDDs WizSense XVR", cost: 1835.00 },
    { id: "DH-XVR5432L-4KL-I3", brand: "DAHUA", category: "cctv", name: "32CH 4K-N/5MP 1.5U 4HDDs WizSense XVR", cost: 3120.00 },
    { id: "DH-XVR5832S-4KL-I3", brand: "DAHUA", category: "cctv", name: "32CH 4K-N/5MP 2U 8HDDs WizSense XVR", cost: 3508.00 },

    // --- HDCVI RECORDERS > 5MP SERIES ---
    { id: "DH-XVR5104HS-5M-I3/T", brand: "DAHUA", category: "cctv", name: "4CH 5MP Compact 1U 1HDD WizSense XVR (2-Way Talk)", cost: 305.00 },
    { id: "DH-XVR5108HS-5M-I3", brand: "DAHUA", category: "cctv", name: "8CH 5MP Compact 1U 1HDD WizSense XVR", cost: 426.00 },
    { id: "DH-XVR5108HS-5M-I3/T", brand: "DAHUA", category: "cctv", name: "8CH 5MP Compact 1U 1HDD WizSense XVR (2-Way Talk)", cost: 459.00 },
    { id: "DH-XVR5116HS-5M-I3/T", brand: "DAHUA", category: "cctv", name: "16CH 5MP Compact 1U 1HDD WizSense XVR (2-Way Talk)", cost: 729.00 },
    { id: "DH-XVR5216AN-5M-I3/T", brand: "DAHUA", category: "cctv", name: "16CH 5MP 1U 2HDDs WizSense XVR (2-Way Talk)", cost: 949.00 },
    { id: "DH-XVR5232AN-5M-I3", brand: "DAHUA", category: "cctv", name: "32CH 5MP 1U 2HDDs WizSense XVR", cost: 1370.00 },
    { id: "DH-XVR5232AN-5M-I3/T", brand: "DAHUA", category: "cctv", name: "32CH 5MP 1U 2HDDs WizSense XVR (2-Way Talk)", cost: 1479.00 }
];
