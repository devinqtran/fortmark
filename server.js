const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize Express
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON data
app.use(express.json());

// Open SQLite database
const db = new sqlite3.Database('fortmark.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Endpoint to get FPS estimate based on user input
app.post('/estimate-fps', (req, res) => {
    const { cpu, gpu, ram, resolution, graphicsPreset } = req.body;

    // SQL query to find the matching configuration
    const query = `
        SELECT estimatedFps 
        FROM hardware_configurations
        WHERE cpu = ? AND gpu = ? AND ram = ? AND resolution = ? AND graphicsPreset = ?
    `;
    
    db.get(query, [cpu, gpu, ram, resolution, graphicsPreset], (err, row) => {
        if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (row) {
            // Return the estimated FPS
            return res.json({ estimatedFps: row.estimatedFps });
        } else {
            // If no match is found
            return res.status(404).json({ error: 'No matching configuration found' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
