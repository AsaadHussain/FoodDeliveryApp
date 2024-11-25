const express = require('express');
const app = express();
const port = 5000;
const connectDB = require("./db.js");

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use()

connectDB();

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})