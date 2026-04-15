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
    // Nota: Harga asal adalah "Ask Price", diletakkan nilai 0.00. Anda boleh kemas kini kemudian di dalam kod.
    { id: "DH-HAC-HDW2501T-Z-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Eyeball (2.7-13.5mm Motorized)", cost: 0.00 },
    { id: "DH-HAC-HDW2501TQ-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI Quick-install IR Eyeball (3.6mm)", cost: 0.00 },
    { id: "DH-HAC-HFW2501E-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Bullet Camera (3.6mm)", cost: 0.00 },
    { id: "DH-HAC-HFW2501TU-Z-A", brand: "DAHUA", category: "cctv", name: "5MP Starlight HDCVI IR Bullet (2.7-13.5mm Motorized)", cost: 0.00 }
];
