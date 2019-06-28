const router = require('express').Router()
const { Pin } = require('../db')

// GET /api/pins
router.get('/', async (req, res, next) => {
    try {
        const pins = await Pin.findAll({
            order: [['id', 'DESC']],
        })
        res.json(pins)
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
