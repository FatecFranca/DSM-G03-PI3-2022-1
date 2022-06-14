import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import './QuestionsToAnswer.css';
import '../Components.css'
import api from "../../api"
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VLibras from '@djpfs/react-vlibras';

export default function QuestionToAnswer() {
    const { id } = useParams()
    const navigate = useNavigate();
    const [assessment, getAssessment] = useState(sessionStorage.getItem('assessment'));
    const [question, setQuestions] = useState(id) // Pegar a Question
    const [questionId, getQuestionsId] = useState(([]))  // Pegar a Question
    const [objective_answer, setObjective_answer] = useState('');
    const [comments, setComments] = useState('');
    const [user, setUser] = useState('62a12f4204126eddb08cc7c4'); // Usar localstorage
    const [notify, setNotify] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();


        if (objective_answer == '') {
            setNotify('Ops, vai enviar o que sem responder?');
        } else {
            const newAnswer = await api.post(`answer/`, { assessment, question, objective_answer, comments });
            console.log(newAnswer)
            navigate(`/questoes/porgrupo/${sessionStorage.getItem('group')}`)
        }
    }

    useEffect(() => {
        api.get(`question/${id}`)
            .then((response) => {
                console.log(`question/${id}`)
                getQuestionsId(response.data)
                console.log(response.data)
                console.log(getQuestionsId)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <div class="cardQuestion">
                    <div>
                        <h3>{questionId.enunciation}</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li><input type="radio" name="objective_answer" id="objctive" value="Y" onChange={e => setObjective_answer(e.target.value)} /> Sim</li>
                            <li><input type="radio" name="objective_answer" id="objctive" value="N" onChange={e => setObjective_answer(e.target.value)} /> Não</li>
                            <li><input type="radio" name="objective_answer" id="objctive" value="P" onChange={e => setObjective_answer(e.target.value)} /> Responder mais tarde</li>
                            <li><input type="radio" name="objective_answer" id="objctive" value="X" onChange={e => setObjective_answer(e.target.value)} /> Não aplicável</li>
                        </ul>
                        <br />Comentário<br />
                        <textarea placeholder="Deixe seu comentário sobre essa questão" id="comment" value={comments} onChange={e => setComments(e.target.value)} /><br />
                        <button id="btn-salvar"type="submit">Salvar Resposta</button>
                    </form>
                </div>
            </main>
            <Footer />
            <VLibras forceOnload={true} />
        </div>
    )
}