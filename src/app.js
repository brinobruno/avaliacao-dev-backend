const express = require('express')

const sortedListRouter = require('./routes/sortedList')

const app = express()

app.use(express.json())

app.use('/sortedLists', sortedListRouter)

app.listen(8080, () => {
  console.log('Server running!')
})