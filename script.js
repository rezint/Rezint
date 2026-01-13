// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, steps, and support cards
document.querySelectorAll('.feature-card, .step, .support-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Download button click tracking
document.querySelector('.btn-download')?.addEventListener('click', () => {
    console.log('Download initiated for Windows version');
    // You can add analytics tracking here
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                display: none;
            `;
            
            navbar.appendChild(menuToggle);
            
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }
};

// Initialize
window.addEventListener('load', () => {
    createMobileMenu();
});

window.addEventListener('resize', () => {
    createMobileMenu();
});
