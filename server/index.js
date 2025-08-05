const express = require('express');
const app = express();
const PORT = 5000;

// Test Route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});