import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import User from './Components/user';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
