document.addEventListener('DOMContentLoaded', function() {
    const song = document.querySelector('#song');
    song.volume = 0.5; // Setel volume ke 50%

    // Coba memulai pemutaran audio saat halaman dimuat
    const playAudio = () => {
        song.play().catch(error => {
            console.log('Autoplay tidak diperbolehkan. Menunggu interaksi pengguna untuk memulai audio.');
        });
    };

    playAudio();

    // Jika autoplay tidak berfungsi, mulai pemutaran saat pengguna mengklik di halaman
    document.body.addEventListener('click', () => {
        if (song.paused) {
            song.play().then(() => {
                console.log('Audio dimulai setelah interaksi pengguna.');
            }).catch(error => {
                console.error('Gagal memutar audio:', error);
            });
        }
    });

    // Event listener untuk mendeteksi jika audio diputar
    song.addEventListener('play', () => {
        console.log('Audio sedang diputar.');
    });

    // Event listener untuk mendeteksi jika terjadi error
    song.addEventListener('error', (e) => {
        console.error('Error saat memutar audio:', e);
    });
});
