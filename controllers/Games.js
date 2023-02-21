// const { Schema } = require('mongoose')
const Games = require('../models/Games')
const cloudinary  = require('../multer/cloudinary')
const router = require('../routes/api/games')
const upload = require("../multer/multer");
const User = require("../models/Games");
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
    Games.find({clearance:true}, (err, foundGames) => {
        if(!err){
            res.status(200).json(foundGames)
        }else{
            res.status(400).json(err)
        }
    })
}
const findPokemonGames=(req, res)=>{
    Games.find({pokemon:True}, (err,foundGames ) =>{
        if(!err){
            res.status(200).json(foundGames)
        }else{
            res.status(400).json(err)
        }
    })
}


// async function show(req, res) {
//     try{
//         const id = await req.params.id
//         const game = await Games.findById(id)
//         res.status(200).json(game)
//     } catch(e) {
//         res.status(400).json(e)
//     }
// }

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
        res.status(200).json({message: "Deleted Game"})
        
    }else{
        res.status(400).json(err)
    }
   })
}




///Find By ID

const findOnegameById = (req, res)=> {
    Games.findById(req.params.id, (err, games) =>{
        if(!err){
            res.status(200).json({message: "showing the Game", games})
        }else{
            res.status(400).json(err)
        }
    })
}


// async function findOnegameById(req, res) {
//     try{
//         const id = await req.params.id
//         const game = await Games.findById(id)
//         res.status(200).json(game)
//     } catch(e) {
//         res.status(400).json(e)
//     }
// }


async function editGames(req, res) {
    const {body} = req
    Games.findByIdAndUpdate(req.params.id, body,{new:true}, (err, updatedGame) =>{
        if(!err) {
            res.status(200).json(updatedGame)
        }else{
            res.status(400).json(err)
        }
    })
}


// router.get('/:id/edit',(req,res)=>{
//     const {id}=req.params;
//     Games.findById(req.params.id,(err, updatedGames)=>{
//         if(err){
//             res.status(400).send(err)
//         }else{res.render('./Edit',{
//             games:updatedGames
//         })}
//     })
// })

const createImage= async()=>{
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
    
        // Create new user
        let user = new User({
          name: req.body.name,
          avatar: result.secure_url,
          cloudinary_id: result.public_id,
        });
        // Save user
        await user.save();
        res.json({user:"image created succesfully"});
      } catch (err) {
        console.log(err);
      }

}




module.exports = {
    findOnegameById,
    deleteGames,
    createGames,
    findAllGames,
    editGames,
    findClearanceGames,
    createImage,
    findPokemonGames
}