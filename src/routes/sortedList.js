const express = require('express')
const handleSort = require('../controllers/sortedListUseCase')

const router = express.Router()

router.use(express.json())

router.post('/', handleSort, (request, response) => {
  const { listas } = request.body

  response.status(200).json({ listas })
})

router.get('/', (request, response) => {
  console.log('Olá')
  response.status(200).send()
})

module.exports = router