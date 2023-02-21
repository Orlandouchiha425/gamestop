const express = require('express')

const router = express.Router()
const {findOnegameById,findPokemonGames, deleteGames, createGames, findAllGames, editGames, findClearanceGames, createImage} = require('../../controllers/Games')

router.get('/clearance',findClearanceGames)

router.get('/',findAllGames)

router.post('/',createGames)
//Update route
router.put('/:id', editGames)
//delete
router.delete('/:id',deleteGames)

// this gets a game only 
router.get('/:id', findOnegameById)
router.get(':/id', findPokemonGames)
router.post('/', createImage)


module.exports = router;


