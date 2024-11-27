
const express = require('express');
const connectDB = require("./db.js");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());

app.use('/api', require('./Routes/createUser.js'))
app.use('/api', require('./Routes/displayData.js'))

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})