const router = require('express').Router()
const { Pin } = require('../db')

const PAGE_SIZE = 10

// paginated results – we don't send back every single pin
// e.g. GET /api/pins?offset=10
router.get('/', async (req, res, next) => {
    try {
        const pins = await Pin.findAll({
            limit: PAGE_SIZE,
            offset: +req.query.offset || 0,
            order: [['id', 'DESC']]
        })
        const count = await Pin.count()
        // sending back an object with both pins and an `end` flag
        res.json({
            pins,
            end: +req.query.offset + PAGE_SIZE >= count
        })
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const pin = await Pin.findByPk(req.params.id)
        res.json(pin)
    } catch (err) {
        next(err)
    }
})

module.exports = router
