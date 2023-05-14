import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import {
    create,
    index,
    show,
    update,
    destroy,
    createFile,
    indexForMe,
} from './controller'
import { schema } from './model'
import multer from 'multer'
export Files, { schema } from './model'
let path = require('path')

const storage = multer.memoryStorage({
    filename: (req, file, cb) => {
        const fileName = `file-${nanoid()}${path.extname(file.originalname)}`
        console.log(' Multer :- ' + fileName)
        cb(null, fileName)
    },
})

let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (req._parsedUrl.path == '/image') {
            if (file.mimetype.startsWith('image')) {
                cb(null, true)
            } else {
                cb(null, false)
                req.error = 'Only .png, .jpg and .jpeg allowed'
                return cb(
                    null,
                    false,
                    new Error('Only .png, .jpg and .jpeg format allowed!')
                )
            }
        } else {
            cb(null, true)
        }
    },
})

const router = new Router()
// const { uploader, oneTime, password } = schema.tree;

/**
 * @api {post} /files Create files
 * @apiName CreateFiles
 * @apiGroup Files
 * @apiParam uploader Files's uploader.
 * @apiParam oneTime Files's oneTime.
 * @apiParam password Files's password.
 * @apiSuccess {Object} files Files's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Files not found.
 */
router.post('/image', upload.single('image'), create)
router.post('/file', upload.single('file'), createFile)

/**
 * @api {get} /files Retrieve files
 * @apiName RetrieveFiles
 * @apiGroup Files
 * @apiUse listParams
 * @apiSuccess {Object[]} files List of files.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/myFiles', indexForMe)

router.get(
    '/',
    query({
        private: false,
    }),
    index
)

/**
 * @api {get} /files/:id Retrieve files
 * @apiName RetrieveFiles
 * @apiGroup Files
 * @apiSuccess {Object} files Files's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Files not found.
 */
router.get('/:id', show)

/**
 * @api {put} /files/:id Update files
 * @apiName UpdateFiles
 * @apiGroup Files
 * @apiParam uploader Files's uploader.
 * @apiParam oneTime Files's oneTime.
 * @apiParam password Files's password.
 * @apiSuccess {Object} files Files's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Files not found.
 */
// router.put("/:id", body({ uploader, oneTime, password }), update);

/**
 * @api {delete} /files/:id Delete files
 * @apiName DeleteFiles
 * @apiGroup Files
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Files not found.
 */
// router.delete("/:id", destroy);

export default router
