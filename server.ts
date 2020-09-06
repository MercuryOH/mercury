import express from 'express'
import next from 'next'
import models from './models/index'
import apiRoutes from './api/routes'
import { webSocketServer } from './websocket/wss'
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()
const handle = app.getRequestHandler()
import { userRepository } from './repository/userRepository'

server.use(express.json())

async function main() {
  await app.prepare()
  await userRepository.init()
  await models.sequelize.sync({ alter: true })

  webSocketServer.start()
  server.use('/api', apiRoutes)
  server.all('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000, () => {
    console.log(`Mercury running in port ${process.env.PORT || 3000}`)
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
