import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import EditTodo from "./EditTodo";

const url = "/todos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // delete todo functoin
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json(); // Parse the data from json. This is our db Array

      setTodos(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            // every todo has same key from the db array
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)} // specify the id of the todo for the function
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
