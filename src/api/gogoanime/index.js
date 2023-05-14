import { Router } from 'express'
import {
    show,
    popular,
    details,
    // detailsHTML,
    search,
    episode_link,
    videoLinkExtractor,
    // genre,
    // recently_added,
    // anime_list,
    // genrelist,
    // season,
    // anime_aplha_list,
} from './controller'

const router = new Router()

/**
 * @api {get} /gogoanime/:id Retrieve gogoanime
 * @apiName RetrieveGogoanime
 * @apiGroup Gogoanime
 * @apiSuccess {Object} gogoanime Gogoanime's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gogoanime not found.
 */
router.get('/', show)
router.get('/popular/:page', popular)
router.get('/details/:id', details)
// router.get('/details/:id/web', detailsHTML)
router.get('/search/:word/:page', search)
router.get('/episode_link/:id/:episode', episode_link)
router.get('/proxy', videoLinkExtractor)
// router.get('/genre/:type/:page', genre)
// router.get('/recently_added/:page', recently_added)
// router.get('/anime_list/:page', anime_list)
// router.get('/genrelist', genrelist)
// router.get('/season/:season/:page', season)
// router.get('/list/:variable/:page', anime_aplha_list)

export default router
