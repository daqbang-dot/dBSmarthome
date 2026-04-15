// Fail: pricelist.js
// Ini adalah senarai harga kos terus dari supplier (Cth: RisingNet)

export const senaraiSupplier = {
    // --- KATEGORI: KAMERA ANALOG (HDCVI) ---
    kamera_analog: {
        "DH-HAC-B1A21-U": { jenama: "Dahua", nama: "2MP IR HDCVI Bullet", hargaKos: 47.00 },
        "DH-HAC-T1A21-U": { jenama: "Dahua", nama: "2MP IR HDCVI Eyeball", hargaKos: 46.50 },
        "DH-HAC-T1A51-U": { jenama: "Dahua", nama: "5MP IR HDCVI Eyeball", hargaKos: 76.00 }
    },
    
    // --- KATEGORI: KAMERA IP (NETWORK CAMERA) ---
    kamera_ip: {
        "DH-IPC-HDW1230T1": { jenama: "Dahua", nama: "2MP IR Eyeball IP", hargaKos: 130.00 },
        "DH-IPC-HFW1431S1": { jenama: "Dahua", nama: "4MP IR Bullet IP", hargaKos: 202.00 },
        "Uho-S2E": { jenama: "Uniarch", nama: "2MP Indoor PT Wi-Fi", hargaKos: 60.00 },
        "Uho-P2A-M3F4D": { jenama: "Uniarch", nama: "3MP Outdoor PT Wi-Fi", hargaKos: 96.00 }
    },

    // --- KATEGORI: DECODER (XVR / NVR) ---
    decoder: {
        "DH-XVR1B04H-I": { jenama: "Dahua", nama: "4CH 5MP Cooper 1U DVR", hargaKos: 244.00 },
        "DH-XVR1B08H-I": { jenama: "Dahua", nama: "8CH 5MP Cooper 1U DVR", hargaKos: 355.00 },
        "DHI-NVR1104HS-P": { jenama: "Dahua", nama: "4CH 4PoE NVR", hargaKos: 310.00 }
    },

    // --- KATEGORI: AKSESORI & KABEL ---
    aksesori: {
        "PFM300": { jenama: "Dahua", nama: "DC12V2A Power Adapter", hargaKos: 22.00 },
        "balun_standard": { jenama: "OEM", nama: "Balun Standard (2MP)", hargaKos: 12.00 },
        "bnc_conn": { jenama: "OEM", nama: "BNC Connector (1 pcs)", hargaKos: 2.50 },
        "dc_conn": { jenama: "OEM", nama: "DC Connector (1 pcs)", hargaKos: 1.50 },
        "kabel_utp": { jenama: "OEM", nama: "UTP Cat5e/Cat6 (Roll)", hargaKos: 130.00 }
    }
};

// Tetapan Automatik Margin Keuntungan Anda (Contoh: 30% atau 0.3)
export const markupKeuntungan = 0.30; 
