// Simulasi sistem log / cap masa untuk segmen WORK
function updateSystemLog() {
    const logElement = document.getElementById('time-log');
    if (logElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ms-MY', { hour12: false });
        logElement.textContent = `Semakan Terakhir: ${timeString} (Berjaya)`;
    }
}

// Kemaskini masa setiap 1 saat
setInterval(updateSystemLog, 1000);
updateSystemLog();

console.log("Sistem dB Smarthome sedia untuk integrasi Firebase...");
