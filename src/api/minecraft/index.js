import { Router } from 'express'
import { statusServer, statusIP, seed, serverBanner } from './controller'

const router = new Router()

/**
 * @api {get} /minecraft/:id Retrieve minecraft
 * @apiName RetrieveMinecraft
 * @apiGroup Minecraft
 * @apiSuccess {Object} minecraft Minecraft's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Minecraft not found.
 */
router.get('/status/:server', statusServer)

router.get('/status/:ip/:port', statusIP)

router.get('/banner/:ip/:port', serverBanner)

export default router
