const express = require('express');
const app = express();

// Set the port from an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello, World!',
        name: 'Skippy',
        port: PORT
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
