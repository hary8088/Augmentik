import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Comp/Main/main"
import Login from "./Comp/Login/login"
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
