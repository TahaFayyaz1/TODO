import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Todo({ todo, onDelete }) {
  const [priority, setPriority] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [label, setLabel] = useState(
    `${!priority ? "Add to Priority" : "Remove from Priority"}`,
  );
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isDeleting, setIsDeleting] = useState(false); //deals with the delete animation

  useEffect(() => {
    const [date, time] = todo.datetime.split("T");
    setDate(date);
    setTime(time.substr(0, 5));
  }, [todo]);

  const DeleteButton = () => {
    setIsDeleting(true); // Trigger the deletion animation
    setTimeout(() => {
      fetch(`http://localhost:8000/todo/${todo.id}`, { method: "DELETE" }).then(
        (response) => {
          if (response.ok) {
            onDelete(todo.id);
          }
        },
      );
    }, 200); // Wait for the animation to complete before deleting
  };

  const PriorityButton = () => {
    if (priority === false) {
      fetch(`http://localhost:8000/priority/${todo.id}`, { method: "POST" });
      setPriority(!priority);
      setLabel("Remove from Priority");
    } else {
      fetch(`http://localhost:8000/priority/${todo.id}`, { method: "DELETE" });
      setPriority(!priority);
      setLabel("Add to Priority");
    }
  };

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: todo.title,
      description: todo.description,
      completed: !completed,
    }),
  };

  const completeButton = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/todo/${todo.id}`, requestOptions).then(() => {
      setCompleted(!completed);
    });
  };

  return (
    <li
      className={`m-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-100 hover:shadow-md dark:bg-gray-800 dark:shadow-gray-700 ${
        isDeleting ? "opacity-0 transition-opacity duration-200" : ""
      }`}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input
              checked={completed}
              onChange={completeButton}
              type="checkbox"
              className="h-6 w-6 rounded-md border-gray-300 dark:border-gray-600"
            />
            <h3
              className={`text-xl font-semibold ${
                completed
                  ? "text-gray-400 line-through dark:text-gray-500"
                  : "text-gray-800 dark:text-gray-200"
              }`}
            >
              {todo.title}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                priority
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={PriorityButton}
            >
              {label}
            </button>
            <Link
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              to={`edit/${todo.id}`}
            >
              Edit
            </Link>
            <button
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              onClick={DeleteButton}
            >
              Delete
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {todo.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <p>
            Created On: {date} | {time}
          </p>
          {priority && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
              Priority
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

function Todos() {
  const [todos, setTodos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      fetch("http://localhost:8000/todo")
        .then((response) => response.json())
        .then((data) => {
          setTodos(data);
        });
    }
    //fetches and converts data for the priority list page
    else {
      fetch(`http://localhost:8000/priority`)
        .then((response) => response.json())
        .then((data) => {
          setTodos(data.map((item) => item.title));
        });
    }
  }, [location, todos]);

  //updates the Todos so that onDelete the list is rerendered
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ul className="m-10">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
}

export default Todos;
