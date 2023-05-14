import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /vscode Retrieve vscodes
 * @apiName RetrieveVscodes
 * @apiGroup Vscode
 * @apiUse listParams
 * @apiSuccess {Object[]} vscodes List of vscodes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

export default router
