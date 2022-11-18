import { useEffect } from "react";
import { Fragment } from "react";

const url = "/todos"

const ListTodos = () => {
  const getTodos = async () => {
    try {

      const response = await fetch(url)
      const jsonData = await response.json() // Parse the data from json

      console.log(response)
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
      </table>
    </Fragment>
  );
};

export default ListTodos;
