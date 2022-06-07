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
        sessionStorage.setItem('assessment',assessment._id)
        navigate("/questoes")
        
    }

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h1>Avaliação detalhada</h1>
                    <div class="cardQuestion">
                        <h1>{assessment.title}</h1>
                        <h3>{assessment.description}</h3>
                        <button onClick={OpenQuestions}>Abrir Questões</button>
                        <Link to={`/avaliacao/respostas/${assessment._id}`}>Abrir Respostas</Link><br/>

                    </div>
            </main>
            <Footer />
        </div>
    )
}
export default AssessmentPanel