import { Fragment } from "react";

const ListTodos = () => {
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>July</td>
            <td>July</td>
            <td>July</td>
          </tr>
          <tr>
            <td>July</td>
            <td>July</td>
            <td>July</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
