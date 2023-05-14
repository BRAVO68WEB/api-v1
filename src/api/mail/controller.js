import adminCred from '../../services/adminCreds'
import axios from 'axios'

let adminCreds = adminCred()

let aws = require('aws-sdk')
const ses = new aws.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
})

import sendAPICredsTemplate from '../../services/emailTemplates/sendAPICredsTemplate'

export const recieve = ({ body }, res, next) => {
    console.log(body)
    res.status(200).json({})
}

if (process.env.NODE_ENV === 'production') {
    let APIurl = 'https://api.b68dev.xyz/api/auth'
} else {
    let APIurl = 'http://localhost:9000/api/auth'
}

export const activateAccount = ({ body }, res, next) => {
    console.log('activateAccount Called')
    axios.get(`${APIurl}/activate/${body.email}`, {
        headers: {
            adminkey: adminCreds.adminkey,
            adminsecret: adminCreds.adminsecret,
        },
    })
    res.status(200).json({})
}

export const deactivateAccount = ({ body }, res, next) => {
    axios.get(`${APIurl}/deactivate/${body.email}`, {
        headers: {
            adminkey: adminCreds.adminkey,
            adminsecret: adminCreds.adminsecret,
        },
    })
    console.log('deactivateAccount Called')
    res.status(200).json({})
}

export const resetAPIKey = ({ body }, res, next) => {
    axios.get(`${APIurl}/users/reset/${body.email}`, {
        headers: {
            adminkey: adminCreds.adminkey,
            adminsecret: adminCreds.adminsecret,
        },
    })
    console.log('resetAPIKey Called')
    res.status(200).json({})
}

export const showAPIKey = ({ body }, res, next) => {
    axios
        .get(`${APIurl}/users/get/${body.email}`, {
            headers: {
                adminkey: adminCreds.adminkey,
                adminsecret: adminCreds.adminsecret,
            },
        })
        .then((user) => {
            // console.log(user.data);
            let params = {
                // send to list
                Destination: {
                    ToAddresses: [`${user.data.email}`],
                },
                Message: {
                    Body: {
                        Html: {
                            Charset: 'UTF-8',
                            Data: sendAPICredsTemplate(user.data),
                        },
                        Text: {
                            Charset: 'UTF-8',
                            Data: 'Hey, this is your apiKey.',
                        },
                    },

                    Subject: {
                        Charset: 'UTF-8',
                        Data: 'Your API Key for Bravo68web API',
                    },
                },
                Source: 'BRAVO68WEB API v2 <admin@b68dev.xyz>', // must relate to verified SES account
                ReplyToAddresses: ['admin@b68dev.xyz'],
            }
            ses.sendEmail(params, (err, data) => {
                if (err) {
                    res.send('Error')
                    console.log(err)
                } else {
                    res.send('Done')
                    console.log(data)
                }
            })
        })
    console.log('showAPIKey Called')
}

export const webhookError = ({ body }, res, next) => {
    console.log('webhookError Called')
    res.status(200).json({})
}
