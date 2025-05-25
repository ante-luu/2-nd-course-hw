// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Gallery image loading
function loadGalleryImages() {
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        // Здесь будет код для загрузки изображений из папки img
        console.log('Gallery container ready for images');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryImages();
}); 