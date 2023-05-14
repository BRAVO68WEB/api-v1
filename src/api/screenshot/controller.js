const puppeteer = require('puppeteer')
export const index = async (req, res, next) => {
    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
        })
        const page = await browser.newPage()
        await page.goto(req.query.url) // Read url query parameter.
        const image = await page.screenshot({ fullPage: true })
        await browser.close()
        res.set('Content-Type', 'image/png')
        res.send(image)
    } catch (error) {
        console.log(error)
    }
}
