const YouTube = require('ytube-api')
const youTube = new YouTube()
youTube.setKey(process.env.YT_API_KEY)
import spotifyAccessToken from '../../services/spotifyTokenGen/index'

const SpotifyToYoutube = require('spotify-to-youtube')
const SpotifyWebApi = require('spotify-web-api-node')

const spotifyApi = new SpotifyWebApi()

export const getVideobyId = ({ params }, res, next) => {
    const Ids = [`${params.urlId}`]
    youTube.getById(Ids, (err, response) => {
        if (err) console.log(err)
        res.json(response.items[0])
    })
}

export const getChannelbyId = ({ params }, res, next) => {
    const Ids = [`${params.channelId}`]
    youTube.getChannelById(Ids, (err, response) => {
        if (err) console.log(err)
        res.json(response.items[0])
    })
}

export const getPlaylistbyId = ({ params }, res, next) => {
    const Ids = [`${params.playlistId}`]
    youTube.getPlayListsById(Ids, (err, response) => {
        if (err) console.log(err)
        res.json(response.items[0])
    })
}

export const getPlayListsItemsById = ({ params }, res, next) => {
    const Ids = [`${params.playlistId}`]
    youTube.getPlayListsItemsById(Ids, 50, (err, response) => {
        if (err) console.log(err)
        res.json(response.items)
    })
}

export const convertSpotifyToYoutube = async ({ params }, res, next) => {
    spotifyApi.setAccessToken(`${spotifyAccessToken()}`)

    const spotifyToYoutube = SpotifyToYoutube(spotifyApi)
    const ytEqu = await spotifyToYoutube(`${params.trackURI}`)
    res.json({
        viedoId: ytEqu,
        videoURL: `https://youtu.be/${ytEqu}`,
    })
}

export const convertSpotifyToYoutubeRedirect = async (
    { params },
    res,
    next
) => {
    spotifyApi.setAccessToken(`${spotifyAccessToken()}`)

    const spotifyToYoutube = SpotifyToYoutube(spotifyApi)
    const ytEqu = await spotifyToYoutube(`${params.trackURI}`)
    res.redirect(`https://youtu.be/${ytEqu}`)
}
