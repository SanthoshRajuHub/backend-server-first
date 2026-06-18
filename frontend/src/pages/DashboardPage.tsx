import { useState } from "react";
import Navbar from "../components/Navbar";

export default function DashboardPage(){
    const [logout,setLogout]=useState(false);
    return (
       <div>
         <h1>Dashboard</h1>
        <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
>
  Logout
</button>
       </div>
    );
}