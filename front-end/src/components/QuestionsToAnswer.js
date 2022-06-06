import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from "../api"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function QuestionToAnswer() {
    const { id } = useParams()
    const url = 'http://localhost:3000/'
    const navigate = useNavigate();
    const [assessment, getAssessment] = useState(sessionStorage.getItem('assessment'));
    const [question, setQuestions] = useState(id) // Pegar a Question
    const [questionId, getQuestionsId] = useState(([]))  // Pegar a Question
    const [objective_answer, setObjective_answer] = useState('');
    const [enunciation, setEnunciation] = useState('');
    const [comments, setComments] = useState('');
    const [user, setUser] = useState('627da16564fbd6c660162c17'); // Usar localstorage
    const [notify, setNotify] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();


        if (objective_answer == '') {
            setNotify('Ops, vai enviar o que sem responder?');
        } else {
            const newAnswer = await api.post(`answer/`, { assessment, question, objective_answer, comments });
            console.log(newAnswer)
        }

    }

    useEffect(() => {

        axios.get(`${url}question/${id}`)
            .then((response) => {
                console.log(`${url}question/${id}`)
                getQuestionsId(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);



    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h2>Escolha o grupo de Questões</h2>
                <div>
                    <h3>{questionId._id}</h3>
                </div>
                <div class="cardQuestion">



                    <form onSubmit={handleSubmit}>
                        <input type="radio" name="objective_answer" id="objctive" value="Y" onChange={e => setObjective_answer(e.target.value)} />Sim
                        <input type="radio" name="objective_answer" id="objctive" value="N" onChange={e => setObjective_answer(e.target.value)} />Não
                        <input type="radio" name="objective_answer" id="objctive" value="P" onChange={e => setObjective_answer(e.target.value)} />Responder mais tarde
                        <input type="radio" name="objective_answer" id="objctive" value="X" onChange={e => setObjective_answer(e.target.value)} />Não aplicável
                        <br />Comentário<br /><input type="text" placeholder="Deixe seu comentário sobre essa questão" id="comment" value={comments} onChange={e => setComments(e.target.value)} /><br />
                        <button type="submit">Salvar Resposta</button>
                    </form>

                </div>

            </main>
            <Footer />
        </div>
    )
}