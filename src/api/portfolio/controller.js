import axios from 'axios'
let reqMaintainer = () => {
    if (process.env.NODE_ENV !== 'production') {
        let requestURL = 'http://localhost:9000'
        return requestURL
    } else {
        let requestURL = 'http://localhost:8080'
        return requestURL
    }
}

export const show = async ({ params }, res, next) => {
    let apiData = {}
    // let requestURL = 'http://localhost:9000'
    // GitHub Stats API
    let config_gh_user = {
        method: `get`,
        url: `${reqMaintainer()}/me/github/userdata`,
        headers: {},
    }

    let gh_promise_user = axios(config_gh_user)
        .then(function (response) {
            apiData.gh_user = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
    // WakaTime Stats API
    let config_wt_user = {
        method: `get`,
        url: `${reqMaintainer()}/me/wakatime/me`,
        headers: {},
    }

    let wakatime_promise_user = axios(config_wt_user)
        .then(function (response) {
            apiData.wt_user = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
    // WakaTime Stats API
    let config_wt_stats = {
        method: `get`,
        url: `${reqMaintainer()}/me/wakatime/stats`,
        headers: {},
    }
    let wakatime_promise_stats = axios(config_wt_stats)
        .then(function (response) {
            apiData.wt_stats = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
    // Spotify Top Songs API
    let config_spotify_top_songs = {
        method: `get`,
        url: `${reqMaintainer()}/me/spotify/myTopSongs`,
        headers: {},
    }
    let spotify_promise_top_songs = axios(config_spotify_top_songs)
        .then(function (response) {
            apiData.spotify_top_songs = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
    // Hahnode Stats API
    let config_hn_user = {
        method: `post`,
        url: `https://api.hashnode.com/`,
        data: {
            query: `
            {
                user(username: "bravo68web"){
                  username
                  name
                  tagline
                  numReactions
                  dateJoined
                  socialMedia {
                    twitter
                    github
                    stackoverflow
                    linkedin
                    website
                    facebook
                  }
                  numPosts
                  numFollowing
                  numFollowers
                  location
                  photo
                  coverImage
                  publicationDomain
                  blogHandle
                }
              }
            `,
        },
        headers: {},
    }
    let hn_promise_user = axios(config_hn_user)
        .then(function (response) {
            // console.log(response.data)
            apiData.hn_user = response.data
        })
        .catch(function (error) {
            console.log(error)
        })

    // Discord Activity API
    let config_discord_activity = {
        method: `get`,
        url: `${reqMaintainer()}/me/discord/activity`,
        headers: {},
    }

    let discord_promise_activity = axios(config_discord_activity)
        .then(function (response) {
            apiData.discord_activity = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
    let config_osu_recent = {
        method: `get`,
        url: `${reqMaintainer()}/me/osu/recent`,
        headers: {},
    }

    let osu_promise_recent = axios(config_osu_recent)
        .then(function (response) {
            apiData.osu_recent = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
    let config_osu_user = {
        method: `get`,
        url: `${reqMaintainer()}/me/osu/user`,
        headers: {},
    }

    let osu_promise_user = axios(config_osu_user)
        .then(function (response) {
            apiData.osu_user = response.data
        })
        .catch(function (error) {
            console.log(error)
        })
    let config_osu_bestScores = {
        method: `get`,
        url: `${reqMaintainer()}/me/osu/bestScores`,
        headers: {},
    }

    let osu_promise_bestScores = axios(config_osu_bestScores)
        .then(function (response) {
            apiData.osu_bestScores = response.data
        })
        .catch(function (error) {
            console.log(error)
        })

    let config_twitter_user = {
        method: `get`,
        url: `${reqMaintainer()}/me/twitter/me`,
        headers: {},
    }
    let twitter_promise_user = axios(config_twitter_user)
        .then(function (response) {
            apiData.twitter_user = response.data
        })
        .catch(function (error) {
            console.log(error)
        })

    let config_twitter_tweets = {
        method: `get`,
        url: `${reqMaintainer()}/me/twitter/recentTweets`,
        headers: {},
    }

    let twitter_promise_tweets = axios(config_twitter_tweets)
        .then(function (response) {
            apiData.twitter_tweets = response.data
        })
        .catch(function (error) {
            console.log(error)
        })

    let icons = {
        osu: `https://www.pngkit.com/png/full/345-3451155_osu-logo.png`,
        github: `https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png`,
        spotify: `https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png`,
        hashnode: `https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png?auto=compress`,
        discord: `https://www.freepnglogos.com/uploads/discord-logo-png/anthrocon-twitter-quot-discord-user-wanna-21.png`,
        wakatime: `https://brandeps.com/logo-download/W/WakaTime-logo-vector-01.svg`,
    }
    apiData.logo = icons

    await Promise.all([
        // logo_promise,
        gh_promise_user,
        discord_promise_activity,
        osu_promise_recent,
        osu_promise_user,
        osu_promise_bestScores,
        spotify_promise_top_songs,
        wakatime_promise_user,
        wakatime_promise_stats,
        hn_promise_user,
        twitter_promise_user,
        twitter_promise_tweets,
    ])
    res.status(200).json(apiData)
}
