let axios = require('axios')

export const profile = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/csgo/standard/profile/steam/76561198812704143?forceCollect=true',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const maps = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/csgo/standard/profile/steam/76561198812704143/segments/map',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const weapons = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/csgo/standard/profile/steam/76561198812704143/segments/weapon',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
