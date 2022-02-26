require('dotenv').config()

const server = require('./api/server')

const {PORT} = process.env.PORT

server.listen(port, () => {
  console.log('listening on PORT :' + PORT)
})
