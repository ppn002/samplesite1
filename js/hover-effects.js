/**
 * Add hover effects to all menu items
 */
document.addEventListener('DOMContentLoaded', function() {
  // Function to ensure content overlays are properly positioned
  function positionOverlays() {
    // Target all content overlays
    const contentOverlays = document.querySelectorAll('.coffee-content, .menu-item-content, .merch-item-content');
    
    contentOverlays.forEach(overlay => {
      // Set initial state - positioned below the container
      overlay.style.transform = 'translateY(100%)';
      
      // Ensure z-index is set properly
      overlay.style.zIndex = '3';
      
      // Get the parent element that will be hovered
      const parent = overlay.closest('.coffee-card, .menu-item, .merch-item');
      
      if (parent) {
        // Make sure parent has proper overflow and position
        parent.style.overflow = 'hidden';
        parent.style.position = 'relative';
        
        // Add event listeners for hover
        parent.addEventListener('mouseenter', function() {
          overlay.style.transform = 'translateY(0)';
        });
        
        parent.addEventListener('mouseleave', function() {
          overlay.style.transform = 'translateY(100%)';
        });
      }
    });
  }
  
  // Run initially
  positionOverlays();
  
  // Run again after images load
  window.addEventListener('load', positionOverlays);
  
  // Run again after a delay to catch any dynamically loaded content
  setTimeout(positionOverlays, 500);
});

// For good measure, apply hover effects to add-to-cart buttons
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
  addToCartButtons.forEach(button => {
    button.style.transition = 'background-color 0.3s ease';
    
    button.addEventListener('mouseenter', function() {
      button.style.backgroundColor = '#c68e40';
    });
    
    button.addEventListener('mouseleave', function() {
      button.style.backgroundColor = '';
    });
  });
}); 