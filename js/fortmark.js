// Get the form and estimated FPS elements
const hardwareForm = document.getElementById('hardware-form');
const estimatedFpsElement = document.getElementById('estimated-fps');

// Add an event listener to the form submission
hardwareForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the user's input from the form
    const cpu = document.getElementById('cpu').value;
    const gpu = document.getElementById('gpu').value;
    const ram = document.getElementById('ram').value;
    const resolution = document.getElementById('resolution').value;
    const graphicsPreset = document.getElementById('graphics-preset').value;

    // Estimate the FPS based on the user's input
    // This is a very basic example and you'll need to replace it with a more accurate estimation algorithm
    const estimatedFps = Math.floor(Math.random() * 100) + 1;

    // Display the estimated FPS
    estimatedFpsElement.textContent = `Estimated FPS: ${estimatedFps}`;
});