document.addEventListener("DOMContentLoaded", () => {
    // Select both types of animation classes
    const faders = document.querySelectorAll('.fade-up, .fade-left');

    const appearOptions = { 
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px" 
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        fadeObserver.observe(fader);
    });
});