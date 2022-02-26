require('dotenv').config()

const server = require('./api/server')

const {PORT} = re

server.listen(port, () => {
  console.log('listening on PORT :' + PORT)
})
