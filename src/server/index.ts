import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as path from 'path'

const port = 1919

// Create Express server
const app = express()

// Express configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('hello world')
})

// Run server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
