const config = require('../../../package.json')

const AdminCredTemplate = (body) => `<h2>Admin Creds for Bravo68web API</h2>
  \n <h2>Admin Creds : - </h2>
  \n
  \n <p>Admin Key : - <b>${body.adminkey}</b></p>
  \n <p>Admin Secret : - <b>${body.adminsecret}</b></p>
  \n
  \n Bravo68web API v${config.version}`

export default AdminCredTemplate
