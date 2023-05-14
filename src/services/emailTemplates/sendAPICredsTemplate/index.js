const config = require('../../../../package.json')

const sendAPICredsTemplate = (body) => `<h2>Message from Bravo68web API</h2>
  \n <h3>Your API Key for Bravo68web API</h3>
  \n
  \n Email : - <b>${body.email}</b>
  \n
  \n API Key : - <b>${body.apiKey}</b>
  \n
  \n <p>Bravo68web API v${config.version}</p>`

export default sendAPICredsTemplate
