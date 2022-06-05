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
        <h1>Bem Vindo de volta ao UX Helpers</h1>
        <p>Ultimas notícias sobre Tecnologia, ultimas tendencias de design e UX/UI</p>
        <div className="page-principal">
          <ul>
            <p>
              Alunos de faculdade publica, recria projeto que realiza avaliações de paginas web.
            </p>
            <div className="Cartoes">
              <div id="Cartao1">
                <div className="Conteudo">
                  <h1>Experiência do usuário - UX</h1>
                  <h5>Experiência do Usuário, a definição sobre o que é UX em português, consiste na
                    experiência gerada com as interações de um usuário com determinada solução ou produto
                    de uma marca.Considerando a transformação digital pela qual as empresas estão passando
                    nos últimos tempos, o conceito de Experiência do Usuário passou a ser bastante aplicado
                    nas soluções digitais, como uso de sites, aplicativos móveis, entre outras.</h5>
                </div>
              </div>
              <div className="Cartao">
                <div className="Conteudo">
                  <h1>Quais as áreas de UX?</h1>
                  <h5>.UX Research: tem como foco elaborar e realizar pesquisas com os usuários, a fim de
                    identificar comportamentos, necessidades, dores etc</h5>
                  <h5>.UX Developer: responsável pelo desenvolvimento de ferramentas e soluções</h5>
                  <h5>.UX Writing: área de redação especializada em melhorar a experiência do usuário
                    quanto aos textos e parte escrita das soluções oferecidas</h5>
                  <h5>.Product Design: trabalha a parte visual dos produtos, softwares, aplicativos etc</h5>
                  <h5>.UX Strategy: relaciona a experiência do usuário com a estratégia da empresa</h5>
                  <h5>.Usability Analyst: responsável pela análise e viabilidade das soluções oferecidas</h5>
                  <h5>.Usability Analyst: responsável pela análise e viabilidade das soluções oferecidas</h5>
                </div>
              </div>
              <div className="Cartao">
                <div className="Conteudo">
                    <h1>CARREIRA DE UX DESIGN</h1>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/-BCNPcu3eV0"
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