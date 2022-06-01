import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                <div>


                    {groupQuestions.map(grupos => (
                        <div class="cardGroup">
                            <Link to={`/questoes/porgrupo/${grupos._id}`} class="menuitemcorpo">
                                {grupos.group} - 
                                {grupos.description}
                            </Link>

                        </div>
                    ))}
                </div>

            </main>

            <Footer />
        </div>
    )
}
export default QuestionGroup