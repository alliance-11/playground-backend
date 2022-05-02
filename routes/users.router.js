const express = require("express")
const users = require("../data/users.json")

const usersRouter = express.Router()

// GET route => kann man direkt im BROWSER aufrufen
usersRouter.get("/", (req, res) => {
  // respond to browser with ALL users in array
  res.json(users)
})

// Will handle these requests: /users/1
usersRouter.get("/:id", (req, res) => {
  const studentId = req.params.id
  // respond to browser with ALL users in array
  // res.json(users)
  const studentFound = users.find((student) => student.id === studentId)
  res.json(studentFound)
})

module.exports = usersRouter
// export default usersRouter
