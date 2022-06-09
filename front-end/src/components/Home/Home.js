import React from 'react'

import '../Components.css'
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Menu />
      <main className="content">
        <h1>Bem-vindo de volta ao UX Helpers</h1>
        <p>Últimas notícias sobre Tecnologia, últimas tendências de design e UX/UI</p>
        <div className="page-principal">
          <ul>
            <div className="Cartoes">
              <div id="Cartao1">
                <div className="Conteudo">
                  <h3>Experiência do usuário - UX</h3>
                  <p>Experiência do Usuário, a definição sobre o que é UX em português consiste na
                    experiência gerada com as interações de um usuário com determinada solução ou produto
                    de uma marca. Considerando a transformação digital pela qual as empresas estão passando
                    nos últimos tempos, o conceito de Experiência do Usuário passou a ser bastante aplicado
                    nas soluções digitais, como uso de sites, aplicativos móveis, entre outras.</p>
                </div>
              </div>
              <div className="Cartao">
                <div className="Conteudo">
                  <h3>Quais as áreas de UX?</h3>
                  <h5>.UX Research</h5>
                  <h5>.UX Developer</h5>
                  <h5>.UX Writing</h5>
                  <h5>.Product Design</h5>
                  <h5>.UX Strategy</h5>
                  <h5>.Usability Analyst</h5>
                  <h5>.Usability Analyst</h5>
                </div>
              </div>
              <div className="Cartao">
                <div className="Conteudo">
                    <h3>CARREIRA DE UX DESIGN</h3>
                    <iframe width="100%" height="254" src="https://www.youtube.com/embed/-BCNPcu3eV0"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home;