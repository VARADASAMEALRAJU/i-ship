// Global variables
let currentTheme = 'light';
let currentRating = 0;
let reviewsData = [
    {
        id: 1,
        name: 'Sarah M.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b047?w=60&h=60&fit=crop&crop=face',
        rating: 5,
        text: "This app has completely transformed how I manage my finances. The interface is intuitive and the analytics help me understand my spending patterns better than ever before.",
        date: '2 days ago',
        helpful: 23,
        isLiked: false
    },
    {
        id: 2,
        name: 'Mike R.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        rating: 5,
        text: "Love the cross-platform sync! I can start tracking on my phone and continue on my tablet seamlessly. The budget alerts have saved me from overspending multiple times.",
        date: '1 week ago',
        helpful: 18,
        isLiked: false
    },
    {
        id: 3,
        name: 'Emily K.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
        rating: 4,
        text: "Great app overall! The family sharing feature is perfect for managing household expenses. Only minor issue is that some features could be more discoverable.",
        date: '2 weeks ago',
        helpful: 12,
        isLiked: false
    },
    {
        id: 4,
        name: 'David L.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
        rating: 5,
        text: "The security features give me peace of mind, and the detailed reports help me plan my finances better. Highly recommend for anyone serious about budgeting!",
        date: '3 weeks ago',
        helpful: 31,
        isLiked: false
    }
];

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = this.getInitialTheme();
        this.init();
    }

    getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
        this.updateThemeButtons();
    }

    setupEventListeners() {
        const themeButtons = document.querySelectorAll('.theme-btn');
        themeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const theme = button.getAttribute('data-theme');
                this.setTheme(theme);
            });
        });
    }

    setTheme(theme) {
        this.currentTheme = theme;
        this.applyTheme(theme);
        this.updateThemeButtons();
        localStorage.setItem('theme', theme);
        
        // Add smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    applyTheme(theme) {
        const html = document.documentElement;
        html.classList.remove('light', 'dark');
        html.classList.add(theme);
        currentTheme = theme;
    }

    updateThemeButtons() {
        const themeButtons = document.querySelectorAll('.theme-btn');
        themeButtons.forEach(button => {
            const buttonTheme = button.getAttribute('data-theme');
            if (buttonTheme === this.currentTheme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}
// Animation Manager
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupRatingBars();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    if (entry.target.classList.contains('rating-bar')) {
                        this.animateRatingBar(entry.target);
                    }
                    
                    if (entry.target.classList.contains('stat-number')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);

        this.observeElements();
    }

    observeElements() {
        const elementsToAnimate = [
            '.feature-card',
            '.review-card',
            '.tech-badge',
            '.developer-card',
            '.structure-item',
            '.rating-overview',
            '.rating-bar',
            '.stat-card'
        ];

        elementsToAnimate.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.1}s`;
                element.classList.add('fade-in');
                this.observer.observe(element);
            });
        });
    }

    animateRatingBar(bar) {
        const fill = bar.querySelector('.fill');
        if (fill) {
            const targetWidth = fill.getAttribute('data-width');
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = `${targetWidth}%`;
            }, 200);
        }
    }

    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/\D/g, ''));
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                element.textContent = element.id === 'stat-total' ? `${target}+` : target;
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    }

    setupScrollAnimations() {
        // Floating animations for decorative elements
        this.startFloatingAnimations();
        
        // Parallax effect for background elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            const parallaxElements = document.querySelectorAll('.floating-circle, .bg-circle');
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    startFloatingAnimations() {
        const floatingElements = document.querySelectorAll('.floating-icon');
        floatingElements.forEach((element, index) => {
            this.animateFloat(element, index * 1000);
        });
    }

    animateFloat(element, delay) {
        setTimeout(() => {
            let start = null;
            
            function animate(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                
                const y = Math.sin(progress * 0.002) * 10;
                const rotation = Math.sin(progress * 0.001) * 5;
                const scale = 1 + Math.sin(progress * 0.003) * 0.1;
                
                element.style.transform = `translateY(${y}px) rotate(${rotation}deg) scale(${scale})`;
                
                requestAnimationFrame(animate);
            }
            
            requestAnimationFrame(animate);
        }, delay);
    }

    setupHoverEffects() {
        // Enhanced button hover effects
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });
        });

        // Card hover effects with 3D transform
        const cards = document.querySelectorAll('.feature-card, .review-card, .developer-card, .tech-badge');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.02)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    setupRatingBars() {
        setTimeout(() => {
            const ratingBars = document.querySelectorAll('.rating-bar .fill');
            ratingBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = `${width}%`;
            });
        }, 1000);
    }
}

// Review Management System
class ReviewManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateReviewStats();
    }

    setupEventListeners() {
        // Star rating system
        const starButtons = document.querySelectorAll('.star-btn');
        starButtons.forEach((star, index) => {
            star.addEventListener('mouseenter', () => this.highlightStars(index + 1));
            star.addEventListener('mouseleave', () => this.highlightStars(currentRating));
            star.addEventListener('click', () => this.setRating(index + 1));
        });

        // Form submission
        const reviewForm = document.getElementById('reviewForm');
        reviewForm.addEventListener('submit', (e) => this.handleSubmitReview(e));

        // Helpful buttons
        this.setupHelpfulButtons();
    }

    setupHelpfulButtons() {
        const helpfulButtons = document.querySelectorAll('.helpful-btn');
        helpfulButtons.forEach((button, index) => {
            button.addEventListener('click', () => this.handleHelpfulClick(button, index));
        });
    }

    highlightStars(rating) {
        const starButtons = document.querySelectorAll('.star-btn');
        starButtons.forEach((star, index) => {
            const icon = star.querySelector('i');
            if (index < rating) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                star.classList.add('active');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                star.classList.remove('active');
            }
        });
    }

    setRating(rating) {
        currentRating = rating;
        this.highlightStars(rating);
        
        // Add visual feedback
        const starRating = document.getElementById('starRating');
        starRating.style.transform = 'scale(1.1)';
        setTimeout(() => {
            starRating.style.transform = '';
        }, 200);
    }

    async handleSubmitReview(e) {
        e.preventDefault();
        
        const name = document.getElementById('reviewerName').value;
        const text = document.getElementById('reviewText').value;
        
        if (!name || !text || currentRating === 0) {
            this.showNotification('Please fill in all fields and select a rating.', 'error');
            return;
        }

        // Show loading state
        this.setSubmitLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Create new review
            const newReview = {
                id: Date.now(),
                name: name,
                avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=60&h=60&fit=crop&crop=face`,
                rating: currentRating,
                text: text,
                date: 'Just now',
                helpful: 0,
                isLiked: false
            };

            // Add to reviews data
            reviewsData.unshift(newReview);

            // Update UI
            this.addReviewToDOM(newReview);
            this.updateReviewStats();
            this.closeReviewForm();
            this.resetForm();
            
            this.showNotification('Review submitted successfully!', 'success');
        } catch (error) {
            this.showNotification('Failed to submit review. Please try again.', 'error');
        } finally {
            this.setSubmitLoading(false);
        }
    }

    addReviewToDOM(review) {
        const reviewsContainer = document.getElementById('reviews-container');
        const reviewCard = this.createReviewCard(review);
        
        // Add with animation
        reviewCard.style.opacity = '0';
        reviewCard.style.transform = 'translateY(20px)';
        reviewsContainer.insertBefore(reviewCard, reviewsContainer.firstChild);
        
        setTimeout(() => {
            reviewCard.style.transition = 'all 0.6s ease';
            reviewCard.style.opacity = '1';
            reviewCard.style.transform = 'translateY(0)';
        }, 100);
    }

    createReviewCard(review) {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-header">
                <div class="reviewer-info">
                    <img src="${review.avatar}" alt="${review.name}" class="reviewer-avatar">
                    <div class="reviewer-details">
                        <h4>${review.name}</h4>
                        <span class="review-date">${review.date}</span>
                    </div>
                </div>
                <div class="review-rating">
                    ${this.generateStarHTML(review.rating)}
                </div>
            </div>
            <p class="review-text">${review.text}</p>
            <div class="review-helpful">
                <button class="helpful-btn" onclick="reviewManager.handleHelpfulClick(this, ${review.id})">
                    <i class="fas fa-thumbs-up"></i>
                    Helpful (<span class="helpful-count">${review.helpful}</span>)
                </button>
            </div>
        `;
        return card;
    }

    generateStarHTML(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }
        return starsHTML;
    }

    handleHelpfulClick(button, reviewId) {
        if (button.classList.contains('liked')) return;

        const countSpan = button.querySelector('.helpful-count');
        const currentCount = parseInt(countSpan.textContent);
        
        // Update UI
        countSpan.textContent = currentCount + 1;
        button.classList.add('liked');
        button.style.transform = 'scale(1.1)';
        
        // Update data
        const review = reviewsData.find(r => r.id == reviewId);
        if (review) {
            review.helpful++;
            review.isLiked = true;
        }

        // Reset transform
        setTimeout(() => {
            button.style.transform = '';
        }, 200);

        // Update stats
        this.updateReviewStats();
        
        this.showNotification('Thanks for your feedback!', 'success');
    }

    updateReviewStats() {
        const totalReviews = reviewsData.length;
        const totalHelpful = reviewsData.reduce((sum, review) => sum + review.helpful, 0);
        const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

        // Update DOM elements
        document.getElementById('total-reviews').textContent = totalReviews;
        document.getElementById('stat-total').textContent = `${totalReviews}+`;
        document.getElementById('stat-helpful').textContent = totalHelpful;
        document.querySelector('.rating-number').textContent = averageRating.toFixed(1);

        // Update rating distribution
        this.updateRatingDistribution();
    }

    updateRatingDistribution() {
        const total = reviewsData.length;
        for (let i = 5; i >= 1; i--) {
            const count = reviewsData.filter(review => review.rating === i).length;
            const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
            
            const ratingBars = document.querySelectorAll('.rating-bar');
            const barIndex = 5 - i;
            if (ratingBars[barIndex]) {
                const fill = ratingBars[barIndex].querySelector('.fill');
                const percentageSpan = ratingBars[barIndex].querySelector('.percentage');
                
                fill.setAttribute('data-width', percentage);
                fill.style.width = `${percentage}%`;
                percentageSpan.textContent = `${percentage}%`;
            }
        }
    }

    setSubmitLoading(loading) {
        const submitBtn = document.querySelector('#reviewForm button[type="submit"]');
        const submitText = submitBtn.querySelector('.submit-text');
        const submitLoading = submitBtn.querySelector('.submit-loading');
        
        if (loading) {
            submitText.style.display = 'none';
            submitLoading.style.display = 'flex';
            submitBtn.disabled = true;
        } else {
            submitText.style.display = 'inline';
            submitLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    }

    resetForm() {
        document.getElementById('reviewForm').reset();
        currentRating = 0;
        this.highlightStars(0);
    }

    closeReviewForm() {
        const modal = document.getElementById('reviewModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Scroll Manager
class ScrollManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupScrollToTop();
        this.setupScrollEffects();
    }

    setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupScrollToTop() {
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollButton.className = 'scroll-to-top';
        document.body.appendChild(scrollButton);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });
        
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupScrollEffects() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateScrollEffects();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateScrollEffects() {
        const scrolled = window.pageYOffset;
        
        // Header background opacity
        const header = document.querySelector('.header');
        if (header && scrolled > 0) {
            const opacity = Math.min(scrolled / 100, 1);
            header.style.boxShadow = `0 2px 20px rgba(0,0,0,${opacity * 0.1})`;
        }
        
        // Parallax effects
        const parallaxElements = document.querySelectorAll('.floating-circle, .bg-circle');
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Performance Manager
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.preloadCriticalImages();
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    preloadCriticalImages() {
        const criticalImages = [
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=120&h=120&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Utility Functions
function openReviewForm() {
    const modal = document.getElementById('reviewModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReviewForm() {
    reviewManager.closeReviewForm();
}

function markHelpful(button, initialCount) {
    if (button.classList.contains('liked')) return;
    
    const countSpan = button.querySelector('.helpful-count');
    const currentCount = parseInt(countSpan.textContent);
    countSpan.textContent = currentCount + 1;
    
    button.classList.add('liked');
    button.style.background = 'var(--primary-20)';
    button.style.color = 'var(--primary)';
    button.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        button.style.transform = '';
    }, 200);
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.textContent = 'Thanks for your feedback!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function submitReview(e) {
    reviewManager.handleSubmitReview(e);
}

// App Initialization
class App {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeManagers();
            });
        } else {
            this.initializeManagers();
        }
    }

    initializeManagers() {
        // Initialize all managers
        this.themeManager = new ThemeManager();
        this.animationManager = new AnimationManager();
        this.reviewManager = new ReviewManager();
        this.scrollManager = new ScrollManager();
        this.performanceManager = new PerformanceManager();
        
        // Setup global event listeners
        this.setupGlobalListeners();
        
        // Add loading complete class to body
        document.body.classList.add('loaded');
        
        console.log('✅ Expense Tracker App initialized successfully!');
        console.log('🎨 Theme:', this.themeManager.currentTheme);
        console.log('📊 Reviews:', reviewsData.length);
    }

    setupGlobalListeners() {
        // Global click handler for enhanced UX
        document.addEventListener('click', (e) => {
            const target = e.target.closest('button, .clickable');
            if (target && !target.disabled) {
                // Add click ripple effect
                this.createRippleEffect(target, e);
            }
        });

        // Global error handler
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
        });

        // Handle visibility change for performance
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Pause animations when tab is not visible
                document.body.classList.add('paused');
            } else {
                document.body.classList.remove('paused');
            }
        });
    }

    createRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        if (!element.style.position || element.style.position === 'static') {
            element.style.position = 'relative';
        }
        element.style.overflow = 'hidden';
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Additional CSS for ripple effect
const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .paused * {
        animation-play-state: paused !important;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .notification {
        animation: slideInNotification 0.3s ease-out;
    }
    
    @keyframes slideInNotification {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the app
const app = new App();

// Make managers globally available for debugging
window.ExpenseTrackerApp = {
    themeManager: null,
    animationManager: null,
    reviewManager: null,
    scrollManager: null,
    performanceManager: null,
    reviewsData: reviewsData,
    version: '1.0.0'
};

// Update global reference after initialization
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.ExpenseTrackerApp.themeManager = app.themeManager;
        window.ExpenseTrackerApp.animationManager = app.animationManager;
        window.ExpenseTrackerApp.reviewManager = app.reviewManager;
        window.ExpenseTrackerApp.scrollManager = app.scrollManager;
        window.ExpenseTrackerApp.performanceManager = app.performanceManager;
        
        // Make reviewManager globally available for HTML onclick handlers
        window.reviewManager = app.reviewManager;
    }, 100);
});