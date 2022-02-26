require('dotenv').config()

const server = require('./api/server')

const {PORT} = require('./config')

server.listen(port, () => {
  console.log('listening on PORT :' + PORT)
})
