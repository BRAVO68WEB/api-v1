import { Router } from 'express'
import {
    getVideobyId,
    getChannelbyId,
    getPlaylistbyId,
    getPlayListsItemsById,
    convertSpotifyToYoutube,
    convertSpotifyToYoutubeRedirect,
    trackGet,
} from './controller'

const router = new Router()

/**
 * @api {get} /yt/:id Retrieve youtube
 * @apiName RetrieveYoutube
 * @apiGroup Youtube
 * @apiSuccess {Object} youtube Youtube's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Youtube not found.
 */
router.get('/video/:urlId', getVideobyId)
router.get('/channel/:channelId', getChannelbyId)
router.get('/playlist/:playlistId', getPlaylistbyId)
router.get('/playlist/:playlistId/items', getPlayListsItemsById)
router.get('/convertSpotify/:trackURI', convertSpotifyToYoutube)
router.get('/convertSpotify/:trackURI/open', convertSpotifyToYoutubeRedirect)

export default router
