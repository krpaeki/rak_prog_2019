const express = require('express')
const app = express()
const path = require("path");
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static", "index.html"));
})

app.use(express.static('static'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started", 3000);
  });