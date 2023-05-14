const client = require('nekos.life')
const sfw = new client()

export const neko = async ({ params }, res, next) => {
    let response = await sfw.neko()
    res.status(200).send(response)
}

export const nekoGif = async ({ params }, res, next) => {
    let response = await sfw.nekoGif()
    res.status(200).send(response)
}

export const foxGirl = async ({ params }, res, next) => {
    let response = await sfw.foxGirl()
    res.status(200).send(response)
}

export const meow = async ({ params }, res, next) => {
    let response = await sfw.meow()
    res.status(200).send(response)
}

export const hug = async ({ params }, res, next) => {
    let response = await sfw.hug()
    res.status(200).send(response)
}

export const cuddle = async ({ params }, res, next) => {
    let response = await sfw.cuddle()
    res.status(200).send(response)
}

export const kiss = async ({ params }, res, next) => {
    let response = await sfw.kiss()
    res.status(200).send(response)
}

export const gecg = async ({ params }, res, next) => {
    let response = await sfw.gecg()
    res.status(200).send(response)
}

export const waifu = async ({ params }, res, next) => {
    let response = await sfw.waifu()
    res.status(200).send(response)
}
