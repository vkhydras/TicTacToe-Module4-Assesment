//importing the modules
const express = require("express")
const connectDB = require("./db")
const gameController = require("./controllers/gameController")
const createCells = require("./createCells")
const cors = require("cors")

const app = express()
//handles data sent from the clients
app.use(express.json())
app.use(cors())

// Connect to MongoDB
connectDB()

// Create a new game
app.post("/games", gameController.createGame)

// Retrieve game data
app.get("/games", gameController.getGame)

// Update game dat
app.put("/games", gameController.updateGame)

//To build functionality of the game
app.use(createCells)
//starts an exp server that listens on port 5000
app.listen(5000, () => {
  console.log("Server is running on port 5000")
})
