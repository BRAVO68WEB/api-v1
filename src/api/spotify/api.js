import { Router } from 'express'
import { getTrack, searchArtist, searchTrack, getArtist } from './controller'

const router = new Router()

router.get('/track/:query', getTrack)
router.get('/search/:query/track', searchTrack)
router.get('/search/:query/artist', searchArtist)
router.get('/artist/:query', getArtist)

export default router
