import React from "react";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("userInfo")).data.user.role === "admin"
    ) {
      alert("ctf solved");
    }
  }, []);
  return (
    <div>
      <h1>
        You are currently{" "}
        {JSON.parse(localStorage.getItem("userInfo")).data.user.role}
      </h1>
    </div>
  );
};

export default Dashboard;
