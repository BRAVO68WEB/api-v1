import adminCred from '../../services/adminCreds'

export const authCheckAdmin = (req, res, next) => {
    let adminCredKeys = adminCred()
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
