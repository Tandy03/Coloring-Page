let selectedColor = '#ff0000'; // Default color

document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', function() {
        selectedColor = this.getAttribute('data-color');
        document.querySelectorAll('.color').forEach(c => c.style.border = '2px solid #000');
        this.style.border = `2px solid ${selectedColor}`;
    });
});

document.querySelectorAll('.colorable').forEach(element => {
    element.addEventListener('click', function() {
        this.setAttribute('fill', selectedColor);
    });
});
