const bgColorSelect = document.getElementById('bg-color');
const fontSlider = document.getElementById('font-slider');
const toggleButton = document.getElementById('toggle-mode');
const displayArea = document.getElementById('display-area');
const bodyElement = document.body;

// Change background color
bgColorSelect.addEventListener('change', function() {
    bodyElement.style.backgroundColor = this.value;
});

// Change font size dynamically
fontSlider.addEventListener('input', function() {
    displayArea.style.fontSize = this.value + 'px';
});

// Toggle dark and light modes
toggleButton.addEventListener('click', function() {
    // Toggle class for dark mode
    bodyElement.classList.toggle('dark-mode');

    // Change button text based on mode
    if (bodyElement.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});
