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