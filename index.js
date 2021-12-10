const {sequelize, DataTypes, Model} = require('./db')

// import your models
const {Movie} = require('./models/Movie')
const {Cast} = require('./models/Cast')
const {Crew} = require('./models/Crew')


// associate
Crew.belongsTo(Movie)
Cast.belongsTo(Movie)

Movie.hasMany(Cast)
Movie.hasMany(Crew)

//export
module.exports = {Movie, Cast, Crew, sequelize}
