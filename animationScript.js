/*==================== typed js ====================*/

const typed = new Typed('.changingText', {
    strings: ['Ready for a coding quiz','Challenge Your Coding Skills!', 'Test your knowledge, one question at a time!', 'Every quiz makes you a better coder'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// animation for left side logo
// for topLogo
document.addEventListener("DOMContentLoaded", function() {
    const iconset = document.getElementById("logo");
    
    // Trigger the animation
    requestAnimationFrame(() => {
        iconset.style.opacity = 1;
        iconset.style.transform = 'translateX(0)';
    });
});

// animation for bottom for form
document.addEventListener("DOMContentLoaded", function() {
    const iconset = document.getElementById("formSec");
    
    // Trigger the animation
    requestAnimationFrame(() => {
        iconset.style.opacity = 1;
        iconset.style.transform = 'translateY(0)';
    });
});

// animation for right for info sec
document.addEventListener("DOMContentLoaded", function() {
    const iconset = document.getElementById("infoSec");
    
    // Trigger the animation
    requestAnimationFrame(() => {
        iconset.style.opacity = 1;
        iconset.style.transform = 'translateX(0)';
    });
});