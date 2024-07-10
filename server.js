// Fungsi getServerStatus()
async function getServerStatus() {
    // Panggil API Minecraft
    const response = await fetch(`https://api.mcsrvstat.us/bedrock/3/namaserver.com:port`);
    // Uraikan respon JSON jadi objek javascript yang bisa kamu gunakan
    const data = await response.json();

    if (data.online) {
        // Jika Server Online
        document.getElementById("server-status").innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">Server Info</h5>
                        <p class="card-text">
                        Server : ${data.motd.clean}<br>
                        IP : ${data.hostname}<br>
                        Port : ${data.port}<br>
                        Status : ONLINE<br>
                        Players : ${data.players.online} / ${data.players.max}<br>
                        Server Software : ${data.software}<br>
                        Version : ${data.version}<br>
                        </p>
                    </div>`;
    } else {
        // Jika Server Offline
        document.getElementById("server-status").innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">Server Info</h5>
                        <p class="card-text">
                        Server : ${data.motd.clean}<br>
                        Status : OFFLINE<br>
                        Server Software : ${data.software}<br>
                        Version : ${data.version}<br>
                        </p>
                    </div>`;
    }
}

// Panggil Fungsi getServerStatus()
getServerStatus();
