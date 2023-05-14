let axios = require('axios')

export const getRecentTweets = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.twitter.com/2/users/959990126687342595/tweets?max_results=100',
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
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
export const getAllFollowers = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.twitter.com/2/users/959990126687342595/followers?user.fields=created_at&expansions=pinned_tweet_id&tweet.fields=created_at',
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
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
export const getAllFollowing = ({ params }, res, next) => {
    let config = {
        method: 'get',
        url: 'https://api.twitter.com/2/users/959990126687342595/following?user.fields=created_at&expansions=pinned_tweet_id&tweet.fields=created_at',
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
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

export const getProfile = (req, res) => {
    let config = {
        method: 'GET',
        url: 'https://api.twitter.com/1.1/users/show.json?screen_name=bravo68web',
        headers: {
            Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
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
