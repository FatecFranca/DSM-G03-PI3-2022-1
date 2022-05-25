import React from 'react'

import './Home.css';
import '../Components.css'
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import Body from '../Body/Body';

function Home() {
  return (

    <div className="Home">
      <header class='header'>
        <Header />
      </header>
      <Menu />
      <main className="App-header">
        <div class="body">
          <main>
            <Body />
          </main>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
