const express = require('express')
const path = require('path')

const {Movie, Cast, Crew} = require('./index')


const app = express()
const port = 3000



app.use(express.json)


app.get('/movies/:id', async (req,res) => {
    //find one specific instance of the movie model
    const thisMovie = await Movie.findByPk(req.params.id)
    res.json(thisMovie)
})

app.get('movies', async (req, res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})

app.get('/search', async (req,res) => {
    //create empty array of movies
    let results = []
    //if they query a title, return all movies with that title
    if (req.query.title){
        results = await Movie.findAll({where:{title: req.query.title}})
    }
    //if they query a genre, return all movies with that genre
    else if (req.query.genre){
        results = await Movie.findAll({where:{genre: req.query.genre}})
    }
    //respond with results as an array of json objects
    res.json(results)
})


app.get('/casts/:id', async (req,res) => {
    const thisCastMem = await Cast.findByPk(req.params.id)
    res.json(thisCastMem)
})

app.get('/casts', async (req,res) => {
    const allCastMems = await Cast.findAll()
    res.json(allCastMems)
})


app.post('/casts', async (req,res) => {
    let newCast = await Cast.create(req.body)
    res.send(newCast ? "New Cast Member Created" : "Failedto Create New Cast Member")
})


app.put('/casts/:id', async (req,res) => {
    let updatedCast = await Band.update(req.body, {
        where : {id:req.params.id}
    })
    res.send(updatedCast ? "Cast Member Updated" : "Update Failed")
})

app.delete('/casts/:id', async (req,res) => {
    const deleted = await Cast.destroy({
        where: {id: req.params.id}
    })
    //useing a boolen return value from destroy method return to generate a string message
    res.send(deleted ? "Deleted Cast Member" : "Failed to Delete Cast Member")
})

//return all crew in a movie
app.get('/crewmembers/:id', async (req,res) => {
    let results =[]
    //find the band with this id
    const thisMovie = await Movie.findByPk(req.params.id)
    results.push(thisMovie)
    //find all Crew in the Movie of this id
    const crewInThisMovie = await Movie.findAll({where: {MovieId: req.params.id}})
    results.push(crewInThisMovie)
    res.json(results)
})

//return one crew by id
app.get('/crews/:id', async (req,res) => {
    const thisCrewMember = await Crew.findByPk(req.params.id)
    res.json(thisCrewMember)
})

app.post('/crews', async (req,res) => {
    let newCrewMem = await Crew.create(req.body)
    res.send(newCrewMem ? "Crew Member created successfully" : "post failed")
})


app.put('/crews/:id', async (req,res) => {
    let updatedCrewMem = await Crew.update(req.body, {
        where: {id: req.params.id}
    })
    res.send(updatedCrewMem ? "Crew Member Was Updated Successfully" : "Update Failed")
})

app.delete('/crews/:id', async (req,res) =>{
    //destroy the musician matching the request parameter id
    await Crew.destroy({
        where: {id: req.params.id}
    })
    res.send("Deleted Crew Member")
})

app.get('/crew-name/:name', async(req,res)=>{
    //find one specific instance of the crew model by name
    const thisCrewMember = await Crew.findOne({where:{name: req.params.name}})
    res.json(thisCrewMember)
})


app.get('/bands/:id', async (req,res) => {
    //find one specific instance of the Band model
    const thisBand = await Band.findByPk(req.params.id)
    //respond with allBands as an array of json objects
    res.json(thisBand)
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})