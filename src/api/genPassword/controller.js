let generator = require('generate-password')

export const generate = (req, res, next) => {
    if (req.params.length === undefined) {
        let randomLength = Math.floor(Math.random() * (20 - 12)) + 8
    } else {
        let randomLength = req.params.length
    }
    console.log(randomLength)
    let password = generator.generate({
        length: randomLength,
        numbers: true,
        lowercase: true,
        uppercase: true,
        excludeSimilarCharacters: true,
    })
    res.status(200).send(password)
}
