// Get the form and comparison results elements
const compareForm = document.getElementById('compare-form');
const comparisonResultsElement = document.getElementById('comparison-results');

// Add an event listener to the form submission
compareForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cpu1 = document.getElementById('cpu1').value;
    const gpu1 = document.getElementById('gpu1').value;
    const ram1 = document.getElementById('ram1').value;
    const cpu2 = document.getElementById('cpu2').value;
    const gpu2 = document.getElementById('gpu2').value;
    const ram2 = document.getElementById('ram2').value;
    const comparisonResults = compareHardware(cpu1, gpu1, ram1, cpu2, gpu2, ram2);
    comparisonResultsElement.textContent = comparisonResults;
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
const cpu1Select = document.getElementById('cpu1');
const gpu1Select = document.getElementById('gpu1');
const ram1Select = document.getElementById('ram1');
const cpu2Select = document.getElementById('cpu2');
const gpu2Select = document.getElementById('gpu2');
const ram2Select = document.getElementById('ram2');

// Populate the dropdown menus
cpuOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    cpu1Select.appendChild(optionElement);
    cpu2Select.appendChild(optionElement);
});

gpuOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    gpu1Select.appendChild(optionElement);
    gpu2Select.appendChild(optionElement);
});

ramOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    ram1Select.appendChild(optionElement);
    ram2Select.appendChild(optionElement);
});

// Compare hardware function
function compareHardware(cpu1, gpu1, ram1, cpu2, gpu2, ram2) {
    // TO DO: implement the comparison logic here
    return `CPU 1: ${cpu1}, GPU 1: ${gpu1}, RAM 1: ${ram1} vs CPU 2: ${cpu2}, GPU 2: ${gpu2}, RAM 2: ${ram2}`;
}