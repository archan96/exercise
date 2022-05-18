import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./home.css";
import { updateUser } from "../store/action";
import ModalOne from "./modalOne";

function Home(props) {
  // const user = useSelector((state) => state.user);
  // const [contentRef, setContentRef] = useState(null);

  // // const dispatch = useDispatch();
  // // useEffect(() => {
  // //   console.log("home" + props.id);
  // // }, [props]);

  // let mountNode = contentRef?.contentWindow?.document;
  // const handleFocus = () => {
  //   console.log(mountNode);
  //   mountNode.getElementById("1").addEventListener(
  //     "click",
  //     () => {
  //       console.log("one clicked");
  //     },
  //     false
  //   );
  // };
  // useEffect(() => {
  //   // console.log("home" + user);

  //   window.addEventListener("focus", () => handleFocus());
  // }, []);

  // const button = iframe.contentWindow.getElementById("1");

  return (
    <div className="container home">
      <div className="iframe">
        <p>Users Table</p>
        <iframe src="/user" title="users" name="myframe" id="iframe"></iframe>
      </div>
      <div className="extrapannel">
        <p>Profile</p>
        <p>Posts</p>
      </div>
    </div>
  );
}

export default Home;
