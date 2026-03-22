const express = require('express')
const path = require('path')
const {parse} = require("nodemon/lib/cli");
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies =[
    {
      "Title": "Spirited Away",
      "Released": "28/03/2003",
      "Runtime": 124,
      "Genres": ["Animation", "Adventure", "Family"],
      "Directors": ["Hayao Miyazaki"],
      "Writers": ["Hayao Miyazaki"],
      "Actors": ["Miyu Irino", "Rumi Hiiragi", "Mari Natsuki"],
      "Plot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 96,
      "imdbRating": 8.6
    },
    {
      "Title": "The Truman Show",
      "Released": "05/06/1998",
      "Runtime": 103,
      "Genres": ["Comedy", "Drama"],
      "Directors": ["Peter Weir"],
      "Writers": ["Andrew Niccol"],
      "Actors": ["Jim Carrey", "Ed Harris", "Laura Linney"],
      "Plot": "An insurance salesman begins to suspect that his whole life is actually some sort of reality TV show.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzA3ZjZlNzYtMTdjMy00NjMzLTk5ZGYtMTkyYzNiOGM1YmM3XkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 90,
      "imdbRating": 8.2
    },
    {
      "Title": "Dragon Ball Super: Broly",
      "Released": "16/01/2019",
      "Runtime": 100,
      "Genres": ["Animation", "Action", "Adventure"],
      "Directors": ["Tatsuya Nagamine"],
      "Writers": ["Akira Toriyama"],
      "Actors": ["Masako Nozawa", "Aya Hisakawa", "Ryô Horikawa"],
      "Plot": "Goku and Vegeta encounter Broly, a Saiyan warrior unlike any fighter they've faced before.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTA5MTc1M2EtZWQ2Ni00ZmU2LTg3MzQtOTliMjE4OGM0ZWFiXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 59,
      "imdbRating": 7.7
    }
  ]
  res.send(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

