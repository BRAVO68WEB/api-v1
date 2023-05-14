import { Router } from 'express'
import { generate } from './controller'

const router = new Router()

/**
 * @api {get} /generate-password/:id Retrieve gen password
 * @apiName RetrieveGenPassword
 * @apiGroup GenPassword
 * @apiSuccess {Object} genPassword Gen password's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gen password not found.
 */
router.get('/', generate)

router.get('/:length', generate)

export default router
