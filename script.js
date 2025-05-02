document.addEventListener("DOMContentLoaded", function() {
    const designSections = document.querySelectorAll('.design');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    designSections.forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.feature').forEach(feature => {
        const featureId = feature.getAttribute('data-feature');
        const detail = document.getElementById(featureId);
        const arrow = feature.querySelector('.arrow');

        feature.setAttribute('tabindex', '0');
        feature.setAttribute('role', 'button');
        feature.setAttribute('aria-expanded', 'false');

        feature.addEventListener('click', function() {
            const isOpen = detail.classList.toggle('open');
            feature.classList.toggle('open', isOpen);
            arrow.textContent = isOpen ? '▲' : '▼';
            feature.setAttribute('aria-expanded', isOpen);
        });

        feature.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                feature.click();
            }
        });
    });
});
