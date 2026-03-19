const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Routes import
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});