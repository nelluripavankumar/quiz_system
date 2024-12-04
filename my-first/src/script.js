// Get elements
const settingsButton = document.getElementById('settingsButton');
const settingsMenu = document.getElementById('settingsMenu');
const themeSelector = document.getElementById('themeSelector');
const body = document.body;

// Show/hide settings menu
settingsButton.addEventListener('click', () => {
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
});

// Change theme based on the selection
themeSelector.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    if (selectedTheme === 'dark') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});

// Default theme set to light on page load
document.addEventListener('DOMContentLoaded', () => {
    body.classList.add('light-theme');
});
