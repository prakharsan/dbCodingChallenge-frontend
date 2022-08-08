import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Books from './Books';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Books/>
      <Footer/>
    </div>
   
  );
}

export default HomePage;