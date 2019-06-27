const db = require('./db')
const Pin = require('./models/pin')
const User = require('./models/user')
const Board = require('./models/board')

// set up associations here

// every pin is posted by one original pinner.
User.hasMany(Pin, { as: 'pinner' })
Pin.belongsTo(User, { as: 'pinner' })

// every board is owned by a user
User.hasMany(Board, { as: 'owner' })
Board.belongsTo(User, { as: 'owner' })

// a board has many pins and a pin can be on many boards
Pin.belongsToMany(Board, { through: 'saves' })
Board.belongsToMany(Pin, { through: 'saves' })
// this creates the Sequelize method `board.getPins()` for example

module.exports = {
    db,
    Pin
}
