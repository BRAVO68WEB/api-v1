export const index = (req, res, next) =>
    res.status(404).json({
        err: 'Not Found',
    })
