import { Routes, Route, Link } from "react-router-dom";
import "./modalOne.css";
import Home from "./Home";
import axios from "axios";
import { useState, useEffect } from "react";

function ModalTwo(props) {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${props.userid}`)
      .then((res) => {
        let data = res.data;
        data = data.flat();
        setposts(data);
        //   console.log(persons);
      });
    // console.log(user);
  }, []);
  return (
    <>
      <Home />
      <div className="modalOne">
        <div className="moheader">
          <p className="modalHeader">Posts</p>
          <p className="closebtn">
            <a href="/">X</a>
          </p>
        </div>

        <div className="moName">
          <p>{props.name}</p>
        </div>

        {posts.map((i) => (
          <div className="post">
            <p>{i.title}</p>
            <p>{i.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ModalTwo;
