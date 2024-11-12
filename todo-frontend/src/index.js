import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./components/Root";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import EditTodo from "./components/EditTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Todos />,
      },
      {
        path: "/priorities",
        element: <Todos />,
      },
      {
        path: "/new",
        element: <NewTodo />,
      },
      {
        path: "/edit/:todoId",
        element: <EditTodo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
