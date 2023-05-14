import { Router } from 'express'
// import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /ipinfo Retrieve ipinfos
 * @apiName RetrieveIpinfos
 * @apiGroup Ipinfo
 * @apiUse listParams
 * @apiSuccess {Object[]} ipinfos List of ipinfos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
