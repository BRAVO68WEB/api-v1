const maxmind = require('maxmind')
import { exists } from 'fs'

export default async (ip, res) => {
    // console.log(ip)
    const path = 'GeoLite2-City.mmdb'
    await exists(path, (ne) => {
        if (ne) {
            maxmind.open('GeoLite2-City.mmdb').then((lookup) => {
                const data = lookup.get(ip)
                res.json(data)
                // return data
            })
        } else {
            res.send({
                city: '',
                continent: '',
                country: '',
                latitude: 0,
                longitude: 0,
                postal: '',
                region: '',
            })
        }
    })
}
