import React from 'react'

import '../Components.css'
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Menu />
      <main className="content">
          <h1>Bem Vindo de volta ao UX Helpers</h1>
          <p>Ultimas notícias sobre Tecnologia, ultimas tendencias de design e UX/UI</p>
          <div className="page-principal">
            <ul>
            <p>
              Alunos de faculdade publica, recria projeto que realiza avaliações de paginas web.
            </p>
            </ul>
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
