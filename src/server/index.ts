import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as WebSocket from 'ws'
import * as http from 'http'
import * as path from 'path'

// Create Express server
const app = express()

// Port
const port = 1919

// Initialize a simple http server
const server = http.createServer(app)

// Initialize the WebSocket server instance
const wss = new WebSocket.Server({ server, port: 40080 })
wss.on('connection', function connection(ws) {
  setInterval(() => {
    ws.send(JSON.stringify({timestampOfServer: new Date().valueOf()}))
  }, 16)
})

// Express configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('hello world')
})

// Run server
app.listen(port, () => console.log(`Server is listening on port ${port}`))
