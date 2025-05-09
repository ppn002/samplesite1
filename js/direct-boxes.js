/**
 * Direct approach to create brown box image containers
 */
document.addEventListener('DOMContentLoaded', function() {
  // Get all image containers
  const containers = document.querySelectorAll('.coffee-image, .menu-item-image, .merch-item-image');
  
  containers.forEach(container => {
    // Get the image element
    const oldImage = container.querySelector('img');
    if (!oldImage) return;
    
    // Get image source and alt
    const src = oldImage.getAttribute('src');
    const alt = oldImage.getAttribute('alt');
    
    // Create new box structure
    const box = document.createElement('div');
    box.className = 'image-box';
    
    // Create new optimized image
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    
    // Add image to box
    box.appendChild(img);
    
    // Replace old container with new box
    container.parentNode.replaceChild(box, container);
  });
});

// Run again after window load to catch any dynamically loaded content
window.addEventListener('load', function() {
  // In case any images were added after initial load
  const containers = document.querySelectorAll('.coffee-image, .menu-item-image, .merch-item-image');
  
  containers.forEach(container => {
    const oldImage = container.querySelector('img');
    if (!oldImage) return;
    
    const src = oldImage.getAttribute('src');
    const alt = oldImage.getAttribute('alt');
    
    const box = document.createElement('div');
    box.className = 'image-box';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    
    box.appendChild(img);
    container.parentNode.replaceChild(box, container);
  });
}); 