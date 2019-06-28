const db = require('./db')
const Pin = require('./models/pin')
const User = require('./models/user')
const Board = require('./models/board')

// set up associations here

// example: every pin is posted by one original pinner.
User.hasMany(Pin, { as: 'pinner' })
Pin.belongsTo(User, { as: 'pinner' })
Board.hasMany(Pin, { as: 'pins'})
Board.belongsTo(User)
User.hasMany(Board, { foreignKey: 'boardId'})
Pin.hasMany(Board, { foreignKey: 'boardId'})

module.exports = {
    db,
    Pin,
    User,
    Board
}
