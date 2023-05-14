import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghijfklmnmopqrstuvwxyz', 20)
import AdminCredTemplate from './postEmail'
import chalk from 'chalk'

let aws = require('aws-sdk')
const ses = new aws.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
})

let adminCred = {}

adminCred.adminkey = nanoid()
adminCred.adminsecret = Buffer.from(adminCred.adminkey).toString('base64')

let body = adminCred

if (process.env.NODE_ENV === 'production') {
    let params = {
        // send to list
        Destination: {
            ToAddresses: ['bravo68web@gmail.com'],
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: AdminCredTemplate(body),
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: 'Hey, this email contains sensitive information. Please do not share it with anyone.',
                },
            },

            Subject: {
                Charset: 'UTF-8',
                Data: '-| Admin Credentials |-',
            },
        },
        Source: 'BRAVO68WEB API v2 <admin@b68dev.xyz>',
        ReplyToAddresses: ['admin@b68dev.xyz'],
    }
    ses.sendEmail(params, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent!')
        }
    })
} else {
    console.log(chalk.bold.blue('------------------------------------'))
    console.log(chalk.bold.green('API admin : ' + adminCred.adminkey))
    console.log(chalk.bold.red('API secret : ' + adminCred.adminsecret))
    console.log(chalk.bold.blue('------------------------------------'))
}

export default () => {
    return adminCred
}
