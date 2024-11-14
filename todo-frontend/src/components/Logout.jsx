import React, { useEffect, useContext } from "react";
import AuthContext from "./context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function Logout() {
  let { setUser, setAuthTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("authTokens");
    setAuthTokens(null);
    setUser(null);
    navigate("/");
  }, [navigate, setUser, setAuthTokens]);

  return <div>Logout</div>;
}

export default Logout;
