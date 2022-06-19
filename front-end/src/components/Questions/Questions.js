import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import './Questions.css';
import '../Components.css'
import api from "../../api"
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import VLibras from '@djpfs/react-vlibras';


export default function Questions() {
    const [question, getQuestions] = useState([]) // Pegar a Question
    const navigate = useNavigate()
    const [answer, getAnswers] = useState('')
    const { id } = useParams()
    //const navigate = useNavigate();
    const [assessment, getAssessment] = useState(sessionStorage.getItem('assessment'));
    const [objective_answer, setObjective_answer] = useState('');
    const [comments, setComments] = useState('');
    const [user, setUser] = useState(sessionStorage.getItem('userId')); // Usar localstorage
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

    function seRespondido(id) {
        api.get(`question/${sessionStorage.getItem('assessment')}/${id}`)
            .then((response) => {
                console.log(`question/${sessionStorage.getItem('assessment')}/${id}`)
                getAnswers(response.data)
                //console.log(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))

        if (answer.question.objective_answer !== "" || answer.question.setObjective_answer == null) {
            return "Respondido"
        }
        else return "À responder"
    }

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h2>Escolha uma Questão</h2>
                {question.map(questoes => (
                    <div class="cardQuestions">
                        <h3>{questoes.number}) {questoes.enunciation}</h3>
                        <Link to={`/questoes/${questoes._id}`}>Responder Questão {questoes.number}</Link><br />
                        <Link to="/questoes">Voltar para os Grupos</Link>
                    </div>
                ))}
            </main>
            <Footer />
            <VLibras forceOnload={true} />
        </div>
    )
}