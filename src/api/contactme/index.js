import { Router } from 'express'
import { postQuery, postQueryAws } from './controller'
import { middleware as body } from 'bodymen'

let email, senderName, topic, message

const router = new Router()

/**
 * @api {get} /contactmes/:id Retrieve contactme
 * @apiName RetrieveContactme
 * @apiGroup Contactme
 * @apiSuccess {Object} contactme Contactme's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Contactme not found.
 */
router.post(
    '/postQuery',
    body({ email, senderName, topic, message }),
    postQueryAws
)
router.post(
    '/postQuery/aws',
    body({ email, senderName, topic, message }),
    postQuery
)

export default router
