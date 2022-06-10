import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import api from "../api"
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


export default function Questions() {
    const [question, getQuestions] = useState([]) // Pegar a Question
    const navigate = useNavigate()
    const [answer, getAnswers] = useState('')
    const { id } = useParams()
    //const navigate = useNavigate();
    const [assessment, getAssessment] = useState(sessionStorage.getItem('assessment'));
    const [objective_answer, setObjective_answer] = useState('');
    const [comments, setComments] = useState('');
    const [user, setUser] = useState('627da16564fbd6c660162c17'); // Usar localstorage
    const [notify, setNotify] = useState('');


    useEffect(() => {

        api.get(`question/group/${id}`)
            .then((response) => {
                console.log(`question/group/${id}`)
                getQuestions(response.data)
                //  console.log(response.data)
                sessionStorage.setItem('group', id)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

/*

    function seRespondido(id) {
        

            api.get(`question/${sessionStorage.getItem('assessment')}/${id}`)
                .then((response) => {
                    console.log(`answer/question/${sessionStorage.getItem('assessment')}/${id}`)
                    getAnswers(response.data)
                    //console.log(response.data)
    
                })
                .catch(error => console.error(`Erro: ${error}`))
                
            answer.map(respostas => {
                if(respostas.question.objective_answer !== "") return "cardQuestion2"
                else return "cardQuestion"

            })
            
    }
*/
    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h2>Escolha o grupo de Questões</h2>
                {question.map(questoes => (
                    <div class="cardQuestion">
                        
                        <h3>{questoes.number}) {questoes.enunciation}</h3>
                        <Link to={`/questoes/${questoes._id}`}>Responder Questão {questoes.number}</Link><br />
                        <Link to="/questoes">Voltar para os Grupos</Link>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    )
}