import { useState } from "react";
import { Fragment } from "react";
import axios from "axios";

const url = "/todos";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function
  // const updateDescription = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { description };
  //     const response = await fetch(`${url}/${todo.todo_id}`, {
  //       method: "PUT",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify(body),
  //     });

  //     window.location = "/";
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const updateDescription = (e) => {
    e.preventDefault();
    const body = { description };
    axios.put(`${url}/${todo.todo_id}`, body).then((res) => {
      window.location = "/";
    });
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`} // Targets which data to show. Targeting modal id
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${todo.todo_id}`}
        // Click outside the modal
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              {/* This is the little 'x' on the modal */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description} // Current state
                onChange={(e) => setDescription(e.target.value)} // Change state to new value in input
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)} // POST fetch request to db
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
