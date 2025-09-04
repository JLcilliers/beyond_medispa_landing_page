// Beyond Medispa - Premium Aesthetic Landing Page
// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page-specific features
    initTreatmentCalculator();
    initBookingForm();
    initGallery();
    initTestimonialSlider();
    initMapIntegration();
    
    // Add page-specific animations
    initPremiumAnimations();
});

// Treatment Cost Calculator
function initTreatmentCalculator() {
    const calculator = BeyondMedispaComponents.createCostCalculator();
    
    // Add calculator UI to treatment cards
    document.querySelectorAll('.card-treatment').forEach(card => {
        const button = card.querySelector('.btn-ghost');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showCalculatorModal(card.querySelector('h3').textContent);
            });
        }
    });
}

// Show Calculator Modal
function showCalculatorModal(treatmentName) {
    const modal = document.getElementById('booking-modal');
    if (!modal) return;
    
    // Update modal content for calculator
    const modalContent = modal.querySelector('.modal-content');
    const originalContent = modalContent.innerHTML;
    
    modalContent.innerHTML = `
        <button class="modal-close" data-modal-close>&times;</button>
        <h3>Treatment Cost Estimator</h3>
        <p>Get an instant estimate for ${treatmentName}</p>
        
        <div class="calculator-form">
            <div class="form-group">
                <label class="form-label">Number of Areas</label>
                <select class="form-select" id="calc-areas">
                    <option value="1">1 Area</option>
                    <option value="2">2 Areas (10% discount)</option>
                    <option value="3">3 Areas (10% discount)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label class="form-label">Treatment Package</label>
                <select class="form-select" id="calc-package">
                    <option value="single">Single Treatment</option>
                    <option value="course3">Course of 3 (15% savings)</option>
                    <option value="course6">Course of 6 (20% savings)</option>
                </select>
            </div>
            
            <div class="estimate-display">
                <h4>Your Estimate</h4>
                <div class="estimate-amount">£<span id="estimate">250</span></div>
                <p class="estimate-note">*Final price confirmed at consultation</p>
            </div>
            
            <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="bookFromCalculator()">Book Consultation</button>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('modal-active'), 10);
    
    // Add calculator functionality
    const areasSelect = document.getElementById('calc-areas');
    const packageSelect = document.getElementById('calc-package');
    const estimateSpan = document.getElementById('estimate');
    
    function updateEstimate() {
        const areas = parseInt(areasSelect.value);
        const basePrice = 250; // Base price per area
        let total = basePrice * areas;
        
        // Apply area discount
        if (areas > 1) {
            total *= 0.9; // 10% discount
        }
        
        // Apply package discount
        if (packageSelect.value === 'course3') {
            total *= 3 * 0.85; // 15% savings on course
        } else if (packageSelect.value === 'course6') {
            total *= 6 * 0.8; // 20% savings on course
        }
        
        estimateSpan.textContent = Math.round(total);
    }
    
    areasSelect.addEventListener('change', updateEstimate);
    packageSelect.addEventListener('change', updateEstimate);
}

// Book from Calculator
function bookFromCalculator() {
    // Switch back to booking form
    const modal = document.getElementById('booking-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <button class="modal-close" data-modal-close>&times;</button>
        <h3>Book Your Consultation</h3>
        <form class="booking-form">
            <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" id="name" name="name" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" name="email" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="location" class="form-label">Preferred Location</label>
                <select id="location" name="location" class="form-select" required>
                    <option value="">Select Location</option>
                    <option value="london">London - Knightsbridge</option>
                    <option value="edinburgh">Edinburgh - St Andrew Square</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">Request Consultation</button>
        </form>
    `;
    
    // Reinitialize form
    initBookingForm();
}

// Enhanced Booking Form
function initBookingForm() {
    const form = document.querySelector('.booking-form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Add UTM parameters if available
        const urlParams = new URLSearchParams(window.location.search);
        data.utm_source = urlParams.get('utm_source') || 'direct';
        data.utm_medium = urlParams.get('utm_medium') || 'organic';
        data.utm_campaign = urlParams.get('utm_campaign') || '';
        
        // Show loading state
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Track conversion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                    'value': 0,
                    'currency': 'GBP'
                });
            }
            
            // Show success message
            showSuccessModal();
            form.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            showErrorMessage();
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Success Modal
function showSuccessModal() {
    const modal = document.getElementById('booking-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <div class="success-message" style="text-align: center; padding: 2rem;">
            <div style="font-size: 4rem; color: #059669; margin-bottom: 1rem;">✓</div>
            <h3>Thank You!</h3>
            <p>Your consultation request has been received.</p>
            <p>We'll contact you within 24 hours to confirm your appointment.</p>
            <button class="btn btn-primary" onclick="closeModal()">Close</button>
        </div>
    `;
}

// Close Modal
function closeModal() {
    const modal = document.querySelector('.modal-active');
    if (modal) {
        modal.classList.remove('modal-active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Virtual Gallery
function initGallery() {
    // Create before/after slider functionality
    const galleryPlaceholder = document.createElement('div');
    galleryPlaceholder.className = 'gallery-section';
    galleryPlaceholder.innerHTML = `
        <div class="container">
            <h3>Treatment Gallery</h3>
            <p>Results from our expert medical team</p>
            <!-- Placeholder for actual gallery implementation -->
        </div>
    `;
    
    // Insert after testimonials section
    const testimonials = document.querySelector('.testimonials');
    if (testimonials) {
        testimonials.after(galleryPlaceholder);
    }
}

// Testimonial Auto-Slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.card-testimonial');
    if (testimonials.length === 0) return;
    
    let currentIndex = 0;
    
    // Add slider functionality for mobile
    if (window.innerWidth < 768) {
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            testimonials[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].style.display = 'block';
            testimonials[currentIndex].classList.add('fade-in');
        }, 5000);
    }
}

// Map Integration
function initMapIntegration() {
    // Add interactive map placeholders
    const locationCards = document.querySelectorAll('.location-card');
    
    locationCards.forEach(card => {
        const mapDiv = document.createElement('div');
        mapDiv.className = 'location-map';
        mapDiv.style.cssText = `
            height: 200px;
            background: #f5f5f5;
            border-radius: 8px;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #737373;
        `;
        mapDiv.innerHTML = '<span>Interactive Map</span>';
        
        card.querySelector('.card-body').appendChild(mapDiv);
    });
}

// Premium Page Animations
function initPremiumAnimations() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero-background');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Animate numbers
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('.price');
        
        numbers.forEach(num => {
            const finalNum = parseInt(num.textContent.replace(/[^0-9]/g, ''));
            let currentNum = 0;
            const increment = finalNum / 30;
            
            const counter = setInterval(() => {
                currentNum += increment;
                if (currentNum >= finalNum) {
                    currentNum = finalNum;
                    clearInterval(counter);
                }
                num.textContent = `From £${Math.round(currentNum)}`;
            }, 50);
        });
    };
    
    // Trigger number animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.disconnect();
            }
        });
    });
    
    const pricesSection = document.querySelector('.treatments');
    if (pricesSection) {
        observer.observe(pricesSection);
    }
    
    // Smooth reveal for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Treatment Recommendation Quiz
function startTreatmentQuiz() {
    const quiz = BeyondMedispaComponents.createTreatmentQuiz();
    let currentQuestion = 0;
    const answers = {};
    
    const modal = document.getElementById('booking-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    function showQuestion() {
        const question = quiz.questions[currentQuestion];
        
        modalContent.innerHTML = `
            <button class="modal-close" data-modal-close>&times;</button>
            <h3>Find Your Perfect Treatment</h3>
            <div class="quiz-progress">
                <div class="progress-bar" style="width: ${((currentQuestion + 1) / quiz.questions.length) * 100}%"></div>
            </div>
            <h4>${question.question}</h4>
            <div class="quiz-options">
                ${question.options.map(option => `
                    <button class="quiz-option btn btn-secondary" data-answer="${option}">${option}</button>
                `).join('')}
            </div>
        `;
        
        // Add event listeners
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', function() {
                answers[question.id] = this.dataset.answer;
                
                if (currentQuestion < quiz.questions.length - 1) {
                    currentQuestion++;
                    showQuestion();
                } else {
                    showRecommendations();
                }
            });
        });
    }
    
    function showRecommendations() {
        const recommendations = quiz.getRecommendations(answers);
        
        modalContent.innerHTML = `
            <button class="modal-close" data-modal-close>&times;</button>
            <h3>Your Personalized Recommendations</h3>
            <div class="recommendations">
                ${recommendations.map(rec => `
                    <div class="recommendation-card">
                        <h4>${rec.treatment}</h4>
                        <p>${rec.reason}</p>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="bookFromQuiz()">Book Consultation</button>
        `;
    }
    
    // Start quiz
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('modal-active'), 10);
    showQuestion();
}

// Book from Quiz
function bookFromQuiz() {
    bookFromCalculator(); // Reuse booking form
}

// Initialize quiz button if exists
document.addEventListener('DOMContentLoaded', function() {
    const quizBtn = document.getElementById('start-quiz');
    if (quizBtn) {
        quizBtn.addEventListener('click', startTreatmentQuiz);
    }
});