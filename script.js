document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu if a nav link is clicked (for single-page sites or smooth UX)
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Only close on mobile
                    mainNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });
    }
});