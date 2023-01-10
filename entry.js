require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Prevent caching in development
if (process.env.DEVELOPMENT) {
    const nocache = require('nocache');
    app.use(nocache());
}

// Serve static files
app.use(express.static('public'));

// Start server
app.listen(port, () => console.log(`Momoku started!\n http://localhost:${port}/ !`));