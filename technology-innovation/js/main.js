/**
 * Expert Medical Aesthetics Landing Page - JavaScript
 * Beyond Medispa - Premium Medical Care
 */

// Page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    initPageSpecificFeatures();
});

/**
 * Initialize page-specific features
 */
function initPageSpecificFeatures() {
    // Initialize treatment card interactions
    initTreatmentCards();
    
    // Initialize smooth animations for stats
    initStatsAnimation();
}

/**
 * Treatment card interactions
 */
function initTreatmentCards() {
    const treatmentCards = document.querySelectorAll('.treatment-card');
    
    treatmentCards.forEach(card => {
        const learnMoreBtn = card.querySelector('.btn-ghost');
        
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', function() {
                // You can add specific treatment modal or redirect logic here
                console.log('Learn more clicked for treatment card');
                
                // For now, redirect to booking
                window.open('https://www.phorest.com/salon/beyondmedispa', '_blank');
            });
        }
    });
}

/**
 * Stats animation enhancement
 */
function initStatsAnimation() {
    const statsNumbers = document.querySelectorAll('[data-target]');
    
    if (statsNumbers.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.getAttribute('data-target'));
                    animateCounter(element, target);
                    statsObserver.unobserve(element);
                }
            });
        }, observerOptions);
        
        statsNumbers.forEach(stat => {
            statsObserver.observe(stat);
        });
    }
}

/**
 * Animate counter with easing
 */
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60; // 60 frames for smooth animation
    const duration = 2000; // 2 seconds
    const stepTime = duration / 60;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current);
    }, stepTime);
}

/**
 * Smooth scroll enhancement for page anchors
 */
function smoothScrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}