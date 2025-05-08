/**
 * Responsive Navbar Implementation
 */
document.addEventListener('DOMContentLoaded', function() {
  // Get navbar elements
  const burger = document.querySelector('.navbar-burger');
  const navMenu = document.querySelector('.navbar-menu');
  const navItems = document.querySelectorAll('.navbar-item');
  let resizeTimer;
  let lastWindowWidth = window.innerWidth;
  
  // Set item indices for staggered animation
  navItems.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });
  
  // Toggle mobile menu when burger is clicked
  if (burger) {
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
      
      // Toggle aria-expanded attribute for accessibility
      const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
      burger.setAttribute('aria-expanded', !expanded);
      
      // Prevent scrolling when menu is open
      document.body.classList.toggle('no-scroll');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (burger && navMenu && burger.classList.contains('is-active')) {
      if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
        burger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    }
  });
  
  // Handle window resize more smoothly
  window.addEventListener('resize', function() {
    // Clear any previous timers to prevent multiple rapid executions
    clearTimeout(resizeTimer);
    
    // Use a timer to wait until resizing has stopped
    resizeTimer = setTimeout(() => {
      const currentWidth = window.innerWidth;
      const breakpoint = 768;
      
      // Only reset menu if we cross the breakpoint
      const crossedBreakpoint = (lastWindowWidth <= breakpoint && currentWidth > breakpoint) || 
                               (lastWindowWidth > breakpoint && currentWidth <= breakpoint);
      
      if (crossedBreakpoint) {
        // Moving from mobile to desktop
        if (currentWidth > breakpoint) {
          burger.classList.remove('is-active');
          navMenu.classList.remove('is-active');
          burger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        }
        
        // Update display of navbar elements based on current size
        if (burger) {
          burger.style.display = currentWidth <= breakpoint ? 'block' : 'none';
        }
      }
      
      // Store the current width for the next resize event
      lastWindowWidth = currentWidth;
    }, 250); // Adjust timeout as needed for performance
  });
  
  // Handle nav links click (close menu when link is clicked)
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (burger && navMenu && window.innerWidth <= 768) {
        burger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  });
}); 