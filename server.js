// import react from 'react'
// const react = require("react")

const express = require("express")
const teachers = require("./data/teachers.json")
const users = require("./data/users.json")
const studentsRouter = require("./routes/students.router")
const teachersRouter = require("./routes/teachers.router")
const usersRouter = require("./routes/users.router")

const app = express()

// HOME ROUTE
app.get("/", (req, res) => {
  res.send(`<h2>Hallo von Elizas Backend</h2>.
    <p>Hier gibt es User, Teacher und Students. Hol sie dir!</p>
    <div>Students: <a href="/students">Hier</a></div>
    <div>Teachers: <a href="/teachers">Hier</a></div>
    <div>Users: <a href="/users">Hier</a></div>
  `)
})

// app.use => implement router

  // MINI APIs
app.use( "/students", studentsRouter )
app.use( "/teachers",  teachersRouter )
app.use("/users", usersRouter)


// STARTUP API and listen for incoming requests on PORT 5000
const PORT = 5000
app.listen( PORT, () => {
  console.log(`Started on http://localhost:${PORT}`)
})
