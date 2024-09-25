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

// Fungsi untuk mengganti frame
function animateFan() {
  const fan = document.getElementById('fan');
  fan.src = frames[currentFrame]; // Ganti gambar berdasarkan frame saat ini
  currentFrame = (currentFrame + 1) % frames.length; // Ulang dari awal jika sudah sampai frame terakhir
}

// Atur interval untuk mengganti frame setiap 100ms
setInterval(animateFan, 10);
