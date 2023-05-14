import { Router } from 'express'
import { activity, banner, home, stylesheet } from './controller'

const router = new Router()

/**
 * @api {get} /discord/:id Retrieve discord
 * @apiName RetrieveDiscord
 * @apiGroup Discord
 * @apiSuccess {Object} discord Discord's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Discord not found.
 */
router.get('/activity', activity)

router.get('/banner', banner)
router.get('/', home)
router.get('/stylesheet', stylesheet)

export default router
