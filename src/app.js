const express = require('express')
const cors = require('cors')

const sortedListRouter = require('./routes/sortedList')
const interlaceRou

const app = express()

app.use(cors())

app.use(express.json())

app.use('/sortedLists', sortedListRouter)

app.use('/interlace', interlaceRouter)

app.listen(8080, () => {
  console.log('Server running!')
})