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

let isFanOn = Array(10).fill(false); // Status kipas untuk 10 kipas (mati di awal)
let intervalIds = Array(10).fill(null); // Untuk menyimpan ID interval animasi tiap kipas

// Fungsi untuk mengganti frame animasi
function animateFan(fanElement, currentFanIndex) {
  let currentFrame = 0;
  intervalIds[currentFanIndex] = setInterval(() => {
    fanElement.src = frames[currentFrame]; // Ganti gambar berdasarkan frame saat ini
    currentFrame = (currentFrame + 1) % frames.length; // Ulang dari awal jika sudah sampai frame terakhir
  }, 10);
}

// Fungsi untuk menghidupkan/mematikan kipas tertentu
function toggleFan(fanIndex) {
  const fanElement = document.getElementById(`fan${fanIndex + 1}`);
  const toggleButton = document.getElementById(`toggleFan${fanIndex + 1}`);

  if (isFanOn[fanIndex]) {
    // Matikan kipas
    clearInterval(intervalIds[fanIndex]); // Hentikan animasi
    fanElement.src = 'svg/fanoff.svg'; // Ganti ke gambar kipas mati
    toggleButton.textContent = `Turn On Fan ${fanIndex + 1}`; // Ubah teks tombol
  } else {
    // Hidupkan kipas
    animateFan(fanElement, fanIndex); // Jalankan animasi
    toggleButton.textContent = `Turn Off Fan ${fanIndex + 1}`; // Ubah teks tombol
  }
  isFanOn[fanIndex] = !isFanOn[fanIndex]; // Ubah status kipas
}

// Tambahkan event listener untuk setiap tombol
for (let i = 0; i < 10; i++) {
  document.getElementById(`toggleFan${i + 1}`).addEventListener('click', () => toggleFan(i));
}