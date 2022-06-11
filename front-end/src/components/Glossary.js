import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import axios from "axios";

function Glossary() {
    const [glossary, getGlossary] = useState(([]))
    const url = 'http://localhost:3000/'

    useEffect(() => {
        axios.get(`${url}glossary`)
            .then((response) => {
                console.log(url)
                getGlossary(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h1 id="title-content">Glossário</h1>
                <table>
                    <tr id="sub-titulos">
                        <th>Entrada</th>
                        <th>Definição</th>
                    </tr>
                    {glossary.map(glossario => (
                        <tr>
                            <th>{glossario.entry}</th>
                            <th>{glossario.definition}</th>
                        </tr>
                    ))}
                </table>
            </main>
            <Footer />
        </div>
    )
}
export default Glossary