import { Router } from 'express'
import { current, top, loved, user } from './controller'

const router = new Router()

/**
 * @api {get} /lastfm/:id Retrieve lastfm
 * @apiName RetrieveLastfm
 * @apiGroup Lastfm
 * @apiSuccess {Object} lastfm Lastfm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Lastfm not found.
 */
router.get('/current', current)
router.get('/top', top)
router.get('/loved', loved)
router.get('/user', user)

export default router
