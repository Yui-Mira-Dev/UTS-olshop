function hideContainerOnSmallScreen() {
    const containerElement = document.querySelector('.container');
    if (window.innerWidth <= 992) {
        containerElement.classList.remove('container');
    } else {
        containerElement.classList.add('container');
    }
}

  // Panggil fungsi pada saat halaman dimuat dan saat ukuran layar berubah
window.addEventListener('DOMContentLoaded', hideContainerOnSmallScreen);
window.addEventListener('resize', hideContainerOnSmallScreen);
