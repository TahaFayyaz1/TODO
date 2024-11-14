import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  let { setAuthTokens, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  let loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();

    if (data) {
      localStorage.setItem("authTokens", JSON.stringify(data));
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      navigate("/");
    } else {
      alert("Something went wrong while logging in the user!");
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="password" name="password" placeholder="enter password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
