let axios = require('axios')
import spotifyAccessToken from '../../services/spotifyTokenGen/index'
export const getMyTopSongs = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/top/tracks',
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }

    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const getMyfollowing = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/following?type=artist',
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }

    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const getMyLibrary = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/tracks',
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }

    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const getProfile = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me',
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const getMyPlaylists = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const getmyRecentPlays = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/player/recently-played?limit=20',
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const getCurrentlyPlaying = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.spotify.com/v1/me/player/currently-playing?market=IN',
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const callbackURI = (req, res, next) => {
    res.send({ authorization_key: `${req.query.code}` })
}

export const getTrack = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://api.spotify.com/v1/tracks/${params.query}`,
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json({ name: response.data })
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const searchTrack = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${params.query}&type=track`,
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const searchArtist = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${params.query}&type=artist`,
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const getArtist = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://api.spotify.com/v1/artists/${params.query}`,
        headers: {
            Authorization: `Bearer ${spotifyAccessToken()}`,
        },
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
