document.addEventListener('DOMContentLoaded', (event) => {
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(widget => {
        widget.addEventListener('click', function() {
            this.classList.add('pulsing');
            setTimeout(() => {
                this.classList.remove('pulsing');
            }, 500);
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
