const express = require('express')
const next = require('next')
const models = require('./models')
const apiRoutes = require('./api/routes')
const { webSocketServer } = require('./websocket/wss')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()
const handle = app.getRequestHandler()
const { userRepository } = require('./repository/userRepository')

server.use(express.json())

async function main() {
  await app.prepare()
  await userRepository.init()
  await await models.sequelize.sync({ alter: true })

  webSocketServer.start()
  server.use('/api', apiRoutes)
  server.all('*', (req, res) => handle(req, res))

  const listener = server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err

    console.log(`Mercury running in port ${listener.address().port}`)
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
