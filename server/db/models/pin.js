const Sequelize = require('sequelize')
const db = require('../db')

const Pin = db.define('pin', {
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(500)
    }
})

module.exports = Pin
