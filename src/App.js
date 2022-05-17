import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import User from "./Components/user";
import Home from "./Components/Home";
import { useState } from "react";

function App() {
  const [user, setuser] = useState("tara");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home id={user} setuser={setuser} />} />
        <Route path="user" element={<User id={user} setuser={setuser} />} />
      </Routes>
    </div>
  );
}

export default App;
