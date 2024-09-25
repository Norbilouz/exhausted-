// Daftar frame animasi
const frames = [
  'svg/fan1.svg',
  'svg/fan2.svg',
  'svg/fan3.svg',
  'svg/fan4.svg',
  'svg/fan5.svg',
  'svg/fan6.svg',
  'svg/fan7.svg',
  'svg/fan8.svg'
];

 let currentFrame = 0; // Frame saat ini
let isFanOn = false; // Status kipas (mati di awal)
let intervalId = null; // Untuk menyimpan ID interval animasi

const fan = document.getElementById('fan');
const toggleButton = document.getElementById('toggleFan');

// Fungsi untuk mengganti frame animasi
function animateFan() {
  fan.src = frames[currentFrame]; // Ganti gambar berdasarkan frame saat ini
  currentFrame = (currentFrame + 1) % frames.length; // Ulang dari frame pertama jika sudah sampai frame terakhir
}

// Fungsi untuk menghidupkan/mematikan kipas
function toggleFan() {
  if (isFanOn) {
    // Matikan kipas
    clearInterval(intervalId); // Hentikan animasi
    fan.src = 'svg/fanoff.svg'; // Ganti ke gambar kipas mati
    toggleButton.textContent = 'Turn On Fan'; // Ubah teks tombol
  } else {
    // Hidupkan kipas
    intervalId = setInterval(animateFan, 5 ); // Jalankan animasi setiap 20 ms
    toggleButton.textContent = 'Turn Off Fan'; // Ubah teks tombol
  }
  isFanOn = !isFanOn; // Ubah status kipas
}

// Pasang event listener untuk tombol on/off
toggleButton.addEventListener('click', toggleFan);