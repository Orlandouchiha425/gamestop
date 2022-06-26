const express = require('express')
const app = express()

const logger = require('morgan');

const port = 3001;



require('dotenv').config();
require('./config/databse')

app.listen(port, () => {
    console.log(`currently running on port ${port}`)
})