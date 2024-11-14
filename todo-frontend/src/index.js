import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./components/Root";
import Todos from "./components/Todos";
import NewAndEditTodo from "./components/NewAndEditTodo";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import Logout from "./components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Todos />,
          </PrivateRoute>
        ),
      },
      {
        path: "/priorities",
        element: (
          <PrivateRoute>
            <Todos />,
          </PrivateRoute>
        ),
      },
      {
        path: "/new",
        element: (
          <PrivateRoute>
            <NewAndEditTodo />,
          </PrivateRoute>
        ),
      },
      {
        path: "/edit/:todoId",
        element: (
          <PrivateRoute>
            <NewAndEditTodo />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
