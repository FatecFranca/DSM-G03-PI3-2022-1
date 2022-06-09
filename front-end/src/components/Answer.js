import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from "axios";


function Answer() {

    const [answers, getAnswers] = useState(([]))
    const { id } = useParams()
    const url = 'http://localhost:3000/'
    useEffect(() => {

        axios.get(`${url}answer/assessment/${id}`)
            .then((response) => {
                console.log(`${url}answer/assessment/${id}`)
                getAnswers(response.data)
                console.log(response.data)

            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h1>Respostas</h1>
                <div>
                <Link to="/questoes">Voltar para os Grupos</Link>
                    <table class="cardQuestion">
                        <tr>
                            <th class="table">Avaliação</th>
                            <th class="table">Questão</th>
                            <th class="table">Resposta</th>
                            <th class="table">Comentário</th>
                        </tr>
                        {answers.map(respostas => (
                            <tr>
                                <th class="table">{respostas.assessment.title}</th>
                                <th class="table">{respostas.question.enunciation  }</th>
                                <th class="table">{respostas.objective_answer}</th>
                                <th class="table">{respostas.comments}</th>
                            </tr>
                        ))}
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Answer