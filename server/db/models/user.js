const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true,
        },
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING(500),
    },
})

module.exports = User
