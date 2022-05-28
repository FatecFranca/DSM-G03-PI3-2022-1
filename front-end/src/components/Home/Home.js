import React from 'react'

import './Home.css';
import '../Components.css'
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

function Home() {
  return (

    <div className="Home">
      <Header />
      <Menu />
      <main className="App-header">
          <h1>Bem Vindo ao UX Helpers</h1> 
      </main>
      <Footer />
    </div>
  );
}

export default Home;
