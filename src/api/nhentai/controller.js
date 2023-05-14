const { API } = require('nhentai-api')
const api = new API()
let axios = require('axios')

export const show = ({ params }, res, next) => {
    return res.redirect(`/coming-soon`)
    api.getBook(params.id).then((book) => {
        let check = api.getImageURL(book.cover)
        // api.getImageURL(book.pages[1]);
        // return res
        //   .status(200)
        //   .set({ referer: "", "Content-Type": "image/jpg" })
        //   .send(check);

        let config = {
            method: 'get',
            url: check,
            headers: {},
        }

        axios(config)
            .then(function (response) {
                console.log(response)

                return res.set(response.headers).send(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    })
}
export const cover = ({ params }, res, next) => {
    return res.redirect(`/coming-soon`)
    api.getBook(params.id).then((book) => {
        let check = api.getImageURL(book.cover) // https://t.nhentai.net/galleries/987560/cover.jpg
        // api.getImageURL(book.pages[1]); // https://i.nhentai.net/galleries/987560/2.jpg
        return res.status(200).json({ cover: check })
    })
}
export const readPage = ({ params }, res, next) => {
    return res.redirect(`/coming-soon`)
    api.getBook(params.id).then((book) => {
        let page = api.getImageURL(book.pages[params.page]) // https://i.nhentai.net/galleries/987560/2.jpg
        return res.status(200).json({ page: page })
    })
}
export const readAllPages = ({ params }, res, next) => {
    return res.redirect(`/coming-soon`)
    api.getBook(params.id).then((book) => {
        let check = api.getImageURL(book.cover) // https://t.nhentai.net/galleries/987560/cover.jpg
        // api.getImageURL(book.pages[1]); // https://i.nhentai.net/galleries/987560/2.jpg
        return res.status(200).json({ cover: check })
    })
}
