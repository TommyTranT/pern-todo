import React, { Fragment } from "react";
import { useState } from "react";
import axios from "axios";

const url = "/todos";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  // const onSubmitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { description };
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });

  //     window.location = "/";
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = { description };

    axios.post(url, body).then((res) => {
      setDescription("");
      window.location = "/";
    });
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
