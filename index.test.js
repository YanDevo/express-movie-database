// import associated models from index.js
const {Movie, Cast, Crew, sequelize} = require('./index')


// test Movie DB CRUD
describe('Movie Database', () => {

    beforeAll( async() => {
        // reste Database
        await sequelize.sync({force:true})
        // create array of Movies
        const arrayOfMovies = [
            {title: "The Midnight Sky", genre: "Science Fiction", release_date: "2020-12-09", imdb_rating: 7, budget: "100 million", revenue: "3 million"},
            {title: "An American Pickle", genre: "Drama", release_date: "2020-08-06", imdb_rating: 6, budget: "20 million", revenue: "500 thousand"},
            {title: "Tenet", genre: "Action", release_date: "2020-09-03", imdb_rating: 6, budget: "200 million", revenue: "363.7 million"}
        ]
        // create array of Cast members
        const ArrayOfCastMembers = [
            {name: "George Clooney", title: "Lead Actor", place_of_birth: "Lexington, Kentucky", age: 60, height: "5' 11\"", extra: false},
            {name: "Felicity Jones", title: "Supporting Actress", place_of_birth: "Birmingham United Kingdom", age: 38, height: "5'4\"", extra: false}
            {name: "Seth Rogan", title: "Lead Actor", place_of_birth: "Vancover, Canada", age: 39, height: "5'11\"", extra: false}
            {name: "Sarah Snook", title: "Supporting Actress", place_of_birth: "Adelaide, Australia", age: 34, height: "5'6\"", extra: false}
            {name: "John David Washington", title: "Lead Actor", place_of_birth: "Los Angelas, California", age: 37, height: "5'9\"", extra: false}
            {name: "Robert Pattinson", title: "Supporting Actor", place_of_birth: "London, United Kingdom", age: 35, height: "6'1\"", extra: false}
            {name: "Ingrid Margus", title: "extra", place_of_birth: "Tartu, Estonia", age: 27, height: "5'4\"", extra: true}
        ]

        // create array of crew members
        const arrayOfCrewMembers = [
            {name: "Greg Baxter", title: "Executive Producer", department: "Production"}
            {name: "Martin Ruhe", title: "Director of Photography", department: "Cinematography"}
            {name: "Anita Burger", title: "Hair Stylist", department: "Makeup"}
            {name: "Ted Gidlow", title: "Executive Producer", department: "Production"}
            {name: "John Guleserian", title: "Director of Photography", department: "Cinamatography"}
            {name: "Felecia Bates", title: "Hair Stylist", department: "Makeup"}
            {name: "Thomas Hayslip", title: "Executive Producer", department: "Production"}
            {name: "Hoyte Van Hoytema", title: "Director of Photography", department: "Cinamatography"}
            {name: "Louisa Abel", title: "Makeup Department Head", department: "Makeup"}
        ]

         // add arrays to Database
        await Movie.bulkCreate(arrayOfMovies)
        await Cast.bulkCreate(arrayOfCastMembers)
    })

    // create instances of Movie model for testing
    test('movie has a title', async () => {
        // read test instance from Database
        const testMovie = await Movie.findOne({where: {title: 'The Midnight Sky'}})
        expect(testMovie.title).toBe('The Midnight Sky')
    })
})