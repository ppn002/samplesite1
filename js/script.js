// Get DOM elements
const accordionHeaders = document.querySelectorAll('.accordion-header');
const filterButtons = document.querySelectorAll('.filter-btn');
const filterTabs = document.querySelectorAll('.filter-tab');
const regionTabs = document.querySelectorAll('.region-tab');
const coffeeCards = document.querySelectorAll('.coffee-card');

// Accordion functionality
if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            // Toggle the active state
            const isActive = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', !isActive);
            
            // Toggle content visibility
            if (!isActive) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = '0';
            }
        });
    });
}

// Filter buttons in Menu page
if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Here you would add filter functionality for actual content
            // For demo purposes, we'll just log the filter
            console.log('Filter selected:', button.textContent.trim());
        });
    });
}

// Filter tabs in News page
if (filterTabs.length > 0) {
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => {
                t.classList.remove('active');
            });
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get filter value
            const filter = tab.getAttribute('data-filter');
            console.log('News filter selected:', filter);
            
            // Here you would add filter functionality for actual content
        });
    });
}

// Region tabs in Locations page
if (regionTabs.length > 0) {
    regionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            regionTabs.forEach(t => {
                t.classList.remove('active');
            });
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get region value
            const region = tab.getAttribute('data-region');
            console.log('Region selected:', region);
            
            // Here you would add region filter functionality
        });
    });
}

// Add to Cart functionality
if (coffeeCards.length > 0) {
    coffeeCards.forEach(card => {
        const addToCartBtn = card.querySelector('.add-to-cart');
        const coffeeNameElement = card.querySelector('h4');
        
        if (addToCartBtn && coffeeNameElement) {
            addToCartBtn.addEventListener('click', () => {
                const coffeeName = coffeeNameElement.textContent;
                // Demo cart functionality
                console.log(`Added ${coffeeName} to cart`);
                
                // Animation feedback
                addToCartBtn.textContent = 'Added to Cart!';
                addToCartBtn.classList.add('added');
                
                setTimeout(() => {
                    addToCartBtn.textContent = 'Add To Cart - $22.50';
                    addToCartBtn.classList.remove('added');
                }, 2000);
            });
        }
    });
}

// Form validation for contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        let valid = true;
        const name = contactForm.querySelector('#name');
        const email = contactForm.querySelector('#email');
        const message = contactForm.querySelector('#message');
        
        if (name && name.value.trim() === '') {
            valid = false;
            name.classList.add('error');
        } else if (name) {
            name.classList.remove('error');
        }
        
        if (email && (email.value.trim() === '' || !isValidEmail(email.value))) {
            valid = false;
            email.classList.add('error');
        } else if (email) {
            email.classList.remove('error');
        }
        
        if (message && message.value.trim() === '') {
            valid = false;
            message.classList.add('error');
        } else if (message) {
            message.classList.remove('error');
        }
        
        if (valid) {
            // Demo form submission
            console.log('Form submitted successfully');
            
            // Show success message
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => {
                group.style.display = 'none';
            });
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) {
                submitBtn.style.display = 'none';
            }
            
            // Create and show success message
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.innerHTML = `
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
            `;
            contactForm.appendChild(successMessage);
        }
    });
}

// Email validation helper function
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (!emailInput || emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            if (emailInput) {
                emailInput.classList.add('error');
            }
            return;
        }
        
        // Success handling
        emailInput.classList.remove('error');
        
        // Hide the form
        newsletterForm.innerHTML = '<div class="success-message">Thank you for subscribing!</div>';
    });
}

// Fade-in animation for page elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Select elements to animate
    const sections = document.querySelectorAll('section');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target element
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Skip links with just #
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 