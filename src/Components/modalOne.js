import { Routes, Route, Link } from "react-router-dom";
import "./modalOne.css";
import Home from "./Home";
import axios from "axios";
import { useState, useEffect } from "react";

function ModalOne(props) {
  const [user, setuser] = useState([]);
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
    <>
      <Home />
      <div className="modalOne">
        <div className="moheader">
          <p className="modalHeader">Profile</p>
          <p className="closebtn">
            <a href="/">X</a>
          </p>
        </div>

        <div className="moName">
          <p>
            {user.filter((er) => er.id === props.userid).map((i) => i.name)}
          </p>
        </div>

        <div className="moEmail">
          <p>Email:</p>
          <p>
            {user.filter((er) => er.id === props.userid).map((i) => i.email)}
          </p>
        </div>
        <div className="moAdd">
          <p>Address:</p>
          <p>
            {user
              .filter((er) => er.id === props.userid)
              .map((i) => i.address.street)}
            ,{" "}
            {user
              .filter((er) => er.id === props.userid)
              .map((i) => i.address.city)}
            ,{" "}
            {user
              .filter((er) => er.id === props.userid)
              .map((i) => i.address.zipcode)}{" "}
          </p>
        </div>

        <div className="moEmail phone">
          <p>Phone:</p>
          <p>
            {user.filter((er) => er.id === props.userid).map((i) => i.phone)}
          </p>
        </div>
        <div className="moEmail phone">
          <p>Website:</p>
          <p>
            {user.filter((er) => er.id === props.userid).map((i) => i.website)}
          </p>
        </div>
        <div className="moEmail phone">
          <p>Company Name:</p>
          <p>
            {user
              .filter((er) => er.id === props.userid)
              .map((i) => i.company.name)}
          </p>
        </div>
      </div>
    </>
  );
}

export default ModalOne;
