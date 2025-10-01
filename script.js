/**
 * Navigation Script - Handles mobile menu functionality
 * Refactored from inline script for better maintainability
 */

class MobileNavigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.nav = document.querySelector('.nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.isMenuOpen = false;
        
        this.init();
    }

    init() {
        if (!this.hamburger || !this.nav) {
            console.warn('Navigation elements not found');
            return;
        }

        this.bindEvents();
        this.setupAccessibility();
    }

    bindEvents() {
        // Toggle menu when hamburger is clicked
        this.hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMenu();
        });

        // Close menu when nav links are clicked
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
                this.hamburger.focus();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && 
                !this.nav.contains(e.target) && 
                !this.hamburger.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }

    setupAccessibility() {
        // Set initial ARIA attributes
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.hamburger.setAttribute('aria-controls', 'navigation-menu');
        this.hamburger.setAttribute('aria-label', 'Abrir menu de navegação');
        
        // Add ID to nav for aria-controls reference
        this.nav.id = 'navigation-menu';
    }

    toggleMenu() {
        if (this.isMenuOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.isMenuOpen = true;
        
        // Update visual state
        this.hamburger.classList.add('active');
        this.nav.classList.add('active');
        
        // Update accessibility attributes
        this.hamburger.setAttribute('aria-expanded', 'true');
        this.hamburger.setAttribute('aria-label', 'Fechar menu de navegação');
        
        // Prevent body scroll on mobile
        document.body.style.overflow = 'hidden';
        
        // Focus first nav link for keyboard users
        const firstNavLink = this.nav.querySelector('.nav-link');
        if (firstNavLink) {
            setTimeout(() => firstNavLink.focus(), 100);
        }

        console.log('Menu opened');
    }

    closeMenu() {
        this.isMenuOpen = false;
        
        // Update visual state
        this.hamburger.classList.remove('active');
        this.nav.classList.remove('active');
        
        // Update accessibility attributes
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.hamburger.setAttribute('aria-label', 'Abrir menu de navegação');
        
        // Restore body scroll
        document.body.style.overflow = '';

        console.log('Menu closed');
    }

    // Public method to destroy the instance
    destroy() {
        // Remove event listeners if needed
        this.hamburger = null;
        this.nav = null;
        this.navLinks = null;
    }
}

// Smooth scrolling for anchor links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        // Handle smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                    
                    // Update URL without jumping
                    history.pushState(null, null, `#${targetId}`);
                }
            }
        });
    }

    scrollToElement(element) {
        const headerHeight = 80; // Account for fixed header
        const targetPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Document ready utility
function domReady(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        callback();
    }
}

// Initialize everything when DOM is ready
domReady(() => {
    try {
        // Initialize mobile navigation
        window.mobileNav = new MobileNavigation();
        
        // Initialize smooth scrolling
        window.smoothScroll = new SmoothScroll();
        
        console.log('✅ Navigation script loaded successfully');
    } catch (error) {
        console.error('❌ Error initializing navigation:', error);
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MobileNavigation,
        SmoothScroll
    };
}