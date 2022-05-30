import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import axios from "axios";

function QuestionGroup() {
    const [groupQuestions, getGroupQuestions] = useState(([]))
    const url = 'http://localhost:3000/'

    useEffect(() => {
        axios.get(`${url}question-group`)
            .then((response) => {
                console.log(url)
                getGroupQuestions(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h2>Escolha o grupo de Questões</h2>
                <table>
                    <tr>
                        <th>Grupo</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>

                {groupQuestions.map(grupos => (
                    <tr class="group">
                        <th>{grupos.group}</th>
                        <th>{grupos.description}</th>
                        <th><button href="#">Questões de <br/> {grupos.group}</button></th>

                    </tr>
                    
                    ))}
                    </table>
            </main>

            <Footer />
        </div>
    )
}
export default QuestionGroup