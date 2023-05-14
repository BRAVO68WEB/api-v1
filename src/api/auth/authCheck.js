import adminCred from '../../services/adminCreds'
import { apiAuth } from '.'

export const authCheck = async (req, res, next) => {
    let adminCredKeys = adminCred()
    console.log(req.headers)
    if (
        req.headers.admin == null ||
        req.headers.admin == undefined ||
        !req.headers.admin == 'true'
    ) {
        if (!req.headers.email || !req.headers.apikey) {
            res.status(403).json({
                error: 'Forbidden',
            })
            return
        }
        await apiAuth
            .findOne({ email: req.headers.email })
            .then((user) => {
                // console.log(user)
                if (user == null) {
                    res.status(403).json({
                        error: 'User not found',
                    })
                } else if (user.apiKey == req.headers.apikey) {
                    if (!user.isVerified) {
                        return res.status(401).json({
                            error: 'Your email is not verified !!',
                        })
                    } else if (!user.active) {
                        return res.status(401).json({
                            error: 'Your account is not activated !!',
                        })
                    }
                    next()
                } else {
                    res.status(401).json({
                        error: 'Invalid API Key or Email mismatch',
                    })
                }
            })
            .catch(function (error) {
                res.status(401).json({
                    error: 'Invalid API Key or Email mismatch 2',
                    message: error.message,
                })
            })
    } else {
        if (
            req.headers.adminkey == adminCredKeys.adminkey &&
            req.headers.adminsecret == adminCredKeys.adminsecret
        ) {
            console.log('Admin Key is valid')
            next()
            return
        } else {
            console.log('Someone Tried to access')
            res.status(401).json({ error: 'Sus!!' })
        }
    }
}
