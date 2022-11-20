import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import EditTodo from "./EditTodo";
import axios from "axios";

const url = "/todos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    });
  };

  const getTodos = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
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
                {/* Passing down todo(id, description) to be able to use it in EditTodo */}
                <EditTodo todo={todo} />
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
