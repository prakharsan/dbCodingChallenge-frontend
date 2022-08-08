import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login';
import Books from './screens/Books';
import Trades from './screens/Trades';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/books" element={<Books />} />
      <Route path="/trades/:bookId" element={<Trades />} /> 
    </Routes>
  </Router>
  );
};

export default App;
