import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Logout() {
  const { reloadPage,loginRefresh } = useContext(AuthContext);
  const handleLogout = () => {
    axios.get("/logout").then(({ data }) => {
      reloadPage(!loginRefresh)
    });
  };
  return (
    <div className="absolute right-40 top-16">
      <div className="bg-white w-36 border-2 shadow-md flex gap-3 rounded-sm p-3 cursor-pointer hover:bg-blue-100">
        <i class="fa-solid fa-right-from-bracket fa-lg mt-3"></i>
        <p className="font-semibold text-lg" onClick={handleLogout}>
          Log Out
        </p>
      </div>
    </div>
  );
}
