const config = require('../../../../package.json')

const Querytemplate = (body) => `<h2>Message from Bravo68web API</h2>
  \n <h4>From Name ${body.senderName} regarding ${body.topic}</h4>
  \n
  \n His/Her Message : - <b>${body.message}</b>
  \n
  \n <p>Bravo68web API v${config.version}</p>`

export default Querytemplate
