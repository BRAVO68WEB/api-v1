import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /ask/:id Retrieve ask
 * @apiName RetrieveAsk
 * @apiGroup Ask
 * @apiSuccess {Object} ask Ask's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Ask not found.
 */
router.get('/:q', show)

export default router
