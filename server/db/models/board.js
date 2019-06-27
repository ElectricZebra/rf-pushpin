const Sequelize = require('sequelize')
const db = require('../db')

const Board = db.define('board', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    description: {
        type: Sequelize.STRING(500),
    },
})

module.exports = Board
