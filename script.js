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
});
