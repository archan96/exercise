import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./user.css";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/action";

function User(props) {
  const [user, setuser] = useState([]);

  const dispatch = useDispatch();

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
            <td
              className="vp"
              id={"vp" + i.id}
              onClick={() => props.setuser(i.id)}
            >
              View Profile
            </td>
            <td
              className="vpost"
              onClick={() => dispatch(updateUser(i.id, "post"))}
            >
              View Posts
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default User;
