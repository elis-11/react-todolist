import React, { useState } from "react";

const Form=(props)=> {
  const [name, setName] = useState("");

  const handleSubmit=(e)=> {
    e.preventDefault();
    if (!name.trim()) {
      return;
  }
  props.addTask(name);
  setName("");
}

  const handleChange=(e)=> {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        placeholder="What needs to be done?"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
