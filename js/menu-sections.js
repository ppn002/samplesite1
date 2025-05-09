document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.menu-section');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Hide all sections except the first one initially
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const targetSection = button.getAttribute('data-section');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            document.querySelector(`.menu-section[data-section="${targetSection}"]`).style.display = 'block';
        });
    });
}); 