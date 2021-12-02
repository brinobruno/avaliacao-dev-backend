const express = require('express')
const handleInterlace = require('../controllers/interlaceUseCase')

const router = express.Router()

router.use(express.json())

router.get('/', handleInterlace, (request, response) => {
  //response.status(200).send()
  //2 send() dá trigger em um erro que não afeta o funcionamento mas é displayed
  //portanto encarreguei a rota de chamar o metodo e o middleware apenas basicamente
})

module.exports = router