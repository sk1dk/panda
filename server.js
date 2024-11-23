const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Vue app build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handles any requests that don't match the above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});