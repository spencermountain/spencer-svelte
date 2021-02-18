const connect = require('connect')
const statc = require('serve-static')
const livereload = require('livereload')
const server = connect()
const port = 5000

const startServer = function (abs) {
  server.use(statc(abs))
  server.use(
    require('connect-livereload')({
      port: 35729,
    })
  )
  server.listen(port)
  console.log(`\nhttp://localhost:${port}`)
  var lrserver = livereload.createServer()
  lrserver.watch(abs + '/**')
}
module.exports = startServer
