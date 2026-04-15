// Fail: assets/js/db/db-dahua-network.js

const dahuaNetworkCameras = [
    // --- VALUE SERIES ---
    { id: "DH-IPC-HDPW1230R1-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Entry IR Vari-focal Dome (2.8-12mm)", cost: 397.00 },
    { id: "DH-IPC-HDPW1431R1P-ZS-2812-S4", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry IR Vari-focal Dome (2.8-12mm)", cost: 460.00 },
    { id: "DH-IPC-HDW1230T1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Eyeball (2.8mm)", cost: 130.00 },
    { id: "DH-IPC-HDW1431T1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry IR Fixed-focal Eyeball (2.8mm)", cost: 202.00 },
    { id: "DH-IPC-HFW1230S1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Mini-Bullet (3.6mm)", cost: 130.00 },
    { id: "DH-IPC-HFW1230T1-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Entry IR Vari-focal Bullet (2.8-12mm)", cost: 389.00 },
    { id: "DH-IPC-HFW1431S1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry IR Fixed-focal Bullet (3.6mm)", cost: 202.00 },
    { id: "DH-IPC-HFW1431T1-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry IR Vari-focal Bullet (2.8-12mm)", cost: 460.00 },

    // --- ENTRY SERIES ---
    { id: "DH-IPC-HDBW1239E1-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Entry Smart Dual Light Dome (2.8mm)", cost: 163.00 },
    { id: "DH-IPC-HDBW1439E1-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry Smart Dual Light Dome (2.8mm)", cost: 237.00 },
    { id: "DH-IPC-HDW1639T-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP Entry Smart Dual Light Eyeball (2.8mm)", cost: 272.00 },
    { id: "DH-IPC-HDPW1431R1P-ZS-S4", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry IR Vari-focal Dome", cost: 472.00 },
    { id: "DH-IPC-HFW1639TC-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP Entry Smart Dual Light Bullet", cost: 272.00 },

    // --- FULL COLOR SERIES ---
    { id: "DH-IPC-HDW1239T1-LED", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Lite Full-color Eyeball (2.8mm)", cost: 135.00 },
    { id: "DH-IPC-HDW1239V-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Entry Smart Dual Light Eyeball (2.8mm)", cost: 158.00 },
    { id: "DH-IPC-HDW1439V-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry Smart Dual Light Eyeball (2.8mm)", cost: 222.00 },
    { id: "DH-IPC-HFW1239S1-LED", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Lite Full-color Bullet (3.6mm)", cost: 135.00 },
    { id: "DH-IPC-HFW1239TL1-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Entry Smart Dual Light Bullet", cost: 158.00 },
    { id: "DH-IPC-HFW1439S1-LED", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry Full-color Bullet (3.6mm)", cost: 263.00 },
    { id: "DH-IPC-HFW1439TL1-A-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Entry Smart Dual Light Bullet", cost: 222.00 },

    // --- WIZSENSE 2 SERIES - AI ---
    { id: "DH-IPC-HDBW2241E-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Fixed-focal Dome WizSense (2.8mm)", cost: 333.00 },
    { id: "DH-IPC-HDBW2241R-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Vari-focal Dome WizSense", cost: 595.00 },
    { id: "DH-IPC-HDBW2441E-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Fixed-focal Dome WizSense (2.8mm)", cost: 369.00 },
    { id: "DH-IPC-HDBW2441R-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Vari-focal Dome WizSense (2.7-13.5mm)", cost: 634.00 },
    { id: "DH-IPC-HDBW2541E-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP IR Fixed-focal Dome WizSense (2.8mm)", cost: 398.00 },
    { id: "DH-IPC-HDBW2541R-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP IR Vari-focal Dome WizSense (2.7-13.5mm)", cost: 704.00 },
    { id: "DH-IPC-HDBW2649E-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP Smart Dual Light Dome WizSense (2.8mm)", cost: 427.00 },
    { id: "DH-IPC-HDBW2841E-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP IR Fixed-focal Dome WizSense (2.8mm)", cost: 474.00 },
    { id: "DH-IPC-HDBW2841R-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP IR Vari-focal Dome WizSense (2.7-13.5mm)", cost: 814.00 },
    { id: "DH-IPC-HDW2241T-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Fixed-focal Eyeball WizSense (2.8mm)", cost: 328.00 },
    { id: "DH-IPC-HDW2441T-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Fixed-focal Eyeball WizSense (2.8mm)", cost: 354.00 },
    { id: "DH-IPC-HDW2541T-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP IR Fixed-focal Eyeball WizSense (3.6mm)", cost: 393.00 },
    { id: "DH-IPC-HDW2841T-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP IR Fixed-focal Eyeball WizSense (3.6mm)", cost: 469.00 },
    { id: "DH-IPC-HFW2241S-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Fixed-focal Bullet WizSense (3.6mm)", cost: 333.00 },
    { id: "DH-IPC-HFW2241T-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Vari-focal Bullet WizSense (2.7-13.5mm)", cost: 595.00 },
    { id: "DH-IPC-HFW2441S-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Fixed-focal Bullet WizSense (3.6mm)", cost: 359.00 },
    { id: "DH-IPC-HFW2441T-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Vari-focal Bullet WizSense (2.7-13.5mm)", cost: 634.00 },
    { id: "DH-IPC-HFW2541S-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP IR Fixed-focal Bullet WizSense (3.6mm)", cost: 398.00 },
    { id: "DH-IPC-HFW2541T-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP IR Vari-focal Bullet WizSense (2.7-13.5mm)", cost: 704.00 },
    { id: "DH-IPC-HFW2841S-S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP IR Fixed-focal Bullet WizSense (3.6mm)", cost: 474.00 },
    { id: "DH-IPC-HFW2841T-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP IR Vari-focal Bullet WizSense (2.7-13.5mm)", cost: 814.00 },

    // --- WIZSENSE 2 SERIES SMART DUAL ILLUMINATOR ---
    { id: "DH-IPC-HDW2249T-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Smart Dual Light Eyeball WizSense (3.6mm)", cost: 343.00 },
    { id: "DH-IPC-HDW2249T-ZS-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Smart Dual Light Vari-focal Eyeball (2.7-13.5mm)", cost: 599.00 },
    { id: "DH-IPC-HDBW2249F-AS-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Smart Dual Light Dome WizSense", cost: 392.00 },
    { id: "DH-IPC-HDBW2449F-AS-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Dome WizSense (2.8mm)", cost: 427.00 },
    { id: "DH-IPC-HDBW2449E-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Dome WizSense (2.8mm)", cost: 384.00 },
    { id: "DH-IPC-HDW2549TM-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Smart Dual Light Eyeball WizSense (3.6mm)", cost: 420.00 },
    { id: "DH-IPC-HDW2649T-ZS-IL-27135", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP Smart Dual Light Vari-focal Eyeball (2.7-13.5mm)", cost: 724.00 },
    { id: "DH-IPC-HDW2849T-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP Smart Dual Light Eyeball WizSense (3.6mm)", cost: 499.00 },
    { id: "DH-IPC-HFW2249S-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Smart Dual Light Bullet WizSense (3.6mm)", cost: 353.00 },
    { id: "DH-IPC-HFW2449S-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Bullet WizSense (3.6mm)", cost: 379.00 },
    { id: "DH-IPC-HFW2449TL-S-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Active Deterrance Bullet (2.8mm)", cost: 363.00 },
    { id: "DH-IPC-HFW2549S-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Smart Dual Light Bullet WizSense (3.6mm)", cost: 408.00 },
    { id: "DH-IPC-HFW2649S-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP Smart Dual Light Bullet WizSense (3.6mm)", cost: 423.00 },
    { id: "DH-IPC-HFW2649T-ZAS-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP Smart Dual Light Vari-focal Bullet (3.6mm)", cost: 760.00 },
    { id: "DH-IPC-HFW2849S-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP Smart Dual Light Bullet WizSense", cost: 499.00 },

    // --- WIZSENSE 2 SERIES WIZCOLOR ---
    { id: "DH-IPC-HFW2449TL-S-PRO-0360B", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP WizColor Fixed-focal Bullet (3.6mm)", cost: 405.00 },
    { id: "DH-SD2C400NA-B-PV-S2-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP WizColor WizSense PT Camera", cost: 420.00 },
    { id: "DH-IPC-HDW2449T-S-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP WizColor Fixed-focal Eyeball", cost: 405.00 },
    { id: "DH-HFW2249TL-S-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP WizColor Fixed-focal Bullet (3.6mm)", cost: 375.00 },
    { id: "DH-IPC-HDW2249T-S-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP WizColor Fixed-focal Eyeball (3.6mm)", cost: 375.00 },
    { id: "DH-IPC-HFW2849TL-S-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP WizColor Fixed-focal Bullet", cost: 507.00 },
    { id: "DH-IPC-PTS2249B-E2-S-PV-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2+2MP WizColor Dual-lens Pan & Tilt", cost: 439.00 },

    // --- WIZSENSE 3 SERIES - AI ---
    { id: "DH-IPC-HDBW3241R-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Vari-focal Dome WizSense (2.7-13.5mm)", cost: 0.00 },
    { id: "DH-IPC-HDBW3241E-AS-S2", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Fixed-focal Dome WizSense (2.8mm)", cost: 405.00 },
    { id: "DH-IPC-HDBW3441E-AS-S2", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Fixed-focal Dome WizSense (2.8mm)", cost: 430.00 },
    { id: "DH-IPC-HDBW3449E-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Fixed-focal Dome", cost: 549.00 },
    { id: "DH-IPC-HFW3241E-AS-S2", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Fixed-focal Bullet WizSense", cost: 0.00 },
    { id: "DH-IPC-HFW3241T-ZS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Vari-focal Bullet WizSense (2.7-13.5mm)", cost: 0.00 },
    { id: "DH-IPC-HFW3449E-S-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Fixed-focal Bullet", cost: 549.00 },

    // --- WIZSENSE TiOC SERIES ---
    { id: "DH-IPC-HDBW3849R-ZAS-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP Smart Dual Light Vari-focal Dome (2.7-13.5mm)", cost: 1089.00 },
    { id: "DH-IPC-HDW3449H-AS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Active Deterrance Eyeball (2.8mm)", cost: 0.00 },
    { id: "DH-IPC-HDW3549H-AS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Smart Dual Light Active Deterrance Eyeball (2.8mm)", cost: 0.00 },
    { id: "DH-IPC-HDW3849H-AS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP Smart Dual Light Active Deterrance Eyeball (3.6mm)", cost: 0.00 },
    { id: "DH-IPC-HFW3549T1-AS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Smart Dual Light Active Deterrance Bullet (3.6mm)", cost: 0.00 },
    { id: "DH-IPC-HFW3849T1-AS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP Smart Dual Light Active Deterrance Bullet (3.6mm)", cost: 0.00 },
    { id: "DH-IPC-HFW3849T-ZAS-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP Smart Dual Light Vari-focal Bullet (2.7-13.5mm)", cost: 1089.00 },
    { id: "DH-IPC-PDW3849-A180-E2-AS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2x4MP TiOC Duo Splicing Eyeball (2.8mm)", cost: 899.00 },
    { id: "DH-IPC-PFW3849S-A180-AS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2x4MP TiOC Duo Splicing Bullet (2.8mm)", cost: 999.00 },
    { id: "DH-IPC-HFW3449T1-ZAS-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Active Deterrance Vari-focal", cost: 0.00 },

    // --- WIZSENSE TiOC PRO WIZCOLOR ---
    { id: "DH-IPC-HFW3449T1-AS-PV-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP WizColor TiOC PRO Fixed-focal Bullet (3.6mm)", cost: 779.00 },
    { id: "DH-IPC-HFW3649T1-AS-PV-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP Smart Dual Light Active Deterrance Bullet", cost: 849.00 },

    // --- WIZMIND 5 SERIES - AI ---
    { id: "DH-IPC-HDBW5442E-ZE", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Vari-focal Vandal-proof Dome (2.7-12mm)", cost: 0.00 },
    { id: "DH-IPC-HDBW5842E-ZE", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP IR Vari-focal Vandal-proof Dome WizMind", cost: 0.00 },
    { id: "DH-IPC-HFW5241E-ZE", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Vari-focal Bullet WizMind", cost: 0.00 },
    { id: "DH-IPC-HFW5442E-ZE", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Vari-focal Bullet WizMind (2.7-12mm)", cost: 0.00 },
    { id: "DH-IPC-HFW5459T-ASE-IL", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Fixed-focal Bullet (3.6mm)", cost: 1010.00 },
    { id: "DH-IPC-MFW5241T2-E3-ASE", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3x2MP Triple-Sight Perimeter Protection Bullet", cost: 1385.00 },

    // --- WIZMIND 8 SERIES & X SERIES ---
    { id: "DH-IPC-HDW8441X-3D", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP WizMind Dual-Lens People Counting", cost: 1569.00 },
    { id: "DH-IPC-HFW7842H-Z-X", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP IR Bullet WizMind Network Camera", cost: 0.00 },

    // --- PANORAMIC & PINHOLE SERIES ---
    { id: "DH-IPC-EW5541-AS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP WizMind IR Fisheye (1.4mm)", cost: 0.00 },
    { id: "DH-IPC-EBW5641P-AS", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "6MP IR Fisheye WizMind", cost: 849.00 },
    { id: "DH-IPC-HUM4231S", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Fixed-focal Pinhole (2.8mm)", cost: 443.00 },
    { id: "DH-IPC-HUM4431S-L4", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Fixed-focal Pinhole (2.8mm)", cost: 417.00 },

    // --- PTZ SERIES ---
    { id: "DH-SD2A300NB-GNY-A-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3MP Smart Dual Light Network PT (4.0mm)", cost: 283.00 },
    { id: "DH-SD2A500NB-GNY-A-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Smart Dual Light Network PT (4.0mm)", cost: 320.00 },
    { id: "DH-SD3A205-GN-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Starlight IR AI WizSense PTZ (2.7-13.5mm)", cost: 540.00 },
    { id: "DH-SD3C205DB-GNY-A-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP 5x Smart Dual Light WizSense PTZ (2.7-13.5mm)", cost: 560.00 },
    { id: "DH-SD3E405DB-GNY-A-PV1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP 5x TiOC WizSense PTZ (2.7-13.5mm)", cost: 774.00 },
    { id: "DH-SD3E410DB-GNY-A-PV1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP 10x TiOC WizSense PTZ (4-40mm)", cost: 899.00 },
    { id: "DH-SD42C212T-HN", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP 12x Starlight PTZ (5.3-64mm)", cost: 0.00 },
    { id: "DH-SD49225DB-HNY", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP 25x Ordinary IR Network PTZ (4.8-120mm)", cost: 1480.00 },
    { id: "DH-SD49425DB-HNY", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP 25x Starlight IR Network PTZ (5-125mm)", cost: 1561.00 },
    { id: "DH-SD49425DB-HNY-GQ-EAU", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP 25x Starlight IR 4G PTZ (5-125mm)", cost: 2560.00 },
    { id: "DH-SD5A225GB-HNR", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP 25x Starlight IR WizSense PTZ (4.8-120mm)", cost: 2290.00 },
    { id: "DH-SD5A245GB-HNR", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP 45x Starlight IR Network PTZ (3.95-177.75mm)", cost: 3413.00 },
    { id: "DH-SD5A432GB-HNR", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP 32x Starlight IR WizSense PTZ (4.8-154mm)", cost: 0.00 },
    { id: "DH-SD5A825GA-HNR", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP 25x Starlight IR WizSense PTZ (5.4-135mm)", cost: 4089.00 },
    { id: "DH-SDT2A200-2F-NB-A-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2+2MP Smart Dual Light WizSense X-Spans PT (4mm)", cost: 349.00 },
    { id: "DH-SDT4E225-4F-GB-A-0280", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "X-Spans 4+2MP 25x Smart Dual Light PTZ", cost: 1639.00 },
    { id: "SDT4E425-4F-GB-A-PV1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "X-Spans 4MP+4MP 25x TiOC WizSense PTZ", cost: 1880.00 },
    { id: "SDT4E425-8P-GB-APV1", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP+4MP 25x Starlight TiOC Panoramic PTZ", cost: 1920.00 },
    { id: "DH-IPC-PT1239HP-PV-0280B", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP Smart Dual Light Active Deterrance PT (2.8mm)", cost: 162.00 },
    { id: "DH-IPC-PT1439HP-PV-0360B", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light Active Deterrance PT (3.6mm)", cost: 235.00 },

    // --- WIZCOLOR PT CAMERA ---
    { id: "DH-IPC-PT2849C1-S-PV-LED-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "8MP WizColor Active Deterrance PT", cost: 515.00 },

    // --- WIRELESS SERIES ---
    { id: "DH-H3A", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3MP Indoor Wi-Fi Pan & Tilt (3.6mm)", cost: 85.00 },
    { id: "DH-H5A", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Indoor Wi-Fi Pan & Tilt (3.6mm)", cost: 122.00 },
    { id: "DH-IPC-HFW1430DT-STW", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Fixed-focal WiFi Bullet (3.6mm)", cost: 219.00 },
    { id: "DH-IPC-HDBW1430DE-SW", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP IR Fixed-focal Wi-Fi Dome (2.8mm)", cost: 232.00 },
    { id: "DH-IPC-HDBW1230DE-SW", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "2MP IR Fixed-focal Wi-Fi Dome (2.8mm)", cost: 189.00 },
    { id: "DH-P5AE-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Wireless Network PT (4.0mm)", cost: 209.00 },
    { id: "DH-P3AE-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3MP Wireless Network PT (4.0mm)", cost: 169.00 },
    { id: "DH-P5B-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Outdoor Wi-Fi Pan & Tilt (3.6mm)", cost: 299.00 },
    { id: "DH-P3B-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3MP Outdoor Wi-Fi Pan & Tilt (3.6mm)", cost: 229.00 },
    { id: "DH-P3D-3F-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3+3MP Outdoor Wi-Fi Dual-Lens PT (2.8mm)", cost: 269.00 },
    { id: "DH-P5D-5F-PV", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5+5MP Outdoor Wi-Fi Dual-Lens PT (2.8mm)", cost: 349.00 },
    { id: "DH-C5A", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Indoor Wi-Fi Cube (2.8mm)", cost: 102.00 },
    { id: "DH-C3A", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3MP Indoor Wi-Fi Cube (2.8mm)", cost: 78.00 },
    { id: "DH-H5B", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5MP Indoor Wi-Fi Pan & Tilt (3.6mm)", cost: 136.00 },
    { id: "DH-H3B", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3MP Indoor Wi-Fi Pan & Tilt (3.6mm)", cost: 102.00 },
    { id: "DH-H5D-5F", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "5+5MP Indoor Wi-Fi Dual-Lens PT (3.6mm)", cost: 239.00 },
    { id: "DH-IPC-HFW2441DGP-4G-SP-EAU-B-0360B", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "4MP Smart Dual Light 4G Solar Bullet", cost: 729.00 },
    { id: "DH-IPC-PTS2649DCP-3E3Z-S4GEAUB20-3684-PRO", group: "DAHUA NETWORK CAMERA", brand: "DAHUA", name: "3+3MP WizColor Hybrid-zoom PT 4G Solar", cost: 849.00 }
];
