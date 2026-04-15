// Fail: pricelist.js
// Pangkalan Data Harga Kos Pembekal (RisingNet) & Tetapan Margin

// 1. TETAPAN MARGIN KEUNTUNGAN (0.35 = 35% Markup dari Harga Kos)
export const markupKeuntungan = 0.35; 

// 2. HARGA SERVIS & UPAH (Harga tetap pelanggan, tiada markup dikira pada nilai ini)
export const hargaServis = {
    alarm_basic: 450.00,
    alarm_pro: 850.00,
    upah_asas: 300.00,
    caj_concrete: 150.00,
    caj_conceal: 200.00
};

// 3. SENARAI HARGA KOS PEMBEKAL (Dealer Price)
export const senaraiSupplier = {
    kamera: {
        "cam_analog": { jenama: "Dahua", nama: "DH-HAC-T1A21 (2MP Eyeball)", hargaKos: 46.50 },
        "cam_4mp": { jenama: "Dahua", nama: "DH-HAC-T1A51 (5MP Eyeball)", hargaKos: 76.00 },
        "cam_colorvu": { jenama: "Dahua", nama: "DH-IPC-HDW1239 (2MP Full-Color)", hargaKos: 135.00 },
        "cam_ptz": { jenama: "Dahua", nama: "DH-SD22204 (2MP 4x PTZ)", hargaKos: 555.00 }
    },
    decoder: {
        "dec_4ch": { jenama: "Dahua", nama: "DH-XVR1B04H (4CH XVR)", hargaKos: 244.00 },
        "dec_8ch": { jenama: "Dahua", nama: "DH-XVR1B08H (8CH XVR)", hargaKos: 355.00 },
        "dec_16ch": { jenama: "Dahua", nama: "DH-XVR1B16H (16CH XVR)", hargaKos: 615.00 }
    },
    psu: {
        "psu_5a": { nama: "PTW-12V5A Adaptor", hargaKos: 30.00 },
        "psu_10a": { nama: "12V 10A Metal Box", hargaKos: 92.00 },
        "psu_20a": { nama: "12V 20A Metal Box", hargaKos: 125.00 }
    },
    kabel: {
        "cab_utp": { nama: "UTP Cat5e/Cat6 (Roll 305m)", hargaKos: 130.00 },
        "cab_rg59": { nama: "Coaxial RG59 (Roll)", hargaKos: 160.00 }
    },
    aksesori: {
        "bal_2mp": { nama: "Balun Standard (Pasang)", hargaKos: 12.00 },
        "bal_5mp": { nama: "Balun HQ (Pasang)", hargaKos: 25.00 },
        "bnc": { nama: "BNC Connector", hargaKos: 1.20 },
        "dc_conn": { nama: "DC Connector Plug", hargaKos: 1.00 }
    },
    // Senarai tambahan untuk rujukan masa hadapan (Networking/Smart Home)
    ekstra: {
        "uniarch_s2e": { jenama: "Uniarch", nama: "Uho-S2E 2MP Indoor PT Wi-Fi", hargaKos: 60.00 },
        "imou_ranger2": { jenama: "Imou", nama: "Ranger 2 3MP Wi-Fi PT", hargaKos: 72.00 },
        "rg_ew1200": { jenama: "Ruijie", nama: "1200M Dual-band Mesh Router", hargaKos: 110.00 },
        "bg_v9": { jenama: "Bluguard", nama: "V9 Smart Home Alarm Panel", hargaKos: 380.00 }
    }
};
