// SSR Solutions - Interactive Script with Dark/Light Mode & Pricing Nav
document.addEventListener('DOMContentLoaded', function() {


    // Smooth scrolling
    document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Close mobile menu
            const navUl = document.querySelector('nav ul');
            if (navUl) navUl.classList.remove('active');
            
            // Update active nav link
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    
    if (hamburger && navUl) {
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
        
        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (!navUl.contains(e.target) && !hamburger.contains(e.target)) {
                navUl.classList.remove('active');
            }
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(99, 102, 241, 0.98)';
        } else {
            header.style.background = 'rgba(99, 102, 241, 0.95)';
        }

        // Update active nav on scroll
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

// EmailJS Contact Form - LIVE with your keys (Public: iXglpOZewIckaHWxH, Service: service_lm01d3h, Template: template_6of55ro)
    emailjs.init('iXglpOZewIckaHWxH');  // Your public key

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.nicepage-submit, .submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Show loading
            btnText.classList.add('hidden');
            btnLoading.classList.add('show');
            submitBtn.disabled = true;

            // Send via EmailJS
            emailjs.sendForm('service_lm01d3h', 'template_6of55ro', this)
                .then(function(response) {
                    alert('✅ Success! Message sent to shivalord753357@gmail.com. Reply within 24hrs.');
                    contactForm.reset();
                }, function(error) {
                    alert('❌ Send failed! Use WhatsApp: +91 91626 61130 36');
                    console.error('EmailJS Error:', error);
                })
                .finally(() => {
                    btnText.classList.remove('hidden');
                    btnLoading.classList.remove('show');
                    submitBtn.disabled = false;
                });
        });
    }

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animate on scroll
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

    // Observe all animated elements
    document.querySelectorAll('.service-card, .portfolio-item, .feature-item, .price-card, .review-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Google Reviews toggle functionality
    const viewAllBtn = document.querySelector('.view-all');
    const reviewsList = document.querySelector('.reviews-list');
    const fullReviews = document.querySelectorAll('.reviews-list .review-item');

    if (viewAllBtn && reviewsList) {
        let isExpanded = false;

        viewAllBtn.addEventListener('click', () => {
            if (!isExpanded) {
                // Show all reviews
                reviewsList.style.maxHeight = 'none';
                reviewsList.style.overflow = 'visible';
                reviewsList.style.display = 'grid';
                viewAllBtn.textContent = 'Hide reviews';
                isExpanded = true;
            } else {
                // Hide to initial 5
                reviewsList.style.maxHeight = '600px';
                reviewsList.style.overflow = 'hidden';
                viewAllBtn.textContent = 'View all reviews';
                isExpanded = false;
            }
        });
    }
});

