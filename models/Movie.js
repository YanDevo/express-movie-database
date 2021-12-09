const {sequelize, DataTypes, Models} = require('../db')

class Movie extends Model {}

Movie.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataType.DATE,

}, {
    sequelize, 
    timestamps: false
})

module.exports = {Movie}
