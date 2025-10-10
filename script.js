const nama = document.getElementById("username");
const password = document.getElementById("password");

function login() {
      const enteredName = nama.value.trim();
      const normalizedName = enteredName.toLowerCase();

      const enteredPassword = password.value.toLowerCase();

      if (normalizedName === "indonesiacemas" && enteredPassword === "admin123") {
            alert("Login Berhasil, selamat datang " + enteredName);
            window.location.href = "../index.html";
      } else {
            alert("Login Gagal");
      }
}