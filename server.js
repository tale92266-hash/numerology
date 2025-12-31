const express = require('express');
const path = require('path');
const app = express();

// Public folder ko static banao (CSS, JS, Images ke liye)
app.use(express.static(path.join(__dirname, 'public')));

// Root route ('/') par index.html serve karo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Port configuration (Vercel automatic port assign karta hai)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export app for Vercel
module.exports = app;
