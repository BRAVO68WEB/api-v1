import { Router } from 'express'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /under-maintainance Retrieve under maintainances
 * @apiName RetrieveUnderMaintainances
 * @apiGroup UnderMaintainance
 * @apiUse listParams
 * @apiSuccess {Object[]} underMaintainances List of under maintainances.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
