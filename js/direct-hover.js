/**
 * Direct DOM manipulation to add hover effects to all menu items
 */
document.addEventListener('DOMContentLoaded', function() {
  // Apply to all menu items - now using consistent structure across all sections
  applyHoverEffectsToMenuItems();
  
  // Run again after everything loads
  window.addEventListener('load', function() {
    applyHoverEffectsToMenuItems();
  });
});

/**
 * Apply hover effects to all menu items
 */
function applyHoverEffectsToMenuItems() {
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    // Get the image box
    const imageBox = item.querySelector('.image-box');
    if (!imageBox) return;
    
    // Get the content section
    const content = item.querySelector('.menu-item-content');
    if (!content) return;
    
    // Style the parent item
    item.style.position = 'relative';
    item.style.overflow = 'hidden';
    
    // Style the content
    content.style.position = 'absolute';
    content.style.bottom = '0';
    content.style.left = '0';
    content.style.right = '0';
    content.style.backgroundColor = 'rgba(111, 78, 55, 0.95)';
    content.style.color = '#fff';
    content.style.padding = '1.5rem';
    content.style.transform = 'translateY(100%)';
    content.style.transition = 'transform 0.4s ease';
    content.style.zIndex = '3';
    content.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/dark-wood.png")';
    content.style.backgroundBlendMode = 'overlay';
    
    // Style the image
    const img = imageBox.querySelector('img');
    if (img) {
      img.style.transition = 'transform 0.4s ease';
    }
    
    // Add hover effect
    item.addEventListener('mouseenter', function() {
      content.style.transform = 'translateY(0)';
      if (img) img.style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      content.style.transform = 'translateY(100%)';
      if (img) img.style.transform = 'scale(1)';
    });
  });
} 