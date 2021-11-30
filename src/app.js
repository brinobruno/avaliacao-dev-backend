const express = require('express')

const sortedListRouter = require('./routes/sortedList')
const interlaceRouter = require('./routes/interlace')

const app = express()

app.use(express.json())

app.use('/sortedLists', sortedListRouter)

app.use('/interlace', interlaceRouter)

app.listen(8080, () => {
  console.log('Server running!')
})