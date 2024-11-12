import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: title, description: description }),
  };

  const Submit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/todo", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(() => {
        setTitle("");
        setDescription("");
        navigate("/");
      });
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
      <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Add New Todo
      </h2>
      <form onSubmit={Submit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-gray-500"
            placeholder="Enter todo title"
            autoComplete="off"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-800 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:focus:border-gray-500"
            placeholder="Enter todo description"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-gray-600 px-4 py-2 text-white transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodo;
