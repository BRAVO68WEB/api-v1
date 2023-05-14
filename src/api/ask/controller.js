let axios = require('axios')

export const show = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: `https://api.wolframalpha.com/v1/result?i=${params.q}&appid=${process.env.WOLFRAM_ALPHA_APPID}&timeout=200`,
        headers: {},
    }

    axios(config)
        .then(function (response) {
            res.status(200).json({ result: response.data })
            // console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error)
        })
}
