import { Router } from 'express'
import {
    getMyTopSongs,
    getMyfollowing,
    getMyPlaylists,
    getMyLibrary,
    callbackURI,
    getProfile,
    getCurrentlyPlaying,
    getmyRecentPlays,
} from './controller'

const router = new Router()

router.get('/myTopSongs', getMyTopSongs)
router.get('/following', getMyfollowing)
router.get('/myPlaylists', getMyPlaylists)
router.get('/myLibrary', getMyLibrary)
router.get('/me', getProfile)
router.get('/callback', callbackURI)
router.get('/getCurrentlyPlaying', getCurrentlyPlaying)
router.get('/getmyRecentPlays', getmyRecentPlays)

export default router
