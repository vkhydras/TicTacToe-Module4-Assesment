//importing the modules
const express = require("express")
const connectDB = require("./db")
const gameController = require("./controllers/gameController")
const createCells = require("./createCells")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

// Connect to MongoDB
connectDB()

// Create a new game
app.post("/games", gameController.createGame)

// Retrieve game data
app.get("/games", gameController.getGame)

// Update game data
app.put("/games", gameController.updateGame)


app.use(createCells)


//starts an exp server that listens on port 5000

app.listen(5000, () => {
  console.log("Server is running on port 5000")
})
