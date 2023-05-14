let axios = require('axios')

export const current = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Bravo68web&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
    }

    axios(config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const user = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://ws.audioscrobbler.com/2.0/?method=user.getInfo&user=Bravo68web&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
    }

    axios(config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const loved = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://ws.audioscrobbler.com/2.0/?method=user.getLovedTracks&user=Bravo68web&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
    }

    axios(config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const top = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://ws.audioscrobbler.com/2.0/?method=user.getTopTracks&user=Bravo68web&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
    }

    axios(config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
