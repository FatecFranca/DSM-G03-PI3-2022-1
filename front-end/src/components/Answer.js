import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"
import './Components.css'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

import axios from "axios";


function Answer() {

    const [answers, getAnswers] = useState([])
    const { id } = useParams()
    const url = 'http://localhost:3000/'
    useEffect(() => {

        axios.get(`${url}answer/assessment/${id}`)
            .then((response) => {
                console.log(`${url}assessment/${id}`)
                getAnswers(response.data)
                console.log(response.data)
            })
            .catch(error => console.error(`Erro: ${error}`))
    }, []);

    return (
        <div className="Home">
            <Header />
            <Menu />
            <main className="content">
                <h1>Aqui será as respostas</h1>
                <div>

                    {answers.map(respostas => (
                        <div class="cardGroup">
                                {respostas.objective_answer} -
                                {respostas.comments}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default Answer