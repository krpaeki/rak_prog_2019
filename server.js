const express = require('express')
const app = express()
const path = require("path");
<<<<<<< HEAD
const PORT = process.env.PORT || 3000;
=======
const PORT = 3000
>>>>>>> lesson2

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
})

app.use(express.static('dist'));

app.listen(PORT, () => {
    console.log("Server started", PORT);
    console.log(`http://localhost:${PORT}`)
  });