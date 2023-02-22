const express = require('express')
const app = express()
//morgan provides HTTP errors
const logger = require('morgan');
const path = require('path');
// const port = 3001;
const gamesRouter = require('./routes/api/games')
const messageRouter =require('./routes/api/messages')
// const orderRouter = require('./routes/api/orders')
require('dotenv').config();
require('./config/database')




app.use(logger('dev'));
app.use(express.json());
// app.use('/Cloudinaryroute', require('./controllers/Cloudinaryroute'))

// to serve from the production 'build' folder

app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));


//
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))
const ensureLoggedIn = require('./config/ensureLoggedin');
app.use('/api/games', gamesRouter)

app.use("/api/messages", messageRouter)


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
// app.get('/seed',async(req,res)=>{})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server

///
const port = process.env.PORT || 3001;


app.listen(port, () => {
    console.log(`currently running on port ${port}`)
})