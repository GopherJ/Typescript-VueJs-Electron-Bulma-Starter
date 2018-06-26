import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as WebSocket from 'ws'
import * as http from 'http'

const port = 1919

// Create Express server
const app = express()

// Initialize a simple http server
const server = http.createServer(app)

// Initialize the WebSocket server instance
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws: WebSocket) => {

  // Connection is up, let's add a simple simple event
  ws.on('message', (message: string) => {

      // Log the received message and send it back to the client
      console.log('received: %s', message)
      ws.send(`Hello, you sent -> ${message}`)
  });
})

// Express configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('hello world')
})

// Run server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
