let axios = require('axios')

export const show = (req, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.thecatapi.com/v1/images/search',
        headers: {},
    }
    axios(config)
        .then(function (response) {
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
