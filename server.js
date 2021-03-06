const express = require('express')
const basicAuth = require('express-basic-auth')
const Gpio = require('onoff').Gpio
var MjpegProxy = require('mjpeg-proxy').MjpegProxy
const port = 80



const app = express()

app.use(basicAuth({
  users: { admin: 'feeder' },
  challenge: true
}))


app.use(express.static('public'))

const feedPin = new Gpio(17, 'out')
feedPin.writeSync(1)


app.get('/tank.jpg', new MjpegProxy('http://192.168.2.123:8040/?action=stream').proxyRequest);

app.get('/', function (req, res) {
  return res.redirect('index.html')
})

app.post('/feed', function (req, res) {
  feedPin.writeSync(0)

  setTimeout(() => {
    feedPin.writeSync(1)

  }, 100)

  return res.redirect('feeded.html')
})

app.listen(port, function () {
  console.log(`feeder listening port ${port}`)
})