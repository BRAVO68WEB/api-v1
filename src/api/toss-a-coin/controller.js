export const show = ({ params }, res, next) => {
    const ts = new Date().getTime()

    if (ts % 2 == 0) {
        let ans = 'Heads'
    } else {
        let ans = 'Tails'
    }
    res.status(200).json({ result: ans })
}
