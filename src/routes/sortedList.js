const express = require('express')
const handleSort = require('../controllers/sortedListUseCase')

const router = express.Router()

router.use(express.json())

router.post('/', handleSort, (request, response) => {
  const { listas } = request.body

  response.status(200).json({ listas })
})

module.exports = router