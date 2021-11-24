//const { request, response } = require('express')
const express = require('express')

const app = express()

app.use(express.json())

const sortedList = []

app.post('/ordenaLista', (request, response) => {
  const { salaN, salaS } = request.body

  if (something) {
    return response.status(400).json({ error: "Error message here" })
  }
  
  sortedList.push({
    salaN,
    salaS
  })

  return response.status(201).send()
})

app.get('/interlace', (request, response) => {
  const { destructureSomething } = request
  const { destructureSomethin } = request.query

  return response.json('const, object, else')
})

app.listen(8080)