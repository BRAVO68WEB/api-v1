let axios = require('axios')
let instagramAPI = require('user-instagram')

export const feeds = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://v1.nocodeapi.com/bravo68web/instagram/xeFeJYFgrmtHrQno',
        headers: {},
    }

    axios(config)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const profile = async ({ params }, res, next) => {
    await instagramAPI.authenticate('bravo68web', '5Ls4bHWuje86FC')

    // let config = {
    //     method: 'get',
    //     url: 'https://www.instagram.com/bravo68web/?__a=1',
    //     headers: {
    //         Cookie: process.env.INSTAGRAM_COOKIE,
    //     },
    // }

    // axios(config)
    //     .then(function (response) {
    //         res.json(response.data)
    //     })
    //     .catch(function (error) {
    //         console.log(error)
    //     }
    // )

    await instagramAPI.getUserData('bravo68web').then((data) => res.json(data))
}
