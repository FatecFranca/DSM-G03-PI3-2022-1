import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Questions() {
    const [questions, getQuestions] = useState([])
    const { id } = useParams()
    const url = 'http://localhost:3000/'
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
                {questions.map(questoes => (
                    <div class="cardGroup">

                        <h3>{questoes.number} )</h3>
                        <h3>{questoes.enunciation}</h3>
                        <form>
                            <input type="radio" name="radioSim" value="Y"/>Sim
                            <input type="radio" name="radioNao" value="N"/>Não
                            <input type="radio" name="radioP" value="P"/>Responder mais tarde
                            <input type="radio" name="radioX" value="X"/>Não aplicável
                            <br />Comentário<br /><textarea placeholder="Deixe seu comentário sobre essa questão" /*value={formQuestion.password}*/></textarea><br />
                            <button type="submit">Salvar Resposta</button>
                        </form>



                    </div>
                ))}

            </main>

            <Footer />
        </div>
    )
}
