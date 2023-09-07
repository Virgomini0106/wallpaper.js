const wallpaperImages = [
    'wallpaper1.jpg',
    'wallpaper2.jpg',
    'wallpaper3.jpg',
    // Tambahkan lebih banyak gambar latar belakang di sini
];

function getRandomWallpaper() {
    const randomIndex = Math.floor(Math.random() * wallpaperImages.length);
    return wallpaperImages[randomIndex];
}

function setRandomWallpaper() {
    const wallpaperElement = document.getElementById('wallpaper');
    const randomWallpaper = getRandomWallpaper();
    wallpaperElement.style.backgroundImage = `url(${randomWallpaper})`;
}

// Set latar belakang pertama kali saat halaman dimuat
setRandomWallpaper();

// Ganti latar belakang secara periodik (misalnya setiap 10 detik)
setInterval(setRandomWallpaper, 10000);
