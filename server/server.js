const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8080;

// Connect to database
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); //req.body

// Routes //

// create a todo
// our req.body will be our description which will be our VALUE($1)
// res.json returns first Obj in Array which is the id and description from db
app.post("/todos", async(req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]
    );

    res.json(newTodo.rows[0]); 
  } catch (error) {
    console.error(error.message);
  }
})

// get all todo
app.get("/todos", async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo")
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message)
  }
})

// get a specific todo
app.get("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

    res.json(todo.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

// delete a todo
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})