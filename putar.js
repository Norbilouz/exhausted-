<html>
<head>
  <style>
    #fan {
      width: 200px;
      height: 200px;
    }
  </style>
</head>
<body>
  <img id="fan" src="frame1.svg" alt="Fan Image"/>

  <script>
    // Daftar frame animasi (file SVG berbeda)
    const frames = ['fan1.svg', 'fan2.svg', 'fan3.svg', 'fan4.svg', 'fan5.svg', 'fan6.svg', 'fan7.svg', 'fan8.svg'];
    let currentFrame = 0;

    // Fungsi untuk mengganti frame
    function animateFan() {
      document.getElementById('fan').src = frames[currentFrame];
      currentFrame = (currentFrame + 1) % frames.length; // Ulang dari awal jika sudah sampai frame terakhir
    }

    // Mengganti frame setiap 100ms (sesuaikan dengan kecepatan yang diinginkan)
    setInterval(animateFan, 1);
  </script>
</body>
</html>
