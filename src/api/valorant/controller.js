let axios = require('axios')

export const profile = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze?forceCollect=true',
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

export const compWeapons = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/weapon?playlist=competitive',
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

export const unratedWeapons = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/weapon?playlist=unrated',
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

export const spikeWeapons = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/weapon?playlist=spikerush',
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

export const deathmatchWeapons = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/weapon?playlist=deathmatch',
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

export const compMaps = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/map?playlist=competitive',
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

export const spikeMaps = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/map?playlist=spikerush',
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

export const unratedMaps = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/map?playlist=unrated',
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

export const deathmatchMaps = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/map?playlist=deathmatch',
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

export const deathmatchAgents = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/agent?playlist=deathmatch',
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

export const unratedAgents = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/agent?playlist=unrated',
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

export const compAgents = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/agent?playlist=competitive',
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

export const spikeAgents = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/DMG%20Bravo68web%23raze/segments/agent?playlist=spikerush',
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

export const spikeTeammates = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v1/valorant/matches/riot/DMG%20Bravo68web%23raze/aggregated?playlist=spikerush',
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

export const compTeammates = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v1/valorant/matches/riot/DMG%20Bravo68web%23raze/aggregated?playlist=compititive',
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

export const unratedTeammates = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v1/valorant/matches/riot/DMG%20Bravo68web%23raze/aggregated?playlist=unrated',
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

export const deathmatchTeammates = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v1/valorant/matches/riot/DMG%20Bravo68web%23raze/aggregated?playlist=deathmatch',
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

export const compMatchs = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/matches/riot/DMG%20Bravo68web%23raze?type=competitive',
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

export const deathmatchMatchs = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/matches/riot/DMG%20Bravo68web%23raze?type=deathmatch',
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

export const spikeMatchs = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/matches/riot/DMG%20Bravo68web%23raze?type=spikerush',
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

export const unratedMatchs = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.tracker.gg/api/v2/valorant/standard/matches/riot/DMG%20Bravo68web%23raze?type=unrated',
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
