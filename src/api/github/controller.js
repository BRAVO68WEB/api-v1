// userdata, myorgs, repos
let axios = require('axios')

export const userdata = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.github.com/users/bravo68web',
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

export const myorgs = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.github.com/users/bravo68web/orgs',
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
export const repos = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.github.com/users/bravo68web/repos',
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
export const trophy = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://github-profile-trophy.vercel.app/?username=bravo68web&theme=discord&column=3&row=2',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200)
                .setHeader('content-type', 'image/svg+xml; charset=utf-8')
                .send(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const topLang = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://github-readme-stats.vercel.app/api/top-langs?username=bravo68web&show_icons=true&locale=en&layout=compact&theme=slateorange',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200)
                .setHeader('content-type', 'image/svg+xml; charset=utf-8')
                .send(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}
export const stats = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://github-readme-stats.vercel.app/api?username=bravo68web&show_icons=true&locale=en&theme=vision-friendly-dark',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200)
                .setHeader('content-type', 'image/svg+xml; charset=utf-8')
                .send(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const streaks = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://github-readme-streak-stats.herokuapp.com/?user=bravo68web&theme=vue-dark',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200)
                .setHeader('content-type', 'image/svg+xml; charset=utf-8')
                .send(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const wakatime = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://github-readme-stats.vercel.app/api/wakatime?username=Bravo68web&theme=onedark',
    }

    axios(config)
        .then(function (response) {
            // console.log(JSON.stringify(response.data));
            res.status(200)
                .setHeader('content-type', 'image/svg+xml; charset=utf-8')
                .send(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const userEvent = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.github.com/users/bravo68web/events?page=1&per_page=5',
        headers: {
            Authorization: 'token ' + process.env.GH_PAT_TOKEN,
        },
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
