/**
 * Utilities - Common helper functions and performance optimizations
 */

// Performance utilities
const debounce = (func, wait, immediate) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// DOM utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Animation utilities
const fadeIn = (element, duration = 300) => {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    const start = performance.now();
    
    const animate = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            element.style.opacity = progress;
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 1;
        }
    };
    
    requestAnimationFrame(animate);
};

const fadeOut = (element, duration = 300) => {
    const start = performance.now();
    const initialOpacity = parseFloat(getComputedStyle(element).opacity);
    
    const animate = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            element.style.opacity = initialOpacity * (1 - progress);
            requestAnimationFrame(animate);
        } else {
            element.style.opacity = 0;
            element.style.display = 'none';
        }
    };
    
    requestAnimationFrame(animate);
};

// Scroll utilities
const getScrollPosition = () => {
    return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
    };
};

const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Form utilities
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone) => {
    // Basic phone validation - can be customized for different countries
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// Storage utilities
const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.warn('Failed to set localStorage item:', error);
            return false;
        }
    },
    
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.warn('Failed to get localStorage item:', error);
            return defaultValue;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn('Failed to remove localStorage item:', error);
            return false;
        }
    }
};

// Device detection
const device = {
    isMobile: () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    
    isTablet: () => {
        return /iPad|Android|Tablet/i.test(navigator.userAgent) && !device.isMobile();
    },
    
    isDesktop: () => {
        return !device.isMobile() && !device.isTablet();
    },
    
    getTouchSupport: () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
};

// Feature detection
const features = {
    hasIntersectionObserver: () => 'IntersectionObserver' in window,
    hasLocalStorage: () => {
        try {
            const test = 'test';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (error) {
            return false;
        }
    },
    hasServiceWorker: () => 'serviceWorker' in navigator,
    hasGeolocation: () => 'geolocation' in navigator
};

// Export utilities for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        $,
        $$,
        fadeIn,
        fadeOut,
        getScrollPosition,
        isElementInViewport,
        validateEmail,
        validatePhone,
        storage,
        device,
        features
    };
}

// Make utilities available globally
window.utils = {
    debounce,
    throttle,
    $,
    $$,
    fadeIn,
    fadeOut,
    getScrollPosition,
    isElementInViewport,
    validateEmail,
    validatePhone,
    storage,
    device,
    features
};