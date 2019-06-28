const db = require('./db')
const Pin = require('./models/pin')
const User = require('./models/user')

// set up associations here

// example: every pin is posted by one original pinner.
User.hasMany(Pin, { as: 'pinner' })
Pin.belongsTo(User, { as: 'pinner' })

module.exports = {
    db,
    Pin,
    User,
}
