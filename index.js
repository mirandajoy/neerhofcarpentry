const path = require('path')
const express = require('express')
const app = express()
const sendGrid = require('sendgrid')(process.env.SENDGRID_API_KEY)
const sendGridHelper = require('sendgrid').mail;
const bodyParser = require('body-parser')

const TO_EMAIL = 'rchrdschfr@gmail.com'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.post('/send-email', function(req, res) {
  const { from, name, message } = req.body

  const fromEmail = new sendGridHelper.Email(from)
  const toEmail = new sendGridHelper.Email(TO_EMAIL)
  const subject = `New message on neerhofcarpentry.com from ${name}`
  const content = new sendGridHelper.Content('text/plain', message)
  const mail = new sendGridHelper.Mail(fromEmail, subject, toEmail, content)

  sendGrid.API(sendGrid.emptyRequest({
    method: 'POST', path: '/v3/mail/send', body: mail.toJSON()
  }), function (error, response) {
    if (error) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  })
})

app.listen(process.env.PORT, function () {
  console.log('Listening on port 3000!')
})
