import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'

function About() {
    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h1>Sobre o UX Helpers</h1>
                <h3>Projeto desenvolvido para ajudar profissionais de UX e designers</h3>
                <p>
                    O Ergolist foi um site criado no Brasil com o intuito de ajudar os profissionais responsáveis pela avaliação de sistemas e sites. Detalhava como cada item tinha que ser feito, respondido cada questionário e, no final, mostrava o resumo das avaliações.
                </p>
                <p>
                    Contudo, o Ergolist apresentava alguns pontos a serem melhorados e não se sabe porque foi tirado do ar por seus criadores e colaboradores, que não lançaram mais nenhuma versão do projeto. Muitos que o utilizavam, ficaram sem uma ferramenta que lhes prestasse auxílio neste ramo.
                </p>
                <p>
                    Assim, a fim de preencher uma lacuna deixada pela extinção do Ergolist, surge a possibilidade de criação de uma ferramenta, baseada no Ergolist, porém corrigindo os erros ora existentes e oferecendo a possibilidade de criação de uma rede de negócios entre avaliadores e donos/gestores de sistemas, uma vez que nessa nova ferramenta haverá a funcionalidade disponível de deixar avaliações salvas em um espaço público.
                </p>
                <p>
                    Este novo site será chamado de UX-HELPERS, que vai abranger esse espaço e tentar inovar com as ferramentas e conhecimentos existentes, observando as normas e conceitos para as avaliações.
                </p>
            </main>
            <Footer />
        </div>
    )
}
export default About