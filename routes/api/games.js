const express = require('express')

const router = express.Router()
const {findOnegameById, deleteGames, createGames, findAllGames, updateGames, findClearanceGames, createImage} = require('../../controllers/Games')

router.get('/clearance',findClearanceGames)

router.get('/',findAllGames)

router.post('/',createGames)
//Update route
router.put('/:id', updateGames)
//delete
router.delete('/:id',deleteGames)

// this gets a game only 
router.get('/:id', findOnegameById)

router.post('/', createImage)


module.exports = router;


