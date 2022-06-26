const express = require('express')
const app = express()
//morgan provides HTTP errors
const logger = require('morgan');

const port = 3001;



require('dotenv').config();
require('./config/databse')


app.use(logger('dev'));
app.use(express.json());


// to serve from the production 'build' folder

app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server

app.listen(port, () => {
    console.log(`currently running on port ${port}`)
})