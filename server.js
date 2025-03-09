const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// ✅ Serve static files (HTML, CSS, JS, images) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ API Route (Keep your JSON response if needed)
app.get('/api', (req, res) => {
    res.json({
        status: 200,
        message: "Welcome to United States"
    });
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});