const {sequelize, DataTypes, Model} = require('../db')

class Crew extends Model {}


Crew.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    department: DataTypes.STRING,
    age: DataTypes.INTEGER,
    years_of_experience: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})

module.exports = {Crew}
