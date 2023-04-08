import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Router, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";

import SignUp from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>

      {/* <Login /> */}
    </div>
  );
}

export default App;
