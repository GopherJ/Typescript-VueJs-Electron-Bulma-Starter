import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as WebSocket from 'ws'
import * as http from 'http'
import * as url from 'url'
import * as config from '../config/index.json'

// Create Express server
const app = express()

// Initialize a simple http server
const server = http.createServer(app)

// Initialize the WebSocket server instance
const wss = new WebSocket.Server({ noServer: true })

wss.on('connection', function(ws) {
  console.log(ws)
})

server.on('upgrade', function upgrade(request, socket, head) {
  const pathname = url.parse(request.url).pathname;
  if (pathname !== '/ws') {
    socket.destroy();
  }

  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
})

// Express configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('hello world')
})

// Run server
app.listen((<any>config).server.port, () => console.log(`Server is listening on port ${(<any>config).server.port}!`))
