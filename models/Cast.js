const {sequelize, DataTypes, Model} = require('../db')

class Cast extends Model {}

Cast.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    place_of_birth: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.STRING,
    extra: DataTypes.BOOLEAN
}, {
    sequelize,
    timestamps: false  
})

module.exports = {Cast}