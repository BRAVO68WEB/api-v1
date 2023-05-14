import axios from 'axios'

export const statusServer = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://mcapi.us/server/status?ip=${params.server}`,
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const statusIP = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://mcapi.us/server/status?ip=${params.ip}&port=${params.port}`,
    }
    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const serverBanner = async ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://mcapi.us/server/image?ip=MC.HYPIXEL.NET',
    }

    res.json({
        error: 'Work in progress !!!',
    })
}
