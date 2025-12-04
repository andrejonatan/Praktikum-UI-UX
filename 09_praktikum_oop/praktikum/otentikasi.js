function cekLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const validUser = "ahmad2017";
    const validPass = "integrity";

    if (user === validUser && pass === validPass) {
        alert("Login Sukses!");

        // Alihkan ke halaman baru dengan pesan sukses
        document.body.innerHTML = "<h1>Login Sukses</h1>";
        return false; // supaya tidak reload
    } else {
        alert("Login Gagal! Username atau password salah.");
        return false; // tetap di halaman login
    }
}
