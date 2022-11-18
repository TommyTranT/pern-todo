import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";

const url = "/todos"

const ListTodos = () => {
  const [todos, setTodos] = useState([]); 

  const getTodos = async () => {
    try {

      const response = await fetch(url)
      const jsonData = await response.json() // Parse the data from json. This is our db Array


      setTodos(jsonData)
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
          {todos.map(todo => (
            <tr>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
