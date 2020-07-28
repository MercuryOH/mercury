const WebSocket = require('ws')

class WebSocketServer {
  start() {
    const webSocketServer = new WebSocket.Server({
      port: 8080 || process.env.PORT,
    })

    webSocketServer.on('connection', (ws) => {
      ws.on('message', (message) => {
        console.log(`Received message => ${message}`)
      })

      ws.send('Hello! Message From Server!!')
    })
  }
}

module.exports = {
  webSocketServer: new WebSocketServer(),
}
