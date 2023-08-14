import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";
import HomePage from "./pages/HomePage";

export default function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;
  const { user, setUser, loginRefresh } = useContext(AuthContext);
  console.log(user);
  const checkLoggedIn = async () => {
    const { data } = await axios.get("/login/check");
    if (data.loggedIn) {
      setUser({ ...data.user, login: true });
    } else {
      setUser({ login: false });
    }
  };
  useEffect(() => {
    checkLoggedIn();
  }, [loginRefresh]);
  return (
    <div className="relative">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
