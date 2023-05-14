import { Router } from 'express'
import { profile, maps, weapons } from './controller'

const router = new Router()

/**
 * @api {get} /csgo/me Retrieve csgo
 * @apiName RetrieveCsgo
 * @apiGroup Csgo
 * @apiSuccess {Object} csgo Csgo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Csgo not found.
 */
router.get('/me', profile)
router.get('/maps', maps)
router.get('/weapons', weapons)

export default router
