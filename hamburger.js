document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.header-right');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked (useful for single-page apps)
    document.querySelectorAll('.header-right a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Only close if on mobile
                navMenu.classList.remove('active');
            }
        });
    });
});