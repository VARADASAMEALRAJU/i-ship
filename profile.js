// Profile Page Interactive Functionality
class ProfilePage {
    constructor() {
        this.init();
    }

    init() {
        this.setupCollapsibleSections();
        this.setupAnimations();
        this.setupAccessibility();
        this.setupImageFallback();
        this.animateOnLoad();
    }

    // Setup collapsible sections functionality
    setupCollapsibleSections() {
        const triggers = document.querySelectorAll('.section-trigger');
        
        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleSection(trigger);
            });

            // Add keyboard support
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleSection(trigger);
                }
            });
        });
    }

    // Toggle section open/closed state
    toggleSection(trigger) {
        const sectionType = trigger.dataset.section;
        const content = document.getElementById(${sectionType}-content);
        const isOpen = trigger.classList.contains('open');

        if (isOpen) {
            this.closeSection(trigger, content);
        } else {
            this.openSection(trigger, content);
        }
    }

    // Open section with animation
    openSection(trigger, content) {
        trigger.classList.add('open');
        content.classList.add('open');

        // Animate items in sequence
        const items = content.querySelectorAll('.project-item, .event-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.animationDelay = ${index * 100}ms;
                item.style.animation = 'slideInItem 0.5s ease-out forwards';
            }, 50);
        });
    }

    // Close section with animation
    closeSection(trigger, content) {
        trigger.classList.remove('open');
        content.classList.remove('open');

        // Reset item animations
        const items = content.querySelectorAll('.project-item, .event-item');
        items.forEach(item => {
            item.style.animation = '';
            item.style.animationDelay = '';
        });
    }

    // Setup hover animations for interactive elements
    setupAnimations() {
        // Social link hover effects
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'scale(1.1)';
                link.style.boxShadow = '0 0 20px rgba(108, 17, 182, 0.4)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'scale(1)';
                link.style.boxShadow = '';
            });
        });

        // Avatar hover effect
        const avatar = document.querySelector('.avatar-container');
        if (avatar) {
            avatar.addEventListener('mouseenter', () => {
                avatar.style.transform = 'scale(1.05)';
            });

            avatar.addEventListener('mouseleave', () => {
                avatar.style.transform = 'scale(1)';
            });
        }

        // Action button hover effects
        const actionButtons = document.querySelectorAll('.action-button');
        actionButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                if (button.classList.contains('action-button-primary')) {
                    button.style.transform = 'scale(1.05)';
                    button.style.boxShadow = '0 0 20px rgba(108, 17, 182, 0.4)';
                } else {
                    button.style.transform = 'scale(1.05)';
                    button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                }
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'scale(1)';
                button.style.boxShadow = '';
            });

            button.addEventListener('mousedown', () => {
                button.style.transform = 'scale(0.95)';
            });

            button.addEventListener('mouseup', () => {
                button.style.transform = 'scale(1.05)';
            });
        });

        // Project link hover effects
        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'scale(1.1)';
            });

            link.addEventListener('mouseleave', () => {
                link.style.transform = 'scale(1)';
            });
        });
    }

    // Setup accessibility features
    setupAccessibility() {
        // Add ARIA attributes to collapsible sections
        const triggers = document.querySelectorAll('.section-trigger');
        triggers.forEach((trigger, index) => {
            const sectionType = trigger.dataset.section;
            const content = document.getElementById(${sectionType}-content);
            
            trigger.setAttribute('aria-expanded', 'false');
            trigger.setAttribute('aria-controls', ${sectionType}-content);
            content.setAttribute('aria-hidden', 'true');
            
            // Update ARIA attributes when section is toggled
            const observer = new MutationObserver(() => {
                const isOpen = trigger.classList.contains('open');
                trigger.setAttribute('aria-expanded', isOpen.toString());
                content.setAttribute('aria-hidden', (!isOpen).toString());
            });
            
            observer.observe(trigger, { attributes: true, attributeFilter: ['class'] });
        });

        // Add proper focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                this.manageFocus(e);
            }
        });
    }

    // Manage focus for accessibility
    manageFocus(e) {
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements);
        const currentIndex = focusableArray.indexOf(document.activeElement);

        if (e.shiftKey) {
            // Shift + Tab (backwards)
            if (currentIndex === 0) {
                e.preventDefault();
                focusableArray[focusableArray.length - 1].focus();
            }
        } else {
            // Tab (forwards)
            if (currentIndex === focusableArray.length - 1) {
                e.preventDefault();
                focusableArray[0].focus();
            }
        }
    }

    // Setup image fallback functionality
    setupImageFallback() {
        const avatarImage = document.querySelector('.avatar-image');
        const avatarFallback = document.querySelector('.avatar-fallback');

        if (avatarImage && avatarFallback) {
            avatarImage.addEventListener('load', () => {
                avatarFallback.style.display = 'none';
            });

            avatarImage.addEventListener('error', () => {
                avatarImage.style.display = 'none';
                avatarFallback.style.display = 'flex';
            });

            // Check if image is already loaded or failed
            if (avatarImage.complete) {
                if (avatarImage.naturalWidth === 0) {
                    avatarImage.style.display = 'none';
                    avatarFallback.style.display = 'flex';
                } else {
                    avatarFallback.style.display = 'none';
                }
            }
        }
    }

    // Animate elements on page load
    animateOnLoad() {
        // Initial load animation is handled by CSS
        // This function can be extended for additional load animations
        
        // Add staggered animation to tech badges
        setTimeout(() => {
            const techBadges = document.querySelectorAll('.tech-badge');
            techBadges.forEach((badge, index) => {
                badge.style.opacity = '0';
                badge.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    badge.style.transition = 'all 0.3s ease';
                    badge.style.opacity = '1';
                    badge.style.transform = 'translateY(0)';
                }, index * 50);
            });
        }, 1000);

        // Add loading state to buttons
        this.setupButtonInteractions();
    }

    // Setup button click interactions
    setupButtonInteractions() {
        const actionButtons = document.querySelectorAll('.action-button');
        
        actionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Add click animation
                this.animateButtonClick(button);
                
                // Handle button actions
                const buttonText = button.querySelector('span').textContent;
                this.handleButtonAction(buttonText, button);
            });
        });
    }

    // Animate button click
    animateButtonClick(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }

    // Handle button actions
    handleButtonAction(action, button) {
        switch (action) {
            case 'Edit Profile':
                this.showNotification('Edit Profile functionality would be implemented here');
                break;
            case 'Change Password':
                this.showNotification('Change Password functionality would be implemented here');
                break;
            default:
                console.log(Action: ${action});
        }
    }

    // Show notification (placeholder for actual notification system)
    showNotification(message) {
        // Create a simple notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            animation: slideInNotification 0.3s ease-out;
        `;

        // Add notification styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInNotification {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideInNotification 0.3s ease-out reverse';
            setTimeout(() => {
                document.body.removeChild(notification);
                document.head.removeChild(style);
            }, 300);
        }, 3000);
    }

    // Utility method to detect mobile devices
    isMobile() {
        return window.innerWidth < 768;
    }

    // Handle responsive behavior
    handleResize() {
        window.addEventListener('resize', () => {
            // Adjust animations for mobile
            if (this.isMobile()) {
                document.documentElement.style.setProperty('--animation-duration', '0.2s');
            } else {
                document.documentElement.style.setProperty('--animation-duration', '0.3s');
            }
        });
    }
}

// Initialize the profile page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProfilePage();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations when page becomes visible
        document.body.style.animationPlayState = 'running';
    }
});

// Add smooth scrolling for any anchor links
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

// Add keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    // ESC key closes any open sections
    if (e.key === 'Escape') {
        const openTriggers = document.querySelectorAll('.section-trigger.open');
        openTriggers.forEach(trigger => {
            const sectionType = trigger.dataset.section;
            const content = document.getElementById(${sectionType}-content);
            trigger.classList.remove('open');
            content.classList.remove('open');
        });
    }
});

// Performance optimization: Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for scroll-based animations
document.querySelectorAll('.project-item, .event-item').forEach(item => {
    observer.observe(item);
});