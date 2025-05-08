/**
 * Apply brown box styling to coffee images on menu page
 */
function applyBrownBoxes() {
    console.log("Applying brown box styles...");
    
    // Target all possible image containers
    const imageContainers = document.querySelectorAll('.coffee-image, .menu-item-image, .merch-item-image');
    
    imageContainers.forEach(container => {
        // Apply styles directly to the container
        container.setAttribute("style", `
            background-color: #A67C52 !important;
            border: 4px solid #663300 !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 12px rgba(102, 51, 0, 0.2) !important;
            padding: 0 !important;
            overflow: hidden !important;
            display: block !important;
            position: relative !important;
            font-size: 0 !important;
            line-height: 0 !important;
            margin-bottom: 15px !important;
            width: 100% !important;
            height: 0 !important;
            padding-bottom: 75% !important;
        `);
        
        // Add a background element to ensure full coverage
        if (!container.querySelector('.box-background')) {
            const background = document.createElement('div');
            background.className = 'box-background';
            background.setAttribute('style', `
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                background-color: #A67C52 !important;
                z-index: 0 !important;
            `);
            container.insertBefore(background, container.firstChild);
        }
        
        // Style the image inside
        const img = container.querySelector('img');
        if (img) {
            img.setAttribute("style", `
                border-radius: 0 !important;
                display: block !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                object-position: center center !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                vertical-align: bottom !important;
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                z-index: 1 !important;
            `);
            
            // Force layout recalculation to ensure proper rendering
            void img.offsetHeight;
        }
    });
    
    console.log(`Applied styles to ${imageContainers.length} image containers`);
}

// Apply the styles when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    applyBrownBoxes();
});

// Apply again after the page has fully loaded
window.addEventListener('load', (event) => {
    applyBrownBoxes();
    // Apply once more after a delay to catch any dynamically loaded content
    setTimeout(applyBrownBoxes, 500);
});

// For good measure, apply styles every second for 5 seconds
let count = 0;
const interval = setInterval(() => {
    applyBrownBoxes();
    count++;
    if (count >= 5) {
        clearInterval(interval);
    }
}, 1000); 