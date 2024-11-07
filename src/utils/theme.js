// Fungsi untuk mengganti tema (terang atau gelap)
export function toggleTheme() {
    // Cek tema saat ini (terang atau gelap)
    const currentTheme = document.body.classList.contains("theme-dark") ? "dark" : "light";
  
    // Toggle kelas "theme-dark" dan "theme-light" pada elemen <body>
    document.body.classList.toggle("theme-dark", currentTheme === "light");
    document.body.classList.toggle("theme-light", currentTheme === "dark");
  
    // Simpan tema yang dipilih ke local storage
    localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
  
    // Update ikon tema
    updateThemeIcon();
  }
  
  // Fungsi untuk memperbarui ikon tema (misalnya, matahari atau bulan)
  export function updateThemeIcon() {
    // Ambil elemen dengan id "theme-icon"
    const themeIcon = document.getElementById("theme-icon");
  
    // Cek apakah tema saat ini gelap
    const isDarkTheme = document.body.classList.contains("theme-dark");
  
    // Toggle kelas "bi-sun-fill" dan "bi-moon-fill" pada ikon
    themeIcon.classList.toggle("bi-sun-fill", !isDarkTheme);
    themeIcon.classList.toggle("bi-moon-fill", isDarkTheme);
  }
  
  // Fungsi untuk mendeteksi tema default perangkat
  function getSystemPreferredTheme() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    return prefersDarkScheme.matches ? "dark" : "light";
  }
  
  // Fungsi untuk menginisialisasi tema saat halaman dimuat
  export function initTheme() {
    // Cek apakah ada tema yang disimpan di localStorage
    const savedTheme = localStorage.getItem("theme");
  
    // Jika tidak ada tema yang disimpan, gunakan tema default perangkat
    if (!savedTheme) {
      const systemTheme = getSystemPreferredTheme();
      document.body.classList.toggle("theme-dark", systemTheme === "dark");
      document.body.classList.toggle("theme-light", systemTheme === "light");
    } else {
      // Jika ada tema yang disimpan, gunakan tema tersebut
      document.body.classList.toggle("theme-dark", savedTheme === "dark");
      document.body.classList.toggle("theme-light", savedTheme === "light");
    }

    updateThemeIcon();
  }