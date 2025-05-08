/**
 * Simple Menu JS - Handles the menu filtering and display
 */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (filterButtons.length > 0 && menuItems.length > 0) {
        // Initialize - show all items by default
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                menuItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.add('fade-in');
                        }, 10);
                    } else {
                        if (item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.classList.add('fade-in');
                            }, 10);
                        } else {
                            item.classList.remove('fade-in');
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Apply responsive layout adjustments
    function adjustMenuLayout() {
        const windowWidth = window.innerWidth;
        const menuGrid = document.querySelector('.menu-grid');
        
        if (menuGrid) {
            if (windowWidth < 768) {
                menuGrid.classList.add('mobile-layout');
            } else {
                menuGrid.classList.remove('mobile-layout');
            }
        }
    }
    
    // Run on load and on window resize
    adjustMenuLayout();
    window.addEventListener('resize', adjustMenuLayout);
}); 