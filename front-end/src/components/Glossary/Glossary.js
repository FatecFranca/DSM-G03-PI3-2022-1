import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import './Glossary.css';
import '../Components.css'
import { useEffect, useState } from "react";
import axios from "axios";
import VLibras from '@djpfs/react-vlibras';

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
            <VLibras forceOnload={true} />
        </div>
    )
}
export default Glossary