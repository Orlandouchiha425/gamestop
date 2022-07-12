// const { Schema } = require('mongoose')
const Games = require('../models/Games')
const { findByIdAndDelete } = require('../models/User')

//Find Games API
const findGames = (req, res) =>{
    Games.find({}, (err, foundGames) => {
        if(!err){
            res.status(200).json(foundGames)
        }else{
            res.status(400).json(err)
        }
    })
}

//Create games
const createGames = async (req, res) =>{
    try{
        const {body} = req
        const createdGames = await Games.create(body)
        res.status(200).json({message: 'Created Game', createdGames})
    }catch(error){
        res.status(400).json({ err: error.message})
    }
}

///Update Game 

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

const showGames = (req, res)=> {
    Games.findById(req.params.id, (err, games) =>{
        if(!err){
            res.status(200).json({message: "showing the Game", games})
        }else{
            res.status(400).json(err)
        }
    })
}


module.exports = {
    showGames,
    deleteGames,
    createGames,
    findGames,
}