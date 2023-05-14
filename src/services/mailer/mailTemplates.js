const config = require('../../../package.json')

const registerMail = (url, token) => `<h2>Verify your SignUp</h2>
  \n
  \n <p>Verification Link : - <b><a href="${url}/${token}">Click Here</a></b></p>
  \n
  \n Bravo68web API v${config.version}`

const otpMail = (otp) => `<h2>OTP to login to Bravo68web CLI</h2>
  \n
  \n <p>OTP : - <b>${otp}</b></p>
  \n
  \n Bravo68web API v${config.version}`

export { registerMail,otpMail }
