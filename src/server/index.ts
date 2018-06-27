import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as WebSocket from 'ws'
import * as http from 'http'
import * as url from 'url'
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
  ws.send(JSON.stringify({a: 1}))
})
// Express configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../client/index.html')))

// Run server
app.listen(port, () => console.log(`Server is listening on port ${port}`))
