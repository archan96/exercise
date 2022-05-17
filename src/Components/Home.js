import { Routes, Route, Link } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";
import {useEffect} from 'react';

function Home() {
  const user = useSelector((state) => state.user);
  const type = useSelector((state) => state.type);

  useEffect(() => {
      console.log(user);
  }, [user]);

  return (
    <div className="container home">
      <div className="iframe">
        <p>Users Table</p>
        <iframe src="/user" title="users"></iframe>
      </div>
      <div className="extrapannel">
        {user !== "" && type === "pro" && <p>Profile</p>}
        <p>Posts</p>
      </div>
    </div>
  );
}

export default Home;
