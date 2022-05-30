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
                    <h3>Projeto desenvolvido para evoluir a idéia do ErgoList</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Diuretics paradis num copo é motivis de denguis.Paisis, filhis, espiritis santis.In elementis mé pra quem é amistosis quis leo.</p>
            </main>
            <Footer />
        </div>
    )
}
export default About