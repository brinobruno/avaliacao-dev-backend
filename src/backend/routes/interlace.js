const express = require('express')
//const middlewareHere = require('../controllers/interlaceUseCase')

const router = express.Router()

router.use(express.json())

function isInterlace(request, response, next) {
  const { intervaloA, intervaloB } = request.body

  const fullA = [];
  const fullB = [];

  //Approach: Inserir os números dentro de cada intervalo em um array completo e comparar se houve algum número em comum
  //Subótimo em grandes quantia por excesso de iteração. Ex: intervalo entre números com 5+ casas decimais
  for (let i = intervaloA[0]; i <= intervaloA[1]; i++) fullA.push(i);
  for (let i = intervaloB[0]; i <= intervaloB[1]; i++) fullB.push(i);

  console.log(isIt)
    
  next()
}

router.get('/', isInterlace, (request, response) => {
  response.status(200).send()
})

module.exports = router