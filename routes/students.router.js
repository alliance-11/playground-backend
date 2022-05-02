const express = require("express")
const students = require("../data/students.json")

const studentsRouter = express.Router()

// GET route => kann man direkt im BROWSER aufrufen
studentsRouter.get("/", (req, res) => {
  // respond to browser with ALL students in array
  res.json( students )
})

// Will handle these requests: /students/1
studentsRouter.get("/:id", (req, res) => {
  const studentId = req.params.id
  // respond to browser with ALL students in array
  // res.json(students)
  const studentFound = students.find( student => student.id === studentId)
  res.json( studentFound)
})

module.exports = studentsRouter
// export default studentsRouter
