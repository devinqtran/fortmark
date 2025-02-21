// Estimate FPS based on user input
async function estimateFps(cpu, gpu, ram, resolution, graphicsPreset) {
    // Create the payload with the form data
    const payload = { cpu, gpu, ram, resolution, graphicsPreset };

    try {
        // Send the POST request to the server
        const response = await fetch('/estimate-fps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            return data.estimatedFps;  // Return the estimated FPS from the response
        } else {
            const error = await response.json();
            console.error('Error:', error);
            return 'Error estimating FPS';
        }
    } catch (error) {
        console.error('Request failed:', error);
        return 'Error estimating FPS';
    }
}

// Handle form submission
const hardwareForm = document.getElementById('hardware-form');
const estimatedFpsElement = document.getElementById('estimated-fps');

hardwareForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const cpu = document.getElementById('cpu').value;
    const gpu = document.getElementById('gpu').value;
    const ram = document.getElementById('ram').value;
    const resolution = document.getElementById('resolution').value;
    const graphicsPreset = document.getElementById('graphics-preset').value;

    const estimatedFps = await estimateFps(cpu, gpu, ram, resolution, graphicsPreset);
    estimatedFpsElement.textContent = `Estimated FPS: ${estimatedFps}`;
});
