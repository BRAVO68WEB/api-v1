import { Router } from 'express'
import {
    webhookError,
    recieve,
    activateAccount,
    deactivateAccount,
    resetAPIKey,
    showAPIKey,
} from './controller'

const router = new Router()

/**
 * @api {get} /mail/:id Retrieve mail
 * @apiName RetrieveMail
 * @apiGroup Mail
 * @apiSuccess {Object} mail Mail's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Mail not found.
 */
// router.get("/:id", show);

router.post('/webhook', recieve)
router.post('/webhook/error', webhookError)

router.post('/activateAccount', activateAccount)
router.post('/deactivateAccount', deactivateAccount)

router.post('/resetAPIKey', resetAPIKey)
router.post('/showAPIKey', showAPIKey)

export default router
