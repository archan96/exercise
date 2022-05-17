import { Routes, Route, Link } from "react-router-dom";
import "./home.css";
import { useSelector, connect } from "react-redux";
import { useEffect, useMemo, useRef } from "react";

function Home(props) {
  const user = useSelector((state) => state.user);
  const type = useSelector((state) => state.type);

  useEffect(() => {
    console.log(props.id);
  }, [props.id]);

  return (
    <div className="container home">
      <div className="iframe">
        <p>Users Table</p>
        <iframe
          src="/user"
          title="users"
          name="myframe"
        ></iframe>
      </div>
      <div className="extrapannel">
        {user !== "" && type === "pro" && <p>Profile</p>}
        <p>Posts</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  // any props you need else
});

export default connect(mapStateToProps)(Home);
