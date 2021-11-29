const express = require('express')
const handleInterlace = require('../controllers/interlaceUseCase')

const router = express.Router()

router.use(express.json())

router.get('/', handleInterlace, (request, response) => {
  response.status(200).send()
})

module.exports = router