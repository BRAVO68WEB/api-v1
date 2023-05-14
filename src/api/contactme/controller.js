import nodemailer from 'nodemailer'
import Querytemplate from '../../services/emailTemplates/postQuery'

let aws = require('aws-sdk')
const ses = new aws.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
})

export const postQuery = ({ bodymen: { body } }, res, next) => {
    let transporter = nodemailer.createTransport({
        host: `${process.env.MAIL_HOST}`,
        port: 587,
        secure: false,
        auth: {
            user: `${process.env.MAIL_USER}`,
            pass: `${process.env.MAIL_PASSWORD}`,
        },
    })

    let mailOptions = {
        from: `Bravo68Web Contact Form <${process.env.MAIL_FROM_EMAIL}>`,
        to: `${process.env.MAIL_RECV_EMAIL}`,
        subject: `[API] Message from ${body.senderName}`,
        replyTo: `${body.email}`,
        html: Querytemplate(body),
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response)
            return res.status(200).json({
                message: 'Query sent successfully',
            })
        }
    })
}

export const postQueryAws = ({ bodymen: { body } }, res, next) => {
    // Give SES the details and let it construct the message for you.
    let params = {
        // send to list
        Destination: {
            ToAddresses: ['bravo68web@gmail.com'],
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: Querytemplate(body),
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: 'Hey, this is Contact Page.',
                },
            },

            Subject: {
                Charset: 'UTF-8',
                Data: `[API] Message from ${body.senderName}`,
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
}
