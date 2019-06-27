const router = require('express').Router()

router.use('/pins', require('./pins'))

module.exports = router
