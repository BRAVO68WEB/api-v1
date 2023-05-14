import { Router } from 'express'
import { feeds, profile } from './controller'

const router = new Router()

/**
 * @api {get} /instagram/:id Retrieve instagram
 * @apiName RetrieveInstagram
 * @apiGroup Instagram
 * @apiSuccess {Object} instagram Instagram's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Instagram not found.
 */
router.get('/postFeeds', feeds)
router.get('/profile', profile)
export default router
