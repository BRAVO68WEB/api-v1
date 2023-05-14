const { v4 } = require('uuid')
const cheerio = require('cheerio')
const rs = require('request')
const aesjs = require('aes-js')
const base64url = require('base64url')
let urlencode = require('urlencode')
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))

const baseURL = 'https://gogoanime.fi/'

// async function getLink(Link) {
//     rs(Link, (err, resp, html) => {
//         if (!err) {
//             let $ = cheerio.load(html)
//             let links = []
//             $('a').each((i, e) => {
//                 if (e.attribs.download === '') {
//                     links.push(e.attribs.href)
//                 }
//             })
//             return links
//         }
//     })
// }

// async function getVideoLink(embedLink) {
//     try {
//         const options = {
//             headers: {
//                 'user-agent':
//                     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 Edg/95.0.1020.44',
//             },
//         }

//         const options2 = {
//             headers: {
//                 'x-requested-with': 'XMLHttpRequest',
//             },
//         }
//         const res = await fetch(embedLink, options)

//         if (res.status !== 200) {
//             return
//         }

//         const $ = cheerio.load(await res.text())

//         let encrypted = $("script[data-name='crypto']").attr('data-value')
//         let iv = $("script[data-name='ts']").attr('data-value')
//         let iv_bytes = aesjs.utils.utf8.toBytes(iv)
//         let key_bytes = new Uint8Array([...iv_bytes, ...iv_bytes])
//         let id = new URL(embedLink).searchParams.get('id')

//         let decrypted = decrypt(encrypted, iv_bytes, key_bytes)
//         let ivBytes = aesjs.utils.utf8.toBytes('0000000000000000')
//         let keyBytes = aesjs.padding.pkcs7.strip(decrypted)

//         let encrypted_id = encrypt(id, ivBytes, keyBytes)

//         let sourcesLink =
//             'http://gogoplay.io/encrypt-ajax.php?id=' +
//             encrypted_id +
//             '&time=00000000000000000000'
//         let sources_result = await fetch(sourcesLink, options2)
//         let sources_text = await sources_result.text()
//         let sources = JSON.parse(sources_text)

//         let videoLinks = sources.source
//         if (videoLinks.length < 2) {
//             return videoLinks[0].file
//         }
//         let filteredLinks = videoLinks.filter(filterVideos)
//         if (filteredLinks.length == 0) {
//             return videoLinks[0].file
//         } else {
//             return filteredLinks[0].file
//         }
//     } catch (e) {
//         console.log(e)
//         return ''
//     }
// }

function filterVideos(src) {
    return src.label == '1080 P'
}

function encrypt(msg, ivBytes, keyBytes) {
    let aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes)
    let textBytes = aesjs.utils.utf8.toBytes(msg)
    let padded = aesjs.padding.pkcs7.pad(textBytes)
    let encryptedBytes = aesCbc.encrypt(padded)
    return base64url.encode(encryptedBytes)
}

function decrypt(encrypted, ivBytes, keyBytes) {
    let aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, ivBytes)
    let encryptedBytes = base64url.toBuffer(encrypted)
    let decryptedBytes = aesCbc.decrypt(encryptedBytes)
    return decryptedBytes
}

export const show = ({ params }, res, next) =>
    res.status(200).json({
        message: 'Gogoanime API',
    })

export const popular = (req, res, next) => {
    let results = []
    let page = req.params.page
    if (isNaN(page)) {
        return res.status(404).json({ results })
    }
    let url = `${baseURL}popular.html?page=${req.params.page}`
    rs(url, (error, response, html) => {
        if (!error) {
            try {
                let $ = cheerio.load(html)
                $('.img').each(function (index, element) {
                    let title = $(this).children('a').attr().title
                    let id = $(this).children('a').attr().href.slice(10)
                    let image = $(this).children('a').children('img').attr().src

                    results[index] = { title, id, image }
                })
                res.status(200).json({ results })
            } catch (e) {
                res.status(404).json({ e: '404 fuck off!!!!!' })
            }
        }
    })
}

export const details = (req, res, next) => {
    let results = []

    let siteUrl = `${baseURL}category/${req.params.id}`
    rs(siteUrl, (err, resp, html) => {
        if (!err) {
            try {
                let $ = cheerio.load(html)
                let type = ' '
                let summary = ''
                let relased = ''
                let status = ''
                let genres = ''
                let Othername = ''
                let title = $('.anime_info_body_bg').children('h1').text()
                let image = $('.anime_info_body_bg').children('img').attr().src

                $('p.type').each(function (index, element) {
                    if ('Type: ' == $(this).children('span').text()) {
                        type = $(this).text().slice(15, -5)
                    } else if (
                        'Plot Summary: ' == $(this).children('span').text()
                    ) {
                        summary = $(this).text().slice(14)
                    } else if (
                        'Released: ' == $(this).children('span').text()
                    ) {
                        relased = $(this).text().slice(10)
                    } else if ('Status: ' == $(this).children('span').text()) {
                        status = $(this).text().slice(8)
                    } else if ('Genre: ' == $(this).children('span').text()) {
                        genres = $(this).text().slice(20, -4)
                        genres = genres.split(',')
                        genres = genres.join(',')
                    } else 'Other name: ' == $(this).children('span').text()
                    {
                        Othername = $(this).text().slice(12)
                    }
                })
                genres.replace(' ')
                let totalepisode = $('#episode_page')
                    .children('li')
                    .last()
                    .children('a')
                    .attr().ep_end
                results[0] = {
                    title,
                    image,
                    type,
                    summary,
                    relased,
                    genres,
                    status,
                    totalepisode,
                    Othername,
                }
                res.status(200).json({ results })
            } catch (e) {
                res.status(404).json({ e: '404 fuck off!!!!!' })
            }
        }
    })
}

// export const detailsHTML = (req, res) => {
//     let results = []

//     let siteUrl = `${baseURL}category/${req.params.id}`
//     rs(siteUrl, (err, resp, html) => {
//         if (!err) {
//             try {
//                 let $ = cheerio.load(html)
//                 let type = ' '
//                 let summary = ''
//                 let relased = ''
//                 let status = ''
//                 let genres = ''
//                 let Othername = ''
//                 let title = $('.anime_info_body_bg').children('h1').text()
//                 let image = $('.anime_info_body_bg').children('img').attr().src

//                 $('p.type').each(function (index, element) {
//                     if ('Type: ' == $(this).children('span').text()) {
//                         type = $(this).text().slice(15, -5)
//                     } else if (
//                         'Plot Summary: ' == $(this).children('span').text()
//                     ) {
//                         summary = $(this).text().slice(14)
//                     } else if (
//                         'Released: ' == $(this).children('span').text()
//                     ) {
//                         relased = $(this).text().slice(10)
//                     } else if ('Status: ' == $(this).children('span').text()) {
//                         status = $(this).text().slice(8)
//                     } else if ('Genre: ' == $(this).children('span').text()) {
//                         genres = $(this).text().slice(20, -4)
//                         genres = genres.split(',')
//                         genres = genres.join(',')
//                     } else 'Other name: ' == $(this).children('span').text()
//                     {
//                         Othername = $(this).text().slice(12)
//                     }
//                 })
//                 genres.replace(' ')
//                 let totalepisode = $('#episode_page')
//                     .children('li')
//                     .last()
//                     .children('a')
//                     .attr().ep_end
//                 results[0] = {
//                     title,
//                     image,
//                     type,
//                     summary,
//                     relased,
//                     genres,
//                     status,
//                     totalepisode,
//                     Othername,
//                 }
//                 let resultstring = ''
//                 let ep = 1
//                 while (ep <= parseInt(results[0].totalepisode)) {
//                     resultstring += `<div id="episode-${ep}:${
//                         req.params.id
//                     }">${JSON.stringify(results[0])}</div>\n`
//                     ep++
//                 }
//                 res.status(200).send(resultstring)
//             } catch (e) {
//                 res.status(404).json({ e: '404 fuck off!!!!!' })
//             }
//         }
//     })
// }

export const search = (req, res) => {
    let results = []
    let word = req.params.word
    let page = req.params.page
    if (isNaN(page)) {
        return res.status(404).json({ results })
    }

    let url = `${baseURL}/search.html?keyword=${word}&page=${req.params.page}`
    rs(url, (err, resp, html) => {
        if (!err) {
            try {
                let $ = cheerio.load(html)
                let hasnext = $('ul.pagination-list').children().length > page
                $('.img').each(function (index, element) {
                    let title = $(this).children('a').attr().title
                    let id = $(this).children('a').attr().href.slice(10)
                    let image = $(this).children('a').children('img').attr().src

                    results[index] = { title, id, image }
                })
                res.status(200).json({ results, nextpage: hasnext })
            } catch (e) {
                res.status(404).json({ e: '404 fuck off!!!!!' })
            }
        }
    })
}

export const episode_link = (req, res, next) => {
    let link = ''
    let nl = []
    let totalepisode = []
    let id = req.params.id
    let episode = req.params.episode
    let url = `${baseURL + id}-episode-${episode}`
    rs(url, async (err, resp, html) => {
        if (!err) {
            try {
                let $ = cheerio.load(html)

                if ($('.entry-title').text() === '404') {
                    return res
                        .status(404)
                        .json({ links: [], link, totalepisode: totalepisode })
                }

                totalepisode = $('#episode_page')
                    .children('li')
                    .last()
                    .children('a')
                    .text()
                    .split('-')
                totalepisode = totalepisode[totalepisode.length - 1]
                const link = $('div.anime_muti_link > ul > li.anime > a').attr(
                    'data-video'
                )
                if (link == undefined) {
                    return res
                        .status(404)
                        .json({ links: [], link, totalepisode: totalepisode })
                }

                try {
                    // const videoLink = await getVideoLink('https:' + link)
                    // const encrypted_link = videoLink
                    // console.log(encrypted_link)
                    // const proxy_link = `/api/private/gogoanime/proxy?video_link=${encrypted_link}`
                    return res.status(200).json({
                        // links: [proxy_link],
                        link,
                        totalepisode: totalepisode,
                    })
                } catch (e) {
                    return res
                        .status(404)
                        .json({ links: [], link, totalepisode: totalepisode })
                }
            } catch (e) {
                return res
                    .status(404)
                    .json({ links: [], link: '', totalepisode: totalepisode })
            }
        }
    })
}

export const videoLinkExtractor = (req, res) => {
    const video_link = req.query.video_link
    console.log(video_link)
    const options = {
        headers: {
            Referer: 'https://gogoplay1.com/',
        },
    }
    rs(video_link, options).pipe(res)
    // res.send(video_link)
}
