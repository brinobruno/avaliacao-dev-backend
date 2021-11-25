const express = require('express')

const router = express.Router()

router.post('/', (request, response) => {
  const { name } = request.body
  response.status(200).json({ name })
})

router.get('/', (request, response) => {
  console.log('Olá')
  response.status(200).send()
})

module.exports = router