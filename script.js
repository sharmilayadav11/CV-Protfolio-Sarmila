// Smooth scroll for Links section
document.querySelectorAll('.left-column a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate progress bars when they come into view
window.addEventListener('scroll', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (barPosition < windowHeight) {
            bar.style.width = bar.getAttribute('data-progress') + '%';
        }
    });
});
