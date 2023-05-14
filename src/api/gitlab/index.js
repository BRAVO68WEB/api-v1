import { Router } from 'express'
import { gitlabUserData, gitlabUserRepos } from './controller'

const router = new Router()

/**
 * @api {get} /gitlab/:id Retrieve gitlab
 * @apiName RetrieveGitlab
 * @apiGroup Gitlab
 * @apiSuccess {Object} gitlab Gitlab's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gitlab not found.
 */
router.get('/userData', gitlabUserData)
router.get('/userRepos', gitlabUserRepos)

export default router
