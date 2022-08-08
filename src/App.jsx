import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login';
import Books from './screens/Books';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  </Router>
  );
};

export default App;
