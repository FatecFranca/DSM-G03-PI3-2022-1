import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import './QuestionGroups.css';
import '../Components.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VLibras from '@djpfs/react-vlibras';

function QuestionGroup() {
    const [groupQuestions, getGroupQuestions] = useState(([]))
    const url = 'http://localhost:3000/'

    useEffect(() => {
        axios.get(`${url}question-group`)
            .then((response) => {
                console.log(url)
                getGroupQuestions(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h2>Escolha o grupo de Questões</h2>
                <Link id="btn-voltar-avaliacao" to="/avaliacoes" >Voltar para Avaliações</Link>
                <div>
                    {groupQuestions.map(grupos => (
                        <div class="cardGroup">
                            <Link to={`/questoes/porgrupo/${grupos._id}`} class="menuitemcorpo">
                                <h4>{grupos.group}</h4>
                                <p>{grupos.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
            <VLibras forceOnload={true} />
        </div>
    )
}
export default QuestionGroup