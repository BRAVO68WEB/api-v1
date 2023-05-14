import { Router } from 'express'
import { show, logo, socials } from './controller'

const router = new Router()

/**
 * @api {get} /root/:id Retrieve root
 * @apiName RetrieveRoot
 * @apiGroup Root
 * @apiSuccess {Object} root Root's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Root not found.
 */
router.get('/', show)
router.get('/logo', logo)
router.get('/socials', socials)

export default router
