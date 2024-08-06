document.addEventListener('DOMContentLoaded', (event) => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.textContent = '⚡';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

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
