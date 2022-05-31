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
                <div>


                {groupQuestions.map(grupos => (
                    <button>

                        <h3>{grupos.group}</h3>
                        <h5>{grupos.description}</h5>

                    </button>

                    
                    
                    ))}
                </div>
                    
            </main>

            <Footer />
        </div>
    )
}
export default QuestionGroup