const {sequelize, DataTypes, Model} = require('../db')

class Crew extends Model {}


Crew.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    department: DataTypes.STRING,
  
}, {
    sequelize,
    timestamps: false
})

module.exports = {Crew}
