const router = require('express').Router()
const { Board } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const board = await Board.findAll()
    res.json(board)
  }
  catch (ex) {
    next(ex)
  }
})

module.exports = router
