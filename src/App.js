import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
