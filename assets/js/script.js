document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    menuBtn.addEventListener('click', () => {
        // Attiva/Disattiva il menu
        navLinks.classList.toggle('active');
        // Animazione hamburger
        menuBtn.classList.toggle('active');
        // Impedisci lo scroll della pagina quando il menu è aperto
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Chiudi il menu quando si clicca su un link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});
                              
