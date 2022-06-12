import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from "../api";
import VLibras from '@djpfs/react-vlibras';


function AssessmentPanel() {

    const [assessment, getAssessment] = useState([])
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        api.get(`assessment/${id}`)
            .then((response) => {

                getAssessment(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    function OpenQuestions() {
        sessionStorage.setItem('assessment', assessment._id)
        navigate("/questoes")
    }

    function OpenUpdate() {
        sessionStorage.setItem('assessment', assessment._id)
        navigate(`/avaliacao/editar/${assessment._id}`)
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
                        <button id="btn-editar" onClick={OpenUpdate}>Editar</button>
                    </div>
                </div>
            </main>
            <Footer />
            <VLibras forceOnload={true} />
        </div>
    )
}
export default AssessmentPanel