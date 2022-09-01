const express = require('express')
const app = express()
//morgan provides HTTP errors
const logger = require('morgan');
const path = require('path');
const port = 3001;
const gamesRouter = require('./routes/api/games')
const cloudinary =require('cloudinary');

require('dotenv').config();
require('./config/database')


///CLOUDINARY
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})

app.use(logger('dev'));
app.use(express.json());


// to serve from the production 'build' folder

app.use(express.static(path.join(__dirname, 'build')));

// Check if token and create req.user
app.use(require('./config/checkToken'));


//
app.use('/api/games', gamesRouter)
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server

///
app.delete('/:public_id', async(req, res )=>{
    const {public_id} =req.params;
    try{
        await cloudinary.uploader.destroy(public_id);
        res.status(200).send()
    }catch(error){
        res.status(400).send();
    }
})

app.listen(port, () => {
    console.log(`currently running on port ${port}`)
})