const express = require('express');
const app = express();

// Set the port from an environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Successfully Deployed using Web Hooks',
        
        name: 'Skippy',
        port: PORT
    });
});

// Catch-all route for 404
app.get('*', (req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 Not Found</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f2f2f2;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    font-size: 50px;
                    color: #ff6347;
                }
                p {
                    font-size: 20px;
                }
                a {
                    color: #3498db;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <h1>404 Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <p><a href="/">Go back to Home</a></p>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
