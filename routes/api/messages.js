const express = require('express')

const router = express.Router()

const { findAllMessages, createMessages, deleteMessages, findMessageByID, editMessages} =require('../../controllers/api/messages')

router.get("/:id",findAllMessages)

router.post('/:id',createMessages)

router.put("/:id",editMessages)

router.get('/:id',findMessageByID)

router.delete('/:id',deleteMessages)

module.exports = router