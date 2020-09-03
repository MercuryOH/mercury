import express from 'express'
import next from 'next'
import models from './models/index'
import apiRoutes from './api/routes'
const server = express()

server.use(express.json())

async function main() {
  server.listen(process.env.PORT || 3000, () => {
    console.log('Mercury Running')
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
