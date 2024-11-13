import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./components/Root";
import Todos from "./components/Todos";
import NewAndEditTodo from "./components/NewAndEditTodo";

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
        element: <NewAndEditTodo />,
      },
      {
        path: "/edit/:todoId",
        element: <NewAndEditTodo />,
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
