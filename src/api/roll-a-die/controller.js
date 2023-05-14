export const show = ({ params }, res, next) => {
    let arr = ['1', '2', '3', '4', '5', '6']
    res.status(200).json({
        answer: arr[Math.floor(Math.random() * arr.length)],
    })
}
