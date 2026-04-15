// Fail: pricelist.js
// Pangkalan Data Harga Kos Pembekal (RisingNet Pricebook)

export const senaraiSupplier = {
    // ==========================================
    // 1. SISTEM CCTV (Kamera & Decoder)
    // ==========================================
    kamera_analog: {
        "dh_hac_t1a21": { jenama: "Dahua", nama: "2MP HDCVI Eyeball (Cooper)", hargaKos: 46.50 },
        "dh_hac_b1a21": { jenama: "Dahua", nama: "2MP HDCVI Bullet (Cooper)", hargaKos: 47.00 },
        "dh_hac_hdw1239": { jenama: "Dahua", nama: "2MP Full-Color HDCVI", hargaKos: 135.00 }
    },
    kamera_ip: {
        "dh_ipc_hdw1230": { jenama: "Dahua", nama: "2MP Entry IR IP Camera", hargaKos: 130.00 },
        "uniarch_s2e": { jenama: "Uniarch", nama: "Uho-S2E 2MP Indoor PT Wi-Fi", hargaKos: 60.00 },
        "imou_ranger2": { jenama: "Imou", nama: "Ranger 2 3MP Wi-Fi PT", hargaKos: 72.00 }
    },
    decoder_xvr_nvr: {
        "dh_xvr1b04": { jenama: "Dahua", nama: "4CH 5MP Cooper XVR", hargaKos: 244.00 },
        "dh_nvr1104": { jenama: "Dahua", nama: "4CH Smart NVR", hargaKos: 310.00 }
    },

    // ==========================================
    // 2. RANGKAIAN & INTERNET (Network / Wi-Fi)
    // ==========================================
    networking_switch: {
        "rg_es205g_p": { jenama: "Ruijie Reyee", nama: "5-Port Gigabit PoE Cloud Switch", hargaKos: 185.00 },
        "rg_es209g_p": { jenama: "Ruijie Reyee", nama: "9-Port Gigabit PoE Cloud Switch", hargaKos: 340.00 }
    },
    networking_ap_router: {
        "rg_ew1200": { jenama: "Ruijie Reyee", nama: "1200M Dual-band Mesh Router", hargaKos: 110.00 },
        "rg_rap2200": { jenama: "Ruijie Reyee", nama: "AC1300 Ceiling Access Point", hargaKos: 290.00 }
    },

    // ==========================================
    // 3. SISTEM PENGGERA & KAWALAN AKSES (Alarm & Access Control)
    // ==========================================
    alarm_system: {
        "bg_v9": { jenama: "Bluguard", nama: "V9 Smart Home Alarm Panel", hargaKos: 380.00 },
        "bg_sensor_door": { jenama: "Bluguard", nama: "Magnetic Door Sensor", hargaKos: 15.00 },
        "bg_siren": { jenama: "Bluguard", nama: "Outdoor Siren Box Set", hargaKos: 65.00 }
    },
    access_control: {
        "eb_emlock": { jenama: "Ebelco", nama: "600lbs EM Lock", hargaKos: 85.00 },
        "eb_pushbtn": { jenama: "Ebelco", nama: "Exit Push Button", hargaKos: 12.00 }
    },

    // ==========================================
    // 4. AKSESORI, KABEL & RAK PERALATAN
    // ==========================================
    kabel_wiring: {
        "cab_utp6": { jenama: "OEM", nama: "UTP Cat6 (Roll 305m)", hargaKos: 160.00 },
        "cab_rg59": { jenama: "OEM", nama: "Coaxial RG59 + Power (Roll)", hargaKos: 180.00 }
    },
    power_supply: {
        "psu_10a": { jenama: "OEM", nama: "12V 10A Metal Box", hargaKos: 92.00 }
    },
    equipment_rack: {
        "st_4u": { jenama: "ST Rack", nama: "4U Wall Mount Rack", hargaKos: 145.00 },
        "st_6u": { jenama: "ST Rack", nama: "6U Wall Mount Rack", hargaKos: 180.00 }
    },
    monitor_display: {
        "vs_va22": { jenama: "ViewSonic", nama: "22-inch FHD Monitor", hargaKos: 320.00 }
    }
};

// MARKUP KEUNTUNGAN KESELURUHAN (30%)
export const markupKeuntungan = 0.30; 
