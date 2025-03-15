function validateLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  if (email === "") {
    emailError.textContent = "email tidak boleh kosong.";
    return false; // Mencegah form dikirim
  }

  if (password === "") {
    passwordError.textContent = "Password tidak boleh kosong.";
    return false; // Mencegah form dikirim
  }

  if (email !== "admin@nz.com" || password !== "password123") {
    // Menampilkan pesan error jika username atau password salah
    if (email !== "admin@nz.com") {
      usernameError.textContent = "email salah.";
    }
    if (password !== "password123") {
      passwordError.textContent = "Password salah.";
    }
    return false; // Mencegah form dikirim
  }

  alert("Login berhasil!");
  return true; // Form dikirim
}
