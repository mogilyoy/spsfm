document.addEventListener("DOMContentLoaded", function() {
    const badges = document.querySelectorAll('.w-webflow-badge, img[src*="webflow-badge"]');
    badges.forEach(function(badge) {
        badge.remove();
    });
});

