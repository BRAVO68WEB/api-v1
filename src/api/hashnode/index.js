import { Router } from 'express'
import { show, showAll } from './controller'

const router = new Router()

/**
 * @api {get} /hashnode/me Retrieve hashnode
 * @apiName RetrieveHashnode
 * @apiGroup Hashnode
 * @apiSuccess {Object} hashnode Hashnode's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hashnode not found.
 */
router.get('/me', show)
router.get('/me/all', showAll)

export default router
