// Import express module
const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.send('Hello, to the azure portal');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
