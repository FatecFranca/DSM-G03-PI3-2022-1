import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from "../api"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Questions() {
    const [question, getQuestions] = useState([]) // Pegar a Question
    const { id } = useParams()
    const url = 'http://localhost:3000/'
    //const navigate = useNavigate();
    const [assessment, getAssessment] = useState(localStorage.getItem('assessment')); // Usar localstorage
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

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h2>Escolha o grupo de Questões</h2>
                {question.map(questoes => (
                    <div class="cardQuestion">

                        <h3>{questoes.number}) {questoes.enunciation}</h3>
                        <form>
                            <input type="radio" name="radioSim" id="objctive" value="Y" onChange={e => setObjective_answer(e.target.value)}/>Sim
                            <input type="radio" name="radioNao" id="objctive" value="N" onChange={e => setObjective_answer(e.target.value)}/>Não
                            <input type="radio" name="radioP" id="objctive" value="P" onChange={e => setObjective_answer(e.target.value)}/>Responder mais tarde
                            <input type="radio" name="radioX" id="objctive" value="X" onChange={e => setObjective_answer(e.target.value)}/>Não aplicável
                            <br />Comentário<br /><textarea placeholder="Deixe seu comentário sobre essa questão" id="comment" value={comments} onChange={e => setObjective_answer(e.target.value)}></textarea><br />
                            <button type="submit">Salvar Resposta</button> 
                        </form>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    )
}