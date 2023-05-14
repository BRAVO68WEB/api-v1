import { Router } from 'express'
import {
    getRecentTweets,
    getAllFollowers,
    getAllFollowing,
    getProfile,
} from './controller'

const router = new Router()

/**
 * @api {get} /twitter/:id Retrieve twitter
 * @apiName RetrieveTwitter
 * @apiGroup Twitter
 * @apiSuccess {Object} twitter Twitter's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Twitter not found.
 */
router.get('/recentTweets', getRecentTweets)

router.get('/followers', getAllFollowers)

router.get('/following', getAllFollowing)

router.get('/me', getProfile)

export default router
