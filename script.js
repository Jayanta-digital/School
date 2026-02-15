// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navigation between sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target section
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Remove active class from all sections and links
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active-section');
        });
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // Add active class to target section and clicked link
        targetSection.classList.add('active-section');
        link.classList.add('active');
        
        // Close mobile menu
        navMenu.classList.remove('active');
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Image Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Create dots
const dotsContainer = document.querySelector('.slider-dots');
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    // Wrap around
    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

// Auto slide
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);

// Gallery slider - Image Gallery
const imageGallery = document.getElementById('imageGallery');
if (imageGallery) {
    // Clone items for infinite scroll effect
    const galleryItems = imageGallery.innerHTML;
    imageGallery.innerHTML += galleryItems + galleryItems;
}

// Gallery slider - Achievement Gallery
const achievementGallery = document.getElementById('achievementGallery');
if (achievementGallery) {
    // Clone items for infinite scroll effect
    const achievementItems = achievementGallery.innerHTML;
    achievementGallery.innerHTML += achievementItems + achievementItems;
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.about-content, .desk-content, .staff-card, .notice-item, .link-card, .contact-item, .accreditation-item, .result-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Load notices from backend (PHP simulation - can be connected to actual backend)
async function loadNotices() {
    // This function will fetch notices from the backend
    // For now, it's using static data from HTML
    // In production, uncomment the fetch call below:
    
    /*
    try {
        const response = await fetch('get_notices.php');
        const notices = await response.json();
        
        const noticeContainer = document.getElementById('noticeContainer');
        noticeContainer.innerHTML = '';
        
        notices.forEach(notice => {
            const noticeItem = document.createElement('div');
            noticeItem.className = 'notice-item';
            noticeItem.innerHTML = `
                <div class="notice-date">${notice.date}</div>
                <div class="notice-title">${notice.title}</div>
                <div class="notice-desc">${notice.description}</div>
                <a href="${notice.pdf_link}" class="notice-link" target="_blank">
                    <i class="fas fa-file-pdf"></i> View PDF
                </a>
            `;
            noticeContainer.appendChild(noticeItem);
        });
    } catch (error) {
        console.error('Error loading notices:', error);
    }
    */
}

// Initialize
loadNotices();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for banner
window.addEventListener('scroll', () => {
    const banner = document.querySelector('.banner');
    if (banner) {
        const scrolled = window.pageYOffset;
        banner.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    updateCounter();
}

// Observe stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Add hover effect to cards
document.querySelectorAll('.staff-card, .link-card, .notice-item, .result-card, .certificate-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Print functionality for results
function printResult(url) {
    window.open(url, '_blank');
}

// Search functionality (can be added later)
function searchContent(query) {
    // Implement search functionality
    console.log('Searching for:', query);
}

// Form validation (for contact form if added)
function validateForm(formData) {
    // Add form validation logic
    return true;
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Back to top button (optional enhancement)
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #1a4d7e, #2563a5);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    document.body.appendChild(button);
};

createBackToTop();

// Responsive table handling
window.addEventListener('resize', () => {
    // Handle responsive adjustments
    if (window.innerWidth < 768) {
        // Mobile adjustments
        console.log('Mobile view');
    } else {
        // Desktop adjustments
        console.log('Desktop view');
    }
});

console.log('Radhakuchi JB School website loaded successfully!');
