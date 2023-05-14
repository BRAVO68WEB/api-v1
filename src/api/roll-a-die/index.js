import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /roll-a-die/:id Retrieve roll a die
 * @apiName RetrieveRollADie
 * @apiGroup RollADie
 * @apiSuccess {Object} rollADie Roll a die's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Roll a die not found.
 */
router.get('/', show)

export default router
