// fortmark.js

function loadDatabase() {
    const database = [];
    fetch('database.json')
        .then(response => response.json())
        .then(data => {
            database.push(...data);
            return database;
        })
        .catch(error => console.error('Error loading database:', error));
    return database;
}

function estimateFps(cpu, gpu, ram, resolution, graphicsPreset) {
    const database = loadDatabase();
    let estimatedFps = 0;
    database.forEach(config => {
        if (config.cpu === cpu && config.gpu === gpu && config.ram === ram && config.resolution === resolution && config.graphicsPreset === graphicsPreset) {
            estimatedFps = config.estimatedFps;
        }
    });
    return estimatedFps;
}

// Get the form and estimated FPS elements
const hardwareForm = document.getElementById('hardware-form');
const estimatedFpsElement = document.getElementById('estimated-fps');

// Add an event listener to the form submission
hardwareForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cpu = document.getElementById('cpu').value;
    const gpu = document.getElementById('gpu').value;
    const ram = document.getElementById('ram').value;
    const resolution = document.getElementById('resolution').value;
    const graphicsPreset = document.getElementById('graphics-preset').value;
    const estimatedFps = estimateFps(cpu, gpu, ram, resolution, graphicsPreset);
    estimatedFpsElement.textContent = `Estimated FPS: ${estimatedFps}`;
});

// Define the options for the dropdown menus
const cpuOptions = [
    { value: 'Intel Core i5', text: 'Intel Core i5' },
    { value: 'Intel Core i7', text: 'Intel Core i7' },
    { value: 'Intel Core i9', text: 'Intel Core i9' },
    { value: 'AMD Ryzen 5', text: 'AMD Ryzen 5' },
    { value: 'AMD Ryzen 7', text: 'AMD Ryzen 7' },
    { value: 'AMD Ryzen 9', text: 'AMD Ryzen 9' }
];

const gpuOptions = [
    { value: 'NVIDIA GeForce GTX 1660', text: 'NVIDIA GeForce GTX 1660' },
    { value: 'NVIDIA GeForce RTX 3060', text: 'NVIDIA GeForce RTX 3060' },
    { value: 'NVIDIA GeForce RTX 3080', text: 'NVIDIA GeForce RTX 3080' },
    { value: 'AMD Radeon RX 5600 XT', text: 'AMD Radeon RX 5600 XT' },
    { value: 'AMD Radeon RX 6700 XT', text: 'AMD Radeon RX 6700 XT' },
    { value: 'AMD Radeon RX 6900 XT', text: 'AMD Radeon RX 6900 XT' }
];

const ramOptions = [
    { value: '8 GB', text: '8 GB' },
    { value: '16 GB', text: '16 GB' },
    { value: '32 GB', text: '32 GB' },
    { value: '64 GB', text: '64 GB' }
];

// Get the dropdown menu elements
const cpuSelect = document.getElementById('cpu');
const gpuSelect = document.getElementById('gpu');
const ramSelect = document.getElementById('ram');

// Populate the dropdown menus
cpuOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    cpuSelect.appendChild(optionElement);
});

gpuOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    gpuSelect.appendChild(optionElement);
});

ramOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    ramSelect.appendChild(optionElement);
});