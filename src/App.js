import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import User from "./Components/user";
import Home from "./Components/Home";
import ModalOne from "./Components/modalOne";
import ModalTwo from "./Components/modalTwo";
import { useState, useEffect } from "react";
import axios from "axios";
import { isDOMComponent } from "react-dom/test-utils";

function App() {
  const [user, setuser] = useState("");
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      let persons = res.data;
      persons = persons.flat();
      setusers(persons);
      //   console.log(persons);
    });
    // console.log(user);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home id={user} setid={setuser} />} />
        <Route path="user" element={<User id={user} setid={setuser} />} />
        {users.map((i) => (
          <Route path={i.username} element={<ModalOne userid={i.id} />} />
        ))}
        {users.map((i) => (
          <Route
            path={"posts/" + i.username}
            element={<ModalTwo userid={i.id} name={i.name} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
