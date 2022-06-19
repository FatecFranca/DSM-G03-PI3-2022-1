import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"
import './Answer.css';
import '../Components.css'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from "../../api";
import VLibras from '@djpfs/react-vlibras';


function Answer() {

    const [answers, getAnswers] = useState(([]))
    const { id } = useParams()
    useEffect(() => {

        api.get(`answer/assessment/${id}`)
            .then((response) => {
                getAnswers(response.data)
                console.log(response.data)

            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);
/*
async function getGroupName(id) {

 const groups = await api.get(`question-group/${id}`)
      console.log(groups.data.group)
      sessionStorage.setItem('grupoexibido', groups.data.group)
      
}
*/
return (
    <div className="Home">
        <Header />
        <Menu />
        <main className="content">
            <h1>Respostas</h1>
            <Link id="btn-voltar-avaliacao" to="/questoes">Voltar para os Grupos</Link>
            <div>
                <table class="cardQuestion">
                    <tr>
                        <th class="cabecalho" id="colunaAvaliacao">Avaliação</th>
                        <th class="cabecalho" id="colunaGrupo">Grupo</th>
                        <th class="cabecalho" id="colunaNumQuestao">Questão nº</th>
                        <th class="cabecalho" id="colunaQuestao">Questão</th>
                        <th class="cabecalho" id="colunaResposta">Resposta</th>
                        <th class="cabecalho" id="comentario">Comentário</th>
                    </tr>
                    {answers.map(respostas => (
                        <tr>
                            <th class="table" id="colunaAvaliacao">{respostas.assessment.title}</th>
                            <th class="table" id="colunaGrupo">{respostas.question.group_name}</th>
                            <th class="table" id="colunaNumQuestao">{respostas.question.number}</th>
                            <th class="table" id="colunaQuestao">{respostas.question.enunciation}</th>
                            <th class="table" id="colunaResposta">{respostas.objective_answer}</th>
                            <th class="table" id="comentario">{respostas.comments}</th>
                        </tr>
                    ))}
                </table>
            </div>
        </main>
        <Footer />
        <VLibras forceOnload={true} />
    </div>
)
}
export default Answer