const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', require('./routes/auth'));

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

//Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});