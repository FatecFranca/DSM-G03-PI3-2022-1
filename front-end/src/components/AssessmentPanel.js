import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";


function AssessmentPanel() {

    const [assessment, getAssessment] = useState([])
    const navigate = useNavigate();
    const { id } = useParams()
    const url = 'http://localhost:3000/'

    useEffect(() => {
        axios.get(`${url}assessment/${id}`)
            .then((response) => {
                console.log(`${url}assessment/${id}`)
                getAssessment(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    function OpenQuestions() {
        sessionStorage.setItem('assessment', assessment._id)
        navigate("/questoes")
    }

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h1>Avaliação detalhada</h1>
                <div class="cardQuestion"> {/* classe do css diferente para não mudar os outros cards da pagina */}
                    <h2>{assessment.title}</h2>
                    <p>{assessment.description}</p>
                    <div id="conteudo-card">
                        <button id="btn-questao" onClick={OpenQuestions}>Abrir Questões</button>
                        <Link id="btn-respostas" to={`/avaliacao/respostas/${assessment._id}`}>Abrir Respostas</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default AssessmentPanel