// Get the form and submission results elements
const submitForm = document.getElementById('submit-form');
const submissionResultsElement = document.getElementById('submission-results');

// Add an event listener to the form submission
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cpu = document.getElementById('cpu').value;
    const gpu = document.getElementById('gpu').value;
    const ram = document.getElementById('ram').value;
    const resolution = document.getElementById('resolution').value;
    const graphicsPreset = document.getElementById('graphics-preset').value;
    const fps = document.getElementById('fps').value;
    const submissionResults = submitBenchmark(cpu, gpu, ram, resolution, graphicsPreset, fps);
    submissionResultsElement.textContent = submissionResults;
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

// Submit benchmark function
function submitBenchmark(cpu, gpu, ram, resolution, graphicsPreset, fps) {
    // TO DO: implement the submission logic here
    return `Benchmark submitted successfully!`;
}