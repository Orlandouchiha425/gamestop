const express = require('express')

const router = express.Router()
const {findgameById, deleteGames, createGames, findAllGames, updateGames} = require('../../controllers/Games')

router.get('/',showGames)

router.post('/',createGames)
//Update route
router.put('/:id', updateGames)
//delete
router.delete('/:id',deleteGames)

// this gets a game only 
router.get('/:id', findgameById)

module.exports = router;


