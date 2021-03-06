require("dotenv").config()

exports.handler = (event, _context, callback) => {
  const mailgun = require("mailgun-js")
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  })

  const data = JSON.parse(event.body)

  const email = {
    from: "Play Marin<Jeremysmithseo@gmail.com>",
    to: `${data.name} <${data.email}>`,
  }

  mg.messages().send(email, (error, response) => {
    callback(error, {
      statusCode: 200,
      body: JSON.stringify(response),
    })
  })
}
