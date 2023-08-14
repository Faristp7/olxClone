import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Filter from "./components/Filter";
import Card from "./components/Card";
import axios from "axios";

export default function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  axios.defaults.withCredentials = true;
  return (
    <div className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Filter />
              <Card />
            </>
          }
        />
      </Routes>
    </div>
  );
}
