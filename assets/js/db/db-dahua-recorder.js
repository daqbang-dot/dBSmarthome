// Fail: assets/js/db/db-dahua-recorder.js

const dahuaRecorders = [
    // --- COOPER SERIES ---
    { id: "DH-XVR1B04H-I/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "4CH 5MP Cooper 1U 1HDD WizSense XVR", cost: 244.00 },
    { id: "DH-XVR1B08H-I/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "8CH 5MP Cooper 1U 1HDD WizSense XVR", cost: 355.00 },
    { id: "DH-XVR1B16H-I/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 5MP Cooper 1U 1HDD WizSense XVR", cost: 615.00 },
    
    // --- 5 SERIES ---
    { id: "DH-XVR5416L-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 5M-N/1080P 1.5U 4HDDs WizSense XVR", cost: 1400.00 },
    { id: "DH-XVR5816S-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 4K/5MP 2U 8HDDs WizSense XVR", cost: 1869.00 },
    { id: "DH-XVR5832S-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "32CH 5MP/1080P 2U 8HDDs WizSense XVR", cost: 2853.00 },
    
    // --- 4K-5 SERIES ---
    { id: "DH-XVR5104HS-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "4CH 4K-N/5MP Compact 1U 1HDD WizSense XVR", cost: 395.00 },
    { id: "DH-XVR5108HS-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "8CH 4K-N/5MP Compact 1U 1HDD WizSense XVR", cost: 674.00 },
    { id: "DH-XVR5108HS-4KL-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "8CH 4K/5MP Compact 1U 1HDD WizSense XVR (2-Way)", cost: 819.00 },
    { id: "DH-XVR5116H-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 4K-N/5MP Mini 1U 1HDD WizSense XVR", cost: 1115.00 },
    { id: "DH-XVR5116H-4KL-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 4K/5MP Mini 1U 1HDD WizSense XVR (2-Way)", cost: 1359.00 },
    { id: "DH-XVR5208AN-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "8CH 4K-N/5MP 1U 2HDDs WizSense XVR", cost: 871.00 },
    { id: "DH-XVR5216AN-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 4K-N/5MP 1U 2HDDs WizSense XVR", cost: 1254.00 },
    { id: "DH-XVR5216AN-4KL-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 4K/5MP 1U 2HDDs WizSense XVR (2-Way)", cost: 1499.00 },
    { id: "DH-XVR5232AN-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "32CH 4K-N/5MP 1U 2HDDs WizSense XVR", cost: 2463.00 },
    { id: "DH-XVR5416L-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 4K-N/5MP 1.5U 4HDDs WizSense XVR", cost: 1835.00 },
    { id: "DH-XVR5432L-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "32CH 4K-N/5MP 1.5U 4HDDs WizSense XVR", cost: 3120.00 },
    { id: "DH-XVR5832S-4KL-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "32CH 4K-N/5MP 2U 8HDDs WizSense XVR", cost: 3508.00 },
    
    // --- 5MP SERIES ---
    { id: "DH-XVR5104HS-5M-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "4CH 5MP Compact 1U 1HDD WizSense XVR (2-Way)", cost: 305.00 },
    { id: "DH-XVR5108HS-5M-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "8CH 5MP Compact 1U 1HDD WizSense XVR", cost: 426.00 },
    { id: "DH-XVR5108HS-5M-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "8CH 5MP Compact 1U 1HDD WizSense XVR (2-Way)", cost: 459.00 },
    { id: "DH-XVR5116HS-5M-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 5MP Compact 1U 1HDD WizSense XVR (2-Way)", cost: 729.00 },
    { id: "DH-XVR5216AN-5M-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "16CH 5MP 1U 2HDDs WizSense XVR (2-Way)", cost: 949.00 },
    { id: "DH-XVR5232AN-5M-I3", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "32CH 5MP 1U 2HDDs WizSense XVR", cost: 1370.00 },
    { id: "DH-XVR5232AN-5M-I3/T", group: "DAHUA HDCVI RECORDERS", brand: "DAHUA", name: "32CH 5MP 1U 2HDDs WizSense XVR (2-Way)", cost: 1479.00 }
];
