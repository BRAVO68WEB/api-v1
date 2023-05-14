import ipLookup from '../../services/geoIp'

export const index = async (req, res, next) => {
    // console.log(req.query.ip)
    if (req.query.ip == null) {
        if (req.ip == '127.0.0.1') {
            res.json({
                error: {
                    message: 'No ip provided',
                },
                data: {
                    city: '',
                    continent: '',
                    country: '',
                    latitude: 0,
                    longitude: 0,
                    postal: '',
                    region: '',
                },
            })
        } else {
            ipLookup(req.ip, res)
        }
    } else {
        ipLookup(req.query.ip, res)
    }
    // await ipLookup(req.query.ip).then((data) => {
    //     console.log(data)
    //     // res.status(200).json(data)
    // })
}
