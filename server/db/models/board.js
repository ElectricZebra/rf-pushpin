const Sequelize = require('sequelize');
const db = require('../db');

const Board = db.define('board', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true
  }
})

module.exports = Board
