let axios = require('axios')

export const profile = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/rocket-league/standard/profile/epic/Bravo%2068%20web?forceCollect=true',
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

export const playerHistory = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v1/rocket-league/player-history/overview/21892069',
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
export const playerHistoryRating = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v1/rocket-league/player-history/mmr/21892069',
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
