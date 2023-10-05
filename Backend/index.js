const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`noteCraft backend listening at http://localhost:${port}`)
})