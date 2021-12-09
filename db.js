const {Sequelize, DataTypes, Model} = require('sequelize')
const path = require('path')



const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './movie.sqlite',
    logging: false
})


module.exports = {sequelize, DataTypes, Model}
