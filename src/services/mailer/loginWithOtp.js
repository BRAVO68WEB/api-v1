import nodemailer from 'nodemailer'
import { otpMail } from './mailTemplates'

let transporter = nodemailer.createTransport({
    host: `${process.env.MAIL_HOST}`,
    port: 587,
    secure: false,
    auth: {
        user: `${process.env.MAIL_USER}`,
        pass: `${process.env.MAIL_PASSWORD}`,
    },
})

export default function (email, otp) {
    let mailOptions = {
        from: `Bravo68Web API <${process.env.MAIL_FROM_EMAIL}>`,
        to: email,
        subject: `[B68-API] Login to BRAVO68WEB API`,
        html: otpMail(otp),
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
