const express = require("express")
const teachers = require("../data/teachers.json")

const teachersRouter = express.Router()

// GET route => kann man direkt im BROWSER aufrufen
teachersRouter.get("/", (req, res) => {
  // respond to browser with ALL teachers in array
  res.json(teachers)
})

// Will handle these requests: /teachers/1
teachersRouter.get("/:id", (req, res) => {
  const studentId = req.params.id
  // respond to browser with ALL teachers in array
  // res.json(teachers)
  const studentFound = teachers.find((student) => student.id === studentId)
  res.json(studentFound)
})

module.exports = teachersRouter
// export default teachersRouter
