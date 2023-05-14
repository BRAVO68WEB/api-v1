let axios = require('axios')
let path = require('path')
let options = {
    root: path.join(__dirname),
}

let fileName = 'index.html'
let fileName2 = 'assets/style.css'

export const activity = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.lanyard.rest/v1/users/457039372009865226',
    }

    axios(config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const banner = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://lanyard-profile-readme.vercel.app/api/457039372009865226',
    }

    axios(config)
        .then(function (response) {
            res.status(200)
                .setHeader('content-type', 'image/svg+xml; charset=utf-8')
                .send(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const home = ({ params }, res, next) => {
    res.status(200).sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Webpage Sent')
        }
    })
}

export const stylesheet = ({ params }, res, next) => {
    res.status(200).sendFile(fileName2, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Stylesheet Sent')
        }
    })
}
