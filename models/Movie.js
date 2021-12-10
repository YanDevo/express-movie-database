const {sequelize, DataTypes, Model} = require('../db')

class Movie extends Model {}

Movie.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATE,
    imdb_rating: DataTypes.INTEGER,
    budget: DataTypes.STRING,
    revenue: DataTypes.STRING

}, {
    sequelize, 
    timestamps: false
})

module.exports = {Movie}
