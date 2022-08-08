import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login';
import HomePage from './screens/HomePage';
import Trades from './screens/Trades';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<HomePage />} />
      <Route path="/trades/:bookId" element={<Trades />} /> 
    </Routes>
  </Router>
  );
};

export default App;
