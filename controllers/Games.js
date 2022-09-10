// const { Schema } = require('mongoose')
const Games = require('../models/Games')
const cloudinary  = require('../multer/cloudinary')
const router = require('../routes/api/games')
const upload = require('../multer/multer')

//Find Games API
const findAllGames = (req, res) =>{
    Games.find({}, (err, foundGames) => {
        if(!err){
            res.status(200).json(foundGames)
        }else{
            res.status(400).json(err)
        }
    })
}
//CREATE GAME TO SHOW Only Clearance
const findClearanceGames = (req, res) =>{
    Games.find({clearance:"true"}, (err, foundGames) => {
        if(!err){
            res.status(200).json(foundGames)
        }else{
            res.status(400).json(err)
        }
    })
}





//Create games›
const createGames = async (req, res) =>{
    try{
        const {body} = req
        const createdGames = await Games.create(body)
        res.status(200).json({message: 'Created Game', createdGames})
    }catch(error){
        res.status(400).json({ err: error.message})
    }
}




///delete Game 

const deleteGames = (req, res) =>{
   Games.findByIdAndDelete(req.params.id, (err) => {
    if(!err){
        res.status(200).json({message: "Deleted Games"})
    }else{
        res.status(400).json(err)
    }
   })
}


///Find By ID

const findgameById = (req, res)=> {
    Games.findById(req.params.id, (err, games) =>{
        if(!err){
            res.status(200).json({message: "showing the Game", games})
        }else{
            res.status(400).json(err)
        }
    })
}


const updateGames = (req,res) =>{
    const {body} = req
    Games.findByIdAndUpdate(req.params.id, body,{new:true}, (err, updatedGame) =>{
        if(!err) {
            res.status(200).json(updatedGame)
        }else{
            res.status(400).json(err)
        }
    })
}




module.exports = {
    findgameById,
    deleteGames,
    createGames,
    findAllGames,
    updateGames,
    findClearanceGames,
   
}