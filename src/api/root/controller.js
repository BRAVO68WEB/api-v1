let apiPackage = require('../../../package.json')
const axios = require('axios')
let path = require('path')
let options = {
    root: path.join(__dirname),
}

let fileName = 'logo.png'

export const show = (req, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.github.com/repos/BRAVO68WEB/api/commits',
        headers: {
            Authorization: `Basic ${process.env.GITHUB_TOKEN}`,
        },
    }

    axios(config)
        .then(function (response) {
            res.status(200).json({
                name: "Bravo68Web's API",
                created_by: apiPackage.author,
                github: 'https://github.com/bravo68web',
                website: 'https://bravo68web.me/',
                version: apiPackage.version,
                docs: req.protocol + '://' + req.get('host') + `/docs`,
                lastUpdateOn: response.data[0].commit.author.date,
                updateMessage: response.data[0].commit.message,
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const logo = (req, res, next) => {
    let config = {
        method: 'get',
        url: 'https://bravo68web.me/images/logo-resized.jpg',
    }

    axios(config)
        .then(function (response) {
            res.status(200).sendFile(fileName, options, function (err) {
                if (err) {
                    next(err)
                } else {
                    console.log('Logo Sent')
                }
            })
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const socials = (req, res, next) => {
    res.status(200).json({
        portfolio: 'https://bravo68web.me/',
        github: 'https://github.com/bravo68web',
        linkedin: 'https://www.linkedin.com/in/bravo68web/',
        twitter: 'https://twitter.com/bravo68web',
        facebook: 'https://www.facebook.com/bravo68web',
        reddit: 'https://www.reddit.com/u/bravo68web',
        spotify: 'https://open.spotify.com/user/31huoajpuynl4w4dzbhp4frktqw4',
        instagram: 'https://www.instagram.com/bravo68web/',
        youtube: 'https://www.youtube.com/channel/UCoWLnU1_zQIcqAfjITR_-0A',
        steam: 'https://steamcommunity.com/id/bravo68web',
        exophase: 'https://www.exophase.com/user/bravo68web/',
        twitch: 'https://www.twitch.tv/bravo68web',
        discord: 'Bravo68-DF_Techs#6429',
        osu: 'https://osu.ppy.sh/users/15227110',
        blog: 'https://blog.bravo68web.me/',
        gitlab: 'https://gitlab.com/bravo68web',
    })
}
