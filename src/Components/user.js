import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./user.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/action";

function User(props) {
  const [user, setuser] = useState([]);

  // const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      let persons = res.data;
      persons = persons.flat();
      setuser(persons);
      //   console.log(persons);
    });
    // console.log(user);
  }, []);

  return (
    <div className="container">
      <table>
        <tr className="tr">
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th></th>
          <th></th>
        </tr>
        {user.map((i) => (
          <tr className="tr">
            <td>{i.name}</td>
            <td>{i.username}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
            <td>{i.website}</td>
            <td className="vp" id={i.id}>
              <a href={"/" + i.username} target="_top">
                View Profile
              </a>
            </td>
            <td className="vpost">
              <a href={"/posts/" + i.username} target="_top">
                View Posts
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default User;
