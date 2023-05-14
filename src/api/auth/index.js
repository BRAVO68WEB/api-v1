import { Router } from 'express'
import apiAuth, { schema } from './model'
import {
    create,
    showAll,
    validate,
    create2,
    showOne,
    activate,
    deactivate,
    retriveByEmail,
    regenerateAPIKey,
    whois,
    promoteUserAccess,
    demoteUserAccess,
    promoteUserRole,
    demoteUserRole,
    checkIfExist,
    verifyConfToken,
    resendVerifyToken,
    loginWithOtp,
    verifyLoginWithOtp
} from './controller'
import { authCheck } from './authCheck'
import { authCheckAdmin } from './authCheckAdmin'

const router = new Router()

/**
 * @api {get} /reg Create user account
 * @apiName CreateUser
 * @apiGroup UserAuth
 * @apiParam email user's email address.
 * @apiSuccess {Object} sendConfirmEmail Send confirm email's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Send confirm email not found.
 */
router.get('/reg', create)
router.post('/register', create2)

router.get('/users', authCheckAdmin, showAll)
router.get('/users/:id', authCheck, showOne)
router.get('/checkIfExist/:email', checkIfExist)

router.get('/users/promote/:email', authCheckAdmin, promoteUserAccess)
router.get('/users/demote/:email', authCheckAdmin, demoteUserAccess)
router.get('/users/promote/:email/role', promoteUserRole)
router.get('/users/demote/:email/role', demoteUserRole)

router.get('/users/get/:email', authCheckAdmin, retriveByEmail)
router.get('/users/reset/:email', authCheckAdmin, regenerateAPIKey)

router.get('/validate/:email/:apiKey', validate)
router.get('/verify/resend', resendVerifyToken)
router.get('/verify/:emailToken', verifyConfToken)

router.get('/otp/:email', loginWithOtp)
router.post('/otp/verify', verifyLoginWithOtp)

router.get('/activate/:email/', authCheckAdmin, activate)
router.get('/deactivate/:email/', authCheckAdmin, deactivate)
router.get('/me', authCheck, whois)

export { apiAuth, schema }
export default router
