import { success, notFound } from '../../services/response/'
import { Files } from '.'
import minifyURL from '../../services/minifyUrl/index.js'

const sharp = require('sharp')
const path = require('path')
const { nanoid } = require('nanoid')

const S3 = require('aws-sdk/clients/s3')

const accessKeyId = process.env.S3_KEY
const secretAccessKey = process.env.S3_SECRET

const s3 = new S3({
    endpoint: process.env.S3_END_POINT,
    accessKeyId,
    secretAccessKey,
    s3ForcePathStyle: true, // needed with minio?
    signatureVersion: 'v4',
})

function makeid(length) {
    let result = []
    let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result.push(
            characters.charAt(Math.floor(Math.random() * charactersLength))
        )
    }
    return result.join('')
}

export const create = async (req, res, next) => {
    if (req.error) {
        res.status(400).send(req.error)
        return
    }
    let images = []
    let image = req.file

    let filename = `image-${nanoid()}.webp`
    console.log(filename)
    let key = `${process.env.S3_BUCKET_FOLDER}/${filename}`

    let params = {
        Bucket: process.env.S3_BUCKET,
        Key: key,
        Body: await sharp(image.buffer)
            .resize({
                width: 736,
                height: 1000,
                fit: 'contain',
                background: {
                    alpha: 0,
                    r: 0,
                    g: 0,
                    b: 0,
                },
            })
            .webp()
            .toBuffer(),
        ACL: 'public-read',
    }
    s3.putObject(params, async function (err, data) {
        if (err) {
            console.error(err, err.stack)
        } else {
            images.push({
                src: `${process.env.S3_PUBLIC_URL}/${key}`,
                key,
                ETag: data.ETag,
            })
            let body = {}
            body.uploader = req.headers.email
            body.private = req.body.private ? req.body.private : false
            // body.oneTime = req.body.oneTime ? req.body.oneTime : false;
            // body.password = req.body.password ? req.body.password : null;
            body.about = req.body.about ? req.body.about : null
            body.fileURL = images[0].src
            let shortCode = makeid(8)
            minifyURL(body.fileURL, shortCode)

            body.minifiedURL = 'https://b68dev.xyz/' + shortCode
            Files.create(body)
                .then((files) => files.view(true))
                .then(success(res, 201))
                .catch(next)
            return images
        }
    })
}

export const createFile = async (req, res, next) => {
    if (req.error) {
        res.status(400).send(req.error)
        return
    }
    let files = []
    let file = req.file

    let filename = `file-${nanoid()}${path.extname(file.originalname)}`
    let key = `${process.env.S3_BUCKET_FOLDER}/${filename}`

    let params = {
        Bucket: process.env.S3_BUCKET,
        Key: key,
        Body: await file.buffer,
        ACL: 'public-read',
    }
    s3.putObject(params, async function (err, data) {
        if (err) {
            console.error(err, err.stack)
        } else {
            files.push({
                src: `${process.env.S3_PUBLIC_URL}/${key}`,
                key,
                ETag: data.ETag,
            })

            let body = {}
            body.uploader = req.headers.email
            body.private = req.body.private ? req.body.private : false
            // body.oneTime = req.body.oneTime ? req.body.oneTime : false;
            // body.password = req.body.password ? req.body.password : null;
            body.about = req.body.about ? req.body.about : null
            body.fileURL = files[0].src
            let shortCode = makeid(8)
            minifyURL(body.fileURL, shortCode)
            body.minifiedURL = 'https://b68dev.xyz/' + shortCode

            Files.create(body)
                .then((files) => files.view(true))
                .then(success(res, 201))
                .catch(next)
            return files
        }
    })
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
    Files.find(query, select, cursor)
        .then((files) => files.map((files) => files.view()))
        .then(success(res))
        .catch(next)

export const indexForMe = (req, res, next) =>
    Files.find({ uploader: req.headers.email })
        .then((files) => files.map((files) => files.view()))
        .then(success(res))
        .catch(next)

export const show = ({ params }, res, next) =>
    Files.findById(params.id)
        .then(notFound(res))
        .then((files) => (files ? files.view() : null))
        .then(success(res))
        .catch(next)

// export const update = ({ bodymen: { body }, params }, res, next) =>
//   Files.findById(params.id)
//     .then(notFound(res))
//     .then((files) => (files ? Object.assign(files, body).save() : null))
//     .then((files) => (files ? files.view(true) : null))
//     .then(success(res))
//     .catch(next);

// export const destroy = ({ params }, res, next) =>
//   Files.findById(params.id)
//     .then(notFound(res))
//     .then((files) => (files ? files.remove() : null))
//     .then(success(res, 204))
//     .catch(next);
