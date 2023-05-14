import { success, notFound } from '../../services/response/'
import { apiAuth } from '.'
import { v4 as uuidv4 } from 'uuid'
import sendVerifyEmail from '../../services/mailer/register'
import sendOtpEmail from '../../services/mailer/loginWithOtp'

const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) => {
    return apiAuth
        .find(query, select, cursor)
        .then((apiAuths) => apiAuths.map((apiAuth) => apiAuth.view()))
        .then(success(res))
        .catch(next)
}

export const retriveByEmail = ({ params }, res, next) => {
    return apiAuth
        .findOne({ email: params.email })
        .then((apiAuth) => apiAuth.view())
        .then(success(res))
        .catch(next)
}

export const regenerateAPIKey = ({ params }, res, next) => {
    const apiKey = uuidv4()
    return apiAuth
        .findOneAndUpdate({ email: params.email }, { apiKey })
        .then((apiAuth) => apiAuth.view())
        .then(success(res))
        .catch(next)
}

export const showAll = ({ params }, res, next) => {
    apiAuth.find({}).then(notFound(res)).then(success(res)).catch(next)
}

export const showOne = ({ params }, res, next) => {
    apiAuth
        .findById(params.id)
        .then(notFound(res))
        .then(success(res))
        .catch(next)
}

export const verifyConfToken = (req, res, next) => {
    apiAuth
        .findOneAndUpdate(
            {
                emailToken: req.params.emailToken,
            },
            {
                isVerified: true,
                emailToken: null,
            }
        )
        .then((data) => {
            if (data) res.send({
                message: "Your email is verified",
                apikey: data.apiKey
            })
            else res.send('Hmmm ........... Sus')
        })
}

export const loginWithOtp = (req,res,next) => {
    apiAuth
        .findOne({email: req.params.email})
        .then((data) => {
            if (data) {
                if (data.isVerified){
                    data.loginOtp = Math.floor(Math.random()*(999-100+1)+100) + '-' + Math.floor(Math.random()*(999-100+1)+100);
                    data.save()
                    sendOtpEmail(req.params.email, data.loginOtp)
                    res.send("Login OTP was send")
                }
                else {
                    res.send('Your email is not verified')
                }
            }
            else res.send('Hmmm ........... Sus')
        })
}

export const verifyLoginWithOtp = (req,res,next) => {
    console.log(req.body.otp)
    apiAuth
        .findOne({loginOtp: req.body.otp})
        .then((data) => {
            if(data) {
                res.json({
                    email: data.email,
                    apiKey: data.apiKey
                })
            }
            else {
                res.send("Hmmm ................ Sus")
            }
        })

}

export const create = (req, res, next) => {
    return apiAuth
        .findOne({ email: req.query.email })
        .then((result) => {
            if (result) {
                return res
                    .status(409)
                    .json({ error: 'Email already in use !!' })
            } else {
                let apiKey = uuidv4()
                if (req.query.email) {
                    if (validateEmail(req.query.email)) {
                        let confToken = apiAuth.genConfToken()
                        let reqUrl = req.protocol + '://' + req.get('host') + '/api/auth/verify'
                        sendVerifyEmail(req.query.email, reqUrl, confToken)
                        return apiAuth
                            .create({
                                email: req.query.email,
                                apiKey: apiKey,
                                emailToken: confToken,
                            })
                            .then((apiAuth) => {
                                apiAuth.view(true)
                            })
                            .then(
                                res.status(201).json({
                                    email: req.query.email,
                                    message:
                                        'Check your mail for Verification Link',
                                })
                            )
                            .catch()
                    } else {
                        return res.status(400).json({
                            error: 'Invalid email Address',
                        })
                    }
                } else {
                    return res.status(401).json({
                        error: 'No Email passed for registration !!',
                    })
                }
            }
        })
        .then(success(res))
        .catch(next)
}

export const create2 = (req, res, next) => {
    apiAuth
        .findOne({ email: req.body.email })
        .then((result) => {
            if (result) {
                return res
                    .status(409)
                    .json({ error: 'Email already in use !!' })
            } else {
                let apiKey = uuidv4()
                if (req.body.email) {
                    if (validateEmail(req.body.email)) {
                        return apiAuth
                            .create({ email: req.body.email, apiKey: apiKey })
                            .then(
                                res.status(201).json({
                                    email: req.body.email,
                                    apiKey: apiKey,
                                })
                            )
                            .catch()
                    } else {
                        return res.status(400).json({
                            error: 'Invalid email Address',
                        })
                    }
                } else {
                    return res.status(401).json({
                        error: 'No Email passed for registration !!',
                    })
                }
            }
        })
        .then(success(res))
        .catch(next)
}

export const validate = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then(notFound(res))
        .then((user) => {
            console.log(user)
            if (user && user.apiKey === params.apiKey && user.isVerified) {
                res.sendStatus(200)
                next()
            } else {
                res.sendStatus(403)
                next()
            }
        })
        .catch(next)
}

export const activate = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then(notFound(res))
        .then((user) => {
            if (user) {
                user.active = true
                user.save()
                res.sendStatus(200)
                next()
            } else {
                res.sendStatus(403)
                next()
            }
        })
        .catch(next)
}

export const deactivate = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then(notFound(res))
        .then((user) => {
            if (user) {
                user.active = false
                user.save()
                res.sendStatus(200)
                next()
            } else {
                res.sendStatus(403)
                next()
            }
        })
        .catch(next)
}

export const whois = (req, res, next) => {
    apiAuth
        .findOne({ email: req.headers.email })
        .then(notFound(res))
        .then((user) => {
            if (user) {
                res.send(user)
                next()
            } else {
                res.sendStatus(403)
                next()
            }
        })
        .catch(next)
}

export const promoteUserAccess = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then((user) => {
            // console.log(user)
            if (user.accessType === 'entry') {
                user.accessType = 'preliminary'
                next()
            } else if (user.accessType === 'preliminary') {
                user.accessType = 'intermediate'
                next()
            } else if (user.accessType === 'intermediate') {
                user.accessType = 'admin'
                next()
            } else if (user.accessType === 'admin') {
                user.accessType = 'superadmin'
                next()
            }
            user.save()
            res.send(user)
        })
        .then(success(res))
        .catch(next)
}

export const demoteUserAccess = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then((user) => {
            // console.log(user)
            if (user.accessType === 'preliminary') {
                user.accessType = 'entry'
                next()
            } else if (user.accessType === 'intermediate') {
                user.accessType = 'preliminary'
                next()
            } else if (user.accessType === 'admin') {
                user.accessType = 'intermediate'
                next()
            } else if (user.accessType === 'superadmin') {
                user.accessType = 'admin'
                next()
            }
            user.save()
            res.send(user)
        })
        .then(success(res))
        .catch(next)
}

export const demoteUserRole = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then((user) => {
            // console.log(user)
            if (user.role === 'pro') {
                user.role = 'user'
                next()
            } else if (user.role === 'family') {
                user.role = 'pro'
                next()
            } else if (user.role === 'friend') {
                user.role = 'family'
                next()
            } else if (user.role === 'co-owner') {
                user.role = 'friend'
                next()
            } else if (user.role === 'owner') {
                user.role = 'co-owner'
                next()
            }
            user.save()
            res.send(user)
        })
        .then(success(res))
        .catch(next)
}

export const promoteUserRole = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then((user) => {
            // console.log(user)
            if (user.role === 'user') {
                user.role = 'pro'
                next()
            } else if (user.role === 'pro') {
                user.role = 'family'
                next()
            } else if (user.role === 'family') {
                user.role = 'friend'
                next()
            } else if (user.role === 'friend') {
                user.role = 'co-owner'
                next()
            } else if (user.role === 'co-owner') {
                user.role = 'owner'
                next()
            }
            user.save()
            res.send(user)
        })
        .then(success(res))
        .catch(next)
}

export const checkIfExist = ({ params }, res, next) => {
    apiAuth
        .findOne({ email: params.email })
        .then(notFound(res))
        .then((user) => {
            if (user) {
                res.sendStatus(200)
                next()
            } else {
                res.sendStatus(403)
                next()
            }
        })
        .catch(next)
}

export const resendVerifyToken = (req, res, next) => {
    apiAuth
        .findOne({ email: req.query.email })
        .then((user) => {
            // console.log(user)
            if (!user.isVerified) {
                sendVerifyEmail(req.query.email, user.emailToken)
                res.send("Verification email resend")
            } else {
                console.log("Hmmmm")
                res.send("Account is already verified")
            }
        })
        .then(success(res))
        .catch(next)
    
}
