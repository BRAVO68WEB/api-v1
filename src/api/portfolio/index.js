import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /portfolio/:id Retrieve portfolio
 * @apiName RetrievePortfolio
 * @apiGroup Portfolio
 * @apiSuccess {Object} portfolio Portfolio's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Portfolio not found.
 */
router.get('/api', show)

export default router
