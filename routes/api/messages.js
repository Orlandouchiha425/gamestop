const express = require('express')

const router = express.Router()

const { findAllMessages, createMessages, deleteMessages, findMessageByID, editMessages} =require('../../controllers/api/messages')

router.get("/:id",findAllMessages)

router.get('/:id',createMessages)

router.get("/:id",editMessages)

router.get('/:id',findMessageByID)

router.get('/:id',deleteMessages)