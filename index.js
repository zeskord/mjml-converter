const fs = require('fs')
const express = require('express')
const bodyParser = require("body-parser")
const mjml2html = require('mjml')
const https  = require('https')

const app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, (req, res) => {
  var text = req.body.mjml;
  const htmlOutput = mjml2html(text)
  res.send(htmlOutput.html)
})

// Если не используется SSL, раскомментировать строку ниже.
// app.listen(3000)

// Если не используется SSL, закомментировать строки ниже.
const options = {
  cert: fs.readFileSync('./ssl/cert.pem', "utf8"),
  key: fs.readFileSync('./ssl/key.pem', "utf8"),
  passphrase: fs.readFileSync('./ssl/passphrase.txt', "utf8")
}
https.createServer(options, app).listen(8443);