/**
 * Universal Menu JS - Handles menu interactions across the site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize menu item hover effects
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (menuItems.length > 0) {
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
    }
    
    // Initialize coffee card hover effects
    const coffeeCards = document.querySelectorAll('.coffee-card');
    
    if (coffeeCards.length > 0) {
        coffeeCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            card.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
    }
    
    // Handle image loading errors
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            // Apply a background color if image fails to load
            this.style.display = 'none';
            if (this.parentElement) {
                this.parentElement.style.backgroundColor = '#A67C52';
                
                // Add a coffee icon as fallback
                const icon = document.createElement('span');
                icon.innerHTML = '☕';
                icon.style.fontSize = '2rem';
                icon.style.color = '#fff';
                icon.style.display = 'flex';
                icon.style.alignItems = 'center';
                icon.style.justifyContent = 'center';
                icon.style.height = '100%';
                
                this.parentElement.appendChild(icon);
            }
        });
    });
}); 