const router = require('express').Router()

router.use('/pins', require('./pins'))

router.use('/boards', require('./boards'))

module.exports = router
