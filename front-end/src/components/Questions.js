import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from "../api"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Questions() {
    const [question, getQuestions] = useState([]) // Pegar a Question
    const navigate = useNavigate()
    const [questionToAnswer, getQuestionsToAnswer] = useState('')
    const { id } = useParams()
    const url = 'http://localhost:3000/'
    //const navigate = useNavigate();
    const [assessment, getAssessment] = useState(sessionStorage.getItem('assessment')); 
    const [objective_answer, setObjective_answer] = useState('');
    const [comments, setComments] = useState('');
    const [user, setUser] = useState('627da16564fbd6c660162c17'); // Usar localstorage
    const [notify, setNotify] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        

        if(objective_answer == '') {
            setNotify('Ops, vai enviar o que sem responder?');
        } else {
            const newAnswer = await api.post('answer', { assessment, question, objective_answer, comments });
            console.log(newAnswer)
        }

}

    useEffect(() => {

        axios.get(`${url}question/group/${id}`)
            .then((response) => {
                console.log(`${url}question/group/${id}`)
                getQuestions(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    function OpenOneQuestion() {
        navigate(`/questoes/${id}`)
        
    }

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h2>Escolha o grupo de Questões</h2>
                {question.map(questoes => (
                    <div class="cardQuestion">
                        {sessionStorage.setItem(`idQuestion${questoes._id}`,questoes._id)}
                        {sessionStorage.setItem(`enunciation${questoes._id}`,questoes.enunciation)}
                            
                        <h3>{questoes.number}) {questoes.enunciation}</h3>{questoes._id}
                        <button onClick={OpenOneQuestion}>Responder Questão {questoes.number}</button>
                    </div>
                ))}
            </main> 
            <Footer />
        </div>
    )
}